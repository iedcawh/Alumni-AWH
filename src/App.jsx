import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import GiveBack from './pages/GiveBack';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/giveback" element={<GiveBack />} />
        <Route path="/footer" element={<Footer />} /> {/* lowercase 'footer' */}
      </Routes>
    </Router>
  );
};

export default App;
