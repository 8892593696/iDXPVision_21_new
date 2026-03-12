/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var labelObject = {};
var tableRowId;
function populateDropDown(dddwid, cssid, rowid)
{
    visionDropdown(dddwid, "", "SEARCH-VIEW", "", "", "", cssid, rowid);
}
function visionDropdown(ddwId, dependParams, viewType, tableOrGridId, dataFeild, row, tbid, rowid, columnid, tblcolumns, propValueArray, propDependentValFlag) {
    showLoader();
    labelObject = {};
    var charOrpicMMLowercase = "";
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());


    } catch (e) {

    }
    try {
        var lasteditedfield = $('#' + tableOrGridId).attr('data-last-ed-field');
        var lasteditedrow = $('#' + tableOrGridId).attr('data-last-ed-row');
        var$('#' + tableOrGridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
    } catch (e) {
    }
    //tblcloumns:for TABLE-VIEW- grid columns
    //columnid: for TABLE-VIEW-
    //rowid: for SEARCH-VIEW AND TABLE-VIEW- ViewTypes
    //SEARCH-VIEW IS used for dropdown in Parametric Search
    //TABLE-VIEW is used for Characteristics tab


    //dataFeild="CLASS_TERM";

    console.log("visionDropdown ::: ");
    var dependParamsObj = {};
    try {
        if (typeof dependParams != "undefined" && dependParams != null && dependParams != ""
                && dependParams != "null" && dependParams != undefined && dependParams != "undefined")
        {
            var dependParamsArray = dependParams.split(",");
            for (var i = 0; i < dependParamsArray.length; i++)
            {
                var value = "";
                if (viewType == "FORM-VIEW")
                {

                    value = $("#" + dependParamsArray[i]).val();


                } else if (viewType == "TABLE-VIEW")
                {

                    if ($("#td" + dependParamsArray[i] + rowid).css('display') == 'none') {
                        value = $("#td" + dependParamsArray[i] + rowid).text();
                    } else if ($("#td" + dependParamsArray[i] + rowid).find('input').length > 0)
                    {
                        value = $("#tb" + dependParamsArray[i] + rowid).val();
                    }
//                if ($("#td" + dependParamsArray[i] + rowid).find('input').length > 0)
//                {
//                    value = $("#tb" + dependParamsArray[i] + rowid).val();
//
//                }
//                else {
//                    value = $("#td" + dependParamsArray[i] + rowid).text();
//                }
                    else if ($("#td" + dependParamsArray[i]).length > 0) {
                        value = $("#td" + dependParamsArray[i] + rowid).text();
                    } else if ($("#td" + dependParamsArray[i] + rowid).length > 0) {
                        console.log("******" + $("#td" + dependParamsArray[i] + rowid).length + "***");
                        value = $("#td" + dependParamsArray[i] + rowid).text();
                    } else {
                        value = $("#" + dependParamsArray[i]).val();
                    }

                } else {
                    if (dependParamsArray[i] != null && dependParamsArray[i] != '' && dependParamsArray[i] == 'REFERENCE_TYPE')
                    {
                        value = $("#" + tableOrGridId).jqxGrid('getcellvalue', row, 'REFERENCE_TYPE_DLOV');
                    } else
                    {
                        value = $("#" + tableOrGridId).jqxGrid('getcellvalue', row, dependParamsArray[i]);
                    }

                    if (typeof value == 'undefined') {
                        value = $("#" + dependParamsArray[i]).val();
                    }

                }
                if (viewType == 'SEARCH-VIEW' && dependParams != null && dependParams != undefined && dependParams != '' &&
                        tableOrGridId != null && tableOrGridId != undefined && tableOrGridId != '') {
                    let serachvValue = $('#' + tableOrGridId + '_' + dependParamsArray[i]).val();
 
                    if (serachvValue !== null && serachvValue !== undefined && serachvValue.trim() !== '') {
                        value = serachvValue;  
                    }
                }
                value = (value != null && typeof value != "undefined") ? value : "";
                dependParamsObj[dependParamsArray[i]] = value;
            }
        }
    } catch (e) {

    }



    alert(JSON.stringify(dependParamsObj));
    console.log("oRGN NAME:::" + $("#usr_orgid").val());
    var isWebServDdw = false;
    var divid = "dddw";
    var url = "genericDropDown";
    var initialClearFilterFlag = "N";
    var data = {};
    data.ddwId = ddwId;
    data.viewType = viewType;
    data.dependParams = JSON.stringify(dependParamsObj);
    data.orgnName = $("#usr_orgid").val();
    data.orgnId = $("#orgnId").val();
    data.gridId = tableOrGridId;
    data.searchId = $("#currentSpecSearchId").val();
    if (propValueArray != null) {
        data.propValueArray = JSON.stringify(propValueArray);
    }
    var async = false;

    var success = function (result) {

        alert("result:::" + result);
        var htmlbody = "";
        var resultObj = JSON.parse(result);
        var width;
        if (resultObj['ddwWidth'] != null && resultObj['ddwWidth'] != undefined && resultObj['ddwWidth'] != "") {
            width = resultObj['ddwWidth'];
        } else {
            width = 500;
        }
        var ddwheight;
        if (resultObj['ddwheight'] != null && resultObj['ddwheight'] != undefined && resultObj['ddwheight'] != "") {
            ddwheight = resultObj['ddwheight'];
        } else {
            ddwheight = 410;
        }
        if (resultObj['initialClearFilterFlag'] != null && resultObj['initialClearFilterFlag'] != undefined
                && resultObj['initialClearFilterFlag'] != ""
                ) {
            initialClearFilterFlag = resultObj['initialClearFilterFlag'];
        } else {
            initialClearFilterFlag = "N";
        }
        var localdata = resultObj.localdata;
        var datafields = resultObj.datafields;
        var columns = resultObj.columns;

        var totalParcentege = 0;
        if (columns.length > 2) {
            for (var i = 0; i < columns.length; i++) {
                if (!columns[i].hidden) {
                    totalParcentege += width / 100 * +columns[i].width.replace(/[^\w\s]/gi, '');
                }
            }
            if (width < totalParcentege) {
                for (var i = 0; i < columns.length; i++) {
                    var columnsWidth = +columns[i].width.replace(/[^\w\s]/gi, '')
                    if (!columns[i].hidden) {
                        var perWidth = width / 100 * columnsWidth;
                        columns[i].width = perWidth;
                    }
                }
            }
        }

        // alert(webservicedata.IS_WS_DDW);
        var webservicedata = resultObj.webservicedata;
//        alert(JSON.stringify(webservicedata));
        isWebServDdw = webservicedata.IS_WS_DDW;
        //alert("isWebServDdw ::: "+isWebServDdw);
        var requestparams = webservicedata.REQUEST_PARAMS;
        var webservUrl = webservicedata.WS_URL;
        var source = {};
        var Url = "";
        var dataObject = {};
        var filtervalue = "";
        if (viewType == "GRID-VIEW")
            filtervalue = $('#' + tableOrGridId).jqxGrid('getcellvalue', row, dataFeild);
        else if (viewType == "FORM-VIEW")
            filtervalue = $("#" + dataFeild).val();
        else if (viewType == "TABLE-VIEW")
            filtervalue = $("#" + tbid).val();

        if (filtervalue == null || filtervalue == "null" || typeof filtervalue == 'undefined')
            filtervalue = "";

        if (initialClearFilterFlag != null && initialClearFilterFlag != undefined
                && initialClearFilterFlag != "" && initialClearFilterFlag == "Y") {
            filtervalue = "";
        }

        var filtergroup = new $.jqx.filter();
        var filter_or_operator = 1;
        var filtercondition = 'contains';
        var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter);





        if (!webservicedata.IS_WS_UP && isWebServDdw) {

            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>" + (labelObject['Sorry, Webservice is Down'] != null ? labelObject['Sorry, Webservice is Down'] : 'Sorry, Webservice is Down') + "</div></div>");
            $("#logoutDailog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: "150",
                width: "350",
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }]
            });
            alert("returning false");
            return false;

        } else if (isWebServDdw && webservUrl != null && webservUrl != "" && typeof webservUrl != 'undefined')
        {
            if (webservicedata.IS_WS_UP) {
                if ((webservUrl).indexOf("<<") > -1) {
                    while (webservUrl.indexOf("<<") > -1) {
                        var conditionCol = (webservUrl.substring(webservUrl.indexOf("<<") + 2, webservUrl.indexOf(">>"))).trim();
                        if (conditionCol != null && conditionCol != "") {

                            if (viewType == "FORM-VIEW") {

                                var value = $("#" + conditionCol).val();
                                if (value != null && value.indexOf("#") > -1)
                                {

                                    value = value.replace(/[#]/g, "_");
                                }
                                webservUrl = webservUrl.replace("<<" + conditionCol + ">>", value != null ? value : "");
                            } else if (viewType == "TABLE-VIEW") {
                                if ($("#td" + conditionCol + rowid).find('input').length > 0)
                                {
                                    value = $("#tb" + conditionCol + rowid).val();

                                } else if ($("#td" + conditionCol + rowid).length > 0) {
                                    col = "#td" + conditionCol + rowid;
                                    value = $("#td" + conditionCol + rowid).text();
                                } else {
                                    col = "#" + conditionCol;
                                    value = $("#" + conditionCol).val();

                                }
                                value = $.trim(value);
                                if (value != null && value.indexOf("#") > -1)
                                {

                                    value = value.replace(/[#]/g, "_");
                                }

                                //                            else {
                                //                                value = $("#td" + conditionCol + rowid).text();
                                //                            }
                                webservUrl = webservUrl.replace("<<" + conditionCol + ">>", value != null ? value : "");
                            }

                            //                        else if (viewType == "TABLE-VIEW") {
                            //                            // var value = $("#" + tbid).val();
                            //                            //var dependancyjson = JSON.parse($("#tbid").attr('data-dependancy'));
                            //                            tblcolumns = JSON.parse(tblcolumns)
                            //                            alert('columns ::' + tblcolumns);
                            //                            var value = "";
                            //                            for (var i = 0; i < tblcolumns.length; i++)
                            //                            {
                            //                                if (tblcolumns[i].datafield == conditionCol) {
                            //                                    alert('matched, fteching' + tblcolumns[i].datafield + rowid + "::, value");
                            //                                    if (tblcolumns[i].hidden == true) {
                            //                                        value = $("#td" + tblcolumns[i].datafield + rowid).text();
                            //                                    }
                            //                                    else if (tblcolumns[i].cellsrenderer == 'TB_DDW' || columns[i].cellsrenderer == 'gridDrpdownRenderor') {
                            //
                            //                                        value = $("#tb" + tblcolumns[i].datafield + rowid).val();
                            //                                    }
                            //                                    else {
                            //                                        value = $("#td" + tblcolumns[i].datafield + rowid).text();
                            //                                    }
                            //
                            //
                            //                                    break;
                            //                                }
                            //
                            //                            }
                            //                            // alert(value);
                            //
                            //
                            //                            //  value = getWSParamValue(conditionCol, columns, rowid, columnid);
                            //                            webservUrl = webservUrl.replace("<<" + conditionCol + ">>", value != null ? value : "");
                            //                            alert('webservUrl::' + webservUrl);
                            //                        }



                            else {
                                var gridCellValue = "";

                                if (ddwId == "DDW_MM_PROPERTY_VALUE" && conditionCol == "CLASS_TERM")
                                    gridCellValue = $("#" + conditionCol).val();
                                else
                                    gridCellValue = $('#' + tableOrGridId).jqxGrid('getcellvalue', row, conditionCol);
                                if (gridCellValue != null && gridCellValue.indexOf("#") > -1)
                                {

                                    gridCellValue = gridCellValue.replace(/[#]/g, "_");
                                }
                                webservUrl = webservUrl.replace("<<" + conditionCol + ">>", gridCellValue != null ? gridCellValue : "");

                            }

                        }

                    }


                }
                dataObject = {};
                Url = webservUrl; 
            }

        } else {
            Url = "getDropDownData";
            dataObject = {
                tableName: resultObj.tableName,
                condCols: JSON.stringify(resultObj.condCols),
                selectCols: JSON.stringify(resultObj.selectCols),
                staticCondition: resultObj.staticCondition,
                dropdownlistflag: 'N'


            }

        }
        dataObject.sortcolumn = resultObj.defaultOrderBy;
        dataObject.sortdirection = 'asc';
        dataObject.gridId = tableOrGridId;

//        alert("resultObj::::" + JSON.stringify(resultObj));
        source = {
            type: 'POST',
            async: false,
            datatype: "json",
            data: dataObject,
            url: Url,
            cache: false,
            beforeSend: function (xhr) {
                if (!isWebServDdw) {
                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                }
                showLoader();
            }, loadError: function (xhr, status, error) {
                stopLoader();
                throw new Error(error);
            }, loadComplete: function (data)
            {
                setTimeout(function () {
                    $('#ddGrid3').jqxGrid('refresh');
                    stopLoader();
                }, 500)
//                try {
//                    if (initialClearFilterFlag != null && initialClearFilterFlag != ''
//                            && initialClearFilterFlag == 'Y') {
//                        $('#ddGrid3').jqxGrid('clearfilters');
//                    }
//                } catch (e) {
//
//                }
            },
            beforeprocessing: function (data) {
//                try {
//                    $("#ddGrid3").jqxGrid('clearselection');
//                } catch (e) {
//                }
                if (data[0] != null) {
                    source.totalrecords = data[0].totalRecords;

                } else {

                    source.totalrecords = 0;
                }
            },
            sort: function ()
            {
                $("#ddGrid3").jqxGrid('updatebounddata', 'sort');
                try {
                    $("#ddGrid3").jqxGrid('clearselection');
                } catch (e) {
                }
                stopLoader();
            },
            filter: function () {
                showLoader();
                try {
                    $("#ddGrid3").jqxGrid('clearselection');
                } catch (e) {
                }

                $("#ddGrid3").jqxGrid('updatebounddata', 'filter');

                stopLoader();
            }

        };
        var dataAdapter = new $.jqx.dataAdapter(source);
        var isExportable = true;
        var gridConfigObj = {};
        gridConfigObj = resultObj.gridconfig;
        if (dataFeild == '') {
            dataFeild = tbid;
        }
        //data-filtergridflag
        var filterGridFlag = $("#" + dataFeild).attr("data-filtergridflag");
        console.log("filterGridFlag:::" + filterGridFlag);
        console.log("resultObj.multiselectflag:::" + resultObj.multiselectflag);
        console.log("gridconfig.selectionmode:::" + gridConfigObj.selectionmode);
        //
        if (filterGridFlag != null && filterGridFlag != '' && filterGridFlag == 'Y'
                && viewType == 'FORM-VIEW') {
            var filterGridFlagCount = $("#" + dataFeild).attr("data-filtergridflag-count");

            console.log("filterGridFlagCount:::" + filterGridFlagCount);
            console.log("filterGridFlagCount:::" + filterGridFlagCount);
            var operatorId = "operator" + $("#dd" + dataFeild).attr("data-viewid") + filterGridFlagCount;
            console.log("operator id::" + operatorId)
            $("#" + operatorId).val("IN");
            //operatorMM_REFERENCE_ASSOCIATE5
            resultObj.multiselectflag = true;
            gridConfigObj.selectionmode = "checkbox";
        }
//        var fuilterflag = 
        gridConfigObj.source = dataAdapter;
        gridConfigObj.rendergridrows = function (obj) {
            return obj.data;
        };
        gridConfigObj.columns = columns;
        gridConfigObj.virtualmode = true;

//        $(window).resize(function ()
//        {
//            if ($(window).width() < 440)
//            {
//                gridConfigObj.width = "100%";
//            } else
//            {
//                gridConfigObj.width = "420";
//            }
//        }).resize();
        gridConfigObj.height = "100%";
        var toolbarHtml = "";
        var renderingObe = resultObj.valueRenderArray;
        var clearselectionLabel = (labelObject["Clear Selection"] != null ? labelObject["Clear Selection"] : "Clear Selection");
        var clearfilterLabel = (labelObject["Clear Filter"] != null ? labelObject["Clear Filter"] : "Clear Filter");
        var selectLabel = (labelObject["Select"] != null ? labelObject["Select"] : "Select");

        if (resultObj.multiselectflag) {
            if (viewType == "GRID-VIEW") {
                toolbarHtml = "<div style='width:100%;text-align:center;height:auto;'><center>"
                        + "<input class='visionDDWSelect' type='button' "
                        + " data-viewType='" + viewType + "'"
                        + " data-renderer='" + JSON.stringify(renderingObe) + "' onclick=selectData('" + tbid + "'," + row + ",'" + ddwId + "','" + tableOrGridId + "') "
                        + " disabled='disabled' value='" + selectLabel + "' id='selectvlues'/>"
                        + "<input class='visionDDWClear' onclick='clearSelection();' style='margin-right:5px' type='button' value='" + clearselectionLabel + "' id='ClearSelection'/>"
                        + "<input class='visionDDWFilter' onclick='clearFilters();'  type='button' value='" + clearfilterLabel + "' id='ddClear'/></center>"
                        + "</div>";

            } else {
                toolbarHtml = "<div style='width:100%;text-align:center;height:auto;'><center>"
                        + "<input class='visionDDWSelect' type='button' "
                        + " data-viewType='" + viewType + "'"
                        + " data-renderer='" + JSON.stringify(renderingObe) + "' onclick=selectData('" + tbid + "'," + rowid + ",'" + ddwId + "','" + tableOrGridId + "') "
                        + " disabled='disabled' value='" + selectLabel + "' id='selectvlues'/>"
                        + "<input class='visionDDWClear' onclick='clearSelection();' style='margin-right:5px' type='button' value='" + clearselectionLabel + "' id='ClearSelection'/>"
                        + "<input class='visionDDWFilter' onclick='clearFilters();'  type='button' value='" + clearfilterLabel + "' id='ddClear'/></center>"
                        + "</div>";
            }

        } else {
            toolbarHtml = "<div style='width:100%;text-align:center;height:auto;padding-top:4px'>"
                    + " <input style='float:right;margin-right:4px;' class='visionDDWFilter' onclick='clearFilters();' "
                    + " type='button'  value='" + clearfilterLabel + "' id='ddClear'/>"
                    + "</div>";

        }


        var toolbarfunc = function (toolbar) {
            $("#toolbarddGrid3").empty();
            toolbar.append(toolbarHtml);
        };
        gridConfigObj.rendertoolbar = toolbarfunc;

        $("#dddw").empty();
        var dropDownHtml = "<div id='ddGrid3'  ></div>";

        if (viewType == "SEARCH-VIEW" || viewType == "TABLE-VIEW")
        {
            for (var i = 0; i < gridConfigObj.columns.length; i++) {

                if ($.trim($("#" + tbid).val()) != ""
                        && gridConfigObj.columns[i].hidden == false)
                {

                    gridConfigObj.columns[i].filter = function () {
                        var filtergroup = new $.jqx.filter();
                        var filter_or_operator = 1;
                        var filtervalue = $("#" + tbid).val();
                        var filtercondition = 'contains';
                        var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                        filtergroup.addfilter(filter_or_operator, filter);
                        return filtergroup;
                    }();
                    break;

                }
            }

        } else {

            gridConfigObj.columns[0].filter = function () {
                return filtergroup;
            }();
        }
        for (var i = 0; i < gridConfigObj.columns.length; i++) {
            if (gridConfigObj.columns[i].rendered != null) {
                gridConfigObj.columns[i].rendered = eval('(' + gridConfigObj.columns[i].rendered + ')');
            }
        }

        $("#dddw").append(dropDownHtml);
        gridConfigObj.autoshowloadelement = false;
        //pagesizeoptions
        var pageNationSize = $("#DDWPageNationSize").val();
        if (pageNationSize != null && pageNationSize != '' && pageNationSize != undefined && pageNationSize != "null") {
            var pagesizeoptions = JSON.parse(pageNationSize);
            if (pagesizeoptions != null) {
                gridConfigObj.pagesizeoptions = pagesizeoptions;
                gridConfigObj.pagesize = pagesizeoptions[0];
            }
        } else {
            gridConfigObj.pagesizeoptions = [50, 100, 200, 500, 1000];
            gridConfigObj.pagesize = 100;
        }
        $("#ddGrid3").jqxGrid(gridConfigObj);


//          if(true ){
//                    
//                    var filtervalue = "";// $("#" + tbid).val();
//
//                    if (viewType == "FORM-VIEW") {
//                    filtervalue = $("#" + dataFeild).val();
//
//                    } else if ((viewType == "GRID-VIEW")) {
//
//                    filtervalue = $("#" + tbid).jqxGrid('getcellvalue', row, dataFeild);
//                    }
//                    
//                    var filtergroup = new $.jqx.filter();
//
//            var filtercondition = 'contains';
//            var filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
//            var filter_or_operator = 1;
//            filtergroup.addfilter(filter_or_operator, filter1);
//            $("#ddGrid3").jqxGrid('addfilter', "TERM", filtergroup);}


        $("#ddGrid3").jqxGrid({rendertoolbar: toolbarfunc});
//        $(window).resize(function () {
//            var windowWidth = $(this).width();
//            if (windowWidth <= 375)
//            {
//                $("#ddGrid3").jqxGrid({pagerheight: 70});
//            } else if (windowWidth >= 376 && windowWidth <= 500)
//            {
//                $("#ddGrid3").jqxGrid({pagerheight: 50});
//            } else
//            {
//                $("#ddGrid3").jqxGrid({pagerheight: 40});
//            }
//        }).resize();
//        $(window).resize(function ()
//        {
//            var windowWidth = $(this).width();
//            if (windowWidth < 430)
//            {
//                $("#ddGrid3").jqxGrid('width', "100%");
//            } else
//            {
//                if (width != null && width != undefined && width != "") {
//                    $("#ddGrid3").jqxGrid('width', width - 10);
//                } else {
//                    $("#ddGrid3").jqxGrid('width', "410px");
//                }
//            }
//        }).resize();
//        $(window).resize(function () {
//            setTimeout(function () {
//                $(".jqx-grid-pager").each(function () {
//                    $(this).children().css({"margin-top": "", "width": "", "float": ""});
//                });
//            }, 50);
//        }).resize(); 
        //CLEARING FILTER IN DROPDOWN
        $('#ddClear').on('click', function () {
            $('#ddGrid3').jqxGrid('clearfilters');
        });
        $('#ddGrid3').attr('data-childgrid', tableOrGridId);
        $('#ddGrid3').attr('data-childfield', dataFeild);
        $('#ddGrid3').attr('data-childrow', row);
        //CLEARING SELECTIONS IN DROPDOWN
//        $('#selectvlues').on('click', function () {
//
//            var selectedData = getDropDownSelectedRowsData();
//            for (var i = 0; i < renderingObe.length; i++) {
//                obj = renderingObe[i];
//                //var colValue = $('#ddGrid3').jqxGrid('getcellvalue', boundIndex, obj.PARENT_FIELD);
//                var valuesString = "";
////                for (var j = 0; j < selectedData.length; j++) {
////
////                    var dataObj = selectedData[j];
////                    valuesString += "'" + dataObj[obj.PARENT_FIELD] + "'";
////
////                    valuesString += ",";
////                }
////                if (valuesString.lastIndexOf(",") + 1 === valuesString.length) {
////
////                    valuesString = valuesString.substring(0, valuesString.lastIndexOf(","));
////                }
//
//                if (selectedData.length > 1) {
//                    for (var j = 0; j < selectedData.length; j++) {
//                        try {
//                            var dataObj = selectedData[j];
//                            valuesString += "'" + dataObj[obj.PARENT_FIELD] + "'";
//                            valuesString += ",";
//                        }
//                        catch (e) {
//                        }
//                    }
//                    if (valuesString.lastIndexOf(",") + 1 === valuesString.length) {
//
//                        valuesString = valuesString.substring(0, valuesString.lastIndexOf(","));
//                    }
//                }
//                else if (selectedData.length == 1) {
//                    var dataObj = selectedData[0];
//                    valuesString = dataObj[obj.PARENT_FIELD];
//                }
//
//                if (viewType == "GRID-VIEW")
//                {
//
//                    $("#" + obj.CHILD_TABLE).jqxGrid('setcellvalue', row, obj.CHILD_FIELD, valuesString);
//
//                    var index = $("#" + obj.CHILD_TABLE).jqxGrid('getrowboundindexbyid', row);
//
//                    $("#" + obj.CHILD_TABLE).jqxGrid('selectrow', index);
//                }
//
//                else if (viewType == "FORM-VIEW") {
//                    var childFields = obj.CHILD_FIELD.split(",");
//
//                    for (var j = 0; j < childFields.length; j++)
//                    {
//                        $("#" + childFields[j]).val(valuesString);
//                    }
//                }
//                else if (viewType == "SEARCH-VIEW") {
//                    //  alert("tbid::"+tbid);
//                    $("#" + tbid).val(valuesString);
//
//                    if (valuesString.split(",").length > 1)
//                    {
//                        //$("#ddw"+rowid).;   
//                        +$("#ddw" + rowid).val("IN");
//
//                    }
//
//                }
//            }
//
//
//            if (ddwId == "DDW_MM_DESCRIPTOR") {
//                getDescriptorImage();
//
//            }
//            $("#dddw").dialog('close');
//
//        });

        //CLEARING FILTER IN DROPDOWN
//        $('#ClearSelection').on('click', function () {
//
//            var selectedIndexes = $("#ddGrid3").jqxGrid('getselectedrowindexes');
//            $('#ddGrid3').jqxGrid('clearselection');
//
//        });
        //ROW CLICK EVENT
        $('#ddGrid3').on('rowclick', function (event)
        {
            $(".allErrors").hide();
            var args = event.args;
            // row's bound index.
            var boundIndex = args.rowindex;
            // row's visible index.
            var visibleIndex = args.visibleindex;
            // right click.
            var rightclick = args.rightclick;
            // original event.
            var ev = args.originalEvent;


            try {
                var tableOrGridIdInitParamObj = $("#" + tableOrGridId).attr("data-gridinitparamobj");
                var tableOrGridIdResultObj = $("#" + tableOrGridId).attr("data-gridResultObj");
                if (tableOrGridIdInitParamObj != null
                        && !jQuery.isEmptyObject(tableOrGridIdInitParamObj)
                        && tableOrGridIdInitParamObj['uuu_GridCaseSensitiveCols'] != null
                        && tableOrGridIdInitParamObj['uuu_GridCaseSensitiveCols'] != null
                        && tableOrGridIdInitParamObj['uuu_GridCaseSensitiveCols'] != ''
                        && tableOrGridIdInitParamObj['uuu_GridCaseSensitiveCols'] != 'undefined'
                        && tableOrGridIdInitParamObj['uuu_GridCaseSensitiveCols'] != undefined
                        ) {
                    var gridcaseSensitiveCols = tableOrGridIdInitParamObj['uuu_GridCaseSensitiveCols'];
                }

            } catch (es) {
                console.log(es)
            }


            try {
                var childRow = $('#ddGrid3').attr('data-childrow');
                var childRowData = $('#' + tableOrGridId).jqxGrid('getrowdata', childRow);
                if (dataFeild == 'WITHT') {
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WITHT_I", "");
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WT_WITHCD", "");
                } else if (dataFeild == 'WITHT_I') {
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WITHT", "");
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WT_WITHCD", "");
                } else if (dataFeild == 'WITHT_I_TAX') {
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WITHT_TAX", "");
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WT_WITHCD_TAX", "");

                } else if (dataFeild == 'WITHT_TAX') {
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WITHT_I_TAX", "");
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WT_WITHCD_TAX", "");

                }
                ////////////payment trasection
                else if (dataFeild == 'BANKA') {
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "BANKL", "");
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "BANKN", "");
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "BKONT", "");
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "BVTYP", "");
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "IBAN", "");
                    $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "KOINH", "");

                }

            } catch (e) {

            }

            if (!resultObj.multiselectflag) {

                alert(JSON.stringify(renderingObe));
                console.log(JSON.stringify(renderingObe));
                var ChildfieldValueString = "";
                for (var i = 0; i < renderingObe.length; i++) {
                    var obj = renderingObe[i];
//                    alert("JSON Obj::::"+obj);
//                    alert("renderingObe[i] Obj::::"+JSON.stringify(renderingObe[i]));
//                    alert($('#ddGrid3').jqxGrid('getcellvalue', boundIndex, obj.PARENT_FIELD));
                    var colValue = $('#ddGrid3').jqxGrid('getcellvalue', boundIndex, obj.PARENT_FIELD);
//                    alert("colValue::::"+colValue);
                    if (colValue != null) {
                        colValue = colValue.toString();
                    }
//                          alert("colValue::::"+colValue);
                    if (viewType == "GRID-VIEW")
                    {
                        try {
                            $("#" + tableOrGridId).jqxGrid('setcellvalue', row, obj.CHILD_FIELD, colValue);
                            try {
                                var fieldName = obj.CHILD_FIELD + '_DLOV';
                                var sourceex = $("#" + tableOrGridId).jqxGrid('source');
                                var dataFeilds = sourceex._source.datafields;
                                for (var key in dataFeilds) {
                                    var value = dataFeilds[key];
                                    if (value != null && value['name'] != null && value['name'] != '' && value['name'] == fieldName) {

                                        $("#" + tableOrGridId).jqxGrid('setcellvalue', row, fieldName, colValue);

                                    }

                                }
                            } catch (ed) {
                            }
                            ChildfieldValueString = ChildfieldValueString + ";" + childFields[j] + ":" + colValue;


                        } catch (e) {
                        }
                        var index = +row;

//                        $("#" + obj.CHILD_TABLE).jqxGrid('setcellvalue', row, obj.CHILD_FIELD, colValue);

//                        var index = $("#" + obj.CHILD_TABLE).jqxGrid('getrowboundindexbyid', row);

                        var hiddenCellVal = $("#" + tableOrGridId).jqxGrid('getcellvalue', 0, tableOrGridId + "_HIDDEN");
//                        var hiddenCellVal = $("#" + obj.CHILD_TABLE).jqxGrid('getcellvalue', 0, obj.CHILD_TABLE + "_HIDDEN");
                        if (!multipleRowsInsert) {
                            index = $("#" + tableOrGridId).jqxGrid('getrowboundindexbyid', row);
                            if (typeof hiddenCellVal != 'undefined' && hiddenCellVal != null && hiddenCellVal != "") {
                                if (hiddenCellVal.indexOf("INSERT") > -1) {
                                    index = index - 1;
                                }
                            }
                        }



                        $("#" + tableOrGridId).jqxGrid('selectrow', index);
//                        $("#" + obj.CHILD_TABLE).jqxGrid('selectrow', index);
                    } else if (viewType == "FORM-VIEW") {

                        var childFields = obj.CHILD_FIELD.split(",");
//                        console.log("childFields::::" + childFields);
//                           alert(colValue+"::::");
                        for (var j = 0; j < childFields.length; j++)
                        {
                            if (childFields[j] != null) {


                                try {
                                    if (gridcaseSensitiveCols != null
                                            && gridcaseSensitiveCols != null
                                            && gridcaseSensitiveCols != ''
                                            && gridcaseSensitiveCols != 'undefined'
                                            && gridcaseSensitiveCols != undefined
                                            && gridcaseSensitiveCols.indexOf(childFields[j]) > -1)
                                    {
                                        $("#" + childFields[j]).css("text-transform", "none");
                                        $("#" + tableOrGridId + "_" + childFields[j]).css("text-transform", "none");
                                        $("#" + tableOrGridId + "_TABLE_FORM_VIEW  #" + childFields[j]).css("text-transform", "none");

                                    }
                                } catch (es) {
                                }

                                $("#" + childFields[j]).val(colValue);
                                $("#" + tableOrGridId + "_" + childFields[j]).val(colValue);
                                $("#" + childFields[j]).attr("value", colValue).trigger("change");
                                $("#" + tableOrGridId + "_TABLE_FORM_VIEW  #" + childFields[j]).val(colValue);


                                if (colValue != null && colValue.indexOf("REQUESTOR") > -1 && ddwId == "DDW_ROLES") {
                                    $("#rpt_img").show();
                                    $(".visionRegisterMandatory").show();

                                    $("#usr_rlePrefixTxt").val(colValue.substr(0, 2) + "_APPROVER");
                                } else if (!(colValue != null && colValue.indexOf("REQUESTOR") > -1) && ddwId == "DDW_ROLES")
                                {
                                    $("#rpt_img").hide();
                                    $(".visionRegisterMandatory").hide();
                                }


                                if (colValue != null && colValue.indexOf("REQUESTOR") > -1 && ddwId.indexOf("_UM") > -1)
                                {
                                    $("#reportTo").show();
                                    $("#REPORT_TO").removeClass("visionInputDisable");

                                } else {
                                    $("#reportTo").hide();
                                    $("#REPORT_TO").addClass("visionInputDisable");
                                }
                                var roleId = $("#ROLE_ID").val();
                                if (roleId != null && typeof roleId != 'undefined' && roleId.indexOf("_REQUESTOR") > -1)
                                {
                                    if (colValue != null && colValue.indexOf("roleId") == -1)
                                    {
                                        $("#reportTo").show();
                                        if (roleId === 'MM_REQUESTOR') {
                                            $('#reportTo').removeAttr('style');
                                            $('#usertable td').each(function () {
                                                if ($(this).text().trim() === 'Report To') {
                                                    $(this).css('color', 'red');
                                                }
                                            });
                                        }
                                    }
                                } else {
                                    $('#reportTo').attr('style', 'cursor:pointer;  display:none; ');
                                    $('#usertable td').each(function () {
                                        if ($(this).text().trim() === 'Report To') {
                                            $(this).removeAttr('style');
                                        }
                                    });
                                }

                                ChildfieldValueString = ChildfieldValueString + ";" + childFields[j] + ":" + colValue;

                            }
                            /// For Tech Mahindra PoC End
                        }

                    } else if (viewType == "SEARCH-VIEW") {


                        try {
                            var childFields = obj.CHILD_FIELD.split(",");

                            for (var j = 0; j < childFields.length; j++)
                            {
                                if (tableOrGridId != null && tableOrGridId != '') {
                                    $("#" + tableOrGridId + "_" + childFields[j]).val(colValue);
                                    $("#" + childFields[j]).val(colValue);
                                } else {
                                    $("#" + childFields[j]).val(colValue);
                                }

                            }
                            $("#" + tbid).val(colValue);
                        } catch (e) {

                        }



                    } else if (viewType == "TABLE-VIEW") {
//                        if (tbid != null && tbid.indexOf(obj.CHILD_FIELD) > -1) {
////                            $("#" + tbid).val(colValue);
//                            var charOrpicMMLowercase = $("#charOrpicMMLowercase").val();
//                            if (charOrpicMMLowercase != null && charOrpicMMLowercase != "undefined" && charOrpicMMLowercase != "" 
//                                    && charOrpicMMLowercase == "PROPERTY_UOM") {
//                                $("#" + tbid).css("text-transform", "none");
//                                $("#" + tbid).val(colValue);
//                            } else {
//                                $("#" + tbid).val(colValue);
//                            }
//
//                        }
                        if (tbid != null && tbid.indexOf(obj.CHILD_FIELD) > -1) {
                            var subColumn = "tb" + obj.CHILD_FIELD;
                            if (subColumn != null && subColumn != '' && subColumn != undefined)
                            {
                                tableRowId = tbid.substr(subColumn.length, tbid.length);
                            }
//                            $("#" + tbid).val(colValue);
                            var charOrpicMMLowercase = $("#charOrpicMMLowercase").val();
                            if (charOrpicMMLowercase != null && charOrpicMMLowercase != "undefined" && charOrpicMMLowercase != ""
                                    && charOrpicMMLowercase == "PROPERTY_UOM") {
                                $("#" + tbid).css("text-transform", "none");
                                $("#" + tbid).val(colValue);
                            } else {


                                try {
                                    if (gridcaseSensitiveCols != null
                                            && gridcaseSensitiveCols != null
                                            && gridcaseSensitiveCols != ''
                                            && gridcaseSensitiveCols != 'undefined'
                                            && gridcaseSensitiveCols != undefined
                                            && gridcaseSensitiveCols.indexOf(obj.CHILD_FIELD) > -1)
                                    {
                                        $("#" + tbid).css("text-transform", "none");

                                    }
                                } catch (es) {
                                }


                                if ($("#" + tbid).is("input, textarea, select")) {
                                    $("#" + tbid).val(colValue);
                                } else {
                                    $("#" + tbid).text(colValue);
                                }

                            }

                        } else {
                            try {

                                try {
                                    if (gridcaseSensitiveCols != null
                                            && gridcaseSensitiveCols != null
                                            && gridcaseSensitiveCols != ''
                                            && gridcaseSensitiveCols != 'undefined'
                                            && gridcaseSensitiveCols != undefined
                                            && gridcaseSensitiveCols.indexOf(obj.CHILD_FIELD) > -1)
                                    {
                                        $("#tb" + obj.CHILD_FIELD + tableRowId).css("text-transform", "none");

                                    }
                                } catch (es) {
                                }

                                $("#tb" + obj.CHILD_FIELD + tableRowId).val(colValue);
                            } catch (e) {
                            }
                        }
                        if (dataFeild != null && dataFeild.indexOf(obj.CHILD_FIELD) > -1) {
                            if (dataFeild.indexOf("td") == 0 || dataFeild.indexOf("td") == 1) {
                                $("#" + dataFeild).text(colValue);
                            } else {
                                $("#" + dataFeild).val(colValue);
                            }

                        }
                        ChildfieldValueString = ChildfieldValueString + ";" + "tb" + obj.CHILD_FIELD + tableRowId + ":" + colValue;
                    }

                }
                try {
                    //childDependacyChange(dataFeild);
                    childDependacyChange(dataFeild, colValue);
                } catch (e) {
                }



                var MRP_Type_M0 = ["DISPO", "DISLS"];//2
                var MRP_Type_MP1234 = ["DISPO", "DISLS", "FXHOR"];//3
                var MRP_Type_V1 = ["DISLS", "MINBE"];//4
                var MRP_Type_V2BM = ["DISPO", "DISLS", "MINBE"];//5
                var MRP_Type_VVX0 = ["DISPO", "DISLS"];//6
                var Lot_Size_Values = ["LAGPR", "BSTRF", "BSTFE"];//7
                var Lot_Size_DYGRSPWI = ["LAGPR"];//8
                var Lot_Size_FS = ["BSTFE", "BSTRF"];//9
                var Lot_Size_FX = ["BSTFE"];//10
                var MRP_TYPE_VB = ["MABST", "DISPO", "DISLS", "MINBE"];//11
                var MRP_TYPE_PD = ["DISLS", "FHORI"];//12
                var MRP_Type_SABIC = ["DISLS", "LOSFX", "LAGPR", "FXHOR", "O_REORDER_POINT", "BSTRF", "BSTFE", "LAGPR", "O_MAX_INV_LEV", "FHORI", "DISPO"]
                var MRP_Type_All = ["DISLS", "LOSFX", "LAGPR", "FXHOR", "O_REORDER_POINT", "BSTRF", "BSTFE", "LAGPR", "O_MAX_INV_LEV", "FHORI", "BSTFE", "BSTRF", "MABST", "MINBE", "DISPO"];//13
                var MRP_Type_V = ["DISLS", "O_REORDER_POINT"];//14
                var Lot_Size_All = ["LAGPR", "BSTRF", "BSTFE", "O_MAX_INV_LEV", "FHORI", "BSTFE", "BSTRF", "MABST", "MINBE", "O_REORDER_POINT"];//13
                var MRP_Type_V2M = ["DISPO", "DISLS", "O_REORDER_POINT"];//15
                var MRP_TYPE_VVB = ["O_MAX_INV_LEV", "DISPO", "DISLS", "O_REORDER_POINT"];//16
                var Lot_Size_HZB5 = ["O_MAX_INV_LEV"];//17
                var MRP_TYPE_PD_FX = ["BSTFE"];//
                var MRP_TYPE_PD_HB = ["O_MAX_INV_LEV"];//    
                var MRP_TYPE_VB_EX = ["O_REORDER_POINT"];
                var MRP_TYPE_VB_FX = ["O_REORDER_POINT", "BSTFE"];//BSTFE
                var MRP_TYPE_VB_HB = ["O_REORDER_POINT", "O_MAX_INV_LEV"];//O_MAX_INV_LEV  ,BSTFE//O_REORDER_POINT   O_MAX_INV_LEV
                var MRP_TYPE_ZB_HB = ["O_REORDER_POINT", "O_MAX_INV_LEV"];
                var MRP_TYPE_UNM = ["O_MAX_INV_LEV", "BSTFE"];
                var MRP_TYPE_PD_EX = ["O_MAX_INV_LEV", "BSTFE", "O_REORDER_POINT"];//O_REORDER_POINT    BSTFE
                var MRP_TYPE_MAX_RED = ["O_REORDER_POINT", "O_MAX_INV_LEV"];
                var MRP_TYPE_MAX_LOT = ["O_REORDER_POINT", "BSTFE"];

                if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "")) {


                    for (var j = 0; j < MRP_Type_SABIC.length; j++) {

                        $("#" + MRP_Type_SABIC[j]).attr("data-mandatory", "O");
                        $("#" + MRP_Type_SABIC[j]).parent("th").prev().removeClass("labelMandColorRed");
                    }

                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "ND")) {


                    for (var j = 0; j < MRP_Type_SABIC.length; j++) {

                        $("#" + MRP_Type_SABIC[j]).attr("data-mandatory", "O");
                        $("#" + MRP_Type_SABIC[j]).parent("th").prev().removeClass("labelMandColorRed");
                    }

                } else if (dataFeild == "O_MRP_TYPE" && (($("#O_MRP_TYPE").val() == "VB") || ($("#O_MRP_TYPE").val() == "ZB")))
                {



                    for (var j = 0; j < MRP_TYPE_VVB.length; j++) {
                        $("#" + MRP_TYPE_VVB[j]).attr("data-mandatory", "M");
                        $("#" + MRP_TYPE_VVB[j]).parent("th").prev().addClass("labelMandColorRed");
                    }

                }



                if (dataFeild == "O_MRP_TYPE" && (($("#O_MRP_TYPE").val() == "V2") || ($("#O_MRP_TYPE").val() == "VM")))//V2 VM
                {
                    for (var j = 0; j < MRP_Type_V2M.length; j++) {
                        $("#" + MRP_Type_V2M[j]).attr("data-mandatory", "M");//M
                        $("#" + MRP_Type_V2M[j]).parent("th").prev().addClass("labelMandColorRed");
                    }
                }
                if (dataFeild == "O_MRP_TYPE" && (($("#O_MRP_TYPE").val() == "V1")))// V1
                {
                    for (var j = 0; j < MRP_Type_V.length; j++) {
                        $("#" + MRP_Type_V[j]).attr("data-mandatory", "M");//M
                        $("#" + MRP_Type_V[j]).parent("th").prev().addClass("labelMandColorRed");
                    }
                } else if (dataFeild == "DISMM" && ($("#DISMM").val() == "M0"))
                {
                    for (var j = 0; j < MRP_Type_M0.length; j++) {
                        $("#" + MRP_Type_M0[j]).attr("data-mandatory", "M");
                        $("#" + MRP_Type_M0[j]).parent("th").prev().addClass("labelMandColorRed");
                    }

                } else if (dataFeild == "DISMM" && (($("#DISMM").val() == "M1") || ($("#DISMM").val() == "M2") || ($("#DISMM").val() == "M3") || ($("#DISMM").val() == "M4") ||
                        ($("#DISMM").val() == "P1") || ($("#DISMM").val() == "P2") || ($("#DISMM").val() == "P3") || ($("#DISMM").val() == "P4")))//M1 M2 M3 M4 P1 P2 P3 P4
                {
                    for (var j = 0; j < MRP_Type_MP1234.length; j++) {
                        $("#" + MRP_Type_MP1234[j]).attr("data-mandatory", "M");
                        $("#" + MRP_Type_MP1234[j]).parent("th").prev().addClass("labelMandColorRed");
                    }

                } else if (dataFeild == "DISMM" && (($("#DISMM").val() == "V2") || ($("#DISMM").val() == "VM")))//V2 VM
                {
                    for (var j = 0; j < MRP_Type_V2BM.length; j++) {
                        $("#" + MRP_Type_V2BM[j]).attr("data-mandatory", "M");
                        $("#" + MRP_Type_V2BM[j]).parent("th").prev().addClass("labelMandColorRed");
                    }

                } else if (dataFeild == "DISMM" && ($("#DISMM").val() == "VB"))//VB
                {
                    for (var j = 0; j < MRP_TYPE_VB.length; j++) {
                        $("#" + MRP_TYPE_VB[j]).attr("data-mandatory", "M");
                        $("#" + MRP_TYPE_VB[j]).parent("th").prev().addClass("labelMandColorRed");
                    }

                } else if (dataFeild == "DISMM" && ($("#DISMM").val() == "V1"))//V1
                {
                    for (var j = 0; j < MRP_Type_V1.length; j++) {
                        $("#" + MRP_Type_V1[j]).attr("data-mandatory", "M");
                        $("#" + MRP_Type_V1[j]).parent("th").prev().addClass("labelMandColorRed");
                    }

                } else if (dataFeild == "DISMM" && ($("#DISMM").val() == "PD"))//PD
                {
                    for (var j = 0; j < MRP_TYPE_PD.length; j++) {
                        $("#" + MRP_TYPE_PD[j]).attr("data-mandatory", "M");
                        $("#" + MRP_TYPE_PD[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + MRP_TYPE_PD[j]).attr('readonly', false);
                    }

                } else if (dataFeild == "DISMM" && (($("#DISMM").val() == "VV") || ($("#DISMM").val() == "X0")))//VV X0
                {
                    for (var j = 0; j < MRP_Type_VVX0.length; j++) {
                        $("#" + MRP_Type_VVX0[j]).attr("data-mandatory", "M");
                        $("#" + MRP_Type_VVX0[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + MRP_Type_VVX0[j]).attr('readonly', false);
                    }

                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "PD"))//PD
                {
                    for (var j = 0; j < MRP_TYPE_PD.length; j++) {
                        $("#" + MRP_TYPE_PD[j]).attr("data-mandatory", "M");
                        $("#" + MRP_TYPE_PD[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + MRP_TYPE_PD[j]).attr('readonly', false);
                    }

                }




                if (dataFeild == "DISLS" && (($("#DISLS").val() == "DY") || ($("#DISLS").val() == "GR") || ($("#DISLS").val() == "SP") || ($("#DISLS").val() == "WI")))//DY GR SP WI
                {
                    for (var j = 0; j < Lot_Size_DYGRSPWI.length; j++) {
                        $("#" + Lot_Size_DYGRSPWI[j]).attr("data-mandatory", "O");//O
                        $("#" + Lot_Size_DYGRSPWI[j]).parent("th").prev().removeClass("labelMandColorRed");
                        $("#" + Lot_Size_DYGRSPWI[j]).attr('readonly', true);
                    }
                } else if (dataFeild == "DISLS" && ($("#DISLS").val() == "FS"))//FS
                {
                    for (var j = 0; j < Lot_Size_FS.length; j++) {
                        $("#" + Lot_Size_FS[j]).attr("data-mandatory", "M");//M
                        $("#" + Lot_Size_FS[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + Lot_Size_FS[j]).attr('readonly', false);
                    }
                } else if (dataFeild == "DISLS" && ($("#DISLS").val() == "FX"))//FX
                {
                    for (var j = 0; j < Lot_Size_FX.length; j++) {
                        $("#" + Lot_Size_FX[j]).attr("data-mandatory", "M");//M
                        $("#" + Lot_Size_FX[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + Lot_Size_FX[j]).attr('readonly', false);
                    }
                } else if (dataFeild == "DISLS" && (($("#DISLS").val() == "HB") || ($("#DISLS").val() == "ZH")))//HB ZH
                {
                    for (var j = 0; j < Lot_Size_HZB5.length; j++) {
                        $("#" + Lot_Size_HZB5[j]).attr("data-mandatory", "M");//M
                        $("#" + Lot_Size_HZB5[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + Lot_Size_HZB5[j]).attr('readonly', false);

                    }
                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "PD") && ($("#DISLS").val() == "FX"))//HB ZH PD_FX//MRP_TYPE_MAX_RED
                {
                    var MRP_TYPE_PD_FXO = ["O_MAX_INV_LEV", "O_REORDER_POINT"]
                    var MRP_TYPE_PD_FXM = ["BSTFE"]
                    for (var j = 0; j < MRP_TYPE_PD_FXO.length; j++) {
                        $("#" + MRP_TYPE_PD_FXO[j]).attr("data-mandatory", "O");//O
                        $("#" + MRP_TYPE_PD_FXO[j]).parent("th").prev().removeClass("labelMandColorRed");
                        $("#" + MRP_TYPE_PD_FXO[j]).attr('readonly', true);
                        $("#" + MRP_TYPE_PD_FXO[j]).val('');
                        $("#" + MRP_TYPE_PD_FXO[j]).addClass("visionInputDisable");
                    }
                    for (var j = 0; j < MRP_TYPE_PD_FXM.length; j++) {
                        $("#" + MRP_TYPE_PD_FXM[j]).attr("data-mandatory", "M");//M
                        $("#" + MRP_TYPE_PD_FXM[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + MRP_TYPE_PD_FXM[j]).attr('readonly', false);
                        $("#" + MRP_TYPE_PD_FXM[j]).removeClass("visionInputDisable");
                    }
                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "PD") && ($("#DISLS").val() == "EX"))//HB ZH PD_EX+++++++++++++++++
                {
                    var MRP_TYPE_PD_EXO = ["O_MAX_INV_LEV", "O_REORDER_POINT", "BSTFE"]

                    for (var j = 0; j < MRP_TYPE_PD_EXO.length; j++) {
                        $("#" + MRP_TYPE_PD_EXO[j]).attr("data-mandatory", "O");//O
                        $("#" + MRP_TYPE_PD_EXO[j]).parent("th").prev().removeClass("labelMandColorRed");
                        $("#" + MRP_TYPE_PD_EXO[j]).attr('readonly', true);
                        $("#" + MRP_TYPE_PD_EXO[j]).val('');
                        $("#" + MRP_TYPE_PD_EXO[j]).addClass("visionInputDisable");
                    }
                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "PD") && ($("#DISLS").val() == "HB"))//HB ZH PD_HB=====//O_REORDER_POINT    BSTFE//MRP_TYPE_MAX_LOT
                {
                    var MRP_TYPE_PD_HBO = ["BSTFE", "O_REORDER_POINT"]
                    var MRP_TYPE_PD_HBM = ["O_MAX_INV_LEV"]

                    for (var j = 0; j < MRP_TYPE_PD_HBO.length; j++) {
                        $("#" + MRP_TYPE_PD_HBO[j]).attr("data-mandatory", "O");//O
                        $("#" + MRP_TYPE_PD_HBO[j]).parent("th").prev().removeClass("labelMandColorRed");
                        $("#" + MRP_TYPE_PD_HBO[j]).attr('readonly', true);
                        $("#" + MRP_TYPE_PD_HBO[j]).val('');
                        $("#" + MRP_TYPE_PD_HBO[j]).addClass("visionInputDisable");
                    }
                    for (var j = 0; j < MRP_TYPE_PD_HBM.length; j++) {
                        $("#" + MRP_TYPE_PD_HBM[j]).attr("data-mandatory", "M");//M
                        $("#" + MRP_TYPE_PD_HBM[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + MRP_TYPE_PD_HBM[j]).attr('readonly', false);
                        $("#" + MRP_TYPE_PD_HBM[j]).removeClass("visionInputDisable");
                    }

                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "VB") && ($("#DISLS").val() == "EX"))//HB ZH VB_EX//
                {
                    var MRP_TYPE_VB_EXO = ["BSTFE", "O_MAX_INV_LEV"]
                    var MRP_TYPE_VB_EXM = ["O_REORDER_POINT"]

                    for (var j = 0; j < MRP_TYPE_VB_EXO.length; j++) {
                        $("#" + MRP_TYPE_VB_EXO[j]).attr("data-mandatory", "O");//O
                        $("#" + MRP_TYPE_VB_EXO[j]).parent("th").prev().removeClass("labelMandColorRed");
                        $("#" + MRP_TYPE_VB_EXO[j]).attr('readonly', true);
                        $("#" + MRP_TYPE_VB_EXO[j]).val('');
                        $("#" + MRP_TYPE_VB_EXO[j]).addClass("visionInputDisable");
                    }
                    for (var j = 0; j < MRP_TYPE_VB_EXM.length; j++) {
                        $("#" + MRP_TYPE_VB_EXM[j]).attr("data-mandatory", "M");//M
                        $("#" + MRP_TYPE_VB_EXM[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + MRP_TYPE_VB_EXM[j]).attr('readonly', false);
                        $("#" + MRP_TYPE_VB_EXM[j]).removeClass("visionInputDisable");
                    }

                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "VB") && ($("#DISLS").val() == "FX"))//HB ZH VB_FX-------------
                {
                    var MRP_TYPE_VB_FXO = ["O_MAX_INV_LEV"]
                    var MRP_TYPE_VB_FXM = ["O_REORDER_POINT", "BSTFE"]

                    for (var j = 0; j < MRP_TYPE_VB_FXO.length; j++) {
                        $("#" + MRP_TYPE_VB_FXO[j]).attr("data-mandatory", "O");//O
                        $("#" + MRP_TYPE_VB_FXO[j]).parent("th").prev().removeClass("labelMandColorRed");
                        $("#" + MRP_TYPE_VB_FXO[j]).attr('readonly', true);
                        $("#" + MRP_TYPE_VB_FXO[j]).val('');
                        $("#" + MRP_TYPE_VB_FXO[j]).addClass("visionInputDisable");
                    }
                    for (var j = 0; j < MRP_TYPE_VB_FXM.length; j++) {
                        $("#" + MRP_TYPE_VB_FXM[j]).attr("data-mandatory", "M");//M
                        $("#" + MRP_TYPE_VB_FXM[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + MRP_TYPE_VB_FXM[j]).attr('readonly', false);
                        $("#" + MRP_TYPE_VB_FXM[j]).removeClass("visionInputDisable");
                    }
                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "VB") && ($("#DISLS").val() == "HB"))//HB ZH VB_HB// && dataFeild == "DISLS"
                {
                    var MRP_TYPE_VB_HBO = ["BSTFE"]
                    var MRP_TYPE_VB_HBM = ["O_REORDER_POINT", "O_MAX_INV_LEV"]

                    for (var j = 0; j < MRP_TYPE_VB_HBO.length; j++) {
                        $("#" + MRP_TYPE_VB_HBO[j]).attr("data-mandatory", "O");//O
                        $("#" + MRP_TYPE_VB_HBO[j]).parent("th").prev().removeClass("labelMandColorRed");
                        $("#" + MRP_TYPE_VB_HBO[j]).attr('readonly', true);
                        $("#" + MRP_TYPE_VB_HBO[j]).val('');
                        $("#" + MRP_TYPE_VB_HBO[j]).addClass("visionInputDisable");
                    }
                    for (var j = 0; j < MRP_TYPE_VB_HBM.length; j++) {
                        $("#" + MRP_TYPE_VB_HBM[j]).attr("data-mandatory", "M");//M
                        $("#" + MRP_TYPE_VB_HBM[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + MRP_TYPE_VB_HBM[j]).attr('readonly', false);
                        $("#" + MRP_TYPE_VB_HBM[j]).removeClass("visionInputDisable");
                    }
                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "ZB") && ($("#DISLS").val() == "HB"))//HB ZH ZB_HB
                {
                    var MRP_TYPE_ZB_HBO = ["BSTFE"]
                    var MRP_TYPE_ZB_HBM = ["O_REORDER_POINT", "O_MAX_INV_LEV"]

                    for (var j = 0; j < MRP_TYPE_ZB_HBO.length; j++) {
                        $("#" + MRP_TYPE_ZB_HBO[j]).attr("data-mandatory", "O");//O
                        $("#" + MRP_TYPE_ZB_HBO[j]).parent("th").prev().removeClass("labelMandColorRed");
                        $("#" + MRP_TYPE_ZB_HBO[j]).attr('readonly', true);
                        $("#" + MRP_TYPE_ZB_HBO[j]).val('');
                        $("#" + MRP_TYPE_ZB_HBO[j]).addClass("visionInputDisable");
                    }
                    for (var j = 0; j < MRP_TYPE_ZB_HBM.length; j++) {
                        $("#" + MRP_TYPE_ZB_HBM[j]).attr("data-mandatory", "M");//M
                        $("#" + MRP_TYPE_ZB_HBM[j]).parent("th").prev().addClass("labelMandColorRed");
                        $("#" + MRP_TYPE_ZB_HBM[j]).attr('readonly', false);
                        $("#" + MRP_TYPE_ZB_HBM[j]).removeClass("visionInputDisable");
                    }
                } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "ND") && ($("#DISLS").val() == ""))//ND
                {
                    var MRP_TYPE_ND = ["O_REORDER_POINT", "O_MAX_INV_LEV", "BSTFE", "DISLS"]

                    for (var j = 0; j < MRP_TYPE_ND.length; j++) {
                        $("#" + MRP_TYPE_ND[j]).attr("data-mandatory", "O");//O
                        $("#" + MRP_TYPE_ND[j]).parent("th").prev().removeClass("labelMandColorRed");
                        $("#" + MRP_TYPE_ND[j]).attr('readonly', true);
                        $("#" + MRP_TYPE_ND[j]).val('');
                        $("#" + MRP_TYPE_ND[j]).addClass("visionInputDisable");
                    }
                }

                if (dataFeild == "REGIO" || dataFeild == "REGIO_DESCR") {
//                    $("#ddORT01").show();
//                    $("#ORT01").attr("readonly", true);
                    if ($("#LAND1").val() == "IN") {
                        $("#ddORT01").show();
//                        $("#ORT01").attr("disabled", true);
                        $("#ORT01").attr("readonly", true);
                    } else {
                        $("#ddORT01").hide();
//                        $("#ORT01").attr("disabled", false);
                        $("#ORT01").attr("readonly", false);
                    }
                }
                ////////////General Data
                if ($("#LAND1").val() != 'IN') {
                    $("#PSTLZ").attr('maxlength', '15');
                } else {
                    $("#PSTLZ").attr('maxlength', '6');
                }

                if (dataFeild == "BANK_STATE") {
                    if ($("#BANKS").val() == "IN") {
                        $("#ddBANK_ORT01").show();
//                        $("#BANK_ORT01").attr("disabled", true);
                        $("#BANK_ORT01").attr("readonly", true);
                    } else {
                        $("#ddBANK_ORT01").hide();
//                        $("#BANK_ORT01").attr("disabled", false);
                        $("#BANK_ORT01").attr("readonly", false);
                    }
                }
                if (dataFeild == "LAND1" && ($("#LAND1").val() != 'IN')) {
                    $("#PSTLZ").attr("data-regex", "^[a-zA-Z0-9 -]+$");
                    $("#PSTLZ").attr('maxlength', '15');
                    $("#TELF12").attr("data-regex", "^[0-9]{3,5}$");
                    $("#TELF13").attr("data-regex", "^[0-9]{1,15}$");
                    $("#TELF32").attr("data-regex", "^[0-9]{3,5}$");
                    $("#TELF33").attr("data-regex", "^[0-9]{1,15}$");
                    $("#TELF42").attr("data-regex", "^[0-9]{3,5}$");
                    $("#TELF43").attr("data-regex", "^[0-9]{1,15}$");
                    $("#TELF52").attr("data-regex", "^[0-9]{3,5}$");
                    $("#TELF53").attr("data-regex", "^[0-9]{1,15}$");
                    $("#TELF22").attr("data-regex", "^[0-9]{4,15}$");
                    $("#TELF_MOBILE22").attr("data-regex", "^[0-9]{4,15}$");
                    $("#TELF_MOBILE32").attr("data-regex", "^[0-9]{4,15}$");
                    $("#TELF_MOBILE42").attr("data-regex", "^[0-9]{4,15}$");
                    $("#TELM12").attr("data-regex", "^[0-9]{4,15}$");
                    $("#TELFX2").attr("data-regex", "^[0-9]{3,5}$");
                    $("#TELFX3").attr("data-regex", "^[0-9]{1,15}$");
                }
                if (dataFeild == "LAND1" && ($("#LAND1").val() == 'IN')) {
                    $("#PSTLZ").attr("data-regex", "^[1-9]{1}[0-9]{5}$");
                    $("#PSTLZ").attr('maxlength', '6');
                    $("#TELF12").attr("data-regex", "^[0-9]{2,4}$");
                    $("#TELF13").attr("data-regex", "^[0-9]{6,8}$");
                    $("#TELF22").attr("data-regex", "^[0-9]{2,4}$");
                    $("#TELF23").attr("data-regex", "^[0-9]{6,8}$");
                    $("#TELF32").attr("data-regex", "^[0-9]{2,4}$");
                    $("#TELF33").attr("data-regex", "^[0-9]{6,8}$");
                    $("#TELF42").attr("data-regex", "^[0-9]{2,4}$");
                    $("#TELF43").attr("data-regex", "^[0-9]{6,8}$");
                    $("#TELF22").attr("data-regex", "^[0-9]{10}$");
                    $("#TELF_MOBILE22").attr("data-regex", "^[0-9]{10}$");
                    $("#TELF_MOBILE32").attr("data-regex", "^[0-9]{10}$");
                    $("#TELF_MOBILE42").attr("data-regex", "^[0-9]{10}$");
                    $("#TELM12").attr("data-regex", "^[0-9]{10}$");
                    $("#TELFX2").attr("data-regex", "^[0-9]{2,4}$");
                    $("#TELFX3").attr("data-regex", "^[0-9]{6,8}$");
                }
                if (ddwId == "DDW_MM_DESCRIPTOR") {
                    getDescriptorImage();
                }
                /* updated by Ramu: Start*/
                // DDW_ROLES
                if (ddwId == "DDW_ROLES") {
                    var tempVal = $("#usr_rle").val();
                    if (tempVal.indexOf('VM_') > -1 || tempVal.indexOf('CM_') > -1) {
//                        $("#usr_InstanceTxt").attr("disabled", true);
//                        $("#usr_plntTxt").attr("disabled", true);
                        $("#usr_InstanceTxt").attr("readonly", true);
                        $("#usr_plntTxt").attr("readonly", true);
                        $("#ddBasicRegPlant").hide();
                        $("#ddBasicRegPlant").val("");
                        $(".visionBasicUserRegisterDataHide sup").hide();
                    } else {
//                        $("#usr_InstanceTxt").attr("disabled", true);
//                        $("#usr_plntTxt").attr("disabled", true);
                        $("#usr_InstanceTxt").attr("readonly", true);
                        $("#usr_plntTxt").attr("readonly", true);
                        $("#ddBasicRegPlant").show();
                        $(".visionBasicUserRegisterDataHide sup").show();
                    }
                }
                /* updated by Ramu: End*/
//                try {
//                    dependencyValueValidations(tableOrGridId, dataFeild, viewType, colValue);
//                } catch (e) {
//                }
                $("#dddw").dialog('close');
            } else {

                $('#ddGrid3').jqxGrid('selectrow', boundIndex);
            }

