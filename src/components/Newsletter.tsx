import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Award, Brain } from 'lucide-react';

const Newsletter = () => {
  const events = [
    {
      title: "ASEE Conference Presentation",
      date: "March 22, 2025",
      location: "American Society for Engineering Education",
      image: "ase.jpg",
      description: "I presented my research work on 'Predicting Student Enrollment: A Machine Learning Approach to Higher Education Trends' at the prestigious American Society for Engineering Education annual conference. The presentation showcased our scalable ML framework that analyzes demographic and socio-economic data to forecast enrollment patterns globally. It was an incredible opportunity to share insights with fellow educators and researchers in the engineering education community.",
      tags: ["Research", "ML", "Education", "Conference"],
      icon: <Users className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Graduate Student Showcase",
      date: "April 2, 2025",
      location: "University Research Fair",
      image: "/gs.jpg",
      description: "Showcased my 'Smart Router with AI Threat Detection' project at the annual Graduate Student Research Showcase. The demonstration highlighted how our AI-powered router analyzes network packets in real-time to detect and flag SYN DoS attacks using a combination of machine learning algorithms and rule-based logic. The project received excellent feedback from faculty and industry professionals for its practical cybersecurity applications.",
      tags: ["Cybersecurity", "AI", "Networking", "Showcase"],
      icon: <Award className="h-5 w-5 text-purple-600" />
    },
    {
      title: "Hack New Haven Hackathon",
      date: "March 23, 2025",
      location: "University of New Haven",
      image: "hnh.jpg",
      description: "Participated in a 48-hour intensive hackathon focused on developing innovative solutions for real-world problems. Our team built an AI-powered accessibility app that helps users navigate to nearby  indoor spaces using smartphone sensors and computer vision.",
      tags: ["Hackathon", "AI", "Accessibility", "Innovation"],
      icon: <Award className="h-5 w-5 text-green-600" />
    },
    {
      title: "AI Hartford Day at UConn Business School",
      date: "April 23, 2025",
      location: "University of Connecticut School of Business",
      image: "ha.jpg",
      description: "Participated in the inaugural CAIA Research Symposium at the 4th annual AI Day in Hartford, representing University of New Haven Data Science students. This prestigious event brought together leading researchers, industry professionals, and students to showcase cutting-edge AI research and innovations. It was an honor to present our data science work alongside peers and engage with the broader Connecticut AI community.",
      tags: ["AI", "Research", "Data Science", "Symposium"],
      icon: <Brain className="h-5 w-5 text-indigo-600" />
    }
  ];

  return (
    <section id="newsletter" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Shruti's Newsletter</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with my latest research presentations, conference talks, and academic achievements. 
          Here's a glimpse into my recent activities and milestones.
        </p>
      </div>

      <div className="space-y-8">
        {events.map((event, idx) => (
          <Card key={idx} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-2 hover:border-blue-200">
            <div className="flex gap-6 p-6">
              {/* Pinned Small Photo */}
              <div className="flex-shrink-0">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-32 h-32 object-cover rounded-lg shadow-md"
                />
              </div>
              
              {/* Content Side */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                  <MapPin className="h-4 w-4 ml-2" />
                  <span>{event.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, tagIdx) => (
                    <Badge key={tagIdx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      
    </section>
  );
};

export default Newsletter;