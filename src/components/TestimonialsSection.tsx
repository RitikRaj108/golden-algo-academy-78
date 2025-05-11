
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    position: "Full-time Trader",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Before joining AlgoTrade Academy, I was struggling with inconsistent results. Their systematic approach to algo trading has completely transformed my trading. I've seen a 38% increase in my annual returns.",
    rating: 5
  },
  {
    name: "Sarah L.",
    position: "Investment Analyst",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "The algorithmic strategies I've learned have given me an edge in the market that I never had before. The community is incredibly supportive and the instructors are always available to help.",
    rating: 5
  },
  {
    name: "David K.",
    position: "Former Day Trader",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "I was skeptical at first, but the results speak for themselves. I've been able to automate most of my trading and spend less time watching charts while actually improving my overall performance.",
    rating: 5
  },
  {
    name: "Jennifer T.",
    position: "Institutional Trader",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    content: "The risk management module alone was worth the entire investment. I've reduced my drawdowns significantly while maintaining strong returns. This program delivers on its promises.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section id="testimonials" className="py-20 bg-trading-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-trading-gold">Stories</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our traders who have transformed their trading results with our algorithmic strategies.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mb-4 border-2 border-trading-gold"
                />
                <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-trading-gold text-sm">{testimonials[currentIndex].position}</p>
                <div className="flex mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-trading-gold fill-trading-gold" />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-lg md:text-xl italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-trading-gold" : "bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-trading-gold/90 hover:bg-trading-gold rounded-full p-2 text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-trading-gold/90 hover:bg-trading-gold rounded-full p-2 text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
