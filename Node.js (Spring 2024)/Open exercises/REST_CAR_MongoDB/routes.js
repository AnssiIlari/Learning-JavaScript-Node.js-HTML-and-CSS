const express = require('express');
const router = express.Router();
const Car = require('./models/car');

// GET all cars
router.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new car
router.post('/cars', async (req, res) => {
    const car = new Car({
        Make: req.body.Make,
        Model: req.body.Model,
        Color: req.body.Color,
        Price: req.body.Price,
        Year: req.body.Year,
    });
    try {
        const newCar = await car.save();
        res.status(201).json(newCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a car by ID
// Id is given in the body of the request
router.delete('/cars', async (req, res) => {
    try {
        const car = await Car.findOneAndDelete({ _id: req.body._id });
        if (!car) {
            res.status(404).json({ message: 'Car not found' });
        } else {
            res.json({ message: 'Car deleted' });
            //alternative
            // res.status(204).end();
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a car by ID, .findByIdAndUpdate()
// Id is given in the URL and the new data is given in the body of the request
router.put('/cars/:id', async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate({ _id: req.params.id }, req.body);
        if (!car) {
            res.status(404).json({ message: 'Car not found' });
        } else {
            res.json({ message: 'Car updated' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;