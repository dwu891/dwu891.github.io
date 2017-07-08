$("button").click(function() {

	var uname = $('#username').val();
	var pword = $('#password').val();

	//Check for missing inputs
	if(uname.length < 1 || pword.length < 1) {
		event.preventDefault();
		$("#errors").text("Username or password is invalid.");
		return;
	}

});