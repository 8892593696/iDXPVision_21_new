/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.chckValues = new Array();


//
//function uomBycharacterstic(propertyid,rowid) {
//    //alert(propertyid);
//
//
//    $.ajax({
//        type: "POST",
//        url: 'charactersticdropDown',
//        data: {
//            'rowid': 155,
//            'propertyid': propertyid
//        },
//        traditional: true, cache: false,
//        success: function (response) {
////            alert('Success: ' + JSON.stringify(response));
//            $("#dddw").empty();
//            $("#dddw").append("<input style='float:right' class='clear_filter' type='button' value='Clear' id='ddClear'/></div><div id='ddGrid'></div>");
//
//            var source =
//                    {
//                        localdata: response,
//                        datafields:
//                                [
//                                    {name: 'column1', type: 'string'},
//                                    {name: 'column2', type: 'string'},
//                                    {name: 'column3', type: 'string'}
//
//                                ],
//                        datatype: "JSON"
//                    };
//            var adapter = new $.jqx.dataAdapter(source);
//
//            $("#ddGrid").jqxGrid(
//                    {
//                        width: '100%',
//                        theme: 'energyblue',
//                        source: adapter,
//                        filterable: true,
//                        enabletooltips: true,
//                        showfilterrow: true,
//                        height: '360',
//                        //    showtoolbar:true,
//                        //   autoheight: true,
//                        //                                        autorowheight: true,
//                        columnsresize: true,
//                        sortable: true,
//                        columns: [
//                            {text: 'UoM', align: 'center', datafield: 'column1', width: "120", cellsalign: 'left'},
//                            {text: 'Description', align: 'center', datafield: 'column2', width: "255", cellsalign: 'left'},
//                            {text: 'uomid', align: 'center', datafield: 'column3', width: "255", cellsalign: 'left'}
//                        ]
//                    });
//
//            $('#ddClear').on('click', function () {
//                $('#ddGrid').jqxGrid('clearfilters');
//            });
//
//            $('#ddGrid').on('rowclick', function (event)
//            {
//                   var args = event.args;
//                var boundIndex = args.rowindex;
//                var col1Value = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "column1");
//                var col2Value = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "column2");
//                var col3Value = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "column3");
//                $('#MM_PROPERTIES').jqxGrid('setcellvalue', rowid, "uom", col2Value);
//                $('#MM_PROPERTIES').jqxGrid('setcellvalue', rowid, "uomid", col3Value);
//                $("#dddw").dialog('close');
//                
//            });
//
//
//
//            $("#dddw").css("overflow", "hidden");
//            $("#dddw").dialog({ resizable: false,
//                title: 'UoM',
//                height: 450,
//                width: 400,
//                modal: true
//
//            });
//            //console.log('Response::' + JSON.stringify(response));
//        },
//         error: function(e) {
//              //  alert(e.message)
//              
//              var meg=e.statusText;
//              var status=e.status;
//                if (meg.lastIndexOf("Session Timeout") > -1) {
//                       $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Session Timeout.</div></div>");
//        $("#logoutDailog").dialog({ resizable: false,
//        title: 'Message',
//        modal: true,
//        width: 270,
////        maxWidth: 'auto',
//        height: 135,
//        buttons: {
//            Ok: function() {
//                $(this).html("");
//                $(this).dialog("close");
//                $(this).dialog("destroy");
//
//               window.location.href="timeout";
//
//            }
//        },
//                        open:function () {
//                           //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");  
//                       
//                     }
//    });
//                }
//            }
//
//    });
//
//
//}
//function propertyHierarchy(rowid) {
//
//    console.log('rowid:' + rowid);
//    var children = $('#MM_PROPERTIES').jqxGrid('getcellvalue', rowid, "children");
//    var property = $('#MM_PROPERTIES').jqxGrid('getcellvalue', rowid, "property");
//    var uom = $('#MM_PROPERTIES').jqxGrid('getcellvalue', rowid, "uom");
//    var value = $('#MM_PROPERTIES').jqxGrid('getcellvalue', rowid, "value");
//    var jsChildArray = JSON.parse(children);
//    //{"value":"na","property":"HEIGHT","type":"string"}
//
//
//    $("#span" + rowid).removeClass('ui-icon-plus').addClass('ui-icon-minus');
//
//
//
//    var html_hier = "";
//    var splivalue = value.split('x');
//    html_hier = "<thead class='propertyhead'>"
//            + "<th class='headings-property propertyCol'> Property</th>"
//            + "<th class='headings-property valueCol'> Value </th>"
//            + "<th class='headings-property uomCol'>UoM</th>"
//            + "<th class='headings-property datatypeCol'>Data Type</th>"
//            + "</thead><tbody>";
//
//    var uomvalsplit;
//
//    var mandatoryclass = 'no-mandatory';
//    var baskettype = $("#baskettypehid1").val();
//    for (var i = 0; i < jsChildArray.length; i++)
//    {
//
//
//        jsChildArray[i].datatype = jsChildArray[i].datatype.toString().replace('_NUMBER', '');
//        jsChildArray[i].datatype = jsChildArray[i].datatype.toString().replace(/[_]/, ' ')
//        //alert('jsChildArray[i].mandatory:::'+jsChildArray[i].mandatory);
//        if (jsChildArray[i].mandatory == 'Y') {
//            mandatoryclass = 'mandatory';
//        }
//
//
//
//
//        try {
//
//            if (splivalue[i] != undefined)
//            {
//
//                splivalue[i] = splivalue[i].trim();
//                uomvalsplit = splivalue[i].split(' ');
//
//                if (uomvalsplit[0] == undefined)
//                {
//
//                    if (baskettype = 'Search View') {
//
//                        html_hier = html_hier + "<tr>"
//                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
//                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
//                                + " disabled='disabled' type='text' value=''/></td>"
//                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
//                                + " disabled='disabled' type='text' value=''/></td>"
//                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
//                                + " </tr>";
//
//
//                    }
//                    else {
//
//                        html_hier = html_hier + "<tr>"
//                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
//                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
//                                + " type='text' value=''/></td>"
//                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
//                                + " type='text' value=''/></td>"
//                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
//                                + " </tr>";
//                    }
//
//
//
//                }
//
//                else if (uomvalsplit[1] == undefined)
//                {
//
//
//                    if (baskettype = 'Search View') {
//                        html_hier = html_hier + "<tr>"
//                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
//                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
//                                + " disabled='disabled' type='text' value='" + uomvalsplit[0] + "'/></td>"
//                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
//                                + " disabled='disabled' type='text' value='N/A'/></td>"
//                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
//                                + " </tr>";
//
//
//
//                    } else {
//                        html_hier = html_hier + "<tr>"
//                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
//                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
//                                + " type='text' value='" + uomvalsplit[0] + "'/></td>"
//                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
//                                + " type='text' value='N/A'/></td>"
//                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
//                                + " </tr>";
//
//                    }
//                }
//                else {
//                    if (baskettype = 'Search View') {
//                        html_hier = html_hier + "<tr>"
//                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
//                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
//                                + " disabled='disabled' type='text' value='" + uomvalsplit[0] + "'/></td>"
//                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
//                                + " disabled='disabled' type='text' value='" + uomvalsplit[1] + "'/></td>"
//                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
//                                + " </tr>";
//
//
//                    } else {
//                        html_hier = html_hier + "<tr>"
//                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
//                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
//                                + " type='text' value='" + uomvalsplit[0] + "'/></td>"
//                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
//                                + " type='text' value='" + uomvalsplit[1] + "'/></td>"
//                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
//                                + " </tr>";
//                    }
//                }
//
//
//
//            }
//
//            else {
//
//                if (baskettype = 'Search View') {
//
//                    html_hier = html_hier + "<tr>"
//                            + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
//                            + " <td class='valueCol'><input disabled='disabled' class='valueCol-input jqx-input'  type='text' value='" + 0 + "'/></td>"
//                            + " <td class='uomCol'>  <input disabled='disabled' class='uomClass jqx-input'  "
//                            + " disabled='disabled' type='text'/></td>"
//                            + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
//                            + "</tr>";
//
//                } else {
//
//
//                    html_hier = html_hier + "<tr>"
//                            + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
//                            + " <td class='valueCol'><input  class='valueCol-input jqx-input'  type='text' value='" + 0 + "'/></td>"
//                            + " <td class='uomCol'>  <input  class='uomClass jqx-input'  "
//                            + " type='text'/></td>"
//                            + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
//                            + "</tr>";
//                }
//            }
//
//
//        }
//
//
//        catch (err) {
//
//        }
//
//
//
//
//    }
//    html_hier.replace(undefined, 0);
//
//    html_hier = "<table class='properties_tree' style='width:100%'>" + html_hier + "</tbody></table>";
//    //alert(html_hier);
//    $("#dialog").html(html_hier);
//    uomAutoComplete();
//    $("#dialog").dialog({ resizable: false,
//        modal: true,
//        height: 225,
//        title: property,
//        width: 600,
//        textAlign: 'center',
//        close: function (event, ui) {
//            $("#span" + rowid).removeClass('ui-icon-minus').addClass('ui-icon-plus');
//
//        },
//        buttons: {
//            Ok: function () {
//                $(this).dialog("close");
//                var propertyval = "NA";
//                $('table.properties_tree tbody tr').each(function () {
//                    if (propertyval == "NA") {
//
//                        propertyval = $(this).children('td').eq(1).find("input").val() + " " + $(this).children('td').eq(2).find("input").val();
//                    }
//                    else {
//                        propertyval = propertyval + " x " + $(this).children('td').eq(1).find("input").val() + " " + $(this).children('td').eq(2).find("input").val();
//                    }
//                    console.log('propertyval:' + propertyval);
//                });
//                // propertyval = propertyval.repl
//                if (baskettype != 'Search View') {
//                    $("#value" + rowid).val(propertyval);
//                    $('#MM_PROPERTIES').jqxGrid('setcellvalue', rowid, "value", propertyval);
//                }
//
//            }
//        },
//                        open:function () {
//                           //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");  
//                        
//                     }
//    });
//}

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
function hideTabsSearchView() {
    var baskettype = $("#baskettypehid1").val();
    if (baskettype == 'Search View')
    {
        $("#propertiesupdate").hide();
        //$("input[type='text']").css('display','none');
        $("input[type='button']").attr('disabled', 'disabled');
        $("input[type='checkbox']").attr('disabled', 'disabled');
        $("input[type='text']  ").attr('disabled', 'disabled');
        $('.mm_grid_icn').css('display', 'none');
        $('.srch_icn').css('display', 'none');
        $('#MM_DOCUMENTS_Update').css('display', 'none');
    }
}
//function propValKeyUp(tbid, rowid, type) {
//
////  $('#MM_PROPERTIES').jqxGrid('getcellvalue', rowid, 'value');
//
//    var datatype = $("#MM_PROPERTIES").jqxGrid('getcellvalue', rowid, 'datatype');
//
//    console.log('setting value::' + $("#" + tbid).val() + " fr row id" + rowid + " type:" + type);
//    delay(function () {
//
//        if (type == 'min')
//        {
//            $("#MM_PROPERTIES").jqxGrid('setcellvalue', rowid, 'value', $("#" + tbid).val() + "~" + $("#valuemax" + rowid).val());
//        }
//        else if (type == 'max')
//        {
//            $("#MM_PROPERTIES").jqxGrid('setcellvalue', rowid, 'value', $("#valuemin" + rowid).val() + "~" + $("#" + tbid).val());
//        }
//
//
//
//        else {
//
//
//            var val = $("#" + tbid).val();
//            var message = "";
//            var regex;
//            regex = /[a-zA-Z]/;
//            if (datatype == 'STRING_TYPE')
//            {
//                regex = /[a-zA-Z]/;
//                message = "Only Alphabets are allowed";
//            }
//            else if (datatype == 'MEASURE_NUMBER_TYPE')
//            {
//                regex = /^[0-9]*$/;
//                message = "Only Numeric Values are allowed";
//            }
//            else if (datatype == 'INTEGER_TYPE')
//            {
//                regex = /^[-|+]{0,1}[0-9]+$/;
//                message = "Only Integer values are allowed";
//            }
//            else if (datatype == 'MEASURE_RANGE_TYPE') {
//                regex = /^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,3}$/;
//                message = "Only Integer values corrected to utmost two decimal points are allowed";
//            }
//            if (!val.match(regex))
//            {
//                $("#MM_PROPERTIES").jqxGrid('setcellvalue', rowid, 'value', "");
//                $("#" + tbid).val("");
//                //$("#dialog").html(message);
//                $("#dialog").html("<br/><center>" + message + "</center><br/>");
//                $("#dialog").dialog({ resizable: false,
//                    modal: true,
//                    height: 150,
//                    title: "Message",
//                    minWidth: 300,
//                    maxWidth: 'auto',
//                    textAlign: 'center',
//                    buttons: {
//                        Ok: function () {
//                            $(this).dialog("close");
//                            $("#" + tbid).val('');
//                            $("#" + tbid).focus();
//
//                        }
//                    },
//                        open:function () {
//                           //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");  
//                         
//                     }
//                });
//                //$("#propertiesupdate").hide();
//            }
//            else {
//
////
////                if (type == 'min')
////                {
////                    $("#MM_PROPERTIES").jqxGrid('setcellvalue', rowid, 'value', $("#" + tbid).val() + "~" + $("#valuemax" + rowid).val());
////                }
////                else if (type == 'max')
////                {
////                    $("#MM_PROPERTIES").jqxGrid('setcellvalue', rowid, 'value', $("#valuemin" + rowid).val() + "~" + $("#" + tbid).val());
////                }
////                else {
//                $("#MM_PROPERTIES").jqxGrid('setcellvalue', rowid, 'value', $("#" + tbid).val());
//                // }
//                var focus_val = $("#" + tbid).val();
//                $("#" + tbid).val('');
//                $("#" + tbid).focus();
//                $("#" + tbid).val(focus_val);
//                // $("#propertiesupdate").show();
//            }
//        }
//        // $("#" + tbid).focus();
//    }, 500);
//}
//function fetchPropertiesTabData() {
////var conceptId = 
////alert("fetchPropertiesTabData");
//
//    var baskettype = $("#baskettypehid1").val();
//
//    if (baskettype == 'Search View')
//    {
//        $("#propertiesupdate").hide();
//
//        //$("input[type='text']").css('display','none');
//
//    }
//
//
//    var re = new RegExp('#', 'g');
//    var conceptId = "";
//    var conceptId = $("#CONCEPT_ID").val();
//    conceptId = conceptId.replace(re, '_');
//    $.ajax({
//        type: "POST",
//        url: 'propertiestab',
//        data: {
//            conceptid: conceptId,
//            recordNo: $("#RECORD_NO").val()
//        },
//        traditional: true,
//        cache: false,
//        success: function (response) {
//            //  alert("Properties::" + JSON.stringify(response.properties));
//            //   alert(JSON.stringify("Property Values::" + response.propertyvalues));
////                        alert(JSON.stringify("Uoms:::" + response.uoms));
//
//            var labelobj = response.labelobj;
//
//            var labelString = JSON.stringify(labelobj);
//            if (labelString.indexOf("\"Mandatory Ind\"") > -1) {
//
//                labelString = labelString.replace("\"Mandatory Ind\"", "\"Mandatory_Ind\"");
//            }
//            labelobj = JSON.parse(labelString);
//            var propValue = "";
//            var uomsource = {
//                localdata: response.uoms,
//                datafields:
//                        [
//                            {name: 'uom', type: 'string'},
//                            {name: 'uomid', type: 'string'}
//                        ],
//                datatype: "JSON"
//
//            };
//            var uomdapter = new $.jqx.dataAdapter(uomsource);
//            var source =
//                    {
//                        localdata: response.properties,
//                        datafields:
//                                [
//                                    {name: 'shortseq', type: 'string'},
//                                    {name: 'longseq', type: 'number'},
//                                    {name: 'reqflag', type: 'string'},
//                                    {name: 'pdrflag', type: 'string'},
//                                    {name: 'stxtflag', type: 'string'},
//                                    {name: 'ltxtflag', type: 'string'},
//                                    {name: 'highlevelid', type: 'string'},
//                                    {name: 'datatype', type: 'string'},
//                                    {name: 'uom', type: 'string'},
//                                    {name: 'uomid', type: 'string'},
//                                    {name: 'value', type: 'string'},
//                                    {name: 'propertyconceptid', type: 'string'},
//                                    {name: 'valueconceptid', type: 'string'},
//                                    {name: 'property', type: 'string'},
//                                    {name: 'uomid', type: 'string'},
//                                    {name: 'children', type: 'string'}
//
//                                ],
//                        datatype: "JSON"
//                    };
//            var adapter = new $.jqx.dataAdapter(source);
//            var datatyperenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
//                value = value.replace('_TYPE', '');
//                value = value.replace(/[_]/, " ");
//
//                return "<div style='padding-left:3px'>" + value + "</div>";
//            };
//            var propertyrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
//                var property = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "property");
//                var mand_ind = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "reqflag");
//                var highlevelid = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "highlevelid");
//                console.log("highlevelid:::" + highlevelid);
//                if (highlevelid != null)
//                {
////                    highlevelid = "<img onclick=propertyHierarchy(" + row + ")"
////                            + " src='images/search_icon_color_2.png' class='prop_imgClass'>";
//                    highlevelid = "<span id='span" + row + "' class='ui-icon ui-icon-plus' style='cursor:pointer;margin-left:13%;margin-top: -16px;' onclick=propertyHierarchy(" + row + ")></span>";
//                }
//                else
//                    highlevelid = "";
//                if (mand_ind == 'Y') {
//
//
//                    return  "<div title='' style='display:inline-block;color:red;padding-left:3px'> " + property + "</div>" + highlevelid;
//                } else {
//                    return highlevelid + "<div title='' style='padding-left:3px'> " + property + "</div>" + highlevelid;
//                }
//
//            };
//            var uomrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
//
//                var propertyid = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "propertyconceptid");
//                //rowid,gridrowid,gridname,datafield,value
//                var re = new RegExp('#', 'g');
//                propertyid = propertyid.replace(re, '_');
//                var uom = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "uom") != null ? $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "uom") : "";
//                re = new RegExp(' ', 'g');
//                var uom_value = "";
//                if (uom != null) {
//                    uom_value = uom.replace(re, "_");
//                }
//                var basketType = $('#baskettypehid1').val();
//                if (basketType == 'Search View') {
//                    return "<div class='propertypopupdddw' data-recid='" + row + "' data-prop='" + propertyid + "'>" + uom + "</div>";
//                }
//                else {
//                    return "<div class='propertypopupdddw' data-recid='" + row + "' data-prop='" + propertyid + "'>" + uom + "</div><img class='prop_imgClass' src='images/search_icon_color_2.png' onclick=uomBycharacterstic('" + propertyid + "','"+row+"')>";
//                }
//
//            };
//            var valuerenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
//
//                var value = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, 'value');
//                var property = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, 'property');
//                var valuetype = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, 'datatype');
//                var highlevelid = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, 'highlevelid');
//                console.log('renderer value::' + value + ", property:::" + property);
//                var basketType = $('#baskettypehid1').val();
//
//
//
//                if (highlevelid == null)
//                {
//
//                    if (value == undefined || value == 'undefined~undefined') {
//
//                        if (valuetype == 'MEASURE_RANGE_TYPE') {
//
//                            //   return "<div  class='propertypopup' data-recid='' data-prop=''><div  id='valuemin" + row + "' placeholder=''  type='text' class='dddwGridTbMx'>"+value.split("~")[0]+"</div To <div id='valuemax" + row + "' text='" + value.split("~")[1] + "' type='text' class='dddwGridTbMx'>"+value.split("~")[1]+"</div></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
//                            tbmin = "valuemin" + row;
//                            tbmax = "valuemax" + row;
//                            if (basketType == 'Search View') {
//                                return "<div  class='propertypopup' data-recid='' data-prop=''><input disabled='disabled'  id='valuemin" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/> To <input  onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max') id='valuemax" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/></div>";
//
//                            }
//                            else {
//
//                                return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min') id='valuemin" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/> To <input  onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max') id='valuemax" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/></div>";
//                            }
//
//                        }
//                        else {
//                            //  return "<div  class='propertypopup' data-recid='' data-prop=''><div id='value" + row + "' placeholder=''  type='text' class='dddwGridTb'>"+value+"</div></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
//                            tbid = "value" + row;
//                            return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none') id='value" + row + "' placeholder='' value='' type='text' class='dddwGridTb'/></div>";
//                        }
//
//
//
//                    }
//                    else {
//
//
//
////                var valueid = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "valueconceptid");
////                //rowid,gridrowid,gridname,datafield,value
////                var re = new RegExp('#', 'g');
////
////                valueid = valueid.replace(re, '_');
//                        var value = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "value");
////
////                re = new RegExp(' ', 'g');
////                var tb_value = valueid.replace(re, "_");
//
//                        //     return "<div  class='propertypopup' data-recid='" + row + "' data-prop='" + valueid + "'>100<input placeholder='" + value + "' type='text' class='dddwGridTb'/></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
//                        var tbid = "";
//                        var tbmin = "";
//                        var tbmax = "";
//                        if (valuetype == 'MEASURE_RANGE_TYPE') {
//                            if (value.split("~").length > 1)
//                            {
//                                //   return "<div  class='propertypopup' data-recid='' data-prop=''><div  id='valuemin" + row + "' placeholder=''  type='text' class='dddwGridTbMx'>"+value.split("~")[0]+"</div To <div id='valuemax" + row + "' text='" + value.split("~")[1] + "' type='text' class='dddwGridTbMx'>"+value.split("~")[1]+"</div></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
//
//                                var message = "NA";
//                                if (value.split("~")[0].toString().match(/^[a-zA-Z]$/))
//                                {
//                                    message = "Alphabets are not allowed";
//
//
//                                }
//                                else if (value.split("~")[1].toString().match(/^[a-zA-Z]$/))
//                                {
//                                    message = "Alphabets are not allowed";
//                                }
//
//
//                                else if (value.split("~")[0] > value.split("~")[1])
//                                {
//                                    // alert('min value should be less than max value'); 
//                                    message = "Min Value should be less than Max Value";
//                                }
//                                if (message != 'NA') {
//                                    $("#dialog").html(message);
//                                    $("#dialog").dialog({ resizable: false,
//                                        modal: true,
//                                        height: 120,
//                                        title: "Message",
//                                        width: 260,
//                                        textAlign: 'center',
//                                        buttons: {
//                                            Ok: function () {
//                                                $(this).dialog("close");
//                                                var valm = $("#valuemin" + row).val();
//                                                $("#valuemin" + row).val('');
//                                                $("#valuemin" + row).focus();
//                                                $("#valuemin" + row).val(valm);
//                                            }
//                                        },
//                        open:function () {
//                           //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");  
//                       
//                     }
//                                    });
//                                    $("#propertiesupdate").hide();
//                                }
//                                else {
//                                    $("#propertiesupdate").show();
//                                }
//
//                                tbmin = "valuemin" + row;
//                                tbmax = "valuemax" + row;
//
//
//                                if (basketType == 'Search View') {
//                                    return "<div  class='propertypopup' data-recid='' data-prop=''><input  disabled='disabled' onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min') id='valuemin" + row + "' placeholder='' value='" + value.split("~")[0] + "' type='text' class='dddwGridTbMx'/> To <input  onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max') id='valuemax" + row + "' placeholder='' value='" + value.split("~")[1] + "' type='text' class='dddwGridTbMx'/></div>";
//                                } else {
//                                    return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min') id='valuemin" + row + "' placeholder='' value='" + value.split("~")[0] + "' type='text' class='dddwGridTbMx'/> To <input  onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max') id='valuemax" + row + "' placeholder='' value='" + value.split("~")[1] + "' type='text' class='dddwGridTbMx'/></div>";
//                                }
//
//
//                            } else {
//                                //      return "<div  class='propertypopup' data-recid='' data-prop=''><div id='valuemin" + row + "' placeholder='' value='" + value + "'  class='dddwGridTbMx'/> To <div id='valuemax" + row + "' placeholder='' value='" + value + "'  class='dddwGridTbMx'/></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
//                                if (basketType == 'Search View') {
//                                    return "<div  class='propertypopup' data-recid='' data-prop=''><input disabled='disabled' onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none') id='valuemin" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTbMx'/> To <input disabled='disabled' id='valuemax" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTbMx'/></div> ";
//
//                                } else {
//
//                                    return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none') id='valuemin" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTbMx'/> To <input id='valuemax" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTbMx'/></div>";
//                                }
//
//                            }
//                        }
//                        else {
//                            //  return "<div  class='propertypopup' data-recid='' data-prop=''><div id='value" + row + "' placeholder=''  type='text' class='dddwGridTb'>"+value+"</div></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
//                            tbid = "value" + row;
//
//
//                            if (basketType == 'Search View') {
//                                return "<div  class='propertypopup' data-recid='' data-prop=''><input disabled='disabled' onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none')  id='value" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTb'/></div>";
//
//
//                            } else {
//
//                                return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none') id='value" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTb'/></div>";
//                            }
//                        }
//
//
//                        // +"onclick=fetchgridddwInfo('92','row:" + row + "','MM_PROPERTIES','value,valueid','" + tb_value + "')>";
//                    }
//
//                }
//                else {
//
//                    if (basketType == 'Search View') {
//
//                        return "<div disabled='disabled' onclick=propertyHierarchy(" + row + ")  style='cursor:pointer;margin-left:5px;margin-top:3px'>" + value + "</div>";
//                    } else {
//
//
//
//
//                        return "<div onclick=propertyHierarchy(" + row + ")  style='cursor:pointer;margin-left:5px;margin-top:3px'>" + value + "</div>";
//                    }
//                }
//
//
//
//            };
//
//
//
//
//
//            $("#MM_PROPERTIES").jqxGrid(
//                    {
//                        width: '70%',
//                        //selectionmode: 'singlecell',
//                        // editable: true,
//                        theme: 'energyblue',
//                        source: adapter,
//                        filterable: true,
//                        enabletooltips: true,
//                        showfilterrow: true,
//                        height: '380',
//                        columnsresize: true,
//                        columnsreorder: true,
//                        sortable: true,
//                        ready: function () {
//                            $("#MM_PROPERTIES").jqxGrid('sortby', 'longseq', 'asc');
//                        },
//                        columns: [
//                            {text: 'shortseq', hidden: true, editable: false, align: 'center', datafield: 'shortseq', width: "6%", cellsalign: 'left'},
//                            {text: 'pdrflag', hidden: true, editable: false, align: 'center', datafield: 'pdrflag', width: "40%", cellsalign: 'left'},
//                            {text: 'stxtflag', hidden: true, editable: false, align: 'center', datafield: 'stxtflag', width: "40%", cellsalign: 'left'},
//                            {text: 'ltxtflag', hidden: true, editable: false, align: 'center', datafield: 'ltxtflag', width: "40%", cellsalign: 'left'},
//                            {text: 'highlevelid', hidden: true, editable: false, align: 'center', datafield: 'highlevelid', width: "40%", cellsalign: 'left'},
//                            {text: labelobj.Characteristic != null ? labelobj.Characteristic : 'Characteristic', enabletooltips: true, cellsrenderer: propertyrenderer, editable: false, align: 'center', datafield: 'property', width: "30%", cellsalign: 'left'},
//                            {text: labelobj.Value != null ? labelobj.Value : 'Value', enabletooltips: false, cellsrenderer: valuerenderer, align: 'center', datafield: 'value', width: "30%", cellsalign: 'left'},
//                            {text: labelobj.UoM != null ? labelobj.UoM : 'UoM', editable: false, align: 'center', datafield: 'uom', width: '20%', columntype: 'text', cellsrenderer: uomrenderer},
//                            {text: labelobj.propertyid != null ? labelobj.propertyid : 'propertyid', hidden: true, align: 'center', datafield: 'propertyconceptid', width: "30%", cellsalign: 'left'},
//                            {text: labelobj.valueid != null ? labelobj.valueid : 'valueid', hidden: true, align: 'center', datafield: 'valueconceptid', width: "30%", cellsalign: 'left'},
//                            {text: labelobj.uomid != null ? labelobj.uomid : 'uomid', hidden: true, align: 'center', datafield: 'uomid', width: "30%", cellsalign: 'left'},
//                            {text: labelobj.DataType != null ? labelobj.DataType : 'DataType', cellsrenderer: datatyperenderer, hidden: false, editable: false, align: 'center', datafield: 'datatype', width: "22%", cellsalign: 'left', enabletooltips: false},
//                            {text: labelobj.Mandatory != null ? labelobj.Mandatory : 'Mandatory', hidden: true, editable: false, align: 'center', datafield: 'reqflag', width: "10%", cellsalign: 'left'},
//                            {text: labelobj.Sequence != null ? labelobj.Sequence : 'Sequence', hidden: true, editable: false, align: 'center', datafield: 'longseq', width: "8%", cellsalign: 'left'}
//
//                        ]
//                    });
//        },
//         error: function(e) {
//              //  alert(e.message)
//              
//              var meg=e.statusText;
//              var status=e.status;
//                if (meg.lastIndexOf("Session Timeout") > -1) {
//                       $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Session Timeout.</div></div>");
//        $("#logoutDailog").dialog({ resizable: false,
//        title: 'Message',
//        modal: true,
//        width: 270,
////        maxWidth: 'auto',
//        height: 135,
//        buttons: {
//            Ok: function() {
//                $(this).html("");
//                $(this).dialog("close");
//                $(this).dialog("destroy");
//
//               window.location.href="timeout";
//
//            }
//        },
//                        open:function () {
//                           //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");  
//                        
//                     }
//    });
//                }
//            }
//    });
//}

