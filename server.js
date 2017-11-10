/**
 * Dependencies
 */

var http = require('http');
var path = require('path');

var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

var handlebars = require('express-handlebars');


/**
 * Variables
 */

const DEBUG = true;


/**
 * Helpers
 */

function printLog(str) {
  console.log('[*] ' + str);
}

function printError(err) {
  console.error('[!] ' + err.message);
}


/**
 * App
 */

var app = express();


/**
 * Port
 */

app.set('port', process.env.PORT || 3000);


/**
 * Middleware
 */

if (DEBUG)
  app.use(morgan('dev'));

/* Gzip Compression */
app.use(compression());

/* Serve Static Public Content */
app.use(serveStatic( path.join(__dirname, 'public') ));

/* Handlebars Template Engine */
app.engine('html', handlebars({ extname: '.html' }));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

/* Handle POST Requests/URL Encoding */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**
 * Router Object
 */

var router = {
  index: require('./routes/index'),
  about: require('./routes/about'),
  projectIndex: require('./routes/projectIndex'),
  project: require('./routes/project'),
  notFound: require('./routes/404')
};


/**
 * Route Handlers
 */

app.get('/', router.index.view);
app.get('/about', router.about.view);
app.get('/project-index', router.projectIndex.view);
app.get('/project/:bkgClass', router.project.view);

// 404 Catch-all
app.use(router.notFound.view);


/**
 * Create Server and Listen
 */

http.createServer(app).listen(app.get('port'), function() {
  printLog('Express server listening on port ' + app.get('port'));
});
