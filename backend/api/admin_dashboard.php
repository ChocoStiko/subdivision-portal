<?php
session_start();

$allowedOrigins = ["http://localhost:3000", "http://subdivision-portal.chocostiko-lobby.com"];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once "../config.php";

$adminEmail = $_SESSION["admin_email"] ?? null;

if (!$adminEmail) {
    echo json_encode([
        "message" => "Not authenticated"
    ]);
    exit;
}

/*total users*/
$stmtUsers = $conn->prepare(
    "SELECT COUNT(*) as total_users FROM users"
);
$stmtUsers->execute();
$resultUsers = $stmtUsers->get_result();
$totalUsers = $resultUsers->fetch_assoc()["total_users"];
$stmtUsers->close();

/*pending reservations*/
$stmtReservations = $conn->prepare(
    "SELECT COUNT(*) AS pending_reservations FROM reservations WHERE status = 'pending'"
);
$stmtReservations->execute();
$resultReservations = $stmtReservations->get_result();
$pendingReservations = $resultReservations->fetch_assoc()["pending_reservations"];
$stmtReservations->close();

/*pending car stickers*/
$stmtStickers = $conn->prepare(
    "SELECT COUNT(*) AS pending_stickers FROM car_sticker WHERE status = 'pending'"
);
$stmtStickers->execute();
$resultStickers = $stmtStickers->get_result();
$pendingStickers = $resultStickers->fetch_assoc()["pending_stickers"];
$stmtStickers->close();

$conn->close();

echo json_encode([
    "totalUsers" => $totalUsers,
    "pendingReservations" => $pendingReservations,
    "pendingStickers" => $pendingStickers,
]);