let mongoose = require('mongoose')
let Schema = mongoose.Schema



//define schema make model price year imgUrl description
let car = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  year: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  description: { type: String, required: true },
})

//export schema
module.exports = mongoose.model('Car', car)