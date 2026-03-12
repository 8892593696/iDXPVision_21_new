/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $(document).mouseup(function (e)
    {
        var container = $("#settings_panel");
        var container1 = $(".personaliseoption");
        if ((!container.is(e.target)
                && container.has(e.target).length === 0)
                && (!container1.is(e.target)
                        && container1.has(e.target).length === 0)
                )
        {
            $(container).hide();
            $("#personalizeid").toggleClass("ui-icon-triangle-1-s");
        }
    });

});
function consolidationResolutionGrid(basicData, gridResultObj, recordstartindex, pagesize, recordendindex) {

    if (gridResultObj != null) {
        if (recordstartindex != null && parseInt(recordstartindex) != 0) {
            recordstartindex = parseInt(recordstartindex) - 1;
        }
        var paginationHidden = $("#paginationHidden").val();
        var gridPropObj = gridResultObj['gridPropObj'];
        var data = {
            gridId: gridResultObj['gridId'],
            colsArray: JSON.stringify(gridResultObj['columnsArray']),
            totalColumnsArray: JSON.stringify(gridResultObj['totalColumnsArray']),
            gridEditFlag: gridPropObj['GRID_EDIT_FLAG'],
            gridPropertyObj: JSON.stringify(gridPropObj),
            pagesizeoptions: JSON.stringify(gridPropObj['pagesizeoptions']),
            selectionmode: gridPropObj['SELECTION_TYPE'],
            tableName: gridPropObj['GRID_REF_TABLE'],
            columns: JSON.stringify(gridResultObj['columnListObj']),
            basicData: JSON.stringify(basicData),
            selectedCols: $("#selectedCols").val(),
            recordstartindex: recordstartindex,
            pagesize: pagesize,
            recordendindex: recordendindex,
            currentPage: $("#currentPage").val()
        };

        $.ajax({
            type: 'POST',
            // async: false,
            url: 'consolidationResolutionGrid',
            data: data,
            traditional: true,
            dataType: 'html',
            beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                showLoader();
            }, loadError: function (xhr, status, error) {
                stopLoader();
                throw new Error(error);
            }, loadComplete: function (data)
            {
                stopLoader();
            },
            success: function (response) {
                stopLoader();

                if (response != null) {
                    var resultObj = JSON.parse(response);
                    $("#matrixGridDivId").show();
                    $("#matrixGridId").html(resultObj['tabString']); //tabString
                    $("#matrixGridId").addClass('showTableData');
                    $("#resetConsolidation").show();
                    $("#processActionButton").show();
                    $("#createSubGroup").show();
                    $("#visionSearchExportButton").show();

                    var recordCount = resultObj['recordCount'];
                    var dataSize = resultObj['dataSize'];
                    $("#processActionButton").attr("data-datasize", dataSize);
                    $("#consolidationDataSize").val(resultObj['dataSize']);
                    var actionsObj = resultObj['actionsObj'];
                    if (actionsObj != null) {
                        $("#selectedGridActions").val(JSON.stringify(actionsObj));
                    }
                    var showRows = $("#showRows").val();
                    var totalPages = recordCount / showRows;
                    // var totalPages = 10;

                    var pageIndex = recordstartindex;
                    if (recordstartindex == 0) {
                        $("#visionPDRPaginationDiv").html(resultObj['paginationStr']);
                        $("#showRowsDiv").html(resultObj['pagesizeoptions']);
                        //totalPagesArray = resultObj['totalPagesArray'];
                        pageIndex = pageIndex + 1;
                        //pagesizeoptions
                    }
                    //  var currentPage = $("#currentPage").val();
                    // console.log(pageIndex+"::::::"+recordstartindex+":::::"+currentPage);
                    //  var paginationCountId = (pageIndex)+"-"+(pagesize*currentPage)+" of "+recordCount;
                    //console.log("paginationCountId::::"+paginationCountId);
                    $("#paginationCountId").html(resultObj['paginationCountId']);
                    $("#basicDataObjHidden").val(JSON.stringify(basicData));
                    $("#nestedGridObjHidden").val(JSON.stringify(gridResultObj)); //nestedGridObj

                    $('#visionPDRMatrixTableId').dragtable({dragaccept: '.visionPDRTableColumnDrag'});
                    $(".hideRows").hide();
                    $(".hideChildRows").hide();
                    if (dataSize != null && parseInt(dataSize) != 0) {
                        for (var i = 0; i < parseInt(dataSize); i++) {
                            if ($("#CONSOLIDATION_ACTION_" + i).val() != null && $("#CONSOLIDATION_ACTION_" + i).val() == 'NON DUPLICATE') {
                                $("#selection_" + i).attr("disabled", "disabled");
                            }
                        }
                    }
                    $(".recordCheckBox").click(function () {
                        if ($(this).is(':checked')) {
                            $("#select_all").prop("indeterminate", true);
                        }
                    });
                }

            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    }

}
function compareresultsPaginationResolution(selectedButton, totalPages) {
    showLoader();
    var selectedPageNum = 0;
    var selectedPrev = selectedPageNum;
    var selectedNext = selectedPageNum;
    console.log(totalPages + ":::selectedPageNum::::" + selectedPageNum);
    var currentPageStr = $("#currentPage").val();
    var currentPage = parseInt(currentPageStr);
    console.log("currentPage:::::" + currentPage);
    if (selectedButton != null && selectedButton == 'P') {
        // selecting previoues
        console.log("You Selected << Button");
        selectedPageNum = currentPage - 1;
    }
    if (selectedButton != null && selectedButton == 'N') {
        // clicked next button
        console.log("You Selected >> Button");
        selectedPageNum = currentPage + 1;
    }
    var pagesize = $("#showRows").val();
    console.log("selectedPageNum::::" + selectedPageNum);
    console.log("pagesize::::" + pagesize);
    var recordstartindex = (selectedPageNum - 1) * pagesize + 1;
    //recordstartindex, pagesize, recordendindex
    var basicDataStr = $("#basicDataObjHidden").val();
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var basicData = JSON.parse(basicDataStr);
    if (selectedPageNum != 0 && selectedPageNum != (totalPages + 1) && selectedPageNum != currentPage) {
        $("#currentPage").val(selectedPageNum);
        consolidationResolutionGrid(basicData, nestedGridObj, recordstartindex, pagesize, 30);
    }
    stopLoader();
}
function showrowsResolution() {
    showLoader();
    var basicDataStr = $("#basicDataObjHidden").val();
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var basicData = JSON.parse(basicDataStr);
    var pagesize = $("#showRows").val();
    console.log("pagesize:::showrows::::" + pagesize);
    $("#currentPage").val(1);
    consolidationResolutionGrid(basicData, nestedGridObj, 0, pagesize, 30);
    stopLoader();
}
function resetPDR() {
    $("#matrixGridId").html("");
    var selectedCols = $("#selectedCols").val();
    $("#mat_creation_form_table :input").each(function () {

        var textid = $(this).attr("id");
        var rangeTextId = textid;
        if (rangeTextId.indexOf("_FROM") > -1 || rangeTextId.indexOf("_TO") > -1) {
            rangeTextId = rangeTextId.replace("_FROM", "");
            rangeTextId = rangeTextId.replace("_TO", "");
        }
        var type = $(this).attr("type");
        var textval = $(this).val();
        if (selectedCols != null &&
                (selectedCols.indexOf(textid) > -1
                        || selectedCols.indexOf(rangeTextId) > -1
                        || selectedCols.indexOf(rangeTextId) > -1)
                ) {
            if (textid != 'BUSINESS_STATUS') {//BUSINESS_STATUS
                if (textid == 'TYPE1_FLAG') {
                    this.value = "TYPE1";
                } else if (textid == 'MATCH_PERCENTAGE') {
                    this.value = "100";
                } else {
                    this.value = "";
                }

            }

        }
    });
}//resetPDR()
function viewPDRCriteria() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var allStr = (labelObject['ALL'] != null ? labelObject['ALL'] : "ALL");
    var selectedCols = $("#selectedCols").val();
    var selectedColsLabels = $("#selectedColsLabels").val();
    console.log("selectedColsLabels::::" + selectedColsLabels);
    var selectedColsLabelsObj = selectedColsLabels.split(",");
    var result = "<div class=''><div class=''><table class=''>";
    if (selectedColsLabelsObj != null) {
        for (var i = 0; i < selectedColsLabelsObj.length; i++) {
            console.log("colName:265::" + colName);
            var colNameStr = selectedColsLabelsObj[i];
            var colName = colNameStr.split("::");
            if (colName[0] != null && colName[0] != '') {
                var defaultVal = allStr;
                if (colName[0].indexOf("PERCENTAGE") > -1) {
                    defaultVal = "100";
                }
                if (colName[2] == 'RG') {

                    result += "<tr>"
                            + "<th class=''>" + (labelObject[colName[1]] != null ? labelObject[colName[1]] : colName[1]) + ":</th>"
                            + "<td class=''>" + (($("#" + colName[0] + "_FROM").val() != '' ? $("#" + colName[0] + "_FROM").val() : defaultVal)
                                    + " " + (labelObject['TO'] != null ? labelObject['TO'] : 'TO')
                                    + " " + ($("#" + colName[0] + "_TO").val() != '' ? $("#" + colName[0] + "_TO").val() : defaultVal)) + "</td>"
                            + "</tr>";
                } else {
                    result += "<tr>"
                            + "<th class=''>" + (labelObject[colName[1]] != null ? labelObject[colName[1]] : colName[1]) + ":</th>"
                            + "<td class=''>" + ($("#" + colName[0]).val() != '' ? $("#" + colName[0]).val() : defaultVal) + "</td>"
                            + "</tr>";
                }

            }
        }
    }
    result += "</table></div></div>";

    $("#dialog").html(result);
    $("#dialog").dialog({ resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 400,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            //                                    location.reload();

        }
    });
}


