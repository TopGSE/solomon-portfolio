import { useState, useEffect, useRef } from "react";

function SkillsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";

    return () => {
      // Clean up
    };
  }, []);

  // Skill data organized by category
  const skillCategories = [
    {
      name: "Backend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 10h-4v4h4v-4z"></path>
          <path d="M22 8a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8z"></path>
        </svg>
      ),
      skills: [
        { name: "C# / .NET", level: 95 },
        { name: ".NET Core / .NET 6+", level: 92 },
        { name: "ASP.NET Core", level: 90 },
        { name: "Entity Framework Core", level: 87 },
        { name: "REST API Design", level: 85 },
      ],
    },
    {
      name: "Frontend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      skills: [
        { name: "React", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 82 },
        { name: "Tailwind CSS", level: 80 },
        { name: "CSS", level: 80 },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      skills: [
        { name: "Azure Cloud Services", level: 85 },
        { name: "Azure DevOps", level: 82 },
        { name: "Docker", level: 75 },
        { name: "Linux VM Management", level: 70 },
        { name: "CI/CD Pipelines", level: 78 },
      ],
    },
    {
      name: "Databases",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "SQL Server Management Studio", level: 87 },
        { name: "MongoDB", level: 75 },
        { name: "Azure SQL Database", level: 85 },
        { name: "Database Design", level: 88 },
      ],
    },
  ];

  // Current learning and projects
  const currentlyLearning = [
    "Blazor",
    "Kubernetes",
    "Next.js",
    "Azure Functions",
    "GraphQL",
  ];

  return (
    <div className="page-container">
      <section className="skills-section-alt" ref={sectionRef}>
        <div className="content-container">
          <div
            className={`section-header ${isVisible ? "animate-fade-in" : ""}`}
          >
            <h2>Technical Skills</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Specialized expertise in C#/.NET with complementary front-end and
              cloud skills
            </p>
          </div>

          <div className={`skills-container-alt ${isVisible ? "visible" : ""}`}>
            <div className="skills-intro-alt">
              <div className="skills-intro-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="skills-intro-content-alt">
                <h3>Full-Stack Developer</h3>
                <p>
                  I specialize in <strong>C#/.NET</strong> backend development
                  with strong capabilities in modern web development using{" "}
                  <strong>React</strong>, <strong>TypeScript</strong>, and
                  <strong> Tailwind CSS</strong>. My experience extends to cloud
                  solutions with
                  <strong> Azure</strong> and database management across SQL and
                  NoSQL platforms.
                </p>
              </div>
            </div>

            <div className="skills-categories-alt">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-category-alt">
                  <div className="category-header-alt">
                    <div className="category-icon-alt">{category.icon}</div>
                    <h3>{category.name}</h3>
                  </div>

                  <div className="skills-list-alt">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item-alt">
                        <div className="skill-info-alt">
                          <span className="skill-name-alt">{skill.name}</span>
                          <span className="skill-level-alt">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="skill-progress-container-alt">
                          <div
                            className="skill-progress-bar-alt"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="currently-learning-alt">
              <h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 9L12 5 2 9 12 13 22 9z"></path>
                  <path d="M2 9v6l10 4 10-4V9"></path>
                  <path d="M12 13v8"></path>
                  <path d="M19 15.54V12"></path>
                </svg>
                Currently Learning
              </h3>
              <div className="learning-tags-alt">
                {currentlyLearning.map((item, index) => (
                  <span key={index} className="learning-tag-alt">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="skills-cta-alt">
              <h3>Let's Collaborate on Your Next Project</h3>
              <div className="cta-buttons-alt">
                <a href="/projects" className="btn btn-primary">
                  <span>View My Projects</span>
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
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="/contact" className="btn btn-outline">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
