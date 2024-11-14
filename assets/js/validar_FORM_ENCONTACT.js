function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const imagen = document.getElementById('imagen').files[0];

    // Validar que los campos obligatorios estén completos
    if (nombre.trim() === '' || email.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }

    // Validar que la imagen sea JPG o PNG
    if (imagen) {
        const tipoImagen = imagen.type;
        if (tipoImagen !== 'image/jpeg' && tipoImagen !== 'image/png') {
            alert('La imagen debe ser en formato JPG o PNG.');
            return false;
        }
    }

    alert('Formulario enviado con éxito.');
    return true;
}

function mostrarImagen(event) {
    const imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
    imagen.style.display = 'block';
}