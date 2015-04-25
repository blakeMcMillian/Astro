/**
 * @author
 Developer: Blake McMillian
 */


$( document ).ready(function() {

	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");
   
	//Setting up the parse user field
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
	
	//Setting the username field
	$("#usernameField").text(currentUser.get("username"));
	
	//Setting the user rank field
	var rank = "Rank: "+currentUser.get("rank");
	$("#rankField").text(rank);

	//Setting the level for the user
	var level = "Level: "+currentUser.get("level");
	$("#levelField").text(level);

	
	//Getting the html from the progress bar
	var html = $("#progressbarField").html();
	//Getting the progress for a given user
	 var progress = currentUser.get("progress");

	//Setting the progressbar with data from parse
	$("#progressbarField").attr('data-pro-bar-percent', progress);

	$('#profilePicture').attr("src",currentUser.get("profilePicture").url());

	 $('#circle').circleProgress({
        value: 0.75,
        size: 80,
        fill: {
            gradient: ["red", "orange"]
        }
        
    });



	});


