
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Timeline = () => {
  const experiences = [
    {
      period: "Sept 2024 - Present",
      title: "Graduate Research Assistant",
      company: "University of New Haven",
      description: "Conducting research in AI, Education Analytics & Cybersecurity",
      current: true
    },
    {
      period: "Feb 2024 - August 2024",
      title: "AI Engineer for Vuzix Smart Eyewear Applications",
      company: "Vuzix Corporation",
      description: "Led the development of 8+ AI-powered AR applications on Vuzix glasses, including real-time scene analysis, object recognition, currency reading for the visually impaired, fall detection via IMU sensors, and emergency alert systems.",
      current: false
    },
    {
      period: "Oct - Dec 2023",
      title: "Cybersecurity and AI Intern",
      company: "CDAC",
      description: "Gained hands-on experience in cybersecurity protocols and AI implementation.",
      current: false
    }
  ];

  return (
    <section id="timeline" className="section-container">
      <h2 className="section-heading">Professional Experience</h2>

      <div className="mt-12 relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple to-purple/20"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-purple rounded-full border-2 border-background z-10"></div>

              {/* Content card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'} md:w-5/12`}>
                <Card className={`card-hover ${exp.current ? 'ring-2 ring-purple/50' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 text-purple mr-2" />
                      <span className="text-sm font-medium text-purple">{exp.period}</span>
                      {exp.current && (
                        <span className="ml-2 px-2 py-1 bg-purple/10 text-purple text-xs rounded-full">Current</span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>

                    <div className="flex items-center mb-3">
                      <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">{exp.company}</span>
                    </div>

                    <p className="text-sm leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
