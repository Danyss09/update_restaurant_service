const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Ruta para actualizar restaurante por ID
router.put('/update_restaurant/:id', restaurantController.updateRestaurant);

module.exports = router;
