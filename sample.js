$(document).ready(function () {

    // use moment.js to add current time to page
    var currentTime = moment().format('LLLL');
    console.log(currentTime)

    // function calls 
    colorBlocks();


    // use momentjs to create set time block for each hour
    var year = 2020;
    var month = 5;
    var time9 = moment(year + '-' + month + '-' + ' 09:00').format('h:00 A');
    var time10 = moment(year + '-' + month + '-' + ' 10:00').format('h:00 A');
    var time11 = moment(year + '-' + month + '-' + ' 11:00').format('h:00 A');
    var time12 = moment(year + '-' + month + '-' + ' 12:00').format('h:00 A');
    var time1 = moment(year + '-' + month + '-' + ' 01:00 PM').format('h:00 A');
    var time2 = moment(year + '-' + month + '-' + ' 02:00 PM').format('h:00 A');
    var time3 = moment(year + '-' + month + '-' + ' 03:00 PM').format('h:00 A');
    var time4 = moment(year + '-' + month + '-' + ' 04:00 PM').format('h:00 A');
    var time5 = moment(year + '-' + month + '-' + ' 05:00 PM').format('h:00 A');

    // append current time and time blocks on page 
    $("#currentDay").append(currentTime);
    $(".time9").append("<p>" + time9 + "</p>");
    $(".time10").append("<p>" + time10 + "</p>");
    $(".time11").append("<p>" + time11 + "</p>");
    $(".time12").append("<p>" + time12 + "</p>");
    $(".time1").append("<p>" + time1 + "</p>");
    $(".time2").append("<p>" + time2 + "</p>");
    $(".time3").append("<p>" + time3 + "</p>");
    $(".time4").append("<p>" + time4 + "</p>");
    $(".time5").append("<p>" + time5 + "</p>");

    //get items from local storage 
    // $("#9 .text").val(localStorage.getItem("9"));


    // add input data to local storage when click on save on button
    $(".save").on("click", function (event) {
        event.preventDefault();

        // use parent and find method to select descendents for onclick selection
        var textArea = $(this).parent().parent().find("textarea").val();
        var time = $(this).parent().parent().attr("id");

        // set time and textarea to local storage
        localStorage.setItem("time", time);
        localStorage.setItem("text", textArea);

        // create alert message if textarea is empty before saving
        if (textArea === "") {
            alert("Please enter text before saving");
        }

    });

    rendTask();
    function rendTask() {
        // get items from localStorage
        var time = localStorage.getItem("time");
        var text = localStorage.getItem("text")
        var textArea = $(".text")
        // append items to page from localStorage
        if (textArea.val()) {
            $(".text").append(text);
        } else {
            return;
        }

        console.log(time)
        console.log(text)

    }

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

    var text = document.getElementById("box10");
    var btnInsert = document.getElementById("save10am");
    btnInsert.onclick = function() {
        var info = text.value;
        localStorage.setItem("text", info.value);
        var again = localStorage.getItem("text"); 
        console.log(again)
    
});