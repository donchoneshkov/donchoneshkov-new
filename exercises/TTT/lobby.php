<?php 
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);
include 'joinRoom.php';


?>


<!DOCTYPE html>
<html>
<head>
	<title>Lobby</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="gameCycle.css">
</head>
<body>
	<div class="navbar">
		<a href="login.php">Login</a>
		<a href="registration.php">Register</a>
		<a href="index.php">Index</a>
		<a href="profile.php">Profile</a>
		<a href="feedback.php">Feedback</a>	
		<form method="GET" action="check.php" name="logoutForm"><input type="text" name="logout" value="logoutCheck" class="hidden"><input type="button" value="Logout" onclick="form.submit();"></form>
	</div>
	<div class="menusMainContent">
		<div>Welcome <?php echo $_SESSION['tempNickname']; ?></div>
		<div> <?php if(isset($_SESSION['message'])) echo $_SESSION['message']; ?></div>
		<form method="POST" action="joinRoom.php" id="newRoomForm" name="newRoomForm">
			<input type="button" name="createRoom" value="Create room" id="createRoomButton" onclick="createRoomASD();">
			<input type="text" name="newRoom" class="hidden" id="newRoomNameInput">
		</form>
		<form method="GET" name="joinRoomForm" action="joinRoom.php" id="joinForm">
		<div>
			Rooms
			<div>placeholder <input type="button" name="asd" value="Join room" onclick="ttt();"></div>

			<?php populateLobby(); ?>
		</div>
		</form>
	</div>
	<script type="text/javascript">
		function ttt() {
			document.getElementById('joinForm').submit();
		}
	
		


		function createRoomASD() {
		var newRoomName;
			if (newRoomName = window.prompt("Enter room name:")) {
				console.log('room name = ' + newRoomName);
				document.getElementById('newRoomNameInput').value = newRoomName;
				document.getElementById('newRoomForm').submit();
			} else {
				console.log('cancelled');
			}

		}


		var joinRoomButtons = document.getElementsByClassName('joinRoomButton');
		for (i = 0; i < joinRoomButtons.length; i++) {
			let j = i;
			joinRoomButtons[i].addEventListener("click", function() {
				window.location.href = "joinRoom.php" + "?roomName=" + joinRoomButtons[j].name;
			})
		}
	</script>
</body>
</html>