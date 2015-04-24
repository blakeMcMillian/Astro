/**
 * @author
 */
$( document ).ready(function() {
	
	//Detecting page click on challenges
	$("#criticalthinkingbutton").click(function(){
       	//Do stuff when clicked
		sessionStorage.setItem("challenge", "Critical Thinking");
    	});
	
	//Detecting page click on challenges
	$("#memorybutton").click(function(){
       	//Do stuff when clicked
		sessionStorage.setItem("challenge", "Memory");
    	});

	//Detecting page click on challenges
	$("#recognitionbutton").click(function(){
       	//Do stuff when clicked
		sessionStorage.setItem("challenge", "Recognition");
    	});

	//Detecting page click on challenges
	$("#definitionbutton").click(function(){
       	//Do stuff when clicked
		sessionStorage.setItem("challenge", "Definitions");
    });

    //Detecting page click on challenges
	$("#aboveandbeyondbutton").click(function(){
       	//Do stuff when clicked
		sessionStorage.setItem("challenge", "Above and Above");
    });














	
   
});
