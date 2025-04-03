import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Add this state to track if the modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);
  const emailInputRef = useRef(null);

  useEffect(() => {
    // Enable animation when component mounts
    setIsVisible(true);

    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Make sure scrolling is enabled
    document.body.style.overflow = "auto";

    return () => {
      // Clean up
    };
  }, []);

  const handleCVRequest = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const email = emailInputRef.current.value;

    // Email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      // Use our custom toast instead of react-toastify
      window.showToast("Please enter a valid email address", "error");
      return;
    }

    // Here you would typically save the email to send the CV later
    // For now, just show a success message
    window.showToast("Thank you! I'll send you my CV as soon as it's ready.", "success");
    setIsModalOpen(false);
  };

  // Add this to your AboutPage component - modify the CTA section
  const renderCVButton = () => (
    <a href="#" onClick={handleCVRequest} className="btn btn-primary">
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
  );

  // Add this modal to your component's JSX
  const renderCVRequestModal = () => (
    <div className={`cv-request-modal ${isModalOpen ? "active" : ""}`}>
      <div className="modal-backdrop" onClick={handleCloseModal}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={handleCloseModal}>
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h3>CV Coming Soon</h3>
        <p>
          My CV is currently being updated. Leave your email and I'll send it to
          you when it's ready!
        </p>

        <form onSubmit={handleSubmitEmail} className="cv-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={emailInputRef}
              placeholder="Your email address"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <span>Notify Me</span>
          </button>
        </form>

        <div className="modal-alternative">
          <p>Or check out my skills and projects:</p>
          <div className="modal-links">
            <Link
              to="/skills"
              onClick={handleCloseModal}
              className="modal-link"
            >
              View Skills
            </Link>
            <Link
              to="/projects"
              onClick={handleCloseModal}
              className="modal-link"
            >
              See Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="page-container">
        <section
          id="about"
          className="about-section full-page"
          ref={sectionRef}
        >
          <div className="content-container">
            <div
              className={`section-header ${isVisible ? "animate-fade-in" : ""}`}
            >
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
                      Creating harmonious digital experiences with code that's
                      as structured and purposeful as a musical composition.
                    </p>
                  </div>

                  <div className="about-bio-content">
                    <p>
                      I'm a passionate software developer with a unique approach
                      to coding that's shaped by my background in music. Just as
                      music requires both technical precision and creative
                      expression, I apply the same mentality to building digital
                      solutions.
                    </p>
                    <p>
                      My development philosophy centers around creating
                      harmonious code—structured, rhythmic, and purposeful. I
                      believe great software, like great music, requires both
                      technical excellence and creative problem-solving.
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
                          <span className="skill-tag">C#/.NET</span>
                          <span className="skill-tag">JavaScript</span>
                          <span className="skill-tag">Node.js</span>
                          <span className="skill-tag">TypeScript</span>
                          <span className="skill-tag">HTML/CSS</span>
                        </div>
                      </div>

                      <div className="skills-group">
                        <h5>Music</h5>
                        <div className="skill-tags">
                          <span className="skill-tag music-tag">
                            Composition
                          </span>
                          <span className="skill-tag music-tag">Piano</span>
                          <span className="skill-tag music-tag">
                            Production
                          </span>
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
                        <span className="detail-value">
                          solomonekov@gmail.com
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-title">Location:</span>
                        <span className="detail-value">Ghent, Belgium</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-title">Available for:</span>
                        <span className="detail-value">
                          Freelance & Full-time
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="about-cta">
                    {renderCVButton()}
                    <a href="/contact" className="btn btn-outline">
                      <span>Back to Home</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {renderCVRequestModal()}
    </>
  );
}

export default AboutPage;
