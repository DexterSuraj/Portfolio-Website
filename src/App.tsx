import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ProjectDetails from "./components/ProjectDetails";
import BookingSection from "./components/BookingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollingSphere from "./components/ScrollingSphere";

export default function App() {
  useEffect(() => {
    // Dynamically load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0B0B0B] overflow-x-hidden relative">
      {/* Global CSS overrides */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          ::-webkit-scrollbar {
            width: 6px;
          }

          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
            border-radius: 3px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #0891b2, #7c3aed);
          }

          ::selection {
            background: rgba(6, 182, 212, 0.3);
            color: white;
          }

          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      </style>

      {/* Animated background */}
      <ScrollingSphere />

      {/* Main content */}
      <Routes>
        <Route path="/" element={
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BookingSection />
            <ContactSection />
            <Footer className="relative z-10" />
          </main>
        } />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </div>
    </Router>
  );
}
