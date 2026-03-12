/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var processStepsInterval = {};
$(document).ready(function () {
    getViewMocrProcessNotifications();
});
function getMOCRSearchForm(searchGridId, treeId, newGridId)
{
    try {
        $(".visualizationDashboardView").hide();
        $("#dxp1Seconddiv").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp21MainSplitter").hide();
        $(".dxpSplitterTabsContent").hide();
        $("#dxpDomainMenus").hide();
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
        $("#dxpMenus").hide();
        $("#VisualizePageBody").hide();
        $('#dxpMOCRTreeWithGrid').hide();
        try {
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
        } catch (e) {

        }
        try {
            let currentTabName = event.currentTarget.innerText;
            var tabname = currentTabName.split('\n')[0];
            insertUserClickedNavigations(tabname);
        } catch (e) {

        }

        if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
            tabname = 'MOCR Search View';
        }

        showSelectedTabContent(null, 'dxpMOCRSearchTreeWithGrid', 'dxpMOCRSearchTreeWithGridContent', tabname, 'N', 'Y');

        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
        $("#dxpMOCRSearchTreeWithGridContent").css("width", "100%", "!important");
        $("#dxpMOCRSearchTreeWithGridContent").css("height", "100%", "!important");
//        $('#dxpMOCRSearchTreeWithGridContent').jqxSplitter({width: '100%', height: '100%', orientation: 'horizontal', splitBarSize: 0,
//            panels: [{size: '12%', min: 120, resizable: true}, {size: '88%', min: 150, resizable: true}]
//        }); 
        $('#dxpMOCRSearchDiv').html("<div id='gridUI5Filter_" + searchGridId + "' class='assetTreeGeneralDataDiv' data-treeId='" + treeId + "'></div>");
        try {
            $('#dxp1MainTreeSplitter').jqxSplitter('expand');
        } catch (e) {

        }
        getUI5FilterGridForm(searchGridId, '', 'MOCR_TREE', '');  //15-07-2025 
//        getGridButtons(searchGridId);
//        getAssetTreeobject(treeId, "dxpAssetTree", '50');
    } catch (e) {
        console.log(e);
        stopLoader();
    }
}

function getGridButtons(gridId)
{
    if (gridId != null) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getDxpMOCRSearchGridButtons",
            cache: false,
            data: {
                gridId: gridId
            },
            success: function (treeObject) {
                if (treeObject != null && !jQuery.isEmptyObject(treeObject))
                {
                    var divHtml = treeObject['divHtml'];
                    if (divHtml != null && divHtml != '' && divHtml != undefined)
                    {
                        $("#dxpMOCRSearchButtonsDiv").html(divHtml);
                    }
                }
                stopLoader();
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });

    }
}


function getAssetTreeComponent(treeId, treeTittle, dataGridId) {
    try {
        $(".visualizationDashboardView").hide();
        $("#dxp1Seconddiv").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp21MainSplitter").hide();
        $(".dxpSplitterTabsContent").hide();
        $("#dxpDomainMenus").hide();
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
        $("#dxpMenus").hide();
        $("#VisualizePageBody").hide();
        try {
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
        } catch (e) {

        }
        try {
            let currentTabName = event.currentTarget.innerText;
            var tabname = currentTabName.split('\n')[0];
            insertUserClickedNavigations(tabname);
        } catch (e) {

        }

        if (treeTittle != null && treeTittle != undefined && treeTittle != '' && treeTittle != 'undefined') {
            tabname = treeTittle;
        }
        if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
            tabname = 'Tree View';
        }

        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', tabname, 'N', 'Y');

        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
        $("#dxp1MainSplitter").css("width", "100%", "!important");
        $("#dxp1MainSplitter").css("height", "100%", "!important");
//        $('#dxp1MainSplitter').html("<div id='assetTreeHierarchyFiltersDIvId'>"
        $('#dxp1MainSplitter').html("<div id='gridUI5Filter_" + dataGridId + "' class='assetTreeGeneralDataDiv' data-treeId='" + treeId + "'></div>"
                + "<div id='dxp1MainTreeSplitter'>"
                + "<div id='dxp1Firstdiv'></div>"
                + "<div id='dxp1Seconddiv'></div>"
                + "</div>");
        $('#dxp1MainTreeSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0,
            panels: [{size: '25%', min: 150, resizable: true}, {size: '75%', min: 150, resizable: true}]
        });
        try {
            $('#dxp1MainTreeSplitter').jqxSplitter('expand');
        } catch (e) {

        }

        getUI5FilterGridForm(dataGridId, '', 'MOCR_TREE', '');  //15-07-2025 
        stopLoader();
        getAssetTreeobject(treeId, "dxpAssetTree", '50');
        stopLoader();
    } catch (e) {
        console.log(e);
        stopLoader();
    }
}

function getAppAssetTreeComponent(treeId, treeTittle, dataGridId, status) {
    try {
        $(".visualizationDashboardView").hide();
        $("#dxp1Seconddiv").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp21MainSplitter").hide();
        $(".dxpSplitterTabsContent").hide();
        $("#dxpDomainMenus").hide();
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
        $("#dxpMenus").hide();
        $("#VisualizePageBody").hide();
        try {
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
        } catch (e) {

        }
        try {
            let currentTabName = event.currentTarget.innerText;
            var tabname = currentTabName.split('\n')[0];
            insertUserClickedNavigations(tabname);
        } catch (e) {

        }

        if (treeTittle != null && treeTittle != undefined && treeTittle != '' && treeTittle != 'undefined') {
            tabname = treeTittle;
        }
        if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
            tabname = 'Tree View';
        }

        showSelectedTabContent(null, 'dxp1TabsWithGrid', 'dxp1TabsWithGridContent', tabname, 'N', 'Y');

        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
        $("#dxp1MainSplitter").css("width", "100%", "!important");
        $("#dxp1MainSplitter").css("height", "100%", "!important");
//        $('#dxp1MainSplitter').html("<div id='assetTreeHierarchyFiltersDIvId'>"
        $('#dxp1MainSplitter').html("<div id='gridUI5Filter_" + dataGridId + "' data-treeId='" + treeId + "'></div>"
                + "<div id='dxp1MainTreeSplitter'>"
                + "<div id='dxp1Firstdiv'></div>"
                + "<div id='dxp1Seconddiv'></div>"
                + "</div>");
        $('#dxp1MainTreeSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0,
            panels: [{size: '25%', min: 150, resizable: true}, {size: '75%', min: 150, resizable: true}]
        });
        try {
            $('#dxp1MainTreeSplitter').jqxSplitter('expand');
        } catch (e) {

        }
        getUI5FilterGridForm(dataGridId, '', 'MOCR_TREE', '');  //15-07-2025
        getAssetTreeobject(treeId, "dxpAssetTree", '50', 'Y');
    } catch (e) {
        console.log(e);
    }
}

function getAssetTreeobject(treeId, treeDivId, trwidth, plantFlag) {
    if (treeId != null) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getDxpAssetTree",
            cache: false,
            data: {
                treeId: treeId
            },
            success: function (treeObject) {
                getAssetTreeConfig(treeObject, treeDivId, plantFlag);
                stopLoader();
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });

    }

}

// Function to recursively check/uncheck all child nodes
function checkChildren(treeDivId, parentNode, check) {
    var children = $(parentNode).find("li");
    $.each(children, function (i, val) {
        var item = $('#' + treeDivId).jqxTree('getItem', val);
        $('#' + treeDivId).jqxTree('checkItem', item.element, check);
    });
}
function getAssetTreeConfig(treeObj, treeDivId, plantFlag, gridDivId) {
    stopLoader();
    var rightClick = false;
    var treeConfigObj = treeObj['treeConfigObj'];
    var columnsObj = treeObj['treeColumnObj'];
    var treeButtonsDivStr = treeObj['treeButtonsDivStr'];
    $("#dxpMOCRTreeDiv").html(treeButtonsDivStr);
    treeConfigObj.checkboxes = true;
    treeConfigObj.allowDrag = false;
    treeConfigObj.allowDrop = false;
    $('#' + treeDivId).jqxTree(treeConfigObj);
    $("#" + treeDivId).jqxTree('focus');
    $("#jqxTreeDropdown").hide();
    $("#" + treeDivId).attr("columnsObj", JSON.stringify(columnsObj));

    if (!(gridDivId != null && gridDivId != '' && gridDivId != undefined)) {
        gridDivId = 'dxpMOCRTreeGridDiv';
    }
    $('#' + treeDivId).unbind('mouseenter').on('mouseenter', '.jqx-tree-item', function (e) {
        $(this).removeAttr('title');
    });
    $("#dxpMOCRpendingTreeSearchDivId").html(
            "<input type='text' id='treeMOCRSearchInputId' placeholder='Search in tree...'/>" +
            "<span id='treeMOCRClearBtn'>&times;</span>"
            );
    $('#' + treeDivId).on('checkChange', function (event) {
        const tree = $('#' + treeDivId);
        const checkedItem = event.args.element;
        const isChecked = event.args.checked;

        if (!isChecked)
            return; // Do nothing if unchecked

        const checkedItems = tree.jqxTree('getCheckedItems');

        checkedItems.forEach(item => {
            if (item.element !== checkedItem) {
                tree.jqxTree('checkItem', item.element, false);
            }
        });
    });
    $("#treeMOCRSearchInputId").off("keyup").on("keyup", function () {
        var searchText = $(this).val().toLowerCase();
        var $treeDiv = $("#" + treeDivId);   // the tree container
        var treeItems = $treeDiv.find(".jqx-tree-item");

        // reset previous highlights
        treeItems.css({"background-color": "", "font-weight": ""});
        if (searchText.length > 0) {
//                        $treeDiv.find('li').hide();
            treeItems.closest("li").hide();

            var matchingItems = [];
            treeItems.each(function () {
                var itemText = $(this).text().toLowerCase();
                if (itemText.indexOf(searchText) !== -1) {
                    // Highlight the matching item
                    $(this).css({"background-color": "#ffe680", "font-weight": "bold"});

                    // Get the li element that contains this item
                    var $li = $(this).closest('li');
                    matchingItems.push($li);
                }
            });

            // For each matching item, show it and all its parents
            matchingItems.forEach(function ($matchingLi) {
                $matchingLi.show();
                $matchingLi.parents('li').show();
//                            $matchingLi.parents('ul').show();
            });

        } else {
            $treeDiv.find('li').show();
//                        $treeDiv.find('ul').show();
        }
        $treeDiv.jqxTree('refresh');
    });
    $("#dxpMOCRpendingTreeSearchDivId").on("click", "#treeMOCRClearBtn", function () {
        $("#treeMOCRSearchInputId").val("");
        var $treeDiv = $("#" + treeDivId);
        var treeItems = $treeDiv.find(".jqx-tree-item");
        treeItems.css({"background-color": "", "font-weight": ""});
        $treeDiv.find("li").show();
        $treeDiv.jqxTree('refresh');
    });

//    $('#' + treeDivId).on('checkChange', function (event) {
//        var item = event.args.element;
//        var isChecked = event.args.checked;
//
//        // If the parent node is checked or unchecked, check/uncheck its children
//        if (isChecked) {
//            // Check all child nodes of this parent
//            checkChildren(treeDivId, item, true);
//        } else {
//            // Uncheck all child nodes of this parent
//            checkChildren(treeDivId, item, false);
//        }
//    });

    $('#' + treeDivId).on('select', function (event)
    {
        if (!(rightClick)) {
            var args = event.args;
            var item = $('#' + treeDivId).jqxTree('getItem', args.element);
            var label = item.label;
            if (label.includes('Show More...')) {
                var offset = item['value'] || 0;
                var parentElement = item.parentElement; // store parent to append children
                var parentItem = $('#' + treeDivId).jqxTree('getItem', parentElement);

                // Remove the "Show More..." placeholder
                $('#' + treeDivId).jqxTree('removeItem', item.element);
                // Call backend with new offset
                showLoader();
                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: "getDXPAssetTreeDataOpt",
                    cache: false,
                    data: {
                        parentkey: parentItem.value,
                        assetType: $(parentItem.element).attr('item-description'),
                        treeId: treeObj['treeId'],
                        level: parentItem.level,
                        columnsObj: JSON.stringify(columnsObj),
                        offset: offset
                    },
                    success: function (data) {
                        stopLoader();
                        $('#' + treeDivId).jqxTree('addTo', data, parentItem.element);
                        return; // prevent normal select handling
                    },
                    error: function (e) {
                        console.log(e);
                        stopLoader();
                        return; // prevent normal select handling
                    }

                });


            }
            var idMatch = label.match(/id='([^']+)'/);
            var labelId = idMatch[1];
            var instance = $("#" + labelId).attr("data-instance");
            var businessUnit = $("#" + labelId).attr("data-business_unit");
            var recordNo = $("#" + labelId).attr("data-record_no");
            var erpNo = $("#" + labelId).attr("data-erp_no");
            var objectType = $("#" + labelId).attr("data-object_type");
            var conceptId = $("#" + labelId).attr("data-concept_id");
            var gridId = $("#" + labelId).attr("data-grid_id");
            var basicData = {};
            basicData['CONCEPT_ID'] = conceptId;
            basicData['INSTANCE'] = instance;
            basicData['BUSINESS_UNIT'] = businessUnit;
            basicData['RECORD_NO'] = recordNo;
            basicData['ERP_NO'] = erpNo;
            basicData['NODE_TYPE'] = objectType;
            basicData['gridId'] = gridId;
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getDXPSelectedAssetTreeForm",
                cache: false,
                data: {
                    basicData: JSON.stringify(basicData),
                    gridId: gridId,
                    recordNo: recordNo
                },
                success: function (response, status, xhr) {

                    var basicData = response['basicData'];
                    var gridObj = response['gridObj'];
                    var hrefColumn = response['hrefColumn'];
                    if (basicData != null && !jQuery.isEmptyObject(basicData)
                            && gridObj != null && !jQuery.isEmptyObject(gridObj))
                    {
                        try {
                            setTimeout(function () {
                                $("#dxpFormContent").empty();
                                var $tabsElement = $('#dxpFromTab');
                                $tabsElement.hide();
                            }, 200);
                        } catch (e)
                        {

                        }
                        showNavigateToForm(hrefColumn, basicData, 'form', gridId, "", 0, "N", gridObj, gridDivId);
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

    var treeId = treeDivId;
    $('#' + treeId).on('mousedown', function (event) {
        var target = $(event.target).parents('li:first')[0];
        rightClick = isRightClick(event);
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
            if (selectedItem.level >= 3) {
                var rightClickFunc = "";
                if (columnsObj != null && !jQuery.isEmptyObject(columnsObj))
                {
                    var colObj = columnsObj['0'];
                    if (colObj != null && !jQuery.isEmptyObject(colObj))
                    {
                        var initParamObj = colObj['TREE_INIT_PARAMS'];
                        if (initParamObj != null && !jQuery.isEmptyObject(initParamObj))
                        {
                            var rightClickButtomMethodParams = initParamObj['uuu_rightClickButtomMethodParams'];
                            if (rightClickButtomMethodParams != null && rightClickButtomMethodParams != '' && rightClickButtomMethodParams != undefined)
                            {
                                var rightClickButtomMethodParamsObj = rightClickButtomMethodParams.split(":");
                                var item = $('#' + treeDivId).jqxTree('getItem', selectedItem.element);
                                var label = item.label;
                                var idMatch = label.match(/id='([^']+)'/);
                                var labelId = idMatch[1];
                                var objectType = $("#" + labelId).attr("data-object_type");
                                if (objectType != null && objectType != '' && objectType != undefined && objectType == 'EBOM') {
                                    showAssetTreeErrorMsg("Error", "<p style='color:red;font-weight:500;margin-bottom:5px;'>Change Request is not allowed for eBom</p>");
                                    return;
                                }
                                if (rightClickButtomMethodParamsObj != null && !jQuery.isEmptyObject(rightClickButtomMethodParamsObj))
                                {
                                    $.each(rightClickButtomMethodParamsObj, function (i, rightClickValue) {
                                        if (rightClickValue != null && rightClickValue != '' && rightClickValue != undefined) {
                                            var rightClickValueObj = rightClickValue.split(";");
                                            if (rightClickValueObj != null && !jQuery.isEmptyObject(rightClickValueObj)) {
                                                var rightClickButtonType = rightClickValueObj[0];
                                                var rightClickButtonMethodName = rightClickValueObj[1];
                                                var rightClickButtonMethodParams = rightClickValueObj[2];
                                                if (rightClickButtonType != null && rightClickButtonType != '' && rightClickButtonType != undefined
                                                        && rightClickButtonMethodName != null && rightClickButtonMethodName != '' && rightClickButtonMethodName != undefined
                                                        && rightClickButtonMethodParams != null && rightClickButtonMethodParams != '' && rightClickButtonMethodParams != undefined) {
                                                    var paramsArray = rightClickButtonMethodParams.split(',');
                                                    var formattedParams = paramsArray.map(function (param) {
                                                        return "'" + param.trim() + "'";
                                                    }).join(',');
                                                    rightClickFunc += "" + rightClickButtonType + ":" + rightClickButtonMethodName + "(this,'" + treeId + "','" + selectedItem.value + "'," + formattedParams + ");";
                                                }
                                            }
                                        }

                                    })
                                }
                            }
                        }
                    }

                }
                var menuItems = "";
                var menuHeight;
                if (rightClickFunc != null) {
                    var options = rightClickFunc.split(";");
                    menuHeight = options.length;
                    $.each(options, function (index) {
                        var menuItem = options[index].split(":")[0];
                        var funcName = options[index].split(":")[1];
                        if (menuItem != null && menuItem != '' && menuItem != undefined
                                && funcName != null && funcName != '' && funcName != undefined)
                        {
                            menuItems += "<li onclick=\"" + funcName + "\">" + menuItem + "</li>"
                        }

                    });
                }
                $("#jqxMenu").remove();
                $("body").append("<div id='jqxMenu' class='jqxMenuClass'><ul></ul></div>");
                $("#jqxMenu ul").html(menuItems);
                var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup', theme: 'energyblue'}); // ravi start
                var scrollTop = $(window).scrollTop();
                var scrollLeft = $(window).scrollLeft();
                contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                rightClick = false;
                //$('#' + treeId).jqxTree('selectItem', null);
                return true;
            } else {
                rightClick = false;
                $('#' + treeId).jqxTree('selectItem', null);
                return false;
            }


        } else {
            var rightItem = $(event.target).closest('li');
            $('#' + treeId).jqxTree('selectItem', rightItem[0]);
        }
    });

    $('#' + treeDivId).on('expand', function (event) {
        showLoader();
        var parentItem = $('#' + treeDivId).jqxTree('getItem', event.args.element);
        var level = parentItem.level;
        var $element = $(event.args.element);
        var loader = false;
        var loaderItem = null;
        var assetType = $($element).first().attr('item-description');
        var children = $element.find('ul:first').children();
        $.each(children, function () {
            var item = $('#' + treeDivId).jqxTree('getItem', this);
            if (item && item.value == 'ajax') {
                loaderItem = item;
                loader = true;
                return false;
            }

        });

        if (loaderItem != null) {
            var extTreeParams = $("#extTreeParams").val();
            $('#' + treeDivId).jqxTree('removeItem', loaderItem.element);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getDXPAssetTreeDataOpt",
                cache: false,
                data: {
                    parentkey: ((level == 0 && plantFlag == 'Y') ? "1000" : parentItem.value),
                    assetType: assetType,
                    treeId: treeObj['treeId'],
                    level: parentItem.level,
                    extTreeParams: extTreeParams,
                    columnsObj: JSON.stringify(columnsObj),
                },
                success: function (data, status, xhr) {
                    var children = $element.find('ul:first').children();
                    if (!(children != null && !jQuery.isEmptyObject(children) && children.length > 0)) {
                        $('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                    }
                    //$('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                    var items = $('#' + treeDivId).jqxTree('getItems');
                    stopLoader();
                    $.each(items, function () {
                        $(this.titleElement).attr('title', this.label);
                        $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                    });
                    var treeId = treeDivId;
                    $('#' + treeId).on('select', function (event)
                    {
                        if (!(rightClick)) {
                            var args = event.args;
                            var item = $('#' + treeId).jqxTree('getItem', args.element);
                            var label = item.label;
                            var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
                            var level = item['level'];
                            var selectedValue = item['value'];
                            if (level != null && level != '' && level != '0') {
                                level = parseInt(level) - 1;
                            }
                            var selectedColumnObj = columnsObj[0];
                            if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
                                var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
                                var compId = selectedColumnObj['FOLLOWUP_COMP_ID'];
                                if (compId != null && compId != '' && compId != undefined
                                        && compType != null && compType != '' && compType != undefined) {
                                    if (compType == 'GRID') {// grids,tabs,form ,cluster
                                        var gridDiv = '<div id="assetTreeHierGridId" class="assetTreeHierGridClass"></div>';
                                        $("#dxp1Seconddiv").html(gridDiv);
                                        fetchGrid(selectedColumnObj, compId, selectedValue, "assetTreeHierGridId", "PARENT_FLD");
                                    } else if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                                        var clusterDiv = '<div id="clusterSplitter">'
                                                + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                                                + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                                                + '</div>';
                                        $("#dxp1Seconddiv").html(clusterDiv);
                                        fetchCluster(selectedColumnObj, selectedValue, level);
                                    } else if (compType == 'TREE') {
                                        var childTreeDiv = ' <div id="jqxChildExpander">'
                                                + ' <div id="expanderChildDesc" class="visionTreeDescription"></div>'
                                                + ' <div style="border: none;" id="jqxChildTreeDropdown" class="visionTreeDropDown" ></div>'
                                                + ' <div style="overflow: hidden;" id="jqxChildTreeDiv">'
                                                + '<div style="border: none;" id="jqxChildTree"></div>'
                                                + '</div>'
                                                + '</div>';
                                        $("#dxp1Seconddiv").html(childTreeDiv);
                                        fetchChildTree('jqxTree', selectedColumnObj, selectedValue, level);
                                    }
                                }

                            }
                        }


                    });
                    $('#' + treeId).on('mousedown', function (event) {
                        var target = $(event.target).parents('li:first')[0];
                        rightClick = isRightClick(event);
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
                            if (selectedItem.level >= 3) {
                                var rightClickFunc = "";
                                if (columnsObj != null && !jQuery.isEmptyObject(columnsObj))
                                {
                                    var colObj = columnsObj['0'];
                                    if (colObj != null && !jQuery.isEmptyObject(colObj))
                                    {
                                        var initParamObj = colObj['TREE_INIT_PARAMS'];
                                        if (initParamObj != null && !jQuery.isEmptyObject(initParamObj))
                                        {
                                            var rightClickButtomMethodParams = initParamObj['uuu_rightClickButtomMethodParams'];
                                            if (rightClickButtomMethodParams != null && rightClickButtomMethodParams != '' && rightClickButtomMethodParams != undefined)
                                            {
                                                var rightClickButtomMethodParamsObj = rightClickButtomMethodParams.split(":");
                                                if (rightClickButtomMethodParamsObj != null && !jQuery.isEmptyObject(rightClickButtomMethodParamsObj))
                                                {
                                                    $.each(rightClickButtomMethodParamsObj, function (i, rightClickValue) {
                                                        if (rightClickValue != null && rightClickValue != '' && rightClickValue != undefined) {
                                                            var rightClickValueObj = rightClickValue.split(";");
                                                            if (rightClickValueObj != null && !jQuery.isEmptyObject(rightClickValueObj)) {
                                                                var rightClickButtonType = rightClickValueObj[0];
                                                                var rightClickButtonMethodName = rightClickValueObj[1];
                                                                var rightClickButtonMethodParams = rightClickValueObj[2];
                                                                if (rightClickButtonType != null && rightClickButtonType != '' && rightClickButtonType != undefined
                                                                        && rightClickButtonMethodName != null && rightClickButtonMethodName != '' && rightClickButtonMethodName != undefined
                                                                        && rightClickButtonMethodParams != null && rightClickButtonMethodParams != '' && rightClickButtonMethodParams != undefined) {
                                                                    var paramsArray = rightClickButtonMethodParams.split(',');
                                                                    var formattedParams = paramsArray.map(function (param) {
                                                                        return "'" + param.trim() + "'";
                                                                    }).join(',');
                                                                    rightClickFunc += "" + rightClickButtonType + ":" + rightClickButtonMethodName + "(this,'" + treeId + "','" + selectedItem.value + "'," + formattedParams + ");";
                                                                }
                                                            }
                                                        }

                                                    })
                                                }
                                            }
                                        }
                                    }

                                }
                                var menuItems = "";
                                var menuHeight;
                                if (rightClickFunc != null) {
                                    var options = rightClickFunc.split(";");
                                    menuHeight = options.length;
                                    $.each(options, function (index) {
                                        var menuItem = options[index].split(":")[0];
                                        var funcName = options[index].split(":")[1];
                                        if (menuItem != null && menuItem != '' && menuItem != undefined
                                                && funcName != null && funcName != '' && funcName != undefined)
                                        {
                                            menuItems += "<li onclick=\"" + funcName + "\">" + menuItem + "</li>"
                                        }

                                    });
                                }
                                $("#jqxMenu").remove();
                                $("body").append("<div id='jqxMenu' class='jqxMenuClass'><ul></ul></div>");
                                $("#jqxMenu ul").html(menuItems);
                                var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup', theme: 'energyblue'}); // ravi start
                                var scrollTop = $(window).scrollTop();
                                var scrollLeft = $(window).scrollLeft();
                                contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                                rightClick = false;
                                //$('#' + treeId).jqxTree('selectItem', null);
                                return true;
                            } else {
                                rightClick = false;
                                $('#' + treeId).jqxTree('selectItem', null);
                                return false;
                            }


                        } else {
                            var rightItem = $(event.target).closest('li');
                            $('#' + treeId).jqxTree('selectItem', rightItem[0]);
                        }
                    });


                },
                error: function (e) {
                    console.log(e);
                    sessionTimeout(e);
                    stopLoader();
                }
            });
        } else {
            stopLoader();
        }
        $('#' + treeDivId).jqxTree('refresh');


    });

}
function fetchGrid(selectedColumnObj, gridId, selectedValue, divId, colName) {
    showLoader();
    var roleId = $("#rolehid").val();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': gridId,
            'roleId': roleId,
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var paramArr = [];
            if (selectedValue != null && selectedValue != '' && selectedValue != undefined) {
                var paramObj = {};
                paramObj.column = colName;
                paramObj.value = selectedValue;
                paramObj.operator = "IN";
                paramObj.symbol = "IN";
                paramArr.push(paramObj);
            }
            gridConfig(response, 0, paramArr, divId);

        }, error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
        }

    });
}



async function copyHierarchyWIthNewMocr(treeDivId, dataGridId, colName, formGridId) {
    try {
        showLoader();
        const checkedItems = $("#" + treeDivId).jqxTree('getCheckedItems');
        var checkedItemsArr = [];
        var checkedItemsObjArr = [];
        if (checkedItems != null && !jQuery.isEmptyObject(checkedItems) && checkedItems.length == 1) {
            $.each(checkedItems, function (i, val) {
                if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
                {
                    checkedItemsArr.push(val['value']);
                    var checkItemsObj = {};
                    checkItemsObj['label'] = val['label'];
                    checkItemsObj['value'] = val['value'];
                    checkedItemsObjArr.push(checkItemsObj);
                }
            });
            populateMOCRgridForm(treeDivId, dataGridId, "Y", checkedItemsArr, dataGridId, colName, formGridId);
        } else {
            stopLoader();
        }

    } catch (error) {
        console.error("Error copying asset hierarchy data:", error);
    }
}

function copyHierarchyWithNewMOCRDetails(treeDivId, copyDataObj, dataGridId, colName, navgnGridId, checkedItemsArr)
{
    var columnsObj = $("#" + treeDivId).attr("columnsObj");
    if (checkedItemsArr != null && !jQuery.isEmptyObject(checkedItemsArr)) {
        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'getCopyNewLocationAssetHierData',
            data: {
                'parentValue': checkedItemsArr[0],
                'columnsObj': columnsObj
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response))
                {
                    $("#dxpMOCRSearchButtonsDiv").html("");
                    $("#dxpMOCRTreeDiv").html("");
                    $("#dxpMOCRTreeGridDiv").html("");
                    var $tabsElement = $('#dxpMOCRSearchTreeWithGrid');
                    $tabsElement.hide();
                    var treeData = response['treeData'];
                    //var treeGridParamsData = response['treeGridParamsData'];
                    // var copyTreeId = "dxpMOCRCopyTreeDiv_Copy_Id";
                    showSelectedTabContent(null, 'dxpMOCRCopyTreeWithGrid', 'dxpMOCRCopyTreeWithGridContent', "MOCR Copy Tree View", 'N', 'Y');
                    $('#dxpMOCRCopyTreeWithGridSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0,
                        panels: [{size: '25%', min: 150, resizable: true}, {size: '74%', min: 150, resizable: true}]
                    });
                    localStorage.removeItem("navgnGridId");
                    localStorage.setItem("navgnGridId", navgnGridId);
                    localStorage.removeItem("copyMOCRTreeDataObj");
                    localStorage.setItem("copyMOCRTreeDataObj", JSON.stringify(copyDataObj));
                    localStorage.removeItem("treeDivIdColumnsObj");
                    localStorage.setItem("treeDivIdColumnsObj", columnsObj);
//                    $("#dxpMOCRCopyValidateButtonsDivId").html("<div id='showFlocMsgDivId' style='display:none'></div>"
//                            + "<button id='checkCopyFlocButtonId' onclick=checkAndCopyFloc('" + copyTreeId + "')>Validate</button>");
//
//                    $("#dxpMOCRCopyValidateButtonsDivId").append("<button id='createCopyMOCRButtonId' style='display:none' onclick=copyCreateMOCRHierarchy('" + copyTreeId + "','" + instance + "','" + plant + "','" + dataGridId + "','" + navgnGridId + "')>Create MOCR</button>");
                    copyHierarchyAssetTree("dxpMOCRCopyTreeDiv", treeData, "");
                    setTimeout(function () {
                        const items = $("#dxpMOCRCopyTreeDiv_Copy_Id").jqxTree('getItems');
                        var checkedItemsArr = [];
//                        var labels = items.map(item => item.label);
//                        for (var label of labels)
//                        {
//                            var idMatch = label.match(/id='([^']+)'/);
//                            var labelId = idMatch[1];
//                            var erpNo = $("#" + labelId).attr("data-erp_no");
//                            checkedItemsArr.push(erpNo);
//                        }
                        var values = items.map(item => item.value);
                        for (var value of values)
                        {
                            checkedItemsArr.push(value);
                        }
                        var checkedItemsArrStr = checkedItemsArr.join(', ');
                        fetchGrid({}, dataGridId, checkedItemsArrStr, "dxpMOCRCopyTreeFormDiv", colName);
                    }, 3000);
                }

            }, error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
            }

        });
    }
}

function copyCreateMOCRHierarchy1(copyTreeId, instance, plant, gridId, navgnGridId)
{
    var firstRowData = $("#" + gridId).jqxGrid('getrowdata', 0);
    var newFloc = firstRowData['NEW_LOCATION'];
    const items = $("#" + copyTreeId).jqxTree('getItems');
    var checkedItemsObj = {};
    var labels = items.map(item => item.label);
    for (var label of labels)
    {
        var idMatch = label.match(/id='([^']+)'/);
        var labelId = idMatch[1];
        var recordNo = $("#" + labelId).attr("data-record_no");
        var erpNo = $("#" + labelId).attr("data-erp_no");
        checkedItemsObj[recordNo] = erpNo;
    }
    $("#dxpMOCRCopyTreeDiv").empty();
    $("#dxpMOCRCopyTreeFormDiv").empty();
    $("#dxpMOCRCopyValidateButtonsDivId").empty();
    createHierarchyMoCR(checkedItemsObj, "dxpMOCRCopyTreeDiv", newFloc, instance, plant, navgnGridId);
}

function copyHierarchyAssetTree(treeDivId, newTreeData, uniqueId)
{
    var copyTreeId = treeDivId + "_Copy_Id";
    $("#" + treeDivId).html("<div id='" + copyTreeId + "' class='dxpAssetTreeClass'></div>");
    var columnsObj = localStorage.getItem("treeDivIdColumnsObj");
    $("#" + copyTreeId).attr("columnsObj", columnsObj);
    var treeConfigObj = {};
    treeConfigObj.source = newTreeData;
    treeConfigObj.width = '390px';
    treeConfigObj.height = 'calc(100vh - 55px)';
    treeConfigObj.allowDrag = false;
    treeConfigObj.allowDrop = false;
//    window.dragSource = null;
//    treeConfigObj.dragStart = function (dragItem) {
//        var tree = $('#' + copyTreeId).jqxTree('getInstance');
//        var dragItemElement = document.getElementById(dragItem.id);
//        window.dragSource = {
//            item: dragItem,
//            parent: dragItem.parentElement ? tree.getItem(dragItem.parentElement) : null,
//            wasExpanded: tree.isExpanded(dragItemElement),
//            index: $(dragItemElement).index()
//        };
//        return true;
//    };
//    treeConfigObj.dragEnd = function (dragItem, dropItem, args, dropPosition, tree)
//    {
//        var dragParentItem = dragItem.parentElement;
//        var $dragParentItem = $(dragParentItem);
//        showAssetTreeMoveCopyDialog(dragItem, dropItem, dropPosition, tree, copyTreeId, $dragParentItem, uniqueId);
//        return true;
//    };
    $("#" + copyTreeId).jqxTree(treeConfigObj);
    setTimeout(function () {
        $("#" + copyTreeId).jqxTree('expandAll');
    }, 100);

    $('#' + copyTreeId).on('mousedown', function (event) {
        var target = $(event.target).parents('li:first')[0];
        var rightClick = isRightClick(event);
        if (rightClick && target != null) {
            $('#' + copyTreeId).jqxTree('selectItem', target);
            var selectedItem = $('#' + copyTreeId).jqxTree('getSelectedItem');
            var selectedParentItem = {};
            try {
                selectedParentItem = $('#' + copyTreeId).jqxTree('getItem', selectedItem.parentElement);
                if (selectedParentItem != null) {
                    selectedParentItem = $('#' + copyTreeId).jqxTree('getItem', selectedParentItem.parentElement);
                }
            } catch (e) {
            }
            if (selectedItem.level <= -2) {
                var rightClickFunc = "Add:addAssetTreeNodes(this,'" + copyTreeId + "','" + selectedItem.value + "');"
                        + "Delete:deleteAssetTreeNodes(this,'" + copyTreeId + "','" + selectedItem.value + "');"
                var menuItems = "";
                var menuHeight;
                if (rightClickFunc != null) {
                    var options = rightClickFunc.split(";");
                    menuHeight = options.length;
                    $.each(options, function (index) {
                        var menuItem = options[index].split(":")[0];
                        var funcName = options[index].split(":")[1];
                        if (menuItem != null && menuItem != '' && menuItem != undefined
                                && funcName != null && funcName != '' && funcName != undefined)
                        {
                            menuItems += "<li onclick=\"" + funcName + "\">" + menuItem + "</li>"
                        }

                    });
                }
                $("#jqxMenu").remove();
                $("body").append("<div id='jqxMenu' class='jqxMenuClass'><ul></ul></div>");
                $("#jqxMenu ul").html(menuItems);
                var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup', theme: 'energyblue'}); // ravi start
                var scrollTop = $(window).scrollTop();
                var scrollLeft = $(window).scrollLeft();
                contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                return true;
            } else {
                return false;
            }
            rightClick = false;

        }
    });
}
async function buildTree(items, flag) {
    const root = {};
    let i = 0;

    for (let item of items) {
        const levels = item.value.split(':');
        let current = root;

        for (let index = 0; index < levels.length; index++) {
            const level = levels[index];

            const isLastLevel = index === levels.length - 1;
            const nodeLabel = isLastLevel ? item.label : level;

            if (!current[level]) {
                current[level] = {
                    label: nodeLabel,
                    value: (
                            flag != null && flag !== '' && flag !== undefined && flag === 'Y'
                            ? (i === 0 && index === 0 ? level : item.value)
                            : item.value
                            ),
                    items: {}
                };
            }
            current = current[level].items;
        }
        i++;
    }

    async function objectToArray(obj) {
        const result = [];
        for (const key in obj) {
            const node = obj[key];
            const newNode = {
                label: node.label,
                value: node.value
            };
            const children = await objectToArray(node.items);
            if (children.length) {
                newNode.items = children;
            }
            result.push(newNode);
        }
        return result;
    }

    return await objectToArray(root);
}
async function buildTree1(items, flag) {
    const root = {};
    var i = 0;
    for (let item of items) {
        const levels = item.split(':');
        let current = root;

        for (let index = 0; index < levels.length; index++) {
            const level = levels[index];
            // await new Promise(resolve => setTimeout(resolve, 100)); // Simulate a small delay
            if (!current[level]) {
                current[level] = {
                    label: level,
                    value: ((flag != null && flag != '' && flag != undefined && flag == 'Y') ? ((i == 0 && index == 0) ? level : item) : item),
                    items: {}
                };
            }
            current = current[level].items;
        }
        i++;
    }

    async function objectToArray(obj) {
        const result = [];
        for (const key in obj) {
            const node = obj[key];
            const newNode = {label: node.label, value: node.value};
            const children = await objectToArray(node.items);
            if (children.length)
                newNode.items = children;

            result.push(newNode);
        }
        return result;
    }
    return await objectToArray(root);
}

