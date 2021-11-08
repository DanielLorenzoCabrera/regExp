document.addEventListener("DOMContentLoaded", ()=>{

    let input = document.querySelector("input");
    input.addEventListener("keyup", regExpExample);

});

function regExpExample(){
    let expresion = new RegExp("[!?$#%|]","gi");
    let advertencia = document.querySelector(".advertencia");
    let resultado = expresion.test(this.value) 
    ? advertencia.innerHTML = "Te dije que no introdujeras ninguno de esos símbolos, bórralo" 
    : advertencia.innerHTML = "" ;
}
