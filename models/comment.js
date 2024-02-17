const { professorModel } = require("./professor");
const { reviewModel } = require("./review");

const commentData = [
  { "reviewId": 1, "studentId": 1170030, "commentContent": "Great review!" },
  { "reviewId": 2, "studentId": 1170024, "commentContent": "Interesting insights." },
  { "reviewId": 3, "studentId": 1170006, "commentContent": "Well-written analysis." },
  { "reviewId": 4, "studentId": 1170018, "commentContent": "I agree with your points." },
  { "reviewId": 5, "studentId": 1170045, "commentContent": "Nice job summarizing." },
  { "reviewId": 6, "studentId": 1170014, "commentContent": "I learned something new." },
  { "reviewId": 7, "studentId": 1170041, "commentContent": "Thanks for sharing your thoughts." },
  { "reviewId": 8, "studentId": 1170015, "commentContent": "Impressive review!" },
  { "reviewId": 9, "studentId": 1170029, "commentContent": "Well done!" },
  { "reviewId": 10, "studentId": 1170010, "commentContent": "Keep up the good work." },
  { "reviewId": 11, "studentId": 1170003, "commentContent": "Insightful analysis." },
  { "reviewId": 12, "studentId": 1170039, "commentContent": "I enjoyed reading this." },
  { "reviewId": 13, "studentId": 1170032, "commentContent": "Great points raised." },
  { "reviewId": 14, "studentId": 1170038, "commentContent": "Clear and concise." },
  { "reviewId": 15, "studentId": 1170002, "commentContent": "I appreciate your perspective." },
  { "reviewId": 16, "studentId": 1170022, "commentContent": "Interesting perspective." },
  { "reviewId": 17, "studentId": 1170028, "commentContent": "I found this very informative." },
  { "reviewId": 18, "studentId": 1170004, "commentContent": "Keep sharing your thoughts." },
  { "reviewId": 19, "studentId": 1170049, "commentContent": "Well articulated." },
  { "reviewId": 20, "studentId": 1170043, "commentContent": "I agree with your analysis." },
  { "reviewId": 21, "studentId": 1170048, "commentContent": "Well argued." },
  { "reviewId": 22, "studentId": 1170036, "commentContent": "Fascinating read." },
  { "reviewId": 23, "studentId": 1170020, "commentContent": "You make valid points." },
  { "reviewId": 24, "studentId": 1170040, "commentContent": "I enjoyed your perspective." },
  { "reviewId": 25, "studentId": 1170016, "commentContent": "Well presented." },
  { "reviewId": 26, "studentId": 1170047, "commentContent": "I found this enlightening." },
  { "reviewId": 27, "studentId": 1170007, "commentContent": "Great job!" },
  { "reviewId": 28, "studentId": 1170001, "commentContent": "You captured the essence well." },
  { "reviewId": 29, "studentId": 1170025, "commentContent": "I appreciate your insights." },
  { "reviewId": 30, "studentId": 1170046, "commentContent": "Excellent analysis." },
  { "reviewId": 31, "studentId": 1170012, "commentContent": "I found this thought-provoking." },
  { "reviewId": 32, "studentId": 1170044, "commentContent": "Well written and argued." },
  { "reviewId": 33, "studentId": 1170031, "commentContent": "I enjoyed reading your review." },
  { "reviewId": 34, "studentId": 1170023, "commentContent": "This resonates with me." },
  { "reviewId": 35, "studentId": 1170026, "commentContent": "You made some great points." },
  { "reviewId": 36, "studentId": 1170008, "commentContent": "Thanks for sharing your perspective." },
  { "reviewId": 37, "studentId": 1170042, "commentContent": "Great insights." },
  { "reviewId": 38, "studentId": 1170021, "commentContent": "You've presented this well." },
  { "reviewId": 39, "studentId": 1170037, "commentContent": "I agree with your analysis." },
  { "reviewId": 40, "studentId": 1170033, "commentContent": "Well articulated thoughts." },
  { "reviewId": 41, "studentId": 1170005, "commentContent": "Interesting points raised." },
  { "reviewId": 42, "studentId": 1170048, "commentContent": "You've captured the essence." },
  { "reviewId": 43, "studentId": 1170027, "commentContent": "Great job summarizing." },
  { "reviewId": 44, "studentId": 1170011, "commentContent": "I found this very helpful." },
  { "reviewId": 45, "studentId": 1170019, "commentContent": "You provide valuable insights." },
  { "reviewId": 46, "studentId": 1170047, "commentContent": "This is well-researched." },
  { "reviewId": 47, "studentId": 1170034, "commentContent": "Well articulated arguments." },
  { "reviewId": 48, "studentId": 1170009, "commentContent": "Insightful analysis." },
  { "reviewId": 49, "studentId": 1170035, "commentContent": "I appreciate your perspective." },
  { "reviewId": 50, "studentId": 1170049, "commentContent": "Great work!" }
];

module.exports = commentData;

// exports.getAll = function(query, next) {
// 	commentModel.find(query).populate('reviewRef').populate('studentRef').exec(function(err, result){
// 		if (err) throw err;
// 		var commentObject = [];

// 		result.forEach(function(document){
// 			commentObject.push(document.toObject());
// 		});

// 		next(commentObject);
// 	});
// };

// exports.getAllProfile = function(query, next) {
// 	commentModel.find(query).populate({path: 'reviewRef', model: 'review', populate: { path: 'profRef', model: 'professor'}}).populate('studentRef').sort({_id:-1}).exec(function(err, result){
// 		var commentObject = [];
// 		var comment;

// 		result.forEach(function(document){
// 			comment = document.toObject();
// 			comment['profDetails'] = document.reviewRef.profRef.toObject();
// 			commentObject.push(comment);
// 		});
// 		next(commentObject);
// 	});
// };

// exports.countAll = function(query) {
// 	return commentModel.countDocuments(query).populate('reviewRef').populate('studentRef');
// };

// exports.create = function(object, next) {
// 	const newComment = new commentModel(object);
// 	newComment.save(function(err, newComment){
// 		next(err, newComment);
// 	});
// }

// exports.edit = function(query, next){
// 	commentModel.findOne(query).populate('reviewRef').exec(function(err, result){
// 		if (err) throw err;
// 		next(err, result);
// 	});
// }

// exports.delete = function(id, next) {
// 	commentModel.deleteOne({{_id: id}).exec(function (err) {
// 		if (err) throw err;
// 		next(err);
// 	});
// }
