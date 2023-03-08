import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Experience from './pages/experience';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/experience' element={<Experience/>} />
    </Routes>
    </Router>
);
}
  
export default App;
