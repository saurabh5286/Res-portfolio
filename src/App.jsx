// filepath: c:\Users\Arun\Downloads\portfolio2\portfolio~\portfolio2\src\App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </Router>
  );
}

export default App;