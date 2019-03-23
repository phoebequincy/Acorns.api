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

router.post('/api/messages', (req, res) => {
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

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
