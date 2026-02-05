import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 bg-black">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

        {/* Left Column: Text Content */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="space-y-2">
            <h4 className="text-blue-500 font-medium tracking-wide text-lg">Hello, I'm</h4>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Shruti <br /> Brahma
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-medium mt-2">
              Data Science | AI | Research
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-lg">
            <p>
              I'm a Data Science graduate student with a passion for building impactful AI solutions—from lung cancer
              detection models and smart routers to assistive AR/VR systems for visually impaired individuals.
            </p>
            <p>
              My work blends technical rigor with real-world empathy. I believe data and technology,
              when designed thoughtfully, can empower every facet of life.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              className="rounded-full bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-semibold transition-all duration-300"
              onClick={() => window.open('/Shruti-Resume.pdf', '_blank')}
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-gray-700 text-white hover:bg-white/10 hover:text-white hover:border-white px-8 py-6 text-base font-medium transition-all duration-300 bg-transparent"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right Column: Circular Image */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-purple-900/20 blur-[100px] rounded-full scale-150 pointer-events-none" />

          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl z-10">
            <img
              src="/myphoto.jpg"
              alt="Shruti Brahma"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
