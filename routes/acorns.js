'use strict'

const express = require('express')
const knex = require('../knex.js')
const router = express.Router();

router.get('/', function(req, res, next) {
  return knex('messages')
  .select('id', 'name', 'message')
  .then ((result) => {
    res.status(200).json(result)
  })
})

router.get('/:id', function(req, res, next) {
  return knex('messages')
  .where('id', req.params.id)
  .select('id', 'name', 'message')
  .first()
  .then(data => {
    res.status(200).json(data)
  })
})

router.post('/', function(req, res, next) {
  knex('messages')
  .insert({
    name: req.body.name,
    message: req.body.message
  })
  .returning(['id','name', 'message'])
  .then(data => {
    res.status(200).json(data[0])
  })
})

router.patch('/:id', function(req, res, next) {
  knex('messages')
  .where('id', req.params.id)
  .update(req.body)
  .returning(['id','name', 'message'])
  .then(data => {
    res.send(data[0])
  })
})

router.delete('/:id', function(req, res, next) {
  knex('messages')
  .where('id', req.params.id)
  .returning(['id','name', 'message'])
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
