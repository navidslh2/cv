<?php
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
$servername = "193.141.65.221";
$username = "navidsal";
$password = "Slh714251";
$dbname = "navidsal_cv";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM sliders";
$result = $conn->query($sql);

$sliders = [];
while ($row = $result->fetch_assoc()) {
    $sliders[] = $row;
}

header('Content-Type: application/json');
echo json_encode($sliders);
$conn->close();
?>



