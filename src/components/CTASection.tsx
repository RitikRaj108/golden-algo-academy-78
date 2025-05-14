
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Take Your Trading to the <span className="text-trading-gold">Next Level</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join AshwaQuant's exclusive trading education program and get access to professional-grade strategies that have helped traders achieve consistent profits. Limited spots available for our next cohort.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                className="bg-trading-gold hover:bg-trading-gold-light text-white px-8 py-6 text-lg font-medium transition-transform hover:scale-105"
                onClick={scrollToRegistration}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-trading-blue text-white p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-2">What You'll Get</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-trading-gold mr-2">✓</span>
                  Stock, Futures & Options Education
                </li>
                <li className="flex items-start">
                  <span className="text-trading-gold mr-2">✓</span>
                  Personalized Mentorship Program
                </li>
                <li className="flex items-start">
                  <span className="text-trading-gold mr-2">✓</span>
                  Algorithmic Trading Strategies
                </li>
                <li className="flex items-start">
                  <span className="text-trading-gold mr-2">✓</span>
                  Weekly live trading sessions
                </li>
                <li className="flex items-start">
                  <span className="text-trading-gold mr-2">✓</span>
                  Personal strategy review session
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 text-white p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-2">Visit Us</h4>
              <p className="mb-4">We're located at:</p>
              <p className="text-gray-300">
                90 Feet Road, Vijay Nagar, Hanuman Nagar, opposite NBCC Tower, Kankarbagh, Patna, India 800026
              </p>
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="border-trading-gold text-trading-gold hover:bg-trading-gold/10 w-full"
                  onClick={() => window.open("https://www.google.com/maps/place/25%C2%B035'21.9%22N+85%C2%B010'05.0%22E/@25.589425,85.168061,17z/data=!4m4!3m3!8m2!3d25.589427!4d85.168041?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D", "_blank")}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
