<?php 
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);



?>


<!DOCTYPE html>
<html>
<head>
	<title>Profile</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="gameCycle.css">
</head>
<body>
	<div class="navbar">
		<a href="index.php">Index</a>
		<a href="lobby.php">Lobby</a>
		<a href="feedback.php">Feedback</a>
		<form method="GET" action="check.php" name="logoutForm"><input type="text" name="logout" value="logoutCheck" class="hidden"><input type="button" value="Logout" onclick="form.submit();"></form>
	</div>
	<div class="menusMainContent">
		<div><?php echo $_SESSION['tempNickname'].'\'s profile settings.'; ?></div>
		<div> <?php if(isset($_SESSION['message'])) echo $_SESSION['message']; ?></div>
		<div>Change avatar <input type="file" name="" placeholder="placeholder"></div>
		<div>Change password <input type="button" name="" value="placeholder"></div>
		<div>Change email <input type="button" name="" value="placeholder"></div>

	</div>

	<script type="text/javascript">
		
	</script>
</body>
</html>