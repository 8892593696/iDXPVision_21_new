/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var masterSelectedRow = "";
var masterGridSelectedIndexes = [];
var griDataObj = {};


//start insert grid raw



// end 






function insertDHGridRow(gridId, dataView, viewId) {
    /* if (masterSelectedRow == null || masterSelectedRow == "") {
     var masterRowObj = $('#' + masterDetailObjMain.master.gridId).jqxGrid('getrowdata', 0);
     masterSelectedRow = [];
     masterSelectedRow.push(masterRowObj);
     }
     */

    if (dataView == "GRID-VIEW")
    {
        $("#" + gridId + "HID").val("INSERT");
        var jsonData = {};
        //  jsonData = getGridResults(gridId);
        //  var selectedRowData = jsonData['selectedRowData'];
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
                    }
                    // else if (selectedRowData[columnName] != null) {
                    //     row[columnName] = selectedRowData[columnName];
                    //  }
                    else if (columnName == 'INSTANCE' || columnName == 'PLANT' ||
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
            }
            /*  else if (columnName != null && masterSelectedRow[0][columnName] != null &&
             $("#" + gridId).jqxGrid('getcolumnproperty', columnName, 'hidden')
             ) {
             row[columnName] = masterSelectedRow[0][columnName];
             }   */

        }

