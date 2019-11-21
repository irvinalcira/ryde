<?php
$url = parse_url(getenv("CLEARDB_DATABASE_URL"));
$server = $url["us-cdbr-iron-east-05.cleardb.net"];
$username = $url["bd647197a172ad"];
$password = $url["a5f7622f"];
$db = substr($url["heroku_8995ffa5c160baf"], 1);

$conn = new mysqli($server, $username, $password, $db);
mysqli_select_db($db);
$sql = "SELECT * FROM taxis";

$result = $conn->query($sql);
 

$result = mysqli_query($sql) or die('MySQL query error');
?>