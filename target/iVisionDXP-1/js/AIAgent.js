/* global Promise */
//$(document).ready(function () {



function dragagentfile() {
    var dropArea = $('#userAIInputBottomWidgetId');
    var dragCounter = 0;

    function handleDragState(element, isEntering) {
        if (isEntering) {
            dragCounter++;
            element.addClass('overlayDragContainer');
        } else {
            dragCounter--;
            if (dragCounter === 0) {
                element.removeClass('overlayDragContainer');
            }
        }
    }

    dropArea.on('dragover', function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!$(this).hasClass('overlayDragContainer')) {
            $(this).addClass('overlayDragContainer');
        }
    });

    dropArea.on('dragenter', function (event) {
        event.preventDefault();
        event.stopPropagation();
        handleDragState($(this), true);
    });

    dropArea.on('dragleave', function (event) {
        event.preventDefault();
        event.stopPropagation();
        handleDragState($(this), false);
    });

    dropArea.on('drop', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var files = event.originalEvent.dataTransfer.files;
        $(this).removeClass('overlayDragContainer');
        $('#aiTypedValue').focus();

        if (files.length === 0)
            return;

        var file = files[0];
        var fileInput = document.getElementById('aiImageAttachedmentUpload');

        if (fileInput) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;
        }

        let fileName = file.name;
        let html = `
        <div class="aiLensAttachedmentFileNameDiv" tabindex="0">
            <span><img src="images/aieyeLensclick.png" onclick="showImageAI()" width="20px" class="attached-file-icon"/></span>
            <span class="aiLensAttachedmentFileName">${fileName}</span>
            <span class="fa fa-times aiLensAttachedmentCrossIcon" id="aiLensAttachedmentCrossIcon"></span>
        </div>`;
        $('#aiLensAttachedmentFile').html(html);

        $('#aiTypedValue').off('keypress.fileUpload');

        $('#aiLensAttachedmentCrossIcon').click(function () {
            $('#aiLensAttachedmentFile').html('');
            if (fileInput) {
                fileInput.files = new DataTransfer().files;
            }
        });

    });
    function validateFileType(userInput, file) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "aiAgentValidFileTypes",
                contentType: "application/json",
                method: 'GET',
                dataType: 'json',
                data: {userInput},
                success: function (tableData) {
                    if (tableData.message) {
                        reject(new Error(tableData.message));
                        return;
                    }

                    const expectedFileType = tableData.FILE_TYPE || "";
                    const actualFileType = file.type;

                    if (!expectedFileType ||
                            actualFileType === expectedFileType ||
                            actualFileType.startsWith(expectedFileType.split('/')[0] + '/')) {
                        resolve(true);
                    } else {
//                        reject(new Error(`File type mismatch. Expected "${expectedFileType}" for "${userInput}", but got "${actualFileType}".`));
                        reject(new Error(`File type mismatch for "${userInput}"`));
                    }
                },
                error: function (xhr, status, error) {
                    reject(new Error('Failed to validate file type: ' + error));
                }
            });
        });
    }
}

function gettextprocess(userInput, fileValue, imgValue, dragFIle) {
    $(".aiAppendSenderDataClass").remove();
    $("#aiLensAttachedmentFileNameDiv").html("");
    $("#validationId").remove();
    const AiAgenterrorMessage = (message) => {
        const logData = `<div class='aiLensRoboterrorDataClass' ><label><span class='warningIcon'><i class="fa fa-exclamation-triangle"></i></span><span>${message}</span></label></div>`;
        try {
            var dataObj = {};
            const notificationJson = [];
            dataObj['id'] = 1;
            dataObj['notif'] = logData;
            notificationJson.push(dataObj);
            const notificationStrings = notificationJson.map((elem) => elem.notif);
            $(".typed-cursor").hide();
            $('#stopResponsingID').show(1000);
            animateListItem(0);
            function animateListItem(index) {
                if (index < notificationJson.length) {
                    const listItem = $(`<div id='validationId' class='validationclass' aiLensReceiverImgClass' data-id='${notificationJson[index].id}${aiResultBoxCount}'><div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>`
                            + `<div class='listItemsText'></div>`
                            + `</div></div>`);
                    $(".aiChatgptResponseContainer").append(listItem);
                    const typed = new Typed(listItem.find('.listItemsText')[0], {
                        strings: [notificationStrings[index]],
                        typeSpeed: 10,
                        onComplete: function () {
                            console.log('Animation completed for', notificationJson[index].id);
                            aiAutoScrollContainer();
                            $(".typed-cursor").hide();
                            $("#aiTypedValue").attr('readonly', false);
                            $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                                aiResponseCopy();
                            });
                            aiResultBoxCount++;
                            animateListItem(index + 1);
                            aiLensImageBasedOnClass();
                            $("#stopResponsingID").hide();
                        }
                    });
                    $('#stopResponsingID').click(function () {
                        typed.stop();
                        $("#aiTypedValue").removeAttr("readonly");
                        $('#stopResponsingID').hide();
                    });
                }

            }
        } catch (e) {
        }
    };
    if (fileValue != null && fileValue != '' && fileValue != undefined || imgValue != null && imgValue != '') {
        $.ajax({
            type: "POST",
            url: "getprocessName",
            cache: false,
            data: {
                text: userInput
            },
            success: function (response) {
                //TODO: Need to add Loader
                stopaiLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
//                    $(".aiChatgptResponseContainer").append("<div id='validationId' class='validationclass'>");
                    var keywordflag = response['keywordFlag'];
                    if (keywordflag != null && keywordflag != undefined && keywordflag == 'N') {
                        var message = response['processmsg'];
                        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>" + message + "</div>");
//                        return;
//                        AiAgenterrorMessage(message);
                        return false;
                        if ((fileValue == null || fileValue == '' || fileValue == undefined) &&
                                (imgValue == null || imgValue == '' || imgValue == undefined)) {

                            AiAgenterrorMessage("No file was uploaded. Please select a file to upload.");
                        }
                    }


                    var functionname = response['FunctionName'];
                    var functionparam = response['functionparam'];
                    if (functionparam != null && functionparam != undefined && functionparam != '') {
                        var pararam = [];
                        pararam = functionparam.split(",");
                        pararam = pararam.map(params => params.replaceAll("'", ""));
                        if (typeof window[functionname] === 'function') {
                            window[functionname].apply(null, pararam);
                        } else {
                            console.error(`Function ${functionname} is not defined or not accessible`);
                        }
                    } else {
                        if (typeof window[functionname] === 'function') {
                            window[functionname]();
                        } else {
                            console.error(`Function ${functionname} is not defined or not accessible`);
                        }
                    }

                }
            }
            ,
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    } else {
        getAIContentBasedOnQuery('Do you want search P_AI_QUERY_ANSWER in', userInput, 'SEARCH', 'S', 'N', userInput);
        userInput = '';
    }
}
function sendUrlToAgent() {
    const AiAgenterrorMessage = (message) => {
        const logData = `<div class='aiLensRoboterrorDataClass' ><label><span class='warningIcon'><i class="fa fa-exclamation-triangle"></i></span><span>${message}</span></label></div>`;
        try {
            var dataObj = {};
            const notificationJson = [];
            dataObj['id'] = 1;
            dataObj['notif'] = logData;
            notificationJson.push(dataObj);
            const notificationStrings = notificationJson.map((elem) => elem.notif);
            $(".typed-cursor").hide();
            $('#stopResponsingID').show(1000);
            animateListItem(0);
            function animateListItem(index) {
                if (index < notificationJson.length) {
                    const listItem = $(`<div id='validationId' class='validationclass' aiLensReceiverImgClass' data-id='${notificationJson[index].id}${aiResultBoxCount}'><div class='aiLensMainResultBoxClass' id='aiLensMainResultBoxClass'>`
                            + `<div class='listItemsText'></div>`
                            + `</div></div>`);
                    $(".aiChatgptResponseContainer").append(listItem);
                    const typed = new Typed(listItem.find('.listItemsText')[0], {
                        strings: [notificationStrings[index]],
                        typeSpeed: 10,
                        onComplete: function () {
                            console.log('Animation completed for', notificationJson[index].id);
                            aiAutoScrollContainer();
                            $(".typed-cursor").hide();
                            $("#aiTypedValue").attr('readonly', false);
                            $(`#aiResulBoxCopyClassId${aiResultBoxCount}`).click(function () {
                                aiResponseCopy();
                            });
                            aiResultBoxCount++;
                            animateListItem(index + 1);
                            aiLensImageBasedOnClass();
                            $("#stopResponsingID").hide();
                        }
                    });
                    $('#stopResponsingID').click(function () {
                        typed.stop();
                        $("#aiTypedValue").removeAttr("readonly");
                        $('#stopResponsingID').hide();
                    });
                }

            }
        } catch (e) {
        }
    };
    const url = $("#dataUrlInput").val(); // assume this is your URL input
    if (url) {
        var type = 'URL'
        const userInput = $("#aiTypedValue").val();
        $.ajax({
            type: "POST",
            url: "getprocessName",
            cache: false,
            data: {
                text: userInput,
                textType: 'URL'
            },
            success: function (response) {
                //TODO: Need to add Loader
                stopaiLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
//                    $(".aiChatgptResponseContainer").append("<div id='validationId' class='validationclass'>");
                    var keywordflag = response['keywordFlag'];
                    if (keywordflag != null && keywordflag != undefined && keywordflag == 'N') {
                        var message = response['processmsg'];
                        AiAgenterrorMessage(message);
                        return false;
                    }
                    var functionname = response['FunctionName'];
                    var functionparam = response['functionparam'];
                    if (functionparam != null && functionparam != undefined && functionparam != '') {
                        var pararam = [];
                        pararam = functionparam.split(",");
                        pararam = pararam.map(params => params.replaceAll("'", ""));
                        if (typeof window[functionname] === 'function') {
                            window[functionname].apply(null, pararam);
                        } else {
                            console.error(`Function ${functionname} is not defined or not accessible`);
                        }
                    } else {
                        if (typeof window[functionname] === 'function') {
                            window[functionname]();
                        } else {
                            console.error(`Function ${functionname} is not defined or not accessible`);
                        }
                    }

                }
            }
            ,
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    } else {
        alert("Please enter a URL.");
    }
}
function agentuploadfile() {
    var params = {};
    params['gridId'] = '';
    // $("body").append("<div id='agentAttachedmentImageUpload' class='agentAttachedmentImageUpload'></div>");
    $("body").append(`
      <ul id="attachmentList" style='display:none'>
        <li>
          <div class="aiAttachedment">
            <input type="file" id="agentAttachmentImageUpload" onchange="aiLensAttachedment('aiAttachedmentImageUpload')" accept=".txt">
            <label for="aiAttachedmentImageUpload">Upload Text File</label>
          </div>
        </li>
      </ul>
    `);
    setTimeout(function () {
        $("#agentAttachedmentImageUpload").click();
        $("#agentAttachedmentImageUpload").click();
    }, 1000);
    $("#agentAttachedmentImageUpload").ajaxfileupload({

        'action': 'importFileAjaxColMapping',
        params: params,
        async: true,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
        },
        onStart: function () {
            $("#Loader").css("opacity", "0.99");
            $("#Loader").css("display", "block");
            $("body").css("pointer-events", "none");
            startAjax();
        },
        'onComplete': function (result) {
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
            endAjax();
            var resultObject = result['message'];
        }
        , onCancel: function () {
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
        }
    });
}
function getAIAgentspopulateFileBrowserColMapping(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, domain, role, browseId, gridId, componentType, clusterId, settimeout, processName, agentname, urlfile, fileName) {

    let fileInput = document.getElementById("aiImageAttachedmentUpload"); // Get file input field
    let file = fileInput.files[0];
    if (urlfile != null && urlfile != undefined && urlfile != '') {
        file = urlfile;
    }
    if (!file) {
        alert("Please select a file to upload.");
        return;
    }

    let formData = new FormData();
    formData.append("importFile", file, fileName);
    formData.append("gridId", gridId);
//    formData.append("importFile", file); // Attach file
//    formData.append("gridId", gridId); // Send additional parameter

    $.ajax({
        type: "POST",
        url: "importFileAjaxColMapping",
        data: formData,
        processData: false, // Prevent jQuery from processing the data
        contentType: false, // Let the browser set the correct content type
        cache: false,
        async: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != '') {
                var resultObject = JSON.parse(response);
                //var resultObject = JSON.parse(resultStr);
                var fileHeaders = resultObject['headersArray']
                var filePath = resultObject['filePath']
                var gridTable = resultObject['gridTable']
                var columnLabels = resultObject['columnLabels']
                var datafields = resultObject['datafields']

                var htmlDiv = "<div id='importFileColumnsMapppingOptionsDiv' >"
                        + "<img id='importFileColumnsMapppingInfo' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
                        + "</div>"
                        + "<div id='importFileColumnMappingId' class='importFileColumnMappingMain' ></div>";
                var mappedGridColumnsArray = [];
                var mappedGridLabelssArray = [];
                var mappedFileHeadersArray = [];
                var columnMappingObj = {};
//             $("#messagedialog4").html("");
                $("#messagedialog5").html(htmlDiv);
                $("#messagedialog5").addClass("ai-panel-flowchart");
                $("#messagedialog5").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Map Columns'] != null ? labelObject['Map Columns'] : 'Map Columns'),
                    height: 500,
                    minHeight: 'auto',
                    width: 860,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Import'] != null ? labelObject['Import'] : 'Import'),
                            click: function () {

                                showLoader();
                                $.ajax({
                                    type: "post",
                                    traditional: true,
                                    dataType: 'html',
                                    url: 'importExcelColMapping',
                                    cache: false,
                                    data: {
                                        tableName: gridTable,
                                        filePath: filePath,
                                        gridId: gridId,
                                        mappedFileHeadersArray: JSON.stringify(mappedFileHeadersArray),
                                        mappedGridColumnsArray: JSON.stringify(mappedGridColumnsArray),
                                        fileHeaders: JSON.stringify(fileHeaders),
                                        columnMappingObjStr: JSON.stringify(columnMappingObj)
                                    },
                                    success: function (result) {
                                        stopLoader();
                                        var responseObj = JSON.parse(result);
                                        var dialogSplitMessage = responseObj['finalresult'];
                                        var batchNumber = responseObj['batchNumber'];
                                        var finalresult = responseObj['finalresult'];
                                        var flag = responseObj['flag'];
                                        var rowCount = responseObj['rowCount'];
                                        if (flag) {
//                                        var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                            var logData = "<div class='aiLensResultDataClass' >"
                                                    + "<p class='queryanswerTitle'>" + aiQueryAns + ", In Uploaded Document we found <b>" + rowCount + " Assets.</b></p>"
//                                                + "<p class='queryanswerTitle'>" + aiQueryAns + ", In Uploaded Document we found <b>" + responseObj['PRODUCT'] + " Materials </b> and <b>" + responseObj['ASSET'] + " Assets.</b></p>"
//            + "<div>" + dialogSplitMessage + "</div>"
                                                    + "<table class='table table-bordered'>"
                                                    + "<tbody>"
                                                    + "<tr><td><b>Batch No </b></td><td>" + batchNumber + "</td></tr>"
                                                    + "<tr><td><b>Imported Rows </b></td><td>" + rowCount + "</td></tr>"
//                                                + "<tr><td><b>Material Rows </b></td><td>" + responseObj['PRODUCT'] + "</td></tr>"
                                                    + "<tr><td><b>Asset Rows </b></td><td>" + rowCount + "</td></tr>"
                                                    + "</tbody>"
                                                    + "</table>"
                                                    + "</div>"

                                            defaultAITypingBasedOnResponse(logData, '', "", "");
                                            var paramArray = [];
                                            var paramObj = {};
                                            paramObj.column = 'BATCH_ID';
                                            paramObj.value = batchNumber;
                                            paramObj.operator = 'EQUALS';
//                                        paramObj.symbol = '=';
                                            paramObj.selectNum = 1;
                                            paramArray.push(paramObj);
//                                        $("#" + componentId + "_filter_columns").remove();
//                                        $("#" + componentId).append("<input type='hidden' id='" + gridId + "_filter_columns' value=''/>");
//                                        $("#" + componentId + "_filter_columns").val(JSON.stringify(paramArray));
//                                        closeAINavigation();
                                            setTimeout(function () {
                                                try {
                                                    if (componentType != null && componentType != '' && componentType != 'undefined' && componentType != undefined) {

                                                        if (componentType == 'CLUSTER') {
                                                            getcluster(clusterId, role, domain, 'N', paramArray);
                                                        } else if (componentType == 'NESTEDGRID') {
                                                            $("#dxpGridContent").html("");
                                                            getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'Y');
                                                            try {
                                                                showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                            } catch (e) {

                                                            }
                                                            $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                            $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                            $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                            $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                        } else if (componentType == 'GRID') {
                                                            $("#dxpGridContent").html("");
                                                            getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                                            try {
                                                                showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                            } catch (e) {

                                                            }
                                                            $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                            $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                            $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                            $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                        }

                                                    } else {
                                                        $("#dxpGridContent").html("");
                                                        getnestedGrid(gridId, paramArray, 0, 'dxpGridContent', "", 'N');
                                                        try {
                                                            showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', "View Data", 'N');
                                                        } catch (e) {

                                                        }
                                                        $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                                                        $("#dxpGridTab").attr("data-selectedgridId", gridId);
                                                        $("#dxpGridTab").attr("data-selectedRoleId", role);
                                                        $("#dxpGridTab").attr("data-functionName", "getnestedGrid");
                                                    }
                                                } catch (e) {
                                                }
                                            }, 2000);
                                            setTimeout(function () {
                                                openAINavigation();
                                                getAIAgentProcess(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, batchNumber, gridId, agentname, '', '', '', '', '', '', '', '', '', '', processName);
                                            }, 10000);
                                        } else {
//                                        var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                            var logData = "<div class='aiLensResultDataClass' >"
                                                    + "<h5>Imported Data</h5>"
                                                    + "<div>" + dialogSplitMessage + "</div>"
                                                    + "</div>"
                                            defaultAITypingBasedOnResponse(logData, '', "", "");
                                        }
                                    },
                                    error: function (e) {
                                        console.log(e);
                                        sessionTimeout(e);
                                        stopLoader();
                                    }
                                })

                                $(this).html("");
                                $(this).dialog("close");
                            }
                        }],
                    open: function () {

                        // var columnDefinitions = $('#' + gridId).jqxGrid('getInstance').columns.records;

                        var columnNameInputs = {};
                        var columnNameArray = [];
                        var inputCount = 0;
                        $.each(columnLabels, function (i) {

                            var columname = columnLabels[i];
                            var datafield = datafields[i];
                            if (columname != null && columname != "" && columname.indexOf("_HIDDEN")) {
                                //gridColumns.push(columname);

                                var input = {};
                                input['label'] = columname;
                                input['value'] = datafield;
                                columnNameInputs['input_' + inputCount] = input;
                                inputCount++;
                                columnNameArray.push(columname);
                            }
                        });
//                    var resultObject = result['message'];
                        var fileHeaders = resultObject['headersArray']
                        var filePath = resultObject['filePath']
                        var fileName = resultObject['fileName']

                        var headersCount = resultObject['headersCount']
                        var fileRowCount = resultObject['fileRowCount']

                        var fileTitle = "<div>File Name : " + fileName + "<br>"
                                + "Columns Count : " + headersCount + "<br>"
                                + "Rows Count : " + fileRowCount + "</div>"
//                            + "<div>"
//                            + "<img  id='fileAnalyticsId'  src='images/Data-Analytics-icon.svg' style='width:20px;height:20px;float:right;' >"
//                            + "<img  id='fileDataTypesValidationId' src='images/validation.png' style='width:20px;height:20px;float:right;' >"
//                            + "</div>"
                                ;
//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                        var tableTitle = "<div>Staging Table <br>"
                                + "Columns Count : " + columnNameArray.length + "<br>"
                                + "Rows Count : " + fileRowCount + "</div>";
                        var fileHeaderObject = {};
                        $.each(fileHeaders, function (i) {
                            var header = fileHeaders[i];
                            fileHeaderObject[header] = header;
                        })
                        if (fileHeaders.length > Object.keys(fileHeaderObject).length) {
                            showMesg("Duplicate file headers found. Please change to proceed");
                            $(this).html("");
                            $(this).dialog("close");
                            throw new Error("Duplecate file headers found");
                        }

                        var linksData = {};
                        var fileHeaderOutputs = {};
                        var linkId = 0;
                        var maxHeaderLength = 0;
                        var matchedColumns = [];
                        $.each(fileHeaders, function (i) {
                            var output = {};
                            output['label'] = fileHeaders[i];
                            if (columnNameArray.indexOf(fileHeaders[i]) > -1) {
                                var linkdata = {};
                                linkdata['fromConnector'] = "output_" + i;
                                linkdata['fromOperator'] = "operator1";
                                linkdata['fromSubConnector'] = 0;
                                linkdata['toConnector'] = "input_" + (columnNameArray.indexOf(fileHeaders[i]));
                                linkdata['toOperator'] = "operator2";
                                linkdata['toSubConnector'] = 0;
                                linksData[linkId] = linkdata;
                                linkId++;
                                matchedColumns.push(fileHeaders[i]);
                            }

                            maxHeaderLength = fileHeaders[i].length > maxHeaderLength ? fileHeaders[i].length : maxHeaderLength;
                            fileHeaderOutputs['output_' + i] = output;
                        })

                        var data = {
                            operators: {
                                operator1: {
                                    top: 20,
                                    left: 20,
                                    properties: {
                                        title: fileTitle,
                                        inputs: {},
                                        outputs: fileHeaderOutputs,
                                    }
                                },
                                operator2: {
                                    top: 20,
                                    left: 500,
                                    properties: {
                                        title: tableTitle,
                                        inputs: columnNameInputs,
                                        outputs: {}
                                    }
                                },
                            },
                            links: {}
                        };
                        // Apply the plugin on a standard, empty div...
                        $('#importFileColumnMappingId').flowchart({
                            data: data,
                            linkWidth: 2,
                            multipleLinksOnOutput: true,
                            canUserEditLinks: true,
                            canUserMoveOperators: true
                        });
                        $(".flowchart-operator-connector-label").each(function (i) {
                            var linkData = linksData[i];
                            var text = $(this).text();
                            if (matchedColumns.indexOf(text) > -1) {
                                $(this).css("color", "green");
                            } else {
                                $(this).css("color", "red");
                            }

                        })

                        $('#importFileColumnMappingId').flowchart({
                            onOperatorMoved: function (operatorId, position) {
                                if (position.top < 0) {
                                    var operatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', operatorId);
                                    operatorData.top = 20;
                                    $('#importFileColumnMappingId').flowchart('setOperatorData', operatorId, operatorData);
//                                          var flowChartData = $('#importFileColumnMappingId').flowchart('getData');
//                                          $('#importFileColumnMappingId').flowchart('setData', flowChartData);

                                    $(".flowchart-operator-connector-label").show();
                                    $(".flowchart-operator").css("width", "250px", "!important");
                                    $(".flowchart-operator").css("height", "auto", "!important");
                                    $(".flowchart-operator-title").show();
                                }
                                return true;
                            },
                            onLinkCreate: function (linkId, linkData) {
                                var getdata = $('#importFileColumnMappingId').flowchart('getData');
                                var fromOperator = linkData['fromOperator']
                                var fromConnector = linkData['fromConnector'];
                                var fromOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                                var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                mappedFileHeadersArray.push(label);
                                var toOperator = linkData['toOperator']
                                var toConnector = linkData['toConnector'];
                                var toOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
                                var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                                mappedGridColumnsArray.push(value);
                                mappedGridLabelssArray.push(tolabel);
                                columnMappingObj[label] = value;
                                $(".flowchart-operator-connector-label").each(function (i) {
                                    var text = $(this).text();
                                    if (text == label || text == tolabel) {
                                        if (label == tolabel) {
                                            $(this).css("color", "green");
                                        } else {
                                            $(this).css("color", "blue");
                                        }

                                    }
                                })


                                return true;
                            },
                            onLinkDelete: function (linkId, forced) {

                                var flowChartData = $('#importFileColumnMappingId').flowchart('getData');
                                var links = flowChartData['links'];
                                var linkData = links[linkId];
                                var toOperator = linkData['toOperator']
                                var toConnector = linkData['toConnector'];
                                var toOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
                                var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                                var mappedValueIndex = mappedGridColumnsArray.indexOf(value);
                                mappedGridColumnsArray.splice(mappedValueIndex, 1);
                                var mappedLabelIndex = mappedGridLabelssArray.indexOf(tolabel);
                                mappedGridLabelssArray.splice(mappedLabelIndex, 1);
                                var fromOperator = linkData['fromOperator']
                                var fromConnector = linkData['fromConnector'];
                                var fromOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                                var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                mappedFileHeadersArray.splice(mappedValueIndex, 1);
                                $(".flowchart-operator-connector-label").each(function (i) {
                                    var text = $(this).text();
                                    if (text == label || text == tolabel) {
                                        if (label == tolabel) {
                                            $(this).css("color", "green");
                                        } else {
                                            $(this).css("color", "red");
                                        }

                                    }
                                })
                                return true;
                            }, onLinkSelect: function (linkId) {
                                var linkId = $('#importFileColumnMappingId').flowchart('getSelectedLinkId');
                                $('#importFileColumnMappingId').one('click', function () {
                                    $('#importFileColumnMappingId').flowchart('deleteSelected');
                                });
                                return true;
                            }

                        });
                        $(".flowchart-operator-connector-label").show();
                        $(".flowchart-operator-connector-label").css("width", maxHeaderLength * 10 + "px", "!important");
                        $(".flowchart-operator").css("width", "auto", "!important");
                        $(".flowchart-operator").css("height", "auto", "!important");
                        $(".flowchart-operator-title").show();
                        $.each(linksData, function (linkid, linkdata) {
                            $('#importFileColumnMappingId').flowchart('addLink', linkdata);
                        })

                        $("#fileAnalyticsId").popover({
                            trigger: "click",
                            html: true,
                            maxwidth: 'auto',
                            placement: "right",
                            //                title: "Event Timings", 
                            content: function (event) {
                                showFileColumnAnalytics(this, filePath);
                                return '<div class="popoverContentDiv"><div class="circularLoader"></div></div>'
                            },
                            //                    height:250px,
                        });
                        $("#fileDataTypesValidationId").popover({
                            trigger: "click",
                            html: true,
                            maxwidth: 'auto',
                            placement: "right",
                            //                title: "Event Timings", 
                            content: function (event) {

                                showFileDataTypesValidation(this, filePath, gridTable, mappedFileHeadersArray, mappedGridColumnsArray, mappedGridLabelssArray);
                                return '<div class="popoverContentDiv"><div class="circularLoader"></div></div>'
                            },
                            //                    height:250px,
                        });
                        $("#importFileColumnsMapppingInfo").popover({
                            trigger: "click",
                            html: true,
                            maxwidth: 'auto',
                            placement: "left",
                            //                title: "Event Timings", 
                            content: function (event) {
                                var html = "<div id='carouselExampleControls'class='carousel slide'data-bs-ride='carousel'>"
//                                    + "<div class='carousel-inner'>"
//                                    + "<div class='carousel-item active'>"
//                                    + "<span>Map File columns to Table columns by drawing a link between them using your mouse.</span><hr />"
//                                    + "<img src='images/importColMapping.gif' class='d-block w-100' width='260px' alt='Map Columns'>"
//                                    + "</div>"
//                                    + "<div class='carousel-item'>"
//                                    + "<span>To delete a link select a link by clicking on the link and press delete.</span><hr />"
//                                    + "<img src='images/importColMapping.gif' class='d-block w-100' width='260px' alt='Map Columns'>"
//                                    + "</div>"
//                                    + "</div>"
//                                    + "<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>"
//                                    + "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"
//                                    + "<span class='visually-hidden'>Previous</span>"
//                                    + "</button>"
//                                    + "<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>"
//                                    + "<span class='carousel-control-next-icon' aria-hidden='true'></span>"
//                                    + "<span class='visually-hidden'>Next</span>"
//                                    + "</button>"
                                        + "<ul>"
                                        + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                        + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                        + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                        + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                        + "</ul>"
                                        + "<div class='mappingiconwrapper'>"
                                        + "<span><img src='images/mapping.svg' alt='' ></span>"
                                        + "<span><img src='images/mapping.svg' alt='' ></span>"
                                        + "<span><img src='images/mapping.svg' alt='' ></span>"
                                        + "<span><img src='images/mapping.svg' alt='' ></span>"
                                        + "</div>"

                                        + "</div>";
                                return html;
                            },
                            //                    height:250px,
                        });
                        $("#importFileColumnsMapppingInfo").on("shown.bs.popover", function () {
                            $("#carouselExampleControls").parent().addClass("helpIconPopOverclass");
                        });
                        $("#fileAnalyticsId").attr("title", "Analysis");
                        $("#fileDataTypesValidationId").attr("title", "Validate Datatypes");
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".popover").remove();
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }
        },
        error: function (e) {
            console.error("File upload error:", e);
        }
    });
}

function getAIAgentProcess(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, batchNumber, gridId, agentname, processName) {
    var aiSearchString = batchNumber;
    var result = "<div class='listItemsText'>" +
            "<ul class='listItemsViews'>" +
            "<li>" +
            "<div class='aiLensResultDataClass' title='How do you want to process the data?'>" +
            "How do you want to process the data?" +
            "</div>" +
            "<div class='viewData AILensDisOrEnaClass'>" +
//                            "<div class='viewButton' onclick='getAiLensExcelAutoProcess(\"" + aiSearchString + "\", \"aiAutoResults\")'>" +
//                            "<span><span class='viewIcon'><img src='images/process_icon_blue.png' class='aiDefaultYesImgClass'></span>Auto Process</span>" +
//                            "</div>" +
            "<div class='viewButton' id='manualDHProcess' onclick='getAiAgentExcelAutoProcess(\"manual\", \"aiAutoResults\",\"Manual Process\",\"Manual Process\")'>" +
            "<span><span class='viewIcon'><img src='images/process_icon_blue.png' class='aiManualProcessImgClass'></span><span style='margin-left:10px;'>Manual Process</span></span>" +
            "</div>" +
            "<div class='viewButton' onclick='getAiAgentExcelAutoProcess(\"" + aiSearchString + "\", \"aiAutoResults\",\"aiAgent\",\"AI Agent\",\"" + gridId + "\",\"" + agentname + "\")'>" +
            "<span><span class='viewIcon'><img src='images/process_icon_blue.png' class='aiAgentImgClass'></span><span style='margin-left:10px;'>AI Agent</span></span>" +
            "</div>" +
//            "<div class='viewButton' onclick='showstatusWorkflow(\"" + aiSearchString + "\", \"" + gridId + "\",\"" + agentname + "\")'>" +
//            "<span><span class='viewIcon'><img src='images/process_icon_blue.png' class='aiAgentImgClass'></span><span style='margin-left:10px;'>AIagent Workflow</span></span>" +
//            "</div>" +
            "</div>" +
            "</li>" +
            "</ul>" +
            "</div>";
    defaultAITypingBasedOnResponse(result, '', "", "");
}

async function fetchProcessConfig(gridid, agentname) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: "getProcessConfigurations", // API to fetch process configurations
            cache: false,
            dataType: "json",
            data: {
                gridid: gridid,
                agentname: agentname
            },
            success: function (response) {

                if (response.status === "success" && Array.isArray(response.processes)) {

                    resolve(response.processes); // Extract the correct array
                } else {
                    var message = response.message;
                    resolve(response.processes);
//                    reject("Invalid response format");
                }
            },
            error: function (e) {
                console.error("Error fetching process configurations", e);
                reject(e);
            }
        });
    });
}

