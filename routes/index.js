var mongoose = require('mongoose');
var city = require('../model/city');
var rentJSON = require('../data/rent.json');
var fs = require('fs');

/*
 * GET home page.
 */
exports.index = function(req, res){
	var newJSON = [];
	for(var i = 0; i < rentJSON.length; i++){
		if(rentJSON[i].Ref_Date == 2013){
			newJSON.push(rentJSON[i]);
			console.log(rentJSON[i]);
		}
	}
	var outfile = "../data/newRent.json";
	fs.writeFile(outfile, JSON.stringify(newJSON), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to " + outfile);
	    }
	});
	//city.enterAll();
};

