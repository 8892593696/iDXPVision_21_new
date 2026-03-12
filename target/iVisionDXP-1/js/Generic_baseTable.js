/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var griDataObj = {};
var dataArray = [];
var selectedIndexs = [];
var cellValue = [];
var oldValue = [];
var finaloldValue = [];

function gridSearchItems() {
    var js_searchObj = "";
    var js_searchArray = [];
//slideMaterialSettings();
////////alert('$("#settings_panel").css("display")""'+$("#settings_panel").css('display'));
    var gridId = $("#gridId").val();
//////alert("gridId:gridSearchItems::"+gridId);

    if ($("#settings_panel").css('display') == 'block')
    {
        slideMaterialSettings();
    }


    $('#search_content_detail tr').each(function () {

        if ($(this).attr('data-type') == 'checkbox')
        {
            if ($("#" + $(this).attr('data-name')).is(":checked"))
            {
                js_searchObj = new Object();
                js_searchObj.CNAME = $(this).attr('data-name');
                js_searchObj.DATATYPE = "STRING";
                js_searchObj.SEARCH_TYPE = $(this).find("select").val();
                js_searchObj.VALUE = 'Y';    // it is checked
                js_searchArray.push(js_searchObj);
            }

        } else if ($(this).attr('data-type') == 'listbox') {

            js_searchObj = new Object();
            js_searchObj.CNAME = $(this).attr('data-name');
            js_searchObj.DATATYPE = "STRING";
            js_searchObj.SEARCH_TYPE = $(this).find("select").val();
            js_searchObj.VALUE = $(this).children('td').eq(2).find("select").val();
//            js_searchObj.VALUE ='Y';

            js_searchArray.push(js_searchObj);
        } else if ($(this).attr('data-type') == 'date') {

            //  //////alert("Range text::"+$('#range'+ $(this).attr('data-name')).val());

////////alert("DATE::normal/range:::" + $("#range" + $(this).attr('data-name')).val());

            if ($('#range' + $(this).attr('data-name')).val() == 'Range'
                    &&
                    $.trim($("#" + $(this).attr('data-name')).val()) != "")
            {
                js_searchObj = new Object();
                js_searchObj.CNAME = $(this).attr('data-name');
                js_searchObj.DATATYPE = "DATE";
                js_searchObj.SEARCH_TYPE = $(this).find("select").val();
                js_searchObj.VALUE = $("#" + $(this).attr('data-name')).val();
                js_searchArray.push(js_searchObj);

            } else {
                if ($.trim($("#min" + $(this).attr('data-name')).val()) != ""
                        &&
                        $.trim($("#max" + $(this).attr('data-name')).val()) != ""
                        ) {
                    js_searchObj = new Object();
                    js_searchObj.CNAME = $(this).attr('data-name');
                    js_searchObj.DATATYPE = "DATE";
                    js_searchObj.SEARCH_TYPE = $(this).find("select").val();
                    js_searchObj.MINVALUE = $("#min" + $(this).attr('data-name')).val();
                    js_searchObj.MAXVALUE = $("#max" + $(this).attr('data-name')).val();
                    js_searchArray.push(js_searchObj);
                }
            }
        } else {

/////////alert('data-name:ee:'+$(this).attr('data-name'));
            // //////alert($("#" + $(this).attr('data-name')).val() + ':data-name:ee:' + $(this).attr('data-name'));

            if ($.trim($("#" + $(this).attr('data-name')).val()) != "" || ($("#min" + $(this).attr('data-name')).val() != "" && $("#max" + $(this).attr('data-name')).val() != "")) {
                ////////alert(" data-name::iff:" + $(this).attr('data-name'));

                if ($("#range" + $(this).attr('data-name')).length) {

                    if ($("#range" + $(this).attr('data-name')).val() == "Normal"
                            && $("#min" + $(this).attr('data-name')).val() != "" && $("#max" + $(this).attr('data-name')).val() != ""
                            ) {

                        js_searchObj = new Object();
                        js_searchObj.CNAME = $(this).attr('data-name');
                        js_searchObj.DATATYPE = "STRING";
                        js_searchObj.SEARCH_TYPE = $(this).find("select").val();
                        js_searchObj.MINVALUE = $("#min" + $(this).attr('data-name')).val();
                        js_searchObj.MAXVALUE = $("#max" + $(this).attr('data-name')).val();
                        js_searchArray.push(js_searchObj);
                    } else if ($("#range" + $(this).attr('data-name')).val() == "Range"
                            &&
                            $("#" + $(this).attr('data-name')).val() != ""
                            ) {

                        var js_searchObj1 = {};
                        js_searchObj1.CNAME = $(this).attr('data-name');
                        js_searchObj1.DATATYPE = "STRING";
                        js_searchObj1.SEARCH_TYPE = $(this).find("select").val();
                        js_searchObj1.VALUE = $("#" + $(this).attr('data-name')).val();

                        js_searchArray.push(js_searchObj1);
                        // //////alert("hellloghg:::"+$("#" + $(this).attr('data-name')).val());

                    }




                } else {
                    // //////alert("range length: ELSE::" + $("#range" + $(this).attr('data-name')).length);
                    if ($("#" + $(this).attr('data-name')).val() != "") {
                        js_searchObj = new Object();
                        js_searchObj.CNAME = $(this).attr('data-name');
                        js_searchObj.DATATYPE = "STRING";
                        js_searchObj.SEARCH_TYPE = $(this).find("select").val();
                        js_searchObj.VALUE = $("#" + $(this).attr('data-name')).val();
                        js_searchArray.push(js_searchObj);

                    }
                }

            }


        }

    });


    console.log("js_searchArray::::::::" + JSON.stringify(js_searchArray));

    $('#wait').show();
    $.ajax({
        type: "POST",
        url: 'baseTableResults',
        data: {
            gridId: $("#gridId").val(),
            paramdata: JSON.stringify(js_searchArray)
        },
        //                                    contentType: 'text/html',
        traditional: true,
        cache: false,
        //async: false,
        success: function (response) {
            ////////alert(JSON.stringify(response.data));
            $('#wait').hide();

            var localData = response.data;
            var tableName = response.tableName;
            griDataObj.oldData = localData;
            var datafields = response.datafields;
            for (var i = 0; i < datafields.length; i++) {
                if (typeof datafields[i].values != "undefined" && datafields[i].values != null) {

                    datafields[i].values.source = eval(datafields[i].values.source);
                }
            }
            var labels = response.columns;
            var hrefObj = response.hrefObj;
            $("#tableName").val(tableName.trim());
            // //////alert(" :::::::::::::::::::: dataFeilds "+JSON.stringify(datafields));
            var source =
                    {
                        localdata: localData,
                        datafields: datafields,
                        datatype: "json"
                    };

            // $('#'+gridId).jqxGrid('updatebounddata');
            var dataAdapter = new $.jqx.dataAdapter(source);
            var gridConfigObject = {};
            gridConfigObject = response.gridPropObj;
            var renderToolbar = gridConfigObject.renderToolbar;
            gridConfigObject.renderToolbar = eval('(' + renderToolbar + ')');
            gridConfigObject.source = dataAdapter;
            gridConfigObject.columns = response.columns;
            var gridOperation = response.gridOperation;
            $("#defaultValues").val(response.defaultValues);
            var col = response.columns;
            for (var i = 0; i < col.length; i++) {

                if (col[i].rendered != null) {


                    col[i].rendered = eval('(' + col[i].rendered + ')');
                }
            }
            var headerTooltipRenderer = function (element) {
                $(element).parent().jqxTooltip({position: 'mouse', theme: 'bootstrap',
                    position: 'bottom-right',
                    showArrow: false, content: $(element).text()});
            }
            var dataSheetRendered = function (element) {
                $(element).parent().jqxTooltip({position: 'mouse', theme: 'bootstrap',
                    position: 'bottom-right',
                    showArrow: false, content: $(element).text()});
            }
            gridConfigObject.rendergridrows = function (obj) {
                // alert("obj:::"+JSON.stringify(obj));
                return obj.data;
            };

            var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                var cellValue = $("#" + gridId).jqxGrid('getcellvalue', row, columnfield);
                var viewType = "GRID-VIEW";
                var ddwData = response.dropDowndData;
                var ddwObj = ddwData[columnfield];
                var dependencyparams = ddwObj.dependencyparams;
                $("div#" + gridId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
                var rowsCellHeight = $("#" + gridId).jqxGrid('rowsheight');
                //  return "<div class='propertypopup' style='width:82%;' >" + cellValue + "</div><img class='prop_imgClass' src='images/search_icon_color_2.png' style='width:15px;height:15px' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')>";
                return "<div  class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage' ><img id='dd" + gridId + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
            };

            for (var i = 0; i < gridConfigObject.columns.length; i++) {
                if (gridConfigObject.columns[i].cellsrenderer != null) {
                    gridConfigObject.columns[i].cellsrenderer = eval(gridConfigObject.columns[i].cellsrenderer);
                }
                if (gridConfigObject.columns[i].createeditor != null) {

                    gridConfigObject.columns[i].createeditor = eval('(' + gridConfigObject.columns[i].createeditor + ')');

                }

                if (gridConfigObject.columns[i].initeditor != null) {


                    gridConfigObject.columns[i].initeditor = eval('(' + gridConfigObject.columns[i].initeditor + ')');

                }
                if (gridConfigObject.columns[i].geteditorvalue != null) {


                    gridConfigObject.columns[i].geteditorvalue = eval('(' + gridConfigObject.columns[i].geteditorvalue + ')');

                }
                if (gridConfigObject.columns[i].cellbeginedit != null) {


                    gridConfigObject.columns[i].cellbeginedit = eval('(' + gridConfigObject.columns[i].cellbeginedit + ')');

                }
            }


            //$("#"+gridId).jqxGrid('updatebounddata');
//            $("#labeld").html(gridOperation);

            $('#' + gridId).jqxGrid('clearselection');
            // $('#'+gridId).jqxGrid('updatebounddata');

            $("#" + gridId).jqxGrid(gridConfigObject);
            $(window).resize(function () {
                var windowWidth = $(this).width();
                if (windowWidth <= 415)
                {
                    $("#" + gridId).jqxGrid({pagerheight: 70});
                } else if (windowWidth >= 416 && windowWidth <= 500)
                {
                    $("#" + gridId).jqxGrid({pagerheight: 40});
                } else
                {
                    $("#" + gridId).jqxGrid({pagerheight: 30});
                }
            }).resize();
            var accordiv = document.getElementById("accordion");
            if (accordiv == null) {
                $("#" + gridId + "_ACCORDIAN").accordion({'active': 1});

            } else {

                $("#accordion").accordion({'active': 1});
            }

            setTimeout(function () {

                // $("#" + gridId + "_ACCORDIAN").children("#ui-id-4").css('height', (source.localdata.length*2)+'0px');
                $("#" + gridId + "_ACCORDIAN").children("#ui-id-4").css('height', '');
//               $("#" + gridId + "_ACCORDIAN").children("#ui-id-4").removeAttr('height');
            }, 500);

            //     $("#"+gridId).jqxGrid('updatebounddata');



//
//            $("#" + gridId + "_Add").on('click', function () {
//                // //////alert("gridId::::" + gridId);
//                insertGridRow(gridId, "GRID-VIEW", gridId);
////                insertGridRow(gridId, "GRID-VIEW", datafields, gridId, localData);
//                $("#operationName").val("INSERT");
//            });

            $("#jqxGrid").on("bindingcomplete", function (event) {// your code here.

            });

            $("#" + gridId).bind('rowselect', function (event) {
                ////////alert("rowselect");

                var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
//                //////alert("selectedrowindexes"+selectedrowindexes);
                var rwindex = event.args.rowindex;


                if (selectedIndexs.indexOf(rwindex) == -1) {
                    selectedIndexs.push(rwindex)
                }


                var column = event.args.column;




            });
            $("#" + gridId).bind('rowunselect', function (event) {
                var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
                // //////alert("rowunselect:::::"+selectedrowindexes);
                var rwindex = event.args.rowindex;
                selectedIndexs.pop(rwindex)

                // var data = $('#'+gridId).jqxGrid('getrowdata', rwindex);

                console.log("POP::selectedIndexs::" + selectedIndexs.length);
            });
//$("#searchResults").on("celldoubleclick", function (event)
//{
//    // event arguments.
//    var args = event.args;
//    // row's bound index.
//    var rowBoundIndex = args.rowindex;
//    // row's visible index.
//    var rowVisibleIndex = args.visibleindex;
//    // right click.
//    var rightClick = args.rightclick; 
//    // original event.
//    var ev = args.originalEvent;
//    // column index.
//    var columnIndex = args.columnindex;
//    // column data field.
//    var dataField = args.datafield;
//    // cell value
//    var value = args.value;
//     $("#searchResults").jqxGrid('selectrow', rowBoundIndex);
//});  
//$('#'+gridId).jqxGrid({ editmode: 'dblclick'}); 
            $('#' + gridId).on('cellbeginedit', function (event)
            {
                $("#" + gridId).attr('data-last-ed-field', event.args.datafield);
                $("#" + gridId).attr('data-last-ed-row', event.args.rowindex);

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
                $('#' + gridId).jqxGrid('selectrow', rowBoundIndex);
            });






            $("#accordion").accordion({'active': 1});


        },
        error: function (response) {
            sessionTimeout(response);
        }
    });



}






