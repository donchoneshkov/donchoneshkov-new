<?php 

session_start();
$mysqli = new mysqli('sql:3306', 'donchone_admin', 'k1spich1n', 'donchone_ticTacToe');

$gameState = $_SESSION['gameState'];

$checkIfUserLoggedInSql = "SELECT 1 FROM users WHERE username = '".$_SESSION['currentUser']."'";
$userSql = "SELECT id FROM users WHERE username = '".$_SESSION['currentUser']."'";
$getUserIdQuery = $mysqli->query($userSql)->fetch_assoc();


/*
$dbNicknameCheckSql = "SELECT nickname FROM users WHERE username = '".$username."'";
						$dbNickname = $mysqli->query($dbNicknameCheckSql)->fetch_assoc();
						if ($dbNickname['nickname'] == '') {
							$_SESSION['tempNickname'] = $username;
*/


$playerId = $getUserIdQuery['id'];
if ($mysqli->query($checkIfUserLoggedInSql)->num_rows > 0) {

	$saveCheckSql = "SELECT 1 FROM savedgames WHERE saveName = '".$saveName."' AND playerId = '".$playerId."'";
	$saveCheckQuery = $mysqli->query($saveCheckSql);
	if ($saveCheckQuery->num_rows < 1) {
		$insertNewSave = "INSERT INTO savedgames(gameState, playerId, saveName) VALUES ('".$gameState."', '".$playerId."', '".$saveName."')";
		//$putUserInRoomSql = "UPDATE users SET inRoom = '".$_GET['roomName']."' WHERE username ='".$_SESSION['currentUser']."'";
		$mysqli->query($insertNewSave);
		$_SESSION['message'] = 'Game saved.';
	} else {
		$updateSaveSql = "UPDATE savedgames SET gameState = '".$gameState."', playerId = '".$playerId."', saveName = '".$saveName."' WHERE playerId = '".$playerId."'";
		$mysqli->query($updateSaveSql);
		$_SESSION['message'] = 'Save slot updated.';
	}
} else {
$_SESSION['message'] = 'Must be logged in to save games.';
}


header("location: load.php");
//header("location: lobby.php");






?>


