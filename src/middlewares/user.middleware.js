const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/error/app.error');

async function validateUserRequest(req, res, next) {
    if (!req.body.email) {
        ErrorResponse.message = 'Email Required';
        ErrorResponse.error = new AppError(['Email not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if (req.body.username) {
        if (!req.body.username) {
            ErrorResponse.message = 'Username Required';
            ErrorResponse.error = new AppError(['Username not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
            return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
        }
    }
    if (!req.body.password) {
        ErrorResponse.message = 'Password Required';
        ErrorResponse.error = new AppError(['Password not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}



module.exports = { validateUserRequest }

