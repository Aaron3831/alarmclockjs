$(document).ready(function(){
  $("#alarm-clock-form").submit(function(event){
    event.preventDefault();
    var alarmset = Moment().hour(hours).minute(minutes)
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
    datetime.html(date.format('h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#time')
    update();
    setInterval(update, 1000);
});