function openSameActionDialog(oActionCellvalue) {
    var pdrId = $("#pdrId").val();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dialogSplitMessage = dialogSplitIconText((labelObject['Action canot be same for both materials'] != null ? labelObject['Action canot be same for both materials'] : 'Action canot be same for both materials') + ":" + oActionCellvalue, false);
    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({ resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 300,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            //                                    location.reload();

        }
    });
}
function confirmationActionDialog(basicData, columnName, rowIndex) {

    var pdrId = $("#pdrId").val();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var message = (labelObject['Are you sure you want to change the action'] != null ? labelObject['Are you sure you want to change the action'] : 'Are you sure you want to change the action') + "?";
    var dialogSplitMessage = dialogSplitIconText(message, false);
    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({ resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 300,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                click: function () {
                    processPDRAction(basicData, columnName, rowIndex);
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }, {
                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                click: function () {

                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            //                                    location.reload();

        }
    });
}


function  fetchTabGrid(selectedTabIndex, selectedChildTabId, selectedPDRGridIndex) {
    var pdrId = $("#pdrId").val();
    showLoader();
    console.log(selectedChildTabId + ":::selectedTabIndex::" + selectedTabIndex + ":::::selectedPDRGridIndex:::" + selectedPDRGridIndex);
    if (selectedTabIndex != null) {
        //  alert("::::"+selectedIndex);
        var gridIdStr = $("#" + selectedChildTabId + "GridIdStr").val();
        var gridIdArry = gridIdStr.split(",");
        console.log(gridIdStr + "::::" + gridIdArry);
        var selectedGridId = gridIdArry[selectedTabIndex];
        // $('#exportConsolidationGridId').val(selectedGridId);
        if (selectedGridId != null && selectedGridId != '') {
            $('#' + selectedGridId).off('cellclick');
            alert("selectedGridId:::" + selectedGridId);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getTabDataByGridId",
                cache: false,
                data: {
                    gridId: selectedGridId

                },
                success: function (response) {
                    //  alert("selectedGridId:::" + JSON.stringify(response));
                    gridConfig(response, {}, selectedTabIndex, selectedPDRGridIndex, selectedChildTabId, 'N');
                },
                error: function (e) {
                    sessionTimeout(e);
                }// Error function in Ajax
            }); // end ajax call
        }// end if(selectedGridId != null && selectedGridId != '')
    }// end if (selectedIndex != null)

}// end function fetchTabGrid(selectedIndex)
function updateConsolidationResGroupStatus() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var pdrInitValue = $("#pdrInitParams").val();
    var pdrInitParams = {};
    try {
        if (pdrInitValue != null && pdrInitValue != "" && pdrInitValue != undefined
                && pdrInitValue.includes("&")) {
            var pdrInitParamsArray = pdrInitParamsStr.split("&");
            for (var i = 0; i < pdrInitParamsArray.length; i++)
                if (pdrInitParamsArray[i] != null && pdrInitParamsArray[i] != '' && typeof pdrInitParamsArray[i] != 'undefined') {
                    if (pdrInitParamsArray[i].indexOf("=") > -1) {
                        var paramArray = pdrInitParamsArray[i].split("=");
                        pdrInitParams[paramArray[0]] = paramArray[1];
                    }

                }

        } else {
            pdrInitParams = JSON.parse(pdrInitValue);
        }
    } catch (e) {
    }
    var RejectionPopupFlag = pdrInitParams['RejectionPopupFlag'];
    var RejectionCheckBoxFlag = pdrInitParams['RejectionCheckBoxFlag'];
    var selectedRowData = [];
    var pdrId = $("#pdrId").val();
    var newBusinessStatus = $("#updateStatusSelect").val();

    var processFlag = true;
    var selectedIndexes = [];
    var datasizeCount = $("#processActionButton").attr("data-datasize");
    if (datasizeCount != null && parseInt(datasizeCount) != 0) {
        var selectedRowData = [];
        var columnsStr = $("#selectedGridObjColumns").val();
        var columns = JSON.parse(columnsStr);
        for (var i = 0; i < parseInt(datasizeCount); i++) {
            if ($("#selection_" + i).is(':checked')) {
                selectedIndexes.push(i);
                var action = $("#CONSOLIDATION_ACTION_" + i).val();
                if (action != null && (action != 'REGISTERED'
                        && action != 'REGISTERED')) {
                    var actionObj = {};
                    for (var j = 0; j < columns.length; j++) {
                        if (columns[j] != null && columns[j] != '') {
                            actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                            // actionObj['AUDIT_ID'] = $("#AUDIT_ID_" + i).html();
                        }
                    }

                    actionObj['BUSINESS_STATUS'] = newBusinessStatus;
                    selectedRowData.push(actionObj);
                    processFlag = true;
                }// if (selectedRowDataObj != null) 
                else {
                    if (newBusinessStatus == 'MANAGER_APPROVED') {
                        processFlag = false;
                        break;
                    } else {
                        var actionObj = {};
                        for (var j = 0; j < columns.length; j++) {
                            if (columns[i] != null && columns[j] != '') {
                                actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                                // actionObj['AUDIT_ID'] = $("#AUDIT_ID_" + i).html();
                            }
                        }
//                        actionObj['CONSOLIDATION_ACTION'] = $("#CONSOLIDATION_ACTION_" + i).val();
//                        actionObj['AUDIT_ID'] = $("#AUDIT_ID_" + i).html();
                        actionObj['BUSINESS_STATUS'] = newBusinessStatus;
                        selectedRowData.push(actionObj);
                        processFlag = true;
                    }
                }


            }

        }
    }
    if (selectedIndexes != null && selectedIndexes.length != 0) {
        if (newBusinessStatus != null && newBusinessStatus != undefined && newBusinessStatus != '' && newBusinessStatus == 'REQUESTOR_NOTAPPROVED'
                && RejectionPopupFlag != null && RejectionPopupFlag != '' && RejectionPopupFlag == "Y") {
            var rejectType = $("#rejectType").val();
            if (rejectType == 0) {
                response = "";
                $("#textReason").html("");
                response += "<div id='textReason'>";
                response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                $("#dialog2").html(response);

            } else if (rejectType == 1) {
                response = "";
                $("#reasonDialog").html("");
                var rejectData = $("#rejTypesData").val();
                console.log(rejectData);
                response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                $("#dialog2").html(response);
                if (rejectData != null && rejectData != '') {
                    var rejectDataArray = JSON.parse(rejectData);
                    $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
                }
            } else if (rejectType == 4) {
                if (RejectionCheckBoxFlag != null && RejectionCheckBoxFlag == "0") {//selectbox
                    var response = "";
                    $("#reasonDialog").html("");
                    var rejectData = $("#rejTypesData").val();
                    console.log(rejectData);
                    response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";

                    $("#textReason").html("");
                    ////////////////////alert("after empty");
                    response += "<div id='textReason'>";
                    response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                    response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                    $("#dialog2").html(response);
                    if (rejectData != null && rejectData != '') {
                        var rejectDataArray = JSON.parse(rejectData);
                        $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                            searchMode: 'containsignorecase',
                            multiSelect: true,
                            autoComplete: true,
                            theme: 'energyblue',
                            openDelay: 1,
                            closeDelay: 1,
                            enableSelection: true,
                            width: 280, height: 25});
                    }
                } else if (RejectionCheckBoxFlag != null && RejectionCheckBoxFlag == "1") {//1 both
                    var response = "";
                    $("#reasonDialog").html("");
                    var rejectData = $("#rejTypesData").val();
                    console.log(rejectData);
                    response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
                    response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                    $("#dialog2").html(response);
                    if (rejectData != null && rejectData != '') {
                        var rejectDataArray = JSON.parse(rejectData);
                        $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                            searchMode: 'containsignorecase',
                            multiSelect: true,
                            autoComplete: true,
                            theme: 'energyblue',
                            openDelay: 1,
                            closeDelay: 1,
                            enableSelection: true,
                            width: 280, height: 25});
                    }
                } else {
                    var response = "";
                    //$("#reasonDialog").html("");
                    var rejectData = $("#rejTypesData").val();
                    console.log(rejectData);
                    response += "<div id='textReason'>";
                    response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                    $("#textReason").html("");
                    $("#dialog2").html(response);
                }

            }
            $("#dialog2").dialog({ resizable: false,
                title: "Rejection Reason",
                modal: true,
                height: 'auto',
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            var retReasonText = "";
                            var returnReason = "";
                            var checkBoxdata = "";
                            if (rejectType == 0) {
                                var textBoxData = $("#reasonId").val();
                                retReasonText = textBoxData;
                            } else if (rejectType == 1) {
                                var selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                                for (var i = 0; i < selectReason.length; i++)
                                {
                                    checkBoxdata += selectReason[i].value;
                                    checkBoxdata += ",";
                                }
                                if (checkBoxdata != null && checkBoxdata != '')
                                {
                                    var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                    retReasonText = returnReason;
                                }
                            } else if (rejectType == 4) {
                                if (RejectionCheckBoxFlag != null && RejectionCheckBoxFlag != '') {
                                    var selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                                    for (var i = 0; i < selectReason.length; i++)
                                    {
                                        checkBoxdata += selectReason[i].value;
                                        checkBoxdata += ",";
                                    }
                                    if (checkBoxdata != null && checkBoxdata != '')
                                    {
                                        var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                        retReasonText = returnReason;
                                        var textBoxData = $("#reasonId").val();
                                        if (textBoxData != null && textBoxData != '')
                                        {
                                            retReasonText = returnReason + ", " + textBoxData;
                                        }
                                    }
                                } else
                                {
                                    var textBoxData = $("#reasonId").val();
                                    if (textBoxData != null && textBoxData != '')
                                    {
                                        retReasonText = textBoxData;
                                    }
                                }
                            } else {
                                rejCommentSubmit(retReasonText, selectedRowData, newBusinessStatus);
                            }
                            if (!retReasonText)
                            {
                                $("#dailog_error_id").show();
                            } else if (retReasonText != null)
                            {
                                $("#dailog_error_id").hide();
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                rejCommentSubmit(retReasonText, selectedRowData, newBusinessStatus);
                            } else
                            {

                                var returnReason = selectReason;
                                console.log("returnReason:::" + returnReason);
                                if (returnReason == '' && returnReason == null)
                                {
                                    $("#dailog_error_id").show();
                                }
                                //returnReason = returnReason.trim();
                                if (returnReason != '' && returnReason != null) {
                                    $("#dailog_error_id").hide();
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                } else
                                {
                                    $("#dailog_error_id").show();
                                }
                            }
                            showLoader();
                        }},

                    {
                        text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            // $("#labeld").empty();

                        }

                    }],
                open: function () {
                     //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        } else {

            if (processFlag) {
                // first need to call update actions 
                processConsolidationAction('N');

                $.ajax({
                    type: 'POST',
                    // async: false,
                    url: 'updateConsolidationResGroupStatus',
                    data: {
                        selectedRowData: JSON.stringify(selectedRowData),
                        businessStatus: newBusinessStatus
                    },
                    traditional: true,
                    dataType: 'html',
                    beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                        showLoader();
                    }, loadError: function (xhr, status, error) {
                        stopLoader();
                        throw new Error(error);
                    }, loadComplete: function (data)
                    {
                        stopLoader();
                    },
                    success: function (response) {
                        searchConsolidation();

                    },
                    error: function (e) {
                        sessionTimeout(e);
                    }

                });
            } else {
                var message = "Business Status not Updated:Master/Superseded action need to be done."
                $("#dialog").html((labelObject[message] != null ? labelObject[message] : message));
                $("#dialog").dialog({ resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                searchConsolidation();
                            }
                        }],
                    open: function () {
                         //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                        //                                    location.reload();

                    }
                });
            }

        }
    }// if (selectedrowindexes != null && selectedrowindexes.length != 0)
    else {
        $("#dialog").html((labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process'));
        $("#dialog").dialog({ resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }],
            open: function () {
                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
                //                                    location.reload();

            }
        });
    }
}// end of function updatePDRResGroupStatus();
function checkingActions(id, index, columnName) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#selection_" + index).attr("checked", true);
    $("#select_all").prop("indeterminate", true);
    var totalDataCount = $("#" + id).attr("data-totalcount");
    var selectedVal = $("#" + id).val();
    var selectedGroup = $("#hidden_PDR_GROUP_" + index).val();
    var selectedGroupCount = $("#hidden_PDR_GROUP_COUNT_" + index).val();
    var successflag = true;
    if (selectedVal != null && selectedVal !== 'NON DUPLICATE') {
        $("#selection_" + index).removeAttr("disabled");
    }
    if (selectedVal != null && selectedVal == 'MASTER') {
        if (totalDataCount != null && parseInt(totalDataCount) != 0) {

            for (var i = 0; i < parseInt(totalDataCount); i++) {

                if (i != index && $("#" + columnName + "_" + i).val() != null
                        && $("#" + columnName + "_" + i).val() == 'MASTER'
                        && selectedGroup != null && selectedGroup == $("#hidden_PDR_GROUP_" + i).val()
                        ) {
                    successflag = false;
                    var oldVal = $("#hidden_" + id).val();
                    $("#" + id).val(oldVal);
                    var actionMessage = "Master already selected for other record in this Group";
                    openActionDialog(actionMessage);

                    break;
                }

            }
            if (successflag) {
                var promptMessage = "Please select the appropriate Superseded material from the Group";
                openActionDialog(promptMessage);
            }
        }

    } else if (selectedVal != null && selectedVal == 'SUPERSEDED') {
        if (totalDataCount != null && parseInt(totalDataCount) != 0) {
            var supersedeCount = 1;
            for (var i = 0; i < parseInt(totalDataCount); i++) {
                if (i != index && selectedGroup != null && selectedGroup == $("#hidden_PDR_GROUP_" + i).val()
                        && $("#" + columnName + "_" + i).val() == 'SUPERSEDED') {
                    supersedeCount++;
                }

            }
            if (supersedeCount == parseInt(selectedGroupCount)) {
                var oldVal = $("#hidden_" + id).val();
                $("#" + id).val(oldVal);
                successflag = false;
                var actionMessage = "One master should be available in this group";
                openActionDialog(actionMessage);
            }

        }
    }
    if (successflag) {
        $("#hidden_" + id).val(selectedVal);
    }
}
function processConsolidationAction(businessStatusUpdateFlag) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var datasizeCount = $("#processActionButton").attr("data-datasize");
    if (datasizeCount != null && parseInt(datasizeCount) != 0) {
        var selectedRowData = [];
        var columnsStr = $("#selectedGridObjColumns").val();
        var columns = JSON.parse(columnsStr);
        for (var i = 0; i < parseInt(datasizeCount); i++) {
            if ($("#selection_" + i).is(':checked')) {
                var actionObj = {};
                for (var j = 0; j < columns.length; j++) {
                    if (columns[j] != null && columns[j] != '') {
                        actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                        // actionObj['AUDIT_ID'] = $("#AUDIT_ID_" + i).html();
                    }
                }
//                actionObj['AUDIT_ID'] = $("#hidden_AUDIT_ID_" + i).val();
//                actionObj['CONSOLIDATION_ACTION'] = $("#CONSOLIDATION_ACTION_" + i).val();
                selectedRowData.push(actionObj);

            }

        }
        if (selectedRowData != null && selectedRowData.length != 0) {
            // updating Consolidation Action
            $.ajax({
                type: 'POST',
                // async: false,
                url: 'updateConsolidationAction',
                data: {
                    selectedRowData: JSON.stringify(selectedRowData)
                },
                traditional: true,
                dataType: 'html',
                beforeSend: function (xhr) {                             
                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                    showLoader();
                }, loadError: function (xhr, status, error) {
                    stopLoader();
                    throw new Error(error);
                }, loadComplete: function (data)
                {
                    stopLoader();
                },
                success: function (response) {
                    if (businessStatusUpdateFlag != 'N') {
                        searchConsolidation();
                    }
                },
                error: function (e) {
                    sessionTimeout(e);
                }

            });
        } else {
            var actionMessage = "Please select an option to process";
            openActionDialog(actionMessage);
        }
    }
}
function openActionDialog(actionMessage) {
    var pdrId = $("#pdrId").val();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dialogSplitMessage = dialogSplitIconText((labelObject[actionMessage] != null ? labelObject[actionMessage] : actionMessage), false);
    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({ resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 300,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            //                                    location.reload();

        }
    });
}
function slideSettings() {
//  $("#settings_panel").toggle(100)
    $('#settings_panel').toggle('slide', {direction: 'right'}, 500);
    $("#personalizeid").toggleClass("ui-icon-triangle-1-s");
    var slideSettingsInd = $("#accordion").attr("data-slidesettingsind");

}
function showHideConsolidationColumns(id, columnName) {
    //TR_
    if ($("#" + id).is(':checked')) {
        $("#TR_" + columnName).show();
    } else {
        $("#TR_" + columnName).hide();
    }
}
function createSubConsolidationGroup() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var consolidationDataSize = $("#consolidationDataSize").val();
    if (consolidationDataSize != null && parseInt(consolidationDataSize) >= 4) {
        var selectedRowData = [];
        var columnsStr = $("#selectedGridObjColumns").val();
        var columns = JSON.parse(columnsStr);
        for (var i = 0; i < parseInt(consolidationDataSize); i++) {
            if ($("#selection_" + i).is(':checked')) {
                var actionObj = {};
                for (var j = 0; j < columns.length; j++) {
                    if (columns[j] != null && columns[j] != '') {
                        actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                    }
                }
                selectedRowData.push(actionObj);

            }

        }
        if (selectedRowData != null && selectedRowData.length >= 4) {
            $.ajax({
                type: 'POST',
                // async: false,
                url: 'createSubConsolidationGroup',
                data: {
                    selectedRowData: JSON.stringify(selectedRowData)
                },
                traditional: true,
                dataType: 'html',
                beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                    showLoader();
                }, loadError: function (xhr, status, error) {
                    stopLoader();
                    throw new Error(error);
                }, loadComplete: function (data)
                {
                    stopLoader();
                },
                success: function (response) {
                    stopLoader();
                    if (response != null && response != '') {
                        var responseObj = JSON.parse(response);
                        var dialogSplitMessage = dialogSplitIconText((labelObject[responseObj['message']] != null ? labelObject[responseObj['message']] : responseObj['message']), false);
                        $("#dialog").html(dialogSplitMessage);
                        $("#dialog").dialog({ resizable: false,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            modal: true,
                            height: 'auto',
                            minHeight: 'auto',
                            minWidth: 300,
                            maxWidth: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        if (responseObj['messageFlag']) {
                                            searchConsolidation();
                                        }
                                    }
                                }],
                            open: function () {
                                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");
                            },
                            beforeClose: function (event, ui)
                            {
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                                //                                    location.reload();

                            }
                        });
                    }

                },
                error: function (e) {
                    sessionTimeout(e);
                }

            });
        } else {
            openActionDialog("Please choose at least 4 records to create sub group");
        }
    } else {
        openActionDialog("Sorry the sub group will not create due to less records");
    }
}


function rejCommentSubmit(retReasonText, selectedRowData, newBusinessStatus) {
    $.ajax({
        type: 'POST',
        url: 'updateConsolidationResGroupStatus',
        data: {
            retReasonText: retReasonText,
            selectedRowData: JSON.stringify(selectedRowData),
            businessStatus: newBusinessStatus
        },
        traditional: true,
        dataType: 'html',
        beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            showLoader();
        }, loadError: function (xhr, status, error) {
            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
            stopLoader();
        },
        success: function (response) {
            console.log('response ==> ' + response);
            searchConsolidation();
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}


//smart consolidation starts
function smartConsolidationGridConfig(gridResultObj, basicData, isGroup, importFlag) {
    $("#searchResultsGridObjHidden").val(JSON.stringify(gridResultObj));

    showLoader();
    var pdrId = $("#pdrId").val();
//    var pdrId = gridResultObj['gridId'];
    if (isGroup == 'Y') {
        pdrId = pdrId + "_PDR_GROUP";
        try {
//gridDiv

            $('#' + pdrId).jqxGrid("destroy");
            $("#gridDivGroup").html("<div id=\"" + pdrId + "\" ></div>");
        } catch (e) {
        }
    } else {
        try {
//gridDiv
            $('#' + pdrId).jqxGrid("destroy");
            $("#gridDiv").html("<div id=\"" + pdrId + "\" ></div>");
        } catch (e) {
        }
    }

    // alert(":::gridConfig::" + JSON.stringify(gridResultObj));
    var fieldsArray = [];
    if (gridResultObj != null) {
        if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                $("#" + gridResultObj['gridId']).attr("data-gridResultObj", JSON.stringify(gridResultObj));
            }
        //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
        try {
            var hrefObj = {}; //hrefObj
            hrefObj = gridResultObj['hrefObj'];
//        $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
            //                        $("#hrefColumn").val(hrefObj['hrefColumn']);
            $("#linkedColumns").val(hrefObj['linkedColumns']);
            $("#stripValue").val(hrefObj['stripValue']);
            $("#imageColumn").val(hrefObj['imageColumn']);
            $("#imageTable").val(hrefObj['imageTable']);
            $("#imageTableColumn").val(hrefObj['imageTableColumn']);
        } catch (e) {

        }
        //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
        if (gridResultObj != null && gridResultObj.datafields) {

            var imagerenderer = function (row, datafield, value) {

                return '<img src="" id="ind' + row + '" class="indimage"><label id="imgLabel' + row + '" class="indimage">Show Image</label>';
            };
        }
        var dataFeilds = gridResultObj.datafields;
        var hrefObj = gridResultObj.hrefObj;
        var localData = gridResultObj.data;
        var formId = gridResultObj.formId;
        var panelId = gridResultObj.panelId;
        var gridOperation = gridResultObj.gridOperation;
        //////////////////console.log("gridOperation:::"+gridOperation);

        ////////////////////console.log("formId::::::"+formId);
        $('#formId').val(formId);
        $('#panelId').val(panelId);
        var gridPropObj = {};
        gridPropObj = gridResultObj.gridPropObj;
        var hiddenObj = gridResultObj['hiddenObj'];
        if (hiddenObj != null) {
            $("#hiddenObj").val(JSON.stringify(hiddenObj));
        }
        if (gridPropObj != null) {
            fieldsArray.length = 0;
            fieldsArray = gridResultObj.columns;
            gridPropObj.columns = gridResultObj.columns;
            var headerTooltipRenderer = function (element) {
                $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                    position: 'bottom-right',
                    showArrow: false, content: $(element).text()});
            }
            var dataSheetRendered = function (element) {

                // $(element).html("<div class='show_detail' ></div>");
                $(element).addClass("show_detail");
                $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                    position: 'bottom-right',
                    showArrow: false,
                    content: "Data Sheet"});
                //content: $(element).text()});
            }
            var renderToolbar = gridPropObj.renderToolbar;
            gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
            var descrender = function (row, columnfield, value, defaulthtml, columnproperties) {
                //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                console.log("hiiiii");
                return '<div style="height:' + $('#' + pdrId).jqxGrid('rowsheight') + 'px" class="ta_style" rows=1 >' + value + '</div>';
            };
            var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                var cellValue = $("#" + pdrId).jqxGrid('getcellvalue', row, columnfield);
                var viewType = "GRID-VIEW";
                var ddwData = gridResultObj.dropDowndData;
                var ddwObj = ddwData[columnfield];
                var dependencyparams = ddwObj.dependencyparams;
                var editable = gridPropObj.editable;
                //                               
                if (editable) {
                    return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' id='dd" + pdrId + columnfield + "'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
//                                return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                } else
                {
                    return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                }

            };
            for (var i = 0; i < gridPropObj.columns.length; i++) {
                if (gridPropObj.columns [i].cellsrenderer != null) {
                    gridPropObj.columns [i].cellsrenderer = eval(gridPropObj.columns [i].cellsrenderer);
                }
                if (gridPropObj.columns[i].rendered != null) {
                    gridPropObj.columns[i].rendered = eval('(' + gridPropObj.columns[i].rendered + ')');
                }
            }
            if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {

                gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
            }
            if (gridPropObj.rowsheight != null) {
                gridPropObj.rowsheight = parseInt(gridPropObj.rowsheight);
                gridPropObj.autorowheight = true;
                $('.show_detail').css('height', parseInt(gridPropObj.rowsheight + "px"));
            } else {
                $('.show_detail').css('height', '25px');
            }
            var subTabId = "jqxTabs";
            //    alert("before Source::::gridPropObj::::" + JSON.stringify(gridPropObj));
            var urlStr = "getPDRGridData";
            if (isGroup == 'Y') {
                urlStr = "pdrGroupResults";
            }
