$(document).ready(function() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
    const usernameRegex = /^[a-zA-Z0-9_]{5,15}$/;
    const passwordMinLength = 8;
    const passwordMaxLength = 20;

    function validateForm() {
        let isValid = true;

        // Clear previous error messages
        $('.form-error').text('');

        // Validate email
        const email = $('#email').val();
        if (!emailRegex.test(email)) {
            $('#emailError').text('Email must be a valid Northeastern email address.');
            isValid = false;
        }

        // Validate username
        const username = $('#username').val();
        if (username.length < 5 || username.length > 15) {
            $('#usernameError').text('Username must be between 5 and 15 characters.');
            isValid = false;
        } else if (!usernameRegex.test(username)) {
            $('#usernameError').text('Username can only contain letters, numbers, and underscores.');
            isValid = false;
        }

        // Validate password
        const password = $('#password').val();
        if (password.length < passwordMinLength || password.length > passwordMaxLength) {
            $('#passwordError').text(`Password must be between ${passwordMinLength} and ${passwordMaxLength} characters.`);
            isValid = false;
        }

        // Validate confirm password
        const confirmPassword = $('#confirmPassword').val();
        if (confirmPassword !== password) {
            $('#confirmPasswordError').text('Passwords do not match.');
            isValid = false;
        }

        // Enable login button only if all fields are valid
        $('#loginButton').prop('disabled', !isValid);
        return isValid;
    }

    // Run validation on input change
    $('#email, #username, #password, #confirmPassword').on('input', validateForm);

    // Submit form
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        if (validateForm()) {
            window.location.href = 'page2.html?username=' + encodeURIComponent($('#username').val());
        }
    });
});


	// Page 2 form validation and calculation using arrow function
	$('#calculatorForm').submit(function(event) {
		event.preventDefault();
	});
	$('#add').click(() => {
		calculate('add');
	});
	$('#subtract').click(() => {
		calculate('subtract');
	});
	$('#multiply').click(() => {
		calculate('multiply');
	});
	$('#divide').click(() => {
		calculate('divide');
});

function calculate(operation) {
	$('#result').empty();
	$('#error').empty();
	var num1 = $('#num1').val();
	var num2 = $('#num2').val();
	if (!$.isNumeric(num1)) {
		$('#error').text('Number 1 must be a valid number.');
		return;
	}
	if (!$.isNumeric(num2)) {
		$('#error').text('Number 2 must be a valid number.');
		return;
	}
	var result;
	switch (operation) {
		case 'add':
			result = +num1 + +num2;
			break;
		case 'subtract':
			result = num1 - num2;
			break;
		case 'multiply':
			result = num1 * num2;
			break;
		case 'divide':
			if (num2 == 0) {
				$('#error').text('Cannot divide by zero.');
				return;
			}
			result = num1 / num2;
			break;
		default:
			return;
	}
	$('#result').text(result);
}

var params = new URLSearchParams(window.location.search);
var username = params.get('username');
if (username) {
	$('#username').text(username);
}
