var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var currentHour = moment().format("HH")

var timeText= ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
for (i=9; i<=17; i++){
    var newRow = $("<div>").attr("class", "row time-block")

    var newHour = $("<div>").attr("class", "col-2").text(timeText[i-9])
    var newTA = $("<textarea>")
    if(currentHour > i) {
        newTA.attr("class", "past col-8")
    } else if (currentHour == i){
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

function saveToLocal(){
    var text = $(this).prev().val()
    var time = $(currentHour).val()
    localStorage.setItem(time, text)
}

$(document).on("click", "button", saveToLocal)