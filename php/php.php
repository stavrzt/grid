<?php
$mysqli = new mysqli("localhost", "root", "", "r4612328_bd");

// check connection 
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$rs = $mysqli->query("SELECT * FROM grid_objects", MYSQLI_USE_RESULT);

$i=0;
while($row = $rs->fetch_array(MYSQLI_ASSOC)){
$forSend[$i] = $row;
$i++;
}
$rs->close();
$mysqli->close();

echo json_encode($forSend);

?>