import {
  ArrowRight,
  Star,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
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
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import heroGif from '@/assets/hero-section-gif.gif'
import brandingSolutionIcon from '@/assets/svgs/branding_solution.png';
import socialMediaMarketingIcon from '@/assets/svgs/social_media_marketing.png';
import webDesignIcon from '@/assets/svgs/web_design.png';
import creativeContentIcon from '@/assets/svgs/creative_content.png';

const Home = () => {
  const services = [
    {
      iconUrl: brandingSolutionIcon,
      title: "Branding Solutions",
      description:
        "We give your brand its voice (communication), its game plan (strategy), and its signature look (identity). In short — we don't just brand, we give your business a brand new personality.",
      gradient: "from-orange-500 to-amber-600",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
      highlighted: true,
    },
    {
      iconUrl: socialMediaMarketingIcon,
      title: "Social Media Management",
      description:
        "We don't just 'post' — we make sure your brand never gets ghosted. From likes to leads, we turn scrolling into strolling towards your business.",
      gradient: "from-gray-700 to-gray-900",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
    {
      iconUrl: webDesignIcon,
      title: "Web Designing",
      description:
        "Your website is your brand's first handshake. At PIQUEFAME, we design websites that don't just look good, but work smart — blending creativity with functionality to turn clicks into connections.",
      gradient: "from-stone-600 to-stone-800",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
    {
      iconUrl: creativeContentIcon,
      title: "Content Creation",
      description:
        "From catchy captions to scroll-stopping visuals, we craft stories that spark curiosity, spark conversations, and grow communities. Be it a reel that hooks, a post that spreads, or a campaign that trends — we make your brand unforgettable.",
      gradient: "from-amber-700 to-orange-600",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop&auto=format&q=60&blur=10",
    },
  ];

  const testimonials = [
    {
      name: "Sarthak Dash",
      company: "PEPPERFRY.COM",
      text: "Working with Piquefame was one of the best business decisions we've made. Their branding strategy was clear, impactful, and future-focused. They helped us find our voice and build a cohesive identity across all platforms. 10/10 would recommend.",
      rating: 5,
      platform: "pepperfry.com",
      reviewCount: "5/40 Reviews",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Piquefame transformed our brand completely. Their creative approach and attention to detail exceeded all expectations. The team's professionalism and innovative solutions helped us achieve remarkable growth.",
      rating: 5,
      platform: "techstart.com",
      reviewCount: "8/25 Reviews",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      company: "Green Leaf Cafe",
      text: "The social media strategy they developed increased our engagement by 300% in just 3 months. Their expertise in digital marketing transformed our local business into a community favorite.",
      rating: 5,
      platform: "greenleaf.com",
      reviewCount: "12/30 Reviews",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      text: "Their web design skills are unmatched. Our new site converts 40% better than our old one. The user experience improvements have been incredible for our e-commerce business.",
      rating: 5,
      platform: "fashionforward.com",
      reviewCount: "15/35 Reviews",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "250+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left text-black">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl md:text-3xl font-bold">
                  We're Best in
                </span>
              </div>

              <div className="relative h-24 md:h-32 lg:h-36 mb-6">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="block text-black service-animation">
                    {"Social Media".split("").map((char, index) => (
                      <span key={index}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                  </span>
                  <span className="block text-black service-animation">
                    {"Creative Design".split("").map((char, index) => (
                      <span key={index}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                  </span>
                  <span className="block text-black service-animation">
                    {"Strategic Marketing".split("").map((char, index) => (
                      <span key={index}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                  </span>
                  <span className="block text-black service-animation">
                    {"SEO".split("").map((char, index) => (
                      <span key={index}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                  </span>
                  <span className="block text-black service-animation">
                    {"Automation Services".split("").map((char, index) => (
                      <span key={index}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                  </span>
                </h1>
              </div>

              <div className="text-lg md:text-xl mb-6 text-gray-700 font-semibold">
                <span className="block">5+ Years of Creative Excellence</span>
                <span className="block">500+ Brands Empowered</span>
                <span className="block">10+ Crore in Ad Spend</span>
              </div>

              <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A passionate team of branding specialists, delivering impactful,
                design-led solutions to clients across the globe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 hover-lift"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white hover-lift"
                >
                  View Our Work
                </Button> */}
              </div>
            </div>

            {/* Right Side - Animated GIF */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative max-w-md w-full">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src={heroGif}
                    alt="Branding Animation"
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Piquefames Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover-lift border-0 shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm font-medium text-muted-foreground">
                  Years of Experience
                </div>
              </Card>
              <Card className="text-center p-6 hover-lift border-0 shadow-soft">
                <div className="text-4xl font-bold text-primary mb-2">56K</div>
                <div className="text-sm font-medium text-muted-foreground">
                  Projects completed
                </div>
              </Card>
            </div>

            {/* Right Side - Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                In a world where ideas are the new superpowers, one studio dares
                to bring brands to life like never before. Piquefames
                isn't just a creative agency – it's a universe of storytelling,
                strategy, and stunning design.
              </p>
              <div className="flex items-center gap-3">
                <Button className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 hover-lift">
                  Get More Info
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-gray-900 hover:bg-gray-50 hover-lift"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section - Video and Social Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            {/* Video Card - Autoplay Embed */}
            <Card className="overflow-hidden border-0 shadow-soft">
              <div className="bg-gradient-to-b from-blue-100 to-blue-200 p-6">
                <div className="text-sm font-medium text-gray-800 mb-4">
                  through Social Media Market
                </div>
                <div className="relative w-full aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/V8B4jq6tWz4?autoplay=1&mute=1&controls=0&loop=1&playlist=V8B4jq6tWz4"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            </Card>

            {/* Social Media Post Card */}
            <Card className="overflow-hidden hover-lift border-0 shadow-soft relative">
              <div className="bg-gradient-to-br from-pink-100 to-blue-100 p-1">
                <div className="bg-white rounded-lg overflow-hidden">
                  {/* Post Image */}
                  <div className="relative">
                    <div
                      className="aspect-square bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url('https://res.cloudinary.com/dknafpppp/image/upload/v1758821129/smm_k46xc6.avif')`,
                      }}
                    ></div>
                    <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs font-bold">
                      HIGH-RISE CARGO PANTS
                    </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
              Our Quality Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white hover:ring-2 ring-orange-500`}
              >
                {/* Background Image - Blurred */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover blur-[2.5px]"
                  />
                </div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                <CardHeader className="relative z-10 text-center pb-4">
                  <div
                    className={`w-24 h-24 bg-white/40 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 p-3`}
                  >
                    <img
                      src={service.iconUrl}
                      alt={service.title}
                      className="w-full h-full object-contain aspect-square"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-black group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 text-center">
                  <CardDescription className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                    {service.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise & How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Our Expertise Column */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Expertise
                </h2>
              </div>

              {/* Timeline Line */}
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-orange-500"></div>

              <div className="space-y-12">
                {/* Brand Strategy Card */}
                <div className="relative pl-16">
                  <div className="absolute left-6 top-6 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <Card className="p-6 shadow-lg border-0 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          Brand Strategy
                        </h3>
                        <p className="text-sm text-gray-500">
                          Piquefames
                        </p>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 p-0">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Brand Strategy is a Piquefame that builds bold,
                      strategic identities. We help brands define their voice,
                      clarify their purpose, and connect with their audience
                      through smart, intentional design. Want it even more
                      minimal or with a tagline vibe?
                    </p>
                  </Card>
                </div>

                {/* Visual Identity Card */}
                <div className="relative pl-16">
                  <div className="absolute left-6 top-6 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <Card className="p-6 shadow-lg border-0 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          Visual Identity
                        </h3>
                        <p className="text-sm text-gray-500">
                          Piquefames
                        </p>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 p-0">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We craft visual identities that speak with clarity, look
                      polished and intentional, and feel authentically aligned
                      with who you are. Every element - from your logo and
                      typography to color palettes, layouts, and design systems
                    </p>
                  </Card>
                </div>

                {/* Brand Communication Card */}
                <div className="relative pl-16">
                  <div className="absolute left-6 top-6 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <Card className="p-6 shadow-lg border-0 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          Brand Communication
                        </h3>
                        <p className="text-sm text-gray-500">
                          Piquefames
                        </p>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 p-0">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We shape brand communication that speaks with purpose,
                      clarity, and impact. From messaging frameworks and tone of
                      voice to content strategy and storytelling, we help brands
                      find their voice and express it consistently across every
                      touchpoint.
                    </p>
                  </Card>
                </div>
              </div>
            </div>

            {/* How We Work Column */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  How We Work
                </h2>
              </div>

              {/* Timeline Line */}
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-orange-500"></div>

              <div className="space-y-12">
                {/* Plan Your Growth Card */}
                <div className="relative pl-16">
                  <div className="absolute left-6 top-6 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <Card className="p-6 shadow-lg border-0 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          Plan Your Growth
                        </h3>
                        <p className="text-sm text-gray-500">
                          Piquefames
                        </p>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 p-0">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Dream big, strategize with us, and turn plans into
                      profits. Dare to dream big, partner with us to craft
                      smart, actionable strategies, and watch your vision
                      transform into tangible success and sustainable profits.
                    </p>
                  </Card>
                </div>

                {/* Handover the project Card */}
                <div className="relative pl-16">
                  <div className="absolute left-6 top-6 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <Card className="p-6 shadow-lg border-0 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          Handover the project
                        </h3>
                        <p className="text-sm text-gray-500">
                          Piquefames
                        </p>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 p-0">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We're your dedicated project navigators-guiding every step
                      from concept to completion. With our expertise steering
                      the course, we turn ambitious plans into tangible results,
                      ensuring a smooth, stress-free journey every time.
                    </p>
                  </Card>
                </div>

                {/* Count the profit Card */}
                <div className="relative pl-16">
                  <div className="absolute left-6 top-6 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <Card className="p-6 shadow-lg border-0 bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          Count the profit
                        </h3>
                        <p className="text-sm text-gray-500">
                          Piquefames
                        </p>
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-8 h-8 p-0">
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Sit back, relax, and let the profits set sail - with us at
                      the helm, you can focus on living your life while we
                      navigate the path to financial success. Your journey to
                      prosperity, freedom, and lasting success begins right
                      here, right now.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* PARTNER Badge */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="bg-orange-400 px-6 py-2 rounded-full">
                <span className="text-black font-bold text-sm uppercase">
                  PARTNER
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-16">
              With The World Premier
              <br />
              <span className="text-black">80+ Brands</span>
            </h2>

            {/* Company Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-5xl mx-auto">
              {/* Meta Business Partner */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-shadow duration-300 p-2">
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758822891/MBP_wvxhjm.png"
                    alt="Meta Business Partner"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Google Partner */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-shadow duration-300 p-2">
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/FBB_redygb.png"
                    alt="Google Partner"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Instagram */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-shadow duration-300 p-2">
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758822891/instaa_odstlk.png"
                    alt="Instagram"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Facebook */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-shadow duration-300 p-2">
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/FBB_redygb.png"
                    alt="Facebook"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Google My Business */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-shadow duration-300 p-2">
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/GMB-1_znrh6k.png"
                    alt="Google My Business"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Google Cloud */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-shadow duration-300 p-2">
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/GC-1_cobjg6.png"
                    alt="Google Cloud"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* WordPress */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-3 hover:shadow-xl transition-shadow duration-300 p-2">
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1758822890/wp-1_vyt9kh.png"
                    alt="WordPress"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Clients Testimonials
            </h2>
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? "bg-orange-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Auto-sliding Testimonial Card */}
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="p-12 shadow-xl border-0 bg-white relative min-h-[500px]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                        {/* Left Side - Profile Image (Larger and Better Aligned) */}
                        <div className="flex justify-center lg:justify-start lg:pl-8">
                          <div className="relative">
                            <div className="w-64 h-64 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full p-3">
                              <div className="w-full h-full bg-white rounded-full p-3">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Testimonial Content */}
                        <div className="space-y-8 lg:pr-8">
                          {/* Rating */}
                          <div className="flex items-center gap-3">
                            <span className="text-base text-gray-600 font-medium">
                              Reviews On
                            </span>
                            <div className="flex items-center gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>

                          {/* Platform Info */}
                          <div className="flex items-center gap-3">
                            <span className="text-base font-semibold text-gray-800">
                              {testimonial.platform}
                            </span>
                            <span className="text-base text-gray-600">
                              {testimonial.reviewCount}
                            </span>
                          </div>

                          {/* Testimonial Quote */}
                          <blockquote className="text-xl text-gray-800 leading-relaxed font-medium">
                            "{testimonial.text}"
                          </blockquote>

                          {/* Attribution */}
                          <div className="pt-4">
                            <div className="font-bold text-black text-2xl">
                              {testimonial.name}
                            </div>
                            <div className="text-base text-gray-500 uppercase font-medium">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quote Mark */}
                      <div className="absolute top-8 right-8 text-8xl text-gray-200 font-serif">
                        "
                      </div>

                      {/* Testimonial Number */}
                      <div className="absolute bottom-8 right-8 text-5xl text-gray-200 font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent projects and see how we've helped
              brands achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover-lift border-0 shadow-soft">
              <div className="relative group">
                <img
                  src={portfolio1}
                  alt="TechStart Brand Identity"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      TechStart Brand Identity
                    </h3>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    Brand Identity
                  </Badge>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  TechStart Brand Identity
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>• 150% increase in brand recognition</div>
                  <div>• 85% improvement in customer trust</div>
                  <div>• $2M Series A funding success</div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift border-0 shadow-soft">
              <div className="relative group">
                <img
                  src={portfolio2}
                  alt="Green Leaf Social Campaign"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Green Leaf Social Campaign
                    </h3>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-secondary/10 text-secondary"
                  >
                    Social Media
                  </Badge>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Green Leaf Social Campaign
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>• 300% increase in social engagement</div>
                  <div>• 45% growth in foot traffic</div>
                  <div>• 25% increase in average order value</div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift border-0 shadow-soft">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center"
                  alt="E-commerce Platform"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      E-commerce Platform
                    </h3>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-600"
                  >
                    Web Design
                  </Badge>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  E-commerce Platform
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>• 200% increase in online sales</div>
                  <div>• 60% improvement in user experience</div>
                  <div>• 40% reduction in cart abandonment</div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift border-0 shadow-soft">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
                  alt="SEO Optimization"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      SEO Optimization
                    </h3>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-600"
                  >
                    SEO
                  </Badge>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>• 300% increase in organic traffic</div>
                  <div>• 85% improvement in search rankings</div>
                  <div>• 50% boost in lead generation</div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift border-0 shadow-soft">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center"
                  alt="Creative Design"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">Creative Design</h3>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-600"
                  >
                    Design
                  </Badge>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>• 180% increase in brand recognition</div>
                  <div>• 70% improvement in user engagement</div>
                  <div>• 35% boost in conversion rates</div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift border-0 shadow-soft">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center"
                  alt="Digital Marketing"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      Digital Marketing
                    </h3>
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-600"
                  >
                    Marketing
                  </Badge>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Digital Marketing
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>• 250% increase in lead generation</div>
                  <div>• 90% improvement in ROI</div>
                  <div>• 65% growth in customer acquisition</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="hover-lift">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              The best pricing plans to
              <br />
              <span className="text-orange-500">get your best</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monthly Package 1 - Starter */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-300/5 to-yellow-300/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Monthly Package 1
                  </h3>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full mb-6">
                    Starter
                  </div>
                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      ₹7,999
                    </span>
                    <span className="text-lg text-gray-500 ml-2">+GST</span>
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

            {/* Monthly Package 2 - Basic */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-300/5 to-indigo-300/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Monthly Package 2
                  </h3>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-6">
                    Basic
                  </div>
                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      ₹19,999
                    </span>
                    <span className="text-lg text-gray-500 ml-2">+GST</span>
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
          </div>

          {/* Second Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Monthly Package 3 - Advanced */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-300/5 to-teal-300/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Monthly Package 3
                  </h3>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full mb-6">
                    Advanced
                  </div>
                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      ₹29,999
                    </span>
                    <span className="text-lg text-gray-500 ml-2">+GST</span>
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

            {/* Monthly Package 4 - Premium */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-300/5 to-pink-300/5 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Monthly Package 4
                  </h3>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-6">
                    Premium
                  </div>
                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      ₹49,999
                    </span>
                    <span className="text-lg text-gray-500 ml-2">+GST</span>
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
                    <span className="text-gray-800 font-medium">GMB SEO</span>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's create something extraordinary together. Get in touch and
            let's discuss how we can help your brand reach new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover-lift"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary hover-lift"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Enhanced Contact Form */}
                <div className="space-y-8">
                  <form className="space-y-8">
                    {/* Name Field */}
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      />
                    </div>

                    {/* Email and Phone Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tell Us About Your Project *
                      </label>
                      <textarea
                        placeholder="Describe your project goals, timeline, and any specific requirements..."
                        rows={5}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        onClick={() => {
                          // Handle form submission
                          alert(
                            "Thank you for your interest! We will contact you soon."
                          );
                        }}
                        className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-5 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
                      >
                        <span className="flex items-center justify-center gap-4">
                          Get In Touch
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            <ArrowRight className="h-5 w-5 text-white" />
                          </div>
                        </span>
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Right Side - Modern Character Illustration */}
                <div className="flex justify-center lg:justify-end relative">
                  <div className="relative">
                    {/* Background Gradient Circle */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-200 to-pink-200 rounded-full w-96 h-96 opacity-60"></div>

                    {/* Animated Contact GIF */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-80 h-96 flex items-center justify-center">
                        <img
                          src="https://res.cloudinary.com/dknafpppp/image/upload/v1758823616/contact-animation_wri6nf.gif"
                          alt="Contact Animation"
                          className="w-full h-full object-contain rounded-2xl shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-12 right-8 w-20 h-20 opacity-30">
                      <svg
                        viewBox="0 0 80 80"
                        className="w-full h-full text-gray-600"
                      >
                        <path
                          d="M40 8 C 20 8, 8 20, 8 40 C 8 60, 20 72, 40 72 C 60 72, 72 60, 72 40"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-16 right-12 w-16 h-16 opacity-30">
                      <svg
                        viewBox="0 0 64 64"
                        className="w-full h-full text-gray-600"
                      >
                        <path
                          d="M32 4 C 16 4, 4 16, 4 32 C 4 48, 16 60, 32 60 C 48 60, 60 48, 60 32"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>

                    {/* Star Icon */}
                    <div className="absolute top-20 right-12 w-8 h-8 text-gray-500 opacity-40">
                      <svg viewBox="0 0 32 32" className="w-full h-full">
                        <path
                          d="M16 2 L 20 12 L 30 12 L 22 20 L 26 30 L 16 24 L 6 30 L 10 20 L 2 12 L 12 12 Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Hello 👋 We're available to Grow your Business
          </h2>

          {/* Quick Response Section */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="text-lg text-black font-medium">
              For quick response:
            </span>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium flex items-center gap-3 relative z-10">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-sm">S</span>
                </div>
                Chat now
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={() => {
                // Scroll to contact section
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:shadow-lg"
            >
              Contact Us.
            </Button>
            <Button
              onClick={() => {
                // Scroll to contact section
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            >
              <ArrowRight className="h-5 w-5 transform rotate-45" />
            </Button>
          </div>
        </div>
      </section>

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
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
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
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
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
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
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

            {/* Technical Solutions */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">89%</div>
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Technical Solutions
                </h3>
              </div>
            </div>

            {/* Search Engine Optimization (SEO) */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">97%</div>
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Search Engine Optimization (SEO)
                </h3>
              </div>
            </div>

            {/* Automation Services */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">90%</div>
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Automation Services
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
            <div className="bg-blue-50 rounded-2xl p-8 relative overflow-hidden">
              {/* 3D Phone Illustration */}
              <div className="absolute left-4 top-8 w-24 h-24">
                <div className="relative">
                  {/* Phone Body */}
                  <div className="w-16 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl shadow-lg transform rotate-12">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-300 rounded"></div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-200 rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-blue-300 rounded"></div>
                  </div>
                  {/* Sound Waves */}
                  <div className="absolute -right-2 top-6 w-8 h-8 border-2 border-yellow-400 rounded-full animate-pulse"></div>
                  <div
                    className="absolute -right-6 top-4 w-12 h-12 border-2 border-yellow-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute -right-10 top-2 w-16 h-16 border-2 border-yellow-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>

              {/* Contact Text */}
              <div className="ml-32 relative z-10">
                <div
                  className="text-4xl font-bold text-red-500 mb-2"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                >
                  <div>CONTACT</div>
                  <div className="text-3xl">US</div>
                </div>
              </div>

              {/* Chat Prompt */}
              <div className="absolute top-4 right-4 text-right">
                <p className="text-sm text-gray-700 mb-2">
                  Still have a question?
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  Chat with our experts
                </p>
                <div className="flex justify-end mt-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - FAQ Section */}
            <div>
              {/* FAQ Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>FAQ</span>
              </div>

              {/* FAQ Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>

              {/* FAQ Accordion */}
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="bg-black text-white px-6 py-4 hover:bg-gray-800 transition-colors">
                    <span className="text-left font-semibold">
                      Why should I choose Piquefames over other agencies?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-6 py-4 text-gray-700">
                    <p>
                      Piquefames stands out as a results-driven,
                      client-focused, and technologically advanced digital
                      marketing partner. With our proven track record,
                      personalized strategies, and commitment to transparent
                      communication, we elevate your online presence and drive
                      sustainable business growth.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="bg-white text-black px-6 py-4 hover:bg-gray-50 transition-colors">
                    <span className="text-left font-semibold">
                      What sets Piquefames apart from the competition?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-6 py-4 text-gray-700">
                    <p>
                      Our unique combination of creative excellence, data-driven
                      strategies, and cutting-edge technology sets us apart. We
                      don't just create campaigns; we build lasting
                      relationships and deliver measurable results that drive
                      your business forward.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="bg-white text-black px-6 py-4 hover:bg-gray-50 transition-colors">
                    <span className="text-left font-semibold">
                      How can Piquefame guarantee accurate reporting?
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="bg-white px-6 py-4 text-gray-700">
                    <p>
                      We use advanced analytics tools and real-time tracking
                      systems to provide comprehensive, accurate reporting. Our
                      transparent reporting process ensures you always know
                      exactly how your campaigns are performing and where your
                      investment is going.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