$(document).ready(function () {

    //getUserRole();

//    fetchPropertiesTabData();

    var basketType = $('#baskettypehid1').val();


    if (basketType != 'New Registrations')
    {
//        fetchPropertiesTabData();
//        console.log('fetching properties for pending registration....');
    }
//    if(basketType=='Search View')
//    {
//       // alert('Entered SearchView');
//    $(".prop_imgClass").css('display','none');
//        
//    }


    $(document).ajaxStart(function () {
        $("body").css({"pointer-events": "none"});
        $("#wait").show();
    });
    $(document).ajaxComplete(function () {
        $("#wait").hide();
        $("body").css({"pointer-events": "auto"});
    });


//    $("#propertiesupdate").click(function () {
////--developed by azmat
//        var rows = $('#MM_PROPERTIES').jqxGrid('getboundrows');
//        console.log(JSON.stringify(rows[1].uid));
//        for (var i = 0; i < rows.length; i++)
//        {
//            if (rows[i].datatype == 'MEASURE_RANGE_TYPE') {
//                rows[i].value = $("#valuemin" + rows[i].uid).val() + "~" + $("#valuemax" + rows[i].uid).val();
//                console.log("If: value:::" + rows[i].value);
//            }
//            else if (rows[i].highlevelid != null)
//            {
//                // rows[i].value= $('#MM_PROPERTIES').jqxGrid('getcellvalue', rowid, "value");
//
//            }
//            else {
//
//                rows[i].value = $("#value" + rows[i].uid).val();
//                console.log("else: value:::" + rows[i].value);
//            }
//        }
//        //alert(JSON.stringify(rows));
//        var conceptid = $("#conceptId").val();
//        var re = new RegExp('#', 'g');
//        conceptid = conceptid.replace(re, '_');
//        
//        
//        console.log('propertiesdata::'+JSON.stringify(rows));
//        
//        
////        for(var i=0;i<rows.length;i++)
////        {
////            
////            alert(JSON.stringify(rows[i]));
////            
////        }
////        
//        $.ajax({
//            type: "POST",
//            url: 'updatePropertiesTab',
//            data: {
//                'propertiesdata': JSON.stringify(rows),
//                'conceptid': conceptid,
//                'recordNo': $("#RECORD_NO").val()
//            },
//            traditional: true, cache: false,
//            success: function (response) {
//
//
//                var propTabUpdate = JSON.parse(response);
//                console.log('Response::' + response);
//                if (propTabUpdate.MESSAGE == 'success') {
//                    $("#dialog").html("<br/><center>Updated Successfully</center>");
//
//                    stepActions(2);
//                    
//                     $("#Generate_Description").prop("disabled", false);
//                     $("#step2").jqxTooltip('close');
//                     $("#step3").jqxTooltip({content: 'Generate Description.', position: 'top', autoHide: false, trigger: "none", closeOnClick: false,showDelay: 10000});
//                     $("#step3").jqxTooltip('open');
//                }
//                else {
//                    $("#dialog").html("<br/><center>Failed to Update</center>");
//
//                }
//                $("#dialog").dialog({ resizable: false,
//                    title: 'Message',
//                    modal: true,
//                    height: 150,
//                    width: 220,
//                    buttons: {
//                        Ok: function () {
//                            $(this).html("");
//                            $(this).dialog("close");
//                            $(this).dialog("destroy");
//                        }
//                    },
//                        open:function () {
//                           //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");  
//                          
//                     }
//                });
//            },
//             error: function(e) {
//              //  alert(e.message)
//              
//              var meg=e.statusText;
//              var status=e.status;
//                if (meg.lastIndexOf("Session Timeout") > -1) {
//                       $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Session Timeout.</div></div>");
//        $("#logoutDailog").dialog({ resizable: false,
//        title: 'Message',
//        modal: true,
//        width: 270,
////        maxWidth: 'auto',
//        height: 135,
//        buttons: {
//            Ok: function() {
//                $(this).html("");
//                $(this).dialog("close");
//                $(this).dialog("destroy");
//
//               window.location.href="timeout";
//
//            }
//        },
//                        open:function () {
//                           //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");  
//                        
//                     }
//    });
//                }
//            }
//        });
//    });



    $("#MM_ATTACHMENTS_GRID").addClass("hideTable");
    $("#MM_PROPERTIES_GRID").addClass("hideTable");

// GRID JS
//refTabViewType

    $('#MM_DOCUMENTS_GRID').on('rowclick', function (event) {


        $('#MM_DOCUMENTS_Update').css("display", "block");
        $('#MM_DOCUMENTS_Delete').css("display", "block");
        documentTabViewType = "GRID_VIEW";


    });

    $('#MM_REFERENCE_GRID').on('rowclick', function (event) {


        $('#MM_REFERENCE_Update').css("display", "block");
        $('#MM_REFERENCE_Delete').css("display", "block");
        refTabViewType = "GRID_VIEW";


    });


// select or unselect rows when the checkbox is clicked.
    $("#MM_DOCUMENTS_GRID").bind('cellendedit', function (event) {
        if (event.args.value) {
            $("#MM_DOCUMENTS_GRID").jqxGrid('selectrow', event.args.rowindex);
        } else {
            $("#MM_DOCUMENTS_GRID").jqxGrid('selectrow', event.args.rowindex);
        }
        $('#MM_DOCUMENTS_Update').css("display", "block");
        $('#MM_DOCUMENTS_Delete').css("display", "block");
    });

    $("#MM_REFERENCE_GRID").bind('cellendedit', function (event) {
        if (event.args.value) {

            $("#MM_REFERENCE_GRID").jqxGrid('selectrow', event.args.rowindex);

        } else {

            $("#MM_REFERENCE_GRID").jqxGrid('selectrow', event.args.rowindex);
        }
        $('#MM_REFERENCE_Update').css("display", "block");
        $('#MM_REFERENCE_Delete').css("display", "block");
    });

    //$("#MM_REFERENCE_GRID").jqxGrid('selectionmode', 'multiplerows');




});





