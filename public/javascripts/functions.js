

$(document).ready(function(){
// google maps api

  var map;
  function initialize() {
    var mapOptions = {
      zoom: 3,
      center: new google.maps.LatLng(45.3, -73.34)
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
  }

  function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
  }

  function tester() {
    console.log("worked");

  }

  initialize();


  function make_marker(lat, lng){
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lng),
      map: map,
    });

  };

  make_marker(45.3, -73.34);
  make_marker(45.3, -45.00);

  // var marker1 = new google.maps.Marker({
  //   position: new google.maps.LatLng(45.3, -73.34),
  //   map: map,
  //   title:"Hello World!"
  // });


function codeAddress() {
  var address = document.getElementById('address').value;
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
});

// window.onload = loadScript;