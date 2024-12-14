const inp = document.querySelector(".inp")
const btn = document.querySelector(".btn");
const img = document.querySelector("img")
// const alert = document.querySelector(".alert");

// let click = 0;

// btn.addEventListener('click', ()=>{
//     alert.innerHTML = inp.value
// })

// ***********************************************

btn.addEventListener('click', ()=>{
    alert(inp.value*20 + "px")
    img.style.width = (inp.value*20) + "px"
})
