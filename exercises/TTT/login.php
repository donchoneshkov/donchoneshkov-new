<?php 
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);



?>


<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="gameCycle.css">
</head>
<body>
	<div class="navbar">
		<a href="login.php">Login</a>
		<a href="registration.php">Register</a>
		<a href="index.php">Index</a>		
	</div>
	<div class="menusMainContent">
		<form action="check.php" method="POST" name="loginForm" id="loginForm">
			<span class="loginInput">Username: <input type="text" name="username" id="username" placeholder="Username"></span>
			<span class="loginInput">Password: <input type="password" name="password" id="password" placeholder="Password"></span>
			<input type="text" name="loginFormCheck" value="loginFormCheck" class="hidden">
			<span class="loginInput"><input type="button" name="" value="Login" onclick="form.submit();"></span>
			<div> <?php if(isset($_SESSION['message'])) echo $_SESSION['message']; ?></div>	
		</form>
	</div>

	<script type="text/javascript">
		
	</script>
</body>
</html>