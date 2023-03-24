import React from 'react';
import '../styles/App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Experience from './Experience';
import Creations from './Creations';
import NotFound from './NotFound'
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
