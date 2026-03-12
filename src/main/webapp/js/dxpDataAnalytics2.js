var HtmlEntities = {
    " ": "&nbsp;"
};

var unHtmlEntities = {
    "&nbsp;": " "
};

function showIntelliSenseSuggestions() {
    $(".leftFileUploads").hide();
    $(".visualizationMainDivwrapper").hide();
    $("#visualizeChartAndDataArea").css("width", "99%", "!important");
    switchSmartBiDesignTabs("li_autoSuggestionsView", "visionChartAutoSuggestionsViewId");
    showIntellisenseAutoSuggestions();
}
function showIntellisenseAutoSuggestions() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    var response = "<div id='visionChartsAutoSuggestionsOptionsId' class='visionChartsAutoSuggestionsOptionsClass'>"
            + "<button type='button' value='Create Chart' class='autoSuggestionclass btn ' onclick=\"createAutoSuggestedChart()\">Create Chart</button>"
            + "<button type='button' value='View Data' class='autoSuggestionclass btn ' onclick=\"showViewData()\">View Data</button>"
            + "<button type='button' value='Show DashBoard' class='autoSuggestionclass btn ' onclick=\"ShowDashBoard()\">Show DashBoard</button>"
            + "</div>";
    $("#dialog").html(response);
    $("#dialog").dialog({resizable: false,
        title: (labelObject["Auto Suggestions"] != null ? labelObject["Auto Suggestions"] : "Auto Suggestions"),
        modal: true,
        width: 400,
        height: 250,
        fluid: true,
        buttons: [{
                /*text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                 click: function() {
                 $("#dialog").html("");
                 $("#dialog").dialog("close");
                 $("#dialog").dialog("destroy");
                 }*/

            }],
        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
            $(".ui-dialog").addClass("bicolumnPopUp");

        },
        beforeClose: function (event, ui) {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}
function createAutoSuggestedChart() {
    $("#dialog").html("");
    $("#dialog").dialog("close");
    $("#dialog").dialog("destroy");
    $.ajax({
        type: "POST",
        url: "getAutoSuggestedChartTypes",
        cache: false,
        dataType: 'html',
        async: false,
        success: function (response) {
            if (response != null && response != '' && response != undefined) {
                response = JSON.parse(response);
                var result = response['result'];
                if (result != null && result != '' && result != undefined) {
                    $("#visionChartsAutoSuggestionUserId").append(result);
                }
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function ShowDashBoard() {
    $.ajax({
        type: "POST",
        url: "getColumnformStr",
        cache: false,
        dataType: 'html',
        async: false,
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {

            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function executeBIEditorScripts(tabId) {
    var script = "";
    var divId = "";
    var tabIndex = $("#" + tabId).jqxTabs("val");
    var content = $("#" + tabId).jqxTabs('getContentAt', parseInt(tabIndex));
    if (content != null) {
        var spliterIdDiv = content['0'];
        if (spliterIdDiv != null) {
            var spliterId = spliterIdDiv.id;
            console.log(spliterId);
            if (spliterId != null && spliterId != '') {
                divId = spliterId.replace("_splitter", "");
            }
        } else {
            var spliterId = content.id;
            console.log(spliterId);
            if (spliterId != null && spliterId != '') {
                divId = spliterId.replace("_splitter", "");
            }

        }

    }

    var sqlMainEditor = sqlMainEditor = ace.edit(divId);
    var script = sqlMainEditor.getSelectedText();
    if (script == "") {
        script = String(sqlMainEditor.getSession().getValue());
    }

    console.log("data:::" + script);
    if (script != null
            && $.trim(script) != null
            && $.trim(script) != ''
            && $.trim(script) != 'null'
            && $.trim(script.replace(/[\t\n]+/g, ' ')) != null
            && $.trim(script.replace(/[\t\n]+/g, ' ')) != ''
            && $.trim(script.replace(/[\t\n]+/g, ' ')) != 'null'
            ) {
        var connectionName = $("#" + divId).attr("data-connction-name");
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "executeBISQLQuery",
            cache: false,
            data: {
                script: script,
                connectionName: connectionName
            },
            success: function (response, status, xhr) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
                    if (response['selectFlag']) {
                        showBIExecutionResults(script, connectionName, response, divId);
                    } else {
                        $("#dialog").html(response['message']);
                        $("#dialog").dialog({resizable: false,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            modal: true,
                            height: 'auto',
                            minWidth: 300,
                            maxWidth: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {
                                        $(this).html("");
                                        //$(this).dialog("close");
                                        $(this).dialog("destroy");
                                    }
                                }],
                            open: function () {
                                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");
                            },
                            beforeClose: function (event, ui) {
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                            }
                        });
                    }

                }
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    } else {
        showMesg("No scripts/query to be run");
    }
}
function showBIExecutionResults(script, connectionName, response, divId) {
    if (response != null && !jQuery.isEmptyObject(response)) {
        var result = response['gridObject'];
        var dataFieldsArray = result['datafields'];
        var columnsArray = result['columns'];
        var columnsList = result['columnList'];
        var tableName = response['tableName'];
        var joinQueryFlag = response['joinQueryFlag'];
        var sqlScript;
        /*var regexTableName;*/
        for (var entitykey in HtmlEntities) {
            var entity = HtmlEntities[entitykey];
            var regex = new RegExp(entitykey, 'g');
            sqlScript = script.replace(regex, entity);
            /*regexTableName = tableName.replace(regex, entity);*/
        }
        var resultQuery;
        if (sqlScript.includes('\n')) {
            var sqlScriptArr = sqlScript.split('\n');
            var sqlScriptStr = "";
            for (var i = 0; i < sqlScriptArr.length; i++) {
                sqlScriptStr += sqlScriptArr[i];
            }
            if (sqlScriptStr.includes("'")) {
                sqlScriptStr = sqlScriptStr.replace(/'/g, "\\'");
            }
            if (sqlScriptStr.includes("\r")) {
                var stringToRemove = "\r";
                var sqlScriptStr = sqlScriptStr.replace(new RegExp(stringToRemove, 'g'), "&nbsp;");
            }
            resultQuery = sqlScriptStr;
        } else {
            resultQuery = sqlScript;
        }

        tableName = tableName.replace(/ /gi, ":");
        /*var divStr = "<div class='imgList'>";
         divStr += "<img src='images/Data-Analytics-icon.svg' style='width:28px;cursor:pointer;padding-left:3px;margin-right:5px;' onclick=showQueryCharts('" + resultQuery  + "','" + JSON.stringify(columnsList) + "','"+tableName+"','"+joinQueryFlag+"') title='ShowCharts'>"
         divStr += "</div>";*///commented by sai uday
        /* code by sai uday*/
        for (var i = 0; i < columnsList.length; i++) {
            columnsList[i] = columnsList[i].trim();
        }

        var columnsLis = JSON.stringify(columnsList);
        columnsLis = columnsLis.replace(/"/g, "'");
        columnsLis = columnsLis.replace(/\\/g, '"');
        columnsLis = columnsLis.toUpperCase();


        var divStr = "<div class='imgList'>";
        divStr += "<img src='images/Data-Analytics-icon.svg' style='width:28px;cursor:pointer;padding-left:3px;margin-right:5px;' onclick=\"showQueryCharts('"
                + resultQuery + "'," + columnsLis + ",'" + tableName + "','" + joinQueryFlag + "')\" title='ShowCharts'>";
        divStr += "</div>";

        /* code by sai uday*/
        $("#visionVisualizeQueryGridButtonsId").html(divStr);
        $("#visionVisualizeQueryGridDataBodyId").html("<div id = 'chartGridDataDiv' class = 'chartGridDataClass'></div>");
        var dataArray = response['dataArray'];
        var data = {
            dataFieldsArray: dataFieldsArray,
            columnsArray: columnsArray,
            query: script
        }

        var totalCount = response['totalCount'];

        var headerTooltipRenderer = function (element) {
            $(element).parent().jqxTooltip({
                position: 'mouse', theme: 'energyblue',
                position: 'bottom-right',
                showArrow: false, content: $(element).text()
            });
        }
        var source =
                {
                    type: 'POST',
                    datatype: "json",
                    datafields: dataFieldsArray,
                    data: data,
                    url: 'getChartObjectData',
                    cache: false,
                    root: 'Rows',
                    processdata: function (data) {
                        showLoader();
                        data['getOnlyDataArray'] = 'Y';
                    },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                        //showLoader();

                    }, loadError: function (xhr, status, error) {
                    }, loadComplete: function (data) {
                        //                               
                        stopLoader();
                    },
                    beforeprocessing: function (data) {

                        source.totalrecords = data[data.length - 1];
                    },

                };
        //                        $("#chartGridDataDiv").jqxGrid({columns: columnsArray});
        /*window.allGridColumns["chartGridDataDiv"] = columnsList;*/
        var dataAdapter = new $.jqx.dataAdapter(source);
        $("#chartGridDataDiv").jqxGrid(
                {
                    width: "99%",
                    height: '427px',
                    source: dataAdapter,
                    theme: 'energyblue',
                    pagesize: 50,
                    sortable: true,
                    pageable: true,
                    autoheight: true,
                    autoloadstate: false,
                    autosavestate: false,
                    columnsresize: true,
                    columnsreorder: true,
                    showfilterrow: true,
                    filterable: true,
                    selectionmode: 'checkbox',
                    pagesizeoptions: [10, 50, 100, 1000],
                    rendergridrows: function (params) {
                        return params.data;
                    },
                    columnsresize: true,
                    columns: columnsArray
                });


        $("#chartGridDataDiv").on('cellbeginedit', function (event) {

            var args = event.args;
            // column data field.
            var dataField = event.args.datafield;
            // row's bound index.
            var rowBoundIndex = event.args.rowindex;
            // cell value
            var value = args.value;
            // cell old value.
            var oldvalue = args.oldvalue;
            $('#' + gridId).jqxGrid('selectrow', rowBoundIndex);
            $("#last-edit-datafield").val(dataField);
            $("#last-edit-row").val(rowBoundIndex);
        });
        $("#chartGridDataDiv").on('cellendedit', function (event) {

            // event arguments.
            var args = event.args;
            // column data field.
            var dataField = event.args.datafield;
            // row's bound index.
            var rowBoundIndex = event.args.rowindex;
            // cell value
            var value = args.value;
            // cell old value.
            var oldvalue = args.oldvalue;
            // row's data.
            var rowData = args.row;



        });
        $("#chartGridDataDiv").on('cellvaluechanged', function (event) {
            var args = event.args;
            var dataField = args.datafield;
            var dataField1 = args.text;
            var rowIndex = args.rowindex;
            var cellValue = args.value;
            var column = $("#chartGridDataDiv").jqxGrid('getcolumn', event.args.datafield).text;
        });
        $("#chartGridDataDiv").on('celldoubleclick', function (event) {
            var args = event.args;
            var dataField = args.datafield;
            var dataField1 = args.text;
            var rowIndex = args.rowindex;
            var cellValue = args.value;
            var column = $("#chartGridDataDiv").jqxGrid('getcolumn', event.args.datafield).text;
            popupedit(column, cellValue);
        });



    }


}

function showQueryCharts(script, columnsList, tableName, joinQueryFlag) {

    /*for (var entitykey in unHtmlEntities) {
     var entity = unHtmlEntities[entitykey];
     var regex = new RegExp(entitykey, 'g');
     tableName = tableName.replace(regex, entity);
     }*/

    var columnsList = JSON.stringify(columnsList);
    var colLength;
    if (columnsList != null && columnsList != '' && columnsList != undefined) {
        columnsList = JSON.parse(columnsList);
    }
    if (columnsList != null && !jQuery.isEmptyObject(columnsList)) {
        colLength = columnsList.length;
    }
    if (colLength != null && colLength != '' && colLength != undefined) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getSuggestedChartTypesBasedonColumns",
            cache: false,
            data: {
                script: script,
                colLength: colLength,
                columnsList: JSON.stringify(columnsList),
                tableName: tableName,
                joinQueryFlag: joinQueryFlag
            },
            success: function (response, status, xhr) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {

                    $("#dialog").html(response['result']);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        height: 250,
                        width: 200,
                        maxHeight: 'auto',
                        fluid: true,
                        buttons: [{
                                /*text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                 click: function() {
                                 $(this).html("");
                                 //$(this).dialog("close");
                                 $(this).dialog("destroy");
                                 }*/
                            }],
                        open: function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui) {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });


                }
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });

    }

}



function executePythonBIEditorScripts(tabId) {
    var script = "";
    var divId = "";
    var tabIndex = $("#" + tabId).jqxTabs("val");
    var content = $("#" + tabId).jqxTabs('getContentAt', parseInt(tabIndex));
    if (content != null) {
        var spliterIdDiv = content['0'];
        if (spliterIdDiv != null) {
            var spliterId = spliterIdDiv.id;
            console.log(spliterId);
            if (spliterId != null && spliterId != '') {
                divId = spliterId.replace("_splitter", "");
            }
        } else {
            var spliterId = content.id;
            console.log(spliterId);
            if (spliterId != null && spliterId != '') {
                divId = spliterId.replace("_splitter", "");
            }

        }

    }

    var sqlMainEditor = sqlMainEditor = ace.edit(divId);
    var script = sqlMainEditor.getSelectedText();
    if (script == "") {
        script = String(sqlMainEditor.getSession().getValue());
    }

    console.log("data:::" + script);
    if (script != null
            && $.trim(script) != null
            && $.trim(script) != ''
            && $.trim(script) != 'null'
            && $.trim(script.replace(/[\t\n]+/g, ' ')) != null
            && $.trim(script.replace(/[\t\n]+/g, ' ')) != ''
            && $.trim(script.replace(/[\t\n]+/g, ' ')) != 'null'
            ) {
        var connectionName = $("#" + divId).attr("data-connction-name");
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "executeBIPythonQuery",
            cache: false,
            data: {
                script: script,
                connectionName: connectionName
            },
            success: function (response, status, xhr) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
                    if (response['selectFlag']) {
                        showPythonBIExecutionResults(script, connectionName, response, divId);
                    } else {
                        $("#dialog").html(response['message']);
                        $("#dialog").dialog({resizable: false,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            modal: true,
                            height: 'auto',
                            minWidth: 300,
                            maxWidth: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {
                                        $(this).html("");
                                        //$(this).dialog("close");
                                        $(this).dialog("destroy");
                                    }
                                }],
                            open: function () {
                                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");
                            },
                            beforeClose: function (event, ui) {
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                            }
                        });
                    }

                }
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    } else {
        showMesg("No scripts/query to be run");
    }
}
function showPythonBIExecutionResults(script, connectionName, response, divId) {
    if (response != null && !jQuery.isEmptyObject(response)) {
        var result = response['gridObject'];
        var dataFieldsArray = result['datafields'];
        var columnsArray = result['columns'];
        var columnsList = result['columnList'];
        var sqlScript;
        for (var entitykey in HtmlEntities) {
            var entity = HtmlEntities[entitykey];
            var regex = new RegExp(entitykey, 'g');
            sqlScript = script.replace(regex, entity);
        }
        var divStr = "<div class='imgList'>";
        divStr += "<img src='images/Data-Analytics-icon.svg' style='width:28px;cursor:pointer;padding-left:3px;margin-right:5px;' onclick=showQueryCharts('" + sqlScript + "','" + JSON.stringify(columnsList) + "') title='ShowCharts'>"
        divStr += "</div>";
        $("#visionVisualizeQueryGridButtonsId").html(divStr);
        $("#visionVisualizeQueryGridDataBodyId").html("<div id = 'chartGridDataDiv' class = 'chartGridDataClass'></div>");
        var dataArray = response['dataArray'];
        var data = {
            dataFieldsArray: dataFieldsArray,
            columnsArray: columnsArray,
            query: script
        }

        var totalCount = response['totalCount'];

        var headerTooltipRenderer = function (element) {
            $(element).parent().jqxTooltip({
                position: 'mouse', theme: 'energyblue',
                position: 'bottom-right',
                showArrow: false, content: $(element).text()
            });
        }
        var source =
                {
                    type: 'POST',
                    datatype: "json",
                    datafields: dataFieldsArray,
                    data: data,
                    url: 'getPythonChartObjectData',
                    cache: false,
                    root: 'Rows',
                    processdata: function (data) {
                        showLoader();
                        data['getOnlyDataArray'] = 'Y';
                    },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                        //showLoader();

                    }, loadError: function (xhr, status, error) {
                    }, loadComplete: function (data) {
                        //                               
                        stopLoader();
                    },
                    beforeprocessing: function (data) {

                        source.totalrecords = data[data.length - 1];
                    },

                };
        //                        $("#chartGridDataDiv").jqxGrid({columns: columnsArray});
        /*window.allGridColumns["chartGridDataDiv"] = columnsList;*/
        var dataAdapter = new $.jqx.dataAdapter(source);
        $("#chartGridDataDiv").jqxGrid(
                {
                    width: "99%",
                    height: '427px',
                    source: dataAdapter,
                    theme: 'energyblue',
                    pagesize: 50,
                    sortable: true,
                    pageable: true,
                    autoheight: true,
                    autoloadstate: false,
                    autosavestate: false,
                    columnsresize: true,
                    columnsreorder: true,
                    showfilterrow: true,
                    filterable: true,
                    selectionmode: 'checkbox',
                    pagesizeoptions: [10, 50, 100, 1000],
                    rendergridrows: function (params) {
                        return params.data;
                    },
                    columnsresize: true,
                    columns: columnsArray
                });


        $("#chartGridDataDiv").on('cellbeginedit', function (event) {

            var args = event.args;
            // column data field.
            var dataField = event.args.datafield;
            // row's bound index.
            var rowBoundIndex = event.args.rowindex;
            // cell value
            var value = args.value;
            // cell old value.
            var oldvalue = args.oldvalue;
            $('#' + gridId).jqxGrid('selectrow', rowBoundIndex);
            $("#last-edit-datafield").val(dataField);
            $("#last-edit-row").val(rowBoundIndex);
        });
        $("#chartGridDataDiv").on('cellendedit', function (event) {

            // event arguments.
            var args = event.args;
            // column data field.
            var dataField = event.args.datafield;
            // row's bound index.
            var rowBoundIndex = event.args.rowindex;
            // cell value
            var value = args.value;
            // cell old value.
            var oldvalue = args.oldvalue;
            // row's data.
            var rowData = args.row;



        });
        $("#chartGridDataDiv").on('cellvaluechanged', function (event) {
            var args = event.args;
            var dataField = args.datafield;
            var dataField1 = args.text;
            var rowIndex = args.rowindex;
            var cellValue = args.value;
            var column = $("#chartGridDataDiv").jqxGrid('getcolumn', event.args.datafield).text;
        });
        $("#chartGridDataDiv").on('celldoubleclick', function (event) {
            var args = event.args;
            var dataField = args.datafield;
            var dataField1 = args.text;
            var rowIndex = args.rowindex;
            var cellValue = args.value;
            var column = $("#chartGridDataDiv").jqxGrid('getcolumn', event.args.datafield).text;
            popupedit(column, cellValue);
        });



    }


}

function anlyticsgetTreeDataBase(type, typeName) {
    console.log(type + ":::iam in getTreeDataBasemethod:::" + typeName);
    if (type != null && type != "" && type != undefined && type == "FILE") {
        var response = "<div id ='visualizationDMFileId' class ='visualizationDMFileDivClass'>"
                + "<div id='visionShowFileUploadMsg'></div>";
        response += "<input type='file' name='importVisualizationDMFile'  id='importVisualizationDMFile' class='visionVisualizationDMFilesInput'/>";
        response += "<div class='visionVisualizationDMFileUploadclass' id='visionVisualizationDmFileUpload'>";
        response += "<input type='hidden' id='selectedTreeTypeName' value=''>";
        response += "<input type='hidden' id='selectedTreeType' value=''>";

        if (typeName == 'JSON') {
            response += "<div id = imageDiv class='jsonDivClass'>"
            response += "<img src='images/JSONIMG.png'  id='jsonimageId' class='jsonimageClass'>";
            response += "</div>";
            response += "<div class='VisionVisualizationUploadFileContent'><h5>Import Data From JSON</h5></div>";

        }
        if (typeName == 'XML') {
            response += "<div id = imageDiv class='XMLDivClass'>"
            response += "<img src='images/xmlicon.png'  id='jsonimageId' class='jsonimageClass'>";
            response += "</div>";
            response += "<div class='VisionVisualizationUploadFileContent'><h5>Import Data From XML</h5></div>";

        } else {
            response += "<div id = imageDiv class='imageDivClass'>"
            response += "<img src='images/Excel.png'  id='excelimageId' class='excelimageClass'>";
            response += "</div>";
            response += "<div class='VisionVisualizationUploadFileContent'><h5>Import Data From Excel</h5></div>";

        }
        uploadDXPFilePopup(response, type, typeName);
    } else if (type != null && type != "" && type != undefined && type == "DB") {
        var formString = "<div class='visionEtlConnectDbMain'>"
                + "<div id='visionShowConnectionMsg'></div>"
                + "<table class='visionEtlDbTable' autocomplete='false'>"
                + "<tr><td><p style='font-weight:bold'>Connection Type:</p></td>"
                + "<td>" + typeName + "</td></tr>"
                + "<tr>"
                + "<td> <label class='visionDbLabels'>Connection Name</label></td>"
                + "<td> <input type='text'  name='ConnectionName' id='DbEtlConnectionName' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlConnectionNameError'></div></td>"
                + " </tr>"
                + "<tr>"
                + "<td> <label class='visionDbLabels'>Host Name</label></td>"
                + "<td> <input type='text'  name='HostName' id='DbEtlHostName' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlHostNameError'></div></td>"
                + "</tr>"
                + "<tr>"
                + "<td>  <label class='visionDbLabels'>Port</label></td>"
                + "<td><input type='text' value='' name='Port' id='DbEtlPort' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlPortError'></div></td>"
                + "</tr>"
                + "<tr>"
                + "<td>  <label class='visionDbLabels'>Username</label></td>"
                + "<td> <input type='text'  name='EtlUsername' id='DbEtlUserName' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlUserNameError'></div></td>"
                + "</tr>"
                + " <tr>"
                + "<td>  <label class='visionDbLabels'>Password</label></td>"
                + "<td>    <input type='password'   name='EtlPassword' id='DbEtlPassword' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlPasswordError'></div></td>"
                + "</tr>"
                + "<tr>"
                + "<td>  <label class='visionDbLabels'>Database/Service Name</label></td>"
                + "<td>    <input type='text'  name='ServiceName' id='DbEtlServiceName' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlServiceNameError'></div></td>"
                + "</tr>"
                + "<tr style='display:none'>"
                + "<td>  <label class='visionDbLabels'>Audit Id</label></td>"
                + "<td>    <input type='hidden'  name='auditId' id='EtlAuditId' class='visionInputDbFields'></td>"
                + "</tr>"
                + "<tr><td><input type='checkbox' name='checkBoxDetails' id = 'EtlCheckBoxChecked' value='checked' checked>Save Details"
                + "<div class='visionDataMigrationError' style='display:none'>Please check the box</div></td></tr>"
                + "<tr>"
                + "<td class='visionDbConnectBtn' id='connectEtlDbTd' colspan = '2'><input type='button' value='Connect' name='Connect'  onclick = \"connectIvisualizeDatabase('" + type + "','" + typeName + "')\" class='visionInputDbButton'></td>"

                + "</tr>"
                + "</table></div>";
        ShowEtlConnectionPopup(formString, type, typeName, 'Connect Database');
    } else if (type != null && type != "" && type != undefined && type == "ERP" && typeName == "SAP") {
        var erpTable = "<div class='visionEtlErpDiv'>"
                + "<div id='visionShowErpEtlMsg'></div>"
                + "<table class='visionERPEtlTable'>"
                + "<tr><td><p style='font-weight:bold'>Connection Type:</p></td>"
                + "<td>" + typeName + "</td></tr>"
                + " <tr class='visionERPDbTr'>"
                + "<td class='visionERPDbTd'> <label class='visionERPDbLabels'>Connection Name</label></td>"
                + "<td class='visionERPDbTd'> <input type='text' value='' name='ConnectionName' id='ErpEtlDbConnectionName' class='visionInputDbFields'>"
                + "<div class='dataMigrationInputError' id='ErpEtlDbConnectionNameError'></div></td>"
                + " </tr>"
                + " <tr class='visionERPDbTr'>"
                + "<td class='visionERPDbTd'> <label class='visionERPDbLabels'>Client</label></td>"
                + "<td class='visionERPDbTd'> <input type='text' value='' name='Client' id='ERPEtlClientName' class='visionInputDbFields'>"
                + "<div class='dataMigrationInputError' id='ERPEtlClientNameError'></div></td>"
                + " </tr>"
                + "<tr class='visionERPDbTr'>"
                + "<td class='visionERPDbTd'> <label class='visionERPDbLabels'>Host Name</label></td>"
                + "<td class='visionERPDbTd'> <input type='text' value='' name='ERP HostName' id='ERPEtlHostName' class='visionInputDbFields'>"
                + "<div class='dataMigrationInputError' id='ERPEtlHostNameError'></div></td>"
                + "</tr>"
                + "<tr class='visionERPDbTr'>"
                + "<td class='visionERPDbTd'>  <label class='visionERPDbLabels'>Username</label></td>"
                + "<td class='visionERPDbTd'> <input type='text' value='' name='Username' id='ERPEtlUserName' class='visionInputDbFields'>"
                + "<div class='dataMigrationInputError' id='ERPEtlUserNameError'></div></td>"
                + "</tr>"
                + " <tr class='visionERPDbTr'>"
                + "<td class='visionERPDbTd'>  <label class='visionERPDbLabels'>Password</label></td>"
                + "<td class='visionERPDbTd'>    <input type='password' value='' name='Password' id='ERPEtlPassword' class='visionInputDbFields'>"
                + "<div class='dataMigrationInputError' id='ERPEtlPasswordError'></div></td>"
                + "</tr>"
                + "<tr class='visionERPDbTr'>"
                + "<td class='visionERPDbTd'>  <label class='visionERPDbLabels'>Language Id</label></td>"
                + "<td class='visionERPDbTd'>    <input type='text' value='' name='languageId' id='ERPEtlLanguageId' class='visionInputDbFields'>"
                + "<div class='dataMigrationInputError' id='ERPEtlLanguageIdError'></div></td>"
                + "</tr>"
                + "<tr class='visionERPDbTr'>"
                + "<tr class='visionERPDbTr' style='display:none'>"
                + "<td class='visionERPDbTr'>  <label class='visionERPDbLabels'>Audit Id</label></td>"
                + "<td class='visionERPDbTr'>    <input type='hidden' value='' name='auditId' id='ErpEtlauditId' class='visionInputDbFields'></td>"
                + "</tr>"
                + "<tr class='visionERPDbTr'>"
                + "<td class='visionERPDbTd'>  <label class='visionERPDbLabels'>System Id</label></td>"
                + "<td class='visionERPDbTd'>    <input type='text' value='' name='ERPSystemId' id='ERPEtlSystemId' class='visionInputDbFields'>"
                + "<div class='dataMigrationInputError' id='ERPEtlSystemIdError'></div></td>"
                + "</tr>"
                + "<tr class='visionERPDbTr'><td><input type='checkbox' name='checkBoxDetails' id = 'checkBoxChecked' value='checked' checked>Save Details"
                + "<div class='visionDataMigrationError' style='display:none'>Please check the box</div></td></tr>"
                + "<tr class='visionERPDbTr'>"
                + "<td class='visionERPDbTd visionERPDbConnectBtn' id='connectERPEtlDbTd' colspan = '2'><input type='button' value='Connect' name='Connect'  onclick = \"connectErpEtlDatabase('" + type + "','" + typeName + "')\" class='visionInputDbButton'></td>"

                + "</tr>"
                + "</table>";
        ShowEtlConnectionPopup(erpTable, type, typeName, 'Connect ERP');
    } else if (typeName == 'Oracle_ERP') {
        var formString = "<div class='visionEtlConnectDbMain'>"
                + "<div id='visionShowConnectionMsg'></div>"
                + "<table class='visionErpEtlDbTable' autocomplete='false'>"
                + "<tr><td><p style='font-weight:bold'>Connection Type:</p></td>"
                + "<td>" + typeName + "</td></tr>"
                + "<tr>"
                + "<td> <label class='visionDbLabels'>Connection Name</label></td>"
                + "<td> <input type='text'  name='ConnectionName' id='DbEtlConnectionName' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlConnectionNameError'></div></td>"
                + " </tr>"
                + "<tr>"
                + "<td> <label class='visionDbLabels'>Host Name</label></td>"
                + "<td> <input type='text'  name='HostName' id='DbEtlHostName' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlHostNameError'></div></td>"
                + "</tr>"
                + "<tr>"
                + "<td>  <label class='visionDbLabels'>Port</label></td>"
                + "<td><input type='text' value='' name='Port' id='DbEtlPort' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlPortError'></div></td>"
                + "</tr>"
                + "<tr>"
                + "<td>  <label class='visionDbLabels'>Username</label></td>"
                + "<td> <input type='text'  name='EtlUsername' id='DbEtlUserName' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlUserNameError'></div></td>"
                + "</tr>"
                + " <tr>"
                + "<td>  <label class='visionDbLabels'>Password</label></td>"
                + "<td>    <input type='password'   name='EtlPassword' id='DbEtlPassword' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlPasswordError'></div></td>"
                + "</tr>"
                + "<tr>"
                + "<td>  <label class='visionDbLabels'>Database/Service Name</label></td>"
                + "<td>    <input type='text'  name='ServiceName' id='DbEtlServiceName' class='visionInputDbFields' autocomplete='false'>"
                + "<div class='dataMigrationInputError' id='DbEtlServiceNameError'></div></td>"
                + "</tr>"
                + "<tr style='display:none'>"
                + "<td>  <label class='visionDbLabels'>Audit Id</label></td>"
                + "<td>    <input type='hidden'  name='auditId' id='EtlAuditId' class='visionInputDbFields'></td>"
                + "</tr>"
                + "<tr><td><input type='checkbox' name='checkBoxDetails' id = 'EtlCheckBoxChecked' value='checked' checked>Save Details"
                + "<div class='visionDataMigrationError' style='display:none'>Please check the box</div></td></tr>"
                + "<tr>"
                + "<td class='visionDbConnectBtn' id='connectEtlDbTd' colspan = '2'><input type='button' value='Connect' name='Connect'  onclick = \"connectIvisualizeDatabase('" + type + "','" + typeName + "')\" class='visionInputDbButton'></td>"

                + "</tr>"
                + "</table></div>";
        ShowEtlConnectionPopup(formString, type, typeName, 'Connect ERP');
    } else if (type == 'WEB_SERVICE') {
        if (typeName == 'SOAP') {
            var formString = "<div class='visionEtlConnectDbMain'>"
                    + "<div id='visionShowConnectionMsg'></div>"
                    + "<table class='visionErpEtlDbTable' autocomplete='false'>"
                    + "<tr><td><p style='font-weight:bold'>Webservice Type:</p></td>"
                    + "<td>" + typeName + "</td></tr>"
                    + "<tr>"
                    + "<td> <label class='visionDbLabels'>WSDL URL</label></td>"
                    + "<td> <input type='text'  name='wsdlURL' id='wsdlURL' class='visionInputDbFields' autocomplete='false'>"
                    + "<div class='dataMigrationInputError' id='wsdlURLError'></div></td>"
                    + " </tr>"
                    + "<tr>"
                    + "<td> <label class='visionDbLabels'>End Point URL</label></td>"
                    + "<td> <input type='text'  name='endPointURL' id='endPointURL' class='visionInputDbFields' autocomplete='false'>"
                    + "<div class='dataMigrationInputError' id='endPointURLError'></div></td>"
                    + "</tr>"
                    + "<tr>"
                    + "<tr style='display:none'>"
                    + "<td>  <label class='visionDbLabels'>Audit Id</label></td>"
                    + "<td>    <input type='hidden'  name='auditId' id='EtlAuditId' class='visionInputDbFields'></td>"
                    + "</tr>"
                    + "<tr><td><input type='checkbox' name='checkBoxDetails' id = 'EtlCheckBoxChecked' value='checked' checked>Save Details"
                    + "<div class='visionDataMigrationError' style='display:none'>Please check the box</div></td></tr>"
                    + "<tr>"
                    + "<td class='visionDbConnectBtn' id='connectEtlDbTd' colspan = '2'><input type='button' value='Import' name='Import'  onclick = \"connectEtlWSSOAP('" + type + "','" + typeName + "')\" class='visionInputDbButton'></td>"

                    + "</tr>"
                    + "</table></div>";
        } else if (typeName == 'REST') {

        }
        ShowEtlConnectionPopup(formString, type, typeName, 'Connect Webservice');
    }
}

