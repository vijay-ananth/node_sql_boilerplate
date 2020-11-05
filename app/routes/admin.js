const express = require('express')
const router = express()
const Controller = require('../controllers')
const admin = require('../middlewares/admin')
router.get('/user_list', [admin], Controller.AdminController.listUser)
router.put('/update_user_status/:id', [admin], Controller.AdminController.updateUser)

module.exports = router