async function getAiAgentExcelAutoProcess(aiSearchString, processType, titleName, agentname, gridId, agentname) {
    let controller = new AbortController();
    let stopRequested = false;
    let pausedRequested = false;
    let currentProcessIndex = 0;
    let showAgentAssignMessage = true;
    let currentAgentId = null;
    let stopTaskResponse = null;

    let agentId = null;



    let agentStatusUniqueId = Math.random().toString(36).substr(2, 9);

// Stop handler
    $("#stopAiAgent").off('click').on('click', function () {
        stopRequested = true;
        controller.abort();
        $("#PauseAiAgent").hide();
        $.ajax({
            type: "POST",
            url: "stopTask",
            data: {index: currentProcessIndex, action: "stop"},
            cache: false,
            success: async function (response) {
                console.log("StopTask response:", response);
                speakMessage(agentId + "is stopped your " + response.taskName + "process");
                if (response && typeof response === 'object') {
                    let stopMessage = response.taskName
                            ? `Stopped task "${response.taskName}"`
                            : "Process stopped by user request";
                    if (response.stopped) {
                        AiAgentMessage(`⏸️ ${stopMessage}`);
                    } else {
                        AiAgentMessage("🛑 Stopped AI agent process.");
                    }

                }
//                else {
//                    
//                    console.warn("Invalid response format:", response);
//                    AiAgentMessage("🛑 AI agent has received a stop request, Please Wait.");
//                }
            },
            error: function (xhr, status, error) {
                console.error("StopTask error:", error, xhr.responseText);
                stopLoader();
                stopaiLoader();
                logMessage("Error stopping tasks.");
            }
        });
    });
    // Restart handler
    $("#restartAiAgent").off('click').on('click', function () {
        $("#restartAiAgent").hide();
        $("#stopAiAgent").show();
        pausedRequested = false;
        stopRequested = false;
        currentProcessIndex = 0;
        getAiAgentExcelAutoProcess(aiSearchString, processType, titleName, agentname, gridId, agentname);
    });

// Pause handler
    $("#PauseAiAgent").off('click').on('click', function () {
        pausedRequested = true;
        showAgentAssignMessage = false;
        $("#PauseAiAgent").hide();
        $("#continueAiAgent").show();
        $("#stopAiAgent").show();
        $.ajax({
            type: "POST",
            url: "stopTask",
            data: {index: currentProcessIndex, action: "pause"},
            cache: false,
            success: async function (response) {
                console.log("StopTask response:", response);
                stopTaskResponse = response; // Store the entire JSON response
                speakMessage(agentId + "is paused your " + response.taskName + "process");
                if (response && typeof response === 'object') {
//                    if (response.stopped) {
                    let pauseMessage = response.taskName
                            ? `Paused task "${response.taskName}"`
                            : "Process paused by user request";
                    if (response.stopped) {
                        AiAgentMessage(`⏸️ ${pauseMessage}`);
                    } else {
                        AiAgentMessage("⏸️ Paused AI agent process.");
                    }
//                        AiAgentMessage(`⏸️ ${pauseMessage}`);

                    await updateAgentStatus(currentAgentId, "AVAILABLE");
                    $("#restartAiAgent").hide();
                    $("#PauseAiAgent").hide();
                    $("#stopAiAgent").show();
                    $("#continueAiAgent").show();
//                    } else {
//                        console.warn("Invalid response format:", response);
//                        AiAgentMessage("⏸️ AI agent process pause requested, Please wait");
//                    }
                }
            },
            error: function (xhr, status, error) {
                console.error("StopTask error:", error, xhr.responseText);
                stopLoader();
                stopaiLoader();
                logMessage("Error stopping tasks.");
            }
        });
    });
// Continue handler 
    $("#continueAiAgent").off('click').on('click', function () {
        pausedRequested = false;
        showAgentAssignMessage = false;
        stopRequested = false;
        $("#continueAiAgent").hide();
        $("#stopAiAgent").show();
        $("#PauseAiAgent").show();
        $(".aicontentArea").addClass("extraHeighttoContentArea");
//        if (stopTaskResponse && stopTaskResponse.stopped && stopTaskResponse.index >= 0) {
        currentProcessIndex = stopTaskResponse.index;
//        }
        runProcessFromIndex(currentProcessIndex);
    });
    const AiAgentMessage = (message) => {
        const logData = `<div class='aiLensRobotDataClass'><span><img src='images/aiAgent.png' width='50px'/></span><label><span>${message}</span></label></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };
    const AiMessage = (message, processName, agentId) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><span><img src='images/aiAgent.png' width='50px'/></span><label><span><b>Agent:${agentId} </b> ${message}</span></label></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };
    const logMessage = (message) => {
        const logData = `<div class='aiLensResultDataClass'><div>${message}</div></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };
    const executeProcess = async (processName, methodName, data, agentId) => {
        return new Promise(async (resolveProcess) => {
            try {
                showaiLoader();

                let startTime = new Date().toISOString();
                let griddata = $('#' + gridId).jqxGrid('getrowdata', 0);
                let selectedRowsData = data ? [griddata] : [];
                data['jsonData'] = JSON.stringify(selectedRowsData);
                data['columnArray'] = JSON.stringify(data['columnArray']);
                data['batchId'] = aiSearchString || "";
                data['paramArray'] = JSON.stringify(data['classparams']);
                let requestId = data.requestId || `REQ_${Date.now()}`;
                let transactionId = data.transactionId || `TRANS_${Date.now()}`;
                await insertLog({
                    agentName: `AI_Agent_${agentId}`,
                    processName,
                    requestId,
                    transactionId,
                    userId: data.userId || "UNKNOWN_USER",
                    sourceSystem: "Web_UI",
                    requestData: JSON.stringify(data),
                    status: "PENDING",
                    startTime,
                    agentStatusUniqueId,
                    logLevel: "INFO"
                });
                AiMessage(`has initiated ${processName} process.`, processName, agentId);
                logMessage(`${processName} process has successfully initiated.`);
                $.ajax({
                    type: "POST",
                    url: methodName,
                    cache: false,
                    data,
                    traditional: true,
                    dataType: 'html',
                    async: true,
                    signal: controller.signal,
                    success: async (response) => {
                        stopaiLoader();
                        const endTime = new Date().toISOString();
                        if (stopRequested) {
                            await updateLog(requestId, "STOPPED", response, "", startTime, endTime, "WARNING");

                            return resolveProcess(false);
                        }

                        if (pausedRequested) {
                            let pauseMessage = stopTaskResponse && stopTaskResponse.taskName
                            await updateLog(requestId, "PAUSED", response, "", startTime, endTime, "INFO");

                            return resolveProcess(false);
                        }
                        if (!response) {
                            logMessage(`Unable to process ${processName}`);
                            await updateLog(requestId, "FAILURE", response, "No response", startTime, endTime, "WARNING");
                            return resolveProcess(false);
                        }

                        if (
                                response.startsWith('Exception::') ||
                                response.includes("failed with exception") ||
                                response.includes("was interrupted.")
                                ) {
                            const isStopRelated = response.includes("failed with exception") || response.includes("was interrupted.");
                            response = response.split("::");
                            const errorMessage = isStopRelated && stopTaskResponse && stopTaskResponse.taskName
                                    ? `${processName} execution stopped for task "${stopTaskResponse.taskName}"`
                                    : `Error in ${processName}: ${response[1]}`;
                            logMessage(errorMessage);
                            AiAgentMessage(isStopRelated ? `🛑 ${errorMessage}` : `❌ ${errorMessage}`);
                            speakMessage(errorMessage);
                            await updateLog(requestId, "ERROR", response, errorMessage, startTime, endTime, "ERROR");
                        } else {
//                            await handleAiAgentSuccess(response, processName, data['batchId'], gridId)
                            try {
                                await showProcessProgress(processName, agentId);
                            } catch (e) {
                            }
                            try {
                                $("#progressBarDivID").html("");
                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                            } catch (e) {
                                console.warn("Grid update error:", e);
                            }



                            sessionStorage.setItem(`${processName.toLowerCase()}Response`, response);

                            if (processName != null && processName != undefined && processName === 'Profiling') {
                                let result = `<div class="viewButton" onclick="showAILensIframePopup('${processName.toLowerCase()}Response', '${processName}')">
                                 <span class="viewIcon"><span class="viewText">View Data</span></span></div>`;
                                logMessage(`${processName} Process Completed ${result}`);
                            } else {

                                if (response != null && response !== undefined && response !== "") {
                                    let responseData = "";
                                    let responseObj = null;

                                    try {
                                        responseObj = JSON.parse(response);
                                    } catch (e) {
                                        // Response is not JSON, fallback to plain string handling
                                    }

                                    if (responseObj !== null && !jQuery.isEmptyObject(responseObj)) {
                                        let flag = responseObj['flag'];
                                        var recordNoList = responseObj['recordNoList'];
                                        let resultMessage = responseObj['resultMessage'];
                                        responseData = resultMessage;
                                    } else {
                                        if (response.trim().includes(",")) {
                                            let dataArray = response.split(',');
                                            let modifiedLines = dataArray.map(function (line) {
                                                return line.trim().replace(/^\d+\s*:\s*/, ''); // Remove leading numbers & colon
                                            });
                                            let resultList = "<ul>";
                                            modifiedLines.forEach(item => {
                                                resultList += "<li>" + item + "</li>";
                                            });
                                            resultList += "</ul>";
                                            responseData = resultList.replaceAll("Validation", "Quality Check");
                                        } else {
                                            responseData = response.replaceAll("Validation", "Quality Check");
                                        }
                                    }

                                    let viewname = ""; // Set view name if needed
                                    let logData = `<div class='aiLensResultDataClass'>
        <p class='queryanswerTitle'>Data ${viewname} process completed</p>
        <div>${responseData}</div>`;

                                    if (recordNoList != null && recordNoList !== "") {
                                        logData += `<div>Record No(s): ${recordNoList}</div>`;
                                    }

                                    logData += "</div>";

                                    let result = `<div class="viewButton" onclick="showProcessViewData('${processName}', '${aiSearchString}', '${agentId}', ''${data['gridId'] || gridId}'')">
        <span class="viewIcon"><span class="viewText">View Data</span></span></div>`;
                                   
                                    // ✅ Final log message with details + button
                                    logMessage(logData + result );
                                }
                            }


//                            AiAgentMessage(`✅ ${processName} Process Completed`);
                            await updateLog(requestId, "SUCCESS", response, null, startTime, endTime, "INFO");
                        }

                        showaiLoader();
                        setTimeout(() => {
                            resolveProcess(true);
                            stopaiLoader();
                        }, 10000);
                    },
                    error: async (error) => {
                        stopaiLoader();
                        const endTime = new Date().toISOString();
                        logMessage(`Error during ${processName}: ${error.message || 'Unknown error'}`);
                        await updateLog(requestId, "ERROR", error, error.message || 'AJAX error', startTime, endTime, "ERROR");
                        resolveProcess(false);
                    }
                });
            } catch (error) {
                stopaiLoader();
                console.error("Unexpected error in executeProcess:", error);
                await updateLog(requestId, "ERROR", error, error.message || 'Unexpected error', startTime, new Date().toISOString(), "ERROR");
                resolveProcess(false);
            }
        });
    };

    function speakMessage(message) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = message;
        speech.lang = "en-US";
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

        const voices = window.speechSynthesis.getVoices();

        // Pick a female voice in en-US (fallback to default if not found)
        const femaleVoice = voices.find(voice =>
            voice.lang === "en-US" && voice.name.toLowerCase().includes("female")
        ) || voices.find(voice => voice.lang === "en-US");

        if (femaleVoice) {
            speech.voice = femaleVoice;
        }

        window.speechSynthesis.speak(speech);
    }
    const runProcessFromIndex = async (index) => {
        let processes = await fetchProcessConfig(gridId, agentname);

        if (processes.length > 1) {
            $("#stopAiAgent").show();
            $("#PauseAiAgent").show();
            $("#continueAiAgent").hide();
            $(".aicontentArea").addClass("extraHeighttoContentArea");
        }
        if (showAgentAssignMessage) {
            AiAgentMessage("Please wait...AI agents will be assigned shortly.");
            // processType = "aiAgent";  // Uncomment if needed
        }
        const agentGroups = processes.reduce((acc, process) => {
            agentId = process.AGENT_ID;
            if (!acc[agentId])
                acc[agentId] = [];
            acc[agentId].push(process);
            return acc;
        }, {});
        await Promise.all(Object.entries(agentGroups).map(async ([agentId, agentProcesses]) => {
            const firstProcess = agentProcesses[0];
            if (!firstProcess.status || firstProcess.status === 'Failure') {
                return AiAgentMessage(firstProcess.message || `⚠️ Agent ${agentId} is not available.`);
            }
            if (showAgentAssignMessage) {
                AiAgentMessage(`One agent is found. <b>Agent: ${agentId}</b>`);
            }

            await updateAgentStatus(agentId, "BUSY");
            for (let i = index; i < agentProcesses.length; i++) {

                if (stopRequested) {
                    AiAgentMessage("🛑 Processing was manually stopped. You can restart the agent if needed.");
                    $("#stopAiAgent").hide();
                    $("#restartAiAgent").show();
                    await updateAgentStatus(agentId, "AVAILABLE");
                    return;
                }



                let {PROCESS_NAME, METHOD_NAME, DATA} = agentProcesses[i];
                if (DATA)
                    DATA = JSON.parse(DATA);
                await executeProcess(PROCESS_NAME, METHOD_NAME, DATA, agentId);
                if (pausedRequested) {
                    stopRequested = true;
                    currentProcessIndex = i;
//                    AiAgentMessage(`⏸️ ${agentProcesses[i].PROCESS_NAME} paused. Waiting for resume...`);
                    await updateAgentStatus(agentId, "AVAILABLE");
                    return;
                }
                currentProcessIndex = i + 1;
            }

            if (!stopRequested) {
                logMessage(`<div class='aiLensRobotDataClass'>
                    <span><img src='images/aiAgent.png' width='50px'/></span>
                    <label><span id='aiEndingId'>✅ All processes completed successfully for Agent ${agentId}.</span></label>
                </div>`);
                $("#PauseAiAgent").hide();
                $("#stopAiAgent").hide();
                $(".aicontentArea").removeClass('extraHeighttoContentArea');
                await updateAgentStatus(agentId, "AVAILABLE");
        }
        }));
    };
    try {
        await runProcessFromIndex(currentProcessIndex);
    } catch (err) {
        stopaiLoader();
        console.error("Unexpected error:", err);
        logMessage(`Unexpected error occurred: ${err.message}`);
    }
}

function showProgressBar() {
    $("#aiProgressBar").show();
    $("#aiProgressFill").css("width", "0%");
    setTimeout(() => {
        $("#aiProgressFill").css("width", "60%");  // Simulated progress step
    }, 200);
}

function completeProgressBar() {
    $("#aiProgressFill").css("width", "100%");
    setTimeout(() => {
        $("#aiProgressBar").fadeOut(300);
    }, 500);
}


function showProcessViewData(processname, batchId, agentId, gridId) {
    $.ajax({
        type: "POST",
        url: "getAiAgentProcessedData",
        cache: false,
        data: {
            processname: processname,
            batchId: batchId,
            agentId: agentId,
            gridId: gridId
        },
        traditional: true,
        dataType: 'html',
        async: true,
        success: async (response) => {
            stopaiLoader();
            $("#dialog").html(response);
            $("#dialog").dialog({
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: 'auto',
                minHeight: 'auto',
                minWidth: 1000,
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

        },
        error: async (error) => {
            stopaiLoader();

        }
    });

}


$('.aiLensAttachedmentFileNameDiv').on('drop', function (e) {
    //e.stopPropagation();
    //e.preventDefault();
    console.log("iam in drop functionality");
    var files = e.originalEvent.dataTransfer.files;
    console.log("iam in drop functionality1" + files);
});

async function updateAgentStatus(agentId, status) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "updateagentStatus",
            data: {
                agentId: agentId,
                status: status
            },
            dataType: "html",
            success: function (response) {
                console.log(`✅ Agent ${agentId} status updated to '${status}'`);
                resolve(response);
            },
            error: function (xhr, status, error) {
                console.error(`❌ Failed to update status for Agent ${agentId}:`, error);
                reject(error);
            }
        });
    });
}

async function showProcessProgress(processName, agentId) {
    return new Promise((resolve) => {
        let progressBarId = `progress-${processName}`;
        // Create a progress bar in UI
        let progressBarHtml = `
            <div class='processProgressContainer'>
                <label>${processName} Progress:  (<span class="agentIdHighlight">Agent: ${agentId}</span>)</label>
                <div class='progressBarOuter'>
                    <div class='progressBarInner' id='${progressBarId}'></div>
                </div>
            </div>`;
        $("#progressBarDivID").append(progressBarHtml);
        let progress = 0;
//        let progressBarId = "progress-Process(Staging to Active Area)";
//        let progress = 0; 
        let interval = setInterval(() => {
            progress += 10;
            $(`#${CSS.escape(progressBarId)}`).css("width", `${progress}%`);
            if (progress >= 100) {
                clearInterval(interval);
                resolve(true);
            }
        }, 1000); // Update progress every second (total 10 seconds)
    });
}
async function extractFromUrl(domain, role, gridId, componentType, agentname) {
    const url = $("#dataUrlInput").val();
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;

    if (!url || !urlPattern.test(url)) {
        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Please enter a valid URL.</div>");
        return;
    }

    showaiLoader();
    $('#sendUrlDataButton').prop('disabled', true);

    try {
        const csrfToken = $("meta[name='_csrf']").attr("content");
        const response = await fetch('getUrlExtractionData', {
            method: 'POST',
            headers: {
                'X-XSRF-TOKEN': csrfToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `url=${encodeURIComponent(url)}`,
        });

        stopaiLoader();
        $('#sendUrlDataButton').prop('disabled', false);

        if (response.ok) {
            const file = await response.blob();
            const contentDisposition = response.headers.get('Content-Disposition');
            let filename = 'extractedFile.xlsx';

            if (contentDisposition) {
                const matches = contentDisposition.match(/filename="(.+)"/);
                if (matches && matches[1])
                    filename = matches[1];
            }

            getAIAgentspopulateFileBrowserColMapping(
                    "", "", "aiQueryType", "aiSubQueryFlag", "aiTypeFlag", domain, role, "browseId", gridId, componentType, "clusterId", "settimeout", "clickedTitle", agentname, file, filename
                    );
        } else {
            $(".aiChatgptResponseContainer").append(`<div class='aiAppendSenderDataClass userSelectedOption'>Error: ${response.statusText}</div>`);
        }
    } catch (error) {
        $(".aiChatgptResponseContainer").append(`<div class='aiAppendSenderDataClass userSelectedOption'>An error occurred: ${error.message}</div>`);
        $('#sendUrlDataButton').prop('disabled', false);
    }

}

function extractfromPdf(domain, role, gridId, componentType, agentname) {
    let fileInput = document.getElementById("aiImageAttachedmentUpload");
    let file = fileInput.files[0];

    if (!file) {
        alert("Please select a file to upload.");
        return;
    }

    let formData = new FormData();
    formData.append("file", file);

    $.ajax({
        type: "POST",
        url: "extractPdfDatatoExcel", // Make sure the URL is correct and relative to your context path
        data: formData,
        processData: false,
        contentType: false,
        xhrFields: {
            responseType: 'blob' // Important: To handle binary response (xlsx)
        },
        success: function (blob) {
            stopLoader();
            stopaiLoader();

            // Prompt download
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            var filename = 'converted.xlsx';
            const file = blob;

            getAIAgentspopulateFileBrowserColMapping(
                    "", "", "aiQueryType", "aiSubQueryFlag", "aiTypeFlag", domain, role, "browseId", gridId, componentType, "clusterId", "settimeout", "clickedTitle", agentname, file, filename
                    );
        },
        error: function (e) {
            console.error("Error extracting PDF:", e);
            stopLoader();
            stopaiLoader();
            alert("Failed to convert PDF to Excel.");
        }
    });
}
let insertLog = async (logData) => {
    try {
        await $.ajax({
            type: "POST",
            url: "insertaiAgentlog",
//            dataType: 'html',
            async: true,
            contentType: "application/json", // ✅ Tell the server it's JSON
            data: JSON.stringify(logData), // ✅ Convert data to JSON
            dataType: "json"

        });
        console.log("Log inserted successfully!");
    } catch (error) {
        console.error("Log insert failed", error);
    }
}

// ✅ Function to Update Log Entry
let updateLog = async (requestId, status, response, errormsg, startTime, endTime, Loglvel) => {

    let logUpdate = {requestId, status, response, errormsg, endTime, Loglvel};
    await $.ajax({
        type: "POST",
        url: "updatelogaiagent",
        contentType: "application/json",
        async: true,
        data: JSON.stringify(logUpdate),
        dataType: "json",
        success: function (response) {
//            console.log(response.message);
        },
        error: function (e) {
            console.error("Error extracting PDF:", e);
            stopLoader();
            stopaiLoader();
            alert("Failed to convert PDF to Excel.");
        }
    });


}


function aIAgentFileDragDropEventLoad() {
    var dropArea = $('#userAIInputBottomWidgetId');
    var dragCounter = 0;
    dropArea.on('dragover', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (!$(this).hasClass('overlayDragContainer')) {
            $(this).addClass('overlayDragContainer');
        }
    });

    dropArea.on('dragenter', function (event) {
        event.preventDefault();
        event.stopPropagation();
        dragCounter++;

        if (!$(this).hasClass('overlayDragContainer')) {
            $(this).addClass('overlayDragContainer');
        }
    });

    dropArea.on('dragleave', function (event) {
        event.preventDefault();
        event.stopPropagation();
        dragCounter--;

        if (dragCounter === 0) {
            $(this).removeClass('overlayDragContainer');
        }
    });


    dropArea.on('drop', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var files = event.originalEvent.dataTransfer.files;
        dragfile = event.originalEvent.dataTransfer.files[0];
        $(this).removeClass('overlayDragContainer');
        $('#aiTypedValue').focus();
        dragCounter = 0;
        if (files.length > 0) {
            var file = files[0];
            var filetype = file.type;
            if (filetype.startsWith('image/')) {
                loadImage(file);
//                showAITypeSearchResults();
            } else if (filetype === 'text/plain') {
                loadAiDataFile(file);
            } else {
                loadAiDataFile(file);
            }
        }
    });
}

function processiSpirAgent() {
    var fileValue = $('#aiAttachedmentImageUpload').val();
    var imgValue = $('#aiImageAttachedmentUpload').val();
    var dragFIle = $('#aiFileDragDrop').children().text();
    var dragimage = $('#aiImageDragDrop').children('img').attr('src');
    var file = $('#aiAttachedmentImageUpload')[0].files[0];
    aiAgentvalidationProcessField(imgValue);
}

