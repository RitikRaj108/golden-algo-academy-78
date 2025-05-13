
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Phone, MapPin, SparklesIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import RegistrationForm from "@/components/RegistrationForm";
import { motion } from "framer-motion";

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
            <span className="text-trading-gold">Registration</span> Form
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete this quick form to begin your trading journey with our team of expert mentors.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-lg border-trading-gold/20">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-trading-blue p-8 text-white flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h3 className="text-2xl font-bold mb-4">Join Our Trading Program</h3>
                      <p className="mb-6">Take the first step toward mastering the markets with expert guidance.</p>
                      
                      <ul className="space-y-4">
                        {["Personalized Mentorship", "Practical Market Strategies", "Live Trading Sessions", "Lifetime Access"].map((item, index) => (
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
                    </motion.div>
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <RegistrationForm />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
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
                        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwYnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
                        alt="Our Office"
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
                          src="https://maps.googleapis.com/maps/api/staticmap?center=25.589427,85.168041&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C25.589427,85.168041&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                          alt="Google Maps Location"
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
