<?php
// proxy_validador.php
$url = 'http://integranet.dyndns.org:81/cotizanet/signin/valdiate_sesion2.php';

$ch = curl_init($url);

// Convertimos el array $_POST en una cadena de consulta (user=admin&pass=123)
$postData = http_build_query($_POST);

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// IMPORTANTE: Decirle al servidor local que esto es un formulario estándar
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/x-www-form-urlencoded'
));

$result = curl_exec($ch);
curl_close($ch);

echo $result;
?>
