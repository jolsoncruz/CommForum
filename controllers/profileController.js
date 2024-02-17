//Import Models
const commentModel = require('../models/comment');
const { getRecentReviews } = require('../models/review');

exports.loadProfile = function(req, res){
	const reviews = getRecentReviews().filter(review => review.studentId == req.session.studentId);
	const comments = commentModel.filter(comment => comment.studentId == req.session.studentId);
	res.render('frontend/profile',{
		session: req.session,
		reviews: reviews,
		comments: comments,
		title: 'Profile',
		jumbotronImage: '/assets/headers/user_header.jpg',
		jumbotronHeader: 'Hello ' + req.session.nickname + ',',
		jumbotronMessage: "This page shows your most recent contribution to the DLSU Community Forum. You may also change your password through the form below.",
		jumbotronBtn: 'Back to Homepage',
		jumbotronLink: '/'
	});
};