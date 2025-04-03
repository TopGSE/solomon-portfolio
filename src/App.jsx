import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Other sections will be added here */}
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Solomon. All Rights Reserved.</p>
          <div className="social-links">
            {/* Social media links */}
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
    </>
  );
}

export default App;
