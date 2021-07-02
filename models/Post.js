const mongoose = require("mongoose")

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
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('Post', StorySchema)