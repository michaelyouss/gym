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

//  ======== calculate -js ======================================================
const calculateForm =document.getElementById("calculate-form")
const calculateCm = document.getElementById("calculate-cm")
const calculateKg  = document.getElementById("calculate-Kg")
const calculateMessage = document.getElementById("calculate-message")

const calculateBmi =(e) =>{
e.preventDefault()
// Check if the fields a value
if(calculateCm.value === '' || calculateKg.value === '' ){
    // show message
calculateMessage.innerHTML = "Fill in the height and width 🤦‍♂️"

setTimeout(()=>{
    calculateMessage.innerHTML = ""
},1000)
// add and remov color

// calculateMessage.classList.remove("color-gren")
calculateMessage.classList.add("color-red")
}else{
   
    setTimeout(()=>{
        calculateMessage.innerHTML = ""
    },5000)

    calculateMessage.classList.add("color-gren")
const cm = calculateCm.value / 100
       kg = calculateKg.value,
       bmi =Math.round(kg /(cm * cm))
    //    show your health status
    if(bmi < 15){
// add color and display message
calculateMessage.innerHTML = `your BML is ${bmi} and you are skinny 😢`
    }else if(bmi <25){
        calculateMessage.innerHTML = `your BML is ${bmi} and you are healthy 🥰`
    }else if(bmi < 30){
        calculateMessage.innerHTML = `your BML is ${bmi} and you are obese 😯`
    }else if(bmi < 40){
        calculateMessage.innerHTML = `your BML is ${bmi} and you are Extremely Obese 😱`
    }else{
        calculateMessage.innerHTML = `your BML is ${bmi} and you are Extremely Obese 😱`
    }
    // To clear the input filed
    calculateCm.value=''
    calculateKg.value=''
// Remove message four secound

   
   
    }
  
}

calculateForm.addEventListener('submit',calculateBmi)


// console.log(calculateMessage);