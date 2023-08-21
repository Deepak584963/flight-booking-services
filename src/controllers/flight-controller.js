const { FlightService } = require("../services/index");
const { SuccessCodes } = require('../utils/error-codes') 
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "successfully created a flight",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "not able to created a city",
      err: { error },
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlight(req.query);
    return res.status(SuccessCodes.CREATED).json({
      data: response,
      success: true,
      message: "successfully fetched all flights",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "not able to fetch all flights",
      err: { error },
    });
  }
};
module.exports = {
  create,
  getAll,
};
