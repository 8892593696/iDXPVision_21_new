function showCustomScheduledCalendar() {


    var calendar = document.getElementById("calendar-table");
    var gridTable = document.getElementById("table-body");
    var currentDate = new Date();
    var presentDate = new Date();
    var selectedDate = currentDate;
    var selectedDayBlock = null;
    var globalEventObj = {};
    var sidebar = document.getElementById("sidebar");
    function createCalendar(date, side) {
        var currentDate = date;
        var startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        var monthTitle = document.getElementById("month-name");
        var monthName = currentDate.toLocaleString("en-US", {
            month: "long"
        });
        var yearNum = currentDate.toLocaleString("en-US", {
            year: "numeric"
        });
        monthTitle.innerHTML = `${monthName} ${yearNum}`;
        if (side == "left") {
            gridTable.className = "animated fadeOutRight";
        } else {
            gridTable.className = "animated fadeOutLeft";
        }

        setTimeout(() => {
            gridTable.innerHTML = "";
            var newTr = document.createElement("div");
            newTr.className = "row";
            var currentTr = gridTable.appendChild(newTr);
            for (let i = 1; i < (startDate.getDay() || 7); i++) {
                let emptyDivCol = document.createElement("div");
                emptyDivCol.className = "col-1 empty-day";
                currentTr.appendChild(emptyDivCol);
            }

            var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
            lastDay = lastDay.getDate();
            for (let i = 1; i <= lastDay; i++) {
                if (currentTr.children.length >= 7) {

                    currentTr = gridTable.appendChild(addNewRow());
                }
                let currentDay = document.createElement("div");
                currentDay.className = "col-1";
                if (i == presentDate.getDate() && presentDate.getMonth() == currentDate.getMonth() && presentDate.getFullYear() == currentDate.getFullYear()) {
                    document.getElementById("eventDayName").innerHTML = "Today ● " + selectedDate.toLocaleString("en-US", {
                        weekday: "short", // Use abbreviated weekday name (e.g., "Mon", "Tue", etc.)
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    });
                    selectedDayBlock = currentDay;
                    setTimeout(() => {
                        currentDay.classList.add("blue");
                        currentDay.classList.add("lighten-3");
                    }, 500);
                }
                var selectMonth = (date.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
                var selectYear = date.getFullYear();
                if (i > 10) {
                    showEventsMark(selectYear + "-" + selectMonth + "-" + i, currentDay, i)


                } else {
                    showEventsMark(selectYear + "-" + selectMonth + "-" + "0" + i, currentDay, i);
                }


                //show marks
                if (globalEventObj[new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString()]) {
                    let eventMark = document.createElement("div");
                    eventMark.className = "day-mark";
                    currentDay.appendChild(eventMark);
                }

                currentTr.appendChild(currentDay);
            }

            for (let i = currentTr.getElementsByTagName("div").length; i < 7; i++) {
                let emptyDivCol = document.createElement("div");
                emptyDivCol.className = "col-1 empty-day";
                currentTr.appendChild(emptyDivCol);
            }

            if (side == "left") {
                gridTable.className = "animated fadeInLeft";
            } else {
                gridTable.className = "animated fadeInRight";
            }

            function addNewRow() {
                let node = document.createElement("div");
                node.className = "row";
                return node;
            }

        }, !side ? 0 : 270);
    }

    createCalendar(currentDate);
    var todayDayName = document.getElementById("todayDayName");
// todayDayName.innerHTML = "Today is " + currentDate.toLocaleString("en-US", {
//    weekday: "long",
//    day: "numeric",
//    month: "short"
// });

    var prevButton = document.getElementById("prevCalender");
    var nextButton = document.getElementById("nextCalender");
    prevButton.onclick = function changeMonthPrev() {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        createCalendar(currentDate, "left");
    }
    nextButton.onclick = function changeMonthNext() {
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        createCalendar(currentDate, "right");
    }




    var selectFullDate = "";
    gridTable.onclick = function (e) {

        if (!e.target.classList.contains("col-1") || e.target.classList.contains("empty-day")) {
            return;
        }

//        if (selectedDayBlock) {
//            if (selectedDayBlock.classList.contains("blue") && selectedDayBlock.classList.contains("lighten-3")) {
//                selectedDayBlock.classList.remove("grayEventMarkClass");
////                selectedDayBlock.classList.remove("lighten-3");
//            }
//        }
        selectedDayBlock.classList.remove("grayEventMarkClass");
        selectedDayBlock = e.target;
        selectedDayBlock.classList.add("grayEventMarkClass");
//        selectedDayBlock.classList.add("lighten-3");

        selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), parseInt(e.target.innerHTML));
        var selectDate = selectedDate.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        var selectMonth = (selectedDate.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        var selectYear = selectedDate.getFullYear();
        var selectFullDate = selectYear + '-' + selectMonth + '-' + selectDate;
        showEvents(selectFullDate);
        showDayWiseRecordDetails(selectFullDate);
        document.getElementById("eventDayName").innerHTML = selectedDate.toLocaleString("en-US", {
            weekday: "short", // Use abbreviated weekday name (e.g., "Mon", "Tue", etc.)
            month: "long",
            day: "numeric",
            year: "numeric"
        });
    }
    var selectDate = selectedDate.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    var selectMonth = (selectedDate.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    var selectYear = selectedDate.getFullYear();
    var selectFullDate = selectYear + '-' + selectMonth + '-' + selectDate;
    showEvents(selectFullDate);
    // Retrieve all elements with class name "calendar-content"
    const calendarTable = document.getElementsByClassName('calendar-content');
// Iterate over the collection of elements and add event listeners
//    for (let i = 0; i < calendarTable.length; i++) {
// Add mouseover event listener to show elements with class "togglePrevNextClass"
//        calendarTable[i].addEventListener('mouseover', () => {
//            $(".togglePrevNextClass").show();
//        });
//        // Add mouseleave event listener to hide elements with class "togglePrevNextClass"
//        calendarTable[i].addEventListener('mouseleave', () => {
//            $(".togglePrevNextClass").hide();
//        });
//    }


}



function showEvents(eventDate, hoverFlag) {
    showLoader();
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: 'getDateWiseCalenderEvents',
        data: {
            eventDate: eventDate
        },
        success: function (response) {
            stopLoader();
            let sidebarEventsContainer = $("#sidebarEvents");
            let eventHoverContainer = $("<div>").addClass("sidebar-events");
            if ($.isEmptyObject(response)) {
                sidebarEventsContainer.html("<div class='empty-message'>No events scheduled</div><div class='empty-message' onclick='addNewDateWiseEvent()'>Create new event</div><div class='appendDayWiseDetails'></div>");
                return;
            } else if (hoverFlag != "Y") {
                sidebarEventsContainer.empty();
            }
            let eventsCount = 0;
            for (let key in response) {
                let eventData = response[key].split(";");
                let eventName = eventData[0];
                let eventTime = eventData[1];
                let eventDuration = calculateTimeDifferenceOnDate(eventDate, eventTime, eventData[2]);
                let eventContainer = $("<div>").addClass("eventCard");
                let eventHeaderDescription = $("<div>").addClass("eventHeaderDescription");
                let eventHeader = $("<div>").addClass("eventCard-header").text(key);
                let eventDescription = $("<div>").addClass("eventCard-description").text(eventName);
                let eventTimeDuration = $("<div>").addClass("eventTimeDuration");
                let eventTimeElem = $("<div>").addClass("eventCard-time").text(eventTime);
                let eventDurationElem = $("<div>").addClass("eventCard-duration").text(eventDuration);
                let eventDelete = $("<img>").addClass("eventCard-delete").attr("src", "images/delete_icon.svg");
                let eventEdit = $("<img>").addClass("eventCard-delete").attr("src", "images/master_detail_editable_icon.svg");
                eventDelete.on("click", function () {
                    deleteCalendarEvent(eventDate, key);
                });
                eventEdit.on("click", function () {
                    addNewDateWiseEvent(eventDate, key);
                });
                eventTimeDuration.append(eventTimeElem, eventDurationElem);
                eventHeaderDescription.append(eventHeader, eventDescription);
                eventContainer.append(eventHeaderDescription, eventTimeDuration, eventDelete, eventEdit);
                eventsCount++;
                if (hoverFlag == "Y") {
                    eventHoverContainer.append(eventContainer);
                } else {
                    sidebarEventsContainer.append(eventContainer);
                }
            }

            // Show total events count
            let emptyFormMessage = $("#emptyFormTitle");
            emptyFormMessage.text(`${eventsCount} events now`);
            if (hoverFlag === "Y") {

                $("#sidebarEventsHover" + eventDate).remove();
                let sidebarEventsHover = $("<div>").attr("id", "sidebarEventsHover" + eventDate).appendTo(".eventMarkList" + eventDate);
                sidebarEventsHover.append(eventHoverContainer);
                sidebarEventsHover.jqxPopover({
                    offset: {left: 0, top: 0},
                    position: 'left',
                    width: 380,
                    height: 'auto',
                    autoClose: false,
                    title: "Events",
                    showCloseButton: true,
                    selector: $(".eventMarkList" + eventDate)
                });
                sidebarEventsHover.jqxPopover('open');
            }

            sidebarEventsContainer.toggleClass('moreEvents', sidebarEventsContainer.children().length > 3);
        }
    });
}

