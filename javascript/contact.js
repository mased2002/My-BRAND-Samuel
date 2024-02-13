 import { addToLS } from "../dashboard/javascript/common_local.js"; 
 // Fetching input values and patterns (same as before)
 
let messages = JSON.parse(localStorage.getItem("messages")) || [];

 

 const namePattern = /^[a-zA-Z]{3,}$/;
 const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 const urlPattern = /^(http|https):\/\/[\w\-]+(\.[a-z]{2,}){1,}([\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
 const messagePattern = /^.{10,}$/;

 // Error elements
 const nameError = document.getElementById('error_name');
 const emailError = document.getElementById('error_email');
 const websiteError = document.getElementById('error_website');
 const messageError = document.getElementById('error_message');


function validateForm() {
    validateName();
    validateEmail();
    validateWebsite();
    validateMessage();
    return nameError.style.display === 'none'
    && emailError.style.display === 'none'
    && websiteError.style.display === 'none'
    && messageError.style.display === 'none';
    // Check if all requirements are met
    // return namePattern.test(name) && emailPattern.test(email) && (urlPattern.test(website) || website === '') && messagePattern.test(message);
}
    // validation logic
    
    // Validate name
    function validateName(){
        const nameof = document.getElementById('name').value;
        if (namePattern.test(nameof)) {
            nameError.style.display = 'none';
        } else {
            nameError.style.display = 'block';
            nameError.textContent = 'Name must be at least 3 characters';
        }
    }


    // Validate email
    function validateEmail(){
        const email = document.getElementById('email').value;
        if (emailPattern.test(email)) {
            emailError.style.display = 'none';
        } else {
            emailError.style.display = 'block';
            emailError.textContent = 'Invalid email address';
        }
    }


    // Validate website
    function validateWebsite(){
        const website = document.getElementById('website').value;
        if(website == ""){
            websiteError.style.display = "none"
        }else{
            if (urlPattern.test(website)) {
                websiteError.style.display = 'none';
            } else {
                websiteError.style.display = 'block';
                websiteError.textContent = 'Invalid website URL';
            }
    }
    }


    // Validate message
    function validateMessage(){   
    const message = document.getElementById('message').value;
    if (messagePattern.test(message)) {
        messageError.style.display = 'none';
    } else {
        messageError.style.display = 'block';
        messageError.textContent = 'Message must be at least 10 characters';
    }
}
function newMessage(){
    const nameof = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const message = document.getElementById('message').value;
    return {
        senderName: nameof,
        senderEmail: email,
        senderWebsite: website,
        message: message,
        messageDate: getFormattedDate(),
        messageId: generateRandomId()
    }
}
// get id
function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
}

// get date
function getFormattedDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
    let year = currentDate.getFullYear();

    // Add leading zeros if necessary
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    // Concatenate the day, month, and year with hyphens
    let formattedDate = day + '-' + month + '-' + year;

    return formattedDate; // Return the formatted date string
}




// Add event listeners for input changes
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('website').addEventListener('input', validateWebsite);
document.getElementById('message').addEventListener('input', validateMessage);

// Add event listener for form submission
document.getElementById('contact_form_id').addEventListener('submit', function (event) {
    // Prevent form submission if validation fails
    if (!validateForm()) {
        event.preventDefault();
    }else{
        messages.push(newMessage())
        addToLS("messages", JSON.stringify(messages))
    }
});