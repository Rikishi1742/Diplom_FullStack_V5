import React from "react";
import {UserProvider} from "./context/UserContext";
import AppContent from "./layout/AppContent";
import { motion, useScroll, useSpring } from "framer-motion";



function App() {
  
  const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 20,
        restDelta: 0.001
    });

  return (
    <>
     <motion.div className="progress-bar" style={{ scaleX }} />
      <UserProvider>
        <AppContent />
      </UserProvider>
    </>
  );
}

export default App;