//

function fetchgridddwInfo(dddwid, gridrowid, gridname, datafieldname, value) {
    console.log("value :: " + value);

    clickVisionDDDW(dddwid, gridrowid, gridname, datafieldname, value);
}





//GENERIC GRID VIEW FUNCTIONS

function genericGridView(tabId) {
    //  '#'+tabId+'

    $('#' + tabId + '_GRID').jqxGrid('clearselection');

    var datainformations = $('#' + tabId + '_GRID').jqxGrid('getdatainformation');
    var rowscounts = datainformations.rowscount;

    if (tabId === "MM_DOCUMENTS")

    {
        docTabCheck = true;
        fetchDocumentTabData();

    } else if (tabId === "MM_REFERENCE")
    {
        refTabCheck = true;
        fetchReferenceTabData();

    } else if (tabId === "WTH_TAN_DATA")

    {
        wthldTanTabCheck = true;
        fetchWTH_TANData();

    }



}

function genericFormView(tabId) {

    if (tabId == "MM_DOCUMENTS")
    {
        docTabCheck = true;
        fetchDocumentTabData();

    } else if (tabId == "MM_REFERENCE")
    {
        refTabCheck = true;
        fetchReferenceTabData();
    } else if (tabId == "WTH_TAN_DATA")

    {
        wthldTanTabCheck = true;
        fetchWTH_TANData();
    }


}


function genericAdd(tabId) {



    $('#' + tabId + '_TABLE').addClass("displayTable").removeClass("hideTable");
    $('#' + tabId + '_GRID').hide();

    $('#' + tabId + '_TABLE tr').find('input:text').val('');
    $('#' + tabId + '_TABLE tr').find('input:checkbox').prop("checked", false);

    var rows = $("#" + tabId + "_GRID").jqxGrid('getrows');
    var rowsCount = 0;

    if (typeof rows != 'undefined') {

        rowsCount = rows.length;
    }


    //alert(rowsCount);

    if (tabId == "MM_DOCUMENTS")

    {


        if (documentTabViewType == "FORM_VIEW")

        {
            genericFormViewIconsDisplay(tabId, rowsCount);
            documentTabViewType = "FORM_VIEW";
            $('#documentOperation').val("SAVE");

        } else if (documentTabViewType == "GRID_VIEW") {
            genericGridViewIconsDisplay(tabId);
            documentTabViewType = "FORM_VIEW";
        }




    } else if (tabId == "MM_REFERENCE")
    {


        if (refTabViewType == "FORM_VIEW")
        {
            genericFormViewIconsDisplay(tabId, rowsCount);
            refTabViewType = "FORM_VIEW";
            $('#referenceOperation').val("SAVE");

        } else if (refTabViewType == "GRID_VIEW") {

            genericGridViewIconsDisplay(tabId);

            refTabViewType = "FORM_VIEW";
        }



    } else if (tabId == "WTH_TAN_DATA") {


        if (wthldTanTabViewType == "FORM_VIEW")
        {
            genericFormViewIconsDisplay(tabId, rowsCount);
            wthldTanTabViewType = "FORM_VIEW";
            $('#wthTanOperation').val("SAVE");

        } else if (wthldTanTabViewType == "GRID_VIEW") {

            genericGridViewIconsDisplay(tabId);

            wthldTanTabViewType = "FORM_VIEW";
        }



    }




}


function genericGridViewIconsDisplay(tabId)
{

    $('#' + tabId + '_Add').css("display", "block");
    $('#' + tabId + '_Grid_View').css("display", "block");
    $('#' + tabId + '_Form_View').css("display", "none");
    $('#' + tabId + '_Update').css("display", "block");
    $('#' + tabId + '_Delete').css("display", "none");


}

function genericFormViewIconsDisplay(tabId, rowsCount) {


    if (rowsCount == 0 || rowsCount == 1)

    {
        //("row coundt isssss :: "+rowsCount);
        $('#' + tabId + '_Form_View').css("display", "block");
        $('#' + tabId + '_Grid_View').css("display", "none");

    } else if (rowsCount > 1)

    {
        // alert("row coundt isssss :: "+rowsCount);

        $('#' + tabId + '_Form_View').css("display", "none");
        $('#' + tabId + '_Grid_View').css("display", "block");
    } else
    {
        //alert("row coundt isssss :: "+rowsCount);

    }

    $('#' + tabId + '_Add').css("display", "block");
    $('#' + tabId + '_Update').css("display", "block");
    $('#' + tabId + '_Delete').css("display", "none");




}

function removeAllGridRows(tabId) {


    $("#" + tabId + "_GRID").jqxGrid('clear');
}

function genericUpdate(tabId, DATA) {


    if (tabId == "MM_REFERENCE") {

        mmReferenceTabUpdateAjaxCall(tabId, DATA);

    } else if (tabId == "MM_DOCUMENTS") {

        mmDocumentTabUpdateAjaxCall(tabId, DATA);

    } else if (tabId == "VM_WTH_TAN_DATA") {

        //mmDocumentTabUpdateAjaxCall(DATA);
        withholdingTanUpdateAjaxCall(DATA);

    }


}

