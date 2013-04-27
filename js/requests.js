var uri = "http://frozen-woodland-9065.herokuapp.com/trip/plan";

function getPlacesOfInterest(lat, long, startDate, endDate) {

	var lat = lat;
	var long = long;
	var startDate = startDate;
	var endDate = endDate;

	// JSON.parse throws a SyntaxError when passed invalid JSON
	try {
		var jsondata = Y.JSON.parse(jsonString);
	} catch (e) {
		alert("Invalid product data");
	}

	// Make an HTTP request to 'get.php'.
	// NOTE: This transaction does not use a configuration object.
	var url = uri + "/" + lat + "/" + long + "/" + startDate + "/" + endDate;
	console.log(url);
	$.getJSON(url,
			  function (r) {
				populateLocations(data);
			});
}

function populateLocations(data) {
	console.log("populating locations. ID: " + data);
}