console.log("hello login");

let login_button = document.querySelector("button");
login_button.addEventListener("click", verify);

function verify() {
    let enteredUserid = document.querySelector("#login_userid").value;
    let enteredPassword = document.querySelector("#login_password").value;

    let storedUser = JSON.parse(sessionStorage.getItem("user"));

    console.log(storedUser);

    if(storedUser && enteredUserid === storedUser.Userid && enteredPassword === storedUser.Password) {
        alert("login succesful...!");
        window.location.href = "profile.html";

    } else {
        alert("invalid user ID or password");
    }
}