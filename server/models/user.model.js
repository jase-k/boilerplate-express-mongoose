const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength: [6, "First name must be at least 6 characters long"],
	},
	age: Number
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;