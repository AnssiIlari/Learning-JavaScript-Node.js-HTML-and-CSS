const express = require('express');
const bodyParser = require('body-parser');
const query = require('./db/customers');
const auth = require('./services/authenticate');

const app = express();
app.use(bodyParser.json());

const port = 3000;

// GET all customers
app.get('/customers',auth.authenticate, query.getAllCustomers);

// GET a single customer by id
app.get('/customers/:id',auth.authenticate, query.getCustomerById);

// POST a new customer
app.post('/customers',auth.authenticate, query.createCustomer);

// PUT (update) a customer
app.put('/customers/:id',auth.authenticate, query.updateCustomer);

// DELETE a customer
app.delete('/customers/:id',auth.authenticate, query.deleteCustomer);

// Route for authentication
app.post("/login", auth.login);


app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

// for testing purposes
module.exports = app;