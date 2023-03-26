import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import Navbar from './pages/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Creations from './pages/creations';
import NotFound from './pages/notFound'
import Footer from './pages/footer';

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
