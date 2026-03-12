/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var windowHeight;
var pageHeight;
var pageOperations;
var gridHeight;
var gridHeightInner;
var tabHeightInner;
var buttonGroups = "";
var $pageBodycontainer;
var pageBodycontinerPadding;
var TabExcelStatus;
var pageOperations1;
var gridMainHeight;
var allGridColumns = {};
var staticFormFlag = "";
var labelObject = {};
var masterGridSelectedIndexes = [];
var masterGrid;
var childOldData = {};
//var gridColumns = {};
var tableNames = {};
var masterGridOldData = [];
var childGrid2SelectedIndexes = [];
var childGrid2SelectedTabIndexes = [];
var childGrid3SelectedIndexes = [];
var childGrid3SelectedTabIndexes = [];
var childGrid4SelectedIndexes = [];
var timeout;
Array.prototype.last = function () {
    return this[this.length - 1];
}
Array.prototype.clear = function () {
    this.splice(0, this.length);
};


try {
    labelObject = JSON.parse($("#labelObjectHidden").val());
} catch (e) {

}
try {
    if ($("#labelObjectHidden").val() != null && $("#labelObjectHidden").val() != '' && $("#labelObjectHidden").val() != undefined) {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    }
} catch (e) {

}
$(function () {
    $(window).resize(function ()
    {
        screenHeight = screen.height;
        windowHeight = $(window).height();
        pageHeight = $(".visionHeader").height() + $(".visionFooterMain").height() + $(".visionBreadcrumMain").height();
        pageOperations = $(".visionGenericTabSubmit").outerHeight(true) > 0 ? $(".visionGenericTabSubmit").outerHeight(true) : "0";
        pageOperations1 = $(".visionGenericTabExport").outerHeight(true) > 0 ? $(".visionGenericTabExport").outerHeight(true) : "0";
        pageOperations = pageOperations >= pageOperations1 ? pageOperations : pageOperations1;
        $pageBodycontainer = $('.visionBodyContent');
        pageBodycontinerPadding = parseInt($pageBodycontainer.css('padding-top')) + parseInt($pageBodycontainer.css('padding-bottom'));
        gridHeight = windowHeight - pageHeight - pageOperations - pageBodycontinerPadding - 5;
//                        if (parseInt(screenHeight) >= 769) {
//                            gridHeight = windowHeight - pageHeight - pageOperations - pageBodycontinerPadding - 200;
//                            console.log("screen height is::::864:::" + screenHeight);
//                        } else {
//                            gridHeight = windowHeight - pageHeight - pageOperations - pageBodycontinerPadding - 150;
//                            console.log("screen height is::::768:::" + screenHeight);
//                        }
        gridHeightInner = gridHeight - $(".visionGenericTabGrid .jqx-tabs-headerWrapper").outerHeight(true);
        gridMainHeight = gridHeightInner - $(".visionGenericTabGrid .jqx-tabs-headerWrapper").outerHeight(true);
    }).resize();

    var levelTabIdHeight = $("#levelTabId").height();
    var visionClusterSpliterMainHeight = $("#visionClusterSpliterMain").height();
    var levelTabIdHeight = $("#levelTabId").height();
    var visionClusterSpliterMainHeight = $("#visionClusterSpliterMain").height();
    var pageHeight = $(".visionHeader").height() + $(".visionFooterMain").height() + $(".visionBreadcrumMain").height();
    var splitterHeight = (parseInt($(window).height()) - parseInt(pageHeight));
//console.log("visionClusterSpliterMainHeight:::"+visionClusterSpliterMainHeight);
//console.log("pageHeight:::"+pageHeight);
//console.log("splitterHeight:::"+pageHeight);
//console.log("parseInt($(window).height():::"+parseInt($(window).height()));
    var splitterWidth = parseInt($(window).width()) - 80;
    try {
        $('#clusterSplitter').jqxSplitter({width: '100%',
            height: parseInt(splitterHeight),
            orientation: 'horizontal',
            theme: 'energyblue',
            panels: [{size: '50%', min: 150, resizable: true},
                {size: '50%', resizable: true, min: 150}]});

    } catch (e) {

    }



//    $('#clusterSplitter').on('resize', function (event) {
//
//        var firstPanelGridId = $('#currentSelectMasterGridId').val();
//        console.log("firstPanelGridId" + firstPanelGridId);
//        if ($('#' + firstPanelGridId + "_ACCORDIAN")[0] != null) {
//            $('#' + firstPanelGridId + "_ACCORDIAN").animate({scrollTop: $('#' + firstPanelGridId + "_ACCORDIAN")[0].scrollHeight}, 2000);
//            var parentPanelHeight = event.args.panels[0].size;
//            var gridHeight = $("#" + firstPanelGridId).jqxGrid("height");
//            $("#" + firstPanelGridId).jqxGrid("height", (parseInt(parentPanelHeight) - 50) + "px");
//
//
//        }
//        $(".visionClusterTableFormDiv").css("height", (parseInt(event.args.panels[1].size)) + "px");
//        $(".visionTableFormstickyHeader").css("height", (parseInt(event.args.panels[1].size) - 90) + "px");
//        $(".visionTableFormstickyHeader").css("overflow-y", "scroll");
//    });

    $('#clusterSplitter').on('resize', function (event) {

        var firstPanelGridId = $('#currentSelectMasterGridId').val();
        console.log("firstPanelGridId" + firstPanelGridId);
        if ($('#' + firstPanelGridId + "_ACCORDIAN")[0] != null) {
            $('#' + firstPanelGridId + "_ACCORDIAN").animate({scrollTop: $('#' + firstPanelGridId + "_ACCORDIAN")[0].scrollHeight}, 2000);
            var parentPanelHeight = event.args.panels[0].size;
            var gridHeight = $("#" + firstPanelGridId).jqxGrid("height");
            $("#" + firstPanelGridId).jqxGrid("height", (parseInt(parentPanelHeight) - 50) + "px");


        }
        if (event.args != null) {
            $(".visionClusterTableFormDiv").css("height", (parseInt(event.args.panels[1].size)) + "px");
            $(".visionTableFormstickyHeader").css("height", (parseInt(event.args.panels[1].size) - 90) + "px");
        }
        $(".visionTableFormstickyHeader").css("overflow-y", "scroll");
    });

});
function clusterGridConfig(gridResultObj, masterGridId, tabId, selectedGridCompType, isMaster, paramArray, relationId, selectedMasterData, clusterFormFlag) {
    try {
        showLoader();
        console.log(":293::gridConfig::");
        tabId = tabId + "_TAB";
        var length = '';
        try {
            length = $("#" + tabId).jqxTabs('length');
        } catch (e) {
        }
        if (length >= 1) {
            try {
                $("#" + gridResultObj['gridId']).jqxGrid("destroy");
                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
                // $(".jqx-clear .jqx-border-reset .jqx-overflow-hidden .jqx-max-size .jqx-position-relative").remove();
            } catch (e) {
            }
            $("#" + gridResultObj['gridId']).remove();
            console.log(gridResultObj['gridId'] + ":::::$(gridResultObj['gridId']).length::::::" + $("#" + gridResultObj['gridId']).length);
            if ($("#" + gridResultObj['gridId']).length == 0) {

                $("#" + gridResultObj['gridId'] + "_DIV_" + selectedGridCompType).html("<div id='" + gridResultObj['gridId'] + "'></div>");

            }
        }


        try {
            // if(true) {
            try {
//            $('#' + gridId).jqxGrid('updatebounddata');
                $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata');
//            $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'cells');
                $("#" + gridResultObj['gridId']).jqxGrid('clearfilters');
            } catch (e) {

            }

            // $("#" + gridResultObj['gridId']).jqxGrid('destroy');
            var selectedItem = $("#" + tabId).jqxTabs("selectedItem") + 1;
            try {
                var defalultImg = $("#" + tabId + " ul li:nth-child(" + selectedItem + ")").find('img').attr('src');
                if (defalultImg != null) {
                    var n = defalultImg.indexOf("_white");
                    if (!(n > -1)) {
                        var mainnewimage = defalultImg.replace(".png", "").replace(/_white/g, "");
                        var attributes = $("#" + tabId + " ul li:nth-child(" + selectedItem + ")").attr("id");
                        $("#" + attributes).find('img').attr('src', mainnewimage + '_white.png');
                    }
                }
            } catch (en) {

            }





            if (gridResultObj != null) {

                //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
                var hrefObj = {}; //hrefObj
                hrefObj = gridResultObj['hrefObj'];
                $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
                $("#" + gridResultObj['gridId'] + "_hrefColumn").remove();
                $("#" + gridResultObj['gridId'] + "_linkedColumns").remove();
                $("#" + gridResultObj['gridId'] + "_stripValue").remove();
                $("#" + gridResultObj['gridId'] + "_imageColumn").remove();
                $("#" + gridResultObj['gridId'] + "_imageTable").remove();
                $("#" + gridResultObj['gridId'] + "_imageTableColumn").remove();
                $("#" + gridResultObj['gridId'] + "_hiddenObj").remove();
                $("#" + gridResultObj['gridId'] + "_formId").remove();
                $("#" + gridResultObj['gridId'] + "_panelId").remove();
                $("#" + gridResultObj['gridId'] + "_columnInitParams").remove();
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_hrefColumn'/>");
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_linkedColumns'/>");
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_stripValue'/>");
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_imageColumn'/>");
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_imageTable'/>");
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_imageTableColumn'/>");
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_hiddenObj'/>");
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_formId'/>");
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_panelId'/>");
                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_columnInitParams'/>");

//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
                $("#linkedColumns").val(hrefObj['linkedColumns']);
                $("#stripValue").val(hrefObj['stripValue']);
                $("#imageColumn").val(hrefObj['imageColumn']);
                $("#imageTable").val(hrefObj['imageTable']);
                $("#imageTableColumn").val(hrefObj['imageTableColumn']);
                $("#defaultValues").val(gridResultObj['defaultValues']);

                $("#" + gridResultObj['gridId'] + "_hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
                $("#" + gridResultObj['gridId'] + "_linkedColumns").val(hrefObj['linkedColumns']);
                $("#" + gridResultObj['gridId'] + "_stripValue").val(hrefObj['stripValue']);
                $("#" + gridResultObj['gridId'] + "_imageColumn").val(hrefObj['imageColumn']);
                $("#" + gridResultObj['gridId'] + "_imageTable").val(hrefObj['imageTable']);
                $("#" + gridResultObj['gridId'] + "_imageTableColumn").val(hrefObj['imageTableColumn']);

                var gridInitParamObj = {}; //gridInitParamObj
                gridInitParamObj = gridResultObj['gridInitParamObj'];
                if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                    $("#" + gridResultObj['gridId']).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
                }
                if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                    $("#" + gridResultObj['gridId']).attr("data-gridResultObj", JSON.stringify(gridResultObj));
                }
                var attachGridViewFlag = gridInitParamObj['uuu_AttachGridView'];
                $("#attachGridViewFlag").val(attachGridViewFlag);
                var attachInitParams = gridInitParamObj["uuu_attachInitParams"];
                var initParamSource = gridInitParamObj["uuu_Source"];
                //multiSelectGridId
                if (isMaster == 'Y') {
                    $("#massColumnHide").val(gridInitParamObj['massColumnHide']);
                    if (gridInitParamObj != null && gridInitParamObj['uuu_GridMultiSelect'] == 'N') {
                        $("#multiSelectGridId").val(gridResultObj['gridId']);
                    }
                    $("#massValidateComment").val(gridInitParamObj['uuu_ValidateComment']);
                }
                $("#" + gridResultObj['gridId'] + "_massColumnHide").remove();
                $("#" + gridResultObj['gridId'] + "_massValidateComment").remove();
                $("#visionClusterSpliterMain").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_massColumnHide' />");
                $("#visionClusterSpliterMain").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_massValidateComment' />");
                $("#" + gridResultObj['gridId'] + "_massColumnHide").val(gridInitParamObj['massColumnHide']);
                $("#" + gridResultObj['gridId'] + "_massValidateComment").val(gridInitParamObj['uuu_ValidateComment']);
                if (isMaster != 'Y') {
                    var relationObjArray = gridResultObj['relationArray'];
                    if (relationObjArray != null && !jQuery.isEmptyObject(relationObjArray)) {
                        $("#relationArray").val(JSON.stringify(relationObjArray));
                    } else {
                        $("#relationArray").val();
                    }

                }
                $("#" + gridResultObj['gridId'] + "_defaultValues").remove();
                $("#visionClusterSpliterMain").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_defaultValues' />");
                $("#" + gridResultObj['gridId'] + "_defaultValues").val(gridResultObj['initialValues']);
                $("#" + gridResultObj['gridId']).attr("initParamSource", initParamSource);
                if (attachInitParams != null && attachInitParams != '' && attachInitParams != undefined)
                {
                    var colParams = attachInitParams.split(":");
                    if (colParams != null && colParams != '' && colParams != undefined)
                    {
                        $("#" + gridResultObj['gridId']).attr("checkAttachType", colParams[1]);
                    }
                }
                $("#processClassAndMethod").val(gridInitParamObj['uuu_processClassAndMethod'] != null ? gridInitParamObj['uuu_processClassAndMethod'] : "");
                var batchInd = gridInitParamObj["uuu_BatchInd"];
                $("#batchIndicator").val(batchInd);
                var tableName = gridResultObj['tableName'];
                $("#tableName").val(tableName);
                $("#" + gridResultObj['gridId']).attr('data-table', tableName);
                var barCodeColumnName = gridInitParamObj['uuu_BarCodeColumn'];
                $("#barCodeColumnName").val(barCodeColumnName);

                if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                    $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
                }

                var columnInitParamObj = {};
                columnInitParamObj = gridResultObj['columnInitParamsObj'];
                $("#" + gridResultObj['gridId'] + "_columnInitParams").val(JSON.stringify(columnInitParamObj));
                $("#columnInitParams").val(JSON.stringify(columnInitParamObj));

                var dropDownListData = gridResultObj.dropDownListData;

                //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
                if (gridResultObj != null && gridResultObj.datafields) {

                }
                var dataFeilds = gridResultObj.datafields;
                var hrefObj = gridResultObj.hrefObj;
                var localData = gridResultObj.data;
                var formId = gridResultObj.formId;
                var panelId = gridResultObj.panelId;
                var gridOperation = gridResultObj.gridOperation;
                //////////////////console.log("gridOperation:::"+gridOperation);

                ////////////////////console.log("formId::::::"+formId);
                $("#" + gridResultObj['gridId'] + "_formId").val(formId);
                $('#formId').val(formId);
                $("#panelId").val(panelId);
                $("#" + gridResultObj['gridId'] + "_panelId").val(panelId);
                var gridPropObj = {};
                gridPropObj = gridResultObj.gridPropObj;
                var hiddenObj = gridResultObj['hiddenObj'];
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                    $("#" + gridResultObj['gridId'] + "_hiddenObj").val(JSON.stringify(hiddenObj));
                }
                if (gridPropObj != null) {
                    //  fieldsArray.length = 0;
                    // fieldsArray = gridResultObj.columns;
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
                    // console.log("renderToolbar::::"+renderToolbar);
                    //  alert("renderToolbar:::"+renderToolbar);
                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                    //      var defaultTabName = $("#defaultTabName").val();
                    var htmlContentRender = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                        var data = "<xmp>" + value + "</xmp>";
                        var element = $(data);
                        element.addClass('visionSearchWrapDescrDiv');
                        var gridRowHeight = $("#" + gridResultObj['gridId']).jqxGrid('rowsheight');
                        if (gridRowHeight != null && parseInt(gridRowHeight) <= 50) {
                            element.css('overflow-y', 'scroll');//overflow-y:scroll !important;
                        }
                        if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                            var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                            if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                        rowData != null
                                        && rowData[uuu_TitleValueColumn] != null
                                        && rowData[uuu_TitleValueColumn] != ''
                                        ) {//REQUIRED_FLAG
                                    element.removeAttr('title');
                                    element.attr('title', rowData[uuu_TitleValueColumn]);
                                }
                            }

                        }
                        return element[0].outerHTML;
                    };
//                      var drpdownGridAndEditRender = function (row, columnfield, value, defaulthtml, columnproperties) {
//                        var cellValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, columnfield);
//                        var viewType = "GRID-VIEW";
//                        var editable =  gridPropObj.editable;
//                        var celwidth = columnproperties.width;
//                        var colLabel = columnproperties.text;
//                        var ddwData = gridResultObj.dropDowndData;
//                        var ddwObj = ddwData[columnfield];
//                        var dependencyparams = ddwObj.dependencyparams;
//                       $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
//                        var imageHtml = '<img src="images/iDXPUI5SearchDropdown.png" onclick="visionDropdown(\'' + ddwObj.ddwId.trim() + '\',\'' + dependencyparams + '\',\'' + viewType + '\',\'' + ddwObj.gridId + '\',\'' + columnfield + '\',\'' + row + '\')">';
////        var cellHtml = '<div> ' +
////                '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" class ="griddrpdownAndEditValue" type="text" style="width: 90%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;" autocomplete="off"  value="' + value + '" data-column="' + columnfield + '" data-last-ed-field=\'' + columnfield + '\'  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" ' + 
//////                ' onkeydown="preventDeletekey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '+
////                ' onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
////                imageHtml +
////                '</div>'; 
////        var cellHtml = '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: 90%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;" autocomplete="off"  value="' + value + '" data-column="' + columnfield + '" data-last-ed-field=\'' + columnfield + '\'  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" onkeydown="preventDeletekey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
////                imageHtml ;
//
//                        var onkeyupfunc = ' onkeyup="updateCellValueDDW(\'' + $("#" + gridResultObj['gridId']) + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" value="' + value + '"'
////+' onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
//                                + ' onkeydown="preventDeleteKey(\'' + $("#" + gridResultObj['gridId']) + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
//                                + '';
//                        var cellHtml = "<div  class='visionGridDataAlignInput'>"
//                                + "<div class='visionGridDataAlignInputField' style='width: 95%'>"
//                                + "<input type='text'"
//                                + " id = '" + $("#" + gridResultObj['gridId']) + columnfield + "griddrpdownAndEditValueId" + row + "'"
//                                + " data-column-label='" + colLabel + "' "
////                + " onkeyup=propValKeyUp1('" + tbid + "'," + row + ",'none','" + ddwObj.gridId + "','" + columnfield + "',event)"
//                                + " style=' border:none;width: 95%;height:" +$("#" + gridResultObj['gridId']).jqxGrid('rowsheight') + "px;' autocomplete='off'"
//                                + " " + onkeyupfunc + " "
//                                + "/>"
//                                + "</div><div class='visionGridDataAlignInputImage' >"
//                                + " <img src='images/iDXPUI5SearchDropdown.png' style='width: 12px; height: 12px;margin-top: 10px;margin-right: 15px; cursor: pointer;'"
//                                + " onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "'," + row + ",'" + ddwObj.gridId + row + "')>"
//                                + "</div>"
//                                + "</div>";
//
//
//                        return cellHtml;
//                    };


                    var drpdownGridAndEditRender = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var tabId = gridResultObj['gridId'];
                        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
                        var viewType = "GRID-VIEW";
                        var editable = gridPropObj.editable;
                        var celwidth = columnproperties.width;
                        var colLabel = columnproperties.text;
                        var ddwData = gridResultObj.dropDowndData;
                        var ddwObj = ddwData[columnfield];
                        var dependencyparams = ddwObj.dependencyparams;
                        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
                        var imageHtml = '<img src="images/iDXPUI5SearchDropdown.png" onclick="visionDropdown(\'' + ddwObj.ddwId.trim() + '\',\'' + dependencyparams + '\',\'' + viewType + '\',\'' + ddwObj.gridId + '\',\'' + columnfield + '\',\'' + row + '\')">';
                        var onkeyupfunc = ' onkeyup="updateCellValueDDW(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" value="' + value + '"'
                                + ' onkeydown="preventDeleteKey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
                                + '';
                        var cellHtml = "<div  class='visionGridDataAlignInput'>"
                                + "<div class='visionGridDataAlignInputField' style='width: 95%'>"
                                + "<input type='text'"
                                + " id = '" + tabId + columnfield + "griddrpdownAndEditValueId" + row + "'"
                                + " data-column-label='" + colLabel + "' "
                                + " style=' border:none;width: 95%;height:" + $('#' + tabId).jqxGrid('rowsheight') + "px;' autocomplete='off'"
                                + " " + onkeyupfunc + " "
                                + "/>"
                                + "</div><div class='visionGridDataAlignInputImage' >"
                                + " <img src='images/iDXPUI5SearchDropdown.png' style='width: 12px; height: 12px;margin-top: 10px;margin-right: 15px; cursor: pointer;'"
                                + " onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "'," + row + ",'" + ddwObj.gridId + row + "')>"
                                + "</div>"
                                + "</div>";


                        return cellHtml;
                    };
                    var gridTextCellComitRender = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var tabId = gridResultObj['gridId'];
                        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
                        var viewType = "GRID-VIEW";
                        var editable = gridPropObj.editable;
                        var celwidth = columnproperties.width;
                        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
                        var celwidth1 = $("#" + tabId).jqxGrid('getcolumnproperty', columnfield, 'width');
                        var cellHtml = '<div> <input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: 100%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;"  autocomplete="off" value="' + value + '" data-column="' + columnfield + '"  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" ' +
                                ' onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
                                '</div>';
                        return cellHtml;
                    };
                    var gridTextCellCheckBoxRender = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var tabId = gridResultObj['gridId'];
                        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
                        var viewType = "GRID-VIEW";
                        var editable = gridPropObj.editable;
                        var celwidth = columnproperties.width;
                        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
                        if (value != null && value != '' && value != undefined && (value == "Y" || value == "y"))
                        {
                            var cellHtml = '<label class="customcontainer"> <input id = "' + tabId + columnfield + 'griddcheckBoxRenderId' + row + '" type="checkbox" checked' +
                                    ' value="Y" data-column="' + columnfield + '"   onchange="updateCheckBoxValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
                                    '<span class="customecheckmark"></span></label>';
                        } else {
                            var cellHtml = '<label class="customcontainer"> <input id = "' + tabId + columnfield + 'griddcheckBoxRenderId' + row + '" type="checkbox" ' +
                                    ' value="N" data-column="' + columnfield + '"   onchange="updateCheckBoxValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
                                    '<span class="customecheckmark"></span></label>';
                        }

                        return cellHtml;
                    };



                    var urlRender
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                var element = $(defaulthtml);
                                element.attr("onclick", "openURLInTab('" + value + "')");
                                element.addClass("visionSearchUrlLink");
                                return element[0].outerHTML;
                            };
                    var imageRender
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                if (value != "" && value != null)
                                {

                                    if (labelObject['Click to view the attachment'] != null && labelObject['Click to view the attachment'] != '' && labelObject['Click to view the attachment'] != undefined) {
                                        return  "<img  title='" + labelObject['View the attachment Logo'] != null ? labelObject['View the attachment Logo'] : 'View the attachment Logo' + "' style='cursor:pointer;'"
                                                + " src='" + value + "' class='imageStyle'  id='dtlul_" + row + "'" + "'"
                                                + " onmouseover=imageMouseHover('dtlul_" + row + "') onmouseout=imageMouseOut() >";
                                    } else
                                    {
                                        return  "<img  title='View the attachment Logo' style='cursor:pointer;'"
                                                + " src='" + value + "' class='imageStyle'  id='dtlul_" + row + "'" + "'"
                                                + " onmouseover=imageMouseHover('dtlul_" + row + "') onmouseout=imageMouseOut() >";
                                    }


                                }
                            };
                    var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {

                        return '<div style="white-space: pre-line;">' + value + '</div>';
                    };


                    var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var colwidth = $('#' + gridResultObj['gridId']).jqxGrid('getcolumnproperty', columnfield, 'width');
                        var scrollPosition = $('#' + gridResultObj['gridId']).jqxGrid('scrollposition');
                        $('#idsearchwraptempContainerdiv').css("width", colwidth);
                        $('#idsearchwraptempContainerdiv').html(value);
                        var textHeight = $("#idsearchwraptempContainerdiv").outerHeight(true);
                        var textHeight1 = textHeight / 1.5;
                        try {
                            $('#idsearchwraptempContainerdiv').html("");
                        } catch (w) {
                            $('#idsearchwraptempContainerdiv').html("");
                        }
                        var gridrowsheight1 = $('#' + gridResultObj['gridId']).jqxGrid('getrowheight', row);
                        var gridrowsheight = $('#' + gridResultObj['gridId']).jqxGrid('rowsheight');
                        if (gridrowsheight1 != null && gridrowsheight1 != ''
                                && gridrowsheight1 != 'undefined'
                                && gridrowsheight1 != undefined
                                ) {

                        } else {
                            gridrowsheight1 = gridrowsheight;
                        }

                        if (textHeight1 > gridrowsheight1) {
                            $('#' + gridResultObj['gridId']).jqxGrid('setrowheight', row, textHeight / 1.5);
                        }
                        $('#' + gridResultObj['gridId']).jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);

                        var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                        var divClass = "jqx-grid-cell-left-align";
                        if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                            var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                            if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                uuu_columnstyle = selectedColumnInitParamObj['uuu_columnstyle'];
                                if (uuu_columnstyle != null && uuu_columnstyle != ''
                                        && uuu_columnstyle != 'undefined'
                                        && uuu_columnstyle != undefined
                                        ) {

                                } else {
                                    uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                                }

                                var cellalignClass = cellalignColParamObj['uuu_Colcellsalign'];

                                if (cellalignClass != null && cellalignClass != undefined && cellalignClass != '' && cellalignClass == 'center') {
                                    divClass = "jqx-grid-cell-middle-align";
                                } else if (cellalignClass != null && cellalignClass != undefined && cellalignClass != '' && cellalignClass != 'center') {
                                    divClass = cellalignClass;
                                } else {
                                    divClass = "jqx-grid-cell-left-align";
                                }
                            }


                        }
