let mongoose = require('mongoose')
let Schema = mongoose.Schema



//define schema make model price year imgUrl description
let house = new Schema({
  imgUrl: { type: String, required: true },
  bedrooms: { type: String, required: true },
  bathroom: { type: String, required: true },
  levels: { type: Number, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
})

//export schema
module.exports = mongoose.model('House', house)