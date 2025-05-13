
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

  // Horse running animation variants
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
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.7
      }
    },
    run: {
      x: "calc(100vw + 300px)",
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5
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
              animate={["visible", "run"]}
              exit="exit"
            >
              <img 
                src="/lovable-uploads/e89aa260-25d4-41cb-8353-fa0505594612.png" 
                alt="Running Horse"
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
