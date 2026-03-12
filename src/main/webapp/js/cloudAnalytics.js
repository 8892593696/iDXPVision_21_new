/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var seqArray = [];
var seqObj = {};
var previousDiv;
var windowWidth = $(window).width();
var chartFilterItems = {};
var cockpitViewErrorFlag = false;
var selectedTitle = "";
var selectedTitleValue = "";
function getChartsData(result, selectedGridId)
{
    if (result != null)
    {
        var dataObj = result['chartList'];
        seqArray = []; //cloud charts
        seqObj = {};
        seqObj["TAB_ID"] = selectedGridId;
        $("#tabChartsId").val(selectedGridId);
        $("#tabComponentId").val(selectedGridId);
        $("#startIndex").val(result['startIndex']);
        $("#endIndex").val(result['endIndex']);
        $("#pageSize").val(result['pageSize']);
        $("#totalCount").val(result['totalCount']);
        $("#scrollFlag").val(result['scrollFlag']);
        $("#visionAnalyticCheckBoxData").empty();
        $("#visionAnalyticCheckBoxData").html(result['checkBoxStr']);
        $("#" + selectedGridId).empty();
        $("#" + selectedGridId + " div").remove();
        if (dataObj != null) {
            var jqwidgetFlag = dataObj[0]['36'];
            if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
            {
                getJqwidgetChart(dataObj[0], selectedGridId, 0, dataObj);
            } else
            {
                getChartByChart(dataObj[0], selectedGridId, 0, dataObj);
            }
        }
    }
}
function chartsData(tabId, selectedGridId, scrollFlagName)
{
    cockpitViewErrorFlag = false;
    seqArray = [];
    seqObj = {};
    seqObj["TAB_ID"] = tabId;
    $("#" + tabId).empty();
    $("#tabChartsId").val(tabId);
    $("#tabComponentId").val(selectedGridId);
    $("#" + tabId + "div").remove();
    try {
        $("#" + previousDiv).empty();
    } catch (e) {
    }
    previousDiv = tabId;
    $("#wait").css("display", "block");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        url: "dataAnalyticsCharts",
        data: {
            'tabComponentId': selectedGridId,
            'scrollFlagName': scrollFlagName
        },
        success: function (response) {
            if (response != null)
            {
                var result = JSON.parse(response);
                var dataObj = result['chartList'];
                $("#startIndex").val(result['startIndex']);
                $("#endIndex").val(result['endIndex']);
                $("#pageSize").val(result['pageSize']);
                $("#totalCount").val(result['totalCount']);
                $("#scrollFlag").val(result['scrollFlag']);
                $("#visionAnalyticCheckBoxData").empty();
                $("#visionAnalyticCheckBoxData").html(result['checkBoxStr']);
                $("#" + tabId).empty();
                $("#" + tabId + " div").remove();
                if (dataObj != null) {
                    var jqwidgetFlag = dataObj[0]['36'];
                    if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                    {
                        getJqwidgetChart(dataObj[0], tabId, 0, dataObj);
                    } else
                    {
                        getChartByChart(dataObj[0], tabId, 0, dataObj);
                    }
                }
            } else {
                $("#wait").css("display", "none");
            }
        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}

function getChartByChart(chartData, tabId, i, chartDataList)
{
//    seqObj["TAB_ID"] = tabId;
    $("#wait").css("display", "block");
    var filterItem;
    if (chartFilterItems != null && !jQuery.isEmptyObject(chartFilterItems))
    {
        filterItem = JSON.parse(chartFilterItems);
    }
    i++;
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "cloudAnalytics",
        cache: false,
        data: {
            'chartData': JSON.stringify(chartData),
            'chartFilterItems': JSON.stringify(filterItem)
        },
        success: function (response) {

            $("#wait").css("display", "none");
            if (response != null && !jQuery.isEmptyObject(response)) {
                try {
                    var resultData = response;
                    if (resultData != null)
                    {
                        var result = resultData[0];
                        if (result != null) {
                            var ErrorMsg = result['ErrorMsg'];
                            if (ErrorMsg != null && ErrorMsg != '' && ErrorMsg != undefined)
                            {
                                var dialogSplitMessage = dialogSplitIconText(ErrorMsg, "Y");
                                if (!cockpitViewErrorFlag) {
                                    showDialog(dialogSplitMessage);
                                    return;
                                } else if (cockpitViewErrorFlag)
                                {
                                    return;
                                }
                            }
                            var divid = result['divId'];
                            var seqNo = result['seqNo'];
                            var chartId = result['chartId'];
                            // var tabId = result['tabId'];
                            //-----------------------------
                            var insertDivBefore = 0;
                            for (var j = 0; j < seqArray.length; j++) {
                                if (parseInt(seqNo) < seqArray[j]) {
                                    insertDivBefore = seqArray[j];
                                    break;
                                }
                            }
                            if (insertDivBefore == 0) {
                                if (seqObj["TAB_ID"] == tabId) {
                                    if ($('#' + tabId + "_" + chartId + "_" + seqNo).length) {
                                    } else {
                                        $("#" + tabId).append("<div id='" + tabId + "_" + chartId + "_" + seqNo + "'>" + divid + "</div>");
                                        seqArray.push(parseInt(seqNo));
                                        seqObj[parseInt(seqNo)] = tabId + "_" + chartId + "_" + seqNo;
                                    }
                                }
                            } else {
                                if (seqObj["TAB_ID"] == tabId) {
                                    if ($('#' + tabId + "_" + chartId + "_" + seqNo).length) {
                                    } else {
                                        $("<div id='" + tabId + "_" + chartId + "_" + seqNo + "'>" + divid + "</div>").insertBefore($("#" + seqObj[insertDivBefore]));
                                        seqArray.push(parseInt(seqNo));
                                        seqObj[parseInt(seqNo)] = tabId + "_" + chartId + "_" + seqNo;
                                    }
                                }
                            }
                            seqArray = seqArray.sort(function (a, b) {
                                return a - b;
                            });
                            //-------------------
                            var dataArray = result['dataArray'];
                            var options = result['options'];
                            var objInit = result['objInit'];
                            var sizeOfChart = result['sizeOfChart'];
                            var description = result['description'];
                            var chartInitParamObj = result['chartInitParamObj'];
                            var labelChartArr = result['labelChartArr'];
                            var calenderFlag = "";
                            var orgChartFlag = "";
                            if (chartInitParamObj != null)
                            {
                                calenderFlag = chartInitParamObj['uuu_CalenderFlag'];
                                orgChartFlag = chartInitParamObj['uuu_orgChartFlag'];
                            }
                            $("#" + chartId + "_Data").val(dataArray);
                            $("#" + chartId + "_options").val(JSON.stringify(options));
                            $("#" + chartId + "_description").val(JSON.stringify(description));
                            $("#" + chartId + "_chartInitParams").val(JSON.stringify(chartInitParamObj));
                            var dataObjArr = {};
                            var dataObj = $("#" + chartId + "_Data").val();
                            if (dataObj != null && dataObj != '' && dataObj != undefined)
                            {
                                dataObjArr = JSON.parse(dataObj);
                            }
                            if (sizeOfChart != null && sizeOfChart != '' && sizeOfChart != undefined) {
                                $("#" + chartId + "_Chart").css("width", "" + sizeOfChart + "%", "important");
                            } else if (windowWidth > 1024)
                            {
                                $("#" + chartId + "_Chart").css('width', '32%');
                                options['width'] = '90%';
                            } else if (windowWidth < 1024 && windowWidth > 700)
                            {
                                $("#" + chartId + "_Chart").css('width', '49%');
                                options['width'] = '90%';
                            } else if (windowWidth < 699 && windowWidth > 320)
                            {
                                $("#" + chartId + "_Chart").css('width', '98%');
                                options['width'] = '90%';
                            }
                            var data = [];
                            if (dataObjArr != null && dataObjArr.length > 0)
                            {
                                if (calenderFlag != null && calenderFlag != '' && calenderFlag == "Y") {
                                    try {
                                        var dataObjStr = calenderChartData(dataObjArr);
                                        data = google.visualization.arrayToDataTable(dataObjStr);
                                    } catch (e) {
                                    }
                                } else {
                                    data = google.visualization.arrayToDataTable(dataObjArr);
                                }
                                var objInit1 = eval(objInit);
                                var chart = objInit1;
                                if (orgChartFlag != null && orgChartFlag != '' && orgChartFlag != undefined
                                        && orgChartFlag == "Y")
                                {
                                    $("#" + chartId + "_Chart").addClass('visionOrgCharts');
//                                   $("#" + chartId + "_Chart").css('height', options['height'], "important");
                                    chart.draw(data, options);
                                    var dataValue = data.getValue(0, 0);
                                    var colorValue = $("#color_" + dataValue).val();
                                    if (colorValue != null && colorValue != '' && colorValue != undefined)
                                    {
                                        data.setRowProperty(0, 'style', 'background-color:' + colorValue + ';background-image:none');
                                        chart.draw(data, options);
                                    }
                                } else
                                {
                                    if (labelChartArr != null && !jQuery.isEmptyObject(labelChartArr))
                                    {
                                        var view = new google.visualization.DataView(data);
                                        view.setColumns(labelChartArr);
                                        chart.draw(view, options);
                                    } else
                                    {
                                        chart.draw(data, options);
                                    }
//                                    chart.draw(data, options);
                                }
                                var chartType = result['chartType'];
                                var replacChartType = result['replacChartType'];
                                if (replacChartType != null && replacChartType != '' && replacChartType != undefined)
                                {
                                    $("#" + chartId + "_chartType").val(replacChartType);
                                } else
                                {
                                    $("#" + chartId + "_chartType").val(chartType);
                                }
                                var tabGridId = result['tabGridId'];
                                if (chartType != null && chartType != '' && chartType != undefined)
                                {
                                    $("#" + chartId + "_types").val(chartType);
                                }

                                if (orgChartFlag != null && orgChartFlag != '' && orgChartFlag != undefined
                                        && orgChartFlag == "Y")
                                {
                                    $("#" + chartId).on("click", function (event) {
                                        var target = event.target;
                                        var href = target.href;
                                        if (chart.getSelection().length > 0) {
                                            if (!(href != null && href != '' && href != undefined) ||
                                                    (href != null && href != '' && href != undefined && href.indexOf("images") > -1))
                                            {
                                                chartStartTabLoader();
                                                orgChart(chart, data, tabGridId, chartId, options, event, this);
                                            } else
                                            {
                                                navigateToOrgChart(chart, data, tabGridId, chartId);
                                            }
                                        }
                                    });
                                } else
                                {
                                    google.visualization.events.addListener(chart, 'select', function () {
                                        selectHandler(chart, data, chartId, tabGridId);
                                    });
                                }
                            } else
                            {
                                if (!(options['width'].indexOf("%") > -1))
                                {
                                    options['width'] = options['width'] + "px";
                                }
                                $("#" + chartId + "_Chart").html("<div class ='analyticChartNoDataClass' style ='width:" + options['width'] + ";'><p>" + options['title'] + "</p><span class='analyticsChartNoDataText'>No Data Found</span></div>");
                            }
                        }
                        $("#wait").css("display", "none");

                        if (i < chartDataList.length) {
                            var jqwidgetFlag = chartDataList[i]['36'];
                            if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                            {
                                getJqwidgetChart(chartDataList[i], tabId, i, chartDataList);
                            } else
                            {
                                getChartByChart(chartDataList[i], tabId, i, chartDataList);
                            }
//                            getChartByChart(chartDataList[i], tabId, i, chartDataList);
                        }

                    }
                } catch (e)
                {
                    if (i < chartDataList.length) {
                        var jqwidgetFlag = chartDataList[i]['36'];
                        if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                        {
                            getJqwidgetChart(chartDataList[i], tabId, i, chartDataList);
                        } else
                        {
                            getChartByChart(chartDataList[i], tabId, i, chartDataList);
                        }
//                        getChartByChart(chartDataList[i], tabId, i, chartDataList);
                    }
                    $("#wait").css("display", "none");
                }
            }

        },
        error: function (e) {
            if (i < chartDataList.length) {
                var jqwidgetFlag = chartDataList[i]['36'];
                if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                {
                    getJqwidgetChart(chartDataList[i], tabId, i, chartDataList);
                } else
                {
                    getChartByChart(chartDataList[i], tabId, i, chartDataList);
                }
//                getChartByChart(chartDataList[i], tabId, i, chartDataList);
            }
            sessionTimeout(e);
            $("#wait").css("display", "none");
        }

    });
}

