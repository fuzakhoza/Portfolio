const nameError = document.querySelector(".name-error");
const phoneError = document.querySelector(".phone-error");
const emailError = document.querySelector(".email-error");
const messegeError = document.querySelector(".messege-error");
const submitError = document.querySelector(".submit-error");

function validateName() {
    const name = document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML = "Enter fullname";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
     nameError.innerHTML = "Invalid name";
     return false 
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    const phone = document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML = "Enter phone number";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
     phoneError.innerHTML = "Invalid phone";
     return false 
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateEmail() {
    const email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailError.innerHTML = "Enter valid email";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
     emailError.innerHTML = "Invalid email";
     return false 
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessege() {
    const messege = document.getElementById("contact-messege").value;
    let required = 30;
    let left = required - messege.length;
    if(left > 0) {
        messegeError.innerHTML = left + " more charecters requered";
        return false
    }
    messegeError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
}

function validateSubmit() {
     if(!validateName() || !validatePhone() || !validateEmail() || !validateMessege()) {
   submitError.style.display = "block";
   submitError.innerHTML = "Please fix the error";
   setTimeout(() => {
    submitError.style.display = "none"
   },3000);
   return false;
     }
}