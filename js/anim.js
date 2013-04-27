Y.use('anim', function(Y) {

	var fadeOut = new Y.Anim({
	    node: '#search_container',
	    to: { opacity: 0 }
	});

	var fadeIn = new Y.Anim({
	    node: '#map_container',
	    to: { opacity: 100 }
	});

	var switchViews = function(e) {
		if(!checkData()) {
			return;
		}
	    e.preventDefault();
	    fadeOut.run();
	    initializeMap();
	    fadeIn.run();
	    codeAddress();
	};

	Y.one('#search_submit').on('click', switchViews);
});

function checkData() {
	if((Y.one('#calendarFromTxt').get('value') != "")
		&& (Y.one('#calendarToTxt').get('value') != "")
		&& (Y.one('#search_location').get('value') != ""))
		return true;
	return false;
}