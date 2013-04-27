var Y = YUI();
// Create a new YUI instance and populate it with the required modules.
Y.use('autocomplete', function(Y) {
	// AutoComplete is available and ready for use. Add implementation
	// code here.
});

Y.use('calendar', function(Y) {

	// Create a new instance of Calendar, setting its width
	// and height, allowing the dates from the previous
	// and next month to be visible and setting the initial
	// date to be November, 1982.
	var calendar = new Y.Calendar({
		contentBox : "#calendarFrom",
		height : '300px',
		width : '300px',
		showPrevMonth : true,
		showNextMonth : true,
		date : new Date()
	}).render();

	var calendar2 = new Y.Calendar({
		contentBox : "#calendarTo",
		height : '300px',
		width : '300px',
		showPrevMonth : true,
		showNextMonth : true,
		date : new Date()
	}).render();

});