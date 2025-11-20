import { ArrowRight, Star, CheckCircle, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import heroGif from "@/assets/hero-section-gif.gif";
import whoWeWorkWithImage from "@/assets/who-we-work-with.png";
import brandingSolutionIcon from "@/assets/svgs/branding_solution.png";
import socialMediaMarketingIcon from "@/assets/svgs/social_media_marketing.png";
import webDesignIcon from "@/assets/svgs/web_design.png";
import creativeContentIcon from "@/assets/svgs/creative_content.png";
import video from "../assets/videos/ad.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      iconUrl: brandingSolutionIcon,
      title: "Branding Solutions",
      description:
        "We give your brand its voice (communication), its game plan (strategy), and its signature look (identity). In short — we don't just brand, we give your business a brand new personality.",
      gradient: "from-orange-600 to-amber-500",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
      highlighted: true,
    },
    {
      iconUrl: socialMediaMarketingIcon,
      title: "Social Media Management",
      description:
        "We don't just 'post' — we make sure your brand never gets ghosted. \"From Likes to Leads\", we turn scrolling into strolling towards your business.",
      gradient: "from-orange-600 to-amber-500",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
    {
      iconUrl: webDesignIcon,
      title: "Web Designing",
      description:
        "Your website is your brand's first handshake. At PIQUEFAME, we design websites that don't just look good, but work smart — blending creativity with functionality to turn clicks into connections.",
      gradient: "from-orange-600 to-amber-500",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
    {
      iconUrl: creativeContentIcon,
      title: "Content Creation",
      description:
        "From catchy captions to scroll-stopping visuals, we craft stories that spark curiosity, spark conversations, and grow communities. Be it a reel that hooks, a post that spreads, or a campaign that trends — we make your brand unforgettable.",
      gradient: "from-orange-600 to-amber-500",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
  ];

  const partners = [
    {
      name: "Meta Business Partner",
      imageUrl:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758822891/MBP_wvxhjm.png",
    },
    {
      name: "Google Partner",
      imageUrl:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/FBB_redygb.png",
    },
    {
      name: "Instagram",
      imageUrl:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758822891/instaa_odstlk.png",
    },
    {
      name: "Facebook",
      imageUrl:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/FBB_redygb.png",
    },
    {
      name: "Google My Business",
      imageUrl:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/GMB-1_znrh6k.png",
    },
    {
      name: "Google Cloud",
      imageUrl:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/GC-1_cobjg6.png",
    },
    {
      name: "WordPress",
      imageUrl:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/wp-1_vyt9kh.png",
    },
  ];

  const tiltDefaults = {
    tiltEnable: false,
    glareEnable: false,
    gyroscope: false,
  };

  const testimonials = [
    {
      name: "Sujatha",
      company: "JS Laboratories",
      designation: "Admin",
      text: "PIQUEFAME has been instrumental in shaping our digital presence. Their creative storytelling and design-led campaigns helped us showcase our manufacturing strengths with clarity and class. They've truly made JS Labs visible to the right audience.",
      rating: 5,
      platform: "JS Laboratories",
      reviewCount: "5/5 Reviews",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Janani Chandrasekar",
      company: "Janbio",
      designation: "Founder",
      text: "PIQUEFAME captured the soul of our herbal brand and gave it a modern edge. From storytelling to social media campaigns, everything felt true to our values. Customers now connect with Janbio like never before.",
      rating: 5,
      platform: "Janbio – Herbal Skincare Brand",
      reviewCount: "5/5 Reviews",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Karthik",
      company: "Highmix",
      designation: "Owner",
      text: "Our café needed a fresh digital identity, and PIQUEFAME delivered. Their creative posts turned our dishes into trends and brought in new faces every week. They made us as lively online as we are offline.",
      rating: 5,
      platform: "Highmix – Café / Restaurant",
      reviewCount: "5/5 Reviews",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "S. Prabu",
      company: "Prabu Jewellers",
      designation: "Managing Director",
      text: "Working with PIQUEFAME has been a sparkling experience. Their campaigns gave our jewellery the elegance it deserves and helped us reach a younger audience. We've seen both engagement and sales rise steadily.",
      rating: 5,
      platform: "Prabu Jewellers",
      reviewCount: "5/5 Reviews",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const socialPostImages = [
    {
      src: "https://res.cloudinary.com/drvsbodf2/image/upload/v1762604386/WhatsApp_Image_2025-08-11_at_10.48.27_uuqmxl.jpg",
      alt: "PIQUEFAME lifestyle creative showcasing bold typography over product imagery.",
      tag: "PIQUEFAME DROP",
    },
    {
      src: "https://res.cloudinary.com/drvsbodf2/image/upload/v1762604374/piquefame_arbnyn.png",
      alt: "PIQUEFAME collage featuring services and past brand work.",
      tag: "PIQUEFAME REEL",
    },
  ];

  const faqs = [
    {
      question: "How fast can we start?",
      answer: "Discovery call → proposal in 48 hrs → kickoff next week.",
    },
    {
      question: "What kind of brands do you work with?",
      answer:
        "We partner with startups, D2C brands, restaurants, boutiques, skincare, and lifestyle companies—any brand looking to scale digitally.",
    },
    {
      question: "What if I want a custom plan?",
      answer:
        "We'll build a package around your goals—whether it's a product launch, festive campaign, or influencer-heavy strategy.",
    },
    {
      question: "Can you create content without a shoot?",
      answer:
        "Yes. We can work with stock, UGC-style content, animations, and templates until you're ready for a studio shoot.",
    },
    {
      question: "What if I don't have a brand identity yet?",
      answer:
        "We'll shape basic visual guidelines and messaging as part of the kickoff.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSocialImage, setCurrentSocialImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSocialImage((prev) => (prev + 1) % socialPostImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [socialPostImages.length]);

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "3+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Orange Glitter Background Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Glitter Particles */}
          <div className="glitter-particle"></div>
          <div className="glitter-particle"></div>
          <div className="glitter-particle"></div>
          <div className="glitter-particle"></div>
          <div className="glitter-particle"></div>
          <div className="glitter-particle"></div>
          <div className="glitter-particle"></div>
          <div className="glitter-particle"></div>
          <div className="glitter-particle"></div>
          <div className="glitter-particle"></div>

          {/* Sparkle Effects */}
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
          <div className="sparkle"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col-reverse lg:grid grid-cols-[65%,1fr] gap-12 items-center pt-8 md:pt-0">
            {/* Left Side - Text Content */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="text-center lg:text-left text-black">
                <motion.div
                  className="flex items-center justify-center lg:justify-start gap-3 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl md:text-2xl font-semibold">
                    We're PIQUEFAME
                  </span>
                </motion.div>

                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <span className="block text-black">
                    We build brands that get
                  </span>
                  <span className="block text-black">seen and chosen</span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl mb-6 text-gray-700 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  Chennai-born. Creator-led. Performance-driven.
                </motion.p>

                <motion.div
                  className="text-base md:text-lg mb-6 text-gray-700 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <span className="block">
                    Fresh Ideas, Bold Beginnings | 10+ Brands Trusted | 50+
                    Campaigns Delivered
                  </span>
                </motion.div>

                <motion.div
                  className="text-base md:text-lg mb-6 text-gray-700 space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <div className="flex items-start justify-center lg:justify-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Hands-on strategy + in-house content</span>
                  </div>
                  <div className="flex items-start justify-center lg:justify-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Media buying that respects your rupee</span>
                  </div>
                </motion.div>

                <motion.p
                  className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  A dynamic startup driven by creativity, helping businesses
                  craft their identity and build digital footprints with
                  design-led solutions.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary text-white hover:bg-primary/90 hover-lift"
                    onClick={() =>
                      window.open("https://wa.me/916380974957", "_blank")
                    }
                  >
                    Work with Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right Side - Animated GIF with Tilt */}
            <AnimatedSection direction="right" delay={0.4}>
              <div className="flex justify-center lg:justify-end">
                <Tilt {...tiltDefaults}>
                  <div className="relative max-w-md w-full">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover-lift">
                      <img
                        src={heroGif}
                        alt="Branding Animation"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Floating elements for visual interest */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-60"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </div>
                </Tilt>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
                Industries
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Who We Work With
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Boutique founders, skincare disruptors, restaurants and cafes,
                real-estate visionaries, wellness pioneers, and retail leaders
                trust PIQUEFAME to translate their stories into scroll-stopping
                campaigns.
              </p>
            </div>
            <div className="mt-10">
              <div className="relative rounded-3xl border border-orange-100 shadow-lg overflow-hidden bg-gradient-to-br from-orange-50 to-white">
                <img
                  src={whoWeWorkWithImage}
                  alt="Industries word cloud including skincare, fashion, real estate, restaurants, wellness, fitness, and hospitality."
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white/10"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Piquefames Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover-lift border-0 shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm font-medium text-muted-foreground">
                  Years of Experience
                </div>
              </Card>
              <Card className="text-center p-6 hover-lift border-0 shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm font-medium text-muted-foreground">
                  Projects completed
                </div>
              </Card>
            </div>

            {/* Right Side - Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Born in Chennai, built for the globe — PIQUEFAME blends design,
                storytelling, and performance marketing into experiences that
                inspire, engage, and convert. Whether it’s a boutique, a
                restaurant, a real estate giant, a skincare brand or a jewellery
                brand, we don’t just market — we create movements.
                <br />
                <b>
                  Your Brand. Our Spotlight. Together, let’s make it impossible
                  to ignore.
                </b>
              </p>
              <div className="flex items-center gap-3">
                <Button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 hover-lift">
                  Work With Us!
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section - Video and Social Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            {/* Video Card */}
            <Card className="overflow-hidden border-0 shadow-soft">
              <div className="bg-gradient-to-b from-blue-100 to-blue-200 p-6">
                <div className="text-sm font-medium text-gray-800 mb-4">
                  Through Social Media Market
                </div>
                <div className="relative w-full aspect-video">
                  <video
                    src={video}
                    controls
                    className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </Card>

            {/* Social Media Post Card */}
            <Card className="overflow-hidden hover-lift border-0 shadow-soft relative">
              <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-1">
                <div className="bg-white rounded-lg overflow-hidden">
                  {/* Post Image */}
                  <div className="relative aspect-[3/3.9] overflow-hidden rounded-3xl border border-orange-100 bg-white">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={socialPostImages[currentSocialImage].src}
                        src={socialPostImages[currentSocialImage].src}
                        alt={socialPostImages[currentSocialImage].alt}
                        className="absolute inset-0 h-full w-full object-contain"
                        loading="lazy"
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </AnimatePresence>
                    {/* <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-black/70 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-white backdrop-blur">
                      <span>{socialPostImages[currentSocialImage].tag}</span>
                      <span className="text-white/70">LIVE FEED</span>
                    </div> */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                  </div>
                </div>
              </div>

              {/* Floating Emojis */}
              <div className="absolute -top-2 -right-2 text-2xl">😢</div>
              <div className="absolute top-1/4 -right-4 text-xl">😮</div>
              <div className="absolute bottom-1/4 -left-2 text-xl">🥰</div>
            </Card>

            {/* Orange Star Graphic */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary transform rotate-45 opacity-80 z-10"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Tilt {...tiltDefaults} className="h-full">
                  <motion.div
                    className="group relative text-center p-6 md:p-8 rounded-2xl bg-white border-2 border-orange-200/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-400 transition-all duration-300 overflow-hidden h-full"
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Subtle Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-amber-400/0 group-hover:from-orange-400/10 group-hover:to-amber-400/10 blur-xl transition-all duration-300 -z-10"></div>

                    <motion.div
                      className="relative z-10 text-3xl md:text-4xl font-bold text-primary mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: index * 0.2 + 0.5,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.div
                      className="relative z-10 text-muted-foreground font-medium text-sm md:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.2 + 0.7,
                        duration: 0.5,
                      }}
                    >
                      {stat.label}
                    </motion.div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
                Services
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Our Quality Services
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Tilt {...tiltDefaults} className="h-full">
                  <Card
                    className={`group relative overflow-hidden border border-orange-200/50 bg-white backdrop-blur-xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:border-orange-400 hover-lift h-full`}
                  >
                    {/* Solid Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-95 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Futuristic Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated Border Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                    ></div>

                    <CardHeader className="relative z-10 text-center pb-4 pt-8">
                      <motion.div
                        className={`relative w-32 h-32 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-orange-500/30 transition-all duration-500 p-4 border-2 border-white/50`}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 3, 0],
                        }}
                        transition={{
                          duration: 4 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{
                          scale: 1.15,
                          rotate: 5,
                          boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
                        }}
                      >
                        {/* Icon Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <img
                          src={service.iconUrl}
                          alt={service.title}
                          className="relative z-10 w-full h-full object-contain brightness-110 contrast-125 group-hover:brightness-125 group-hover:contrast-150 transition-all duration-500 filter drop-shadow-lg"
                        />
                      </motion.div>

                      <CardTitle className="text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors mb-2 drop-shadow-lg">
                        {service.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative z-10 text-center px-6 pb-8">
                      <CardDescription className="text-white/95 leading-relaxed group-hover:text-white transition-colors text-sm md:text-base font-medium drop-shadow-md">
                        {service.description}
                      </CardDescription>
                    </CardContent>

                    {/* Futuristic Corner Accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Card>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center pt-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 hover-lift shadow-2xl shadow-orange-500/30 text-lg px-8 py-6 font-bold border-2 border-white/20 backdrop-blur-sm"
              onClick={() =>
                window.open("https://wa.me/916380974957", "_blank")
              }
            >
              "Let's PIQUE Your Fame"
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600">
              Our proven 5-step process to make your brand shine
            </p>
          </div>

          <div className="relative">
            {/* Central connecting line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 hidden md:block"></div>

            <div className="space-y-8">
              {/* Step 1: Listen & Learn */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 md:text-right">
                    <Card className="p-8 bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center justify-center md:justify-end gap-3 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                            <span className="text-3xl">🎧</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Listen & Learn
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        We start by understanding your brand's goals, audience,
                        and challenges — because strategy begins with clarity.
                      </p>
                    </Card>
                  </div>
                  <div className="hidden md:block w-12 h-12 bg-orange-500 rounded-full flex-shrink-0 relative z-10 shadow-lg">
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-full h-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
                {/* Arrow down */}
                <div className="flex justify-center my-4">
                  <ArrowRight className="h-8 w-8 text-orange-500 transform rotate-90 animate-bounce" />
                </div>
              </div>

              {/* Step 2: Plan the Play */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 hidden md:block"></div>
                  <div className="hidden md:block w-12 h-12 bg-orange-500 rounded-full flex-shrink-0 relative z-10 shadow-lg">
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-full h-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="p-8 bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                            <span className="text-3xl">📋</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Plan the Play
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        From brand communication to content calendars, we craft
                        a smart game plan tailored to your business.
                      </p>
                    </Card>
                  </div>
                </div>
                {/* Arrow down */}
                <div className="flex justify-center my-4">
                  <ArrowRight className="h-8 w-8 text-orange-500 transform rotate-90 animate-bounce" />
                </div>
              </div>

              {/* Step 3: Create the Magic */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 md:text-right">
                    <Card className="p-8 bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center justify-center md:justify-end gap-3 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                            <span className="text-3xl">✨</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Create the Magic
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Our team designs, writes, shoots, and edits — turning
                        big ideas into bold, scroll-stopping campaigns.
                      </p>
                    </Card>
                  </div>
                  <div className="hidden md:block w-12 h-12 bg-orange-500 rounded-full flex-shrink-0 relative z-10 shadow-lg">
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-full h-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
                {/* Arrow down */}
                <div className="flex justify-center my-4">
                  <ArrowRight className="h-8 w-8 text-orange-500 transform rotate-90 animate-bounce" />
                </div>
              </div>

              {/* Step 4: Launch & Amplify */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 hidden md:block"></div>
                  <div className="hidden md:block w-12 h-12 bg-orange-500 rounded-full flex-shrink-0 relative z-10 shadow-lg">
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-full h-full flex items-center justify-center text-white font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card className="p-8 bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                            <span className="text-3xl">🚀</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Launch & Amplify
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        We bring your brand to life across the right platforms —
                        making sure every click, like, and share counts.
                      </p>
                    </Card>
                  </div>
                </div>
                {/* Arrow down */}
                <div className="flex justify-center my-4">
                  <ArrowRight className="h-8 w-8 text-orange-500 transform rotate-90 animate-bounce" />
                </div>
              </div>

              {/* Step 5: Track & Tweak */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1 md:text-right">
                    <Card className="p-8 bg-white border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center justify-center md:justify-end gap-3 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                            <span className="text-3xl">📊</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Track & Tweak
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        No guesswork here — we measure results, refine
                        strategies, and keep your brand growing stronger each
                        day.
                      </p>
                    </Card>
                  </div>
                  <div className="hidden md:block w-12 h-12 bg-orange-500 rounded-full flex-shrink-0 relative z-10 shadow-lg">
                    <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-full h-full flex items-center justify-center text-white font-bold text-lg">
                      5
                    </div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <Card className="relative p-7 md:p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 shadow-2xl overflow-hidden rounded-3xl">
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
              </div>

              {/* Spotlight icon with glow effect */}
              <div className="relative z-10 flex items-center justify-center mb-8">
                <div className="relative">
                  {/* Outer glow rings */}
                  <div className="absolute inset-0 w-24 h-24 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div
                    className="absolute inset-0 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>

                  {/* Icon container */}
                  <div className="relative w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300">
                    <span className="text-5xl filter drop-shadow-lg">💡</span>
                  </div>
                </div>
              </div>

              {/* Main text */}
              <div className="relative z-10 max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-yellow-100 leading-relaxed mb-4">
                  At PIQUEFAME, it's not just work —
                </p>
                <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400">
                    it's teamwork
                  </span>
                  <span className="text-white">, with your brand in the </span>
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 font-bold">
                      spotlight
                    </span>
                  </span>
                  <span className="text-yellow-400 text-5xl ml-2 inline-block animate-pulse">
                    ✨
                  </span>
                </p>
              </div>

              {/* Decorative dots pattern */}
              <div className="absolute top-8 right-8 grid grid-cols-3 gap-2 opacity-20">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>

              <div className="absolute bottom-8 left-8 grid grid-cols-3 gap-2 opacity-20">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="bg-orange-400 px-6 py-2 rounded-full">
                <span className="text-black font-bold text-sm uppercase">
                  PARTNER
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-16">
              With The World Premier
              <br />
              <span className="text-black">80+ Brands</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-5xl mx-auto">
              {partners.map((partner, index) => (
                <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-shadow duration-300 p-2">
                  <img
                      src={partner.imageUrl}
                      alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              ))}
                </div>
              </div>
                </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex justify-between items-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-black"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Clients Testimonials
              </motion.h2>
              {/* Pagination Dots */}
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {testimonials.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial
                        ? "bg-orange-500"
                        : "bg-gray-300"
                    }`}
                    animate={{
                      scale: index === currentTestimonial ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Auto-sliding Testimonial Card */}
          <AnimatedSection delay={0.3}>
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentTestimonial * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <Tilt {...tiltDefaults}>
                        <Card className="p-8 md:p-16 shadow-2xl border-0 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 relative min-h-[450px] rounded-3xl overflow-hidden backdrop-blur-sm">
                          {/* Decorative Elements */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>

                          <div className="relative z-10 space-y-10">
                            {/* Platform Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              <span className="text-sm font-semibold text-white tracking-wide uppercase">
                                {testimonial.platform}
                              </span>
                            </div>

                            {/* Testimonial Quote */}
                            <blockquote className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-light italic relative">
                              <span className="text-5xl absolute -top-4 -left-2 text-white/30 font-serif leading-none">
                                "
                              </span>
                              <span className="relative pl-8">
                                {testimonial.text}
                              </span>
                            </blockquote>

                            {/* Attribution */}
                            <div className="pt-6 border-t border-white/20">
                              <div className="font-bold text-white text-3xl mb-2 tracking-tight">
                                {testimonial.name}
                              </div>
                              <div className="text-base text-white/80 uppercase font-medium tracking-wider flex items-center gap-2">
                                <span className="w-8 h-px bg-white/40"></span>
                                {testimonial.company}
                              </div>
                            </div>
                          </div>

                          {/* Large Quote Mark - Decorative */}
                          <div className="absolute top-12 right-12 text-[12rem] text-white/5 font-serif leading-none select-none pointer-events-none">
                            "
                          </div>

                          {/* Testimonial Number */}
                          <div className="absolute bottom-10 right-10 flex items-center gap-3">
                            <div className="w-12 h-px bg-white/30"></div>
                            <span className="text-6xl text-white/20 font-bold tracking-tighter">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </Card>
                      </Tilt>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Choose Your
                <br />
                <span className="text-orange-500">Growth Path</span>
              </motion.h2>
              <motion.p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Flexible packages designed to scale with your ambitions
                <br />
                <span className="text-sm text-gray-500">
                  (exclusive of ad spend)
                </span>
                <br />
                <br />
                <Link to="https://wa.me/916380974957" target="_blank">
                  <motion.div
                    className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full mb-6 font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Starting from ₹15,000 + GST/Month
                  </motion.div>
                </Link>
              </motion.p>
            </div>
          </AnimatedSection>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <AnimatedSection delay={0.2}>
              <Tilt {...tiltDefaults}>
                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift flex flex-col h-full group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-300/5 to-yellow-300/5 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-4 shadow-lg">
                        <span className="text-2xl font-bold text-white">1</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Kickoff
                      </h3>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full mb-6">
                        Exclusive of ad spend
                      </div>
                      <div className="mb-8">
                        <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          ₹15,000
                        </span>
                        <span className="text-lg text-gray-500 ml-2">
                          +GST/month
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Complete Social Media mgt. (FB, INSTA, Google)
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Google & Meta Ads mgt.
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Complete Branding And Visualisation.
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Unique Brand Strategy
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-auto">
                      <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Active Now
                      </Button>
                      <Button className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Tilt>
            </AnimatedSection>

            
            <AnimatedSection delay={0.4}>
              <Tilt {...tiltDefaults}>
                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift flex flex-col h-full group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-300/5 to-indigo-300/5 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4 shadow-lg">
                        <span className="text-2xl font-bold text-white">2</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Growth
                      </h3>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-6">
                        Always-On
                      </div>
                      <div className="mb-8">
                        <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          ₹25,000
                        </span>
                        <span className="text-lg text-gray-500 ml-2">
                          +GST/month
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Including Package -01
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          4 Creative Post
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Inc. 5000/- ADs Budget
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          8 Basic Reel Shoot
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Festival Image Post
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Social Media Management
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-auto">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg">
                        Active Now
                      </Button>
                      <Button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Tilt>
            </AnimatedSection>
          </div> */}

          {/* Second Row - 2 Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            
            <AnimatedSection delay={0.6}>
              <Tilt {...tiltDefaults}>
                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift flex flex-col h-full group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-300/5 to-teal-300/5 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4 shadow-lg">
                        <span className="text-2xl font-bold text-white">3</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Scale
                      </h3>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full mb-6">
                        Performance Booster
                      </div>
                      <div className="mb-8">
                        <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          ₹40,000
                        </span>
                        <span className="text-lg text-gray-500 ml-2">
                          +GST/month
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Including Package -01
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          8 Creative Post
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Festival Image/ Video
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Premium Logo & VC Card
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          12 Creative Reel Shoot
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Content Writing
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Inc. 5000/- ADs Budget
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          1 Logo Animation (Comp.)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-auto">
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Active Now
                      </Button>
                      <Button className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Tilt>
            </AnimatedSection>

           
            <AnimatedSection delay={0.8}>
              <Tilt {...tiltDefaults}>
                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift flex flex-col h-full group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-300/5 to-pink-300/5 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                        <span className="text-2xl font-bold text-white">4</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Elite
                      </h3>
                      <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-6">
                        Scale Play
                      </div>
                      <div className="mb-8">
                        <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                          ₹60,000
                        </span>
                        <span className="text-lg text-gray-500 ml-2">
                          +GST/month
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Including Package -01
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          15 Premium Creative Post
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Festival Image/ Video
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Complete Stationery
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          GMB SEO
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          15 Creative Reel Shoot
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Content Writing
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Inc. 10,000/- ADs Budget
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Business Consultant
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm"></div>
                        <span className="text-gray-800 font-medium">
                          Influencer Mgt./ Photoshoot
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-auto">
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Active Now
                      </Button>
                      <Button className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </Tilt>
            </AnimatedSection>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to PIQUE some interest? <br /> Let's turn your brand into
              everyone's FAME.
            </motion.h2>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Tilt {...tiltDefaults}>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 hover-lift"
                  onClick={() =>
                    window.open("https://wa.me/916380974957", "_blank")
                  }
                >
                  Let's Begin
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Tilt>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Us Section */}
      <ContactForm />

      {/* See Our Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>OUR TOP SKILLS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              See Our <span className="text-orange-500">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the skills and expertise that make us the perfect partner
              for your digital marketing needs.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategic Marketing */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover-lift group">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Strategic Marketing
                </h3>
              </div>
            </div>

            {/* Creative Design */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover-lift group">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Creative Design
                </h3>
              </div>
            </div>

            {/* Social Media Management */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover-lift group">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Social Media Management
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Card */}
            <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-orange-50 rounded-2xl p-10 relative overflow-hidden h-full border-2 border-orange-100 shadow-lg">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200 to-orange-200 rounded-full opacity-30 blur-2xl"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Header Section */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                    </svg>
                    <span>Need Help?</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                      Still have a
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                      question?
                    </span>
                  </h3>

                  <p className="text-gray-700 text-lg mb-6">
                    Can't find the answer you're looking for? Our friendly team
                    is here to help!
                  </p>
                </div>

                {/* Illustration/Icon Section */}
                <div className="flex-grow flex items-center justify-center my-6">
                  <div className="relative">
                    {/* Main Circle */}
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>

                    {/* Animated Rings */}
                    <div className="absolute inset-0 -m-4">
                      <div className="w-40 h-40 border-4 border-orange-300 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <div className="absolute inset-0 -m-2">
                      <div className="w-36 h-36 border-2 border-pink-300 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Button
                    onClick={() =>
                      window.open("https://wa.me/916380974957", "_blank")
                    }
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-6 px-6 rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Chat with our experts
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - FAQ Section */}
            <div>
              {/* FAQ Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>FAQ</span>
              </div>

              {/* FAQ Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>

              {/* FAQ Accordion */}
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-2 border-orange-200 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-4 hover:from-orange-600 hover:to-pink-600 transition-all">
                      <span className="text-left font-semibold">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="bg-white px-6 py-4 text-gray-700">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
