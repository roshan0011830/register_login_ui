console.log('hello registration walo');

let submitButton = document.querySelector("button");
submitButton.addEventListener("click", registerUser);

// ----------registerUser()----------

function registerUser() {
    let name = document.getElementById("name").value;
    console.log(name);
    let userId = document.getElementById("userId").value;
    console.log(userId);
    let email = document.getElementById("email").value;
    console.log(email);
    let gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);
    let password = document.getElementById("password").value;
    console.log(password);

    let userdata = {
        Name : name,
        Userid : userId,
        Email : email,
        Gender : gender,
        Password : password
    };

    console.log(userdata);


    // store kiya data user nam ki key mai 
    sessionStorage.setItem("user", JSON.stringify(userdata));
    console.log(JSON.stringify(userdata));

    // or session storage mai data keval string ke format mai store hota isly json.strigify kiya 

    //hum user ko ese access nhi kar sakte data retrieve krna padega jo
    //get item se hoga

    let storedUser = JSON.parse(sessionStorage.getItem("user"));
    console.log(storedUser);

    //ye ho gya apna wapis object mai convert

    // console.log(storedUser.Name);
    // console.log(storedUser.Email);
    // console.log(storedUser.Gender);
    // console.log(storedUser.Userid);
    // console.log(storedUser.Password);



    //data store ke baad last mai login page khule

    window.location.href = "login.html";




}

