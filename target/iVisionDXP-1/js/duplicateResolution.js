
function navigateToForm(jsonObj) {
}
var theme = "ui-redmond";
var allowchecked = false;

function populateJqxGridJSON() {
    $('#jqxTabs').jqxTabs({width: '1250', height: '220', position: 'top', theme: theme});


    $.ajax({
        url: "duplicateResolutionData",
        dataType: "json",
        data:
                {
                    recordNo_Text: $("#recordNo").val()
                },
        type: "GET",
        success: function (response) {
            var source =
                    {
                        datatype: "JSON",
                        localdata: response,
                        datafields:
                                [
                                    {name: 'RecordNo1', type: 'string'},
                                    {name: 'Descriptor1', type: 'string'},
                                    {name: 'Status1', type: 'string'},
                                    {name: 'Plant1', type: 'string'},
                                    {name: 'Action1', type: 'string'},
                                    {name: 'MC', type: 'string'},
                                    {name: 'RecordNo2', type: 'string'},
                                    {name: 'Status2', type: 'string'},
                                    {name: 'Plant2', type: 'string'},
                                    {name: 'Action2', type: 'string'}
                                ]
                    }
            ;
            var dataAdapter = new $.jqx.dataAdapter(source);
            console.log('screen width:' + screen.width);


            $("#searchResults").jqxGrid(
                    {
                        width: '1250',
                        source: dataAdapter,
                        autoshowfiltericon: true,
                        theme: theme,
                        columnsresize: true,
                        pageable: true,
                        pagesize: 7,
                        height: screen.height - 494,
                        verticalscrollbarstep: 100,
                        sortable: true,
                        showfilterrow: true,
                        filterable: true,
                        showtoolbar: false,
                        selectionmode: 'checkbox',
                        columns: [
                            {text: 'Record Number1', datafield: 'RecordNo1', cellsalign: 'left', width: 120, filterable: false, align: 'center'},
                            {text: 'Descriptor1', datafield: 'Descriptor1', cellsalign: 'left', width: 230, filterable: false, align: 'center'},
                            {text: 'Material Status1', datafield: 'Status1', cellsalign: 'left', width: 140, filterable: false, align: 'center'},
                            {text: 'Plant1', datafield: 'Plant1', cellsalign: 'left', width: 49, filterable: false, align: 'center'},
                            {text: 'Action1', datafield: 'Action1', cellsalign: 'left', width: 120, filterable: false, align: 'center', cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {//overflow-y:scroll;height:100%;
                                    return "<div class='ui-select'><select id='action1" + row + "' onchange='toggle_m_Action1(" + row + " )'><option selected= 'selected'><-No Action-></option><option >MASTER</option><option >SUPERCEDE</option></select></div>";
                                }
                            },
                            {text: 'Match Criteria', datafield: 'MC', cellsalign: 'left', cellclassname: 'mctext', width: 120, filterable: false, align: 'center',

//                        , cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {//overflow-y:scroll;height:100%;
//
//                                    var options = value.split(",");
//                                    var select = "<div class='ui-select'><select>";
//
//                                    for (var i = 0; i < options.length; i++) {
//                                        var selected = "";
//                                        if (i == 0) {
//                                            selected = "selected= 'selected' ";
//
//                                        }
//                                        select = select + "<option " + selected + ">" + options[i] + "</option>";
//
//                                    }
//                                    select = select + "</select></div>";
//                                    return select;
//                                }
                            },
                            {text: 'Record Number2', datafield: 'RecordNo2', cellsalign: 'left', width: 120, align: 'center'},
                            {text: 'Material Status2', datafield: 'Status2', cellsalign: 'left', width: 140, filtertype: 'checkedlist', align: 'center'},
                            {text: 'Plant2', datafield: 'Plant2', cellsalign: 'left', width: 49, filtertype: 'checkedlist', align: 'center'},
                            {text: 'Action2', datafield: 'Action2', cellsalign: 'left', width: 120, filterable: false, align: 'center', filtertype: 'checkedlist', cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {//overflow-y:scroll;height:100%;
                                    return "<div class='ui-select'><select id='action2" + row + "' onchange='toggle_m_Action2(" + row + ")'><option selected= 'selected'><-No Action-></option><option>MASTER</option><option>SUPERCEDE</option></select></div>";

                                }
                            }
                        ]


                    });
            $("#searchResults").bind('rowclick', function (event) {
                var rowindex = event.args.rowindex;
                doTabs(rowindex);
            });

            $("#pagersearchResults > div ").append('<div style="float: left;margin-top:-5px;"><table> <tr> '
                    //+'<td><div id="actionList"></div></td> '
                    + '<td><input type="button" style="height:23px;" value="Perform Action" style="float:left;" onclick="performAction();"></td> </tr> </table></div>');
//            var m_actionList = [
//               
//                "Supercede Record 1",
//                "Delete Record 1",
//                "Supercede Selected Duplicate",
//                "Delete Selected Duplicate"
//            ];
//
//            $('#actionList').jqxDropDownList({source: m_actionList, width: '270px', height: '23px', theme: theme,placeHolder: "Choose Action : "});

        },
        error: function (e)
        {
            sessionTimeout(e);
        }
    });

}


