<?php 
session_start();
//error_reporting(E_ERROR | E_WARNING | E_PARSE);
//ini_set('display_errors',1);
//error_reporting(E_ALL);
if (isset($_GET['roomName'])) {
	
	$mysqli = new mysqli('sql:3306', 'donchone_admin', 'k1spich1n', 'donchone_ticTacToe');
	$checkIfUserLoggedInSql = "SELECT 1 FROM users WHERE username = '".$_SESSION['currentUser']."'";
	if ($mysqli->query($checkIfUserLoggedInSql)) {
		$putUserInRoomSql = "UPDATE users SET inRoom = '".$_GET['roomName']."' WHERE username ='".$_SESSION['currentUser']."'";
		$mysqli->query($putUserInRoomSql);

	}
	// check if there is space in room
	// try to add player to room


	//$loggedInSql = "UPDATE users SET loggedIn = 1 WHERE username = '".$username."'";
 	$currentlyInRoom = $_GET['roomName'];
 	$_SESSION['message'] = 'Joined '.$currentlyInRoom;
	header("location: gameBoard.php"."?roomName=".$_GET['roomName']);
	//echo $_GET['roomName'];
	//echo $_SESSION['currentUser'];
	//echo $mysqli->query($checkIfUserLoggedInSql);


}
//echo $_GET['roomName'];


if (isset($_POST['newRoom'])) {
	$mysqli = new mysqli('sql:3306', 'donchone_admin', 'k1spich1n', 'donchone_ticTacToe');
	$newRoom = $mysqli->real_escape_string($_POST['newRoom']);
	$checkForRoomSql = "SELECT 1 FROM lobby WHERE roomName = '".$newRoom."'";
	$checkForRoom = $mysqli->query($checkForRoomSql);


	if ($checkForRoom->num_rows < 1) {
				
					$sql =   "INSERT INTO lobby (roomName) "
				 			."VALUES ('$newRoom')";
		 			// if the query is successful, redirect to login.php page, done!
		 			if ($mysqli->query($sql) === true) {
		 				$_SESSION['message'] = "New room created!"; 
		 				header("location: lobby.php");
		 			}
				 
				} else {
					$_SESSION['message'] = "Room with that name already exists. Try again.";
					header("location: lobby.php");
				}


}

function populateLobby() {

	$mysqli = new mysqli('sql:3306', 'donchone_admin', 'k1spich1n', 'donchone_ticTacToe');

	$selectRoomsSql = "SELECT roomName FROM lobby";
	$getRooms = $mysqli->query($selectRoomsSql);
	while ($rooms = $getRooms->fetch_assoc()) {
		foreach ($rooms as $roomName) {
		echo '<div>'.$roomName.'<input type="button" class="joinRoomButton" name="'.$roomName.'" value="Join room"></div>';
		}
	}
}


?>