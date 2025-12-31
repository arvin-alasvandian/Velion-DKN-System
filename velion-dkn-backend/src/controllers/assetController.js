const { KnowledgeAsset, StatusType, AssetType } = require('../models/KnowledgeAsset');

// MOCK DATABASE (In-Memory for this assignment)
let repository = [
    new KnowledgeAsset('A001', 'Project Axis Overview', StatusType.PUBLISHED, AssetType.REPORT, 'User1'),
    new KnowledgeAsset('A002', 'Logistics Framework 2024', StatusType.PUBLISHED, AssetType.FRAMEWORK, 'User2'),
    new KnowledgeAsset('A003', 'Client Onboarding Template', StatusType.PENDING, AssetType.TEMPLATE, 'User3'),
    new KnowledgeAsset('A004', 'Draft: AI Ethics Policy', StatusType.DRAFT, AssetType.REPORT, 'User1'),
];

// @desc    Search Assets
// @route   GET /api/assets
exports.searchAssets = (req, res) => {
    try {
        const { query } = req.query;
        // Show ALL items (Pending & Published) so you can see your uploads
        let results = repository;

        if (query) {
            results = results.filter(a => 
                a.title.toLowerCase().includes(query.toLowerCase())
            );
        }
        res.status(200).json({ success: true, count: results.length, data: results });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

// @desc    Get AI Recommendations
// @route   GET /api/recommendations
exports.getRecommendations = (req, res) => {
    const recommended = repository.filter(a => 
        a.category === AssetType.REPORT && a.status === StatusType.PUBLISHED
    );
    res.status(200).json({ success: true, data: recommended });
};

// @desc    Upload New Asset
// @route   POST /api/assets
exports.uploadAsset = (req, res) => {
    try {
        const { title, category, authorId } = req.body;
        
        const newAsset = new KnowledgeAsset(
            `A${Date.now()}`,
            title,
            StatusType.PENDING, // Default workflow state
            category,
            authorId
        );

        KnowledgeAsset.validate(newAsset);
        repository.push(newAsset);
        
        res.status(201).json({ success: true, data: newAsset });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// @desc    Approve an Asset (Change status to Published)
// @route   PATCH /api/assets/:id/approve
exports.approveAsset = (req, res) => {
    const { id } = req.params;
    const asset = repository.find(a => a.id === id);

    if (!asset) {
        return res.status(404).json({ success: false, error: 'Asset not found' });
    }

    // Logic: Change status to PUBLISHED
    asset.status = StatusType.PUBLISHED;
    
    res.status(200).json({ success: true, data: asset });
};