//                        else if (importFlag != null && importFlag == 'Y') {
//                            urlStr = "getPDRImportGridData";
//                        } 
            else {
                urlStr = "getPDRGridData";
            }
            console.log("urlStr:::" + urlStr);
            var source =
                    {
                        type: 'POST',
                        async: false,
                        datatype: "json",
                        datafields: dataFeilds,
                        data: {
                            gridId: gridResultObj['gridId'],
                            colsArray: JSON.stringify(gridResultObj['colsArray']),
                            tableName: gridResultObj['tableName'],
                            basicData: JSON.stringify(basicData),
                            selectedCols: $("#selectedCols").val(),
                            pdrType: $("#PDR_TYPE").val(),
                            batchId: gridResultObj['batchId'],
                            importFlag: importFlag
                        },
                        url: urlStr,
                        cache: false,
                        root: 'Rows',
                        beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                            showLoader();
                        }, loadError: function (xhr, status, error) {
                            stopLoader();
                            stopLoader();
                            throw new Error(error);
                        }, loadComplete: function (data)
                        {
                            stopLoader();
                            stopLoader();
                        },
                        beforeprocessing: function (data) {
                            //   alert("beforeprocessing::::" + JSON.stringify(data));
                            if (data[0] != null) {
                                //  alert(data.JSONObjectList[0].TotalRows);
                                source.totalrecords = data[0].TotalRows;
                                $("#excelExport").attr("disabled", true);
                                $("#drop").attr("disabled", false);
                                $("#export").attr("disabled", false);
                            } else {

                                source.totalrecords = 0;
                                $("#excelExport").attr("disabled", true);
                                $("#approvebutt").attr("disabled", true);
                                $("#drop").attr("disabled", true);
                                $("#drop").css("opacity", "0.5");
                                $("#export").attr("disabled", true);
                                $("#export").css("opacity", "0.5");
                                stopLoader();
                            }

                            //                                                         
                        },
                        sort: function ()
                        {
                            //showLoader();
                            $("#" + pdrId).jqxGrid('updatebounddata', 'sort');
                            // stopLoader();
                        },
                        filter: function () {
                            // showLoader();
                            $("#" + pdrId).jqxGrid('updatebounddata', 'filter');
                            // stopLoader();
                        }


                    };
            var dataAdapter = new $.jqx.dataAdapter(source);
            gridPropObj.source = dataAdapter;
            // gridPropObj.showtoolbar = false;
            gridPropObj.rowdetails = false;
            gridPropObj.rendergridrows = function () {
                return dataAdapter.records;
            };
//                        gridPropObj.rendertoolbar = function (toolbar) {
//                            // appends buttons to the tool bar.
//                            var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
//                            //                        var buttonTemplate = "<div  class='visionRefreshIndexBtn' style='float: left; padding: 3px; margin: 2px;'></div>";
//
//                            var reloadButton = $("<div style='float: left;margin-left: 5px;'><img style='position: relative;width:16px;height:16px; margin-top: 2px;' src='images/refresh_icon.png'/></div>");
//                            container.append(reloadButton);
//                            // reload grid data.
//                            reloadButton.click(function () {
//                                //                                    $('#' + gridResultObj['gridId']).jqxGrid({source: dataAdapter});
//                                //                                    $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'cells');
//                                $("#" + pdrId).jqxGrid('clearselection');
//                                $("#" + pdrId).jqxGrid('clearfilters');
//                            });
//                            reloadButton.jqxButton({cursor: "pointer", enableDefault: false});
//                            //                    reloadButton.find('div:first').addClass("visionRefreshIndexBtn");
//                            reloadButton.jqxTooltip({position: 'bottom', content: "Refresh"});
//                            //toolbar.append(container);
//                        };
//                        gridPropObj.enabletooltips = false;
            gridPropObj.cellhover = function (element, pageX, pageY)
            {
//                            var cellToolTip = $(element).text();
//                            if (cellToolTip != null && cellToolTip != '') {
//                                $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                                    showArrow: false, content: cellToolTip});
//                                $(element).parent().jqxTooltip('open', pageX + 5, pageY + 5);
//                            }
                var cell = $('#' + pdrId).jqxGrid('getcellatposition', pageX, pageY);
                //\\alert("hello"+cell.row);
                var datainformation = $('#' + pdrId).jqxGrid('getdatainformation');
                var paginginformation = datainformation.paginginformation;
                var rowscount = paginginformation.pagesize;
                var pagenum = paginginformation.pagenum;
                var cellRow = cell.row;
                //                              alert(cellRow);
                if (cellRow >= rowscount && pagenum > 0)
                {
                    var cellvalue = rowscount * pagenum;
                    if (cellRow == rowscount)
                    {
                        cellRow = (cellRow - cellvalue);
                    } else
                    {
                        cellRow = (cellRow - cellvalue);
                    }
                    console.log(cellRow + "cellRow");
                } else
                {
                    cellRow = cellRow;
                }

            };

            $("#selectedDropdown").html(gridResultObj['buttonObj']);
            $("#exportDropdown").html(gridResultObj['gridOperation']);
            // *********************************

            $('#' + pdrId).jqxGrid(gridPropObj);
            $('#' + pdrId).on('celldoubleclick', function (event) {
                var args = event.args;
                var dataField = args.datafield;
                var dataField1 = args.text;
                var rowIndex = args.rowindex;
                var cellValue = args.value;
                var column = $('#' + pdrId).jqxGrid('getcolumn', event.args.datafield).text;
                popupedit(column, cellValue);
            });

            $(window).resize(function () {
                var windowWidth = $(this).width();
                if (windowWidth <= 415)
                {
                    $('#' + pdrId).jqxGrid({pagerheight: 70});
                } else if (windowWidth >= 416 && windowWidth <= 500)
                {
                    $('#' + pdrId).jqxGrid({pagerheight: 40});
                } else
                {
                    $('#' + pdrId).jqxGrid({pagerheight: 30});
                }
            }).resize();
            $('#' + pdrId).parent().css("padding-top", "3px", "important");
            $('#' + pdrId).parent().css("padding-bottom", "3px", "important");
            $('#' + pdrId).jqxGrid('height', '100%');
            $('#' + pdrId).jqxGrid({pagerheight: 70});
            //  $('#' + pdrId).jqxGrid('showtoolbar', false);
            var editable = gridPropObj.editable;
            if (editable) {
                $('#' + pdrId).jqxGrid('showtoolbar', true);
            } else
            {
                $('#' + pdrId).jqxGrid('showtoolbar', false);
            }
            $('#' + gridResultObj['gridId']).bind('cellclick', function (event) {
                $('#' + gridResultObj['gridId']).jqxGrid('clearselection');
                $('#' + gridResultObj['gridId']).jqxGrid('selectrow', event.args.rowindex);
                navigateToForm(event.args.column.datafield,
                        $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form',
                        gridResultObj['gridId'], basicData, hrefObj, gridResultObj['nestedGridObj']);
            });
