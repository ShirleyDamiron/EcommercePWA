const jwt = require('jsonwebtoken')
const {User} = require('../Models/model.js')
require("dotenv").config();

// function for verifying tokens
const {JWT_SECRET} = process.env

const signToken = (user) => {
	const userData = user.toObject()	
	delete userData.password
	return jwt.sign(userData, JWT_SECRET)
}

function verifyToken(req, res, next) {
	const token = req.get('token') || req.body.token || req.query.token || req.cookies.token
	if(!token) return res.json({success: false, message: "No token provided", status: 401})
	jwt.verify(token, JWT_SECRET, (err, decodedData) => {
		if(err) return res.json({success: false, message: "Invalid token.", status: 401})
		User.findById(decodedData._id, (err, user) => {
			if(!user) return res.json({success: false, message: "Invalid token.", status: 401})
			req.user = user
			next()
		})
	})
}

module.exports = {
	verifyToken,
	signToken
}