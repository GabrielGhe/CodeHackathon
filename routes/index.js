var mongoose = require('mongoose');
var CityModel = require('../model/city');
var City = mongoose.model('City');
var rent = require('../data/rent.json');
var fs = require('fs');

/*
 * GET home page.
 */
exports.index = function(req, res){
	/*
	var newJSON = [];
	var fname = "./data/newRent.json";

	for(var i = 0; i < rentJSON.length; i++){
		if(rentJSON[i].Ref_Date == 2013){
			newJSON.push(rentJSON[i]);
		}
	}
	
	fs.writeFile(fname, newJSON, function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to ");
	    }
	});
	*/

	
	// for(var i = 0; i < rent.length; i++){
	// 	var obj = {
	// 		YEAR : rent[i].Ref_Date, 
	// 		NAME : rent[i].GEO,
	// 		CAT1 : rent[i].UNIT,
	// 		CAT2 : rent[i].VALUE
	// 	};
	// 	console.log(obj);
	// 	City.saveSingle(obj, function(err, doc){
	// 		if(err)
	// 			console.log("Did not save");
	// 	    else {
	// 			console.log("Saved " + doc._id);
	// 	    }
	// 	});
	// 	console.log("");
	// 	console.log("");
	// }
	
	
	//render
	res.render('index', {
		title: 'Awesome App'
	});
};