function clearGridSearch() {

    $("input[type=text]").val('');
    $("input[type=text]").removeAttr('disabled');

    $("input[type=checkbox]").prop("checked", false);
    $('select').each(function () {
        $(this).prop('selectedIndex', 0);
    });
    $('#search_content_detail tr').each(function () {
        if ($(this).children('td').eq(2).find("select").val() != undefined)
        {

            $(this).find("input").hide();
            $(this).find("img").hide();
            $(this).children('td').eq(2).find("select").val('No');
            console.log("Id:" + $(this).attr('id'));
            console.log("poperty:" + $(this).find('select').val());
            //  console.log("Button val:"+$(this).find("input[type='button']").attr("id"));
        } else {
            console.log("Button Id:" + $(this).find("input[type='button']").attr("id"));
            console.log("Button val:" + $(this).find("input[type='button']").val());
            if ($(this).find("input[type='button']").val() == 'Normal')
            {
                $(this).find("input[type='button']").click();
            }
        }

        $("#attach_ddw").prop('selectedIndex', 0);
    });
    resetCountLabels();

}


function calendarAttach(rowid) {
//    console.log("Entered attach with:" + rowid);
//    console.log("row textbox id:" + $("#" + rowid).find("input").attr("id"));
//    var dateid = $("#" + rowid).find("input").attr("id");
    $("#" + rowid).datepicker({dateFormat: 'dd-mm-yy', changeMonth: true, changeYear: true});
}
function  toggleChange(val1, val2, val3, val4, val5, searchtype) {

//val1: range button id
//val2: textbox id
//val3: min textbox id
//val4: and div id
//val5: max textbox id
//searchtype ddw id: dropdownid


//val1 is clicked element id
//val2 is table row id
    console.log('searchtype:::' + searchtype + ":::val1:::" + val1 + ":::val2:::" + val2 + ":::val3:::" + val3 + ":::val4:::" + val4 + ":::val5:::" + val5);

    if ($("#" + val1).val() === "Range") {
        $("#" + val1).val("Normal");
        $("#" + val2).css("display", "none");
        $("#" + val2).val("");
        $("#" + val3).css("display", "inline");
        $("#" + val4).css("display", "inline");
        $("#" + val5).css("display", "inline");
        //$('#' + searchtype).find('select').prop('selectedIndex', 11);
        $('#' + searchtype).find('select').val('Between');

        if (document.documentElement.clientWidth <= 800)
        {
            $("#" + val1).val("Normal");
            $("#" + val2).css("display", "none");
            $("#" + val2).val("");
            $("#" + val3).css("display", "block");
            $("#" + val4).css("display", "block");
            $("#" + val5).css("display", "block");
            //$('#' + searchtype).find('select').prop('selectedIndex', 11);
            $('#' + searchtype).find('select').val('Between');

        }


        if ($('#' + searchtype).attr("data-type") == 'date') {
            calendarAttach(val3);
            calendarAttach(val5);
            $("#" + val3).focus();

        }



//index in maintained in j_operators table in DB
//        $('#' + searchtype ).text('BETWEEN');
    } else {
        $("#" + val1).val("Range");
        $("#" + val2).css("display", "inline");
        $("#" + val3).css("display", "none");
        $("#" + val4).css("display", "none");
        $("#" + val5).css("display", "none");
        $("#" + val3).val("");
        $("#" + val4).val("");
        $("#" + val5).val("");
//        $('#' + searchtype + ' :selected').text('=');
        $('#' + searchtype).find('select').val('=');
        if ($('#' + searchtype).attr("data-type") == 'date') {

            dettachCalendar(val3);
            dettachCalendar(val5);
//            detachCalendar(searchtype);
//            detachCalendar(searchtype);


        }
//      $('#' + searchtype).val('Equals');
    }

}