function showAssetTreeMoveCopyDialog(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem) {
    var dialogHtml = "<div class='treeJqxDialogClass'>"
            + "<h3 class='jqxRDSTreeDragAndDropItemTextClass'>Action for " + dragItem.label + "</h3>"
            + "<p class='jqxRDSTreeDragAndDropItemMessageClass'>Do you want to Move or Copy this?</p>"
            + "</div>";


    var min = 100;  // Minimum value (inclusive)
    var max = 100000; // Maximum value (inclusive)
    var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    var dialogId = "dialog" + randomInt;
    $("body").append("<div id='" + dialogId + "'></div>");
    $("#" + dialogId).html(dialogHtml);
    $("#" + dialogId).dialog({
        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
        modal: true,
        height: 230,
        width: 600,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Move'] != null ? labelObject['Move'] : 'Move'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    assetTreePerformMoveAction(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
                    //$("#dialog6").html("");
                    //$("#dialog").dialog('close');
                    //$("#dialog6").dialog('destroy');
                    $(this).html("");
                    $(this).dialog('close');
                    $(this).dialog('destroy');



                }
            },
            {
                text: (labelObject['Copy'] != null ? labelObject['Copy'] : 'Copy'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    var dragItemLabel = dragItem.label;
                    var dragItemIdMatch = dragItemLabel.match(/id='([^']+)'/);
                    var dragItemLabelId = dragItemIdMatch[1];
                    var dragItemType = $("#" + dragItemLabelId).attr("data-object_type");
                    if (dragItemType != null && dragItemType != '' && dragItemType != undefined && dragItemType == 'FLOC')
                    {
                        getAllFunctionalLocationsPerformCopyAction(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
                    } else {
                        assetTreePerformCopyAction(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
                    }
                    $(this).html("");
                    $(this).dialog('close');
                    $(this).dialog('destroy');


                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    //revertCopyorMoveAssetHierItem(treeDivId, dragItem);
//                    var dragItemLabel = dragItem.label;
//                    var dragItemIdMatch = dragItemLabel.match(/id='([^']+)'/);
//                    var dragItemLabelId = dragItemIdMatch[1];
//                    var mocrNumber = $("#" + dragItemLabelId).attr("data-mocr_number");
//                    refreshMocrCreateAssetTreeobject(treeId, treeDivId, mocrNumber);
                    $(this).html("")
                    $(this).dialog('close');
                    $(this).dialog('destroy');
                }
            }
        ],
        open: function () {
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");

        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            var dragItemLabel = dragItem.label;
            var dragItemIdMatch = dragItemLabel.match(/id='([^']+)'/);
            var dragItemLabelId = dragItemIdMatch[1];
            var mocrNumber = $("#" + dragItemLabelId).attr("data-mocr_number");
            refreshMocrCreateAssetTreeobject(treeId, treeDivId, mocrNumber);
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            $("#iframeid").remove();
        }
    });



}

function revertCopyorMoveAssetHierItem(treeDivId, dragItem)
{
    if (window.dragSource) {
        var tree = $('#' + treeDivId).jqxTree('getInstance');
        tree.removeItem(dragItem);
        if (window.dragSource.parent) {
            tree.addTo(window.dragSource.item, window.dragSource.parent);
            tree.expandItem(window.dragSource.parent);
        } else {
            tree.addTo(window.dragSource.item, null);
        }
    }
}

function assetTreePerformCopyAction(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, $dragParentItem, oldNewFlocs) {
    showLoader();
    var dragItemValue;
    var dragItemLabel = dragItem.label;
    var dragItemFullValue = dragItem.value;
    var dropItemValue = dropItem.value;
    var dropItemLabel = dropItem.label;
//    var $elements = $(dragItemLabel);
//    dragItemLabel = $elements.find('span').text();

    var dragItemIdMatch = dragItemLabel.match(/id='([^']+)'/);
    var dragItemLabelId = dragItemIdMatch[1];
    dragItemValue = $("#" + dragItemLabelId).attr("data-RECORD_NO");


    var dropItemIdMatch = dropItemLabel.match(/id='([^']+)'/);
    var dropItemLabelId = dropItemIdMatch[1];
    dropItemValue = $("#" + dropItemLabelId).attr("data-RECORD_NO");
    var mocrNumber = $("#" + dragItemLabelId).attr("data-mocr_number");
    var columnsObj = $("#" + treeDivId).attr("columnsObj");
    var dropErpNo = $("#" + dropItemLabelId).attr("data-erp_no");

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "assetDragandDropTreeCopyData",
        cache: false,
        data: {
            dragItemLabel: dragItemLabel,
            dragItemValue: dragItemValue,
            dropItemValue: dropItemValue,
            actionType: "copy", // Indicates this is a copy operation
            treeId: treeId,
            columnsObj: columnsObj,
            dragItemFullValue: dragItemFullValue,
            mocrNumber: mocrNumber,
            oldNewFlocs: JSON.stringify(oldNewFlocs),
            dropErpNo: dropErpNo,

        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var message = response['Message'];

            if (message) {
                assetPopupEdit("Message", message, treeId, treeDivId, mocrNumber);
            } else
            {
                //revertCopyorMoveAssetHierItem(treeDivId, dragItem);
                refreshMocrCreateAssetTreeobject(treeId, treeDivId, mocrNumber);
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function assetTreePerformMoveAction(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem) {
    showLoader();
    var dragItemValue;
    var dragItemFullValue = dragItem.value;
    var dropItemValue = dropItem.value;
    var dragItemLabel = dragItem.label;
    var dropItemLabel = dropItem.label;
//    var $elements = $(dragItemLabel);
//    dragItemLabel = $elements.find('span').text();

    var dragItemIdMatch = dragItemLabel.match(/id='([^']+)'/);
    var dragItemLabelId = dragItemIdMatch[1];
    dragItemValue = $("#" + dragItemLabelId).attr("data-RECORD_NO");
    var dragItemType = $("#" + dragItemLabelId).attr("data-OBJECT_TYPE");

    var dragParentItem1 = $('#' + treeDivId).jqxTree('getItem', dragParentItem);
    var dragParentItemLabel = dragParentItem1.label;
    var dragParentItemIdMatch = dragParentItemLabel.match(/id='([^']+)'/);
    var dragParentItemLabelId = dragParentItemIdMatch[1];
    var dragParentItemRecordNo = $("#" + dragParentItemLabelId).attr("data-RECORD_NO");
    var dragParentItemErpNo = $("#" + dragParentItemLabelId).attr("data-ERP_NO");


    var dropItemIdMatch = dropItemLabel.match(/id='([^']+)'/);
    var dropItemLabelId = dropItemIdMatch[1];
    dropItemValue = $("#" + dropItemLabelId).attr("data-RECORD_NO");
    var mocrNumber = $("#" + dragItemLabelId).attr("data-mocr_number");
    var columnsObj = $("#" + treeDivId).attr("columnsObj");
    var dropErpNo = $("#" + dropItemLabelId).attr("data-erp_no");
    if (columnsObj != null && columnsObj != '' && columnsObj != undefined)
    {
        var colsObj = JSON.parse(columnsObj);
        if (colsObj != null && !jQuery.isEmptyObject(colsObj))
        {
            var colObj = colsObj['0'];
            if (colObj != null && !jQuery.isEmptyObject(colObj))
            {
                var initParamObj = colObj['TREE_INIT_PARAMS'];
                if (initParamObj != null && !jQuery.isEmptyObject(initParamObj))
                {
                    var allowMoveTypes = initParamObj['uuu_allowMoveTypes'];
                    if (allowMoveTypes != null && !jQuery.isEmptyObject(allowMoveTypes))
                    {
                        if (!(allowMoveTypes.indexOf(dragItemType) > -1))
                        {
                            stopLoader();
                            assetPopupEdit("Message", "Move is not allowed for selected data", treeId, treeDivId, mocrNumber);
                            return;
                        }
                    }
                }
            }

        }
    }
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "assetHierDragandDropTreeMoveData",
        cache: false,
        data: {
            dragItemValue: dragItemValue,
            dropItemValue: dropItemValue,
            dragItemLabel: dragItemLabel,
            actionType: "move", // Add action type parameter
            treeId: treeId,
            columnsObj: columnsObj,
            mocrNumber: mocrNumber,
            dragItemFullValue: dragItemFullValue,
            dragParentItemRecordNo: dragParentItemRecordNo,
            dragParentItemErpNo: dragParentItemErpNo,
            dropErpNo: dropErpNo,
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var message = response['Message'];

            if (message) {
                assetPopupEdit("Message", message, treeId, treeDivId, mocrNumber);
            } else {
                //revertCopyorMoveAssetHierItem(treeDivId, dragItem);
                refreshMocrCreateAssetTreeobject(treeId, treeDivId, mocrNumber);
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });


}

function checkAndCopyFloc(gridId, copyTreeId, flagType, hierType) {
    var items = $("#" + copyTreeId).jqxTree("getItems");
    var oldLocationLabel = items[0]['label'];
    var idMatch = oldLocationLabel.match(/id='([^']+)'/);
    var labelId = idMatch[1];
    var objectType = $("#" + labelId).attr("data-object_type");
    var oldLocation = $("#" + labelId).attr("data-erp_no");
    var lasteditedfield = $("#" + gridId).attr('data-last-ed-field');
    var lasteditedrow = $("#" + gridId).attr('data-last-ed-row');
    $('#' + gridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
//    $("#" + gridId).jqxGrid('endrowedit', 0, false);
    var firstRowData = $("#" + gridId).jqxGrid('getrowdata', 0);
    var newFloc = firstRowData['NEW_ERP_NO'];
    if (objectType != null && objectType != '' && objectType != undefined && objectType == 'FLOC') {
        if (newFloc != null && newFloc != '' && newFloc != undefined) {
            var flocTreeArr = [];
            var flocGridArr = [];
            // if (flagType == 'V') {
            $.each(items, function () {
                var label = this['label'];
                var value = this['value'];
                label = label.replaceAll(oldLocation, newFloc);
                value = value.replaceAll(oldLocation, newFloc);
                if (oldLocation != newFloc) {
                    $('#' + copyTreeId).jqxTree('updateItem', this, {label: label, value: value});
                }
            });

            var flocData = $("#" + gridId).jqxGrid('getrows')
                    .filter(r => r.NODE_TYPE === "FLOC");
            if (flocData != null && !jQuery.isEmptyObject(flocData))
            {
                $.each(flocData, function (i, flocRowData)
                {
                    var rowid = $("#" + gridId).jqxGrid('getrowid', i);
                    var gridOldValue = $("#" + gridId).jqxGrid('getcellvalue', i, 'NEW_ERP_NO');
                    if (gridOldValue != newFloc) {
                        var gridNewValue = gridOldValue.replaceAll(oldLocation, newFloc);
                        $("#" + gridId).jqxGrid('setcellvalue', rowid, 'NEW_ERP_NO', gridNewValue);
                        gridOldValue = gridNewValue;
                    }
                    if (flocGridArr.indexOf(gridOldValue) === -1) { // -1 means value isn't found
                        flocGridArr.push(gridOldValue);
                    }

                });
            }
            // }
            $.each(items, function (i, val) {
                var label = val['label'];
                var labelIds = label.match(/id='([^']+)'/);
                var lblId = labelIds[1];
                var objType = $("#" + lblId).attr("data-object_type");
                if (objType != null && objType != '' && objType != undefined
                        && objType == 'FLOC')
                {
                    var oldLocationNo = $("#" + lblId).attr("data-erp_no");
                    var recordNo = $("#" + lblId).attr("data-record_no");
                    flocTreeArr.push(oldLocationNo);
                }
            });


            if (flocTreeArr != null && !jQuery.isEmptyObject(flocTreeArr)
                    && flocGridArr != null && !jQuery.isEmptyObject(flocGridArr)
                    && flocTreeArr.length > 0
                    && flocGridArr.length > 0
                    // && flocTreeArr.length == flocGridArr.length
                    ) {
                showLoader();
                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: "assetHierValidateData",
                    cache: false,
                    data: {
                        newFloc: JSON.stringify(flocGridArr),
                    },
                    success: function (result, status, xhr) {
                        stopLoader();
                        var response = result;
                        var message = response['Message'];
                        if (message != null && message != '' && message != undefined) {
                            if (flagType != null && flagType != '' && flagType != undefined && flagType == 'C') {
                                if (message.indexOf("No Errors") > -1) {
                                    var checkedItemsObj = {};
                                    var labels = items.map(item => item.label);
                                    for (var label of labels)
                                    {
                                        var idMatch = label.match(/id='([^']+)'/);
                                        var labelId = idMatch[1];
                                        var recordNo = $("#" + labelId).attr("data-record_no");
                                        var erpNo = $("#" + labelId).attr("data-erp_no");
                                        checkedItemsObj[recordNo] = erpNo;
                                    }
                                    var copyDataObjStr = localStorage.getItem("copyMOCRTreeDataObj");
                                    var copyDataObj = {};
                                    if (copyDataObjStr != null && copyDataObjStr != '' && copyDataObjStr != undefined) {
                                        copyDataObj = JSON.parse(copyDataObjStr);
                                        if (hierType != null && hierType != '' && hierType != undefined && hierType == 'SaveModel')
                                        {
                                            saveModelHierarchyMoCR(checkedItemsObj, "dxpMOCRCopyTreeDiv", newFloc, copyDataObj['MODEL_NAME'], copyDataObj['MODEL_DESCRIPTION'], copyDataObj['REQUEST_CATEGORY'], copyDataObj['INSTANCE'], copyDataObj['BUSINESS_UNIT'], localStorage.getItem("navgnGridId"));
                                        } else {
                                            createHierarchyMoCR(checkedItemsObj, "dxpMOCRCopyTreeDiv", newFloc, copyDataObj['INSTANCE'], copyDataObj['BUSINESS_UNIT'], localStorage.getItem("navgnGridId"));
                                        }
                                    }
                                } else {
                                    if (flagType != null && flagType != '' && flagType != undefined && flagType == 'C')
                                    {
                                        message = message + " and Validate again";
                                    }
                                    $("#dialog1").html(message);
                                    $("#dialog1").dialog({resizable: false,
                                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                                        modal: true,
                                        height: 150,
                                        width: 600,
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
                            } else {
                                $("#dialog1").html(message);
                                $("#dialog1").dialog({resizable: false,
                                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                                    modal: true,
                                    height: 150,
                                    width: 600,
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
                    },
                    error: function (e) {
                        console.log(e);
                        sessionTimeout(e);
                        stopLoader();
                    }
                });
            } else {
                showAssetTreeErrorMsg("Error", "<p style='color:red;font-weight:500;margin-bottom:5px;'>Please provide all new Function Locations</p>");
                //showAssetTreeErrorMsg("Message", "It is already existed.Please give new Functional Location");
            }
        } else {
            showAssetTreeErrorMsg("Error", "<p style='color:red;font-weight:500;margin-bottom:5px;'>Please provide new Function Location</p>");
            //showAssetTreeErrorMsg("Message", "It is already existed.Please give new Functional Location");
        }

    } else {
        showAssetTreeErrorMsg("Error", "<p style='color:green;font-weight:500;margin-bottom:5px;'>No Errors. Please proceed to Create MOCR (Multi Object Change Request)</p>");
    }
}


function copyCreateMOCRHierarchy(gridId, copyTreeId, flagType, hierType)
{
    var items = $("#" + copyTreeId).jqxTree("getItems");
    var oldLocationLabel = items[0]['label'];
    var idMatch = oldLocationLabel.match(/id='([^']+)'/);
    var labelId = idMatch[1];
    var objectType = $("#" + labelId).attr("data-object_type");
    if (objectType != null && objectType != '' && objectType != undefined && objectType == 'FLOC') {
        if (flagType != null && flagType != ''
                && flagType != undefined && flagType == 'C') {
            checkAndCopyFloc(gridId, copyTreeId, flagType, hierType);
        }
    } else {
        var checkedItemsObj = {};
        var labels = items.map(item => item.label);
        for (var label of labels)
        {
            var idMatch = label.match(/id='([^']+)'/);
            var labelId = idMatch[1];
            var recordNo = $("#" + labelId).attr("data-record_no");
            var erpNo = $("#" + labelId).attr("data-erp_no");
            checkedItemsObj[recordNo] = erpNo;
        }
        var copyDataObjStr = localStorage.getItem("copyMOCRTreeDataObj");
        var copyDataObj = {};
        if (copyDataObjStr != null && copyDataObjStr != '' && copyDataObjStr != undefined) {
            copyDataObj = JSON.parse(copyDataObjStr);
            if (hierType != null && hierType != '' && hierType != undefined && hierType == 'SaveModel')
            {
                saveModelHierarchyMoCR(checkedItemsObj, "dxpMOCRCopyTreeDiv", "", copyDataObj['MODEL_NAME'], copyDataObj['MODEL_DESCRIPTION'], copyDataObj['REQUEST_CATEGORY'], copyDataObj['INSTANCE'], copyDataObj['BUSINESS_UNIT'], localStorage.getItem("navgnGridId"));
            } else {
                createHierarchyMoCR(checkedItemsObj, "dxpMOCRCopyTreeDiv", "", copyDataObj['INSTANCE'], copyDataObj['BUSINESS_UNIT'], localStorage.getItem("navgnGridId"));
            }
        }
    }
}

function saveHierarchyWithNewMOCRDetails(treeDivId, jsobject, dataGridId, colName, navgnGridId, checkedItemsArr)
{
    var columnsObj = $("#" + treeDivId).attr("columnsObj");
    if (checkedItemsArr != null && !jQuery.isEmptyObject(checkedItemsArr)) {
        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'getModelCopyAssetHierData',
            data: {
                'parentValue': checkedItemsArr[0],
                'columnsObj': columnsObj
            },
            traditional: true,
            cache: false,
            success: function (response) {
                stopLoader();
                if (response != null && !jQuery.isEmptyObject(response))
                {
                    $("#dxpMOCRSearchButtonsDiv").html("");
                    $("#dxpMOCRTreeDiv").html("");
                    $("#dxpMOCRTreeGridDiv").html("");
                    var $tabsElement = $('#dxpMOCRSearchTreeWithGrid');
                    $tabsElement.hide();
                    var treeDataObj = response['treeDataObj'];
                    saveModelHierarchyMoCR(treeDataObj, "dxpMOCRCopyTreeDiv", jsobject['MODEL_NAME'], jsobject['MODEL_DESCRIPTION'], jsobject['REQUEST_CATEGORY'], jsobject['INSTANCE'], jsobject['BUSINESS_UNIT'], navgnGridId);
                }

            }, error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
            }

        });
    }

}

function checkAndCopyFloc1(copyTreeId) {
    var items = $("#" + copyTreeId).jqxTree("getItems");
    var oldLocationLabel = items[0]['label'];
    var idMatch = oldLocationLabel.match(/id='([^']+)'/);
    var labelId = idMatch[1];
    var objectType = $("#" + labelId).attr("data-object_type");
    var oldLocation = $("#" + labelId).attr("data-erp_no");
    var firstRowData = $("#PM_ASSET_TREE_HIER_COPY_GRID_ID").jqxGrid('getrowdata', 0);
    var newFloc = firstRowData['NEW_ERP_NO'];
    if (objectType != null && objectType != '' && objectType != undefined && objectType == 'FLOC') {
        if (newFloc != null && newFloc != '' && newFloc != undefined) {
            showLoader();
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "assetHierValidateData",
                cache: false,
                data: {
                    newFloc: newFloc,
                },
                success: function (result, status, xhr) {
                    stopLoader();
                    var response = result;
                    var message = response['Message'];
                    if (message != null && message != '' && message != undefined) {
                        $("#showFlocMsgDivId").show();
                        $("#showFlocMsgDivId").html(message);
                        $("#createCopyMOCRButtonId").hide();
                        if (message.indexOf("No Errors") > -1) {
                            var items = $('#dxpMOCRCopyTreeDiv_Copy_Id').jqxTree('getItems');
                            $.each(items, function () {
                                var label = this['label'];
                                var value = this['value'];
                                label = label.replaceAll(oldLocation, newFloc);
                                value = value.replaceAll(oldLocation, newFloc);
                                $('#dxpMOCRCopyTreeDiv_Copy_Id').jqxTree('updateItem', this, {label: label, value: value});
                            });
                            $("#createCopyMOCRButtonId").show();
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
            $("#showFlocMsgDivId").show();
            $("#showFlocMsgDivId").html("<p style='color:red;font-weight:500;margin-bottom:5px;'>Please provide new Function Location</p>");
            //showAssetTreeErrorMsg("Message", "It is already existed.Please give new Functional Location");
        }

    } else
    {
        $("#createCopyMOCRButtonId").show();
    }
}

function showAssetTreeErrorMsg(title, msg)
{
    $("#assetErrorDialogId").remove();
    $("body").append("<div id='assetErrorDialogId'></div>");
    $("#assetErrorDialogId").html(msg);
    $("#assetErrorDialogId").dialog({
        title: labelObject[title] != null ? labelObject[title] : title,
        modal: true,
        height: 150,
        width: 600,
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                class: 'rdsMoveCopyButton',
                click: function () {
                    $(this).html("");
                    $(this).dialog('close');
                    $(this).dialog('destroy');

                }
            }
        ],
        open: function () {
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");

        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            $("#iframeid").remove();
        }
    });
}
function showAssetMOCRCreateProcess(title, msg, batchId, gridId, colName, aiFlag, sheetCountObj)
{
    $("#assetErrorDialogId").remove();
    if (aiFlag != null && aiFlag != undefined && aiFlag != '' && aiFlag == 'Y') {
        let tableRows = "";
        if (sheetCountObj && typeof sheetCountObj === 'object') {
            Object.entries(sheetCountObj).forEach(([key, value]) => {
                tableRows += `<tr><td>${key}(s)</td><td>${value}</td></tr>`;
            });
        }
        const tableHtml = `
<div class="aiMocrTableContainer">
    <span class="aiMocrTableHeader">
        <i class="fa fa-info-circle"></i> ${msg}, File contain below details.
    </span>
    <table class="aiMocrValidationTable">
        <tbody>
            ${tableRows}
        </tbody>
    </table>
</div>`;
        defaultAITypingBasedOnResponse(tableHtml);
        setTimeout(function () {
            clearExistingMocrDivs();
            stopaiLoader();
            stopLoader();
            var basicData = {};
            basicData['BATCH_ID'] = batchId;
            basicData['gridId'] = gridId;
            showCopiedMOCRHierForm(basicData, batchId, gridId, "dxpFormContent");
            setTimeout(function () {
                fetchTabData('PM_MASS_DATA_MOCRPROCESS_CREATE');
                getAIContentBasedOnQuery('Choose file to upload', 'Data Imported Successfully in staging area', 'MASSDATAMOCRPROCESSCREATE', "Y", "N", batchId, '', '', '', '', '', '', '', '', '', '', 'AUTOPROCESS');
            }, 12000);

        }, 2000);
    } else {
        $("body").append("<div id='assetErrorDialogId'></div>");
        $("#assetErrorDialogId").html(msg);
        $("#assetErrorDialogId").dialog({
            title: labelObject[title] != null ? labelObject[title] : title,
            modal: true,
            height: 150,
            width: 600,
            fluid: true,
            buttons: [
                {
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    class: 'rdsMoveCopyButton',
                    click: function () {
                        clearExistingMocrDivs();
                        showLoader();
                        var basicData = {};
                        basicData['BATCH_ID'] = batchId;
                        basicData['gridId'] = gridId;
                        showCopiedMOCRHierForm(basicData, batchId, gridId, "dxpFormContent");
                        $(this).html("");
                        $(this).dialog('close');
                        $(this).dialog('destroy');

                    }
                }
            ],
            open: function () {
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");

            },
            beforeClose: function (event, ui)
            {
                $(this).html("");
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
                $("#iframeid").remove();
            }
        });
    }
}

function createHierarchyMoCR(checkedItemsObj, copyTreeDivId, newFloc, instance, plant, gridId)
{
    showLoader();
    var columnsObj = $("#" + copyTreeDivId + "_Copy_Id").attr("columnsObj");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "submitAssetTreeMocrData",
        cache: false,
        contentType: "application/json", // 🔥 This is key
        data: JSON.stringify({
            checkedItemsObj: checkedItemsObj,
            newFloc: newFloc,
            instance: instance,
            plant: plant,
            gridId: gridId,
            columnsObj: columnsObj
        }),
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            if (response != null && !jQuery.isEmptyObject(response)) {
                var batchId = response['batchId'];
                showMOCRProcessMessage("The MOCR process on Copy Hierarchy has been initiated. You will be notified once it is completed.");
                processStepsInterval[batchId] = setInterval(function () {
                    // this will run after every 5 seconds
                    refreshMOCRProcessStatus(batchId);
                }, 500);
            }
//            if (response != null && !jQuery.isEmptyObject(response)) {
//                var message = response['Message'];
//                var mocrNo = response['mocrNo'];
//                var basicData = response['basicData'];
//                var dataField = response['dataField'];
//                if (message != null && message != '' && message != undefined)
//                {
//                    $("#assetChangeReqDialogId").remove();
//                    $("body").append("<div id='assetChangeReqDialogId'></div>");
//                    var divHtml = "<div id='assetChageRequestDivId' class=''>"
//                            + "<h6 class='AssetMOCRChangeRequestSpanClass'>" + message + "</h6>"
//                            + "</div>";
//                    $("#assetChangeReqDialogId").html(divHtml);
//                    $("#assetChangeReqDialogId").dialog({
//                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
//                        modal: true,
//                        height: 180,
//                        width: 600,
//                        fluid: true,
//                        buttons: [
//                            {
//                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                class: 'rdsMoveCopyButton',
//                                click: function () {
//                                    $("#" + gridId).remove();
//                                    $("body").append("<div id='" + gridId + "'></div>")
//                                    $("#" + gridId).attr("data-gridResultObj", JSON.stringify(basicData));
//                                    var gridInitParamObj = basicData['gridInitParamObj'];
//                                    var treeId = gridInitParamObj['uuu_mocrTreeId'];
//                                    getMocrCreateAssetTreeobject(treeId, "dxpMOCRPendingTreeDiv", mocrNo, dataField, basicData, gridId, "N");
//
//
//
//                                    // navigateToMOCRForm(dataField, basicData, 'form', gridId, "", 0, "N", "", mocrNo);
//                                    $(this).html("");
//                                    $(this).dialog('close');
//                                    $(this).dialog('destroy');
//
//                                }
//                            }
//                        ],
//                        open: function () {
//                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
//                            $(".visionHeaderMain").css("z-index", "999");
//                            $(".visionFooterMain").css("z-index", "999");
//
//                        },
//                        beforeClose: function (event, ui)
//                        {
//                            $(this).html("");
//                            $(".visionHeaderMain").css("z-index", "99999");
//                            $(".visionFooterMain").css("z-index", "99999");
//                            $("#iframeid").remove();
//                        }
//                    });
//                }
//
//            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });

}



