let navbar = document.querySelector('.header .navbar');
let loginF = document.querySelector("#login-btn");
let formLogin = document.querySelector("#loginform");

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

// document.querySelector('#login-btn').onclick = () => {
//     loginForm2.classList.toggle('active');
// };

loginF.onclick = () => {
    formLogin.classList.toggle('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
    formLogin.classList.remove('active');
}

