<?php 

function send_email($fname, $lname, $email, $message){
  
    $to = $fname .' '.$lname;
    $subject = "Ontario Summer Newsletter";
    $message = 'Message Body: '.$message;
    $headers = "From: noreply@ontariosummer.com \r\n";
    $headers .= 'Reply-To:'.$email;

    //change to mail($to, $subject, $message, $headers); for live site
    // fake mail
    $email_message = '==FAKE EMAIL=='. PHP_EOL;
    $email_message .= 'Subject: '. $subject.PHP_EOL;
    $email_message .= 'To: '. $to.PHP_EOL;
    $email_message .= 'To: '. $email.PHP_EOL;
    $email_message .= 'message: '.$message.PHP_EOL;
    $email_message .= '==END OF EMAIL=='.PHP_EOL;

    return $email_message;
}
