/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


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
var labelObject = {};
try {
    labelObject = JSON.parse($("#labelObjectHidden").val());
} catch (e) {

}
function unlockUser(gridId) {
    var userList = [];
    var userObj;
    var rowData = "";
    var selectedrowindexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    var totalRowIndex = selectedrowindexes.length;
    if (selectedrowindexes.length > 0)
    {
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
            rowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            userObj = new Object();
            userObj.username = rowData.USER_NAME;
            userObj.persid = rowData.PERS_ID;
            userObj.emailid = rowData.EMAIL;
            userObj.dob = rowData.DOB;
            userList.push(userObj);
        }
    }

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'text',
        cache: false,
        url: "unlockUserWB",
        data: {
            userList: JSON.stringify(userList)
        },
        success: function (response) {
            $("#dialog").html(response);
            $("#dialog").dialog({resizable: false,
                title: 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
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
        },
        error: function (e) {
            console.log("Error::" + e);
        }

    });
}

function resetPassword(gridId) {

    var userList = [];
    var userObj;
    var rowData = "";
    var selectedrowindexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    var totalRowIndex = selectedrowindexes.length;
    if (selectedrowindexes.length > 0)
    {
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
            rowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            userObj = new Object();
            userObj.username = rowData.USER_NAME;
            userObj.persid = rowData.PERS_ID;
            userObj.emailid = rowData.EMAIL;
            userObj.dob = rowData.DOB;
            userList.push(userObj);
        }
    }

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'text',
        cache: false,
        url: "resetPasswordWB",
        data: {
            userList: JSON.stringify(userList)
        },
        success: function (response) {
            $("#dialog").html(response);
            $("#dialog").dialog({resizable: false,
                title: 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
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
        },
        error: function (e) {

        }

    });
}

function masterDetailContentGrid(masterDetailObj, source) {
    // alert(JSON.stringify(masterDetailObj));

    var masterObj = masterDetailObj.master;
    // console.log(":::::::" + JSON.stringify(masterObj));

    var masterGridId = masterObj.gridId;
    masterGrid = masterObj.gridId;
    // $("#"+masterGridId+"Icon").html(masterObj.gridOperation);
    var columns = masterObj.columns;
    var datafields = masterObj.datafields;
    var localData = masterObj.data;
    var childGridId = masterDetailObj.childGridId;
    var childGridId3 = masterDetailObj.childGridId3;
    var childGridId4 = masterDetailObj.childGridId4;
    // alert("childGridId:::"+childGridId+":::masterGridId::::"+masterGridId);
    var relationArray1 = masterDetailObj.level2RelArray[0];
    var relationObject = relationArray1[0];

    childOldData[masterGridId] = localData;
    tableNames[masterGridId] = masterObj.tableName;
//                gridColumns[masterGridId] =  masterObj.columns;
    // level1OldData = localData;
//                var source =
//                        {
//                            localdata: localData,
//                            datafields: datafields,
//                            datatype: "json"
//                        };
    var dataAdapter = new $.jqx.dataAdapter(source);
    var gridConfigObj = {};
    gridConfigObj = masterObj.gridPropObj;
    gridConfigObj.source = dataAdapter;
//                fieldsArray = masterObj.columns;
    gridConfigObj.columns = masterObj.columns;

    var listTypeColName = [];
    var listTypeColNameId = [];
    var dropDownListData = masterObj.dropDownListData;

    for (var i = 0; i < datafields.length; i++) {
        if (typeof datafields[i].values != "undefined" && datafields[i].values != null) {
            var listboxData = eval(datafields[i].values.source);
            var dataFeildName = datafields[i].name;
            // var dataFeildNameId=dataFeildName+"_ID";
            if (dataFeildName.indexOf("_ID") > -1) {
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
            datafields[i].values.source = listBoxAdapter.records;
        }


    }
    var newLocalData = [];
    if (localData != null && localData.length > 0 && listTypeColName.length > 0) {


        for (var i = 0; i < localData.length; i++) {
            var dataObj = localData[i];
            for (var j = 0; j < listTypeColName.length; j++) {

                dataObj[listTypeColNameId[j]] = dataObj[listTypeColName[j]];
                var displayKeyValuObj = dropDownListData[listTypeColName[j]];

                for (var k = 0; k < displayKeyValuObj.length > 0; k++) {

                    var displayFieldObj = displayKeyValuObj[k];
                    if (displayFieldObj != null && displayFieldObj != "" && displayFieldObj.id == dataObj[listTypeColName[j]]) {

                        dataObj[listTypeColName[j]] = displayFieldObj.ListboxValue;

                    }

                }


            }
            newLocalData.push(dataObj);

        }
//                                     console.log("newLocalData:::"+JSON.stringify(newLocalData));
//                                     console.log("LocalData:::"+JSON.stringify(localdata));

        if (newLocalData != null && newLocalData.length > 0) {
            localData = [];
            localData = newLocalData;
            //console.log(JSON.stringify(newLocalData));

        }
    }

//                 gridConfigObj.renderToolbar  =  function(toolBar)
//                {
//                     // alert("hai");
//                    var gridOperationIconsObj = {};
//                    gridOperationIconsObj = masterObj.gridOperationIcons;
//                   // alert(JSON.stringify(gridOperationIconsObj));
//                   
//       
//        //alert(JSON.stringify(gridOperationIconsObj));
//        var container = $("<div style='overflow: hidden; position: relative; height: 100%; width: 100%;'></div>");
//
//        toolBar.append(container);
////                    toolBar.append(container);
//                };
    gridConfigObj.rendergridrows = function (obj) {
        return obj.data;
    };
    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
        //var cellValue = $("#" + childGridId).jqxGrid('getcellvalue', row, columnfield);
        var cellValue = $("#" + masterObj.gridId).jqxGrid('getcellvalue', row, columnfield);
        var viewType = "GRID-VIEW";
        var editable = gridConfigObj.editable;
        if (editable) {
            var ddwData = masterObj.dropDowndData;
            var ddwObj = ddwData[columnfield];
            var dependencyparams = ddwObj.dependencyparams;
            //return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
            return "<div  style='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + masterObj.gridId + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
        } else
        {
            var ddwData = masterObj.dropDowndData;
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



    var col = masterObj.columns;
    for (var i = 0; i < col.length; i++) {
        //////alert("j :::::::::"+i);
        if (col[i].rendered != null) {
            col[i].rendered = eval('(' + col[i].rendered + ')');
        }
    }

    for (var i = 0; i < masterObj.columns.length; i++) {
        if (masterObj.columns[i].cellsrenderer != null) {
            //columns[i].cellsrenderer = eval(columns[i].cellsrenderer);
            ////alert(columns[i].cellsrenderer);
            masterObj.columns[i].cellsrenderer = eval('(' + masterObj.columns[i].cellsrenderer + ')');
            ////alert("////alert(columns[i].cellsrenderer);  ::: "+columns[i].cellsrenderer);
        }

        if (masterObj.columns[i].createeditor != null) {

            masterObj.columns[i].createeditor = eval('(' + masterObj.columns[i].createeditor + ')');

        }

        if (masterObj.columns[i].initeditor != null) {


            masterObj.columns[i].initeditor = eval('(' + masterObj.columns[i].initeditor + ')');

        }
        if (masterObj.columns[i].geteditorvalue != null) {


            masterObj.columns[i].geteditorvalue = eval('(' + masterObj.columns[i].geteditorvalue + ')');

        }
        if (masterObj.columns[i].cellbeginedit != null) {


            masterObj.columns[i].cellbeginedit = eval('(' + masterObj.columns[i].cellbeginedit + ')');

        }
        if (masterObj.columns[i].rendered != null) {

            masterObj.columns[i].rendered = eval('(' + masterObj.columns[i].rendered + ')');

        }

    }
    var renderToolbar = gridConfigObj.renderToolbar;
    // console.log("renderToolbar::::" + renderToolbar);
    //  alert("renderToolbar:::"+renderToolbar);
    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');

//    gridConfigObj.enabletooltips = false;
    gridConfigObj.cellhover = function (element, pageX, pageY)
    {
//        var cellToolTip = $(element).text();
//        if (cellToolTip != null && cellToolTip != '') {
//            $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                showArrow: false, content: cellToolTip});
//            $(element).parent().jqxTooltip('open', pageX + 5, pageY + 5);
//        }
    };
    $("#" + masterGridId).jqxGrid(gridConfigObj);
    $("#" + masterGridId).jqxGrid('updatebounddata');
    // $("#" + masterGridId).jqxGrid('selectrow', 0);
    var dataArray = [];
    $("#" + masterGridId).bind('cellclick', function (event) {
        masterGridSelectedIndexes.length = 0;
        //  alert("event.args.rowindex:PUSH:"+event.args.rowindex);
        // var rowindexes = $('#jqxgrid').jqxGrid('getselectedrowindexes');
        masterGridSelectedIndexes.push(event.args.rowindex);
        $('#childTab').jqxTabs('val', 0);
        dataArray = [];
        //   alert("cellclick");
        var column = event.args.column;

        var rowindex = event.args.rowindex;
        var data = $("#" + masterGridId).jqxGrid('getrowdata', rowindex);
        // var datafield = column.datafield;
        var selectedrowindexes = $('#' + masterGridId).jqxGrid('selectedrowindexes');
//        var datafield = column.datafield;
        var datafield = relationObject.PARENT_FIELD;
        var allowDetailFetch = true;
        var totalRowIndex = selectedrowindexes.length;
        if (selectedrowindexes.length > 0)
        {
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
                if (selectedrowindexes[i] == rowindex) {
                    allowDetailFetch = false;
                    break;
                }

            }
        }
//        for (var i = 0; i < selectedrowindexes.length; i++)
//        {
//            if (selectedrowindexes[i] == rowindex) {
//                allowDetailFetch = false;
//                break;
//            }
//
//
//        }


        console.log(JSON.stringify(data));
        // alert(" datafield: " + datafield);
        var colDatafield = $.trim(column.datafield);
        if (relationObject.PARENT_FIELD != null
                //&& relationObject.PARENT_FIELD == datafield
                && allowDetailFetch
                ) {
            dataArray.push(data);
            childDetailContent(childGridId, dataArray, relationObject, masterGridId);
            //  $( "#"+childGridId ).trigger( "cellclick" );
//                         $( "#"+childGridId3 ).trigger( "cellclick" );
//                         $( "#"+childGridId4 ).trigger( "cellclick" );
        }


    });

    $("#" + masterGridId).on('cellbeginedit', function (event)
    {
        $("#" + masterGridId).attr('data-last-ed-field', event.args.datafield);
        $("#" + masterGridId).attr('data-last-ed-row', event.args.rowindex);
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
        $("#" + masterGridId).jqxGrid('selectrow', rowBoundIndex);
    });

}
var masterSelectedRow = "";
function childDetailContent(childGridId, firstRowData, relationObject, currentGridId) {
//           alert(childGridId);
    //   var gridObj = getGridResults(childGridId);
    $("#wait").show();
    masterSelectedRow = firstRowData;
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "masterDetailChildResults",
        cache: false,
        data: {
            gridId: childGridId,
            fiirstRowData: JSON.stringify(firstRowData),
            relationObject: JSON.stringify(relationObject)
//                        gridObj: JSON.stringify(gridObj)

        },
        success: function (response) {

//                         alert("response:::" + response);

            var childGridData = JSON.parse(response);

            var childGridId = childGridData.gridId;
            // alert("childGridId::::"+childGridId);
            var localData = childGridData.data;
            var datafields = childGridData.datafields;
            // console.log("localData:::"+JSON.stringify(localData));
            childOldData[childGridId] = localData;
            tableNames[childGridId] = childGridData.tableName;
//                          gridColumns[childGridId] =   childGridData.columns;
            var source =
                    {
                        localdata: localData,
                        datafields: datafields,
                        datatype: "json"
                    };
            var dataAdapter = new $.jqx.dataAdapter(source);
            var gridConfigObj = {};
            gridConfigObj = childGridData.gridPropObj;
            gridConfigObj.source = dataAdapter;
            //                fieldsArray = masterObj.columns;
            gridConfigObj.columns = childGridData.columns;

            // 
            var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                var cellValue = $("#" + childGridId).jqxGrid('getcellvalue', row, columnfield);
                var viewType = "GRID-VIEW";
                var editable = gridConfigObj.editable;
                if (editable) {
                    var ddwData = childGridData.dropDowndData;
                    var ddwObj = ddwData[columnfield];
                    var dependencyparams = ddwObj.dependencyparams;
                    // return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
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
            var renderToolbar = gridConfigObj.renderToolbar;
            //  alert("renderToolbar:::"+renderToolbar);
            gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');

//            gridConfigObj.enabletooltips = false;
            gridConfigObj.cellhover = function (element, pageX, pageY)
            {
//                var cellToolTip = $(element).text();
//                if (cellToolTip != null && cellToolTip != '') {
//                    $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                        showArrow: false, content: cellToolTip});
//                    $(element).parent().jqxTooltip('open', pageX + 5, pageY + 5);
//                }
            };
            $("#" + childGridId).jqxGrid(gridConfigObj);
            $("#" + childGridId).jqxGrid('updatebounddata');
            // $("#"+childGridId+"Icon").html(childGridData.gridOperation);
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
            });
            $("#wait").hide();
        },
        error: function (e) {

            sessionTimeout(e);
            //foreignVendorResult = "Error occured while updating foreign Vendors data.";
        }
    });

}
function childDetailContentGrid(masterDetailObj) {


    var masterObj = masterDetailObj.master;

//                console.log(":::::::" + JSON.stringify(masterObj));
//                console.log(":::::::" + masterObj.childGridId);
    var masterGridId = masterObj.gridId;
    var childGridId = masterDetailObj.childGridId;
    var columns = masterObj.columns;
    var datafields = masterObj.datafields;
    var localData = masterObj.data;
    var firstRowData = localData[0];
    var firstDataArray = [];
    firstDataArray.push(firstRowData);
    var relationArray1 = masterDetailObj.level2RelArray[0];
    var relationArray3 = masterDetailObj.level3RelArray[0];
    //  console.log("relationArray1::::" + JSON.stringify(relationArray1));
    var relationObject = relationArray1[0];
    //  console.log("masterDetailObj.level2Obj::::"+masterDetailObj.level2Obj);
    setChildDefaultData(masterDetailObj.level2Obj);//for level2
    var levelCount = masterDetailObj.levelCount;
    if (levelCount != null && levelCount != 2) {
        setChildDefaultData(masterDetailObj.level3Obj);//for level3
    }

    if (levelCount != null && levelCount == 4) {
        setChildDefaultData(masterDetailObj.level4Obj);//for level4
    }

    //   childDetailContent(childGridId, firstDataArray, relationObject);


}
function setChildDefaultData(childGridData) {
    // console.log("childGridData::::"+JSON.stringify(childGridData));
    var childGridId = childGridData.gridId;
    //  alert("childGridId::::"+childGridId);
    var localData = childGridData.data;
    childOldData[childGridId] = localData;
    tableNames[childGridId] = childGridData.tableName;
//                      gridColumns[childGridId] = childGridData.columns;
    var datafields = childGridData.datafields;
    // console.log("localData:::"+JSON.stringify(localData));

    var source =
            {
                localdata: localData,
                datafields: datafields,
                datatype: "json"
            };
    var dataAdapter = new $.jqx.dataAdapter(source);
    var gridConfigObj = {};
    gridConfigObj = childGridData.gridPropObj;
    gridConfigObj.source = dataAdapter;
    //                fieldsArray = masterObj.columns;
    gridConfigObj.columns = childGridData.columns;

//    console.log("childGridData.columns::::" + JSON.stringify(childGridData.columns));

    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
        var cellValue = $("#" + childGridId).jqxGrid('getcellvalue', row, columnfield);
        var viewType = "GRID-VIEW";
        var editable = gridConfigObj.editable;
        if (editable) {
            var ddwData = childGridData.dropDowndData;
            var ddwObj = ddwData[columnfield];
            var dependencyparams = ddwObj.dependencyparams;
            //   return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
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
    var renderToolbar = gridConfigObj.renderToolbar;
    //  alert("renderToolbar:::"+renderToolbar);
    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');

//    gridConfigObj.enabletooltips = false;
    gridConfigObj.cellhover = function (element, pageX, pageY)
    {
//        var cellToolTip = $(element).text();
//        if (cellToolTip != null && cellToolTip != '') {
//            $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                showArrow: false, content: cellToolTip});
//            $(element).parent().jqxTooltip('open', pageX + 5, pageY + 5);
//        }
    };
    $("#" + childGridId).jqxGrid(gridConfigObj);
    $("#" + childGridId).jqxGrid('updatebounddata');
    // alert("currentTabId:::"+currentTabId+"::::"+childGridData.gridOperation);
//   $("#" + childGridId + "Icon").html(childGridData.gridOperation);
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
    });
}


