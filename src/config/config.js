const configDotenv = require("dotenv");

configDotenv.config()

module.exports ={
   PORT : process.env.PORT
};