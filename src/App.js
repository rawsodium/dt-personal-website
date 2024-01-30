import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Creations from './pages/creations';
import NotFound from './pages/NotFound'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;
