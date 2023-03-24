import React from 'react';
import '../styles/App.css';
import Home from './home';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './projects';
import Experience from './experience';
import Creations from './creations';
import NotFound from './notFound'
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Router>
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
