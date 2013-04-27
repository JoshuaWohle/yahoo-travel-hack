var uri = "http://frozen-woodland-9065.herokuapp.com/trip/plan";

function getPlacesOfInterest(lat, long, startDate, endDate) {
	var lat = lat;
	var long = long;
	var startDate = new Date(startDate);
	var endDate = new Date(endDate);

	var jsonData = '{"lat": ' + lat + ', "long": ' + long + ', "start_date": ' + startDate.getTime() + ', "end_date": ' + endDate.getTime() + '}';

	var url = uri + "/" + lat + "/" + long + "/" + startDate.getTime() + "/" + endDate.getTime();
	console.log(uri);
	/*$.getJSON(url,
			  function (r) {
				populateLocations(data);
			});*/

	$.ajax({
		  type: "POST",
		  url: uri,
		  data: jsonData,
		  success: populateLocations
		});
}

function populateLocations(data) {
	console.log("populating locations. ID: " + data);
}