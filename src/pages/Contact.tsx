import { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from '@/components/AnimatedSection';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9am-6pm EST'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'hello@pixelperfect.agency',
      description: 'We respond within 2 hours'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      details: '123 Creative Street, Design District, NY 10001',
      description: 'Visit us by appointment'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      details: 'Monday - Friday: 9am - 6pm',
      description: 'Weekend support available'
    }
  ];

  const services = [
    'Brand Identity',
    'Web Design',
    'Social Media Marketing',
    'Creative Design',
    'Local SEO',
    'Digital Strategy',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Not sure yet'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Let's Start Something <span className="text-white/90">Amazing</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to transform your brand? We'd love to hear about your project 
              and explore how we can help you achieve your goals.
            </motion.p>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="left" delay={0.2}>
              <div>
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get in <span className="text-gradient">Touch</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </motion.div>

                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={800}
                  gyroscope={true}
                >
                  <Card className="border-0 shadow-medium">
                    <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service">Service Needed</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover-lift">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
                </Tilt>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Contact <span className="text-gradient">Information</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Prefer to reach out directly? Here are all the ways to get in touch with us.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <AnimatedSection key={index} delay={0.6 + index * 0.1}>
                      <Tilt
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={1000}
                        scale={1.02}
                        transitionSpeed={800}
                        gyroscope={true}
                      >
                        <Card className="border-0 shadow-soft hover-lift">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <motion.div 
                                className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0"
                                animate={{ 
                                  rotate: [0, 5, 0],
                                  scale: [1, 1.05, 1]
                                }}
                                transition={{ 
                                  duration: 2 + index * 0.5,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                {info.icon}
                              </motion.div>
                              <div>
                                <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                                <p className="text-foreground font-medium mb-1">{info.details}</p>
                                <p className="text-muted-foreground text-sm">{info.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Tilt>
                    </AnimatedSection>
                  ))}
                </div>

              {/* Quick Stats */}
              <AnimatedSection delay={1.0}>
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={800}
                  gyroscope={true}
                >
                  <Card className="mt-8 border-0 shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardContent className="p-8 text-center">
                      <motion.h3 
                        className="text-2xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        Why Work With Us?
                      </motion.h3>
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { number: "24h", label: "Response Time" },
                          { number: "98%", label: "Client Satisfaction" },
                          { number: "250+", label: "Happy Clients" },
                          { number: "5+", label: "Years Experience" }
                        ].map((stat, index) => (
                          <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              delay: 1.2 + index * 0.1,
                              duration: 0.5,
                              type: "spring",
                              stiffness: 200
                            }}
                          >
                            <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Tilt>
              </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                What Happens <span className="text-gradient">Next?</span>
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Here's what you can expect after you reach out to us.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We'll schedule a call to discuss your project, goals, and requirements in detail.",
                gradient: "bg-gradient-primary"
              },
              {
                step: "2",
                title: "Proposal & Strategy",
                description: "We'll create a custom proposal with timeline, pricing, and strategic recommendations.",
                gradient: "bg-gradient-secondary"
              },
              {
                step: "3",
                title: "Project Kickoff",
                description: "Once approved, we'll begin work immediately with regular updates and check-ins.",
                gradient: "bg-gradient-accent"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.4 + index * 0.2}>
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div className="text-center">
                    <motion.div 
                      className={`w-16 h-16 ${item.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 2, 0]
                      }}
                      transition={{ 
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
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
                transition={{ duration: 0.6 }}
              >
                Common <span className="text-gradient">Questions</span>
              </motion.h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start my project?",
                answer: "We typically begin projects within 1-2 weeks of contract signing, depending on our current workload and project complexity."
              },
              {
                question: "Do you work with businesses outside the US?",
                answer: "Yes! We work with clients globally and have experience with different time zones, cultures, and market requirements."
              },
              {
                question: "What if I need ongoing support after project completion?",
                answer: "We offer various ongoing support packages including maintenance, updates, and continued strategic guidance."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <Tilt
                  tiltMaxAngleX={3}
                  tiltMaxAngleY={3}
                  perspective={1000}
                  scale={1.01}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <Card className="border-0 shadow-soft">
                    <CardHeader>
                      <CardTitle className="flex items-start gap-3">
                        <motion.div
                          animate={{ 
                            rotate: [0, 5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 2 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        </motion.div>
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;