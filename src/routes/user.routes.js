const express = require('express');
const UserController = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup', UserController.createUser);
router.get('/:username', UserController.getUserByUsername);


module.exports = router;