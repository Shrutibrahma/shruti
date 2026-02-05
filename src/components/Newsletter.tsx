import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const Newsletter = () => {
  const events = [
    {
      title: "ASEE Conference Presentation",
      date: "March 22, 2025",
      location: "American Society for Engineering Education",
      image: "ase.jpg",
      description: "Presented research on 'Predicting Student Enrollment: A Machine Learning Approach to Higher Education Trends'. Showcased a scalable ML framework for forecasting global enrollment patterns using demographic and socio-economic data analysis.",
      tags: ["Research", "Machine Learning", "Education"],
      link: "#"
    },
    {
      title: "Graduate Student Showcase",
      date: "April 2, 2025",
      location: "University Research Fair",
      image: "/gs.jpg",
      description: "Exhibited 'Smart Router with AI Threat Detection'. Demonstrated real-time network packet analysis using ML algorithms and rule-based logic to detect and flag SYN DoS attacks, highlighting practical cybersecurity applications.",
      tags: ["Cybersecurity", "AI", "Networking"],
      link: "#"
    },
    {
      title: "Hack New Haven Hackathon",
      date: "March 23, 2025",
      location: "University of New Haven",
      image: "hnh.jpg",
      description: "Collaborated in a 48-hour intensive hackathon to build an AI-powered accessibility app. Leveraged smartphone sensors and computer vision to help users navigate indoor spaces, solving real-world accessibility challenges.",
      tags: ["Hackathon", "Innovation", "Accessibility"],
      link: "#"
    },
    {
      title: "AI Hartford Research Symposium",
      date: "April 23, 2025",
      location: "UConn School of Business",
      image: "ha.jpg",
      description: "Represented Data Science students at the CAIA Research Symposium. Engaged with leading researchers and industry professionals, showcasing cutting-edge AI innovations and contributing to the Connecticut AI community.",
      tags: ["AI Symposium", "Data Science", "Research"],
      link: "#"
    }
  ];

  return (
    <section id="newsletter" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-zinc-950 to-black pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            News<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">letter</span>
          </h2>
          <div className="h-px w-24 bg-white/30" />
          <p className="mt-8 text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
            A curated log of my recent academic contributions, research presentations, and technical milestones in the field of Data Science and AI.
          </p>
        </div>

        <div className="grid gap-12">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-white/10 pb-12 last:border-0 last:pb-0"
            >
              {/* Date & Location (Left Column on Desktop) */}
              <div className="col-span-1 md:col-span-3 space-y-2 md:pt-2">
                <div className="flex items-center text-sm text-gray-400 font-medium">
                  <Calendar className="h-3.5 w-3.5 mr-2 opacity-70" />
                  {event.date}
                </div>
                <div className="flex items-center text-xs text-gray-500 uppercase tracking-wider">
                  <MapPin className="h-3.5 w-3.5 mr-2 opacity-70" />
                  {event.location}
                </div>
              </div>

              {/* Content (Middle Column) */}
              <div className="col-span-1 md:col-span-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-white transition-colors flex items-center gap-2">
                  {event.title}
                  <ArrowUpRight className="h-5 w-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-gray-400" />
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {event.tags.map((tag, tagIdx) => (
                    <Badge
                      key={tagIdx}
                      variant="outline"
                      className="text-xs font-normal text-gray-500 border-gray-800 bg-transparent px-3 py-1 hover:text-gray-300 hover:border-gray-600 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Image (Right Column) */}
              <div className="col-span-1 md:col-span-3">
                <div className="relative overflow-hidden rounded-sm aspect-video md:aspect-[4/3] bg-gray-900 group-hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;