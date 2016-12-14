var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {
		type: String
	},
	token: {
		type: String,
		required: true
	},
	questions: {
		type: Array,
		required: true
	}
})

var User = mongoose.model('User', userSchema);
module.exports = User;