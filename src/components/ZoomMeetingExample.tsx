
import React from "react";
import ZoomMeeting from "./ZoomMeeting";
import { motion } from "framer-motion";

const ZoomMeetingExample = () => {
  const demoMeeting = {
    title: "Algorithmic Trading Workshop",
    meetingUrl: "https://zoom.us/j/123456789",
    thumbnailUrl: "/lovable-uploads/53391256-dd11-4a60-bbe7-5a59d162eaed.png",
    startTime: "Join our next session",
    host: "John Smith, Senior Trading Analyst"
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Upcoming <span className="text-trading-gold">Trading Workshop</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Secure your spot in our next live trading session. Learn practical strategies 
            and get your questions answered in real-time.
          </p>
          <ZoomMeeting
            title={demoMeeting.title}
            meetingUrl={demoMeeting.meetingUrl}
            thumbnailUrl={demoMeeting.thumbnailUrl}
            startTime={demoMeeting.startTime}
            host={demoMeeting.host}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ZoomMeetingExample;