//                   return '<div style="white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;">' + value + '</div>';
                        return '<div class="' + divClass + '" style="' + uuu_columnstyle + '">' + value + '</div>';
                    };

                    var descoptrender
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                var element = $(defaulthtml);
                                element.addClass('visionSearchWrapDescrDiv');
                                var gridRowHeight = $("#" + gridResultObj['gridId']).jqxGrid('rowsheight');
                                if (gridRowHeight != null && parseInt(gridRowHeight) <= 50) {
//                                         element.css('overflow', 'scroll');
                                    element.css('overflow-y', 'scroll');//overflow-y:scroll !important;

                                }
                                if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                    var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                    if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                        var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                        if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                                rowData != null
                                                && rowData[uuu_TitleValueColumn] != null
                                                && rowData[uuu_TitleValueColumn] != ''
                                                ) {//REQUIRED_FLAG
                                            element.removeAttr('title');
                                            element.attr('title', rowData[uuu_TitleValueColumn]);
                                        }
                                    }

                                }

                                return element[0].outerHTML;
                            };
                    var replaceRenderer
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                var element = $(defaulthtml);
                                return element[0].outerHTML;
                            };
                    var charColorRender
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                var element = $(defaulthtml);
                                if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                    var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                    if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                        var mandColumn = selectedColumnInitParamObj['uuu_CharMandColumn'];
                                        if (!(mandColumn != null && mandColumn != '')) {
                                            mandColumn = 'REQUIRED_FLAG';
                                        }
                                        if (rowData != null && (rowData[mandColumn] == 'Y'
                                                || rowData[mandColumn] == 'M'
                                                )) {//REQUIRED_FLAG
                                            element.addClass('visionSearchCharRedDiv');

                                        }
                                        var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                        if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                                rowData != null
                                                && rowData[uuu_TitleValueColumn] != null
                                                && rowData[uuu_TitleValueColumn] != ''
                                                ) {//REQUIRED_FLAG
                                            element.removeAttr('title');
                                            element.attr('title', rowData[uuu_TitleValueColumn]);
                                        }
                                    }

                                }
                                return element[0].outerHTML;
                            };
                    var charValueColorRender
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                var element = $(defaulthtml);
                                if (gridInitParamObj['uuu_EnrichPropertyColorFlag'] != null && gridInitParamObj['uuu_EnrichPropertyColorFlag'] != undefined & gridInitParamObj['uuu_EnrichPropertyColorFlag'] != "" && gridInitParamObj['uuu_EnrichPropertyColorFlag'] == "Y")
                                    if (rowData != null && (columnfield == "PROPERTY_VALUE1" || columnfield == 'CHAR_COLUMN5') && rowData['CHAR_COLUMN5'] == "Y") {
                                        element.addClass('enrinchedColorClass');
                                    }
                                if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                    var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                    if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                        var mandColumn = selectedColumnInitParamObj['uuu_CharValueMandColumn'];
                                        if (!(mandColumn != null && mandColumn != '')) {
                                            mandColumn = 'REQUIRED_FLAG';
                                        }
                                        if (rowData != null && (rowData[mandColumn] == 'Y'
                                                || rowData[mandColumn] == 'M'
                                                )) {//REQUIRED_FLAG
                                            element.addClass('visionSearchCharValRedDiv');
                                        }
                                        var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                        if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                                rowData != null
                                                && rowData[uuu_TitleValueColumn] != null
                                                && rowData[uuu_TitleValueColumn] != ''
                                                ) {//REQUIRED_FLAG
                                            element.removeAttr('title');
                                            element.attr('title', rowData[uuu_TitleValueColumn]);
                                        }
                                    }

                                }
                                return element[0].outerHTML;
                            };
                    var titleRender
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                var element = $(defaulthtml);
                                if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                    var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                    if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                        var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                        if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                                rowData != null
                                                && rowData[uuu_TitleValueColumn] != null
                                                && rowData[uuu_TitleValueColumn] != ''
                                                ) {//REQUIRED_FLAG
                                            element.removeAttr('title');
                                            element.attr('title', rowData[uuu_TitleValueColumn]);
                                        }
                                    }

                                }
                                return element[0].outerHTML;
                            };

                    var xmlRenderer
                            = function (row, columnfield, value, defaulthtml, columnproperties) {
                                console.log("xmlRenderer::");
                                if (value != "" && value != null)
                                {
                                    return  "<img src ='images/xml_icon.png' style='cursor:pointer; width: 20px; height: 20px;position: fixed; title='Click to view the Payload' style='cursor:pointer;' onclick=viewXml('" + gridResultObj['gridId'] + "','" + row + "','" + columnfield + "','" + gridResultObj['tableName'] + "')  class='imageStyle visionTemplete'  id='xmldtlul_" + row + "' >";
                                }
                            };
                    var descriptorImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                        return  "<img title='Click to create a record' style='cursor:pointer;'  src='" + value + "' class='imageStyle visionTemplete' data-count='" + $('#templateResults').jqxGrid('pagesize') + "' id='dtlul_"
                                + row + "' onmouseover=templeteMouseOver('dtlul_" + row + "'," + $("#templateResults").jqxGrid("pagesize") + ") onmouseout=templeteMouseOut('dtlul_" + row + "'," + $("#templateResults").jqxGrid("pagesize") + ")>";
                    };
                    var documentRanderer
                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                                //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                                console.log("hiiiii");
                                return '<div onclick=viewDocument("' + value + '") style="cursor:pointer;">View Document</div>';
                            };

                    var editable = gridPropObj.editable;
                    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                        var cellValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, columnfield);
                        var viewType = "GRID-VIEW";
                        var ddwData = gridResultObj.dropDowndData;
                        var ddwObj = ddwData[columnfield];
                        var dependencyparams = ddwObj.dependencyparams;
                        if (editable) {
                            //    return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                            return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + gridResultObj['gridId'] + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                        } else
                        {
                            return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                        }

                    };
                    var attachmentImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {

                        if (value != "" && value != null) {
                            var iconName = "";
                            if (rowData != null && rowData['TYPE'] == 'D') {//TYPE
                                var fileName = rowData['FILE_NAME'];
                                if (fileName != null && (fileName.lastIndexOf(".pdf") > -1 || fileName.lastIndexOf(".PDF") > -1)) {
                                    iconName = "images/pdficon.png";
                                    //pdficon
                                } else if (fileName != null && (fileName.lastIndexOf(".xls") > -1
                                        || fileName.lastIndexOf(".XLS") > -1
                                        || fileName.lastIndexOf(".xlsx") > -1
                                        || fileName.lastIndexOf(".XLSX") > -1)
                                        ) {
                                    iconName = "images/xlsicon.png";
                                } else if (fileName != null && (fileName.lastIndexOf(".doc") > -1
                                        || fileName.lastIndexOf(".docx") > -1
                                        || fileName.lastIndexOf(".DOC") > -1
                                        || fileName.lastIndexOf(".DOCX") > -1)
                                        ) {
                                    iconName = "images/windoc.png";
                                } else if (fileName != null && (fileName.lastIndexOf(".ppt") > -1
                                        || fileName.lastIndexOf(".pptx") > -1
                                        || fileName.lastIndexOf(".PPT") > -1
                                        || fileName.lastIndexOf(".PPTX") > -1)
                                        ) {
                                    iconName = "images/ppt.png";
                                } else if (fileName != null && (fileName.lastIndexOf(".xps") > -1
                                        || fileName.lastIndexOf(".xpsx") > -1
                                        || fileName.lastIndexOf(".XPS") > -1
                                        || fileName.lastIndexOf(".XPSX") > -1)
                                        ) {
                                    iconName = "images/xps-file-icon.png";

                                } else {
                                    iconName = "images/Notepad.png";
                                }
                            } else {
                                iconName = value;
                            }
                            if (labelObject['Click to view the attachment'] != null && labelObject['Click to view the attachment'] != '' && labelObject['Click to view the attachment'] != undefined) {
                                return  "<img title='" + labelObject['Click to view the attachment'] != null ? labelObject['Click to view the attachment'] : 'Click to view the attachment' + "' style='cursor:pointer;' onclick=viewAttachment('" + gridResultObj['gridId'] + "'," + row + ")  src='" + iconName + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";
                            } else
                            {
                                return  "<img title='Click to view the attachment' style='cursor:pointer;' onclick=viewAttachment('" + gridResultObj['gridId'] + "'," + row + ")  src='" + iconName + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";
                            }
                        } else {
                            return "<div class='visionCoFileImage'>"
                                    + "<input name='colFileImage' type='file' id ='visionColFileId' style ='display:none'/>"
                                    + "<img src='images/attach_pin_icon_blue.png' onclick=showgridBrowseButton('" + gridResultObj['gridId'] + "') style='cursor:pointer;margin-left: 30%;'/>"
                                    + "</div>";

                        }
                    };
                    if (editable) {
                        for (var i = 0; i < dataFeilds.length; i++) {
                            if (typeof dataFeilds[i].values != "undefined" && dataFeilds[i].values != null) {
                                var listboxData = eval(dataFeilds[i].values.source);
                                var listboxSource =
                                        {
                                            datatype: "json",
                                            datafields: [
                                                {name: 'ListboxValue', type: 'string'},
                                                {name: 'id', type: 'string'}
                                            ],
                                            localdata: listboxData
                                        };
                                var listBoxAdapter = new $.jqx.dataAdapter(listboxSource);
                                gridResultObj.datafields[i].values.source = listBoxAdapter.records;
                                // gridResultObj.datafields[i].values.source = listBoxAdapter.records;
                            }
                        }
                    }
                    for (var i = 0; i < gridPropObj.columns.length; i++) {
                        if (gridPropObj.columns [i].cellsrenderer != null) {
                            gridPropObj.columns [i].cellsrenderer = eval(gridPropObj.columns [i].cellsrenderer);
                        }
                        if (gridPropObj.columns[i].rendered != null) {
                            gridPropObj.columns[i].rendered = eval('(' + gridPropObj.columns[i].rendered + ')');
                        }

                        if (gridPropObj.columns[i].createeditor != null) {
                            gridPropObj.columns[i].createeditor = eval('(' + gridPropObj.columns[i].createeditor + ')');
                        }
                        if (gridPropObj.columns[i].initeditor != null) {
                            gridPropObj.columns[i].initeditor = eval('(' + gridPropObj.columns[i].initeditor + ')');
                        }
                        if (gridPropObj.columns[i].geteditorvalue != null) {
                            gridPropObj.columns[i].geteditorvalue = eval('(' + gridPropObj.columns[i].geteditorvalue + ')');
                        }
                        if (gridPropObj.columns[i].cellvaluechanging != null) {
                            gridPropObj.columns[i].cellvaluechanging = eval('(' + gridPropObj.columns[i].cellvaluechanging + ')');
                        }
                        if (gridPropObj.columns[i].cellbeginedit != null) {
                            gridPropObj.columns[i].cellbeginedit = eval('(' + gridPropObj.columns[i].cellbeginedit + ')');
                        }
                    }

                    // for work flow start
                    if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {

                        gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
                    }
                    allGridColumns[gridResultObj['gridId']] = gridPropObj.columns;
                    var data = {};
                    if (gridInitParamObj != null
                            && gridInitParamObj['uuu_FilterPopupNoData'] != 'Y') {
                        data['gridId'] = gridResultObj['gridId'];
                        data['colsArray'] = JSON.stringify(gridResultObj['colsArray']);
                        data['tableName'] = gridResultObj['tableName'];
                        data['paramArray'] = JSON.stringify(paramArray);
                        let chilWabdObj = gridInitParamObj.uuu_CompareQueryAndUrlMethod;
                        if (chilWabdObj != null && chilWabdObj != 'undefined') {
                            data.CompareQueryAndUrlMethod = chilWabdObj;
                        }
                        if (isMaster == 'N') {
                            data['selectedRowData'] = JSON.stringify(selectedMasterData);
                            data['relationId'] = relationId;
                            data['masterGridId'] = masterGridId;
                        }
                    }
                    var source =
                            {
                                type: 'POST',
//                                                async: false,
                                datatype: "json",
                                datafields: dataFeilds,
                                data: data,
                                url: 'genericClusterTabsData',
                                cache: false,
                                root: 'Rows',
                                processdata: function (data) {

                                    data.multiSortColsArray = ($("#" + gridResultObj['gridId'] + "_sort_columns").val() != null
                                            ? $("#" + gridResultObj['gridId'] + "_sort_columns").val() : "");
                                    if (gridInitParamObj != null
                                            && !jQuery.isEmptyObject(gridInitParamObj)
                                            && (gridInitParamObj['uuu_FilterGridFormPopup'] == 'Y' || gridInitParamObj['uuu_FilterPopupNoData'] == 'Y')) {
                                        data.paramArray = ($("#" + gridResultObj['gridId'] + "_filter_columns").val() != null
                                                ? $("#" + gridResultObj['gridId'] + "_filter_columns").val() : "");
                                    }
                                    if (gridInitParamObj != null
                                            && gridInitParamObj['uuu_FilterPopupNoData'] == 'Y'
                                            && $("#" + gridResultObj['gridId'] + "_filter_columns").val() != null) {
                                        data['gridId'] = gridResultObj['gridId'];
                                        data['colsArray'] = JSON.stringify(gridResultObj['colsArray']);
                                        data['tableName'] = gridResultObj['tableName'];
                                        data['paramArray'] = data.paramArray;
                                        let chilWabdObj = gridInitParamObj.uuu_CompareQueryAndUrlMethod;
                                        if (chilWabdObj != null && chilWabdObj != 'undefined') {
                                            data.CompareQueryAndUrlMethod = chilWabdObj;
                                        }
                                        if (isMaster == 'N') {
                                            data['selectedRowData'] = JSON.stringify(selectedMasterData);
                                            data['relationId'] = relationId;
                                            data['masterGridId'] = masterGridId;
                                        }
                                    }
                                },
                                beforeSend: function (xhr) {
                                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                    showLoader();
                                    showLoader();
                                }, loadError: function (xhr, status, error) {
                                    stopLoader();
                                    throw new Error(error);
                                }, loadComplete: function (data)
                                {
                                    stopLoader();
                                    stopLoader();
                                    try {
                                        if (gridInitParamObj != null
                                                && !jQuery.isEmptyObject(gridInitParamObj)
                                                && gridInitParamObj['uuu_GridPagesCountFlag'] == 'Y')
                                        {
                                            if (data[0] != null) {
                                                showgridPagesCount(gridResultObj['gridId'], 'Y', data[0].TotalRows)
                                            }
                                        }
                                    } catch (e) {
                                    }
                                },
                                beforeprocessing: function (data) {

                                    $("#currentSelectChildGridId").val('');
                                    if (data[0] != null) {
                                        //  alert(data.JSONObjectList[0].TotalRows);
                                        source.totalrecords = data[0].TotalRows;
                                        $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
//                                                        $("#excelExport").removeAttr("disabled");
                                        $("#drop" + gridResultObj['gridId']).removeAttr("disabled");
                                        $("#drop" + gridResultObj['gridId']).removeAttr("opacity");
                                        $("#export" + gridResultObj['gridId']).removeAttr("disabled");
                                        $("#export" + gridResultObj['gridId']).removeAttr("opacity");
                                        var datainformations = $('#' + gridResultObj['gridId']).jqxGrid('getdatainformation');

                                        var paginginformation = datainformations['paginginformation'];

                                        var pagenum = paginginformation.pagenum;
                                        var pagesize = paginginformation.pagesize;
                                        // for new Jqwidgets version inert opertaion
                                        if (data[0].TotalRows < pagesize) {
                                            $("#" + gridResultObj['gridId']).jqxGrid('virtualmode', false);
                                        } else {
                                            $("#" + gridResultObj['gridId']).jqxGrid('virtualmode', true);
                                        }
                                        // for new Jqwidgets version inert opertaion
                                        // ravi code start
                                        setTimeout(function () {

                                            if (isMaster == 'N') {
                                                $("#" + gridResultObj['gridId']).jqxGrid('selectrow', 0);
                                            }


//                                        var datainformations = $('#' + gridResultObj['gridId']).jqxGrid('getdatainformation');
//
//                                        var paginginformation = datainformations['paginginformation'];
//
//                                        var pagenum = paginginformation.pagenum;
//                                        var pagesize = paginginformation.pagesize;
                                            if (isMaster == 'Y') {
                                                var lastSelectedRow = $("#" + gridResultObj['gridId'] + '_Selected_row').val();
                                                if (lastSelectedRow != null && lastSelectedRow != '' && lastSelectedRow != undefined)
                                                {
                                                    $("#" + gridResultObj['gridId']).jqxGrid('selectrow', parseInt(lastSelectedRow));
                                                } else {
                                                    $("#" + gridResultObj['gridId']).jqxGrid('selectrow', pagenum * pagesize);
                                                }
                                            }

                                        }, 200)

                                        // ravi code end


                                    } else {

                                        source.totalrecords = 0;
                                        $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
                                        $("#approvebutt" + gridResultObj['gridId']).attr("disabled", true);
                                        $("#drop" + gridResultObj['gridId']).attr("disabled", true);
                                        $("#drop" + gridResultObj['gridId']).css("opacity", "0.5");
                                        $("#export" + gridResultObj['gridId']).attr("disabled", true);
                                        $("#export" + gridResultObj['gridId']).css("opacity", "0.5");
                                        // insert row issue code START ------------------
                                        // for new Jqwidgets version inert opertaion
                                        $("#" + gridResultObj['gridId']).jqxGrid('virtualmode', false);
                                        // for new Jqwidgets version inert opertaion
                                        // insert row issue code END -----------------------

                                    }

                                    var selectedItemTitle = $("#" + tabId).jqxTabs('getTitleAt', $("#" + tabId).jqxTabs('selectedItem'));
                                    try {
//                                                    $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                    } catch (e) {
                                    }

                                    stopLoader();
                                },
                                sort: function ()
                                {
//                                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
                                    $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'sort');
                                    try {
                                        $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                },
                                filter: function () {
                                    // insert row issue code START ------------------
                                    // for new Jqwidgets version inert opertaion
                                    $("#" + gridResultObj['gridId']).jqxGrid('virtualmode', true);
                                    // for new Jqwidgets version inert opertaion
                                    // insert row issue code END -----------------------

                                    $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'filter');
                                    try {
                                        $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                    stopLoader();
                                }


                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    gridPropObj.source = dataAdapter;
                    var srsRegiterButton = gridInitParamObj['registerButtonFlag'];
                    var hideToolBar = gridInitParamObj['uuu_hideToolBar'];
                    staticFormFlag = gridInitParamObj['uuu_staticFormFlag'];

                    // gridPropObj.showtoolbar = false;
                    gridPropObj.rowdetails = true;
                    gridPropObj.rendergridrows = function () {
                        return dataAdapter.records;
                    };

                    $("#submitDropdown" + gridResultObj['gridId']).html(gridResultObj['buttonObj']);
                    $("#exportDropdown" + gridResultObj['gridId']).html(gridResultObj['gridOperation']);

                    gridPropObj.rowdetails = false;
                    $('#gridRefreshButton').hide();

                    if (isMaster == 'Y') {
                        $("#level1TabId").html("");
                        $("#currentParentGridpageNum").val(0);
                    } else {
                        $("#currentChildGridpageNum").val(0);
                    }


                    $("#" + gridResultObj['gridId']).jqxGrid(gridPropObj);
//                    if (gridResultObj['action'] != null && gridResultObj['action'] != undefined) {
//                        askConfirmationOnAction(gridResultObj);
//                    }

                    try {
                        var gridColumnObj = gridPropObj.columns;
                        if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                            $("#" + gridResultObj['gridId']).jqxGrid('beginupdate');
                            for (var index = 0; index < gridColumnObj.length; index++) {
                                try {
                                    var datacolName = gridColumnObj[index].datafield;
                                    var cellalignColParamObj = columnInitParamObj[datacolName];
                                    if (cellalignColParamObj != null && !jQuery.isEmptyObject(cellalignColParamObj)) {
                                        var cellaligndata = cellalignColParamObj['uuu_Colcellsalign'];
                                        if (cellaligndata != null && cellaligndata != undefined && cellaligndata != '') {
                                            $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', datacolName, 'align', cellaligndata);
                                            $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', datacolName, 'cellsalign', cellaligndata);
                                        }
                                    }
                                } catch (e) {

                                }


                            }
                            $("#" + gridResultObj['gridId']).jqxGrid('endupdate');

                        }

                    } catch (e) {
                    }

                    $("#" + gridResultObj['gridId']).on('celldoubleclick', function (event) {
                        var args = event.args;
                        var dataField = args.datafield;
                        var dataField1 = args.text;
                        var rowIndex = args.rowindex;
                        var cellValue = args.value;
                        var column = $("#" + gridResultObj['gridId']).jqxGrid('getcolumn', event.args.datafield).text;
                        //kk23-05-24
                        var cellDisableDoubleClickPopup = gridInitParamObj['uuu_CellDisableDoubleClickPopup'];
                        if (cellDisableDoubleClickPopup == null || cellDisableDoubleClickPopup == '' || cellDisableDoubleClickPopup == 'undefined') {
                            cellDisableDoubleClickPopup = 'N';
                        }
                        if (gridInitParamObj != null && cellDisableDoubleClickPopup != null && cellDisableDoubleClickPopup != ''
                                && cellDisableDoubleClickPopup != undefined && cellDisableDoubleClickPopup != 'Y') {
                            popupedit(column, cellValue);
                        }
                        //kk23-05-24
                    });
                    $("#" + gridResultObj['gridId']).on("pagechanged", function (event) {

                        var oldPageNum = event.args.pagenum;
                        if (isMaster == 'Y') {
                            oldPageNum = $("#currentParentGridpageNum").val();
                        } else {
                            oldPageNum = $("#currentChildGridpageNum").val();
                        }
                        console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                        // event arguments.
                        var args = event.args;
                        // page number.
                        var pagenum = args.pagenum;
                        // page size.
                        var pagesize = args.pagesize;
                        if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                            var selectedrowindexes = $("#" + gridResultObj['gridId']).jqxGrid('selectedrowindexes');
//                                        console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
                            try {
                                if (selectedrowindexes != null
                                        && selectedrowindexes.length != 0
                                        && selectedrowindexes[0] != -1) {
                                    $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                }

                            } catch (e) {
                            }
                        }
                        if (isMaster == 'Y') {
                            $("#currentParentGridpageNum").val(event.args.pagenum);
                        } else {
                            $("#currentChildGridpageNum").val(event.args.pagenum);
                        }
                    });

                    $("#" + gridResultObj['gridId']).on("pagesizechanged", function (event) {
                        console.log("::pagesizechanged:::" + event.args.pagenum);

                        if (isMaster == 'Y') {
                            $("#currentParentGridpageNum").val(0);
                        } else {
                            $("#currentChildGridpageNum").val(0);
                        }
                    });
                    try {
                        $(window).resize(function ()
                        {
                            var windowWidth = $(this).width();
                            if (windowWidth >= 500)
                            {

                            } else
                            {

                                $("#" + gridResultObj['gridId']).jqxGrid('height', '100%');

                            }
//                    $("#" + gridResultObj['gridId']).jqxGrid('height', '100%');
                        }).resize();
                    } catch (e) {

                    }

//                $(window).resize(function () {
//                    var windowWidth = $(this).width();
//                    if (windowWidth <= 415)
//                    {
//                        $("#" + gridResultObj['gridId']).jqxGrid({pagerheight: 70});
//                    } else if (windowWidth >= 416 && windowWidth <= 500)
//                    {
//                        $("#" + gridResultObj['gridId']).jqxGrid({pagerheight: 40});
//                    } else
//                    {
//                        $("#" + gridResultObj['gridId']).jqxGrid({pagerheight: 30});
//                    }
//                }).resize();
//                $("#" + gridResultObj['gridId']).parent().css("padding-top", "3px", "important");
//                $("#" + gridResultObj['gridId']).parent().css("padding-bottom", "3px", "important");
                    $("#" + gridResultObj['gridId']).jqxGrid('showtoolbar', true);
//                  $("#" + gridResultObj['gridId']).on('cellendedit', function (event) {
//                     $("#" + gridResultObj['gridId']).attr('data-last-ed-field', event.args.datafield);
//                    $("#" + gridResultObj['gridId']).attr('data-last-ed-row', event.args.rowindex);
//                    $("#" + gridResultObj['gridId']).jqxGrid({selectedrowindex:  event.args.rowindex});
//                  });
                    $("#" + gridResultObj['gridId']).on('cellvaluechanged', function (event)
                    {
                        var contentTabId = $("#" + gridResultObj.gridId).closest("[id^=level]").attr("id");
                        if (contentTabId == "level1TabId") {
                            childChangeflag = true;
                            var gridCount = $("#level1TabId").find(".jqx-grid").length;
                            if (gridCount > 1) {
                                var childGrids = $("#level1TabId").find(".jqx-grid");
                                var childGrid1 = childGrids[0].id;
                                var childGrid2 = childGrids[1].id;
                                if (gridResultObj.gridId == childGrid1) {
                                    childGrid1Changeflag = true;
                                } else if (gridResultObj.gridId == childGrid2) {
                                    childGrid2Changeflag = true;
                                }
                            }


                        } else {
                            changeflag = true;
                        }

                    });
                    var fieldVal;
                    $("#" + gridResultObj['gridId']).on('cellbeginedit', function (event) {
//                    currentClickedGridId = gridResultObj.gridId;
//                    cellOldValue = $('#' + gridResultObj.gridId).jqxGrid('getcelltext', event.args.rowindex, event.args.datafield);
//                    try {
//                        if (event.args.columntype == "dropdownlist")
//                        {
//                            fieldVal = event.args.row[event.args.datafield.replace("_DLOV", "")];
//                        }
//                    } catch (e) {
//                    }
                        var args = event.args;
                        var columntype = args.columntype
                        var dataField = args.datafield;
                        var columnindex = args.columnindex;
                        var rowBoundIndex = args.rowindex;
                        var cellValue = args.value;
                        $("#" + gridResultObj['gridId']).attr('data-last-ed-field', event.args.datafield);
                        $("#" + gridResultObj['gridId']).attr('data-last-ed-row', event.args.rowindex);
                        $("#" + gridResultObj['gridId']).jqxGrid({selectedrowindex: rowBoundIndex});
                        if (columntype != null && columntype == 'checkbox') {
                            var gridInitParamObj = gridResultObj['gridInitParamObj'];
                            var fillDownColumns = '';
                            if (gridInitParamObj != null) {
                                fillDownColumns = gridInitParamObj['fillDownColumns'];
                            }
                            var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + columnindex + ":" + fillDownColumns;
//                                        var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + fillDownColumns;
                            console.log("currentSelectFillDownData:::" + currentSelectFillDownData);
                            $("#currentSelectFillDownData").val(currentSelectFillDownData);
                            var uuu_fillDownDependencyColumns = gridInitParamObj['uuu_fillDownDependencyColumns'];
                            if (uuu_fillDownDependencyColumns != null && uuu_fillDownDependencyColumns != '') {
                                $("#currentSelectFillDownDependencyColumns").val(uuu_fillDownDependencyColumns);
                            }
                            var currentSelectGridIndex = $("#currentSelectGridIndex").val();

                        }
                        $("#" + gridResultObj['gridId']).attr('data-last-ed-field', event.args.datafield);
                        $("#" + gridResultObj['gridId']).attr('data-last-ed-row', event.args.rowindex);
                        $("#" + gridResultObj['gridId']).jqxGrid({selectedrowindex: rowBoundIndex});
                    });
