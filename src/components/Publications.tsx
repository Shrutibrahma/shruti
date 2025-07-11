
import { FileText, Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Publications = () => {
  const publications = [
    {
      title: "Impact of Activation Functions on Malware Detection",
      period: "Feb 2023 - Dec 2023",
      conference: "AICTA'23",
      description: "Presented at AICTA'23, an international AI conference, and awarded \"Best Paper Presented\". Published in SCOPUS indexed Springer Series.",
      award: "Best Paper Presented",
      type: "Conference Paper"
    },
    {
      title: "Data-Driven Decision Making for Enrollment Trends and Educational Policy Analysis in Higher Education",
      conference: "ASEE Conference",
      description: "Presented at ASEE conference and published in asee-ne peer.",
      link: "https://peer.asee.org/55023.pdf",
      type: "Conference Paper"
    }
  ];

  return (
    <section id="publications" className="section-container">
      <h2 className="section-heading">Publications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {publications.map((pub, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-purple mr-2" />
                  <span className="text-sm font-medium text-purple">{pub.type}</span>
                </div>
                {pub.award && (
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-xs text-yellow-600 font-medium">{pub.award}</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold mb-3 leading-tight">{pub.title}</h3>
              
              {pub.period && (
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm text-muted-foreground">{pub.period}</span>
                </div>
              )}
              
              <div className="mb-3">
                <span className="text-sm font-medium text-foreground">Conference: </span>
                <span className="text-sm text-muted-foreground">{pub.conference}</span>
              </div>
              
              <p className="text-sm leading-relaxed mb-4">{pub.description}</p>
              
              {pub.link && (
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-purple hover:text-purple-dark transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View Publication
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Publications;
