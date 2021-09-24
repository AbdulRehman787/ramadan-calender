// document.write("<h1>Ramadan Calender</h1>")
// var roza = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// var date = [o, "13 april 2022", "14 april 2022", "15 april 2022", "16 april 2022", "17 april 2022", "18 april 2022", "19 april 2022", "20 april 2022", "21 april 2022", "22 april 2022", "23 april 2022",
//     "24 april 2022", "25 april 2022", "26 april 2022", "27 april 2022", "28 april 2022", "29 april 2022", "30 april 2022", "1 may 2022", "2 may 2022", "3 may 2022", "4 may 2022", "5 may 2022", "6 may 2022", "7 may 2022", "8may 2022",
//     "9 may 2022", "10 may 2022", "11 may 2022", "12 may 2022", "13 may 2022"];

// var day = [0, "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday",
//     "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday",
//     "Thrusday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday",
//     "Wednesday", "Thrusday",
// ]
// var seharTime = [0, "4:52", "4:51", "4:50", "4:49", "4:48", "4:47", "4:46", "4:45", "4:44", "4:43", "4:41", "4:40", "4:39", "4:39", "4:38"
//     , "4:37", "4:36", "4:35", "4:34", "4:33", "4:32", "4:31", "4:30", "4:29", "4:28", "4:28", "4:27", "4:26", "4:25", "4:25"]

// var iftarTime = [0, "6:54", "6:54", "6:55", "6:55", "6:56", "6:56", "6:57", "6:57", "6:58", "6:58", "6:58", "6:59", "6:59", "7:00", "7:01"
//     , "7:01", "7:02", "7:02", "7:02", "7:03", "7:04", "7:04", "7:04", "7:05", "7:05", "7:06", "7:07", "7:07", "7:08", "7:08"]

// var roza = prompt("Enter the roza you want to check sehar iftar time");
// if (roza > 0 && roza <= 30 == 0) {
//     document.write("<h3>" + roza + " " + "date " + " " + "day" + "===" + "Sehar Time" + "===" + "Iftar Time" + "</h3>")
//     document.write("<h1>" + roza[userRoza] + " " + date[userRoza] + " " + day[userRoza] + " " + seharTime[userRoza] + " " + iftarTime[userRoza] + "</h1>");
//     if (day[userRoza] === "Friday") {
//         document.write("Jumma Mubarak")
//     }

// }

// else {
//     document.write("Please enter the correct input");
// }


var input = +prompt("Enter Roza Here:");

var roza = ["","1st ROZA", "2nd ROZA", "3rd ROZA", "4th ROZA", "5th ROZA", "6th ROZA", "7th ROZA", "8th ROZA", "9th ROZA",
    "10th ROZA", "11th ROZA", "12th ROZA", "13th ROZA", "14th ROZA", "15th ROZA", "16th ROZA", "17th ROZA", "18th ROZA",
    "19th ROZA", "20th ROZA", "21th ROZA", "22th ROZA", "23th ROZA", "24th ROZA", "25th ROZA", "26th ROZA", "27th ROZA",
    "28th ROZA", "29th ROZA", "30th ROZA"];

var sehrTime = ["","4:52 AM", "4:51 AM", "4:50 AM", "4:49 AM", "4:48 AM", "4:47 AM", "4:48 AM", "4:46 AM",
    "4:45 AM", "4:44 AM", "4:43 AM", "4:42 AM", "4:41 AM", "4:40 AM", "4:39 AM", "4:38 AM", "4:38 AM", "4:37 AM",
    "4:36 AM", "4:35 AM", "4:34 AM", "4:33 AM", "4:32 AM", "4:31 AM", "4:30 AM", "4:29 AM", "4:28 AM", "4:27 AM",
    "4:26 AM", "4:25 AM", "4:24 AM"];

var iftarTime = ["","6:55 PM", "6:55 PM", "6:56 PM", "6:56 PM", "6:57 PM", "6:57 PM", "6:57 PM", "6:58 PM",
    "6:58 PM", "6:59 PM", "6:59 PM", "7:00 PM", "7:00 PM", "7:01 PM", "7:01 PM", "7:02 PM", "7:02 PM", "7:03 PM",
    "7:03 PM", "7:04 PM", "7:04 PM", "7:05 PM", "7:05 PM", "7:06 PM", "7:06 PM", "7:07 PM", "7:07 PM", "7:08 PM",
    "7:08 PM", "7:09 PM"];

document.write("<h1>" + roza[input] + "<h1/>" + "<h3>" + "Sehr Time is " + sehrTime[input] + "<h3/>" + "<h3>" + "Iftar Time is " + iftarTime[input] + "<h3/>")