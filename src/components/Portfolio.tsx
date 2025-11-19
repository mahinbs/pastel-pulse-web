import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/drvsbodf2/image/upload/v1761906269/Jobha_Image_kuftlv.jpg",
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
        "https://res.cloudinary.com/drvsbodf2/image/upload/v1761905638/home_msql6a.png",
      title: "V4 Homes & Properties",
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
        "https://res.cloudinary.com/drvsbodf2/image/upload/v1761903308/Physiq_image_jop3yn.jpg",
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
        "https://res.cloudinary.com/drvsbodf2/image/upload/v1761905661/JS_Laboratories_mxsqmq.jpg",
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
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore some of our recent projects and see how we've helped brands
              achieve remarkable results.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 0.2}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={800}
                gyroscope={true}
              >
                <Card className="overflow-hidden hover-lift border-0 shadow-soft">
                  <div className="relative group">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className={item.badgeClass}>
                        {item.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <motion.div 
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.5 + achievementIndex * 0.1,
                            duration: 0.3
                          }}
                        >
                          • {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.8}>
          <div className="text-center">
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="hover-lift">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </Tilt>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Portfolio;
