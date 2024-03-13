import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and routing components
import IntroductionPage from './components/IntroductionPage/IntroductionPage';
import Dashboard from './components/dashboard/Dashboard';
import MemoryPage from './components/MemoryPage';
// import PostForm from './components/Test';
import CreateTimeCapsuleForm from './components/dashboard/TimeCapsule/CreateTimeCapsuleForm';
import MemoryDetail from './components/MemoryDetail';
import MemoryEdit from './components/MemoryEdit';
import CapsuleDetail from './components/Capsule/CapsuleDetail';
import CapsuleEdit from './components/Capsule/CapsuleEdit';
import MemoryCreate from './components/Test';



function App() {
  
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/memorypage" element={<MemoryPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/createcapsule" element={<CreateTimeCapsuleForm />} />
        <Route path="/timecapsule/:capsuleId" element={<CapsuleDetail />} />
        <Route path="/capsule/edit/:capsuleId" element={<CapsuleEdit />} />

        <Route path="/createMemory" element={<MemoryCreate />} />
        <Route path="/memory/:memoryId" element={<MemoryDetail />} />
        <Route path="/memory/edit/:memoryId" element={<MemoryEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