//        console.log("row:::" + JSON.stringify(row));
//        var localdata = JSON.stringify(localData).length;
        var data = $("#" + gridId).jqxGrid('getrowdata', 0);
        if (data == null)
        {
            $("#" + gridId).jqxGrid({showfilterrow: false});
            $("#" + gridId).jqxGrid('clearfilters');
            var index = $("#" + gridId).jqxGrid('getrowboundindex', 1);
            index = index + 1;
//            console.log("index else ::::::" + index);
            $("#" + gridId).jqxGrid('selectrow', index);
        } else {

            // //////alert("no:::");
            $("#" + gridId).jqxGrid({showfilterrow: false});
            $("#" + gridId).jqxGrid('clearfilters');
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



function callProcessRequest2(gridId, operationName) {
    var labelObject = {};
    console.log();
    /*
     var labelObject = {};
     try {
     labelObject = JSON.parse($("#labelObjectHidden").val());
     } catch (e) {
     
     }
     //                 alert("processRequest:::gridId:::"+gridId+":::"+operationName);
     var selectedDataArray = [];
     jsonDataArray = griDataObj.oldData;
     */
    var lasteditedfield = $('#' + gridId).attr('data-last-ed-field');
    var lasteditedrow = $('#' + gridId).attr('data-last-ed-row');
    $('#' + gridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);

    var selectedDataArray = [];
    var jsonDataArray = griDataObj.data;
    var rowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');

    //                alert(rowindexes);
    if (rowindexes != null) {
        var insertCount = 0;
        for (var m = 0; m < rowindexes.length; m++) {

            if (rowindexes[m] != -1)
            {

                var updateGridJsonObj = {};

                var newGriddata = $('#' + gridId).jqxGrid('getrowdata', rowindexes[m]);
                var oldGridData = jsonDataArray[rowindexes[m - insertCount]];

                //   var oldGridData = jsonDataArray[rowindexes[m]];

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
    }

    if (selectedDataArray.length != 0) {
        //                    alert("processRequest:::gridId:::"+JSON.stringify(selectedDataArray)+":::"+operationName);

        if (operationName == 'refresh') {
            $("#dialog").html((labelObject['Do you want to save your changes'] != null ? labelObject['Do you want to save your changes'] : 'Do you want to save your changes') + "?");
            $("#dialog").dialog({ resizable: false,
                height: 130,
                minWidth: 300,
                maxWidth: 'auto',
                modal: true,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {

                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            if (gridId == 'MM_CLASSEES_AND_KEYWORDS')
                            {
                                displayAcc();
                            }
                            if (gridId == 'MM_ALTERNATIVE_KEY_WORD')
                            {
                                alternateKeyWords(gridId);
                            } else if (gridId == 'MM_PROPERTIES_AND_PROPERTY_CLASSESS')
                            {
                                PropertiesAndPropertisClass(gridId);
                            } else if (gridId == 'MM_PROPERTY_DH')
                            {
                                properties();
                            } else if (gridId == 'MM_DISQUALIFICATION_AND_DISREGARDED_TERMS') {
                                disqualification();
                            }
                            $("#" + gridId).jqxGrid('clearselection');
                            $("#" + gridId).jqxGrid('clearfilters');
                            //  processRequest1("gridUpdateRecords", operationName, selectedDataArray, gridId);

                        }
                    }, {
                        text: labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel',
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            $('#' + gridId).jqxGrid('updatebounddata');
                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                            $("#" + gridId).jqxGrid('clearselection');
                            $("#" + gridId).jqxGrid('clearfilters');
//                                            $('#' + gridId).jqxGrid('updatebounddata');
//                                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                                            $("#" + gridId).jqxGrid('clearselection');
//                                            $("#" + gridId).jqxGrid('clearfilters');

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
            alert("delete records:::::::::::::");
        } else if (operationName == 'delete') {

            alert("delete records:::::::::::::");
            getConfirmMessage(operationName, selectedDataArray, gridId);
        } else {
            alert("Update records:::::::::::::::;");
            processRequest1("gridUpdateRecords", operationName, selectedDataArray, gridId);
        }


    } else {
        if (gridId == 'MM_CLASSEES_AND_KEYWORDS')
        {
            displayAcc();
        }
        if (gridId == 'MM_ALTERNATIVE_KEY_WORD')
        {
            alternateKeyWords(gridId);
        } else if (gridId == 'MM_PROPERTIES_AND_PROPERTY_CLASSESS')
        {
            PropertiesAndPropertisClass(gridId);
        } else if (gridId == 'MM_PROPERTY_DH')
        {
            properties();
        } else if (gridId == 'MM_DISQUALIFICATION_AND_DISREGARDED_TERMS') {
            disqualification();
        }

    }

}// end of callProcessRequest


function getConfirmMessage(operationName, selectedDataArray, gridId) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#dialog").html((labelObject['Are you sure you want to Delete this Record'] != null ? labelObject['Are you sure you want to Delete this Record'] : 'Are you sure you want to Delete this Record') + "?");
    $("#dialog").dialog({ resizable: false,
        height: 130,
        minWidth: 300,
        maxWidth: 'auto',
        modal: true,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        fluid: true,
        buttons: [{
                text: ((labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok')),
                click: function () {

                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");

                    if (gridId == 'MM_CLASSEES_AND_KEYWORDS')
                    {
                        displayAcc();
                    }
                    if (gridId == 'MM_ALTERNATIVE_KEY_WORD')
                    {
                        alternateKeyWords(gridId);
                    } else if (gridId == 'MM_PROPERTIES_AND_PROPERTY_CLASSESS')
                    {
                        PropertiesAndPropertisClass(gridId);
                    } else if (gridId == 'MM_PROPERTY_DH')
                    {
                        properties();
                    } else if (gridId == 'MM_DISQUALIFICATION_AND_DISREGARDED_TERMS') {
                        disqualification();
                    }
                    $("#" + gridId).jqxGrid('clearselection');
                    $("#" + gridId).jqxGrid('clearfilters');
                    alert("process request11111::::::::::::")
                    processRequest1("gridDeleteRecords", operationName, selectedDataArray, gridId);
                }}, {
                text: ((labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel')),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    if (gridId == 'MM_CLASSEES_AND_KEYWORDS')
                    {
                        displayAcc();
                    }
                    if (gridId == 'MM_ALTERNATIVE_KEY_WORD')
                    {
                        alternateKeyWords(gridId);
                    } else if (gridId == 'MM_PROPERTIES_AND_PROPERTY_CLASSESS')
                    {
                        PropertiesAndPropertisClass(gridId);
                    } else if (gridId == 'MM_PROPERTY_DH')
                    {
                        properties();
                    } else if (gridId == 'MM_DISQUALIFICATION_AND_DISREGARDED_TERMS') {
                        disqualification();
                    }

                }
            }],
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

function processRequest1(url, operationName, dataObjArray, gridId) {
    var labelObject = {};
    alert("process requst1:::::::::::::");
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
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
            /*
             resultObj = genericGridValidatin(dataString, gridId);
             
             obj = JSON.parse(resultObj);
             if (obj.errorCount != 0) {
             errorMsg = obj.errorMsg;
             validatioFlag = false;
             break;
             } else {
             continue;
             }
             */

        }// end for loop
        if (validatioFlag) {
            alert("call servuersideMethods:::::::::::::");

            // write ajax call for process the request

            callServersideMethods(dataObjArray, url, gridId);

        } else {
            genericGridValidationMessage(errorMsg);
        }

    }// end if
    else {
        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
        $("#" + gridId).jqxGrid('clearselection');
        $("#" + gridId).jqxGrid('clearfilters');
        $('#' + gridId).jqxGrid('updatebounddata');

    }
}  // end ofprocessRequest1        



function callServersideMethods(dataObjArray, url, gridId) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    //alert(JSON.stringify(dataObjArray)+"callServersideMethods::::"+url+":::"+gridId);
    // var oldDataArray = griDataObj.oldData;
    alert("callserverside");
    $.ajax({
        type: "POST",
        // url: 'http://192.169.1.116:8080/V10DataHarmonization/'+url,
        url: $("#ssDHURL").val() + "/" + url,
        data: {
            gridJsonData: JSON.stringify(dataObjArray),
            'gridId': gridId
                    //  'tableName': $("#tableName").val()
        },
        traditional: true,
        cache: false,
        success: function (result) {

            alert("resultresult:::" + result);
            $("#dialog").html("<div style='text-align:center'>" + result + "</div>");
            $("#dialog").dialog({ resizable: false,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                modal: true,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                fluid: true,
                buttons: [{
                        text: ((labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok')),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            if (gridId == 'MM_CLASSEES_AND_KEYWORDS')
                            {
                                displayAcc();
                            }
                            if (gridId == 'MM_ALTERNATIVE_KEY_WORD')
                            {
                                alternateKeyWords(gridId);
                            } else if (gridId == 'MM_PROPERTIES_AND_PROPERTY_CLASSESS')
                            {
                                PropertiesAndPropertisClass(gridId);
                            } else if (gridId == 'MM_PROPERTY_DH')
                            {
                                properties();
                            } else if (gridId == 'MM_DISQUALIFICATION_AND_DISREGARDED_TERMS') {
                                disqualification();
                            }
                            $("#" + gridId).jqxGrid('clearselection');
                            $("#" + gridId).jqxGrid('clearfilters');



//					    $("#" + gridId).jqxGrid('refreshdata');
//                                            $("#" + gridId).jqxGrid('clearselection');
//                                            $("#" + gridId).jqxGrid('clearfilters');
//					    $("#" + gridId).jqxGrid('updatebounddata');
                            // $("#" + gridId).jqxGrid({showfilterrow: true});


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



        },

        error: function (e) {
            sessionTimeout(e);
        },

    });
}   // end of callServersideMethods
//	function updatecell(gridId,url) {
//
//                        var source =
//                                {
//                                    type: 'POST',
//                                    async: false,
//                                    datatype: "json",
//                                 
//                                    data: {
//                                        gridId: gridResultObj['gridId'],
//                                       
//                                       
//                                        selectedCols: $("#selectedCols").val(),
//                                    
//                                    },
//                                    url: url,
//                                    cache: false,
//                                    root: 'Rows',
//                                    beforeprocessing: function (data) {
//                                         alert("beforeprocessing::::" + JSON.stringify(data));
//                                        if (data[0] != null) {
//                                            //  alert(data.JSONObjectList[0].TotalRows);
//                                            source.totalrecords = data[0].TotalRows;
//                                           
//                                        } else {
//
//                                            source.totalrecords = 0;
//                                           
//                                        }
//
//                                        //                                                         
//                                    },
//                                    sort: function ()
//                                    {
//                                        $("#" + gridId).jqxGrid('updatebounddata', 'sort');
//                                    },
//                                    filter: function () {
//
//                                        $("#" + gridId).jqxGrid('updatebounddata', 'filter');
//                                    }
//
//
//                                };
//                        var dataAdapter = new $.jqx.dataAdapter(source);
//                        gridPropObj.source = dataAdapter;
//                        gridPropObj.showtoolbar = false;
//                        gridPropObj.rowdetails = false;
//                        gridPropObj.rendergridrows = function () {
//                            return dataAdapter.records;
//                        };
//                       
//                      
//                      
//                    }// end if(gridPropObj != null)
//
//                




function insertGridRow(tabId, dataView, viewId) {
//function insertGridRow(tabId, dataView, datafields, viewId, localData) {
    //console.log("insertGridRow:::"+tabId);
    /*
     labelObject = {};
     try {
     labelObject = JSON.parse($("#labelObjectHidden").val());
     } catch (e) {
     
     }
     */
    //console.log(":::datafields::" + JSON.stringify(datafields)  );
    if (dataView == "GRID-VIEW")
    {
        // //////console.log("k");
        var sourceex = $("#" + tabId).jqxGrid('source');
        ///code for defaultValues values
        var defaultValuesArray = [];
        var defaultValues = $("#defaultValues").val();
        var finalvalue = [];
        var colvalue = [];
        var colnameArray = [];
        var colvalueArray = [];

//        ////////////////alert("defaultValues******" + defaultValues);
        if (defaultValues != null) {
            defaultValuesArray = defaultValues.split(",");

            for (var i = 0; i < defaultValuesArray.length; i++) {
                finalvalue = defaultValuesArray[i];
                colvalue = finalvalue.split(":");
                colnameArray.push(colvalue[0]);
//                colvalueArray.push(colvalue[1]);

                if (colvalue[0] == "QSREC")
                {

                    var reciepientType = "OT";
                    var panCharTop;
                    panCharTop = $("#PAN_NUMBER").val();
                    if (panCharTop && panCharTop.charAt(3) == "C") {
                        reciepientType = "CO";
                    }
                    colvalueArray.push(reciepientType);
                }
//                else if (colvalue[0] == "WH_APPLICABALITY" || colvalue[0] == "LIABLE")
//                {
//                    colvalueArray.push("YES");
//                }
                else if (colvalue[0] == "WH_APPLICABALITY"
                        || colvalue[0] == "LIABLE"
                        || colvalue[0] == "TDS_APPL"
                        || colvalue[0] == "WT_AGENT_TAX"

                        // || colvalue[0] == "WH_APPLICABALITY_DLOV"
                        //|| colvalue[0] == "LIABLE_DLOV"
                        )
                {
                    //colvalue[1]=colvalue[1] == 'NO' ? "N" : "Y";
//                    colvalue[1]=colvalue[1] == 'N' ? "NO" : "YES";

                    if (colvalue[1] == 'N') {
                        if (colvalue[0] == "WH_APPLICABALITY" || colvalue[0] == "TDS_APPL" || colvalue[0] == "WT_AGENT_TAX")
                        {
                            colvalue[1] = 'YES';
                        } else {
                            colvalue[1] = 'NO';
                        }

                    } else if (colvalue[1] = colvalue[1] == 'Y') {
                        colvalue[1] = 'YES';
                    }

                    colvalueArray.push(colvalue[1]);
                } else
                {
                    colvalueArray.push(colvalue[1]);
                }

            }


        }

        //////end 

        var dataFeilds = [];
        dataFeilds = sourceex._source.datafields;

        var row = {};

        for (var key in dataFeilds) {
            var value = dataFeilds[key];

            var columnName = value.name;
            console.log("==================columnName::::" + columnName + ":::::::viewId:::" + viewId + "::tabId::::::" + tabId);
            if (columnName != null && columnName != '' && columnName == viewId + "_HIDDEN") {
                row[columnName] = "INSERT";
            } else if (columnName != null && columnName != '' && columnName == 'BKONT')
            {
//                row[columnName] = "01";
            } else if (columnName != null && columnName != '' && jQuery.inArray(columnName, colnameArray) > -1) {
                for (var cv = 0; cv <= colnameArray.length; cv++) {
                    if (columnName == colnameArray[cv])
                        row[columnName] = colvalueArray[cv];
                }

            } else if (value.type != null && value.type != "" && (value.type === "boolean" || value.type === "bool"))
            {
                row[columnName] = false;
                // row['cellclassname'] = "vendorno_style2";
            } else {
                row[columnName] = "";
                // row['cellclassname'] = "vendorno_style2";
            }

        }

        console.log("row:::" + JSON.stringify(row));
//        var localdata = JSON.stringify(localData).length;
        var tabOperationFlag = false;
        var data = $("#" + tabId).jqxGrid('getrowdata', 0);
        console.log("data:::" + JSON.stringify(data));
        alert("tab id is " + tabId);
        if (data == null)
        {
            alert("data is null");
            $("#" + tabId).jqxGrid({showfilterrow: false});
            try {
//                $("#" + tabId).jqxGrid('clearfilters');
//                $("#" + tabId).jqxGrid('clearselection');
            } catch (e) {
            }
            var index = $("#" + tabId).jqxGrid('getrowboundindex', 1);
            index = index + 1;
            console.log("index IF ::::::" + index);
            $("#" + tabId).jqxGrid('selectrow', index);
            tabOperationFlag = true;
        } else {
            alert("data is not null");
            // //////console.log("no:::");
            $("#" + tabId).jqxGrid({showfilterrow: false});
            try {
//                $("#" + tabId).jqxGrid('clearfilters');
//                $("#" + tabId).jqxGrid('clearselection');
            } catch (e) {
            }
            var index = $("#" + tabId).jqxGrid('getrowboundindex', 0);
            index = index;
            console.log("index else ::::::" + index);
            $("#" + tabId).jqxGrid('selectrow', index);
            var tabHidden = viewId + "_HIDDEN";
            if (data[tabHidden] != null && data[tabHidden] != '' && data[tabHidden] != 'INSERT') {
                tabOperationFlag = true;
            }

        }
        console.log("tabOperationFlag:::" + tabOperationFlag);

        if (tabOperationFlag) {
            var objectKeys = Object.keys(row);
            var objectKeysArray = objectKeys.toString().split(",");
            var lovkey = "";
            for (var i = 0; i < objectKeysArray.length; i++) {
//                if (row[objectKeysArray[i]] != null && row[objectKeysArray[i]].toUppercase() == 'AN-AN-NAN') {
//                    row[objectKeysArray[i]] = "";
//                }
                if (objectKeysArray[i].indexOf("_DLOV") > -1) {
                    lovkey = objectKeysArray[i].replace("_DLOV", "");
                    if (row[lovkey] == 'YES') {
                        row[objectKeysArray[i]] = "Y";
                    } else if (row[lovkey] == 'NO') {
                        row[objectKeysArray[i]] = "N";
                    }
                }
            }


            var commit = $("#" + tabId).jqxGrid('addrow', null, row, 0);
        }

        $('#' + viewId + '_Add').css("display", "none");

    }
}

