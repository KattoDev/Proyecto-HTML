<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

$server = "localhost";
$user = "API";
$pass = "W9lMh-hTF2-eqRHh";
$db = "api_proj_sena";

$connection = mysqli_connect($server, $user, $pass, $db);

if (!$connection) {
    http_response_code(500);
    echo json_encode(["error" => "connection failed" . mysqli_connect_error()]);
    exit;
}

$sql = "SELECT * FROM inscriptions";
$result = mysqli_query($connection, $sql);

$data = [];

if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

echo json_encode($data);

mysqli_close($connection);