var baseDatos = [];
function agregar(){
    baseDatos.push(nuevousuario);
    console.log(baseDatos);
}

function capturar(){
    
    class Usuario {
        constructor(nombre, email, contraseña) {
            this.nombre = nombre;
            this.email = email;
            this.contraseña = contraseña;
        }
    }
    var nombreCapturar = document.getElementById("name").value;
    //console.log(nombreCapturar);
    var emailCapturar = document.getElementById("email").value;

    var contraseñaCapturar = document.getElementById("password").value;
    //console.log(contraseñaCapturar);

    nuevousuario = new Usuario(nombreCapturar , emailCapturar , contraseñaCapturar);
    console.log(nuevousuario);
    agregar();
}   