function genericDelete(tabId, DATA) {





    $("#dialog").html("Are You sure want to Delete?");

    // Define the Dialog and its properties.
    $("#dialog").dialog({resizable: false,
        resizable: false,
        modal: true,
        title: "Confirmation",
        height: 150,
        width: 300,
        fluid: true,
        buttons: {
            "Yes": function () {
                $(this).html("");
                $(this).dialog("close");

                if (tabId == "MM_REFERENCE") {

                    mmReferenceTabDeleteAjaxCall(DATA);

                } else if (tabId == "MM_DOCUMENTS") {

                    mmDocumentTabDeleteAjaxCall(DATA);

                } else if (tabId == "WTH_TAN_DATA") {

                    withholdingTanDeleteAjaxCall(DATA);

                }
                $(this).dialog("destroy");


            },
            "No": function () {
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


}


//GENERIC GRID VIEW FUNCTIONS FINISHED













// REFERECNCE TAB RELATED MOTHODS
var refTabViewType = "FORM_VIEW";
var refTabCheck = true;
function fetchReferenceTabData() {

    if (refTabCheck) {

        console.log("fetchReferenceTabData ::: START");
        var recordNo = $('#recordNo_Text').val();
        var url = "getReferenceData";
        var data = {};
        data.recordNo = recordNo;
        var async = false;
        var cache = false;
        var success = function (result) {

            if (result.indexOf("Failed to Fetch Record!") > -1)
            {
                removeAllGridRows("MM_REFERENCE");
                $('#MM_REFERENCE_TABLE tr').find('input:text').val('');
                $('#MM_REFERENCE_TABLE tr').find('input:checked').prop("checked", false);
                gridViewIconsDisplay('MM_REFERENCE', 0);
                $('#MM_REFERENCE_TABLE').addClass("displayTable").removeClass("hideTable");
                $('#MM_REFERENCE_GRID').addClass("hideTable").removeClass("displayTable");
                refTabViewType = "FORM_VIEW";
                $('#referenceOperation').val("SAVE");

            } else

            {
                var jsnobj = JSON.parse(result);
                var refData = jsnobj.jsnArray;
                var labelobj = jsnobj.labelobj;

                var labelobjString = JSON.stringify(labelobj);

//                console.log("labelobjString::"+labelobjString);
                if (labelobjString.indexOf("\"Reference No\"")) {

                    labelobjString = labelobjString.replace("\"Reference No\"", "\"Reference_No\"");

                }
                if (labelobjString.indexOf("\"Reference Type\"")) {

                    labelobjString = labelobjString.replace("\"Reference Type\"", "\"Reference_Type\"");
                }
                if (labelobjString.indexOf("\"Vendor Name\"")) {

                    labelobjString = labelobjString.replace("\"Vendor Name\"", "\"Vendor_Name\"");
                }
                if (labelobjString.indexOf("\"Vendor Id\"")) {

                    labelobjString = labelobjString.replace("\"Vendor Id\"", "\"Vendor_Id\"");
                }

                if (labelobjString.indexOf("\"Short Text Indicator\"")) {

                    labelobjString = labelobjString.replace("\"Short Text Indicator\"", "\"Short_Text_Indicator\"");
                }
                if (labelobjString.indexOf("\"Long Text Indicator\"")) {

                    labelobjString = labelobjString.replace("\"Long Text Indicator\"", "\"Long_Text_Indicator\"");
                }
                if (labelobjString.indexOf("\"Record No\"")) {

                    labelobjString = labelobjString.replace("\"Record No\"", "\"Record_No\"");
                }

                console.log("labelobjString:after:::::::" + labelobjString);
                labelobj = JSON.parse(labelobjString);

                if (refData.length == 1)
                {
                    removeAllGridRows("MM_REFERENCE");
                    gridViewIconsDisplay('MM_REFERENCE', 1);
                    $('#MM_REFERENCE_TABLE').addClass("displayTable").removeClass("hideTable");
                    $('#MM_REFERENCE_GRID').hide();

                    refTabViewType = "FORM_VIEW";
                    //alert("refTabViewType  :::: "+refTabViewType);
                    obj = refData[0];

                    $('#referenceNo_Text').val(obj.REFERENCE_NO);
                    //  alert(obj.REFERENCE_NO);
                    $('#referenceType_Text').val(obj.REFERENCE_TYPE);
                    $('#vendorId_Text').val(obj.VENDOR_ID);
                    $('#vendorName_Text').val(obj.VENDOR_NAME);
                    $('#referenceOperation').val("UPDATE");


                    //  alert("came here"+obj.OPERATION);



                    if (obj.STXT_FLAG == true) {


                        $('#stxtFlag_Check').prop("checked", true);
                    } else {
                        $('#stxtFlag_Check').prop("checked", false);
                    }

                    if (obj.LTXT_FLAG == true)

                    {
                        $('#ltxtFlag_Check').prop("checked", true);

                    } else
                    {

                        $('#ltxtFlag_Check').prop("checked", false);
                    }


                } else if (refData.length > 1)

                {

                    gridViewIconsDisplay('MM_REFERENCE', refData.length);
                    $('#MM_REFERENCE_GRID').show();
                    $('#MM_REFERENCE_TABLE').addClass("hideTable").removeClass("displayTable");
                    refTabViewType = "GRID_VIEW";

                    var vendorIdRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var vendorId = $('#MM_REFERENCE_GRID').jqxGrid('getcellvalue', row, "VENDOR_ID");
                        re = new RegExp(' ', 'g');
                        var vendorId_value = vendorId.replace(re, "_");

                        return "<div class='visionGridDataAlign' data-recid='" + row + "' data-prop='" + vendorId + "'><div class='visionGridDataAlignInfo'>" + vendorId + "</div><div class='visionGridDataAlignImage'><img  src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('88','row:" + row + "','MM_REFERENCE_GRID','VENDOR_ID','" + vendorId_value + "')></div></div>";
                    };

                    var referenceTypeRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var referenceType = $('#MM_REFERENCE_GRID').jqxGrid('getcellvalue', row, "REFERENCE_TYPE");
                        re = new RegExp(' ', 'g');
                        var referenceType_value = referenceType.replace(re, "_");

                        return "<div class='visionGridDataAlign' data-recid='" + row + "' data-prop='" + referenceType + "'><div class='visionGridDataAlignInfo'>" + referenceType + "</div><div class='visionGridDataAlignImage'><img src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('103','row:" + row + "','MM_REFERENCE_GRID','REFERENCE_TYPE','" + referenceType_value + "')></div></div>";
                    };

                    // prepare the data
                    var data = JSON.parse(result);

                    // alert(JSON.stringify(result));
                    var source =
                            {
                                datatype: "json",
                                localdata: data,
                                datafields:
                                        [
                                            {name: 'REFERENCE_NO', type: 'string'},
                                            {name: 'REFERENCE_TYPE', type: 'string'},
                                            {name: 'VENDOR_ID', type: 'string'},
                                            {name: 'VENDOR_NAME', type: 'string'},
                                            {name: 'STXT_FLAG', type: 'bool'},
                                            {name: 'LTXT_FLAG', type: 'bool'},
                                            {name: 'RECORD_NO', type: 'string'},
                                            {name: 'OLD_REFERENCE_NO', type: 'string'},
                                            {name: 'OLD_REFERENCE_TYPE', type: 'string'},
                                            {name: 'OLD_VENDOR_ID', type: 'string'},
                                            {name: 'OLD_VENDOR_NAME', type: 'string'},
                                            {name: 'OPERATION', type: 'string'},
                                        ]

                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    // initialize jqxGrid
                    $("#MM_REFERENCE_GRID").jqxGrid(
                            {
                                width: "100%",
                                height: "200",
                                source: dataAdapter,
                                editable: true,
                                editmode: 'selectedrow',
                                columnsresize: true,
                                columnsreorder: true,
                                sortable: true,
                                filterable: true,
                                showfilterrow: true,
                                theme: 'energyblue',
                                showtoolbar: false,
                                pageable: false,
                                columns: [
                                    {text: labelobj.Reference_No != null ? labelobj.Reference_No : 'Reference No', editable: true, datafield: 'REFERENCE_NO', width: "20%"},
                                    {text: labelobj.Reference_Type != null ? labelobj.Reference_Type : 'Reference Type', editable: false, datafield: 'REFERENCE_TYPE', cellsrenderer: referenceTypeRenderor, width: "20%"},
                                    {text: labelobj.Vendor_Id != null ? labelobj.Vendor_Id : 'Vendor Id', editable: false, datafield: 'VENDOR_ID', cellsrenderer: vendorIdRenderor, width: "20%"},
                                    {text: labelobj.Vendor_Name != null ? labelobj.Vendor_Name : 'Vendor Name', editable: false, datafield: 'VENDOR_NAME', width: "20%"},
                                    {text: labelobj.Short_Text_Indicator != null ? labelobj.Short_Text_Indicator : 'Ind in SFD', editable: true, datafield: 'STXT_FLAG', threestatecheckbox: false, filtertype: 'none', sortable: false, columntype: 'checkbox', width: "10%"},
                                    {text: labelobj.Long_Text_Indicator != null ? labelobj.Long_Text_Indicator : 'Ind in POD', editable: true, datafield: 'LTXT_FLAG', threestatecheckbox: false, filtertype: 'none', sortable: false, columntype: 'checkbox', width: "10%"},
                                    {text: labelobj.Record_No != null ? labelobj.Record_No : 'Record No', hidden: true, datafield: 'RECORD_NO', width: "10%"},
                                    {text: 'Old Reference No', hidden: true, datafield: 'OLD_REFERENCE_NO', width: "10%"},
                                    {text: 'Old Reference Type', hidden: true, datafield: 'OLD_REFERENCE_TYPE', width: "10%"},
                                    {text: 'Old Vendor Id', hidden: true, datafield: 'OLD_VENDOR_ID', width: "10%"},
                                    {text: 'Old Vendor Name', hidden: true, datafield: 'OLD_VENDOR_NAME', width: "10%"},
                                    {text: 'OPERATION', hidden: true, datafield: 'OPERATION', width: "10%"},
                                ]
                            });






                }//
            }
            hideTabsSearchView();

        }
        var req = {};
        req.url = url;
        req.data = data;
        req.async = async;
        req.type = "post";
        req.success = success;
        $.ajax(req);
    }
    console.log("fetchReferenceTabData ::: END");
    refTabCheck = false;
}

function mmReferenceFormView() {

    genericFormView("MM_REFERENCE");
}

function mmReferenceGridView() {

    genericGridView("MM_REFERENCE");


}

function mmReferenceDelete() {


    //genericDelete("MM_REFERENCE");

    console.log("mmReferenceDelete DELETE ::: START");
    var DATA = [];

    if (refTabViewType == "GRID_VIEW")

    {

        var rowsSelected = getSelectedRowsData("MM_REFERENCE_GRID");
        DATA = rowsSelected;



    } else if (refTabViewType == "FORM_VIEW") {

        var object = {};
        var referenceNo = $('#referenceNo_Text').val();
        object.REFERENCE_NO = referenceNo;

        var referenceType = $('#referenceType_Text').val();
        object.REFERENCE_TYPE = referenceType;



        var vendorId = $('#vendorId_Text').val();
        object.VENDOR_ID = vendorId;

        var vendorName = $('#vendorName_Text').val();
        object.VENDOR_NAME = vendorName;


        var recordNo = $('#recordNo_Text').val();
        object.RECORD_NO = recordNo;

        var ltxtFlag = false;
        if ($("#ltxtFlag_Check").is(":checked"))
        {
            ltxtFlag = true;
            object.LTXT_FLAG = ltxtFlag;
        } else {
            object.LTXT_FLAG = ltxtFlag;
        }

        var stxtFlag = false;
        if ($("#stxtFlag_Check").is(":checked")) {
            stxtFlag = true;
            object.STXT_FLAG = stxtFlag;
        } else {
            object.STXT_FLAG = stxtFlag;
        }


        DATA = [];
        DATA.push(object);



    }

//var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    genericDelete("MM_REFERENCE", DATA);

    console.log("mmReference DELETE ::: END");





}

function mmDocumentsDelete() {
    console.log("mmDocuments DELETE ::: START");
    var DATA = [];


    if (documentTabViewType == "GRID_VIEW")

    {

        var rowsSelected = getSelectedRowsData("MM_DOCUMENTS_GRID");
        DATA = rowsSelected;


    } else if (documentTabViewType == "FORM_VIEW") {


        var object = {};
        var documentNo = $('#docNo_Text').val();
        object.DOCUMENT_NO = documentNo;

        var documentType = $('#docType_Text').val();
        object.DOCUMENT_TYPE = documentType;

        var documentItem = $('#docItem_Text').val();
        object.DOCUMENT_ITEM = documentItem;

        var position = $('#position_Text').val();
        object.POSITION = position;

        var revision = $('#revision_Text').val();
        object.REVISION = revision;

        var supplierId = $('#supplId_Text').val();
        object.VENDOR_ID = supplierId;

        var supplierName = $('#supplName_Text').val();
        object.VENDOR_NAME = supplierName;

        var recordNo = $('#recordNo_Text').val();
        object.RECORD_NO = recordNo;

        var ltxtFlag = false;
        if ($("#docltxtFlag_Check").is(":checked"))
        {
            ltxtFlag = true;
            object.LTXT_FLAG = ltxtFlag;
        } else {
            object.LTXT_FLAG = ltxtFlag;
        }

        var stxtFlag = false;
        if ($("#docstxtFlag_Check").is(":checked")) {
            stxtFlag = true;
            object.STXT_FLAG = stxtFlag;
        } else {
            object.STXT_FLAG = stxtFlag;
        }

        DATA = [];
        DATA.push(object);



    }

//var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    genericDelete("MM_DOCUMENTS", DATA);


    console.log("mmDocuments DELETE ::: END");
}

function mmReferenceAdd( ) {

    genericAdd("MM_REFERENCE");

}

function mmReferenceUpdate() {

    ///mmReferenceTabUpdateAjaxCall();


    var DATA = [];
    if (refTabViewType == "GRID_VIEW") {
        var rowsSelected = getSelectedRowsData("MM_REFERENCE_GRID");
        DATA = rowsSelected;
    } else if (refTabViewType == "FORM_VIEW") {

        var object = {};

        var referenceNo = $('#referenceNo_Text').val();
        if (referenceNo == "" || referenceNo == null) {
            errorMsg("Please Enter Reference No !");
            return false;
            $("#referenceNo_Text").focus();
        } else {
            object.REFERENCE_NO = referenceNo;
        }


        var referenceType = $('#referenceType_Text').val();
        if (referenceType == "" || referenceType == null)
        {
            errorMsg("Please Enter Reference Type !");
            return false;
            $("#referenceType_Text").focus();
        } else {
            object.REFERENCE_TYPE = referenceType;
        }


        var refVendorId = $('#vendorId_Text').val();
        if (refVendorId == "" || refVendorId == null) {
            errorMsg("Please Select Vendor Id ! ");
            return false;

        } else
        {
            if (validateData("BVendors", "id.vendorId", refVendorId)) {
                object.VENDOR_ID = refVendorId;

            } else {
                validatorDilogue("Please Select Valid Vendor Id", "vendorId_Text");
                return false;

            }

        }

        var refVendorName = $('#vendorName_Text').val();

        if (refVendorName == "" || refVendorName == null)
        {
            errorMsg("Please Select Vendor Name ! ");
            return false;
            $("#vendorName_Text").focus();
        } else {
            object.VENDOR_NAME = refVendorName;
        }

        var recordNo = $('#recordNo_Text').val();
        object.RECORD_NO = recordNo;
        var ltxtFlag = false;

        if ($("#ltxtFlag_Check").is(":checked"))

        {
            ltxtFlag = true;
            object.LTXT_FLAG = ltxtFlag;
        } else {
            object.LTXT_FLAG = ltxtFlag;
        }

        var stxtFlag = false;

        if ($("#stxtFlag_Check").is(":checked"))


        {
            stxtFlag = true;
            object.STXT_FLAG = stxtFlag;
        } else {
            object.STXT_FLAG = stxtFlag;
        }

        object.OPERATION = $("#referenceOperation").val();
        //  alert("OPERATION ::: "+object.OPERATION);

        DATA = [];
        DATA.push(object)

    }




    console.log("BEFORE GENERIC UPDATE CALL :::: " + JSON.stringify(DATA));
    var tableName = "MM_REFERENCE";

    var jsonOBJ = {};
    jsonOBJ.feildIds = [];
    jsonOBJ.feildValues = [];
    $("#" + tableName + "_TABLE :input").each(function () {
        var textid = $(this).attr("id");
        var textval = $(this).val().toUpperCase();
//                  jsonOBJ.ids.push(textid.toLowerCase());
        jsonOBJ.feildIds.push(textid);
        jsonOBJ.feildValues.push(textval);

    });
    var jsondata = {};

    jsondata.RECORD_NO = $("#recordNo_Text").val();
    jsondata.BUSINESS_UNIT = $("#plant_Text").val();
    jsonOBJ.basicData = jsondata;
    genericUpdate(tableName, jsonOBJ);



}

function mmReferenceTabUpdateAjaxCall(tabId, SELECTED_DATA) {

    console.log("mmReferenceUpdate ::: START");



    var DATA = [];

    if (typeof SELECTED_DATA != 'undefined') {
        DATA = SELECTED_DATA;

        var selectedData = {};
        selectedData.DATA = JSON.stringify(DATA);
        var url = "updateMMRefTab";
        var async = false;
        var cache = false;
        var success = function (result) {

            var respMessage = JSON.parse(result);
            if (respMessage.STEPS <= 2) {

                stepActions(2);
                $("#Generate_Description").prop("disabled", false);

                $("#step2").jqxTooltip('close');
                $("#step3").jqxTooltip({content: 'Generate Description.', position: 'top', autoHide: false, trigger: "none", closeOnClick: false, showDelay: 10000});
                $("#step3").jqxTooltip('open');
            }

            errorMsg(respMessage.MESSAGE);

            refTabCheck = true;

            fetchReferenceTabData();

        }


        var req = {};
        req.data = {};
        req.url = "updateRecord";
//        req.url = url;
        req.data.jsonData = selectedData;
        req.data.viewId = selectedData;
        req.type = "POST";
        req.async = async;
        req.success = success;
        $.ajax(req);

    }




}
function mmReferenceTabDeleteAjaxCall(SELECTED_DATA) {

    var DATA = [];
    if (typeof SELECTED_DATA != 'undefined') {
        DATA = SELECTED_DATA;
        var selectedData = {};
        selectedData.DATA = JSON.stringify(DATA);
        var url = "deleteMMRefTab";
        var async = false;
        var cache = false;
        var success = function (result) {
            errorMsg(result);
            refTabCheck = true;
            fetchReferenceTabData();

        }
        var req = {};
        req.url = url;
        req.type = "POST";
        req.data = selectedData;
        req.async = async;
        req.success = success;
        $.ajax(req);

    }


}








//DOCUMENTS TAB METHODS 

var documentTabViewType = "FORM_VIEW";
var docTabCheck = true;
function fetchDocumentTabData() {

    console.log("fetchDocumentTabData ::: START");

    if (docTabCheck) {

        var recordNo = $('#recordNo_Text').val();
        var url = "getDocumentData";
        var data = {};
        data.recordNo = recordNo;
        var async = false;
        var cache = false;
        var success = function (result) {
            console.log(result);




            if (result.indexOf("Failed to Fetch Record!") > -1) {


                removeAllGridRows("MM_DOCUMENTS");
                gridViewIconsDisplay('MM_DOCUMENTS', 0);
                $('#MM_DOCUMENTS_TABLE tr').find('input:text').val('');
                $('#MM_DOCUMENTS_TABLE tr').find('input:checked').prop("checked", false);
                $('#MM_DOCUMENTS_TABLE').addClass("displayTable").removeClass("hideTable");
                $('#MM_DOCUMENTS_GRID').addClass("hideTable").removeClass("displayTable");
                documentTabViewType = "FORM_VIEW";
                $('#documentOperation').val("SAVE");




            } else
            {


//                var refData = JSON.parse(result);

                var jsnobj = JSON.parse(result);
                var refData = jsnobj.jsnArray;
                var labelobj = jsnobj.labelobj;

                var labelobjString = JSON.stringify(labelobj);

//                console.log("labelobjString::"+labelobjString);
                if (labelobjString.indexOf("\"Document Type\"")) {

                    labelobjString = labelobjString.replace("\"Document Type\"", "\"Document_Type\"");

                }
                if (labelobjString.indexOf("\"Document Item\"")) {

                    labelobjString = labelobjString.replace("\"Document Item\"", "\"Document_Item\"");
                }
                if (labelobjString.indexOf("\"Supplier Name\"")) {

                    labelobjString = labelobjString.replace("\"Supplier Name\"", "\"Supplier_Name\"");
                }
                if (labelobjString.indexOf("\"Supplier Id\"")) {

                    labelobjString = labelobjString.replace("\"Supplier Id\"", "\"Supplier_Id\"");
                }

                if (labelobjString.indexOf("\"Short Text Indicator\"")) {

                    labelobjString = labelobjString.replace("\"Short Text Indicator\"", "\"Short_Text_Indicator\"");
                }
                if (labelobjString.indexOf("\"Long Text Indicator\"")) {

                    labelobjString = labelobjString.replace("\"Long Text Indicator\"", "\"Long_Text_Indicator\"");
                }
                if (labelobjString.indexOf("\"Record No\"")) {

                    labelobjString = labelobjString.replace("\"Record No\"", "\"Record_No\"");
                }

                console.log("labelobjString:after:::::::" + labelobjString);
                labelobj = JSON.parse(labelobjString);

                if (refData.length == 1)
                {
                    removeAllGridRows("MM_DOCUMENTS");
                    gridViewIconsDisplay('MM_DOCUMENTS', 1);
                    $('#MM_DOCUMENTS_TABLE').addClass("displayTable").removeClass("hideTable");
                    $('#MM_DOCUMENTS_GRID').hide();

                    documentTabViewType = "FORM_VIEW";

                    obj = refData[0];
                    $('#docNo_Text').val(obj.DOCUMENT_NO);
                    $('#docType_Text').val(obj.DOCUMENT_TYPE);
                    $('#docItem_Text').val(obj.DOCUMENT_ITEM);
                    $('#revision_Text').val(obj.REVISION);
                    $('#position_Text').val(obj.ITEM_POSITION);
                    $('#supplId_Text').val(obj.VENDOR_ID);
                    $('#supplName_Text').val(obj.VENDOR_NAME);


                    if (obj.STXT_FLAG == true)
                    {
                        //$('#docstxtFlag_Check').val(obj.STXT_FLAG);
                        $('#docstxtFlag_Check').prop("checked", true);
                    } else {
                        $('#docstxtFlag_Check').prop("checked", false);
                    }

                    if (obj.LTXT_FLAG == true)
                    {
                        // $('#docltxtFlag_Check').val(obj.LTXT_FLAG);
                        $('#docltxtFlag_Check').prop("checked", true);
                    } else {
                        $('#docltxtFlag_Check').prop("checked", false);
                    }

                    $('#documentOperation').val(obj.OPERATION);

                } else if (refData.length > 1)
                {

                    $('#MM_DOCUMENTS_GRID').show();
                    $('#MM_DOCUMENTS_TABLE').addClass("hideTable").removeClass("displayTable");
                    gridViewIconsDisplay('MM_DOCUMENTS', refData.length);
                    documentTabViewType = "GRID_VIEW";

                    var supplierIdRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var vendorId = $('#MM_DOCUMENTS_GRID').jqxGrid('getcellvalue', row, "VENDOR_ID");
                        re = new RegExp(' ', 'g');
                        var vendorId_value = vendorId.replace(re, "_");

                        return "<div class='visionGridDataAlign' data-recid='" + row + "' data-prop='" + vendorId + "'><div class='visionGridDataAlignInfo'>" + vendorId + "</div><div class='visionGridDataAlignImage'><img  src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('88','row:" + row + "','MM_DOCUMENTS_GRID','VENDOR_ID','" + vendorId_value + "')></div></div>";
                    };
                    var documetTypeRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var doucmentType = $('#MM_DOCUMENTS_GRID').jqxGrid('getcellvalue', row, "DOCUMENT_TYPE");
                        re = new RegExp(' ', 'g');
                        var doucmentType_value = doucmentType.replace(re, "_");

                        return "<div class='visionGridDataAlign' data-recid='" + row + "' data-prop='" + doucmentType + "'><div class='visionGridDataAlignInfo'>" + doucmentType + "</div><div class='visionGridDataAlignImage'><img  src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('87','row:" + row + "','MM_DOCUMENTS_GRID','DOCUMENT_TYPE','" + doucmentType_value + "')></div></div>";
                    };
                    var documentItemRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                        var documentItem = $('#MM_DOCUMENTS_GRID').jqxGrid('getcellvalue', row, "DOCUMENT_ITEM");
                        re = new RegExp(' ', 'g');
                        var documentItem_value = documentItem.replace(re, "_");

                        return "<div class='visionGridDataAlign' data-recid='" + row + "' data-prop='" + documentItem + "'><div class='visionGridDataAlignInfo'>" + documentItem + "</div><div class='visionGridDataAlignImage'><img  src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('86','row:" + row + "','MM_DOCUMENTS_GRID','DOCUMENT_ITEM','" + documentItem_value + "')></div></div>";
                    };



                    // prepare the data
                    var data = JSON.parse(result);
                    // alert(JSON.stringify(result));
                    var source =
                            {
                                datatype: "json",
                                localdata: data,
                                datafields:
                                        [
                                            {name: 'DOCUMENT_NO', type: 'string'},
                                            {name: 'DOCUMENT_TYPE', type: 'string'},
                                            {name: 'DOCUMENT_ITEM', type: 'string'},
                                            {name: 'REVISION', type: 'string'},
                                            {name: 'POSITION', type: 'string'},
                                            {name: 'VENDOR_ID', type: 'string'},
                                            {name: 'VENDOR_NAME', type: 'string'},
                                            {name: 'STXT_FLAG', type: 'bool'},
                                            {name: 'LTXT_FLAG', type: 'bool'},
                                            {name: 'RECORD_NO', type: 'string'},
                                            {name: 'OLD_DOCUMENT_NO', type: 'string'},
                                            {name: 'OLD_DOCUMENT_TYPE', type: 'string'},
                                            {name: 'OPERATION', type: 'string'}

                                        ]

                            };




                    var dataAdapter = new $.jqx.dataAdapter(source);
                    // initialize jqxGrid
                    $("#MM_DOCUMENTS_GRID").jqxGrid(
                            {
                                width: "100%",
                                height: "200",
                                source: dataAdapter,
                                editable: true,
                                editmode: 'selectedrow',
                                columnsresize: true,
                                columnsreorder: true,
                                sortable: true,
                                filterable: true,
                                showfilterrow: true,
                                theme: 'energyblue',
                                showtoolbar: false,
                                pageable: false,
                                columns: [
                                    {text: labelobj.Document_No != null ? labelobj.Document_No : 'Document No', editable: true, datafield: 'DOCUMENT_NO', width: "17%"},
                                    {text: labelobj.Document_Type != null ? labelobj.Document_Type : 'Document Type', editable: false, datafield: 'DOCUMENT_TYPE', cellsrenderer: documetTypeRenderor, width: "17%"},
                                    {text: labelobj.Document_Item != null ? labelobj.Document_Item : 'Document Item', editable: true, datafield: 'DOCUMENT_ITEM', width: "13%"},
                                    {text: labelobj.Position != null ? labelobj.Position : 'Position', editable: true, datafield: 'POSITION', width: "8%"},
                                    {text: labelobj.Revision != null ? labelobj.Revision : 'Revision', editable: true, datafield: 'REVISION', width: "8%"},
                                    {text: labelobj.Supplier_Id != null ? labelobj.Supplier_Id : 'Supplier Id', editable: false, datafield: 'VENDOR_ID', cellsrenderer: supplierIdRenderor, width: "15%"},
                                    {text: labelobj.Supplier_Name != null ? labelobj.Supplier_Name : 'Supplier Name', editable: false, datafield: 'VENDOR_NAME', width: "12%"},
                                    {text: labelobj.Short_Text_Indicator != null ? labelobj.Short_Text_Indicator : 'Ind in SFD', editable: true, datafield: 'STXT_FLAG', threestatecheckbox: false, filtertype: 'none', sortable: false, columntype: 'checkbox', width: "5%"},
                                    {text: labelobj.Long_Text_Indicator != null ? labelobj.Long_Text_Indicator : 'Ind in POD', editable: true, datafield: 'LTXT_FLAG', threestatecheckbox: false, filtertype: 'none', sortable: false, columntype: 'checkbox', width: "5%"},
                                    {text: labelobj.Record_No != null ? labelobj.Record_No : 'Record No', hidden: true, datafield: 'RECORD_NO', width: "10%"},
                                    {text: 'Document No', hidden: true, datafield: 'OLD_DOCUMENT_NO', width: "10%"},
                                    {text: 'Document Type', hidden: true, datafield: 'OLD_DOCUMENT_TYPE', width: "10%"},
                                    {text: 'OPERATION', hidden: true, datafield: 'OPERATION', width: "10%"}
                                ]
                            });

                }

            }
            docTabCheck = false;

        }
        var req = {};
        req.url = url;
        req.data = data;
        req.async = async;
        req.type = "POST";
        req.success = success;
        $.ajax(req);
    }
    hideTabsSearchView();
    console.log("fetchDocumentTabData ::: END");
}

