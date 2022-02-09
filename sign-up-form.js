const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#mail');
const phone = document.querySelector('#phone');
const password = document.querySelector('#pwd');
const confirmPassword = document.querySelector('#confirm-pwd')
const form = document.querySelector('#form');
const errorElement = document.querySelector(".error");
form.addEventListener('submit', (e) => {
    let messages = [];
    if (firstName.value === '' || firstName.value === null) {
        messages.push('First name is required');
        firstName.classList.add('error-message');
    }
 
    if (firstName.validity.valid) {
        firstName.classList.remove('error-message');
    }

    if (lastName.value === '' || lastName.value === null) {
        messages.push('Last name is required');
        lastName.classList.add('error-message');
    }

    if (lastName.validity.valid) {
        lastName.classList.remove('error-message');
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
        password.classList.add('error-message');
    }

    if (password.validity.valid) {
        password.classList.remove('error-message');
    }

    if (email.validity.valid === false) {
        messages.push('Invalid email address')
        email.classList.add('error-message');
    }

    if (email.validity.valid) {
        email.classList.remove('error-message');
    }

    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value) === false) {
        messages.push('Invalid phone number')
        phone.validity.valid = false;
        phone.classList.add('error-message');
    }

    if (phone.validity.valid) {
        phone.classList.remove('error-message');
    }

    if (password.value !== confirmPassword.value) {
        messages.push('Passwords do not match');
        password.classList.add('error-message');
        confirmPassword.classList.add('error-message');
    }

    if (password.validity.valid && confirmPassword.validity.valid) {
        password.classList.remove('error-message');
        confirmPassword.classList.remove('error-message');
    }

    if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ')
    }

})