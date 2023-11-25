const UserService = require('../services/user.service');

/** user service instance */
const userService = new UserService();

const createUser = async (req, res) => {
    try {
        const data = req.body;
        const user = await userService.createUser(data);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: error.message });
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userService.getUserByUsername(username);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error getting user by username:', error);
        res.status(500).json({ message: error.message });
    }
}


module.exports = { createUser, getUserByUsername }