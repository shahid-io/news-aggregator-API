const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const { describe, it, beforeEach, afterEach } = require("mocha");

const { StatusCodes } = require('http-status-codes');
const app = require('../../../src/index');
const UserService = require('../../../src/services/user.service');
const { UserAuth } = require('../../../src/utils/auth');
const { SuccessResponse, ErrorResponse } = require('../../../src/utils/common');

chai.use(chaiHttp);
const { expect } = chai;

describe('signupUser', () => {
    let userService;
    beforeEach(() => {
        userService = new UserService();
        sinon.stub(userService, 'signUp').resolves({ username: 'test', email: 'test@gmail.com', password: 'test' });
        // const stubbedHashPassword = sinon.stub(UserAuth, 'hashPassword').resolves('test');
        // sinon.stub(UserAuth, 'comparePassword').resolves(true); // Adjust as needed
        // sinon.stub(UserAuth, 'generateToken').returns('fakeToken'); // Adjust as needed
    }
    );
    afterEach(() => {
        sinon.restore();
    });
    // it('should return 201 status code', async () => {
    //     const res = await chai.request(app).post('/api/users/signup').send({
    //         username: 'test',
    //         email: 'test@gmail.com',
    //         password: 'test'
    //     });

    //     expect(res.status).to.equal(StatusCodes.CREATED);
    //     expect(res.body).to.be.an('object');
    //     expect(res.body).to.have.property('data');
    //     expect(res.body).to.have.property('message');
    //     expect(res.body).to.have.property('success');
    //     expect(res.body.success).to.equal(true);
    //     expect(res.body.data).to.be.an('object');
    //     expect(res.body.data).to.have.property('username');
    //     expect(res.body.data).to.have.property('email');
    //     expect(res.body.data.username).to.equal('test');
    //     expect(res.body.data.email).to.equal('test@gmail.com');
    // }
    // );
    it('should return 400 status code', async () => {
        const res = await chai.request(app).post('/api/users/signup').send({
            username: 'test',
            email: 'test@@gmail.com',
            password: 'test'
        });
        console.log('Response:', res);
        expect(res.status).to.equal(StatusCodes.BAD_REQUEST);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error');
        expect(res.body).to.have.property('success');
        expect(res.body.error).to.be.an('object');
        expect(res.body.error).to.have.property('message');
        expect(res.body.error).to.equal("username 'test' already exists.");
        expect(res.body.error.explanation).to.equal("Cannot create a new User object");

    }
    );
    // it('should return 500 status code', async () => {
    //     sinon.restore();
    //     sinon.stub(userService, 'signUp').throws();
    //     const res = await chai.request(app).post('/api/users/signup').send({
    //         username: 'test',
    //         email: 'test@gmail.com',
    //         password: 'test',
    //     });
    //     expect(res.status).to.equal(StatusCodes.BAD_REQUEST);
    //     expect(res.body).to.be.an('object');
    //     expect(res.body).to.have.property('error');
    //     expect(res.body).to.have.property('message');
    //     expect(res.body).to.have.property('success');
    //     expect(res.body.success).to.equal(false);
    //     expect(res.body.error).to.be.an('object');
    //     expect(res.body.error).to.have.property('message');
    //     expect(res.body.error.message).to.equal('Internal server error');
    // }
    // );
}
);

