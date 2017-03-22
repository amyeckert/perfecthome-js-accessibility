<?php
	
	// $formData = $_POST['data'];
	// $day = $_POST['in_day'];
	// $year = (int)$_POST['in_year'];
	// $date = $month . '/' . $day . '/' . $year;
	// $white = (int)$_POST['in_white'];
	// $black = (int)$_POST['in_black'];
	// $notes = $_POST['in_notes'];

	// if(isset($notes)){
	// 	$notes = $_POST['in_notes'];
	// } else {
	// 	$notes = '';
	// }

    $file = "data.json";  //name and location of json file. if the file doesn't exist, it   will be created with this name

    $fh = fopen($file, 'a+');  //'a' will append the data to the end of the file. there are other arguemnts for fopen that might help you a little more. google 'fopen php'.

    $json = $_POST['data']; //put POST data from ajax request in a variable
    

    fwrite($fh, $json);  //write the data with fwrite.
	// file_put_contents($file, json_encode($json, JSON_PRETTY_PRINT TRUE));
	file_put_contents($file, $json);
	echo json_encode($json);
    fclose($fh);  //close the file


	// $fileBKP='back_'.date('m-d-Y_hia').'.txt';
	// $dir_to_save = "bkps/";

	// $json = json_decode(file_get_contents($file), true);

	// $json = json_encode($players, JSON_PRETTY_PRINT);
    // file_put_contents('data/players.json', $json);

	// create backup first
	// file_put_contents('bkps/' . $fileBKP, json_encode($json, TRUE));

	// $json[$date] = array("date" => $date, "year" => $year, "white" => $white, "black" => $black, "notes" => $notes);

	// rebuild refuse.json



?>

