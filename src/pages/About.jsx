import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const profilePicture = '/src/assets/EZEKIEL WEKESA.jpeg';

  const experienceData = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Emobili Technology Institute",
      period: "2023 - 2024",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      description: "Led development of enterprise-scale applications using React, Node.js, and AWS.",
      achievements: [
        "Managed team of 5 developers for a customer platform serving 10,000+ users",
        "Built CI/CD pipelines reducing deployment time by 60%",
        "Architected microservices improving scalability by 300%",
        "Established coding standards and best practices across the organization",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      id: 2,
      title: "Service Desk Engineer",
      company: "Safaricom Plc Kenya",
      period: "2024",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg",
      description: "Maintained and optimized web applications for fintech solutions.",
      achievements: [
        "Built payment system processing $2M+ monthly transactions",
        "Developed responsive applications using Vue.js & Express.js",
        "Collaborated with design team for pixel-perfect UI implementation",
        "Improved application load times by 40%",
      ],
      technologies: ["React.js", "Express.js", "MongoDB", "Django"],
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "SANET Computing",
      period: "2020 - 2021",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      description: "Built websites and learned modern development workflows.",
      achievements: [
        "Delivered 15+ client websites using HTML, CSS, and JavaScript",
        "Learned React and Angular frameworks",
        "Collaborated with senior developers on large-scale projects",
        "Gained proficiency in Git and agile methodologies",
      ],
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "Git"],
    },
  ];



  const interestsData = [
    { title: "Innovation & Research", description: "Passionate about AI, blockchain, and IoT technologies.", icon: "🚀" },
    { title: "Open Source", description: "Active contributor to open source projects and community.", icon: "💻" },
    { title: "Photography", description: "Love capturing moments creatively through the lens.", icon: "📷" },
    { title: "Mentoring", description: "Guide and mentor aspiring developers in their journey.", icon: "👨‍🏫" },
    { title: "Gaming", description: "Enjoy strategic games and solving complex puzzles.", icon: "🎮" },
    { title: "Travel", description: "Exploring different cultures sparks creativity.", icon: "✈️" },
  ];

  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Southeastern Kenya University",
      period: "2020 - Present",
      description: "Focusing on software engineering, AI systems, and enterprise solutions."
    }
  ];

  const toggleExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <div className="w-100 bg-light" style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section 
        className="position-relative overflow-hidden w-100"
        style={{ 
          background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5f8d 100%)',
          minHeight: '600px'
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        
        <div className="container-fluid position-relative px-3 px-md-4 px-lg-5 py-5" style={{ zIndex: 1 }}>
          <div className="row align-items-center justify-content-center py-5 g-5">
            <div className="col-lg-6 text-white">
              <h1 className="display-3 fw-bold mb-4">
                About <span style={{ color: '#64B5F6' }}>Ezekiel Wekesa Wabwoba</span>
              </h1>
              <p className="fs-4 mb-4 opacity-90">
                Passionate Full Stack Developer with 3+ years of experience crafting scalable digital solutions.
              </p>
              <div className="d-flex flex-column gap-3 fs-5">
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-4">📍</span>
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-4">📧</span>
                  <span>ewwabwoba@gmail.com</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="fs-4">🎓</span>
                  <span>Southeastern Kenya University</span>
                </div>
              </div>
            </div>
            
            {/* <div className="col-lg-6 text-center">
              <div 
                className="mx-auto overflow-hidden bg-white p-2 shadow-lg"
                style={{ 
                  width: 'min(400px, 85vw)', 
                  height: 'min(400px, 85vw)',
                  borderRadius: '20px',
                  border: '8px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <img 
                  src={profilePicture} 
                  alt="Ezekiel Wabwoba" 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            </div> */
            <div className="col-lg-6 text-center">
  <div 
    className="mx-auto shadow-lg"
    style={{ 
      width: 'min(400px, 85vw)', 
      height: 'min(400px, 85vw)',
      overflow: 'hidden'
    }}
  >
    <img 
      src={profilePicture} 
      alt="Ezekiel Wabwoba" 
      className="w-100 h-100"
      style={{ objectFit: 'cover' }}
    />
  </div>
</div>

            }
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-5 bg-white w-100">
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-4">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e3a5f' }}>Professional Summary</h2>
                <div className="mx-auto" style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #2196F3, #1976D2)', borderRadius: '2px' }}></div>
              </div>
              <p className="text-secondary fs-5 text-center mx-auto" style={{ maxWidth: '900px', lineHeight: '1.8' }}>
                Dynamic and passionate Software Engineer with a strong passion for innovation and transformative technology. 
                With over 3 years of experience in full-stack development, I specialize in building scalable web applications 
                that deliver exceptional user experiences. Proficient in multiple programming languages and modern frameworks, 
                with proven ability to build products from concept to deployment. Currently pursuing Bachelor's Degree in 
                Computer Science at Southeastern Kenya University with expertise in AI systems and enterprise-level solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-5 w-100" style={{ background: 'linear-gradient(to bottom, #f5f5f5, #e3f2fd)' }}>
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e3a5f' }}>Career Journey</h2>
            <div className="mx-auto" style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #2196F3, #1976D2)', borderRadius: '2px' }}></div>
          </div>
          
          <div className="row g-4">
            {experienceData.map((exp) => (
              <div key={exp.id} className="col-lg-4 col-md-6">
                <div 
                  className="card h-100 border-0 shadow-sm"
                  style={{ 
                    cursor: 'pointer',
                    transition: 'transform 0.3s, box-shadow 0.3s'
                  }}
                  onClick={() => toggleExperience(exp.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center gap-3 mb-4">
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="rounded"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-1" style={{ color: '#1e3a5f' }}>{exp.title}</h5>
                        <p className="mb-1 text-primary fw-semibold">{exp.company}</p>
                        <p className="small text-secondary mb-0">{exp.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-secondary mb-3">{exp.description}</p>
                    
                    {expandedExperience === exp.id && (
                      <div className="mt-3">
                        <h6 className="fw-bold mb-2" style={{ color: '#1e3a5f' }}>Key Achievements:</h6>
                        <ul className="list-unstyled">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="mb-2 text-secondary small">
                              <span className="text-primary me-2">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-3">
                          <h6 className="fw-bold mb-2" style={{ color: '#1e3a5f' }}>Technologies:</h6>
                          <div className="d-flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="badge rounded-pill px-3 py-2"
                                style={{ 
                                  background: 'linear-gradient(135deg, #2196F3, #1976D2)',
                                  fontSize: '0.85rem'
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mt-3">
                      <small className="text-primary">
                        {expandedExperience === exp.id ? '↑ Click to collapse' : '↓ Click to expand'}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-5 bg-white w-100">
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e3a5f' }}>Education</h2>
            <div className="mx-auto" style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #2196F3, #1976D2)', borderRadius: '2px' }}></div>
          </div>
          
          <div className="row justify-content-center">
            {educationData.map((edu, idx) => (
              <div key={idx} className="col-lg-8">
                <div className="card border-0 shadow-sm p-4">
                  <div className="d-flex align-items-start gap-4">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ 
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #2196F3, #1976D2)'
                      }}
                    >
                      <span className="fs-2">🎓</span>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="fw-bold mb-2" style={{ color: '#1e3a5f' }}>{edu.degree}</h4>
                      <p className="text-primary fw-semibold mb-1">{edu.institution}</p>
                      <p className="text-secondary small mb-2">{edu.period}</p>
                      <p className="text-secondary mb-0">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      {/* Interests */}
      <section className="py-5 bg-white w-100">
        <div className="container-fluid px-3 px-md-4 px-lg-5 py-4">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#1e3a5f' }}>Beyond the Code</h2>
            <div className="mx-auto" style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, #2196F3, #1976D2)', borderRadius: '2px' }}></div>
          </div>
          
          <div className="row g-4">
            {interestsData.map((interest, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div 
                  className="card h-100 border-0 shadow-sm text-center"
                  style={{ transition: 'transform 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="card-body p-4">
                    <div 
                      className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #2196F3, #1976D2)',
                        fontSize: '2rem'
                      }}
                    >
                      {interest.icon}
                    </div>
                    <h5 className="fw-bold mb-2" style={{ color: '#1e3a5f' }}>{interest.title}</h5>
                    <p className="text-secondary mb-0">{interest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default AboutPage;