//            $(window).resize(function () {
//                var windowWidth = $(this).width();
//                if (windowWidth <= 415)
//                {
//                    $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 70});
//                } else if (windowWidth >= 416 && windowWidth <= 500)
//                {
//                    $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 40});
//                } else
//                {
//                    $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 30});
//                    $('#' + gridResultObj['gridId']).jqxGrid({scrollbarsize: 8});
//                }
//            }).resize();
            $(window).resize(function ()
            {
                var windowWidth = $(this).width();
                if (windowWidth >= 500)
                {
                    $('#' + pdrId).jqxGrid('height', (gridHeightInner - 3) + "px");
                } else
                {
                    $('#' + pdrId).jqxGrid('height', '100%');
                }
            }).resize();
            $('#' + pdrId).bind('rowselect', function (event) {
//                            $('#' + gridResultObj['gridId']).jqxGrid('clearselection');
//                            $('#' + gridResultObj['gridId']).jqxGrid('selectrow', event.args.rowindex);
                console.log("event.args.rowindex::::" + event.args.rowindex);
                var index = event.args.rowindex;
//                            var rows = $('#' + pdrId).jqxGrid('getrows');
//                            console.log("rows::::"+JSON.stringify(rows))
                var selectedrowindexes = $('#' + pdrId).jqxGrid('selectedrowindexes');
                console.log("selectedrowindexes::::" + selectedrowindexes)
//                            for (var i = 0; i < selectedrowindexes.length; i++)
//                            {
//                                if (selectedrowindexes[i] != index && selectedrowindexes[i] != -1) {
//                                    try {
//                                        //  var bindex = $('#' + pdrId).jqxGrid('getrowboundindex', i);
//                                        $('#' + pdrId).jqxGrid('unselectrow', selectedrowindexes[i]);
//                                    } catch (err) {
//                                    }
//                                }
//
//                            }
                $("#basicDataObjHidden").val(JSON.stringify(basicData));
                $("#nestedGridObjHidden").val(JSON.stringify(gridResultObj['nestedGridObj'])); //nestedGridObj

            });
            $('#' + pdrId).on('rowunselect', function (event) {
                var index = event.args.rowindex;
                var selectedrowindexes = $('#' + pdrId).jqxGrid('selectedrowindexes');
                if (index != null && selectedrowindexes != null && index.length == selectedrowindexes.length) {
                    $('#' + pdrId).jqxGrid('clearselection');
                }
            });
            $('#' + pdrId).on("pagechanged", function (event) {
                var oldPageNum = $("#currentGridpageNum").val();
                console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                // event arguments.
                var args = event.args;
                // page number.
                var pagenum = args.pagenum;
                // page size.
                var pagesize = args.pagesize;
                if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                    var selectedrowindexes = $('#' + pdrId).jqxGrid('selectedrowindexes');
//                                        console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
                    try {
                        if (selectedrowindexes != null
                                && selectedrowindexes.length != 0
                                && selectedrowindexes[0] != -1) {
                            $('#' + pdrId).jqxGrid('clearselection');
                        }

                    } catch (e) {
                    }
                }
                $("#currentGridpageNum").val(event.args.pagenum);
            });
            stopLoader();
        }// end if(gridPropObj != null)

    }

}
function viewMatrixForm() {
//                $("#wait").css("opacity", "0.99");
//                $("#wait").css("display", "block");
//                $("body").css("pointer-events", "none");
    showLoader();
    console.log("viewMatrixForm::::");
    var pdrId = $("#pdrId").val();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var selectedrowindexes = $('#' + pdrId).jqxGrid('selectedrowindexes');

    if (selectedrowindexes != null && selectedrowindexes.length != 0 && selectedrowindexes[0] != -1) {
        var selectedRowdata = {};
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + pdrId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex && selectedrowindexes[0] != null && selectedrowindexes[0] != -1) {
                    selectedRowdata = $('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[0]);
                } else {
                    selectedRowdata = $('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[selectedrowindexes.length - 1]);
                }
            }
        }

//                    var selectedRowdata = $('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[0]);
        var basicDataStr = $("#basicDataObjHidden").val();
        //var selectedRowdataStr = $("#selectedGridObjHidden").val();//selectedRowdata
        var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
        var nestedGridObj = JSON.parse(nestedGridObjStr);
        // var selectedRowdata = JSON.parse(selectedRowdataStr);
        var basicData = JSON.parse(basicDataStr);
        navigateToconsolidationForm(selectedRowdata, basicData, nestedGridObj);
    } else {
        $("#dialog").html((labelObject['Please Select Atleast one Record'] != null ? labelObject['Please Select Atleast one Record'] : 'Please Select Atleast one Record'));
        $("#dialog").dialog({ resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }],
            open: function () {
                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
                //                                    location.reload();

            }
        });
    }
    stopLoader();
}
function updateConsolidationResGroupStatus() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var pdrInitValue = $("#pdrInitParams").val();
    var pdrInitParams = {};
    try {
        if (pdrInitValue != null && pdrInitValue != "" && pdrInitValue != undefined
                && pdrInitValue.includes("&")) {
            var pdrInitParamsArray = pdrInitParamsStr.split("&");
            for (var i = 0; i < pdrInitParamsArray.length; i++)
                if (pdrInitParamsArray[i] != null && pdrInitParamsArray[i] != '' && typeof pdrInitParamsArray[i] != 'undefined') {
                    if (pdrInitParamsArray[i].indexOf("=") > -1) {
                        var paramArray = pdrInitParamsArray[i].split("=");
                        pdrInitParams[paramArray[0]] = paramArray[1];
                    }

                }

        } else {
            pdrInitParams = JSON.parse(pdrInitValue);
        }
    } catch (e) {
    }
    var RejectionPopupFlag = pdrInitParams['RejectionPopupFlag'];
    var RejectionCheckBoxFlag = pdrInitParams['RejectionCheckBoxFlag'];
    var selectedRowData = [];
    var pdrId = $("#pdrId").val();
    var newBusinessStatus = $("#updateStatusSelect").val();

    var processFlag = true;
    var selectedIndexes = [];
    var datasizeCount = $("#processActionButton").attr("data-datasize");
    if (datasizeCount != null && parseInt(datasizeCount) != 0) {
        var selectedRowData = [];
        var columnsStr = $("#selectedGridObjColumns").val();
        var columns = JSON.parse(columnsStr);
        for (var i = 0; i < parseInt(datasizeCount); i++) {
            if ($("#selection_" + i).is(':checked')) {
                selectedIndexes.push(i);
                var action = $("#CONSOLIDATION_ACTION_" + i).val();
                if (action != null && (action != 'REGISTERED'
                        && action != 'REGISTERED')) {
                    var actionObj = {};
                    for (var j = 0; j < columns.length; j++) {
                        if (columns[j] != null && columns[j] != '') {
                            actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                            // actionObj['AUDIT_ID'] = $("#AUDIT_ID_" + i).html();
                        }
                    }

                    actionObj['BUSINESS_STATUS'] = newBusinessStatus;
                    selectedRowData.push(actionObj);
                    processFlag = true;
                }// if (selectedRowDataObj != null) 
                else {
                    if (newBusinessStatus == 'MANAGER_APPROVED') {
                        processFlag = false;
                        break;
                    } else {
                        var actionObj = {};
                        for (var j = 0; j < columns.length; j++) {
                            if (columns[i] != null && columns[j] != '') {
                                actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                                // actionObj['AUDIT_ID'] = $("#AUDIT_ID_" + i).html();
                            }
                        }
//                        actionObj['CONSOLIDATION_ACTION'] = $("#CONSOLIDATION_ACTION_" + i).val();
//                        actionObj['AUDIT_ID'] = $("#AUDIT_ID_" + i).html();
                        actionObj['BUSINESS_STATUS'] = newBusinessStatus;
                        selectedRowData.push(actionObj);
                        processFlag = true;
                    }
                }


            }

        }
    }
    if (selectedIndexes != null && selectedIndexes.length != 0) {
        if (newBusinessStatus != null && newBusinessStatus != undefined && newBusinessStatus != '' && newBusinessStatus == 'REQUESTOR_NOTAPPROVED'
                && RejectionPopupFlag != null && RejectionPopupFlag != '' && RejectionPopupFlag == "Y") {
            var rejectType = $("#rejectType").val();
            if (rejectType == 0) {
                response = "";
                $("#textReason").html("");
                response += "<div id='textReason'>";
                response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                $("#dialog2").html(response);

            } else if (rejectType == 1) {
                response = "";
                $("#reasonDialog").html("");
                var rejectData = $("#rejTypesData").val();
                console.log(rejectData);
                response += "<div id='rejectComboBox' class='visionRejectFormComboBox'></div>";
                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

                $("#dialog2").html(response);
                if (rejectData != null && rejectData != '') {
                    var rejectDataArray = JSON.parse(rejectData);
                    $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'contains', multiSelect: true, width: 280, height: 25});
                }
            } else if (rejectType == 4) {
                if (RejectionCheckBoxFlag != null && RejectionCheckBoxFlag == "0") {//selectbox
                    var response = "";
                    $("#reasonDialog").html("");
                    var rejectData = $("#rejTypesData").val();
                    console.log(rejectData);
                    response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";

                    $("#textReason").html("");
                    ////////////////////alert("after empty");
                    response += "<div id='textReason'>";
                    response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                    response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                    $("#dialog2").html(response);
                    if (rejectData != null && rejectData != '') {
                        var rejectDataArray = JSON.parse(rejectData);
                        $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                            searchMode: 'containsignorecase',
                            multiSelect: true,
                            autoComplete: true,
                            theme: 'energyblue',
                            openDelay: 1,
                            closeDelay: 1,
                            enableSelection: true,
                            width: 280, height: 25});
                    }
                } else if (RejectionCheckBoxFlag != null && RejectionCheckBoxFlag == "1") {//1 both
                    var response = "";
                    $("#reasonDialog").html("");
                    var rejectData = $("#rejTypesData").val();
                    console.log(rejectData);
                    response += "<div id='rejectComboBox'  class='visionRejectFormComboBox'></div>";
                    response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                    $("#dialog2").html(response);
                    if (rejectData != null && rejectData != '') {
                        var rejectDataArray = JSON.parse(rejectData);
                        $("#rejectComboBox").jqxComboBox({source: rejectDataArray,
                            searchMode: 'containsignorecase',
                            multiSelect: true,
                            autoComplete: true,
                            theme: 'energyblue',
                            openDelay: 1,
                            closeDelay: 1,
                            enableSelection: true,
                            width: 280, height: 25});
                    }
                } else {
                    var response = "";
                    //$("#reasonDialog").html("");
                    var rejectData = $("#rejTypesData").val();
                    console.log(rejectData);
                    response += "<div id='textReason'>";
                    response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                    $("#textReason").html("");
                    $("#dialog2").html(response);
                }

            }
            $("#dialog2").dialog({ resizable: false,
                title: "Rejection Reason",
                modal: true,
                height: 'auto',
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            var retReasonText = "";
                            var returnReason = "";
                            var checkBoxdata = "";
                            if (rejectType == 0) {
                                var textBoxData = $("#reasonId").val();
                                retReasonText = textBoxData;
                            } else if (rejectType == 1) {
                                var selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                                for (var i = 0; i < selectReason.length; i++)
                                {
                                    checkBoxdata += selectReason[i].value;
                                    checkBoxdata += ",";
                                }
                                if (checkBoxdata != null && checkBoxdata != '')
                                {
                                    var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                    retReasonText = returnReason;
                                }
                            } else if (rejectType == 4) {
                                if (RejectionCheckBoxFlag != null && RejectionCheckBoxFlag != '') {
                                    var selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                                    for (var i = 0; i < selectReason.length; i++)
                                    {
                                        checkBoxdata += selectReason[i].value;
                                        checkBoxdata += ",";
                                    }
                                    if (checkBoxdata != null && checkBoxdata != '')
                                    {
                                        var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                        retReasonText = returnReason;
                                        var textBoxData = $("#reasonId").val();
                                        if (textBoxData != null && textBoxData != '')
                                        {
                                            retReasonText = returnReason + ", " + textBoxData;
                                        }
                                    }
                                } else
                                {
                                    var textBoxData = $("#reasonId").val();
                                    if (textBoxData != null && textBoxData != '')
                                    {
                                        retReasonText = textBoxData;
                                    }
                                }
                            } else {
                                rejCommentSubmit(retReasonText, selectedRowData, newBusinessStatus);
                            }
                            if (!retReasonText)
                            {
                                $("#dailog_error_id").show();
                            } else if (retReasonText != null)
                            {
                                $("#dailog_error_id").hide();
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                rejCommentSubmit(retReasonText, selectedRowData, newBusinessStatus);
                            } else
                            {

                                var returnReason = selectReason;
                                console.log("returnReason:::" + returnReason);
                                if (returnReason == '' && returnReason == null)
                                {
                                    $("#dailog_error_id").show();
                                }
                                //returnReason = returnReason.trim();
                                if (returnReason != '' && returnReason != null) {
                                    $("#dailog_error_id").hide();
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                } else
                                {
                                    $("#dailog_error_id").show();
                                }
                            }
                            showLoader();
                        }},

                    {
                        text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            // $("#labeld").empty();

                        }

                    }],
                open: function () {
                     //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        } else {

            if (processFlag) {
                // first need to call update actions 
                processConsolidationAction('N');

                $.ajax({
                    type: 'POST',
                    // async: false,
                    url: 'updateConsolidationResGroupStatus',
                    data: {
                        selectedRowData: JSON.stringify(selectedRowData),
                        businessStatus: newBusinessStatus
                    },
                    traditional: true,
                    dataType: 'html',
                    beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                        showLoader();
                    }, loadError: function (xhr, status, error) {
                        stopLoader();
                        throw new Error(error);
                    }, loadComplete: function (data)
                    {
                        stopLoader();
                    },
                    success: function (response) {
                        searchConsolidation();

                    },
                    error: function (e) {
                        sessionTimeout(e);
                    }

                });
            } else {
                var message = "Business Status not Updated:Master/Superseded action need to be done."
                $("#dialog").html((labelObject[message] != null ? labelObject[message] : message));
                $("#dialog").dialog({ resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                searchConsolidation();
                            }
                        }],
                    open: function () {
                         //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                        //                                    location.reload();

                    }
                });
            }

        }
    }// if (selectedrowindexes != null && selectedrowindexes.length != 0)
    else {
        $("#dialog").html((labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process'));
        $("#dialog").dialog({ resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }],
            open: function () {
                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
                //                                    location.reload();

            }
        });
    }
}
function checkingActions(id, index, columnName) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#selection_" + index).attr("checked", true);
    $("#select_all").prop("indeterminate", true);
    var totalDataCount = $("#" + id).attr("data-totalcount");
    var selectedVal = $("#" + id).val();
    var selectedGroup = $("#hidden_PDR_GROUP_" + index).val();
    var selectedGroupCount = $("#hidden_PDR_GROUP_COUNT_" + index).val();
    var successflag = true;
    if (selectedVal != null && selectedVal !== 'NON DUPLICATE') {
        $("#selection_" + index).removeAttr("disabled");
    }
    if (selectedVal != null && selectedVal == 'MASTER') {




        $("#hidden_" + id).val(selectedVal);

        if (totalDataCount != null && parseInt(totalDataCount) != 0) {

            for (var i = 0; i < parseInt(totalDataCount); i++) {

                if (i == 0) {
                    $("#CONSOLIDATION_ACTION_" + i).val("DELETE");
                    $("#selection_" + i).attr("checked", true);
                } else {
                    if (!(i == index && selectedVal == "MASTER")) {
                        $("#CONSOLIDATION_ACTION_" + i).val("NON DUPLICATE");
                        $("#selection_" + i).attr("checked", true);
                    } 
                }
                if(i==totalDataCount){
                    break;
                }


                if (i != index && $("#" + columnName + "_" + i).val() != null
                        && $("#" + columnName + "_" + i).val() == 'MASTER'
                        && selectedGroup != null && selectedGroup == $("#hidden_PDR_GROUP_" + i).val()
                        ) {
                    successflag = false;
                    var oldVal = $("#hidden_" + id).val();
                    $("#" + id).val(oldVal);
                    var actionMessage = "Master already selected for other record in this Group";
                    openActionDialog(actionMessage);

                    break;
                }

            }
//            if (successflag) {
//                var promptMessage = "Please select the appropriate Superseded material from the Group";
//                openActionDialog(promptMessage);
//            }
        }

    } else if (selectedVal != null && selectedVal == 'SUPERSEDED') {
        if (totalDataCount != null && parseInt(totalDataCount) != 0) {
            var supersedeCount = 1;
            for (var i = 0; i < parseInt(totalDataCount); i++) {
                if (i != index && selectedGroup != null && selectedGroup == $("#hidden_PDR_GROUP_" + i).val()
                        && $("#" + columnName + "_" + i).val() == 'SUPERSEDED') {
                    supersedeCount++;
                }

            }
            if (supersedeCount == parseInt(selectedGroupCount)) {
                var oldVal = $("#hidden_" + id).val();
                $("#" + id).val(oldVal);
                successflag = false;
                var actionMessage = "One master should be available in this group";
                openActionDialog(actionMessage);
            }

        }
    }
    if (successflag) {
        $("#hidden_" + id).val(selectedVal);
    }
}
function processConsolidationAction(businessStatusUpdateFlag) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var datasizeCount = $("#processActionButton").attr("data-datasize");
    if (datasizeCount != null && parseInt(datasizeCount) != 0) {
        var selectedRowData = [];
        var columnsStr = $("#selectedGridObjColumns").val();
        var columns = JSON.parse(columnsStr);
        for (var i = 0; i < parseInt(datasizeCount); i++) {
            if ($("#selection_" + i).is(':checked')) {
                var actionObj = {};
                for (var j = 0; j < columns.length; j++) {
                    if (columns[j] != null && columns[j] != '') {
                        actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                        // actionObj['AUDIT_ID'] = $("#AUDIT_ID_" + i).html();
                    }
                }
//                actionObj['AUDIT_ID'] = $("#hidden_AUDIT_ID_" + i).val();
//                actionObj['CONSOLIDATION_ACTION'] = $("#CONSOLIDATION_ACTION_" + i).val();
                selectedRowData.push(actionObj);

            }

        }
        if (selectedRowData != null && selectedRowData.length != 0) {
            // updating Consolidation Action
            $.ajax({
                type: 'POST',
                // async: false,
                url: 'updateConsolidationAction',
                data: {
                    selectedRowData: JSON.stringify(selectedRowData)
                },
                traditional: true,
                dataType: 'html',
                beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                    showLoader();
                }, loadError: function (xhr, status, error) {
                    stopLoader();
                    throw new Error(error);
                }, loadComplete: function (data)
                {
                    stopLoader();
                },
                success: function (response) {
                    if (businessStatusUpdateFlag != 'N') {
                        searchConsolidation();
                    }


                },
                error: function (e) {
                    sessionTimeout(e);
                }

            });
        } else {
            var actionMessage = "Please select an option to process";
            openActionDialog(actionMessage);
        }
    }
}
function openActionDialog(actionMessage) {
    var pdrId = $("#pdrId").val();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dialogSplitMessage = dialogSplitIconText((labelObject[actionMessage] != null ? labelObject[actionMessage] : actionMessage), false);
    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({ resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 300,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            //                                    location.reload();

        }
    });
}
function slideSettings() {
//  $("#settings_panel").toggle(100)
    $('#settings_panel').toggle('slide', {direction: 'right'}, 500);
    $("#personalizeid").toggleClass("ui-icon-triangle-1-s");
    var slideSettingsInd = $("#accordion").attr("data-slidesettingsind");

}
function showHideConsolidationColumns(id, columnName) {
    //TR_
    if ($("#" + id).is(':checked')) {
        $("#TR_" + columnName).show();
    } else {
        $("#TR_" + columnName).hide();
    }
}
function createSubConsolidationGroup() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var consolidationDataSize = $("#consolidationDataSize").val();
    if (consolidationDataSize != null && parseInt(consolidationDataSize) >= 4) {
        var selectedRowData = [];
        var columnsStr = $("#selectedGridObjColumns").val();
        var columns = JSON.parse(columnsStr);
        for (var i = 0; i < parseInt(consolidationDataSize); i++) {
            if ($("#selection_" + i).is(':checked')) {
                var actionObj = {};
                for (var j = 0; j < columns.length; j++) {
                    if (columns[j] != null && columns[j] != '') {
                        actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                    }
                }
                selectedRowData.push(actionObj);

            }

        }
        if (selectedRowData != null && selectedRowData.length >= 4) {
            $.ajax({
                type: 'POST',
                // async: false,
                url: 'createSubConsolidationGroup',
                data: {
                    selectedRowData: JSON.stringify(selectedRowData)
                },
                traditional: true,
                dataType: 'html',
                beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                    showLoader();
                }, loadError: function (xhr, status, error) {
                    stopLoader();
                    throw new Error(error);
                }, loadComplete: function (data)
                {
                    stopLoader();
                },
                success: function (response) {
                    stopLoader();
                    if (response != null && response != '') {
                        var responseObj = JSON.parse(response);
                        var dialogSplitMessage = dialogSplitIconText((labelObject[responseObj['message']] != null ? labelObject[responseObj['message']] : responseObj['message']), false);
                        $("#dialog").html(dialogSplitMessage);
                        $("#dialog").dialog({ resizable: false,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            modal: true,
                            height: 'auto',
                            minHeight: 'auto',
                            minWidth: 300,
                            maxWidth: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        if (responseObj['messageFlag']) {
                                            searchConsolidation();
                                        }
                                    }
                                }],
                            open: function () {
                                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");
                            },
                            beforeClose: function (event, ui)
                            {
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                                //                                    location.reload();

                            }
                        });
                    }

                },
                error: function (e) {
                    sessionTimeout(e);
                }

            });
        } else {
            openActionDialog("Please choose at least 4 records to create sub group");
        }
    } else {
        openActionDialog("Sorry the sub group will not create due to less records");
    }
}
function rejCommentSubmit(retReasonText, selectedRowData, newBusinessStatus) {
    $.ajax({
        type: 'POST',
        url: 'updateConsolidationResGroupStatus',
        data: {
            retReasonText: retReasonText,
            selectedRowData: JSON.stringify(selectedRowData),
            businessStatus: newBusinessStatus
        },
        traditional: true,
        dataType: 'html',
        beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            showLoader();
        }, loadError: function (xhr, status, error) {
            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
            stopLoader();
        },
        success: function (response) {
            console.log('response ==> ' + response);
            searchConsolidation();
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function searchConsolidation() {
    showLoader();
    console.log("Search");
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var basicData = {};
    $("#mat_creation_form_table :input").each(function () {

        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        var textval = $(this).val();
        if (type != 'hidden') {
            if (textval != null && textval != '') {
                textval = textval.toUpperCase();
            }

        }
        if (type != null && type == 'checkbox') {//
            if ($("#" + textid).is(':checked')) {
                textval = "Y";
            } else {
                textval = "N";
            }
        }
        //   var controlType = "controlType";
        var commentVal = $("#rejColumn").val();
        var rejColumn = "rejColumn";
        var rejectComment = "rejectComment";
        var ACCEPT_COMMENT = "ACCEPT_COMMENT";
        var customizedData = "customizedData";
        if (textid != null && textid != 'CREATE_DATE' && textid != 'CREATE_BY') {
            basicData[textid] = textval;
            basicData[rejColumn] = commentVal;
        }
        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
            var columnNames = $("#" + textid).val();
            var columnsArray = columnNames.split(",");
            var hiddenIds = textid.split("HIDDEN_");
            // ////////alert("hiddenIds:::" + hiddenIds);
            console.log("textid::::" + textid);
            var hiddenVal = $("#" + hiddenIds[1]).val();
            for (var i = 0; i < columnsArray.length; i++) {
                if (hiddenVal != null) {
                    hiddenVal = hiddenVal.toUpperCase();
                }
                basicData[columnsArray[i]] = hiddenVal;
            }
        }
    });
    var headerFioriFlag = $("#cb-switch").is(":checked");
    if (headerFioriFlag) {
        $('.fioriFormButtongroup').find("input").each(function () {

            var textid = $(this).attr("id");
            var type = $(this).attr("type");
            var textval = $(this).val();
            if (type != 'hidden') {
                if (textval != null && textval != '') {
                    textval = textval.toUpperCase();
                }

            }
            if (type != null && type == 'checkbox') {//
                if ($("#" + textid).is(':checked')) {
                    textval = "Y";
                } else {
                    textval = "N";
                }
            }
            //   var controlType = "controlType";
            var commentVal = $("#rejColumn").val();
            var rejColumn = "rejColumn";
            var rejectComment = "rejectComment";
            var ACCEPT_COMMENT = "ACCEPT_COMMENT";
            var customizedData = "customizedData";
            if (textid != null && textid != 'CREATE_DATE' && textid != 'CREATE_BY') {
                basicData[textid] = textval;
                basicData[rejColumn] = commentVal;
            }
            if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
                var columnNames = $("#" + textid).val();
                var columnsArray = columnNames.split(",");
                var hiddenIds = textid.split("HIDDEN_");
                // ////////alert("hiddenIds:::" + hiddenIds);
                console.log("textid::::" + textid);
                var hiddenVal = $("#" + hiddenIds[1]).val();
                for (var i = 0; i < columnsArray.length; i++) {
                    if (hiddenVal != null) {
                        hiddenVal = hiddenVal.toUpperCase();
                    }
                    basicData[columnsArray[i]] = hiddenVal;
                }
            }
        });
    }
    $("#basicDataObjHidden").val(JSON.stringify(basicData));
    var pdrType = $("#TYPE1_FLAG").val();
    var drIds = $("#DR_ID1").val();
    console.log(pdrType + "::::310::::::::" + drIds);
    $.ajax({
        type: "post",
        url: "consolidationResolutionGridObj",
        cache: false,
        data: {
            'basicData': JSON.stringify(basicData)
        },
        traditional: true,
        dataType: 'html',
        beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            showLoader();
        }, loadError: function (xhr, status, error) {
            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
            stopLoader();

        },
        success: function (response) {
            //    console.log("response:::" + response);
            if (response != null && response != '') {
                $("#comapreAccordion").remove();
                $("#comapreAccdiv").html("<div id=\"comapreAccordion\" class=\"accordianTabs\"></div>");
                $("#accordion").accordion({'active': 0});
                var gridResultObj = JSON.parse(response);
                $("#updateStatusSelect").html(gridResultObj['businessStatusString']); //businessStatusString
                $("#settings_panel").html(gridResultObj['personalizationData']);
                var pageSize = 10;
                var gridPropObj = gridResultObj['gridPropObj'];
                try {
                    var pagesizeoptions = gridPropObj['pagesizeoptions'];
                    pageSize = pagesizeoptions[0];
                } catch (e) {
                }
                $("#selectedGridObjColumns").val(JSON.stringify(gridResultObj['columnsArray']));
                consolidationResolutionGrid(basicData, gridResultObj, 0, pageSize, 30);
                $("#comapreAccdiv").html(gridResultObj['accordianStr']);

                $('.visionSearchPersonalise table').each(function () {

                    if ($(this).find('thead').length > 0 && $(this).find('th').length > 0) {
                        // Clone <thead>
                        var $w = $(window),
                                $t = $(this),
                                $thead = $t.find('thead').clone(),
                                $col = $t.find('thead, tbody').clone();
                        // Add class, remove margins, reset width and wrap table
                        $t
                                .addClass('sticky-enabled')
                                .css({
                                    margin: 0,
                                    width: '100%'
                                }).wrap('<div class="sticky-wrap" />');
                        if ($t.hasClass('overflow-y'))
                            $t.removeClass('overflow-y').parent().addClass('overflow-y');
                        // Create new sticky table head (basic)
                        $t.after('<table class="sticky-thead" />');
                        // If <tbody> contains <th>, then we create sticky column and intersect (advanced)
                        if ($t.find('tbody th').length > 0) {
                            $t.after('<table class="sticky-col" /><table class="sticky-intersect" />');
                        }

                        // Create shorthand for things
                        var $stickyHead = $(this).siblings('.sticky-thead'),
                                $stickyCol = $(this).siblings('.sticky-col'),
                                $stickyInsct = $(this).siblings('.sticky-intersect'),
                                $stickyWrap = $(this).parent('.sticky-wrap');
                        $stickyHead.append($thead);
                        $stickyCol
                                .append($col)
                                .find('thead th:gt(0)').remove()
                                .end()
                                .find('tbody td').remove();
                        $stickyInsct.html('<thead><tr><th>' + $t.find('thead th:first-child').html() + '</th></tr></thead>');
                        // Set widths
                        var setWidths = function () {
                            $t
                                    .find('thead th').each(function (i) {
                                $stickyHead.find('th').eq(i).width($(this).width());
                            })
                                    .end()
                                    .find('tr').each(function (i) {
                                $stickyCol.find('tr').eq(i).height($(this).height());
                            });
                            // Set width of sticky table head
                            $stickyHead.width("100%");
//                                        console.log($t.width());                                       
                            // Set width of sticky table col
                            $stickyCol.find('th').add($stickyInsct.find('th')).width($t.find('thead th').width())
                        },
                                repositionStickyHead = function () {
                                    // Return value of calculated allowance
                                    var allowance = calcAllowance();
                                    // Check if wrapper parent is overflowing along the y-axis
                                    if ($t.height() > $stickyWrap.height()) {
                                        // If it is overflowing (advanced layout)
                                        // Position sticky header based on wrapper scrollTop()
                                        if ($stickyWrap.scrollTop() > 0) {
                                            // When top of wrapping parent is out of view
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 1,
                                                top: $stickyWrap.scrollTop()
                                            });
//                                $(".visionHeaderMain").css("position", "absolute");
                                        } else {
                                            // When top of wrapping parent is in view
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 0,
                                                top: 0
                                            });
//                                $(".visionHeaderMain").css("position", "fixed");
                                        }
                                    } else {
                                        // If it is not overflowing (basic layout)
                                        // Position sticky header based on viewport scrollTop
                                        if ($w.scrollTop() > $t.offset().top && $w.scrollTop() < $t.offset().top + $t.outerHeight() - allowance) {
                                            // When top of viewport is in the table itself
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 1,
                                                top: $w.scrollTop() - $t.offset().top
                                            });
//                                $(".visionHeaderMain").css("position", "absolute");

                                        } else {
                                            // When top of viewport is above or below table
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 0,
                                                top: 0
                                            });
//                                $(".visionHeaderMain").css("position", "fixed");

                                        }
                                    }
                                },
                                repositionStickyCol = function () {
                                    if ($stickyWrap.scrollLeft() > 0) {
                                        // When left of wrapping parent is out of view
                                        $stickyCol.add($stickyInsct).css({
                                            opacity: 1,
                                            left: $stickyWrap.scrollLeft()
                                        });
                                    } else {
                                        // When left of wrapping parent is in view
                                        $stickyCol
                                                .css({opacity: 0})
                                                .add($stickyInsct).css({left: 0});
                                    }
                                },
                                calcAllowance = function () {
                                    var a = 0;
                                    // Calculate allowance
                                    $t.find('tbody tr:lt(3)').each(function () {
                                        a += $(this).height();
                                    });
                                    // Set fail safe limit (last three row might be too tall)
                                    // Set arbitrary limit at 0.25 of viewport height, or you can use an arbitrary pixel value
                                    if (a > $w.height() * 0.25) {
                                        a = $w.height() * 0.25;
                                    }

                                    // Add the height of sticky header
                                    a += $stickyHead.height();
                                    return a;
                                };
                        setWidths();
                        $t.parent('.sticky-wrap').scroll($.throttle(250, function () {
                            repositionStickyHead();
                            repositionStickyCol();
                        }));
