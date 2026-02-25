<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cotizanet ERP - Login</title>
    <style>
        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f0f2f5; }
        .login-card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 300px; }
        input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
        button { width: 100%; padding: 10px; background: #1a66d4; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .message { margin-top: 15px; text-align: center; font-size: 0.9rem; }
        .error { color: red; }
        .success { color: green; }
    </style>
</head>
<body>

<div class="login-card">
    <h2>Cotizanet <span style="color:#1a66d4">ERP</span></h2>
    <form id="loginForm">
        <input type="text" id="username" name="username" placeholder="Usuario" required>
        <input type="password" id="password" name="password" placeholder="Contraseña" required>
        <button type="submit">Acceder</button>
    </form>
    <div id="message" class="message"></div>
</div>

<script>
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const messageDiv = document.getElementById('message');
    const formData = new FormData(e.target);

    messageDiv.innerHTML = "Verificando...";

    try {
        // LLAMADA AL SERVIDOR SEGURO
        const response = await fetch('https://tktiende.dyndns.org/i-erp/tx.php', {
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
</script>

</body>
</html>
