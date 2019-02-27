const router = require('express').Router()
let Car = require('../models/Car')


//logger for routes
router.use('*', (req, res, next) => {
  console.log('A new customer in car routes!!!!')
  next()
})


//get all
router.get('', (req, res, next) => {
  Car.find({})
    .then(cars => {
      res.status(200).send(cars)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//get by id
router.get('/:id', (req, res, next) => {
  Car.findById(req.params.id)
    .then(car => {
      if (car) {
        return res.status(200).send(car)
      }
      res.status(400).send('No car by that Id')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//create
router.post('', (req, res, next) => {
  Car.create(req.body)
    .then(car => {
      res.status(201).send(car)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//update
router.put('/:id', (req, res, next) => {
  Car.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(car => {
      res.status(200).send(car)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//delete
router.delete(':id', (req, res, next) => {
  Car.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('Successfully deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})




module.exports = router