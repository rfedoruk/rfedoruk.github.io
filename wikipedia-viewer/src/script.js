document.getElementById("search").focus();

$(function() {
	
	$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("#broughtform").submit();
    }
  });
	
	
	$('#button').on('click', function (){
		$('#results').empty();
    document.getElementById("content").style.visibility = "visible";
		
		var searchTerm = document.getElementById("search").value;
		
		var wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + searchTerm;
		
		$.ajax({
			url: wikiURL, 
			dataType: "jsonp",
			success: function(data) {
				var result = data["query"]["search"],
						length = result.length;

				for (var i=0;i<length;i++){
					result[i];
					
					$('<div class="wiki"></div>').append("<a href='https://en.wikipedia.org/wiki/" + result[i]["title"] + "' target='_blank'><h1 class='title'>"+result[i]["title"]+"</h1></a>")
									.append("<h2 class='snippet'>"+result[i]["snippet"]+"</h2>")
									.appendTo('#results').fadeIn(8000);

				}
			}});
	});
});