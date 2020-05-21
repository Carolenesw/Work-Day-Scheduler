$(document).ready(function () {

    // use moment.js to add current time to page
    var currentTime = moment().format('LLLL');
    console.log(currentTime)

    // create variables to use to compare times for coloring 
    var timeSlots = (moment().format('h:00 A'));
    console.log(timeSlots)

    // stringify timeSlots to use in calendar time log 
    var availableTimes = timeSlots.toString();
    console.log(availableTimes)
    console.log(typeof "availableTimes");


    // create set start time for time slots
    var year = 2020;
    var month = 5;
    var startTime = moment(year + '-' + month + '-' + ' 00:00').format('h:00 A')
    // var startTime = moment(year + '-' + month + '-' + 01 + ' 00:00').format('h:00 A')
    console.log(startTime)

    startTime = moment().add(21, "hours").format('h:00 A');
    console.log(startTime)
    var time9 = moment().add(20, "hours").format('h:00 A');
    console.log(time9)
    // use momentjs to increment time by 1 hour each for timeslots
    var time10 = moment().add(21, "hours").format('h:00 A');
    var time11 = moment().add(22, "hours").format('h:00 A');
    var time12 = moment().add(23, "hours").format('h:00 A');
    var time1 = moment().add(24, "hours").format('h:00 A');
    var time2 = moment().add(25, "hours").format('h:00 A');
    var time3 = moment().add(26, "hours").format('h:00 A');
    var time4 = moment().add(27, "hours").format('h:00 A');
    var time5 = moment().add(28, "hours").format('h:00 A');

    // create array to hold time for comparison and set to local storage 
    var timeCompare = [time9, time10, time11, time12, time1, time2, time3, time4, time5];
    console.log(timeCompare[0])
    localStorage.setItem("time", timeCompare);
    console.log(timeCompare[0])
    for (var i = 0; i < timeCompare.length; i++) {
        console.log("good morning, it is " + timeCompare[i])
    }

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


    // var time9 = $(".time9")
    // var time10 = $(".time10")
    // var time11 = $(".time11")
    // var time12 = $(".time12")
    // var time1 = $(".time1")
    // var time2 = $(".time2")
    // var time3 = $(".time3")
    // var time4 = $(".time4")
    // var time5 = $(".time5")

    // re-assigned variable to time strings
    // time9 = "9:00 am";
    // time10 = "10:00 am";
    // time11 = "11:00 am";
    // time12 = "12:00 noon";
    // time1 = "1:00 pm";
    // time2 = "2:00 pm";
    // time3 = "3:00 pm";
    // time4 = "4:00 pm";
    // time5 = "5:00 pm";



    // add input data to local storage when save button is click
    $(".save").on("click", function (event) {
        // var textData = $(this).val()
        // console.log(textData)

        var textArea = $(".text").val().trim()

        console.log(textArea)
        // console.log(textData)

        if (textArea === "") {
            alert("Please enter data")
        }

        // set items to local storage 
        localStorage.setItem("text", textArea)
        // localStorage.setItem("text9", JSON.stringify(time9));

    })

    renderData()
    function renderData() {
        var textInfo = localStorage.getItem("text");

    }
    colorBlocks()
    // create function to show color block 
    function colorBlocks() {
        // get times from local storage for color blocks
        // var timeS = localStorage.getItem("time");
        // console.log(timeS[0])
        console.log(timeCompare)
        if (timeSlots === timeCompare[0]) {
            console.log(timeCompare[0])
            $(".first-time").attr("style", "background-color: red")
        } else if (timeSlots < timeCompare[0]) {
            $(".first-time").attr("style", "background-color: green")
        } else {
            $(".first-time").attr("style", "background-color: grey")
        }

        if (timeSlots === timeCompare[1]) {
            $(".second-time").attr("style", "background-color: red")
        } else if (timeSlots < timeCompare[1]) {
            $(".second-time").attr("style", "background-color: green")
        } else {
            $(".second-time").attr("style", "background-color: grey")
        }
        if (timeSlots === timeCompare[2]) {
            $(".third-time").attr("style", "background-color: red")
        } else if (timeSlots < timeCompare[2]) {
            $(".third-time").attr("style", "background-color: green")
        } else {
            $(".third-time").attr("style", "background-color: grey")
        }

        if (timeSlots === timeCompare[3]) {
            $(".fouth-time").attr("style", "background-color: red")
        } else if (timeSlots < timeCompare[3]) {
            $(".fourth-time").attr("style", "background-color: green")
        } else {
            $(".fourth-time").attr("style", "background-color: grey")
        }

        if (timeSlots === timeCompare[4]) {
            $(".fouth-time").attr("style", "background-color: red")
        } else if (timeSlots < timeCompare[4]) {
            $(".fifth-time").attr("style", "background-color: green")
        } else {
            $(".fifth-time").attr("style", "background-color: grey")
        }

        if (timeSlots === timeCompare[5]) {
            $(".sixth-time").attr("style", "background-color: red")
        } else if (timeSlots < timeCompare[5]) {
            $(".sixth-time").attr("style", "background-color: green")
        } else {
            $(".sixth-time").attr("style", "background-color: grey")
        }

        if (timeSlots === timeCompare[6]) {
            $(".seventh-time").attr("style", "background-color: red")
        } else if (timeSlots < timeCompare[6]) {
            $(".seventh-time").attr("style", "background-color: green")
        } else {
            $(".seventh-time").attr("style", "background-color: grey")
        }

        if (timeSlots === timeCompare[7]) {
            $(".eighth-time").attr("style", "background-color: red")
        } else if (timeSlots < timeCompare[7]) {
            $(".eighth-time").attr("style", "background-color: green")
        } else {
            $(".eighth-time").attr("style", "background-color: grey")
        }

        if (timeSlots === timeCompare[8]) {
            $(".ninth-time").attr("style", "background-color: red")
        } else if (timeSlots < timeCompare[8]) {
            $(".ninth-time").attr("style", "background-color: green")
        } else {
            $(".ninth-time").attr("style", "background-color: grey")
        }
        //  create loop to loop through times
        // for (var i = 0; i < timeS.length; i++) {
        //     console.log("good morning, it is" + timeS[i])
        // }

        //  use switch statement for color block coding
        // switch (timeSlots) {
        //     case timeCompare[0]:
        //         $(".first-time").attr("style", "background-color: red");
        //     case timeCompare[0]:
        //         $(".first-time").attr("style", "background-color: green");
        //     default:
        //         $(".first-time").attr("style", "background-color: grey");
        // }

    }

})


