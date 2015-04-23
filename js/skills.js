/**
 * @author
 */
$( document ).ready(function() {

	//Registering using parse authentication
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

	//Getting the current user from parse
	var currentUser = Parse.User.current();

	//Refreshing the User Instance
	currentUser.fetch({
	  success: function(currentUser) {
	    // The object was refreshed successfully.
	  },
	  error: function(currentUser, error) {
	    // The object was not refreshed successfully.
	    // error is a Parse.Error with an error code and message.
	  }
	});

	//Getting all of the skill levels from parse
	var timetrial = currentUser.get('timetrialSkill')+'%';
	var memory = currentUser.get('memorySkill')+'%';
	var recognition = currentUser.get('recognitionSkill')+'%';
	var definition = currentUser.get('definitionsSkill')+'%';
	var aboveandbeyond = currentUser.get('aboveandbeyondSkill')+'%';

	//Timetrial
	if(!timetrial)
	$('#timetrialpercentage').css('width','0');
		else
	$('#timetrialpercentage').css('width',timetrial);

	//Memory
	if(!memory)
	$('#memorypercentage').css('width','0');
		else
	$('#memorypercentage').css('width',memory);

	//Recognition
	if(!recognition)
	$('#recognitionpercentage').css('width','0');
		else
	$('#recognitionpercentage').css('width',recognition);

	//Definitions
	if(!definition)
	$('#definitionspercentage').css('width','0');
		else
	$('#definitionspercentage').css('width',definition);

	//Aboveandbeyond
	if(!aboveandbeyond)
	$('#aboveandbeyondpercentage').css('width','0');
		else
	$('#aboveandbeyondpercentage').css('width',aboveandbeyond);


   
});
