import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/home/Home';
import Navbar from './components/navbar/navbar';
import HeroSection from './components/hero/hero';
import FeaturesSection from './components/features/features';
import Feedback from './components/Feedback/feedback';
import Footer from './components/footer/footer';
import Content from './components/contents/content';
import Gallery from './components/gallery/gallery';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* If you want to show the hero and other sections on Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturesSection />
              <Gallery />
              <Feedback />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
