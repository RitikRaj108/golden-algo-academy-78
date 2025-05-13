
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation: React.FC<LandingAnimationProps> = ({ onComplete }) => {
  const [showHorse, setShowHorse] = useState(true);
  
  useEffect(() => {
    // After 3.5 seconds, hide the horse animation and trigger onComplete
    const timer = setTimeout(() => {
      setShowHorse(false);
      setTimeout(onComplete, 500); // Give time for exit animation
    }, 3500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Horse animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: { 
        duration: 0.5,
        when: "afterChildren"
      }
    }
  };
  
  const horseVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.7
      }
    },
    zoom: {
      scale: [1, 1.1, 0.95, 1.05, 1],
      transition: {
        duration: 2,
        times: [0, 0.25, 0.5, 0.75, 1],
        ease: "easeInOut",
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {showHorse && (
        <motion.div
          className="fixed inset-0 bg-trading-blue z-50 flex flex-col items-center justify-center overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="w-full h-full flex flex-col items-center justify-center">
            <motion.div
              className="relative w-[300px]"
              variants={horseVariants}
              initial="hidden"
              animate={["visible", "zoom"]}
              exit="exit"
            >
              <img 
                src="/lovable-uploads/53391256-dd11-4a60-bbe7-5a59d162eaed.png" 
                alt="AshwaQuant Horse Logo"
                className="w-full"
              />
            </motion.div>
            
            <motion.div 
              className="text-center text-white mt-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-trading-gold">Ashwa</span>Quant
              </h1>
              <p className="text-xl md:text-2xl">
                Your Journey Into The <span className="text-trading-gold">Trading World</span> Begins
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingAnimation;
