<?php 
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);



?>


<!DOCTYPE html>
<html>
<head>
	<title>Registration</title>
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
		<form action="check.php" method="POST" name="registrationForm" id="registrationForm">
			<span class="regInput">
				Username:
				<input type="text" name="username" id="username" placeholder="Username" required="required">
			</span>
			<span class="regInput">
				Password:
				<input type="password" name="password" id="password" placeholder="Password" required="required">
			</span>
			<span class="regInput">
				Confirm Password:
				<input type="password" name="confPassword" id="confPassword" placeholder="Confirm Password" required="required">
			</span>
			<span class="regInput">
				Email:
				<input type="email" name="email" id="email" placeholder="Email" required="required">
			</span>
			<span class="regInput">
				<input type="button" name="" value="Register" onclick="form.submit();">
			</span>
			<input type="text" name="registrationFormCheck" value="registrationFormCheck" class="hidden">
			<div> <?php if(isset($_SESSION['message'])) echo $_SESSION['message']; ?></div>
		</form>
	</div>

	<script type="text/javascript">
		
	</script>
</body>
</html>