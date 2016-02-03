

 
function initialize_gmaps() {

  // initialize new google maps LatLng object
  var myLatlng = new google.maps.LatLng(40.705189, -74.009209);

  // set the map options hash
  var mapOptions = {
    center: myLatlng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    // styles: styleArr
  };

  // get the maps div's HTML obj
  var map_canvas_obj = document.getElementById('map-canvas');

  // initialize a new Google Map with the options
  var map = new google.maps.Map(map_canvas_obj, mapOptions);

  // add the marker to the map
  var marker = new google.maps.Marker({
    position: myLatlng,
    title: 'Hello World!'
  });


var hotelLocation = [];
var restaurantLocations = [];
var activityLocations = [];



  drawLocation(hotelLocation, {
    icon: '/images/lodging_0star.png'
  });

  restaurantLocations.forEach(function(loc) {
    drawLocation(loc, {
      icon: '/images/restaurant.png'
    });
  });
  activityLocations.forEach(function(loc) {
    drawLocation(loc, {
      icon: '/images/star-3.png'
    });
  });

  
  // draw some locations on the map
  function drawLocation(location, opts) {
    if (typeof opts !== 'object') {
      opts = {};
    }
    opts.position = new google.maps.LatLng(location[0], location[1]);
    opts.map = map;
    var marker = new google.maps.Marker(opts);
  }



  return map;
}

var mapInit = initialize_gmaps();


// function redoGmaps(){

// }

$(document).ready(function() {
  initialize_gmaps();
});








