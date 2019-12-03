const express = require("express")
const {
  getUsers,
  getUserById,
  newUsers,
  updateUser,
  deleteUser,
  authenticate,
  authenticateUser,
  signOut,
  allProducts,
  newProduct
} = require("./routes.js");

const {verifyToken} = require("../Auth/auth")

const router = new express.Router()

// router.use(verifyToken)

router.get("/signOut", signOut)

router.get("/checkToken", verifyToken, function(req, res){
  res.json({status: 200});
})

router.get("/users", getUsers);

router.get("/products", verifyToken, allProducts)

router.post("/newProduct", verifyToken, newProduct)

router.get("/users/userFilter/:id", getUserById);

router.post("/newUser", newUsers);

router.post("/authenticateUser", authenticateUser)

router.post("/authentication", authenticate)

router.put("/updateUser" , updateUser)

router.delete("/deleteUser/:user_id" , deleteUser)

module.exports = router