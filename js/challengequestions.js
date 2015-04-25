/**
 * @author
 */
$( document ).ready(function() {
	
	//Reinitilizng Parse
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

	var pagePosition = 1;
	var questionArray = new Array();
	var userSelections = new Array();
	var numericalPosition = 0;

	 var challengeQuestions = Parse.Object.extend("Questions");
	 var query = new Parse.Query(challengeQuestions);
	 query.ascending("order");
	 query.equalTo("challengeId", "RW5rRUpIU9");
	 query.find({
 	 success: function(results) {
    // comments now contains the comments for myPost
    for (var i = 0; i < results.length; i++) 
    { 
    	//pushing empty elements into the array
    	userSelections.push = "";
      questionArray.push(results[i]);
     // Load the inital questionsPrompt
     if(i === results.length-1){
     		 $('#questionInstructions').text(pagePosition);
		      //Load the inital question
		      $('.questionText').text(results[i].get('question'));
		      //Load answer choice one
		      $('.questionChoiceOne').text(results[i].get('answerChoiceOne'));
		      //Load answer choice two
		      $('.questionChoiceTwo').text(results[i].get('answerChoiceTwo'));
		      //Load answer choice three
		      $('.questionChoiceThree').text(results[i].get('answerChoiceThree'));
		      //Load answer choice four
		      $('.questionChoiceFour').text(results[i].get('answerChoiceFour'));
     } 
		      
    }
    
  }
});
	

	$(".buttonNext").click(function(e){
	    
	    if(pagePosition < questionArray.length)
	    {
	    	//Resetting the opacity
	    	jQuery('#choice1').css('opacity', '1.0');
			jQuery('#choice2').css('opacity', '1.0');
			jQuery('#choice3').css('opacity', '1.0');
			jQuery('#choice4').css('opacity', '1.0');

	    	//Incrementing the page count
	    	pagePosition++;
	    	numericalPosition = questionArray.length - pagePosition;

	    	$('#questionInstructions').text(pagePosition);
		      //Load the inital question
		      $('.questionText').text(questionArray[questionArray.length - pagePosition].get('question'));
		      //Load answer choice one
		      $('.questionChoiceOne').text(questionArray[questionArray.length - pagePosition].get('answerChoiceOne'));
		      //Load answer choice two
		      $('.questionChoiceTwo').text(questionArray[questionArray.length - pagePosition].get('answerChoiceTwo'));
		      //Load answer choice three
		      $('.questionChoiceThree').text(questionArray[questionArray.length - pagePosition].get('answerChoiceThree'));
		      //Load answer choice four
		      $('.questionChoiceFour').text(questionArray[questionArray.length - pagePosition].get('answerChoiceFour'));
	    }
	   
	});
	$(".buttonPrevious").click(function(e){

		if(pagePosition > 1)
	    {
	    	//Resetting the opacity
	    	jQuery('#choice1').css('opacity', '1.0');
			jQuery('#choice2').css('opacity', '1.0');
			jQuery('#choice3').css('opacity', '1.0');
			jQuery('#choice4').css('opacity', '1.0');
	    	//Incrementing the page count
	    	pagePosition--;
	    	numericalPosition = questionArray.length - pagePosition;

	    	$('#questionInstructions').text(pagePosition);
		      //Load the inital question
		      $('.questionText').text(questionArray[questionArray.length - pagePosition].get('question'));
		      //Load answer choice one
		      $('.questionChoiceOne').text(questionArray[questionArray.length - pagePosition].get('answerChoiceOne'));
		      //Load answer choice two
		      $('.questionChoiceTwo').text(questionArray[questionArray.length - pagePosition].get('answerChoiceTwo'));
		      //Load answer choice three
		      $('.questionChoiceThree').text(questionArray[questionArray.length - pagePosition].get('answerChoiceThree'));
		      //Load answer choice four
		      $('.questionChoiceFour').text(questionArray[questionArray.length - pagePosition].get('answerChoiceFour'));
	    }

	});

	$(".button_1").click(function(e){

		userSelections[numericalPosition] = 'one';

		jQuery('#choice1').css('opacity', '1.0');
		jQuery('#choice2').css('opacity', '0.5');
		jQuery('#choice3').css('opacity', '0.5');
		jQuery('#choice4').css('opacity', '0.5');
		
	    
	});
	$(".button_2").click(function(e){
	
		userSelections[numericalPosition] = 'two';

		jQuery('#choice1').css('opacity', '0.5');
		jQuery('#choice2').css('opacity', '1.0');
		jQuery('#choice3').css('opacity', '0.5');
		jQuery('#choice4').css('opacity', '0.5');

	    
	});
	$(".button_3").click(function(e){
		
		userSelections[numericalPosition] = 'three';

		jQuery('#choice1').css('opacity', '0.5');
		jQuery('#choice2').css('opacity', '0.5');
		jQuery('#choice3').css('opacity', '1.0');
		jQuery('#choice4').css('opacity', '0.5');

	    
	});
	$(".button_4").click(function(e){

		userSelections[numericalPosition] = 'four';

		jQuery('#choice1').css('opacity', '0.5');
		jQuery('#choice2').css('opacity', '0.5');
		jQuery('#choice3').css('opacity', '0.5');
		jQuery('#choice4').css('opacity', '1.0');
	    
	});







	




   
});
