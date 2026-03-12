/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var selectedColumnData;
var allGridColumns = {};
var currentCellDataField;
var currentRowIndex;
var currentColumnindex;
function treeConfig(treeObj) {
    //$("#treeGridDiv").hide();
    if (treeObj != null) {
        $('#firstDxpSplitterTree').jqxSplitter({width: '100%',
            height: '709px',
            orientation: 'vertical',
            panels: [{size: '20%', min: 150, resizable: true}, {size: '20%', min: 150, resizable: true}]});
//                 $('#secondDxpSplitter').jqxSplitter({width: '100%',
//                height:'709px',
//                orientation: 'vertical',              
//                panels: [{size: '20%', min: 150, resizable: true}, {size: '20%', min: 150, resizable: true}]});
    }

    $("#jqxExpander").jqxPanel({width: '100%', height: '100%'});
//    $("#jqxExpander1").jqxPanel({width: '100%', height: '100%'});
//        $('#jqxExpander').jqxExpander({showArrow: true, theme: 'energyblue', toggleMode: 'none', width: '100%', height: '100%'});
    var treeConfigObj = treeObj['treeConfigObj'];
    var treeInitParamObj = treeObj['treeInitParamObj'];
    var columnsObj = treeObj['treeColumnObj'];
    treeConfigObj.height = parseInt("550px");
    $('#jqxTree').jqxTree(treeConfigObj);
    $("#jqxTree").jqxTree('focus');
    $("#panelContentpaneljqxTree").hide();
    $('#jqxTree').on('expand', function (event) {
        var parentItem = $('#jqxTree').jqxTree('getItem', event.args.element);
        var level = parentItem.level;
        var $element = $(event.args.element);
        var loader = false;
        var loaderItem = null;
        var children = $element.find('ul:first').children();
        // var children = $element.find('ul:first').children();
        $.each(children, function () {
            var item = $('#jqxTree').jqxTree('getItem', this);
            if (item && item.value == 'ajax') {
                loaderItem = item;
                loader = true;
                return false
            }
            ;
        });
        if (loaderItem != null) {
            var extTreeParams = $("#extTreeParams").val();
            $('#jqxTree').jqxTree('removeItem', loaderItem.element);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getTreeDataOpt",
                cache: false,
                data: {
                    parentkey: parentItem.value,
                    treeId: treeObj['treeId'],
                    level: parentItem.level,
                    extTreeParams: extTreeParams,
                    columnsObj: JSON.stringify(columnsObj)
                },
                success: function (data, status, xhr) {
//                            var items = jQuery.parseJSON(data);
                    $('#jqxTree').jqxTree('addTo', data, $element[0]);
                    var items = $('#jqxTree').jqxTree('getItems');

                    $.each(items, function () {
                        $(this.titleElement).attr('title', this.label);
                        $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                    });
                    if (parentItem != null)
                    {
                        var parentItemEle = event.args.element;
                        for (var p = level; p >= 0; p--)
                        {
                            //var parentItemId = $('#' + treeId).jqxTree('getItem', parentItemEle);
                            var parentItemId = $('#jqxTree').jqxTree('getItem', parentItemEle);
                            //var parentItemId = parentItem.id;
                            if (parentItemId != null)
                            {
                                // var divItemId = parentItemId;
                                var divItemId = parentItemId.titleElement[0];
                                $("#" + divItemId.id).addClass('visionETLParentHighight');
                            }
                            parentItemEle = parentItemEle.parentElement.parentElement;
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



    });
    $('#jqxTreeDivLevel1').on('select', function (event)
    {
        var args = event.args;
        var item = $('#jqxTree').jqxTree('getItem', args.element);
        var label = item.label;
        var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
        var level = item['level'];
        var level = item['level'];
        var selectedValue = item['value'];
        if (level != null && level != '' && level != '0') {
            level = parseInt(level) - 1;
        }
        var selectedColumnObj = columnsObj[level];
        // selectedColumnObj.removeAttr("FLD_NAME");
        selectedColumnObj.FLD_NAME = level;

        if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
            console.log(JSON.stringify(selectedColumnObj) + ":::::" + selectedValue);
            var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
            if (selectedColumnObj['FOLLOWUP_COMP_ID'] != null
                    && selectedColumnObj['FOLLOWUP_COMP_ID'] != ''
                    && compType != null && compType != '') {
//                    $('#treeSplitter').jqxSplitter({
//                        panels: [{size: '20%', min: 150, resizable: true}, {size: '80%', min: 150, resizable: true}]
//                    });
                if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                    var clusterDiv = '<div id="clusterSplitter">'
                            + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                            + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                            + '</div>';
                    $("#treeGridDiv").html(clusterDiv);
                    fetchCluster(selectedColumnObj, selectedValue, level);
                } else if (compType == 'TREE') {
                    var childTreeDiv = ' <div id="jqxChildExpander">'
                            + ' <div id="expanderChildDesc" class="visionTreeDescription"></div>'
                            + ' <div style="border: none;" id="jqxChildTreeDropdown" class="visionTreeDropDown" ></div>'
                            + ' <div style="overflow: hidden;" id="jqxChildTreeDiv">'
                            + '<div style="border: none;" id="jqxChildTree"></div>'
                            + '</div>'
                            + '</div>';
                    $("#treeGridDiv").html(childTreeDiv);
                    fetchChildTree('jqxTree', selectedColumnObj, selectedValue, level);
                } else if (compType == 'GRID') {
                    var gridid = "DXP_SEARCH_VIEW";
                    fetchDxpGrid(selectedColumnObj, gridid, selectedValue);

                }
            }

        }



    });
}

function fetchDxpGrid(selectedColumnObj, gridid, selectedValue) {

    console.log("testing");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getCloudGrid",
        cache: false,
        data: {
            gridId: gridid,
            roleId: $("#rolehid").val(),
        },
        success: function (response) {
            console.log("response:::" + response);
            if (response != null && response != '') {
                //  var gridResultObj = JSON.parse(response);
                var paramObj = {};

                paramObj.column = selectedColumnObj['FLD_NAME'];
                paramObj.value = selectedValue;
                paramObj.operator = "EQUALS";
                paramObj.symbol = "Euqals";

                gridNewConfig(response, "", paramObj, gridid);
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });

}

function gridNewConfig(gridResultObj, selectedGridIndex, paramObj, selectedGridId) {

    showLoader();

    // ravi start 
    globalTabId = gridResultObj['gridId'];
    // ravi end 
    console.log(":293::gridConfig::");
    var parentDiv;
    if (gridResultObj['gridId'] == "MM_REFERENCE") {
        parentDiv = "refernceDataTabContent";
    } else if (gridResultObj['gridId'] == "MM_MASTER_O_RECORD_CHAR") {
        parentDiv = "charDataTabContent";
    } else if (gridResultObj['gridId'] == "DXP_UNIFICATION_PORTAL_GRID") {
        parentDiv = "treeGridDiv";
    } else {
        parentDiv = "treeGridDiv"
        var dxpAdavanceSearchOptions = $('#dxpAdavanceSearchOptions').val();
        if (dxpAdavanceSearchOptions != null && dxpAdavanceSearchOptions != undefined
                && dxpAdavanceSearchOptions != '' && dxpAdavanceSearchOptions == 'C') {
//            gridResultObj['gridId'] = "DXP_CATEGORY_SEARCH_VIEW";
            gridResultObj['gridId'] = selectedGridId;
        }

    }
    $("#" + parentDiv).html("<div id='" + gridResultObj['gridId'] + "'></div>");

    try {
        // if(true) {
        try {
            $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'cells');
            $('#' + gridResultObj['gridId']).jqxGrid('clearfilters');
        } catch (e) {

        }

        // $('#' + gridResultObj['gridId']).jqxGrid('destroy');
        alert(subTabId + "::::" + $("#" + gridResultObj['gridId']).length);
        // ravi end
        if (gridResultObj != null) {
            //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
            var hrefObj = {}; //hrefObj
            hrefObj = gridResultObj['hrefObj'];
            $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
            $("#linkedColumns").val(hrefObj['linkedColumns']);
            $("#stripValue").val(hrefObj['stripValue']);
            $("#imageColumn").val(hrefObj['imageColumn']);
            $("#imageTable").val(hrefObj['imageTable']);
            $("#imageTableColumn").val(hrefObj['imageTableColumn']);
            $("#defaultValues").val(gridResultObj['defaultValues']);

            var gridInitParamObj = {}; //gridInitParamObj
            gridInitParamObj = gridResultObj['gridInitParamObj'];

            if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                $("#" + gridResultObj['gridId']).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
            }
            if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                $("#" + gridResultObj['gridId']).attr("data-gridResultObj", JSON.stringify(gridResultObj));
            }
            $("#processClassAndMethod").val(gridInitParamObj['uuu_processClassAndMethod'] != null ? gridInitParamObj['uuu_processClassAndMethod'] : "");
            var batchInd = gridInitParamObj["uuu_BatchInd"];
            $("#massColumnHide").val(gridInitParamObj['massColumnHide']);
            $("#massValidateComment").val(gridInitParamObj['uuu_ValidateComment']);
            $("#batchIndicator").val(batchInd);
            var tableName = gridResultObj['tableName'];
            $("#tableName").val(tableName);
            var barCodeColumnName = gridInitParamObj['uuu_BarCodeColumn'];
            $("#barCodeColumnName").val(barCodeColumnName);

            if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
            }

            var columnInitParamObj = {};
            columnInitParamObj = gridResultObj['columnInitParamsObj'];
            $("#columnInitParams").val(JSON.stringify(columnInitParamObj));

            var dropDownListData = gridResultObj.dropDownListData;

            //  alert("hrefObj:::::"+JSON.stringify(hrefObj));
            if (gridResultObj != null && gridResultObj.datafields) {

//                                var imagerenderer = function (row, datafield, value) {
//
//                                    return '<img src="" id="ind' + row + '" class="indimage"><label id="imgLabel' + row + '" class="indimage">Show Image</label>';
//                                };
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
                    $(element).parent().jqxTooltip({position: 'mouse',
                        position: 'bottom-right',
                        showArrow: false, content: $(element).text()});
                }

                var dataSheetRendered = function (element) {

                    // $(element).html("<div class='show_detail' ></div>");
                    $(element).addClass("show_detail");
                    $(element).parent().jqxTooltip({position: 'mouse',
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
                var urlRender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var element = $(defaulthtml);
                            element.attr("onclick", "openURLInTab('" + value + "')");
                            element.addClass("visionSearchUrlLink");
                            return element[0].outerHTML;

                        };
                var buttonRanderer
                        = function (row, columnfield, value, defaulthtml, columnproperties) {
                            return "<button onclick=suggestedVendorsList('" + gridResultObj['gridId'] + "','" + row + "') style='width: 120px;'>Suggested Vendors</button><button onclick=vendorsList('" + gridResultObj['gridId'] + "','" + row + "') style='width: 120px;'>Vendors List</button>";
                        };
                var imageRender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            if (value != "" && value != null)
                            {
                                return  "<img  title='View the attachment Logo' style='cursor:pointer;'"
                                        + " src='" + value + "' class='imageStyle'  id='dtlul_" + row + "'" + "'"
                                        + " onmouseover=imageMouseHover('dtlul_" + row + "') onmouseout=imageMouseOut() >";
                            }
                        };
                var descoptrender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var element = $(defaulthtml);
                            element.addClass('visionSearchWrapDescrDiv');
                            var gridRowHeight = $('#' + gridResultObj['gridId']).jqxGrid('rowsheight');
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
//                                            element.css('overflow', 'scroll');
                            return element[0].outerHTML;
                        };
                var replaceRenderer
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
                var xmlRenderer
                        = function (row, columnfield, value, defaulthtml, columnproperties) {
                            console.log("xmlRenderer::");
                            if (value != "" && value != null)
                            {
                                return  "<img src ='images/xml_icon.png' style='cursor:pointer; width: 20px; height: 20px;position: fixed; title='Click to view the Payload' style='cursor:pointer;' onclick=viewXml('" + gridResultObj['gridId'] + "','" + row + "','" + columnfield + "','" + gridResultObj['tableName'] + "')  class='imageStyle visionTemplete'  id='xmldtlul_" + row + "' >";
                            }
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
                var documentRanderer
                        = function (row, columnfield, value, defaulthtml, columnproperties) {
                            //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                            console.log("hiiiii");
                            return '<div onclick=viewDocument("' + value + '") style="cursor:pointer;">View Document</div>';
                        };

                var editable = gridPropObj.editable;
                var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var cellValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, columnfield);
                    var viewType = "GRID-VIEW";
                    var ddwData = gridResultObj.dropDowndData;
                    var ddwObj = ddwData[columnfield];
                    var dependencyparams = ddwObj.dependencyparams;
                    if (editable) {
                        //    return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/search_icon_color_2.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                        return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' id='dd" + gridResultObj['gridId'] + columnfield + "' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                    } else
                    {
                        return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
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



                //   gridPropObj.rendergridrows=function(obj) {return obj.data;};   
                // for work flow start
                if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {

                    gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
                }

                var paramArray = [];
//
//                paramObj['value'] = gridResultObj['className'];
//                paramObj['column'] = 'TERM';
//                paramObj['operator'] = 'LIKE';
                paramArray.push(paramObj);

                var subTabId = "jqxTabs";
                console.log("before dataFeilds" + JSON.stringify(dataFeilds));
                var data = {
                    gridId: gridResultObj['gridId'],
                    colsArray: JSON.stringify(gridResultObj['colsArray']),
                    tableName: gridResultObj['tableName'],
                    paramArray: JSON.stringify(paramArray),
                    gridInitParamObj: JSON.stringify(gridInitParamObj),
                    columnInitParamObj: JSON.stringify(columnInitParamObj),
                    processClassAndMethod: $("#processClassAndMethod").val()

                };
                var source =
                        {
                            type: 'POST',
//                                                async: false,
                            datatype: "json",
                            datafields: dataFeilds,
                            data: data,
                            url: 'cloudGridResults',
                            cache: false,
                            root: 'Rows',
                            processdata: function (data) {
                                data.multiSortColsArray = ($("#" + gridResultObj['gridId'] + "_sort_columns").val() != null
                                        ? $("#" + gridResultObj['gridId'] + "_sort_columns").val() : "");
                                if (gridInitParamObj != null
                                        && !jQuery.isEmptyObject(gridInitParamObj)
                                        && gridInitParamObj['uuu_FilterGridFormPopup'] == 'Y') {//
                                    data.paramArray = ($("#" + gridResultObj['gridId'] + "_filter_columns").val() != null
                                            ? $("#" + gridResultObj['gridId'] + "_filter_columns").val() : "");
                                }
                                var crmresult = $("#crmresult").val();
                                if (crmresult != null && crmresult != '') {
                                    var columnName = $("#crmresult").attr("data-search-columnname");
                                    var crmParamArray = [];
                                    if (data.paramArray != null && data.paramArray != '') {
                                        crmParamArray = JSON.parse(data.paramArray);
                                    }
                                    var crpParamObj = {};
                                    crpParamObj['value'] = crmresult;
                                    crpParamObj['column'] = columnName;
                                    crpParamObj['operator'] = 'LIKE';
                                    crpParamObj['rangeFlag'] = 'N'
                                    crpParamObj['minvalue'] = "";
                                    crpParamObj['maxvalue'] = "";
                                    crmParamArray.push(crpParamObj);
                                    if (crmParamArray != null && crmParamArray.length != 0) {
                                        data.paramArray = JSON.stringify(crmParamArray);
                                    }

                                }
                            },
                            beforeSend: function (xhr) {                             xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                showLoader();
                            }, loadError: function (xhr, status, error) {
                                stopLoader();
                                // throw new Error(error);
                            }, loadComplete: function (data)
                            {
                                stopLoader();
                            },
                            beforeprocessing: function (data) {
                                //showLoader();//1
//                                                    try{
//                                                     $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
//                                                 }
//                                                 catch(e){}

                                //   alert("beforeprocessing::::" + JSON.stringify(data));
                                if (data[0] != null) {
                                    //  alert(data.JSONObjectList[0].TotalRows);
                                    source.totalrecords = data[0].TotalRows;
                                    $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
//                                                        $("#excelExport").removeAttr("disabled");
                                    $("#drop" + gridResultObj['gridId']).removeAttr("disabled");
                                    $("#drop" + gridResultObj['gridId']).removeAttr("opacity");
                                    $("#export" + gridResultObj['gridId']).removeAttr("disabled");
                                    $("#export" + gridResultObj['gridId']).removeAttr("opacity");

//                                                        $("#drop").attr("disabled", false);
                                    // $("#export").attr("disabled", false);
//                                                        $("#export").attr("disabled", false);
                                    console.log("data[0] != null:::: $(\"#drop\").attr(\"disabled\":::::" + $("#drop" + gridResultObj['gridId']).attr("disabled"));
                                    console.log("data[0] != null::: $(\"#export\").attr(\"disabled\":::::" + $("#export" + gridResultObj['gridId']).attr("disabled"));
                                } else {

                                    source.totalrecords = 0;
                                    $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
                                    $("#approvebutt" + gridResultObj['gridId']).attr("disabled", true);
                                    $("#drop" + gridResultObj['gridId']).attr("disabled", true);
                                    $("#drop" + gridResultObj['gridId']).css("opacity", "0.5");
                                    $("#export" + gridResultObj['gridId']).attr("disabled", true);
                                    $("#export" + gridResultObj['gridId']).css("opacity", "0.5");
                                }

//                                        var selectedItemTitle = $('#cloudTabs').jqxTabs('getTitleAt', $('#cloudTabs').jqxTabs('selectedItem'));
                                try {
//                                                    $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                } catch (e) {
                                }


                                stopLoader();
                            },
                            sort: function ()
                            {
//                                                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
                                $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'sort');
                                try {
                                    $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                } catch (e) {
                                }
                                stopLoader();
                            },
                            filter: function () {

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
                // var hideToolBar = gridInitParamObj['hideToolBar'];
//                                var srsRegiterButton = gridInitParamObj['srsRegisterFlag'];
                if ((srsRegiterButton != null && srsRegiterButton != undefined && srsRegiterButton == 'Y')
                        || (hideToolBar != null && hideToolBar != undefined && hideToolBar == 'Y'))
                {
                    gridPropObj.showtoolbar = true;
                    console.log("iam in if condition in toolbar 846" + srsRegiterButton);
                } else
                {
                    gridPropObj.showtoolbar = false;
                    console.log("iam in else condition in toolbar 852" + srsRegiterButton);
                }
                // gridPropObj.showtoolbar = false;
                gridPropObj.rowdetails = true;
                gridPropObj.rendergridrows = function () {
                    return dataAdapter.records;
                };

                $("#submitDropdown" + gridResultObj['gridId']).html(gridResultObj['buttonObj']);
                $("#exportDropdown" + gridResultObj['gridId']).html(gridResultObj['gridOperation']);
                gridPropObj.rowdetails = false;
                alert("Before Grid");
                //subTabId

                if (editable)
                {
                    $('#gridRefreshButton').hide();
//                                        $('div#submitDropdown > img').remove();
                }


                $("#currentGridpageNum").val(0);

                $('#' + gridResultObj['gridId']).jqxGrid(gridPropObj);
                $('#' + gridResultObj['gridId']).on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                    var panelId = $("#panelId").val();
                    console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);
                    navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
                    // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);
                });
                $('#searchResults').on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                    var panelId = $("#panelId").val();
                    console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);
                    navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
                    // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);
                });
                $('#' + gridResultObj['gridId']).on('celldoubleclick', function (event) {
                    var args = event.args;
                    var dataField = args.datafield;
                    var dataField1 = args.text;
                    var rowIndex = args.rowindex;
                    var cellValue = args.value;
                    var column = $('#' + gridResultObj['gridId']).jqxGrid('getcolumn', event.args.datafield).text;
                    popupedit(column, cellValue);
                });
                $("#" + gridResultObj['gridId']).on('cellbeginedit', function (event) {
                    var args = event.args;
                    var columntype = args.columntype
                    var dataField = args.datafield;
                    var columnindex = args.columnindex;
                    var rowBoundIndex = args.rowindex;
                    var cellValue = args.value;
                    currentDataField = dataField;
                    currentRowIndex = rowBoundIndex;
                    currentColumnindex = columnindex;

                });
                $('#' + gridResultObj['gridId']).on('rowunselect', function (event) {
//                                    showSelectedRows(gridResultObj['gridId'],null,gridInitParamObj['uuu_GridNtfnFlag']);
                });
                $('#' + gridResultObj['gridId']).on('rowselect', function (event) {
//                                    showSelectedRows(gridResultObj['gridId'], event.args.rowindex,gridInitParamObj['uuu_GridNtfnFlag']);
                });

                $('#' + gridResultObj['gridId']).on("pagechanged", function (event) {
                    var oldPageNum = $("#currentGridpageNum").val();
                    console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                    // event arguments.
                    var args = event.args;
                    // page number.
                    var pagenum = args.pagenum;
                    // page size.
                    var pagesize = args.pagesize;
                    if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                        var selectedrowindexes = $('#' + gridResultObj['gridId']).jqxGrid('selectedrowindexes');
//                                        console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
                        try {
                            if (selectedrowindexes != null
                                    && selectedrowindexes.length != 0
                                    && selectedrowindexes[0] != -1) {
                                $('#' + gridResultObj['gridId']).jqxGrid('clearselection');
                            }

                        } catch (e) {
                        }
                    }
                    $("#currentGridpageNum").val(event.args.pagenum);
                });
                $('#' + gridResultObj['gridId']).on("pagesizechanged", function (event) {
                    console.log("::pagesizechanged:::" + event.args.pagenum);
                    $("#currentGridpageNum").val(0);
                });


                //  
                alert("604 Grid");
                $(window).resize(function () {
                    var windowWidth = $(this).width();
                    if (windowWidth <= 415)
                    {
                        $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 70});
                    } else if (windowWidth >= 416 && windowWidth <= 500)
                    {
                        $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 40});
                    } else
                    {
                        $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 30});
                        $('#' + gridResultObj['gridId']).jqxGrid({scrollbarsize: 8});
                    }
                }).resize();
                $('#' + gridResultObj['gridId']).parent().css("padding-top", "3px", "important");
                $('#' + gridResultObj['gridId']).parent().css("padding-bottom", "3px", "important");
                //   $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', false);
                if ((srsRegiterButton != null && srsRegiterButton != undefined && srsRegiterButton == 'Y')
                        || (hideToolBar != null && hideToolBar != undefined && hideToolBar == 'Y'))

                {
                    $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', true);
                    console.log("iam in if grid condition in toolbar 1016" + srsRegiterButton);
                } else
                {
                    $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', false);
                    console.log("iam in else grid condition in toolbar 1021" + srsRegiterButton);
                }
                //   stopLoader(); /* for loader we commented by RGA */
                alert("683 Grid");
            }// end if(gridPropObj != null)

        }
        //  }

    } catch (e) {
        stopLoader();
    }
    stopLoader();

}// end of function gridConfig(-)


