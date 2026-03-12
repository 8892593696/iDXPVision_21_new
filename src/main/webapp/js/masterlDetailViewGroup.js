// User Management
var labelObject = {};
labelObject = {};
try {
    labelObject = JSON.parse($("#labelObjectHidden").val());
} catch (e) {

}
var masterGrid = "";
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



function populategridForm(gridId, editable, row, urlFlag) {
    var role = "";
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
    var buttonlabel = editable === "N" ? "Register" : "Update";
    var masterRowData = $("#" + masterGridId).jqxGrid('getrowdata', row);
    buttonlabel = labelObject[buttonlabel] != null ? labelObject[buttonlabel] : buttonlabel;
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
            var jsResponse = response.formobj;
            var formTable = "<table id='usertable' class='visionMasterDetailForm'>";
            var jsResponseObj;
            var man_ind;
            var init_value = "";
            var displayType = "";
            var tb_property = "";
            var count = 0;
            var man_ind = "";
            var dateIds = [];
            var fieldDepParam = "", fieldType = "", dataType = "", maxLength = "", blurFunction = "", regexPattern = "";
            for (var i = 0; i < jsResponse.length; i++) {
                jsResponseObj = jsResponse[i];

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
                    jsResponseObj.COL_VALUE = "";
                }
                if (jsResponseObj.COL_INIT_VAL == null) {
                    init_value = "";
                } else {
                    init_value = jsResponseObj.COL_INIT_VAL;
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
                if (init_value && displayType == 'DISP_ONLY') {
                    jsResponseObj.COL_VALUE = init_value;
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
                    } else
                    {
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer' id= 'reportTo' src='images/iDXPUI5SearchDropdown.png' style = \"display:none\" "
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";
                    }

                    if (colname == 'REPORT_TO' && role != null && role != '' 
                            && role != 'undefined' && role.indexOf("REQUESTOR") > -1)
                    {
                        fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer' id= 'reportTo' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";

                    }else if (colname == 'REPORT_TO')
                    {
                       fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
                        tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' style='cursor:pointer;display:none;' id= 'reportTo' src='images/iDXPUI5SearchDropdown.png'"
                                + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";
  
                    }


                    //visionDropdown('DDW_INSTANCE_UM','','GRID-VIEW','MM_MASTER_UM_USER_DETAILS','INSTANCE','0')
//                    fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
//                    tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' src='images/iDXPUI5SearchDropdown.png'"
//                            + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";
                }
                if (jsResponseObj.COL_FORM_VIEW_FLAG == 'N') {
                    //   if (displayType == 'INV') {
                    formTable += "<td style='display:none' >"
                            + (man_ind == "Y" ? "<span style='color:red'>" : "") + jsResponseObj.COL_LABEL + "</span>"
                            + "</td>";
                    formTable += "<td  style='display:none' >";
                    if (fieldType == 'L') {
                        if (editable == 'Y') {
                            formTable += "<select data-value='" + jsResponseObj.COL_VALUE + "' value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {
                            formTable += "<select  data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {


                        formTable += "<input " + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled" : "") + "  value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "'  data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "'";
                        formTable += " id='" + jsResponseObj.COL_NAME + "'" + "init_value ='" + jsResponseObj.COL_INIT_VAL + "' type='text'/>" + tb_property;
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
                            formTable += "<select data-value='" + jsResponseObj.COL_VALUE + "' value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {


                            formTable += "<select data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {

                        formTable += "<input   class ='visionInputDisable' value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' disabled='disabled'  " + "init_value ='" + jsResponseObj.COL_INIT_VAL + "' type='text'/>"

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
                            formTable += "<select data-value='" + jsResponseObj.COL_VALUE + "' value='" + jsResponseObj.COL_VALUE + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        } else {
                            formTable += "<select data-regex='" + jsResponseObj.COL_REGEX_ID + "' "
                                    + "data-label='" + jsResponseObj.COL_LABEL + "' id='" + jsResponseObj.COL_NAME + "' >" + jsResponseObj.lovoptions + "</select>";
                        }
                    } else {
                        if (jsResponseObj.COL_NAME == 'USER_NAME' && editable == 'Y') {
                            formTable += "<input class ='visionInputDisable' disabled=disabled  value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "'" + "init_value ='" + jsResponseObj.COL_INIT_VAL + "' type='text'/>"
                                    + tb_property;
                        } else if (jsResponseObj.COL_NAME == 'USER_NAME') {
                            formTable += "<input  onblur=isUserAvailable('" + jsResponseObj.COL_VALUE + "') value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' " + "init_value ='" + jsResponseObj.COL_INIT_VAL + "' type='text'/>"
                                    + tb_property;
                        } else {
                            formTable += "<input " + blurFunction + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled" : "") + " value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "'" + "init_value ='" + jsResponseObj.COL_INIT_VAL + "' type='text'/>"
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

            $("#usertable select").each(function () {
                $(this).removeAttr('selected');
                if ($(this).attr('data-value') != null) {
                    $(this).val($(this).attr('data-value'));
                } else {
                    $(this).prop('selectedIndex', 0);
                }
            });
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
                    $("#" + childGridId).jqxGrid(gridConfigObj);
                    //$("#" + childGridId).jqxGrid('updatebounddata');
                    // alert("currentTabId:::"+currentTabId+"::::"+childGridData.gridOperation);
//           $("#" + childGridId + "Icon").html(childGridData.gridOperation);
                    $("#" + childGridId).on('celldoubleclick', function (event) {
                        var args = event.args;
                        var dataField = args.datafield;
                        var dataField1 = args.text;
                        var rowIndex = args.rowindex;
                        var cellValue = args.value;
                        var isEditable = $("#" + childGridId).jqxGrid('getcolumnproperty', dataField, 'editable');
                        console.log("isEditable::::" + isEditable)
                        if (!isEditable) {
                            var column = $("#" + childGridId).jqxGrid('getcolumn', event.args.datafield).text;
                            popupedit(column, cellValue);
                        }

                    });
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
            var textboxes = $('#usertable').find('input');
            validateReportTo(textboxes);
            $("#formView").dialog({resizable: false,
                title: (labelObject['Form View'] != null ? labelObject['Form View'] : 'Form View'),
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
                            var col, isman, iserror = false, label = false;
                            //validateReportTo(textboxes);
                            textboxes.each(function () {
                                //col = this.attr('id');

                                col = this.id;

                                isman = $("#" + col).attr('data-man');
                                label = $("#" + col).attr('data-label');

                                if (this.value.length == 0 && isman == 'M') {
                                    //do something here
                                    if (!init_value) {
                                        iserror = true;
                                        errorMessage("#" + col + "_disp", "Please fill " + label);
                                    } else {
//                                        this.value = init_value;
                                    }
                                } else {
                                    $("#" + col + "_disp").html("");
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
                                var role = $("#ROLE_ID").val();
                                if (role != null && role != '' && role != 'undefined' && role.indexOf("REQUESTOR") > -1) {
                                    if ($("#REPORT_TO").val() == '') {
                                        $("#dialog").html((labelObject['Report To Should not be empty'] != null ? labelObject['Report To Should not be empty'] : 'Report To Should not be empty'));
                                        $("#dialog").dialog({resizable: false,
                                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                            modal: true,
                                            height: 120,
                                            minWidth: 300,
                                            maxWidth: 'auto',
                                            fluid: true,
                                            buttons: {
                                                Ok: function () {

                                                    $('#updateUserInfo').attr('disabled', 'disabled');
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
                                        iserror = true;
                                        //nirmala

                                    }
                                }
                                jsobject[col] = this.value;
                            });
                            if (!iserror) {
                                console.log('griddata::' + JSON.stringify(jsobject));
                                var userDataUpdateFlag = 'N';
                                var url = "createUser";
                                if (editable == 'Y') {
                                    url = "updateUser";
                                    userDataUpdateFlag = 'Y';
                                }
                                if (urlFlag == 'Y') {
                                    url = "updateTxmnyUser";
                                }
                                $.ajax({
                                    type: "post",
                                    traditional: true,
                                    dataType: 'json',
                                    cache: false,
                                    url: url,
                                    data: {
                                        griddata: JSON.stringify(jsobject),
                                        rowData: JSON.stringify(editRowData),
                                        userDataUpdateFlag: userDataUpdateFlag
                                    },
                                    success: function (response) {

                                        $("#dialog").text(response.message);
                                        $("#dialog").dialog({resizable: false,
                                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                            modal: true,
                                            height: 120,
                                            minWidth: 350,
                                            maxWidth: 'auto',
                                            fluid: true,
                                            buttons: [{
                                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                                    click: function () {

//refreshGridData(gridId);
                                                        if (url == 'updateUser') {
                                                            $("#" + gridId).jqxGrid('clearselection');
                                                            refreshGridData(gridId);
                                                        }
                                                        refreshGridData(gridId);
                                                        $(this).html("");
                                                        $(this).dialog("close");
                                                        $(this).dialog("destroy");
                                                        $('#formView').html("");
                                                        $('#formView').dialog("close");
                                                        $('#formView').dialog("destroy");
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
                                        if (response.status == 1) {

                                        }

                                    },
                                    error: function (e) {
                                        sessionTimeout(e);
                                    }

                                });
                            }
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
            $("#ui-datepicker-div").addClass("ui-datepickerAdmin");

        },
        error: function (e) {
            sessionTimeout(e);
        }

    });
}

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
function unlockUser(gridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var userList = [];
    var userObj;
    var rowData = "";
    var count = 0;
    var selectedrowindexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    var totalRowIndex = selectedrowindexes.length;
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
        if (rowData != null) {
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
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: 120,
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
        },
        error: function (e) {
            console.log("Error::" + e);
        }

    });
}
function resetPassword(gridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedrowindexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    var userList = [];
    var userObj;
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
        var rowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
//        userObj = new Object();
//        userObj.username = rowData.USER_NAME;
//        userObj.persid = rowData.PERS_ID;
//        userObj.emailid = rowData.EMAIL;
//        userObj.dob = rowData.DOB;
        if (rowData != null) {
            userList.push(rowData);
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
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                height: 120,
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
        },
        error: function (e) {

        }

    });
}

// User Management

var childOldData = {};
var tableNames = {};

//    $("#" + gridId + "HID").val("UPDATE");
//    var jsonData = {};
//    jsonData = getGridResults(gridId);
//    getTabData(jsonData['childTabIndex'], jsonData['masterGridId'], jsonData['selectedRowData'], jsonData['childLevelTab'], jsonData['currentTab']);

function refreshGridData(gridId, filterFlag) {
    // ravi start
    // var contentTabId = $("#" + gridId).closest(".jqx-splitter-panel").attr("id");
    var contentTabId = $("#" + gridId).closest("div [id^=level]").attr("id");
    if (contentTabId == "level1TabId" && childChangeflag) {

        var gridCount = $("#level1TabId").find(".jqx-grid").length;
        if (gridCount > 1) {

            var childGrids = $("#level1TabId").find(".jqx-grid");
            var childGrid1 = childGrids[0].id;
            var childGrid2 = childGrids[1].id;
            if (gridId == childGrid1 && childGrid1Changeflag) {
                askConfirmationOnRefresh(gridId, arguments.callee);
                return false;
            } else if (gridId == childGrid2 && childGrid2Changeflag) {
                askConfirmationOnRefresh(gridId, arguments.callee);
                return false;
            }

        } else {
            askConfirmationOnRefresh(gridId, arguments.callee);
            return false;
        }
        // askConfirmationOnRefresh(gridId, arguments.callee)

    } else if (contentTabId == "levelTabId" && changeflag || childChangeflag) {
        askConfirmationOnRefresh(gridId, arguments.callee)
        return false;
    } else if (contentTabId == null) {
        askConfirmationOnRefresh(gridId, arguments.callee)
        return false;
    }

//    if (changeflag) {
//        askConfirmationOnRefresh(gridId, arguments.callee)
//        return false;
//    }

    // ravi end


    $("#" + gridId).jqxGrid({showfilterrow: true});
//    $('#' + gridId).jqxGrid('updatebounddata');
//    $("#" + gridId).jqxGrid('updatebounddata', 'cells');
    if (filterFlag != 'N') {
        try {
            $("#" + gridId).jqxGrid('clearfilters');
        } catch (e) {
        }
    }


    try {
        $('#' + gridId).jqxGrid('updatebounddata');
//        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
        $("#" + gridId).jqxGrid('clearselection');
    } catch (e) {
    }

    // ravi start
    if (contentTabId == "level1TabId" && childChangeflag) {
        var gridCount = $("#level1TabId").find(".jqx-grid").length;
        if (gridCount > 1) {

            var childGrids = $("#level1TabId").find(".jqx-grid");
            var childGrid1 = childGrids[0].id;
            var childGrid2 = childGrids[1].id;
            if (gridId == childGrid1 && childGrid1Changeflag) {
                childGrid1Changeflag = false
            } else if (gridId == childGrid2 && childGrid2Changeflag) {
                childGrid2Changeflag = false
            }
            if (!childGrid1Changeflag && !childGrid2Changeflag) {
                childChangeflag = false;
            }


        } else {
            childChangeflag = false
        }
    } else if (contentTabId == "levelTabId" && changeflag || childChangeflag) {
        changeflag = false;
        childChangeflag = false;
    } else if (contentTabId == null) {
        changeflag = false;
    }
    // ravi end

}
function gridoperations(gridOpId, operationName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    // ravi start
    checkChanges(gridOpId);
    if ($('#level1TabId').hasClass("jqx-tabs")) {

        var selectedItem = $('#level1TabId').jqxTabs('selectedItem');
        var tabTitle = $('#level1TabId').jqxTabs('getTitleAt', selectedItem);
        var onclickfunction = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("onclick");
        var unselectedChildTabId = onclickfunction.substring(onclickfunction.indexOf("(") + 2, onclickfunction.indexOf(",")).replace("'", "")

    } else {
        try {
            var childTabId = $('#level1TabId').find('div.jqx-tabs').attr("id");
            var selectedItem = $('#' + childTabId).jqxTabs('selectedItem');
            var tabTitle = $('#' + childTabId).jqxTabs('getTitleAt', selectedItem);
            var unselectedChildTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
        } catch (e) {

        }
    }


    checkChanges(unselectedChildTabId);

    // ravi end

    var currentGridId = gridOpId;
    var selectedrowindexes = $("#" + currentGridId).jqxGrid('selectedrowindexes');
    if (operationName == 'runAnalysis')
    {// For Delate
        runAnalysis(currentGridId);
    } else if (operationName == 'massValidate')
    {
        masterDataValidate(currentGridId);
    } else if (operationName == 'massDHProcess')
    {
        processDataDH(currentGridId);
    } else if (operationName == 'massPPRSearch')
    {
        processPPRSearch(currentGridId);
    } else if (operationName == 'duplCheckFlag')
    {
        generateDescription(currentGridId);
    } else if (operationName == 'runQCToolFlag')
    {
        runQCTool(currentGridId);
    } else if (operationName == 'bulkCreate')
    {
        saveBulkData(currentGridId);
    } else if (operationName == 'MergeSpirDuplicates')
    {
        processMergeSpirDuplicates(currentGridId);
    } else if (operationName == 'interfaceCalling')
    {
        processGridOperations(currentGridId);
    } else if (operationName == 'clearStagingTable')
    {
        clearStagingView(currentGridId);
    } else if (selectedrowindexes.length == 0 && operationName != 'add'
            && operationName != 'umupdate'
            && operationName != 'gridformInsert'
            && operationName != 'umrefresh'
            && operationName != 'refresh'
            && operationName != 'taxonomyformInsert'
            && operationName != 'taxonomyDrInsert'
            && operationName != 'txmnyAppProcess'
            && operationName != 'txmnyDridProcess'
            && operationName != 'txmnyDridAppProcess'
            && operationName != 'txmnyDridStngProcess'
            ) {
        var message = "Please select row(s) to process";
        message = labelObject[message] != null ? labelObject[message] : message;
        $("#dialog").html(message);
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 120,
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
    } else if (operationName == 'unlock') {// For Delate

        unlockUser(currentGridId);
        refreshGridData(currentGridId, "N");
    } else if (operationName == 'resetuser')
    {// For Delate
        resetPassword(currentGridId);
    } else if (operationName == 'delete')
    {// For Delate
        getDeleteConfirmMessage(currentGridId);
    } else if (operationName == 'refresh' || operationName == 'umrefresh') {// For Refresh
        refreshGridData(currentGridId);
        //  gridDataOperation(currentGridId, operationName);
    } else if (operationName == 'update' || operationName == 'umupdate') {//For  Update
        var lasteditedfield = $('#' + gridOpId).attr('data-last-ed-field');
        var lasteditedrow = $('#' + gridOpId).attr('data-last-ed-row');
        $('#' + gridOpId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
        gridDataOperation(currentGridId, operationName);
    } else if (operationName == 'gridformInsert') {
        populategridForm(currentGridId);
    } else if (operationName == 'add') {  // for insert
        insertRow(currentGridId, 'GRID-VIEW', currentGridId)

    } else if (operationName == 'fillDown') {  // for fillDown
        populateFillDownData(currentGridId);
    } else if (operationName == 'bulkfillDown') {  // for fillDown
        populateClusterBulkFillDownData(currentGridId);
    } else if (operationName == 'undobulkfillDown') {  // for fillDown
        populateClusterBulkUndoFillDownData(currentGridId);
    } else if (operationName == 'deleteCls') {// For DelatetaxonomyClass
        getTxmnyDeleteConfirmMessage(currentGridId, operationName);
    } else if (operationName == 'taxonomyformInsert') {// for insert new class template
        populateTaxonomyForm(currentGridId);
    } else if (operationName == 'taxonomyformModify') {// for modify template
        var selectedrowindexes = $("#" + currentGridId).jqxGrid('getselectedrowindexes');
        var urlFlag = 'Y';
        populategridForm(currentGridId, 'Y', selectedrowindexes, urlFlag);
    } else if (operationName == 'taxonomyDrInsert') {//for dr template
        //var currentGridId = 'MM_MASTER_TXMNY_DRID_DATA'; 
        populateTaxonomyForm(currentGridId);
    } else if (operationName == 'txmnyAppProcess') {// for process button
        taxonomyProcess(currentGridId);
    } else if (operationName == 'txmnyDridProcess') {// for Dridprocess button
        taxonomyDridProcess(currentGridId);
    } else if (operationName == 'txmnyDridAppProcess') {// for DridAppprocess button
        var processType = "Approved";
        taxonomyDridProcess(currentGridId, processType);
    } else if (operationName == 'txmnyDridStngProcess') {// for DridAppprocess button
        var processType = "Staging";
        taxonomyDridProcess(currentGridId, processType);
    } else if (operationName == 'folderUpload') {// for folder upload button
        folderUpload(currentGridId);
    }


}
function gridValidate(gridId, operationName, selectedIndexes) {
    var resultObj = {};
    var validatioFlag = true;
    var errorMsg = "";
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    // var selectedrowindexes =  $("#"+gridId).jqxGrid('getselectedrowindexes');
    if (selectedIndexes != null && selectedIndexes.length != 0) {

        var totalRowIndex = selectedIndexes.length;
        var int = 0;
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
            if (selectedIndexes[i] != -1) {
                var rowData = $('#' + gridId).jqxGrid('getrowdata', selectedIndexes[i]);
                if (rowData != null && rowData.ROW_ID != null) {
                    if (rowData.ROW_ID == "") {
                        rowData[gridId + "_HIDDEN"] = "INSERT";
                    } else {
                        rowData[gridId + "_HIDDEN"] = "UPDATE";
                    }

                }
                var role = "";
                try {
                    role = rowData['ROLE_ID'];
                } catch (e) {
                }


                if (role != null && role != '' && role.lastIndexOf("REQUESTOR") > -1 && (rowData['REPORT_TO'] == null || rowData['REPORT_TO'] == '')) {

                    errorMsg = "Report To Should not be empty"
                    errorMsg = labelObject[errorMsg] != null ? labelObject[errorMsg] : errorMsg;
                    validatioFlag = false;

                }

                if ($("#defaultValues").val() != "" && operationName == 'UPDATE')
                {
                    var defaultVals = $("#defaultValues").val();
                    var gridid = defaultVals.toString().split("::");
                    var invalidcols = defaultVals.toString().split("::")[1].toString().split(",");

                    for (var j = 0; j < invalidcols.length; j++)
                    {
                        delete  rowData[invalidcols[j]];
                    }
                }
                if (rowData != null) {
                    resultObj = genericGridValidatin(JSON.stringify(rowData), gridId);
                }


                obj = JSON.parse(resultObj);
                if (obj.errorCount != 0) {
                    errorMsg = obj.errorMsg;
                    validatioFlag = false;
                    break;
                } else {
                    continue;
                }
            }
//        else{
//            selectedIndexes[i]
//        }
        }
        if (validatioFlag) {
            // write the code for no changes to save
            processClusterRequest(selectedIndexes, operationName, gridId);

        } else {

            genericGridValidationMessage(errorMsg, gridId);
        }
    } else if (operationName == 'refresh') {
        refreshGridData(gridId);
    } else
    {
        var results = "Please Select Record";
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

        // error mesg to throw for select records
    }

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
function gridDataOperation(gridId, operationName) {
    var selectedrowindexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
    var rowsLength = selectedrowindexes.length;
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    if (operationName == 'update') {
        var selectedRow = "";
        var oldRow = "";
        var recordCount = 0;
        var keys = $("#" + gridId).jqxGrid('getrowdata');
        var lastSelectedRow = selectedrowindexes[rowsLength - 1];
        $("#" + gridId + "_Selected_row").remove();
        $("#clusterSelectedRows").append("<input type='hidden' id='" + gridId + "_Selected_row' value='" + lastSelectedRow + "'/>");
        for (var i = 0; i < rowsLength; i++) {
            if (selectedrowindexes[i] != -1) {
                selectedRow = $("#" + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
//            if (selectedRow[gridId + "_HIDDEN"] == 'INSERT') {
//                recordCount++;
//            } else {
                recordCount++;
                //}
            }
        }
    }
    if (recordCount == 0) {
        $("#dialog").html('No changes to save');
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            height: 120,
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
            beforeClose: function (event, ui) {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
    } else if (operationName == 'unlock') {// For Delate
        unlockUser(gridId);
    } else if (operationName == 'resetuser') {// For Delate
        resetPassword(gridId);
    } else if (operationName == 'delete') {// For Delate
        getDeleteConfirmMessage(gridId);
    } else if (operationName == 'refresh' || operationName == 'umrefresh') {// For Refresh
        refreshGridData(gridId);
// write code for refresh data
    } else {
        gridValidate(gridId, operationName, selectedrowindexes);

    }




//    }

}
function insertRow(gridId, dataView, currentGridId) {
    var selectedrowindex = $('#' + gridId).jqxGrid('selectedrowindex');
    var selectedRowData = $("#" + gridId).jqxGrid('getrowdata', selectedrowindex);
    var masterGrid, currentMasterRow, masterSelectedRow;
    var relationArrayStr = $("#relationArray").val();
    var relationFields = [];
    if (relationArrayStr != null && relationArrayStr != '') {
        relationFields = JSON.parse(relationArrayStr);
    }


    masterGrid = $("#" + gridId).attr('data-master-id');
    if (masterGrid != undefined) {
        currentMasterRow = $("#" + masterGrid).attr('data-last-ed-row');
        masterSelectedRow = $("#" + masterGrid).jqxGrid('getrowdata', currentMasterRow);
    }
    if (dataView == "GRID-VIEW")
    {

        $("#" + gridId).jqxGrid('addrow', null, row, 0);
        //  $('#' + gridId + '_Add').css("display", "none");
        var sourceex = $("#" + gridId).jqxGrid('source');
        var dataFields = [];
        dataFields = sourceex._source.datafields;
        var row = {};
        var editableFlag = true;
        var defaultValuesObj = {};
        var defaultValues = $("#" + gridId + "_defaultValues").val();
        if (defaultValues != null && defaultValues != '' && defaultValues.indexOf("{") > -1)
        {
            defaultValuesObj = JSON.parse(defaultValues);
        } else if (defaultValues != null && defaultValues != '') {
            var defaultValuesArray = defaultValues.split(",");
            if (defaultValuesArray != null && defaultValuesArray.length != 0) {
                for (var i = 0; i < defaultValuesArray.length; i++) {
                    var defaultValResult = defaultValuesArray[i];
                    if (defaultValResult != null && defaultValResult != '') {
                        var defaultResult = defaultValResult.split(":");
                        if (defaultResult != null && defaultResult.length != 0) {
                            if (defaultResult[0] != null && defaultResult[0] != ''
                                    && defaultResult[1] != null && defaultResult[1] != '') {
                                defaultValuesObj[defaultResult[0]] = defaultResult[1];

                            }
                        }

                    }

                }
            }

        }
        var itemObjDefaultValuesStr = $("#itemObjDefaultValues").val();
        for (var key in dataFields) {
            var value = dataFields[key];
            var defaultValueFlag = false;
            if (value != null && value['name'] != null && value['name'] != '') {
//        obj = dataFeilds[i];
                var columnName = value['name'];
                var coltype = value['type'];
                editableFlag = true;
                var columnProp = $("#" + gridId).jqxGrid('getcolumn', columnName);
                if (columnProp != null && columnProp.editable != null) {
                    editableFlag = columnProp.editable;
                }
                if (columnName != null && columnName != '' && columnName == 'BKONT')
                {
                    row[columnName] = "01";
                }

                if (defaultValuesObj != null
                        && !jQuery.isEmptyObject(defaultValuesObj)
                        && defaultValuesObj[columnName] != null && defaultValuesObj[columnName] != '') {
                    row[columnName] = defaultValuesObj[columnName];
                    defaultValueFlag = true;
                } else
                if (itemObjDefaultValuesStr != null && itemObjDefaultValuesStr != '') {
                    var itemObjDefaultValues = JSON.parse(itemObjDefaultValuesStr);
                    if (itemObjDefaultValues != null && !jQuery.isEmptyObject(itemObjDefaultValues)) {
                        if (itemObjDefaultValues[columnName] != null && itemObjDefaultValues[columnName] != '') {
                            row[columnName] = itemObjDefaultValues[columnName];
                            defaultValueFlag = true;
                        }
                    }
                }

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
//                    else if (selectedRowData[columnName] != null) {
//                        row[columnName] = selectedRowData[columnName];
//                    } 
                    else if (columnName == 'INSTANCE' || columnName == 'PLANT' ||
                            columnName == 'BUSINESS_UNIT' || columnName == 'MANDT') {
                        if ($("#" + gridId).jqxGrid('getcolumnproperty', columnName, 'hidden'))
                        {
                            row[columnName] = $("#plant").val();
                        }
//                        else {
//                            row[columnName] = "";
//                        }
                    } else if (columnName == 'REGION') {
                        if ($("#" + gridId).jqxGrid('getcolumnproperty', columnName, 'hidden')) {
                            row[columnName] = $("#region").val();
                        }
//                        else {
//                            row[columnName] = "";
//                        }
                    } else if (columnName == 'LOCALE') {
                        if ($("#" + gridId).jqxGrid('getcolumnproperty', columnName, 'hidden'))
                        {
                            row[columnName] = $("#locale").val();
                        }
//                        else {
//                            row[columnName] = "";
//                        }
                    } else
                    {
                        if (coltype == 'bool') {
                            row[columnName] = false;
                        } else
                        {
                            if (!defaultValueFlag) {
                                row[columnName] = "";
                            }
//                            row[columnName] = "";
                        }
                    }

                } else
                {
                    var ishidden = $("#" + gridId).jqxGrid('getcolumnproperty', columnName, 'hidden');
                    if (ishidden) {
                        if (columnName == 'CREATE_DATE'
                                || columnName == 'EXPIRY_DATE'
                                || columnName == 'ACTIVATE_DATE'
                                || columnName == 'EDIT_DATE') {
                            row[columnName] = $.datepicker.formatDate('mm-dd-yy', new Date());
                        }
                        if (columnName == 'CREATE_BY' || columnName == 'EDIT_BY')
                        {
                            row[columnName] = $("#user").val();
                        } else {
                            if (masterGrid != undefined) {
//                                row[columnName] = masterSelectedRow[columnName];
                            }
                        }
                    } else if (coltype == 'bool') {
                        row[columnName] = false;
                    } else if (masterGrid != undefined) {
//                        row[columnName] = masterSelectedRow[columnName];
                    } else
                    {
                        if (!defaultValueFlag) {
                            row[columnName] = "";
                        }
//                        row[columnName] = "";
                    }
                }

                if (columnName != null && columnName != '' && columnName == gridId + "_HIDDEN") {
                    row[columnName] = "INSERT";
                }
                if (masterSelectedRow != null
                        && !jQuery.isEmptyObject(masterSelectedRow)
                        && relationFields != null
                        && !jQuery.isEmptyObject(relationFields)) {
                    for (var i = 0; i < relationFields.length; i++) {
                        var relationObj = relationFields[i];
                        if (relationObj != null && !jQuery.isEmptyObject(relationObj)) {
                            if (columnName != null && columnName === relationObj['CHILD_FIELD']) {
                                row[columnName] = masterSelectedRow[relationObj['PARENT_FIELD']];
                            }
                        }

                    }
                }
            }
        }// loop
        var data = $("#" + gridId).jqxGrid('getrowdata', 0);
        var tabOperationFlag = false;
        if (data == null)
        {
            $("#" + gridId).jqxGrid({showfilterrow: false});
            //  $("#" + gridId).jqxGrid('clearfilters');
            var index = $("#" + gridId).jqxGrid('getrowboundindex', 1);
            index = index + 1;
            $("#" + gridId).jqxGrid('selectrow', index);
            tabOperationFlag = true;
        } else {
            $("#" + gridId).jqxGrid({showfilterrow: false});
            // $("#" + gridId).jqxGrid('clearfilters');
            var index = $("#" + gridId).jqxGrid('getrowboundindex', 0);
            $("#" + gridId).jqxGrid('selectrow', index);
            var tabHidden = currentGridId + "_HIDDEN";
            if (data[tabHidden] != null && data[tabHidden] != '' && data[tabHidden] != 'INSERT') {
                tabOperationFlag = true;
            }
        }
        if (tabOperationFlag) {
            var commit = $("#" + gridId).jqxGrid('addrow', null, row, 0);
            $("#" + gridId).jqxGrid('selectrow', 0);
        }
        //childOldData.unshift(row);
        //  $('#' + gridId + '_Add').css("display", "none");

    }

}
function getDeleteConfirmMessage(gridId) {
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
                    processClusterRequest(selectedrowindexes, "delete", gridId);

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
// Update Attachments in Grid level @Arshad.
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
//@arshad to show pdf end
//showing image in Grid
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

// @arshad Cluster for fetching attach box with attachment start
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

//@atshad spir document

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
// @arshad select attacment tab end

// @upload attachment start 
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
//@arshad upload attachments end

//@arshad upload attachments end
//@arshad 
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


// @arshad upload attach document spir end





//@arshad tp show spir pdf start

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

//@arshad to show spir pdf end 




//@arshad to show attach image spir start


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
//@arshad to show attach image spir end





//@arshad  upload attach start


//@arshad update
// Update Attachments in Grid level @Arshad. spir
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
function convert(str) {
    var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
    //return [date.getFullYear(), mnth, day].join("-");
    return [day, mnth, date.getFullYear()].join("-");
}

//@arshad to update end spir

function populateFillDownData(selectedGridId) {
    var labelObj = {};
    // labelObject = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

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

//                        var selectedColumnEditable = $('#' + gridId).jqxGrid('getcolumnproperty', selectedColumnName, 'editable');
            console.log("fillDownColumns:::" + fillDownColumns);
            if (fillDownColumns != null && (fillDownColumns == 'ALL' || fillDownColumns.indexOf(selectedColumnName) > -1)) {
                var selectColumnValue = $('#' + gridId).jqxGrid('getcellvalue', selectedRowIndex, selectedColumnName);
                if (selectColumnValue != null && selectColumnValue != '') {

                } else {
                    selectColumnValue = "";
                }
//                if (selectColumnValue != null && selectColumnValue != '') {
                var fillDownDependencyColumns = "";
                var fillDownDependencyColumnsStr = $("#currentSelectFillDownDependencyColumns").val();
                var selectedColumnStr = selectedColumnName + ":";
                if (fillDownDependencyColumnsStr != null && fillDownDependencyColumnsStr != '' && fillDownDependencyColumnsStr.indexOf(selectedColumnStr) > -1) {
                    var fillDownDependencyColumnsStr = fillDownDependencyColumnsStr.substring(fillDownDependencyColumnsStr.indexOf(selectedColumnStr));
                    fillDownDependencyColumnsStr = fillDownDependencyColumnsStr.split(":")[1];
                    if (fillDownDependencyColumnsStr != null && fillDownDependencyColumnsStr.indexOf(";") > -1) {
                        fillDownDependencyColumns = fillDownDependencyColumnsStr.substring(0, fillDownDependencyColumnsStr.indexOf(";"));
                    } else {
                        fillDownDependencyColumns = fillDownDependencyColumnsStr;
                    }

                }

                var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
                console.log("selectedRowIndexes:::" + selectedRowIndexes);
                if (selectedRowIndexes != null && selectedRowIndexes.length != 0) {
                    var count = 0;
                    var int = 0;
                    var totalRowIndex = selectedRowIndexes.length;
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
                        if (selectedRowIndexes[i] != -1 && selectedRowIndexes[i] != selectedRowIndex) {
                            $('#' + gridId).jqxGrid('setcellvalue', selectedRowIndexes[i], selectedColumnName, selectColumnValue);
                            if (fillDownDependencyColumns != null && fillDownDependencyColumns != '') {
                                var fillDownDependencyColumnsArray = fillDownDependencyColumns.split(",");
                                if (fillDownDependencyColumnsArray != null && fillDownDependencyColumnsArray.length > 0) {
                                    var fillDownDependencyColumnsLength = fillDownDependencyColumnsArray.length;
                                    for (var j = 0; j < fillDownDependencyColumnsLength; j++) {
                                        var getCellValue = $('#' + gridId).jqxGrid('getcellvalue', selectedRowIndex, fillDownDependencyColumnsArray[j]);
                                        $('#' + gridId).jqxGrid('setcellvalue', selectedRowIndexes[i], fillDownDependencyColumnsArray[j], getCellValue);
                                    }
                                }
                            }
                        }
                    }//for

                }
//                }

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

function importTemplate(gridId)
{
    // var gridId = $('#gridId').val();
    var columnHide = "";

    columnHide = $("#" + gridId + "_massColumnHide").val();
    if (!(columnHide != null && columnHide != '')) {
        columnHide = $("#massColumnHide").val();
    }

    var exportJson = {};
    console.log("fields array:::" + fieldsdata);
    exportJson['headers'] = fieldsdata;
    exportJson['gridId'] = gridId;
    exportJson['columnHide'] = columnHide;
    console.log("jsondata:::::" + JSON.stringify(exportJson));
    $('#importDataHidden').val(JSON.stringify(exportJson));
    $("#importData").attr("action", "importXlsxData");
    $("#importData").submit();
//                                                   

}

function validateData(gridId)
{

    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

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

        console.log("gfjhfhshfs" + JSON.stringify(data));
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

                                //                              else
                                //   {
                                if (batchId != null && batchId != '' && batchId != 'undefined')
                                {


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
                                                $("#wait").css("display", "none");
                                                $("body").css("pointer-events", "auto");

                                                $("#logoutDailog").html((labelObject["Please review the comments(Error log)."] != null ? labelObject["Please review the comments(Error log)."] : "Please review the comments(Error log)."));
                                                $("#logoutDailog").dialog({resizable: false,
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
                        $("#wait").css("display", "none");
                        $("body").css("pointer-events", "auto");

                        $("#logoutDailog").html((labelObject["Please review the comments(Error log)."] != null ? labelObject["Please review the comments(Error log)."] : "Please review the comments(Error log)."));
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


    return resultObj;


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

function gridValidationMessage(msg) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var errorMsg = "";
    if (msg != null)
    {
        errorMsg = msg;
    } else
    {
        errorMsg = "Please review the comments(Error log).";
        errorMsg = labelObject[errorMsg] != null ? labelObject[errorMsg] : errorMsg;
    }

    $("#logoutDailog").html((labelObject[errorMsg] != null ? labelObject[errorMsg] : errorMsg));
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


}

function processRequest1(selectedRowsData, defaultValues, formId, tableName, panelId) {
    var gridId = $("#gridId").val();



    if (selectedRowsData != null && selectedRowsData.length != 0) {
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
//                            $("#" + gridId).jqxGrid('clearfilters');
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
    }

}




function saveBulkData(gridId)
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
                                                $("#wait").css("display", "none");
                                                $("body").css("pointer-events", "auto");
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
                        $("#wait").css("display", "none");
                        $("body").css("pointer-events", "auto");
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
        var masterGridId = $("#mastergridid").val();
    } catch (e) {

    }
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
                $("#formView").html("");
                $("#formView").html(formview);
            }
            if (formNameLabel != null && formNameLabel != '' && formNameLabel != undefined && formNameLabel != "null") {
                var label = formNameLabel;
            } else {
                label = "Registration Form";
            }
            $("#formView").dialog({resizable: false,
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
                                        $('#formView').html("");
                                        $('#formView').dialog("close");
                                        $('#formView').dialog("destroy");
                                    }
                                },
                                error: function (e) {
                                    sessionTimeout(e);
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
function popupMessage(Message) {
    stopLoader();
    $("#wait").css("display", "none");
    $("body").css("pointer-events", "auto");
    var setWidth;
    $("#dialog").dialog({resizable: false,
        modal: true,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        width: dialogWidthResize(Message, setWidth),
        height: 'auto',
        minHeight: 'auto',
        fluid: true,

        buttons: {
            Ok: function () {
                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");


            }
        },
        open: function () {
            $(this).html(Message);
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