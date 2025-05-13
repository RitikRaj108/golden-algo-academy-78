
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Phone, MapPin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import RegistrationForm from "./RegistrationForm";

const RegistrationSection = () => {
  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-trading-gold">Trading</span> Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our comprehensive trading program with expert mentors and practical trading sessions.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {/* Training Images Section - MADE SMALLER */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { src: "/lovable-uploads/74bb6e04-e084-4593-beed-82c0a69ca4ea.png", title: "Classroom Sessions" },
              { src: "/lovable-uploads/85df4abc-58f8-4e19-986e-8da89b8df5a2.png", title: "Chart Analysis" },
              { src: "/lovable-uploads/777d3f54-b64f-4c97-a846-6a4280de94ac.png", title: "Market Study" },
              { src: "/lovable-uploads/ae8f5a7b-20bd-4e8c-8696-f94fc274c89f.png", title: "Stock Trading" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-24 md:h-28 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="p-2 bg-trading-blue text-white text-center text-sm">
                  {item.title}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Registration Form Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-trading-blue">Register for Trading Classes</h3>
              <RegistrationForm />
            </motion.div>
          </div>
          
          <div className="bg-trading-blue text-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {["Stock Market Fundamentals", "Technical Analysis", "Options Trading Strategies", "Risk Management"].map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="text-trading-gold">✓</span> {item}
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-3">
                {["Algorithmic Trading Basics", "Market Psychology", "Trading Plan Development", "Portfolio Management"].map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="text-trading-gold">✓</span> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                <CardContent className="p-0">
                  <div className="overflow-hidden">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                        alt="Contact Us"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </AspectRatio>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-trading-blue">Contact Us</h3>
                    <p className="text-gray-600 mb-4">
                      Have questions? Reach out to our team directly:
                    </p>
                    <motion.div 
                      className="space-y-2 text-gray-700"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <Phone size={18} className="text-trading-gold flex-shrink-0" />
                        <p className="font-medium">+91 9801943648 / +91 9102546467</p>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow hover:scale-105 transform duration-300">
                <CardContent className="p-0">
                  <div className="overflow-hidden">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src="/lovable-uploads/77becf6f-1994-4758-9f66-6a7c1e8b67bc.png" 
                        alt="AshwaQuant Office"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </AspectRatio>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-trading-blue">Visit Our Location</h3>
                    <p className="text-gray-600 mb-4">
                      Find us at our office in Patna:
                    </p>
                    <motion.div 
                      className="overflow-hidden rounded-md h-[200px] border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href="https://www.google.com/maps/place/25%C2%B035'21.9%22N+85%C2%B010'05.0%22E/@25.589425,85.168061,17z/data=!4m4!3m3!8m2!3d25.589427!4d85.168041?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                      >
                        <img 
                          src="/lovable-uploads/77becf6f-1994-4758-9f66-6a7c1e8b67bc.png"
                          alt="AshwaQuant Office Location"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </a>
                    </motion.div>
                    <motion.div 
                      className="mt-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        variant="outline"
                        className="w-full border-trading-gold text-trading-gold hover:bg-trading-gold/10"
                        onClick={() => window.open("https://www.google.com/maps/place/25%C2%B035'21.9%22N+85%C2%B010'05.0%22E/@25.589425,85.168061,17z/data=!4m4!3m3!8m2!3d25.589427!4d85.168041?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D", "_blank")}
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Open in Google Maps
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
