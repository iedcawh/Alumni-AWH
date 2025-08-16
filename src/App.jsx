import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import GiveBack from './pages/GiveBack';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';
import MainLayout from './Layout/MainLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/giveback" element={<GiveBack />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<ComingSoon />} />
          <Route path="/news" element={<ComingSoon />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
