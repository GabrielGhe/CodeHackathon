var mongoose = require('mongoose');
var city = require('../model/city');


/*
 * GET home page.
 */

exports.index = function(req, res){
  city.enterAll();
  res.render('index', { title: 'Express' });
};