function uploadDXPFilePopup(response, type, typeName) {
    $('.visualizationMainDivwrapper').toggleClass('width60');
    $('#Visualization').toggleClass('visualBIChart');
    $("#VisualizeBIColumns").css("display", "block");
    var labelObject = {};
    closeAllDialogsBoxes();
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    $("#dialog").html(response);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Upload'] != null ? labelObject['Upload'] : 'Upload'),
        width: 500,
        height: 350,
        fluid: true,
        open: function () {

        },
        beforeClose: function (event, ui) {

        }
    });
    $("#selectedTreeType").val(type);
    $("#selectedTreeTypeName").val(typeName);
    $("#importVisualizationDMFile").hide();
    setTimeout(function () {
        $("html").on("dragover", function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
        $("html").on("drop", function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
        $('.visualizationDMFileDivClass').on('drop', function (event) {

            $("#wait").css("display", "block");
            var filetype = $('#selectedTreeTypeName').val();
            //            dmTreeFileUpload("Y", filetype);

            if (filetype == 'XLSX' || filetype == 'XLS') {
                var files = event.originalEvent.dataTransfer.files; // FileList object
                parseSmartBIExcel(files[0], filetype);
            } else {
                //                dmTreeFileUpload("N", filetype);
                uploadSelectedFile(files[0], filetype);
            }
            event.target.value = '';
        });
        $("#visionVisualizationDmFileUpload").click(function () {
            var filetype = $('#selectedTreeTypeName').val();
            console.log("iam in clickable ");
            //            dmTreeFileUpload("N", filetype);

            $("#importVisualizationDMFile").click();
            //            $("#importVisualizationDMFile").trigger("change");
        });

        $("#importVisualizationDMFile").on('change', function (event) {

            var filetype = $('#selectedTreeTypeName').val();
            console.log("iam in files change ");
            //            dmTreeFileUpload("N", filetype);
            if (filetype == 'XLSX' || filetype == 'XLS') {
                var files = event.target.files; // FileList object
                parseSmartBIExcel(files[0], filetype);
            } else {
                var files = event.target.files;
                //                dmTreeFileUpload("N", filetype);
                uploadSelectedFile(files[0], filetype);

            }
            event.target.value = '';
        });
    }
    , 300);
}
function parseSmartBIExcel(file, filetype) {
    var sheets = [];
    var fileName = file['name'];
    var fileDataType = file['type'];
    var reader = new FileReader();
    if (filetype != null && filetype != '' && filetype != undefined) {
        filetype = filetype.toLowerCase();
    }
    reader.onload = function (e) {

        var mergeFlag = false;
        var data = e.target.result;
        var workbook;
        if (filetype == 'xls') {
            workbook = XLS.read(data, {
                type: 'binary',
                cellDates: true
            });
        } else if (filetype == 'xlsx') {
            workbook = XLSX.read(data, {type: 'binary', cellDates: true, cellNF: true, cellText: false});
            var financeSheets = workbook['Sheets'];
            var mergeFileName = fileName.replace(".xlsx", '');
            $.each(financeSheets, function (key, value) {
                var mergeFinanceSheets = financeSheets[key];
                var merges = mergeFinanceSheets['!merges'];
                if (merges != null && !jQuery.isEmptyObject(merges)) {
                    mergeFlag = true;
                }
            });


        }
        var headersObj = {};
        workbook.SheetNames.forEach(function (sheetName) {

            sheets.push(sheetName);
        });

        if (mergeFlag) {
            uploadSelectedFinanceFile(file, filetype, fileName)
        } else {
            getXlsxFileSheet(workbook, file, filetype, fileName, fileDataType, sheets);
        }


    }
    reader.onerror = function (ex) {
        console.log(ex);
    };

    reader.readAsBinaryString(file);
}

function uploadSelectedFinanceFile(files, fileType, fileName) {
    showLoader();
    var data;
    var url;
    var fileData = files['name'];
    var xlsxETLFileData = new FormData();
    xlsxETLFileData.append("importTreeDMFile", files);
    xlsxETLFileData.append("selectedFiletype", fileType);
    xlsxETLFileData.append("fileLocalPath", "");
    data = xlsxETLFileData;
    url = "importTreeDMFile";
    const myArray = fileName.split(".");
    let tableName = myArray[0];
    if (tableName != null && tableName != '' && tableName != undefined) {
        tableName = tableName.replace(/ /g, "_");
    }
    $.ajax({
        url: 'importTreeDMFinanceFile',
        type: "POST",
        data: xlsxETLFileData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != '' && response != undefined) {
                response = JSON.parse(response);
                $("#dialog").html("");
                $("#dialog").dialog("close");
                $("#dialog").dialog("destroy");
                $(".buttoonClass").css("display", "block");
                var dataFieldsArray = response['dataFieldsArray'];
                var columnsArray = response['columnsArray'];
                var gridId = response['gridId'];
                var filePath = response['filePath'];
                var data = {
                    filePath: filePath,
                    fileName: fileName,
                    fileType: fileType,
                    fileHeaders: JSON.stringify(response['columnList']), // ravi file headers
                    gridId: gridId // ravi multiple excelSheets code
                };
                data['columnsArray'] = JSON.stringify(response['columnList']);
                createFileAsTable(filePath, fileName, tableName);
                //                getdefaultChart("visualizeGraphArea", axisColumns, valuesColumns, "pie", tablesObj) 
                var source =
                        {
                            type: 'POST',
                            //                                                async: false,
                            datatype: "json",
                            datafields: dataFieldsArray,
                            data: data,
                            url: 'getChartsFileObjectData',
                            cache: false,
                            root: 'Rows',
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                showLoader();
                            }, loadError: function (xhr, status, error) {
                                stopLoader();
                            }, loadComplete: function (data) {
                                stopLoader();
                            },
                            beforeprocessing: function (data) {
                                if (data != null && data[0] != null) {
                                    source.totalrecords = data[0].totalrecords;
                                } else {
                                    source.totalrecords = 0;
                                }

                                stopLoader();
                            },
                            sort: function () {
                                $("#visualizeAreaGirdData1").jqxGrid('updatebounddata', 'sort');
                                try {
                                    $("#visualizeAreaGirdData1").jqxGrid('clearselection');
                                } catch (e) {
                                }

                            },
                            filter: function () {
                                $("#visualizeAreaGirdData1").jqxGrid('updatebounddata', 'filter');
                                try {
                                    $("#visualizeAreaGirdData1").jqxGrid('clearselection');
                                } catch (e) {
                                }
                            }

                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                var headerTooltipRenderer = function (element) {
                    $(element).parent().jqxTooltip({
                        position: 'mouse', theme: 'energyblue',
                        position: 'bottom-right',
                        showArrow: false, content: $(element).text()
                    });
                }
                //                        window.allGridColumns[gridId] = columnsArray;
                $("#visualizeAreaGirdData1").jqxGrid(
                        {
                            width: "100%",
                            height: '95%',
                            autoshowloadelement: false,
                            source: dataAdapter,
                            pageable: true,
                            pagesize: 50,
                            filterable: true,
                            sortable: true,
                            virtualmode: true,
                            editable: true,
                            columnsreorder: true,
                            pagesizeoptions: ['50', '100', '500', '1000', '5000', '10000', '50000'],
                            enabletooltips: true,
                            enablemousewheel: true,
                            enablehover: true,
                            enablebrowserselection: true,
                            rendergridrows: function (params) {
                                return params.data;
                            },
                            columnsresize: true,
                            columns: columnsArray,
                            rowdetails: true
                        });
            }
            $("#visualizeAreaGirdData1").on('columnclick', function (event) {
                var args = event.args;
                var dataField = args.datafield;
                var dataField1 = args.text;
                var rowIndex = args.rowindex;
                var cellValue = args.value;
                var column = $('#visualizeAreaGirdData1').jqxGrid('getcolumn', event.args.datafield).text;
                $.ajax({
                    type: "POST",
                    url: "getColumnformStr",
                    cache: false,
                    dataType: 'html',
                    async: false,
                    data: {
                        column: dataField,
                        table: tableName
                    },
                    success: function (response) {
                        $("#dialog").html(response);
                        $("#dialog").dialog({resizable: false,
                            title: (labelObject[dataField] != null ? labelObject[dataField] : dataField),
                            modal: true,
                            width: 400,
                            height: 250,
                            fluid: true,
                            //                            buttons: [{
                            //                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            //                                    click: function () {                            
                            //                                        $("#dialog").html("");
                            //                                        $("#dialog").dialog("close");
                            //                                        $("#dialog").dialog("destroy");
                            //                                    }
                            //
                            //                                }],
                            open: function () {
                                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");
                                $(".ui-dialog").addClass("bicolumnPopUp");

                            },
                            beforeClose: function (event, ui) {
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                            }
                        });
                    },
                    error: function (e) {
                        console.log(e);
                        sessionTimeout(e);
                        stopLoader();
                    }
                });

            });
            $("#visualizeAreaGirdData1").on('celldoubleclick', function (event) {
                var args = event.args;
                var val = $(this).text();
                var cellValue = args.value;
                var column = $('#visualizeAreaGirdData1').jqxGrid('getcolumn', event.args.datafield).text;
                $("#dialog").html(cellValue);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 350,
                    height: 200,
                    fluid: true,
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                        $(".ui-dialog").addClass("bicolumnPopUp");

                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });

            });
            $("#VisualizeBIColumns").css("display", "block");
            $("#Fields").css("display", "block");
            switchSmartBiDesignTabs("li_contentView", "visionGridDataView");
        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}
function switchSmartBiDesignTabs(liId, divId) {
    $("#" + liId).parent().find('li.visionSmartBiDesignTabHighLight').removeClass('visionSmartBiDesignTabHighLight');
    $("#" + liId).addClass('visionSmartBiDesignTabHighLight');
    $("#visualizeArea").hide();
    $("#visionGridDataView").hide();
    $("#visionChartAutoSuggestionsViewId").hide();
    $("#visionVisualizeQueryGridId").hide();
    $("#" + divId).show();
    if (divId != null && divId != '' && divId != undefined && divId == 'visionGridDataView') {
        $("#visualizeAreaGirdData1").show();
    }


    if (!(divId != null && divId != '' && divId != undefined && divId == 'visionChartAutoSuggestionsViewId')) {
        $(".leftFileUploads").show();
        $(".visualizationMainDivwrapper").show();
        $("#visualizeChartAndDataArea").css("width", "70%", "!important");
        var leftFileUploadswidth = $('.leftFileUploads').width();
        var visualizationMainDivwrapperwidth = $('.visualizationMainDivwrapper').width();
        if (leftFileUploadswidth == '15%' && visualizationMainDivwrapperwidth == '15%') {
            $(".chartViewAreaClass").css("width", "70%", "!important");
            $(".chartView").css("width", "70%", "!important");
        } else if (visualizationMainDivwrapperwidth == '15%') {
            $(".chartViewAreaClass").css("width", "80%", "!important");
            $(".chartView").css("width", "80%", "!important");
        } else {
            $(".chartViewAreaClass").css("width", "95%", "!important");
            $(".chartView").css("width", "100%", "!important");
        }
        if (divId != null && divId != '' && divId != undefined && divId == 'visionVisualizeQueryGridId') {
            $('#visionVisualizeQueryGridId').jqxSplitter({width: '100%', height: '100%', orientation: 'horizontal', panels: [{size: 270, min: 100}, {min: 250, size: 350}]});
        }
    } else {
        $(".leftFileUploads").hide();
        $(".visualizationMainDivwrapper").hide();
        $("#visualizeChartAndDataArea").css("width", "99%", "!important");
        showIntelliSenseAutoSuggestions1("visionChartsAutoSuggestionUserId");
    }

    if (divId != null && divId != '' && divId != undefined && divId == 'visionVisualizeQueryGridId')
    {
        getUserEditorDefaultExistedTables();
    }
}


