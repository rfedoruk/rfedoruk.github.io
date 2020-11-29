// Current Bug: if two identical numbers are assigned as a character,
// the second one is written as "circular object array"

function getRandInt(numberOfInts){
	var arr = [];
	for (var i=0; i<numberOfInts; i++){
		arr.push(Math.floor(Math.random() * 70));
	}
	return arr;
}

function getRandChars(numberOfInts){
	var japaneseChars = [
	['a', 'あ'],
	['o', 'お'],
	['i', 'い'],
	['e', 'え'],
	['u', 'う'],
	['ka', 'か'],
	['ki', 'き'],
	['ko', 'こ'],
	['ku', 'く'],
	['ke', 'け'],
	['sa', 'さ'],
	['shi', 'し'],
	['su', 'す'],
	['se', 'せ'],
	['so', 'そ'],
	['ta', 'た'],
	['chi', 'ち'],
	['tsu', 'つ'],
	['te', 'て'],
	['to', 'と'],
	['na', 'な'],
	['ni', 'に'],
	['nu', 'ぬ'],
	['ne', 'ね'],
	['no', 'の'],
	['ha', 'は'],
	['hi', 'ひ'],
	['fu', 'ふ'],
	['he', 'へ'],
	['ho', 'ほ'],
	['ma', 'ま'],
	['mi', 'み'],
	['mu', 'む'],
	['me', 'め'],
	['mo', 'も'],
	['ya', 'や'],
	['yu', 'ゆ'],
	['yo', 'よ'],
	['ra', 'ら'],
	['ri', 'り'],
	['ru', 'る'],
	['re', 'れ'],
	['ro', 'ろ'],
	['wa', 'わ'],
	['wo', 'を'],
	['n', 'ん'],
	['ga', 'が'],
	['gi', 'ぎ'],
	['gu', 'ぐ'],
	['ge', 'げ'],
	['go', 'ご'],
	['za', 'ざ'],
	['zi', 'じ'],
	['zu', 'ず'],
	['ze', 'ぜ'],
	['zo', 'ぞ'],
	['da', 'だ'],
	['di', 'ぢ'],
	['du', 'づ'],
	['de', 'で'],
	['do', 'ど'],
	['bi', 'び'],
	['ba', 'ば'],
	['bu', 'ぶ'],
	['be', 'べ'],
	['bo', 'ぼ'],
	['pa', 'ぱ'],
	['pi', 'ぴ'],
	['pu', 'ぷ'],
	['pe', 'ぺ'],
	['po', 'ぽ']
];
  var ints = getRandInt(numberOfInts);
	var array = [];
	for(var i=0; i<ints.length; i++){
		array[i] = japaneseChars[ints[i]];
	}
	return array;
}

function setChars(numberOfInts){
	var chars = getRandChars(numberOfInts);
	var english = [];
	var japanese = [];
	for(var i=0; i<chars.length; i++){
		english[i] = chars[i][0];
		japanese[i] = chars[i][1]
	}
	$("#englishLetters").text(english);
	$('#japaneseChars').text(japanese);
}


$("#start").click(function(){
	var num = $("#numOfChars").val();
	setChars(num);
	$("#english").css('display', 'block');
});



$('#showJapanese').click(function(){
	$('#japanese').css('display', 'block');;
});

$('#hide').click(function(){
	$('#japanese').css('display', 'none')
	$('#english').css('display', 'none');
});


document.addEventListener("keydown", function(key) {
  switch(key.which){
    case 13: // TODO: make this delete the last character only.
			var num = $("#numOfChars").val();
			setChars(num);
			$("#english").css('display', 'block');
      break;
									}
});