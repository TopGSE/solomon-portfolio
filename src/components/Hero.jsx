import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "../assets/images/398687690_2307871489408256_5798399323161767913_n.jpg";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const audioVisualizerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);

    // Audio visualizer effect (represents your musical side subtly)
    const canvas = audioVisualizerRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let width = canvas.width;
      let height = canvas.height;

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        width = canvas.width;
        height = canvas.height;
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      // Create audio-inspired animation
      const bars = [];
      const barCount = 40;

      for (let i = 0; i < barCount; i++) {
        bars.push({
          x: width * (i / barCount),
          height: Math.random() * 30 + 5,
          speed: Math.random() * 0.4 + 0.1,
          direction: Math.random() > 0.5 ? 1 : -1,
        });
      }

      const draw = () => {
        ctx.clearRect(0, 0, width, height);

        bars.forEach((bar, i) => {
          // Create subtle audio-like visualization
          const barWidth = width / barCount - 2;
          const hue = 220 + i * (40 / barCount); // Blue to purple gradient

          bar.height += bar.speed * bar.direction;
          if (bar.height > 40 || bar.height < 5) {
            bar.direction *= -1;
          }

          ctx.fillStyle = `hsla(${hue}, 80%, 60%, 0.1)`;
          ctx.fillRect(
            bar.x,
            height / 2 - bar.height / 2,
            barWidth,
            bar.height
          );
        });

        requestAnimationFrame(draw);
      };

      draw();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }
  }, []);

  // Navigate to About page
  const navigateToAbout = (e) => {
    e.preventDefault();
    navigate("/about");
  };

  // Navigate to Projects page
  const navigateToProjects = (e) => {
    e.preventDefault();
    navigate("/projects");
  };

  return (
    <section id="home" className="hero-section">
      <canvas ref={audioVisualizerRef} className="audio-visualizer"></canvas>

      <div className="hero-content-container">
        <div className={`hero-content ${isLoaded ? "loaded" : ""}`}>
          <div className="hero-heading-block">
            <p className="hero-overline">Software Developer & Musician</p>
            <h1 className="hero-title">
              <span className="text-animate">Solomon Ekov</span>
            </h1>
            <div className="rhythm-dots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <p className="hero-description">
            Creating harmonious digital experiences with clean code and a
            musician's attention to detail.
          </p>

          <div className="hero-cta">
            <a
              href="/projects"
              className="btn btn-primary"
              onClick={navigateToProjects}
            >
              <span>Explore My Work</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a
              href="/about"
              className="btn btn-outline"
              onClick={navigateToAbout}
            >
              <span>About Me</span>
            </a>
          </div>

          <div className="scroll-indicator" onClick={navigateToAbout}>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="chevrons">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
