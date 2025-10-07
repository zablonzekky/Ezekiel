import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
      style={{ backgroundColor: '#0b5aa7' }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold text-white fs-4" to="/">
          Ezekiel Wabwoba
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link text-white fw-semibold px-3"
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
