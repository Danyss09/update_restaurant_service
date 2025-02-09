const Restaurant = require('../models/restaurant');
const mongoose = require('mongoose');
const axios = require('axios');



// Obtener restaurante por ID desde el microservicio
exports.getRestaurantById = async (restaurantId) => {
    try {
      const response = await axios.get(`${process.env.RESTAURANT_API_URL}/${restaurantId}`);
      return response.data; // Devolvemos los datos del restaurante desde el microservicio
    } catch (error) {
      console.error('Error fetching restaurant by ID:', error.message);
      return null; // Retornamos null si no se encuentra
    }
  };
  
  // Actualizar restaurante en la base de datos local (si se desea)
  exports.updateRestaurant = async (restaurantId, updatedData) => {
    try {
      const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, updatedData, { new: true });
      return updatedRestaurant; // Devolvemos el restaurante actualizado
    } catch (error) {
      console.error('Error updating restaurant:', error.message);
      throw error; // Lanzamos el error para manejarlo en el controlador
    }
  };
