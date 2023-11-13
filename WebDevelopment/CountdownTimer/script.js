var timerInterval;

function startTimer() {
    var hours = parseInt(document.getElementById("hours").value);
    var minutes = parseInt(document.getElementById("minutes").value);
    var seconds = parseInt(document.getElementById("seconds").value);
    var totalSeconds = seconds + minutes * 60 + hours * 3600;

    clearInterval(timerInterval);
    updateTimer(totalSeconds);
    timerInterval = setInterval(function() {
        if (totalSeconds === 0) {
            clearInterval(timerInterval);
        } else {
            totalSeconds--;
            updateTimer(totalSeconds);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("hours").value = 0;
    document.getElementById("minutes").value = 0;
    document.getElementById("seconds").value = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
}

function updateTimer(totalSeconds) {
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var second = totalSeconds - (hour * 3600 + minute * 60);

    var hourStr = hour < 10 ? "0" + hour : hour;
    var minuteStr = minute < 10 ? "0" + minute : minute;
    var secondStr = second < 10 ? "0" + second : second;

    document.getElementById("timer").innerHTML = hourStr + ":" + minuteStr + ":" + secondStr;
}