//                    $("#" + gridResultObj['gridId']).on('cellclick', function (event) {
////                                    $("#" + gridResultObj['gridId']).bind('cellclick', function (event) {
//                        console.log("event.args.column.datafield:::::" + event.args.column.datafield);
//                        var args = event.args;
//                        var rowBoundIndex = args.rowindex;
//                        $("#" + gridResultObj['gridId']).attr('data-last-ed-row', rowBoundIndex);
//                        var fillDownColumns = gridInitParamObj['fillDownColumns'];
//                        if (fillDownColumns != "" && fillDownColumns != undefined && fillDownColumns != "null")
//                        {
//                            var columnindex = args.columnindex;
//                            var dataField = args.datafield;
//                            var value = args.value;
//                            var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + columnindex + ":" + fillDownColumns;
//                            console.log("currentSelectFillDownData:::" + currentSelectFillDownData);
//                            $("#currentSelectFillDownData").val(currentSelectFillDownData);
//                            var uuu_fillDownDependencyColumns = gridInitParamObj['uuu_fillDownDependencyColumns'];
//                            if (uuu_fillDownDependencyColumns != null && uuu_fillDownDependencyColumns != '') {
//                                $("#currentSelectFillDownDependencyColumns").val(uuu_fillDownDependencyColumns);
//                            }
//
//                        }
//                        if (isMaster == 'Y') {
//                            var currentSelectGridIndex = $("#currentSelectGridIndex").val();
//                            if (currentSelectGridIndex != null && parseInt(currentSelectGridIndex) != rowBoundIndex) {
//
//                                $("#currentSelectGridIndex").val(rowBoundIndex);
//                                var currentSelectChildGridId = $("#currentSelectChildGridId").val();
//                                if (currentSelectChildGridId != null && currentSelectChildGridId != '') {
//
//                                    // ravi code start
//
//                                    var childTabId = $('#level1TabId').find('div.jqx-tabs').attr("id");
//                                    var selectedItem = $('#' + childTabId).jqxTabs('selectedItem');
//                                    var tabTitle = $('#' + childTabId).jqxTabs('getTitleAt', selectedItem);
//                                    var unselectedChildTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
//                                    checkChanges(unselectedChildTabId);
//                                    tabSwitched = true;
//                                    if (childChangeflag) {
//
//                                        askConfirmationOnRowSelect(currentSelectChildGridId);
//                                        return false;
//                                    }
//                                    // ravi code end
//
//
////                               $("#li_"+currentSelectChildGridId).trigger('click');
//                                    $("#li_" + currentSelectChildGridId).click();
//                                } else {
//                                    fetchClusterChildTabs(gridResultObj['gridId'], rowBoundIndex, selectedGridCompType, clusterFormFlag);
//                                }
//                                $("#" + gridResultObj['gridId']).jqxGrid({selectedrowindex: rowBoundIndex});
//                                selectUnselectGrid(gridResultObj['gridId'], rowBoundIndex);
//                            }
//                        } else {
//                            $("#" + gridResultObj.gridId).on('rowclick', function (event) {
//                                var args = event.args;
//                                // row's bound index.
//                                var boundIndex = args.rowindex;
//                                var gridInitAppObj = gridResultObj['gridInitParamObj'];
//                                //  if (componentType == 'MDL') {
//                                var masterChildGrid = "SM_SERVICE_PROP_VALUES";
//                                $('#' + gridResultObj.gridId).attr('data-fetched', 'N');
//                                if (gridInitAppObj['uuu_MasterChildFlag'] == 'Y') {
//                                    $("#" + gridResultObj.gridId).jqxGrid('clearselection');
//                                    $('#' + gridResultObj.gridId).jqxGrid({selectedrowindex: boundIndex});
//                                    $('#' + masterChildGrid).attr('data-fetched', 'N');
//                                    congigureMasterChildGridData(masterChildGrid, "GRID", gridInitAppObj['relationId'], gridResultObj.gridId, boundIndex, gridInitAppObj);
//                                }
//                                //fetchTabsData(compObject.gridId, boundIndex);
//                                //}
//                            });
////                            var componentId=gridResultObj['gridId'];
////                            componentId
////                            if (componentId != null && componentId.indexOf(",") > -1) {
////                                var relationObj = gridResultObj['gridInitParamObj'];
////                                 var relationId="";
////                                if (relationObj != null && !jQuery.isEmptyObject(relationObj)) {
////                                    if (result['compId'] != null && result['compId'] != undefined && result['compId'] != '') {
////                                        relationId = relationObj['relationId'];
////                                    }
////
////                                }
////                                var componentIdArray = componentId.split(",");
////                                if (componentIdArray != null && componentIdArray.length != 0) {
////                                    if (tabReturnFlag == true) {
////                                        $("#" + componentIdArray[0]).attr('data-fetched', 'Y');
////                                        congigureChildGridData(componentIdArray[0], componentType, relationid, masterid, selectedrowid);
////                                        masterChildGrid = componentIdArray[1];
////                                        $("#" + componentIdArray[1]).attr('data-fetched', 'N');
////                                        congigureMasterChildGridData(componentId, 'GRID', relationId, masterid, selectedrowid, '');
////                                        ajaxStop();
////                                    } else {
////                                        congigureChildGridData(componentIdArray[0], componentType, relationid, masterid, selectedrowid);
////                                        masterChildGrid = componentIdArray[1];
////                                        congigureChildGridData(componentIdArray[1], componentType, relationid, masterid, selectedrowid);
////                                        ajaxStop();
////                                    }
////                                }
////                            } else {
////                                if (tabReturnFlag == true) {
////                                    $("#" + masterChildGrid).empty();
////                                }
////                                congigureChildGridData(componentId, componentType, relationid, masterid, selectedrowid);
////                                ajaxStop();
////                            }
//                        }
//                        var isEditable = $("#" + gridResultObj['gridId']).jqxGrid('getcolumnproperty', event.args.column.datafield, 'editable');
//                        if (!editable || !isEditable) {
//                            var hiddenGridIdValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', event.args.rowindex, gridResultObj['gridId'] + "_HIDDEN");
//                            if (hiddenGridIdValue != 'INSERT') {
//                                navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId'], tabId, event.args.rowindex);
//                            }
//                        }
//                    });


//omer sabir
                    $("#" + gridResultObj['gridId']).on('cellclick', function (event) {
                        console.log("event.args.column.datafield:::::" + event.args.column.datafield);
                        var args = event.args;
                        var rowBoundIndex = args.rowindex;
                        $("#" + gridResultObj['gridId']).attr('data-last-ed-row', rowBoundIndex);

                        // Fill down columns logic
                        var fillDownColumns = gridInitParamObj['fillDownColumns'];
                        if (fillDownColumns && fillDownColumns !== "" && fillDownColumns !== "null") {
                            var columnindex = args.columnindex;
                            var dataField = args.datafield;
                            var value = args.value;
                            var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + columnindex + ":" + fillDownColumns;
                            console.log("currentSelectFillDownData:::" + currentSelectFillDownData);
                            $("#currentSelectFillDownData").val(currentSelectFillDownData);

                            var uuu_fillDownDependencyColumns = gridInitParamObj['uuu_fillDownDependencyColumns'];
                            if (uuu_fillDownDependencyColumns) {
                                $("#currentSelectFillDownDependencyColumns").val(uuu_fillDownDependencyColumns);
                            }
                        }

                        // Master grid logic
                        if (isMaster == 'Y') {
                            var currentSelectGridIndex = $("#currentSelectGridIndex").val();
                            if (currentSelectGridIndex && parseInt(currentSelectGridIndex) != rowBoundIndex) {
                                $("#currentSelectGridIndex").val(rowBoundIndex);
                                var currentSelectChildGridId = $("#currentSelectChildGridId").val();

                                if (currentSelectChildGridId) {
                                    // Tab switching validation
                                    var childTabId = $('#level1TabId').find('div.jqx-tabs').attr("id");
                                    var selectedItem = $('#' + childTabId).jqxTabs('selectedItem');
                                    var tabTitle = $('#' + childTabId).jqxTabs('getTitleAt', selectedItem);
                                    var unselectedChildTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')")
                                            .closest("li").attr("id").replace("li_", "");

                                    checkChanges(unselectedChildTabId);
                                    tabSwitched = true;

                                    if (childChangeflag) {
                                        askConfirmationOnRowSelect(currentSelectChildGridId);
                                        return false;
                                    }
                                    $("#li_" + currentSelectChildGridId).click();
                                } else {
                                    fetchClusterChildTabs(gridResultObj['gridId'], rowBoundIndex, selectedGridCompType, clusterFormFlag);
                                }
                                $("#" + gridResultObj['gridId']).jqxGrid({selectedrowindex: rowBoundIndex});
                                selectUnselectGrid(gridResultObj['gridId'], rowBoundIndex);
                            }
                        }

                        // Navigation to form logic
                        var isEditable = $("#" + gridResultObj['gridId']).jqxGrid('getcolumnproperty',
                                event.args.column.datafield, 'editable');
                        if (!isEditable) { // Fixed variable name here
                            var hiddenGridIdValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue',
                                    event.args.rowindex, gridResultObj['gridId'] + "_HIDDEN");
                            if (hiddenGridIdValue != 'INSERT') {
                                navigateToForm(event.args.column.datafield,
                                        $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex),
                                        'form', gridResultObj['gridId'], tabId, event.args.rowindex);
                            }
                        }
                    });

// Rowclick handler moved outside cellclick and properly bound once
                    if (isMaster !== 'Y') {
                        $("#" + gridResultObj.gridId).off('rowclick').on('rowclick', function (event) {
                            var args = event.args;
                            var boundIndex = args.rowindex;
                            var gridInitAppObj = gridResultObj['gridInitParamObj'];
                            var masterChildGrid = gridInitAppObj['uuu_masterchildGrid'];
                            if (gridInitAppObj['uuu_MasterChildFlag'] == 'Y') {
                                $("#" + gridResultObj.gridId).jqxGrid('clearselection');
                                $('#' + gridResultObj.gridId).jqxGrid({selectedrowindex: boundIndex});
                                $('#' + masterChildGrid).attr('data-fetched', 'N');
                                congigureMasterChildGridData(masterChildGrid, "GRID",
                                        gridInitAppObj['relationId'], gridResultObj.gridId, boundIndex, gridInitAppObj);
                            }
                        });
                    }
                    $("#" + gridResultObj['gridId']).on('change', function (event) {

                        var args = event.args;
                        var currentTarget = event.currentTarget;
                        var currentDataField = currentTarget.dataset.lastEdField;
                        var currentRowIndex = currentTarget.dataset.lastEdRow;

                        console.log("Select Changed ");
//                    if (args != null && args != '' && args.item != null && args.item != '' && fieldVal != args.item.label) {
//                        $("#" + gridResultObj.gridId).jqxGrid('endcelledit', currentRowIndex, currentDataField, false);
//
//                    }
                        if (currentDataField != null && currentDataField != '' && currentDataField.indexOf("_DLOV") > -1) {
                            $("#" + gridResultObj['gridId']).jqxGrid('endcelledit', currentRowIndex, currentDataField, false);
                        }


                    });


                    if (isMaster == 'Y') {
                        if (selectedGridCompType == 'FILTER_GRID') {
                            var levelTabIdHeight = $("#levelTabId").height();
                            console.log(":levelTabIdHeight::" + levelTabIdHeight);
                            $("#" + gridResultObj['gridId']).jqxGrid("height", ((parseInt(levelTabIdHeight) - 50) + "px"));

                        }

                        $("#" + gridResultObj['gridId']).on('rowselect', function (event) {


                            var args = event.args;
                            // row's bound index.
                            var boundIndex = args.rowindex;
                            if ($.isArray(boundIndex)) {
                                boundIndex = 0;
                            }
                            $("#currentSelectGridIndex").val(boundIndex);
                            //data-last-ed-row
                            $("#" + gridResultObj['gridId']).attr('data-last-ed-row', boundIndex);
                            var currentSelectChildGridId = $("#currentSelectChildGridId").val();
                            if (currentSelectChildGridId != null && currentSelectChildGridId != '') {

                                // ravi code start
                                var childTabId = $('#level1TabId').find('div.jqx-tabs').attr("id");
                                var selectedItem = $('#' + childTabId).jqxTabs('selectedItem');
                                var tabTitle = $('#' + childTabId).jqxTabs('getTitleAt', selectedItem);
                                var unselectedChildTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
                                checkChanges(unselectedChildTabId);
                                tabSwitched = true;
                                if (childChangeflag) {

                                    askConfirmationOnRowSelect(currentSelectChildGridId);
                                    return false;
                                }
                                // ravi code end

//                               $("#li_"+currentSelectChildGridId).trigger('click');
                                $("#li_" + currentSelectChildGridId).click();
                            } else {
                                fetchClusterChildTabs(gridResultObj['gridId'], boundIndex, selectedGridCompType, clusterFormFlag);
                            }

                            selectUnselectGrid(gridResultObj['gridId'], boundIndex);
//                        if (gridInitParamObj != null
//                                && gridInitParamObj['uuu_FilterPopupNoData'] == 'Y') {
//
//                        }
                            showSelectedRows(gridResultObj['gridId'], event.args.rowindex, gridInitParamObj['uuu_GridNtfnFlag']);
                        });
                        $("#" + gridResultObj['gridId']).on('rowunselect', function (event) {
                            showSelectedRows(gridResultObj['gridId'], null, gridInitParamObj['uuu_GridNtfnFlag']);
                        });
                        if (isMaster == 'N') {
                            $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                            $("#" + gridResultObj['gridId']).jqxGrid('selectrow', 0);
                        }
//                       





                        $("#currentSelectMasterGridId").val(gridResultObj['gridId']);
                        $("#mastergridid").val(gridResultObj['gridId']);
                        // need to call child tbs


                    } else {
                        $("#" + gridResultObj['gridId']).on('rowunselect', function (event) {
                            showSelectedRows(gridResultObj['gridId'], null, gridInitParamObj['uuu_GridNtfnFlag']);
                        });

                        $("#" + gridResultObj['gridId']).on('rowselect', function (event) {
                            var boundIndex = event.args.rowindex;
                            var gridInitAppObj = gridResultObj['gridInitParamObj'];
                            var masterChildGrid = gridInitAppObj['uuu_masterchildGrid'];
                            congigureMasterChildGridData(masterChildGrid, "GRID",
                                    gridInitAppObj['relationId'], gridResultObj.gridId, boundIndex, gridInitAppObj);
                            showSelectedRows(gridResultObj['gridId'], event.args.rowindex, gridInitParamObj['uuu_GridNtfnFlag']);
                        });

                        //data-master-id masterGridId
                        $("#" + gridResultObj['gridId']).attr('data-master-id', masterGridId);
                        //currentSelectChildGridId
                        $("#currentSelectChildGridId").val(gridResultObj['gridId']);
                    }

                }// end if(gridPropObj != null)
                if (gridResultObj['action'] != null && gridResultObj['action'] != undefined) {
                    setTimeout(function () {
//                        askConfirmationOnAction(gridResultObj);
                    }, 1000);

                }

            }



        } catch (e) {
            stopLoader();
            console.log(e);
        }
//    stopLoader();
//        stopLoader();
    } catch (er) {
//        stopLoader();
    }
//    stopLoader();
}


