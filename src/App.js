import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from '/dt-personal-website/pages/Projects';
import Experience from '/dt-personal-website/pages/Experience';
import Creations from '/dt-personal-website/pages/Creations';
import NotFound from '/dt-personal-website/pages/NotFound'
import Footer from '/dt-personal-website/pages/Footer';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div id="page-content">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/creations" element={<Creations />} />
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
