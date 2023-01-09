<?php 
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);



?>


<!DOCTYPE html>
<html>
<head>
	<title>Feedback</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="gameCycle.css">
</head>
<body>
	<div class="navbar">
		<a href="index.php">Index</a>
		<form method="GET" action="check.php" name="logoutForm"><input type="text" name="logout" value="logoutCheck" class="hidden"><input type="button" value="Logout" onclick="form.submit();"></form>
	</div>
	<div class="menusMainContent">
		<div> <?php if(isset($_SESSION['message'])) echo $_SESSION['message']; ?></div>
		<div>Give me your feedback:</div>
		<div><textarea></textarea></div>
		<div><input type="button" name="" value="Send"></div>


	</div>

	<script type="text/javascript">
		
	</script>
</body>
</html>