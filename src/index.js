const  express  = require("express");
const {PORT} = require('./config/config')

const app = express()

app.listen(PORT,()=>{
    
    console.log(`server start on port no. ${PORT}`)
})