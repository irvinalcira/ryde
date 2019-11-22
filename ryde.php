<?php
$url = parse_url(getenv("mysql://bd647197a172ad:a5f7622f@us-cdbr-iron-east-05.cleardb.net/heroku_8995ffa5c160baf?reconnect=true"));
$server = $url["us-cdbr-iron-east-05.cleardb.net"];
$username = $url["bd647197a172ad"];
$password = $url["a5f7622f"];
$dbname = substr($url["heroku_8995ffa5c160baf"], 1);
var_dump($url);
var_dump($server);
var_dump($username);
var_dump($password);
var_dump($dbname);

$conn = new mysqli($server, $username, $password, $dbname);
mysqli_select_db($dbname);
if ($conn->connect_error) {
 
    die("Connection failed: " . $conn->connect_error);
   } 
    
   $sql = "SELECT * FROM taxis";
    
   $result = $conn->query($sql);
    
   if ($result->num_rows >0) {
    
    while($row[] = $result->fetch_assoc()) {
    
    $tem = $row;
    
    $json = json_encode($tem);
    
    
    }
    
   } else {
    echo "No Results Found.";
   }
    echo $json;
   $conn->close();
?>