function processiSpirAgent(domain, role, gridid, type, agentname, agentid) {
    var fileValue = $('#aiAttachedmentImageUpload').val();
    var imgValue = $('#aiImageAttachedmentUpload').val();
    var dragFIle = $('#aiFileDragDrop').children().text();
    var dragimage = $('#aiImageDragDrop').children('img').attr('src');
    var file = $('#aiAttachedmentImageUpload')[0].files[0];
    aiAgentvalidationProcessField(imgValue);

}
async function aiAgentvalidationProcessField(file) {
    let randomId = Math.floor(Math.random() * 1000);
    let agentNo = "007";
    var randomDigit = "Agent:DE-" + agentNo + "";
    const AiMessage = (message, processName) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><span><img class='aiAgentImgClass'></span><label><span><b>${randomDigit}</b>${message}</span></label></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };

    $("#aiLensAttachedmentFile").html("");
    $("#aiTypedValue").val("");
    $.ajax({
        type: "POST",
        async: false,
        datatype: "json",
        data: {
            aiRandomId: randomId
        },
        url: "aiLensiSPIRFormData",
        cache: false,

        success: function (response) {
            stopaiLoader();
            defaultAITypingBasedOnResponse(response, '', "", "");
            setTimeout(() => {
                $("#processSubmit").unbind("click").on("click", async function () {
                    let isValid = true;
                    $("#processForm select").each(function () {
                        var value = $(this).val().trim();
                        var label = $(this).attr("data-column").trim();
                        var errorSpan = $(this).next(".errormsg");

                        if (!(value != null && value != undefined && value != "") || value.includes("Select")) {
                            isValid = false;
                            errorSpan.text(label + " field is required").css("color", "red");
                        } else {
                            errorSpan.text("");
                        }
                    });

                    if (isValid) {
                        try {
                            await Promise.all([
                                aiLensAgentLogOperations("insert", agentNo, randomDigit),
                                aiLensAgentLogOperations("", agentNo, randomDigit)
                            ]);

                            setTimeout(() => {
                                AiMessage(" has assigned for processing the data.", "Processing");
                                AiMessage(`Your request has successfully been assigned to <b>${randomDigit}</b> and is currently being processed. Please wait while the system completes the necessary tasks. You will be notified once the process is complete.`);
                            }, 2000);
                            setTimeout(() => {
                                processAIAgentiSPIR(file, "update", "MM_MGR_SPER_REG");
                            }, 5000);

                        } catch (error) {
                            console.error("Error in agent log operations:", error);
                        }
                    }
                });
            }, 12000);

        },
        error: function (xhr, status, error) {
            stopLoader();
            console.error("AJAX Error:", status, error);
            throw new Error(error);
        },
        complete: function () {

        }
    });

}

