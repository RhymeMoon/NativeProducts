let hamburger = document.getElementById('hamburger')
let Xbutton = document.getElementById('close')
let menu = document.getElementById('menu')

 hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none'
    Xbutton.style.display = 'block'
    menu.style.opacity = '1';
    menu.style.position= 'absolute'
    menu.style.right= '0'
    menu.style.top= '40px'
    menu.style.textAlign= 'center'
    menu.style.backgroundColor= 'rgba(86, 64, 30, 0.893)'
    menu.style.boxShadow= '0 0 5px 5px rgba(86, 64, 30, 0.893)'
 })
 
 Xbutton.addEventListener('click', () => {
    hamburger.style.display = 'block'
    Xbutton.style.display = 'none'
    menu.style.opacity = '0';
    
 })






// let menu = document.getElementById('menu')
// let btn = menu.getElementsByClassName('nav-link')

// for (i = 0 ; i < btn.length; i++){

//     btn[i].addEventListener("click", function () {
//         let current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace("active","");
//             this.className= "active" 
//     });
// }