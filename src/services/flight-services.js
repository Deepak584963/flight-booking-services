const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compereTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (!compereTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival Time cannot be less than departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeat: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.log("something went wrong in the Service layer");
      throw { error };
    }
  }

  async getAllFlight(data) {
   try {
    const flights = await this.flightRepository.getAllFlights(data);
    return flights;
   } catch (error) {
    console.log("something went wrong in the Service layer");
      throw { error };
   }

  }
}

module.exports = FlightService;