function showEventsMark(eventDate, currentDay, day) {
    var currentDate = new Date();
    var selectDate = currentDate.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    var selectMonth = (currentDate.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    var selectYear = currentDate.getFullYear();
    var currentDate = selectYear + '-' + selectMonth + '-' + selectDate;
    if (eventDate != currentDate) {
        showLoader();
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'json',
            url: 'getDateWiseCalenderEvents',
            traditional: true,
            cache: false,
            async: true,
            data: {
                eventDate: eventDate,
                markFlag: "Y"
            },
            success: function (response) {
                stopLoader();
                if (currentDay && response != null && Object.keys(response).length > 0) {
                    currentDay.innerHTML = `${day}<sup>
                    <span class='eventMarkList${eventDate}' 
                    style='font-size:12px; color: #0b4a99; cursor: pointer;' 
                    onmouseover="showEvents('${eventDate}', 'Y')" 
                    onmouseleave="hideEvents('${eventDate}')">
                    &#9679;
                    </span>
                    </sup>`;
                    return;
                } else {
                    currentDay.innerHTML = day;
                    return;
                }

            },
        });
    } else {
        currentDay.innerHTML = day;
        return;
    }
}
function addNewDateWiseEvent(eventDate, eventTitle) {
    $("#backgroundShadowDiv").removeClass("backGroundOpacity");
    $.ajax({
        url: "getEventForm",
        data: {
            eventDate: eventDate,
            eventTitle: eventTitle
        },
        type: 'POST',
        dataType: 'json',
        async: false,
        traditional: true,
        cache: false,
        success: function (data, textStatus, jqXHR) {
            if (data != null && data != undefined && data != '' && data != 'undefined') {
                closeAllDialogsBoxes();
                $("#dialog1").html(data['resultStr']);
                $("#dialog1").dialog({
                    title: (labelObject['Event'] != null ? labelObject['New Event'] : 'Event'),
                    modal: true,
                    width: 500,
                    height: 380,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Save'] != null ? labelObject['Ok'] : 'Save'),
                            click: function () {
                                addNewEvent(eventTitle);
                            }
                        },
                        {
                            text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }

                    ],
                    open: function () {
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(".ui-dialog .ui-dialog-content").css("overflow", "hidden");
//                        $(".ui-dialog .ui-dialog-content").css("height", "400px");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                        $(".ui-dialog").addClass("newCalendarEventClass");
                        const today = new Date();
                        const currentYear = today.getFullYear();
                        const currentMonth = today.getMonth();
                        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).toISOString().split('T')[0];
                        $("#eventFromDateInput").attr("min", new Date().toISOString().split('T')[0]);
                        $("#eventToDateInput").attr("min", new Date().toISOString().split('T')[0]);
                        $("#eventFromDateInput").on('change', function () {
                            $("#eventToDateInput").attr("min", $("#eventFromDateInput").val());
                        })
                        $("#eventToDateInput").attr("max", lastDayOfMonth);
                        $("#eventFromDateInput").attr("max", lastDayOfMonth);
                        //var today = new Date().toISOString().split('T')[0];
//                $("#eventFromDateInput").attr("min", today);
//                $("#eventToDateInput").attr("min", today);


                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {

        }

    });
}
function addNewEvent(eventTitle) {
    showLoader();
    var dataObj = {};
    dataObj['EVENT_TITLE'] = $("#eventTitleInputD").val();
    dataObj['EVENT_FROM_DATE'] = $("#eventFromDateInput").val();
    dataObj['EVENT_TO_DATE'] = $("#eventToDateInput").val();
    dataObj['EVENT_START_TIME'] = getTimeValue("eventStartTime");
    dataObj['EVENT_END_TIME'] = getTimeValue("eventEndTime");
    dataObj['EVENT_DESC'] = $("#eventDescInputD").val();
    var validate = eventsFormValidate(dataObj);
    if (validate) {
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'json',
            url: 'insertCalenderEvents',
            traditional: true,
            cache: false,
            data: {
                dataStr: JSON.stringify(dataObj),
                eventTitle: eventTitle
            },
            success: function (response) {
                stopLoader();
                closeAllDialogsBoxes();
                var modalObj = {
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Calender Message',
                    body: response['result']
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            openSettingPannel('calendardiv');
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValueNew", modalObj);
                $(".modal-dialog").addClass("modal-xs");
            }
        });
    } else {
        stopLoader();
    }
}
function eventsFormValidate(data) {
    var timePattern = /^NaN:undefined (AM|PM)$/;
    if (data['EVENT_TITLE'] == '') {
        $("#ErrorMsg").css("color", "red");
        $("#ErrorMsg").text("Title should not be empty")
        return false;
    } else if (timePattern.test(data['EVENT_START_TIME']) || timePattern.test(data['EVENT_END_TIME'])) {
        $("#ErrorMsg").css("color", "red");
        $("#ErrorMsg").text("Please select the time");
        return false;
    } else if (data['EVENT_FROM_DATE'] == "" || data['EVENT_TO_DATE'] == "") {
        $("#ErrorMsg").css("color", "red");
        $("#ErrorMsg").text("Please select the date");
    } else {
        return true;
    }

}
function getTimeValue(id) {
    const timeInput = document.getElementById(id);
    const timeValue = timeInput.value;
    const [hours, minutes] = timeValue.split(":");
    const parsedHours = parseInt(hours, 10);
    const period = parsedHours >= 12 ? "PM" : "AM";
    const displayHours = parsedHours > 12 ? parsedHours - 12 : parsedHours;
    const formattedTime = displayHours.toString().padStart(2, "0") + ":" + minutes + " " + period;
    return formattedTime;
}
function calculateTimeDifferenceOnDate(dateStr, time1, time2) {
// Helper function to convert 12-hour time with AM/PM to 24-hour time
    function convertTo24HourFormat(timeStr) {
        const [time, period] = timeStr.split(' ');
        let [hours, minutes] = time.split(':');
        if (period === 'AM') {
            hours = hours === '12' ? '00' : hours; // Convert 12 AM to 00
        } else if (period === 'PM') {
            hours = hours === '12' ? '12' : String(parseInt(hours, 10) + 12); // Convert PM hours to 24-hour format
        }

        return `${hours}:${minutes}`;
    }

// Construct the full date-time strings using the specified date and converted time formats
    const dateTime1 = `${dateStr}T${convertTo24HourFormat(time1)}`;
    const dateTime2 = `${dateStr}T${convertTo24HourFormat(time2)}`;
    // Parse the date-time strings into Date objects
    const date1 = new Date(dateTime1);
    const date2 = new Date(dateTime2);
    // Check if the Date objects are valid
    if (isNaN(date1) || isNaN(date2)) {
        throw new Error('Invalid date-time strings. Check the input format.');
    }

// Calculate the difference in milliseconds
    const diffMs = date2 - date1;
    const diffSeconds = Math.abs(diffMs) / 1000;
    // Determine the appropriate time unit and format the output
    if (diffSeconds < 60) {
        return `${Math.floor(diffSeconds)} sec`;
    } else if (diffSeconds < 3600) {
        return `${Math.floor(diffSeconds / 60)} min`;
    } else if (diffSeconds < 86400) {
        return `${Math.floor(diffSeconds / 3600)} hr`;
    } else {
        return `${Math.floor(diffSeconds / 86400)} day`;
    }
}

function setCreateEventsData() {
    try {
        $(".homeTabsContentlistwrapper").find(".active").removeClass("active");
        $(event.target).closest("li").addClass("active");
    } catch (e) {

    }
    let checkbox = $("#cb-switch");//09-06-2025
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        $('.dxpSplitterTabsContent').hide();
        $('#dxpHomeContent').show();
        $('#dxp2TabsWithGridContent').show(); 
     $('#dxp2TabsWithGridContent').html("<div id=\"calenderEventsDataLoginPage\" class=\"calenderEventsDataLoginPage\"></div>");
     
    } else {//09-06-2025

        let div = "<div id=\"calenderEventsDataLoginPage\" class=\"calenderEventsDataLoginPage\"></div>";
        $("#modalDailogDiv").html(div);
        $("#modalDailogDiv").dialog({
            title: 'Calender Events',
            modal: true,
            width: 600,
            height: "auto",
            maxHeight: 700,
            fluid: true,
            dialogClass: "dialogFactsAndStatsDiv event-calender-dialog",
            open: function () {
                $(".event-calender-dialog").css("z-index", "99999");
                $('.event-calender-dialog').css('top', '100px');
            },
        });
    }//09-06-2025
    let data = getEventData();
    calCreateFullCal(data);
}

