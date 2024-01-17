const express = require('express');
const bodyParser = require('body-parser');
const query = require('./db/customers');

const app = express();
app.use(bodyParser.json());

const port = 3000;

// GET all customers
app.get('/customers', query.getAllCustomers);

// GET a single customer by id
app.get('/customers/:id', query.getCustomerById);

// POST a new customer
app.post('/customers', query.createCustomer);

// PUT (update) a customer
app.put('/customers/:id', query.updateCustomer);

// DELETE a customer
app.delete('/customers/:id', query.deleteCustomer);


app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});