const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

// Auth Routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);

router
  .route("/")
  .get(authController.protect , userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(authController.protect ,userController.getUser)
  .patch(authController.protect ,userController.updateUser)
  .delete(authController.protect ,userController.deleteUser);

module.exports = router;
