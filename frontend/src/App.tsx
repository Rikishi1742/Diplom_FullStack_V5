import React from "react";
import {UserProvider} from "./context/UserContext";
import AppContent from "./layout/AppContent";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Routes, Route, useRoutes,useLocation } from "react-router-dom";
import HomePage from '../src/pages/HomePage';
import LoginPage from '../src/pages/Login/LoginPage';
import Education from '../src/pages/Education';
import AboutUs from '../src/pages/aboutUs';
import NotFoundPage from '../src/pages/NotFoundPage';
import Account from '../src/pages/Account';
import Settings from '../src/pages/Settings';


function App() {

  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/aboutUs",
        element: <AboutUs />
    },
    {
        path: "/education",
        element: <Education />
    },
    {
        path: "/account",
        element: <Account />
    },
    {
        path: "/settings",
        element: <Settings />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }]);
  
  const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 20,
        restDelta: 0.001
    });

    const location = useLocation();

    if (!element) return null;

  return (
    <>
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>

     <motion.div className="progress-bar" style={{ scaleX }} />
      <UserProvider>
        <AppContent />
      </UserProvider>
    </>
  );
}

export default App;
