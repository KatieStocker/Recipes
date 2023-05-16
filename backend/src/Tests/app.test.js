const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();
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
    it('should return a 200 response for GET /', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});