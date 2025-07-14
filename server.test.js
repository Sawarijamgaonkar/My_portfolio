import request from 'supertest';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { jest } from '@jest/globals';

import app from './server.js'; // Assuming server.js exports the app

describe('POST /api/contact', () => {
    const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'Test message'
    };

    beforeEach(() => {
        jest.restoreAllMocks();
    });

    test('should return 400 if any field is missing', async () => {
        const { name, ...partialData } = validData;
        const response = await request(app).post('/api/contact').send(partialData);
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('All fields are required');
    });

    test('should return 400 if email is invalid', async () => {
        const invalidEmailData = { ...validData, email: 'invalid-email' };
        const response = await request(app).post('/api/contact').send(invalidEmailData);
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Invalid email format');
    });

    test('should save data and return success message', async () => {
        jest.spyOn(fs, 'readFile').mockImplementation((filePath, callback) => {
            callback(null, JSON.stringify([]));
        });
        jest.spyOn(fs, 'writeFile').mockImplementation((filePath, data, callback) => {
            callback(null);
        });

        const response = await request(app).post('/api/contact').send(validData);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Contact form data saved successfully');
    });

    test('should handle readFile error', async () => {
        jest.spyOn(fs, 'readFile').mockImplementation((filePath, callback) => {
            const err = new Error('Read error');
            // @ts-ignore
            err.code = 'EACCES';
            callback(err, null);
        });

        const response = await request(app).post('/api/contact').send(validData);
        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Error saving contact form data');
    });

    test('should handle writeFile error', async () => {
        jest.spyOn(fs, 'readFile').mockImplementation((filePath, callback) => {
            callback(null, JSON.stringify([]));
        });
        jest.spyOn(fs, 'writeFile').mockImplementation((filePath, data, callback) => {
            const err = new Error('Write error');
            callback(err);
        });

        const response = await request(app).post('/api/contact').send(validData);
        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Error saving contact form data');
    });
});
