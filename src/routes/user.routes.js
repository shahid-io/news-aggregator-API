const express = require('express');
const UserController = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup', UserController.signupUser);
router.post('/login', UserController.loginUser);
router.get('/:username', UserController.getUserByUsername);


module.exports = router;