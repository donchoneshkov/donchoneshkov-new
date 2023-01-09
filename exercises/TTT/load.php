<?php 

session_start();
$mysqli = new mysqli('sql:3306', 'donchone_admin', 'k1spich1n', 'donchone_ticTacToe');

$loadGameSql = "SELECT gameState FROM savedgames INNER JOIN users ON playerId = id WHERE username = '".$_SESSION['currentUser']."'";

$loadGameQuery = $mysqli->query($loadGameSql)->fetch_assoc();

$_SESSION['gameState'] = $loadGameQuery['gameState'];




$gameStateArray = str_split($_SESSION['gameState']);
$_SESSION['posthidden'] = 1;
for ($i = 0; $i < count($gameStateArray); $i++ ) {

	$_SESSION["posthi".$i] = $gameStateArray[$i];
	//echo $_SESSION["posthi".$i];
	if ($gameStateArray[$i] != '0') {
		$_SESSION['posthidden']++;
	}
}
 echo $_SESSION["posthidden"];
$_SESSION['message'] = "Game loaded.";
$_SESSION['newLoad'] = 1;

header("location: gameBoard.php"."?roomName=".$_GET['roomName']);

?>


