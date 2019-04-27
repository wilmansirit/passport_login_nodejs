'use strict'

module.exports = {

	login: async (req, res, next) => {

		res.render('users/login', {
			title: "Welcome to login page"
		})

	},
	register: async (req, res, next) => {

		res.render('users/register', {
			title: "Welcome to register page"
		})

	},
}