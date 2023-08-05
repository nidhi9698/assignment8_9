const registrationForm = document.getElementById('registrationForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const dateOfBirthInput = document.getElementById('dateOfBirth');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();
    let flag = false;
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const dateOfBirth = dateOfBirthInput.value;
    const email = emailInput.value;
    let selectedGender = '';
    for (const genderInput of genderInputs) {
        if (genderInput.checked) {
          selectedGender = genderInput.value;
          break;
        }
    }
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!firstName) {
        flag = true;
        displayError('firstName', 'Please enter your first name.');
    }
    if (!lastName) {
        flag = true;
        displayError('lastName', 'Please enter your last name.');
    }
    if (!dateOfBirth) {
        flag = true;
        displayError('dateOfBirth', 'Please enter your date of birth.');
    }
    if (!selectedGender) {
        flag = true;
        displayError('gender', 'Please select your gender.');
    }
    if (!email) {
        flag = true;
        displayError('email', 'Please enter your email.');
    }
    if (!password) {
        flag = true;
        displayError('password', 'Please enter a password.');
    }
    if (!confirmPassword) {
        flag = true;
        displayError('confirmPassword', 'Please confirm your password.');
    }
    if (password !== confirmPassword) {
        flag = true;
        displayError('confirmPassword', 'Passwords do not match.');
    }
    if (password == confirmPassword) {
        if (password.length < 8){
          flag = true;
          displayError('confirmPassword', 'Passwords must be atleast 8 characters.');
        }
    }
    if(flag === false){
        successMessage();
    }
});

function displayError(inputElement, errorMessage) {
    const errorElement = document.getElementById(inputElement + 'Error');
    errorElement.textContent = errorMessage;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    for (const errorElement of errorElements) {
        errorElement.textContent = '';
    }
}

function successMessage() {
    location.reload();
    alert('Record added successfully!');
}
