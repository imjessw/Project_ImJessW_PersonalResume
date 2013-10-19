$(document).ready(function() {

$("#QButton").on("click", function(){
	// console.log("CLICKED!!!!!")
	$("#QButton").hide();
	var forms= $(".form-group");
	var submitButton= $("#bottomButton");
	forms.show().focus();
	submitButton.show();
})
$("#bottomButton").on("click", function(){
	var forms= $(".form-group");
	var submitButton= $("#bottomButton");
	var QButton=$("#QButton");
	forms.hide();
	submitButton.hide();
	QButton.show();

})


});