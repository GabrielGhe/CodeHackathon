  var geocoder;
  var map;
  /* global variable to store which city user inputted so that we
  can use it to generate a chart */
  var address;
  // this function will output a marker for the city directly on the map based on the argument you pass it
  function codeAddress(city) {
    address = city;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

 // same as function above but takes user input from textbox
  function codeAddress2() {
      var address = document.getElementById('namesInput').value;
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }

var name;
var cat1;
var cat2;
var year;
function make_graph(){
   var barChartData = {
      labels : ["YEAR", "TESTER1", "TESTER2"],
      datasets : [
        {
          fillColor : "rgba(220,220,220,0.5)",
          strokeColor : "rgba(220,220,220,1)",
          data : [parseInt(year), 1000, 2000]
        },
      ]

    }

  var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData);
}

// assign object's properties to variables for use in graph
function assign(cityname) {
  name = cityname.NAME;
  cat1 = cityname.CAT1;
  cat2 = cityname.CAT2;
  year = cityname.YEAR;
}

$(document).ready(function(){
// get the json object
  $.ajax({ 
    type: 'GET', 
    url: "http://localhost:3000/name" + "/Vancouver", 
    dataType: 'json',
    success: function (data) { 
      assign(data);
    }
});

// google maps api

  function initialize() {
    geocoder = new google.maps.Geocoder();
    var mapOptions = {
      zoom: 3,
      center: new google.maps.LatLng(45.3, -73.34)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    setUpAutoComplete(); // setting up autocomplete
  }

  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
  }


  initialize();

  // makes a marker at the designated longitude and lattitude, not useful anymore now that there's codeAddress()
  function make_marker(lat, lng){
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: map,
    });

  };

  function setUpAutoComplete(){
    $("#namesInput").autocomplete({
      source: nameArr
    });
  }

  //make_marker(45.3, -73.34);

   //codeAddress('London, Ontario');
});
