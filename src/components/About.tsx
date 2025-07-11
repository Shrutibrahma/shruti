
import { User, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const currentRoles = [
    { 
      icon: <GraduationCap className="h-5 w-5 text-purple" />,
      title: "Provost -  MS Data Science Student",
      period: "2024 - 2026"
    },
    { 
      icon: <Briefcase className="h-5 w-5 text-purple" />,
      title: "Research Assistant",
      details: "AI, Education Analytics & Cybersecurity"
    },
    { 
      icon: <User className="h-5 w-5 text-purple" />,
      title: "AI Trainer and Mentor",
      details: "Machine Learning & Computer Vision"
    }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
        <div className="lg:col-span-3">
          <p className="text-lg mb-6">
            I'm a Data Science graduate student with a passion for building impactful AI solutions—from lung cancer 
            detection models and smart routers to assistive AR/VR systems for visually impaired individuals. 
          </p>
          <p className="text-lg mb-6">
            My work blends technical rigor with real-world empathy. I believe data and technology, 
            when designed thoughtfully, can empower every facet of life.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Current Roles</h3>
            <div className="space-y-4">
              {currentRoles.map((role, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">{role.icon}</div>
                  <div>
                    <h4 className="font-medium">{role.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {role.period || role.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
        <div className="lg:col-span-2">
  <Card className="bg-secondary/50 border-none overflow-hidden">
    <CardContent className="p-6">
      <div className="aspect-square rounded-lg overflow-hidden">
        <img
          src="/myphoto.jpg" // replace with your image name
          alt="Shruti Brahma"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-medium">Shruti Brahma</h3>
        <p className="text-xs text-muted-foreground">Data Science | AI | Research</p>
      </div>
    </CardContent>
  </Card>
</div>
</div>

      </div>
    </section>
  );
};

export default About;
