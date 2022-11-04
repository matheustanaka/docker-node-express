const express = require('express')
const mongoose = require('mongoose')
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config')

const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to Database")).catch((e) => console.log(e))

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`))