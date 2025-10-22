import { ArrowRight, Check, Star, Zap, Award, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import AnimatedSection from '@/components/AnimatedSection';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses looking to establish their digital presence',
      badge: '',
      features: [
        'Social media management (2 platforms)',
        'Content creation (8 posts/month)',
        'Basic brand guidelines',
        'Monthly performance reports',
        'Email support',
        '1 revision round per project'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,500',
      period: '/month',
      description: 'Ideal for growing businesses ready to scale their marketing efforts',
      badge: 'Most Popular',
      features: [
        'Social media management (4 platforms)',
        'Content creation (16 posts/month)',
        'Complete brand identity package',
        'SEO optimization (10 keywords)',
        'Bi-weekly strategy calls',
        'Priority support',
        '3 revision rounds per project',
        'Quarterly brand audits'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Comprehensive solutions for established brands with complex needs',
      badge: 'Best Value',
      features: [
        'Full-service brand management',
        'Custom content strategy',
        'Dedicated account manager',
        'Advanced analytics & reporting',
        'Unlimited revisions',
        '24/7 priority support',
        'Custom integrations',
        'White-label solutions'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const services = [
    {
      category: 'Brand Identity',
      items: [
        { service: 'Logo Design', price: '$1,500 - $3,500' },
        { service: 'Brand Guidelines', price: '$2,000 - $4,000' },
        { service: 'Complete Brand Package', price: '$5,000 - $15,000' }
      ]
    },
    {
      category: 'Web Design',
      items: [
        { service: 'Landing Page', price: '$2,500 - $5,000' },
        { service: 'Business Website', price: '$5,000 - $15,000' },
        { service: 'E-commerce Platform', price: '$10,000 - $25,000' }
      ]
    },
    {
      category: 'Digital Marketing',
      items: [
        { service: 'Social Media Setup', price: '$1,000 - $2,500' },
        { service: 'SEO Audit & Strategy', price: '$2,000 - $5,000' },
        { service: 'PPC Campaign Management', price: '$1,500/month + ad spend' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the onboarding process?',
      answer: 'Our onboarding includes a comprehensive brand audit, strategy session, goal setting, and creation of your custom project roadmap. This typically takes 1-2 weeks.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle.'
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Absolutely! We understand every business is unique. Contact us to discuss a custom package that fits your specific needs and budget.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with our work, we\'ll make it right or provide a full refund.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Simple, Transparent <span className="text-white/90">Pricing</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Choose the perfect plan for your business. All plans include our signature 
              attention to detail and commitment to your success.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={800}
                  gyroscope={true}
                >
                  <Card className={`relative hover-lift border-0 shadow-medium overflow-hidden ${plan.popular ? 'ring-2 ring-primary shadow-strong' : ''}`}>
                    {plan.badge && (
                      <motion.div 
                        className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                      >
                        {plan.badge}
                      </motion.div>
                    )}
                    
                    <CardHeader className={`text-center ${plan.badge ? 'pt-12' : 'pt-6'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                      >
                        <CardTitle className="text-2xl font-bold mb-2">
                          {plan.name}
                        </CardTitle>
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-primary">{plan.price}</span>
                          <span className="text-muted-foreground">{plan.period}</span>
                        </div>
                        <CardDescription className="leading-relaxed">
                          {plan.description}
                        </CardDescription>
                      </motion.div>
                    </CardHeader>

                    <CardContent>
                      <motion.ul 
                        className="space-y-3 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                      >
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.7 + index * 0.2 + featureIndex * 0.1 
                            }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            </motion.div>
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>

                      <Tilt
                        tiltMaxAngleX={8}
                        tiltMaxAngleY={8}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                      >
                        <Button 
                          size="lg" 
                          className={`w-full hover-lift ${plan.popular ? 'bg-gradient-primary' : ''}`}
                          variant={plan.popular ? 'default' : 'outline'}
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Tilt>
                    </CardContent>
                  </Card>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project-Based Pricing */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Project-Based <span className="text-gradient">Pricing</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Prefer to work on a project basis? Here's our pricing for individual services.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={800}
                  gyroscope={true}
                >
                  <Card className="border-0 shadow-soft hover-lift">
                    <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                      >
                        <CardTitle className="text-xl font-bold text-center">
                          {category.category}
                        </CardTitle>
                      </motion.div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                      >
                        {category.items.map((item, itemIndex) => (
                          <motion.div 
                            key={itemIndex} 
                            className="flex justify-between items-center pb-3 border-b border-border last:border-b-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 0.7 + index * 0.2 + itemIndex * 0.1 
                            }}
                          >
                            <span className="font-medium">{item.service}</span>
                            <span className="text-primary font-semibold">{item.price}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  </Card>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Frequently Asked <span className="text-gradient">Questions</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Have questions? We've got answers to help you make the right choice.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.01}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <Card className="border-0 shadow-soft hover-lift">
                    <CardHeader>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      >
                        <CardTitle className="text-lg font-semibold">
                          {faq.question}
                        </CardTitle>
                      </motion.div>
                    </CardHeader>
                    <CardContent>
                      <motion.p 
                        className="text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </CardContent>
                  </Card>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Why Choose <span className="text-gradient">Piquefame?</span>
              </motion.h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Award-Winning Work",
                description: "Recognized by industry leaders for excellence in design and strategy.",
                gradient: "bg-gradient-primary"
              },
              {
                icon: Star,
                title: "98% Client Satisfaction",
                description: "Our clients love working with us and frequently refer new business.",
                gradient: "bg-gradient-secondary"
              },
              {
                icon: Zap,
                title: "Fast Turnaround",
                description: "We deliver high-quality work on time, every time.",
                gradient: "bg-gradient-accent"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={800}
                  gyroscope={true}
                >
                  <div className="text-center">
                    <motion.div 
                      className={`w-16 h-16 ${item.gradient} rounded-full flex items-center justify-center text-white mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <item.icon className="h-8 w-8" />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Still have questions? We'd love to discuss your project and create 
              a custom solution that fits your needs and budget.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </Tilt>
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover-lift">
                  <Mail className="mr-2 h-5 w-5" />
                  Get a Quote
                </Button>
              </Tilt>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Pricing;