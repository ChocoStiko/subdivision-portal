<?php
$url = "http://localhost:3000";
header("Access-Control-Allow-Origin: $url");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

require_once "../config.php";
require_once "../sendEmail.php";

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

$stmt->execute();

$stmt2 = $conn->prepare(
        "SELECT email, reservation_type, date, time_from, time_to FROM reservations WHERE uid = ?"
    );
    $stmt2->bind_param("s", $uid);
    $stmt2->execute();
    $result = $stmt2->get_result()->fetch_assoc();
    $stmt2->close();

    $emailSent = false;

    if($result && in_array($status,['approved', 'rejected'])){
        $emailSent = sendApprovalEmail(
        $result['email'],
        $result['reservation_type'],
        $result['date'],
        $result['time_from'],
        $result['time_to'],
        $status
        );
    }

        echo json_encode([
        "message" => "Status updated",
        "emailSent" => $emailSent
]);



$stmt->close();
$conn->close();