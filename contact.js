/*
Name: Matt Guyan
Date Created: 09/14/2018
Most recent revision:
*/

function validateItems() {
	var name = document.forms["contact"]["name"].value;
	var email = document.forms["contact"]["email"].value;
	var phone = document.forms["contact"]["phone"].value;
	
	// Validates that a name has been entered
	if (name == "") {
		alert("Please enter your name.");
		document.forms["contact"]["name"].parentElement.className = "form-group has-error";
		document.forms["contact"]["name"].focus();
		return false;
	}
	
	// Validates that an email address has been entered
	if (email == "") {
		alert("Please enter your email address.");
		document.forms["contact"]["email"].parentElement.className = "form-group has-error";
		document.forms["contact"]["email"].focus();
		return false;
	}
	
	// Validates that a phone number has been entered
	if (phone == "") {
		alert("Please enter your phone number.");
		document.forms["contact"]["phone"].parentElement.className = "form-group has-error";
		document.forms["contact"]["phone"].focus();
		return false;
	}
	
	// Validates that the user has selected whether or not they've been to the restaurant before
	if (!document.getElementById("choice1").checked && !document.getElementById("choice2").checked) {
		alert("Please let us know if you have been to our restaurant before.");
		return false;
	}
	
	alert("The information you provided is valid.");
	return false;
	
}