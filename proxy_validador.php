<?php
// proxy_validador.php

// 1. Configuración del destino (tu túnel)
$url = 'http://integranet.dyndns.org:81/cotizanet/signin/valdiate_sesion2.php';

// 2. Inicializar cURL para reenviar la petición POST
$ch = curl_init($url);

// Configurar cURL para que se comporte como un puente
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST); // Reenvía todo lo que llegó por POST (user y pass)
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Tiempo límite de espera

// 3. Ejecutar y obtener respuesta
$result = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    // Si el túnel está caído, avisamos al JS
    echo "error_conexion";
} else {
    // Devolvemos lo que diga tu servidor local (success o fail)
    echo $result;
}

curl_close($ch);
?>
