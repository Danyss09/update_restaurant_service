const mongoose = require('mongoose');

// Definir el esquema para la colección 'restaurants'
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Crear el modelo para interactuar con la colección 'restaurants'
const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'restaurants');
module.exports = Restaurant;
