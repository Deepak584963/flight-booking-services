const { CityRepository } = require("../repository/index");

class CityServices {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("something went wrong in the Service layer");
      throw { error };
    }
  }

  async destroyCity(cityId) {
    try {
      const Response = await this.cityRepository.destroyCity(cityId);
      return Response;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityServices;
