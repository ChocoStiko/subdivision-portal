<?php
session_start();

$local = "http://localhost:3000";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once "../config.php";

$adminEmail = $_SESSION["email"] ?? null;


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
    "SELECT COUNT(*) AS pending_stickers FROM vehicle_stickers WHERE status = 'pending'"
);
$stmtStickers->execute();
$resultStickers = $stmtStickers->get_result();
$pendingStickers = $resultStickers->fetch_assoc()["pending_stickers"];
$stmtStickers->close();

<<<<<<< HEAD
$conn->close();



=======
>>>>>>> 5c7841134108f27ecbbc8005764abf6c86760bec
echo json_encode([
    "total_users" => $totalUsers,
    "pending_reservations" => $pendingReservations,
    "pending_stickers" => $pendingStickers,
]);

$conn->close();