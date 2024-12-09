document.getElementById('loginForm').addEventListener('submit', function(event){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // VALIDAR SI LOS CAMPOS ESTÁN VACIOS 

    if (username === "" || password === ""){
        alert("Por favor, completa todos los campos");
        event.preventDefault(); // EVITAR EL ENVIO DEL FORMULARIO SI FALTAN CAMPOS 
    } 
    
    else{
        // REDIRIGIR A INDEX.HTML SIN ENVIAR EL FORMULARIO  

        event.preventDefault(); // EVITAR QUE EL FORMULARIO SE ENVIE  
        window.location.href = "/Monsters_University - one work/index.html"; // REDIRIGIR A LA PÁGINA PRINCIPAL 
    }
});