function getMOCRHierData(id, mocrNo, itemType)
{
    showLoader();
    if (itemType == 'MOCR') {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getCopiedAssetHierData",
            cache: false,
            data: {
                erpNo: mocrNo,
            },
            success: function (result, status, xhr) {
                stopLoader();
                var response = result;
                var treeData = response['treeData'];
                if (treeData != null && !jQuery.isEmptyObject(treeData))
                {
                    copyHierarchyAssetTree(id, treeData, "");
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

function showCopiedMOCRHierForm(basicData, recordNo, gridId, divId, role, domain, validateFlag)
{
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getDXPSelectedAssetTreeForm",
        cache: false,
        data: {
            basicData: JSON.stringify(basicData),
            gridId: gridId,
            recordNo: recordNo,
            role: role,
            domain: domain
        },
        success: function (response, status, xhr) {
            showLoader();
            var basicData = response['basicData'];
            var gridObj = response['gridObj'];
            var hrefColumn = response['hrefColumn'];
            if (basicData != null && !jQuery.isEmptyObject(basicData)
                    && gridObj != null && !jQuery.isEmptyObject(gridObj))
            {
                setTimeout(function () {
                    showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent', 'View MOCR Form', 'N');
                    var $tabsElement = $('#dxpMOCRSearchTreeWithGrid');
                    $tabsElement.hide();
                    var gridInitParamObj = gridObj['gridInitParamObj'];
                    if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj))
                    {
                        var batchInd = gridInitParamObj['uuu_BatchInd'];
                        var massValidateComment = gridInitParamObj['uuu_ValidateComment'];
                        var tableName = gridInitParamObj['massViewName'];
                        $('#batchIndicator').val(batchInd);
                        $('#massValidateComment').val(massValidateComment);
                        $('#tableName').val(tableName);
                    }
                    showCopyNavigateToForm(hrefColumn, basicData, 'form', gridId, "", 0, "N", gridObj, divId, validateFlag);
                }, 500);
            }


        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}




function assetPopupEdit(column, cellValue, treeId, treeDivId, mocrNumber) {
    if (true) {
        var message = cellValue;
        var setWidth = dialogWidthResize(message, setWidth);
        $("#dialog1").dialog({resizable: false,
            modal: true,
            title: column,
            width: dialogWidthResize(message, setWidth),
            height: 'auto',
            minHeight: 'auto',
            maxHeight: 250,
            fluid: true,
            buttons: {
                Ok: function () {
                    refreshMocrCreateAssetTreeobject(treeId, treeDivId, mocrNumber);
                    $(this).html("");
                    try {
                        $(this).dialog("destroy");
                    } catch (e) {

                    }
                    try {
                        $(this).dialog("close");
                    } catch (e) {

                    }


                }
            },
            open: function () {
                $(this).html(cellValue);
                $(this).closest(".ui-dialog").addClass("cellValuePopup");
                $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {

            }
        }); //end confirm dialog


        console.log(column + " : " + cellValue);
    }

}
function assetWfPopupEdit(column, cellValue) {
    if (true) {


        var message = cellValue;
        var setWidth = dialogWidthResize(message, setWidth);
//        showErrorPopupMessage(message, column, setWidth);
        $("#dialog1").dialog({resizable: false,
            modal: true,
            title: column,
            width: dialogWidthResize(message, setWidth),
            height: 'auto',
            minHeight: 'auto',
            maxHeight: 250,
            fluid: true,
            buttons: {
                Ok: function () {
                    $(this).html("");

                    try {
                        $(this).dialog("destroy");
                    } catch (e) {

                    }
                    try {
                        $(this).dialog("close");
                    } catch (e) {

                    }
                    $('#dxpGridTab img').click();
                    $('#dxp1TabsWithGrid img').click();

                }
            },
            open: function () {
                $(this).html(cellValue);
                $(this).closest(".ui-dialog").addClass("cellValuePopup");
                $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {

            }
        }); //end confirm dialog


        console.log(column + " : " + cellValue);
    }

}


function deleteAssetTreeNodes($this, treeId, treeDivId, selectedValue, fromType, recordNo, mocrNo, erpNo)
{
    var item = $('#' + treeDivId).jqxTree('getSelectedItem');
    var itemData = $('#' + treeDivId).jqxTree('getItem', item);
    // Get the parent item
    var parentItem = $('#' + treeDivId).jqxTree('getItem', item.parentElement);
    var parentItemLabel = parentItem.label;
    var parentItemIdMatch = parentItemLabel.match(/id='([^']+)'/);
    var parentItemLabelId = parentItemIdMatch[1];
    var parentItemRecordNo = $("#" + parentItemLabelId).attr("data-RECORD_NO");
    var parentItemErpNo = $("#" + parentItemLabelId).attr("data-ERP_NO");
    if (itemData) {
        showLoader();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "removeAssetTreeData",
            cache: false,
            data: {
                removeVal: selectedValue,
                treeId: treeId,
                recordNo: recordNo,
                fromType: fromType,
                mocrNo: mocrNo,
                erpNo: erpNo,
                parentItemRecordNo: parentItemRecordNo,
                parentItemErpNo: parentItemErpNo
            },
            success: function (result, status, xhr) {
                stopLoader();
                var response = result;
                if (response != null && !jQuery.isEmptyObject(response)) {
                    var message = response['Message'];
                    var flag = response['flag'];
                    if (flag)
                    {
                        $("#assetAddDataDialogId").remove();
                        $("body").append("<div id='assetAddDataDialogId'></div>");
                        $("#assetAddDataDialogId").html(message);
                        $("#assetAddDataDialogId").dialog({
                            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                            modal: true,
                            height: 140,
                            width: 600,
                            fluid: true,
                            buttons: [
                                {
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    class: 'rdsMoveCopyButton',
                                    click: function () {
                                        refreshMocrCreateAssetTreeobject(treeId, treeDivId, mocrNo);
                                        $(this).html("");
                                        $(this).dialog('close');
                                        $(this).dialog('destroy');

                                    }
                                }
                            ],
                            open: function () {
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");

                            },
                            beforeClose: function (event, ui)
                            {
                                $(this).html("");
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                                $("#iframeid").remove();
                            }
                        });
                    } else {
                        $("#assetAddDataErrorDialogId").remove();
                        $("body").append("<div id='assetAddDataErrorDialogId'></div>");
                        $("#assetAddDataErrorDialogId").html(message);
                        $("#assetAddDataErrorDialogId").dialog({
                            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                            modal: true,
                            height: 140,
                            width: 600,
                            fluid: true,
                            buttons: [
                                {
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    class: 'rdsMoveCopyButton',
                                    click: function () {
                                        $(this).html("");
                                        $(this).dialog('close');
                                        $(this).dialog('destroy');

                                    }
                                }
                            ],
                            open: function () {
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");

                            },
                            beforeClose: function (event, ui)
                            {
                                $(this).html("");
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                                $("#iframeid").remove();
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
}

function createMOCRFloc($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo)
{
    var details = "{\"buttonValue\":\"Register\",\"baskettype\":\"New_Registrations\",\"gridId\":\"" + gridId + "\",\"mocrNo\":\"" + mocrNo + "\"}";
    navigateToMOCRAssetRegistrationForm(details, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo);
}
function createMOCREquipment($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo)
{
    var details = "{\"buttonValue\":\"Register\",\"baskettype\":\"New_Registrations\",\"gridId\":\"" + gridId + "\",\"mocrNo\":\"" + mocrNo + "\"}";
    navigateToMOCRAssetRegistrationForm(details, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo);
}
function addAssetToMOCR(gridId)
{
    var result = "     <section class=\"gridareaSection\">"
            + "        <div class=\"gridareaContainer-section container-fluid\">"
            + "            <div class=\"row\">"
            + "                <div class=\"col-12\">"
            + "                    <div class=\"card\" id=\"showdynamicGridWrapper\">"
            + "                        <div class=\"card-header\">"
            //+ "                            <h4 id='fioriGridTabTitle'>" + firstTabTitle + "</h4>"
            + "                        </div>"
            + "                        <div class=\"card-body\">"
            + "                            <div class=\"dynamicGridID\">"
            + "                                <div id='jqxWidget'>"
            + "                                    <div id=\"dxpFioriGridContent\"></div>"
            + "                                </div>"
            + "                            </div>"
            + "                        </div>"
            + "                    </div>"
            + "                </div>"
            + "            </div>"
            + "        </div>"
            + "    </section>";
    $("#dxp2FioriTabsWithGridContent").html(result);
    // $("#showdynamicGridWrapper .card-header").html("<div id ='gridUI5Filter_" + gridId + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + gridId+ "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div><div id='submitDropdown" + gridId + "' class='visionGenericTabSubmit'></div><div id='exportDropdown" + gridId + "' class='visionGenericTabExport'></div></div></div></div></div>");
    // $("#gridUI5Filter_" + gridId).css("display", "none");
    // $("#dxpFioriGridContent").html("<div id='" + gridId + "'></div>");
    getMaterialComponentGrid("GRID", gridId, '', 'GRID');
    // getUI5FilterGridForm(gridId, null, 'GRID', {});
}


//somanth code
function expandAssetHierDataWithGrid(treeDivId, gridId, gridDivId)
{
    showLoader();
    var tree = $('#' + treeDivId);
    var checkedItems = tree.jqxTree('getCheckedItems');
    var checkedVal = '';
    var checkedLabel = '';
    var item;
    var itemType;
    var basicData = {};
    var columnsObj = $("#" + treeDivId).attr("columnsObj");
    if (checkedItems != null && !jQuery.isEmptyObject(checkedItems) && checkedItems.length == 1) {
        $.each(checkedItems, function (i, val) {
            if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
            {
                item = val;
                checkedVal = val['value'];
                checkedLabel = val['label'];
                var idMatch = checkedLabel.match(/id='([^']+)'/);
                var labelId = idMatch[1];
                gridId = $("#" + labelId).attr("data-grid_id");
                itemType = $("#" + labelId).attr("data-object_type");
                var instance = $("#" + labelId).attr("data-instance");
                var businessUnit = $("#" + labelId).attr("data-business_unit");
                var recordNo = $("#" + labelId).attr("data-record_no");
                var erpNo = $("#" + labelId).attr("data-erp_no");
                var conceptId = $("#" + labelId).attr("data-concept_id");
                basicData['CONCEPT_ID'] = conceptId;
                basicData['INSTANCE'] = instance;
                basicData['BUSINESS_UNIT'] = businessUnit;
                basicData['RECORD_NO'] = recordNo;
                basicData['ERP_NO'] = erpNo;
                basicData['NODE_TYPE'] = itemType;
                basicData['gridId'] = gridId;
            }
        });
    }
    if (itemType != null && itemType != '' && itemType != undefined) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "expandAssetHierData",
            cache: false,
            data: {
                checkedVal: checkedVal,
                'gridId': gridId,
                'columnsObj': columnsObj
            },
            success: function (result, status, xhr) {
                stopLoader();
                var response = result;
                var treeData = response['treeData'];
                var gridObj = response['gridObj'];
                var hrefColumn = response['hrefColumn'];
                if (treeData != null && !jQuery.isEmptyObject(treeData))
                {
                    var parentNode = $("#" + treeDivId).jqxTree('getItem', item);
                    if (parentNode != null) {
                        // Remove existing children under the parent node
                        var $element = $(parentNode['element']);
                        var children = $element.find('ul:first').children();
                        for (var i = 0; i < children.length; i++) {
                            $("#" + treeDivId).jqxTree('removeItem', children[i]);
                        }
                    }
                    var $item = $(item.element);
                    $("#" + treeDivId).jqxTree("addTo", treeData, $item[0]);
                    $("#" + treeDivId).jqxTree("expandItem", $item[0]);
                    try {
                        setTimeout(function () {
                            $("#dxpFormContent").empty();
                            var $tabsElement = $('#dxpFromTab');
                            $tabsElement.hide();
                        }, 200);
                    } catch (e)
                    {

                    }
                    if (!(gridDivId != null && gridDivId != '' && gridDivId != undefined)) {
                        gridDivId = 'dxpMOCRTreeGridDiv';
                    }
                    showNavigateToForm(hrefColumn, basicData, 'form', gridId, "", 0, "N", gridObj, gridDivId);
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

function showNavigateToForm(hrefColumn, basicData, type, gridId, tabId, tabIndex, showTabFlag, gridObj, divId)
{
    $("#dxpMOCRTreeGridDiv").empty();
    $("#dxpMOCRTreeGridDiv").append("<div id='" + gridId + "'></div>");
    $("#hrefColumn").val(hrefColumn);
    $("#" + gridId).attr('data-gridResultObj', JSON.stringify(gridObj));
    navigateToForm(hrefColumn, basicData, type, gridId, "", 0, showTabFlag, divId);
}
function showCopyNavigateToForm1(hrefColumn, basicData, type, gridId, tabId, tabIndex, showTabFlag, gridObj, divId)
{
    $("#" + divId).empty();
    $("#" + divId).append("<div id='" + gridId + "'></div>");
    $("#hrefColumn").val(hrefColumn);
    $("#" + gridId).attr('data-gridResultObj', JSON.stringify(gridObj));
    navigateToForm(hrefColumn, basicData, type, gridId, "", 0, showTabFlag, divId);
}
function showCopyNavigateToForm(hrefColumn, basicData, type, gridId, tabId, tabIndex, showTabFlag, gridObj, divId, validateFlag)
{
    $("#" + gridId).remove();
    $("body").append("<div id='" + gridId + "'></div>");
    $("#hrefColumn").val(hrefColumn);
    $("#" + gridId).attr('data-gridResultObj', JSON.stringify(gridObj));
    $("#mastergridid").val(gridId);
    navigateToForm(hrefColumn, basicData, type, gridId, "", 0, showTabFlag, divId, validateFlag);
}

function expandAssetHierDataWithGrid1(id, treeId)
{
    var tree = $('#' + id);
    var checkedItems = tree.jqxTree('getCheckedItems');
    $.each(checkedItems, function (i, val) {
        if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
        {
            var gridDiv = '<div id="assetTreeHierGridId" class="assetTreeHierGridClass"></div>';
            $("#dxpMOCRTreeGridDiv").html(gridDiv);
            fetchGrid({}, 'PM_ASSET_TREE_HIER_GRID_ID', val['value'], "assetTreeHierGridId", "PARENT_FLD");
        }
    });
    expandAssetHierData(id, treeId);
}




function expandAppAssetHierDataWithGrid(id, treeId)
{
    var tree = $('#' + id);
    var checkedItems = tree.jqxTree('getCheckedItems');
    $.each(checkedItems, function (i, val) {
        if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
        {
            var gridDiv = '<div id="assetTreeHierGridId" class="assetTreeHierGridClass"></div>';
            $("#dxp1Seconddiv").html(gridDiv);
            fetchGrid({}, 'PM_ASSET_TREE_HIER_GRID_ID_APP', val['value'], "assetTreeHierGridId", "PARENT_FLD_NAME");
        }
    });
    expandAssetHierData(id, treeId);
}

function expandAssetHierData(id, treeId) {
    var tree = $('#' + id);
    tree.on('added', function (event) {
        var checkedItems = tree.jqxTree('getCheckedItems');
        checkedItems.forEach(function (item) {
            expandAllChildrenIfExist(tree, item);
        });
    });
    var checkedItems = tree.jqxTree('getCheckedItems');
    checkedItems.forEach(function (item) {
        expandAllChildrenIfExist(tree, item);
    });
    console.log("Expanded items:", checkedItems);
}



function expandAllChildrenIfExist(tree, item) {
    tree.jqxTree('expandItem', item);
    var childElements = $(item.element).children('ul').children('li');
    if (childElements.length > 0) {
        childElements.each(function () {
            var childItem = tree.jqxTree('getItem', this);
            if (childItem) {
                tree.jqxTree('checkItem', item, true);
                tree.jqxTree('expandItem', childItem);
                expandAllChildrenIfExist(tree, childItem);
            }
        });
    }
}


function getUI5FilterTreeResults(selectedGridId) {
    var columnMap = {};
    var operatorMap = {};
    $('#gridUI5Filter_' + selectedGridId + ' input').each(function () {
        var column = $(this).attr('data-column');
        var val = $(this).val();
        if (column != undefined && column != '' && val != '') {
            columnMap[column] = val;
            var operator = $('#operator_' + selectedGridId + '_' + column).val();
            operatorMap[column] = operator;
        }
    });
    var treeId = $('#gridUI5Filter_' + selectedGridId).attr('data-treeId');
    if (treeId != '') {
        $("#dxpMOCRTreeGridDiv").html("");
        showLoader()
        $.ajax({
            datatype: 'json',
            type: 'POST',
            url: 'getDXPAssetTreeFilterData',
            data: {
                'treeId': treeId,
                'columnMap': JSON.stringify(columnMap),
                'operatorMap': JSON.stringify(operatorMap),
            },
            traditional: true,
            cache: false,
            success: async function (response) {
                stopLoader();
                $("#dxpMOCRTreeWithGrid").show();
                getGridButtons(selectedGridId);
                getAssetTreeConfig(response, 'dxpAssetTree');
                if (response != null && !jQuery.isEmptyObject(response)) {
                    $('#dxpMOCRTreeWithGridSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0,
                        panels: [{size: '25%', min: 150, resizable: true}, {size: '74%', min: 150, resizable: true}]
                    });
                }
            }, error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
            }
        })
    }
}



function clearUI5FilterTreeSearch(grid) {
    var treeId = $('#gridUI5Filter_' + grid).attr('data-treeId');
    getAssetTreeobject(treeId, "dxpAssetTree", '50');
}


function assetTreetempleteOver(imgId)
{
    console.log("Asset img id:::" + imgId);
    imgId = imgId.replaceAll(":", "\\:");
    templeteMouseOver(imgId);
}
function assetTreetempleteout(imgId)
{
    console.log("Asset img id:::" + imgId);
    templeteMouseOut(imgId);

}



function populateMOCRgridForm(treeDivId, gridId, editable, checkedItemsArr, dataGridId, colName, navgnGridId) {
    showLoader();
    var role = "";
    if (editable == undefined) {
        editable = "N";
    }
    var editRowData = {};
    var tree = $('#' + treeDivId);
    var checkedItems = tree.jqxTree('getCheckedItems');
    if (checkedItems != null && !jQuery.isEmptyObject(checkedItems) && checkedItems.length == 1) {
        $.each(checkedItems, function (i, val) {
            if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
            {
                var checkedLabel = val['label'];
                var idMatch = checkedLabel.match(/id='([^']+)'/);
                var labelId = idMatch[1];
                var basicDatagridId = $("#" + labelId).attr("data-grid_id");
                var itemType = $("#" + labelId).attr("data-object_type");
                var instance = $("#" + labelId).attr("data-instance");
                var businessUnit = $("#" + labelId).attr("data-business_unit");
                var recordNo = $("#" + labelId).attr("data-record_no");
                var erpNo = $("#" + labelId).attr("data-erp_no");
                var conceptId = $("#" + labelId).attr("data-concept_id");
                editRowData['CONCEPT_ID'] = conceptId;
                editRowData['INSTANCE'] = instance;
                editRowData['BUSINESS_UNIT'] = businessUnit;
                editRowData['RECORD_NO'] = recordNo;
                editRowData['ERP_NO'] = erpNo;
                editRowData['NODE_TYPE'] = itemType;
                editRowData['gridId'] = basicDatagridId;
            }
        });
    }

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "populateGridForm",
        data: {
            gridId: gridId,
            editFlag: editable,
        },
        success: function (response) {
            stopLoader();
            var jsResponse = response.formobj;
            var formTable = "<table id='usertable' class='visionMasterDetailForm visionMOCRCopyHierarchyForm'>";
            var disablestr = "";
            var jsResponseObj;
            var man_ind;
            var displayType = "";
            var tb_property = "";
            var count = 0;
            var man_ind = "";
            var dateIds = [];
            var fieldDepParam = "", fieldType = "", dataType = "", maxLength = "", blurFunction = "", regexPattern = "";
            for (var i = 0; i < jsResponse.length; i++) {
                jsResponseObj = jsResponse[i];
                disablestr = "";
                maxLength = jsResponseObj.TEXT_MAXLENGTH == 'NA' ? '' : " maxlength='" + jsResponseObj.TEXT_MAXLENGTH + "'";
                blurFunction = jsResponseObj.ONBLUR_FUNC_NAME == 'NA' ? '' : ' onblur=" return ' + jsResponseObj.ONBLUR_FUNC_NAME + '(\"' + jsResponseObj.COL_NAME + '\") " ';
                regexPattern = jsResponseObj.REGEX == "NA" ? "" : " data-regex='" + jsResponseObj.REGEX + "' ";
                blurFunction = blurFunction + regexPattern + maxLength;


                displayType = "";
                tb_property = "";
                if (editable == 'Y') {

                    jsResponseObj.COL_VALUE = (jsResponseObj.COL_VALUE == undefined) ? "" : jsResponseObj.COL_VALUE;
                    if (jsResponseObj.COL_DATA_TYPE == 'date' || jsResponseObj.COL_DATA_TYPE == 'DATE') {
                        var dateString = editRowData[jsResponseObj.COL_NAME].toString().substr(0, 15);
                        var d = new Date(dateString);
                        jsResponseObj.COL_VALUE = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
                    } else {
//                        if (jsResponseObj.COL_NAME == 'NODE_TYPE')
//                        {
//                            jsResponseObj.COL_VALUE = editRowData['CUSTOM_COLUMN5'] == undefined ? "" : editRowData['CUSTOM_COLUMN5'];
//                        } else if (jsResponseObj.COL_NAME == 'ERP_NO')
//                        {
//                            jsResponseObj.COL_VALUE = editRowData['ERP_NO'] == undefined ? "" : editRowData['ERP_NO'];
//                        } else {
//                            jsResponseObj.COL_VALUE = editRowData[jsResponseObj.COL_NAME] == undefined ? "" : editRowData[jsResponseObj.COL_NAME];
//                        }
                        jsResponseObj.COL_VALUE = editRowData[jsResponseObj.COL_NAME] == undefined ? "" : editRowData[jsResponseObj.COL_NAME];
                    }
                } else {
                    jsResponseObj.COL_VALUE = jsResponseObj.COL_INIT_VAL != null ? jsResponseObj.COL_INIT_VAL : "";
                }


                if (jsResponseObj.COL_DATA_TYPE == null) {
                    dataType = "string";
                } else {
                    dataType = jsResponseObj.COL_DATA_TYPE;
                    if (dataType == 'date') {
                        dateIds.push(jsResponseObj.COL_NAME);
                    }
                }
                if (jsResponseObj.COL_EDT_TYPE == null) {
                    displayType = "";
                } else {
                    displayType = $.trim(jsResponseObj.COL_EDT_TYPE);
                }
                if (jsResponseObj.COL_MAN == null) {
                    man_ind = "O";
                } else {
                    man_ind = jsResponseObj.COL_MAN;
                }
                if (jsResponseObj.FIELD_TYPE == null) {
                    fieldType = "";
                } else {
                    fieldType = jsResponseObj.FIELD_TYPE;
                }
                if (count == 0) {
                    formTable += "<tr>";
                }
                if (displayType.indexOf("DDW_") > -1) {
                    //visionDropdown('DDW_INSTANCE_UM','','GRID-VIEW','MM_MASTER_UM_USER_DETAILS','INSTANCE','0')
                    var colname = jsResponseObj.COL_NAME;
                    var colvalue = jsResponseObj.COL_VALUE;
                    if (colname.indexOf("ROLE") > -1)
                    {
                        role = colvalue;
                    }
                    if (colname != 'REPORT_TO')
                    {
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";
                    }

                    if (colname == 'REPORT_TO' && role.indexOf("REQUESTOR") > -1)
                    {
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";

                    } else if (colname == 'REPORT_TO')
                    {
                        disablestr = " disabled=disabled class ='visionInputDisable";
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer;display:none;' id= 'reportTo' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";

                    }

                }
                if (jsResponseObj.COL_FORM_VIEW_FLAG == 'N') {
                    //   if (displayType == 'INV') {
                    formTable += "<td style='display:none' >"
                            + "<span>" + jsResponseObj.COL_LABEL + (man_ind == "Y" ? "<sup>*</sup>" : "") + "</span>"
                            + "</td>";
                    formTable += "<td  style='display:none'>";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {
                            formTable += "<select  data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {


                        formTable += "<input " + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + "  value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "'  data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "'";
                        formTable += " id='" + jsResponseObj.COL_NAME + "' type='text'/>" + tb_property;
                    }
                    formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>";
                    formTable += "</td>";
                } else if (displayType == 'DISP_ONLY') {
                    formTable += "<td >"
                            + "<span>" + jsResponseObj.COL_LABEL + (man_ind == "Y" ? "<sup>*</sup>" : "") + "</span>"
                            + "</td>";
                    formTable += "<td>";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {


                            formTable += "<select data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {

                        formTable += "<input   value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' disabled='disabled' class ='visionInputDisable' type='text'/>"
                                + tb_property;
                    }
                    formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>"
                            + "</td>";
                } else {
                    formTable += "<td >"
                            + "<span>" + jsResponseObj.COL_LABEL + (man_ind == "M" ? "<sup>*</sup>" : "") + "</span>"
                            + "</td>";
                    formTable += "<td>";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {
                            formTable += "<select data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {
                        if (jsResponseObj.COL_NAME == 'USER_NAME' && editable == 'Y') {
                            formTable += "<input disabled=disabled class ='visionInputDisable' value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.REGEX + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' maxlength='" + jsResponseObj.TEXT_MAXLENGTH + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' type='text' style='text-transform: uppercase;'/>"
                                    + tb_property;
                        } else if (jsResponseObj.COL_NAME == 'USER_NAME') {
                            formTable += "<input onblur=isUserAvailable('" + jsResponseObj.COL_VALUE + "') value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.REGEX + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' maxlength='" + jsResponseObj.TEXT_MAXLENGTH + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' type='text' style='text-transform: uppercase;'/>"
                                    + tb_property;
                        } else {
                            formTable += "<input  " + disablestr + " " + blurFunction + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + " value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' type='text' style='text-transform: uppercase;'/>"
                                    + tb_property;

                        }

                        //   formTable += tb_property;
                    }
                    formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>"
                            + "</td>";
                    //--count;

                }
                if (count > 1) {
                    formTable += "</tr>";
                    count = 0;
                } else {
                    if (jsResponseObj.COL_FORM_VIEW_FLAG != 'N') {
                        count++;
                    }
                }

            }
            formTable += "</table>";
            $("#formView").html("");
            $("#formView").html(formTable);
            if (false) {
                $("#usertable").after("<div id='gridFormDetails'><ul></ul></div>");
                var jsDetailObjs = response.detailobj;
                var detailGridIds = [];
                for (var i = 0; i < jsDetailObjs.length; i++) {
                    delete jsDetailObjs[i].gridPropObj.virtualmode;
                    delete jsDetailObjs[i].gridPropObj.rendergridrows;
                    //    delete jsDetailObjs[i].gridPropObj.renderToolbar;




                    var source =
                            {
                                localdata: [],
                                datafields: jsDetailObjs[i].gridPropObj.datafields,
                                datatype: "json"
                            };
                    var childGridData = jsDetailObjs[i];
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    var childGridId = "tab_" + jsDetailObjs[i].gridId;
                    $("#gridFormDetails ul").append("<li>" + jsDetailObjs[i].gridName + " </li>");
                    $("#gridFormDetails ul").after("<div data-tabName= '" + jsDetailObjs[i].tableName + "' "
                            + "id='" + childGridId + "'></div>");
                    var gridConfigObj = {};
                    gridConfigObj = childGridData.gridPropObj;
                    gridConfigObj.source = dataAdapter;
                    //                fieldsArray = masterObj.columns;
                    gridConfigObj.columns = childGridData.columns;
                    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var cellValue = $("#" + childGridId).jqxGrid('getcellvalue', row, columnfield);
                        var viewType = "GRID-VIEW";
                        var editable = gridConfigObj.editable;
                        if (editable) {
                            var ddwData = childGridData.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            //     return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
                            return "<div  class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + childGridId + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                        } else
                        {
                            var ddwData = childGridData.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                        }

                    };
                    var headerTooltipRenderer = function (element) {
                        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                            position: 'bottom-right',
                            showArrow: false, content: $(element).text()});
                    }
                    var col = childGridData.columns;
                    for (var i = 0; i < col.length; i++) {
                        //////alert("j :::::::::"+i);
                        if (col[i].rendered != null) {
                            col[i].rendered = eval('(' + col[i].rendered + ')');
                        }
                    }

                    for (var i = 0; i < childGridData.columns.length; i++) {
                        if (childGridData.columns[i].cellsrenderer != null) {
                            //columns[i].cellsrenderer = eval(columns[i].cellsrenderer);
                            ////alert(columns[i].cellsrenderer);
                            childGridData.columns[i].cellsrenderer = eval('(' + childGridData.columns[i].cellsrenderer + ')');
                            ////alert("////alert(columns[i].cellsrenderer);  ::: "+columns[i].cellsrenderer);
                        }

                        if (childGridData.columns[i].createeditor != null) {

                            childGridData.columns[i].createeditor = eval('(' + childGridData.columns[i].createeditor + ')');
                        }

                        if (childGridData.columns[i].initeditor != null) {


                            childGridData.columns[i].initeditor = eval('(' + childGridData.columns[i].initeditor + ')');
                        }
                        if (childGridData.columns[i].geteditorvalue != null) {


                            childGridData.columns[i].geteditorvalue = eval('(' + childGridData.columns[i].geteditorvalue + ')');
                        }
                        if (childGridData.columns[i].cellbeginedit != null) {


                            childGridData.columns[i].cellbeginedit = eval('(' + childGridData.columns[i].cellbeginedit + ')');
                        }
                        if (childGridData.columns[i].rendered != null) {


                            childGridData.columns[i].rendered = eval('(' + childGridData.columns[i].rendered + ')');
                        }

                    }
                    gridConfigObj.rendergridrows = function (obj) {
                        return obj.data;
                    };
//             gridConfigObj.showtoolbar = true;
                    var renderToolbar = gridConfigObj.renderToolbar;
                    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');
                    $("#" + childGridId).jqxGrid(gridConfigObj);
                    $("#" + childGridId).on('cellbeginedit', function (event)
                    {
                        $("#" + childGridId).attr('data-last-ed-field', event.args.datafield);
                        $("#" + childGridId).attr('data-last-ed-row', event.args.rowindex);
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
                        $("#" + childGridId).jqxGrid('selectrow', rowBoundIndex);
//end
                    });
                }
            }
            $("#formView").dialog({resizable: false,
                title: 'Copy Hierarchy',
                modal: true,
                height: 250,
                width: 1100,
                minWidth: 1100,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: "Copy",
                        id: 'updateUserInfo',
                        click: function () {
                            showLoader();
                            var jsobject = new Object();
                            var textboxes = $('#usertable').find('input');
                            var col, isman, label = false, regexTest, regexErrorMsg;
                            textboxes.each(function () {
                                //col = this.attr('id');
                                col = this.id;
                                isman = $("#" + col).attr('data-man');
                                label = $("#" + col).attr('data-label');
                                regexTest = $("#" + col).attr('data-regex');
                                regexErrorMsg = $("#" + col).attr('data-regexvalue');
                                if (this.value.length == 0 && isman == 'M') {
                                    errorMessage("#" + col + "_disp", "Please fill " + label);
                                } else {
                                    $("#" + col + "_disp").html("");
                                }
                                jsobject[col] = this.value;
                            });
                            copyHierarchyWithNewMOCRDetails(treeDivId, jsobject, dataGridId, colName, navgnGridId, checkedItemsArr);
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }, {
                        text: "Cancel",
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
            for (var i = 0; i < dateIds.length; i++) {
                $("#" + dateIds[i]).datepicker(
                        {
                            dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true
                        }
                );
            }


        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}

function assetCreateHierWithNewMocr(treeId, gridId)
{
    var typeName = 'XLSX';
    var response = "<div id ='treeMOCRDMFileId' class ='treeMOCRDMFileDivClass'>"
            + "<div id='visionShowFileUploadMsg'></div>";
    response += "<input type='file' name='importMOCRTreeDMFile' id='importMOCRTreeDMFile' class='visionMOCRTreeDMFilesInput' accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'/>";
    response += "<div class='visionTreeMOCRDMFileUploadclass' id='visionTreeMOCRDmFileUpload'>";
    response += "<p class='VisionMOCRDMUploadFileContent'>Upload XLSX Files Here</p></div></div>";
    uploadFilePopupMOCR(response, treeId, gridId);
}

function uploadFilePopupMOCR(response, treeId, gridId) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#MOCRMultiFiledialog").remove();
    $("body").append("<div id='MOCRMultiFiledialog' ></div>");
    $("#MOCRMultiFiledialog").html(response);
    $("#MOCRMultiFiledialog").dialog({
        title: (labelObject['Upload'] != null ? labelObject['Upload'] : 'Upload'),
        width: 500,
        height: 350,
        fluid: true,
        open: function () {
        },
        beforeClose: function (event, ui) {
        }
    });
    $("#importMOCRTreeDMFile").hide();
    setTimeout(function () {
        $("html").on("dragover", function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
        $("html").on("drop", function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
        $('.treeMOCRDMFileDivClass').on('drop', function (event) {
            $("#wait").css("display", "block");
            var files = event.target.files;
            var file = files[0];
            getMOCRMutipleFileUploadSheetMapping(file, file['name'], gridId);
            $("#MOCRMultiFiledialog").html("");
            $("#MOCRMultiFiledialog").dialog('close');
            $("#MOCRMultiFiledialog").dialog('destroy');
        });
        $("#visionTreeMOCRDmFileUpload").click(function () {
            $("#importMOCRTreeDMFile").click();
        });
        $("#importMOCRTreeDMFile").on('change', function (event) {
            var files = event.target.files;
            var file = files[0];
            getMOCRMutipleFileUploadSheetMapping(file, file['name'], gridId);
            $("#importMOCRTreeDMFile").val('');
            $("#MOCRMultiFiledialog").html("");
            $("#MOCRMultiFiledialog").dialog('close');
            $("#MOCRMultiFiledialog").dialog('destroy');
        });
    }, 300);
}



async function getMOCRMutipleFileUploadSheetMapping(file, fileName, gridId, aiFlag) {

    var settimeout = '10000';
    var formData = new FormData();
    formData.append("importFile", file, fileName);
    formData.append("gridId", gridId);
    showLoader();
    $.ajax({
        url: 'importMOCRMultiFileAjaxSheetMapping',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        settimeout: settimeout,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
        },
        success: function (result) {
            if (result != null && result != '' && result != undefined) {
                var multiResultObject = JSON.parse(result);
                if (multiResultObject != null && !jQuery.isEmptyObject(multiResultObject)) {
                    var dbMultiListGridIdObj = multiResultObject['multiListGridId'];
                    var fileSheetNamesArr = multiResultObject['fileSheetNamesList'];
                    var dbSheetNamesArr = multiResultObject['dbSheetNamesList'];
                    var fileType = multiResultObject['fileType'];
                    var filePath = multiResultObject['filePath'];
                    var mappingSheetObj = {};
                    var fileSheetsArr = [];
                    var dbSheetsArr = [];
                    var gridTable = "";
                    var htmlDiv = "<div id='importMOCRFileColumnsMapppingOptionsDiv' >"
                            + "<img id='importMOCRFileColumnsMapppingInfo' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
                            + "</div>"
                            + "<div id='importMOCRFileColumnMappingId' class='importFileColumnMappingClass' ></div>";
                    $("#messagedialog5").html(htmlDiv);
                    $("#messagedialog5").addClass("ai-panel-flowchart multipleMappingsFlowChart");
                    $("#messagedialog5").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Map Sheets'] != null ? labelObject['Map Sheets'] : 'Map Sheet'),
                        height: 500,
                        minHeight: 'auto',
                        width: 900,
                        maxWidth: 'auto',
                        fluid: true,
                        dialogClass: 'multipleMappingsFlowChartProceed',
                        buttons: [{
                                text: (labelObject['Proceed'] != null ? labelObject['Proceed'] : 'Proceed'),
                                click: function () {
                                    showLoader();
                                    $.ajax({
                                        type: "post",
                                        traditional: true,
                                        dataType: 'html',
                                        url: 'importMOCRMultiFileAjaxColMapping',
                                        cache: false,
                                        data: {
                                            tableName: gridTable,
                                            filePath: filePath,
                                            fileType: fileType,
                                            gridId: gridId,
                                            fileSheetsArray: JSON.stringify(fileSheetNamesArr),
                                            dbSheetsArray: JSON.stringify(dbSheetNamesArr),
                                            mappedSheetObj: JSON.stringify(mappingSheetObj),
                                            dbSheetGridObj: JSON.stringify(dbMultiListGridIdObj)
                                        },
                                        success: function (result) {
                                            stopLoader();
                                            if (result != null && result != '' && result != undefined) {
                                                var sheetCountObj = '';
                                                var resultObj = JSON.parse(result);
                                                if (aiFlag != null && aiFlag != "" && aiFlag == "Y") {
                                                    sheetCountObj = resultObj['sheetCountObj'];
                                                }
                                                if (resultObj != null && !jQuery.isEmptyObject(resultObj)
                                                        && resultObj.hasOwnProperty("errorMessage"))
                                                {

                                                    if (aiFlag != null && aiFlag != "" && aiFlag == "Y") {
                                                        defaultAITypingBasedOnResponse(`<div class='aiLensResultDataClass'>${resultObj["errorMessage"]}</div>`);

                                                    } else {
                                                        showAssetTreeErrorMsg("Error", resultObj["errorMessage"]);
                                                    }
                                                    return;
                                                }
                                                getMOCRMutipleFileUploadColMapping(result, mappingSheetObj, gridId, aiFlag, sheetCountObj);
                                            }
                                        },
                                        error: function (e) {
                                            console.log(e);
                                            sessionTimeout(e);
                                            stopaiLoader();
                                            stopLoader();
                                        }
                                    })

                                    $(this).html("");
                                    $(this).dialog("close");
                                }
                            }],
                        open: function () {
                            stopLoader();
                            if (fileSheetNamesArr != null && !jQuery.isEmptyObject(fileSheetNamesArr)
                                    && dbSheetNamesArr != null && !jQuery.isEmptyObject(dbSheetNamesArr)) {
                                var inputCount = 0;
                                var sheetNameInputs = {};
                                $.each(dbSheetNamesArr, function (i) {
                                    var dbSheetName = dbSheetNamesArr[i];
                                    if (dbSheetName != null && dbSheetName != "" && dbSheetName != undefined) {
                                        var input = {};
                                        input['label'] = dbSheetName;
                                        input['value'] = dbSheetName;
                                        sheetNameInputs['input_' + inputCount] = input;
                                        inputCount++;
                                    }
                                });



                                var fileTitle = "<div>Input Sheet Name</div>";
//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                                var tableTitle = "<div>Output Sheet Name</div>";
                                var fileSheetNameObject = {};
                                $.each(fileSheetNamesArr, function (i) {
                                    var fileSheetName = fileSheetNamesArr[i];
                                    fileSheetNameObject[fileSheetName] = fileSheetName;
                                })
                                if (fileSheetNamesArr.length > Object.keys(fileSheetNameObject).length) {
                                    showMesg("<p class=\"fileuploadErr\">Duplicate Sheet names found. Please make changes to proceed.</p>");
                                    $(this).html("");
                                    $(this).dialog("close");
                                    throw new Error("Duplicate Sheet Names found.");
                                }

                                var linksData = {};
                                var fileSheetOutputs = {};
                                var linkId = 0;
                                var maxHeaderLength = 0;
                                var matchedColumns = [];
                                $.each(fileSheetNamesArr, function (i) {
                                    var output = {};
                                    output['label'] = fileSheetNamesArr[i];
                                    if (dbSheetNamesArr.indexOf(fileSheetNamesArr[i]) > -1) {
                                        var linkdata = {};
                                        linkdata['fromConnector'] = "output_" + i;
                                        linkdata['fromOperator'] = "operator1";
                                        linkdata['fromSubConnector'] = 0;
                                        linkdata['toConnector'] = "input_" + (dbSheetNamesArr.indexOf(fileSheetNamesArr[i]));
                                        linkdata['toOperator'] = "operator2";
                                        linkdata['toSubConnector'] = 0;
                                        linksData[linkId] = linkdata;
                                        linkId++;
                                        matchedColumns.push(fileSheetNamesArr[i]);
                                    }

                                    maxHeaderLength = fileSheetNamesArr[i].length > maxHeaderLength ? fileSheetNamesArr[i].length : maxHeaderLength;
                                    fileSheetOutputs['output_' + i] = output;
                                });

                                var data = {
                                    operators: {
                                        operator1: {
                                            top: 0,
                                            left: 20,
                                            width: 300,
                                            properties: {
                                                title: fileTitle,
                                                inputs: {},
                                                outputs: fileSheetOutputs,
                                            }
                                        },
                                        operator2: {
                                            top: 0,
                                            left: 500,
                                            width: 300,
                                            properties: {
                                                title: tableTitle,
                                                inputs: sheetNameInputs,
                                                outputs: {}
                                            }
                                        },
                                    },
                                    links: {}
                                };
                                // Apply the plugin on a standard, empty div...
                                $('#importMOCRFileColumnMappingId').flowchart({
                                    data: data,
                                    linkWidth: 2,
                                    multipleLinksOnOutput: true,
                                    canUserEditLinks: true,
                                    canUserMoveOperators: false
                                });
                                $('#importMOCRFileColumnMappingId .flowchart-operator-connector-label').each(function (i) {
                                    //$(".flowchart-operator-connector-label").each(function (i) {
                                    var linkData = linksData[i];
                                    var text = $(this).text();
                                    if (matchedColumns.indexOf(text) > -1) {
                                        $(this).css("color", "green");
                                    } else {
                                        $(this).css("color", "red");
                                    }

                                });

                                $('#importMOCRFileColumnMappingId').flowchart({
                                    onOperatorMoved: function (operatorId, position) {
                                        if (position.top < 0) {
                                            var operatorData = $('#importMOCRFileColumnMappingId').flowchart('getOperatorData', operatorId);
                                            operatorData.top = 0;
                                            $('#importMOCRFileColumnMappingId').flowchart('setOperatorData', operatorId, operatorData);
                                            $('#importMOCRFileColumnMappingId .flowchart-operator-connector-label').show();
//                                        $(".flowchart-operator").css("width", "300px", "!important"); 
//                                        $(".flowchart-operator").css("height", "auto", "!important"); 
                                            $(".flowchart-operator-title").show();
                                        }
                                        return true;
                                    },
                                    onLinkCreate: function (linkId, linkData) {
                                        //var getdata = $('#importFileColumnMappingId_' + key).flowchart('getData');
                                        var currentFlowchart = $(this);
                                        var mappingId = $(currentFlowchart[0].element[0]).attr("id");
                                        var fromOperator = linkData['fromOperator']
                                        var fromConnector = linkData['fromConnector'];
                                        //var fromOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', fromOperator);
                                        var fromOperatorData = $('#' + mappingId).flowchart('getOperatorData', fromOperator);
                                        var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                        fileSheetsArr.push(label);
                                        var toOperator = linkData['toOperator']
                                        var toConnector = linkData['toConnector'];
//                                    var toOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', toOperator);
                                        var toOperatorData = $('#' + mappingId).flowchart('getOperatorData', toOperator);
                                        var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                        var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                                        dbSheetsArr.push(value);
                                        mappingSheetObj[label] = value;
//                                    $(".flowchart-operator-connector-label").each(function (i) {
                                        $('#importMOCRFileColumnMappingId .flowchart-operator-connector-label').each(function (i) {
                                            var text = $(this).text();
                                            if (text == label || text == tolabel) {
                                                if (label == tolabel) {
                                                    $(this).css("color", "green");
                                                } else {
                                                    $(this).css("color", "blue");
                                                }

                                            }
                                        });


                                        return true;
                                    },
                                    onLinkDelete: function (linkId, forced) {

                                        var flowChartData = $('#importMOCRFileColumnMappingId').flowchart('getData');
                                        var links = flowChartData['links'];
                                        var linkData = links[linkId];
                                        var toOperator = linkData['toOperator']
                                        var toConnector = linkData['toConnector'];
                                        var toOperatorData = $('#importMOCRFileColumnMappingId').flowchart('getOperatorData', toOperator);
                                        var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                        var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                                        var mappedValueIndex = dbSheetsArr.indexOf(value);
                                        dbSheetsArr.splice(mappedValueIndex, 1);
                                        var fromOperator = linkData['fromOperator']
                                        var fromConnector = linkData['fromConnector'];
                                        var fromOperatorData = $('#importMOCRFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                                        var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                        fileSheetsArr.splice(mappedValueIndex, 1);
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
                                        var linkId = $('#importMOCRFileColumnMappingId').flowchart('getSelectedLinkId');
                                        $('#importMOCRFileColumnMappingId').one('click', function () {
                                            $('#importMOCRFileColumnMappingId').flowchart('deleteSelected');
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
                                    $('#importMOCRFileColumnMappingId').flowchart('addLink', linkdata);
                                });
//                                const $outputs = $('#importMOCRFileColumnMappingId').find('.flowchart-operator-outputs');
//                                const $dataDiv = $('#importMOCRFileColumnMappingId');
//                                if ($outputs.children().length > 0) {
//                                    const height = $outputs.outerHeight() + 100;
//                                    $dataDiv.css('height', height + 'px');
//                                }
                                const $dataDiv = $('#importMOCRFileColumnMappingId');
                                const $outputs = $dataDiv.find('.flowchart-operator-inputs-outputs .flowchart-operator-outputs');
                                const $inputs = $dataDiv.find('.flowchart-operator-inputs-outputs .flowchart-operator-inputs');
                                const calcHeight = ($el) => {
                                    if ($el.children().length === 0)
                                        return 0;
                                    return Math.max(...$el.children().map(function () {
                                        return $(this).position().top + $(this).outerHeight(true);
                                    }).get());
                                };
                                const outputHeight = calcHeight($outputs);
                                const inputHeight = calcHeight($inputs);
                                const maxHeight = Math.max(outputHeight, inputHeight);
                                $dataDiv.css('height', (maxHeight > 0 ? maxHeight + 28 : 'auto') + 'px');
                                $dataDiv.find('.flowchart-operators-layer').css({
                                    marginTop: '5px'
                                });

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

                                $("#importMOCRFileColumnsMapppingInfo").popover({
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
                                $("#importMOCRFileColumnsMapppingInfo").on("shown.bs.popover", function () {
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

                            }

                        },
                        beforeClose: function (event, ui)
                        {
                            $(".popover").remove();
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                    try {
                        stopLoader(); //27
                    } catch (e) {
                        stopLoader(); //28
                    }
                }
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

async function getMOCRMutipleFileUploadColMapping(result, mappingSheetObj, gridId, aiFlag, sheetCountObj) {
    if (aiFlag != null && aiFlag != undefined && aiFlag != '' && aiFlag == 'Y') {
        aiAgentTypingMessage("MOCR file upload process initiated — please wait until it completes.");
//        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>MOCR multiple file upload process initiated — please wait until it completes.</div>");
    }

    var multiResultObject = JSON.parse(result);
    if (multiResultObject != null && !jQuery.isEmptyObject(multiResultObject)) {
        var multiListGridIdArr = multiResultObject['multiListGridId'];
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
            dialogClass: 'multipleMappingsFlowChartWrapper',
            buttons: [{
                    text: (labelObject['Import'] != null ? labelObject['Import'] : 'Import'),
                    click: function () {
                        if (aiFlag != null && aiFlag != "" && aiFlag == "Y") {
                            showaiLoader();
                        } else {
                            showLoader();
                        }
                        $.ajax({
                            type: "post",
                            traditional: true,
                            dataType: 'html',
                            url: 'importMOCRExcelMultiColMapping',
                            cache: false,
                            data: {
                                tableName: gridTable,
                                filePath: filePath,
                                gridId: gridId,
                                mappedFileHeadersArray: JSON.stringify(mappedFileHeadersObject),
                                mappedGridColumnsArray: JSON.stringify(mappedGridColumnsObj),
                                fileHeaders: JSON.stringify(fileHeadersObj),
                                columnMappingObjStr: JSON.stringify(columnMappingGlobalObj),
                                mappingSheetObj: JSON.stringify(mappingSheetObj)
                            },
                            success: function (result) {
                                if (aiFlag != null && aiFlag != "" && aiFlag == "Y") {
                                    stopaiLoader();
                                } else {
                                    stopLoader();
                                }
                                if (result != null && result != '' && result != undefined) {
                                    var responseObj = JSON.parse(result);
                                    if (responseObj != null && !jQuery.isEmptyObject(responseObj))
                                    {
                                        var result = responseObj['finalresult'];
                                        var batchNumber = responseObj['batchNumber'];
                                        var clusterId = responseObj['clusterId'];
                                        var colName = responseObj['colName'];
//                                        var totalRowCount = responseObj['totalRowCount'];

                                        var totalRowCount = getTotalRecordsFromFinalResult(result)
                                        var rowCountId = "rowCount_" + batchNumber;
                                        if (!$("#" + rowCountId).length)
                                            $("body").append("<input type='hidden' id='" + rowCountId + "'>");
                                        $("#" + rowCountId).val("").val(totalRowCount);
                                        $("#mocrBatchId").remove();
                                        $("body").append("<input type='hidden' id='mocrBatchId' value='" + batchNumber + "'/>");
                                        showAssetMOCRCreateProcess("Message", "MOCR Data Imported Successfully", batchNumber, clusterId, colName, aiFlag, sheetCountObj);
                                    }
                                }
                            },
                            error: function (e) {
                                console.log(e);
                                sessionTimeout(e);
                                stopaiLoader();
                                stopLoader();
                            }
                        })

                        $(this).html("");
                        $(this).dialog("close");
                    }
                }],
            open: function () {
                stopLoader();
                for (var key in multiResultObject) {
                    if (multiResultObject.hasOwnProperty(key) && key != "multiListGridId") {
                        var resultObject = multiResultObject[key];
                        var fileHeaders = resultObject['headersArray'];
                        var sheetName = resultObject['sheetName'];
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

                        var fileTitle = "<div>Sheet Name : " + ((sheetName != null && sheetName != '' && sheetName != undefined) ? sheetName : fileName) + "<br>"
                                + "Columns Count : " + headersCount + "<br>"
                                + "Rows Count : " + fileRowCount + "</div>";
                        var tableTitle = "<div>Staging Table <br>"
                                + "Columns Count : " + columnNameArray.length + "<br>"
                                + "Rows Count : " + fileRowCount + "</div>";
                        var fileHeaderObject = {};
                        $.each(fileHeaders, function (i) {
                            var header = fileHeaders[i];
                            fileHeaderObject[header] = header;
                        })
                        if (fileHeaders.length > Object.keys(fileHeaderObject).length) {
                            showMesg("<p class=\"fileuploadErr\">Duplicate file headers found. Please make changes to proceed.</p>");
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
                                    top: 0,
                                    left: 20,
                                    width: 300,
                                    properties: {
                                        title: fileTitle,
                                        inputs: {},
                                        outputs: fileHeaderOutputs,
                                    }
                                },
                                operator2: {
                                    top: 0,
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
                        $('#importFileColumnMappingId_' + key + ' .flowchart-operator-connector-label').each(function (i) {
                            //$(".flowchart-operator-connector-label").each(function (i) {
                            var linkData = linksData[i];
                            var text = $(this).text();
                            if (matchedColumns.indexOf(text) > -1) {
                                $(this).css("color", "green");
                            } else {
                                $(this).css("color", "red");
                            }

                        });

                        $('#importFileColumnMappingId_' + key).flowchart({
                            onOperatorMoved: function (operatorId, position) {
                                if (position.top < 0) {
                                    var operatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', operatorId);
                                    operatorData.top = 0;
                                    $('#importFileColumnMappingId_' + key).flowchart('setOperatorData', operatorId, operatorData);
                                    $('#importFileColumnMappingId_' + key + ' .flowchart-operator-connector-label').show();
//                                        $(".flowchart-operator").css("width", "300px", "!important"); 
//                                        $(".flowchart-operator").css("height", "auto", "!important"); 
                                    $(".flowchart-operator-title").show();
                                }
                                return true;
                            },
                            onLinkCreate: function (linkId, linkData) {
                                //var getdata = $('#importFileColumnMappingId_' + key).flowchart('getData');
                                var currentFlowchart = $(this);
                                var mappingId = $(currentFlowchart[0].element[0]).attr("id");
                                var fromOperator = linkData['fromOperator']
                                var fromConnector = linkData['fromConnector'];
                                //var fromOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', fromOperator);
                                var fromOperatorData = $('#' + mappingId).flowchart('getOperatorData', fromOperator);
                                var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                mappedFileHeadersArray.push(label);
                                var toOperator = linkData['toOperator']
                                var toConnector = linkData['toConnector'];
//                                    var toOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', toOperator);
                                var toOperatorData = $('#' + mappingId).flowchart('getOperatorData', toOperator);
                                var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                                mappedGridColumnsArray.push(value);
                                mappedGridLabelssArray.push(tolabel);
                                columnMappingObj[label] = value;
//                                    $(".flowchart-operator-connector-label").each(function (i) {
                                $('#importFileColumnMappingId_' + key + ' .flowchart-operator-connector-label').each(function (i) {
                                    var text = $(this).text();
                                    if (text == label || text == tolabel) {
                                        if (label == tolabel) {
                                            $(this).css("color", "green");
                                        } else {
                                            $(this).css("color", "blue");
                                        }

                                    }
                                });


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
                        });
//                        const $outputs = $('#importFileColumnMappingId_' + key).find('.flowchart-operator-outputs');
//                        const $dataDiv = $('#importFileColumnMappingId_' + key);
//                        if ($outputs.children().length > 0) {
//                            const height = $outputs.outerHeight() + 100;
//                            $dataDiv.css('height', height + 'px');
//                        }
                        const $dataDiv = $('#importFileColumnMappingId_' + key);
                        const $outputs = $dataDiv.find('.flowchart-operator-inputs-outputs .flowchart-operator-outputs');
                        const $inputs = $dataDiv.find('.flowchart-operator-inputs-outputs .flowchart-operator-inputs');
                        const calcHeight = ($el) => {
                            if ($el.children().length === 0)
                                return 0;
                            return Math.max(...$el.children().map(function () {
                                return $(this).position().top + $(this).outerHeight(true);
                            }).get());
                        };
                        const outputHeight = calcHeight($outputs);
                        const inputHeight = calcHeight($inputs);
                        const maxHeight = Math.max(outputHeight, inputHeight);
                        $dataDiv.css('height', (maxHeight > 0 ? maxHeight + 28 : 'auto') + 'px');
                        $dataDiv.find('.flowchart-operators-layer').css({
                            marginTop: '5px'
                        });
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
    }
    try {
        stopLoader(); //27
    } catch (e) {
        stopLoader(); //28
    }


}

async function getMOCRMutipleFileUploadColMapping1(file, fileName, gridId) {
    var settimeout = '10000';
    var formData = new FormData();
    formData.append("importFile", file, fileName);
    formData.append("gridId", gridId);
    showLoader();
    $.ajax({
        url: 'importMOCRMultiFileAjaxColMapping',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        settimeout: settimeout,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
        },
        success: function (result) {

            var multiResultObject = JSON.parse(result);
            var multiListGridIdArr = multiResultObject['multiListGridId'];
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
                            showLoader();
                            $.ajax({
                                type: "post",
                                traditional: true,
                                dataType: 'html',
                                url: 'importMOCRExcelMultiColMapping',
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
                                    stopLoader();
                                    if (result != null && result != '' && result != undefined) {
                                        var responseObj = JSON.parse(result);
                                        if (responseObj != null && !jQuery.isEmptyObject(responseObj))
                                        {
                                            var result = responseObj['finalresult'];
                                            var batchNumber = responseObj['batchNumber'];
                                            var clusterId = responseObj['clusterId'];
                                            var colName = responseObj['colName'];
                                            $("#mocrBatchId").remove();
                                            $("body").append("<input type='hidden' id='mocrBatchId' value='" + batchNumber + "'/>");
                                            showAssetMOCRCreateProcess("Message", "MOCR Data Imported Successfully", batchNumber, clusterId, colName);
                                        }
                                    }
                                },
                                error: function (e) {
                                    console.log(e);
                                    sessionTimeout(e);
                                    stopaiLoader();
                                    stopLoader();
                                }
                            })

                            $(this).html("");
                            $(this).dialog("close");
                        }
                    }],
                open: function () {
                    stopLoader();
                    for (var key in multiResultObject) {
                        if (multiResultObject.hasOwnProperty(key) && key != "multiListGridId") {
                            var resultObject = multiResultObject[key];
                            var fileHeaders = resultObject['headersArray'];
                            var sheetName = resultObject['sheetName'];
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

                            var fileTitle = "<div>Sheet Name : " + (sheetName != null && sheetName != '' && sheetName != undefined) ? sheetName : fileName + "<br>"
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
                                showMesg("<p class=\"fileuploadErr\">Duplicate file headers found. Please make changes to proceed.</p>");
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
                            $('#importFileColumnMappingId_' + key + ' .flowchart-operator-connector-label').each(function (i) {
                                //$(".flowchart-operator-connector-label").each(function (i) {
                                var linkData = linksData[i];
                                var text = $(this).text();
                                if (matchedColumns.indexOf(text) > -1) {
                                    $(this).css("color", "green");
                                } else {
                                    $(this).css("color", "red");
                                }

                            });

                            $('#importFileColumnMappingId_' + key).flowchart({
                                onOperatorMoved: function (operatorId, position) {
                                    if (position.top < 0) {
                                        var operatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', operatorId);
                                        operatorData.top = 20;
                                        $('#importFileColumnMappingId_' + key).flowchart('setOperatorData', operatorId, operatorData);
                                        $('#importFileColumnMappingId_' + key + ' .flowchart-operator-connector-label').show();
//                                        $(".flowchart-operator").css("width", "300px", "!important"); 
//                                        $(".flowchart-operator").css("height", "auto", "!important"); 
                                        $(".flowchart-operator-title").show();
                                    }
                                    return true;
                                },
                                onLinkCreate: function (linkId, linkData) {
                                    //var getdata = $('#importFileColumnMappingId_' + key).flowchart('getData');
                                    var currentFlowchart = $(this);
                                    var mappingId = $(currentFlowchart[0].element[0]).attr("id");
                                    var fromOperator = linkData['fromOperator']
                                    var fromConnector = linkData['fromConnector'];
                                    //var fromOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', fromOperator);
                                    var fromOperatorData = $('#' + mappingId).flowchart('getOperatorData', fromOperator);
                                    var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                                    mappedFileHeadersArray.push(label);
                                    var toOperator = linkData['toOperator']
                                    var toConnector = linkData['toConnector'];
//                                    var toOperatorData = $('#importFileColumnMappingId_' + key).flowchart('getOperatorData', toOperator);
                                    var toOperatorData = $('#' + mappingId).flowchart('getOperatorData', toOperator);
                                    var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                                    var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                                    mappedGridColumnsArray.push(value);
                                    mappedGridLabelssArray.push(tolabel);
                                    columnMappingObj[label] = value;
//                                    $(".flowchart-operator-connector-label").each(function (i) {
                                    $('#importFileColumnMappingId_' + key + ' .flowchart-operator-connector-label').each(function (i) {
                                        var text = $(this).text();
                                        if (text == label || text == tolabel) {
                                            if (label == tolabel) {
                                                $(this).css("color", "green");
                                            } else {
                                                $(this).css("color", "blue");
                                            }

                                        }
                                    });


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
                            });
                            const $outputs = $('#importFileColumnMappingId_' + key).find('.flowchart-operator-outputs');
                            const $dataDiv = $('#importFileColumnMappingId_' + key);
                            if ($outputs.children().length > 0) {
                                const height = $outputs.outerHeight() + 100;
                                $dataDiv.css('height', height + 'px');
                            }

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


function masterMOCRDataValidate(gridId, aiFlag) {
    try {

        var labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        localStorage.setItem("aiFlag", aiFlag);
        if (aiFlag != null && aiFlag != "" && aiFlag == "Y") {
            showaiLoader();
        } else {
            showLoader();
        }
        var selectedRowsData = [];
        var basicData = {};
        var resultObj = {};
        var index = 0;
        var batchInd = $('#batchIndicator').val();
        var batchId = $('#mocrBatchId').val();
        var ValidateCommentColumn = $('#' + gridId + '_massValidateComment').val();
        if (!(ValidateCommentColumn != null && ValidateCommentColumn != '')) {
            ValidateCommentColumn = $('#massValidateComment').val();
        }
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
                basicData[textid] = textval;


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
//                panaloldData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                }

            }
        });
        if (aiFlag != null && aiFlag != undefined && aiFlag != '' && aiFlag == 'Y') {
            setTimeout(function () {
                aiAgentTypingMessage("Validating master MOCR data to ensure completeness and consistency before processing.");
            }, 8000);
//            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Validating master MOCR data to ensure completeness and consistency before processing.</div>");
        }
        if (batchInd != null && batchInd != undefined && batchInd == 'Y')
        {
            var tableName = $('#tableName').val();
            $.ajax({
                type: "post",
                url: "getValidateSubGrids",
                cache: false,
                data: {
                    'gridId': gridId,
                },
                traditional: true,
                dataType: 'html',
                async: true,
                success: function (response) {
                    stopLoader();
                    if (response != null && response != '' && response != undefined)
                    {
                        response = JSON.parse(response);
                        if (response != null && !jQuery.isEmptyObject(response))
                        {
                            var validateSubGrids = response['validateSubGrids'];
                            var showMOCRValidateResponseGridId = response['showMOCRValidateResponseGridId'];
                            if (batchId != null && batchId != '' && batchId != 'undefined' && batchId != 'Currently no batch(s) available')
                            {

                                showLoader();
                                if (basicData != null)
                                {
                                    selectedRowsData.push(basicData);
                                }
                                if (selectedRowsData != null && selectedRowsData.length != 0)
                                {
                                    if (aiFlag != null && aiFlag != undefined && aiFlag != '' && aiFlag == 'Y') {
                                        setTimeout(function () {
                                            aiAgentTypingMessage("Retrieving and validating all MOCR sub-grids to ensure data consistency and completeness.");
                                        }, 9000);
//                                        $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Retrieving and validating all MOCR sub-grids to ensure data consistency and completeness.</div>");
                                    }
                                    $("#wait").css("opacity", "0.99");
                                    $("#wait").css("display", "block");
                                    $("body").css("pointer-events", "none");
                                    $.ajax({
                                        type: "post",
                                        url: "massMOCRValidateData",
                                        cache: false,
                                        data: {
                                            'jsonData': JSON.stringify(selectedRowsData),
                                            'tableName': tableName,
                                            'validateSubGrids': validateSubGrids,
                                            'batchId': batchId
                                        },
                                        traditional: true,
                                        dataType: 'html',
                                        async: true,
                                        success: function (response) {
                                            if (aiFlag != null && aiFlag != "" && aiFlag == "Y") {
                                                stopaiLoader();
                                            } else {
                                                stopLoader();
                                            }

                                            //if (response != null && response != '' && response != undefined && response.indexOf("Failed") < -1)
                                            //{
                                            //    showMOCRValidateResponseGrid(gridId, showMOCRValidateResponseGridId, "BATCH_ID", batchId);
                                            //} else {
//                                                $("#dialog1").html((labelObject["All records have been successfully verified. Please proceed with the process"] != null ?
//                                                        labelObject["All records have been successfully verified. Please proceed with the process"] : "All records have been successfully verified. Please proceed with the process"));
                                            if (aiFlag != null && aiFlag != "" && aiFlag == "Y") {
                                                defaultAITypingBasedOnResponse(`<div class='aiLensResultDataClass'>${response}</div>`);
                                                var basicDataStr = $("#itemsstring").val();
                                                if (basicDataStr != null && basicDataStr != '' && basicDataStr != undefined)
                                                {
                                                    var basicData = JSON.parse(basicDataStr);
                                                    showCopiedMOCRHierForm(basicData, basicData['BATCH_ID'], basicData['gridId'], "dxpFormContent", "", "", "Y");
                                                }
                                            } else {
                                                $("#dialog1").html((labelObject[response] != null ?
                                                        labelObject[response] : response));
                                                $("#dialog1").dialog({resizable: false,
                                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                                    modal: true,
                                                    width: 500,
                                                    height: 150,
                                                    fluid: true,
                                                    buttons: [{
                                                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                                            click: function () {
                                                                var basicDataStr = $("#itemsstring").val();
                                                                if (basicDataStr != null && basicDataStr != '' && basicDataStr != undefined)
                                                                {
                                                                    var basicData = JSON.parse(basicDataStr);
                                                                    showCopiedMOCRHierForm(basicData, basicData['BATCH_ID'], basicData['gridId'], "dxpFormContent", "", "", "Y");
//                                                                MOCRValidateRecords(gridId).then(function (response) {
//                                                                    if (!(response != null && response != "" && response != undefined)) {
//                                                                        showCopiedMOCRHierForm(basicData, basicData['BATCH_ID'], basicData['gridId'], "dxpFormContent");
//                                                                    }
//                                                                });
                                                                }
                                                                $(this).html("");
                                                                $(this).dialog("close");
                                                                $(this).dialog("destroy");

                                                            }
                                                        }],
                                                    open: function ()
                                                    {
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

                                            //   }

                                        }
                                    });
                                }

                            } else
                            {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }
                    }
                }
            });

        } else {
            if (basicData != null && !jQuery.isEmptyObject(basicData))
            {
                var value = basicData[ValidateCommentColumn];
                if (value != null && value != undefined && value == 'Record processed')
                {
                    var message = 'Selected record(s) are already Processed';
                    message = labelObject[message] != null ? labelObject[message] : message;
                    popupMessage(message);
                    return;
                } else if (value != null && value != undefined && (value == 'OK' || value == 'Record Verified'))
                {
                    var message = 'Selected record(s) are already Verified';
                    message = labelObject[message] != null ? labelObject[message] : message;
                    popupMessage(message);
                    return;
                } else
                {
                    if (basicData != null) {
                        selectedRowsData.push(basicData);
                    }
                }
                if (selectedRowsData != null && selectedRowsData.length != 0)
                {
                    $.ajax({
                        type: "post",
                        url: "massValidateData",
                        cache: false,
                        data: {
                            'jsonData': JSON.stringify(selectedRowsData),
                            'tableName': tableName,
                            'gridId': gridId

                        },
                        traditional: true,
                        dataType: 'html',
                        async: true,
                        success: function (response) {
                            stopLoader();
                            $("#dialog1").html((labelObject["Please review the comments(Error log)."] != null ? labelObject["Please review the comments(Error log)."] : "Please review the comments(Error log)."));
                            $("#dialog1").dialog({resizable: false,
                                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                modal: true,
                                width: 300,
                                height: 135,
                                fluid: true,
                                buttons: [{
                                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                        click: function () {

                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
                                            try {
                                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                            } catch (e) {
                                            }
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
//                                                                    $('#' + gridId).jqxGrid('updatebounddata');
                            // $("#" + gridId).jqxGrid('updatebounddata', 'cells');

                        }
                    });
                } else {
                    var message = 'Please select record(s) to process';
                    message = labelObject[message] != null ? labelObject[message] : message;
                    popupMessage(message);
                }
            } else {
                var message = 'Please select record(s) to process';
                message = labelObject[message] != null ? labelObject[message] : message;
                popupMessage(message);
            }

        }
        stopLoader();

        return resultObj;
    } catch (c) {
        console.log(c);
        stopLoader();
    }

}

function showMOCRValidateResponseGrid(mainGrid, gridId, colName, batchId)
{
    $("#showAssetMOCRValidateResponseGridId").remove();
    $("#dialog7").html("<div id='showAssetMOCRValidateResponseGridId'></div>");
    $("#dialog7").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        width: 800,
        height: 528,
        fluid: true,
        buttons: [{
                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    try {
                        $("#" + mainGrid).jqxGrid("unselectrow", 0);
                        $("#" + mainGrid).jqxGrid("selectrow", 0);
                    } catch (e) {
                    }
                }
            }],
        open: function ()
        {
            fetchGrid({}, gridId, batchId, "showAssetMOCRValidateResponseGridId", colName);
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


function saveMOCRBulkData(gridId, dataField, controlInd)
{
    try {

        var labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }

        var selectedRowsData = [];
        var index = 0;
        var panelId = $('#panelId').val();
        var formId = $('#formId').val();
        var tableName = $('#tableName').val();
        var defaultValues = $("#defaultValues").val();
        var batchId = $('#mocrBatchId').val();
        var basicData = {};
        var count = 0;
        var batchInd = $('#batchIndicator').val();
        var ValidateCommentColumn = $('#' + gridId + '_massValidateComment').val();
        if (!(ValidateCommentColumn != null && ValidateCommentColumn != '')) {
            ValidateCommentColumn = $('#massValidateComment').val();
        }
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
                basicData[textid] = textval;


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
//                panaloldData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                }

            }
        });
        if (batchInd != null && batchInd != undefined && batchInd == 'Y')
        {
            if (basicData != null) {
                selectedRowsData.push(basicData);
            }

            if (selectedRowsData != null && selectedRowsData.length != 0) {
                if (batchId != null && batchId != '' && batchId != 'undefined' && batchId != 'Currently no batch(s) available')
                {
                    //showLoader();
                    showMOCRProcessMessage("The MOCR process from the Staging to the Active area has been initiated. You will be notified once it is completed.");
                    processStepsInterval[batchId] = setInterval(function () {
                        // this will run after every 5 seconds
                        refreshMOCRProcessStatus(batchId);
                    }, 500);
                    $.ajax({
                        type: "post",
                        url: "massMOCRSaveRecord",
                        cache: false,
                        data: {'jsonData': JSON.stringify(selectedRowsData),
                            //'dropVal': maasSelect,
                            'defaultValues': defaultValues,
                            'formId': formId,
                            'tableName': tableName,
                            'gridId': gridId,
                            'panelId': panelId,
                            'batchId': batchId,
                            'dataField': dataField,
                            'buttonLabel': controlInd
                        },
                        traditional: true,
                        dataType: 'html',
                        success: function (response) {
                            var asyncFlag = false;
                            if (asyncFlag) {
                                stopLoader();
                                var result = JSON.parse(response);
                                var flag = result['flag'];
                                if (flag) {
                                    var mocrNo = result['mocrNo'];
                                    var basicData = result['basicData'];
                                    var navgnGridId = result['navgnGridId'];
                                    $("#dialog").html(result['resultMessage']);
                                    $("#dialog").dialog({resizable: false,
                                        title: 'Message',
                                        modal: true,
                                        height: 'auto',
                                        minHeight: 'auto',
                                        minWidth: 400,
                                        maxWidth: 'auto',
                                        fluid: true,
                                        buttons: {
                                            Ok: function () {
                                                $("#dxpFormContent").empty();
                                                var $tabsElement = $('#dxpFromTab');
                                                $tabsElement.hide();
                                                $("#dxpMOCRPendingTreeDiv").append("<div id='" + navgnGridId + "'></div>");
                                                $("#" + navgnGridId).attr("data-gridResultObj", JSON.stringify(basicData));
                                                var gridInitParamObj = basicData['gridInitParamObj'];
                                                var treeId = gridInitParamObj['uuu_mocrTreeId'];
                                                getMocrCreateAssetTreeobject(treeId, "dxpMOCRPendingTreeDiv", mocrNo, dataField, basicData, navgnGridId, "N");
                                                // navigateToMOCRForm(dataField, basicData, 'form', navgnGridId, "", 0, "N", "", mocrNo);
                                                $(this).html("");
                                                $(this).dialog("close");
                                                $(this).dialog("destroy");
                                            }
                                        },
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
                                } else {
                                    $("#dialog").html(result['resultMessage']);
                                    $("#dialog").dialog({resizable: false,
                                        title: 'Message',
                                        modal: true,
                                        height: 'auto',
                                        minHeight: 'auto',
                                        minWidth: 400,
                                        maxWidth: 'auto',
                                        fluid: true,
                                        buttons: {
                                            Ok: function () {
                                                $(this).html("");
                                                $(this).dialog("close");
                                                $(this).dialog("destroy");
                                            }
                                        },
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

                            // alert(response);
                            console.log("success:::::" + response);
                        }
                    });
                } else
                {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }
            }


        } else {

            if (selectedRowsData.length > 0)
            {
                var data = basicData;
                if (data != null) {
                    var value = basicData[ValidateCommentColumn];
                    if (value != null && value != undefined && (value == 'OK' || value == 'Record Verified'))
                    {
                        if (data != null)
                        {
                            selectedRowsData.push(data);
                        }
                    } else if (value != null && value != undefined && value == 'Record processed')
                    {
                        var message = 'Selected record(s) are already Processed';
                        message = labelObject[message] != null ? labelObject[message] : message;
                        popupMessage(message);
                        return;
                    } else
                    {
                        var message = 'Please select only record(s) with no Validation error(s)';
                        message = labelObject[message] != null ? labelObject[message] : message;
                        popupMessage(message);
                        return;
                    }
                }
                if (selectedRowsData != null && selectedRowsData.length != 0)
                {
                    $.ajax({
                        type: "post",
                        url: "massMOCRSaveRecord",
                        cache: false,
                        data: {'jsonData': JSON.stringify(selectedRowsData),
                            //'dropVal': maasSelect,
                            'defaultValues': defaultValues,
                            'formId': formId,
                            'tableName': tableName,
                            'gridId': gridId,
                            'panelId': panelId
                        },
                        traditional: true,
                        dataType: 'html',
                        success: function (response) {
                            var result = JSON.parse(response);
                            var flag = result.flag;
                            stopLoader();
                            $("#dialog").html(result.resultMessage);
                            $("#dialog").dialog({resizable: false,
                                title: 'Message',
                                modal: true,
                                height: 'auto',
                                minHeight: 'auto',
                                minWidth: 400,
                                maxWidth: 'auto',
                                fluid: true,
                                buttons: {
                                    Ok: function () {
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                        $("#" + gridId).jqxGrid('clearselection');
//                                    $("#" + gridId).jqxGrid('clearfilters');
                                    }
                                },
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

                            // alert(response);
                            console.log("success:::::" + response);
                        }
                    });
                } else {
                    var message = 'Please select a Record(s) to process';
                    message = labelObject[message] != null ? labelObject[message] : message;
                    popupMessage(message);
                }
            } else {
                var message = 'Please select a Record(s) to process';
                message = labelObject[message] != null ? labelObject[message] : message;
                popupMessage(message);
            }
        }


    } catch (c) {
        console.log(c);
        stopLoader();
    }

}


function getPendingAssetTreeobject(treeId, treeDivId, parentValue) {
    if (treeId != null) {
        showLoader();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getPendingDxpAssetTree",
            cache: false,
            data: {
                treeId: treeId,
                parentValue: parentValue
            },
            success: function (treeObject) {
                getPendingAssetTreeConfig(treeObject, treeDivId);
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });

    }

}

function getPendingAssetTreeConfig(treeObj, treeDivId) {
    stopLoader();
    var treeConfigObj = treeObj['treeConfigObj'];
    var columnsObj = treeObj['treeColumnObj'];
    //treeConfigObj.checkboxes = true;
    $('#' + treeDivId).jqxTree(treeConfigObj);
    $("#" + treeDivId).jqxTree('focus');
    $("#jqxTreeDropdown").hide();


    $('#' + treeDivId).unbind('mouseenter').on('mouseenter', '.jqx-tree-item', function (e) {
        $(this).removeAttr('title');
    });




    $('#' + treeDivId).on('select', function (event)
    {
        var rightClick = isRightClick(event);
        if (!(rightClick)) {
            var args = event.args;
            var item = $('#' + treeDivId).jqxTree('getItem', args.element);
            var label = item.label;
            var idMatch = label.match(/id='([^']+)'/);
            var labelId = idMatch[1];
            var instance = $("#" + labelId).attr("data-instance");
            var businessUnit = $("#" + labelId).attr("data-business_unit");
            var recordNo = $("#" + labelId).attr("data-record_no");
            var erpNo = $("#" + labelId).attr("data-erp_no");
            var objectType = $("#" + labelId).attr("data-object_type");
            var conceptId = $("#" + labelId).attr("data-concept_id");
            var gridId = $("#" + labelId).attr("data-grid_id");
            var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
            var basicData = {};
            basicData['CONCEPT_ID'] = conceptId;
            basicData['INSTANCE'] = instance;
            basicData['BUSINESS_UNIT'] = businessUnit;
            basicData['RECORD_NO'] = recordNo;
            basicData['ERP_NO'] = erpNo;
            basicData['NODE_TYPE'] = objectType;
            basicData['gridId'] = gridId;
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getDXPSelectedAssetTreeForm",
                cache: false,
                data: {
                    basicData: JSON.stringify(basicData),
                    gridId: gridId,
                    recordNo: recordNo
                },
                success: function (response, status, xhr) {

                    var basicData = response['basicData'];
                    var gridObj = response['gridObj'];
                    var hrefColumn = response['hrefColumn'];
                    if (basicData != null && !jQuery.isEmptyObject(basicData)
                            && gridObj != null && !jQuery.isEmptyObject(gridObj))
                    {
                        showNavigateToForm(hrefColumn, basicData, 'form', gridId, "", 0, "N", gridObj, "dxpMOCRPendingTreeFormDiv");
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




}

function getMocrCreateAssetTreeobject(treeId, treeDivId, parentValue, dataField, gridData, gridId, plantFlag, role, domain) {
    var rightClick = false;
    if (treeId != null) {
        showLoader();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getPendingDxpAssetTree",
            cache: false,
            data: {
                treeId: treeId,
                parentValue: parentValue,
                role: role,
                domain: domain
            },
            success: function (treeObject) {
                stopLoader();
                var treeConfigObj = treeObject['treeConfigObj'];
                var columnsObj = treeObject['treeColumnObj'];
                var treeDragandDropConfigObj = treeObject['treeDragandDropConfigObj'];
                var treeButtonsDivStr = treeObject['treeButtonsDivStr'];
                //$("#" + treeButtonsDivId).html(treeButtonsDivStr);
                treeConfigObj.checkboxes = true;
                treeConfigObj.allowDrag = true;
                treeConfigObj.allowDrop = true;
                window.dragSource = null;
                treeConfigObj.dragStart = function (dragItem) {
                    var tree = $('#' + treeDivId).jqxTree('getInstance');
                    var dragItemElement = document.getElementById(dragItem.id);
                    window.dragSource = {
                        item: dragItem,
                        parent: dragItem.parentElement ? tree.getItem(dragItem.parentElement) : null,
                        wasExpanded: tree.isExpanded(dragItemElement),
                        index: $(dragItemElement).index()
                    };
                    return true;
                };
                treeConfigObj.dragEnd = function (dragItem, dropItem, args, dropPosition, tree)
                {
                    var container = $('#' + treeDivId)[0];
                    var containerRect = container.getBoundingClientRect();
                    if (!dropItem) {
                        alert("You cannot drop the item outside the tree container!");
                        //tree.moveItem(dragItem, window.dragSource.parent, window.dragSource.index);
                        return false;
                    }

                    //var dropItemElement = document.getElementById(dropItem['element']['id']);
                    // var dropItemRect = dropItemElement.getBoundingClientRect();
                    if (!(dropItem.originalEvent != null))
                    {
                        var dragParentItem = dragItem.parentElement;
                        showAssetTreeMoveCopyDialog(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
                        return true;
                    }
                    var mouseX = dropItem.originalEvent.clientX;
                    var mouseY = dropItem.originalEvent.clientY;
                    if (mouseY >= containerRect.top &&
                            mouseX >= containerRect.left &&
                            mouseY <= containerRect.bottom &&
                            mouseX <= containerRect.right) {
//                    if (dropItemRect.top >= containerRect.top &&
//                            dropItemRect.left >= containerRect.left &&
//                            dropItemRect.bottom <= containerRect.bottom &&
//                            dropItemRect.right <= containerRect.right) {
                        var dragParentItem = dragItem.parentElement;
                        showAssetTreeMoveCopyDialog(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
                        return true;
                    } else {
                        alert("You cannot drop the item outside the tree container!");
                        return false;
                    }

                };
//                treeConfigObj.dragEnd = function (dragItem, dropItem, args, dropPosition, tree)
//                {
//                    var dragParentItem = dragItem.parentElement;
//                    showAssetTreeMoveCopyDialog(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
//                    return true;
//                };
                $("#dxpMOCRpendingTreeSearchDiv").html(
                        "<div id ='dxpMOCRpendingTreeButtonsDivId'></div>"
                        + "<div id='dxpMOCRpendingTreeSearchInputDivId' class='dxpMOCRpendingTreeSearchInputDivClass'>"
                        + "<div class='dxpMOCRPendingTreeSerch'>"
                        + "<input type='text' id='treeMOCRSearchInput' placeholder='Search in tree...' " +
                        "style='width:98%; padding:5px; margin:5px; border:1px solid #ccc; border-radius:4px;'/>" +
                        "<span id='treeMOCRClearBtn' style='position:absolute; right:8px; top:83%; transform:translateY(-50%); " +
                        "cursor:pointer; font-weight:bold; color:#888;font-size:14px;'>&times;</span>" +
                        +"</div>"
                        + "</div>"
                        );
                $("#dxpMOCRPendingTreeDivId").html(
                        "<div id ='" + treeDivId + "'></div>"
                        );
                $("#dxpMOCRpendingTreeButtonsDivId").html(treeButtonsDivStr);
                $('#' + treeDivId).jqxTree(treeConfigObj);
                $("#" + treeDivId).jqxTree('focus');
                $("#" + treeDivId).attr("columnsObj", JSON.stringify(columnsObj));
                $("#" + treeDivId).attr("treeDragandDropConfigObj", JSON.stringify(treeDragandDropConfigObj));
                var treeInitParamsObj = columnsObj[0]['TREE_INIT_PARAMS'];
                var mocrTreeExpansionFlagType = treeInitParamsObj['uuu_TreeExpansionFlag'];
                if (mocrTreeExpansionFlagType != null && mocrTreeExpansionFlagType != '' && mocrTreeExpansionFlagType != undefined
                        && mocrTreeExpansionFlagType.startsWith("Y:"))
                {
                    var mocrTreeExpansionFlag = mocrTreeExpansionFlagType.split(":")[0];
                    var mocrTreeExpansionType = mocrTreeExpansionFlagType.split(":")[1];
                    if (mocrTreeExpansionFlag && mocrTreeExpansionType != null && mocrTreeExpansionFlag && mocrTreeExpansionType != ''
                            && mocrTreeExpansionFlag && mocrTreeExpansionType != undefined) {
                        var $targetLi = $("#" + treeDivId).find("div[data-object_type='" + mocrTreeExpansionType + "']").first().closest("li");
                        $("#" + treeDivId).jqxTree('checkItem', $targetLi[0], true);
                        setTimeout(function () {
                            expandAssetPendingHierData(treeDivId);
                        }, 1000);
                    }
                }
                // 🔹 Search functionality
                $("#treeMOCRSearchInput").off("keyup").on("keyup", function () {
                    var searchText = $(this).val().toLowerCase();
                    var $treeDiv = $("#" + treeDivId);   // the tree container
                    var treeItems = $treeDiv.find(".jqx-tree-item");

                    // reset previous highlights
                    treeItems.css({"background-color": "", "font-weight": ""});
                    if (searchText.length > 0) {
//                        $treeDiv.find('li').hide();
                        treeItems.closest("li").hide();

                        var matchingItems = [];
                        treeItems.each(function () {
                            var itemText = $(this).text().toLowerCase();
                            if (itemText.indexOf(searchText) !== -1) {
                                // Highlight the matching item
                                $(this).css({"background-color": "#ffe680", "font-weight": "bold"});

                                // Get the li element that contains this item
                                var $li = $(this).closest('li');
                                matchingItems.push($li);
                            }
                        });

                        // For each matching item, show it and all its parents
                        matchingItems.forEach(function ($matchingLi) {
                            $matchingLi.show();
                            $matchingLi.parents('li').show();
//                            $matchingLi.parents('ul').show();
                        });

                    } else {
                        $treeDiv.find('li').show();
//                        $treeDiv.find('ul').show();
                    }
                    $treeDiv.jqxTree('refresh');
                });
                $("#dxpMOCRpendingTreeSearchDiv").on("click", "#treeMOCRClearBtn", function () {
                    $("#treeMOCRSearchInput").val("");
                    var $treeDiv = $("#" + treeDivId);
                    var treeItems = $treeDiv.find(".jqx-tree-item");
                    treeItems.css({"background-color": "", "font-weight": ""});
                    $treeDiv.find("li").show();
                    $treeDiv.jqxTree('refresh');
                });
                $('#' + treeDivId).on('mousedown', function (event) {
                    var target = $(event.target).parents('li:first')[0];
                    rightClick = isRightClick(event);
                    if (rightClick && target != null) {
                        $('#' + treeDivId).jqxTree('selectItem', target);
                        var selectedItem = $('#' + treeDivId).jqxTree('getSelectedItem');
                        var selectedParentItem = {};
                        try {
                            selectedParentItem = $('#' + treeDivId).jqxTree('getItem', selectedItem.parentElement);
                            if (selectedParentItem != null) {
                                selectedParentItem = $('#' + treeDivId).jqxTree('getItem', selectedParentItem.parentElement);
                            }
                        } catch (e) {
                        }
                        if (selectedItem.level >= 1) {
                            var selectedLabel = selectedItem.label;
                            var selectedLabelIds = selectedLabel.match(/id='([^']+)'/);
                            var selectedLblId = selectedLabelIds[1];
                            var objType = $("#" + selectedLblId).attr("data-object_type");
                            var recordNo = $("#" + selectedLblId).attr("data-record_no");
                            var mocrNo = $("#" + selectedLblId).attr("data-mocr_number");
                            var erpNo = $("#" + selectedLblId).attr("data-erp_no");
                            var allowTypes = [];
                            var treeDragandDropObj = {};
                            var treeDragandDropConfigObjStr = $("#" + treeDivId).attr("treeDragandDropConfigObj");
                            if (treeDragandDropConfigObjStr != null && treeDragandDropConfigObjStr != '' && treeDragandDropConfigObjStr != undefined)
                            {
                                var treeDragandDropCnfgObj = JSON.parse(treeDragandDropConfigObjStr);
                                if (treeDragandDropCnfgObj != null && !jQuery.isEmptyObject(treeDragandDropCnfgObj))
                                {
                                    treeDragandDropObj = treeDragandDropCnfgObj[objType];
                                    if (treeDragandDropObj != null && !jQuery.isEmptyObject(treeDragandDropObj))
                                    {
                                        allowTypes = Object.keys(treeDragandDropObj);
                                    }
                                }
                            }

                            var rightClickFunc = "";
                            if (allowTypes != null && !jQuery.isEmptyObject(allowTypes) && allowTypes.length > 0) {
                                $.each(allowTypes, function (index, val) {
                                    var allowType = allowTypes[index];
                                    if (allowType != null && allowType != '' && allowType != undefined) {
                                        allowType = allowType.trim();
                                        var allowTypeStr = treeDragandDropObj[allowType];
                                        if (allowTypeStr != null && allowTypeStr != '' && allowTypeStr != undefined)
                                        {
                                            var allowTypeObj = allowTypeStr.split(",");
                                            if (allowTypeObj != null && !jQuery.isEmptyObject(allowTypeObj))
                                            {
                                                $.each(allowTypeObj, function (ind, value) {
                                                    var methodLabelNames = allowTypeObj[ind];
                                                    var methodLabelNamesArr = methodLabelNames.split(";");
                                                    rightClickFunc += methodLabelNamesArr[0] + ":" + methodLabelNamesArr[1] + "(this,'" + methodLabelNamesArr[2] + "','" + treeId + "','" + treeDivId + "','" + selectedItem.value + "','" + objType + "','" + allowType + "','" + recordNo + "','" + mocrNo + "','" + erpNo + "');";
                                                });
                                            }
                                        }

                                    }
                                });
                            }
                            rightClickFunc += "DeLink:deleteAssetTreeNodes(this,'" + treeId + "','" + treeDivId + "','" + selectedItem.value + "','" + objType + "','" + recordNo + "','" + mocrNo + "','" + erpNo + "');";
                            var menuItems = "";
                            var menuHeight;
                            if (rightClickFunc != null) {
                                var options = rightClickFunc.split(";");
                                menuHeight = options.length;
                                $.each(options, function (index) {
                                    var menuItem = options[index].split(":")[0];
                                    var funcName = options[index].split(":")[1];
                                    if (menuItem != null && menuItem != '' && menuItem != undefined
                                            && funcName != null && funcName != '' && funcName != undefined)
                                    {
                                        menuItems += "<li onclick=\"" + funcName + "\">" + menuItem + "</li>"
                                    }

                                });
                            }
                            $("#jqxMenu").remove();
                            $("body").append("<div id='jqxMenu' class='jqxMenuClass'><ul></ul></div>");
                            $("#jqxMenu ul").html(menuItems);
                            var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup', theme: 'energyblue'}); // ravi start
                            var scrollTop = $(window).scrollTop();
                            var scrollLeft = $(window).scrollLeft();
                            contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                            rightClick = false;
                            return true;
                        } else {
                            rightClick = false;
                            $('#' + treeId).jqxTree('selectItem', null);
                            return false;
                        }


                    } else {
                        var rightItem = $(event.target).closest('li');
                        $('#' + treeId).jqxTree('selectItem', rightItem[0]);
                    }
                });

                $('#' + treeDivId).on('expand', function (event) {
                    showLoader();
                    var parentItem = $('#' + treeDivId).jqxTree('getItem', event.args.element);
                    var level = parentItem.level;
                    var $element = $(event.args.element);
                    var loader = false;
                    var loaderItem = null;
                    var assetType = $($element).first().attr('item-description');
                    var children = $element.find('ul:first').children();
                    $.each(children, function () {
                        var item = $('#' + treeDivId).jqxTree('getItem', this);
                        if (item && item.value == 'ajax') {
                            loaderItem = item;
                            loader = true;
                            return false;
                        }

                    });

                    if (loaderItem != null) {
                        var extTreeParams = $("#extTreeParams").val();
                        $('#' + treeDivId).jqxTree('removeItem', loaderItem.element);
                        $.ajax({
                            type: "post",
                            traditional: true,
                            dataType: 'json',
                            url: "getDXPAssetTreeDataOpt",
                            cache: false,
                            data: {
                                parentkey: ((level == 0 && plantFlag == 'Y') ? "1000" : parentItem.value),
                                assetType: assetType,
                                treeId: treeId,
                                level: parentItem.level,
                                extTreeParams: extTreeParams,
                                columnsObj: JSON.stringify(columnsObj),
                            },
                            success: function (data, status, xhr) {
                                var children = $element.find('ul:first').children();
                                if (!(children != null && !jQuery.isEmptyObject(children) && children.length > 0)) {
                                    $('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                                }
                                //$('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                                var items = $('#' + treeDivId).jqxTree('getItems');
                                stopLoader();
                                $.each(items, function () {
                                    $(this.titleElement).attr('title', this.label);
                                    $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                                });
                            },
                            error: function (e) {
                                console.log(e);
                                sessionTimeout(e);
                                stopLoader();
                            }
                        });
                    } else {
                        stopLoader();
                    }
                    $('#' + treeDivId).jqxTree('refresh');


                });
                $("#jqxTreeDropdown").hide();
                $('#dxpMOCRPendingTreeWithGridSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0,
                    panels: [{size: '25%', min: 150, resizable: true}, {size: '74%', min: 150, resizable: true}]
                });
                $('#dxpMOCRTreeWithSearchSplitter').jqxSplitter({
                    width: '100%',
                    height: '100%',
                    orientation: 'horizontal',
                    splitBarSize: 0,
                    panels: [{size: '13%', min: 35, resizable: false}, {size: '87%', min: 35, resizable: false}]
                });
                showSelectedTabContent(null, 'dxpMOCRPendingTreeWithGrid', 'dxpMOCRPendingTreeWithGridContent', 'View MOCR Form', 'N');

                $('#' + treeDivId).unbind('mouseenter').on('mouseenter', '.jqx-tree-item', function (e) {
                    $(this).removeAttr('title');
                });
                $('#' + treeDivId).on('select', function (event) {
                    if (!(rightClick)) {
                        var args = event.args;
                        var item = $('#' + treeDivId).jqxTree('getItem', args.element);
                        var label = item.label;
                        if (label.includes('Show More...')) {
                            var offset = item['value'] || 0;
                            var parentElement = item.parentElement; // store parent to append children
                            var parentItem = $('#' + treeDivId).jqxTree('getItem', parentElement);

                            // Remove the "Show More..." placeholder
                            $('#' + treeDivId).jqxTree('removeItem', item.element);
                            // Call backend with new offset
                            showLoader();
                            $.ajax({
                                type: "post",
                                traditional: true,
                                dataType: 'json',
                                url: "getDXPAssetTreeDataOpt",
                                cache: false,
                                data: {
                                    parentkey: parentItem.value,
                                    assetType: $(parentItem.element).attr('item-description'),
                                    treeId: treeId,
                                    level: parentItem.level,
                                    columnsObj: JSON.stringify(columnsObj),
                                    offset: offset
                                },
                                success: function (data) {
                                    stopLoader();
                                    $('#' + treeDivId).jqxTree('addTo', data, parentItem.element);
                                    return; // prevent normal select handling
                                },
                                error: function (e) {
                                    console.log(e);
                                    stopLoader();
                                    return; // prevent normal select handling
                                }

                            });


                        }
                        var idMatch = label.match(/id='([^']+)'/);
                        var labelId = idMatch[1];
                        var instance = $("#" + labelId).attr("data-instance");
                        var businessUnit = $("#" + labelId).attr("data-business_unit");
                        var recordNo = $("#" + labelId).attr("data-record_no");
                        var erpNo = $("#" + labelId).attr("data-erp_no");
                        var mocrNo = $("#" + labelId).attr("data-mocr_number");
                        var objectType = $("#" + labelId).attr("data-object_type");
                        var conceptId = $("#" + labelId).attr("data-concept_id");
                        var gridId = $("#" + labelId).attr("data-grid_id");
                        var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
                        var basicData = {};
                        if (objectType != null && objectType != '' && objectType != undefined
                                && objectType == 'MOCR') {
                            basicData['MOCR_NUMBER'] = mocrNo;
                            basicData['NODE_TYPE'] = objectType;
                            basicData['gridId'] = gridId;
                        } else {
                            basicData['CONCEPT_ID'] = conceptId;
                            basicData['INSTANCE'] = instance;
                            basicData['BUSINESS_UNIT'] = businessUnit;
                            basicData['RECORD_NO'] = recordNo;
                            basicData['ERP_NO'] = erpNo;
                            basicData['NODE_TYPE'] = objectType;
                            basicData['gridId'] = gridId;
                            basicData['MOCR_NUMBER'] = mocrNo;
                        }
                        $.ajax({
                            type: "post",
                            traditional: true,
                            dataType: 'json',
                            url: "getDXPSelectedAssetTreeForm",
                            cache: false,
                            data: {
                                basicData: JSON.stringify(basicData),
                                gridId: gridId,
                                recordNo: recordNo
                            },
                            success: function (response, status, xhr) {

                                var basicData = response['basicData'];
                                var gridObj = response['gridObj'];
                                var hrefColumn = response['hrefColumn'];
                                if (basicData != null && !jQuery.isEmptyObject(basicData)
                                        && gridObj != null && !jQuery.isEmptyObject(gridObj))
                                {
                                    showNavigateToForm(hrefColumn, basicData, 'form', gridId, "", 0, "N", gridObj, "dxpMOCRPendingTreeFormDiv");
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
                navigateToMOCRForm(dataField, gridData, 'form', gridId, "", 0, "N", "dxpMOCRPendingTreeFormDiv", parentValue);

            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });

    }

}

function clearExistingMocrDivs()
{
    $("#dxpMOCRSearchDiv").empty();
    $("#dxpMOCRSearchButtonsDiv").empty();
    $("#dxpMOCRTreeDiv").empty();
    $("#dxpMOCRTreeGridDiv").empty();
    $('#dxpMOCRTreeWithGridSplitter').off();
    // Remove the splitter bars (the draggable resize handles)
    //$('#dxpMOCRTreeWithGridSplitter .jqx-splitter-bar').remove();
    $('#dxpMOCRTreeWithGridSplitter .jqx-splitter-splitbar-vertical').remove();
    // Optionally, reset styles to default
    $('#dxpMOCRTreeWithGridSplitter').removeClass('jqx-splitter').css({
        'width': 'auto',
        'height': 'auto',
        'border': 'none'
    });
    $('#dxpMOCRTreeDiv, #dxpMOCRTreeGridDiv').removeClass('jqx-splitter-panel').css({
        'border': 'none',
        'margin': '0'
    });
}

async function assetSaveHierWithNewMocr(treeDivId, dataGridId, colName, formGridId) {
    try {
        showLoader();
        const checkedItems = $("#" + treeDivId).jqxTree('getCheckedItems');
        var checkedItemsArr = [];
        var checkedItemsObjArr = [];
        if (checkedItems != null && !jQuery.isEmptyObject(checkedItems) && checkedItems.length == 1) {
            $.each(checkedItems, function (i, val) {
                if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
                {
                    checkedItemsArr.push(val['value']);
                    var checkItemsObj = {};
                    checkItemsObj['label'] = val['label'];
                    checkItemsObj['value'] = val['value'];
                    checkedItemsObjArr.push(checkItemsObj);
                }
            });
            populateMOCRSavegridForm(treeDivId, dataGridId, "Y", checkedItemsArr, dataGridId, colName, formGridId);
        } else {
            stopLoader();
            showAssetTreeErrorMsg("Error", "Please select any Node");
        }

    } catch (error) {
        console.error("Error copying asset hierarchy data:", error);
    }
}


function populateMOCRSavegridForm(treeDivId, gridId, editable, checkedItemsArr, dataGridId, colName, navgnGridId) {
    showLoader();
    var role = "";
    if (editable == undefined) {
        editable = "N";
    }
    var editRowData = {};
    var tree = $('#' + treeDivId);
    var checkedItems = tree.jqxTree('getCheckedItems');
    if (checkedItems != null && !jQuery.isEmptyObject(checkedItems) && checkedItems.length == 1) {
        $.each(checkedItems, function (i, val) {
            if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
            {
                var checkedLabel = val['label'];
                var idMatch = checkedLabel.match(/id='([^']+)'/);
                var labelId = idMatch[1];
                var basicDatagridId = $("#" + labelId).attr("data-grid_id");
                var itemType = $("#" + labelId).attr("data-object_type");
                var instance = $("#" + labelId).attr("data-instance");
                var businessUnit = $("#" + labelId).attr("data-business_unit");
                var recordNo = $("#" + labelId).attr("data-record_no");
                var erpNo = $("#" + labelId).attr("data-erp_no");
                var conceptId = $("#" + labelId).attr("data-concept_id");
                editRowData['CONCEPT_ID'] = conceptId;
                editRowData['INSTANCE'] = instance;
                editRowData['BUSINESS_UNIT'] = businessUnit;
                editRowData['RECORD_NO'] = recordNo;
                editRowData['ERP_NO'] = erpNo;
                editRowData['NODE_TYPE'] = itemType;
                editRowData['gridId'] = basicDatagridId;
            }
        });
    }

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "populateGridForm",
        data: {
            gridId: gridId,
            editFlag: editable,
        },
        success: function (response) {
            stopLoader();
            var jsResponse = response.formobj;
            var formTable = "<table id='usertable' class='visionMasterDetailForm visionMOCRSaveAsModelForm'>";
            var disablestr = "";
            var jsResponseObj;
            var man_ind;
            var displayType = "";
            var tb_property = "";
            var count = 0;
            var man_ind = "";
            var dateIds = [];
            var fieldDepParam = "", fieldType = "", dataType = "", maxLength = "", blurFunction = "", regexPattern = "";
            for (var i = 0; i < jsResponse.length; i++) {
                jsResponseObj = jsResponse[i];
                disablestr = "";
                maxLength = jsResponseObj.TEXT_MAXLENGTH == 'NA' ? '' : " maxlength='" + jsResponseObj.TEXT_MAXLENGTH + "'";
                blurFunction = jsResponseObj.ONBLUR_FUNC_NAME == 'NA' ? '' : ' onblur=" return ' + jsResponseObj.ONBLUR_FUNC_NAME + '(\"' + jsResponseObj.COL_NAME + '\") " ';
                regexPattern = jsResponseObj.REGEX == "NA" ? "" : " data-regex='" + jsResponseObj.REGEX + "' ";
                blurFunction = blurFunction + regexPattern + maxLength;


                displayType = "";
                tb_property = "";
                if (editable == 'Y') {

                    jsResponseObj.COL_VALUE = (jsResponseObj.COL_VALUE == undefined) ? "" : jsResponseObj.COL_VALUE;
                    if (jsResponseObj.COL_DATA_TYPE == 'date' || jsResponseObj.COL_DATA_TYPE == 'DATE') {
                        var dateString = editRowData[jsResponseObj.COL_NAME].toString().substr(0, 15);
                        var d = new Date(dateString);
                        jsResponseObj.COL_VALUE = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
                    } else {
//                        if (jsResponseObj.COL_NAME == 'NODE_TYPE')
//                        {
//                            jsResponseObj.COL_VALUE = editRowData['CUSTOM_COLUMN5'] == undefined ? "" : editRowData['CUSTOM_COLUMN5'];
//                        } else if (jsResponseObj.COL_NAME == 'ERP_NO')
//                        {
//                            jsResponseObj.COL_VALUE = editRowData['ERP_NO'] == undefined ? "" : editRowData['ERP_NO'];
//                        } else {
//                            jsResponseObj.COL_VALUE = editRowData[jsResponseObj.COL_NAME] == undefined ? "" : editRowData[jsResponseObj.COL_NAME];
//                        }
                        jsResponseObj.COL_VALUE = editRowData[jsResponseObj.COL_NAME] == undefined ? "" : editRowData[jsResponseObj.COL_NAME];
                    }
                } else {
                    jsResponseObj.COL_VALUE = jsResponseObj.COL_INIT_VAL != null ? jsResponseObj.COL_INIT_VAL : "";
                }


                if (jsResponseObj.COL_DATA_TYPE == null) {
                    dataType = "string";
                } else {
                    dataType = jsResponseObj.COL_DATA_TYPE;
                    if (dataType == 'date') {
                        dateIds.push(jsResponseObj.COL_NAME);
                    }
                }
                if (jsResponseObj.COL_EDT_TYPE == null) {
                    displayType = "";
                } else {
                    displayType = $.trim(jsResponseObj.COL_EDT_TYPE);
                }
                if (jsResponseObj.COL_MAN == null) {
                    man_ind = "O";
                } else {
                    man_ind = jsResponseObj.COL_MAN;
                }
                if (jsResponseObj.FIELD_TYPE == null) {
                    fieldType = "";
                } else {
                    fieldType = jsResponseObj.FIELD_TYPE;
                }
                if (count == 0) {
                    formTable += "<tr>";
                }
                if (displayType.indexOf("DDW_") > -1) {
                    //visionDropdown('DDW_INSTANCE_UM','','GRID-VIEW','MM_MASTER_UM_USER_DETAILS','INSTANCE','0')
                    var colname = jsResponseObj.COL_NAME;
                    var colvalue = jsResponseObj.COL_VALUE;
                    if (colname.indexOf("ROLE") > -1)
                    {
                        role = colvalue;
                    }
                    if (colname != 'REPORT_TO')
                    {
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";
                    }

                    if (colname == 'REPORT_TO' && role.indexOf("REQUESTOR") > -1)
                    {
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";

                    } else if (colname == 'REPORT_TO')
                    {
                        disablestr = " disabled=disabled class ='visionInputDisable";
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer;display:none;' id= 'reportTo' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";

                    }

                }
                if (jsResponseObj.COL_FORM_VIEW_FLAG == 'N') {
                    //   if (displayType == 'INV') {
                    formTable += "<td style='display:none' >"
                            + "<span>" + jsResponseObj.COL_LABEL + (man_ind == "Y" ? "<sup>*</sup>" : "") + "</span>"
                            + "</td>";
                    formTable += "<td  style='display:none'>";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {
                            formTable += "<select  data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {


                        formTable += "<input " + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + "  value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "'  data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "'";
                        formTable += " id='" + jsResponseObj.COL_NAME + "' type='text'/>" + tb_property;
                    }
                    formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>";
                    formTable += "</td>";
                } else if (displayType == 'DISP_ONLY') {
                    formTable += "<td >"
                            + "<span>" + jsResponseObj.COL_LABEL + (man_ind == "Y" ? "<sup>*</sup>" : "") + "</span>"
                            + "</td>";
                    formTable += "<td>";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {


                            formTable += "<select data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {

                        formTable += "<input   value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' disabled='disabled' class ='visionInputDisable' type='text'/>"
                                + tb_property;
                    }
                    formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>"
                            + "</td>";
                } else {
                    formTable += "<td >"
                            + "<span>" + jsResponseObj.COL_LABEL + (man_ind == "M" ? "<sup>*</sup>" : "") + "</span>"
                            + "</td>";
                    formTable += "<td>";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {
                            formTable += "<select data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {
                        if (jsResponseObj.COL_NAME == 'USER_NAME' && editable == 'Y') {
                            formTable += "<input disabled=disabled class ='visionInputDisable' value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.REGEX + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' maxlength='" + jsResponseObj.TEXT_MAXLENGTH + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' type='text' style='text-transform: uppercase;'/>"
                                    + tb_property;
                        } else if (jsResponseObj.COL_NAME == 'USER_NAME') {
                            formTable += "<input onblur=isUserAvailable('" + jsResponseObj.COL_VALUE + "') value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.REGEX + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' maxlength='" + jsResponseObj.TEXT_MAXLENGTH + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' type='text' style='text-transform: uppercase;'/>"
                                    + tb_property;
                        } else {
                            formTable += "<input  " + disablestr + " " + blurFunction + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + " value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' type='text' style='text-transform: uppercase;'/>"
                                    + tb_property;

                        }

                        //   formTable += tb_property;
                    }
                    formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>"
                            + "</td>";
                    //--count;

                }
                if (count > 1) {
                    formTable += "</tr>";
                    count = 0;
                } else {
                    if (jsResponseObj.COL_FORM_VIEW_FLAG != 'N') {
                        count++;
                    }
                }

            }
            formTable += "</table>";
            $("#formView").html("");
            $("#formView").html(formTable);
            if (false) {
                $("#usertable").after("<div id='gridFormDetails'><ul></ul></div>");
                var jsDetailObjs = response.detailobj;
                var detailGridIds = [];
                for (var i = 0; i < jsDetailObjs.length; i++) {
                    delete jsDetailObjs[i].gridPropObj.virtualmode;
                    delete jsDetailObjs[i].gridPropObj.rendergridrows;
                    //    delete jsDetailObjs[i].gridPropObj.renderToolbar;




                    var source =
                            {
                                localdata: [],
                                datafields: jsDetailObjs[i].gridPropObj.datafields,
                                datatype: "json"
                            };
                    var childGridData = jsDetailObjs[i];
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    var childGridId = "tab_" + jsDetailObjs[i].gridId;
                    $("#gridFormDetails ul").append("<li>" + jsDetailObjs[i].gridName + " </li>");
                    $("#gridFormDetails ul").after("<div data-tabName= '" + jsDetailObjs[i].tableName + "' "
                            + "id='" + childGridId + "'></div>");
                    var gridConfigObj = {};
                    gridConfigObj = childGridData.gridPropObj;
                    gridConfigObj.source = dataAdapter;
                    //                fieldsArray = masterObj.columns;
                    gridConfigObj.columns = childGridData.columns;
                    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var cellValue = $("#" + childGridId).jqxGrid('getcellvalue', row, columnfield);
                        var viewType = "GRID-VIEW";
                        var editable = gridConfigObj.editable;
                        if (editable) {
                            var ddwData = childGridData.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            //     return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
                            return "<div  class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + childGridId + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                        } else
                        {
                            var ddwData = childGridData.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                        }

                    };
                    var headerTooltipRenderer = function (element) {
                        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                            position: 'bottom-right',
                            showArrow: false, content: $(element).text()});
                    }
                    var col = childGridData.columns;
                    for (var i = 0; i < col.length; i++) {
                        //////alert("j :::::::::"+i);
                        if (col[i].rendered != null) {
                            col[i].rendered = eval('(' + col[i].rendered + ')');
                        }
                    }

                    for (var i = 0; i < childGridData.columns.length; i++) {
                        if (childGridData.columns[i].cellsrenderer != null) {
                            //columns[i].cellsrenderer = eval(columns[i].cellsrenderer);
                            ////alert(columns[i].cellsrenderer);
                            childGridData.columns[i].cellsrenderer = eval('(' + childGridData.columns[i].cellsrenderer + ')');
                            ////alert("////alert(columns[i].cellsrenderer);  ::: "+columns[i].cellsrenderer);
                        }

                        if (childGridData.columns[i].createeditor != null) {

                            childGridData.columns[i].createeditor = eval('(' + childGridData.columns[i].createeditor + ')');
                        }

                        if (childGridData.columns[i].initeditor != null) {


                            childGridData.columns[i].initeditor = eval('(' + childGridData.columns[i].initeditor + ')');
                        }
                        if (childGridData.columns[i].geteditorvalue != null) {


                            childGridData.columns[i].geteditorvalue = eval('(' + childGridData.columns[i].geteditorvalue + ')');
                        }
                        if (childGridData.columns[i].cellbeginedit != null) {


                            childGridData.columns[i].cellbeginedit = eval('(' + childGridData.columns[i].cellbeginedit + ')');
                        }
                        if (childGridData.columns[i].rendered != null) {


                            childGridData.columns[i].rendered = eval('(' + childGridData.columns[i].rendered + ')');
                        }

                    }
                    gridConfigObj.rendergridrows = function (obj) {
                        return obj.data;
                    };
//             gridConfigObj.showtoolbar = true;
                    var renderToolbar = gridConfigObj.renderToolbar;
                    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');
                    $("#" + childGridId).jqxGrid(gridConfigObj);
                    $("#" + childGridId).on('cellbeginedit', function (event)
                    {
                        $("#" + childGridId).attr('data-last-ed-field', event.args.datafield);
                        $("#" + childGridId).attr('data-last-ed-row', event.args.rowindex);
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
                        $("#" + childGridId).jqxGrid('selectrow', rowBoundIndex);
//end
                    });
                }
            }
            $("#formView").dialog({resizable: false,
                title: 'Save as Model',
                modal: true,
                height: 250,
                width: 1100,
                minWidth: 1100,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: "Save",
                        id: 'updateUserInfo',
                        click: function () {
                            showLoader();
                            var errorCnt = 0;
                            var jsobject = new Object();
                            var textboxes = $('#usertable').find('input,select');
                            var col, isman, label = false, regexTest, regexErrorMsg;
                            textboxes.each(function () {
                                //col = this.attr('id');
                                col = this.id;
                                isman = $("#" + col).attr('data-man');
                                label = $("#" + col).attr('data-label');
                                regexTest = $("#" + col).attr('data-regex');
                                regexErrorMsg = $("#" + col).attr('data-regexvalue');
                                if (this.value.length == 0 && isman == 'M') {
                                    errorMessage("#" + col + "_disp", "Please fill " + label);
                                    errorCnt++;
                                } else {
                                    $("#" + col + "_disp").html("");
                                }
                                jsobject[col] = this.value;
                            });
                            if (errorCnt > 0)
                            {
                                stopLoader();
                                return;
                            }
                            copyHierarchyWithNewMOCRDetails(treeDivId, jsobject, dataGridId, colName, navgnGridId, checkedItemsArr);
                            //saveHierarchyWithNewMOCRDetails(treeDivId, jsobject, dataGridId, colName, navgnGridId, checkedItemsArr);
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }, {
                        text: "Cancel",
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
            for (var i = 0; i < dateIds.length; i++) {
                $("#" + dateIds[i]).datepicker(
                        {
                            dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true
                        }
                );
            }


        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });
}

function saveModelHierarchyMoCR(checkedItemsObj, copyTreeDivId, newFloc, modelName, modelDesc, modelType, instance, plant, gridId)
{
    showLoader();
    var columnsObj = $("#" + copyTreeDivId + "_Copy_Id").attr("columnsObj");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "saveModelCopyAssetTreeMocrData",
        cache: false,
        contentType: "application/json", // 🔥 This is key
        data: JSON.stringify({
            checkedItemsObj: checkedItemsObj,
            modelName: modelName,
            modelDesc: modelDesc,
            modelType: modelType,
            instance: instance,
            plant: plant,
            gridId: gridId,
            newFloc: newFloc,
            columnsObj: columnsObj
        }),
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            if (response != null && !jQuery.isEmptyObject(response)) {
                var batchId = response['batchId'];
                showMOCRProcessMessage("The MOCR process on Save Model Hierarchy has been initiated. You will be notified once it is completed.");
                processStepsInterval[batchId] = setInterval(function () {
                    // this will run after every 5 seconds
                    refreshMOCRProcessStatus(batchId);
                }, 500);
            }
//            if (response != null && !jQuery.isEmptyObject(response)) {
//                var message = response['Message'];
//                var mocrNo = response['mocrNo'];
//                var basicData = response['basicData'];
//                var dataField = response['dataField'];
//                if (message != null && message != '' && message != undefined)
//                {
//                    $("#assetChangeReqDialogId").remove();
//                    $("body").append("<div id='assetChangeReqDialogId'></div>");
//                    var divHtml = "<div id='assetChageRequestDivId' class=''>"
//                            + "<h6 class='AssetMOCRChangeRequestSpanClass'>" + message + "</h6>"
//                            + "</div>";
//                    $("#assetChangeReqDialogId").html(divHtml);
//                    $("#assetChangeReqDialogId").dialog({
//                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
//                        modal: true,
//                        height: 180,
//                        width: 600,
//                        fluid: true,
//                        buttons: [
//                            {
//                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                class: 'rdsMoveCopyButton',
//                                click: function () {
//                                    $("#" + gridId).remove();
//                                    $("body").append("<div id='" + gridId + "'></div>")
//                                    $("#" + gridId).attr("data-gridResultObj", JSON.stringify(basicData));
//                                    var gridInitParamObj = basicData['gridInitParamObj'];
//                                    var treeId = gridInitParamObj['uuu_mocrTreeId'];
//                                    getMocrCreateAssetTreeobject(treeId, "dxpMOCRPendingTreeDiv", mocrNo, dataField, basicData, gridId, "N");
//
//
//
//                                    // navigateToMOCRForm(dataField, basicData, 'form', gridId, "", 0, "N", "", mocrNo);
//                                    $(this).html("");
//                                    $(this).dialog('close');
//                                    $(this).dialog('destroy');
//
//                                }
//                            }
//                        ],
//                        open: function () {
//                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
//                            $(".visionHeaderMain").css("z-index", "999");
//                            $(".visionFooterMain").css("z-index", "999");
//
//                        },
//                        beforeClose: function (event, ui)
//                        {
//                            $(this).html("");
//                            $(".visionHeaderMain").css("z-index", "99999");
//                            $(".visionFooterMain").css("z-index", "99999");
//                            $("#iframeid").remove();
//                        }
//                    });
//                }
//
//            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });

}

function addAssetTreeNodes($event, treeDivId, gridId, editable)
{
    showLoader();
    var role = "";
    if (editable == undefined) {
        editable = "N";
    }
    var editRowData = {};
    var tree = $('#' + treeDivId);
    var checkedItems = tree.jqxTree('getCheckedItems');
    if (checkedItems != null && !jQuery.isEmptyObject(checkedItems) && checkedItems.length == 1) {
        $.each(checkedItems, function (i, val) {
            if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
            {
                var checkedLabel = val['label'];
                var idMatch = checkedLabel.match(/id='([^']+)'/);
                var labelId = idMatch[1];
                var basicDatagridId = $("#" + labelId).attr("data-grid_id");
                var itemType = $("#" + labelId).attr("data-object_type");
                var instance = $("#" + labelId).attr("data-instance");
                var businessUnit = $("#" + labelId).attr("data-business_unit");
                var recordNo = $("#" + labelId).attr("data-record_no");
                var erpNo = $("#" + labelId).attr("data-erp_no");
                var conceptId = $("#" + labelId).attr("data-concept_id");
                editRowData['CONCEPT_ID'] = conceptId;
                editRowData['INSTANCE'] = instance;
                editRowData['BUSINESS_UNIT'] = businessUnit;
                editRowData['RECORD_NO'] = recordNo;
                editRowData['ERP_NO'] = erpNo;
                editRowData['NODE_TYPE'] = itemType;
                editRowData['gridId'] = basicDatagridId;
            }
        });
    }

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "populateGridForm",
        data: {
            gridId: gridId,
            editFlag: editable,
        },
        success: function (response) {
            stopLoader();
            var jsResponse = response.formobj;
            var formTable = "<table id='usertable' class='visionMasterDetailForm visionMOCRAddHierarchyForm'>";
            var disablestr = "";
            var jsResponseObj;
            var man_ind;
            var displayType = "";
            var tb_property = "";
            var count = 0;
            var man_ind = "";
            var dateIds = [];
            var fieldDepParam = "", fieldType = "", dataType = "", maxLength = "", blurFunction = "", regexPattern = "";
            for (var i = 0; i < jsResponse.length; i++) {
                jsResponseObj = jsResponse[i];
                disablestr = "";
                maxLength = jsResponseObj.TEXT_MAXLENGTH == 'NA' ? '' : " maxlength='" + jsResponseObj.TEXT_MAXLENGTH + "'";
                blurFunction = jsResponseObj.ONBLUR_FUNC_NAME == 'NA' ? '' : ' onblur=" return ' + jsResponseObj.ONBLUR_FUNC_NAME + '(\"' + jsResponseObj.COL_NAME + '\") " ';
                regexPattern = jsResponseObj.REGEX == "NA" ? "" : " data-regex='" + jsResponseObj.REGEX + "' ";
                blurFunction = blurFunction + regexPattern + maxLength;


                displayType = "";
                tb_property = "";
                if (editable == 'Y') {

                    jsResponseObj.COL_VALUE = (jsResponseObj.COL_VALUE == undefined) ? "" : jsResponseObj.COL_VALUE;
                    if (jsResponseObj.COL_DATA_TYPE == 'date' || jsResponseObj.COL_DATA_TYPE == 'DATE') {
                        var dateString = editRowData[jsResponseObj.COL_NAME].toString().substr(0, 15);
                        var d = new Date(dateString);
                        jsResponseObj.COL_VALUE = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
                    } else {
//                        if (jsResponseObj.COL_NAME == 'NODE_TYPE')
//                        {
//                            jsResponseObj.COL_VALUE = editRowData['CUSTOM_COLUMN5'] == undefined ? "" : editRowData['CUSTOM_COLUMN5'];
//                        } else if (jsResponseObj.COL_NAME == 'ERP_NO')
//                        {
//                            jsResponseObj.COL_VALUE = editRowData['ERP_NO'] == undefined ? "" : editRowData['ERP_NO'];
//                        } else {
//                            jsResponseObj.COL_VALUE = editRowData[jsResponseObj.COL_NAME] == undefined ? "" : editRowData[jsResponseObj.COL_NAME];
//                        }
                        jsResponseObj.COL_VALUE = editRowData[jsResponseObj.COL_NAME] == undefined ? "" : editRowData[jsResponseObj.COL_NAME];
                    }
                } else {
                    jsResponseObj.COL_VALUE = jsResponseObj.COL_INIT_VAL != null ? jsResponseObj.COL_INIT_VAL : "";
                }


                if (jsResponseObj.COL_DATA_TYPE == null) {
                    dataType = "string";
                } else {
                    dataType = jsResponseObj.COL_DATA_TYPE;
                    if (dataType == 'date') {
                        dateIds.push(jsResponseObj.COL_NAME);
                    }
                }
                if (jsResponseObj.COL_EDT_TYPE == null) {
                    displayType = "";
                } else {
                    displayType = $.trim(jsResponseObj.COL_EDT_TYPE);
                }
                if (jsResponseObj.COL_MAN == null) {
                    man_ind = "O";
                } else {
                    man_ind = jsResponseObj.COL_MAN;
                }
                if (jsResponseObj.FIELD_TYPE == null) {
                    fieldType = "";
                } else {
                    fieldType = jsResponseObj.FIELD_TYPE;
                }
                if (count == 0) {
                    formTable += "<tr>";
                }
                if (displayType.indexOf("DDW_") > -1) {
                    //visionDropdown('DDW_INSTANCE_UM','','GRID-VIEW','MM_MASTER_UM_USER_DETAILS','INSTANCE','0')
                    var colname = jsResponseObj.COL_NAME;
                    var colvalue = jsResponseObj.COL_VALUE;
                    if (colname.indexOf("ROLE") > -1)
                    {
                        role = colvalue;
                    }
                    if (colname != 'REPORT_TO')
                    {
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";
                    }

                    if (colname == 'REPORT_TO' && role.indexOf("REQUESTOR") > -1)
                    {
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";

                    } else if (colname == 'REPORT_TO')
                    {
                        disablestr = " disabled=disabled class ='visionInputDisable";
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer;display:none;' id= 'reportTo' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";

                    }

                }
                if (jsResponseObj.COL_FORM_VIEW_FLAG == 'N') {
                    //   if (displayType == 'INV') {
                    formTable += "<td style='display:none' >"
                            + "<span>" + jsResponseObj.COL_LABEL + (man_ind == "Y" ? "<sup>*</sup>" : "") + "</span>"
                            + "</td>";
                    formTable += "<td  style='display:none'>";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {
                            formTable += "<select  data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {


                        formTable += "<input " + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + "  value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "'  data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "'";
                        formTable += " id='" + jsResponseObj.COL_NAME + "' type='text'/>" + tb_property;
                    }
                    formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>";
                    formTable += "</td>";
                } else if (displayType == 'DISP_ONLY') {
                    formTable += "<td >"
                            + "<span>" + jsResponseObj.COL_LABEL + (man_ind == "Y" ? "<sup>*</sup>" : "") + "</span>"
                            + "</td>";
                    formTable += "<td>";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {


                            formTable += "<select data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {

                        formTable += "<input   value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' disabled='disabled' class ='visionInputDisable' type='text'/>"
                                + tb_property;
                    }
                    formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>"
                            + "</td>";
                } else {
                    formTable += "<td >"
                            + "<span>" + jsResponseObj.COL_LABEL + (man_ind == "M" ? "<sup>*</sup>" : "") + "</span>"
                            + "</td>";
                    formTable += "<td>";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {
                            formTable += "<select data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {
                        if (jsResponseObj.COL_NAME == 'USER_NAME' && editable == 'Y') {
                            formTable += "<input disabled=disabled class ='visionInputDisable' value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.REGEX + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' maxlength='" + jsResponseObj.TEXT_MAXLENGTH + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' type='text' style='text-transform: uppercase;'/>"
                                    + tb_property;
                        } else if (jsResponseObj.COL_NAME == 'USER_NAME') {
                            formTable += "<input onblur=isUserAvailable('" + jsResponseObj.COL_VALUE + "') value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.REGEX + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' maxlength='" + jsResponseObj.TEXT_MAXLENGTH + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' type='text' style='text-transform: uppercase;'/>"
                                    + tb_property;
                        } else {
                            formTable += "<input  " + disablestr + " " + blurFunction + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + " value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' type='text' style='text-transform: uppercase;'/>"
                                    + tb_property;

                        }

                        //   formTable += tb_property;
                    }
                    formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>"
                            + "</td>";
                    //--count;

                }
                if (count > 1) {
                    formTable += "</tr>";
                    count = 0;
                } else {
                    if (jsResponseObj.COL_FORM_VIEW_FLAG != 'N') {
                        count++;
                    }
                }

            }
            formTable += "</table>";
            $("#formView").html("");
            $("#formView").html(formTable);
            if (false) {
                $("#usertable").after("<div id='gridFormDetails'><ul></ul></div>");
                var jsDetailObjs = response.detailobj;
                var detailGridIds = [];
                for (var i = 0; i < jsDetailObjs.length; i++) {
                    delete jsDetailObjs[i].gridPropObj.virtualmode;
                    delete jsDetailObjs[i].gridPropObj.rendergridrows;
                    //    delete jsDetailObjs[i].gridPropObj.renderToolbar;




                    var source =
                            {
                                localdata: [],
                                datafields: jsDetailObjs[i].gridPropObj.datafields,
                                datatype: "json"
                            };
                    var childGridData = jsDetailObjs[i];
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    var childGridId = "tab_" + jsDetailObjs[i].gridId;
                    $("#gridFormDetails ul").append("<li>" + jsDetailObjs[i].gridName + " </li>");
                    $("#gridFormDetails ul").after("<div data-tabName= '" + jsDetailObjs[i].tableName + "' "
                            + "id='" + childGridId + "'></div>");
                    var gridConfigObj = {};
                    gridConfigObj = childGridData.gridPropObj;
                    gridConfigObj.source = dataAdapter;
                    //                fieldsArray = masterObj.columns;
                    gridConfigObj.columns = childGridData.columns;
                    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var cellValue = $("#" + childGridId).jqxGrid('getcellvalue', row, columnfield);
                        var viewType = "GRID-VIEW";
                        var editable = gridConfigObj.editable;
                        if (editable) {
                            var ddwData = childGridData.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            //     return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
                            return "<div  class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + childGridId + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                        } else
                        {
                            var ddwData = childGridData.dropDowndData;
                            var ddwObj = ddwData[columnfield];
                            var dependencyparams = ddwObj.dependencyparams;
                            return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                        }

                    };
                    var headerTooltipRenderer = function (element) {
                        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                            position: 'bottom-right',
                            showArrow: false, content: $(element).text()});
                    }
                    var col = childGridData.columns;
                    for (var i = 0; i < col.length; i++) {
                        //////alert("j :::::::::"+i);
                        if (col[i].rendered != null) {
                            col[i].rendered = eval('(' + col[i].rendered + ')');
                        }
                    }

                    for (var i = 0; i < childGridData.columns.length; i++) {
                        if (childGridData.columns[i].cellsrenderer != null) {
                            //columns[i].cellsrenderer = eval(columns[i].cellsrenderer);
                            ////alert(columns[i].cellsrenderer);
                            childGridData.columns[i].cellsrenderer = eval('(' + childGridData.columns[i].cellsrenderer + ')');
                            ////alert("////alert(columns[i].cellsrenderer);  ::: "+columns[i].cellsrenderer);
                        }

                        if (childGridData.columns[i].createeditor != null) {

                            childGridData.columns[i].createeditor = eval('(' + childGridData.columns[i].createeditor + ')');
                        }

                        if (childGridData.columns[i].initeditor != null) {


                            childGridData.columns[i].initeditor = eval('(' + childGridData.columns[i].initeditor + ')');
                        }
                        if (childGridData.columns[i].geteditorvalue != null) {


                            childGridData.columns[i].geteditorvalue = eval('(' + childGridData.columns[i].geteditorvalue + ')');
                        }
                        if (childGridData.columns[i].cellbeginedit != null) {


                            childGridData.columns[i].cellbeginedit = eval('(' + childGridData.columns[i].cellbeginedit + ')');
                        }
                        if (childGridData.columns[i].rendered != null) {


                            childGridData.columns[i].rendered = eval('(' + childGridData.columns[i].rendered + ')');
                        }

                    }
                    gridConfigObj.rendergridrows = function (obj) {
                        return obj.data;
                    };
//             gridConfigObj.showtoolbar = true;
                    var renderToolbar = gridConfigObj.renderToolbar;
                    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');
                    $("#" + childGridId).jqxGrid(gridConfigObj);
                    $("#" + childGridId).on('cellbeginedit', function (event)
                    {
                        $("#" + childGridId).attr('data-last-ed-field', event.args.datafield);
                        $("#" + childGridId).attr('data-last-ed-row', event.args.rowindex);
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
                        $("#" + childGridId).jqxGrid('selectrow', rowBoundIndex);
//end
                    });
                }
            }
            $("#formView").dialog({resizable: false,
                title: 'Add Data',
                modal: true,
                height: 220,
                width: 1100,
                minWidth: 1100,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: "Add",
                        id: 'updateUserInfo',
                        click: function () {
                            showLoader();
                            setTimeout(function () {
                                stopLoader();
                                showAssetTreeErrorMsg("Message", "Request added Successfully");
                            }, 2000);
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }, {
                        text: "Cancel",
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
            for (var i = 0; i < dateIds.length; i++) {
                $("#" + dateIds[i]).datepicker(
                        {
                            dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true
                        }
                );
            }


        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });


}

function addMOCREquipment($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo)
{
    showLoader();
    $.ajax({
        type: "POST",
        url: 'getMOCRAddingItemData',
        dataType: 'json',
        data: {
            treeId: treeId,
            selectedType: fromType,
            allowType: allowType
        },
        traditional: true,
        async: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var checkBoxList = response['checkBoxData'];
            var $logoutDialog = $("#mocrDialog1");
            var body = "<div id = 'selectMOCRItemDataList'></div><div id = 'errorItemDataId' style='color:red;'></div>";
            $("#mocrDialog1").html(body);
            $("#selectMOCRItemDataList").jqxListBox({
                filterable: true,
                //checkboxes: true,
                source: checkBoxList,
                theme: 'energyblue',
                displayMember: 'text',
                valueMember: 'value',
                width: '100%',
            });
            $logoutDialog.dialog({
                title: (labelObject['Add'] != null ? labelObject['Add'] : 'Add'),
                modal: true,
                dialogClass: "AddAssetMOCRDialogClass",
                width: 300,
                height: 310,
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            var recordNo = $("#selectMOCRItemDataList").val();
                            if (recordNo != null && recordNo != "" && recordNo != undefined && recordNo != "null") {
                                var instance = recordNo.split("::")[1];
                                recordNo = recordNo.split("::")[0];
                                insertAssettoMOCR(treeId, treeDivId, recordNo, fromType, allowType, parentRecordNo, mocrNo, erpNo, instance);
                                $logoutDialog.html("");
                                $logoutDialog.dialog("close");
                                $logoutDialog.dialog("destroy");

                            } else {
                                $("#errorItemDataId").text("Please select an Item.");
                            }
                        }
                    }],
                open: function () {
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
                    $("#filterselectMOCRItemDataList input").on("keyup", function (e) {
                        showLoader();
                        var searchString = e.currentTarget.value;

                        $.ajax({
                            type: "post",
                            traditional: true,
                            dataType: 'json',
                            url: 'getMOCRAddingItemData',
                            cache: false,
                            data: {
                                treeId: treeId,
                                selectedType: fromType,
                                searchString: searchString,
                                allowType: allowType
                            },
                            success: function (response) {
                                stopLoader();
                                const batchIdsArray = response['checkBoxData'] || [];
                                const listBox = $("#selectMOCRItemDataList");
                                //listBox.jqxListBox('clear');
                                //batchIdsArray.forEach(item => listBox.jqxListBox('addItem', item));

                                listBox.jqxListBox('destroy');
                                $("#selectMOCRItemDataList").remove();
                                $("#errorItemDataId").remove();
                                var body = "<div id = 'selectMOCRItemDataList'></div><div id = 'errorItemDataId' style='color:red;'></div>";
                                $("#mocrDialog1").html(body);
                                const listBox1 = $("#selectMOCRItemDataList");
                                listBox1.jqxListBox({
                                    filterable: true,
                                    source: batchIdsArray, // Filtered data
                                    theme: 'energyblue',
                                    displayMember: 'text', // Assuming 'text' property for display
                                    valueMember: 'value', // Assuming 'value' property for value
                                    width: '100%',
                                });
                                listBox1.jqxListBox('refresh');

                            },
                            error: function (e) {
                                console.log(e);
                                sessionTimeout(e);
                            }
                        });

                    });


                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
                }
            });
        }
    });
}

function insertAssettoMOCR(treeId, treeDivId, recordNo, fromType, allowType, parentRecordNo, mocrNo, erpNo, instance)
{

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: 'addDatainsertIntoMOCRObjectLink',
        cache: false,
        data: {
            treeId: treeId,
            recordNo: recordNo,
            fromType: fromType,
            allowType: allowType,
            parentRecordNo: parentRecordNo,
            mocrNo: mocrNo,
            erpNo: erpNo,
            instance: instance
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response))
            {
                var message = response['Message'];
                var flag = response['flag'];
                if (flag)
                {
                    $("#assetAddDataDialogId").remove();
                    $("body").append("<div id='assetAddDataDialogId'></div>");
                    $("#assetAddDataDialogId").html(message);
                    $("#assetAddDataDialogId").dialog({
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 140,
                        width: 600,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                class: 'rdsMoveCopyButton',
                                click: function () {
                                    refreshMocrCreateAssetTreeobject(treeId, treeDivId, mocrNo);
                                    $(this).html("");
                                    $(this).dialog('close');
                                    $(this).dialog('destroy');

                                }
                            }
                        ],
                        open: function () {
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                        },
                        beforeClose: function (event, ui)
                        {
                            $(this).html("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                            $("#iframeid").remove();
                        }
                    });
                } else {
                    $("#assetAddDataErrorDialogId").remove();
                    $("body").append("<div id='assetAddDataErrorDialogId'></div>");
                    $("#assetAddDataErrorDialogId").html(message);
                    $("#assetAddDataErrorDialogId").dialog({
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 140,
                        width: 600,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                class: 'rdsMoveCopyButton',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog('close');
                                    $(this).dialog('destroy');

                                }
                            }
                        ],
                        open: function () {
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                        },
                        beforeClose: function (event, ui)
                        {
                            $(this).html("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                            $("#iframeid").remove();
                        }
                    });
                }
            }

        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
        }
    });
}

function refreshMocrCreateAssetTreeobject(treeId, treeDivId, parentValue) {
    var rightClick = false;
    if (treeId != null) {
        showLoader();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getPendingDxpAssetTree",
            cache: false,
            data: {
                treeId: treeId,
                parentValue: parentValue,
                refreshFlag: "Y"
            },
            success: function (treeObject) {
                stopLoader();
                var treeConfigObj = treeObject['treeConfigObj'];
                var columnsObj = treeObject['treeColumnObj'];
                var treeDragandDropConfigObj = treeObject['treeDragandDropConfigObj'];
                treeConfigObj.checkboxes = true;
                treeConfigObj.allowDrag = true;
                treeConfigObj.allowDrop = true;
                window.dragSource = null;

                treeConfigObj.dragStart = function (dragItem) {
                    var tree = $('#' + treeDivId).jqxTree('getInstance');
                    var dragItemElement = document.getElementById(dragItem.id);
                    window.dragSource = {
                        item: dragItem,
                        parent: dragItem.parentElement ? tree.getItem(dragItem.parentElement) : null,
                        wasExpanded: tree.isExpanded(dragItemElement),
                        index: $(dragItemElement).index()
                    };
                    return true;
                };
                treeConfigObj.dragEnd = function (dragItem, dropItem, args, dropPosition, tree)
                {
                    var container = $('#' + treeDivId)[0];
                    var containerRect = container.getBoundingClientRect();
                    if (!dropItem) {
                        alert("You cannot drop the item outside the tree container!");
                        //tree.moveItem(dragItem, window.dragSource.parent, window.dragSource.index);
                        return false;
                    }

                    //var dropItemElement = document.getElementById(dropItem['element']['id']);
                    // var dropItemRect = dropItemElement.getBoundingClientRect();
                    if (!(dropItem.originalEvent != null))
                    {
                        var dragParentItem = dragItem.parentElement;
                        showAssetTreeMoveCopyDialog(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
                        return true;
                    }
                    var mouseX = dropItem.originalEvent.clientX;
                    var mouseY = dropItem.originalEvent.clientY;
                    if (mouseY >= containerRect.top &&
                            mouseX >= containerRect.left &&
                            mouseY <= containerRect.bottom &&
                            mouseX <= containerRect.right) {
//                    if (dropItemRect.top >= containerRect.top &&
//                            dropItemRect.left >= containerRect.left &&
//                            dropItemRect.bottom <= containerRect.bottom &&
//                            dropItemRect.right <= containerRect.right) {
                        var dragParentItem = dragItem.parentElement;
                        showAssetTreeMoveCopyDialog(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
                        return true;
                    } else {
                        alert("You cannot drop the item outside the tree container!");
                        return false;
                    }

                };
//                treeConfigObj.dragEnd = function (dragItem, dropItem, args, dropPosition, tree)
//                {
//                    var dragParentItem = dragItem.parentElement;
//                    showAssetTreeMoveCopyDialog(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
//                    return true;
//                };
                $("#" + treeDivId).jqxTree("destroy");
                $("#dxpMOCRPendingTreeDivId").html(
                        "<div id ='" + treeDivId + "'></div>"
                        );
                $('#' + treeDivId).jqxTree(treeConfigObj);
                $("#" + treeDivId).jqxTree('focus');
                $("#" + treeDivId).attr("columnsObj", JSON.stringify(columnsObj));
                $("#" + treeDivId).attr("treeDragandDropConfigObj", JSON.stringify(treeDragandDropConfigObj));
                $('#' + treeDivId).on('mousedown', function (event) {
                    var target = $(event.target).parents('li:first')[0];
                    rightClick = isRightClick(event);
                    if (rightClick && target != null) {
                        $('#' + treeDivId).jqxTree('selectItem', target);
                        var selectedItem = $('#' + treeDivId).jqxTree('getSelectedItem');
                        var selectedParentItem = {};
                        try {
                            selectedParentItem = $('#' + treeDivId).jqxTree('getItem', selectedItem.parentElement);
                            if (selectedParentItem != null) {
                                selectedParentItem = $('#' + treeDivId).jqxTree('getItem', selectedParentItem.parentElement);
                            }
                        } catch (e) {
                        }
                        if (selectedItem.level >= 1) {
                            var selectedLabel = selectedItem.label;
                            var selectedLabelIds = selectedLabel.match(/id='([^']+)'/);
                            var selectedLblId = selectedLabelIds[1];
                            var objType = $("#" + selectedLblId).attr("data-object_type");
                            var recordNo = $("#" + selectedLblId).attr("data-record_no");
                            var mocrNo = $("#" + selectedLblId).attr("data-mocr_number");
                            var erpNo = $("#" + selectedLblId).attr("data-erp_no");
                            var allowTypes = [];
                            var treeDragandDropObj = {};
                            var treeDragandDropConfigObjStr = $("#" + treeDivId).attr("treeDragandDropConfigObj");
                            if (treeDragandDropConfigObjStr != null && treeDragandDropConfigObjStr != '' && treeDragandDropConfigObjStr != undefined)
                            {
                                var treeDragandDropCnfgObj = JSON.parse(treeDragandDropConfigObjStr);
                                if (treeDragandDropCnfgObj != null && !jQuery.isEmptyObject(treeDragandDropCnfgObj))
                                {
                                    treeDragandDropObj = treeDragandDropCnfgObj[objType];
                                    if (treeDragandDropObj != null && !jQuery.isEmptyObject(treeDragandDropObj))
                                    {
                                        allowTypes = Object.keys(treeDragandDropObj);
                                    }
                                }
                            }

                            var rightClickFunc = "";
                            if (allowTypes != null && !jQuery.isEmptyObject(allowTypes)) {
                                $.each(allowTypes, function (index, val) {
                                    var allowType = allowTypes[index];
                                    if (allowType != null && allowType != '' && allowType != undefined) {
                                        allowType = allowType.trim();
                                        var allowTypeStr = treeDragandDropObj[allowType];
                                        if (allowTypeStr != null && allowTypeStr != '' && allowTypeStr != undefined)
                                        {
                                            var allowTypeObj = allowTypeStr.split(",");
                                            if (allowTypeObj != null && !jQuery.isEmptyObject(allowTypeObj))
                                            {
                                                $.each(allowTypeObj, function (ind, value) {
                                                    var methodLabelNames = allowTypeObj[ind];
                                                    var methodLabelNamesArr = methodLabelNames.split(";");
                                                    rightClickFunc += methodLabelNamesArr[0] + ":" + methodLabelNamesArr[1] + "(this,'" + methodLabelNamesArr[2] + "','" + treeId + "','" + treeDivId + "','" + selectedItem.value + "','" + objType + "','" + allowType + "','" + recordNo + "','" + mocrNo + "','" + erpNo + "');";
                                                });
                                            }
                                        }

                                    }
                                });
                            }
                            rightClickFunc += "DeLink:deleteAssetTreeNodes(this,'" + treeId + "','" + treeDivId + "','" + selectedItem.value + "','" + objType + "','" + recordNo + "','" + mocrNo + "','" + erpNo + "');";
                            var menuItems = "";
                            var menuHeight;
                            if (rightClickFunc != null) {
                                var options = rightClickFunc.split(";");
                                menuHeight = options.length;
                                $.each(options, function (index) {
                                    var menuItem = options[index].split(":")[0];
                                    var funcName = options[index].split(":")[1];
                                    if (menuItem != null && menuItem != '' && menuItem != undefined
                                            && funcName != null && funcName != '' && funcName != undefined)
                                    {
                                        menuItems += "<li onclick=\"" + funcName + "\">" + menuItem + "</li>"
                                    }

                                });
                            }
                            $("#jqxMenu").remove();
                            $("body").append("<div id='jqxMenu' class='jqxMenuClass'><ul></ul></div>");
                            $("#jqxMenu ul").html(menuItems);
                            var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup', theme: 'energyblue'}); // ravi start
                            var scrollTop = $(window).scrollTop();
                            var scrollLeft = $(window).scrollLeft();
                            contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                            rightClick = false;
                            return true;
                        } else {
                            rightClick = false;
                            $('#' + treeId).jqxTree('selectItem', null);
                            return false;
                        }


                    } else {
                        var rightItem = $(event.target).closest('li');
                        $('#' + treeId).jqxTree('selectItem', rightItem[0]);
                    }
                });
                $('#' + treeDivId).on('expand', function (event) {
                    showLoader();
                    var parentItem = $('#' + treeDivId).jqxTree('getItem', event.args.element);
                    var level = parentItem.level;
                    var $element = $(event.args.element);
                    var loader = false;
                    var loaderItem = null;
                    var assetType = $($element).first().attr('item-description');
                    var children = $element.find('ul:first').children();
                    $.each(children, function () {
                        var item = $('#' + treeDivId).jqxTree('getItem', this);
                        if (item && item.value == 'ajax') {
                            loaderItem = item;
                            loader = true;
                            return false;
                        }

                    });

                    if (loaderItem != null) {
                        var extTreeParams = $("#extTreeParams").val();
                        $('#' + treeDivId).jqxTree('removeItem', loaderItem.element);
                        var plantFlag = 'N';
                        $.ajax({
                            type: "post",
                            traditional: true,
                            dataType: 'json',
                            url: "getDXPAssetTreeDataOpt",
                            cache: false,
                            data: {
                                parentkey: ((level == 0 && plantFlag == 'Y') ? "1000" : parentItem.value),
                                assetType: assetType,
                                treeId: treeId,
                                level: parentItem.level,
                                extTreeParams: extTreeParams,
                                columnsObj: JSON.stringify(columnsObj),
                            },
                            success: function (data, status, xhr) {
                                var children = $element.find('ul:first').children();
                                if (!(children != null && !jQuery.isEmptyObject(children) && children.length > 0)) {
                                    $('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                                }
                                //$('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                                var items = $('#' + treeDivId).jqxTree('getItems');
                                stopLoader();
                                $.each(items, function () {
                                    $(this.titleElement).attr('title', this.label);
                                    $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                                });
                            },
                            error: function (e) {
                                console.log(e);
                                sessionTimeout(e);
                                stopLoader();
                            }
                        });
                    } else {
                        stopLoader();
                    }
                    $('#' + treeDivId).jqxTree('refresh');


                });

                $('#' + treeDivId).unbind('mouseenter').on('mouseenter', '.jqx-tree-item', function (e) {
                    $(this).removeAttr('title');
                });

                if (columnsObj != null && !jQuery.isEmptyObject(columnsObj)) {
                    var treeInitParamsObj = columnsObj[0]['TREE_INIT_PARAMS'];
                    if (treeInitParamsObj != null && !jQuery.isEmptyObject(treeInitParamsObj)) {
                        var mocrTreeExpansionFlagType = treeInitParamsObj['uuu_TreeExpansionFlag'];
                        if (mocrTreeExpansionFlagType != null && mocrTreeExpansionFlagType != '' && mocrTreeExpansionFlagType != undefined
                                && mocrTreeExpansionFlagType.startsWith("R:"))
                        {
                            var mocrTreeExpansionFlag = mocrTreeExpansionFlagType.split(":")[0];
                            var mocrTreeExpansionType = mocrTreeExpansionFlagType.split(":")[1];
                            if (mocrTreeExpansionFlag && mocrTreeExpansionType != null && mocrTreeExpansionFlag && mocrTreeExpansionType != ''
                                    && mocrTreeExpansionFlag && mocrTreeExpansionType != undefined) {
                                var $targetLi = $("#" + treeDivId).find("div[data-object_type='" + mocrTreeExpansionType + "']").first().closest("li");
                                $("#" + treeDivId).jqxTree('checkItem', $targetLi[0], true);
                                setTimeout(function () {
                                    expandAssetPendingHierData(treeDivId);
                                }, 1000);
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

}
function refreshMocrCreateAssetTreeobject1(treeId, treeDivId, parentValue) {
    if (treeId != null) {
        showLoader();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getPendingDxpAssetTree",
            cache: false,
            data: {
                treeId: treeId,
                parentValue: parentValue
            },
            success: function (treeObject) {
                stopLoader();
                var treeConfigObj = treeObject['treeConfigObj'];
                var columnsObj = treeObject['treeColumnObj'];
                var treeDragandDropConfigObj = treeObject['treeDragandDropConfigObj'];
                treeConfigObj.allowDrag = true;
                treeConfigObj.allowDrop = true;
                window.dragSource = null;
                treeConfigObj.dragStart = function (dragItem) {
                    var tree = $('#' + treeDivId).jqxTree('getInstance');
                    var dragItemElement = document.getElementById(dragItem.id);
                    window.dragSource = {
                        item: dragItem,
                        parent: dragItem.parentElement ? tree.getItem(dragItem.parentElement) : null,
                        wasExpanded: tree.isExpanded(dragItemElement),
                        index: $(dragItemElement).index()
                    };
                    return true;
                };
                treeConfigObj.dragEnd = function (dragItem, dropItem, args, dropPosition, tree)
                {
                    var dragParentItem = dragItem.parentElement;
                    showAssetTreeMoveCopyDialog(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, dragParentItem);
                    return true;
                };
                $('#' + treeDivId).jqxTree(treeConfigObj);
                $("#" + treeDivId).jqxTree('focus');
                $("#" + treeDivId).attr("columnsObj", JSON.stringify(columnsObj));
                $("#" + treeDivId).attr("treeDragandDropConfigObj", JSON.stringify(treeDragandDropConfigObj));
                $('#' + treeDivId).on('mousedown', function (event) {
                    var target = $(event.target).parents('li:first')[0];
                    var rightClick = isRightClick(event);
                    if (rightClick && target != null) {
                        $('#' + treeDivId).jqxTree('selectItem', target);
                        var selectedItem = $('#' + treeDivId).jqxTree('getSelectedItem');
                        var selectedParentItem = {};
                        try {
                            selectedParentItem = $('#' + treeDivId).jqxTree('getItem', selectedItem.parentElement);
                            if (selectedParentItem != null) {
                                selectedParentItem = $('#' + treeDivId).jqxTree('getItem', selectedParentItem.parentElement);
                            }
                        } catch (e) {
                        }
                        if (selectedItem.level >= 1) {
                            var selectedLabel = selectedItem.label;
                            var selectedLabelIds = selectedLabel.match(/id='([^']+)'/);
                            var selectedLblId = selectedLabelIds[1];
                            var objType = $("#" + selectedLblId).attr("data-object_type");
                            var recordNo = $("#" + selectedLblId).attr("data-record_no");
                            var mocrNo = $("#" + selectedLblId).attr("data-mocr_number");
                            var erpNo = $("#" + selectedLblId).attr("data-erp_no");
                            var allowTypes = [];
                            var treeDragandDropObj = {};
                            var treeDragandDropConfigObjStr = $("#" + treeDivId).attr("treeDragandDropConfigObj");
                            if (treeDragandDropConfigObjStr != null && treeDragandDropConfigObjStr != '' && treeDragandDropConfigObjStr != undefined)
                            {
                                var treeDragandDropCnfgObj = JSON.parse(treeDragandDropConfigObjStr);
                                if (treeDragandDropCnfgObj != null && !jQuery.isEmptyObject(treeDragandDropCnfgObj))
                                {
                                    treeDragandDropObj = treeDragandDropCnfgObj[objType];
                                    if (treeDragandDropObj != null && !jQuery.isEmptyObject(treeDragandDropObj))
                                    {
                                        allowTypes = Object.keys(treeDragandDropObj);
                                    }
                                }
                            }

                            var rightClickFunc = "";
                            if (allowTypes != null && !jQuery.isEmptyObject(allowTypes)) {
                                $.each(allowTypes, function (index, val) {
                                    var allowType = allowTypes[index];
                                    if (allowType != null && allowType != '' && allowType != undefined) {
                                        allowType = allowType.trim();
                                        var allowTypeStr = treeDragandDropObj[allowType];
                                        if (allowTypeStr != null && allowTypeStr != '' && allowTypeStr != undefined)
                                        {
                                            var allowTypeObj = allowTypeStr.split(",");
                                            if (allowTypeObj != null && !jQuery.isEmptyObject(allowTypeObj))
                                            {
                                                $.each(allowTypeObj, function (ind, value) {
                                                    var methodLabelNames = allowTypeObj[ind];
                                                    var methodLabelNamesArr = methodLabelNames.split(";");
                                                    rightClickFunc += methodLabelNamesArr[0] + ":" + methodLabelNamesArr[1] + "(this,'" + methodLabelNamesArr[2] + "','" + treeId + "','" + treeDivId + "','" + selectedItem.value + "','" + objType + "','" + allowType + "','" + recordNo + "','" + mocrNo + "','" + erpNo + "');";
                                                });
                                            }
                                        }

                                    }
                                });
                            }
                            rightClickFunc += "DeLink:deleteAssetTreeNodes(this,'" + treeId + "','" + treeDivId + "','" + selectedItem.value + "','" + objType + "','" + recordNo + "','" + mocrNo + "','" + erpNo + "');";
                            var menuItems = "";
                            var menuHeight;
                            if (rightClickFunc != null) {
                                var options = rightClickFunc.split(";");
                                menuHeight = options.length;
                                $.each(options, function (index) {
                                    var menuItem = options[index].split(":")[0];
                                    var funcName = options[index].split(":")[1];
                                    if (menuItem != null && menuItem != '' && menuItem != undefined
                                            && funcName != null && funcName != '' && funcName != undefined)
                                    {
                                        menuItems += "<li onclick=\"" + funcName + "\">" + menuItem + "</li>"
                                    }

                                });
                            }
                            $("#jqxMenu").remove();
                            $("body").append("<div id='jqxMenu' class='jqxMenuClass'><ul></ul></div>");
                            $("#jqxMenu ul").html(menuItems);
                            var contextMenu = $("#jqxMenu").jqxMenu({width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup', theme: 'energyblue'}); // ravi start
                            var scrollTop = $(window).scrollTop();
                            var scrollLeft = $(window).scrollLeft();
                            contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                            return true;
                        } else {
                            return false;
                        }
                        rightClick = false;

                    }
                });

                $('#' + treeDivId).unbind('mouseenter').on('mouseenter', '.jqx-tree-item', function (e) {
                    $(this).removeAttr('title');
                });
                $('#' + treeDivId).on('select', function (event) {
                    var rightClick = isRightClick(event);
                    if (!(rightClick)) {
                        showLoader();
                        var args = event.args;
                        var item = $('#' + treeDivId).jqxTree('getItem', args.element);
                        var label = item.label;
                        var idMatch = label.match(/id='([^']+)'/);
                        var labelId = idMatch[1];
                        var instance = $("#" + labelId).attr("data-instance");
                        var businessUnit = $("#" + labelId).attr("data-business_unit");
                        var recordNo = $("#" + labelId).attr("data-record_no");
                        var erpNo = $("#" + labelId).attr("data-erp_no");
                        var objectType = $("#" + labelId).attr("data-object_type");
                        var conceptId = $("#" + labelId).attr("data-concept_id");
                        var gridId = $("#" + labelId).attr("data-grid_id");
                        var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
                        var basicData = {};
                        basicData['CONCEPT_ID'] = conceptId;
                        basicData['INSTANCE'] = instance;
                        basicData['BUSINESS_UNIT'] = businessUnit;
                        basicData['RECORD_NO'] = recordNo;
                        basicData['ERP_NO'] = erpNo;
                        basicData['NODE_TYPE'] = objectType;
                        basicData['gridId'] = gridId;
                        $.ajax({
                            type: "post",
                            traditional: true,
                            dataType: 'json',
                            url: "getDXPSelectedAssetTreeForm",
                            cache: false,
                            data: {
                                basicData: JSON.stringify(basicData),
                                gridId: gridId,
                                recordNo: recordNo
                            },
                            success: function (response, status, xhr) {
                                stopLoader();
                                var basicData = response['basicData'];
                                var gridObj = response['gridObj'];
                                var hrefColumn = response['hrefColumn'];
                                if (basicData != null && !jQuery.isEmptyObject(basicData)
                                        && gridObj != null && !jQuery.isEmptyObject(gridObj))
                                {
                                    showNavigateToForm(hrefColumn, basicData, 'form', gridId, "", 0, "N", gridObj, "dxpMOCRPendingTreeFormDiv");
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


            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });

    }

}
function expandAssetPendingHierData(treeDivId, gridId)
{
    showLoader();
    var tree = $('#' + treeDivId);
    var checkedItems = tree.jqxTree('getCheckedItems');
    var checkedVal = '';
    var checkedLabel = '';
    var item;
    var itemType;
    var basicData = {};
    var columnsObj = $("#" + treeDivId).attr("columnsObj");
    if (checkedItems != null && !jQuery.isEmptyObject(checkedItems) && checkedItems.length == 1) {
        $.each(checkedItems, function (i, val) {
            if (val['value'] != null && val['value'] != '' && val['value'] != undefined && val['value'] != 'ajax')
            {
                item = val;
                checkedVal = val['value'];
                checkedLabel = val['label'];
                var idMatch = checkedLabel.match(/id='([^']+)'/);
                var labelId = idMatch[1];
                gridId = $("#" + labelId).attr("data-grid_id");
                itemType = $("#" + labelId).attr("data-object_type");
                var instance = $("#" + labelId).attr("data-instance");
                var businessUnit = $("#" + labelId).attr("data-business_unit");
                var recordNo = $("#" + labelId).attr("data-record_no");
                var erpNo = $("#" + labelId).attr("data-erp_no");
                var conceptId = $("#" + labelId).attr("data-concept_id");
                basicData['CONCEPT_ID'] = conceptId;
                basicData['INSTANCE'] = instance;
                basicData['BUSINESS_UNIT'] = businessUnit;
                basicData['RECORD_NO'] = recordNo;
                basicData['ERP_NO'] = erpNo;
                basicData['NODE_TYPE'] = itemType;
                basicData['gridId'] = gridId;
            }
        });
    }
    if (itemType != null && itemType != '' && itemType != undefined) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "expandAssetHierData",
            cache: false,
            data: {
                checkedVal: checkedVal,
                'gridId': gridId,
                'columnsObj': columnsObj
            },
            success: function (result, status, xhr) {
                stopLoader();
                var response = result;
                var treeData = response['treeData'];
                if (treeData != null && !jQuery.isEmptyObject(treeData))
                {

                    var parentNode = $("#" + treeDivId).jqxTree('getItem', item);
                    if (parentNode != null) {
                        // Remove existing children under the parent node
                        var $element = $(parentNode['element']);
                        var children = $element.find('ul:first').children();
                        for (var i = 0; i < children.length; i++) {
                            $("#" + treeDivId).jqxTree('removeItem', children[i]);
                        }
                    }

                    var $item = $(item.element);
                    $("#" + treeDivId).jqxTree("addTo", treeData, $item[0]);
                    $("#" + treeDivId).jqxTree("expandItem", $item[0]);
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

function getAllFunctionalLocationsPerformCopyAction(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, $dragParentItem)
{
    showLoader()
    var columnsObj = $("#" + treeDivId).attr("columnsObj");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getAllFlocsHierData",
        cache: false,
        data: {
            dragItemErpNo: dragItem['value'],
            columnsObj: columnsObj,
            treeDivId: treeDivId
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var flocTableStr = response['flocTableStr'];
            if (flocTableStr != null && flocTableStr != '' && flocTableStr != undefined)
            {
                var min = 100;  // Minimum value (inclusive)
                var max = 100000; // Maximum value (inclusive)
                var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
                var dialogId = "dialog" + randomInt;
                $("body").append("<div id='" + dialogId + "'></div>");
                $("#" + dialogId).html(flocTableStr);
                $("#" + dialogId).dialog({
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    modal: true,
                    height: 250,
                    width: 600,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Next'] != null ? labelObject['Next'] : 'Next'),
                            class: 'rdsMoveCopyButton',
                            id: "changeAllFLocValidateButtonId",
                            click: function () {
                                var oldNewFlocs = {};
                                $("#oldAndNewCopyFLocsTableId tbody tr").each(function () {
                                    var oldLocationName = $(this).find("td:first").text(); // Get text from the first <td>
                                    var newLocationName = $(this).find("td:eq(1) input").val();
                                    if (newLocationName != null && newLocationName != '' && newLocationName != undefined)
                                    {
                                        oldNewFlocs[oldLocationName] = newLocationName;
                                    } else
                                    {
                                        $("#errorValidateCopyFLocsId").text("Please provide new FLoc for " + oldLocationName);
                                        $("#errorValidateCopyFLocsId").show();
                                        return;
                                    }
                                });
                                if (oldNewFlocs != null && !jQuery.isEmptyObject(oldNewFlocs))
                                {
                                    showLoader();
                                    $.ajax({
                                        type: "post",
                                        traditional: true,
                                        dataType: 'json',
                                        url: "validateCopyAllOldNewFLocs",
                                        cache: false,
                                        data: {
                                            oldNewFlocs: JSON.stringify(oldNewFlocs),
                                        },
                                        success: function (responseObj, status, xhr) {
                                            stopLoader();
                                            var errorMsg = responseObj['errorMsg'];
                                            if (!(errorMsg != null && errorMsg != '' && errorMsg != undefined))
                                            {
                                                assetTreePerformCopyAction(dragItem, dropItem, dropPosition, treeId, tree, treeDivId, $dragParentItem, oldNewFlocs);
                                                $(this).html("");
                                                $(this).dialog('close');
                                                $(this).dialog('destroy');
                                                $("#" + dialogId).html("");
                                                $("#" + dialogId).dialog('close');
                                                $("#" + dialogId).dialog('destroy');
                                            } else {
                                                $("#errorValidateCopyFLocsId").text(errorMsg);
                                                $("#errorValidateCopyFLocsId").show();
                                                return;
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
                        },
                        {
                            text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                            class: 'rdsMoveCopyButton',
                            click: function () {
                                // revertCopyorMoveAssetHierItem(treeDivId, dragItem);
                                var dragItemLabel = dragItem.label;
                                var dragItemIdMatch = dragItemLabel.match(/id='([^']+)'/);
                                var dragItemLabelId = dragItemIdMatch[1];
                                var mocrNumber = $("#" + dragItemLabelId).attr("data-mocr_number");
                                refreshMocrCreateAssetTreeobject(treeId, treeDivId, mocrNumber);
                                $(this).html("")
                                $(this).dialog('close');
                                $(this).dialog('destroy');
                            }
                        }
                    ],
                    open: function () {
                        $("#changeAllFLocValidateButtonId").hide();
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog changeAllFLocValidateDialog RdsMoveCopyDialog");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");

                    },
                    beforeClose: function (event, ui)
                    {
                        $(this).html("");
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                        $("#iframeid").remove();
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
function changeAllFLocCopyValidate(checkedVal, treeDivId, oldFLoc)
{
    showLoader();
    var newFloc = $("#checkCopyFLocValidateId").val();
    if (!(newFloc != null && newFloc != '' && newFloc != undefined && newFloc != oldFLoc))
    {
        $("#errorValidateCopyFLocsId").text("Please give new FLoc");
        $("#errorValidateCopyFLocsId").show();
        return;
    }
    var columnsObj = $("#" + treeDivId).attr("columnsObj");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getAllFlocsHierValidateData",
        cache: false,
        data: {
            dragItemErpNo: checkedVal,
            columnsObj: columnsObj,
            oldFLoc: oldFLoc,
            newFloc: newFloc
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            var message = response['Message'];
            var flocTableStr = response['flocTableStr'];
            if (flocTableStr != null && flocTableStr != '' && flocTableStr != undefined)
            {
                $("#errorValidateCopyFLocsId").text("");
                $("#changeAllFLocCopyContentDivId").html(flocTableStr);
                $("#changeAllFLocValidateButtonId").show();
            } else {
                $("#errorValidateCopyFLocsId").text(message);
                $("#changeAllFLocCopyContentDivId").html("");
                $("#changeAllFLocValidateButtonId").hide();
            }


        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function navigateToMOCRAssetRegistrationForm(itemsStr, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo) {
    showLoader();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    var createAssetToMOCRObj = {};
    createAssetToMOCRObj['treeId'] = treeId;
    createAssetToMOCRObj['treeDivId'] = treeDivId;
    createAssetToMOCRObj['selectedTreeValue'] = selectedValue;
    createAssetToMOCRObj['fromType'] = fromType;
    createAssetToMOCRObj['addType'] = allowType;
    createAssetToMOCRObj['parentRecordNo'] = parentRecordNo;
    createAssetToMOCRObj['mocrNo'] = mocrNo;
    createAssetToMOCRObj['erpNo'] = erpNo;
    $("#createAssetToMOCRObjId").remove();
    $("body").append("<input type='hidden' id='createAssetToMOCRObjId' value='" + JSON.stringify(createAssetToMOCRObj) + "'/>");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "formData",
        cache: false,
        data: {
            items: itemsStr,
            fioriThemeFlag: fioriThemeCheck,
        },
        success: function (response) {
            stopLoader();
            var form = response['formStr'];
            $("#dxpMOCRPendingTreeFormDiv").html(form);
            //showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N')
            $(".formDxpDuplicates").hide();
            $(".formDxpDuplicates").html("");
            if (form != null && form != undefined && form != '') {
                registerClickFunction();
                stopLoader();
            } else {
                var message = response['message'];
                var modalObj = {
//                    title: 'Message',
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    body: message
                };
                var buttonArray = [
                    {
                        text: 'Ok',
                        click: function () {
                            $('#loginModel').modal('show');
                        },
                        isCloseButton: true
                    }

                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
            }
            $("#registration").inlineFormGuider({
                submitButton: "#Register",
                togglButtonContainer: ".visionFormTitleName"
            });


        }
    });
}

function modifyMOCRAssetData($this, treeDivId, selectedValue, buttonType, controlType)
{
    showLoader();
    var selectedItem = $('#' + treeDivId).jqxTree('getSelectedItem');
    var item = $('#' + treeDivId).jqxTree('getItem', selectedItem);
    $('#' + treeDivId).jqxTree('selectItem', null);
    var label = item.label;
    var idMatch = label.match(/id='([^']+)'/);
    var labelId = idMatch[1];
    var instance = $("#" + labelId).attr("data-instance");
    var businessUnit = $("#" + labelId).attr("data-business_unit");
    var recordNo = $("#" + labelId).attr("data-record_no");
    var erpNo = $("#" + labelId).attr("data-erp_no");
    var objectType = $("#" + labelId).attr("data-object_type");
    var conceptId = $("#" + labelId).attr("data-concept_id");
    var columnsObjStr = $("#" + treeDivId).attr("columnsObj");
    var gridId;
    if (columnsObjStr != null && columnsObjStr != '' && columnsObjStr != undefined)
    {
        var colsObj = JSON.parse(columnsObjStr);
        if (colsObj != null && !jQuery.isEmptyObject(colsObj))
        {
            var colObj = colsObj['0'];
            if (colObj != null && !jQuery.isEmptyObject(colObj))
            {
                var initParamObj = colObj['TREE_INIT_PARAMS'];
                if (initParamObj != null && !jQuery.isEmptyObject(initParamObj))
                {
                    var changeRequestObjStr = initParamObj['uuu_mocrChangeRequest'];
                    if (changeRequestObjStr != null && changeRequestObjStr != '' && changeRequestObjStr != undefined)
                    {
                        var changeRequestObj = JSON.parse(changeRequestObjStr);
                        if (changeRequestObj != null && !jQuery.isEmptyObject(changeRequestObj)) {
                            var buttonObj = changeRequestObj[buttonType];
                            if (buttonObj != null && !jQuery.isEmptyObject(buttonObj))
                            {
                                gridId = buttonObj[objectType];
                            }
                        }
                    }
                }
            }

        }
    }
    if (gridId != null && gridId != '' && gridId != undefined) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getAssetBasicData",
            cache: false,
            data: {
                recordNo: recordNo,
                gridId: gridId,
                controlType: controlType
            },
            success: function (result, status, xhr) {
                stopLoader();
                var response = result;
                var basicData = response['basicData'];
                var confMsg = response['confMsg'];
                var successMsg = response['successMsg'];
                if (basicData != null && !jQuery.isEmptyObject(basicData)) {
                    basicData["controlType"] = controlType;
                    if (basicData.hasOwnProperty("formId"))
                    {
                        basicData["objectid"] = basicData["formId"];
                    }
                    $("#assetAddDataErrorDialogId").remove();
                    $("body").append("<div id='assetAddDataErrorDialogId'></div>");
                    $("#assetAddDataErrorDialogId").html(confMsg);
                    $("#assetAddDataErrorDialogId").dialog({
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 140,
                        width: 600,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                class: 'rdsMoveCopyButton',
                                click: function () {
                                    changeRequest(JSON.stringify(basicData), "changeRequest", successMsg);
                                    $(this).html("");
                                    $(this).dialog('close');
                                    $(this).dialog('destroy');

                                }
                            },
                            {
                                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                                class: 'rdsMoveCopyButton',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog('close');
                                    $(this).dialog('destroy');

                                }
                            }
                        ],
                        open: function () {
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                        },
                        beforeClose: function (event, ui)
                        {
                            $(this).html("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                            $("#iframeid").remove();
                        }
                    });
                } else {
                    showAssetTreeErrorMsg("Message", "Change Request already in progress");
                }
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });
    } else {
        stopLoader();
    }

}


function refreshMOCRProcessStatus(batchId, flag) {

    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'json',
        cache: false,
        url: 'refreshMOCRProcessStatus',
        async: true,
        data: {
            batchId: batchId,
            flag: flag
        },
        success: function (response) {
            if (response != null && response != '') {
                if (response != null && !jQuery.isEmptyObject(response)) {
                    if (batchId != null && batchId != '' && batchId != undefined) {
                        if (response['FLAG'] == 'N') {
                            var intervalId = processStepsInterval[batchId];
                            if (intervalId) {
                                clearInterval(intervalId);
                                delete processStepsInterval[batchId];
                            }
                        }
                    }

//                    var message = response['MESSAGE'];
                    showNotification(response);
                }
            }
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
            var intervalId = processStepsInterval[batchId];
            if (intervalId) {
                clearInterval(intervalId);
                delete processStepsInterval[batchId];
            }
        }

    });
}


function showNotification(response) {
    var message = response['MESSAGE']
    // Show red dot
    $("#notificationDot").show();

    // Show popup fade
//    const popup = $("#notificationPopup");
//    popup.text(message).fadeIn(300).css("opacity", "1");
//
//    setTimeout(() => {
//        popup.fadeOut(500, () => popup.css("opacity", "0"));
//    }, 10000);

    const listItem = $(`
        <li>
            <span>${message}</span>
            <span class="close-btn">&times;</span>
        </li>
    `);
    listItem.data("response", response);

    listItem.on("click", function () {
        var data = $(this).data("response");
        var batchId = data['BATCH_ID'];
        markMocrNotificationAsSeen(batchId);
//        $(this).closest("li").remove();
        toggleNotificationBar();
        var basicData = data['BASIC_DATA'];
        basicData = JSON.parse(basicData);

        var dataField = data['DATA_FIELD'];
        var navgnGridId = data['NAVGN_GRID_ID'];
        var mocrNo = data['MOCR_NO'];
        var responseFlag = data['RESPONSE_FLAG'];
        var role = data['ROLE'];
        var type = data['TYPE'];
        if (type != null && type != '' && type != undefined && type == 'TRANSFER_TO_SAP')
        {
            showMOCRTransferToSAPDatainAILens(data);
            $(this).remove();
            return;
        }
        $("#dxpFormContent").empty();
        var $tabsElement = $('#dxpFromTab');
        $tabsElement.hide();
        $("#" + navgnGridId).remove();
        $("body").append("<div id='" + navgnGridId + "'></div>");
        $("#" + navgnGridId).attr("data-gridResultObj", JSON.stringify(basicData));
        if (responseFlag == "0") {
            showCopiedMOCRHierForm(basicData, batchId, navgnGridId, "dxpFormContent", role, "ASSET");
        } else {
            var gridInitParamObj = basicData['gridInitParamObj'];
            var treeId = gridInitParamObj['uuu_mocrTreeId'];
            getMocrCreateAssetTreeobject(treeId, "dxpMOCRPendingTreeDiv", mocrNo, dataField, basicData, navgnGridId, "N", role, "ASSET");
        }
        $(this).remove();
    });

    // Attach click handler for remove
    listItem.find(".close-btn").on("click", function (e) {
        e.stopPropagation(); // prevent toggle
        $(this).closest("li").remove();

        // if no notifications left, hide red dot
        if ($("#notificationList li").length === 0) {
            $("#notificationDot").hide();
        }
    });

    // Add to notification bar list
    $("#notificationList").prepend(listItem);
}

function toggleNotificationBar() {
    const bar = $("#notificationBar");
    bar.toggle();

    // Hide red dot when opened
    if (bar.is(":visible")) {
        $("#notificationDot").hide();
    }
}

function showMOCRProcessMessage(message) {
    if (message != null) {
        $("#assetMOCRCreateProcessDialogId").remove();
        $("body").append("<div id='assetMOCRCreateProcessDialogId'></div>");
        $("#assetMOCRCreateProcessDialogId").html(message);
        $("#assetMOCRCreateProcessDialogId").dialog({
            resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 'auto',
            minWidth: 600,
            maxWidth: '100%',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $("#dxpFormContent").empty();
                        var $tabsElement = $('#dxpFromTab');
                        $tabsElement.hide();
//                        $("#dxpMOCRPendingTreeWithGridSplitter").empty();
//                        $("#dxpMOCRPendingTreeWithGridSplitter").jqxSplitter('destroy');
//                        $("#dxpMOCRPendingTreeWithGridMainDiv").html("<div id='dxpMOCRPendingTreeWithGridSplitter' class='dxpMOCRPendingTreeWithGridSplitterClass'>"
//                                + "<div>"
//                                + "<div id='dxpMOCRTreeWithSearchSplitter' class='dxpMOCRTreeWithSearchSplitterClass'> "
//                                + "<div id ='dxpMOCRpendingTreeSearchDiv' ></div> "
//                                + "<div id='dxpMOCRPendingTreeDivId'></div> "
//                                + "</div>"
//                                + "</div>"
//                                + "<div id='dxpMOCRPendingTreeFormDiv'></div>"
//                                + "</div>");
//                        $("#dxpMOCRPendingTreeWithGrid img").click();
                        showSelectedTabContent(null, 'dxpHomeTab', 'dxpHomeContent');
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }}],
            open: function () {
                $(this).closest(".ui-dialog").css("z-index", "9999")
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
                $("#dxpMOCRPendingTreeWithGridSplitter").empty();
                $("#dxpMOCRPendingTreeWithGridSplitter").jqxSplitter('destroy');
                $("#dxpMOCRPendingTreeWithGridMainDiv").html("<div id='dxpMOCRPendingTreeWithGridSplitter' class='dxpMOCRPendingTreeWithGridSplitterClass'>"
                        + "<div>"
                        + "<div id='dxpMOCRTreeWithSearchSplitter' class='dxpMOCRTreeWithSearchSplitterClass'> "
                        + "<div id ='dxpMOCRpendingTreeSearchDiv' ></div> "
                        + "<div id='dxpMOCRPendingTreeDivId'></div> "
                        + "</div>"
                        + "</div>"
                        + "<div id='dxpMOCRPendingTreeFormDiv'></div>"
                        + "</div>");
                $("#dxpMOCRPendingTreeWithGrid img").click();
            }
        });
    }
}

function MOCRValidateRecords(gridId) {
    try {
        var aiFlag = localStorage.getItem("aiFlag");
        if (aiFlag != null && aiFlag != undefined && aiFlag != '' && aiFlag == 'Y') {
//            aiAgentTypingMessage("MOCR record verification summary generated — validation process completed for all related entities.");
            stopaiLoader();
//            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>MOCR record verification summary generated — validation process completed for all related entities.</div>");
        }
        showLoader();
        var batchId = $('#mocrBatchId').val();
        var basicData = {BATCH_ID: batchId, gridId: gridId};

        if (batchId) {
            $.ajax({
                type: "post",
                url: "MOCRValidateRecords",
                cache: false,
                data: {
                    batchId: batchId,
                    gridId: gridId,
                    basicData: JSON.stringify(basicData)
                },
                traditional: true,
                dataType: 'html',
                async: true,
                success: function (response) {
                    stopLoader();
//                    if (aiFlag != null && aiFlag != undefined && aiFlag != '' && aiFlag == 'Y') {
//                        defaultAITypingBasedOnResponse(response, '', "", "");
//                        stopaiLoader();
//                    } else {
                    $("#mocrvalidatecount").html(response);
//                    }

                    showFioriGeneralData('true');
                },
                error: function (xhr) {
                    stopLoader();
                    reject(xhr);
                }
            });
        } else {
            stopLoader();
            resolve(null);
        }
    } catch (e) {
        stopLoader();
        reject(e);
    }
}


function getCrossSearchForm(searchGridId, treeId, newGridId, orderByColumn)
{
    try {
        $(".visualizationDashboardView").hide();
        $("#dxp1Seconddiv").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp21MainSplitter").hide();
        $(".dxpSplitterTabsContent").hide();
        $("#dxpDomainMenus").hide();
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

        $("#dxpMenus").hide();
        $("#VisualizePageBody").hide();
        try {
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
        } catch (e) {

        }
        try {
            let currentTabName = event.currentTarget.innerText;
            var tabname = currentTabName.split('\n')[0];
            insertUserClickedNavigations(tabname);
        } catch (e) {

        }

        if (tabname == null || tabname == undefined || tabname == '' || tabname == 'undefined') {
            tabname = 'Cross Search View';
        }

        //  showSelectedTabContent(null, 'dxpMOCRSearchTreeWithGrid', 'dxpMOCRSearchTreeWithGridContent', tabname, 'N', 'Y');
        showSelectedTabContent(null, 'dxpEAMSearchTreeWithGrid', 'dxpEAMTreeWithGrid', tabname, 'N', 'Y');

        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }

        $("#dxpEAMTreeWithGrid").html("");
        $("#dxpMOCRSearchTreeWithGridContent").hide();
        $("#dxpEAMSearchTreeWithGridContent").show();
        $('#dxpEAMSearchDiv').html("<div id='gridUI5FilterForm_" + searchGridId + "' class='assetTreeGeneralDataDiv crossSearchUI5Form' data-treeId='" + treeId + "'></div>");
        getUI5FilterSearchForm(searchGridId, orderByColumn, 'CROSS_SEARCH', '');
    } catch (e) {
        console.log(e);
        stopLoader();
    }
}



function getUI5FilterSearchForm(gridId, orderByColumn, comptype, gridResultObj) {
    showLoader();
    try {
        var orderByColumnData = "";
        if (orderByColumn != null && orderByColumn != '' && orderByColumn != undefined) {
            orderByColumnData = orderByColumn;
        }
        $.ajax({
            type: "post",
            traditional: true,
            // dataType: 'json',
            url: "getFilterGridForm",
            cache: false,
            data: {
                selectedGridId: gridId,
                selectedTabId: "",
                UI5FilterGridFlag: "Y",
                selectedGridIndex: 0,
                orderByColumn: orderByColumnData,
                comptype: comptype,
            },
            success: function (response) {
                stopLoader();
                if (response != null && response != '') {
                    var filterFormObj = JSON.parse(response);

                    try {
                        $("#gridUI5FilterForm_" + gridId).html("");
                        $("#gridUI5FilterForm_" + gridId).css("display", "none");
                    } catch (e) {
                        console.log(e);
                    }
                    var result = filterFormObj['result']

                    if (result != null && result != '' && result != undefined) {
                        var filterColumns = filterFormObj['filterColumns'];
                        $("#" + gridId).attr("data-gridfilterColumnsData", filterColumns);
                        $("#gridUI5FilterForm_" + gridId).html(result);
                        $("#gridUI5FilterForm_" + gridId).css("display", "block");
                        $("#importfiltergridcriteria").html(filterFormObj['importButtonDiv']);

                        $("#" + gridId + "_FREESEARCHFIELD").unbind("keyup").on("keyup", function (event) {
                            if (event.key === "Enter" || event.keyCode === 13) {
                                $("#aiTypedValue").blur();
                                var filterValue = $(this).val().trim();
                                var selectedColumns = gridResultObj['colsArray'].filter(item =>
                                    (item.includes("RECORD_NO") || item.includes("ERP_NO") || item.includes("CLASS_TERM")
                                            || item.includes("DES") || item.includes("NAME") || item.includes("CREATE_BY")
                                            || item.includes("EDIT_BY") || item.includes("RECORD_TYPE") || item.includes("UOM")
                                            || item.includes("RECORD_GROUP") || item.includes("BUSINESS_UNIT") || item.includes("LONG_DESR")
                                            || item.includes("SHORT_DESR") || item.includes("STATUS") || item.includes("O_STATUS")
                                            || item.includes("REQ_NUMBER") || item.includes("SUPPLIER_NO") || item.includes("SUPPLIER_NAME")
                                            || item.includes("ACCOUNT_GROUP") || item.includes("PURCHASE_ORG") || item.includes("COMPANY_CDE")
                                            || item.includes("SALES_ORG") || item.includes("DISTRIBUTION_CHANNEL") || item.includes("DIVISION")
                                            || item.includes("INSTANCE")
                                            ) && !item.includes("HIDDEN") && !item.lastIndexOf("DATE") > -1
                                );
                                if (filterValue != null && filterValue != '' && filterValue != undefined) {

                                    try {
                                        $("#" + gridId + "_filter_columns").remove();
                                        $("#" + gridId).append("<input type='hidden' id='" + gridId + "_filter_columns' value=''/>");

                                        var paramArray = [];
                                        if (filterColumns != null && filterColumns != '' && filterColumns != undefined) {
                                            var filterColumnsArray = filterColumns.split(",");
                                            for (var x = 0; x < filterColumnsArray.length; x++)
                                            {
                                                var colname = filterColumnsArray[x];
                                                var textid = gridId + "_" + colname;
                                                var dataColType = $("#" + gridId + "_" + colname).attr('data-coltype');
                                                if (colname.lastIndexOf("DATE") > -1) {

                                                } else {
                                                    if (dataColType != 'D') {
                                                        var paramObj = {};
                                                        var value = filterValue.toUpperCase()
//                                        paramObj.column = " UPPER ("+columnName+")"; 
                                                        paramObj.column = colname;
                                                        paramObj.value = value.replace(/[^a-zA-Z0-9]/g, "%");
//                                        paramObj.value = value.replace(" ", "%");
                                                        paramObj.operator = 'CONTAINING';
                                                        paramObj.symbol = 'CONTAINING';
                                                        paramObj.selectNum = "";
                                                        paramObj.dataColType = "";
                                                        paramObj.rangeFlag = "";
                                                        paramObj.minvalue = "";
                                                        paramObj.maxvalue = "";
                                                        paramObj.andOrCond = "OR";
                                                        paramObj.valuetype = "";
                                                        paramArray.push(paramObj);
                                                    }
                                                }

                                            }

                                            selectedColumns.forEach(columnName => {
                                                if (!(columnName.lastIndexOf("DATE") > -1)) {
                                                    var paramObj = {};
                                                    var value = filterValue.toUpperCase()
//                                        paramObj.column = " UPPER ("+columnName+")"; 
                                                    paramObj.column = columnName;
                                                    paramObj.value = value.replace(/[^a-zA-Z0-9]/g, "%");
//                                        paramObj.value = value.replace(" ", "%");
                                                    paramObj.operator = 'CONTAINING';
                                                    paramObj.symbol = 'CONTAINING';
                                                    paramObj.selectNum = "";
                                                    paramObj.dataColType = "";
                                                    paramObj.rangeFlag = "";
                                                    paramObj.minvalue = "";
                                                    paramObj.maxvalue = "";
                                                    paramObj.andOrCond = "OR";
                                                    paramObj.valuetype = "";
                                                    paramArray.push(paramObj);
                                                }

                                            });

                                        } else {
                                            selectedColumns.forEach(columnName => {
                                                if (!(columnName.lastIndexOf("DATE") > -1)) {
                                                    var paramObj = {};
                                                    var value = filterValue.toUpperCase()
//                                        paramObj.column = " UPPER ("+columnName+")"; 
                                                    paramObj.column = columnName;
                                                    paramObj.value = value.replace(/[^a-zA-Z0-9]/g, "%");
//                                        paramObj.value = value.replace(" ", "%");
                                                    paramObj.operator = 'CONTAINING';
                                                    paramObj.symbol = 'CONTAINING';
                                                    paramObj.selectNum = "";
                                                    paramObj.dataColType = "";
                                                    paramObj.rangeFlag = "";
                                                    paramObj.minvalue = "";
                                                    paramObj.maxvalue = "";
                                                    paramObj.andOrCond = "OR";
                                                    paramObj.valuetype = "";
                                                    paramArray.push(paramObj);
                                                }

                                            });
                                        }
                                        if (paramArray != null && paramArray.length > 0) {

                                            $("#" + gridId + "_filter_columns").remove();
                                            $("#" + gridId + "_filter_columns_flag").remove();
                                            $("#" + gridId).append("<input type='hidden' id='" + gridId + "_filter_columns' value=''/>");
                                            $("#" + gridId).append("<input type='hidden' id='" + gridId + "_filter_columns_flag' value='Y'/>");
                                            $("#" + gridId + "_filter_columns").val(JSON.stringify(paramArray));

                                            try {
                                                $("#" + gridId).jqxGrid('updatebounddata');
                                            } catch (e) {
                                            }

                                            try {
                                                $("#" + gridId).jqxGrid('clearselection');
                                            } catch (e) {
                                            }




                                        }

                                    } catch (e) {
                                    }


                                } else {

                                    try {
                                        $("#" + gridId + "_filter_columns").remove();
                                        $("#" + gridId + "_filter_columns_flag").remove();
                                        $("#" + gridId).jqxGrid('updatebounddata');
                                    } catch (e) {
                                    }

                                    try {
                                        $("#" + gridId).jqxGrid('clearselection');
                                    } catch (e) {
                                    }

                                }


                            }
                        });

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

                        try {
                            var lovColumns = filterFormObj['lovColumns'];
                            if (lovColumns && !jQuery.isEmptyObject(lovColumns)) {
                                for (let lovColumnName in lovColumns) {
                                    if (!lovColumnName)
                                        continue;

                                    let opts = {
                                        width: '100%',
                                        height: 50,
                                        autoDropDownHeight: false,
                                        dropDownHeight: 100,
                                        dropDownVerticalAlignment: 'bottom',
                                        filterable: true,
                                        placeHolder: 'Select...',

                                    };

                                    if (lovColumns[lovColumnName] === true) {
                                        opts.checkboxes = true;
                                    }

                                    $('#' + lovColumnName).jqxDropDownList(opts);

                                    const setOp = () => $('#operator_' + lovColumnName).val('IN');
                                    $('#' + lovColumnName)
                                            .on('select', setOp)
                                            .on('checkChange', setOp);
                                }
                            }

                        } catch (er) {

                        }

                        try {
                            var filterValObj = $("#" + gridId + "_filter_columns").val();
                            console.log("filterVal:::" + filterValObj);
                            if (filterValObj != null && filterValObj != '') {
                                var filterValArray = JSON.parse(filterValObj);
                                console.log("filterVal:::" + filterValArray);
                                if (filterValArray != null && filterValArray.length != 0) {
                                    for (var i = 0; i < filterValArray.length; i++) {
                                        var paramObj = filterValArray[i];
                                        if (paramObj != null && !jQuery.isEmptyObject(paramObj)) {
                                            var colname = paramObj.column;
                                            var dataColType = paramObj.dataColType;
                                            if (dataColType == 'L') {
                                                var colValue = paramObj.value;
                                                if (colValue != null && colValue != '') {
                                                    var colValueArray = colValue.split(",");
                                                    if (colValueArray != null && colValueArray.length != 0) {
                                                        var lovColName = gridId + "_" + colname;
                                                        for (var j = 0; j < colValueArray.length; j++) {
                                                            var item = $("#" + lovColName).jqxComboBox('getItemByValue', colValueArray[j]);
                                                            $("#" + lovColName).jqxComboBox('selectItem', item);
                                                        }
                                                    }
                                                }
                                            } else {
                                                $("#" + gridId + "_" + colname).val(paramObj.value);
                                            }

                                            var colSelectNum = paramObj.selectNum;
                                            $("#operator_" + gridId + "_" + colname).val(paramObj.operator);
                                        }


                                    }
                                }

                            }
                        } catch (er) {
                            console.log(er);
                        }


                    } else {

                        try {
                            $("#gridUI5FilterForm_" + gridId).html("");
                            $("#gridUI5FilterForm_" + gridId).css("display", "none");
                        } catch (e) {
                            console.log(e);
                        }
                    }
                } else {

                    try {
                        $("#gridUI5FilterForm_" + gridId).html("");
                        $("#gridUI5FilterForm_" + gridId).css("display", "none");
                    } catch (e) {
                        console.log(e);
                    }
                }

            },
            error: function (e) {
                stopLoader();
                sessionTimeout(e);
            }// Error function in Ajax
        });
    } catch (ex) {
        try {
            stopLoader();
            $("#gridUI5FilterForm_" + gridId).html("");
            $("#gridUI5FilterForm_" + gridId).css("display", "none");
        } catch (e) {
            console.log(e);
        }
        //stopLoader();
    }
}

function clearUI5FilterCrossSearch(grid) {
    $('#gridUI5FilterForm_' + grid + ' .ui5gridfilter-item').each(function () {
        $(this).find('input').val('');
    });
    $("#dxpEAMTreeWithGrid").empty();
}


function getUI5CrossSearchResults(selectedGridId) {

    var paramArrayOfArrays = [];
    var hasInputValue = false;

    $('#gridUI5FilterForm_' + selectedGridId + ' .ui5gridfilter-item').each(function () {
        var innerArray = [];

        var $label = $(this).find('label');
        var $input = $(this).find('input');

        if ($label.length) {
            var labelColumn = $label.data('columnnname') || '';
            var labelValue = $label.attr('for') || '';
            var columnName = (labelValue === 'Functional Location')
                    ? 'LOCATION'
                    : labelValue.replace(/\s+/g, '').toUpperCase();

            if (labelColumn && labelValue) {
                innerArray.push({
                    column: labelColumn,
                    value: columnName,
                    operator: "EQUALS",
                    symbol: "EQUALS",
                    selectNum: "",
                    dataColType: "",
                    rangeFlag: "",
                    minvalue: "",
                    maxvalue: "",
                    andOrCond: "AND",
                    valuetype: ""
                });
            }
        }

        if ($input.length) {
            var rawValue = $input.val() || "";
            var column = $label.data('tablecolvalue') || '';
            var $operatorSelect = $(this).find('select');
            var operator = $operatorSelect.length ? $operatorSelect.val() : 'CONTAINING';

            var value;
            if (rawValue.trim() !== "") {
                value = rawValue.trim().toUpperCase().replace(/[^a-zA-Z0-9]/g, "%");
                hasInputValue = true;
                innerArray.push({
                    column: column,
                    value: value,
                    operator: operator,
                    symbol: operator,
                    selectNum: "",
                    dataColType: $input.data('coltype') || '',
                    rangeFlag: $input.data('range') || 'N',
                    minvalue: '',
                    maxvalue: '',
                    andOrCond: "AND",
                    valuetype: ""
                });
            }
        }

        if (innerArray.length > 0) {
            paramArrayOfArrays.push(innerArray);
        }
    });


    var crossSearchData = JSON.stringify(paramArrayOfArrays);
    console.log(crossSearchData);
    if (!hasInputValue) {
        $("#dialog").html("Please enter at least one search value to proceed.");
        $("#dialog").dialog({
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
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function () {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
        return;
    }

    showLoader();
    $.ajax({
        dataType: 'html',
        type: 'POST',
        url: 'getDXPCrossSearchData',
        data: {
            gridId: selectedGridId,
            crossSearchData: crossSearchData,
            fioriThemeFlag: $("#cb-switch").is(":checked")
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response) {
                $('#dxpEAMTreeWithGrid')
                        .empty()
                        .html(response)
                        .append('<div id=\"EAMSearchGrid\"></div>')
                        .append('<input type="hidden" id="dxpEAMConditionFlag" value="true">')
                        .show();
                if ($("#cb-switch").is(":checked")) {
                    getScrollFioriTheme();
                    $("#linxea-avenir li").each(function () {
                        var $link = $(this).find("a.nav-link");
                        var spanText = $(this).find("span.listItemtext").text();
                        var match = spanText.match(/\((\d+)\)/);
                        if (match && parseInt(match[1], 10) > 0) {
                            var tabname = spanText.split(/[\n(]/)[0].trim();
                            var crossSearchElem = $("#cross_search_hidden");
                            var paramElem = $("#paramArray_" + tabname.replace(" ", "_"));
                            if (crossSearchElem.length && paramElem.length) {
                                var dataParam = paramElem.attr("data-param");
                                if (dataParam) {
                                    dataParam = dataParam.replace(/&quot;/g, '"');
                                    crossSearchElem.val(dataParam);
                                }
                            }
                            $link.data("tabname", tabname);
                            $link.trigger("click");
                            return false;
                        }
                    });
//                    }
                    // scroll


                    $(".fioriPendingContainer .innerCardDetailsitem").eq(0).addClass("active");
                    $(".innerCardWrapper .innerCardDetailsitem .count").each(function () {
                        let countText = $(this).text().trim();
                        let number = parseInt(countText, 10);
                        if (!isNaN(number)) {
                            $(this).text(number.toLocaleString());
                        }
                    });
                } else {
                    $("#dxp2TabsWithGrid").show();
                    $("#dxp2TabsWithGridContent").show();
                    $("#dxp2FirstDiv").empty().html(response).css("visibility", "visible");
                    $('#dxp2MainSplitter').jqxSplitter({
                        width: '100%',
                        height: '100%',
                        orientation: 'vertical',
                        splitBarSize: 0,
                        panels: [{size: 270}]
                    });
                    $("#dxp2FirstDiv").addClass('dxpSplitterListDiv');
                }
            }
            $("#dxpMenus").hide();
            $("#dxpGridContent").hide();
            $("#dxpTabs").show();
//            $("#dxp2TabsWithGrid").show();

            var tabname = typeof tabname !== 'undefined' ? tabname : 'View Tabs Data';
            var fioriThemeCheck = $("#cb-switch").is(":checked");
            if (!tabname || tabname === 'undefined') {
                showSelectedTabContent(null, 'dxp2TabsWithGrid', 'dxp2TabsWithGridContent', 'View Tabs Data', 'N');
            }

            try {
                let currentTabName = $(event.currentTarget).find(".submenuText").text().split('\n')[0];
                insertUserClickedNavigations(currentTabName);
            } catch (e) {
                console.warn("Error handling navigation:", e);
            }
            $("#dxpMOCRSearchTreeWithGridContent").animate({
                scrollTop: $("#dxpEAMSearchDiv")[0].scrollHeight
            }, 500);
        }
        ,
        error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
            console.error("AJAX error:", textStatus, errorThrown);
        }
    }
    );
}

function getEAMSearchGrid(componentType, gridId, roleId, searchCount) {
    showLoader();
    $("#secondSplitterListData div").removeClass('domainPendingRegactiveTab');
    $(event.currentTarget).addClass("domainPendingRegactiveTab");
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    try {
        if (fioriThemeCheck) {
            $('#dxpHomeContent').hide();//17-03-2025
//            $('#dxpFioriContent').show();//17-03-2025
            $('.innerCardWrapper').find('.active').removeClass('active');
            $(event.currentTarget).addClass("active");
            const scrollableContainer = document.querySelector('.innerCardWrapper');

            // Add wheel event listener
            scrollableContainer.addEventListener('wheel', function (event) {
                // Modify scrollLeft instead of scrollTop for horizontal scrolling
                if (event.deltaY > 0) {
                    // Scrolling right
                    scrollableContainer.scrollLeft += 100; // Adjust scroll amount
                } else {
                    // Scrolling left
                    scrollableContainer.scrollLeft -= 100; // Adjust scroll amount
                }

                // Prevent the default vertical scroll behavior
                event.preventDefault();
            });

        }
    } catch (e) {

    }
    $("#dxpEAMConditionFlag").val("true");
    if ($('.visionTask').is(':visible')) {
        let target = event.currentTarget;
        visionSetTaskActive(target);
    }

    try {
        let currentTabName = event.currentTarget.innerText;

        var tabname = currentTabName.split(/[\n(]/)[0].trim();

        var crossSearchElem = $("#cross_search_hidden");
        var paramElem = $("#paramArray_" + tabname.replace(" ", "_"));

        if (crossSearchElem.length > 0 && paramElem.length > 0) {
            var dataParam = paramElem.attr("data-param");
            if (dataParam) {
                // Unescape &quot; to real quotes
                dataParam = dataParam.replace(/&quot;/g, '"');
                crossSearchElem.val(dataParam); // set unescaped string as value
            }
        }

        insertUserClickedNavigations(tabname);
    } catch (e) {

    }
    $("#intellisense").hide();
    $("#searchResultsCountId").hide();
    $("#rolehid").val(roleId);
    //$("#dxp21MainSplitter").jqxSplitter('collapse');
    $("#dxp21SecondDiv").val('');
    $("#fourthDxpSplitter").val('');
    $("#dxp21SecondDiv").show();
    $('.viewClassDiv').removeClass('active');
    $("#excelExportsearchResults").show();
    var selectedValue = $("#SelectedValue").val();
    $(".searchResultsList").hide();
    $(".searchDXPCreate").hide();
    closefioriPopOver("producttypeId");
    secondPanelShowFlag = true;

    if (Number(searchCount) < 1 && $("#EAMSearchGrid #PM_CROSS_SEARCH_RESULTS").length) {
        $("#EAMSearchGrid #" + gridId).jqxGrid('clear');
        stopLoader();
        return;
    }


    if (componentType != null && componentType != undefined && componentType != 'FILTER_GRID') {

        $.ajax({
            datatype: "json",
            type: "POST",
            url: 'getCloudGrid',
            data: {
                'gridId': gridId,
                'roleId': roleId,
            },
            traditional: true,
            cache: false,
            async: true,
            success: function (response) {
                stopLoader();
                if (fioriThemeCheck) {
                    if ($("#" + gridId).length != 0) {
                        try {
                            $("#" + gridId).jqxGrid('destroy');
                            $("#" + gridId).remove();
                        } catch (error) {
                            console.log(error)
                            $("#" + gridId).remove();
                        }
                    }

                    if ($("body").find(".firstLevelMenuSection").length > 0) {
                        var flag = $("#dxpEAMConditionFlag").val();
                        if (flag === "true") {
                            $("#EAMSearchGrid").html("<div id='" + gridId + "'></div>");
                            $("#gridUI5Filter_" + gridId).show();

                        } else {
                            $("#dxpFioriGridContent").html("<div id='" + gridId + "'></div>");
                        }

//                          
                    } else {
//                        $("#dxpFioriContent").html("<div id='" + gridId + "'></div>");
                        $("#dxpFioriContent").html("<div id ='gridUI5FilterForm_" + gridId + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + gridId + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div></div></div></div></div></div><div id='" + gridId + "'></div>");
                        $("#gridUI5FilterForm_" + gridId).css("display", "none");
                        try {
                            getUI5FilterGridForm(gridId, null, 'GRID', response)
                        } catch (e) {

                        }
                    }

                } else {
                    $("#dxpGridContent").html("<div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div id='submitDropdown" + response['gridId'] + "' class='visionGenericTabSubmit'></div></div><div id='exportDropdown" + response['gridId'] + "' class='visionGenericTabExport'></div></div></div><div id='" + response['gridId'] + "'></div>");
                }

                if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {

                    if (fioriThemeCheck) {
                        if ($("body").find(".firstLevelMenuSection").length > 0) {
                            try {
                                var gridInitParamObj = response['gridInitParamObj'];
                                if (gridInitParamObj['uuu_tatShowReport'] != null && gridInitParamObj['uuu_tatShowReport'] != undefined
                                        && gridInitParamObj['uuu_tatShowReport'] != "") {
                                    var uuu_tatShowReport = gridInitParamObj['uuu_tatShowReport'];
                                    if (uuu_tatShowReport != null && uuu_tatShowReport != undefined
                                            && uuu_tatShowReport != '' && uuu_tatShowReport == 'Y') {
                                        $('#dxpFioriContent').show();
                                    }
                                } else {
                                    $('#dxpFioriContent').hide();
                                }
                            } catch (e) {

                            }

                        } else {
                            $('#dxpFioriContent').show();
                            showSelectedTabContent(null, 'dxpFioriContentTab', 'dxpFioriContent', tabname, 'N');
                        }

                    } else {
                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', tabname, 'N');
                    }
                } else {
                    if (fioriThemeCheck) {
                        if ($("body").find(".firstLevelMenuSection").length > 0) {
                            $('#dxpFioriContent').hide();
                        } else {
                            $('#dxpFioriContent').show();
                            showSelectedTabContent(null, 'dxpFioriContentTab', 'dxpFioriContent', 'View Data', 'N');
                        }

                    } else {
                        showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', 'View Data', 'N');
                    }
                }
                $("#dxpGridTab").attr("data-gridcomponenttype", componentType);
                $("#dxpGridTab").attr("data-selectedgridId", gridId);
                $("#dxpGridTab").attr("data-selectedRoleId", roleId);
                $("#dxpGridTab").attr("data-functionName", "getMaterialComponentGrid");
                $("#dxpFioriContentTab").attr("data-gridcomponenttype", componentType);
                $("#dxpFioriContentTab").attr("data-selectedgridId", gridId);
                $("#dxpFioriContentTab").attr("data-selectedRoleId", roleId);
                $("#dxpFioriContentTab").attr("data-functionName", "getMaterialComponentGrid");
                $("#dxpFioriGridContentTab").attr("data-gridcomponenttype", componentType);
                $("#dxpFioriGridContentTab").attr("data-selectedgridId", gridId);
                $("#dxpFioriGridContentTab").attr("data-selectedRoleId", roleId);
                $("#dxpFioriGridContentTab").attr("data-functionName", "getMaterialComponentGrid");
                if ($("#dxpTabs").is(":visible")) {
                } else {
                    toggleTabsAndMenus(event);
                }
                var rejettype = response['ssRejectCommentObj'];
                var processrejetreasons = response['ssProcessRejectCommentObj'];
                $("#rejectData").val((rejettype));
                $("#rejectReasonsObj").val((rejettype));
                $("#processWiserejectReasonsObj").val((processrejetreasons));
                delete response['ssRejectCommentObj'];
                delete response['ssProcessRejectCommentObj'];
                delete response['gridName'];
                if (fioriThemeCheck) {
                    var crossSearchInput = $("#cross_search_hidden");
                    var configData = [];

                    if (crossSearchInput.length && crossSearchInput.val() && $("#dxpEAMConditionFlag").val() === 'true') {
                        try {

                            configData = JSON.parse(crossSearchInput.val());
                        } catch (e) {
                            console.error('Error parsing cross_search data:', e);

                            configData = [];
                        }
                    }

                    gridConfig(response, 0, configData, gridId);

                } else {
                    gridConfig(response, 0, [], 'searchGrid');
                }

                $(".searchDXPCreate").show();
                $("#searchGrid").show();
                $("#searchGrid").css("visibility", "visible");
                $(".dxpClassHideShow").show();
                // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 1550}]}); //31122
                $("#fourthDxpSplitter").hide();
                $("#thirdDxpSplitter").show();
//            stopLoader();
            }, error: function (e) {
                console.log("The Error Message is:::" + e.message);
                stopLoader();
                sessionTimeout(e);
            }
        });
    } else if (componentType == 'FILTER_GRID') {
        getFilterGridForm(gridId);
    }
}



function getCompareSearchForm(searchGridId, treeId, newGridId, orderByColumn)
{
    try {
        $(".visualizationDashboardView").hide();
        $("#dxp1Seconddiv").html("");
        $("#dxp1Firstdiv").html("");
        $("#dxp21MainSplitter").hide();
        $(".dxpSplitterTabsContent").hide();
        $("#dxpDomainMenus").hide();
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
        $("#dxpMenus").hide();
        $("#VisualizePageBody").hide();
        try {
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedGridIndex", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedgridId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedTabId", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridselectedColumn", "");
            $("#dxp1TabsWithGrid").attr("data-filterGridisImport", "");
        } catch (e) {

        }
        try {
            let currentTabName = event.currentTarget.innerText;
            var tabname = currentTabName.split('\n')[0];
            insertUserClickedNavigations(tabname);
        } catch (e) {

        }

        if (tabname != null || tabname != undefined || tabname != '' || tabname != 'undefined') {
            tabname = 'Comparison Search';
        }

//        showSelectedTabContent(null, 'dxpMOCRSearchTreeWithGrid', 'dxpMOCRSearchTreeWithGridContent', tabname, 'N', 'Y');
        showSelectedTabContent(null, 'dxpEAMSearchTreeWithGrid', 'dxpEAMTreeWithGrid', tabname, 'N', 'Y');

        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
        $("#dxpEAMTreeWithGrid").html("");
        $("#dxpMOCRSearchTreeWithGridContent").hide();
        $("#dxpEAMSearchTreeWithGridContent").show();

        $('#dxpEAMSearchDiv').html("<div id='gridUI5FilterForm_" + searchGridId + "' class='assetTreeGeneralDataDiv compareSearchUI5Form' data-treeId='" + treeId + "'></div>");
        getUI5FilterSearchForm(searchGridId, orderByColumn, 'COMPARE_SEARCH', '');

    } catch (e) {
        console.log(e);
        stopLoader();
    }
}



function getUI5CompareSearchResults(selectedGridId, filterColumns) {

    var paramArray = generateCompareSearchParamArray(selectedGridId, filterColumns);

    var paramArrayOfArrays = paramArray['paramArray'];
    var hasInputValue = paramArray['hasInputValue']; // 
    var emptyInputs = paramArray['emptyInputs'];
    var columnMap = paramArray['columnMap'];
    var operatorMap = paramArray['operatorMap'];
    var hasDuplicate = paramArray['hasDuplicate'];

    var crossSearchData = JSON.stringify(paramArrayOfArrays);
    console.log(crossSearchData);

    if (!hasInputValue || emptyInputs) {
        showPopup("All input fields must be filled to proceed.");
        return null;
    }
    if (hasDuplicate) {
        showPopup("Duplicate values are not allowed. Please enter unique values.");
        return null;
    }

    let treeId = $('#gridUI5FilterForm_' + selectedGridId).attr('data-treeId');
    showLoader();
    $.ajax({
        dataType: 'html',
        type: 'POST',
        url: 'getDXPAssetTreeFilterDataWithCount',
        data: {
            'treeId': treeId,
            'columnMap': JSON.stringify(columnMap),
            'operatorMap': JSON.stringify(operatorMap),
        },
        traditional: true,
        cache: false,
        success: function (response) {

            if (response) {
                $('#dxpEAMTreeWithGrid')
                        .empty()
                        .append(response)
                        .show();

                fetchCompareSearchData(columnMap, operatorMap, selectedGridId, treeId);
            }
            $("#dxpMenus").hide();
            $("#dxpGridContent").hide();
            $("#dxpTabs").show();

        }
        ,
        error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
            console.error("AJAX error:", textStatus, errorThrown);
        }
    }
    );
}


function fetchCompareSearchData(columnMap, operatorMap, gridId, treeId) {
    showLoader();
    $("#dxpEAMConditionFlag").val("true");
    let ajaxCalls = [];

    for (let i = 0; i < columnMap.length; i++) {
        ajaxCalls.push(
                $.ajax({
                    datatype: 'json',
                    type: 'POST',
                    url: 'getDXPAssetTreeFilterData',
                    data: {
                        'treeId': treeId,
                        'columnMap': JSON.stringify(columnMap[i]),
                        'operatorMap': JSON.stringify(operatorMap[i]),
                        'searchType': 'compareSearch'
                    },
                    traditional: true,
                    cache: false,
                    beforeSend: function (xhr) {
                        showLoader();
                        xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr("content"));
                    },
                    success: function (resp) {
                        getCompSearchTreeConfig(resp, 'dxpEAMTreeDiv' + i, "", gridId, 'N');

                    }
                })
                );

    }

    $.when.apply($, ajaxCalls).always(function () {
        $('#dxpEAMSearchTrees').show();
        let expandCalls = [];

        for (let i = 0; i < columnMap.length; i++) {
            expandCalls.push(
                    new Promise((resolve) => {
                        setTimeout(function () {
                            expandAll('dxpEAMTreeDiv' + i);
                            resolve();
                        }, 300);
                    })
                    );
        }

        Promise.all(expandCalls).then(function () {
            $('#dxpEAMCompareSearchTrees').show();
            stopLoader();
        });
    });
}


function getCompSearchTreeConfig(treeObj, treeDivId, gridId, plantFlag) {
    showLoader();
    var treeConfigObj = treeObj['treeConfigObj'];
    var columnsObj = treeObj['treeColumnObj'];
    var treeButtonsDivStr = treeObj['treeButtonsDivStr'];
    treeConfigObj.checkboxes = true;
    $('#' + treeDivId).jqxTree(treeConfigObj);
    $("#" + treeDivId).jqxTree('focus');
    $("#jqxTreeDropdown").hide();
    $("#dxpEAMConditionFlag").val("true");

    $('#' + treeDivId).unbind('mouseenter').on('mouseenter', '.jqx-tree-item', function (e) {
        $(this).removeAttr('title');
    });

    $('#' + treeDivId).on('checkChange', function (event) {
        var item = event.args.element;
        var isChecked = event.args.checked;
    });

    $('#' + treeDivId).on('select', function (event)
    {
        var args = event.args;
        var item = $('#' + treeDivId).jqxTree('getItem', args.element);
        var label = item.label;
        var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
        var level = item['level'];
        var selectedValue = item['value'];
        if (level != null && level != '' && level != '0') {
            level = parseInt(level) - 1;
        }
        var selectedColumnObj = columnsObj[0];
        if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
            var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
            var compId = selectedColumnObj['FOLLOWUP_COMP_ID'];
            if (compId != null && compId != '' && compId != undefined
                    && compType != null && compType != '' && compType != undefined) {
                if (compType == 'GRID') {// grids,tabs,form ,cluster
                    var gridDiv = '<div id="assetTreeHierGridId" class="assetTreeHierGridClass"></div>';
                    $("#dxp1Seconddiv").html(gridDiv);
                    fetchGrid(selectedColumnObj, compId, selectedValue, "assetTreeHierGridId", "PARENT_FLD");
                } else if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                    var clusterDiv = '<div id="clusterSplitter">'
                            + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                            + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                            + '</div>';
                    $("#dxp1Seconddiv").html(clusterDiv);
                    fetchCluster(selectedColumnObj, selectedValue, level);
                } else if (compType == 'TREE') {
                    var childTreeDiv = ' <div id="jqxChildExpander">'
                            + ' <div id="expanderChildDesc" class="visionTreeDescription"></div>'
                            + ' <div style="border: none;" id="jqxChildTreeDropdown" class="visionTreeDropDown" ></div>'
                            + ' <div style="overflow: hidden;" id="jqxChildTreeDiv">'
                            + '<div style="border: none;" id="jqxChildTree"></div>'
                            + '</div>'
                            + '</div>';
                    $("#dxp1Seconddiv").html(childTreeDiv);
                    fetchChildTree('jqxTree', selectedColumnObj, selectedValue, level);
                }
            }

        }



    });



    $('#' + treeDivId).on('expand', function (event) {
        showLoader();
        var parentItem = $('#' + treeDivId).jqxTree('getItem', event.args.element);
        var level = parentItem.level;
        var $element = $(event.args.element);
        var loader = false;
        var loaderItem = null;
        var assetType = $($element).first().attr('item-description');
        var children = $element.find('ul:first').children();
        $.each(children, function () {
            var item = $('#' + treeDivId).jqxTree('getItem', this);
            if (item && item.value == 'ajax') {
                loaderItem = item;
                loader = true;
                return false;
            }

        });

        if (loaderItem != null) {
            var extTreeParams = $("#extTreeParams").val();
            $('#' + treeDivId).jqxTree('removeItem', loaderItem.element);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getDXPAssetTreeDataOpt",
                cache: false,
                data: {
                    parentkey: ((level == 0 && plantFlag == 'Y') ? "1000" : parentItem.value),
                    assetType: assetType,
                    treeId: treeObj['treeId'],
                    level: parentItem.level,
                    extTreeParams: extTreeParams,
                    columnsObj: JSON.stringify(columnsObj),
                },
                success: function (data, status, xhr) {

                    $('#' + treeDivId).jqxTree('addTo', data, $element[0]);
                    var items = $('#' + treeDivId).jqxTree('getItems');
                    stopLoader();
                    $.each(items, function () {
                        $(this.titleElement).attr('title', this.label);
                        $("#" + this.titleElement[0].id).removeClass('visionETLParentHighight');
                    });
                    var treeId = treeDivId;
                    $('#' + treeId).on('select', function (event)
                    {
                        var args = event.args;
                        var item = $('#' + treeId).jqxTree('getItem', args.element);
                        var label = item.label;
                        var type = args.type; // mouse, keyboard or null. If the user selects with the mouse, the type will be "mouse".
                        var level = item['level'];
                        var selectedValue = item['value'];
                        if (level != null && level != '' && level != '0') {
                            level = parseInt(level) - 1;
                        }
                        var selectedColumnObj = columnsObj[0];
                        if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj)) {
                            var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
                            var compId = selectedColumnObj['FOLLOWUP_COMP_ID'];
                            if (compId != null && compId != '' && compId != undefined
                                    && compType != null && compType != '' && compType != undefined) {
                                if (compType == 'GRID') {// grids,tabs,form ,cluster
                                    var gridDiv = '<div id="assetTreeHierGridId" class="assetTreeHierGridClass"></div>';
                                    $("#dxp1Seconddiv").html(gridDiv);
                                    fetchGrid(selectedColumnObj, compId, selectedValue, "assetTreeHierGridId", "PARENT_FLD");
                                } else if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
                                    var clusterDiv = '<div id="clusterSplitter">'
                                            + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
                                            + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
                                            + '</div>';
                                    $("#dxp1Seconddiv").html(clusterDiv);
                                    fetchCluster(selectedColumnObj, selectedValue, level);
                                } else if (compType == 'TREE') {
                                    var childTreeDiv = ' <div id="jqxChildExpander">'
                                            + ' <div id="expanderChildDesc" class="visionTreeDescription"></div>'
                                            + ' <div style="border: none;" id="jqxChildTreeDropdown" class="visionTreeDropDown" ></div>'
                                            + ' <div style="overflow: hidden;" id="jqxChildTreeDiv">'
                                            + '<div style="border: none;" id="jqxChildTree"></div>'
                                            + '</div>'
                                            + '</div>';
                                    $("#dxp1Seconddiv").html(childTreeDiv);
                                    fetchChildTree('jqxTree', selectedColumnObj, selectedValue, level);
                                }
                            }

                        }



                    });



                },
                error: function (e) {
                    console.log(e);
                    sessionTimeout(e);
                    stopLoader();
                }
            });
        } else {
            stopLoader();
        }


    });

}

function expandAll(treeDivId) {
    var $tree = $('#' + treeDivId);

    var items = $tree.jqxTree('getItems');
    var queue = items.map(item => item.element);

    function processNext() {
        if (queue.length === 0) {
            return;
        }

        var element = queue.shift();
        $tree.jqxTree('expandItem', element);

        var children = $(element).find('li');
        children.each(function () {
            var childItem = $tree.jqxTree('getItem', this);
            if (childItem)
                queue.push(childItem.element);
        });

        setTimeout(processNext, 100);
    }

    processNext();
}

function getCompareSearchTreeGrid(treeId1, treeId2, roleId) {
    $("#dxpEAMConditionFlag").val("true");
    function buildTreeData(treeId) {
        var checkedItems = $("#" + treeId).jqxTree("getCheckedItems");
        console.log("Checked items for " + treeId, checkedItems);

        if (!checkedItems || checkedItems.length === 0) {
            showPopup("Please select one item from each tree");
            return null;
        }

        if (checkedItems.length > 1) {
            showPopup("Please select only one item from each tree");
            return null;
        }

        var nodes = [];

        checkedItems.forEach(function (item) {
            var label = item.label;
            var idMatch = label.match(/id='([^']+)'/);
            if (!idMatch) {
                console.warn("No id found in label:", label);
                return;
            }
            var labelId = idMatch[1];

            var basicData = {
                CONCEPT_ID: $("#" + labelId).attr("data-concept_id"),
                INSTANCE: $("#" + labelId).attr("data-instance"),
                BUSINESS_UNIT: $("#" + labelId).attr("data-business_unit"),
                RECORD_NO: $("#" + labelId).attr("data-record_no"),
                ERP_NO: $("#" + labelId).attr("data-erp_no"),
                TYPE: $("#" + labelId).attr("data-object_type"),
                GRID_ID: $("#" + labelId).attr("data-grid_id")
            };

            nodes.push({basicData: basicData});
        });

        return nodes;
    }

    var tree1Data = buildTreeData(treeId1);
    var tree2Data = buildTreeData(treeId2);

    if (!tree1Data || !tree2Data) {
        console.error("Missing data for one or both trees");
        return;
    }

    if (tree1Data[0].basicData.TYPE !== tree2Data[0].basicData.TYPE) {
        showPopup("Both selections must be of the same type!");
        return null;
    }
    var crossSearchData = [];

    var crossSearchData = [tree1Data, tree2Data].map(tree =>
        tree.map(node =>
            Object.entries(node.basicData).map(([key, val]) => ({
                    column: key,
                    value: val,
                    operator: "=",
                    symbol: "=",
                    selectNum: "",
                    dataColType: "",
                    rangeFlag: "N",
                    minvalue: "",
                    maxvalue: "",
                    andOrCond: "AND",
                    valuetype: ""
                }))
        )
    );


    var combinedPayload = {
        tree1: tree1Data,
        tree2: tree2Data,
        crossSearchData: crossSearchData
    };


    var crossSearchElem = $("#cross_search_hidden");
    if (crossSearchElem.length && crossSearchData && crossSearchData.length > 0) {
        crossSearchElem.val(JSON.stringify(crossSearchData));
    }
    console.log("Combined payload:", combinedPayload);
    var gridIdToUse = tree1Data.length > 0 ? tree1Data[0].basicData.GRID_ID : null;
    getEAMSearchTable(gridIdToUse, roleId, crossSearchData);


}


function getEAMSearchTable(gridId, roleId, parramArray) {
    showLoader();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'cloudCompareSearchTable',
        data: {
            'gridId': gridId,
            'roleId': roleId,
            'parramArray': JSON.stringify(parramArray)
        },
        traditional: true,
        cache: false,
        async: true,
        success: function (response) {
            stopLoader();
            $("#dialog3").html(response);

            $("#dialog3").dialog({
                resizable: false,
                title: "Comparison Grid Data",
                modal: true,
                maxHeight: 500,
                width: 1000,
                fluid: true,
                open: function () {
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                buttons: [{
                        text: "Ok",
                        click: function () {
                            $(this).empty();
                            $(this).dialog("destroy");
                        }
                    }],
                beforeClose: function () {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}

function showPopup(message) {
    $("#dialog3").html("<div>" + message + "</div>");
    $("#dialog3").dialog({
        resizable: false,
        title: "Comparison Search Grid Data",
        modal: true,
        maxHeight: 300,
        width: 500,
        fluid: true,
        open: function () {
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        buttons: [{
                text: "Ok",
                click: function () {
                    $(this).empty();
                    $(this).dialog("destroy");
                }
            }],
        beforeClose: function () {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

function generateCompareSearchParamArray(selectedGridId, filterColumns) {
    $("#" + selectedGridId + "_filter_columns").remove();
    $("#" + selectedGridId).append("<input type='hidden' id='" + selectedGridId + "_filter_columns' value=''/>");

    var paramArray = [];
    var hasInputValue = false;
    var emptyInputs = false;
    var columnMap = [];
    var operatorMap = [];

    var seenValues = new Set(); // track values
    var hasDuplicate = false;   // flag for duplicates

    if (filterColumns) {
        var filterColumnsArray = filterColumns.split(",");
        for (var x = 0; x < filterColumnsArray.length; x++) {
            var colname = filterColumnsArray[x];
            var textid = selectedGridId + "_" + colname;
            var dataColType = $("#" + textid).attr("data-coltype");

            var $operatorSelect = $("#operator_" + selectedGridId + "_" + colname);
            var operator = $operatorSelect.length ? $operatorSelect.val() : "CONTAINING";

            if (colname.lastIndexOf("DATE") > -1) {
                continue;
            }

            var value = $("#" + textid).val();
            if (value) {
                var upperValue = value.toUpperCase();

                if (seenValues.has(upperValue)) {
                    hasDuplicate = true; // mark duplicate found
                }
                seenValues.add(upperValue);

                hasInputValue = true;
                var key = colname.split("-")[0];
                var colObj = {};
                colObj[key] = value;
                columnMap.push(colObj);

                var opObj = {};
                opObj[key] = operator;
                operatorMap.push(opObj);

                var paramObj = {
                    column: key,
                    value: upperValue,
                    operator: "EQUALS",
                    symbol: "=",
                    selectNum: "",
                    dataColType: dataColType,
                    rangeFlag: "",
                    minvalue: "",
                    maxvalue: "",
                    andOrCond: "OR",
                    valuetype: ""
                };

                paramArray.push([paramObj]);
            } else {
                emptyInputs = true;
            }
        }
    }

    return {
        paramArray: paramArray,
        hasInputValue: hasInputValue,
        emptyInputs: emptyInputs,
        columnMap: columnMap,
        operatorMap: operatorMap,
        hasDuplicate: hasDuplicate
    };
}
function showMocrVerificationResults(batchId, gridId, basicdataStr, type, whereClause) {
    showLoader();
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'getMOCRNonVerifiedResults',
        data: {
            'gridId': gridId,
            'batchId': batchId,
            'basicData': basicdataStr,
            'whereClause': whereClause,
            'type': type
        },
        traditional: true,
        cache: false,
        async: true,
        success: function (response) {
            stopLoader();
            if (response != null && response != "" && response != undefined) {
                $("#mocrVerificationResults").html(response);
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}
function getTotalRecordsFromFinalResult(finalResultStr) {
    if (!finalResultStr || typeof finalResultStr !== "string") {
        return 0;
    }

    const chunks = finalResultStr
            .replace(/}\s*{/g, "}|||{")
            .split("|||");

    let total = 0;

    for (let i = 0; i < chunks.length; i++) {
        try {
            const obj = JSON.parse(chunks[i]);
            if (obj && obj.rowCount) {
                total += Number(obj.rowCount) || 0;
            }
        } catch (e) {
            // ignore invalid chunk
        }
    }

    return total;
}
function getViewMocrProcessNotifications() {
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'json',
        cache: false,
        url: 'getViewMocrProcessNotifications',
        async: true,
        data: {
        },
        success: function (response) {
            if (Array.isArray(response) && response.length > 0) {
                console.log("Received notifications:", response);

                response.forEach(function (notif) {
                    if (!processStepsInterval[notif]) {
                        processStepsInterval[notif] = setInterval(function () {
                            refreshMOCRProcessStatus(notif);
                        }, 500);
                    }
                });
            } else {
                console.log("No unseen notifications.");
            }
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function markMocrNotificationAsSeen(batchId) {
    $.ajax({
        type: 'POST',
        url: 'updateMocrProcessNotificationFlag',
        data: {batchId: batchId},
        success: function (response) {
            if (response != null && response != undefined && response != "" && response == "successfully Updated") {
                console.log("Notification marked as seen");
                if (processStepsInterval[batchId]) {
                    clearInterval(processStepsInterval[batchId]);
                    delete processStepsInterval[batchId];
                }
            }
        },
        error: function (e) {
            console.error("Error updating notification flag for", responseId, e);
        }
    });
}


function showMOCRTransferToSAPDatainAILens(data)
{
    showLoader();
    $.ajax({
        datatype: "html",
        type: "POST",
        url: 'getMOCRTransferToSAPResults',
        data: {
            mocrData: JSON.stringify(data)
        },
        traditional: true,
        cache: false,
        async: true,
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                var message = response['Message'];
                var width = $("#myNav").width();
                if (!(width > 10)) {
                    aiEnableBasedOnClick();
                }
                defaultAITypingBasedOnResponse(message, '', "", "");
            }

        }, error: function (e) {
            console.log("The Error Message is:::" + e.message);
            stopLoader();
            sessionTimeout(e);
        }
    });
}
function createMOCRTaskList($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo)
{
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "checkTLAssetAddMOCRTreeData",
        cache: false,
        data: {
            selectedValue: selectedValue,
            treeId: treeId,
            fromType: fromType,
            allowType: allowType,
            mocrNo: mocrNo,
            erpNo: erpNo,
            parentRecordNo: parentRecordNo,
            gridId: gridId
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            if (response != null && !jQuery.isEmptyObject(response)) {
                var message = response['Message'];
                var flag = response['flag'];
                if (flag)
                {
                    var details = "{\"buttonValue\":\"Register\",\"baskettype\":\"New_Registrations\",\"gridId\":\"" + gridId + "\",\"mocrNo\":\"" + mocrNo + "\"}";
                    navigateToMOCRAssetRegistrationForm(details, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo);
                } else {
                    $("#assetAddDataErrorDialogId").remove();
                    $("body").append("<div id='assetAddDataErrorDialogId'></div>");
                    $("#assetAddDataErrorDialogId").html(message);
                    $("#assetAddDataErrorDialogId").dialog({
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 140,
                        width: 600,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                class: 'rdsMoveCopyButton',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog('close');
                                    $(this).dialog('destroy');

                                }
                            }
                        ],
                        open: function () {
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                        },
                        beforeClose: function (event, ui)
                        {
                            $(this).html("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                            $("#iframeid").remove();
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
function createMOCRMaintenancePlan($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo)
{
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "checkMPAssetAddMOCRTreeData",
        cache: false,
        data: {
            selectedValue: selectedValue,
            treeId: treeId,
            fromType: fromType,
            allowType: allowType,
            mocrNo: mocrNo,
            erpNo: erpNo,
            parentRecordNo: parentRecordNo,
            gridId: gridId
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            if (response != null && !jQuery.isEmptyObject(response)) {
                var message = response['Message'];
                var flag = response['flag'];
                if (flag)
                {
                    var details = "{\"buttonValue\":\"Register\",\"baskettype\":\"New_Registrations\",\"gridId\":\"" + gridId + "\",\"mocrNo\":\"" + mocrNo + "\"}";
                    navigateToMOCRAssetRegistrationForm(details, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo);
                } else {
                    $("#assetAddDataErrorDialogId").remove();
                    $("body").append("<div id='assetAddDataErrorDialogId'></div>");
                    $("#assetAddDataErrorDialogId").html(message);
                    $("#assetAddDataErrorDialogId").dialog({
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 140,
                        width: 600,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                class: 'rdsMoveCopyButton',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog('close');
                                    $(this).dialog('destroy');

                                }
                            }
                        ],
                        open: function () {
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                        },
                        beforeClose: function (event, ui)
                        {
                            $(this).html("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                            $("#iframeid").remove();
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




function addMOCRTaskList($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo)
{
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "checkTLAssetAddMOCRTreeData",
        cache: false,
        data: {
            selectedValue: selectedValue,
            treeId: treeId,
            fromType: fromType,
            allowType: allowType,
            mocrNo: mocrNo,
            erpNo: erpNo,
            parentRecordNo: parentRecordNo,
            gridId: gridId
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            if (response != null && !jQuery.isEmptyObject(response)) {
                var message = response['Message'];
                var flag = response['flag'];
                if (flag)
                {
                    addTLMPToMOCR($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo);
                } else {
                    $("#assetAddDataErrorDialogId").remove();
                    $("body").append("<div id='assetAddDataErrorDialogId'></div>");
                    $("#assetAddDataErrorDialogId").html(message);
                    $("#assetAddDataErrorDialogId").dialog({
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 140,
                        width: 600,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                class: 'rdsMoveCopyButton',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog('close');
                                    $(this).dialog('destroy');

                                }
                            }
                        ],
                        open: function () {
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                        },
                        beforeClose: function (event, ui)
                        {
                            $(this).html("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                            $("#iframeid").remove();
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
function addMOCRMaintenancePlan($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo)
{
    showLoader();
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "checkMPAssetAddMOCRTreeData",
        cache: false,
        data: {
            selectedValue: selectedValue,
            treeId: treeId,
            fromType: fromType,
            allowType: allowType,
            mocrNo: mocrNo,
            erpNo: erpNo,
            parentRecordNo: parentRecordNo,
            gridId: gridId
        },
        success: function (result, status, xhr) {
            stopLoader();
            var response = result;
            if (response != null && !jQuery.isEmptyObject(response)) {
                var message = response['Message'];
                var flag = response['flag'];
                if (flag)
                {
                    addTLMPToMOCR($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo);
                } else {
                    $("#assetAddDataErrorDialogId").remove();
                    $("body").append("<div id='assetAddDataErrorDialogId'></div>");
                    $("#assetAddDataErrorDialogId").html(message);
                    $("#assetAddDataErrorDialogId").dialog({
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 140,
                        width: 600,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                class: 'rdsMoveCopyButton',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog('close');
                                    $(this).dialog('destroy');

                                }
                            }
                        ],
                        open: function () {
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog helpDocumentationDialog RdsMoveCopyDialog");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                        },
                        beforeClose: function (event, ui)
                        {
                            $(this).html("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                            $("#iframeid").remove();
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

function addTLMPToMOCR($this, gridId, treeId, treeDivId, selectedValue, fromType, allowType, parentRecordNo, mocrNo, erpNo)
{
    showLoader();
    $.ajax({
        type: "POST",
        url: 'getMOCRAddingItemData',
        dataType: 'json',
        data: {
            treeId: treeId,
            selectedType: fromType,
            allowType: allowType
        },
        traditional: true,
        async: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var checkBoxList = response['checkBoxData'];
            var $logoutDialog = $("#logoutDailog");
            var body = "<div id = 'selectMOCRItemDataList'></div><div id = 'errorItemDataId' style='color:red;'></div>";
            $("#logoutDailog").html(body);
            $("#selectMOCRItemDataList").jqxListBox({
                filterable: true,
                //checkboxes: true,
                source: checkBoxList,
                theme: 'energyblue',
                displayMember: 'text',
                valueMember: 'value',
                width: '100%',
            });
            $logoutDialog.dialog({
                title: (labelObject['Add'] != null ? labelObject['Add'] : 'Add'),
                modal: true,
                dialogClass: "AddAssetMOCRDialogClass",
                width: 300,
                height: 310,
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            var recordNo = $("#selectMOCRItemDataList").val();
                            if (recordNo != null && recordNo != "" && recordNo != undefined && recordNo != "null") {
                                var instance = recordNo.split("::")[1];
                                recordNo = recordNo.split("::")[0];
                                insertAssettoMOCR(treeId, treeDivId, recordNo, fromType, allowType, parentRecordNo, mocrNo, erpNo, instance);
                                $logoutDialog.html("");
                                $logoutDialog.dialog("close");
                                $logoutDialog.dialog("destroy");

                            } else {
                                $("#errorItemDataId").text("Please select an Item.");
                            }
                        }
                    }],
                open: function () {
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
                    $("#filterselectMOCRItemDataList input").on("keyup", function (e) {
                        showLoader();
                        var searchString = e.currentTarget.value;

                        $.ajax({
                            type: "post",
                            traditional: true,
                            dataType: 'json',
                            url: 'getMOCRAddingItemData',
                            cache: false,
                            data: {
                                treeId: treeId,
                                selectedType: fromType,
                                searchString: searchString,
                                allowType: allowType
                            },
                            success: function (response) {
                                stopLoader();
                                const batchIdsArray = response['checkBoxData'] || [];
                                const listBox = $("#selectMOCRItemDataList");
                                //listBox.jqxListBox('clear');
                                //batchIdsArray.forEach(item => listBox.jqxListBox('addItem', item));

                                listBox.jqxListBox('destroy');
                                $("#selectMOCRItemDataList").remove();
                                $("#errorItemDataId").remove();
                                var body = "<div id = 'selectMOCRItemDataList'></div><div id = 'errorItemDataId' style='color:red;'></div>";
                                $("#logoutDailog").html(body);
                                const listBox1 = $("#selectMOCRItemDataList");
                                listBox1.jqxListBox({
                                    filterable: true,
                                    source: batchIdsArray, // Filtered data
                                    theme: 'energyblue',
                                    displayMember: 'text', // Assuming 'text' property for display
                                    valueMember: 'value', // Assuming 'value' property for value
                                    width: '100%',
                                });
                                listBox1.jqxListBox('refresh');

                            },
                            error: function (e) {
                                console.log(e);
                                sessionTimeout(e);
                            }
                        });

                    });


                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
                }
            });
        }
    });
}
function showNavigateToTabForm(hrefColumn, basicData, type, gridId, tabId, tabIndex, showTabFlag, gridObj, divId)
{
    $("#" + divId).empty();
    $("#" + divId).append("<div id='" + gridId + "'></div>");
    $("#hrefColumn").val(hrefColumn);
    $("#" + gridId).attr('data-gridResultObj', JSON.stringify(gridObj));
    navigateToForm(hrefColumn, basicData, type, gridId, "", 0, showTabFlag, divId);
}