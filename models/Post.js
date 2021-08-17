const mongoose = require("mongoose")
const User = require('./User')

const CommentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        sparse: true,
        unique: false,
    },

    text: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        require: true,
    },

    likes: {
        type: Number,
        default: 0
    },

})

const StorySchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true,
      },

    userName: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true,
    },

    story: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    comments: {
        type: [CommentSchema],
        sparse: true,
        unique: false
    },

    commentsLength: {
        type: Number,
        default: 0,
    }

})

module.exports = mongoose.model('Post', StorySchema)



