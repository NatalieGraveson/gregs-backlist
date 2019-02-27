const router = require('express').Router()
let House = require('../models/House')


//logger for routes
router.use('*', (req, res, next) => {
  console.log('A new customer in house routes!!!!')
  next()
})


//get all
router.get('', (req, res, next) => {
  House.find({})
    .then(houses => {
      res.status(200).send(houses)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//get by id
router.get('/:id', (req, res, next) => {
  House.findById(req.params.id)
    .then(house => {
      if (house) {
        return res.status(200).send(house)
      }
      res.status(400).send('No house by that Id')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//create
router.post('', (req, res, next) => {
  House.create(req.body)
    .then(house => {
      res.status(201).send(house)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//update
router.put('/:id', (req, res, next) => {
  House.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(house => {
      res.status(200).send(house)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//delete
router.delete(':id', (req, res, next) => {
  House.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('Successfully deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})




module.exports = router