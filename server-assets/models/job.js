let mongoose = require('mongoose')
let Schema = mongoose.Schema



//define schema make model price year imgUrl description
let job = new Schema({
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
  hours: { type: Number, required: true },
  rate: { type: Number, required: true },
  description: { type: String, required: true },
})

//export schema
module.exports = mongoose.model('Job', job)