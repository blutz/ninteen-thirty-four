<?php
/**
* Helper file to redirect to the real url based on a url parameter stored in iframe-dava.csv
*/
function get_option($name) {
	$fileName = "../../advanced-iframe-custom/iframe-data.csv";
	$file = fopen($fileName,"r");
	while(!feof($file)) {
		$data_array = fgetcsv($file);
		if($data_array[0] == $name) {
			fclose($file);	
			return base64_decode($data_array[1]);
		}    
	}
	fclose($file);
	return false;
}

function delete_option($name) {
	$fileName = "../../advanced-iframe-custom/iframe-data.csv";
	if(file_exists($fileName)) {
		$file = fopen($fileName,"r");
		$csv = "";
        $currentTime = time();
		
		while(!feof($file)) {
			$data_array = fgetcsv($file);
			
			if (!empty( $data_array[0])) {
				$isOneTime = $data_array[0] === $name && $data_array[2] < 0;
				$isExpired = -intVal($data_array[2]) < $currentTime && intval($data_array[2]) < $currentTime;
				if (!$isOneTime && !$isExpired) {
					$line = $data_array[0] . "," . $data_array[1] . "," . $data_array[2] . "\n";
					$csv .= $line;
				} 
			}
		}
		fclose($file);
		file_put_contents($fileName, $csv, LOCK_EX);
	}
}

if (isset($_GET['aiUrl']) ) {
	$url = urlencode($_GET['aiUrl']);
	$transient = "aip_" . $url; 
	if (false !== $redirect = get_option($transient)) {
		 delete_option( "aip_" . $url) ;
		 header("Location: " . $redirect);
	     exit;
	}
}
?>