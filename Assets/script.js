$(document).ready(function () {

    // use moment.js to add current time to page
    var currentTime = moment().format('LLLL');
    console.log(currentTime)

    // var timeSlots = (moment().format('h:00 A'));
    // console.log(timeSlots)

    // use momentjs to create set time block of the day per hour
    var year = 2020;
    var month = 5;
    // var startTime = moment(year + '-' + month + '-' + ' 00:00').format('h:00 A')
    var time9 = moment(year + '-' + month + '-' + ' 09:00').format('h:00 A');
    var time10 = moment(year + '-' + month + '-' + ' 10:00').format('h:00 A');
    var time11 = moment(year + '-' + month + '-' + ' 11:00').format('h:00 A');
    var time12 = moment(year + '-' + month + '-' + ' 12:00').format('h:00 A');
    var time1 = moment(year + '-' + month + '-' + ' 01:00 PM').format('h:00 A');
    var time2 = moment(year + '-' + month + '-' + ' 02:00 PM').format('h:00 A');
    var time3 = moment(year + '-' + month + '-' + ' 03:00 PM').format('h:00 A');
    var time4 = moment(year + '-' + month + '-' + ' 04:00 PM').format('h:00 A');
    var time5 = moment(year + '-' + month + '-' + ' 05:00 PM').format('h:00 A');

    // append current time and current time blocks on page 
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


    // add input data to local storage when click on save on button
    $(".save").on("click", function (event) {
        event.preventDefault();

        var textArea = $(this).siblings(".text").val();
        var memoryTime = $(this).parent().attr("id");
        console.log(textArea)
        console.log(memoryTime)

        if (textArea === "") {
            alert("Please enter data")
        }

        localStorage.setItem(textArea, memoryTime);

    });


    function colorBlocks() {
        // use military to use to compare times for coloring 
        var currentTime = moment().hours();

        // use parseInt to parse my id into an integer for comparisson 
        $(".time").each(function () {
            var timeCompare = parseInt($(this).attr("id"));
            // use .this to link to parent class and use .add and .remove methods to add css classes
            if (currentTime > timeCompare) {
                $(this).addClass("past");
            } else if (currentTime === timeCompare) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    colorBlocks();


    $("#17 .text").val(localStorage.getItem("17"));
});
    //var indexI = 0;
    // get times from local storage for color blocks
    // for (var i = 0; i < timeCompare.length; i++) {
    //     console.log(timeCompare[i])
    //     console.log(timeSlots)
    //     if(timeCompare[i] === timeSlots ) {
    //         $(".first-time").attr("style", "background-color: red")
    //         } 
    //        else if (timeCompare[i] != timeSlots && timeSlots > timeCompare[i]) {
    //             $(".first-time").attr("style", "background-color: green")
    //         } else {
    //             $(".first-time").attr("style", "background-color: grey")

    //             // console.log("good morning, it is " + timeCompare[i])
    //     }
    // }


    // colorBlocks1()
    // function colorBlocks1() {
        // if (timeSlots === timeCompare[0]) {
        //     console.log(timeCompare[0])
        //     $(".first-time").attr("style", "background-color: red")
        // } else if (timeSlots < timeCompare[0]) {
        //     $(".first-time").attr("style", "background-color: green")
        // } else {
        //     $(".first-time").attr("style", "background-color: grey")
        // }

        // if (timeSlots === timeCompare[1]) {
        //     $(".second-time").attr("style", "background-color: red")
        // } else if (timeSlots < timeCompare[1]) {
        //     $(".second-time").attr("style", "background-color: green")
        // } else {
        //     $(".second-time").attr("style", "background-color: grey")
        // }
        // if (timeSlots === timeCompare[2]) {
        //     $(".third-time").attr("style", "background-color: red")
        // } else if (timeSlots < timeCompare[2]) {
        //     $(".third-time").attr("style", "background-color: green")
        // } else {
        //     $(".third-time").attr("style", "background-color: grey")
        // }

        // if (timeSlots === timeCompare[3]) {
        //     $(".fouth-time").attr("style", "background-color: red")
        // } else if (timeSlots < timeCompare[3]) {
        //     $(".fourth-time").attr("style", "background-color: green")
        // } else {
        //     $(".fourth-time").attr("style", "background-color: grey")
        // }

        // if (timeSlots === timeCompare[4]) {
        //     $(".fouth-time").attr("style", "background-color: red")
        // } else if (timeSlots < timeCompare[4]) {
        //     $(".fifth-time").attr("style", "background-color: green")
        // } else {
        //     $(".fifth-time").attr("style", "background-color: grey")
        // }

        // if (timeSlots === timeCompare[5]) {
        //     $(".sixth-time").attr("style", "background-color: red")
        // } else if (timeSlots < timeCompare[5]) {
        //     $(".sixth-time").attr("style", "background-color: green")
        // } else {
        //     $(".sixth-time").attr("style", "background-color: grey")
        // }

        // if (timeSlots === timeCompare[6]) {
        //     $(".seventh-time").attr("style", "background-color: red")
        // } else if (timeSlots < timeCompare[6]) {
        //     $(".seventh-time").attr("style", "background-color: green")
        // } else {
        //     $(".seventh-time").attr("style", "background-color: grey")
        // }

        // if (timeSlots === timeCompare[7]) {
        //     $(".eighth-time").attr("style", "background-color: red")
        // } else if (timeSlots < timeCompare[7]) {
        //     $(".eighth-time").attr("style", "background-color: green")
        // } else {
        //     $(".eighth-time").attr("style", "background-color: grey")
        // }

        // if (timeSlots === timeCompare[8]) {
        //     $(".ninth-time").attr("style", "background-color: red")
        // } else if (timeSlots < timeCompare[8]) {
        //     $(".ninth-time").attr("style", "background-color: green")
        // } else {
        //     $(".ninth-time").attr("style", "background-color: grey")
        // }


        // for (var i = 0; i < timeCompare.length; i++) {
        //     console.log("good morning, it is " + timeCompare[i])
            //  use switch statement for color block coding
            // switch (timeSlots) {
            //     case timeCompare[i]:
            //         $(".first-time").attr("style", "background-color: red");
            //     case timeCompare[i]:
            //         $(".first-time").attr("style", "background-color: green");
            //     default:
            //         $(".first-time").attr("style", "background-color: grey");
            //         console.log(timeSlots)
            // }



//load saved data from local storage


