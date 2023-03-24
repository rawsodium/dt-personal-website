import React from 'react';
import '../styles/App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Projects from './Projects';
import Experience from './Experience';
import Creations from './Creations';
import NotFound from './NotFound'
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <div id="page-content">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
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
