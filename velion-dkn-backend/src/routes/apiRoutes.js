const express = require('express');
const router = express.Router();
const { 
    searchAssets, 
    uploadAsset, 
    getRecommendations, 
    approveAsset 
} = require('../controllers/assetController');

// Define Routes
router.get('/assets', searchAssets);
router.post('/assets', uploadAsset);
router.get('/recommendations', getRecommendations);
router.patch('/assets/:id/approve', approveAsset); // New Route

module.exports = router;