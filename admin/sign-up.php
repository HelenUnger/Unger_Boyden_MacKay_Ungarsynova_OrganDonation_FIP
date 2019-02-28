<?php 
    require_once('scripts/subscribe.php');
    
	if(empty($_POST['fname']) || empty($_POST['lname']) || empty($_POST['email']) || empty($_POST['country'])){
        $message = 'something is empty';
	}else{
		$fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $email = $_POST['email'];
        $country = $_POST['country'];
        
		$message = subscribe($fname, $lname, $email, $country);
	}

	echo json_encode($message);
?>