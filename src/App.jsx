import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and routing components
import IntroductionPage from './components/IntroductionPage/IntroductionPage';
import Footer from './components/Footer/Footer';
import Dashboard from './components/dashboard/Dashboard';
import MemoryPage from './components/MemoryPage';


function App() {
  
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/memorypage" element={<MemoryPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
