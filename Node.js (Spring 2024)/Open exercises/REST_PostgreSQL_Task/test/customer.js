const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../index');
const query = require('../db/customers');
const should = chai.should();

chai.use(chaihttp);

// test customer
const testCustomer = {
    firstname: 'Test',
    lastname: 'Person',
    email: 'email@address.com',
    phone: '123456789'
}

// Test the /POST route
describe('/POST customers', () => {
    beforeEach((done) => {
        query.deleteAllCustomers();
        done();
    });

    it('Add new customer', (done) => {
        chai.request(app)
            .post('/customers')
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(testCustomer))
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('firstname');
                done();
            });
    });
});

// Test the /GET route
describe('/GET all customers', () => {
    it('Get all customers', (done) => {
        chai.request(app)
            .get('/customers')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});