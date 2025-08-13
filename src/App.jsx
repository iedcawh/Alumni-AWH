import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SuccessStories from './components/SuccessStories';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abc" element={<SuccessStories />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
