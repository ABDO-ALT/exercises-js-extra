/*
================

Create an HTML file that uses this javascript file. (x)

The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.(x)
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.(x)
When you get the response from the server, print the current temperature in an <h3> marker.
Validate the form when you click on the button, if the inputs are empty or ar not numeric, show a warning message(x)
If you can, show the humidity and the image link given by the API object.

================
*/

function getInformation() {
  let latitude = document.getElementById("latitude").value;
  let longitude = document.getElementById("longitude").value;

  const weather = fetch(
    "https://fcc-weather-api.glitch.me/api/current?lat=" +
      latitude +
      "&lon=" +
      longitude
  );

  weather
    .then((response) => response.json())
    .then((get) => {
      console.log(get);
      if (latitude === "" || longitude === "") {
        console.log("no");
        let input = document.getElementById("temperature");
        input.innerHTML = "The input shoudl not be empty";
      } else {
        let temperature = document.getElementById("temperature");
        temperature.innerHTML =
          "<p>" + "Temperature: " + get.main.temp + "°<span>C</span></p>";
        let humidity = document.getElementById("humidity");
        humidity.innerHTML =
          "<p>" + "humidity: " + get.main.humidity + "<span>%</span></p>";
      }
    });
}
