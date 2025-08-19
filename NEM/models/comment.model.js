const mongoose = require('mongoose');
const { Schema } = mongoose;


let commentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    text: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema);