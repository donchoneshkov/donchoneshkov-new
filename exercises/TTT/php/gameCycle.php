<?php 
session_start();
error_reporting(E_ERROR | E_WARNING | E_PARSE);
global $numsArray, $sumToCheck, $redWins, $blueWins, $paint, $restartCounter;


$mysqli = new mysqli('sql:3306', 'donchone_admin', 'k1spich1n', 'donchone_ticTacToe');

//loadSave();

$blueWins = "<script> window.alert('Blue Wins!')</script>";
$redWins = "<script> window.alert('Red Wins!')</script>";
// replace $_POST with query which puts - r b in gameState. read from gameState
// replace sumToCheck and $formattedValue with string to check for r and b matches
function restart() {	
	$GLOBALS["restartCounter"] = 1;
	$_SESSION['gameState'] = '';
}

function start() {
	if ($_SESSION['newLoad'] == 1) {
		loadSave();

	}
	
	$GLOBALS["numsArray"] =  array (
									1,
									10,
									100,
									1000,
									10000,
									100000,
									1000000,
									10000000,
									100000000,
									0,
									0
								   );

	$GLOBALS["sumToCheck"] = array (
									"/......111/",
									"/...111.../",
									"/111....../",
									"/..1..1..1/",
									"/.1..1..1./",
									"/1..1..1../",
									"/1...1...1/",
									"/..1.1.1../"
								   );
	if(!empty($_SESSION['posthidden'])) {
		$_POST["hidden"] = $_SESSION['posthidden'];
		$_SESSION['posthidden'] = '';
	}
	if (!empty($_POST["hidden"])) {
		for ($i = 0; $i < 9; $i++) {

			if($_SESSION['posthi'.$i != "0"] ) {
				//$_POST['hi'.$i] = $_SESSION['posthi'.$i];

			}
			if ($_POST['hi'.$i] == '') $_POST['hi'.$i] = '0';
			printf("<input name=\"hi%s\" type=\"text\" value=\"%s\" class=\"hidden divinp\" id=\"hi%s\">", $i, $_POST['hi'.$i], $i);
			if ($i == 3 || $i == 6) {
				printf("<div id=\"s%s\" class=\"float square clear %s\"></div>", $i, $_POST['hi'.$i]);
			}
			else {
				printf("<div id=\"s%s\" class=\"float square %s\"></div>", $i, $_POST['hi'.$i]);
			}
		}

		echo "<script> document.getElementById('hidden').value=".($_POST["hidden"]+1)." </script>";

		for ($i = 0; $i < 9; $i++) {

			global $numsArray, $sumToCheck, $redWins, $blueWins;
			
			if ($_POST['hi'.$i] == 'r') {
				$numsArray[9] += $numsArray[$i];
			}

			if ($_POST['hi'.$i] == 'b') {
				$numsArray[10] += $numsArray[$i];
			}

		}
		$_SESSION['gameState'] ='';
		for ($i = 0; $i < 9; $i++) {
			if ($_POST['hi'.$i] == 'r') {
				$_SESSION['gameState'] .= 'r';
			} else if ($_POST['hi'.$i] == 'b') {
				$_SESSION['gameState'] .= 'b';
			} else {
				$_SESSION['gameState'] .= '0';
			}

		}
		updateRoomState();


		for ($i = 0; $i < 8; $i++) {

			global $numsArray, $sumToCheck, $redWins, $blueWins;

			$formattedValue = sprintf("%09d", $numsArray[9]);
			if ($check = preg_match_all($sumToCheck[$i], $formattedValue)) {
				echo $redWins;
				restart();
			}

			$formattedValue = sprintf("%09d", $numsArray[10]);
			if ($check = preg_match_all($sumToCheck[$i], $formattedValue)) {
				echo $blueWins;
				restart();
			}

		}
	} 
}


function echoTurn(){
	echo $_POST['hidden'];
}

function echoPaint(){
	if ($_POST['hidden'] % 2 == 1) $GLOBALS["paint"] = 'b';
	if ($_POST['hidden'] % 2 == 0) $GLOBALS["paint"] = 'r';
	echo "'".$GLOBALS["paint"]."';"; 
}

function echoStartJS(){
	if ($GLOBALS["restartCounter"] == 1) {
		$GLOBALS["restartCounter"] = 0;
		echo 'startJS();';		
	}
}

function loadSave() {
	if ($_SESSION['newLoad'] == 1) {
		$_SESSION['newLoad'] = 0;
		for ($i = 0; $i < 9; $i++) {
			$_POST['hi'.$i] = $_SESSION["posthi".$i];
		}
	$_POST['hidden'] = $_SESSION['posthidden'];
	$_SESSION['posthidden'] = '';
	//start();
	}
}

function updateRoomState() {
	global $mysqli;
	$userInRoomSql = "SELECT inRoom FROM users WHERE username = '".$_SESSION['currentUser']."'";
	$userInRoom = $mysqli->query($userInRoomSql)->fetch_assoc();
	if ($userInRoom) {
		$updateRoomStatesql = "UPDATE lobby SET gameState = '".$_SESSION['gameState']."' WHERE roomName ='".$userInRoom['inRoom']."'";
		$mysqli->query($updateRoomStatesql);

	}
}


?> 

