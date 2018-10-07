const mongoose = require("mongoose");

const Schema  = mongoose.Schema;

const serviceSchema = new Schema({
    title               : String,
    description         : String,
    price               : String,
    image               : String,
    location            : String,
    serviceProvider     :{ type: Schema.Types.ObjectId, ref: 'User' },
    contactInfo         : String,   
});


const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;