import { ArrowRight, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'TechStart Brand Identity',
      category: 'Brand Identity',
      description: 'Complete visual identity redesign for a growing tech startup, including logo, brand guidelines, and marketing materials.',
      image: portfolio1,
      tags: ['Branding', 'Logo Design', 'Guidelines'],
      date: '2024',
      results: [
        '150% increase in brand recognition',
        '85% improvement in customer trust scores',
        'Successfully raised $2M in Series A funding'
      ],
      challenge: 'TechStart needed a professional identity that would appeal to enterprise clients while maintaining startup agility.',
      solution: 'We created a modern, scalable identity system with clean typography and a dynamic logo that represents growth and innovation.'
    },
    {
      id: 2,
      title: 'Green Leaf Social Campaign',
      category: 'Social Media',
      description: 'Comprehensive social media marketing campaign that transformed a local cafe into a community hub.',
      image: portfolio2,
      tags: ['Social Media', 'Content Strategy', 'Community'],
      date: '2024',
      results: [
        '300% increase in social engagement',
        '45% growth in foot traffic',
        '25% increase in average order value'
      ],
      challenge: 'Green Leaf Cafe was struggling to compete with chain coffee shops and needed to build a loyal local community.',
      solution: 'We developed a storytelling approach that highlighted local partnerships, sustainability efforts, and community events.'
    }
  ];

  const categories = ['All', 'Brand Identity', 'Social Media', 'Web Design', 'Creative Design'];

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
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-primary" : "hover-lift"}
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
            {projects.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group overflow-hidden rounded-2xl shadow-medium hover-lift">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-primary">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                    {project.title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Challenge</h3>
                    <p className="text-muted-foreground mb-4">{project.challenge}</p>
                    
                    <h3 className="text-xl font-semibold mb-3">Our Solution</h3>
                    <p className="text-muted-foreground mb-6">{project.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Results</h3>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button size="lg" className="bg-gradient-primary hover-lift">
                    View Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
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
              Our work speaks for itself. Here are some key metrics from our recent projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-soft hover-lift">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-soft hover-lift">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">250%</div>
                <div className="text-muted-foreground">Average ROI Increase</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-soft hover-lift">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-soft hover-lift">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Industry Awards</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's work together to create a project that delivers exceptional results 
            and exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover-lift">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;