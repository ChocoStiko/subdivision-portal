<?php
session_start();
$local = "http://localhost:3000";
$web_url = "http://subdivision-portal.chocostiko-lobby.com";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Origin: $web_url");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once "../config.php";

$email = $_SESSION["email"] ?? null;

if (!$email) {
    echo json_encode([
        "message" => "Not authenticated"
    ]);
    exit;
}

$stmt = $conn->prepare(
    "SELECT uid, reservation_type, date, time_from, time_to, status FROM reservations WHERE email = ? ORDER BY status ASC"
);

$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();
$rows = [];

while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

echo json_encode([
    "data" => $rows,
    "session" => $email
]);

$stmt->close();
$conn->close();