//            childDependacyChange(dataFeild);
            if ($(".lblMand" + dataFeild).css("display") != "none")
                psCount($("#dd" + dataFeild).attr("data-viewID"));
            if (dataFeild == 'RECORD_TYPE') {
                var recordType = $("#RECORD_TYPE").val();
                if (recordType == 'NLAG') {
                    $("#APC_CDE").val("N/A");
                    $("#APC_CDE").addClass("visionInputDisable");
                    $("#ddAPC_CDE").hide();
                } else {
                    $("#ddAPC_CDE").show();
                    $("#APC_CDE").removeClass("visionInputDisable");
                }


            }
            if (dataFeild == 'O_MRP_TYPE') {
                var recordType = $("#RECORD_TYPE").val();
                if (recordType == 'ERSA') {
                    onChangMrpValidation('O_MRP_TYPE');
                }
            }
            if (dataFeild == 'ALT_MEINH' && ($("#ALT_MEINH").val() == null || $("#ALT_MEINH").val() == ' ' || $("#ALT_MEINH").val() == '')) {
                var ALT_UOM = ["ALT_MEINH", "ALT_UMREZ", "ALT_UMREN"];

                for (var j = 0; j < ALT_UOM.length; j++) {
                    $("#" + ALT_UOM[j]).attr("data-mandatory", "O");//O
                    $("#" + ALT_UOM[j]).parent("th").prev().removeClass("labelMandColorRed");
                    $("#" + ALT_UOM[j]).attr('readonly', true);
                    $("#" + ALT_UOM[j]).addClass("visionInputDisable");
                    $("#" + ALT_UOM[j]).val('');
                }

            } else
            if (dataFeild == 'ALT_MEINH' && $("#ALT_MEINH").val() != null && $("#ALT_MEINH").val() != '') {
                var ALT_UOM = ["ALT_MEINH", "ALT_UMREZ", "ALT_UMREN"]

                for (var j = 0; j < ALT_UOM.length; j++) {
                    $("#" + ALT_UOM[j]).attr("data-mandatory", "M");//O
                    $("#" + ALT_UOM[j]).parent("th").prev().addClass("labelMandColorRed");
                    $("#" + ALT_UOM[j]).attr('readonly', false);
                    $("#" + ALT_UOM[j]).removeClass("visionInputDisable");
                }

            }



            if (dataFeild == 'BSTME' && ($("#BSTME").val() == null || $("#BSTME").val() == '' || $("#BSTME").val() == ' ')) {
                var PURCH_CUST_COL = ["PURCH_CUST_COLUMN5", "PURCH_CUST_COLUMN6"]

                for (var j = 0; j < PURCH_CUST_COL.length; j++) {
                    $("#" + PURCH_CUST_COL[j]).attr("data-mandatory", "O");//O
                    $("#" + PURCH_CUST_COL[j]).parent("th").prev().removeClass("labelMandColorRed");
                    $("#" + PURCH_CUST_COL[j]).attr('readonly', true);
                    $("#" + PURCH_CUST_COL[j]).val('');
                    $("#" + PURCH_CUST_COL[j]).addClass("visionInputDisable");
                }

            } else
            if (dataFeild == 'BSTME' && $("#BSTME").val() != null && $("#BSTME").val() != '' && $("#BSTME").val() != ' ') {
                var PURCH_CUST_COL = ["PURCH_CUST_COLUMN5", "PURCH_CUST_COLUMN6"];

                for (var j = 0; j < PURCH_CUST_COL.length; j++) {
                    $("#" + PURCH_CUST_COL[j]).attr("data-mandatory", "M");//O
                    $("#" + PURCH_CUST_COL[j]).parent("th").prev().addClass("labelMandColorRed");
                    $("#" + PURCH_CUST_COL[j]).attr('readonly', false);
                    $("#" + PURCH_CUST_COL[j]).removeClass("visionInputDisable");
                }

            }

            //$("#" + MRP_TYPE_ND[j]).val('');
            if (dataFeild == 'AUSME' && ($("#AUSME").val() == null || $("#AUSME").val() == '' || $("#AUSME").val() == ' ')) {
                var PURCH_CUST_COL = ["PURCH_CUST_COLUMN7", "PURCH_CUST_COLUMN8"]

                for (var j = 0; j < PURCH_CUST_COL.length; j++) {
                    $("#" + PURCH_CUST_COL[j]).attr("data-mandatory", "O");//O
                    $("#" + PURCH_CUST_COL[j]).parent("th").prev().removeClass("labelMandColorRed");
                    $("#" + PURCH_CUST_COL[j]).attr('readonly', true);
                    $("#" + PURCH_CUST_COL[j]).addClass("visionInputDisable");
                    $("#" + PURCH_CUST_COL[j]).val('');
                }

            } else
            if (dataFeild == 'AUSME' && $("#AUSME").val() != null && $("#AUSME").val() != '' && $("#AUSME").val() != ' ') {
                var PURCH_CUST_COL = ["PURCH_CUST_COLUMN7", "PURCH_CUST_COLUMN8"]

                for (var j = 0; j < PURCH_CUST_COL.length; j++) {
                    $("#" + PURCH_CUST_COL[j]).attr("data-mandatory", "M");//O
                    $("#" + PURCH_CUST_COL[j]).parent("th").prev().addClass("labelMandColorRed");
                    $("#" + PURCH_CUST_COL[j]).attr('readonly', false);
                    $("#" + PURCH_CUST_COL[j]).removeClass("visionInputDisable");
                }

            }

            if (propDependentValFlag != null && propDependentValFlag == 'Y') {
                //dataFeild
                var textValue = $("#" + dataFeild).text();
                if (textValue != null && textValue != '') {

                    var totalPropCount = $("#dd" + tbid).attr("data-totalprop");
                    if (totalPropCount != null && totalPropCount != 0) {
                        for (var i = 0; i < totalPropCount; i++) {
                            var propConceptId = $("#tdPROPERTY_CONCEPT_ID" + i).text();
                            if (propConceptId != null && textValue.indexOf(propConceptId) > -1) {
                                var propConceptIdStr1 = textValue.substring(textValue.indexOf(propConceptId));
                                if (propConceptIdStr1 != null && propConceptIdStr1 != '') {
                                    var selectedPropConceptIdStr = propConceptIdStr1;
                                    if (propConceptIdStr1.indexOf(",") > -1) {
                                        selectedPropConceptIdStr = propConceptIdStr1.substring(0, propConceptIdStr1.indexOf(","));
                                    }

                                    if (selectedPropConceptIdStr != null && selectedPropConceptIdStr != '') {
                                        var selectedPropConceptIdArray = selectedPropConceptIdStr.split(":");
                                        if (selectedPropConceptIdArray != null) {
//                                          tbPROPERTY_VALUE10
                                            if (selectedPropConceptIdArray[1] != null && selectedPropConceptIdArray[1] == 'N') {
                                                $("#tbPROPERTY_VALUE1" + i).attr("readonly", "readonly");
                                                $("#tbPROPERTY_VALUE1" + i).addClass("visionInputDisable");
//                                                $("#tbPROPERTY_VALUE1"+i).("readonly","readonly");
                                            } else {
                                                $("#tbPROPERTY_VALUE1" + i).removeAttr("readonly");
                                                $("#tbPROPERTY_VALUE1" + i).removeClass("visionInputDisable");
                                            }
                                            if (selectedPropConceptIdArray.length > 2) {
                                                if (selectedPropConceptIdArray[2] != null && selectedPropConceptIdArray[2] == 'M') {
                                                    $("#tdPROPERTY_NAME" + i).css("color", "red");
                                                    $("#tdREQUIRED_FLAG" + i).text("Y");
//                                                $("#tbPROPERTY_VALUE1"+i).("readonly","readonly");
                                                } else {
                                                    $("#tdREQUIRED_FLAG" + i).text("N");
                                                    $("#tdPROPERTY_NAME" + i).css("color", "");
                                                }
                                            }
                                        }
                                    }

                                }

                            }
                        }
                    }
                }
            }
            try {
                dependencyValueValidations(dataFeild, tableOrGridId, viewType, colValue, ChildfieldValueString);
            } catch (e) {
            }
        });


        $("#ddGrid3").bind('rowselect', function (event) {
            var indexes = $("#ddGrid3").jqxGrid('selectedrowindexes');

            if (indexes.length > 0) {

                $("#selectvlues").attr("disabled", false);
//                $("#selectvlues").attr("readonly", false);
            } else {
                $("#selectvlues").attr("disabled", true);
//                $("#selectvlues").attr("readonly", true);
            }
        });
        $("#ddGrid3").bind('rowunselect', function (event) {
            var indexes = $("#ddGrid3").jqxGrid('selectedrowindexes');
            if (indexes.length > 0) {

                $("#selectvlues").attr("disabled", false);
                //              $("#selectvlues").attr("readonly", false);
            } else {
                $("#selectvlues").attr("disabled", true);
//                $("#selectvlues").attr("readonly", true);
            }
        });

        $("#dddw").css("overflow", "hidden");
