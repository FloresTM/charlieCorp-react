<?php

$host="localhost";
$user="admin";
$password="david";
$bd="charliecorp_bd";

$conn = new mysqli($host, $user, $password, $bd);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT hora, temperatura FROM datos";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
	$obj = array();
    while($row = $result->fetch_assoc()) {
		$element = array($row["hora"],$row["temperatura"]);
       	array_push($obj,$element);
	}
	echo json_encode($obj);
} else {
    echo "0 results";
}
$conn->close();


// :)
?>