function mmDocumentGridView() {
    genericGridView("MM_DOCUMENTS");

}

function mmDocumentsAdd() {

    genericAdd("MM_DOCUMENTS");

}

function mmDocumentFormView() {

    genericFormView("MM_DOCUMENTS");
}
function mmDocumentsUpdate() {


    console.log("mmDocumentsUpdate ::: START");
    //   genericUpdate("MM_DOCUMENTS");
    console.log("mmd doc update :::: " + documentTabViewType);

    var DATA = [];

    if (documentTabViewType == "GRID_VIEW") {
        var rowsSelected = getSelectedRowsData("MM_DOCUMENTS_GRID");
        DATA = rowsSelected;
    } else if (documentTabViewType == "FORM_VIEW") {

        var object = {};
        var documentNo = $('#docNo_Text').val();

        if (documentNo == "" || documentNo == null) {
            errorMsg("Please Enter Document No !");
            return false;
            $("#docNo_Text").focus();
        } else {
            object.DOCUMENT_NO = documentNo;
        }


        var documentType = $('#docType_Text').val();
        if (documentType == "" || documentType == null) {
            errorMsg("Please Select Document Type !");
            return false;

        } else
        {


            if (validateData("ORecordDocument", "id.documentType", documentType)) {

                object.DOCUMENT_TYPE = documentType;
            } else {

                validatorDilogue("Please Select Valid Document Type", "docType_Text");
                return false;

            }

        }


        var documentItem = $('#docItem_Text').val();

        if (documentItem == "" || documentItem == null) {
            errorMsg("Please Select Document Item !");
            return false;

        }
        object.DOCUMENT_ITEM = documentItem;

        //(documentItem);




        var position = $('#position_Text').val();
        if (position == "" || position == null) {
            errorMsg("Please Enter Position !");
            return false;

        } else {
            object.POSITION = position;
        }



        var revision = $('#revision_Text').val();

        if (revision == "" || revision == null) {
            errorMsg("Please Enter Revision !");
            return false;

        } else {
            object.REVISION = revision;
        }


        var supplierId = $('#supplId_Text').val();
        if (supplierId == "" || supplierId == null) {
            errorMsg("Please Select Supplier Id!");
            return false;

        } else
        {
            if (validateData("BVendors", "id.vendorId", supplierId)) {
                object.VENDOR_ID = supplierId;

            } else {
                validatorDilogue("Please Select Valid Supplier Id", "supplId_Text");
                return false;

            }

        }






        var supplierName = $('#supplName_Text').val();
        if (supplierName == "" || supplierName == null) {
            errorMsg("Please Enter Supplier Name!");
            return false;
            $("#supplName_Text").focus();
        } else {
            object.VENDOR_NAME = supplierName;
        }

        var recordNo = $('#recordNo_Text').val();

        object.RECORD_NO = recordNo;


        var ltxtFlag = false;

        if ($("#docltxtFlag_Check").is(":checked"))

        {
            ltxtFlag = true;
            object.LTXT_FLAG = ltxtFlag;
        } else {
            object.LTXT_FLAG = ltxtFlag;
        }

        var stxtFlag = false;

        if ($("#docstxtFlag_Check").is(":checked")) {
            stxtFlag = true;
            object.STXT_FLAG = stxtFlag;
        } else {
            object.STXT_FLAG = stxtFlag;
        }

        object.OPERATION = $('#documentOperation').val();

        // alert($('#documentOperation').val());

        DATA = [];
        DATA.push(object);
    }


    console.log("BEFORE GENERIC UPDATE CALL :::: " + JSON.stringify(DATA));

    var tableName = "MM_DOCUMENTS";

    var jsonOBJ = {};
    jsonOBJ.feildIds = [];
    jsonOBJ.feildValues = [];
    $("#" + tableName + "_TABLE :input").each(function () {
        var textid = $(this).attr("id");
        var textval = $(this).val().toUpperCase();
//                  jsonOBJ.ids.push(textid.toLowerCase());
        jsonOBJ.feildIds.push(textid);
        jsonOBJ.feildValues.push(textval);

    });
    var jsondata = {};

    jsondata.RECORD_NO = $("#recordNo_Text").val();
    jsondata.BUSINESS_UNIT = $("#plant_Text").val();
    jsonOBJ.basicData = jsondata;
    genericUpdate(tableName, jsonOBJ);

    genericUpdate(tableName, DATA);


    console.log("mmDocumentsUpdate ::: END");
}

function mmDocumentTabDeleteAjaxCall(SELECTED_DATA) {



    console.log("mmReferenceDelete ::: START");
    var DATA = [];
    if (typeof SELECTED_DATA != 'undefined') {
        DATA = SELECTED_DATA;
        var selectedData = {};
        selectedData.DATA = JSON.stringify(DATA);
        var url = "deleteMMDocTab";
        var async = false;
        var cache = false;
        var success = function (result) {
            errorMsg(result);
            docTabCheck = true;
            fetchDocumentTabData();
        }
        var req = {};
        req.url = url;
        req.type = "POST";
        req.data = selectedData;
        req.async = async;
        req.success = success;
        $.ajax(req);

    }
    console.log("mmReferenceDelete ::: START");


}

function mmDocumentTabUpdateAjaxCall(tabId, SELECTED_DATA) {

    console.log("mmReferenceUpdate ::: START");
    var DATA = [];




    if (typeof SELECTED_DATA != 'undefined') {
        DATA = SELECTED_DATA;

        var selectedData = {};
        selectedData.DATA = JSON.stringify(DATA);
        var url = "updateMMDocTab";
        var async = false;
        var cache = false;
        var success = function (result) {

            var respMessage = JSON.parse(result);
            if (respMessage.STEPS <= 2) {

                stepActions(2);
                $("#Generate_Description").prop("disabled", false);
                $("#step2").jqxTooltip('close');
                $("#step3").jqxTooltip({content: 'Generate Description.', position: 'top', autoHide: false, trigger: "none", closeOnClick: false, showDelay: 10000});
                $("#step3").jqxTooltip('open');
            }

            errorMsg(respMessage.MESSAGE);
            // stepActions(getStepsFinished());
            docTabCheck = true;
            fetchDocumentTabData();

        }

        var req = {};
        req.data = {};
        req.url = "updateRecord";
//        req.url = url;
        req.data.jsonData = JSON.stringify(SELECTED_DATA);
        req.data.viewId = tabId;
        req.type = "POST";
        req.async = async;
        req.success = success;
        $.ajax(req);

    }

}








////////--------------------- UTILITY FUNCTIONS---------------------------/////////////////////


function getStepsFinished(recordNo) {

    var steps = -1;
    $.ajax({
        url: 'getMatRegStepsFinished',
        type: "post",
        async: false,
        dataType: 'html',
        cache: false,
        data: {
            recordNo: recordNo

        },
        success: function (responseText) {


            var resultSteps = JSON.parse(responseText);
            //jsnJSONObject.put("STEPS", -1);

            steps = resultSteps.STEPS;
        },
        error: function (e) {
            //  alert(e.message)
            sessionTimeout(e);
        }
    });


}
function getSelectedRowsData(gridId) {

    var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');

    if (indexes.length > 0) {
        var selectedRowsData = [];
        for (var i = 0; i < indexes.length; i++) {
            var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
            selectedRowsData.push(data);
        }
    }

    return selectedRowsData;

}


