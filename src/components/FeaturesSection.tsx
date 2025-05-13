
import { 
  TrendingUp, 
  Code, 
  BookOpen, 
  Briefcase, 
  Award,
  Scale
} from "lucide-react";

const features = [
  {
    icon: <TrendingUp size={36} className="text-trading-gold" />,
    title: "Indian Stock Market",
    description: "Learn the fundamentals and technical analysis of the Indian equity market. Build a strong foundation in stocks, market behavior, price action, and chart patterns specific to Indian exchanges like NSE and BSE."
  },
  {
    icon: <Scale size={36} className="text-trading-gold" />,
    title: "Futures and Options",
    description: "Master derivative instruments such as futures and options to hedge risks or speculate with high leverage. Understand contract specifications, option greeks, strategies, and practical application in Indian markets."
  },
  {
    icon: <Briefcase size={36} className="text-trading-gold" />,
    title: "Forex and Crypto",
    description: "Explore global currency markets and the fast-evolving crypto landscape. Gain insights into trading major forex pairs and popular cryptocurrencies using proven analysis techniques and risk controls."
  },
  {
    icon: <Award size={36} className="text-trading-gold" />,
    title: "NISM Certification",
    description: "Prepare for SEBI-recognized NISM certifications. Get access to structured content, mock tests, and guidance to clear exams like Equity Derivatives, Investment Adviser, and Research Analyst."
  },
  {
    icon: <Code size={36} className="text-trading-gold" />,
    title: "Algo Development",
    description: "Master the art of creating and optimizing trading algorithms without needing advanced programming skills. Automate strategies and backtest them for consistent performance."
  },
  {
    icon: <BookOpen size={36} className="text-trading-gold" />,
    title: "Expert Community",
    description: "Join our exclusive community of traders where you can share ideas and learn from experienced professionals."
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
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-5 text-trading-gold">{feature.icon}</div>
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
