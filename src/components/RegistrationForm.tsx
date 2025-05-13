
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };

  const nextStep = () => {
    if (formStep === 0 && (!formData.name || !formData.email)) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }
    setFormStep(prev => prev + 1);
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.experience || !formData.agreeToTerms) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and agree to the terms.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Use EmailJS or a similar service to send the email
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
          experience: formData.experience,
          message: `New registration from ${formData.name}`,
          _subject: "New Trading Program Registration",
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Registration Successful!",
          description: "We've received your registration. Check your email for next steps.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          experience: "",
          agreeToTerms: false
        });
        setFormStep(0);
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
    <div className="relative">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg">
        <h3 className="text-xl font-bold mb-6 text-center text-trading-blue">Reserve Your Spot Now</h3>
        
        <div className="space-y-4">
          {formStep === 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
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
              
              <div className="mb-4">
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
            </motion.div>
          )}
          
          {formStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (optional)
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
              
              <div className="mb-4">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                  Trading Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="input-field focus:ring-trading-gold focus:border-trading-gold"
                  required
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="professional">Professional Trader</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox 
                  id="agreeToTerms" 
                  checked={formData.agreeToTerms}
                  onCheckedChange={handleCheckboxChange}
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-sm text-gray-600"
                >
                  I agree to the terms and privacy policy *
                </label>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="flex justify-between mt-6">
          {formStep > 0 && (
            <Button 
              type="button" 
              variant="outline"
              className="border-trading-gold text-trading-gold"
              onClick={prevStep}
            >
              Back
            </Button>
          )}
          
          {formStep === 0 ? (
            <Button 
              type="button" 
              className="bg-trading-gold hover:bg-trading-gold-light text-white ml-auto transition-transform hover:scale-105"
              onClick={nextStep}
            >
              Next Step
            </Button>
          ) : (
            <Button 
              type="submit" 
              className="bg-trading-gold hover:bg-trading-gold-light text-white transition-all hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : (
                <>
                  <Sparkles className="mr-2" size={18} />
                  Secure Your Spot
                </>
              )}
            </Button>
          )}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs text-gray-500 mt-4 text-center"
        >
          Limited spots available. We respect your privacy.
        </motion.div>
      </form>
      
      {/* Animated elements */}
      <motion.div 
        className="absolute -top-4 -right-4 w-16 h-16 bg-trading-gold rounded-full opacity-20 z-0"
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.2, 0.3, 0.2] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute -bottom-4 -left-4 w-12 h-12 bg-trading-gold rounded-full opacity-15 z-0"
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.15, 0.25, 0.15] 
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default RegistrationForm;