function performAction() {
//    var item = $("#actionList").jqxDropDownList('getSelectedItem');
    var rowindexes = $('#searchResults').jqxGrid('selectedrowindexes');
    var matArray = [];
    for (var i = 0; i < rowindexes.length; i++)
    {
        matArray.push($('#searchResults').jqxGrid('getrowdata', rowindexes[i]));
    }
    ;
    console.log(matArray);

    if (i > 0) {

        $.ajax({
            url: 'duplicateResolutionPerformAction', data: {matArray: JSON.stringify(matArray)}, type: 'POST', success: function (response) {
                alert(response);
            }, error: function (response) {
                sessionTimeout(response);
            }
        });

    } else {

//        alert("");
        var results = "Select rows on which action has to be performed";
        var dialogSplitMessage = dialogSplitIconText(results, "Y");
        $("#dialog").html(dialogSplitMessage);
        $("#dialog").dialog({ resizable: false,
            title: 'Message',
            modal: true,
            width: 300,
            height: 'auto',
            minHeight: 'auto',
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
                }
            },
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





    }



}
;

$(document).ready(function () {
    $(document).ajaxStart(function () {
        $("#wait").css("display", "block");
    });
    $(document).ajaxComplete(function () {
        $("#wait").css("display", "none");
    });

    populateJqxGridJSON();

});

function doTabs(rowindex) {
    var value = $("#jqxTabs").jqxTabs('val');

    if (!value || value == 0) {
        showCharacteristicsGrid(rowindex);

    } else if (value == 1) {
        showReferenceGrid(rowindex);


    } else if (value == 2) {
        showDocumentGrid(rowindex);

    } else if (value == 3) {
        showTextGrid(rowindex);

    }
}

