const db = require('./dbconfig');

// GET all customers
const getAllCustomers = (req, res) => {
    db.query('SELECT * FROM customers', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result.rows);
        }
    });
}

// GET a single customer by id
const getCustomerById = (req, res) => {
    const query = {
        text: 'SELECT * FROM customers WHERE id = $1',
        values: [req.params.id],
    }

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            if (result.rows.length === 0) {
                res.status(404).end('404, not found');
            }
            else
                res.json(result.rows);
        }
    });
}

// POST a new customer
const createCustomer = (req, res) => {

    const newCustomer = req.body;

    const query = {
        text: 'INSERT INTO customers (firstname, lastname, email, phone) VALUES ($1, $2, $3, $4)',
        values: [req.body.firstname, req.body.lastname, req.body.email, req.body.phone],
    }

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(newCustomer);
        }
    }); 
}

// PUT (update) a customer
const updateCustomer = (req, res) => {

    const customer = req.body;
    const query = {
        text: 'UPDATE customers SET firstname = $1, lastname = $2, email = $3, phone = $4 WHERE id = $5',
        values: [req.body.firstname, req.body.lastname, req.body.email, req.body.phone, req.params.id],
    }

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(customer);
        }
    }); 
}

// DELETE a customer, does not check if customer exists
const deleteCustomer = (req, res) => {

    const query = {
        text: 'DELETE FROM customers WHERE id = $1',
        values: [req.params.id],
    }

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(204).end();
        }
    }); 
}


module.exports = {
    getAllCustomers: getAllCustomers,
    getCustomerById: getCustomerById,
    createCustomer: createCustomer,
    updateCustomer: updateCustomer,
    deleteCustomer: deleteCustomer
}
