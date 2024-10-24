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
import Rmc from './pages/rmc';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Rmc" element={<Rmc />} />
        <Route path="/Quality" element={<Quality />} />
        <Route path="/Contactus" element={<Contactus />} />

      </Routes>
    </Router>
  );
}

export default App;
