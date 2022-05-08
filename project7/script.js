var countDownDate = new Date("May 14, 2022 12:30:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "I graduated!";
  }
}, 1000);

function toggleNav () {
  if (document.getElementById('navlinks').style.getPropertyValue("display") == 'block') {
      document.getElementById("navlinks").style.display = "none";
} else {
  document.getElementById("navlinks").style.display = "block";
}
}
