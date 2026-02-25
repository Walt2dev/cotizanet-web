<?php
$url = 'http://integranet.dyndns.org:81/cotizanet/signin/vaca.php';

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_VERBOSE, true);
curl_setopt($ch, CURLOPT_HEADER, true); // ESTO ES LA CLAVE: Nos dará las cabeceras

$response = curl_exec($ch);
$info = curl_getinfo($ch);

echo "<h2>Diagnóstico de Conexión</h2>";

if (curl_errno($ch)) {
    echo "<b>Error de Red:</b> " . curl_error($ch);
} else {
    echo "<b>Código HTTP:</b> " . $info['http_code'] . "<br>";
    echo "<b>Tipo de Contenido:</b> " . $info['content_type'] . "<br>";
    echo "<b>Servidor que responde:</b> " . ($info['primary_ip'] ?? 'No detectada') . "<br>";
    
    echo "<h3>Cabeceras de respuesta (Aquí verás quién te bloquea):</h3>";
    echo "<pre>" . htmlspecialchars($response) . "</pre>";
}

curl_close($ch);
?>
