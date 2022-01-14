import request from 'supertest';
import mongoose from 'mongoose';
import app from './index.js';

describe('POST /auth/login', () => {
  describe('given a username and password', () => {
    test('should respond with status 200', async () => {
      const response = await request(app).post('/auth/login').send({
        username: 'huynh',
        password: '123456'
      });
      expect(response.status).toBe(200);
    });

    test('should specify json in the content type header', async () => {
      const response = await request(app).post('/auth/login').send({
        username: 'huynh',
        password: '123456'
      });
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });

    test('response has accessToken', async () => {
      const response = await request(app).post('/auth/login').send({
        username: 'huynh',
        password: '123456'
      });
      expect(response.body.accessToken).toBeDefined();
    });

    test('wrong password should respond with status 400', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({ username: 'huynh', password: 'wrongpassword' });
      expect(response.status).toBe(400);
    });

    test('wrong username or email should respond with status 404', async () => {
      const bodyData = [
        { username: 'wrongusername', password: '123456' },
        { username: 'wrongemail@email.com', password: '123456' }
      ];
      for (const body of bodyData) {
        const response = await request(app).post('/auth/login').send(body);
        expect(response.status).toBe(404);
      }
    });
  });

  describe('when the username and password is missing', () => {
    test('should respond with status 400', async () => {
      const bodyData = [{ username: 'username' }, { password: 'password' }, {}];
      for (const body of bodyData) {
        const response = await request(app).post('/auth/login').send(body);
        expect(response.status).toBe(400);
      }
      mongoose.connection.close();
    });
  });
});
