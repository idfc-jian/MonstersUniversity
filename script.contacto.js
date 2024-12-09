document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    

    const nombre = document.getElementById('nombrecompleto').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    // Crear contenido HTML con la información del usuario
    const contenidoHTML = `
        <html>
        <head><title>Información de Contacto</title></head>
        <body>
            <h1>Información del Contacto</h1>
            <p><strong>Nombre Completo:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
        </body>
        </html>
    `;
    


    // Crear el mensaje de alerta con la información del contacto
    const mensajeAlerta = `
    Nombre Completo: ${nombre}
    Email: ${email}
    Teléfono: ${telefono}
    Asunto: ${asunto}
    Mensaje: ${mensaje}
    `;

    // Mostrar el mensaje en una alerta

    alert(mensajeAlerta);

    // Crear un archivo descargable
    const blob = new Blob([contenidoHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);


    const link = document.createElement('a');
    link.href = url;
    link.download = 'contacto_guardado.html';


    document.body.appendChild(link);
    link.click();


    document.body.removeChild(link);

    document.getElementById('statusMessage').textContent = 'Formulario enviado y guardado exitosamente.';

    displayMessage('Formulario enviado y datos guardados con éxito.', 'success');
});



function displayMessage(text, type) {
const messageArea = document.getElementById('messageArea');
messageArea.innerText = text;
messageArea.style.color = type === 'error' ? 'red' : 'green';
}