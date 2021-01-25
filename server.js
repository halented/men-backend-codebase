// establish an express app
const express = require('express')
const app = express()

// allow requests from outside resources like postman, or your frontend if you choose to build that out
const cors = require('cors')
app.use(cors())

// app will serve and receive data in a JSON format
app.use(express.json())

// the messenger between our app and our database
const mongoose = require('mongoose')

// establish connection & give yourself a message so you know when its complete
mongoose.connect(source, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

`mongodb+srv://Hal:Hal@testercluster.m7k7n.mongodb.net/TesterCluster?retryWrites=true&w=majority`