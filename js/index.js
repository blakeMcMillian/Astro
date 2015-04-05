/**
 * @author
 */

$( document ).ready(function() {
	
	//Variables
	var toggleHeight = true;
	
	//Setting up Parse APPID + Javascript Key
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");
    
	//listening for LOGIN button to be pressed
	$("#loginButtonPress").click(function(){
   	
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
		$(".loginBox").animate({height: '410px'});
		//$(".inputContainer").animate({height: '190px'});
		$(".registrationButton").animate({ 
       	 top: "+=90px",
      	}, '400');

		//setting an element equal to the password form field
		$('.inputContainer').append('<input type="password" value="" class=".loginBox input center-block" placeholder="Confirm Password" id="passwordConfirmationOne" />');
		
		$('#passwordConfirmationOne').hide().show('slow');
		
		$('.inputContainer').append('<input type="password" value="" class=".loginBox input center-block" placeholder="Re-Enter Password" id="passwordConfirmationTwo" />');
		
		$('#passwordConfirmationTwo').hide().show('slow');
		
		toggleHeight = false;
		
		}//end - if statement
		
		else{
		$(".loginBox").animate({height: '330px'});
		//$(".inputContainer").animate({height: '100px'});
		$(".registrationButton").animate({ 
       	 top: "-=90px",
      	}, '400');
		$('#passwordConfirmationOne').remove().hide().show('normal');
		$('#passwordConfirmationTwo').remove().hide().show('normal');
		
		toggleHeight = true;
		}//end - else statement
		
		
	});//end - registrationButtonFunction
	





}); 