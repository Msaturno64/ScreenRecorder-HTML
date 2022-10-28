checkLocalStorage();
$('#formulario').submit(function(e){
    e.preventDefault();
   let username = $.trim($("#usuario").val());
   let password = $.trim($("#pass").val());
    if(username.length =="" || password ==""){
        Swal.fire({
            icon: 'warning',
            title: 'Debes ingrese un Usuario y/o Contraseña!!',
            showConfirmButton: false,
            timer: 1250
        });
        return
    }else{
        let user = {
            username: username, 
            password: password
        };
        let URLGET = "https://alexanderendpoint.herokuapp.com/api/login"
        $.ajax({
            url: URLGET,
            type: 'POST',
            data: user,
            success: function(data){
                console.log(data);
                if(data.status == "success"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Bienvenido',
                        text: 'Disfrutelo',
                        showConfirmButton: false,
                        timer: 2000 
                    });
                    guardarLocal(data.userData.username);
                    setTimeout(()=>{
                        window.location.href = "inicio.html";
                    },2000);
                }
            },
            // Se hizo una funcion error para manejar posibles respuestas.
            error: function (xhr, desc, err){
                if(xhr.responseJSON.status == "error"){
                    Swal.fire({
                        icon: 'error',
                        title: 'Usuario y/o Contraseña Incorrectos',
                        footer: '<a href="#">Olvidaste tu contraseña?</a>',
                    }); 
                    return

                }
                Swal.fire({
                    icon: 'error',
                    title: 'Oopps....',
                }); 
                
            } 
        });
    };
});

function guardarLocal(username){
    if(localStorage.getItem('auth')){
        return
    }
    const save ={
        username : username,
        login : true
    }

    localStorage.setItem('auth',JSON.stringify(save))
    return true
}

function checkLocalStorage(){
    if(localStorage.getItem('auth')){
        window.location.href = "inicio.html"
        return 
    }
    return
}