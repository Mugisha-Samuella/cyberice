const mongoose = require('mongoose');

const SecurityThreatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true
    },
    dateReported: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true });

const SecurityThreatModel = mongoose.model('SecurityThreat', SecurityThreatSchema);

module.exports = SecurityThreatModel;
