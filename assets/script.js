var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var currentHour = moment().format("HH")

var timeText = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
for (i = 9; i <= 17; i++) {
    var newRow = $("<div>").attr("class", "row time-block")

    var newHour = $("<div>").attr("class", "col-2").text(timeText[i - 9])
    var newTA = $("<textarea>").attr("class", "textArea").attr("id", "inputs")
    if (currentHour > i) {
        newTA.attr("class", "past col-8")
    } else if (currentHour == i) {
        newTA.attr("class", "present col-8")
    } else {
        newTA.attr("class", "future col-8")
    }

    var newBtn = $("<button>").attr("class", "saveBtn col-2").text("Save")

    newRow.append(newHour)
    newRow.append(newTA)
    newRow.append(newBtn)

    $(".container").append(newRow)
}

function saveToLocal() {


    var timeBlock = $(this).siblings(".col-2").text();
    var savedData = JSON.parse(localStorage.getItem("currentHour") || "[]");
    var storageObject = $(this).prev().val();

    savedData.push(storageObject);
    localStorage.setItem(timeBlock, storageObject)
}

$(document).on("click", "button", saveToLocal)

$("#9AM .textArea").text(localStorage.getItem("9AM"))
$("#10AM .textArea").text(localStorage.getItem("10AM"))
$("#11AM .textArea").text(localStorage.getItem("11AM"))
$("#12PM .textArea").text(localStorage.getItem("12PM"))
$("#1PM .textArea").text(localStorage.getItem("1PM"))
$("#2PM .textArea").text(localStorage.getItem("2PM"))
$("#3PM .textArea").text(localStorage.getItem("3PM"))
$("#4PM .textArea").text(localStorage.getItem("4PM"))
$("#5PM .textArea").text(localStorage.getItem("5PM"))

