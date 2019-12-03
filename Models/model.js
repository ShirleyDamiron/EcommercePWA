const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const products = new mongoose.Schema({
	caption:    { type: String, required: true},
	price:      { type: Number, required: true},
	filterType: { type: String, required: true},
	src:        {type: String, required: true}
})

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

// adds a method to a user document object to check if provided password is correct
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

// middleware: before saving, check if password was changed,
// and if so, encrypt new password before saving:
userSchema.pre('save', function(next) {
	if(this.isModified('password')) {
		this.password = this.generateHash(this.password)
 		next()
	} else {
	next()
	}
})

const Product = mongoose.model('Product', products)
const User = mongoose.model('User', userSchema)

module.exports = {
	User,
	Product
}