//function clusterGridConfig(gridResultObj, masterGridId, tabId, selectedGridCompType, isMaster, paramArray, relationId, selectedMasterData, clusterFormFlag) {
//    try {
//        showLoader();
//        console.log(":293::gridConfig::");
//        tabId = tabId + "_TAB";
//        var length = '';
//        try {
//            length = $("#" + tabId).jqxTabs('length');
//        } catch (e) {
//        }
//        if (length >= 1) {
//            try {
//                $("#" + gridResultObj['gridId']).jqxGrid("destroy");
//                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
//                // $(".jqx-clear .jqx-border-reset .jqx-overflow-hidden .jqx-max-size .jqx-position-relative").remove();
//            } catch (e) {
//            }
//            $("#" + gridResultObj['gridId']).remove();
//            console.log(gridResultObj['gridId'] + ":::::$(gridResultObj['gridId']).length::::::" + $("#" + gridResultObj['gridId']).length);
//            if ($("#" + gridResultObj['gridId']).length == 0) {
//
//                $("#" + gridResultObj['gridId'] + "_DIV_" + selectedGridCompType).html("<div id='" + gridResultObj['gridId'] + "'></div>");
//
//            }
//        }
//
//
//        try {
//            // if(true) {
//            try {
////            $('#' + gridId).jqxGrid('updatebounddata');
//                $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata');
////            $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'cells');
//                $("#" + gridResultObj['gridId']).jqxGrid('clearfilters');
//            } catch (e) {
//
//            }
//
//            // $("#" + gridResultObj['gridId']).jqxGrid('destroy');
//            var selectedItem = $("#" + tabId).jqxTabs("selectedItem") + 1;
//            try {
//                var defalultImg = $("#" + tabId + " ul li:nth-child(" + selectedItem + ")").find('img').attr('src');
//                if (defalultImg != null) {
//                    var n = defalultImg.indexOf("_white");
//                    if (!(n > -1)) {
//                        var mainnewimage = defalultImg.replace(".png", "").replace(/_white/g, "");
//                        var attributes = $("#" + tabId + " ul li:nth-child(" + selectedItem + ")").attr("id");
//                        $("#" + attributes).find('img').attr('src', mainnewimage + '_white.png');
//                    }
//                }
//            } catch (en) {
//
//            }
//
//
//
//
//
//            if (gridResultObj != null) {
//
//                //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
//                var hrefObj = {}; //hrefObj
//                hrefObj = gridResultObj['hrefObj'];
//                $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                $("#" + gridResultObj['gridId'] + "_hrefColumn").remove();
//                $("#" + gridResultObj['gridId'] + "_linkedColumns").remove();
//                $("#" + gridResultObj['gridId'] + "_stripValue").remove();
//                $("#" + gridResultObj['gridId'] + "_imageColumn").remove();
//                $("#" + gridResultObj['gridId'] + "_imageTable").remove();
//                $("#" + gridResultObj['gridId'] + "_imageTableColumn").remove();
//                $("#" + gridResultObj['gridId'] + "_hiddenObj").remove();
//                $("#" + gridResultObj['gridId'] + "_formId").remove();
//                $("#" + gridResultObj['gridId'] + "_panelId").remove();
//                $("#" + gridResultObj['gridId'] + "_columnInitParams").remove();
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_hrefColumn'/>");
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_linkedColumns'/>");
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_stripValue'/>");
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_imageColumn'/>");
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_imageTable'/>");
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_imageTableColumn'/>");
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_hiddenObj'/>");
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_formId'/>");
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_panelId'/>");
//                $(".visionMainPage").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_columnInitParams'/>");
//
////                        $("#hrefColumn").val(hrefObj['hrefColumn']);
//                $("#linkedColumns").val(hrefObj['linkedColumns']);
//                $("#stripValue").val(hrefObj['stripValue']);
//                $("#imageColumn").val(hrefObj['imageColumn']);
//                $("#imageTable").val(hrefObj['imageTable']);
//                $("#imageTableColumn").val(hrefObj['imageTableColumn']);
//                $("#defaultValues").val(gridResultObj['defaultValues']);
//
//                $("#" + gridResultObj['gridId'] + "_hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                $("#" + gridResultObj['gridId'] + "_linkedColumns").val(hrefObj['linkedColumns']);
//                $("#" + gridResultObj['gridId'] + "_stripValue").val(hrefObj['stripValue']);
//                $("#" + gridResultObj['gridId'] + "_imageColumn").val(hrefObj['imageColumn']);
//                $("#" + gridResultObj['gridId'] + "_imageTable").val(hrefObj['imageTable']);
//                $("#" + gridResultObj['gridId'] + "_imageTableColumn").val(hrefObj['imageTableColumn']);
//
//                var gridInitParamObj = {}; //gridInitParamObj
//                gridInitParamObj = gridResultObj['gridInitParamObj'];
//                if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
//                    $("#" + gridResultObj['gridId']).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
//                }
//                if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
//                    $("#" + gridResultObj['gridId']).attr("data-gridResultObj", JSON.stringify(gridResultObj));
//                }
//                var attachGridViewFlag = gridInitParamObj['uuu_AttachGridView'];
//                $("#attachGridViewFlag").val(attachGridViewFlag);
//                var attachInitParams = gridInitParamObj["uuu_attachInitParams"];
//                var initParamSource = gridInitParamObj["uuu_Source"];
//                //multiSelectGridId
//                if (isMaster == 'Y') {
//                    $("#massColumnHide").val(gridInitParamObj['massColumnHide']);
//                    if (gridInitParamObj != null && gridInitParamObj['uuu_GridMultiSelect'] == 'N') {
//                        $("#multiSelectGridId").val(gridResultObj['gridId']);
//                    }
//                    $("#massValidateComment").val(gridInitParamObj['uuu_ValidateComment']);
//                }
//                $("#" + gridResultObj['gridId'] + "_massColumnHide").remove();
//                $("#" + gridResultObj['gridId'] + "_massValidateComment").remove();
//                $("#visionClusterSpliterMain").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_massColumnHide' />");
//                $("#visionClusterSpliterMain").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_massValidateComment' />");
//                $("#" + gridResultObj['gridId'] + "_massColumnHide").val(gridInitParamObj['massColumnHide']);
//                $("#" + gridResultObj['gridId'] + "_massValidateComment").val(gridInitParamObj['uuu_ValidateComment']);
//                if (isMaster != 'Y') {
//                    var relationObjArray = gridResultObj['relationArray'];
//                    if (relationObjArray != null && !jQuery.isEmptyObject(relationObjArray)) {
//                        $("#relationArray").val(JSON.stringify(relationObjArray));
//                    } else {
//                        $("#relationArray").val();
//                    }
//
//                }
//                $("#" + gridResultObj['gridId'] + "_defaultValues").remove();
//                $("#visionClusterSpliterMain").append("<input type='hidden' id='" + gridResultObj['gridId'] + "_defaultValues' />");
//                $("#" + gridResultObj['gridId'] + "_defaultValues").val(gridResultObj['initialValues']);
//                $("#" + gridResultObj['gridId']).attr("initParamSource", initParamSource);
//                if (attachInitParams != null && attachInitParams != '' && attachInitParams != undefined)
//                {
//                    var colParams = attachInitParams.split(":");
//                    if (colParams != null && colParams != '' && colParams != undefined)
//                    {
//                        $("#" + gridResultObj['gridId']).attr("checkAttachType", colParams[1]);
//                    }
//                }
//                $("#processClassAndMethod").val(gridInitParamObj['uuu_processClassAndMethod'] != null ? gridInitParamObj['uuu_processClassAndMethod'] : "");
//                var batchInd = gridInitParamObj["uuu_BatchInd"];
//                $("#batchIndicator").val(batchInd);
//                var tableName = gridResultObj['tableName'];
//                $("#tableName").val(tableName);
//                $("#" + gridResultObj['gridId']).attr('data-table', tableName);
//                var barCodeColumnName = gridInitParamObj['uuu_BarCodeColumn'];
//                $("#barCodeColumnName").val(barCodeColumnName);
//
//                if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
//                    $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
//                }
//
//                var columnInitParamObj = {};
//                columnInitParamObj = gridResultObj['columnInitParamsObj'];
//                $("#" + gridResultObj['gridId'] + "_columnInitParams").val(JSON.stringify(columnInitParamObj));
//                $("#columnInitParams").val(JSON.stringify(columnInitParamObj));
//
//                var dropDownListData = gridResultObj.dropDownListData;
//
//                //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
//                if (gridResultObj != null && gridResultObj.datafields) {
//
//                }
//                var dataFeilds = gridResultObj.datafields;
//                var hrefObj = gridResultObj.hrefObj;
//                var localData = gridResultObj.data;
//                var formId = gridResultObj.formId;
//                var panelId = gridResultObj.panelId;
//                var gridOperation = gridResultObj.gridOperation;
//                //////////////////console.log("gridOperation:::"+gridOperation);
//
//                ////////////////////console.log("formId::::::"+formId);
//                $("#" + gridResultObj['gridId'] + "_formId").val(formId);
//                $('#formId').val(formId);
//                $("#panelId").val(panelId);
//                $("#" + gridResultObj['gridId'] + "_panelId").val(panelId);
//                var gridPropObj = {};
//                gridPropObj = gridResultObj.gridPropObj;
//                var hiddenObj = gridResultObj['hiddenObj'];
//                if (hiddenObj != null) {
//                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
//                    $("#" + gridResultObj['gridId'] + "_hiddenObj").val(JSON.stringify(hiddenObj));
//                }
//                if (gridPropObj != null) {
//                    //  fieldsArray.length = 0;
//                    // fieldsArray = gridResultObj.columns;
//                    gridPropObj.columns = gridResultObj.columns;
//                    var headerTooltipRenderer = function (element) {
//                        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                            position: 'bottom-right',
//                            showArrow: false, content: $(element).text()});
//                    }
//                    var dataSheetRendered = function (element) {
//
//                        // $(element).html("<div class='show_detail' ></div>");
//                        $(element).addClass("show_detail");
//                        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                            position: 'bottom-right',
//                            showArrow: false,
//                            content: "Data Sheet"});
//                        //content: $(element).text()});
//                    }
//                    var renderToolbar = gridPropObj.renderToolbar;
//                    // console.log("renderToolbar::::"+renderToolbar);
//                    //  alert("renderToolbar:::"+renderToolbar);
//                    gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
//                    //      var defaultTabName = $("#defaultTabName").val();
//                    var htmlContentRender = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                        var data = "<xmp>" + value + "</xmp>";
//                        var element = $(data);
//                        element.addClass('visionSearchWrapDescrDiv');
//                        var gridRowHeight = $("#" + gridResultObj['gridId']).jqxGrid('rowsheight');
//                        if (gridRowHeight != null && parseInt(gridRowHeight) <= 50) {
//                            element.css('overflow-y', 'scroll');//overflow-y:scroll !important;
//                        }
//                        if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
//                            var selectedColumnInitParamObj = columnInitParamObj[columnfield];
//                            if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
//                                var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
//                                if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
//                                        rowData != null
//                                        && rowData[uuu_TitleValueColumn] != null
//                                        && rowData[uuu_TitleValueColumn] != ''
//                                        ) {//REQUIRED_FLAG
//                                    element.removeAttr('title');
//                                    element.attr('title', rowData[uuu_TitleValueColumn]);
//                                }
//                            }
//
//                        }
//                        return element[0].outerHTML;
//                    };
////                      var drpdownGridAndEditRender = function (row, columnfield, value, defaulthtml, columnproperties) {
////                        var cellValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, columnfield);
////                        var viewType = "GRID-VIEW";
////                        var editable =  gridPropObj.editable;
////                        var celwidth = columnproperties.width;
////                        var colLabel = columnproperties.text;
////                        var ddwData = gridResultObj.dropDowndData;
////                        var ddwObj = ddwData[columnfield];
////                        var dependencyparams = ddwObj.dependencyparams;
////                       $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
////                        var imageHtml = '<img src="images/iDXPUI5SearchDropdown.png" onclick="visionDropdown(\'' + ddwObj.ddwId.trim() + '\',\'' + dependencyparams + '\',\'' + viewType + '\',\'' + ddwObj.gridId + '\',\'' + columnfield + '\',\'' + row + '\')">';
//////        var cellHtml = '<div> ' +
//////                '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" class ="griddrpdownAndEditValue" type="text" style="width: 90%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;" autocomplete="off"  value="' + value + '" data-column="' + columnfield + '" data-last-ed-field=\'' + columnfield + '\'  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" ' + 
////////                ' onkeydown="preventDeletekey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '+
//////                ' onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
//////                imageHtml +
//////                '</div>'; 
//////        var cellHtml = '<input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: 90%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;" autocomplete="off"  value="' + value + '" data-column="' + columnfield + '" data-last-ed-field=\'' + columnfield + '\'  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" onkeydown="preventDeletekey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
//////                imageHtml ;
////
////                        var onkeyupfunc = ' onkeyup="updateCellValueDDW(\'' + $("#" + gridResultObj['gridId']) + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" value="' + value + '"'
//////+' onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
////                                + ' onkeydown="preventDeleteKey(\'' + $("#" + gridResultObj['gridId']) + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
////                                + '';
////                        var cellHtml = "<div  class='visionGridDataAlignInput'>"
////                                + "<div class='visionGridDataAlignInputField' style='width: 95%'>"
////                                + "<input type='text'"
////                                + " id = '" + $("#" + gridResultObj['gridId']) + columnfield + "griddrpdownAndEditValueId" + row + "'"
////                                + " data-column-label='" + colLabel + "' "
//////                + " onkeyup=propValKeyUp1('" + tbid + "'," + row + ",'none','" + ddwObj.gridId + "','" + columnfield + "',event)"
////                                + " style=' border:none;width: 95%;height:" +$("#" + gridResultObj['gridId']).jqxGrid('rowsheight') + "px;' autocomplete='off'"
////                                + " " + onkeyupfunc + " "
////                                + "/>"
////                                + "</div><div class='visionGridDataAlignInputImage' >"
////                                + " <img src='images/iDXPUI5SearchDropdown.png' style='width: 12px; height: 12px;margin-top: 10px;margin-right: 15px; cursor: pointer;'"
////                                + " onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "'," + row + ",'" + ddwObj.gridId + row + "')>"
////                                + "</div>"
////                                + "</div>";
////
////
////                        return cellHtml;
////                    };
//
//
//                    var drpdownGridAndEditRender = function (row, columnfield, value, defaulthtml, columnproperties) {
//                        var tabId = gridResultObj['gridId'];
//                        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
//                        var viewType = "GRID-VIEW";
//                        var editable = gridPropObj.editable;
//                        var celwidth = columnproperties.width;
//                        var colLabel = columnproperties.text;
//                        var ddwData = gridResultObj.dropDowndData;
//                        var ddwObj = ddwData[columnfield];
//                        var dependencyparams = ddwObj.dependencyparams;
//                        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
//                        var imageHtml = '<img src="images/iDXPUI5SearchDropdown.png" onclick="visionDropdown(\'' + ddwObj.ddwId.trim() + '\',\'' + dependencyparams + '\',\'' + viewType + '\',\'' + ddwObj.gridId + '\',\'' + columnfield + '\',\'' + row + '\')">';
//                        var onkeyupfunc = ' onkeyup="updateCellValueDDW(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" value="' + value + '"'
//                                + ' onkeydown="preventDeleteKey(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" '
//                                + '';
//                        var cellHtml = "<div  class='visionGridDataAlignInput'>"
//                                + "<div class='visionGridDataAlignInputField' style='width: 95%'>"
//                                + "<input type='text'"
//                                + " id = '" + tabId + columnfield + "griddrpdownAndEditValueId" + row + "'"
//                                + " data-column-label='" + colLabel + "' "
//                                + " style=' border:none;width: 95%;height:" + $('#' + tabId).jqxGrid('rowsheight') + "px;' autocomplete='off'"
//                                + " " + onkeyupfunc + " "
//                                + "/>"
//                                + "</div><div class='visionGridDataAlignInputImage' >"
//                                + " <img src='images/iDXPUI5SearchDropdown.png' style='width: 12px; height: 12px;margin-top: 10px;margin-right: 15px; cursor: pointer;'"
//                                + " onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "'," + row + ",'" + ddwObj.gridId + row + "')>"
//                                + "</div>"
//                                + "</div>";
//
//
//                        return cellHtml;
//                    };
//                    var gridTextCellComitRender = function (row, columnfield, value, defaulthtml, columnproperties) {
//                        var tabId = gridResultObj['gridId'];
//                        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
//                        var viewType = "GRID-VIEW";
//                        var editable = gridPropObj.editable;
//                        var celwidth = columnproperties.width;
//                        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
//                        var celwidth1 = $("#" + tabId).jqxGrid('getcolumnproperty', columnfield, 'width');
//                        var cellHtml = '<div> <input id = "' + tabId + columnfield + 'griddrpdownAndEditValueId' + row + '" type="text" style="width: 100%;height: ' + $("#" + tabId).jqxGrid('rowsheight') + 'px;"  autocomplete="off" value="' + value + '" data-column="' + columnfield + '"  onfocus="selectFocusedRow(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" ' +
//                                ' onkeyup="updateCellValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
//                                '</div>';
//                        return cellHtml;
//                    };
//                    var gridTextCellCheckBoxRender = function (row, columnfield, value, defaulthtml, columnproperties) {
//                        var tabId = gridResultObj['gridId'];
//                        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
//                        var viewType = "GRID-VIEW";
//                        var editable = gridPropObj.editable;
//                        var celwidth = columnproperties.width;
//                        $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
//                        if (value != null && value != '' && value != undefined && (value == "Y" || value == "y"))
//                        {
//                            var cellHtml = '<label class="customcontainer"> <input id = "' + tabId + columnfield + 'griddcheckBoxRenderId' + row + '" type="checkbox" checked' +
//                                    ' value="Y" data-column="' + columnfield + '"   onchange="updateCheckBoxValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
//                                    '<span class="customecheckmark"></span></label>';
//                        } else {
//                            var cellHtml = '<label class="customcontainer"> <input id = "' + tabId + columnfield + 'griddcheckBoxRenderId' + row + '" type="checkbox" ' +
//                                    ' value="N" data-column="' + columnfield + '"   onchange="updateCheckBoxValue(\'' + tabId + '\',' + row + ', \'' + columnfield + '\', \'' + value + '\')" />' +
//                                    '<span class="customecheckmark"></span></label>';
//                        }
//
//                        return cellHtml;
//                    };
//
//
//
//                    var urlRender
//                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                                var element = $(defaulthtml);
//                                element.attr("onclick", "openURLInTab('" + value + "')");
//                                element.addClass("visionSearchUrlLink");
//                                return element[0].outerHTML;
//                            };
//                    var imageRender
//                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                                if (value != "" && value != null)
//                                {
//
//                                    if (labelObject['Click to view the attachment'] != null && labelObject['Click to view the attachment'] != '' && labelObject['Click to view the attachment'] != undefined) {
//                                        return  "<img  title='" + labelObject['View the attachment Logo'] != null ? labelObject['View the attachment Logo'] : 'View the attachment Logo' + "' style='cursor:pointer;'"
//                                                + " src='" + value + "' class='imageStyle'  id='dtlul_" + row + "'" + "'"
//                                                + " onmouseover=imageMouseHover('dtlul_" + row + "') onmouseout=imageMouseOut() >";
//                                    } else
//                                    {
//                                        return  "<img  title='View the attachment Logo' style='cursor:pointer;'"
//                                                + " src='" + value + "' class='imageStyle'  id='dtlul_" + row + "'" + "'"
//                                                + " onmouseover=imageMouseHover('dtlul_" + row + "') onmouseout=imageMouseOut() >";
//                                    }
//
//
//                                }
//                            };
//                    var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {
//
//                        return '<div style="white-space: pre-line;">' + value + '</div>';
//                    };
//
//
//                    var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
//                        var colwidth = $('#' + gridResultObj['gridId']).jqxGrid('getcolumnproperty', columnfield, 'width');
//                        var scrollPosition = $('#' + gridResultObj['gridId']).jqxGrid('scrollposition');
//                        $('#idsearchwraptempContainerdiv').css("width", colwidth);
//                        $('#idsearchwraptempContainerdiv').html(value);
//                        var textHeight = $("#idsearchwraptempContainerdiv").outerHeight(true);
//                        var textHeight1 = textHeight / 1.5;
//                        try {
//                            $('#idsearchwraptempContainerdiv').html("");
//                        } catch (w) {
//                            $('#idsearchwraptempContainerdiv').html("");
//                        }
//                        var gridrowsheight1 = $('#' + gridResultObj['gridId']).jqxGrid('getrowheight', row);
//                        var gridrowsheight = $('#' + gridResultObj['gridId']).jqxGrid('rowsheight');
//                        if (gridrowsheight1 != null && gridrowsheight1 != ''
//                                && gridrowsheight1 != 'undefined'
//                                && gridrowsheight1 != undefined
//                                ) {
//
//                        } else {
//                            gridrowsheight1 = gridrowsheight;
//                        }
//
//                        if (textHeight1 > gridrowsheight1) {
//                            $('#' + gridResultObj['gridId']).jqxGrid('setrowheight', row, textHeight / 1.5);
//                        }
//                        $('#' + gridResultObj['gridId']).jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);
//
//                        var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
//                        var divClass = "jqx-grid-cell-left-align";
//                        if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
//                            var selectedColumnInitParamObj = columnInitParamObj[columnfield];
//                            if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
//                                uuu_columnstyle = selectedColumnInitParamObj['uuu_columnstyle'];
//                                if (uuu_columnstyle != null && uuu_columnstyle != ''
//                                        && uuu_columnstyle != 'undefined'
//                                        && uuu_columnstyle != undefined
//                                        ) {
//
//                                } else {
//                                    uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
//                                }
//
//                                var cellalignClass = cellalignColParamObj['uuu_Colcellsalign'];
//
//                                if (cellalignClass != null && cellalignClass != undefined && cellalignClass != '' && cellalignClass == 'center') {
//                                    divClass = "jqx-grid-cell-middle-align";
//                                } else if (cellalignClass != null && cellalignClass != undefined && cellalignClass != '' && cellalignClass != 'center') {
//                                    divClass = cellalignClass;
//                                } else {
//                                    divClass = "jqx-grid-cell-left-align";
//                                }
//                            }
//
//
//                        }
////                   return '<div style="white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;">' + value + '</div>';
//                        return '<div class="' + divClass + '" style="' + uuu_columnstyle + '">' + value + '</div>';
//                    };
//
//                    var descoptrender
//                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                                var element = $(defaulthtml);
//                                element.addClass('visionSearchWrapDescrDiv');
//                                var gridRowHeight = $("#" + gridResultObj['gridId']).jqxGrid('rowsheight');
//                                if (gridRowHeight != null && parseInt(gridRowHeight) <= 50) {
////                                         element.css('overflow', 'scroll');
//                                    element.css('overflow-y', 'scroll');//overflow-y:scroll !important;
//
//                                }
//                                if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
//                                    var selectedColumnInitParamObj = columnInitParamObj[columnfield];
//                                    if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
//                                        var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
//                                        if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
//                                                rowData != null
//                                                && rowData[uuu_TitleValueColumn] != null
//                                                && rowData[uuu_TitleValueColumn] != ''
//                                                ) {//REQUIRED_FLAG
//                                            element.removeAttr('title');
//                                            element.attr('title', rowData[uuu_TitleValueColumn]);
//                                        }
//                                    }
//
//                                }
//
//                                return element[0].outerHTML;
//                            };
//                    var replaceRenderer
//                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                                var element = $(defaulthtml);
//                                return element[0].outerHTML;
//                            };
//                    var charColorRender
//                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                                var element = $(defaulthtml);
//                                if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
//                                    var selectedColumnInitParamObj = columnInitParamObj[columnfield];
//                                    if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
//                                        var mandColumn = selectedColumnInitParamObj['uuu_CharMandColumn'];
//                                        if (!(mandColumn != null && mandColumn != '')) {
//                                            mandColumn = 'REQUIRED_FLAG';
//                                        }
//                                        if (rowData != null && (rowData[mandColumn] == 'Y'
//                                                || rowData[mandColumn] == 'M'
//                                                )) {//REQUIRED_FLAG
//                                            element.addClass('visionSearchCharRedDiv');
//
//                                        }
//                                        var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
//                                        if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
//                                                rowData != null
//                                                && rowData[uuu_TitleValueColumn] != null
//                                                && rowData[uuu_TitleValueColumn] != ''
//                                                ) {//REQUIRED_FLAG
//                                            element.removeAttr('title');
//                                            element.attr('title', rowData[uuu_TitleValueColumn]);
//                                        }
//                                    }
//
//                                }
//                                return element[0].outerHTML;
//                            };
//                    var charValueColorRender
//                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                                var element = $(defaulthtml);
//                                if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
//                                    var selectedColumnInitParamObj = columnInitParamObj[columnfield];
//                                    if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
//                                        var mandColumn = selectedColumnInitParamObj['uuu_CharValueMandColumn'];
//                                        if (!(mandColumn != null && mandColumn != '')) {
//                                            mandColumn = 'REQUIRED_FLAG';
//                                        }
//                                        if (rowData != null && (rowData[mandColumn] == 'Y'
//                                                || rowData[mandColumn] == 'M'
//                                                )) {//REQUIRED_FLAG
//                                            element.addClass('visionSearchCharValRedDiv');
//                                        }
//                                        var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
//                                        if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
//                                                rowData != null
//                                                && rowData[uuu_TitleValueColumn] != null
//                                                && rowData[uuu_TitleValueColumn] != ''
//                                                ) {//REQUIRED_FLAG
//                                            element.removeAttr('title');
//                                            element.attr('title', rowData[uuu_TitleValueColumn]);
//                                        }
//                                    }
//
//                                }
//                                return element[0].outerHTML;
//                            };
//                    var titleRender
//                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                                var element = $(defaulthtml);
//                                if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
//                                    var selectedColumnInitParamObj = columnInitParamObj[columnfield];
//                                    if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
//                                        var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
//                                        if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
//                                                rowData != null
//                                                && rowData[uuu_TitleValueColumn] != null
//                                                && rowData[uuu_TitleValueColumn] != ''
//                                                ) {//REQUIRED_FLAG
//                                            element.removeAttr('title');
//                                            element.attr('title', rowData[uuu_TitleValueColumn]);
//                                        }
//                                    }
//
//                                }
//                                return element[0].outerHTML;
//                            };
//
//                    var xmlRenderer
//                            = function (row, columnfield, value, defaulthtml, columnproperties) {
//                                console.log("xmlRenderer::");
//                                if (value != "" && value != null)
//                                {
//                                    return  "<img src ='images/xml_icon.png' style='cursor:pointer; width: 20px; height: 20px;position: fixed; title='Click to view the Payload' style='cursor:pointer;' onclick=viewXml('" + gridResultObj['gridId'] + "','" + row + "','" + columnfield + "','" + gridResultObj['tableName'] + "')  class='imageStyle visionTemplete'  id='xmldtlul_" + row + "' >";
//                                }
//                            };
//                    var descriptorImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
//                        return  "<img title='Click to create a record' style='cursor:pointer;'  src='" + value + "' class='imageStyle visionTemplete' data-count='" + $('#templateResults').jqxGrid('pagesize') + "' id='dtlul_"
//                                + row + "' onmouseover=templeteMouseOver('dtlul_" + row + "'," + $("#templateResults").jqxGrid("pagesize") + ") onmouseout=templeteMouseOut('dtlul_" + row + "'," + $("#templateResults").jqxGrid("pagesize") + ")>";
//                    };
//                    var documentRanderer
//                            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                                //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
//                                console.log("hiiiii");
//                                return '<div onclick=viewDocument("' + value + '") style="cursor:pointer;">View Document</div>';
//                            };
//
//                    var editable = gridPropObj.editable;
//                    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                        var cellValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, columnfield);
//                        var viewType = "GRID-VIEW";
//                        var ddwData = gridResultObj.dropDowndData;
//                        var ddwObj = ddwData[columnfield];
//                        var dependencyparams = ddwObj.dependencyparams;
//                        if (editable) {
//                            //    return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
//                            return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + gridResultObj['gridId'] + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
//                        } else
//                        {
//                            return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
//                        }
//
//                    };
//                    var attachmentImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//
//                        if (value != "" && value != null) {
//                            var iconName = "";
//                            if (rowData != null && rowData['TYPE'] == 'D') {//TYPE
//                                var fileName = rowData['FILE_NAME'];
//                                if (fileName != null && (fileName.lastIndexOf(".pdf") > -1 || fileName.lastIndexOf(".PDF") > -1)) {
//                                    iconName = "images/pdficon.png";
//                                    //pdficon
//                                } else if (fileName != null && (fileName.lastIndexOf(".xls") > -1
//                                        || fileName.lastIndexOf(".XLS") > -1
//                                        || fileName.lastIndexOf(".xlsx") > -1
//                                        || fileName.lastIndexOf(".XLSX") > -1)
//                                        ) {
//                                    iconName = "images/xlsicon.png";
//                                } else if (fileName != null && (fileName.lastIndexOf(".doc") > -1
//                                        || fileName.lastIndexOf(".docx") > -1
//                                        || fileName.lastIndexOf(".DOC") > -1
//                                        || fileName.lastIndexOf(".DOCX") > -1)
//                                        ) {
//                                    iconName = "images/windoc.png";
//                                } else if (fileName != null && (fileName.lastIndexOf(".ppt") > -1
//                                        || fileName.lastIndexOf(".pptx") > -1
//                                        || fileName.lastIndexOf(".PPT") > -1
//                                        || fileName.lastIndexOf(".PPTX") > -1)
//                                        ) {
//                                    iconName = "images/ppt.png";
//                                } else if (fileName != null && (fileName.lastIndexOf(".xps") > -1
//                                        || fileName.lastIndexOf(".xpsx") > -1
//                                        || fileName.lastIndexOf(".XPS") > -1
//                                        || fileName.lastIndexOf(".XPSX") > -1)
//                                        ) {
//                                    iconName = "images/xps-file-icon.png";
//
//                                } else {
//                                    iconName = "images/Notepad.png";
//                                }
//                            } else {
//                                iconName = value;
//                            }
//                            if (labelObject['Click to view the attachment'] != null && labelObject['Click to view the attachment'] != '' && labelObject['Click to view the attachment'] != undefined) {
//                                return  "<img title='" + labelObject['Click to view the attachment'] != null ? labelObject['Click to view the attachment'] : 'Click to view the attachment' + "' style='cursor:pointer;' onclick=viewAttachment('" + gridResultObj['gridId'] + "'," + row + ")  src='" + iconName + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";
//                            } else
//                            {
//                                return  "<img title='Click to view the attachment' style='cursor:pointer;' onclick=viewAttachment('" + gridResultObj['gridId'] + "'," + row + ")  src='" + iconName + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";
//                            }
//                        } else {
//                            return "<div class='visionCoFileImage'>"
//                                    + "<input name='colFileImage' type='file' id ='visionColFileId' style ='display:none'/>"
//                                    + "<img src='images/attach_pin_icon_blue.png' onclick=showgridBrowseButton('" + gridResultObj['gridId'] + "') style='cursor:pointer;margin-left: 30%;'/>"
//                                    + "</div>";
//
//                        }
//                    };
//                    if (editable) {
//                        for (var i = 0; i < dataFeilds.length; i++) {
//                            if (typeof dataFeilds[i].values != "undefined" && dataFeilds[i].values != null) {
//                                var listboxData = eval(dataFeilds[i].values.source);
//                                var listboxSource =
//                                        {
//                                            datatype: "json",
//                                            datafields: [
//                                                {name: 'ListboxValue', type: 'string'},
//                                                {name: 'id', type: 'string'}
//                                            ],
//                                            localdata: listboxData
//                                        };
//                                var listBoxAdapter = new $.jqx.dataAdapter(listboxSource);
//                                gridResultObj.datafields[i].values.source = listBoxAdapter.records;
//                                // gridResultObj.datafields[i].values.source = listBoxAdapter.records;
//                            }
//                        }
//                    }
//                    for (var i = 0; i < gridPropObj.columns.length; i++) {
//                        if (gridPropObj.columns [i].cellsrenderer != null) {
//                            gridPropObj.columns [i].cellsrenderer = eval(gridPropObj.columns [i].cellsrenderer);
//                        }
//                        if (gridPropObj.columns[i].rendered != null) {
//                            gridPropObj.columns[i].rendered = eval('(' + gridPropObj.columns[i].rendered + ')');
//                        }
//
//                        if (gridPropObj.columns[i].createeditor != null) {
//                            gridPropObj.columns[i].createeditor = eval('(' + gridPropObj.columns[i].createeditor + ')');
//                        }
//                        if (gridPropObj.columns[i].initeditor != null) {
//                            gridPropObj.columns[i].initeditor = eval('(' + gridPropObj.columns[i].initeditor + ')');
//                        }
//                        if (gridPropObj.columns[i].geteditorvalue != null) {
//                            gridPropObj.columns[i].geteditorvalue = eval('(' + gridPropObj.columns[i].geteditorvalue + ')');
//                        }
//                        if (gridPropObj.columns[i].cellvaluechanging != null) {
//                            gridPropObj.columns[i].cellvaluechanging = eval('(' + gridPropObj.columns[i].cellvaluechanging + ')');
//                        }
//                        if (gridPropObj.columns[i].cellbeginedit != null) {
//                            gridPropObj.columns[i].cellbeginedit = eval('(' + gridPropObj.columns[i].cellbeginedit + ')');
//                        }
//                    }
//
//                    // for work flow start
//                    if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {
//
//                        gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
//                    }
//                    allGridColumns[gridResultObj['gridId']] = gridPropObj.columns;
//                    var data = {};
//                    if (gridInitParamObj != null
//                            && gridInitParamObj['uuu_FilterPopupNoData'] != 'Y') {
//                        data['gridId'] = gridResultObj['gridId'];
//                        data['colsArray'] = JSON.stringify(gridResultObj['colsArray']);
//                        data['tableName'] = gridResultObj['tableName'];
//                        data['paramArray'] = JSON.stringify(paramArray);
//                        let chilWabdObj = gridInitParamObj.uuu_CompareQueryAndUrlMethod;
//                        if (chilWabdObj != null && chilWabdObj != 'undefined') {
//                            data.CompareQueryAndUrlMethod = chilWabdObj;
//                        }
//                        if (isMaster == 'N') {
//                            data['selectedRowData'] = JSON.stringify(selectedMasterData);
//                            data['relationId'] = relationId;
//                            data['masterGridId'] = masterGridId;
//                        }
//                    }
//                    var source =
//                            {
//                                type: 'POST',
////                                                async: false,
//                                datatype: "json",
//                                datafields: dataFeilds,
//                                data: data,
//                                url: 'genericClusterTabsData',
//                                cache: false,
//                                root: 'Rows',
//                                processdata: function (data) {
//
//                                    data.multiSortColsArray = ($("#" + gridResultObj['gridId'] + "_sort_columns").val() != null
//                                            ? $("#" + gridResultObj['gridId'] + "_sort_columns").val() : "");
//                                    if (gridInitParamObj != null
//                                            && !jQuery.isEmptyObject(gridInitParamObj)
//                                            && (gridInitParamObj['uuu_FilterGridFormPopup'] == 'Y' || gridInitParamObj['uuu_FilterPopupNoData'] == 'Y')) {
//                                        data.paramArray = ($("#" + gridResultObj['gridId'] + "_filter_columns").val() != null
//                                                ? $("#" + gridResultObj['gridId'] + "_filter_columns").val() : "");
//                                    }
//                                    if (gridInitParamObj != null
//                                            && gridInitParamObj['uuu_FilterPopupNoData'] == 'Y'
//                                            && $("#" + gridResultObj['gridId'] + "_filter_columns").val() != null) {
//                                        data['gridId'] = gridResultObj['gridId'];
//                                        data['colsArray'] = JSON.stringify(gridResultObj['colsArray']);
//                                        data['tableName'] = gridResultObj['tableName'];
//                                        data['paramArray'] = data.paramArray;
//                                        let chilWabdObj = gridInitParamObj.uuu_CompareQueryAndUrlMethod;
//                                        if (chilWabdObj != null && chilWabdObj != 'undefined') {
//                                            data.CompareQueryAndUrlMethod = chilWabdObj;
//                                        }
//                                        if (isMaster == 'N') {
//                                            data['selectedRowData'] = JSON.stringify(selectedMasterData);
//                                            data['relationId'] = relationId;
//                                            data['masterGridId'] = masterGridId;
//                                        }
//                                    }
//                                },
//                                beforeSend: function (xhr) {
//                                    xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
//                                    showLoader();
//                                    showLoader();
//                                }, loadError: function (xhr, status, error) {
//                                    stopLoader();
//                                    throw new Error(error);
//                                }, loadComplete: function (data)
//                                {
//                                    stopLoader();
//                                    stopLoader();
//                                    try {
//                                        if (gridInitParamObj != null
//                                                && !jQuery.isEmptyObject(gridInitParamObj)
//                                                && gridInitParamObj['uuu_GridPagesCountFlag'] == 'Y')
//                                        {
//                                            if (data[0] != null) {
//                                                showgridPagesCount(gridResultObj['gridId'], 'Y', data[0].TotalRows)
//                                            }
//                                        }
//                                    } catch (e) {
//                                    }
//                                },
//                                beforeprocessing: function (data) {
//
//                                    $("#currentSelectChildGridId").val('');
//                                    if (data[0] != null) {
//                                        //  alert(data.JSONObjectList[0].TotalRows);
//                                        source.totalrecords = data[0].TotalRows;
//                                        $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
////                                                        $("#excelExport").removeAttr("disabled");
//                                        $("#drop" + gridResultObj['gridId']).removeAttr("disabled");
//                                        $("#drop" + gridResultObj['gridId']).removeAttr("opacity");
//                                        $("#export" + gridResultObj['gridId']).removeAttr("disabled");
//                                        $("#export" + gridResultObj['gridId']).removeAttr("opacity");
//                                        var datainformations = $('#' + gridResultObj['gridId']).jqxGrid('getdatainformation');
//
//                                        var paginginformation = datainformations['paginginformation'];
//
//                                        var pagenum = paginginformation.pagenum;
//                                        var pagesize = paginginformation.pagesize;
//                                        // for new Jqwidgets version inert opertaion
//                                        if (data[0].TotalRows < pagesize) {
//                                            $("#" + gridResultObj['gridId']).jqxGrid('virtualmode', false);
//                                        } else {
//                                            $("#" + gridResultObj['gridId']).jqxGrid('virtualmode', true);
//                                        }
//                                        // for new Jqwidgets version inert opertaion
//                                        // ravi code start
//                                        setTimeout(function () {
//
////                                        if (isMaster == 'Y') {
////                                        $("#" + gridResultObj['gridId']).jqxGrid('selectrow', 0);
////                                    }
//
//
////                                        var datainformations = $('#' + gridResultObj['gridId']).jqxGrid('getdatainformation');
////
////                                        var paginginformation = datainformations['paginginformation'];
////
////                                        var pagenum = paginginformation.pagenum;
////                                        var pagesize = paginginformation.pagesize;
//                                            if (isMaster == 'Y') {
//                                                var lastSelectedRow = $("#" + gridResultObj['gridId'] + '_Selected_row').val();
//                                                if (lastSelectedRow != null && lastSelectedRow != '' && lastSelectedRow != undefined)
//                                                {
//                                                    $("#" + gridResultObj['gridId']).jqxGrid('selectrow', parseInt(lastSelectedRow));
//                                                } else {
//                                                    $("#" + gridResultObj['gridId']).jqxGrid('selectrow', pagenum * pagesize);
//                                                }
//                                            }
//
//                                        }, 200)
//
//                                        // ravi code end
//
//
//                                    } else {
//
//                                        source.totalrecords = 0;
//                                        $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
//                                        $("#approvebutt" + gridResultObj['gridId']).attr("disabled", true);
//                                        $("#drop" + gridResultObj['gridId']).attr("disabled", true);
//                                        $("#drop" + gridResultObj['gridId']).css("opacity", "0.5");
//                                        $("#export" + gridResultObj['gridId']).attr("disabled", true);
//                                        $("#export" + gridResultObj['gridId']).css("opacity", "0.5");
//                                        // insert row issue code START ------------------
//                                        // for new Jqwidgets version inert opertaion
//                                        $("#" + gridResultObj['gridId']).jqxGrid('virtualmode', false);
//                                        // for new Jqwidgets version inert opertaion
//                                        // insert row issue code END -----------------------
//
//                                    }
//
//                                    var selectedItemTitle = $("#" + tabId).jqxTabs('getTitleAt', $("#" + tabId).jqxTabs('selectedItem'));
//                                    try {
////                                                    $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
//                                    } catch (e) {
//                                    }
//
//                                    stopLoader();
//                                },
//                                sort: function ()
//                                {
////                                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
//                                    $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'sort');
//                                    try {
//                                        $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
//                                    } catch (e) {
//                                    }
//                                    stopLoader();
//                                },
//                                filter: function () {
//                                    // insert row issue code START ------------------
//                                    // for new Jqwidgets version inert opertaion
//                                    $("#" + gridResultObj['gridId']).jqxGrid('virtualmode', true);
//                                    // for new Jqwidgets version inert opertaion
//                                    // insert row issue code END -----------------------
//
//                                    $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'filter');
//                                    try {
//                                        $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
//                                    } catch (e) {
//                                    }
//                                    stopLoader();
//                                }
//
//
//                            };
//                    var dataAdapter = new $.jqx.dataAdapter(source);
//                    gridPropObj.source = dataAdapter;
//                    var srsRegiterButton = gridInitParamObj['registerButtonFlag'];
//                    var hideToolBar = gridInitParamObj['uuu_hideToolBar'];
//                    staticFormFlag = gridInitParamObj['uuu_staticFormFlag'];
//
//                    // gridPropObj.showtoolbar = false;
//                    gridPropObj.rowdetails = true;
//                    gridPropObj.rendergridrows = function () {
//                        return dataAdapter.records;
//                    };
//
//                    $("#submitDropdown" + gridResultObj['gridId']).html(gridResultObj['buttonObj']);
//                    $("#exportDropdown" + gridResultObj['gridId']).html(gridResultObj['gridOperation']);
//
//                    gridPropObj.rowdetails = false;
//                    $('#gridRefreshButton').hide();
//
//                    if (isMaster == 'Y') {
//                        $("#level1TabId").html("");
//                        $("#currentParentGridpageNum").val(0);
//                    } else {
//                        $("#currentChildGridpageNum").val(0);
//                    }
//
//
//                    $("#" + gridResultObj['gridId']).jqxGrid(gridPropObj);
////                    if (gridResultObj['action'] != null && gridResultObj['action'] != undefined) {
////                        askConfirmationOnAction(gridResultObj);
////                    }
//
//                    try {
//                        var gridColumnObj = gridPropObj.columns;
//                        if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
//                            $("#" + gridResultObj['gridId']).jqxGrid('beginupdate');
//                            for (var index = 0; index < gridColumnObj.length; index++) {
//                                try {
//                                    var datacolName = gridColumnObj[index].datafield;
//                                    var cellalignColParamObj = columnInitParamObj[datacolName];
//                                    if (cellalignColParamObj != null && !jQuery.isEmptyObject(cellalignColParamObj)) {
//                                        var cellaligndata = cellalignColParamObj['uuu_Colcellsalign'];
//                                        if (cellaligndata != null && cellaligndata != undefined && cellaligndata != '') {
//                                            $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', datacolName, 'align', cellaligndata);
//                                            $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', datacolName, 'cellsalign', cellaligndata);
//                                        }
//                                    }
//                                } catch (e) {
//
//                                }
//
//
//                            }
//                            $("#" + gridResultObj['gridId']).jqxGrid('endupdate');
//
//                        }
//
//                    } catch (e) {
//                    }
//
//                    $("#" + gridResultObj['gridId']).on('celldoubleclick', function (event) {
//                        var args = event.args;
//                        var dataField = args.datafield;
//                        var dataField1 = args.text;
//                        var rowIndex = args.rowindex;
//                        var cellValue = args.value;
//                        var column = $("#" + gridResultObj['gridId']).jqxGrid('getcolumn', event.args.datafield).text;
//                        //kk23-05-24
//                        var cellDisableDoubleClickPopup = gridInitParamObj['uuu_CellDisableDoubleClickPopup'];
//                        if (cellDisableDoubleClickPopup == null || cellDisableDoubleClickPopup == '' || cellDisableDoubleClickPopup == 'undefined') {
//                            cellDisableDoubleClickPopup = 'N';
//                        }
//                        if (gridInitParamObj != null && cellDisableDoubleClickPopup != null && cellDisableDoubleClickPopup != ''
//                                && cellDisableDoubleClickPopup != undefined && cellDisableDoubleClickPopup != 'Y') {
//                            popupedit(column, cellValue);
//                        }
//                        //kk23-05-24
//                    });
//                    $("#" + gridResultObj['gridId']).on("pagechanged", function (event) {
//
//                        var oldPageNum = event.args.pagenum;
//                        if (isMaster == 'Y') {
//                            oldPageNum = $("#currentParentGridpageNum").val();
//                        } else {
//                            oldPageNum = $("#currentChildGridpageNum").val();
//                        }
//                        console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
//                        // event arguments.
//                        var args = event.args;
//                        // page number.
//                        var pagenum = args.pagenum;
//                        // page size.
//                        var pagesize = args.pagesize;
//                        if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
//                            var selectedrowindexes = $("#" + gridResultObj['gridId']).jqxGrid('selectedrowindexes');
////                                        console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
//                            try {
//                                if (selectedrowindexes != null
//                                        && selectedrowindexes.length != 0
//                                        && selectedrowindexes[0] != -1) {
//                                    $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
//                                }
//
//                            } catch (e) {
//                            }
//                        }
//                        if (isMaster == 'Y') {
//                            $("#currentParentGridpageNum").val(event.args.pagenum);
//                        } else {
//                            $("#currentChildGridpageNum").val(event.args.pagenum);
//                        }
//                    });
//
//                    $("#" + gridResultObj['gridId']).on("pagesizechanged", function (event) {
//                        console.log("::pagesizechanged:::" + event.args.pagenum);
//
//                        if (isMaster == 'Y') {
//                            $("#currentParentGridpageNum").val(0);
//                        } else {
//                            $("#currentChildGridpageNum").val(0);
//                        }
//                    });
//                    try {
//                        $(window).resize(function ()
//                        {
//                            var windowWidth = $(this).width();
//                            if (windowWidth >= 500)
//                            {
//
//                            } else
//                            {
//
//                                $("#" + gridResultObj['gridId']).jqxGrid('height', '100%');
//
//                            }
////                    $("#" + gridResultObj['gridId']).jqxGrid('height', '100%');
//                        }).resize();
//                    } catch (e) {
//
//                    }
//
////                $(window).resize(function () {
////                    var windowWidth = $(this).width();
////                    if (windowWidth <= 415)
////                    {
////                        $("#" + gridResultObj['gridId']).jqxGrid({pagerheight: 70});
////                    } else if (windowWidth >= 416 && windowWidth <= 500)
////                    {
////                        $("#" + gridResultObj['gridId']).jqxGrid({pagerheight: 40});
////                    } else
////                    {
////                        $("#" + gridResultObj['gridId']).jqxGrid({pagerheight: 30});
////                    }
////                }).resize();
////                $("#" + gridResultObj['gridId']).parent().css("padding-top", "3px", "important");
////                $("#" + gridResultObj['gridId']).parent().css("padding-bottom", "3px", "important");
//                    $("#" + gridResultObj['gridId']).jqxGrid('showtoolbar', true);
////                  $("#" + gridResultObj['gridId']).on('cellendedit', function (event) {
////                     $("#" + gridResultObj['gridId']).attr('data-last-ed-field', event.args.datafield);
////                    $("#" + gridResultObj['gridId']).attr('data-last-ed-row', event.args.rowindex);
////                    $("#" + gridResultObj['gridId']).jqxGrid({selectedrowindex:  event.args.rowindex});
////                  });
//                    $("#" + gridResultObj['gridId']).on('cellvaluechanged', function (event)
//                    {
//                        var contentTabId = $("#" + gridResultObj.gridId).closest("[id^=level]").attr("id");
//                        if (contentTabId == "level1TabId") {
//                            childChangeflag = true;
//                            var gridCount = $("#level1TabId").find(".jqx-grid").length;
//                            if (gridCount > 1) {
//                                var childGrids = $("#level1TabId").find(".jqx-grid");
//                                var childGrid1 = childGrids[0].id;
//                                var childGrid2 = childGrids[1].id;
//                                if (gridResultObj.gridId == childGrid1) {
//                                    childGrid1Changeflag = true;
//                                } else if (gridResultObj.gridId == childGrid2) {
//                                    childGrid2Changeflag = true;
//                                }
//                            }
//
//
//                        } else {
//                            changeflag = true;
//                        }
//
//                    });
//                    var fieldVal;
//                    $("#" + gridResultObj['gridId']).on('cellbeginedit', function (event) {
////                    currentClickedGridId = gridResultObj.gridId;
////                    cellOldValue = $('#' + gridResultObj.gridId).jqxGrid('getcelltext', event.args.rowindex, event.args.datafield);
////                    try {
////                        if (event.args.columntype == "dropdownlist")
////                        {
////                            fieldVal = event.args.row[event.args.datafield.replace("_DLOV", "")];
////                        }
////                    } catch (e) {
////                    }
//                        var args = event.args;
//                        var columntype = args.columntype
//                        var dataField = args.datafield;
//                        var columnindex = args.columnindex;
//                        var rowBoundIndex = args.rowindex;
//                        var cellValue = args.value;
//                        $("#" + gridResultObj['gridId']).attr('data-last-ed-field', event.args.datafield);
//                        $("#" + gridResultObj['gridId']).attr('data-last-ed-row', event.args.rowindex);
//                        $("#" + gridResultObj['gridId']).jqxGrid({selectedrowindex: rowBoundIndex});
//                        if (columntype != null && columntype == 'checkbox') {
//                            var gridInitParamObj = gridResultObj['gridInitParamObj'];
//                            var fillDownColumns = '';
//                            if (gridInitParamObj != null) {
//                                fillDownColumns = gridInitParamObj['fillDownColumns'];
//                            }
//                            var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + columnindex + ":" + fillDownColumns;
////                                        var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + fillDownColumns;
//                            console.log("currentSelectFillDownData:::" + currentSelectFillDownData);
//                            $("#currentSelectFillDownData").val(currentSelectFillDownData);
//                            var uuu_fillDownDependencyColumns = gridInitParamObj['uuu_fillDownDependencyColumns'];
//                            if (uuu_fillDownDependencyColumns != null && uuu_fillDownDependencyColumns != '') {
//                                $("#currentSelectFillDownDependencyColumns").val(uuu_fillDownDependencyColumns);
//                            }
//                            var currentSelectGridIndex = $("#currentSelectGridIndex").val();
//
//                        }
//                        $("#" + gridResultObj['gridId']).attr('data-last-ed-field', event.args.datafield);
//                        $("#" + gridResultObj['gridId']).attr('data-last-ed-row', event.args.rowindex);
//                        $("#" + gridResultObj['gridId']).jqxGrid({selectedrowindex: rowBoundIndex});
//                    });
//                    $("#" + gridResultObj['gridId']).on('cellclick', function (event) {
////                                    $("#" + gridResultObj['gridId']).bind('cellclick', function (event) {
//                        console.log("event.args.column.datafield:::::" + event.args.column.datafield);
//                        var args = event.args;
//                        var rowBoundIndex = args.rowindex;
//                        $("#" + gridResultObj['gridId']).attr('data-last-ed-row', rowBoundIndex);
//                        var fillDownColumns = gridInitParamObj['fillDownColumns'];
//                        if (fillDownColumns != "" && fillDownColumns != undefined && fillDownColumns != "null")
//                        {
//                            var columnindex = args.columnindex;
//                            var dataField = args.datafield;
//                            var value = args.value;
//                            var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + columnindex + ":" + fillDownColumns;
//                            console.log("currentSelectFillDownData:::" + currentSelectFillDownData);
//                            $("#currentSelectFillDownData").val(currentSelectFillDownData);
//                            var uuu_fillDownDependencyColumns = gridInitParamObj['uuu_fillDownDependencyColumns'];
//                            if (uuu_fillDownDependencyColumns != null && uuu_fillDownDependencyColumns != '') {
//                                $("#currentSelectFillDownDependencyColumns").val(uuu_fillDownDependencyColumns);
//                            }
//
//                        }
//                        if (isMaster == 'Y') {
//                            var currentSelectGridIndex = $("#currentSelectGridIndex").val();
//                            if (currentSelectGridIndex != null && parseInt(currentSelectGridIndex) != rowBoundIndex) {
//
//                                $("#currentSelectGridIndex").val(rowBoundIndex);
//                                var currentSelectChildGridId = $("#currentSelectChildGridId").val();
//                                if (currentSelectChildGridId != null && currentSelectChildGridId != '') {
//
//                                    // ravi code start
//
//                                    var childTabId = $('#level1TabId').find('div.jqx-tabs').attr("id");
//                                    var selectedItem = $('#' + childTabId).jqxTabs('selectedItem');
//                                    var tabTitle = $('#' + childTabId).jqxTabs('getTitleAt', selectedItem);
//                                    var unselectedChildTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
//                                    checkChanges(unselectedChildTabId);
//                                    tabSwitched = true;
//                                    if (childChangeflag) {
//
//                                        askConfirmationOnRowSelect(currentSelectChildGridId);
//                                        return false;
//                                    }
//                                    // ravi code end
//
//
////                               $("#li_"+currentSelectChildGridId).trigger('click');
//                                    $("#li_" + currentSelectChildGridId).click();
//                                } else {
//                                    fetchClusterChildTabs(gridResultObj['gridId'], rowBoundIndex, selectedGridCompType, clusterFormFlag);
//                                }
//                                $("#" + gridResultObj['gridId']).jqxGrid({selectedrowindex: rowBoundIndex});
//                                selectUnselectGrid(gridResultObj['gridId'], rowBoundIndex);
//                            }
//                        }
//                        var isEditable = $("#" + gridResultObj['gridId']).jqxGrid('getcolumnproperty', event.args.column.datafield, 'editable');
//                        if (!editable || !isEditable) {
//                            var hiddenGridIdValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', event.args.rowindex, gridResultObj['gridId'] + "_HIDDEN");
//                            if (hiddenGridIdValue != 'INSERT') {
//                                navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId'], tabId, event.args.rowindex);
//                            }
//                        }
//                    });
//                    $("#" + gridResultObj['gridId']).on('change', function (event) {
//
//                        var args = event.args;
//                        var currentTarget = event.currentTarget;
//                        var currentDataField = currentTarget.dataset.lastEdField;
//                        var currentRowIndex = currentTarget.dataset.lastEdRow;
//
//                        console.log("Select Changed ");
////                    if (args != null && args != '' && args.item != null && args.item != '' && fieldVal != args.item.label) {
////                        $("#" + gridResultObj.gridId).jqxGrid('endcelledit', currentRowIndex, currentDataField, false);
////
////                    }
//                        if (currentDataField != null && currentDataField != '' && currentDataField.indexOf("_DLOV") > -1) {
//                            $("#" + gridResultObj['gridId']).jqxGrid('endcelledit', currentRowIndex, currentDataField, false);
//                        }
//
//
//                    });
//
//
//                    if (isMaster == 'Y') {
//                        if (selectedGridCompType == 'FILTER_GRID') {
//                            var levelTabIdHeight = $("#levelTabId").height();
//                            console.log(":levelTabIdHeight::" + levelTabIdHeight);
//                            $("#" + gridResultObj['gridId']).jqxGrid("height", ((parseInt(levelTabIdHeight) - 50) + "px"));
//
//                        }
//
//                        $("#" + gridResultObj['gridId']).on('rowselect', function (event) {
//
//
//                            var args = event.args;
//                            // row's bound index.
//                            var boundIndex = args.rowindex;
//                            if ($.isArray(boundIndex)) {
//                                boundIndex = 0;
//                            }
//                            $("#currentSelectGridIndex").val(boundIndex);
//                            //data-last-ed-row
//                            $("#" + gridResultObj['gridId']).attr('data-last-ed-row', boundIndex);
//                            var currentSelectChildGridId = $("#currentSelectChildGridId").val();
//                            if (currentSelectChildGridId != null && currentSelectChildGridId != '') {
//
//                                // ravi code start
//                                var childTabId = $('#level1TabId').find('div.jqx-tabs').attr("id");
//                                var selectedItem = $('#' + childTabId).jqxTabs('selectedItem');
//                                var tabTitle = $('#' + childTabId).jqxTabs('getTitleAt', selectedItem);
//                                var unselectedChildTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
//                                checkChanges(unselectedChildTabId);
//                                tabSwitched = true;
//                                if (childChangeflag) {
//
//                                    askConfirmationOnRowSelect(currentSelectChildGridId);
//                                    return false;
//                                }
//                                // ravi code end
//
////                               $("#li_"+currentSelectChildGridId).trigger('click');
//                                $("#li_" + currentSelectChildGridId).click();
//                            } else {
//                                fetchClusterChildTabs(gridResultObj['gridId'], boundIndex, selectedGridCompType, clusterFormFlag);
//                            }
//
//                            selectUnselectGrid(gridResultObj['gridId'], boundIndex);
////                        if (gridInitParamObj != null
////                                && gridInitParamObj['uuu_FilterPopupNoData'] == 'Y') {
////
////                        }
//                            showSelectedRows(gridResultObj['gridId'], event.args.rowindex, gridInitParamObj['uuu_GridNtfnFlag']);
//                        });
//                        $("#" + gridResultObj['gridId']).on('rowunselect', function (event) {
//                            showSelectedRows(gridResultObj['gridId'], null, gridInitParamObj['uuu_GridNtfnFlag']);
//                        });
//                        $("#currentSelectMasterGridId").val(gridResultObj['gridId']);
//                        $("#mastergridid").val(gridResultObj['gridId']);
//                        // need to call child tbs
//
//
//                    } else {
//                        $("#" + gridResultObj['gridId']).on('rowunselect', function (event) {
//                            showSelectedRows(gridResultObj['gridId'], null, gridInitParamObj['uuu_GridNtfnFlag']);
//                        });
//                        $("#" + gridResultObj['gridId']).on('rowselect', function (event) {
//                            showSelectedRows(gridResultObj['gridId'], event.args.rowindex, gridInitParamObj['uuu_GridNtfnFlag']);
//                        });
//
//                        //data-master-id masterGridId
//                        $("#" + gridResultObj['gridId']).attr('data-master-id', masterGridId);
//                        //currentSelectChildGridId
//                        $("#currentSelectChildGridId").val(gridResultObj['gridId']);
//                    }
//
//                }// end if(gridPropObj != null)
//                if (gridResultObj['action'] != null && gridResultObj['action'] != undefined) {
//                    setTimeout(function () {
////                        askConfirmationOnAction(gridResultObj);
//                    }, 1000);
//
//                }
//
//            }
//
//
//
//        } catch (e) {
//            stopLoader();
//            console.log(e);
//        }
////    stopLoader();
////        stopLoader();
//    } catch (er) {
////        stopLoader();
//    }
////    stopLoader();
//}


