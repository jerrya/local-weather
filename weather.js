$(document).ready(function() {

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=285cf80f33584eafeb090d3848835b3c", function(data){
		$.each(data, function(key, value) {
			//alert(key);
		});
	});

});