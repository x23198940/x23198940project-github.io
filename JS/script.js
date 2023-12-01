//carusel time lapse - done by Iva
$('.carousel').carousel({
    ride: 2000
  })

  // function for guessing game - done by Matej
  function checkGuess() {
    var lowerBound = 1;
    var upperBound = 10;
    var randomNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

    var guessInput = document.getElementById("guessInput");
    var userGuess = parseInt(guessInput.value);

    var outputDiv = document.getElementById("output");
    var guessButton = document.getElementById("guessButton");

    if (isNaN(userGuess) || userGuess < lowerBound || userGuess > upperBound) {
        outputDiv.innerHTML = "Please guess within the range [" + lowerBound + " - " + upperBound + "]";
    } else if (userGuess < randomNumber) {
        outputDiv.innerHTML = "Sorry, wrong guess. The correct number was " + randomNumber + ".";
        outputDiv.style.color = "red";
    } else if (userGuess > randomNumber) {
        outputDiv.innerHTML = "Sorry, wrong guess. The correct number was " + randomNumber + ".";
        outputDiv.style.color = "red";
    } else {
        outputDiv.innerHTML = "Congratulations! You guessed the number " + randomNumber + ". You win a 10 euro coupon!";
        outputDiv.style.color = "green";       
    }
    guessButton.disabled = true;
}

// validation for resevration form for name, email and phone number - done by Matej
function reservationValid() {
    // Form elements
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Validate required fields
    if (fullName === '' || email === '' || phone === '' || reservationDate === '') {
        alert('Please fill out all mandatory fields (marked with *)');
        return false;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate phone format (you might need a more sophisticated validation)
    if (!isValidPhone(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    // all validations pass, form submitted
    alert('Reservation submitted successfully!');
    return true;
}
// seperate email and phone validations
function isValidEmail(email) {
    // You can use a more sophisticated email validation regex here
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    var phoneRegex = /^\d{10}$/; // 10-digit phone number
    return phoneRegex.test(phone);
}

// validate enquiry form - done by Matej
function validateEnquiry() {
    // Get form values
    var firstName = document.getElementById('box1').value;
    var lastName = document.getElementById('box2').value;
    var email = document.getElementById('box3').value;
    var comment = document.getElementById('comment').value;

    // Validate required fields
    if (box1 === '' || box2 === '' || box3 === '' || comment === '') {
        alert('Please fill out all mandatory fields (marked with *)');
        return false;
    }
    // Validate each field
    if (firstName === '') {
        alert('First name is required.');
        return false;
    }

    if (lastName === '') {
        alert('Last name is required.');
        return false;
    }

    if (email === '' || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (comment === '') {
        alert('Enquiry is required.');
        return false;
    }

    // all validations pass, form submitted
    alert('Form submitted successfully!');
    return true;
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}





 