//                        $w
//                                .load(setWidths)
//                                .resize($.debounce(250, function () {
//                                    setWidths();
//                                    repositionStickyHead();
//                                    repositionStickyCol();
//                                }))
//                                .scroll($.throttle(250, repositionStickyHead));
                    }
                });
                $(".accordianTabs").accordion({
                    theme: 'energyblue',
                    collapsible: true,
                    heightStyle: "content",
                    active: false,
                    autoHeight: false
                });
            }

        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}
function consolidationResolutionGrid(basicData, gridResultObj, recordstartindex, pagesize, recordendindex) {

    if (gridResultObj != null) {
        if (recordstartindex != null && parseInt(recordstartindex) != 0) {
            recordstartindex = parseInt(recordstartindex) - 1;
        }
        var paginationHidden = $("#paginationHidden").val();
        var gridPropObj = gridResultObj['gridPropObj'];
        var data = {
            gridId: gridResultObj['gridId'],
            colsArray: JSON.stringify(gridResultObj['columnsArray']),
            totalColumnsArray: JSON.stringify(gridResultObj['totalColumnsArray']),
            gridEditFlag: gridPropObj['GRID_EDIT_FLAG'],
            gridPropertyObj: JSON.stringify(gridPropObj),
            pagesizeoptions: JSON.stringify(gridPropObj['pagesizeoptions']),
            selectionmode: gridPropObj['SELECTION_TYPE'],
            tableName: gridPropObj['GRID_REF_TABLE'],
            columns: JSON.stringify(gridResultObj['columnListObj']),
            basicData: JSON.stringify(basicData),
            selectedCols: $("#selectedCols").val(),
            recordstartindex: recordstartindex,
            pagesize: pagesize,
            recordendindex: recordendindex,
            currentPage: $("#currentPage").val()
        };

        $.ajax({
            type: 'POST',
            url: 'consolidationResolutionGrid',
            data: data,
            //async: false,
            traditional: true,
            dataType: 'json',
            beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                showLoader();
            }, loadError: function (xhr, status, error) {
                stopLoader();
                throw new Error(error);
            }, loadComplete: function (data)
            {
                stopLoader();
            },
            success: function (response) {
                stopLoader();
                //var resultObj = JSON.parse(response);
//           $("#matrixGridDivId").show();
//           $("#matrixGridId").html(response['tabString']);
                if (response != null && response != '') {
//               var resultObj = JSON.parse(response);
                    $("#matrixGridDivId").show();
                    $("#matrixGridId").html(response['tabString']); //tabString
                    $("#matrixGridId").addClass('showTableData');
                    $("#resetConsolidation").show();
                    $("#processActionButton").show();
                    $("#createSubGroup").show();
                    $("#visionSearchExportButton").show();

                    var recordCount = response['recordCount'];
                    var dataSize = response['dataSize'];
                    $("#processActionButton").attr("data-datasize", dataSize);
                    $("#consolidationDataSize").val(response['dataSize']);
                    var actionsObj = response['actionsObj'];
                    if (actionsObj != null) {
                        $("#selectedGridActions").val(JSON.stringify(actionsObj));
                    }
                    var showRows = $("#showRows").val();
                    var totalPages = recordCount / showRows;
                    // var totalPages = 10;

                    var pageIndex = recordstartindex;
                    if (recordstartindex == 0) {
                        $("#visionPDRPaginationDiv").html(response['paginationStr']);
                        $("#showRowsDiv").html(response['pagesizeoptions']);
                        //totalPagesArray = resultObj['totalPagesArray'];
                        pageIndex = pageIndex + 1;
                        //pagesizeoptions
                    }
                    //  var currentPage = $("#currentPage").val();
                    // console.log(pageIndex+"::::::"+recordstartindex+":::::"+currentPage);
                    //  var paginationCountId = (pageIndex)+"-"+(pagesize*currentPage)+" of "+recordCount;
                    //console.log("paginationCountId::::"+paginationCountId);
                    $("#paginationCountId").html(response['paginationCountId']);
                    $("#basicDataObjHidden").val(JSON.stringify(basicData));
                    $("#nestedGridObjHidden").val(JSON.stringify(gridResultObj)); //nestedGridObj

                    $('#visionPDRMatrixTableId').dragtable({dragaccept: '.visionPDRTableColumnDrag'});
                    $(".hideRows").hide();
                    $(".hideChildRows").hide();
                    if (dataSize != null && parseInt(dataSize) != 0) {
                        for (var i = 0; i < parseInt(dataSize); i++) {
                            if ($("#CONSOLIDATION_ACTION_" + i).val() != null && $("#CONSOLIDATION_ACTION_" + i).val() == 'NON DUPLICATE') {
                                $("#selection_" + i).attr("disabled", "disabled");
                            }
                        }
                    }
                    $(".recordCheckBox").click(function () {
                        if ($(this).is(':checked')) {
                            $("#select_all").prop("indeterminate", true);
                        }
                    });
                }

            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    }

}
function compareresultsPaginationResolution(selectedButton, totalPages) {
    showLoader();
    var selectedPageNum = 0;
    var selectedPrev = selectedPageNum;
    var selectedNext = selectedPageNum;
    console.log(totalPages + ":::selectedPageNum::::" + selectedPageNum);
    var currentPageStr = $("#currentPage").val();
    var currentPage = parseInt(currentPageStr);
    console.log("currentPage:::::" + currentPage);
    if (selectedButton != null && selectedButton == 'P') {
        // selecting previoues
        console.log("You Selected << Button");
        selectedPageNum = currentPage - 1;
    }
    if (selectedButton != null && selectedButton == 'N') {
        // clicked next button
        console.log("You Selected >> Button");
        selectedPageNum = currentPage + 1;
    }
    var pagesize = $("#showRows").val();
    console.log("selectedPageNum::::" + selectedPageNum);
    console.log("pagesize::::" + pagesize);
    var recordstartindex = (selectedPageNum - 1) * pagesize + 1;
    //recordstartindex, pagesize, recordendindex
    var basicDataStr = $("#basicDataObjHidden").val();
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var basicData = JSON.parse(basicDataStr);
    if (selectedPageNum != 0 && selectedPageNum != (totalPages + 1) && selectedPageNum != currentPage) {
        $("#currentPage").val(selectedPageNum);
        consolidationResolutionGrid(basicData, nestedGridObj, recordstartindex, pagesize, 30);
    }
    stopLoader();
}
function showrowsResolution() {
    showLoader();
    var basicDataStr = $("#basicDataObjHidden").val();
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var basicData = JSON.parse(basicDataStr);
    var pagesize = $("#showRows").val();
    console.log("pagesize:::showrows::::" + pagesize);
    $("#currentPage").val(1);
    consolidationResolutionGrid(basicData, nestedGridObj, 0, pagesize, 30);
    stopLoader();
}
function navigateToconsolidationForm(selectedRowdata, basicData, nestedGridObj) {
    showLoader();
    //consolidationPlanGrid
    $.ajax({
        type: "post",
        url: "consolidationPlanGrid",
        cache: false,
        data: {
            'gridId': nestedGridObj['gridId'],
            'basicData': JSON.stringify(basicData),
            'selectedRowdata': JSON.stringify(selectedRowdata)
        },
        traditional: true,
        dataType: 'html',
        beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            showLoader();
        }, loadError: function (xhr, status, error) {
            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
            stopLoader();
        },
        success: function (response) {
            console.log("response:::" + response);
            if (response != null && response != '') {
                var gridResultObj = JSON.parse(response);
                var gridPropObj = gridResultObj['gridPropObj'];
                var pageSize = 10;
                try {
                    var pagesizeoptions = gridPropObj['pagesizeoptions'];
                    pageSize = pagesizeoptions[0];
                } catch (e) {
                }
                $("#settings_panel").html(gridResultObj['personalizationData']);
                console.log(pagesizeoptions + "::::::::");
                compareresults(gridResultObj, selectedRowdata, basicData, 0, pageSize, 30);
                $('.visionSearchPersonalise table').each(function () {

                    if ($(this).find('thead').length > 0 && $(this).find('th').length > 0) {
                        // Clone <thead>
                        var $w = $(window),
                                $t = $(this),
                                $thead = $t.find('thead').clone(),
                                $col = $t.find('thead, tbody').clone();
                        // Add class, remove margins, reset width and wrap table
                        $t
                                .addClass('sticky-enabled')
                                .css({
                                    margin: 0,
                                    width: '100%'
                                }).wrap('<div class="sticky-wrap" />');
                        if ($t.hasClass('overflow-y'))
                            $t.removeClass('overflow-y').parent().addClass('overflow-y');
                        // Create new sticky table head (basic)
                        $t.after('<table class="sticky-thead" />');
                        // If <tbody> contains <th>, then we create sticky column and intersect (advanced)
                        if ($t.find('tbody th').length > 0) {
                            $t.after('<table class="sticky-col" /><table class="sticky-intersect" />');
                        }

                        // Create shorthand for things
                        var $stickyHead = $(this).siblings('.sticky-thead'),
                                $stickyCol = $(this).siblings('.sticky-col'),
                                $stickyInsct = $(this).siblings('.sticky-intersect'),
                                $stickyWrap = $(this).parent('.sticky-wrap');
                        $stickyHead.append($thead);
                        $stickyCol
                                .append($col)
                                .find('thead th:gt(0)').remove()
                                .end()
                                .find('tbody td').remove();
                        $stickyInsct.html('<thead><tr><th>' + $t.find('thead th:first-child').html() + '</th></tr></thead>');
                        // Set widths
                        var setWidths = function () {
                            $t
                                    .find('thead th').each(function (i) {
                                $stickyHead.find('th').eq(i).width($(this).width());
                            })
                                    .end()
                                    .find('tr').each(function (i) {
                                $stickyCol.find('tr').eq(i).height($(this).height());
                            });
                            // Set width of sticky table head
                            $stickyHead.width("100%");
//                                        console.log($t.width());                                       
                            // Set width of sticky table col
                            $stickyCol.find('th').add($stickyInsct.find('th')).width($t.find('thead th').width())
                        },
                                repositionStickyHead = function () {
                                    // Return value of calculated allowance
                                    var allowance = calcAllowance();
                                    // Check if wrapper parent is overflowing along the y-axis
                                    if ($t.height() > $stickyWrap.height()) {
                                        // If it is overflowing (advanced layout)
                                        // Position sticky header based on wrapper scrollTop()
                                        if ($stickyWrap.scrollTop() > 0) {
                                            // When top of wrapping parent is out of view
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 1,
                                                top: $stickyWrap.scrollTop()
                                            });
//                                $(".visionHeaderMain").css("position", "absolute");
                                        } else {
                                            // When top of wrapping parent is in view
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 0,
                                                top: 0
                                            });
//                                $(".visionHeaderMain").css("position", "fixed");
                                        }
                                    } else {
                                        // If it is not overflowing (basic layout)
                                        // Position sticky header based on viewport scrollTop
                                        if ($w.scrollTop() > $t.offset().top && $w.scrollTop() < $t.offset().top + $t.outerHeight() - allowance) {
                                            // When top of viewport is in the table itself
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 1,
                                                top: $w.scrollTop() - $t.offset().top
                                            });
//                                $(".visionHeaderMain").css("position", "absolute");

                                        } else {
                                            // When top of viewport is above or below table
                                            $stickyHead.add($stickyInsct).css({
                                                opacity: 0,
                                                top: 0
                                            });
//                                $(".visionHeaderMain").css("position", "fixed");

                                        }
                                    }
                                },
                                repositionStickyCol = function () {
                                    if ($stickyWrap.scrollLeft() > 0) {
                                        // When left of wrapping parent is out of view
                                        $stickyCol.add($stickyInsct).css({
                                            opacity: 1,
                                            left: $stickyWrap.scrollLeft()
                                        });
                                    } else {
                                        // When left of wrapping parent is in view
                                        $stickyCol
                                                .css({opacity: 0})
                                                .add($stickyInsct).css({left: 0});
                                    }
                                },
                                calcAllowance = function () {
                                    var a = 0;
                                    // Calculate allowance
                                    $t.find('tbody tr:lt(3)').each(function () {
                                        a += $(this).height();
                                    });
                                    // Set fail safe limit (last three row might be too tall)
                                    // Set arbitrary limit at 0.25 of viewport height, or you can use an arbitrary pixel value
                                    if (a > $w.height() * 0.25) {
                                        a = $w.height() * 0.25;
                                    }

                                    // Add the height of sticky header
                                    a += $stickyHead.height();
                                    return a;
                                };
                        setWidths();
                        $t.parent('.sticky-wrap').scroll($.throttle(250, function () {
                            repositionStickyHead();
                            repositionStickyCol();
                        }));
                        $w
                                .load(setWidths)
                                .resize($.debounce(250, function () {
                                    setWidths();
                                    repositionStickyHead();
                                    repositionStickyCol();
                                }))
                                .scroll($.throttle(250, repositionStickyHead));
                    }
                });
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
//                }
    stopLoader();
}
function createPDRGroup() {
    showLoader();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var pdrId = $("#pdrId").val();
    var selectedrowindexes = $('#' + pdrId).jqxGrid('selectedrowindexes');

    if (selectedrowindexes != null && selectedrowindexes.length != 0 && selectedrowindexes[0] != -1) {
        var selectedRowdata = {};
//                    var selectedRowdata = $('#' + pdrId).jqxGrid('getrowdata',selectedrowindexes[selectedrowindexes.length-1]);
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + pdrId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex && selectedrowindexes[0] != null && selectedrowindexes[0] != -1) {
                    var selectedRowdata = $('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[0]);
                } else {
                    var selectedRowdata = $('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[selectedrowindexes.length - 1]);
                }
            }
        }
//                        var selectedRowdata = $('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[0]);
        var basicDataStr = $("#basicDataObjHidden").val();
        $.ajax({
            type: 'POST',
            // async: false,
            url: 'createPDRGroup',
            data: {
                selectedGridData: JSON.stringify(selectedRowdata),
                basicData: basicDataStr

            },
            traditional: true,
            dataType: 'html',
            beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                callStartAjax();
                showLoader();
            }, loadError: function (xhr, status, error) {
//                callEndAjax();
                showLoader();
                throw new Error(error);
            }, loadComplete: function (data)
            {
//                callEndAjax();
                showLoader();
            },
            success: function (response) {
                stopLoader();
                if (response != null && response != '') {
                    //  callEndAjax();
                    var responseObj = JSON.parse(response);
                    $("#dialog").html((labelObject[responseObj['message']] != null ? labelObject[responseObj['message']] : responseObj['message']));
                    $("#dialog").dialog({ resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        height: 'auto',
                        minHeight: 'auto',
                        minWidth: 300,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    callEndAjax();
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }
                            }],
                        open: function () {
                             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                            //                                    location.reload();

                        }
                    });
                    //callEndAjax();
                }

            },
            error: function (e) {
                // callEndAjax();
                stopLoader();
                sessionTimeout(e);
            }

        });
        //  callEndAjax();
    } else {
        stopLoader();
        $("#dialog").html((labelObject['Please Select Atleast one Record'] != null ? labelObject['Please Select Atleast one Record'] : 'Please Select Atleast one Record'));
        $("#dialog").dialog({ resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }],
            open: function () {
                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
                //                                    location.reload();

            }
        });
    }

