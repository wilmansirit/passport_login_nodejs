'use strict'

module.exports = {

	index: (req, res, next) => {

		res.render('welcome', {
			title: "Welcome to landing page"
		})

	}


}