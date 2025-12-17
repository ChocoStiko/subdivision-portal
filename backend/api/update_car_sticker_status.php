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

$empid = $input['empid'] ?? null;
$status = $input['status'] ?? null;

$allowed = ['pending', 'approved', 'rejected', 'cancelled'];

if (!$empid || !in_array($status, $allowed)) {
    echo json_encode(["message" => "Invalid input"]);
    exit;
}

$stmt = $conn->prepare(
    "UPDATE vehicle_stickers SET status = ? WHERE empid = ?"
);


$stmt->bind_param("ss", $status, $empid);

if ($stmt->execute()) {
    echo json_encode(["message" => "Status updated"]);
} else {
    echo json_encode(["message" => "Update failed"]);
}
file_put_contents("debug.txt", print_r($input, true));

$stmt2 = $conn->prepare(
        "SELECT email, homeowner_name, address, license_no, plate_no, carbrand, model, year_model, vehicle_color FROM vehicle_stickers WHERE empid = ?"
    );
    $stmt2->bind_param("s", $empid);
    $stmt2->execute();
    $result = $stmt2->get_result()->fetch_assoc();
    $stmt2->close();

    $emailSent = false;

    if($result && in_array($status,['approved', 'rejected'])){
        $emailSent = sendApprovalEmailCarStikcer(
        $result['email'],
        $result['homeowner_name'],
        $result['address'],
        $result['license_no'],
        $result['plate_no'],
        $result['carbrand'],
        $result['model'],
        $result['year_model'],
        $result['vehicle_color'],
        $status
        );
    }


$stmt->close();
$conn->close();
