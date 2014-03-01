var mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
	NAME : String,
	CAT1 : String,
	CAT2 : String
});

citySchema.statics.enterAll = function(){
	console.log("enterAll works!");
}

module.exports = mongoose.model('City', citySchema);