//$("#dddw").css("overflow", "auto"); 
        $("#dddw").dialog({resizable: true,
            title: labelObject['resultObj.dropDownTitle'] != null ? labelObject['resultObj.dropDownTitle'] : resultObj.dropDownTitle,
            modal: true,
            height: ddwheight,
            width: width,
            fluid: true,
            resize: function (event, ui) {
                var dialogWidth = ui.size.width;
                var gridWidtht = dialogWidth - 10;
                $("#dddw").css("width", gridWidtht);

//                $('#ddGrid3').jqxGrid('clearselection'); 
//                $("#ddGrid3").jqxGrid({width: gridWidtht});
//    $('#' + gridId).jqxGrid('clearfilters');
            },
            open: function () {
                $(this).closest(".ui-dialog").addClass("visionSearchDDDWDialog");
                try {
                    var ddwClearId = $('#ddwClearId').val();
                    if (initialClearFilterFlag != null && initialClearFilterFlag != ''
                            && initialClearFilterFlag == 'Y'
                            && ddwClearId != ddwId) {

                        $('#ddwClearId').val(ddwId);
                        $('#ddGrid3').jqxGrid('clearfilters');
                    }
                } catch (e) {
 
                }
                $(".ui-dialog").css("z-index", "999");
                $(".jqx-listbox-container").css("z-index", "999999");
                $(".ui-widget-overlay.ui-front").each(function () {
                    this.style.setProperty("z-index", "998", "important");
                });

//                $(".visionSearchDDDWDialog").css("z-index", "99999");
//                $(".visionSearchDDDWDialog").css("z-index", "99999");
            },
            beforeClose: function (event, ui)
            {
                $('#ddwClearId').val("");
                try {
                    $("#ddGrid3").jqxGrid("destroy");
                } catch (e) {
                }
                try {
                    $("#dddw").dialog("destroy");
                } catch (e) {
                }
                $("#dddw").html("");
//                $(".visionSearchDDDWDialog").css("z-index", "99999");
//                $(".visionSearchDDDWDialog").css("z-index", "99999");
            }
        });


    };
    var error = function (e) {
        //  (e.message)

        var meg = e.statusText;
        console.log("Error validation session::" + meg);
        var status = e.status;
        sessionTimeout(status);

    };

    var req = {};
    req.url = url;
    req.data = data;
    req.async = async;
    if (isWebServDdw) {
        req.type = "get";
    } else {
        req.type = "post";
    }
    req.success = success;
    req.error = error;
    $.ajax(req);

