import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Headers from './Components/Header.jsx';
import ContactUs from './Components/ContactUs.jsx';
import LandingPage from './Components/LandingPage.jsx';

const App = () => {
  return (
    <Router>
      <Headers /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
