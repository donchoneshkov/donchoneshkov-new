var playNotesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var playOctavesArray = [0, 0, 0, 0];
/*
document.body.onkeyup = function(noteKeyUp) {
	if(noteKeyUp.keyCode == 49) {playNotesArray[0] = 0; playOctavesArray[0] = 0;}  //1
	if(noteKeyUp.keyCode == 50) {playNotesArray[1] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 51) {playNotesArray[2] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 52) {playNotesArray[3] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 53) {playNotesArray[4] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 54) {playNotesArray[5] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 55) {playNotesArray[6] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 56) {playNotesArray[7] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 57) {playNotesArray[8] = 0; playOctavesArray[0] = 0;}  //9
	if(noteKeyUp.keyCode == 48) {playNotesArray[9] = 0; playOctavesArray[0] = 0;}  //0
	if(noteKeyUp.keyCode == 189) {playNotesArray[10] = 0; playOctavesArray[0] = 0;}  //-
	if(noteKeyUp.keyCode == 187) {playNotesArray[11] = 0; playOctavesArray[0] = 0;}  //=
	if(noteKeyUp.keyCode == 81) {playNotesArray[0] = 0; playOctavesArray[1] = 0;}  //q
	if(noteKeyUp.keyCode == 87) {playNotesArray[1] = 0; playOctavesArray[1] = 0;}  //w
	if(noteKeyUp.keyCode == 69) {playNotesArray[2] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 82) {playNotesArray[3] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 84) {playNotesArray[4] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 89) {playNotesArray[5] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 85) {playNotesArray[6] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 73) {playNotesArray[7] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 79) {playNotesArray[8] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 80) {playNotesArray[9] = 0; playOctavesArray[1] = 0;}  //p
	if(noteKeyUp.keyCode == 219) {playNotesArray[10] = 0; playOctavesArray[1] = 0;}  //[
	if(noteKeyUp.keyCode == 221) {playNotesArray[11] = 0; playOctavesArray[1] = 0;}  //]
	if(noteKeyUp.keyCode == 65) {playNotesArray[0] = 0; playOctavesArray[2] = 0;}  //a
	if(noteKeyUp.keyCode == 83) {playNotesArray[1] = 0; playOctavesArray[2] = 0;}  //s
	if(noteKeyUp.keyCode == 68) {playNotesArray[2] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 70) {playNotesArray[3] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 71) {playNotesArray[4] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 72) {playNotesArray[5] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 74) {playNotesArray[6] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 75) {playNotesArray[7] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 76) {playNotesArray[8] = 0; playOctavesArray[2] = 0;}   //l
	if(noteKeyUp.keyCode == 186) {playNotesArray[9] = 0; playOctavesArray[2] = 0;}  //;
	if(noteKeyUp.keyCode == 222) {playNotesArray[10] = 0; playOctavesArray[2] = 0;}  //'
	if(noteKeyUp.keyCode == 220) {playNotesArray[11] = 0; playOctavesArray[2] = 0;}  //\
	if(noteKeyUp.keyCode == 90) {playNotesArray[0] = 0; playOctavesArray[3] = 0;}  //z
	if(noteKeyUp.keyCode == 88) {playNotesArray[1] = 0; playOctavesArray[3] = 0;}  //x
	if(noteKeyUp.keyCode == 67) {playNotesArray[2] = 0; playOctavesArray[3] = 0;}
	if(noteKeyUp.keyCode == 86) {playNotesArray[3] = 0; playOctavesArray[3] = 0;}
	if(noteKeyUp.keyCode == 66) {playNotesArray[4] = 0; playOctavesArray[3] = 0;}
	if(noteKeyUp.keyCode == 78) {playNotesArray[5] = 0; playOctavesArray[3] = 0;}
	if(noteKeyUp.keyCode == 77) {playNotesArray[6] = 0; playOctavesArray[3] = 0;}  //m
	if(noteKeyUp.keyCode == 188) {playNotesArray[7] = 0; playOctavesArray[3] = 0;}  // ,
	if(noteKeyUp.keyCode == 190) {playNotesArray[8] = 0; playOctavesArray[3] = 0;}   //.
	if(noteKeyUp.keyCode == 191) {playNotesArray[9] = 0; playOctavesArray[3] = 0;}  ///
	if(noteKeyUp.keyCode == 16) {playNotesArray[10] = 0; playOctavesArray[3] = 0;}  //shift
	if(noteKeyUp.keyCode == 13) {playNotesArray[11] = 0; playOctavesArray[3] = 0;}  //enter
	//console.log(playNotesArray);
	//console.log(playOctavesArray);
	//currentlyPlayingNote = 'a';
	//currentlyPlayingOctave = 'a';

}
document.body.onkeydown = function(noteKeyDown) {
	if(noteKeyDown.keyCode == 49) {playNotesArray[0] = 1; playOctavesArray[0] = 1;}  //1
	if(noteKeyDown.keyCode == 50) {playNotesArray[1] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 51) {playNotesArray[2] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 52) {playNotesArray[3] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 53) {playNotesArray[4] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 54) {playNotesArray[5] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 55) {playNotesArray[6] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 56) {playNotesArray[7] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 57) {playNotesArray[8] = 1; playOctavesArray[0] = 1;}  //9
	if(noteKeyDown.keyCode == 48) {playNotesArray[9] = 1; playOctavesArray[0] = 1;}  //0
	if(noteKeyDown.keyCode == 189) {playNotesArray[10] = 1; playOctavesArray[0] = 1;}  //-
	if(noteKeyDown.keyCode == 187) {playNotesArray[11] = 1; playOctavesArray[0] = 1;}  //=
	if(noteKeyDown.keyCode == 81) {playNotesArray[0] = 1; playOctavesArray[1] = 1;}  //q
	if(noteKeyDown.keyCode == 87) {playNotesArray[1] = 1; playOctavesArray[1] = 1;}  //w
	if(noteKeyDown.keyCode == 69) {playNotesArray[2] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 82) {playNotesArray[3] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 84) {playNotesArray[4] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 89) {playNotesArray[5] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 85) {playNotesArray[6] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 73) {playNotesArray[7] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 79) {playNotesArray[8] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 80) {playNotesArray[9] = 1; playOctavesArray[1] = 1;}  //p
	if(noteKeyDown.keyCode == 219) {playNotesArray[10] = 1; playOctavesArray[1] = 1;}  //[
	if(noteKeyDown.keyCode == 221) {playNotesArray[11] = 1; playOctavesArray[1] = 1;}  //]
	if(noteKeyDown.keyCode == 65) {playNotesArray[0] = 1; playOctavesArray[2] = 1;}  //a
	if(noteKeyDown.keyCode == 83) {playNotesArray[1] = 1; playOctavesArray[2] = 1;}  //s
	if(noteKeyDown.keyCode == 68) {playNotesArray[2] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 70) {playNotesArray[3] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 71) {playNotesArray[4] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 72) {playNotesArray[5] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 74) {playNotesArray[6] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 75) {playNotesArray[7] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 76) {playNotesArray[8] = 1; playOctavesArray[2] = 1;}   //l
	if(noteKeyDown.keyCode == 186) {playNotesArray[9] = 1; playOctavesArray[2] = 1;}  //;
	if(noteKeyDown.keyCode == 222) {playNotesArray[10] = 1; playOctavesArray[2] = 1;}  //'
	if(noteKeyDown.keyCode == 220) {playNotesArray[11] = 1; playOctavesArray[2] = 1;}  //\
	if(noteKeyDown.keyCode == 90) {playNotesArray[0] = 1; playOctavesArray[3] = 1;}  //z
	if(noteKeyDown.keyCode == 88) {playNotesArray[1] = 1; playOctavesArray[3] = 1;}  //x
	if(noteKeyDown.keyCode == 67) {playNotesArray[2] = 1; playOctavesArray[3] = 1;}
	if(noteKeyDown.keyCode == 86) {playNotesArray[3] = 1; playOctavesArray[3] = 1;}
	if(noteKeyDown.keyCode == 66) {playNotesArray[4] = 1; playOctavesArray[3] = 1;}
	if(noteKeyDown.keyCode == 78) {playNotesArray[5] = 1; playOctavesArray[3] = 1;}
	if(noteKeyDown.keyCode == 77) {playNotesArray[6] = 1; playOctavesArray[3] = 1;}  //m
	if(noteKeyDown.keyCode == 188) {playNotesArray[7] = 1; playOctavesArray[3] = 1;}  // ,
	if(noteKeyDown.keyCode == 190) {playNotesArray[8] = 1; playOctavesArray[3] = 1;}   //.
	if(noteKeyDown.keyCode == 191) {playNotesArray[9] = 1; playOctavesArray[3] = 1;}  ///
	if(noteKeyDown.keyCode == 16) {playNotesArray[10] = 1; playOctavesArray[3] = 1;}  //shift
	if(noteKeyDown.keyCode == 13) {playNotesArray[11] = 1; playOctavesArray[3] = 1;}  //enter
	//console.log(playNotesArray);
	//console.log(playOctavesArray);
}
*/

