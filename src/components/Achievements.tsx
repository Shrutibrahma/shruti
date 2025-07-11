
import { Card, CardContent } from '@/components/ui/card';
import { Medal, Mic, Lightbulb, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Medal className="h-8 w-8 text-amber-500" />,
      title: "Finalist – Case Study Competition",
      description: "3rd Place Winner in the university-wide data science competition",
      category: "Award"
    },
    {
      icon: <Mic className="h-8 w-8 text-purple" />,
      title: "Speaker – University Research Symposium",
      description: "Presented research on AI for Education at the annual symposium",
      category: "Talk"
    },
    
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Mentor – AI Club",
      description: "Guided students in developing ML models for real-world applications",
      category: "Mentorship"
    }
  ];

  
  return (
    <section id="achievements" className="section-container">
      <h2 className="section-heading">Talks & Achievements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {achievements.map((item, idx) => (
          <Card key={idx} className="card-hover overflow-hidden border-t-4 border-t-purple">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  <div className="mt-3">
                    <span className="text-xs bg-secondary py-1 px-2 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      
    </section>
  );
};

export default Achievements;