//    try {
//        $("#accordion").accordion({
//            collapsible: true,
//            heightStyle: "content",
//            active: false,
//            width: 300,
//            create: function (event, ui) {
//                var tempActiveIndex;
//                $(".ui-state-disabled").next("div").hide();
//            },
//            beforeActivate: function (event, ui)
//            {
//                tempActiveIndex = $("#accordion").accordion("option", "active");
//                $(".ui-state-disabled").next("div").hide();
//            },
//        });
//
//        var icons = $("#accordion").accordion("option", "icons");
//        $('.ui-accordion-header').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-corner-all').attr({
//            'aria-selected': 'false',
//            'tabindex': '-1'
//        });
//        $('.ui-accordion-header-icon').removeClass(icons.headerSelected).addClass(icons.header);
//        $('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({
//            'aria-expanded': 'false',
//            'aria-hidden': 'true'
//        }).hide();
//        //$(this).attr("disabled", "disabled");
//        $(".ui-accordion-header").removeClass("ui-state-disabled");
//        $('.collapseAll').hide();
//        $('.expandAll').show();
//        $('.expandAll').removeAttr("disabled");
//    } catch (e) {
//    }
}


function getDropDownSelectedRowsData() {

    var indexes = $("#ddGrid3").jqxGrid('selectedrowindexes');

    if (indexes.length > 0) {
        var selectedRowsData = [];
        for (var i = 0; i < indexes.length; i++) {
            var data = $("#ddGrid3").jqxGrid('getrowdata', indexes[i]);
            selectedRowsData.push(data);
        }
    }

    return selectedRowsData;

}