function fetchClusterChildTabs(clusterCompId, selectedIndex, selectedGridCompType, clusterFormFlag) {
    // ravi code start
    childChangeflag = false;
    childGrid1Changeflag = false;
    childGrid2Changeflag = false;
    // ravi code end


    $("#level1TabId").html("");

//    $("#level1TabId").addClass("childtabsGrid");

    if (clusterCompId != null) {
        $('.clusterChildClass').empty();

        showLoader();
        $.ajax({
            type: "POST",
            url: "fetchClusterChildTabs",
            data: {
                clusterCompId: clusterCompId, // master Grid Id
                selectedGridCompType: selectedGridCompType
            },
            traditional: true,
            cache: false,
            success: function (result) {
                stopLoader();
                $("#level1TabId").html("");
                if (result != null && !jQuery.isEmptyObject(result)) {
//                    $("#levelTabId").css("height", (gridHeightInner - 3) + "px");
//                    $("#levelTabId").css("overflow", "hidden");


                    var gridResultObj = result['masterGridObj'];
                    var mastergridInitParamObj = {}; //gridInitParamObj
                    if (gridResultObj != undefined) {  //04-02-2025
                        mastergridInitParamObj = gridResultObj['gridInitParamObj'];
                    }
                    if (mastergridInitParamObj['uuu_clusterChildGridClass'] !== null
                            && mastergridInitParamObj['uuu_clusterChildGridClass'] !== ''
                            && mastergridInitParamObj['uuu_clusterChildGridClass'] !== undefined) {
                        var clusterchildGridClass = mastergridInitParamObj['uuu_clusterChildGridClass'];
                        $("#level1TabId").addClass(clusterchildGridClass);
                    }
                    var level1Size = '50%';
                    var level2Size = '50%';
                    var splitbar = '0';
                    try {
                        if (mastergridInitParamObj['uuu_panelSizes'] != null && mastergridInitParamObj['uuu_panelSizes'] != ''
                                && mastergridInitParamObj['uuu_panelSizes'] != undefined) {
                            var panelSizes = mastergridInitParamObj['uuu_panelSizes'];
                            if (panelSizes != null && panelSizes != '' && panelSizes != undefined) {
                                var panelSizesarry = panelSizes.split(":");
                                level1Size = panelSizesarry[0];
                                level2Size = panelSizesarry[1];

                            }
                        }
                    } catch (e) {
                        level1Size = '50%';
                        level2Size = '50%';
                    }

                    try {
                        if (mastergridInitParamObj['uuu_splitBarSize'] != null && mastergridInitParamObj['uuu_splitBarSize'] != ''
                                && mastergridInitParamObj['uuu_splitBarSize'] != undefined) {
                            splitbar = mastergridInitParamObj['uuu_splitBarSize'];
                        }
                    } catch (e) {
                        splitbar = '0';
                    }
                    if (splitbar != null && splitbar != '' && splitbar != undefined) {

                    } else {
                        splitbar = '0';
                    }

                    if (splitbar != null && splitbar != '' && splitbar != undefined) {

                    } else {
                        splitbar = '0';
                    }

                    if (level1Size != null && level1Size != '' && level1Size != undefined) {

                    } else {
                        level1Size = '50%';
                    }

                    if (level2Size != null && level2Size != '' && level2Size != undefined) {

                    } else {
                        level2Size = '50%';
                    }

                    if (clusterFormFlag = 'Y')
                    {

                    } else {
                        $('#clusterSplitter').jqxSplitter({
                            orientation: 'horizontal',
                            splitBarSize: splitbar,
                            panels: [{size: level1Size, min: 150, resizable: true},
                                {size: level2Size, resizable: true, min: 150}]
                        });
                    }




                    showLoader();
                    var theme = "ui-redmond";
//                    var gridResultObj = result['masterGridObj'];
                    try {
                        gridResultObj['relationArray'] = result['relationArray'];
                    } catch (e) {
                    }

                    var selectedMasterData = {};

                    try {
                        $("#" + clusterCompId + "_TAB").jqxTabs("destroy");

                        // $(".jqx-clear .jqx-border-reset .jqx-overflow-hidden .jqx-max-size .jqx-position-relative").remove();
                    } catch (e) {
                    }
                    if (result['compType'] != 'CMPR') {
                        $("#" + clusterCompId + "_TAB").remove();
                    }

                    $("#level1TabId").html(result['tabString']);


                    if (clusterFormFlag = 'Y')
                    {
                        if (result['compType'] != 'CMPR') {
                            $("#" + clusterCompId + "_TAB").jqxTabs();
                            $("#" + clusterCompId + "_TAB").addClass("ClusterchildClass");
                        } else {
                            $("#" + clusterCompId + "_TAB").jqxTabs({position: 'top', theme: theme, reorder: true, autoHeight: true, keyboardNavigation: true, scrollPosition: 'both'});

                        }
                    } else {
                        $("#" + clusterCompId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
                            theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
                            , scrollPosition: 'both'});
                    }


                    $("#" + clusterCompId + "_TAB").unbind('selected').on('selected', function (event) {

                        // ravi start
                        var contentTabId = $("#" + clusterCompId + "_TAB").closest(".jqx-splitter-panel").attr("id");
                        if (contentTabId == "level1TabId" && childChangeflag) {
                            childChangeflag = false;
                        } else if (contentTabId == "levelTabId" && changeflag || childChangeflag) {
                            changeflag = false;
                            childChangeflag = false;
                        } else if (contentTabId == null) {
                            changeflag = false;
                        }

                        executed = false;
                        tabSwitched = true;
                        currentClickedGridId = null;

                        if (onTabclickFunc != null) {
                            onTabclickFunc();
                        }
                        // ravi end

                        var selectedTab = event.args.item + 1;
                        var img = $("#" + clusterCompId + "_TAB" + " ul li:nth-child(" + selectedTab + ")").find('img').attr('src');
                        var mainnewimage = img.replace(".png", "").replace(/_white/g, "");
                        var attributes = $("#" + clusterCompId + "_TAB" + " ul li:nth-child(" + selectedTab + ")").attr("id");
                        $("#" + attributes).find('img').attr('src', mainnewimage + '_white.png');
                    });


                    // ravi code start-------------       

                    $("#" + clusterCompId + "_TAB").unbind('selecting').on('selecting', function (event) {
//            if (currentClickedGridId != null) {
//                checkChanges(currentClickedGridId);
//            }
                        var contentTabId = $("#" + clusterCompId + "_TAB").closest(".jqx-splitter-panel").attr("id");
                        if (contentTabId == "level1TabId" && childChangeflag) {
                            askConfirmation(event, clusterCompId + "_TAB");
                        } else if (contentTabId == "levelTabId" && changeflag || childChangeflag) {
                            askConfirmation(event, clusterCompId + "_TAB");
                        } else if (contentTabId == null) {
                            askConfirmation(event, clusterCompId + "_TAB");
                        }

                    });

                    // ravi code end-------------       

                    $("#" + clusterCompId + "_TAB").unbind('unselecting').on('unselecting', function (event) {

                        // ravi start----


                        var tabTitle = $('#' + clusterCompId + "_TAB").jqxTabs('getTitleAt', event.args.item);
                        var unselectedTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
                        //var unselectedTabId = $("span:contains('" + tabTitle + "')").attr("id").replace("span_", "");

                        checkChanges(unselectedTabId);

                        var childTabId = $('#level1TabId').find('div.jqx-tabs').attr("id");
                        var selectedItem = $('#' + childTabId).jqxTabs('selectedItem');
                        var tabTitle = $('#' + childTabId).jqxTabs('getTitleAt', selectedItem);
                        var unselectedChildTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
                        checkChanges(unselectedChildTabId);

                        // ravi code end----  


                        var unselectedTab = event.args.item + 1;
                        var un_img = $("#" + clusterCompId + "_TAB" + " ul li:nth-child(" + unselectedTab + ")").find('img').attr('src');
                        var mainnewimage = un_img.replace(/_white/g, "");
                        var attributes = $("#" + clusterCompId + "_TAB" + " ul li:nth-child(" + unselectedTab + ")").attr("id");
                        $("#" + attributes).find('img').attr('src', mainnewimage);
                    });


                    var selectedMasterData = {};
                    var relationId = "";
                    var relationObj = result['relationObj'];
                    if (relationObj != null && !jQuery.isEmptyObject(relationObj)) {
                        if (result['compId'] != null && result['compId'] != undefined && result['compId'] != '') {
                            relationId = relationObj[result['compId']];
                        }

                    }

                    if ($("#levelTabId").attr("data-height") != null && $("#levelTabId").attr("data-height") != '') {
                        $("#levelTabId").css("height", $("#levelTabId").attr("data-height"));
                    }

                    selectedMasterData = $("#" + clusterCompId).jqxGrid('getrowdata', selectedIndex);
                    if (result['compType'] == 'ANALYTIC') {
                        chartsData(result['compId'], result['compId'], "Y");
                    } else if (result['compType'] == 'TABLE_FORM') {
                        clusterChildTableForm(clusterCompId, result['compId'], result['compType'], "N", [], relationId, selectedMasterData, gridResultObj);
                    } else if (result['compType'] == 'CMPR') {
                        var componentId = result['compId'];
                        if (componentId != null && componentId.indexOf(",") > -1) {
                            var componentIds = componentId.split(",");
//                            $("#"+componentIds[0]+"_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
//                            theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
//                            , scrollPosition: 'both'});
                            clusterGridConfig(result['childQueryObj'], clusterCompId, componentIds[0], result['compType'], "N", [], relationId, selectedMasterData, "Y");
                            setTimeout(function () {
                                showLoader();
//                                $("#"+componentIds[1]+"_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
//                            theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
//                            , scrollPosition: 'both'});
                                clusterGridConfig(result['childWebObj'], clusterCompId, componentIds[1], result['compType'], "N", [], relationId, selectedMasterData, "Y");
                            }, 200);
                            $("#" + clusterCompId + "_TAB div div").show();


                        }

                    } else {
                        clusterGridConfig(gridResultObj, clusterCompId, clusterCompId, result['compType'], "N", [], relationId, selectedMasterData, "Y");
                    }

                } else {
                }


            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }

        });
        stopLoader();
    }
    stopLoader();
}
function fetchClusterTabsData(clusterId, selectedGridId, selectedIndex, masterGridId, compType, relationId, orgChartParams) {

    // ravi start
    var contentTabId = $("#" + selectedGridId).closest(".jqx-splitter-panel").attr("id");
    $('.clusterChildClass').empty();
    if (tabSwitched == false) {
        console.log(" fetchClusterTabsData  return");
        return;
    } else {
        onTabclickFunc = null;
    }
    console.log(" fetchClusterTabsData not  return");
    if (contentTabId == "level1TabId" && childChangeflag) {
        childChangeflag = false;
    } else if (contentTabId == "levelTabId" && changeflag || childChangeflag) {
        changeflag = false;
        childChangeflag = false
    } else if (contentTabId == null) {
        changeflag = false;
    }

    // ravi end


//    $('#clusterSplitter').jqxSplitter({
//        panels: [{size: '50%', min: 150, resizable: true},
//            {size: '50%', resizable: true, min: 150}]
//    });
    if (compType != 'FILTER_GRID') {
        $.ajax({
            type: "POST",
            url: "fetchMasterTabs",
            data: {
                selectedGridId: selectedGridId, // master Grid Id
                compType: compType,
                relationId: relationId,

            },
            traditional: true,
            cache: false,
            success: function (gridResultObj) {
                if (gridResultObj != null) {
                    // master Grid Obj
                    if (masterGridId == 'Y') {
                        $('.visionCompDiv').each(function () {
                            $(this).hide();

                        });
                        $("#dxpClusterFirstDiv li").removeClass('clustersActiveTab');
                        $("#li_" + gridResultObj['gridId']).addClass("clustersActiveTab");
                        $("#" + gridResultObj['gridId'] + "_DIV_" + compType).show();
                        if (compType == 'FILTER_GRID') {
                            $("#levelTabId").addClass("visionMasterDetailPanelTopACC");
                        } else {
                            $("#levelTabId").removeClass("visionMasterDetailPanelTopACC");
                        }

                        $("#currentSelectChildGridId").val("");
                        if (compType == 'ANALYTIC') {
                            chartsData(selectedGridId, selectedGridId, "Y");
                        } else if (compType == 'TABLE_FORM') {

                        } else {
                            if (orgChartParams != null && !jQuery.isEmptyObject(orgChartParams)) {
                                clusterGridConfig(gridResultObj, gridResultObj['gridId'], clusterId, compType, "Y", orgChartParams, "", "", "Y");
                            } else {
                                clusterGridConfig(gridResultObj, gridResultObj['gridId'], clusterId, compType, "Y", [], "", "", "Y");
                            }
//                            clusterGridConfig(gridResultObj, gridResultObj['gridId'], clusterId, compType, "Y");
                        }

                    } else {
                        var selectedMasterData = {};
                        var currentSelectGridIndex = $("#currentSelectGridIndex").val();
                        selectedMasterData = $("#" + masterGridId).jqxGrid('getrowdata', currentSelectGridIndex);
                        if (compType == 'ANALYTIC') {
                            chartsData(masterGridId, masterGridId, "Y");
                        } else if (compType == 'TABLE_FORM') {
                            clusterChildTableForm(masterGridId, selectedGridId, compType, "N", [], relationId, selectedMasterData, gridResultObj);
                        } else {
                            if (orgChartParams != null && !jQuery.isEmptyObject(orgChartParams))
                            {
                                clusterGridConfig(gridResultObj, masterGridId, clusterId, compType, "N", orgChartParams, relationId, selectedMasterData, "Y");
                            } else
                            {
                                clusterGridConfig(gridResultObj, masterGridId, clusterId, compType, "N", [], relationId, selectedMasterData, "Y");
                                var initparamObj = {};
                                initparamObj = gridResultObj['gridInitParamObj'];
                                if (initparamObj['uuu_loaderFlag'] != null && initparamObj['uuu_loaderFlag'] != ''
                                        && initparamObj['uuu_loaderFlag'] != undefined) {
                                    var loaderFlag = initparamObj['uuu_loaderFlag'];
                                    if (loaderFlag != null && loaderFlag != '' && loaderFlag != undefined && loaderFlag == 'Y') {
                                        setTimeout(function () {
                                            $("#Loader").css("display", "none");
                                        }, 1500);
                                    }
                                }
                            }
//                            clusterGridConfig(gridResultObj, masterGridId, clusterId, compType, "N", [], relationId, selectedMasterData);
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
    } else {
        $("#level1TabId").html("");
        $("#currentSelectChildGridId").val("");
        $("#" + selectedGridId + "_ACCORDIAN").accordion({
            theme: 'energyblue',
            collapsible: true,
            heightStyle: "content",
            active: false,
            autoHeight: false

        });
        $("#" + selectedGridId + "_ACCORDIAN  h3").bind('click', function () {
            var self = this;
            setTimeout(function () {
                var theOffset = $(self).offset();
                $('body,html').animate({scrollTop: theOffset.top - 40});
            }, 310); // ensure the collapse animation is done
        });
        getClusterFilterGridForm(selectedGridId, clusterId + '_TAB', 0);
        $("#" + selectedGridId + "_ACCORDIAN").accordion({active: 0});
        $("#levelTabId").addClass("visionMasterDetailPanelTopACC");
        stopLoader();
    }

//stopLoader();

}

function selectUnselectGrid(gridId, currentSelectIndex) {
    if (gridId != null) {
        var multiSelectGridId = $("#multiSelectGridId").val();
        if (multiSelectGridId == gridId) {// need to enable single selection only
            var selectedrowindexes = $("#" + gridId).jqxGrid('selectedrowindexes');
            if (selectedrowindexes != null && selectedrowindexes.length > 1) {
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
                for (var i = count; i < totalRowIndex; i++)
                {
                    if (selectedrowindexes[i] != -1 && selectedrowindexes[i] != currentSelectIndex) {
                        $("#" + gridId).jqxGrid('unselectrow', selectedrowindexes[i]);
                    }
                }

            }
        }
    }
}

function getClusterFilterGridForm(selectedGridId, selectedTabId, selectedGridIndex) {
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        // dataType: 'json',
        url: "getFilterGridForm",
        cache: false,
        data: {
            selectedGridId: selectedGridId,
            selectedTabId: selectedTabId,
            selectedGridIndex: selectedGridIndex,

        },
        success: function (response) {
            stopLoader();
            var filterFormObj = JSON.parse(response);
            $("#" + selectedGridId + "_FILTER_FORM").html(filterFormObj['result']);
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
//                                                minDate: $("#pprtbmin" + i).datepicker("getDate")
                                        });
                            } else {
                            }
                        });
            }

            var selectedTitle = "";
            var selectedTitleValue = "";
            var lovColumns = filterFormObj['lovColumns'];
            if (lovColumns != null && !jQuery.isEmptyObject(lovColumns)) {
                for (var lovColumnanme in lovColumns) {
                    if (lovColumnanme != null && lovColumnanme != '') {
                        var comboBoxOptions = {
                            searchMode: 'containsignorecase',
                            width: 315,
                            height: 20,
                            dropDownHeight: 100,
                            autoComplete: true
                        };
                        if (lovColumns[lovColumnanme] == true) {
                            comboBoxOptions['multiSelect'] = true;
                            // multiSelect: true,
                        }
                        $("#" + lovColumnanme).jqxComboBox(comboBoxOptions);
                        $("#" + lovColumnanme).on('select', function (event) {
                            var args = event.args;
                            if (args) {
                                // index represents the item's index.                          
                                var index = args.index;
                                var item = args.item;
                                if (item != null) {
                                    var label = item.label;
                                    var value = item.value;
                                    if (value != null && value != '') {
                                        var filterGridFlagCount = $("#" + lovColumnanme + "_jqxComboBox").attr("data-filtergridflag-count"); //data-filtergridflag-count
                                        var operatorId = "operator" + $("#" + lovColumnanme + "_jqxComboBox").attr("data-viewid") + filterGridFlagCount;
                                        $("#" + operatorId).val("IN");
                                    }
                                }
                                // get item's label and value.

                            }
                        });
                    }
                }
            }
//                for (var j = 0; j < lovColumns.length; j++) {
//                    var lovColumnanme = lovColumns[j];
//                    if (lovColumnanme != null && lovColumnanme != '') {
//                        window.fs_test = $('#' + lovColumnanme).fSelect({
//                            placeholder: 'Select',
//                            numDisplayed: 5,
//                            gridId: selectedGridId,
//                            columnName: lovColumnanme
//                        });
//                    }
//
//
//                }


        },
        error: function (e) {
            sessionTimeout(e);
        }// Error function in Ajax
    }); // end ajax call
}

