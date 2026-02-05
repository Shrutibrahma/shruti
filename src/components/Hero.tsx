import { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black selection:bg-purple-500/30"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="z-10 relative flex flex-col items-center justify-center w-full h-full cursor-default select-none">

        {/* Name Container */}
        <div className="relative mb-6">
          {/* Layer 1: The Outline (Glassy Effect - Always visible) */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent tracking-widest text-center stroke-text"
            style={{
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
              filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.1))'
            }}>
            SHRUTI BRAHMA
          </h1>

          {/* Layer 2: The Fill (Revealed by spotlight) */}
          <h1
            className="absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-widest text-center"
            style={{
              maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            }}
          >
            SHRUTI BRAHMA
          </h1>
        </div>

        {/* Subtitle */}
        <div className="relative">
          <p className="text-sm md:text-xl lg:text-2xl font-light tracking-[0.5em] text-gray-400 uppercase text-center">
            Data Scientist & AI Researcher
          </p>
          <p
            className="absolute inset-0 text-sm md:text-xl lg:text-2xl font-light tracking-[0.5em] text-purple-400 uppercase text-center"
            style={{
              maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            }}
          >
            Data Scientist & AI Researcher
          </p>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce z-20">
        <a href="#about" className="flex flex-col items-center text-sm text-gray-500 hover:text-white transition-colors">
          <span className="mb-2 uppercase tracking-widest text-xs">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
