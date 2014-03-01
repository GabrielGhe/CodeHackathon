var mongoose = require('mongoose');

var citySchema = new mongoose.Schema({
	YEAR : Number, 
	NAME : String,
	CAT1 : String,
	CAT2 : String
});

citySchema.statics.saveSingle = function(obj, cb){
	console.log(obj);
	var file = new this(obj).save(cb);
	console.log("Entry added to Database");
}

citySchema.statics.getAll = function(res){
	City.find(
        {},
        function(err, docs) {
        if (!err){ 
           res.render('index', {
				title: 'Awesome App',
				all: docs
			});
        } else { 
        	throw err;
        }
    });
}

module.exports = mongoose.model('City', citySchema, "City");

