$(document).ready(function () {

    // use moment.js to add current time and append to page
   var currentTime = moment().format('LLLL');
   console.log(currentTime)
   $("#currentDay").append(currentTime);

//    create variables 
var timeSlots = moment().format('h:00');
console.log(timeSlots)
// var time9 = $(".time9");
// var time10 = $(".time10");
// var time11 = $(".time11");
// var time12 = $(".time12");
// var time1 = $(".time1");
// var time2 = $(".time2");
// var time3 = $(".time3");
// var time4 = $(".time4");
// var time5 = $(".time5");

// stringify timeSlots to use in calendar time log 
var availableTimes = timeSlots.toString();
console.log(availableTimes)
console.log(typeof "availableTimes");


var time9 = moment().add(1, "hours").format('h:00 A');

// use momentjs to increment time by 1 hour each for timeslots
var time10 = moment().add(2, "hours").format('h:00 A');
var time11 = moment().add(3, "hours").format('h:00 A');
var time12 = moment().add(4, "hours").format('h:00 A');
var time1 = moment().add(5, "hours").format('h:00 A');
var time2 = moment().add(6, "hours").format('h:00 A');
var time3 = moment().add(7, "hours").format('h:00 A')
var time4 = moment().add(8, "hours").format('h:00 A')
var time5 = moment().add(9, "hours").format('h:00 A')

// append increment time to time slots on page 
$(".time9").append("<p>" + time9 + "</p>")
$(".time10").append("<p>" + time10 + "</p>")
$(".time11").append("<p>" + time11 + "</p>")
$(".time12").append("<p>" + time12 + "</p>")
$(".time1").append("<p>" + time1 + "</p>")
$(".time2").append("<p>" + time2 + "</p>")
$(".time3").append("<p>" + time3 + "</p>")
$(".time4").append("<p>" + time4 + "</p>")
$(".time5").append("<p>" + time5 + "</p>")

console.log(time9)
console.log(typeof "time9")



// var time9 = $(".time9").data("time", "9:00 am")

// console.log(time9)

// localStorage.setItem("time9", JSON.stringify(time9))
// localStorage.getItem("time9")

// console.log(time9)




// https://api.jquery.com/text/
// https://api.jquery.com/data/

})




