$(document).ready(function() {

$("#QButton").on("click", function(){
	// console.log("CLICKED!!!!!")
	$("#QButton").hide();
	var forms= $(".form-group");
	var submitButton= $("#bottomButton");
	forms.show().focus();
	submitButton.show();


})
});