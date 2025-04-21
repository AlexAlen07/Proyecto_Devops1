const request = require('supertest'); // Cambiado a 'import'
const mongoose = require('mongoose');
const app = require('./app'); // Cambiado a 'import'

jest.setTimeout(10000); // 10 segundos de timeout

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
