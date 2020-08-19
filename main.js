/* 
Author: Ashraful Sarkar
Description: Analogue Clock
*/
setInterval(
    function updateClock() {
        var date = new Date();
        var sec = date.getSeconds() / 60;
        var min = (date.getMinutes() + sec) / 60;
        var hour = (date.getHours() + min) / 12;

        var secTime = document.getElementById('sec').style.transform = "rotate(" + (sec * 360) + "deg)";
        var minTime = document.getElementById('min').style.transform = "rotate(" + (min * 360) + "deg)";
        var hourTime = document.getElementById('hour').style.transform = "rotate(" + (hour * 360) + "deg)";
    }, 1000);