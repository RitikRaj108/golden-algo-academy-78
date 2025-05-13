
import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import App from './App.tsx'
import LandingAnimation from './components/LandingAnimation.tsx'
import './index.css'

const Main = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  
  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };
  
  return (
    <>
      {showAnimation && <LandingAnimation onComplete={handleAnimationComplete} />}
      {!showAnimation && <App />}
    </>
  );
};

createRoot(document.getElementById("root")!).render(<Main />);
