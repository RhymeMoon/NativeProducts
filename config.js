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
  menu.style.backgroundColor = "rgba(0, 0, 0, 0.783)";
  menu.style.boxShadow = "0 5px 5px 3px rgba(0, 0, 0, 0.783)";
});

Xbutton.addEventListener("click", () => {
  hamburger.style.display = "block";
  Xbutton.style.display = "none";
  menu.style.display = "none";
});

///loading animation
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        ".inline").style.visibility = "visible";
  } else {
      document.querySelector(
        ".inline").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};

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

// open close the slides
let magnifies = document.querySelectorAll(".fa-magnifying-glass");
let slideContainers = document.querySelectorAll(".slide-container");
let slideCloseButtons = document.querySelectorAll(".close-button");

magnifies.forEach((magnify, index) => {
  magnify.addEventListener("click", () => {
    // Check if the corresponding slide container exists
    if (slideContainers.length > index) {
      // Toggle the display of the corresponding slide container
      slideContainers[index].style.display =
        slideContainers[index].style.display === "block" ? "none" : "block";
    }
  });
});
// slideCloseButtons.forEach((closeButton, index) => {
//   closeButton.addEventListener("click", () => {
//     // Hide the corresponding product when the close button is clicked
//     slideContainers[index].style.display = "none";
//   });
// });

// // creating a slide
// const slideItems = document.querySelectorAll(".slide-item");
// let currentIndex = 0;

// function showSlide(index) {
//   slideItems.forEach((item) => {
//     item.style.display = "none";
//   });
//   // Show the slide at the specified index
//   slideItems[index].style.display = "block";
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % slideItems.length;
//   showSlide(currentIndex);
// }
// function previousSlide() {
//   currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
//   showSlide(currentIndex);
// }
// showSlide(currentIndex);

// document.getElementById("nextBtn").addEventListener("click", nextSlide);
// document.getElementById("prevBtn").addEventListener("click", previousSlide);




//       COMMENT REMOVER
document.addEventListener("DOMContentLoaded", function () {
  removeComments(document.body);
});

function removeComments(element) {
  for (let i = element.childNodes.length - 1; i >= 0; i--) {
    let node = element.childNodes[i];
    if (node.nodeType === 8) {
      // Comment node type
      element.removeChild(node);
    } else if (node.nodeType === 1) {
      // Element node type
      removeComments(node); // Recursively remove comments in child elements
    }
  }
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
