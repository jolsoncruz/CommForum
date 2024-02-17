//Package Dependencies
var express = require('express');
var path = require('path');
var hbs = require('express-handlebars');
var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');

//Import Routers
const rootRouter = require('./routes/rootRoutes');
const collegesRouter = require('./routes/collegesRoutes');
const professorsRouter = require('./routes/professorsRoutes');
const reviewsRouter = require('./routes/reviewsRoutes');
const profileRouter = require('./routes/profileRoutes');
const loginRouter = require('./routes/loginRoutes');
const logoutRouter = require('./routes/logoutRoutes');
// const searchRouter = require('./routes/searchRoutes');

//Import Models
const { professorModel } = require('./models/professor');

//Environments Configuration
app.set('view engine', 'hbs');
app.set('port', (process.env.PORT || 3000));
app.engine('hbs',hbs({
	extname: 'hbs',
	defaultView: 'main',
	layoutsDir: __dirname + '/views/layouts/',
	partialsDir: __dirname + '/views/partials/',
	helpers: {
        ifCond: function(v1, v2, options) {
		  if(v1 === v2) {
		    return options.fn(this);
		  }
		  return options.inverse(this);
		},
		json: function(context) {
    		return JSON.stringify(context);
		}
    }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// Configuration for handling API endpoint data
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Route Definition
app.use('/', rootRouter);
app.use('/colleges', collegesRouter);
app.use('/professors', professorsRouter);
app.use('/reviews', reviewsRouter);
app.use('/profile', profileRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
// app.use('/search', searchRouter);

//Logical GET Methods
app.get('/getCourseByCollege', function(req, res) {
	var selectedCollege = req._parsedUrl.query;
	const courses = professorModel.filter(prof => prof.college == selectedCollege);
	res.send(courses.map(prof => prof.profCourse));
});

app.get('/getProfByCourse', function(req, res) {
	var selectedCourse = req._parsedUrl.query.split('%20').join(' ');
	const professors = professorModel.filter(prof => prof.profCourse == selectedCourse);
	res.send(professors.map(prof => prof.profName));
});

app.post('/auth', function(req,res) {
	req.session.loggedin = true;
	req.session.studentId = 1170001;
	req.session.nickname = 'John';
	result = { status: 1, success: true, message: "Log In Succesfull! Redirecting you to homepage..." }
	res.send(result);
});

//HTTP Status Routes
app.use(function (req, res, next) {
  res.status(404).render('frontend/error',{
  	session: req.session,
  	error: '404',
  	message: "The Page can't be found"
  });
});

app.use(function (req, res, next) {
  res.status(500).render('frontend/error',{
  	session: req.session,
  	error: '500',
  	message: 'Internal Server Error'
  });
});

app.listen(app.get('port'), function(){
	console.log('Server started on port ' + app.get('port'));
});