function fetchCluster(selectedColumnObj, selectedValue, level) {
    showLoader();
    var pageHeight = $(".visionHeader").height() + $(".visionFooterMain").height() + $(".visionBreadcrumMain").height();
    var splitterHeight = (parseInt($(window).height()) - parseInt(pageHeight));
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getTreeClusterForm",
//        url: "getDxpTreeClusterForm",
        cache: false,
        data: {
            parentkey: selectedValue,
            level: level,
            clusterId: selectedColumnObj['FOLLOWUP_COMP_ID']
        },
        success: function (masterObject, status, xhr) {
            if (masterObject != null) {
                $("#treeGridDiv").show();
                $("#treeGridDescription").html(selectedColumnObj['FOLLOWOP_COMP_DESCR']);
                $("#levelTabId").html(masterObject['tabString']);
                var masterId = masterObject['masterId'];
                var theme = "ui-redmond";
                $('#' + masterId + '_TAB').jqxTabs({height: '100%', width: '100%', position: 'top',
                    theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
                    , scrollPosition: 'both'});
                var paramArray = [];
                var paramObj = {};
                paramObj.column = selectedColumnObj['FLD_NAME'];
                paramObj.value = selectedValue;
                paramObj.operator = "LIKE";
                paramObj.symbol = "LIKE";
                paramObj.rangeFlag = "N";
                paramObj.minvalue = "";
                paramObj.maxvalue = "";
                paramArray.push(paramObj);
                if (masterObject['compType'] != 'FILTER_GRID') {
                    var masterGridObj = masterObject['masterGridObj'];
                    $("#levelTabId").removeClass("visionMasterDetailPanelTopACC");
                    if (masterObject['compType'] == 'ANALYTIC') {//compId
                        chartsData(masterObject['compId'], masterObject['compId'], "Y");
                    } else {
                        clusterGridConfig(masterGridObj, masterGridObj['gridId'], masterId, masterObject['compType'], "Y", paramArray);
                    }

                } else {
                    $("#" + masterObject['compId'] + "_ACCORDIAN").accordion({
                        theme: 'energyblue',
                        collapsible: true,
                        heightStyle: "content",
                        active: false,
                        autoHeight: false

                    });
                    $("#" + masterObject['compId'] + "_ACCORDIAN  h3").bind('click', function () {
                        var self = this;
                        setTimeout(function () {
                            var theOffset = $(self).offset();
                            $('body,html').animate({scrollTop: theOffset.top - 40});
                        }, 310); // ensure the collapse animation is done
                    });
                    getClusterFilterGridForm(masterObject['compId'], masterId + '_TAB', 0);
                    $("#" + masterObject['compId'] + "_ACCORDIAN").accordion({active: 0});
                    $("#levelTabId").addClass("visionMasterDetailPanelTopACC");
                    stopLoader();
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
function getSelectedTree() {
    showLoader();
    var extTreeParams = $("#extTreeParams").val();
    var treeSelectBox = $("#treeSelectBox").val();
    $("#intellisenseTree").empty();
    $("#treeSearchResult").val('');
    $("#intellisenseTree").html("");
    $("#jqxTreeDiv").show();
    $(".clear_searchField").hide();
    if (treeSelectBox != null && treeSelectBox != "" && treeSelectBox != undefined && treeSelectBox == 'SELECT') {
        $("#panelContentpaneljqxTree").hide();
        Break;
    }
    clearTextSearch();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getSelectedTree",
        cache: false,
        data: {
            treeId: $("#treeSelectBox").val(),
            extTreeParams: extTreeParams
        },
        success: function (treeObject, status, xhr) {
            if (treeObject != null && !jQuery.isEmptyObject(treeObject)) {
                $("#expanderDesc").html(treeObject['treeDesc']);//treeDesc
                var extTreeParams = {};
                extTreeParams = treeObject['extTreeParams'];
                $("#selectedFldValue").val((treeObject['treeColumnObj'])[0]['HL_FLD_NAME']);
                selectedColumnData = (treeObject['treeColumnObj'])[0];
                if (extTreeParams != null && !jQuery.isEmptyObject(extTreeParams)) {
                    $("#extTreeParams").val(JSON.stringify(extTreeParams));
                }

                selectedTreeConfig(treeObject);
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}
function selectedTreeConfig(treeObj) {
    if (treeObj != null && !jQuery.isEmptyObject(treeObj)) {
        $("#jqxTree").jqxTree('destroy');
        $("#jqxTree").remove();
        $("#jqxTreeDiv").html("<div style=\"border: none;\" id='jqxTree'></div>");
        // var pageHeight = $(".visionHeader").height() + $(".visionFooterMain").height() + $(".visionBreadcrumMain").height();
        var splitterHeight = (parseInt($(window).height()) - parseInt("100px"));
//        var splitterHeight = (parseInt($(window).height()) - 130);
        var treeConfigObj = treeObj['treeConfigObj'];
        var treeInitParamObj = treeObj['treeInitParamObj'];
        var columnsObj = treeObj['treeColumnObj'];
        treeConfigObj.height = parseInt(splitterHeight);
        $('#jqxTree').jqxTree(treeConfigObj);

        $("#jqxTree").jqxTree('focus');
        $('#jqxTree').on('expand', function (event) {
            $("#mainSecondDxpSplitter").hide();
            var parentItem = $('#jqxTree').jqxTree('getItem', event.args.element);

            var $element = $(event.args.element);
            var loader = false;
            var loaderItem = null;
            var children = $element.find('ul:first').children();
            // var children = $element.find('ul:first').children();
            $.each(children, function () {
                var item = $('#jqxTree').jqxTree('getItem', this);
                if (item && item.value == 'ajax') {
                    loaderItem = item;
                    loader = true;
                    return false
                }
                ;
            });

            if (loaderItem != null) {
                var extTreeParams = $("#extTreeParams").val();
                $('#jqxTree').jqxTree('removeItem', loaderItem.element);
                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: "getTreeDataOpt",
                    cache: false,
                    data: {
                        parentkey: parentItem.value,
                        treeId: treeObj['treeId'],
                        level: parentItem.level,
                        extTreeParams: extTreeParams,
                        columnsObj: JSON.stringify(columnsObj)
                    },
                    success: function (data, status, xhr) {
                        $('#jqxTree').jqxTree('addTo', data, $element[0]);
                        var items = $('#jqxTree').jqxTree('getItems');
                        $.each(items, function () {
                            $(this.titleElement).attr('title', this.label);
                        });


                    },
                    error: function (e) {
                        console.log(e);
                        sessionTimeout(e);
                        stopLoader();
                    }
                });

            }
        });

        $('#jqxTree').on('select', function (event)
        {
            var args = event.args;
            var item = $('#jqxTree').jqxTree('getItem', args.element);
            var label = item.label;
            var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
            var level = item['level'];
            var selectedValue = item['value'];
            if (level != null && level != '' && level != '0') {
                level = parseInt(level) - 1;
            }
            var selectedColumnObj = columnsObj[level];
            if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
                console.log(JSON.stringify(selectedColumnObj) + ":::::" + selectedValue);
                var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
                if (selectedColumnObj['FOLLOWUP_COMP_ID'] != null
                        && selectedColumnObj['FOLLOWUP_COMP_ID'] != ''
                        && compType != null && compType != '') {
//                    $('#treeSplitter').jqxSplitter({
//                        panels: [{size: '20%', min: 150, resizable: true}, {size: '80%', min: 150, resizable: true}]
//                    });
                    if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                        var clusterDiv = '<div id="clusterSplitter">'
                                + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                                + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                                + '</div>';
                        $("#treeGridDiv").html(clusterDiv);
                        fetchCluster(selectedColumnObj, selectedValue, level);
                    } else if (compType == 'TREE') {
                        var childTreeDiv = ' <div id="jqxChildExpander">'
                                + ' <div id="expanderChildDesc" class="visionTreeDescription"></div>'
                                + ' <div style="border: none;" id="jqxChildTreeDropdown" class="visionTreeDropDown" ></div>'
                                + ' <div style="overflow: hidden;" id="jqxChildTreeDiv">'
                                + '<div style="border: none;" id="jqxChildTree"></div>'
                                + '</div>'
                                + '</div>';
                        $("#treeGridDiv").html(childTreeDiv);
                        fetchChildTree('jqxTree', selectedColumnObj, selectedValue, level);
                    } else if (compType == 'GRID') {
                        var gridid = '';
                        if (selectedColumnObj['FOLLOWUP_COMP_ID'] != null && selectedColumnObj['FOLLOWUP_COMP_ID'] != ''
                                && selectedColumnObj['FOLLOWUP_COMP_ID'] == 'DATA_UNIFICATION_PORTAL_TREE_GRID') {
                            gridid = 'DXP_UNIFICATION_PORTAL_GRID';
                        } else {
                            gridid = "DXP_SEARCH_VIEW";
                        }

                        fetchDxpGrid(selectedColumnObj, gridid, selectedValue);

                    }
                }

            }



        });
    }
    stopLoader();
}

function secondLevelTree(parentItem, treeObj, columnsObj, loaderItem, $element, event) {
    //  var flag ;

    $("#jqxTreeLevel1").jqxTree('destroy');
    $("#jqxTreeLevel1").remove();
    $("#jqxTreeDivLevel1").html("<div style=\"border: none;\" id='jqxTreeLevel1'></div>");
    var splitterHeight = (parseInt($(window).height()) - parseInt("100px"));
//        var splitterHeight = (parseInt($(window).height()) - 130);
    var treeConfigObj = treeObj['treeConfigObj'];
    var treeInitParamObj = treeObj['treeInitParamObj'];
    var columnsObj = treeObj['treeColumnObj'];
    treeConfigObj.height = parseInt(splitterHeight);
    $('#jqxTreeLevel1').jqxTree(treeConfigObj);
    $("#jqxTreeLevel1").jqxTree('focus');

    var extTreeParams = $("#extTreeParams").val();
    $('#jqxTreeLevel1').jqxTree('removeItem', loaderItem.element);
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getTreeDataOpt",
        cache: false,
        data: {
            parentkey: parentItem.value,
            treeId: treeObj['treeId'],
            level: parentItem.level,
            extTreeParams: extTreeParams,
            columnsObj: JSON.stringify(columnsObj),
            flag: 'Y'

        },
        success: function (data, status, xhr) {
            $("#mainSecondDxpSplitter").css("dispaly", "block");
            $("#mainSecondDxpSplitter").show();
            $('#jqxTreeLevel1').jqxTree('source', data);
            var items = $('#jqxTreeLevel1').jqxTree('getItems');
            $.each(items, function () {
                $(this.titleElement).attr('title', this.label);
            });


        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

// displaying tree by tree
function fetchChildTree(masterTreeId, selectedColumnObj, selectedValue, level) {
    if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
        var extTreeParams = $("#extChildTreeParams").val();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getSelectedTree",
            cache: false,
            data: {
                treeId: selectedColumnObj['FOLLOWUP_COMP_ID'],
                selectedColumnObj: JSON.stringify(selectedColumnObj),
                selectedValue: selectedValue,
                level: level,
                extTreeParams: extTreeParams
            },
            success: function (treeObject, status, xhr) {
                if (treeObject != null && !jQuery.isEmptyObject(treeObject)) {
                    $("#expanderChildDesc").html(treeObject['treeDesc']);//treeDesc
                    var extTreeParams = {};
                    extTreeParams = treeObject['extTreeParams'];
                    if (extTreeParams != null && !jQuery.isEmptyObject(extTreeParams)) {
                        $("#extTreeChildParams").val(JSON.stringify(extTreeParams));
                    }

                    selectedChildTreeConfig(treeObject, selectedColumnObj, selectedValue, level);
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
function selectedChildTreeConfig(treeObj, selectedColumnObj, selectedValue, level) {
    if (treeObj != null && !jQuery.isEmptyObject(treeObj)) {
        $("#jqxChildTree").jqxTree('destroy');
        $("#jqxChildTree").remove();
        $("#jqxChildTreeDiv").html("<div style=\"border: none;\" id='jqxChildTree'></div>");
        var pageHeight = $(".visionHeader").height() + $(".visionFooterMain").height() + $(".visionBreadcrumMain").height();
//        var splitterHeight = (parseInt($(window).height()) - 130);
        var splitterHeight = (parseInt($(window).height()) - parseInt(pageHeight));
        var treeConfigObj = treeObj['treeConfigObj'];
        var treeInitParamObj = treeObj['treeInitParamObj'];
        var columnsObj = treeObj['treeColumnObj'];
        treeConfigObj.height = parseInt(splitterHeight);
        $('#jqxChildTree').jqxTree(treeConfigObj);
        $("#jqxChildTree").jqxTree('focus');
        $("#treeGridDiv").show();
        $('#jqxChildTree').on('expand', function (event) {
            var parentItem = $('#jqxChildTree').jqxTree('getItem', event.args.element);
            var $element = $(event.args.element);
            var loader = false;
            var loaderItem = null;
            var children = $element.find('ul:first').children();
            // var children = $element.find('ul:first').children();
            $.each(children, function () {
                var item = $('#jqxChildTree').jqxTree('getItem', this);
                if (item && item.value == 'ajax') {
                    loaderItem = item;
                    loader = true;
                    return false
                }
                ;
            });
            if (loaderItem != null) {
                var extTreeParams = $("#extChildTreeParams").val();
                $('#jqxChildTree').jqxTree('removeItem', loaderItem.element);
                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: "getTreeDataOpt",
                    cache: false,
                    data: {
                        parentkey: parentItem.value,
                        treeId: treeObj['treeId'],
                        level: parentItem.level,
                        extTreeParams: extTreeParams,
                        columnsObj: JSON.stringify(columnsObj),
                        masterSelectedValue: selectedValue
                    },
                    success: function (data, status, xhr) {
//                            var items = jQuery.parseJSON(data);
                        $('#jqxChildTree').jqxTree('addTo', data, $element[0]);
                        var items = $('#jqxChildTree').jqxTree('getItems');
                        $.each(items, function () {
                            $(this.titleElement).attr('title', this.label);
                        });


                    },
                    error: function (e) {
                        console.log(e);
                        sessionTimeout(e);
                        stopLoader();
                    }
                });
            }



        });


    }
    stopLoader();
}
function clearTextSearch() {
    stopLoader();
    $(".dxpLoginHeader .leftNavList").css("width", "40%");
    $(".searchMainWrap .has-search input.form-control").css("border-radius", "20px");
    $(".selectDropDown").hide();
    $(".backbutton").hide();
    $("#filterDownArrowIconID").hide();
    $("#rightsearchicon").removeClass("replacedSearchButton");
$(".globalSearchBar").removeClass("makeCenterSearchBar");
    $("#rightsearchicon").addClass("searchbutton");
//    $(".has-search").css("width","143px");
    $(".has-search").removeClass("expand-search");

    $(".searchMainWrap .has-search input.form-control").css("background-color", "#efdddd");
    $(".dxpLoginHeader .searchMainWrap").css("border-radius", "20px");
    $("#treeSearchtextcount").text("");
    $("#treeSearchtextcount").text('');
    $("#treeSearchResult").cleanData;
    $("#treeSearchResult").val('');
    $("#intellisense").empty();
    $("#intellisense1").empty();
    $("#jqxTreeDiv").show();
    $("#intellisensebox").css("background", "none");
    //$("#searchResults").jqxGrid('clear');
    // $("#templatesearchResults").jqxGrid('clear');
    $("#intellisensebox").attr("data-space", "no");
    $("#result").attr("data-selected", "NO");
    $("#intellisensebox").attr("data-selection-type", "contain");
    $("#tresults").attr("data-clicked", "no");
    $("#containsearch").prop("checked", "checked");
    $(".dxpLoginHeader .massSearchListItem").css("margin-right", "175px");
    $("#intellisense").hide()
    $("#searchResultsCountId").hide();
    $("#SearchResult").val("");
     $(".massSearchListItem").css({"display":"none","width":"0"});
    $(".dxpLoginHeader #collapsibleNavbar .globalSearchBar .headerSearchIcon img").css("display","block");


    //$("#localedd").find('option:first').attr('selected', 'selected');
//    $("#localedd").prop('selectedIndex', 0);


    $("#localedd option").each(function () {
        if ($(this).attr('data-code') == $("#sessionLocale").val())
        {
            $('#localedd').val(this.value);
            return false;
        }
    });
    sourceArray = [];
    $(".clear_searchField").hide();
}
function getPivotSearchResults(event) {
    var columnName = $("#pivotTableSearch").val();
    var columnNameRows = $("#pivotTableSearchPvtRows").val();
    var parent = $(".pvtAttr").parent();
    var columnValue = $(".pvtAxisLabel").parent();
//                    var selectedColumnName = columnName.prevObject;
    for (var i = 0; i < parent.length; i++) {
        var className = parent[i].className;
        var innerText = parent[i].innerText;
//                        var textContent = selectedColumnName[i].textContent;
        if (columnNameRows != null && columnNameRows != "" && columnNameRows != undefined) {
            if (innerText.includes(columnNameRows, 0)) {
                console.log('columnNameRows' + columnNameRows);
                $(".pvtUnused").append(parent[i]);
                $(".pvtRows").append(parent[i]);
                if (columnNameRows) {
                    $("th.pvtAxisLabel").remove(columnNameRows);
                }
                break;
            }

        }
    }
}
function navigateToFormIcon(datafield, dataStr, redirectType, hrefGridId, panelId, basketType, detailType) {
    if (detailType == 'MATFORM') {
        navigateToMaterialForm(datafield, redirectType, hrefGridId, panelId, basketType, dataStr);
    } else {

        if (detailType == 'PROCESS')
        {
            var dataObj = JSON.parse(datStringValue);
            viewPendingRequest(dataObj);
        } else if (detailType == 'TIMELINE') {
            var dataObj = JSON.parse(datStringValue);
            getTimeLineInfo(dataObj, hrefGridId);
        } else if (detailType == 'TREE') {
            var dataObj = JSON.parse(datStringValue);
            viewSearchTreeStructure(hrefGridId, basketType, 'blank', dataObj);
        } else
        {
            var datStringValue = dataStr.replaceAll(" : ", "_");
            datStringValue = datStringValue.replaceAll(": ", "_");
            datStringValue = datStringValue.replaceAll(" :", "_");
            datStringValue = datStringValue.replace(/\s+/g, '');
            var dataObj = JSON.parse(datStringValue);
            navigateToPdfDataForm(datafield, dataObj, redirectType, hrefGridId, panelId, basketType);
//            navigateToForm(datafield, dataObj, redirectType, hrefGridId, panelId, basketType);
        }
    }
}

//24-10-2021 replced start
function navigaterecord(row) {
    $("#typedResult").val($("#result").val());
    console.log("updateIntellisense:::" + row);
    var selectedStr = $("#updateIntellisense_" + row).text();
    var splitedStr = selectedStr.split(':');
    selectedStr = splitedStr[1];
    var conditionColumnName = $("#updateIntellisense_" + row).attr('data-conditionColumnName');
    console.log("selectedStr:::" + selectedStr + " conditionColumnName:::" + conditionColumnName);
    var replacestring = selectedStr.replace(/<b>|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class="fuzzyItem">|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class='fuzzyItem'>|<\/b>/g, "");
    $("#result").val(replacestring);


    var searchColumnData = {};
    searchColumnData.DISP_FLD_NAME = conditionColumnName
    searchColumnData.FLD_NAME = conditionColumnName
    searchColumnData.FOLLOWUP_COMP_ID = $("#treeFollowupCompId").val();
    searchColumnData.FOLLOWUP_COMP_TYPE = "CLUSTER"
    searchColumnData.HL_FLD_NAME = conditionColumnName

    if (searchColumnData != null && !jQuery.isEmptyObject(searchColumnData)) {
        console.log(JSON.stringify(searchColumnData) + ":::::" + searchColumnData);
        var compType = searchColumnData['FOLLOWUP_COMP_TYPE'];
        if (searchColumnData['FOLLOWUP_COMP_ID'] != null
                && searchColumnData['FOLLOWUP_COMP_ID'] != ''
                && compType != null && compType != '') {
            $('#treeSplitter').jqxSplitter({
                panels: [{size: '20%', min: 150, resizable: true}, {size: '80%', min: 150, resizable: true}]
            });
            if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                var clusterDiv = '<div id="clusterSplitter">'
                        + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                        + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                        + '</div>';
                $("#treeGridDiv").html(clusterDiv);
                fetchCluster(searchColumnData, replacestring, "");
            }
        }
    }
}
//24-10-2021 replced end

function treeSearchResultsHandler(row) {
    $("#typedResult").val($("#dxptreeSearchResult").val());
    var selectedStr = $("#dxptreeSearchResult").val();
    console.log("selectedStr:::" + selectedStr);
    var replacestring = selectedStr.replace(/<b>|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class="fuzzyItem">|<\/b>/g, "");
    replacestring = replacestring.replace(/<b class='fuzzyItem'>|<\/b>/g, "");
    $("#result").val(replacestring);
    var paramArray = [];
    if (replacestring != '' && replacestring != 'null' && replacestring != undefined) {
        if (!(selectedColumnData != null && !jQuery.isEmptyObject(selectedColumnData))) {
            selectedColumnData = JSON.parse($("#selectedColumnData").val());
        }
        if (selectedColumnData != null && !jQuery.isEmptyObject(selectedColumnData)) {
            console.log(JSON.stringify(selectedColumnData) + ":::::" + selectedColumnData);
            var compType = selectedColumnData['FOLLOWUP_COMP_TYPE'];
            if (selectedColumnData['FOLLOWUP_COMP_ID'] != null
                    && selectedColumnData['FOLLOWUP_COMP_ID'] != ''
                    && compType != null && compType != '') {
//                $('#treeSplitter').jqxSplitter({
//                    panels: [{size: '20%', min: 150, resizable: true}, {size: '80%', min: 150, resizable: true}]
//                });
                if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                    var clusterDiv = '<div id="clusterSplitter">'
                            + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                            + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                            + '</div>';
                    $("#treeGridDiv").html(clusterDiv);
                    fetchCluster(selectedColumnData, replacestring, "");
                } else if (compType == 'GRID') {
                    var gridid = "DXP_SEARCH_VIEW";
                    fetchDxpGrid(selectedColumnData, gridid, selectedStr);

                }
            }
        }
    } else {
        var labelObject = {};
        $("#dialog").html("Enter a keyword to search");
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
            }
        });

    }
}
function navigateToMaterialForm(datafield, redirectType, gridId, selectedTabId, selectingrowindex, dataStr) {
    var datStringValue = dataStr.replaceAll(" : ", "_");
    datStringValue = datStringValue.replaceAll(": ", "_");
    datStringValue = datStringValue.replaceAll(" :", "_");
//         datStringValue = datStringValue.replaceAll(":1","");
    datStringValue = datStringValue.replace(/\s+/g, '');
    var dataObj = JSON.parse(datStringValue);
    var items = {};
    var stripValueStr = $("#" + gridId + "_stripValue").val();
    var stripValueObjArray = [];
    if (stripValueStr != null) {
        var stripValObj = stripValueStr.split(";");
        for (var i = 0; i < stripValObj.length; i++)
        {
            var stripValueObj = {};
            if (stripValObj[i] != null && stripValObj[i] != '' && typeof stripValObj[i] != 'undefined') {
                if (stripValObj[i].indexOf(",") > -1) {
                    var stripVal = stripValObj[i].split(",");
                    stripValueObj.columnName = stripVal[0];
                    stripValueObj.value = stripVal[1];
                    stripValueObjArray.push(stripValueObj);
                }

            }

        }

    }//
    var hiddenObjStr = $("#" + gridId + "_hiddenObj").val();
    if (hiddenObjStr != null) {
        var hiddenObj = JSON.parse(hiddenObjStr);
        for (var key in hiddenObj) {
            var value = hiddenObj[key];
            if (value != null && value != '' && value != 'null') {
                if (key != null && key.lastIndexOf("HIDDEN") > -1) {
                    var columnsArray = value.split(",");
                    var hiddenIds = key.split("HIDDEN_");
                    var hiddenVal = data[hiddenIds[1]];
                    for (var i = 0; i < columnsArray.length; i++) {
                        if (columnsArray[i] != 'NAME1') {
                            items[columnsArray[i]] = hiddenVal;
                        }
                    }
                }
            } else {
            }
        }
    }
    items.stripValue = stripValueObjArray
    items.imageColumn = $("#" + gridId + "_imageColumn").val();
    items.imageTable = $("#" + gridId + "_imageTable").val();
    items.imageTableColumn = $("#" + gridId + "_imageTableColumn").val();
    items.linkedColumns = "RECORD_NO";
    items.RECORD_NO = dataObj['RECORD_NO'];
    items.gridId = gridId;
    items.panelId = $("#" + gridId + "_panelId").val();
    items.tabId = selectedTabId;
    items.selectingrowindex = selectingrowindex;
    var itemsstring = JSON.stringify(items);
    $("#items").val(itemsstring);
    $("#submitForm").attr("action", "formData");
    $("#submitForm").attr("target", "thatframe");
    $("#submitForm").submit();
}
function getButtonData(treeId) {
    showLoader();
    var extTreeParams = $("#extTreeParams").val();
    var buttonValue = $("#cloudTreeButton").val();
    $("#intellisenseTree").html("");
    $("#jqxTreeDiv").show();
    $(".clear_searchField").hide();
    clearTextSearch();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getSelectedTree",
        cache: false,
        data: {
            treeId: treeId,
            extTreeParams: extTreeParams
        },
        success: function (treeObject, status, xhr) {
            if (treeObject != null && !jQuery.isEmptyObject(treeObject)) {
                $("#expanderDesc").html(treeObject['treeDesc']);//treeDesc
                var extTreeParams = {};
                extTreeParams = treeObject['extTreeParams'];
                $("#selectedFldValue").val((treeObject['treeColumnObj'])[0]['HL_FLD_NAME']);
                selectedColumnData = (treeObject['treeColumnObj'])[0];
                if (extTreeParams != null && !jQuery.isEmptyObject(extTreeParams)) {
                    $("#extTreeParams").val(JSON.stringify(extTreeParams));
                }

                selectedTreeConfig(treeObject);
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function appendFilterText(selectBox)
{
    $("#cloudMainsearchTextBox").html(selectBox);
    $("#mainTreeSearchResult").keydown(function (e) {
        showLoader();
        var resultVal12 = $("#mainTreeSearchResult").val();
        if ($("#mainTreeSearchResult").val() != null && $("#mainTreeSearchResult").val() != '') {
            $(".clear_searchField").show();
        } else {
            $(".clear_searchField").hide();
        }
        console.log('Keyevent raised:::' + e.keyCode);
        var ajaxTime = "";
        var totalTime = "";
        var SelectedTabData = $("#localedd").val();
        //var
        if (e.keyCode == 32 //Space
                || e.keyCode == 45 //Insert
                || e.keyCode == 33 //Page Up
                || e.keyCode == 34 //Page Down
                || e.keyCode == 36//Home
                || e.keyCode == 16 //Shift
                || e.keyCode == 17 //Ctrl
                || e.keyCode == 18 //Alt
                || e.keyCode == 35//End
                || e.keyCode == 37 //Left arrow
                || e.keyCode == 38 //Up arrow
                || e.keyCode == 39 //Right arrow
                || e.keyCode == 40//Down arrow
                || e.keyCode == 89//left click
                ) {
            console.log('Ajax Not sent');
        } else {
            if (e.keyCode == 13 //Enter
                    && $(this).val().length > 2) {
                delay(function () {
                    var resultVal = $("#mainTreeSearchResult").val();
                    resultVal = resultVal.replace(/\s\s+/g, ' ');
                    $("#mainTreeSearchResult").val(resultVal);
                    if (resultVal != null && resultVal != '' && resultVal.length > 2) {
                        // showLoader();
                        //startAjax();
                        startTabLoader()
                        $("#typedResult").val(resultVal);
                        var paramArray = [];
                        searchResults('S', '', paramArray);
                    } else {
                        var labelObject = {};
                        $("#dialog").html("Enter a keyword of at least 3 chars,ignoring special chars(@.,;:/etc)  to search");
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
                            }
                        });
                    }
                    //$("#tooltipdiv").jqxTooltip("close");
                }, 100);
            } else {
                delay(function () {
                    userval = $("#mainTreeSearchResult").val();
                    userval = userval.replace(/\s\s+/g, ' ');
                    if (userval != null && userval != '') {
                        $.ajax({
                            type: "POST",
                            url: "treeHierarchySearchSuggestion",
                            data: {
                                searchtext: userval,
                                SelectedListData: SelectedTabData,
                                selectedFldValue: $("#selectedFldValue").val(),
                                currentTreeId: $("#currentTreeId").val()
                            },
                            success: function (response) {
                                stopLoader();
                                if (response != null && response != "") {
                                    $("#cloudTreeIntellisense").html("");
                                    var responseObj = JSON.parse(response);
                                    if (responseObj != null && response != '') {
                                        $("#cloudTreeIntellisense").html(responseObj['suggestion']);
                                        totalTime = new Date().getTime() - ajaxTime;
                                        totalTime = parseInt(totalTime) / 1000;
                                        $("#cloudTreeIntellisensebox").show();
                                        $("#jqxTreeDiv").hide();
                                    }
                                } else {
                                    $("#text_count").text("No record(s) found");
                                    $("#tooltipdiv").html("");
                                    $("#tooltipdiv").jqxTooltip({'content': 'No record(s) found', theme: 'energyblue'});
                                    $("#tooltipdiv").jqxTooltip("open");
                                    $("#cloudTreeIntellisensebox").hide();
                                    $("#jqxTreeDiv").show();
                                }
                                // stopLoader();
                                //endAjax();
                                stopLoader();
                            },
                            error: function (e) {
                                console.log(e);
                                stopLoader();
                                sessionTimeout(e);
                            }

                        });
                    } else {
                        $("#cloudTreeIntellisense").html("");
                        $("#jqxTreeDiv").show();
                        $(".clear_searchField").hide();
                    }


                }, 500);
            }
        }

    });
}
function vendorCreation(type) {
    if (type != null && type != '' && type != undefined && type == 'M') {
        navigationMenuUrl('GenericSearch?searchid=FMM_MGR_MATERIAL_SEARCH&target=blank');
    } else {
        navigationMenuUrl('GenericSearch?searchid=FVM_REQ_VENDOR_SEARCH&target=blank');
    }

}
function showTreeDataInPPR() {
    try
    {
//        let divId = $('#tabmainDivId').val();
//        let divId = 'jqxhtmlTreeDiv';
        var treeId = $("#htmltreeSelectBox").val();
        var selectedDomain = $("#domainListDropdown").val();
//        $("#" + divId).html("");
        showLoader();
        $.ajax({
            type: "POST",
            url: 'getGenericDxpHtmlTree',
            data: {
                'treeId': treeId,
                selectedDomain:selectedDomain
            },
            traditional: true,
            cache: false,
            success: function (treeObject) {
                stopLoader();
//                $("#" + divId).html(treeObject['divid']);
//                $("#tabmainDivId").val(divId);
                if (treeObject != null && !jQuery.isEmptyObject(treeObject)) {
                    $("#expanderDesc").html(treeObject['treeDesc']);//treeDesc
                    var extTreeParams = {};
                    extTreeParams = treeObject['extTreeParams'];
                    $("#selectedFldValue").val((treeObject['treeColumnObj'])[0]['HL_FLD_NAME']);
                    if (extTreeParams != null && !jQuery.isEmptyObject(extTreeParams)) {
                        $("#extTreeParams").val(JSON.stringify(extTreeParams));
                    }
                    $("#treeGridDiv").hide();
                    if (treeObject != null) {
                        var columnsObj = treeObject['treeColumnObj'];
                        var columnsObjstr = JSON.stringify(columnsObj);
                        $("#selectedcolumObject").val(columnsObjstr);
                        var treehtmlstr = "";
                        $('#jqxhtmlTree').html("");
                        showLoader();
                        $.ajax({
                            type: "post",
                            traditional: true,
                            dataType: 'json',
                            url: "getDxpHtmlTreeDataOpt",
                            cache: false,
                            data: {
                                parentkey: '',
                                treeId: treeId,
                                level: 0,
                                extTreeParams: extTreeParams,
                                columnsObj: JSON.stringify(columnsObj)
                            },
                            success: function (data, status, xhr) {
                              console.log(data);
//                            var sourceItems = JSON.parse(data);
                                for (var i = 0; i < data.length; i++) {
                                    var obj = data [i];
                                    treehtmlstr = obj['description'];
//                                var str = "<button class='product-name' id='product-name'" + obj['description'] + "' data-columnsObjstr = '" + columnsObjstr + "' data-hiLevelvalue = '" + obj['description'] + "'>" + obj['label'] + "</button>";
//                                treehtmlstr += str;
                                }
                                $('#jqxhtmlTree').html(treehtmlstr);
                                stopLoader();
                            },
                            error: function (e) {
                                console.log(e);
                                sessionTimeout(e);
                                stopLoader();
                            }
                        });
                        $('#dxphtmltreeSearchResult').on('keyup', function () {
                            var searchVal = $(this).val();
                            htmltreeSearchResultsHandler(searchVal);

                        });
                    }
                }
            }
        });
        $("#htmltreeSelectBox").val(treeId);
    } catch (exception) {
    }
}
