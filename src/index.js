const express = require("express");
const { PORT } = require("./config/dbconfig");
const bodyParser = require("body-parser");
const ApiRoutes = require('./routes/index');
const {Airplane} = require('./models/index')
const runServer = async() => {
  const app = express();
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}))
  app.use('/api', ApiRoutes)

  
  app.listen(PORT, async () => {
    console.log(`server start on port no. ${PORT}`);
    // const created = await Airplane.sync()

  });

 
};

runServer();