function refreshGridData(gridId) {
//    $("#" + gridId + "HID").val("UPDATE");
//    var jsonData = {};
//    jsonData = getGridResults(gridId);
//    getTabData(jsonData['childTabIndex'], jsonData['masterGridId'], jsonData['selectedRowData'], jsonData['childLevelTab'], jsonData['currentTab']);
    $("#" + gridId + "HID").val("UPDATE");
    var jsonData = {};
    if (gridId == masterGrid) {
        var masterDetailObj = masterDetailObjMain;
        var source =
                {
                    type: 'POST',
                    async: false,
                    datatype: "json",
                    datafields: masterDetailObj.master.datafields,
                    data: {
                        gridId: masterDetailObj.master.gridId,
                        colsArray: JSON.stringify(masterDetailObj.master.colsArray),
                        tableName: masterDetailObj.master.tableName
                    },
                    url: 'masterDetailFormData',
                    cache: false,
                    beforeprocessing: function (data) {
//                        try {
//                            $("#" + masterDetailObj.master.gridId).jqxGrid('clearselection');
//                        } catch (e) {
//                        }
                        //  console.log(JSON.stringify(data));
                        if (data[0] != null) {
                            childOldData[masterDetailObj.master.gridId] = data;
//                                               alert(data[0].TotalRows);
                            source.totalrecords = data[0].TotalRows;
                        } else {
                            source.totalrecords = 0;
                        }
                    },
                    sort: function ()
                    {
                        try {
                            $("#" + masterDetailObj.master.gridId).jqxGrid('clearselection');
                        } catch (e) {
                        }
                        $("#" + masterDetailObj.master.gridId).jqxGrid('updatebounddata', 'sort');
                    },
                    filter: function () {
                        try {
                            $("#" + masterDetailObj.master.gridId).jqxGrid('clearselection');
                        } catch (e) {
                        }
                        $("#" + masterDetailObj.master.gridId).jqxGrid('updatebounddata', 'filter');
                    }
                };
        masterDetailContentGrid(masterDetailObj, source);
        childDetailContentGrid(masterDetailObj);
    } else {
        jsonData = getGridResults(gridId);
        getTabData(jsonData['childTabIndex'], jsonData['masterGridId'], jsonData['selectedRowData'], jsonData['childLevelTab'], jsonData['currentTab']);
    }
    $('#' + masterDetailObj.master.gridId).jqxGrid({showfilterrow: true});
    $('#' + masterDetailObj.master.gridId).jqxGrid({filterable: true});
}

function getGridResults(gridId) {
    try {
        var jsonData = {};
        var level1TabId = $("#level1TabId").val();
        var level2TabId = $("#level2TabId").val();
        var level3TabId = $("#level3TabId").val();
        var level4TabId = $("#level4TabId").val();
        var level1MasterId = $("#level1MasterId").val();
        var level2MasterId = $("#level2MasterId").val();
        var level3MasterId = $("#level3MasterId").val();
        var level4MasterId = $("#level4MasterId").val();
        var masterLevelTab = "";
        var childLevelTab = "";
        var tabindex = 0;
        var childTabIndex = 0;
        var selectedRowData = {};
        var masterGridId = "";
        var currentTab = "";
        var levelCount = 0;
//    console.log("gridId::::" + gridId);
//    console.log("level1TabId::::" + level1TabId + ":::level2TabId:::" + level2TabId + "::::::level3TabId:::" + level3TabId + "::::::level4TabId:::::" + level4TabId);
//    console.log("level1MasterId::::" + level1MasterId + ":::level2MasterId:::" + level2MasterId + "::::::level3MasterId:::" + level3MasterId + "::::::level4MasterId:::::" + level4MasterId);
        if (level1TabId != null && level1TabId != '' && level1TabId != undefined && level1TabId != 'undefined' && level1TabId.lastIndexOf(gridId) > -1) {

            childLevelTab = "childTab";
            var level1TabIds = level1TabId.split(",");
            tabindex = level1TabIds.lastIndexOf(gridId);
            childTabIndex = $('#masterTab').jqxTabs('val');
            currentTab = "masterTab";
            levelCount = 1;
            masterGridId = level1TabIds[tabindex];
        } else if (level2TabId != null && level2TabId != '' && level2TabId != undefined && level2TabId != 'undefined' && level2TabId.lastIndexOf(gridId) > -1) {
            tabindex = (level2TabId.split(",")).lastIndexOf(gridId);
            masterLevelTab = "masterTab";
            childLevelTab = "childTab3";
            childTabIndex = $('#childTab').jqxTabs('val');
            masterGridId = (level2MasterId.split(","))[tabindex];

            var rowindex = 0;
            // console.log("childGrid3SelectedIndexes:::"+childGrid3SelectedIndexes);
            if (masterGridSelectedIndexes.length != 0) {
                rowindex = masterGridSelectedIndexes[0];
            }
            selectedRowData = $('#' + masterGridId).jqxGrid('getrowdata', rowindex);
            currentTab = "childTab";
            levelCount = 2;
        } else if (level3TabId != null && level3TabId != '' && level3TabId != undefined && level3TabId != 'undefined' && level3TabId.lastIndexOf(gridId) > -1) {
            tabindex = (level3TabId.split(",")).lastIndexOf(gridId);
            masterLevelTab = "childTab";
            childLevelTab = "childTab4";
            masterGridId = (level3MasterId.split(","))[tabindex];
            var rowindex = 0;
            if (childGrid2SelectedIndexes.length != 0) {
                rowindex = childGrid2SelectedIndexes[0];
            }
            childTabIndex = $('#childTab3').jqxTabs('val');
            selectedRowData = $('#' + masterGridId).jqxGrid('getrowdata', rowindex);
            currentTab = "childTab3";
            levelCount = 3;
        } else if (level4TabId != null && level4TabId != '' && level4TabId != undefined && level4TabId != 'undefined' && level4TabId.lastIndexOf(gridId) > -1) {
            tabindex = (level4TabId.split(",")).lastIndexOf(gridId);
            masterLevelTab = "childTab3";
            childLevelTab = "";
            masterGridId = (level4MasterId.split(","))[tabindex];
            var rowindex = 0;
            if (childGrid3SelectedIndexes.length != 0) {
                rowindex = childGrid3SelectedIndexes[0];
            }
            childTabIndex = $('#childTab4').jqxTabs('val');
            selectedRowData = $('#' + masterGridId).jqxGrid('getrowdata', rowindex);
            currentTab = "childTab4";
            levelCount = 4;
        } else {
            refreshGrid(gridId);
        }
        jsonData['tabindex'] = tabindex;
        jsonData['masterLevelTab'] = masterLevelTab;
        jsonData['childLevelTab'] = childLevelTab;
        jsonData['masterGridId'] = masterGridId;
        jsonData['childTabIndex'] = childTabIndex;
        jsonData['selectedRowData'] = selectedRowData;
        jsonData['currentTab'] = currentTab;
        jsonData['level'] = levelCount;
        jsonData['level1TabId'] = level1TabId;
        jsonData['level2TabId'] = level1TabId;
        jsonData['level3TabId'] = level1TabId;
        jsonData['level4TabId'] = level4TabId;
        return jsonData;
    } catch (e) {
        refreshGrid(gridId);
    }

}

function insertMasterDetailGridRow(gridId, dataView, viewId) {
    if (masterSelectedRow == null || masterSelectedRow == "") {
        var masterRowObj = $('#' + masterDetailObjMain.master.gridId).jqxGrid('getrowdata', 0);
        masterSelectedRow = [];
        masterSelectedRow.push(masterRowObj);
    }


    if (dataView == "GRID-VIEW")
    {
        $("#" + gridId + "HID").val("INSERT");
        var jsonData = {};
        jsonData = getGridResults(gridId);
        var selectedRowData = jsonData['selectedRowData'];
//        console.log("selectedRowData:::"+JSON.stringify(selectedRowData));
        var sourceex = $("#" + gridId).jqxGrid('source');

        //  var columns = gridColumns[tabId];
        var dataFeilds = [];
        dataFeilds = sourceex._source.datafields;

        var row = {};
        // console.log("dataFeilds::::" + JSON.stringify(dataFeilds));

        for (var key in dataFeilds) {
            var value = dataFeilds[key];
            var columnName = value.name;
            var coltype = value.type;
            var editableFlag = true;
            var columnProp = $("#" + gridId).jqxGrid('getcolumn', columnName);

            if (columnProp != null && columnProp.editable != null) {
                editableFlag = columnProp.editable;
            }



            if (columnName != null && columnName != '' && columnName == 'BKONT')

            {
                row[columnName] = "01";

            } else
            {
                //selectedRowData
                if (!editableFlag) {

                    if (columnName == 'CREATE_BY' || columnName == 'EDIT_BY')
                    {
                        row[columnName] = $("#user").val();
                    } else if (columnName == 'ORGN_ID') {
                        row[columnName] = $("#orgnId").val();
                    } else if (columnName == 'CREATE_DATE'
                            || columnName == 'EXPIRY_DATE'
                            || columnName == 'ACTIVATE_DATE'
                            || columnName == 'EDIT_DATE') {
                        row[columnName] = $.datepicker.formatDate('mm-dd-yy', new Date());
                    } else if (selectedRowData[columnName] != null) {
                        row[columnName] = selectedRowData[columnName];
                    } else if (columnName == 'INSTANCE' || columnName == 'PLANT' ||
                            columnName == 'BUSINESS_UNIT' || columnName == 'MANDT') {
                        if ($("#" + gridId).jqxGrid('getcolumnproperty', columnName, 'hidden'))
                        {
                            row[columnName] = $("#plant").val();
                        } else {
                            row[columnName] = "";
                        }



                    } else if (columnName == 'REGION') {
                        if ($("#" + gridId).jqxGrid('getcolumnproperty', columnName, 'hidden')) {
                            row[columnName] = $("#region").val();
                        } else {
                            row[columnName] = "";
                        }
                    } else if (columnName == 'LOCALE') {
                        if ($("#" + gridId).jqxGrid('getcolumnproperty', columnName, 'hidden'))
                        {
                            row[columnName] = $("#locale").val();
                        } else {
                            row[columnName] = "";
                        }

                    } else
                    {
                        if (coltype == 'bool') {
                            row[columnName] = false;
                        } else
                        {
                            row[columnName] = "";
                        }
                    }

                } else
                {
                    if (coltype == 'bool') {
                        row[columnName] = false;
                    } else
                    {
                        row[columnName] = "";
                    }

                }

                // row['cellclassname'] = "vendorno_style2";
            }
            if (columnName != null && columnName != '' && columnName == viewId + "_HIDDEN") {
                row[columnName] = "INSERT";
            } else if (columnName != null && masterSelectedRow[0][columnName] != null &&
                    $("#" + gridId).jqxGrid('getcolumnproperty', columnName, 'hidden')
                    ) {
                row[columnName] = masterSelectedRow[0][columnName];
            }

        }

//        console.log("row:::" + JSON.stringify(row));
//        var localdata = JSON.stringify(localData).length;
        var data = $("#" + gridId).jqxGrid('getrowdata', 0);
        if (data == null)
        {
            $("#" + gridId).jqxGrid({showfilterrow: false});
//            $("#" + gridId).jqxGrid('clearfilters');
            var index = $("#" + gridId).jqxGrid('getrowboundindex', 1);
            index = index + 1;
//            console.log("index else ::::::" + index);
            $("#" + gridId).jqxGrid('selectrow', index);
        } else {

            // //////alert("no:::");
            $("#" + gridId).jqxGrid({showfilterrow: false});
//            $("#" + gridId).jqxGrid('clearfilters');
            var index = $("#" + gridId).jqxGrid('getrowboundindex', 0);
            //index = index;
//            console.log("index else ::::::" + index);
            $("#" + gridId).jqxGrid('selectrow', index);
        }
//        console.log("localsize:::" + localdata);


        console.log("row:::" + JSON.stringify(row));

        var commit = $("#" + gridId).jqxGrid('addrow', null, row, 0);


        $('#' + viewId + '_Add').css("display", "none");


    }
}


// For Compare old data and new data
function checkingValues(gridId, operationName) {
    var selectedIndexes = [];
    var selectedrowindexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes.length != 0) {
        var oldDataArray = childOldData[gridId];
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
            var dataObject = {};
            var compareCount = 0;
            var data = $('#' + gridId).jqxGrid('getrowdata', i)

            var oldData = oldDataArray[selectedrowindexes[i]];
            if (oldData != null) {
                for (var key in data) {
                    if (key != 'show_detail' && key != 'uid' && key != 'EDIT_DATE' && key != 'CREATE_DATE') {
//                         console.log(key+"data[key]::::"+data[key]+":::::oldData[key]:::"+oldData[key])
                        if (data[key] != oldData[key]) {
                            compareCount++;
                        }
                    }

                }
            }
            if (compareCount != 0) {
                selectedIndexes.push(selectedrowindexes[i]);
            }

        }
    } else
    {


    }
    return selectedIndexes;
}




