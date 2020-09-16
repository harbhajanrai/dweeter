const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
	user: {
		type: Schema.Types.Object,
		required: true
	},
	text: {
		type: String,
		required: true
	},
	likes: { 
		type: Number,
		default: 0
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})


module.exports = mongoose.model('Post', postSchema)

