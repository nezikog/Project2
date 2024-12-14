const inp = document.querySelector(".inp")
const btn = document.querySelector(".btn");
const alert = document.querySelector(".alert");

let click = 0;

btn.addEventListener('click', ()=>{
    alert.innerHTML = inp.value
})
