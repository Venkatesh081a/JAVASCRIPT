let heading = document.createElement("h1");
heading.textContent = "Welcome to JavaScript";
heading.style.backgroundColor = "grey";
document.body.appendChild(heading);

let myForm = document.createElement("form");
myForm.setAttribute("method", "post");
myForm.style.display = "none";

let firstName = document.createElement("input");
firstName.setAttribute("type", "text");
firstName.setAttribute("id", "FirstName");
firstName.setAttribute("placeholder", "First Name");
firstName.setAttribute("size", 30);
firstName.style.height = "20px";
//firstName.size = 50;
firstName.required = true;
firstName.maxLength = 20;
firstName.style.marginLeft = "500px";
myForm.appendChild(document.createElement("br"));
myForm.appendChild(firstName);
myForm.appendChild(document.createElement("br"));

let lastName = document.createElement("input");
lastName.setAttribute("type", "text");
lastName.setAttribute("id", "LastName");
lastName.setAttribute("placeholder", "Last Name");
lastName.size = 30;
lastName.style.height = "20px";
lastName.required = true;
lastName.maxLength = 20;
lastName.style.marginLeft = "500px";
myForm.appendChild(document.createElement("br"));
myForm.appendChild(lastName);
myForm.appendChild(document.createElement("br"));

let emailAddress = document.createElement("input");
emailAddress.setAttribute("type", "email");
emailAddress.setAttribute("placeholder", "Email Id");
emailAddress.setAttribute("id", "EmailAddress");
emailAddress.required = true;
emailAddress.size = 30;
emailAddress.style.height = "20px";
emailAddress.maxLength = 30;
emailAddress.style.marginLeft = "500px";
myForm.appendChild(document.createElement("br"));
myForm.appendChild(emailAddress);
myForm.appendChild(document.createElement("br"));

let password = document.createElement("input");
password.setAttribute("type", "password");
password.setAttribute("id", "password");
password.setAttribute("placeholder", "Password");
password.size = 30;
password.style.height = "20px";
password.required = true;
password.style.marginLeft = "500px";
myForm.appendChild(document.createElement("br"));
myForm.appendChild(password);
myForm.appendChild(document.createElement("br"));

let confirmPassword = document.createElement("input");
confirmPassword.setAttribute("type", "password");
confirmPassword.setAttribute("id", "confirmPassword");
confirmPassword.setAttribute("placeholder", "Confirm Password");
confirmPassword.size = 30;
confirmPassword.style.height = "20px";
confirmPassword.required = true;
confirmPassword.style.marginLeft = "500px";
myForm.appendChild(document.createElement("br"));
myForm.appendChild(confirmPassword);
myForm.appendChild(document.createElement("br"));

let buttonToSubmit = document.createElement("button");
let t = document.createTextNode("Register");
buttonToSubmit.appendChild(t);
buttonToSubmit.style.marginLeft = "500px";
buttonToSubmit.style.color = "darkgreen";
buttonToSubmit.style.fontSize = "15px";
myForm.appendChild(document.createElement("br"));
myForm.appendChild(buttonToSubmit);
document.body.appendChild(myForm);

function verifyPassword() {
  let passwordContent = password.value;
  if (passwordContent.length < 8) {
    alert("Password length must be atleast 8 characters");
  }
  if (passwordContent.length > 15) {
    alert("Password length must not exceed 15 characters");
  }
  let confirmPasswordContent = confirmPassword.value;
  if (passwordContent.length > 8 && passwordContent.length < 15) {
    if (passwordContent === confirmPasswordContent) {
      alert(`Hi ${firstName.value} , Registerd Successfully !`);
    } else {
      alert("Passwords don't match ! Please try again");
    }
  }
}

buttonToSubmit.addEventListener("mouseover", function () {
  buttonToSubmit.style.backgroundColor = "lightgreen";
});

buttonToSubmit.addEventListener("mouseleave", function () {
  buttonToSubmit.style.backgroundColor = "lightblue";
});

