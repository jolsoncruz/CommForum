//Import Models
const collegeModel = require('../models/college');
const { professorModel } = require('../models/professor');
const commentModel = require('../models/comment');
const { getRecentReviews, reviewModel } = require('../models/review');

exports.getAllRevCount = async function(req,res){
    const reviews = getRecentReviews(-50);

    res.render('frontend/reviews', {
        session: req.session,
        review: reviews,
        colleges: collegeModel,
        title: 'Reviews',
        jumbotronImage: '/assets/headers/profpage_header.jpg',
        jumbotronHeader: 'Reviews',
        jumbotronMessage: 'The review page displays all the reviews made by the students and alumni regarding relevant experiences and interactions with the university professors.',
        jumbotronLink: '/',
        jumbotronBtn: 'Back to Homepage'
    });
};

exports.getReview = function(req,res){
    const review = getRecentReviews().find(rev => rev.reviewId == req.params.id);

    if(review == null){
        res.render('frontend/error',{
            session: req.session,
            error: '404',
            message: "The Page can't be found"
        });
    } else{
        const professor = professorModel.find(professor => review.profNumber == professor.profNumber);
        const college = collegeModel.find(college => college.shortName == professor.college);
        const comments = commentModel.filter(comment => comment.reviewId == review.reviewId);
        res.render('frontend/revpage', {
            session: req.session,
            comment: comments,
            professor: professor,
            review: review,
            title: "Review on " + professor.profName,
            jumbotronImage: '/assets/headers/profpage_header.jpg',
            jumbotronHeader: professor.profName,
            jumbotronMessage: 'An exemplary Lasallian educator who teach minds, touch hearts, and transform lives by diligently teaching ' + professor.profCourse + ' from the ' + college.longName + '.',
            jumbotronLink: '/',
            jumbotronBtn: 'Back to Homepage'
        });
    }
};
