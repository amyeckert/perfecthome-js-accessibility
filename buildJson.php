<?php
	
    $file = "data.json";  //name and location of json file. if the file doesn't exist, it will be created with this name

    $fh = fopen($file, 'a');  //'a' will append the data to the end of the file. there are other arguemnts for fopen that might help you a little more. google 'fopen php'.

    $newData = $_POST; //put POST data from ajax request in a variable
    print_r($_POST);

    fwrite($fh, json_encode($newData, JSON_PRETTY_PRINT));  //write the data with fwrite.

	echo json_encode($newData);
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

