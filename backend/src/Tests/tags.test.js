const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();
const { expect } = require("chai")
chai.use(chaiHttp);

const { Client } = require('pg');
require('dotenv').config({ path: __dirname + '../../.env.local' });
const {
    DB_USER,
    DB_HOST,
    DB,
    DB_PASS,
    DB_PORT,
} = process.env

const client = new Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB,
    password: DB_PASS,
    port: DB_PORT,
});
client.connect();

// TODO
// implement a 'before' to create the tables if they do not yet exist

// TODO
// implement an 'after' to clean up the tables after all tests are complete

describe('Test API endpoints', () => {
    it('should return a 200 response for GET /tags', (done) => {
        chai.request(app)
            .get('/tags')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('should return a 200 response for GET /tags/:id where the id exists and the response object should contain the correct values', (done) => {
        chai.request(app)
            .get('/tags/1')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res).to.have.property("text")
                expect(res.text).to.include(`"id":"1"`)
                done();
            });
    });
});