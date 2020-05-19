$(document).ready(function () {

    // use moment.js to add current time and append to page
   var currentTime = moment().format('LLLL');
   console.log(currentTime)
   $("#currentDay").append(currentTime);

//    create variables 
var timeSlots = moment().format('h:00');
console.log(timeSlots)
var time9 = $(".time9");
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



})
