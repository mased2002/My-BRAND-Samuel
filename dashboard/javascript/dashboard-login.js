// let email = document.getElementById("username")
//     let password = document.getElementById("password")
//     let submitBtn = document.querySelector(".submit_btn")

//     let error_email = document.getElementById("error_email")
//     let error_password = document.getElementById("error_password")

//     let isValid;
//     let isValid_pass;

//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[0-9])(.{7,})$/;
    
//     email.addEventListener("input", function(e){
//         isValid = emailRegex.test(e.target.value)
//         if(isValid){
//             error_email.style.display = "none";
//         }else{
//             error_email.textContent = "enter a valid email";
//             error_email.style.display = "block";
//         }
//     })
//     submitBtn.addEventListener("click", function(e){
//         let passwordValue = password.value
//         isValid_pass = passwordRegex.test(passwordValue)
//         if(isValid_pass){
//             error_password.style.display = "none";
//         }else{
//             error_password.textContent = "password is wrong";
//             error_password.style.display = "block";
//         }
//         // prevent the form from submitting if validation fails
//         if (!isValid) {
//             e.preventDefault();
//         }

//         if(isValid && isValid_pass){
//             window.open('dashboard.html', "_blank")
//         }
//     })
let email = document.getElementById("username");
let password = document.getElementById("password");
let submitBtn = document.querySelector(".submit_btn");

let error_email = document.getElementById("error_email");
let error_password = document.getElementById("error_password");

// Declare isValid outside the event listeners
let isValid;
let isValid_pass;

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[0-9])(.{7,})$/;

email.addEventListener("input", function (e) {
  isValid = emailRegex.test(e.target.value);
  console.log(isValid)
  if (isValid) {
    error_email.style.display = "none";
  } else {
    error_email.textContent = "Enter a valid email";
    error_email.style.display = "block";
  }
});

submitBtn.addEventListener("click", function (e) {
  let passwordValue = password.value;
  isValid_pass = passwordRegex.test(passwordValue);
  if (isValid_pass) {
    error_password.style.display = "none";
  } else {
    error_password.textContent = "Password is wrong";
    error_password.style.display = "block";
  }

  // Prevent the form from submitting if validation fails
  if (!isValid || !isValid_pass) {
    e.preventDefault();
  }

  if (isValid && isValid_pass) {
    window.open('dashboard.html', '_blank');
  }
});