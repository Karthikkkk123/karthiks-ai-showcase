
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Hello, I'm
              <span className="block text-blue-600">Karthikeya Pagidimarry</span>
              <span className="block text-3xl lg:text-4xl text-gray-600 font-medium mt-2">
                AI Enthusiast & Developer
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Final-year BTech Computer Science student passionate about AI, Deep Learning, 
              and Machine Learning. Hackathon winner with 5+ victories and innovative project contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                View Portfolio
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 rotate-6 animate-scale-in"></div>
              <div className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-white shadow-2xl -rotate-3 flex items-center justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-center">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-6xl lg:text-7xl">👨‍💻</span>
                  </div>
                  <p className="text-gray-600 font-medium">Adaptable Problem Solver</p>
                  <p className="text-sm text-gray-500">"Like Water"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