function showReferenceGrid(rowindex) {
    var datarow = $("#searchResults").jqxGrid('getrowdata', rowindex);
    $.ajax({
        url: "compareReferenceData",
        data: datarow,
        success: function (response) {
            var objectData = JSON.parse(response);
            var source1 =
                    {
                        localdata: objectData.recordNo1,
                        datatype: "JSON",
                        datafields:
                                [
                                    {name: 'REFERENCE_NO', type: 'string'},
                                    {name: 'REFERENCE_TYPE', type: 'string'},
                                    {name: 'VENDOR_NAME', type: 'string'},
                                    {name: 'STXT_FLAG', type: 'string'},
                                    {name: 'LTXT_FLAG', type: 'string'}
//                                    {name: 'AUDIT_ID', type: 'string'}
                                ]
                    };
            var dataAdapter1 = new $.jqx.dataAdapter(source1);
            $("#reference1Grid").jqxGrid(
                    {
                        width: '617',
                        source: dataAdapter1,
                        autoshowfiltericon: true,
                        theme: theme,
                        columnsresize: true,
                        height: screen.height - 600,
                        verticalscrollbarstep: 100,
                        sortable: true,
                        showtoolbar: false,
                        editable: true,
                        columns: [
                            {text: 'Reference No', datafield: 'REFERENCE_NO', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Reference Type', datafield: 'REFERENCE_TYPE', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Vendor Name', datafield: 'VENDOR_NAME', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Stxt Flag', datafield: 'STXT_FLAG', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Ltxt Flag', datafield: 'LTXT_FLAG', cellsalign: 'left', align: 'center', width: 100}
                        ]
                    });

            var source2 =
                    {
                        localdata: objectData.recordNo2,
                        datatype: "JSON",
                        datafields:
                                [
                                    {name: 'REFERENCE_NO', type: 'string'},
                                    {name: 'REFERENCE_TYPE', type: 'string'},
                                    {name: 'VENDOR_NAME', type: 'string'},
                                    {name: 'STXT_FLAG', type: 'string'},
                                    {name: 'LTXT_FLAG', type: 'string'}
                                ]
                    }
            ;
            var dataAdapter2 = new $.jqx.dataAdapter(source2);
            $("#reference2Grid").jqxGrid(
                    {
                        width: '617',
                        source: dataAdapter2,
                        autoshowfiltericon: true,
                        theme: theme,
                        columnsresize: true,
                        height: screen.height - 600,
                        verticalscrollbarstep: 100,
                        sortable: true,
                        showtoolbar: false,
                        columns: [
                            {text: 'Reference No', datafield: 'REFERENCE_NO', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Reference Type', datafield: 'REFERENCE_TYPE', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Vendor Name', datafield: 'VENDOR_NAME', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Stxt Flag', datafield: 'STXT_FLAG', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Ltxt Flag', datafield: 'LTXT_FLAG', cellsalign: 'left', align: 'center', width: 100}
                        ]
                    });

        },
        error: function (e)
        {
            sessionTimeout(e);
        }

    });
}

function openReferenceGrid() {
    var rowindex = selectedIndex();
    showReferenceGrid(rowindex);
}

function showDocumentGrid(rowindex) {
    var datarow = $("#searchResults").jqxGrid('getrowdata', rowindex);
    $.ajax({
        url: "compareDocumentData",
        data: datarow,
        success: function (response) {
            var objectData = JSON.parse(response);
            var source1 =
                    {
                        localdata: objectData.recordNo1,
                        datatype: "JSON",
                        datafields:
                                [
                                    {name: 'DOCUMENT_NO', type: 'string'},
                                    {name: 'DOCUMENT_TYPE', type: 'string'},
                                    {name: 'REVISION', type: 'string'},
                                    {name: 'DOCUMENT_ITEM', type: 'string'},
                                    {name: 'ITEM_POSITION', type: 'string'},
                                    {name: 'DOC_VENDOR_NAME', type: 'string'},
                                    {name: 'STXT_FLAG', type: 'string'},
                                    {name: 'LTXT_FLAG', type: 'string'}
                                ]
                    };
            var dataAdapter1 = new $.jqx.dataAdapter(source1);
            $("#document1Grid").jqxGrid(
                    {
                        width: '617',
                        source: dataAdapter1,
                        autoshowfiltericon: true,
                        theme: theme,
                        columnsresize: true,
                        height: screen.height - 600,
                        verticalscrollbarstep: 100,
                        sortable: true,
                        showtoolbar: false,
                        columns: [
                            {text: 'Document No', datafield: 'DOCUMENT_NO', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Document Type', datafield: 'DOCUMENT_TYPE', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Revision', datafield: 'REVISION', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Document Item', datafield: 'DOCUMENT_ITEM', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Item Position', datafield: 'ITEM_POSITION', cellsalign: 'left', align: 'center', width: 100},
                            {text: 'Doc Vendor Name', datafield: 'DOC_VENDOR_NAME', cellsalign: 'left', align: 'center', width: 100},
                            {text: 'Stxt Flag', datafield: 'STXT_FLAG', cellsalign: 'left', align: 'center', width: 100},
                            {text: 'Ltxt Flag', datafield: 'LTXT_FLAG', cellsalign: 'left', align: 'center', width: 100}
                        ]
                    });

            var source2 =
                    {
                        localdata: objectData.recordNo2,
                        datatype: "JSON",
                        datafields:
                                [
                                    {name: 'DOCUMENT_NO', type: 'string'},
                                    {name: 'DOCUMENT_TYPE', type: 'string'},
                                    {name: 'REVISION', type: 'string'},
                                    {name: 'DOCUMENT_ITEM', type: 'string'},
                                    {name: 'ITEM_POSITION', type: 'string'},
                                    {name: 'DOC_VENDOR_NAME', type: 'string'},
                                    {name: 'STXT_FLAG', type: 'string'},
                                    {name: 'LTXT_FLAG', type: 'string'}
                                ]
                    }
            ;
            var dataAdapter2 = new $.jqx.dataAdapter(source2);
            $("#document2Grid").jqxGrid(
                    {
                        width: '617',
                        source: dataAdapter2,
                        autoshowfiltericon: true,
                        theme: theme,
                        columnsresize: true,
                        height: screen.height - 600,
                        verticalscrollbarstep: 100,
                        sortable: true,
                        showtoolbar: false,
                        columns: [
                            {text: 'Document No', datafield: 'DOCUMENT_NO', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Document Type', datafield: 'DOCUMENT_TYPE', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Revision', datafield: 'REVISION', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Document Item', datafield: 'DOCUMENT_ITEM', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Item Position', datafield: 'ITEM_POSITION', cellsalign: 'left', align: 'center', width: 100},
                            {text: 'Doc Vendor Name', datafield: 'DOC_VENDOR_NAME', cellsalign: 'left', align: 'center', width: 100},
                            {text: 'Stxt Flag', datafield: 'STXT_FLAG', cellsalign: 'left', align: 'center', width: 100},
                            {text: 'Ltxt Flag', datafield: 'LTXT_FLAG', cellsalign: 'left', align: 'center', width: 100}
                        ]
                    });

        },
        error: function (e)
        {
            sessionTimeout(e);
        }

    });
}

