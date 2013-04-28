Y.use('anim', function(Y) {

	var fadeOut = new Y.Anim({
	    node: '#search_container',
	    to: { opacity: 0 },
	    duration: 2
	});

	var fadeIn = new Y.Anim({
	    node: '#map_screen_wrapper',
	    to: { opacity: 100,
	    	  zIndex: 99 },
	    duration: 2
	});

	var switchViews = function(e) {
		if(!checkData()) {
			window.alert("Please enter a location, a start date and an end date");
			return;
		}

	    e.preventDefault();
	    fadeOut.run();
	    initializeMap();
	    fadeIn.run();
	    codeAddress();
	};

	Y.on('domready', function() {
		Y.one('#search_submit').on('click', switchViews);
	});
});

function checkData() {
	if((Y.one('#calendarFromTxt').get('value') != "")
		&& (Y.one('#calendarToTxt').get('value') != "")
		&& (Y.one('#search_location').get('value') != "")) {
		return true;
	}
	return false;
}