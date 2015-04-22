/**
 * @author
 Developer: Blake McMillian
 */
Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

$( document ).ready(function() {
   
	var currentUser = Parse.User.current();
	
	$("#usernameField").text(currentUser.get("username"));
	
	var rank = "Rank: "+currentUser.get("rank");
	
	$("#levelField").text(currentUser.get("level"));
	$("#rankField").text(rank);
	
});
