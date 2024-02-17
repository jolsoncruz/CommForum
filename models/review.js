const { professorModel } = require("./professor");
const userModel = require("./user");

const reviewModel = [
    {
        profNumber: 1,
        studentId: 1170001,
        reviewContent: "Great professor! Very knowledgeable and approachable."
    },
    {
        profNumber: 2,
        studentId: 1170002,
        reviewContent: "Clear explanations and helpful examples."
    },
    {
        profNumber: 3,
        studentId: 1170003,
        reviewContent: "Engaging teaching style, makes the material interesting."
    },
    {
        profNumber: 4,
        studentId: 1170004,
        reviewContent: "Encourages student participation and discussion."
    },
    {
        profNumber: 5,
        studentId: 1170005,
        reviewContent: "Provides useful feedback to improve learning."
    },
    {
        profNumber: 6,
        studentId: 1170006,
        reviewContent: "Approachable and willing to help outside of class."
    },
    {
        profNumber: 7,
        studentId: 1170007,
        reviewContent: "Well-organized lectures and course materials."
    },
    {
        profNumber: 8,
        studentId: 1170008,
        reviewContent: "Challenges students to think critically."
    },
    {
        profNumber: 9,
        studentId: 1170009,
        reviewContent: "Creates a positive learning environment."
    },
    {
        profNumber: 10,
        studentId: 1170010,
        reviewContent: "Provides valuable insights that go beyond the textbook."
    },
    {
        profNumber: 11,
        studentId: 1170011,
        reviewContent: "Provides real-world examples that enhance understanding."
    },
    {
        profNumber: 12,
        studentId: 1170012,
        reviewContent: "Encourages collaboration among students."
    },
    {
        profNumber: 13,
        studentId: 1170013,
        reviewContent: "Organizes material in a logical and easy-to-follow manner."
    },
    {
        profNumber: 14,
        studentId: 1170014,
        reviewContent: "Engages students in thought-provoking discussions."
    },
    {
        profNumber: 15,
        studentId: 1170015,
        reviewContent: "Provides timely feedback on assignments and exams."
    },
    {
        profNumber: 16,
        studentId: 1170016,
        reviewContent: "Clearly outlines expectations for the course."
    },
    {
        profNumber: 17,
        studentId: 1170017,
        reviewContent: "Adapts teaching methods to suit different learning styles."
    },
    {
        profNumber: 18,
        studentId: 1170018,
        reviewContent: "Encourages critical thinking and problem-solving skills."
    },
    {
        profNumber: 19,
        studentId: 1170019,
        reviewContent: "Creates an inclusive classroom environment."
    },
    {
        profNumber: 20,
        studentId: 1170020,
        reviewContent: "Provides valuable insights beyond the course material."
    },
    {
        profNumber: 21,
        studentId: 1170021,
        reviewContent: "Patient and understanding towards student needs."
    },
    {
        profNumber: 22,
        studentId: 1170022,
        reviewContent: "Makes complex topics easy to understand."
    },
    {
        profNumber: 23,
        studentId: 1170023,
        reviewContent: "Approachable and open to questions during lectures."
    },
    {
        profNumber: 24,
        studentId: 1170024,
        reviewContent: "Encourages independent thinking and exploration."
    },
    {
        profNumber: 25,
        studentId: 1170025,
        reviewContent: "Provides helpful resources for additional study."
    },
    {
        profNumber: 26,
        studentId: 1170026,
        reviewContent: "Passionate about the subject and conveys enthusiasm."
    },
    {
        profNumber: 27,
        studentId: 1170027,
        reviewContent: "Gives constructive feedback to improve performance."
    },
    {
        profNumber: 28,
        studentId: 1170028,
        reviewContent: "Encourages a positive attitude towards learning."
    },
    {
        profNumber: 29,
        studentId: 1170029,
        reviewContent: "Welcomes diverse perspectives and opinions."
    },
    {
        profNumber: 30,
        studentId: 1170030,
        reviewContent: "Provides real-world examples that relate to the material."
    },
    {
        profNumber: 31,
        studentId: 1170031,
        reviewContent: "Engages students through interactive activities."
    },
    {
        profNumber: 32,
        studentId: 1170032,
        reviewContent: "Encourages students to think critically about the material."
    },
    {
        profNumber: 33,
        studentId: 1170033,
        reviewContent: "Creates a supportive learning environment."
    },
    {
        profNumber: 34,
        studentId: 1170034,
        reviewContent: "Provides clear guidelines for assignments and exams."
    },
    {
        profNumber: 35,
        studentId: 1170035,
        reviewContent: "Respects diverse backgrounds and experiences."
    },
    {
        profNumber: 36,
        studentId: 1170036,
        reviewContent: "Gives relevant and practical examples during lectures."
    },
    {
        profNumber: 37,
        studentId: 1170037,
        reviewContent: "Adapts teaching methods to accommodate different learning styles."
    },
    {
        profNumber: 38,
        studentId: 1170038,
        reviewContent: "Encourages students to ask questions and seek clarification."
    },
    {
        profNumber: 39,
        studentId: 1170039,
        reviewContent: "Provides opportunities for hands-on learning."
    },
    {
        profNumber: 40,
        studentId: 1170040,
        reviewContent: "Encourages critical thinking and problem-solving skills."
    },
    {
        profNumber: 41,
        studentId: 1170041,
        reviewContent: "Creates a collaborative learning environment."
    },
    {
        profNumber: 42,
        studentId: 1170042,
        reviewContent: "Provides feedback that helps students grow academically."
    },
    {
        profNumber: 43,
        studentId: 1170043,
        reviewContent: "Encourages students to explore new ideas and concepts."
    },
    {
        profNumber: 44,
        studentId: 1170044,
        reviewContent: "Provides opportunities for practical application of knowledge."
    },
    {
        profNumber: 45,
        studentId: 1170045,
        reviewContent: "Encourages active participation in class discussions."
    },
    {
        profNumber: 46,
        studentId: 1170046,
        reviewContent: "Provides valuable feedback to help students improve."
    },
    {
        profNumber: 47,
        studentId: 1170047,
        reviewContent: "Adapts teaching methods to meet student needs."
    },
    {
        profNumber: 48,
        studentId: 1170048,
        reviewContent: "Engages students with relevant and interesting examples."
    },
    {
        profNumber: 49,
        studentId: 1170049,
        reviewContent: "Provides encouragement and support to all students."
    },
    {
        profNumber: 50,
        studentId: 1170050,
        reviewContent: "Overall, a great professor. Would highly recommend!"
    }
];

