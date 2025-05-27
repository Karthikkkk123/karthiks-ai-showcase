
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "RagE – Robust Retrieval-Augmented Generation Engine",
      description: "Developed a retrieval-augmented generation (RAG) system combining document retrieval with large language models to improve answer accuracy and context relevance.",
      achievement: "Advanced RAG System Implementation",
      technologies: ["Python", "PyTorch", "Hugging Face", "FAISS", "Elasticsearch", "LangChain"],
      gradient: "from-emerald-500 to-teal-600"
    },
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
      title: "ParkMeter – Smart Parking Management System",
      description: "Developed an intelligent parking system that enables real-time parking space detection and automated fee calculation with license plate recognition for enhanced security.",
      achievement: "Intelligent IoT Solution",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "OpenCV", "Flask", "Machine Learning"],
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative projects spanning AI, Machine Learning, and cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden bg-white/80 backdrop-blur-sm">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
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
                      className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-sm rounded-lg font-medium border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-all duration-300"
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
