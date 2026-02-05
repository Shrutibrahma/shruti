import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#timeline' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-black backdrop-blur-sm shadow-md py-2">
      <div className="container mx-auto flex items-center justify-between px-4">

        <a href="#" className="font-bold text-xl text-purple-500 tracking-widest">
          SH_RU_TI
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-purple">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium py-2 hover:text-purple">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
