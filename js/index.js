/**
 * @author

Developer:
Blake McMillian

 */
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
				
				//Make sure the last 4 characters of the string ends in ".com"

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
			//Hiding password, and email fields
			removeFormFields();
			//Change the button Names
			togglingUsernameAndRegisterationButtonText();
			
			//Animating the loginbox and form fields
			aniamteFormFieldsTo();
	
			//Rendering registration field, and appending it within the loginbox
			$('#passwordInputField').after('<input type="password" value="" class=".loginBox input 					center-block" placeholder="Confirm Password" id="passwordConfirmation" />');
			
			$('#passwordConfirmation').hide().show('slow');
			
			$('#passwordConfirmation').after('<input type="email" value="" class=".loginBox input 					center-block" placeholder="Enter Email" id="emailConfirmationOne" />');
			
			$('#emailConfirmationOne').hide().show('slow');
			
			$('#emailConfirmationOne').after('<input type="email" value="" class=".loginBox input 					center-block" placeholder="Confirm Email" id="emailConfirmationTwo" />');
			
			$('#emailConfirmationTwo').hide().show('slow');
			
			toggleBooleanValuesForRegistrationButtonPress();
			
			
		}//end - if statement
		
		else {
		//animating form fields FROM
		aniamteFormFieldsFrom();
		
		//hiding the form fields
		hideFormFields();
		
		//Clear out inputs
		clearOutInputs();
		
		//Resseting the boolean values for button press
		resettingRegistrationValuesForButtonPress();

		//Toggling login and registration button text
		resettingUsernameAndRegistrationButtonText();
		

		}//end - else statement
		
		
	});//end - registrationButtonFunction
	





}); 