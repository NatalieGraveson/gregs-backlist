//this file is always the same
let mongoose = require("mongoose")

//changes from project to project
// mongodb://<Username>:<password>@<database server>/<server name>
const connectionString = 'mongodb://nataliegraveson1:carsrock!@den1.mongo1.gear.host:27001/nataliegraveson1'

let connection = mongoose.connection

//establishes connection to database
mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//console log errors
connection.on('error', err => {
  console.log('[Database Error]: ', err)
})

//confirm connection
connection.once('open', () => {
  console.log('Successfully connected to database')
})