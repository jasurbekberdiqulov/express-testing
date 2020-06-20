const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const dbService = require('../services/dbService')
 
router.get('/', dbService.getUsers)
router.get('/:id', dbService.getUserById)
router.post('/', dbService.createUser)
router.put('/:id', dbService.updateUser)
router.delete('/:id', dbService.deleteUser)

module.exports = router;
