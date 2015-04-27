/**
 * @author
 */
$( document ).ready(function() {
	
	//Reinitilizng Parse
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");
	var currentUser = Parse.User.current();
	//setting the inital image to the users default image
	$("#profileImage").attr("src",currentUser.get("profilePicture").url());


	var pagePosition = 0;
	var profileImageArray = [];
	

	 var profilePicture = Parse.Object.extend("ProfilePictures");
	 var query = new Parse.Query(profilePicture);
	 query.find({
 	 success: function(results) {
    // comments now contains the comments for myPost
       	for(var i = 0; i < results.length; i++)
    	{
    		profileImageArray.push(results[i]);	
    		
    	}
    	
	  }
	});
	

	$(".buttonNext").click(function(e){

	    	pagePosition++;
	    	pagePosition = pagePosition%profileImageArray.length;
	    	$("#profileImage").attr("src",profileImageArray[pagePosition].get('largeImage').url());
	});
	$(".buttonPrevious").click(function(e){

			pagePosition--
			pagePosition = pagePosition%profileImageArray.length;
			pagePosition = Math.abs(pagePosition);
			$("#profileImage").attr("src",profileImageArray[pagePosition].get('largeImage').url());
	});

		$(".button_1").click(function(e){

			userSelections[pagePosition-1] = 'one';
			

			jQuery('#choice1').css('opacity', '1.0');
			jQuery('#choice2').css('opacity', '0.5');
			jQuery('#choice3').css('opacity', '0.5');
			jQuery('#choice4').css('opacity', '0.5');
			
		    
		});
		$(".button_2").click(function(e){
		
			userSelections[pagePosition-1] = 'two';
			

			jQuery('#choice1').css('opacity', '0.5');
			jQuery('#choice2').css('opacity', '1.0');
			jQuery('#choice3').css('opacity', '0.5');
			jQuery('#choice4').css('opacity', '0.5');

		    
		});
		$(".button_3").click(function(e){
			
			userSelections[pagePosition-1] = 'three';
			

			jQuery('#choice1').css('opacity', '0.5');
			jQuery('#choice2').css('opacity', '0.5');
			jQuery('#choice3').css('opacity', '1.0');
			jQuery('#choice4').css('opacity', '0.5');

		    
		});
		$(".button_4").click(function(e){

			userSelections[pagePosition-1] = 'four';
			

			jQuery('#choice1').css('opacity', '0.5');
			jQuery('#choice2').css('opacity', '0.5');
			jQuery('#choice3').css('opacity', '0.5');
			jQuery('#choice4').css('opacity', '1.0');
		    
		});

		





});
