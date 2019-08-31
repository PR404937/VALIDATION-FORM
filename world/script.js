// validate Form
let validateForm = () => {
    let isFormValid = validateUserName()
                      && validateEmail()
                      && validatePassword()
                      && validateConfirmPassword()
                      && validatePasswordMatch();

    if(isFormValid=validateUserName()
                      && validateEmail()
                      && validatePassword()
                      && validateConfirmPassword()
                      && validatePasswordMatch(){
        alert('Form Submitted Successfully');
        // get all form Fields data create Object
        // display object in the table
        return true;
    }
    else{
        
        return false;
    }
};



let validateUserName = () => {
    let inputField = document.querySelector('#username');
    if(inputField.value === ''){
        applyColors(inputField,'red');
        displayErrorMessage('type your username');
        return false;
}

    // Length Validation
    else if(inputField.value.length < 5){
        applyColors(inputField,'red');
        displayErrorMessage('Min 5 characters Required');
        return false;
    }
    else if(!inputField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        applyColors(inputField,'red');
        displayErrorMessage('No Special Characters!');
        return false;
    }
    else{
        applyColors(inputField,'green');
        return true;
    }
};

// validate Email
let validateEmail = () => {
    let inputField = document.querySelector('#email');
    if(inputField.value === ''){
        applyColors(inputField,'red');
        displayErrorMessage('Email is Required');
        return false;
    }
    else{
        applyColors(inputField,'green');
        return true;
    }
};

// validate Password
let validatePassword = () => {
    let inputField = document.querySelector('#password');
    if(inputField.value === ''){
        applyColors(inputField,'red');
        displayErrorMessage('Password is Required');
        return false;
    }
    else{
        applyColors(inputField,'green');
        return true;
    }
};

// validate Confirm Password
let validateConfirmPassword = () => {
    let inputField = document.querySelector('#c_passwword');
    if(inputField.value === ''){
        applyColors(inputField,'red');
        displayErrorMessage('Confirm Password is Required');
        return false;
    }
    else{
        applyColors(inputField,'green');
        return true;
    }
};

// validate Password Match
let validatePasswordMatch = () => {
    let passwordField = document.querySelector('#password');
    let cPasswordField = document.querySelector('#c_password');
    if(passwordField.value !== cPasswordField.value){
        applyColors(passwordField,'red');
        applyColors(cPasswordField,'red');
        displayErrorMessage('Passwords NOT Matched');
        return false;
    }
    else{
        applyColors(passwordField,'green');
        applyColors(cPasswordField,'green');
        return true;
    }
};

// Apply colors
let applyColors = (inputField , color) => {
       inputField.style.boxShadow = `0 0 10px ${color}`;
        inputField.style.boxShad = `0 0 50px ${color}`;
};
let displayErrorMessage = (message) => {
    let errorMessageDiv = document.querySelector('#error-msg');
    let h3Tag = document.createElement('h3');
    h3Tag.innerText = message;
    h3Tag.style.backgroundColor = 'orangered';
    errorMessageDiv.appendChild(h3Tag);
    setTimeout(removeErrorMessage,2000); // Remove Error Message After 2 sec
};


// Remove Error Message
let removeErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};