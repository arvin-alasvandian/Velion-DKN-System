import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
// Note: We removed Navbar import here because it is now in App.js
import KnowledgeCard from '../components/KnowledgeCard';
import RecommendationWidget from '../components/RecommendationWidget';

// Receive userRole from App.js
const Dashboard = ({ userRole }) => {
    const [assets, setAssets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch data from backend
    useEffect(() => {
        const fetchAssets = async () => {
            try {
                const response = await api.get('/assets');
                // Accessing data.data because our backend sends { success: true, data: [...] }
                setAssets(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Connection Error:", error);
                setLoading(false);
            }
        };
        fetchAssets();
    }, []);

    // Filter Logic (Fixes 'filteredAssets is not defined' error)
    const filteredAssets = assets.filter(asset => 
        asset.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-light min-vh-100">
            {/* Navbar is removed here because it's in App.js */}
            
            <div className="container py-4">
                <div className="row">
                    
                    {/* LEFT COLUMN: Main Content */}
                    <div className="col-12 col-lg-8">
                        {/* Search Bar */}
                        <div className="input-group input-group-lg shadow-sm mb-4">
                            <span className="input-group-text bg-white border-end-0">🔍</span>
                            <input 
                                type="text" 
                                className="form-control border-start-0" 
                                placeholder="Search repository..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <h4 className="text-secondary mb-3">Recent Knowledge</h4>
                        
                        <div className="row">
                            {loading ? (
                                <div className="text-center py-5">
                                    <div className="spinner-border text-primary" role="status"></div>
                                </div>
                            ) : (
                                <>
                                    {filteredAssets.length > 0 ? (
                                        filteredAssets.map(asset => (
                                            // Fixes 'KnowledgeCard is not defined' error
                                            <KnowledgeCard 
                                                key={asset.id} 
                                                asset={asset} 
                                                userRole={userRole} // Passes role for buttons
                                                onUpdate={() => window.location.reload()} 
                                            />
                                        ))
                                    ) : (
                                        <div className="col-12 text-center text-muted">
                                            <p>No assets found.</p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: AI Sidebar */}
                    <div className="col-12 col-lg-4">
                        <RecommendationWidget />
                        
                        <div className="card shadow-sm border-0 mt-3">
                            <div className="card-body">
                                <h6 className="fw-bold text-dark">🏆 Leaderboard</h6>
                                <p className="small text-muted">You are in the top 5% of contributors this week!</p>
                                <div className="progress" style={{height: '10px'}}>
                                    <div className="progress-bar bg-warning" style={{width: '75%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

// Fixes 'export default not found' error
export default Dashboard;