import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Services from './pages/services';
import About from './pages/about';
import Skills from './pages/skill';
import StarsBackground from './components/starsBackground'

function App() {
  return (
    <BrowserRouter>
      {/* Stars background covering the entire screen */}
      <StarsBackground />

      {/* Your main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;