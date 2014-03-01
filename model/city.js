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

citySchema.statics.getCityNames = function(res, City){
	City.find().distinct('NAME', function(err, nameArr) {
    	if (!err){ 
			console.log(nameArr);
			res.render('index', {
				title: 'Awesome App',
				names: nameArr
			});
        } else { 
        	throw err;
        }
	});
}

citySchema.statics.getCityByName = function(res){
	//http://stackoverflow.com/questions/5373987/how-to-use-jquery-ajax-calls-with-node-js
	var x = {
		YEAR : 1234, 
		NAME : "such",
		CAT1 : "doge",
		CAT2 : "wow"
	};
	res.writeHead(200, {"Content-Type": "application/json"});
	console.log("Inside City model returning");
	console.log(x);
	res.end(JSON.stringify(x));
}

module.exports = mongoose.model('City', citySchema, "City");

