<?php
// check_tunel.php
$url = 'http://integranet.dyndns.org:81/cotizanet/signin/tx.php';

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10); // Esperar máximo 10 segundos

$result = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    echo "Error de cURL: " . curl_error($ch);
} else {
    echo "Código HTTP: " . $http_code . "<br>";
    echo "Respuesta del Servidor Local: <b>" . $result . "</b>";
}

curl_close($ch);
?>
