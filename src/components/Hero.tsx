
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-dot-pattern">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Shruti Brahma
          </h1>
          <div className="text-gradient text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
           Data Science & AI Engineer
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Transforming lives through the fusion of creativity, AI, and impactful research.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
  <Button size="lg" className="gradient-bg" asChild>
    <a href="#projects">View Projects</a>
  </Button>
  <Button size="lg" variant="outline" asChild>
    <a href="#contact">Contact Me</a>
  </Button>
</div>
</div>
      
      <div className="absolute bottom-10 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground">
          <span className="mb-1">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
      
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-light/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