function processAIAgentiSPIR(file, operationName, gridId) {
    showaiLoader();
    let url = "";
    getDomaincomponent('PRODUCT', 'MM_MANAGER', 'ISPIR_PROCESSES', 'ISPIR_SEARCH', 'Y', 'iSPIR');

    if (operationName == 'delete') {
        url = "gridDeleteRecords";
    } else if (operationName == 'deleteCls') {
        url = "txmnyDeleteRecords";
    } else
    {
        if (operationName == 'umupdate') {
            url = "bulkUserUpdate";
        } else if (operationName == 'update') {
            url = "gridUpdateRecords";
        }
    }
    var selectedDataArray = [];
    const spirData = {
        AUDIT_ID: "",
        CREATE_DATE: new Date(),
        CREATE_USER: "KIRAN_MGR",
        EDIT_DATE: new Date(),
        EDIT_USER: $("#sidebar").attr("data-role"),
        MM_MGR_SPER_REG_HIDDEN: "INSERT",
        REGION: "IN",
        SPIR_COMMENT: "",
        SPIR_CUST_COLUMN5: "",
        SPIR_DESCR: "",
        SPIR_EQUIP_MNFR: "",
        SPIR_EQUIP_MNFR_ID: "",
        SPIR_FUNC_AREA: "",
        SPIR_INSTANCE: "100",
        SPIR_NO: "",
        PROJECT: $("#iSpirProjectAiId").val(),
        SPIR_PLANT: $("#iSpirAiPlantId").val(),
        SPIR_REC_ID: "",
        SPIR_REG_BY: $("#sidebar").attr("data-role"),
        SPIR_STATUS: "SPIR_REGISTERED",
        SPIR_SUPPL_CDE: "",
        boundindex: 0,
        uid: 0,
        uniqueid: "2019-30-30-30-262723",
        visibleindex: 0
    };
    var paramArray = [];
    var paramObj = {}
    paramObj.column = 'SPIR_REC_ID';
    paramObj.operator = "EQUALS";
    paramObj.value = '';
    paramArray.push(paramObj);
    getcluster('MM_SPIR_REG_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);
    selectedDataArray.push(spirData)
    if (selectedDataArray.length != 0) {
        $.ajax({
            type: "POST",
            url: url,
            data: {
                gridJsonData: JSON.stringify(selectedDataArray),
                gridId: gridId,
                tableName: "O_SPIR_ATTACH"
            },
            traditional: true,
            cache: false,
            success: function (result) {
                stopaiLoader()

                if (result != null && result != '' && result != undefined) {
                    var dataStr = result.split(":");
                    $("#spirRecId").remove();


                    if (dataStr.length > 1) {
                        var responsStr = "<span>" + dataStr[0] + "</span>";
                        $("body").append(dataStr[1]);
                        var spirRecId = $("#spirRecId").val();
                    } else {
                        console.error("Invalid format: result does not contain ':'");
                    }
                    var paramArray = [];
                    var paramObj = {}
                    paramObj.column = 'SPIR_REC_ID';
                    paramObj.operator = "EQUALS";
                    paramObj.value = spirRecId;
                    paramArray.push(paramObj);
                    getcluster('MM_SPIR_REG_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);
                    setTimeout(function () {
                        AIAgentSpirFileUpload(file, selectedDataArray, gridId, "O_SPIR_ATTACH", responsStr);
                    }, 5000)



                }

            },
            error: function (e)
            {
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
}
function AIAgentSpirFileUpload(file, selectedDataArray, gridId, tableName, responsStr) {
    let agentNo = "007";
    var randomDigit = "Agent:DE-" + agentNo + "";
    const AiMessage = (message, processName) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><img class='aiAgentImgClass'></span><label><span><b>${randomDigit}</b></span><span>${message}</span></span></label></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };
    AiMessage("Please hold on, the file analysis is currently in progress...");
    var spirRecId = $("#spirRecId").val();
//    var spirNo = $("#spirNo").val();
    var spirNo = '';
    var dataObject = selectedDataArray[0];
    dataObject['SPIR_REC_ID'] = spirRecId;
    dataObject['MM_MGR_SPER_REG_HIDDEN'] = 'UPDATE';
    if (Object.keys(dataObject).length > 0) {
        var secretKey = $('meta[name=keygeneration]').attr("content");

        var basicDataStr = JSON.stringify(dataObject);

        var formData = new FormData();

        if (basicDataStr && basicDataStr !== '{}' && basicDataStr !== 'null') {
            basicDataStr = CryptoJS.AES.encrypt(basicDataStr, secretKey);
            formData.append('basicDataStr', basicDataStr);
        }

        formData.append('importFile', file);
        formData.append('reqType', "SPIR");
        formData.append('gridId', gridId);
        formData.append('selectedGridId', gridId);
        formData.append('tableName', tableName);

        for (let key in dataObject) {
            formData.append(key, dataObject[key]);
        }
        showaiLoader();
        $.ajax({
            url: 'importFile',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (result) {
                stopaiLoader();
                const data = {
                    fileType: "iSPIR",
                    sheets: 1,
                    equipmentTags: 20,
                    spares: 12
                };

                const tableHtml = `<span>This file has been identified as SPIR</span>
    <table class='table table-bordered validationrecordInfo'">
        <tbody>
            <tr>
                <td >File Type</td>
                <td>${data.fileType}</td>
            </tr>
            <tr>
                <td >No of Sheets</td>
                <td >${data.sheets}</td>
            </tr>
            <tr>
                <td >No of Equipment Tags</td>
                <td >${data.equipmentTags}</td>
            </tr>
            <tr>
                <td>No of Spares</td>
                <td>${data.spares}</td>
            </tr>
        </tbody>
    </table>
`;

                defaultAITypingBasedOnResponse(tableHtml);



                //defaultAITypingBasedOnResponse(generateAccessData("Would you like to process the SPIR", "aiprocesId"));
                setTimeout(() => {
                    //$("#aiprocesId").off("click").on("click", function () {
                    AiMessage("System is checking whether you are Authorized for processing to this specific Plant, Project");
                    setTimeout(function () {
                        AiMessage("Yes, you are Authorized");
                        setTimeout(function () {
                            handleAuthorization(gridId, result);
                        }, 1000)
                    }, 8000)

                }, 5000);
                //}, 10000);


            },
            error: function (xhr, status, error) {
                console.error("Error uploading file: ", error);
                $("#Loader").css("display", "none");
                $("body").css("pointer-events", "auto");
                stopLoader();
            }
        });
    }
}
//function AiAgentAutoiSPIRProcess(gridId, dataObject, spirNo) {
//    var selectedRowDataArray = [];
//    var paramArray = [];
//    $("#" + gridId).jqxGrid('selectallrows');
//    var rowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
//    let agentNo = "007";
//    var randomDigit = "Agent:DE-" + agentNo + "";
//    const AiMessage = (message, id) => {
//        const logData = `<div class='aiLensRobotDataClass' ><span><img class='aiAgentImgClass'></span><label><span><b>${randomDigit}</b><span id='${id}'>${message}</span></span></label></div>`;
//        defaultAITypingBasedOnResponse(logData, '', "", "");
//    };
//
//    rowIndexes.forEach(index => {
//        var rowData = $("#" + gridId).jqxGrid('getrowdata', index);
//        if (rowData) {
//            selectedRowDataArray.push(rowData);
//        }
//    });
//
//    console.log(selectedRowDataArray); // This will contain the selected rows' data
//
//    const logMessage = (message) => {
//        const logData = `<div class='aiLensResultDataClass'><div>${message}</div>`;
//        defaultAITypingBasedOnResponse(logData, '', "", "");
//    };
//
//    const handleAjaxSuccess = (response, processName, callback) => {
//        stopLoader();
//        stopaiLoader();
//
//        if (!response) {
//            logMessage(`Unable to process ${processName}`);
//            return;
//        }
//
//        if (response.startsWith('Exception::')) {
//            logMessage(`Unable to process ${processName}: ${response}`);
//        } else {
////            if (processName == "Data Validation") {
//            var responseobj = JSON.parse(response);
//            logMessage(responseobj['message']);
////            } else {
////                const dataArray = response.trim().includes(",") ? response.split(',') : [response];
////                const modifiedLines = dataArray.map(line => line.trim().replace(/^\d+\s*:\s*/, ''));
////                const resultList = modifiedLines.map(item => `<li>${item}</li>`).join('');
////                responseData = `<ul>${resultList}</ul>`;
////                logMessage(responseData);
////            }
//
//            var paramObj = {}
//            paramObj.column = 'SPIR_NO';
//            paramObj.operator = "EQUALS";
//            paramObj.value = spirNo;
//            paramArray.push(paramObj);
//            logMessage("Quality Check process completed for selected Records of SPIR No:" + spirNo + "");
//
//            getcluster('MM_SPIR_DATA_UPLOAD_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);
//            setTimeout(function () {
//                //callback && callback();
//                var defaultValues = $("#MM_MGR_SPER_VERIFICATION_COMPLETED_defaultValues").val();
//
//                $("#MM_MGR_SPER_VERIFICATION_COMPLETED").jqxGrid('selectallrows');
//                var rowIndexes = $("#MM_MGR_SPER_VERIFICATION_COMPLETED").jqxGrid('getselectedrowindexes');
//
//                rowIndexes.forEach(index => {
//                    var rowData = $("#MM_MGR_SPER_VERIFICATION_COMPLETED").jqxGrid('getrowdata', index);
//                    if (rowData) {
//                        selectedRowDataArray.push(rowData);
//                    }
//                });
//                AiMessage("Staging to Active area process initiated for Imported Records of SPIR No:" + spirNo + "");
//                showaiLoader();
//                $.ajax({
//
//                    type: "post",
//                    url: "saveRecord",
//                    cache: false,
//                    data: {
//                        jsonData: JSON.stringify(selectedRowDataArray),
//                        gridId: 'MM_MGR_SPER_VERIFICATION_COMPLETED',
//                        panelId: $('#panelId').val(),
//                        formId: $('#formId').val(),
//                        tableName: $('#tableName').val(),
//                        defaultValues: defaultValues,
//                        dropVal: "Create"
//                    },
//                    traditional: true,
//                    dataType: 'html',
//                    success: function (response) {
//                        stopLoader();
//                        stopaiLoader();
//                        alert("response::::" + response);
//                        if (response != null && response != '') {
//                            var responseObj = JSON.parse(response);
//                            var response1 = labelObject[responseObj['message']];
//                            var response1 = responseObj['message'];
//                            var response2 = responseObj['resultMessage'];
////                            logMessage(response1);
//                            logMessage(response2);
//
//                            logMessage("Staging to Active area process completed for selected Records of SPIR No:" + spirNo + "");
//                            setTimeout(() => {
//                                AiMessage("Please wait...", "aiEndingId");
//                            }, 2000)
//                            getcluster('MM_SPIR_PROCESS_COMPLETED', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);
//                            setTimeout(() => {
//
//                                $("#aiEndingId").text('Ensuring all operations are completed...');
//                                sessionStorage.removeItem("AgentNo");
//                                sessionStorage.removeItem("AgentFlag");
//                                setTimeout(() => {
//                                    $("#aiEndingId").text('successfully completed the process.');
////                                aiLensAgentLogOperations("update", agentNo)
//                                    sessionStorage.removeItem("AgentNo");
//                                    sessionStorage.removeItem("AgentFlag");
//                                }, 10000);
//                            }, 5000);
//
////                            setTimeout(function () {
////                                logMessage("<span>Please view these items in this basket</span>" +
////                                        "<div class='viewData AILensDisOrEnaClass' style='display:flex;'>" +
////                                        "<div class='viewButton' id='transferViewData'>" +
////                                        "<span><span class='viewIcon'></span>Navigate</span>" +
////                                        "</div>" +
////                                        "</div>");
////                                setTimeout(function () {
////                                    $("#transferViewData").unbind("click").on("click", function () {
////                                        getMaterialComponentGrid('GRID', 'MM_TRF_REG_ERP_MGR', 'MM_MANAGER', "")
////                                    }, 5000)
////                                }, 5000)
////
////                            }, 500)
//
//                        }
//
//                    },
//                    error: function (e) {
//                        sessionTimeout(e);
//                        stopaiLoader();
//                    }
//
//                });
//
//
//            }, 5000)
//        }
//    };
//
//    const executeAjaxCall = (url, processName, data, gridID, callback) => {
//        if (!url) {
//            console.error(`Invalid URL for ${processName}`);
//            return;
//        }
//
//        showaiLoader();
//        $.ajax({
//            type: "POST",
//            url: url,
//            cache: false,
//            data: data,
//            traditional: true,
//            dataType: 'html',
//            async: true,
//            success: (response) => handleAjaxSuccess(response, processName, gridID, callback),
//            error: (e) => {
//                console.error(`Error during ${processName}:`, e);
//                stopLoader();
//                stopaiLoader();
//                logMessage(`Error during ${processName}`);
//            }
//        });
//    };
//
//    try {
//
//        AiMessage("Quality Check process initiated for selected Records of SPIR No:" + spirNo + "");
//        executeAjaxCall("spirOperation", "Data Validation", {
//            selectedRowData: JSON.stringify(selectedRowDataArray),
//            gridId: 'MM_MGR_SPER_UPLOAD',
//            operationName: 'VALIDATE'
//        }, () => {
//
//        });
//
//    } catch (e) {
//        console.error("Unexpected error:", e);
//        stopLoader();
//        stopaiLoader();
//        logMessage("Unexpected error occurred during processing.");
//    }
//}

//function generateAccessData(message, id) {
//    return `
//        <div class='aiLensResultDataClass'>
//            <div>${message}</div>
//            <div class="viewData AILensDisOrEnaClass" style='display:flex;'>
//                <div class="viewButton" id="${id}">
//                    <span><span class="viewIcon"><img src="images/aiConfYes.png" class="aiDefaultYesImgClass"></span> Yes</span>
//                </div>
//                <div class="viewButton" onclick="resolveAccess(false)" style='margin-left:15px;'>
//                    <span><span class="viewIcon"><img src="images/aiConfNo.png" class="aiDefaultNoImgClass"></span> No</span>
//                </div>
//            </div>
//        </div>`;
//}

// Function to handle authorization logic
async function handleAuthorization1(gridId, result) {
    //$("#aiAuthoriseId").off("click").on("click",function () {
    var spirRecId = $("#spirRecId").val();
    var spirNo = "";
    var paramArray = [];
    var paramObj = {}
    var spirRecId = $("#spirRecId").val();
    paramObj.column = 'SPIR_REC_ID';
    paramObj.operator = "EQUALS";
    paramObj.value = spirRecId;
    paramArray.push(paramObj);
    getcluster('MM_SPIR_REG_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);

    setTimeout(function () {

        var selectedRowDataArray = [];
        var rowData;
        var data = $('#' + gridId).jqxGrid('getrowdata', 0);
        var paramArray = [];
        var paramObj = {}
        paramObj.column = 'SPIR_NO';
        paramObj.operator = "EQUALS";
        paramObj.value = data['SPIR_NO'];
        spirNo = data['SPIR_NO'];
        paramArray.push(paramObj);
        defaultAITypingBasedOnResponse("<span>" + result.replace("processed", "Imported") + "for SPIR No: " + spirNo + "</span>");
        getcluster('MM_SPIR_VERIFICATION_PROCESS', 'MM_MANAGER', 'PRODUCT', 'N', paramArray);

    }, 2000)
    setTimeout(function () {
//        getAIAgentiSPIRAutoHarmonize('Please_proceed_to_Process_the_Imported_Data', 'Auto_Harmonize', 'ISPIRPROCESS', 'N', 'N', 'MM_MGR_SPER_UPLOAD', spirNo, 'getPhythonDHSApiResponse', '{"classparams":[{"apiParamName":"tableName","apiParamType":"F","apiParamValue":"V_MM_ISPIR"},{"apiParamName":"colsArray","apiParamType":"F","apiParamValue":"PART_REF,OBJ_QUAL,LONG_DESC"},{"apiParamName":"colsarry","apiParamType":"F","apiParamValue":"PART_REF,OBJ_QUAL,LONG_DESC"},{"apiParamName":"BATCH_ID","apiParamType":"F","apiParamValue":"B_SEARCH_STRING"},{"apiParamName":"batch_id","apiParamType":"F","apiParamValue":"B_SEARCH_STRING"},{"apiParamName":"analysisType","apiParamType":"F","apiParamValue":"CLASS_ALLOCATION"},{"apiParamName":"accessName","apiParamType":"B","apiParamValue":"IDXPDBNAME"},{"apiParamName":"access_name","apiParamType":"B","apiParamValue":"IDXPDBNAME"},{"apiParamName":"user_name","apiParamType":"B","apiParamValue":"IDXPDBUSERNAME"},{"apiParamName":"password","apiParamType":"B","apiParamValue":"IDXPDBPWD"},{"apiParamName":"host","apiParamType":"B","apiParamValue":"IDXPDBHOST"},{"apiParamName":"port","apiParamType":"B","apiParamValue":"IDXPDBPORT"},{"apiParamName":"update_table","apiParamType":"F","apiParamValue":"STG_ESPIR"},{"apiParamName":"update_columns","apiParamType":"F","apiParamValue":"OBJ_QUAL"},{"apiParamName":"filter_column","apiParamType":"F","apiParamValue":"PART_REF"},{"apiParamName":"apiURL","apiParamType":"B","apiParamValue":"CLASS_ALLOCATION_URL"}],"dataParams":[{"apiParamName":"table_name","apiParamType":"F","apiParamValue":"V_MM_ISPIR"},{"apiParamName":"colsarry","apiParamType":"F","apiParamValue":"PART_REF,OBJ_QUAL,LONG_DESC"},{"apiParamName":"batch_id","apiParamType":"F","apiParamValue":"B_SEARCH_STRING"},{"apiParamName":"access_name","apiParamType":"B","apiParamValue":"IDXPDBNAME"},{"apiParamName":"user_name","apiParamType":"B","apiParamValue":"IDXPDBUSERNAME"},{"apiParamName":"password","apiParamType":"B","apiParamValue":"IDXPDBPWD"},{"apiParamName":"host","apiParamType":"B","apiParamValue":"IDXPDBHOST"},{"apiParamName":"port","apiParamType":"B","apiParamValue":"IDXPDBPORT"},{"apiParamName":"apiURL","apiParamType":"B","apiParamValue":"DATA_EXTRACTION_URL"}],"updateParams":{"updateIds":"DataMapping1,DataMapping2,Characterstics,Reference,Document,FFT","excludeParams":"DataMapping1,DataMapping2,FFT"}}')

    }, 3000)

    // });
}
async function getAIAgentiSPIRAutoHarmonize(aiQuery, aiQueryAns, aiQueryType, aiSubQueryFlag, aiTypeFlag, gridId, batchId, url, paramArray) {
    var responseData = "";
    let agentNo = "007";
    var randomDigit = "Agent:DE-" + agentNo + "";
    const AiMessage = (message, processName) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><span><img class='aiAgentImgClass'></span><label><span><span><b><${randomDigit}</b></span>${message}</span></label></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };

    try {

//         var paramArraystr = paramArray.replace("B_SEARCH_STRING", batchId);
        var paramArraystr = paramArray.replace(/B_SEARCH_STRING/g, batchId);

        var paramObject = JSON.parse(paramArraystr)
        var classparamArray = JSON.stringify(paramObject['classparams']);
        var dataParamArray = JSON.stringify(paramObject['dataParams']);
        var updateParam = JSON.stringify(paramObject['updateParams']);

        if (classparamArray != null && classparamArray != '' && classparamArray != undefined && dataParamArray != null && dataParamArray != '' && dataParamArray != undefined
                && batchId != null && batchId != '' && batchId != 'null' && batchId != undefined) {


            var logData = "<div class='aiLensResultDataClass'>"
                    + "<div>Auto Harmonization process initiated for selected Records of SPIR No: " + batchId + "</div>"
                    + "</div>"
            openAINavigation();
            AiMessage("Auto Harmonization process initiated for selected Records of SPIR No: " + batchId + "", '', "", "");

            var logData = "<div class='aiLensResultDataClass'>"
                    + "<div>Class Allocation process initiated for selected Records of SPIR No: " + batchId + "</div>"
                    + "</div>"
            AiMessage("Class Allocation process initiated for selected Records of SPIR No: " + batchId + "", '', "", "");
            showaiLoader();
//            showLoader();
            $.ajax({
                type: "post",
                url: url,
                cache: false,
                data: {
                    paramArray: classparamArray,
                    batchId: batchId
                },
                traditional: true,
                dataType: 'html',
                async: true,
                success: function (response) {
                    stopLoader();
                    stopaiLoader();
                    if (response != null && response != undefined && response != "") {


                        if (response.startsWith('Exception::')) {
                            var logData = "<div class='aiLensResultDataClass'>"
                                    + "<div>Unable to process Data for Class Allocation</div>"
                                    + "<div>" + response + "</div>"
                                    + "</div>"
                            defaultAITypingBasedOnResponse(logData, '', "", "");
                        } else {
                            if (response.trim().includes(",")) {
                                var dataArray = response.split(',');
                                var modifiedLines = dataArray.map(function (line) {
                                    return line.trim().replace(/^\d+\s*:\s*/, ''); // Removes leading spaces and digits with colon
                                });
                                var resultList = "<ul>";
                                modifiedLines.forEach(item => {
                                    resultList += "<li>" + item + "</li>"
                                });
                                responseData = resultList += "</ul>"

                            } else {
                                responseData = response;
                            }
                            var classonclick = "getAIContentBasedOnQueryPopUp('Class Allocation process completed for iSPIR Imported Records','View Details','ISPIRPROCESS','H','N','" + batchId + "')";
                            var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                    + "<h5>Class Allocation process completed:</h5>"
                                    + "<div>" + responseData + "</div>"
                                    + "<a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + classonclick + "\">View Data</a>"
                                    + "</div>"
                            defaultAITypingBasedOnResponse(logData, '', "", "");
                            if (gridId != null && gridId != undefined && gridId != '') {
                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                            }
                            var logData = "<div class='aiLensResultDataClass'>"
                                    + "<div>Data Enrichment process has initiated for selected Records of SPIR No: " + batchId + "</div>"
                                    + "</div>"
                            AiMessage("Data Enrichment process has initiated for selected Records of SPIR No: " + batchId + "", '', "", "");
                            showaiLoader();
//                            showLoader();
                            $.ajax({
                                type: "post",
                                url: url,
                                cache: false,
                                data: {
                                    paramArray: dataParamArray,
                                    batchId: batchId
                                },
                                traditional: true,
                                dataType: 'html',
                                async: true,
                                success: function (response) {
                                    stopLoader();
                                    stopaiLoader();
                                    if (response != null && response != undefined && response != "") {
                                        if (response.startsWith('Exception::')) {
                                            var logData = "<div class='aiLensResultDataClass'>"
                                                    + "<div>Unable to process Data Extraction</div>"
                                                    + "<div>" + response + "</div>"
                                                    + "</div>"
                                            AiMessage(logData, '', "", "");
                                        } else {
                                            if (response.trim().includes(",")) {
                                                var dataArray = response.split(',');
                                                var modifiedLines = dataArray.map(function (line) {
                                                    return line.trim().replace(/^\d+\s*:\s*/, ''); // Removes leading spaces and digits with colon
                                                });
                                                var resultList = "<ul>";
                                                modifiedLines.forEach(item => {
                                                    resultList += "<li>" + item + "</li>"
                                                });
                                                responseData = resultList += "</ul>"

                                            } else {
                                                responseData = response;
                                            }
                                            var dataonclick = "getAIContentBasedOnQueryPopUp('Data Extraction process completed for iSPIR Imported Records','View Details','ISPIRPROCESS','H','N','" + batchId + "')";
                                            var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
                                                    + "<h5>Data Enrichment process is completed</h5>"
                                                    + "<div>" + responseData + "</div>"
                                                    //+ "<a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + dataonclick + "\">View Data</a>"
                                                    + "</div>"
                                            defaultAITypingBasedOnResponse(logData, '', "", "");
                                            stopaiLoader();
                                            setTimeout(function () {
                                                AiAgentAutoiSPIRProcess('MM_MGR_SPER_UPLOAD', null, batchId);
                                            }, 2500)


                                        }

                                    } else {
                                        stopLoader();
                                        stopaiLoader();
                                        var logData = "<div class='aiLensResultDataClass'>"
                                                + "<div>Unable to process Data Extraction for Imported Records of SPIR No: " + batchId + "</div>"
                                                + "</div>"
                                        AiMessage(logData, '', "", "");
                                    }
                                }, error: function (e) {
//                    sessionTimeout(e);
                                    stopLoader();
                                    stopaiLoader();
                                }
                            });



                        }

                    } else {
                        stopLoader();
                        stopaiLoader();
                        var logData = "<div class='aiLensResultDataClass'>"
                                + "<div>Unable to process Data for Class Allocation for Imported Records of SPIR No: " + batchId + "</div>"
                                + "</div>"
                        defaultAITypingBasedOnResponse(logData, '', "", "");
                    }
                }, error: function (e) {
//                    sessionTimeout(e);
                    stopLoader();
                    stopaiLoader();
                }
            });

        }

    } catch (e) {
        stopLoader();
        stopaiLoader();
    }

}


function processAgentTasklist(gridid, clusterid, role, domain, flag, agentname) {
    let fileInput = document.getElementById("aiImageAttachedmentUpload"); // Get file input field
    let file = fileInput.files[0];
    let fileName = file['name'];
//    getAIAgentMutipleFileUploadColMapping(file, fileName, gridid,clusterid,role,flag, agentname);
    getAIAgentMutipleFileUploadColMapping1(file, fileName, gridid, clusterid, role, domain, flag, agentname);

}

//task list operations start
async function getAIAgentMutipleFileUploadColMapping1(file, fileName, gridId, clusterid, role, domain, flag, agentname) {
    $("#aiLensAttachedmentFile").html("");
    $("#aiTypedValue").val("");
    $('#aiAttachedmentImageUpload').val("");
    $('#aiImageAttachedmentUpload').val("");
    let agentNo = "007";
    var randomDigit = "Agent:TL-" + agentNo;
    const AiMessage = (message, processName) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><span><img class='aiAgentImgClass'></span><label><span>${message}</span></span></label></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };
    const logMessage = (message) => {
        const logData = `<div class='aiLensResultDataClass'><div>${message}</div></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };

    getcluster(clusterid, role, domain, flag);

    const aiMessages = [
        "Please hold on, the file analysis is in progress.",
        "File with multiple sheets identified.",
        "Reading all sheets one by one.",
        "Please map the columns of the sheet."
    ];
    aiMessages.forEach((msg, index) => {
        setTimeout(() => {
            AiMessage(msg, randomDigit);
        }, (index + 2) * 3000);
    });
    $("#aiTypedValue").val('');
    var settimeout = '10000';
    var formData = new FormData();
    formData.append("importFile", file, fileName);
    formData.append("gridId", gridId);
    showaiLoader();
    $.ajax({
        url: 'importMultiFileAjaxColMapping',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        settimeout: settimeout,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
            $("#Loader").css({opacity: "0.99", display: "block"});
            $("body").css("pointer-events", "none");
            startAjax(); // Optional: Include your custom start logic
        },
        success: function (result) {
            stopaiLoader();
            setTimeout(function () {
                var multiResultObject = JSON.parse(result);
                var multiListGridIdArr = multiResultObject['multiListGridId']
                var columnMappingGlobalObj = {};
                var mappedFileHeadersObject = {};
                var mappedGridColumnsObj = {};
                var fileHeadersObj = {};
                var gridTable = "";
                var filePath = "";
                var htmlDiv = "";
                for (var key in multiListGridIdArr) {
                    if (multiListGridIdArr.hasOwnProperty(key)) {
                        var gridListId = multiListGridIdArr[key];

                        htmlDiv += "<div id='importFileColumnsMapppingOptionsDiv_" + gridListId + "' >"
                                + "<img id='importFileColumnsMapppingInfo_" + gridListId + "' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
                                + "</div>"
                                + "<div id='importFileColumnMappingId_" + gridListId + "' class='' ></div>";

                    }
                }
                $("#messagedialog5").html(htmlDiv);
                $("#messagedialog5").addClass("ai-panel-flowchart multipleMappingsFlowChart");
                $("#messagedialog5").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Map Columns'] != null ? labelObject['Map Columns'] : 'Map Columns'),
                    height: 500,
                    minHeight: 'auto',
                    width: 900,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Import'] != null ? labelObject['Import'] : 'Import'),
                            click: function () {
                                showaiLoader();
                                $.ajax({
                                    type: "post",
                                    traditional: true,
                                    dataType: 'html',
                                    url: 'importExcelMultiColMapping',
                                    cache: false,
                                    data: {
                                        tableName: gridTable,
                                        filePath: filePath,
                                        gridId: gridId,
                                        mappedFileHeadersArray: JSON.stringify(mappedFileHeadersObject),
                                        mappedGridColumnsArray: JSON.stringify(mappedGridColumnsObj),
                                        fileHeaders: JSON.stringify(fileHeadersObj),
                                        columnMappingObjStr: JSON.stringify(columnMappingGlobalObj)
                                    },
                                    success: function (result) {
                                        ///stopaiLoader();
                                        showaiLoader();
                                        var responseObj = JSON.parse(result);
                                        var batchNumber = responseObj['batchNumber'];
                                        var resultStr = responseObj['finalresult'];
                                        const resultObjStr = `[${resultStr.replace(/}\s*{/g, '},{')}]`;

                                        const resultObj = JSON.parse(resultObjStr);
                                        showaiLoader();
                                        setTimeout(function () {

                                            var tableHtml = '<span>Data imported sucessfully in staging area, In Uploaded Document we found <b>' + resultObj[0]['rowCount'] + ' Task List(s)</b></span>' +
                                                    '<table class="table table-bordered validationrecordInfo">' +
                                                    '<tbody>' +
                                                    '<tr>' +
                                                    '<td>Batch No</td>' +
                                                    '<td>' + batchNumber + '</td>' +
                                                    '</tr>' +
                                                    '<tr>' +
                                                    '<td>Imported Rows</td>' +
                                                    '<td>' + resultObj[0]['rowCount'] + '</td>' +
                                                    '</tr>' +
//                                                        '<tr>' +
//                                                        '<td>Equipent Rows </td>' +
//                                                        '<td>' + resultObj[0]['rowCount'] + '</td>' +
//                                                        '</tr>' +
                                                    '</tbody>' +
                                                    '</table>';

                                            AiMessage(tableHtml);
                                            $('#' + gridId).jqxGrid('updatebounddata');
                                            showaiLoader();
                                            setTimeout(function () {
                                                getAssignAgentProcess(gridId, batchNumber, agentname);
                                            }, 10000);
                                        }, 5000);

                                    },
                                    error: function (e) {
                                        console.log(e);
                                        sessionTimeout(e);
                                        stopaiLoader();
                                    }
                                })

                                $(this).html("");
                                $(this).dialog("close");
                            }
                        }],
                    open: function () {
                        for (var key in multiResultObject) {
                            if (multiResultObject.hasOwnProperty(key) && key != "multiListGridId") {
                                var resultObject = multiResultObject[key];
                                var fileHeaders = resultObject['headersArray']
                                if (resultObject['filePath'] != null && resultObject['filePath'] != "") {
                                    filePath = resultObject['filePath'];
                                }
                                gridTable = resultObject['gridTable'];
                                var columnLabels = resultObject['columnLabels']
                                var datafields = resultObject['datafields']
                                var columnNameInputs = {};
                                var columnNameArray = [];
                                var mappedGridColumnsArray = [];
                                var mappedGridLabelssArray = [];
                                var mappedFileHeadersArray = [];
                                fileHeadersObj[key] = fileHeaders;
                                var columnMappingObj = {};
                                var inputCount = 0;
                                $.each(columnLabels, function (i) {
                                    var columname = columnLabels[i];
                                    var datafield = datafields[i];
                                    if (columname != null && columname != "" && columname.indexOf("_HIDDEN")) {
                                        //gridColumns.push(columname);

                                        var input = {};
                                        input['label'] = columname;
                                        input['value'] = datafield;
                                        columnNameInputs['input_' + inputCount] = input;
                                        inputCount++;
                                        columnNameArray.push(columname);
                                    }
                                });

                                var fileHeaders = resultObject['headersArray']
                                //var filePath = resultObject['filePath']
                                var fileName = resultObject['fileName']

                                var headersCount = resultObject['headersCount']
                                var fileRowCount = resultObject['fileRowCount']

                                var fileTitle = "<div>File Name : " + fileName + "<br>"
                                        + "Columns Count : " + headersCount + "<br>"
                                        + "Rows Count : " + fileRowCount + "</div>";
//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                                var tableTitle = "<div>Staging Table <br>"
                                        + "Columns Count : " + columnNameArray.length + "<br>"
                                        + "Rows Count : " + fileRowCount + "</div>";
                                var fileHeaderObject = {};
                                $.each(fileHeaders, function (i) {
                                    var header = fileHeaders[i];
                                    fileHeaderObject[header] = header;
                                })
                                if (fileHeaders.length > Object.keys(fileHeaderObject).length) {
                                    showMesg("Duplicate file headers found. Please make changes to proceed.");
                                    $(this).html("");
                                    $(this).dialog("close");
                                    throw new Error("Duplicate file headers found.");
                                }

                                var linksData = {};
                                var fileHeaderOutputs = {};
                                var linkId = 0;
                                var maxHeaderLength = 0;
                                var matchedColumns = [];
                                $.each(fileHeaders, function (i) {
                                    var output = {};
                                    output['label'] = fileHeaders[i];
                                    if (columnNameArray.indexOf(fileHeaders[i]) > -1) {
                                        var linkdata = {};
                                        linkdata['fromConnector'] = "output_" + i;
                                        linkdata['fromOperator'] = "operator1";
                                        linkdata['fromSubConnector'] = 0;
                                        linkdata['toConnector'] = "input_" + (columnNameArray.indexOf(fileHeaders[i]));
                                        linkdata['toOperator'] = "operator2";
                                        linkdata['toSubConnector'] = 0;
                                        linksData[linkId] = linkdata;
                                        linkId++;
                                        matchedColumns.push(fileHeaders[i]);
                                    }

                                    maxHeaderLength = fileHeaders[i].length > maxHeaderLength ? fileHeaders[i].length : maxHeaderLength;
                                    fileHeaderOutputs['output_' + i] = output;
                                })

                                var data = {
                                    operators: {
                                        operator1: {
                                            top: 20,
                                            left: 20,
                                            width: 300,
                                            properties: {
                                                title: fileTitle,
                                                inputs: {},
                                                outputs: fileHeaderOutputs,
                                            }
                                        },
                                        operator2: {
                                            top: 20,
                                            left: 500,
                                            width: 300,
                                            properties: {
                                                title: tableTitle,
                                                inputs: columnNameInputs,
                                                outputs: {}
                                            }
                                        },
                                    },
                                    links: {}
                                };
                                // Apply the plugin on a standard, empty div...
                                $('#importFileColumnMappingId_' + key).flowchart({
                                    data: data,
                                    linkWidth: 2,
                                    multipleLinksOnOutput: true,
                                    canUserEditLinks: true,
                                    canUserMoveOperators: true
                                });
                                $(".flowchart-operator-connector-label").each(function (i) {
                                    var linkData = linksData[i];
                                    var text = $(this).text();
                                    if (matchedColumns.indexOf(text) > -1) {
                                        $(this).css("color", "green");
                                    } else {
                                        $(this).css("color", "red");
                                    }

                                })

                                $('#importFileColumnMappingId_' + key).flowchart({
                                    onOperatorMoved: function (operatorId, position) {
                                        if (position.top < 0) {
                                            var operatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', operatorId);
                                            operatorData.top = 20;
                                            $('#importFileColumnMappingId_' + key).flowchart('setOperatorData', operatorId, operatorData);
                                            $(".flowchart-operator-connector-label").show();
//                                        $(".flowchart-operator").css("width", "300px", "!important"); 
//                                        $(".flowchart-operator").css("height", "auto", "!important");
                                            $(".flowchart-operator-title").show();
                                        }
                                        return true;
                                    },
                                    onLinkCreate: function (linkId, linkData) {
                                        var getdata = $('#importFileColumnMappingId_' + key).flowchart('getData');
                                        var fromOperator = linkData['fromOperator']
                                        var fromConnector = linkData['fromConnector'];
                                        var fromOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', fromOperator);
                                        var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                        mappedFileHeadersArray.push(label);
                                        var toOperator = linkData['toOperator']
                                        var toConnector = linkData['toConnector'];
                                        var toOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', toOperator);
                                        var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                        var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                                        mappedGridColumnsArray.push(value);
                                        mappedGridLabelssArray.push(tolabel);
                                        columnMappingObj[label] = value;
                                        $(".flowchart-operator-connector-label").each(function (i) {
                                            var text = $(this).text();
                                            if (text == label || text == tolabel) {
                                                if (label == tolabel) {
                                                    $(this).css("color", "green");
                                                } else {
                                                    $(this).css("color", "blue");
                                                }

                                            }
                                        })


                                        return true;
                                    },
                                    onLinkDelete: function (linkId, forced) {

                                        var flowChartData = $('#importFileColumnMappingId_' + key).flowchart('getData');
                                        var links = flowChartData['links'];
                                        var linkData = links[linkId];
                                        var toOperator = linkData['toOperator']
                                        var toConnector = linkData['toConnector'];
                                        var toOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
                                        var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                        var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                                        var mappedValueIndex = mappedGridColumnsArray.indexOf(value);
                                        mappedGridColumnsArray.splice(mappedValueIndex, 1);
                                        var mappedLabelIndex = mappedGridLabelssArray.indexOf(tolabel);
                                        mappedGridLabelssArray.splice(mappedLabelIndex, 1);
                                        var fromOperator = linkData['fromOperator']
                                        var fromConnector = linkData['fromConnector'];
                                        var fromOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', fromOperator);
                                        var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                        mappedFileHeadersArray.splice(mappedValueIndex, 1);
                                        $(".flowchart-operator-connector-label").each(function (i) {
                                            var text = $(this).text();
                                            if (text == label || text == tolabel) {
                                                if (label == tolabel) {
                                                    $(this).css("color", "green");
                                                } else {
                                                    $(this).css("color", "red");
                                                }

                                            }
                                        })
                                        return true;
                                    }, onLinkSelect: function (linkId) {
                                        var linkId = $('#importFileColumnMappingId_' + key).flowchart('getSelectedLinkId');
                                        $('#importFileColumnMappingId_' + key).one('click', function () {
                                            $('#importFileColumnMappingId').flowchart('deleteSelected');
                                        });
                                        return true;
                                    }

                                });
                                $(".flowchart-operator-connector-label").show();
//                            $(".flowchart-operator-connector-label").css("width", maxHeaderLength * 10 + "px", "!important");
                                $(".flowchart-operator").css("width", "300px", "!important");
                                $(".flowchart-operator").css("height", "auto", "!important");
                                $(".flowchart-operator-title").show();
                                $.each(linksData, function (linkid, linkdata) {
                                    $('#importFileColumnMappingId_' + key).flowchart('addLink', linkdata);
                                })

                                $("#fileAnalyticsId").popover({
                                    trigger: "click",
                                    html: true,
                                    maxwidth: 'auto',
                                    placement: "right",
                                    //                title: "Event Timings", 
                                    content: function (event) {
                                        showFileColumnAnalytics(this, filePath);
                                        return '<div class="popoverContentDiv"><div class="circularLoader"></div></div>'
                                    },
                                    //                    height:250px,
                                });
                                $("#fileDataTypesValidationId").popover({
                                    trigger: "click",
                                    html: true,
                                    maxwidth: 'auto',
                                    placement: "right",
                                    //                title: "Event Timings", 
                                    content: function (event) {

                                        showFileDataTypesValidation(this, filePath, gridTable, mappedFileHeadersArray, mappedGridColumnsArray, mappedGridLabelssArray);
                                        return '<div class="popoverContentDiv"><div class="circularLoader"></div></div>'
                                    },
                                    //                    height:250px,
                                });
                                $("#importFileColumnsMapppingInfo_" + key).popover({
                                    trigger: "click",
                                    html: true,
                                    maxwidth: 'auto',
                                    placement: "left",
                                    //                title: "Event Timings", 
                                    content: function (event) {
                                        var html = "<div id='carouselExampleControls'class='carousel slide'data-bs-ride='carousel'>"
                                                + "<ul>"
                                                + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                                + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                                + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                                + "<li><img src='images/list-point-Icons.png' alt='' > <span> Map File columns to Table columns by using your mouse.</span></li>"
                                                + "</ul>"
                                                + "<div class='mappingiconwrapper'>"
                                                + "<span><img src='images/mapping.svg' alt='' ></span>"
                                                + "<span><img src='images/mapping.svg' alt='' ></span>"
                                                + "<span><img src='images/mapping.svg' alt='' ></span>"
                                                + "<span><img src='images/mapping.svg' alt='' ></span>"
                                                + "</div>"

                                                + "</div>";
                                        return html;
                                    },
                                    //                    height:250px,
                                });
                                $("#importFileColumnsMapppingInfo_" + key).on("shown.bs.popover", function () {
                                    $("#carouselExampleControls").parent().addClass("helpIconPopOverclass");
                                });
                                $("#fileAnalyticsId").attr("title", "Analysis");
                                $("#fileDataTypesValidationId").attr("title", "Validate Datatypes");
                                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                                $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");

                                mappedFileHeadersObject[key] = mappedFileHeadersArray;
                                mappedGridColumnsObj[key] = mappedGridColumnsArray;
                                columnMappingGlobalObj[key] = columnMappingObj;
                            }
                        }
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".popover").remove();
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }, 10000)
            try {
                stopLoader(); //27
            } catch (e) {
                stopLoader(); //28
            }
        }
        , onCancel: function () {
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
//            stopLoader();//29
        }
        //catch()}
    });
}

function getAssignAgentProcess(gridId, batchNumber, agentname) {
    var result = "<div class='listItemsText'>" +
            "<ul class='listItemsViews'>" +
            "<li>" +
            "<div class='aiLensResultDataClass' title='Do you want to process the data using an AI agent?'>" +
            "Do you want to process the data using an AI agent?" +
            "</div>" +
            "<div class='viewData AILensDisOrEnaClass'>" +
            "<div class='viewButton' id='manualDHProcess' onclick='getAiAgentMultiExcelAutoProcess(\"manual\", \"aiAutoResults\",\"Manual Process\",\"Manual Process\")'>" +
            "<span><span class='viewIcon'><img src='images/process_icon_blue.png' class='aiManualProcessImgClass'></span><span style='margin-left:10px;'>NO</span></span>" +
            "</div>" +
            "<div class='viewButton' onclick='getAiAgentMultiExcelAutoProcess(\"" + batchNumber + "\",\"" + gridId + "\",\"" + agentname + "\")'>" +
            "<span><span class='viewIcon'><img src='images/process_icon_blue.png' class='aiAgentImgClass'></span><span style='margin-left:10px;'>YES</span></span>" +
            "</div>" +
            "</div>" +
            "</li>" +
            "</ul>" +
            "</div>";
    defaultAITypingBasedOnResponse(result, '', "", "");
}
async function getAiAgentMultiExcelAutoProcess(batchNumber, gridId, agentname) {
    let controller = new AbortController();
    let stopRequested = false;
    let pausedRequested = false;
    let currentProcessIndex = 0;
    let showAgentAssignMessage = true;
    let currentAgentId = null;
    let stopTaskResponse = null;

    let agentId = null;
    var selectedRowDataArray = [];
    $("#" + gridId).jqxGrid('selectallrows');
    var rowIndexes = $("#" + gridId).jqxGrid('getselectedrowindexes');

    rowIndexes.forEach(index => {
        var rowData = $("#" + gridId).jqxGrid('getrowdata', index);
        if (rowData) {
            selectedRowDataArray.push(rowData);
        }
    });

// Stop handler
    $("#stopAiAgent").off('click').on('click', function () {
        stopRequested = true;
        controller.abort();
        $("#PauseAiAgent").hide();
        $.ajax({
            type: "POST",
            url: "stopTask",
            data: {index: currentProcessIndex, action: "stop"},
            cache: false,
            success: async function (response) {
                console.log("StopTask response:", response);
                speakMessage(agentId + "is stopped your " + response.taskName + "process");
                if (response && typeof response === 'object') {
                    let stopMessage = response.taskName
                            ? `Stopped task "${response.taskName}"`
                            : "Process stopped by user request";
                    if (response.stopped) {
                        AiAgentMessage(`⏸️ ${stopMessage}`);
                    } else {
                        AiAgentMessage("🛑 Stopped AI agent process.");
                    }

                }
//                else {
//                    
//                    console.warn("Invalid response format:", response);
//                    AiAgentMessage("🛑 AI agent has received a stop request, Please Wait.");
//                }
            },
            error: function (xhr, status, error) {
                console.error("StopTask error:", error, xhr.responseText);
                stopLoader();
                stopaiLoader();
                logMessage("Error stopping tasks.");
            }
        });
    });
    // Restart handler
    $("#restartAiAgent").off('click').on('click', function () {
        $("#restartAiAgent").hide();
        $("#stopAiAgent").show();
        pausedRequested = false;
        stopRequested = false;
        currentProcessIndex = 0;
        getAiAgentExcelAutoProcess(batchNumber, gridId, agentname);
    });
// Pause handler
    $("#PauseAiAgent").off('click').on('click', function () {
        pausedRequested = true;
        showAgentAssignMessage = false;
        $("#PauseAiAgent").hide();
        $("#continueAiAgent").show();
        $("#stopAiAgent").show();
        $.ajax({
            type: "POST",
            url: "stopTask",
            data: {index: currentProcessIndex, action: "pause"},
            cache: false,
            success: async function (response) {
                console.log("StopTask response:", response);
                stopTaskResponse = response; // Store the entire JSON response
                speakMessage(agentId + "is paused your " + response.taskName + "process");
                if (response && typeof response === 'object') {
//                    if (response.stopped) {
                    let pauseMessage = response.taskName
                            ? `Paused task "${response.taskName}"`
                            : "Process paused by user request";
                    if (response.stopped) {
                        AiAgentMessage(`⏸️ ${pauseMessage}`);
                    } else {
                        AiAgentMessage("⏸️ Paused AI agent process.");
                    }
//                        AiAgentMessage(`⏸️ ${pauseMessage}`);

                    await updateAgentStatus(currentAgentId, "AVAILABLE");
                    $("#restartAiAgent").hide();
                    $("#PauseAiAgent").hide();
                    $("#stopAiAgent").show();
                    $("#continueAiAgent").show();
//                    } else {
//                        console.warn("Invalid response format:", response);
//                        AiAgentMessage("⏸️ AI agent process pause requested, Please wait");
//                    }
                }
            },
            error: function (xhr, status, error) {
                console.error("StopTask error:", error, xhr.responseText);
                stopLoader();
                stopaiLoader();
                logMessage("Error stopping tasks.");
            }
        });
    });
// Continue handler 
    $("#continueAiAgent").off('click').on('click', function () {
        pausedRequested = false;
        showAgentAssignMessage = false;
        stopRequested = false;
        $("#continueAiAgent").hide();
        $("#stopAiAgent").show();
        $("#PauseAiAgent").show();
        $(".aicontentArea").addClass("extraHeighttoContentArea");
//        if (stopTaskResponse && stopTaskResponse.stopped && stopTaskResponse.index >= 0) {
        currentProcessIndex = stopTaskResponse.index;
//        }
        runProcessFromIndex(currentProcessIndex);
    });
    const AiAgentMessage = (message) => {
        const logData = `<div class='aiLensRobotDataClass'><span><img src='images/aiAgent.png' width='50px'/></span><label><span>${message}</span></label></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };
    const AiMessage = (message, processName, agentId) => {
        const logData = `<div class='aiLensRobotDataClass' id='${"AI" + processName}'><span><img src='images/aiAgent.png' width='50px'/></span><label><span><b>Agent:${agentId} </b> ${message}</span></label></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };
    const logMessage = (message) => {
        const logData = `<div class='aiLensResultDataClass'><div>${message}</div></div>`;
        defaultAITypingBasedOnResponse(logData, '', "", "");
    };
    const executeProcess = async (processName, methodName, data, agentId) => {
        return new Promise(async (resolveProcess) => {
            try {
                showaiLoader();
                let startTime = new Date().toISOString();
                let griddata = $('#' + gridId).jqxGrid('getrowdata', 0);
//                let selectedRowsData = data ? [griddata] : [];
                data['jsonData'] = JSON.stringify(selectedRowDataArray);
                data['columnArray'] = JSON.stringify(data['columnArray']);
                data['batchId'] = batchNumber || "";
                data['paramArray'] = JSON.stringify(data['classparams']);
                let requestId = data.requestId || `REQ_${Date.now()}`;
                let transactionId = data.transactionId || `TRANS_${Date.now()}`;
                await insertLog({
                    agentName: `AI_Agent_${agentId}`,
                    processName,
                    requestId,
                    transactionId,
                    userId: data.userId || "UNKNOWN_USER",
                    sourceSystem: "Web_UI",
                    requestData: JSON.stringify(data),
                    status: "PENDING",
                    startTime,
                    logLevel: "INFO"
                });
                AiMessage(`has initiated ${processName} process.`, processName, agentId);
                logMessage(`${processName} process has successfully initiated.`);
                $.ajax({
                    type: "POST",
                    url: methodName,
                    cache: false,
                    data,
                    traditional: true,
                    dataType: 'html',
                    async: true,
                    signal: controller.signal,
                    success: async (response) => {
                        stopaiLoader();
                        const endTime = new Date().toISOString();
                        if (stopRequested) {
                            await updateLog(requestId, "STOPPED", response, "", startTime, endTime, "WARNING");

                            return resolveProcess(false);
                        }
                        if (pausedRequested) {
                            let pauseMessage = stopTaskResponse && stopTaskResponse.taskName
                            await updateLog(requestId, "PAUSED", response, "", startTime, endTime, "INFO");

                            return resolveProcess(false);
                        }
                        if (!response) {
                            logMessage(`Unable to process ${processName}`);
                            await updateLog(requestId, "FAILURE", response, "No response", startTime, endTime, "WARNING");
                            return resolveProcess(false);
                        }
                        if (
                                response.startsWith('Exception::') ||
                                response.includes("failed with exception") ||
                                response.includes("was interrupted.")
                                ) {
                            const isStopRelated = response.includes("failed with exception") || response.includes("was interrupted.");
                            response = response.split("::");
                            const errorMessage = isStopRelated && stopTaskResponse && stopTaskResponse.taskName
                                    ? `${processName} execution stopped for task "${stopTaskResponse.taskName}"`
                                    : `Error in ${processName}: ${response[1]}`;
                            logMessage(errorMessage);
                            AiAgentMessage(isStopRelated ? `🛑 ${errorMessage}` : `❌ ${errorMessage}`);
                            speakMessage(errorMessage);
                            await updateLog(requestId, "ERROR", response, errorMessage, startTime, endTime, "ERROR");
                        } else {
//                            await handleAiAgentSuccess(response, processName, data['batchId'], gridId)
                            try {
                                await showProcessProgress(processName, agentId);
                            } catch (e) {
                            }
                            try {
                                $("#progressBarDivID").html("");
                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                            } catch (e) {
                                console.warn("Grid update error:", e);
                            }
                            sessionStorage.setItem(`${processName.toLowerCase()}Response`, response);
                            if (processName != null && processName != undefined && processName === 'Profiling') {
                                let result = `<div class="viewButton" onclick="showAILensIframePopup('${processName.toLowerCase()}Response', '${processName}')">
                                 <span class="viewIcon"><span class="viewText">View Data</span></span></div>`;
                                logMessage(`${processName} Process Completed ${result}`);
                            } else {

                                if (response != null && response !== undefined && response !== "") {
                                    let responseData = "";
                                    let responseObj = null;

                                    try {
                                        responseObj = JSON.parse(response);
                                    } catch (e) {
                                        // Response is not JSON, fallback to plain string handling
                                    }
                                    if (responseObj !== null && !jQuery.isEmptyObject(responseObj)) {
                                        let flag = responseObj['flag'];
                                        var recordNoList = responseObj['recordNoList'];
                                        let resultMessage = responseObj['resultMessage'];
                                        responseData = resultMessage;
                                    } else {
                                        if (response.trim().includes(",")) {
                                            let dataArray = response.split(',');
                                            let modifiedLines = dataArray.map(function (line) {
                                                return line.trim().replace(/^\d+\s*:\s*/, ''); // Remove leading numbers & colon
                                            });
                                            let resultList = "<ul>";
                                            modifiedLines.forEach(item => {
                                                resultList += "<li>" + item + "</li>";
                                            });
                                            resultList += "</ul>";
                                            responseData = resultList.replaceAll("Validation", "Quality Check");
                                        } else {
                                            responseData = response.replaceAll("Validation", "Quality Check");
                                        }
                                    }
                                    let viewname = ""; // Set view name if needed
                                    let logData = `<div class='aiLensResultDataClass'>
                                       <p class='queryanswerTitle'>Data ${viewname} process completed</p>
                                      <div>${responseData}</div>`;

                                    if (recordNoList != null && recordNoList !== "") {
                                        logData += `<div>Record No(s): ${recordNoList}</div>`;
                                    }
                                    logData += "</div>";
                                    let result = `<div class="viewButton" onclick="showProcessViewData('${processName}', '${batchNumber}', '${agentId}', '${gridId}')">
                                   <span class="viewIcon"><span class="viewText">View Data</span></span></div>`;

                                    // ✅ Final log message with details + button
                                    logMessage(logData + result);
                                }
                            }
                            await updateLog(requestId, "SUCCESS", response, null, startTime, endTime, "INFO");
                        }
                        showaiLoader();
                        setTimeout(() => {
                            resolveProcess(true);
                            stopaiLoader();
                        }, 10000);
                    },
                    error: async (error) => {
                        stopaiLoader();
                        const endTime = new Date().toISOString();
                        logMessage(`Error during ${processName}: ${error.message || 'Unknown error'}`);
                        await updateLog(requestId, "ERROR", error, error.message || 'AJAX error', startTime, endTime, "ERROR");
                        resolveProcess(false);
                    }
                });
            } catch (error) {
                stopaiLoader();
                console.error("Unexpected error in executeProcess:", error);
                await updateLog(requestId, "ERROR", error, error.message || 'Unexpected error', startTime, new Date().toISOString(), "ERROR");
                resolveProcess(false);
            }
        });
    };
    function speakMessage(message) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = message;
        speech.lang = "en-US";
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

        const voices = window.speechSynthesis.getVoices();

        // Pick a female voice in en-US (fallback to default if not found)
        const femaleVoice = voices.find(voice =>
            voice.lang === "en-US" && voice.name.toLowerCase().includes("female")
        ) || voices.find(voice => voice.lang === "en-US");

        if (femaleVoice) {
            speech.voice = femaleVoice;
        }

        window.speechSynthesis.speak(speech);
    }

//    function speakMessage(message) {
//        const speech = new SpeechSynthesisUtterance();
//        speech.text = message;
//        speech.lang = "en-US";
//        speech.volume = 1;
//        speech.rate = 1;
//        speech.pitch = 1;
//
//        window.speechSynthesis.speak(speech);
//    }
    const runProcessFromIndex = async (index) => {
        let processes = await fetchProcessConfig(gridId, agentname);

        if (processes.length > 1) {
            $("#stopAiAgent").show();
            $("#PauseAiAgent").show();
            $("#continueAiAgent").hide();
            $(".aicontentArea").addClass("extraHeighttoContentArea");
        }
        if (showAgentAssignMessage) {
            AiAgentMessage("Please wait...AI agents will be assigned shortly.");
            // processType = "aiAgent";  // Uncomment if needed
        }
        const agentGroups = processes.reduce((acc, process) => {
            agentId = process.AGENT_ID;
            if (!acc[agentId])
                acc[agentId] = [];
            acc[agentId].push(process);
            return acc;
        }, {});
        await Promise.all(Object.entries(agentGroups).map(async ([agentId, agentProcesses]) => {
            const firstProcess = agentProcesses[0];
            if (!firstProcess.status || firstProcess.status === 'Failure') {
                return AiAgentMessage(firstProcess.message || `⚠️ Agent ${agentId} is not available.`);
            }
            if (showAgentAssignMessage) {
                AiAgentMessage(`One agent is found. <b>Agent: ${agentId}</b>`);
            }

            await updateAgentStatus(agentId, "BUSY");
            for (let i = index; i < agentProcesses.length; i++) {

                if (stopRequested) {
                    AiAgentMessage("🛑 Processing was manually stopped. You can restart the agent if needed.");
                    $("#stopAiAgent").hide();
                    $("#restartAiAgent").show();
                    await updateAgentStatus(agentId, "AVAILABLE");
                    return;
                }
                let {PROCESS_NAME, METHOD_NAME, DATA} = agentProcesses[i];
                if (DATA)
                    DATA = JSON.parse(DATA);
                await executeProcess(PROCESS_NAME, METHOD_NAME, DATA, agentId);
                if (pausedRequested) {
                    stopRequested = true;
                    currentProcessIndex = i;
//                    AiAgentMessage(`⏸️ ${agentProcesses[i].PROCESS_NAME} paused. Waiting for resume...`);
                    await updateAgentStatus(agentId, "AVAILABLE");
                    return;
                }
                currentProcessIndex = i + 1;
            }
            if (!stopRequested) {
                logMessage(`<div class='aiLensRobotDataClass'>
                    <span><img src='images/aiAgent.png' width='50px'/></span>
                    <label><span id='aiEndingId'>✅ All processes completed successfully for Agent ${agentId}.</span></label>
                </div>`);
                $("#PauseAiAgent").hide();
                $("#stopAiAgent").hide();
                $(".aicontentArea").removeClass('extraHeighttoContentArea');
                await updateAgentStatus(agentId, "AVAILABLE");
        }
        }));
    };
    try {
        await runProcessFromIndex(currentProcessIndex);
    } catch (err) {
        stopaiLoader();
        console.error("Unexpected error:", err);
        logMessage(`Unexpected error occurred: ${err.message}`);
    }
}
//let flowInstance;
//let allSteps = {};
//let flowConnections = [];
//let renderedSteps = new Set();
///**
// * Initialize jsPlumb flow engine on given container
// */
//function initFlowEngine(containerId) {
//    const container = document.getElementById(containerId);
//    container.innerHTML = '';
//
//    flowInstance = jsPlumb.getInstance({
//        Connector: ['Flowchart', { cornerRadius: 5 }],
//        Endpoint: 'Dot',
//        EndpointStyle: { radius: 4, fill: '#333' },
//        PaintStyle: { stroke: '#666', strokeWidth: 2 },
//        Anchors: ['BottomCenter', 'TopCenter'],
//        Container: containerId
//    });
//}
////
/////**
//// * Add a step box to the flowchart
//// */
////function addStepToFlowchart(stepId, positionY = 0) {
////    const step = allSteps[stepId];
////    const stepEl = document.createElement('div');
////    stepEl.id = step.id;
////    stepEl.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
////    stepEl.style.position = 'absolute';
////    stepEl.style.top = `${positionY}px`;
////    stepEl.style.left = `300px`;
////    stepEl.style.width = '250px';
////    stepEl.innerHTML = `<strong>${step.label}</strong><br>${step.method}<br><small>${step.status}</small>`;
////    document.getElementById("aiagentWorkflowId").appendChild(stepEl);
////
////    flowInstance.draggable(step.id, { containment: true });
////
////    flowConnections.forEach(conn => {
////        if (conn.from === stepId && document.getElementById(conn.to)) {
////            flowInstance.connect({ source: conn.from, target: conn.to });
////        } else if (conn.to === stepId && document.getElementById(conn.from)) {
////            flowInstance.connect({ source: conn.from, target: conn.to });
////        }
////    });
////}
////
/////**
//// * Execute process steps and render flowchart step by step
//// */
////async function processAndRenderStepsSequentially(batchNumber, gridId, agentProcesses, agentId) {
////    let positionY = 20;
////
////    for (let i = 0; i < agentProcesses.length; i++) {
////        const stepId = `step${i + 1}`;
////        const step = allSteps[stepId];
////        if (!step) continue;
////
////        step.status = 'In Progress';
////        addStepToFlowchart(stepId, positionY);
////
////        const data = step.rawData || {};
////        const griddata = $('#' + gridId).jqxGrid('getrowdata', 0);
////        const selectedRowsData = griddata ? [griddata] : [];
////
////        data['jsonData'] = JSON.stringify(selectedRowsData);
////        data['columnArray'] = JSON.stringify(data['columnArray'] || []);
////        data['batchId'] = batchNumber || "";
////        data['paramArray'] = JSON.stringify(data['classparams'] || []);
////
////        await new Promise((resolveProcess) => {
////            showaiLoader();
////
////            $.ajax({
////                type: "POST",
////                url: step.method,
////                cache: false,
////                data,
////                traditional: true,
////                dataType: 'html',
////                async: true,
////                success: (response) => {
////                    stopaiLoader();
////                    if (!response || response.startsWith('Exception::') || response.includes("failed with exception") || response.includes("was interrupted.")) {
////                        step.status = 'Failed';
////                        resolveProcess(false);
////                    } else {
////                        try {
////                            $("#progressBarDivID").html("");
////                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
////                        } catch (e) {
////                            console.warn("Grid update error:", e);
////                        }
////                        step.status = 'Completed';
////                        resolveProcess(true);
////                    }
////
////                    const el = document.getElementById(stepId);
////                    el.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
////                    el.innerHTML = `<strong>${step.label}</strong><br>${step.method}<br><small>${step.status}</small>`;
////                },
////                error: (error) => {
////                    stopaiLoader();
////                    console.error("AJAX error in process step:", error);
////                    step.status = 'Failed';
////                    resolveProcess(false);
////                }
////            });
////        });
////
////        positionY += 120;
////        await new Promise(res => setTimeout(res, 500));
////    }
////}
////
//async function showstatusWorkflow(aiSearchString, gridId, agentname) {
//    let batchnumber = aiSearchString;
//    initFlowEngine('aiagentWorkflowId');
//
//    let processes = await fetchProcessConfig(gridId, agentname);
//    const agentGroups = processes.reduce((acc, process) => {
//        const agentId = process.AGENT_ID;
//        if (!acc[agentId]) acc[agentId] = [];
//        acc[agentId].push(process);
//        return acc;
//    }, {});
//
//    for (const [agentId, agentProcesses] of Object.entries(agentGroups)) {
//        allSteps = {};
//        flowConnections = [];
//
//        agentProcesses.forEach((proc, index) => {
//            const stepId = `step${index + 1}`;
//            allSteps[stepId] = {
//                id: stepId,
//                label: proc.PROCESS_NAME,
//                method: proc.METHOD_NAME,
//                status: 'Idle',
//                rawData: proc.DATA ? JSON.parse(proc.DATA) : {}
//            };
//            if (index > 0) {
//                flowConnections.push({ from: `step${index}`, to: stepId });
//            }
//        });
//
//        await processAndRenderStepsSequentially(batchnumber, gridId, agentProcesses, agentId);
//    }
//}
//
//function addStepToFlowchart(stepId, positionX = 0) {
//    const step = allSteps[stepId];
//    const stepEl = document.createElement('div');
//    stepEl.id = step.id;
//    stepEl.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
//    stepEl.style.position = 'absolute';
//    stepEl.style.top = `100px`; // Vertically centered
//    stepEl.style.left = `${positionX}px`; // Horizontal position
//    stepEl.style.width = '220px';
//    stepEl.style.padding = '12px';
//    stepEl.style.borderRadius = '8px';
//    stepEl.style.textAlign = 'center';
//    stepEl.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
//    stepEl.style.backgroundColor =
//        step.status === 'In Progress' ? '#fffbe6' :
//        step.status === 'Completed' ? '#e0f8e9' :
//        step.status === 'Failed' ? '#fbeaea' : '#f0f0f0';
//
//    stepEl.innerHTML = `
//        <strong style="font-size: 15px;">${step.label}</strong><br>
//        <div style="color: #555;">${step.method}</div>
//        <div style="margin-top: 5px; font-size: 13px;">${step.status}</div>
//    `;
//
//    document.getElementById("aiagentWorkflowId").appendChild(stepEl);
//
//    // Make draggable
//    flowInstance.draggable(step.id, { containment: true });
//
//    // Connect to other steps
//    flowConnections.forEach(conn => {
//        if ((conn.from === stepId || conn.to === stepId) &&
//            document.getElementById(conn.from) &&
//            document.getElementById(conn.to)) {
//
//            flowInstance.connect({
//                source: conn.from,
//                target: conn.to,
//                anchors: ["RightMiddle", "LeftMiddle"], // horizontal anchors
//                paintStyle: { stroke: "#2c3e50", strokeWidth: 2 },
//                endpoint: "Blank",
//                overlays: [
//                    ["Arrow", {
//                        location: 1,
//                        width: 10,
//                        length: 10,
//                        foldback: 0.7
//                    }]
//                ]
//            });
//        }
//    });
//}
//async function processAndRenderStepsSequentially(batchNumber, gridId, agentProcesses, agentId) {
//    let positionX = 20;
//
//    for (let i = 0; i < agentProcesses.length; i++) {
//        const stepId = `step${i + 1}`;
//        const step = allSteps[stepId];
//        if (!step) continue;
//
//        step.status = 'In Progress';
//        addStepToFlowchart(stepId, positionX);
//
//        const data = step.rawData || {};
//        const griddata = $('#' + gridId).jqxGrid('getrowdata', 0);
//        const selectedRowsData = griddata ? [griddata] : [];
//
//        data['jsonData'] = JSON.stringify(selectedRowsData);
//        data['columnArray'] = JSON.stringify(data['columnArray'] || []);
//        data['batchId'] = batchNumber || "";
//        data['paramArray'] = JSON.stringify(data['classparams'] || []);
//
//        await new Promise((resolveProcess) => {
//            showaiLoader();
//
//            $.ajax({
//                type: "POST",
//                url: step.method,
//                cache: false,
//                data,
//                traditional: true,
//                dataType: 'html',
//                async: true,
//                success: (response) => {
//                    stopaiLoader();
//                    if (!response || response.startsWith('Exception::') || response.includes("failed with exception") || response.includes("was interrupted.")) {
//                        step.status = 'Failed';
//                        resolveProcess(false);
//                    } else {
//                        try {
//                            $("#progressBarDivID").html("");
//                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                        } catch (e) {
//                            console.warn("Grid update error:", e);
//                        }
//                        step.status = 'Completed';
//                        resolveProcess(true);
//                    }
//
//                    const el = document.getElementById(stepId);
//                    el.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
//                    el.innerHTML = `<strong>${step.label}</strong><br>${step.method}<br><small>${step.status}</small>`;
//                },
//                error: (error) => {
//                    stopaiLoader();
//                    console.error("AJAX error in process step:", error);
//                    step.status = 'Failed';
//                    resolveProcess(false);
//                }
//            });
//        });
//
//        positionX += 300; // space between steps horizontally
//        await new Promise(res => setTimeout(res, 500));
//    }
//}

//let flowInstance;
//let allSteps = {};
//let flowConnections = [];
//
//function initFlowEngine(containerId) {
//    const container = document.getElementById(containerId);
//    container.innerHTML = '';
//
//    flowInstance = jsPlumb.getInstance({
//        Connector: ['Flowchart', { cornerRadius: 5 }],
//        Endpoint: 'Dot',
//        EndpointStyle: { radius: 4, fill: '#333' },
//        PaintStyle: { stroke: '#666', strokeWidth: 2 },
//        Anchors: ['Right', 'Left'],
//        Container: containerId
//    });
//}
//
//function addStepToFlowchart(stepId, positionX = 0) {
//    const step = allSteps[stepId];
//    const stepEl = document.createElement('div');
//    stepEl.id = step.id;
//    stepEl.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
//    stepEl.style.position = 'absolute';
//    stepEl.style.top = `50px`;
//    stepEl.style.left = `${positionX}px`;
//    stepEl.style.width = '250px';
//    stepEl.innerHTML = `<strong>${step.label}</strong><br>${step.method}<br><small>${step.status}</small>`;
//    document.getElementById("aiagentWorkflowId").appendChild(stepEl);
//
//    flowInstance.draggable(step.id, { containment: true });
//}
//
//function updateStepUI(stepId) {
//    const step = allSteps[stepId];
//    const el = document.getElementById(stepId);
//    el.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
//    el.innerHTML = `
//        <strong>${step.label}</strong><br>
//        ${step.method}<br>
//        <small>${step.status}</small>
//    `;
//}
//function renderAllStepsHorizontally(agentProcesses) {
//    let positionX = 20;
//    agentProcesses.forEach((proc, index) => {
//        const stepId = `step${index + 1}`;
//        allSteps[stepId] = {
//            id: stepId,
//            label: proc.PROCESS_NAME,
//            method: proc.METHOD_NAME,
//            status: 'Pending',
//            rawData: proc.DATA ? JSON.parse(proc.DATA) : {}
//        };
//        addStepToFlowchart(stepId, positionX);
//        positionX += 300;
//
//        if (index > 0) {
//            flowConnections.push({
//                from: `step${index}`,
//                to: `step${index + 1}`
//            });
//        }
//    });
//
//    // Draw connections after all elements are added
//    flowConnections.forEach(conn => {
//        flowInstance.connect({
//            source: conn.from,
//            target: conn.to,
//            overlays: [['Arrow', { width: 10, length: 10, location: 1 }]]
//        });
//    });
//}
//async function processAndRenderStepsSequentially(batchNumber, gridId, agentProcesses, agentId) {
//    for (let i = 0; i < agentProcesses.length; i++) {
//        const stepId = `step${i + 1}`;
//        const step = allSteps[stepId];
//        if (!step) continue;
//
//        step.status = 'In Progress';
//        updateStepUI(stepId);
//
//        const data = step.rawData || {};
//        const griddata = $('#' + gridId).jqxGrid('getrowdata', 0);
//        const selectedRowsData = griddata ? [griddata] : [];
//
//        data['jsonData'] = JSON.stringify(selectedRowsData);
//        data['columnArray'] = JSON.stringify(data['columnArray'] || []);
//        data['batchId'] = batchNumber || "";
//        data['paramArray'] = JSON.stringify(data['classparams'] || []);
//
//        await new Promise((resolveProcess) => {
//            showaiLoader();
//
//            $.ajax({
//                type: "POST",
//                url: step.method,
//                cache: false,
//                data,
//                traditional: true,
//                dataType: 'html',
//                async: true,
//                success: (response) => {
//                    stopaiLoader();
//                    if (!response || response.startsWith('Exception::') || response.includes("failed with exception") || response.includes("was interrupted.")) {
//                        step.status = 'Failed';
//                    } else {
//                        try {
//                            $("#progressBarDivID").html("");
//                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                            step.status = 'Completed';
//                        } catch (e) {
//                            console.warn("Grid update error:", e);
//                            step.status = 'Completed';
//                        }
//                    }
//                    updateStepUI(stepId);
//                    resolveProcess(true);
//                },
//                error: (error) => {
//                    stopaiLoader();
//                    console.error("AJAX error in process step:", error);
//                    step.status = 'Failed';
//                    updateStepUI(stepId);
//                    resolveProcess(false);
//                }
//            });
//        });
//
//        await new Promise(res => setTimeout(res, 500));
//    }
//}
//
//async function showstatusWorkflow(aiSearchString, gridId, agentname) {
//    let batchnumber = aiSearchString;
//    initFlowEngine('aiagentWorkflowId');
//
//    let processes = await fetchProcessConfig(gridId, agentname);
//    const agentGroups = processes.reduce((acc, process) => {
//        const agentId = process.AGENT_ID;
//        if (!acc[agentId]) acc[agentId] = [];
//        acc[agentId].push(process);
//        return acc;
//    }, {});
//
//    for (const [agentId, agentProcesses] of Object.entries(agentGroups)) {
//        allSteps = {};
//        flowConnections = [];
//
//        // Step 1: Render all first
//        renderAllStepsHorizontally(agentProcesses);
//
//        // Step 2: Execute sequentially
//        await processAndRenderStepsSequentially(batchnumber, gridId, agentProcesses, agentId);
//    }
//}



//function showToast(message, type = 'info') {
//    const toast = document.createElement('div');
//    toast.innerText = message;
//    toast.style.position = 'fixed';
//    toast.style.bottom = '20px';
//    toast.style.left = '50%';
//    toast.style.transform = 'translateX(-50%)';
//    toast.style.background = type === 'error' ? '#f44336' : (type === 'success' ? '#4CAF50' : '#2196F3');
//    toast.style.color = '#fff';
//    toast.style.padding = '10px 20px';
//    toast.style.borderRadius = '4px';
//    toast.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
//    toast.style.zIndex = 9999;
//    document.body.appendChild(toast);
//    setTimeout(() => document.body.removeChild(toast), 3000);
//}
//
//function getStatusIcon(status) {
//    switch (status.toLowerCase()) {
//        case 'completed':
//            return '✅';
//        case 'in progress':
//            return '⏳';
//        case 'failed':
//            return '❌';
//        default:
//            return '⬜';
//    }
//}
//function initFlowEngine(containerId) {
//    const container = document.getElementById(containerId);
//    container.innerHTML = '';
//
//    flowInstance = jsPlumb.getInstance({
//        Connector: ['Flowchart', { cornerRadius: 5 }],
//        Endpoint: 'Dot',
//        EndpointStyle: { radius: 4, fill: '#333' },
//        PaintStyle: { stroke: '#666', strokeWidth: 2 },
//        Anchors: ['Right', 'Left'],
//        Container: containerId
//    });
//}
//
//function addStepToFlowchart(stepId, positionX = 0) {
//    const step = allSteps[stepId];
//    const stepEl = document.createElement('div');
//    stepEl.id = step.id;
//    stepEl.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
//    stepEl.style.top = `50px`;
//    stepEl.style.left = `${positionX}px`;
//
//    stepEl.innerHTML = `
//        <div style="font-size: 20px;">${getStatusIcon(step.status)}</div>
//        <strong>${step.label}</strong><br>
//        <small>${step.method}</small><br>
//        <em style="font-size: 13px;">${step.status}</em>
//    `;
//
//    document.getElementById("aiagentWorkflowId").appendChild(stepEl);
//    flowInstance.draggable(step.id, { containment: true });
//}
//
//function updateStepUI(stepId) {
//    const step = allSteps[stepId];
//    const el = document.getElementById(stepId);
//    el.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
//    el.innerHTML = `
//        <div style="font-size: 20px;">${getStatusIcon(step.status)}</div>
//        <strong>${step.label}</strong><br>
//        <small>${step.method}</small><br>
//        <em style="font-size: 13px;">${step.status}</em>
//    `;
//}
//
//function renderAllStepsHorizontally(agentProcesses) {
//    let positionX = 20;
//    agentProcesses.forEach((proc, index) => {
//        const stepId = `step${index + 1}`;
//        allSteps[stepId] = {
//            id: stepId,
//            label: proc.PROCESS_NAME,
//            method: proc.METHOD_NAME,
//            status: 'Pending',
//            rawData: proc.DATA ? JSON.parse(proc.DATA) : {}
//        };
//        addStepToFlowchart(stepId, positionX);
//        positionX += 300;
//
//        if (index > 0) {
//            flowConnections.push({
//                from: `step${index}`,
//                to: `step${index + 1}`
//            });
//        }
//    });
//
//    flowConnections.forEach(conn => {
//        flowInstance.connect({
//            source: conn.from,
//            target: conn.to,
//            overlays: [['Arrow', { width: 10, length: 10, location: 1 }]]
//        });
//    });
//}
//async function processAndRenderStepsSequentially(batchNumber, gridId, agentProcesses, agentId) {
//    for (let i = 0; i < agentProcesses.length; i++) {
//        const stepId = `step${i + 1}`;
//        const step = allSteps[stepId];
//        if (!step) continue;
//
//        step.status = 'In Progress';
//        updateStepUI(stepId);
//
//        const data = step.rawData || {};
//        const griddata = $('#' + gridId).jqxGrid('getrowdata', 0);
//        const selectedRowsData = griddata ? [griddata] : [];
//
//        data['jsonData'] = JSON.stringify(selectedRowsData);
//        data['columnArray'] = JSON.stringify(data['columnArray'] || []);
//        data['batchId'] = batchNumber || "";
//        data['paramArray'] = JSON.stringify(data['classparams'] || []);
//
//        await new Promise((resolveProcess) => {
//            showaiLoader();
//
//            $.ajax({
//                type: "POST",
//                url: step.method,
//                cache: false,
//                data,
//                traditional: true,
//                dataType: 'html',
//                async: true,
//                success: (response) => {
//                    stopaiLoader();
//                    if (!response || response.startsWith('Exception::') || response.includes("failed with exception") || response.includes("was interrupted.")) {
//                        step.status = 'Failed';
//                        showToast(`${step.label} failed`, 'error');
//                    } else {
//                        try {
//                            $("#progressBarDivID").html("");
//                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                            step.status = 'Completed';
//                            showToast(`${step.label} completed`, 'success');
//                        } catch (e) {
//                            console.warn("Grid update error:", e);
//                            step.status = 'Completed';
//                            showToast(`${step.label} completed with warning`, 'info');
//                        }
//                    }
//                    updateStepUI(stepId);
//                    resolveProcess(true);
//                },
//                error: (error) => {
//                    stopaiLoader();
//                    console.error("AJAX error in process step:", error);
//                    step.status = 'Failed';
//                    updateStepUI(stepId);
//                    showToast(`${step.label} error`, 'error');
//                    resolveProcess(false);
//                }
//            });
//        });
//
//        await new Promise(res => setTimeout(res, 500));
//    }
//}
//
//async function showstatusWorkflow(aiSearchString, gridId, agentname) {
//    $("#aiagentWorkflowId").show();
//    let batchnumber = aiSearchString;
//    initFlowEngine('aiagentWorkflowId');
//
//    let processes = await fetchProcessConfig(gridId, agentname);
//    const agentGroups = processes.reduce((acc, process) => {
//        const agentId = process.AGENT_ID;
//        if (!acc[agentId]) acc[agentId] = [];
//        acc[agentId].push(process);
//        return acc;
//    }, {});
//
//    for (const [agentId, agentProcesses] of Object.entries(agentGroups)) {
//        allSteps = {};
//        flowConnections = [];
//        renderAllStepsHorizontally(agentProcesses);
//        await processAndRenderStepsSequentially(batchnumber, gridId, agentProcesses, agentId);
//    }
//}



 

//lastpone
//let flowInstance;
//let allSteps = {};
//let flowConnections = [];
//
//function initFlowEngine(containerId) {
//    const container = document.getElementById(containerId);
//    container.innerHTML = '';
//
//    flowInstance = jsPlumb.getInstance({
//        Connector: ['Flowchart', { cornerRadius: 5 }],
//        Endpoint: 'Dot',
//        EndpointStyle: { radius: 4, fill: '#333' },
//        PaintStyle: { stroke: '#666', strokeWidth: 2 },
//        Anchors: ['Right', 'Left'],
//        Container: containerId
//    });
//}
//
//function getStatusIcon(status) {
//    switch (status.toLowerCase()) {
//        case 'in progress':
//            return '⏳';
//        case 'completed':
//            return '✅';
//        case 'failed':
//            return '❌';
//        case 'pending':
//        default:
//            return '🕓';
//    }
//}
//
//function addStepToFlowchart(stepId, positionX = 0) {
//    const step = allSteps[stepId];
//    const stepEl = document.createElement('div');
//    stepEl.id = step.id;
//    stepEl.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
//    stepEl.style.position = 'absolute';
//    stepEl.style.top = `50px`;
//    stepEl.style.left = `${positionX}px`;
//    stepEl.style.width = '180px';
//    stepEl.innerHTML = `
//        <div class="status-icon">${getStatusIcon(step.status)}</div>
//        <strong>${step.label}</strong><br>
//        <em style="font-size: 13px;">${step.status}</em>
//    `;
//    document.getElementById("aiagentWorkflowId").appendChild(stepEl);
//
//    flowInstance.draggable(step.id, { containment: true });
//}
//
//function updateStepUI(stepId) {
//    const step = allSteps[stepId];
//    const el = document.getElementById(stepId);
//    el.className = `flowchart-step ${step.status.toLowerCase().replace(' ', '-')}`;
//
//    const isInProgress = step.status.toLowerCase() === 'in progress';
//    el.innerHTML = `
//        <div class="status-icon">${getStatusIcon(step.status)}</div>
//        <strong>${step.label}</strong><br>
//        <em style="font-size: 13px;">
//            ${step.status}${isInProgress ? '<span class="dot-animation"></span>' : ''}
//        </em>
//    `;
//}
//
//function renderAllStepsHorizontally(agentProcesses, agentId) {
//    let positionX = 20;
//
//    // Add Agent Start Box
//    const agentStartId = agentId;
//    allSteps[agentStartId] = {
//        id: agentStartId,
//        label: "Agent: " + agentId,
//        class: 'agentStart newClass',
//        method: '',
//        status: '',
//        rawData: {}
//    };
//
//    addStepToFlowchart(agentStartId, positionX, 50);
//    $('#' + agentId).css({
//        'background-color': '#d0ebff',
//        'border-color': '#007bff',
//        'font-weight': 'bold'
//    });
//    positionX += 250;
//
//    // Render agent process steps
//    agentProcesses.forEach((proc, index) => {
//        const stepId = `step${index + 1}`;
//        const isBelowStep = index === 6; // 👈 Place step 7 lower (index starts at 0)
//        const positionY = isBelowStep ? 180 : 50;
//
//        allSteps[stepId] = {
//            id: stepId,
//            label: proc.PROCESS_NAME,
//            method: proc.METHOD_NAME,
//            status: 'Pending',
//            rawData: proc.DATA ? JSON.parse(proc.DATA) : {}
//        };
//
//        addStepToFlowchart(stepId, positionX, positionY);
//
//        const from = index === 0 ? agentStartId : `step${index}`;
//        flowConnections.push({ from, to: stepId, isReturnFlow: isBelowStep });
//
//        positionX += 250;
//    });
//
//    // Draw all connections
//    flowConnections.forEach(conn => {
//        flowInstance.connect({
//            source: conn.from,
//            target: conn.to,
//            connector: conn.isReturnFlow
//                ? ['Flowchart', { cornerRadius: 15 }]
//                : ['Flowchart', { cornerRadius: 5 }],
//            paintStyle: conn.isReturnFlow
//                ? { stroke: '#333', strokeWidth: 2, dashstyle: '2 2' }
//                : { stroke: '#666', strokeWidth: 2 },
//            overlays: [['Arrow', { width: 10, length: 10, location: 1 }]]
//        });
//    });
//}
//async function processAndRenderStepsSequentially(batchNumber, gridId, agentProcesses, agentId) {
//    for (let i = 0; i < agentProcesses.length; i++) {
//        const stepId = `step${i + 1}`;
//        const step = allSteps[stepId];
//        if (!step) continue;
//
//        // Mark step as in progress
//        step.status = 'In Progress';
//        updateStepUI(stepId);
//
//        // Add animation class to node
//        document.getElementById(stepId).classList.add('running-animation');
//
//        // Animate connector line (from previous step to current)
//        const fromStepId = i === 0 ? agentId : `step${i}`;
//        const conn = flowInstance.select({ source: fromStepId, target: stepId });
//        conn.each(function (c) {
//            const connectorEl = c.getConnector().canvas;
//            if (connectorEl) {
//                connectorEl.classList.add('running-line');
//            }
//        });
//
//        const data = step.rawData || {};
//        const griddata = $('#' + gridId).jqxGrid('getrowdata', 0);
//        const selectedRowsData = griddata ? [griddata] : [];
//
//        data['jsonData'] = JSON.stringify(selectedRowsData);
//        data['columnArray'] = JSON.stringify(data['columnArray'] || []);
//        data['batchId'] = batchNumber || "";
//        data['paramArray'] = JSON.stringify(data['classparams'] || []);
//
//        await new Promise((resolveProcess) => {
//            showaiLoader();
//
//            $.ajax({
//                type: "POST",
//                url: step.method,
//                cache: false,
//                data,
//                traditional: true,
//                dataType: 'html',
//                async: true,
//                success: (response) => {
//                    stopaiLoader();
//                    if (!response || response.startsWith('Exception::') || response.includes("failed with exception") || response.includes("was interrupted.")) {
//                        step.status = 'Failed';
//                    } else {
//                        try {
//                            $("#progressBarDivID").html("");
//                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                            step.status = 'Completed';
//                        } catch (e) {
//                            console.warn("Grid update error:", e);
//                            step.status = 'Completed';
//                        }
//                    }
//
//                    // Remove animations
//                    document.getElementById(stepId).classList.remove('running-animation');
//                    conn.each(function (c) {
//                        const connectorEl = c.getConnector().canvas;
//                        if (connectorEl) {
//                            connectorEl.classList.remove('running-line');
//                        }
//                    });
//
//                    updateStepUI(stepId);
//                    resolveProcess(true);
//                },
//                error: (error) => {
//                    stopaiLoader();
//                    console.error("AJAX error in process step:", error);
//                    step.status = 'Failed';
//
//                    // Remove animations
//                    document.getElementById(stepId).classList.remove('running-animation');
//                    conn.each(function (c) {
//                        const connectorEl = c.getConnector().canvas;
//                        if (connectorEl) {
//                            connectorEl.classList.remove('running-line');
//                        }
//                    });
//
//                    updateStepUI(stepId);
//                    resolveProcess(false);
//                }
//            });
//        });
//
//        await new Promise(res => setTimeout(res, 500));
//    }
//}
//async function showstatusWorkflow(aiSearchString, gridId, agentname) {
//     $("#aiagentWorkflowId").css("display", "block");
//    let batchnumber = aiSearchString;
//    initFlowEngine('aiagentWorkflowId');
//
//    let processes = await fetchProcessConfig(gridId, agentname);
//    const agentGroups = processes.reduce((acc, process) => {
//        const agentId = process.AGENT_ID;
//        if (!acc[agentId]) acc[agentId] = [];
//        acc[agentId].push(process);
//        return acc;
//    }, {});
//
//    for (const [agentId, agentProcesses] of Object.entries(agentGroups)) {
//        allSteps = {};
//        flowConnections = [];
//
//        renderAllStepsHorizontally(agentProcesses,agentId);
//        await processAndRenderStepsSequentially(batchnumber, gridId, agentProcesses, agentId);
//    }
//}

let flowInstance;
let allSteps = {};
let flowConnections = [];

function initDesignWorkflow(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    flowInstance = jsPlumb.getInstance({
        Connector: ['Flowchart', { cornerRadius: 5 }],
        Endpoint: 'Dot',
        EndpointStyle: { radius: 4, fill: '#333' },
        PaintStyle: { stroke: '#666', strokeWidth: 2 },
        Anchors: ['Right', 'Left'],
        Container: containerId
    });

    container.addEventListener("dblclick", function (e) {
        const stepId = `step${Date.now()}`;
        const step = {
            id: stepId,
            label: 'New Step',
            method: '',
            status: 'Pending',
            rawData: {}
        };
        allSteps[stepId] = step;

        addDesignStep(stepId, e.offsetX, e.offsetY);
    });

    flowInstance.bind("connection", function (info) {
        flowConnections.push({
            from: info.sourceId,
            to: info.targetId
        });
    });
}

function addDesignStep(stepId, x, y) {
    const step = allSteps[stepId];
    if (!step) {
        console.error(`Step not found for ID: ${stepId}`);
        return;
    }

    const status = (typeof step.status === 'string') ? step.status.toLowerCase().replace(' ', '-') : 'unknown-status';

    const stepEl = document.createElement('div');
    stepEl.id = step.id;
    stepEl.className = `flowchart-step ${status}`;
    stepEl.style.position = 'absolute';
    stepEl.style.left = `${x}px`;
    stepEl.style.top = `${y}px`;
    stepEl.style.width = '180px';
    stepEl.innerHTML = `
        <div class="status-icon">🕓</div>
        <strong id="${step.id}_label">${step.label || 'Unnamed Step'}</strong><br>
        <em style="font-size: 13px;">${step.status || 'No Status'}</em><br>
        <button onclick="editStepLabel('${step.id}')">Edit</button>
    `;
    document.getElementById("aiagentWorkflowId").appendChild(stepEl);

    flowInstance.draggable(step.id, { containment: true });
    flowInstance.makeSource(step.id, {
        filter: "strong",
        anchor: "Right",
        maxConnections: -1
    });
    flowInstance.makeTarget(step.id, {
        dropOptions: { hoverClass: "dragHover" },
        anchor: "Left"
    });
}

function editStepLabel(stepId) {
    const labelEl = document.getElementById(`${stepId}_label`);
    const currentLabel = labelEl.innerText;
    const newLabel = prompt("Edit Step Label:", currentLabel);
    if (newLabel) {
        labelEl.innerText = newLabel;
        allSteps[stepId].label = newLabel;
    }
}

function exportWorkflowDesign() {
    return {
        steps: allSteps,
        connections: flowConnections
    };
}

async function showstatusWorkflow(aiSearchString, gridId, agentname) {
  const workflowData = {
    steps: {
        step1: { id: 'step1', label: 'Start Process' },
        step2: { id: 'step2', label: 'Validate Data' },
        step3: { id: 'step3', label: 'Generate Report' }
    },
    connections: [
        { from: 'step1', to: 'step2' },
        { from: 'step2', to: 'step3' }
    ]
};  
importWorkflowDesign(workflowData);
}

function importWorkflowDesign(workflowData) {
    $("#aiagentWorkflowId").css("display", "block");
    initDesignWorkflow('aiagentWorkflowId');
    allSteps = workflowData.steps || {};
    flowConnections = workflowData.connections || [];

    Object.values(allSteps).forEach((step, index) => {
        addDesignStep(step.id, 50 + (index * 200), 100);
    });

    flowConnections.forEach(conn => {
        flowInstance.connect({
            source: conn.from,
            target: conn.to,
            overlays: [['Arrow', { width: 10, length: 10, location: 1 }]]
        });
    });
} 

// Example Usage:
// initDesignWorkflow('aiagentWorkflowId');

