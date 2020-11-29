var minutes =  parseInt($('#timer').text());


$('#plus').on('click', function(){
	minutes++;
	$('#timer').text(minutes);
});

$('#minus').on('click', function(){
	minutes--;
	$('#timer').text(minutes);
});




var seconds = 0;

function startTimer(){
	var x = new Date();
		if(seconds === 0){
			minutes--;
			seconds = 59;
		}
	document.getElementById("timer").innerHTML = minutes + ":" + seconds;
	seconds--;
	if(seconds < 10){
		document.getElementById("timer").innerHTML = minutes + ":0" + seconds;
	}
	
}



$("#start").on('click', function(){
	var copy = [];
	copy.push(minutes);
	minutes =  parseInt($('#timer').text())
	var timer  = setInterval(function(){
		startTimer();
		if(seconds === 0 && minutes === 0){
		notifyMe();
		clearInterval(timer);
	}
	}, 1000);
	$("#pause").on('click', function(){
	var pause  = clearInterval(timer);
});
	$('#reset').on('click', function(){
		 $('#timer').text(copy[0]);
});
});




function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  else if (Notification.permission === "granted") {
    var notification = new Notification("Take a 5 minute break!");
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Take a 5 minute break!");
      }
    });
  }
}