function getFilterGridResults(selectedGridId, selectedGridIndex, selectedTabId, selectedColumn, isImport) {
    showLoader();
    if (selectedGridId != null && selectedGridId != '') {
        var i = 0;
        var paramArray = [];
        if (isImport != null && isImport != '' && isImport == 'Y') {
            var paramObj = {};
            paramObj.column = selectedColumn;
            paramObj.operator = $("#operator" + selectedGridId + i).val();
            paramObj.symbol = $.trim($("#operator" + selectedGridId + i).find('option:selected').text());
            paramObj.isImport = isImport;
            paramArray.push(paramObj);
        } else {
//            var filterFormTable = selectedGridId + "_FILTER_FORM_TABLE";
            $("#" + selectedGridId + "_FILTER_FORM_TABLE tbody tr").each(function () {
                var isAllow = false;
                var paramObj = {};
                var colname = $(this).attr('data-colname');
                var dataRange = $(this).attr('data-range');
                // var tbmin = $("#" + reqType + "tbmin" + i).val();
                // var tbmax = $("#" + reqType + "tbmax" + i).val();
//                var value = $(this).find(colname).val();
//                var data2 = $(this).find("td:eq(2)").find(colname).val();
                var value = $("#" + selectedGridId + "_" + colname).val();
                var dataColType = $(this).attr('data-coltype');
                if (dataColType == 'L') {
                    value = "";
                    var selectBoxValue = $("#" + selectedGridId + "_" + colname).jqxComboBox('getSelectedItems');
                    if (selectBoxValue != null) {
                        for (var j = 0; j < selectBoxValue.length; j++)
                        {
                            value += selectBoxValue[j].value;
                            if (j != selectBoxValue.length - 1) {
                                value += ",";
                            }
                        }
                    }
                }
                var minvalue = $("#" + selectedGridId + "_" + colname + "_MIN").val();
                var maxvalue = $("#" + selectedGridId + "_" + colname + "_MAX").val();
                //  var andOrOperator = $("#" + reqType + "andOrOperator" + i).val();
                // var typeSelectStr = $("#" + reqType + "typeSelectStr" + i).val();
                //var dlovcolname = $("#" + reqType + "typeSelectStr" + i).attr("data-dlovcolname");
                //console.log("colname::" + colname + "::value::" + value + "::tbmin::" + tbmin + ":::tbmax:::" + tbmax);
                if (value != null && value != '') {
                    isAllow = true;
                } else if (dataRange != null && dataRange == 'Y'
                        && ((minvalue != null && minvalue != '')
                                || (maxvalue != null && maxvalue != ''))
                        ) {
                    isAllow = true;
                }

//        else if (tbmin != null && tbmax != null && tbmin != '' && tbmax != '') {
//            isAllow = true;
//        }
                var type = $("#" + selectedGridId + "_" + colname).attr("type");
                if (type != null && type == 'checkbox') {
                    var textval = "N";
                    if ($("#" + selectedGridId + "_" + colname).is(':checked')) {
                        isAllow = true;
                    } else {
                        isAllow = false;
                    }
                }
                console.log("isAllow::::" + isAllow);
                if (isAllow) {
                    //operatorMM_PENDING_REQ_REG_MGR0
                    //  paramObj.datatype = $.trim($(this).attr('data-type'));
                    paramObj.column = $.trim($(this).attr('data-colname'));
                    //  paramObj.rangeflag = $.trim($(this).attr('data-range')) == 'Y' ? 'Y' : 'N';
                    // paramObj.minvalue = $.trim($("#" + reqType + "tbmin" + i).val());
                    // paramObj.maxvalue = $.trim($("#" + reqType + "tbmax" + i).val());
                    // var type = $("#" + reqType + "tb" + i).attr("type");
                    if (dataColType == 'L') {
                        var value = "";
                        var selectBoxValue = $("#" + selectedGridId + "_" + colname).jqxComboBox('getSelectedItems');
                        if (selectBoxValue != null) {
                            for (var j = 0; j < selectBoxValue.length; j++)
                            {
                                value += selectBoxValue[j].value;
                                if (j != selectBoxValue.length - 1) {
                                    value += ",";
                                }
                            }
                        }
                        paramObj.value = value;
                    } else
                    if (type != null && type == 'checkbox') {
                        var textval = "N";
                        if ($("#" + selectedGridId + "_" + colname).is(':checked')) {
                            textval = "Y";
                        } else {
                            textval = "N";
                        }
                        paramObj.value = textval;
                    } else {
                        paramObj.value = $.trim($("#" + selectedGridId + "_" + colname).val());
                    }
                    paramObj.operator = $("#operator" + selectedGridId + i).val();
                    paramObj.symbol = $.trim($("#operator" + selectedGridId + i).find('option:selected').text());
                    //  paramObj.staged = $("#" + reqType + "ddw" + i).attr('data-staged') == "Y" ? "Y" : "N";
                    //  paramObj.andOrOperator = andOrOperator;
                    // paramObj.typeSelectStr = typeSelectStr;
                    // paramObj.dlovcolname = dlovcolname;
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
        }
        if (orgChartParams != null && !jQuery.isEmptyObject(orgChartParams))
        {
            for (var k = 0; k < orgChartParams.length; k++) {
                paramArray.push(orgChartParams[k]);
            }
        }
        if (paramArray != null && paramArray.length > 0) {
            $('#' + selectedGridId).off('cellclick');
            alert("selectedGridId:::" + selectedGridId);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getTabDataByGridId",
                cache: false,
                data: {
                    gridId: selectedGridId,
                    selectedGridCompType: "GRID"

                },
                success: function (response) {
                    $("#" + selectedGridId + "_ACCORDIAN").accordion({active: 1});
                    $('.filterAccordian').css('overflow-y', 'scroll');
                    try {
                        $("#" + selectedGridId + "_ACCORDIAN").animate({scrollTop: $("#" + selectedGridId + "_ACCORDIAN")[0].scrollHeight}, 2000);
                    } catch (g) {

                    }
                    clusterGridConfig(response, response['gridId'], selectedTabId.split("_TAB")[0], "FILTER_GRID", "Y", paramArray, "", "", "Y");
                },
                error: function (e) {
                    sessionTimeout(e);
                }// Error function in Ajax
            }); // end ajax call
        } else {
            var message = "Please provide at least one value to Search.";
            message = labelObject[message] != null ? labelObject[message] : message;
            var dialogSplitMessage = dialogSplitIconText(message, "Y");
            $("#dialog1").append(dialogSplitMessage);
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 140,
                width: 330,
                fluid: true,
                buttons: [
                    {
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            stopLoader();
                            $("#dialog1").empty();
                            $("#dialog1").dialog('close');
                        }
                    }
                ],
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    //    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                    $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                }
                ,
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        }
    }
}

function clearFilterGridSearch(selectedGridId) {
    $("#" + selectedGridId + "_filter_columns").remove();
    $("#" + selectedGridId + "_FILTER_FORM_TABLE input[type=checkbox]").prop('checked', false);
    $("#" + selectedGridId + "_FILTER_FORM_TABLE input[type=text]").val('');
    $("#" + selectedGridId + "_FILTER_FORM_TABLE input[type=text]").removeAttr('disabled');
    $("#" + selectedGridId + "_FILTER_FORM_TABLE :input").each(function () {
        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        if (type == 'hidden') {
            $("#" + textid + "_LABELS").html("");
            $("#" + textid + "_LABELS").html($(this).attr("data-defaultlabel"));//defaultlabel
            $("#" + textid).val("");
            selectedTitle = "";
            selectedTitleValue = "";
        } else {
            if (textid != null && textid.indexOf("_jqxComboBox") > -1) {
                var comboBoxId = textid.replace("_jqxComboBox", "");
                $("#" + comboBoxId).jqxComboBox('clearSelection');
            } else {
                //$("#" + textid).show();
                $("#" + textid + "_MIN").hide();
                $("#" + textid + "_MIN").css("display", "none");
                $("#" + textid + "_MAX").hide();
                $(".filtergridtd_range").hide();
                $(".filtergridtd_range").css("display", "none");
                $("#" + textid + "_MAX").css("display", "none");
                $("#" + textid + "_TO").hide();
            }

        }
    });
    var i = 0;
    $('select').each(function () {
        $(this).attr('data-staged', 'N');
        $(".fs-label").html("");
        $(".fs-option").removeClass('selected');
        $(".fs-label").html("Select");
        $("#" + "operator" + selectedGridId + i).prop('selectedIndex', 0);
        i++;
        // toggleOperatorLOV($(this).attr('id').toString().replace("ddw", ""));


//        togglePprOperatorLOV($(this).attr('id').toString().replace("ddw", ""));
    });
    stopLoader();
}

