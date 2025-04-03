import { useState, useEffect, useRef } from "react";
import profileImage from "../assets/images/398687690_2307871489408256_5798399323161767913_n.jpg";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Lower threshold for quicker activation
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-transition-top"></div>
      <div className="content-container">
        <div className={`section-header ${isVisible ? "animate-fade-in" : ""}`}>
          <h2>About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-wrapper">
          <div className={`about-content ${isVisible ? "visible" : ""}`}>
            <div className="about-bio-main">
              <div className="about-intro">
                <h3 className="about-subtitle">
                  A Software Developer with a Musician's Perspective
                </h3>
                <p className="about-lead-text">
                  Creating harmonious digital experiences with code that's as
                  structured and purposeful as a musical composition.
                </p>
              </div>

              <div className="about-bio-content">
                <p>
                  I'm a passionate software developer with a unique approach to
                  coding that's shaped by my background in music. Just as music
                  requires both technical precision and creative expression, I
                  apply the same mentality to building digital solutions.
                </p>
                <p>
                  My development philosophy centers around creating harmonious
                  code—structured, rhythmic, and purposeful. I believe great
                  software, like great music, requires both technical excellence
                  and creative problem-solving.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or
                  composing music to maintain the perfect balance between
                  technical and creative pursuits.
                </p>
              </div>
            </div>

            <div className="about-details-container">
              <div className="skills-section">
                <div className="section-label">
                  <span className="label-line"></span>
                  <h4>My Expertise</h4>
                </div>

                <div className="skills-container">
                  <div className="skills-group">
                    <h5>Development</h5>
                    <div className="skill-tags">
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">TypeScript</span>
                      <span className="skill-tag">HTML/CSS</span>
                    </div>
                  </div>

                  <div className="skills-group">
                    <h5>Music</h5>
                    <div className="skill-tags">
                      <span className="skill-tag music-tag">Composition</span>
                      <span className="skill-tag music-tag">Piano</span>
                      <span className="skill-tag music-tag">Production</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="personal-details">
                <div className="section-label">
                  <span className="label-line"></span>
                  <h4>Personal Details</h4>
                </div>

                <div className="about-details">
                  <div className="detail-item">
                    <span className="detail-title">Name:</span>
                    <span className="detail-value">Solomon</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-title">Email:</span>
                    <span className="detail-value">your.email@example.com</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-title">Location:</span>
                    <span className="detail-value">Your Location</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-title">Available for:</span>
                    <span className="detail-value">Freelance & Full-time</span>
                  </div>
                </div>
              </div>

              <div className="about-cta">
                <a href="#contact" className="btn btn-primary">
                  <span>Download CV</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
                <a href="#projects" className="btn btn-outline">
                  <span>View Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
