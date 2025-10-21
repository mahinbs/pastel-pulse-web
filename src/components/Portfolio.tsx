import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop&crop=center",
      title: "Jobha Cosmetics",
      category: "Campaign Strategy",
      year: "2024",
      badgeClass: "bg-orange-100 text-orange-600",
      description:
        "Blended South-Indian tradition with modern skincare through digital storytelling.",
      execution:
        "Influencer reels + regional ads across Instagram and Facebook",
      achievements: [
        "2.3M+ impressions",
        "180K+ engagements",
        "35% sales uplift",
      ],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center",
      title: "V4 Exports",
      category: "Lead Generation",
      year: "2024",
      badgeClass: "bg-blue-100 text-blue-600",
      description:
        "Created a targeted lead-generation funnel for global buyers on Social media & trade networks.",
      execution: "Designed ads, and email outreach with clear CTAs.",
      achievements: [
        "400+ qualified leads",
        "25% email open rate",
        "Increased buyer inquiries",
      ],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&crop=center",
      title: "Physiq",
      category: "E-Commerce Website",
      year: "2024",
      badgeClass: "bg-purple-100 text-purple-600",
      description:
        "Designed a sleek, user-friendly store showcasing Physiq's sports recovery products.",
      execution:
        "Developed product descriptions, blog-style guides, and visual assets that speak to athletes, gym-goers, and fitness enthusiasts.",
      achievements: [
        "Boosted online visibility",
        "Enhanced shopping experience",
        "Stronger customer trust",
      ],
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop&crop=center",
      title: "JS Laboratories",
      category: "Branding Strategy",
      year: "2024",
      badgeClass: "bg-green-100 text-green-600",
      description:
        "Developed a strong brand identity for JS Laboratories, positioning it as a premium, GMP-compliant personal care and cosmetic manufacturing partner.",
      execution:
        "Designed brand visuals, messaging, and communication guidelines — including logo applications, brand colors, and corporate tone that reflect trust, innovation, and scientific excellence.",
      achievements: [
        "Stronger industry presence",
        "Clear, professional identity",
        "Increased credibility with pharma & cosmetic brands",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our recent projects and see how we've helped brands
            achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover-lift border-0 shadow-soft"
            >
              <div className="relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className={item.badgeClass}>
                    {item.category}
                  </Badge>
                  {/* <span className="text-sm text-muted-foreground">
                    {item.year}
                  </span> */}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {item.achievements.map((achievement, index) => (
                    <div key={index}>• {achievement}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="hover-lift">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
