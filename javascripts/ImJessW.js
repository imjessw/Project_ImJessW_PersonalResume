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
			
			badInfo.show(). fadeOut(5000);
		return false
			
		}

		
		else{
			$("#thankYou").show().fadeOut(4000);
			forms.hide(); //to hide form
			var myData = {
				first: first.val(),
				lastName: lastName.val(),
				email: email.val(),
				message: message.val()
			};
			$.post("/sendEmail", myData,function(){
				console.log("complete")
			})
			forms.val("");  //to clear form
			submitButton.hide(); //hide submit button
			QButton.show(); //show question button again
						console.log("the end")
			return false
		}		
		
	});
});		






