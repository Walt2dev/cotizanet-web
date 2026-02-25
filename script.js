document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;
    const messageDiv = document.getElementById('message');
    const formData = new FormData(form);

    // Limpiamos el mensaje previo
    messageDiv.innerHTML = 'Conectando...';

    try {
        // Petición al túnel en tu servidor local
    // Ahora llamas al archivo local en tu hosting .online
    const response = await fetch('proxy_validador.php', { 
        method: 'POST',
        body: formData
    });

        // Obtenemos la respuesta como texto
        const result = await response.text();
        
        // Esto es para que tú veas en la consola qué está mandando el PHP realmente
        console.log("Respuesta bruta del servidor:", result);

        // Usamos trim() para eliminar espacios accidentales o saltos de línea
        if (result.trim() === 'success') {
            messageDiv.innerHTML = '<span class="success">Acceso concedido. Redirigiendo...</span>';
            
            // Redirigir después de 1 segundo al dashboard en tu hosting
            setTimeout(() => {
                window.location.href = 'dashboard.php'; 
            }, 1000);
        } else {
            messageDiv.innerHTML = '<span class="error">Usuario o contraseña incorrectos.</span>';
            console.warn("Fallo de autenticación. El servidor respondió:", result);
        }

    } catch (error) {
        // Si hay error de red, CORS o el túnel está caído, caerá aquí
        console.error('Error detectado:', error);
        messageDiv.innerHTML = '<span class="error">Error en la conexión con el servidor local.</span>';
    }
});
