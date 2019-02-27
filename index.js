let cors = require('cors')
let express = require('express')
let bp = require('body-parser')
let server = express()
let port = 3000

//initialize connection to Database
require('./server-assets/db/gearhost-config')

//middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

let whitelist = ['http://localhost:8080']
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}
server.use(cors(corsOptions))


//routes
let carRoutes = require('./server-assets/routes/car-routes')
let jobRoutes = require('./server-assets/routes/job-routes')
let houseRoutes = require('./server-assets/routes/house-routes')

server.use('/api/cars', carRoutes)
server.use('/api/jobs', jobRoutes)
server.use('/api/houses', houseRoutes)



//catchall
server.use('*', (req, res, next) => {
  res.status(404).send('no matching routes')
})

//start server
server.listen(port, () => {
  console.log('Server Running on Port', port, '(you better go catch it')
})