function getJqwidgetChart(chartData, tabId, i, chartDataList)
{
//    seqObj["TAB_ID"] = tabId;
    $("#wait").css("display", "block");
    var filterItem;
    if (chartFilterItems != null && !jQuery.isEmptyObject(chartFilterItems))
    {
        filterItem = JSON.parse(chartFilterItems);
    }
    i++;
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "cloudJqwidgetAnalyticCharts",
        cache: false,
        data: {
            'chartData': JSON.stringify(chartData),
            'chartFilterItems': JSON.stringify(filterItem)
        },
        success: function (response) {
            $("#wait").css("display", "none");
            if (response != null && !jQuery.isEmptyObject(response)) {
                try {
                    var resultData = response;
                    if (resultData != null)
                    {
                        var result = resultData;
                        if (result != null) {
                            var chartTypesObj = result['chartTypesObj'];
                            var chartsObj = result['chartsObj'];
                            var divid = chartsObj['divId'];
                            var seqNo = chartsObj['seqNo'];
                            var chartId = chartsObj['chartId'];
                            var sizeOfChart = chartsObj['sizeOfChart'];
                            var height = chartsObj['height'];
                            var width = chartsObj['width'];
                            var tabComponentId = chartsObj['tabGridId'];
                            // var tabId = result['tabId'];
                            //-----------------------------
                            var insertDivBefore = 0;
                            for (var j = 0; j < seqArray.length; j++) {
                                if (parseInt(seqNo) < seqArray[j]) {
                                    insertDivBefore = seqArray[j];
                                    break;
                                }
                            }
                            if (insertDivBefore == 0) {
                                if (seqObj["TAB_ID"] == tabId) {
                                    if ($('#' + tabId + "_" + chartId + "_" + seqNo).length) {
                                    } else {
                                        $("#" + tabId).append("<div id='" + tabId + "_" + chartId + "_" + seqNo + "'>" + divid + "</div>");
                                        seqArray.push(parseInt(seqNo));
                                        seqObj[parseInt(seqNo)] = tabId + "_" + chartId + "_" + seqNo;
                                    }
                                }
                            } else {
                                if (seqObj["TAB_ID"] == tabId) {
                                    if ($('#' + tabId + "_" + chartId + "_" + seqNo).length) {
                                    } else {
                                        $("<div id='" + tabId + "_" + chartId + "_" + seqNo + "'>" + divid + "</div>").insertBefore($("#" + seqObj[insertDivBefore]));
                                        seqArray.push(parseInt(seqNo));
                                        seqObj[parseInt(seqNo)] = tabId + "_" + chartId + "_" + seqNo;
                                    }
                                }
                            }
                            seqArray = seqArray.sort(function (a, b) {
                                return a - b;
                            });

                            //----------------------------------------

                            var finalChartObj = {};
                            finalChartObj = result['chartTypesObj'];
                            var chartDataObj = result['chartDataObj'];
                            finalChartObj.source = chartDataObj['data'];
                            var settings = {};
                            settings = finalChartObj;
                            $("#" + chartId + "_chart").css("width", "" + sizeOfChart + "", "important");
                            $("#" + chartId).css("width", "" + width + "", "important");
                            $("#" + chartId).css("height", "" + height + "", "important");
                            $("#" + chartId).jqxChart(settings);
                            $("#" + chartId).on('click', function (e) //click event
                            {
                                if (e.args != null) {
                                    selectJqwidgetHandler(e.args.serie.dataField, e.args.elementValue, chartId, tabComponentId);
                                }
                            });


                        }

                        if (i < chartDataList.length) {
                            var jqwidgetFlag = chartDataList[i]['36'];
                            if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                            {
                                getJqwidgetChart(chartDataList[i], tabId, i, chartDataList);
                            } else
                            {
                                getChartByChart(chartDataList[i], tabId, i, chartDataList);
                            }
                        }
                    }
                } catch (e)
                {
                    if (i < chartDataList.length) {
                        var jqwidgetFlag = chartDataList[i]['36'];
                        if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                        {
                            getJqwidgetChart(chartDataList[i], tabId, i, chartDataList);
                        } else
                        {
                            getChartByChart(chartDataList[i], tabId, i, chartDataList);
                        }
                    }
                    $("#wait").css("display", "none");
                }
            }

        },
        error: function (e) {
            if (i < chartDataList.length) {
                var jqwidgetFlag = chartDataList[i]['36'];
                if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                {
                    getJqwidgetChart(chartDataList[i], tabId, i, chartDataList);
                } else
                {
                    getChartByChart(chartDataList[i], tabId, i, chartDataList);
                }
            }
            sessionTimeout(e);
            $("#wait").css("display", "none");
        }

    });
}

