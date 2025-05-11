
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Registration Successful!",
        description: "We've received your registration. Check your email for next steps.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        agreeToTerms: false
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-center">Reserve Your Spot Now</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
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
            className="input-field"
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number (optional)
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Trading Experience *
          </label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Select your experience level</option>
            <option value="beginner">Beginner (0-1 years)</option>
            <option value="intermediate">Intermediate (1-3 years)</option>
            <option value="advanced">Advanced (3+ years)</option>
            <option value="professional">Professional Trader</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
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
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-trading-gold hover:bg-trading-gold-light text-white mt-6 py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Secure Your Spot"}
      </Button>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        Limited spots available. We respect your privacy and will never share your information.
      </p>
    </form>
  );
};

export default RegistrationForm;
