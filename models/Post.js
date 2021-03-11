const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
        max: 255,
    },

    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);