
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const GoogleFormSection = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScwvRGmtT2xT4wovaKpAgr8X3zjANLkdSCL0hblqdD-yhsbAw/viewform";
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-trading-gold">Registration</span> Form
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete this quick form to begin your trading journey with our team of expert mentors.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-lg border-trading-gold/20">
            <CardContent className="p-0">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe 
                  src={googleFormUrl}
                  className="w-full h-[600px] border-0" 
                  title="Google Form Registration"
                  loading="lazy"
                >
                </iframe>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <Button
              className="bg-trading-gold hover:bg-trading-gold-light text-white"
              onClick={() => window.open(googleFormUrl, "_blank")}
            >
              <ExternalLink className="mr-2" size={18} />
              Open Form in New Tab
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-trading-blue">Contact Us</h3>
                <p className="text-gray-600 mb-4">
                  Have questions? Reach out to our team directly:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>Call or WhatsApp:</p> 
                  <p className="font-medium">+91 9801943648 / +91 9102546467</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-trading-blue">Visit Our Location</h3>
                <p className="text-gray-600 mb-4">
                  Find us at our office in Patna:
                </p>
                <div className="overflow-hidden rounded-md h-[200px] border border-gray-200">
                  <a 
                    href="https://www.google.com/maps/place/25%C2%B035'21.9%22N+85%C2%B010'05.0%22E/@25.589425,85.168061,17z/data=!4m4!3m3!8m2!3d25.589427!4d85.168041?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img 
                      src="https://maps.googleapis.com/maps/api/staticmap?center=25.589427,85.168041&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C25.589427,85.168041&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                      alt="Google Maps Location"
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
                <div className="mt-3">
                  <Button
                    variant="outline"
                    className="w-full border-trading-gold text-trading-gold hover:bg-trading-gold/10"
                    onClick={() => window.open("https://www.google.com/maps/place/25%C2%B035'21.9%22N+85%C2%B010'05.0%22E/@25.589425,85.168061,17z/data=!4m4!3m3!8m2!3d25.589427!4d85.168041?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D", "_blank")}
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Open in Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleFormSection;
