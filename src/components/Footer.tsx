
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            
            <div>
              <h3 className="font-bold text-xl">Shruti Brahma</h3>
              
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-sm hover:text-purple transition-colors">About</a>
            <a href="#projects" className="text-sm hover:text-purple transition-colors">Projects</a>
            <a href="#contact" className="text-sm hover:text-purple transition-colors">Contact</a>
          </div>
          
          <Button size="sm" className="gradient-bg">Download Resume</Button>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Shruti Brahma. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/shrutibrahma" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/shrutibrahma1" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
