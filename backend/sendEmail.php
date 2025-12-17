<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

function sendApprovalEmail($userEmail, $reservationType, $date, $fromTime, $toTime, $status) {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'wwhsnoreply@gmail.com';
        $mail->Password   = 'ftou cprj srjh mpej';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('noreply@wwhs.com', 'Reservation System');
        $mail->addAddress($userEmail);

        // Content
        $mail->isHTML(true);

        if ($status === 'approved') {
            $mail->Subject = 'Reservation Approved';
            $statusMsg = 'approved';
        } 
        else if ($status === 'rejected') {
            $mail->Subject = 'Reservation Rejected';
            $statusMsg = 'rejected';
        } 
        else {
            return false;
        }

        $mail->Body = "
            <p>Hello,</p>
            <p>Your reservation has been <strong>{$statusMsg}</strong> by the admin</p>
            <p><strong>Reservation details:</strong></p>
            <ul>
                <li>Type: {$reservationType}</li>
                <li>Date: {$date}</li>
                <li>From: {$fromTime}</li>
                <li>To: {$toTime}</li>
            </ul>
        ";

        $mail->send();
        return true;

    } catch (Exception $e) {
        error_log("Mailer Error: " . $mail->ErrorInfo);
        return false;
    }
}

function sendApprovalEmailCarStikcer($userEmail, $homeowner_name, $address, $license_no, $tplate_no, $carbrand, $model, $year_model, $vehicle_color, $status) {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'wwhsnoreply@gmail.com';
        $mail->Password   = 'ftou cprj srjh mpej';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('noreply@wwhs.com', 'Reservation System');
        $mail->addAddress($userEmail);

        // Content
        $mail->isHTML(true);

        if ($status === 'approved') {
            $mail->Subject = 'Reservation Approved';
            $statusMsg = 'approved';
        } 
        else if ($status === 'rejected') {
            $mail->Subject = 'Reservation Rejected';
            $statusMsg = 'rejected';
        } 
        else {
            return false;
        }

        $mail->Body = "
            <p>Hello,</p>
            <p>Your car sticker application has been <strong>{$statusMsg}</strong> by the admin</p>
            <p><strong>Application details:</strong></p>
            <ul>
                <li>Homeowner Name: {$homeowner_name}</li>
                <li>Address: {$address}</li>
                <li>License Number: {$license_no}</li>
                <li>Plate Number: {$plate_no}</li>
                <li>Car Brand: {$carbrand}</li>
                <li>Model: {$model}</li>
                <li>Year Model: {$year_model}</li>
                <li>Color: {$vehicle_color}</li>
            </ul>
        ";

        $mail->send();
        return true;

    } catch (Exception $e) {
        error_log("Mailer Error: " . $mail->ErrorInfo);
        return false;
    }
}
