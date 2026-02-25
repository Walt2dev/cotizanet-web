document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const messageDiv = document.getElementById('message');
    const formData = new FormData(form);

    try {
        const response = await fetch('validar_sesion.php', {
            method: 'POST',
            body: formData
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
