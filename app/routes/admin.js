const express = require('express')
const router = express()
const AdminController = require('../controllers/AdminController')
const admin = require('../middlewares/admin')
router.get('/user_list', [admin], AdminController.listUser)
router.put('/update_user_status/:id', [admin], AdminController.updateUser)

module.exports = router