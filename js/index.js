/**
 * @author
 */

//functions
var clearOutInputs = function(){
		//removing content from the inital input fields
		$('#usernameInputField').val('');
		$('#passwordInputField').val('');
	
	};
	
var toggleUsernameAndRegistrationButtonText = function(){
		//removing content from the inital input fields
		$('#usernameInputField').val('');
		$('#passwordInputField').val('');
	
	};
	


$( document ).ready(function() {
	
	//Variables
	var toggleHeight = true;
	var userIsRegistering = false;
	
	//Setting up Parse APPID + Javascript Key
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");
    
	//listening for LOGIN button to be pressed
	$("#loginButtonPress").click(function(){
		
	if(userIsRegistering)
	{
		
	}
   	
	var username = $('#usernameInputField').val();
	var password = $('#passwordInputField').val();
	
	//Parse login verification
	Parse.User.logIn(username, password, {
 	 success: function(user) 
	{
    // Do stuff after successful login.
	alert('worked');
 	 },
  	error: function(user, error) {
    // The login failed. Check error to see why.
	alert('NOT');
  }
});//end parse login function
	
});//end - loginButtonPress event

//listening for LOGIN button to be pressed
	$("#registrationButtonPress").click(function(){

		if(toggleHeight)
		{
		$(".loginBox").animate({height: '460px'});
		//$(".inputContainer").animate({height: '190px'});
		$(".registrationButton").animate({ 
       	 top: "+=140px",
      	}, '400');

		//Rendering registration field
		$('.inputContainer').append('<input type="password" value="" class=".loginBox input center-block" placeholder="Confirm Password" id="passwordConfirmation" />');
		
		$('#passwordConfirmation').hide().show('slow');
		
		$('.inputContainer').append('<input type="email" value="" class=".loginBox input center-block" placeholder="Enter Email Address" id="emailConfirmationOne" />');
		
		$('#emailConfirmationOne').hide().show('slow');
		
		$('.inputContainer').append('<input type="email" value="" class=".loginBox input center-block" placeholder="Confirm Email Address" id="emailConfirmationTwo" />');
		
		$('#emailConfirmationTwo').hide().show('slow');
		
		//Change the button Names
		$("#registrationButtonPress").text('Cancel');
		$("#loginButtonPress").text('Register');
		
		//Toggling Boolean values
		toggleHeight = false;
		userIsRegistering = true;
		
		
		}//end - if statement
		
		else {
		$(".loginBox").animate({height: '330px'});
		//$(".inputContainer").animate({height: '100px'});
		$(".registrationButton").animate({ 
       	 top: "-=140px",
      	}, '400');
		
		$('#passwordConfirmation').hide('fast').remove();
		$('#emailConfirmationOne').hide('fast').remove();
		$('#emailConfirmationTwo').hide('fast').remove();
		
		//Clear out inputs
		clearOutInputs();
		
		toggleHeight = true;
		
		//Toggling login and registration button text
		toggleUsernameAndRegistrationButtonText();
		

		}//end - else statement
		
		
	});//end - registrationButtonFunction
	





}); 