import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AgeSubmission from "./components/AgeSubmission";
import AgeCounter from "./components/AgeCounter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeClass = darkMode ? "dark-mode" : "";


  useEffect(() => {
    const darkModeState = window.localStorage.getItem('Dark Mode');
    setDarkMode(JSON.parse(darkModeState));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((state) => !state);
  };

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={` App ${darkModeClass} `}>
      <button
        className="dark-mode-button"
        onClick={toggleDarkMode}
        checked={darkMode ? "true" : ""}>
        Toggle ☀️
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AgeSubmission />} />
          <Route path="/output" element={<AgeCounter />} />
        </Routes>
        <Link to="/output" state={{darkMode: darkMode}} className="Link" />
      </BrowserRouter>
      <div className="social-icons">
        <a href="https://www.facebook.com/sherdil.khanzada.3/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/sherdilxd" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/sherdil-khanzada/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
}
export default App;