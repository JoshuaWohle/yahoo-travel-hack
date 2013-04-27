function initialize() {
	var mapOptions = {
		zoom : 8,
		center : new google.maps.LatLng(51.5171, 0.1062),
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("map_container"),
			mapOptions);
}