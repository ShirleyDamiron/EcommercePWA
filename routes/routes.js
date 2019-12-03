// const connection = require("./connection.js");
const {User, Product} = require("../Models/model.js");
const {signToken} = require("../Auth/auth")
require("dotenv").config();

// GET getting all users to show
exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
};

// GET user selected by specific ID
exports.getUserById = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    res.json(user);
  });
};

//  POST creating a new user
exports.newUsers = (req, res) => {
  const { email, password } = req.body;
  User.create({ email, password }, (err, user) => {
    if (err) return res.json({ success: false, code: err.code });
    const token = signToken(user)
    res.cookie("token", token, {httpOnly: true}).sendStatus(200);
  });
};

//s
exports.authenticateUser = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        error: "Internal error please try again"
      });
    }
    if (!user) {
      res.status(401).json({
        error: "User does not exist!"
      });
    } else {
      const isCorrectPassword = user.validPassword(password);
      if (!isCorrectPassword) {
        res.status(401).json({
          error: "Wrong Email or Password!"
        });
      } else {
        const token = signToken(user)
        res.cookie("token", token, {httpOnly: true}).sendStatus(200);
      }
    }
  });
};

// PUT updating a user by specific ID target
exports.updateUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    Object.assign(user, req.body);
    user.save((err, updatedUser) => {
      res.json({ success: true, message: "User updated.", user });
    });
  });
};

// DELETE will remove a user by the matching ID.

exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    res.json({ success: true, message: "User deleted.", user });
  });
};

// the login route
exports.authenticate = (req, res) => {
  // check if the user exists
  User.findOne({ email: req.body.email }, (err, user) => {
    // if there's no user or the password is invalid
    if (!user || !user.validPassword(req.body.password)) {
      // deny access
      return res.json({ success: false, message: "Invalid credentials." });
    }

    const token = signToken(user);
    res.json({ success: true, message: "Token attached.", token });
  });
};

exports.newProduct = (req, res) => {
  const {caption, price, filterType, src} = req.body
  Product.create({ caption, price, filterType, src}, (err, product) => {
    if (err) {
      return res.json({ success: false, code: err.code })
    };
    return res.json({ success: true, status: 200})
  });
}

exports.allProducts = (req, res) => {
  Product.find({}, (err, products) => {
    res.json(products);
  });
}

exports.signOut = (req, res) => {
  res.cookie("token", "", {expires: new Date(0), httpOnly:true}).sendStatus(200);
}
