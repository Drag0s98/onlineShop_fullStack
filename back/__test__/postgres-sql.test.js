const { response } = require('express')
const supertest = require('supertest')
const {app, server} = require('../app')

const api = supertest(app)

describe('api funtionality', () => {
    test('products are returned as json with 107 objects', async() => {
       const response = await api
            .get('/api/products')
            .expect(200)
            .expect('Content-Type', /application\/json/)
            .expect(response.body).toHaveLength(107)
    })
    test('manufactures are returned as json', async() => {
        await api
            .get('/api/manufactures')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })
    test('another endpoint returned 400', async () => {
        await api
            .get('/someurl')
            .expect(400)
    })
    afterAll(() => { //To eliminate error of "open handle potentially keeping"
        server.close();
    })
})
