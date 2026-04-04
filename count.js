// Set shop hours
var openingTime = new Date();
openingTime.setHours(9, 0, 0); // 9:00 AM
var closingTime = new Date();
closingTime.setHours(19,0, 0); // 5:00 PM

// Update the countdown every second
setInterval(function() {
  var now = new Date();
  var currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

  // Calculate time to opening or closing
  var openingSeconds = openingTime.getHours() * 3600 + openingTime.getMinutes() * 60 + openingTime.getSeconds();
  var closingSeconds = closingTime.getHours() * 3600 + closingTime.getMinutes() * 60 + closingTime.getSeconds();

  if (currentTime < openingSeconds) {
    // Count down to opening time
    var distance = openingSeconds - currentTime;
    var hours = Math.floor(distance / 3600);
    var minutes = Math.floor((distance % 3600) / 60);
    var seconds = distance % 60;
    document.getElementById("countdown").innerHTML = "Opening in " + hours + "h " + minutes + "m " + seconds + "s ";
  } else if (currentTime >= openingSeconds && currentTime < closingSeconds) {
    // Count down to closing time
    var distance = closingSeconds - currentTime;
    var hours = Math.floor(distance / 3600);
    var minutes = Math.floor((distance % 3600) / 60);
    var seconds = distance % 60;
    document.getElementById("countdown").innerHTML = "Closing in " + hours + "h " + minutes + "m " + seconds + "s ";
  } else {
    // Shop is closed
    document.getElementById("countdown").innerHTML = "We're closed. Open tomorrow at 9:00 AM.";
  }
}, 1000); 