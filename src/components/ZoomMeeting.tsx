
import React from "react";
import { Play, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="overflow-hidden border-0 shadow-lg">
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={thumbnailUrl} 
            alt={`${title} meeting thumbnail`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[1px]">
            <motion.div
              className="rounded-full bg-white/20 p-4 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Play className="h-12 w-12 text-white" fill="white" />
            </motion.div>
          </div>
        </div>
      </div>
      
      <CardContent className="p-6 bg-white">
        <h3 className="font-bold text-2xl mb-3">{title}</h3>
        
        <div className="space-y-3 mb-4">
          {startTime && (
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2 text-trading-gold" />
              <span>{startTime}</span>
            </div>
          )}
          
          {host && (
            <div className="flex items-center text-gray-600">
              <User className="h-5 w-5 mr-2 text-trading-gold" />
              <span>{host}</span>
            </div>
          )}
        </div>
        
        <Button 
          className="w-full text-lg py-6 mt-2 bg-trading-gold hover:bg-trading-gold-light gap-2"
          onClick={() => window.open(meetingUrl, "_blank")}
        >
          <Play className="h-5 w-5" />
          Join Workshop
        </Button>
      </CardContent>
    </Card>
  );
};

export default ZoomMeeting;
