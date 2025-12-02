import React from 'react';
    import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

    // Import your page components
    import Home from './Home.js';
    import About from './About.js';
    import Contact from './Contact';
    import Gallery from './Gallary.js'; 
    import Page from './Page.js';
    import "./Route.css";

    function App() {
      return (
        <Router>
          <div>
          <ul class="navigation">
            <div>
              <h2>React Developer</h2>
            </div>
            <div class="option">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/page">Page</Link></li>
            <li><button>Join Class</button></li>
          </div>
          </ul>

         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/page" element={<Page />} />
          </Routes>
          </div>
        </Router>
      );
    }

    export default App;