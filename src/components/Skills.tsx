import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      description: "Core languages for development",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "R", level: 80 },
        { name: "SQL", level: 88 },
        { name: "C/C++", level: 75 },
        { name: "HTML/CSS", level: 92 }
      ]
    },
    {
      name: "AI & Machine Learning",
      description: "Advanced AI technologies",
      skills: [
        { name: "Machine Learning", level: 95 },
        { name: "Deep Learning", level: 90 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP & LLMs", level: 88 },
        { name: "TensorFlow", level: 87 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "YOLO", level: 80 }
      ]
    },
    {
      name: "Cloud & DevOps",
      description: "Infrastructure & Tools",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "Flask", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 85 },
        { name: "Streamlit", level: 90 },
        { name: "Visual Studio", level: 85 }
      ]
    },
    {
      name: "Data Science",
      description: "Analysis & Visualization",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 92 },
        { name: "Matplotlib", level: 88 },
        { name: "OpenCV", level: 85 },
        { name: "Keras", level: 87 },
        { name: "Power BI", level: 75 },
        { name: "Tableau", level: 78 },
        { name: "Seaborn", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Technical Proficiency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software engineering and data science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="group border-none shadow-lg dark:bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex flex-col gap-1 flex-grow-0">
                      <Badge
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-medium bg-secondary/50 hover:bg-secondary transition-colors cursor-default border border-transparent hover:border-primary/20"
                      >
                        {skill.name}
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Optional: Add a subtle visual element or progress bar if desired later */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 rounded-full opacity-50" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;