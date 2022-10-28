const nombre= document.getElementById("name");
const Email= document.getElementById("email");
const pass= document.getElementById("password");
// const form = document.getElementsById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^[a-zA-Z0-6.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-6-]+(?:\.[a-zA-Z0-6-]+)*$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += "El nombre no es valido <br>"
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += "El email no es valido <br>"
        entrar = true

    }
    if(pass.value.length <8){
        warnings += "La contraseña no es valida <br>"
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
