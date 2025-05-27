
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

// Easily editable certificate data - just add new objects to this array
const certificatesData = [
  {
    title: "Tredence Inc Hackathon Runner-up",
    description: "Best Pitch Award for Neuroadaptive Emotion-Aware Learning Platform",
    image: "https://via.placeholder.com/500x350/3B82F6/FFFFFF?text=Tredence+Award",
    date: "2024",
    category: "Hackathon",
    organization: "Tredence Inc"
  },
  {
    title: "Government of India Hackathon Winner",
    description: "AI-Powered Virtual Lab Optimization for OLabs",
    image: "https://via.placeholder.com/500x350/10B981/FFFFFF?text=Gov+India+Winner",
    date: "2024",
    category: "Hackathon",
    organization: "Government of India"
  },
  {
    title: "Tantrotsav Hackathon Winner",
    description: "Sanjeevani AI Voice Conversational System",
    image: "https://via.placeholder.com/500x350/EF4444/FFFFFF?text=Tantrotsav+Winner",
    date: "2023",
    category: "Hackathon",
    organization: "Tantrotsav"
  },
  {
    title: "IIT Hyderabad Hackathon",
    description: "Participation in prestigious technical competition",
    image: "https://via.placeholder.com/500x350/8B5CF6/FFFFFF?text=IIT+Hyderabad",
    date: "2023",
    category: "Hackathon",
    organization: "IIT Hyderabad"
  },
  {
    title: "Data Analyst Virtual Internship",
    description: "Successfully completed virtual internship program",
    image: "https://via.placeholder.com/500x350/F59E0B/FFFFFF?text=Data+Analyst",
    date: "2023",
    category: "Internship",
    organization: "Professional Development"
  },
  {
    title: "Cyber Security Analyst Internship",
    description: "Virtual internship in cybersecurity domain",
    image: "https://via.placeholder.com/500x350/EC4899/FFFFFF?text=Cyber+Security",
    date: "2023",
    category: "Internship",
    organization: "Professional Development"
  },
  // Add more certificates here as needed - the component will automatically handle them
  {
    title: "Machine Learning Certification",
    description: "Advanced machine learning and AI techniques certification",
    image: "https://via.placeholder.com/500x350/6366F1/FFFFFF?text=ML+Certification",
    date: "2023",
    category: "Certification",
    organization: "Tech Institute"
  },
  {
    title: "Cloud Computing Achievement",
    description: "Cloud architecture and deployment expertise recognition",
    image: "https://via.placeholder.com/500x350/059669/FFFFFF?text=Cloud+Computing",
    date: "2023",
    category: "Achievement",
    organization: "Cloud Academy"
  },
  {
    title: "Open Source Contributor",
    description: "Significant contributions to open source projects",
    image: "https://via.placeholder.com/500x350/DC2626/FFFFFF?text=Open+Source",
    date: "2022",
    category: "Recognition",
    organization: "GitHub"
  },
  {
    title: "Innovation Award",
    description: "Recognized for innovative solutions in technology",
    image: "https://via.placeholder.com/500x350/7C3AED/FFFFFF?text=Innovation+Award",
    date: "2022",
    category: "Award",
    organization: "Tech Innovation Hub"
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and achievements from hackathons, competitions, and professional development programs.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {certificatesData.length} certificates and achievements
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificatesData.map((certificate, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden bg-white/80 backdrop-blur-sm h-full">
                    <CardContent className="p-0 h-full flex flex-col">
                      <div className="relative overflow-hidden flex-shrink-0">
                        <img 
                          src={certificate.image} 
                          alt={certificate.title}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/95 text-gray-700 shadow-lg backdrop-blur-sm">
                            {certificate.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="outline" className="bg-white/95 border-white text-gray-700 shadow-lg backdrop-blur-sm">
                            {certificate.date}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {certificate.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-grow line-clamp-3">
                          {certificate.description}
                        </p>
                        <div className="mt-auto">
                          <p className="text-xs text-gray-500 font-medium">
                            {certificate.organization}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg" />
            <CarouselNext className="right-4 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Use the arrows or swipe to view more certificates and achievements
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
