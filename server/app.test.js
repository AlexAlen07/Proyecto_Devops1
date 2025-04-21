jest.setTimeout(10000); // 10 segundos de timeout

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});

// Cerrar la conexión de MongoDB después de todos los tests
afterAll(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
  }
});