function getDataCorrelation(fileName) {
    $.ajax({
        type: "POST",
        url: "getDataCorrelation",
        cache: false,
        data: {
            fileName: fileName
        },
        success: function (response) {
            //TODO: Need to add Loader
            if (response != null && !jQuery.isEmptyObject(response)) {
                dataTableConfig(response);
            } else {
                var errorMessage = "Failed to get Data Correlation Response.";
                var errorMessageResponse = getErrorMessageDiv(errorMessage);
                var buttonArray = [
                    {
                        text: 'Close',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                showPopUpWithButtonFunctionCall(errorMessageResponse, buttonArray);
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}





function formatnumber(number) {
    var unitlist = ["", "K", "M", "B", "T"];
    let sign = Math.sign(number);
    let unit = 0;
    while (Math.abs(number) > 1000) {
        unit = unit + 1;
        number = Math.floor(Math.abs(number) / 10) / 100;
    }
    return sign * Math.abs(number) + unitlist[unit];
}

function getCalendarColumns(chartId, chartType, tableName) {
    $.ajax({
        type: "POST",
        url: "getDateColumns",
        cache: false,
        data: {
            tableName: tableName
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                var result = response['result'];
                var dataColsArr = response['dataColsArr'];
                var modalObj = {
                    title: labelObject['Date Columns'] != null ? labelObject['Date Columns'] : "Date Columns",
                    body: result,
                };
                var buttonArray = [
                    {
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            getDateColumnsTreeMapChart(chartId, chartType, tableName);
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("smartBiTreeDateCalendarPopup", modalObj);
                $(".visionVisualizationDragColumns").css("display", "block");
                $(".VisionImageVisualizationTableClass").css({transform: "rotate(90deg)"});
                $(".modal-body").addClass("visionVisualizeDateColumnClass");
                /*$(".VisionImageVisualizationTableClass").unbind().click(function() {
                 $(this).parent().parent().find('ul').toggle();
                 if ($(this).parent().parent().find('ul').is(":visible")) {
                 
                 $(this).css({ transform: "rotate(90deg)" });
                 } else {
                 $(this).css({ transform: "rotate(360deg)" });
                 }
                 });*/
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function getDateColumnsTreeMapChart(chartId, chartType, tableName) {
    var filterConditions = [];
    $(".visionVisualizeChartTableColumnDateCalendarClass div").each(function () {
        var divId = $(this).attr("id");
        var fromToDate = $("#" + divId).find("span").html();
        if (fromToDate != null && fromToDate != '' && fromToDate != undefined) {
            var colName = divId.replace("_calendar", "");
            var fromToDateArr = fromToDate.split("-");
            var fromd = new Date(fromToDateArr[0]);
            var fromDateStr = $.datepicker.formatDate('dd-mm-yy', fromd);
            var tod = new Date(fromToDateArr[1]);
            var toDateStr = $.datepicker.formatDate('dd-mm-yy', tod);
            var paramObj = {};
            paramObj.colName = colName;
            paramObj.operator = "BETWEEN";
            paramObj.minvalue = fromDateStr;
            paramObj.maxvalue = toDateStr;
            filterConditions.push(paramObj);
        }
    });
    if (filterConditions != null && !jQuery.isEmptyObject(filterConditions)) {
        filterConditions = JSON.stringify(filterConditions);
    }
    var flag = 'N';
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'html',
        cache: false,
        url: 'getChartFilterData',
        async: false,
        data: {
            chartId: chartId,
            tableName: tableName,
            chartType: chartType,
            filterConditions: filterConditions,
            flag: flag
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                var result = JSON.parse(response);
                var dataarr = result['dataarr'];
                if (dataarr != null && dataarr != '' && dataarr != undefined) {
                    var count = 0;
                    for (var i = 0; i < dataarr.length; i++) {
                        var XAxix = dataarr[i]['xAxix'];
                        var yAxix = dataarr[i]['yAxix'];
                        var type = dataarr[i]['type'];
                        var table = dataarr[i]['table'];
                        var id = dataarr[i]['chartid'];
                        var Lebel = dataarr[i]['Lebel'];
                        var aggColumnName = dataarr[i]['aggColumnName'];
                        var chartPropObj = dataarr[i]['chartPropObj'];
                        var chartConfigObj = dataarr[i]['chartConfigObj'];
                        var labelLegend = dataarr[i]['labelLegend'];
                        var filterCondition = dataarr[i]['filterCondition'];
                        if (filterCondition != null && filterCondition != '' && filterCondition != undefined) {
                            filterCondition = JSON.parse(filterCondition);
                            if (filterCondition != null && !jQuery.isEmptyObject(filterCondition)) {
                                if (filterConditions != null && filterConditions != '' && filterConditions != undefined) {
                                    filterConditions = JSON.parse(filterConditions);
                                    for (var key in filterCondition) {
                                        var paramObj = filterCondition[key];
                                        filterConditions.push(paramObj);
                                    }
                                    if (filterConditions != null && !jQuery.isEmptyObject(filterConditions)) {
                                        filterConditions = JSON.stringify(filterConditions);
                                    }
                                }
                            }
                        }
                        if (XAxix != null && XAxix != '' && yAxix != null && yAxix != '' && type != 'Card') {
                            var chartid = id;
                            var chartExtendPropObj = $("#" + chartid + "_options").val();
                            if (chartExtendPropObj != null && chartExtendPropObj != '' && chartExtendPropObj != undefined) {
                                chartPropObj = chartExtendPropObj;
                            }
                            $("#" + chartid + "_filter").val(filterConditions);
                            getVisualizeChart(chartid, chartType, XAxix, yAxix, table, aggColumnName, filterConditions, chartPropObj, chartConfigObj, count, labelLegend);
                        }

                    }
                }


            }
        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}

function positionChartLegend(chartType, chartId, colors, chartlabels, data, layout, config) {
    var n = 0;
    if (colors != null && !jQuery.isEmptyObject(colors) && colors.length > 0) {
        n = colors.length;
    }
    if (chartType != null && chartType != '' && chartType != undefined && (chartType == 'donut' || chartType == 'pie')) {
        var html = "<div class='pieLegends' id='" + chartId + "_legends' >";
        $.each(chartlabels, function (i) {
            html += "<div class='pieLegendLabelItem' lable-index='" + i + "' legend-color-code='" + colors[i % n] + "' ><div style='height:12px;width:12px;background-color:" + colors[i % n] + ";' ></div><span>" + this + "</span></div>";
        })
        html += "</div>";
        $("#" + chartId + "_legends").remove();
        //$("#" + chartId).append(html);
        $(html).insertAfter($("#" + chartId));
    }

    $("#" + chartId).parent().find(".pieLegendLabelItem").click(function (event) {

        var graphdata = document.getElementById(chartId)

        var graphdata = graphdata.data; // => current data
        var graphchartlabels = graphdata[0]['labels'];
        var graphchartValues = graphdata[0]['values'];
        //var layout = graphdata.layout;

        if (!$(event.currentTarget).hasClass("filteredLegend")) {

            var newdata = JSON.parse(JSON.stringify(graphdata));
            $(event.currentTarget).addClass("filteredLegend");
            var label = $(event.currentTarget).find("span").text();
            var index = graphchartlabels.indexOf(label);
            newdata[0]['labels'].splice(index, 1);
            newdata[0]['values'].splice(index, 1);

            var colorcode = $(event.currentTarget).attr("legend-color-code");
            var colorcodeindex = newdata[0]['marker']['colors'].indexOf(colorcode);
            newdata[0]['marker']['colors'].splice(colorcodeindex, 1);
            Plotly.newPlot(chartId, newdata, layout, config);

        } else {
            $(event.currentTarget).removeClass("filteredLegend");
            var filteredLegends = $("#" + chartId).find(".filteredLegend");

            var newdata = JSON.parse(JSON.stringify(data));

            $.each(filteredLegends, function (indx) {
                var label = $(this).find("span").text();
                var index = newdata[0]['labels'].indexOf(label);
                newdata[0]['labels'].splice(index, 1);
                newdata[0]['values'].splice(index, 1);
                var colorcode = $(this).attr("legend-color-code");
                var colorcodeindex = newdata[0]['marker']['colors'].indexOf(colorcode);
                newdata[0]['marker']['colors'].splice(colorcodeindex, 1);
            })

            Plotly.newPlot(chartId, newdata, layout, config);

        }

    })
}



function viewAnalyticsTableData(viewFlag) {
    var parentItem = $('#ivisualizationConnections').jqxTree('getSelectedItem');
    var tableName = parentItem.value;
    var data = {
        startIndex: 0,
        endIndex: 50,
        tableName: tableName,
        analytics: "Y"
    }; 
    viewAnalyticsTableDataGrid(data,viewFlag);
}
function viewAnalyticsTableDataGrid(data, viewFlag) {
    showLoader();
    var tableName = data.tableName;
    var dmaFlag = $("#dmaReportId").val();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: 'viewAnalyticsTableGrid',
        cache: false,
        data: data,
        success: function (response) {

            if (response != null) {
                // var responseObj = JSON.parse(response);
                var dataArray = response['dataArray'];
                var dataFieldsArray = response['dataFieldsArray'];
                var columnsArray = response['columnsArray'];
                var totalCount = response['totalCount'];
                var gridId = ("divGrid-" + tableName).replace(/\s/g, '');
                gridId = gridId.replace(/\//g, '');
                var selectedItemIndex = $('#visualizeTablesGridData').jqxTabs('selectedItem');
                var buttons = response['buttons'];
                if (dmaFlag != null && dmaFlag != "") {
                    buttons = `<span id='analyticsDMA' class='visionGridViewButtonsClass' onclick="showDMAFormReport('${gridId}', '${tableName}','N')">
        <img src='images/iDXPUI5Reports.svg' width='25px;'/>
    </span>`
                }
                var tabIndex = -1;
                var tabTitles = $('#visualizeTablesGridData').find('.jqx-tabs-title');
                tabTitles.each(function (index) {
                    if ($(this).text() === tableName) {
                        tabIndex = index;
                        return false; // Exit the loop if tab is found
                    }
                });
                if (tabIndex !== -1 && !viewFlag ==="DIALOG_VIEW") {
                    // Tab already exists, remove it first
                    $('#visualizeTablesGridData').jqxTabs('removeAt', tabIndex);
                }
                if (selectedItemIndex == null) {

                    //$("#designViewTab").jqxTabs('select', 1);
                    switchSmartBiDesignTabs("li_contentView", "visionGridDataView");
                    $("#visionSmartBiGridDataId").hide();
                    $("#visualizeTablesGridData").show();
                    $("#visualizeTablesGridData").prepend("<ul></ul>");
                    $("#visualizeTablesGridData ul").prepend("<li title='" + tableName + "'>" + tableName + "</li>");
                    if (viewFlag == "FORM-VIEW") {
                        $("#visualizeTablesGridData").append("<div id='dqopsTabContainer' class='dqopsTabContainer'></div>");
                        dqopsViewThemeTabsData(tableName, gridId);

                    } else if (viewFlag == "DIALOG_VIEW") {
                        showMesg("<div><div class=\'visulizeGridPagrClass\'><img src='images/iDXPUI5Refresh.svg' style='width:18px;height: 18px;cursor:pointer;padding-left:3px;' onclick=refreshIntegralGrid('" + gridId + "') title='Refresh'>" + buttons + "</div><div id='" + gridId + "' style='position: absolute; top:70px;display:block;'></div></div>"); // ravi edit for tabs navigation
                    } else {
                        $("#visualizeTablesGridData").append("<div><div class=\'visulizeGridPagrClass\'><img src='images/iDXPUI5Refresh.svg' style='width:18px;height: 18px;cursor:pointer;padding-left:3px;' onclick=refreshIntegralGrid('" + gridId + "') title='Refresh'>" + buttons + "</div><div id='" + gridId + "'></div></div>");
                    }
                    $('#visualizeTablesGridData').jqxTabs({width: "100%", height: "100%", theme: 'summer', reorder: true});
                    $('#visualizeTablesGridData').jqxTabs('showAllCloseButtons');
                    $("#visualizeTablesGridData").find("li.jqx-tabs-title").find("div.jqx-tabs-close-button").css("background-image", "url(images/close.png)");
                    $("#visualizeTablesGridData").find("li.jqx-tabs-title-selected-top").find("div.jqx-tabs-close-button").css("background-image", "url(images/close_white.png)");
                    // $("#"+gridId).css("display","block","!important");


                } else {
                    switchSmartBiDesignTabs("li_contentView", "visionGridDataView");
                    if ($("#" + gridId).length > 0)
                    {
                        var tabLength = $('#visualizeTablesGridData').jqxTabs('length');
                        for (var tabLen = 0; tabLen < tabLength; tabLen++)
                        {
                            var tabTitle = $('#visualizeTablesGridData').jqxTabs('getTitleAt', tabLen);
                            if (tableName == tabTitle)
                            {
                                $('#visualizeTablesGridData').jqxTabs('select', tabLen);
                                stopLoader();
                                return;
                            }
                        }
                    } else {
                        if (viewFlag == "FORM-VIEW") {
                            $('#visualizeTablesGridData').jqxTabs('addLast', tableName, '<div id="dqopsTabContainer"></div>');
                            dqopsViewThemeTabsData(tableName, gridId);
                        } else if (viewFlag == "DIALOG_VIEW") {
                            showErrorPopupMessage("<div><div class=\'visulizeGridPagrClass\'><img src='images/iDXPUI5Refresh.svg' style='width:18px;height: 18px;cursor:pointer;padding-left:3px;' onclick=refreshIntegralGrid('" + gridId + "') title='Refresh'>" + buttons + "</div><div id='" + gridId + "' style='position: absolute; top:70px;display:block;'></div></div>", tableName, 500, 500); // ravi edit for tabs navigation
                        } else {
                            $('#visualizeTablesGridData').jqxTabs('addLast', tableName, '<div><div class=\'visulizeGridPagrClass\'><img src="images/iDXPUI5Refresh.svg" style="width:18px;height: 18px;cursor:pointer;padding-left:3px;" onclick=refreshIntegralGrid("' + gridId + '") title="Refresh">' + buttons + '</div></div><div id="' + gridId + '"></div>'); // ravi edit for tabs navigation
                        }
                    }
                }
                if (viewFlag === "FORM-VIEW") {
                    stopLoader();
                    return;
                }
                data['getOnlyDataArray'] = "Y";
                var source =
                        {
                            type: 'POST',
                            //                                                async: false,
                            datatype: "json",
                            datafields: dataFieldsArray,
                            data: data,
                            url: 'viewAnalyticsTableGridData',
                            cache: false,
                            root: 'Rows',
                            processdata: function (data) {
                                showLoader();
                                data['getOnlyDataArray'] = 'Y';
                            },
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                //showLoader();

                            }, loadError: function (xhr, status, error) {
                                $('#visualizeTablesGridData').css("width", "100%");
                                stopLoader();
                            }, loadComplete: function (data) {
                                $('#visualizeTablesGridData').css("width", "100%");
                                stopLoader();
                            },
                            beforeprocessing: function (data) {

                                source.totalrecords = data[data.length - 1];
                            },
                            sort: function () {
                                //                                                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
                                $("[id='" + gridId + "']").jqxGrid('updatebounddata', 'sort');
                                try {
                                    $("[id='" + gridId + "']").jqxGrid('clearselection');
                                } catch (e) {
                                }

                            },
                            filter: function () {

                                $("[id='" + gridId + "']").jqxGrid('updatebounddata', 'filter');
                                try {
                                    $("[id='" + gridId + "']").jqxGrid('clearselection');
                                } catch (e) {
                                }

                            }
                        };
                //                var source =
                //                        {
                //                            localdata: dataArray,
                //                            datatype: "array",
                //                            datafields: dataFieldsArray
                //                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                $("[id='" + gridId + "']").jqxGrid(
                        {
                            width: "100%",
                            height: "95%",
                            theme: 'energyblue',
                            autoshowloadelement: false,
                            source: dataAdapter,
                            pageable: true,
                            pagesize: 50,
                            showfilterrow: true,
                            filterable: true,
                            sortable: true,
                            virtualmode: true,
                            pagesizeoptions: ['50', '100', '500'],
                            rendergridrows: function (params) {
                                return params.data;
                            },
                            columnsresize: true,
                            columns: columnsArray
                        });
                $('#visualizeTablesGridData').unbind('selected').on('selected', function (event) {
                    var $thid = this;
                    $('#visualizeTablesGridData').jqxTabs('getContentAt', event.args.item);
                    $("#visualizeTablesGridData").find("li.jqx-tabs-title").find("div.jqx-tabs-close-button").css("background-image", "url(images/close.png)");
                    $("#visualizeTablesGridData").find("li.jqx-tabs-title-selected-top").find("div.jqx-tabs-close-button").css("background-image", "url(images/close_white.png)");
                });
                $('#visualizeTablesGridData').unbind('add').on('add', function (event) {

                    $("#visualizeTablesGridData").find("li.jqx-tabs-title").find("div.jqx-tabs-close-button").css("background-image", "url(images/close.png)");
                    //                    $("#visualizeTablesGridData").find("li.jqx-tabs-title-selected-top").find("div.jqx-tabs-close-button").css("background-image", "url(images/close_white.png)");
                    setTimeout(function () {
                        $("#visualizeTablesGridData").find("li.jqx-tabs-title-selected-top").find("div.jqx-tabs-close-button").css("background-image", "url(images/close_white.png)");
                    }, 100);
                    var selectedTabTitle = $("#visualizeTablesGridData").jqxTabs("getTitleAt", event.args.item);
                    $("#visualizeTablesGridData").jqxTabs('setTitleAt', event.args.item, selectedTabTitle.split(".")[1]);
                    var selectedTabLi = $("#visualizeTablesGridData").find("li.jqx-tabs-title-selected-top");
                    selectedTabLi.attr("title", selectedTabTitle);
                    var selectedItem = $('#visualizeTablesGridData').jqxTabs('selectedItem'); // ravi edit for tabs issue
                    $('#visualizeTablesGridData').jqxTabs('ensureVisible', selectedItem); // ravi edit for tabs issue


                });
            }

        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}


function getSankeyChart(chartId, result, count, chartType, saveType) {
    chartType = 'sankey';
    var chartUpper = chartType.toUpperCase();
    var chartTitle = $("#" + chartUpper + "TITLEECHARTS").val();
    $("#visionVisualizeChartId" + count).remove();
    var sankeyChartId = "visionVisualizeChart" + count;
    var sankeyChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + sankeyChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "1000px", "!important");
    $("#" + chartId).css("height", "350px", "!important");
    $("#" + sankeyChartId).css("width", "1000px", "!important");
    $("#" + sankeyChartId).css("height", "600px", "!important");
    if ($("#" + chartId).parent().parent().hasClass("homeChartWrapDiv")) {
        $("#" + chartId).parent().parent().attr("class", "col-md-6 col-sm-6 col-lg-12 homeChartWrapDiv treeMapMainDiv");
    }
    $("#" + sankeyChartHomeId).addClass("visionVisualChartBoxClass");
    var dom = document.getElementById(chartId);
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var data = result['data'];
    var links = result['links'];
    var optionObjectEcharts = result['layout'];
    if (chartTitle === undefined || chartTitle === '' || chartTitle === null) {
        chartTitle = optionObjectEcharts['text'];
    }
    var tableName = result['tableName'];
    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        animation: false,
        series: {
            type: 'sankey',
            data: data,
            emphasis: {
                focus: 'adjacency'
            },
            links: links,
            label: {
                position: 'top'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.5
            }
        },
        title: {
            text: chartTitle,
            left: "center",
            padding: [10, 0],
            textStyle: {
                fontSize: 14,
                fontWeight: "normal"
            }
        }

    };
    if (!(saveType != null && saveType != '' && saveType != undefined)) {
        getToolBox(chartId, chartType, tableName);
    }



    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

}

function getChartLabelOrHoverDataFormatter(chartTemplateType, traceObject, chartValuesDataArr, plotlyChartLabelType, dataLabelType, dataValueType, isCurrencyConversionEvent, currencySymbolmethodArgu) {
    var currencySymbol = $("#toCurrencyDropDown_jqxDropDownList option:selected").attr('data-currencySymbol');
    var fontFamily = traceObject['fontFamily'] + ", sans-serif";
    if (currencySymbol === undefined || currencySymbol === '' || currencySymbol === null && isCurrencyConversionEvent) {
        currencySymbol = currencySymbolmethodArgu;
    }
    var sumOfChartValuesData = chartValuesDataArr.reduce((a, b) => a + b);
    var chartType = traceObject['type'];
    if (chartType == "pie" || chartType == "donut") {
        traceObject['customdata'] = chartValuesDataArr.map((value, index) => {
            var formatHoverTextValue = formatHoverText(value);
            return formatHoverTextValue;
        });
    } else {
        traceObject['customdata'] = chartValuesDataArr.map((value, index) => {
            const percentage = (chartValuesDataArr[index] / sumOfChartValuesData) * 100;
            return {formattedValue: formatHoverText(value), percentage: percentage};
        });
    }

    if (plotlyChartLabelType !== null && plotlyChartLabelType !== ""
            && plotlyChartLabelType !== undefined) {
        if (plotlyChartLabelType === "label" || plotlyChartLabelType === "theta" || plotlyChartLabelType === "x") {
            var chartFormatter = '%{' + dataLabelType + '}';
            traceObject[chartTemplateType] = chartFormatter;
        } else if (plotlyChartLabelType === "value" || plotlyChartLabelType === "r" || plotlyChartLabelType === "y") {
            var chartFormatter;
            if (isCurrencyConversionEvent) {
                chartFormatter = '<span>' + currencySymbol + '</span>%{' + dataValueType + ':.2f}';
            } else {
                chartFormatter = '%{customdata}';
                if (chartType != "pie" && chartType != "donut") {
                    chartFormatter = '%{customdata.formattedValue}'
                }
            }
            traceObject[chartTemplateType] = chartFormatter;
        } else if (plotlyChartLabelType === "percent" || plotlyChartLabelType === "%") {
            var chartFormatter = '%{percent}';
            if (chartType != "pie" && chartType != "donut") {
                chartFormatter = '%{customdata.percentage:.2f}%'
            }
            traceObject[chartTemplateType] = chartFormatter;
        } else if (plotlyChartLabelType === "label+value" || plotlyChartLabelType === "theta+r" || plotlyChartLabelType === "x+y") {
            var chartFormatter;
            if (isCurrencyConversionEvent) {
                chartFormatter = '%{' + dataLabelType + '}<br><span>' + currencySymbol + '</span>%{' + dataValueType + ':.2f}';
            } else {
                chartFormatter = '%{' + dataLabelType + '}<br>%{customdata}';
                if (chartType != "pie" && chartType != "donut") {
                    chartFormatter = '%{' + dataLabelType + '}<br>%{customdata.formattedValue}'
                }
            }
            traceObject[chartTemplateType] = chartFormatter;
        } else if (plotlyChartLabelType === "label+percent" || plotlyChartLabelType === "x+%") {
            var chartFormatter = '%{' + dataLabelType + '}<br>%{percent}';
            if (chartType != "pie" && chartType != "donut") {
                chartFormatter = '%{' + dataLabelType + '}<br>%{customdata.percentage:.2f}%'
            }
            traceObject[chartTemplateType] = chartFormatter;
        } else if (plotlyChartLabelType === "value+percent" || plotlyChartLabelType === "y+%") {

            var chartFormatter;
            if (isCurrencyConversionEvent) {
                chartFormatter = '<span>' + currencySymbol + '</span>%{' + dataValueType + ':.2f}<br>%{customdata:.0f}%';
            } else {
                chartFormatter = '%{customdata}<br>%{percent}';
                if (chartType != "pie" && chartType != "donut") {
                    chartFormatter = '%{customdata.formattedValue}<br>%{customdata.percentage:.2f}%'
                }
            }
            traceObject[chartTemplateType] = chartFormatter;
        } else if (plotlyChartLabelType === "none") {
            traceObject[chartTemplateType] = chartFormatter;
        }

        if (chartTemplateType !== undefined && chartTemplateType !== '' && chartTemplateType == 'hovertemplate' && plotlyChartLabelType != "none") {
            traceObject[chartTemplateType] = '<span style="font-family: ' + fontFamily + ';">' + traceObject[chartTemplateType] + '</span>' + '<extra></extra>';
        }
    } else {
        var chartFormatter;
        if (isCurrencyConversionEvent) {
            //				chartFormatter = '(%{' + dataLabelType + '},<span>' + currencySymbol + '</span>%{' + dataValueType + ':.2f})';
            chartFormatter = '%{' + dataLabelType + '}<br><span>' + currencySymbol + '</span>%{' + dataValueType + ':.2f}';
        } else {
            //				chartFormatter = '(%{' + dataLabelType + '},%{' + dataValueType + '})';
            chartFormatter = '%{' + dataLabelType + '}<br>%{' + dataValueType + ':.2f}';
        }
        traceObject[chartTemplateType] = chartFormatter;
    }
    return traceObject;
}
function isArrayNumeric(arr) {
    return arr.every(element => !isNaN(element));
}
function areAllDatesValidFormat(dateArray) {
    return dateArray.every(isValidDateFormat);
}
function isValidDateFormat(dateString) {
    //const regex = /^\d{4}(-\d{2}-\d{2})?$/; // Matches format YYYY-MM-DD
    const regex = /^(?:\d{2}-\d{2}-\d{4}|\d{4}-\d{2}-\d{2})$/; // Matches Either format YYYY-MM-DD or format DD-MM-YYYY
    return regex.test(dateString);
}
function formatHoverText(y) {
    return d3.format('.3~s')(y)
            .replace('k', 'K')
            .replace('m', 'M')
            .replace('G', 'B');
}

function showCurrencyConversionPopup(chartId, count, chartType) {
    $.ajax({
        dataType: 'html',
        type: "POST",
        url: "getCurrencyAndCode",
        cache: false,
        data: {},
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                var currencyConversionDiv = "<div id='currencyConversionMain' class='currencyConversionMain'>" + response + "</div>";
                var buttonArray = [
                    {
                        text: 'Apply',
                        click: function () {
                            $("#isCurrencyConversionEvent").val("true");
                            getChart(chartId, count, chartType);
                        },
                        isCloseButton: true
                    },
                    {
                        text: 'Close',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                showPopUpWithButtonFunctionCall(currencyConversionDiv, buttonArray);
                $("#fromCurrencyDropDown").jqxDropDownList({
                    //					width: 200,
                    height: 30,
                    theme: 'energyblue',
                    filterable: true,
                    filterHeight: 30,
                    dropDownHeight: 200
                });
                $("#toCurrencyDropDown").jqxDropDownList({
                    //					width: 200,
                    height: 30,
                    theme: 'energyblue',
                    filterable: true,
                    filterHeight: 30,
                    dropDownHeight: 200
                });
                $("#modalDailogDiv .modal-dialog").addClass("modal-md");
            } else {

            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function showPopUpWithButtonFunctionCall(message, buttonArray) {
    var modalObj = {
        title: 'Message',
        body: message
    };
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
}




function getArtIntAPI(chartId, chartType, table) {
    showLoader();
    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'json',
        url: 'getArtificialIntellisenseApiDetails',
        cache: false,
        data: {
            chartId: chartId,
            chartType: chartType,
            table: table,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            console.log(response);
            stopLoader();
            var message = response['message'];
            var flag = response['flag'];
            if (flag) {
                if (message != null && message != '' && message != undefined && message.indexOf("|") > -1) {
                    var messageArr = [];
                    messageArr = message.split("|");
                    message = '<ul style="list-style-type:square;padding: 22px;">';
                    for (var i = 0; i < messageArr.length; i++) {
                        message += "<li>" + messageArr[i] + "</li>";
                    }
                    message += '</ul>';
                }
                var modalObj = {
                    title: "<img src='images/BrainAI.png' style='width:20px;margin-top: -3px;'>&nbsp;&nbsp;&nbsp;<span style='font-size: 18px;'>Artificial Intelligence Analysis</span>",
                    body: message,
                };
                var buttonArray = [
                    {
                        text: labelObject['Close'] != null ? labelObject['Close'] : 'Close',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-dialog").addClass("modal-xl");
            } else {
                getArtIntAPI(chartId, chartType, table);
            }
        }
    });
}

function renameColumnValue(column, table) {

    $.ajax({
        type: "POST",
        url: "getColumnformStr",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            column: column,
            table: table
        },
        success: function (response) {
            $("#dialog").html(response);
            $("#dialog").dialog({resizable: false,
                title: (labelObject[column] != null ? labelObject[column] : column),
                modal: true,
                width: 350,
                height: 150,
                fluid: true,
                /* buttons: [{
                 text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                 click: function () {
                 $("#dialog").html("");
                 $("#dialog").dialog("close");
                 $("#dialog").dialog("destroy");
                 }
                 
                 }],*/
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                    $(".ui-dialog").addClass("bicolumnPopUp");
                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}


function selectType(column, table) {
    $.ajax({
        type: "POST",
        url: "getSelectType",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            column: column,
            table: table
        },
        success: function (response) {
            $("#dialog").html(response);
            $("#dialog").dialog({resizable: false,
                title: (labelObject[column] != null ? labelObject[column] : column),
                modal: true,
                width: 350,
                height: 150,
                fluid: true,
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                    $(".ui-dialog").addClass("bicolumnPopUp");
                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function suffixValue(column, table) {
    $.ajax({
        type: "POST",
        url: "getSuffixValue",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            column: column,
            table: table
        },
        success: function (response) {
            $("#dialog").html(response);
            $("#dialog").dialog({resizable: false,
                title: (labelObject[column] != null ? labelObject[column] : column),
                modal: true,
                width: 350,
                height: 150,
                fluid: true,
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                    $(".ui-dialog").addClass("bicolumnPopUp");
                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function prefixValue(column, table) {
    $.ajax({
        type: "POST",
        url: "getPrefixValue",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            column: column,
            table: table
        },
        success: function (response) {
            $("#dialog").html(response);
            $("#dialog").dialog({resizable: false,
                title: (labelObject[column] != null ? labelObject[column] : column),
                modal: true,
                width: 350,
                height: 150,
                fluid: true,
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                    $(".ui-dialog").addClass("bicolumnPopUp");
                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function createFind(column, table) {
    $.ajax({
        type: "POST",
        url: "getCreateFind",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            column: column,
            table: table
        },
        success: function (response) {
            $("#dialog").html(response);
            $("#dialog").dialog({resizable: false,
                title: (labelObject[column] != null ? labelObject[column] : column),
                modal: true,
                width: 350,
                height: 150,
                fluid: true,
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                    $(".ui-dialog").addClass("bicolumnPopUp");
                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function searchWord(dataField) {
    var columnindex = $("#visualizeAreaGirdData1").jqxGrid('getcolumnindex', dataField);
    var searchTerm = $("#actualValueId").val();
    $("#visualizeAreaGirdData1").find(".jqx-grid-content").find(".jqx-grid-cell").each(function (i) {
        var cell = this;
        if ($(this).attr("columnindex") == columnindex) {
            var cellvalue = $(this).find("div").text();
            if (cellvalue.indexOf(searchTerm) > -1) {
                $(this).find("div").addClass("highlightSerchTerm");
                $(this).find("div").addClass("searchTermMatched");
                //$(this).find("div").text(searchTerm);
            } else {
                $(this).find("div").removeClass("highlightSerchTerm");
            }
        }

    })
}
function searchNextWord(dataField) {

    var columnindex = $("#visualizeAreaGirdData1").jqxGrid('getcolumnindex', dataField);
    var searchTerm = $("#actualValueId").val();
    var matchCount = 0;
    //$("#visualizeAreaGirdData1").find(".jqx-grid-content").find(".jqx-grid-cell").find(".searchTermMatched").removeClass("highlightSerchTerm");
    $("#visualizeAreaGirdData1").find(".jqx-grid-content").find(".jqx-grid-cell").find(".searchTermMatched").each(function (i) {

        var cellvalue = $(this).text();
        if (cellvalue.indexOf(searchTerm) == -1) {
            $(this).removeClass("searchTermMatched");
        }
        $(this).removeClass("highlightSerchTerm");
    })

    $("#visualizeAreaGirdData1").find(".jqx-grid-content").find(".jqx-grid-cell").each(function (i) {

        var cell = this;
        if ($(this).attr("columnindex") == columnindex) {
            var cellvalue = $(this).find("div").text();
            if (cellvalue.indexOf(searchTerm) > -1) {
                if (!$(this).find("div").hasClass("searchTermMatched")) {
                    $(this).find("div").addClass("searchTermMatched");
                    $(this).find("div").addClass("highlightSerchTerm");
                    matchCount = 1;
                    throw "searchTermMatched";
                } else {
                    $(this).find("div").removeClass("highlightSerchTerm");
                }

            }
        }



    })

    var matchedDivs = $("#visualizeAreaGirdData1").find(".jqx-grid-content").find(".jqx-grid-cell").find(".searchTermMatched");
    if (matchCount == 0 && matchedDivs.length > 0) {

        $("#visualizeAreaGirdData1").find(".jqx-grid-content").find(".jqx-grid-cell").find(".searchTermMatched").removeClass("searchTermMatched");
        $(matchedDivs[0]).addClass("searchTermMatched");
        $(matchedDivs[0]).addClass("highlightSerchTerm");
    }


}

function createRenameValue(column, table) {
    var findValue = $("#actualValueId").val();
    var renameValue = $("#renameValueId").val();
    if (findValue != null) {
        $.ajax({
            type: "POST",
            url: "getRenameValue",
            cache: false,
            dataType: 'html',
            async: false,
            data: {
                findValue: findValue,
                column: column,
                renameValue: renameValue,
                table: table
            },
            success: function (response) {

                showalterColumnData(table);
                showFileToDxpTableData(table);
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    }

}

function processAlterTable(tableName) {
    console.log(alterTableData);
    var result = "";
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'json',
        cache: false,
        url: 'executeAlterTableColumn',
        async: true,
        data: {
            tableName: tableName,
            alterTableData: JSON.stringify(alterTableData),
            existingPKcols: $("#alterTablePKList").val()
        },
        success: function (response) {
            stopLoader();
            if (response != null) {
                var message = response['message'];
                var message = response['message'];
                $("#dialog").html(message);
                $("#etldialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 1000,
                    height: 600,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("destroy");
                            }

                        }],
                    open: function () {
                        $('#pdfToHTMLData').attr('srcdoc', result);
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function createPrifix(column, tableName) {
    var PrifixVal = $("#prifixId").val();
    var sufixPrifixVal = "TEST";
    var checkedVal = "PRIFIX";
    if (PrifixVal != null && PrifixVal != undefined && PrifixVal != '') {
        $.ajax({
            type: "POST",
            url: "createPrefixValue",
            cache: false,
            dataType: 'html',
            async: false,
            data: {
                column: column,
                sufixandPrifixVal: sufixPrifixVal,
                PrifixVal: PrifixVal,
                table: tableName,
                checkedVal: checkedVal
            },
            success: function (response) {

                if (response != null && response != '') {
                    $("#dialog").html("");
                    $("#dialog").dialog("close");
                    $("#dialog").dialog("destroy");
                    showalterColumnData(tableName);
                }
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    }

}

function showChartsInRow() {
    var value = $("#visionVisualizeChartsInRowSelectId").val();
    if ($.trim($('#modalFileCharts').html())) {
        $("#modalFileCharts div.visionVisualizeModalChartClass").each(function () {
            var divId = $(this).attr("id");
            var childIds = $("#" + divId).children("div[id]");
            var chartId = childIds[0]['id'];
            if (value != null && value != '' && value != undefined && value == '2') {
                $("#" + divId).attr("class", "col-md-6 visionVisualizeModalChartClass fileChartsBorder");
                $(".fileChartsBorder").css("max-width", "49.5%", "!important");
                var width = $("#" + chartId).width();
                var update =
                        {
                            width: width,
                            height: 300,
                        }
                Plotly.relayout(chartId, update);
            } else if (value != null && value != '' && value != undefined && value == '3') {
                $("#" + divId).attr("class", "col-md-4 visionVisualizeModalChartClass fileChartsBorder");
                $(".fileChartsBorder").css("max-width", "33%", "!important");
                var width = $("#" + chartId).width();
                var update =
                        {
                            width: width,
                            height: 300,
                        }
                Plotly.relayout(chartId, update);
            } else if (value != null && value != '' && value != undefined && value == '4') {
                $("#" + divId).attr("class", "col-md-3 visionVisualizeModalChartClass fileChartsBorder");
                $(".fileChartsBorder").css("max-width", "24.5%", "!important");
                var width = $("#" + chartId).width();
                var update =
                        {
                            width: width,
                            height: 300,
                        }
                Plotly.relayout(chartId, update);
            }

        });
    }
}
function removeDuplicate(column, table) {
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'json',
        cache: false,
        url: 'removeDuplicateValue',
        data: {
            column: column,
            table: table

        },
        success: function (response) {

            var modalObj = {
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                body: "Are you sure you want to  Remove Duplicate Values??",
            };
            var buttonArray = [
                {
                    text: labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes',
                    click: function () {
                        var modalObj = {
                            title: labelObject['Remove Duplicate Values'] != null ? labelObject['Remove Duplicate Values'] : 'Remove Duplicate Values',
                            body: "<div id = 'dupcolumnlistId' class = 'dupcolumnlistId'></div><div id = 'dupcolumnlistresult' class = 'dupcolumnlistresultId'><center>Do you want to see the duplicates in this column?</center></div>",
                        };
                        var buttonArray = [
                            {
                                text: labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes',
                                click: function () {
                                    checkboxColumn(column, table);
                                },
                                isCloseButton: true
                            },
                            {
                                text: labelObject['No'] != null ? labelObject['No'] : 'No',
                                click: function () {
                                },
                                isCloseButton: true
                            }
                        ];
                        modalObj['buttons'] = buttonArray;
                        createModal("dataDxpSplitterValue", modalObj);
                        $(".modal-dialog").addClass("modal-xs");
                        $("#dupcolumnlistId").jqxListBox({
                            filterable: true,
                            checkboxes: true,
                            source: response['checkBoxDataArr'],
                            theme: 'energyblue',
                            displayMember: 'text',
                            valueMember: 'value',
                            width: '310px'
                        });
                    },
                    isCloseButton: true
                },
                {
                    text: labelObject['No'] != null ? labelObject['No'] : 'No',
                    click: function () {
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("dataDxpSplitterValue", modalObj);
            $(".modal-dialog").addClass("modal-xs");
        }
    });
}
function deleteDuplicate(column, table) {
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'json',
        cache: false,
        url: 'deleteDuplicateValues',
        data: {
            column: column,
            table: table

        },
        success: function (response) {

            var modalObj = {
                title: labelObject['Duplicate Deletion'] != null ? labelObject['Duplicate Deletion'] : 'Duplicate Deletion',
                body: response['result'],
            };
            var buttonArray = [
                {
                    text: labelObject['OK'] != null ? labelObject['OK'] : 'OK',
                    click: function () {

                        showalterColumnData(table);
                    },
                    isCloseButton: true
                },
            ];
            modalObj['buttons'] = buttonArray;
            createModal("deleteDup", modalObj);
            $(".modal-dialog").addClass("modal-xs");
        }
    });
}


function showChartSaveByTypesSuggestion(chartId) {
    var colorpallateobj = "<p class='integralAIPopoverInnerText'><p>Do you want to Save chart.</p><p>Click here</p>";
    $("#visionVisualizeChartEditAISuggest").html("<div id='visionVisualizeSaveAIPopoverId' class='visionVisualizeSaveAIPopoverClass'></div>");
    $("#VisionVisualizeSaveAIImageId").remove();
    var integralSaveAIDiv = "<div id='VisionVisualizeSaveAIImageId' class='VisionVisualizeSaveAIImageClass'></div>";
    $("#" + chartId).find("[data-title='Save']").append(integralSaveAIDiv);
    $("#visionVisualizeSaveAIPopoverId").html(colorpallateobj);
    // $("#VisionVisualizeSaveAIImageId").html("<img src='images/curved_Arrow.png' id='VisionVisualizeSaveAIContentId' style='width:18px;height: 18px;cursor:pointer;padding-left:3px;'>");
    var abc = $("#" + chartId).find("[data-title='Save']");
    var offset = {left: 60, top: 20};
    $("#visionVisualizeSaveAIPopoverId").jqxPopover({
        /*offset: offset,*/
        position: 'right',
        width: 200,
        height: 80,
        autoClose: true,
        title: "<img src='images/ai_bulb.png' width='20px' />",
        showCloseButton: true,
        showArrow: true,
        arrowOffsetValue: 5,
        selector: abc

    });
    $('#visionVisualizeSaveAIPopoverId').addClass('defaultPopOverAnimate');
    $("#visionVisualizeSaveAIPopoverId").jqxPopover('open');
    $('#visionVisualizeSaveAIPopoverId').on('close', function () {
        $('#visionVisualizeSaveAIPopoverId').jqxPopover('close');
        $('#visionVisualizeSaveAIPopoverId').jqxPopover('destroy');
        $("#VisionVisualizeSaveAIContentId").remove();
    });
}
function getCardDateFunctions($event, count, columnName, id) {
    var div = "<li onclick=applyCardDateFunctions('ShowFilter','" + count + "','" + columnName + "','" + id + "')>Show Filter</li>";
    $("#jqxAggregate").remove();
    $('body').append("<div id='jqxAggregate'><ul></ul></div>");
    $("#jqxAggregate ul").html(div);
    var contextMenu = $("#jqxAggregate").jqxMenu({width: '90px', height: 30 + 'px', autoOpenPopup: false, mode: 'popup'});
    contextMenu.jqxMenu('open', parseInt(event.clientX) + 5, parseInt(event.clientY) + 5);
    $(".dxpPageContent").scroll(function (event) {
        if ($("#jqxAggregate ul").length > 0) {
            var pos = $(".dxpPageContent").scrollTop();
            $("#jqxAggregate").css("top", $event.offsetTop - pos);
        }
    });
}

function applyCardDateFunctions(aggregateType, count, columnName, id) {
    getCardDateData(id, columnName, count);
}

function getCardDateDataFilterChange(count) {
    var parmaFromArr = [];
    var parmaToArr = [];
    var paramFromObj1 = {};
    var paramToObj1 = {};
    var colName = $("#visionVisualizeCardChartDateValuesId_" + count).find('div.visualizeDivData').attr("data-column-name");
    var innerFilterDivClassArray = $("#visionVisualizeCardChartDateSelectValuesId_" + count).find(".innerFilterDivClass");
    var fromSelectId = $(innerFilterDivClassArray[0]).find("#ddwFrom" + count).attr("id");
    var visualizeAreaCardImageName = $("#cardImageVisualizeArea").attr("data-cardImageName");
    $("#visionVisualizeChart" + count).attr('data-cardImageName', visualizeAreaCardImageName);
    paramFromObj1.colName = colName;
    paramToObj1.colName = colName;
    if (fromSelectId != null && fromSelectId != '' && fromSelectId != undefined) {
        var fromMinval;
        var fromMaxval;
        var toMinval;
        var toMaxval
        var fromSelectValue = $("#" + fromSelectId).val();
        if (fromSelectValue != null && fromSelectValue != '' && fromSelectValue != undefined) {
            paramFromObj1.operator = fromSelectValue;
            if (fromSelectValue == "BETWEEN") {
                fromMinval = $("#tbminFrom" + count).val();
                fromMaxval = $("#tbmaxFrom" + count).val();
                paramFromObj1.minvalue = fromMinval;
                paramFromObj1.maxvalue = fromMaxval;
            }
            parmaFromArr.push(paramFromObj1);
        }
        var toSelectId = $(innerFilterDivClassArray[1]).find("select").attr("id");
        var toSelectValue = $("#" + toSelectId).val();
        if (toSelectValue != null && toSelectValue != '' && toSelectValue != undefined) {
            paramToObj1.operator = toSelectValue;
            if (toSelectValue == "BETWEEN") {
                toMinval = $("#tbminTo" + count).val();
                toMaxval = $("#tbmaxTo" + count).val();
                paramToObj1.minvalue = toMinval;
                paramToObj1.maxvalue = toMaxval;
            }
            parmaToArr.push(paramToObj1);
        }
        if (parmaFromArr != null && !jQuery.isEmptyObject(parmaFromArr) && parmaToArr != null && !jQuery.isEmptyObject(parmaToArr)
                && fromMinval != null && fromMinval != '' && fromMinval != undefined && fromMaxval != null && fromMaxval != '' && fromMaxval != undefined
                && toMinval != null && toMinval != '' && toMinval != undefined && toMaxval != null && toMaxval != '' && toMaxval != undefined) {
            getCardVisualizeData("SUM", count, "", parmaFromArr, parmaToArr);
        }
    } else {
        paramToObj1.operator = "EQUALS";
        paramFromObj1.operator = "EQUALS";
        var fromValue = $("#visionVisualizeCardDateFromSelectValueId" + count).val();
        var toValue = $("#visionVisualizeCardDateToSelectValueId" + count).val();
        paramFromObj1.values = fromValue;
        paramToObj1.values = toValue;
        parmaFromArr.push(paramFromObj1);
        parmaToArr.push(paramToObj1);
        if (parmaFromArr != null && !jQuery.isEmptyObject(parmaFromArr) && parmaToArr != null && !jQuery.isEmptyObject(parmaToArr)) {
            getCardVisualizeData("SUM", count, "", parmaFromArr, parmaToArr);
        }
    }
}
function scrollUp(chartId, chartType) {  //^^^
    var ChartIDtoScroll = $("#" + chartId).parent().attr('id');
    var visualizechartscroll = $(".modebar-container").height();
    $("#" + ChartIDtoScroll + " .modebar-container").animate({scrollTop: visualizechartscroll}, 220);
}
function scrollDownArrow(chartId, chartType) {
    var ChartIDtoScroll = $("#" + chartId).parent().attr('id');
    var visualizechartscroll = $(".modebar-container").height();
    $("#" + ChartIDtoScroll + " .modebar-container").animate({scrollTop: 0}, 220);
}



function getCardDateData(id, columnName, count) {
    showLoader();
    $.ajax({
        type: "POST",
        traditional: true,
        dataType: 'json',
        url: 'getCardDateValues',
        cache: false,
        data: {
            columnName: columnName,
            tableName: id,
            count: count
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var jsDateItems = response['dataColArr'];
                var cardDateDiv = response['cardDateDiv'];
                $("#visionVisualizeCardChartDateSelectValuesId_" + count).show();
                $("#visionVisualizeCardChartDateSelectValuesId_" + count).html(cardDateDiv);
                if (jsDateItems != null && !jQuery.isEmptyObject(jsDateItems)) {
                    for (var i = 0; i < jsDateItems.length; i++) {
                        $("#" + jsDateItems[i]['tbid']).datepicker(
                                {
                                    dateFormat: "dd-mm-yy",
                                    changeMonth: true,
                                    changeYear: true
                                })
                                .on('changeDate', function (ev) {
                                    if (jsDateItems[i]['type'] == 'min') {
                                        console.log($("#" + jsDateItems[i]['tbid']).datepicker("getDate"));
                                        $("#" + jsDateItems[i]['tbid']).datepicker(
                                                {
                                                    minDate: $("#" + jsDateItems[i]['tbid']).datepicker("getDate")
                                                });
                                    } else {
                                    }
                                });
                    }

                }

                $("#visionVisualizeCardChartDateSelectValuesId_" + count).unbind("change").on("change", function () {
                    getCardDateDataFilterChange(count);
                });
            }

        }



    });
}


function encodeImageFileAndAppendAsSrc(currentElement, homepageCardImgChngEvt) {
    var imagebase64 = "";
    $("#importCardImage").trigger("click");
    $("#importCardImage").unbind('change').on('change', function (event) {
        var file = event.target.files[0];
        var fileName = file['name'];
        var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
        if (fileExtension !== null && fileExtension !== '' && fileExtension !== undefined) {
            if (fileExtension !== 'png' && fileExtension !== 'jpeg' && fileExtension !== 'jpg' && fileExtension !== 'svg') {
                var errorMessage = "Upload Failed, Please upload only Images.";
                var errorMessageResponse = getErrorMessageDiv(errorMessage);
                var buttonArray = [
                    {
                        text: 'Upload',
                        click: function () {
                            encodeImageFileAndAppendAsSrc(currentElement, homepageCardImgChngEvt);
                        },
                        isCloseButton: true
                    },
                    {
                        text: 'Close',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                stopLoader();
                showPopUpWithButtonFunctionCall(errorMessageResponse, buttonArray);
            } else {
                uploadFileOnServer(file, homepageCardImgChngEvt);
            }
        }
        var $inputFile = $("#cardImageImportDiv");
        $inputFile.children().html("<input type='file' name='importCardImage' id='importCardImage' style='display:none;'/>");
    });
}

function getErrorMessageDiv(errorMessage) {
    var errorMessageResult = "<div class='errorMessageInPopUp'>"
            + "<img src='images/login_failed_icon_final.png'>"
            + "<p style=\"font-size: 14px;margin-bottom: 0px;\">" + errorMessage + "</p>"
            + "</div>";
    return errorMessageResult;
}

function getHorizontalBarChart(chartId, result, count, chartType, saveType) {
    chartType = 'sunburst';
    var chartUpper = chartType.toUpperCase();
    var chartTitle = $("#" + chartUpper + "TITLEECHARTS").val();
    $("#visionVisualizeChartId" + count).remove();
    var horizontalChartId = "visionVisualizeChart" + count;
    var horizontalChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + horizontalChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "550px", "!important");
    $("#" + horizontalChartId).css("width", "1000px", "!important");
    $("#" + horizontalChartId).css("height", "550px", "!important");
    if ($("#" + chartId).parent().parent().hasClass("homeChartWrapDiv")) {
        $("#" + chartId).parent().parent().attr("class", "col-md-6 col-sm-6 col-lg-12 homeChartWrapDiv treeMapMainDiv");
    }
    $("#" + horizontalChartHomeId).addClass("visionVisualChartBoxClass");
    var dom = document.getElementById(chartId);
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var data = result['data'];
    var yAxisArr = result['yAxisData'];
    var optionObjectEcharts = result['layout'];
    var seriesObjectEcharts = result['dataPropObject'];
    var tableName = result['tableName'];
    if (chartTitle === undefined || chartTitle === '' || chartTitle === null) {
        chartTitle = optionObjectEcharts['text'];
    }

    var seriesArr = [];
    for (var key in data) {
        var seriesObj = {};
        seriesObj['name'] = key;
        seriesObj['type'] = 'bar';
        seriesObj['stack'] = 'total';
        var labelObj = {'show': true};
        var emphasis = {'focus': 'series'};
        seriesObj['label'] = labelObj;
        seriesObj['emphasis'] = emphasis;
        seriesObj['data'] = data[key];
        seriesArr.push(seriesObj);
    }

    var option = {

        tooltip: {
            show: true,
            formatter: function (info) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];
                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }
                return ['<div class="tooltip-title">' +
                            echarts.format.encodeHTML(treePath.join('/')) +
                            '</div>',
                    formatUtil.addCommas(value)
                ].join('');
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: yAxisArr
        },
        series: seriesArr,
        title: {
            text: chartTitle,
            left: "center",
            padding: [10, 0],
            textStyle: {
                fontSize: 14,
                fontWeight: "normal"
            }
        }

    };
    if (!(saveType != null && saveType != '' && saveType != undefined)) {
        getToolBox(chartId, chartType, tableName);
    }


    var tooltipObject = optionObjectEcharts['tooltip'];
    if (tooltipObject != null && !jQuery.isEmptyObject(tooltipObject)) {
        $.each(tooltipObject, function (key, value) {
            if (key !== null && key === "formatter") {
                tooltipObject['formatter'] = eval(tooltipObject['formatter']);
            }
        });
        option['tooltip'] = tooltipObject;
    }
    var seriesObject = option['series'];
    var labelObject = seriesObjectEcharts['label'];
    if (labelObject != null && !jQuery.isEmptyObject(labelObject)) {
        $.each(labelObject, function (key, value) {
            if (key !== null && key === "formatter") {
                labelObject['formatter'] = eval(labelObject['formatter']);
            }
        });
        seriesObject['label'] = labelObject;
    }
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

}








function showMesgModelPopup(message) {
    var modalObj = {
        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
        body: labelObject[message] != null ? labelObject[message] : message,
    };
    var buttonArray = [
        {
            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
            click: function () {
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    $("#modalDailogDiv").remove();
    $("body").append("<div id='modalDailogDiv'></div>");
    createModal("modalDailogDiv", modalObj);
    $("#modalDailogDiv").addClass("modal-custom-class");
    $("#modalDailogDiv .modal-dialog").addClass("modal-xs");
}



function resetHeaderFilters() {
    showLoader();
    var dashBoardDropVal = $("#OptionDropdownData").val();
    $('#visionDashBoardHomeFilterId div').find('div.FilterColumnIdClass').each(function (event) {
        var id = $(this).attr('id');
        $("#" + id).jqxDropDownList('uncheckAll');
    });
    var dashboardName = $("#DxpdashbordoptionListId").val();
    if (!(dashboardName != null && dashboardName != undefined && dashboardName != "")) {
        dashboardName = dashBoardDropVal;
    }
    getVisualizationchart(dashboardName);
}


function showAutoSuggChartsSaveDelPopup(img, chartType, tableName, columnName, cardType) {
    var responseHtml = '<p class=\"modalPopUpMsgText\">Do you want to save or delete Auto Suggested chart(s)?</p>';
    var buttonArray = [
        {
            text: 'Save',
            click: function () {
                saveHomePageAutoSuggestionsCharts();
                getChartDiv(img, chartType, tableName, columnName, cardType);
            },
            isCloseButton: true
        },
        {
            text: 'Delete',
            click: function () {
                $("#visionVisualizationDataChartViewFilterId").remove();
                deleteHomePageAutoSuggestionsCharts();
                getChartDiv(img, chartType, tableName, columnName, cardType);
            },
            isCloseButton: true
        }
    ];
    showPopUpWithButtonFunctionCall(responseHtml, buttonArray);
}




function showAnimatedBubbleSequnce() {
    $('.nonLoadedBubble').map(function (i) {
        let $elm = $(this);
        let interval = i * 500;
        setTimeout(function () {
            $elm.removeClass("nonLoadedBubble");
        }, interval)
    })
}



function showIntelliSenseAutoSuggestions1(divId) {
    var div = "<div id='" + divId + "' class='visionChartsAutoSuggestionUserClass'></div>";
    $("#dialog1").html(div);
    $("#dialog1").dialog({resizable: false,
        title: (labelObject['Co-pilot Mode'] != null ? labelObject['Co-pilot Mode'] : 'Co-pilot Mode'),
        modal: true,
        width: 1200,
        height: 600,
        fluid: true,
        buttons: [],
        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
            $(".ui-dialog").addClass("bicolumnPopUp");
            showBackStartMessage();
            attachRemovalAction();
            showAnimatedBubbleSequnce();
        },
        beforeClose: function (event, ui) {
            $("#visionChartsAutoSuggestionUserId").empty();
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

function showBackStartMessage() {
    var userName = $("#rsUserName").val();
    userName = userName.replace("_", " ");
    var user_name = "";
    userName = userName.split(' ');
    for (var chr = 0; chr < userName.length; chr++) {
        user_name += userName[chr].substring(0, 1).toUpperCase() + userName[chr].substring(1, userName[chr].length).toLowerCase() + ' '
    }
    var msgText = "<div id='intellisenseViewStartMsgId' class='convai-message nonLoadedBubble'><div class='convai-left-message' ><span>Hi " + user_name + "</span></div></div>"
            + "<div class='convai-message nonLoadedBubble'><div class='convai-left-message' ><span>Do you want to visualize your data?</span></div></div>"
            + "<div class='convai-message'><button class='convai-left-message-button nonLoadedBubble' onclick=\"showIntelliSenseMessages('Yes')\" id='intelliSenseYes'>Yes</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"showIntelliSenseMessages('No')\" id='intelliSenseNo'>No</button></div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    attachRemovalAction();
    showAnimatedBubbleSequnce();
}

function showIntelliSenseMessages(Msg) {
    var msgText = "";
    attachRemovalAction();
    if (Msg != null && Msg != '' && Msg != undefined && Msg == "Yes") {
        msgText = "<div id='intellisenseViewVisualizeMsgId' class='convai-message nonLoadedBubble'><div class='convai-right-message'><span>" + Msg + "</span>"
                + "</div></div>"
                + "<div class='intelliSenseViewGoBackClass' onclick=\"goToIntellisensemethod('intellisenseViewStartMsgId','showBackStartMessage')\">"
                + "<i class='fa fa-undo' aria-hidden='true' title='go back'></i>"
                + "</div>";
        $("#visionChartsAutoSuggestionUserId").append(msgText);
        showIntelliSenseVisualizedata();
    } else if (Msg != null && Msg != '' && Msg != undefined && Msg == "No") {
        msgText = "<div id='intellisenseViewVisualizeMsgId' class='convai-right-message nonLoadedBubble'><span class=\"existingList\">" + Msg + "</span>"
                + "</div>"
                + "<div class='intelliSenseViewGoBackClass' onclick=\"goToIntellisensemethod('intellisenseViewStartMsgId','showBackStartMessage')\">"
                + "<i class='fa fa-undo' aria-hidden='true' title='go back'></i>"
                + "</div>";
        $("#visionChartsAutoSuggestionUserId").append(msgText);
    }
    showAnimatedBubbleSequnce();
}

function showIntelliSenseVisualizedata() {
    var msgText = "<div class='convai-message nonLoadedBubble' id='intellisenseViewVisualizeDataId'><div class='convai-left-message' ><span>Do you want to create visualization with new data/existing data?</span></div></div>"
            + "<div class='convai-message'><button class='convai-left-message-button nonLoadedBubble' onclick='getNewData()'>New Data</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=getExistingData()>Existing Data</button></div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    attachRemovalAction();
    showAnimatedBubbleSequnce();
}

function getNewData() {
    var msgText = "<div id='userConversAINewDataDivId' class='userConversAINewDataDivClass'>"
            + "<div class='convai-message'><div class='convai-right-message'><span class='nonLoadedBubble'>New Data</span>"
            + "</div></div>"
            + "<div class='intelliSenseViewGoBackClass' onclick=\"goToIntellisensemethod('intellisenseViewVisualizeDataId','showIntelliSenseVisualizedata')\">"
            + "<i class='fa fa-undo' aria-hidden='true' title='go back'></i>"
            + "</div>"
            + "</div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    getIntellisenseViewChartTypes();
    attachRemovalAction();
    showAnimatedBubbleSequnce();
}

function getIntellisenseViewChartTypes() {
    var msgText = "<div id='intellisenseViewChartTypesId' class='convai-message nonLoadedBubble'><div class='convai-left-message'><span>Please select File to import the data</span></div></div>"
            + "<div class='convai-message nonLoadedBubble'><button class='convai-left-message-button nonLoadedBubble' onclick=\"getNewDataType('XLS','Excel')\" id='intelliSenseYes'>XLS</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"getNewDataType('XLSX','Excel')\" id='intelliSenseYes'>XLSX</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"getNewDataType('CSV','csv_search')\" id='intelliSenseYes'>CSV</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"getNewDataType('TEXT','DM_TEXT')\" id='intelliSenseYes'>TEXT</button></div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    attachRemovalAction();
    showAnimatedBubbleSequnce();
}

function getNewDataType(fileType, fileImg, replyId) {
    var randomNumber = generateRandomNumber();
    var goBackIconId = "intelliSenseViewGoBackId" + randomNumber;
    var previousId = 4;
    var msgText = "<div id='" + goBackIconId + "' class='convai-message' style='height:185px' ><div id='parentFileTablesId' class='convai-right-message parentFileTablesClass replyIntelisenseView'>"
            + "<div id=\"visualizationDMFileId\" class=\"visualizationDMFileDivClass replyIntelisenseView\">"
            + "<div id=\"visionShowFileUploadMsg\">Import data</div>"
            + "<input type=\"file\" name=\"importVisualizationConvAIDMFile\" id=\"importVisualizationConvAIDMFile\" class=\"visionVisualizationDMFilesInput\" style=\"display: none;\">"
            + "<div class=\"visionVisualizationDMFileUploadclass text-right\" id=\"visionVisualizationDmFileUpload\">"
            + "<input type=\"hidden\" id=\"selectedTreeTypeName\" value=" + fileType + ">"
            + "<input type=\"hidden\" id=\"selectedTreeType\" value=\"FILE\">"
            + "<div id=\"imageFileDiv\" class=\"imageFileDivClass\"><img src=\"images/" + fileImg + ".png\" id=\"excelimageId\" class=\"excelimageClass\"/></div>"
            + "<div class=\"VisionVisualizationUploadFileContent\"><h5>Import Data From " + fileType + "</h5></div>"
            + "</div>"
            + "</div>"
            + "</div>"
            + "</div>"
            + "<div class='intelliSenseViewGoBackClass'"
            + " onclick=\"goToIntellisensemethod('" + goBackIconId + "','" + previousId + "')\">"
            + "<i class='fa fa-undo' aria-hidden='true' title='go back'></i>"
            + "</div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    getNewDataConvAIFileInitialization(fileType, replyId)

}

function getNewDataConvAIFileInitialization(fileType, replyId) {
    $("#visionVisualizationDmFileUpload").click(function () {
        var filetype = $('#selectedTreeTypeName').val();
        console.log("iam in clickable ");
        //            dmTreeFileUpload("N", filetype);

        $("#importVisualizationConvAIDMFile").click();
        //            $("#importVisualizationDMFile").trigger("change");
    });
    $("#importVisualizationConvAIDMFile").on('change', function (event) {

        var filetype = $('#selectedTreeTypeName').val();
        console.log("iam in files change ");
        //            dmTreeFileUpload("N", filetype);
        if (filetype == 'XLSX' || filetype == 'XLS') {
            var files = event.target.files; // FileList object
            parseIntelliSenseSmartBIExcel(files[0], filetype, replyId);
        } else {
            var files = event.target.files;
            //                dmTreeFileUpload("N", filetype);
            uploadSelectedFile(files[0], filetype, replyId);
        }
        event.target.value = '';
    });
}


function getExistingData() {
    var msgText = "<div id='userConversAIExistDataDivId' class='userConversAIExistDataDivClass'>"
            + "<div class='convai-right-message nonLoadedBubble'><span>Existing Data</span>"
            + "</div>"
            + "<div class='intelliSenseViewGoBackClass' onclick=\"goToIntellisensemethod('intellisenseViewVisualizeDataId','showIntelliSenseVisualizedata')\">"
            + "<i class='fa fa-undo' aria-hidden='true' title='go back'></i>"
            + "</div>"
            + "</div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    showAnimatedBubbleSequnce();
    getExistingTablesData();
}
function getExistingTablesData() {
    var userName = $("#rsUserName").val();
    $.ajax({
        type: "POST",
        url: "getUserTableNames",
        cache: false,
        data: {
            userName: userName
        },
        success: function (response) {
            //TODO: Need to add Loader
            if (response != null && !jQuery.isEmptyObject(response)) {
                var tableDiv = response['tableDiv'];
                var msgText = "<div id='userIntellisenseViewTablesDivId' class='userIntellisenseViewTablesDivClass'>"
                        + tableDiv
                        + "</div>";
                $("#visionChartsAutoSuggestionUserId").append(msgText);
                showAnimatedBubbleSequnce();
                $('#data-search').on('keyup', function () {
                    var searchVal = $(this).val();
                    var filterItems = $('[data-intelliSenseViewTablefilter-item]');
                    if (searchVal != '') {
                        filterItems.addClass('intelliSenseViewTableshidden');
                        $('[data-filter-name*="' + searchVal.toUpperCase() + '"]').removeClass('intelliSenseViewTableshidden');
                    } else {
                        filterItems.removeClass('intelliSenseViewTableshidden');
                    }
                });
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function parseIntelliSenseSmartBIExcel(file, filetype, replyId) {
    var sheets = [];
    var fileName = file['name'];
    var fileDataType = file['type'];
    var reader = new FileReader();
    if (filetype != null && filetype != '' && filetype != undefined) {
        filetype = filetype.toLowerCase();
    }
    reader.onload = function (e) {

        var mergeFlag = false;
        var data = e.target.result;
        var workbook;
        if (filetype == 'xls') {
            workbook = XLS.read(data, {
                type: 'binary',
                cellDates: true
            });
        } else if (filetype == 'xlsx') {
            workbook = XLSX.read(data, {type: 'binary', cellDates: true, cellNF: true, cellText: false});
            var financeSheets = workbook['Sheets'];
            var mergeFileName = fileName.replace(".xlsx", '');
            $.each(financeSheets, function (key, value) {
                var mergeFinanceSheets = financeSheets[key];
                var merges = mergeFinanceSheets['!merges'];
                if (merges != null && !jQuery.isEmptyObject(merges)) {
                    mergeFlag = true;
                }
            });
        }
        var headersObj = {};
        workbook.SheetNames.forEach(function (sheetName) {

            sheets.push(sheetName);
        });
        if (mergeFlag) {
            uploadSelectedFinanceFile(file, filetype, fileName)
        } else {
            getIntelliSenseXlsxFileSheet(workbook, file, filetype, fileName, fileDataType, sheets, replyId);
        }


    }
    reader.onerror = function (ex) {
        console.log(ex);
    };
    reader.readAsBinaryString(file);
}


function getIntelliSenseXlsxFileSheet(workbook, file, filetype, fileName, fileDataType, sheets, replyId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    function extractHeader(ws) {
        const header = []
        const columnCount = XLSX.utils.decode_range(ws['!ref']).e.c + 1;
        for (let i = 0; i < columnCount; ++i) {
            var headerObj = ws[`${XLSX.utils.encode_col(i)}1`];
            if (headerObj != null) {
                header[i] = headerObj.v;
            }
        }
        return header
    }
    var JSONData = {}
    var headersObj = {}
    var sheetsArray = []
    workbook.SheetNames.forEach(function (sheetName) {

        var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {raw: true})
        JSONData[sheetName] = XL_row_object;
        //            document.getElementById("jsonObject").innerHTML = json_object;
        sheetsArray.push(sheetName);
        const sheet = workbook.Sheets[sheetName]
        const headers = extractHeader(sheet);
        headersObj[sheetName] = headers;
    });
    uploadIntelliSenseSmartBISelectedFileXlsx(JSONData, filetype, fileName, headersObj, sheetsArray, replyId);
    $("#visionETLXlsxFileIdAll").click(function () {
        $(".visionETLXlsxFileClass").prop('checked', $(this).prop('checked'));
    });
    var spanText = "<span class='VisionETLXlsxFileSpan'>1." + fileName + "</span>";
    $("#VisionETLXlsxFileNameId").html(spanText);
}
function uploadIntelliSenseSmartBISelectedFileXlsx(jsonData, fileType, fileName, headersObj, sheets, replyId) {
    showLoader();
    var url;
    const myArray = fileName.split(".");
    let tableName = myArray[0];
    tableName = tableName.replace(" ", "_");
    $.ajax({
        type: "post",
        traditional: true,
        url: 'importIntelliSenseTreeChartsDMFileXlsx',
        cache: false,
        data: {
            jsonData: JSON.stringify(jsonData),
            selectedFiletype: fileType,
            fileName: fileName,
            headersObj: JSON.stringify(headersObj),
            sheets: JSON.stringify(sheets),
            tableName: tableName.toUpperCase()
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {

                var messgae = response['message'];
                if (messgae != null && messgae != '' && messgae != undefined && messgae.indexOf("Table is already") > -1) {
                    var tableName = response['tableName'];
                    var fileName = response['fileName'];
                    var filePath = response['filePath'];
                    showConversationAIDialog(tableName, fileName, filePath, replyId);
                } else {
                    var tableName = response['tableName'];
                    msgText = "<p class='text-right'><span id='intelliSenseTableId' class=\"existingList convai-right-message nonLoadedBubble\">" + tableName + "</span><span> is Created</span></p>";
                    $("#visionChartsAutoSuggestionUserId").append(msgText);
                    showIntellisSenseViewTableOptions();
                    attachRemovalAction();
                    showAnimatedBubbleSequnce();
                    scrollAreaToBottom();
                    showNextConversationAiMessage(replyId);
                }


            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function showConversationAIDialog(tableName, fileName, filePath, replyId) {
    var messgae = "<div class='conversationalAIDivClass'>"
            + "<span>Table Name is already existed.Please choose</span>"
            //+ "<input type='text' id='conversationalAITableId' value='" + tableName + "'/>"
            + "</div>";
    $("#dialog").html(messgae);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        width: 350,
        height: 200,
        fluid: true,
        buttons: [{
                text: (labelObject['Replace Table'] != null ? labelObject['Replace Table'] : 'Replace Table'),
                click: function () {
                    $("#dialog").html("");
                    $("#dialog").dialog("close");
                    $("#dialog").dialog("destroy");
                    showLoader();
                    checkExistingFileTableName(tableName, fileName, filePath, tableName, replyId, "Y");
                }

            }, {
                text: (labelObject['Create New Table'] != null ? labelObject['Create New Table'] : 'Create New Table'),
                click: function () {
                    $("#dialog").html("");
                    $("#dialog").dialog("close");
                    $("#dialog").dialog("destroy");
                    createNewFileinDb(tableName, fileName, filePath, replyId)
                }

            }],
        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
            $(".ui-dialog").addClass("bicolumnPopUp");
        },
        beforeClose: function (event, ui) {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

function createNewFileinDb(tableName, fileName, filePath, replyId) {
    var messgae = "<div class='conversationalAIDivClass'>"
            + "<span>Please give new Table Name</span>"
            + "<input type='text' id='conversationalAITableId' value=''/>"
            + "<div class='conversationalAITableErrorDivClass'></div>"
            + "</div>";
    $("#dialog").html(messgae);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        width: 350,
        height: 200,
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    var newTableName = $("#conversationalAITableId").val();
                    if (!(newTableName != null && newTableName != '' && newTableName != undefined))
                    {
                        $(".conversationalAITableErrorDivClass").html("please give Table name");
                    } else {
                        $(".conversationalAITableErrorDivClass").html("");
                        $("#dialog").html("");
                        $("#dialog").dialog("close");
                        $("#dialog").dialog("destroy");
                        showLoader();
                        checkExistingFileTableName(tableName, fileName, filePath, newTableName, replyId);
                    }
                }

            }, {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                click: function () {
                    $("#dialog").html("");
                    $("#dialog").dialog("close");
                    $("#dialog").dialog("destroy");
                }

            }],
        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
            $(".ui-dialog").addClass("bicolumnPopUp");
        },
        beforeClose: function (event, ui) {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

function checkExistingFileTableName(tableName, fileName, filePath, newTableName, replyId, deleteFlag) {
    newTableName = newTableName.replace(" ", "_");
    $.ajax({
        type: "post",
        traditional: true,
        url: 'createIntelliSenseTableasFile',
        cache: false,
        data: {
            fileName: fileName,
            filePath: filePath,
            tableName: newTableName,
            deleteFlag: deleteFlag
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var messgae = response['message'];
                var table_Name = response['tableName'];
                if (messgae != null && messgae != '' && messgae != undefined && messgae.indexOf("Table is already") > -1) {
                    var fileName = response['fileName'];
                    var filePath = response['filePath'];
                    showConversationAIDialog(table_Name, fileName, filePath, replyId);
                } else {
                    if ($("#intelliSenseTableId").length > 0) {
                        $("#intelliSenseTableId").text(table_Name);
                    } else {
                        msgText = "<div class='text-right'><span id='intelliSenseTableId' class=\"existingList convai-right-message\" class='intelliSenseTableSpanClass'>" + table_Name + "</span><span> is Created</span></div>";
                        $("#visionChartsAutoSuggestionUserId").append(msgText);
                    }
                    showNextConversationAiMessage(replyId);
                }
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}
function getConversationalAISelectedTableName(tableName) {
    if ($("#intelliSenseTableId").length > 0) {
        $("#intelliSenseTableId").text(tableName);
    } else {
        var msgText = "<div id='intellisenseViewTableId' class='text-right convai-right-message'><span id='intelliSenseTableId'>" + tableName + "</span>"
                + "</div>"
                + "<div class='intelliSenseViewGoBackClass' onclick=\"goToIntellisensemethod('userIntellisenseViewTablesDivId','getExistingTablesData')\">"
                + "<i class='fa fa-undo' aria-hidden='true' title='go back'></i>"
                + "</div>";
        $("#visionChartsAutoSuggestionUserId").append(msgText);
    }

    $(".userTableNamesDivClass .search ,.userTableNamesDivClass .userIntellisenseViewTableNamesDivClass").remove();
    showIntellisSenseViewTableOptions()
    showAnimatedBubbleSequnce();
}

function showIntellisSenseViewTableOptions() {
    var tableName = $("#intelliSenseTableId").text();
    var msgText = "<div id='intelliSenseViewTableOptionsId' class='convai-message nonLoadedBubble'><p class='text-right convai-left-message'><span class='intelliSenseTableSpanClass'>Do you want ViewData/View columns/create chart?</span></p></div>"
            + "<div class='convai-message'><button class='convai-left-message-button nonLoadedBubble' onclick=\"getIntelliSenseViewTableData('" + tableName + "')\" id='intelliSenseYes'>View Data</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"getIntelliSenseViewTableColumns('" + tableName + "')\" id='intelliSenseNo'>View Columns</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"showIntellisenseViewChartTypes()\" id='intelliSenseNo'>Create Chart</button></div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    attachRemovalAction();
    showAnimatedBubbleSequnce();
}

function attachRemovalAction() {
    $("button.convai-left-message-button").click(function () {
        $(this).parent().find("button.convai-left-message-button").each(function () {
            $(this).remove();
        })
    })

}

function getIntelliSenseViewTableColumns(tableName) {
    var msgText = "<p class='text-right convai-left-message'><span class='intelliSenseViewCloumnsClass'>View columns</span></p>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    $.ajax({
        type: "post",
        traditional: true,
        url: 'getIntelliSenseTableColumns',
        cache: false,
        data: {
            tableName: tableName
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var columnDiv = response['columnDiv'];
                if ($.trim($("#intellisenseViewUserColumnNamesDivId").html()).length > 0) {
                    $("#intellisenseViewUserColumnNamesDivId").html(columnDiv);
                } else {
                    var userColumnDiv = "<div class='convai-message'><div id='intellisenseViewUserColumnNamesDivId' class='intellisenseViewUserColumnNamesDivClass'>"
                            + columnDiv
                            + "</div>"
                            + "</div>"
                    $("#visionChartsAutoSuggestionUserId").append(userColumnDiv);
                }
                setTimeout(function () {

                    var msgText = "<div class='convai-message nonLoadedBubble'><p class='text-right convai-left-message'><span class='intelliSenseViewCreateChartClass'>Do you want to Create Chart?</span></p></div>"
                            + "<div class='convai-message'><button class='convai-left-message-button nonLoadedBubble' onclick=\"getIntelliSenseViewCreateChart('Yes')\" id='intelliSenseYes'>Yes</button>"
                            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"getIntelliSenseViewCreateChart('No')\" id='intelliSenseNo'>No</button></div>";
                    $("#visionChartsAutoSuggestionUserId").append(msgText);
                    attachRemovalAction();
                    showAnimatedBubbleSequnce();
                }, 2000);
                attachRemovalAction();
                showAnimatedBubbleSequnce();
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}



function scrollAreaToBottom(divHeight) {
    var element = document.querySelector('#dialog1 .visionChartsAutoSuggestionUserClass').closest("#dialog1");
    if (divHeight != null && divHeight != '' && divHeight != undefined) {
        var scrollTop = element.scrollHeight - divHeight;
        element.scrollTo(0, scrollTop);
        $("#userMergeTableColumnsDivId").css("height", "100%", "!important");
    } else {
        element.scrollTo(0, element.scrollHeight);
        $(".visionChartsAutoSuggestionUserClass").animate({scrollTop: $(".visionChartsAutoSuggestionUserClass").prop("scrollHeight")}, 500);
    }

}

function getIntelliSenseViewCreateChart(msg) {
    if (msg != null && msg != '' && msg != undefined && msg == 'Yes')
    {
        var msgText = "<p class='text-right convai-right-message nonLoadedBubble'><span class='intelliSenseMessageSpanClass'>" + msg + "</span></p>";
        $("#visionChartsAutoSuggestionUserId").append(msgText);
        showIntellisenseViewChartTypes('msg');
    }

}

function showIntellisenseViewChartTypes(msg) {
    if (!(msg != null && msg != '' && msg != undefined)) {
        var msgText = "<div id='intellisenseViewCreatechartid' class='text-right convai-right-message nonLoadedBubble'><span class='intelliSenseCreateChartClass'>Create chart</span>"
                + "</div>"
                + "<div class='intelliSenseViewGoBackClass' onclick=\"goToIntellisensemethod('intelliSenseViewTableOptionsId','showIntellisSenseViewTableOptions')\">"
                + "<i class='fa fa-undo' aria-hidden='true' title='go back'></i>"
                + "</div>";
        $("#visionChartsAutoSuggestionUserId").append(msgText);
        showAnimatedBubbleSequnce();
    }
    showIntellisenseViewCreateChartTypes();
}



function showIntellisenseViewCreateChartTypes() {
    $.ajax({
        type: "post",
        traditional: true,
        url: 'getIntelliSenseChartTypes',
        cache: false,
        data: {

        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var chartDiv = response['chartDiv'];
                if ($.trim($("#intelliSenseChartDivId").html()).length > 0) {
                    var userAppendDiv = "<p class='convai-left-message nonLoadedBubble' >Select chart type</p>"
                            + chartDiv;
                    $("#intelliSenseChartDivId").html(userAppendDiv);
                } else {
                    var appendDiv = "<div id='intelliSenseChartDivId' class='intelliSenseChartClass text-left'>"
                            + "<p class='convai-left-message nonLoadedBubble' >Select chart type</p>"
                            + chartDiv
                            + "</div>";
                    $("#visionChartsAutoSuggestionUserId").append(appendDiv);
                }
                showAnimatedBubbleSequnce();
                scrollAreaToBottom();
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function showIntelliSenseViewChartDiv(chartImage, chartType, replyId) {
    $("#intelliSenseChartTypeId").remove();
    $("#intelliSenseChartImageId").remove();
    var chartDiv = "<div id='intellisenseViewchartid' class=\"visualIconDivImg text-right replyIntelisenseView convai-right-message p-3 nonLoadedBubble\">"
            + "<img src=\"images/" + chartImage + "\" class=\"visualDarkMode\">"
            + "<input type='hidden' id='intelliSenseChartTypeId' value='" + chartType + "'/>"
            + "<input type='hidden' id='intelliSenseChartImageId' value='" + chartImage + "'/>"
            + "</div>"
            + "<div class=\"intelliSenseViewGoBackClass\" onclick=\"goToIntellisensemethod('intellisenseViewchartid','9')\"><i class=\"fa fa-undo\" aria-hidden=\"true\" title=\"go back\"></i></div>";
    $("#visionChartsAutoSuggestionUserId").append(chartDiv);
    $(".iconsRow").remove();
    showNextConversationAiMessage(replyId);
    showAnimatedBubbleSequnce();
    getIntellisenseViewExampleChartDesign(chartType);
}


function showNextIntelliSenseDiv(divId, columnsCount, chartType) {
    var childId = $("#" + divId + " div:first-child").attr('id');
    $("#" + childId).show();
    $("#" + childId).after("<button id='intelliSenseViewNextButtonId' class='convai-left-message-button nonLoadedBubble' onclick=showNextIntelliSenseViewDivId('" + childId + "'," + columnsCount + ",'" + chartType + "')>Next</button>");
    showAnimatedBubbleSequnce();
    scrollAreaToBottom();
}
function showNextIntelliSenseViewDivId(childId, columnsCount, chartType) {
    $("#intelliSenseViewNextButtonId").remove();
    var subChildId = $("#" + childId).next().attr("id");
    if (subChildId != null && subChildId != '' && subChildId != undefined)
    {
        $("#" + subChildId).before("<div class='convai-left-message'>Select Value columns</div>");
        $("#" + subChildId).show();
        var superChildId = $("#" + subChildId).next().attr("id")
        if (superChildId != null && superChildId != '' && superChildId != undefined
                && $.trim($("#" + superChildId).html()).length > 0)
        {
            $("#" + subChildId).after("<button id='intelliSenseViewNextButtonId' class='convai-left-message-button'  onclick=showNextIntelliSenseViewDivId('" + subChildId + "')>Next</button>");
        } else {
            showIntelliSenseViewChartConfig(columnsCount, chartType);
        }
    }

    showAnimatedBubbleSequnce();
    scrollAreaToBottom();
}

function applyIntellisenseViewChartColumns(count, noChangeFlag) {
    var error_count = 0;
    $("#intelliSenseViewValuesColumnsId" + count + " div").each(function ()
    {
        var divId = $(this).attr('id');
        if (divId != null && divId != '' && divId != undefined)
        {
            var inputId = $("#" + divId).find("input").attr('id');
            if (inputId != null && inputId != '' && inputId != undefined)
            {
                var aggregateColumn = $("#" + inputId).attr("aggregateColumn");
                if (!(aggregateColumn != null && aggregateColumn != '' && aggregateColumn != undefined))
                {
                    error_count++;
                }
            }
        }
    });
    if (error_count > 0)
    {
        $("#intelliSenseViewValuesColumnsAppendId" + count).remove();
        $("#intelliSenseViewValuesColumnsId" + count).append("<div id='intelliSenseViewValuesColumnsAppendId" + count + "' class='convai-left-message'>Please apply the aggregate functions to Value columns</div>");
        $("#intelliSenseViewValuesColumnsAppendId" + count).append("<span class='intellisenseviewAggregateImagespanClass'><img src='images/arrowAggregateImg.png'/></span>");
    } else {
        getIntelliSenseViewChart(count, noChangeFlag);
    }
}

function showNextIntelliSenseViewConfigId(divId, count)
{
    var li = $("#" + divId).find('ul li:first');
    $(li).addClass("active");
    var text = $("#" + divId).find('ul li:first').find('div > p').text();
    $("#" + divId).find('ul li:first').before("<div class='intelliSenseViewliClass convai-left-message'>please provide " + text + "</div>")
    $("#" + divId).find('ul li:first').show();
    $("#" + divId).find('ul li:first').after("<button id='intelliSenseViewNextButtonId' class='convai-left-message-button'  onclick=showNextIntelliSenseViewConfigLiId('" + divId + "'," + count + ")>Next</button>");
    $("#" + divId).find('ul li:first').after("<button id='intelliSenseViewSkipAllButtonId' class='convai-left-message-button'  onclick=showNextIntelliSenseViewSkipAll('" + divId + "'," + count + ")>Skip All</button>");
    showAnimatedBubbleSequnce();
    scrollAreaToBottom();
}

function showNextIntelliSenseViewSkipAll(divId, count)
{
    $("#intelliSenseViewSkipAllButtonId").remove();
    $("#intelliSenseViewNextButtonId").remove();
    setTimeout(function () {
        var msgText = "<div class='convai-message nonLoadedBubble' id='intellisenseViewVisualizeDataId'><div class='convai-left-message' ><span>Do you want to apply filters to above chart?</span></div></div>"
                + "<div class='convai-message'><button class='convai-left-message-button nonLoadedBubble' onclick='showIntellisenseViewFilters(" + count + ")'>Yes</button>"
                + "<button class='convai-left-message-button nonLoadedBubble' onclick=showIntellisenseViewNoFilterSaveChart('14')>No</button></div>";
        $("#visionChartsAutoSuggestionUserId").append(msgText);
        attachRemovalAction();
        showAnimatedBubbleSequnce();
        scrollAreaToBottom();
    }, 3000);
}
function showNextIntelliSenseViewConfigLiId(divId, count)
{
    $("#intelliSenseViewNextButtonId").remove();
    $("#intelliSenseViewSkipAllButtonId").remove();
    var li = $("#" + divId).find('ul li.active').next('li');
    $("#" + divId).find('ul li.active').removeClass("active");
    var text = $(li).find('div > p').text();
    $(li).before("<div class='intelliSenseViewliClass convai-left-message'>please provide " + text + "</div>")
    $(li).show();
    $(li).addClass("active");
    var nextli = $("#" + divId).find('ul li.active').next('li');
    if (nextli.length > 0)
    {
        $(li).after("<button id='intelliSenseViewNextButtonId' class='convai-left-message-button'  onclick=showNextIntelliSenseViewConfigLiId('" + divId + "'," + count + ")>Next</button>");
    } else {
        setTimeout(function () {
            var msgText = "<div class='convai-message nonLoadedBubble' id='intellisenseViewVisualizeDataId'><div class='convai-left-message' ><span>Do you want to apply filters to above chart?</span></div></div>"
                    + "<div class='convai-message'><button class='convai-left-message-button nonLoadedBubble' onclick='showIntellisenseViewFilters(" + count + ")'>Yes</button>"
                    + "<button class='convai-left-message-button nonLoadedBubble' onclick=showIntellisenseViewNoFilterSaveChart('14')>No</button></div>";
            $("#visionChartsAutoSuggestionUserId").append(msgText);
            attachRemovalAction();
            showAnimatedBubbleSequnce();
            scrollAreaToBottom();
        }, 3000);
    }
    showAnimatedBubbleSequnce();
    scrollAreaToBottom();
}

function showIntellisenseViewNoFilterSaveChart(replyId)
{
    var msgText = "<div class='convai-message nonLoadedBubble' id='intellisenseViewVisualizeDataId'><div class='convai-right-message' ><span>No</span></div></div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    attachRemovalAction();
    showAnimatedBubbleSequnce();
    showNextConversationAiMessage(replyId);
}

function showIntellisenseViewFilters(count)
{
    var msgText = "<div class='convai-message nonLoadedBubble' id='intellisenseViewVisualizeDataId'><div class='convai-right-message' ><span>Yes</span></div></div>"
            + "<div class='intelliSenseViewGoBackClass'" + "  onclick=\"goToFilteremethod('intellisenseViewVisualizeDataId','intelliSenseChartConfigDivId" + count + "','" + count + "')\">"
            + "<i class='fa fa-undo' aria-hidden='true' title='go back'></i>"
            + "</div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    attachRemovalAction();
    showAnimatedBubbleSequnce();
    getIntellisenseViewFilters(count);
}

function goToFilteremethod(id, filterId, count)
{
    $("#" + id).remove();
    $("#" + id).next().remove();
    $("#intelliSenseChartFiltersDivId" + count + "").remove();
    if (filterId != null && filterId != '' && filterId != undefined) {
        $("#intellisenseViewVisualizeDataId").remove();
        showNextIntelliSenseViewConfigLiId(filterId, count);
    }

}

function getIntellisenseViewFilters(count)
{
    var tableName = $("#intelliSenseTableId").text();
    $.ajax({
        type: "post",
        traditional: true,
        url: 'getIntelliSenseViewFilters',
        cache: false,
        data: {
            tableName: tableName,
            count: count,
            columnsCount: 0
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var chartDiv = response['chartColumnsDiv'];
                if ($.trim($("#intelliSenseChartFiltersDivId" + count).html()).length > 0) {
                    var userAppendDiv = "<p class='convai-left-message nonLoadedBubble' >Select Filter columns</p>"
                            + "<input type='hidden' id='intelliSenseChartFiltersDivId" + count + "' value='0'/>"
                            + "<img src='images/Plus_White_Icon.svg' title='Add Columns' onclick=\"getIntelliSenseViewAddFilterColumns(this," + count + ",'intelliSenseChartFiltersDivId" + count + "')\" class='intellisenseviewaddFiltervaluecolumns' style='display: inline;'>"
                            + "<div id='intellisenseViewChartFiltersColumnsDivId" + count + "' class='intellisenseViewchartFiltercolumnsclass'>"
                            + chartDiv
                            + "</div>";
                    $("#intelliSenseChartFiltersDivId" + count).html(userAppendDiv);
                } else {
                    var appendDiv = "<div id='intelliSenseChartFiltersDivId" + count + "' class='intelliSenseChartClass text-left'>"
                            + "<p class='convai-left-message nonLoadedBubble' >Select Filter columns</p>"
                            + "<input type='hidden' id='intelliSenseChartFiltersDivId" + count + "' value='0'/>"
                            + "<img src='images/Plus_White_Icon.svg' title='Add Columns' onclick=\"getIntelliSenseViewAddFilterColumns(this," + count + ",'intelliSenseChartFiltersDivId" + count + "')\" class='intellisenseviewaddFiltervaluecolumns' style='display: inline;'>"
                            + "<div id='intellisenseViewChartFiltersColumnsDivId" + count + "' class='intellisenseViewchartFiltercolumnsclass'>"
                            + chartDiv
                            + "</div>"
                            + "</div>";
                    $("#visionChartsAutoSuggestionUserId").append(appendDiv);
                }


                var timeOut = null;
                $('[id^="visionVisualizeChartFiltersFieldDivId"]').unbind('keyup').on('keyup', function (event) {
                    clearTimeout(timeOut);
                    timeOut = setTimeout(function () {
                        var count;
                        var targetId = event.currentTarget.id;
                        var parentId = $("#" + targetId).parent().parent().parent().attr("id");
                        if (parentId != null && parentId != '' && parentId != undefined)
                        {
                            count = parentId.replace("intellisenseViewChartFiltersColumnsDivId", "");
                        }
                        checkIntellisenseViewAxisColumnNull(count, "changeFlag");
                    }, 3000);
                });
                $('[id^="visionVisualizeChartFiltersFieldDivId"]').unbind('change').on('change', function (event) {
                    var count;
                    var targetId = event.currentTarget.id;
                    var parentId = $("#" + targetId).parent().parent().parent().attr("id");
                    if (parentId != null && parentId != '' && parentId != undefined)
                    {
                        count = parentId.replace("intellisenseViewChartFiltersColumnsDivId", "");
                    }
                    checkIntellisenseViewAxisColumnNull(count, "changeFlag");
                });
                $('[id^="visionVisualizeChartFiltersFieldDivId"]').on('checkChange', function (event) {
                    clearTimeout(timeOut);
                    timeOut = setTimeout(function () {
                        var count;
                        var targetId = event.currentTarget.id;
                        var parentId = $("#" + targetId).parent().parent().parent().attr("id");
                        if (parentId != null && parentId != '' && parentId != undefined)
                        {
                            count = parentId.replace("intellisenseViewChartFiltersColumnsDivId", "");
                        }
                        checkIntellisenseViewAxisColumnNull(count, "changeFlag");
                    }, 3000);
                });
                showAnimatedBubbleSequnce();
                scrollAreaToBottom();
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function getIntelliSenseViewAddFilterColumns($this, count, hiddenId)
{
    var columnCount = $("#" + hiddenId).val();
    columnCount++;
    var tableName = $("#intelliSenseTableId").text();
    $.ajax({
        type: "post",
        traditional: true,
        url: 'getIntelliSenseViewFilters',
        cache: false,
        data: {
            tableName: tableName,
            count: count,
            columnsCount: columnCount
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var chartDiv = response['chartColumnsDiv'];
                $("#intellisenseViewChartFiltersColumnsDivId" + count).append(chartDiv);
                showAnimatedBubbleSequnce();
                scrollAreaToBottom();
                $("#" + hiddenId).val(columnCount);
                var timeOut = null;
                $('[id^="visionVisualizeChartFiltersFieldDivId"]').unbind('keyup').on('keyup', function (event) {
                    clearTimeout(timeOut);
                    timeOut = setTimeout(function () {
                        var count;
                        var targetId = event.currentTarget.id;
                        var parentId = $("#" + targetId).parent().parent().parent().attr("id");
                        if (parentId != null && parentId != '' && parentId != undefined)
                        {
                            count = parentId.replace("intellisenseViewChartFiltersColumnsDivId", "");
                        }
                        checkIntellisenseViewAxisColumnNull(count, "changeFlag");
                    }, 3000);
                });
                $('[id^="visionVisualizeChartFiltersFieldDivId"]').unbind('change').on('change', function (event) {
                    var count;
                    var targetId = event.currentTarget.id;
                    var parentId = $("#" + targetId).parent().parent().parent().attr("id");
                    if (parentId != null && parentId != '' && parentId != undefined)
                    {
                        count = parentId.replace("intellisenseViewChartFiltersColumnsDivId", "");
                    }
                    checkIntellisenseViewAxisColumnNull(count, "changeFlag");
                });
                $('[id^="visionVisualizeChartFiltersFieldDivId"]').on('checkChange', function (event) {
                    clearTimeout(timeOut);
                    timeOut = setTimeout(function () {
                        var count;
                        var targetId = event.currentTarget.id;
                        var parentId = $("#" + targetId).parent().parent().parent().attr("id");
                        if (parentId != null && parentId != '' && parentId != undefined)
                        {
                            count = parentId.replace("intellisenseViewChartFiltersColumnsDivId", "");
                        }
                        checkIntellisenseViewAxisColumnNull(count, "changeFlag");
                    }, 3000);
                });
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function showIntellisenseViewMoreCharts(count)
{
    var msgText = "<div class='convai-message nonLoadedBubble' id='intellisenseViewVisualizeDataId'><div class='convai-left-message' ><span>Do you want to create more charts?</span></div></div>"
            + "<div class='convai-message'><button class='convai-left-message-button nonLoadedBubble' onclick='showIntellisenseViewChartsMore('Yes')'>Yes</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=showIntellisenseViewChartsMore('No')>No</button></div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    attachRemovalAction();
    showAnimatedBubbleSequnce();
}

function getIntelliSenseAxisColumn($this, chartCount, columnsCount) {
    var axisColumn = $("#userAxisColumnNamesDivId" + chartCount + columnsCount).val();
    var tableName = $("#intelliSenseTableId").text();
    if (axisColumn != null && axisColumn != '' && axisColumn != undefined) {
        $("#intellisenseViewAxisInputId" + chartCount + columnsCount).attr("value", tableName + "." + axisColumn);
        $("#intelliSenseViewAxisColumnsAppendId" + chartCount).remove();
        setTimeout(function ()
        {
            applyIntellisenseViewChartColumns(count);
        }, 3000);
    }
}

function getIntelliSenseValuesColumn($this, chartCount, columnsCount) {
    var valueColumn = $("#userValuesColumnNamesDivId" + chartCount + columnsCount).val();
    var tableName = $("#intelliSenseTableId").text();
    if (valueColumn != null && valueColumn != '' && valueColumn != undefined
            && tableName != null && tableName != '' && tableName != undefined) {
        $("#intellisenseViewValuesInputId" + chartCount + columnsCount).attr("value", tableName + "." + valueColumn);
        $("#intellisenseViewValuesInputId" + chartCount + columnsCount).attr("aggregateColumn", "");
        setTimeout(function ()
        {
            applyIntellisenseViewChartColumns(chartCount);
        }, 3000);
    }
}



function showIntelliSenseViewChartConfig(columnsCount, chartType) {
    var tableName = $("#intelliSenseTableId").text();
    $.ajax({
        type: "post",
        traditional: true,
        url: 'getIntelliSenseChartConfig',
        cache: false,
        data: {
            tableName: tableName,
            columnsCount: columnsCount,
            chartType: chartType
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var configOptions = response['configOptions'];
                $("#intelliSenseChartConfigDivId" + columnsCount).remove();
                var appendDiv = "<div id='intelliSenseChartConfigDivId" + columnsCount + "' class='intelliSenseChartConfigDivClass nobgbubble sayIntelisenseView' style='display:none'>"
                        + "<div class='intellisenseChartConfigDivClass'>"
                        + "<p class='convai-left-message'>Do the required changes(Like title name, legend changes...)</p>"
                        + configOptions[chartType]
                        + "</div>"
                        + "<div class='intellisenseChartsDivClass'>"
                        + "</div>"
                        + "</div>";
                $("#intelliSenseChartVisualizeDivId" + columnsCount + "").remove();
                $("body").append("<div id='intelliSenseChartVisualizeDivId" + columnsCount + "' class='intelliSenseChartVisualizeDivClass'></div>");
                $("#intelliSenseChartVisualizeDivId" + columnsCount + "").draggable();
                $("body").append(appendDiv);
                showAnimatedBubbleSequnce();
                scrollAreaToBottom();
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function checkIntellisenseViewAxisColumnNull(count, noChangeFlag)
{
    var error_count = 0;
    $("#intelliSenseViewAxisColumnsId" + count + " div").each(function ()
    {
        var divId = $(this).attr('id');
        if (divId != null && divId != '' && divId != undefined)
        {
            var inputId = $("#" + divId).find("input").attr('id');
            if (inputId != null && inputId != '' && inputId != undefined)
            {
                var inputVal = $("#" + inputId).attr('value');
                if (!(inputVal != null && inputVal != '' && inputVal != undefined))
                {
                    error_count++;
                }
            }
        }
    });
    if (error_count == 0)
    {
        applyIntellisenseViewChartColumns(count, noChangeFlag);
    } else {
        $("#intelliSenseViewAxisColumnsAppendId" + count).remove();
        $("#intelliSenseViewAxisColumnsId" + count).append("<div id='intelliSenseViewAxisColumnsAppendId" + count + "' class='convai-left-message'>Please select the Axis columns</div>");
    }

}

function getIntelliSenseViewAggregateFunctions($event, columnId, chartId, chartCount, columnCount, columnVal, tableName, changeFlag) {
    clearTimeout(dragEventTimeout);
    var div = "<li onclick=applyIntelliSenseViewAggregateFunctions('AVG','" + columnId + "','" + chartId + "','" + chartCount + "','" + columnCount + "','" + columnVal + "','" + tableName + "','" + changeFlag + "')>Average</li>"
            + "<li onclick=applyIntelliSenseViewAggregateFunctions('Count','" + columnId + "','" + chartId + "','" + chartCount + "','" + columnCount + "','" + columnVal + "','" + tableName + "','" + changeFlag + "')>Count</li>"
            + "<li onclick=applyIntelliSenseViewAggregateFunctions('Sum','" + columnId + "','" + chartId + "','" + chartCount + "','" + columnCount + "','" + columnVal + "','" + tableName + "','" + changeFlag + "')>Sum</li>"
            + "<li onclick=applyIntelliSenseViewAggregateFunctions('Max','" + columnId + "','" + chartId + "','" + chartCount + "','" + columnCount + "','" + columnVal + "','" + tableName + "','" + changeFlag + "')>Max</li>"
            + "<li onclick=applyIntelliSenseViewAggregateFunctions('Min','" + columnId + "','" + chartId + "','" + chartCount + "','" + columnCount + "','" + columnVal + "','" + tableName + "','" + changeFlag + "')>Min</li>";
    $("#jqxAggregate").remove();
    $('body').append("<div id='jqxAggregate'><ul></ul></div>");
    $("#jqxAggregate ul").html(div);
    var contextMenu = $("#jqxAggregate").jqxMenu({width: '90px', height: 140 + 'px', autoOpenPopup: false, mode: 'popup'});
    contextMenu.jqxMenu('open', parseInt(event.clientX) + 5, parseInt(event.clientY) + 5);
    $(".dxpPageContent").scroll(function (event) {
        if ($("#jqxAggregate ul").length > 0) {
            var pos = $(".dxpPageContent").scrollTop();
            $("#jqxAggregate").css("top", $event.offsetTop - pos);
        }
    });
}

function applyIntelliSenseViewAggregateFunctions(aggregateType, columnId, chartId, chartCount, columnCount, columnName, tableName, changeFlag) {
    $("#" + columnId).empty();
    setTimeout(function () {
        var colVal = $("#userValuesColumnNamesDivId" + chartCount + columnCount).val();
        var aggregateColumn = aggregateType + "(" + tableName + "." + colVal + ")";
        $("#" + columnId).attr("value", aggregateColumn);
        $("#" + columnId).attr("aggregateColumn", aggregateColumn);
        var axisId = "intellisenseViewAxisInputId" + chartCount + "0";
        var valuesId = "intellisenseViewValuesInputId" + chartCount + "0";
        $("#intelliSenseViewExampleChartAggregateImageId").show();
        $("#intelliSenseViewValuesColumnsAppendId" + chartCount).remove();
        if ($.trim($("#" + axisId).val()).length > 0 && $.trim($("#" + valuesId).val()).length > 0) {
            checkIntellisenseViewAxisColumnNull(chartCount, changeFlag);
        }
    }, 2000);
}

function getIntellisenseViewExampleChartDesign(chartType) {
    chartType = chartType.toUpperCase();
    $.ajax({
        type: "post",
        traditional: true,
        url: 'getIntelliSenseExampleChartDesign',
        cache: false,
        data: {
            chartType: chartType
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var chartColumnsDiv = response['chartColumnsDiv'];
                $("#visionChartsAutoSuggestionUserExamplesId").html(chartColumnsDiv);
                $("#intelliSenseViewExampleChartDescriptionId").show();
                $("#intelliSenseViewExampleChartImageId").show();
                $("#intelliSenseViewExampleChartDataImageId").show();
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function getIntelliSenseViewAddColumns($this, parentColId, tableName, columnName, chartCount, columnType, chartType) {
    var columnsCount = $("#" + parentColId).attr("columnsCount");
    if (chartType != null && chartType != '' && chartType != undefined && chartType == 'treemap' || chartType == 'sunburst') {
        if (columnsCount >= 1)
        {
            var errorMessageResponse = "More than 2 columns are not allowed";
            var buttonArray = [
                {
                    text: 'Close',
                    click: function () {
                    },
                    isCloseButton: true
                }
            ];
            showPopUpWithButtonFunctionCall(errorMessageResponse, buttonArray);
            return;
        }
    }
    columnsCount++;
    $.ajax({
        type: "post",
        traditional: true,
        url: 'getIntelliSenseChartSubColumns',
        cache: false,
        data: {
            columnsCount: columnsCount,
            tableName: tableName,
            chartCount: chartCount,
            columnType: columnType
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var chartColumnsDiv = response['chartColumnsDiv'];
                $("#" + parentColId).attr("columnsCount", columnsCount);
                $("#" + parentColId).append(chartColumnsDiv);
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function changeIntellisenseViewElementsId(chartCount, chartType) {
    var perviousAdjacentElements = $('#intelliSenseChartConfigDivId' + chartCount).prevAll();
    var nextAdjacentElements = $('#intelliSenseChartConfigDivId' + chartCount).siblings();
    var setOfCharts = new Set();
    setOfCharts.add(chartType);
    $.each(perviousAdjacentElements, function () {
        var chartType = $(this).attr('data-chartType');
        if (setOfCharts.has(chartType)) {
            return;
        } else {
            setOfCharts.add(chartType);
        }
    });
    $.each(nextAdjacentElements, function () {
        var chartType = $(this).attr('data-chartType');
        if (setOfCharts.has(chartType)) {
            return;
        } else {
            setOfCharts.add(chartType);
        }
    });
    if (setOfCharts.size !== 0 && setOfCharts !== null && setOfCharts.has(chartType)) {
        var chartConfigId = "intelliSenseChartConfigDivId" + chartCount + " ul li";
        $('#' + chartConfigId).each(function (index, element) {
            var optColName = $(this).attr("data-column-name");
            if (optColName !== null && optColName !== '' && optColName !== undefined) {
                $("#" + chartConfigId).find("#" + optColName).attr("id", optColName + chartCount);
                $(this).attr("data-column-name", optColName + chartCount);
            }
            if (optColName.includes(chartType.toUpperCase() + 'COLOR')) {
                var chartColorsSiblings = $("#" + optColName).siblings();
                if (chartColorsSiblings.length !== 0) {
                    chartColorsSiblings.each(function (index, element) {
                        if ($(this).prop("tagName").toLowerCase() === 'input') {
                            $("#" + chartConfigId).find("#" + optColName + '_CLR').attr('id', optColName + chartCount + '_CLR');
                        } else if ($(this).prop("tagName").toLowerCase() === 'div') {
                            $("#" + chartConfigId).find("#" + optColName + '_CLR_DIV').attr('id', optColName + chartCount + '_CLR_DIV');
                        }
                    });
                } else {
                    $("#" + optColName + chartCount).siblings().each(function (index, element) {
                        if ($(this).prop("tagName").toLowerCase() === 'input') {
                            $("#" + chartConfigId).find("#" + optColName + '_CLR').attr('id', optColName + chartCount + '_CLR');
                        } else if ($(this).prop("tagName").toLowerCase() === 'div') {
                            $("#" + chartConfigId).find("#" + optColName + '_CLR_DIV').attr('id', optColName + chartCount + '_CLR_DIV');
                        }
                    });
                }
            }

        });
    }
}


function getIntellisenseViewTreeMapChart(chartId, result, count, chartType, saveType, axisColumns, filterCondition) {
    chartType = 'treemap';
    var chartUpper = chartType.toUpperCase();
    var chartTitle = $("#" + chartUpper + "TITLEECHARTS").val();
    isCurrencyConversionEvent = $("#isCurrencyConversionEvent").val();
    if (isCurrencyConversionEvent === undefined || isCurrencyConversionEvent === '') {
        isCurrencyConversionEvent = result['isCurrencyConversionEvent'];
    }
    currencySymbol = $("#toCurrencyDropDown_jqxDropDownList option:selected").attr('data-currencySymbol');
    if (currencySymbol === undefined || currencySymbol === '') {
        currencySymbol = result['currencySymbol'];
    }

    toCurrencyDropDownValue = $("#toCurrencyDropDown").val();
    if (toCurrencyDropDownValue === undefined || toCurrencyDropDownValue === '') {
        toCurrencyDropDownValue = result['toCurrencyDropDownValue'];
    }
    $("#visionVisualizeChartId" + count).remove();
    var treeMapChartId = "visionVisualizeChart" + count;
    var treemapChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + treeMapChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "350px", "!important");
    $("#" + treeMapChartId).css("width", "auto", "!important");
    $("#" + treeMapChartId).css("height", "400px", "!important");
    if ($("#" + chartId).parent().parent().hasClass("homeChartWrapDiv")) {
        $("#" + chartId).parent().parent().attr("class", "col-md-6 col-sm-6 col-lg-12 homeChartWrapDiv treeMapMainDiv");
    }
    $("#" + treemapChartHomeId).addClass("visionVisualChartBoxClass");
    var dom = document.getElementById(chartId);
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: true
    });
    var data = result['data'];
    var radioButtonStr = result['radioButtonStr'];
    var optionObjectEcharts = result['layout'];
    var seriesObjectEcharts = result['dataPropObject'];
    if (chartTitle === undefined || chartTitle === '' || chartTitle === null) {
        chartTitle = optionObjectEcharts['text'];
    }
    var tableName = result['tableName'];
    const formatUtil = echarts.format;
    var labelFormatter = function (data) {
        return data.name;
    };
    var valueFormatter = function (data) {
        return formatnumber(data.value);
    };
    var labelAndValueFormatter = function (data) {
        var label = data.name;
        var formattedValue = formatnumber(data.value);
        return "(" + label + "," + formattedValue + ")";
    };
    var option = {
        tooltip: {
            show: true,
            formatter: function (info) {
                var value = info.value;
                var treePathInfo = info.treePathInfo;
                var treePath = [];
                for (var i = 1; i < treePathInfo.length; i++) {
                    treePath.push(treePathInfo[i].name);
                }
                return ['<div class="tooltip-title">' +
                            echarts.format.encodeHTML(treePath.join('/')) +
                            '</div>',
                    formatUtil.addCommas(value)
                ].join('');
            }
        },
        series: {
            name: "▶",
            type: 'treemap',
            visibleMin: 1,
            visualMin: 1,
            /*roam: 'move',*/
            label: {
                show: true,
                distance: 5,
                width: 25,
                overflow: 'truncate',
                formatter: function (params) {
                    let arr = [params.name, echarts.format.addCommas(params.value)];
                    return arr.join('\n');
                }
            },
            levels: [
                {
                    itemStyle: {
                        //borderWidth: 3,
                        //borderColor: '#333',
                        //gapWidth: 1
                    }
                },
            ],
            data: data,
            leafDepth: 1

        },
        title: {
            text: chartTitle,
            left: "center",
            padding: [15, 0],
            textStyle: {
                fontSize: 14,
                fontWeight: "normal"
            }
        }
    };
    if (!(saveType != null && saveType != '' && saveType != undefined)) {
        getToolBox(chartId, chartType, tableName);
    }

    $("#" + chartId + "_radioButtons").html(radioButtonStr);
    $("#" + chartId + "_radioButtons input:radio").unbind("change").on("change", function () {
        var checkedVal = $("#" + chartId + "_radioButtons").find(":radio:checked").val();
        getParticularVisualizeChart(chartId, checkedVal, chartType);
    });
    var tooltipObject = optionObjectEcharts['tooltip'];
    if (tooltipObject != null && !jQuery.isEmptyObject(tooltipObject)) {
        $.each(tooltipObject, function (key, value) {
            if (key !== null && key === "formatter") {
                tooltipObject['formatter'] = eval(tooltipObject['formatter']);
            }
        });
        option['tooltip'] = tooltipObject;
    }
    var seriesObject = option['series'];
    var labelObject = seriesObjectEcharts['label'];
    if (labelObject != null && !jQuery.isEmptyObject(labelObject)) {
        $.each(labelObject, function (key, value) {
            if (key !== null && key === "formatter") {
                labelObject['formatter'] = eval(labelObject['formatter']);
            }
        });
        seriesObject['label'] = labelObject;
    }
    if (option && typeof option === 'object') {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }

    myChart.on('contextmenu', function (params) {
        var colorsObj = '';
        selectHomeAggregateFunction(chartId, chartType, axisColumns, filterCondition, colorsObj);
    });
    showIntellisenseViewConfigOptions(count, chartType);
}






function showNextConversationAiMessage(replyId) {
    $.ajax({
        type: "POST",
        url: "getConversationalAIMessage",
        cache: false,
        data: {
            messageId: replyId
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                var mainDiv = response['mainDiv'];
                var rightNxtMtd = response['rightNxtMtd'];
                var leftNxtMtd = response['leftNxtMtd'];
                var repliedId = response['replyId'];
                $("#visionChartsAutoSuggestionUserId").append(mainDiv);
                attachRemovalAction();
                showAnimatedBubbleSequnce();
                scrollAreaToBottom();
                if (rightNxtMtd != null && rightNxtMtd != '' && rightNxtMtd != undefined)
                {
                    window[rightNxtMtd](repliedId);
                }
                if (leftNxtMtd != null && leftNxtMtd != '' && leftNxtMtd != undefined)
                {
                    window[leftNxtMtd](repliedId);
                }

            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}



function getExistingTables(replyId) {

    var userName = $("#rsUserName").val();
    $.ajax({
        type: "POST",
        url: "getUserTableNamesData",
        cache: false,
        data: {
            userName: userName,
            replyId: replyId
        },
        success: function (response) {
            //TODO: Need to add Loader
            if (response != null && !jQuery.isEmptyObject(response)) {
                var tableDiv = response['tableDiv'];
                var msgText = "<div id='userIntellisenseViewTablesDivId' class='userIntellisenseViewTablesDivClass'>"
                        + tableDiv
                        + "</div>";
                $("#visionChartsAutoSuggestionUserId").append(msgText);
                showAnimatedBubbleSequnce();
                $('#data-search').on('keyup', function () {
                    var searchVal = $(this).val();
                    var filterItems = $('[data-intelliSenseViewTablefilter-item]');
                    if (searchVal != '') {
                        filterItems.addClass('intelliSenseViewTableshidden');
                        $('[data-filter-name*="' + searchVal.toUpperCase() + '"]').removeClass('intelliSenseViewTableshidden');
                    } else {
                        filterItems.removeClass('intelliSenseViewTableshidden');
                    }
                });
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}



function getConversationalAISelectedDataTableName(tableName, replyId) {
    var randomNumber = generateRandomNumber();
    const prevId = 5;
    if ($("#intelliSenseTableId").length > 0) {
        $("#intelliSenseTableId").text(tableName);
    } else {
        var msgText = "<div id='intellisenseViewTableId" + randomNumber + "' class='text-right convai-right-message'><span id='intelliSenseTableId'>" + tableName + "</span>"
                + "</div>"
                + "<div class='intelliSenseViewGoBackClass'" + "  onclick=\"goToIntellisensemethod('intellisenseViewTableId" + randomNumber + "','" + prevId + "')\">"
                + "<i class='fa fa-undo' aria-hidden='true' title='go back'></i>"
                + "</div>";
        $("#visionChartsAutoSuggestionUserId").append(msgText);
    }

    $(".userTableNamesDivClass .search ,.userTableNamesDivClass .userIntellisenseViewTableNamesDivClass").remove();
    attachRemovalAction();
    showAnimatedBubbleSequnce();
    showNextConversationAiMessage(replyId);
}

function showConversationalAIChartTypes(replyId) {
    $.ajax({
        type: "post",
        traditional: true,
        url: 'getIntelliSenseChartTypes',
        cache: false,
        data: {
            replyId: replyId
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var chartDiv = response['chartDiv'];
                if ($.trim($("#intelliSenseChartDivId").html()).length > 0) {
                    var userAppendDiv = chartDiv;
                    $("#intelliSenseChartDivId").html(userAppendDiv);
                } else {
                    var appendDiv = "<div id='intelliSenseChartDivId' class='intelliSenseChartClass text-left'>"
                            //+ "<p class='convai-left-message nonLoadedBubble' >Select chart type</p>"
                            + chartDiv
                            + "</div>";
                    $("#visionChartsAutoSuggestionUserId").append(appendDiv);
                }
                showAnimatedBubbleSequnce();
                scrollAreaToBottom();
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}

function getConversationalAIFileTypes(replyId)
{
    var msgText = "<div class='convai-message nonLoadedBubble'><button class='convai-left-message-button nonLoadedBubble' onclick=\"getNewDataType('XLS','Excel','" + replyId + "')\" id='intelliSenseYes'>XLS</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"getNewDataType('XLSX','Excel','" + replyId + "')\" id='intelliSenseYes'>XLSX</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"getNewDataType('CSV','csv_search','" + replyId + "')\" id='intelliSenseYes'>CSV</button>"
            + "<button class='convai-left-message-button nonLoadedBubble' onclick=\"getNewDataType('TEXT','DM_TEXT','" + replyId + "')\" id='intelliSenseYes'>TEXT</button></div>";
    $("#visionChartsAutoSuggestionUserId").append(msgText);
    attachRemovalAction();
    showAnimatedBubbleSequnce();
}

function getConversationalAIColumns(replyId) {
    var tableName = $("#intelliSenseTableId").text();
    $.ajax({
        type: "post",
        traditional: true,
        url: 'getIntelliSenseTableColumns',
        cache: false,
        data: {
            tableName: tableName
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var columnDiv = response['columnDiv'];
                if ($.trim($("#intellisenseViewUserColumnNamesDivId").html()).length > 0) {
                    $("#intellisenseViewUserColumnNamesDivId").html(columnDiv);
                } else {
                    var userColumnDiv = "<div class='convai-message'><div id='intellisenseViewUserColumnNamesDivId' class='intellisenseViewUserColumnNamesDivClass'>"
                            + columnDiv
                            + "</div>"
                            + "</div>"
                    $("#visionChartsAutoSuggestionUserId").append(userColumnDiv);
                }

                attachRemovalAction();
                showAnimatedBubbleSequnce();
                showNextConversationAiMessage(replyId);
            }
        },
        error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}




function redirectConversationAIMessage(redirectType)
{

    exitConversationAI();
    if (redirectType == 'Visualization') {
        window.open("https://www.piloggroup.com/ivisualize-digital-analytics.php", "_blank");
    } else if (redirectType == 'iTransform')
    {
        window.open("https://www.piloggroup.com/itransform-ETL.php", "_blank");
    }

    /*var msgText = "<div  class='convai-message nonLoadedBubble'><div class='convai-right-message'><span>" + redirectType + "</span>"
     + "</div></div>";
     $("#visionChartsAutoSuggestionUserId").append(msgText);
     attachRemovalAction();
     showAnimatedBubbleSequnce();*/

    /*var contextPath = $("#contextPath").val();
     var host = document.location.host;
     var protocal;
     var context = "";
     if (host.indexOf("8080") > -1) {
     protocal = "http";
     context = "/integral";
     } else if (host.indexOf("8443") > -1) {
     protocal = "http";
     context = "/integral";
     } else if (host.indexOf("8090") > -1) {
     protocal = "http";
     context = "/integral";
     } else if (host.indexOf("8081") > -1) {
     protocal = "http";
     context = "/integral";
     } else if (host.indexOf("9999") > -1) {
     protocal = "http";
     context = "/integral";
     } else {
     protocal = "https";
     context = "";
     }
     contextPath = protocal + '://' + host + context;
     var popup = window.open(contextPath, "_blank");
     
     var readyStateCheckInterval = setInterval(function() {
     if (popup.document.readyState === "complete") {
     clearInterval(readyStateCheckInterval);
     if(redirectType == 'Visualization'){
     popup.loadVisuvalization();
     }else if(redirectType == 'iTransform')
     {
     popup.loadETL('ETL');
     }
     }
     }, 3000);*/

}



function getConversationalAIData(replyId) {

    var tableName = $("#intelliSenseTableId").text();
    $.ajax({
        type: "post",
        traditional: true,
        url: 'viewAnalyticsTableGrid',
        cache: false,
        data: {
            tableName: tableName
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                $("#visionChartsAutoSuggestionUserId").append("<div id=\"intellisenseViewtableData\" class='intellisenseViewtableDataClass'></div>");
                var column = response['columnArray'];
                var dataArray = response['dataArray'];
                var dataFieldsArray = response['dataFieldsArray'];
                var columnsArray = response['columnsArray'];
                var data = response['columnsArray'];
                var totalCount = response['totalCount'];
                var source =
                        {
                            type: 'POST',
                            datatype: "json",
                            datafields: dataFieldsArray,
                            data: {
                                tableName: tableName
                            },
                            url: 'viewAnalyticsTableGridData',
                            root: 'Rows',
                            processdata: function (data) {
                                showLoader();
                                data['getOnlyDataArray'] = 'Y';
                            },
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                //showLoader();

                            }, loadError: function (xhr, status, error) {
                                $('#intellisenseViewtableData').css("width", "100%");
                                stopLoader();
                            }, loadComplete: function (data) {
                                $('#intellisenseViewtableData').css("width", "100%");
                                stopLoader();
                            },
                            beforeprocessing: function (data) {
                                source.totalrecords = data[data.length - 1];
                            },
                            sort: function () {
                                //                                                $("#intellisenseViewtableData").remove();
                                $("#intellisenseViewtableData").jqxGrid('updatebounddata', 'sort');
                                try {
                                    $("#intellisenseViewtableData").jqxGrid('clearselection');
                                } catch (e) {
                                }

                            },
                            filter: function () {
                                $("#intellisenseViewtableData").jqxGrid('updatebounddata', 'filter');
                                try {
                                    $("#intellisenseViewtableData").jqxGrid('clearselection');
                                } catch (e) {
                                }
                            }
                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                $("#intellisenseViewtableData").jqxGrid(
                        {
                            width: "100%",
                            height: "400px",
                            theme: 'energyblue',
                            autoshowloadelement: false,
                            source: dataAdapter,
                            pageable: true,
                            pagesize: 50,
                            showfilterrow: true,
                            filterable: true,
                            sortable: true,
                            virtualmode: true,
                            pagesizeoptions: ['50', '100', '500'],
                            rendergridrows: function (params) {
                                return params.data;
                            },
                            columnsresize: true,
                            columns: columnsArray
                        });
                attachRemovalAction();
                showAnimatedBubbleSequnce();
                showNextConversationAiMessage(replyId);
            }

        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}

function generateRandomNumber() {
    const min = 1000000000000000000; // Minimum value for the long positive integer
    const max = 9999999999999999999; // Maximum value for the long positive integer
    const randomFloat = Math.random();
    const scaledFloat = randomFloat * (max - min + 1) + min;
    const longPositiveInteger = Math.floor(scaledFloat);
    return longPositiveInteger;
}

function getConversationAINewChartTypes(replyId)
{
    $("#visionVisualizeBasicTabs").remove();
    var chartDiv = "<div id='intelliSenseChartDivId' class='intelliSenseChartClass text-left'>"
            + "<div id=\"visionVisualizeBasicTabs\" class=\"visionVisualizeChartsTabsClass nonLoadedBubble\">"
            + "<div class=\"row iconsRow\">";
    var chartType = $("#intelliSenseChartTypeId").val();
    if (chartType == 'pie' || chartType == 'donut')
    {
        chartDiv += "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Pie.svg', 'pie'," + replyId + " )\" src=\"images/Pie.svg\" class=\"visualDarkMode\" title=\"Pie chart looks like circle it is divided into sectors that each represent a proportion of the whole.\">"
                + "</div>"
                + "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Donut.svg', 'donut'," + replyId + ")\" src=\"images/Donut.svg\" class=\"visualDarkMode\" title=\"Doughnut chart looks like circle with hole it is divided into sectors that each represent a proportion of the whole\">"
                + "</div>";
    } else if (chartType == 'bar' || chartType == 'lines' || chartType == 'funnel' || chartType == 'column' || chartType == 'scatter'
            || chartType == 'scatterpolar')
    {
        chartDiv += "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Bar.svg', 'bar'," + replyId + ")\" src=\"images/Bar.svg\" class=\"visualDarkMode\" title=\"A bar chart is a chart that presents categorical data with rectangular bars with lengths proportional to the values that they represent. The bars can be plotted horizontally\">"
                + "</div>"
                + "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Column.svg', 'column'," + replyId + ")\" src=\"images/Column.svg\" class=\"visualDarkMode\" title=\"A column chart is a chart that presents categorical data with rectangular bars with heights proportional to the values that they represent. The bars can be plotted vertically\">"
                + "</div>" + "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Line.svg', 'lines'," + replyId + ")\" src=\"images/Line.svg\" class=\"visualDarkMode\" title=\"A line chart is a type of chart which displays information as a series of data points called \" markers'=\"\" connected=\"\" by=\"\" straight=\"\" line=\"\" segments'=\"\">"
                + "</div>" + "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Scatter.svg', 'scatter'," + replyId + ")\" src=\"images/Scatter.svg\" class=\"visualDarkMode\" title=\"Scatter chart\">"
                + "</div>"
                + "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Funnel.svg', 'funnel'," + replyId + ")\" src=\"images/Funnel.svg\" class=\"visualDarkMode\" title=\"Funnel charts can be used to illustrate stages in a process, they could be used to show anything that’s decreasing in size\">"
                + "</div>"
                + "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Redar-Chart.svg', 'scatterpolar'," + replyId + ")\" src=\"images/Redar-Chart.svg\" class=\"visualDarkMode\" title=\"A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point\">"
                + "</div>";
    } else if (chartType == 'sunburst' || chartType == 'treemap')
    {
        chartDiv += "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Tree_Chart.svg', 'treemap'," + replyId + ")\" src=\"images/Tree_Chart.svg\" class=\"visualDarkMode\" title=\"Tree maps display hierarchical data as a set of nested rectangles. Each branch of the tree is given a rectangle, which is then tiled with smaller rectangles representing sub-branches\">"
                + "</div>"
                + "<div class=\"col-lg-4  col-md-4 visualIconDivImg\">"
                + "<img onclick=\"showIntelliSenseViewNewChartDiv('Sunburst.svg', 'sunburst'," + replyId + ")\" src=\"images/Sunburst.svg\" class=\"visualDarkMode\" title=\"The sunburst chart is ideal for displaying hierarchical data. Each level of the hierarchy is represented by one ring or circle with the innermost circle as the top of the hierarchy\">"
                + "</div>"
    }
    chartDiv += "</div>";
    chartDiv += "</div>";
    chartDiv += "</div>";
    $("#visionChartsAutoSuggestionUserId").append(chartDiv);
    attachRemovalAction();
    showAnimatedBubbleSequnce();
}

function showIntelliSenseViewNewChartDiv(chartImage, chartType, replyId) {
    $("#intelliSenseChartTypeId").remove();
    $("#intelliSenseChartImageId").remove();
    var chartDiv = "<div id='intellisenseViewNewchartid' class=\"visualIconDivImg text-right replyIntelisenseView convai-right-message p-3 nonLoadedBubble\">"
            + "<img src=\"images/" + chartImage + "\" class=\"visualDarkMode\">"
            + "<input type='hidden' id='intelliSenseChartTypeId' value='" + chartType + "'/>"
            + "<input type='hidden' id='intelliSenseChartImageId' value='" + chartImage + "'/>"
            + "</div>"
            + "<div class=\"intelliSenseViewGoBackClass\" onclick=\"goToIntellisensemethod('intellisenseViewNewchartid','16')\"><i class=\"fa fa-undo\" aria-hidden=\"true\" title=\"go back\"></i></div>";
    $("#visionChartsAutoSuggestionUserId").append(chartDiv);
    $(".iconsRow").remove();
    showNextConversationAiMessage(replyId);
    showAnimatedBubbleSequnce();
    getIntellisenseViewExampleChartDesign(chartType);
}






function getMergedTables(replyId)
{
    var userName = $("#rsUserName").val();
    $.ajax({
        type: "POST",
        url: "getUserMergeTableNamesData",
        cache: false,
        data: {
            userName: userName,
            replyId: replyId
        },
        success: function (response) {
            //TODO: Need to add Loader
            if (response != null && !jQuery.isEmptyObject(response)) {
                var tableDiv = response['tableDiv'];
                var tablesArr = response['tablesArr'];
                $("#visionChartsAutoSuggestionUserId").append(tableDiv);
                $("#userIntellisenseViewMergeTableNamesDivId").jqxListBox({
                    source: tablesArr,
                    theme: 'energyblue',
                    checkboxes: true,
                    filterable: true
                });
                showAnimatedBubbleSequnce();
                scrollAreaToBottom();
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}




function deleteFlowChartSelectedOperators()
{
    $("#userMergeTableColumnsDivId").flowchart('deleteSelected');
}

function mergeTables()
{
    $("#Loader").css("display", "block");
    $("body").css({"pointer-events": "auto"});
    $.ajax({
        type: "POST",
        url: "getEditorMergeTableNames",
        cache: false,
        data: {

        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                stopLoader();
                var tableDiv = response['tableDiv'];
                $("#dialog").html(tableDiv);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject["Merge Tables"] != null ? labelObject["Merge Tables"] : "Merge Tables"),
                    modal: true,
                    width: 700,
                    height: 430,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $("#Loader").css("display", "block");
                                $("body").css({"pointer-events": "auto"});
                                var tablesArr = [];
                                $("#userEditorMergeTablesAppendId ul li").each(function () {
                                    var tableName = $(this).attr("title");
                                    if (tableName != null && tableName != '' && tableName != undefined)
                                    {
                                        tablesArr.push(tableName);
                                    }
                                });
                                if (tablesArr != null && !jQuery.isEmptyObject(tablesArr)) {
                                    $(".userEditorMergeTablesErrorDivClass").html("");
                                    getMergeNewTableName(tablesArr);
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                } else {
                                    stopLoader();
                                    $(".userEditorMergeTablesErrorDivClass").html("Please add tables for Merging");
                                }
                            }

                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                        $("#dialog").addClass("mergeTablesPopUp");
                        $('#mergeTableFilterId').keyup(function () {

                            var searchText = $(this).val();
                            searchText = searchText.toUpperCase();
                            $('#userEditorMergeTablesId > li').each(function () {

                                var currentLiText = $(this).text(),
                                        showCurrentLi = currentLiText.indexOf(searchText) !== -1;
                                $(this).toggle(showCurrentLi);
                            });
                        });
                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function getMergeNewTableName(tablesArr)
{
    stopLoader();
    var tableDiv = "<div class='editorMergeNewTableDivClass'>"
            + "<span class='editorMergeNewTableSpanClass'>Please Give new Table name :</span>"
            + "<input type='text' id='editorMergeNewTableId' value=''/>"
            + "<div id='editorMergeNewTableErrorClass'></div>"
            + "</div>";
    $("#dialog1").html(tableDiv);
    $("#dialog1").dialog({resizable: false,
        title: (labelObject["New Table Name"] != null ? labelObject["New Table Name"] : "New Table Name"),
        modal: true,
        width: 350,
        height: 150,
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $("#Loader").css("display", "block");
                    $("body").css({"pointer-events": "auto"});
                    var tableName = $("#editorMergeNewTableId").val();
                    if (tableName != null && tableName != '' && tableName != undefined) {
                        $("#editorMergeNewTableErrorClass").html("");
                        tableName = tableName.toUpperCase();
                        checkExistMergeTableName(tableName, tablesArr);
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    } else {
                        stopLoader();
                        $("#editorMergeNewTableErrorClass").html("please provide table name");
                    }

                }

            }],
        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui) {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

function checkExistMergeTableName(tableName, tablesArr)
{
    $.ajax({
        type: "POST",
        url: "checkExistMergeTableName",
        cache: false,
        data: {
            newTableName: tableName,
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                stopLoader();
                var message = response['Message'];
                if (message != null && message != '' && message != undefined && message.indexOf("not existed") > -1)
                {
                    getMergeTableColumns(tableName, tablesArr);
                } else {
                    var tableDiv = "<div class='editorMergeNewTableDivClass'>"
                            + "<span class='editorMergeNewTableSpanClass'>Table is already existed with that name.Please Give new Table name :</span>"
                            + "<input type='text' id='editorMergeNewTableId' value='" + tableName + "'/>"
                            + "<div id='editorMergeNewTableErrorClass'></div>"
                            + "</div>";
                    $("#dialog").html(tableDiv);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject["Merge Columns"] != null ? labelObject["Merge Columns"] : "Merge Columns"),
                        modal: true,
                        width: 350,
                        height: 150,
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    var tableName = $("#editorMergeNewTableId").val();
                                    if (tableName != null && tableName != '' && tableName != undefined) {
                                        $("#editorMergeNewTableErrorClass").html("");
                                        tableName = tableName.toUpperCase();
                                        checkExistMergeTableName(tableName, tablesArr);
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                    } else {
                                        $("#editorMergeNewTableErrorClass").html("please provide table name");
                                    }

                                }

                            }],
                        open: function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui) {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                }


            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function getMergeTableColumns(tableName, tablesArr)
{
    $("#Loader").css("display", "block");
    $("body").css({"pointer-events": "auto"});
    $.ajax({
        type: "POST",
        url: "getEditorMergeTableColumns",
        cache: false,
        data: {
            newTableName: tableName,
            tablesArr: JSON.stringify(tablesArr)
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                stopLoader();
                var tableDiv = response['tableDiv'];
                $("#dialog").html(tableDiv);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject["Merge Columns"] != null ? labelObject["Merge Columns"] : "Merge Columns"),
                    modal: true,
                    width: 900,
                    height: 430,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                var duplicateFlag = false;
                                var duplicates = {};
                                $("#editorMergeTableColumnsTableId tr td:nth-child(3)").each(function () {
                                    var tdText = $(this).find("input").val();
                                    alert(tdText);
                                    if (duplicates[tdText] != null && duplicates[tdText] != '' && duplicates[tdText] != undefined) {
                                        $(this).find("input").addClass("applyMergeTableColumnsColor");
                                        duplicateFlag = true;
                                    } else {
                                        $(this).find("input").removeClass("applyMergeTableColumnsColor");
                                    }
                                    duplicates[tdText] = tdText;
                                });
                                if (duplicateFlag)
                                {
                                    $(".userEditorMergeTableDuplicateColsErrorClass").html("Please change Duplicate column Names or Delete Duplicate columns");
                                } else {
                                    $(".userEditorMergeTableDuplicateColsErrorClass").html("");
                                    var sourceDestiCols = {};
                                    var destiColTypes = {};
                                    $("#editorMergeTableColumnsTableId tr").each(function () {
                                        var sourceCol = $(this).find("td:nth-child(2)").find("input").val();
                                        var destinationCol = $(this).find("td:nth-child(3)").find("input").val();
                                        var columnType = $(this).find("td:nth-child(4)").find("input").val();
                                        destiColTypes[destinationCol] = columnType;
                                        sourceDestiCols[sourceCol] = destinationCol;
                                    });
                                    getMergeJoinColumns(sourceDestiCols, destiColTypes, tablesArr, tableName);
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }

                            }

                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function getMergeJoinColumns(sourceDestiCols, destiColTypes, tablesArr, tableName)
{
    $("#Loader").css("display", "block");
    $("body").css({"pointer-events": "auto"});
    $.ajax({
        type: "POST",
        url: "createTableANdJoinTables",
        cache: false,
        data: {
            sourceDestiCols: JSON.stringify(sourceDestiCols),
            destiColTypes: JSON.stringify(destiColTypes),
            tablesObj: JSON.stringify(tablesArr),
            newTableName: tableName
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                stopLoader();
                var tabsString = response['tabsString'];
                $("#dialog").html(tabsString);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject["Merge Join Columns"] != null ? labelObject["Merge Join Columns"] : "Merge Join Columns"),
                    modal: true,
                    width: 800,
                    height: 430,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                if ($("#viewMergeJoinQueryDivId").html().length > 0)
                                {
                                    $("#viewMergeJoinQueryErrorDivId").html("");
                                    var joinQuery = $("#viewMergeJoinQueryDivId").html();
                                    var joinQueryVal = $("#viewMergeJoinQueryDivId").val();
                                    mergeTablesData(sourceDestiCols, destiColTypes, tablesArr, tableName, joinQueryVal);
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                } else {
                                    $("#viewMergeJoinQueryErrorDivId").html("please give join mapping and save join mapping");
                                }

                            }

                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
                var selectedJoinTables = response['selectedJoinTables'];
                $('#tabs-1').html(selectedJoinTables);
                $(".visionETLColMapImage").mousedown(function (event) {
                    treeIconClickEvent = event;
                })
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function mergeTablesAddFilter(tableName)
{
    var divId = tableName + "_table";
    $("#userEditorMergeTablesId").find("li#" + divId + "").remove();
    var divId = "<li id='" + divId + "' title='" + tableName + "' class='userEditorMergeTableClass'>"
            + "<span class='columnAddTableName'>" + tableName + "</span>"
            + "<span class='columnAddImg'><img src='images/close_white.png' class='addCloseIcon' onclick=\"mergeTablesRollbackFilter('" + tableName + "')\"></span>"
            + "</li>";
    $("#userEditorMergeTablesAppendId ul").append(divId);
}
function mergeTablesRollbackFilter(tableName)
{
    var divId = tableName + "_table";
    $("#userEditorMergeTablesAppendId ul").find("li#" + divId + "").remove();
    var divId = "<li id='" + divId + "' title='" + tableName + "' class='userEditorMergeTableClass'>"
            + "<span class='columnAddTableName'>" + tableName + "</span>"
            + "<span class='columnAddImg'><img src='images/image2vector.svg' class='addcolumnIcon' onclick=\"mergeTablesAddFilter('" + tableName + "')\"></span>"
            + "</li>";
    $("#userEditorMergeTablesId").prepend(divId);
}
function deleteMergeColumnSelectedRow($this, rowId)
{
    $("#" + rowId).remove();
}

function mergeTablesData(sourceDestiCols, destiColTypes, tablesArr, tableName, joinQueryVal, replyId)
{
    $("#Loader").css("display", "block");
    $("body").css({"pointer-events": "auto"});
    $.ajax({
        type: "POST",
        url: "insertMergeTablesData",
        cache: false,
        data: {
            sourceDestiCols: JSON.stringify(sourceDestiCols),
            destiColTypes: JSON.stringify(destiColTypes),
            tablesObj: JSON.stringify(tablesArr),
            newTableName: tableName,
            joinQueryVal: joinQueryVal
        },
        success: function (response) {
            stopLoader();
            var message;
            if (response != null && !jQuery.isEmptyObject(response)) {
                message = response['message'];
            } else {
                message = "0 Records are Imported.";
            }
            $("#dialog").html(message);
            $("#dialog").dialog({resizable: false,
                title: (labelObject["Merge Tables Data"] != null ? labelObject["Merge Tables Data"] : "Merge Tables Data"),
                modal: true,
                width: 350,
                height: 150,
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            if (replyId != null && replyId != '' && replyId != undefined) {
                                $("#intelliSenseTableId").remove();
                                var mergeTableName = $("#userMergeNewTableNameId").val();
                                var msgText = "<p class='text-right'><span id='intelliSenseTableId' class=\"existingList convai-right-message nonLoadedBubble\">" + mergeTableName + "</span><span> is Created</span></p>";
                                $("#visionChartsAutoSuggestionUserId").append(msgText);
                                showAnimatedBubbleSequnce();
                                scrollAreaToBottom();
                                showNextConversationAiMessage(replyId);
                            }


                        }

                    }],
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function voicetoText(textAreaId) {


    $(".voiceBeatClass").show();
    $(".mircoClass").hide();
    var noteContent = '';
    var instructions = $("#speechStatus");
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    /* recognition.interimResults = true;*/

    recognition.lang = $("#languageSelect").val();
    recognition.start();
    recognition.onresult = function (event) {


        var current = event.resultIndex;
        var transcript = event.results[current][0].transcript;
        noteContent += transcript;
        $("#" + textAreaId).val(noteContent);
    }

    document.querySelector(".voiceBeatClass").onclick = () => {
        $(".voiceBeatClass").hide();
        $(".mircoClass").show();
        recognition.stop();
    };
    recognition.onstart = function () {
        instructions.text('Voice recognition activated. Try speaking into the microphone.');
    }

    recognition.onspeechend = function () {
        instructions.text('You were quiet for a while so voice recognition turned itself off.');
    }

    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
            instructions.text('No speech was detected. Try again.');
        }
    }


}

function textSearch() {
    var randomNumber = generateRandomNumber();
    $("#Loader").css("display", "block");
    var message = $("#myTextarea").val();
    var language = $('#languageSelect').val();
    var userName = $("#rsUserName").val();
    var leftMessage = "<div id='leftMessageDivId" + randomNumber + "' class='leftMessageDiv'>" + message + "</div>"
    $("#searchResultText").append(leftMessage);
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: "getUserSearchData",
        traditional: true,
        cache: false,
        data: {
            message: message,
            lang: language,
            userName: userName
        },
        success: function (response) {
            ajaxStop();
            $("#Loader").css("display", "none");
            if (response != null && !jQuery.isEmptyObject(response)) {
                var searchRes = response['result'].says[0];
                var url = response['result'].urls;
                $("#searchResultText").append("<div id='messageConversation" + randomNumber + "'></div>")
                var list = "";
                if (url != undefined) {
                    var urlen = url.length
                    for (var i = 0; i < urlen; i++) {
                        list += "<a href=" + url[i] + " style=\"color:blue;\">" + url[i] + "</a><br>"
                    }
                }
                var rightMessage = "<div class='rightMessageDiv'><p>" + searchRes + "</p>" + list + "</div>"
                $("#messageConversation" + randomNumber).append(rightMessage);
            }

        },
    });
}

function linkJoinOperators() {
    var flowChartData = $("#userMergeTableColumnsDivId").flowchart('getData');
    var operators = flowChartData['operators'];
    if (operators != null && !jQuery.isEmptyObject(operators))
    {
        var keysLength = Object.keys(operators).length;
        linkMultipleJoinOperators(operators, operators['operator0'], operators['operator1'], keysLength, 1, 0);
    }
}

function linkMultipleJoinOperators(operators, fromOp, toOp, keysLength, loopCount, i) {
    if (loopCount < keysLength)
    {
        mapJoinOperators(fromOp, toOp, 'operator' + i, 'operator' + (i + 1));
        loopCount++;
        i++;
        linkMultipleJoinOperators(operators, operators['operator' + i], operators['operator' + (i + 1)], keysLength, loopCount, i)

    }
}

function mapJoinOperators(fromOp, toOp, fromOperatorId, toOperatorId) {
    var outputData = fromOp['properties']['outputs'];
    var inputData = toOp['properties']['inputs'];
    if (outputData != null && !jQuery.isEmptyObject(outputData) && inputData != null && !jQuery.isEmptyObject(inputData))
    {
        $("#visionConvAIDefaultMapLinkColumnsId").html("");
        $.each(outputData, function (outputKey, outputVal) {
            var outValue = outputVal['label'];
            $.each(inputData, function (inputKey, inputVal)
            {
                var inputValue = inputVal['label'];
                if (outValue != null && outValue != '' && outValue != undefined
                        && inputValue != null && inputValue != '' && inputValue != undefined && outValue == inputValue)
                {
                    var linkId = $("#linkDynamicId").val();
                    var linkObj = {};
                    linkObj['fromConnector'] = outputKey;
                    linkObj['fromOperator'] = fromOperatorId;
                    //linkObj['fromSubConnector'] = 0;
                    linkObj['toConnector'] = inputKey;
                    linkObj['toOperator'] = toOperatorId;
                    linkObj['color'] = 'red';
                    //linkObj['toSubConnector'] = 0;
                    $("#userMergeTableColumnsDivId").flowchart('createLink', parseInt(linkId), linkObj);
                    linkId++;
                    $("#linkDynamicId").val(linkId);
                }
            });
        });
    } else {
        $("#visionConvAIDefaultMapLinkColumnsId").html("Please adjust the Table Operators");
    }
}

function getMergeJoinCondColumns(replyId) {
    var linksObj = {};
    var flowChartData = $("#userMergeTableColumnsDivId").flowchart('getData');
    var operators = flowChartData['operators'];
    var links = flowChartData['links'];
    var linksTables = {};
    var tablesObj = [];
    if (!(links != null && !jQuery.isEmptyObject(links)))
    {
        $("#convAIMergeTableJoinColumnsLinkId").remove();
        $(".userMergeTablesJoinErrorClass").prepend("<div id='convAIMergeTableJoinColumnsLinkId' class='convAIMergeTableJoinColumnsLinkClass'>Please link join columns</div>");
    } else {
        $("#convAIMergeTableJoinColumnsLinkId").remove();
        $.each(links, function (key, val) {
            var linkData = val;
            var fromConnector = linkData['fromConnector'];
            var toConnector = linkData['toConnector'];
            var fromOperator = linkData['fromOperator'];
            var toOperator = linkData['toOperator'];
            var fromToOperator = fromOperator + toOperator;
            var fromOperatorData = operators[fromOperator];
            var fromPropertiesData = fromOperatorData['properties'];
            var fromTableName = fromPropertiesData['title'];
            var fromOutputs = fromPropertiesData['outputs'];
            var fromColName = fromOutputs[fromConnector]['label'];
            var toOperatorData = operators[toOperator];
            var toPropertiesData = toOperatorData['properties'];
            var toTableName = toPropertiesData['title'];
            var toOutputs = toPropertiesData['inputs'];
            var toColName = toOutputs[toConnector]['label'];
            if (linksObj != null && !jQuery.isEmptyObject(linksObj) && linksObj[fromToOperator] != null
                    && linksObj[fromToOperator] != '' && linksObj[fromToOperator] != undefined)
            {
                var joinCondition = " AND " + fromTableName + "." + fromColName + " = " + toTableName + "." + toColName;
                var existJoinCondition = linksObj[fromToOperator];
                linksObj[fromToOperator] = existJoinCondition + joinCondition;
            } else {
                linksObj[fromToOperator] = " ON " + fromTableName + "." + fromColName + " = " + toTableName + "." + toColName;
                linksTables[fromToOperator] = fromTableName + "." + toTableName;
                if (!(tablesObj.indexOf(fromTableName) > -1))
                {
                    tablesObj.push(fromTableName);
                }
                if (!(tablesObj.indexOf(toTableName) > -1))
                {
                    tablesObj.push(toTableName);
                }
            }
        });
        getMergeTableJoinType(linksObj, tablesObj, linksTables, replyId);
    }
}
function getMergeTableJoinType(linksObj, tablesObj, linksTables, replyId) {

    var table = "<table id='userMergeJoinTypesTableId' border='1'>"
    $.each(tablesObj, function (i, val) {
        table += "<tr><td><input type='text' value='" + val + "'/></td></tr>";
        var selectBox = "<select id='mergeTablesSelectBoxId" + i + "'>"
                + "<option value='SELECT'>Select</option>"
                + "<option value='INNER JOIN'>INNER JOIN</option>"
                + "<option value='LEFT OUTER JOIN'>LEFT OUTER JOIN</option>"
                + "<option value='RIGHT OUTER JOIN'>RIGHT OUTER JOIN</option>"
                + "<option value='FULL OUTER JOIN'>FULL OUTER JOIN</option>";
        if (i < Object.keys(tablesObj).length - 1) {
            table += "<tr><td>" + selectBox + "</td></tr>";
        }
    });
    table += "</table>";
    table += "<div class='convAIUserJoinTypes'><button onclick='getConversationalAIJoinQuery(" + JSON.stringify(linksObj) + "," + replyId + ")'>Next</button></div>";
    $("#userMergeTablesJoinTypesId").remove();
    var mainDiv = "<div id='userMergeTablesJoinTypesId' class='visionConversationalAIClass convai-left-message nonLoadedBubble'>Please Select Join Types<br>" +
            table + "</div>";
    $("#visionChartsAutoSuggestionUserId").append(mainDiv);
    showAnimatedBubbleSequnce();
    scrollAreaToBottom();
}

function getConversationalAIJoinQuery(linksObj, replyId) {
    var selectFlag = false;
    var selectCount = 0;
    $("#userMergeJoinTypesTableId tr").each(function () {
        var tdArray = this.cells;
        if (tdArray != null && tdArray.length != 0) {
            if (selectCount != 0 && selectCount % 2 == 1) {
                var selectedVal = $(tdArray[0]).find("option:selected").val();
                if (!(selectedVal != null && selectedVal != '' && selectedVal != undefined && selectedVal != 'SELECT')) {
                    selectFlag = true;
                }
            }
            selectCount++;
        }
    });
    if (selectFlag) {
        $("#convAIUserJoinTypesErrorId").remove();
        $(".convAIUserJoinTypes").append("<div id='convAIUserJoinTypesErrorId' class='convAIUserJoinTypesErrorClass'>please select join type</div>");
    } else {
        $("#convAIUserJoinTypesErrorId").remove();
        goToIntellisenseRemoveNextDiv('userMergeTablesJoinTypesQueryId');
        var i = 0;
        var j = 0;
        var joinQuery = " FROM ";
        $("#userMergeJoinTypesTableId tr").each(function () {
            var tdArray = this.cells;
            if (tdArray != null && tdArray.length != 0) {
                var selectedVal = $(tdArray[0]).find("option:selected").val();
                if (selectedVal != null && selectedVal != '' && selectedVal != undefined) {
                    var joinType = $(tdArray[0]).find("option:selected").val();
                    joinQuery += joinType + " ";
                } else {
                    var tableName = $(tdArray[0]).find("input").val();
                    joinQuery += tableName + " " + tableName + " ";
                }
                if (i != 0 && i % 2 == 0) {
                    joinQuery += linksObj[Object.keys(linksObj)[j]] + " ";
                    j++;
                }
                i++;
            }
        });
        $("#userMergeTablesJoinTypesQueryId").remove();
        var mainDiv = "<div id='userMergeTablesJoinTypesQueryId' class='visionConversationalAIClass convai-left-message nonLoadedBubble'>"
                + joinQuery + "</div>";
        $("#visionChartsAutoSuggestionUserId").append(mainDiv);
        showAnimatedBubbleSequnce();
        scrollAreaToBottom();
        showNextConversationAiMessage(replyId);
    }
}

function getMergeConvAINewTableName(replyId) {
    $("#userMergeNewTableNameDivId").remove();
    var tableNameDiv = "<div id='userMergeNewTableNameDivId' class='userMergeNewTableNameDivClass'><input type='text' id='userMergeNewTableNameId' value=''/>"
            + "<button onclick='getMergeConvAINewTable(" + replyId + ")'>Enter</button> "
            + "<div class='userMergeTableNameInputClass'></div></div>";
    var mainDiv = "<div  class='visionConversationalAIClass convai-right-message nonLoadedBubble'>"
            + tableNameDiv + "</div>";
    $("#visionChartsAutoSuggestionUserId").append(mainDiv);
    showAnimatedBubbleSequnce();
    scrollAreaToBottom();
}

function getMergeConvAINewTable(replyId) {
    var tableName = $("#userMergeNewTableNameId").val();
    if (!(tableName != null && tableName != '' && tableName != undefined))
    {
        $(".userMergeTableNameInputClass").html("Please Enter Table Name")
    } else {
        $.ajax({
            type: "post",
            traditional: true,
            url: 'checkExistMergeTableName',
            cache: false,
            data: {
                newTableName: tableName.toUpperCase()
            },
            success: function (response) {
                stopLoader();
                if (response != null) {
                    var Message = response['Message'];
                    if (Message != null && Message != '' && Message != undefined && Message.indexOf("already existed") > -1) {
                        var appendMsg = " Table Name is already Existed.please give new Table Name"
                        $(".userMergeTableNameInputClass").html(appendMsg);
                    } else {
                        $(".userMergeTableNameInputClass").html("");
                        showNextConversationAiMessage(replyId);
                    }


                }
            }, error: function (e) {
                console.log("The Error Message is:::" + e.message);
                sessionTimeout(e);
            }
        });
    }
}



function removeConvAiDuplicateTableColumns(tableName, duplicateCheckBoxVals) {
    if (duplicateCheckBoxVals != null && duplicateCheckBoxVals != '' && duplicateCheckBoxVals != undefined)
    {
        duplicateCheckBoxVals = JSON.parse(duplicateCheckBoxVals);
    }
    if (tableName != null && tableName != '' && tableName != undefined)
    {
        $("#visionConvAIDuplicatesTableRemoveId span").remove();
        $("#visionConvAIDuplicateTableButtonsRemoveId").remove();
        var messgae = "<div class='visionConversationalAIClass  convai-right-message nonLoadedBubble'>"
                + "<span class='visionConvAIDuplicateTableSelectClass'>" + tableName + "</span>"
                + "</div>";
        $("#visionChartsAutoSuggestionUserId").append(messgae);
        if (tableName == 'Manual')
        {
            var msgText = "<div  class='visionConversationalAIClass nonLoadedBubble'>"
                    + "<div class='visionConvAIDuplicateColumnsManualClass'>Please check the columns manually</div>"
                    + "<div class='userEditorMergeTableDuplicateColsErrorClass'></div>"
                    + " <div class='userMergeTableColumnsNextButtonClass'>"
                    + "<button onclick=getMergeConvAITableJoinColumns()>Proceed</button>"
                    + "</div>"
                    + "</div>";
            $("#visionChartsAutoSuggestionUserId").append(msgText);
        } else {
            $.each(duplicateCheckBoxVals, function (key, val) {
                if (tableName != key)
                {
                    $.each(val, function (i, value) {
                        $("#" + value).parent('label').parent('.convAIMergeSelectTableColumnsSpanClass').remove();
                    })
                }
            });
            $("#visionConvAIMergeTableColumnsParentId div").each(function () {
                $(this).find(":checkBox").map(function (event) {
                    var selected = $(this).attr("id");
                    $('#' + selected).prop('checked', true);
                });
                if (!($(this).find("span").length > 0))
                {
                    var divwithoutcheckId = $(this).attr('id');
                    $("#" + divwithoutcheckId).remove();
                }
            });
            getMergeConvAITableJoinColumns();
        }
        showAnimatedBubbleSequnce();
        scrollAreaToBottom();
    }
}



function onTextSearch() {

    var key = window.event.keyCode;
    if (key === 13) {
        $('#myTextarea').blur();
        textSearch();
        $("#myTextarea").val("");
    }
}
function searchTablesAi() {

    $("#searchDataContent").toggle();
}
function textSearchData() {
    var randomNumber = generateRandomNumber();
    $("#Loader").css("display", "block");
    var message = $("#textAreaId").val();
    var language = $('#languageSelect').val();
    var userName = $("#rsUserName").val();
    var [x, sessionId] = getChatbotParams();
    $.ajax({
        dataType: 'JSON',
        type: 'POST',
        url: "getChatRplyResponse",
        traditional: true,
        cache: false,
        data: {
            message: message,
            //lang: language,
            sessionId: sessionId
        },
        success: function (response) {
            ajaxStop();
            $("#Loader").css("display", "none");
            $("#textAreaId").val("");
            if (response != null && !jQuery.isEmptyObject(response)) {
                var result = response['result'];
                var query = result[sessionId];
                var editorContainer = $("#Current_V10_editor_1"); // Gets the container through the Id
                var editor = ace.edit(editorContainer["0"]);
                editor.session.setValue(query);
            }

        },
    });
}
function exportCcTable(type, id) {
    if (type == 'Excel') {
        var ExportXLS = $('#' + id).html();
        if (!ExportXLS.includes("jqx")) {

            var uri = 'data:application/vnd.ms-excel;base64,',
                    template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                    base64 = function (s) {
                        return window.btoa(unescape(encodeURIComponent(s)));
                    },
                    format = function (s, c) {
                        return s.replace(/{(\w+)}/g, function (m, p) {
                            return c[p];
                        });
                    };
            var ctx = {
                worksheet: name || '',
                table: ExportXLS
            };
            var link = document.createElement("a");
            link.download = "export.xls";
            link.href = uri + base64(format(template, ctx))
            link.click();
        } else if (type == "Excel") {
            $("#" + id).jqxGrid('exportdata', 'xls', 'jqxGrid');
        } else if (type = "CSV") {
            $("#" + id).jqxGrid('exportdata', 'csv', 'jqxGrid');
        }
    } else if (type == 'CSV') {
        $('#' + id).tableExport({
            type: 'csv',
            postCallback: function () {
                console.log('done loading my humugoid file');
            }
        });
    }

}
function generateexcel(event, tablename, flag) {
    var id = "";
    var divId = "";
    if (flag == 'Y') {
        id = "divGrid-" + tablename;
        divId = "selectPopover";
    } else {
        id = "transposeDataId";
    }
    var setId = event.target.id;
    $("#selectPopover").remove();
    $("#visualizeTablesGridData").append("<div class=\"selectPopoverCls\"id=\"selectPopover\"></div>");
    var selectionDiv = "<div id='selctionData' class='selectClass'><li id='selectXls' onclick=\"exportCcTable('Excel', '" + id + "')\"><a href='#'>XLSX</a></li><li id='selectCsv' onclick=\"exportCcTable('CSV', '" + id + "')\"><a href='#'>CSV</a></li></div>"
    $("#selectPopover").html(selectionDiv);
    $("#selectPopover").jqxPopover({
        position: 'right',
        width: 75,
        height: 78,
        showCloseButton: true,
        selector: $("#" + setId),
    });
    $('#selectPopover').jqxPopover({showArrow: true, arrowOffsetValue: 10});
    $("#selectPopover").jqxPopover('open');
    if (flag == "Y") {
        $("#selectPopover").addClass("selectPopoverChange");
    } else {
        $("#selectPopover").removeClass("selectPopoverChange");
    }

}

function getUserEditorDefaultExistedTables() {
    var divHtml = $("#visionVisualizeShowTablesDataId").html();
    if (!(divHtml != null && divHtml.length > 0)) {
        var userName = $("#rsUserName").val();
        $.ajax({
            type: "POST",
            url: "getUserTableNames",
            cache: false,
            data: {
                userName: userName,
                editorFlag: "Y"
            },
            success: function (response) {
                //TODO: Need to add Loader
                if (response != null && !jQuery.isEmptyObject(response)) {
                    var tableDiv = response['tableDiv'];
                    var htmlDiv = "<div id='visionEditorShowTablesDivId' class='visionEditorShowTablesDivClass'></div>"
                            + "<div id='visionEditorShowTablesColumnsDivId' class='visionEditorShowTablesColumnsDivClass'></div>";
                    $("#visionVisualizeShowTablesDataId").html(htmlDiv);
                    $("#visionEditorShowTablesDivId").html(tableDiv);
                    showAnimatedBubbleSequnce();
                    $('#table-search').on('keyup', function () {
                        var searchVal = $(this).val();
                        var filterItems = $('[data-intelliSenseViewTablefilter-item]');
                        if (searchVal != '') {
                            filterItems.addClass('intelliSenseViewTableshidden');
                            $('[data-filter-name*="' + searchVal.toUpperCase() + '"]').removeClass('intelliSenseViewTableshidden');
                        } else {
                            filterItems.removeClass('intelliSenseViewTableshidden');
                        }
                    });
                }

            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    }

}

function getEditorViewTableColumns(tableName) {
    $.ajax({
        type: "POST",
        url: "getIntelliSenseTableColumns",
        cache: false,
        data: {
            tableName: tableName,
            editorFlag: "Y"
        },
        success: function (response) {
            //TODO: Need to add Loader
            if (response != null && !jQuery.isEmptyObject(response)) {
                var columnDiv = response['columnDiv'];
                $("#visionEditorShowTablesColumnsDivId").html(columnDiv);
                showAnimatedBubbleSequnce();
                $('#column_search').on('keyup', function () {
                    var searchVal = $(this).val();
                    var filterItems = $('[data-intelliSenseViewColumnfilter-item]');
                    if (searchVal != '') {
                        filterItems.addClass('intelliSenseViewTableshidden');
                        $('[data-filter-name*="' + searchVal.toUpperCase() + '"]').removeClass('intelliSenseViewTableshidden');
                    } else {
                        filterItems.removeClass('intelliSenseViewTableshidden');
                    }
                });
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function toggleConvAIExampleDialog() {
    if ($('#visionChartsAutoSuggestionExampleId').is(':visible'))
    {
        $("#visionChartsAutoSuggestionExampleId").hide();
    } else {
        $("#visionChartsAutoSuggestionExampleId").show();
    }


}

function minimizeConvAIExampleDialog($this) {
    $($this).siblings(".help-button").hide();
    $("#visionChartsAutoSuggestionUserExampleParentId").hide();
    var dialog = $($this).closest(".ui-dialog");
    dialog.animate({height: "40px", width: "150px", top: "85%", left: "83%"}, 300);
    $($this).hide();
    $($this).siblings(".minimize-button").hide();
    $($this).siblings(".plus-button").show().css({right: "25px"});
}

function maximizeConvAIExampleDialog($this) {
    $("#visionChartsAutoSuggestionUserExampleParentId").show();
    var dialog = $($this).closest(".ui-dialog");
    dialog.animate({height: "550px", width: "1200px", top: "13%", left: "15%"}, 300);
    $($this).siblings(".plus-button").hide();
    $($this).hide();
    $($this).siblings(".minimize-button").show();
    $($this).siblings(".help-button").show();
    attachRemovalAction();
    showAnimatedBubbleSequnce();
}

function getIntelliSenseViewConvAIDeleteColumns($this, id) {
    $("#" + id).remove();
}

function showEditCardMenu($this, cardId, currEvt) {
    var editCardMenu = ""
    switch (currEvt) {
        case "cardEditEvt":
            editCardMenu = getCardEditMenu(cardId);
            break;
        case "aggregateEvt":
            editCardMenu = getAggregateMenu(cardId);
            break;
        default:
            console.log("Please provide card event type (edit or aggregate) :::::: ");
            return;
    }
    $("#editCardMenu").remove();
    $("#" + cardId).append("<div class=\"editCardMenuClass\" id=\"editCardMenu\"></div>");
    $("#editCardMenu").html(editCardMenu);
    var contextMenu = $("#editCardMenu").jqxMenu({width: '100px', height: 140 + 'px', autoOpenPopup: false, mode: 'popup'});
    contextMenu.jqxMenu('open', parseInt(event.clientX) + 5, parseInt(event.clientY) + 5);
    $(".dxpPageContent").scroll(function () {
        scrollPositionSubMenu($this)
    });
    $(".editCardMenuClass").hover(function () {
        $("#" + cardId).find(".homepageCardEdit").show();
    }, function () {
        $("#" + cardId).find(".homepageCardEdit").hide();
        $(this).jqxMenu('close');
        $(".dxpPageContent").unbind('scroll', scrollPositionSubMenu);
    })
}

function getCardEditMenu(cardId) {
    return `<ul>
				<li onclick=getEditCard('${cardId}')>Edit Card</li>
				<li onclick=deleteHomepageCard('${cardId}')>Delete Card</li>
			</ul>`;
}

function getAggregateMenu(cardId) {
    return `<ul>
				<li onclick=setAggregateCardHp(this,'AVG','${cardId}')>Average</li>
				<li onclick=setAggregateCardHp(this,'COUNT','${cardId}')>Count</li>
				<li onclick=setAggregateCardHp(this,'UNIQUECOUNT','${cardId}')>Count(Distinct)</li>
				<li onclick=setAggregateCardHp(this,'SUM','${cardId}')>Sum</li>
				<li onclick=setAggregateCardHp(this,'MAX','${cardId}')>Max</li>
				<li onclick=setAggregateCardHp(this,'MIN','${cardId}')>Min</li>
			</ul>`;
}

function scrollPositionSubMenu($this) {
    if ($("#editCardMenu ul").length > 0) {
        var offsetParTop = $this.getBoundingClientRect().top;
        var posTop = (offsetParTop > 0) ? offsetParTop + 9 : offsetParTop - 30;
        $("#editCardMenu").css("top", posTop);
    }

}

function deleteHomepageCard(cardId) {
    var responseHtml = '<p class=\"modalPopUpMsgText\">Are you sure you want to delete the card ?</p>';
    var buttonArray = [
        {
            text: 'Yes',
            click: function () {
                deleteCard(cardId);
            },
            isCloseButton: true
        },
        {
            text: 'No',
            click: function () {
                return;
            },
            isCloseButton: true
        }
    ];
    showPopUpWithButtonFunctionCall(responseHtml, buttonArray);
}







function editCardBasic(cardId, cardDataMain) {
    var valueStr = cardDataMain['yAxix'];
    var column = getColumnCard(valueStr);
    var cardTitle = cardDataMain['Lebel'];
    var toSaveHtml = saveCardHtml();
    var columnHtml = getCardTitle(cardTitle) + getValCol(column, cardId) + toSaveHtml;
    var modalDiv = `<div id='hpCardEditModal'></div>`;
    var buttonsArray = [
        {
            text: "Apply",
            click: function () {
                applyCardChangesHp(cardId, '', '', cardDataMain);
            },
            isCloseButton: true
        },
        {
            text: "Cancel",
            click: function () {

            },
            isCloseButton: true
        }
    ]
    showPopUpWithButtonFunctionCall(modalDiv, buttonsArray, "Edit Card");
    $("#hpCardEditModal").addClass("homepageCardEditMain");
    $(".homepageCardEditMain").prepend(columnHtml);
}



function getCardTitle(cardTitle) {
    return `<div class="homepageEditCardCurrCol">
				<span style="color: #444040;">Title</span>
				<p class="homepageCardEditColumn" id="homepageEditCardTitle" contenteditable="true">${cardTitle}</p>
			</div>`;
}

function getValCol(valColName, cardId) {

    return `<div class="homepageEditCardCurrCol">
				<span style="color: #444040;">Value</span>
				<div class='hpCardEditColDiv'>
					<p class="homepageCardEditColumn" id="hpEditCardAggCol">${valColName}</p>
					<img src="images/Horizontal_Dots.svg" title="Aggregate Functions" onclick="showEditCardMenu(this, '${cardId}','aggregateEvt')" class="hpEditCardAggrImg" style="display: inline; ">
				</div>
			</div>`;
}

function getDateCol(dateColName) {
    return `<div id="" class="visionVisualizeCardDateValueClass homepageCardDateSelect">
				<div class="innerFilterDivStrFromClass homepageCardEditInnerFrom">
					<span style="color: #444040;">Date</span>
					<div id="" class="visionVisualizeCardDateFromValueClass">
						<p class="homepageCardEditColumn homepageCardEditValueClass">${dateColName}</p>
					</div>
				</div>
				<div class="innerFilterDivStrToClass homepageCardEditInnerFrom">
					<span>Trends</span>
					<div id="" class="visionVisualizeCardDateToValueClass">
							<select id="hpCardEditTrendType" class="visionVisualizeCardDateToSelectValueClass homepageCardEditValueClass homepageCardEditColumn"
							onchange="getCardDateToSelectValue()">
								<option value="pie">Pie</option>
								<option value="donut">Donut</option>
								<option value="column">Column</option>
								<option value="lines">Line</option>
							</select>
					</div>
				</div>
		</div>`;
}

function saveCardHtml() {
    return `<div class="homepageEditedSaveCardDiv">
				<input type="checkbox" id="homepageEditedCardSave" name="saveCard" value="">
				<label class="homepageEditedCardSaveLabel" for="homepageEditedCardSave">Would you like to save the card ?</label>
			</div>`;
}



