
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Neuroadaptive Emotion-Aware Learning Platform",
      description: "AI-powered learning platform that adapts to student emotions for optimized learning experiences.",
      achievement: "Tredence Inc Hackathon Runner-up & Best Pitch Award",
      technologies: ["AI/ML", "Emotion Recognition", "Adaptive Learning", "Python"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "AI-Powered Virtual Lab Optimization for OLabs",
      description: "Innovative solution for optimizing virtual laboratory experiences using artificial intelligence.",
      achievement: "Government of India Hackathon Winner",
      technologies: ["AI", "Virtual Reality", "Optimization", "Web Development"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Sanjeevani – AI Voice Conversational System",
      description: "Advanced voice-to-voice conversational AI system for healthcare assistance.",
      achievement: "Tantrotsav Hackathon Winner",
      technologies: ["NLP", "Voice Recognition", "AI", "Healthcare Tech"],
      gradient: "from-red-500 to-pink-600"
    },
    {
      title: "ParkMeter – Smart Parking Management",
      description: "IoT-based smart parking solution with real-time availability tracking and automated billing.",
      achievement: "Innovative IoT Solution",
      technologies: ["IoT", "Mobile App", "Real-time Systems", "Database"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Indian Sign Language Detector",
      description: "Real-time gesture recognition system for Indian Sign Language interpretation.",
      achievement: "Computer Vision Excellence",
      technologies: ["Computer Vision", "Deep Learning", "OpenCV", "TensorFlow"],
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative projects spanning AI, Machine Learning, and cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                  {project.achievement}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-blue-50 group-hover:border-blue-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
