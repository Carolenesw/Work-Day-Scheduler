$(document).ready(function () {

    // use moment.js to add current time to page
    var currentTime = moment().format('LLLL');
    console.log(currentTime)
    

    //    create variables 
    var timeSlots = parseInt(moment().format('h:00 A'));
    console.log(timeSlots)
    console.log(typeof "timeSlots");

    // stringify timeSlots to use in calendar time log 
    var availableTimes = parseInt(timeSlots)
    console.log(availableTimes)
    console.log(typeof "availableTimes");



    // create array to hold time for comparison
    
    // append current time and increment time to time slots on page 
    $("#currentDay").append(currentTime);
    // $(".time10").append("<p>" + time10 + "</p>")

    var time9 = $(".time9")
    var time10 = $(".time10")
    var time11 = $(".time11")
    var time12 = $(".time12")
    var time1 = $(".time1")
    var time2 = $(".time2")
    var time3 = $(".time3")
    var time4 = $(".time4")
    var time5 = $(".time5")

    // re-assigned variable to time strings
    time9 = 9;
    time10 = 10;
    time11 = 11;
    time12 = 12;
    time1 = 1 + 12;
    time2 = 2 + 12;
    time3 = 3 + 12;
    time4 = 4 + 12;
    time5 = 5 + 12;

    var timeCompare = [time9, time10, time11, time12, time1, time2, time3, time4, time5];
    console.log(timeCompare)
    // create function to show color block 
    function colorBlocks() {
        // var timeNow = parseInt(timeSlots)
        // var timeComp = parseInt(timeCompare)
        // console.log(timeNow)
        // console.log(timeComp)
        for (var i = 0; i < timeCompare.length; i++) {
            console.log(timeCompare[i])

            if (timeCompare === availableTimes) {
                $(".time9").attr("style", "background-color: red")
            } else if (timeCompare < availableTimes) {
                $(".time9").attr("style", "background-color: grey")
            } else {
                $(".time9").attr("style", "background-color: green")
            }


        
        }
    }
        
})


// add input data to local storage when save button is click
$(".save").on("click", function (event) {
    // var textData = $(this).val()
    // console.log(textData)
    var textArea = $(".text").val()
    console.log(textArea)

    localStorage.setItem("text", textArea)
})



//  // create set start time for time slots
//  var year = 2020;
//  var month = 5;
//  var startTime = moment(year + '-' + month + '-' + 01 + ' 00:00').format('h:00 A')
//  console.log(startTime)

//  var time9 = moment().add(12, "hours").format('h:00 A');
//  console.log(time9)
//  // use momentjs to increment time by 1 hour each for timeslots
//  var time10 = moment().add(13, "hours").format('h:00 A');
//  var time11 = moment().add(14, "hours").format('h:00 A');
//  var time12 = moment().add(15, "hours").format('h:00 A');
//  var time1 = moment().add(16, "hours").format('h:00 A');
//  var time2 = moment().add(17, "hours").format('h:00 A');
//  var time3 = moment().add(18, "hours").format('h:00 A')
//  var time4 = moment().add(19, "hours").format('h:00 A')
//  var time5 = moment().add(20, "hours").format('h:00 A')