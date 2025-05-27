
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "Deep Learning", "Machine Learning", "Artificial Intelligence", "Gen AI",
    "Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Data Analysis"
  ];

  const achievements = [
    {
      title: "5+ Hackathon Victories",
      description: "Including competitions at Tredence Inc and IIT Hyderabad"
    },
    {
      title: "Virtual Internships",
      description: "Data Analyst and Cyber Security Analyst experience"
    },
    {
      title: "Academic Excellence",
      description: "Final year BTech Computer Science at Amrita Vishwa Vidyapeetham"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate learner with an adaptable mindset, constantly evolving like water 
            to embrace new challenges in AI and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Currently pursuing my final year of BTech in Computer Science at 
                <span className="font-semibold text-blue-600"> Amrita Vishwa Vidyapeetham University</span> 
                (Amaravati campus), batch 2022-2026.
              </p>
              <p>
                My journey in technology has been marked by a deep fascination with 
                Artificial Intelligence, Deep Learning, and Machine Learning. I believe 
                in being adaptable like water - flowing around obstacles and taking the 
                shape of opportunities that come my way.
              </p>
              <p>
                As an active participant in hackathons, I've secured 
                <span className="font-semibold text-green-600"> 5+ victories</span> including 
                prestigious competitions at Tredence Inc and IIT Hyderabad. These experiences 
                have shaped me into a versatile problem solver and innovative thinker.
              </p>
              <p>
                Beyond academics, I'm sportive and maintain an active lifestyle, which 
                complements my dedication to continuous learning and personal growth.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