function errorMsg(response) {


    $("#dialog").html(response);
    $("#dialog").dialog({resizable: false,
        modal: true,
        title: "Message",
        textAlign: 'center',
        minWidth: 300,
        maxWidth: 'auto',
        height: 150,
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

}


function gridViewIconsDisplay(icnCmnId, noOfRecords) {

    if (noOfRecords == 0) {

        $('#' + icnCmnId + '_Add').css("display", "none");
        $('#' + icnCmnId + '_Update').css("display", "block");
        $('#' + icnCmnId + '_Delete').css("display", "none");
        $('#' + icnCmnId + '_Grid_View').css("display", "none");
        $('#' + icnCmnId + '_Form_View').css("display", "none");

    } else if (noOfRecords == 1) {
        $('#' + icnCmnId + '_Add').css("display", "block");
        $('#' + icnCmnId + '_Update').css("display", "block");
        $('#' + icnCmnId + '_Delete').css("display", "block");
        $('#' + icnCmnId + '_Grid_View').css("display", "none");
        $('#' + icnCmnId + '_Form_View').css("display", "none");

    } else if (noOfRecords > 1) {


        $('#' + icnCmnId + '_Add').css("display", "block");
        $('#' + icnCmnId + '_Update').css("display", "none");
        $('#' + icnCmnId + '_Delete').css("display", "none");
        $('#' + icnCmnId + '_Grid_View').css("display", "none");
        $('#' + icnCmnId + '_Form_View').css("display", "none");

    }

}
var fetchERPDataFlag = false;
function fetchErpTabData()
{



//class='txterpclass'
//class='chberpclass'
//class='taerpclass'
//class='selecterpclass'

//DATE
//ddwerpclass
//if(getStepsFinished()>-1 && getStepsFinished()>=3)
    if (true)
    {
        $("#MM_ERPDATA_Update").show();
        if (!fetchERPDataFlag)
        {

            fetchERPDataFlag = true;
            var jsondata = {};
            var businessUnit = $("#BUSINESS_UNIT").val();
            var materialType_Text = $("#RECORD_TYPE").val();

            var baskettype = $('#baskettypehid').val();
            var recordNo_Text = $("#RECORD_NO").val();
            jsondata.recordNo = recordNo_Text;
            jsondata.matlType = materialType_Text;

            jsondata.baskettype = baskettype;
            jsondata.businessUnit = businessUnit;
            var jsonDataString = JSON.stringify(jsondata);
            $.ajax({
                url: 'getErpData',
                type: "post",
                traditional: true,
                dataType: 'html',
                cache: false,
                data: {
                    jsonData: jsonDataString

                },
                success: function (responseText) {
//                 $("#erpData").remove();
                    // alert(responseText);
                    var baskettype = $("#baskettypehid1").val();
                    $("#erpData").append(responseText);
                    $('#erpData').jqxTabs({position: 'top', width: '100%', reorder: true, theme: 'energyblue'});

                    //data-vaue     
                    var date_value = $(this).attr('data-vaue');
                    $('.DATE').each(function () {
                        console.log('.DATE:data-vaue:::' + $(this).attr('data-vaue'));

                        if (date_value != null && date_value != '') {


                            if (baskettype == 'Search View')
                            {
                                $(this).jqxDateTimeInput({disabled: true, width: 150, height: 22, value: $(this).attr('data-vaue')});
                            } else {

                                $(this).jqxDateTimeInput({width: 150, height: 22, value: $(this).attr('data-vaue')});
                            }


                        } else
                        {
                            if (baskettype == 'Search View')
                            {
                                $(this).jqxDateTimeInput({disabled: true, width: 150, height: 22, value: new Date()});
                            } else {
                                $(this).jqxDateTimeInput({width: 150, height: 22, value: new Date()});
                            }

                        }
                    });
                    // $('.DATE').jqxDateTimeInput({ width: 150, height: 22, value: new Date() });

                },
                error: function (e) {
                    //  alert(e.message)
                    sessionTimeout(e);
                }

            });

        }
    } else {
        $("#MM_ERPDATA_Update").hide();
    }
//    alert('entered erp data');
    hideTabsSearchView();

}
function mmErpDataUpdate() {


    var ch = [];
    $("#erpData div:nth-child(2)>div").each(function () {
        ch.push($(this).attr("id"));
    });

//alert(ch);
    var jsonOBJ = {};
    jsonOBJ.ids = [];
    jsonOBJ.values = [];
    var th = [];
    for (var i = 0; i < ch.length; i++) {
        // alert(ch[i]);
        $("#erpData div:nth-child(2) #" + ch[i]).children().each(function () {
            $(this).find("input").each(function () {

                var textId = $(this).attr("id");
                th.push(textId);
                var textval = $("#" + textId).val();
                var textid = textId.replace("input", "");


                jsonOBJ.ids.push(textid.toLowerCase());
                jsonOBJ.values.push(textval);
            });
        });

        //alert(th);
    }

//        alert(JSON.stringify(jsonOBJ));

    console.log(JSON.stringify(jsonOBJ));

    var jsondata = {};
    var businessUnit = $("#plant_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var baskettype = $('#baskettypehid').val();
    var recordNo_Text = $("#recordNo_Text").val();
    jsondata.recordNo = recordNo_Text;
    jsondata.matlType = materialType_Text;

    jsondata.baskettype = baskettype;
    jsondata.businessUnit = businessUnit;

    jsonOBJ.basic = jsondata;
    $.ajax({
        url: 'updateErpData',
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            jsonData: JSON.stringify(jsonOBJ)

        },
        success: function (responseText)



        {



            var respMessage = JSON.parse(responseText);
            if (respMessage.STEPS == 4) {

                stepActions(4);

            }

            //errorMsg(respMessage.MESSAGE);
            $("#dialog").html(respMessage.MESSAGE);
            $("#dialog").dialog({resizable: false,
                modal: true,
                title: "Message",
                textAlign: 'center',
                minWidth: 300,
                maxWidth: 'auto',
                height: 150,
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

        },
        error: function (e) {
            //  alert(e.message)
            sessionTimeout(e);
        }


//        {
//
//            $("#dialog").html(responseText);
//            $("#dialog").dialog({ resizable: false,
//                modal: true,
//                height: 150,
//                title: "Message",
//                minWidth: 300,
//                maxWidth: 'auto',
//                textAlign: 'center',
//                buttons: {
//                    Ok: function() {
//                        $(this).dialog("close");
//                    }
//                }
//            });
//
//
//        }




        , error: function (resT) {
            // alert("Error:" + resT);
        }

    });


}

function fetchDescriptionsTabData() {
    var jsondata = {};
    var businessUnit = $("#plant_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var baskettype = $('#baskettypehid').val();
    var recordNo_Text = $("#recordNo_Text").val();
    jsondata.recordNo = recordNo_Text;
    jsondata.matlType = materialType_Text;

    jsondata.baskettype = baskettype;
    jsondata.businessUnit = businessUnit;
    var jsonDataString = JSON.stringify(jsondata);
    $.ajax({
        url: 'getTextData',
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            jsonData: jsonDataString

        },
        success: function (responseText) {
            // prepare the data
            var data = JSON.parse(responseText);
            // alert(JSON.stringify(result));
            var source =
                    {
                        datatype: "json",
                        localdata: data,
                        datafields:
                                [
                                    {name: 'TYPE', type: 'string'},
                                    {name: 'TEXT', type: 'string'},
                                    {name: 'LOCALE', type: 'string'}

                                ]

                    };




            var dataAdapter = new $.jqx.dataAdapter(source);
            // initialize jqxGrid
            $("#MM_DESCRIPTIONS_GRID").jqxGrid(
                    {
                        width: "100%",
                        height: "160",
                        rowsheight: 50,
                        source: dataAdapter,
                        editable: false,
                        editmode: 'selectedrow',
                        columnsresize: true,
                        columnsreorder: true,
                        sortable: true,
                        filterable: true,
                        showfilterrow: true,
                        theme: 'energyblue',
                        showtoolbar: false,
                        pageable: false,
                        columns: [
                            {text: 'Type', editable: true, datafield: 'TYPE', width: "15%"},
                            {text: 'Text', editable: false, datafield: 'TEXT', width: "80%",
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {//overflow-y:scroll;height:100%;
                                    //return "";

                                    return "<textarea readonly style='background-color:inherit;border:none;width:100%;height:100%; font:11px Arial;line-height:17px;'>" + value + "</textarea>";
                                }
                            },
                            {text: 'Locale', editable: true, datafield: 'LOCALE', width: "5%"}

                        ]
                    });
        },
        error: function (e) {
            //  alert(e.message)
            sessionTimeout(e);
        }
    });
}



//// FILE ATTACHMENT START 
function showimage() {
    var params = {
        recordNo: $("#RECORD_NO").val()
    };
    var csrfToken = $("input[name='_csrf']").val();
    if (csrfToken != null && csrfToken != '') {
        params['_csrf'] = $("input[name='_csrf']").val();
    }
    $('#profilepic1').ajaxfileupload({
        'action': 'UploadAttachFiles',
        params: params,
//        'action': 'UploadAttachFiles?recordNo=' + $("#RECORD_NO").val(),
        'onComplete': function (response) {

            $('#upload').hide();
            //  $('#message').show();

            console.log("in upload");
            var statusVal = JSON.stringify(response.message);
            var obj = JSON.parse(statusVal);

            var filename = obj.filename;

            var filestring = obj.fileString;

            $("#profilepichidden").val(filename);

            console.log("image" + filename);

            fetchAttachmentsTabData();


        }


    });

}


function showPreview(rowid)
{

    $('#image_' + rowid).click(function () {
        var img = $(this).attr('src');
        //alert(img);
        $('#d2').empty();
        if (img == "images/no-image.jpg")
        {
            // alert("unable to delete");
            $('#d2').remove();
        } else
        {
            $('#d2').append("<img src='" + img + "' style='width:150px;height:150px;align:right'/><img src='./images/delete.png' id='img1' style='width:15px;height:15px;margin-bottom:135px' onclick='deleteAttach()'>");
        }
    });

}


//// FILE ATTACHMENT START 
var fetchattach = false;
function fetchAttachmentsTabData(tabId, tabOldId, dependentAccorId, currntAccorId, wrapInd) {

    console.log("fetchAttachmentsTabData ::: START");
    try {
        let checkbox = $("#cb-switch");
        var fioriThemeCheck = checkbox.is(":checked");
        if (fioriThemeCheck) {
            try {
                $("#generalDivId").hide();
                $("#allTabListMainWrapperId .fioriformTabUlListclass").find("li").removeClass("fioriHighlightTab");
                var currentTargetElement = $(event.target).closest("li");
                currentTargetElement.addClass("fioriHighlightTab");
            } catch (e) {
                console.log(e);
            }
        }
        var fullScreenViewFlag = $("#extendedFullScreenViewFlag").val();
        if (fullScreenViewFlag != null && fullScreenViewFlag != 'undefined'
                && fullScreenViewFlag != undefined && fullScreenViewFlag != "" && fullScreenViewFlag == "Y")
        {
            toggleFullScreen();
        }
        $("#extendedFullScreenViewFlag").val("NA");
    } catch (e) {

    }
    var dependentAccorId = dependentAccorId;
    if (currntAccorId > -1) {
        alert(currntAccorId);
        // startAjax();
        $("[class*=_OLD]").addClass("ui-state-disabled");
        $(".ui-state-disabled").not(dependentAccorId).next("div").hide();
        $(dependentAccorId).next("div").toggle();
        $(".visionAccordionSeperator").remove();
        $("#" + tabId).after("<div class='visionAccordionSeperator'></div>");
        fetchAttachmentsTabData(tabOldId, tabId, '', '-1', 1);
    }


    var record_No = $('#RECORD_NO').val();
    var specModelNo = $("#SPEC_MODEL_NO").val();


    var requestNumber = $('#REQ_NUMBER').val();
    var baskettype = $('#baskettypehid').val();
    var enclosureedit = $("#encEditable").val();
    if (!fetchattach)
    {

        $.ajax({
            type: "post",
            traditional: true,
            // url: "SelectFiles?recordNo=" + record_No + "&&specModelNo= " + specModelNo + "&&baskettype=" + baskettype + "&&reqNumber=" + requestNumber + "&&tabId=" + tabId + "&&enclosureEdit=" + enclosureedit,
            url: "SelectFiles?recordNo=" + record_No + "&&specModelNo= " + specModelNo + "&&baskettype=" + baskettype + "&&reqNumber=" + requestNumber + "&&tabId=" + tabId + "&&enclosureEdit=" + enclosureedit,
            //url: "SelectFiles?recordNo=" + record_No + "&&baskettype=" + baskettype + "&&reqNumber=" +requestNumber +" &&tabId=" +tabId,
            cache: false,
            async: false,
            dataType: 'html',
            success: function (result) {
                if (fioriThemeCheck) {
                    $(".visionRegisterMaterialTableTab").hide();
                    $("#" + tabId).closest(".visionRegisterMaterialTableTab").show();
                }
                $("#" + tabId).hide();
                $("#" + tabId).parent().addClass("attachmentWrapper");
                $("#" + tabId + "_TABLE").html(result);
                $("#" + tabId + "_TABLE").removeClass('visionEnclosureTable');
                $("#" + tabId + "_TABLE").addClass('visionEnclosureTable');
                $("#" + tabId + "_TABLE").attr("cellspacing", "5");
                $("#" + tabId + "_TABLE").attr("cellpadding", "5");
                $("#" + tabId + "_TABLE").attr("border", "1");

                var i = 0;
                if ($("#baskettypehid").val() == 'Search_View'
                        ||
                        $("#baskettypehid").val() == '_New_Extension_Requests' ||
                        $("#baskettypehid").val() == '_New_Change_Requests' ||
                        $("#baskettypehid").val() == '_New_Deletion_Requests' ||
                        $("#baskettypehid").val() == '_New_Undeletion_Requests'


                        )
                {
//                     if(tabOldId !=null || tabOldId == 'MM_ATTACHMENTS_OLD')
//                     {
//                         tabId = tabOldId;
//                     }
//                     //alert(tabId);
//                    $("#" + tabId +"tr").each(function () {
//                    //$("#encloseTable tr").each(function () {
//                       if(tabId == "MM_ATTACHMENTS_OLD")
//                       {
//                           $('#browseOldId_' + i).hide();
//                       }
//                       else
//                       {
//                           $('#browseId_' + i).hide();
//                       }
//                        
//                        $(this).find("td:eq(1)").find("div").remove();
//                        i++;
//                    }
//                    );

                }
//                else {
//                    i = 0;
//                   // alert("tabid::::"+tabId);
//                  $("#" + tabId + "  > tbody  > tr").each(function () {
//                   
//                   //   alert("inside loop");
//                   // $("#encloseTable tr").each(function () {
//                       // alert("parseInt($(this).attr('data-count')::" + parseInt($(this).attr('data-count')));
//                        if (parseInt($("#" + tabId).attr('data-count')) >= 5)
//                        {
//                             if(tabId == "MM_ATTACHMENTS_OLD")
//                             {
//                             $('#browseOldId_' + i).hide();
//                            $('#browseOldId_' + i).parent().toggleClass('attach-table-style');
//                            $('#browseOldId_' + i).parent().toggleClass('bttn-info');
//                            }
//                             else
//                             {
//                              $('#browseId_' + i).hide();
//                            $('#browseId_' + i).parent().toggleClass('attach-table-style');
//                            $('#browseId_' + i).parent().toggleClass('bttn-info');
//                             }
//                           
//                            $(this).find("td:eq(1)").find("div").remove();
//                        }
//                        else{
//                            alert("in else");
//                       showBrowseButton(i,tabId);}
//                        i++;
//                    });
//                }

//                var list = JSON.parse(result);
//                // alert(list);
//                for (var i = 0; i < list.length; i++) {
//                    obj = list[i];
//                    //alert(obj.file1);
//                    $("#d1").empty();
//                    $("#d1").append(obj.blobString);
//
//
//                }
                fetchattach = false;

            },
            error: function (e) {
                //  alert(e.message)
                sessionTimeout(e);
            }

        });
    }



    console.log("fetchAttachmentsTabData ::: END ");
}

var browseId = "";
function showBrowseButton(param, tabId, dataView, response)
{
//    showLoader();
    try {
        if (response != null && response != '' && response != undefined) {
            $("div.visionCoFileImage").html(response);
        }
    } catch (e) {

    }

    try {
        exitFullScreenMode();
    } catch (e) {

    }
    $(".addIcon_" + param).hide();
    if (tabId == "MM_ATTACHMENTS_OLD")
    {
        var listval1 = $('#listOld_' + param).val();
    } else
    {
        var listval1 = $('#list_' + param).val();
    }

    var encvalue = listval1;
    var record_No = $('#RECORD_NO').val();
    var specModelNo = $("#SPEC_MODEL_NO").val();
    var vendorId = $('#VENDOR_ID').val();
    var baskettype1 = $("#baskettypehid").val();
    var source = $('#SOURCE').val();
    var accountId = $('#ACCOUNT_ID').val();
    if (!(source != null && source != '' && source != undefined))
    {
        source = $("#" + tabId).attr("initParamSource");
        if (!(source != null && source != '' && source != undefined))
        {
            source = $("#initParamSource").val();
        }
    }
    var defaultFlag = "";
    var baskettype = "";
    if (baskettype1 != null && baskettype1 != '') {
        baskettype = baskettype1.replace(/\s/gi, "_");
    }

    var request_number = $("#REQ_NUMBER").val();

    var locate_code = $("#locatcode").val();
//    var url = 'UploadAttachFiles?recordNo=' + $("#RECORD_NO").val() + '&specModelNo=' + specModelNo + '&attachType=' + listval1 + '&requestNumber=' + request_number;
    var url = 'UploadAttachFiles';
//    var url = 'UploadAttachFiles?recordNo=' +record_No+ '&specModelNo=' + specModelNo + '&attachType=' + listval1 + '&requestNumber=' + request_number;
    var params = {
//        recordNo: record_No,
//        specModelNo: specModelNo,
////        attachType: listval1,
//        requestNumber: request_number,
        tabId: tabId,
        gridId: tabId
    };
// var csrfToken = $("input[name='_csrf']").val();
//        if (csrfToken != null && csrfToken != '') {
//            params['_csrf'] = $("input[name='_csrf']").val();
//        }

    params['source'] = source;
    if (dataView != null && dataView != '' && dataView == "GRID-VIEW")
    {
//        var panelId = $("#panelId").val();
//        var tableName = $("#tableName").val();

        params['panelId'] = $("#panelId").val();
        params['tableName'] = $("#tableName").val();
        listval1 = $('#' + tabId).jqxGrid('getcellvalue', 0, "ATTACH_TYPE");
        var checkAttachType = $("#checkAttachType").val();
        if (!(checkAttachType != null && checkAttachType != '' && checkAttachType != undefined))
        {
            checkAttachType = $("#" + tabId).attr("checkAttachType");
        }
        params['checkAttachType'] = checkAttachType;
        defaultFlag = $('#' + tabId).jqxGrid('getcellvalue', 0, "DEFAULT_FLAG");
        if (defaultFlag)
        {
            defaultFlag = "Y";
        } else
        {
            defaultFlag = "N";
        }
        params['defaultFlag'] = defaultFlag;

        params['accountId'] = accountId;

        try {
            var data = $('#' + tabId).jqxGrid('getrowdata', 0);
            if (data != null) {

                for (var datakey in data) {
                    if (datakey != null && datakey != 'CONTENT') {
                        var datatextval = data[datakey];
                        try {
                            if (datatextval != null && datatextval != '') {
                                datatextval = datatextval.toUpperCase();
                            }
                        } catch (k) {
                            datatextval = data[datakey];
                        }

                        params[datakey] = datatextval;
                    }
                }
            }
        } catch (e) {

        }


        try {
            var basicData = {};
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
//            if (textid != null && textid != 'CREATE_DATE' && textid != 'EDIT_DATE') {
//
//                basicData[textid] = textval;
//            }

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
                    }

                }
//                    jsonOBJ.feildIds.push(textid);
//                    jsonOBJ.feildValues.push(textval);

            });

            if (basicData != null) {

                for (var key in basicData) {
                    if (key != null && key != 'CONTENT' && key != 'AUDIT_ID' && key != 'tableName' && key != 'gridId') {
                        params[key] = basicData[key];
                    }
                }
            }


            try {
                $(".visionRegisterMaterialCreation :input").each(function () {

                    try {
                        var textid = $(this).attr("id");
                        var type = $(this).attr("type");
                        var textval = $(this).val();
                        delete basicData [textid];
                        basicData[textid] = textval;
                    } catch (e) {

                    }
                });
            } catch (e) {

            }


        } catch (e) {

        }

//        var masterId = $("#mastergridid").val();
//        if (masterId != null && masterId != '' && masterId != undefined) {
//            var selectedrowindex = $('#' + masterId).jqxGrid('getselectedrowindex');
//            record_No = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "RECORD_NO");
//            request_number = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "REQ_NUMBER");
//            specModelNo = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "SPEC_MODEL_NO");
//            var spirRecId = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "SPIR_REC_ID");
//            vendorId = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "VENDOR_ID");
//            params['spirRecId'] = spirRecId;
//        }
    }

    params['recordNo'] = record_No;
    params['requestNumber'] = request_number;
    params['specModelNo'] = specModelNo;
    params['attachType'] = listval1;
    params['vendorId'] = vendorId;
    window.chckValues.push(param);
    var attach_val = "Y";
    if (attach_val.trim() == 'Y')
    {
        //  alert(attach_val);
        var id = "#browseTdId_" + param;
        // alert(id);
        if (tabId == "MM_ATTACHMENTS_OLD")
        {
            browseId = "#browseIdOld_" + param;
        } else
        {
            browseId = "#browseId_" + param;
        }
        if (dataView == "GRID-VIEW")
        {
            browseId = "#visionColFileId";
        }

        $(id).show();
        var validExtensions = ['xps', 'gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff', 'pdf', 'bmp', 'xls', 'xlsx', 'doc', 'docx', 'txt'];
        var validExtensionsString = $(browseId).attr("accept");
        if (validExtensionsString != null && validExtensionsString != 'undefined' && validExtensionsString != '') {
            var validExtensionsStr = validExtensionsString.replace(/\./gi, "");
            validExtensions = validExtensionsStr.split(',');
        }
        //    params['validExtensions'] = JSON.stringify(validExtensions);
        try {
            $(browseId).ajaxfileupload({
                'action': url,
                params: params,
                valid_extensions: validExtensions,
//            valid_extensions: ['xps', 'gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff', 'pdf', 'bmp', 'xls', 'xlsx', 'doc', 'docx', 'txt'],
                'onComplete': function (response) {

//                    $("#wait").css("display", "none");
                    stopLoader();
                    var serverResponce = JSON.stringify(response.message);
//                     var serverResponce = response;
// serverResponce = serverResponce.replace('<pre style=\"word-wrap: break-word; white-space: pre-wrap;\">', '').replace('</pre>', '');
//serverResponce = serverResponce.substr(serverResponce.lastIndexOf('\">')+2, serverResponce.lastIndexOf('</pre>')-7 );
                    if (serverResponce.lastIndexOf("</pre>") > -1) {
                        serverResponce = serverResponce.substr(serverResponce.lastIndexOf('\">') + 2, serverResponce.lastIndexOf('</pre>') - 7);

                    }

                    $(id).hide();

                    if (serverResponce.indexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

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


                    } else if (serverResponce.indexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

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

                    } else if (serverResponce.indexOf("Maximum Size") > -1 || serverResponce.indexOf("Maximum File Size") > -1) {//Size of each file should not exceed based on max size in battachtype table.
                        var res = serverResponce.replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '');
                        $("#dialog").html(res);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            width: 400,
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

                    } else if (serverResponce.indexOf("Please Upload Image or PDF File Only.") > -1
                            || serverResponce.indexOf("Please Upload files with") > -1) {//Size of each file should not exceed 5000KB.
                        $("#dialog").html("Please Upload files with " + validExtensionsString + " extension(s) only");
//                    $("#dialog").html(serverResponce);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
//                            width: 270,
//                            height: 135,
                            width: 'auto',
                            height: 'auto',
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

                    } else if (serverResponce.indexOf("Failed to Insert.Multiple rows does not allow Default Flag") > -1
                            || serverResponce.indexOf("Please Insert one Attachment with Default Flag") > -1) {//Size of each file should not exceed 5000KB.
                        serverResponce = serverResponce.replace(/['"]+/g, '');
                        var dialogSplitMessage = dialogSplitIconText(serverResponce, "Y");
                        $("#dialog").html(dialogSplitMessage);
//                    $("#dialog").html(serverResponce);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            width: 'auto',
                            height: 'auto',
                            fluid: true,
                            buttons: {
                                Ok: function () {
                                    $(this).dialog("close");
                                    if (dataView == "GRID-VIEW")
                                    {

                                        if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
                                            //fetchTabsData(masterId, selectedrowindex);
                                            refreshGridData(tabId);
                                        } else {
                                            fetchAttachmentsTabGridData(tabId);
                                        }
                                    }
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

                    } else if (serverResponce.indexOf("Failed") > -1) {//return from function.
                        serverResponce = serverResponce.replace(/['"]+/g, '');
                        serverResponce = serverResponce.replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '');
                        var dialogSplitMessage = dialogSplitIconText(serverResponce, "H");
                        $("#dialog").html(dialogSplitMessage);
//                    $("#dialog").html(serverResponce);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            width: 'auto',
                            height: 'auto',
                            fluid: true,
                            buttons: {
                                Ok: function () {
                                    $(this).dialog("close");
//                                if (dataView == "GRID-VIEW")
//                                    {
//
//                                        if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
//                                            //fetchTabsData(masterId, selectedrowindex);
//                                            refreshGridData(tabId);
//                                        } else {
//                                            fetchAttachmentsTabGridData(tabId);
//                                        }
//                                    }
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
                        if (dataView == "GRID-VIEW")
                        {

                            if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
                                //fetchTabsData(masterId, selectedrowindex);
                                refreshGridData(tabId);
                            } else {
                                fetchAttachmentsTabGridData(tabId);
                            }
                        } else
                        {
                            fetchAttachmentsTabData(tabId);
                        }

//                    fetchAttachmentsTabData(tabId);
                    }
                    $("body").css({"pointer-events": "auto"});
                },
                'onStart': function () {
                    showLoader();
                    $("body").css({"pointer-events": "none"});
                    $("#wait").css("display", "block");
                    // $('#message').hide();
                }
            });
        } catch (e) {
            stopLoader();
        }
//        $("#browseTdId_" + param).show();

        $(id).on('uploadEnd', function (event) {
            var args = event.args;
            var fileName = args.file;
            var serverResponce = args.response;

            $(id).hide();

            if (serverResponce.indexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

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

            } else if (serverResponce.indexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

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




            } else if (serverResponce.indexOf("Please Uplaod Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.

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


            } else if (serverResponce.indexOf("Failed") > -1) {//return from function.
                serverResponce = serverResponce.replace(/['"]+/g, '');
                serverResponce = serverResponce.replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '');
                var dialogSplitMessage = dialogSplitIconText(serverResponce, "H");
                $("#dialog").html(dialogSplitMessage);
//                    $("#dialog").html(serverResponce);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    width: 'auto',
                    height: 'auto',
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");
//                                if (dataView == "GRID-VIEW")
//                                    {
//
//                                        if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
//                                            //fetchTabsData(masterId, selectedrowindex);
//                                            refreshGridData(tabId);
//                                        } else {
//                                            fetchAttachmentsTabGridData(tabId);
//                                        }
//                                    }
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
        if (dataView == "GRID-VIEW")
        {
            $(browseId).click();
        }
    } else
    {

//        $("#browseTdId_" + param).hide();

    }
}
function showClusterBrowseButton(param, tabId, dataView, response)
{
//    showLoader();
    try {
        if (response != null && response != '' && response != undefined) {
            $("div.visionCoFileImage").html(response);
        }
    } catch (e) {

    }
    try {
        exitFullScreenMode();
    } catch (e) {

    }
    $(".addIcon_" + param).hide();
    if (tabId == "MM_ATTACHMENTS_OLD")
    {
        var listval1 = $('#listOld_' + param).val();
    } else
    {
        var listval1 = $('#list_' + param).val();
    }

    var encvalue = listval1;
    var record_No = $('#RECORD_NO').val();
    var specModelNo = $("#SPEC_MODEL_NO").val();
    var vendorId = $('#VENDOR_ID').val();
    var baskettype1 = $("#baskettypehid").val();
    var source = $('#SOURCE').val();
    var accountId = $('#ACCOUNT_ID').val();
    if (!(source != null && source != '' && source != undefined))
    {
        source = $("#" + tabId).attr("initParamSource");
        if (!(source != null && source != '' && source != undefined))
        {
            source = $("#initParamSource").val();
        }
    }
    var defaultFlag = "";
    var baskettype = "";
    if (baskettype1 != null && baskettype1 != '') {
        baskettype = baskettype1.replace(/\s/gi, "_");
    }

    var request_number = $("#REQ_NUMBER").val();

    var locate_code = $("#locatcode").val();
//    var url = 'UploadAttachFiles?recordNo=' + $("#RECORD_NO").val() + '&specModelNo=' + specModelNo + '&attachType=' + listval1 + '&requestNumber=' + request_number;
    var url = 'UploadAttachFiles';
//    var url = 'UploadAttachFiles?recordNo=' +record_No+ '&specModelNo=' + specModelNo + '&attachType=' + listval1 + '&requestNumber=' + request_number;
    var params = {
//        recordNo: record_No,
//        specModelNo: specModelNo,
////        attachType: listval1,
//        requestNumber: request_number,
        tabId: tabId,
        gridId: tabId
    };
// var csrfToken = $("input[name='_csrf']").val();
//        if (csrfToken != null && csrfToken != '') {
//            params['_csrf'] = $("input[name='_csrf']").val();
//        }

    if (dataView != null && dataView != '' && dataView == "GRID-VIEW")
    {
//        var panelId = $("#panelId").val();
//        var tableName = $("#tableName").val();
        params['panelId'] = $("#panelId").val();
        params['tableName'] = $("#tableName").val();
        listval1 = $('#' + tabId).jqxGrid('getcellvalue', 0, "ATTACH_TYPE");
        var checkAttachType = $("#checkAttachType").val();
        if (!(checkAttachType != null && checkAttachType != '' && checkAttachType != undefined))
        {
            checkAttachType = $("#" + tabId).attr("checkAttachType");
        }
        params['checkAttachType'] = checkAttachType;
        defaultFlag = $('#' + tabId).jqxGrid('getcellvalue', 0, "DEFAULT_FLAG");
        if (defaultFlag)
        {
            defaultFlag = "Y";
        } else
        {
            defaultFlag = "N";
        }
        params['defaultFlag'] = defaultFlag;
        params['source'] = source;
        params['accountId'] = accountId;

        try {
            var data = $('#' + tabId).jqxGrid('getrowdata', 0);
            if (data != null) {

                for (var datakey in data) {
                    if (datakey != null && datakey != 'CONTENT' && datakey != 'AUDIT_ID') {
                        var datatextval = data[datakey];
                        try {
                            if (datatextval != null && datatextval != '') {
                                datatextval = datatextval.toUpperCase();
                            }
                        } catch (k) {
                            datatextval = data[datakey];
                        }

                        params[datakey] = datatextval;
                    }
                }
            }
        } catch (e) {

        }


        try {
            var basicData = {};
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
//            if (textid != null && textid != 'CREATE_DATE' && textid != 'EDIT_DATE') {
//
//                basicData[textid] = textval;
//            }

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
                    }

                }
//                    jsonOBJ.feildIds.push(textid);
//                    jsonOBJ.feildValues.push(textval);

            });

            if (basicData != null) {

                for (var key in basicData) {
                    if (key != null && key != 'CONTENT' && key != 'AUDIT_ID' && key != 'tableName' && key != 'gridId') {
                        params[key] = basicData[key];
                    }
                }
            }


        } catch (e) {

        }

        var masterId = $("#mastergridid").val();
        if (masterId != null && masterId != '' && masterId != undefined) {
            var selectedrowindex = $('#' + masterId).jqxGrid('getselectedrowindex');
            record_No = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "RECORD_NO");
            request_number = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "REQ_NUMBER");
            specModelNo = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "SPEC_MODEL_NO");
            var spirRecId = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "SPIR_REC_ID");
            vendorId = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "VENDOR_ID");
            params['spirRecId'] = spirRecId;
        }
    }

    params['recordNo'] = record_No;
    params['requestNumber'] = request_number;
    params['specModelNo'] = specModelNo;
    params['attachType'] = listval1;
    params['vendorId'] = vendorId;
    window.chckValues.push(param);
    var attach_val = "Y";
    if (attach_val.trim() == 'Y')
    {
        //  alert(attach_val);
        var id = "#browseTdId_" + param;
        // alert(id);
        if (tabId == "MM_ATTACHMENTS_OLD")
        {
            browseId = "#browseIdOld_" + param;
        } else
        {
            browseId = "#browseId_" + param;
        }
        if (dataView == "GRID-VIEW")
        {
            browseId = "#visionColFileId";
        }

        $(id).show();
        var validExtensions = ['xps', 'gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff', 'pdf', 'bmp', 'xls', 'xlsx', 'doc', 'docx', 'txt'];
        var validExtensionsString = $(browseId).attr("accept");
        if (validExtensionsString != null && validExtensionsString != 'undefined' && validExtensionsString != '') {
            var validExtensionsStr = validExtensionsString.replace(/\./gi, "");
            validExtensions = validExtensionsStr.split(',');
        }
        //    params['validExtensions'] = JSON.stringify(validExtensions);
        try {
            $(browseId).ajaxfileupload({
                'action': url,
                params: params,
                valid_extensions: validExtensions,
//            valid_extensions: ['xps', 'gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff', 'pdf', 'bmp', 'xls', 'xlsx', 'doc', 'docx', 'txt'],
                'onComplete': function (response) {

//                    $("#wait").css("display", "none");
                    stopLoader();
                    var serverResponce = JSON.stringify(response.message);
//                     serverResponce = serverResponce.replace('<pre style=\"word-wrap: break-word; white-space: pre-wrap;\">', '').replace('</pre>', '');
                    if (serverResponce.lastIndexOf("</pre>") > -1) {
                        serverResponce = serverResponce.substr(serverResponce.lastIndexOf('\">') + 2, serverResponce.lastIndexOf('</pre>') - 7);

                    }

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

                    } else if (serverResponce.lastIndexOf("Maximum Size") > -1) {//Size of each file should not exceed based on max size in battachtype table.
                        var res = serverResponce.replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '');
                        $("#dialog").html(res);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            width: 400,
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

                    } else if (serverResponce.lastIndexOf("Please Upload Image or PDF File Only.") > -1
                            || serverResponce.lastIndexOf("Please Upload files with") > -1) {//Size of each file should not exceed 5000KB.
                        $("#dialog").html("Please Upload files with " + validExtensionsString + " extension(s) only");
//                    $("#dialog").html(serverResponce);
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

                    } else if (serverResponce.lastIndexOf("Failed to Insert.Multiple rows does not allow Default Flag") > -1
                            || serverResponce.lastIndexOf("Please Insert one Attachment with Default Flag") > -1) {//Size of each file should not exceed 5000KB.
                        serverResponce = serverResponce.replace(/['"]+/g, '');
                        var dialogSplitMessage = dialogSplitIconText(serverResponce, "Y");
                        $("#dialog").html(dialogSplitMessage);
//                    $("#dialog").html(serverResponce);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            width: 'auto',
                            height: 'auto',
                            fluid: true,
                            buttons: {
                                Ok: function () {
                                    $(this).dialog("close");
                                    if (dataView == "GRID-VIEW")
                                    {

                                        if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
                                            //fetchTabsData(masterId, selectedrowindex);
                                            refreshGridData(tabId);
                                        } else {
                                            fetchAttachmentsTabGridData(tabId);
                                        }
                                    }
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

                    } else if (serverResponce.lastIndexOf("Failed") > -1) {//return from function.
                        serverResponce = serverResponce.replace(/['"]+/g, '');
                        serverResponce = serverResponce.replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '');
                        var dialogSplitMessage = dialogSplitIconText(serverResponce, "H");
                        $("#dialog").html(dialogSplitMessage);
//                    $("#dialog").html(serverResponce);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            width: 'auto',
                            height: 'auto',
                            fluid: true,
                            buttons: {
                                Ok: function () {
                                    $(this).dialog("close");
                                    if (dataView == "GRID-VIEW")
                                    {

                                        if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
                                            //fetchTabsData(masterId, selectedrowindex);
                                            refreshGridData(tabId);
                                        } else {
                                            fetchAttachmentsTabGridData(tabId);
                                        }
                                    }
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
                        if (dataView == "GRID-VIEW")
                        {

                            if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
                                //fetchTabsData(masterId, selectedrowindex);
                                refreshGridData(tabId);
                            } else {
                                fetchAttachmentsTabGridData(tabId);
                            }
                        } else
                        {
                            fetchAttachmentsTabData(tabId);
                        }

//                    fetchAttachmentsTabData(tabId);
                    }
                    $("body").css({"pointer-events": "auto"});
                },
                'onStart': function () {
                    showLoader();
                    $("body").css({"pointer-events": "none"});
                    $("#wait").css("display", "block");
                    // $('#message').hide();
                }
            });
        } catch (e) {
            stopLoader();
        }
//        $("#browseTdId_" + param).show();

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


            } else if (serverResponce.lastIndexOf("Failed") > -1) {//return from function.
                serverResponce = serverResponce.replace(/['"]+/g, '');
                serverResponce = serverResponce.replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '').replace('"', '');
                var dialogSplitMessage = dialogSplitIconText(serverResponce, "H");
                $("#dialog").html(dialogSplitMessage);
//                    $("#dialog").html(serverResponce);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    width: 'auto',
                    height: 'auto',
                    fluid: true,
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");
//                                if (dataView == "GRID-VIEW")
//                                    {
//
//                                        if ($("#attachGridViewFlag").val() != null && $("#attachGridViewFlag").val() == "Y") {
//                                            //fetchTabsData(masterId, selectedrowindex);
//                                            refreshGridData(tabId);
//                                        } else {
//                                            fetchAttachmentsTabGridData(tabId);
//                                        }
//                                    }
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
        if (dataView == "GRID-VIEW")
        {
            $(browseId).click();
        }
    } else
    {

//        $("#browseTdId_" + param).hide();

    }

    //browse_

}


// display the lightbox
function showImage(row_id, tabId) {
    alert(tabId);
    $('#deleteAttachmentId').hide();
    //  $('#deleteAttachmentId1').hide();
    $('#addAttachmentId').hide();
    $('#thedialog').hide();
    var baskettype = $("#baskettypehid1").val();
    var insertContent = "";
    var imgContent = "";
    if (tabId == "MM_ATTACHMENTS_OLD")
    {
        insertContent = $('#imageOld_' + row_id).attr("src");
        imgContent = "";
    } else
    {
        insertContent = $('#image_' + row_id).attr("src");
        imgContent = "<img src='images/delete.gif' id='deleteimgAttachmentId'  class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachments('delete', 'image','" + tabId + "')\">";
    }
    $("#deleteimgAttachmentId").remove();
    $("#MaterialdeleteImg").append(imgContent);
    var maincontent = "";
    // var imgContent="<img src='images/delete.gif' id='deleteimgAttachmentId'  class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachments('delete', 'image','" + tabId + "')\">";
    console.log("baskettype::" + baskettype);
    var role = $('#rolehid').val();
    console.log("enc list:show Image::" + role);
    var encEditable = $("#encEditable").val();
    if (encEditable != null && encEditable == 'N')

    {
        console.log("IF SHOW IMAGE:::");
        $("#imgdialog").attr('src', insertContent);
        $("#deleteimgAttachmentId").hide();
        $("#imgdiv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
//          maxWidth: dia_wid,
//          maxHeight: dia_ht,
            fluid: true,
            close: function () {
                // $("#imgdialog").attr('src', "about:blank");
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

//        maincontent = "<img src='" + insertContent + "' height='250' width='450' style='border:solid 1px #000;' />";
//        $("#deleteAttachmentId").hide();
//        $("#downloadAttachmentId").hide();

    } else
    {
        $("#Materialimgdialog").attr('src', insertContent);
        $("#Materialimgdiv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
//          maxWidth: dia_wid,
//          maxHeight: dia_ht,
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
        $("#Materialimgdiv #expandAttachmentId").attr(
                "onclick",
                "navigateVendorAttachmentNextPage('" + row_id + "', '', 'image')"
                );
        $("#imagedispid").html(maincontent);
//        $("#imgdiv #expandAttachmentId").attr(
//                "onclick",
//                "navigateVendorAttachmentNextPage('" + row_id + "', '', 'image')"
//                );
//        $("#deleteImg").html(imgContent);
    }
//    if (baskettype == null || (baskettype.lastIndexOf("Extension") > -1)
////    if (baskettype == null || (baskettype.lastIndexOf("Extension") > -1 && EXT_PLANT_IND == 0)
//            || baskettype.lastIndexOf("Change Requests Creation") > -1
//            || baskettype.lastIndexOf("Block Request") > -1
//            || baskettype.lastIndexOf("Unblock Request") > -1
//            || baskettype == "Search View"
//            || role.lastIndexOf("FVM_ROL_APPROVER") > -1
//            || role.lastIndexOf("FVM_ROL_GL_USER") > -1
//            || role.lastIndexOf("FVM_ROL_TAX_USER") > -1)
//
//    {
//        console.log("IF SHOW IMAGE:::");
//        // maincontent = "<img src='" + insertContent + "' height='150' width='150' style='border:solid 1px #000;' />";
//        // $("#deleteAttachmentId").hide();
////        var dia_wid = (screen.width * 2) / 3;
////        var dia_ht = (screen.height * 2) / 3;
//        $("#imgdialog").attr('src', insertContent);
//        $("#imgdiv").dialog({ resizable: false,
//            modal: true,
//            title: '',
//            width: 1100,
//            height: 500,
////          maxWidth: dia_wid,
////          maxHeight: dia_ht,
//            fluid: true,
//            close: function () {
//                // $("#imgdialog").attr('src', "about:blank");
//            },
//            open: function ()
//            {
//                $(this).closest(".ui-dialog").addClass("visionFormImageView");
//                $(".visionHeaderMain").css("z-index", "999");
//                $(".visionFooterMain").css("z-index", "999");
//            },
//            beforeClose: function (event, ui)
//            {
//                $("#imgdialog").attr('src', '');
//                $(".visionHeaderMain").css("z-index", "99999");
//                $(".visionFooterMain").css("z-index", "99999");
//            }
//        });
//
//        //  $("#deleteAttachmentId1").hide();
//    } else
//    {
////        var dia_wid = (screen.width * 2) / 3;
////        var dia_ht = (screen.height * 2) / 3;
//        $("#imgdialog").attr('src', insertContent);
//        $("#imgdiv").dialog({ resizable: false,
//            modal: true,
//            title: '',
//            width: 1100,
//            height: 500,
////          maxWidth: dia_wid,
////          maxHeight: dia_ht,
//            fluid: true,
//            close: function () {
//                //  $("#imgdialog").attr('src', "about:blank");
//            },
//            open: function ()
//            {
//                $(this).closest(".ui-dialog").addClass("visionFormImageView");
//                $(".visionHeaderMain").css("z-index", "999");
//                $(".visionFooterMain").css("z-index", "999");
//            },
//            beforeClose: function (event, ui)
//            {
//                $("#imgdialog").attr('src', '');
//                $(".visionHeaderMain").css("z-index", "99999");
//                $(".visionFooterMain").css("z-index", "99999");
//            }
//        });
//
//        // $("#deleteAttachmentId").hide();
//        //maincontent = "<img src='" + insertContent + "' height='150' width='150' style='border:solid 1px #000;' onload='showDeleteButton()'/>";
//        //console.log("ELSE SHOW IMAGE:::");
//    }
    // $('#closeAttachmentId').show();
//    $('#hiddenRowId').val(row_id);
//
//    $("#imagedispid").html(maincontent);
}

function showPdf(id, tabId)
{
    $("#pdfMM").css('display', 'block');
    $("#pdfMM").html("");
    alert("hijkj");
//    $("#thedialog").attr('src', '');
//$("#thedialog").html("");
    var baskettype = $("#baskettypehid").val();
    console.log("baskettype::" + baskettype);
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6




    var content = "";
    var deleteIcon = "";
    // $('#deleteAttachmentId').show();
    $('#addAttachmentId').hide();
    if (tabId == 'MM_ATTACHMENTS_OLD')
    {
        content = $('#pdfHiddenIdOld_' + id).val();
        deleteIcon = "";
    } else
    {

        content = $('#pdfHiddenId_' + id).val();
        deleteIcon = "<img src='images/delete.gif' id='deleteAttachmentId' class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachments('delete', 'pdf','" + tabId + "')\" >";

    }


    $('#hiddenRowId').val(id);
    var pdfContent = "";
    var browserType = "";
    //var deleteIcon="<img src='images/delete.gif' id='deleteAttachmentId' class='visionDeleteAttachment' title='Delete' onclick=\"updateAttachments('delete', 'pdf','" + tabId + "')\" >";

    var role = $('#rolehid').val();
    var specModelNo = $('#SPEC_MODEL_NO').val();
    console.log("enc list:show pdf::" + role);
    var encEditable = $("#encEditable").val();
    if (encEditable != null && encEditable == 'N')

    {
//        var dia_wid = (screen.width * 2) / 3;
//        var dia_ht = (screen.height * 2) / 3;
        pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='materialPDF?id=" + id + "&tabId=" + tabId + "&specModelNo=" + specModelNo + "' onload='showDeleteButton()' ></iframe>";
//                pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='materialPDF?id=" + id + "&tabId=" + tabId + "' onload='showDeleteButton()' ></iframe>";
        // $("#thedialog").attr('src', 'materialPDF/' + id);
        $("#somediv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
//          maxWidth: dia_wid,
//          maxHeight: dia_ht,
            fluid: true,
            close: function () {
                $("#thedialog").attr('src', '');
                // $("#thedialog").attr('src', "about:blank");
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
//                $("#thedialog").attr('src', '');
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
        $("#deleteAttachmentId").hide();
//        console.log("baskettype null if::");
//        frameContent = "<iframe frameborder='0' height='150' width='150' src='tempFiles/" + content + "' style='border:solid 1px #000;' id='iframeid' />";
//        $("#deleteAttachmentId").hide();
    } else
    {

//        var dia_wid = (screen.width * 2) / 3;
//        var dia_ht = (screen.height * 2) / 3;
        pdfContent = " <iframe id='thedialog' class='visionFormTheDialog' src='materialPDF?id=" + id + "&tabId=" + tabId + "&specModelNo=" + specModelNo + "'  ></iframe>";
        //$("#thedialog").attr('src', 'attachments/' + content);
        $("#somediv").dialog({resizable: false,
            modal: true,
            title: '',
            width: 1100,
            height: 500,
//          maxWidth: dia_wid,
//          maxHeight: dia_ht,
            fluid: true,
            close: function () {
                // $("#thedialog").attr('src', "about:blank");
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
//                $("#thedialog").attr('src', '');
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
        $("#deleteIcon").html(deleteIcon);

        //  frameContent = "<iframe frameborder='0' height='100' width='100' src='tempFiles/" + content + "' style='border:solid 1px #000;' id='iframeid' onload='showDeleteButton()'/>";
    }
    // $('#closeAttachmentId').show();
    console.log(pdfContent);

    $("#thedialog").show();

    $("#somediv #expandPdfAttachmentId").attr(
            "onclick",
            "navigateVendorAttachmentNextPage('" + id + "', '', 'pdf')"
            );

    $("#pdfMM").html(pdfContent);


}

function updateAttachments(reqtype, type, tabId)
{
    $("#pdfMM").css('display', 'none');
    var row_id = $('#hiddenRowId').val();
    var encval = $(".openImage_" + row_id).val();
    var locat_cde = $("#locatcode").val();
    if (reqtype == 'delete') {
        var results = "Are you sure want to Delete ?";
        var dialogSplitMessage = dialogSplitIconText(results, "Y");
        $("#dialog").html(dialogSplitMessage);
        // Define the Dialog and its properties.
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
                        $("#Materialimgdialog").attr('src', "");
                        $("#Materialimgdiv").dialog('close');
                    }

                    var reqNumber = $("#REQ_NUMBER").val() == undefined ? "undefined" : $("#REQ_NUMBER").val();
                    console.log("reqNumber" + reqNumber);
                    var specModelNo = $("#SPEC_MODEL_NO").val();
                    //=====

                    $.ajax({
                        type: "get",
                        url: "DeleteAttachFile",
                        cache: false,
                        data: {'sequenceno': row_id,
                            'enc_val': encval,
                            recordNo: $("#RECORD_NO").val(),
                            reqNumber: reqNumber,
                            specModelNo: specModelNo
                        },
                        traditional: true,
                        dataType: 'html',

                        success: function (response) {
//                                    alert(response);
                            if (response != 0)
                            {
                                $('#deleteAttachmentId').hide();
                                $('#closeAttachmentId').hide();
                                $("#imagedispid").html("");
                                $('#image_' + row_id).replaceWith("");
                                fetchAttachmentsTabData(tabId);
                            }
//                                   

                        },
                        error: function (e) {
                            //  alert(e.message)
                            sessionTimeout(e);
                        }

                    });

                },
                "No": function () {
                    $(this).dialog('close');
                    //   $("#thedialog").attr('src', '');
                    $("#pdfMM").css('display', 'block');


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
                //  $("#thedialog").attr('src', '');
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


//GETTING ROLE

function getUserRole() {


    var userName = "";
    $.ajax({
        type: "POST",
        url: "getUserRole",
        cache: false,
        async: false,
        data: {requesData: "requestData"},
        success: function (result) {
            // alert("result ::: "+result);
            userName = result;


        },
        error: function (e) {
            sessionTimeout(e);
        }
    });



    return userName;


}



///FILE ATTACHMENT END
