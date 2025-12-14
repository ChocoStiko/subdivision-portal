<?php
$local = "http://localhost:3000";
$web_url = "http://subdivision-portal.chocostiko-lobby.com";
header("Access-Control-Allow-Origin: $local");
header("Access-Control-Allow-Origin: $web_url");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once "../config.php";

$res = $conn->query("SELECT id, first_name, last_name, contact_number, email FROM users ORDER BY id ASC");
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