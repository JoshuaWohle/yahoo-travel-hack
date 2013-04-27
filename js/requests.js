var uri = "http://frozen-woodland-9065.herokuapp.com/trip/plan";

function getPlacesOfInterest(lat, long, startDate, endDate) {
	var lat = lat;
	var long = long;
	var startDate = new Date(startDate);
	var endDate = new Date(endDate);

	var url = uri + "/" + lat + "/" + long + "/" + startDate.getTime() + "/" + endDate.getTime();
	console.log(url);
	$.getJSON(url,
			  function (r) {
				populateLocations(data);
			});
}

function populateLocations(data) {
	console.log("populating locations. ID: " + data);
}