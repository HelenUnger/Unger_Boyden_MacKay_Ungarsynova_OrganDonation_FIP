<?php 

function subscribe($fname, $lname, $email, $country){
    require_once('connect.php');
    require_once('email.php');
	//Check if email exists

	$check_exist_query = 'SELECT COUNT(*) FROM tbl_subscriber WHERE sub_email = :email';

	$user_set = $pdo->prepare($check_exist_query);
	$user_set->execute(
		array(
			':email'=>$email
		)
    );

    //if it exists, update query
	if($user_set->fetchColumn()>0){

		$get_user_query = 'SELECT * FROM tbl_subscriber WHERE sub_email = :email';

		$get_user_set = $pdo->prepare($get_user_query);
		$get_user_set->execute(
			array(
				':email'=>$email
			)
		);

        //get the subscribers id to update
		while($found_user = $get_user_set->fetch(PDO::FETCH_ASSOC)){
            $id = $found_user['sub_id'];
            $date = date('Y-m-d H:i:s', time());

			//Update user login IP
			$update_sub_query = 'UPDATE tbl_subscriber SET sub_fname = :fname, sub_lname = :lname, sub_email = :email, sub_country = :country, sub_update = :current WHERE sub_id=:id';
			$update_sub_set = $pdo->prepare($update_sub_query);
			$update_sub_set->execute(
				array(
					':id'=>$id,
                    ':fname'=>$fname,
                    ':lname'=>$lname,
                    ':email'=>$email,
                    ':country'=>$country,
                    ':current'=>$date
				)
			);

			if($update_sub_set->rowCount()){
                //update worked
                $message = 'your mailing information has been updated!';
                $result = send_email($fname, $lname, $email, $message);
                return $result;
            }else{
                //update didnt work
                $message = 'Registering Failed';
                return $message;
            }
        }
        

    //if user doesnt exist create them
	}else{
		//create new subscriber
        $create_sub_query = 'INSERT INTO tbl_subscriber (sub_fname, sub_lname, sub_email, sub_country) VALUES (:fn, :ln, :email, :country)';
        $create_sub_set = $pdo->prepare($create_sub_query);
        $create_sub_set->execute(
            array(
                ':fn'=>$fname,
                ':ln'=>$lname,
                ':email'=>$email,
                ':country'=>$country
            )
        );

        if($create_sub_set->rowCount()){
            //it worked
            $message = 'Welcome to our mailing list!';
            $result = send_email($fname, $lname, $email, $message);
                return $result;
        }else{
            //creating didnt work
            $message = 'Registering Failed';
            return $message;
        }
	}
}