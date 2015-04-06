/**
 * @author
 */
//Setting up Parse APPID + Javascript Key
Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

//Variables
var toggleHeight = true;
var userIsRegistering = false;

//Functions
var toggleBooleanValuesForRegistrationButtonPress = function(){
		//Toggling Boolean values
		toggleHeight = false;
		userIsRegistering = true;
};

var resettingRegistrationValuesForButtonPress = function(){
		//Toggling Boolean values
		toggleHeight = true;
		userIsRegistering = false;
		
	
	};

var clearOutInputs = function(){
		//removing content from the inital input fields
		$('#usernameInputField').val('');
		$('#passwordInputField').val('');
	
	};
	
var resettingUsernameAndRegistrationButtonText = function(){
		//Change the button Names
		$("#registrationButtonPress").text('New User');
		$("#loginButtonPress").text('Login');
	
	};
	
var hideFormFields = function(){
		//Hiding password, and email fields
		$('#passwordConfirmation').hide('fast');
		$('#emailConfirmationOne').hide('fast');
		$('#emailConfirmationTwo').hide('fast');
	
	};

var aniamteFormFieldsFrom = function(){
	
		$(".loginBox").animate({height: '410px'});
		//$(".inputContainer").animate({height: '100px'});
	//	$(".registrationButton").animate({ 
      // 	 top: "-=50px",
      //	}, '400');
	};
	
var toggleButtonNames = function(){
		//Change the button Names
		$("#registrationButtonPress").text('Login');
		$("#loginButtonPress").text('New User');
	};

var aniamteFormFieldsTo = function(){
		//Animating the form fields To their destination
		$(".loginBox").animate({height: '570px'});
			//$(".inputContainer").animate({height: '190px'});
			//$(".registrationButton").animate({ 
	       	// top: "+=50px",
	      	//}, '400');
	};

var togglingUsernameAndRegisterationButtonText = function(){
			//Change the button Names
			$("#registrationButtonPress").text('Cancel');
			$("#loginButtonPress").text('Register');
			
}	
var removeFormFields = function(){
			$('#passwordConfirmation').remove();
			$('#emailConfirmationOne').remove();
			$('#emailConfirmationTwo').remove();
	
	};