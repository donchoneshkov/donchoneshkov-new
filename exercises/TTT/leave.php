<?php 

session_start();

$mysqli = new mysqli('sql:3306', 'donchone_admin', 'k1spich1n', 'donchone_ticTacToe');

	$checkIfUserLoggedInSql = "SELECT 1 FROM users WHERE username = '".$_SESSION['currentUser']."'";

	if ($mysqli->query($checkIfUserLoggedInSql)) {
		$putUserOutOfRoomSql = "UPDATE users SET inRoom = NULL WHERE username ='".$_SESSION['currentUser']."'";
		//$putUserInRoomSql = "UPDATE users SET inRoom = '".$_GET['roomName']."' WHERE username ='".$_SESSION['currentUser']."'";
		$mysqli->query($putUserOutOfRoomSql);
		
		echo $_SESSION['currentUser'];
	}

	$_SESSION['message'] = 'Room left.';

header("location: lobby.php");

?>