const { StatusCodes } = require('http-status-codes');
const AppError = require("../utils/error/app.error");
const User = require('../models/user.model');
const UserAuth = require('../utils/auth/user.auth');
class UserService {
    async signUp(data) {
        try {
            const newUser = new User(data);
            const savedUser = await newUser.save();
            return savedUser;
        } catch (error) {
            if (error.name === "MongoServerError" && error.code === 11000) {
                // Duplicate key error (E11000)
                const explanation = [];
                Object.keys(error.keyValue).forEach((key) => {
                    explanation.push(`${key} '${error.keyValue[key]}' already exists.`);
                });
                throw new AppError(explanation, StatusCodes.BAD_REQUEST);
            }
            throw new AppError("Cannot create a new User object", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async signIn(data) {
        try {
            const { email, password } = data;
            const user = await User.findOne({ email });
            if (!user) {
                throw new AppError('No user found for the given username', StatusCodes.NOT_FOUND);
            }
            const isMatch = await UserAuth.comparePassword(password, user.password);
            if (!isMatch) {
                throw new AppError('Invalid password', StatusCodes.UNAUTHORIZED);
            }
            const user_token = UserAuth.generateToken({ id: user._id, username: user.username }); 
            return user_token;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async getUserByUsername(username) {
        try {
            const user = await User.findOne({ username });
            if (!user) {
                throw new AppError('No user found for the given username', StatusCodes.NOT_FOUND);
            }
            return user;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError('Something went wrong', StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

}

module.exports = UserService;
