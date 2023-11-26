const express = require('express');
const UserController = require('../controllers/user.controller');
const { AuthReqMiddleware, ValidateUserReqMiddleware } = require('../middlewares');
const router = express.Router();

router.post('/signup', ValidateUserReqMiddleware.validateUserRequest, UserController.signupUser);
router.post('/login', ValidateUserReqMiddleware.validateUserRequest, UserController.loginUser);
router.get('/:username', AuthReqMiddleware.checkAuth, UserController.getUserByUsername);

module.exports = router;