function clearFilters() {

    console.log("Clearing filters....");
    $('#ddGrid3').jqxGrid('clearfilters');

}
function clearSelection() {

    console.log("Clearing selection....");
    $('#ddGrid3').jqxGrid('clearselection');

}
//,'" + tableOrGridId + "'
function selectData(tbid, rowid, ddwId, tableOrGridId) {
    var viewType = $("#selectvlues").attr('data-viewType');
    var reqType = ($("#dxpAdavanceSearchOptions").val() !== undefined || $("#dxpAdavanceSearchOptions").val() !== '' ?
            ($("#dxpAdavanceSearchOptions").val()) : $("#floatingdxpAdavanceSearchOptions").val());
    console.log("tbid::" + tbid);
    console.log("Clearing selection....");

    console.log("clicked  selecteddata");
    var selectedData = getDropDownSelectedRowsData();
    console.log("renderobe:::" + $("#selectvlues").attr("data-renderer"));

    var renderingObe = JSON.parse($("#selectvlues").attr("data-renderer"));
    console.log('renderingObe::' + renderingObe);

    for (var i = 0; i < renderingObe.length; i++) {
        // console.log('renderingObe[i]::'+JSON.stringify(renderingObe[i]));
        var obj = renderingObe[i];
        var valuesString = "";
        if (selectedData.length > 1) {
            for (var j = 0; j < selectedData.length; j++) {
                try {
                    var dataObj = selectedData[j];
                    console.log("dataObj::" + JSON.stringify(dataObj));
                    console.log("parentfield::" + obj.PARENT_FIELD + ", dataObj::" + dataObj[obj.PARENT_FIELD]);

                    if (viewType == "SEARCH-VIEW") {
                        valuesString += "'" + dataObj[obj.PARENT_FIELD] + "'";
                    } else {
                        valuesString += dataObj[obj.PARENT_FIELD];
                    }
//                    

                    valuesString += ",";
                } catch (e) {
                }
            }
            if (valuesString.lastIndexOf(",") + 1 === valuesString.length) {

                valuesString = valuesString.substring(0, valuesString.lastIndexOf(","));
            }
        } else if (selectedData.length == 1) {
            var dataObj = selectedData[0];
            valuesString = dataObj[obj.PARENT_FIELD];
        }

        if (viewType == "GRID-VIEW")
        {
            try {
                $("#" + tableOrGridId).jqxGrid('setcellvalue', rowid, obj.CHILD_FIELD, valuesString);
            } catch (e) {

            }
            try {
                $("#" + tableOrGridId).jqxGrid('setcellvalue', rowid, tableOrGridId + "_" + obj.CHILD_FIELD, valuesString);
            } catch (e) {

            }

//            $("#" + obj.CHILD_TABLE).jqxGrid('setcellvalue', row, obj.CHILD_FIELD, valuesString);

            var index = $("#" + tableOrGridId).jqxGrid('getrowboundindexbyid', rowid);
//            var index = $("#" + obj.CHILD_TABLE).jqxGrid('getrowboundindexbyid', row);

            $("#" + tableOrGridId).jqxGrid('selectrow', index);
//            $("#" + obj.CHILD_TABLE).jqxGrid('selectrow', index);
        } else if (viewType == "FORM-VIEW") {
            var childFields = obj.CHILD_FIELD.split(",");

            for (var j = 0; j < childFields.length; j++)
            {
//                $("#" + childFields[j]).val(valuesString);
                //charts Dropdown
                if (tableOrGridId != null && tableOrGridId != '') {
                    $("#" + tableOrGridId + "_" + childFields[j]).val(valuesString);
                    $("#" + childFields[j]).val(valuesString);
                } else {
                    $("#" + childFields[j]).val(valuesString);
                }
                if (valuesString != null && valuesString.indexOf(',') > -1) {
                    $("#" + childFields[j]).val(valuesString);
                }

                //charts Dropdown
            }
        } else if (viewType == "SEARCH-VIEW") {
            //  alert("tbid::"+tbid);
            $("#" + tbid).val(valuesString);
            var InputValue = $("#" + tbid).val();
            var crossIconId = $("#" + tbid).next().attr("id");

            if (InputValue != "") {
                $("#" + crossIconId).show();
                paramsSearchClearData(tbid);
            } else {
                $("#" + crossIconId).hide();
            }

            try {
                var childFields = obj.CHILD_FIELD.split(",");

                for (var j = 0; j < childFields.length; j++)
                {
//                $("#" + childFields[j]).val(valuesString);
                    //charts Dropdown
                    if (tableOrGridId != null && tableOrGridId != '') {
                        $("#" + tableOrGridId + "_" + childFields[j]).val(valuesString);
                        $("#" + childFields[j]).val(valuesString);
                    } else {
                        $("#" + childFields[j]).val(valuesString);
                    }
                    if (valuesString != null && valuesString.indexOf(',') > -1) {
                        $("#" + childFields[j]).val(valuesString);
                    }

                    //charts Dropdown
                }
            } catch (e) {

            }

            if (valuesString.split(",").length > 1 && selectedData.length > 1)
            {
                //$("#ddw"+rowid).;   
//                $("#ddw" + rowid).val("IN");

                $("#" + reqType + "ddw" + rowid).val("IN");
                $("#operator" + tableOrGridId + rowid).val("IN");
                $("#operator" + tbid + rowid).val("IN");
                $("#ddw" + rowid).val("IN");
                try {
                    var childFields = obj.CHILD_FIELD.split(",");
                    for (var r = 0; r < childFields.length; r++)
                    {

                        $("#operator_" + tableOrGridId + "_" + childFields[j]).val("IN");

                    }
                } catch (r) {

                }
            }

        } else if (viewType == "TABLE-VIEW") {
            $("#" + tbid).val(valuesString);
        }
    }


    if (ddwId == "DDW_MM_DESCRIPTOR") {
        getDescriptorImage();

    }
    $("#dddw").dialog('close');
    $("#" + tbid).focus();


}

function getDescriptorImage() {
    var data = $('#CLASS_TERM').val();
    isValidDescriptor = true;
    var descriptor = $('#CLASS_TERM').val();
    var conceptId = $('#CONCEPT_ID').val();
    $('#RECORD_GROUP').val(getMaterialGroup(descriptor, conceptId));
//    $('#RECORD_GROUP').prop("disabled", true);
    $('#RECORD_GROUP').prop("readonly", true);
    $('.RECORD_GROUP').show();
//    $('#UOM').prop("disabled", true);
    $('#UOM').prop("readonly", true);
    $('#UOM').val(getUom(descriptor, conceptId));
//    $("#UOM").prop("disabled", true);
    $("#UOM").prop("readonly", true);
    $('.UOM').show();
    var url = "getDescriptorImg";
    var data = {};
    data.descriptor = descriptor,
            data.conceptId = conceptId;
    var async = false;
    var cache = false;
    var success = function (result) {
        //alert("result"+result);
        var data = JSON.parse(result);
        $('#descImage').attr('src', data.blobString);
        $('#descImage_0').attr('src', data.blobString);
        $('#img_td').css("display", "block");
    };
    var req = {};
    req.type = "POST";
    req.url = url;
    req.data = data;
    req.async = async;
    req.success = success;
    $.ajax(req);

    console.log("getDescriptorImg :::END ");
}
function getMaterialGroup(descriptor, conceptId)
{

    var matGroup = [];
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        async: false,
        url: 'getMaterialGroups',
        cache: false,
        data: {
            descriptor: descriptor,
            conceptId: conceptId,
        },
        success: function (result) {

            //  alert(result);
            if (typeof result != "undefined" && result != null && result != "") {
                var matGrparray = JSON.parse(result);



                // alert(matGrparray.data[0].col1);
                matGroup = [];
                if (matGrparray.data.length == 0) {
                    matGroup.push("");
                } else {
                    matGroup.push(matGrparray.data[0].col1);
                }

            }
        },
        error: function (e) {
            //  alert(e.message)
            sessionTimeout(e);
        }

    });

    console.log("BEFORE RETURN::: " + matGroup[0]);
    return matGroup[0];


}
function getUom(descriptor, conceptId) {


    var resultUom = "";

    var matUOM = [];
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        async: false,
        url: 'getUom',
        cache: false,
        data: {
            descriptor: descriptor,
            conceptId: conceptId,
        },
        success: function (result) {
            console.log(result);
            //alert(result);
            if (typeof result != "undefined" && result != null && result != "") {

                var UOMSObject = JSON.parse(result);

                var resultUom = UOMSObject.data;
                if (resultUom.length == 1) {
                    matUOM = [];
                    matUOM.push(resultUom[0].col1);
                }

//                else if(resultUom.length>1){
//           matUOM=[];
//           matUOM.push(resultUom[0].col1);
//       }

                else {
                    matUOM = [];
                    matUOM.push("");

                }

            }
        },
        error: function (e) {
            //  alert(e.message)
            sessionTimeout(e);
        }

    });

    console.log("BEFORE RETURN::: " + matUOM[0]);
    return matUOM[0];


}


