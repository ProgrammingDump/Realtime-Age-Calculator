import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import AgeSubmission from './components/AgeSubmission'
import AgeCounter from './components/AgeCounter'
import { useState } from 'react';
import { Routes , Route , Link , BrowserRouter } from 'react-router-dom'
  
  function App() {
    
    const [isDarkMode, setDarkMode] = useState(false);
    
    const darkModeClass = isDarkMode ? 'dark-mode' : '';
    
  const toggleDarkMode = () => {
    setDarkMode( state => !state );
    console.log("sherdil");
  };

  return (
    <div className={`App ${darkModeClass} `}>
      <button className="dark-mode-button" onClick={toggleDarkMode}>
        Toggle Mode ☀️
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AgeSubmission />} />
          <Route path="/output" element={<AgeCounter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App