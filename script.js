document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const messageDiv = document.getElementById('message');
    const formData = new FormData(form);

    try {
        // Cambia la línea del fetch en script.js
const response = await fetch('http://integranet.dyndns.org:81/cotizanet/signin/valdiate_sesion2.php', {
    method: 'POST',
    body: formData
    // Si tienes problemas de cookies/sesiones entre dominios, 
    // podrías necesitar: credentials: 'include'
});

        const result = await response.text();

        if (result.trim() === 'success') {
            messageDiv.innerHTML = '<span class="success">Acceso concedido. Redirigiendo...</span>';
            // Redirigir después de 1 segundo
            setTimeout(() => {
                window.location.href = 'dashboard.php'; 
            }, 1000);
        } else {
            messageDiv.innerHTML = '<span class="error">Usuario o contraseña incorrectos.</span>';
        }
    } catch (error) {
        console.error('Error:', error);
        messageDiv.innerHTML = '<span class="error">Error en la conexión con el servidor.</span>';
    }
});
