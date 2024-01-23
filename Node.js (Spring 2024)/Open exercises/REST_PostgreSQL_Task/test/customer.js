const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../index');
const query = require('../db/customers');
const should = chai.should();

chai.use(chaihttp);

const testCustomer = {
    firstname: 'Test',
    lastname: 'Person',
    email: 'email@address.com',
    phone: '123456789'
}

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