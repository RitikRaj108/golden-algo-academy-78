
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-trading-blue pt-28 pb-24 md:pt-32 md:pb-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Master the Markets</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Stock, Futures & Options Education with personalized mentorship. Transform your trading approach with our professional algorithmic trading strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-trading-gold hover:bg-trading-gold-light text-white px-8 py-6 text-lg font-medium animate-pulse-glow">
              Start Your Trading Journey
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <TrendingUp className="text-trading-gold mr-3" size={24} />
              <span className="text-white">Stock Market Expertise</span>
            </div>
            <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <Users className="text-trading-gold mr-3" size={24} />
              <span className="text-white">Personalized Mentorship</span>
            </div>
            <div className="flex items-center justify-center bg-white/5 backdrop-blur-sm p-4 rounded-lg">
              <Award className="text-trading-gold mr-3" size={24} />
              <span className="text-white">Algorithmic Trading</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trading Imagery Section */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="overflow-hidden rounded-lg h-40 md:h-64">
            <img 
              src="/lovable-uploads/777d3f54-b64f-4c97-a846-6a4280de94ac.png" 
              alt="Trading Mentors" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-lg h-40 md:h-64">
            <img 
              src="/lovable-uploads/ae8f5a7b-20bd-4e8c-8696-f94fc274c89f.png" 
              alt="Trading Classroom" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-lg h-40 md:h-64">
            <img 
              src="/lovable-uploads/2e7e53af-f626-4036-a1d9-a005894b8ad2.png" 
              alt="Trading Students" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-lg h-40 md:h-64">
            <img 
              src="/lovable-uploads/e89aa260-25d4-41cb-8353-fa0505594612.png" 
              alt="Trading Training" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
