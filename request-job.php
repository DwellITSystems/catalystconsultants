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
        $mail->Host = 'smtp.dwellitsystems.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'notifications@dwellitsystems.com';
        $mail->Password = 'Dell@2011';
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Sender & Recipient
        $mail->setFrom('notifications@dwellitsystems.com', 'Website Notification');
        $mail->addAddress('emmanual.nebu@dwellitsystems.com', 'Website Callback Request');   
        
        // File Attachment (if uploaded)
        if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $uploadFilePath = $_FILES['file']['tmp_name'];
            $uploadFileName = $_FILES['file']['name'];
            $mail->addAttachment($uploadFilePath, $uploadFileName);
        }

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = 'Landing Page';
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
                <div class="heading">New Career Form Submission</div>
                <div class="info"><span class="label">Name:</span> ' . $name . '</div>
                <div class="info"><span class="label">Email:</span> ' . $email . '</div>
                <div class="info"><span class="label">Phone:</span> ' . $phone . '</div>
                <div class="info"><span class="label">Currently in Australia:</span> ' . $employed . '</div>
                <div class="info"><span class="label">City:</span> ' . $message . '</div>                                
            </div>
            </body>
            </html>';

        $mail->send();
        //echo "Message sent successfully!";
        echo '<script>alert("Message sent successfully!"); window.location.href="index.html";</script>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
