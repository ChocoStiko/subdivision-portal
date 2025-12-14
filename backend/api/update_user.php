<?php
session_start();
$local = "http://localhost:3000";
$web_url = "http://subdivision-portal.chocostiko-lobby.com";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Origin: $web_url");
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

$id = (int)$input['id'];
$first_name = $input["first_name"];
$last_name = $input["last_name"];
$contact_number = $input["contact_number"];
$email = $input["email"];

// hash password


$stmt = $conn->prepare("UPDATE users SET first_name = ?, last_name = ?, contact_number = ?, email = ? WHERE id = ?");
$stmt->bind_param("ssssi", $first_name, $last_name, $contact_number, $email, $id);


if ($stmt->execute()) {
    echo json_encode(["message" => "Updated successfully"]);
} else {
    echo json_encode(["message" => "Failed to update data", "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
