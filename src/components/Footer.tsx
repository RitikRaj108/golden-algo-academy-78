
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Phone, MapPin, Smartphone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-trading-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-trading-gold">Ashwa</span>Quant
            </h3>
            <p className="text-gray-300 mb-4">
              Stock, Futures & Options Education with algorithmic trading strategies and personalized mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ashwa_quant/" className="text-gray-300 hover:text-trading-gold transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/ashwaquant-pvt-ltd/posts/?feedView=all" className="text-gray-300 hover:text-trading-gold transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@ashwaquant?si=u0gVA_KFc8meXOAm" className="text-gray-300 hover:text-trading-gold transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-trading-gold transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-trading-gold transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-trading-gold transition-colors">FAQ</a></li>
              <li><a href="#register" className="text-gray-300 hover:text-trading-gold transition-colors">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-trading-gold transition-colors">Blog</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-trading-gold transition-colors">Knowledge Base</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-trading-gold transition-colors">Case Studies</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-trading-gold transition-colors">Webinars</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-trading-gold flex-shrink-0" />
                <span className="text-gray-300">+91 9801943648 / +91 9102546467</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-trading-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">90 Feet Road, Vijay Nagar,<br/> Hanuman Nagar, opposite NBCC Tower,<br/> Kankarbagh, Patna, India 800026</span>
              </li>
              <li className="text-gray-300">Email: support@ashwaquant.com</li>
              <li>
                <a 
                  href="https://www.google.com/maps/place/25%C2%B035'21.9%22N+85%C2%B010'05.0%22E/@25.589425,85.168061,17z/data=!4m4!3m3!8m2!3d25.589427!4d85.168041?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-2 block"
                >
                  <div className="rounded-md overflow-hidden border border-gray-700 hover:border-trading-gold transition-colors">
                    <div className="bg-gray-800 p-2 text-sm text-gray-300">
                      <MapPin size={14} className="inline-block mr-1 text-trading-gold" />
                      View Location
                    </div>
                    <img 
                      src="https://maps.googleapis.com/maps/api/staticmap?center=25.589427,85.168041&zoom=15&size=300x150&markers=color:gold|25.589427,85.168041&key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg" 
                      alt="Office Location Map"
                      className="w-full h-[100px] object-cover"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} AshwaQuant Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/" className="text-gray-400 hover:text-trading-gold text-sm">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-400 hover:text-trading-gold text-sm">
                Terms of Service
              </Link>
              <Link to="/" className="text-gray-400 hover:text-trading-gold text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
