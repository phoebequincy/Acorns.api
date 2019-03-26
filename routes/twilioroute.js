const express = require('express')
const router = express.Router()

const client = require('twilio')(
  process.env.TWILIO_ACCOUT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

router.post('/', async(req, res) => {
  try {
    const create = await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `+1${req.body.to}`,
      body: req.body.body
    })
    res.sendStatus(200)
  } catch (err) {
    res.sendStatus(400)
  }
})
module.exports = router
