import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ userRole, setUserRole }) => {
    return (
        <nav className="navbar navbar-dark bg-primary mb-4 shadow-sm">
            <div className="container">
                {/* Brand Logo */}
                <Link to="/" className="navbar-brand mb-0 h1 fw-bold text-decoration-none">
                    <i className="bi bi-layers-half me-2"></i>
                    Velion DKN
                </Link>
                
                <div className="d-flex align-items-center gap-3">
                    {/* ROLE SWITCHER (The new feature) */}
                    <div className="input-group input-group-sm">
                        <span className="input-group-text bg-white text-primary border-0 fw-bold">
                            <i className="bi bi-person-badge me-1"></i> Role:
                        </span>
                        <select 
                            className="form-select form-select-sm border-0"
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value)}
                            style={{ cursor: 'pointer', fontWeight: '500' }}
                        >
                            <option value="Consultant">Consultant</option>
                            <option value="Knowledge Champion">Knowledge Champion</option>
                        </select>
                    </div>

                    {/* Upload Button */}
                    <Link to="/upload" className="btn btn-light btn-sm text-primary fw-bold">
                        + Upload
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;