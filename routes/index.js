'use strict'

const express = require('express')
const knex = require('../knex.js')
const router = express.Router();

//get all
router.get('/', function(req, res, next) {
  return knex('acorns')
  .select('id', 'title', 'category', 'content')
  .then ((result) => {
    res.status(200).json(result)
  })
})

//get one
router.get('/:id', function(req, res, next) {
  return knex('acorns')
  .where('id', req.params.id)
  .select('id', 'title', 'category', 'content')
  .first()
  .then(data => {
    res.status(200).json(data)
  })
})

router.post('/', function(req, res, next) {
  knex('acorns')
  .insert({
    name: req.body.name,
    message: req.body.message
  })
  .returning(['id', 'title', 'category', 'content'])
  .then(data => {
    res.status(200).json(data[0])
  })
})

router.patch('/:id', function(req, res, next) {
  knex('acorns')
  .where('id', req.params.id)
  .update(req.body)
  .returning(['id', 'title', 'category', 'content'])
  .then(data => {
    res.send(data[0])
  })
})

router.delete('/:id', function(req, res, next) {
  knex('acorns')
  .where('id', req.params.id)
  .returning(['id', 'title', 'category', 'content'])
  .del()
  .then(data => {
    if (!data) {
      res.send("not found")
    } else {
      res.status(200).json(data[0])
    }
  })
})

module.exports = router;
