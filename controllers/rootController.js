//Import Models
const collegeModel = require('../models/college');
const { getRandomProfessors } = require('../models/professor');
const { getRecentReviews } = require('../models/review');

exports.loadHome = function(req, res){
	const recentReviews = getRecentReviews(-10);
	const featuredProfessors = getRandomProfessors(3);
	
	res.render('frontend/home',{
		session: req.session,
		colleges: collegeModel,
		data: featuredProfessors,
		review: recentReviews,
		title: 'Home',
		jumbotronImage: '/assets/headers/home_header.jpg',
		jumbotronHeader: 'Welcome to CommForum',
		jumbotronMessage: 'This online platform aims to address all the concerns, judgment, and comments made by the students and alumni while maintaining a healthy and non-toxic environment in which the Lasallian Core Values are portrayed.',
		jumbotronLink: '/colleges',
		jumbotronBtn: 'View Colleges'
	});
};