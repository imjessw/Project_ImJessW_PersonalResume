$(document).ready(function(){

	$("#QButton").on("click", function(){
		// console.log("CLICKED!!!!!")
		$("#QButton").hide();
		var forms= $(".form-group");
		var submitButton= $("#bottomButton");
		var nameForm=$("#first")

		forms.show();
		nameForm.focus(); //sets cursor to first form field
		submitButton.show();
	});


	$("#formInfo").on("submit", function(){
		console.log("you are a Javascript genius... kind of")
		var forms= $(".form-group");
		var submitButton= $("#formInfo");
		var QButton= $("#QButton");
		var first= $("#first");
		var lastName= $("#lastName");
		var email= $("#email");
		var message= $("#message");
		var badInfo= $("#badInfo")
	// dialogbox


	// logic for forms left blank

		if (first.val() === "" || lastName.val()=== "" 
			|| email.val() === "" || message.val() === "" ) {
			
			badInfo.show();
			
		}
		
		else{
			alert("Thank you. I look forward to speaking with you soon!")
			forms.hide(); //to hide form
			forms.val("");  //to clear form
			submitButton.hide(); //hide submit button
			QButton.show(); //show question button again
			console.log("the end")
		}	
		return false
	});
});		






