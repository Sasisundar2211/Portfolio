import React, { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "./ThemeContext.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const Header = React.lazy(() => import("./components/Header"));
const Greeting = React.lazy(() => import("./components/Greeting.jsx"));
const Skills = React.lazy(() => import("./components/Skills"));
const Proficiency = React.lazy(() => import("./components/Proficiency"));
const Education = React.lazy(() => import("./components/Education"));
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));
const Achievements = React.lazy(() => import("./components/Achievements"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));
const LandingPage = React.lazy(() => import("./components/LandingPage"));
const BackToTopButton = React.lazy(() => import("./components/BackToTopButton.js"));
const AnimatedSection = React.lazy(() => import("./components/AnimatedSection.jsx"));
import { Toaster } from "./components/ui/toaster.jsx";
import Loader from "./Loader.js";

// Backend API URL from environment variables.
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;



// The main portfolio page component, which aggregates all other sections.
const Portfolio = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  // A simple API call to check backend connectivity on component mount.
  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className="min-h-screen">
        <main className="flex flex-col gap-y-24">
          <a href="#greeting" className="skip-link">Skip to main content</a>
          <Header />
          <AnimatedSection>
            <Greeting />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <Proficiency />
          </AnimatedSection>
          <AnimatedSection>
            <Education />
          </AnimatedSection>
          <AnimatedSection>
            <Experience />
          </AnimatedSection>
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Achievements />
          </AnimatedSection>
          <Contact /> {/* Contact is often left without animation as it's at the end */}
          <Footer />
          <BackToTopButton />
          <Toaster />
        </main>
      </div>
    </Suspense>
  );
};

// The root component of the application.
function App() {
  const [loading, setLoading] = useState(true); // Is the loader visible?
  const [hidingLoader, setHidingLoader] = useState(false); // Is the loader fading out?

  // Simulates a loading screen for a better initial user experience.
  useEffect(() => {
    const timer = setTimeout(() => {
      setHidingLoader(true); // 1. Start the fade-out animation

      // 2. Set loading to false after the animation duration
      const removeLoaderTimer = setTimeout(() => setLoading(false), 750); // Matches fade-out duration
      return () => clearTimeout(removeLoaderTimer);
    }, 2000); // Total time the loader is visible
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {/* Manages the light/dark theme across the application. */}
      <div className="App">
        {loading ? <Loader className={hidingLoader ? "fade-out" : ""} /> : (
          <Suspense fallback={<Loader />}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;