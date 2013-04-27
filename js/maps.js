var geocoder;
var map;
var locations;

function initializeMap() {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
		zoom : 8,
		center : new google.maps.LatLng(51.5171, 0.1062),
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById("map_container"),
			mapOptions);
	setLocations();
	drawLocations();
};

function codeAddress() {
	var address = document.getElementById("search_location").value;
	geocoder.geocode({
		'address' : address
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			getPlacesOfInterest(results[0].geometry.location.lat(),
					results[0].geometry.location.lng(),
		    		Y.one('#calendarFromTxt').get('value'),
		    		Y.one('#calendarFromTxt').get('value'));
		} else {
			alert("Geocode was not successful for the following reason: "
					+ status);
		}
	});
};

function setLocations() {
	  locations = [['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]];
};

function drawLocations() {

	var infowindow = new google.maps.InfoWindow();

    var marker, i;

	for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2])
        });

        marker.setMap(map);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }

}