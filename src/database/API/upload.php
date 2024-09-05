<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = mysqli_real_escape_string($connection, $_POST['name']);
    $surname = mysqli_real_escape_string($connection, $_POST['surname']);
    $email = mysqli_real_escape_string($connection, $_POST['email']);

    $sql = "INSERT INTO inscriptions (name, surname, email) VALUES ('$name', '$surname', '$email')";

    if (mysqli_query($connection, $sql)) {
        echo json_encode(["success" => "datos recibidos"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "ERROR: " . mysqli_error($connection)]);
    }

    mysqli_close($connection);
}
else{
    http_response_code(405);
    echo "forbiden method";
}
