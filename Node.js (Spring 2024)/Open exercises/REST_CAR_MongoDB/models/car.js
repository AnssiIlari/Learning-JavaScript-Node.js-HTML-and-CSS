var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema({
    Make: {type: String, required: true, maxlength: 150},
    Model: {type: String, required: true, maxlength: 200},
    Color: {type: String, required: true},
    Price: {type: Number, required: true},
    Year: {type: Number, required: true},
});

//Export model
module.exports = mongoose.model('Car', CarSchema);