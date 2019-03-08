'use strict';

const express = require('express')
const knex = require('../knex')
const router = express.Router()

router.get('/', (req, res, next) => {
  console.log("acorns")
  return knex('acorns')
    .then((acorns) => {
      res.status(200).send(acorns)
    })
    .catch((err) => {
    next(err)
  })
})

module.exports = router;
