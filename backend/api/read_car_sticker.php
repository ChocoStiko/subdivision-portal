<?php
session_start();
$local = "http://localhost:3000";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once "../config.php";

$res = $conn->query("SELECT empid, email, homeowner_name, address, license_no, plate_no, carbrand, model, year_model, vehicle_color, status FROM vehicle_stickers ORDER BY status ASC");
$rows = [];
if ($res) {
    while ($r = $res->fetch_assoc()) $rows[] = $r;
    echo json_encode(["data"=>$rows]);
    
} else {
    echo json_encode(["message"=>"Query failed"]);
    setUsers(data);
    setLoading(false);
}
$conn->close();