function calCreateFullCal(data, date) {
    let myCalendar = document.getElementById('calenderEventsDataLoginPage');
    let now;
    if (date == undefined) {
        now = new Date();
    } else {
        now = date;
    }
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let today = now.getFullYear() + "-" + (month) + "-" + (day);
    let obj = {
        initialView: 'dayGridMonth',
        initialDate: today,
        headerToolbar: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        customButtons: {
            prev: {
                click: function () {
                    calendar.prev();
                    let currDate = calendar.currentData.currentDate;
                    var formattedDate = currDate.getFullYear() + '-' +
                            ('0' + (currDate.getMonth() + 1)).slice(-2) + '-' +
                            ('0' + currDate.getDate()).slice(-2);
                    console.log(formattedDate);
                    eventCalenderLeftAndRightBtn(formattedDate, currDate);
                }
            },
            next: {
                click: function () {
                    calendar.next();
                    let currDate = calendar.currentData.currentDate;
                    var formattedDate = currDate.getFullYear() + '-' +
                            ('0' + (currDate.getMonth() + 1)).slice(-2) + '-' +
                            ('0' + currDate.getDate()).slice(-2);
                    console.log(formattedDate);
                    eventCalenderLeftAndRightBtn(formattedDate, currDate);
                }
            }
        },
        dayMaxEvents: true,
        themeSystem: 'bootstrap',
        dateClick: function (info) {
            alert('Clicked on: ' + info.dateStr);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('Current view: ' + info.view.type);
            obj.events = [];
            createEventData(info.dateStr, info.date);
            info.dayEl.style.backgroundColor = '#b2f6ad';
        },
        eventClick: function (info) {
            alert('Event: ' + info.event.title);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('View: ' + info.view.type);
            info.el.style.borderColor = 'red';
        }
    };
    obj.events = data;
    let calendar = new FullCalendar.Calendar(myCalendar, obj);
    calendar.render();
}