//                callEndAjax();
}
function importDeDuplication() {

    console.log("importDeDuplication::::");
    $("#importDeDuplicationId").ajaxfileupload({
        'action': "deDuplcationImportFile",
        params: {
            pdrType: $("#PDR_TYPE").val()
        },
        valid_extensions: ['xls', 'xlsx', 'XLS', 'XLSX'],
        'onComplete': function (response) {
            stopLoader();
            if (response != null && response['message']) {
                var importButtonCode = "<input type=\"button\" "
                        + " value=\"Import\" "
                        + " class=\"visionSearchImport\" "
                        + " onclick=\"javascript:importDeDuplication();\"/>"
                        + "  <input id='importDeDuplicationId' type=\"file\" name='file' style=\"display: none\"/>";
                $("#importDeDuplicationDiv").html(importButtonCode);
                searchPDR('Y');
//                            searchPdrImport();

            }
//                        $("body").css({"pointer-events": "auto"});
        },
        'onStart': function () {
            showLoader();
            // $('#message').hide();
        }
    });
    $("#importDeDuplicationId").click();
}
function searchPdrImport() {
    var pdrInitParamsStr = $("#pdrInitParams").val();
    var importGridids = "MM_PDR_GROUPS_MGR";
    var pdrInitParams = {};
    try {
        if (pdrInitParamsStr != null && pdrInitParamsStr != "" && pdrInitParamsStr != undefined
                && pdrInitParamsStr.includes("&")) {
            var pdrInitParamsArray = pdrInitParamsStr.split("&");
            for (var i = 0; i < pdrInitParamsArray.length; i++)
                if (pdrInitParamsArray[i] != null && pdrInitParamsArray[i] != '' && typeof pdrInitParamsArray[i] != 'undefined') {
                    if (pdrInitParamsArray[i].indexOf("=") > -1) {
                        var paramArray = pdrInitParamsArray[i].split("=");
                        pdrInitParams[paramArray[0]] = paramArray[1];
                    }

                }

        } else {
            pdrInitParams = JSON.parse(pdrInitParamsStr);
        }
        if (pdrInitParams != null && !jQuery.isEmptyObject(pdrInitParams)
                && pdrInitParams['importGridids'] != null && pdrInitParams['importGridids'] != ""
                && pdrInitParams['importGridids'] != undefined
                ) {
            importGridids = pdrInitParams['importGridids'];
        }
    } catch (e) {
    }

    $.ajax({
        type: 'POST',
        // async: false,
        url: 'searchImportPDR',
        data: {
            importGridids: importGridids,
            pdrType: $("#PDR_TYPE").val()
        },
        traditional: true,
        dataType: 'html',
        beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            showLoader();
        }, loadError: function (xhr, status, error) {
            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
            stopLoader();
        },
        success: function (response) {
            if (response != null && response != '') {
                //importDeDuplicationDiv
                var importButtonCode = "<input type=\"button\" "
                        + " value=\"Import\" "
                        + " class=\"visionSearchImport\" "
                        + " onclick=\"javascript:importDeDuplication();\"/>"
                        + "  <input id='importDeDuplicationId' type=\"file\" name='file' style=\"display: none\"/>";
                $("#importDeDuplicationDiv").html(importButtonCode);
                $("#accordion").accordion({'active': 0});
                var responseObj = JSON.parse(response);
                var basicData = {};
                smartConsolidationGridConfig(responseObj, basicData, 'N', 'Y');
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function searchPDR(importFlag) {
    showLoader();
    console.log("Search");
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var basicData = {};
    $("#mat_creation_form_table :input").each(function () {

        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        var textval = $(this).val();
        if (type != null && type != 'hidden') {
            textval = textval.toUpperCase();
        }
        if (type != null && type == 'checkbox') {//
            if ($("#" + textid).is(':checked')) {
                textval = "Y";
            } else {
                textval = "N";
            }
        }
        //   var controlType = "controlType";
        var commentVal = $("#rejColumn").val();
        var rejColumn = "${labelobj['rejColumn'] != null ? labelobj['rejColumn'] :'rejColumn'}";
        var rejectComment = "${labelobj['rejectComment'] != null ? labelobj['rejectComment'] :'rejectComment'}";
        var ACCEPT_COMMENT = "${labelobj['ACCEPT_COMMENT'] != null ? labelobj['ACCEPT_COMMENT'] :'ACCEPT_COMMENT'}";
        var customizedData = "${labelobj['customizedData'] != null ? labelobj['customizedData'] :'customizedData'}";
        if (textid != null && textid != 'CREATE_DATE' && textid != 'CREATE_BY') {
            basicData[textid] = textval;
            basicData[rejColumn] = commentVal;
        }
        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
            var columnNames = $("#" + textid).val();
            var columnsArray = columnNames.split(",");
            var hiddenIds = textid.split("HIDDEN_");
            // ////////alert("hiddenIds:::" + hiddenIds);
            console.log("textid::::" + textid);
            var hiddenVal = $("#" + hiddenIds[1]).val();
            for (var i = 0; i < columnsArray.length; i++) {
                if (hiddenVal != null) {
                    hiddenVal = hiddenVal.toUpperCase();
                }
                basicData[columnsArray[i]] = hiddenVal;
            }
        }
    });
    var pdrType = $("#PDR_TYPE").val();
    var drIds = $("#DR_ID1").val();
    console.log(pdrType + "::::310::::::::" + drIds);
    var processFlag = true;
    if (pdrType != null && pdrType == 'TYPE2' && drIds != null && drIds.indexOf(",") > -1) {
        processFlag = false;
    }
    var gridIds = $("#gridId").val();
    if (gridIds != null && gridIds != '') {
        if (pdrType != null && pdrType == 'TYPE1') {
            basicData['gridId'] = gridIds.split(",")[0];
        } else {
            basicData['gridId'] = gridIds.split(",")[1];
        }
    }
    if (importFlag != null && importFlag != '' && importFlag == 'Y') {
        importFlag = "Y";
    } else {
        importFlag = "N";
    }
    console.log(processFlag + "::::basicData::::" + JSON.stringify(basicData));
    if (processFlag) {
        $.ajax({
            type: "post",
            url: "getPDRData",
            cache: false,
            data: {
                'basicData': JSON.stringify(basicData),
                importFlag: importFlag
            },
            traditional: true,
            dataType: 'html',
            beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                showLoader();
            }, loadError: function (xhr, status, error) {
                stopLoader();
                throw new Error(error);
            }, loadComplete: function (data)
            {
                stopLoader();
            },
            success: function (response) {
                console.log("response:::" + response);
                if (response != null && response != '') {
                    $("#accordion").accordion({'active': 0});
                    var gridResultObj = JSON.parse(response);
                    smartConsolidationGridConfig(gridResultObj, basicData, 'N', importFlag);
                }

            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    } else {
        var dialogSplitMessage = dialogSplitIconText((labelObject['Please Select One Class/Term at a time for Type 2 Duplicate Check'] != null ? labelObject['Please Select One Class/Term at a time for Type 2 Duplicate Check'] : "Please Select One Class/Term at a time for Type 2 Duplicate Check"), false);
        $("#dialog").html(dialogSplitMessage);
        $("#dialog").dialog({ resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }],
            open: function () {
                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
                //                                    location.reload();

            }
        });
    }
}// end searchPDR()
function resetPDR() {
    $("#matrixGridId").html("");
    var selectedCols = $("#selectedCols").val();
    $("#mat_creation_form_table :input").each(function () {

        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        var textval = $(this).val();
        var rangeTextId = textid;
        if (rangeTextId.indexOf("_FROM") > -1 || rangeTextId.indexOf("_TO") > -1) {
            rangeTextId = rangeTextId.replace("_FROM", "");
            rangeTextId = rangeTextId.replace("_TO", "");
        }
        if (selectedCols != null
                && (selectedCols.indexOf(textid) > -1
                        || selectedCols.indexOf(rangeTextId) > -1
                        || selectedCols.indexOf(rangeTextId) > -1)
                ) {
            if (textid == 'PDR_TYPE') {
                this.value = "TYPE1";
            } else if (textid == 'PERCENTAGE') {
                this.value = "100";
            } else {
                this.value = "";
            }
        }
        if (textid == 'CREATE_DATE_FROM'
                || textid == 'CREATE_DATE_TO') {
            this.value = "";

        }
        if (textid == 'PERCENTAGE_FROM'
                || textid == 'PERCENTAGE_TO'
                || textid == 'PERC_TO'
                || textid == 'PERC_FROM'
                ) {
            this.value = "100";

        }
    });
}//resetPDR()
function viewPDRCriteria() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var allStr = (labelObject['ALL'] != null ? labelObject['ALL'] : "ALL");
    var selectedCols = $("#selectedCols").val();
    var selectedColsLabels = $("#selectedColsLabels").val();
    console.log("selectedColsLabels::::" + selectedColsLabels);
    var selectedColsLabelsObj = selectedColsLabels.split(",");
    var result = "<div class=''><div class=''><table class=''>";
    if (selectedColsLabelsObj != null) {
        for (var i = 0; i < selectedColsLabelsObj.length; i++) {
            console.log("colName:265::" + colName);
            var colNameStr = selectedColsLabelsObj[i];
            var colName = colNameStr.split("::");
            if (colName[0] != null && colName[0] != '') {
                var defaultVal = allStr;
                if (colName[0].indexOf("PERCENTAGE") > -1) {
                    defaultVal = "100";
                }
                if (colName[2] == 'RG') {

                    result += "<tr>"
                            + "<th class=''>" + (labelObject[colName[1]] != null ? labelObject[colName[1]] : colName[1]) + ":</th>"
                            + "<td class=''>" + (($("#" + colName[0] + "_FROM").val() != '' ? $("#" + colName[0] + "_FROM").val() : defaultVal)
                                    + " " + (labelObject['TO'] != null ? labelObject['TO'] : 'TO')
                                    + " " + ($("#" + colName[0] + "_TO").val() != '' ? $("#" + colName[0] + "_TO").val() : defaultVal)) + "</td>"
                            + "</tr>";
                } else {
                    result += "<tr>"
                            + "<th class=''>" + (labelObject[colName[1]] != null ? labelObject[colName[1]] : colName[1]) + ":</th>"
                            + "<td class=''>" + ($("#" + colName[0]).val() != '' ? $("#" + colName[0]).val() : defaultVal) + "</td>"
                            + "</tr>";
                }

            }
        }
    }
    result += "</table></div></div>";

    $("#dialog").html(result);
    $("#dialog").dialog({ resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 400,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            //                                    location.reload();

        }
    });
}
function fetchPDRGroups() {

    var pdrId = $("#pdrId").val();
    var pdrInitParamsStr = $("#pdrInitParams").val();
    var pdrGroupGridId = "MM_PDR_GROUPS_MGR";
    var pdrInitParams = {};
    try {
        if (pdrInitParamsStr != null && pdrInitParamsStr != "" && pdrInitParamsStr != undefined
                && pdrInitParamsStr.includes("&")) {
            var pdrInitParamsArray = pdrInitParamsStr.split("&");
            for (var i = 0; i < pdrInitParamsArray.length; i++)
                if (pdrInitParamsArray[i] != null && pdrInitParamsArray[i] != '' && typeof pdrInitParamsArray[i] != 'undefined') {
                    if (pdrInitParamsArray[i].indexOf("=") > -1) {
                        var paramArray = pdrInitParamsArray[i].split("=");
                        pdrInitParams[paramArray[0]] = paramArray[1];
                    }

                }

        } else {
            pdrInitParams = JSON.parse(pdrInitParamsStr);
        }
        if (pdrInitParams != null && !jQuery.isEmptyObject(pdrInitParams)
                && pdrInitParams['groupGridId'] != null && pdrInitParams['groupGridId'] != ""
                && pdrInitParams['groupGridId'] != undefined
                ) {
            pdrGroupGridId = pdrInitParams['groupGridId'];
        }
    } catch (e) {
    }


//    try {
//        pdrInitParams = JSON.parse(pdrInitParamsStr);
////                     /groupGridId
//        pdrGroupGridId = pdrInitParams['groupGridId'];
//    } catch (e) {
//    }

    $.ajax({
        type: 'POST',
        // async: false,
        url: 'fetchPDRGroups',
        data: {
            pdrGroupGridId: pdrGroupGridId

        },
        traditional: true,
        dataType: 'html',
        beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            showLoader();
        }, loadError: function (xhr, status, error) {
            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
            stopLoader();
        },
        success: function (response) {
            if (response != null && response != '') {
                var pdrGroupGridObj = JSON.parse(response);
                var basicData = {};
                smartConsolidationGridConfig(pdrGroupGridObj, basicData, 'Y', 'N');
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}

function exportPlanConsolidationData() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var gridId = "";
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var columns = [];
    if (nestedGridObj != null) {
        gridId = nestedGridObj['gridId'];
        columns = nestedGridObj['columnsArray'];
    }
//    var consolidationDataSize = $("#consolidationDataSize").val();
    var consolidationDataSize = $("#updateActionButton").attr("data-datasize");
    if (consolidationDataSize != null && parseInt(consolidationDataSize) != 0) {
        var selectedRowData = [];
        for (var i = 0; i < parseInt(consolidationDataSize); i++) {
            if ($("#selection_" + i).is(':checked')) {
                var actionObj = {};
                for (var j = 0; j < columns.length; j++) {
                    if (columns[j] != null && columns[j] != '') {
                        actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                    }
                }
                selectedRowData.push(actionObj);
            }

        }
        if (selectedRowData != null && selectedRowData.length != 0) {

            $("#exportConsolidationGridId").val(gridId);
            $("#selectedRowData").val(JSON.stringify(selectedRowData));
            $("#exportConsolidationForm").attr("action", "consolidationExport");
            $("#exportConsolidationForm").attr("target", "_blank");
            $("#exportConsolidationForm").submit();
        } else {
            openPlanActionDialog("Please select an option to process");
        }
    } else {
        openPlanActionDialog("Please select an option to process");
    }

}
function openPlanActionDialog(actionMessage) {
    var pdrId = $("#pdrId").val();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dialogSplitMessage = dialogSplitIconText((labelObject[actionMessage] != null ? labelObject[actionMessage] : actionMessage), false);
    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({ resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 300,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            //                                    location.reload();

        }
    });
}
$(document).ready(function () {
    $(document).mouseup(function (e)
    {
        var container = $("#settings_panel");
        var container1 = $(".personaliseoption");
        if ((!container.is(e.target)
                && container.has(e.target).length === 0)
                && (!container1.is(e.target)
                        && container1.has(e.target).length === 0)
                )
        {
            $(container).hide();
            $("#personalizeid").toggleClass("ui-icon-triangle-1-s");
        }
    });
});
function getConsolidationExportType(selectedGridId)
{
    var exportType = $('#export' + selectedGridId).val();
    if (exportType == "CSV")
    {
        $("input.exportClass").css('background', '#fff url("images/export_as_csv_icon_blue.png") no-repeat 5px center');
        $("input.exportClass").hover(
                function () {
                    $("input.exportClass").css('background', '#0071c5 url("images/export_as_csv_icon_white.png") no-repeat 5px center', 'important');
                }, function () {
            $("input.exportClass").css('background', '#fff url("images/export_as_csv_icon_blue.png") no-repeat 5px center', 'important');
        });
        var exportvalue = "yes";
        $("#excelExport" + selectedGridId).attr("disabled", false);
    } else if (exportType == "Xlsx" || exportType == "Xls")
    {
        $("input.exportClass").css('background', '#fff url("images/export_as_xlsx_icon_blue.png")  no-repeat 5px center', 'important');
        $("input.exportClass").hover(
                function () {
                    $("input.exportClass").css('background', '#0071c5 url("images/export_as_xls_white.png")  no-repeat 5px center', 'important');
                }, function () {
            $("input.exportClass").css('background', '#fff url("images/export_as_xlsx_icon_blue.png")  no-repeat 5px center', 'important');
        });
        var exportvalue = "yes";
        $("#excelExport" + selectedGridId).attr("disabled", false);
    } else if ((exportType == "PDF"))
    {
        $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
        $("input.exportClass").hover(
                function () {
                    $("input.exportClass").css('background', '#0071c5 url("images/export_icon_white.png")  no-repeat 5px center', 'important');
                }, function () {
            $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
        });
        $("#excelExport" + selectedGridId).attr("disabled", false);
    } else if ((exportType == "XML"))
    {
        $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png") no-repeat 5px center');
        $("input.exportClass").hover(
                function () {
                    $("input.exportClass").css('background', '#0071c5 url("images/export_icon_white.png") no-repeat 5px center', 'important');
                }, function () {
            $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png") no-repeat 5px center', 'important');
        });
        var exportvalue = "yes";
        $("#excelExport" + selectedGridId).attr("disabled", false);
    } else {
        $("#excelExport" + selectedGridId).attr("disabled", true);
    }
}
function finalConsolidationDataExport()
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var gridId = $("#pdrId").val();
    //   var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    var dataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes.length != 0)
    {
        var exportType = $('#export' + gridId).val();
        if (exportType == '')
        {
            $("#dialog1").html(labelObject['Please select an option to Export Process'] != null ? labelObject['Please select an option to Export Process'] : 'Please select an option to Export Process');
            $("#dialog1").dialog({ resizable: false,
                title: labelObject['Export Record(s)'] != null ? labelObject['Export Record(s)'] : 'Export Record(s)',
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }

                    }],
                open: function ()
                {
                     //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        } else
        {
            // need to write Selected data export
            exportConsolidationDataProcess(gridId, 'selected');
        }
    } else
    {
        var exportRangeVal = $("#ssExportRange").val();
        var exportRangeCount = $("#ssExportCount").val();
        if (exportRangeVal != null && exportRangeVal != '' && exportRangeVal == 'Y')
        {
            if (!(exportRangeCount != null && exportRangeCount != '' && exportRangeCount != 0))

            {
                exportRangeCount = 20000;
            }
            $("#exportRangeCount").val(exportRangeCount);
            var sourceex = $('#' + gridId).jqxGrid('source');
            var totalRecords = sourceex.totalrecords;
            console.log('totalRecords:::' + totalRecords);
            var exportMesg = "<div>Select Records to Export:<select id='exportRecordsCount'>";
            if (parseInt(totalRecords) != 0 && parseInt(totalRecords) <= exportRangeCount) {
                exportMesg += "<option value='0'>1-" + totalRecords.toLocaleString() + "</option>";
            } else {

                var totalPages = parseFloat((parseInt(totalRecords) / exportRangeCount));
                var totalPagesForInt = parseInt((parseInt(totalRecords) / exportRangeCount));
                var finalPages = totalPages - totalPagesForInt;
                var j = 0;
                var i = 0;
                if (!(finalPages != null && finalPages != '' && finalPages != 0)) {
                    for (i = 0; i < totalPages; i++) {
                        exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
                    }
                } else {
                    for (i = 0; i < totalPages - 1; i++) {
                        exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
                    }
                }
//                                for (i = 0; i < totalPages; i++) {
//                                    exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
//                                }
                var lastRecords = totalPages - totalPagesForInt;
                if (lastRecords != null && lastRecords != '' && lastRecords != 0) {
                    exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + totalRecords.toLocaleString() + "</option>"
                }

            }

//                else {
//                                var totalPages = parseInt((parseInt(totalRecords) / 20000)) + 1;
//                                var j = 0;
//                                for (var i = 0; i < totalPages; i++) {
//                                    exportMesg += "<option value='" + ((i * 20000) + 1) + "'>" + ((i * 20000) + 1).toLocaleString() + " - " + ((i + 1) * 20000).toLocaleString() + "</option>";
//                                }
//                            }
            exportMesg += "</select></div>";
            $("#dialog1").html(exportMesg);
            // $("#dialog1").html((labelObject['Do you want to export all records'] != null ? labelObject['Do you want to export all records'] : 'Do you want to export all records') + "?");
            $("#dialog1").dialog({ resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes',
                        click: function () {
                            $("#exportRange").val($("#exportRecordsCount").val());
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            // need to write all data export
                            exportConsolidationDataProcess(gridId, 'all');
                        }
                    },
                    {
                        text: labelObject['No'] != null ? labelObject['No'] : 'No',
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }],
                open: function () {
                     //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        } else
        {
            exportConsolidationDataProcess(gridId, 'all');
        }

    }
}
function exportConsolidationDataProcess(gridId, selectType) {
    var ssExportColFlag = $("#ssExportColFlag").val();
    var GridObjStr = $("#searchResultsGridObjHidden").val(); //nestedGridObj
    var GridObj = JSON.parse(GridObjStr);
    $("#selectType").val(selectType);
    gridId = GridObj['gridId'];
    var exportType = $('#export' + gridId).val();
    alert(selectType + ":::exportType:::" + exportType);
    if (exportType != null) {
        if (selectType != null && selectType == 'selected') {

            if (ssExportColFlag != null && ssExportColFlag != '' && ssExportColFlag == 'Y') {
                exportSelectedColsConsolidationDataProcess(gridId, selectType);
            } else {

                var exportJson = {};
                exportJson['headers'] = GridObj.columns;
                //exportJson['headers'] = fieldsArray;
                var selectedRowsData = [];
                var pdrId = $("#pdrId").val();
                var selectedrowindexes = $('#' + pdrId).jqxGrid('selectedrowindexes');
                if (selectedrowindexes.length != 0) {
                    var totalRowIndex = selectedrowindexes.length;
                    var count = 0;
                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                    if (datainformations != null) {
                        var paginginformation = datainformations['paginginformation'];
                        if (paginginformation != null) {
                            var pagesize = paginginformation['pagesize'];
                            var pagenum = paginginformation.pagenum;
                            if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                                totalRowIndex = parseInt(pagesize);
                                if (pagenum != null && pagenum > 0) {
                                    count = pagenum * pagesize;
                                    totalRowIndex = count + pagesize;
                                }
                            }

                        }
                    }

                    for (var i = count; i < totalRowIndex; i++) {
                        selectedRowsData.push($('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[i]));
                    }
                    exportJson['data'] = selectedRowsData;
                    $('#downloadDatajsonData').val(JSON.stringify(exportJson));
                    consolidationDataprocessExportRequest(gridId, exportType);
                }// end if
            }
        } else {

            $("#selectType").val(selectType);
            if (ssExportColFlag != null && ssExportColFlag != '' && ssExportColFlag == 'Y') {
                exportSelectedColsConsolidationDataProcess(gridId, selectType);
            } else {

                var exportJson = {};
                exportJson['headers'] = GridObj.columns;
                // exportJson['headers'] = fieldsArray;
                // exportJson['data'] = rowsData;
                $('#downloadDatajsonData').val(JSON.stringify(exportJson));
                consolidationDataprocessExportRequest(gridId, exportType);
            }
            //  var data = 

        }
    } else {
        alert(":::exportType::Not selected:");
    }


}// end of the function
function exportSelectedColsConsolidationDataProcess(gridId, selectType) {
    // var gridIds = $("#gridId").val();
    var GridObjStr = $("#searchResultsGridObjHidden").val(); //nestedGridObj
    var GridObj = JSON.parse(GridObjStr);
    var gridId = GridObj['gridId'];
    var exportType = $('#export' + gridId).val();
    var ssExportColFlag = $("#ssExportColFlag").val();
    if (ssExportColFlag != null && ssExportColFlag != '' && ssExportColFlag == 'Y') {
        var GridObjStr = $("#searchResultsGridObjHidden").val(); //nestedGridObj
        var GridObj = JSON.parse(GridObjStr);
        var fieldsData = GridObj.columns;
        var fieldsArray = new Array();
        fieldsArray = GridObj.columns;
        var inputString = "<div><table id ='gridColumns' border='1' style='width:100%;' class='gridImportColumns'><tr><td><input type='checkbox' class ='visionSelectAllCheckBox' id='selectall' value='selectall' checked></td><td style='text-align:left'>All</td> </tr>";
        if (fieldsData != null && fieldsData != '') {
            for (var i = 0; i < fieldsData.length; i++) {
                var hiddenVal = fieldsData[i].hidden;
                if (fieldsData[i].text != null && fieldsData[i].text != '' &&
                        !(fieldsData[i].datafield.startsWith("HIDDEN_") || fieldsData[i].datafield.endsWith("_HIDDEN"))) {
                    //if (!(fieldsData[i].hidden) || !(hiddenVal)){
                    if (!(hiddenVal)) {
                        inputString += "<tr><td><input type='checkbox' class ='visionSelectCheckBox' id='" + fieldsData[i].datafield + "' value='" + fieldsData[i].text + "' checked></td>"
                                + "<td style='text-align:left'>" + fieldsData[i].text + "</td> </tr>";
                    }
                }
            }
            inputString += "</table></div>";
            console.log("inputString::::" + inputString);
        }
        $("#dialog").html(inputString);
        $("#dialog").dialog({ resizable: false,
            title: labelObject['Selected Grid Colums'] != null ? labelObject['Selected Grid Colums'] : 'Selected Grid Colums',
            modal: true,
            height: 300,
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        var checkBoxVals = $('.visionSelectCheckBox:checked').map(function () {
                            return this.value;
                        }).get();
                        var GridObjStr = $("#searchResultsGridObjHidden").val(); //nestedGridObj
                        var GridObj = JSON.parse(GridObjStr);
                        var headersArray = [];
                        if ($('#selectallCheck').is(':checked')) {
                            headersArray = GridObj.columns;
                        } else {
                            if (fieldsArray != null && fieldsArray != '') {
                                for (var i = 0; i < fieldsArray.length; i++) {
                                    for (var j = 0; j < checkBoxVals.length; j++) {
                                        if (fieldsArray[i].text == checkBoxVals[j])
                                            headersArray.push(fieldsArray[i]);
                                    }

                                }
                            }
                        }
                        if (selectType != null && selectType != '' && selectType == 'selected') {
                            var exportJson = {};
                            exportJson['headers'] = headersArray;
                            var selectedRowsData = [];
                            var pdrId = $("#pdrId").val();
                            var selectedrowindexes = $('#' + pdrId).jqxGrid('selectedrowindexes');
                            if (selectedrowindexes.length != 0) {
                                var totalRowIndex = selectedrowindexes.length;
                                var count = 0;
                                var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                                if (datainformations != null) {
                                    var paginginformation = datainformations['paginginformation'];
                                    if (paginginformation != null) {
                                        var pagesize = paginginformation['pagesize'];
                                        var pagenum = paginginformation.pagenum;
                                        if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                                            totalRowIndex = parseInt(pagesize);
                                            if (pagenum != null && pagenum > 0) {
                                                count = pagenum * pagesize;
                                                totalRowIndex = count + pagesize;
                                            }
                                        }

                                    }
                                }

                                for (var i = count; i < totalRowIndex; i++) {
                                    selectedRowsData.push($('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[i]));
                                }
                                exportJson['data'] = selectedRowsData;
                                $('#downloadDatajsonData').val(JSON.stringify(exportJson));
                                consolidationDataprocessExportRequest(gridId, exportType);
                            }// end if
                        } else {
                            var exportJson = {};
                            exportJson['headers'] = headersArray;
                            // exportJson['data'] = rowsData;
                            $('#downloadDatajsonData').val(JSON.stringify(exportJson));
                            consolidationDataprocessExportRequest(gridId, exportType);
                        }
                        //var test=fieldsArray;
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }

                }],
            open: function ()
            {
                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
        $("#selectall").click(function () {
            $(".visionSelectCheckBox").prop('checked', $(this).prop('checked'));
        });
    }
}        // end of function
function consolidationDataprocessExportRequest(gridId, exportType) {
    var GridObjStr = $("#searchResultsGridObjHidden").val(); //nestedGridObj
    var GridObj = JSON.parse(GridObjStr);
    gridId = GridObj['gridId'];
    //var gridIds = $("#gridId").val();
    $("#exportGridId").val(gridId);
    if (exportType == 'Xlsx') {
        //$("#downloadData").attr("action");
        $("#downloadData").attr("action", "exportXlsxData");
        $("#downloadData").attr("target", "_blank");
        $("#downloadData").submit();
    } else if (exportType == 'CSV') {
        $("#downloadData").attr("action", "exportCSVData");
        $("#downloadData").submit();
    } else if (exportType == 'PDF') {
        $("#downloadData").attr("action", "exportPDFData");
        // $("#downloadData").submit();
    } else if (exportType == 'XML') {
        $("#downloadData").attr("action", "exportXMLData");
        $("#downloadData").submit();
    }
    var pdrId = $("#pdrId").val();
    $('#' + pdrId).jqxGrid('clearselection');
    stopLoader();
}
function compareresults(nestedGridObj, selectedRowdata, basicData, recordstartindex, pagesize, recordendindex) {
    showLoader();
    console.log("recordstartindex::::compareresults::" + recordstartindex);
    var paginationHidden = $("#paginationHidden").val();
    var gridPropObj = nestedGridObj['gridPropObj'];
    if (recordstartindex != null && parseInt(recordstartindex) != 0) {
        recordstartindex = parseInt(recordstartindex) - 1;
    }
    var data = {
        gridId: nestedGridObj['gridId'],
        colsArray: JSON.stringify(nestedGridObj['columnsArray']),
        totalColumnsArray: JSON.stringify(nestedGridObj['totalColumnsArray']),
        gridEditFlag: gridPropObj['GRID_EDIT_FLAG'],
        gridPropertyObj: JSON.stringify(gridPropObj),
        pagesizeoptions: JSON.stringify(gridPropObj['pagesizeoptions']),
        selectionmode: gridPropObj['SELECTION_TYPE'],
        tableName: gridPropObj['GRID_REF_TABLE'],
        columns: JSON.stringify(nestedGridObj['columnListObj']),
        basicData: JSON.stringify(basicData),
        selectedCols: $("#selectedCols").val(),
        recordstartindex: recordstartindex,
        pagesize: pagesize,
        recordendindex: recordendindex,
        currentPage: $("#currentPage").val(),
        selectedGridData: JSON.stringify(selectedRowdata),
    };
    $.ajax({
        type: 'POST',
        // async: false,
        url: 'matrixPDRGrid',
        data: data,
        traditional: true,
        dataType: 'html',
        beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            showLoader();
        }, loadError: function (xhr, status, error) {
            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
            stopLoader();
        },
        success: function (response) {
            stopLoader();
            $("#accordion").accordion({'active': 1});
            if (response != null) {
                var resultObj = JSON.parse(response);
                $("#matrixGridDivId").show();
                $("#matrixGridId").html(resultObj['tabString']); //tabString
                $("#matrixGridId").addClass('showTableData');
                var recordCount = resultObj['recordCount'];
                $("#consolidationDataSize").val(resultObj['dataSize']);
                var showRows = $("#showRows").val();
                var totalPages = recordCount / showRows;
                // var totalPages = 10;

                var pageIndex = recordstartindex;
                if (recordstartindex == 0) {
                    $("#visionPDRPaginationDiv").html(resultObj['paginationStr']);
                    $("#showRowsDiv").html(resultObj['pagesizeoptions']);
                    //totalPagesArray = resultObj['totalPagesArray'];
                    pageIndex = pageIndex + 1;
                    //pagesizeoptions
                }
                //  var currentPage = $("#currentPage").val();
                // console.log(pageIndex+"::::::"+recordstartindex+":::::"+currentPage);
                //  var paginationCountId = (pageIndex)+"-"+(pagesize*currentPage)+" of "+recordCount;
                //console.log("paginationCountId::::"+paginationCountId);
                $("#paginationCountId").html(resultObj['paginationCountId']);
                $("#basicDataObjHidden").val(JSON.stringify(basicData));
                $("#selectedGridObjHidden").val(JSON.stringify(selectedRowdata)); //selectedRowdata
                $("#nestedGridObjHidden").val(JSON.stringify(nestedGridObj)); //nestedGridObj

                $('#visionPDRMatrixTableId').dragtable({dragaccept: '.visionPDRTableColumnDrag'});
                $(".hideRows").hide();
                $(".hideChildRows").hide();
                $(".recordCheckBox").click(function () {
                    if ($(this).is(':checked')) {
                        $("#select_all").prop("indeterminate", true);
                    }
                });
//                            $('#visionPDRMatrixTableId').dragableColumns({movedContainerSelector: '.visionPDRTableDragTr'});
//                            gridConfig(resultObj['groupResultsGridObj'], basicData, 'Y');
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
    stopLoader();
}
function compareresultsPaginationConsolidation(selectedButton, totalPages) {
    showLoader();
    var selectedPageNum = 0;
    var selectedPrev = selectedPageNum;
    var selectedNext = selectedPageNum;
    console.log(totalPages + ":::selectedPageNum::::" + selectedPageNum);
    var currentPageStr = $("#currentPage").val();
    var currentPage = parseInt(currentPageStr);
    console.log("currentPage:::::" + currentPage);
    if (selectedButton != null && selectedButton == 'P') {
        // selecting previoues
        console.log("You Selected << Button");
        selectedPageNum = currentPage - 1;
    }
    if (selectedButton != null && selectedButton == 'N') {
        // clicked next button
        console.log("You Selected >> Button");
        selectedPageNum = currentPage + 1;
    }
    var pagesize = $("#showRows").val();
    console.log("selectedPageNum::::" + selectedPageNum);
    console.log("pagesize::::" + pagesize);
    var recordstartindex = (selectedPageNum - 1) * pagesize + 1;
    //recordstartindex, pagesize, recordendindex
    var basicDataStr = $("#basicDataObjHidden").val();
    var selectedRowdataStr = $("#selectedGridObjHidden").val(); //selectedRowdata
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var selectedRowdata = JSON.parse(selectedRowdataStr);
    var basicData = JSON.parse(basicDataStr);
    if (selectedPageNum != 0 && selectedPageNum != (totalPages + 1) && selectedPageNum != currentPage) {
        $("#currentPage").val(selectedPageNum);
        compareresults(nestedGridObj, selectedRowdata, basicData, recordstartindex, pagesize, 30);
    }
    stopLoader();
}
function showrowsConsolidation() {
    showLoader();
    var basicDataStr = $("#basicDataObjHidden").val();
    var selectedRowdataStr = $("#selectedGridObjHidden").val(); //selectedRowdata
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var selectedRowdata = JSON.parse(selectedRowdataStr);
    var basicData = JSON.parse(basicDataStr);
    var pagesize = $("#showRows").val();
    console.log("pagesize:::showrows::::" + pagesize);
    $("#currentPage").val(1);
    compareresults(nestedGridObj, selectedRowdata, basicData, 0, pagesize, 30);
    stopLoader();
}

function confirmConsolidationGroup() {
    //  showLoader();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("processPDRGroup");
    var pdrId = $("#pdrId").val() + "_PDR_GROUP";
    var selectedrowindexes = $('#' + pdrId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes != null && selectedrowindexes[0] != null && selectedrowindexes[0] != -1) {
        var selectedRowdata = $('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[0]);
        if (selectedRowdata != null) {
            var status = selectedRowdata['STATUS'];
            if (status != null && status != 'GROUP_INPROGRESS') {
                $("#dialog").html((labelObject['Are you sure you want to Delete this Group?'] != null ? labelObject['Are you sure you want to Delete this Group?'] : 'Are you sure you want to Delete this Group?'));
                $("#dialog").dialog({ resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                deleteConsolidationGroup(selectedRowdata);
                            }
                        }],
                    open: function () {
                         //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                        //                                    location.reload();

                    }
                });
            } else {
                $("#dialog").html((labelObject['Can not Delete GROUP_INPROGRESS Group(s)'] != null ? labelObject['Can not Delete GROUP_INPROGRESS Group(s)'] : 'Can not Delete GROUP_INPROGRESS Group(s)'));
                $("#dialog").dialog({ resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }],
                    open: function () {
                         //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                        //                                    location.reload();

                    }
                });
                // stopLoader();
            }

        }
    } else {

        $("#dialog").html((labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process'));
        $("#dialog").dialog({ resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }],
            open: function () {
                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
                //                                    location.reload();

            }
        });
        //  stopLoader();
    }

}
function deleteConsolidationGroup(selectedRowdata) {
    showLoader();
    $.ajax({
        type: 'POST',
        // async: false,
        url: 'deleteConsolidationGroup',
        data: {
            selectedGridData: JSON.stringify(selectedRowdata)
        },
        traditional: true,
        dataType: 'html',
        beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            showLoader();
        }, loadError: function (xhr, status, error) {
            stopLoader();
            throw new Error(error);
        }, loadComplete: function (data)
        {
            stopLoader();
        },
        success: function (response) {
            if (response != null && response != '') {
                var responseObj = JSON.parse(response);
                $("#dialog").html((labelObject[responseObj['message']] != null ? labelObject[responseObj['message']] : responseObj['message']));
                $("#dialog").dialog({ resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                fetchPDRGroups();
                            }
                        }],
                    open: function () {
                         //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                        //                                    location.reload();

                    }
                });
            }
            stopLoader();
        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}
function processPDRGroup() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("processPDRGroup");
    var pdrId = $("#pdrId").val() + "_PDR_GROUP";
    var selectedrowindexes = $('#' + pdrId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes != null && selectedrowindexes[0] != null && selectedrowindexes[0] != -1) {
        var selectedRowdata = $('#' + pdrId).jqxGrid('getrowdata', selectedrowindexes[0]);
        if (selectedRowdata != null) {
            $.ajax({
                type: 'POST',
                // async: false,
                url: 'processConsolidationGroup',
                data: {
                    selectedGridData: JSON.stringify(selectedRowdata)
                },
                traditional: true,
                dataType: 'html',
                beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                    showLoader();
                }, loadError: function (xhr, status, error) {
                    stopLoader();
                    throw new Error(error);
                }, loadComplete: function (data)
                {
                    stopLoader();
                },
                success: function (response) {
                    stopLoader();
                    if (response != null && response != '') {
                        var responseObj = JSON.parse(response);
                        $("#dialog").html((labelObject[responseObj['message']] != null ? labelObject[responseObj['message']] : responseObj['message']));
                        $("#dialog").dialog({ resizable: false,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            modal: true,
                            height: 'auto',
                            minHeight: 'auto',
                            minWidth: 300,
                            maxWidth: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {

                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        fetchPDRGroups();
                                    }
                                }],
                            open: function () {
                                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");
                            },
                            beforeClose: function (event, ui)
                            {
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                                //                                    location.reload();

                            }
                        });
                    }
                    stopLoader();
                },
                error: function (e) {
                    stopLoader();
                    sessionTimeout(e);
                }

            });
        }
    } else {
        $("#dialog").html((labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process'));
        $("#dialog").dialog({ resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            minHeight: 'auto',
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }],
            open: function () {
                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
                //                                    location.reload();

            }
        });
    }

}
function consolidationFormView() {
    $("#dxpGridContent").hide();
    $("#dxpAnalyticsContent").hide();
    $("#dxpHomeContent").hide();
    $("#dxClassesContent").hide();
    $("#dxpFormContent").hide();
    $("#dxpCluster").hide();
    $("#dxpconsolidationFormView").hide();
    $("#dxpClusterContent").hide();
    $("#dxp1TabsWithGridContent").hide();
    $("#dxp2TabsWithGridContent").hide();
    $("#dxpconsolidationFormView").html("");
    $("#dxpCluster").hide();
    var pdrId = arguments[0];
    try {
        let currentTabName = event.currentTarget.innerText;
        var tabname = currentTabName.split('\n')[0];
        insertUserClickedNavigations(tabname);
    } catch (e) {

    }
    var headerFioriFlag = $("#cb-switch").is(":checked");//14-04-2025
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'consolidationFormView',
        data: {
            'pdrId': pdrId,
            'fioriFlag': headerFioriFlag//14-04-2025
        },
        traditional: true,
        cache: false,
        success: function (response) {
            var resultObj = JSON.parse(response);
            $("#dxpconsolidationFormView").show();
            toggleTabsAndMenus(event);
            if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
                showSelectedTabContent(null, 'dxpconsolidationTab', 'dxpconsolidationFormView', tabname, 'N');
            } else {
                showSelectedTabContent(null, 'dxpconsolidationTab', 'dxpconsolidationFormView', 'Smart Consolidation', 'N');
            }
            if ($("#dxpTabs").is(":visible")) {

            } else {
                toggleTabsAndMenus(event);
            }
            $('#producttypeId').jqxPopover('close');
            $("#dxpconsolidationFormView").html(resultObj['resultView']);

            if (pdrId == "CONSOLIDATION_MM_MGR_TYPES") {
                flag = 'Y';
            } else {
                flag = 'N';
                $(".accordian").hide();
                $(".visionSearchImport").hide();
                if (headerFioriFlag) {
                    $(".textsearchbutton").hide();
                    $(".visionFormTitleName").find(".fioriFormButtongroup").prepend("<b><input type=\"button\" value=\"Search\" id=\"Search\" class=\"textsearchbutton\" onclick=\"searchConsolidation();\"/></b>")
                } else {
                    $(".textsearchbutton").hide();
                    $(".visionRegistartionGeneric").find(".visionFormDataButtons").prepend("<b><input type=\"button\" value=\"Search\" id=\"Search\" class=\"textsearchbutton\" onclick=\"searchConsolidation();\"/></b>")
                }
                if (headerFioriFlag) {//14-04-2025
                    $('#allTabListMainWrapperId').html('');
                    $("#allTabListMainWrapperId").html(resultObj['resolutionView']);
                } else {
                    $(".visionRegisterMaterialAccordians").html(resultObj['resolutionView']);
                }//14-04-2025  
            }
            //14-04-2025
            if (headerFioriFlag) {
                $('#materialBasketNameId').html(' '+tabname+' ');
                const tabButtons = document.querySelectorAll(".fioriformTabUlListclass li");
                const tabContents = document.querySelectorAll(".visionRegisterMaterialMainWrapper > div");
                tabButtons.forEach((tab) => {
                    tab.addEventListener("click", function () {
                        const targetId = tab.getAttribute("for");
                        tabButtons.forEach((btn) => btn.classList.remove("fioriHighlightTab"));
                        tab.classList.add("fioriHighlightTab");
                        tabContents.forEach((content) => {
                            content.style.display = "none";
                        });
                        const targetDiv = document.getElementById(targetId);
                        if (targetDiv) {
                            targetDiv.style.display = "block";
                        }
                    });
                });
                $('.visionDataView').click(function () {
                    $('#visionTabMaterialAccordians ul li').each(function () {
                        if ($(this).attr("for") === 'compareResultsLi') {
                            $(this).click();
                        }
                    });
                });
                $('.textsearchbutton').click(function () {
                    $('#visionTabMaterialAccordians ul li').each(function () {
                        if ($(this).attr("for") === 'searchResultsLi') {
                            $(this).click();
                        }
                    });
                });
            }



            //14-04-2025
            $(".accordian").accordion({
                theme: 'energyblue',
                collapsible: true,
                heightStyle: "content",
                active: false,
                autoHeight: false
            });
            $("#mat_creation_form_table" + " :input[data-type='D']").each(function ()
            {
                var id = $(this).attr('id');
                $("#" + id).datepicker({
                    changeMonth: true,
                    changeYear: true,
                    dateFormat: "dd-mm-yy",
                    showOn: "button",
                    buttonImage: 'images/iDXPUI5Calendar.svg',
                    buttonImageOnly: true
                });
            });
        }
    });

}
//smart consolidation ends