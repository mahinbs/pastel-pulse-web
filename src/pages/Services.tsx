import { ArrowRight, Star, Zap, Users, Award, CheckCircle, Target, TrendingUp, Palette, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Star className="h-12 w-12" />,
      title: 'Social Media Marketing',
      description: 'Comprehensive social media strategies that engage your audience and drive meaningful conversations.',
      features: [
        'Strategic content planning and creation',
        'Community management and engagement',
        'Paid social advertising campaigns',
        'Analytics and performance tracking',
        'Influencer partnership coordination',
        'Brand voice development'
      ],
      pricing: 'Starting at $2,500/month'
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'Creative Design',
      description: 'Stunning visual identities and creative assets that make your brand unforgettable.',
      features: [
        'Logo design and brand identity',
        'Print and digital marketing materials',
        'Packaging and product design',
        'Brand guidelines development',
        'Photography art direction',
        'Motion graphics and animations'
      ],
      pricing: 'Starting at $3,500/project'
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Local SEO',
      description: 'Dominate local search results and connect with customers in your area effectively.',
      features: [
        'Google My Business optimization',
        'Local keyword research and targeting',
        'Citation building and management',
        'Review management strategies',
        'Local content creation',
        'Location-based PPC campaigns'
      ],
      pricing: 'Starting at $1,800/month'
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Design',
      description: 'Modern, responsive websites that convert visitors into customers and drive business growth.',
      features: [
        'Custom website design and development',
        'Mobile-responsive layouts',
        'E-commerce platform integration',
        'Content management systems',
        'SEO optimization',
        'Performance and security optimization'
      ],
      pricing: 'Starting at $5,000/project'
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your brand, audience, and goals to create a comprehensive strategy.'
    },
    {
      step: '02',
      title: 'Creative Development',
      description: 'Our team develops creative concepts and prototypes aligned with your brand vision.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy with precision, ensuring every detail meets our high standards.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization to maximize results and ROI.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-white/90">Services</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive branding and digital marketing solutions designed to 
            elevate your business and drive meaningful results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-0 shadow-medium overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5 pb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-4 text-foreground">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-lg font-semibold text-primary">
                      {service.pricing}
                    </div>
                    <Button className="bg-gradient-primary hover-lift">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project delivers 
              exceptional results and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient">Pixel Perfect?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Award-Winning Team</h3>
                    <p className="text-muted-foreground">Our creative team has won multiple industry awards and recognition for excellence.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">We've helped over 250 brands achieve measurable growth and success.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Client-Focused Approach</h3>
                    <p className="text-muted-foreground">We prioritize your goals and work as an extension of your team.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg font-semibold mb-4">Client Satisfaction Rate</div>
              <p className="text-muted-foreground mb-6">
                Our commitment to excellence shows in our client retention and satisfaction scores.
              </p>
              <Button size="lg" className="bg-gradient-primary hover-lift">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover-lift">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;