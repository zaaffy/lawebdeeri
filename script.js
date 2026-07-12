function checkPassword() {
    const user = document.getElementById('userInput').value;
    const pass = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');

    // Usuario administrador: angel
    if (user === 'angel' && pass === '1707') {
        window.location.href = 'contpriv.html';
    } 
    // Usuario principal: erika
    else if (user === 'erika' && pass === '20072010') {
        window.location.href = 'contpriv.html';
    } 
    // Si falla..
    else {
        errorMessage.innerText = 'Usuario o contraseña incorrectos.';
    }
}

// Codigo realizado por Angel Marquez Garcia, estudiante del curso de JavaScript Total de Udemy.