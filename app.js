const express = require("express")
const app = express();
const mongoose = require("mongoose")
require('dotenv/config')
const bodyParser = require("body-parser")



app.use(bodyParser.json())






const actorRoute = require('./routes/actors')
app.use('/actors',actorRoute )

app.get('/', (req, res) => {
    res.send("I'm inside Home")
})



mongoose.connect(process.env.DB_CONNECTION)


app.listen(8000)