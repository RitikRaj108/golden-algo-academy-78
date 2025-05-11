
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";

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
              <a href="https://www.linkedin.com/company/ashwaquant/" className="text-gray-300 hover:text-trading-gold transition-colors" target="_blank" rel="noopener noreferrer">
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
            <ul className="space-y-2">
              <li className="text-gray-300">Email: support@ashwaquant.com</li>
              <li className="text-gray-300">Forms: forms.gle/FHPJZ9ty9tboDYZTA</li>
              <li className="text-gray-300">Address: 90 Feet Road, Vijay Nagar,<br/> Hanuman Nagar, opposite NBCC Tower,<br/> Kankarbagh, Patna, India 800026</li>
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
