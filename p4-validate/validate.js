function validateName(name){
    const regex=/^[A-Za-z\s]+$/;
    if(name.trim()===""){
        return "Name cannot be empty";
    }
    if(!regex.test(name)){
        return "Name can only contain letters and spaces";
    }
    return "Name is valid";
}

function validateEmail(Email){
    const regex=/^[A-Za-z-0-9._%+-]+@[a-zA-Z0-9.-]+\[a-zA-Z]{2,}$/;
    if(email.trim()===""){
        return "email cannot be empty";
    }
    if(!regex.test(Email)){
        return "Invalid email format";
    }
    return "email is valid";
}

function validatePassword(Password){
    const regex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(password.trim()===""){
        return "password cannot be empty";
    }
    if(!regex.test(password)){
        return "password must be atleast 8 character long,contain an uppercase letter and a number";
    }
    return "password is valid";
}

function validatePhoneNumber(PhoneNumber){
    const regex=/^[0-9]{10}$/;
    if(phonenumber.trim()==""){
        return "phone number cannot be empty";
    }
    if(!regex.test(phonenumber)){
        return "phone number must be 10 digits long";
    }
    return "phonenumber is valid";
}

function validateForm(){
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value
    const phonenumber=document.getElementById("phone").value;
    const nameError=validateName(name);
    const emailError=validateEmail(email);
    const passwordError=validatePassword(password);
    const phoneError=validatePhoneNumber(phone);
    if(nameError==="Name is valid" &&email==="email is valid" &&password==="password is valid" &&phone==="phonenumber is valid"){
           return true;
        }
        document.getElementById("nameError").innerText=nameError==="Name is valid"?"":nameError;
        document.getElementById("emailError").innerText=nameError==="email is valid"?"":emailError;
        document.getElementById("passwordError").innerText=nameError==="password is valid"?"":passwordError;
        document.getElementById("phoneError").innerText=nameError==="phonenumber is valid"?"":phoneError;





}