function getRecentReviews(count) {
    const recentReviews = reviewModel.slice(count).map(review => {
        const professor = professorModel.find(prof => prof.profNumber === review.profNumber);
        const user = userModel.find(user => user.studentId === review.studentId);
        return {
            profName: professor.profName,
            profCourse: professor.profCourse,
            studentName: user.studentName,
            ...review
        };
    })

    return recentReviews;
}

module.exports = { reviewModel, getRecentReviews} ;

// exports.count = function(query, next) {
// 	reviewModel.countDocuments(query, function(err, result){
// 		if (err) throw err;
// 		next(result);
// 	});
// };

// exports.countAll = function(query) {
// 	return reviewModel.countDocuments(query);
// };

// exports.getAll = function(query, next) {
// 	reviewModel.find(query).populate('profRef').populate('studentRef').sort({_id:-1}).exec(function(err,result){
// 		var reviewObject = [];

// 		result.forEach(function(document){
// 			reviewObject.push(document.toObject());
// 		});

// 		next(reviewObject);
// 	});
// };

// exports.getAllLean = function(query) {
// 	return reviewModel.find(query).populate('profRef').populate('studentRef').sort({_id:-1}).lean().exec();
// };

// exports.getRev = function(query, next) {
// 	reviewModel.findOne(query).populate('profRef').populate('studentRef').exec(function(err, result){
// 		if (err) throw err;
// 		next(result);
// 	});
// };

// exports.getLimited = function(limit, next) {
// 	reviewModel.find({}).populate('profRef').populate('studentRef').sort({_id:-1}).limit(limit).exec(function(err,result){
// 		if (err) throw err;
// 		var reviewObject = [];

// 		result.forEach(function(document){
// 			reviewObject.push(document.toObject());
// 		});

// 		next(reviewObject);
// 	});
// };

// exports.getProf = function(profRef, next) {
// 	reviewModel.find(profRef).populate('profRef').populate('studentRef').sort({_id:-1}).exec(function(err, result){
// 		if (err) throw err;
// 		var reviewObject = [];

// 		result.forEach(function(document){
// 			reviewObject.push(document.toObject());
// 		});

// 		next(reviewObject);
// 	});
// };

// exports.create = function(object, next) {
// 	const newReview = new reviewModel(object);
// 	newReview.save(function(err, newReview) {
// 		next(err, newReview);
// 	});
// };

// exports.getRevUpdate = function(query, next) {
// 	reviewModel.findOne(query).populate('profRef').populate('studentRef').exec(function(err, result){
// 		if (err) throw err;
// 		next(err, result);
// 	});
// };

// exports.remove = function(query, next) {
// 	reviewModel.deleteOne(query, function(err) {
// 		if (err) throw err;
// 		next(err);
// 	});
// };
