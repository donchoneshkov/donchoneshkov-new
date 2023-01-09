<?php 
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);
//ini_set('display_errors',1);
//error_reporting(E_ALL);

$_SESSION['message'] = '';

$mysqli = new mysqli('sql:3306', 'donchone_admin', 'k1spich1n', 'donchone_ticTacToe');
if (isset($_GET['logout'])) {
	
	
	$loggedOutSql = "UPDATE users SET loggedIn = 0 WHERE username = '".$_SESSION['currentUser']."'";
	$loggedOutQuery = $mysqli->query($loggedOutSql);
	if ($loggedOutQuery === true) {
		$_SESSION['message'] = 'logged out '.$_SESSION['currentUser'];
		$_SESSION['logoutCheck'] = 'logout';
		//$_SESSION['message'] = 'message after destroy';
		header("location: index.php");

	} else {
		$_SESSION['message'] = 'could not set logout in db : '.$username;
		header("location: lobby.php");
	}

} else if (isset($_POST['tempNicknameInput'])) {
	if ($_POST['tempNicknameInput'] != ''){
		$_SESSION['tempNickname'] = $mysqli->real_escape_string($_POST['tempNicknameInput']);
		header("location: lobby.php");
	} else {
		$_SESSION['tempNickname'] = 'Anonymous';
		header("location: lobby.php");
	} 

} else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if (isset($_POST['registrationFormCheck']) && $_POST['registrationFormCheck'] == 'registrationFormCheck') {
		// passwords match
		if ($_POST['password'] == $_POST['confPassword']) {

			$username = $mysqli->real_escape_string($_POST['username']);
			$email = $mysqli->real_escape_string($_POST['email']);
			$tmpPass = $_POST['password'];
			$password = password_hash($tmpPass, PASSWORD_BCRYPT);
			$userSql = "SELECT 1 FROM users WHERE username = '".$username."'";
			$emailSql = "SELECT 1 FROM users WHERE email = '".$email."'";
			$userCheckQuery = $mysqli->query($userSql) or trigger_error($mysqli -> error." ".$userSql);
			$emailCheckQuery = $mysqli->query($emailSql) or trigger_error($mysqli -> error." ".$emailSql);
			//$userNumRows = "mysqli_num_rows(query(".$userCheckSql."))";
			//$emailNumRows = "mysqli_num_rows(query(".$emailCheckSql."))";
			if ($userCheckQuery->num_rows < 1) {
				if ($emailCheckQuery->num_rows < 1){
					$sql =   "INSERT INTO users (username, email, password)
				 			  VALUES ('".$username."', '".$email."', '".$password."')";
		 			// if the query is successful, redirect to login.php page, done!
		 			if ($mysqli->query($sql) === true) {
		 				$_SESSION['message'] = "Registration successful! Added $username to the database!"; 
		 				header("location: login.php");
		 			}
				 } else {
					$_SESSION['message'] = 'Email already exists!';
					header("location: registration.php");
				}

			} else {
				$_SESSION['message'] = 'Username already registered!';
					header("location: registration.php");
			}
		} else {
			$_SESSION['message'] = 'The two passwords do not match!';
			header("location: registration.php");
		}
	} 

	
	if (isset($_POST['loginFormCheck']) && $_POST['loginFormCheck'] == 'loginFormCheck') {
		 
		$username = $mysqli->real_escape_string($_POST['username']);
		
		$userCheckSql = "SELECT 1 FROM users WHERE username = '".$username."'";
		
		$userCheckQuery = $mysqli->query($userCheckSql) or trigger_error($mysqli -> error." ".$userCheckSql);
	
		if ($userCheckQuery->num_rows == 1) {
			$passCheckSql = "SELECT password FROM users WHERE username = '".$username."'";
			//$hash = $passCheckSql;
			$hash = $mysqli->query($passCheckSql)->fetch_assoc();
			if(password_verify($_POST['password'], $hash['password'])){

				$loggedInSql = "UPDATE users SET loggedIn = 1 WHERE username = '".$username."'";
				if ($mysqli->query($loggedInSql) === true) {
					$dbNicknameCheckSql = "SELECT nickname FROM users WHERE username = '".$username."'";
					$dbNickname = $mysqli->query($dbNicknameCheckSql)->fetch_assoc();
					if ($dbNickname['nickname'] == '') {
						$_SESSION['tempNickname'] = $username;
					} else {
						$_SESSION['tempNickname'] = $dbNickname['nickname'];
						$_SESSION['currentUser'] = $username;
					}
					$_SESSION['currentUser'] = $username;
	 				$_SESSION['message'] = "Log in successful!"; 
	 				
	 				header("location: lobby.php");
		 		} else {
	 				$_SESSION['message'] = 'Could not update user to logged in.';
	 				header("location: login.php");
		 		}			
			} else {
				$_SESSION['message'] = 'Incorrect password.'; // must be changed
				header("location: login.php");
			}
		} else {
			$_SESSION['message'] = 'User does not exist.'; // must be changed
			header("location: login.php");
		}
	} 
	
} else {
		//$_SESSION['message'] = 'request method isnt post';
		//header("location: registration.php");
}

?>


<!DOCTYPE html>
<html>
<head>
	<title>Welcome!</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="gameCycle.css">
</head>
<body>
	<div>Checking must auto go to lobby or return to login or registration</div>
	<div><?php if(isset($_SESSION['message'])) echo $_SESSION['message']; ?></div>
	<div>
		<?php 
			echo '$_POST["username"] '.$_POST['username']."<br>"; 
			echo '$_POST["password"] '.$_POST["password"]."<br>";

			//print_r($userNumRows);	
			echo '<br>';
			//print_r($emailNumRows);
			echo '<br>';

			echo var_dump($userCheckSql);
			echo '<br>';
			var_dump($mysqli->query($loggedInSql));
			echo '<br>';
			echo $mysqli->query($loggedInSql);
			echo '<br>';
		?>	
	</div>
	<script type="text/javascript">
	
</script>
</body>
</html>