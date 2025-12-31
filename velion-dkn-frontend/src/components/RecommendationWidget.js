import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';

const RecommendationWidget = () => {
    const [recs, setRecs] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                // Calls the AI Service endpoint we created in the backend
                const response = await api.get('/recommendations');
                setRecs(response.data.data);
            } catch (error) {
                console.error("AI Service Error:", error);
            }
        };
        fetchRecommendations();
    }, []);

    return (
        <div className="card shadow-sm border-0 mb-4 bg-light">
            <div className="card-body">
                <h5 className="card-title text-primary mb-3">
                    <i className="bi bi-robot me-2"></i>
                    AI Recommended
                </h5>
                <p className="small text-muted mb-3">
                    Based on your expertise in <strong>Logistics</strong>
                </p>

                {recs.length > 0 ? (
                    <ul className="list-group list-group-flush bg-transparent">
                        {recs.map(item => (
                            <li key={item.id} className="list-group-item bg-transparent px-0 py-2">
                                <button 
    className="btn btn-link text-decoration-none text-dark fw-bold p-0 text-start"
    onClick={(e) => e.preventDefault()} // Prevents page jump
    style={{  textDecoration: 'none' }}
>
    {item.title}
</button>
                                <div className="small text-muted">{item.category}</div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="spinner-border spinner-border-sm text-primary" role="status"></div>
                )}
            </div>
        </div>
    );
};

export default RecommendationWidget;