
import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  HeartHandshake, 
  ShieldCheck, 
  Layers, 
  AlertCircle 
} from 'lucide-react';

const Research = () => {
  const researchInterests = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Educational Data Mining",
      description: "Analyzing patterns in educational data to improve learning outcomes and personalize educational experiences."
    },
    {
      icon: <HeartHandshake className="h-10 w-10" />,
      title: "Assistive AI Systems",
      description: "Developing AI solutions that empower individuals with disabilities and improve accessibility."
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Network Security & ML",
      description: "Applying machine learning techniques to detect and prevent network security threats in real-time."
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Multimodal AI",
      description: "Integrating vision, audio, and other sensory inputs to create more comprehensive AI systems."
    },
    {
      icon: <AlertCircle className="h-10 w-10" />,
      title: "Ethical and Explainable AI",
      description: "Ensuring AI systems are transparent, fair, and accountable through interpretable models."
    }
  ];

  return (
    <section id="research" className="section-container bg-muted/30">
      <h2 className="section-heading">Research Interests</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mt-12">
        {researchInterests.map((item, idx) => (
          <Card 
            key={idx} 
            className="card-hover flex flex-col items-center text-center p-6"
          >
            <div className="h-16 w-16 rounded-full gradient-bg flex items-center justify-center text-white mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Research;
