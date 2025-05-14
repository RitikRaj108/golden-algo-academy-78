
import { useState, useEffect } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set a fixed target date 7 days from initial load
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 7);
      
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Calculate immediately on component mount
    calculateTimeLeft();
    
    // Set interval to update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const padWithZero = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="w-full">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
        Limited Spots Available:
      </h3>
      
      <div className="flex justify-center gap-4 md:gap-6">
        <div className="flex flex-col items-center">
          <div className="bg-trading-blue text-white rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold">
            {padWithZero(timeLeft.days)}
          </div>
          <span className="text-sm mt-2">Days</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-trading-blue text-white rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold">
            {padWithZero(timeLeft.hours)}
          </div>
          <span className="text-sm mt-2">Hours</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-trading-blue text-white rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold">
            {padWithZero(timeLeft.minutes)}
          </div>
          <span className="text-sm mt-2">Minutes</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-trading-blue text-white rounded-lg w-16 md:w-20 h-16 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-bold">
            {padWithZero(timeLeft.seconds)}
          </div>
          <span className="text-sm mt-2">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
