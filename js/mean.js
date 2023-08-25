// =============== SHOW NENU =================
const navMenu = document.getElementById("nav-menu");
const navCloce = document.getElementById("nav-cloce");
const navToogle = document.getElementById("nav-toogle");

if(navToogle){
    navToogle.addEventListener('click', ()=>{
        navMenu.classList.add("show-menu")
    })
}
if(navCloce){
    navCloce.addEventListener('click', ()=>{
        navMenu.classList.remove("show-menu")
    })
}

// لما بضغط علي اي الي اي بيتم اختفاء الناف

const navLink =document.querySelectorAll(".nav__link");

const linkAction =()=>{
    const navMenu =document.getElementById('nav-menu');
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n=>n.addEventListener('click', linkAction))




// ===================== CHANGE BACKGROUND HEADER=========================
const scrollHeader =()=>{
    const header =document.getElementById("header");
    this.scrollY >= 50? header.classList.add('bg-header')
     :header.classList.remove('bg-header');
}
window.addEventListener("scroll",scrollHeader)