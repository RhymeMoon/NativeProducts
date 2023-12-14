let hamburger = document.getElementById("hamburger");
let Xbutton = document.getElementById("close");
let menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  Xbutton.style.display = "block";
  menu.style.display = "flex";
  menu.style.position = "absolute";
  menu.style.right = "5px";
  menu.style.top = "40px";
  menu.style.height = "30px";
  menu.style.textAlign = "center";
  menu.style.backgroundColor = "rgba(86, 64, 30, 0.893)";
  menu.style.boxShadow = "0 0 5px 5px rgba(86, 64, 30, 0.893)";
});

Xbutton.addEventListener("click", () => {
  hamburger.style.display = "block";
  Xbutton.style.display = "none";
  menu.style.display = "none";
});

//sending email
    // Password: "81371FDC6625E9B873C985F9B9E240ED557F",
function sendEmail() {
  let username = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let enquiry = document.getElementById("message").value;

  let message =
    "Name: " +
    username +
    "<br> Phone Number: " +
    phone +
    "<br> Email: " +
    email +
    "<br> Message: " +
    enquiry;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "raymund.ihap@gmail.com",
    Password: "23D7CBAAEF181856F0DA3F479E7AC71C69DC",
    To: "info@rhymemoon.site",
    From: "abanreset91@gmail.com",
    Subject: "Native Product Enquiry",
    Body: message,
  }).then((message) => {
    if (message == "OK") {
      swal("Success", "We well contact you shortly!", "success");
    } else {
      swal("Error", "You clicked the button!", "error");
    }
  });
}

// let menu = document.getElementById('menu')
// let btn = menu.getElementsByClassName('nav-link')

// for (i = 0 ; i < btn.length; i++){

//     btn[i].addEventListener("click", function () {
//         let current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace("active","");
//             this.className= "active"
//     });
// }
