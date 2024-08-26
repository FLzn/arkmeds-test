// import request from 'supertest';
// import express from 'express';
// import { UserController } from '../../src/infrastructure/controllers/UserController';

// const app = express();
// const userController = new UserController();
// app.get('/users/:id', userController.getUser.bind(userController));

// describe('UserController', () => {
//   it('should return a user by id', async () => {
//     const res = await request(app).get('/users/1');
//     expect(res.status).toBe(200);
//     expect(res.body).toEqual({ id: '1', name: 'John Doe', email: 'john@example.com' });
//   });

//   it('should return 404 if user not found', async () => {
//     const res = await request(app).get('/users/999');
//     expect(res.status).toBe(404);
//     expect(res.body).toEqual({ message: 'User not found' });
//   });
// });
