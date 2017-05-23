var Moment = require('./../js/alarm.js').alarmClock;

$(document).ready(function(){
  $("#alarm-clock-form").submit(function(event){
    event.preventDefault();
    var alarm = $('#alarm').val()
    // var minutes = $('#minutes').val()
    var timeNow = moment().format('HH:mm A');
    console.log(alarmset)
    $('#alarmset').text(alarm);
    setInterval(function() {
    if (alarm === moment().format('HH:mm')) {
      alert("WAKE UP")
    }
  },1000)
    // if $('#time' === alarmset)

  })
});


$(document).ready(function(){
  $("#alarm").submit(function(event){
    event.preventDefault();
    var alarm = $('#alarm').val();
    var alarmClock = new Moment;
  })
});

var Whatever = require('./../js/alarm.js').alarmClock;

// var datetime = null,
//         date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('HH:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#time')
    update();
    setInterval(update, 1000);
});
