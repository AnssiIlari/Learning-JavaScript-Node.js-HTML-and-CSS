const express = require('express');

const app = express();

const port = 3000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

let customers = [
    { id: '1588323375416', firstname: 'John', lastname: 'Johnson', email: 'john@johnson.com', phone: '8233243' },
    { id: '1588323375417', firstname: 'Mary', lastname: 'Smith', email: 'mary@smith.com', phone: '6654113' },
    { id: '1588323375418', firstname: 'Peter', lastname: 'North', email: 'peter@north.com', phone: '901176' },
]

app.set('view engine', 'pug');

app.get("/home", (req, res) => {
    res.render("home");
})

app.get("/", (req, res) => {
    res.render("customer", { customers: customers });
})

app.get("/addcustomer", (req, res) => {
    res.render("addcustomer");
})

app.post("/addcustomer", (req, res) => {
    const newCustomer = { id: new Date().now,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone};

    customers = [...customers, newCustomer];
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});