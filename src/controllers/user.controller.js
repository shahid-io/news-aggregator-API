const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/user.service');
const { ErrorResponse, SuccessResponse } = require("../utils/common");

/** user service instance */
const userService = new UserService();

const registerUser = async (req, res) => {
    try {
        const data = req.body;
        const user = await userService.createUser(data);
        SuccessResponse.data = user;
        SuccessResponse.message = "User created successfully";
        console.log('status', StatusCodes.CREATED)
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        console.log('error', error)
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        console.log('error.statusCode', error.statusCode);
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userService.getUserByUsername(username);
        SuccessResponse.data = user;
        SuccessResponse.message = "User fetched successfully";
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        ErrorResponse.message = error.message;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


module.exports = { registerUser, getUserByUsername }