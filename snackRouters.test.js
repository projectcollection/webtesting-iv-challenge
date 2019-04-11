const request = require('supertest');

const snackRouters = require('./snackRouters');

describe('snackRouters', () => {
    describe('POST /snacks', () => {
        test('should respond with 201', () => {
            return request(snackRouters)
                .post('/snacks')
                .send({
                    name: "Fruit"
                })
                .expect(201)
        });

        test('should respond with json', () => {
            return request(snackRouters)
                .post('/snacks')
                .send({
                    name: "Fruit"
                })
                .expect('Content-Type', /json/)
        })
    });

    describe('DELETE /snack', () => {
        test('should respond with 200', () => {
            return request(snackRouters)
                .del('/snacks/' + 1)
                .expect(200)
        });

        test('should respond with json', () => {
            return request(snackRouters)
                .del('/snacks')
                .expect('Content-Type', /json/)
        })
    })
})