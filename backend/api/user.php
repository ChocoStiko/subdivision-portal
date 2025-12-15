<?php
$local = "http://localhost:3000";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

require_once "../config.php";

$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    echo json_encode(["message" => "No data received"]);
    exit;
}

$first_name = $input["first_name"];
$last_name = $input["last_name"];
$contact_number = $input["contact_number"];
$email = $input["email"];
$password = $input["password"];

// hash password
$password_hashed = password_hash($password, PASSWORD_DEFAULT);


$stmt = $conn->prepare("INSERT INTO users (first_name, last_name, contact_number, email, password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $first_name, $last_name, $contact_number, $email, $password_hashed);


if ($stmt->execute()) {
    echo json_encode(["message" => "Data saved successfully"]);
} else {
    echo json_encode(["message" => "Failed to save data", "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
