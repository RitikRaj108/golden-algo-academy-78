
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-trading-blue/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/957721ef-3257-492f-b3d6-5bfa5a1357b2.png" 
                alt="AshwaQuant Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold text-white hidden sm:inline-block">
                <span className="text-trading-gold">Ashwa</span>Quant
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {["Features", "Testimonials"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-200 hover:text-trading-gold transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button variant="default" className="bg-trading-gold hover:bg-trading-gold-light text-white">
              Register Now
            </Button>
          </div>
          
          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-trading-blue/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {["Features", "Testimonials"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-200 hover:text-trading-gold transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button variant="default" className="bg-trading-gold hover:bg-trading-gold-light text-white mt-2 w-full">
                Register Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
