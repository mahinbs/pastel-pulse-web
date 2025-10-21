import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  websiteHandle: string;
  industry: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");

    try {
      const emailBody = `
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company/Brand: ${data.companyName}
Website/Social Handle: ${data.websiteHandle || "Not provided"}
Industry: ${data.industry}

What they're looking for:
${data.message}
      `.trim();

      const response = await fetch(
        "https://send-mail-redirect-boostmysites.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body: emailBody,
            name: "Piquefame",
            subject: `New Contact Form Submission from ${data.fullName}`,
            to: "Piquefame@gmail.com",
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        alert(
          "Thanks for reaching out! We'll connect with you within 24 hours."
        );
      } else {
        setSubmitStatus("error");
        alert("Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      alert("Something went wrong. Please try again or contact us directly.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="p-16 shadow-2xl border-0 bg-white relative overflow-hidden rounded-3xl">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-50"></div>

            {/* Title */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                CONTACT US
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Ready to transform your brand? Let's discuss your project and
                create something extraordinary together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Side - Enhanced Contact Form */}
              <div className="space-y-6">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  {/* Name Field */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      className={`w-full px-5 py-3 border-2 ${
                        errors.fullName ? "border-red-500" : "border-gray-200"
                      } rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      className={`w-full px-5 py-3 border-2 ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      } rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register("phone")}
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  {/* Company / Brand Name */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company / Brand Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your company or brand name"
                      {...register("companyName", {
                        required: "Company/Brand name is required",
                      })}
                      className={`w-full px-5 py-3 border-2 ${
                        errors.companyName ? "border-red-500" : "border-gray-200"
                      } rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white`}
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.companyName.message}
                      </p>
                    )}
                  </div>

                  {/* Website / Social Media Handle */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Website / Social Media Handle
                    </label>
                    <input
                      type="text"
                      placeholder="www.yourwebsite.com or @yourbrand"
                      {...register("websiteHandle")}
                      className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  {/* Industry / Business Type */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Industry / Business Type *
                    </label>
                    <select
                      {...register("industry", {
                        required: "Please select your industry",
                      })}
                      className={`w-full px-5 py-3 border-2 ${
                        errors.industry ? "border-red-500" : "border-gray-200"
                      } rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white`}
                    >
                      <option value="">Select your industry</option>
                      <option value="skincare">Skincare</option>
                      <option value="restaurants">Restaurants</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="boutiques">Boutiques</option>
                      <option value="others">Others</option>
                    </select>
                    {errors.industry && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.industry.message}
                      </p>
                    )}
                  </div>

                  {/* What are you looking for? */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What are you looking for? *
                    </label>
                    <textarea
                      placeholder="Tell us about the services you need..."
                      rows={4}
                      {...register("message", {
                        required: "Please tell us what you're looking for",
                      })}
                      className={`w-full px-5 py-3 border-2 ${
                        errors.message ? "border-red-500" : "border-gray-200"
                      } rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <span className="flex items-center justify-center gap-3">
                        {isSubmitting ? "Sending..." : "Get In Touch"}
                        <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <ArrowRight className="h-5 w-5 text-white" />
                        </div>
                      </span>
                    </Button>
                  </div>
                </form>
              </div>

              {/* Right Side - Contact Information */}
              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl border-2 border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Prefer to reach out directly?
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Here are all the ways to get in touch with us.
                  </p>

                  {/* Phone */}
                  <div className="mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                        <p className="text-lg font-semibold text-orange-600 mb-1">
                          +91 7358250143
                        </p>
                        <p className="text-sm text-gray-500">
                          Mon-Sat 9am-7pm IST
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                        <p className="text-lg font-semibold text-orange-600 mb-1">
                          Piquefame@gmail.com
                        </p>
                        <p className="text-sm text-gray-500">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

