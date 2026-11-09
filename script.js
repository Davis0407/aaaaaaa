const boton = document.getElementById('miBoton');
const pantallaInicio = document.getElementById('pantallaInicio');
const pantallaImagen = document.getElementById('pantallaImagen');

boton.addEventListener('click', () => {
    // Oculta la pantalla del botón
    pantallaInicio.classList.add('oculto');
    
    
    pantallaImagen.classList.remove('oculto');
});