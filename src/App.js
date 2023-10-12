import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import AgeSubmission from './components/AgeSubmission'
import AgeCounter from './components/AgeCounter'
import { Routes , Route , Link , BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
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