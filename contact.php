<?php
//get data from form  
$name = $_POST['visitor_name'];
$email= $_POST['visitor_email'];
$message= $_POST['visitor_message'];
$to = "osman.bilgin@web.de";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>