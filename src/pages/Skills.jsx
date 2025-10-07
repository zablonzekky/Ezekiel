import React from 'react';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 }
    ],
    backend: [
      { name: 'Python (Django, Flask)', level: 87 },
      { name: 'PHP (Laravel)', level: 80 },
      { name: 'Java', level: 75 }
    ],
    databases: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'SQLite', level: 88 }
    ],
    devops: [
      { name: 'Docker', level: 78 },
      { name: 'Jenkins', level: 72 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'CI/CD', level: 75 }
    ],
    tools: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe Photoshop', level: 80 },
      { name: 'Adobe Illustrator', level: 75 },
      { name: 'Canva', level: 90 }
    ],
    other: [
      'Machine Learning',
      'REST API Development',
      'Software Development Principles',
      'Version Control',
      'Testing & Debugging',
      'Problem Solving',
      'Agile Methodologies'
    ]
  };

  const SkillBar = ({ name, level }) => (
    <div className="mb-3">
      <div className="d-flex justify-content-between mb-1">
        <span className="fw-semibold">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="progress" style={{ height: '8px' }}>
        <div 
          className="progress-bar bg-primary" 
          role="progressbar" 
          style={{ width: `${level}%` }}
          aria-valuenow={level} 
          aria-valuemin="0" 
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );

  return (
    <div className="skills-page min-vh-100" style={{ marginTop: '76px', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">Skills & Technologies</h1>
          <p className="lead fs-4">Comprehensive expertise across modern development stack</p>
        </div>

        <div className="row g-4">
          {/* Frontend Skills */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4 text-primary">
                  <i className="fas fa-palette me-2"></i>Frontend Development
                </h3>
                {skills.frontend.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4 text-primary">
                  <i className="fas fa-server me-2"></i>Backend Development
                </h3>
                {skills.backend.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          {/* Database Skills */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4 text-primary">
                  <i className="fas fa-database me-2"></i>Database Management
                </h3>
                {skills.databases.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          {/* DevOps Skills */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4 text-primary">
                  <i className="fas fa-cloud me-2"></i>DevOps & Tools
                </h3>
                {skills.devops.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          {/* Design Tools */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4 text-primary">
                  <i className="fas fa-desktop me-2"></i>Design Tools
                </h3>
                {skills.tools.map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title fw-bold mb-4 text-primary">
                  <i className="fas fa-cogs me-2"></i>Other Skills
                </h3>
                <div className="row g-2">
                  {skills.other.map((skill, index) => (
                    <div key={index} className="col-md-6">
                      <div className="d-flex align-items-center mb-2">
                        <i className="fas fa-check text-success me-2 small"></i>
                        <span className="fw-semibold">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;