function onChangeOperator(searchtype) {
    console.log('searchtype:' + searchtype + ". value:" + $("#" + searchtype + " :selected").text().toUpperCase());
    var id = $("#" + searchtype).parent().parent().attr("id");
    var colid = $("#" + searchtype).parent().parent().attr('data-name');

    if ($("#" + searchtype + " :selected").text() == 'Between')
    {
        $('#' + id).children('td').eq(2).find("input:text").removeAttr('disabled');
        $('#' + id).children('td').eq(2).find("input:button").click();
    } else if ($("#" + searchtype + " :selected").text().toUpperCase() == 'IS' || $("#" + searchtype + " :selected").text().toUpperCase() == 'IS NOT')
    {
        $('#' + id).children('td').eq(2).find("input:text").attr('disabled', 'disabled');
        $('#' + id).children('td').eq(2).find("input:text").val('NULL');
    } else if (
            $("#" + searchtype + " :selected").text() == '=' ||
            $("#" + searchtype + " :selected").text() == '<>' ||
            $("#" + searchtype + " :selected").text() == 'Begining with' ||
            $("#" + searchtype + " :selected").text() == 'Ending with' ||
            $("#" + searchtype + " :selected").text() == 'Containing' ||
            $("#" + searchtype + " :selected").text() == 'Like' ||
            $("#" + searchtype + " :selected").text() == '<' ||
            $("#" + searchtype + " :selected").text() == '>'
            )
    {

        console.log("other :::" + colid);

        $('#max' + colid).css("display", "none");
        $('#min' + colid).css("display", "none");
        $('#and' + colid).css("display", "none");
        $('#' + colid).css("display", "inline");
        $('#range' + colid).val('Range');


    } else {


        // $('#' + id).children('td').eq(2).find("input:text").removeAttr('disabled');
        $('#' + id).children('td').eq(2).find("input:text").val("");
//         $('#' + id).children('td').eq(2).find("input:text").removeAttr('disabled');
//         $('#' + id).children('td').eq(2).find("input:button").click();
    }



}

