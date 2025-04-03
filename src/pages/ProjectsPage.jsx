import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projectImg1 from "../assets/images/portfolio-thumbnail.jpg";
import projectImg2 from "../assets/images/emanuel-church-thumbnail.jpg";

function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Enable animation when component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Make sure scrolling is enabled
    document.body.style.overflow = "auto";

    return () => {
      // Clean up
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A modern portfolio website built with React and CSS animations to showcase my skills and projects.",
      image: projectImg1,
      url: "https://solomon-portfolio.vercel.app", // Update with your actual URL when deployed
      github: "https://github.com/yourusername/solomon-portfolio", // Update with your actual GitHub repo
      tags: ["React", "CSS", "Animation", "Responsive"],
      category: "web",
    },
    {
      id: 2,
      title: "Emanuel Church Website",
      description:
        "A website for Emanuel Church in Belgium featuring service times, events, and community information.",
      image: projectImg2,
      url: "",
      github: null, // No public GitHub repo for this one
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      category: "web",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="page-container">
      <section
        id="projects"
        className="projects-section full-page"
        ref={sectionRef}
      >
        <div className="content-container">
          <div
            className={`section-header ${isVisible ? "animate-fade-in" : ""}`}
          >
            <h2>My Projects</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Showcasing my latest work and creative solutions
            </p>
          </div>

          <div className={`projects-content ${isVisible ? "visible" : ""}`}>
            <div className="projects-filter">
              <button
                className={
                  activeFilter === "all" ? "filter-btn active" : "filter-btn"
                }
                onClick={() => setActiveFilter("all")}
              >
                All
              </button>
              <button
                className={
                  activeFilter === "web" ? "filter-btn active" : "filter-btn"
                }
                onClick={() => setActiveFilter("web")}
              >
                Web
              </button>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div className="project-card" key={project.id}>
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
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
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="project-card coming-soon">
                <div className="project-image-container">
                  <div className="project-image-placeholder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">More Coming Soon</h3>
                  <p className="project-description">
                    Currently working on exciting new projects that will be
                    featured here soon.
                  </p>
                  <div className="project-tags">
                    <span className="project-tag coming-soon-tag">
                      Stay Tuned
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="more-projects">
              <div className="projects-outro">
                <h3>Looking for collaboration?</h3>
                <p>
                  I'm always open to discussing new projects and creative ideas.
                  If you're looking for a developer to bring your vision to
                  life, let's connect!
                </p>
                {/* Replace the regular anchor with Link component for proper SPA navigation */}
                <Link to="/contact" className="btn btn-primary">
                  <span>Get In Touch</span>
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
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
