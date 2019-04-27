'use strict'

require('dotenv').config()

const 	express 		= require('express')
	,	path			= require('path')
	,	logger			= require('morgan')
	,	routes			= require('./routes')
	,	cookieParser	= require('cookie-parser')
	,	createError		= require('http-errors')
	,	port			= process.env.PORT || 3000;

	const app = express();
	
	// Settings express
		// Engine views
		app.set('views', path.join(__dirname, 'views'));
		app.set('view engine', 'pug');

// Middleware
	// Using a Morgan-Loggging (predefined log formats: default, short ,tiny, and dev.)
	app.use(logger('dev'));
	// Express' Body Parser
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	// Using cookies
	app.use(cookieParser());
	// Static files
	app.use(express.static(path.join(__dirname, '/public')));

// Routes
	app.use('/', routes);
	

// catch 404 and forward to error handler
app.use( (req, res, next) => {
	next(createError(404));
});

// error handler
app.use( (err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('partials/error');
});

// Start the Server
	app.listen(port, () => {
		console.log(`Server running on port http://localhost:${port}`)
	});

module.exports = app;

/* Requerido para formatear la data directamente en la vista */
// app.locals._ = require('underscore');
// app.locals._.str = require('underscore.string');
// app.locals.moment = require('moment');
