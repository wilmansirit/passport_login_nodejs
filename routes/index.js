'use strict'

const 	express		= require('express')
,		router 		= express.Router()
,		controllers = require('../controllers')

router.get('/', controllers.HomeControllers.index)
router.get('/users/login', controllers.UsersControllers.login);
router.get('/users/register', controllers.UsersControllers.register);



module.exports = router;