function isUserAvailable(username) {
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'text',
        cache: false,
        url: "checkUserAvailability",
        data: {
            USER_NAME: $("#USER_NAME").val()
        },
        success: function (response) {

            if (parseInt(response) > 0) {
                $("#dialog").html("User '" + $("#USER_NAME").val() + "' exists, please choose other username");
                $("#dialog").dialog({resizable: false,
                    title: 'Message',
                    modal: true,
                    height: 120,
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).html("");
                            $('#updateUserInfo').attr('disabled', 'disabled');
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
                $('#updateUserInfo').removeAttr('disabled');

            }

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}
function populategridForm(gridId, editable, row) {
    showLoader();
    var role = "";
    if (editable == undefined) {
        editable = "N";
    }
    var editRowData = $("#" + gridId).jqxGrid('getrowdata', row);
    var buttonlabel = editable == "N" ? "Register" : "Update";
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "populateGridForm",
        data: {
            gridId: gridId,
            editFlag: editable,
            dataRow: JSON.stringify($("#" + gridId).jqxGrid('getrowdata', row))
        },
        success: function (response) {
            stopLoader();
            var jsResponse = response.formobj;
            var formTable = "<table id='usertable' class='visionMasterDetailForm'>";
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


//                    fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
//                    tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' src='images/iDXPUI5SearchDropdown.png'"
//                            + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";
                }
                if (jsResponseObj.COL_FORM_VIEW_FLAG == 'N') {
                    //   if (displayType == 'INV') {
                    formTable += "<td style='display:none' >"
                            + (man_ind == "Y" ? "<span style='color:red'>" : "") + jsResponseObj.COL_LABEL + "</span>"
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
                            + (man_ind == "Y" ? "<span style='color:red'>" : "") + jsResponseObj.COL_LABEL + "</span>"
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
                            + (man_ind == "M" ? "<span style='color:red'>" : "") + jsResponseObj.COL_LABEL + "</span>"
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
                    //  alert("renderToolbar:::"+renderToolbar);
                    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');
//                    gridConfigObj.enabletooltips = false;
                    gridConfigObj.cellhover = function (element, pageX, pageY)
                    {
//                        var cellToolTip = $(element).text();
//                        if (cellToolTip != null && cellToolTip != '') {
//                            $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                                showArrow: false, content: cellToolTip});
//                            $(element).parent().jqxTooltip('open', pageX + 5, pageY + 5);
//                        }
                    };
                    $("#" + childGridId).jqxGrid(gridConfigObj);
                    //$("#" + childGridId).jqxGrid('updatebounddata');
                    // alert("currentTabId:::"+currentTabId+"::::"+childGridData.gridOperation);
//           $("#" + childGridId + "Icon").html(childGridData.gridOperation);
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
                    //$('#gridFormDetails').jqxTabs({width: '90%', height: 200, position: 'top'});
                    //$('#gridFormDetails').html("");
                    //$('#gridFormDetails').html($("#childtab").html());
                }
            }
//            var textboxes = $('#usertable').find('input');
//            validateReportTo(textboxes);
            $("#formView").dialog({resizable: false,
                title: 'Form View',
                modal: true,
                height: 520,
                width: 1100,
                minWidth: 1100,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: buttonlabel,
                        id: 'updateUserInfo',
                        click: function () {
                            var jsobject = new Object();
                            var textboxes = $('#usertable').find('input');
                            var listboxes = $('#usertable').find('select');
                            var col, isman, iserror = false, label = false, regexTest, regexErrorMsg;
                            textboxes.each(function () {
                                //col = this.attr('id');
                                col = this.id;
                                isman = $("#" + col).attr('data-man');
                                label = $("#" + col).attr('data-label');
                                regexTest = $("#" + col).attr('data-regex');
                                regexErrorMsg = $("#" + col).attr('data-regexvalue');
                                if (this.value.length == 0 && isman == 'M') {
                                    //do something here
                                    errorMessage("#" + col + "_disp", "Please fill " + label);
                                    iserror = true;
                                } else {
                                    $("#" + col + "_disp").html("");
                                }
                                if (regexTest != null && regexTest != "null" && regexTest != "NA" && regexTest != "" && this.value.length > 0) {
                                    try {
                                        var regex = new RegExp(regexTest);
                                        if (!this.value.match(regex)) {
                                            errorMessage("#" + col + "_disp", regexErrorMsg);
                                            iserror = true;
                                        } else {
                                            $("#" + col + "_disp").html("");
                                        }
                                    } catch (e) {
                                        console.error("Invalid regex pattern: " + regexTest);
                                    }
                                }
                                var role = $("#ROLE_ID").val();
                                if (role.indexOf("REQUESTOR") > -1) {
                                    if ($("#REPORT_TO").val() == '') {
                                        var message = "Please Fill Report To";
                                        message = labelObject[message] != null ? labelObject[message] : message;
                                        $("#REPORT_TO_disp").html(message);
//                                        $("#dialog").html(message);
//                                        $("#dialog").dialog({resizable: false,
//                                            title: 'Message',
//                                            modal: true,
//                                            height: 120,
//                                            minWidth: 300,
//                                            maxWidth: 'auto',
//                                            fluid: true,
//                                            buttons: {
//                                                Ok: function () {
//                                                    $(this).html("");
//                                                    $('#updateUserInfo').attr('disabled', 'disabled');
//                                                    $(this).dialog("close");
//                                                    $(this).dialog("destroy");
//                                                }
//
//                                            },
//                                            open: function () {
//                                                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                                $(".visionHeaderMain").css("z-index", "999");
//                                                $(".visionFooterMain").css("z-index", "999");
//                                            },
//                                            beforeClose: function (event, ui)
//                                            {
//                                                $(".visionHeaderMain").css("z-index", "99999");
//                                                $(".visionFooterMain").css("z-index", "99999");
//                                            }
//                                        });
                                        iserror = true;
                                        //nirmala

                                    }
                                }
                                jsobject[col] = this.value;
                            });
                            listboxes.each(function () {
                                //col = this.attr('id');
                                col = this.id;
                                isman = $("#" + col).attr('data-man');
                                label = $("#" + col).attr('data-label');
//                            if (this.value.length == 0 && isman == 'M') {
//                                //do something here
//                                errorMessage("#" + col + "_disp", "Please fill " + label);
//                                iserror = true;
//                            } else {
//                                $("#" + col + "_disp").html("");
//
//                            }
                                jsobject[col] = this.value;
                            });
                            if (!iserror) {
                                showLoader();
                                console.log('griddata::' + JSON.stringify(jsobject));
                                var url = "createUser";
                                if (editable == 'Y') {
                                    url = "updateUser";
                                }
                                $.ajax({
                                    type: "post",
                                    traditional: true,
                                    dataType: 'json',
                                    cache: false,
                                    url: url,
                                    data: {
                                        griddata: JSON.stringify(jsobject),
                                        rowData: JSON.stringify(editRowData)
                                    },
                                    success: function (response) {
                                        stopLoader();
                                        $("#dialog").text(response.message);
                                        $("#dialog").dialog({resizable: false,
                                            title: 'Message',
                                            modal: true,
                                            height: 120,
                                            minWidth: 350,
                                            maxWidth: 'auto',
                                            fluid: true,
                                            buttons: {
                                                Ok: function () {

//refreshGridData(gridId);
                                                    $(this).html("");
                                                    $(this).dialog("close");
                                                    $(this).dialog("destroy");
                                                    $('#formView').html("");
                                                    $('#formView').dialog("close");
                                                    $('#formView').dialog("destroy");
                                                    $("#" + gridId).jqxGrid('updatebounddata');
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
                                        if (response.status == 1) {

                                        }

                                    },
                                    error: function (e) {
                                        stopLoader();
                                        sessionTimeout(e);
                                    }

                                });
                            }
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

var editRecordRendered = function (element) {
    $(element).parent().jqxTooltip({theme: 'energyblue',
        position: 'bottom-right',
        showArrow: false, content: $(element).text()});
};
var edit_recordRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {

    return "<span onclick=populategridForm('" + $("#mastergridid").val() + "','Y'," + row + ")>"
            + '<img class="visionMasterDetailFormEdit" src="images/change_requests_icon_2.png"/>  '
            + '</span>';
};


function validateReportTo(textboxes)
{
    var col;
    textboxes.each(function () {
        col = this.id;
        if (col != null && col.indexOf("ROLE") > -1)
        {
            var val = this.value;
            console.log("val:::" + val);
        }
    });

}


function processClusterRequest(selectedrowindexes, operationName, gridId) {
//    console.log("selectedrowindexes::::"+selectedrowindexes);
//    console.log("operationName::::"+operationName);
//    console.log("gridId::::"+gridId);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var ValidateCommentColumn = $('#' + gridId + '_massValidateComment').val();
    if (!(ValidateCommentColumn != null && ValidateCommentColumn != '')) {
        ValidateCommentColumn = $('#massValidateComment').val();
    }

    var checkAttachType = $("#" + gridId).attr('checkAttachType');
    var initParamSource = $("#" + gridId).attr('initParamSource');
    var url = "";
    var hiddenOpName = $("#" + gridId + "_HIDDEN").val();
    // alert(hiddenOpName);
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
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        var count = 0;
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
            if (selectedrowindexes[i] != -1) {
                var dataObject = {};
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                if (data != null) {
                    //            var oldDataArray = childOldData[gridId];
                    dataObject['gridId'] = gridId;
                    $("#" + gridId).attr("recordNumber", data.RECORD_NO);
//                if(data.lastIndexOf('DATE'))
//                {
//                    console.log("inside date cond");
//                }
//                var newExpDate = new Date(data.EXPIRY_DATE.getUTCFullYear(), data.EXPIRY_DATE.getUTCMonth(), (data.EXPIRY_DATE.getUTCDate()) + 1);
//                var getFormattedExpDate = convert(newExpDate);
//
//                var newDobDate = new Date(data.DOB.getUTCFullYear(), data.DOB.getUTCMonth(), (data.DOB.getUTCDate()) + 1);
//                var getFormattedDobDate = convert(newDobDate);
//
//                data.EXPIRY_DATE = getFormattedExpDate;
//                data.DOB = getFormattedDobDate;

                    if (data != null && data.hasOwnProperty('EXPIRY_DATE'))
                    {
                        var newExpDate = new Date(data.EXPIRY_DATE.getUTCFullYear(), data.EXPIRY_DATE.getUTCMonth(), (data.EXPIRY_DATE.getUTCDate()) + 1);
                        var getFormattedExpDate = convert(newExpDate);

                        data.EXPIRY_DATE = getFormattedExpDate;

                    }
                    if (data != null && data.hasOwnProperty('DOB'))
                    {
                        var newDobDate = new Date(data.DOB.getUTCFullYear(), data.DOB.getUTCMonth(), (data.DOB.getUTCDate()) + 1);
                        var getFormattedDobDate = convert(newDobDate);
                        data.DOB = getFormattedDobDate;
                    }
                    if (url != null && url != undefined && (url == 'gridUpdateRecords' || url == 'gridDeleteRecords'))
                    {
                        var value = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], ValidateCommentColumn);
                        if (value != null && value != undefined && value == 'Record processed' || value == 'RECORD PROCESSED')
                        {
                            var message = "selected Record(s) are already processed";
                            message = labelObject[message] != null ? labelObject[message] : message;
                            popupMessage(message);
                            return;
                        } else if (value != null && value != undefined && (value == 'OK' || value == 'Record Verified' || value == 'RECORD VERIFIED'))
                        {
                            data[ValidateCommentColumn] = "";
                        }

                    }
                    selectedDataArray.push(data);
                }

            }

        }
    }
    console.log(url + "::::selectedDataArray.length::end:::828:" + JSON.stringify(selectedDataArray));
//console.log("URL:::"+url);
    if (selectedDataArray.length != 0) {
        showLoader();
        $.ajax({
            type: "POST",
            url: url,
            data: {
                gridJsonData: JSON.stringify(selectedDataArray),
                gridId: gridId,
                tableName: $("#" + gridId).attr('data-table'),
                checkAttachType: checkAttachType,
                initParamSource: initParamSource
            },
            traditional: true,
            cache: false,
            success: function (result) {
                stopLoader();
                // ////alert("result::::" + result);
//                            /No records Found
                var response = "";
                if (result != null && result != '' && result.messageFlag == 'true' || result.messageFlag == true) {
                    response = result.message;
                } else
                if (result != null && result != '' && result.lastIndexOf("No records Found") > -1) {
                    response = "Deleted Successfully.";

                    $("#" + gridId).jqxGrid('clearselection');
                    //fgjfdhgjkfh
                } else if (url == "bulkUserUpdate")
                {
                    var jsResArray = JSON.parse(result);
                    var jsresTable = "<div class='visionBulkUserMain'><table class='visionBulkUser'><thead><th class='visionBulkUserHeader'>S.No</th><th class='visionBulkUserHeader'>User Name</th><th class='visionBulkUserHeader'>Message</th></thead><tbody>";
                    for (var i = 0; i < jsResArray.length; i++) {
                        jsresTable = jsresTable + "<tr>"
                                + " <td>" + i + "</td>"
                                + "<td class='visionBulkUserData'>" + jsResArray[i].username + "</td>"
                                + "<td class='visionBulkUserData'>" + jsResArray[i].message + "</td></tr>";
                    }
                    jsresTable = jsresTable + "</tbody></table></div>";
                } else
                {
                    // ////alert("selectedDataArray.length::else::::"+selectedDataArray.length);
                    //var norow = selectedDataArray.length;
                    response = result;
//                    response = selectedDataArray.length + " Row(s) " + result;
                }

                if (url == "bulkUserUpdate") {
                    $("#dialog").html(jsresTable);
                } else {

                    var dialogSplitMessage = dialogSplitIconText(response, "Y");
                    $("#dialog").html(dialogSplitMessage);
                }

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
                                if (url == 'bulkUserUpdate') {
                                    $("#" + gridId).jqxGrid('clearselection');
                                    refreshGridData(gridId, "N");
                                } else if (response != null && response != '' && response.lastIndexOf("Deleted Successfully.") > -1) {
                                    // alert();

                                    $("#" + gridId).jqxGrid('clearselection');
                                    // selectedIndexs.length = 0;
                                    refreshGridData(gridId, "N");
                                    // return true;
                                } else if (response != null && response != '' && response.lastIndexOf("Updated Successfully.") > -1)
                                {
                                    // $("#operationName").val("UPDATE");
                                    //alert("gridId:::"+gridId);
                                    $("#" + gridId).jqxGrid('clearselection');
                                    // MM_MASTER_O_RECORD_BU_LEVEL
                                    //  selectedIndexs.length = 0;
                                    //  $('#' + gridId + '_Add').css("display", "block");
                                    refreshGridData(gridId, "N");
                                    //getGridResults();
                                } else if (result != null && result != '' && (result.lastIndexOf("Please fill all Mandatory values") > -1
                                        || result.lastIndexOf("Please fill the Cataloguer Comment") > -1 || result.lastIndexOf("Please fill") > -1)) {
                                    var selectedArray = selectedDataArray;
                                    console.log("selectedArray" + selectedArray);
                                    var status = $("#" + gridId).attr("status");
                                    var recordNumber = $("#" + gridId).attr("recordNumber");
                                    console.log("sataus" + status);
                                    console.log("Record Number" + recordNumber);
                                    response = "";
                                    var msgTitle = "Please fill comment";
                                    $("#textReason").html("");
                                    ////////////////////alert("after empty");
                                    response += "<div id='textReason'>";
                                    response += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                                    response += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                                    $("#dialog2").html(response);
                                    $("#dialog2").dialog({resizable: false,
                                        title: msgTitle,
                                        modal: true,
                                        height: 'auto',
                                        minWidth: 300,
                                        maxWidth: 'auto',
                                        fluid: true,
                                        buttons: [{
                                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                                click: function () {
                                                    var reasonId = $("#reasonId").val();
                                                    if (reasonId != null && reasonId != "") {
                                                        $.ajax({
                                                            type: "POST",
                                                            url: 'updateCommentHistory',
                                                            data: {
                                                                item: JSON.stringify(selectedArray),
                                                                reason: reasonId,
                                                                recordNumber: recordNumber
                                                            },
                                                            traditional: true,
                                                            cache: false,
                                                            success: function (response) {
                                                                refreshGridData(gridId, "N");
                                                            },
                                                            error: function (e) {
                                                                sessionTimeout(e);
                                                            }
                                                        });
                                                        $(this).html("");
                                                        $(this).dialog("close");
                                                        $(this).dialog("destroy");
                                                    }
                                                }},
                                            {
                                                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                                                click: function () {
                                                    $(this).html("");
                                                    $(this).dialog("close");
                                                    $(this).dialog("destroy");
                                                    // $("#labeld").empty();

                                                }

                                            }], open: function () {
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
                                    refreshGridData(gridId, "N");
                                    // return false;
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
                    }
                });


                // ravi start
                setTimeout(changeflagFuction, 300);
                childChangeflag = false;
                // ravi end
            },
            error: function (e)
            {
                sessionTimeout(e);
            }

        });
    }
}

function updateAttachmentsFile(reqtype, type, tabId, row_id, variableName, tableName)
{

    var record_No;
    var selectedrowindexes = $('#' + attachMasterId).jqxGrid('selectedrowindexes');
    var selectedRowsData = [];
    if (selectedrowindexes.length == 0) {
        selectedRowsData.push($("#" + attachMasterId).jqxGrid('getrowdata', 0));
    } else {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + attachMasterId).jqxGrid('getdatainformation');
        var count = 0;
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
            var data = $("#" + attachMasterId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                selectedRowsData.push(data);
            }

        }
    }
    // var record_No = selectedRowsData[0].RECORD_NO;

    //var attachVarriable=variableName;
    for (var key in selectedRowsData) {
        if (selectedRowsData.hasOwnProperty(key)) {
            val = selectedRowsData[key];
            var aar = Object.keys(val);
            for (var i = 0; i < aar.length; i++) {
                console.log("key value..." + aar[i]);
                if (aar[i] == variableName) {
                    console.log('success...');
                    record_No = val[variableName];
                    // console.log("val23"+val23);

                }
            }
        }
    }


    // var record_No = selectedRowsData[0].variableName;
    var encval = $(".openImage_" + row_id).val();
    var locat_cde = $("#locatcode").val();
    //  $("#somediv").dialog('close');

    if (reqtype == 'delete') {
        var results = "Are you sure want to Delete ?";
        results = (labelObject[results] != null ? labelObject[results] : results);
        var dialogSplitMessage = dialogSplitIconText(results, "Y");
        $("#dialog").html(dialogSplitMessage);
        $("#dialog").dialog({resizable: false,
            resizable: false,
            modal: true,
            title: "Confirmation",
            height: 'auto',
            minHeight: 'auto',
            width: 300,
            fluid: true,
            buttons: {
                "Yes": function () {
                    $(this).dialog('close');
                    if (type == 'pdf')
                    {
                        $("#thedialog").attr('src', "");
                        $("#somediv").dialog('close');
                    } else
                    {
                        $("#imgdialog").attr('src', "");
                        $("#imgdiv").dialog('close');
                    }

                    var reqNumber = $("#REQ_NUMBER").val() == undefined ? "undefined" : $("#REQ_NUMBER").val();
                    $.ajax({
                        type: "get",
                        url: "DeleteAttachFileClstr",
                        cache: false,
                        data: {'sequenceno': row_id,
                            'enc_val': encval,
                            recordNo: record_No,
                            tableName: tableName,
                            variableName: variableName,
                            reqNumber: reqNumber
                        },
                        traditional: true,
                        dataType: 'html',

                        success: function (response) {
                            if (response != 0)
                            {
                                $('#deleteAttachmentId').hide();
                                $('#closeAttachmentId').hide();
                                $("#imagedispid").html("");
                                $('#image_' + row_id).replaceWith("");
                                fetchTableforAttachFile(tabId);
                            }

                        },
                        error: function (e) {
                            sessionTimeout(e);
                        }

                    });

                },
                "No": function () {
                    $(this).dialog('close');
                    $("#thedialog").attr('src', '');

                }
            },
            open: function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                $(this).closest(".ui-dialog").addClass("visionFormImageDelete");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $("#thedialog").attr('src', '');
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });

    } else if (reqtype == 'close') {

        $("#imagedispid").html("");
        $('#deleteAttachmentId').hide();
        $('#closeAttachmentId').hide();

    } else {
        $('#updateBrowse').val('');
        $('#updateBrowse').show();
        $('#addAttachmentId').hide();
    }


}  // end 
// showing pdf in Grid


function showAttachPdf(id, tabId, deleteFlag, variableName, tableName)
{
    $("#pdfMM").html("");
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
    var content = "";
    var deleteIcon = "";
    $('#addAttachmentId').hide();
    if (tabId == 'MM_ATTACHMENTS_OLD')
    {
        content = $('#pdfHiddenIdOld_' + id).val();
        deleteIcon = "";
    } else if (deleteFlag == 'false')
    {
        deleteIcon = "";
    } else
    {
        content = $('#pdfHiddenId_' + id).val();
        deleteIcon = "<img src='images/delete.gif' id='deleteAttachmentId' class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachmentsFile('delete', 'pdf','" + tabId + "','" + id + "','" + variableName + "','" + tableName + "')\" >";
    }
    var pdfContent = "";
    var browserType = "";
    pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='materialPDFContent?id=" + id + "&tabId=MM_ATTACHMENTS&variableName=" + variableName + "&tableName=" + tableName + "' onload='showDeleteButton()'  ></iframe>";
    $("#somediv").dialog({resizable: false,
        modal: true,
        title: '',
        width: 1100,
        height: 500,
        fluid: true,
        close: function () {
        },
        open: function ()
        {
            $(this).closest(".ui-dialog").addClass("visionFormImageView");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $("#pdfMM").html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
    console.log(pdfContent);
    $("#thedialog").show();
    $("#deleteIcon").html(deleteIcon);
    $("#pdfMM").html(pdfContent);

}


function showAttachImage(row_id, tabId, deleteFlag, attachVarriable, attachTable) {
    alert(tabId);
    $('#deleteAttachmentId').hide();
    $('#addAttachmentId').hide();
    $('#thedialog').hide();
    var insertContent = "";
    var imgContent = "";
    if (tabId == "MM_ATTACHMENTS_OLD")
    {
        insertContent = $('#imageOld_' + row_id).attr("src");
        imgContent = "";
    } else if (deleteFlag == 'false')
    {
        insertContent = $('#image_' + row_id).attr("src");
        imgContent = "";
    } else
    {
        insertContent = $('#image_' + row_id).attr("src");
        imgContent = "<img src='images/delete.gif' id='deleteimgAttachmentId'  class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachmentsFile('delete', 'image','" + tabId + "','" + row_id + "','" + attachVarriable + "','" + attachTable + "')\">";
    }

    var maincontent = "";


    $("#imgdialog").attr('src', insertContent);
    $("#imgdiv").dialog({resizable: false,
        modal: true,
        title: '',
        width: 1100,
        height: 500,
        fluid: true,
        close: function () {
            //  $("#imgdialog").attr('src', "about:blank");
        },
        open: function ()
        {
            $(this).closest(".ui-dialog").addClass("visionFormImageView");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $("#imgdialog").attr('src', '');
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });



    $('#hiddenRowId').val(row_id);
    $("#deleteImg").html(imgContent);
    $("#imagedispid").html(maincontent);
}



var fetchattach = false;
function fetchTableforAttachFile(tabId, attachVarriable, attachTableName, tabOldId, dependentAccorId, currntAccorId, wrapInd) {

    var record_No;
    var gridOpId = tabId;

    var currentGridId = gridOpId;
    var selectedrowindexes = $("#" + currentGridId).jqxGrid('selectedrowindexes');
    attachChildId = gridOpId;
    attachMasterId = $("#" + currentGridId).attr('data-master-id');


    var selectedrowindexes = $('#' + attachMasterId).jqxGrid('selectedrowindexes');
    var selectedRowsData = [];

    if (selectedrowindexes.length == 0) {
        selectedRowsData.push($("#" + attachMasterId).jqxGrid('getrowdata', 0));
    } else {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + attachMasterId).jqxGrid('getdatainformation');
        var count = 0;
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
            var data = $("#" + attachMasterId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                selectedRowsData.push(data);
            }

        }
    }
    //var attachVarriable2=attachVarriable;
    for (var key in selectedRowsData) {
        if (selectedRowsData.hasOwnProperty(key)) {
            val = selectedRowsData[key];
            var aar = Object.keys(val);
            for (var i = 0; i < aar.length; i++) {
                console.log("key value..." + aar[i]);
                if (aar[i] == attachVarriable) {
                    console.log('success...');
                    record_No = val[attachVarriable];
                    // console.log("val23"+val23);

                }
            }
        }
    }

    var requestNumber = "";
    var attachTitle = "Attachments";
    var baskettype = "Search_View";

    $.ajax({
        type: "post",
        traditional: true,
        url: "SelectFilesAttachTab",
        data: {attachVarriable: attachVarriable,
            attachTableName: attachTableName,
            'recordNo': record_No,
            'baskettype': baskettype,
            'reqNumber': requestNumber,
            'tabId': tabId
        },
        cache: false,
        async: false,
        dataType: 'html',
        success: function (result) {
            console.log("result........." + result);
            $("#" + tabId).html(result);
            $("#" + tabId).addClass('visionEnclosureTable');


            fetchattach = false;

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
//    }

    console.log("fetchAttachmentsTabData ::: END ");
}


var fetchattach = false;
function fetchTableforAttachDocument(tabId, tabOldId, dependentAccorId, currntAccorId, wrapInd) {
    var gridOpId = tabId;

    var currentGridId = gridOpId;
    var selectedrowindexes = $("#" + currentGridId).jqxGrid('selectedrowindexes');
    attachChildId1 = gridOpId;
    attachMasterId = $("#" + currentGridId).attr('data-master-id');



    var selectedrowindexes = $('#' + attachMasterId).jqxGrid('selectedrowindexes');
    var selectedRowsData = [];
    if (selectedrowindexes.length == 0) {
        selectedRowsData.push($("#" + attachMasterId).jqxGrid('getrowdata', 0));
    } else {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + attachMasterId).jqxGrid('getdatainformation');
        var count = 0;
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
            var data = $("#" + attachMasterId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                selectedRowsData.push(data);
            }

        }
    }
    var spir_Rec_Id = selectedRowsData[0].SPIR_REC_ID;
    var requestNumber = "";
    var attachTitle = "Attachments";
    var baskettype = "Search_View";

    $.ajax({
        type: "post",
        traditional: true,
        url: "SelectDocumentAttachTab?spirRecId=" + spir_Rec_Id + "&baskettype=" + baskettype + "&&reqNumber=" + requestNumber + " &&tabId=" + tabId,
        cache: false,
        async: false,
        dataType: 'html',
        success: function (result) {
            console.log("result........." + result);
            $("#" + tabId).html(result);
            $("#" + tabId).addClass('visionEnclosureTable');


            fetchattach = false;

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
//    }



    console.log("fetchAttachmentsTabData ::: END ");
}


var fetchattach = false;
function fetchTableforAttachDocument(tabId, tabOldId, dependentAccorId, currntAccorId, wrapInd) {
    var gridOpId = tabId;

    var currentGridId = gridOpId;
    var selectedrowindexes = $("#" + currentGridId).jqxGrid('selectedrowindexes');
    attachChildId1 = gridOpId;
    attachMasterId = $("#" + currentGridId).attr('data-master-id');



    var selectedrowindexes = $('#' + attachMasterId).jqxGrid('selectedrowindexes');
    var selectedRowsData = [];
    if (selectedrowindexes.length == 0) {
        selectedRowsData.push($("#" + attachMasterId).jqxGrid('getrowdata', 0));
    } else {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + attachMasterId).jqxGrid('getdatainformation');
        var count = 0;
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
            var data = $("#" + attachMasterId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                selectedRowsData.push(data);
            }

        }
    }
    var spir_Rec_Id = selectedRowsData[0].SPIR_REC_ID;
    var requestNumber = "";
    var attachTitle = "Attachments";
    var baskettype = "Search_View";

    $.ajax({
        type: "post",
        traditional: true,
        url: "SelectDocumentAttachTab?spirRecId=" + spir_Rec_Id + "&baskettype=" + baskettype + "&&reqNumber=" + requestNumber + " &&tabId=" + tabId,
        cache: false,
        async: false,
        dataType: 'html',
        success: function (result) {
            console.log("result........." + result);
            $("#" + tabId).html(result);
            $("#" + tabId).addClass('visionEnclosureTable');


            fetchattach = false;

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
//    }



    console.log("fetchAttachmentsTabData ::: END ");
}

var browseId = "";
function showBrowsAttachFile(param, tabId, attachVarriable, attachTableName)
{
    var record_No;
    var selectedrowindexes = $('#' + attachMasterId).jqxGrid('selectedrowindexes');
    var selectedRowsData = [];
    if (selectedrowindexes.length == 0) {
        selectedRowsData.push($("#" + attachMasterId).jqxGrid('getrowdata', 0));
    } else {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + attachMasterId).jqxGrid('getdatainformation');
        var count = 0;
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
            var data = $("#" + attachMasterId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                selectedRowsData.push(data);
            }

        }
    }
    //  var record_No = selectedRowsData[0].RECORD_NO;

    //for start
    // for start  
    for (var key in selectedRowsData) {
        if (selectedRowsData.hasOwnProperty(key)) {
            val = selectedRowsData[key];
            var aar = Object.keys(val);
            for (var i = 0; i < aar.length; i++) {
                console.log("key value..." + aar[i]);
                if (aar[i] == attachVarriable) {
                    console.log('success...');
                    record_No = val[attachVarriable];
                    // console.log("val23"+val23);

                }
            }
        }
    }

    // for end

    $(".addIcon_" + param).hide();
    if (tabId == "MM_ATTACHMENTS_OLD")
    {
        var listval1 = $('#listOld_' + param).val();
    } else
    {
        var listval1 = $('#list_' + param).val();
    }

    var encvalue = listval1;
    var suppl_code = $('#RECORD_NO').val();

    var request_number = $("#REQ_NUMBER").val();

    var locate_code = $("#locatcode").val();
    var url = 'UploadAttachFilesClstr';
//    var url = 'UploadAttachFilesClstr?recordNo=' + record_No + '&attachType=' + listval1 + '&requestNumber=' + request_number + '&varriableName=' + attachVarriable + '&tableName=' + attachTableName;
    // var url = 'UploadAttachFiles';
    var params = {
        recordNo: record_No,
        attachType: listval1,
        requestNumber: request_number,
        varriableName: attachVarriable,
        tableName: attachTableName
    };
    var csrfToken = $("input[name='_csrf']").val();
    if (csrfToken != null && csrfToken != '') {
        params['_csrf'] = $("input[name='_csrf']").val();
    }
    var attach_val = "Y";
    if (attach_val.trim() == 'Y')
    {
        var id = "#browseTdId_" + param;
        if (tabId == "MM_ATTACHMENTS_OLD")
        {
            browseId = "#browseIdOld_" + param;
        } else
        {
            browseId = "#browseId_" + param;
        }
        $(id).show();

        $(browseId).ajaxfileupload({
            'action': url,
            params: params,
            // data:{
            //     'recordNo':record_No,
            //     'varriableName':varriableName,
            //     'tableName':tableName,
            //    'attachType':listval1,
            //    'requestNumber':request_number
            //  },

            valid_extensions: ['gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff', 'pdf', 'bmp', 'xls', 'xlsx', 'doc', 'docx', 'txt'],
            'onComplete': function (response) {

                $("#wait").css("display", "none");

                var serverResponce = JSON.stringify(response.message);

                $(id).hide();

                if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

                    var baskettype = $("#baskettypehid").val();

                    $("#dialog").html(serverResponce);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 135,
                        fluid: true,
                        buttons: {
                            Ok: function () {
                                $(this).dialog("close");

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

                } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

                    $("#dialog").html(serverResponce);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 135,
                        fluid: true,
                        buttons: {
                            Ok: function () {
                                $(this).dialog("close");
//                                $("#browseTdId_" + param).show();
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

                } else if (serverResponce.lastIndexOf("Please Uplaod Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.

                    $("#dialog").html(serverResponce);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 135,
                        fluid: true,
                        buttons: {
                            Ok: function () {
                                $(this).dialog("close");
//                                $("#browseTdId_" + param).show();
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

                } else
                {


                    fetchTableforAttachFile(attachChildId, attachVarriable, attachTableName);
                }
                $("body").css({"pointer-events": "auto"});
            },
            'onStart': function () {
                $('#wait').show();
                $("body").css({"pointer-events": "none"});
                $("#wait").css("display", "block");

            }
        });


        $(id).on('uploadEnd', function (event) {
            var args = event.args;
            var fileName = args.file;
            var serverResponce = args.response;

            $(id).hide();

            if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

                var baskettype = $("#baskettypehid").val();

                $("#dialog").html(serverResponce);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 135,
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");

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

            } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

                $("#dialog").html(serverResponce);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 135,
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");
//                            $("#browseTdId_" + param).show();
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




            } else if (serverResponce.lastIndexOf("Please Uplaod Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.

                $("#dialog").html(serverResponce);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 135,
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");

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


            } else
            {


                getEnclosureList(encvalue, param);
            }

        });

    } else
    {
//        $("#browseTdId_" + param).hide();

    }
    //browse_
}


var attachChildId;
function fileAttachOperation(gridOpId, operationName) {
    var currentGridId = gridOpId;
    var selectedrowindexes = $("#" + currentGridId).jqxGrid('selectedrowindexes');
    attachChildId = gridOpId;
    attachMasterId = $("#" + currentGridId).attr('data-master-id');
    if (selectedrowindexes.length == 0 && operationName != 'add'
            && operationName != 'gridformAttach') {
        var message = "Please select row(s) to process";
        message = labelObject[message] != null ? labelObject[message] : message;
        $("#dialog").html(message);
        $("#dialog").dialog({resizable: false,
            title: 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
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

    } else if (operationName == 'gridformAttach') {
        console.log("inside gridformAttach|||||||||||.....");

        fetchTableforAttachFile(currentGridId);

    }

}
/*Used for runAnalysis in charts*/
function runAnalysis(gridId) {
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'text',
        cache: false,
        url: "getGridAnalysis",
        data: {
            gridid: gridId
        },
        success: function (response) {
            var baskettype = "";
            var analysisArray = JSON.parse(response);
            $("#analysisForm").remove();
//            var dilogHtml = "<h3>Choose Analysis Type</h3><form id='analysisForm' target='_blank' action='reporTabs' method='POST' style='display:none'>"
//                    + "<input type='hidden' id='reportTabId' name='tabid'/>"
//                    + "<input type='hidden' id='baskettype' name='baskettype'/>"
//                    + "</form><div class='analysisBox'>";

            var dilogHtml = "<h3>Choose Analysis Type</h3><form id='analysisForm' target='_blank' action='reporTabs' method='POST' style='display:none'>"
                    + "<input type='hidden' id='reportTabId' name='tabid'/>"
                    + "<input type='hidden' id='baskettype' name='baskettype'/>"
                    + "</form><div class='analysisBox'>";


            for (var i = 0; i < analysisArray.length; i++)
            {
                if (i == 0) {
                    baskettype = analysisArray[i].baskettype;
                    dilogHtml = dilogHtml + "<input type='radio' name='analysistype' value=" + analysisArray[i].analysisTab + " class='analysisType' checked='true' name='analysistype'><span class='analysisLabel'>" + analysisArray[i].analysisType + "</span>";
                } else {
                    dilogHtml = dilogHtml + "<br/><input type='radio' name='analysistype' value=" + analysisArray[i].analysisTab + " class='analysisType' name='analysistype'><span class='analysisLabel'>" + analysisArray[i].analysisType + "</span>";
                }
            }
            dilogHtml = dilogHtml + "</div>";
            $("#dialog").html(dilogHtml);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Analysis'] != null ? labelObject['Analysis'] : 'Analysis'),
                modal: true,
                height: 230,
                minWidth: 450,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            var analysis = $("input[type='radio'][name='analysistype']:checked").val();
                            $("#reportTabId").val(analysis);
                            $("#reportbaskettype").val(baskettype);
                            $("#analysisForm").submit();
                            $(this).html("");
                            $(this).dialog("close");


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
//            $("input[type='radio'][name='analysistype']").change(function () {
//                var analysis = $("input[type='radio'][name='analysistype']:checked").val();
//                $("#reportTabId").val(analysis);
//                $("#analysisForm").submit();
//            });
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });




}

function chartid(gridId) {
    $("#dialog").html("dialogSplitMessage");

    $("#dialog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 300,
        minHeight: 'auto',
        minWidth: 900,
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

function customizeChart(currentchartid) {
    try {
        //fetch chart filter data

        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'JSON',
            cache: false,
            url: "getChartFilterInfo",
            data: {
                chartid: currentchartid
            },
            success: function (response) {

                console.log(JSON.stringify(response));
                var tableString = "<table id='chartEditTbl' class='visionChartEditCover'> <thead><tr class='header'>";
                tableString = tableString + "<th class='tg-vro8'>${labelobj['Parameter'] != null ? labelobj['Parameter'] : 'Parameter'}</th>";
                tableString = tableString + "<th class='tg-vro8'>${labelobj['Operator'] != null ? labelobj['Operator'] : 'Operator'}</th>";
                tableString = tableString + "<th class='tg-vro8'>${labelobj['Value'] != null ? labelobj['Value'] : 'Value'}</th>";
                tableString = tableString + "</tr><tbody>";
                for (var i = 0; i < response.length; i++)
                {

                    if (response[i].defaultFlag == 'Y') {
                        tableString = tableString
                                + "<tr id='tr" + i + "'>"
                                + "<td id='tdcol" + i + "' data-colname='" + response[i].colname + "'>" + response[i].label + "</td>";
                    } else {
                        tableString = tableString
                                + "<tr id='tr" + i + "' style='display:none;'>"
                                + "<td id='tdcol" + i + "' data-colname='" + response[i].colname + "'>" + response[i].label + "</td>";
                    }
                    tableString = tableString
                            + "<td id='tdoper" + i + "'>" + response[i].operators + "</td>"
                            + "<td id='tdval" + i + "'>"
                            + "<input type='text' id='chart_flt_" + i + "' value='" + response[i].filterVal + "' class='paramtd_normal'/>";
                    //+ "<img src='images/iDXPUI5SearchDropdown.png' class='visionReportsTableImage'>";

                    if (response[i].ddwid != null && response[i].ddwid != 'null') {
                        tableString = tableString
                                + " <img id=\"tbddw" + i + "\" class=\"srch_ddw\" onclick=\"populateDropDown('" + response[i].ddwid + "','chart_flt_" + i + "'," + i + ")\" src=\"images/iDXPUI5SearchDropdown.png\">";
                    }
                    tableString = tableString + "</td>"
                            + "</tr>";
                }

                tableString = tableString + "</tbody></table>";

                $("#dialog1").html("");
                $("#dialog1").append(tableString);
                $("#dialog1").dialog({resizable: false,
                    title: 'Message',
                    modal: true,
                    height: 300,
                    minWidth: 500,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: {
                        Run: function () {


//                                        updateChartDetails(currentchartid);


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
            error: function (e) {
                sessionTimeout(e);
            }

        });



    } catch (e) {

    }

}


var browseId = "";
function showBrowsAttachDocument(param, tabId)
{

    var selectedrowindexes = $('#' + attachMasterId).jqxGrid('selectedrowindexes');
    var selectedRowsData = [];
    if (selectedrowindexes.length == 0) {
        selectedRowsData.push($("#" + attachMasterId).jqxGrid('getrowdata', 0));
    } else {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + attachMasterId).jqxGrid('getdatainformation');
        var count = 0;
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
            var data = $("#" + attachMasterId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                selectedRowsData.push(data);
            }

        }
    }


    if (selectedrowindexes.length == 0) {
        var message = "Please select row(s) to process";
        message = labelObject[message] != null ? labelObject[message] : message;
        $("#dialog").html(message);
        $("#dialog").dialog({resizable: false,
            title: 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
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

    var spir_Rec_Id = selectedRowsData[0].SPIR_REC_ID;

    $(".addIcon_" + param).hide();
    if (tabId == "MM_ATTACHMENTS_OLD")
    {
        var listval1 = $('#listOld_' + param).val();
    } else
    {
        var listval1 = $('#list_' + param).val();
    }

    var encvalue = listval1;
    var suppl_code = $('#RECORD_NO').val();

    var request_number = $("#REQ_NUMBER").val();

    var locate_code = $("#locatcode").val();
    var url = 'UploadAttachDocument';
//    var url = 'UploadAttachDocument?spirRecId=' + spir_Rec_Id + '&attachType=' + listval1 + '&requestNumber=' + request_number;
    var params = {
        spirRecId: spir_Rec_Id,
        attachType: listval1,
        requestNumber: request_number
    };
//    var csrfToken = $("input[name='_csrf']").val();
//    if (csrfToken != null && csrfToken != '') {
//        params['_csrf'] = $("input[name='_csrf']").val();
//    }
    var attach_val = "Y";
    if (attach_val.trim() == 'Y')
    {
        var id = "#browseTdId_" + param;
        if (tabId == "MM_ATTACHMENTS_OLD")
        {
            browseId = "#browseIdOld_" + param;
        } else
        {
            browseId = "#browseId_" + param;
        }
        $(id).show();

        $(browseId).ajaxfileupload({
            'action': url,
            params: params,
            valid_extensions: ['gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff', 'pdf', 'bmp', 'xls', 'xlsx', 'doc', 'docx', 'txt'],
            'onComplete': function (response) {

                $("#wait").css("display", "none");

                var serverResponce = JSON.stringify(response.message);

                $(id).hide();

                if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

                    var baskettype = $("#baskettypehid").val();

                    $("#dialog").html(serverResponce);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 135,
                        fluid: true,
                        buttons: {
                            Ok: function () {
                                $(this).dialog("close");

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

                } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

                    $("#dialog").html(serverResponce);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 135,
                        fluid: true,
                        buttons: {
                            Ok: function () {
                                $(this).dialog("close");
//                                $("#browseTdId_" + param).show();
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

                } else if (serverResponce.lastIndexOf("Please Uplaod Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.

                    $("#dialog").html(serverResponce);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        width: 270,
                        height: 135,
                        fluid: true,
                        buttons: {
                            Ok: function () {
                                $(this).dialog("close");
//                                $("#browseTdId_" + param).show();
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

                } else
                {

                    console.log(attachChildId1);
                    fetchTableforAttachDocument(attachChildId1);
                }
                $("body").css({"pointer-events": "auto"});
            },
            'onStart': function () {
                $('#wait').show();
                $("body").css({"pointer-events": "none"});
                $("#wait").css("display", "block");

            }
        });


        $(id).on('uploadEnd', function (event) {
            var args = event.args;
            var fileName = args.file;
            var serverResponce = args.response;

            $(id).hide();

            if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

                var baskettype = $("#baskettypehid").val();

                $("#dialog").html(serverResponce);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 135,
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");

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

            } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

                $("#dialog").html(serverResponce);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 135,
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");
//                            $("#browseTdId_" + param).show();
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




            } else if (serverResponce.lastIndexOf("Please Uplaod Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.

                $("#dialog").html(serverResponce);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    width: 270,
                    height: 135,
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");

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


            } else
            {


                getEnclosureList(encvalue, param);
            }

        });

    } else
    {
//        $("#browseTdId_" + param).hide();

    }

    //browse_
}


function showAttachPdfTab(id, tabId, deleteFlag)
{
    $("#pdfMM").html("");
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
    var content = "";
    var deleteIcon = "";
    $('#addAttachmentId').hide();
    if (tabId == 'MM_ATTACHMENTS_OLD')
    {
        content = $('#pdfHiddenIdOld_' + id).val();
        deleteIcon = "";
    } else if (deleteFlag == 'false')
    {
        deleteIcon = "";
    } else
    {
        content = $('#pdfHiddenId_' + id).val();
        deleteIcon = "<img src='images/delete.gif' id='deleteAttachmentId' class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachmentsDocument('delete', 'pdf','" + tabId + "','" + id + "')\" >";
    }
    var pdfContent = "";
    var browserType = "";
    pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='materialPDFContent?id=" + id + "&tabId=MM_ATTACHMENTS' onload='showDeleteButton()'  ></iframe>";
    $("#somediv").dialog({resizable: false,
        modal: true,
        title: '',
        width: 1100,
        height: 500,
        fluid: true,
        close: function () {
        },
        open: function ()
        {
            $(this).closest(".ui-dialog").addClass("visionFormImageView");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $("#pdfMM").html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
    console.log(pdfContent);
    $("#thedialog").show();
    $("#deleteIcon").html(deleteIcon);
    $("#pdfMM").html(pdfContent);

}



function showAttachImageTab(row_id, tabId, deleteFlag) {
    alert(tabId);
    $('#deleteAttachmentId').hide();
    $('#addAttachmentId').hide();
    $('#thedialog').hide();
    var insertContent = "";
    var imgContent = "";
    if (tabId == "MM_ATTACHMENTS_OLD")
    {
        insertContent = $('#imageOld_' + row_id).attr("src");
        imgContent = "";
    } else if (deleteFlag == 'false')
    {
        insertContent = $('#image_' + row_id).attr("src");
        imgContent = "";
    } else
    {
        insertContent = $('#image_' + row_id).attr("src");
        imgContent = "<img src='images/delete.gif' id='deleteimgAttachmentId'  class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachmentsDocument('delete', 'image','" + tabId + "','" + row_id + "')\">";
    }

    var maincontent = "";


    $("#imgdialog").attr('src', insertContent);
    $("#imgdiv").dialog({resizable: false,
        modal: true,
        title: '',
        width: 1100,
        height: 500,
        fluid: true,
        close: function () {
            //  $("#imgdialog").attr('src', "about:blank");
        },
        open: function ()
        {
            $(this).closest(".ui-dialog").addClass("visionFormImageView");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $("#imgdialog").attr('src', '');
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });



    $('#hiddenRowId').val(row_id);
    $("#deleteImg").html(imgContent);
    $("#imagedispid").html(maincontent);
}

function updateAttachmentsDocument(reqtype, type, tabId, row_id)
{


    var selectedrowindexes = $('#' + attachMasterId).jqxGrid('selectedrowindexes');
    var selectedRowsData = [];
    if (selectedrowindexes.length == 0) {
        selectedRowsData.push($("#" + attachMasterId).jqxGrid('getrowdata', 0));
    } else {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + attachMasterId).jqxGrid('getdatainformation');
        var count = 0;
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
            var selectedRowData = $("#" + attachMasterId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (selectedRowData != null) {
                selectedRowsData.push(selectedRowData);
            }

        }
    }
    var spir_Rec_Id = selectedRowsData[0].SPIR_REC_ID;
    var encval = $(".openImage_" + row_id).val();
    var locat_cde = $("#locatcode").val();
    //  $("#somediv").dialog('close');

    if (reqtype == 'delete') {
        var results = "Are you sure want to Delete ?";
        results = (labelObject[results] != null ? labelObject[results] : results);
        var dialogSplitMessage = dialogSplitIconText(results, "Y");
        $("#dialog").html(dialogSplitMessage);
        $("#dialog").dialog({resizable: false,
            resizable: false,
            modal: true,
            title: "Confirmation",
            height: 'auto',
            minHeight: 'auto',
            width: 300,
            fluid: true,
            buttons: {
                "Yes": function () {
                    $(this).dialog('close');
                    if (type == 'pdf')
                    {
                        $("#thedialog").attr('src', "");
                        $("#somediv").dialog('close');
                    } else
                    {
                        $("#imgdialog").attr('src', "");
                        $("#imgdiv").dialog('close');
                    }

                    var reqNumber = $("#REQ_NUMBER").val() == undefined ? "undefined" : $("#REQ_NUMBER").val();
                    $.ajax({
                        type: "get",
                        url: "DeleteAttachDocument",
                        cache: false,
                        data: {'sequenceno': row_id,
                            'enc_val': encval,
                            spirRecId: spir_Rec_Id,
                            reqNumber: reqNumber
                        },
                        traditional: true,
                        dataType: 'html',

                        success: function (response) {
                            if (response != 0)
                            {
                                $('#deleteAttachmentId').hide();
                                $('#closeAttachmentId').hide();
                                $("#imagedispid").html("");
                                $('#image_' + row_id).replaceWith("");
                                fetchTableforAttachDocument(tabId);
                            }

                        },
                        error: function (e) {
                            sessionTimeout(e);
                        }

                    });

                },
                "No": function () {
                    $(this).dialog('close');
                    $("#thedialog").attr('src', '');

                }
            },
            open: function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                $(this).closest(".ui-dialog").addClass("visionFormImageDelete");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $("#thedialog").attr('src', '');
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });

    } else if (reqtype == 'close') {

        $("#imagedispid").html("");
        $('#deleteAttachmentId').hide();
        $('#closeAttachmentId').hide();

    } else {
        $('#updateBrowse').val('');
        $('#updateBrowse').show();
        $('#addAttachmentId').hide();
    }


}

function populateClusterBulkFillDownData(selectedGridId) {
    var labelObj = {};
    // labelObject = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    showLoader();
    var currentSelectFillDownData = $("#currentSelectFillDownData").val();
    console.log(selectedGridId + ":::populateFillDownData:::" + currentSelectFillDownData);
    if (currentSelectFillDownData != null && currentSelectFillDownData != '') {
        var currentSelectFillDownDataArray = currentSelectFillDownData.split(":");
        if (currentSelectFillDownDataArray != null && currentSelectFillDownDataArray.length != 0) {
            var gridId = currentSelectFillDownDataArray[0];
            var selectedRowIndex = currentSelectFillDownDataArray[1];
            var selectedColumnName = currentSelectFillDownDataArray[2];
            var selectedColumnIndex = currentSelectFillDownDataArray[3];
            var fillDownColumns = currentSelectFillDownDataArray[4];
            try {
                $('#' + selectedGridId).jqxGrid('endcelledit', selectedRowIndex, selectedColumnName, false);
            } catch (e) {
            }
            if (selectedColumnName != null && selectedColumnName != '' && selectedColumnName.indexOf('_DLOV')) {
                selectedColumnName = selectedColumnName.replace('_DLOV', '');
            }
            var fillDownDependencyColumnsStr = $("#currentSelectFillDownDependencyColumns").val();
            console.log("fillDownColumns:::" + fillDownColumns);
            if (fillDownColumns != null && (fillDownColumns == 'ALL' || fillDownColumns.indexOf(selectedColumnName) > -1)) {
                var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedRowIndex);

                var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
                console.log("selectedRowIndexes:::" + selectedRowIndexes);
                if (selectedRowIndexes != null && selectedRowIndexes.length != 0) {
                    var totalRowIndex = selectedRowIndexes.length;
                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                    var count = 0;
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
                    var selectedRowsData = [];
                    for (var i = count; i < totalRowIndex; i++) {
                        if (selectedRowIndexes[i] != -1) {
                            var rowData = $('#' + gridId).jqxGrid('getrowdata', selectedRowIndexes[i]);

                            if (rowData != null) {
                                selectedRowsData.push(rowData);
                            }
                        }
                    }//for

                }

                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'JSON',
                    cache: false,
                    url: "bulkFillDownData",
                    data: {
                        gridId: selectedGridId,
                        tableName: $("#" + selectedGridId).attr('data-table'),
                        selectedRowData: JSON.stringify(selectedRowData),
                        selectedRowsData: JSON.stringify(selectedRowsData),
                        selectedColumnName: selectedColumnName,
                        fillDownDependencyColumns: fillDownDependencyColumnsStr

                    },
                    success: function (jsonObj) {
                        stopLoader();
                        //var jsonObj = JSON.parse(response);
                        if (jsonObj != null) {
                            var flag = jsonObj.messageFlag;
                            var message = jsonObj.message;
                            $("#dialog").html(message);
                            $("#dialog").dialog({resizable: false,
                                title: (labelObj['Message'] != null ? labelObj['Message'] : "Message"),
                                modal: true,
                                height: 120,
                                minWidth: 300,
                                maxWidth: 'auto',
                                fluid: true,
                                buttons: [{
                                        text: (labelObj['Ok'] != null ? labelObj['Ok'] : "Ok"),
                                        click: function () {
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
                                            if (flag)
                                            {
                                                refreshGridData(selectedGridId, "N");
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
                                }
                            });
                        }



                    }
                });
            } else {

                var message = labelObj['Selected Column Not Applicable For Fill Down Process'] != null ? labelObj['Selected Column Not Applicable For Fill Down Process'] : "Selected Column Not Applicable For Fill Down Process";
                $("#dialog").html(message + ".");
                $("#dialog").dialog({resizable: false,
                    title: (labelObj['Message'] != null ? labelObj['Message'] : "Message"),
                    modal: true,
                    height: 120,
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObj['Ok'] != null ? labelObj['Ok'] : "Ok"),
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
                console.log("Fill Down Columns Not Configure..");
            }


        }
    } else {

        // no cell clicked
        var message = labelObj['Please click on cell which you want to fill down'] != null ? labelObj['Please click on cell which you want to fill down'] : "Please click on cell which you want to fill down";
        $("#dialog").html(message + ".");
        $("#dialog").dialog({resizable: false,
            title: (labelObj['Message'] != null ? labelObj['Message'] : "Message"),
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObj['Ok'] != null ? labelObj['Ok'] : "Ok"),
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

}//populateFillDownData
function populateClusterBulkUndoFillDownData(selectedGridId) {
    var labelObj = {};
    // labelObject = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    showLoader();
    var currentSelectFillDownData = $("#currentSelectFillDownData").val();
    console.log(selectedGridId + ":::populateFillDownData:::" + currentSelectFillDownData);
    if (currentSelectFillDownData != null && currentSelectFillDownData != '') {
        var currentSelectFillDownDataArray = currentSelectFillDownData.split(":");
        if (currentSelectFillDownDataArray != null && currentSelectFillDownDataArray.length != 0) {
            var gridId = currentSelectFillDownDataArray[0];
            var selectedRowIndex = currentSelectFillDownDataArray[1];
            var selectedColumnName = currentSelectFillDownDataArray[2];
            var selectedColumnIndex = currentSelectFillDownDataArray[3];
            var fillDownColumns = currentSelectFillDownDataArray[4];
            try {
                $('#' + selectedGridId).jqxGrid('endcelledit', selectedRowIndex, selectedColumnName, false);
            } catch (e) {
            }
            if (selectedColumnName != null && selectedColumnName != '' && selectedColumnName.indexOf('_DLOV')) {
                selectedColumnName = selectedColumnName.replace('_DLOV', '');
            }
            var fillDownDependencyColumnsStr = $("#currentSelectFillDownDependencyColumns").val();
            console.log("fillDownColumns:::" + fillDownColumns);
            if (fillDownColumns != null && (fillDownColumns == 'ALL' || fillDownColumns.indexOf(selectedColumnName) > -1)) {
                var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedRowIndex);

                var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
                console.log("selectedRowIndexes:::" + selectedRowIndexes);
                if (selectedRowIndexes != null && selectedRowIndexes.length != 0) {
                    var totalRowIndex = selectedRowIndexes.length;
                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                    var count = 0;
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
                    var selectedRowsData = [];
                    for (var i = count; i < totalRowIndex; i++) {
                        if (selectedRowIndexes[i] != -1) {
                            var rowData = $('#' + gridId).jqxGrid('getrowdata', selectedRowIndexes[i]);

                            if (rowData != null) {
                                selectedRowsData.push(rowData);
                            }
                        }
                    }//for

                }

                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'JSON',
                    cache: false,
                    url: "undoBulkFillDownData",
                    data: {
                        gridId: selectedGridId,
                        tableName: $("#" + selectedGridId).attr('data-table'),
                        selectedRowData: JSON.stringify(selectedRowData),
                        selectedRowsData: JSON.stringify(selectedRowsData),
                        selectedColumnName: selectedColumnName,
                        fillDownDependencyColumns: fillDownDependencyColumnsStr

                    },
                    success: function (jsonObj) {
                        stopLoader();
                        //var jsonObj = JSON.parse(response);
                        if (jsonObj != null) {
                            var flag = jsonObj.messageFlag;
                            var message = jsonObj.message;
                            $("#dialog").html(message);
                            $("#dialog").dialog({resizable: false,
                                title: (labelObj['Message'] != null ? labelObj['Message'] : "Message"),
                                modal: true,
                                height: 120,
                                minWidth: 300,
                                maxWidth: 'auto',
                                fluid: true,
                                buttons: [{
                                        text: (labelObj['Ok'] != null ? labelObj['Ok'] : "Ok"),
                                        click: function () {
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
                                            if (flag)
                                            {
                                                refreshGridData(selectedGridId, "N");
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
                                }
                            });
                        }



                    }
                });
            } else {

                var message = labelObj['Selected Column Not Applicable For Fill Down Undo Process'] != null ? labelObj['Selected Column Not Applicable For Fill Down Undo Process'] : "Selected Column Not Applicable For Fill Down Undo Process";
                $("#dialog").html(message + ".");
                $("#dialog").dialog({resizable: false,
                    title: (labelObj['Message'] != null ? labelObj['Message'] : "Message"),
                    modal: true,
                    height: 120,
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObj['Ok'] != null ? labelObj['Ok'] : "Ok"),
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
                console.log("Fill Down Columns Not Configure..");
            }


        }
    } else {

        // no cell clicked
        var message = labelObj['Please click on cell which you want to fill down undo'] != null ? labelObj['Please click on cell which you want to fill down undo'] : "Please click on cell which you want to fill down undo";
        $("#dialog").html(message + ".");
        $("#dialog").dialog({resizable: false,
            title: (labelObj['Message'] != null ? labelObj['Message'] : "Message"),
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObj['Ok'] != null ? labelObj['Ok'] : "Ok"),
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

}//populateFillDownData


function gridOpenDocs(gridId, type)
{
    showLoader();
    var labelObj = {};
    // labelObject = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var paramObj = $("#openDocsInitParam").val();

    console.log("paramObj::::" + paramObj);
    // var className = paramObj['className'];
    // var methodName = paramObj['methodName'];
    var selectedRowsData = [];
    var selectedrowindexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes.length > 0)
    {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        var count = 0;
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
        for (var j = count; j < totalRowIndex; j++)
        {
            var griddata = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[j]);
            if (griddata != null) {
                selectedRowsData.push(griddata);
            }

        }

    }
    //console.log("className::"+className);
    //console.log("methodName::"+methodName);
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "checkOpenDocs",
        data: {
            gridId: gridId,
            paramObj: paramObj,
            jsonData: JSON.stringify(selectedRowsData)
        },
        success: function (jsonObj) {
            stopLoader();
            //var jsonObj = JSON.parse(response);
            var flag = jsonObj.messageFlag;
            var message = jsonObj.Message;
            $("#dialog").html(message);
            $("#dialog").dialog({resizable: false,
                title: (labelObj['Message'] != null ? labelObj['Message'] : "Message"),
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObj['Ok'] != null ? labelObj['Ok'] : "Ok"),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            if (flag)
                            {
                                $("#MM_MATERIAL_PROCUREMENT_DATA").jqxGrid('updatebounddata');
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
                }
            });


        }
    });
}

function validateData(gridId)
{
    try {

        var labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        showLoader();
        var selectedRowsData = [];
        var resultObj = {};
        var index = 0;
        var dataString = "";


        var batchInd = $('#batchIndicator').val();
        var ValidateCommentColumn = $('#' + gridId + '_massValidateComment').val();
        ;
        if (!(ValidateCommentColumn != null && ValidateCommentColumn != '')) {
            ValidateCommentColumn = $('#massValidateComment').val();
        }


        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        if (batchInd != null && batchInd != undefined && batchInd == 'Y')
        {

//        console.log("gfjhfhshfs" + JSON.stringify(data));
            var tableName = $('#tableName').val();
            $.ajax({
                type: "POST",
                url: 'getBatchIdsWithGridParams',
                dataType: 'json',
                data: {
                    gridId: gridId,
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    stopLoader();
                    var checkBoxList = response['checkBoxData'];
                    var body = "<div id = 'selectBatchIdsWithGridParams'></div>";
                    $("#dialog10").html(body);
                    $("#selectBatchIdsWithGridParams").jqxListBox({
                        filterable: true,
                        checkboxes: true,
                        source: checkBoxList,
                        theme: 'energyblue',
                        displayMember: 'text',
                        valueMember: 'value',
                        width: '99%',
                        height: 265

                    });
                    $("#dialog10").dialog({resizable: false,
                        title: (labelObject['Batch IDs'] != null ? labelObject['Batch IDs'] : 'Batch IDs'),
                        modal: true,
                        width: 400,
                        height: 265,
                        fluid: true,
                        buttons: [{
                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                click: function () {
                                    var batchId = $("#selectBatchIdsWithGridParams").val();
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");

                                    //                              else
                                    //   {
                                    if (batchId != null && batchId != '' && batchId != 'undefined' && batchId != 'Currently no batch(s) available')
                                    {
                                        showLoader();

                                        if (selectedrowindexes.length > 0)
                                        {
                                            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);

                                        } else
                                        {
                                            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[index]);

                                        }
//                                    dataString = JSON.stringify(data);
                                        if (data != null)
                                        {
                                            selectedRowsData.push(data);
                                        }
                                        if (selectedRowsData != null && selectedRowsData.length != 0)
                                        {
                                            $("#wait").css("opacity", "0.99");
                                            $("#wait").css("display", "block");
                                            $("body").css("pointer-events", "none");
                                            $.ajax({
                                                type: "post",
                                                url: "massValidateData",
                                                cache: false,
                                                data: {'jsonData': JSON.stringify(selectedRowsData),
                                                    'tableName': tableName,
                                                    'gridId': gridId,
                                                    'batchId': batchId

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
                                                                    $("#" + gridId).jqxGrid('updatebounddata', 'cells');
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
//                                                                    $('#' + gridId).jqxGrid('updatebounddata');
                                                    // $("#" + gridId).jqxGrid('updatebounddata', 'cells');

                                                }
                                            });
                                        }

                                    } else
                                    {
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                    }

                                    // }


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

                    //$("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
                }
            });
        } else {
            if (selectedrowindexes != null && selectedrowindexes.length > 0)
            {
                var totalRowIndex = selectedrowindexes.length;
                var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                var count = 0;
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
                    var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                    var value = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], ValidateCommentColumn);
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
                        if (data != null) {
                            selectedRowsData.push(data);
                        }
                    }
                }
//            for (var i = 0; i < selectedrowindexes.length; i++) {
//                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
//                if (data != null) {
//                    selectedRowsData.push(data);
//                }
//            }
                if (selectedRowsData != null && selectedRowsData.length != 0)
                {
                    $.ajax({
                        type: "post",
                        url: "massValidateData",
                        cache: false,
                        data: {'jsonData': JSON.stringify(selectedRowsData),
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

function masterDataValidate(gridId)
{
//    $("#wait").css("opacity", "0.99");
//    $("#wait").css("display", "block");
//    $("body").css("pointer-events", "none");
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    //  var gridId = $('#gridId').val();
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    validateData(gridId);

    //gridValidationMessage();


}
function processDataDH(gridId)
{
    showLoader();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var selectedRowsData = [];
    var resultObj = {};

    var index = 0;
    var dataString = "";

    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes != null && selectedrowindexes.length > 0)
    {
        var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);

    } else
    {
        var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[index]);

    }
    dataString = JSON.stringify(data);
    console.log("gfjhfhshfs" + JSON.stringify(data));
//    selectedRowsData.push(data);

    var batchInd = $('#batchIndicator').val();
    var tableName = $('#tableName').val();
    if (batchInd != null && batchInd != undefined && batchInd == 'Y')
    {
        if (data != null) {
            selectedRowsData.push(data);
        }
        console.log("iam in if dhProcess validate ");
        if (selectedRowsData != null && selectedRowsData.length != 0)
        {
            $.ajax({
                type: "post",
                url: "getBatchIdsWithGridParams",
                //url: "getBatchId",
                cache: false,
                data: {
                    'gridId': gridId,
                    tableName: tableName

                },
                traditional: true,
                dataType: 'html',
                async: true,
                success: function (response) {
                    stopLoader();

                    // $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                    var result = JSON.parse(response);
                    $("#logoutDailog").html("<div id='selectBatchIdsList'></div><div id = 'errorBatchId' style='color:red;'></div>");
                    var checkBoxList = result['checkBoxData'];
                    $("#selectBatchIdsList").jqxListBox({
                        filterable: true,
                        checkboxes: true,
                        source: checkBoxList,
                        theme: 'energyblue',
                        displayMember: 'text',
                        valueMember: 'value',
                        width: '100%'
                    });
                    $("#logoutDailog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        width: 300,
                        height: 330,
                        fluid: true,
                        buttons: [{
                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                click: function () {

                                    //var batchId = $("#batchId").val();
                                    var batchId = $("#selectBatchIdsList").val();
                                    $("#logoutDailog").dialog('close');
                                    if (batchId != null && batchId != '' && batchId != 'undefined')
                                    {
                                        showLoader();
                                        if (data != null)
                                        {
                                            selectedRowsData.push(data);
                                        }
                                        $.ajax({
                                            type: "post",
                                            url: "autoProcessData",
                                            cache: false,
                                            data: {'jsonData': JSON.stringify(selectedRowsData),
                                                'tableName': tableName,
                                                'gridId': gridId,
                                                batchId: batchId
                                            },
                                            traditional: true,
                                            dataType: 'html',
                                            async: true,
                                            success: function (response) {
                                                stopLoader();

                                                $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                                                $("#logoutDailog").dialog({resizable: false,
                                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                                    modal: true,
                                                    width: 300,
                                                    height: 135,
                                                    fluid: true,
                                                    buttons: [{
                                                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                                            click: function () {
//                                                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
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
//                                                                   
                                            }
                                        });
                                    } else {
                                        $("#errorBatchId").text("Please select a Batch ID.");
                                    }

                                }
                            }],
                        open: function ()
                        {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                            $("#filterselectBatchIdsList input").on("keyup", function (e) {
                                showLoader();
                                var searchString = e.currentTarget.value;

                                $.ajax({
                                    type: "post",
                                    traditional: true,
                                    dataType: 'json',
                                    url: 'getBatchIdsWithGridParams',
                                    cache: false,
                                    data: {
                                        gridId: gridId,
                                        searchString: searchString
                                    },
                                    success: function (response) {
                                        stopLoader();
                                        const batchIdsArray = response['checkBoxData'] || [];
                                        const listBox = $("#selectBatchIdsList");
                                        listBox.jqxListBox('clear');
                                        batchIdsArray.forEach(item => listBox.jqxListBox('addItem', item));

                                    },
                                    error: function (e) {
                                        console.log(e);
                                        sessionTimeout(e);
                                    }
                                });

                            });
                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });

                    //$("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
                }
            });
        }
    } else
    {
        if (selectedrowindexes != null && selectedrowindexes.length > 0)
        {
            var totalRowIndex = selectedrowindexes.length;
            var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
            var count = 0;
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
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                if (data != null) {
                    selectedRowsData.push(data);
                }
            }
            console.log("iam in else dhProcess validate ");
            if (selectedRowsData != null && selectedRowsData.length != 0)
            {
                $.ajax({
                    type: "post",
                    url: "autoProcessData",

                    cache: false,
                    data: {'jsonData': JSON.stringify(selectedRowsData),
                        'tableName': tableName,
                        'gridId': gridId
                    },
                    traditional: true,
                    dataType: 'html',
                    async: true,
                    success: function (response) {
                        stopLoader();
                        $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                        $("#logoutDailog").dialog({resizable: false,
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
//                                                                   
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
}


function saveBulkData(gridId)
{
    try {

        var labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }

        var selectedRowsData = [];
        var resultObj = {};
        var index = 0;
        var dataString = "";
        var panelId = $('#panelId').val();
        var formId = $('#formId').val();
        var tableName = $('#tableName').val();
        //var maasSelect = $('#maasSelect').val();
        var defaultValues = $("#defaultValues").val();


        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        var count = 0;
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
        var batchInd = $('#batchIndicator').val();
        var ValidateCommentColumn = $('#' + gridId + '_massValidateComment').val();
        if (!(ValidateCommentColumn != null && ValidateCommentColumn != '')) {
            ValidateCommentColumn = $('#massValidateComment').val();
        }
        if (batchInd != null && batchInd != undefined && batchInd == 'Y')
        {
            if (selectedrowindexes.length > 0)
            {
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);

            } else
            {
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[index]);

            }
            dataString = JSON.stringify(data);
            console.log("gfjhfhshfs" + JSON.stringify(data));
            if (data != null) {
                selectedRowsData.push(data);
            }

            if (selectedRowsData != null && selectedRowsData.length != 0) {
                showLoader();
                $.ajax({
                    type: "POST",
                    url: 'getBatchIdsWithGridParams',
                    dataType: 'json',
                    data: {
                        gridId: gridId,
                    },
                    traditional: true,
                    cache: false,
                    success: function (response) {
                        stopLoader();
                        var checkBoxList = response['checkBoxData'];
                        var body = "<div id = 'selectBatchIdsWithGridParams'></div>";
                        $("#dialog10").html(body);
                        $("#selectBatchIdsWithGridParams").jqxListBox({
                            filterable: true,
                            checkboxes: true,
                            source: checkBoxList,
                            theme: 'energyblue',
                            displayMember: 'text',
                            valueMember: 'value',
                            width: '99%',
                            height: 265
                        });
                        $("#dialog10").dialog({resizable: false,
                            title: (labelObject['Batch IDs'] != null ? labelObject['Batch IDs'] : 'Batch IDs'),
                            modal: true,
                            width: 400,
                            height: 265,
                            fluid: true,
                            buttons: [{
                                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                    click: function () {
                                        var batchId = $("#selectBatchIdsWithGridParams").val();
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");

                                        if (batchId != null && batchId != '' && batchId != 'undefined' && batchId != 'Currently no batch(s) available')
                                        {
                                            showLoader();

                                            $.ajax({
                                                type: "post",
                                                url: "massSaveRecord",
                                                cache: false,
                                                data: {'jsonData': JSON.stringify(selectedRowsData),
                                                    //'dropVal': maasSelect,
                                                    'defaultValues': defaultValues,
                                                    'formId': formId,
                                                    'tableName': tableName,
                                                    'gridId': gridId,
                                                    'panelId': panelId,
                                                    'batchId': batchId
                                                },
                                                traditional: true,
                                                dataType: 'html',
                                                success: function (response) {
                                                    var result = JSON.parse(response);
                                                    var flag = result.flag;
                                                    stopLoader();
                                                    //  $("#" + gridId).jqxGrid('showcolumn', 'RECORD_NO');
                                                    // var dialogSplitMessage = dialogSplitIconText(result.message, flag);
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
//                                                            $("#" + gridId).jqxGrid('clearfilters');
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
                                        } else
                                        {
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
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

                        //$("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
                    }
                });
            }


        } else {

            if (selectedrowindexes.length > 0)
            {
                for (var i = count; i < totalRowIndex; i++) {
                    var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                    if (data != null) {
                        var value = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], ValidateCommentColumn);
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

                }


                dataString = JSON.stringify(data);
                console.log("gfjhfhshfs" + JSON.stringify(data));
                if (selectedRowsData != null && selectedRowsData.length != 0)
                {
                    $.ajax({
                        type: "post",
                        url: "massSaveRecord",
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
                            //  $("#" + gridId).jqxGrid('showcolumn', 'RECORD_NO');
                            // var dialogSplitMessage = dialogSplitIconText(result.message, flag);
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



function processPPRSearch(gridId)
{
    $("#wait").css("opacity", "0.99");
    $("#wait").css("display", "block");
    $("body").css("pointer-events", "none");
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var selectedRowsData = [];
    var resultObj = {};
    var index = 0;
    var dataString = "";

    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes.length > 0)
    {
        var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);

    } else
    {
        var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[index]);

    }
    dataString = JSON.stringify(data);
    console.log("gfjhfhshfs" + JSON.stringify(data));
    selectedRowsData.push(data);


    var tableName = $('#tableName').val();

    $.ajax({
        type: "post",
        url: "getBatchId",
        cache: false,
        data: {
            'gridId': gridId,
            tableName: tableName

        },
        traditional: true,
        dataType: 'html',
        async: true,
        success: function (response) {
            $("#wait").css("display", "none");
            $("body").css("pointer-events", "auto");
            $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
            $("#logoutDailog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                width: 300,
                height: 135,
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            $("#logoutDailog").dialog('close');
                            var batchId = $("#batchId").val();

                            if (batchId != null && batchId != '' && batchId != 'undefined')
                            {
                                $("#wait").css("opacity", "0.99");
                                $("#wait").css("display", "block");
                                $("body").css("pointer-events", "none");

                                $.ajax({
                                    type: "post",
                                    url: "processPprSearch",
                                    cache: false,
                                    data: {'jsonData': JSON.stringify(selectedRowsData),
                                        'tableName': tableName,
                                        'gridId': gridId,
                                        'batchId': batchId

                                    },
                                    traditional: true,
                                    dataType: 'html',
                                    async: true,
                                    success: function (response) {
                                        $("#wait").css("display", "none");
                                        $("body").css("pointer-events", "auto");
                                        $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                                        $("#logoutDailog").dialog({resizable: false,
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
                                        //  $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
                                    }
                                });

                            } else
                            {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
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

            //$("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
        }
    });




    // }
}

function generateDescription(gridId)
{
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var index = 0;
    var dataString = "";

    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes.length > 0)
    {
        var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);

    } else
    {
        var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[index]);

    }
    // dataString = JSON.stringify(data);
    console.log("gfjhfhshfs" + JSON.stringify(data));
//    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
//    var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);

    $("#wait").css("opacity", "0.99");
    $("#wait").css("display", "block");
    $("body").css("pointer-events", "none");
    $.ajax({
        type: "post",
        url: "getBatchId",
        cache: false,
        data: {
            'gridId': gridId

        },
        traditional: true,
        dataType: 'html',
        async: true,
        success: function (response) {
            $("#wait").css("display", "none");
            $("body").css("pointer-events", "auto");
            $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
            $("#logoutDailog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                width: 300,
                height: 135,
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            var batchId = $("#batchId").val();
                            data['BATCH_NO'] = batchId;
                            $("#logoutDailog").dialog('close');

                            if (batchId != null && batchId != '' && batchId != 'undefined')
                            {
                                $("#wait").css("opacity", "0.99");
                                $("#wait").css("display", "block");
                                $("body").css("pointer-events", "none");
                                $.ajax({
                                    type: "get",
                                    traditional: true,
                                    dataType: 'html',
                                    url: "duplicateCheck",
                                    cache: false,
                                    data: {
                                        basicData: JSON.stringify(data)

                                    },
                                    async: true,
                                    error: function (result) {
                                        return false;
                                        sessionTimeout(result);
                                    },
                                    success: function (result) {
                                        var data = JSON.parse(result);
                                        $("#wait").css("display", "none");
                                        $("body").css("pointer-events", "auto");
                                        $("#logoutDailog").html((labelObject[data['message']] != null ? labelObject[data['message']] : data['message']));
                                        $("#logoutDailog").dialog({resizable: false,
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
                                        //  $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                             
//                                        $("#wait").css("display", "none");
//                                        $("body").css("pointer-events", "auto");
//                                        alert("result::::" + result);
//                                        if ($.trim(result) != null) {
//                                            var duplicateObject = JSON.parse($.trim(result));
//                                            if (duplicateObject != null) {
//                                                if (duplicateObject['messageFlag']) {
//                                                    $("#logoutDailog").dialog('close');
//                                                    var duplicatesArray = duplicateObject['duplicateArray'];
////                                console.log("duplicatesArray:::" + JSON.stringify(duplicatesArray));
//                                                    $("#dupResFormResult").val(JSON.stringify(duplicatesArray));
//                                                    $("#dupResForm").submit();
//
////                               
//
//                                                } else {
//                                                    $("#dialog").empty();
//                                                    var results = duplicateObject['message'];
//                                                    results = labelObject[results] != null ? labelObject[results] : results;
//                                                    var dialogSplitMessage = dialogSplitIconText(results, "Y");
//                                                    $("#dialog").html(dialogSplitMessage).dialog({ resizable: false,
//                                                        title: (labelObject['Duplicate Check'] != null ? labelObject['Duplicate Check'] : 'Duplicate Check'),
//                                                        height: 'auto',
//                                                        minHeight: 'auto',
//                                                        buttons: [{
//                                                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                                                click: function () {
//
//                                                                    $(this).dialog('close');
//                                                                }
//
//                                                            }],
//                                                        autoOpen: true,
//                                                        fluid: true,
//                                                        open: function () {
//                                                             //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                                            $(".visionHeaderMain").css("z-index", "999");
//                                                            $(".visionFooterMain").css("z-index", "999");
//                                                        },
//                                                        beforeClose: function (event, ui)
//                                                        {
//                                                            $(".visionHeaderMain").css("z-index", "99999");
//                                                            $(".visionFooterMain").css("z-index", "99999");
//                                                        }
//
//
//                                                    });
//                                                }
//                                            }
//                                        }

                                    }

                                }
                                );
                            } else
                            {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
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

            //$("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
        }
    });

}



function clearStagingView(gridId)
{
    $("#wait").css("opacity", "0.99");
    $("#wait").css("display", "block");
    $("body").css("pointer-events", "none");
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#wait").css("opacity", "0.99");
    $("#wait").css("display", "block");
    $("body").css("pointer-events", "none");

    $.ajax({
        type: "post",
        url: "getBatchId",
        cache: false,
        data: {
            'gridId': gridId

        },
        traditional: true,
        dataType: 'html',
        async: true,
        success: function (response) {
            $("#wait").css("display", "none");
            $("body").css("pointer-events", "auto");
            $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
            $("#logoutDailog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                width: 300,
                height: 135,
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            var batchId = $("#batchId").val();
                            if (batchId != null && batchId != '' && batchId != 'undefined')
                            {
                                $("#wait").css("opacity", "0.99");
                                $("#wait").css("display", "block");
                                $("body").css("pointer-events", "none");
                                $.ajax({
                                    type: "post",
                                    url: "clearStagingView",
                                    cache: false,
                                    data: {
                                        'batchId': batchId

                                    },
                                    traditional: true,
                                    dataType: 'html',
                                    async: true,
                                    success: function (response) {
                                        $("#wait").css("display", "none");
                                        $("body").css("pointer-events", "auto");
                                        $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                                        $("#logoutDailog").dialog({resizable: false,
                                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                            modal: true,
                                            width: 300,
                                            height: 135,
                                            fluid: true,
                                            buttons: [{
                                                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                                    click: function () {
                                                        // var batchId = $("#batchId").val();

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

                                        //$("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
                                    }
                                });
                            } else
                            {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
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

            //$("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
        }
    });
}


function runQCTool(gridId)
{
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var selectedRowsData = [];
    var resultObj = {};


    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes.length > 0)
    {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        var count = 0;
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
//                var errorMsg = "";
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                var dataString = "";

                dataString = JSON.stringify(data);

                console.log("gfjhfhshfs" + JSON.stringify(data));
                selectedRowsData.push(data);
            }

        }

        var tableName = $('#tableName').val();
        //  var gridId = $('#gridId').val();
        $("#wait").css("opacity", "0.99");
        $("#wait").css("display", "block");
        $("body").css("pointer-events", "none");
        $.ajax({
            type: "post",
            url: "runQCTool",
            cache: false,
            data: {'jsonData': JSON.stringify(selectedRowsData),
                'tableName': tableName,
                'gridId': gridId

            },
            traditional: true,
            dataType: 'html',
            async: false,
            success: function (response) {
                $("#wait").css("display", "none");
                $("body").css("pointer-events", "auto");

                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
            }
        });


    }
}

function populateTaxonomyForm(gridId, editable, row) {
    if (editable === undefined) {
        editable = "N";
    }
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());

    } catch (e) {

    }
    var masterGridId = $("#mastergridid").val();
    var editRowData = $("#" + gridId).jqxGrid('getrowdata', row);
    var selectedmasterrowindexes = $('#' + masterGridId).jqxGrid('selectedrowindexes');
    var masterRowData = $("#" + masterGridId).jqxGrid('getrowdata', selectedmasterrowindexes);
    var buttonlabel = editable === "N" ? "Create" : "Update";
    buttonlabel = labelObject[buttonlabel] != null ? labelObject[buttonlabel] : buttonlabel;
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "populateTaxonomyForm",
        data: {
            gridId: gridId,
        },
        success: function (response) {
            if (response != null && response != 'undefined') {
                var formview = response.formStr;
                var urlFlag = response.urlFlag;
                var formNameLabel = response['formNameLabel'];
                $("#modalDailogDiv").html("");
                $("#modalDailogDiv").html(formview);
            }
            if (formNameLabel != null && formNameLabel != '' && formNameLabel != undefined && formNameLabel != "null") {
                var label = formNameLabel;
            } else {
                label = "Registration Form";
            }
            $("#modalDailogDiv").dialog({resizable: false,
                title: (labelObject[label] != null ? labelObject[label] : label),
                modal: true,
                height: 420,
                width: 1100,
                minWidth: 1100,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: buttonlabel,
                        id: 'updateUserInfo',
                        click: function () {
                            var jsobject = new Object();
                            var property = $("#PROPERTY").val();
                            var propertyTerm = $("#PROPERTY_TERM").val();
                            var propertyAbbr = $("#PROPERTY_ABBR").val();
                            var definitionId = $("#DEFINITION_ID").val();
                            var clsTermId = $("#CLASS_TERM_ID").val();
                            var prpTermId = $("#PROPERTY_TERM_ID").val();
                            var clsConceptId = $("#CLASS_CONCEPT_ID").val();
                            var proConceptId = $("#PROPERTY_CONCEPT_ID").val();
                            var classTerm = $("#CLASS_TERM").val();
                            var classAbbr = $("#CLASS_ABBR").val();
                            var term = $("#TERM").val();
                            var abbreviation = $("#ABBREVIATION").val();
                            var type = $("#COMMENTS").val();
                            var requiredFlag = $("#MAN").val();
                            var requiredFlags = $("#REQUIRED_FLAG").val();
                            var shortSeq = $("#SEQ").val();
                            var shrtSeq = $("#SHORT_SEQ").val();
                            var longSeq = $("#SEQUANCE").val();
                            var lngSeq = $("#LONG_SEQ").val();
                            var message;
                            var abbrevation = $("#ABBREVATION").val();
                            var definition = $("#DEFINITION").val();
                            if (classTerm != null && classTerm != '' && classTerm != undefined) {
                                if (classAbbr == null || classAbbr == "" || classAbbr == 'undefined') {
                                    message = 'Please Enter Abbreviation';
                                    popupMessage(message);
                                    return;
                                    stopLoader();
                                }
                                if (definition == null || definition == "" || definition == 'undefined') {
                                    message = 'Please Enter Definition';
                                    popupMessage(message);
                                    return;
                                    stopLoader();
                                }
                            }
                            if (propertyTerm != null && propertyTerm != '' && propertyTerm != undefined) {
                                if (propertyAbbr == null || propertyAbbr == "" || propertyAbbr == 'undefined') {
                                    message = 'Please Enter Abbrevation';
                                    popupMessage(message);
                                    return;
                                    stopLoader();
                                }
                                if (definition == null || definition == "" || definition == 'undefined') {
                                    message = 'Please Enter Definition';
                                    popupMessage(message);
                                    return;
                                    stopLoader();
                                }
                                if (shrtSeq == null || shrtSeq == "" || shrtSeq == 'undefined') {
                                    message = 'Please Enter Short Sequance';
                                    popupMessage(message);
                                    return;
                                    stopLoader();
                                }
                                if (lngSeq == null || lngSeq == "" || lngSeq == 'undefined') {
                                    message = 'Please Enter Long Sequance';
                                    popupMessage(message);
                                    return;
                                    stopLoader();
                                }
                                if (shrtSeq != lngSeq) {
                                    message = 'Short Sequance and Long Sequance must be same';
                                    popupMessage(message);
                                    return;
                                    stopLoader();
                                }
                            }

                            jsobject['CLASS_TERM'] = classTerm;
                            jsobject['PROPERTY_TERM'] = propertyTerm;
                            jsobject['PROPERTY'] = property;
                            jsobject['TERM'] = term;
                            jsobject['ABBREVIATION'] = abbreviation;
                            jsobject['COMMENTS'] = type;
                            jsobject['MAN'] = requiredFlag;
                            jsobject['REQUIRED_FLAG'] = requiredFlags;
                            jsobject['SEQ'] = shortSeq;
                            jsobject['SHORT_SEQ'] = shrtSeq;
                            jsobject['SEQUANCE'] = longSeq;
                            jsobject['LONG_SEQ'] = lngSeq;
                            jsobject['ABBREVATION'] = abbrevation;
                            jsobject['DEFINITION'] = definition;
                            jsobject['CLASS_ABBR'] = classAbbr;
                            jsobject['PROPERTY_ABBR'] = propertyAbbr;
                            jsobject['DEFINITION_ID'] = definitionId;
                            jsobject['CLASS_TERM_ID'] = clsTermId;
                            jsobject['PROPERTY_TERM_ID'] = prpTermId;
                            jsobject['CLASS_CONCEPT_ID'] = clsConceptId;
                            jsobject['PROPERTY_CONCEPT_ID'] = proConceptId;
                            var url = '';
                            if (urlFlag != null && urlFlag != '' && urlFlag != 'undefined' && urlFlag == 'Y') {
                                url = "getTxmnyDrData";
                            } else {
                                url = "getTxmyFormData";
                            }
                            if (jsobject.CLASS_TERM == undefined && jsobject.CLASS_TERM == '') {
                                $('#' + gridId + '_TABLE_FORM_VIEW input').each(function (index, element) {
                                    const tableId = element.id;
                                    if (tableId !== undefined && tableId !== '') {  // Fixed 'undefined' typo
                                        const eleValue = element.value;
                                        if (eleValue !== '') {
                                            jsobject[tableId] = eleValue;
                                        }
                                    }
                                });
                            }
                            showLoader();
                            $.ajax({
                                type: "post",
                                traditional: true,
                                dataType: 'json',
                                cache: false,
                                url: url,
                                data: {
                                    gridId: gridId,
                                    griddata: JSON.stringify(jsobject),
                                    rowData: JSON.stringify(editRowData),
                                    masterRowData: JSON.stringify(masterRowData),
                                    type: type,
                                    property: property
                                },
                                success: function (response) {
                                    stopLoader();
                                    if (response != null && response != 'undefined') {
                                        var message = response.message;
                                        var gridId = response['gridId'];
                                        popupMessage(message, gridId);
                                        if (gridId != null && gridId != '' && gridId != 'undefined') {
                                            $('#' + gridId).jqxGrid('updatebounddata');
                                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                        }
                                        var type = response['type'];
                                        if (type != "" && type != 'undefined' && type == "Property") {
                                            var propertyTerm = response['property'];
                                            var abbrivation = response['abbrevation'];
                                            var definition = response['definition'];
                                            var conceptId = response['conceptId'];
                                            var arrayRow = {};
                                            arrayRow.PROPERTY = propertyTerm;
                                            arrayRow.ABBREVATION = abbrivation;
                                            arrayRow.DEFINITION = definition;
                                            arrayRow.CONCEPT_ID = conceptId;
                                            var value = $("#" + gridId).jqxGrid('addrow', null, arrayRow, "first");
                                            $("#" + gridId).jqxGrid('selectrow', 0);
                                            console.log('message::::' + message);
                                        }
                                        popupMessage(message);
                                        if (response.messageFlag) {
                                            $('#modalDailogDiv').html("");
                                            $('#modalDailogDiv').dialog("close");
                                            $('#modalDailogDiv').dialog("destroy");
                                        }
                                    }
                                },
                                error: function (e) {
                                    sessionTimeout(e);
                                    stopLoader();
                                }

                            });
                        }
                    }, {
                        text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }],
                open: function () {
                    $(this).closest(".ui-dialog").addClass("CharacteristicsFormDialog");
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
        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}


function taxonomyProcess(gridId) {
    var currentGridId = gridId;
    var selectedrowindexes = $("#" + currentGridId).jqxGrid('selectedrowindexes');
    console.log("selectedrowindexes ::::" + selectedrowindexes);
    var selectedDataArray = [];
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        var count = 0;
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
            if (selectedrowindexes[i] != -1) {
                var dataObject = {};
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);

                if (data != null && data != 'undefined') {
                    dataObject['gridId'] = gridId;
                    selectedDataArray.push(data);
                } else {
                    var message = "Please Select a Row(s) to Process"
                    message = labelObject[message] != null ? labelObject[message] : message;
                    popupMessage(message);
                }
            }
        }
    }

    if (selectedDataArray.length != 0) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            cache: false,
            url: "getTxmyProcessData",
            data: {
                gridId: gridId,
                gridJsonData: JSON.stringify(selectedDataArray)

            },
            success: function (response) {

                if (response != null && response != 'undefined') {
                    console.log('result:::::' + response);
                    $("#dialog").html(response.message);
                    $("#dialog").dialog({resizable: false,
                        title: 'Message',
                        modal: true,
                        height: 120,
                        minWidth: 300,
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
        })
    }
}
function getTxmnyDeleteConfirmMessage(gridId, operationName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var results = "Are you sure you want to Delete this Record?";
    results = (labelObject[results] != null ? labelObject[results] : results);
    var dialogSplitMessage = dialogSplitIconText(results, "Y");
    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({resizable: false,
        modal: true,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        height: 'auto',
        minHeight: 'auto',
        minWidth: 350,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {

                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    var selectedrowindexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
                    if (operationName == 'deleteCls') {
                        processClusterRequest(selectedrowindexes, operationName, gridId);
                    } else {
                        processClusterRequest(selectedrowindexes, "delete", gridId);
                    }
                }},
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    $("#" + gridId).jqxGrid('clearselection');

                }
            }],
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

function processGridOperations(gridId)
{
    $("#wait").css("opacity", "0.99");
    $("#wait").css("display", "block");
    $("body").css("pointer-events", "none");
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedRowsData = [];
    var resultObj = {};
    var panelId = $('#panelId').val();
    var formId = $('#formId').val();
    var tableName = $('#tableName').val();
    var defaultValues = $("#defaultValues").val();
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes.length > 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        var count = 0;
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
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null)
            {
                selectedRowsData.push(data);
            }

        }
        if (selectedRowsData != null && selectedRowsData != "")
        {
            $.ajax({
                type: "post",
                url: "processGridOperations",
                cache: false,
                data: {'jsonData': JSON.stringify(selectedRowsData),
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
                    $("#wait").css("display", "none");
                    $("body").css("pointer-events", "auto");
                    //  $("#" + gridId).jqxGrid('showcolumn', 'RECORD_NO');
//                     var dialogSplitMessage = dialogSplitIconText(result.Message, flag);
                    $("#dialog").html(result.Message);
                    $("#dialog").dialog({resizable: false,
                        title: 'Message',
                        modal: true,
                        height: 200,
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
//                                $("#" + gridId).jqxGrid('clearfilters');
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

                    console.log("success:::::" + response);
                }
            });
        }
    }
}

function taxonomyDridProcess(gridId, processType) {
    var currentGridId = gridId;
    var selectedrowindexes = $("#" + currentGridId).jqxGrid('selectedrowindexes');
    console.log("selectedrowindexes ::::" + selectedrowindexes);
    var selectedDataArray = [];
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        var count = 0;
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
            if (selectedrowindexes[i] != -1) {
                var dataObject = {};
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                if (data != null && data != 'undefined') {
                    dataObject['gridId'] = gridId;
                    selectedDataArray.push(data);
                } else {
                    var message = "Please Select a Row(s) to Process"
                    message = labelObject[message] != null ? labelObject[message] : message;
                    popupMessage(message);
                }
            }
        }
    } else {
        var message = "Please Select a Row(s) to Process"
        message = labelObject[message] != null ? labelObject[message] : message;
        popupMessage(message);
    }

    if (selectedDataArray.length != 0) {
        var url = "";
        showLoader();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            cache: false,
            url: "getTxmyDridProcessData",
            data: {
                gridId: gridId,
                gridJsonData: JSON.stringify(selectedDataArray),
                processType: processType

            },
            success: function (response) {
                stopLoader();
                if (response != null && response != 'undefined') {
                    console.log('result:::::' + response);
                    $("#dialog").html(response.message);
                    $("#dialog").dialog({resizable: false,
                        title: 'Message',
                        modal: true,
                        height: 120,
                        minWidth: 300,
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
            }, error: function (jqXHR, textStatus, errorThrown) {//04-02-2025
                console.log(textStatus)
                stopLoader();
            }
        })
    }
}
function fetchBatchId(href, gridId) {
    if (gridId != null && gridId != '') {
        $.ajax({
            type: "post",
            url: "getBatchId",
            cache: false,
            data: {
                'gridId': gridId

            },
            traditional: true,
            dataType: 'html',
            async: true,
            success: function (response) {
                stopLoader();
                $("#wait").css("display", "none");
                $("body").css("pointer-events", "auto");
                $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                $("#logoutDailog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 300,
                    height: 135,
                    fluid: true,
                    buttons: [{
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                var batchId = $("#batchId").val();
                                if (batchId != null && batchId != '' && batchId != 'undefined')
                                {
                                    var selectedRecordData = {};
                                    selectedRecordData['BATCH_ID'] = batchId;
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");

                                    navigateToIconURL(href, gridId, selectedRecordData);
                                } else
                                {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
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

                //$("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                                                   
            }
        });
    }
}