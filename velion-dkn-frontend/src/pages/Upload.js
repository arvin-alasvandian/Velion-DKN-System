import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';
// DELETE THIS LINE: import Navbar from '../components/Navbar'; 

const Upload = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: 'Report', 
        authorId: 'Current User'
    });
    const [status, setStatus] = useState({ loading: false, error: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: '' });

        try {
            await api.post('/assets', formData);
            navigate('/');
        } catch (err) {
            setStatus({ loading: false, error: 'Upload failed.' });
        }
    };

    return (
        <div className="bg-light min-vh-100">
            {/* DELETE THIS LINE: <Navbar /> */}
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="card shadow-sm border-0 mt-4">
                            <div className="card-body p-4">
                                <h4 className="card-title mb-4">📤 Upload Knowledge Asset</h4>
                                
                                {status.error && (
                                    <div className="alert alert-danger">{status.error}</div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Asset Title</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            required 
                                            value={formData.title}
                                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Category</label>
                                        <select 
                                            className="form-select"
                                            value={formData.category}
                                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        >
                                            <option value="Report">Report</option>
                                            <option value="Template">Template</option>
                                            <option value="Framework">Framework</option>
                                            <option value="ExpertProfile">Expert Profile</option>
                                        </select>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg" disabled={status.loading}>
                                            {status.loading ? 'Uploading...' : 'Submit Asset'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upload;