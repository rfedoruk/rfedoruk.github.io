$('#board').css('display', 'none');
$('#board').css('visibility', 'hidden');


var userSign;
var tics = [];
var computerSign;

$("#xOrO").on('click', 'h2', function(){
	$('#board').css('display', 'block');
	$('#board').css('visibility', 'visible');
	$('#board').css('text-align', 'center');
	
	$("#xOrO").css('visibility', 'hidden');
	$("#xOrO").css('display', 'none');
	
	if($(this).text() == "X"){
		userSign = "X";
		computerSign = "O"
	}else if($(this).text() == "O"){
		userSign = "O";
		computerSign = "X";
	}
});

$('#board').on('click', 'td', function(){
   $(this).text(userSign);
		var empties = checkEmpties();
		var randInt = empties[Math.floor(Math.random() * empties.length)];
		setTimeout(function()
    {
			$('td').eq(randInt).text(computerSign);
			win();
			computerWin();
    }, 500);
	  
		
});

$('#reset').on('click', function(){
   reset();
});


function win(){ // Not an elegant idea, but works. 
	if($('#topLeft').text() == userSign && $('#top').text() == userSign && $('#topRight').text() == userSign){
		playerWins();
	}else if($('#middleLeft').text() == userSign && $('#middle').text() == userSign && $('#middleRight').text() == userSign){
		playerWins();
	}else if($('#bottomLeft').text() == userSign && $('#bottom').text() == userSign && $('#bottomRight').text() == userSign){
		playerWins();
	}else if($('#topLeft').text() == userSign && $('#middleLeft').text() == userSign && $('#bottomLeft').text() == userSign){
		playerWins();
	}else if($('#top').text() == userSign && $('#middle').text() == userSign && $('#bottom').text() == userSign){
		playerWins();
	}else if($('#topRight').text() == userSign && $('#middleRight').text() == userSign && $('#bottomRight').text() == userSign){
		playerWins();
	}else if($('#topLeft').text() == userSign && $('#middle').text() == userSign && $('#bottomRight').text() == userSign){
		playerWins();
	}else if($('#topRight').text() == userSign && $('#middle').text() == userSign && $('#bottomLeft').text() == userSign){
		playerWins();
	}
}

function playerWins(){
	$('#board').css('display', 'none');
	$('#board').css('visibility', 'hidden');
	
	$('#playerWins').css('visibility', 'visible');
	$('#playerWins').css('display', 'block');
	
	$('#whoWon').text("You Won!");
}

function computerWins(){
	$('#board').css('display', 'none');
	$('#board').css('visibility', 'hidden');
	
	$('#playerWins').css('visibility', 'visible');
	$('#playerWins').css('display', 'block');
	
	$('#whoWon').text("Computer Won!");
	
}

function reset(){
	$('#xOrO').css('visibility', 'visible');
	$('#xOrO').css('display', 'block');
	
	$('#playerWins').css('visibility', 'invisible');
	$('#playerWins').css('display', 'none');
	
	$('#topLeft').text("");
	$('#top').text("");
	$('#topRight').text("");
	$('#middleLeft').text("");
	$('#middle').text("");
	$('#middleRight').text("");
	$('#bottomLeft').text("");
	$('#bottom').text("");
	$('#bottomRight').text("");
}

function filled(element){
	if(element.text() == ""){
		return false;
	}else if(element.text() !== ""){
		return true;
	}
}

function checkEmpties(){
	var empty = [];
	$("td").each(function( index ) {
		if($(this).text() == ""){
			empty.push(index);
		}
});
	return empty;
}

function computerWin(){ // Not an elegant idea, but works. 
	if($('#topLeft').text() == computerSign && $('#top').text() == computerSign && $('#topRight').text() == computerSign){
		computerWins();
	}else if($('#middleLeft').text() == computerSign && $('#middle').text() == computerSign && $('#middleRight').text() == computerSign){
		computerWins();
	}else if($('#bottomLeft').text() == computerSign && $('#bottom').text() == computerSign && $('#bottomRight').text() == computerSign){
		computerWins();
	}else if($('#topLeft').text() == computerSign && $('#middleLeft').text() == computerSign && $('#bottomLeft').text() == computerSign){
		computerWins();
	}else if($('#top').text() == computerSign && $('#middle').text() == computerSign && $('#bottom').text() == computerSign){
		computerWins();
	}else if($('#topRight').text() == computerSign && $('#middleRight').text() == computerSign && $('#bottomRight').text() == computerSign){
		computerWins();
	}else if($('#topLeft').text() == computerSign && $('#middle').text() == computerSign && $('#bottomRight').text() == computerSign){
		computerWins();
	}else if($('#topRight').text() == computerSign && $('#middle').text() == computerSign && $('#bottomLeft').text() == computerSign){
		computerWins();
	}
}