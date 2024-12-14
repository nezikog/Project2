const inp = document.querySelector(".inp")
const btn = document.querySelector(".btn");
const img = document.querySelector("img")
const text = document.querySelector(".h2")
// const alert = document.querySelector(".alert");

// let click = 0;

// btn.addEventListener('click', ()=>{
//     alert.innerHTML = inp.value
// })

// ***********************************************

inp.addEventListener('input', ()=>{
    text.textContent = inp.value*20 + "px"
    img.style.width = (inp.value*20) + "px"
})
