<?php
session_start();
$local = "http://localhost:3000";
$web_url = "http://subdivision-portal.chocostiko-lobby.com";
header("Access-Control-Allow-Origin: $web_url");
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once "../config.php";

$input = json_decode(file_get_contents("php://input"), true);

$email = $input["email"];
$password = $input["password"];


$stmt = $conn->prepare("SELECT email, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["message" => "User not found", "valid" => false]);
    exit;
}

$user = $result->fetch_assoc();


if (password_verify($password, $user["password"])) {
    $_SESSION['email'] = $email;
    echo json_encode([
        "message" => "Login successful",
        "email" => $user["email"],
        "session" => $_SESSION,
        "valid" => true,
    ]);
} else {
    echo json_encode(["message" => "Invalid password", "valid" => false]);
}

$stmt->close();
$conn->close();
?>
