document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const messageDiv = document.getElementById('message');
    const formData = new FormData(e.target);

    messageDiv.innerHTML = "Verificando...";

    try {
        // LLAMADA AL SERVIDOR SEGURO
        const response = await fetch('https://tktiende.dyndns.org/erp/validador.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.text();

        if (result.trim() === 'success') {
            messageDiv.innerHTML = '<span class="success">Acceso correcto. Redirigiendo...</span>';
            setTimeout(() => { 
                window.location.href = 'dashboard.html'; 
            }, 1000);
        } else {
            messageDiv.innerHTML = '<span class="error">Usuario o contraseña incorrectos.</span>';
        }
    } catch (error) {
        console.error(error);
        messageDiv.innerHTML = '<span class="error">Error de conexión con el servidor de autenticación.</span>';
    }
});
