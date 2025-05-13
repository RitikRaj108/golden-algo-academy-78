
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    classType: "online"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, classType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send the email using FormSubmit service
      const response = await fetch("https://formsubmit.co/ritickrg1997@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          classType: formData.classType,
          message: `New registration from ${formData.name} for ${formData.classType} trading classes`,
          _subject: "New Trading Program Registration",
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Registration Successful!",
          description: "We've received your registration. Our team will contact you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          classType: "online"
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field focus:ring-trading-gold focus:border-trading-gold"
            placeholder="John Smith"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field focus:ring-trading-gold focus:border-trading-gold"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field focus:ring-trading-gold focus:border-trading-gold"
            placeholder="+91 9801943648"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Class Type *
          </label>
          <RadioGroup 
            value={formData.classType}
            onValueChange={handleRadioChange}
            className="flex gap-6"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="online" id="online" />
              <label htmlFor="online" className="text-sm">Online Classes</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="offline" id="offline" />
              <label htmlFor="offline" className="text-sm">Offline Classes</label>
            </div>
          </RadioGroup>
        </div>
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-trading-gold hover:bg-trading-gold-light text-white transition-all hover:scale-105"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : (
            <>
              <Send className="mr-2" size={18} />
              Register Now
            </>
          )}
        </Button>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs text-center text-gray-500 mt-2"
        >
          We'll contact you shortly with more details about the program
        </motion.p>
      </div>
    </form>
  );
};

export default RegistrationForm;
