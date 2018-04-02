function formatTime(seconds) {
    var h = Math.floor(seconds / 3600),
        m = Math.floor(seconds / 60) % 60,
        s = seconds % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    return h + ":" + m + ":" + s;
}
var count = 3600;
var counter = setInterval(timer, 1000);

function timer() {
    count--;
    if (count < 0) return clearInterval(counter);
    document.getElementById('timer').innerHTML = formatTime(count);
}