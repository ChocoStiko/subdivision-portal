<?php
session_start();
$local = "http://localhost:3000";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once "../config.php";

$email = $_SESSION["email"] ?? null;

if (!$email) {
    echo json_encode([
        "message" => "Not authenticated"
    ]);
    exit;
}

$stmt = $conn->prepare(
    "SELECT empid, email, homeowner_name, address, license_no, plate_no, carbrand, model, year_model, vehicle_color, status FROM vehicle_stickers WHERE email = ? ORDER BY status ASC"
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
