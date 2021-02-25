function clock() {
    var meridiam = 'AM';
    var time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();

    document.querySelectorAll('.clock')[0].innerHTML =
        hour(hours) + ':' + minsec(minutes) + ':' + minsec(seconds) + ' ' + meridiam;


    function hour(hr) {
        if (hr > 12) {
            hr = hr - 12
            meridiam = "PM"
            if (hr < 10) {
                return '0' + hr;
            }
            return hr;
        } else if (hr == 12) {
            meridiam = "PM"
        } else {
            meridiam = "AM";
        }
        return hr;
    }
}

function minsec(ms) {
    if (ms < 10) {
        ms = '0' + ms;
    }
    return ms;
}
setInterval(clock, 1000)