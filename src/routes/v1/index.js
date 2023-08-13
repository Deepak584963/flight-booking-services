const express = require('express');
const CityController = require('../../controllers/city-controller')
const router = express.Router();


router.post('/city', CityController.createCity)
router.get('/city/:id', CityController.getCity)
router.delete('/city/:id', CityController.destroyCity)
router.get('/city', CityController.getAllCity)
router.patch('/city/:id', CityController.updateCity)
module.exports = router