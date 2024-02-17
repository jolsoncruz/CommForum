//Import Models
const collegeModel = require('../models/college');
const { professorModel } = require('../models/professor');
const { getRecentReviews } = require('../models/review');

exports.getAllProfs = function(req, res){
    const professors = professorModel;
    
    if(professors.length === 0){
        res.render('frontend/error',{
            session: req.session,
            error: '404',
            message: "The Page can't be found"
        });
    }
    else{
        res.render('frontend/professors',{
            session: req.session,
            professor: professors,
            title: 'Professors',
            jumbotronImage: '/assets/headers/colpage_header.jpg',
            jumbotronHeader: 'Professors',
            jumbotronMessage: 'The Professors of De La Salle University aims to provide all the students with the necessary learning tools in obtaining knowledge to maximize all the skills and talents one must possess before being deployed to their chosen careers.',
            jumbotronLink: '/',
            jumbotronBtn: 'Back to Homepage',
        });
    }
};

exports.getProfData =  function(req, res){
    const professor = professorModel.find(professor => professor.profNumber == req.params.id);
    const college = collegeModel.find(college => college.shortName === professor.college);
    const reviews = getRecentReviews().filter(review => review.profNumber == professor.profNumber);

    if(professor === null){
        res.render('frontend/error',{
            session: req.session,
            error: '404',
            message: "The Page can't be found"
        });
    }
    else{
        res.render('frontend/profpage',{
            session: req.session,
            studentRef: req.session.studentRef,
            studentId: req.session.idNum,
            professor: professor,
            college: college,
            reviews: reviews,
            jumbotronImage: '/assets/headers/profpage_header.jpg',
            jumbotronHeader: professor.profName,
            jumbotronMessage: 'An exemplary Lasallian educator who teach minds, touch hearts, and transform lives by diligently teaching ' + professor.profCourse + ' from the ' + college.longName + '.',
            jumbotronLink: '/',
            jumbotronBtn: 'Back to Homepage',
            title: professor.profName
        });
    }
}