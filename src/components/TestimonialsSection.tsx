
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sonu",
    position: "Beginner Trader",
    image: "/lovable-uploads/a7429a70-7dbc-4e39-b72c-d93cfd528988.png",
    content: "I started my trading journey with zero knowledge. AshwaQuant's beginner-friendly courses helped me understand both fundamentals and technicals. I now confidently practice trading every day and have built strong discipline in my approach.",
    rating: 5
  },
  {
    name: "Abhishek Anand",
    position: "Business Owner",
    image: "/lovable-uploads/55285ed1-2d3d-49dd-96ee-68025db0d1f9.png",
    content: "As a busy entrepreneur, I could only dedicate weekends to learning. AshwaQuant's online flexible modules made it possible for me to balance business and learning. Today, I trade with clarity and strategy during my free time.",
    rating: 5
  },
  {
    name: "Sumit",
    position: "IT Professional",
    image: "/lovable-uploads/c03706d7-8606-47bd-b636-9a4ad26a4de9.png",
    content: "Being from an IT background, I was drawn to algo trading. The strategies and tools from AshwaQuant helped me automate my trades. Now, I make consistent daily profits while focusing on my day job.",
    rating: 5
  },
  {
    name: "Dilip Kumar",
    position: "Retired Professional",
    image: "/lovable-uploads/0d3e6ef9-74a2-4fbb-9001-979924de8e6f.png",
    content: "After retirement, I wanted to explore trading. AshwaQuant introduced me to Forex and Crypto. I now actively trade funded accounts using MetaTrader and FundingPips, generating an additional income stream post-retirement.",
    rating: 5
  },
  {
    name: "Diksha",
    position: "Equity Analyst",
    image: "/lovable-uploads/bc8eb0a0-62aa-4110-8a56-8cff6a71bb31.png",
    content: "I enrolled in AshwaQuant to deepen my understanding of equity markets. Their structured NISM prep helped me get certified, and I now work full-time as an Equity Analyst in a reputed firm.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-trading-blue text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-trading-gold">Stories</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from our traders who have transformed their trading results with our algorithmic strategies.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-2">
                  <div className="p-1">
                    <Card className="bg-white/5 backdrop-blur-sm border-0 text-white rounded-xl overflow-hidden h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="w-16 h-16 border-2 border-trading-gold">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback className="bg-trading-gold text-white">
                              {testimonial.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="text-xl font-bold">{testimonial.name}</h4>
                            <p className="text-trading-gold text-sm">{testimonial.position}</p>
                            <div className="flex mt-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={14} className="text-trading-gold fill-trading-gold" />
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <blockquote className="text-sm md:text-base italic flex-grow">
                          "{testimonial.content}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static -translate-y-0 bg-trading-gold/80 hover:bg-trading-gold border-0 text-white" />
              <CarouselNext className="relative static -translate-y-0 bg-trading-gold/80 hover:bg-trading-gold border-0 text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
