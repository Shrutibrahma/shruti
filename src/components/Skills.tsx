import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      name: "Programming Languages",
      
      description: "Core programming languages for development",
      skills: [
        { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-500" },
        { name: "R", level: 80, color: "from-indigo-500 to-indigo-600" },
        { name: "SQL", level: 88, color: "from-gray-600 to-gray-700" },
        { name: "C/C++", level: 75, color: "from-purple-500 to-purple-600" },
        
        { name: "HTML/CSS", level: 92, color: "from-orange-500 to-orange-600" }
      ]
    },
    {
      name: "AI & Machine Learning",
      
      description: "Advanced AI and machine learning technologies",
      skills: [
        { name: "Machine Learning", level: 95, color: "from-emerald-500 to-emerald-600" },
        { name: "Deep Learning", level: 90, color: "from-teal-500 to-teal-600" },
        { name: "Computer Vision", level: 85, color: "from-cyan-500 to-cyan-600" },
        { name: "NLP & LLMs", level: 88, color: "from-violet-500 to-violet-600" },
        { name: "TensorFlow", level: 87, color: "from-orange-600 to-red-600" },
        { name: "PyTorch", level: 85, color: "from-red-600 to-pink-600" },
        { name: "Scikit-learn", level: 90, color: "from-blue-400 to-blue-500" },
        { name: "YOLO", level: 80, color: "from-purple-400 to-purple-500" }
      ]
    },
    {
      name: "Cloud & DevOps",
      
      description: "Cloud platforms and development tools",
      skills: [
        { name: "AWS", level: 85, color: "from-amber-500 to-orange-500" },
        { name: "Git", level: 95, color: "from-gray-700 to-gray-800" },
        { name: "Docker", level: 80, color: "from-blue-500 to-blue-600" },
        { name: "Flask", level: 88, color: "from-gray-800 to-black" },
        { name: "MongoDB", level: 82, color: "from-green-600 to-green-700" },
        { name: "MySQL", level: 85, color: "from-blue-600 to-blue-700" },
        { name: "Streamlit", level: 90, color: "from-red-400 to-red-500" },
        { name: "Visual Studio", level: 85, color: "from-purple-600 to-purple-700" }
      ]
    },
    {
      name: "Data Science",
      
      description: "Data analysis and visualization tools",
      skills: [
        { name: "Pandas", level: 95, color: "from-indigo-600 to-indigo-700" },
        { name: "NumPy", level: 92, color: "from-blue-500 to-blue-600" },
        { name: "Matplotlib", level: 88, color: "from-green-600 to-green-700" },
        { name: "OpenCV", level: 85, color: "from-teal-500 to-teal-600" },
        { name: "Keras", level: 87, color: "from-red-500 to-red-600" },
        { name: "Power BI", level: 75, color: "from-yellow-600 to-yellow-700" },
        { name: "Tableau", level: 78, color: "from-blue-400 to-blue-500" },
        { name: "Seaborn", level: 85, color: "from-pink-500 to-pink-600" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex(prev => prev === skillCategories.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev === 0 ? skillCategories.length - 1 : prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="skills" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expertise across multiple domains of modern software development and data science
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50 dark:border-gray-700/50"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200/50 dark:border-gray-700/50"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {skillCategories.map((category, categoryIdx) => (
                <div key={categoryIdx} className="w-full flex-shrink-0">
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8">
                      {/* Category Header */}
                      <div className="text-center mb-8">
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {category.description}
                        </p>
                      </div>

                      {/* Skills Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {category.skills.map((skill, skillIdx) => (
                          <div
                            key={skillIdx}
                            className="group/skill cursor-pointer"
                            onMouseEnter={() => setHoveredSkill(`${categoryIdx}-${skillIdx}`)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            {/* Skill Card */}
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 group-hover/skill:bg-white dark:group-hover/skill:bg-gray-700 transition-all duration-300 group-hover/skill:shadow-lg group-hover/skill:scale-105">
                              {/* Skill Name */}
                              <div className="text-center mb-3">
                                <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                                  {skill.name}
                                </span>
                              </div>

                              {/* Circular Progress */}
                              <div className="relative w-16 h-16 mx-auto mb-2">
                                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                                  <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="100, 100"
                                    className="text-gray-200 dark:text-gray-600"
                                  />
                                  <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="3"
                                    strokeDasharray={`${skill.level}, 100`}
                                    strokeLinecap="round"
                                    className="transition-all duration-1000 ease-out"
                                  />
                                  <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stopColor="#3B82F6" />
                                      <stop offset="50%" stopColor="#8B5CF6" />
                                      <stop offset="100%" stopColor="#06B6D4" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                                    {skill.level}%
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {skillCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;