const express = require('express')

const authController = require('../cotrollers/authControllers')

const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()


router.post('/register', authController.register)

router.post('/login', authController.login)

router.get('/protected', authMiddleware, (req, res) => {
    res.status(200).send(`Hola usuario ${req.userId}`)
}) 

module.exports = router