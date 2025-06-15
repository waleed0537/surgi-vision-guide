
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
  Sparkles
} from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
        <div className="glass-effect border-b border-red-glow/20">
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
                <a href="#impact" className="text-gray-300 hover:text-red-glow transition-colors">Impact</a>
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
            <div className="inline-flex items-center space-x-2 bg-red-glow/10 border border-red-glow/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-red-glow" />
              <span className="text-red-glow text-sm font-medium">Next-Gen Surgical AI</span>
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
              <Button size="lg" className="bg-red-glow hover:bg-red-primary text-white px-8 py-4 text-lg animate-glow-pulse group">
                Experience the Future
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-red-glow text-red-glow hover:bg-red-glow hover:text-white px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-cyber-red/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-red-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className={`tech-border bg-tech-light/50 p-6 text-center hover:bg-red-glow/10 transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <stat.icon className="w-8 h-8 text-red-glow mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 glow-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </Card>
            ))}
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
                className={`tech-border bg-tech-light/50 p-8 hover:bg-red-glow/10 transition-all duration-500 hover:scale-105 animate-slide-in-left group`}
                style={{ animationDelay: feature.delay }}
              >
                <div className="w-16 h-16 bg-red-glow/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-glow/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-red-glow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-r from-tech-gray via-tech-light to-tech-gray">
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
              <div className="glass-effect rounded-2xl p-8 tech-border">
                <div className="text-center">
                  <Stethoscope className="w-24 h-24 text-red-glow mx-auto mb-6 animate-float" />
                  <h3 className="text-2xl font-bold text-white mb-4">Preventing Never Events</h3>
                  <p className="text-gray-300 mb-6">
                    Our AI system continuously monitors surgical procedures to prevent wrong-site surgery, 
                    retained surgical items, and other preventable errors.
                  </p>
                  <div className="bg-red-glow/10 border border-red-glow/30 rounded-lg p-4">
                    <div className="text-3xl font-bold text-red-glow mb-2">100%</div>
                    <div className="text-sm text-gray-300">Error Prevention Rate in Clinical Trials</div>
                  </div>
                </div>
              </div>
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button size="lg" className="bg-white text-red-dark hover:bg-gray-100 px-8 py-4 text-lg group">
              Request Demo
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-dark px-8 py-4 text-lg">
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
