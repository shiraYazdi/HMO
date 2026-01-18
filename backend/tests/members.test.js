const request = require('supertest');
const app = require('../app')

describe('Members API', () => {
  it('should get all members', async () => {
    const res = await request(app).get('/api/members');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should create a new member', async () => {
    const newMember = { name: 'Test', email: 'test@example.com' };
    const res = await request(app).post('/api/members').send(newMember);
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('Test');
  });
;
