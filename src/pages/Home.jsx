import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Updated professional hero images
  const heroBackgroundImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  ];

  const profilePicture = "/src/assets/EZEKIEL WEKESA.jpeg";

  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/zablonzekky/Ecommerce-website",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      technologies: ["Vue.js", "Firebase", "Tailwind", "WebSockets"],
      github: "https://github.com/zablonzekky/task-management-app",
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description:
        "Real-time weather analytics dashboard with interactive charts, location-based forecasts, and historical data visualization.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Angular", "D3.js", "API Integration", "TypeScript"],
      github: "https://github.com/zablonzekky/Weather-app",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBackgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + heroBackgroundImages.length) % heroBackgroundImages.length
    );
  };

  return (
    <div className="w-100 bg-white" style={{ overflowX: "hidden" }}>
      {/* Enhanced Hero Section */}
      <section
        className="position-relative overflow-hidden w-100"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background Carousel */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          {heroBackgroundImages.map((image, index) => (
            // <div
            //   className="position-absolute top-0 start-0 w-100 h-100"
            //   style={{
            //     backgroundImage: `url(${heroBackgroundImages[currentSlide]})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     filter: "brightness(0.3)",
            //     transition: "background-image 0.8s ease-in-out",
            //   }}
            // />

            <div
              key={index}
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: currentSlide === index ? 0.2 : 0,
                transition: "opacity 1.2s ease-in-out",
                filter: "brightness(0.3)",
              }}
            />
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="btn btn-link position-absolute start-0 top-50 translate-middle-y text-white opacity-75 hover-opacity-100"
          style={{ zIndex: 2, left: "20px" }}
          onClick={prevSlide}
        >
          <i className="fas fa-chevron-left fa-2x"></i>
        </button>
        <button
          className="btn btn-link position-absolute end-0 top-50 translate-middle-y text-white opacity-75 hover-opacity-100"
          style={{ zIndex: 2, right: "20px" }}
          onClick={nextSlide}
        >
          <i className="fas fa-chevron-right fa-2x"></i>
        </button>

        {/* Carousel Indicators */}
        <div
          className="position-absolute bottom-4 start-50 translate-middle-x d-flex gap-2"
          style={{ zIndex: 2 }}
        >
          {heroBackgroundImages.map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm p-0 rounded-circle ${
                currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
              }`}
              style={{ width: "12px", height: "12px" }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <div
          className="container-fluid position-relative py-5 px-3 px-md-4 px-lg-5"
          style={{ zIndex: 1 }}
        >
          <div className="row align-items-center justify-content-center py-5 g-4">
            <div className="col-12">
              <div className="row align-items-center g-5">
                <div className="col-lg-7 text-white mb-4 mb-lg-0">
                  <div className="mb-4">
                    <span className="badge bg-primary bg-opacity-20 text-white border border-primary border-opacity-25 px-3 py-2 rounded-pill fs-6 fw-normal">
                      Software Engineer
                    </span>
                  </div>
                  <h1
                    className="display-3 fw-bold mb-3"
                    style={{ lineHeight: "1.2" }}
                  >
                    Ezekiel <span className="text-primary">Wabwoba</span>
                  </h1>
                  <h2 className="h3 mb-4 text-light opacity-90 fw-light">
                    Building Digital Solutions That Make a Difference
                  </h2>
                  <p
                    className="fs-5 mb-4 opacity-80 fw-light"
                    style={{ maxWidth: "600px", lineHeight: "1.7" }}
                  >
                    Full-stack developer specializing in creating scalable web
                    applications, AI-powered solutions, and enterprise software.
                    Transforming complex problems into elegant, user-friendly
                    solutions.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <a
                      href="#projects"
                      className="btn btn-primary btn-lg px-4 py-3 rounded-1 fw-semibold d-flex align-items-center gap-2"
                    >
                      <i className="fas fa-eye"></i>
                      View My Work
                    </a>
                    <a
                      href="/contact"
                      className="btn btn-outline-light btn-lg px-4 py-3 rounded-1 fw-semibold d-flex align-items-center gap-2"
                    >
                      <i className="fas fa-paper-plane"></i>
                      Get In Touch
                    </a>
                  </div>
                </div>
                <div className="col-lg-5 text-center">
                  <div className="position-relative">
                    <div
                      className="rounded-3 mx-auto overflow-hidden shadow-lg"
                      style={{
                        width: "min(380px, 80vw)",
                        height: "min(380px, 80vw)",
                        border: "none",
                        position: "relative",
                      }}
                    >
                      <img
                        src={profilePicture}
                        alt="Ezekiel Wabwoba"
                        className="w-100 h-100"
                        style={{
                          width: "350px",
                          objectFit: "cover",
                          borderRadius: "50%",
                          height: "350px",
                          border: "5px solid white",
                          // border: "10px solid rgba(255, 251, 251, 0.1)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Intro Section */}
      <section className="py-5 w-100 bg-light">
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-8">
              <div className="pe-lg-4">
                <h2 className="display-5 fw-bold mb-4">
                  Crafting Digital Excellence
                </h2>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-primary bg-opacity-10 rounded-2 p-3">
                        <i className="fas fa-laptop-code text-primary fs-4"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Full-Stack Development</h6>
                        <small className="text-muted">
                          React, Node.js, Python
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-success bg-opacity-10 rounded-2 p-3">
                        <i className="fas fa-robot text-success fs-4"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">AI & ML Solutions</h6>
                        <small className="text-muted">
                          92% Accuracy Models
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  className="text-secondary fs-5 mb-4"
                  style={{ lineHeight: "1.8" }}
                >
                  With a strong foundation in computer science and hands-on
                  experience in modern technologies, I specialize in building
                  robust applications that solve real-world problems. Currently
                  advancing my expertise while pursuing a Bachelor's Degree in
                  Computer Science.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <a
                    href="https://github.com/zablonzekky"
                    className="btn btn-dark btn-lg px-4 rounded-1 d-flex align-items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ezekiel-wekesa-162578241/?lipi=urn%3Ali%3Apage%3Ad_flagship3_notifications%3BxFWtgE3rSr%2B5r8wv0zRwXw%3D%3D"
                    className="btn btn-primary btn-lg px-4 rounded-1 d-flex align-items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                    LinkedIn
                  </a>
                  <a
                    href="/contact"
                    className="btn btn-outline-dark btn-lg px-4 rounded-1 d-flex align-items-center gap-2"
                  >
                    <i className="fas fa-envelope"></i>
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white rounded-3 p-4 shadow-sm border">
                <h5 className="fw-bold mb-3">Core Technologies</h5>
                <div className="row g-3">
                  {[
                    "React",
                    "Node.js",
                    "Python",
                    "MongoDB",
                    "Angular",
                    "Django",
                  ].map((tech, index) => (
                    <div key={index} className="col-6">
                      <div className="d-flex align-items-center gap-2 p-2 rounded-2 hover-bg-light">
                        <div className="bg-primary bg-opacity-10 rounded-1 p-2">
                          <i className="fas fa-check text-primary fs-6"></i>
                        </div>
                        <span className="fw-medium">{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section */}
      <section className="py-5 bg-white w-100" id="projects">
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
            <p
              className="text-secondary fs-5 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              A showcase of my recent work demonstrating modern development
              practices, clean architecture, and user-centered design
              principles.
            </p>
          </div>

          <div className="row g-4 mb-5">
            {projectsData.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div
                  className="card h-100 border-0 shadow-sm overflow-hidden position-relative"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    borderRadius: "12px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.08)";
                  }}
                >
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "240px" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-dark bg-opacity-75 px-3 py-2 rounded-1">
                        {project.technologies[0]}
                      </span>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3 fs-5">
                      {project.title}
                    </h5>
                    <p
                      className="card-text text-secondary mb-4"
                      style={{ lineHeight: "1.6" }}
                    >
                      {project.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="badge rounded-1 px-3 py-2 bg-light text-dark border"
                          style={{
                            fontSize: "0.8rem",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark flex-fill rounded-1 d-flex align-items-center justify-content-center gap-2"
                      >
                        <i className="fab fa-github"></i>
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/projects"
              className="btn btn-outline-primary btn-lg px-5 py-3 rounded-1 fw-semibold d-inline-flex align-items-center gap-2"
            >
              <i className="fas fa-folder-open"></i>
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        className="py-5 w-100"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-5">
          <h2 className=" text-white text-center mb-5 fw-bold display-5">
            Expertise & Services
          </h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="text-center p-5 h-100 rounded-3 bg-dark bg-opacity-50 border border-light border-opacity-10 hover-lift">
                <div
                  className="rounded-3 mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                  }}
                >
                  <i className="fas fa-code text-white fs-3"></i>
                </div>
                <h5 className="text-white fw-bold mb-3">
                  Full-Stack Development
                </h5>
                <p
                  className="text-light opacity-80 mb-0"
                  style={{ lineHeight: "1.7" }}
                >
                  End-to-end web application development using modern frameworks
                  and architectures. Specialized in React, Vue, Node.js, and
                  cloud deployment.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="text-center p-5 h-100 rounded-3 bg-dark bg-opacity-50 border border-light border-opacity-10 hover-lift">
                <div
                  className="rounded-3 mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #10b981, #047857)",
                  }}
                >
                  <i className="fas fa-robot text-white fs-3"></i>
                </div>
                <h5 className=" text-white fw-bold mb-3">
                  AI & Machine Learning
                </h5>
                <p
                  className="text-light opacity-80 mb-0"
                  style={{ lineHeight: "1.7" }}
                >
                  Building intelligent systems with 92% accuracy in sentiment
                  analysis. Experience in NLP, predictive modeling, and
                  data-driven solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="text-center p-5 h-100 rounded-3 bg-dark bg-opacity-50 border border-light border-opacity-10 hover-lift">
                <div
                  className="rounded-3 mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                  }}
                >
                  <i className="fas fa-server text-white fs-3"></i>
                </div>
                <h5 className="text-white fw-bold mb-3">Cloud & DevOps</h5>
                <p
                  className="text-light opacity-80 mb-0"
                  style={{ lineHeight: "1.7" }}
                >
                  Scalable cloud infrastructure, CI/CD pipelines, and
                  containerized deployments. Ensuring high availability and
                  performance optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .hover-bg-light:hover {
          background-color: rgba(0, 0, 0, 0.02);
        }
        .hover-opacity-100:hover {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default Home;