function analyticsTypeDropdown(chartVal, tabChartId, chartId)
{
    console.log("iam in analyticsTypeDropdown");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        url: "cloudAnalyticDropdown",
        data: {
            'tabComponentId': chartId,
            'tabId': tabChartId,
            'chartTypeId': chartVal
        },
        success: function (response) {
            if (response != null)
            {
                var result = JSON.parse(response);
                var dataObj = result['chartList'];
                for (var i = 0; i < dataObj.length; i++)
                {
                    $("#wait").css("display", "block");
                    var tabId = $("#tabChartsId").val();
                    var chartData = dataObj[i];
                    var paramArrData = [];
                    var paramArray = $("#" + chartId + "_filterVal").val();
                    if (paramArray != null && paramArray != '' && paramArray != undefined)
                    {
                        paramArrData = JSON.parse(paramArray);
                    }
//                    getChartDropdownData(chartData, tabId, chartVal, paramArrData);
                    var jqwidgetFlag = chartData['36'];
                    if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                    {
                        getJqwidgetChartDropdownData(chartData, tabId, chartVal, paramArrData);//jqwidgets
                    } else {
                        getChartDropdownData(chartData, tabId, chartVal, paramArrData);
                    }
                }
            }
        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}


function getChartDropdownData(chartData, tabId, chartVal, paramArray)
{
    var filterItem;
    if (chartFilterItems != null && !jQuery.isEmptyObject(chartFilterItems))
    {
        filterItem = JSON.parse(chartFilterItems);
    }
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "cloudAnalytics",
        async: true,
        cache: false,
        data: {
            'chartData': JSON.stringify(chartData),
            'ddwFlag': 'Y',
            'chartVal': chartVal,
            'paramArray': JSON.stringify(paramArray),
            'chartFilterItems': JSON.stringify(filterItem)
        },
        success: function (response) {
            $("#wait").css("display", "none");
            if (response != null && response != '' && response != undefined) {
                var resultData = JSON.parse(response);
                if (resultData != null)
                {
                    var result = resultData[0];
                    if (result != null) {
                        var divid = result['divId'];
                        var chartId = result['chartId'];
                        var seqNo = result['seqNo'];
                        var paramArrData = [];
                        var paramArr = $("#" + chartId + "_filterVal").val();
                        if (paramArr != null && paramArr != '' && paramArr != undefined)
                        {
                            paramArrData = JSON.parse(paramArr);
                        }
                        $("#" + chartId + "_Chart").empty();
                        $("#" + chartId + "_Chart").html(divid);
                        var dataArray = result['dataArray'];
                        var options = result['options'];
                        var objInit = result['objInit'];
                        $("#" + chartId + "_options").val(JSON.stringify(options));
                        var sizeOfChart = result['sizeOfChart'];
                        var chartInitParamObj = result['chartInitParamObj'];
                        var calenderFlag = "";
                        if (chartInitParamObj != null)
                        {
                            calenderFlag = chartInitParamObj['uuu_CalenderFlag'];
                        }
                        var chartId = result['chartId'];
                        var description = result['description'];
                        $("#" + chartId + "_description").val(JSON.stringify(description));
                        $("#" + chartId + "_chartInitParams").val(JSON.stringify(chartInitParamObj));
                        $("#" + chartId + "_Data").val(dataArray);
                        $("#" + chartId + "_ddwVal").val(chartVal);
                        $("#" + chartId + "_filterVal").val(JSON.stringify(paramArrData));
                        var dataObjArr = {};
                        var dataObj = $("#" + chartId + "_Data").val();
                        var data = [];
                        if (dataObj != null && dataObj != '' && dataObj != undefined)
                        {
                            dataObjArr = JSON.parse(dataObj);
                        }
                        if (sizeOfChart != null && sizeOfChart != '' && sizeOfChart != undefined) {
                            $("#" + chartId + "_Chart").css("width", "" + sizeOfChart + "%", "important");
                        } else if (windowWidth > 1024)
                        {
                            $("#" + chartId + "_Chart").css('width', '32%');
                            options['width'] = '100%';
                        } else if (windowWidth < 1024 && windowWidth > 700)
                        {
                            $("#" + chartId + "_Chart").css('width', '49%');
                            options['width'] = '90%';
                        } else if (windowWidth < 699 && windowWidth > 320)
                        {
                            $("#" + chartId + "_Chart").css('width', '98%');
                            options['width'] = '90%';
                        }
                        if (dataObjArr != null && dataObjArr.length > 0) {
                            if (calenderFlag != null && calenderFlag != '' && calenderFlag == "Y") {
                                try {
                                    var dataObjStr = calenderChartData(dataObjArr);
                                    data = google.visualization.arrayToDataTable(dataObjStr);
                                } catch (e) {
                                }
                            } else {
                                data = google.visualization.arrayToDataTable(dataObjArr);
                            }
                            var objInit1 = eval(objInit);
                            var chart = objInit1;
                            chart.draw(data, options);
                            $("#" + chartId + "_types").val(chartVal);
                            var replacChartType = result['replacChartType'];
                            if (replacChartType != null && replacChartType != '' && replacChartType != undefined)
                            {
                                $("#" + chartId + "_chartType").val(replacChartType);
                            } else
                            {
                                $("#" + chartId + "_chartType").val(chartVal);
                            }
                            var tabGridId = result['tabGridId'];
                            var tabComponentId = $("#" + chartId + '_tabGridId').val();
                            if (tabComponentId != null && tabComponentId != '' && tabComponentId != undefined)
                            {
                                tabGridId = tabComponentId;
                            }
                            google.visualization.events.addListener(chart, 'select', function () {
                                selectHandler(chart, data, chartId, tabGridId);
                            });
                        } else
                        {
                            if (!(options['width'].indexOf("%") > -1))
                            {
                                options['width'] = options['width'] + "px";
                            }
                            $("#" + chartId).html("<div class ='analyticChartNoDataClass'><span class='analyticsChartNoDataText' style ='width:" + options['width'] + ";'>No Data Found</span></div>");
                        }

                    }
                    $("#wait").css("display", "none");
                }
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}


function navigateToChartGrid(chartType, tabGridId, chartId, gridId)
{
    try {
        $("#chartId").remove();
        $("#gridId").remove();
        $("#auditGridId").remove();
        $("#chartParamArray").remove();
    } catch (e) {
    }
    console.log("gridId is:::" + gridId + ":::chartId:::" + chartId);
    $("#submitForm").attr("action", 'cloudGridResults');
    $("#submitForm").attr("method", 'post');
    $("#submitForm").attr("target", '_blank');
    $("#submitForm").append("<input type='hidden' id='chartId' name='chartId' value='" + chartId + "'/>");
    $("#submitForm").append("<input type='hidden' id='gridId' name='gridId' value='" + gridId + "'/>");
    $("#submitForm").append("<input type='hidden' id='auditGridId' name='auditGridId' value='" + gridId + "'/>");
    $("#submitForm").append("<input type='hidden' name='chartParamArray' id='chartParamArray' value=''/>");
    $("#submitForm").append("<input type='hidden' id='headerFlag' name='headerFlag' value='N'/>");
    var chartItems = {};
    var filterItem;
    var paramArray = [];
    if (chartFilterItems != null && !jQuery.isEmptyObject(chartFilterItems))
    {
        filterItem = JSON.parse(chartFilterItems);
        for (var key in filterItem) {
            var paramObj = {};
            console.log(key + " is " + filterItem[key]);
            var value = filterItem[key];
            paramObj.column = key;
            paramObj.operator = "EQUALS";
            paramObj.value = value;
            paramArray.push(paramObj);
        }
        chartItems.chartParamObj = paramArray;
    }
    var paramStr = $("#" + chartId + "_filterVal").val();
    if (paramStr != null && paramStr != '' && paramStr != undefined)
    {
        chartItems.chartParamObj = JSON.parse(paramStr);
    }
    if (paramStr != null && paramStr != '' && paramStr != undefined && paramArray != null)
    {
        var jsonParamArr = JSON.parse(paramStr);
        for (var obj in paramArray)
        {
            jsonParamArr.push(paramArray[obj]);
        }
        chartItems.chartParamObj = jsonParamArr;
    }

    $("#chartParamArray").val(JSON.stringify(chartItems));
    $("#submitForm").submit();
}

function navigateToEditForm(chartType, tabGridId, chartId, gridId)
{
    console.log("gridId is:::" + gridId + ":::chartId:::" + chartId);
    $.ajax({
        type: "post",
        traditional: true,
        // dataType: 'json',
        url: "getAnalyticChartForm",
        cache: false,
        data: {
            'selectedGridId': gridId,
            'chartId': chartId

        },
        success: function (response) {
            if (response != null && response != '') {
                var filterFormObj = JSON.parse(response);
                chartEditForm(filterFormObj, gridId, chartId, tabGridId, chartType);
                $("#importsearchcriteria").html(filterFormObj['importButtonDiv']);
                var jsDateItems = filterFormObj['dateObjArray'];
                for (var i = 0; i < jsDateItems.length; i++) {
                    console.log("tbid:::" + jsDateItems[i].tbid);
                    $("#" + jsDateItems[i].tbid).datepicker(
                            {dateFormat: "dd-mm-yy",
                                changeMonth: true,
                                changeYear: true})
                            .on('changeDate', function (ev) {
                                if (jsDateItems[i].type == 'min') {
                                    console.log($("#" + jsDateItems[i].tbid).datepicker("getDate"));
                                    $("#" + jsDateItems[i].tbid).datepicker(
                                            {
                                                minDate: $("#" + jsDateItems[i].tbid).datepicker("getDate")
                                            });
                                } else {
                                }
                            });
                }
                $("#ui-datepicker-div").addClass("ui-datepickerReports");
                selectedTitle = "";
                selectedTitleValue = "";
                var lovColumns = filterFormObj['lovColumns'];
                for (var j = 0; j < lovColumns.length; j++) {
                    var lovColumnanme = lovColumns[j];
                    $("#" + lovColumnanme + "_dropdown dt a").on('click', function () {
                        $("#" + lovColumnanme + "_dropdown dd ul").slideToggle('fast');
                    });
                    $("#" + lovColumnanme + "_dropdown dd ul li a").on('click', function () {
                        $("#" + lovColumnanme + "_dropdown dd ul").hide();
                    });
                    $(document).bind('click', function (e) {
                        var $clicked = $(e.target);
                        if (!$clicked.parents().hasClass("visionFilterGridDropdown"))
                            $("#" + lovColumnanme + "_dropdown dd ul").hide();
                    });
                    $('#' + lovColumnanme + '_mutliSelect input[type="checkbox"]').on('click', function () {
                        var title = $(this).val() + ",";
                        var titleValue = $(this).attr("data-processvalue") + ",";
                        if ($(this).is(':checked')) {
                            selectedTitle += title;
                            selectedTitleValue += titleValue;
                            $("#" + lovColumnanme + "_LABELS").html(selectedTitle);
                            $("#" + lovColumnanme).val(selectedTitleValue);
                        } else {
                            console.log("Pop::B:" + selectedTitle);
                            console.log("Pop:selectedTitleValue:B:" + selectedTitleValue);
                            if (selectedTitle != null && selectedTitle != '') {
                                selectedTitle = selectedTitle.replace(title, "");
                            }
                            if (selectedTitleValue != null && selectedTitleValue != '') {
                                selectedTitleValue = selectedTitleValue.replace(titleValue, "");
                            }

                            console.log("Pop::A:" + selectedTitle);
                            console.log("Pop:selectedTitleValue:A:" + selectedTitleValue);
                            $("#" + lovColumnanme + "_LABELS").html(selectedTitle);
                            $("#" + lovColumnanme).val(selectedTitleValue);
                        }
                        if (selectedTitleValue != null && selectedTitleValue != ''
                                && selectedTitleValue.indexOf(",") > -1) {
                            var filterGridFlagCount = $("#" + lovColumnanme).attr("data-filtergridflag-count");
                            console.log("filterGridFlagCount:::" + filterGridFlagCount);
                            console.log("filterGridFlagCount:::" + filterGridFlagCount);
                            var operatorId = "operator" + $("#" + lovColumnanme).attr("data-viewid") + filterGridFlagCount;
                            console.log("operator id::" + operatorId);
                            $("#" + operatorId).val("IN");
                        }
                    });
                }
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}
function chartEditForm(filterFormObj, gridId, chartId, tabGridId, chartType)
{
    $("#dialog").html(filterFormObj['result']);
    $("#dialog").dialog({ resizable: false,
        modal: true,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        height: 'auto',
        minHeight: 'auto',
        minWidth: '600',
        maxWidth: 'auto',
        fluid: true,
        buttons: {
            OK: function () {

                $("#wait").css("display", "block");
                updateAnalyticChart(chartId, gridId, tabGridId, chartType);
                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");
            },
            Close: function () {
                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");
            }

        },
        open: function () {
             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(this).closest(".ui-dialog").addClass("visionCommonDialog");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

//updated charts method
function updateAnalyticChart(chartId, gridId, tabGridId, chartType)
{
    var i = 0;
    var paramArray = [];
    $("#" + gridId + "_CHART_FORM_TABLE tbody tr").each(function () {
        var isAllow = false;
        var paramObj = {};
        var colname = $(this).attr('data-colname');
        var dataRange = $(this).attr('data-range');
        var value = $("#" + gridId + "_" + colname).val();
        var minvalue = $("#" + gridId + "_" + colname + "_MIN").val();
        var maxvalue = $("#" + gridId + "_" + colname + "_MAX").val();
        if (value != null && value != '') {
            isAllow = true;
        } else if (dataRange != null && dataRange == 'Y'
                && ((minvalue != null && minvalue != '')
                        || (maxvalue != null && maxvalue != ''))
                ) {
            isAllow = true;
        }
        var type = $("#" + gridId + "_" + colname).attr("type");
        if (type != null && type == 'checkbox') {
            var textval = "N";
            if ($("#" + gridId + "_" + colname).is(':checked')) {
                isAllow = true;
            } else {
                isAllow = false;
            }
        }
        console.log("isAllow::::" + isAllow);
        if (isAllow) {
            paramObj.column = $.trim($(this).attr('data-colname'));
            if (type != null && type == 'checkbox') {
                var textval = "N";
                if ($("#" + gridId + "_" + colname).is(':checked')) {
                    textval = "Y";
                } else {
                    textval = "N";
                }
                paramObj.value = textval;
            } else {
                paramObj.value = $.trim($("#" + gridId + "_" + colname).val());
            }
            paramObj.operator = $("#operator" + gridId + i).val();
            paramObj.symbol = $.trim($("#operator" + gridId + i).find('option:selected').text());
            paramObj.rangeFlag = dataRange;
            if (dataRange != null && dataRange == 'Y') {
                paramObj.minvalue = minvalue;
                paramObj.maxvalue = maxvalue;
            } else {
                paramObj.minvalue = "";
                paramObj.maxvalue = "";
            }
            paramArray.push(paramObj);
        }
        ++i;
    });
    if (paramArray != null && paramArray.length > 0) {

        alert("selectedGridId:::" + gridId);
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            cache: false,
            url: "analyticDropdown",
            data: {
                'gridId': gridId,
                'tabComponentId': chartId,
                'tabId': tabGridId,
                'chartTypeId': chartType
            },
            success: function (response) {
                if (response != null)
                {
                    var result = JSON.parse(response);
                    var dataObj = result['chartList'];
                    for (var i = 0; i < dataObj.length; i++)
                    {
                        var tabId = $("#tabChartsId").val();
                        var chartData = dataObj[i];
//                        getChartUpdateData(chartData, tabId, paramArray, tabGridId);
                        var jqwidgetFlag = chartData['36'];
                        if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                        {
                            getJqwidgetChartUpdateData(chartData, tabId, paramArray, tabGridId);
                        } else {
                            getChartUpdateData(chartData, tabId, paramArray, tabGridId);
                        }
                    }
                }
            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    } else {
        $("#wait").css("display", "none");
        var dialogSplitMessage = dialogSplitIconText("Please provide at least one value to Search.", "Y");
        showDialog(dialogSplitMessage);
    }
}
//updated charts method

function getChartUpdateData(chartData, tabId, paramArray, tabGridId)
{
    var filterItem;
    if (chartFilterItems != null && !jQuery.isEmptyObject(chartFilterItems))
    {
        filterItem = JSON.parse(chartFilterItems);
    }
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "cloudAnalytics",
        async: true,
        cache: false,
        data: {
            'chartData': JSON.stringify(chartData),
            'ddwFlag': 'Y',
            'editFlag': 'Y',
            'paramArray': JSON.stringify(paramArray),
            'chartFilterItems': JSON.stringify(filterItem)
        },
        success: function (response) {
            $("#wait").css("display", "none");
            if (response != null && response != '' && response != undefined) {
                var resultData = JSON.parse(response);
                if (resultData != null)
                {
                    var result = resultData[0];
                    if (result != null) {
                        var divid = result['divId'];
                        var chartId = result['chartId'];
                        var chartVal = $("#" + chartId + "_ddwVal").val();
                        $("#" + chartId + "_Chart").empty();
                        $("#" + chartId + "_Chart").html(divid);
                        var dataArray = result['dataArray'];
                        var options = result['options'];
                        var objInit = result['objInit'];
                        var sizeOfChart = result['sizeOfChart'];
                        var chartId = result['chartId'];
                        var seqNo = result['seqNo'];
                        var description = result['description'];
                        var labelChartArr = result['labelChartArr'];
                        var chartInitParamObj = result['chartInitParamObj'];
                        var calenderFlag = "";
                        if (chartInitParamObj != null)
                        {
                            calenderFlag = chartInitParamObj['uuu_CalenderFlag'];
                        }
                        $("#" + chartId + "_description").val(JSON.stringify(description));
                        $("#" + chartId + "_chartInitParams").val(JSON.stringify(chartInitParamObj));
                        $("#" + chartId + "_options").val(JSON.stringify(options));
                        $("#" + chartId + "_Data").val(dataArray);
                        $("#" + chartId + "_ddwVal").val(chartVal);
                        $("#" + chartId + "_filterVal").val(JSON.stringify(paramArray));
                        var dataObjArr = {};
                        var dataObj = $("#" + chartId + "_Data").val();
                        if (dataObj != null && dataObj != '' && dataObj != undefined)
                        {
                            dataObjArr = JSON.parse(dataObj);
                        }
                        if (sizeOfChart != null && sizeOfChart != '' && sizeOfChart != undefined) {
                            $("#" + chartId + "_Chart").css("width", "" + sizeOfChart + "%", "important");
                        } else if (windowWidth > 1024)
                        {
                            $("#" + chartId + "_Chart").css('width', '32%');
                            options['width'] = '100%';
                        } else if (windowWidth < 1024 && windowWidth > 700)
                        {
                            $("#" + chartId + "_Chart").css('width', '49%');
                            options['width'] = '90%';
                        } else if (windowWidth < 699 && windowWidth > 320)
                        {
                            $("#" + chartId + "_Chart").css('width', '98%');
                            options['width'] = '90%';
                        }
                        var data = [];
                        if (dataObjArr != null && dataObjArr.length > 0)
                        {
                            if (calenderFlag != null && calenderFlag != '' && calenderFlag == "Y") {
                                try {
                                    var dataObjStr = calenderChartData(dataObjArr);
                                    data = google.visualization.arrayToDataTable(dataObjStr);
                                } catch (e) {
                                }
                            } else {
                                data = google.visualization.arrayToDataTable(dataObjArr);
                            }
                            var objInit1 = eval(objInit);
                            var chart = objInit1;
//                            chart.draw(data, options);
                            if (labelChartArr != null && !jQuery.isEmptyObject(labelChartArr))
                            {
                                var view = new google.visualization.DataView(data);
                                view.setColumns(labelChartArr);
                                chart.draw(view, options);
                            } else
                            {
                                chart.draw(data, options);
                            }
                            $("#" + chartId + "_types").val(chartVal);
                            var replacChartType = result['replacChartType'];
                            if (replacChartType != null && replacChartType != '' && replacChartType != undefined)
                            {
                                $("#" + chartId + "_chartType").val(replacChartType);
                            } else
                            {
                                $("#" + chartId + "_chartType").val(chartVal);
                            }
                            google.visualization.events.addListener(chart, 'select', function () {
                                selectHandler(chart, data, chartId, tabGridId);
                            });
                        } else
                        {
                            if (!(options['width'].indexOf("%") > -1))
                            {
                                options['width'] = options['width'] + "px";
                            }
                            $("#" + chartId).html("<div class ='analyticChartNoDataClass' style ='width:" + options['width'] + ";'><span class='analyticsChartNoDataText'>No Data Found</span></div>");
                        }

                    }
                    $("#wait").css("display", "none");
                }
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function refreshChart(chartType, tabGridId, chartId, gridId)
{
    console.log("chartId:::" + chartId);
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        cache: false,
        url: "cloudAnalyticsCharts",
        data: {
            'tabComponentId': tabGridId,
            'chartId': chartId,
            'resetFlag': 'Y'
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response))
            {
                var result = response;
                var dataObj = result['chartList'];
                if (dataObj != null) {
                    var chartData = dataObj[0];
                    $("#wait").css("display", "block");
//                    getRefreshChartData(chartData, tabGridId, chartId);

                    var jqwidgetFlag = chartData['36'];
                    if (jqwidgetFlag != null && jqwidgetFlag != '' && jqwidgetFlag != undefined && jqwidgetFlag == 'Y')
                    {
                        getJqwidgetsRefreshChartData(chartData, tabGridId, chartId);
                    } else {
                        getRefreshChartData(chartData, tabGridId, chartId);//jqwidgets
                    }
                }
            }
        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}
function getRefreshChartData(chartData, tabChartId, chartId)
{
    var filterItem;
    if (chartFilterItems != null && !jQuery.isEmptyObject(chartFilterItems))
    {
        filterItem = JSON.parse(chartFilterItems);
    }
    var paramArrData = [];
    var paramArray = $("#" + chartId + "_Nested_filterVal").val();
    if (paramArray != null && paramArray != '' && paramArray != undefined)
    {
        paramArrData = JSON.parse(paramArray);
    }
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "cloudAnalytics",
        async: true,
        cache: false,
        data: {
            'chartData': JSON.stringify(chartData),
            'resetFlag': 'Y',
            'paramArray': JSON.stringify(paramArrData),
            'chartFilterItems': JSON.stringify(filterItem)
        },
        success: function (response) {
            if (response != null && !jQuery.isEmptyObject(response)) {
                $("#wait").css("display", "none");
                var resultData = response;
                if (resultData != null)
                {
                    var result = resultData[0];
                    if (result != null) {
                        var divid = result['divId'];
                        var chartId = result['chartId'];
                        $("#" + chartId + "_Chart").empty();
                        $("#" + chartId + "_Chart").html(divid);
                        var dataArray = result['dataArray'];
                        var options = result['options'];
                        var objInit = result['objInit'];
                        var seqNo = result['seqNo'];
                        var sizeOfChart = result['sizeOfChart'];
                        var description = result['description'];
                        var labelChartArr = result['labelChartArr'];
                        var chartInitParamObj = result['chartInitParamObj'];
                        var calenderFlag = "";
                        if (chartInitParamObj != null)
                        {
                            calenderFlag = chartInitParamObj['uuu_CalenderFlag'];
                        }
                        $("#" + chartId + "_description").val(JSON.stringify(description));
                        $("#" + chartId + "_chartInitParams").val(JSON.stringify(chartInitParamObj));
                        $("#" + chartId + "_Data").val(dataArray);
                        $("#" + chartId + "_options").val(JSON.stringify(options));
                        var dataObjArr = {};
                        var dataObj = $("#" + chartId + "_Data").val();
                        if (dataObj != null && dataObj != '' && dataObj != undefined)
                        {
                            dataObjArr = JSON.parse(dataObj);
                        }
                        var data = [];
                        if (calenderFlag != null && calenderFlag != '' && calenderFlag == "Y") {
                            try {
                                var dataObjStr = calenderChartData(dataObjArr);
                                data = google.visualization.arrayToDataTable(dataObjStr);
                            } catch (e) {
                            }
                        } else {
                            data = google.visualization.arrayToDataTable(dataObjArr);
                        }
                        var objInit1 = eval(objInit);
                        var chart = objInit1;
                        if (sizeOfChart != null && sizeOfChart != '' && sizeOfChart != undefined) {
                            $("#" + chartId + "_Chart").css("width", "" + sizeOfChart + "%", "important");
                        } else if (windowWidth > 1024)
                        {
                            $("#" + chartId + "_Chart").css('width', '32%');
                            options['width'] = '100%';
                        } else if (windowWidth < 1024 && windowWidth > 700)
                        {
                            $("#" + chartId + "_Chart").css('width', '49%');
                            options['width'] = '90%';
                        } else if (windowWidth < 699 && windowWidth > 320)
                        {
                            $("#" + chartId + "_Chart").css('width', '98%');
                            options['width'] = '90%';
                        }
//                        chart.draw(data, options);
                        if (labelChartArr != null && !jQuery.isEmptyObject(labelChartArr))
                        {
                            var view = new google.visualization.DataView(data);
                            view.setColumns(labelChartArr);
                            chart.draw(view, options);
                        } else
                        {
                            chart.draw(data, options);
                        }
                        var chartType = result['chartType'];
                        if (chartType != null && chartType != '' && chartType != undefined)
                        {
                            $("#" + chartId + "_types").val(chartType);
                        }
                        var replacChartType = result['replacChartType'];
                        if (replacChartType != null && replacChartType != '' && replacChartType != undefined)
                        {
                            $("#" + chartId + "_chartType").val(replacChartType);
                        } else
                        {
                            $("#" + chartId + "_chartType").val(chartType);
                        }
                        google.visualization.events.addListener(chart, 'select', function () {
                            selectHandler(chart, data, chartId, tabChartId);
                        });
                    }

                    $("#wait").css("display", "none");
                }
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}

function getJqwidgetsRefreshChartData(chartData, tabChartId, chartId)
{
    var filterItem;
    if (chartFilterItems != null && !jQuery.isEmptyObject(chartFilterItems))
    {
        filterItem = JSON.parse(chartFilterItems);
    }
    var paramArrData = [];
    var paramArray = $("#" + chartId + "_Nested_filterVal").val();
    if (paramArray != null && paramArray != '' && paramArray != undefined)
    {
        paramArrData = JSON.parse(paramArray);
    }
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "cloudJqwidgetAnalyticCharts",
        async: true,
        cache: false,
        data: {
            'chartData': JSON.stringify(chartData),
            'resetFlag': 'Y',
            'paramArray': JSON.stringify(paramArrData),
            'chartFilterItems': JSON.stringify(filterItem)
        },
        success: function (response) {
            if (response != null && response != '' && response != undefined) {
                $("#wait").css("display", "none");
                var resultData = JSON.parse(response);
                if (resultData != null)
                {
                    var result = resultData;
                    if (result != null) {
                        var chartsObj = result['chartsObj'];
                        var divid = chartsObj['divId'];
                        var seqNo = chartsObj['seqNo'];
                        var chartId = chartsObj['chartId'];
                        var sizeOfChart = chartsObj['sizeOfChart'];
                        var height = chartsObj['height'];
                        var width = chartsObj['width'];
                        $("#" + chartId + "_Chart").empty();
                        $("#" + chartId + "_Chart").html(divid);

                        var description = chartsObj['description'];
                        var chartInitParamObj = chartsObj['chartInitParamObj'];

                        $("#" + chartId + "_description").val(JSON.stringify(description));
                        $("#" + chartId + "_chartInitParams").val(JSON.stringify(chartInitParamObj));
                        $("#" + chartId + "_chart").css("width", "" + sizeOfChart + "", "important");
                        $("#" + chartId).css("width", "" + width + "", "important");
                        $("#" + chartId).css("height", "" + height + "", "important");
                        var finalChartObj = {};
                        finalChartObj = result['chartTypesObj'];
                        var chartDataObj = result['chartDataObj'];
                        finalChartObj.source = chartDataObj['data'];
                        var settings = {};
                        settings = finalChartObj;
                        $("#" + chartId).jqxChart(settings);
                        var chartType = result['chartType'];
                        if (chartType != null && chartType != '' && chartType != undefined)
                        {
                            $("#" + chartId + "_types").val(chartType);
                        }
                        var replacChartType = result['replacChartType'];
                        if (replacChartType != null && replacChartType != '' && replacChartType != undefined)
                        {
                            $("#" + chartId + "_chartType").val(replacChartType);
                        } else
                        {
                            $("#" + chartId + "_chartType").val(chartType);
                        }
                        $("#" + chartId).on('click', function (e)  //click event
                        {
                            if (e.args != null) {
                                selectJqwidgetHandler(e.args.serie.dataField, e.args.elementValue, chartId, tabChartId);
                            }
                        });

                    }

                    $("#wait").css("display", "none");
                }
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function getJqwidgetChartDropdownData(chartData, tabId, chartVal, paramArray)
{
    var filterItem;
    if (chartFilterItems != null && !jQuery.isEmptyObject(chartFilterItems))
    {
        filterItem = JSON.parse(chartFilterItems);
    }
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "cloudJqwidgetAnalyticCharts",
        async: true,
        cache: false,
        data: {
            'chartData': JSON.stringify(chartData),
            'ddwFlag': 'Y',
            'chartVal': chartVal,
            'paramArray': JSON.stringify(paramArray),
            'chartFilterItems': JSON.stringify(filterItem)
        },
        success: function (response) {
            $("#wait").css("display", "none");
            if (response != null && response != '' && response != undefined) {
                var resultData = JSON.parse(response);
                if (resultData != null)
                {
                    var result = resultData;
                    if (result != null) {
                        var chartsObj = result['chartsObj'];
                        var divid = chartsObj['divId'];
                        var seqNo = chartsObj['seqNo'];
                        var chartId = chartsObj['chartId'];
                        var sizeOfChart = chartsObj['sizeOfChart'];
                        var height = chartsObj['height'];
                        var width = chartsObj['width'];

                        var paramArrData = [];
                        var paramArr = $("#" + chartId + "_filterVal").val();
                        if (paramArr != null && paramArr != '' && paramArr != undefined)
                        {
                            paramArrData = JSON.parse(paramArr);
                        }
                        $("#" + chartId + "_Chart").empty();
                        $("#" + chartId + "_Chart").html(divid);

                        var chartInitParamObj = chartsObj['chartInitParamObj'];


                        var description = chartsObj['description'];
                        $("#" + chartId + "_description").val(JSON.stringify(description));
                        $("#" + chartId + "_chartInitParams").val(JSON.stringify(chartInitParamObj));
                        $("#" + chartId + "_ddwVal").val(chartVal);
                        $("#" + chartId + "_filterVal").val(JSON.stringify(paramArrData));

                        $("#" + chartId + "_chart").css("width", "" + sizeOfChart + "", "important");
                        $("#" + chartId).css("width", "" + width + "", "important");
                        $("#" + chartId).css("height", "" + height + "", "important");
                        var finalChartObj = {};
                        finalChartObj = result['chartTypesObj'];
                        var chartDataObj = result['chartDataObj'];
                        finalChartObj.source = chartDataObj['data'];
                        var settings = {};
                        settings = finalChartObj;
                        $("#" + chartId).jqxChart(settings);

                        $("#" + chartId + "_types").val(chartVal);
                        var replacChartType = result['replacChartType'];
                        var tabGridId = result['tabGridId'];
                        if (replacChartType != null && replacChartType != '' && replacChartType != undefined)
                        {
                            $("#" + chartId + "_chartType").val(replacChartType);
                        } else
                        {
                            $("#" + chartId + "_chartType").val(chartVal);
                        }
                        $("#" + chartId).on('click', function (e)  //click event
                        {
                            if (e.args != null) {
                                selectJqwidgetHandler(e.args.serie.dataField, e.args.elementValue, chartId, tabGridId);
                            }
                        });

                    } else
                    {
                        if (!(width.indexOf("%") > -1))
                        {
                            width = width + "px";
                        }
                        $("#" + chartId).html("<div class ='analyticChartNoDataClass'><span class='analyticsChartNoDataText' style ='width:" + width + ";'>No Data Found</span></div>");
                    }

                }
                $("#wait").css("display", "none");
            }


        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}

function chartdialogopen(chartId)
{
    openChartDialog(chartId);
}

function flip(chartId) {
    var description = $("#" + chartId + "_description").val();
    var descr = JSON.parse(description);
    var screenWidth = (descr.length > 100) ? '800' : 'auto';
    var screenHeigth = (descr.length > 400) ? '400' : 'auto';
    $("#dialog").html(descr);
    $("#dialog").dialog({ resizable: false,
        modal: true,
        title: (labelObject['Description'] != null ? labelObject['Description'] : 'Description'),
        height: screenHeigth,
        minHeight: 'auto',
        minWidth: screenWidth,
        maxWidth: 'auto',
        fluid: true,
        buttons: {
            Close: function () {
                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");
            }
        },
        open: function () {
             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(this).closest(".ui-dialog").addClass("visionCommonDialog");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

function openChartDialog(chartId) {
    var widthScreen;
    var heightScreen;
    var widthChartScreen;
    var heightChartScreen;
    var dataObjArr = {};
    var dataObj = $("#" + chartId + "_Data").val();
    var chartInitParams = $("#" + chartId + "_chartInitParams").val();
    var chartInitParamObj = {};
    if (chartInitParams != null && chartInitParams != '' && chartInitParams != undefined)
    {
        chartInitParamObj = JSON.parse(chartInitParams);
    }
    var calenderFlag = "";
    var orgChartFlag = "";
    if (chartInitParamObj != null)
    {
        calenderFlag = chartInitParamObj['uuu_CalenderFlag'];
        orgChartFlag = chartInitParamObj['uuu_orgChartFlag'];
    }
    var chartType = $("#" + chartId + "_chartType").val();
    if (dataObj != null && dataObj != '' && dataObj != undefined)
    {
        dataObjArr = JSON.parse(dataObj);
    }
    var data = [];
    if (calenderFlag != null && calenderFlag != '' && calenderFlag == "Y") {
        try {
            var dataObjStr = calenderChartData(dataObjArr);
            data = google.visualization.arrayToDataTable(dataObjStr);
        } catch (e) {
        }
    } else {
        data = google.visualization.arrayToDataTable(dataObjArr);
    }
    var optionsData = $("#" + chartId + "_options").val();
    var options = {};
    widthScreen = $(window).width() - 30;
    heightScreen = $(window).height() - 30;
    widthChartScreen = widthScreen - 100;
    heightChartScreen = heightScreen - 100;
    if (optionsData != null && optionsData != '' && optionsData != undefined)
    {
        options = JSON.parse(optionsData);
        options['height'] = heightChartScreen;
        options['width'] = windowWidth - 100;
    }
    $("#expandDialog").html("<div id = '" + chartId + "_Expand' class = 'visionDataAnalyticsChartExpandImage'></div>");
    $("#expandDialog").dialog({ resizable: false,
        title: 'Expand Image',
        modal: true,
        width: widthScreen,
        height: heightScreen,
        fluid: true,
        buttons: [
            {
                text: "Close",
                "class": 'dialogyes',
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }
        ],
        open: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
            $(this).closest(".ui-dialog").addClass("visionAnalyticgraphDialog");
            $(window).resize(function () {
                $(".visionReportFlipcontainer").css("width", "100%");
            }).resize();
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
    var chart = "new google.visualization." + chartType + "(document.getElementById('" + chartId + "_Expand'))";
    var chart1 = eval(chart);
    if (orgChartFlag != null && orgChartFlag != '' && orgChartFlag == "Y") {
        var rows = data.getNumberOfRows();
        options['allowCollapse'] = false;
        for (var k = 0; k < rows; k++)
        {
            var orgValue = data.getValue(k, 0);
            var color = $("#color_" + orgValue).val();
            data.setRowProperty(k, 'style', 'background-color:' + color + ';background-image:none');
        }
    }
    chart1.draw(data, options);
}
function sessionBookingPage(id) {
    session_selected_course_Id = id;
    $('#cloudTabs').jqxTabs('select', 2);
}
function courseSessionBookingSubmitButton() {
    var ssUsername = $("#ssUsername").val();
    var subScriptionObjArray = [];
    console.log("ssUsername::::::::" + ssUsername + "");
    var session_1_AppointmentDate = $("#appointment_date1").val();
    var session_2_AppointmentDate = $("#appointment_date2").val();
    var session_3_AppointmentDate = $("#appointment_date3").val();
    var session_4_AppointmentDate = $("#appointment_date4").val();
    var Session_1_time = $("#Session_1").val();
    var Session_2_time = $("#Session_2").val();
    var Session_3_time = $("#Session_3").val();
    var Session_4_time = $("#Session_4").val();
    var subScriptionObj = {};
    if (ssUsername != null && ssUsername != "" && ssUsername != "undefined" && ssUsername != "null") {
        if (session_1_AppointmentDate != null && session_1_AppointmentDate != "" && session_1_AppointmentDate != "undefined"
                && Session_1_time != null && Session_1_time != "" && Session_1_time != "undefined" && Session_1_time != "Select time slot") {
            $("#date1_validation").html("");
            $("#session_1_validation").html("");
            if (session_2_AppointmentDate != null && session_2_AppointmentDate != "" && session_2_AppointmentDate != "undefined"
                    && Session_2_time != null && Session_2_time != "" && Session_2_time != "undefined" && Session_2_time != "Select time slot") {
                $("#date2_validation").html("");
                $("#session_2_validation").html("");
                if (session_3_AppointmentDate != null && session_3_AppointmentDate != "" && session_3_AppointmentDate != "undefined"
                        && Session_3_time != null && Session_3_time != "" && Session_3_time != "undefined" && Session_3_time != "Select time slot") {
                    $("#date3_validation").html("");
                    $("#session_3_validation").html("");
                    if (session_4_AppointmentDate != null && session_4_AppointmentDate != "" && session_4_AppointmentDate != "undefined"
                            && Session_4_time != null && Session_4_time != "" && Session_4_time != "undefined" && Session_4_time != "Select time slot") {
                        $("#date4_validation").html("");
                        $("#session_4_validation").html("");
                        if (session_selected_course_Id != null && session_selected_course_Id != "" && session_selected_course_Id != "undefined") {

                            subScriptionObj['ssUsername'] = ssUsername;
                            subScriptionObj['session_1_AppointmentDate'] = session_1_AppointmentDate;
                            subScriptionObj['session_2_AppointmentDate'] = session_2_AppointmentDate;
                            subScriptionObj['session_3_AppointmentDate'] = session_3_AppointmentDate;
                            subScriptionObj['session_4_AppointmentDate'] = session_4_AppointmentDate;
                            subScriptionObj['Session_1_time'] = Session_1_time;
                            subScriptionObj['Session_2_time'] = Session_2_time;
                            subScriptionObj['Session_3_time'] = Session_3_time;
                            subScriptionObj['Session_4_time'] = Session_4_time;
                            subScriptionObj['session_selected_course_Id'] = session_selected_course_Id;
                            subScriptionObjArray.push(subScriptionObj);
                            if (subScriptionObjArray != null && subScriptionObjArray.length != 0) {
                                $.ajax({
                                    datatype: "json",
                                    type: "POST",
                                    url: "sessionBookingPaymentProcess",
                                    data: {
                                        subScriptionObjArray: JSON.stringify(subScriptionObjArray)
                                    },
                                    traditional: true,
                                    cache: false,
                                    success: function (response) {
                                        stopLoader();
                                        if (response != null && !jQuery.isEmptyObject(response)) {
                                            options = response;
                                            options.handler = function (successResponse) {
                                                paymentResponseForSessionBooking(successResponse, subScriptionObjArray, response, "Y");
                                            };
                                            options.notes = {
                                                "address": "note value"
                                            };
                                            options.theme = {
                                                "color": "#9932CC"
                                            };
                                            var propay = new Razorpay(options);
                                            propay.on('payment.failed', function (failResponse) {
                                                paymentResponseForSessionBooking(failResponse, subScriptionObjArray, response, "N");
                                            });
                                            propay.open();
                                        }
                                    },
                                    error: function (e) {
                                        stopLoader();
                                        alert('Error: ' + e);
                                    }
                                });
                            } else {
                                var modalObj = {
                                    title: 'Message',
                                    body: 'Please select atleast one api to checkout.'
                                };
                                var buttonArray = [
                                    {
                                        text: 'Ok',
                                        isCloseButton: true,
                                    }
                                ];
                                modalObj['buttons'] = buttonArray;
                                createModal("modalDailogDiv1", modalObj);
                            }
                        } else {
                            $('#session_selected_validation').html("Please select course which you want to book");
                        }

                    } else {
                        $("#date4_validation").html("Please select session_4 date and time");
                    }
                } else {
                    $("#date3_validation").html("Please select session_3 date and time");
                }
            } else {
                $("#date2_validation").html("Please select session_2 date and time");
            }
        } else {
            $("#date1_validation").html("Please select session_1 date and time");
        }
    } else {
        $('#loginModel').modal('show');
    }

}

function paymentResponseForSessionBooking(payResponse, subScriptionObjArray, paymentOptions, paymentFlag) {
    if (payResponse != null) {
        var paymentResultObj = {};
        if (paymentFlag == 'Y') {
            paymentResultObj['org_name'] = payResponse['org_name'];
            paymentResultObj['razorpay_order_id'] = payResponse['razorpay_order_id'];
            paymentResultObj['razorpay_payment_id'] = payResponse['razorpay_payment_id'];
            paymentResultObj['payment_id'] = payResponse['razorpay_payment_id'];
            paymentResultObj['razorpay_signature'] = payResponse['razorpay_signature'];
        } else {
            paymentResultObj['errorcode'] = payResponse.error.code;
            paymentResultObj['errordescription'] = payResponse.error.description;
            paymentResultObj['errorreason'] = payResponse.error.reason;
            paymentResultObj['errorsource'] = payResponse.error.source;
            paymentResultObj['errorstep'] = payResponse.error.step;
            paymentResultObj['order_id'] = payResponse.error.metadata.order_id;
            paymentResultObj['payment_id'] = payResponse.error.metadata.payment_id;
        }

        $.ajax({
            datatype: "json",
            type: "POST",
            url: "saveSessionBookingDetails",
            data: {
                subScriptionObjArray: JSON.stringify(subScriptionObjArray),
                paymentOptions: JSON.stringify(paymentOptions),
                paymentResultObj: JSON.stringify(paymentResultObj),
                paymentFlag: paymentFlag
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response)) {
                    var modalObj = {
                        title: 'Message',
                        body: response['message']
                    };
                    var buttonArray = [
                        {
                            text: 'Ok',
                            click: function () {
                                bookNowSendingMail(subScriptionObjArray);
                            },
                            isCloseButton: true
                        }
                    ];
                    modalObj['buttons'] = buttonArray;
                    createModal("modalDailogDiv", modalObj);
                }
            },
            error: function (e) {
                stopLoader();
                alert('Error: ' + e);
            }
        });
    }



}
function bookNowSendingMail(subScriptionObjArray) {
    $.ajax({
        datatype: "html",
        type: "POST",
        url: "bookNow",
        data: {
            ssUsername: subScriptionObjArray[0].ssUsername,
            session_1_AppointmentDate: subScriptionObjArray[0].session_1_AppointmentDate,
            session_2_AppointmentDate: subScriptionObjArray[0].session_2_AppointmentDate,
            session_3_AppointmentDate: subScriptionObjArray[0].session_3_AppointmentDate,
            session_4_AppointmentDate: subScriptionObjArray[0].session_4_AppointmentDate,
            Session_1_time: subScriptionObjArray[0].Session_1_time,
            Session_2_time: subScriptionObjArray[0].Session_2_time,
            Session_3_time: subScriptionObjArray[0].Session_3_time,
            Session_4_time: subScriptionObjArray[0].Session_4_time,
            session_selected_course_Id: session_selected_course_Id
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != "") {
//                                 $("#dialog").html(response);
                $("#session_booking_status").html('');
                var modalObj = {
                    title: 'Message',
                    body: response
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {

                            $("#session_booking_status").css("display", "none");
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("session_booking_status", modalObj);
            }
        }
    });
}