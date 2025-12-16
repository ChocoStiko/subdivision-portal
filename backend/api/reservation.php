    <?php
    session_start();
    $local = "http://localhost:3000";
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

    $id = $input["uid"];
    $type = $input["reservation_type"];
    $email = $_SESSION["user"]["email"] ?? null;
    $date = $input["date"];
    $fromTime = $input["from"];
    $toTime = $input["to"];



    $stmt = $conn->prepare("INSERT INTO reservations (uid, reservation_type, email, date, time_from, time_to) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $id, $type, $email, $date, $fromTime, $toTime);


    if ($stmt->execute()) {
        echo json_encode([
            "message" => "Data saved successfully",
            "email" => $email
        ]);
    } else {
        echo json_encode(["message" => "Failed to save data", "error" => $stmt->error]);
    }

    $stmt->close();
    $conn->close();
