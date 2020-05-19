$(document).ready(function () {

    // use moment.js to add current time and append to page

   var currentTime = moment().format('LLLL');
   console.log(currentTime)
   
   $("#currentDay").append(currentTime);
})
