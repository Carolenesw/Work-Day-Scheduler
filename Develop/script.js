$(document).ready(function () {

    // use moment.js to add current time and append to page
   var currentTime = moment().format('LLLL');
   console.log(currentTime)
   $("#currentDay").append(currentTime);

//    create variables 
var timeSlots = moment().format('h:00');
console.log(timeSlots)
// var time9 = $(".time9");
var time10 = $(".time10");
var time11 = $(".time11");
var time12 = $(".time12");
var time1 = $(".time1");
var time2 = $(".time2");
var time3 = $(".time3");
var time4 = $(".time4");
var time5 = $(".time5");

// stringify timeSlots to use in calendar time log 
var availableTimes = timeSlots.toString();
console.log(availableTimes)
console.log(typeof "availableTimes");

var time9 = moment().add(1, "hours").format('h:00 A')
// time9 = moment().format(1, 'h')
console.log(time9)
// $(".time9").append(time9)


// var time9 = $(".time9").data("time", "9:00 am")

// console.log(time9)

// localStorage.setItem("time9", JSON.stringify(time9))
// localStorage.getItem("time9")

// console.log(time9)




// https://api.jquery.com/text/
// https://api.jquery.com/data/

})




