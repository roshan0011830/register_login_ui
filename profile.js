console.log("hello profile");

let profile_name = document.getElementById("profile_name");
let profile_userid = document.getElementById("profile_userid");
let profile_email = document.getElementById("profile_email");
let profile_gender = document.getElementById("profile_gender");
let profile_password = document.getElementById("profile_password");


//idhar bhi data get kiya storage wala 
let storedUser = JSON.parse(sessionStorage.getItem("user"));

if(storedUser) {
    profile_name.textContent = storedUser.Name;
    profile_userid.textContent = storedUser.Userid;
    profile_email.textContent = storedUser.Email;
    profile_gender.textContent = storedUser.Gender;
    profile_password.textContent = storedUser.Password;
}
else {
    alert("Please login first!");
    window.location.href = "login.html";
}


let logoutbtn = document.getElementById("logoutbtn");
logoutbtn.addEventListener("click", logoout);

function logoout() {
    window.location.href = "login.html";
}