function gridoperations(gridId, operationName) {
    // alert("gridoperations:::gridId:::" + gridId + ":::" + operationName);
    if (operationName == 'add') {

        insertGridRow(gridId, "GRID-VIEW", gridId);

    } else {
        callProcessRequest(gridId, operationName);
    }
}
function callProcessRequest(gridId, operationName) {
//                 alert("processRequest:::gridId:::"+gridId+":::"+operationName);
    var selectedDataArray = [];
    var jsonDataArray = griDataObj.oldData;
    var lasteditedfield = $('#' + gridId).attr('data-last-ed-field');
    var lasteditedrow = $('#' + gridId).attr('data-last-ed-row');
    $('#' + gridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
    var rowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
//                alert(rowindexes);
    if (rowindexes != null) {

        for (var m = 0; m < rowindexes.length; m++) {

            var updateGridJsonObj = {};

            var newGriddata = $('#' + gridId).jqxGrid('getrowdata', rowindexes[m]);

            var oldGridData = jsonDataArray[rowindexes[m]];

            var matchCount = 0;
            var gridIdHidden = gridId + "_HIDDEN";
            if (newGriddata[gridIdHidden] != null && newGriddata[gridIdHidden] != '' && newGriddata[gridIdHidden] != 'INSERT' && operationName != 'delete') {
                for (var key in oldGridData) {
                    var oldgridvalue = oldGridData[key];
                    var newgridValue = newGriddata[key];
                    if (key != 'show_detail') {
                        if (newgridValue != oldgridvalue) {
                            matchCount++;

                        }

                    }
                }
                if (matchCount != 0) {
                    selectedDataArray.push(newGriddata);
                    matchCount == 0;
                }
            } else {
                selectedDataArray.push(newGriddata);
            }



        }
    }

    if (selectedDataArray.length != 0) {
//                    alert("processRequest:::gridId:::"+JSON.stringify(selectedDataArray)+":::"+operationName);

        if (operationName == 'refresh') {
            var results = "Do you want to save your changes?";
            var dialogSplitMessage = dialogSplitIconText(results, "Y");
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({ resizable: false,
                modal: true,
                title: "Message",
                height: 'auto',
                minHeight: 'auto',
                minWidth: 350,
                maxWidth: 'auto',
                fluid: true,
                buttons: {
                    Ok: function () {

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        // call final function
                        processRequest1("gridUpdateRecords", operationName, selectedDataArray, gridId);

                    },
                    Cancel: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        $('#' + gridId).jqxGrid('updatebounddata');
                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                        $("#" + gridId).jqxGrid('clearselection');
                        $("#" + gridId).jqxGrid('clearfilters');

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



        } else if (operationName == 'delete') {
            getConfirmMessage(operationName, selectedDataArray, gridId);
        } else {
            processRequest1("gridUpdateRecords", operationName, selectedDataArray, gridId);
        }


    } else {

        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
        $("#" + gridId).jqxGrid('clearselection');
        $("#" + gridId).jqxGrid('clearfilters');
        $('#' + gridId).jqxGrid('updatebounddata');
    }

}// end of function
function processRequest1(url, operationName, dataObjArray, gridId) {
    // call ajax
//    alert(url+"::::"+operationName+":::::"+JSON.stringify(dataObjArray));
    var selecetdDataArray = [];
    if (dataObjArray.length != 0) {
        var resultObj = {};
        var validatioFlag = true;
        var errorMsg = "";
        for (var i = 0; i < dataObjArray.length; i++) {
            resultObj = {};
            var dataString = "";

            dataString = JSON.stringify(dataObjArray[i]);
            //console.log("dataString::::" + dataString);

            resultObj = genericGridValidatin(dataString, gridId);

            obj = JSON.parse(resultObj);
            if (obj.errorCount != 0) {
                errorMsg = obj.errorMsg;
                validatioFlag = false;
                break;
            } else {
                continue;
            }

        }// end for loop
        if (validatioFlag) {

            // write ajax call for process the request

            callServersideMethods(dataObjArray, url, gridId);

        } else {
            genericGridValidationMessage(errorMsg);
        }

    }// end if
    else {
        gridSearchItems();
        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
        $("#" + gridId).jqxGrid('clearselection');
        $("#" + gridId).jqxGrid('clearfilters');
        $('#' + gridId).jqxGrid('updatebounddata');
    }
}// end function
function getConfirmMessage(operationName, selectedDataArray, gridId) {

    var results = "Are you sure you want to Delete this Record?";
    var dialogSplitMessage = dialogSplitIconText(results, "Y");
    $("#dialog").html(dialogSplitMessage);
    $("#dialog").dialog({ resizable: false,
        modal: true,
        title: "Message",
        height: 'auto',
        minHeight: 'auto',
        minWidth: 350,
        maxWidth: 'auto',
        fluid: true,
        buttons: {
            Ok: function () {

                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");

                processRequest1("gridDeleteRecords", operationName, selectedDataArray, gridId);
            },
            Cancel: function () {
                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");
                gridSearchItems();
                $('#' + gridId).jqxGrid('updatebounddata');
                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                $("#" + gridId).jqxGrid('clearselection');
                $("#" + gridId).jqxGrid('clearfilters');

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
function callServersideMethods(dataObjArray, url, gridId) {
    // alert("callServersideMethods::::"+url+":::"+gridId);
    var oldDataArray = griDataObj.oldData;
    $.ajax({
        type: "POST",
        url: url,
        data: {
            gridJsonData: JSON.stringify(dataObjArray),
            'gridId': gridId,
            'tableName': $("#tableName").val()
        },
        traditional: true,
        cache: false,
        success: function (result) {

//alert("resultresult:::"+result);
            var dialogSplitMessage = dialogSplitIconText(result, "Y");
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({ resizable: false,
                modal: true,
                title: "Message",
                height: 'auto',
                minHeight: 'auto',
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: {
                    Ok: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        gridSearchItems();
                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                        $("#" + gridId).jqxGrid('clearselection');
                        $("#" + gridId).jqxGrid('clearfilters');
                        $('#' + gridId).jqxGrid('updatebounddata');

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
            console.log(e);
            sessionTimeout(e);
        }

    });
}