import { ArrowRight, Users, Award, Target, Heart, Star, Coffee, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const team = [
    {
      name: 'Sarah Martinez',
      role: 'Creative Director',
      description: 'Award-winning designer with 8+ years of experience in brand identity and visual storytelling.',
      expertise: ['Brand Strategy', 'Visual Identity', 'Creative Direction']
    },
    {
      name: 'Michael Chen',
      role: 'Digital Marketing Lead',
      description: 'Expert in digital marketing strategies with a proven track record of driving growth.',
      expertise: ['Social Media', 'SEO/SEM', 'Analytics']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Web Development Director',
      description: 'Full-stack developer passionate about creating beautiful, functional web experiences.',
      expertise: ['Frontend', 'Backend', 'UX/UI']
    },
    {
      name: 'David Johnson',
      role: 'Brand Strategist',
      description: 'Strategic thinker who helps brands find their unique voice and market position.',
      expertise: ['Brand Positioning', 'Market Research', 'Strategy']
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion-Driven',
      description: 'We pour our heart into every project, treating your brand as our own and striving for excellence in everything we do.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative',
      description: 'We believe the best results come from true partnership, working closely with our clients every step of the way.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation-Focused',
      description: 'We stay ahead of trends and constantly explore new technologies and creative approaches to deliver cutting-edge solutions.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Results-Oriented',
      description: 'Every decision we make is guided by data and focused on achieving measurable results for our clients.'
    }
  ];

  const stats = [
    { number: '2019', label: 'Founded' },
    { number: '250+', label: 'Happy Clients' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Awards Won' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-white/90">Pixel Perfect</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of creatives, strategists, and technologists 
            dedicated to helping brands tell their stories and achieve their goals.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, Pixel Perfect began as a small studio with a big vision: 
                  to help businesses create authentic connections with their audiences through 
                  exceptional design and strategic thinking.
                </p>
                <p>
                  What started as a two-person team has grown into a diverse group of creatives, 
                  each bringing unique perspectives and expertise to every project. We've had 
                  the privilege of working with startups, established businesses, and everything in between.
                </p>
                <p>
                  Today, we continue to be driven by the same passion that started it all: 
                  creating work that not only looks beautiful but delivers real, measurable results 
                  for our clients.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 shadow-soft hover-lift">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/20">
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
              <Card key={index} className="text-center border-0 shadow-soft hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">
                    {value.title}
                  </CardTitle>
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
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse group of passionate professionals who bring creativity, 
              expertise, and dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift border-0 shadow-soft overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
            "To empower businesses of all sizes to tell their unique stories, connect 
            authentically with their audiences, and achieve sustainable growth through 
            exceptional design, strategic thinking, and innovative digital solutions."
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
            <Button size="lg" className="bg-gradient-primary hover-lift">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="hover-lift">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;