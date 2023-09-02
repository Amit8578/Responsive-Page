document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Validate the form
    if (validateForm()) {
        // If the form is valid, you can submit it to your backend or perform other actions.
        alert('Form submitted successfully!');
    }
});

function validateForm() {
    let isValid = true;

    // Reset validation classes and messages
    const formElements = document.getElementById('myForm').elements;
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].classList.contains('is-invalid')) {
            formElements[i].classList.remove('is-invalid');
            formElements[i].nextElementSibling.style.display = 'none';
        }
    }

    // Validate full name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        isValid = false;
        document.getElementById('fullName').classList.add('is-invalid');
        document.getElementById('fullName').nextElementSibling.style.display = 'block';
    }

    // Validate contact number (you can add more specific validation here)
    const contactNo = document.getElementById('contactNo').value.trim();
    if (contactNo === '') {
        isValid = false;
        document.getElementById('contactNo').classList.add('is-invalid');
        document.getElementById('contactNo').nextElementSibling.style.display = 'block';
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    if (!isValidEmail(email)) {
        isValid = false;
        document.getElementById('email').classList.add('is-invalid');
        document.getElementById('email').nextElementSibling.style.display = 'block';
    }

    // Validate address
    const address = document.getElementById('address').value.trim();
    if (address === '') {
        isValid = false;
        document.getElementById('address').classList.add('is-invalid');
        document.getElementById('address').nextElementSibling.style.display = 'block';
    }

    return isValid;
}

function isValidEmail(email) {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
