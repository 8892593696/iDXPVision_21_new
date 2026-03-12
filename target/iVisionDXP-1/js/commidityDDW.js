/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var labelObject = {};

function getCommudityDropdownData(ddwId, dependParams, viewType, tableOrGridId, dataFeild, row, tbid, rowid, dependclass, tblcolumns,fieldtype) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    

    console.log("visionDropdown ::: ");
    var dependParamsObj = {};
    if (typeof dependParams != "undefined" && dependParams != null && dependParams != "")
    {
        var dependParamsArray = dependParams.split(",");
        for (var i = 0; i < dependParamsArray.length; i++)
        {
            var value = "";
            if (viewType == "FORM-VIEW" || viewType == "SEARCH-VIEW")
            {
                value = $("#" + dependParamsArray[i]).val();

            } 
            else {

                value = $("#" + tableOrGridId).jqxGrid('getcellvalue', row, dependParamsArray[i]);
                if (typeof value == 'undefined') {
                    value = $("#" + dependParamsArray[i]).val();
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
   // var url = "http://192.169.1.116:8080/V10DataHarmonization/genericComdityDropDown";
    var url= $("#ssDHURL").val()+'/genericComdityDropDown';
    var data = {};
    data.ddwId = ddwId;
    data.viewType = viewType;
    data.tblcolumns=tblcolumns;
    data.dependParams = JSON.stringify(dependParamsObj);
    data.orgnName = $("#usr_orgid").val();
    var async = false;

    var success = function (result) {

        alert("result:::" + result);
        var htmlbody = "";
        var resultObj = JSON.parse(result);
        var localdata = resultObj.localdata;
        var datafields = resultObj.datafields;
        var columns = resultObj.columns;

        // alert(webservicedata.IS_WS_DDW);
        var webservicedata = resultObj.webservicedata;
//        alert(JSON.stringify(webservicedata));
       // isWebServDdw = webservicedata.IS_WS_DDW;
        //alert("isWebServDdw ::: "+isWebServDdw);
     //   var requestparams = webservicedata.REQUEST_PARAMS;
     //   var webservUrl = webservicedata.WS_URL;
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


        var filtergroup = new $.jqx.filter();
        var filter_or_operator = 1;
        var filtercondition = 'contains';
        var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filter_or_operator, filter);





        if (!webservicedata.IS_WS_UP && isWebServDdw) {

            $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>" + (labelObject['Sorry, Webservice is Down'] != null ? labelObject['Sorry, Webservice is Down'] : 'Sorry, Webservice is Down') + "</div></div>");
            $("#logoutDailog").dialog({ resizable: false,
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

                                webservUrl = webservUrl.replace("<<" + conditionCol + ">>", value != null ? value : "");
                            }


                            else {
                                var gridCellValue = "";

                                if (ddwId == "DDW_MM_PROPERTY_VALUE" && conditionCol == "CLASS_TERM")
                                    gridCellValue = $("#" + conditionCol).val();
                                else
                                    gridCellValue = $('#' + tableOrGridId).jqxGrid('getcellvalue', row, conditionCol);
                                webservUrl = webservUrl.replace("<<" + conditionCol + ">>", gridCellValue != null ? gridCellValue : "");

                            }

                        }

                    }


                }
                dataObject = {};
                Url = webservUrl;
            }

        } else {
          
           var dependentclass;
            if(fieldtype!=null&&fieldtype!='undefined'&&fieldtype!=''&&fieldtype=='D')
            {
                dependentclass=$("#COMMODITY").val();
            }
         // Url = "http://192.169.1.116:8080/V10DataHarmonization/getDHDropdownData";
	      Url= $("#ssDHURL").val()+'/getDHDropdownData';
	    
            dataObject = {
                tableName: resultObj.tableName,
                condCols: JSON.stringify(resultObj.condCols),
                selectCols: JSON.stringify(resultObj.selectCols),
                staticCondition: resultObj.staticCondition,
                fieldtype:fieldtype,
                dependentclass:dependentclass
              


            }

        }
        dataObject.sortcolumn = resultObj.defaultOrderBy;
        dataObject.sortdirection = 'asc';

//        alert("resultObj::::" + JSON.stringify(resultObj));
        source = {
            type: 'POST',
            async: false,
            datatype: "json",
            data: dataObject,
            url: Url,
            cache: false,
            beforeprocessing: function (data) {

                if (data[0] != null) {
                    source.totalrecords = data[0].totalRecords;

                } else {

                    source.totalrecords = 0;
                }
            },
            sort: function ()
            {
                try {
                    $("#ddGrid3").jqxGrid('clearselection');
                } catch (e) {
                }
                $("#ddGrid3").jqxGrid('updatebounddata', 'sort');
            },
            filter: function () {
                try {
                    $("#ddGrid3").jqxGrid('clearselection');
                } catch (e) {
                }

                $("#ddGrid3").jqxGrid('updatebounddata', 'filter');
            }

        };
        var dataAdapter = new $.jqx.dataAdapter(source);
        var isExportable = true;
        var gridConfigObj = {};
        gridConfigObj = resultObj.gridconfig;
        gridConfigObj.source = dataAdapter;
        gridConfigObj.rendergridrows = function (obj) {

            return obj.data;
        };
        gridConfigObj.columns = columns;
        gridConfigObj.virtualmode = true;


        gridConfigObj.height = "100%";
        var toolbarHtml = "";
        var renderingObe = resultObj.valueRenderArray;
        var clearselectionLabel = (labelObject["Clear Selection"] != null ? labelObject["Clear Selection"] : "Clear Selection");
        var clearfilterLabel = (labelObject["Clear Filter"] != null ? labelObject["Clear Filter"] : "Clear Filter");

        if (resultObj.multiselectflag) {

            toolbarHtml = "<div style='width:100%;text-align:center;height:auto;'><center>"
                    + "<input class='visionDDWSelect' type='button' "
                    + " data-viewType='" + viewType + "'"
                    + " data-renderer='" + JSON.stringify(renderingObe) + "' onclick=selectData('" + tbid + "'," + rowid + ",'" + ddwId + "') "
                    + " disabled='disabled' value='Select' id='selectvlues'/>"
                    + "<input class='visionDDWClear' onclick='clearSelection();' style='margin-right:5px' type='button' value='" + clearselectionLabel + "' id='ClearSelection'/>"
                    + "<input class='visionDDWFilter' onclick='clearFilters();'  type='button' value='" + clearfilterLabel + "' id='ddClear'/></center>"
                    + "</div>";
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
        $("#ddGrid3").jqxGrid(gridConfigObj);




        $("#ddGrid3").jqxGrid({rendertoolbar: toolbarfunc});
        $(window).resize(function () {
            var windowWidth = $(this).width();
            if (windowWidth <= 375)
            {
                $("#ddGrid3").jqxGrid({pagerheight: 70});
            } else if (windowWidth >= 376 && windowWidth <= 500)
            {
                $("#ddGrid3").jqxGrid({pagerheight: 40});
            } else
            {
                $("#ddGrid3").jqxGrid({pagerheight: 30});
            }
        }).resize();
        $(window).resize(function ()
        {
            var windowWidth = $(this).width();
            if (windowWidth < 440)
            {
                $("#ddGrid3").jqxGrid('width', "100%");
            } else
            {
                $("#ddGrid3").jqxGrid('width', "420px");
            }
        }).resize();
        $(window).resize(function () {
            setTimeout(function () {
                $(".jqx-grid-pager").each(function () {
                    $(this).children().css({"margin-top": "", "width": "", "float": ""});
                });
            }, 50);
        }).resize();
        //CLEARING FILTER IN DROPDOWN
        $('#ddClear').on('click', function () {
            $('#ddGrid3').jqxGrid('clearfilters');
        });
        $('#ddGrid3').attr('data-childgrid', tableOrGridId);
        $('#ddGrid3').attr('data-childfield', dataFeild);
        $('#ddGrid3').attr('data-childrow', row);
        //CLEARING SELECTIONS IN DROPDOWN


        //ROW CLICK EVENT
        $('#ddGrid3').on('rowclick', function (event)
        {
            $(".allErrors").hide();
            var args = event.args;
            var boundIndex = args.rowindex;          
            var visibleIndex = args.visibleindex; 
            var rightclick = args.rightclick;          
            var ev = args.originalEvent;
            
            if (!resultObj.multiselectflag) {

                alert(JSON.stringify(renderingObe));
                console.log(JSON.stringify(renderingObe));
                for (var i = 0; i < renderingObe.length; i++) {
                    var obj = renderingObe[i];

                    var colValue = $('#ddGrid3').jqxGrid('getcellvalue', boundIndex, obj.PARENT_FIELD);
//                    alert("colValue::::"+colValue);
                    if (colValue != null) {
                        colValue = colValue.toString();
                    }
//               
                    if (viewType == "GRID-VIEW")
                    {
                        $("#" + obj.CHILD_TABLE).jqxGrid('setcellvalue', row, obj.CHILD_FIELD, colValue);
                        var index = $("#" + obj.CHILD_TABLE).jqxGrid('getrowboundindexbyid', row);

                        var hiddenCellVal = $("#" + obj.CHILD_TABLE).jqxGrid('getcellvalue', 0, obj.CHILD_TABLE + "_HIDDEN");

                        if (typeof hiddenCellVal != 'undefined' && hiddenCellVal != null && hiddenCellVal != "") {
                            if (hiddenCellVal.indexOf("INSERT") > -1) {
                                index = index - 1;
                            }
                        }


                        $("#" + obj.CHILD_TABLE).jqxGrid('selectrow', index);
                    } else if (viewType == "FORM-VIEW") {

                        var childFields = obj.CHILD_FIELD.split(",");
//                        console.log("childFields::::" + childFields);
//                           alert(colValue+"::::");
                        for (var j = 0; j < childFields.length; j++)
                        {
                            if (childFields[j] != null) {
                                $("#" + childFields[j]).val(colValue);

                                if (colValue != null && colValue.indexOf("REQUESTOR") > -1 && ddwId == "DDW_ROLES") {
                                    $("#rpt_img").show();
                                    $(".visionRegisterMandatory").show();

                                    $("#usr_rlePrefixTxt").val(colValue.substr(0, 2) + "_APPROVER");
                                } else if (!(colValue != null && colValue.indexOf("REQUESTOR") > -1) && ddwId == "DDW_ROLES")
                                {
                                    $("#rpt_img").hide();
                                    $(".visionRegisterMandatory").hide();
                                }
                      




                            }
 /// For Tech Mahindra PoC End
                        }

                    } else if (viewType == "SEARCH-VIEW") {
                        $("#" + tbid).val(colValue);
                    } else if (viewType == "TABLE-VIEW") {
                        $("#" + tbid).val(colValue);
                    }

                }
                try {
                    //childDependacyChange(dataFeild);
                    childDependacyChange(dataFeild, colValue);
                } catch (e) {
                }
                if (dataFeild == "REGIO" || dataFeild == "REGIO_DESCR") {
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
                if ($("#LAND1").val() == "IN") {
                                    $("#PSTLZ").attr('maxlength','6');
                                }
                                else {
                                    $("#PSTLZ").attr('maxlength','15');
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
                if (dataFeild == "LAND1" && ($("#LAND1").val() != "IN")) {
                    $("#PSTLZ").attr("data-regex", "^[a-zA-Z0-9 -]+$");
                    $("#PSTLZ").attr('maxlength','15');
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
                if (dataFeild == "LAND1" && ($("#LAND1").val() == "IN")) {
                    $("#PSTLZ").attr("data-regex", "^[1-9]{1}[0-9]{5}$");
                    $("#PSTLZ").attr('maxlength','6');
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
                $("#dddw").dialog('close');
            } else {

                $('#ddGrid3').jqxGrid('selectrow', boundIndex);
            }
//            childDependacyChange(dataFeild);
            if ($(".lblMand" + dataFeild).css("display") != "none")
                psCount($("#dd" + dataFeild).attr("data-viewID"));
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
        $("#dddw").dialog({ resizable: false,
            title: resultObj.dropDownTitle,
            modal: true,
            height: 445,
            width: 433,
            fluid: true,
            resize: function (event, ui) {
                var dialogWidth = ui.size.width;
                var gridWidtht = dialogWidth - 15;
                $("#ddGrid3").jqxGrid({width: gridWidtht});
            },
            open: function () {
                $(this).closest(".ui-dialog").addClass("visionSearchDDDWDialog");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
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
function selectData(tbid, rowid, ddwId) {
    var viewType = $("#selectvlues").attr('data-viewType');
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
                    valuesString += "'" + dataObj[obj.PARENT_FIELD] + "'";
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

            $("#" + obj.CHILD_TABLE).jqxGrid('setcellvalue', row, obj.CHILD_FIELD, valuesString);

            var index = $("#" + obj.CHILD_TABLE).jqxGrid('getrowboundindexbyid', row);

            $("#" + obj.CHILD_TABLE).jqxGrid('selectrow', index);
        } else if (viewType == "FORM-VIEW") {
            var childFields = obj.CHILD_FIELD.split(",");

            for (var j = 0; j < childFields.length; j++)
            {
                $("#" + childFields[j]).val(valuesString);
            }
        } else if (viewType == "SEARCH-VIEW") {
            //  alert("tbid::"+tbid);
            $("#" + tbid).val(valuesString);

            if (valuesString.split(",").length > 1 && selectedData.length > 1)
            {
                //$("#ddw"+rowid).;   
                +$("#ddw" + rowid).val("IN");

            }

        } else if (viewType == "TABLE-VIEW") {
            $("#" + tbid).val(valuesString);
        }
    }


    if (ddwId == "DDW_MM_DESCRIPTOR") {
        getDescriptorImage();

    }
    $("#dddw").dialog('close');



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