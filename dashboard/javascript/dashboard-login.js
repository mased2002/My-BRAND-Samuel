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
let email_input = document.getElementById("username");
let password_input = document.getElementById("password");
let submitBtn = document.querySelector(".submit_btn");

let error_email = document.getElementById("error_email");
let error_password = document.getElementById("error_password");
getData();

// Declare isValid outside the event listeners
let isValid;
let isValid_pass;

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[0-9])(.{7,})$/;
async function getData(){
 const response =  await fetch('https://my-brand-samuel-backend.onrender.com/',{
    headers:{"Content-Type": "application/json"},
    method: "GET",
  
  })
  const json = await response.json()
  console.log(json)
  console.log(response.status)
}
async function login() {
  const email = email_input
  const password = password_input
  const response = await fetch('https://my-brand-samuel-backend.onrender.com/api/users/login',{
    headers:{"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify({email, password})
  })
  const json_response = await response.json()
  if(json_response.status == 200){
    return 1
  }else {
    return 0
}
}



email_input.addEventListener("input", function (e) {
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
  let passwordValue = password_input.value;
  isValid_pass = passwordRegex.test(passwordValue);
  if (isValid_pass) {
    error_password.style.display = "none";
  } else {
    error_password.textContent = "Password is wrong";
    error_password.style.display = "block";
  }
  const login_funct = login();
  if(login_funct == 1){
    if (isValid && isValid_pass) {
      window.open('dashboard.html', '_blank');
    }
  }else if(login_funct == 0){
    if (!isValid || !isValid_pass) {
      e.preventDefault();
    }
  }
  // Prevent the form from submitting if validation fails
  // if (!isValid || !isValid_pass) {
  //   e.preventDefault();
  // }
  

  // if (isValid && isValid_pass) {
  //   window.open('dashboard.html', '_blank');
  // }
});