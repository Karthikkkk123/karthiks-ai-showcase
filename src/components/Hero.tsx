
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced gradient background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-purple-100/20"></div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg rotate-45 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Enhanced greeting with modern typography */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 text-sm text-gray-600 animate-fade-in">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for opportunities
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="block text-gray-600 text-2xl lg:text-3xl font-medium mb-2">Hello, I'm</span>
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                  Karthikeya
                </span>
                <span className="block text-4xl lg:text-5xl font-semibold text-gray-700 mt-2">
                  Pagidimarry
                </span>
              </h1>

              <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-xl lg:text-2xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Enthusiast & Developer
                </p>
                <p className="text-gray-600 font-medium">
                  "Like Water" - Adaptable Problem Solver
                </p>
              </div>
            </div>

            {/* Enhanced description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Final-year BTech Computer Science student passionate about 
              <span className="font-semibold text-blue-600"> AI, Deep Learning,</span> and 
              <span className="font-semibold text-purple-600"> Machine Learning</span>. 
              Hackathon winner with <span className="font-semibold">5+ victories</span> and innovative project contributions.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a href="https://github.com" className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 hover:border-gray-300 hover:bg-white transition-all duration-300 hover:scale-110">
                <Github size={20} className="text-gray-700" />
              </a>
              <a href="https://linkedin.com" className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:scale-110">
                <Linkedin size={20} className="text-blue-600" />
              </a>
              <a href="mailto:captures.karthik@gmail.com" className="p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:scale-110">
                <Mail size={20} className="text-purple-600" />
              </a>
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
                <ArrowDown size={20} className="ml-2 rotate-[-90deg]" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Enhanced profile section with larger photo */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Main card - larger and more prominent */}
              <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                {/* Card header */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
                
                {/* Profile content */}
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  {/* Profile photo - much larger */}
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300 border-4 border-white/50">
                    <img 
                      src="https://i.postimg.cc/90x1dbQm/ME.jpg" 
                      alt="Karthikeya Pagidimarry"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Profile info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-800">Karthikeya P.</h3>
                    <div className="space-y-1">
                      <p className="text-blue-600 font-semibold text-sm">AI Developer</p>
                      <p className="text-gray-500 text-sm">BTech Computer Science</p>
                      <p className="text-purple-600 text-xs font-medium">"Adaptable & Innovative"</p>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute top-6 right-6 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                    5+ Hackathon Wins
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full"></div>
                <div className="absolute top-20 right-4 w-8 h-8 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-lg rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <button 
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <span className="text-sm font-medium">Discover More</span>
            <div className="p-2 rounded-full border border-gray-200 group-hover:border-gray-300 group-hover:bg-gray-50 transition-all duration-300 animate-bounce">
              <ArrowDown size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
