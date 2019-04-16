const request = require('supertest');
const app = require('./index');

const db = require('./data/dbconfig');

beforeAll(async done => {
    await db.seed.run();
    done();
})

describe('snackRouters', () => {
    describe('POST /snacks', () => {
        test('should respond with 201', () => {
            return request(app)
                .post('/snacks')
                .send({
                    name: "Fruit"
                })
                .expect(201)
        });

        test('should respond with json', () => {
            return request(app)
                .post('/snacks')
                .send({
                    name: "Fruit"
                })
                .expect('Content-Type', /json/)
        })
    });

    describe('DELETE /snack', () => {
        test('should respond with 200', () => {
            return request(app)
                .del('/snacks/' + 2)
                .expect(200)
        });

        test('should respond with json', () => {
            return request(app)
                .del('/snacks/' + 1)
                .expect('Content-Type', /json/)
        })
    })
})