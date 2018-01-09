// Controlar el botó de l'audio.
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_controls
// -----------------------------------------------------------------------------
var x = document.getElementById("vivaldi");

function mostrarAudio() {
  x.controls = true;
  // x.load();
}

function ocultarAudio() {
  x.controls = false;
  // x.load();
}


// Activar Tooltips Bootstrap
// https://getbootstrap.com/docs/4.0/components/tooltips/
// -----------------------------------------------------------------------------
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


// Contador
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
// -----------------------------------------------------------------------------
// Set the date we're counting down to
var countDownDate = new Date("Jan 11, 2018 15:37:25").getTime();

// Update the count down every 1 second
var countUp = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="contador"
  document.getElementById("contador").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
      clearInterval(countUp);
      document.getElementById("contador").innerHTML = "EXPIRED";
  }
}, 1000);
