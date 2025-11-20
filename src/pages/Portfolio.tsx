import { ArrowRight, ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      id: 4,
      title: "JS Laboratories",
      category: "Branding Strategy",
      description:
        "Developed a strong brand identity for JS Laboratories, positioning it as a premium, GMP-compliant personal care and cosmetic manufacturing partner.",
      image:
        "https://res.cloudinary.com/drvsbodf2/image/upload/v1761905661/JS_Laboratories_mxsqmq.jpg",
      tags: ["Branding", "Visual Identity", "Corporate Communication"],
      date: "2024",
      results: [
        "Stronger industry presence",
        "Clear, professional identity",
        "Increased credibility with pharma & cosmetic brands",
      ],
      challenge:
        "JS Laboratories needed to establish itself as a premium, trustworthy manufacturing partner in the highly competitive pharmaceutical and cosmetic manufacturing industry.",
      solution:
        "We crafted a comprehensive brand identity including logo applications, brand colors, messaging guidelines, and corporate tone that reflects trust, innovation, and scientific excellence. The result is a cohesive brand that commands respect in the industry.",
    },
    {
      id: 2,
      title: "V4 Homes & Properties",
      category: "Lead Generation",
      description:
        "Created a targeted lead-generation funnel for global buyers on Social media & trade networks.",
      image:
        "https://res.cloudinary.com/drvsbodf2/image/upload/v1761905638/home_msql6a.png",
      tags: ["Lead Generation", "Email Marketing", "B2B"],
      date: "2024",
      results: [
        "400+ qualified leads",
        "25% email open rate",
        "Increased buyer inquiries",
      ],
      challenge:
        "V4 Exports needed to reach international buyers and establish credibility in global trade networks while generating high-quality leads.",
      solution:
        "We designed targeted ads and strategic email outreach campaigns with clear CTAs, positioning V4 Exports as a trusted export partner. The multi-channel approach maximized reach and conversions.",
    },
    {
      id: 3,
      title: "Physiq",
      category: "E-Commerce Website",
      description:
        "Designed a sleek, user-friendly store showcasing Physiq's sports recovery products.",
      image:
        "https://res.cloudinary.com/drvsbodf2/image/upload/v1761903308/Physiq_image_jop3yn.jpg",
      tags: ["Web Design", "E-Commerce", "Content Strategy"],
      date: "2024",
      results: [
        "Boosted online visibility",
        "Enhanced shopping experience",
        "Stronger customer trust",
      ],
      challenge:
        "Physiq needed an e-commerce platform that would effectively showcase their sports recovery products while providing an intuitive shopping experience for athletes and fitness enthusiasts.",
      solution:
        "We developed a modern, performance-focused website with compelling product descriptions, educational blog-style guides, and high-quality visual assets. The design speaks directly to the fitness community.",
    },

    {
      id: 1,
      title: "Jobha Cosmetics",
      category: "Campaign Strategy",
      description:
        "Blended South-Indian tradition with modern skincare through digital storytelling.",
      image:
        "https://res.cloudinary.com/drvsbodf2/image/upload/v1761906269/Jobha_Image_kuftlv.jpg",
      tags: ["Campaign Strategy", "Influencer Marketing", "Social Media"],
      date: "2024",
      results: ["2.3M+ impressions", "180K+ engagements", "35% sales uplift"],
      challenge:
        "Jobha Cosmetics needed to bridge traditional South-Indian beauty practices with modern skincare expectations while building brand awareness in a competitive market.",
      solution:
        "We created an influencer-led campaign featuring regional ads across Instagram and Facebook, celebrating heritage while showcasing innovation. The storytelling approach resonated deeply with the target audience.",
    },
  ];

  const categories = [
    "All",
    "Campaign Strategy",
    "Lead Generation",
    "E-Commerce Website",
    "Branding Strategy",
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-white/90">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Explore our featured work and see how we've helped brands transform
            their presence and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-background sticky top-16 z-40 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition-all duration-500 hover:scale-105"
                    : "hover-lift transition-transform duration-500 hover:scale-105"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group rounded-2xl shadow-medium">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-contain transition-transform duration-500 group-hover:scale-110 hover-lift"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div> */}
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {project.category}
                    </Badge>
                    {/* <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div> */}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                    {project.title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.challenge}
                    </p>

                    <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                    <p className="text-muted-foreground mb-6">
                      {project.solution}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Results</h3>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                          <span className="text-muted-foreground">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="flex items-center gap-1 transition-transform duration-500 hover:scale-105"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Portfolio <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our work speaks for itself. Here are some key metrics from our
              recent projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-soft hover-lift transition-transform duration-500 hover:scale-105">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-muted-foreground font-medium">
                  Campaigns Launched
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-soft hover-lift transition-transform duration-500 hover:scale-105">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  2.5x
                </div>
                <div className="text-muted-foreground font-medium">
                  Average ROI
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-soft hover-lift transition-transform duration-500 hover:scale-105">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  Happy Clients
                </div>
                <div className="text-muted-foreground font-medium">
                  = Happy Us
                </div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-soft hover-lift transition-transform duration-500 hover:scale-105">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  Startup Energy
                </div>
                <div className="text-muted-foreground font-medium">
                  Big Impact
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
            Ready to PIQUE some interest? Let's turn your brand into everyone's
            FAME.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover-lift transition-transform duration-500 hover:scale-105"
              onClick={() =>
                window.open("https://wa.me/916380974957", "_blank")
              }
            >
              Get A Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
