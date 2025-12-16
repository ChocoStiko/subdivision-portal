<?php
session_start();
$local = "http://localhost:3000";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

require_once "../config.php";

$input = json_decode(file_get_contents("php://input"), true);
if (!$input || !isset($input['uid'])) {
    echo json_encode(["message"=>"Invalid input"]);
    exit;
}

$uid = $input['uid'];
$stmt = $conn->prepare("DELETE FROM reservations WHERE uid = ?");
$stmt->bind_param("s", $uid);
if ($stmt->execute()) {
    echo json_encode(["message"=>"Deleted successfully"]);
} else {
    echo json_encode(["message"=>"Delete failed"]);
}
$stmt->close();
$conn->close();