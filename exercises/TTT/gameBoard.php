<?php 
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);

include 'php/gameCycle.php';


?> 
<!DOCTYPE html>
<html>
<head>
	<title>Tic Tac Toe</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="gameCycle.css">
	<script src="js/functions.js"></script>
</head>
<body>
	<form action="gameBoard.php" method="POST" name="ticTacToe" id="form">
	<div class="navbar">
		<a href="login.php">Login</a>
		<a href="registration.php">Register</a>
		<a href="index.php">Index</a>
		<a href="feedback.php">Feedback</a>
		<br />
		<br />
		<input type="button" name="start" value="Start" onclick="startJS();">
		<input type="button" value="Save" onclick="saveJS();">
		<input type="button" value="Load" onclick="loadJS();">
		<input type="button" value="Leave game" onclick="leaveJS();">
		<input type="button" value="Kick" onclick="kickJS();">
		<input type="button" value="Ban" onclick="banJS();">
	</div>
	<br />
	<br />
	<br />
	<div><?php echo $_SESSION['message']?></div>
	<br />
	<br />
	<br />
	
		<input type="text" name="hidden" value="<?php echoTurn(); ?>" class="hidden" id="hidden">
		<?php start(); ?>
		
	</form>
	<script type="text/javascript">
		var myForm = document.getElementById('form');
		var squares = document.getElementsByClassName("square");
		var hiddenSquares = document.getElementsByClassName("divinp");
		for (i = 0; i < squares.length; i++) {
			let j = i;
			squares[j].addEventListener('click', function() {
				if (document.getElementById('hi'+j).value == "0")	{
					document.getElementById('hi'+j).value = <?php echoPaint(); ?>										
					myForm.submit();
				}				
			});
		};

		<?php echoStartJS(); ?>
		

	</script>
</body>
</html>