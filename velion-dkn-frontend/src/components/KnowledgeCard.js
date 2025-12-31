import React from 'react';
import api from '../api/axiosConfig';

const KnowledgeCard = ({ asset, onUpdate, userRole }) => { // <--- Receive userRole here
    
    // Logic to choose badge color based on status
    const getBadgeColor = (status) => {
        switch (status) {
            case 'Published': return 'success'; // Green
            case 'Pending': return 'warning';   // Yellow
            case 'Draft': return 'secondary';   // Grey
            default: return 'primary';
        }
    };

    // Fixes 'handleApprove is not defined' error
    const handleApprove = async () => {
        try {
            // Call the backend route
            await api.patch(`/assets/${asset.id}/approve`);
            // Tell the dashboard to refresh the data
            if (onUpdate) onUpdate();
        } catch (error) {
            alert("Failed to approve asset");
            console.error(error);
        }
    };

    return (
        <div className="col-12 col-md-6 mb-3">
            <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="card-title text-dark fw-bold mb-0">{asset.title}</h5>
                        <span className={`badge bg-${getBadgeColor(asset.status)} rounded-pill`}>
                            {asset.status}
                        </span>
                    </div>
                    
                    <p className="card-text text-muted small mb-2">
                        ID: {asset.id}
                    </p>
                    
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                        <span className="badge bg-light text-dark border">
                            {asset.category}
                        </span>
                        
                        {/* Logic: Show Button ONLY if Pending AND user is 'Knowledge Champion' */}
                        {asset.status === 'Pending' && userRole === 'Knowledge Champion' && (
                            <button 
                                className="btn btn-sm btn-outline-success fw-bold"
                                onClick={handleApprove}
                            >
                                ✓ Approve
                            </button>
                        )}

                        {/* Optional: Show message for Consultants */}
                        {asset.status === 'Pending' && userRole === 'Consultant' && (
                            <span className="text-muted small fst-italic">
                                Pending Review
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Fixes 'module has no exports' error
export default KnowledgeCard;