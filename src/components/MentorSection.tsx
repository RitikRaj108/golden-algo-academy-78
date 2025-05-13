
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const mentors = [
  {
    name: "Chandan Yadav",
    image: "/lovable-uploads/0881841c-6118-4aed-bfab-3b55077adc0b.png",
    role: "Certified NISM VIII Derivative Analyst"
  },
  {
    name: "Ritick Ganrai",
    image: "/lovable-uploads/78ac6591-10fe-48df-b9ad-742368c8da74.png",
    role: "Certified NISM XV Research Analyst"
  }
];

const MentorSection = () => {
  return (
    <section id="mentors" className="py-20 bg-gradient-to-b from-trading-blue to-[#141925]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meet Our <span className="text-trading-gold">Mentors</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Learn from industry professionals with proven track records in trading and investments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((mentor, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:shadow-lg hover:shadow-trading-gold/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 relative">
                    <Avatar className="w-32 h-32 border-2 border-trading-gold">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="object-cover"
                      />
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{mentor.name}</h3>
                  <p className="text-trading-gold mb-4">{mentor.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              variant="outline" 
              className="border-trading-gold text-trading-gold hover:bg-trading-gold/10"
              onClick={() => window.open("https://youtube.com/@ashwaquant?si=u0gVA_KFc8meXOAm", "_blank")}
            >
              <ExternalLink className="mr-2" size={18} />
              Visit Our YouTube Channel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
