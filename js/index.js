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
			
			//Getting the user's registration information
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
		
	//Obtaining the username and password from the user
	username = $('#usernameInputField').val();
	password = $('#passwordInputField').val();
	
	//Authenticating the user's credientials
	parseLoginAuthentication(username,password);
	
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