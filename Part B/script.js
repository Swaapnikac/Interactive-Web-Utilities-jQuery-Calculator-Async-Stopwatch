$(document).ready(function() {
  var startTime;
  var elapsedTime = 0;
  var timerInterval;
  var running = false;
  
  // Set the date picker to current date
  var today = new Date().toISOString().split('T')[0];
  $('#datepicker').val(today);

  function updateDisplay() {
    var hours = Math.floor(elapsedTime / 3600000);
    var minutes = Math.floor((elapsedTime % 3600000) / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);

    $('.display').text((hours < 10 ? '0' : '') + hours + ':' +
                       (minutes < 10 ? '0' : '') + minutes + ':' +
                       (seconds < 10 ? '0' : '') + seconds);
  }

  function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 1000); // Update every second
    running = true;
  }

  function stopTimer() {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
    updateDisplay();
    running = false;
  }

  function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateDisplay();
    running = false;
  }

  $('.start').click(function() {
    if (!running) {
      startTimer();
    }
  });

  $('.stop').click(function() {
    if (running) {
      stopTimer();
    }
  });

  $('.reset').click(resetTimer);
});
