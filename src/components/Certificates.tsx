
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      title: "Tredence Inc Hackathon Runner-up",
      description: "Best Pitch Award for Neuroadaptive Emotion-Aware Learning Platform",
      image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Tredence+Award",
      date: "2024",
      category: "Hackathon"
    },
    {
      title: "Government of India Hackathon Winner",
      description: "AI-Powered Virtual Lab Optimization for OLabs",
      image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Gov+India+Winner",
      date: "2024",
      category: "Hackathon"
    },
    {
      title: "Tantrotsav Hackathon Winner",
      description: "Sanjeevani AI Voice Conversational System",
      image: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Tantrotsav+Winner",
      date: "2023",
      category: "Hackathon"
    },
    {
      title: "IIT Hyderabad Hackathon",
      description: "Participation in prestigious technical competition",
      image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=IIT+Hyderabad",
      date: "2023",
      category: "Hackathon"
    },
    {
      title: "Data Analyst Virtual Internship",
      description: "Successfully completed virtual internship program",
      image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Data+Analyst",
      date: "2023",
      category: "Internship"
    },
    {
      title: "Cyber Security Analyst Internship",
      description: "Virtual internship in cybersecurity domain",
      image: "https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Cyber+Security",
      date: "2023",
      category: "Internship"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 bg-clip-text text-transparent mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and achievements from hackathons, competitions, and professional development programs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificates.map((certificate, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img 
                          src={certificate.image} 
                          alt={certificate.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-700">
                            {certificate.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <Badge variant="outline" className="bg-white/90 border-white text-gray-700">
                            {certificate.date}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {certificate.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {certificate.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Use the arrows or swipe to view more certificates and achievements
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
