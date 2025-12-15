<?php
session_start();
$local = "http://localhost:3000";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, OPTIONS, GET");

require_once "../config.php";

$email = $_SESSION["email"] ?? null;

$res = $conn->query("SELECT uid, reservation_type, email, date, time_from, time_to, status FROM reservations ORDER BY status ASC");
$rows = [];
if ($res) {
    while ($r = $res->fetch_assoc()) $rows[] = $r;
    echo json_encode([
        "data"=>$rows,
        "session" => $email,
    ]);
    
} else {
    echo json_encode([
        "message"=>"Query failed"
    ]);
    setUsers(data);
    setLoading(false);
}
$conn->close();