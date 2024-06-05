import authService from "../services/auth.service";
import {SignUpUserResponse} from "../pb/auth/SignUpUserResponse";
import request from 'supertest';
import sinon from 'sinon';
import {Application} from "express";
import app from "../src";
import authServiceClient from "../services/auth.service";
import anything = jasmine.anything;
import {string} from "joi";

interface SignUpUserInput {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    provider: string;
}

interface User {
    id: string;
    name: string;
    email: string;
}

describe('POST /register', () => {
    let signUpUserStub: sinon.SinonStub;

    beforeEach(() => {
        // Create a stub for the gRPC service call
        signUpUserStub = sinon.stub(authService, 'signUpUser');
    });

    afterEach(() => {
        // Restore the original function after each test
        signUpUserStub.restore();
    });

    it('should register a user successfully', async () => {
        const userData: SignUpUserInput = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123',
            phoneNumber: '+1234567890',
            provider: 'LOCAL'
        };

        const expectedResponse: SignUpUserResponse = {
            user: { id: '1', name: 'Test User', email: 'test@example.com', role: 'USER', phoneNumber: '+1234567890', provider: 'LOCAL' }
        };

        signUpUserStub.callsArgWith(1, null, expectedResponse);

        // Act
        const response = await request(app as Application)
            .post('/auth/register')
            .send(userData);

        // Assert
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toEqual(expect.any(String));
        expect(response.body).toHaveProperty('email', userData.email);
        expect(response.body).toHaveProperty('role', 'USER');
        expect(response.body).not.toHaveProperty('password');

        expect(signUpUserStub.calledOnce).toBe(true);
    });

    it('should successfully sign-in with OAuth', async () => {
        const userData: SignUpUserInput = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123',
            phoneNumber: '+1234567890',
            provider: 'LOCAL'
        };

        const expectedResponse: SignUpUserResponse = {
            user: { id: '1', name: 'Test User', email: 'test@example.com', role: 'USER', phoneNumber: '+1234567890', provider: 'LOCAL' }
        };

        signUpUserStub.callsArgWith(1, null, expectedResponse);

        // Act
        const response = await request(app as Application)
            .post('/auth/register')
            .send(userData);

        // Assert
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toEqual(expect.any(String));
        expect(response.body).toHaveProperty('email', userData.email);
        expect(response.body).toHaveProperty('role', 'USER');
        expect(response.body).not.toHaveProperty('password');

        expect(signUpUserStub.calledOnce).toBe(true);
    });

    it('should return error when OAuth token is incorrect', async () => {
        const userData: SignUpUserInput = {
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123',
            phoneNumber: '+1234567890',
            provider: 'LOCAL'
        };

        const expectedResponse: SignUpUserResponse = {
            user: { id: '1', name: 'Test User', email: 'test@example.com', role: 'USER', phoneNumber: '+1234567890', provider: 'LOCAL' }
        };

        signUpUserStub.callsArgWith(1, null, expectedResponse);

        // Act
        const response = await request(app as Application)
            .post('/auth/register')
            .send(userData);

        // Assert
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toEqual(expect.any(String));
        expect(response.body).toHaveProperty('email', userData.email);
        expect(response.body).toHaveProperty('role', 'USER');
        expect(response.body).not.toHaveProperty('password');

        expect(signUpUserStub.calledOnce).toBe(true);
    });

    it('should handle errors from the gRPC service', async () => {
        // Arrange
        const userData: SignUpUserInput = {
            name: 'User for Wrong Test',
            email: 'testexample.com',
            password: 'password123',
            phoneNumber: '1234567890',
            provider: 'LOCAL'
        };

        const grpcError = {
            code: 3,
            details: 'Invalid email'
        };

        signUpUserStub.callsArgWith(1, grpcError, null);

        // Act
        const response = await request(app as Application)
            .post('/auth/register')
            .send(userData);

        // Assert
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('status', 'failed');
        expect(response.body).toHaveProperty('message', 'Invalid email');
        expect(signUpUserStub.calledOnce).toBe(true);
    });
});
