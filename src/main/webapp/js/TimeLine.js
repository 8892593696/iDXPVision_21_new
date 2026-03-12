/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getTimeLineInfo(basicData, gridId) {

    if (!(basicData != null && basicData != undefined && basicData != '')) {

        var basicData = {};
        var basicDataAudit = {};
        $("#mat_creation_form_table :input").each(function () {
            var textid = $(this).attr("id");
            var type = $(this).attr("type");
            var textval = $(this).val();
            if (type != 'hidden') {
                if (textval != null && textval != '') {
                    textval = textval.toUpperCase();
                }
            }
            if (textid != null && textid != 'CREATE_DATE') {

                basicData[textid] = textval;
            }
            if (textid != null) {

                basicDataAudit[textid] = textval;
            }

            if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
                var columnNames = $("#" + textid).val();
                var columnsArray = columnNames.split(",");

                var hiddenIds = textid.split("HIDDEN_");
                var hiddenVal = $("#" + hiddenIds[1]).val();
                for (var i = 0; i < columnsArray.length; i++) {
                    if (hiddenVal != null) {
                        hiddenVal = hiddenVal.toUpperCase();
                    }
                    basicData[columnsArray[i]] = hiddenVal;
                    basicDataAudit[columnsArray[i]] = hiddenVal;
                }
            }
        });

    }
    //globalLinkedColumns= $("#linkedColumns").val();
    if (!(gridId != null && gridId != undefined && gridId != '')) {
        gridId = basicData['gridId'];
    }
    try {
        $("#itemString").remove()();
        $("#gridId").remove();
    } catch (e) {
    }
    $("#itemInfoSubmit").attr("target", "_blank");
    $("#itemInfoSubmit").attr("action", "timeLine");
    $("#itemInfoSubmit").attr("method", "post");
    $("#itemInfoSubmit").append("<input type='hidden' id ='itemString'  name='itemString' value='" + JSON.stringify(basicData) + "'/>");
    $("#itemInfoSubmit").append("<input type='hidden' id ='gridId' name='gridId' value='" + gridId + "'/>");
    $("#itemInfoSubmit").submit();

}
function getListOfMonths(id, year, gridId) {
    showLoader();
    try {
        $("[id^=visionTimeLineMonthsList]").empty();
    } catch (e) {
    }
    var basicDataStr = $("#basicData").val();
    if (basicDataStr != null && basicDataStr != '' && basicDataStr != 'undefined') {
        $.ajax({
            type: 'post',
            url: 'listOfMonths',
            async: true,
            data: {
                year: year,
                itemString: basicDataStr,
                gridId: gridId
            },
            success: function (response) {
                stopLoader();
                console.log("response::" + response);
                if (response != null && response != '' && response != 'undefined') {
                    $("#visionTimeLineMonthsList" + year).html(response.monthsList);
                }
            },
            error: function (e)
            {
                sessionTimeout(e);
            }

        });
    }
}
function getListOfDays(year, month, gridId) {
    showLoader();
    try {
        $("[id^=visionTimeLineDaysOf]").empty();
    } catch (e) {
    }
    var basicDataStr = $("#basicData").val();
    if (basicDataStr != null && basicDataStr != '' && basicDataStr != 'undefined') {
        $.ajax({
            type: 'post',
            url: 'listOfDays',
            async: true,
            data: {
                year: year,
                month: month,
                gridId: gridId,
                itemString: basicDataStr
            },
            success: function (response) {
                stopLoader();
                console.log("response::" + response);
                if (response != null && response != '' && response != 'undefined') {
                    $("#visionTimeLineDaysOf" + month).html(response.daysListDiv);
                }
            },
            error: function (e)
            {
                sessionTimeout(e);
            }
        });
    }
}
function getDayWiseData(year, month, day, clusterId, date, masterWhereColumns) {
    var basicDataStr = $("#basicData").val();
    if (basicDataStr != null && basicDataStr != '' && basicDataStr != 'undefined') {
        $.ajax({
            type: 'post',
            url: 'getTimeLineClusterForm',
            async: true,
            data: {
                year: year,
                month: month,
                day: day,
                basicData: basicDataStr,
                clusterId: clusterId
            },
            success: function (response) {
                console.log("response::" + response);
                if (response != null && response != '' && response != 'undefined') {
                    var paramArray = [];
                    var basicData = JSON.parse(basicDataStr);
                    var columnsArray = masterWhereColumns.split(",");
                    for (var i = 0; i < columnsArray.length; i++) {
                        var paramObj = {};
                        var columnName = columnsArray[i];
                            paramObj.column = columnName;
                            paramObj.operator = 'EQUALS';
                        if (columnName != null && columnName == 'EDIT_DATE') {
                            paramObj.value = date;
                        } else {
                            paramObj.value = basicData[columnName];
                        }
                        paramArray.push(paramObj);
                    }

                    var masterId = response.masterId;
                    var masterObj = response.masterObject;
                    $("#levelTabId").empty();
                    $("#levelTabId").append(response.tabsString);

                    $('#' + masterId + '_TAB').jqxTabs({height: '100%', width: '100%', position: 'top',
                        theme: 'ui-redmond', reorder: true, autoHeight: false, keyboardNavigation: true
                        , scrollPosition: 'both'});

                    clusterGridConfig(masterObj['masterGridObj'], masterObj['gridId'], masterId, masterObj['compType'], "Y", paramArray);
                    $("#clusterSplitter").show();
                }
            },
            error: function (e)
            {
                sessionTimeout(e);
            }
        });
    }
}