function getDxpDropdownList(ddwId, dependParams, viewType, tableOrGridId, dataFeild, row, tbid, rowid, columnid, tblcolumns, propValueArray, propDependentValFlag) {
    showLoader();
    var labelObject = {};
    var topformData = {};
    var charOrpicMMLowercase = "";
    var giridDropDownList;
    var data_flag = event.target.dataset.flag;
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    try {
        var lasteditedfield = $('#' + tableOrGridId).attr('data-last-ed-field');
        var lasteditedrow = $('#' + tableOrGridId).attr('data-last-ed-row');
        $('#' + tableOrGridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
    } catch (e) {
    }

    try {
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

            if (textid != null && textid != 'CREATE_DATE') {
                topformData[textid] = textval;


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
                    topformData[columnsArray[i]] = hiddenVal;
                }

            }

        });
    } catch (eb) {
    }





    console.log("visionDropdown ::: ");
    var dependParamsObj = {};
    if (typeof dependParams != "undefined" && dependParams != null && dependParams != "")
    {
        var dependParamsArray = dependParams.split(",");
        for (var i = 0; i < dependParamsArray.length; i++)
        {
            var value = "";
            var dependParamfield = dependParamsArray[i];
            if (viewType == "FORM-VIEW")
            {

                value = $("#" + dependParamsArray[i]).val();

                if (!(value = null && value != '' && typeof value != "undefined" && value != "null")) {
                    value = topformData[dependParamsArray[i]];
                }

            } else if (viewType == "TABLE-VIEW")
            {

                if ($("#td" + dependParamsArray[i] + rowid).css('display') == 'none') {
                    value = $("#td" + dependParamsArray[i] + rowid).text();
                } else if ($("#td" + dependParamsArray[i] + rowid).find('input').length > 0)
                {
                    value = $("#tb" + dependParamsArray[i] + rowid).val();
                } else if ($("#td" + dependParamsArray[i]).length > 0) {
                    value = $("#td" + dependParamsArray[i] + rowid).text();
                } else if ($("#td" + dependParamsArray[i] + rowid).length > 0) {
                    console.log("******" + $("#td" + dependParamsArray[i] + rowid).length + "***");
                    value = $("#td" + dependParamsArray[i] + rowid).text();
                } else {
                    value = $("#" + dependParamsArray[i]).val();

                    if (!(value = null && value != '' && typeof value != "undefined" && value != "null")) {
                        value = topformData[dependParamsArray[i]];
                    }
                }

            } else {
                if (dependParamsArray[i] != null && dependParamsArray[i] != '' && dependParamsArray[i] == 'REFERENCE_TYPE')
                {
                    value = $("#" + tableOrGridId).jqxGrid('getcellvalue', row, 'REFERENCE_TYPE_DLOV');
                } else
                {
                    value = $("#" + tableOrGridId).jqxGrid('getcellvalue', row, dependParamsArray[i]);
                }

                if (typeof value == 'undefined') {
                    value = $("#" + dependParamsArray[i]).val();

                    if (!(value = null && value != '' && typeof value != "undefined" && value != "null")) {
                        value = topformData[dependParamsArray[i]];
                    }
                }

            }
            value = (value != null && typeof value != "undefined") ? value : "";
            dependParamsObj[dependParamsArray[i]] = value;
        }
    }
    alert(JSON.stringify(dependParamsObj));
    console.log("oRGN NAME:::" + $("#usr_orgid").val());
    var isWebServDdw = false;
    var divid = "dddw";
    var url = "genericDropDown";
    var data = {};
    var initialClearFilterFlag = "N";
    data.ddwId = ddwId;
    data.viewType = viewType;
    data.dependParams = JSON.stringify(dependParamsObj);
    data.orgnName = $("#usr_orgid").val();
    data.orgnId = $("#orgnId").val();
    data.gridId = tableOrGridId;
    data.searchId = $("#currentSpecSearchId").val();
    if (propValueArray != null) {
        data.propValueArray = JSON.stringify(propValueArray);
    }
    var async = false;
    var success = function (result) {

        alert("result:::" + result);
        var htmlbody = "";
        var resultObj = JSON.parse(result);
        var width;
        if (resultObj['ddwWidth'] != null && resultObj['ddwWidth'] != undefined && resultObj['ddwWidth'] != "") {
            width = resultObj['ddwWidth'];
        } else {
            width = 420;
        }

        if (resultObj['initialClearFilterFlag'] != null && resultObj['initialClearFilterFlag'] != undefined
                && resultObj['initialClearFilterFlag'] != "") {
            initialClearFilterFlag = resultObj['initialClearFilterFlag'];
        } else {
            initialClearFilterFlag = "N";
        }


        var selectColsShow = resultObj.selectCols;
        var defaultOrderClick = resultObj.defaultOrderBy;
        var localdata = resultObj.localdata;
        var datafields = resultObj.datafields;
        var columns = resultObj.columns;
        // alert(webservicedata.IS_WS_DDW);
        var webservicedata = resultObj.webservicedata;
//        alert(JSON.stringify(webservicedata));
        isWebServDdw = webservicedata.IS_WS_DDW;
        var gridConfigObj = {};
        gridConfigObj = resultObj.gridconfig;
        //alert("isWebServDdw ::: "+isWebServDdw);
        var requestparams = webservicedata.REQUEST_PARAMS;
        var webservUrl = webservicedata.WS_URL;
        var source = {};
        var Url = "";
        var dataObject = {};
        var filtervalue = "";

        if (data_flag == 'R') {
            $('#listDropDownInDiv').html("");
        } else {
            $('#listDropDownInUL').html("")
        }


        if (viewType == "GRID-VIEW") {
            filtervalue = $('#' + tableOrGridId).jqxGrid('getcellvalue', row, dataFeild);
        } else if (viewType == "FORM-VIEW") {
            if (data_flag == 'R') {
                filtervalue = $("#" + dataFeild).val();
            } else if (data_flag == 'E') {
                filtervalue = $("#" + dataFeild + data_flag).val();
            }
        } else if (viewType == "TABLE-VIEW") {
            filtervalue = $("#" + tbid).val();
        }
        if (filtervalue == null || filtervalue == "null" || typeof filtervalue == 'undefined')
        {
            filtervalue = "";
        }


        if (!jQuery.isEmptyObject(columns)) {
            var filtergroup = new $.jqx.filter();
            var filter_or_operator = 1;
            var filtercondition = 'contains';
            var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            for (var i = 0; i < columns.length; i++) {

                if (filtervalue != ""
                        && columns[i].hidden == false)
                {
                    columns[i].filter = function () {
                        filtergroup.addfilter(filter_or_operator, filter);
                        return filtergroup;
                    }();

                }
            }
        } else {
            var filtergroup = new $.jqx.filter();
            var filter_or_operator = 1;
            var filtercondition = 'contains';
            var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.addfilter(filter_or_operator, filter);
        }


        if (!webservicedata.IS_WS_UP && isWebServDdw) {

            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>" + (labelObject['Sorry, Webservice is Down'] != null ? labelObject['Sorry, Webservice is Down'] : 'Sorry, Webservice is Down') + "</div></div>");
            $("#logoutDailog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: "150",
                width: "350",
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }]
            });
            alert("returning false");
            return false;
        } else if (isWebServDdw && webservUrl != null && webservUrl != "" && typeof webservUrl != 'undefined')
        {
            if (webservicedata.IS_WS_UP) {
                if ((webservUrl).indexOf("<<") > -1) {
                    while (webservUrl.indexOf("<<") > -1) {
                        var conditionCol = (webservUrl.substring(webservUrl.indexOf("<<") + 2, webservUrl.indexOf(">>"))).trim();
                        if (conditionCol != null && conditionCol != "") {

                            if (viewType == "FORM-VIEW") {

                                var value = $("#" + conditionCol).val();
                                if (value != null && value.indexOf("#") > -1)
                                {

                                    value = value.replace(/[#]/g, "_");
                                }
                                webservUrl = webservUrl.replace("<<" + conditionCol + ">>", value != null ? value : "");
                            } else if (viewType == "TABLE-VIEW") {
                                if ($("#td" + conditionCol + rowid).find('input').length > 0)
                                {
                                    value = $("#tb" + conditionCol + rowid).val();
                                } else if ($("#td" + conditionCol + rowid).length > 0) {
                                    col = "#td" + conditionCol + rowid;
                                    value = $("#td" + conditionCol + rowid).text();
                                } else {
                                    col = "#" + conditionCol;
                                    value = $("#" + conditionCol).val();
                                }
                                value = $.trim(value);
                                if (value != null && value.indexOf("#") > -1)
                                {

                                    value = value.replace(/[#]/g, "_");
                                }
                                webservUrl = webservUrl.replace("<<" + conditionCol + ">>", value != null ? value : "");
                            } else {
                                var gridCellValue = "";
                                if (ddwId == "DDW_MM_PROPERTY_VALUE" && conditionCol == "CLASS_TERM")
                                    gridCellValue = $("#" + conditionCol).val();
                                else
                                    gridCellValue = $('#' + tableOrGridId).jqxGrid('getcellvalue', row, conditionCol);
                                if (gridCellValue != null && gridCellValue.indexOf("#") > -1)
                                {
                                    gridCellValue = gridCellValue.replace(/[#]/g, "_");
                                }
                                webservUrl = webservUrl.replace("<<" + conditionCol + ">>", gridCellValue != null ? gridCellValue : "");
                            }
                        }
                    }
                }
                dataObject = {};
                Url = webservUrl;
            }

        } else {
            Url = "getDropDownData";
            dataObject = {
                tableName: resultObj.tableName,
                condCols: JSON.stringify(resultObj.condCols),
                selectCols: JSON.stringify(resultObj.selectCols),
                staticCondition: resultObj.staticCondition,
                dropdownlistflag: 'Y'
            }
        }
        try {

            dataObject.sortcolumn = resultObj.defaultOrderBy;
            dataObject.sortdirection = 'asc';
            source = {
                type: 'POST',
                async: false,
                datatype: "json",
                data: dataObject,
                url: Url,
                cache: false,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                    showLoader();
                }, loadError: function (xhr, status, error) {
                    stopLoader();
                    throw new Error(error);
                }, loadComplete: function (data)
                {
//                setTimeout(function () {
//                    stopLoader();
//                }, 500)
//                try {
//                    if (initialClearFilterFlag != null && initialClearFilterFlag != ''
//                            && initialClearFilterFlag == 'Y') {
//                        $('#ddGrid3').jqxGrid('clearfilters');
//                    }
//                } catch (e) {
//
//                }
                },
                beforeprocessing: function (data) {
                    stopLoader();
                    if (!jQuery.isEmptyObject(data)) {
                        var htmlData = '';
                        if (data_flag == 'R') {
                            htmlData += '<ul class="list-group listDropDownInUL" id="listDropDownInUL">';
                        }
                        $.each(data, function (key, value) {
                            var htmlSpanData = '';
                            $.each(selectColsShow, function (key, val) {
                                var found_data = columns.filter(v => v.datafield === val && v.hidden == false);
                                if (!found_data.length == 0) {
                                    var dataval = '';
                                    if (value[val] != null && value[val] != '' && value[val] != undefined && value[val] != "null") {
                                        var dataval = value[val];
                                    }
                                    htmlSpanData += "<span class=\"listDropDownSpan\" data-col=\"" + val + "\" title=\"" + dataval + "\" data-arr=\"" + dataFeild + "\">" + dataval + "</span>";
                                } else {
                                    htmlSpanData += "<span class=\"listDropDownSpan\" data-col=\"" + val + "\" style='display:none'>" + dataval + "</span>";
                                }
                            });
                            $.each(value, function (key, val) {
                                var found_data = columns.filter(v => v.datafield === key && v.hidden == false);
                                if (found_data.length == 0) {
                                    var dataval = '';
                                    if (val != null && val != '' && val != undefined && val != "null") {
                                        var dataval = val;
                                    }
                                    htmlSpanData += "<span class=\"listDropDownSpan\" data-col=\"" + key + "\" style='display:none'>" + dataval + "</span>";
                                }
                            });
                            htmlData += "<li class=\"list-group-item listDropDownInliclass\">" + htmlSpanData + "</li>";
                        });
                        if (data_flag == 'R') {
                            htmlData += '</ul>';
                        }
                        if (data_flag == 'R') {
                            $('#listDropDownInDiv').remove();
                            $('#listDropDownInJquery').append("<div id=\"listDropDownInDiv\"></div>");
                            var title = "<div class=\"inputFlDropDown\" style=\"width:80%\"><div class=\"form-group-List has-search\"><span class=\"fa fa-search form-control-feedback\"></span>"
                                    + "<input type=\"text\" autocomplete=\"off\" data-flag=\"E\" id=\"" + dataFeild + "E\"  onkeyup=\"getDxpDropdownList('" + ddwId + "', '" + dependParams + "', '" + viewType + "', '" + tableOrGridId + "', '" + dataFeild + "', '" + row + "', '" + tbid + "', '" + rowid + "', '" + columnid + "', '" + tblcolumns + "', '" + propValueArray + "', '" + propDependentValFlag + "')\" class=\"form-control-list-search enterKeyDropDownInput\" placeholder=\"Search\"></div></div>"
                            $('#listDropDownInDiv').html(htmlData);
                            $('#listDropDownInDiv').jqxPopover({
                                width: 240,
                                height: 220,
                                showArrow: true,
                                showCloseButton: true,
                                selector: $('#' + dataFeild),
                                title: title
                            });
                            $("#listDropDownInDiv").jqxPopover('open');
                            $("#dxpContent").removeClass("dxpContentAccPageClass");
                        } else {
                            $('#listDropDownInUL').html(htmlData);
                        }
                        $('#listDropDownInUL li').click(function () {
                            event.stopPropagation();
                            var selectedData = {};
                            $(this).find('span').map(function () {
                                var dataCol = $(this).attr('data-col');
                                var text = $(this).text();
                                selectedData [dataCol] = text;
                            });
                            $("#listDropDownInDiv").jqxPopover('close');
                            setselectedData(ddwId, dependParams, viewType, tableOrGridId, dataFeild, row, tbid, rowid, columnid, tblcolumns,
                                    propValueArray, propDependentValFlag, resultObj, renderingObe, selectedData);
                        });

                        $(".enterKeyDropDownInput").keydown(function (e) {
                            event.stopPropagation();
                            if (e.keyCode == 13) {
                                $('.enterKeyDropDownInput').blur();
                                $('#listDropDownInUL').find("li:first").focus().addClass("backgrounddwlistactive");
                            }
                        });

                        var li = $('#listDropDownInUL > li');
                        var liSelected;
//                        $('#listDropDownInUL').keydown(function (e) {
                        $(document).keydown(function (e) {
                            var selected;
                            var keyCode = e.keyCode || e.which;
                            var arrow = {left: 37, up: 38, right: 39, down: 40};

                            switch (keyCode) {
                                case arrow.down:
                                    if (liSelected) {
                                        liSelected.removeClass('backgrounddwlistactive');
                                        next = liSelected.next();
                                        if (next.length > 0) {
                                            liSelected = next.addClass('backgrounddwlistactive');
                                            selected = next.text();
                                        } else {
                                            liSelected = li.eq(0).addClass('backgrounddwlistactive');
                                            selected = li.eq(0).text();
                                        }
                                    } else {
                                        liSelected = li.eq(0).addClass('backgrounddwlistactive');
                                        selected = li.eq(0).text();
                                    }
                                    break;

                                case arrow.up:
                                    if (liSelected) {
                                        liSelected.removeClass('backgrounddwlistactive');
                                        next = liSelected.prev();
                                        if (next.length > 0) {
                                            liSelected = next.addClass('backgrounddwlistactive');
                                            selected = next.text();
                                        } else {
                                            liSelected = li.last().addClass('backgrounddwlistactive');
                                            selected = li.last().text();
                                        }
                                    } else {
                                        liSelected = li.last().addClass('backgrounddwlistactive');
                                        selected = li.last().text();
                                    }
                                    break;
                            }

                            // Scroll the dropdown list if the selected item is outside the viewport
                            if (liSelected && $('#listDropDownInUL').length > 0) {
                                var dropdown = $('#listDropDownInUL');
                                var scrollTop = dropdown.scrollTop();
                                var viewportHeight = dropdown.height();
                                var itemTop = liSelected.position().top;
                                var itemHeight = liSelected.outerHeight();

                                if (itemTop < 0) {
                                    // Scroll up
                                    dropdown.scrollTop(scrollTop + itemTop);
                                } else if (itemTop + itemHeight > viewportHeight) {
                                    // Scroll down
                                    dropdown.scrollTop(scrollTop + itemTop + itemHeight - viewportHeight);
                                }
                            }
                            if (e.keyCode == 13) {
                                var selectedData = {};
                                $('#listDropDownInUL .backgrounddwlistactive').find('span').map(function () {
                                    var dataCol = $(this).attr('data-col');
                                    var text = $(this).text();
                                    selectedData [dataCol] = text;
                                    $("#listDropDownInDiv").jqxPopover('close');
                                    setselectedData(ddwId, dependParams, viewType, tableOrGridId, dataFeild, row, tbid, rowid, columnid, tblcolumns,
                                            propValueArray, propDependentValFlag, resultObj, renderingObe, selectedData);
                                });
                            }
                        });

                        try
                        {
                            $('#listDropDownInDiv').on('close', function (event) {
                                $("#dxpContent").addClass("dxpContentAccPageClass");
                            });
                        } catch (es) {

                        }

                    }

                },
            };
        } catch (e) {

        }


        var dataAdapter = new $.jqx.dataAdapter(source);
        var isExportable = true;
//        var gridConfigObj = {};
//        gridConfigObj = resultObj.gridconfig;
        if (dataFeild == '') {
            dataFeild = tbid;
        }
        //data-filtergridflag
        var filterGridFlag = $("#" + dataFeild).attr("data-filtergridflag");
        console.log("filterGridFlag:::" + filterGridFlag);
        console.log("resultObj.multiselectflag:::" + resultObj.multiselectflag);
        console.log("gridconfig.selectionmode:::" + gridConfigObj.selectionmode);
        //
        if (filterGridFlag != null && filterGridFlag != '' && filterGridFlag == 'Y'
                && viewType == 'FORM-VIEW') {
            var filterGridFlagCount = $("#" + dataFeild).attr("data-filtergridflag-count");

            console.log("filterGridFlagCount:::" + filterGridFlagCount);
            console.log("filterGridFlagCount:::" + filterGridFlagCount);
            var operatorId = "operator" + $("#dd" + dataFeild).attr("data-viewid") + filterGridFlagCount;
            console.log("operator id::" + operatorId)
            $("#" + operatorId).val("IN");
            //operatorMM_REFERENCE_ASSOCIATE5
            resultObj.multiselectflag = true;
            gridConfigObj.selectionmode = "checkbox";
        }
        gridConfigObj.source = dataAdapter;
        gridConfigObj.rendergridrows = function (obj) {
            return obj.data;
        };
        gridConfigObj.columns = columns;
        gridConfigObj.virtualmode = true;

        gridConfigObj.height = "100%";
        var renderingObe = resultObj.valueRenderArray;
        $("#dddw").empty();
        var dropDownHtml = "<div id='ddGrid3' style='display:none' ></div>";


        if (viewType == "SEARCH-VIEW" || viewType == "TABLE-VIEW")
        {
            for (var i = 0; i < gridConfigObj.columns.length; i++) {

                if ($.trim($("#" + tbid).val()) != ""
                        && gridConfigObj.columns[i].hidden == false)
                {

                    gridConfigObj.columns[i].filter = function () {
                        var filtergroup = new $.jqx.filter();
                        var filter_or_operator = 1;
                        var filtervalue = $("#" + tbid).val();
                        var filtercondition = 'contains';
                        var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
                        filtergroup.addfilter(filter_or_operator, filter);
                        return filtergroup;
                    }();
                    break;

                }
            }

        } else {

            gridConfigObj.columns[0].filter = function () {
                return filtergroup;
            }();

//        if (viewType == "GRID-VIEW") {
//            filtervalue = $('#' + tableOrGridId).jqxGrid('getcellvalue', row, dataFeild);
//        } else if (viewType == "FORM-VIEW") {
//            if (data_flag == 'R') {
//                filtervalue = $("#" + dataFeild).val();
//            } else if (data_flag == 'E') {
//                filtervalue = $("#" + dataFeild + data_flag).val();
//            }
//        } 
//        if (filtervalue == null || filtervalue == "null" || typeof filtervalue == 'undefined')
//        {
//            filtervalue = "";
//        } 
//        
//        filtervalue = filtervalue.trim();  
//        
//          for (var i = 0; i < gridConfigObj.columns.length; i++) {
//
//                if (filtervalue != ""
//                        && gridConfigObj.columns[i].hidden == false)
//                {
//
//                    gridConfigObj.columns[i].filter = function () {
//                        var filtergroup = new $.jqx.filter();
//                        var filter_or_operator = 1;
//                        var filtervalue = $("#" + tbid).val();
//                        var filtercondition = 'contains';
//                        var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
//                        filtergroup.addfilter(filter_or_operator, filter);
//                        return filtergroup;
//                    }();
//                    break;
//
//                }
//            }


        }
        for (var i = 0; i < gridConfigObj.columns.length; i++) {
            if (gridConfigObj.columns[i].rendered != null) {
                gridConfigObj.columns[i].rendered = eval('(' + gridConfigObj.columns[i].rendered + ')');
            }
        }

        $("#dddw").append(dropDownHtml);
        gridConfigObj.autoshowloadelement = false;
        //pagesizeoptions
        var pageNationSize = $("#DDWPageNationSize").val();
        if (pageNationSize != null && pageNationSize != '' && pageNationSize != undefined && pageNationSize != "null") {
            var pagesizeoptions = JSON.parse(pageNationSize);
            if (pagesizeoptions != null) {
                gridConfigObj.pagesizeoptions = pagesizeoptions;
                gridConfigObj.pagesize = pagesizeoptions[0];
            }
        } else {
            gridConfigObj.pagesizeoptions = [50, 100, 200, 500, 1000];
            gridConfigObj.pagesize = 100;
        }
        $("#ddGrid3").jqxGrid(gridConfigObj);
        $('#ddClear').on('click', function () {
            $('#ddGrid3').jqxGrid('clearfilters');
        });
        $('#ddGrid3').attr('data-childgrid', tableOrGridId);
        $('#ddGrid3').attr('data-childfield', dataFeild);
        $('#ddGrid3').attr('data-childrow', row);

    };
    var error = function (e) {
        //  (e.message)

        var meg = e.statusText;
        console.log("Error validation session::" + meg);
        var status = e.status;
        sessionTimeout(status);
    };
    var req = {};
    req.url = url;
    req.data = data;
    req.async = async;
    if (isWebServDdw) {
        req.type = "get";
    } else {
        req.type = "post";
    }
    req.success = success;
    req.error = error;
    $.ajax(req);
    return giridDropDownList;

}

function setselectedData(ddwId, dependParams, viewType, tableOrGridId, dataFeild, row, tbid, rowid, columnid, tblcolumns, propValueArray, propDependentValFlag, resultObj, renderingObe, selectedData) {


    try {
        var childRow = row;
        var childRowData = $('#' + tableOrGridId).jqxGrid('getrowdata', childRow);
        if (dataFeild == 'WITHT') {
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WITHT_I", "");
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WT_WITHCD", "");
        } else if (dataFeild == 'WITHT_I') {
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WITHT", "");
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WT_WITHCD", "");
        } else if (dataFeild == 'WITHT_I_TAX') {
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WITHT_TAX", "");
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WT_WITHCD_TAX", "");

        } else if (dataFeild == 'WITHT_TAX') {
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WITHT_I_TAX", "");
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "WT_WITHCD_TAX", "");

        }
        ////////////payment trasection
        else if (dataFeild == 'BANKA') {
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "BANKL", "");
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "BANKN", "");
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "BKONT", "");
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "BVTYP", "");
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "IBAN", "");
            $('#' + tableOrGridId).jqxGrid('setcellvalue', childRow, "KOINH", "");

        }

    } catch (e) {

    }

    if (!resultObj.multiselectflag) {

        alert(JSON.stringify(renderingObe));
        console.log(JSON.stringify(renderingObe));
        var ChildfieldValueString = "";
        for (var i = 0; i < renderingObe.length; i++) {
            var obj = renderingObe[i];
//                    alert("JSON Obj::::"+obj);
//                    alert("renderingObe[i] Obj::::"+JSON.stringify(renderingObe[i]));
//                    alert($('#ddGrid3').jqxGrid('getcellvalue', boundIndex, obj.PARENT_FIELD));
            var parentField = '';
            try {
                parentField = obj.PARENT_FIELD;
            } catch (e) {
                parentField = '';
            }

//                    var colValue = $('#ddGrid3').jqxGrid('getcellvalue', boundIndex, obj.PARENT_FIELD);
            var colValue = selectedData[parentField];
//                    alert("colValue::::"+colValue);
            if (colValue != null) {
                colValue = colValue.toString();
            }
//                          alert("colValue::::"+colValue);
            if (viewType == "GRID-VIEW")
            {
                try {
                    $("#" + tableOrGridId).jqxGrid('setcellvalue', row, obj.CHILD_FIELD, colValue);
                    ChildfieldValueString = ChildfieldValueString + ";" + childFields[j] + ":" + colValue;
                } catch (e) {
                }

//                        $("#" + obj.CHILD_TABLE).jqxGrid('setcellvalue', row, obj.CHILD_FIELD, colValue);
                var index = $("#" + tableOrGridId).jqxGrid('getrowboundindexbyid', row);
//                        var index = $("#" + obj.CHILD_TABLE).jqxGrid('getrowboundindexbyid', row);

                var hiddenCellVal = $("#" + tableOrGridId).jqxGrid('getcellvalue', 0, tableOrGridId + "_HIDDEN");
//                        var hiddenCellVal = $("#" + obj.CHILD_TABLE).jqxGrid('getcellvalue', 0, obj.CHILD_TABLE + "_HIDDEN");

                if (typeof hiddenCellVal != 'undefined' && hiddenCellVal != null && hiddenCellVal != "") {
                    if (hiddenCellVal.indexOf("INSERT") > -1) {
                        index = index - 1;
                    }
                }


                $("#" + tableOrGridId).jqxGrid('selectrow', index);
//                        $("#" + obj.CHILD_TABLE).jqxGrid('selectrow', index);
            } else if (viewType == "FORM-VIEW") {

                var childFields = obj.CHILD_FIELD.split(",");
//                        console.log("childFields::::" + childFields);
//                           alert(colValue+"::::");
                for (var j = 0; j < childFields.length; j++)
                {
                    if (childFields[j] != null) {
                        $("#" + childFields[j]).val(colValue);
                        $("#" + tableOrGridId + "_" + childFields[j]).val(colValue);
                        $("#" + childFields[j]).attr("value", colValue).trigger("change");
                        $("#" + tableOrGridId + "_TABLE_FORM_VIEW  #" + childFields[j]).val(colValue);
                        if (colValue != null && colValue.indexOf("REQUESTOR") > -1 && ddwId == "DDW_ROLES") {
                            $("#rpt_img").show();
                            $(".visionRegisterMandatory").show();

                            $("#usr_rlePrefixTxt").val(colValue.substr(0, 2) + "_APPROVER");
                        } else if (!(colValue != null && colValue.indexOf("REQUESTOR") > -1) && ddwId == "DDW_ROLES")
                        {
                            $("#rpt_img").hide();
                            $(".visionRegisterMandatory").hide();
                        }


                        if (colValue != null && colValue.indexOf("REQUESTOR") > -1 && ddwId.indexOf("_UM") > -1)
                        {
                            $("#reportTo").show();

                        } else {
                            $("#reportTo").hide();
                        }
                        var roleId = $("#ROLE_ID").val();
                        if (roleId != null && typeof roleId != 'undefined' && roleId.indexOf("_REQUESTOR") > -1)
                        {
                            if (colValue != null && colValue.indexOf("roleId") == -1)
                            {
                                $("#reportTo").show();
                            }
                        }

                        ChildfieldValueString = ChildfieldValueString + ";" + childFields[j] + ":" + colValue;

                    }
                    /// For Tech Mahindra PoC End
                }

            } else if (viewType == "SEARCH-VIEW") {
                $("#" + tbid).val(colValue);
            } else if (viewType == "TABLE-VIEW") {
//                        if (tbid != null && tbid.indexOf(obj.CHILD_FIELD) > -1) {
////                            $("#" + tbid).val(colValue);
//                            var charOrpicMMLowercase = $("#charOrpicMMLowercase").val();
//                            if (charOrpicMMLowercase != null && charOrpicMMLowercase != "undefined" && charOrpicMMLowercase != "" 
//                                    && charOrpicMMLowercase == "PROPERTY_UOM") {
//                                $("#" + tbid).css("text-transform", "none");
//                                $("#" + tbid).val(colValue);
//                            } else {
//                                $("#" + tbid).val(colValue);
//                            }
//
//                        }
                if (tbid != null && tbid.indexOf(obj.CHILD_FIELD) > -1) {
                    var subColumn = "tb" + obj.CHILD_FIELD;
                    if (subColumn != null && subColumn != '' && subColumn != undefined)
                    {
                        tableRowId = tbid.substr(subColumn.length, tbid.length);
                    }
//                            $("#" + tbid).val(colValue);
                    var charOrpicMMLowercase = $("#charOrpicMMLowercase").val();
                    if (charOrpicMMLowercase != null && charOrpicMMLowercase != "undefined" && charOrpicMMLowercase != ""
                            && charOrpicMMLowercase == "PROPERTY_UOM") {
                        $("#" + tbid).css("text-transform", "none");
                        $("#" + tbid).val(colValue);
                    } else {
                        $("#" + tbid).val(colValue);
                    }

                } else {
                    $("#tb" + obj.CHILD_FIELD + tableRowId).val(colValue);
                }
                if (dataFeild != null && dataFeild.indexOf(obj.CHILD_FIELD) > -1) {
                    if (dataFeild.indexOf("td") == 0 || dataFeild.indexOf("td") == 1) {
                        $("#" + dataFeild).text(colValue);
                    } else {
                        $("#" + dataFeild).val(colValue);
                    }

                }
                ChildfieldValueString = ChildfieldValueString + ";" + "tb" + obj.CHILD_FIELD + tableRowId + ":" + colValue;
            }

        }
        try {
            //childDependacyChange(dataFeild);
            childDependacyChange(dataFeild, colValue);
        } catch (e) {
        }



        var MRP_Type_M0 = ["DISPO", "DISLS"];//2
        var MRP_Type_MP1234 = ["DISPO", "DISLS", "FXHOR"];//3
        var MRP_Type_V1 = ["DISLS", "MINBE"];//4
        var MRP_Type_V2BM = ["DISPO", "DISLS", "MINBE"];//5
        var MRP_Type_VVX0 = ["DISPO", "DISLS"];//6
        var Lot_Size_Values = ["LAGPR", "BSTRF", "BSTFE"];//7
        var Lot_Size_DYGRSPWI = ["LAGPR"];//8
        var Lot_Size_FS = ["BSTFE", "BSTRF"];//9
        var Lot_Size_FX = ["BSTFE"];//10
        var MRP_TYPE_VB = ["MABST", "DISPO", "DISLS", "MINBE"];//11
        var MRP_TYPE_PD = ["DISLS", "FHORI"];//12
        var MRP_Type_SABIC = ["DISLS", "LOSFX", "LAGPR", "FXHOR", "O_REORDER_POINT", "BSTRF", "BSTFE", "LAGPR", "O_MAX_INV_LEV", "FHORI", "DISPO"]
        var MRP_Type_All = ["DISLS", "LOSFX", "LAGPR", "FXHOR", "O_REORDER_POINT", "BSTRF", "BSTFE", "LAGPR", "O_MAX_INV_LEV", "FHORI", "BSTFE", "BSTRF", "MABST", "MINBE", "DISPO"];//13
        var MRP_Type_V = ["DISLS", "O_REORDER_POINT"];//14
        var Lot_Size_All = ["LAGPR", "BSTRF", "BSTFE", "O_MAX_INV_LEV", "FHORI", "BSTFE", "BSTRF", "MABST", "MINBE", "O_REORDER_POINT"];//13
        var MRP_Type_V2M = ["DISPO", "DISLS", "O_REORDER_POINT"];//15
        var MRP_TYPE_VVB = ["O_MAX_INV_LEV", "DISPO", "DISLS", "O_REORDER_POINT"];//16
        var Lot_Size_HZB5 = ["O_MAX_INV_LEV"];//17
        var MRP_TYPE_PD_FX = ["BSTFE"];//
        var MRP_TYPE_PD_HB = ["O_MAX_INV_LEV"];//    
        var MRP_TYPE_VB_EX = ["O_REORDER_POINT"];
        var MRP_TYPE_VB_FX = ["O_REORDER_POINT", "BSTFE"];//BSTFE
        var MRP_TYPE_VB_HB = ["O_REORDER_POINT", "O_MAX_INV_LEV"];//O_MAX_INV_LEV  ,BSTFE//O_REORDER_POINT   O_MAX_INV_LEV
        var MRP_TYPE_ZB_HB = ["O_REORDER_POINT", "O_MAX_INV_LEV"];
        var MRP_TYPE_UNM = ["O_MAX_INV_LEV", "BSTFE"];
        var MRP_TYPE_PD_EX = ["O_MAX_INV_LEV", "BSTFE", "O_REORDER_POINT"];//O_REORDER_POINT    BSTFE
        var MRP_TYPE_MAX_RED = ["O_REORDER_POINT", "O_MAX_INV_LEV"];
        var MRP_TYPE_MAX_LOT = ["O_REORDER_POINT", "BSTFE"];

        if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "")) {


            for (var j = 0; j < MRP_Type_SABIC.length; j++) {

                $("#" + MRP_Type_SABIC[j]).attr("data-mandatory", "O");
                $("#" + MRP_Type_SABIC[j]).parent("th").prev().removeClass("labelMandColorRed");
            }

        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "ND")) {


            for (var j = 0; j < MRP_Type_SABIC.length; j++) {

                $("#" + MRP_Type_SABIC[j]).attr("data-mandatory", "O");
                $("#" + MRP_Type_SABIC[j]).parent("th").prev().removeClass("labelMandColorRed");
            }

        } else if (dataFeild == "O_MRP_TYPE" && (($("#O_MRP_TYPE").val() == "VB") || ($("#O_MRP_TYPE").val() == "ZB")))
        {



            for (var j = 0; j < MRP_TYPE_VVB.length; j++) {
                $("#" + MRP_TYPE_VVB[j]).attr("data-mandatory", "M");
                $("#" + MRP_TYPE_VVB[j]).parent("th").prev().addClass("labelMandColorRed");
            }

        }



        if (dataFeild == "O_MRP_TYPE" && (($("#O_MRP_TYPE").val() == "V2") || ($("#O_MRP_TYPE").val() == "VM")))//V2 VM
        {
            for (var j = 0; j < MRP_Type_V2M.length; j++) {
                $("#" + MRP_Type_V2M[j]).attr("data-mandatory", "M");//M
                $("#" + MRP_Type_V2M[j]).parent("th").prev().addClass("labelMandColorRed");
            }
        }
        if (dataFeild == "O_MRP_TYPE" && (($("#O_MRP_TYPE").val() == "V1")))// V1
        {
            for (var j = 0; j < MRP_Type_V.length; j++) {
                $("#" + MRP_Type_V[j]).attr("data-mandatory", "M");//M
                $("#" + MRP_Type_V[j]).parent("th").prev().addClass("labelMandColorRed");
            }
        } else if (dataFeild == "DISMM" && ($("#DISMM").val() == "M0"))
        {
            for (var j = 0; j < MRP_Type_M0.length; j++) {
                $("#" + MRP_Type_M0[j]).attr("data-mandatory", "M");
                $("#" + MRP_Type_M0[j]).parent("th").prev().addClass("labelMandColorRed");
            }

        } else if (dataFeild == "DISMM" && (($("#DISMM").val() == "M1") || ($("#DISMM").val() == "M2") || ($("#DISMM").val() == "M3") || ($("#DISMM").val() == "M4") ||
                ($("#DISMM").val() == "P1") || ($("#DISMM").val() == "P2") || ($("#DISMM").val() == "P3") || ($("#DISMM").val() == "P4")))//M1 M2 M3 M4 P1 P2 P3 P4
        {
            for (var j = 0; j < MRP_Type_MP1234.length; j++) {
                $("#" + MRP_Type_MP1234[j]).attr("data-mandatory", "M");
                $("#" + MRP_Type_MP1234[j]).parent("th").prev().addClass("labelMandColorRed");
            }

        } else if (dataFeild == "DISMM" && (($("#DISMM").val() == "V2") || ($("#DISMM").val() == "VM")))//V2 VM
        {
            for (var j = 0; j < MRP_Type_V2BM.length; j++) {
                $("#" + MRP_Type_V2BM[j]).attr("data-mandatory", "M");
                $("#" + MRP_Type_V2BM[j]).parent("th").prev().addClass("labelMandColorRed");
            }

        } else if (dataFeild == "DISMM" && ($("#DISMM").val() == "VB"))//VB
        {
            for (var j = 0; j < MRP_TYPE_VB.length; j++) {
                $("#" + MRP_TYPE_VB[j]).attr("data-mandatory", "M");
                $("#" + MRP_TYPE_VB[j]).parent("th").prev().addClass("labelMandColorRed");
            }

        } else if (dataFeild == "DISMM" && ($("#DISMM").val() == "V1"))//V1
        {
            for (var j = 0; j < MRP_Type_V1.length; j++) {
                $("#" + MRP_Type_V1[j]).attr("data-mandatory", "M");
                $("#" + MRP_Type_V1[j]).parent("th").prev().addClass("labelMandColorRed");
            }

        } else if (dataFeild == "DISMM" && ($("#DISMM").val() == "PD"))//PD
        {
            for (var j = 0; j < MRP_TYPE_PD.length; j++) {
                $("#" + MRP_TYPE_PD[j]).attr("data-mandatory", "M");
                $("#" + MRP_TYPE_PD[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + MRP_TYPE_PD[j]).attr('readonly', false);
            }

        } else if (dataFeild == "DISMM" && (($("#DISMM").val() == "VV") || ($("#DISMM").val() == "X0")))//VV X0
        {
            for (var j = 0; j < MRP_Type_VVX0.length; j++) {
                $("#" + MRP_Type_VVX0[j]).attr("data-mandatory", "M");
                $("#" + MRP_Type_VVX0[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + MRP_Type_VVX0[j]).attr('readonly', false);
            }

        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "PD"))//PD
        {
            for (var j = 0; j < MRP_TYPE_PD.length; j++) {
                $("#" + MRP_TYPE_PD[j]).attr("data-mandatory", "M");
                $("#" + MRP_TYPE_PD[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + MRP_TYPE_PD[j]).attr('readonly', false);
            }

        }




        if (dataFeild == "DISLS" && (($("#DISLS").val() == "DY") || ($("#DISLS").val() == "GR") || ($("#DISLS").val() == "SP") || ($("#DISLS").val() == "WI")))//DY GR SP WI
        {
            for (var j = 0; j < Lot_Size_DYGRSPWI.length; j++) {
                $("#" + Lot_Size_DYGRSPWI[j]).attr("data-mandatory", "O");//O
                $("#" + Lot_Size_DYGRSPWI[j]).parent("th").prev().removeClass("labelMandColorRed");
                $("#" + Lot_Size_DYGRSPWI[j]).attr('readonly', true);
            }
        } else if (dataFeild == "DISLS" && ($("#DISLS").val() == "FS"))//FS
        {
            for (var j = 0; j < Lot_Size_FS.length; j++) {
                $("#" + Lot_Size_FS[j]).attr("data-mandatory", "M");//M
                $("#" + Lot_Size_FS[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + Lot_Size_FS[j]).attr('readonly', false);
            }
        } else if (dataFeild == "DISLS" && ($("#DISLS").val() == "FX"))//FX
        {
            for (var j = 0; j < Lot_Size_FX.length; j++) {
                $("#" + Lot_Size_FX[j]).attr("data-mandatory", "M");//M
                $("#" + Lot_Size_FX[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + Lot_Size_FX[j]).attr('readonly', false);
            }
        } else if (dataFeild == "DISLS" && (($("#DISLS").val() == "HB") || ($("#DISLS").val() == "ZH")))//HB ZH
        {
            for (var j = 0; j < Lot_Size_HZB5.length; j++) {
                $("#" + Lot_Size_HZB5[j]).attr("data-mandatory", "M");//M
                $("#" + Lot_Size_HZB5[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + Lot_Size_HZB5[j]).attr('readonly', false);

            }
        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "PD") && ($("#DISLS").val() == "FX"))//HB ZH PD_FX//MRP_TYPE_MAX_RED
        {
            var MRP_TYPE_PD_FXO = ["O_MAX_INV_LEV", "O_REORDER_POINT"]
            var MRP_TYPE_PD_FXM = ["BSTFE"]
            for (var j = 0; j < MRP_TYPE_PD_FXO.length; j++) {
                $("#" + MRP_TYPE_PD_FXO[j]).attr("data-mandatory", "O");//O
                $("#" + MRP_TYPE_PD_FXO[j]).parent("th").prev().removeClass("labelMandColorRed");
                $("#" + MRP_TYPE_PD_FXO[j]).attr('readonly', true);
                $("#" + MRP_TYPE_PD_FXO[j]).val('');
                $("#" + MRP_TYPE_PD_FXO[j]).addClass("visionInputDisable");
            }
            for (var j = 0; j < MRP_TYPE_PD_FXM.length; j++) {
                $("#" + MRP_TYPE_PD_FXM[j]).attr("data-mandatory", "M");//M
                $("#" + MRP_TYPE_PD_FXM[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + MRP_TYPE_PD_FXM[j]).attr('readonly', false);
                $("#" + MRP_TYPE_PD_FXM[j]).removeClass("visionInputDisable");
            }
        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "PD") && ($("#DISLS").val() == "EX"))//HB ZH PD_EX+++++++++++++++++
        {
            var MRP_TYPE_PD_EXO = ["O_MAX_INV_LEV", "O_REORDER_POINT", "BSTFE"]

            for (var j = 0; j < MRP_TYPE_PD_EXO.length; j++) {
                $("#" + MRP_TYPE_PD_EXO[j]).attr("data-mandatory", "O");//O
                $("#" + MRP_TYPE_PD_EXO[j]).parent("th").prev().removeClass("labelMandColorRed");
                $("#" + MRP_TYPE_PD_EXO[j]).attr('readonly', true);
                $("#" + MRP_TYPE_PD_EXO[j]).val('');
                $("#" + MRP_TYPE_PD_EXO[j]).addClass("visionInputDisable");
            }
        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "PD") && ($("#DISLS").val() == "HB"))//HB ZH PD_HB=====//O_REORDER_POINT    BSTFE//MRP_TYPE_MAX_LOT
        {
            var MRP_TYPE_PD_HBO = ["BSTFE", "O_REORDER_POINT"]
            var MRP_TYPE_PD_HBM = ["O_MAX_INV_LEV"]

            for (var j = 0; j < MRP_TYPE_PD_HBO.length; j++) {
                $("#" + MRP_TYPE_PD_HBO[j]).attr("data-mandatory", "O");//O
                $("#" + MRP_TYPE_PD_HBO[j]).parent("th").prev().removeClass("labelMandColorRed");
                $("#" + MRP_TYPE_PD_HBO[j]).attr('readonly', true);
                $("#" + MRP_TYPE_PD_HBO[j]).val('');
                $("#" + MRP_TYPE_PD_HBO[j]).addClass("visionInputDisable");
            }
            for (var j = 0; j < MRP_TYPE_PD_HBM.length; j++) {
                $("#" + MRP_TYPE_PD_HBM[j]).attr("data-mandatory", "M");//M
                $("#" + MRP_TYPE_PD_HBM[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + MRP_TYPE_PD_HBM[j]).attr('readonly', false);
                $("#" + MRP_TYPE_PD_HBM[j]).removeClass("visionInputDisable");
            }

        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "VB") && ($("#DISLS").val() == "EX"))//HB ZH VB_EX//
        {
            var MRP_TYPE_VB_EXO = ["BSTFE", "O_MAX_INV_LEV"]
            var MRP_TYPE_VB_EXM = ["O_REORDER_POINT"]

            for (var j = 0; j < MRP_TYPE_VB_EXO.length; j++) {
                $("#" + MRP_TYPE_VB_EXO[j]).attr("data-mandatory", "O");//O
                $("#" + MRP_TYPE_VB_EXO[j]).parent("th").prev().removeClass("labelMandColorRed");
                $("#" + MRP_TYPE_VB_EXO[j]).attr('readonly', true);
                $("#" + MRP_TYPE_VB_EXO[j]).val('');
                $("#" + MRP_TYPE_VB_EXO[j]).addClass("visionInputDisable");
            }
            for (var j = 0; j < MRP_TYPE_VB_EXM.length; j++) {
                $("#" + MRP_TYPE_VB_EXM[j]).attr("data-mandatory", "M");//M
                $("#" + MRP_TYPE_VB_EXM[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + MRP_TYPE_VB_EXM[j]).attr('readonly', false);
                $("#" + MRP_TYPE_VB_EXM[j]).removeClass("visionInputDisable");
            }

        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "VB") && ($("#DISLS").val() == "FX"))//HB ZH VB_FX-------------
        {
            var MRP_TYPE_VB_FXO = ["O_MAX_INV_LEV"]
            var MRP_TYPE_VB_FXM = ["O_REORDER_POINT", "BSTFE"]

            for (var j = 0; j < MRP_TYPE_VB_FXO.length; j++) {
                $("#" + MRP_TYPE_VB_FXO[j]).attr("data-mandatory", "O");//O
                $("#" + MRP_TYPE_VB_FXO[j]).parent("th").prev().removeClass("labelMandColorRed");
                $("#" + MRP_TYPE_VB_FXO[j]).attr('readonly', true);
                $("#" + MRP_TYPE_VB_FXO[j]).val('');
                $("#" + MRP_TYPE_VB_FXO[j]).addClass("visionInputDisable");
            }
            for (var j = 0; j < MRP_TYPE_VB_FXM.length; j++) {
                $("#" + MRP_TYPE_VB_FXM[j]).attr("data-mandatory", "M");//M
                $("#" + MRP_TYPE_VB_FXM[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + MRP_TYPE_VB_FXM[j]).attr('readonly', false);
                $("#" + MRP_TYPE_VB_FXM[j]).removeClass("visionInputDisable");
            }
        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "VB") && ($("#DISLS").val() == "HB"))//HB ZH VB_HB// && dataFeild == "DISLS"
        {
            var MRP_TYPE_VB_HBO = ["BSTFE"]
            var MRP_TYPE_VB_HBM = ["O_REORDER_POINT", "O_MAX_INV_LEV"]

            for (var j = 0; j < MRP_TYPE_VB_HBO.length; j++) {
                $("#" + MRP_TYPE_VB_HBO[j]).attr("data-mandatory", "O");//O
                $("#" + MRP_TYPE_VB_HBO[j]).parent("th").prev().removeClass("labelMandColorRed");
                $("#" + MRP_TYPE_VB_HBO[j]).attr('readonly', true);
                $("#" + MRP_TYPE_VB_HBO[j]).val('');
                $("#" + MRP_TYPE_VB_HBO[j]).addClass("visionInputDisable");
            }
            for (var j = 0; j < MRP_TYPE_VB_HBM.length; j++) {
                $("#" + MRP_TYPE_VB_HBM[j]).attr("data-mandatory", "M");//M
                $("#" + MRP_TYPE_VB_HBM[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + MRP_TYPE_VB_HBM[j]).attr('readonly', false);
                $("#" + MRP_TYPE_VB_HBM[j]).removeClass("visionInputDisable");
            }
        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "ZB") && ($("#DISLS").val() == "HB"))//HB ZH ZB_HB
        {
            var MRP_TYPE_ZB_HBO = ["BSTFE"]
            var MRP_TYPE_ZB_HBM = ["O_REORDER_POINT", "O_MAX_INV_LEV"]

            for (var j = 0; j < MRP_TYPE_ZB_HBO.length; j++) {
                $("#" + MRP_TYPE_ZB_HBO[j]).attr("data-mandatory", "O");//O
                $("#" + MRP_TYPE_ZB_HBO[j]).parent("th").prev().removeClass("labelMandColorRed");
                $("#" + MRP_TYPE_ZB_HBO[j]).attr('readonly', true);
                $("#" + MRP_TYPE_ZB_HBO[j]).val('');
                $("#" + MRP_TYPE_ZB_HBO[j]).addClass("visionInputDisable");
            }
            for (var j = 0; j < MRP_TYPE_ZB_HBM.length; j++) {
                $("#" + MRP_TYPE_ZB_HBM[j]).attr("data-mandatory", "M");//M
                $("#" + MRP_TYPE_ZB_HBM[j]).parent("th").prev().addClass("labelMandColorRed");
                $("#" + MRP_TYPE_ZB_HBM[j]).attr('readonly', false);
                $("#" + MRP_TYPE_ZB_HBM[j]).removeClass("visionInputDisable");
            }
        } else if (dataFeild == "O_MRP_TYPE" && ($("#O_MRP_TYPE").val() == "ND") && ($("#DISLS").val() == ""))//ND
        {
            var MRP_TYPE_ND = ["O_REORDER_POINT", "O_MAX_INV_LEV", "BSTFE", "DISLS"]

            for (var j = 0; j < MRP_TYPE_ND.length; j++) {
                $("#" + MRP_TYPE_ND[j]).attr("data-mandatory", "O");//O
                $("#" + MRP_TYPE_ND[j]).parent("th").prev().removeClass("labelMandColorRed");
                $("#" + MRP_TYPE_ND[j]).attr('readonly', true);
                $("#" + MRP_TYPE_ND[j]).val('');
                $("#" + MRP_TYPE_ND[j]).addClass("visionInputDisable");
            }
        }

        if (dataFeild == "REGIO" || dataFeild == "REGIO_DESCR") {
//                    $("#ddORT01").show();
//                    $("#ORT01").attr("readonly", true);
            if ($("#LAND1").val() == "IN") {
                $("#ddORT01").show();
//                        $("#ORT01").attr("disabled", true);
                $("#ORT01").attr("readonly", true);
            } else {
                $("#ddORT01").hide();
//                        $("#ORT01").attr("disabled", false);
                $("#ORT01").attr("readonly", false);
            }
        }
        ////////////General Data
        if ($("#LAND1").val() != 'IN') {
            $("#PSTLZ").attr('maxlength', '15');
        } else {
            $("#PSTLZ").attr('maxlength', '6');
        }

        if (dataFeild == "BANK_STATE") {
            if ($("#BANKS").val() == "IN") {
                $("#ddBANK_ORT01").show();
//                        $("#BANK_ORT01").attr("disabled", true);
                $("#BANK_ORT01").attr("readonly", true);
            } else {
                $("#ddBANK_ORT01").hide();
//                        $("#BANK_ORT01").attr("disabled", false);
                $("#BANK_ORT01").attr("readonly", false);
            }
        }
        if (dataFeild == "LAND1" && ($("#LAND1").val() != 'IN')) {
            $("#PSTLZ").attr("data-regex", "^[a-zA-Z0-9 -]+$");
            $("#PSTLZ").attr('maxlength', '15');
            $("#TELF12").attr("data-regex", "^[0-9]{3,5}$");
            $("#TELF13").attr("data-regex", "^[0-9]{1,15}$");
            $("#TELF32").attr("data-regex", "^[0-9]{3,5}$");
            $("#TELF33").attr("data-regex", "^[0-9]{1,15}$");
            $("#TELF42").attr("data-regex", "^[0-9]{3,5}$");
            $("#TELF43").attr("data-regex", "^[0-9]{1,15}$");
            $("#TELF52").attr("data-regex", "^[0-9]{3,5}$");
            $("#TELF53").attr("data-regex", "^[0-9]{1,15}$");
            $("#TELF22").attr("data-regex", "^[0-9]{4,15}$");
            $("#TELF_MOBILE22").attr("data-regex", "^[0-9]{4,15}$");
            $("#TELF_MOBILE32").attr("data-regex", "^[0-9]{4,15}$");
            $("#TELF_MOBILE42").attr("data-regex", "^[0-9]{4,15}$");
            $("#TELM12").attr("data-regex", "^[0-9]{4,15}$");
            $("#TELFX2").attr("data-regex", "^[0-9]{3,5}$");
            $("#TELFX3").attr("data-regex", "^[0-9]{1,15}$");
        }
        if (dataFeild == "LAND1" && ($("#LAND1").val() == 'IN')) {
            $("#PSTLZ").attr("data-regex", "^[1-9]{1}[0-9]{5}$");
            $("#PSTLZ").attr('maxlength', '6');
            $("#TELF12").attr("data-regex", "^[0-9]{2,4}$");
            $("#TELF13").attr("data-regex", "^[0-9]{6,8}$");
            $("#TELF22").attr("data-regex", "^[0-9]{2,4}$");
            $("#TELF23").attr("data-regex", "^[0-9]{6,8}$");
            $("#TELF32").attr("data-regex", "^[0-9]{2,4}$");
            $("#TELF33").attr("data-regex", "^[0-9]{6,8}$");
            $("#TELF42").attr("data-regex", "^[0-9]{2,4}$");
            $("#TELF43").attr("data-regex", "^[0-9]{6,8}$");
            $("#TELF22").attr("data-regex", "^[0-9]{10}$");
            $("#TELF_MOBILE22").attr("data-regex", "^[0-9]{10}$");
            $("#TELF_MOBILE32").attr("data-regex", "^[0-9]{10}$");
            $("#TELF_MOBILE42").attr("data-regex", "^[0-9]{10}$");
            $("#TELM12").attr("data-regex", "^[0-9]{10}$");
            $("#TELFX2").attr("data-regex", "^[0-9]{2,4}$");
            $("#TELFX3").attr("data-regex", "^[0-9]{6,8}$");
        }
        if (ddwId == "DDW_MM_DESCRIPTOR") {
            getDescriptorImage();
        }
        /* updated by Ramu: Start*/
        // DDW_ROLES
        if (ddwId == "DDW_ROLES") {
            var tempVal = $("#usr_rle").val();
            if (tempVal.indexOf('VM_') > -1 || tempVal.indexOf('CM_') > -1) {
//                        $("#usr_InstanceTxt").attr("disabled", true);
//                        $("#usr_plntTxt").attr("disabled", true);
                $("#usr_InstanceTxt").attr("readonly", true);
                $("#usr_plntTxt").attr("readonly", true);
                $("#ddBasicRegPlant").hide();
                $("#ddBasicRegPlant").val("");
                $(".visionBasicUserRegisterDataHide sup").hide();
            } else {
//                        $("#usr_InstanceTxt").attr("disabled", true);
//                        $("#usr_plntTxt").attr("disabled", true);
                $("#usr_InstanceTxt").attr("readonly", true);
                $("#usr_plntTxt").attr("readonly", true);
                $("#ddBasicRegPlant").show();
                $(".visionBasicUserRegisterDataHide sup").show();
            }
        }
        /* updated by Ramu: End*/
//                try {
//                    dependencyValueValidations(tableOrGridId, dataFeild, viewType, colValue);
//                } catch (e) {
//                }
        $("#dddw").dialog('close');
    } else {

        $('#ddGrid3').jqxGrid('selectrow', boundIndex);
    }

//            childDependacyChange(dataFeild);
    if ($(".lblMand" + dataFeild).css("display") != "none")
        psCount($("#dd" + dataFeild).attr("data-viewID"));
    if (dataFeild == 'RECORD_TYPE') {
        var recordType = $("#RECORD_TYPE").val();
        if (recordType == 'NLAG') {
            $("#APC_CDE").val("N/A");
            $("#APC_CDE").addClass("visionInputDisable");
            $("#ddAPC_CDE").hide();
        } else {
            $("#ddAPC_CDE").show();
            $("#APC_CDE").removeClass("visionInputDisable");
        }


    }
    if (dataFeild == 'O_MRP_TYPE') {
        var recordType = $("#RECORD_TYPE").val();
        if (recordType == 'ERSA') {
            onChangMrpValidation('O_MRP_TYPE');
        }
    }
    if (dataFeild == 'ALT_MEINH' && ($("#ALT_MEINH").val() == null || $("#ALT_MEINH").val() == ' ' || $("#ALT_MEINH").val() == '')) {
        var ALT_UOM = ["ALT_MEINH", "ALT_UMREZ", "ALT_UMREN"];

        for (var j = 0; j < ALT_UOM.length; j++) {
            $("#" + ALT_UOM[j]).attr("data-mandatory", "O");//O
            $("#" + ALT_UOM[j]).parent("th").prev().removeClass("labelMandColorRed");
            $("#" + ALT_UOM[j]).attr('readonly', true);
            $("#" + ALT_UOM[j]).addClass("visionInputDisable");
            $("#" + ALT_UOM[j]).val('');
        }

    } else
    if (dataFeild == 'ALT_MEINH' && $("#ALT_MEINH").val() != null && $("#ALT_MEINH").val() != '') {
        var ALT_UOM = ["ALT_MEINH", "ALT_UMREZ", "ALT_UMREN"]

        for (var j = 0; j < ALT_UOM.length; j++) {
            $("#" + ALT_UOM[j]).attr("data-mandatory", "M");//O
            $("#" + ALT_UOM[j]).parent("th").prev().addClass("labelMandColorRed");
            $("#" + ALT_UOM[j]).attr('readonly', false);
            $("#" + ALT_UOM[j]).removeClass("visionInputDisable");
        }

    }



    if (dataFeild == 'BSTME' && ($("#BSTME").val() == null || $("#BSTME").val() == '' || $("#BSTME").val() == ' ')) {
        var PURCH_CUST_COL = ["PURCH_CUST_COLUMN5", "PURCH_CUST_COLUMN6"]

        for (var j = 0; j < PURCH_CUST_COL.length; j++) {
            $("#" + PURCH_CUST_COL[j]).attr("data-mandatory", "O");//O
            $("#" + PURCH_CUST_COL[j]).parent("th").prev().removeClass("labelMandColorRed");
            $("#" + PURCH_CUST_COL[j]).attr('readonly', true);
            $("#" + PURCH_CUST_COL[j]).val('');
            $("#" + PURCH_CUST_COL[j]).addClass("visionInputDisable");
        }

    } else
    if (dataFeild == 'BSTME' && $("#BSTME").val() != null && $("#BSTME").val() != '' && $("#BSTME").val() != ' ') {
        var PURCH_CUST_COL = ["PURCH_CUST_COLUMN5", "PURCH_CUST_COLUMN6"];

        for (var j = 0; j < PURCH_CUST_COL.length; j++) {
            $("#" + PURCH_CUST_COL[j]).attr("data-mandatory", "M");//O
            $("#" + PURCH_CUST_COL[j]).parent("th").prev().addClass("labelMandColorRed");
            $("#" + PURCH_CUST_COL[j]).attr('readonly', false);
            $("#" + PURCH_CUST_COL[j]).removeClass("visionInputDisable");
        }

    }

    //$("#" + MRP_TYPE_ND[j]).val('');
    if (dataFeild == 'AUSME' && ($("#AUSME").val() == null || $("#AUSME").val() == '' || $("#AUSME").val() == ' ')) {
        var PURCH_CUST_COL = ["PURCH_CUST_COLUMN7", "PURCH_CUST_COLUMN8"]

        for (var j = 0; j < PURCH_CUST_COL.length; j++) {
            $("#" + PURCH_CUST_COL[j]).attr("data-mandatory", "O");//O
            $("#" + PURCH_CUST_COL[j]).parent("th").prev().removeClass("labelMandColorRed");
            $("#" + PURCH_CUST_COL[j]).attr('readonly', true);
            $("#" + PURCH_CUST_COL[j]).addClass("visionInputDisable");
            $("#" + PURCH_CUST_COL[j]).val('');
        }

    } else
    if (dataFeild == 'AUSME' && $("#AUSME").val() != null && $("#AUSME").val() != '' && $("#AUSME").val() != ' ') {
        var PURCH_CUST_COL = ["PURCH_CUST_COLUMN7", "PURCH_CUST_COLUMN8"]

        for (var j = 0; j < PURCH_CUST_COL.length; j++) {
            $("#" + PURCH_CUST_COL[j]).attr("data-mandatory", "M");//O
            $("#" + PURCH_CUST_COL[j]).parent("th").prev().addClass("labelMandColorRed");
            $("#" + PURCH_CUST_COL[j]).attr('readonly', false);
            $("#" + PURCH_CUST_COL[j]).removeClass("visionInputDisable");
        }

    }

    if (propDependentValFlag != null && propDependentValFlag == 'Y') {
        //dataFeild
        var textValue = $("#" + dataFeild).text();
        if (textValue != null && textValue != '') {

            var totalPropCount = $("#dd" + tbid).attr("data-totalprop");
            if (totalPropCount != null && totalPropCount != 0) {
                for (var i = 0; i < totalPropCount; i++) {
                    var propConceptId = $("#tdPROPERTY_CONCEPT_ID" + i).text();
                    if (propConceptId != null && textValue.indexOf(propConceptId) > -1) {
                        var propConceptIdStr1 = textValue.substring(textValue.indexOf(propConceptId));
                        if (propConceptIdStr1 != null && propConceptIdStr1 != '') {
                            var selectedPropConceptIdStr = propConceptIdStr1;
                            if (propConceptIdStr1.indexOf(",") > -1) {
                                selectedPropConceptIdStr = propConceptIdStr1.substring(0, propConceptIdStr1.indexOf(","));
                            }

                            if (selectedPropConceptIdStr != null && selectedPropConceptIdStr != '') {
                                var selectedPropConceptIdArray = selectedPropConceptIdStr.split(":");
                                if (selectedPropConceptIdArray != null) {
//                                          tbPROPERTY_VALUE10
                                    if (selectedPropConceptIdArray[1] != null && selectedPropConceptIdArray[1] == 'N') {
                                        $("#tbPROPERTY_VALUE1" + i).attr("readonly", "readonly");
                                        $("#tbPROPERTY_VALUE1" + i).addClass("visionInputDisable");
//                                                $("#tbPROPERTY_VALUE1"+i).("readonly","readonly");
                                    } else {
                                        $("#tbPROPERTY_VALUE1" + i).removeAttr("readonly");
                                        $("#tbPROPERTY_VALUE1" + i).removeClass("visionInputDisable");
                                    }
                                    if (selectedPropConceptIdArray.length > 2) {
                                        if (selectedPropConceptIdArray[2] != null && selectedPropConceptIdArray[2] == 'M') {
                                            $("#tdPROPERTY_NAME" + i).css("color", "red");
                                            $("#tdREQUIRED_FLAG" + i).text("Y");
//                                                $("#tbPROPERTY_VALUE1"+i).("readonly","readonly");
                                        } else {
                                            $("#tdREQUIRED_FLAG" + i).text("N");
                                            $("#tdPROPERTY_NAME" + i).css("color", "");
                                        }
                                    }
                                }
                            }

                        }

                    }
                }
            }
        }
    }
    try {
        dependencyValueValidations(dataFeild, tableOrGridId, viewType, colValue, ChildfieldValueString);
    } catch (e) {
    }

}

