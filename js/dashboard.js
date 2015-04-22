/**
 * @author
 Developer: Blake McMillian
 */
Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

$( document ).ready(function() {
   
	var currentUser = Parse.User.current();
	alert(currentUser.get("username"));
});