buttonToSubmit.addEventListener("click", function () {
  if (
    firstName.value.length !== 0 &&
    lastName.value.length !== 0 &&
    emailAddress.value.length !== 0 &&
    password.value.length !== 0
  ) {
    verifyPassword();
    saveFomData();
  }
});

function saveFomData() {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("FirstName", firstName.value);
    localStorage.setItem("LastName", lastName.value);
    localStorage.setItem("Email Id", emailAddress.value);
    localStorage.setItem("Password", password.value);
    localStorage.setItem("Confirm Password", confirmPassword.value);
  } else {
    alert("Sorry , Your browser does not support the WebStorage");
  }
}

let divElement = document.createElement("div");
divElement.setAttribute("id", "button-container");

let SignUp = document.createElement("input");
SignUp.setAttribute("type", "submit");
SignUp.setAttribute("value", "SignUp");
SignUp.setAttribute("id", "signup");
SignUp.style.height = "20px";
SignUp.style.width = "80px";
SignUp.autofocus = true;
SignUp.style.margin = "20px";
SignUp.style.backgroundColor = "lightblue";
divElement.appendChild(SignUp);

SignUp.addEventListener("click", function () {
  myForm.style.display = "block";
});

let Login = document.createElement("input");
Login.setAttribute("type", "submit");
Login.setAttribute("value", "Login");
Login.setAttribute("id", "login");
Login.style.height = "20px";
Login.style.width = "80px";
Login.style.margin = "20px";
Login.autofocus = true;
Login.style.backgroundColor = "lightgreen";
divElement.appendChild(Login);

let loginForm = document.createElement("form");
loginForm.setAttribute("method", "post");
loginForm.style.display = "none";

let username = document.createElement("input");
username.setAttribute("type", "email");
username.setAttribute("id", "username");
username.setAttribute("placeholder", "username");
username.size = 30;
username.style.height = "20px";
username.required = true;
username.maxLength = 30;
username.style.marginLeft = "500px";
loginForm.appendChild(document.createElement("br"));
loginForm.appendChild(username);
loginForm.appendChild(document.createElement("br"));

let loginPassword = document.createElement("input");
loginPassword.setAttribute("type", "password");
loginPassword.setAttribute("id", "loginpassword");
loginPassword.placeholder = "Password";
loginPassword.required = true;
loginPassword.size = 30;
loginPassword.style.height = "20px";
loginPassword.maxLength = 15;
loginPassword.style.marginLeft = "500px";
loginForm.appendChild(document.createElement("br"));
loginForm.appendChild(loginPassword);
loginForm.appendChild(document.createElement("br"));

let loginButton = document.createElement("input");
loginButton.type = "button";
loginButton.value = "LOGIN";
loginButton.style.marginLeft = "500px";
loginButton.style.fontSize = "15px";
loginButton.style.backgroundColor = "lightgreen";
loginForm.appendChild(document.createElement("br"));
loginForm.appendChild(loginButton);
loginForm.appendChild(document.createElement("br"));

Login.addEventListener("click", function () {
  if (
    localStorage.getItem("Email Id") === null &&
    localStorage.getItem("Password") === null
  ) {
    alert("Hi You need to Register First");
  } else {
    loginForm.style.display = "block";
  }
});

loginButton.addEventListener("click", function () {
  let usernameContent = username.value;
  let loginpasswordContent = loginPassword.value;

  if (
    localStorage.getItem("Email Id") !== null &&
    localStorage.getItem("Password") !== null
  ) {
    if (usernameContent === localStorage.getItem("Email Id")) {
      if (loginpasswordContent === localStorage.getItem("Password")) {
        alert(
          `Hi ${localStorage.getItem(
            "FirstName"
          )} ! Your Account has been created Successfully`
        );
      } else {
        alert("Password not valid , Please Sign Up First");
      }
    } else {
      alert("Username not valid , Please Sign Up First");
    }
  }
});

document.body.appendChild(loginForm);
document.body.appendChild(divElement);
