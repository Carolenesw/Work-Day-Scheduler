$(document).ready(function () {

    // use moment.js to add current time to page
    var currentTime = moment().format('LLLL');
    console.log(currentTime)

    //    create variables 
    var timeSlots = moment().format('h:00 A');
    console.log(timeSlots)

    // stringify timeSlots to use in calendar time log 
    var availableTimes = timeSlots.toString();
    console.log(availableTimes)
    console.log(typeof "availableTimes");

    // create set start time for time slots
    var year = 2020;
    var month = 5;
    var startTime = moment(year + '-' + month + '-' + 01 + ' 00:00').format('h:00 A')
    console.log(startTime)

    var time9 = moment().add(18, "hours").format('h:00 A');
    console.log(time9)
    // use momentjs to increment time by 1 hour each for timeslots
    var time10 = moment().add(19, "hours").format('h:00 A');
    var time11 = moment().add(20, "hours").format('h:00 A');
    var time12 = moment().add(21, "hours").format('h:00 A');
    var time1 = moment().add(22, "hours").format('h:00 A');
    var time2 = moment().add(23, "hours").format('h:00 A');
    var time3 = moment().add(24, "hours").format('h:00 A')
    var time4 = moment().add(25, "hours").format('h:00 A')
    var time5 = moment().add(26, "hours").format('h:00 A')

    // create array to hold time for comparison
    var timeCompare = [time9, time10, time11, time12, time1, time2, time3, time4, time5];

    // append current time and increment time to time slots on page 
    $("#currentDay").append(currentTime);
    $(".time9").append("<p>" + time9 + "</p>")
    $(".time10").append("<p>" + time10 + "</p>")
    $(".time11").append("<p>" + time11 + "</p>")
    $(".time12").append("<p>" + time12 + "</p>")
    $(".time1").append("<p>" + time1 + "</p>")
    $(".time2").append("<p>" + time2 + "</p>")
    $(".time3").append("<p>" + time3 + "</p>")
    $(".time4").append("<p>" + time4 + "</p>")
    $(".time5").append("<p>" + time5 + "</p>")


    

    // $(".first-time").attr("style", "color: red")

    // function colorCodes() {
    //     if (timeSlots === startTime) {
    //         $("#first-time").attr("style", "color: red")
    //     } else if (timeSlots > startTime) {
    //         $("#first-time").attr("style", "color: green")
    //     } else {
    //         $("#first-time").attr("style", "color: grey")
    //     }
    // }

    // colorCodes();


    // function colorBlocks() {
    //     switch (timeSlots) {
    //         case time9:
    //             $(".first-time").attr("style", "color: red")
    //             break;
    //         case time10:
    //             $(".first-time").attr("style", "color: red")
    //             break;
    //         case time11:
    //             $(".first-time").attr("style", "color: red")
    //             break;
    //         case time12:
    //             $(".first-time").attr("style", "color: red")
    //             break;
    //         case time1:
    //             $(".first-time").attr("style", "color: red")
    //             break;
    //         case time2:
    //             $(".first-time").attr("style", "color: red")
    //             break;
    //         case time3:
    //             $(".first-time").attr("style", "color: red")
    //             break;
    //         case time4:
    //             $(".first-time").attr("style", "color: red")
    //             break;
    //         case time5:
    //             $(".first-time").attr("style", "color: red")
    //             break;
    //         // default:
    //         //     $(".first-time").attr("style", "color: grey")
    //         // break;
    //     }
    //     // break;
    //     switch (timeSlots) {
    //         case time9:
    //             $(".first-time").attr("style", "color: green")
    //             break;
    //         case time10:
    //             $(".first-time").attr("style", "color: green")
    //             break;
    //         case time11:
    //             $(".first-time").attr("style", "color: green")
    //             break;
    //         case time12:
    //             $(".first-time").attr("style", "color: green")
    //             break;
    //         case time1:
    //             $(".first-time").attr("style", "color: green")
    //             break;
    //         case time2:
    //             $(".first-time").attr("style", "color: green")
    //             break;
    //         case time3:
    //             $(".first-time").attr("style", "color: green")
    //             break;
    //         case time4:
    //             $(".first-time").attr("style", "color: green")
    //             break;
    //         case time5:
    //             $(".first-time").attr("style", "color: green")
    //             break;
    //     }


    // }

    // colorBlocks();
    // https://api.jquery.com/text/
    // https://api.jquery.com/data/


})




