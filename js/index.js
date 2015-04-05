/**
 * @author

Developer:
Blake McMillian

 */

//Variables
var toggleHeight = true;
var userIsRegistering = false;
	
//Setting up Parse APPID + Javascript Key
Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

//Functions
var clearOutInputs = function(){
		//removing content from the inital input fields
		$('#usernameInputField').val('');
		$('#passwordInputField').val('');
	
	};
	
var resettingUsernameAndRegistrationButtonText = function(){
		//Change the button Names
		$("#registrationButtonPress").text('Register');
		$("#loginButtonPress").text('Login');
	
	};
	
var hideFormFields = function(){
		//Hiding password, and email fields
		$('#passwordConfirmation').hide('fast').remove();
		$('#emailConfirmationOne').hide('fast').remove();
		$('#emailConfirmationTwo').hide('fast').remove();
	
	};

var aniamteFormFieldsFrom = function(){
	
		$(".loginBox").animate({height: '330px'});
		//$(".inputContainer").animate({height: '100px'});
		$(".registrationButton").animate({ 
       	 top: "-=140px",
      	}, '400');
	};
	
var toggleButtonNames = function(){
		//Change the button Names
		$("#registrationButtonPress").text('Login');
		$("#loginButtonPress").text('Register');
	};

var aniamteFormFieldsTo = function(){
		//Animating the form fields To their destination
		$(".loginBox").animate({height: '460px'});
			//$(".inputContainer").animate({height: '190px'});
			$(".registrationButton").animate({ 
	       	 top: "+=140px",
	      	}, '400');
	};

var togglingUsernameAndRegisterationButtonText = function(){
			//Change the button Names
			$("#registrationButtonPress").text('Cancel');
			$("#loginButtonPress").text('Register');
			
}	

//Document ready function
$( document ).ready(function() {
	 
	//listening for LOGIN button to be pressed
	$("#loginButtonPress").click(function(){
		
		//Check the form fields in the dom to determine if the user is registering
		if(userIsRegistering)
		{
		   	var usernameRegistration = $('#usernameInputField').val();
		   	var passwordRegistration = $('#passwordInputField').val();
			var passwordConfirmation = $('#passwordConfirmation').val();
			var emailRegistration = $('#emailConfirmationOne').val();
			var emailConfirmationRegistration = $('#emailConfirmationTwo').val();
			
			//Make sure that the username does not exist
			
			//Confirm that both passwords are the same
			
			//Confirm that both email addresses are the same

		}//end - if conditional
		

		//obtaining the username and password from the user
		var usernameLogin = $('#usernameInputField').val();
		var passwordLogin = $('#passwordInputField').val();
	
		//Parse login verification
		Parse.User.logIn(usernameLogin, passwordLogin, {
		 	 success: function(user) 
			{
		    // Do stuff after successful login.
			alert('worked');
		 	 },
		  	error: function(user, error) {
		    // The login failed. Check error to see why.
			alert('NOT');
	  
		}//end - error
	
    });//end parse login function
	
  });//end - loginButtonPress event

	//listening for LOGIN button to be pressed
	$("#registrationButtonPress").click(function(){

		if(toggleHeight)
		{
			//Change the button Names
			togglingUsernameAndRegisterationButtonText();
			
			//Animating the loginbox and form fields
			aniamteFormFieldsTo();
	
			//Rendering registration field, and appending it within the loginbox
			$('.inputContainer').append('<input type="password" value="" class=".loginBox input 					center-block" placeholder="Confirm Password" id="passwordConfirmation" />');
			
			$('#passwordConfirmation').hide().show('slow');
			
			$('.inputContainer').append('<input type="password" value="" class=".loginBox input 					center-block" placeholder="Enter Email" id="emailConfirmationOne" />');
			
			$('#emailConfirmationOne').hide().show('slow');
			
			$('.inputContainer').append('<input type="password" value="" class=".loginBox input 					center-block" placeholder="Confirm Email" id="emailConfirmationTwo" />');
			
			$('#emailConfirmationTwo').hide().show('slow');
			
			//Toggling Boolean values
			toggleHeight = false;
			userIsRegistering = true;
			
		}//end - if statement
		
		else {
		//animating form fields FROM
		aniamteFormFieldsFrom();
		
		//hiding the form fields
		hideFormFields();
		
		//Clear out inputs
		clearOutInputs();
		
		toggleHeight = true;
		userIsRegistering = false;
		
		//Toggling login and registration button text
		resettingUsernameAndRegistrationButtonText();
		

		}//end - else statement
		
		
	});//end - registrationButtonFunction
	





}); 