
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MentorSection from "@/components/MentorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import RegistrationSection from "@/components/GoogleFormSection";
import ZoomMeetingExample from "@/components/ZoomMeetingExample";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MentorSection />
      <TestimonialsSection />
      <ZoomMeetingExample />
      <RegistrationSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
