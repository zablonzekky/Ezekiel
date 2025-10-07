import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroBackgroundImages = [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9491?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4cd085?q=80&w=2070&auto=format&fit=crop',
  ];

  const profilePicture = '/src/assets/EZEKIEL WEKESA.jpeg';

  const projectsData = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/ewwabwoba/ecommerce-platform',
      live: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2940&auto=format&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Tailwind'],
      github: 'https://github.com/ewwabwoba/task-manager',
      live: '#'
    },
    {
      id: 3,
      title: 'Weather Analytics',
      description: 'Real-time weather analytics dashboard with interactive charts, location-based forecasts, and historical data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      technologies: ['Angular', 'D3.js', 'API'],
      github: 'https://github.com/ewwabwoba/weather-analytics',
      live: '#'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-100 bg-light" style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="position-relative overflow-hidden w-100" style={{ 
        background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5f8d 100%)',
        minHeight: '650px'
      }}>
        <div className="position-absolute top-0 start-0 w-100 h-100">
          {heroBackgroundImages.map((image, index) => (
            <div
              key={index}
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: currentSlide === index ? 0.15 : 0,
                transition: 'opacity 1s ease-in-out'
              }}
            />
          ))}
        </div>

        <div className="container-fluid position-relative py-5 px-3 px-md-4 px-lg-5" style={{ zIndex: 1 }}>
          <div className="row align-items-center justify-content-center py-5 g-4">
            <div className="col-12">
              <div className="row align-items-center g-4">
                <div className="col-lg-7 text-white mb-4 mb-lg-0">
                  <h1 className="display-2 fw-bold mb-3">Ezekiel Wabwoba</h1>
                  <h2 className="h2 mb-4">Software Engineer</h2>
                  <p className="h4 mb-4 opacity-75 fw-normal">Innovator & Problem Solver</p>
                  <p className="fs-5 mb-4 opacity-90" style={{ maxWidth: '650px' }}>
                    Dynamic and passionate Software Engineer with a strong passion for innovation and
                    transformative technology. Proficient in multiple programming languages with proven
                    ability to build products from concept to deployment.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <a href="#projects" className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
                      View My Work
                    </a>
                    <a href="/contact" className="btn btn-light btn-lg px-5 py-3 rounded-pill">
                      Hire Me
                    </a>
                  </div>
                </div>
                {/* <div className="col-lg-5 text-center">
                  <div 
                    className="rounded-circle mx-auto overflow-hidden bg-white p-2 shadow-lg"
                    style={{ 
                      width: 'min(400px, 85vw)', 
                      height: 'min(400px, 85vw)',
                      border: '6px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <img 
                      src={profilePicture} 
                      alt="Ezekiel Wabwoba" 
                      className="w-100 h-100 rounded-circle"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div> */
                <div className="col-lg-5 text-center">
  <div
    className="rounded-circle mx-auto overflow-hidden shadow-lg"
    style={{
      width: 'min(400px, 85vw)',
      height: 'min(400px, 85vw)',
      border: '6px solid #33b5e6', // Blue border only
    }}
  >
    <img
      src={profilePicture}
      alt="Ezekiel Wabwoba"
      className="w-100 h-100 rounded-circle"
      style={{ objectFit: 'cover' }}
    />
  </div>
</div>

                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-5 bg-white w-100">
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-4">
          <h2 className="text-center mb-5 fw-bold display-6">Quick Stats</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="text-center p-4 rounded-3 h-100 shadow-sm" style={{ 
                border: '2px solid #e3f2fd',
                background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
              }}>
                <h3 className="display-3 fw-bold mb-2" style={{ color: '#2196F3' }}>3+</h3>
                <p className="mb-0 text-secondary fw-medium fs-5">Years Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="text-center p-4 rounded-3 h-100 shadow-sm" style={{ 
                border: '2px solid #e3f2fd',
                background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
              }}>
                <h3 className="display-3 fw-bold mb-2" style={{ color: '#2196F3' }}>50+</h3>
                <p className="mb-0 text-secondary fw-medium fs-5">Projects Completed</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="text-center p-4 rounded-3 h-100 shadow-sm" style={{ 
                border: '2px solid #e3f2fd',
                background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
              }}>
                <h3 className="display-3 fw-bold mb-2" style={{ color: '#2196F3' }}>50+</h3>
                <p className="mb-0 text-secondary fw-medium fs-5">Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="text-center p-4 rounded-3 h-100 shadow-sm" style={{ 
                border: '2px solid #e3f2fd',
                background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)'
              }}>
                <h3 className="display-3 fw-bold mb-2" style={{ color: '#2196F3' }}>IT</h3>
                <p className="mb-0 text-secondary fw-medium fs-5">Professional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Intro Section */}
      <section className="py-5 w-100" style={{ background: 'linear-gradient(to bottom, #e3f2fd, #f5f5f5)' }}>
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-3 col-md-4 text-center mb-4 mb-lg-0">
              <div 
                className="rounded-circle mx-auto overflow-hidden bg-white shadow"
                style={{ width: '220px', height: '220px' }}
              >
                <img 
                  src={profilePicture} 
                  alt="Ezekiel Wabwoba" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="ps-lg-4">
                <p className="text-primary fw-semibold mb-2 fs-5">Hello, I'm</p>
                <h2 className="display-4 fw-bold mb-4">Ezekiel Wabwoba</h2>
                <p className="text-secondary mb-4 fs-5" style={{ lineHeight: '1.8' }}>
                  Passionate software engineer specializing in building innovative solutions
                  using modern technologies. Currently pursuing Bachelor's Degree in Computer Science
                  at Southeastern Kenya University with experience in full-stack development,
                  AI systems, and enterprise-level solutions.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <a href="https://github.com/zablonzekky" className="btn btn-primary btn-lg px-5 rounded-pill" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/ezekiel-wabwoba" className="btn btn-outline-primary btn-lg px-5 rounded-pill" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="/contact" className="btn btn-success btn-lg px-5 rounded-pill">
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-5 bg-white w-100" id="projects">
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
            <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: '700px' }}>
              Explore some of my recent work showcasing modern web development practices and innovative solutions.
            </p>
          </div>
          
          <div className="row g-4 mb-5">
            {projectsData.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden" style={{ transition: 'transform 0.3s' }} 
                     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div className="overflow-hidden" style={{ height: '220px' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 h-100" 
                      style={{ 
                        objectFit: 'cover',
                        transition: 'transform 0.3s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-3 fs-4">{project.title}</h5>
                    <p className="card-text text-secondary mb-4">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="badge rounded-pill px-3 py-2" style={{ 
                          background: 'linear-gradient(135deg, #2196F3, #1976D2)',
                          fontSize: '0.85rem'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary flex-fill rounded-pill"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="me-1">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        GitHub
                      </a>
                      {/* <a 
                        href={project.live} 
                        className="btn btn-primary flex-fill rounded-pill"
                      >
                        View Live
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a href="/projects" className="btn btn-primary btn-lg px-5 py-3 rounded-pill">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 w-100" style={{ background: 'linear-gradient(to bottom, #f5f5f5, #e3f2fd)' }}>
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-4">
          <h2 className="text-center mb-5 fw-bold display-6">What I Do</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="text-center p-5 h-100 rounded-3 bg-white shadow-sm">
                <div 
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '100px', 
                    height: '100px',
                    background: 'linear-gradient(135deg, #2196F3, #1976D2)'
                  }}
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-3 fs-4">Full-Stack Development</h5>
                <p className="text-secondary fs-6 mb-0">
                  Building responsive web applications using modern technologies like React,
                  Django, Python, JavaScript, and various databases. Experience in creating
                  scalable solutions from concept to deployment.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="text-center p-5 h-100 rounded-3 bg-white shadow-sm">
                <div 
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '100px', 
                    height: '100px',
                    background: 'linear-gradient(135deg, #2196F3, #1976D2)'
                  }}
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l4.2-4.2"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-3 fs-4">AI & Machine Learning</h5>
                <p className="text-secondary fs-6 mb-0">
                  Developing intelligent systems and sentiment analysis tools with
                  high accuracy rates. Built a sentiment analysis system achieving 92% accuracy
                  for data-driven decision making.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="text-center p-5 h-100 rounded-3 bg-white shadow-sm">
                <div 
                  className="rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center"
                  style={{ 
                    width: '100px', 
                    height: '100px',
                    background: 'linear-gradient(135deg, #2196F3, #1976D2)'
                  }}
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h5 className="fw-bold mb-3 fs-4">IT Solutions</h5>
                <p className="text-secondary fs-6 mb-0">
                  Providing comprehensive IT support, network configuration, and
                  system maintenance services. Experience in enterprise-level systems
                  management and technical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 w-100" style={{ 
        background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)'
      }}>
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-5">
          <div className="text-center text-white">
            <h2 className="display-4 fw-bold mb-4">Let's Work Together</h2>
            <p className="lead mb-5 opacity-90 mx-auto" style={{ maxWidth: '700px' }}>
              Ready to bring your ideas to life? I'm available for freelance projects,
              full-time opportunities, and collaborative ventures. Let's create something amazing together!
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="/contact" className="btn btn-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                Contact Me
              </a>
              <a href="/projects" className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;