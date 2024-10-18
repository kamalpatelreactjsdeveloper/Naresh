import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './tailwind.css';
import Home from './pages/home';
import About from './pages/about';
import Quality from './pages/quality';
import Contactus from './pages/contactus';
import Products from './pages/products';
import Header from './componants/Header';
function App() {
  return (
    <Router>
      <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Quality" element={<Quality />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
    </Router>
  );
}

export default App;
