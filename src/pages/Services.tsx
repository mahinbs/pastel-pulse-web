import {
  ArrowRight,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import brandingSolutionIcon from "@/assets/svgs/branding_solution.png";
import socialMediaMarketingIcon from "@/assets/svgs/social_media_marketing.png";
import webDesignIcon from "@/assets/svgs/web_design.png";
import creativeContentIcon from "@/assets/svgs/creative_content.png";

const Services = () => {
  const services = [
    {
      iconUrl: brandingSolutionIcon,
      title: "Branding Solutions",
      subtitle: "Your brand isn't just a logo — it's an experience.",
      description:
        "At PIQUEFAME, we build brands with personality, clarity, and purpose. Whether you're launching fresh or refreshing, we give you the tools to stand out and stay consistent.",
      features: [
        "Brand strategy (positioning, audience profiling, competitive mapping)",
        "Messaging framework (tone of voice, communication pillars, storytelling)",
        "Visual identity (logos, color palettes, typography, social templates)",
        "Brand guidelines (easy-to-use brand kit for your team)",
      ],
      whyItMatters:
        "A strong brand makes you memorable, trustworthy, and easier to scale — both online and offline.",
      gradient: "from-orange-500 to-amber-600",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
    {
      iconUrl: socialMediaMarketingIcon,
      title: "Social Media Management",
      subtitle: 'We turn "posts" into profit.',
      description:
        "Social media isn't just about posting pretty pictures — it's about creating conversations that lead to conversions. We manage your presence so your audience sees you, hears you, and remembers you.",
      features: [
        "Daily/weekly posting across Instagram, Facebook",
        "Strategic content calendars tailored to your industry",
        "Engagement management (comments, DMs, community building)",
        "Influencer Marketing",
        "Analytics tracking for growth, engagement, and ROI",
      ],
      whyItMatters:
        "Because consistency + creativity = trust, and trust = sales.",
      gradient: "from-gray-700 to-gray-900",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
    {
      iconUrl: webDesignIcon,
      title: "Web Designing",
      subtitle: "Your website is your 24/7 sales rep.",
      description:
        "We design websites that do more than look good — they're built to convert. With the right blend of design, storytelling, and smart tech, your site becomes the digital storefront your brand deserves.",
      features: [
        "Custom website design (Custom builds)",
        "Landing pages optimized for conversions",
        "Mobile-first, responsive layouts",
        "E-commerce integration (catalogs, carts, checkouts)",
      ],
      whyItMatters:
        "Because your audience decides in 3 seconds whether they'll stay or bounce. We make them stay.",
      gradient: "from-stone-600 to-stone-800",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
    {
      iconUrl: creativeContentIcon,
      title: "Content Creation",
      subtitle: "Good content is the bridge between attention and action.",
      description:
        "From short-form reels to long-form campaigns, we create content that tells stories, sparks emotions, and drives engagement.",
      features: [
        "Reels & video production (trending hooks, product demos, storytelling edits)",
        "Static posts & carousel designs (scroll-stopping visuals)",
        "Copywriting (catchy captions, ad copy, storytelling scripts)",
        "Campaign concepts (festive launches, product drops, influencer collabs)",
        "Photography bundles (product, lifestyle, behind-the-scenes)",
      ],
      whyItMatters:
        "Content is how people meet, like, and trust your brand. The better the story, the stronger the community.",
      gradient: "from-amber-700 to-orange-600",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Listen & Learn",
      description:
        "We tune in to your story, your audience, and your goals — clarity first, always.",
    },
    {
      step: "02",
      title: "Spark Ideas",
      description:
        "Brainstorm, moodboard, and prototype — this is where the magic begins.",
    },
    {
      step: "03",
      title: "Launch Bold",
      description:
        "We roll out content, campaigns, and designs that don't just show up — they stand out.",
    },
    {
      step: "04",
      title: "Grow Smarter",
      description:
        "We measure, tweak, and scale so your brand keeps shining brighter.",
    },
  ];

  const tiltDefaults = {
    tiltEnable: false,
    glareEnable: false,
    gyroscope: false,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Dynamic Effect */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
              <span>Our Services</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Strategy + Creativity +{" "}
              <span className="text-orange-500">Digital Magic</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We mix strategy with a splash of creativity and a pinch of digital
              magic. Whether it's building your brand, crafting content, or
              running ads that actually convert — we make sure your business
              shines brighter and louder online.
            </motion.p>
          </AnimatedSection>
        </div>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-8px) rotate(-2deg);
            }
            50% {
              transform: translateY(-12px) rotate(0deg);
            }
            75% {
              transform: translateY(-8px) rotate(2deg);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <Card className="hover-lift border-0 shadow-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl">
                  <CardHeader
                    className={`bg-gradient-to-br ${service.gradient} text-white pb-6 relative overflow-hidden sm:aspect-[3/2]`}
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    {/* Background decoration */}
                    <div className="absolute inset-0 h-full w-full bg-orange-500/50 brightness-75"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                    <div
                      className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <img
                          src={service.iconUrl}
                          alt={service.title}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardTitle className="text-2xl font-bold mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-white/95 font-medium text-lg mb-3">
                        {service.subtitle}
                      </p>
                      <CardDescription className="text-white/95 text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-4 text-foreground text-lg">
                        What we offer:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 mb-6">
                      <h4 className="font-semibold mb-2 text-foreground">
                        Why it matters:
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {service.whyItMatters}
                      </p>
                    </div>

                    <Button
                      onClick={() =>
                        window.open("https://wa.me/916380974957", "_blank")
                      }
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white hover-lift"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Game Plan Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our <span className="text-gradient">Game Plan</span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                From strategy to scale — here's how we bring your brand to life.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Tilt {...tiltDefaults}>
                  <div className="text-center group">
                    <motion.div
                      className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 2, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {step.step}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Why Choose <span className="text-gradient">Piquefame?</span>
                </motion.h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Award className="h-6 w-6" />,
                      title: "Fresh Minds, Bold Ideas",
                      description:
                        "We're a new-age team that thinks fast, moves faster, and loves breaking the boring.",
                    },
                    {
                      icon: <TrendingUp className="h-6 w-6" />,
                      title: "Startup Energy, Big Impact",
                      description:
                        "As a Chennai-based startup, we hustle like you — every reel, ad, and post is built to perform.",
                    },
                    {
                      icon: <CheckCircle className="h-6 w-6" />,
                      title: "Results You Can Count (and Flaunt)",
                      description:
                        "From clicks to conversions, we keep the numbers real and the growth measurable.",
                    },
                    {
                      icon: <Users className="h-6 w-6" />,
                      title: "People Love Working With Us",
                      description:
                        "Clients stick around because we listen, we deliver, and we make the process fun.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                        animate={{
                          rotate: [0, 5, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.4}>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 text-center">
                <motion.div
                  className="text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  98%
                </motion.div>
                <div className="text-lg font-semibold mb-4">
                  Client Satisfaction Rate
                </div>
                <p className="text-muted-foreground mb-6">
                  Our commitment to excellence shows in our client retention and
                  satisfaction scores.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-primary hover-lift"
                  onClick={() =>
                    window.open("https://wa.me/916380974957", "_blank")
                  }
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to PIQUE some interest? Let's turn your brand into
              everyone's FAME.
            </motion.h2>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover-lift"
                onClick={() =>
                  window.open("https://wa.me/916380974957", "_blank")
                }
              >
                Get A Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Services;
