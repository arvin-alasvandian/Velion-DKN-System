import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; // We import Navbar here now to pass props
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';

function App() {
  // 1. State to track the current user role (Default is 'Consultant')
  const [userRole, setUserRole] = useState('Consultant');

  return (
    <Router>
      <div className="App">
        {/* 2. Pass the role and the setter to the Navbar */}
        <Navbar userRole={userRole} setUserRole={setUserRole} />
        
        <Routes>
          {/* 3. Pass the role down to Dashboard so it knows if it can show buttons */}
          <Route path="/" element={<Dashboard userRole={userRole} />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;