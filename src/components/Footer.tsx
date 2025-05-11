
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

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
              <a href="#" className="text-gray-300 hover:text-trading-gold transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-trading-gold transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
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
