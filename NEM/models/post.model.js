const mongoose = require('mongoose');
const { Schema } = mongoose;


let postSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dislike'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]

}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema);