<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $employed = htmlspecialchars($_POST["employed"]);
    $message = htmlspecialchars($_POST["message"]);            

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.stackmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'mailer@dwellitsystems.com';
        $mail->Password = 'f21Z0W2NUCHi8xFBJ1KmxxaOkuetIDXEPaYm0AoD';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Sender & Recipient
        $mail->setFrom('mailer@dwellitsystems.com', 'Website Notification');
        $mail->addAddress('vibz@catalystconsultants.au', 'Website - New Resume Uploaded');   
        
          // ✅ Handle file upload safely
        if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $uploadFilePath = $_FILES['file']['tmp_name'];
            $uploadFileName = basename($_FILES['file']['name']);
            $mail->addAttachment($uploadFilePath, $uploadFileName);
        } else {
            error_log('File upload error: ' . ($_FILES['file']['error'] ?? 'No file uploaded'));
        }

        
        // Email Content
        $mail->isHTML(true);
        $mail->Subject = 'New Resume uploaded';
        $mail->Body = '
            <html>
            <head>
            <style>
                body {
                font-family: Arial, sans-serif;
                font-size: 14px;
                color: #333;
                line-height: 1.6;
                }
                .container {
                max-width: 600px;
                margin: auto;
                padding: 15px;
                border: 1px solid #eee;
                background-color: #fafafa;
                }
                .heading {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 10px;
                color: #0056b3;
                }
                .info {
                margin-bottom: 8px;
                }
                .label {
                font-weight: bold;
                }
            </style>
            </head>
            <body>
            <div class="container">
                <div class="heading">New Resume Submited</div>
                <div class="info"><span class="label">Name:</span> ' . $name . '</div>
                <div class="info"><span class="label">Email:</span> ' . $email . '</div>
                <div class="info"><span class="label">Phone:</span> ' . $phone . '</div>
                <div class="info"><span class="label">Currently in Australia:</span> ' . $employed . '</div>
                <div class="info"><span class="label">Message:</span> ' . $message . '</div>                                
            </div>
            </body>
            </html>';

        $mail->send();
        //echo "Message sent successfully!";
        echo '<script>alert("Resume uploaded successfully!"); window.location.href="index.html";</script>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>