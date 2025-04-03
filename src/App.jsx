import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import Navbar from "./components/Navbar";
import ToastContainer from "./components/ToastContainer"; // Import our custom ToastContainer
import "./App.css";

// Page transition component
function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fadeOut");

      // Scroll to top of page when transitioning
      window.scrollTo(0, 0);

      // Add a slight delay before setting location to ensure animation plays
      const timeout = setTimeout(() => {
        setTransitionStage("fadeIn");
        setDisplayLocation(location);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  // Ensure body scroll is enabled when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          document.body.style.overflow = "auto"; // Re-enable scrolling after transition
        }
      }}
      onAnimationStart={() => {
        if (transitionStage === "fadeOut") {
          document.body.style.overflow = "hidden"; // Prevent scrolling during transition
        }
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="/skills"
          element={
            <PageTransition>
              <SkillsPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
      </Routes>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Solomon. All Rights Reserved.</p>
          <div className="social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
      <ToastContainer /> {/* Our custom toast container */}
    </BrowserRouter>
  );
}

export default App;
