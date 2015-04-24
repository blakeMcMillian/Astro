/**
 * @author
 */
$( document ).ready(function() {
	
	//Reinitilizng Parse
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

	//Getting the name of the challenges from the previous page
	var currentUser = Parse.User.current();
	currentUser.fetch({
	  success: function(currentUser) {
	    // The object was refreshed successfully.
	    var challengeName = currentUser.get('currentChallenge');
		$('#nameofchallenge').text(challengeName);
		//Query the challenge types
		var challenges = Parse.Object.extend("Challenges");
		var query = new Parse.Query(challenges);
		query.equalTo("challengeType", challengeName);
		query.find({
			  success: function(results) {
			    // Do something with the returned Parse.Object values
			    for (var i = 0; i < results.length; i++) 
			    { 
			      var object = results[i];
			      $('#challengeList').append('<li class=\"row\"><a class=\"challengesButton col-sm-1\" href=\"#\"></a><p class=\"col-sm-offset-1\">'+object.get('challengeName')+'</p></li>');

			    }
			  },
			  error: function(error) {
			    alert("Error: " + error.code + " " + error.message);
			  }
	});
	  },
	  error: function(currentUser, error) {
	    // The object was not refreshed successfully.
	    // error is a Parse.Error with an error code and message.
	  }
	});

$('#nameofchallenge').fadein();
$('#challengeList').fadein();
	
	




   
});
