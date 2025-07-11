import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Microscope, Wifi, Eye, Brain, School, Car, Construction } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Lung Cancer Detection & Classification",
      icon: <Microscope className="h-10 w-10 text-purple-600" />,
      description: "Deep learning pipeline to detect and classify lung cancer from CT scans with interpretability using Grad-CAM and a user-friendly UI.",
      tags: ["PyTorch", "CNN", "Grad-CAM", "Medical Imaging"]
    },
    {
      title: "Smart Router with AI Threat Detection",
      icon: <Wifi className="h-10 w-10 text-purple-600" />,
      description: "AI-powered router analyzing network packets to flag SYN DoS attacks, combining ML and rule-based logic for real-time protection.",
      tags: ["Cybersecurity", "ML", "Network Analysis", "Real-time Detection"]
    },
    {
      title: "Guide AI: Assistive Tech for the Visually Impaired",
      icon: <Eye className="h-10 w-10 text-purple-600" />,
      description: "AR app using LiDAR and phone camera to describe scenes, detect hazards, and recognize objects for blind users.",
      tags: ["AR/VR", "LiDAR", "Computer Vision", "Accessibility"]
    },
    {
      title: "Fine-tuned LLaMA for Custom Voice Chatbot",
      icon: <Brain className="h-10 w-10 text-purple-600" />,
      description: "Customized large language model with a voice interface for personalized interactions using embeddings and transfer learning.",
      tags: ["LLM", "NLP", "Transfer Learning", "Voice Interface"]
    },
    {
      title: "Forecasting Higher Education Enrollment",
      icon: <School className="h-10 w-10 text-purple-600" />,
      description: "Scalable ML framework to analyze and predict student enrollment trends globally based on demographic and socio-economic data.",
      tags: ["Forecasting", "ML", "Education", "Data Analysis"]
    },
    {
      title: "Surface Crack Detection with Vision Transformers",
      icon: <Construction className="h-10 w-10 text-purple-600" />,
      description: "RVT-based model for detecting building cracks from images with Grad-CAM visualizations deployed on a remote server.",
      tags: ["Vision Transformers", "Grad-CAM", "Deployment", "Civil Engineering"]
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, idx) => (
          <Card key={idx} className="transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 hover:border-purple-200">
            <CardHeader className="pb-2">
              <div className="mb-3">{project.icon}</div>
              <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <Badge key={tagIdx} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;