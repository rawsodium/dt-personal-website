import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, HashRouter}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Creations from './pages/creations';
//import Footer from './components/Footer';

function App() {
return (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/experience' element={<Experience/>} />
            <Route path='/creations' element={<Creations/>} />
        </Routes>
    </HashRouter>
    );
}
  
export default App;
