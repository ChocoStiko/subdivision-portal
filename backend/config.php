<?php
$servername = "webdb.chocostiko-lobby.com";
$port = 3307;
$username = "root";
$password = "Angcanan123";
$dbname = "subd_portal_db";
$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
