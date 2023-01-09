
function startJS() {
			for (i = 0; i < squares.length; i++) {
				document.getElementById('hi'+i).value = "0";
			}
			document.getElementById('hidden').value="1";
			myForm.submit();
		}

function saveJS() {
	window.location.href = "save.php";
}

function loadJS() {
	window.location.href = "load.php";	
}

function leaveJS() {
	window.location.href = "leave.php";
	// should be leave.php
}

function kickJS() {
	
}

function banJS() {
	
}