function openDocumentGrid() {
    var rowindex = selectedIndex();
    showDocumentGrid(rowindex);
}

function showCharacteristicsGrid(rowindex) {
    var datarow = $("#searchResults").jqxGrid('getrowdata', rowindex);
    $.ajax({
        url: "compareCharacteristicsData",
        data: datarow,
        success: function (response) {
            var objectData = JSON.parse(response);
            var source1 =
                    {
                        localdata: objectData.recordNo1,
                        datatype: "JSON",
                        datafields:
                                [
                                    {name: 'PROPERTY_NAME', type: 'string'},
                                    {name: 'PROPERTY_VALUE1', type: 'string'},
                                    {name: 'PROPERTY_UOM', type: 'string'}
                                ]
                    };
            var dataAdapter1 = new $.jqx.dataAdapter(source1);
            $("#characteristics1Grid").jqxGrid(
                    {
                        width: '617',
                        source: dataAdapter1,
                        autoshowfiltericon: true,
                        theme: theme,
                        columnsresize: true,
                        height: screen.height - 600,
                        verticalscrollbarstep: 100,
                        sortable: true,
                        showtoolbar: false,
                        columns: [
                            {text: 'Property Name', datafield: 'PROPERTY_NAME', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Property Value', datafield: 'PROPERTY_VALUE1', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Property UOM', datafield: 'PROPERTY_UOM', cellsalign: 'left', align: 'center', width: 150}
                        ]
                    });

            var source2 =
                    {
                        localdata: objectData.recordNo2,
                        datatype: "JSON",
                        datafields:
                                [
                                    {name: 'PROPERTY_NAME', type: 'string'},
                                    {name: 'PROPERTY_VALUE1', type: 'string'},
                                    {name: 'PROPERTY_UOM', type: 'string'}
                                ]
                    }
            ;
            var dataAdapter2 = new $.jqx.dataAdapter(source2);
            $("#characteristics2Grid").jqxGrid(
                    {
                        width: '617',
                        source: dataAdapter2,
                        autoshowfiltericon: true,
                        theme: theme,
                        columnsresize: true,
                        height: screen.height - 600,
                        verticalscrollbarstep: 100,
                        sortable: true,
                        showtoolbar: false,
                        columns: [
                            {text: 'Property Name', datafield: 'PROPERTY_NAME', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Property Value', datafield: 'PROPERTY_VALUE1', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Property UOM', datafield: 'PROPERTY_UOM', cellsalign: 'left', align: 'center', width: 150}
                        ]
                    });

        },
        error: function (e)
        {
            sessionTimeout(e);
        }

    });
}


