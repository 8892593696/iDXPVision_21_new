/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getXlsxFileSheet(workbook, file, filetype, fileName, fileDataType, sheets) {
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
    uploadSmartBISelectedFileXlsx(JSONData, filetype, fileName, headersObj, sheetsArray);

    $("#visionETLXlsxFileIdAll").click(function () {
        $(".visionETLXlsxFileClass").prop('checked', $(this).prop('checked'));
    });
    var spanText = "<span class='VisionETLXlsxFileSpan'>1." + fileName + "</span>";
    $("#VisionETLXlsxFileNameId").html(spanText);
}
function uploadSmartBISelectedFileXlsx(jsonData, fileType, fileName, headersObj, sheets) {
    showLoader();
    var url;
    const myArray = fileName.split(".");
    let tableName = myArray[0];
    tableName = tableName.replace(" ", "_");
    tableName = tableName.replace(" ", "_");
    $.ajax({
        type: "post",
        traditional: true,
        url: 'importTreeChartsDMFileXlsx',
        cache: false,
        data: {
            jsonData: JSON.stringify(jsonData),
            selectedFiletype: fileType,
            fileName: fileName,
            headersObj: JSON.stringify(headersObj),
            sheets: JSON.stringify(sheets),
            newTableName: tableName.toUpperCase(),
            dmaReportFlag: $("#dmaReportId").val()
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var fileExist = response['fileExist'];
                var Message;
                if (fileExist != null && !jQuery.isEmptyObject(fileExist)) {
                    Message = fileExist['Message'];
                }
                if (Message != null && Message != '' && Message != undefined && Message.indexOf("already existed") > -1) {
                    $("#dialog").html("");
                    $("body").find(".ui-dialog-content").dialog('close');
                    $("#dialog").remove();
                    $("body").append("<div id='dialog'></div>");
                    var appendMsg = "Table name already existed, Do you want replace or Create new table";
                    $("#dialog").html(appendMsg);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        width: 350,
                        height: 200,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Replace Table'] != null ? labelObject['Replace Table'] : 'Replace Table'),
                                click: function () {
                                    checkExistingorNewTable(response, fileName, tableName);
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }
                            },
                            {
                                text: (labelObject['Create New Table'] != null ? labelObject['Create New Table'] : 'Create New Table'),
                                click: function () {
                                    getImportFileNewTableName(response, fileName);
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");

                                }
                            }

                        ],
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
                } else {
                    $("#dialog").html("");
                    $("body").find(".ui-dialog-content").dialog('close');
                    $("#dialog").remove();
                    $("body").append("<div id='dialog'></div>");
                    checkExistingorNewTable(response, fileName, tableName);
                }


            }
        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}
function getImportFileNewTableName(response, fileName) {
    var appendMsg = "please give new Table name :"
            + "<input type='text' id='importFileTableNameId' value=''/>"
            + "<div id='importFileTableNameErrorId' class='importFileTableNameErrorClass'></div>";
    $("#dialog1").html(appendMsg);
    $("#dialog1").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        width: 350,
        height: 200,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    var tableName = $("#importFileTableNameId").val();
                    if (tableName != null && tableName != '' && tableName != undefined) {
                        $("#importFileTableNameErrorId").html("");
                        checkImportedFileNewTableExist(response, fileName, tableName);
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    } else {
                        $("#importFileTableNameErrorId").html("please give table name");
                    }
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
function checkImportedFileNewTableExist(resp, fileName, tableName)
{
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
                    $("#dialog").html("");
                    $("#dialog").dialog("close");
                    $("#dialog").dialog("destroy");
                    var appendMsg = "Table Name is already Existed.please give new Table Name"
                            + "<input type='text' id='importFileTableNameId' value=''/>"
                            + "<div id='importFileTableNameErrorId' class='importFileTableNameErrorClass'></div>";
                    $("#dialog").html(appendMsg);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        width: 350,
                        height: 200,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    var tableName = $("#importFileTableNameId").val();
                                    if (tableName != null && tableName != '' && tableName != undefined) {
                                        $("#importFileTableNameErrorId").html("");
                                        checkImportedFileNewTableExist(resp, fileName, tableName);
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                    } else {
                                        $("#importFileTableNameErrorId").html("please give table name");
                                    }
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
                } else {

                    checkExistingorNewTable(resp, fileName, tableName);
                    $("#dialog").html("");
                    $("#dialog").dialog("close");
                    $("#dialog").dialog("destroy");
                }


            }
        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}
function checkExistingorNewTable(response, fileName, tableName) {
    var dataFieldsArray = response['dataFieldsArray'];
    var columnsArray = response['columnsArray'];
    var gridId = response['gridId'];
    var filePath = response['filePath'];
    tableName = tableName.replace(/[^a-zA-Z0-9_]/g, "_").replace(/_+/g, "_");
//    $(".dqopsExstingTablesItem").hide();
//    $(".dqopsExstingConnections").hide();

    var data = {
        tableName: tableName
    };

    createFileAsTable(filePath, fileName, tableName);
    var source =
            {
                type: 'POST',
                datatype: "json",
                datafields: dataFieldsArray,
                data: data,
                url: 'gettableObjectData',
                cache: false,
                root: 'Rows',
                async: false,
                processdata: function (data) {
                    showLoader();
                    data['getOnlyDataArray'] = 'Y';

                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
//                                    showLoader();
                }, loadError: function (xhr, status, error) {
                    stopLoader();
                }, loadComplete: function (data) {
                    stopLoader();
                },
                beforeprocessing: function (data) {

                    stopLoader();
                    source.totalrecords = data[data.length - 1];
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
    $("#visionSmartBiGridDataId").show();
    $("#visualizeTablesGridData").hide();
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
                height: "90%",
                theme: 'energyblue',
                autoshowloadelement: false,
                source: dataAdapter,
                pageable: true,
                pagesize: 50,
                showfilterrow: true,
                filterable: true,
                sortable: true,
                virtualmode: true,
                columnsreorder: true,
                selectionmode: 'checkbox',
                pagesizeoptions: ['50', '100', '500'],
                rendergridrows: function (params) {
                    return params.data;
                },
                columnsresize: true,
                columns: columnsArray
            });

    $("#visualizeAreaGirdData1").on('columnclick', function (event) {
        var args = event.args;
        var dataField = args.datafield;
        var dataField1 = args.text;
        var rowIndex = args.rowindex;
        var cellValue = args.value;
        var column = $('#visualizeAreaGirdData1').jqxGrid('getcolumn', event.args.datafield).text;
        var gridId123 = '#' + gridId;
        var menuItems = "";

        menuItems += "<li><input type='button' id='renameId' value='Rename Column'  onclick=renameColumnValue('" + dataField + "','" + tableName + "','" + gridId123 + "')></li>";
        menuItems += "<li><input type='button' value='Function' onclick=selectType('" + dataField + "','" + tableName + "','" + gridId123 + "')></li>";
        menuItems += "<li><input type='button' value='Suffix Value' onclick=suffixValue('" + dataField + "','" + tableName + "','" + gridId123 + "')></li>";
        menuItems += "<li><input type='button' value='Prefix Value' onclick=prefixValue('" + dataField + "','" + tableName + "','" + gridId123 + "')></li>";
        menuItems += "<li><input type='button' value='Find Value' onclick=createFind('" + dataField + "','" + tableName + "','" + gridId123 + "')></li>";
        //menuItems += "<li><input type='button' value='Remove Duplicates' onclick=deleteDuplicate('" + dataField + "','" + tableName + "','" + gridId123 + "')></li>";
        $("#jqxMenu").remove();
        $("#VisualizePageBody").append("<div id='jqxMenu'><ul></ul></div>");
        $("#jqxMenu ul").html(menuItems);
        var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: '150px', autoOpenPopup: false, mode: 'popup'});

        var scrollTop = $(window).scrollTop();
        var scrollLeft = $(window).scrollLeft();

        contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
        return false;
    });
    $("#visualizeAreaGirdData1").on('celldoubleclick', function (event) {
        var args = event.args;
        var val = $(this).text();
        var cellValue = args.value;
        var column = $('#visualizeAreaGirdData1').jqxGrid('getcolumn', event.args.datafield).text;
        $("#dialog").html(cellValue);
        $("#dialog").dialog({
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            width: 350,
            height: 200,
            fluid: true,
            open: function () {
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

}


//nikhil copy code start
function updateFilterData(id, tableName, chartType, expandChartId) { //jaggu charts
    var chartId = id;
    var filtersId = "visionVisualizeChartFiltersValues";
    var filterConditions = [];
    var filterArr = [];
    $('#' + filtersId + ' div.visionVisualizeChartFiltersFieldDivClass').each(function (i, ele) {
//        var colName = $(this).children('div:nth-child(1)').children('div:nth-child(1)').find("span").text();
        var colName = $(this).children('div:nth-child(1)').children('div:nth-child(1)').find("input").val();
        var operator = $(this).children('div:nth-child(1)').children('div:nth-child(2)').find("select").val();
        var values = $(this).children('div:nth-child(2)').find('input[name="visionVisualizeChartFiltersValuesCheckName"]:checked').map(function () {
            return this.value;
        }).get().join(",");
        if (!(values != null && values != '' && values != undefined)) {
            var checkId = $(this).children('div:nth-child(2)');
            var checkValues = $("#" + checkId[0]['id']).jqxListBox('getCheckedItems');
            values = [];
            $.each(checkValues, function (index) {
                values.push(this.value);
            });
            if (values != null && !jQuery.isEmptyObject(values)) {
                values = values.toString();
            }
        }
        var filterObj = {};
        filterObj['colName'] = colName;
        filterObj['operator'] = operator;
        filterObj['values'] = values;
        filterConditions.push(filterObj);
        alert("values");
    });
    if (filterConditions != null && !jQuery.isEmptyObject(filterConditions)) {
        filterConditions = JSON.stringify(filterConditions);
    }

    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'html',
        cache: false,
        url: 'getChartFilterData',
        async: true,
        data: {
            chartId: chartId,
            tableName: tableName,
            chartType: chartType,
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
                        if (XAxix != null && XAxix != '' && yAxix != null && yAxix != '' && type != 'Card') {
                            var chartid = id;
                            if (expandChartId != null && expandChartId != '' && expandChartId != undefined) {
                                var chartExtendPropObj = $("#homepageChartDiv_options").val();
                                if (chartExtendPropObj != null && chartExtendPropObj != '' && chartExtendPropObj != undefined) {
                                    chartPropObj = chartExtendPropObj;
                                }
                                $("#homepageChartDiv_filter").val(filterConditions);
                                getExpandVisualizeChart(chartid, chartType, XAxix, yAxix, table, aggColumnName, filterConditions, chartPropObj, chartConfigObj, count, '', expandChartId);
                            } else {
                                var chartExtendPropObj = $("#" + chartid + "_options").val();
                                if (chartExtendPropObj != null && chartExtendPropObj != '' && chartExtendPropObj != undefined) {
                                    chartPropObj = chartExtendPropObj;
                                }
                                $("#" + chartid + "_filter").val(filterConditions);
                                getVisualizeChart(chartid, type, XAxix, yAxix, table, aggColumnName, filterConditions, chartPropObj, chartConfigObj, count, labelLegend);
                            }

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

function callElements(event) {
    var value = event.target.innerHTML;
    if (value != null && value == 'Single') {
        keySearch();
        document.getElementById("SearchResult").focus();
        $('.createpopupClass').hide();
    } else {
        loadETL('NIMIC');
        $('.createpopupClass').hide();
    }
}

function getdashboardname(dashbordid) {
    var tabid = $(dashbordid).attr('id');
    var tabid = $(dashbordid).attr('id');
    var dashbordtitle = $('#DxpdashbordoptionListId option:selected').text();
    var dashbordname = $('#DxpdashbordoptionListId option:selected').val();
    getVisualizationchart(dashbordname, dashbordtitle);
}

function getconfigchartobj(chartid, chartType, chartOptAllObj, filteredchartOptAllObj, chartData) {
//    consol.log("test");
    var labels = chartData[0].labels;
    var values = chartData[0].values;
    var r = chartData[0].r;
    var theta = chartData[0].theta;
    $.ajax({
        type: "POST",
        url: "getconfigobject",
        cache: false,
        dataType: 'json',
        data: {
            chartId: chartid,
            chartType: chartType,
            chartOptAllObj: JSON.stringify(chartOptAllObj),
            chartConfigPositionKeyStr: JSON.stringify(filteredchartOptAllObj),
            chartData: chartData
        },
        success: function (response) {

            $("#homepagecreatepopupId").remove();
            var dataPropObject = response['jsonChartFilterObj'];
            var dataPropObj = dataPropObject['dataPropObject'];
            dataPropObj['type'] = chartType;
            if (chartType !== null && chartType !== '' && chartType !== undefined && (chartType == 'pie' || chartType == 'donut')) {
                dataPropObj['labels'] = labels;
                dataPropObj['values'] = values;
            } else if (chartType !== null && chartType !== '' && chartType !== undefined && chartType == 'scatterpolar') {
                dataPropObj['r'] = r;
                dataPropObj['theta'] = theta;
            }
            var layout = dataPropObject['layout'];
            var data = [];
            data.push(dataPropObj);
            //  var layout ={};
            //                     layout['showlegend'] = true;
            //                    $.each(layoutObj, function (key, val)
            //                    {
            //                        layout[key] = val;
            //                    });
            var config = {
                responsive: true,
                displayModeBar: true,
                downloadImage: true,
                displaylogo: false,
                //                   }}],
                modeBarButtonsToRemove: ['pan2d', 'zoomIn2d', 'zoomOut2d', 'sendDataToCloud', 'hoverClosestCartesian', 'autoScale2d', 'lasso2d', 'select2d', 'zoom2d']
            };
            layout['height'] = 400;
            //  layout['width'] = 400;
            layout['legend'] = {
                x: 1.2,
                y: 0.5
            };
            if (chartType != null && chartType != '' && chartType != undefined && (chartType == 'pie' || chartType == 'donut' || chartType == 'scatterpolar')) {
                layout['margin'] = {
                    l: 20,
                    r: 0,
                    b: 30,
                    t: 40
                };
            } else {
                layout['margin'] = {
                    l: 100,
                    r: 20,
                    b: 150,
                    t: 30
                };
            }
            var polar = {
                radialaxis: {
                    visible: true
                },
                showlegend: true
            };
            if (chartType == 'scatterpolar') {
                layout['polar'] = polar;
            }
            $("#homepageChartDiv").empty();
            Plotly.newPlot('homepageChartDiv', data, layout, config);
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function updatechartCinfig(chartid, chartOptAllObj, filteredchartOptAllObj) {
    console.log("chartOptAllObj" + chartOptAllObj);
    $.ajax({
        type: "POST",
        url: "getconfigobject",
        cache: false,
        dataType: 'json',
        data: {
            chartId: chartid,
            chartOptAllObj: JSON.stringify(chartOptAllObj),
            chartConfigPositionKeyStr: JSON.stringify(filteredchartOptAllObj)
        },
        success: function (response) {
            console.log(response);
            if (response != null && response != '') {
                //                getVisualizeChart(chartid, chartType, axix, values, table, aggColumnName, filterCondition, chartPropObj, chartConfigObj);
            }


        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function filterMappingTablesAnalytics() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var item = $("#ivisualizationConnections").jqxTree('getSelectedItem');
    //['Tables', 'Views', 'Synonyms'];
    if (item != null && (item['value'] == 'TABLES'
            || item['value'] == 'VIEWS'
            || item['value'] == 'SYNONYMS')) {
        var hiddenFieldId = "DATABASE_" + item['value'] + "_hidden";
        hiddenFieldId = hiddenFieldId.replace(/ /g, '_');
        hiddenFieldId = hiddenFieldId.replace(/\//g, '_');
        var prevFilterVal = $("#" + hiddenFieldId).val();
        var tableData = "<input type='text' id='tableId' class='visionETLFilterInputs' readonly=true value='" + item['label'] + "'/>"
                + "<select id='operatorId' class='visionETLFilterInputs'>"
                + "<option value='LIKE'>LIKE</option>"
                + "<option value='NOT LIKE'>NOT LIKE</option>"
                + "<option value='='>=</option>"
                + "<option value='!='>!=</option>"
                + "</select>"
                + "<input type='text' id='valueId' class='visionETLFilterInputs' value= ''/>";
        $("#dialog").html(tableData);
        $("#dialog").dialog({resizable: false,
            title: (labelObject[item['label'] + ' Filter Form'] != null ? labelObject[item['label'] + ' Filter Form'] : item['label'] + ' Filter Form'),
            modal: true,
            width: 610,
            height: 150,
            fluid: true,
            buttons: [{
                    text: (labelObject['Search'] != null ? labelObject['Search'] : 'Search'),
                    id: 'tableSearchButton', // --------code edit---
                    click: function () {
                        var value = $("#valueId").val();
                        var selectBoxValue = $("#operatorId option:selected").text();
                        $("#" + hiddenFieldId).remove();
                        var hiddenField = "<input type='hidden' id='" + hiddenFieldId + "' value=''/>";
                        $("#ivisualizationConnections").append(hiddenField);
                        if (value != null && value != '' && value != undefined) {//26-5-2022
                            value = value.toUpperCase();
                        }
                        var jsFilterObj = {};
                        jsFilterObj.filterType = selectBoxValue;
                        jsFilterObj.filterValue = value;
                        $("#" + hiddenFieldId).val(JSON.stringify(jsFilterObj));
                        showLoader();
                        getFilteredValuesAnalytics(value, item['value'], item['level'], selectBoxValue);
                        $(this).html("");
                        //$(this).dialog("close");
                        $(this).dialog("destroy");
                    }

                }, {
                    text: (labelObject['Reset'] != null ? labelObject['Reset'] : 'Reset'),
                    click: function () {
                        $("#valueId").val("");
                        $("#operatorId").val("LIKE");
                        $("#" + hiddenFieldId).remove();
                        var hiddenField = "<input type='hidden' id='" + hiddenFieldId + "' value=''/>";
                        $("#ivisualizationConnections").append(hiddenField);
                        $("#treeETLFilterImage").attr('src', "images/Filter Icon-01.svg");
                    }

                }],
            open: function () {
                //-----------  enter func start---------------
                $("#valueId").keyup(function (event) {
                    if (event.keyCode === 13) {
                        $("#tableSearchButton").click();
                    }
                });
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
                $(".ui-dialog").addClass('visionDMTreePopup');
            },
            beforeClose: function (event, ui) {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }, close: function (event, ui) {


            }
        });
        if (prevFilterVal != null && prevFilterVal != '' && prevFilterVal != undefined) {
            prevFilterVal = JSON.parse(prevFilterVal);
            $("#operatorId").val(prevFilterVal['filterType']);
            $("#valueId").val(prevFilterVal['filterValue']);
        }
    } else {
        $("#dialog").html(labelObject['Please Select Views/Tables/Synonyms for filter'] != null ? labelObject['Please Select Views/Tables/Synonyms for filter'] : 'Please Select Views/Tables/Synonyms for filter');
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            width: 300,
            height: 120,
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
                $(".ui-dialog").addClass('visionDMTreePopup');
            },
            beforeClose: function (event, ui) {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }, close: function (event, ui) {

            }
        });
    }

}

function getFilteredValuesAnalytics(filterValue, selectedTreeValue, level, filterOperator) {
    var treeId = 'ivisualizationConnections'
    var parentItem = $('#' + treeId).jqxTree('getSelectedItem');
    if (!(parentItem != null && parentItem.length > 0)) {
        parentItem = getItemsByLabelJqxTree('ivisualizationConnections', selectedTreeValue)
    }
    var schemaObjectType = parentItem.label;

    var $element = $(parentItem.element);
    var url = 'getCurrentDBTables';
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: url,
        cache: false,
        data: {
            schemaObjectType: selectedTreeValue,
            level: level,
            filterOperator: filterOperator,
            filterValue: filterValue,
            start: 0,
            limit: 50
        },
        success: function (response, status, xhr) {
            stopLoader();

            var data = response['treeObjArray'];
//            for (var i in data) {
//                if (data[i].label) {
//                    data[i].label = "" + data[i].label + "<span id='apiForm_" + data[i].label + "' class='apiFormLabelsClass' onclick='validationOptionForDQOPS()'><img src='images/threedots.png' style='width:12px;height:12px;'/></span>";
//                }
//            }
            searchTypeItemsList.push(selectedTreeValue);
            var children = $element.find('ul:first').children();
            if (children != null && children.length > 0) {
                $.each(children, function (index) {
                    $('#' + treeId).jqxTree('removeItem', this)
                })

            }

            $('#' + treeId).jqxTree('addTo', data, parentItem);
            setTimeout(function () {
                if (searchTypeItemsList.includes('TABLES')) {
                    var parentTablesItem = getItemsByLabelJqxTree('ivisualizationConnections', 'TABLES');
                    $("#" + treeId).jqxTree('expandItem', parentTablesItem);

                }
                if (searchTypeItemsList.includes("VIEWS")) {
                    var parentViewsItem = getItemsByLabelJqxTree('ivisualizationConnections', 'VIEWS');
                    $('#' + treeId).jqxTree('expandItem', parentViewsItem);
                }
            }, 500);

            var items = $('#' + treeId).jqxTree('getItems');
            $.each(items, function () {
                $(this.titleElement).attr('title', this.value);
                $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                if (this.value == "Show More") {
                    var childLength = this.element.children['length'];
                    var expandDiv = this.element.children[0];
                    if (childLength > 3) {
                        var div = this.element.children[1];
                        var checkBoxDiv = this.element.children[2];
                        $("#" + expandDiv.id).remove();
                        $("#" + div.id).remove();
                        $("#" + checkBoxDiv.id).addClass('visionETLCheckboxEmptySpace');
                    } else {
                        $("#" + expandDiv.id).remove();
                    }
                }
            });

            $('#' + treeId).on('mousedown', function (event) {

                var target = $(event.target).parents('li:first')[0];
                var rightClick = isRightClick(event);
                if (rightClick && target != null) {
                    $('#' + treeId).jqxTree('selectItem', target);

                    var selectedItem = $('#' + treeId).jqxTree('getSelectedItem');
                    var selectedParentItem = {};
                    try {
                        selectedParentItem = $('#' + treeId).jqxTree('getItem', selectedItem.parentElement);
                        if (selectedParentItem != null) {
                            selectedParentItem = $('#' + treeId).jqxTree('getItem', selectedParentItem.parentElement);
                        }
                    } catch (e) {
                    }
                    if (selectedItem.level == 1) {
                        var menuItems = "";
                        var menuHeight;
                        var rightClickFunc = "View Data:viewAnalyticsTableData()";
                        if (rightClickFunc != null) {
                            var options = rightClickFunc.split(";");
                            menuHeight = options.length;
                            $.each(options, function (index) {
                                var menuItem = options[index].split(":")[0];
                                var funcName = options[index].split(":")[1];
                                menuItems += "<li onclick='" + funcName + "'>" + menuItem + "</li>"
                            });
                        }

                        $("#jqxMenu").remove();
                        $("body").append("<div id='jqxMenu'><ul></ul></div>");
                        $("#jqxMenu ul").html(menuItems);
                        var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup', theme: 'energyblue'}); // ravi start
                        var scrollTop = $(window).scrollTop();
                        var scrollLeft = $(window).scrollLeft();
                        contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                        return true;



                    } else { // ravi end
                        return false;
                    }

                }
            });


            // disable the default browser's context menu.
            $(document).on('contextmenu', function (e) {
                if ($(e.target).parents('.jqx-tree').length > 0) {
                    return false;
                }
                return true;
            });
            $('#mainSplitter').resize();



        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });



}

function echartToolBar(chartType) {
    var feature = {
        dataView: {show: true, readOnly: false},
        restore: {show: true},
        saveAsImage: {show: true},
        myTool1: {
            show: true,
            title: 'custom method',
            icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
            onclick: () => this.alertFun()
        },
    };
    return feature;
}

function changegraph(chartId, chartType, layout, data, createcount) {
    if (chartType != null && chartType != undefined && chartType != '' && chartType === 'indicator') {
        showAnalyticsMsg("Error", "Indicator to any other chart conversion not possible", "chartChangeIndicatorErrorMsg");
        return;
    }
    var axisColsLen = parseInt($('#' + chartId + '_dynamic_XAxisLength').val());
    var valuesColsLen = parseInt($('#' + chartId + '_dynamic_YAxisLength').val());
    var parrantId = $("#" + chartId).parent().parent().attr('id');
    var result = "";
    if (axisColsLen != null && axisColsLen != '' && axisColsLen != undefined &&
            valuesColsLen != null && valuesColsLen != '' && valuesColsLen != undefined)
    {
        result = "<div id='charttypeId' class ='charttypeId'><div id='visionVisualizeBasicTabs' class='visionVisualizeChartsTabsClass'>";
        if (axisColsLen == 1 && valuesColsLen >= 2) {
            result += "<img onclick=\"getDashboard('bar','" + chartId + "','" + chartType + "','" + createcount + "')\" src='images/Bar.svg' class='visualDarkMode' title='Bar chart'>"
                    + "<img onclick=\"getDashboard('column','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Column.svg' class='visualDarkMode' title='Column chart'>"
                    + "<img onclick=\"getDashboard('lines','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Line.svg' class='visualDarkMode' title='Line chart'>"
                    + "<img onclick=\"getDashboard('scatter','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Scatter.svg' class='visualDarkMode' title='Scatter chart'>"
                    + "<img onclick=\"getDashboard('scatterpolar','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Redar-Chart.svg' class='visualDarkMode' title='Radar chart'>"
                    + "<img onclick=\"getDashboard( 'funnel','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Funnel.svg' class='visualDarkMode' title='Funnel chart'>"
                    //			+ "<img onclick=\"getDashboard( 'candlestick','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Candlestick.svg' class='visualDarkMode' title='Candlestick chart'>"
                    + "<img onclick=\"getDashboard( 'waterfall','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Waterfall.svg' class='visualDarkMode' title='Waterfall chart'>"
                    + "<img onclick=\"getDashboard( 'StackedAreaChart','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/StackedAreaChart.png' class='visualDarkMode' title='Stacked Area chart'>"
                    + "<img onclick=\"getDashboard( 'GradStackAreaChart','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/GradientStackedAreaChart.png' class='visualDarkMode' title='Gradient Stacked Area chart'>"

        }
        if (axisColsLen == 1 && valuesColsLen == 1) {
            result += "<img onclick=\"getDashboard('pie','" + chartId + "','" + chartType + "','" + createcount + "')\" src='images/Pie.svg' class='visualDarkMode' title='Pie chart'>"
                    + "<img onclick=\"getDashboard('bar','" + chartId + "','" + chartType + "','" + createcount + "')\" src='images/Bar.svg' class='visualDarkMode' title='Bar chart'>"
                    + "<img onclick=\"getDashboard('donut','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Donut.svg' class='visualDarkMode' title='Donut chart'>"
                    + "<img onclick=\"getDashboard('column','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Column.svg' class='visualDarkMode' title='Column chart'>"
                    + "<img onclick=\"getDashboard('lines','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Line.svg' class='visualDarkMode' title='Line chart'>"
                    + "<img onclick=\"getDashboard('scatter','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Scatter.svg' class='visualDarkMode' title='Scatter chart'>"
                    + "<img onclick=\"getDashboard('scatterpolar','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Redar-Chart.svg' class='visualDarkMode' title='Radar chart'>"
                    + "<img onclick=\"getDashboard( 'funnel','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Funnel.svg' class='visualDarkMode' title='Funnel chart'>"
                    //			+ "<img onclick=\"getDashboard( 'candlestick','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Candlestick.svg' class='visualDarkMode' title='Candlestick chart'>"
                    + "<img onclick=\"getDashboard( 'waterfall','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Waterfall.svg' class='visualDarkMode' title='Waterfall chart'>"
                    + "<img onclick=\"getDashboard( 'BasicAreaChart','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/BasicAreaChart.png' class='visualDarkMode' title='Basic Area chart'>"
                    + "<img onclick=\"getDashboard( 'AreaPiecesChart','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/AreaPiecesChart.png' class='visualDarkMode' title='Funnel chart'>"
                    + "</div>";

        }
        if (axisColsLen >= 2 && valuesColsLen == 1) {
            result += "<img onclick=\"getDashboard('treemap','" + chartId + "','" + chartType + "','" + createcount + "')\" src='images/Tree_Chart.svg' class='visualDarkMode' title='Tree Map'>"
                    + "<img onclick=\"getDashboard('sunburst','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Sunburst_Inner_Icon.svg' class='visualDarkMode' title='Sunburst'>"
                    + "<img onclick=\"getDashboard('sankey','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/sankey_chart.png' class='visualDarkMode' title='Sankey'>";
        }
        if (axisColsLen == 2 && valuesColsLen == 1) {
            result += "<img onclick=\"getDashboard('heatMap','" + chartId + "','" + chartType + "','" + createcount + "')\" src='images/HeatMap_Inner_Icon.svg' class='visualDarkMode' title='Heat Map'>";
        }
        result += "</div>";
    } else {
        result = "<div id='charttypeId' class ='charttypeId'>"
                + "<div id='visionVisualizeBasicTabs' class='visionVisualizeChartsTabsClass'>"
                + "<img onclick=\"getDashboard('pie','" + chartId + "','" + chartType + "','" + createcount + "')\" src='images/Pie.svg' class='visualDarkMode' title='Pie chart'>"
                + "<img onclick=\"getDashboard('bar','" + chartId + "','" + chartType + "','" + createcount + "')\" src='images/Bar.svg' class='visualDarkMode' title='Bar chart'>"
                + "<img onclick=\"getDashboard('donut','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Donut.svg' class='visualDarkMode' title='Donut chart'>"
                + "<img onclick=\"getDashboard('column','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Column.svg' class='visualDarkMode' title='Column chart'>"
                + "<img onclick=\"getDashboard('lines','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Line.svg' class='visualDarkMode' title='Line chart'>"
                + "<img onclick=\"getDashboard('scatter','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Scatter.svg' class='visualDarkMode' title='Scatter chart'>"
                + "<img onclick=\"getDashboard('scatterpolar','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Redar-Chart.svg' class='visualDarkMode' title='Radar chart'>"
                + "<img onclick=\"getDashboard( 'funnel','" + chartId + "','" + chartType + "','" + createcount + "')\"  src='images/Funnel.svg' class='visualDarkMode' title='Funnel chart'>"
                + "</div>";
        result += "</div>";
    }
    $("#dxpColorPopOver").remove();
    $("#dxpCreatePopOver").html("<div id='dxpColorPopOver'></div>");
    $("#dxpColorPopOver").html(result);
    $("#dxpColorPopOver").jqxPopover('open');
    var selector, select;
    if (chartType != null && chartType != '' && chartType != undefined && eChartsArrList.indexOf(chartType) > -1) {
        select = $("#" + chartId + "_toolBox").find($("li[title='Chart Types']"));
    } else {
        selector = $("#" + chartId).find('.modebar-btn').find($("a[data-title='Chart Types']"));
        select = $(selector['prevObject'][4]);
    }
    $("#dxpColorPopOver").jqxPopover({
        offset: {left: 0, top: 0},
        position: 'left',
        width: 150,
        height: "auto",
        title: "graph Types",
        showCloseButton: true,
        selector: select
    });
    $("#dxpColorPopOver").jqxPopover('open');
    $("#dxpColorPopOver").addClass('homepageChartTypePopup');
    //$('#dxpColorPopOver').jqxPopover({showArrow: true, arrowOffsetValue: 10});

}


function updategraphtypes(chartConfigObj, chartPropObj, chartid, charttype) {
    $.ajax({
        type: "POST",
        url: "updateGraphProperties",
        cache: false,
        dataType: 'json',
        async: false,
        data: {
            chartConfigObjchartConfigObj: chartConfigObj,
            chartPropObj: chartPropObj,
            chartid: chartid,
            charttype: charttype
        },
        success: function (response) {
            if (response != null) {
                var message = response['result'];
                var modalObj = {
                    body: "<div class='isPopupDefaultSaveClass'>" + message + "</div>",
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $("#dataDxpSplitterValue").addClass('changeGraphPopup');
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function getEChartTypes(chartId, chartType, layout, data, createcount) {

    var parrantId = $("#" + chartId).parent().parent().attr('id');
    var result = "<div id='charttypeId' class ='charttypeId'>"
            + "<div id='visionVisualizeBasicTabs' class='visionVisualizeChartsTabsClass'>"
            + "<img onclick=\"getEchartDashBoard('sunburst','" + chartId + "','" + chartType + "','" + createcount + "')\" src='images/Sunburst.svg' class='visualDarkMode' title='SunBurst chart'>"
            + "<img onclick=\"getEchartDashBoard('treemap','" + chartId + "','" + chartType + "','" + createcount + "')\" src='images/Tree_Chart.svg' class='visualDarkMode' title='TreeMap chart'>"
            + "</div>";
    result += "</div>";
    $("#dxpColorPopOver").remove();
    $("#dxpCreatePopOver").html("<div id='dxpColorPopOver'></div>");
    $("#dxpColorPopOver").html(result);
    //$("#dxpColorPopOver").jqxPopover('open');
    $("#dxpColorPopOver").jqxPopover({
        offset: {left: 0, top: 0},
        position: 'right',
        width: 150,
        height: 150,
        // autoClose: true,
        title: "graph Types",
        showCloseButton: true,
        selector: $("#" + chartId + "_echartTypes"),
        position: 'left'
    });
    $("#dxpColorPopOver").jqxPopover('show');
    // $('#dxpColorPopOver').jqxPopover({showArrow: true, arrowOffsetValue: 10});


}




function mergeColumntwthData(tablename, exisFlag) {
    $("#visionVisualizationDataChartcount").hide();
    //    $(".VisionImageVisualizationTableClass").css("display","none");
    $.ajax({
        type: "POST",
        url: "mergeformdata",
        cache: false,
        dataType: 'json',
        data: {
            tablename: tablename
        },
        success: function (response) {
            console.log(response);
            var columnstr = response['columnobj'];
            var seperatorstr = response['seperatorobj'];
            $("#seperatorListId").append(seperatorstr);
            $("#createColumnId").css("display", "block");
            $("#dialog").html(seperatorstr);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Upload'] != null ? labelObject['Upload'] : 'Upload'),
                width: 500,
                height: 350,
                fluid: true,
                buttons: [{
                        text: (labelObject['Apply'] != null ? labelObject['Apply'] : 'Apply'),
                        click: function () {
                            var valesArr = []
                            $(".visionVisualizeChartFiltersValuesCheckBox").each(function (i) {
                                var isChecked = $(this).prop("checked")
                                if (isChecked) {
                                    var value = $(this).val();
                                    valesArr.push(value);
                                }
                            });
                            var seperator = $("#DelimiteDropDownId").val();
                            var Columnname = $("#createColumnId").val();
                            var CaseVal = $("#CasesensetiveId").val();
                            //                            if (Columnname != null && Columnname != undefined && Columnname != '') {
                            //                                transformData(tablename, null, '', Columnname);
                            //                            }
                            if (valesArr != null && valesArr.length > 0) {
                                if (seperator != null && seperator == 'Custome' && Columnname != null && Columnname != '') {
                                    seperator = $("#customeValId").val();
                                    transformData(tablename, valesArr, seperator, Columnname, exisFlag);
                                } else if (seperator != null && seperator != 'Custome' && Columnname != null && Columnname != '') {
                                    transformData(tablename, valesArr, seperator, Columnname, exisFlag);
                                }
                                if (CaseVal != null && CaseVal != 'SELECT') {
                                    CaseSensitive(tablename, CaseVal, valesArr);
                                } else {
                                    transformData(tablename, valesArr, seperator, Columnname, exisFlag);
                                }
                                $(this).html("");
                                $(this).dialog("destroy");
                                //                                $(this).dialog("destroy");                                                           

                            } else {
                                transformData(tablename, null, '', Columnname, exisFlag);
                            }

                        }
                    },
                    {
                        text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("destroy");
                        }

                    }
                ],
                open: function () {

                },
                beforeClose: function (event, ui) {

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



function CaseSensitive(Columnnmae, tablename) {
    var CaseVal = $("#CasesensetiveId").val();
    $.ajax({
        type: "POST",
        url: "caseSensitive",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            tablename: tablename,
            CaseVal: CaseVal,
            Columnvalue: (Columnnmae).toUpperCase()
        },
        success: function (response) {
            $("#dialog").html("");
            $("#dialog").dialog("close");
            $("#dialog").dialog("destroy");
            //            showtableData(tablename);
            showalterColumnData(tablename);
            showFileToDxpTableData(tablename);
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}


function transformData(tablename, columnArr, seperator, Columnname, exiFlag) {
    $("#visionVisualizationDataChartcount").hide();
    $.ajax({
        type: "POST",
        url: "transformdata",
        cache: false,
        dataType: 'html',
        data: {
            tablename: tablename,
            seperator: seperator,
            Columnvalue: JSON.stringify(columnArr),
            Columnname: Columnname
        },
        success: function (response) {
            console.log(response);
            showtableData(tablename, exiFlag);
            showFileToDxpTableData(tablename, exiFlag);
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}


function DimensionTranspose(event, tablename, exiFlag) {
    $("#visionVisualizationDataChartcount").hide();
    //    $("#visualizeAreaGirdData1").html("");
    $("#visualizeAreaGirdData").html("");
    //   $(".VisionImageVisualizationTableClass").css("display","none");
    //    $("#visualizeAreaGirdData1").hide();
    //    $("#visualizeAreaGirdData").remove();
    //    $("#alterColumnData").remove();
    //    $("#transposeDataId").remove();

    var gridId = "";
    if (exiFlag == "Y") {
        gridId = "divGrid-" + tablename;
        $("#visionSmartBiGridDataId").show();
        $("#visionSmartBiGridDataId").addClass("visionSmartBiChangeClass");
    } else {
        gridId = "transposeDataId";
        $("#visionSmartBiGridDataId").removeClass("visionSmartBiChangeClass");
    }

    $("#" + gridId).html("");
    $.ajax({
        type: "POST",
        url: "DimensionTransposeColumn",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            tablename: tablename
        },
        success: function (response) {


            $("#dialog").html(response);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Dimension Transpose'] != null ? labelObject['Dimension Transpose'] : 'Dimension Transpose'),
                width: 500,
                height: 350,
                fluid: true,
                buttons: [{
                        text: (labelObject['Apply'] != null ? labelObject['Apply'] : 'Apply'),
                        click: function () {
                            var valesArr = []
                            $(".visionVisualizeChartTransposeCheckBox").each(function (i) {
                                var isChecked = $(this).prop("checked");
                                if (isChecked) {
                                    var value = $(this).val();
                                    var data = ($(this).parent('.checkbox').index() + 1);
                                    valesArr.push(value);
                                }
                            });
                            if (valesArr != null && valesArr.length > 0) {
                                $.ajax({
                                    type: "POST",
                                    url: "DimensionTransposedata",
                                    cache: false,
                                    dataType: 'json',
                                    async: false,
                                    data: {
                                        tablename: tablename,
                                        Values: JSON.stringify(valesArr)
                                    },
                                    success: function (response) {
                                        var data = response['data'];
                                        var result = response['result'];
                                        var columnList = response['ColumnName'];
                                        $("#btnGroup").append("<img src='images/Generate-tables-icon.png' id='VisionImageVisualizationTableId' class='VisionImageVisualizationTableClass' onclick=createTransposeTable(event,'" + tablename + "') title='Create and save'/>");
                                        $("#visualizeAreaGirdData1").html("");
                                        $("#visualizeAreaGirdData").html("");
                                        $("#visualizeAreaGirdData1").hide();
                                        $("#visualizeAreaGirdData").remove();
                                        $("#alterColumnData").remove();
                                        $("#transposeDataId").remove();
                                        $("#visionSmartBiGridDataId").append("<div id ='transposeDataId' class='transposeDataClass'>");
                                        $("#" + gridId).append(result);
                                    },
                                    error: function (e) {
                                        console.log(e);
                                        sessionTimeout(e);
                                        stopLoader();
                                    }
                                });
                                $(this).html("");
                                $(this).dialog("destroy");
                                //                                $(this).dialog("destroy");                                                           

                            } else {
                                //                            showerrormsg(); 
                            }

                        }
                    },
                    {
                        text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("destroy");
                        }

                    }
                ],
                open: function () {

                },
                beforeClose: function (event, ui) {

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

function createTransposeTable(event, tablename) {
    var columnList = [];
    var colLength = $("table > tbody > tr:first > td").length;
    for (var k = 0; k < colLength; k++) {
        var colName = $("table > thead > tr:first > th:eq(" + k + ")").text();
        alert(colName);
        if (colName != null && colName != '' && colName != undefined) {
            columnList.push(colName);
        }

    }
    var propertCOlumn = $("#propertiesId").val();
    var Values = $("#ValuesId").val();
    if (propertCOlumn != null && propertCOlumn != '' && propertCOlumn != undefined &&
            Values != null && Values != '' && Values != undefined) {
        columnList.push(propertCOlumn);
        columnList.push(Values);
        var colLength = columnList.length;
        var items = [];
        var itemsList = [];
        $('#tansposetableId tbody tr td').each(function (event) {
            let value = $(this).text();
            items.push(value);
            event = event + 1;
            if (event % colLength == 0) {
                itemsList.push(items);
                items = [];
            }
        });
        $.ajax({
            type: "POST",
            url: "createTransposeTable",
            cache: false,
            dataType: 'html',
            async: false,
            data: {
                tablename: tablename,
                columnList: JSON.stringify(columnList),
                data: JSON.stringify(itemsList)
            },
            success: function (response) {
                if (response != null) {
                    $("#dialog").html(response);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Upload'] != null ? labelObject['Upload'] : 'Upload'),
                        width: 300,
                        height: 200,
                        fluid: true,
                        open: function () {

                        },
                        beforeClose: function (event, ui) {

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

function ChooseOptions(event, tableName) {
    $("#VisionImageVisualizationTableId").css("display", "none"); //5 setp/22
    //    $("#visualizeAreaGirdData1").html("");
    $("#visualizeAreaGirdData").html("");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "alterBiTableCol",
        cache: false,
        data: {
            tableName: tableName
        },
        success: function (response) {
            stopLoader();
            if (response != null) {
                var dataArray = response['data'];
                var dataTypesList = response['dataTypesList'];
                var pkColsList = response['pkColsList'];
                $("#alterTablePKList").val(pkColsList);
                var divStr = "<div id = 'tableAlterDiv'>"
                        + "<div id='alterTableOptions' class='visionAlterTableOptions' style='display:flex;'>"
                        + "<img class='visionEditOptions'  src='images/commit_icon.png' style='display:block; width:18px;height: 18px;cursor:pointer;padding-left:3px;margin-right:5px;' onclick=processAlterTable('" + tableName + "') title='Commit'>"
                        + "</div>"
                        + "<div id='tableAlterGrid'></div>"
                        + "</div>";
                $("#dialog").html(divStr);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Alter Table'] != null ? labelObject['Alter Table'] : 'Alter Table'),
                    modal: true,
                    width: 1200,
                    height: 600,
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
                        var source =
                                {
                                    localdata: dataArray,
                                    datatype: "array",
                                    loadComplete: function (data) {
                                        //                                        

                                    },
                                    rendered: function () {

                                    }

                                };
                        var dataAdapter = new $.jqx.dataAdapter(source);
                        var inputRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {//overflow-y:scroll;height:100%;
                            if (columnfield == 'columnName') {
                                var html = defaulthtml;
                                if (value == null || value == "") {
                                    html = '<input type="text" id="alterTablecolumnName_' + row + '" dataField="' + columnfield + '" initVal="newRow_' + row + '" value="" style="width:100%;height:100%;" >'
                                } else {
                                    html = '<input type="text" id="alterTablecolumnName_' + row + '" dataField="' + columnfield + '" initVal="' + value + '" value="' + value + '" style="width:100%;height:100%;" >'

                                }
                                return html;
                            }
                            if (columnfield == 'primaryKey') {
                                if (value == "Y") {
                                    return '<input id="alterTablePrimaryKey_' + row + '" dataField="' + columnfield + '" type="checkbox" initVal="' + value + '" value="' + value + '" checked>';
                                } else {
                                    return '<input id="alterTablePrimaryKey_' + row + '" dataField="' + columnfield + '" type="checkbox" initVal="' + value + '" value="' + value + '">';
                                }
                            }
                            if (columnfield == 'columnsize') {
                                return '<input id="alterTableColumnSize_' + row + '" dataField="' + columnfield + '" style="width:100%;height:100%;" type="number" initVal="' + value + '" value="' + value + '" min="0" max="4000">';
                            }

                            if (columnfield == 'notNull') {
                                if (value == "NULL") {
                                    return '<input id="alterTableNotnull_' + row + '" dataField="' + columnfield + '" type="checkbox" initVal="' + value + '" value="' + value + '" >';
                                } else {
                                    return '<input id="alterTableNotnull_' + row + '" dataField="' + columnfield + '" type="checkbox" initVal="' + value + '" value="' + value + '" checked>';
                                }
                            }
                            if (columnfield == 'defaultValue') {
                                var html = defaulthtml;
                                html = '<input type="text" id="alterTabledefaultVal_' + row + '" dataField="' + columnfield + '" initVal="' + value + '" value="' + value + '" style="width:100%;height:100%;" >'
                                return html;
                            }

                            if (columnfield == 'datatypeName') {
                                var html = defaulthtml;
                                html = '<select name="dataTypeNames" id="alterTableDataType_' + row + '" dataField="' + columnfield + '" initVal="' + value + '" style="width:100%;height:100%;" >';
                                $.each(dataTypesList, function (i) {
                                    if (dataTypesList[i] == value) {
                                        html += '<option value="' + dataTypesList[i] + '" selected >' + dataTypesList[i] + '</option>';
                                    } else {
                                        html += '<option value="' + dataTypesList[i] + '">' + dataTypesList[i] + '</option>';
                                    }

                                });
                                html += '</select>';
                                return html;
                            }


                        }



                        var i = 0;
                        $("#tableAlterGrid").jqxGrid(
                                {
                                    width: "100%",
                                    source: source,
                                    autoheight: true,
                                    editable: true,
                                    sortable: true,
                                    columnsResize: true,
                                    columnsReorder: true,
                                    enableHover: true,
                                    enableBrowserSelection: true,
                                    filterable: true,
                                    //                                    selectionmode: 'singleRow',
                                    selectionmode: 'checkbox',
                                    handlekeyboardnavigation: function (event) {

                                        var keyis = event.key;
                                        if (keyis.length == 1) {
                                            //                                            var value = $(event.target).val();
                                            //                                            $(event.target).val(value + keyis);
                                            //                                            
                                            var cursorPos = $(event.target).prop('selectionStart');
                                            var v = $(event.target).val();
                                            var textBefore = v.substring(0, cursorPos);
                                            var textAfter = v.substring(cursorPos, v.length);
                                            $(event.target).val(textBefore + $(this).val() + textAfter);
                                            return true;
                                        }
                                        //                                       

                                    },
                                    columns: [
                                        {text: 'Column Name', datafield: 'columnName', width: 200, editable: false, cellsrenderer: inputRenderer},
                                        {
                                            text: 'Datatype', datafield: 'datatypeName', width: 100, editable: false, cellsrenderer: inputRenderer
                                                    //                                            createeditor: function (row, value, editor) {
                                                    //                                                editor.jqxDropDownList({source: dataTypesList});
                                                    //                                            }
                                        },
                                        {text: 'Size', datafield: 'columnsize', width: 100, editable: false, cellsrenderer: inputRenderer},
                                        {text: 'Byte/Char', datafield: 'byteOrChar', width: 100, editable: false, cellsrenderer: inputRenderer},
                                        {text: 'PK', datafield: 'primaryKey', width: 100, editable: false, cellsrenderer: inputRenderer},
                                        {text: 'Not Null', datafield: 'notNull', width: 100, editable: false, cellsrenderer: inputRenderer},
                                        {text: 'Default value', datafield: 'defaultValue', width: 200, editable: false, cellsrenderer: inputRenderer},
                                        {text: 'alterTableHidden', datafield: 'alterTableHidden', hidden: true},
                                    ]
                                });
                        $("[id^=tableAlter]").change(function (event) {

                            var target = event.target;
                            var oldvalue = $(target).attr("initval");
                            var value;
                            var dataField = $(target).attr("dataField");
                            // validations
                            var rowIndex = $(target).attr("id").split("_")[1];
                            var columnName = $("#alterTablecolumnName_" + rowIndex).attr("initval");
                            if (dataField == "datatypeName") {
                                value = $(target).val();
                                if (value == "NUMBER" || value == "NUMERIC" || value == "DECIMAL") {
                                    $("#alterTableColumnSize_" + rowIndex).val("");
                                    $("#alterTableColumnSize_" + rowIndex).attr('readonly', true);
                                    $("#alterTablePrecision_" + rowIndex).val("");
                                    $("#alterTablePrecision_" + rowIndex).attr('readonly', false);
                                    $("#alterTableScale_" + rowIndex).attr('readonly', false);
                                }
                                if (value == "FLOAT") {
                                    $("#alterTableColumnSize_" + rowIndex).val("");
                                    $("#alterTableColumnSize_" + rowIndex).attr('readonly', true);
                                    $("#alterTablePrecision_" + rowIndex).attr('readonly', false);
                                    $("#alterTablePrecision_" + rowIndex).val("");
                                    $("#alterTableScale_" + rowIndex).attr('readonly', true);
                                }
                                if (value == "INTERGER" || value == "DATE" || value == "LONG" || value == "LONG RAW"
                                        || value == "ROWID" || value == "MLSLABEL" || value == "CLOB" || value == "NCLOB"
                                        || value == "BLOB" || value == "BFILE" || value == "BINARY_DOUBLE" || value == "BINARY_FLOAT"
                                        || value == "URITYPE" || value == "DOUBLE PRECISION" || value == "SMALLINT" || value == "REAL"
                                        || value == "URITYPE" || value == "TIMESTAMP") {
                                    $("#alterTableColumnSize_" + rowIndex).val("");
                                    $("#alterTableColumnSize_" + rowIndex).attr('readonly', true);
                                    $("#alterTablePrecision_" + rowIndex).val("");
                                    $("#alterTablePrecision_" + rowIndex).attr('readonly', true);
                                    $("#alterTableScale_" + rowIndex).val("");
                                    $("#alterTableScale_" + rowIndex).attr('readonly', true);
                                }
                                if (value == "VARCHAR" || value == "VARCHAR2" || value == "CHAR" || value == "NVARCHAR2"
                                        || value == "RAW" || value == "CHAR VARYING" || value == "CHARACTER" || value == "CHARACTER VARYING"
                                        || value == "NATIONAL CHAR" || value == "NATIONAL CHARACTER" || value == "NATIONAL CHARACTER VARYING"
                                        || value == "NCHAR VARYING") {

                                    $("#alterTableColumnSize_" + rowIndex).attr('readonly', false);
                                    $("#alterTablePrecision_" + rowIndex).val("");
                                    $("#alterTablePrecision_" + rowIndex).attr('readonly', true);
                                    $("#alterTableScale_" + rowIndex).val("");
                                    $("#alterTableScale_" + rowIndex).attr('readonly', true);
                                }
                            }

                            $("#tableAlterGrid").jqxGrid('endrowedit', rowIndex, false);
                            // validations end
                            var rowData = $("#tableAlterGrid").jqxGrid('getrowdata', rowIndex);
                            var dataFieldsObj = alterTableData[columnName];
                            if (dataFieldsObj == null) {
                                dataFieldsObj = {};
                            }

                            if (dataField != null) {
                                if (dataField == "columnName") {
                                    value = $(target).val();
                                    if (value != null && oldvalue != value) {
                                        dataFieldsObj[dataField] = value;
                                        alterTableData[columnName] = dataFieldsObj;
                                    }
                                } else if (dataField == "primaryKey") {
                                    var checked = $(target).prop("checked");
                                    if (checked) {
                                        $(target).val("Y")
                                        value = $(target).val();
                                    } else {
                                        $(target).val("N")
                                        value = $(target).val();
                                    }
                                    if (value != null && oldvalue != value) {
                                        dataFieldsObj[dataField] = value;
                                        alterTableData[columnName] = dataFieldsObj;
                                    }

                                } else if (dataField == "datatypeName" || dataField == "columnsize"
                                        || dataField == "byteOrChar" || dataField == "precision" || dataField == "scale") {
                                    value = $(target).val();
                                    if (value != null && oldvalue != value) {
                                        dataFieldsObj['datatypeName'] = $("#alterTableDataType_" + rowIndex).val();
                                        dataFieldsObj['columnsize'] = $("#alterTableColumnSize_" + rowIndex).val();
                                        //                                      dataFieldsObj['byteOrChar'] = $("#alterTablebyteOrChar_" + rowIndex).val();
                                        dataFieldsObj['precision'] = $("#alterTableprecision_" + rowIndex).val();
                                        dataFieldsObj['scale'] = $("#alterTableScale_" + rowIndex).val();
                                        alterTableData[columnName] = dataFieldsObj;
                                    }
                                } else if (dataField == "notNull") {
                                    var checked = $(target).prop("checked");
                                    if (checked) {
                                        $(target).val("NOT NUL")
                                        value = "NOT NULL";
                                    } else {
                                        $(target).val("NULL")
                                        value = "NULL"
                                    }
                                    if (value != null && oldvalue != value) {
                                        dataFieldsObj[dataField] = value;
                                        alterTableData[columnName] = dataFieldsObj;
                                    }
                                } else if (dataField == "defaultValue") {
                                    value = $(target).val();
                                    if (value != null && oldvalue != value) {
                                        dataFieldsObj[dataField] = value;
                                        alterTableData[columnName] = dataFieldsObj;
                                    }
                                }
                            }

                        });
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $("#dialog").addClass("alterTablePopup");
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

function showtableData(tableName, exiFlag) {
    $("#visualizeAreaGirdData1").html("");
    $("#visualizeAreaGirdData1").hide();
    $("#alterColumnData").remove();
    $("#visualizeAreaGirdData").remove();
    $("#transposeDataId").remove();
    var gridId = "";
    if (exiFlag == "Y") {
        gridId = "divGrid-" + tableName;
    } else {
        gridId = "visualizeAreaGirdData";
    }
    ajaxStart();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: 'showtableData',
        cache: false,
        async: false,
        data: {
            tableName: tableName
        },
        success: function (response) {
            if (response != null) {
                $("#visionSmartBiGridDataId").append("<div class=\"visualizeAreaGirdDataClass\" id=\"visualizeAreaGirdData\"></div>");
                var dataFieldsArray = response['dataFieldsArray'];
                var columnsArray = response['columnsArray'];
                var data = {
                    tableName: tableName
                };
                var source =
                        {
                            type: 'POST',
                            datatype: "json",
                            datafields: dataFieldsArray,
                            data: data,
                            url: 'gettableObjectData',
                            cache: false,
                            root: 'Rows',
                            async: false,
                            processdata: function (data) {
                                showLoader();
                                data['getOnlyDataArray'] = 'Y';
                            },
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                //showLoader();

                            }, loadError: function (xhr, status, error) {
                                stopLoader();
                            }, loadComplete: function (data) {
                                stopLoader();
                            },
                            beforeprocessing: function (data) {
                                source.totalrecords = data[data.length - 1];
                            },
                            sort: function () {
                                $("#" + gridId).jqxGrid('updatebounddata', 'sort');
                                try {
                                    $("#" + gridId).jqxGrid('clearselection');
                                } catch (e) {
                                }
                                ajaxStop();
                            },
                            filter: function () {

                                $("#" + gridId).jqxGrid('updatebounddata', 'filter');
                                try {
                                    $("#" + gridId).jqxGrid('clearselection');
                                } catch (e) {
                                }
                                ajaxStop();
                            }
                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                $("#" + gridId).jqxGrid(
                        {
                            width: "100%",
                            height: "90%",
                            theme: 'energyblue',
                            autoshowloadelement: false,
                            source: dataAdapter,
                            pageable: true,
                            pagesize: 50,
                            showfilterrow: true,
                            filterable: true,
                            sortable: true,
                            virtualmode: true,
                            columnsreorder: true,
                            pagesizeoptions: ['50', '100', '500'],
                            rendergridrows: function (params) {
                                return params.data;
                            },
                            columnsresize: true,
                            columns: columnsArray
                        });
                $("#" + gridId).on('rowselect', function (event) {
                    var args = event.args;
                    var dataField = args.datafield;
                    var dataField1 = args.text;
                    var rowIndex = args.rowindex;
                    var cellValue = args.value;
                    //                    var column = $('#' + gridResultObj['gridId']).jqxGrid('getcolumn', event.args.datafield).text;
                    popupedit("column", cellValue);
                });
                $("#" + gridId).on('columnclick', function () {
                    console.log("testingclickheader column");
                    splitData(tableName);
                });
            }
        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
    ajaxStop();
}

function getGraphQuery(event, table) {
//    ajaxStart(); 
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: 'generateQueryStr',
        cache: false,
        async: false,
        data: {
            tableName: table
        },
        success: function (response) {
            var resut = response['result'];
            var tableStr = response['tableStr'];
            if (response != null) {
                $("#visionVisualizationDataChartcount").hide();
                $("#visualizeArea").append("<div class=\"creategraphqueryDivClass\" id=\"creategraphqueryDivId\"></div>");
                $("#creategraphqueryDivId").append("<div class=\"subgraphqueryDivClass\" id=\"subgraphqueryDivId\"></div>");
                $("#subgraphqueryDivId").append(resut);
                $("#subgraphqueryDivId").append(tableStr);
                //                $("#dialog").html(tableStr); 
                //                $("#dialog").dialog({ resizable: false,
                //                    title: (labelObject['Form'] != null ? labelObject['Form'] : 'Form'),
                //                    width: 500,
                //                    height: 350,
                //                    fluid: true,
                //                    open: function () {
                //
                //                    },
                //                    beforeClose: function (event, ui)
                //                    {
                //
                //                    }
                //                });
            }
        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}

function gettable(event, id) {
    $("#columnlistoptionListId").html("");
    var tablename = $("#" + id).val();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: 'generateQueryStr',
        cache: false,
        async: false,
        data: {
            tablename: tablename
        },
        success: function (response) {
            var columnstr = response['ColumnStr'];
            if (response != null) {
                $("#subgraphqueryDivId").append(columnstr);
                $("#columnlistoptionListId").jqxDropDownList({
                    filterable: true,
                    checkboxes: true,
                    filterPlaceHolder: 'startswith',
                    placeHolder: 'Select Column',
                });
            }
        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
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

function addlegendLabelToTrace(traceObj, columnName, defaultLegendNames, userProvidedLegendNames) {
    if (!jQuery.isEmptyObject(userProvidedLegendNames) && userProvidedLegendNames !== null) {
        traceObj["name"] = userProvidedLegendNames[columnName];
    } else if (!jQuery.isEmptyObject(defaultLegendNames) && defaultLegendNames !== null &&
            defaultLegendNames[columnName] != null && defaultLegendNames[columnName] != '' && defaultLegendNames[columnName] != undefined) {
        traceObj["name"] = defaultLegendNames[columnName];
    }
    return traceObj;
}

function showAxisLabelsTooltipOnHover($this, labelTextDiv, chartId, transformHorVal, transformVerVal) {
//	var curreText = $this.children().text();
    var curreText = $this.children().attr('data-unformatted');
    var currentLabelMainDiv = $this.parents().find("#" + chartId);
    var currentLabelParentEleClass = $(currentLabelMainDiv).find("." + labelTextDiv).attr("class");
    if (curreText !== null && curreText !== "" && curreText !== undefined && curreText !== "0") {
        var currentHoveredLabelFirst = $("." + currentLabelParentEleClass + " span:contains('" + curreText + "'):first");
        var currentHoveredLabelLast = $("." + currentLabelParentEleClass + " span:contains('" + curreText + "'):last");
        var currentHoveredLabel = $("#" + chartId + " ." + currentLabelParentEleClass + " span:contains('" + curreText + "')");
        currentHoveredLabel.css("transform", "translate(" + transformHorVal + "px," + transformVerVal + "px)");
        $(currentHoveredLabel).show();
    }
}


function createChart(chartId, username, dataarray) {

    var data = {};
    data['axisColumns'] = dataarray[0]['xAxix'];
    data['valuesColumns'] = dataarray[0]['yAxix'];
    data['tablesObj'] = dataarray[0]['table'];
    data['chartType'] = dataarray[0]['type'];
    ;
    data['chartId'] = chartId;
    data['aggregateName'] = dataarray[0]['aggregateType'];
    data['tableName'] = dataarray[0]['table'];
    data['columnLebel'] = dataarray[0]['Lebel'];
    data['filterConditions'] = dataarray[0]['filterColumns'];
    data['chartPropObj'] = dataarray[0]['chartPropObj'];
    data['chartConfigPositionKeyStr'] = dataarray[0]['chartConfigObj'];
    data['username'] = username;
    $.ajax({
        url: 'insertdata',
        type: "POST",
        dataType: 'html',
        traditional: true,
        cache: false,
        data: data,
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                var dataarr = response['dataarr'];
                $("#dialog").html("Graph " + response);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: "Message",
                    height: 150,
                    Width: 250,
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            fetchchartGrid();
                        },
                    },
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }
        }, error: function (e) {
            sessionTimeout(e);
        }
    });
}



function getPivotGridData(tableName) {
//    $("#divPivotGrid").html("");
//    $("#jqxpivotGridDialog").html("");
//    $("#divPivotGrid").html("");
    $.ajax({
        type: "post",
        traditional: true,
        url: "jqxPivotGrid",
        cache: false,
        data: {
            'tableName': tableName
        },
        success: function (response) {
            if (response != null) {
                var data = response['data'];
                var rows = response['rows'];
                var columns = response['columns'];
                var datafields = response['datafields'];
                var filter = response['filters'];
                var values = response['values'];
                var columnsList = response['columnsList'];
                var source =
                        {
                            localdata: data,
                            datatype: "array",
                            datafields: datafields,
                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                dataAdapter.dataBind();
                // create a pivot data source from the dataAdapter
                var pivotDataSource = new $.jqx.pivot(
                        dataAdapter,
                        {
                            customAggregationFunctions: {
                                'var': function (values) {
                                    if (values.length <= 1)
                                        return 0;
                                    // sample's mean
                                    var mean = 0;
                                    for (var i = 0; i < values.length; i++)
                                        mean += values[i];
                                    mean /= values.length;
                                    // calc squared sum
                                    var ssum = 0;
                                    for (var i = 0; i < values.length; i++)
                                        ssum += Math.pow(values[i] - mean, 2)
                                    // calc the variance
                                    var variance = ssum / values.length;
                                    return variance;
                                }
                            },
                            pivotValuesOnRows: false,
                            totals: {rows: {subtotals: true, grandtotals: true}, columns: {subtotals: false, grandtotals: true}},
                            fields: rows,
                            rows: [],
                            columns: [],
                            values: values
                        });
                var localization = {'var': 'Variance'};
                //                                var localization = getLocalization('de');
                // create a pivot grid
                $('#divPivotGrid').jqxPivotGrid(
                        {
                            localization: localization,
                            source: pivotDataSource,
                            treeStyleRows: false,
                            autoResize: false,
                            multipleSelectionEnabled: true,
                            itemsRenderer: function (pivotItem) {
                                var backgroundColor = pivotItem.isColumn ? 'rgba(187, 232, 227, 255)' : 'rgba(203, 254, 187, 255)';
                                if (pivotItem.isSelected)
                                    backgroundColor = pivotItem.isColumn ? 'rgba(167, 212, 207, 255)' : 'rgba(183, 234, 157, 255)';
                                var sortElement = '';
                                if (pivotItem.hierarchy.getSortItem() == pivotItem) {
                                    var elementClass = pivotItem.hierarchy.getSortOrder() == 'desc' ? 'jqx-icon-arrow-down' : 'jqx-icon-arrow-up';
                                    sortElement = "<div id='sortElement' class='" + elementClass + "' style='margin-right: 0px; width: 16px; height: 11px; font-size: smaller; vertical-align: bottom; padding-top: 4px;'></div>";
                                }
                                var additionalItem = '';
                                var classStyle = 'jqx-pivotgrid-expand-button';
                                if (pivotItem.isExpanded) {
                                    classStyle = 'jqx-pivotgrid-collapse-button';
                                }
                                additionalItem = '<div style="position: relative; top: 5px; padding: 5px; width: 11px; height: 11px;" class="' + classStyle + '"></div>'
                                if (pivotItem.items.length == 0) {
                                    additionalItem = '';
                                }
                                return additionalItem + "<div style='background: " + backgroundColor + "; width: calc(100% â€“ 8px); height: calc(100% - 4px); font-size: smaller; text-align: center; vertical-align: bottom; padding-top: 4px;'>" + pivotItem.text + sortElement + "</div>";
                                //                                            return "<div style='background: " +  backgroundColor + "; width: calc(100% - 8px); height: calc(100% - 8px); padding: 4px;'>"+ pivotItem.text+ sortElement+ "</div>";
                            },
                            cellsRenderer: function (pivotCell) {
                                var colors = ['rgba(248, 105, 107, 255)', 'rgba(250,170,120,255)', 'rgba(255,230,130,255)', 'rgba(175,215,130,255)', 'rgba(100,190,120,255)'];
                                var selectedColors = ['rgba(228, 85, 87, 255)', 'rgba(230,150,100,255)', 'rgba(235,210,110,255)', 'rgba(155,195,110,255)', 'rgba(80,170,100,255)'];
                                var val = Math.min(pivotCell.value, 20);
                                var backgroundColor = pivotCell.isSelected ? selectedColors[Math.round(val / 5)] : colors[Math.round(val / 5)];
                                if (pivotCell.pivotColumn.text != 'Sum')
                                    backgroundColor = pivotCell.isSelected ? 'rgba(225, 225, 225, 255)' : 'rgba(255, 255, 255, 255)';
                                if (pivotCell.isSelected)
                                    backgroundColor
                                var cellText = pivotCell.value == 0 ? '' : pivotCell.formattedValue;
                                return "<div style='background: " + backgroundColor + "; width: calc(100%-8px); height: 100%; padding: 4px; margin: 0px;'>" + cellText + "</div>";
                            },
                        });
                $('#divPivotGrid').on('pivotitemexpanding pivotitemcollapsing pivotitemexpanded pivotitemcollapsed pivotitemselectionchanged sortchanging sortchanged sortremoving sortremoved', function (event) {
                    var t = new Date();
                    var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
                    var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text;
                    if (event.type == 'itemselectionchanged')
                        eventData += ', Selected: ' + event.args.selected;
                    eventData += "\n";
                    $('#eventText').val(eventData + $('#eventText').val());
                });
                $('#divPivotGrid').on('pivotitemmouseup pivotitemmousedown pivotitemclick pivotitemdblclick', function (event) {
                    var t = new Date();
                    var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
                    var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text + ', mousebutton: ' + event.args.mousebutton;
                    eventData += "\n";
                    //                                    $("#divContextMenu").css('display:block !important;');

                });
                $('#divPivotGrid').on('pivotcellmouseup pivotcellmousedown pivotcellclick pivotcelldblclick', function (event) {
                    var t = new Date();
                    var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
                    var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivot row: ' + event.args.pivotRow.text + ', pivot column: ' + event.args.pivotColumn.text + ', mousebutton: ' + event.args.mousebutton;
                    eventData += "\n";
                    $('#eventText').val(eventData + $('#eventText').val());
                });
                //                                $('#eventText').jqxTextArea();
                //                                $("#btnClearLog").jqxButton().on('click', function () { $('#eventText').val("");});
                var pivotGridInstance = $('#divPivotGrid').jqxPivotGrid('getInstance');
                // create a pivot grid
                $('#divPivotGridDesigner').jqxPivotDesigner(
                        {
                            type: 'pivotGrid',
                            target: pivotGridInstance
                        });
                $('#divPivotGrid').on('pivotcelldblclick', function (e) {
                    var args = e.args;
                    drillThrough(args.pivotRow, args.pivotColumn);
                });
                pivotGridInstance.refresh();
                $("#jqxpivotGridDialog").dialog({resizable: false,

                    title: labelObject['Descriptive Analytics'] != null ? labelObject['Descriptive Analytics'] : 'Descriptive Analytics',
                    modal: true,
                    height: 520,
                    width: 857,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                            click: function () {
                                //                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionPersonalizationSaveDialog");
                        $(this).closest(".ui-dialog").addClass("visionPivotGridDialog");
                        $(".ui-widget-overlay ui-front").addClass("visionPivotGridOverlay");
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
    });
}


function getHomeDashboardKanbanView(event, id) {
    $("#visualizechartId").html("");
    $("#Loader").css("display", "block");
    $("body").css({"pointer-events": "auto"});
    var kanbanViewName = $("#" + id).val();
    if (kanbanViewName != null && kanbanViewName != '' && kanbanViewName != 'undefined' && kanbanViewName == 'Select') {
        return;
    }
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "fetchKanbanDataView",
        data: {
            kanbanViewName: kanbanViewName
        },
        cache: false,
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                $("#Loader").css("display", "none");
                $("body").css({"pointer-events": "auto"});
                var kanbanObj = response['colsArr'];
                var kanbanViewNameList = response['kanbanViewNameList'];
                $("#visionHomeKanbanView").html(kanbanViewNameList);
                for (var k = 0; k < kanbanObj.length; k++) {
                    var result = kanbanObj[k];
                    var resourceArr = result['resourceData'];
                    var sourceArr = result['sourceData'];
                    var headerArr = result['headerArr'];
                    var nameObj = result['nameObj'];
                    var columns = result['columnsArr'];
                    var kanbanId = result['kanbanId'];
                    var fields = [
                        {name: "id", type: "string"},
                        {name: "status", map: "state", type: "string"},
                        {name: "text", map: "label", type: "string"},
                        {name: "color", map: "hex", type: "string"},
                        {name: "resourceId", type: "string"}
                    ];
                    var source = {};
                    source['localData'] = sourceArr;
                    source['dataType'] = "array";
                    source['dataFields'] = fields;
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    var resourcesSource = {};
                    resourcesSource['localData'] = resourceArr;
                    resourcesSource['dataType'] = "array";
                    var resourceFieldsArr = [
                        {name: "id", type: "number"},
                    ];
                    var template = "<div class='jqx-kanban-item' id=''>";
                    $.each(nameObj, function (key, val) {
                        var obj = {};
                        if (key == 'columnName') {
                            obj['name'] = nameObj['columnName'];
                            obj['type'] = 'string';
                            resourceFieldsArr.push(obj);
                            template += "<div class='jqx-kanban-item-color-status'></div>";
                        }
                    });
                    for (var j = 2; j < columns.length - 1; j++) {
                        var objData = columns[j];
                        if (objData != null && !jQuery.isEmptyObject(objData)) {
                            var obj = {};
                            obj['name'] = objData['columnName'];
                            obj['type'] = 'string';
                            resourceFieldsArr.push(obj);
                            template += "<div class='jqx-kanban-item-" + objData['columnName'] + "'></div>";
                        }
                    }
                    template += "<div class='jqx-kanban-item-text'></div></div>"
                    resourcesSource['dataFields'] = resourceFieldsArr;
                    var resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
                    if (k == 0) {
                        $("#visualizechartId").append("<div id='" + kanbanId + "' style='display:flex;overflow-x:auto'></div>");
                    } else {
                        $("#visualizechartId").append("<div id='" + kanbanId + "' style='display:flex;overflow-x:auto;margin-top:2%'></div>");
                    }
                    $('#' + kanbanId).jqxKanban({
                        width: '100%',
                        height: '600px',
                        template: template,
                        resources: resourcesDataAdapter,
                        source: dataAdapter,
                        itemRenderer: function (element, data, resource) {
                            $.each(nameObj, function (key, val) {
                                if (key == 'columnName') {
                                    $(element).find(".jqx-kanban-item-color-status").html("<span style='line-height: 23px; margin-left: 5px;'>" + resource[nameObj['columnName']] + "</span>");
                                }
                            });
                            for (var j = 2; j < columns.length - 1; j++) {
                                var objData = columns[j];
                                if (objData != null && !jQuery.isEmptyObject(objData)) {
                                    $(element).find(".jqx-kanban-item-" + objData['columnName'] + "").html("<div class='jqx-kanban-item-" + objData['columnName'] + "' style='line-height: 23px; margin-left: 5px;'>" + objData['label'] + ":" + (resource[objData['columnName']] != null ? resource[objData['columnName']] : "Data not Available") + "</div>");
                                }
                            }
                        },
                        columns: headerArr,
                        columnRenderer: function (element, collapsedElement, column) {

                            var kanbanId = element[0]['id'];
                            var kanbanCol;
                            if (kanbanId != null && kanbanId != '' && kanbanId != undefined) {
                                kanbanCol = kanbanId.replace("kanban-column-header-", "");
                            }
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


function showupdateDataNTF(chartId, tableName, chartType, expandChartId, filterConditions) {
    var SaveButtonEnable = getSaveOptionEnableValue();

    if (SaveButtonEnable != null && SaveButtonEnable != '' && SaveButtonEnable == 'Y') {
        $("#dialog").html("Are you sure you want to Save the Data ??");
        $("#dialog").dialog({resizable: false,
            modal: true,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            height: 'auto',
            minHeight: 'auto',
            minWidth: 350,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        var flag = 'Y';
                        closeDialogBox("#dialog");
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
                                flag: flag,
                                roleId: $('#roleId_DXP_CHARTS').val(),
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
                                            var colorsObj = dataarr[i]['colorsObj'];
                                            var query = dataarr[i]['query'];
                                            var comboValue = dataarr[i]['comboValue'];
                                            var currencyConversionStrObject = dataarr[i]['currencyConversionStrObject'];
                                            var chartConfigToggleStatus = dataarr[i]['chartConfigToggleStatus'];
                                            var zAxisValues = dataarr[i]['zAxis'];
                                            var candleColumns = dataarr[i]['candleColumn'];
                                            var staticTargetInputVal = dataarr[i]['staticTargetInputVal'];
                                            var joinQuery = dataarr[i]['fetchQuery'];
                                            var sortColumns = dataarr[i]['sortColumns'];
                                            if (XAxix != null && XAxix != '' && yAxix != null && yAxix != '' && type != 'Card') {
                                                var chartid = id;
                                                if (expandChartId != null && expandChartId != '' && expandChartId != undefined) {
                                                    var chartExtendPropObj = $("#homepageChartDiv_options").val();
                                                    if (chartExtendPropObj != null && chartExtendPropObj != '' && chartExtendPropObj != undefined) {
                                                        chartPropObj = chartExtendPropObj;
                                                    }
                                                    $("#homepageChartDiv_filter").val(filterCondition);
                                                    getExpandVisualizeChart(expandChartId, chartType, XAxix, yAxix, table, aggColumnName, filterCondition, chartPropObj, chartConfigObj, count, '', expandChartId, colorsObj);
                                                } else {
                                                    var chartExtendPropObj = $("#" + chartid + "_options").val();
                                                    if (chartExtendPropObj != null && chartExtendPropObj != '' && chartExtendPropObj != undefined) {
                                                        chartPropObj = chartExtendPropObj;
                                                    }
                                                    var slicerFilter = [];
                                                    var chartFilter = $("#" + id + "_homePageFilter").val();
                                                    if (chartFilter != null && chartFilter != '' && chartFilter != undefined) {
                                                        chartFilter = JSON.parse(chartFilter);
                                                        if (chartFilter != null && !jQuery.isEmptyObject(chartFilter)) {
                                                            for (var key in chartFilter) {
                                                                var paramObj = chartFilter[key];
                                                                slicerFilter.push(paramObj);
                                                            }
                                                        }
                                                    }
                                                    var slicerFilterCondition = $("#" + id + "_filter").val();
                                                    if (slicerFilterCondition != null && slicerFilterCondition != '' && slicerFilterCondition != undefined) {
                                                        slicerFilterCondition = JSON.parse(slicerFilterCondition);
                                                        if (slicerFilterCondition != null && !jQuery.isEmptyObject(slicerFilterCondition) && slicerFilterCondition.length > 0) {
                                                            for (var key in slicerFilterCondition) {
                                                                if (slicerFilterCondition.hasOwnProperty(key)) {
                                                                    var paramObj = slicerFilterCondition[key];
                                                                    slicerFilter.push(paramObj);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if (filterCondition != null && filterCondition != '' && filterCondition != undefined) {
                                                        filterCondition = JSON.parse(filterCondition);
                                                        if (filterCondition != null && !jQuery.isEmptyObject(filterCondition)) {
                                                            for (var key in filterCondition) {
                                                                if (filterCondition.hasOwnProperty(key)) {
                                                                    var paramObj = filterCondition[key];
                                                                    slicerFilter.push(paramObj);
                                                                }
                                                            }

                                                        }
                                                    }
                                                    if (slicerFilter != null && !jQuery.isEmptyObject(slicerFilter)) {
                                                        slicerFilter = JSON.stringify(slicerFilter);
                                                    }
                                                    getVisualizeChart(chartid, chartType, XAxix, yAxix, table, aggColumnName, slicerFilter, chartPropObj, chartConfigObj, count, labelLegend, colorsObj, comboValue, "", "", "", joinQuery, "", "", zAxisValues, "", candleColumns, staticTargetInputVal, sortColumns);
                                                }

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
                },
                {
                    text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                    click: function () {
                        fetchFilterChartData(chartId, tableName, chartType, expandChartId, filterConditions);
                        $(this).html("");
                        $(this).dialog("close");



                    }
                }
            ],
            open: function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
                $(".visionCommonDialog").css("z-index", "999999");
            },
            beforeClose: function (event, ui) {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");

            }
        });
    } else {
        fetchFilterChartData(chartId, tableName, chartType, expandChartId, filterConditions);
    }
}


function applyChartClickColours(data, chartId, chartType, flag, colrsObj) {
    var tabsString = "<div class='visionDxpPieChartColours'>"
            + "<input class ='visionDxpPieChartColours' id='visionDxpChartPieColor'  placeholder='choose color'/></div>";
    $("#dialog").html(tabsString);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Choose Color'] != null ? labelObject['Choose Color'] : 'Choose Color'),
        modal: true,
        width: 395,
        maxWidth: 395,
        height: 330,
        maxHeight: 360,
        fluid: true,
        buttons: [{
                text: (labelObject['Apply'] != null ? labelObject['Apply'] : 'Apply'),
                click: function () {
                    var pn;
                    var tn;
                    var colotrs = [];
                    var colorsObj = {};
                    var pnArr = [];
                    var tnArr = [];
                    var colors = [];
                    var colorsObject = {};
                    if (colrsObj != null && colrsObj != '' && colrsObj != undefined) {
                        colorsObject = JSON.parse(colrsObj);
                    }
                    if (chartType != '' && chartType != null && chartType != undefined && chartType == 'lines') {
                        for (var i = 0; i < data.points.length; i++) {
                            colotrs = data.points[i].data.line.color;
                            pn = data.points[i].pointNumber;
                            tn = data.points[i].curveNumber;
                        }
                        var selectedClr = $("#visionDxpChartPieColor").val();
                        colotrs = selectedClr;
                        var update = {'line': {'color': colotrs, width: 3}};
                        Plotly.restyle(chartId, update, [tn]);
                        var clrsObj = $("#" + chartId).attr("colors");
                        if (clrsObj != null && clrsObj != '' && clrsObj != undefined) {
                            clrsObj = JSON.parse(clrsObj);
                            pnArr = clrsObj['pn'];
                            tnArr = clrsObj['tn'];
                            colors = clrsObj['clrs'];
                            pnArr.push(pn);
                            tnArr.push(tn);
                            colors.push(selectedClr);
                            colorsObj['pn'] = pnArr;
                            colorsObj['tn'] = tnArr;
                            colorsObj['clrs'] = colors;
                        } else {
                            pnArr.push(pn);
                            tnArr.push(tn);
                            colors.push(selectedClr);
                            colorsObj['pn'] = pnArr;
                            colorsObj['tn'] = tnArr;
                            colorsObj['clrs'] = colors;
                        }
                        $("#" + chartId).attr("colors", JSON.stringify(colorsObj));
                        if (flag != null && flag != '' && flag != undefined && flag == 'Save') {
                            saveHomeChartColors(chartId, chartType, pn, tn, colotrs);
                        }

                    } else if (chartType != '' && chartType != null && chartType != undefined && (chartType == 'pie' || chartType == 'donut')) {
                        for (var i = 0; i < data.points.length; i++) {
                            colotrs = data.points[i].data.marker.colors;
                            if (!(colotrs != null && colotrs != '' && colotrs != undefined)) {
                                colotrs = data.points[i].data.marker.color;
                                if (!(colotrs != null && colotrs != '' && colotrs != undefined)) {
                                    colotrs = [];
                                }
                            }
                            pn = data.points[i].pointNumber;
                            tn = data.points[i].curveNumber;
                        }
                        colotrs[pn] = $("#visionDxpChartPieColor").val();
                        var update = {'marker': {color: colotrs}};
                        Plotly.redraw(chartId, update, [tn]);
                        var clrsObj = $("#" + chartId).attr("colors");
                        if (clrsObj != null && clrsObj != '' && clrsObj != undefined) {
                            clrsObj = JSON.parse(clrsObj);
                            pnArr = clrsObj['pn'];
                            tnArr = clrsObj['tn'];
                            pnArr.push(pn);
                            tnArr.push(tn);
                            colorsObj['pn'] = pnArr;
                            colorsObj['tn'] = tnArr;
                        } else {
                            pnArr.push(pn);
                            tnArr.push(tn);
                            colorsObj['pn'] = pnArr;
                            colorsObj['tn'] = tnArr;
                        }
                        colorsObj['clrs'] = colotrs;
                        $("#" + chartId).attr("colors", JSON.stringify(colorsObj));
                        if (flag != null && flag != '' && flag != undefined && flag == 'Save') {
                            saveHomeChartColors(chartId, chartType, pn, tn, JSON.stringify(colotrs));
                        }

                    } else if (chartType != '' && chartType != null && chartType != undefined && chartType == 'scatterpolar') {

                        var selectedClr = $("#visionDxpChartPieColor").val();
                        var colotrs = selectedClr;
                        var update = {'marker': {color: colotrs}};
                        Plotly.restyle(chartId, update);
                        var clrsObj = $("#" + chartId).attr("colors");
                        if (clrsObj != null && clrsObj != '' && clrsObj != undefined) {
                            colorsObj['clrs'] = colotrs;
                        } else {
                            colorsObj['clrs'] = colotrs;
                        }

                        $("#" + chartId).attr("colors", JSON.stringify(colorsObj));
                        if (flag != null && flag != '' && flag != undefined && flag == 'Save') {
                            saveHomeChartColors(chartId, chartType, pn, tn, selectedClr);
                        }

                    } else {
                        for (var i = 0; i < data.points.length; i++) {
                            colotrs = data.points[i].data.marker.colors;
                            if (!(colotrs != null && colotrs != '' && colotrs != undefined)) {
                                colotrs = data.points[i].data.marker.color;
                                if (!(colotrs != null && colotrs != '' && colotrs != undefined)) {
                                    colotrs = [];
                                }
                            }
                            pn = data.points[i].pointNumber;
                            tn = data.points[i].curveNumber;
                        }
                        var selectedClr = $("#visionDxpChartPieColor").val();
                        colotrs[pn] = selectedClr;
                        var update = {'marker': {color: colotrs}};
                        Plotly.redraw(chartId, update, [tn]);
                        var clrsObj = $("#" + chartId).attr("colors");
                        if (clrsObj != null && clrsObj != '' && clrsObj != undefined) {
                            clrsObj = JSON.parse(clrsObj);
                            pnArr = clrsObj['pn'];
                            tnArr = clrsObj['tn'];
                            colors = clrsObj['clrs'];
                            var colorFlag = false;
                            for (var k = 0; k < pnArr.length; k++) {
                                var pnVal = pnArr[k];
                                var tnVal = tnArr[k];
                                var clr = colors[k];
                                if (pn == pnVal && tn == tnVal) {
                                    colorFlag = true;
                                    var index = colors.indexOf(clr);
                                    colors.splice(index, 1);
                                    colors.splice(index, 0, selectedClr);
                                    break;
                                }
                            }
                            if (!colorFlag) {
                                pnArr.push(pn);
                                tnArr.push(tn);
                                colors.push(selectedClr)
                            }
                            colorsObj['pn'] = pnArr;
                            colorsObj['tn'] = tnArr;
                            colorsObj['clrs'] = colors;
                        } else {
                            pnArr.push(pn);
                            tnArr.push(tn);
                            colors.push(selectedClr);
                            colorsObj['pn'] = pnArr;
                            colorsObj['tn'] = tnArr;
                            colorsObj['clrs'] = colors;
                        }

                        $("#" + chartId).attr("colors", JSON.stringify(colorsObj));
                        if (flag != null && flag != '' && flag != undefined && flag == 'Save') {
                            saveHomeChartColors(chartId, chartType, pn, tn, selectedClr);
                        }

                    }


                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }

            }],
        open: function () {
            $("#visionDxpChartPieColor").spectrum({
                flat: true,
                showButtons: false,
            });
        },
        beforeClose: function (event, ui) {

        }
    });
}


function applyChartColors(colorsObj, chartId, chartType) {
    if (chartType != '' && chartType != null && chartType != undefined && chartType == 'lines') {
        if (colorsObj != null && colorsObj != '' && colorsObj != undefined) {
            colorsObj = JSON.parse(colorsObj);
            if (colorsObj != null && !jQuery.isEmptyObject(colorsObj)) {
                var pnArr = colorsObj['pn'];
                var tnArr = colorsObj['tn'];
                var colors = colorsObj['clrs'];
                for (var i = 0; i < pnArr.length; i++) {
                    var tn = tnArr[i];
                    var clr = colors[i];
                    var update = {'line': {'color': clr, width: 3}};
                    Plotly.restyle(chartId, update, [tn]);
                }
            }

        }
    } else if (chartType != '' && chartType != null && chartType != undefined && (chartType == 'pie' || chartType == 'donut')) {
        var graphDiv = document.getElementById(chartId);
        var data = graphDiv.data;
        if (colorsObj != null && colorsObj != '' && colorsObj != undefined) {
            colorsObj = JSON.parse(colorsObj);
            if (colorsObj != null && !jQuery.isEmptyObject(colorsObj)) {
                var colors = colorsObj['clrs'];
                if (colors != null && !jQuery.isEmptyObject(colors)) {
                    if (chartType != null && chartType != '' && chartType != undefined && (chartType == 'pie' || chartType == 'donut')) {
                        var update = {'marker': {'colors': colors}};
                        Plotly.restyle(chartId, update);
                    }
                }
            }
        }

    } else if (chartType != '' && chartType != null && chartType != undefined && chartType == 'scatterpolar') {

        if (colorsObj != null && colorsObj != '' && colorsObj != undefined) {
            colorsObj = JSON.parse(colorsObj);
            if (colorsObj != null && !jQuery.isEmptyObject(colorsObj)) {
                var colors = colorsObj['clrs'];
                if (colors != null && !jQuery.isEmptyObject(colors)) {
                    var update = {'marker': {'color': colors[0]}};
                    Plotly.restyle(chartId, update);
                }
            }
        }

    } else {

        if (colorsObj != null && colorsObj != '' && colorsObj != undefined) {
            colorsObj = JSON.parse(colorsObj);
            if (colorsObj != null && !jQuery.isEmptyObject(colorsObj)) {
                var graphDiv = document.getElementById(chartId);
                var data = graphDiv.data;
                var colors = colorsObj['clrs'];
                if (colors != null && !jQuery.isEmptyObject(colors)) {
                    var pnArr = colorsObj['pn'];
                    var tnArr = colorsObj['tn'];
                    var colors = colorsObj['clrs'];
                    var checkData = {};
                    for (var t = 0; t < tnArr.length; t++) {
                        var pnVal = pnArr[t];
                        var tnVal = tnArr[t];
                        var dataObj = data[tnVal];
                        if (dataObj != null && !jQuery.isEmptyObject(dataObj)) {
                            var markerObj = dataObj['marker'];
                            if (markerObj != null && !jQuery.isEmptyObject(markerObj)) {
                                var dataColors;
                                if (checkData.hasOwnProperty(tnVal)) {
                                    dataColors = checkData[tnVal];
                                } else {
                                    dataColors = markerObj['color'];
                                }
                                dataColors[pnVal] = colors[t];
                                checkData[tnVal] = dataColors;
                                var update = {'marker': {'color': dataColors}};
                                Plotly.restyle(chartId, update, [tnVal]);
                            }
                        }
                    }
                }
            }
        }

    }

}


function getChartRadioButtons(chartId, chartType) {
    showLoader();
    $.ajax({
        type: "POST",
        url: "getChartColumnsForm",
        cache: false,
        dataType: 'json',
        data: {
            chartId: chartId,
            chartType: chartType
        },
        success: function (response) {
            console.log(response);
            stopLoader();
            if (response != null && response != '') {
                var result = response['result'];
                var Resultstr = response['resultStr'];
                var count = 0;
                var filterDivId = "<div id='visionVisualizeHomeChartFilters' class='visionVisualizeHomeChartFiltersClass'>"
                        + "<div id='visionVisualizeHomeChartFiltersValues' class='visionVisualizeHomeChartFiltersValuesClass'></div>"
                        + "</div>";
                $("#dialog1").html(Resultstr);
                $("#dialog1").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    width: 650,
                    maxWidth: 650,
                    height: 400,
                    maxHeight: 1000,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Save'] != null ? labelObject['Save'] : 'Save'),
                            click: function () {
                                var itemsList = [];
                                $('#visionVisualizeHomeChartFiltersValues div').each(function (event) {
                                    let value = $(this).text();
                                    var id = $(this).attr('id');
                                    if (id != null && id != null && id != undefined) {
                                        id = id.replace("_" + value + "_divId", "");
                                    }
                                    var colTableName = id + "." + value;
                                    itemsList.push(colTableName);
                                });
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                updateChartRadioButtonData(chartId, chartType, itemsList);
                            }

                        },
                        {
                            text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }],
                    open: function () {
                        $("#visualizeChartHomeSlicerData").append(filterDivId);
                        $("#VisualizeBIHomeSlicerColumns").append(result);
                        $(".VisionImageVisualizationHomeTableClass").unbind().click(function () {
                            $(this).parent().parent().find('ul').toggle();
                            if ($(this).parent().parent().find('ul').is(":visible")) {

                                $(this).css({transform: "rotate(90deg)"});
                            } else {
                                $(this).css({transform: "rotate(360deg)"});
                            }
                        });
                        $("#Loader").css("display", "none");
                        $("body").css({"pointer-events": "auto"});
                        $(".visionVisualizationDragColumns").addClass('visionVisualizationDragFilterColumns');
                        $("#dialog1").addClass('filterPopUp');
                        $(".ui-dialog").addClass('homePageDDSlicer');
                        $(".ui-dialog").css("z-index", "99999"); //jaggu
                    },
                    beforeClose: function (event, ui) {

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


function getDashboard(newcharttype, chartid, currenttype, createCount) {
    showLoader();
    console.log();
    $("#dxpColorPopOver").hide();
    $("#dialog").hide();
    var newchartType = newcharttype.toUpperCase();
    var curnet = currenttype.toUpperCase();
    var domain = $("#domainDropDownData").val();
    if (domain == null || domain == undefined || domain == "") {
        domain = $("#currentDomain").val();
    }
    var dashboardName = $("#OptionDropdownData").val();
    $.ajax({
        type: "POST",
        url: "getchartconfigobjdata",
        cache: false,
        dataType: 'json',
        async: false,
        data: {
            id: chartid,
            type: currenttype,
            domain: domain,
            dashboardName: dashboardName
        },
        success: function (response) {
            if (response != null) {
                var dataarr = response['dataarr'];
                if (dataarr != null && dataarr != '' && dataarr != undefined) {
                    var count = 0;
                    $("#visionCardView").empty();
                    var chartpoprobj = {};
                    var configobj = {};
                    for (var i = 0; i < dataarr.length; i++) {
                        var XAxix = dataarr[i]['xAxix'];
                        var yAxix = dataarr[i]['yAxix'];
                        var type = dataarr[i]['type'];
                        var table = dataarr[i]['table'];
                        var id = dataarr[i]['chartid'];
                        var aggColumnName = dataarr[i]['aggColumnName'];
                        var filterCondition = dataarr[i]['filterCondition'];
                        var chartPropObj = dataarr[i]['chartPropObj'];
                        var chartConfigObj = dataarr[i]['chartConfigObj'];
                        var labelLegend = dataarr[i]['labelLegend'];
                        var colorsObj = dataarr[i]['colorsObj'];
                        var FilterColumn = dataarr[i]['FilterColumn'];
                        if (chartPropObj != null && chartPropObj != undefined) {
                            var propobj = JSON.parse(chartPropObj);
                            Object.keys(propobj).forEach(function (key) {
                                var value = propobj[key];
                                var key = key.replace(type.toUpperCase(), newchartType);
                                chartpoprobj[key] = value;
                            });
                            var chartConfigobj = JSON.parse(chartConfigObj);
                            Object.keys(chartConfigobj).forEach(function (key) {
                                var value = chartConfigobj[key];
                                var key = key.replace(type.toUpperCase(), newchartType);
                                configobj[key] = value;
                            });
                            if (newcharttype != null && newcharttype == 'pie') {
                                configobj[newcharttype.toUpperCase() + "LABELPOSITION"] = "inside";
                                chartpoprobj[newcharttype.toUpperCase() + "LABELPOSITION"] = "data";
                            }
                            if (chartpoprobj != null && !jQuery.isEmptyObject(chartpoprobj)) {
                                chartPropObj = JSON.stringify(chartpoprobj);
                                chartConfigObj = JSON.stringify(configobj);
                            }
                            var SaveButtonEnable = getSaveOptionEnableValue();

                            if (SaveButtonEnable != null && SaveButtonEnable != '' && SaveButtonEnable == 'Y') {
                                stopLoader();
                                var message = 'Do u want to save';
                                var modalObj = {
                                    title: labelObject["Message"] != null ? labelObject["Message"] : "Message",
                                    body: "<div class='isPopupDefaultSaveClass'>" + message + "</div>",
                                };
                                var buttonArray = [
                                    {
                                        text: labelObject['Yes'] != null ? labelObject['Save'] : 'Yes',
                                        click: function () {
                                            //                                        $(".isPopupDefaultSaveClass").val(""); 
                                            updategraphtypes(chartConfigObj, chartPropObj, chartid, newcharttype);
                                            getVisualizeChart(chartid, newcharttype, XAxix, yAxix, table, aggColumnName, filterCondition, chartConfigObj, chartPropObj, count, labelLegend, colorsObj);
                                            count++;
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
                            } else {
                                getVisualizeChart(chartid, newcharttype, XAxix, yAxix, table, aggColumnName, filterCondition, chartConfigObj, chartPropObj, count, labelLegend, colorsObj);
                                // getApplyVisualizeChart(chartid, newcharttype, XAxix, yAxix, table, aggColumnName, filterCondition, chartConfigObj, chartPropObj, createCount, labelLegend, colorsObj);
                                count++;
                            }
                        }

                    }

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

function deleteColumn(checkBoxDataArr, tablename, exiFlag) {
    var selectedRowsData = [];
    var gridId = "";
    if (exiFlag == "Y") {
        gridId = "divGrid-" + tablename;
    } else {
        gridId = "visualizeAreaGirdData1";
    }
    var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    for (var i = 0; i < indexes.length; i++) {
        var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
        if (data != null && data != '' && data != undefined) {
            selectedRowsData.push(data);
        }

    }
    if (indexes.length < 1) {
        $("#visionVisualizationDataChartcount").hide();
        //   $(".VisionImageVisualizationTableClass").css("display","none");
        $("#dialog").html("Are you sure you want to delete Column ??");
        $("#dialog").dialog({resizable: false,
            modal: true,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            height: 'auto',
            minHeight: 'auto',
            minWidth: 350,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $("#dialog").html("");
                        $("#dialog").dialog("close");
                        $("#dialog").dialog("destroy");
                        $("#dialog").append("<div id = 'tablecolumnId' class = 'tablecolumnClass'></div>");
                        $("#tablecolumnId").jqxListBox({
                            filterable: true,
                            checkboxes: true,
                            source: checkBoxDataArr,
                            theme: 'energyblue',
                            displayMember: 'text',
                            valueMember: 'value',
                            width: '310px'
                        });
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            height: 'auto',
                            minHeight: 'auto',
                            minWidth: 350,
                            maxWidth: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['OK'] != null ? labelObject['OK'] : 'OK'),
                                    click: function () {
                                        var checkValues = $("#tablecolumnId").jqxListBox('getCheckedItems');
                                        var values = [];
                                        $.each(checkValues, function (index) {
                                            values.push(this.value);
                                        });
                                        if (values != null && !jQuery.isEmptyObject(values)) {
                                            values = values.toString();
                                        }
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        $.ajax({
                                            type: 'post',
                                            traditional: true,
                                            dataType: 'json',
                                            cache: false,
                                            url: 'deleteTableColumn',
                                            data: {
                                                tableName: tablename,
                                                columnName: values

                                            },
                                            success: function (response) {
                                                if (response != null) {
                                                    var message = response['Message'];
                                                    $("#dialog").html(message);
                                                    $("#dialog").dialog({resizable: false,
                                                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                                        modal: true,
                                                        width: 300,
                                                        height: 135,
                                                        fluid: true,
                                                        buttons: [{
                                                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                                                click: function () {
                                                                    showalterColumnData(tablename, "N");
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
                                },
                            ],
                            open: function () {
                                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                                $(this).closest(".ui-dialog").addClass("visionCommonDialog");
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
                {
                    text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                    }
                }
            ],
            open: function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui) {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
    } else {

        $("#dialog").html("Are you sure you want to delete?");
        $("#dialog").dialog({resizable: false,
            modal: true,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            height: 'auto',
            minHeight: 'auto',
            minWidth: 350,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                    click: function () {
                        $("#dialog").html("");
                        $("#dialog").dialog("close");
                        $("#dialog").dialog("destroy");
                        $.ajax({
                            type: "POST",
                            url: "deleterowdata",
                            cache: false,
                            dataType: 'html',
                            async: false,
                            data: {
                                tablename: tablename,
                                selectedRowsData: JSON.stringify(selectedRowsData)

                            },
                            success: function (response) {
                                $("#dialog").html(response);
                                $("#dialog").dialog({resizable: false,
                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                    modal: true,
                                    width: 300,
                                    height: 135,
                                    fluid: true,
                                    buttons: [{
                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                            click: function () {

                                                showalterColumnData(tablename);
                                                showFileToDxpTableData(tablename);
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
                            },
                            error: function (e) {
                                console.log(e);
                                sessionTimeout(e);
                                stopLoader();
                            }
                        });
                    }
                },
                {
                    text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                    }
                }
            ],
            open: function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                $(this).closest(".ui-dialog").addClass("visionCommonDialog");
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


//function updatechartColor(chartId, createcount, data) {
//    var defaultColors;
//    if (chartId != null && chartId != '' && chartId != undefined) {
//        var graphDiv = document.getElementById(chartId);
//        var data = graphDiv.data;
//        var charttype = data[0].type;
//        if (charttype != null && charttype == 'pie' && charttype != undefined) {
//            defaultColors = data[0]['marker']['colors'];
//        } else if (charttype != null && charttype == 'lines' && charttype != undefined) {
//            defaultColors = [];
//            defaultColors.push(data[0]['marker']['color']);
//        } else if (charttype != null && charttype == 'scatterpolar' && charttype != undefined || charttype == 'scatter') {
//            defaultColors = [];
//            defaultColors.push(data[0]['marker']['color']);
//        } else {
//            defaultColors = data[0]['marker']['color'];
//        }
//    }
//    var offset = "";
//    var parrantId = "";
//    var position = "";
//    if (chartId != null && chartId != undefined) {
//        var selector = $("#" + chartId).find('.modebar-btn').find($("a[data-title='Chart Types']"));
//        var select = $(selector['prevObject'][7]);
//        position = "left";
//        parrantId = select;
//    } else {
//        parrantId = $("#imageid");
//        position = "";
//        offset = {left: 290, top: 60}
//    }
//    $.ajax({
//        type: "POST",
//        url: "getcolorpalleteform",
//        cache: false,
//        dataType: 'json',
//        async: false,
//        data: {
//            coloobjdata: JSON.stringify(data),
//            chartid: chartId,
//            defaultColors: JSON.stringify(defaultColors)
//        },
//        success: function (response) {
//            if (response != null) {
//                var colorpallateobj = response['colorpalateobj'];
//                $("#dxpColorPopOver").remove();
//                $("#dxpCreatePopOver").html("<div id='dxpColorPopOver'></div>");
//                $("#dxpColorPopOver").html(colorpallateobj);
//                //$("#dxpColorPopOver").jqxPopover('open');
//                $("#dxpColorPopOver").jqxPopover({
//                    offset: offset,
//                    position: position,
//                    width: 300,
//                    height: 200,
//                    autoClose: true,
//                    title: "Color Palette", 
//                    showCloseButton: true,
//                    selector: parrantId
//
//                });
//                // $('#dxpColorPopOver').jqxPopover({showArrow: true, arrowOffsetValue: 10});
//                $('#dxpColorPopOver').addClass('chartPallettePopup');
//                $("#dxpColorPopOver").jqxPopover('open');
//            }
//        },
//        error: function (e) {
//            console.log(e);
//            sessionTimeout(e);
//            stopLoader();
//        }
//    });
//}

function updatechartColor(chartId, createcount, data) {
    $('.popover').popover('hide');
    var defaultColors;
    if (chartId != null && chartId != '' && chartId != undefined) {
        var graphDiv = document.getElementById(chartId);
        var data = graphDiv.data;
        var charttype = data[0].type;
        if (data != null && data != undefined && !jQuery.isEmptyObject(data) && data.length == 1) {
            if (charttype != null && charttype == 'pie' && charttype != undefined) {
                defaultColors = data[0]['marker']['colors'];
            } else if (charttype != null && charttype == 'lines' && charttype != undefined) {
                defaultColors = [];
                defaultColors.push(data[0]['marker']['color']);
            } else if (charttype != null && charttype == 'scatterpolar' && charttype != undefined || charttype == 'scatter') {
                defaultColors = [];
                defaultColors.push(data[0]['marker']['color']);
            } else if (charttype != null && charttype != undefined && charttype == 'indicator') {
                defaultColors = [];
                defaultColors.push(data[0]['gauge']['bar']['color']);
            } else {
                defaultColors = data[0]['marker']['color'];
            }
        } else {
            defaultColors = [];
            data.forEach((value, index) => {
                if (chartType != null && chartType != undefined && chartType == 'waterfall') {
                    defaultColors.push(value['increasing']['marker']['color']);
                } else if (charttype != null && charttype == 'lines' && charttype != undefined) {

                    defaultColors.push(value['line']['color']);
                } else if (charttype != null && charttype == 'scatterpolar' && charttype != undefined || charttype == 'scatter') {

                    defaultColors.push(value['fillcolor']);
                } else {
                    defaultColors.push(value['marker']['color']);
                }
            });
        }
    }
    var offset = "";
    var parrantId = "";
    var position = "";
    if (chartId != null && chartId != undefined && chartId != '') {
        var selector = $("#" + chartId).find('[data-title = "Color Pallete"]');
        var select = $(selector['prevObject'][7]);
        parrantId = select;
    } else {
        parrantId = $("#imageid");
    }
    $.ajax({
        type: "POST",
        url: "getcolorpalleteform",
        cache: false,
        dataType: 'json',
        async: false,
        data: {
            coloobjdata: JSON.stringify(data),
            chartid: chartId,
            defaultColors: JSON.stringify(defaultColors)
        },
        success: function (response) {
            if (response != null) {
                var chartTargetID = $("#" + chartId).find('[data-title = "Color Pallete"]');
                var templateDiv = `<div class="popover colorPalletePopOver" role="tooltip" id='colorPalletePopOverID'><div class="arrow"></div><div class='popOverheader'><div class='popoverTitle'><h3 class="popover-header">Color Pallete</h3></div> <div class='closecolorPalletePopover' onclick = closebsPopOver(event)><img src='images/close.png' /></div></div><div class="popover-body"></div></div>`;
//                var htmlData = "<div id='dxpColorPopOver'></div>";
                var colorpallateobj = response['colorpalateobj'];
                $("#dxpColorPopOver").html(colorpallateobj);
                if (parrantId) {
                    parrantId.popover({animation: true, title: 'Color Palette', trigger: 'click', content: colorpallateobj, template: templateDiv, html: true, sanitize: false, boundary: 'viewport', placement: 'auto'});
                    parrantId.popover('show');
                }
                chartTargetID.popover({animation: true, title: 'Color Palette', trigger: 'click', content: colorpallateobj, template: templateDiv, html: true, sanitize: false, boundary: 'viewport', placement: 'auto'});
                chartTargetID.popover('show');
            }
            $(document).on('click', function (e) {
                var isOutsidePopover = !$(e.target).closest('.colorPalletePopOver').length && !$(e.target).closest(parrantId).length;

                if (isOutsidePopover) {
                    $('.popover').popover('hide');
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


function saveDrillDownChart(colName, tableName, paramArray, chartType, chartPropObj, chartConfigObj) {
    var xAxisArr = [];
    var xAxisObj = {};
    xAxisObj['tableName'] = tableName;
    xAxisObj['columnName'] = colName;
    xAxisArr.push(xAxisObj);
    var yAxisArr = [];
    var yAxisObj = {};
    yAxisObj['tableName'] = tableName;
    yAxisObj['columnName'] = "Count(" + colName + ")";
    yAxisObj['aggColumnName'] = 'Count';
    yAxisArr.push(yAxisObj);
    var tablesObj = [tableName];
    var chartId = "visionVisualizeChart";
    var data = {};
    var dataArr = [];
    data['axisColumns'] = JSON.stringify(xAxisArr);
    data['valuesColumns'] = JSON.stringify(yAxisArr);
    data['tablesObj'] = JSON.stringify(tablesObj);
    data['chartType'] = chartType;
    data['chartId'] = chartId;
    data['filterConditions'] = JSON.stringify(paramArray);
    data['chartPropObj'] = chartPropObj;
    data['chartConfigPositionKeyStr'] = chartConfigObj;
    dataArr.push(data);
    $.ajax({
        url: 'getdashbordname',
        type: "POST",
        dataType: 'html',
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                response += "<div id='textReason'><textarea id='reasonId' class='visionDeleteReason' style='display:none'></textarea><br></div>";
                response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any DashBoard Name'] != null ? labelObject['Please give any DashBoard Name'] : 'Please give any DashBoard Name') + "</div>";
                $("#dialog").html(response);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['DashBoard Name'] != null ? labelObject['DashBoard Name'] : 'DashBoard Name'),
                    modal: true,
                    height: 'auto',
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {

                                var dashBoardName = $("#dashbordNameId").val();
                                if (!(dashBoardName != null && dashBoardName != '' && dashBoardName != undefined) || dashBoardName == 'New') {
                                    dashBoardName = $("#reasonId").val();
                                }
                                if (dashBoardName != null && dashBoardName != '' && dashBoardName != undefined && dashBoardName != 'Select' && dashBoardName != 'New') {
                                    $("#dailog_error_id").hide();
                                    $(this).html("");
                                    $(this).dialog("destroy");
                                    $.ajax({
                                        url: 'saveVisualizeData',
                                        type: "POST",
                                        data:
                                                {
                                                    'data': JSON.stringify(dataArr),
                                                    'dashBoardName': dashBoardName
                                                },
                                        traditional: true,
                                        cache: false,
                                        success: function (response) {
                                            console.log("testing");
                                            var msg = " Charts " + response;
                                            var modalObj = {
                                                title: 'Save',
                                                body: msg
                                            };
                                            var buttonArray = [
                                                {
                                                    text: 'Close',
                                                    click: function () {

                                                    },
                                                    isCloseButton: true
                                                }
                                            ];
                                            modalObj['buttons'] = buttonArray;
                                            createModal("dataDxpSplitterValue", modalObj);
                                            $(".modal-dialog").addClass("opacity-animate3");
                                        }, error: function (e) {
                                            sessionTimeout(e);
                                        }
                                    });
                                } else {
                                    $("#dailog_error_id").show();
                                }


                            }
                        },
                        {
                            text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                            click: function () {
                                $(this).html("");
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

function closeChartDiv(chartId, count, chartType) //jaggu charts
{
    $("#" + chartId).remove();
    $("#visionVisualizeChartProperties" + count).empty();
    $("#visionVisualizeChartColumns" + count).empty();
    $("#visionVisualizeChartFilters" + count).empty();
    $("#visionVisualizeChartFiltersValues" + count).empty();
}

function closeCardDiv(chartId, count, chartType) //jaggu charts
{
    $("#" + chartId).remove();
    $("#visionVisualizeChartColumns" + count).empty();
    $("#visionVisualizeChartFilters" + count).empty();
    $("#visionVisualizeChartFiltersValues" + count).empty();
}

function addHomechartSlicerValues(colAppendId, id, label, divid, filterCount) {
    var count = 0;
    var data = {};
    data['count'] = count;
    data['id'] = id;
    data['label'] = label;
    data['divid'] = divid;
    data['filterCount'] = filterCount;
    $.ajax({
        url: 'fetchHomeSlicerValues',
        type: "POST",
        data: data,
        dataType: 'json',
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            $("#Loader").css("display", "none");
            $("body").css({"pointer-events": "auto"});
            if (response != null && !jQuery.isEmptyObject(response)) {
                var result = response['result'];
                $("#" + colAppendId).append(result);
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            sessionTimeout(e);
        }
    });
}



function RemoveSlicerColumns(filterCount, chartType, count) {
    $("#visionVisualizeHomeChartSlicerFieldDivId" + filterCount).remove();
}

function updateHomeSlicerData(chartDropDownVal) {
    var filtersId = "visionVisualizeHomeChartFiltersValues";
    var slicerObj = {};
    var tablesArr = [];
    $('#' + filtersId + ' div.visionVisualizeHomeChartSlicerFieldDivClass').each(function (i, ele) {
        var colName = $(this).children('div:nth-child(1)').children('div:nth-child(1)').find("input").val();
        var operator = $(this).children('div:nth-child(1)').children('div:nth-child(2)').find("select").val();
        var values = $(this).children('div:nth-child(2)').find('input[name="visionVisualizeHomeChartSlicerValuesCheckName"]:checked').map(function () {
            return this.value;
        }).get().join(",");
        var filterConditions = [];
        var filterObj = {};
        var tableName;
        var columnName;
        filterObj['colName'] = colName;
        filterObj['operator'] = operator;
        filterObj['values'] = values;
        if (colName != null && colName != '' && colName != undefined) {
            tableName = colName.split(".")[0];
            columnName = colName.split(".")[1];
            if (slicerObj != null && !jQuery.isEmptyObject(slicerObj) && slicerObj[tableName] && !jQuery.isEmptyObject(slicerObj[tableName])) {
                var filterArr = slicerObj[tableName];
                filterArr.push(filterObj);
                slicerObj[tableName] = filterArr;
            } else {
                filterConditions.push(filterObj);
                slicerObj[tableName] = filterConditions;
                tablesArr.push(tableName);
            }

        }
    });
    $.ajax({
        url: 'getSlicerHomeCharts',
        type: "POST",
        dataType: 'json',
        traditional: true,
        cache: false,
        async: true,
        data: {
            chartDropDownVal: chartDropDownVal,
            tablesArr: JSON.stringify(tablesArr)
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var dataarr = response['dataarr'];
                if (dataarr != null && dataarr != '' && dataarr != undefined) {
                    for (var i = 0; i < dataarr.length; i++) {
                        var XAxix = dataarr[i]['xAxix'];
                        var yAxix = dataarr[i]['yAxix'];
                        var type = dataarr[i]['type'];
                        var table = dataarr[i]['table'];
                        var id = dataarr[i]['chartid'];
                        var Lebel = dataarr[i]['Lebel'];
                        var aggColumnName = dataarr[i]['aggColumnName'];
                        var filterCondition = dataarr[i]['filterCondition'];
                        var chartPropObj = dataarr[i]['chartPropObj'];
                        var chartConfigObj = dataarr[i]['chartConfigObj'];
                        var labelLegend = dataarr[i]['labelLegend'];
                        var parentDiv = $('#' + id).parent();
                        var parentId = parentDiv[0]['id'];
                        var count;
                        if (parentId != null && parentId != '' && parentId != undefined) {
                            count = parentId.replace("homeChartParentDiv", "");
                        }
                        var chartOptionsObj = $("#" + id + "_options").val();
                        if (chartOptionsObj != null && chartOptionsObj != '' && chartOptionsObj != undefined) {
                            chartPropObj = chartOptionsObj;
                        }
                        var chartFilter = $("#" + id + "_filter").val();
                        if (slicerObj != null && !jQuery.isEmptyObject(slicerObj)) {
                            var slicerFilter = slicerObj[table];
                            if (chartFilter != null && chartFilter != '' && chartFilter != undefined) {
                                chartFilter = JSON.parse(chartFilter);
                                if (chartFilter != null && !jQuery.isEmptyObject(chartFilter)) {
                                    for (var key in chartFilter) {
                                        var paramObj = chartFilter[key];
                                        slicerFilter.push(paramObj);
                                    }
                                }
                            }
                        }
                        if (slicerFilter != null && !jQuery.isEmptyObject(slicerFilter)) {
                            slicerFilter = JSON.stringify(slicerFilter);
                        }

                        getVisualizeChart(id, type, XAxix, yAxix, table, aggColumnName, slicerFilter, chartPropObj, chartConfigObj, count, labelLegend);
                    }
                }

            }
        }, error: function (e) {
            sessionTimeout(e);
        }
    });
}

function hideAxisLabelsTooltipOnHover($this, labelTextDiv, chartId) {
//	var curreText = $this.children().text();
    var curreText = $this.children().attr('data-unformatted');
    var currentLabelMainDiv = $this.parents().find("#" + chartId);
    var currentLabelSpanEle = $(currentLabelMainDiv).find("." + labelTextDiv).attr("class");
    $("." + currentLabelSpanEle + " span:contains('" + curreText + "')").hide();
}
function tableColumnsFilteration(event, $this) {
    var text = event.target.value;
    var pattern = new RegExp(text, 'i');
    var listItems = $this.parents('.visionVisualizationDragColumns').find('li');
    var listElementsLength = listItems.length;
    for (var i = 0; i < listElementsLength; i++) {
        var item = listItems[i];
        if (pattern.test(item.innerText)) {
            $(item).show();
        } else {
            $(item).hide();
        }
    }
    var toShowNoColsText = true;
    for (var i = 1; i < listElementsLength; i++) {
        var item = listItems[i];
        if (($(item).css('display') === 'list-item')) {
            toShowNoColsText = false;
        }
    }
    var lastListItem = listItems[listElementsLength - 1];
    if (toShowNoColsText) {
        $(lastListItem).show();
        $(lastListItem).attr('class', "");
    } else {
        $(lastListItem).hide();
    }
}

function getChartContent(chartId, count, charttype) {

    $.ajax({
        type: "POST",
        url: "getchartchildElement",
        cache: false,
        data: {
            chartid: chartId,
            count: count,
            chartType: charttype
        },
        success: function (response) {
            $("#dialog1").html(response);
            $("#dialog1").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: 'auto',
                minWidth: 600,
                maxWidth: 'auto',
                fluid: true,
                open: function () {
                    stopLoader();
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                    $("#dialog1").addClass("predictiveAnalysis");
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

function getpredictivechart(event, chartId, charttype, count, pridictionkey) {

    $("#predictiveAvg").remove()
    $("#pageBody").append("<div id='predictiveAvg'><h6 class='selectIntervalClass'>Select Interval</h6></div>");
    $(".searchFilterResultsList").removeClass("active");
    $(event.target).parent().addClass("active");
    var valesArr = [];
    var str = "";
    var list = ['2', '3', '4', '5'];
    for (var value of list) {
        str = $('#predictiveAvg').append(`<label class="form-check-label"><input class="" type="radio" id="${value}" name="interest" value="${value}">&nbsp;&nbsp;${value}</label>`).append(`<br>`);
    }
    if (pridictionkey != null && pridictionkey == 'M' || pridictionkey == 'E') {
        $("#predictiveAvg").click(function () {
            $("#predictiveAvg").find('input[type="radio"]:checked').each(function () {
                var value = $(this).val();
                valesArr.push(value);
                if (valesArr != null && valesArr != '' && valesArr != 'undefine') {
                    getpridictiveData(valesArr.toString(), count, chartId, charttype, pridictionkey);
                    valesArr.pop(value);
                }
            });
        });
        $("#dialog1").append(str);
    } else {
        $("#predictiveAvg").html("");
        getpridictiveData('', count, chartId, charttype, pridictionkey);
    }

}


function assignUser(chartId, chartType, layout, data, count, event) {
    chartId = $(chartId).attr('id');
    $("#userRoleDivID").html("");
    $("#userRoleDivID").hide();
    $("#userroleId").html("");
    $("#userRoletitleId").html("");
    //    $("#userRolecontent").html("");
    $.ajax({
        type: "POST",
        url: "getlandingGraphData",
        cache: false,
        dataType: 'json',
        data: {
            chartId: chartId
        },
        success: function (response) {
            var valesArr = [];
            var dataarray = response['dataarr'];
            var users = response['users'];
            if (response != null) {
                $("#dialog").html(users);
                $("#applybuttonId").remove();
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 400,
                    height: 250,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Create'] != null ? labelObject['Create'] : 'Create'),
                            click: function () {
                                createChart(chartId, valesArr.toString(), dataarray);
                            }
                        },
                        {
                            text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                            click: function () {
                                $("#chartdialog").empty();
                                $("#chartdialog").dialog('close');
                                endAjax();
                            }
                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                        $(".ui-dialog-content").css("text-align", "inherit");
                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
                $("#rolesdataId").click(function () {
                    $("#rolesdataId").find('input[type="checkbox"]:checked').each(function () {
                        var value = $(this).val();
                        valesArr.push(value);
                    });
                });
            }
        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}


function getdashbordNewName(id) {
    var dashbordname = $("#" + id).val();
    if (dashbordname == 'New') {
        $("#reasonId").show();
        $("#dailog_error_id").hide();
    } else {
        $("#reasonId").hide();
        $("#dailog_error_id").hide();
    }
}

function getHetaMap(chartId, result, count) {
    var xAxis = result['xAxis'];
    var yAxis = result['yAxis'];
    var data = result['source'];
    var gratearVal = result['gratearVal'];
    var dataPropObject = result['dataPropObject'];
    var title;
    $.each(dataPropObject, function (key, val) {
        title = (val != null) ? val : "";
    });
    title = "Heap Map";
    var xAxisObj = {};
    xAxisObj['labels'] = xAxis;
    var yAxisObj = {};
    yAxisObj['labels'] = yAxis;
    var heapMapChartId = "visionVisualizeChart" + count;
    var heapMapChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + chartId).empty();
    $("#" + chartId).css("width", "890px", "!important");
    $("#" + chartId).css("height", "490px", "!important");
    $("#" + heapMapChartId).css("width", "900px", "!important");
    $("#" + heapMapChartId).css("height", "500px", "!important");
    $("#" + heapMapChartHomeId).css("width", "890px", "!important");
    $("#" + heapMapChartHomeId).css("height", "500px", "!important");
    $("#" + heapMapChartHomeId).addClass("visionVisualChartBoxClass");
    $("#" + chartId).jqxHeatMap({
        xAxis: xAxisObj,
        yAxis: yAxisObj,
        source: data,
        title: title,
        legendSettings: {
            position: 'top'
        },
        paletteSettings: {
            palette: [
                {value: 0, color: '#fcba03'},
                {value: 1000, color: '#5dc3f0'},
                {value: 10000, color: '#4bb1de'},
                {value: 500000, color: '#0373fc'},
                {value: gratearVal, color: '#3885a6'}],
            type: 'Gradient',
        }
    });
}


function getCardGridData(event) {
    console.log("test");
    var chartId = $(event.target).parent().attr("id");
    $.ajax({
        type: "POST",
        url: "getlandingGraphData",
        cache: false,
        dataType: 'json',
        data: {
            chartId: chartId
        },
        success: function (response) {
            console.log(response);
            var dataarr = response['dataarr'];
            var DivId = response['chartDiv'];
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
                    var filterCondition = dataarr[i]['filterColumns'];
                    var chartPropObj = dataarr[i]['chartPropObj'];
                    var chartConfigObj = dataarr[i]['chartConfigObj'];
                    var labelLegend = dataarr[i]['labelLegend'];
                    getGridData(XAxix, '', chartId, filterCondition, type);
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


function updatechartSetting(chartid, chartType, axix, values, table, aggColumnName, filterCondition, chartPropObj, chartConfigObj, chartConfigToggleStatusStr) {
    console.log("chartOptAllObj" + chartPropObj);
    $.ajax({
        type: "POST",
        url: "updatechartSettingdata",
        cache: false,
        dataType: 'html',
        data: {
            chartId: chartid,
            chartOptAllObj: chartPropObj,
            chartConfigPositionKeyStr: chartConfigObj,
            chartConfigToggleStatusStr: chartConfigToggleStatusStr,
            chartType: chartType,
        },
        success: function (response) {
            console.log(response);
            if (response != null && response != '') {
                var responseHtml = '<h5>' + response + '</h5>';
                var buttonArray = [
                    {
                        text: 'Close',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                showPopUpWithButtonFunctionCall(responseHtml, buttonArray);
                // getVisualizeChart(chartid, chartType, axix, values, table, aggColumnName, filterCondition, chartPropObj, chartConfigObj);
            }


        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}




function getParticularVisualizeChart(chartId, checkedVal, chartType) {
    var chartIds = [];
    chartIds.push(chartId);
    $.ajax({
        url: 'getChartData',
        type: "POST",
        dataType: 'json',
        traditional: true,
        cache: false,
        async: true,
        data: {
            chartIds: JSON.stringify(chartIds)
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var dataarr = response['dataarr'];
                if (dataarr != null && dataarr != '' && dataarr != undefined) {
                    var count = 0;
                    for (var i = 0; i < dataarr.length; i++) {
                        var XAxix = dataarr[i]['xAxix'];
                        if (XAxix != null && XAxix != '' && XAxix != undefined && checkedVal != null && checkedVal != '' && checkedVal != undefined) {
                            XAxix = JSON.parse(XAxix);
                            if (XAxix != null && !jQuery.isEmptyObject(XAxix)) {
                                var xAxisObj = {};
                                xAxisObj['tableName'] = checkedVal.split(".")[0];
                                xAxisObj['columnName'] = checkedVal;
                                if (XAxix.length == 2) {
                                    XAxix.splice(1, 1);
                                }
                                XAxix.push(xAxisObj);
                                XAxix = JSON.stringify(XAxix);
                            }
                        }
                        var yAxix = dataarr[i]['yAxix'];
                        var type = dataarr[i]['type'];
                        var table = dataarr[i]['table'];
                        var id = dataarr[i]['chartid'];
                        var Lebel = dataarr[i]['Lebel'];
                        var aggColumnName = dataarr[i]['aggColumnName'];
                        var filterCondition = dataarr[i]['filterCondition'];
                        var chartPropObj = dataarr[i]['chartPropObj'];
                        var chartConfigObj = dataarr[i]['chartConfigObj'];
                        var labelLegend = dataarr[i]['labelLegend'];
                        var colorsObj = dataarr[i]['colorsObj'];
                        var chartConfigToggleStatus = dataarr[i]['chartConfigToggleStatus'];
                        var homeFilterColumn = dataarr[i]['homeFilterColumn'];
                        var fetchQuery = dataarr[i]['fetchQuery'];
                        var radioButtons = dataarr[i]['radioButtons'];
                        var filterConditions = $("#" + chartId + "_filter").val();
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
                                } else {
                                    filterConditions = JSON.stringify(filterCondition);
                                }
                            }
                        } else if (filterConditions != null && filterConditions != '' && filterConditions != undefined) {
                            filterConditions = JSON.parse(filterConditions);
                            if (filterConditions != null && !jQuery.isEmptyObject(filterConditions)) {
                                if (filterCondition != null && filterCondition != '' && filterCondition != undefined) {
                                    filterCondition = JSON.parse(filterCondition);
                                    for (var key in filterCondition) {
                                        var paramObj = filterCondition[key];
                                        filterConditions.push(paramObj);
                                    }
                                    if (filterConditions != null && !jQuery.isEmptyObject(filterConditions)) {
                                        filterConditions = JSON.stringify(filterConditions);
                                    }
                                }
                            } else {
                                filterConditions = JSON.stringify(filterConditions);
                            }
                        }
                        if (yAxix != null && yAxix != '' && yAxix != 'undefined' && type != 'Card') {
                            var chartid = id;
                            getVisualizeChart(chartid, chartType, XAxix, yAxix, table, aggColumnName, filterConditions, chartPropObj, chartConfigObj, count, labelLegend, colorsObj, chartConfigToggleStatus, "", "", fetchQuery, radioButtons);
                            count++
                        }

                    }
                }

            }
        }, error: function (e) {
            sessionTimeout(e);
        }
    });
}


function saveHomeChartColors(chartId, chartType, pn, tn, colotrs) {
    $.ajax({
        type: "POST",
        url: "saveHomeChartsColorsData",
        cache: false,
        dataType: 'json',
        data: {
            chartId: chartId,
            chartType: chartType,
            pn: pn,
            tn: tn,
            colotrs: colotrs
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                var result = response['Message'];
                $("#dialog1").html("<div style='text-align:center'>" + result + "</div>");
                $("#dialog1").dialog({resizable: false,
                    height: 120,
                    minWidth: 100,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    fluid: true,
                    buttons: [{
                            text: ((labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok')),
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



function RemoveCompareFilterColumns(id) {
    $("#" + id).remove();
}



function getHomeCompareChartFilterData(id, dashbordname, homeFilterColumn) {
    $.ajax({
        type: "POST",
        url: "updteCompareFilterColumnsData",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            compareFilterData: homeFilterColumn,
            dashbordName: dashbordname
        },
        success: function (response) {
            if (response != null && response != '' && response != undefined) {
                response = JSON.parse(response);
                var result = response['result'];
                var jsDateItems = response['jsDateItems'];
                var dataColObj = response['dataColObj'];
                $("#" + id).html(result);
                $.each(dataColObj, function (key, value) {
                    if (value != null && !jQuery.isEmptyObject(value)) {
                        $("#" + key).jqxDropDownList({
                            filterable: true,
                            checkboxes: true,
                            source: value,
                            theme: 'energyblue',
                            displayMember: 'text',
                            valueMember: 'value'

                        });
                    }
                });
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
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}


function updateHomeCompareFilterData(items) {
    var dashbordName;
    var item = $("#OptionDropdownData").jqxDropDownList('getSelectedItem');
    if (item != null)
    {
        dashbordName = item.value;
    }
    $.ajax({
        type: "POST",
        url: "updteCompareFilterColumn",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            compareFilterData: JSON.stringify(items),
            dashbordName: dashbordName
        },
        success: function (response) {
            if (response != null) {
                var modalObj = {
                    title: 'Message',
                    body: response
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dialog", modalObj);
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}




function updateHomeFilterData(items) {
    var dashbordName;
    var item = $("#OptionDropdownData").jqxDropDownList('getSelectedItem');
    if (item != null)
    {
        dashbordName = item.value;
    }
    $.ajax({
        type: "POST",
        url: "updteFilterColumn",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            Columndata: JSON.stringify(items),
            dashbordName: dashbordName
        },
        success: function (response) {
            if (response != null) {
                var modalObj = {
                    title: 'Filters',
                    body: response
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            getVisualizationchart(dashbordName, "");
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dialog", modalObj);
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}


function dashBoardHeaderFilter(id, columnName) {
//    var divId = "<div id='" + id + "_divId' class='dashBoardHeaderFilterFormClass'>" + columnName + "</div>";

    var divId = "<div id='" + id + "_divId' class='dashBoardHeaderFilterFormClass' ondblclick=hideColName('" + id + "')><span style='line-height: 23px; '>" + columnName + "</span><img src='images/close_white.png'  class='VisualizeColumnCancelClass' onclick=RemoveHeaderFilterColumns('" + id + "')  title='Close Chart'/></div>";
    $("#" + id + "liId").hide();
    $("#visionVisualizeHomeChartFiltersValues").append(divId);

}

function hideColName(id) {
    $("#" + id + "liId").show();
    $("#" + id + "_divId").hide();
}
function RemoveHeaderFilterColumns(id) {
    $("#" + id + "_divId").remove();
    $("#" + id + "liId").show();
}
function deleteHeaderFilterColumns(id, columnname) {
    $("#" + id).remove();
}

function dashBoardDrilldownColumns(id, columnName) {
    var divId = "<div id='" + id + "_divId' class='dashBoardHeaderFilterFormClass' ondblclick=hideDrillDownFilterColName('" + id + "')><span style='line-height: 23px; '>" + columnName + "</span><img src='images/close_white.png'  class='VisualizeColumnCancelClass' onclick=RemoveDrillDownColumns('" + id + "')  title='Remove Column'/></div>";
    $("#" + id).hide();
    $("#visionVisualizeChartXAxisFiltersValues").html(divId);
}
function hideDrillDownFilterColName(id) {
    $("#" + id).show();
    $("#" + id + "_divId").hide();
}
function RemoveDrillDownColumns(id) {
    $("#" + id + "_divId").remove();
    $("#" + id).show();
}
function deleteHeaderFilterColumns(id, columnname) {
    $("#" + id).remove();
}






function createFilterHeader(id, type, FilterColumn, dashbordname) {
    console.log();
    $("#" + id).html("");
    $.ajax({
        type: "POST",
        url: "createFilterHeader",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            id: id,
            type: type,
            FilterColumn: FilterColumn,
            dashbordname: dashbordname
        },
        success: function (response) {
            if (response != null) {
                response = JSON.parse(response);
                var str = response['filterstr'];
                $("#" + id).append(str);
                var dataColObj = response['dataColObj'];
                $.each(dataColObj, function (key, value) {
                    if (value != null && !jQuery.isEmptyObject(value)) {
                        var dropdownTableColName = $("#" + key).attr("data-tablecolumn");
                        var dropdownColName = "";
                        if (!isNullOrUndefined(dropdownTableColName) && dropdownTableColName !== '') {
                            var tableColNameAsTitle = dropdownTableColName.replaceAll("_", " ");
                            tableColNameAsTitle = tableColNameAsTitle.replace(/(^.|\s+.)/g, m => m.toUpperCase())
                            $("#" + key).attr("title", tableColNameAsTitle);
                            dropdownColName = dropdownTableColName.split('.')[1].toLowerCase();
                            dropdownColName = dropdownColName.replaceAll("_", " ");
                        }
                        //						var placeHolderValue = key.substr(14, key.length - 14).replaceAll('Id', '').replaceAll("_", " ").toLowerCase();
                        $("#" + key).jqxDropDownList({
                            filterable: true,
                            checkboxes: true,
                            source: value,
                            theme: 'energyblue',
                            displayMember: 'text',
                            valueMember: 'value',
                            placeHolder: "" + dropdownColName.replace(/(^.|\s+.)/g, m => m.toUpperCase()) + "",
                        });
                        var handleCheckChange = true;
                        $("#" + key).on('checkChange', function (event) {
                            if (!handleCheckChange)
                                return;
                            if (event.args.label != 'Select All') {
                                handleCheckChange = false;
                                //								$("#" + key).jqxDropDownList('checkIndex', 0);
                                var checkedItems = $("#" + key).jqxDropDownList('getCheckedItems');
                                var items = $("#" + key).jqxDropDownList('getItems');
                                //								if (checkedItems.length == 1) {
                                //									$("#" + key).jqxDropDownList('uncheckIndex', 0);
                                //								}else 
                                if (items.length != checkedItems.length && checkedItems.length > 0
                                        && checkedItems[0].label === 'Select All') {
                                    $("#" + key).jqxDropDownList('indeterminateIndex', 0);
                                }
                                handleCheckChange = true;
                            } else {
                                handleCheckChange = false;
                                if (event.args.checked) {
                                    $("#" + key).jqxDropDownList('checkAll');
                                } else {
                                    $("#" + key).jqxDropDownList('uncheckAll');
                                }

                                handleCheckChange = true;
                            }
                        });
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

function toggleRange(rowid) {
    $("#to" + rowid).toggle();
    $("#tbmin" + rowid).toggle();
    $("#tbmax" + rowid).toggle();
    $("#tb" + rowid).toggle();
    if ($("#tb" + rowid).css('display') != 'none') {
        $("#tbmin" + rowid).val("");
        $("#tbmax" + rowid).val("");
        $("#ddw" + rowid).val("EQUALS");
    } else {
        $("#ddw" + rowid).val("BETWEEN");
        $("#tb" + rowid).val("");
    }

}

//function getAllImagesInPdf() {
//    var allImageContent = {};
//    var i = 1;
//    var downloadChartImagperrow = "2";
//    try {
//        downloadChartImagperrow = $("#downloadChartImagperrow").val();
//    } catch (er) {
//        downloadChartImagperrow = "2";
//    }
//    $(".chartMain").each(function () {
//        var id = $(this).attr('id');
//        if (id != null && id != '' && id != undefined) {
//            if (!($("#" + id).hasClass("js-plotly-plot"))) {
//                var img = new Image();
//                var dom = document.getElementById(id);
//                var myChart = echarts.init(dom, null, {
//                    renderer: 'canvas',
//                    useDirtyRect: true
//                });
//                img.src = myChart.getDataURL({
//                    pixelRatio: 2,
//                    backgroundColor: '#fff',
//                    type: 'png'
//                });
//                allImageContent[i] = img.src;
//                i++;
//            } else {
//                var graphDiv = document.getElementById(id);
//                var plotData = Plotly.toImage(graphDiv, {format: 'png', height: 400, width: 700}).then(function (url) {
//                    allImageContent[i] = url;
//                    i++;
//                });
//            }
//        }
//    });
//    setTimeout(function () {
//
//        if (allImageContent != null && !jQuery.isEmptyObject(allImageContent)) {
//            $("#chartImageObj").val(JSON.stringify(allImageContent));
//            $("#chartImageperrow").val(downloadChartImagperrow);
//            var csrfToken = $('meta[name="_csrf"]').attr('content');
//            if (csrfToken != null && csrfToken != '') {
//                var csrf = "<input type='hidden' name='_csrf' value='" + csrfToken + "'/>";
//                $("#pdfChartForm").append(csrf);
//            }
//            $("#pdfChartForm").submit();
//        }
//    }, 1000);
//}

function getBarAndLineChart(chartId, response, count, chartType) {
    chartType = 'BarAndLine';
    $("#visionVisualizeChartId" + count).remove();
    var parentId = $("#" + chartId).parents(".homeChartWrapDiv").attr("id");
    var BarAndLineChartId = "visionVisualizeChart" + count;
    var BarAndLineChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + BarAndLineChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "300px", "!important");
    $("#" + chartId).css("height", "400px", "!important");
    $("#" + BarAndLineChartId).css("width", "450px", "!important");
    $("#" + BarAndLineChartId).css("height", "400px", "!important");
    $('#stackedBarChart_tooltip').remove();
    $('body').append(`<div id="stackedBarChart_tooltip" class="stackedBarChartcustomTooltip"></div>`);
    $("#" + parentId).css("width", "400px", "!important");
    $("#" + parentId).css("height", "400px", "!important");
    $("#" + BarAndLineChartHomeId).addClass("visionVisualChartBoxClass");
    var dom = document.getElementById(chartId);
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    if (response != null && !jQuery.isEmptyObject(response)) {
        var legend = response['legend'];
        var xAxis = response['xAxis'];
        var yAxis = response['yAxis'];
        var series = response['series'];
        var color = response['color'];
        var option = {
            color: color,
            legend: legend,
            xAxis: xAxis,
            yAxis: yAxis,
            series: series,
            toolBox: echartToolBar(chartType)
        };
        var tableName = response['tableName'];
        getToolBox(chartId, chartType, tableName, "", response, count, 3);

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    }

}

function updateDataType(tablename) {        // 8setp
    var table = tablename.toUpperCase();
    var dataColumn = $("#selectOptionAnlysisData1").val();
    var dataTypeOrecal = $("#selectOptionAnlysisData").val();
    var dataSize = $("#selectOptionDataType").val();
    var dataInputType = $('#quantity').val();
    $("#dimensionTranspose").jqxDropDownList({//7 sept/22
//     source: source,
        theme: 'energyblue',
        width: '200px',
        height: '20px',
        dropDownHeight: 200,
    });
    $.ajax({
        type: "POST",
        url: "setImportData",
        cache: false,
        dataType: 'html',
        async: false,
        data: {
            'tablename': table,
            'dataColumn': dataColumn,
            'dataTypeOrecal': dataTypeOrecal,
            'dataSize': dataSize,
            'dataInputType': dataInputType,
        },
        success: function (response) {
            var responceResult = '';
            if (response === "false") {
                responceResult = "please select correct Datatype";
            } else if (response === "true") {
                responceResult = "Updated Sucessfull.";
            }
            var modalObj = {
                title: 'Output',
                body: responceResult
            };
            var buttonArray = [
                {
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        $("#playAudioClipEmojiStop").remove();
                    },
                    isCloseButton: true
                }
            ];
            modalObj['buttons'] = buttonArray;
            createModal("dataDxpSplitterValue", modalObj);
            $(".modal-dialog").addClass("modal-sm");
        },
    })
}



function getBasicAreaChart(chartId, response, count, chartType) {
    $("#visionVisualizeChartId" + count).remove();
    var basicAreaChartId = "visionVisualizeChart" + count;
    var basicAreaChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + basicAreaChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + basicAreaChartId).css("width", "auto", "!important");
    $("#" + basicAreaChartId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).css("width", "auto", "!important");
    $("#" + basicAreaChartHomeId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).addClass("visionVisualChartBoxClass");
    var chartDom = document.getElementById(chartId);
    var myChart = echarts.init(chartDom);
    var chartDataObj = response['data'];
    var keys = Object.keys(chartDataObj);
    var xAxisArr;
    var yAxisArr;
    var noOfCol = keys.length;
    for (var i = 0; i < noOfCol; i++) {
        var key = keys[i];
        if (Array.isArray(chartDataObj[key])) {
            if (chartDataObj[key].every((val) => typeof val === 'number')) {
                yAxisArr = chartDataObj[key];
            } else {
                xAxisArr = chartDataObj[key];
            }
        }
    }

    var chartEditoptions;
    var hoverlabeldata;
    var labeldata;
    var bigChartType = chartType.toUpperCase();
    if (response['chartCOnfigObjStr'] != null && response['chartCOnfigObjStr'] != undefined) {
        chartEditoptions = JSON.parse(response['chartCOnfigObjStr']);
        if (chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count] != null && chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count] != "")
            hoverlabeldata = chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count]
        if (chartEditoptions[bigChartType + 'LABELDATA' + count] != null && chartEditoptions[bigChartType + 'LABELDATA' + count] != "")
            labeldata = chartEditoptions[bigChartType + 'LABELDATA' + count]
    }

    var EditIcon = {
        'height': 512,
        'width': 512,
        'id': chartId,
        'path': 'M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z',
        'color': 'rgb(31,119,180)'
    };

    var option;
    var rawData = yAxisArr;
    var total = rawData.reduce((sum, value) => sum + value, 0);
    var percentArr = rawData.map(value => ((value / total) * 100).toFixed(2) + '%');
    var mode = $('#' + bigChartType + 'MODE' + count).val();
    var title = response['chartTitle'] || $('#' + bigChartType + 'CHARTTITLE' + count).val();
    var labelData = $('#' + bigChartType + 'LABELDATA' + count).val();
    var hoverlabeldata = $('#' + bigChartType + 'HOVERLABELDATA' + count).val();
    var labelPosition = $('#' + bigChartType + 'LABELPOSITION' + count).val();
    var markerShape = $('#' + bigChartType + 'MARKERSHAPE' + count).val();
    var symbolSize = $('#' + bigChartType + 'MARKERSIZE' + count).val();

    var hoverBGColor = $('#' + bigChartType + 'HOVERBG' + count).val();
    var hoverBorderColor = $('#' + bigChartType + 'HOVERBORDERCOLOR' + count).val();
    var hoverFontColor = $('#' + bigChartType + 'HOVERFONTCOLOR' + count).val();
    var hoverTextFont = $('#' + bigChartType + 'HOVERFONTFAMILY' + count).val();
    if (hoverTextFont == undefined || hoverTextFont == null || hoverTextFont == ' ') {
        hoverTextFont = 'Arial, sans-serif';
        $('#' + bigChartType + 'HOVERFONTFAMILY' + count).val('Arial, sans-serif');

    }
    var hoverTextSize = $('#' + bigChartType + 'HOVERFONTSIZE' + count).val();

    hoverTextSize = (hoverTextSize != undefined && hoverTextSize != '' && hoverTextSize != null) ? parseInt(hoverTextSize) : 10;
    symbolSize = (symbolSize != undefined && symbolSize != '' && symbolSize != null) ? parseInt(symbolSize) : 10;

    var markerColor = $('#' + bigChartType + 'COLORSMARKER' + count).val();
    var markerSize = $('#' + bigChartType + 'MARKERSIZE' + count).val();
    markerSize = (markerSize != undefined && markerSize != '' && markerSize != null) ? parseInt(markerSize) : 10;



    var areaColor = $('#' + bigChartType + 'COLORSAREA' + count).val();
    var areaopacity = $('#' + bigChartType + 'OPACITY' + count).val();
    areaopacity = (areaopacity != undefined && areaopacity != '' && areaopacity != null) ? areaopacity : "0.8";

    var linecolor = $('#' + bigChartType + 'LINECOLORS').val();
    var lineWidth = $('#' + bigChartType + 'LINEWIDTH').val();
    lineWidth = (lineWidth != undefined && lineWidth != '' && lineWidth != null) ? parseInt(lineWidth) : 10;

    var linetype = $('#' + bigChartType + 'LINEDASH').val();
    var isSmooth = false;
    if (linetype === 'smooth') {
        isSmooth = true;
    }



    option = {
        title: {
            text: title,

        },
        xAxis: {
            type: 'category',
            data: xAxisArr
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                smooth: 0.5,
                data: yAxisArr,
                type: 'line',
                symbol: markerShape,
                lineStyle: {
                    color: linecolor, // Line color in hexadecimal notation
                    width: lineWidth, // Line width
                    type: linetype // Line type: 'solid', 'dashed', 'dotted', etc.
                },
                areaStyle: {
                    color: areaColor,
                    opacity: areaopacity // Area opacity
                },
                itemStyle: {
                    color: markerColor, // Marker color in hexadecimal notation
                    borderColor: '#168ab9', // Border color of the marker
                    borderWidth: 2, // Border width of the marker
                    borderType: 'solid', // Border type of the marker
                    opacity: 1, // Opacity of the marker
                    shadowColor: '#168ab9', // Shadow color of the marker
                    shadowBlur: 10 // Shadow blur of the marker
                },
                label: {
                    position: labelPosition,
                    formatter: function (params) {
                        var dataIndex = params.dataIndex;
                        if (labeldata != null && labeldata.trim() !== '') {
                            if (labeldata === 'x') {
                                return params.name;
                            }
                            if (labeldata === 'y') {
                                return params.value.toString(); // Convert value to string
                            }
                            if (labeldata === '%') {
                                return ' (' + percentArr[dataIndex] + ')';
                            }
                            if (labeldata === 'x+y') {
                                return params.name + ': ' + params.value.toString(); // Convert value to string
                            }
                            if (labeldata === 'x+%') {
                                return params.name + ' (' + percentArr[dataIndex] + ')';
                            }
                            if (labeldata === 'y+%') {
                                return params.value.toString() + ' (' + percentArr[dataIndex] + ')'; // Convert value to string
                            }
                        }
                    }
                }
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross', // You can also use 'shadow', 'cross', etc. for different pointer types
                label: {
                    backgroundColor: hoverBGColor, // Set the background color of the tooltip label
                    borderColor: hoverBorderColor, // Set the border color of the tooltip label
                    borderWidth: 1, // Set the border width of the tooltip label
                    borderRadius: 5, // Set the border radius of the tooltip label
                    color: hoverFontColor, // Set the text color of the tooltip label
                    fontFamily: hoverTextFont, // Set the font family of the tooltip label
                    fontSize: hoverTextSize, // Set the font size of the tooltip label
                    fontWeight: 'bold', // Set the font weight of the tooltip label
                },
            },

            formatter: function (params) {
                var dataIndex = params[0].dataIndex;
                if (hoverlabeldata != null && hoverlabeldata.trim() !== '') {
                    if (hoverlabeldata === 'x') {
                        return params[0].name;
                    }
                    if (hoverlabeldata === 'y') {
                        return params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === '%') {
                        return ' (' + percentArr[dataIndex] + ')';
                    }
                    if (hoverlabeldata === 'x+y') {
                        return params[0].name + ': ' + params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === 'x+%') {
                        return params[0].name + ' (' + percentArr[dataIndex] + ')';
                    }
                    if (hoverlabeldata === 'y+%') {
                        return params[0].value.toString() + ' (' + percentArr[dataIndex] + ')'; // Convert value to string
                    }
                }
            }
        },
        /* toolbox: {
         feature: {
         myDelete: {
         show: true,
         title: 'Delete',
         icon: 'image://images/delete.png',
         onclick: function () {
         deleteVisualizeChart(chartId, "", chartType, "");
         }
         },
         Edit: {
         show: true,
         title: 'Edit',
         icon: EditIcon,
         onclick: function () {
         homePageChartSetting(chartId, chartType, "", chartDataObj, count, event, "", "");
         }
         }
         }
         }*/

    };



    if (mode === "lines")
        markerSize = 0;
    if (labeldata !== "''")
        option.series[0].label.show = 'true';
    option.series[0].symbolSize = markerSize;
    if (option && typeof option === 'object') {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }



}

function getStackedAreaChart(chartId, response, count, chartType) {
    $("#visionVisualizeChartId" + count).remove();
    var basicAreaChartId = "visionVisualizeChart" + count;
    var basicAreaChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + basicAreaChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + basicAreaChartId).css("width", "auto", "!important");
    $("#" + basicAreaChartId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).css("width", "auto", "!important");
    $("#" + basicAreaChartHomeId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).addClass("visionVisualChartBoxClass");
    var chartDom = document.getElementById(chartId);
    var myChart = echarts.init(chartDom);
    var chartDataObj = response['data'];
    var keys = Object.keys(chartDataObj);
    var xAxisArr;
    var yAxisArr = [];
    var series = [];
    var chartEditoptions;
    var hoverlabeldata;
    var labeldata;
    var bigChartType = chartType.toUpperCase();
    var colorsObj = response['colorsObj'];
    var colorsObj = response['colorsObj'];
    var colorsArr = [];
    if (colorsObj != undefined && colorsObj != null && colorsObj != '') {
        colorsArr = JSON.parse(colorsObj)['clrs'];
    } else {
        colorsArr = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
        response['colorsObj'] = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
    }


    if (response['chartCOnfigObjStr'] != null && response['chartCOnfigObjStr'] != undefined) {
        chartEditoptions = JSON.parse(response['chartCOnfigObjStr']);
        if (chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count] != null && chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count] != "")
            hoverlabeldata = chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count]
        if (chartEditoptions[bigChartType + 'LABELDATA' + count] != null && chartEditoptions[bigChartType + 'LABELDATA' + count] != "")
            labeldata = chartEditoptions[bigChartType + 'LABELDATA' + count]
    }
    var option;


    var mode = $('#' + bigChartType + 'MODE' + count).val();
    var title = response['chartTitle'] || $('#' + bigChartType + 'CHARTTITLE' + count).val();
    var labelData = $('#' + bigChartType + 'LABELDATA' + count).val();
    if (labelData == null || labelData == undefined || labelData == "''")
        labelData = 'x+y';
    var hoverlabeldata = $('#' + bigChartType + 'HOVERLABELDATA' + count).val();
    var labelPosition = $('#' + bigChartType + 'LABELPOSITION' + count).val();
    var markerShape = $('#' + bigChartType + 'MARKERSHAPE' + count).val();
    markerShape = (markerShape != null || markerShape != undefined || markerShape != "") ? markerShape : "triangle";
    var symbolSize = $('#' + bigChartType + 'MARKERSIZE' + count).val();

    var hoverBGColor = $('#' + bigChartType + 'HOVERBG' + count).val();
    var hoverBorderColor = $('#' + bigChartType + 'HOVERBORDERCOLOR' + count).val();
    var hoverFontColor = $('#' + bigChartType + 'HOVERFONTCOLOR' + count).val();
    var hoverTextFont = $('#' + bigChartType + 'HOVERFONTFAMILY' + count).val();
    if (hoverTextFont == undefined || hoverTextFont == null || hoverTextFont == '') {
        hoverTextFont = 'Arial, sans-serif';
        $('#' + bigChartType + 'HOVERFONTFAMILY' + count).val('Arial, sans-serif');

    }
    var hoverTextSize = $('#' + bigChartType + 'HOVERFONTSIZE' + count).val();
    hoverTextSize = (hoverTextSize != undefined && hoverTextSize != '' && hoverTextSize != null) ? parseInt(hoverTextSize) : 10;
    symbolSize = (symbolSize != undefined && symbolSize != '' && symbolSize != null) ? parseInt(symbolSize) : 10;

    var markerColor = colorsArr;
    markerColor = markerColor.reverse();
    var markerSize = $('#' + bigChartType + 'MARKERSIZE' + count).val();
    markerSize = (markerSize != undefined && markerSize != '' && markerSize != null) ? parseInt(markerSize) : 10;



    var areaColorArr = colorsArr;
    areaColorArr = areaColorArr.reverse();
    var areaopacity = $('#' + bigChartType + 'OPACITY' + count).val();
    areaopacity = (areaopacity != undefined && areaopacity != '' && areaopacity != null) ? areaopacity : "0.8";


    var linecolor = colorsArr;
    linecolor = linecolor.reverse();
    var lineWidth = $('#' + bigChartType + 'LINEWIDTH').val();
    lineWidth = (lineWidth != undefined && lineWidth != '' && lineWidth != null) ? parseInt(lineWidth) : 10;

    var linetype = $('#' + bigChartType + 'LINEDASH').val();
    var isSmooth = false;
    if (linetype === 'smooth') {
        isSmooth = true;
    }
    if (mode === "lines")
        markerSize = 0;



    var noOfCol = keys.length;
    var percentArr = [];
    var dataMap = {};
    var seriesData = [];
    var index = 0;
    for (var i = 0; i < noOfCol; i++) {
        var key = keys[i];
        if (Array.isArray(chartDataObj[key])) {
            if (chartDataObj[key].every((val) => typeof val === 'number')) {
                seriesData[index] = chartDataObj[key];
                index++;
            } else {
                xAxisArr = chartDataObj[key];
            }
        }
    }
    var rawData = seriesData;
    for (var i = 0; i < noOfCol - 1; i++) {


        var total = rawData[i].reduce((sum, value) => sum + value, 0);
        percentArr[i] = rawData[i].map(value => ((value / total) * 100).toFixed(2) + '%');

        var seriesObj = {
            smooth: 0.5,
            name: keys[i],
            type: 'line',
            stack: 'stacked',
            data: seriesData[i],
            symbolSize: markerSize,
            symbol: markerShape,
            //if(labeldata !== "''")
            //	                label:{show:'true'},
            areaStyle: {
                color: areaColorArr[i % areaColorArr.length],
                opacity: areaopacity // Area opacity
            },
            lineStyle: {
                color: linecolor[i % linecolor.length],
                width: lineWidth,
                type: linetype,
            },
            itemStyle: {
                color: markerColor[i % markerColor.length], // Marker color in hexadecimal notation
                borderColor: '#168ab9', // Border color of the marker
                borderWidth: 2, // Border width of the marker
                borderType: 'solid', // Border type of the marker
                opacity: 1, // Opacity of the marker
                shadowColor: '#168ab9', // Shadow color of the marker
                shadowBlur: 10 // Shadow blur of the marker
            },
            label: {
                show: 'true',
                position: labelPosition,
                formatter: function (params) {
                    var dataIndex = params.dataIndex;
                    var ind = 0;
                    if (labeldata != null && labeldata.trim() !== '') {

                        if (labeldata === 'x') {
                            return params.name;
                        }
                        if (labeldata === 'y') {
                            return params.value.toString(); // Convert value to string
                        }
                        if (labeldata === '%') {
                            return ' (' + percentArr[ind][dataIndex] + ')';
                        }
                        if (labeldata === 'x+y') {
                            return params.name + ': ' + params.value.toString(); // Convert value to string
                        }
                        if (labeldata === 'x+%') {
                            return params.name + ' (' + percentArr[ind][dataIndex] + ')';
                        }
                        if (labeldata === 'y+%') {
                            return params.value.toString() + ' (' + percentArr[ind][dataIndex] + ')'; // Convert value to string
                        }
                        ind++;
                    }
                }
            }
        };
        series.push(seriesObj);
    }



    option = {
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross', // You can also use 'shadow', 'cross', etc. for different pointer types
                label: {
                    backgroundColor: hoverBGColor, // Set the background color of the tooltip label
                    borderColor: hoverBorderColor, // Set the border color of the tooltip label
                    borderWidth: 1, // Set the border width of the tooltip label
                    borderRadius: 5, // Set the border radius of the tooltip label
                    color: hoverFontColor, // Set the text color of the tooltip label
                    fontFamily: hoverTextFont, // Set the font family of the tooltip label
                    fontSize: hoverTextSize, // Set the font size of the tooltip label
                    fontWeight: 'bold', // Set the font weight of the tooltip label
                },
            },

            formatter: function (params) {
                var dataIndex = params[0].dataIndex;
                var ind = 0;
                if (hoverlabeldata != null && hoverlabeldata.trim() !== '') {
                    if (hoverlabeldata === 'x') {
                        return params[0].name;
                    }
                    if (hoverlabeldata === 'y') {
                        return params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === '%') {
                        return ' (' + percentArr[ind][dataIndex] + ')';
                    }
                    if (hoverlabeldata === 'x+y') {
                        return params[0].name + ': ' + params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === 'x+%') {
                        return params[0].name + ' (' + percentArr[ind][dataIndex] + ')';
                    }
                    if (hoverlabeldata === 'y+%') {
                        return params[0].value.toString() + ' (' + percentArr[ind][dataIndex] + ')'; // Convert value to string
                    }
                    ind++;
                }
            }
        },
        legend: {
            data: xAxisArr
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xAxisArr
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: series,
        /* toolbox:{
         feature:{
         myDelete: {
         show: true,
         title: 'Delete',
         icon: 'image://images/delete.png',
         onclick: function () {
         deleteVisualizeChart(chartId, "", chartType, "");
         }
         }
         }
         }*/
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }



}

function getGradientStackedAreaChart(chartId, response, count, chartType) {
    chartType = 'GradStackAreaChart';
    $("#visionVisualizeChartId" + count).remove();
    var basicAreaChartId = "visionVisualizeChart" + count;
    var basicAreaChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + basicAreaChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + basicAreaChartId).css("width", "auto", "!important");
    $("#" + basicAreaChartId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).css("width", "auto", "!important");
    $("#" + basicAreaChartHomeId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).addClass("visionVisualChartBoxClass");
    var chartDom = document.getElementById(chartId);
    var myChart = echarts.init(chartDom);
    var chartDataObj = response['data'];
    var keys = Object.keys(chartDataObj);
    var xAxisArr;
    var yAxisArr = [];
    var series = [];
    var chartEditoptions;
    var hoverlabeldata;
    var labeldata;
    var bigChartType = chartType.toUpperCase();
    if (response['chartCOnfigObjStr'] != null && response['chartCOnfigObjStr'] != undefined) {
        chartEditoptions = JSON.parse(response['chartCOnfigObjStr']);
        if (chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count] != null && chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count] != "")
            hoverlabeldata = chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count]
        if (chartEditoptions[bigChartType + 'LABELDATA' + count] != null && chartEditoptions[bigChartType + 'LABELDATA' + count] != "")
            labeldata = chartEditoptions[bigChartType + 'LABELDATA' + count]
    }
    var colorsObj = response['colorsObj'];
    var colorsArr = [];
    if (colorsObj != undefined && colorsObj != null && colorsObj != '') {
        colorsArr = JSON.parse(colorsObj)['clrs'];
    } else {
        colorsArr = ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'];
        response['colorsObj'] = ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'];
    }
    var option;


    var mode = $('#' + bigChartType + 'MODE' + count).val();
    var title = response['chartTitle'] || $('#' + bigChartType + 'CHARTTITLE' + count).val();
    var labelData = $('#' + bigChartType + 'LABELDATA' + count).val();
    if (labelData == null || labelData == undefined || labelData == "''")
        labelData = 'x+y';
    var hoverlabeldata = $('#' + bigChartType + 'HOVERLABELDATA' + count).val();
    var labelPosition = $('#' + bigChartType + 'LABELPOSITION' + count).val();
    var markerShape = $('#' + bigChartType + 'MARKERSHAPE' + count).val();
    markerShape = (markerShape != null || markerShape != undefined || markerShape != "") ? markerShape : "triangle";
    var symbolSize = $('#' + bigChartType + 'MARKERSIZE' + count).val();

    var hoverBGColor = $('#' + bigChartType + 'HOVERBG' + count).val();
    var hoverBorderColor = $('#' + bigChartType + 'HOVERBORDERCOLOR' + count).val();
    var hoverFontColor = $('#' + bigChartType + 'HOVERFONTCOLOR' + count).val();
    var hoverTextFont = $('#' + bigChartType + 'HOVERFONTFAMILY' + count).val();
    if (hoverFontColor == undefined || hoverFontColor == null || hoverFontColor == '')
        hoverFontColor = 'Arial, sans-serif';
    var hoverTextSize = $('#' + bigChartType + 'HOVERFONTSIZE' + count).val();
    hoverTextSize = (hoverTextSize != undefined && hoverTextSize != '' && hoverTextSize != null) ? parseInt(hoverTextSize) : 10;
    symbolSize = (symbolSize != undefined && symbolSize != '' && symbolSize != null) ? parseInt(symbolSize) : 10;

    var markerColor = colorsArr;
    markerColor = markerColor.reverse();
    var markerSize = $('#' + bigChartType + 'MARKERSIZE' + count).val();
    markerSize = (markerSize != undefined && markerSize != '' && markerSize != null) ? parseInt(markerSize) : 10;



    var areaColorArr = colorsArr;
    areaColorArr = areaColorArr.reverse();
    var areaopacity = $('#' + bigChartType + 'OPACITY' + count).val();
    areaopacity = (areaopacity != undefined && areaopacity != '' && areaopacity != null) ? areaopacity : "0.8";


    var linecolor = colorsArr;
    //linecolor=linecolor.reverse();

    var lineWidth = $('#' + bigChartType + 'LINEWIDTH').val();
    lineWidth = (lineWidth != undefined && lineWidth != '' && lineWidth != null) ? parseInt(lineWidth) : 10;

    var linetype = $('#' + bigChartType + 'LINEDASH').val();
    var isSmooth = true;
    ;
    if (linetype === 'smooth') {

    }
    if (mode === "lines")
        markerSize = 0;



    var noOfCol = keys.length;
    var percentArr = [];
    var dataMap = {};
    var seriesData = [];

    var color = ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'];
    var index = 0;
    for (var i = 0; i < noOfCol; i++) {
        var key = keys[i];
        if (Array.isArray(chartDataObj[key])) {
            if (chartDataObj[key].every((val) => typeof val === 'number')) {
                seriesData[index] = chartDataObj[key];
                index++;
            } else {
                xAxisArr = chartDataObj[key];
            }
        }
    }
    var rawData = seriesData;
    for (var i = 0; i < noOfCol - 1; i++) {


        var total = rawData[i].reduce((sum, value) => sum + value, 0);
        percentArr[i] = rawData[i].map(value => ((value / total) * 100).toFixed(2) + '%');

        var seriesObj = {
            smooth: 0.5,
            name: keys[i],
            type: 'line',
            stack: 'stacked',
            data: seriesData[i],
            symbolSize: markerSize,
            symbol: markerShape,
            //if(labeldata !== "''")
            //	                label:{show:'true'},
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: color[i % color.length]
                    },
                    {
                        offset: 1,
                        color: color[i + 1 % color.length]
                    }
                ])

            },
            lineStyle: {
                color: linecolor[i % linecolor.length],
                width: lineWidth,
                type: linetype,
            },
            itemStyle: {
                color: markerColor[i % markerColor.length], // Marker color in hexadecimal notation
                borderColor: '#168ab9', // Border color of the marker
                borderWidth: 2, // Border width of the marker
                borderType: 'solid', // Border type of the marker
                opacity: 1, // Opacity of the marker
                shadowColor: '#168ab9', // Shadow color of the marker
                shadowBlur: 10 // Shadow blur of the marker
            },
            label: {
                show: 'true',
                position: labelPosition,
                formatter: function (params) {
                    var dataIndex = params.dataIndex;
                    var ind = 0;
                    if (labeldata != null && labeldata.trim() !== '') {

                        if (labeldata === 'x') {
                            return params.name;
                        }
                        if (labeldata === 'y') {
                            return params.value.toString(); // Convert value to string
                        }
                        if (labeldata === '%') {
                            return ' (' + percentArr[ind][dataIndex] + ')';
                        }
                        if (labeldata === 'x+y') {
                            return params.name + ': ' + params.value.toString(); // Convert value to string
                        }
                        if (labeldata === 'x+%') {
                            return params.name + ' (' + percentArr[ind][dataIndex] + ')';
                        }
                        if (labeldata === 'y+%') {
                            return params.value.toString() + ' (' + percentArr[ind][dataIndex] + ')'; // Convert value to string
                        }
                        ind++;
                    }
                }
            }
        };
        series.push(seriesObj);
    }



    option = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
            text: title
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross', // You can also use 'shadow', 'cross', etc. for different pointer types
                label: {
                    backgroundColor: hoverBGColor, // Set the background color of the tooltip label
                    borderColor: hoverBorderColor, // Set the border color of the tooltip label
                    borderWidth: 1, // Set the border width of the tooltip label
                    borderRadius: 5, // Set the border radius of the tooltip label
                    color: hoverFontColor, // Set the text color of the tooltip label
                    fontFamily: hoverTextFont, // Set the font family of the tooltip label
                    fontSize: hoverTextSize, // Set the font size of the tooltip label
                    fontWeight: 'bold', // Set the font weight of the tooltip label
                },
            },

            formatter: function (params) {
                var dataIndex = params[0].dataIndex;
                var ind = 0;
                if (hoverlabeldata != null && hoverlabeldata.trim() !== '') {
                    if (hoverlabeldata === 'x') {
                        return params[0].name;
                    }
                    if (hoverlabeldata === 'y') {
                        return params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === '%') {
                        return ' (' + percentArr[ind][dataIndex] + ')';
                    }
                    if (hoverlabeldata === 'x+y') {
                        return params[0].name + ': ' + params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === 'x+%') {
                        return params[0].name + ' (' + percentArr[ind][dataIndex] + ')';
                    }
                    if (hoverlabeldata === 'y+%') {
                        return params[0].value.toString() + ' (' + percentArr[ind][dataIndex] + ')'; // Convert value to string
                    }
                    ind++;
                }
            }
        },
        legend: {
            data: xAxisArr
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xAxisArr
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: series,
        /*toolbox:{
         feature:{
         myDelete: {
         show: true,
         title: 'Delete',
         icon: 'image://images/delete.png',
         onclick: function () {
         deleteVisualizeChart(chartId, "", chartType, "");
         }
         }
         }
         }*/
    };

    if (option && typeof option === 'object') {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }



}


function getAreaPiecesChart(chartId, response, count, chartType) {
    $("#visionVisualizeChartId" + count).remove();
    var basicAreaChartId = "visionVisualizeChart" + count;
    var basicAreaChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + basicAreaChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + basicAreaChartId).css("width", "auto", "!important");
    $("#" + basicAreaChartId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).css("width", "auto", "!important");
    $("#" + basicAreaChartHomeId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).addClass("visionVisualChartBoxClass");
    var chartDom = document.getElementById(chartId);
    var myChart = echarts.init(chartDom);
    var chartDataObj = response['data'];
    var keys = Object.keys(chartDataObj);
    var xAxisArr;
    var yAxisArr;
    var noOfCol = keys.length;
    for (var i = 0; i < noOfCol; i++) {
        var key = keys[i];
        if (Array.isArray(chartDataObj[key])) {
            if (chartDataObj[key].every((val) => typeof val === 'number')) {
                yAxisArr = chartDataObj[key];
            } else {
                xAxisArr = chartDataObj[key];
            }
        }
    }

    var chartEditoptions;
    var hoverlabeldata;
    var labeldata;
    var bigChartType = chartType.toUpperCase();
    if (response['chartCOnfigObjStr'] != null && response['chartCOnfigObjStr'] != undefined) {
        chartEditoptions = JSON.parse(response['chartCOnfigObjStr']);
        if (chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count] != null && chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count] != "")
            hoverlabeldata = chartEditoptions[bigChartType + 'HOVERBORDERCOLOR' + count]
        if (chartEditoptions[bigChartType + 'LABELDATA' + count] != null && chartEditoptions[bigChartType + 'LABELDATA' + count] != "")
            labeldata = chartEditoptions[bigChartType + 'LABELDATA' + count]
    }



    var option;
    var rawData = yAxisArr;
    var total = rawData.reduce((sum, value) => sum + value, 0);
    var percentArr = rawData.map(value => ((value / total) * 100).toFixed(2) + '%');
    var mode = $('#' + bigChartType + 'MODE' + count).val();
    var title = response['chartTitle'] || $('#' + bigChartType + 'CHARTTITLE' + count).val();
    var labelData = $('#' + bigChartType + 'LABELDATA' + count).val();
    var hoverlabeldata = $('#' + bigChartType + 'HOVERLABELDATA' + count).val();
    var labelPosition = $('#' + bigChartType + 'LABELPOSITION' + count).val();
    var markerShape = $('#' + bigChartType + 'MARKERSHAPE' + count).val();
    var symbolSize = $('#' + bigChartType + 'MARKERSIZE' + count).val();

    var hoverBGColor = $('#' + bigChartType + 'HOVERBG' + count).val();
    var hoverBorderColor = $('#' + bigChartType + 'HOVERBORDERCOLOR' + count).val();
    var hoverFontColor = $('#' + bigChartType + 'HOVERFONTCOLOR' + count).val();
    var hoverTextFont = $('#' + bigChartType + 'HOVERFONTFAMILY' + count).val();
    if (hoverFontColor == undefined || hoverFontColor == null || hoverFontColor == '')
        hoverFontColor = 'Arial, sans-serif';
    var hoverTextSize = $('#' + bigChartType + 'HOVERFONTSIZE' + count).val();

    hoverTextSize = (hoverTextSize != undefined && hoverTextSize != '' && hoverTextSize != null) ? parseInt(hoverTextSize) : 10;
    symbolSize = (symbolSize != undefined && symbolSize != '' && symbolSize != null) ? parseInt(symbolSize) : 10;

    var markerColor = $('#' + bigChartType + 'COLORSMARKER' + count).val();
    var markerSize = $('#' + bigChartType + 'MARKERSIZE' + count).val();
    markerSize = (markerSize != undefined && markerSize != '' && markerSize != null) ? parseInt(markerSize) : 10;



    var areaColor = $('#' + bigChartType + 'COLORSAREA' + count).val();
    var areaopacity = $('#' + bigChartType + 'OPACITY' + count).val();
    areaopacity = (areaopacity != undefined && areaopacity != '' && areaopacity != null) ? areaopacity : "0.8";

    var linecolor = $('#' + bigChartType + 'LINECOLORS').val();
    var lineWidth = $('#' + bigChartType + 'LINEWIDTH').val();
    lineWidth = (lineWidth != undefined && lineWidth != '' && lineWidth != null) ? parseInt(lineWidth) : 10;

    var linetype = $('#' + bigChartType + 'LINEDASH').val();
    var isSmooth = false;


    if (linetype === 'smooth') {
        isSmooth = true;
    }
    var EditIcon = {
        'height': 512,
        'width': 512,
        'id': chartId,
        'path': 'M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z',
        'color': 'rgb(31,119,180)'
    };


    option = {
        title: {
            text: title,

        },
        xAxis: {
            type: 'category',
            data: xAxisArr
        },
        yAxis: {
            type: 'value'
        },
        visualMap: {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [
                //		{
                //			gt: 1,
                //			lt: 3,
                //			color: 'rgba(0, 0, 180, 0.4)'
                //		},
                //		{
                //			gt: 5,
                //			lt: 7,
                //			color: 'rgba(0, 0, 180, 0.4)'
                //		}
            ]
        },
        series: [
            {
                smooth: 0.5,
                data: yAxisArr,
                type: 'line',
                symbol: markerShape,
                markLine: {
                    symbol: ['none', 'none'],
                    label: {show: false},
                    //data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
                },

                lineStyle: {
                    color: linecolor, // Line color in hexadecimal notation
                    width: lineWidth, // Line width
                    type: linetype // Line type: 'solid', 'dashed', 'dotted', etc.
                },
                areaStyle: {
                    //        color: new echarts.graphic.LinearGradient( // Custom gradient for area color
                    //          0, 0, 0, 1, // Define the direction of the gradient (top to bottom in this case)
                    //          [
                    //            { offset: 0, color: areaColor }, // Color at 0% position
                    //            //{ offset: 1, color: '#36a0d9' } // Color at 100% position
                    //          ]
                    //        ),
                    //        opacity: areaopacity // Area opacity
                },
                itemStyle: {
                    color: markerColor, // Marker color in hexadecimal notation
                    borderColor: '#168ab9', // Border color of the marker
                    borderWidth: 2, // Border width of the marker
                    borderType: 'solid', // Border type of the marker
                    opacity: 1, // Opacity of the marker
                    shadowColor: '#168ab9', // Shadow color of the marker
                    shadowBlur: 10 // Shadow blur of the marker
                },
                label: {
                    position: labelPosition,
                    formatter: function (params) {
                        var dataIndex = params.dataIndex;
                        if (labeldata != null && labeldata.trim() !== '') {
                            if (labeldata === 'x') {
                                return params.name;
                            }
                            if (labeldata === 'y') {
                                return params.value.toString(); // Convert value to string
                            }
                            if (labeldata === '%') {
                                return ' (' + percentArr[dataIndex] + ')';
                            }
                            if (labeldata === 'x+y') {
                                return params.name + ': ' + params.value.toString(); // Convert value to string
                            }
                            if (labeldata === 'x+%') {
                                return params.name + ' (' + percentArr[dataIndex] + ')';
                            }
                            if (labeldata === 'y+%') {
                                return params.value.toString() + ' (' + percentArr[dataIndex] + ')'; // Convert value to string
                            }
                        }
                    }
                }
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross', // You can also use 'shadow', 'cross', etc. for different pointer types
                label: {
                    backgroundColor: hoverBGColor, // Set the background color of the tooltip label
                    borderColor: hoverBorderColor, // Set the border color of the tooltip label
                    borderWidth: 1, // Set the border width of the tooltip label
                    borderRadius: 5, // Set the border radius of the tooltip label
                    color: hoverFontColor, // Set the text color of the tooltip label
                    fontFamily: hoverTextFont, // Set the font family of the tooltip label
                    fontSize: hoverTextSize, // Set the font size of the tooltip label
                    fontWeight: 'bold', // Set the font weight of the tooltip label
                },
            },

            formatter: function (params) {
                var dataIndex = params[0].dataIndex;
                if (hoverlabeldata != null && hoverlabeldata.trim() !== '') {
                    if (hoverlabeldata === 'x') {
                        return params[0].name;
                    }
                    if (hoverlabeldata === 'y') {
                        return params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === '%') {
                        return ' (' + percentArr[dataIndex] + ')';
                    }
                    if (hoverlabeldata === 'x+y') {
                        return params[0].name + ': ' + params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === 'x+%') {
                        return params[0].name + ' (' + percentArr[dataIndex] + ')';
                    }
                    if (hoverlabeldata === 'y+%') {
                        return params[0].value.toString() + ' (' + percentArr[dataIndex] + ')'; // Convert value to string
                    }
                }
            }
        },
        /* toolbox: {
         feature: {
         myDelete: {
         show: true,
         title: 'Delete',
         icon: 'image://images/delete.png',
         onclick: function () {
         deleteVisualizeChart(chartId, "", chartType, "");
         }
         }
         }
         }*/
    };

    var piecesMarker = [];
    for (var i = 0; i < counter; i++) {
        var lowerBound = $(`#AREAPIECESCHARTLOWERBOUND_${i}`).val();
        var upperBound = $(`#AREAPIECESCHARTUPPERBOUND_${i}`).val();
        if (lowerBound != null && lowerBound != undefined && lowerBound != "" && upperBound != null || upperBound != undefined && upperBound != "") {
            var pieceObject = {};
            var markerObject = {};
            pieceObject['gt'] = parseInt(lowerBound);
            pieceObject['lt'] = parseInt(upperBound);
            piecesMarker.push(parseInt(lowerBound));
            piecesMarker.push(parseInt(upperBound));
            pieceObject['color'] = 'rgba(0, 0, 180, 0.4)';
            option.visualMap.pieces.push(pieceObject);
        } else {
            if (xAxisArr.length > 4) {
                var pieceObject = {};
                var markerObject = {};
                var xAxisArrLen = xAxisArr.length;
                var range1 = Math.floor(xAxisArrLen / 3);
                var range2 = xAxisArrLen - range1;
                piecesMarker.push(parseInt(0));
                piecesMarker.push(parseInt(range1));
                piecesMarker.push(parseInt(range2));
                piecesMarker.push(parseInt(xAxisArrLen - 1));
                pieceObject[0] = {
                    gt: 0,
                    lt: range1,
                    color: areaColor
                },
                        pieceObject[1] = {
                    gt: range2,
                    lt: xAxisArrLen - 1,
                    color: areaColor
                }
                option.visualMap.pieces.push(pieceObject[0]);

                option.visualMap.pieces.push(pieceObject[1]);
            } else {
                for (var i = 0; i < xAxisArr.length; i++)
                    piecesMarker.push(i);
            }

        }
    }
    var markLine = {
        symbol: ['none', 'none'],
        label: {show: false},
        data: piecesMarker.map((value) => ({xAxis: value}))
    };
    option.series[0].markLine = markLine;
    if (mode === "lines")
        markerSize = 0;
    if (labeldata !== "''")
        option.series[0].label.show = 'true';
    option.series[0].symbolSize = markerSize;
    if (option && typeof option === 'object') {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }



}

function getBasicAreaChartTypeFromDashBoard(
        chartId,
        response,
        count,
        chartType
        ) {
    count = $('#' + chartId + '_count').val();
    //$('#' + chartId).remove();
    var basicAreaChartId = "homeChartParentDiv" + count;
    var basicAreaChartHomeId = "homeChartParentDiv" + count;
    $("#" + basicAreaChartHomeId).append(
            "<div id='" + chartId +
            "' type='" +
            chartType +
            "' count='" +
            count +
            "' class='chartMain visionVisualChartBoxClass visionVisualChartBoxSelected'></div>"
            );
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + basicAreaChartId).css("width", "auto", "!important");
    $("#" + basicAreaChartId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).css("width", "auto", "!important");
    $("#" + basicAreaChartHomeId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).addClass("visionVisualChartBoxClass");
    var chartDom = document.getElementById(chartId);
    var myChart = echarts.init(chartDom);
    var chartDataObj = response["data"];
    var chartCOnfigObjStr = JSON.parse(response["chartCOnfigObjStr"]);
    var keys = Object.keys(chartDataObj);
    var xAxisArr;
    var yAxisArr;
    var noOfCol = keys.length;
    var tableName = response['tableName'];

    var colorsObj = response['colorsObj'];
    var colorsArr = [];
    if (colorsObj != undefined && colorsObj != null && colorsObj != '') {
        colorsArr = JSON.parse(colorsObj)['clrs'];
    } else {
        colorsArr = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
    }
    response['colorsObj'] = colorsArr;
    for (var i = 0; i < noOfCol; i++) {
        var key = keys[i];
        var match = key.match(/(\d+)$/); // Match the numeric suffix at the end of the key
        if (match) {
            yAxisArr = chartDataObj[key];
        } else {
            xAxisArr = chartDataObj[key];
        }
    }

    var chartEditoptions;
    var hoverlabeldata;
    var labeldata;
    var bigChartType = chartType.toUpperCase();
    if (
            response["chartCOnfigObjStr"] != null &&
            response["chartCOnfigObjStr"] != undefined
            ) {
        chartEditoptions = JSON.parse(response["chartCOnfigObjStr"]);
        if (
                chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count] != null &&
                chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count] != ""
                )
            hoverlabeldata =
                    chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count];
        if (
                chartEditoptions[bigChartType + "LABELDATA" + count] != null &&
                chartEditoptions[bigChartType + "LABELDATA" + count] != ""
                )
            labeldata = chartEditoptions[bigChartType + "LABELDATA" + count];
    }

    var option;
    var rawData = yAxisArr;
    var total = rawData.reduce((sum, value) => sum + value, 0);
    var percentArr = rawData.map(
            (value) => ((value / total) * 100).toFixed(2) + "%"
    );

    var mode = chartCOnfigObjStr[bigChartType + "MODE"];
    var title = chartCOnfigObjStr[bigChartType + "CHARTTITLE"];
    var labeldata = chartCOnfigObjStr[bigChartType + "LABELDATA"];
    var hoverlabeldata = chartCOnfigObjStr[bigChartType + "HOVERLABELDATA"];
    var labelPosition = chartCOnfigObjStr[bigChartType + "LABELPOSITION"];
    var markerShape = chartCOnfigObjStr[bigChartType + "MARKERSHAPE"];
    var symbolSize = chartCOnfigObjStr[bigChartType + "MARKERSIZE"] || "10";

    var hoverBGColor = chartCOnfigObjStr[bigChartType + "HOVERBG"];
    var hoverBorderColor = chartCOnfigObjStr[bigChartType + "HOVERBORDERCOLOR"];
    var hoverFontColor = chartCOnfigObjStr[bigChartType + "HOVERFONTCOLOR"];
    var hoverTextSize = chartCOnfigObjStr[bigChartType + "HOVERFONTSIZE"] || "10";
    var hoverTextFont =
            chartCOnfigObjStr[bigChartType + "HOVERFONTCOLOR"] || "Arial, sans-serif";

    var markerColor = colorsArr[0];//chartCOnfigObjStr[bigChartType + "COLORSMARKER"] || colorsArr;
    var markerSize = chartCOnfigObjStr[bigChartType + "MARKERSIZE"] || "10";
    var areaColor = colorsArr[0];// chartCOnfigObjStr[bigChartType + "COLORSAREA"] || colorsArr;
    var linecolor = colorsArr[0];//chartCOnfigObjStr[bigChartType + "LINECOLORS"] || colorsArr;
    var areaopacity = chartCOnfigObjStr[bigChartType + "OPACITY"] || "0.8";


    var lineWidth = chartCOnfigObjStr[bigChartType + "LINEWIDTH"] || "5";

    var linetype = chartCOnfigObjStr[bigChartType + "LINEDASH"];

    var isSmooth = false;
    if (linetype === "smooth") {
        isSmooth = true;
    }

    option = {
        title: {
            text: title,
        },
        xAxis: {
            type: "category",
            data: xAxisArr,
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                smooth: 0.5,
                data: yAxisArr,
                type: "line",
                symbol: markerShape,
                lineStyle: {
                    color: linecolor, // Line color in hexadecimal notation
                    width: lineWidth, // Line width
                    type: linetype, // Line type: 'solid', 'dashed', 'dotted', etc.
                },
                areaStyle: {
                    color: areaColor,
                    opacity: areaopacity, // Area opacity
                },
                itemStyle: {
                    color: markerColor, // Marker color in hexadecimal notation
                    borderColor: "#168ab9", // Border color of the marker
                    borderWidth: 2, // Border width of the marker
                    borderType: "solid", // Border type of the marker
                    opacity: 1, // Opacity of the marker
                    shadowColor: "#168ab9", // Shadow color of the marker
                    shadowBlur: 10, // Shadow blur of the marker
                },
                label: {
                    position: labelPosition,
                    formatter: function (params) {
                        var dataIndex = params.dataIndex;
                        if (labeldata != null && labeldata.trim() !== "") {
                            if (labeldata === "x") {
                                return params.name;
                            }
                            if (labeldata === "y") {
                                return params.value.toString(); // Convert value to string
                            }
                            if (labeldata === "%") {
                                return " (" + percentArr[dataIndex] + ")";
                            }
                            if (labeldata === "x+y") {
                                return params.name + ": " + params.value.toString(); // Convert value to string
                            }
                            if (labeldata === "x+%") {
                                return params.name + " (" + percentArr[dataIndex] + ")";
                            }
                            if (labeldata === "y+%") {
                                return (
                                        params.value.toString() + " (" + percentArr[dataIndex] + ")"
                                        ); // Convert value to string
                            }
                        }
                    },
                },
            },
        ],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross", // You can also use 'shadow', 'cross', etc. for different pointer types
                label: {
                    backgroundColor: hoverBGColor, // Set the background color of the tooltip label
                    borderColor: hoverBorderColor, // Set the border color of the tooltip label
                    borderWidth: 1, // Set the border width of the tooltip label
                    borderRadius: 5, // Set the border radius of the tooltip label
                    color: hoverFontColor, // Set the text color of the tooltip label
                    fontFamily: hoverTextFont, // Set the font family of the tooltip label
                    fontSize: hoverTextSize, // Set the font size of the tooltip label
                    fontWeight: "bold", // Set the font weight of the tooltip label
                },
            },

            formatter: function (params) {
                var dataIndex = params[0].dataIndex;
                if (hoverlabeldata != null && hoverlabeldata.trim() !== "") {
                    if (hoverlabeldata === "x") {
                        return params[0].name;
                    }
                    if (hoverlabeldata === "y") {
                        return params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === "%") {
                        return " (" + percentArr[dataIndex] + ")";
                    }
                    if (hoverlabeldata === "x+y") {
                        return params[0].name + ": " + params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === "x+%") {
                        return params[0].name + " (" + percentArr[dataIndex] + ")";
                    }
                    if (hoverlabeldata === "y+%") {
                        return (
                                params[0].value.toString() + " (" + percentArr[dataIndex] + ")"
                                ); // Convert value to string
                    }
                }
            },
        },

    };
    getToolBox(chartId, chartType, tableName, chartCOnfigObjStr, response, count, Object.keys(response.data).length);
    if (mode === "lines")
        markerSize = 0;
    if (labeldata !== "''")
        option.series[0].label.show = "true";
    option.series[0].symbolSize = markerSize;
    if (option && typeof option === "object") {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }
}
function getStackedAreaChartFromDashBoard(chartId, response, count, chartType) {
    $('#' + chartId).remove();
    var basicAreaChartId = "homeChartParentDiv" + count;
    var basicAreaChartHomeId = "homeChartParentDiv" + count;
    $("#" + basicAreaChartHomeId).append(
            "<div id='" + chartId +
            "' type='" +
            chartType +
            "' count='" +
            count +
            "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>"
            );
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + basicAreaChartId).css("width", "auto", "!important");
    $("#" + basicAreaChartId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).css("width", "auto", "!important");
    $("#" + basicAreaChartHomeId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).addClass("visionVisualChartBoxClass");
    var chartDom = document.getElementById(chartId);
    var myChart = echarts.init(chartDom);
    var chartDataObj = response["data"];
    var chartCOnfigObjStr = JSON.parse(response["chartCOnfigObjStr"]);
    var keys = Object.keys(chartDataObj);
    var xAxisArr;
    var yAxisArr = [];
    var series = [];
    var chartEditoptions;
    var hoverlabeldata;
    var labeldata;
    var bigChartType = chartType.toUpperCase();
    var tableName = response['tableName'];
    var colorsObj = response['colorsObj'];
    var colorsArr = [];
    if (colorsObj != undefined && colorsObj != null && colorsObj != '') {
        colorsArr = JSON.parse(colorsObj)['clrs'];
    } else {
        colorsArr = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
        response['colorsObj'] = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
    }
    if (
            response["chartCOnfigObjStr"] != null &&
            response["chartCOnfigObjStr"] != undefined
            ) {
        chartEditoptions = JSON.parse(response["chartCOnfigObjStr"]);
        if (
                chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count] != null &&
                chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count] != ""
                )
            hoverlabeldata =
                    chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count];
        if (
                chartEditoptions[bigChartType + "LABELDATA" + count] != null &&
                chartEditoptions[bigChartType + "LABELDATA" + count] != ""
                )
            labeldata = chartEditoptions[bigChartType + "LABELDATA" + count];
    }
    var option;

    var option;
    var rawData = yAxisArr;
    var total = rawData.reduce((sum, value) => sum + value, 0);
    var percentArr = rawData.map(
            (value) => ((value / total) * 100).toFixed(2) + "%"
    );

    var mode = chartCOnfigObjStr[bigChartType + "MODE"];
    var title = chartCOnfigObjStr[bigChartType + "CHARTTITLE"];
    var labelData = chartCOnfigObjStr[bigChartType + "LABELDATA"];
    var hoverlabeldata = chartCOnfigObjStr[bigChartType + "HOVERLABELDATA"];
    var labelPosition = chartCOnfigObjStr[bigChartType + "LABELPOSITION"];
    var markerShape = chartCOnfigObjStr[bigChartType + "MARKERSHAPE"];
    var symbolSize = chartCOnfigObjStr[bigChartType + "MARKERSIZE"] || "10";

    var hoverBGColor = chartCOnfigObjStr[bigChartType + "HOVERBG"];
    var hoverBorderColor = chartCOnfigObjStr[bigChartType + "HOVERBORDERCOLOR"];
    var hoverFontColor = chartCOnfigObjStr[bigChartType + "HOVERFONTCOLOR"];
    var hoverTextSize = chartCOnfigObjStr[bigChartType + "HOVERFONTSIZE"] || "10";
    var hoverTextFont =
            chartCOnfigObjStr[bigChartType + "HOVERFONTCOLOR"] || "Arial, sans-serif";

    var markerColorArr = colorsArr;
    //chartCOnfigObjStr[bigChartType + "COLORSMARKER"].split(",") || colorsArr;
    //markerColorArr = markerColorArr.reverse();
    var markerSize = chartCOnfigObjStr[bigChartType + "MARKERSIZE"] || "10";
    var areaColorArr = colorsArr;//chartCOnfigObjStr[bigChartType + "COLORSAREA"].split(",") || colorsArr;
    //areaColorArr = areaColorArr.reverse();
    var areaopacity = chartCOnfigObjStr[bigChartType + "OPACITY"] || "0.8";

    var linecolorArr = colorsArr;// chartCOnfigObjStr[bigChartType + "LINECOLORS"].split(",") || colorsArr;
    //linecolorArr = linecolorArr.reverse();
    var lineWidth = chartCOnfigObjStr[bigChartType + "LINEWIDTH"] || "5";

    var linetype = chartCOnfigObjStr[bigChartType + "LINEDASH"];

    var isSmooth = false;
    if (linetype === "smooth") {
        isSmooth = true;
    }
    if (mode === "lines")
        markerSize = 0;

    var noOfCol = keys.length;
    var percentArr = [];
    var dataMap = {};
    var seriesData = [];
    for (var i = 0; i < noOfCol; i++) {
        var key = keys[i];
        var match = key.match(/(\d+)$/); // Match the numeric suffix at the end of the key
        if (match) {
            var suffix = match[1];
            seriesData[suffix] = chartDataObj[key];
        } else {
            xAxisArr = chartDataObj[key];
        }
    }
    var rawData = seriesData;
    for (var i = 0; i < noOfCol - 1; i++) {
        var total = rawData[i].reduce((sum, value) => sum + value, 0);
        percentArr[i] = rawData[i].map(
                (value) => ((value / total) * 100).toFixed(2) + "%"
        );

        var seriesObj = {
            smooth: 0.5,
            name: keys[i],
            type: "line",
            stack: "stacked",
            data: seriesData[i],
            symbolSize: markerSize,
            symbol: markerShape,
            //if(labeldata !== "''")
            //	                label:{show:'true'},
            areaStyle: {
                color: new echarts.graphic.LinearGradient(// Custom gradient for area color
                        0,
                        0,
                        0,
                        1, // Define the direction of the gradient (top to bottom in this case)
                        [
                            {offset: 0, color: areaColorArr[i % areaColorArr.length] || colorsArr[i % colorsArr.length]}, // Color at 0% position
                                    //{ offset: 1, color: '#36a0d9' } // Color at 100% position
                        ]
                        ),
                opacity: areaopacity, // Area opacity
            },
            lineStyle: {
                color: linecolorArr[i % linecolorArr.length] || colorsArr[i % colorsArr.length],
                width: lineWidth,
                type: linetype,
            },
            itemStyle: {
                color: markerColorArr[i % markerColorArr.length] || colorsArr[i % colorsArr.length], // Marker color in hexadecimal notation
                borderColor: "#168ab9", // Border color of the marker
                borderWidth: 2, // Border width of the marker
                borderType: "solid", // Border type of the marker
                opacity: 1, // Opacity of the marker
                shadowColor: "#168ab9", // Shadow color of the marker
                shadowBlur: 10, // Shadow blur of the marker
            },
            label: {
                show: "true",
                position: labelPosition,
                formatter: function (params) {
                    var dataIndex = params.dataIndex;
                    var ind = 0;
                    if (labeldata != null && labeldata.trim() !== "") {
                        if (labeldata === "x") {
                            return params.name;
                        }
                        if (labeldata === "y") {
                            return params.value.toString(); // Convert value to string
                        }
                        if (labeldata === "%") {
                            return " (" + percentArr[ind][dataIndex] + ")";
                        }
                        if (labeldata === "x+y") {
                            return params.name + ": " + params.value.toString(); // Convert value to string
                        }
                        if (labeldata === "x+%") {
                            return params.name + " (" + percentArr[ind][dataIndex] + ")";
                        }
                        if (labeldata === "y+%") {
                            return (
                                    params.value.toString() +
                                    " (" +
                                    percentArr[ind][dataIndex] +
                                    ")"
                                    ); // Convert value to string
                        }
                        ind++;
                    }
                },
            },
        };
        series.push(seriesObj);
    }

    option = {
        title: {
            text: title,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross", // You can also use 'shadow', 'cross', etc. for different pointer types
                label: {
                    backgroundColor: hoverBGColor, // Set the background color of the tooltip label
                    borderColor: hoverBorderColor, // Set the border color of the tooltip label
                    borderWidth: 1, // Set the border width of the tooltip label
                    borderRadius: 5, // Set the border radius of the tooltip label
                    color: hoverFontColor, // Set the text color of the tooltip label
                    fontFamily: hoverTextFont, // Set the font family of the tooltip label
                    fontSize: hoverTextSize, // Set the font size of the tooltip label
                    fontWeight: "bold", // Set the font weight of the tooltip label
                },
            },

            formatter: function (params) {
                var dataIndex = params[0].dataIndex;
                var ind = 0;
                if (hoverlabeldata != null && hoverlabeldata.trim() !== "") {
                    if (hoverlabeldata === "x") {
                        return params[0].name;
                    }
                    if (hoverlabeldata === "y") {
                        return params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === "%") {
                        return " (" + percentArr[ind][dataIndex] + ")";
                    }
                    if (hoverlabeldata === "x+y") {
                        return params[0].name + ": " + params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === "x+%") {
                        return params[0].name + " (" + percentArr[ind][dataIndex] + ")";
                    }
                    if (hoverlabeldata === "y+%") {
                        return (
                                params[0].value.toString() +
                                " (" +
                                percentArr[ind][dataIndex] +
                                ")"
                                ); // Convert value to string
                    }
                    ind++;
                }
            },
        },
        legend: {
            data: xAxisArr,
        },
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: xAxisArr,
            },
        ],
        yAxis: [
            {
                type: "value",
            },
        ],
        series: series,

    };
    getToolBox(chartId, chartType, tableName, chartCOnfigObjStr, response, count, Object.keys(response.data).length);
    if (option && typeof option === "object") {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }
}

function getGradientStackedAreaChartFromDashBoard(
        chartId,
        response,
        count,
        chartType
        ) {
    chartType = "GradStackAreaChart";
    $('#' + chartId).remove();
    var basicAreaChartId = "homeChartParentDiv" + count;
    var basicAreaChartHomeId = "homeChartParentDiv" + count;
    $("#" + basicAreaChartHomeId).append(
            "<div id='" + chartId +
            "' type='" +
            chartType +
            "' count='" +
            count +
            "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>"
            );
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + basicAreaChartId).css("width", "auto", "!important");
    $("#" + basicAreaChartId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).css("width", "auto", "!important");
    $("#" + basicAreaChartHomeId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).addClass("visionVisualChartBoxClass");
    var chartDom = document.getElementById(chartId);
    var myChart = echarts.init(chartDom);
    var chartDataObj = response["data"];
    var keys = Object.keys(chartDataObj);
    var chartCOnfigObjStr = JSON.parse(response["chartCOnfigObjStr"]);
    var xAxisArr;
    var yAxisArr = [];
    var series = [];
    var chartEditoptions;
    var hoverlabeldata;
    var labeldata;
    var bigChartType = chartType.toUpperCase();
    var tableName = response['tableName'];
    var colorsObj = response['colorsObj'];
    var colorsArr = [];
    if (colorsObj != undefined && colorsObj != null && colorsObj != '') {
        colorsArr = JSON.parse(colorsObj)['clrs'];
    } else {
        colorsArr = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
        response['colorsObj'] = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
    }
    if (
            response["chartCOnfigObjStr"] != null &&
            response["chartCOnfigObjStr"] != undefined
            ) {
        chartEditoptions = JSON.parse(response["chartCOnfigObjStr"]);
        if (
                chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count] != null &&
                chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count] != ""
                )
            hoverlabeldata =
                    chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count];
        if (
                chartEditoptions[bigChartType + "LABELDATA" + count] != null &&
                chartEditoptions[bigChartType + "LABELDATA" + count] != ""
                )
            labeldata = chartEditoptions[bigChartType + "LABELDATA" + count];
    }
    var rawData = yAxisArr;
    var total = rawData.reduce((sum, value) => sum + value, 0);
    var percentArr = rawData.map(
            (value) => ((value / total) * 100).toFixed(2) + "%"
    );

    var option;
    var mode = chartCOnfigObjStr[bigChartType + "MODE"];
    var title = chartCOnfigObjStr[bigChartType + "CHARTTITLE"];
    var labelData = chartCOnfigObjStr[bigChartType + "LABELDATA"];
    var hoverlabeldata = chartCOnfigObjStr[bigChartType + "HOVERLABELDATA"];
    var labelPosition = chartCOnfigObjStr[bigChartType + "LABELPOSITION"];
    var markerShape = chartCOnfigObjStr[bigChartType + "MARKERSHAPE"];
    var symbolSize = chartCOnfigObjStr[bigChartType + "MARKERSIZE"] || "10";

    var hoverBGColor = chartCOnfigObjStr[bigChartType + "HOVERBG"];
    var hoverBorderColor = chartCOnfigObjStr[bigChartType + "HOVERBORDERCOLOR"];
    var hoverFontColor = chartCOnfigObjStr[bigChartType + "HOVERFONTCOLOR"];
    var hoverTextSize = chartCOnfigObjStr[bigChartType + "HOVERFONTSIZE"] || "10";
    var hoverTextFont =
            chartCOnfigObjStr[bigChartType + "HOVERFONTCOLOR"] || "Arial, sans-serif";

    var markerColorArr = colorsArr;
    ;
    //chartCOnfigObjStr[bigChartType + "COLORSMARKER"].split(",") || colorsArr;
    //markerColorArr = markerColorArr.reverse();
    var markerSize = chartCOnfigObjStr[bigChartType + "MARKERSIZE"] || "10";
    var areaColorArr = colorsArr//chartCOnfigObjStr[bigChartType + "COLORSAREA"].split(",") || colorsArr;
    //areaColorArr = areaColorArr.reverse();
    var areaopacity = chartCOnfigObjStr[bigChartType + "OPACITY"] || "0.8";

    var linecolorArr = colorsArr;//chartCOnfigObjStr[bigChartType + "LINECOLORS"].split(",") || colorsArr;
    //linecolorArr = linecolorArr.reverse();
    var lineWidth = chartCOnfigObjStr[bigChartType + "LINEWIDTH"] || "10";

    var linetype = chartCOnfigObjStr[bigChartType + "LINEDASH"];
    var isSmooth = false;
    if (linetype === "smooth") {
        isSmooth = true;
    }
    if (mode === "lines")
        markerSize = 0;

    var noOfCol = keys.length;
    var percentArr = [];
    var dataMap = {};
    var seriesData = [];

    var color = ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"];
    for (var i = 0; i < noOfCol; i++) {
        var key = keys[i];
        var match = key.match(/(\d+)$/); // Match the numeric suffix at the end of the key
        if (match) {
            var suffix = match[1];
            seriesData[suffix] = chartDataObj[key];
        } else {
            xAxisArr = chartDataObj[key];
        }
    }
    var rawData = seriesData;
    for (var i = 0; i < noOfCol - 1; i++) {
        var total = rawData[i].reduce((sum, value) => sum + value, 0);
        percentArr[i] = rawData[i].map(
                (value) => ((value / total) * 100).toFixed(2) + "%"
        );

        var seriesObj = {
            smooth: 0.5,
            name: keys[i],
            type: "line",
            stack: "stacked",
            data: seriesData[i],
            symbolSize: markerSize,
            symbol: markerShape,
            //if(labeldata !== "''")
            //	                label:{show:'true'},
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorsArr[i % colorsArr.length],
                    },
                    {
                        offset: 1,
                        color: colorsArr[(i + 1) % colorsArr.length],
                    },
                ]),
            },
            lineStyle: {
                color: linecolorArr[i % linecolorArr.length] || colorsArr[i % colorsArr.length],
                width: lineWidth,
                type: linetype,
            },
            itemStyle: {
                color: markerColorArr[i % markerColorArr.length] || colorsArr[i % colorsArr.length], // Marker color in hexadecimal notation
                borderColor: "#168ab9", // Border color of the marker
                borderWidth: 2, // Border width of the marker
                borderType: "solid", // Border type of the marker
                opacity: 1, // Opacity of the marker
                shadowColor: "#168ab9", // Shadow color of the marker
                shadowBlur: 10, // Shadow blur of the marker
            },
            label: {
                show: "true",
                position: labelPosition,
                formatter: function (params) {
                    var dataIndex = params.dataIndex;
                    var ind = 0;
                    if (labeldata != null && labeldata.trim() !== "") {
                        if (labeldata === "x") {
                            return params.name;
                        }
                        if (labeldata === "y") {
                            return params.value.toString(); // Convert value to string
                        }
                        if (labeldata === "%") {
                            return " (" + percentArr[ind][dataIndex] + ")";
                        }
                        if (labeldata === "x+y") {
                            return params.name + ": " + params.value.toString(); // Convert value to string
                        }
                        if (labeldata === "x+%") {
                            return params.name + " (" + percentArr[ind][dataIndex] + ")";
                        }
                        if (labeldata === "y+%") {
                            return (
                                    params.value.toString() +
                                    " (" +
                                    percentArr[ind][dataIndex] +
                                    ")"
                                    ); // Convert value to string
                        }
                        ind++;
                    }
                },
            },
        };
        series.push(seriesObj);
    }

    option = {
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        title: {
            text: title,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross", // You can also use 'shadow', 'cross', etc. for different pointer types
                label: {
                    backgroundColor: hoverBGColor, // Set the background color of the tooltip label
                    borderColor: hoverBorderColor, // Set the border color of the tooltip label
                    borderWidth: 1, // Set the border width of the tooltip label
                    borderRadius: 5, // Set the border radius of the tooltip label
                    color: hoverFontColor, // Set the text color of the tooltip label
                    fontFamily: hoverTextFont, // Set the font family of the tooltip label
                    fontSize: hoverTextSize, // Set the font size of the tooltip label
                    fontWeight: "bold", // Set the font weight of the tooltip label
                },
            },

            formatter: function (params) {
                var dataIndex = params[0].dataIndex;
                var ind = 0;
                if (hoverlabeldata != null && hoverlabeldata.trim() !== "") {
                    if (hoverlabeldata === "x") {
                        return params[0].name;
                    }
                    if (hoverlabeldata === "y") {
                        return params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === "%") {
                        return " (" + percentArr[ind][dataIndex] + ")";
                    }
                    if (hoverlabeldata === "x+y") {
                        return params[0].name + ": " + params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === "x+%") {
                        return params[0].name + " (" + percentArr[ind][dataIndex] + ")";
                    }
                    if (hoverlabeldata === "y+%") {
                        return (
                                params[0].value.toString() +
                                " (" +
                                percentArr[ind][dataIndex] +
                                ")"
                                ); // Convert value to string
                    }
                    ind++;
                }
            },
        },
        legend: {
            data: xAxisArr,
        },
        toolbox: {
            feature: {
                saveAsImage: {},
            },
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: xAxisArr,
            },
        ],
        yAxis: [
            {
                type: "value",
            },
        ],
        series: series,

    };
    getToolBox(chartId, chartType, tableName, chartCOnfigObjStr, response, count, Object.keys(response.data).length);
    if (option && typeof option === "object") {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }
}

function getAreaPiecesChartFromDashBoard(chartId, response, count, chartType) {
    count = $('#' + chartId + '_count').val();
    $('#' + chartId).remove();
    var basicAreaChartId = "homeChartParentDiv" + count;
    var basicAreaChartHomeId = "homeChartParentDiv" + count;
    $("#" + basicAreaChartHomeId).append(
            "<div id='" + chartId +
            "' type='" +
            chartType +
            "' count='" +
            count +
            "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>"
            );
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + basicAreaChartId).css("width", "auto", "!important");
    $("#" + basicAreaChartId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).css("width", "auto", "!important");
    $("#" + basicAreaChartHomeId).css("height", "330px", "!important");
    $("#" + basicAreaChartHomeId).addClass("visionVisualChartBoxClass");
    var chartDom = document.getElementById(chartId);
    var myChart = echarts.init(chartDom);
    var chartDataObj = response["data"];
    var keys = Object.keys(chartDataObj);
    var chartCOnfigObjStr = JSON.parse(response["chartCOnfigObjStr"]);
    var xAxisArr;
    var yAxisArr;
    var noOfCol = keys.length;
    var tableName = response['tableName'];
    var colorsObj = response['colorsObj'];
    var colorsArr = [];
    if (colorsObj != undefined && colorsObj != null && colorsObj != '') {
        colorsArr = JSON.parse(colorsObj)['clrs'];
    } else {
        colorsArr = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
        response['colorsObj'] = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
    }
    for (var i = 0; i < noOfCol; i++) {
        var key = keys[i];
        var match = key.match(/(\d+)$/); // Match the numeric suffix at the end of the key
        if (match) {
            yAxisArr = chartDataObj[key];
        } else {
            xAxisArr = chartDataObj[key];
        }
    }

    var chartEditoptions;
    var hoverlabeldata;
    var labeldata;
    var bigChartType = chartType.toUpperCase();
    if (
            response["chartCOnfigObjStr"] != null &&
            response["chartCOnfigObjStr"] != undefined
            ) {
        chartEditoptions = JSON.parse(response["chartCOnfigObjStr"]);
        if (
                chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count] != null &&
                chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count] != ""
                )
            hoverlabeldata =
                    chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count];
        if (
                chartEditoptions[bigChartType + "LABELDATA" + count] != null &&
                chartEditoptions[bigChartType + "LABELDATA" + count] != ""
                )
            labeldata = chartEditoptions[bigChartType + "LABELDATA" + count];
    }

    var rawData = yAxisArr;
    var total = rawData.reduce((sum, value) => sum + value, 0);
    var percentArr = rawData.map(
            (value) => ((value / total) * 100).toFixed(2) + "%"
    );

    var mode = chartCOnfigObjStr[bigChartType + "MODE"];
    var title = chartCOnfigObjStr[bigChartType + "CHARTTITLE"];
    var labeldata = chartCOnfigObjStr[bigChartType + "LABELDATA"];
    var hoverlabeldata = chartCOnfigObjStr[bigChartType + "HOVERLABELDATA"];
    var labelPosition = chartCOnfigObjStr[bigChartType + "LABELPOSITION"];
    var markerShape = chartCOnfigObjStr[bigChartType + "MARKERSHAPE"];
    var symbolSize = chartCOnfigObjStr[bigChartType + "MARKERSIZE"] || "10";

    var hoverBGColor = chartCOnfigObjStr[bigChartType + "HOVERBG"];
    var hoverBorderColor = chartCOnfigObjStr[bigChartType + "HOVERBORDERCOLOR"];
    var hoverFontColor = chartCOnfigObjStr[bigChartType + "HOVERFONTCOLOR"];
    var hoverTextSize = chartCOnfigObjStr[bigChartType + "HOVERFONTSIZE"] || "10";
    var hoverTextFont =
            chartCOnfigObjStr[bigChartType + "HOVERFONTCOLOR"] || "Arial, sans-serif";

    var markerColor = colorsArr;// chartCOnfigObjStr[bigChartType + "COLORSMARKER"].split(",") || colorsArr;
    //markerColor = markerColor.reverse();
    var markerSize = chartCOnfigObjStr[bigChartType + "MARKERSIZE"] || "10";
    var areaColor = colorsArr;//chartCOnfigObjStr[bigChartType + "COLORSAREA"].split(",") || colorsArr;
    //areaColor = areaColor.reverse();
    var areaopacity = chartCOnfigObjStr[bigChartType + "OPACITY"] || "0.8";

    var linecolor = colorsArr;// chartCOnfigObjStr[bigChartType + "LINECOLORS"].split(",") || colorsArr;
    //linecolor = linecolor.reverse();
    var lineWidth = chartCOnfigObjStr[bigChartType + "LINEWIDTH"] || "10";

    var linetype = chartCOnfigObjStr[bigChartType + "LINEDASH"];

    var isSmooth = false;
    if (linetype === "smooth") {
        isSmooth = true;
    }


    option = {
        title: {
            text: title,
        },
        xAxis: {
            type: "category",
            data: xAxisArr,
        },
        yAxis: {
            type: "value",
        },
        visualMap: {
            type: "piecewise",
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [
                //		{
                //			gt: 1,
                //			lt: 3,
                //			color: 'rgba(0, 0, 180, 0.4)'
                //		},
                //		{
                //			gt: 5,
                //			lt: 7,
                //			color: 'rgba(0, 0, 180, 0.4)'
                //		}
            ],
        },
        series: [
            {
                smooth: 0.5,
                data: yAxisArr,
                type: "line",
                symbol: markerShape,
                markLine: {
                    symbol: ["none", "none"],
                    label: {show: false},
                    //data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
                },

                lineStyle: {
                    color: linecolor[0] || colorsArr[0], // Line color in hexadecimal notation
                    width: lineWidth, // Line width
                    type: linetype, // Line type: 'solid', 'dashed', 'dotted', etc.
                },
                areaStyle: {
                    color: areaColor[0] || colorsArr[0],
                },
                itemStyle: {
                    color: markerColor[0] || colorsArr[0], // Marker color in hexadecimal notation
                    borderColor: "#168ab9", // Border color of the marker
                    borderWidth: 2, // Border width of the marker
                    borderType: "solid", // Border type of the marker
                    opacity: 1, // Opacity of the marker
                    shadowColor: "#168ab9", // Shadow color of the marker
                    shadowBlur: 10, // Shadow blur of the marker
                },
                label: {
                    position: labelPosition,
                    formatter: function (params) {
                        var dataIndex = params.dataIndex;
                        if (labeldata != null && labeldata.trim() !== "") {
                            if (labeldata === "x") {
                                return params.name;
                            }
                            if (labeldata === "y") {
                                return params.value.toString(); // Convert value to string
                            }
                            if (labeldata === "%") {
                                return " (" + percentArr[dataIndex] + ")";
                            }
                            if (labeldata === "x+y") {
                                return params.name + ": " + params.value.toString(); // Convert value to string
                            }
                            if (labeldata === "x+%") {
                                return params.name + " (" + percentArr[dataIndex] + ")";
                            }
                            if (labeldata === "y+%") {
                                return (
                                        params.value.toString() + " (" + percentArr[dataIndex] + ")"
                                        ); // Convert value to string
                            }
                        }
                    },
                },
            },
        ],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross", // You can also use 'shadow', 'cross', etc. for different pointer types
                label: {
                    backgroundColor: hoverBGColor, // Set the background color of the tooltip label
                    borderColor: hoverBorderColor, // Set the border color of the tooltip label
                    borderWidth: 1, // Set the border width of the tooltip label
                    borderRadius: 5, // Set the border radius of the tooltip label
                    color: hoverFontColor, // Set the text color of the tooltip label
                    fontFamily: hoverTextFont, // Set the font family of the tooltip label
                    fontSize: hoverTextSize, // Set the font size of the tooltip label
                    fontWeight: "bold", // Set the font weight of the tooltip label
                },
            },

            formatter: function (params) {
                var dataIndex = params[0].dataIndex;
                if (hoverlabeldata != null && hoverlabeldata.trim() !== "") {
                    if (hoverlabeldata === "x") {
                        return params[0].name;
                    }
                    if (hoverlabeldata === "y") {
                        return params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === "%") {
                        return " (" + percentArr[dataIndex] + ")";
                    }
                    if (hoverlabeldata === "x+y") {
                        return params[0].name + ": " + params[0].value.toString(); // Convert value to string
                    }
                    if (hoverlabeldata === "x+%") {
                        return params[0].name + " (" + percentArr[dataIndex] + ")";
                    }
                    if (hoverlabeldata === "y+%") {
                        return (
                                params[0].value.toString() + " (" + percentArr[dataIndex] + ")"
                                ); // Convert value to string
                    }
                }
            },
        },

    };


    var piecesMarker = [];
    for (var i = 0; i < counter; i++) {
        var lowerBound = $(`#AREAPIECESCHARTLOWERBOUND_${i}`).val();
        var upperBound = $(`#AREAPIECESCHARTUPPERBOUND_${i}`).val();
        if (
                (lowerBound != null &&
                        lowerBound != undefined &&
                        lowerBound != "" &&
                        upperBound != null) ||
                (upperBound != undefined && upperBound != "")
                ) {
            var pieceObject = {};
            var markerObject = {};
            pieceObject["gt"] = parseInt(lowerBound);
            pieceObject["lt"] = parseInt(upperBound);
            piecesMarker.push(parseInt(lowerBound));
            piecesMarker.push(parseInt(upperBound));
            pieceObject["color"] = "rgba(0, 0, 180, 0.4)";
            option.visualMap.pieces.push(pieceObject);
        } else {
            if (xAxisArr.length > 4) {
                var pieceObject = {};
                var markerObject = {};
                var xAxisArrLen = xAxisArr.length;
                var range1 = Math.floor(xAxisArrLen / 3);
                var range2 = xAxisArrLen - range1;
                piecesMarker.push(parseInt(0));
                piecesMarker.push(parseInt(range1));
                piecesMarker.push(parseInt(range2));
                piecesMarker.push(parseInt(xAxisArrLen - 1));
                pieceObject[0] = {
                    gt: 0,
                    lt: range1,
                    color: areaColor
                },
                        pieceObject[1] = {
                    gt: range2,
                    lt: xAxisArrLen - 1,
                    color: areaColor
                }
                option.visualMap.pieces.push(pieceObject[0]);

                option.visualMap.pieces.push(pieceObject[1]);
            } else {
                for (var i = 0; i < xAxisArr.length; i++)
                    piecesMarker.push(i);
            }

        }
    }
    var markLine = {
        symbol: ["none", "none"],
        label: {show: false},
        data: piecesMarker.map((value) => ({xAxis: value})),
    };
    getToolBox(chartId, chartType, tableName, chartCOnfigObjStr, response, count, Object.keys(response.data).length);
    option.series[0].markLine = markLine;
    if (mode === "lines")
        markerSize = 0;
    if (labeldata !== "''")
        option.series[0].label.show = "true";
    option.series[0].symbolSize = markerSize;
    if (option && typeof option === "object") {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }
}
function getGanttChart(chartId, response, count, chartType) {
    $("#visionVisualizeChartId" + count).remove();

    var ganttChartId = "visionVisualizeChart" + count;
    var ganttChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + ganttChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "295px", "!important");
    $("#" + ganttChartId).css("width", "auto", "!important");
    $("#" + ganttChartId).css("height", "295px", "!important");
    $("#" + ganttChartHomeId).css("width", "auto", "!important");
    $("#" + ganttChartHomeId).css("height", "300px", "!important");
    $("#" + ganttChartHomeId).addClass("visionVisualChartBoxClass");
    var chartCOnfigObjStr = JSON.parse(response["chartCOnfigObjStr"]);
    var chartTitle, dataVisible, hoverDataVisible, areaColor, areaOpacity, barHeight = 10;
    chartTitle = chartCOnfigObjStr['GANTTCHARTCHARTTITLE'] || $('#GANTTCHARTCHARTTITLE' + count).val();
    dataVisible = chartCOnfigObjStr['GANTTCHARTLABELDATA'] || $('#GANTTCHARTLABELDATA' + count).val();
    hoverDataVisible = chartCOnfigObjStr['GANTTCHARTHOVERLABELDATA'] || $('#GANTTCHARTHOVERLABELDATA' + count).val();
    areaColor = chartCOnfigObjStr['GANTTCHARTCOLORSAREA'] || $('#GANTTCHARTCOLORSAREA' + count).val();
    areaOpacity = chartCOnfigObjStr['GANTTCHARTOPACITY'] || $('#GANTTCHARTOPACITY' + count).val();
    barHeight = chartCOnfigObjStr['GANTTCHARTBARHEIGHT'] || $('#GANTTCHARTBARHEIGHT' + count).val();

    var result = response['data'];
    for (var i = 1; i < result.length; i++) {
        var resultArr = result[i];
        var startDate = resultArr[2];
        var endDate = resultArr[3];
        resultArr[2] = new Date(startDate);
        resultArr[3] = new Date(endDate);
    }
    var data = google.visualization.arrayToDataTable(result);
    //options.gantt.innerGridTrack.fill
    var options = {
        height: 300,
        width: 700,
        gantt: {
            barHeight: barHeight,
            trackHeight: 50,
            innerGridTrack: {fill: areaColor},
            labelStyle: {
                //fontName: Roboto2,
                fontSize: 14,
                color: '#757575'
            },

        },
        dataLabels: 'tooltip',

    };

    var chart = new google.visualization.Gantt(document.getElementById(chartId));
    $("#" + chartId).attr("echartData", JSON.stringify(data));
    $("#" + chartId).attr("echartOption", JSON.stringify(options));
    getToolBox(chartId, chartType, "", chartCOnfigObjStr, result, count, 1)


    chart.draw(data, options);

    var titleElement = document.createElement("h1");
    titleElement.textContent = chartTitle;
    titleElement.style.fontSize = '12px';
    titleElement.style.fontWeight = 'bold';
    var chartContainer = document.getElementById(chartId);
    chartContainer.insertBefore(titleElement, chartContainer.firstChild);
}
function getGeoChart(chartId, result, count, chartType, dashboardFlag) {
    var dataArr = result['data'];
    var labelsArr = result['labelsArr'];
    var region = result['region'];
    var totalValue = result['totalValue'][0];
    var tableName = result['tableName'];

    var chartConfigaration = result['chartCOnfigObjStr'];
    if (chartConfigaration != null && !jQuery.isEmptyObject(chartConfigaration)) {
        var fontSize, fontColor, fontFamily, backgroundColor, borderColor, title, hoverlabeldata, width, height;
        if (!(dashboardFlag != null && dashboardFlag != '' && dashboardFlag != undefined)) {

            fontSize = chartConfigaration[chartType.toUpperCase() + "HOVERFONTSIZE" + count];
            fontColor = chartConfigaration[chartType.toUpperCase() + "HOVERFONTCOLOR" + count];
            fontFamily = chartConfigaration[chartType.toUpperCase() + "HOVERFONTFAMILY" + count];
            backgroundColor = chartConfigaration[chartType.toUpperCase() + "HOVERBG" + count];
            borderColor = chartConfigaration[chartType.toUpperCase() + "HOVERBORDERCOLOR" + count];
            title = chartConfigaration[chartType.toUpperCase() + "CHARTTITLE" + count];
            hoverlabeldata = chartConfigaration[chartType.toUpperCase() + "HOVERLABELDATA" + count];
            $("#" + chartId).css("margin-top", "0", "!important");
            $("#" + chartId).css("overflow", "hidden", "!important");
            $("#" + chartId).css("width", "650px", "!important");
            $("#" + chartId).css("height", "505px", "!important");
            width = 640;
            height = 600;

        } else {
            fontSize = chartConfigaration[chartType.toUpperCase() + "HOVERFONTSIZE"];
            fontColor = chartConfigaration[chartType.toUpperCase() + "HOVERFONTCOLOR"];
            fontFamily = chartConfigaration[chartType.toUpperCase() + "HOVERFONTFAMILY"];
            backgroundColor = chartConfigaration[chartType.toUpperCase() + "HOVERBG"];
            borderColor = chartConfigaration[chartType.toUpperCase() + "HOVERBORDERCOLOR"];
            title = chartConfigaration[chartType.toUpperCase() + "CHARTTITLE"];
            hoverlabeldata = chartConfigaration[chartType.toUpperCase() + "HOVERLABELDATA"];
            width = 300;
            height = 300;
            fontFamily = fontFamily.split(",")[0];
            $("#homeChartParentDiv" + count).css("height", "330px");

        }

    }

    var geoChartId = "visionVisualizeChart" + count;

    // Ensure the chart container has sufficient dimensions

    $("#" + geoChartId).css("width", "645px", "!important");
    $("#" + geoChartId).css("height", "510px", "!important");
    $("#" + chartId + "_toolBox").css("height", "331px", "!important");
    $("#" + geoChartId).find("h1").remove();
    var data = new google.visualization.DataTable();

    // Use a loop to add columns
    for (var k = 0; k < labelsArr.length; k++) {
        var label = labelsArr[k];
        var columnType = label.split(":")[0];
        var columnName = label.split(":")[1];
        data.addColumn(columnType, "");
    }


    if (dataArr != null && !jQuery.isEmptyObject(dataArr)) {
        for (var i = 0; i < dataArr.length; i++) {
            var dataPoint = dataArr[i];

            // Create custom tooltip content
            var labels = dataPoint[2];
            var Values = columnName + ":" + dataPoint[3];
            var percentage = "Percentage: " + ((dataPoint[3] / totalValue) * 100).toFixed(2) + "%";
            data.addRow(dataPoint);
            if (hoverlabeldata == 'x') {
                data.setFormattedValue(i, 2, labels);
                data.setFormattedValue(i, 3, "")
            } else if (hoverlabeldata == 'y') {
                data.setFormattedValue(i, 2, "");
                data.setFormattedValue(i, 3, Values);
            } else if (hoverlabeldata == 'x+y') {
                data.setFormattedValue(i, 3, Values);
            } else if (hoverlabeldata == '%') {
                data.setFormattedValue(i, 2, "");
                data.setFormattedValue(i, 3, percentage);
            } else if (hoverlabeldata === 'x+%') {
                data.setFormattedValue(i, 2, labels);
                data.setFormattedValue(i, 3, percentage);

            } else if (hoverlabeldata === 'y+%') {
                data.setFormattedValue(i, 2, Values);
                data.setFormattedValue(i, 3, percentage);

            }

        }
    }
    $("#" + chartId).attr("region", region);
    var options = {
        region: region,
        displayMode: 'markers',
        resolution: 'provinces',
        width: width,
        height: height,
        sizeAxis: {minValue: 1, maxValue: 1, minSize: 5, maxSize: 5},
        colorAxis: {colors: ['#e7711c', '#4374e0', '#FF7F50', '#DC143C', '#00008B']},
        datalessRegionColor: '#FFFFFF', // Replace with the color for regions with no data
        defaultColor: '#f5f5f5',
        backgroundColor: {
            fill: 'white' // Set the background color to light blue
        },
        tooltip: {
            isHtml: true, // Enable HTML rendering in tooltips
            textStyle: {
                color: fontColor,
                fontSize: fontSize,
                fontName: fontFamily,
            },
        },
    };

    var chart = new google.visualization.GeoChart(document.getElementById(chartId));

    chart.draw(data, options);
    $("#" + chartId).attr("geochartData", JSON.stringify(data));
    getToolBox(chartId, chartType, tableName, chartConfigaration, result, count, Object.keys(result.data).length)

    // Create a title element
    var titleElement = document.createElement("h1");
    titleElement.textContent = ""; // Title text
    titleElement.style.fontSize = '12px'; // Title font size
    titleElement.style.fontWeight = 'bold'; // Make the title bold

    // Append the title element before the chart container
    var chartContainer = document.getElementById(geoChartId);
    chartContainer.insertBefore(titleElement, chartContainer.firstChild);

    // Add CSS rules to style the tooltips
    var customTooltipStyles = `
    .google-visualization-tooltip {
      background-color: ${backgroundColor} !important; // Customize background color
      border: 3px solid ${borderColor} !important; // Customize border
    } `;

    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customTooltipStyles;
    document.head.appendChild(styleSheet);
}
function getCandlestickChart(chartId, response, count, chartType, dashBoardFlag) {
    $("#visionVisualizeChartId" + count).remove();
    var CandlestickChartId = "visionVisualizeChart" + count;
    var CandlestickChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + CandlestickChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "329px", "!important");
    $("#" + chartId + "_toolBox").css("height", "331px", "!important");
    $("#" + CandlestickChartId).css("width", "900px", "!important");
    $("#" + CandlestickChartId).css("height", "400px", "!important");
    $("#" + CandlestickChartHomeId).css("width", "auto", "!important");
    $("#" + CandlestickChartHomeId).css("height", "380px", "!important");
    $("#" + CandlestickChartHomeId).addClass("visionVisualChartBoxClass");
    var tableName = response['tableName'];
    var bigChartType = chartType.toUpperCase();
    var dom = document.getElementById(chartId);
    if (response["chartCOnfigObjStr"] != '' && response["chartCOnfigObjStr"] != null && response["chartCOnfigObjStr"] != undefined) {
        chartEditoptions = JSON.parse(response["chartCOnfigObjStr"]);
    }
    var title, labeldata, hoverlabeldata, hoverBGColor, hoverBorderColor, hoverFontColor, hoverTextSize, hoverTextFont;
    if (!(dashBoardFlag != null && dashBoardFlag != '' && dashBoardFlag != undefined)) {
        title = response['chartTitle'] || chartEditoptions[bigChartType + "CHARTTITLE" + count];
        labeldata = chartEditoptions[bigChartType + "LABELDATA"];
        hoverlabeldata = chartEditoptions[bigChartType + "HOVERLABELDATA" + count];
        hoverBGColor = chartEditoptions[bigChartType + "HOVERBG" + count];
        hoverBorderColor = chartEditoptions[bigChartType + "HOVERBORDERCOLOR" + count];
        hoverFontColor = chartEditoptions[bigChartType + "HOVERFONTCOLOR" + count];
        hoverTextSize = chartEditoptions[bigChartType + "HOVERFONTSIZE" + count] || "10";
        hoverTextFont = chartEditoptions[bigChartType + "HOVERFONTFAMILY" + count] || "Arial, sans-serif";
    } else {
        title = chartEditoptions[bigChartType + "CHARTTITLE"];
        labeldata = chartEditoptions[bigChartType + "LABELDATA"];
        hoverlabeldata = chartEditoptions[bigChartType + "HOVERLABELDATA"];
        hoverBGColor = chartEditoptions[bigChartType + "HOVERBG"];
        hoverBorderColor = chartEditoptions[bigChartType + "HOVERBORDERCOLOR"];
        hoverFontColor = chartEditoptions[bigChartType + "HOVERFONTCOLOR"];
        hoverTextSize = chartEditoptions[bigChartType + "HOVERFONTSIZE"] || "10";
        hoverTextFont = chartEditoptions[bigChartType + "HOVERFONTFAMILY"] || "Arial, sans-serif";
    }

    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    if (response != null && !jQuery.isEmptyObject(response)) {
        var data = response['data'];
        var valuesData = [];

        var result = {};
        result.xAxis = {data: []};
        result.yAxis = {};
        result.series = [
            {
                type: 'candlestick',
                data: [],
                itemStyle: {
                    color: 'green', // Change the color of the candlestick
                    borderColor: 'blue', // Change the border color
                    borderColor0: 'orange' // Change the border color of the negative candlestick
                },

            }
        ]
        $.each(data, function (keyName) {
            if (isArrayNumeric(data[keyName]))
                valuesData = data[keyName];
            else {
                result.xAxis.data = data[keyName];
            }
        });
        var minValue = Math.min(...valuesData);
        var maxValue = Math.max(...valuesData);
        i = 0;
        $.each(valuesData, function (value) {
            var tempArr = [valuesData[i], minValue, 0, maxValue];
            result.series[0].data.push(tempArr);
            i += 1;
        });

        var legend = result['legend'];
        var xAxis = result['xAxis'];
        var yAxis = result['yAxis'];
        var series = result['series'];
        var color = result['color'];
        var option = {
            title: {
                text: title
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                borderWidth: 1,
                borderColor: hoverBorderColor,
                backgroundColor: hoverBGColor,
                padding: 10,
                textStyle: {
                    color: hoverFontColor,
                    fontSize: hoverTextSize,
                    fontFamily: hoverTextFont
                },
                formatter: function (params) {
                    var data = params[0].data;
                    var tooltipContent = '';
                    if (hoverlabeldata === 'x') {
                        tooltipContent = params[0].name;
                    } else if (hoverlabeldata === 'y') {
                        // Display only tooltip content
                        tooltipContent = `Open: ${data[1]}, High: ${data[2]}, Low: ${data[3]}, Close: ${data[4]}`;
                    } else if (hoverlabeldata === 'x+y') {
                        tooltipContent = `${params[0].name}\nOpen: ${data[1]}, High: ${data[2]}, Low: ${data[3]}, Close: ${data[4]}`;
                    }
                    if (hoverlabeldata === '%') {
                        // Calculate the percentage change (customize this calculation as needed)
                        var open = data[1];
                        var close = data[4];
                        var percentageChange = ((close - open) / open * 100).toFixed(2);

                        tooltipContent = `Percentage Change: ${percentageChange}%`;
                    } else if (hoverlabeldata === 'x+%') {
                        var open = data[1];
                        var close = data[4];
                        var percentageChange = ((close - open) / open * 100).toFixed(2);
                        tooltipContent = `${params[0].name}\nPercentage Change: ${percentageChange}%`;
                    } else if (hoverlabeldata === 'y+%') {
                        var open = data[1];
                        var close = data[4];
                        var percentageChange = ((close - open) / open * 100).toFixed(2);

                        tooltipContent = `Open: ${data[1]}, High: ${data[2]}, Low: ${data[3]}, Close: ${data[4]}\nPercentage Change: ${percentageChange}%`;
                    }
                    return tooltipContent;
                },
            },
            color: "red",
            legend: legend,
            xAxis: xAxis,
            yAxis: yAxis,
            series: series,

        };
        getToolBox(chartId, chartType, tableName, chartEditoptions, response, count, Object.keys(response.data).length);
        if (option && typeof option === 'object') {
            $("#" + chartId).attr("echartOption", JSON.stringify(option));
            myChart.setOption(option);
        }
    }
}
function getEchartHeatMap(chartId, result, count) {
    var chartType = 'heatMap';
    //$("#" + chartId).empty();
    var heapMapChartId = "visionVisualizeChart" + count;
    $("#" + heapMapChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + heapMapChartId).css("width", "900px", "!important");
    $("#" + heapMapChartId).css("height", "500px", "!important");
    var xAxis = result['xAxis'];
    var yAxis = result['yAxis'];
    var data = result['source'];
    var chartCOnfigObjStr = JSON.parse(result["chartCOnfigObjStr"]);
    data = data.map(function (item) {
        return [item[1], item[0], item[2]];
    });
    var gratearVal = result['gratearVal'];
    var dom = document.getElementById(chartId);
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var labelData, hoverlabeldata, labelPosition, gridWidth, gridHeight, visualMapOrientation, chartTitle;
    if (chartCOnfigObjStr != null || chartCOnfigObjStr != undefined || chartCOnfigObjStr != '') {
        chartTitle = chartCOnfigObjStr['HEATMAPCHARTTITLE'] || $('#HEATMAPCHARTTITLE' + count).val() || result['chartTitle'];
        labelData = chartCOnfigObjStr['HEATMAPLABELDATA'] || $('#HEATMAPLABELDATA' + count).val();
        hoverlabeldata = chartCOnfigObjStr['HEATMAPHOVERLABELDATA'] || $('#HEATMAPHOVERLABELDATA' + count).val();
        labelPosition = chartCOnfigObjStr['HEATMAPLABELPOSITION'] || $('#HEATMAPLABELPOSITION' + count).val();
        gridWidth = chartCOnfigObjStr['HEATMAPGRIDWIDTH'] || $('#HEATMAPGRIDWIDTH' + count).val();
        gridHeight = chartCOnfigObjStr['HEATMAPGRIDHEIGHT'] || $('#HEATMAPGRIDHEIGHT' + count).val();
        visualMapOrientation = chartCOnfigObjStr['HEATMAPVISUALMAPORIENTATION'] || $('#HEATMAPVISUALMAPORIENTATION' + count).val();
    } else {
        labelData = $('#HEATMAPLABELDATA' + count).val();
        hoverlabeldata = $('#HEATMAPHOVERLABELDATA' + count).val();
        labelPosition = $('#HEATMAPLABELPOSITION' + count).val();
        gridWidth = $('#HEATMAPGRIDWIDTH' + count).val();
        gridHeight = $('#HEATMAPGRIDHEIGHT' + count).val();
        visualMapOrientation = $('#HEATMAPVISUALMAPORIENTATION' + count).val();
    }
    isShow = true;
    colors = JSON.parse(result['colors'])['clrs'];
    tableName = result['tableName'];

    var baseHexColor = colors[0];
    var r = parseInt(baseHexColor.slice(1, 3), 16);
    var g = parseInt(baseHexColor.slice(3, 5), 16);
    var b = parseInt(baseHexColor.slice(5, 7), 16);
    var gradientColors = [`rgba(${r}, ${g}, ${b}, 0)`, // Start color (e.g., transparent blue)
        `rgba(${r}, ${g}, ${b}, 1)`// End color (e.g., solid blue)
    ];
    if (labelData == "''")
        isShow = false;
    var option = {
        title: {
            text: chartTitle,
        },
        tooltip: {
            position: labelPosition,
            formatter: function (params) {
                if (hoverlabeldata == 'x')
                    return params.name;
                if (hoverlabeldata == 'y')
                    return params.value;
                if (hoverlabeldata == 'x+y')
                    return params.name + ":" + params.value;
            }
        },
        grid: {
            width: gridWidth + "%",
            height: gridHeight + '%',
            top: '5%'
        },
        xAxis: {
            type: 'category',
            data: xAxis,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: yAxis,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: gratearVal,
            calculable: true,
            orient: visualMapOrientation,
            left: 'center',
            bottom: '0%',
            inRange: {
                color: gradientColors,
            },
        },
        series: [{
                name: 'Punch Card',
                type: 'heatmap',
                data: data,
                label: {
                    show: isShow,
                    formatter: function (params) {
                        if (labelData == 'x')
                            return params.name;
                        if (labelData == 'y')
                            return params.value;
                        if (labelData == 'x+y')
                            return params.name + ":" + params.value;
                    }
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                toolbox: {
                    feature: {}
                },
            }]
    };
    getToolBox(chartId, chartType, tableName, chartCOnfigObjStr, result, count, 1);
    if (option && typeof option === 'object') {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));

    }
    $("#" + chartId).parent().resize(function (event, ui) {
        var target = event.currentTarget;
        var id = target['id'];
        var width = ui.size.width;
        var height = ui.size.height;
        myChart.resize({
            width: width,
            height: height
        });

    });
}
function getBarChartRotation(chartId, data, count, chartType) {
    $("#" + chartId).remove();
    var heapMapChartId = "visionVisualizeChart" + count;
    $("#" + heapMapChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "890px", "!important");
    $("#" + chartId).css("height", "490px", "!important");
    $("#" + heapMapChartId).css("width", "900px", "!important");
    $("#" + heapMapChartId).css("height", "500px", "!important");
    var dom = document.getElementById(chartId);
    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var app = {};

    var option;

    const posList = [
        'left',
        'right',
        'top',
        'bottom',
        'inside',
        'insideTop',
        'insideLeft',
        'insideRight',
        'insideBottom',
        'insideTopLeft',
        'insideTopRight',
        'insideBottomLeft',
        'insideBottomRight'
    ];
    app.configParameters = {
        rotate: {
            min: -90,
            max: 90
        },
        align: {
            options: {
                left: 'left',
                center: 'center',
                right: 'right'
            }
        },
        verticalAlign: {
            options: {
                top: 'top',
                middle: 'middle',
                bottom: 'bottom'
            }
        },
        position: {
            options: posList.reduce(function (map, pos) {
                map[pos] = pos;
                return map;
            }, {})
        },
        distance: {
            min: 0,
            max: 100
        }
    };

    app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
            const labelOption = {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            };
            myChart.setOption({
                series: [
                    {
                        label: labelOption
                    },
                    {
                        label: labelOption
                    },
                    {
                        label: labelOption
                    },
                    {
                        label: labelOption
                    }
                ]
            });
        }
    };
    const labelOption = {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
            name: {}
        }
    };


    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },

    };
    var xAxis = data['xAxis'];
    var yAxis = data['yAxis'];
    var series = data['series'];
    var legend = data['legend'];
    if (series != null && !jQuery.isEmptyObject(series)) {
        $.each(series, function (index, value) {
            var seriesObj = value;
            if (seriesObj != null && !jQuery.isEmptyObject(seriesObj)) {
                seriesObj['label'] = labelOption;
            }

        });
    }
    option['xAxis'] = xAxis;
    option['yAxis'] = yAxis;
    option['series'] = series;
    option['legend'] = legend;
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}
function getBoxPlotChart(chartId, result, count, chartType) {
    chartType = 'boxplot';
    $("#visionVisualizeChartId" + count).remove();
    var treeMapChartId = "visionVisualizeChart" + count;
    var treemapChartHomeId = "visionVisualizeChartHome" + count;
    $("#" + treeMapChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
    $("#" + chartId).css("width", "auto", "!important");
    $("#" + chartId).css("height", "330px", "!important");
    $("#" + treeMapChartId).css("width", "auto", "!important");
    $("#" + treeMapChartId).css("height", "330px", "!important");
    var chartCOnfigObjStr = JSON.parse(result["chartCOnfigObjStr"]);
    var tableName = result['tableName'];
    // $("#" + treemapChartHomeId).addClass("visionVisualChartBoxClass");
    if ($("#" + chartId).parent().parent().hasClass("homeChartWrapDiv")) {
        $("#" + chartId).parent().parent().attr("class", "col-md-6 col-sm-6 col-lg-3 homeChartWrapDiv treeMapMainDiv");
    }

    var dom = document.getElementById(chartId);
    var myChart = echarts.init(dom, null, {
        renderer: 'svg',
        useDirtyRect: true
    });
    var _rawData = result['data'];
    var durationVal = result['durationVal'];
    var colors = JSON.parse(result['colors'])['clrs'];
    const formatUtil = echarts.format;
    var option, chartTitle, labelData, hoverlabeldata, labelPosition, chartAreacolor, colorOpacity;
    if (result["chartCOnfigObjStr"] != null && result["chartCOnfigObjStr"] != undefined) {
        chartEditoptions = JSON.parse(result["chartCOnfigObjStr"]);
        count = "";
        chartTitle = chartEditoptions['BOXPLOTCHARTTITLE'] || $("#BOXPLOTCHARTTITLE" + count).val();
        labelData = chartEditoptions['BOXPLOTLABELDATA'] || $("#BOXPLOTLABELDATA" + count).val();
        hoverlabeldata = chartEditoptions['BOXPLOTHOVERLABELDATA'] || $("#BOXPLOTHOVERLABELDATA" + count).val();
        labelPosition = chartEditoptions['BOXPLOTLABELPOSITION'] || $("#BOXPLOTLABELPOSITION" + count).val();
        chartAreacolor = chartEditoptions['BOXPLOTCOLORSAREA'] || $("#BOXPLOTCOLORSAREA" + count).val();
        colorOpacity = chartEditoptions['BOXPLOTOPACITY'] || $("#BOXPLOTOPACITY" + count).val();
    } else {
        chartTitle = $("#BOXPLOTCHARTTITLE" + count).val();
        labelData = $("#BOXPLOTLABELDATA" + count).val();
        hoverlabeldata = $("#BOXPLOTHOVERLABELDATA" + count).val();
        labelPosition = $("#BOXPLOTLABELPOSITION" + count).val();
        chartAreacolor = $("#BOXPLOTCOLORSAREA" + count).val();
        colorOpacity = $("#BOXPLOTOPACITY" + count).val();
    }
    var isShow = true;
    if (labelData == "''")
        isShow = false;
    echarts.registerTransform(ecSimpleTransform.aggregate);
    option = {
        dataset: [{
                id: 'raw',
                source: _rawData
            }, {
                id: 'since_year',
                fromDatasetId: 'raw',
                transform: [{
                        type: 'filter',
                        config: {
                            dimension: 'Duration',
                            gte: durationVal
                        }
                    }]
            }, {
                id: 'income_aggregate',
                fromDatasetId: 'since_year',
                transform: [{
                        type: 'ecSimpleTransform:aggregate',
                        config: {
                            resultDimensions: [{
                                    name: 'min',
                                    from: 'Achieved',
                                    method: 'min'
                                }, {
                                    name: 'Q1',
                                    from: 'Achieved',
                                    method: 'Q1'
                                }, {
                                    name: 'median',
                                    from: 'Achieved',
                                    method: 'median'
                                }, {
                                    name: 'Q3',
                                    from: 'Achieved',
                                    method: 'Q3'
                                }, {
                                    name: 'max',
                                    from: 'Achieved',
                                    method: 'max'
                                }, {
                                    name: 'Name',
                                    from: 'Name'
                                }],
                            groupBy: 'Name'
                        }
                    }, {
                        type: 'sort',
                        config: {
                            dimension: 'Q3',
                            order: 'asc'
                        }
                    }]
            }],
        title: {
            text: chartTitle
        },
        tooltip: {
            trigger: 'axis',
            confine: true,
            formatter: function (params) {
                if (hoverlabeldata == 'x')
                    return params[0].name;
                if (hoverlabeldata == 'y')
                    return (params[0].value).join(",");
                if (hoverlabeldata == 'x+y')
                    return params[0].name + "->" + (params[0].value).join(",");
            }
        },
        xAxis: {
            name: 'Achieved',
            nameLocation: 'middle',
            nameGap: 30,
            scale: true
        },
        yAxis: {
            type: 'category'
        },
        grid: {
            bottom: 100
        },
        legend: {
            selected: {
                detail: false
            }
        },
        dataZoom: [{
                type: 'inside'
            }, {
                type: 'slider',
                height: 20
            }],
        series: [{
                name: 'boxplot',
                type: 'boxplot',
                datasetId: 'income_aggregate',
                itemStyle: {
                    color: colors[0] || chartAreacolor,
                    opacity: colorOpacity,
                },
                label: {
                    show: isShow,
                    formatter: function (params) {
                        if (hoverlabeldata == 'x')
                            return params[0].value;
                        if (hoverlabeldata == 'y')
                            return params[0].name;
                        if (hoverlabeldata == 'x+y')
                            return params[0].name + ":" + params[0].value;
                    }
                },
                encode: {
                    x: ['min', 'Q1', 'median', 'Q3', 'max'],
                    y: 'Duration',
                    itemName: ['Duration'],
                    tooltip: ['min', 'Q1', 'median', 'Q3', 'max']
                }
            }]
    };
    getToolBox(chartId, chartType, tableName, chartCOnfigObjStr, result, count, 1);

    if (option && typeof option === 'object') {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOption", JSON.stringify(option));
    }
    $("#" + chartId).parent().resize(function (event, ui) {
        var target = event.currentTarget;
        var id = target['id'];
        var width = ui.size.width;
        var height = ui.size.height;
        myChart.resize({
            width: width,
            height: height
        });

    });

}
function getToolBox(chartId, chartType, tableName, chartCOnfigObjStr, response, count, noOfDataCount) {
    //alert("toolbox");
    var dashBoard = $('#OptionDropdownData').val();
    var tempResponse = response;
    var colorsObj = response['defaultClrStr'];
    var tempData = response.data;
    //$("#" + chartId + "_toolBox").show();
    $("#" + chartId + "_legends").hide();
    $("#" + chartId).addClass('chartMain');
    var responseData = response['data'] || response['source'];


    var li = '';
    if (!chartId.includes('visionVisualizeSuggestedQueryInnerChart') && !chartId.includes('visionVisualizeModalInnerChart')) {
        // if (['SunBurst', 'TreeMap'].includes(chartType)) {
        // 	li = `<li rel="tooltip" class="modebar-btn" title="Date Columns" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
        //       <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="getCalendarColumns('${chartId}','${chartType}','${tableName}')">
        //           <path d='M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z'></path>
        //       </svg>
        //   </li>
        //   <li rel="tooltip" class="modebar-btn" title="Apply Radio Buttons" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
        //       <svg viewBox="0 0 512 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="getChartRadioButtons('${chartId}','${chartType}')">
        //           <path d='M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z'></path>
        //       </svg>
        //   </li>`;
        // }
        var chartButtonsObj = {};
        chartButtonsObj['Scroll_Up'] = `<li rel="tooltip" class="modebar-btn" title="Scroll Up" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
									    <svg viewBox="0 0 20 20" class="icon" height="1em" width="1em" onclick="scrollUp('${chartId}','${chartType}')"><path d="M4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L9.29289 9.29289C9.68342 8.90237 10.3166 8.90237 10.7071 9.29289L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071ZM4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289L9.29289 3.29289C9.68342 2.90237 10.3166 2.90237 10.7071 3.29289L15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711C15.3166 10.0976 14.6834 10.0976 14.2929 9.70711L10 5.41421L5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711Z"></path></svg>
								    </li>`;
        chartButtonsObj['Name'] = `<li rel="tooltip" class="modebar-btn" title="Save As Image" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
        		    <svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="saveChartAsImage('${chartId}','${chartType}')">
        		        <path d="m500 450c-83 0-150-67-150-150 0-83 67-150 150-150 83 0 150 67 150 150 0 83-67 150-150 150z m400 150h-120c-16 0-34 13-39 29l-31 93c-6 15-23 28-40 28h-340c-16 0-34-13-39-28l-31-94c-6-15-23-28-40-28h-120c-55 0-100-45-100-100v-450c0-55 45-100 100-100h800c55 0 100 45 100 100v450c0 55-45 100-100 100z m-400-550c-138 0-250 112-250 250 0 138 112 250 250 250 138 0 250-112 250-250 0-138-112-250-250-250z m365 380c-19 0-35 16-35 35 0 19 16 35 35 35 19 0 35-16 35-35 0-19-16-35-35-35z" transform="matrix(1 0 0 -1 0 850)"></path>
        		    </svg>
        		</li>`;
        chartButtonsObj['Show_Data'] = `<li rel="tooltip" class="modebar-btn" title="Show Data" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
        		    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="getGridData('','','${chartId}','','${tableName}')">
        		        <path d='M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM152 96H64V160H152V96zM208 160H296V96H208V160zM448 96H360V160H448V96zM64 288H152V224H64V288zM296 224H208V288H296V224zM360 288H448V224H360V288zM152 352H64V416H152V352zM208 416H296V352H208V416zM448 352H360V416H448V352z'></path>
        		    </svg>
        		</li>`;

        chartButtonsObj['Filters'] = `<li rel="tooltip" class="modebar-btn" title="Filter Chart" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
        		    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="getfilterData('${chartId}','${tableName}','${chartType}','',${count})">
        		        <path d='M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z'></path>
        		    </svg>
        		</li>`;

        chartButtonsObj['Delete'] = `<li rel="tooltip" class="modebar-btn" title="Delete Chart" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
        		    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="deleteVisualizeChart('${chartId}','${tableName}','${chartType}')">
        		        <path d='M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z'></path>
        		    </svg>
        		</li>`;

        chartButtonsObj['Expand'] = `<li rel="tooltip" class="modebar-btn" title="Expand Chart" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
        		    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="expandEChart('${chartId}','${chartType}','${count}','${tableName}','${response}')">
        		        <path d='M447.1 319.1v135.1c0 13.26-10.75 23.1-23.1 23.1h-135.1c-12.94 0-24.61-7.781-29.56-19.75c-4.906-11.1-2.203-25.72 6.937-34.87l30.06-30.06L224 323.9l-71.43 71.44l30.06 30.06c9.156 9.156 11.91 22.91 6.937 34.87C184.6 472.2 172.9 479.1 160 479.1H24c-13.25 0-23.1-10.74-23.1-23.1v-135.1c0-12.94 7.781-24.61 19.75-29.56C23.72 288.8 27.88 288 32 288c8.312 0 16.5 3.242 22.63 9.367l30.06 30.06l71.44-71.44L84.69 184.6L54.63 214.6c-9.156 9.156-22.91 11.91-34.87 6.937C7.798 216.6 .0013 204.9 .0013 191.1v-135.1c0-13.26 10.75-23.1 23.1-23.1h135.1c12.94 0 24.61 7.781 29.56 19.75C191.2 55.72 191.1 59.87 191.1 63.1c0 8.312-3.237 16.5-9.362 22.63L152.6 116.7l71.44 71.44l71.43-71.44l-30.06-30.06c-9.156-9.156-11.91-22.91-6.937-34.87c4.937-11.95 16.62-19.75 29.56-19.75h135.1c13.26 0 23.1 10.75 23.1 23.1v135.1c0 12.94-7.781 24.61-19.75 29.56c-11.1 4.906-25.72 2.203-34.87-6.937l-30.06-30.06l-71.43 71.43l71.44 71.44l30.06-30.06c9.156-9.156 22.91-11.91 34.87-6.937C440.2 295.4 447.1 307.1 447.1 319.1z'></path>
        		    </svg>
        		</li>`;


        chartButtonsObj['Edit'] = `<li rel="tooltip" class="modebar-btn" title="Edit Chart" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
            <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="homePageChartSetting('${chartId}','${chartType}',' ','${chartCOnfigObjStr}','${count}')">
        		<path d='M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z'></path>"
        		</svg></li>`;

        chartButtonsObj['Color_Pallete'] = `<li rel="tooltip" class="modebar-btn" title="Change Colors" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
            <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="changeEchartColors('${chartId}','${chartType}','${colorsObj}','${chartCOnfigObjStr}','${tempResponse}')">
        		<path d='M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z'></path>"
        		</svg></li>`;

        chartButtonsObj['Reset'] = `<li rel="tooltip" class="modebar-btn" title="Reset" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
                    <svg viewBox="0 0 1000 1000" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="refreshVisualizationchart('${dashBoard}','${chartId}','${chartType}')"> 
                		<path d="m786 296v-267q0-15-11-26t-25-10h-214v214h-143v-214h-214q-15 0-25 10t-11 26v267q0 1 0 2t0 2l321 264 321-264q1-1 1-4z m124 39l-34-41q-5-5-12-6h-2q-7 0-12 3l-386 322-386-322q-7-4-13-4-7 2-12 7l-35 41q-4 5-3 13t6 12l401 334q18 15 42 15t43-15l136-114v109q0 8 5 13t13 5h107q8 0 13-5t5-13v-227l122-102q5-5 6-12t-4-13z" transform="matrix(1 0 0 -1 0 850)"></path>
                		</svg></li>`;
        chartButtonsObj['Chart_Types'] = `<li id='${chartId}_echartTypes' rel="tooltip" class="modebar-btn" title="Chart Types" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
                    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="changegraph('${chartId}','${chartType}',' ',' ','${count}','${noOfDataCount}')">
                		<path d='M424.1 287c-15.13-15.12-40.1-4.426-40.1 16.97V352H336L153.6 108.8C147.6 100.8 138.1 96 128 96H32C14.31 96 0 110.3 0 128s14.31 32 32 32h80l182.4 243.2C300.4 411.3 309.9 416 320 416h63.97v47.94c0 21.39 25.86 32.12 40.99 17l79.1-79.98c9.387-9.387 9.387-24.59 0-33.97L424.1 287zM336 160h47.97v48.03c0 21.39 25.87 32.09 40.1 16.97l79.1-79.98c9.387-9.391 9.385-24.59-.0013-33.97l-79.1-79.98c-15.13-15.12-40.99-4.391-40.99 17V96H320c-10.06 0-19.56 4.75-25.59 12.81L254 162.7L293.1 216L336 160zM112 352H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c10.06 0 19.56-4.75 25.59-12.81l40.4-53.87L154 296L112 352z'></path>"
                		</svg></li>`;
        // if (['BasicAreaChart','StackedAreaChart','GradStackAreaChart','AreaPiecesChart'].includes(chartType)) {
        var respData = (responseData != null && !jQuery.isEmptyObject(responseData)) ? JSON.stringify(responseData) : "";
        if (respData != null && respData != '' && respData != undefined) {
            respData = respData.replaceAll('"', '#');
        }
        chartButtonsObj['Filp_Data'] = `<li rel="tooltip" class="modebar-btn" title="Data on Flip" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
                		<svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="getChartDataonFlip('${chartId}','${respData}')">
                			 <path d='M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM152 96H64V160H152V96zM208 160H296V96H208V160zM448 96H360V160H448V96zM64 288H152V224H64V288zM296 224H208V288H296V224zM360 288H448V224H360V288zM152 352H64V416H152V352zM208 416H296V352H208V416zM448 352H360V416H448V352z'></path>
                			</svg></li>`;
        chartButtonsObj['Scroll_Down'] = `<li rel="tooltip" class="modebar-btn" title="Scroll Down" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
										<svg viewBox="0 0 20 20" class="icon" height="1em" width="1em" onclick="scrollDownArrow('${chartId}','${chartType}')">
										<path d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L10.7071 10.7071C10.3166 11.0976 9.68342 11.0976 9.29289 10.7071L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289ZM15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071L4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929C4.68342 9.90237 5.31658 9.90237 5.70711 10.2929L10 14.5858L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929Z"></path>
										</svg>
									  </li>`;
        chartButtonsObj['AI_Insights'] = `<li rel="tooltip" class="modebar-btn" title="AI Insights" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
										<svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" onclick="getArtIntAPI('${chartId}','${chartType}','${tableName}')">
										<path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"></path>
										</svg></li>`;
        // }

        var allchartButtonsToBeAddedStr = $('#chartControlButtonsConfig').val();
        if (allchartButtonsToBeAddedStr != null && allchartButtonsToBeAddedStr != undefined && allchartButtonsToBeAddedStr != "") {
            var allchartButtonsToBeAddedObj = JSON.parse(allchartButtonsToBeAddedStr);
            var chartTypeButtonToBeAddedStr = "";
            if (allchartButtonsToBeAddedObj != null && !jQuery.isEmptyObject(allchartButtonsToBeAddedObj)) {
                chartTypeButtonToBeAddedStr = allchartButtonsToBeAddedObj[chartType];
            } else {
                chartTypeButtonToBeAddedStr = $('#ICONS_TO_BE_ADDED_FOR_CHARTS').val();
            }
            if (chartTypeButtonToBeAddedStr !== null && chartTypeButtonToBeAddedStr !== undefined && chartTypeButtonToBeAddedStr !== '') {
                var chartTypeButtonsToBeAddedObj = JSON.parse(chartTypeButtonToBeAddedStr);
                li = Object.keys(chartTypeButtonsToBeAddedObj).reduce(function (result, key) {
                    if (chartTypeButtonsToBeAddedObj[key] === 'Y' && chartButtonsObj.hasOwnProperty(key)) {
                        result += chartButtonsObj[key];
                    }
                    return result;
                }, "");
            }
        }
    } else if (chartId.includes('visionVisualizeModalInnerChart')) {
        $("#" + chartId).parent().addClass("visionVisualizeSuggestedQueryChartClass");
        li += `<li rel="tooltip" class="modebar-btn" title="Delete Chart" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
        		    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="deleteVisualizeChart('${chartId}','${tableName}','${chartType}')">
        		        <path d='M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z'></path>
        		    </svg>
        		</li>
    		<li rel="tooltip" class="modebar-btn" title="Save Chart" style="padding: 0px;text-align: center;">
    		    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="saveModalChart('${chartId}')">
    		        <path d= 'M384 160C366.3 160 352 145.7 352 128C352 110.3 366.3 96 384 96H544C561.7 96 576 110.3 576 128V288C576 305.7 561.7 320 544 320C526.3 320 512 305.7 512 288V205.3L342.6 374.6C330.1 387.1 309.9 387.1 297.4 374.6L191.1 269.3L54.63 406.6C42.13 419.1 21.87 419.1 9.372 406.6C-3.124 394.1-3.124 373.9 9.372 361.4L169.4 201.4C181.9 188.9 202.1 188.9 214.6 201.4L320 306.7L466.7 159.1L384 160z'></path>
    		    </svg>
    		</li>
    		<li rel="tooltip" class="modebar-btn" title="Edit Chart" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
            <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="homePageChartSetting('${chartId}','${chartType}',' ','${chartCOnfigObjStr}','${count}')">
        		<path d='M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z'></path>"
        		</svg></li>
    		<li id='${chartId}_echartTypes' rel="tooltip" class="modebar-btn" title="Chart Types" style="padding: 4px;border-bottom: 1px solid #ddd;text-align: center;">
                    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="changegraph('${chartId}','${chartType}',' ',' ','${count}','${noOfDataCount}')">
                		<path d='M424.1 287c-15.13-15.12-40.1-4.426-40.1 16.97V352H336L153.6 108.8C147.6 100.8 138.1 96 128 96H32C14.31 96 0 110.3 0 128s14.31 32 32 32h80l182.4 243.2C300.4 411.3 309.9 416 320 416h63.97v47.94c0 21.39 25.86 32.12 40.99 17l79.1-79.98c9.387-9.387 9.387-24.59 0-33.97L424.1 287zM336 160h47.97v48.03c0 21.39 25.87 32.09 40.1 16.97l79.1-79.98c9.387-9.391 9.385-24.59-.0013-33.97l-79.1-79.98c-15.13-15.12-40.99-4.391-40.99 17V96H320c-10.06 0-19.56 4.75-25.59 12.81L254 162.7L293.1 216L336 160zM112 352H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c10.06 0 19.56-4.75 25.59-12.81l40.4-53.87L154 296L112 352z'></path>"
                		</svg></li>

    		`;
        //		$("#" + chartId).css("width", "90%", "!important");
    } else {
        $("#" + chartId).parent().addClass("visionVisualizeSuggestedQueryChartClass");
        li += `<li rel="tooltip" class="modebar-btn" title="Delete Chart" style="padding:3px 4px;text-align: center;">
    		    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="deleteModalChart('${chartId}')">
    		        <path d='M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z'></path>
    		    </svg>
    		</li>
    		<li rel="tooltip" class="modebar-btn" title="Save Chart" style="padding: 0px;text-align: center;">
    		    <svg viewBox="0 0 17 17" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="saveModalChart('${chartId}')">
    		        <path d= 'M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z'></path>
    		    </svg>
    		</li>
    		<li rel="tooltip" class="modebar-btn" title="Edit Chart" style="padding: 0px;text-align: center;">
        <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="getModalChartSetting('${chartId}','${chartType}','','','${count}',event,'','')">
    		<path d='M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z'></path>"
    		</svg></li>
    		<li id='${chartId}_echartTypes' rel="tooltip" class="modebar-btn" title="Chart Types" style="padding: 0px;text-align: center;">
                		    <svg viewBox="0 0 448 512" class="icon" height="1em" width="1em" style="fill: rgb(11, 74, 153);" onclick="changeModalGraph('event','${chartId}','${chartType}',' ','','${count}','${noOfDataCount}')">
                			<path d='M424.1 287c-15.13-15.12-40.1-4.426-40.1 16.97V352H336L153.6 108.8C147.6 100.8 138.1 96 128 96H32C14.31 96 0 110.3 0 128s14.31 32 32 32h80l182.4 243.2C300.4 411.3 309.9 416 320 416h63.97v47.94c0 21.39 25.86 32.12 40.99 17l79.1-79.98c9.387-9.387 9.387-24.59 0-33.97L424.1 287zM336 160h47.97v48.03c0 21.39 25.87 32.09 40.1 16.97l79.1-79.98c9.387-9.391 9.385-24.59-.0013-33.97l-79.1-79.98c-15.13-15.12-40.99-4.391-40.99 17V96H320c-10.06 0-19.56 4.75-25.59 12.81L254 162.7L293.1 216L336 160zM112 352H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c10.06 0 19.56-4.75 25.59-12.81l40.4-53.87L154 296L112 352z'></path>"
                		</svg></li>

    		`;
        //		$("#" + chartId).css("width", "90%", "!important"); 
    }
    $("#" + chartId + "_toolBox ul").html(li);
}
function expandEChart(chartId, chartType) {
    const formatUtil = echarts.format;
    var options = $("#" + chartId).attr("echartOption");
    var chartDiv = "<div class='visionExpandEchartDiv'>"
            + "<div id='homepageEChartDiv'></div>"
            + "</div>";
    $("#dialog").html(chartDiv);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'View Chart'),
        width: 950,
        height: 600,
        fluid: true,
        modal: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }],
        open: function () {
            if (chartType === 'ganttChart') {
                var data = $("#" + chartId).attr("echartData");
                var chartContainer = document.getElementById('homepageEChartDiv'); // Replace with the correct container ID
                var ganttchartDataObject = new google.visualization.DataTable(JSON.parse(data));

                // Parse the options JSON and set the desired height and width
                var updatedOptions = JSON.parse(options);
                updatedOptions.height = 600;
                updatedOptions.width = 1000;

                // Create a Gantt chart on the homepage
                var chart = new google.visualization.Gantt(chartContainer);
                chart.draw(ganttchartDataObject, updatedOptions);
                return;
            }

            if (chartType == 'geochart') {
                var geochartData = $("#" + chartId).attr("geochartData");
                var region = $("#" + chartId).attr("region");
                chart = new google.visualization.GeoChart(document.getElementById('homepageEChartDiv'));
                var geochartDataObject = new google.visualization.DataTable(JSON.parse(geochartData));
                var updatedOptions = {
                    sizeAxis: {minValue: 1, maxValue: 1, minSize: 5, maxSize: 5},
                    width: 800, // Set the desired width here
                    height: 600, // Set the desired height here
                    region: region// Add any other updated options here
                };
                chart.draw(geochartDataObject, updatedOptions);
                return;
            }

            var dom = document.getElementById('homepageEChartDiv');
            var myChart = echarts.init(dom, null, {
                renderer: 'canvas',
                useDirtyRect: true,
                width: 1200,
                height: 450
            });

            if (options && options != '' && options != undefined) {
                options = JSON.parse(options);
                myChart.setOption(options);
            }
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            $(this).dialog("destroy");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });



}
var counter = 1;
function handlePlusInAreaPieces(event) {
    if (counter == 1) {
        $("#plusbuttonInAreaPieces").hide();
        $("#minusbuttonInAreaPieces").show();
    }
    $(`#plusbuttonInAreaPieces_${counter - 1}`).hide();
    $(`#minusbuttonInAreaPieces_${counter - 1}`).show();

    var divtoAdded = `<div class="dummydivclass"><input placeholder="Lower Bound" type="number" id="AREAPIECESCHARTLOWERBOUND_${counter}" style="width: 50px">
    <input placeholder="Upper Bound" type="number" id="AREAPIECESCHARTUPPERBOUND_${counter}" style="width: 50px">
    <span style="width: 20px" id="plusbuttonInAreaPieces_${counter}" onclick="handlePlusInAreaPieces(event)">+</span>
    <span style="width: 20px" id="minusbuttonInAreaPieces_${counter}" style="display:none" onclick="handleMinusInAreaPieces(event)">-</span>
	</div>`;
    // Use jQuery's append to add the HTML string to the DOM
    $("#addingLowerAndUpperBound").append(divtoAdded);

    counter++; // Increment the counter after appending the new elements
}
function handleMinusInAreaPieces(event) {
    var reqId = event.target.id;
    var reqCounter = reqId.split('_')[1];


    $(`#AREAPIECESCHARTLOWERBOUND_${reqCounter}`).remove();
    $(`#AREAPIECESCHARTUPPERBOUND_${reqCounter}`).remove();

    $(`#plusbuttonInAreaPieces_${reqCounter}`).remove();
    $(`#minusbuttonInAreaPieces_${reqCounter}`).remove();
}
function getChartPropertiesEchart(bigChartType, count) {
    var chartProperties;
    if (bigChartType === "GANTTCHART") {
        chartProperties = [
            'CHARTTITLE', 'BARHEIGHT', 'COLORSAREA'
        ];
    } else {
        chartProperties = [
            'MODE', 'CHARTTITLE', 'LABELDATA', 'HOVERLABELDATA', 'LABELPOSITION',
            'MARKERSHAPE', 'MARKERSIZE', 'HOVERBG', 'HOVERBORDERCOLOR', 'HOVERFONTCOLOR',
            'HOVERFONTFAMILY', 'HOVERFONTSIZE', 'COLORSMARKER', 'COLORSAREA', 'OPACITY',
            'LINECOLORS', 'LINEWIDTH', 'LINEDASH'
        ];
    }

    var properties = {};

    for (var i = 0; i < chartProperties.length; i++) {
        var property = chartProperties[i];
        if (['LINECOLORS', 'LINEWIDTH', 'LINEDASH'].includes(property)) {
            var value = $('#' + bigChartType + property).val();
        } else
            var value = $('#' + bigChartType + property + count).val();

        if (property === 'HOVERFONTCOLOR' && (value === undefined || value === null || value === '')) {
            value = 'Arial, sans-serif';
        }

        if (property === 'HOVERFONTSIZE') {
            value = (value !== undefined && value !== '' && value !== null) ? value : "10";
        }

        if (property === 'MARKERSIZE' || property === 'LINEWIDTH') {
            value = (value !== undefined && value !== '' && value !== null) ? value : "10";
        }

        if (property === 'OPACITY') {
            value = (value !== undefined && value !== '' && value !== null) ? value : '0.8';
        }

        properties[bigChartType + property] = value;
    }

    return properties;


}
function saveChartAsImage(chartId, chartType) {

    if (chartType == 'geochart' || chartType == 'ganttChart') {
        var chartContainer = document.getElementById(chartId);
        var chartSVG = chartContainer.querySelector('svg');
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        canvas.width = chartSVG.clientWidth;
        canvas.height = chartSVG.clientHeight;

        var image = new Image();
        image.src = 'data:image/svg+xml;base64,' + btoa(new XMLSerializer().serializeToString(chartSVG));

        image.onload = function () {
            context.drawImage(image, 0, 0);

            // Add a footer to the canvas
            context.font = '14px Arial';
            context.fillStyle = 'black';

            // Trigger the download
            var link = document.createElement('a');
            link.download = 'geo_chart.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };

    } else {
        var myChart = echarts.init(document.getElementById(chartId));
        var dataURL = myChart.getDataURL({
            type: 'png', // Image format
            pixelRatio: 2, // Resolution
            backgroundColor: 'white' // Background color
        });

        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'myChart.png'; // Filename
        link.click();
    }
}
function changeEchartColors(chartId, chartType, colrsObj) {
    var defaultColors;

    var defaultValuesArr;
    var options = $("#" + chartId).attr("echartOption");
    if (colrsObj != null && colrsObj != '' && colrsObj != undefined) {
        defaultColors = colrsObj;
        defaultValuesArr = defaultColors.split(",");
    } else {
        defaultValuesArr = colorsArr = ['#1864ab', '#fd7e14', '#0b7285', '#ff6b6b'];
    }
    var offset = "";
    var parrantId = "";
    var position = "";
    if (chartId != null && chartId != undefined) {
        var selector = $("#" + chartId + '_toolBox').find('.modebar-btn[title="Change Colors"]').closest('div');
        var select = $(selector['prevObject'][7]);
        position = "left";
        parrantId = selector;
    } else {
        parrantId = $("#imageid");
        position = "";
        offset = {left: 290, top: 60}
    }
    var defaultClrStr = "";
    if (defaultValuesArr !== null && !defaultValuesArr != undefined && defaultValuesArr.length > 0) {
        for (var c = 0; c < defaultValuesArr.length; c++) {
            defaultClrStr += "<span class='themeBtns' data-color='" + defaultValuesArr[c]
                    + "' style='background-color: " + defaultValuesArr[c] + ";'></span>";
            if (c == 5) {
                break;
            }
        }
    }
    var result = "";
    result += " <div class='colorPallatteMainDiv'>";
    if (chartId != null && chartId != " ") {
        result += "<div class='themeBtnsContainer'>"
                + " <div class='colorblockTitle'><h5>Default Color</h5></div>"
                + "<div class='colorPalletteSection'>"
                + "<div class='themeBtnsGroup' onclick=saveEchartColors(event,'" + chartId + "','" + chartType
                + "') title='Click to Save Color' onmouseover=\"updatecolorOnGraph(event,'" + chartId + "','" + chartType + "')\">"
                + defaultClrStr + "</div>" + "  </div>" + " </div>";
    }
    result += "<div class='themeBtnsContainer'>" + " <div class='colorblockTitle'><h5>Palette</h5></div>"
            + "<div class='colorPalletteSection'>"
            + "<div class='themeBtnsGroup' onclick=saveEchartColors(event,'" + chartId + "','" + chartType
            + "') title='Click to Save Color' onmouseover=\"updatecolorOnGraph(event,'" + chartId + "','" + chartType + "')\">"
            + "<div>"
            + "<span class='themeBtns' data-color='#696969' style='background-color: #696969;'></span>"
            + "  <span class='themeBtns' data-color='#888888' style='background-color: #888888;'></span>"
            + " <span class='themeBtns' data-color='#A0A0A0' style='background-color: #A0A0A0;'></span>"
            + "</div>" + "<div>"
            + "  <span class='themeBtns' data-color='#A8A8A8' style='background-color: #A8A8A8;'></span>"
            + "  <span class='themeBtns' data-color='#B8B8B8' style='background-color: #B8B8B8;'></span>"
            + "  <span class='themeBtns' data-color='#C0C0C0' style='background-color: #C0C0C0;'></span>"
            + "</div>" + "  </div>" + "<div class='themeBtnsGroup' onclick=saveEchartColors(event,'" + chartId + "','" + chartType
            + "') title='Click to Save Color' onmouseover=\"updatecolorOnGraph(event,'" + chartId + "','" + chartType + "')\">"
            + "<div>"
            + "<span class='themeBtns' data-color='#00acee' style='background-color: #00acee;'></span>"
            + "  <span class='themeBtns' data-color='#00b9ff' style='background-color: #00b9ff;'></span>"
            + " <span class='themeBtns' data-color='#2bc4ff' style='background-color: #2bc4ff;'></span>"
            + "</div>" + "<div>"
            + "  <span class='themeBtns' data-color='#00aaee' style='background-color: #00aaee;'></span>"
            + "  <span class='themeBtns' data-color='#26a7de' style='background-color: #26a7de;'></span>"
            + "  <span class='themeBtns' data-color='#45b1e8' style='background-color: #45b1e8;'></span>"
            + "</div>" + "  </div>" + "<div class='themeBtnsGroup' onclick=saveEchartColors(event,'" + chartId + "','" + chartType
            + "') title='Click to Save Color' onmouseover=\"updatecolorOnGraph(event,'" + chartId + "','" + chartType + "')\">"
            + "<div>"
            + "<span class='themeBtns' data-color='#006400' style='background-color: #006400;'></span>"
            + "  <span class='themeBtns' data-color='#008000' style='background-color: #008000;'></span>"
            + " <span class='themeBtns' data-color='#228B22' style='background-color: #228B22;'></span>"
            + "</div>" + "<div>"
            + "  <span class='themeBtns' data-color='#347C2C' style='background-color: #347C2C;'></span>"
            + "  <span class='themeBtns' data-color='#437C17' style='background-color: #437C17;'></span>"
            + "  <span class='themeBtns' data-color='#4AA02C' style='background-color: #4AA02C;'></span>"
            + "</div>" + "  </div>" + "<div class='themeBtnsGroup' onclick=saveEchartColors(event,'" + chartId + "','" + chartType
            + "') title='Click to Save Color' onmouseover=\"updatecolorOnGraph(event,'" + chartId + "','" + chartType + "')\">"
            + "<div>"
            + "<span class='themeBtns' data-color='#EAC117' style='background-color: #EAC117;'></span>"
            + "  <span class='themeBtns' data-color='#806517' style='background-color: #806517;'></span>"
            + " <span class='themeBtns' data-color='#5C3317' style='background-color: #5C3317;'></span>"
            + "</div>" + "<div>"
            + "  <span class='themeBtns' data-color='#347C2C' style='background-color: #347C2C;'></span>"
            + "  <span class='themeBtns' data-color='#E66C2C' style='background-color: #E66C2C;'></span>"
            + "  <span class='themeBtns' data-color='#C11B17' style='background-color: #C11B17;'></span>"
            + "</div>" + "  </div>" + "<div class='themeBtnsGroup' onclick=saveEchartColors(event,'" + chartId + "','" + chartType
            + "') title='Click to Save Color' onmouseover=\"updatecolorOnGraph(event,'" + chartId + "','" + chartType + "')\">"
            + "<div>"
            + "<span class='themeBtns' data-color='#00008B' style='background-color: #00008B;'></span>"
            + "  <span class='themeBtns' data-color='#191970' style='background-color: #191970;'></span>"
            + " <span class='themeBtns' data-color='#000080' style='background-color:#000080;'></span>"
            + "</div>" + "<div>"
            + "  <span class='themeBtns' data-color='#0000A0' style='background-color: #0000A0;'></span>"
            + "  <span class='themeBtns' data-color='#0020C2' style='background-color: #0020C2;'></span>"
            + "  <span class='themeBtns' data-color='#0909FF' style='background-color: #0909FF;'></span>"
            + "  </div>" + "</div>" + "<div class='themeBtnsGroup' onclick=saveEchartColors(event,'" + chartId + "','" + chartType
            + "') title='Click to Save Color' onmouseover=\"updatecolorOnGraph(event,'" + chartId + "','" + chartType + "')\">"
            + "<div>"
            + "<span class='themeBtns' data-color='#00acee' style='background-color: #00acee;'></span>"
            + "  <span class='themeBtns' data-color='#5cb9f1' style='background-color: #5cb9f1;'></span>"
            + " <span class='themeBtns' data-color='#86c7f4' style='background-color: #86c7f4;'></span>"
            + "</div>" + "<div>"
            + "  <span class='themeBtns' data-color='#a8d5f7' style='background-color: #a8d5f7;'></span>"
            + "  <span class='themeBtns' data-color='#c6e3fa' style='background-color: #c6e3fa;'></span>"
            + "  <span class='themeBtns' data-color='#e3f1fc' style='background-color: #e3f1fc;'></span>"
            + "</div>" + "  </div>"


            + "<div class='themeBtnsGroup' onclick=saveEchartColors(event,'" + chartId + "','" + chartType
            + "') title='Click to Save Color' onmouseover=\"updatecolorOnGraph(event,'" + chartId + "','" + chartType + "')\">"
            + "<div>"
            + "<span class='themeBtns' data-color='#acd4e4' style='background-color: #acd4e4;'></span>"
            + "<span class='themeBtns' data-color='#1c7ab5' style='background-color: #1c7ab5;'></span>"
            + " <span class='themeBtns' data-color='#0474cc' style='background-color: #0474cc;'></span>"
            + " <span class='themeBtns' data-color='#7caecb' style='background-color: #7caecb;'></span>"
            + " <span class='themeBtns' data-color='#149ea8' style='background-color: #149ea8;'></span>"
            + "</div><div>"

            + " <span class='themeBtns' data-color='#6cc2c9' style='background-color: #6cc2c9;'></span>"
            + " <span class='themeBtns' data-color='#49a1cc' style='background-color: #49a1cc;'></span>"
            + " <span class='themeBtns' data-color='#8caccc' style='background-color: #8caccc;'></span>"
            + " <span class='themeBtns' data-color='#3e94cc' style='background-color: #3e94cc;'></span>"
            + " <span class='themeBtns' data-color='#1488e4' style='background-color: #1488e4;'></span>"

            + "</div>" + "</div>"
            + " </div>" + " </div>" + "</div>";


    $("#dxpColorPopOver").remove();
    $("#dxpCreatePopOver").html("<div id='dxpColorPopOver'></div>");
    $("#dxpColorPopOver").html(result);
    //$("#dxpColorPopOver").jqxPopover('open');
    $("#dxpColorPopOver").jqxPopover({
        offset: offset,
        position: position,
        width: 262,
        height: 155,
        autoClose: true,
        title: "Color Palette",
        showCloseButton: true,
        selector: parrantId

    });

    // $('#dxpColorPopOver').jqxPopover({showArrow: true, arrowOffsetValue: 10});
    $('#dxpColorPopOver').addClass('chartPallettePopup');
    $("#dxpColorPopOver").jqxPopover('open');

}
function saveEchartColors(event, chartId, chartType) {
    var colorarr = [];
    var update = "";
    var colorobj = [];
    var colorsobj = event.currentTarget.children;
    var dashBoard = $('#OptionDropdownData').val();
    if (colorsobj != null && !jQuery.isEmptyObject(colorsobj) && colorsobj.length == 2) {

        var array1 = colorsobj[0].children;
        var array2 = colorsobj[1].children;
        if (array1.length > 0 && array2.length > 0) {
            for (var i = 0; i < array1.length; i++) {
                colorobj.push(array1[i]);
                colorobj.push(array2[i]);
            }
        } else {
            colorobj = (colorsobj);
        }

    } else {
        colorobj = (colorsobj);
    }
    var colorarr;
    if (chartId != null && chartId != '' && chartId != 'null' && chartId != undefined) {
        var dom = document.getElementById(chartId);
        var myChart = echarts.init(dom);
        var existingOptions = myChart.getOption();
        if (['StackedAreaChart', 'GradStackAreaChart', 'BasicAreaChart', 'AreaPiecesChart'].includes(chartType)) {

            for (var i = 0; i < existingOptions.series.length; i++) {
                colorarr.push(colorobj[i % colorobj.length].dataset['color']);
                existingOptions.series[i].areaStyle = {
                    color: colorobj[i % colorobj.length].dataset['color']
                };
            }


            myChart.setOption(existingOptions);
        }
        if (['BarAndLine'].includes(chartType)) {

            for (var i = 0; i < existingOptions.series.length; i++) {
                colorarr.push(colorobj[i % colorobj.length].dataset['color']);
                existingOptions.series[i].itemStyle = {
                    color: colorobj[i % colorobj.length].dataset['color']
                };
            }
            myChart.setOption(existingOptions);

        }
        if (['sankey', 'sunburst'].includes(chartType)) {

            for (var i = 0; i < existingOptions.series.length; i++) {
                for (var j = 0; j < existingOptions.series[i].levels.length; j++) {
                    colorarr.push(colorobj[j % colorobj.length].dataset['color']);
                    existingOptions.series[i].levels[j].itemStyle = {
                        color: colorobj[j % colorobj.length].dataset['color']
                    };
                    existingOptions.series[i].levels[j].lineStyle = {
                        color: colorobj[j % colorobj.length].dataset['color'],
                        opacity: 0.8
                    };
                }
            }
            existingOptions.color = colorarr;
            myChart.setOption(existingOptions);

        }
        if (['heatMap'].includes(chartType)) {

            var colors = colorobj[0 % colorobj.length].dataset['color'];
            var baseHexColor = colors;
            colorarr.push(colors);

            var r = parseInt(baseHexColor.slice(1, 3), 16);
            var g = parseInt(baseHexColor.slice(3, 5), 16);
            var b = parseInt(baseHexColor.slice(5, 7), 16);
            var gradientColors = [`rgba(${r}, ${g}, ${b}, 0)`, // Start color
                `rgba(${r}, ${g}, ${b}, 1)`// End color
            ];
            existingOptions.visualMap[0].inRange = {
                color: gradientColors

            };
            existingOptions.visualMap[0].controller.inRange = {
                color: gradientColors
            };
            existingOptions.visualMap[0].target.inRange = {
                color: gradientColors
            };
            myChart.setOption(existingOptions);

        }
        if (['treemap'].includes(chartType)) {

            var colors = colorobj[0 % colorobj.length].dataset['color'];
            for (var i = 0; i < existingOptions.series.length; i++) {
                for (var j = 0; j < existingOptions.series[i].data.length; j++) {
                    colorarr.push(colorobj[j % colorobj.length].dataset['color']);
                    existingOptions.series[i].data[j].itemStyle = {
                        color: colorobj[j % colorobj.length].dataset['color'],
                    };

                }

            }
            myChart.setOption(existingOptions);

        }
        if (['boxplot'].includes(chartType)) {

            var colors = colorobj[0 % colorobj.length].dataset['color'];
            colorarr.push(colors);
            for (var i = 0; i < existingOptions.series.length; i++) {
                existingOptions.series[i].itemStyle = {
                    color: colors,
                };
            }
            myChart.setOption(existingOptions);

        }
        if (chartType === 'ganttChart') {
            var ganttchartData = $("#" + chartId).attr("echartData");
            var options = $("#" + chartId).attr("echartOption");
            options = JSON.parse(options);
            chart = new google.visualization.GeoChart(document.getElementById(chartId));
            var geochartDataObject = new google.visualization.DataTable(JSON.parse(ganttchartData));

            // Define an array of colors
            var colorarr = [];

            for (var i = 0; i < colorobj.length; i++) {
                colorarr.push(colorobj[i % colorobj.length].dataset['color']);
            }

            options.gantt.innerGridTrack.fill = colorarr[0];

            // Redraw the chart (assuming you already have chart data and options)
            chart.draw(ganttchartData, options);
        } else if (chartType === 'candlestick') {
            var dom = document.getElementById(chartId);
            var myChart = echarts.init(dom);
            var existingOptions = myChart.getOption();

            // Define an array of colors
            var colorarr = [];

            for (var i = 0; i < existingOptions.series.length; i++) {
                // Push a color from your colorobj array to colorarr
                colorarr.push(colorobj[i % colorobj.length].dataset['color']);

                // Update itemStyle for the series
                existingOptions.series[i].itemStyle = {
                    color: 'red', // Color of the rising candlestick
                    color0: colorarr[0], // Color of the falling candlestick
                    borderColor: 'black', // Border color
                    borderColor0: 'black' // Border color for falling candlestick*/

                };
            }

            // Set the updated options back to the chart
            myChart.setOption(existingOptions);
        } else if (chartType === 'geochart') {
            var geochartData = $("#" + chartId).attr("geochartData");
            var region = $("#" + chartId).attr("region");
            chart = new google.visualization.GeoChart(document.getElementById(chartId));
            var geochartDataObject = new google.visualization.DataTable(JSON.parse(geochartData));

            // Define an array of colors
            var colorarr = [];

            for (var i = 0; i < colorobj.length; i++) {
                colorarr.push(colorobj[i % colorobj.length].dataset['color']);
            }
            var options = {
                datalessRegionColor: colorarr[0],
                sizeAxis: {minValue: 1, maxValue: 1, minSize: 5, maxSize: 5},
                colorAxis: {colors: [colorarr[1], colorarr[2], colorarr[3], colorarr[4], colorarr[5]]},
                region: region
            };


            // Redraw the chart (assuming you already have chart data and options)
            chart.draw(geochartDataObject, options);
        }


    }
    if (colorarr != null && colorarr != '') {
        var message = 'Do u want to Save?';
        var modalObj = {
            title: labelObject["Message"] != null ? labelObject["Message"] : "Message",
            body: "<div class='isPopupDefaultSaveClass'>" + message + "</div>",
        };
        var buttonArray = [
            {
                text: labelObject['Save'] != null ? labelObject['Save'] : 'Save',
                click: function () {
                    var colorobj = {};
                    colorobj['clrs'] = colorarr
                    $.ajax({
                        type: "POST",
                        url: "updatePalatteColor",
                        cache: false,
                        dataType: 'json',
                        async: false,
                        data: {
                            colorArr: JSON.stringify(colorobj),
                            chartId: chartId,
                            dashBoard: dashBoard,
                        },
                        success: function (response) {
                            if (response != null) {
                                updatecolorOnGraph(event, chartId, chartType);
                            }
                        },
                        error: function (e) {
                            updatecolorOnGraph(event, chartId);
                            console.log(e);
                            sessionTimeout(e);
                            stopLoader();
                        }
                    });
                },
                isCloseButton: true
            }
        ];
        modalObj['buttons'] = buttonArray;
        createModal("dataDxpSplitterValue", modalObj);
        $("#dataDxpSplitterValue").css("z-index", "99999", "!important");
    }
}
function convertChartPropertiesPlotyToEchart(newChartType, oldchartType, chartConfigObj, colorsObj) {

    var chartProperties = [
        'MODE', 'CHARTTITLE', 'LABELDATA', 'HOVERLABELDATA', 'LABELPOSITION',
        'MARKERSHAPE', 'MARKERSIZE', 'HOVERBG', 'HOVERBORDERCOLOR', 'HOVERFONTCOLOR',
        'HOVERFONTFAMILY', 'HOVERFONTSIZE', 'COLORSMARKER', 'COLORSAREA', 'OPACITY',
        'LINECOLORS', 'LINEWIDTH', 'LINEDASH'
    ];
    var properties = {};
    newChartType = newChartType.toUpperCase();
    properties[newChartType + 'MODE'] = 'lines';
    properties[newChartType + 'MARKERSHAPE'] = 'triangle';
    properties[newChartType + 'MARKERSIZE'] = '10';
    properties[newChartType + 'HOVERFONTFAMILY'] = 'Arial, sans-serif';
    properties[newChartType + 'HOVERFONTSIZE'] = '5';
    properties[newChartType + 'COLORSMARKER'] = colorsObj; // NEED TO ASSIGN  COLOR
    properties[newChartType + 'COLORSAREA'] = colorsObj; // NEED TO ASSIGN COLOR
    properties[newChartType + 'OPACITY'] = '0.8';
    properties[newChartType + 'LINECOLORS'] = colorsObj; // NEED TO ASSIGN color
    properties[newChartType + 'LINEWIDTH'] = '5';
    properties[newChartType + 'LINEDASH'] = 'solid';


    for (var i = 0; i < chartProperties.length; i++) {
        var property = chartProperties[i];
        var value;
        if (chartConfigObj.hasOwnProperty(oldchartType.toUpperCase() + property)) {
            value = chartConfigObj[oldchartType.toUpperCase() + property];
            if (value !== undefined && value !== ' ' && value !== null) {
                value = value.replace('label', 'x').replace('values', 'y').replace('percent', '%');

                properties[newChartType + property] = value;
            }

        }
    }

    return properties;



}
function convertChartPropertiesEchartToPloty(newChartType, oldchartType, chartConfigObj) {
    var properties = {};
    newChartType = newChartType.toUpperCase();
    properties[newChartType + "CHARTTITLE"] = "layout";
    properties[newChartType + "HOVERLABEL"] = "layout";
    properties[newChartType + "HOVERLABELDATA"] = "data";
    properties[newChartType + "LABELDATA"] = "data";
    properties[newChartType + "LABELPOSITION"] = "data"
    properties[newChartType + "LEGEND"] = "layout";
    properties[newChartType + "LEGENDPOSITION"] = "layout";
    properties[newChartType + "MARKER"] = "data";
    properties[newChartType + "SHOWLEGEND"] = "layout";


    return properties;

}
function showStr(title, message) {
    $("#dialog1").html(message);
    $("#dialog1").dialog({resizable: false,
        title: (labelObject[title] != null ? labelObject[title] : title),
        width: 600,
        maxWidth: 600,
        height: 150,
        maxHeight: 1000,
        fluid: true,
        buttons: [{

            }],
        open: function () {
            $("#Loader").css("display", "none");
            $("body").css({"pointer-events": "auto"});
        },
        beforeClose: function (event, ui) {

        }
    });
}
var tableInserted = false;
function getChartDataonFlip(chartId, chartDataObj) {
    $('#' + chartId + '_toolBox').toggle();
    if (chartDataObj.includes('#')) {
        chartDataObj = chartDataObj.replaceAll('#', '"');
    }
    chartDataObj = JSON.parse(chartDataObj);
    var count = $('#' + chartId + '_count').val();
    $('#chart-container' + count).toggleClass('flipped');
    tableInserted = false;
    if (!tableInserted) {
        var stringArrayKeys = [];
        var numberKeys = [];

        for (var key in chartDataObj) {
            if (Array.isArray(chartDataObj[key]) && typeof chartDataObj[key][0] === "string") {
                stringArrayKeys.push(key);
            } else {
                numberKeys.push(key);
            }
        }

        var keys = stringArrayKeys.concat(numberKeys);

        var table = '<table><thead><tr><th>' + keys.join('</th><th>') + '</th></tr></thead><tbody>';

        for (var i = 0; i < chartDataObj[keys[0]].length; i++) {
            var row = keys.map(function (key) {
                return chartDataObj[key][i];
            }).join('</td><td>');

            table += '<tr><td>' + row + '</td></tr>';
        }

        table += '</tbody></table>';
        var chartBackContent = "<div class='chart-table-container'>'" + table + "'</div><div class='go-back-button-container'><button class='go-back-button' onclick=flipToggle('" + count + "','" + chartId + "')><span class='go-back-icon'>&#8617;</span> Go Back</button></div>";
        $('#chart-back-id' + count).html(chartBackContent);
        // $('#chart-back-id'+count).click(function(){
        // 	$('#chart-container'+count).toggleClass('flipped');
        // });
        tableInserted = true;
    }
}
function flipToggle(count, chartId) {
    $('#' + chartId + '_toolBox').toggle();
    $('#chart-container' + count).toggleClass('flipped');
}
function shrinkExpandCard() {

    $('#upperCpmpaireMainDIvID').toggleClass('shrinkSection');

    $('#expendInOutDivID i').toggleClass('fa-angle-double-up').toggleClass('fa-angle-double-down');
}
function closeAllDialogsBoxes() {
    $("body div[id*=dialog]").each(function () {
        var dialogId = $(this).attr("id");
        closeDialogBox('#' + dialogId);
    });
}
function closeDia() {


    $("body div[id*=dilog]").each(function () {
        var dialogId = $(this).attr("id");
        closeDialogBox('#' + dialogId);
    });

}
function getSaveOptionEnableValue() {

    var flag = 'N';
    try {
        flag = $("#smartChartSaveFlag").val();
    } catch (e) {
        flag = 'N';
    }
    var roleId = $("#rolehid").val();
    var userId = sessionStorage.getItem("userName");
    if (flag != null && flag != '' &&
            ((userId != null && userId != '' && userId != 'undefined' && userId != undefined)
                    || (roleId != null && roleId != '' && roleId != 'undefined' && roleId != undefined))
            ) {
        if (flag.indexOf(",") > -1) {
            if (flag.indexOf(userId) > -1) {
                var flagArray = flag.split(',');
                if (flagArray != null && flagArray.length > 0) {
                    for (var j = 0; j < flagArray.length; j++) {
                        var flag1 = flagArray[j];
                        if (flag1 != null && flag1 != '' && flag1 != 'undefined' && flag1 != undefined) {
                            var flag1Array = flag1.split(':');
                            if (flag1Array != null && flag1Array.length > 0) {
                                var flag1Value1 = flag1Array[0];
                                var flag1Value2 = flag1Array[1];
                                if (flag1Value1 != null && flag1Value1 != '' && flag1Value1 != 'undefined' && flag1Value1 != undefined
                                        && userId != null && userId != '' && userId != 'undefined' && userId != undefined &&
                                        flag1Value1 == userId) {
                                    flag = flag1Value2;
                                    break;
                                }

                            }
                        }


                    }
                } else {
                    flag = 'N';
                }
            } else if (flag.indexOf(roleId) > -1) {
                var flagArray = flag.split(',');
                if (flagArray != null && flagArray.length > 0) {
                    for (var j = 0; j < flagArray.length; j++) {
                        var flag1 = flagArray[j];
                        if (flag1 != null && flag1 != '' && flag1 != 'undefined' && flag1 != undefined) {
                            var flag1Array = flag1.split(':');
                            if (flag1Array != null && flag1Array.length > 0) {
                                var flag1Value1 = flag1Array[0];
                                var flag1Value2 = flag1Array[1];
                                if (flag1Value1 != null && flag1Value1 != '' && flag1Value1 != 'undefined' && flag1Value1 != undefined
                                        && roleId != null && roleId != '' && roleId != 'undefined' && roleId != undefined &&
                                        flag1Value1 == roleId) {
                                    flag = flag1Value2;
                                    break;
                                }

                            }
                        }


                    }
                } else {
                    flag = 'N';
                }
            } else {
                flag = 'N';
            }
        } else {
            flag = 'N';
        }
    } else {
        flag = 'N';
    }

    return flag;
}
function toggleSaveButtonVisibility() {

    var saveButtonEnable = getSaveOptionEnableValue();

    if (saveButtonEnable != null && saveButtonEnable != '' && saveButtonEnable == 'Y') {
        $("#saveButton").hide();
    } else {
        $("#saveButton").show();
    }

}
function fetchFilterChartData(chartId, tableName, chartType, expandChartId, filterConditions) {
    var flag = 'N';
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'html',
        cache: false,
        url: 'getChartFilterData',
        async: true,
        data: {
            chartId: chartId,
            tableName: tableName,
            chartType: chartType,
            filterConditions: filterConditions,
            flag: flag,
            roleId: $('#roleId_DXP_CHARTS').val(),

        },
        success: function (response) {
            try {
                $("#dialog").dialog("destroy");
            } catch (e) {
            }
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
                        var colorsObj = dataarr[i]['colorsObj'];
                        var query = dataarr[i]['query'];
                        var comboValue = dataarr[i]['comboValue'];
                        var currencyConversionStrObject = dataarr[i]['currencyConversionStrObject'];
                        var chartConfigToggleStatus = dataarr[i]['chartConfigToggleStatus'];
                        var zAxisValues = dataarr[i]['zAxis'];
                        var candleColumns = dataarr[i]['candleColumn'];
                        var staticTargetInputVal = dataarr[i]['staticTargetInputVal'];
                        var joinQuery = dataarr[i]['fetchQuery'];
                        var sortColumns = dataarr[i]['sortColumns'];
                        if (filterCondition != null && filterCondition != '' && filterCondition != undefined) {
                            filterCondition = JSON.parse(filterCondition);
                            if (filterCondition != null && !jQuery.isEmptyObject(filterCondition)) {
                                if (filterConditions != null && filterConditions != '' && filterConditions != undefined) {
                                    $("#" + id + "_chartFilter").val(filterConditions);
                                    filterConditions = JSON.parse(filterConditions);
                                    $.each(filterCondition, function (index, filterCondVal) {
                                        if (filterCondVal != null && !jQuery.isEmptyObject(filterCondVal)) {
                                            filterConditions.push(filterCondVal);
                                        }
                                    });
                                    if (filterConditions != null && !jQuery.isEmptyObject(filterConditions)) {
                                        filterConditions = JSON.stringify(filterConditions);
                                    }
                                }
                            }
                        } else if (filterConditions != null && filterConditions != '' && filterConditions != undefined) {
                            $("#" + id + "_chartFilter").val(filterConditions);
                            filterConditions = JSON.parse(filterConditions);
                            if (filterCondition != null && filterCondition != '' && filterCondition != undefined) {
                                filterCondition = JSON.parse(filterCondition);
                                if (filterCondition != null && !jQuery.isEmptyObject(filterCondition)) {
                                    $.each(filterCondition, function (index, filterCondVal) {
                                        if (filterCondVal != null && !jQuery.isEmptyObject(filterCondVal)) {
                                            filterConditions.push(filterCondVal);
                                        }
                                    });
                                }
                            }
                            if (filterConditions != null && !jQuery.isEmptyObject(filterConditions)) {
                                filterConditions = JSON.stringify(filterConditions);
                            }
                        }
                        if (XAxix != null && XAxix != '' && yAxix != null && yAxix != '' && type != 'Card') {
                            var chartid = id;
                            if (expandChartId != null && expandChartId != '' && expandChartId != undefined) {
                                var chartExtendPropObj = $("#homepageChartDiv_options").val();
                                if (chartExtendPropObj != null && chartExtendPropObj != '' && chartExtendPropObj != undefined) {
                                    chartPropObj = chartExtendPropObj;
                                }
                                $("#homepageChartDiv_filter").val(filterConditions);
                                getExpandVisualizeChart(expandChartId, chartType, XAxix, yAxix, table, aggColumnName, filterConditions, chartPropObj, chartConfigObj, count, '', expandChartId, colorsObj);
                            } else {
                                var chartExtendPropObj = $("#" + chartid + "_options").val();
                                if (chartExtendPropObj != null && chartExtendPropObj != '' && chartExtendPropObj != undefined) {
                                    chartPropObj = chartExtendPropObj;
                                }
                                var slicerFilter = [];
                                var chartFilter = $("#" + id + "_homePageFilter").val();
                                if (chartFilter != null && chartFilter != '' && chartFilter != undefined) {
                                    chartFilter = JSON.parse(chartFilter);
                                    if (chartFilter != null && !jQuery.isEmptyObject(chartFilter)) {
                                        for (var key in chartFilter) {
                                            if (chartFilter.hasOwnProperty(key)) {
                                                var paramObj = chartFilter[key];
                                                slicerFilter.push(paramObj);
                                            }
                                        }
                                    }
                                }
                                var slicerFilterCondition = $("#" + id + "_filter").val();
                                if (slicerFilterCondition != null && slicerFilterCondition != '' && slicerFilterCondition != undefined) {
                                    slicerFilterCondition = JSON.parse(slicerFilterCondition);
                                    if (slicerFilterCondition != null && !jQuery.isEmptyObject(slicerFilterCondition) && slicerFilterCondition.length > 0) {
                                        for (var key in slicerFilterCondition) {
                                            if (slicerFilterCondition.hasOwnProperty(key)) {
                                                var paramObj = slicerFilterCondition[key];
                                                slicerFilter.push(paramObj);
                                            }
                                        }
                                    }
                                }
                                if (filterConditions != null && filterConditions != '' && filterConditions != undefined) {
                                    filterConditions = JSON.parse(filterConditions);
                                    if (filterConditions != null && !jQuery.isEmptyObject(filterConditions)) {
                                        for (var key in filterConditions) {
                                            if (filterConditions.hasOwnProperty(key)) {
                                                var paramObj = filterConditions[key];
                                                slicerFilter.push(paramObj);
                                            }
                                        }

                                    }
                                }
                                if (slicerFilter != null && !jQuery.isEmptyObject(slicerFilter)) {
                                    slicerFilter = JSON.stringify(slicerFilter);
                                }
                                getVisualizeChart(chartid, chartType, XAxix, yAxix, table, aggColumnName, slicerFilter, chartPropObj, chartConfigObj, count, labelLegend, colorsObj, comboValue, "", "", "", joinQuery, "", "", zAxisValues, "", candleColumns, staticTargetInputVal, sortColumns);
                            }


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
//nikhil copy code end


function closebsPopOver(e) {
    var popOverID = $(".colorPalletePopOver").attr('id');
    $("#" + popOverID).popover('dispose');
}
function getstackedBarChart(chartId, result, count, chartType, saveType, filterCondition, expandChartDivId) {
    if (expandChartDivId != null && expandChartDivId != '' && expandChartDivId != undefined) {
        $("#" + expandChartDivId + "_echarts_toolBox_filterCond").val(filterCondition);
    } else {
        $("#" + chartId + "_echarts_toolBox_filterCond").val(filterCondition);
    }

    chartType = 'stackedBarChart';
    var chartUpper = chartType.toUpperCase();
    var chartTitle = $("#" + chartUpper + "CHARTTITLE").val();
    $("#visionVisualizeChartId" + count).remove();
    var dom = document.getElementById(chartId);
    if (!(expandChartDivId != null && expandChartDivId != '' && expandChartDivId != undefined)) {
        var parentId = $("#" + chartId).parents(".homeChartWrapDiv").attr("id");
        var parentHomeChartId = $("#" + chartId).parents(".homeChartParentDiv").attr("id");
        if (parentHomeChartId != null && parentHomeChartId != '' && parentHomeChartId != undefined) {
            $("#" + chartId).remove();
            $("#" + parentHomeChartId).prepend("<div id='" + chartId + "' class='chartMain chartMainBorderBox'></div>");
        }
        var stackedChartId = "visionVisualizeChart" + count;
        var stackedChartHomeId = "visionVisualizeChartHome" + count;
        $("#" + stackedChartId).append("<div id='visionVisualizeChartId" + count + "' type='" + chartType + "' count='" + count + "' class='visionVisualChartBoxClass visionVisualChartBoxSelected'></div>")
        $("#" + chartId).css("width", "250px", "!important");
        $("#" + chartId).css("height", "330px", "!important");
        $("#" + stackedChartId).css("width", "500px", "!important");
        $("#" + stackedChartId).css("height", "330px", "!important");    
        $('#stackedBarChart_tooltip').remove();
        $('body').append(`<div id="stackedBarChart_tooltip" class="stackedBarChartcustomTooltip"></div>`);
        $("#" + parentId).css("width", "500px", "!important");
        $("#" + parentId).css("height", "330px", "!important");
        $("#" + stackedChartHomeId).addClass("visionVisualChartBoxClass");
        dom = document.getElementById(chartId);
    } else {
        dom = document.getElementById(expandChartDivId);
    }
    var chartCOnfigObjStr, chartCOnfigObj, chartTitle, colorsStr, labelData, hoverlabeldata, labelPosition, isShowLabel = false;
    var colorObj = {};
    if (result.hasOwnProperty('chartCOnfigObjStr')) {
        chartCOnfigObjStr = result['chartCOnfigObjStr'];
    }
    if (chartCOnfigObjStr != null && chartCOnfigObjStr != '' && chartCOnfigObjStr != undefined) {
        chartCOnfigObj = JSON.parse(chartCOnfigObjStr);
        chartTitle = chartCOnfigObj[chartUpper + 'CHARTTITLE'] || chartCOnfigObj[chartUpper + 'CHARTTITLE' + count];
        labelData = chartCOnfigObj[chartUpper + 'LABELDATA'] || chartCOnfigObj[chartUpper + 'LABELDATA' + count];
        labelData = chartCOnfigObj[chartUpper + 'LABELDATA'] || chartCOnfigObj[chartUpper + 'LABELDATA' + count];
        hoverlabeldata = chartCOnfigObj[chartUpper + 'HOVERLABELDATA'] || chartCOnfigObj[chartUpper + 'HOVERLABELDATA' + count];
        labelPosition = chartCOnfigObj[chartUpper + 'LABELPOSITION'] || chartCOnfigObj[chartUpper + 'LABELPOSITION' + count];
    }
    if (result.hasOwnProperty('colorsObj')) {
        colorsStr = result['colorsObj'];
        if (colorsStr != null && colorsStr != undefined && colorsStr != '') {
            colorObj = JSON.parse(colorsStr);
            colorObj = colorObj['clrs'];
            result['defaultClrStr'] = colorObj.join(',');
        }
    }
    result['colorsObj'] = (colorObj != null && !jQuery.isEmptyObject(colorObj)) ? colorObj : ["#EAC117", "#347C2C", "#806517", "#E66C2C", "#5C3317", "#C11B17"];

    var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
    });
    var xAxis = result['xAxis'];
    var yAxis = result['yAxis'];
    //yAxis['triggerEvent'] = true;
    yAxis['axisLabel'] = {
        formatter: function (value) {
            if (value.length > 10) {
                return value.substr(0, 5) + '...';
            } else {
                return value;
            }
        },
        fontSize: '10px',
        fontWeight: '600',
        color: '#0b4a99',
        fontFamily: 'segeo-ui, -apple-system, Roboto, Helvetica Neue, sans-serif',
    };
    if (expandChartDivId != null && expandChartDivId != '' && expandChartDivId != undefined) {
        yAxis['axisLabel'] = {
            ...yAxis['axisLabel'],
            interval: 0,
            fontSize: 8
        };
    }
    xAxis['axisLabel'] = {
        formatter: function (value) {
            if (Math.abs(value) >= 1000000000) {
                return (value / 1000000000).toFixed(1) + 'B'; // Billions
            } else if (Math.abs(value) >= 1000000) {
                return (value / 1000000).toFixed(1) + 'M'; // Millions
            } else if (Math.abs(value) >= 1000) {
                return (value / 1000).toFixed(1) + 'K'; // Thousands
            } else {
                return value; // Plain value
            }
        },

        fontSize: '10px',
        fontWeight: '600',
        color: '#0b4a99',
        fontFamily: 'segeo-ui, -apple-system, Roboto, Helvetica Neue, sans-serif'

    };
    if (labelData != null && labelData != undefined) {
        isShowLabel = labelData !== "''" ? true : false;
    }
    var series = result['series'];
    series.forEach((value, index) => {
        value['label'] = {
            show: isShowLabel,
            position: labelPosition,
            //emphasis: { focus: 'series' },
            formatter: function (params) {


                /*const xAxisModel = myChart.getModel().getComponent('xAxis');
                 
                 // Retrieve the range of the Y-axis scale
                 const xAxisRange = xAxisModel.axis.scale;
                 var xaxisMaxScale = xAxisRange['_extent'][1];
                 var chartWidth = myChart.getWidth(); // Get full chart width
                 var gridLeft = 0.04 * chartWidth; // Approximate grid.left
                 var gridRight = 0.04 * chartWidth; // Approximate grid.right
                 var usableWidth = chartWidth - gridLeft - gridRight; // Compute usable width
                 
                 
                 var total = 0;
                 value['data'].forEach(function(param, val) {
                 total += param;
                 }); // Get total stack value for that bar
                 var segmentWidth = (params.value / total) * usableWidth; // Approximate segment width
                 var paramsLength = (params.value).toString().length;
                 var labelSegmentWidth = paramsLength * 14;
                 if (segmentWidth >= labelSegmentWidth) {  // If wide enough, show full value
                 return params.value;
                 } else {
                 var paramsLen = Math.round(segmentWidth / 14);
                 if (paramsLen > 0 && params.value > 0) {
                 return params.value.toString().substr(0, paramsLen) + '..'; // If too narrow, shorten label
                 } else {
                 return '';
                 }
                 }*/


                const xAxisModel = myChart.getModel().getComponent('xAxis');
                const xAxisRange = xAxisModel.axis.scale;
                var xaxisMaxScale = xAxisRange['_extent'][1];
                var total = 0;
                value['data'].forEach(function (param, val) {
                    total += param;
                });
                let segmentWidthRatio = (params.value) / xaxisMaxScale;  // Segment width as a fraction of total
                var chartWidth = myChart.getWidth(); // Get full chart width
                var gridLeft = 0.04 * chartWidth; // Approximate grid.left
                var gridRight = 0.04 * chartWidth; // Approximate grid.right
                var usableWidth = chartWidth - gridLeft - gridRight; // Compute usable width
                let segmentWidth = segmentWidthRatio * usableWidth; // Calculate segment pixel width

                let charWidth = 14; // Approximate character width in pixels
                let maxChars = Math.floor(segmentWidth / charWidth); // Maximum characters that fit

                let valueStr = numberFormatterMK(params);
                valueStr = valueStr.toString();
                valueStr = valueStr.length <= maxChars ? valueStr : valueStr.substring(0, maxChars) + '.';
                let name = params.name;
                name = name.length <= maxChars ? name : name.substring(0, maxChars) + '.';
                let labelValue = name + ': ' + valueStr;
                labelValue = labelValue.length <= maxChars ? labelValue : labelValue.substring(0, maxChars) + '.'
                if (labelData != null && labelData.trim() !== '') {
                    if (labelData === 'x') {
                        return name;
                    }
                    if (labelData === 'y') {
                        return valueStr; // Convert value to string
                    }

                    if (labelData === 'x+y') {

                        return labelValue; // Convert value to string
                    }

                }





                /*let value = params.value.toString(); // Convert the value to a string
                 
                 if (value.length > 3) {
                 
                 return value.substr(0, 3) + '...'; // Truncate if length > 3
                 
                 } else {
                 
                 return value; // Return original value if length <= 3
                 
                 }*/

            },
        }
    });
    var optionObjectEcharts = result['layout'];
    if (chartTitle === undefined || chartTitle === '' || chartTitle === null) {
        chartTitle = optionObjectEcharts['text'];
    }
    var tableName = result['tableName'];
    var option = {
        color: (colorObj != null && !jQuery.isEmptyObject(colorObj)) ? colorObj : ["#EAC117", "#347C2C", "#806517", "#E66C2C", "#5C3317", "#C11B17"],
        tooltip: {
            trigger: 'item',
            position: function (point, params, dom, rect, size) {
                // Get dimensions and pointer coordinates
                var x = point[0]; // Mouse X-coordinate
                var y = point[1]; // Mouse Y-coordinate
                var tooltipWidth = size.contentSize[0]; // Tooltip width
                var tooltipHeight = size.contentSize[1]; // Tooltip height
                var chartWidth = size.viewSize[0]; // Chart width
                var chartHeight = size.viewSize[1]; // Chart height

                // Adjust X position
                if (x + tooltipWidth > chartWidth) {
                    x = x - tooltipWidth - 10; // Shift to the left
                    if (x < 10)
                        x = 10; // Prevent overflow on the left
                } else {
                    x += 10; // Offset to the right
                }

                // Adjust Y position
                if (y + tooltipHeight > chartHeight) {
                    y = y - tooltipHeight - 10; // Shift up
                    if (y < 10)
                        y = 10; // Prevent overflow on the top
                } else {
                    y += 10; // Offset below
                }

                return [x, y];
            },
            //axis for all stacks of bar
            axisPointer: {
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            },
            formatter: function (params) {
                if (hoverlabeldata === 'x') {
                    return `<div style="max-width: 150px; white-space: normal; word-wrap: break-word;">
                        ${params.name}
                    </div>`;
                } else if (hoverlabeldata === 'y') {
                    return `<div style="max-width: 150px; white-space: normal; word-wrap: break-word;">
                        ${numberFormatterMK(params)}
                    </div>`;
                } else if (hoverlabeldata === 'x+y') {
                    return `<div style="max-width: 150px; white-space: normal; word-wrap: break-word;">
                        ${params.name} -> ${params.seriesName}: ${numberFormatterMK(params)}
                    </div>`;
                }
            },
        },
        legend: {

            type: 'scroll',
            orient: 'horizontal',
            width: '280px',
            height: '20px',
            left: '5%',
            bottom: '2%',
            padding: 0,
            itemGap: 5,
            itemWidth: 10,
            itemHeight: 10,
            margin: 10
        },
        grid: {
            left: '4%',
            right: '4%',
            bottom: '10%',
            top: '15%',
            containLabel: true
        },
        xAxis: xAxis,
        yAxis: yAxis,
        series: series,
        title: {
            text: chartTitle,
            textStyle: {
                fontSize: 14,
                fontWeight: '500',
                color: '#0b4a99',
                fontFamily: 'segeo-ui, -apple-system, Roboto, Helvetica Neue,sans-serif',
            },
            left: 'center',
            top: '10px',
        },

    };
    if (!(saveType != null && saveType != '' && saveType != undefined)) {
        getToolBox(chartId, chartType, tableName, "", result, count, 3);
    }



    if (option && typeof option === 'object') {
        myChart.setOption(option);
        $("#" + chartId).attr("echartOptionConfig", chartCOnfigObjStr);
        if (!(expandChartDivId != null && expandChartDivId != '' && expandChartDivId != undefined)) {
            $("#" + chartId).attr("echartOption", JSON.stringify(option));
        } else {
            $(`#${chartId}_${expandChartDivId}`).attr("echartOption", JSON.stringify(option));
            expandEChart(chartId, chartType, count, tableName, response, expandChartDivId);
        }
    }
    myChart.on('mouseover', params => {
        if (params.componentType === 'yAxis') {
            const fullLabel = params.value;
            $('#stackedBarChart_tooltip').text(fullLabel).css({
                top: params.event.event.clientY + 5,
                left: params.event.event.clientX + 5,
                display: 'block',
            });
        }
    });
    myChart.on('mouseout', params => {
        if (params.componentType === 'yAxis') {
            $('#stackedBarChart_tooltip').css('display', 'none');
        }
    });
    //showEchartsExpandAndModebarButtons(chartId, chartType, count, tableName, result, expandChartDivId);
    ////$('#' + chartId + '_toolBox').find('li[title="Data on Flip"]').hide();
    ////$('#' + chartId + '_toolBox').find('li[title="Chart Types"]').hide();
    handleEchartsResize(chartId, myChart);

    echartHandleDragAndDropEvent();
    showEchartsToolEvent(myChart, chartId, option, chartType);
    //$('#homeChartParentDiv'+count).css("overflow-x","auto","!important");
}
var numberFormatterMK = function (params) {
    let value = params.value;
    let absValue = Math.abs(value);
    let suffix = '';
    if (value < 0) {
        suffix = "-";
    }
    if (absValue >= 1000000000) {
        return suffix + (absValue / 1000000000).toFixed(1) + 'B'; // Billions
    } else if (absValue >= 1000000) {
        return suffix + (absValue / 1000000).toFixed(1) + 'M';
    } else if (absValue >= 1000) {
        return suffix + (absValue / 1000).toFixed(1) + 'K';
    } else {
        return suffix + absValue;
    }
}

function handleEchartsResize(chartId) {
    $("#" + chartId).parent().resizable();
    $("#" + chartId).parent().unbind('resize').resize(function (event, ui) {
        var dom = document.getElementById(chartId);
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var target = event.currentTarget;
        var id = target['id'];
        //var type = event.currentTarget.firstChild.data[0].type;
        var parentId = $("#" + id).parent().parent().parent().parent().attr("id");
        //var parentId = $("#" + id).parent().parent().attr("id");
        $("#" + chartId).css("width", "100%", "!important");
        $("#" + chartId).css("height", "100%", "!important");
        $("#" + parentId).attr("class", "homeChartWrapDiv resizableChartDiv chartViewAreaClass newClassResize");
        var width = ui.size.width;
        var height = ui.size.height;
        $("#" + chartId).parent().css("width", width + "px", "!important");
        $("#" + chartId).parent().css("height", height + "px", "!important");
        myChart.resize({
            width: width,
            height: height
        });
        $("#" + chartId + "_toolBox").css("height", height - 10 + "px", "!important")
        $("#" + chartId + "_legends").css("width", width, "!important");
        $('#' + chartId + "_resizeData").val(width + ":" + height);
        var count = $('#' + chartId + '_count').val();
        $('#visionVisualizeChartHome' + count).css("width", width + "px", "!important");
        $('#visionVisualizeChartHome' + count).css("height", height + "px", "!important");
    });

    $("#" + chartId).parent().resizable({// after resize function
        minHeight: 220,
        minWidth: 220,
        /*maxHeight: 400,
         maxWidth: 600*/
    });
}


function showEchartsToolEvent(myChart, chartId, option, chartType, expandFlag) {
    // Create the tooltip if not already created
    let tooltip = document.querySelector(`#${chartId} .tooltip-echarts`);
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip-echarts';
        tooltip.style.display = 'none';  // Initially hidden
        document.getElementById(chartId).appendChild(tooltip);
    }

    myChart.getZr().on('mousemove', function (params) {
        // Get the grid boundaries
        const gridRect = myChart.getModel().getComponent('grid', 0).coordinateSystem.getRect();
        const gridLeft = gridRect.x;
        const gridRight = gridRect.x + gridRect.width;
        const gridTop = gridRect.y;
        const gridBottom = gridRect.y + gridRect.height;

        const pointInGrid = myChart.convertFromPixel({gridIndex: 0}, [params.offsetX, params.offsetY]);

        // Tooltip for Y-axis proximity (slightly to the left of Y-axis)
        if (params.offsetX - gridLeft < 0) {  // Check if near the Y-axis
            var yIndex = Math.round(pointInGrid[1]);
            var yValue = geoChartFormatter(pointInGrid[1]);

            if (chartType === 'stackedBarChart') {
                yValue = option.yAxis.data[yIndex]; // Use y-axis data for stacked bar charts
            }
            if (yValue !== undefined) {
                //console.log(`Y-axis tooltip triggered: ${yValue}`);
                // Show tooltip for Y-axis label (shifted slightly to the left of Y-axis)
                showTooltip(tooltip, gridLeft, params.event.offsetY, yValue, 'y');
            }
        }
        // Tooltip for X-axis proximity (slightly below the X-axis)
        else if (params.offsetY - gridBottom >= 0 && Math.abs(params.offsetY - gridBottom) > 10 && Math.abs(params.offsetY - gridBottom) < 25) {  // Check if near the X-axis
            //console.log('X-axis tooltip triggered');
            var xValue = geoChartFormatter(pointInGrid[0]);
            var xIndex = Math.round(pointInGrid[0]);

            if (chartType != null && chartType != undefined && chartType != "" && chartType !== 'stackedBarChart') {
                option.xAxis.data = option.xAxis.data || option.xAxis[0].data || {};
                if (xIndex >= 0 && xIndex < option.xAxis.data.length) {
                    xValue = option.xAxis.data[xIndex];
                }
            }

            if (xValue !== undefined) {
                //console.log(`X-axis tooltip value: ${xValue}`);
                // Show tooltip for X-axis label (shifted slightly below X-axis)
                showTooltip(tooltip, params.event.offsetX, gridBottom - 50, xValue, 'x');
            }
        }
        // Hide tooltip when outside axis proximity
        else {
            tooltip.style.display = 'none'; // Hide tooltip when not hovering over axes
        }
    });

    // Function to show the tooltip with content
    function showTooltip(tooltip, left, top, content, axisType) {
        const xOffset = axisType === 'x' ? 0 : -30;  // Horizontal offset for Y-axis (left)
        const yOffset = axisType === 'y' ? 0 : 20;   // Vertical offset for X-axis (down)

        tooltip.style.position = "absolute";
        tooltip.style.left = `${left + xOffset}px`;  // Apply horizontal offset for Y-axis
        tooltip.style.top = `${top + yOffset}px`;    // Apply vertical offset for X-axis
        tooltip.style.backgroundColor = "#74c0fc";
        tooltip.style.color = "white";
        tooltip.style.fontSize = "14px";
        tooltip.style.padding = "10px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        tooltip.style.maxWidth = "200px";
        tooltip.style.wordWrap = "break-word";
        tooltip.innerHTML = `${content}`;
        tooltip.style.display = 'block';  // Make sure tooltip is visible
    }
}

function echartHandleDragAndDropEvent() {
    $(".homeChartWrapDiv").draggable({
        //revert: true,
        refreshPositions: true,
        cursor: 'move',
        zindex: false,
        opacity: false,
        start: function (event, ui) {
            var charts = $(".homeChartWrapDiv");
            var zindexMaxVal = 3;
            var mainChartDivId = ui.helper[0]['id'];
            $.each(charts, function (i, val) {
                var thisChartMainId = $(this).attr('id');
                if (mainChartDivId != thisChartMainId) {
                    if ($(this).hasClass(".newClassResize")) {
                        $(this).css("z-index", "5", "!important");
                    } else {
                        $(this).css("z-index", "3", "!important");
                    }
                }


            })
            var z_indexChart = $("#" + mainChartDivId).css("z-index");
            if (z_indexChart > 3 && z_indexChart <= 5) {
                z_indexChart = z_indexChart + 1;
                $(this).css("z-index", "" + z_indexChart + "", "!important");
            } else {
                $(this).css("z-index", "5", "!important");
            }

        },
        stop: function (event, ui) {
            ui.helper.removeClass("draggableTable");
            var mainChartDivId = ui.helper[0]['id'];

        }
    });


    //$("#visualizechartId").droppable({
    $(".homeChartWrapDiv").droppable({
        //                $("#" + chartId).droppable({
        revert: "invalid",
        refreshPositions: true,
        cursor: 'move',
        accept: '.homeChartWrapDiv',
        drop: function (event, ui) {

            var $draggable = ui.draggable;
            var draggableId = ui.draggable.attr("id");
            var droppableId = $(this).attr("id");


            if (draggableId != null && droppableId != undefined && droppableId != null && droppableId != undefined) {
                updateSeqNoAfterSwap(draggableId, droppableId);
            }
        }
    });
}

function geoChartFormatter(value) {
    if (value >= 1000000000) {
        return (value / 1000000000).toFixed(1) + 'B'; // Billions
    } else if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M'; // Millions
    } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'K'; // Thousands
    } else {
        return value; // Less than 1000
    }
}
function changeGraphWithIcon(chartId, chartType, layout, data, createcount) {
    const triggerId = "modifyIcon_" + chartId;
    const popoverContentId = "popoverContent_" + chartId;

    $("#" + popoverContentId).remove();
    $("#cornerIconId").remove();
    const result = `
        <div id="${popoverContentId}" class="homepageChartTypePopup">
            <img data-type='bar' src='images/Bar.svg' title='Bar chart' width='15px;'>
            <img data-type='column' src='images/Column.svg' title='Column chart' width='15px;'>
            <img data-type='lines'src='images/Line.svg' title='Line chart' width='15px;'>
            <img data-type='scatter' src='images/Scatter.svg' title='Scatter chart' width='15px;'>
            <img data-type='funnel' src='images/Funnel.svg' title='Funnel chart' width='15px;'>
            <img data-type='scatterpolar' src='images/Redar-Chart.svg' class='visualDarkMode' title='Radar chart' width='15px;'>
            <img data-type='waterfall' src='images/Waterfall.svg' class='visualDarkMode' title='Waterfall chart' width='15px;'>
            <img data-type='stackedAreaChart' src='images/StackedAreaChart.png' class='visualDarkMode' title='Stacked Area chart' width='15px;'>
            <img data-type='gradStackAreaChart' src='images/GradientStackedAreaChart.png' class='visualDarkMode' title='Gradient Stacked Area chart' width='15px;'>
        </div>`;


    $("body").append(`
        <div id="cornerIconId">
            ${result}
        </div>
    `);
    $("#cornerIconId").jqxPopover("destroy");
    $("#cornerIconId").jqxPopover({
        position: 'bottom',
        width: 180,
        height: 'auto',
        title: 'Graph Types',
        showCloseButton: true,
        selector: "#" + triggerId,
    });

    $("#cornerIconId").jqxPopover("open");
    $("#cornerIconId").addClass("timeLineCharts");
    $("#cornerIconId img").off("click").on("click", function () {
        const selectedType = $(this).data("type");

        var rolearr = $("#updatesChartIdOne").attr("rolelist");
        var tathrs = $("#updatesChartIdOne").attr("tatHrsList");
        var tatMin = $("#updatesChartIdOne").attr("tatMinsList");
        aiLensDashBoardCreation(selectedType, 'updatesChartIdOne', rolearr.split(","), tathrs.split(","), 'TAT(in Hours)');
        aiLensDashBoardCreation(selectedType, 'updatesChartIdTwo', rolearr.split(","), tatMin.split(","), 'TAT(in Minutes)');
        //aiLensDashBoardCreation(selectedType, 'updatesChartIdThree', rolearr.split(","), tathrs.split(","), tatMin(","), 'TAT(in Hours and Minutes)');
        //aiLensDashBoardCreation(selectedType, 'updatesChartIdThree', rolearr.split(","), tathrs.split(","), tatMin.split(","), 'TAT(in Hours and Minutes)');
        //getDashboard(selectedType, chartId, chartType, createcount);
    });

}

//New chart download with selection start
function getAllImagesInPdf() {
    if ($("#dialog1").length === 0) {
        $("body").append('<div id="dialog1"></div>');
    }

    const dialogContent = `
        <div style="height:520px; font-family:'Segoe UI', Arial, sans-serif; display:flex; flex-direction:column;">
            <!-- Header with Select All -->
            <div style="padding:10px 14px; border-bottom:1px solid #ddd; display:flex; align-items:center; gap:8px;">
                <input type="checkbox" id="selectAllCharts">
                <label for="selectAllCharts" style="font-weight:600; color:#333;">Select All</label>
            </div>
    
            <!-- Error Message Area -->
        <div id="chartErrorMsg"
             style="display:none; color:#c00; font-weight:600; padding:8px 14px; border-bottom:1px solid #f2d6d6;
                    background:#fff4f4;">
            Please select at least one chart.
        </div>

            <!-- Chart Grid -->
            <div id="chartGridContainer"
                 style="flex:1; overflow-y:auto; padding:14px; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
                        gap:18px; background:#fff;">
            </div>
        </div>
    `;

    $("#dialog1").html(dialogContent);
    const $grid = $("#chartGridContainer");
    $grid.empty();

    const chartElements = $(".chartMain").filter(function () {
        return $(this).attr("id");
    });

    if (chartElements.length === 0) {
        $grid.html("<p style='color:#999; text-align:center; padding:20px;'>No charts found on this page.</p>");
        openDialog();
        return;
    }

    const charts = [];
    chartElements.each(function (index) {
        const $el = $(this);
        const id = $el.attr("id");
        let title = $el.find(".chart-title, .chartTitle, .title, .chartHeader").first().text().trim();
        if (!title)
            title = `Chart ${index + 1}`;
        charts.push({id, title, index});
    });

    charts.forEach(chart => {
        const chartCard = `
            <div class="chart-card"
                 style="border:1px solid #ddd; border-radius:8px; background:#fafafa; padding:10px; display:flex; flex-direction:column; align-items:center; gap:8px;">
                <label style="display:flex; align-items:center; gap:6px; font-size:13px; color:#333;">
                    <input type="checkbox" class="chartCheckbox" value="${chart.id}"> ${chart.title}
                </label>
                <div class="preview-image-container" data-chart-id="${chart.id}"
                     style="width:100%; height:150px; display:flex; align-items:center; justify-content:center;
                            background:#fff; border:1px dashed #ccc; border-radius:6px;">
                    <span style="color:#999; font-style:italic;">Loading...</span>
                </div>
            </div>
        `;
        $grid.append(chartCard);

        generateChartPreview(chart.id)
                .then(imgSrc => {
                    if (imgSrc) {
                        $(`.preview-image-container[data-chart-id="${chart.id}"]`).html(
                                `<img src="${imgSrc}" style="max-width:100%; max-height:140px; border-radius:4px;">`
                                );
                    } else {
                        $(`.preview-image-container[data-chart-id="${chart.id}"]`).html(
                                `<span style="color:#c66;">Failed to load</span>`
                                );
                    }
                })
                .catch(() => {
                    $(`.preview-image-container[data-chart-id="${chart.id}"]`).html(
                            `<span style="color:#c66;">Error</span>`
                            );
                });
    });

    $("#dialog1").off("change", "#selectAllCharts").on("change", "#selectAllCharts", function () {
        $(".chartCheckbox").prop("checked", this.checked);
    });

    $("#dialog1").off("change", ".chartCheckbox").on("change", ".chartCheckbox", function () {
        updateSelectAllState();
    });

    openDialog();
}
function updateSelectAllState() {
    const totalCheckboxes = $("#dialog1 .chartCheckbox").length;
    const checkedCheckboxes = $("#dialog1 .chartCheckbox:checked").length;
    const $selectAll = $("#selectAllCharts");

    if (checkedCheckboxes === 0) {
        $selectAll.prop("checked", false);
        $selectAll.prop("indeterminate", false);
    } else if (checkedCheckboxes === totalCheckboxes) {
        $selectAll.prop("checked", true);
        $selectAll.prop("indeterminate", false);
    } else {
        $selectAll.prop("checked", false);
        $selectAll.prop("indeterminate", true);
    }
}


function openDialog() {
    if ($("#dialog1").hasClass("ui-dialog-content")) {
        $("#dialog1").dialog("destroy");
    }
    $("#dialog1").dialog({
        title: "Select Charts to Download as PDF",
        width: 920,
        height: 550,
        modal: true,
        resizable: true,
        buttons: [
            {
                text: "Cancel",
                click: function () {
                    $(this).dialog("close");
                }
            },
            {
                text: "Download Selected",
                class: "ui-button-primary",
                click: async function () {
                    const selectedIds = $("#dialog1 .chartCheckbox:checked").map((_, el) => el.value).get();
                    if (selectedIds.length === 0) {
                        $("#chartErrorMsg").show(); 
                        return;
                    } else {
                        $("#chartErrorMsg").hide(); 
                    }

                    $(this).dialog("close");
                    await downloadChartsAsPdf(selectedIds);
                }
            }
        ],
        open: function () {
             $('#dialog1').css('overflow', 'hidden');
            $(".ui-dialog-buttonpane button:contains('Download Selected')")
                    .css({"background": "#0078d7", "color": "#fff", "border": "none", "border-radius": "4px"});
        },
        close: function () {
            $("#dialog1").off("change", "#selectAllCharts");
            $("#dialog1").off("change", ".chartCheckbox");
            $(this).empty();
        }
    });
}

async function generateChartPreview(chartId) {
    const $chart = $("#" + chartId);
    if (!$chart.length)
        return null;

    try {
        if ($chart.hasClass("js-plotly-plot")) {
            const graphDiv = document.getElementById(chartId);
            return await Plotly.toImage(graphDiv, {format: 'png', height: 400, width: 650});
        } else {
            const dom = document.getElementById(chartId);
            const myChart = echarts.getInstanceByDom(dom);
            if (myChart) {
                return myChart.getDataURL({
                    type: 'png',
                    pixelRatio: 2,
                    backgroundColor: '#ffffff'
                });
            }
        }
    } catch (err) {
        console.error("generateChartPreview error:", chartId, err);
    }
    return null;
}

async function downloadChartsAsPdf(chartIds) {
    const allImageContent = {};
    const $form = $("#pdfChartForm");

    for (let i = 0; i < chartIds.length; i++) {
        const id = chartIds[i];
        try {
            const imgSrc = await generateChartPreview(id);
            if (imgSrc) {
                allImageContent[(i + 1).toString()] = imgSrc;
            } else {
                console.warn("Skipped chart (no image):", id);
            }
        } catch (err) {
            console.error("Failed to capture chart:", id, err);
        }
    }

    if (Object.keys(allImageContent).length === 0) {
        alert("No charts could be captured. Please try again.");
        return;
    }

    $form.find("#chartImageObj").val(JSON.stringify(allImageContent));
    $form.find("#chartImageperrow").val("1");
    if (!$form.find("#forceSingleChartPerPage").length) {
        $form.append('<input type="hidden" id="forceSingleChartPerPage" name="forceSingleChartPerPage" value="true">');
    } else {
        $form.find("#forceSingleChartPerPage").val("true");
    }

    const csrfToken = $('meta[name="_csrf"]').attr('content');
    $form.find("input[name='_csrf']").remove();
    if (csrfToken) {
        $form.append(`<input type="hidden" name="_csrf" value="${csrfToken}">`);
    }

    $form.trigger("submit");
}
//New chart download with selection stop