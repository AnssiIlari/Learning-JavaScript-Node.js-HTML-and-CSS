const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

let customers = [
    { id: '1588323375416', firstName: 'John', lastName: 'Johnson', email: 'john@johnson.com', phone: '8233243' },
    { id: '1588323375417', firstName: 'Mary', lastName: 'Smith', email: 'mary@smith.com', phone: '6654113' },
    { id: '1588323375418', firstName: 'Peter', lastName: 'North', email: 'peter@north.com', phone: '901176' },
]

// GET all customers
app.get("/api/customers", (req, res) => {
    res.json(customers);
})

// GET a customer by ID
app.get("/api/customers/:id", (req, res) => {
    // gets the id from the request
    const customerId = req.params.id;
    // find the customer with the id
    const customer = customers.filter(customer => customer.id === customerId);

    // Error handling
    if (customer.length > 0) {
        res.json(customer[0]);
    } else {
        res.status(404).send();
    }

    res.json(customer);
})

// Add a new customer use post method, id is generated automatically with Date.now()
app.post("/api/customers", (req, res) => {
    // create a new customer object, id is generated automatically and the rest is
    // from the request body
    const newCustomer = { 'id': Date.now().toString(), ...req.body };
    // add the new customer to the array
    customers = [...customers, newCustomer];

    // status code 201 means created successfully
    res.status(201).json(newCustomer);

})

// Delete a customer by ID
app.delete("/api/customers/:id", (req, res) => {
    // gets the id from the request
    const customerId = req.params.id;
    // filter out the customer with the id
    customers = customers.filter(customer => customer.id !== customerId);

    // status code 204 means deleted successfully
    res.status(204).send();
})

// PUT, Update a customer by ID
app.put("/api/customers/:id", (req, res) => {
    // gets the id from the request
    const customerId = req.params.id;
    // update the customer with the id. params is the id, body is the new data
    const updatedCustomer = { 'id': customerId, ...req.body };

    // gets the index of the customer with the id
    const customerIndex = customers.findIndex(customer => customer.id === customerId);
    // replace the old customer with the updated customer
    customers.splice(customerIndex, 1, updatedCustomer);

    res.json(updatedCustomer);
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});