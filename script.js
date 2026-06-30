function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    // Cambia 'MiClaveSecreta123' por la contraseña que tú quieras
    if (input === 'MiClaveSecreta123') {
        // Redirige a la página privada
        window.location.href = 'contenido-privado.html';
    } else {
        errorMessage.innerText = 'Contraseña incorrecta. Acceso denegado.';
    }
}