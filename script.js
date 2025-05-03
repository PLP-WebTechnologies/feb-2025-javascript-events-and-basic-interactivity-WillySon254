// 1. Event Handling 🎈
const clickButton = document.getElementById('clickButton');
const hoverEffect = document.querySelector('.hover-effect');
const keypressInput = document.getElementById('keypressInput');
const outputDiv = document.getElementById('output');
const doubleClickButton = document.getElementById('doubleClickButton');
const secretActionDiv = document.getElementById('secretAction');

clickButton.addEventListener('click', () => {
    alert('Button Clicked!');
});

hoverEffect.addEventListener('mouseover', () => {
    outputDiv.textContent = 'Mouse is over the element.';
});

hoverEffect.addEventListener('mouseout', () => {
    outputDiv.textContent = '';
});

keypressInput.addEventListener('keypress', (event) => {
    outputDiv.textContent = `You pressed: ${event.key}`;
});

// Secret action for double-click or long press
let timer;
doubleClickButton.addEventListener('mousedown', () => {
    timer = setTimeout(() => {
        secretActionDiv.style.display = 'block'; // Long press action
        clearTimeout(timer);
    }, 1000); // Adjust the time (in milliseconds) for long press
});

doubleClickButton.addEventListener('mouseup', () => {
    clearTimeout(timer);
});

doubleClickButton.addEventListener('dblclick', () => {
    secretActionDiv.style.display = 'block'; 
    clearTimeout(timer);
});

// Resetting secret action on mouseout
doubleClickButton.addEventListener('mouseout', () => {
    secretActionDiv.style.display = 'none';
});

// 2. Interactive Elements 🎮
const changeTextButton = document.getElementById('changeTextButton');
const changeColorButton = document.getElementById('changeColorButton');
let textChanged = false;
let colorChanged = false;

changeTextButton.addEventListener('click', () => {
    changeTextButton.textContent = textChanged ? 'Change Text' : 'Text Changed!';
    textChanged = !textChanged;
});

changeColorButton.addEventListener('click', () => {
    changeColorButton.style.backgroundColor = colorChanged ? '' : 'lightblue';
    colorChanged = !colorChanged;
});

function openTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// 3. Form Validation 📋
const requiredField = document.getElementById('requiredField');
const requiredFieldError = document.getElementById('requiredFieldError');
const emailField = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordField = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const myForm = document.getElementById('myForm');
const formOutputDiv = document.getElementById('formOutput');

function validateRequired() {
    if (requiredField.value.trim() === '') {
        displayError(requiredFieldError, 'This field is required.');
        return false;
    } else {
        clearError(requiredFieldError);
        return true;
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
        displayError(emailError, 'Please enter a valid email address.');
        return false;
    } else {
        clearError(emailError);
        return true;
    }
}

function validatePassword() {
    if (passwordField.value.length < 8) {
        displayError(passwordError, 'Password must be at least 8 characters long.');
        return false;
    } else {
        clearError(passwordError);
        return true;
    }
}

function displayError(element, message) {
    element.textContent = message;
}

function clearError(element) {
    element.textContent = '';
}

myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const isRequiredValid = validateRequired();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isRequiredValid && isEmailValid && isPasswordValid) {
        formOutputDiv.textContent = 'Form submitted successfully!';
        formOutputDiv.className = 'valid-feedback';
        // You would typically send the form data to a server here
        console.log('Form Data:', {
            requiredField: requiredField.value,
            email: emailField.value,
            password: passwordField.value
        });
    } else {
        formOutputDiv.textContent = 'Please correct the errors in the form.';
        formOutputDiv.className = 'error-message';
    }
});

