import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import SocialBar from "./components/SocialBar";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SoulWinning from "./pages/SoulWinning";

import SundayService from "./pages/programs/SundayService";
import Discipleship from "./pages/programs/Discipleship";
import BibleStudy from "./pages/programs/BibleStudy";

import Mission from "./pages/foundation/Mission";
import Vision from "./pages/foundation/Vision";
import CoreValues from "./pages/foundation/CoreValues";
import StatementOfFaith from "./pages/foundation/StatementOfFaith";

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.98,
      filter: "blur(10px)"
    },
    in: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)"
    },
    out: { 
      opacity: 0, 
      scale: 1.02,
      filter: "blur(10px)"
    },
  };

  const pageTransition = {
    type: "tween",
    ease: [0.4, 0, 0.2, 1],
    duration: 0.6,
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/programs"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Programs />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/soul-winning"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <SoulWinning />
            </motion.div>
          }
        />

        <Route
          path="/sunday-service"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <SundayService />
            </motion.div>
          }
        />
        <Route
          path="/discipleship"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Discipleship />
            </motion.div>
          }
        />
        <Route
          path="/bible-study"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <BibleStudy />
            </motion.div>
          }
        />

        <Route
          path="/mission"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Mission />
            </motion.div>
          }
        />
        <Route
          path="/vision"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Vision />
            </motion.div>
          }
        />
        <Route
          path="/core-values"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <CoreValues />
            </motion.div>
          }
        />
        <Route
          path="/statement-of-faith"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <StatementOfFaith />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <SocialBar />
        <AnimatedRoutes />
        <Footer />
        <BackToTop />
      </Router>
    </HelmetProvider>
  );
}

export default App;