function clusterChildTableForm(masterGridId, selectedGridId, selectedGridCompType,
        isMaster, paramArray, relationId, selectedMasterData, gridResultObj) {
    if (selectedGridId != null && selectedGridId != '') {
        showLoader();
        $("#currentSelectChildGridId").val(selectedGridId);
//        try {
//            var panels = $('#clusterSplitter').jqxSplitter('panels');
//            if (panels != null) {
//                $(".visionClusterTableFormDiv").css("height", (parseInt(panels[1].size)));
////                $(".visionTableFormstickyHeader").css("height", (parseInt(panels[1].size) - 90) + "px");
//                $(".visionTableFormstickyHeader").css("overflow-y", "scroll");
//            }
//        } catch (e) {
//        }
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getTableFormDataByGridId",
            cache: false,
            data: {
                masterGridId: masterGridId,
                gridId: selectedGridId,
                selectedGridId: selectedGridId,
                gridResultObj: JSON.stringify(gridResultObj),
                selectedGridCompType: selectedGridCompType,
                selectedRowData: JSON.stringify(selectedMasterData),
                relationId: relationId,
                paramArray: JSON.stringify(paramArray)

            },
            success: function (response) {
                if (response != null && !jQuery.isEmptyObject(response)) {
                    $("#" + selectedGridId).html(response['tabOperationsIcons'] + response['tableFormStr']);
                    $("#" + selectedGridId).attr("data-table", gridResultObj['tableName']);
                    $("#" + selectedGridId).attr("data-masterGridId", masterGridId);
                    $("#" + selectedGridId).attr("data-gridresultobj", JSON.stringify(gridResultObj));
                    $("#" + selectedGridId).attr("data-selectedrowdata", JSON.stringify(selectedMasterData));
                    $("#" + selectedGridId).attr("data-paramarray", JSON.stringify(paramArray));
                    $("#" + selectedGridId).attr("data-relationid", relationId);
                    $("#" + selectedGridId).attr("data-selectedgridcomptype", selectedGridCompType);
                    $("#clusterSplitter").trigger("resize");

//MM_MASS_DATA_PROCESS_MGR_CHAR_ICON
                    // ravi  start---

                    var tabOldObj = {};

                    $("#" + selectedGridId + "tbl" + " :input").each(function ()
                    {
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
//                  jsonOBJ.ids.push(textid.toLowerCase());
                        if (textid != null && textid != 'CREATE_DATE') {
                            tabOldObj[textid] = textval;
                        }


                    });
                    tabsOldData[selectedGridId] = tabOldObj;
                    $("#" + selectedGridId + "_Update").attr("data-localdata", JSON.stringify(response['dataList']));
                    $("#" + selectedGridId + "_update").attr("data-localdata", JSON.stringify(response['dataList']));
// ravi end
                }

            },
            error: function (e) {
                sessionTimeout(e);
                stopLoader();
            }// Error function in Ajax
        }); // end ajax call
        stopLoader();
    }
    stopLoader();
}
function updateTableForm(selectedGridId, operationName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (selectedGridId != null && selectedGridId != '') {
        var localData = $("#" + selectedGridId + "_update").attr("data-localdata");
        if (!(localData != null && localData != '')) {
            localData = $("#" + selectedGridId + "_Update").attr("data-localdata");
        }
        var localDataArray = [];
        if (localData != null && localData != '') {
            localDataArray = JSON.parse(localData);
        }
        var loopIndex = 0;
        var errorMessagesCount = 0;
        var errorMessageTable = "";
        var selectedDataArray = [];
        $("#" + selectedGridId + "tbl tbody tr").each(function () {
//        $("#" + selectedGridId + "tb1 tbody tr").each(function () {
            var matchedCount = 0;
            var selectedRowData = localDataArray[loopIndex];
            var selectedDataObj = {};
            var tdArray = this.cells;
            if (tdArray != null && tdArray.length != 0) {
                for (var i = 0; i < tdArray.length; i++) {
                    var colname = $(tdArray[i]).attr('data-fieldname');

                    var rangeflag = $(tdArray[i]).attr("data-rangeflag");
                    if (rangeflag == true && colname == 'PROPERTY_VALUE1') {
                        var columnValue = $("#tb" + colname + loopIndex).val();
                        var maxColumnValue = $("#maxtbPROPERTY_VALUE2" + loopIndex).val();
                        if ((columnValue != selectedRowData[colname]) ||
                                (maxColumnValue != selectedRowData['PROPERTY_VALUE2'])) {
                            matchedCount++;
                            var regex = $(tdArray[i]).attr('data-regex');
                            var regexMessage = $(tdArray[i]).attr('data-regex-msg');
                            if (columnValue != null && columnValue != ''
                                    && maxColumnValue != null
                                    && maxColumnValue != ''
                                    ) {
                                if (regex != null && regex != '') {
                                    var pattern = new RegExp(regex);
                                    var res = pattern.test(columnValue);
                                    if (res == false) {
                                        errorMessageTable += '<tr><td>' + selectedRowData['PROPERTY_NAME'] + '</td><td>' + regexMessage + '</td></tr>';
                                        errorMessagesCount++;
                                    } else if (pattern.test(maxColumnValue)) {
                                        errorMessageTable += '<tr><td>' + selectedRowData['PROPERTY_NAME'] + '</td><td>' + regexMessage + '</td></tr>';
                                        errorMessagesCount++;
                                    } else if (parseInt(columnValue) > parseInt(maxColumnValue)) {
                                        errorMessageTable += '<tr><td>' + selectedRowData['PROPERTY_NAME'] + '</td><td>Min Value Should be less than max value</td></tr>';
                                        errorMessagesCount++;
                                    }
                                }

                            } else if (!(maxColumnValue != null && maxColumnValue != '') && (columnValue != null && columnValue != '')) {
                                errorMessageTable += '<tr><td>' + selectedRowData['PROPERTY_NAME'] + '</td><td>Max Value Should not be Blank</td></tr>';
                                errorMessagesCount++;
                            } else if ((maxColumnValue != null && maxColumnValue != '') && !(columnValue != null && columnValue != '')) {
                                errorMessageTable += '<tr><td>' + selectedRowData['PROPERTY_NAME'] + '</td><td>Min Value Should not be Blank</td></tr>';
                                errorMessagesCount++;

                            }

                        }
                    } else if (colname == 'PROPERTY_VALUE2' && rangeflag == false) {
                        selectedDataObj[colname] = columnValue;
                    } else {
                        var type = $("#tb" + colname + loopIndex).attr("type");
                        var columnValue = $("#tb" + colname + loopIndex).val();
                        if (type == 'checkbox') {
                            if ($("#tb" + colname + loopIndex).is(":checked")) {
                                columnValue = true;
                            } else {
                                columnValue = false;
                            }
                        }
                        selectedDataObj[colname] = columnValue;
                        if (columnValue != selectedRowData[colname]) {
                            matchedCount++;
                            var regex = $(tdArray[i]).attr('data-regex');
                            var regexMessage = $(tdArray[i]).attr('data-regex-msg');
                            if (columnValue != null && columnValue != '' && regex != null && regex != '')
                            {
                                var pattern = new RegExp(regex);
                                var res = pattern.test(columnValue);
                                console.log(res + ":::::8327");
                                if (res == false)
                                {
                                    errorMessageTable += '<tr><td>' + selectedRowData['PROPERTY_NAME'] + '</td><td>' + regexMessage + '</td></tr>';
                                    errorMessagesCount++;
                                }

                            }
                        }
                    }

                }
            }

            if (matchedCount != 0) {
                selectedDataArray.push(selectedDataObj);
            }
            loopIndex++;
        });
        console.log("selectedDataArray:::" + JSON.stringify(selectedDataArray));
        if (selectedDataArray != null && selectedDataArray.length != 0) {
            if (errorMessagesCount != 0) {
                errorMessageTable = "<table style='width: 100%;' border='1'>"
                        + "<tr><th style='background: #0071c5 none repeat scroll 0 0;color: #FFF;text-align: center'>Property Name</th>"
                        + "<th style='background: #0071c5 none repeat scroll 0 0;color: #FFF;text-align: center'>Error Message</th>" + errorMessageTable;
                errorMessageTable += '</table>';
                console.log(errorMessageTable + "::::::::::::::::::");
                if (errorMessageTable !== "" && errorMessageTable !== null)
                {
                    errorMessageTable = (labelObject[errorMessageTable] != null ? labelObject[errorMessageTable] : errorMessageTable);
                    var dialogSplitMessage = dialogSplitIconText(errorMessageTable, "false");
                    $("#dialog").html(errorMessageTable);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
                        textAlign: 'center',
                        minWidth: 'auto',
                        maxWidth: 'auto',
                        height: 'auto',
                        minHeight: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    //$(this).html("");
                                    $(this).dialog("close");
//                        $("#" + mintb).val('');
//                        $("#" + mintb).focus();
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
                        }
                    });

                }

            } else {
                // process for update
                $.ajax({
                    type: "POST",
                    url: "gridUpdateRecords",
                    data: {
                        gridJsonData: JSON.stringify(selectedDataArray),
                        gridId: selectedGridId,
                        tableName: $("#" + selectedGridId).attr('data-table')
                    },
                    traditional: true,
                    cache: false,
                    success: function (response) {
                        if (response != null && response != '') {
                            var dialogSplitMessage = dialogSplitIconText(response, "Y");
                            $("#dialog").html(dialogSplitMessage);
                            $("#dialog").dialog({resizable: false,
                                modal: true,
                                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
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
                                            var masterGridId = $("#" + selectedGridId).attr("data-masterGridId");
                                            var gridResultObjStr = $("#" + selectedGridId).attr("data-gridresultobj");
                                            var selectedMasterDataStr = $("#" + selectedGridId).attr("data-selectedrowdata");
                                            var paramArrayStr = $("#" + selectedGridId).attr("data-paramarray");
                                            var relationId = $("#" + selectedGridId).attr("data-relationid");
                                            var selectedGridCompType = $("#" + selectedGridId).attr("data-selectedgridcomptype");
                                            clusterChildTableForm(masterGridId,
                                                    selectedGridId, selectedGridCompType, "N", JSON.parse(paramArrayStr),
                                                    relationId, JSON.parse(selectedMasterDataStr), JSON.parse(gridResultObjStr));
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
                                }
                            });
                        }

                    },
                    error: function (e)
                    {
                        sessionTimeout(e);
                    }

                });
            }
        } else {
            // No changes to Save
            var results = "No Changes to Save";
            results = (labelObject[results] != null ? labelObject[results] : results);
            var dialogSplitMessage = dialogSplitIconText(results, "Y");
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({resizable: false,
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
                }
            });
        }
    }
}
function getEnterKeyFilterSearch(event, selectedGridId, selectedGridIndex, selectedTabId) {
    if (event.which == 13) {
        showLoader();
        getFilterGridResults(selectedGridId, selectedGridIndex, selectedTabId);
        stopLoader();
    }
}
//function navigateToForm(datafield, data, redirectType, gridId, selectedTabId, selectingrowindex) {
//
////    navigationGridId = "";
//    var hrefColumn = $("#" + gridId + "_hrefColumn").val();
//    //  var datafield = column.datafield;
//    if (datafield != null && (datafield == hrefColumn || datafield == "show_detail")) {
//        var items = {};
//        var linkedColumns = $("#" + gridId + "_linkedColumns").val();
//        if (linkedColumns != null && linkedColumns != '') {
//            // var linkedColumnArray = linkedColumns.split(",");
//
//            for (var key in data) {
//                if (linkedColumns.lastIndexOf(key) > -1) {
//                    var value = data[key];
//                    //    console.log("key::::" + key + ":::value::::" + value);
//                    value = value.replace(/\s/gi, "_");
//                    value = value.replace(/[#]/g, "_");
//                    //  console.log("key::::" + key + ":::value::::" + value);
//                    items[key] = value;
//                }
//
//            }
//
//
//        }
//        var subTabId = selectedTabId;
//        var baskettypehid = $('#' + selectedTabId).jqxTabs('getTitleAt', $('#' + selectedTabId).jqxTabs('selectedItem'));
////                    
//        if (baskettypehid != null) {
//            if (baskettypehid.lastIndexOf("[") > -1 && baskettypehid.lastIndexOf("]") > -1) {
//                baskettypehid = baskettypehid.toString().substr(0, baskettypehid.toString().indexOf("[") - 1);
//            }
//
//        }
//        console.log("baskettypehid::::" + baskettypehid);
////                       
//        items.baskettype = baskettypehid;
////                        items.baskettype = baskettypehid.replace(/\s/gi, "_");
//        var stripValueStr = $("#" + gridId + "_stripValue").val();
//        //  console.log("stripValueStr:::" + stripValueStr)
//
//        var stripValueObjArray = [];
//        if (stripValueStr != null) {
//            var stripValObj = stripValueStr.split(";");
//            for (var i = 0; i < stripValObj.length; i++)
//            {
//                var stripValueObj = {};
//                if (stripValObj[i] != null && stripValObj[i] != '' && typeof stripValObj[i] != 'undefined') {
//                    if (stripValObj[i].indexOf(",") > -1) {
//                        var stripVal = stripValObj[i].split(",");
//                        //                                     if (stripVal[0] != null && stripVal[1] != null) {
//                        stripValueObj.columnName = stripVal[0];
//                        stripValueObj.value = stripVal[1];
////                                        stripValueObj.value = encodeURIComponent(stripVal[1]);
//                        stripValueObjArray.push(stripValueObj);
//                        //                            }
//
//
//                    }
//
//                }
//
//            }
//
//        }//
//
//        var hiddenObjStr = $("#" + gridId + "_hiddenObj").val();
//        if (hiddenObjStr != null) {
//            var hiddenObj = JSON.parse(hiddenObjStr);
//            for (var key in hiddenObj) {
//                var value = hiddenObj[key];
//                // alert(key+":::::"+value);
//                if (value != null && value != '' && value != 'null') {
//                    if (key != null && key.lastIndexOf("HIDDEN") > -1) {
//
//                        var columnsArray = value.split(",");
//                        //  alert("columnsArray:::"+columnsArray);
//                        var hiddenIds = key.split("HIDDEN_");
//                        var hiddenVal = data[hiddenIds[1]];
//                        //alert("hiddenIds[1]:::"+hiddenIds[1]);
//                        //  alert("hiddenVal:::"+hiddenVal);
//                        for (var i = 0; i < columnsArray.length; i++) {
//                            if (columnsArray[i] != 'NAME1') {
//                                items[columnsArray[i]] = hiddenVal;
////                                                items[columnsArray[i]] = encodeURIComponent(hiddenVal);
//
//                            }
//                        }
//
//                    }
//                } else {
//                    //alert("Value is null");
//                }
//            }
//        }
//        items.stripValue = stripValueObjArray
//        items.imageColumn = $("#" + gridId + "_imageColumn").val();
//        items.imageTable = $("#" + gridId + "_imageTable").val();
//        items.imageTableColumn = $("#" + gridId + "_imageTableColumn").val();
//        items.linkedColumns = linkedColumns;
//        items.gridId = gridId;
//        items.panelId = $("#" + gridId + "_panelId").val();
//        items.tabId = selectedTabId;
//        var datainformation = $('#' + gridId).jqxGrid('getdatainformation');
//        var rowscount = datainformation.rowscount;
//        items.selectingrowindex = selectingrowindex;
//        items.rowscount = rowscount;
//        var colInitParamObj = $("#" + gridId + "_columnInitParams").val();
//        items.colInitParamObj = JSON.parse(colInitParamObj);
//        //  console.log("items:::" + JSON.stringify(items));
//        //   console.log("data:::" + JSON.stringify(data));
//        var itemsstring = JSON.stringify(items);
//        $("#items").val(itemsstring);
//        if (staticFormFlag == 'Y') {
//            $("#submitForm").attr("action", "staticFormData");
//            $("#submitForm").attr("target", "thatframe");
//            $("#submitForm").submit();
//        } else if (datafield == hrefColumn) {
////            navigationGridId = gridId;
//            $("#submitForm").attr("action", "formData");
////                            $("#submitForm").attr("target", "target");
//            $("#submitForm").attr("target", "thatframe");
//            $("#submitForm").submit();
//        } else if (datafield == "show_detail") {
//            $("#submitForm").attr("target", "_blank");
//            $("#submitForm").attr("action", "genericDataSheet");
//            $("#submitForm").submit();
//        }
//    }
//
//}
function getcluster(clusterId, roleId, domain, tabsflag, paramArray, divId, dialogViewFlag) {
    showLoader();
    try {
        let getActionImg = $(event.target).attr('src');
        sessionStorage.setItem('clusterImg', getActionImg);
    } catch (e) {

    }
    $("#dxpGridContent").hide();
    $("#dxpAnalyticsContent").hide();
    $("#VisualizePageBody").hide();
    $("#VisualizePageBody").html("");
    $("#dxpHomeContent").hide();
    $("#dxClassesContent").hide();
    $("#dxpFormContent").hide();
    $("#dxpCluster").hide();
    $("#dxpconsolidationFormView").hide();
    $("#dxpClusterContent").hide();

    $("#dxp2TabsWithGridContent").hide();
    if (divId != null && divId != undefined && divId != '')
    {
    } else {
        $("#dxp1TabsWithGridContent").hide();
    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        try {
            var basketTitle = $(event.currentTarget).text();
            var backClass = $(event.currentTarget).attr("class");
            firorMenuPopoverText(basketTitle);
            if (!(backClass != null && backClass != undefined) || !backClass.includes("Back")) {
                var firorDomainObj = {};
                firorDomainObj[basketTitle] = `getcluster(${clusterId}, ${roleId}, ${domain},${tabsflag},${paramArray},${divId},${dialogViewFlag})`;
                backDomainCumArray.push(firorDomainObj);
            }

        } catch (e) {
            console.log(e);
        }
    }
    var clusterformDivid = "clusterFormData";

    try {
        let currentTabName = event.currentTarget.innerText;
        var tabname = currentTabName.split('\n')[0];
        insertUserClickedNavigations(tabname);
    } catch (e) {

    }
    showLoader();

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getclusterFormData",
        cache: false,
        async: false,
        data: {
            clusterId: clusterId,
            roleId: roleId,
            domain: domain,
            tabsflag: tabsflag,
            orgChartParamArray: JSON.stringify(paramArray)
                    //  gridId: "PM_TASK_LIST_HEADER",
//                items: itemObjDefaultValuesDataObjStr
        },
        success: function (response) {
            stopLoader();
            var masterObject = response['masterObject'];
            var masterId = masterObject['masterId'];
            var tabstring = response['tabsString'];
            var tabhdString = response['tabhdString'];
            var tabsHeadersString = response['tabsHeadersString'];
            var paramArrayStr = response['paramArray'];

//               $("#clusterFormData").remove();
//               $("body").append("<div id='clusterFormData' ></div>");
//               $("#clusterFormdialog").remove();
//               $("body").append("<div id='clusterFormdialog' ></div>");

            if (divId != null && divId != undefined && divId != '')
            {
                if (tabsHeadersString != null && tabsHeadersString != undefined && tabsHeadersString != ''
                        && tabsflag != null && tabsflag != undefined && tabsflag != '' && tabsflag == 'Y')
                {
                    $("#dxpHomeContent").hide();
                    $("#dxpconsolidationFormView").hide();

                    $("#dxpFormContent").hide();
                    $("#" + divId).html("");
                    $("#" + divId).show();
                    $("#" + divId).html("<div id='" + divId + "ClusterFirstDiv' ></div><div id='" + divId + "ClusterSecondDiv' ></div>");
                    $("#" + divId).jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
                    $("#" + divId + "ClusterFirstDiv").html("");
                    $("#" + divId + "ClusterSecondDiv").html("");
                    $("#" + divId + "ClusterFirstDiv").html(tabsHeadersString);
                    clusterformDivid = divId + 'clusterFormData'
//                    $("#dxpClusterSecondDiv").html("<div id='" + divId + "' ></div>");
                    $("#dxpClusterSecondDiv").html("<div id='" + divId + "'  class = 'dxpclusterFormDataClass' ></div>");
                    $("#" + divId + "ClusterSecondDiv").addClass("customSplitterHt");
                } else {
                    if (dialogViewFlag != null && dialogViewFlag != undefined && dialogViewFlag != '' && dialogViewFlag == "Y") {
                        $("#clusterFormData").remove();
                        $(".dhDataParentView").show();
                        $("#dxpGridContent").show();
//                        $("#dxpDHClusterView").html("<div id='clusterFormData'  ></div>");
                        $("#dxpDHClusterView").html("<div id='clusterFormData'  class = 'dxpclusterFormDataClass' ></div>");
                    } else {
                        $("#dxpGridContent").hide();
                        $("#dxpFormContent").hide();
                        $("#dxpMenus").hide();
                        $("#dxpClusterContent").hide();
                        $("#" + divId).html("");
                        $("#" + divId).show();
                        clusterformDivid = divId + 'clusterFormData'
//                        $("#" + divId).html("<div id='" + clusterformDivid + "' ></div>");
                        $("#" + divId).html("<div id='" + clusterformDivid + "'  class = 'dxpclusterFormDataClass' ></div>");
                        $("#clusterSplitter").removeClass("customSplitterHt");
                        $(".dhDataParentView").hide();
                    }
                }
            } else {
                if (tabsHeadersString != null && tabsHeadersString != undefined && tabsHeadersString != ''
                        && tabsflag != null && tabsflag != undefined && tabsflag != '' && tabsflag == 'Y')
                {
                    $("#dxpHomeContent").hide();
                    $("#dxpconsolidationFormView").hide();

                    $("#dxpFormContent").hide();
                    if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
                        showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', tabname, 'N');
                    } else {
                        showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', 'View Cluster', 'N');
                    }
                    if ($("#dxpTabs").is(":visible")) {

                    } else {
                        toggleTabsAndMenus(event);
                    }
//                toggleTabsAndMenus(event);
//               $("#dxpMenus").hide();
                    $("#dxpClusterMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
                    $("#dxpClusterSecondDiv").html("");
                    $("#dxpClusterFirstDiv").html("");
                    $("#dxpClusterFirstDiv").html(tabsHeadersString);
                    $("#dxpClusterSecondDiv").html("<div id='clusterFormData'  class = 'dxpclusterFormDataClass'  ></div>");
                    $("#clusterSplitter").addClass("customSplitterHt");
                } else {
                    $("#dxpGridContent").hide();
                    $("#dxpFormContent").hide();
                    $(".dhDataParentView").hide();
//                toggleTabsAndMenus(event);
                    $("#dxpMenus").hide();
                    if (roleId != null && roleId != '' && roleId != undefined && roleId == "ADMIN") {
                        $("#dxpHomeContent").show();
                    } else {
                        $("#dxpHomeContent").hide();
                    }

                    $("#dxpClusterContent").hide();
                    $("#dxpCluster").html("");
                    $("#dxpCluster").show();
                    $("#dxpCluster").html("<div id='clusterFormData'  class = 'dxpclusterFormDataClass' ></div>");
                    $("#clusterSplitter").removeClass("customSplitterHt");
                    if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
                        showSelectedTabContent(null, 'dxpClusterTab2', 'dxpCluster', tabname, 'N');
                    } else {
                        showSelectedTabContent(null, 'dxpClusterTab2', 'dxpCluster', 'View Cluster', 'N');
                    }
                    if (fioriThemeCheck) {
                       if (roleId != null && roleId != '' && roleId != undefined && roleId == "ADMIN") {
                            $("#dxpHomeContent").show();
                        } else {
                            $("#dxpHomeContent").hide();
                        }
                    }
                    if ($("#dxpTabs").is(":visible")) {

                    } else {
                        toggleTabsAndMenus(event);
                    }
                }
            }



//             document.getElementById('clusterFormData').innerHTML = tabhdString;
            if (clusterformDivid != null && clusterformDivid != undefined && clusterformDivid != '' && clusterformDivid != 'undefined') {
                $("#" + clusterformDivid).html(tabstring);
            } else {
                $("#clusterFormData").html(tabstring);
            }



//            if (tabsHeadersString != null && tabsHeadersString != undefined && tabsHeadersString != ''
//                    && tabsflag != null && tabsflag != undefined && tabsflag != '' && tabsflag == 'Y')
//            {
//                $("#dxpHomeContent").hide();
//                $("#dxpconsolidationFormView").hide();
//
//                $("#dxpFormContent").hide();
//                if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
//                    showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', tabname, 'N');
//                } else {
//                    showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', 'View Cluster', 'N');
//                }
//                if ($("#dxpTabs").is(":visible")) {
//
//                } else {
//                    toggleTabsAndMenus(event);
//                }
////                toggleTabsAndMenus(event);
////               $("#dxpMenus").hide();
//                $("#dxpClusterMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
//                $("#dxpClusterSecondDiv").html("");
//                $("#dxpClusterFirstDiv").html("");
//                $("#dxpClusterFirstDiv").html(tabsHeadersString);
//                $("#dxpClusterSecondDiv").html("<div id='clusterFormData' ></div>");
//                $("#clusterSplitter").addClass("customSplitterHt");
//            } else {
//                $("#dxpGridContent").hide();
//                $("#dxpFormContent").hide();
////                toggleTabsAndMenus(event);
//                $("#dxpMenus").hide();
//                if (roleId != null && roleId == "ADMIN") {
//                    $("#dxpHomeContent").show();
//                } else {
//                    $("#dxpHomeContent").hide();
//                }
//
//                $("#dxpClusterContent").hide();
//                $("#dxpCluster").html("");
//                $("#dxpCluster").show();
//                $("#dxpCluster").html("<div id='clusterFormData' ></div>");
//                $("#clusterSplitter").removeClass("customSplitterHt");
//                if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
//                    showSelectedTabContent(null, 'dxpClusterTab2', 'dxpCluster', tabname, 'N');
//                } else {
//                    showSelectedTabContent(null, 'dxpClusterTab2', 'dxpCluster', 'View Cluster', 'N');
//                }
//                if ($("#dxpTabs").is(":visible")) {
//
//                } else {
//                    toggleTabsAndMenus(event);
//                }
//            }
//
//
//
////             document.getElementById('clusterFormData').innerHTML = tabhdString;
//            $("#clusterFormData").html(tabstring);

            var theme = "ui-redmond";
            $("#" + masterId + "_TAB").jqxTabs({position: 'top', theme: theme, reorder: true, autoHeight: true, keyboardNavigation: true, scrollPosition: 'both'});
            $("#" + masterId + "_TAB ul").show();
            //$(window).resize(function ()
            //{
//                            screenHeight = screen.height;
//                            if (parseInt(screenHeight) >= 769) {
//                                $("#" + masterId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
//                                    theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
//                                    , scrollPosition: 'both'});
//                                console.log("screen height is::::864 ");
//                            } else {
//                                $("#" + masterId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
//                                    theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
//                                    , scrollPosition: 'both'});
//                                console.log("screen height is::::768 ");
//                            }
            var masterGridObj = masterObject['masterGridObj'];
            if (masterGridObj != null && masterGridObj != undefined) {
                if (roleId != null && roleId == "ADMIN") {
                    masterGridObj['action'] = domain;
                }
                var hrefObject = masterGridObj['hrefObj'];
                $("#masterPanelId").val(masterGridObj['panelId']);
                $("#masterFormId").val(masterGridObj['formId']);
                $("#masterGridObj").val(masterObject['masterGridObj']);
                $("#masterLinkedColumns").val(hrefObject['linkedColumns']);
                $("#masterhrefColumn").val(hrefObject['hrefColumn']);
                $("#masterObject").val(masterObject);
                $("#masterStripValue").val(hrefObject['stripValue']);
                $("#masterClusterId").val(masterObject['masterId']);
//                                $("#itemObjDefaultValues").val(masterObject['itemObjDefaultValues']);
                //$("#itemObjDefaultValues").val(itemObjDefaultValuesDataObjStr);
                $("#masterImageColumn").val(hrefObject['imageColumn']);
                $("#imageTable").val(hrefObject['imageTable'])
                $("#imageTableColumn").val(hrefObject['imageTableColumn'])
                var gridRefresh = $("#gridRefreshVal").val();
                $("#gridRefreshVal").val(gridRefresh);
                var hiddenObject = masterGridObj['hiddenObj'];
                if (hiddenObject != null) {
                    $("#hiddenObject").val(JSON.stringify(hiddenObject));
                }
                var columnInitParamObj = {};
                columnInitParamObj = masterGridObj['columnInitParamsObj'];
                $("#masterColumnInitParamsObj").val(JSON.stringify(columnInitParamObj));
                $("#defaultFlag").val(masterGridObj['defaultFlag']);
                $("#attachTypeVal").val(masterGridObj['attachTypeVal']);
            }
            $("#" + masterId + "_TAB").unbind('selected').on('selected', function (event) {

                currentClickedGridId = null;
                executed = false;
                changeflag = false;
                tabSwitched = true;
                if (onTabclickFunc != null) {
                    onTabclickFunc();
                }
            });

            $("#" + masterId + "_TAB").unbind('selecting').on('selecting', function (event) {
                if (currentClickedGridId != null) {
                    checkChanges(currentClickedGridId);
                }
                askConfirmation(event, event.target.id);
            });

            $("#" + masterId + "_TAB").unbind('unselecting').on('unselecting', function (event) {
                var tabTitle = $('#${masterId}_TAB').jqxTabs('getTitleAt', event.args.item);
                var unselectedTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
                checkChanges(unselectedTabId);
            });

            $("li.jqx-tabs-title").on("mouseup", function (event)

            {
                var target = $(event.target).closest('.jqx-tabs-title');
                onTabclickFunc = target[0].onclick;
                //onTabclickFunc = onTabclickFunc.substring(25,onTabclickFunc.length-1);
                tabSwitched = false;
            });
            // });
            // window.dispatchEvent(new Event('resize'));

            if (masterObject != null) {
                var paramArray = [];
                try {
                    if (paramArrayStr != null && paramArrayStr != undefined && paramArrayStr != '') {
                        paramArray = JSON.parse(paramArrayStr);
                    }
                } catch (e) {
                    paramArray = [];
                    console.log(e)
                }
                var masterGridObj = masterObject['masterGridObj'];
                clusterGridConfig(masterGridObj, masterGridObj['gridId'], masterId, masterObject['compType'], "Y", paramArray, "", "", "Y");
                if (tabsHeadersString != null && tabsHeadersString != undefined && tabsHeadersString != '') {
                    $("#clusterSplitter").jqxSplitter({width: "1390px", height: "750px", orientation: 'horizontal'});
                    //$("#clusterSplitter").jqxSplitter({   orientation: 'horizontal'});

//                    showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent')
                    if (divId != null && divId != undefined && divId != '')
                    {
                    } else {
                        if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
                            showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', tabname, 'N');
                        } else {
                            showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', 'View Cluster', 'N');
                        }
                    }
//                                $("#"+masterGridObj['gridId']).jqxGrid({"width": "100%"});
//                                $("#"+masterGridObj['gridId']).jqxGrid({"height": "100%"});
                    // $("#"+masterGridObj['gridId']).jqxGrid("height", "687px");

                }
            }

        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }
    });
//    stopLoader();
}



function clusterForm(clusterparam) {
    var basicData = {};
    var mainFormPanelId = $("#panelId").val();
    if (clusterparam != null && clusterparam != '' && clusterparam != undefined)
    {
        clusterparam = JSON.parse(clusterparam);


        var orgChartParams = [];
        var paramArray = [];
        var clusterId = clusterparam['ClusterId'];
        var gridId = clusterparam['gridId'];
        var popupheight = clusterparam['height'];
        var popupwidth = clusterparam['width'];
        var WhereCondition = clusterparam['whereCond'];
        var defaultValuesFieldStr = clusterparam['defaultValuesFields'];
        var titleMessage = clusterparam['titleMessage'];
        var dialogwidth = '500';
        var dialogheight = '500';
        var tmessage = 'Cluster';
        try {
            $("#visionClusterSpliterMain").html("");
        } catch (e) {

        }

        if (titleMessage != null && titleMessage != "" && titleMessage != 'undefined')
        {
            tmessage = titleMessage;
        }
        if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
        {
            dialogwidth = popupwidth;
        }
        if (popupheight != null && popupheight != "" && popupheight != 'undefined')
        {
            dialogheight = popupheight;
        }

        console.log();
        var message = "";
        var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');


        var selectedRowsData = [];
        var totalRowIndex = indexes.length;
        if (totalRowIndex != null && totalRowIndex <= 0) {
            message = "Please select any row to view";
        } else if (totalRowIndex != null && totalRowIndex > 1) {
            message = "Please select any One row to view";
        }

        if (totalRowIndex != null && totalRowIndex == 1) {
            var count = 0;
            for (var i = count; i < totalRowIndex; i++) {
                var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);

                $("#mat_creation_form_table :input").each(function () {
                    var textid = $(this).attr("id");
                    var type = $(this).attr("type");
                    var textval = $(this).val();
                    if (type != 'hidden') {
                        if (textval != null && textval != '') {
                            textval = textval.toUpperCase();
                        }
                    }

//                  jsonOBJ.ids.push(textid.toLowerCase());
                    if (textid != null && textid != 'CREATE_DATE') {

                        data[textid] = textval;
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
                            data[columnsArray[i]] = hiddenVal;
                        }

                    }

                });

                selectedRowsData.push(data);
            }



            if (WhereCondition != null && !jQuery.isEmptyObject(WhereCondition)) {
                var columnarr = WhereCondition.split(",")
                for (var i = 0; i < columnarr.length; i++) {
                    var paramObj = {};
                    var whereconditionColumn = columnarr[i];
//              paramObj.value = selectedRowsData[0][whereconditionColumn];
//                    paramObj.value = "'" + selectedRowsData[0][whereconditionColumn] + "'";
                    paramObj.value = selectedRowsData[0][whereconditionColumn];
                    paramObj['column'] = whereconditionColumn
                    paramObj['operator'] = '=';
                    paramArray.push(paramObj);
                }

            }

            var itemObjDefaultValuesDataObj = {};

            if (defaultValuesFieldStr != null && !jQuery.isEmptyObject(defaultValuesFieldStr)) {
                var defaultValuesFieldarr = defaultValuesFieldStr.split(",");
                for (var i = 0; i < defaultValuesFieldarr.length; i++) {
                    var defaultValuesFieldColumn = defaultValuesFieldarr[i].split(":")[0];
                    var defaultValueColumn = defaultValuesFieldarr[i].split(":")[1];
//              paramObj.value = selectedRowsData[0][whereconditionColumn];
                    itemObjDefaultValuesDataObj[defaultValuesFieldColumn] = selectedRowsData[0][defaultValueColumn];
                }

            }

            var itemObjDefaultValuesDataObjStr = JSON.stringify(itemObjDefaultValuesDataObj);

// var paramArraystr= JSON.stringify(paramArray);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getclusterFormData",
                cache: false,
                async: false,
                data: {
                    clusterId: clusterId,
                    gridId: gridId,
//                items: itemObjDefaultValuesDataObjStr
                },
                success: function (response) {
                    var masterObject = response['masterObject'];
                    var masterId = "";
                    var masterId = masterObject['masterId'];
                    var tabstring = response['tabsString'];
                    var screenWidth = window.innerWidth;
                    var screenHeight = window.innerHeight;
//                    document.getElementById('clusterFormpopupData').innerHTML = tabstring;
                    $("#dialog10").html(tabstring);
                    $("#dialog10").dialog({
                        resizable: false,
                        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                        modal: true,
                        height: (screenHeight - 100),
                        width: (screenWidth - 200),
                        buttons: [{
                                text: (labelObject['Close'] != null ? labelObject['Close'] : "Close"),
                                click: function () {
//                              $(this).html("");
//                                    $("#clusterFormpopupData").html("");
                                    $("#dialog10").html("");
//                                document.getElementById('clusterFormdialog').style.display = 'none';
                                    $("#masterPanelId").val("");
                                    $("#masterFormId").val("");
                                    $("#masterGridObj").val("");
                                    $("#masterLinkedColumns").val("");
                                    $("#masterhrefColumn").val("");
                                    $("#masterObject").val("");
                                    $("#masterStripValue").val("");
                                    $("#masterClusterId").val("");
                                    $("#itemObjDefaultValues").val("");
                                    $("#masterImageColumn").val("");
                                    $("#masterColumnInitParamsObj").val("");
                                    $("#currentSelectChildGridId").val("");
                                    $("#currentSelectMasterGridId").val("");
                                    $("#multiSelectGridId").val("");
                                    $("#currentSelectFillDownDependencyColumns").val("");
                                    $("#currentSelectFillDownData").val("");
                                    $("#currentSelectGridIndex").val("");
                                    $("#currentSelectMasterGridIndex").val("");
                                    $("#panelId").val(mainFormPanelId);
                                    $("#relationArray").val("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }

                            }],
                        open: function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex"); 

//                        document.getElementById('clusterFormdialog').style.display = 'block';
                            var theme = "ui-redmond";
//                            $(window).resize(function ()
//                            {
                            screenHeight = screen.height;
                            if (parseInt(screenHeight) >= 769) {
                                $("#" + masterId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
                                    theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
                                    , scrollPosition: 'both'});
                                console.log("screen height is::::864 ");
                            } else {
                                $("#" + masterId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
                                    theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
                                    , scrollPosition: 'both'});
                                console.log("screen height is::::768 ");
                            }
                            var masterGridObj = masterObject['masterGridObj'];
                            if (masterGridObj != null && masterGridObj != undefined) {
                                var hrefObject = masterGridObj['hrefObj'];
                                $("#masterPanelId").val(masterGridObj['panelId']);
                                $("#masterFormId").val(masterGridObj['formId']);
                                $("#masterGridObj").val(masterObject['masterGridObj']);
                                $("#masterLinkedColumns").val(hrefObject['linkedColumns']);
                                $("#masterhrefColumn").val(hrefObject['hrefColumn']);
                                $("#masterObject").val(masterObject);
                                $("#masterStripValue").val(hrefObject['stripValue']);
                                $("#masterClusterId").val(masterObject['masterId']);
//                                $("#itemObjDefaultValues").val(masterObject['itemObjDefaultValues']);
                                $("#itemObjDefaultValues").val(itemObjDefaultValuesDataObjStr);
                                $("#masterImageColumn").val(hrefObject['imageColumn']);
                                $("#imageTable").val(hrefObject['imageTable'])
                                $("#imageTableColumn").val(hrefObject['imageTableColumn'])
                                var gridRefresh = $("#gridRefreshVal").val();
                                $("#gridRefreshVal").val(gridRefresh);
                                var hiddenObject = masterGridObj['hiddenObj'];
                                if (hiddenObject != null) {
                                    $("#hiddenObject").val(JSON.stringify(hiddenObject));
                                }
                                var columnInitParamObj = {};
                                columnInitParamObj = masterGridObj['columnInitParamsObj'];
                                $("#masterColumnInitParamsObj").val(JSON.stringify(columnInitParamObj));
                                $("#defaultFlag").val(masterGridObj['defaultFlag']);
                                $("#attachTypeVal").val(masterGridObj['attachTypeVal']);
                            }
                            $("#" + masterId + "_TAB").unbind('selected').on('selected', function (event) {

                                currentClickedGridId = null;
                                executed = false;
                                changeflag = false;
                                tabSwitched = true;
                                if (onTabclickFunc != null) {
                                    onTabclickFunc();
                                }
                            });

                            $("#" + masterId + "_TAB").unbind('selecting').on('selecting', function (event) {
                                if (currentClickedGridId != null) {
                                    checkChanges(currentClickedGridId);
                                }
                                askConfirmation(event, event.target.id);
                            });

                            $("#" + masterId + "_TAB").unbind('unselecting').on('unselecting', function (event) {
                                var tabTitle = $('#${masterId}_TAB').jqxTabs('getTitleAt', event.args.item);
                                var unselectedTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
                                checkChanges(unselectedTabId);
                            });

                            $("li.jqx-tabs-title").on("mouseup", function (event)

                            {
                                var target = $(event.target).closest('.jqx-tabs-title');
                                onTabclickFunc = target[0].onclick;
                                //onTabclickFunc = onTabclickFunc.substring(25,onTabclickFunc.length-1);
                                tabSwitched = false;
                            });
//                            }).resize();

                            if (masterObject != null) {
                                var masterGridObj = masterObject['masterGridObj'];
                                clusterGridConfig(masterGridObj, masterGridObj['gridId'], masterId, masterObject['compType'], "Y", paramArray, "", "", "Y");
                                $("#clusterSplitter").css("width", "100%");
                                $("#clusterSplitter").css("height", "687px");
                                $(this).closest(".ui-dialog").addClass("taskListMainPopup");
                                $(".ui-widget-overlay").css("display", "none");
                            }
                        },
                        beforeClose: function (event, ui)
                        {
//                            $("#clusterFormpopupData").html("");
                            $("#dialog10").html("");
                            $("#panelId").val(mainFormPanelId);
                            $("#masterPanelId").val("");
                            $("#masterFormId").val("");
                            $("#masterGridObj").val("");
                            $("#masterLinkedColumns").val("");
                            $("#masterhrefColumn").val("");
                            $("#masterObject").val("");
                            $("#masterStripValue").val("");
                            $("#masterClusterId").val("");
                            $("#itemObjDefaultValues").val("");
                            $("#masterImageColumn").val("");
                            $("#masterColumnInitParamsObj").val("");
                            $("#currentSelectChildGridId").val("");
                            $("#currentSelectMasterGridId").val("");
                            $("#multiSelectGridId").val("");
                            $("#currentSelectFillDownDependencyColumns").val("");
                            $("#currentSelectFillDownData").val("");
                            $("#currentSelectGridIndex").val("");
                            $("#currentSelectMasterGridIndex").val("");
                            $("#relationArray").val("");

                        }
                    });
                },
                error: function (e) {
                    stopLoader();
                    sessionTimeout(e);
                }
            });
        } else {
            $("#dialog").html(message);
            $("#dialog").dialog({resizable: false,
                title: (labelObject["message"] != null ? labelObject["message"] : "message"),
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
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
                }
            });
        }

    }
}
function compareGrids(compareId1, compareId2, masterGrid, selectType) {
    ajaxStart();
    var selectedqueryrowindexes = $('#' + compareId1).jqxGrid('selectedrowindexes');
    var selectedwebservicerowindexes = $('#' + compareId2).jqxGrid('selectedrowindexes');
    var selectedmasterrowindexes = $('#' + masterGrid).jqxGrid('selectedrowindexes');
    var lastIndex = selectedmasterrowindexes.last();
    selectedmasterrowindexes.clear();
    selectedmasterrowindexes.push(lastIndex);
    var selectedQueryRowsData = [];
    var selectedWebServiceRowsData = [];
    var masterGridRowData = [];
    selectedWebServiceRowsData.push($("#" + compareId2).jqxGrid('getrowdata', selectedwebservicerowindexes));
    selectedQueryRowsData.push($("#" + compareId1).jqxGrid('getrowdata', selectedqueryrowindexes));
    masterGridRowData.push($("#" + masterGrid).jqxGrid('getrowdata', selectedmasterrowindexes));
    console.log(JSON.stringify(masterGridRowData));
    var gridQuerydata = $("#" + compareId1).jqxGrid('getdatainformation');
    //var allrows = $("#" + compareId1).jqxGrid('selectallrows');
    var gridwebdata = $("#" + compareId2).jqxGrid('getdatainformation');
    var queryDatarows = [];
    var webDatarows = [];
    for (var i = 0; i < gridQuerydata.rowscount; i++)
        queryDatarows.push($("#" + compareId1).jqxGrid('getrowdata', i));
    for (var j = 0; j < gridwebdata.rowscount; j++)
        webDatarows.push($("#" + compareId2).jqxGrid('getrowdata', j));
    console.log(JSON.stringify(webDatarows));
    var webDataLength = selectedwebservicerowindexes.length;
    console.log("webDataLength:::::" + webDataLength);
    var queryDataLength = gridQuerydata.rowscount;
    var masterDataLength = selectedmasterrowindexes.length;
    console.log("queryDataLength::::" + queryDataLength);
    // $("#" +compareId2).jqxGrid('selectallrows');
    //var gridDatas=$("#compareId2").jqGrid('getRowData');
    // console.log("webData::::"+ webData);
//                            for(var j = 0;j < rows.length;j++)
//                            var queryData = rows[j];
    //console.log("queryData ::::"+JSON.stringify(queryData));
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "getCompareGridData",
        data: {
            CompareId1: compareId1,
            CompareId2: compareId2,
            WebRowsData: JSON.stringify(selectedWebServiceRowsData),
            QueryRowsData: JSON.stringify(queryDatarows),
            WebAllRows: JSON.stringify(webDatarows),
            MasterRowData: JSON.stringify(masterGridRowData),
            masterDataLength: masterDataLength,
            WebDataLength: webDataLength,
            SelectType: selectType

        },
        success: function (compObject) {
            ajaxStop();
            console.log('after ajax function::::' + compObject);
            retmsg = compObject;
            console.log('retmsg::::' + retmsg);
            var diamsg = retmsg['Message'];
            var newGridData = retmsg['newGridData'];
            var conceptId = retmsg['conceptId'];
            var newTermId = retmsg['termId'];
            var newDefinitionId = retmsg['definitionId'];
            var newAbbreviationId = retmsg['abbreviationId'];
            $("#termId").val(newTermId);
            var termId = $("#termId").val();
            console.log("term id value is:::" + termId);
            $("#definitionId").val(newDefinitionId);
            var definitionId = $("#definitionId").val();
            console.log("definitionId id value is:::" + definitionId);
            $("#abbreviationId").val(newAbbreviationId);
            var abbreviationId = $("#abbreviationId").val();
            console.log("abbreviationId id value is:::" + abbreviationId);
            var webNewData = retmsg['webNewData'];
            var gridNewId = retmsg['gridId'];
            var nonmappdata = retmsg['nonmappdata'];
            console.log('diamsg ::::' + diamsg);
            console.log('newGridData ::::' + newGridData);
            console.log('gridNewId ::::' + gridNewId);
            console.log('webAllRows ::::' + nonmappdata);
            if (diamsg != null && diamsg != '') {
                //compareGridsPopUp(diamsg); 
                var setWidth;
                $("#dialog1").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Validation'] != null ? labelObject['Validation'] : 'Validation'),
                    width: dialogWidthResize(diamsg, setWidth),
                    height: 'auto',
                    minHeight: 'auto',
                    fluid: true,

                    buttons: {
                        Ok: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            if (newGridData != null && newGridData != undefined) {
                                fetchNewGridData(newGridData, gridNewId, webNewData, nonmappdata, conceptId);
                            }

                        },
                        Cancel: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
//                                        

                        }
                    },
                    open: function () {
                        $(this).html(diamsg);
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
            }

        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}





