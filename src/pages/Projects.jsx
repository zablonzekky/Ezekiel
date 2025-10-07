import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      year: "2024",
      description: "A full-stack e-commerce solution built with PHP and vanilla JavaScript featuring user authentication, payments, and inventory management.",
      detailedDescription: "A performant e-commerce solution designed to manage users, payments, and inventory with a clean, secure backend and responsive frontend.",
      technologies: ["PHP", "Vanilla JS", "MySQL"],
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Order tracking and history",
        "Admin dashboard for inventory management"
      ],
      achievement: "Comprehensive Full-Stack E-commerce Solution",
      github: "https://github.com/zablonzekky/Ecommerce-website",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Task Management App",
      year: "2025",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      detailedDescription: "Built with React.js and FastAPI for real-time synchronization and productivity across teams.",
      technologies: ["React.js", "FastAPI", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Real-time collaboration",
        "Drag-and-drop task organization",
        "Project and team management",
        "Progress tracking and analytics",
        "Mobile-responsive design"
      ],
      achievement: "Real-Time Collaboration & Productivity Tool",
      github: "https://github.com/zablonzekky/task-management-app",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      year: "2024",
      description: "A real-time weather analytics dashboard with interactive charts and historical data visualization.",
      detailedDescription: "Provides rich weather insights, visualizations, and live updates from multiple APIs.",
      technologies: ["React", "JavaScript", "Weather API"],
      features: [
        "Real-time weather data",
        "Interactive charts",
        "Location-based forecasts",
        "Weather alerts"
      ],
      achievement: "Live Weather Insights & Visualization",
      github: "https://github.com/zablonzekky/Sentiment-analysis-software",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Restaurant Management System",
      year: "2024",
      description: "Complete restaurant management solution with booking, menu, order processing, and inventory tracking.",
      detailedDescription: "Streamlines operations from booking to kitchen management, including admin reporting tools.",
      technologies: ["PHP", "CodeIgniter", "MySQL"],
      features: [
        "Booking reservation system",
        "Digital menu management",
        "Order processing and tracking",
        "Inventory management",
        "Sales analytics"
      ],
      achievement: "End-to-End Restaurant Operations System",
      github: "https://github.com/zablonzekky/Fedoproject",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Sentiment Analysis System",
      year: "2025",
      description: "A backend-powered sentiment analysis platform for real-time social media data processing and reporting.",
      detailedDescription: "Processes and categorizes social media data into sentiments with Python and ML models.",
      technologies: ["Python", "Flask", "Machine Learning", "PostgreSQL"],
      features: [
        "Real-time data processing",
        "Social media API integration",
        "Analytics and reporting",
        "User authentication",
        "Sentiment categorization"
      ],
      achievement: "AI-Powered Real-Time Sentiment Categorization",
      github: "https://github.com/zablonzekky/Sentiment-analysis-web-app",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Learning Management System",
      year: "2025",
      description: "An educational platform supporting course management, progress tracking, and interactive learning modules.",
      detailedDescription: "Full-featured LMS supporting video lessons, quizzes, progress tracking, and collaboration.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      features: [
        "Course creation and management",
        "Student enrollment tracking",
        "Interactive quizzes",
        "Video streaming",
        "Discussion forums"
      ],
      achievement: "Comprehensive E-learning Platform",
      github: "https://github.com/zablonzekky/Elite-Writing",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="custom-modal-overlay" onClick={onClose}>
        <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
          <button className="btn-close position-absolute top-0 end-0 m-3" onClick={onClose}></button>
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid rounded mb-3 w-100"
            style={{ maxHeight: "280px", objectFit: "cover" }}
          />
          <h4 className="fw-bold text-primary mb-2">{project.title}</h4>
          <p className="text-muted">{project.detailedDescription}</p>
          <h6 className="fw-bold mt-3">Key Features:</h6>
          <ul>
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <h6 className="fw-bold mt-3">Technologies:</h6>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.technologies.map((t, i) => (
              <span key={i} className="badge bg-light text-dark border">{t}</span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-100"
          >
            <i className="fab fa-github me-2"></i> View on GitHub
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-page min-vh-100 bg-light" style={{ marginTop: "76px", padding: "2rem 0" }}>
      {/* Hero Section */}
      <div className="container-fluid px-0">
        <div className="bg-primary text-white py-5">
          <div className="container text-center">
            <h1 className="display-5 fw-bold mb-3">My Projects</h1>
            <p className="lead mb-0">Showcasing modern full-stack solutions and innovative applications</p>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="container mt-5">
        <div className="row g-4 justify-content-center">
          {projects.map((p) => (
            <div key={p.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-10">
              <div
                className="card border-0 shadow-sm h-100 hover-shadow"
                onClick={() => setSelectedProject(p)}
                style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body d-flex flex-column p-4">
                  <div className="text-muted small mb-2">{p.year}</div>
                  <h5 className="fw-bold mb-2">{p.title}</h5>
                  <p className="text-muted flex-grow-1">{p.description}</p>
                  <button className="btn btn-outline-primary mt-auto">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="row mt-5 mb-4">
          <div className="col-12">
            <div className="card border-0 bg-white shadow-sm">
              <div className="card-body py-4">
                <div className="row text-center">
                  <div className="col-md-3 mb-3 mb-md-0">
                    <div className="h3 fw-bold text-primary mb-1">{projects.length}+</div>
                    <div className="text-muted">Projects Completed</div>
                  </div>
                  <div className="col-md-3 mb-3 mb-md-0">
                    <div className="h3 fw-bold text-primary mb-1">10+</div>
                    <div className="text-muted">Technologies</div>
                  </div>
                  <div className="col-md-3 mb-3 mb-md-0">
                    <div className="h3 fw-bold text-primary mb-1">3+</div>
                    <div className="text-muted">Years Experience</div>
                  </div>
                  <div className="col-md-3">
                    <div className="h3 fw-bold text-primary mb-1">100%</div>
                    <div className="text-muted">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div className="card border-0 bg-primary text-white">
            <div className="card-body py-5">
              <h3 className="fw-bold mb-3">Ready to Build Something Amazing?</h3>
              <p className="mb-4 opacity-75">
                Let's work together to bring your ideas to life with cutting-edge technology
              </p>
              <a href="/contact" className="btn btn-light btn-lg px-5 fw-bold">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* ✅ Inline CSS for effects */}
      <style>
        {`
          .hover-shadow:hover {
            transform: translateY(-6px);
            box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
          }
          .custom-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1050;
          }
          .custom-modal {
            background: #fff;
            border-radius: 12px;
            padding: 2rem;
            max-width: 700px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
            position: relative;
          }
          .projects-page {
            width: 100%;
            overflow-x: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
