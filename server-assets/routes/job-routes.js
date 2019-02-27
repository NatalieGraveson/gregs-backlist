const router = require('express').Router()
let Job = require('../models/Job')


//logger for routes
router.use('*', (req, res, next) => {
  console.log('A new customer in job routes!!!!')
  next()
})


//get all
router.get('', (req, res, next) => {
  Job.find({})
    .then(jobs => {
      res.status(200).send(jobs)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//get by id
router.get('/:id', (req, res, next) => {
  Job.findById(req.params.id)
    .then(job => {
      if (job) {
        return res.status(200).send(job)
      }
      res.status(400).send('No job by that Id')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//create
router.post('', (req, res, next) => {
  Job.create(req.body)
    .then(job => {
      res.status(201).send(job)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//update
router.put('/:id', (req, res, next) => {
  Job.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(job => {
      res.status(200).send(job)
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})

//delete
router.delete(':id', (req, res, next) => {
  Job.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200).send('Successfully deleted')
    })
    .catch(err => {
      res.status(500).send({ Error: err })
    })
})




module.exports = router