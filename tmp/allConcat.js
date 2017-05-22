
var apiKey = "92ab1d4d1eff495bfe2d06f2969029b7";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
      .then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.weather[0].description);
      $('.showWeather1').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
