// src/models/KnowledgeAsset.js

// Enums for Strict Typing (Ref: Coursework 1, Page 11)
const StatusType = {
    DRAFT: 'Draft',
    PENDING: 'Pending',
    PUBLISHED: 'Published'
};

const AssetType = {
    REPORT: 'Report',
    TEMPLATE: 'Template',
    FRAMEWORK: 'Framework',
    EXPERT_PROFILE: 'ExpertProfile'
};

// Class Definition
class KnowledgeAsset {
    constructor(id, title, status, category, authorId) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.category = category;
        this.authorId = authorId;
        this.createdAt = new Date();
    }

    // Business Rule: Validate Data integrity
    static validate(assetData) {
        if (!Object.values(StatusType).includes(assetData.status)) {
            throw new Error(`Invalid Status: ${assetData.status}`);
        }
        if (!Object.values(AssetType).includes(assetData.category)) {
            throw new Error(`Invalid Category: ${assetData.category}`);
        }
    }
}

module.exports = { KnowledgeAsset, StatusType, AssetType };