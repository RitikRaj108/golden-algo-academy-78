
import React from "react";
import ZoomMeeting from "./ZoomMeeting";

const ZoomMeetingExample = () => {
  const demoMeeting = {
    title: "Trading Strategy Workshop",
    meetingUrl: "https://zoom.us/j/123456789",
    thumbnailUrl: "/lovable-uploads/53391256-dd11-4a60-bbe7-5a59d162eaed.png",
    startTime: "Today, 3:00 PM",
    host: "John Smith"
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ZoomMeeting
        title={demoMeeting.title}
        meetingUrl={demoMeeting.meetingUrl}
        thumbnailUrl={demoMeeting.thumbnailUrl}
        startTime={demoMeeting.startTime}
        host={demoMeeting.host}
      />
    </div>
  );
};

export default ZoomMeetingExample;
