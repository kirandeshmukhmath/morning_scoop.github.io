<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $message = $_POST["Message"];

    $to = "kirandeshmukhmath@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    error_log("Error message", 1, "your_email@example.com");


    // You can redirect the user to a thank-you page or display a success message here
    echo "Thank you for your message!";
}
?>