// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Import Bootstrap CSS and our custom App CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // This is our minimal custom CSS file

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100"> {/* Ensures footer sticks to bottom */}
        <Navbar />
        <main className="flex-grow-1"> {/* Allows main content to grow and push footer down */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;