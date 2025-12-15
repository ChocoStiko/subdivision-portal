<?php
session_start();
$local = "http://localhost:3000";;
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

$id = $input["id"];
$email = $input["email"];
$homeowner_name = $input["homeowner_name"];
$address = $input["address"];
$license_no = $input["license_number"];
$plate_no = $input["plate_number"];
$carbrand = $input["car_brand"];
$model = $input["model"];
$year_model = $input["year_model"];
$vehicle_color = $input["vehicle_color"];


$stmt = $conn->prepare("INSERT INTO vehicle_stickers (empid, email, homeowner_name, address, license_no, plate_no, carbrand, model, year_model, vehicle_color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssssss", $id, $email, $homeowner_name, $address, $license_no, $plate_no, $carbrand, $model, $year_model, $vehicle_color);


if ($stmt->execute()) {
    echo json_encode(["message" => "Data saved successfully"]);
} else {
    echo json_encode(["message" => "Failed to save data", "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
