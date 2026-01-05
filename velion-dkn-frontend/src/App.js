import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; // Navbar imported to manage global user role state
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';

function App() {
    // State to track the current user role (Default is 'Consultant')
    const [userRole, setUserRole] = useState('Consultant');

    return (
        <Router>
            <div className="App">
                {/* Navbar receives role state to enable switching */}
                <Navbar userRole={userRole} setUserRole={setUserRole} />
                <Routes>
                    {/* Pass the role down to Dashboard to control UI elements */}
                    <Route path="/" element={<Dashboard userRole={userRole} />} />
                    <Route path="/upload" element={<Upload />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;