document.body.onkeydown = function(noteKeyDown) {
	if(noteKeyDown.keyCode == 49) {playNote(notesArray[0], octavesArray[0], 49); playNotesArray[0] = 1; playOctavesArray[0] = 1;}  //1
	if(noteKeyDown.keyCode == 50) {playNote(notesArray[1], octavesArray[0], 50); playNotesArray[1] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 51) {playNote(notesArray[2], octavesArray[0], 51); playNotesArray[2] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 52) {playNote(notesArray[3], octavesArray[0], 52); playNotesArray[3] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 53) {playNote(notesArray[4], octavesArray[0], 53); playNotesArray[4] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 54) {playNote(notesArray[5], octavesArray[0], 54); playNotesArray[5] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 55) {playNote(notesArray[6], octavesArray[0], 55); playNotesArray[6] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 56) {playNote(notesArray[7], octavesArray[0], 56); playNotesArray[7] = 1; playOctavesArray[0] = 1;}
	if(noteKeyDown.keyCode == 57) {playNote(notesArray[8], octavesArray[0], 57); playNotesArray[8] = 1; playOctavesArray[0] = 1;}  //9
	if(noteKeyDown.keyCode == 48) {playNote(notesArray[9], octavesArray[0], 48); playNotesArray[9] = 1; playOctavesArray[0] = 1;}  //0
	if(noteKeyDown.keyCode == 189) {playNote(notesArray[10], octavesArray[0], 189); playNotesArray[10] = 1; playOctavesArray[0] = 1;}  //-
	if(noteKeyDown.keyCode == 187) {playNote(notesArray[11], octavesArray[0], 187); playNotesArray[11] = 1; playOctavesArray[0] = 1;}  //=
	if(noteKeyDown.keyCode == 81) {playNote(notesArray[0], octavesArray[1], 81); playNotesArray[0] = 1; playOctavesArray[1] = 1;}  //q
	if(noteKeyDown.keyCode == 87) {playNote(notesArray[1], octavesArray[1], 87); playNotesArray[1] = 1; playOctavesArray[1] = 1;}  //w
	if(noteKeyDown.keyCode == 69) {playNote(notesArray[2], octavesArray[1], 69); playNotesArray[2] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 82) {playNote(notesArray[3], octavesArray[1], 82); playNotesArray[3] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 84) {playNote(notesArray[4], octavesArray[1], 84); playNotesArray[4] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 89) {playNote(notesArray[5], octavesArray[1], 89); playNotesArray[5] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 85) {playNote(notesArray[6], octavesArray[1], 85); playNotesArray[6] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 73) {playNote(notesArray[7], octavesArray[1], 73); playNotesArray[7] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 79) {playNote(notesArray[8], octavesArray[1], 79); playNotesArray[8] = 1; playOctavesArray[1] = 1;}
	if(noteKeyDown.keyCode == 80) {playNote(notesArray[9], octavesArray[1], 80); playNotesArray[9] = 1; playOctavesArray[1] = 1;}  //p
	if(noteKeyDown.keyCode == 219) {playNote(notesArray[10], octavesArray[1], 219); playNotesArray[10] = 1; playOctavesArray[1] = 1;}  //[
	if(noteKeyDown.keyCode == 221) {playNote(notesArray[11], octavesArray[1], 221); playNotesArray[11] = 1; playOctavesArray[1] = 1;}  //]
	if(noteKeyDown.keyCode == 65) {playNote(notesArray[0], octavesArray[2], 65); playNotesArray[0] = 1; playOctavesArray[2] = 1;}  //a
	if(noteKeyDown.keyCode == 83) {playNote(notesArray[1], octavesArray[2], 83); playNotesArray[1] = 1; playOctavesArray[2] = 1;}  //s
	if(noteKeyDown.keyCode == 68) {playNote(notesArray[2], octavesArray[2], 68); playNotesArray[2] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 70) {playNote(notesArray[3], octavesArray[2], 70); playNotesArray[3] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 71) {playNote(notesArray[4], octavesArray[2], 71); playNotesArray[4] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 72) {playNote(notesArray[5], octavesArray[2], 72); playNotesArray[5] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 74) {playNote(notesArray[6], octavesArray[2], 74); playNotesArray[6] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 75) {playNote(notesArray[7], octavesArray[2], 75); playNotesArray[7] = 1; playOctavesArray[2] = 1;}
	if(noteKeyDown.keyCode == 76) {playNote(notesArray[8], octavesArray[2], 76); playNotesArray[8] = 1; playOctavesArray[2] = 1;}   //l
	if(noteKeyDown.keyCode == 186) {playNote(notesArray[9], octavesArray[2], 186); playNotesArray[9] = 1; playOctavesArray[2] = 1;}  //;
	if(noteKeyDown.keyCode == 222) {playNote(notesArray[10], octavesArray[2], 222); playNotesArray[10] = 1; playOctavesArray[2] = 1;}  //'
	if(noteKeyDown.keyCode == 220) {playNote(notesArray[11], octavesArray[2], 220); playNotesArray[11] = 1; playOctavesArray[2] = 1;}  //\
	if(noteKeyDown.keyCode == 90) {playNote(notesArray[0], octavesArray[3], 90); playNotesArray[0] = 1; playOctavesArray[3] = 1;}  //z
	if(noteKeyDown.keyCode == 88) {playNote(notesArray[1], octavesArray[3], 88); playNotesArray[1] = 1; playOctavesArray[3] = 1;}  //x
	if(noteKeyDown.keyCode == 67) {playNote(notesArray[2], octavesArray[3], 67); playNotesArray[2] = 1; playOctavesArray[3] = 1;}
	if(noteKeyDown.keyCode == 86) {playNote(notesArray[3], octavesArray[3], 86); playNotesArray[3] = 1; playOctavesArray[3] = 1;}
	if(noteKeyDown.keyCode == 66) {playNote(notesArray[4], octavesArray[3], 66); playNotesArray[4] = 1; playOctavesArray[3] = 1;}
	if(noteKeyDown.keyCode == 78) {playNote(notesArray[5], octavesArray[3], 78); playNotesArray[5] = 1; playOctavesArray[3] = 1;}
	if(noteKeyDown.keyCode == 77) {playNote(notesArray[6], octavesArray[3], 77); playNotesArray[6] = 1; playOctavesArray[3] = 1;}  //m
	if(noteKeyDown.keyCode == 188) {playNote(notesArray[7], octavesArray[3], 188); playNotesArray[7] = 1; playOctavesArray[3] = 1;}  // ,
	if(noteKeyDown.keyCode == 190) {playNote(notesArray[8], octavesArray[3], 190); playNotesArray[8] = 1; playOctavesArray[3] = 1;}   //.
	if(noteKeyDown.keyCode == 191) {playNote(notesArray[9], octavesArray[3], 191); playNotesArray[9] = 1; playOctavesArray[3] = 1;}  ///
	if(noteKeyDown.keyCode == 16) {playNote(notesArray[10], octavesArray[3], 16); playNotesArray[10] = 1; playOctavesArray[3] = 1;}  //shift
	if(noteKeyDown.keyCode == 13) {playNote(notesArray[11], octavesArray[3], 13); playNotesArray[11] = 1; playOctavesArray[3] = 1;}  //enter
	//console.log(playNotesArray);
	//console.log(playOctavesArray);
}

