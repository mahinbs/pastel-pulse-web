import {
  ArrowRight,
  Users,
  Award,
  Target,
  Heart,
  Star,
  Coffee,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Sharmila K",
      role: "Creative Director",
      description:
        "A visionary creator who turns ideas into stunning visuals and brand-defining designs.",
    },
    {
      name: "Rekha S",
      role: "Digital Marketing Lead",
      description:
        "A growth-driven strategist who knows how to make every click count.",
    },
    {
      name: "Aishwarya A",
      role: "Brand Strategist",
      description:
        "A sharp storyteller who helps brands find their true voice and place in the market.",
    },
    {
      name: "Sathya Raj B",
      role: "Web Development Project Lead",
      description:
        "A tech-savvy creator who builds sleek, functional websites that blend design with seamless user experience.",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion-Driven",
      description:
        "We pour our heart into every project, treating your brand as our own and striving for excellence in everything we do.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative",
      description:
        "We believe the best results come from true partnership, working closely with our clients every step of the way.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation-Focused",
      description:
        "We stay ahead of trends and constantly explore new technologies and creative approaches to deliver cutting-edge solutions.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Oriented",
      description:
        "Every decision we make is guided by data and focused on achieving measurable results for our clients.",
    },
  ];

  const stats = [
    { number: "2019", label: "Founded" },
    { number: "250+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Awards Won" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-white/90">Piquefame</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            PIQUEFAME is a Chennai-based startup that blends creativity,
            strategy, and storytelling to help brands get seen, heard, and
            remembered. We don’t just market — we make digital fame happen
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  PIQUEFAME was born with a simple belief —{" "}
                  <b>brands deserve more than ordinary marketing.</b> <br />
                  What started as a spark of creativity has grown into a space
                  where ideas turn into campaigns that connect, convert, and
                  create impact. <br /> We’re a young team with bold energy,
                  mixing strategy and storytelling to help brands stand out,
                  build trust, and win attention in a noisy digital world.
                </p>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-soft hover-lift"
                >
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Our Values */}
      {/* <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work
              with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-soft hover-lift"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A crew of curious creators and sharp strategists, bringing bold
              ideas, smart moves, and all-in energy to every brand we touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="hover-lift border-0 shadow-soft overflow-hidden"
              >
                <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Award className="h-16 w-16 mx-auto mb-6 text-white/80" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
            "At PIQUEFAME, our mission is to help brands cut through the noise
            with creativity, clarity, and strategy. We exist to turn everyday
            businesses into unforgettable digital experiences — building not
            just campaigns, but communities, conversations, and growth."
          </p>
          <div className="flex items-center justify-center gap-2 text-white/60">
            <Coffee className="h-5 w-5" />
            <span>Fueled by creativity and great coffee</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work <span className="text-gradient">Together?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to learn more about your brand and explore how we can help
            you achieve your goals. Let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="https://wa.me/917358250143">
              <Button size="lg" className="bg-gradient-primary hover-lift">
                Get A Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="hover-lift">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
