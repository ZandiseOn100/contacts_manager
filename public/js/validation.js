function validateForm() {
    const firstName = document.querySelector('input[name="first_name"]');
    const lastName = document.querySelector('input[name="last_name"]');
    const email = document.querySelector('input[name="email"]');
    const phoneNumber = document.querySelector('input[name="phone_number"]');
    const address = document.querySelector('textarea[name="address"]');

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneNumberError = document.getElementById('phoneNumberError');
    const addressError = document.getElementById('addressError');

    let isValid = true;

    if (firstName.value.trim() === '') {
        firstName.classList.add('error');
        firstNameError.textContent = 'First Name is required';
        isValid = false;
    } else {
        firstName.classList.remove('error');
        firstNameError.textContent = '';
    }

    if (lastName.value.trim() === '') {
        lastName.classList.add('error');
        lastNameError.textContent = 'Last Name is required';
        isValid = false;
    } else {
        lastName.classList.remove('error');
        lastNameError.textContent = '';
    }

    if (email.value.trim() === '') {
        email.classList.add('error');
        emailError.textContent = 'Email is required';
        isValid = false;
    } else {
        email.classList.remove('error');
        emailError.textContent = '';
    }

    if (phoneNumber.value.trim() === '') {
        phoneNumber.classList.add('error');
        phoneNumberError.textContent = 'Phone Number is required';
        isValid = false;
    } else {
        phoneNumber.classList.remove('error');
        phoneNumberError.textContent = '';
    }

    if (address.value.trim() === '') {
        address.classList.add('error');
        addressError.textContent = 'Address is required';
        isValid = false;
    } else {
        address.classList.remove('error');
        addressError.textContent = '';
    }

    return isValid;
}
// Function to display an error message
function displayErrorMessage(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
}
// Function to clear the error message
function clearErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
}