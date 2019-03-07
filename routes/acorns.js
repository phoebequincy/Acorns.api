'use strict'

const express = require('express')
const knex = require('../knex.js')
const router = express.Router();

router.get('/', function(req, res, next) {
  return knex('acornsdb')
  .select('id', 'title', 'acorns')
  .then ((result) => {
    res.status(200).json(result)
  })
})

router.get('/:id', function(req, res, next) {
  return knex('acornsdb')
  .where('id', req.params.id)
  .select('id', 'title', 'acorns')
  .first()
  .then(data => {
    res.status(200).json(data)
  })
})

router.post('/', function(req, res, next) {
  knex('acornsdb')
  .insert({
    name: req.body.name,
    message: req.body.message
  })
  .returning(['id','title', 'acorns'])
  .then(data => {
    res.status(200).json(data[0])
  })
})

router.patch('/:id', function(req, res, next) {
  knex('acornsdb')
  .where('id', req.params.id)
  .update(req.body)
  .returning(['id','title', 'acorns'])
  .then(data => {
    res.send(data[0])
  })
})

router.delete('/:id', function(req, res, next) {
  knex('acornsdb')
  .where('id', req.params.id)
  .returning(['id','title', 'acorns'])
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
