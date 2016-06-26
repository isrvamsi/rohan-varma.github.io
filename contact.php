<?php
$recipient = "rvarm1@gmail.com";
$subject   = "test email";
$message   = "Hi

This is a test message (e-mail body).
This is a new line
Test test
";

mail($recipient, $subject, $message);
header('Location:thanks.html');
?>