function createEventData(date, currDate) {
    var today = new Date();
    var currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var customDate = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate());
    var div = '';
    let witdh = 0;
    let maxHeight = 1000;
    if (currentDate <= customDate) {
        var div = "<div class=\"create-event-Cls-Data\" id=\"createEventClsData\">"
                + "<div class=\"form-group\">"
                + "<label for=\"usr\">Date</label>"
                + "<input type=\"date\" class=\"form-control\" id=\"event-date\">"
                + "</div>"
                + "<div class=\"form-group\">"
                + "<label for=\"usr\">Title:</label>"
                + "<input type=\"text\" class=\"form-control\" id=\"event-title\">"
                + "</div>"
                + "<div class=\"form-group\">"
                + "<label for=\"usr\">Description:</label>"
                + "<input type=\"text\" class=\"form-control\" id=\"event-description\">"
                + "</div>"
                + "<div>"
                + "<button type=\"button\" id=\"event-btn-save\" class=\"btn btn-primary\">Save</button>"
                + "</div>"
                + "</div>";
        witdh = 400;
        maxHeight = 500;
    } else {
        div = "<div class=\"create-event-Cls-Data\" id=\"createEventClsData\">"
                + "<span>Not Allow to to this date</span>"
                + "</div>";
        witdh = 200;
        maxHeight = 300;
    }
    $("#modalDailogDiv1").html(div);
    $("#modalDailogDiv1").dialog({
        title: 'Calender Events',
        modal: true,
        width: witdh,
        height: "auto",
        maxHeight: maxHeight,
        fluid: true,
        dialogClass: "dialogFactsAndStatsDiv event-create-calender-dialog"
    });
    document.getElementById("event-date").value = date;
    $('#event-btn-save').click(function () {
        let obj = {};
        let date = $('#event-date').val();
        let title = $('#event-title').val();
        let des = $('#event-description').val();
        obj.DATE = date;
        obj.TITLE = title;
        obj.DESC = des;
        setEventData(obj, currDate);
    });
    document.getElementById("event-date").value = date;
}

