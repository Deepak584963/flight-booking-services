const { where } = require("sequelize");
const { city } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  async createCity({ name }) {
    try {
      // console.log(name);
      const City = await city.create({
        name,
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
      const City = await city.findByPk(cityId);
      City.name = data.name;
      await City.save();
      return City;
    } catch (error) {
      console.log("something went wrong in the Repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      console.log(cityId);
      const City = await city.findByPk(cityId);
      return City;
    } catch (error) {
      console.log("something went wrong in the Repository layer");
      throw { error };
    }
  }

  async getAllCity(filter) {
    try {
      if (filter.name) {
        const City = await city.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });

        return City;
      }
      const City = await city.findAll();
      return City;
    } catch (error) {
      console.log("something went wrong in the Repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
