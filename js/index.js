/**
 * @author

Developer:
Blake McMillian

 */

//Document ready function
$( document ).ready(function() {
	
	
	 
	//Listening for LOGIN button to be pressed
	$("#loginButtonPress").click(function(){
		
		//Check the form fields in the dom to determine if the user is registering
		if(userIsRegistering)
		{
			//Resetting user registration variables
			var userIsValid = true;
			var passwordIsValid = false;
			var emailIsValid = false;
			
			//alert("Registering new user");
			//Getting the user's registration information
		   	var usernameRegistration = $('#usernameInputField').val();
		   	var passwordRegistration = $('#passwordInputField').val();
			var passwordConfirmation = $('#passwordConfirmation').val();
			var emailRegistration = $('#emailConfirmationOne').val();
			var emailConfirmationRegistration = $('#emailConfirmationTwo').val();
			
			//Make sure that the username does not exist
			var queryUsers = new Parse.Query(Parse.User);
			
			//Querying whether or not the user exists
			queryUsers.equalTo("username", usernameRegistration); 
			//Determining if the user is valid
			userIsValid = validateUser(userIsValid,queryUsers);
			
			if(userIsValid === true)
			{
				//Confirm that both passwords are the same
				if(passwordRegistration === passwordConfirmation)
				passwordIsValid = true;
			
				//Confirm that both email addresses are the same
				if(emailRegistration === emailConfirmationRegistration)
				emailIsValid = true;
				
				//Make sure the last 4 characters of the string ends in ".com"
				if(passwordIsValid && emailIsValid)
				{
					//Creating a new user object
					var user = new Parse.User();
					user.set("username", usernameRegistration);
					user.set("password", passwordConfirmation);
					user.set("email", emailRegistration);
					
					//Signing up the new user
					userSigninFunction(user);
					
				}//end - conditional
								
			}//end - if conditional
			
		}//end - if conditional
		
	if(userIsRegistering === false)//Source code for when the user is logging in
	{
		//Obtaining the username and password from the user
		username = $('#usernameInputField').val();
		password = $('#passwordInputField').val();
		
		//Authenticating the user's credientials
		parseLoginAuthentication(username,password);
	}//end conditional
	
  });//end - loginButtonPress event

	//Listening for LOGIN button to be pressed
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
			renderingRegistrationFieldsAndAppendingThemToDOM();
			
			//Toggling the boolean values
			toggleBooleanValuesForRegistrationButtonPress();
			
			
		}//end - if statement
		
		else {
			
			//Animating form fields FROM
			aniamteFormFieldsFrom();
			
			//Hiding the form fields
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