function openCharacteristicsGrid() {
    var rowindex = selectedIndex();
    showCharacteristicsGrid(rowindex);

}
function showTextGrid(rowindex) {
    var datarow = $("#searchResults").jqxGrid('getrowdata', rowindex);
    $.ajax({
        url: "compareTextData",
        data: datarow,
        success: function (response) {
            var objectData = JSON.parse(response);
            var source1 =
                    {
                        localdata: objectData.recordNo1,
                        datatype: "JSON",
                        datafields:
                                [
                                    {name: 'LOCALE', type: 'string'},
                                    {name: 'TYPE', type: 'string'},
                                    {name: 'TEXT', type: 'string'}
                                ]
                    };
            var dataAdapter1 = new $.jqx.dataAdapter(source1);
            $("#text1Grid").jqxGrid(
                    {
                        width: '617',
                        source: dataAdapter1,
                        autoshowfiltericon: true,
                        theme: theme,
                        rowsheight: 34,
                        columnsresize: true,
                        height: screen.height - 600,
                        verticalscrollbarstep: 100,
                        sortable: true,
                        showtoolbar: false,
                        columns: [
                            {text: 'Locale', datafield: 'LOCALE', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Type', datafield: 'TYPE', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Text', datafield: 'TEXT', cellsalign: 'left', align: 'center', width: 450, cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {//overflow-y:scroll;height:100%;
                                    //return "";
                                    return "<textarea style='background-color:inherit;border:none;width:100%;overflow-y:scroll;'>" + value + "</textarea>";
                                }
                            }
                        ]
                    });

            var source2 =
                    {
                        localdata: objectData.recordNo2,
                        datatype: "JSON",
                        datafields:
                                [
                                    {name: 'LOCALE', type: 'string'},
                                    {name: 'TYPE', type: 'string'},
                                    {name: 'TEXT', type: 'string'}
                                ]
                    }
            ;
            var dataAdapter2 = new $.jqx.dataAdapter(source2);
            $("#text2Grid").jqxGrid(
                    {
                        width: '617',
                        source: dataAdapter2,
                        autoshowfiltericon: true,
                        theme: theme,
                        columnsresize: true,
                        height: screen.height - 600,
                        rowsheight: 34,
                        verticalscrollbarstep: 100,
                        sortable: true,
                        showtoolbar: false,
                        columns: [
                            {text: 'Locale', datafield: 'LOCALE', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Type', datafield: 'TYPE', cellsalign: 'left', align: 'center', width: 150},
                            {text: 'Text', datafield: 'TEXT', cellsalign: 'left', align: 'center', width: 450, cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {//overflow-y:scroll;height:100%;
                                    //return "";
                                    return "<textarea style='background-color:inherit;border:none;width:100%;overflow-y:scroll;'>" + value + "</textarea>";
                                }
                            }
                        ]
                    });

        },
        error: function (e)
        {
            sessionTimeout(e);
        }

    });
}


function openTextGrid() {
    var rowindex = selectedIndex();
    showTextGrid(rowindex);

}


function selectedIndex() {
    var rowindex = $('#searchResults').jqxGrid('getselectedrowindex');
    if (!rowindex) {
        rowindex = 0;
    }
}

function toggle_m_Action1(row) {
    var index = $("#action1" + row)[0].selectedIndex;
//    alert(value2);

    switch (index) {
        case 1:
            $("#action2" + row).prop('selectedIndex', 2);
            break;
        case 2:
            $("#action2" + row).prop('selectedIndex', 1);
            break;
        default :
            break;
    }

}

function toggle_m_Action2(row) {
    var index = $("#action2" + row)[0].selectedIndex;
//    alert(value2);

    switch (index) {
        case 1:
            $("#action1" + row).prop('selectedIndex', 2);
            break;
        case 2:
            $("#action1" + row).prop('selectedIndex', 1);
            break;
        default :
            break;
    }

}









