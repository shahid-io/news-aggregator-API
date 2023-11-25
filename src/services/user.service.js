// Import necessary dependencies
const User = require('../models/user.model');

class UserService {
    async createUser(data) {
        try {
            const newUser = new User(data);
            const savedUser = await newUser.save();
            return savedUser;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    async getUserByUsername(data) {
        try {
            const user = await User.findOne({ data });
            return user;
        } catch (error) {
            console.error('Error getting user by username:', error);
            throw error;
        }
    }
}

module.exports = UserService;