document.body.onkeyup = function(noteKeyUp) {
	if(noteKeyUp.keyCode == 49) {killNote(49); playNotesArray[0] = 0; playOctavesArray[0] = 0;}  //1
	if(noteKeyUp.keyCode == 50) {killNote(50); playNotesArray[1] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 51) {killNote(51); playNotesArray[2] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 52) {killNote(52); playNotesArray[3] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 53) {killNote(53); playNotesArray[4] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 54) {killNote(54); playNotesArray[5] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 55) {killNote(55); playNotesArray[6] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 56) {killNote(56); playNotesArray[7] = 0; playOctavesArray[0] = 0;}
	if(noteKeyUp.keyCode == 57) {killNote(57); playNotesArray[8] = 0; playOctavesArray[0] = 0;}  //9
	if(noteKeyUp.keyCode == 48) {killNote(48); playNotesArray[9] = 0; playOctavesArray[0] = 0;}  //0
	if(noteKeyUp.keyCode == 189) {killNote(189); playNotesArray[10] = 0; playOctavesArray[0] = 0;}  //-
	if(noteKeyUp.keyCode == 187) {killNote(187); playNotesArray[11] = 0; playOctavesArray[0] = 0;}  //=
	if(noteKeyUp.keyCode == 81) {killNote(81); playNotesArray[0] = 0; playOctavesArray[1] = 0;}  //q
	if(noteKeyUp.keyCode == 87) {killNote(87); playNotesArray[1] = 0; playOctavesArray[1] = 0;}  //w
	if(noteKeyUp.keyCode == 69) {killNote(69); playNotesArray[2] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 82) {killNote(82); playNotesArray[3] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 84) {killNote(84); playNotesArray[4] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 89) {killNote(89); playNotesArray[5] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 85) {killNote(85); playNotesArray[6] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 73) {killNote(73); playNotesArray[7] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 79) {killNote(79); playNotesArray[8] = 0; playOctavesArray[1] = 0;}
	if(noteKeyUp.keyCode == 80) {killNote(80); playNotesArray[9] = 0; playOctavesArray[1] = 0;}  //p
	if(noteKeyUp.keyCode == 219) {killNote(219); playNotesArray[10] = 0; playOctavesArray[1] = 0;}  //[
	if(noteKeyUp.keyCode == 221) {killNote(221); playNotesArray[11] = 0; playOctavesArray[1] = 0;}  //]
	if(noteKeyUp.keyCode == 65) {killNote(65); playNotesArray[0] = 0; playOctavesArray[2] = 0;}  //a
	if(noteKeyUp.keyCode == 83) {killNote(83); playNotesArray[1] = 0; playOctavesArray[2] = 0;}  //s
	if(noteKeyUp.keyCode == 68) {killNote(68); playNotesArray[2] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 70) {killNote(70); playNotesArray[3] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 71) {killNote(71); playNotesArray[4] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 72) {killNote(72); playNotesArray[5] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 74) {killNote(74); playNotesArray[6] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 75) {killNote(75); playNotesArray[7] = 0; playOctavesArray[2] = 0;}
	if(noteKeyUp.keyCode == 76) {killNote(76); playNotesArray[8] = 0; playOctavesArray[2] = 0;}   //l
	if(noteKeyUp.keyCode == 186) {killNote(186); playNotesArray[9] = 0; playOctavesArray[2] = 0;}  //;
	if(noteKeyUp.keyCode == 222) {killNote(222); playNotesArray[10] = 0; playOctavesArray[2] = 0;}  //'
	if(noteKeyUp.keyCode == 220) {killNote(220); playNotesArray[11] = 0; playOctavesArray[2] = 0;}  //\
	if(noteKeyUp.keyCode == 90) {killNote(90); playNotesArray[0] = 0; playOctavesArray[3] = 0;}  //z
	if(noteKeyUp.keyCode == 88) {killNote(88); playNotesArray[1] = 0; playOctavesArray[3] = 0;}  //x
	if(noteKeyUp.keyCode == 67) {killNote(67); playNotesArray[2] = 0; playOctavesArray[3] = 0;}
	if(noteKeyUp.keyCode == 86) {killNote(86); playNotesArray[3] = 0; playOctavesArray[3] = 0;}
	if(noteKeyUp.keyCode == 66) {killNote(66); playNotesArray[4] = 0; playOctavesArray[3] = 0;}
	if(noteKeyUp.keyCode == 78) {killNote(78); playNotesArray[5] = 0; playOctavesArray[3] = 0;}
	if(noteKeyUp.keyCode == 77) {killNote(77); playNotesArray[6] = 0; playOctavesArray[3] = 0;}  //m
	if(noteKeyUp.keyCode == 188) {killNote(188); playNotesArray[7] = 0; playOctavesArray[3] = 0;}  // ,
	if(noteKeyUp.keyCode == 190) {killNote(190); playNotesArray[8] = 0; playOctavesArray[3] = 0;}   //.
	if(noteKeyUp.keyCode == 191) {killNote(191); playNotesArray[9] = 0; playOctavesArray[3] = 0;}  ///
	if(noteKeyUp.keyCode == 16) {killNote(16); playNotesArray[10] = 0; playOctavesArray[3] = 0;}  //shift
	if(noteKeyUp.keyCode == 13) {killNote(13); playNotesArray[11] = 0; playOctavesArray[3] = 0;}  //enter


}