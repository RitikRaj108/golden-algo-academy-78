
import { 
  TrendingUp, 
  Code, 
  BookOpen, 
  Users, 
  Shield, 
  BarChart 
} from "lucide-react";

const features = [
  {
    icon: <TrendingUp size={36} className="text-trading-gold" />,
    title: "Advanced Trading Strategies",
    description: "Learn proprietary algorithmic strategies that have been proven to generate consistent profits across various market conditions."
  },
  {
    icon: <Code size={36} className="text-trading-gold" />,
    title: "Algo Development",
    description: "Master the art of creating and optimizing trading algorithms without needing advanced programming skills."
  },
  {
    icon: <BookOpen size={36} className="text-trading-gold" />,
    title: "Comprehensive Education",
    description: "Access our extensive library of educational resources, from beginner concepts to advanced trading techniques."
  },
  {
    icon: <Users size={36} className="text-trading-gold" />,
    title: "Expert Community",
    description: "Join our exclusive community of traders where you can share ideas and learn from experienced professionals."
  },
  {
    icon: <Shield size={36} className="text-trading-gold" />,
    title: "Risk Management",
    description: "Learn effective risk management strategies to protect your capital and maximize long-term profitability."
  },
  {
    icon: <BarChart size={36} className="text-trading-gold" />,
    title: "Performance Analytics",
    description: "Track and analyze your trading performance with our advanced analytics tools to continuously improve your results."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our <span className="text-trading-gold">Trading Program</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach to trading education ensures you gain the knowledge and skills needed for long-term success in the markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md card-hover"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
