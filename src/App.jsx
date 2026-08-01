import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import SocialBar from "./components/SocialBar";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgress from "./components/ScrollProgress";
import Breadcrumb from "./components/Breadcrumb";
import StickyCTA from "./components/StickyCTA";
import PageLoader from "./components/PageLoader";
import ParticleBackground from "./components/ParticleBackground";
import SmoothScroll, { scrollToTop } from "./components/SmoothScroll";
import AnimatedBackground from "./components/AnimatedBackground";
import PageTransition from "./components/PageTransition";
import PerformanceMonitor from "./components/PerformanceMonitor";
import { ToastProvider } from "./components/enhancements";
import SmoothThemeTransition from "./components/enhancements/SmoothThemeTransition";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SoulWinning from "./pages/SoulWinning";
import Ministries from "./pages/Ministries";
import LuxuryShowcase from "./pages/LuxuryShowcase";

import SundayService from "./pages/programs/SundayService";
import Discipleship from "./pages/programs/Discipleship";
import BibleStudy from "./pages/programs/BibleStudy";
import BibleStudyGroups from "./pages/programs/BibleStudyGroups";
import Sermons from "./pages/Sermons";
import MinistryDetail from "./pages/ministries/MinistryDetail";

import Mission from "./pages/foundation/Mission";
import Vision from "./pages/foundation/Vision";
import CoreValues from "./pages/foundation/CoreValues";
import StatementOfFaith from "./pages/foundation/StatementOfFaith";

// Scroll to top on every route change — works with Lenis smooth scroll
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // immediate: true skips the smooth animation so the page snaps to top
    // instantly rather than scrolling there, which is the correct UX on navigation
    scrollToTop();
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/programs" element={<PageTransition><Programs /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/soul-winning" element={<PageTransition><SoulWinning /></PageTransition>} />
        <Route path="/ministries" element={<PageTransition><Ministries /></PageTransition>} />
        <Route path="/ministries/:slug" element={<PageTransition><MinistryDetail /></PageTransition>} />
        <Route path="/sermons" element={<PageTransition><Sermons /></PageTransition>} />
        <Route path="/programs/sunday-service" element={<PageTransition><SundayService /></PageTransition>} />
        <Route path="/programs/discipleship" element={<PageTransition><Discipleship /></PageTransition>} />
        <Route path="/programs/bible-study" element={<PageTransition><BibleStudy /></PageTransition>} />
        <Route path="/programs/bible-study/groups" element={<PageTransition><BibleStudyGroups /></PageTransition>} />
        <Route path="/mission" element={<PageTransition><Mission /></PageTransition>} />
        <Route path="/vision" element={<PageTransition><Vision /></PageTransition>} />
        <Route path="/core-values" element={<PageTransition><CoreValues /></PageTransition>} />
        <Route path="/statement-of-faith" element={<PageTransition><StatementOfFaith /></PageTransition>} />
        <Route path="/luxury-showcase" element={<PageTransition><LuxuryShowcase /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ToastProvider>
        <Router>
          <SmoothScroll>
            <PerformanceMonitor />
            <SmoothThemeTransition />
            <ScrollToTop />
            <AnimatedBackground />
            <PageLoader />
            <ParticleBackground />
            <LoadingScreen />
            <ScrollProgress />
            <Navbar />
            <Breadcrumb />
            <SocialBar />
            <StickyCTA />
            <AnimatedRoutes />
            <Footer />
            <BackToTop />
          </SmoothScroll>
        </Router>
      </ToastProvider>
    </HelmetProvider>
  );
}

export default App;
