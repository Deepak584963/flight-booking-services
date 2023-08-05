const { city } = require("../models/index");

class CityRepository {
  async createCity({name}) {
    try {
      // console.log(name);
      const City = await city.create({
        name
      });
      return City;
    } catch (error) {
      console.log("something went wrong in the Repository layer");
      throw { error };
    }
  }

  async destroyCity(cityId) {
    try {
      await city.destroy({
        where: {
          id: cityId,
        },
      });

      return true;
    } catch (error) {
      console.log("something went wrong in the Repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("something went wrong in the Repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      console.log(cityId)
      const City = await city.findByPk(cityId);
      return City;
    } catch (error) {
      console.log("something went wrong in the Repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
