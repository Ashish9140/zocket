const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campaignsSchema = new Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    startdate: { type: String, required: true },
    enddate: { type: String, required: true },
    createddate: { type: String, required: true },
    budget: { type: Number, required: true },
    location: { type: String, required: true },
    clicks: { type: Number, required: true },
    platform: { type: String, required: true },
    status: { type: String, required: true },
    avatar: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Compaign', campaignsSchema, 'compaigns'); 