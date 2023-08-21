const express = require('express');
const CityController = require('../../controllers/city-controller')
const FlightController = require('../../controllers/flight-controller')
const AirportController = require('../../controllers/airport-controller')
const {FlightMiddleware} = require('../../middlewares/index')
const router = express.Router(); 


router.post('/city', CityController.createCity)
router.get('/city/:id', CityController.getCity)
router.delete('/city/:id', CityController.destroyCity)
router.get('/city', CityController.getAllCity)
router.patch('/city/:id', CityController.updateCity)

router.post('/flights',FlightMiddleware.validateCreateFlight,FlightController.create)  
router.get('/flights', FlightController.getAll) 

router.post('/airports', AirportController.create)
module.exports = router