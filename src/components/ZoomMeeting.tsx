
import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ZoomMeetingProps {
  title: string;
  meetingUrl: string;
  thumbnailUrl: string;
  startTime?: string;
  host?: string;
}

const ZoomMeeting: React.FC<ZoomMeetingProps> = ({
  title,
  meetingUrl,
  thumbnailUrl,
  startTime,
  host,
}) => {
  return (
    <motion.div 
      className="rounded-lg border border-gray-200 shadow-md overflow-hidden bg-white"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img 
            src={thumbnailUrl} 
            alt={`${title} meeting thumbnail`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm">
              <Play className="h-8 w-8 text-white" fill="white" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        
        {(startTime || host) && (
          <div className="text-sm text-gray-500 mb-3">
            {startTime && <p>Starting: {startTime}</p>}
            {host && <p>Host: {host}</p>}
          </div>
        )}
        
        <Button 
          className="w-full gap-2 bg-blue-600 hover:bg-blue-700"
          onClick={() => window.open(meetingUrl, "_blank")}
        >
          <Play className="h-4 w-4" />
          Join Meeting
        </Button>
      </div>
    </motion.div>
  );
};

export default ZoomMeeting;
