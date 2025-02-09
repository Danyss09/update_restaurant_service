const restaurantService = require('../services/restaurantService');

// Actualizar información del restaurante
exports.updateRestaurant = async (req, res) => {
  const restaurantId = req.params.id;
  const updatedData = req.body;

  try {
    // Obtener el restaurante por ID desde el microservicio
    const restaurant = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    // Establecer la fecha de actualización
    updatedData.updatedAt = Date.now();

    // Actualizar el restaurante en la base de datos local (si lo deseas)
    const updatedRestaurant = await restaurantService.updateRestaurant(restaurantId, updatedData);

    // Retornar el restaurante actualizado
    res.status(200).json({
      message: 'Restaurant updated successfully',
      updatedRestaurant
    });
  } catch (error) {
    console.error('Error updating restaurant:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
