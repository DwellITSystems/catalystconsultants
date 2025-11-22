<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $title = htmlspecialchars($_POST["title"]);
    $company = htmlspecialchars($_POST["company"]);
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
        $mail->addAddress('vibz@catalystconsultants.au', 'Employer - Request Call Back');   
        
        // File Attachment (if uploaded)
        if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $uploadFilePath = $_FILES['file']['tmp_name'];
            $uploadFileName = $_FILES['file']['name'];
            $mail->addAttachment($uploadFilePath, $uploadFileName);
        }

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = 'Website - Employer Request Call Back';
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
                <div class="heading">Website - Employer Request Call Back</div>
                <div class="info"><span class="label">Name:</span> ' . $name . '</div>
                <div class="info"><span class="label">Title:</span> ' . $title . '</div>
                <div class="info"><span class="label">Company:</span> ' . $company . '</div>
                <div class="info"><span class="label">Email:</span> ' . $email . '</div>
                <div class="info"><span class="label">Phone:</span> ' . $phone . '</div>
                <div class="info"><span class="label">Currently in Australia:</span> ' . $employed . '</div>
                <div class="info"><span class="label">Message:</span> ' . $message . '</div>                                
            </div>
            </body>
            </html>';

        $mail->send();
        //echo "Message sent successfully!";
        echo '<script>alert("Call back request sent successfully!"); window.location.href="index.html";</script>';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
