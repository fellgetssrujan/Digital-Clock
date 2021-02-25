function date() {
    var date = new Date(),
        day = date.getDay(),
        dt = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

    document.querySelectorAll('.date')[0].innerHTML =
        setday(day) + "," + dt + "," + setmonth(month) + "," + year;


    function setday(day) {
        if (day == 0) {
            day = "Sunday";
        } else if (day == 1) {
            day = "Monday";
        } else if (day == 2) {
            day = "Tuesday";
        } else if (day == 3) {
            day = "Wednesday";
        } else if (day == 4) {
            day = "Thursday";
        } else if (day == 5) {
            day = "Friday";
        } else if (day == 6) {
            day = "Saturday";
        }
        return day;
    }

    function setmonth(mnth) {
        if (mnth = 1) {
            month = "January";
        } else if (mnth = 2) {
            month = "February";
        } else if (mnth = 3) {
            month = "March";
        } else if (mnth = 4) {
            month = "April";
        } else if (mnth = 5) {
            month = "May";
        } else if (mnth = 6) {
            month = "June";
        } else if (mnth = 7) {
            month = "July";
        } else if (mnth = 8) {
            month = "August";
        } else if (mnth = 9) {
            month = "September";
        } else if (mnth = 10) {
            month = "October";
        } else if (mnth = 11) {
            month = "November";
        } else if (mnth = 12) {
            month = "December";
        }


        return month;

    }
}
setInterval(date, 1000);