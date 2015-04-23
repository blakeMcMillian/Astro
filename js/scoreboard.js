/**
 * @author
 */
$( document ).ready(function() {

	//Registering using parse authentication
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

	//users
	var usersArray = [];

	//Querying the users in the Parse database
	var query = new Parse.Query(Parse.User);
	query.limit(10);
	query.ascending("rank");
	query.find({
	  success: function(results) 
	  {
	  	//Iterating over the top users in the database
	  	for (var i = 0; i < results.length; i++) { 
	      var object = results[i];
	      $('#scoreboardList').append('<li class=\"row\"><a class=\"challengesButton col-sm-1\" href=\"#\"></a><p class=\"col-sm-offset-1\">'+object.get('username')+'</p></li>');
	    }

	  }//success

	});	
   
});