function setEventData(obj, currDate) {
    showLoader();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'setCalEventData',
        data: obj,
        traditional: true,
        cache: false,
        async: true,
        success: function (response, textStatus, jqXHR) {
            stopLoader();
            if (response.status) {
                $("#modalDailogDiv1").dialog("close");
                $("#modalDailogDiv1").dialog("destroy");
                $("#modalDailogDiv1").html('');
                calCreateFullCal(response.data, currDate);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
        }
    });
}

function getEventData() {
    showLoader();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'getEventData',
        data: {},
        traditional: true,
        cache: false,
        async: true,
        success: function (response, textStatus, jqXHR) {
            stopLoader();
            calCreateFullCal(response.data)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
        }
    });
}

function eventCalenderLeftAndRightBtn(date, currDate) {
    showLoader();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'getEventDataPrevAndNext',
        data: {
            date: date
        },
        traditional: true,
        cache: false,
        async: true,
        success: function (response, textStatus, jqXHR) {
            stopLoader();
            calCreateFullCal(response.data, currDate);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
        }
    });
}
function deleteCalendarEvent(eventDate, eventTitle) {
    $("#backgroundShadowDiv").removeClass("backGroundOpacity");
    var modalObj = {
        title: labelObject['Message'] != null ? labelObject['Message'] : 'Calender Message',
        body: "Are you sure you want to delete this event?"
    };
    var buttonArray = [
        {
            text: 'Yes',
            click: function () {
                showLoader();
                $.ajax({
                    type: 'POST',
                    dataType: 'JSON',
                    url: 'deleteCalenderEvent',
                    data: {
                        eventDate: eventDate,
                        eventTitle: eventTitle
                    },
                    traditional: true,
                    cache: false,
                    async: true,
                    success: function (response, textStatus, jqXHR) {
                        stopLoader();
                        if (response != null && response != undefined && response != '' && response != 'undefined') {
                            var modalObj = {
                                title: labelObject['Message'] != null ? labelObject['Message'] : 'Calender Message',
                                body: response['Message']
                            };
                            var buttonArray = [
                                {
                                    text: 'Ok',
                                    click: function () {
                                        openSettingPannel('calendardiv');
                                    },
                                    isCloseButton: true
                                }
                            ];
                            modalObj['buttons'] = buttonArray;
                            createModal("modalInfoDailogDiv", modalObj);
                            $(".modal-dialog").addClass("modal-xs");
                        }

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        stopLoader();
                    }

                });
            },
            isCloseButton: true
        },
        {
            text: 'No',
            click: function () {

            },
            isCloseButton: true
        },
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValueNew", modalObj);
    $(".modal-dialog").addClass("modal-xs");
}
let toggleState = true;
function expandCalendarByMonthAndWeek() {
    var selectedDate = $("#eventDayName").text();
    var currentDate = new Date(selectedDate);
    var currentWeekNumber = currentDate.getDate();
    var $calendarTable = $("#calendar-table");
    var $tableBody = $calendarTable.find("#table-body");
    var $currentWeekRow = $tableBody.find(".row");
    if (toggleState) {
        toggleState = false;
        $currentWeekRow.each(function () {
            var $row = $(this);
            var rowWiseDates = [];
            $row.find(".col-1").each(function () {
                var rowColumnValue = $(this).text().trim(); // Trim any extra whitespace
                rowWiseDates.push(rowColumnValue);
            });
            if (rowWiseDates.includes(`${currentWeekNumber}`) ||
                    rowWiseDates.some(date => date.includes(currentWeekNumber.toString() + "●"))) {

                $row.show();
            } else {
                $row.hide();
            }
        });
    } else {
        $currentWeekRow.each(function () {
            var $row = $(this);
            $row.show();
            toggleState = true;
        });
    }


}
function hideEvents(eventDate) {
    try {
        $("#sidebarEventsHover" + eventDate).remove();

        $("#sidebarEventsHover" + eventDate).jqxPopover('destroy');
    } catch (error) {
        console.error('Error occurred in hideEvents:', error);

    }
}
function showDayWiseRecordDetails(eventDate) {
    showLoader();
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: 'getDateWiseRecordDetails',
        data: {
            eventDate: eventDate
        },
        success: function (response) {
            stopLoader();
            if (response != null && response != undefined && response != "") {
                $(".appendDayWiseDetails").html(response['htmlContent']);
            }
        }

    });
}
