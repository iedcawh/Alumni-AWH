import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import GiveBack from './pages/GiveBack';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GiveBack" element={<GiveBack />} />
      </Routes>
    </Router>
  );
};

export default App;