function compareTxmnyGrids(compareId1, compareId2, masterGrid, selectType) {
    ajaxStart();
    var selectedqueryrowindexes = $('#' + compareId1).jqxGrid('selectedrowindexes');
    var selectedwebservicerowindexes = $('#' + compareId2).jqxGrid('selectedrowindexes');
    var selectedmasterrowindexes = $('#' + masterGrid).jqxGrid('selectedrowindexes');
    var lastIndex = selectedmasterrowindexes.last();
    selectedmasterrowindexes.clear();
    selectedmasterrowindexes.push(lastIndex);
    var selectedQueryRowsData = [];
    var selectedWebServiceRowsData = [];
    var masterGridRowData = [];
    selectedWebServiceRowsData.push($("#" + compareId2).jqxGrid('getrowdata', selectedwebservicerowindexes));
    selectedQueryRowsData.push($("#" + compareId1).jqxGrid('getrowdata', selectedqueryrowindexes));
    masterGridRowData.push($("#" + masterGrid).jqxGrid('getrowdata', selectedmasterrowindexes));
    console.log(JSON.stringify(masterGridRowData));
    var gridQuerydata = $("#" + compareId1).jqxGrid('getdatainformation');
    //var allrows = $("#" + compareId1).jqxGrid('selectallrows');
    var gridwebdata = $("#" + compareId2).jqxGrid('getdatainformation');
    //var gridMasterdata = $("#" + masterGrid).jqxGrid('getdatainformation');
    var queryDatarows = [];
    var webDatarows = [];
    for (var i = 0; i < gridQuerydata.rowscount; i++)
        queryDatarows.push($("#" + compareId1).jqxGrid('getrowdata', i));
    for (var j = 0; j < gridwebdata.rowscount; j++)
        webDatarows.push($("#" + compareId2).jqxGrid('getrowdata', j));
    console.log(JSON.stringify(webDatarows));
    var webDataLength = selectedwebservicerowindexes.length;
    var masterDataLength = selectedmasterrowindexes.length;
    console.log("webDataLength:::::" + webDataLength);
    var queryDataLength = gridQuerydata.rowscount;
    console.log("queryDataLength::::" + queryDataLength);

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "getCompareGridData",
        data: {
            CompareId1: compareId1,
            CompareId2: compareId2,
            WebRowsData: JSON.stringify(selectedWebServiceRowsData),
            QueryRowsData: JSON.stringify(queryDatarows),
            WebAllRows: JSON.stringify(webDatarows),
            MasterRowData: JSON.stringify(masterGridRowData),
            WebDataLength: webDataLength,
            masterDataLength: masterDataLength,
            SelectType: selectType

        },
        success: function (compObject) {
            ajaxStop();
            console.log('after ajax function::::' + compObject);
            retmsg = compObject;
            console.log('retmsg::::' + retmsg);
            var txmnyData = retmsg['txmnyList'];
            console.log('txmnyData::::' + txmnyData);
            var txmnyWebData = retmsg['txmnyWebList'];
            console.log('txmnyWebData::::' + txmnyWebData);
            if (txmnyWebData != null && txmnyWebData != '') {
                //compareGridsPopUp(diamsg); 
                var setWidth;
                $("#dialog1").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Compared Form'] != null ? labelObject['Compared Form'] : 'Compared Form'),
                    width: dialogWidthResize(txmnyWebData, setWidth),
                    height: 'auto',
                    minHeight: 'auto',
                    fluid: true,

                    buttons: {
                        Ok: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");

                        },
                        Cancel: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
//                                       

                        }
                    },
                    open: function () {
                        $(this).html(txmnyWebData);
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
            } else {
                var diamsg = retmsg['Message'];
                popupMessage(diamsg);
            }
        },
        error: function (e) {
            sessionTimeout(e);
        }
    });
}
function askConfirmationOnAction(gridResultObj) {
    var action = gridResultObj['action'];
    var value = sessionStorage.getItem('clusterImg');
    if (gridResultObj['action'] != undefined && gridResultObj['action'] == 'gridformInsert') {
        let dialogMessage = labelObject['Do you want to Create New User?'] != null ? labelObject['Do you want to Create New User?'] : '<div class="getActionImgMainDiv"><span id="getActionImg"></span><span>Do you want to Create New User?</span></div>';
        $("#dialog").html(dialogMessage);
        $("#getActionImg").html('<img src="' + value + '" width="40">');
    } else if (gridResultObj['action'] != undefined && gridResultObj['action'] == 'umupdate') {
        $("#dialog").html(labelObject['Do you want to Update selected record?'] != null ? labelObject['Do you want to Update selected record?'] : '<div class="getActionImgMainDiv"><span id="getActionImg"></span> <span>Do you want to Update selected record?<span/></div>');
        $("#getActionImg").html('<img src="' + value + '" width="40">');
    } else if (gridResultObj['action'] != undefined) {
        $("#dialog").html(labelObject['Do you want to ' + action + ' selected record?'] != null ? labelObject['Do you want to ' + action + ' selected record?'] : '<div class="getActionImgMainDiv"><span id="getActionImg"></span><span>Do you want to ' + action + ' selected record?<span></div>');
        $("#getActionImg").html('<img src="' + value + '" width="40">');
    }
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Confirmation Message'] != null ? labelObject['Confirmation Message'] : 'Confirmation Message'),
        modal: true,
        width: 350,
        height: 150,
        fluid: true,
        buttons: [{
                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    gridoperations(gridResultObj['gridId'], gridResultObj['action']);
                }
            }, {
                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                click: function () {

                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");


                }
            },
        ],
        open: function ()
        {
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
}
function congigureMasterChildGridData(componentId, componentType, relationid, masterid, selectedrowid, gridInitAppObj) {
    ajaxStart();
    if ($("#" + componentId).attr('data-fetched') != 'Y') {
        $("#" + componentId).unbind('rowselect');
        $("#" + componentId).unbind('rowclick');
        try {
            $("#" + componentId).jqxGrid("destroy");
        } catch (e) {

        }

//  $("#SM_CLASS_CONFIG_TAB").append("<div id='" + componentId + "'></div>");
        $("#level1TabId").append("<div id='" + componentId + "'></div>");
        $("#" + componentId).addClass("clusterChildClass");

        $("#" + componentId).addClass("VisionTaxonomyChildGridForm");
        if (gridInitAppObj['uuu_ChildRightGridResizeFlag'] == 'Y') {
            $("#" + componentId).addClass("VisionTaxonomyServiceCloud");
        }
        var selectedrowindexes = $('#' + masterid).jqxGrid('selectedrowindexes');
        var selectedRowsData = [];
        if (selectedrowindexes.length == 0) {
            selectedRowsData.push($("#" + masterid).jqxGrid('getrowdata', 0));
        } else {
//                            selectedRowsData.push($("#" + masterid).jqxGrid('getrowdata', currentSelectedRow));
            if (selectedrowid != null) {
                selectedRowsData.push($("#" + masterid).jqxGrid('getrowdata', selectedrowid));
            } else if (selectedrowid == null && selectedrowid == undefined && currentSelectedRow != null && currentSelectedRow != undefined) {
                selectedrowid = currentSelectedRow;
                console.log("currentSelectedRow value is:::" + currentSelectedRow);
                selectedRowsData.push($("#" + masterid).jqxGrid('getrowdata', selectedrowid));
            } else {
                selectedRowsData.push($("#" + masterid).jqxGrid('getrowdata', selectedrowindexes[0]));
            }
        }
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'JSON',
            cache: false,
            url: "getmasterDtlComponent",
            data: {
                COMP_ID: componentId,
                COMP_TYPE: componentType,
                relationid: relationid,
                firstRowData: JSON.stringify(selectedRowsData)

            },
            success: function (compObject) {
                ajaxStop();
                var gridInitAppObj = compObject['gridInitParamObj'];//gridInitParamObj
                var columnInitParamsObj = compObject['columnInitParamsObj'];
                var data = JSON.stringify(compObject.defaultValues);
                $("#defaultValues").val(data);
                $("#" + compObject.gridId + "_defaultValues").remove();
                $("#visionClusterSpliterMain").append("<input type='hidden' id='" + compObject.gridId + "_defaultValues' />");
                $("#" + compObject.gridId + "_defaultValues").val(data);

                var dropDownListData = compObject.dropDownListData;
                var listTypeColName = [];
                var listTypeColNameId = [];
                if (compObject.datafields != null && compObject.datafields != undefined && compObject.datafields != "") {
                    for (var i = 0; i < compObject.datafields.length; i++) {
                        if (typeof compObject.datafields[i].values != "undefined" && compObject.datafields[i].values != null) {
                            var listboxData = eval(compObject.datafields[i].values.source);
                            var dataFeildName = compObject.datafields[i].name;
                            // var dataFeildNameId=dataFeildName+"_ID";
                            if (dataFeildName.indexOf("_DLOV") > -1) {
                                listTypeColNameId.push(dataFeildName);
                            } else {
                                listTypeColName.push(dataFeildName);
                            }
                            var listboxSource =
                                    {
                                        datatype: "json",
                                        datafields: [
                                            {name: 'ListboxValue', type: 'string'},
                                            {name: 'id', type: 'string'}
                                        ],
                                        localdata: listboxData
                                    };
                            var listBoxAdapter = new $.jqx.dataAdapter(listboxSource);
                            //console.log("-------------LISTBOX ADAPTOR VALUES-------------------");
                            //console.log(JSON.stringify(listBoxAdapter));
                            compObject.datafields[i].values.source = listBoxAdapter.records;
                            //  compObject.datafields[i].width='100%';
                        }
                    }
                }


                $("#" + compObject.gridId).attr('data-master-id', masterid);
                $("#" + compObject.gridId).attr('data-table', compObject.tableName);
                var dataParams = {
                    COMP_ID: componentId,
                    COMP_TYPE: componentType,
                    relationid: relationid,
                    firstRowData: JSON.stringify(selectedRowsData),

                };



//                   Attachment code Start     

                if (selectedrowid == null) {
                    selectedrowid = $('#' + masterid).jqxGrid('getselectedrowindex');
                }
                if (gridInitAppObj != null && gridInitAppObj != undefined && gridInitAppObj != "") {
                    var attachGridViewFlag = gridInitAppObj['uuu_AttachGridView'];
                    $("#attachGridViewFlag").val(attachGridViewFlag);
                }


//                   Attachment code End            
                var source =
                        {
                            type: 'POST',
                            async: false,
                            datatype: "json",
                            datafields: compObject.datafields,
                            data: dataParams,
                            url: 'getDetailGridResults',
                            cache: false,
                            processdata: function (data) {
                                data.multiSortColsArray = ($("#" + compObject.gridId + "_sort_columns").val() != null
                                        ? $("#" + compObject.gridId + "_sort_columns").val() : "");
                            },
                            beforeSend: function (xhr) {
                                var csrfToken = $('meta[name="csrf-token"]').attr('content');
                                if (csrfToken) {
                                    xhr.setRequestHeader("X-XSRF-TOKEN", csrfToken);
                                } else {
                                    console.error("CSRF token not found!");
                                }
                            },
                            beforeprocessing: function (data) {
//                                            
                                var relationArray = data['relationArray'];
                                $("#relationArray").val(JSON.stringify(relationArray));

                                jsdata = JSON.stringify(data);
                                var attachData = data.attachData;
                                if (attachData != null) {
                                    var AttachEditableFlag = attachData.AttachEditableFlag;
                                    var attachVarriable = attachData.attachVarriableName;
                                    var attachTableName = attachData.attachTableName;

                                    if (attachGridViewFlag != 'Y' && AttachEditableFlag == 'Y')
//                                                if (AttachEditableFlag == 'Y')
                                    {
                                        fetchTableforAttachFile(componentId, attachVarriable, attachTableName);
                                    }
                                }


                                if (data != null && data.data != null && data.data[0] != null) {
                                    childOldData[componentId] = data.data[0];
                                    tableNames[componentId] = compObject.tableName;
                                    source.totalrecords = data.data[0].TotalRows;
                                } else {
                                    source.totalrecords = 0;
                                }
                            },
                            sort: function ()
                            {
                                $("#" + compObject.gridId + "_sort_columns").remove();
                                try {
                                    $("#" + compObject.gridId).jqxGrid('clearselection');
                                } catch (e) {
                                }
                                $("#" + compObject.gridId).jqxGrid('updatebounddata', 'sort');
                            },
                            filter: function () {
                                currentSelectedRow = -1;
                                try {
                                    $("#" + compObject.gridId).jqxGrid('clearselection');
                                } catch (e) {
                                }
                                $("#" + compObject.gridId).jqxGrid('updatebounddata', 'filter');
                            }


                        };
                try {
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    var gridConfigObj = {};
                    gridConfigObj = compObject.gridPropObj;
                    gridConfigObj.source = dataAdapter;
                    // gridConfigObj.autoheight = true;
                    gridConfigObj.width = '99.5%';
                    gridConfigObj.columns = compObject.columns;
                    gridConfigObj.rendergridrows = function (obj) {
                        return obj.data;
                    };
                } catch (e) {

                }




                var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                    //var cellValue = $("#" + childGridId).jqxGrid('getcellvalue', row, columnfield);
                    var cellValue = $("#" + componentId).jqxGrid('getcellvalue', row, columnfield);
                    var viewType = "GRID-VIEW";
                    var editable = gridConfigObj.editable;
                    if (columnInitParamsObj != null && columnInitParamsObj != '' && columnInitParamsObj != undefined)
                    {
                        var columnParams = columnInitParamsObj[columnfield];
                        if (columnParams != null && columnParams != '' && columnParams != undefined) {
                            var editableFlag = columnParams['uuu_editable'];
                            var hiddenType = $('#' + componentId).jqxGrid('getcellvalue', row, componentId + "_HIDDEN");
                        }
                    }
                    if (editable) {
                        if (editableFlag != null && editableFlag != '' && editableFlag == "N")
                        {
                            if (hiddenType != null && hiddenType != '' && hiddenType != undefined && hiddenType != "INSERT") {
                                var ddwData = compObject.dropDowndData;
                                var ddwObj = ddwData[columnfield];
                                var dependencyparams = ddwObj.dependencyparams;
                                return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                            } else
                            {
                                var ddwData = compObject.dropDowndData;
                                var ddwObj = ddwData[columnfield];
                                var dependencyparams = ddwObj.dependencyparams;
                                //return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
                                return "<div  style='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' id='dd" + componentId + columnfield + "' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                            }
                        } else
                        {
                            var ddwData = compObject.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            //return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
                            return "<div  style='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + componentId + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                        }
//                                    var ddwData = compObject.dropDowndData;
//                                    var ddwObj = ddwData[columnfield];
//                                    var dependencyparams = ddwObj.dependencyparams;
//                                    //return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
//                                    return "<div  style='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                    } else
                    {
                        var ddwData = compObject.dropDowndData;
                        var ddwObj = ddwData[columnfield];
                        var dependencyparams = ddwObj.dependencyparams;
                        return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                    }

                };
                var headerTooltipRenderer = function (element) {
                    $(element).parent().jqxTooltip({position: 'mouse', theme: 'bootstrap',
                        position: 'bottom-right',
                        showArrow: false, content: $(element).text()});
                }
                var attachmentImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {

                    if (value != "" && value != null) {

                        return  "<img title='Click to view the attachment' style='cursor:pointer;' onclick=viewAttachment('" + componentId + "'," + row + ")  src='" + value + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";

                    } else {
                        return "<div class='visionCoFileImage'>"
                                + "<input name='colFileImage' type='file' id ='visionColFileId' style ='display:none'/>"
                                + "<img src='images/attach_pin_icon_blue.png' onclick=showBrowseIdButton('" + componentId + "') style='cursor:pointer;margin-left: 30%;'/>"
                                + "</div>";

                    }
                };
                var col = compObject.columns;
                if (col != null && col != undefined && col != "") {
                    for (var i = 0; i < col.length; i++) {
                        if (col[i].cellsrenderer != null) {
                            col[i].cellsrenderer = eval('(' + col[i].cellsrenderer + ')');
                        }
                        if (col[i].createeditor != null) {
                            col[i].createeditor = eval('(' + col[i].createeditor + ')');
                        }
                        if (col[i].initeditor != null) {
                            col[i].initeditor = eval('(' + col[i].initeditor + ')');
                        }
                        if (col[i].geteditorvalue != null) {
                            col[i].geteditorvalue = eval('(' + col[i].geteditorvalue + ')');
                        }
                        if (col[i].cellbeginedit != null) {
                            col[i].cellbeginedit = eval('(' + col[i].cellbeginedit + ')');
                        }
                        if (col[i].rendered != null) {
                            col[i].rendered = eval('(' + col[i].rendered + ')');
                        }
                    }
                }
                try {
                    var renderToolbar = gridConfigObj.renderToolbar;
                    data = source.data;
                    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');
                } catch (e) {

                }

                try {
                    $("#" + compObject.gridId).jqxGrid(gridConfigObj);
                    $("#" + compObject.gridId).attr('data-fetched', 'Y');
                    currentselectedGrid = "#" + compObject.gridId;
                    var checkBoxFlag = false;
                    $("#" + compObject.gridId).on('cellvaluechanged', function (event)
                    {

                        // ravi start
                        var contentTabId = $("#" + compObject.gridId).closest("[id^=level]").attr("id");
                        if (contentTabId == "level1TabId") {
                            childChangeflag = true;
                            var gridCount = $("#level1TabId").find(".jqx-grid").length;
                            if (gridCount > 1) {
                                var childGrids = $("#level1TabId").find(".jqx-grid");
                                var childGrid1 = childGrids[0].id;
                                var childGrid2 = childGrids[1].id;
                                if (componentId == childGrid1) {
                                    childGrid1Changeflag = true;
                                } else if (componentId == childGrid2) {
                                    childGrid2Changeflag = true;
                                }
                            }

                            //changeflag = true;
                        } else {
                            changeflag = true;
                        }
                        // ravi end

                        if (checkBoxFlag)
                        {
                            checkBoxFlag = false;
                            $("#" + compObject.gridId).jqxGrid('setcellvalue', event.args.rowindex, event.args.datafield, event.args.oldvalue);
                        }
                    });
                    // ravi start
                    var fieldVal;
                    // ravi end
                    $("#" + compObject.gridId).on('cellbeginedit', function (event) {
                        // ravi start
                        currentClickedGridId = compObject.gridId;
                        cellOldValue = $('#' + compObject.gridId).jqxGrid('getcelltext', event.args.rowindex, event.args.datafield);

                        try {
                            if (event.args.columntype == "dropdownlist")
                            {
                                fieldVal = event.args.row[event.args.datafield.replace("_DLOV", "")];
                            }
                        } catch (e) {
                        }


                        // ravi end
                        var boundIndex = event.args.rowindex;
                        $('#' + compObject.gridId).jqxGrid({selectedrowindex: boundIndex});
                        if (componentType == 'MDL' || componentType == 'CMPR') {
                            fetchTabsData(compObject.gridId, boundIndex);
                        }
                        var columnType = event.args.columntype;
                        var dataField = event.args.datafield;
                        var rowBoundIndex = event.args.rowindex;
                        if (columnInitParamsObj != null && columnInitParamsObj != '' && columnInitParamsObj != undefined)
                        {
                            var columnParams;
                            if (columnType == 'dropdownlist')
                            {
                                columnParams = columnInitParamsObj[dataField.replace("_DLOV", "")];
                            } else
                            {
                                columnParams = columnInitParamsObj[dataField];
                            }
                            if (columnParams != null && columnParams != '' && columnParams != undefined) {
                                var editable = columnParams['uuu_editable'];
                                if (editable != null && editable != '' && editable == "N")
                                {
                                    var hiddenType = $('#' + compObject.gridId).jqxGrid('getcellvalue', rowBoundIndex, compObject.gridId + "_HIDDEN");
                                    if (hiddenType != null && hiddenType != '' && hiddenType != undefined && hiddenType != "INSERT") {
                                        $("#" + compObject.gridId).jqxGrid('endcelledit', rowBoundIndex, dataField, true);
                                        if (columnType == "checkbox")
                                        {
                                            checkBoxFlag = true;
                                        }
                                    }
                                }
                            }
                        }
                        $('#' + compObject.gridId).jqxGrid({selectedrowindex: boundIndex});
                    });
                    // for commit automatically when select the value from Select Box in grid value
                    $("#" + compObject.gridId).on('change', function (event) {

                        var args = event.args;
                        var currentTarget = event.currentTarget;
                        var currentDataField = currentTarget.dataset.lastEdField;
                        var currentRowIndex = currentTarget.dataset.lastEdRow;

                        console.log("Select Changed ");
                        if (args != null && args != '' && args.item != null && args.item != '' && fieldVal != args.item.label) {
                            $("#" + compObject.gridId).jqxGrid('endcelledit', currentRowIndex, currentDataField, false);
                        }
//                                if (currentDataField != null && currentDataField != '' && currentDataField.indexOf("_DLOV") > -1) {
//                                    $("#" + compObject.gridId).jqxGrid('endcelledit', currentRowIndex, currentDataField, false);
//                                }

                    });
                    $('#' + compObject.gridId).on('celldoubleclick', function (event) {
                        var args = event.args;
                        var dataField = args.datafield;
                        var dataField1 = args.text;
                        var rowIndex = args.rowindex;
                        var cellValue = args.value;
                        var column = $('#' + compObject.gridId).jqxGrid('getcolumn', event.args.datafield).text;
                        popupedit(column, cellValue);
                    });
                } catch (e) {

                }

                //if (componentType == 'MDL') {
//                            $("#" + compObject.gridId).on('rowclick', function (event) {
//                                var args = event.args;
//                                // row's bound index.
//                                var boundIndex = args.rowindex;
//                                $("#" + compObject.gridId).jqxGrid('clearselection');
//                                $('#' + compObject.gridId).jqxGrid({selectedrowindex: boundIndex});
//                                //  if (componentType == 'MDL') {
//                                $('#' + compObject.gridId).attr('data-fetched', 'N');
//                                if (gridInitAppObj['uuu_MasterChildFlag'] == 'Y') {
//                                    $('#' + masterChildGrid).attr('data-fetched', 'N');
//                                        masterRowChildData.push($("#" + compObject.gridId).jqxGrid('getrowdata', boundIndex));
//                                    congigureChildGridData(masterChildGrid, "GRID", gridInitAppObj['relationId'], compObject.gridId, boundIndex);
//                                }
//                                //fetchTabsData(compObject.gridId, boundIndex);
//                                //}
//                            });
            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    }
    //else {
//                    var persData = $("#" + componentId).attr("persData");
//                    settingsPanelData(componentType, persData);
//                }
}




