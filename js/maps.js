var geocoder;
var map;

function initializeMap() {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
		zoom : 8,
		center : new google.maps.LatLng(51.5171, 0.1062),
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById("map_container"),
			mapOptions);
}

function codeAddress() {
    var address = document.getElementById("search_location").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }