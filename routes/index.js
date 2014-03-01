var mongoose = require('mongoose');
var city = require('../model/city');
var rentJSON = require('../data/rent.json');
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
	for(var i = 0; i < rentJSON.length; i++){
		console.log(rentJSON[i]);
		console.log("");
		console.log("");
	}
	
	//city.enterAll();
	
	//render
	res.render('index', {
		title: 'Awesome App'
	});
};

