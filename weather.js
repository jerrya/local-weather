$(document).ready(function() {

	var temp;

	// Workaround for getting coordinates through an insecure connection
	$.getJSON("http://ip-api.com/json", function(data){
		var lat = data.lat;
		var long = data.lon;
		var city = data.city;
		var region = data.region;

		getWeather(lat, long, city, region);
	});

	function getWeather(latitude, longitude, city, region) {
		var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=285cf80f33584eafeb090d3848835b3c";
		$.getJSON(url, 
			function(data){
				temp = data.main.temp;
				var description = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
				var icon = data.weather[0].icon + ".png";

				$("#headline").html(description);
				$("#temperature").html(convertToFahrenheit());
				$("#description").html(city + ", " + region);
				$("#icon").html("<img class='img img-responsive center-block' src='http://openweathermap.org/img/w/" + icon + "'>");
		});
	}

	// Return to one decimal place
	function convertToCelsius() {
		return (temp - 273.15).toFixed(1) + "° C";
	}

	function convertToFahrenheit() {
		return ( (temp * 9/5) - 459.67).toFixed(1) + "° F";
	}

	$('#cButton').click(function(){
		$("#temperature").html(convertToCelsius());
	});

	$('#fButton').click(function(){
		$("#temperature").html(convertToFahrenheit());
	});

});