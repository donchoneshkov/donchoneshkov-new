<?php 
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);



?>


<!DOCTYPE html>
<html>
<head>
	<title>Welcome!</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="gameCycle.css">
</head>
<body>
	
	<div class="navbar">
		<a href="login.php">Login</a>
		<a href="registration.php">Register</a>
		<a href="index.php">Index</a>
		<a href="feedback.php">Feedback</a>
	</div>
	<div class="menusMainContent">
		<div>Welcome</div>
		<form action="check.php" method="POST" name="tempNickname" id="tempNicknameForm"><span>
			Pick a name without registration: 
			<input type="text" name="tempNicknameInput">
			<input type="button" name="" value="Use temporary nickname" onclick="form.submit();">
		</span>
		<div><?php if(isset($_SESSION['message'])) echo $_SESSION['message']; ?></div>
		<?php if(isset($_SESSION['logoutCheck'])) session_destroy(); ?>
		</form>
	</div>

	<script type="text/javascript">
		
	</script>
</body>
</html>