
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Brain, 
  Eye, 
  Shield, 
  Zap, 
  ChevronRight, 
  Activity, 
  Target, 
  AlertTriangle,
  Stethoscope,
  Cpu,
  Network,
  Sparkles,
  Play,
  Users,
  Award,
  Heart,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms provide real-time surgical guidance and decision support.",
      delay: "0.2s"
    },
    {
      icon: Eye,
      title: "Real-Time Phase Recognition",
      description: "Continuously monitors surgical procedures to identify current phases and predict next steps.",
      delay: "0.4s"
    },
    {
      icon: Shield,
      title: "Error Prevention",
      description: "Proactive detection and prevention of 'Never Events' through intelligent monitoring systems.",
      delay: "0.6s"
    },
    {
      icon: Target,
      title: "Precision Guidance",
      description: "Delivers precise, contextual recommendations to enhance surgical accuracy and outcomes.",
      delay: "0.8s"
    }
  ];

  const stats = [
    { number: "99.7%", label: "Accuracy Rate", icon: Target },
    { number: "50ms", label: "Response Time", icon: Zap },
    { number: "24/7", label: "Monitoring", icon: Activity },
    { number: "0", label: "Never Events", icon: Shield }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief of Surgery, Metro General Hospital",
      content: "SurgiGuide has revolutionized our operating room procedures. The real-time guidance has significantly reduced our error rates.",
      rating: 5
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Cardiac Surgeon, Heart Institute",
      content: "The AI-powered recommendations are incredibly accurate. It's like having a surgical mentor right beside you during every procedure.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Neurosurgeon, Brain & Spine Center",
      content: "The phase recognition technology is phenomenal. It anticipates our next steps with remarkable precision.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "Cardiac Surgery Success",
      hospital: "Metro General Hospital",
      improvement: "40% reduction in complications",
      description: "Implementation of SurgiGuide in cardiac procedures led to significant improvement in patient outcomes."
    },
    {
      title: "Neurosurgery Innovation",
      hospital: "Brain & Spine Center",
      improvement: "60% faster procedures",
      description: "Real-time guidance system optimized surgical workflows and reduced operation time."
    },
    {
      title: "Orthopedic Excellence",
      hospital: "Orthopedic Institute",
      improvement: "95% accuracy improvement",
      description: "Precision guidance eliminated wrong-site surgeries and enhanced procedural accuracy."
    }
  ];

  return (
    <div className="min-h-screen bg-tech-gray overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-red-glow to-transparent animate-matrix-rain opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="glass-effect border-b border-red-glow/20 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-glow rounded-full animate-glow-pulse flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-bold glow-text">SurgiGuide</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-300 hover:text-red-glow transition-colors">Features</a>
                <a href="#technology" className="text-gray-300 hover:text-red-glow transition-colors">Technology</a>
                <a href="#showcase" className="text-gray-300 hover:text-red-glow transition-colors">Showcase</a>
                <a href="#testimonials" className="text-gray-300 hover:text-red-glow transition-colors">Testimonials</a>
                <a href="#contact" className="text-gray-300 hover:text-red-glow transition-colors">Contact</a>
                <Button className="bg-red-glow hover:bg-red-primary text-white border-0 animate-glow-pulse">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 glass-effect border border-red-glow/30 rounded-full px-4 py-2 mb-8 backdrop-blur-xl">
              <Heart className="w-4 h-4 text-red-glow animate-pulse" />
              <span className="text-red-glow text-sm font-medium">AI-Powered Surgical Excellence</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-glow to-white bg-clip-text text-transparent leading-tight">
              The Future of
              <br />
              <span className="glow-text">Surgical Precision</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              SurgiGuide revolutionizes surgical procedures with AI-driven real-time guidance, 
              preventing errors and enhancing outcomes through intelligent monitoring and decision support.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-red-glow hover:bg-red-primary text-white px-8 py-4 text-lg animate-glow-pulse group glass-effect backdrop-blur-xl">
                Experience the Future
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-red-glow text-red-glow hover:bg-red-glow hover:text-white px-8 py-4 text-lg glass-effect backdrop-blur-xl">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Medical Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-cyber-red/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-red-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <Stethoscope className="absolute top-1/3 right-1/4 w-12 h-12 text-red-glow/30 animate-float" style={{ animationDelay: '1.5s' }} />
          <Heart className="absolute bottom-1/3 left-1/3 w-10 h-10 text-red-glow/40 animate-pulse" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className={`glass-effect border border-red-glow/30 bg-tech-light/20 backdrop-blur-xl p-6 text-center hover:bg-red-glow/10 transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <stat.icon className="w-8 h-8 text-red-glow mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 glow-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Surgery Showcase */}
      <section id="showcase" className="py-20 bg-gradient-to-r from-tech-gray via-tech-light/30 to-tech-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 glow-text">Live Surgery Showcase</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Witness SurgiGuide in action during real surgical procedures
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="glass-effect border border-red-glow/30 rounded-2xl overflow-hidden backdrop-blur-xl">
                <div className="aspect-video bg-gradient-to-br from-red-dark/20 to-red-secondary/20 flex items-center justify-center relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=450&fit=crop&crop=center" 
                    alt="Surgical procedure"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-red-glow/10 flex items-center justify-center">
                    <Button size="lg" className="bg-red-glow/80 hover:bg-red-glow text-white rounded-full w-20 h-20 backdrop-blur-xl">
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4 glass-effect px-3 py-1 rounded-full backdrop-blur-xl">
                    <span className="text-red-glow text-sm font-medium flex items-center">
                      <div className="w-2 h-2 bg-red-glow rounded-full mr-2 animate-pulse"></div>
                      LIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="glass-effect border border-red-glow/30 rounded-xl p-6 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Activity className="w-6 h-6 text-red-glow mr-3" />
                  Real-Time Monitoring
                </h3>
                <p className="text-gray-300 mb-4">
                  Our AI system continuously analyzes surgical procedures, providing instant feedback and guidance to surgeons.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-gray-300">Phase Recognition Active</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-gray-300">Error Detection On</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect border border-red-glow/30 rounded-xl p-6 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-red-glow mr-3" />
                  Success Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-glow">100%</div>
                    <div className="text-sm text-gray-400">Error Prevention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-glow">99.9%</div>
                    <div className="text-sm text-gray-400">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 glow-text">Revolutionary Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI technology designed to transform surgical procedures and eliminate preventable errors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`glass-effect border border-red-glow/30 bg-tech-light/20 backdrop-blur-xl p-8 hover:bg-red-glow/10 transition-all duration-500 hover:scale-105 animate-slide-in-left group`}
                style={{ animationDelay: feature.delay }}
              >
                <div className="w-16 h-16 bg-red-glow/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-glow/30 transition-colors backdrop-blur-xl">
                  <feature.icon className="w-8 h-8 text-red-glow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-r from-tech-gray via-tech-light/30 to-tech-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 glow-text">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world results from hospitals implementing SurgiGuide technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="glass-effect border border-red-glow/30 bg-tech-light/20 backdrop-blur-xl p-8 hover:bg-red-glow/10 transition-all duration-300">
                <Award className="w-12 h-12 text-red-glow mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <div className="text-red-glow font-semibold mb-2">{study.hospital}</div>
                <div className="text-3xl font-bold text-white mb-4 glow-text">{study.improvement}</div>
                <p className="text-gray-300">{study.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 glow-text">What Surgeons Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from leading medical professionals who trust SurgiGuide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-effect border border-red-glow/30 bg-tech-light/20 backdrop-blur-xl p-8 hover:bg-red-glow/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red-glow fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-glow/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-red-glow" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-r from-tech-gray via-tech-light/30 to-tech-gray">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl font-bold mb-8 glow-text">Advanced AI Architecture</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-glow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Network className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Deep Learning Models</h3>
                    <p className="text-gray-300">Sophisticated neural networks trained on vast surgical datasets for unprecedented accuracy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-glow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-Time Processing</h3>
                    <p className="text-gray-300">Lightning-fast analysis and recommendations delivered in milliseconds.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-glow rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Predictive Analytics</h3>
                    <p className="text-gray-300">Anticipates potential complications before they occur, enabling proactive intervention.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="glass-effect rounded-2xl p-8 border border-red-glow/30 backdrop-blur-xl">
                <div className="text-center">
                  <Stethoscope className="w-24 h-24 text-red-glow mx-auto mb-6 animate-float" />
                  <h3 className="text-2xl font-bold text-white mb-4">Preventing Never Events</h3>
                  <p className="text-gray-300 mb-6">
                    Our AI system continuously monitors surgical procedures to prevent wrong-site surgery, 
                    retained surgical items, and other preventable errors.
                  </p>
                  <div className="glass-effect border border-red-glow/30 rounded-lg p-4 backdrop-blur-xl">
                    <div className="text-3xl font-bold text-red-glow mb-2">100%</div>
                    <div className="text-sm text-gray-300">Error Prevention Rate in Clinical Trials</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 glow-text">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to revolutionize your surgical procedures? Contact our team today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="glass-effect border border-red-glow/30 rounded-xl p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-glow/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-glow" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-glow/20 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-glow" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-300">info@surgiguide.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-glow/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-glow" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-gray-300">123 Medical Center Dr, Healthcare City, HC 12345</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-effect border border-red-glow/30 rounded-xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-effect border-red-glow/30 bg-transparent text-white placeholder-gray-400 backdrop-blur-xl"
                      placeholder="Dr. John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-effect border-red-glow/30 bg-transparent text-white placeholder-gray-400 backdrop-blur-xl"
                      placeholder="john.doe@hospital.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="glass-effect border-red-glow/30 bg-transparent text-white placeholder-gray-400 backdrop-blur-xl"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-effect border-red-glow/30 bg-transparent text-white placeholder-gray-400 backdrop-blur-xl"
                    placeholder="Tell us about your surgical department and how SurgiGuide can help..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-red-glow hover:bg-red-primary text-white py-3 animate-glow-pulse glass-effect backdrop-blur-xl"
                >
                  Send Message
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-dark via-red-secondary to-red-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Ready to Transform Surgery?</h2>
          <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto">
            Join the revolution in surgical safety and precision. Experience the future of AI-guided surgery today.
          </p>
          <div className="flex flex-col m items-center justify-center gap-6">
            <Button size="lg" className="bg-white text-red-dark hover:bg-gray-100 px-8 py-4 text-lg group glass-effect backdrop-blur-xl">
              Request Demo
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-dark px-8 py-4 text-lg glass-effect backdrop-blur-xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-tech-gray border-t border-red-glow/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-red-glow rounded-full animate-glow-pulse flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold glow-text">SurgiGuide</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 SurgiGuide. Revolutionizing surgical safety through AI.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
