const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post('/postdata/:userid',authController.postUserInfo);
router.get('/userdata/:id',authController.getUserInfo);
router.get('/userdata/savings/:id',authController.getUserSavings);
router.post('/userdata/update/:id',authController.updateUserInfo);
router.delete('/userdata/delete/:id',authController.deleteUserInfo);

module.exports = router;