/* eslint-disable default-case */

/** Convert Month */
function convertUnixMonth(dt) {
  let d = new Date(dt * 1000);
  let m = d.getMonth();
  var month;
  switch (m) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }
  return month;
}

/** Convert to Date*/
function convertUnixDate(dt) {
  let d = new Date(dt * 1000);
  let date = d.getDate();
  return date;
}

/** Convert to Day */
function convertUnixDay(dt) {
  let d = new Date(dt * 1000);
  let da = d.getDay();
  let day;
  switch (da) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

  }
  return day;
}

/** Convert Unix value to Year */
function convertUnixYear(dt) {
  let d = new Date(dt * 1000);
  let year = d.getFullYear();
  return year;
}

/** Convert Unix Value to Time */
function convertUnixTime(dt) {
  var d = new Date(dt * 1000);
  var h = "0" + d.getHours();
  var m = "0" + d.getMinutes();
  var time = h.substr(-2) + ":" + m.substr(-2);
  return time;
}

export {
  convertUnixMonth, convertUnixDate, convertUnixDay, convertUnixYear, convertUnixTime
}