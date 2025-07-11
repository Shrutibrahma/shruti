
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Publications from '@/components/Publications';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';




const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Research />
      <Publications />
      <Skills />
      <Achievements />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
