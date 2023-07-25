function emailTest() {
    const emailBox = document.querySelector('.email')
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const errorSign = document.querySelector('.errorSign')

    // Check if the email is valid (you can use a regular expression or other validation methods here)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(emailInput.value);

    // Display an error message if the email is not valid
    if (!isValidEmail) {
        emailError.textContent = 'Please provide a valid email';
        emailBox.style.border = '2px solid red';
        errorSign.style.display = 'block'
    } else {
        emailError.textContent = '';
        emailBox.style.border = '';
        errorSign.style.display = 'none'

    }
}