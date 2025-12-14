<?php
$local = "http://localhost:3000";
$web_url = "http://subdivision-portal.chocostiko-lobby.com";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Origin: $web_url");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

require_once "../config.php";

$input = json_decode(file_get_contents("php://input"), true);

$uid = $input['uid'] ?? null;
$status = $input['status'] ?? null;

$allowed = ['pending', 'approved', 'rejected', 'cancelled'];

if (!$uid || !in_array($status, $allowed)) {
    echo json_encode(["message" => "Invalid input"]);
    exit;
}

$stmt = $conn->prepare(
    "UPDATE reservations SET status = ? WHERE uid = ?"
);


$stmt->bind_param("ss", $status, $uid);

if ($stmt->execute()) {
    echo json_encode(["message" => "Status updated"]);
} else {
    echo json_encode(["message" => "Update failed"]);
}
file_put_contents("debug.txt", print_r($input, true));


$stmt->close();
$conn->close();