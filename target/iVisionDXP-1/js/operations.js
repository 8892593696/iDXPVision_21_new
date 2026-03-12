/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//UniqueFunctionsCodePart1 end

var tabsOldData = {};
var ssDatePickerObj = {};
var accordionSwitchflag = true;
var tabSwitchflag = true;
var changeflag = false;
var cellOldValue;
var globalTabId;
var globalErpTab;
var executed = false;
// ravi start
var onTabclickFunc = null;
var tabSwitched = true;
var currentClickedGridId = null;
var childChangeflag = false;
var childGrid1Changeflag = false;
var childGrid2Changeflag = false;
var targetInput;
var labelObject = {};
var multipleRowsInsert = false;
var notificationIntervals = {};

var HtmlEntities = {
    "'": "&apos;",
    "<": "&lt;",
    ">": "&gt;",
    // " ": "&nbsp;",
    "Â¡": "&iexcl;",
    "Â¢": "&cent;",
    "Â£": "&pound;",
    "Â¤": "&curren;",
    "Â¥": "&yen;",
    "Â¦": "&brvbar;",
    "Â§": "&sect;",
    "Â¨": "&uml;",
    "Â©": "&copy;",
    "Âª": "&ordf;",
    "Â«": "&laquo;",
    "Â¬": "&not;",
    "Â®": "&reg;",
    "Â¯": "&macr;",
    "Â°": "&deg;",
    "Â±": "&plusmn;",
    "Â²": "&sup2;",
    "Â³": "&sup3;",
    "Â´": "&acute;",
    "Âµ": "&micro;",
    "Â¶": "&para;",
    "Â·": "&middot;",
    "Â¸": "&cedil;",
    "Â¹": "&sup1;",
    "Âº": "&ordm;",
    "Â»": "&raquo;",
    "Â¼": "&frac14;",
    "Â½": "&frac12;",
    "Â¾": "&frac34;",
    "Â¿": "&iquest;",
    "Ã€": "&Agrave;",
    "Ã�": "&Aacute;",
    "Ã‚": "&Acirc;",
    "Ãƒ": "&Atilde;",
    "Ã„": "&Auml;",
    "Ã…": "&Aring;",
    "Ã†": "&AElig;",
    "Ã‡": "&Ccedil;",
    "Ãˆ": "&Egrave;",
    "Ã‰": "&Eacute;",
    "ÃŠ": "&Ecirc;",
    "Ã‹": "&Euml;",
    "ÃŒ": "&Igrave;",
    "Ã�": "&Iacute;",
    "ÃŽ": "&Icirc;",
    "Ã�": "&Iuml;",
    "Ã�": "&ETH;",
    "Ã‘": "&Ntilde;",
    "Ã’": "&Ograve;",
    "Ã“": "&Oacute;",
    "Ã”": "&Ocirc;",
    "Ã•": "&Otilde;",
    "Ã–": "&Ouml;",
    "Ã—": "&times;",
    "Ã˜": "&Oslash;",
    "Ã™": "&Ugrave;",
    "Ãš": "&Uacute;",
    "Ã›": "&Ucirc;",
    "Ãœ": "&Uuml;",
    "Ã�": "&Yacute;",
    "Ãž": "&THORN;",
    "ÃŸ": "&szlig;",
    "Ã ": "&agrave;",
    "Ã¡": "&aacute;",
    "Ã¢": "&acirc;",
    "Ã£": "&atilde;",
    "Ã¤": "&auml;",
    "Ã¥": "&aring;",
    "Ã¦": "&aelig;",
    "Ã§": "&ccedil;",
    "Ã¨": "&egrave;",
    "Ã©": "&eacute;",
    "Ãª": "&ecirc;",
    "Ã«": "&euml;",
    "Ã¬": "&igrave;",
    "Ã­": "&iacute;",
    "Ã®": "&icirc;",
    "Ã¯": "&iuml;",
    "Ã°": "&eth;",
    "Ã±": "&ntilde;",
    "Ã²": "&ograve;",
    "Ã³": "&oacute;",
    "Ã´": "&ocirc;",
    "Ãµ": "&otilde;",
    "Ã¶": "&ouml;",
    "Ã·": "&divide;",
    "Ã¸": "&oslash;",
    "Ã¹": "&ugrave;",
    "Ãº": "&uacute;",
    "Ã»": "&ucirc;",
    "Ã¼": "&uuml;",
    "Ã½": "&yacute;",
    "Ã¾": "&thorn;",
    "Ã¿": "&yuml;",
    "Å’": "&OElig;",
    "Å“": "&oelig;",
    "Å ": "&Scaron;",
    "Å¡": "&scaron;",
    "Å¸": "&Yuml;",
    "Æ’": "&fnof;",
    "Ë†": "&circ;",
    "Ëœ": "&tilde;",
    "Î‘": "&Alpha;",
    "Î’": "&Beta;",
    "Î“": "&Gamma;",
    "Î”": "&Delta;",
    "Î•": "&Epsilon;",
    "Î–": "&Zeta;",
    "Î—": "&Eta;",
    "Î˜": "&Theta;",
    "Î™": "&Iota;",
    "Îš": "&Kappa;",
    "Î›": "&Lambda;",
    "Îœ": "&Mu;",
    "Î�": "&Nu;",
    "Îž": "&Xi;",
    "ÎŸ": "&Omicron;",
    "Î ": "&Pi;",
    "Î¡": "&Rho;",
    "Î£": "&Sigma;",
    "Î¤": "&Tau;",
    "Î¥": "&Upsilon;",
    "Î¦": "&Phi;",
    "Î§": "&Chi;",
    "Î¨": "&Psi;",
    "Î©": "&Omega;",
    "Î±": "&alpha;",
    "Î²": "&beta;",
    "Î³": "&gamma;",
    "Î´": "&delta;",
    "Îµ": "&epsilon;",
    "Î¶": "&zeta;",
    "Î·": "&eta;",
    "Î¸": "&theta;",
    "Î¹": "&iota;",
    "Îº": "&kappa;",
    "Î»": "&lambda;",
    "Î¼": "&mu;",
    "Î½": "&nu;",
    "Î¾": "&xi;",
    "Î¿": "&omicron;",
    "Ï€": "&pi;",
    "Ï�": "&rho;",
    "Ï‚": "&sigmaf;",
    "Ïƒ": "&sigma;",
    "Ï„": "&tau;",
    "Ï…": "&upsilon;",
    "Ï†": "&phi;",
    "Ï‡": "&chi;",
    "Ïˆ": "&psi;",
    "Ï‰": "&omega;",
    "Ï‘": "&thetasym;",
    "Ï’": "&Upsih;",
    "Ï–": "&piv;",
    "â€“": "&ndash;",
    "â€”": "&mdash;",
    "â€˜": "&lsquo;",
    "â€™": "&rsquo;",
    "â€š": "&sbquo;",
    "â€œ": "&ldquo;",
    "â€�": "&rdquo;",
    "â€ž": "&bdquo;",
    "â€ ": "&dagger;",
    "â€¡": "&Dagger;",
    "â€¢": "&bull;",
    "â€¦": "&hellip;",
    "â€°": "&permil;",
    "â€²": "&prime;",
    "â€³": "&Prime;",
    "â€¹": "&lsaquo;",
    "â€º": "&rsaquo;",
    "â€¾": "&oline;",
    "â�„": "&frasl;",
    "â‚¬": "&euro;",
    "â„‘": "&image;",
    "â„˜": "&weierp;",
    "â„œ": "&real;",
    "â„¢": "&trade;",
    "â„µ": "&alefsym;",
    "â†�": "&larr;",
    "â†‘": "&uarr;",
    "â†’": "&rarr;",
    "â†“": "&darr;",
    "â†”": "&harr;",
    "â†µ": "&crarr;",
    "â‡�": "&lArr;",
    "â‡‘": "&UArr;",
    "â‡’": "&rArr;",
    "â‡“": "&dArr;",
    "â‡”": "&hArr;",
    "âˆ€": "&forall;",
    "âˆ‚": "&part;",
    "âˆƒ": "&exist;",
    "âˆ…": "&empty;",
    "âˆ‡": "&nabla;",
    "âˆˆ": "&isin;",
    "âˆ‰": "&notin;",
    "âˆ‹": "&ni;",
    "âˆ�": "&prod;",
    "âˆ‘": "&sum;",
    "âˆ’": "&minus;",
    "âˆ—": "&lowast;",
    "âˆš": "&radic;",
    "âˆ�": "&prop;",
    "âˆž": "&infin;",
    "âˆ ": "&ang;",
    "âˆ§": "&and;",
    "âˆ¨": "&or;",
    "âˆ©": "&cap;",
    "âˆª": "&cup;",
    "âˆ«": "&int;",
    "âˆ´": "&there4;",
    "âˆ¼": "&sim;",
    "â‰…": "&cong;",
    "â‰ˆ": "&asymp;",
    "â‰ ": "&ne;",
    "â‰¡": "&equiv;",
    "â‰¤": "&le;",
    "â‰¥": "&ge;",
    "âŠ‚": "&sub;",
    "âŠƒ": "&sup;",
    "âŠ„": "&nsub;",
    "âŠ†": "&sube;",
    "âŠ‡": "&supe;",
    "âŠ•": "&oplus;",
    "âŠ—": "&otimes;",
    "âŠ¥": "&perp;",
    "â‹…": "&sdot;",
    "âŒˆ": "&lceil;",
    "âŒ‰": "&rceil;",
    "âŒŠ": "&lfloor;",
    "âŒ‹": "&rfloor;",
    "âŸ¨": "&lang;",
    "âŸ©": "&rang;",
    "â—Š": "&loz;",
    "â™ ": "&spades;",
    "â™£": "&clubs;",
    "â™¥": "&hearts;",
    "â™¦": "&diams;"
};

try
{
    labelObject = JSON.parse($("#labelObjectHidden").val());
} catch (e) {
}
$(document).ready(function () {
    getViewProcessNotifications(); // 👈 Restore notification intervals here
});

function processRequest(gridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dropVal = $("#drop" + gridId).val();
    alert("dropVal:::" + dropVal);
    var buttonLabel = dropVal.split(" ").join("_");
    //                            var buttonLabel = dropVal.replaceAll(" ", "_");//.split(" ").join("_")
    buttonLabel = buttonLabel.split("[()]").join(""); //.replaceAll("[()]", "");
    buttonLabel = buttonLabel.split("Re-").join(""); //.replaceAll("Re-", "");
    alert("processRequest:::" + gridId);
    if (dropVal.indexOf('Assign') != -1)
    {
        alert("inside if ");
        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        if (selectedrowindexes.length != 0) {

            var confMesg = $("#" + buttonLabel + "_CONF_MESSAGE").val();
            if (confMesg == '' || confMesg == null) {
                alert("confMesg:::::if:::");
                confMesg = "Are you sure want to " + dropVal + " this Record"
                confMesg = (labelObject[confMesg] != null ? labelObject[confMesg] : confMesg) + "?";
            }
            var dialogSplitMessage = dialogSplitIconText(confMesg, "Y");
            $("#dialog1").html(dialogSplitMessage);
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 'auto',
                minWidth: 350,
                minHeight: 'auto',
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes',
                        click: function () {
                            getUserNames(gridId);
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    },
                    {
                        text: labelObject['No'] != null ? labelObject['No'] : 'No',
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
        } else {
            $("#dialog1").html(labelObject['Please select an Action & Record(s)'] != null ? labelObject['Please select an Action & Record(s)'] : 'Please select an Action & Record(s)');
            //                            $("#dialog1").html(labelObject['Please select an Action & Record(s)'] != null ? labelObject['Please select an Action & Record(s)'] : 'Please select an Action & Record(s)');
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
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
    } else if (dropVal.indexOf('Enrich') != -1)
    {
        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        if (selectedrowindexes.length != 0) {
            var indexesArray = [];
            var totalRowIndex = selectedrowindexes.length;
            var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
            if (datainformations != null) {
                var paginginformation = datainformations['paginginformation'];
                if (paginginformation != null) {
                    var pagesize = paginginformation['pagesize'];
                    if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                        totalRowIndex = parseInt(pagesize);
                    }
                }
            }
            for (var i = 0; i < totalRowIndex; i++) {
                var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                if (selectedRowData != null) {
                    indexesArray.push(selectedRowData);
                }
            }
        }
        processEnrichment(gridId, JSON.stringify(indexesArray));
    } else if (dropVal.indexOf('Unsupersede') != -1) {
        process(gridId, dropVal);
        //   processUnSupersedeItems(gridId);
    } else if (dropVal.indexOf('Supersede') != -1) {
        processSupersedeItems(gridId);
    } else if (dropVal.indexOf('Bar Code') != -1) {
        processGenerateBarcode(gridId, dropVal);
    } else if (dropVal.indexOf('Reinstate') != -1) {
        processSupersedeAccptItems(gridId);
    } else if (dropVal.indexOf('PunchOut') != -1) {
        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        var selectedRowsData = [];
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
            punchoutCalling(selectedRowsData);
        } else {
            $("#dialog1").html(labelObject['Please select any record to Process'] != null ? labelObject['Please select any record to Process'] : 'Please select any record to Process');
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
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

    } else if (dropVal && dropVal != '' && dropVal != 'Assign') {
// Process The Request
        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        alert(selectedrowindexes);
        if (selectedrowindexes.length != 0) {

            var reqDescrFlag;
            var indexesArray = [];
            var sourceex = $("#" + gridId).jqxGrid('source');
            var colums = $("#" + gridId).jqxGrid('columns');
            var dataFeilds = {};
            dataFeilds = sourceex._source.datafields;
            if (dropVal != null && (dropVal.lastIndexOf("Submit") > -1
                    || dropVal.lastIndexOf("Approve") > -1
                    || dropVal.lastIndexOf("Transfer") > -1
                    || dropVal.lastIndexOf("Re-Instantiate") > -1
                    )) {
                var totalRowIndex = selectedrowindexes.length;
                var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                if (datainformations != null) {
                    var paginginformation = datainformations['paginginformation'];
                    if (paginginformation != null) {
                        var pagesize = paginginformation['pagesize'];
                        if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                            totalRowIndex = parseInt(pagesize);
                        }

                    }
                }
                for (var i = 0; i < totalRowIndex; i++) {
                    var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                    if (selectedRowData != null) {
                        for (var j = 0; j < Object.keys(selectedRowData).length - 1; j++) {
                            var obj = dataFeilds[j];
                            if (obj != null && obj['name'] != null && obj['name'] != '') {
                                var key = obj['name'];
                                //                                            var key = obj.name;
                                var dialogtitle;
                                var dialogerror;
                                var cellId;
                                console.log("selectedRowData.hasOwnProperty('REQUEST_DESCR')::::" + selectedRowData.hasOwnProperty('REQUEST_DESCR'));
                                if ((selectedRowData != null && selectedRowData['REQUEST_DESCR'] == null || selectedRowData['REQUEST_DESCR'] == '')
                                        && (key != null && key != '' && key == 'REQUEST_DESCR')) {
                                    dialogtitle = "Request Description";
                                    dialogerror = "Please give Request Description";
                                    cellId = "REQUEST_DESCR";
                                    if (obj.isMandatory) {
                                        reqDescrFlag = true;
                                        break;
                                    } else {
                                        reqDescrFlag = false;
                                        break;
                                    }

                                }
                                if ((selectedRowData != null && selectedRowData['TEST_CERT_COMMENT'] == null || selectedRowData['TEST_CERT_COMMENT'] == '')
                                        && (key != null && key != '' && key == 'TEST_CERT_COMMENT')) {
                                    dialogtitle = "Internal Comment";
                                    dialogerror = "Please give Internal Comment";
                                    cellId = "TEST_CERT_COMMENT";
                                    if (obj.isMandatory) {
                                        reqDescrFlag = true;
                                        break;
                                    } else {
                                        reqDescrFlag = false;
                                        break;
                                    }

                                }
                            }
                        }
                    }

                }
//if ((!reqDescrFlag) && (selectedRowData['REQUEST_DESCR'] != null && selectedRowData['REQUEST_DESCR'] != '')){
                if (!reqDescrFlag) {
                    process(gridId, dropVal);
                } else {
                    var reqDescrVal = "";
                    var dialogMesg = "";
                    dialogMesg += "<div id='textReason'>";
                    dialogMesg += "<textarea id='reasonId' rows='4' cols='40'></textarea></div>";
                    dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject[dialogerror] != null ? labelObject[dialogerror] : 'dialogerror') + "</div>";
                    if ($("reqDescrDialog").length == 0) {
                        $("body").append("<div id = reqDescrDialog></div>");
                    }
                    $("#reqDescrDialog").html(dialogMesg);
                    $("#reqDescrDialog").dialog({resizable: false,
                        title: labelObject[dialogtitle] != null ? labelObject[dialogtitle] : dialogtitle,
                        height: 'auto',
                        minWidth: 350,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                click: function () {
                                    reqDescrVal = $("#reasonId").val();
                                    if (reqDescrVal != '') {
                                        $("#dailog_error_id").hide();
                                        for (var i = 0; i < totalRowIndex; i++) {

                                            var value = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], cellId);
                                            if (!(value != null && value != '')) {
                                                $('#' + gridId).jqxGrid('setcellvalue', selectedrowindexes[i], cellId, reqDescrVal);
                                            }

                                        }
                                        process(gridId, dropVal);
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                    } else {
                                        $("#dailog_error_id").show();
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
                }

            } else if (dropVal == 'Delete' || dropVal.lastIndexOf("Return") > -1) {
                process(gridId, dropVal);
                //commentProcessRequest(gridId, dropVal, duplCheck, returnResaonFlag);
            }
//                            if (dropVal != null && (dropVal.lastIndexOf("Submit") > -1
//                                    || dropVal.lastIndexOf("Approve") > -1
//                                    || dropVal.lastIndexOf("Transfer") > -1
//                                    )) {
//                                for (var i = 0; i < selectedrowindexes.length; i++) {
//                                    var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
//                                    console.log("selectedRowData.hasOwnProperty('REQUEST_DESCR')::::" + selectedRowData.hasOwnProperty('REQUEST_DESCR'));
//                                    if (selectedRowData != null && selectedRowData['REQUEST_DESCR'] != null && selectedRowData['REQUEST_DESCR'] != '') {
//
//                                    } else if (selectedRowData.hasOwnProperty('REQUEST_DESCR')) {
//                                        indexesArray.push(selectedrowindexes[i]);
//                                    }
//                                }
//                            }
//                            alert(indexesArray.length + "::::indexesArray::" + indexesArray);
//                            if (indexesArray != null && indexesArray.length == 0) {
//
//                                process(gridId, dropVal);
//                            } else {
//                                //  $("#jqxgrid").jqxGrid('setcellvalue', 0, "firstname", "New Value");
//                                var reqDescrVal = "";
//                                var dialogMesg = "";
//                                dialogMesg += "<div id='textReason'>";
//                                dialogMesg += "<textarea id='reasonId' rows='4' cols='40'></textarea></div>";
//                                dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give Request Description'] != null ? labelObject['Please give Request Description'] : 'Please give Request Description') + "</div>";
//                                $("#reqDescrDialog").html(dialogMesg);
//                                $("#reqDescrDialog").dialog({ resizable: false,
//                                    title: labelObject['Request Description'] != null ? labelObject['Request Description'] : 'Request Description',
//                                    height: 'auto',
//                                    minWidth: 350,
//                                    maxWidth: 'auto',
//                                    fluid: true,
//                                    buttons: [{
//                                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
//                                            click: function () {
//                                                reqDescrVal = $("#reasonId").val();
//                                                if (reqDescrVal != '') {
//                                                    $("#dailog_error_id").hide();
//                                                    for (var i = 0; i < indexesArray.length; i++) {
//                                                        $('#' + gridId).jqxGrid('setcellvalue', indexesArray[i], "REQUEST_DESCR", reqDescrVal);
////                                                    var value = $('#' + gridId).jqxGrid('getcellvalue', indexesArray[i], "REQUEST_DESCR");
////                                                    console.log("value:::::811::::" + value);
//                                                    }
//                                                    process(gridId, dropVal);
//                                                    $(this).html("");
//                                                    $(this).dialog("close");
//                                                    $(this).dialog("destroy");
//                                                } else {
//                                                    $("#dailog_error_id").show();
//                                                }
//
//                                            }
//
//                                        }],
//                                    open: function ()
//                                    {
//                                         //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                        $(".visionHeaderMain").css("z-index", "999");
//                                        $(".visionFooterMain").css("z-index", "999");
//                                    },
//                                    beforeClose: function (event, ui)
//                                    {
//                                        $(".visionHeaderMain").css("z-index", "99999");
//                                        $(".visionFooterMain").css("z-index", "99999");
//                                    }
//                                });
//                                //  alert("reqDescrVal::"+reqDescrVal);
//
//
//                            }



        } else {
            $("#dialog1").html(labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process');
            //                            $("#dialog1").html(labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process');
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
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

    } else {
        $("#dialog1").html(labelObject['Please select an Type Of Process to Process'] != null ? labelObject['Please select an Type Of Process to Process'] : 'Please select an Type Of Process to Process');
        $("#dialog1").dialog({resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
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

    stopLoader();
}

function process(gridId, dropVal) {
    showLoader(); //2
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    var totalRowIndex = selectedrowindexes.length;
    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
    if (datainformations != null) {
        var paginginformation = datainformations['paginginformation'];
        if (paginginformation != null) {
            var pagesize = paginginformation['pagesize'];
            if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                totalRowIndex = parseInt(pagesize);
            }

        }
    }
    for (var i = 0; i < totalRowIndex; i++) {
        var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
    }

    alert(dropVal + ":::process:::" + gridId);
    var buttonLabel = dropVal.split(" ").join("_");
    //                            var buttonLabel = dropVal.replaceAll(" ", "_");//.split(" ").join("_")
    buttonLabel = buttonLabel.split("[()]").join(""); //.replaceAll("[()]", "");
    buttonLabel = buttonLabel.split("Re-").join(""); //.replaceAll("Re-", "");
    //  var confMesgId = buttonLabel+"_CONF_MESSAGE";
    var confMesg = $("#" + buttonLabel + "_CONF_MESSAGE").val();
    var duplCheck = $("#" + buttonLabel + "DUPL_CHECK_FLAG").val();
    var returnResaonFlag = $("#" + buttonLabel + "RETURN_REASON").val();
    //REQUEST_DESCR duplCheck,returnResaonFlag
    alert(confMesg + ":::process:::" + gridId);
    if (confMesg == '' || confMesg == null) {
        alert("confMesg:::::IF:::");
        confMesg = "Are you sure you want to " + dropVal + " this Record(s)?"
        confMesg = labelObject[confMesg] != null ? labelObject[confMesg] : confMesg;
    }
    if (duplCheck == '' || duplCheck == null) {
        duplCheck = $("#" + dropVal + "DUPL_CHECK_FLAG").val();
    }
    if (returnResaonFlag == '' || returnResaonFlag == null) {
        returnResaonFlag = $("#" + dropVal + "RETURN_REASON").val();
    }
    var message = confMesg;
    var setWidth;
    var formRecordNo = $("#RECORD_NO").val();
    if (formRecordNo == selectedRowData['RECORD_NO'] && totalRowIndex == 1) {
        confMesg = " This Request cannot be processed due to opened in form view ";
        var dialogSplitMessage = dialogSplitIconText(confMesg, "Y");
        $("#dialog1").html(dialogSplitMessage);
        $("#dialog1").dialog({resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 'auto',
            minWidth: 300,
            width: dialogWidthResize(message, setWidth),
            minHeight: 'auto',
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
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
    } else {
        var dialogSplitMessage = dialogSplitIconText(confMesg, "Y");
        $("#dialog1").html(dialogSplitMessage);
        $("#dialog1").dialog({resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 'auto',
            minWidth: 300,
            width: dialogWidthResize(message, setWidth),
            minHeight: 'auto',
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes',
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");

                        try {
                            var controlIndmatch = dropVal.toUpperCase();
                            if (controlIndmatch.lastIndexOf("DELETE") > -1) {
                                setReasonListsObj('DELETE');
                            } else if (controlIndmatch.lastIndexOf("RETURN") > -1) {
                                setReasonListsObj('RETURN');
                            } else if (controlIndmatch.indexOf("DELETE") > -1) {
                                setReasonListsObj('RETURN');
                            } else if (controlIndmatch.indexOf("RETURN") > -1) {
                                setReasonListsObj('RETURN');
                            } else if (controlIndmatch.indexOf("APPROVE") > -1) {
                                setReasonListsObj('APPROVE');
                            } else if (controlIndmatch.indexOf("SUBMIT") > -1) {
                                setReasonListsObj('SUBMIT');
                            } else if (controlIndmatch.indexOf("TRANSFER") > -1) {
                                setReasonListsObj('SUBMIT');
                            } else if (controlIndmatch.indexOf("UNSUPERSEDE") > -1) {
                                setReasonListsObj('UNSUPERSEDE');
                            }
                        } catch (er) {
                        }

                        if (dropVal == 'Delete' || dropVal.lastIndexOf("Return") > -1) {

                            commentProcessRequest(gridId, dropVal, duplCheck, returnResaonFlag);
                        } else if ((returnResaonFlag != null && returnResaonFlag != '') && (returnResaonFlag == '1' || returnResaonFlag == '6')
                                && (dropVal.lastIndexOf("Submit") > -1 || dropVal.lastIndexOf("Approve") > -1 || dropVal.lastIndexOf("Transfer") > -1)) {
                            commentProcessRequest(gridId, dropVal, duplCheck, returnResaonFlag);
                        } else if (dropVal.indexOf('Unsupersede') != -1)
                        {
                            processUnSupersedeItems(gridId, dropVal);
                        } else {
                            submitRequest(gridId, dropVal, "", "", duplCheck, returnResaonFlag);
                        }

                    }}, {
                    text: labelObject['No'] != null ? labelObject['No'] : 'No',
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
    }
    stopLoader();
}
function commentProcessRequest(gridId, controlType, duplCheck, returnResaonFlag) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var msgTitle = "";
    if (controlType.lastIndexOf("Delete") > -1) {
        msgTitle = "Deletion Reason";
    } else if (controlType.lastIndexOf("Submit") > -1) {
        msgTitle = "Submit Reason";
    } else {
        msgTitle = "Rejection Reason";
    }
    msgTitle = labelObject[msgTitle] != null ? labelObject[msgTitle] : msgTitle;
//    var rejectType = "${sessionScope.ssRejectType}";
    var rejectData = '';
    var rejectDataArray = [];
    try {
        rejectData = $("#rejectData").val();
        var rejectDataArray1 = JSON.parse(rejectData);
        if (rejectData != null && rejectData != '' && rejectData != null && rejectDataArray1.length > 0) {
            for (var i = 0; i < rejectDataArray1.length; i++)
            {
                rejectDataArray.push(rejectDataArray1[i]);
            }
        }
    } catch (et) {
        rejectData = '';
        rejectDataArray = [];
    }
    console.log(rejectData);
    var rejectType = 0;
    try {
        rejectType = $("#rejectType").val();
    } catch (e) {
        rejectType = 0;
    }

    // var ssRejectCommentObj = [];
    //    var ssRejectCommentObj = ${sessionScope.ssRejectCommentObj};
//    try {
//        var ssRejectCommentObj = "${sessionScope.ssRejectCommentObj}";
//        if (ssRejectCommentObj != null) {
//            //  var ssRejectCommentObj = JSON.parse(ssRejectCommentObjStr);
//            if (ssRejectCommentObj != null) {
//                $("#rejectData").val(JSON.stringify(ssRejectCommentObj));
//            }
//        }
//    } catch (e) {
//    }
    alert("rejectType:::" + rejectType);
//    alert("ssRejectCommentObj:::" + ssRejectCommentObj);
    //rejectType != null && rejectType != '' &&
    //     if ((rejectType == 0 || rejectType == 1)) {
    var dialogMesg = "";
    if (rejectType == 0) {
// for need to display empty text area
        dialogMesg = "";
        $("#textReason").html("");
        dialogMesg += "<div id='textReason'>";
        dialogMesg += "<textarea id='reasonId' rows='4' cols='40'></textarea></div>";
        dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
    } else if (rejectType == 1) {
//// for need to display Check box instead of Text Area
//                    dialogMesg = ssRejectCommentObj;
        if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
            var rejectData = $("#rejectData").val();
            console.log(rejectData);
            dialogMesg = "";
            dialogMesg += "<div id='rejectComboBox' class='visionRejectComboBox' ></div>";
            dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

        } else {
            dialogMesg = "";
            $("#textReason").html("");
            dialogMesg += "<div id='textReason'>";
            dialogMesg += "<textarea id='reasonId' rows='4' cols='40'></textarea></div>";
            dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

        }
    } else if (rejectType == 4 || rejectType == 3)
    {
        if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
            var rejectData = $("#rejectData").val();
            console.log(rejectData);
            dialogMesg = "";
            dialogMesg += "<div id='rejectComboBox' class='visionRejectComboBox' ></div>";
            $("#textReason").html("");
            dialogMesg += "<div id='textReason'>";
            dialogMesg += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
            dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
            //  $("#dialog2").html(response);  
        } else {
            dialogMesg = "";
            $("#textReason").html("");
            dialogMesg += "<div id='textReason'>";
            dialogMesg += "<textarea id='reasonId' rows='4' cols='40'></textarea></div>";
            dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

        }

    }
    alert("dialogMesg:::" + dialogMesg);
    $("#dialog1").html(dialogMesg);
    if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
//        var rejectDataArray = JSON.parse(rejectData);
        $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'containsignorecase', multiSelect: true, width: 280, height: 25, autoComplete: true});
    }
    $("#dialog1").dialog({resizable: false,
        title: msgTitle,
        modal: true,
        height: 'auto',
        minWidth: 350,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                click: function () {
                    var erpComment = "";
                    var checkBoxdata = "";
                    // var retReasonText = "";
                    if (rejectType == '0') {
                        erpComment = $("#reasonId").val();
                    } else if (rejectType == '1') {

                        var selectReason = null;
                        try {
                            selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                        } catch (et) {
                            selectReason = null;
                        }
                        if (selectReason != null && selectReason.length > 0) {
                            for (var i = 0; i < selectReason.length; i++)
                            {
                                checkBoxdata += selectReason[i].value;
                                checkBoxdata += ",";
                            }
                            if (checkBoxdata != null && checkBoxdata != '')
                            {
                                var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                erpComment = returnReason;
                            }
                        } else {

                            var textBoxData = '';
                            try {
                                textBoxData = $("#reasonId").val();
                            } catch (et) {
                                textBoxData = '';
                            }

                            erpComment = textBoxData;

                        }
                    } else if (rejectType == 3) {
                        var selectReason = null;
                        try {
                            selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                        } catch (et) {
                            selectReason = null;
                        }
                        if (selectReason != null && selectReason.length > 0) {
                            for (var i = 0; i < selectReason.length; i++)
                            {
                                checkBoxdata += selectReason[i].value;
                                checkBoxdata += ",";
                            }
                            if (checkBoxdata != null && checkBoxdata != '')
                            {

                                var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                erpComment = returnReason;
                                var textBoxData = '';
                                try {
                                    textBoxData = $("#reasonId").val();
                                } catch (et) {
                                    textBoxData = '';
                                }
                                if (textBoxData != null && textBoxData != '')
                                {
                                    erpComment = returnReason + ", " + textBoxData;
                                } else {
                                    $("#dailog_error_id").text("Textbox needs to be filled");
                                    erpComment = "";
                                }


                            }
                        } else {
                            var textBoxData = '';
                            try {
                                textBoxData = $("#reasonId").val();
                            } catch (et) {
                                textBoxData = '';
                            }
                            if (textBoxData != null && textBoxData != '')
                            {
                                erpComment = textBoxData;
                            }
                            if (!(selectReason !== null && selectReason.length > 0)) {
                                $("#dailog_error_id").text("Selection box needs to be filled");
                                erpComment = "";
                            }
                        }
                        if ((textBoxData == null || textBoxData == '') && (selectReason === null || selectReason !== null && selectReason.length == 0)) {
                            $("#dailog_error_id").text("Please give a reason");
                        }
                    } else if (rejectType == '4')
                    {


                        var selectReason = null;
                        try {
                            selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                        } catch (et) {
                            selectReason = null;
                        }
                        if (selectReason != null && selectReason.length > 0) {
                            for (var i = 0; i < selectReason.length; i++)
                            {
                                checkBoxdata += selectReason[i].value;
                                checkBoxdata += ",";
                            }
                            if (checkBoxdata != null && checkBoxdata != '')
                            {

                                var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                erpComment = returnReason;
                                var textBoxData = $("#reasonId").val();
                                if (textBoxData != null && textBoxData != '')
                                {
                                    erpComment = returnReason + ", " + textBoxData;
                                }


                            } else
                            {
                                var textBoxData = $("#reasonId").val();
                                if (textBoxData != null && textBoxData != '')
                                {
                                    erpComment = textBoxData;
                                }
                            }
                        } else
                        {
                            var textBoxData = '';
                            try {
                                textBoxData = $("#reasonId").val();
                            } catch (et) {
                                textBoxData = '';
                            }
                            if (textBoxData != null && textBoxData != '')
                            {
                                erpComment = textBoxData;
//                                                                    retReasonText = comboListBoxdata;//nirmala
                            }
                        }


                    } else
                    {
                        submitRequest(gridId, controlType, erpComment, "", duplCheck, returnResaonFlag);
                    }

                    if (erpComment != null && erpComment != '') {
                        $("#dailog_error_id").hide();
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        submitRequest(gridId, controlType, erpComment, "", duplCheck, returnResaonFlag);
                    } else {
                        $("#dailog_error_id").show();
                    }

                }
            },
            {
                text: labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel',
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    // $("#labeld").empty();

                }

            }],
        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(this).closest(".ui-dialog").addClass("visionGenericTabsDialog2");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
//                    } else {
//                        // no need to ask reason popup
//                        alert("else");
    //                    }
    stopLoader();
}
function submitRequest(gridId, controlType, erpComment, newCreateBy, duplCheck, returnResaonFlag) {
    showLoader();
    var recordOpenFlag = false;
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    alert("returnResaonFlag:::" + returnResaonFlag);
    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    alert(JSON.stringify(selectedrowindexes));
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                if (erpComment != null && erpComment != '') {
                    data['rejectComment'] = erpComment;
                }
                if (newCreateBy != null && newCreateBy != '')
                {
                    data['updatedUser'] = newCreateBy;
                }
                data['panelId'] = $("#panelId").val();
                data['objectid'] = $("#formId").val();
                data['formId'] = $("#formId").val();
                var hiddenObjStr = $("#hiddenObj").val();
                if (hiddenObjStr != null) {
                    var hiddenObj = JSON.parse(hiddenObjStr);
                    for (var key in hiddenObj) {
                        var value = hiddenObj[key];
                        if (value != null && value != '' && value != 'null') {
                            if (key != null && key.lastIndexOf("HIDDEN") > -1) {
                                var columnsArray = value.split(",");
                                var hiddenIds = key.split("HIDDEN_");
                                var hiddenVal = data[hiddenIds[1]];
                                for (var j = 0; j < columnsArray.length; j++) {
                                    data[columnsArray[j]] = hiddenVal;
                                    //                                                    data[columnsArray[j]] = encodeURIComponent(hiddenVal);
                                }
                            }
                        } else {
//alert("Value is null");
                        }
                    }
                }

                var formRecordNo = $("#RECORD_NO").val();
                if (controlType.toUpperCase() == "DELETE" && formRecordNo == data['RECORD_NO']) {
                    recordOpenFlag = true;
                } else {
                    selectedDataArray.push(data);
                }
            }

        }// end for loop
        try {
            controlType = controlType.toUpperCase();
        } catch (e) {
        }
        var ssDuplCheckEnableFlag = $("#ssDuplCheckEnableFlag").val();
        if (duplCheck != null && duplCheck != '' && duplCheck == 'Y') {
//                        if (controlType != null && controlType != '' && (controlType.indexOf("SUBMIT") > -1
//                                || controlType.indexOf("APPROVE") > -1
//                                || controlType.indexOf("TRANSFER") > -1
//                                )) {
            console.log("::::::" + JSON.stringify(selectedDataArray));
            var gridInitParamObjStr = $("#" + gridId).attr("data-gridinitparamobj");
            showLoader(); //3
            $.ajax({
                type: "post",
                url: "bulkDuplicateCheck",
                cache: false,
                data: {'basicData': JSON.stringify(selectedDataArray),
                    'controlType': controlType,
                    gridId: gridId,
                    gridInitParamObj: gridInitParamObjStr


                },
                traditional: true,
                dataType: 'html',
                success: function (response) {
                    stopLoader();
                    console.log("response::::" + response);
                    if (response != null) {
                        var resultObj = JSON.parse(response);
                        if (resultObj != null && resultObj['popUpFlag'] == true) {
                            if (resultObj['typ3Matched'] == 'Y') {
                                ssDuplCheckEnableFlag = 'Y';
                            }
                            var duplicarerecordBasicData = resultObj['duplicateRecordBasicData'];
                            if (duplicarerecordBasicData != null
                                    && !jQuery.isEmptyObject(duplicarerecordBasicData)) {
                                $("#" + gridId).attr("data-duplicaterecorddata", JSON.stringify(duplicarerecordBasicData)); //duplicateRecordBasicData
                            }
                            var messageData = resultObj['duplicateRecordsMessage'];
                            var nonDuplicateArray = resultObj['nonDuplicateArray'];
                            var buttonsarray = [];
                            if (resultObj['messageFlag']) {

                                buttonsarray = [];
                                //messageFlag message
                                if (ssDuplCheckEnableFlag != null && ssDuplCheckEnableFlag == 'N') {
                                    buttonsarray.push({
                                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                                        click: function () {
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
                                            openDuplicateReson(gridId, controlType, erpComment, newCreateBy, returnResaonFlag, selectedDataArray);
                                        }

                                    },
                                            {
                                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                                                click: function () {
                                                    $(this).html("");
                                                    $(this).dialog("close");
                                                    $(this).dialog("destroy");
                                                    submitFinalRequest(gridId, controlType, erpComment, newCreateBy, nonDuplicateArray);
                                                }
                                            });
                                } else {
                                    buttonsarray.push({
                                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                        click: function () {
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
                                            submitFinalRequest(gridId, controlType, erpComment, newCreateBy, nonDuplicateArray);
                                        }
                                    });
                                }


                                //  messageData += "<br>" + resultObj['message'];
                            } else {
                                // all duplicates
                                buttonsarray = [];
                                if (ssDuplCheckEnableFlag != null && ssDuplCheckEnableFlag == 'N') {
                                    buttonsarray.push({
                                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                                        click: function () {
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
                                            openDuplicateReson(gridId, controlType, erpComment, newCreateBy, returnResaonFlag, selectedDataArray);
                                            // submitFinalRequest(gridId, controlType, erpComment, newCreateBy, selectedDataArray);
                                        }
                                    },
                                            {
                                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                                                click: function () {
                                                    $(this).html("");
                                                    $(this).dialog("close");
                                                    $(this).dialog("destroy");
//                                                                    $('#' + gridId).jqxGrid('updatebounddata');
//                                                                    $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                                                    //                                                                    $('#' + gridId).jqxGrid('clearselection');
                                                }
                                            });
                                } else {
                                    messageData += "<br>" + resultObj['message'];
                                    buttonsarray.push({
                                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                        click: function () {
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
//                                                            $('#' + gridId).jqxGrid('updatebounddata');
//                                                            $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                                            //                                                            $('#' + gridId).jqxGrid('clearselection');
                                        }
                                    });
                                }
                            }
                            var dialogSplitMessage = dialogSplitIconText(messageData, "N");
                            if (messageData != null && messageData != '' && messageData.indexOf("<table") > -1) {
                                dialogSplitMessage = messageData;
                            }
                            $("#dialogbluksubmit").html(dialogSplitMessage);
                            $("#dialogbluksubmit").dialog(
                                    {
                                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                        modal: true,
                                        height: 'auto',
                                        minHeight: 'auto',
                                        minWidth: 370,
                                        maxWidth: 'auto',
                                        fluid: true,
                                        buttons: buttonsarray,
                                        open: function () {
                                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                                            $(this).closest(".ui-dialog").addClass("visionDialogAlignCommon");
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
                            submitFinalRequest(gridId, controlType, erpComment, newCreateBy, selectedDataArray);
                        }
                    } else {
                        submitFinalRequest(gridId, controlType, erpComment, newCreateBy, selectedDataArray);
                    }

                },
                error: function (e) {
                    sessionTimeout(e);
                }

            });
        } else {
            submitFinalRequest(gridId, controlType, erpComment, newCreateBy, selectedDataArray, recordOpenFlag, formRecordNo);
        }

// need to write ajax call

    }
//    stopLoader();
}
function openDuplicateReson(gridId, controlType, erpComment, newCreateBy, returnResaonFlag, selectedDataArray) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("openDuplicateReson::Optimize::" + returnResaonFlag);
    if ((returnResaonFlag != null && returnResaonFlag != '') && returnResaonFlag == '1' || returnResaonFlag == '7') {
        var msgTitle = "Duplicate comment";
        msgTitle = labelObject[msgTitle] != null ? labelObject[msgTitle] : msgTitle;
//        var rejectData = $("#rejectData").val();
//          var rejectType = $("#rejectType").val();
        var rejectType = 0;
        try {
            rejectType = $("#rejectType").val();
        } catch (e) {
            rejectType = 0;
        }

        var rejectData = '';
        var rejectDataArray = [];
        try {
            rejectData = $("#rejectData").val();
            var rejectDataArray1 = JSON.parse(rejectData);
            if (rejectData != null && rejectData != '' && rejectData != null && rejectDataArray1.length > 0) {
                for (var i = 0; i < rejectDataArray1.length; i++)
                {
                    rejectDataArray.push(rejectDataArray1[i]);
                }
            }
        } catch (et) {
            rejectData = '';
            rejectDataArray = [];
        }
        console.log(rejectData);

//        var rejectType = "${sessionScope.ssRejectType}";
        // var ssRejectCommentObj = [];
        //    var ssRejectCommentObj = ${sessionScope.ssRejectCommentObj};
//        try {
//            var ssRejectCommentObj = "${sessionScope.ssRejectCommentObj}";
//            if (ssRejectCommentObj != null) {
//                //  var ssRejectCommentObj = JSON.parse(ssRejectCommentObjStr);
//                if (ssRejectCommentObj != null) {
//                    $("#rejectData").val(JSON.stringify(ssRejectCommentObj));
//                }
//            }
//        } catch (e) {
//        }
        alert("rejectType:::" + rejectType);
//        alert("ssRejectCommentObj:::" + ssRejectCommentObj);
        var dialogMesg = "";
        if (rejectType == 0) {
// for need to display empty text area
            dialogMesg = "";
            $("#textReason").html("");
            dialogMesg += "<div id='textReason'>";
            //dialogMesg += "<textarea id='reasonId' rows='4' cols='40'></textarea></div>";
            dialogMesg += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
//            dialogMesg += "<div id='rejectComboBox' class='visionRejectComboBox' ></div>";
            dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
        } else if (rejectType == 1) {
//// for need to display Check box instead of Text Area
//                    dialogMesg = ssRejectCommentObj;
            if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                var rejectData = $("#rejectData").val();
                console.log(rejectData);
                dialogMesg = "";
                //dialogMesg += "<div id='rejectComboBox' ></div>";
                dialogMesg += "<div id='rejectComboBox' class='visionRejectComboBox' ></div>";
                dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
            } else {
                dialogMesg = "";
                $("#textReason").html("");
                dialogMesg += "<div id='textReason'>";
                //dialogMesg += "<textarea id='reasonId' rows='4' cols='40'></textarea></div>";
                dialogMesg += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

            }

        } else if (rejectType == 4)
        {

            if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
                var rejectData = $("#rejectData").val();
                console.log(rejectData);
                dialogMesg = "";
                //dialogMesg += "<div id='rejectComboBox' ></div>";
                dialogMesg += "<div id='rejectComboBox' class='visionRejectComboBox' ></div>";
                $("#textReason").html("");
                dialogMesg += "<div id='textReason'>";
                dialogMesg += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";
                //  $("#dialog2").html(response);

            } else {
                dialogMesg = "";
                dialogMesg += "<div id='textReason'>";
                //dialogMesg += "<textarea id='reasonId' rows='4' cols='40'></textarea></div>";
                dialogMesg += "<textarea id='reasonId' class='visionDeleteReason'></textarea></div>";
                dialogMesg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please give any reason'] != null ? labelObject['Please give any reason'] : 'Please give any reason') + "</div>";

            }
        }
        alert("dialogMesg:::" + dialogMesg);
        $("#dialog1").html(dialogMesg);
        if (rejectData != null && rejectData != '' && rejectDataArray != null && rejectDataArray.length > 0) {
//            var rejectDataArray = JSON.parse(rejectData);
            $("#rejectComboBox").jqxComboBox({source: rejectDataArray, searchMode: 'containsignorecase', multiSelect: true, width: 280, height: 25, autoComplete: true});
        }
        $("#dialog1").dialog({resizable: false,
            title: msgTitle,
            modal: true,
            height: 'auto',
            minWidth: 350,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        var commentData = "";
                        var checkBoxdata = "";
                        // var retReasonText = "";
                        if (rejectType == '0') {
                            var textBoxData = '';
                            try {
                                textBoxData = $("#reasonId").val();
                            } catch (et) {
                                textBoxData = '';
                            }
                            commentData = textBoxData;
                        } else if (rejectType == '1')
                        {
                            var selectReason = null;
                            try {
                                selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                            } catch (et) {
                                selectReason = null;
                            }
                            if (selectReason != null && selectReason.length > 0) {
                                for (var i = 0; i < selectReason.length; i++)
                                {
                                    checkBoxdata += selectReason[i].value;
                                    checkBoxdata += ",";
                                }
                                if (checkBoxdata != null && checkBoxdata != '')
                                {
                                    var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);
                                    commentData = returnReason;

                                } else {
                                    var textBoxData = '';
                                    try {
                                        textBoxData = $("#reasonId").val();
                                    } catch (et) {
                                        textBoxData = '';
                                    }

                                }

                            }
                        } else if (rejectType == '4')
                        {
                            var selectReason = null;
                            try {
                                selectReason = $("#rejectComboBox").jqxComboBox('getSelectedItems');
                            } catch (et) {
                                selectReason = null;
                            }

                            if (selectReason != null && selectReason.length > 0) {

                                for (var i = 0; i < selectReason.length; i++)
                                {
                                    checkBoxdata += selectReason[i].value;
                                    checkBoxdata += ",";
                                }
                                if (checkBoxdata != null && checkBoxdata != '')
                                {

                                    var returnReason = checkBoxdata.substring(0, checkBoxdata.length - 1);

                                    var textBoxData = '';
                                    try {
                                        textBoxData = $("#reasonId").val();
                                    } catch (et) {
                                        textBoxData = '';
                                    }
                                    if (textBoxData != null && textBoxData != '')
                                    {
                                        commentData = returnReason + "," + textBoxData;
                                    } else {
                                        commentData = returnReason;
                                    }


                                } else
                                {
                                    var textBoxData = '';
                                    try {
                                        textBoxData = $("#reasonId").val();
                                    } catch (et) {
                                        textBoxData = '';
                                    }
                                    commentData = textBoxData;
                                }

                            } else {
                                var textBoxData = '';
                                try {
                                    textBoxData = $("#reasonId").val();
                                } catch (et) {
                                    textBoxData = '';
                                }
                                commentData = textBoxData;
                            }


                        } else
                        {
                            var finalSelectedDataArray = [];
                            for (var i = 0; i < selectedDataArray.length; i++) {
                                var dataObj = selectedDataArray[i];
                                if (dataObj != null) {
                                    //dataObj['']
                                    dataObj['rejectComment'] = erpComment + "," + commentData;
                                    finalSelectedDataArray.push(dataObj);
                                }
                            }
                            submitFinalRequest(gridId, controlType, returnResaonFlag, newCreateBy, finalSelectedDataArray);
                            // submitFinalRequest(gridId, controlType, erpComment, newCreateBy, selectedDataArray) {
                        }

                        if (commentData != null && commentData != '') {
                            $("#dailog_error_id").hide();
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            var finalSelectedDataArray = [];
                            for (var i = 0; i < selectedDataArray.length; i++) {
                                var dataObj = selectedDataArray[i];
                                if (dataObj != null) {
                                    //dataObj['']
                                    dataObj['rejectComment'] = erpComment + "," + commentData;
                                    finalSelectedDataArray.push(dataObj);
                                }
                            }
                            submitFinalRequest(gridId, controlType, returnReason, newCreateBy, finalSelectedDataArray);
                        } else {
                            $("#dailog_error_id").show();
                        }

                    }
                },
                {
                    text: labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel',
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        // $("#labeld").empty();

                    }

                }],
            open: function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                $(this).closest(".ui-dialog").addClass("visionGenericTabsDialog2");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });
//                    } else {
//                        // no need to ask reason popup
//                        alert("else");
        //                    }
        stopLoader();
    } else {
        submitFinalRequest(gridId, controlType, erpComment, newCreateBy, selectedDataArray);
    }

}//
function submitFinalRequest(gridId, controlType, erpComment, newCreateBy, selectedDataArray, recordOpenFlag, formRecordNo) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("openDuplicateReson::Optimize::");
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    $.ajax({
        type: "post",
        url: "bulkRegSubmit",
        cache: false,
        data: {'jsonData': JSON.stringify(selectedDataArray),
            'controlType': controlType,
            'formId': $("#formId").val(),
            'panelId': $("#panelId").val(),
            gridId: gridId,
            recordOpenFlag: recordOpenFlag,
            formRecordNo: formRecordNo


        },
        traditional: true,
        dataType: 'html',
        success: function (response) {
            stopLoader();
            alert("response::::" + response);
            var jsonObj = JSON.parse(response);
            $("#dialogsucess").html(jsonObj.Message);
            var message = jsonObj.Message;
            var flag = jsonObj.messageFlag;
            console.log("flag:::::" + flag);
            var dailogProps = {};
            dailogProps.title = labelObject['Message'] != null ? labelObject['Message'] : 'Message';
            dailogProps.modal = true;
            if (flag)
                    // if (message.lastIndexOf("Successfully") > -1 || message.lastIndexOf("Failed") > -1)
                    {
                        var messagecontent = $(message).text();
                        var messagecount = messagecontent.length;
                        console.log("messagecount::::" + messagecount);
                        dailogProps.width = 600;
                        var counts = selectedrowindexes.length;
                        if (messagecount >= 600)
                                //                                        if (counts > 7)
                                {
                                    dailogProps.height = 280;
                                } else
                        {
                            dailogProps.height = "auto";
                        }
                    } else
            {
                //                                  
                var messagecontent = $(message).text();
                var messagecount = messagecontent.length;
                console.log("messagecount::::" + messagecount);
                dailogProps.width = 600;
                if (messagecount >= 600)
                {
                    dailogProps.height = 300;
                } else
                {
                    dailogProps.height = "auto";
                }
            }

            dailogProps.buttons = [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        try {
                            var formRecordNo = $("#RECORD_NO").val();
                            if (formRecordNo == selectedDataArray[0]['RECORD_NO']) {
                                $('#' + "dxpFromTab").hide();
                                $('#' + "dxpFormContent").hide();
                            }
                        } catch (e) {

                        }
                        refreshGrid(gridId);
//                        $('#' + gridId).jqxGrid('updatebounddata');
//                        $('#' + gridId).jqxGrid('updatebounddata', 'cells');
//                        $('#' + gridId).jqxGrid('clearselection');
                        stopLoader();
                        //                                        
                    }
                }];
            dailogProps.fluid = true;
            dailogProps.open = function () {
                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").addClass("visionGenericTabsDialogSuccess");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            };
            dailogProps.beforeClose = function () {
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            };
            dailogProps.close = function () {
//                $('#' + gridId).jqxGrid('updatebounddata');
//                $('#' + gridId).jqxGrid('updatebounddata', 'cells');
//                $('#' + gridId).jqxGrid('clearselection');
            };
            $("#dialogsucess").dialog(dailogProps);
        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }

    });

}
//function getExportType(gridId)
//{
//    var exportType = $('#export' + gridId).val();
//    if (exportType == "CSV")
//    {
//        $("input.exportClass").css('background', '#fff url("images/export_as_csv_icon_blue.png") no-repeat 5px center');
//        $("input.exportClass").hover(
//                function () {
//                    $("input.exportClass").css('background', '#0071c5 url("images/export_as_csv_icon_white.png") no-repeat 5px center', 'important');
//                }, function () {
//            $("input.exportClass").css('background', '#fff url("images/export_as_csv_icon_blue.png") no-repeat 5px center', 'important');
//        });
//        var exportvalue = "yes";
//        $("#excelExport" + gridId).attr("disabled", false);
//    } else if (exportType == "Xlsx" || exportType == "Xls")
//    {
//        $("input.exportClass").css('background', '#fff url("images/export_as_xlsx_icon_blue.png")  no-repeat 5px center', 'important');
//        $("input.exportClass").hover(
//                function () {
//                    $("input.exportClass").css('background', '#0071c5 url("images/export_as_xls_white.png")  no-repeat 5px center', 'important');
//                }, function () {
//            $("input.exportClass").css('background', '#fff url("images/export_as_xlsx_icon_blue.png")  no-repeat 5px center', 'important');
//        });
//        var exportvalue = "yes";
//        $("#excelExport" + gridId).attr("disabled", false);
//    } else if ((exportType == "PDF"))
//    {
//        $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
//        $("input.exportClass").hover(
//                function () {
//                    $("input.exportClass").css('background', '#0071c5 url("images/export_icon_white.png")  no-repeat 5px center', 'important');
//                }, function () {
//            $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png")  no-repeat 5px center', 'important');
//        });
//        $("#excelExport" + gridId).attr("disabled", false);
//    } else if ((exportType == "XML"))
//    {
//        $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png") no-repeat 5px center');
//        $("input.exportClass").hover(
//                function () {
//                    $("input.exportClass").css('background', '#0071c5 url("images/export_icon_white.png") no-repeat 5px center', 'important');
//                }, function () {
//            $("input.exportClass").css('background', '#fff url("images/export_icon_blue.png") no-repeat 5px center', 'important');
//        });
//        var exportvalue = "yes";
//        $("#excelExport" + gridId).attr("disabled", false);
//    } else {
//        $("#excelExport" + gridId).attr("disabled", true);
//    }
//    stopLoader();
//}

//function finalExport(gridId)
//{
//    labelObject = {};
//    try {
//        labelObject = JSON.parse($("#labelObjectHidden").val());
//    } catch (e) {
//
//    }
//    var dataArray = [];
//    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
//    if (selectedrowindexes.length != 0)
//    {
//        var exportType = $('#export' + gridId).val();
//        if (exportType == '')
//        {
//            $("#dialog1").html(labelObject['Please select an option to Export Process'] != null ? labelObject['Please select an option to Export Process'] : 'Please select an option to Export Process');
//            $("#dialog1").dialog({ resizable: false,
//                title: labelObject['Export Record(s)'] != null ? labelObject['Export Record(s)'] : 'Export Record(s)',
//                modal: true,
//                height: 120,
//                minWidth: 300,
//                maxWidth: 'auto',
//                fluid: true,
//                buttons: [{
//                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
//                        click: function () {
//                            $(this).html("");
//                            $(this).dialog("close");
//                            $(this).dialog("destroy");
//                        }
//
//                    }],
//                open: function ()
//                {
//                     //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                    $(".visionHeaderMain").css("z-index", "999");
//                    $(".visionFooterMain").css("z-index", "999");
//                },
//                beforeClose: function (event, ui)
//                {
//                    $(".visionHeaderMain").css("z-index", "99999");
//                    $(".visionFooterMain").css("z-index", "99999");
//                }
//            });
//        } else
//        {
//// need to write Selected data export
//            exportProcess(gridId, 'selected');
//        }
//    } else
//    {
//        var exportRangeVal = $("#ssExportRange").val();
//        var exportRangeCount = $("#ssExportCount").val();
//        if (exportRangeVal != null && exportRangeVal != '' && exportRangeVal == 'Y')
//        {
//            if (!(exportRangeCount != null && exportRangeCount != '' && exportRangeCount != 0))
//
//            {
//                exportRangeCount = 20000;
//            }
//            $("#exportRangeCount").val(exportRangeCount);
//            var sourceex = $('#' + gridId).jqxGrid('source');
//            var totalRecords = sourceex.totalrecords;
//            console.log('totalRecords:::' + totalRecords);
//            var exportMesg = "<div>Select Records to Export:<select id='exportRecordsCount'>";
//            if (parseInt(totalRecords) != 0 && parseInt(totalRecords) <= exportRangeCount) {
//                exportMesg += "<option value='0'>1-" + totalRecords.toLocaleString() + "</option>";
//            } else {
//
//                var totalPages = parseFloat((parseInt(totalRecords) / exportRangeCount));
//                var totalPagesForInt = parseInt((parseInt(totalRecords) / exportRangeCount));
//                var finalPages = totalPages - totalPagesForInt;
//                var j = 0;
//                var i = 0;
//                if (!(finalPages != null && finalPages != '' && finalPages != 0)) {
//                    for (i = 0; i < totalPages; i++) {
//                        exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
//                    }
//                } else {
//                    for (i = 0; i < totalPages - 1; i++) {
//                        exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
//                    }
//                }
////                                for (i = 0; i < totalPages; i++) {
////                                    exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + ((i + 1) * exportRangeCount).toLocaleString() + "</option>";
////                                }
//                var lastRecords = totalPages - totalPagesForInt;
//                if (lastRecords != null && lastRecords != '' && lastRecords != 0) {
//                    exportMesg += "<option value='" + ((i * exportRangeCount) + 1) + "'>" + ((i * exportRangeCount) + 1).toLocaleString() + " - " + totalRecords.toLocaleString() + "</option>"
//                }
//
//            }
//
////                else {
////                                var totalPages = parseInt((parseInt(totalRecords) / 20000)) + 1;
////                                var j = 0;
////                                for (var i = 0; i < totalPages; i++) {
////                                    exportMesg += "<option value='" + ((i * 20000) + 1) + "'>" + ((i * 20000) + 1).toLocaleString() + " - " + ((i + 1) * 20000).toLocaleString() + "</option>";
////                                }
////                            }
//            exportMesg += "</select></div>";
//            $("#dialog1").html(exportMesg);
//            // $("#dialog1").html((labelObject['Do you want to export all records'] != null ? labelObject['Do you want to export all records'] : 'Do you want to export all records') + "?");
//            $("#dialog1").dialog({ resizable: false,
//                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
//                modal: true,
//                height: 120,
//                minWidth: 300,
//                maxWidth: 'auto',
//                fluid: true,
//                buttons: [{
//                        text: labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes',
//                        click: function () {
//                            $("#exportRange").val($("#exportRecordsCount").val());
//                            $(this).html("");
//                            $(this).dialog("close");
//                            $(this).dialog("destroy");
//                            // need to write all data export
//                            exportProcess(gridId, 'all');
//                        }
//                    },
//                    {
//                        text: labelObject['No'] != null ? labelObject['No'] : 'No',
//                        click: function () {
//                            $(this).html("");
//                            $(this).dialog("close");
//                            $(this).dialog("destroy");
//                        }
//                    }],
//                open: function () {
//                     //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
//                    $(".visionHeaderMain").css("z-index", "999");
//                    $(".visionFooterMain").css("z-index", "999");
//                },
//                beforeClose: function (event, ui)
//                {
//                    $(".visionHeaderMain").css("z-index", "99999");
//                    $(".visionFooterMain").css("z-index", "99999");
//                }
//            });
//        } else
//        {
//            exportProcess(gridId, 'all');
//        }
//
//    }
//}                // process the export functionality
// process the export functionality
//function exportProcess(gridId, selectType) {
//    var ssExportColFlag = $("#ssExportColFlag").val();
//    $("#selectType").val(selectType);
//    var exportType = $('#export' + gridId).val();
//    alert(selectType + ":::exportType:::" + exportType);
//    if (exportType != null) {
//        if (selectType != null && selectType == 'selected') {
//
//            if (ssExportColFlag != null && ssExportColFlag != '' && ssExportColFlag == 'Y') {
//                exportSelectedColsProcess(gridId, selectType);
//            } else {
//                var exportJson = {};
//                var count = 0;
//                exportJson['headers'] = fieldsArray;
//                var selectedRowsData = [];
//                var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
//                if (selectedrowindexes.length != 0) {
//                    var totalRowIndex = selectedrowindexes.length;
//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
//                    if (datainformations != null) {
//                        var paginginformation = datainformations['paginginformation'];
//                        var pagenum = paginginformation.pagenum;
//                        if (paginginformation != null) {
//                            var pagesize = paginginformation['pagesize'];
//                            if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
//                                totalRowIndex = parseInt(pagesize);
//                            }
//
//                            if (pagenum != null && pagenum > 0) {
//                                count = pagenum * pagesize;
//                                totalRowIndex = count + pagesize;
//                            }
//
//                        }
//                    }
//                    for (var i = count; i < totalRowIndex; i++) {
//                        selectedRowsData.push($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));
//                    }
//                    exportJson['data'] = selectedRowsData;
//                    $('#downloadDatajsonData').val(JSON.stringify(exportJson));
//                    processExportRequest(gridId, exportType);
//                }// end if
//            }
//        } else {
//
//
//            if (ssExportColFlag != null && ssExportColFlag != '' && ssExportColFlag == 'Y') {
//                exportSelectedColsProcess(gridId, selectType);
//            } else {
//                var exportJson = {};
//                exportJson['headers'] = fieldsArray;
//                // exportJson['data'] = rowsData;
//                $('#downloadDatajsonData').val(JSON.stringify(exportJson));
//                processExportRequest(gridId, exportType);
//            }
//            //  var data = 
//
//        }
//    } else {
//        alert(":::exportType::Not selected:");
//    }
//
//
//}// end of the function

//function exportSelectedColsProcess(gridId, selectType) {
//    var exportType = $('#export' + gridId).val();
//    var ssExportColFlag = $("#ssExportColFlag").val();
//    if (ssExportColFlag != null && ssExportColFlag != '' && ssExportColFlag == 'Y') {
//        var fieldsData = fieldsArray;
//        var inputString = "<div><table id ='gridColumns' border='1' style='width:100%;' class='gridImportColumns'><tr><td><input type='checkbox' class ='visionSelectAllCheckBox' id='selectall' value='selectall' checked></td><td style='text-align:left'>All</td> </tr>";
//        if (fieldsData != null && fieldsData != '') {
//            for (var i = 0; i < fieldsData.length; i++) {
//                var hiddenVal = fieldsData[i].hidden;
//                if (fieldsData[i].text != null && fieldsData[i].text != '' &&
//                        !(fieldsData[i].datafield.startsWith("HIDDEN_") || fieldsData[i].datafield.endsWith("_HIDDEN"))) {
//                    //if (!(fieldsData[i].hidden) || !(hiddenVal)){
//                    if (!(hiddenVal)) {
//                        inputString += "<tr><td><input type='checkbox' class ='visionSelectCheckBox' id='" + fieldsData[i].datafield + "' value='" + fieldsData[i].text + "' checked></td>"
//                                + "<td style='text-align:left'>" + fieldsData[i].text + "</td> </tr>";
//                    }
//                }
//            }
//            inputString += "</table></div>";
//            console.log("inputString::::" + inputString);
//        }
//        $("#dialog").html(inputString);
//        $("#dialog").dialog({ resizable: false,
//            title: labelObject['Selected Grid Colums'] != null ? labelObject['Selected Grid Colums'] : 'Selected Grid Colums',
//            modal: true,
//            height: 300,
//            minWidth: 300,
//            maxWidth: 'auto',
//            fluid: true,
//            buttons: [{
//                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
//                    click: function () {
//                        var checkBoxVals = $('.visionSelectCheckBox:checked').map(function () {
//                            return this.value;
//                        }).get();
//
//                        var headersArray = [];
//                        if ($('#selectallCheck').is(':checked')) {
//                            headersArray = fieldsArray;
//                        } else {
//                            if (fieldsArray != null && fieldsArray != '') {
//                                for (var i = 0; i < fieldsArray.length; i++) {
//                                    for (var j = 0; j < checkBoxVals.length; j++) {
//                                        if (fieldsArray[i].text == checkBoxVals[j])
//                                            headersArray.push(fieldsArray[i]);
//                                    }
//
//                                }
//                            }
//                        }
//                        if (selectType != null && selectType != '' && selectType == 'selected') {
//                            var exportJson = {};
//                            var count = 0;
//                            exportJson['headers'] = headersArray;
//                            var selectedRowsData = [];
//                            var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
//                            if (selectedrowindexes.length != 0) {
//                                var totalRowIndex = selectedrowindexes.length;
//                                var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
//                                if (datainformations != null) {
//                                    var paginginformation = datainformations['paginginformation'];
//                                    var pagenum = paginginformation.pagenum;
//                                    if (paginginformation != null) {
//                                        var pagesize = paginginformation['pagesize'];
//                                        if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
//                                            totalRowIndex = parseInt(pagesize);
//                                        }
//
//                                        if (pagenum != null && pagenum > 0) {
//                                            count = pagenum * pagesize;
//                                            totalRowIndex = count + pagesize;
//                                        }
//
//                                    }
//                                }
//                                for (var i = count; i < totalRowIndex; i++) {
//                                    selectedRowsData.push($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));
//                                }
//                                exportJson['data'] = selectedRowsData;
//                                $('#downloadDatajsonData').val(JSON.stringify(exportJson));
//                                processExportRequest(gridId, exportType);
//                            }// end if
//                        } else {
//                            var exportJson = {};
//                            exportJson['headers'] = headersArray;
//                            // exportJson['data'] = rowsData;
//                            $('#downloadDatajsonData').val(JSON.stringify(exportJson));
//                            processExportRequest(gridId, exportType);
//
//                        }
//                        //var test=fieldsArray;
//                        $(this).html("");
//                        $(this).dialog("close");
//                        $(this).dialog("destroy");
//
//                    }
//
//                }],
//            open: function ()
//            {
//                 //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                $(".visionHeaderMain").css("z-index", "999");
//                $(".visionFooterMain").css("z-index", "999");
//            },
//            beforeClose: function (event, ui)
//            {
//                $(".visionHeaderMain").css("z-index", "99999");
//                $(".visionFooterMain").css("z-index", "99999");
//            }
//        });
//
//        $("#selectall").click(function () {
//            $(".visionSelectCheckBox").prop('checked', $(this).prop('checked'));
//
//        });
//
//    }
//}        // end of function

//function processExportRequest(gridId, exportType) {
//    stopLoader();
//    $("#exportGridId").val(gridId);
//    var jsonString = $('#downloadDatajsonData').val();
//    $("#downloadData").attr("jsonexpdata", jsonString);
//    if (exportType == 'Xlsx') {
//        $("#downloadData").attr("action", "exportXlsxData");
//        $("#downloadData").submit();
//
//    } else if (exportType == 'CSV') {
////        $("#downloadData").attr("jsonExpData", jsonString);
//        $("#downloadData").attr("action", "exportCSVData");
//        $("#downloadData").submit();
//
//    } else if (exportType == 'PDF') {
////        $("#downloadData").attr("jsonExpData", jsonString);
//        $("#downloadData").attr("action", "exportPDFData");
//        // $("#downloadData").submit();
//
//    } else if (exportType == 'XML') {
////        $("#downloadData").attr("jsonExpData", jsonString);
//        $("#downloadData").attr("action", "exportXMLData");
//        $("#downloadData").submit();
//
//    }
//    $('#' + gridId).jqxGrid('clearselection');
//}

function getUserNames(gridId)
{
    showLoader();
    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    var initInstance = "NA";
    var initBusinessUnit = "NA";
    var flag = true;
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            // var previousData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);
            //  initInstance = previousData["INSTANCE"];
            //  initBusinessUnit = previousData["BUSINESS_UNIT"];
            console.log("initInstnce::::0" + initInstance);
            console.log("initInstnce::::22" + data["INSTANCE"]);
            if (initInstance != data["INSTANCE"] && initInstance != 'NA') {
                flag = false;
                console.log("fjh");
            } else {
                initInstance = data["INSTANCE"];
                selectedDataArray.push(data);
            }
        }
    }




    var result = "<select id='assign'>";
    if (flag)
    {
        $.ajax({
            type: "get",
            url: "getUser",
            cache: false,
            traditional: true,
            data: {'jsonData': JSON.stringify(selectedDataArray)},
            dataType: 'html',
            success: function (response) {
                stopLoader();
                var obj = JSON.parse(response);
                var flag = obj.flag;
                var dailogProps = {};
                dailogProps.title = labelObject['Message'] != null ? labelObject['Message'] : 'Message';
                dailogProps.modal = true;
                dailogProps.height = "auto";
                dailogProps.width = "400px";
                dailogProps.buttons = [];
                dailogProps.fluid = true;
                //  dailogProps.buttons = {};
                // dailogProps.fluid = true;
                dailogProps.beforeClose = function () {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                };
                alert("flag" + flag);
                dailogProps.buttons.push(
                        {text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                var newCreateBy = "";
                                var assignSelectItem = $("#assign").jqxComboBox('getSelectedItem');
                                if (assignSelectItem != null) {
                                    newCreateBy = assignSelectItem['value'];
                                }
                                //                                                var newCreateBy = $("#assign").val();
                                //alert(dropVal + "gjjhjh17267");
                                if (newCreateBy != '' && newCreateBy != 'null' && newCreateBy != undefined)
                                {

                                    submitRequest(gridId, "Assign", "", newCreateBy);
                                }
                                $('#' + gridId).jqxGrid('clearselection');
//                                stopLoader();
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }});
                if (flag)
                {
                    alert("alert inside flag value true");
                    var selectUser = "<div class='visionFormAssignDropdown'><div class='visionFormAssignTitle'>"
                            + (labelObject['Select User'] != null ? labelObject['Select User'] : 'Select User')
                            + "</div><div id='value'></div></div>";
                    $("#dialog1").html(obj.userDiv);
//                                    $('#value').append(obj.userDiv);
//                                    $("#dialog1").html("<div id='value'></div>");
                    //                                    $('#value').append(obj.userDiv);
                    dailogProps.buttons.push(
                            {text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }});
                    dailogProps.open = function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionFormDataDialogSuccess");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    };
                } else
                {
                    alert("alert inside flag valuefalse");
                    alert(obj.userDiv);
                    alert("alert inside flag value true");
                    var selectUser = "<div class='visionFormAssignDropdown'><div class='visionFormAssignTitle'>"
                            + (labelObject['Select User'] != null ? labelObject['Select User'] : 'Select User')
                            + "</div><div id='value'></div></div>";
                    $("#dialog1").html(obj.userDiv);
//                                    $('#value').append(obj.userDiv);
//                                    $("#dialog1").html("<div id='value'></div>");
//                                    // var dialogSplitMessage = dialogSplitIconText(obj.userDiv, flag);
                    //                                    $('#value').append(obj.userDiv);
                    dailogProps.open = function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        //$(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionFormDataDialogSuccess");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    };
                }
                $("#assign").jqxComboBox({searchMode: 'containsignorecase', multiSelect: false, width: 280,
                    autoComplete: true,
                    theme: 'energyblue',
                    openDelay: 1,
                    closeDelay: 1,
                    enableSelection: true,
                    height: 25});
                //                                $("#assign").chosen({allow_single_deselect: true});

                // $("#dialog1").html("<div id='value'></div>");
                // $('#value').append(obj.userDiv);
                $("#dialog1").dialog(dailogProps);
            }
            ,
            error: function (e) {
                sessionTimeout(e);
            }

        });
    } else

    {
//                        $("#dialog1").html("");
        //                        $("#dialog1").close();
        $("#dialog1").html(labelObject['Please select the records of same instance and plant'] != null ? labelObject['Please select the records of same instance and plant'] : 'Please select the records of same instance and plant');
        $("#dialog1").dialog({resizable: false,
            title: 'Message',
            modal: true,
            width: 270,
            height: 'auto',
            minHeight: 'auto',
            fluid: true,
            buttons: [
                {
                    text: "Ok",
                    //  "class": 'dialogyes',
                    click: function () {
                        $(this).html("");
                        $('#' + gridId).jqxGrid('clearselection');
                        stopLoader();
                        // refreshGrid(gridId);
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        // navigationMenuUrl('loginpage');
                    }
                }
            ]
        });
    }
    stopLoader();
}

function plantDataMM(basicData, success_msg) {
    var new_locatecode = "";
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $.ajax({
        type: "POST",
        data:
                {
                    basicData: basicData
                },
        traditional: true,
        dataType: 'html',
        url: "plantDataMgr",
        cache: false,
        success: function (response) {

            console.log("response::::4061:::;" + response);
            if (response != null && response != '') {

                var plantDataDiv = "<div class='visionFormExtendDropdown' type = 'checkbox'><div class='visionFormExtendTitle'>"
                        + (labelObject['Plant'] != null ? labelObject[' Plant'] : 'Plant')
                        + "</div><div id='instance_div' class='visionFormExtendInfo'><select id='selectedInstance' multiple>" +
                        "" + response +
                        "</select></div></div>";
                $("#result").html(plantDataDiv);
                // var instancedata = $(selectedInstance);
                $("#selectedInstance").chosen({allow_single_deselect: true});

                $("#result").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Plant'] != null ? labelObject['Plant'] : 'Plant'),
//                        minHeight: 0,
//                        minWidth: 300,
                    width: 300,
                    maxWidth: 'auto',
                    height: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                var selectedInstance = $('#selectedInstance').val();
                                console.log("selectedInstance::::" + selectedInstance);

                                //  selectedInstance = selectedInstance.split(':');
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");

                                if (selectedInstance != null && selectedInstance != '') {
                                    delete basicData['NEW_PLANT'];
                                    delete basicData['NEW_INSTANCE'];
                                    delete basicData['NEW_BUSINESS_UNIT'];
                                    basicData['NEW_PLANT'] = selectedInstance[1];
                                    basicData['NEW_BUSINESS_UNIT'] = selectedInstance[1];
                                    basicData['NEW_INSTANCE'] = selectedInstance[0];
                                    var jsonString = JSON.stringify(basicData);

                                    console.log("jsonString::::" + JSON.stringify(jsonString));
                                    //extensions(jsonString, success_msg);
                                    insertinbulebel(selectedInstance, jsonString, success_msg)
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
        },
        error: function (e) {
            //  ////////alert(e.message)
            sessionTimeout(e);
        }
    });
}

function insertinbulebel(selectedInstance, success_msg, gridId)
{
    showLoader();
    //  var gridId = $("#gridId").val();
    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {

                var hiddenObjStr = $("#hiddenObj").val();
                if (hiddenObjStr != null) {
                    var hiddenObj = JSON.parse(hiddenObjStr);
                    for (var key in hiddenObj) {
                        var value = hiddenObj[key];
                        if (value != null && value != '' && value != 'null') {
                            if (key != null && key.lastIndexOf("HIDDEN") > -1) {
                                var columnsArray = value.split(",");
                                var hiddenIds = key.split("HIDDEN_");
                                var hiddenVal = data[hiddenIds[1]];
                                for (var j = 0; j < columnsArray.length; j++) {
                                    data[columnsArray[j]] = hiddenVal;
//                                                    data[columnsArray[j]] = encodeURIComponent(hiddenVal);
                                }
                            }
                        } else {
                            //alert("Value is null");
                        }
                    }
                }

                selectedDataArray.push(data);
            }

        }
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: "insertplantGrid",
            cache: false,
            data: {'basicData': JSON.stringify(selectedDataArray),
                'selectedInstance': selectedInstance

            },
            success: function (response) {
                stopLoader();
                if (response != null && response != '') {
                    var resultObj = JSON.parse(response);
                    if (resultObj != null) {
                        var messageFlag = resultObj['message'];
                        // if (messageFlag) {

                        var dialogSplitMessage = dialogSplitIconText(resultObj['message'], true);
                        $("#result").html(dialogSplitMessage);
                        $("#result").dialog({resizable: false,
                            modal: true,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            minWidth: 300,
                            maxWidth: 'auto',
                            height: 'auto',
                            minHeight: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {

                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        $('#' + gridId).jqxGrid('updatebounddata');
                                        $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                                        $('#' + gridId).jqxGrid('clearselection');
                                        //location.reload();

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
                        //   }



                    }
                }

            },
            error: function (e) {
                //  ////////alert(e.message)
                sessionTimeout(e);
            }
        });
    }

    //  if (jsonString != null) {

    //    }
}

function processUnSupersedeItems(gridId, controlType) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (gridId != null) {
        var selectedDataArray = [];
        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        alert(JSON.stringify(selectedrowindexes));
        if (selectedrowindexes.length != 0) {
            try {
                controlType = controlType.toUpperCase();
            } catch (e) {
            }
            var totalRowIndex = selectedrowindexes.length;
            var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
            if (datainformations != null) {
                var paginginformation = datainformations['paginginformation'];
                if (paginginformation != null) {
                    var pagesize = paginginformation['pagesize'];
                    if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                        totalRowIndex = parseInt(pagesize);
                    }

                }
            }
            for (var i = 0; i < totalRowIndex; i++) {
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                if (data != null) {
                    data['objectid'] = $("#formId").val();
                    data['panelId'] = $("#panelId").val();
                    data['gridId'] = gridId;
                    data['controlType'] = controlType;
                    selectedDataArray.push(data);
                }
            }

            $.ajax({
                type: "post",
                url: "undeleteBulkRequest",
                cache: false,
                traditional: true,
                data: {'basicData': JSON.stringify(selectedDataArray)
                },
                success: function (response) {
                    stopLoader();
                    if (response != null && response != '') {
                        var jsonObj = JSON.parse(response);
                        $("#dialogsucess").html(jsonObj.Message);
                        var message = jsonObj.Message;
                        var flag = jsonObj.messageFlag;
                        console.log("flag:::::" + flag);
                        var dailogProps = {};
                        dailogProps.title = labelObject['Message'] != null ? labelObject['Message'] : 'Message';
                        dailogProps.modal = true;
                        if (flag)
                                // if (message.lastIndexOf("Successfully") > -1 || message.lastIndexOf("Failed") > -1)
                                {
                                    var messagecontent = $(message).text();
                                    var messagecount = messagecontent.length;
                                    console.log("messagecount::::" + messagecount);
                                    dailogProps.width = 600;
                                    var counts = selectedrowindexes.length;
                                    if (messagecount >= 600)
                                            //                                        if (counts > 7)
                                            {
                                                dailogProps.height = 280;
                                            } else
                                    {
                                        dailogProps.height = "auto";
                                    }
                                } else
                        {
                            //                                  
                            var messagecontent = $(message).text();
                            var messagecount = messagecontent.length;
                            console.log("messagecount::::" + messagecount);
                            dailogProps.width = 600;
                            if (messagecount >= 600)
                            {
                                dailogProps.height = 300;
                            } else
                            {
                                dailogProps.height = "auto";
                            }
                        }

                        dailogProps.buttons = [{
                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    $('#' + gridId).jqxGrid('updatebounddata');
                                    $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                                    $('#' + gridId).jqxGrid('clearselection');
                                    stopLoader();
//                                          var selectedremainrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
//                                         $("#excelExport").attr("disabled", true);
//                                                $("#approvebutt").attr("disabled", true);
//                                                $("#drop").attr("disabled", true);
//                                                $("#drop").css("opacity", "0.5");
//                                                $("#export").attr("disabled", true);
                                    //                                                $("#export").css("opacity", "0.5");

                                }
                            }];
                        dailogProps.fluid = true;
                        dailogProps.open = function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").addClass("visionGenericTabsDialogSuccess");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        };
                        dailogProps.beforeClose = function () {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        };
                        $("#dialogsucess").dialog(dailogProps);
                    }

                },
                error: function (e) {
                    sessionTimeout(e);
                }

            });
        } else
        {
            $("#dialog1").html(labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process');
            $("#dialog1").dialog({resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {

                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            // need to write all data export

                        }
                    }
                ],
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
    }
}
function processSupersedeItems(gridId)
{
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes.length != 0) {
        var supersedeNoVal = "";
        var dialogMsg = "";
        var gridInitParamObjStr = $("#" + gridId).attr("data-gridinitparamobj");
        gridInitParamObjStr = JSON.parse(gridInitParamObjStr);
        var erpFlag = '';
        if (gridInitParamObjStr.uuu_SupersedeErpNo != null && gridInitParamObjStr.uuu_SupersedeErpNo != '' && gridInitParamObjStr.uuu_SupersedeErpNo == 'Y') {
            dialogMsg += "<table><tr><td>Supersede with ERP No</td><td><input type='text' name ='Supersede' id = 'supersedeNo'><td></tr></table>"
            dialogMsg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please provide Supersede ERP No'] != null ? labelObject['Please provide Supersede ERP No'] : 'Please provide Supersede ERP No') + "</div>";
            erpFlag = true;
        } else {
            dialogMsg += "<table><tr><td>Supersede with Record No</td><td><input type='text' name ='Supersede' id = 'supersedeNo'><td></tr></table>";
            dialogMsg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please provide Supersede Record No'] != null ? labelObject['Please provide Supersede Record No'] : 'Please provide Supersede Record No') + "</div>";
            erpFlag = false;
        }
//                    dialogMsg += "<table><tr><td>Supersede with Record No</td><td><input type='text' name ='Supersede' id = 'supersedeNo'><td></tr></table>";
        //                    dialogMsg += "<div id='dailog_error_id' style='display:none;color:red'>" + (labelObject['Please provide Supersede Record No'] != null ? labelObject['Please provide Supersede Record No'] : 'Please provide Supersede Record No') + "</div>";

        //  $("#dialog1").html("<table><tr><td>Supersede with Record No</td><td><input type='text' name ='Supersede' id = 'supersedeNo'><td></tr></table>");
        $("#dialog1").html(dialogMsg);
        $("#dialog1").dialog({resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 'auto',
            minWidth: 350,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        supersedeNoVal = $('#supersedeNo').val();
                        if (supersedeNoVal != '')
                        {
                            $("#dailog_error_id").hide();
                            updateSupersedeItemsStatus(gridId, supersedeNoVal, erpFlag);

                        } else {
                            $("#dailog_error_id").show();
                        }

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        // need to write all data export

                    }
                }
            ],
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
    } else {
        $("#dialog1").html(labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process');
        //                            $("#dialog1").html(labelObject['Please select an Action & Record(s)'] != null ? labelObject['Please select an Action & Record(s)'] : 'Please select an Action & Record(s)');
        $("#dialog1").dialog({resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
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
function updateSupersedeItemsStatus(gridId, supersedeNoVal, erpFlag)
{
    showLoader();

    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $.ajax({
        type: "post",
        url: "getMasterDataStatus",
        cache: false,
        traditional: true,
        data: {
            'supersedeNoVal': supersedeNoVal,
            'erpFlag': erpFlag},

        success: function (response) {
            stopLoader();
            if (response != null && response != '')
            {
                if (response.indexOf("Ok") > -1)
                {
                    var selectedDataArray = [];
                    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
                    alert(JSON.stringify(selectedrowindexes));
                    if (selectedrowindexes.length != 0) {
                        var totalRowIndex = selectedrowindexes.length;
                        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                        if (datainformations != null) {
                            var paginginformation = datainformations['paginginformation'];
                            if (paginginformation != null) {
                                var pagesize = paginginformation['pagesize'];
                                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                                    totalRowIndex = parseInt(pagesize);
                                }

                            }
                        }
                        for (var i = 0; i < totalRowIndex; i++) {
                            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                            if (data != null) {
                                selectedDataArray.push(data);
                            }
                        }

                        $.ajax({
                            type: "post",
                            url: "updateSupersedeItem",
                            cache: false,
                            traditional: true,
                            data: {'jsonData': JSON.stringify(selectedDataArray),
                                'supersedeNoVal': supersedeNoVal,
                                'erpFlag': erpFlag},

                            success: function (response) {
                                stopLoader();
                                $("#dialog1").html(response);
                                $("#dialog1").dialog({resizable: false,
                                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                                    modal: true,
                                    height: 200,
                                    minWidth: 300,
                                    maxWidth: 'auto',
                                    fluid: true,
                                    buttons: [{
                                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                            click: function () {

                                                $(this).html("");
                                                $(this).dialog("close");
                                                $(this).dialog("destroy");
                                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                                $("#" + gridId).jqxGrid('clearselection');
                                                $("#" + gridId).jqxGrid('clearfilters');
                                                // need to write all data export

                                            }
                                        }
                                    ],
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
                    }
                } else
                {
                    $("#dialog1").html(response);
                    $("#dialog1").dialog({resizable: false,
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 120,
                        minWidth: 300,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                click: function () {

                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    // need to write all data export

                                }
                            }
                        ],
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

            }
        }
        ,
        error: function (e) {
            sessionTimeout(e);
        }

    });

}

function processSupersedeAccptItems(gridId)
{
    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    alert(JSON.stringify(selectedrowindexes));
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                selectedDataArray.push(data);
            }
        }
        $.ajax({
            type: "post",
            url: "updateSupersedeAccptItem",
            cache: false,
            traditional: true,
            data: {'jsonData': JSON.stringify(selectedDataArray),
            },

            success: function (response) {
                stopLoader();
                $("#dialog1").html(response);
                $("#dialog1").dialog({resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    modal: true,
                    height: 'auto',
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                $("#" + gridId).jqxGrid('clearselection');
                                $("#" + gridId).jqxGrid('clearfilters');
                                // need to write all data export

                            }
                        }
                    ],
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
    }
}

function viewDocument(sequenceNo) {
    if (sequenceNo != null && sequenceNo != '') {
        $("#urlSubmitForm").attr("action", "viewDocuments");
        $("#urlSubmitForm").attr("target", "_blank");
        $("#urlSubmitForm").find('input').remove();
        var csrfToken = $("input[name='_csrf']").val();
        if (csrfToken != null && csrfToken != '') {
            var csrf = "<input type='hidden' name='_csrf' value='" + csrfToken + "'/>";
            $("#urlSubmitForm").append(csrf);
        }
        var inputType = "<input type='hidden' name='sequenceNo' value='" + sequenceNo + "'/>";
        $("#urlSubmitForm").append(inputType);
        $("#urlSubmitForm").submit();
    }

}
function processEnrichment(gridId, jsonString) {
    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    var initInstance = "NA";
    var initBusinessUnit = "NA";
    var flag = true;
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            // var previousData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);
            //  initInstance = previousData["INSTANCE"];
            //  initBusinessUnit = previousData["BUSINESS_UNIT"];
            console.log("data::::" + data);
            console.log("initInstnce::::0" + initInstance);
            console.log("initInstnce::::22" + data["BUSINESS_UNIT"]);
            if (initBusinessUnit != data["BUSINESS_UNIT"] && initBusinessUnit != 'NA') {
                flag = false;
                console.log("fjh");
            } else {
                initBusinessUnit = data["BUSINESS_UNIT"];
                selectedDataArray.push(data);
            }
        }
    }
    if (flag)
    {
        $.ajax({
            url: "bulkEnricmentRequestors",
            type: "post",
            dataType: 'html',
            cache: false,
            data:
                    {
                        basicData: jsonString
                    },

            traditional: true,
            success: function (response) {

                console.log("The result is:::" + response);
                var dialogSplitMessage = "<table><tr><th>" + (labelObject['Requestor'] != null ? labelObject['Requestor'] : 'Requestor') + ":</th><td><div id='enrichRequestors'></div><div id=\"enrichRequestorsError\" style='color:red;'></div></td></tr></table>";
                $("#dialog").html(response);
                $("#enrichRequestors").jqxComboBox({searchMode: 'contains', multiSelect: false, width: 280, height: 25});
//                        $("#enrichRequestors").chosen({allow_single_deselect: true});

                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 450,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                // call change
                                var success_msg = $("#Enrich").attr('data-success-conf');
                                var enrichRequestorsItem = $("#enrichRequestors").jqxComboBox('getSelectedItem');
                                if (enrichRequestorsItem != null) {
                                    var enrichRequestors = enrichRequestorsItem['value'];
                                    processEnrichedReq(gridId, enrichRequestors);
                                }
//                                        var enrichRequestors = $("#enrichRequestors").val();
//                                        processEnrichedReq(gridId, enrichRequestors);
//                                            var basicData = JSON.parse(jsonString);
//                                            basicData['NEW_CUSTOM_COLUMN5'] = enrichRequestors;
//                                            jsonString = JSON.stringify(basicData);
//                                            changeRequest(jsonString, 'changeRequest', success_msg);
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");

                            }}],
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





            }, error: function (e) {
                console.log("The Error Message is:::" + e.message);
                sessionTimeout(e);
            }

        });

    } else

    {
//                        $("#dialog1").html("");
//                        $("#dialog1").close();
        $("#dialog1").html(labelObject['Please select the records of same instance and plant'] != null ? labelObject['Please select the records of same instance and plant'] : 'Please select the records of same instance and plant');
        $("#dialog1").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            width: 270,
            height: 'auto',
            minHeight: 'auto',
            fluid: true,
            buttons: [
                {
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    //  "class": 'dialogyes',
                    click: function () {
                        $(this).html("");
                        $('#' + gridId).jqxGrid('clearselection');
                        // refreshGrid(gridId);
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        // navigationMenuUrl('loginpage');
                    }
                }
            ]
        });
    }

}
function processEnrichedReq(gridId, enrichRequestors)
{


    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes.length != 0)
    {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                data['panelId'] = $("#panelId").val(),
                        data['objectid'] = $("#formId").val();
                data['formId'] = $("#formId").val();
                data['controlType'] = 'Enrich';

                if (enrichRequestors != null && enrichRequestors != '')
                {
                    //data['NEW_CUSTOM_COLMN5'] = enrichRequestors;

                    data['NEW_CUSTOM_COLUMN5'] = enrichRequestors;
                    //data['CREATE_BY'] = newCreateBy;
                }
                var hiddenObjStr = $("#hiddenObj").val();
                if (hiddenObjStr != null) {
                    var hiddenObj = JSON.parse(hiddenObjStr);
                    for (var key in hiddenObj) {
                        var value = hiddenObj[key];
                        if (value != null && value != '' && value != 'null') {
                            if (key != null && key.lastIndexOf("HIDDEN") > -1) {
                                var columnsArray = value.split(",");
                                var hiddenIds = key.split("HIDDEN_");
                                var hiddenVal = data[hiddenIds[1]];
                                for (var j = 0; j < columnsArray.length; j++) {
                                    data[columnsArray[j]] = hiddenVal;
                                    //                                                    data[columnsArray[j]] = encodeURIComponent(hiddenVal);
                                }
                            }
                        } else {
                            //alert("Value is null");
                        }
                    }
                }

                selectedDataArray.push(data);
            }
        }


        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: 'bulkChange',
            cache: false,
            data: {'basicData': JSON.stringify(selectedDataArray), 'gridId': gridId},
            success: function (response) {

                var jsonData = {};
                var jsonObj = JSON.parse(response);
                // response = jsonObj.Message;
                var message = jsonObj.Message;
                $("#dialogsucess").html(message);
                jsonData = jsonObj.ssfromobject;
                var flag = jsonObj.messageFlag;
                var dailogProps = {};
                dailogProps.title = labelObject['Message'] != null ? labelObject['Message'] : 'Message';
                dailogProps.modal = true;
                if (flag)
                        // if (message.lastIndexOf("Successfully") > -1 || message.lastIndexOf("Failed") > -1)
                        {
                            var messagecontent = $(message).text();
                            var messagecount = messagecontent.length;
                            console.log("messagecount::::" + messagecount);
                            dailogProps.width = 600;
                            var counts = selectedrowindexes.length;
                            if (messagecount >= 600)
                                    //                                        if (counts > 7)
                                    {
                                        dailogProps.height = 280;
                                    } else
                            {
                                dailogProps.height = "auto";
                            }
                        } else
                {
                    //                                  
                    var messagecontent = $(message).text();
                    var messagecount = messagecontent.length;
                    console.log("messagecount::::" + messagecount);
                    dailogProps.width = 600;
                    if (messagecount >= 600)
                    {
                        dailogProps.height = 300;
                    } else
                    {
                        dailogProps.height = "auto";
                    }
                }
                dailogProps.buttons = [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            $('#' + gridId).jqxGrid('updatebounddata');
                            $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                            $('#' + gridId).jqxGrid('clearselection');
                            stopLoader();
//                                          var selectedremainrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
//                                         $("#excelExport").attr("disabled", true);
//                                                $("#approvebutt").attr("disabled", true);
//                                                $("#drop").attr("disabled", true);
//                                                $("#drop").css("opacity", "0.5");
//                                                $("#export").attr("disabled", true);
                            //                                                $("#export").css("opacity", "0.5");

                        }
                    }];
                dailogProps.fluid = true;
                dailogProps.open = function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").addClass("visionGenericTabsDialogSuccess");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                };
                dailogProps.beforeClose = function () {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                };
                $("#dialogsucess").dialog(dailogProps);
            },
            error: function (e) {
                sessionTimeout(e);
            }
            //                               
        });

    }
    stopLoader();
}

//                -----jagadish methods start for mass data process

function gridoperations(gridOpId, operationName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    // ravi start
    checkChanges(gridOpId);
    // ravi end
    var currentGridId = gridOpId;
    var lasteditedfield = $('#' + gridOpId).attr('data-last-ed-field');
    var lasteditedrow = $('#' + gridOpId).attr('data-last-ed-row');
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
            && operationName != 'gridAddNewForm'
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
        refreshGrid(currentGridId);
    } else if (operationName == 'resetuser')
    {// For Delate
        resetPassword(currentGridId);
    } else if (operationName == 'delete')
    {// For Delate
        getDeleteConfirmMessage(currentGridId);
    } else if (operationName == 'refresh' || operationName == 'umrefresh') {// For Refresh
        refreshGrid(currentGridId);
        //  gridDataOperation(currentGridId, operationName);
    } else if (operationName == 'update' || operationName == 'umupdate') {//For  Update
        $('#' + gridOpId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
        gridDataOperation(currentGridId, operationName);
    } else if (operationName == 'gridformInsert') {
        populategridForm(currentGridId);
    } else if (operationName == 'add') {  // for insert
        insertRow(currentGridId, 'GRID-VIEW', currentGridId)
    } else if (operationName == 'gridAddNewForm') {
        populateGridDataForm(currentGridId);
    } else if (operationName == 'fillDown') {  // for fillDown
        populateFillDownData(currentGridId);
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
    } else if (operationName == 'DHA') {
        showDataDH(currentGridId);
    } else if (operationName == 'Profiling') {
        getProfingData(currentGridId);
    } else if (operationName == 'dhDuplicateCheckProcess') {
        dhDuplicateCheck(currentGridId);
    }


}

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
                        var totalRowIndex = selectedRowIndexes.length;
                        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                        if (datainformations != null) {
                            var paginginformation = datainformations['paginginformation'];
                            if (paginginformation != null) {
                                var pagesize = paginginformation['pagesize'];
                                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                                    totalRowIndex = parseInt(pagesize);
                                }

                            }
                        }
                        for (var i = 0; i < totalRowIndex; i++) {
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
                }
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


function processRequestforMassBulk(selectedrowindexes, operationName, gridId) {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var globalData = "";
    var url = "";
    var dqmStatusFinalApproveCheckFlag = false;
    var dqmStatusFinalApproveCheckBatchId = "";
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
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            if (selectedrowindexes[i] != -1) {
                var dataObject = {};
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                if (data != null) {
                    //            var oldDataArray = childOldData[gridId];
                    dataObject['gridId'] = gridId;
                    if (data.hasOwnProperty('EXPIRY_DATE'))
                    {
                        var newExpDate = new Date(data.EXPIRY_DATE.getUTCFullYear(), data.EXPIRY_DATE.getUTCMonth(), (data.EXPIRY_DATE.getUTCDate()) + 1);
                        var getFormattedExpDate = convert(newExpDate);

                        data.EXPIRY_DATE = getFormattedExpDate;

                    }
                    if (data.hasOwnProperty('DOB'))
                    {
                        var newDobDate = new Date(data.DOB.getUTCFullYear(), data.DOB.getUTCMonth(), (data.DOB.getUTCDate()) + 1);
                        var getFormattedDobDate = convert(newDobDate);
                        data.DOB = getFormattedDobDate;
                    }
                    if (url != null && url != undefined && (url == 'gridUpdateRecords' || url == 'gridDeleteRecords'))
                    {
                        var value = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], "IMPORT_VALIDATION_COMMENTS");
                        if (value != null && value != undefined && value == 'Record processed')
                        {
                            var message = "selected Record(s) are already processed";
                            message = labelObject[message] != null ? labelObject[message] : message;
                            popupMessage(message);
                            return;
                        } else if (value != null && value != undefined && (value == 'OK' || value == 'Record Verified'))
                        {
                            data.IMPORT_VALIDATION_COMMENTS = "";
                        }

                    }
                    if (data.hasOwnProperty('STATUS'))
                    {
                        if (!dqmStatusFinalApproveCheckFlag) {
                            var value = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], "STATUS");
                            var dqmBatchId = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], "BATCH_ID");
                            if (!(dqmBatchId != null && dqmBatchId != '' && dqmBatchId != undefined)) {
                                dqmBatchId = $('#' + gridId).jqxGrid('getcellvalue', selectedrowindexes[i], "REGISTER_COLUMN5");
                            }
                            if (value == 'A5-SUBMITTED (CE)')
                            {
                                dqmStatusFinalApproveCheckBatchId = dqmBatchId;
                                dqmStatusFinalApproveCheckFlag = true;
                            }
                        }
                    }
                    globalData = data;
                    data.policyImpactFlag = false;
                    selectedDataArray.push(data);

                }

            }

        }
    }
    var classTerm = "";
    var recordNo = "";
    var masterGridId = $("#mastergridid").val();
    if (masterGridId == null || masterGridId == undefined || masterGridId == "") {
        masterGridId = $("#currentGridId").val();
    }
    var selectedMasterRowIndexes = $("#" + masterGridId).jqxGrid('getselectedrowindexes');
    if (selectedMasterRowIndexes != null && selectedMasterRowIndexes != undefined && selectedMasterRowIndexes != "") {
        if (selectedMasterRowIndexes.length > 0) {
//            for (var i = 0; i < selectedrowindexes.length; i++) {
//                if (selectedrowindexes[i] !== undefined && selectedrowindexes[i] >= 0) {
            var lastEditedRow = selectedMasterRowIndexes[selectedMasterRowIndexes.length - 1];
            var MasterRowData = $('#' + masterGridId).jqxGrid('getrowdata', lastEditedRow);
            if (MasterRowData != null && MasterRowData != "" && MasterRowData != undefined) {
                classTerm = MasterRowData['CLASS_TERM'];
                recordNo = MasterRowData['RECORD_NO'];
            }
        }
    }
    var lastEditedDataRow = selectedrowindexes[selectedrowindexes.length - 1];
    var childRowData = $('#' + gridId).jqxGrid('getrowdata', lastEditedDataRow);
    if (childRowData != null && childRowData != "" && childRowData != undefined) {
        var referenceNo = childRowData['REFERENCE_NO'];
        var referenceType = childRowData['REFERENCE_TYPE'];
    }
    var AIEnableOrDisableFlag = $("#AIEnableOrDisableFlag").val();
    if (AIEnableOrDisableFlag != null && AIEnableOrDisableFlag != undefined && AIEnableOrDisableFlag != "" && AIEnableOrDisableFlag == 'Y') {
        if (operationName != null && operationName != undefined && operationName != "" && operationName == 'update') {
            if (gridId != null
                    && (!(gridId.indexOf("_SAP") > -1
                            || gridId.indexOf("SAP_") > -1
                            || gridId.indexOf("_ERP") > -1
                            || gridId.indexOf("ERP_") > -1))) {
                var AilensEnrichTypes = localStorage.getItem("AilensEnrichTypes");
                if (referenceType != null && referenceType != '' && referenceType != undefined) {
                    var ailensEnrichTypesArr = AilensEnrichTypes.split(',');
                    for (var j = 0; j < ailensEnrichTypesArr.length; j++) {
                        if (referenceType == ailensEnrichTypesArr[j]) {
                            showAIReferenceNoAndClassBasedLinks(referenceNo, classTerm, gridId, recordNo);
                            break;
                        }
                    }
                }
            }

        }
    }
    console.log(url + "::::selectedDataArray.length::end:::828:" + JSON.stringify(selectedDataArray));
    //console.log("URL:::"+url);
    if (selectedDataArray.length != 0) {
        if (dqmStatusFinalApproveCheckFlag) {
            showDQMStatusFinalApprovalChecks(selectedDataArray, url, gridId, $("#tableName").val(), dqmStatusFinalApproveCheckBatchId);
            return;
        }
        $.ajax({
            type: "POST",
            url: url,
            data: {
                gridJsonData: JSON.stringify(selectedDataArray),
                gridId: gridId,
                tableName: $("#tableName").val()
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
                    var jsresTable = "<div class='visionBulkUserMain'><table class='visionBulkUser'><thead><th class='visionBulkUserHeader'>S.No</th><th class='visionBulkUserHeader'>${labelobj['User Name'] != null ? labelobj['User Name']: 'User Name'}</th><th class='visionBulkUserHeader'>Message</th></thead><tbody>";
                    for (var i = 0; i < jsResArray.length; i++) {
                        jsresTable = jsresTable + "<tr>"
                                + " <td>" + i + "</td>"
                                + "<td class='visionBulkUserData'>" + jsResArray[i].username + "</td>"
                                + "<td class='visionBulkUserData'>" + jsResArray[i].message + "</td></tr>";
                    }
                    jsresTable = jsresTable + "</tbody></table></div>";
                } else {
                    if (result.includes('"policyImpactFlag"')) {
                        var resultObj = JSON.parse(result);
                        var policyImpactFlag = resultObj.policyImpactFlag;
                        if (policyImpactFlag != null && policyImpactFlag != ''
                                && policyImpactFlag != undefined && policyImpactFlag == true) {
                            openAINavigation();
                            defaultAITypingBasedOnResponse(resultObj.message);
                            setTimeout(function () {
                                KDSAIlensDefaultYesNo('Do you want to continue to update?',
                                        'kdsContUpdateYes', 'kdsContUpdateNo', 'Yes, Update',
                                        'No, Thanks', 'aiDefaultYesImgClass', 'aiDefaultNoImgClass');
                            }, 9000);

                            $(document).one("click", "#kdsContUpdateYes", function () {
                                var selectedKDSDataArray = [];
                                globalData.policyImpactFlag = true;
                                selectedKDSDataArray.push(globalData);
                                var tableName = $("#tableName").val();
//                                tableName = tableName + ':AUDIT_ID'
                                showLoader();
                                $.ajax({
                                    type: "POST",
                                    url: url,
                                    data: {
                                        gridJsonData: JSON.stringify(selectedKDSDataArray),
                                        gridId: gridId,
                                        tableName: tableName,
                                    },
                                    traditional: true,
                                    cache: false,
                                    success: function (result) {
                                        response = result;
                                        stopLoader();
                                        KDSAIlensDefaultYesNo(response,
                                                'kdsUpdateYes', 'kdsUpdateNo', 'Okay',
                                                'No, Thanks', 'aiDefaultYesImgClass', 'aiDefaultNoImgClass');
                                    }
                                })

                            });
                            return;
                        }
                    }

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
                                    refreshGrid(gridId);
                                } else if (response != null && response != '' && response.lastIndexOf("Deleted Successfully.") > -1) {
                                    // alert();

                                    $("#" + gridId).jqxGrid('clearselection');
                                    // selectedIndexs.length = 0;
                                    refreshGrid(gridId);
                                    // return true;
                                } else if (response != null && response != '' && response.lastIndexOf("Updated Successfully.") > -1)
                                {
                                    // $("#operationName").val("UPDATE");
                                    //alert("gridId:::"+gridId);
                                    $("#" + gridId).jqxGrid('clearselection');
                                    // MM_MASTER_O_RECORD_BU_LEVEL
                                    //  selectedIndexs.length = 0;
                                    //  $('#' + gridId + '_Add').css("display", "block");
                                    refreshGrid(gridId);
                                    //getGridResults();
                                } else if (response != null && response != '' &&
                                        (response.indexOf("Updated Successfully") > -1 || response.indexOf("Deleted Successfully") > -1
                                                || response.indexOf("Inserted Successfully") > -1))
                                {
//                                  $("#" + gridId).jqxGrid('clearselection');
                                    refreshGrid(gridId);
                                } else
                                {
                                    refreshGrid(gridId);
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
                if (result != null && result != '' && result != undefined && result == "Y") {

                    $("#dialog").dialog("close");

                }


                // ravi start
                setTimeout(changeflagFuction, 300);
                // ravi end
            },
            error: function (e)
            {
                stopLoader();
                sessionTimeout(e);
            }

        });
    }
}

function getDeleteConfirmMessage(gridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var results = "Are you sure you want to Delete this Record?";
    results = labelObject[results] != null ? labelObject[results] : results;
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
                    processRequestforMassBulk(selectedrowindexes, "delete", gridId);

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

function gridDataOperation(gridId, operationName) {
    var selectedrowindexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
    var rowsLength = selectedrowindexes.length;
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    if (operationName == 'update') {
        var selectedRow = "";
        var oldRow = "";
        var recordCount = 0;
        var keys = $("#" + gridId).jqxGrid('getrowdata');
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
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
        refreshGrid(gridId);
        // write code for refresh data
    } else if (operationName == 'umupdate') {
        var row = $("#" + gridId).jqxGrid('getselectedrowindex');
        populategridForm(gridId, 'Y', row);
    } else {
        gridValidate(gridId, operationName, selectedrowindexes);

    }




    //    }

}

function gridValidate(gridId, operationName, selectedIndexes) {
    var resultObj = {};
    var validatioFlag = true;
    var errorMsg = "";
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    // var selectedrowindexes =  $("#"+gridId).jqxGrid('getselectedrowindexes');
    if (selectedIndexes != null && selectedIndexes.length != 0) {
        var totalRowIndex = selectedIndexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            if (selectedIndexes[i] != -1) {
                var rowData = $('#' + gridId).jqxGrid('getrowdata', selectedIndexes[i]);
                if (rowData != null && rowData.ROW_ID != null) {
                    if (rowData.ROW_ID == "") {
                        rowData[gridId + "_HIDDEN"] = "INSERT";
                    } else {
                        rowData[gridId + "_HIDDEN"] = "UPDATE";
                    }

                }
                try {

                    var role = rowData['ROLE_ID'];
                } catch (e) {
                }

                //                                var role = rowData['ROLE_ID'];

                if (role != null && role != '' && role.lastIndexOf("REQUESTOR") > -1 &&
                        ('REPORT_TO' in rowData && rowData['REPORT_TO'] == null || rowData['REPORT_TO'] == '')) {

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
                if (rowData != null && rowData != '') {
                    resultObj = genericGridValidatin(JSON.stringify(rowData), gridId);
                }

                //                                resultObj = genericGridValidatin(JSON.stringify(rowData), gridId);

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
            processRequestforMassBulk(selectedIndexes, operationName, gridId);

        } else {

            showButtonPopupMessage(errorMsg);

        }
    } else if (operationName == 'refresh') {
        refreshGrid(gridId);
    } else
    {
        var results = "Please Select Record";
        results = labelObject[results] != null ? labelObject[results] : results;
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
function insertRow(gridId, dataView, currentGrid) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    try {
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

    } catch (es) {

    }

    if (dataView == "GRID-VIEW")
    {

        $("#" + gridId).jqxGrid('addrow', null, row, 0);
        var sourceex = $("#" + gridId).jqxGrid('source');
        var defaultValuesArray = [];
        var defaultValues = $("#defaultValues").val();
        var finalvalue = [];
        var colvalue = [];
        var colnameArray = [];
        var colvalueArray = [];
        if (defaultValues != null) {
            defaultValuesArray = defaultValues.split(",");
            for (var i = 0; i < defaultValuesArray.length; i++) {
                finalvalue = defaultValuesArray[i];
                colvalue = finalvalue.split(":");
                colnameArray.push(colvalue[0]);
                colvalueArray.push(colvalue[1]);
            }
        }


        var defaultValuesObj = {};
        var itemObjDefaultValuesStr = $("#itemObjDefaultValues").val();
        var griddefaultValues = $("#" + gridId + "_defaultValues").val();
        if (griddefaultValues != null && griddefaultValues != '' && griddefaultValues.indexOf("{") > -1)
        {
            defaultValuesObj = JSON.parse(griddefaultValues);
        } else {
            var griddefaultValuesArray = defaultValues.split(",");
            if (griddefaultValuesArray != null && griddefaultValuesArray.length != 0) {
                for (var i = 0; i < griddefaultValuesArray.length; i++) {
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
        if (griddefaultValues != null && griddefaultValues != '' && griddefaultValues != undefined) {
            var gridDefaultInsertValues = griddefaultValues.split(",");
            if (gridDefaultInsertValues != null && gridDefaultInsertValues.length != 0) {
                for (var i = 0; i < gridDefaultInsertValues.length; i++) {
                    var gridDefaultInsertVal = gridDefaultInsertValues[i];
                    if (gridDefaultInsertVal != null && gridDefaultInsertVal != '') {
                        var gridDefaultAfterInsertVal = gridDefaultInsertVal.split(":");
                        defaultValuesObj[gridDefaultAfterInsertVal[0]] = gridDefaultAfterInsertVal[1];
                    }

                }
            }
        }

        var dataFeilds = [];
        dataFeilds = sourceex._source.datafields;

        var row = {};
        var editableFlag = true;
        $.each(dataFeilds, function (key, value) {
            var value = dataFeilds[key];
            var columnName = value.name;
            var coltype = value.type;
            var fieldName = columnName.replace("_DLOV", "");
            editableFlag = true;
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
//                    else if (selectedRowData[columnName] != null) {
//                        row[columnName] = selectedRowData[columnName];
                    //                    } 
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
                    } else if (columnName != null && columnName != '' && jQuery.inArray(columnName, colnameArray) > -1) {
                        for (var cv = 0; cv <= colnameArray.length; cv++) {
                            if (columnName == colnameArray[cv])
                                row[columnName] = colvalueArray[cv];
                        }

                    } else if (fieldName != null && fieldName != ''
                            && jQuery.inArray(fieldName, colnameArray) > -1) {

                        try {
                            for (var cv = 0; cv <= colnameArray.length; cv++) {
                                if (fieldName == colnameArray[cv])
                                    row[columnName] = colvalueArray[cv];
                            }
                        } catch (e) {

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
                            row[columnName] = $("user").val();
                        } else if (columnName != null && columnName != '' && jQuery.inArray(columnName, colnameArray) > -1) {
                            for (var cv = 0; cv <= colnameArray.length; cv++) {
                                if (columnName == colnameArray[cv])
                                    row[columnName] = colvalueArray[cv];
                            }

                        } else
                        {
                            row[columnName] = "";
                        }
                    } else if (coltype == 'bool') {
                        row[columnName] = false;
                    } else
                    {
                        row[columnName] = "";
                    }
                }
            }
            if (columnName != null && columnName != '' && columnName == gridId + "_HIDDEN") {
                row[columnName] = "INSERT";
            }

            if (defaultValuesObj != null
                    && !jQuery.isEmptyObject(defaultValuesObj)
                    && defaultValuesObj[columnName] != null && defaultValuesObj[columnName] != '') {
                row[columnName] = defaultValuesObj[columnName];
            }

            if (itemObjDefaultValuesStr != null && itemObjDefaultValuesStr != '') {
                var itemObjDefaultValues = JSON.parse(itemObjDefaultValuesStr);
                if (itemObjDefaultValues != null && !jQuery.isEmptyObject(itemObjDefaultValues)) {
                    if (itemObjDefaultValues[columnName] != null && itemObjDefaultValues[columnName] != '') {
                        row[columnName] = itemObjDefaultValues[columnName];

                    }
                }
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


        });

        console.log("row:::" + JSON.stringify(row));
        var data = $("#" + gridId).jqxGrid('getrowdata', 0);
        var initParamObj = $("#" + gridId).attr('data-gridinitparamobj');
        if (initParamObj != null && initParamObj != undefined && initParamObj != '') {
            var initDataObj = JSON.parse(initParamObj);
            var kdsNewForm = initDataObj['uuu_KDSNewCreateForm'];
            if (kdsNewForm != null && kdsNewForm != '' && kdsNewForm != undefined && kdsNewForm == 'Y') {
                var columnName = localStorage.getItem("kdsColumnName");
                showKDSNewOrgnCreation(gridId, "PRODUCT", columnName, "Y");
                return;
            }
        }
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
            $("#" + gridId).jqxGrid({showfilterrow: true});
            // $("#" + gridId).jqxGrid('clearfilters');
            var index = $("#" + gridId).jqxGrid('getrowboundindex', 0);
            $("#" + gridId).jqxGrid('selectrow', index);
            var tabHidden = currentGrid + "_HIDDEN";
            if (data[tabHidden] != null && data[tabHidden] != '' && data[tabHidden] != 'INSERT') {
                tabOperationFlag = true;
            }
        }
        if (tabOperationFlag) {
            var commit = $("#" + gridId).jqxGrid('addrow', null, row, 0);
        }

    }
}
function generateBarCodeRequest(gridId, dropVal, selectedDataArr)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    //alert("returnResaonFlag:::" + returnResaonFlag);
    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    alert(JSON.stringify(selectedrowindexes));
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (data != null) {
                var hiddenObjStr = $("#hiddenObj").val();
                if (hiddenObjStr != null) {
                    var hiddenObj = JSON.parse(hiddenObjStr);
                    for (var key in hiddenObj) {
                        var value = hiddenObj[key];
                        if (value != null && value != '' && value != 'null') {
                            if (key != null && key.lastIndexOf("HIDDEN") > -1) {
                                var columnsArray = value.split(",");
                                var hiddenIds = key.split("HIDDEN_");
                                var hiddenVal = data[hiddenIds[1]];
                                for (var j = 0; j < columnsArray.length; j++) {
                                    data[columnsArray[j]] = hiddenVal;
                                    //                                                    data[columnsArray[j]] = encodeURIComponent(hiddenVal);
                                }
                            }
                        } else {
                            //alert("Value is null");
                        }
                    }
                }

                selectedDataArray.push(data);
            }

        }// end for loop


        var itemsstring = JSON.stringify(selectedDataArray);
        $("#items").val(itemsstring);
        $("#submitForm").attr("target", "_blank");
        $("#submitForm").attr("action", "bulkBarCodeSubmit");
        $("#submitForm").submit();

    }
}


function processGenerateBarcode(gridId, dropVal)
{
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    var selectedRowsData = [];
    alert(selectedrowindexes);
    if (selectedrowindexes.length != 0) {
        var columnName = $("#barCodeColumnName").val();
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (selectedRowData != null && selectedRowData[columnName] == null || selectedRowData[columnName] == '') {
                var Message = "Please Enter Tag no for Record No:" + selectedRowData['RECORD_NO'];
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
                return;
            } else
            {
                selectedRowsData.push(selectedRowData);
            }
        }
        generateBarCodeRequest(gridId, dropVal, selectedRowsData)

    } else {
        $("#dialog1").html(labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process');
        //                            $("#dialog1").html(labelObject['Please select an option to Process'] != null ? labelObject['Please select an option to Process'] : 'Please select an option to Process');
        $("#dialog1").dialog({resizable: false,
            title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
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
}
function getCrossTabData(gridId) {
    $("#output").html('');
    console.log('gridId' + gridId);
    $.ajax({
        type: "post",
        traditional: true,
        url: "pivotGrid",
        cache: false,
        data: {
            'gridId': gridId
        },
        success: function (response) {
            if (response != null) {
                var data = response['data'];
                var rows = response['rows'];
                var columns = response['columns'];
                var rawData = data;
                var sum = $.pivotUtilities.aggregatorTemplates.sum;
                var numberFormat = $.pivotUtilities.numberFormat;
                var intFormat = numberFormat({digitsAfterDecimal: 0});
                var derivers = $.pivotUtilities.derivers;
                var responseString = response['resultString'];
                var rowsResultString = response['rowsResultString'];
                var columnsList = response['columnsList'];


                var renderers = $.extend(
                        $.pivotUtilities.renderers,
                        $.pivotUtilities.c3_renderers,
                        $.pivotUtilities.d3_renderers,
                        $.pivotUtilities.export_renderers
                        );

                $("#output").pivotUI(rawData,
                        {
                            renderers: renderers,
                            rows: rows,
                            cols: columns,
                            aggregator: sum(intFormat)(["QUOTED_AMOUNT"]),

                        });
                $(".pvtRows").append(rowsResultString);
                //                                $(".pvtUnused").append(responseString);

                PivotTableGridResults(gridId, columnsList);
                PivotRowsTableGridResults(gridId, columnsList);
                $("#pivotGridDialog").dialog({resizable: false,

                    title: labelObject['Pivot Table'] != null ? labelObject['Pivot Table'] : 'Pivot Table',
                    modal: true,
                    height: 550,
                    width: 1200,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
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
                        $(this).closest(".ui-dialog").addClass("visionPersonalizationSaveDialog");
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
}
function PivotTableGridResults(gridId, columnsList) {
    $("#pivotTableSearch").click(function () {
        $("#pivotTableSearch").html(columnsList);
        $("#pivotTableSearch").show();
        $("#clear_pvtRowsText").show();
        $("#pivotTableSearch").autocomplete({

            source: columnsList

        });

    });
}
function PivotRowsTableGridResults(gridId, columnsList) {
    $("#pivotTableSearchPvtRows").click(function () {
        $("#pivotTableSearchPvtRows").html(columnsList);
        $("#pivotTableSearchPvtRows").show();
        $("#clear_unUsedText").show();
        $("#pivotTableSearchPvtRows").autocomplete({

            source: columnsList

        });

    });
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

function getEnterKeyFilterSearch(event, selectedGridId, selectedGridIndex, selectedTabId) {
    if (event.which == 13) {
        showLoader();
        getFilterGridResults(selectedGridId, selectedGridIndex, selectedTabId);
        stopLoader();
    }
}

function importTemplate(gridId, type)
{
    //  var gridId = $('#gridId').val();
    var columnHide = $("#massColumnHide").val();
    if (columnHide != null && columnHide != 'undefined')
    {
        var columnArray = columnHide.split(",");
        for (var i = 0; i < columnArray.length; i++)
        {
            $("#" + gridId).jqxGrid('hidecolumn', columnArray[i]);
        }
//                             
        var exportJson = {};
        console.log("fields array:::" + fieldsArray);
        exportJson['headers'] = fieldsArray;
        console.log("jsondata:::::" + JSON.stringify(exportJson));
        $('#importDataHidden').val(JSON.stringify(exportJson));
        $("#importData").attr("action", "importXlsxData");
        $("#importData").submit();
        for (var i = 0; i < columnArray.length; i++)
        {
            $("#" + gridId).jqxGrid('showcolumn', columnArray[i]);
        }
    }

    // $("#" + gridId).jqxGrid('showcolumn', 'RECORD_NO');
    //  $("#" + gridId).jqxGrid('showcolumn', 'STG_NO');
    //  $(".visionMassDownload").hide();
    // $(".visionMassFileUpload").show();

}

function refreshGrid(gridId) {
    try {
        $('#' + gridId).jqxGrid('clearselection');
        $('#' + gridId).jqxGrid('clearfilters');
    } catch (e) {

    }
//                    $('#' + gridId).jqxGrid('updatebounddata', 'cells');

}

function updateGridPersonalize(id) {
    var columnname = $("#" + id).attr('data-col');
    var hiddenFlag = $("#" + id).is(":checked");
    var gridId = $('#gridId').val();
    if (id.toString().indexOf("display") > -1) {

        //var hiddenFlag = $("#"+$('#visionPPRGrid').val()).jqxGrid('setcolumnproperty', columnname, 'hidden');
        $("#" + gridId).jqxGrid('setcolumnproperty', columnname, 'hidden', !hiddenFlag);
    } else if (id.toString().indexOf("freeeze") > -1) {

        //  var hiddenFlag = $("#" + $('#visionPPRGrid').val()).jqxGrid('setcolumnproperty', columnname, 'pinned');
        $("#" + gridId).jqxGrid('setcolumnproperty', columnname, 'pinned', hiddenFlag);

    }

}
function calculateStockVal(gridId, type)
{
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedDataArray = [];
    var lasteditedfield = $('#' + gridId).attr('data-last-ed-field');
    var lasteditedrow = $('#' + gridId).attr('data-last-ed-row');
    $('#' + gridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');


    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var index = selectedrowindexes[i];
            console.log("index val:::" + selectedrowindexes[i]);
            var data = $('#' + gridId).jqxGrid('getrowdata', index);
            //var localdata = data;
            if (data != null) {
                // data['basicData'] = localdata;
                selectedDataArray.push(data);
            }

        }
        $.ajax({
            type: "post",
            url: "calculateStockGrid",
            cache: false,
            data: {'jsonData': JSON.stringify(selectedDataArray),
                'gridId': gridId,
                'tableName': $("#tableName").val()

            },
            traditional: true,
            dataType: 'html',
            success: function (response) {
                console.log(response);
                $("#dialog1").html(response);
                $("#dialog1").dialog({resizable: false,
                    title: 'Message',
                    modal: true,
                    height: 'auto',
                    minWidth: 350,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: ((labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok')),
                            click: function () {
                                $('#' + gridId).jqxGrid('updatebounddata');
                                $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                                $('#' + gridId).jqxGrid('clearselection');
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
//                                                var reOrderPoint = $("#" + gridId).jqxGrid('getcellvalue', index, "SYS_ROP");
//                                                var maxStockVal = $("#" + gridId).jqxGrid('getcellvalue', index, "SYS_MAX");
//                                                var mrpType = $("#" + gridId).jqxGrid('getcellvalue', index, "SYS_MRP");
//                                                console.log(reOrderPoint);
//                                                console.log(maxStockVal);
//                                                console.log(mrpType);
                                //updateMrpVal(JSON.stringify(selectedDataArray), reOrderPoint, maxStockVal, mrpType);
                                //  submitRequest(gridId, controlType, erpComment);


                            }}, {
                            text: ((labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel')),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                // $("#labeld").empty();

                            }

                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionGenericTabsDialog2");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
//                                    var jsonObj = JSON.parse(response);

                // console.log("index:::" + index);
//                                    $("#" + gridId).jqxGrid('setcellvalue', index, "SYS_ROP", jsonObj.SYS_ROP);
//                                    $("#" + gridId).jqxGrid('setcellvalue', index, "SYS_MAX", jsonObj.SYS_MAX);
//                                    $("#" + gridId).jqxGrid('setcellvalue', index, "SYS_MRP", jsonObj.SYS_MRP);
//                                    var reOrderPoint = $("#" + gridId).jqxGrid('getcellvalue', index, "SYS_ROP");
//                                    var maxStockVal = $("#" + gridId).jqxGrid('getcellvalue', index, "SYS_MAX");
//                                    var mrpType = $("#" + gridId).jqxGrid('getcellvalue', index, "SYS_MRP");
//                                    gridoperations(gridId, 'update');
                //   updateMrpVal(JSON.stringify(selectedDataArray), reOrderPoint, maxStockVal, mrpType);
            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
        //  console.log("data:::::"+JSON.stringify(selectedDataArray));

    } else {
        $("#dialog1").html((labelObject['Please select a record to Process'] != null ? labelObject['Please select a record to Process'] : 'Please select a record to Process'));
        $("#dialog1").dialog({resizable: false,
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
    }
}

function updateMrpVal(finalData, reOrderPoint, maxStockVal, mrpType)
{
    $.ajax({
        type: "POST",
        url: "updateMRPVal",
        data: {
            jsonData: finalData,
            reOrderPoint: reOrderPoint,
            maxStockVal: maxStockVal,
            mrpType: mrpType
        },
        traditional: true,
        cache: false,
        success: function (result) {
            //stopLoader();
            // console.log("result for id is:::::::::::: " + "#" + id);


        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
        }
    });
}


function processMrpPlanData(gridId, type)
{
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedDataArray = [];
    var lasteditedfield = $('#' + gridId).attr('data-last-ed-field');
    var lasteditedrow = $('#' + gridId).attr('data-last-ed-row');
    $('#' + gridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedrowindexes.length != 0) {
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var paginginformation = datainformations['paginginformation'];
            if (paginginformation != null) {
                var pagesize = paginginformation['pagesize'];
                if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                    totalRowIndex = parseInt(pagesize);
                }

            }
        }
        for (var i = 0; i < totalRowIndex; i++) {
            var index = selectedrowindexes[i];
            console.log("index val:::" + selectedrowindexes[i]);
            var data = $('#' + gridId).jqxGrid('getrowdata', index);
            //var localdata = data;
            if (data != null) {
                // data['basicData'] = localdata;
                selectedDataArray.push(data);
            }

        }
        $.ajax({
            type: "post",
            url: "processMRPPlanningData",
            cache: false,
            data: {'jsonData': JSON.stringify(selectedDataArray),
                'gridId': gridId,
                'tableName': $("#tableName").val()

            },
            traditional: true,
            dataType: 'html',
            success: function (response) {
                console.log(response);
                $("#dialog1").html(response);
                $("#dialog1").dialog({resizable: false,
                    title: 'Message',
                    modal: true,
                    height: 'auto',
                    minWidth: 350,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: ((labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok')),
                            click: function () {
                                $('#' + gridId).jqxGrid('updatebounddata');
                                $('#' + gridId).jqxGrid('updatebounddata', 'cells');
                                $('#' + gridId).jqxGrid('clearselection');
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");

                            }}, {
                            text: ((labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel')),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                // $("#labeld").empty();

                            }

                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                        $(this).closest(".ui-dialog").addClass("visionGenericTabsDialog2");
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
            },
            error: function (e) {
                sessionTimeout(e);
            }

        });

    } else {
        $("#dialog1").html((labelObject['Please select a record to Process'] != null ? labelObject['Please select a record to Process'] : 'Please select a record to Process'));
        $("#dialog1").dialog({resizable: false,
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
    }
}

function getValue(gridId)
{
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");

    var dropVal = $("#drop" + gridId).val();
    /* input field icons change */
    if (dropVal && dropVal != '')
    {

        $("#approvebutt" + gridId).attr("disabled", false);
//        $("#excelExport" + gridId).attr("disabled", false);
    } else {
        //                       
        $("#approvebutt" + gridId).attr("disabled", true);
//        $("#excelExport" + gridId).attr("disabled", true);
    }

    if (dropVal == "Approve")
    {
        if (fioriThemeCheck) {
            $(".button_Process").css('background', '#007bff url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
            $(".button_Process").css('border-radius', '0.5rem');
        } else {
            $(".button_Process").css('background', '#0071C5 url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
        }

    } else if (dropVal == "Enrich")
    {
        if (fioriThemeCheck) {
            $(".button_Process").css('background', '#007bff url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
            $(".button_Process").css('border-radius', '0.5rem');
        } else {
            $(".button_Process").css('background', '#0071C5 url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
        }
    } else if (dropVal == "Delete")
    {
        if (fioriThemeCheck) {
            $(".button_Process").css('background', '#007bff url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
            $(".button_Process").css('border-radius', '0.5rem');
        } else {
            $(".button_Process").css('background', '#0071C5 url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
        }
    } else if (dropVal == "Return_Requestor" || dropVal == "Return_Approver")
    {
        if (fioriThemeCheck) {
            $(".button_Process").css('background', '#007bff url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
            $(".button_Process").css('border-radius', '0.5rem');
        } else {
            $(".button_Process").css('background', '#0071C5 url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
        }
    } else if (dropVal == "Submit")
    {
        if (fioriThemeCheck) {
            $(".button_Process").css('background', '#007bff url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
            $(".button_Process").css('border-radius', '0.5rem');
        } else {
            $(".button_Process").css('background', '#0071C5 url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
        }
    } else
    {
        if (fioriThemeCheck) {
            $(".button_Process").css('background', '#007bff url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
            $(".button_Process").css('border-radius', '0.5rem');
        } else {
            $(".button_Process").css('background', '#0071C5 url("images/generate_description_icon2_white.png") no-repeat 5px center');
            $(".button_Process").css('color', '#ffffff !important');
        }

    }

}


function generatebarcodeDataPrint(gridId) {
    try {
        $("#" + gridId).jqxGrid('selectrow', 0);
        var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        if (selectedrowindexes.length > 0) {
            showLoader();
            var codetypesData = "QRCODE,CODE128,EAN13,PDF417,CODE128_RAW,UCC,INTER25,POSTNET,PLANET,CODE39,CODABAR,UPCA,UPCE,EAN8,BAR";
            var returnTypeData = "PRINT,PDF";
            var codesList = codetypesData.split(",")
            var returnList = returnTypeData.split(",")
            var codeTypeList = "<select id= 'codeTypeId' name='codeTypeId'>" +
                    "<option value=''>Select Code Type</option>";
            $.each(codesList, function (i) {
                codeTypeList += "<option value = '" + this + "'>" + this + "</option>";
            });

            codeTypeList += "</select>";
            var codeTypes = "<div>Select Code Type : " + codeTypeList + "</div>";

            var returnTypesList = "<select id= 'returnTypeId' name='returnTypeId'>" +
                    "<option value=''>Select Return Type</option>";
            $.each(returnList, function (i) {
                returnTypesList += "<option value = '" + this + "'>" + this + "</option>";
            });

            returnTypesList += "</select>";
            var returnTypes = "<div>Select Return Type: " + returnTypesList + "</div>";

            var fieldsData = $("#" + gridId).jqxGrid("columns");
            var gridColsList = "<select id= 'gridColsId' name='gridColsId'><option value=''>Select Required Columns</option>";
            var topColsList = "<select id= 'topColsId' name='topColsId'><option value=''>Select Top Column</option>";
            var bottomColsList = "<select id= 'botColsId' name='botColsId'><option value=''>Select Bottom Column</option>";

            if (fieldsData != null && fieldsData != '') {
                for (var i = 0; i < fieldsData.records.length; i++) {
                    var hiddenVal = fieldsData.records[i].hidden;
                    if (fieldsData.records[i].text != null && fieldsData.records[i].text != '' &&
                            fieldsData.records[i].datafield != null && fieldsData.records[i].datafield != '' &&
                            !(fieldsData.records[i].datafield.startsWith("HIDDEN_")
                                    || fieldsData.records[i].datafield.endsWith("_HIDDEN"))
                            && fieldsData.records[i].datafield != '_checkboxcolumn') {
                        if (!(hiddenVal)) {
                            gridColsList += "<option value = '" + fieldsData.records[i].datafield + "'>" + fieldsData.records[i].text + "</option>";
                            topColsList += "<option value = '" + fieldsData.records[i].datafield + "'>" + fieldsData.records[i].text + "</option>";
                            bottomColsList += "<option value = '" + fieldsData.records[i].datafield + "'>" + fieldsData.records[i].text + "</option>";
                        }
                    }
                }
            }
            gridColsList += "</select>";
            topColsList += "</select>";
            bottomColsList += "</select>";
            var gridCols = "<div>Select Required Columns: " + gridColsList + "</div>";
            var topCols = "<div>Select Top Column: " + topColsList + "</div>";
            var bottomCols = "<div>Select Bottom Column: " + bottomColsList + "</div>";


            var formfields = "<div class='generateBarcodeRow'>" +
                    "<div  class='generateBarcodelistLevelCLS'>" +
                    "<label for=''>Code Type:<sup style='color: red;'>*</sup></label>" + codeTypeList +
                    "</div>" +
                    "<div  class='generateBarcodelistLevelCLS'>" +
                    "<label for=''>Return Type:<sup style='color: red;'>*</sup></label>" + returnTypesList +
                    "</div>" +
                    "<div  class='generateBarcodelistLevelCLS'>" +
                    "<label for=''>Required Column(s):<sup style='color: red;'>*</sup></label>" + gridColsList +
                    "</div>" +
                    "</div>" +
                    "<div class='generateBarcodeRow'>" +
                    "<div  class='generateBarcodetextLevelCLS'>" +
                    "<label for=''>Codes Per Page: <sup style='color: red;'>*</sup></label>" +
                    "<input class='inputPayment' type='text' name='Codes_Per_Page' id='CodesPerPageId'  value='1'>" +
                    "</div>" +
                    "<div  class='generateBarcodetextLevelCLS'>" +
                    "<label for=''>Code Hieght/Width: <sup style='color: red;'>*</sup></label>" +
                    "<input class='inputPayment' type='text' name='Code Hieght/Width' id='CodeHieghtWidth' value='50'>" +
                    "</div>" +
                    "<div  class='generateBarcodetextLevelCLS'>" +
                    "<label for=''>Code Length/Size: <sup style='color: red;'>*</sup></label>" +
                    "<input class='inputPayment' type='text' name='Code Length/Size' id='CodeLengthSize' value='50'>" +
                    "</div>" +
                    "</div>" +
                    "<div class='generateBarcodeRow'>" +
                    "<div  class='generateBarcodelistLevelCLS'>" +
                    "<label for=''>Upper Label:  </label>" + topColsList +
                    "</div>" +
                    "<div  class='generateBarcodelistLevelCLS'>" +
                    "<label for=''>Bottom Label:  </label>" + bottomColsList +
                    "</div>" +
                    "<div  class='generateBarcodetextLevelCLS'>" +
                    "<label for=''>Check Sum:  </label>" +
                    "<input class='inputPayment' type='text' name='Check_Sum' id='pdfCheckSum' value='Y' readonly>" +
                    "</div>" +
                    "</div>" +
                    "<div class='generateBarcodeRow'>" +
                    "<div  class='generateBarcodetextLevelCLS'>" +
                    "<label for=''>Page Width:  </label>" +
                    "<input class='inputPayment' type='text' name='Page_Width' id='pdfPageWidth' value='300'>" +
                    "</div>" +
                    "<div  class='generateBarcodetextLevelCLS'>" +
                    "<label for=''>Page Height:  </label>" +
                    "<input class='inputPayment' type='text' name='Page_Height' id='pdfPageHeight' value='300'>" +
                    "</div>" +
                    "<div  class='generateBarcodetextLevelCLS'>" +
                    "<label for=''>Title(Company):  </label>" +
                    "<input class='inputPayment' type='text' name='Page_Title' id='pdfPageCompTitle' value='PiLog'>" +
                    "</div>" +
                    "</div>" +
                    "<div class='generateBarcodeRow'>" +
                    "<div style='padding-bottom: 10px; flex: 1 1 100%;' class='generateBarcodetextLevelCLS'>" +
                    "<label for=''>Error Message:  </label>" +
                    "<textarea readonly id='barCodegenrationErrorMessge' name='barCodegenrationErrorMessge' rows='2' cols='50'></textarea>" +
                    "</div>" +
                    "</div>";



            var strValue = '<div class="barCodegenrationClass" id="barCodegenrationFormId">' +
                    '<div class = "barCodegenrationSelectionform" id="barCodegenrationSelectionformID">' +
                    formfields +
                    '</div>' +
                    '</div>';
            stopLoader();
            $("#dialog").html(strValue);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['BarCode Generation Form'] != null ? labelObject['BarCode Generation Form'] : 'BarCode Generation Form'),
                modal: true,
                width: 800,
                height: 450,
                fluid: true,
                buttons: [{
                        text: (labelObject['Process'] != null ? labelObject['Process'] : 'Process'),
                        click: function () {
                            var codeType = $("#codeTypeId").val();
                            var pageWidth = $("#pdfPageWidth").val();
                            var pageHieght = $("#pdfPageHeight").val();
                            var returnTypeFlag = $("#returnTypeId").val();
                            var topColumn = $("#topColsId").val();
                            var bottomColumn = $("#botColsId").val();
                            var codesPerPage = $("#CodesPerPageId").val();
                            var codewidth = $("#CodeHieghtWidth").val();
                            var codeLength = $("#CodeLengthSize").val();
                            var pdfCheckSum = $("#pdfCheckSum").val();
                            var pdfPageCompTitle = $("#pdfPageCompTitle").val();
                            const selectedgridCols = document.getElementById('gridColsId');
                            var reqColumns = "";
                            let int = 1;
                            for (const option of selectedgridCols.options) {
                                if (option.selected) {
                                    if (int == 1)
                                    {
                                        reqColumns = option.value + ':' + option.text;
                                    } else {
                                        reqColumns += ';' + option.value + ':' + option.text;
                                    }
                                    int++;
                                }
                            }

                            var errorMessage = "";
                            if (returnTypeFlag == null || returnTypeFlag == '' || returnTypeFlag == undefined) {
                                errorMessage = "Please select Return Type"
                            }
                            if (codeType != null && codeType != '' && codeType != undefined)
                            {
                            } else {
                                errorMessage = "Please select required Code Type"
                            }
                            if (reqColumns != null && reqColumns != '' && reqColumns != undefined)
                            {
                            } else {
                                errorMessage += " Please select required Columns for Code Generation"
                            }

                            if (errorMessage != '')
                            {
//                                errorMessage += "<span style='color: red;'>"+errorMessage+""
                                $("#barCodegenrationErrorMessge")
                                        .val(errorMessage)
                                        .css("color", "red");

                            } else {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                getbarcodegeneratedData(gridId, codeType, reqColumns, pageWidth, pageHieght,
                                        returnTypeFlag, topColumn, bottomColumn, pdfCheckSum, codesPerPage, codewidth, codeLength, pdfPageCompTitle);
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
        } else {
            var message = "Please Select any Record(s) to Process";
            showErrorPopupMessage2(message);
        }
        stopLoader();
    } catch (c) {
        stopLoader();
    }
}


function getbarcodegeneratedData(gridId, codeType, reqColumns, pageWidth, pageHieght, returnType, topColumn,
        bottomColumn, checkSumtext, codesPerPage, codewidth, codeLength, pdfPageCompTitle) {
    var message = "";
    showLoader();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }


    var selectedRowsData = [];
    var itemsstring = $('#itemsstring').val();
    var itemObj = JSON.parse(itemsstring);
    if (itemObj || Object.keys(itemObj).length !== 0) {
        selectedRowsData.push(itemObj);
    }

    var resultObj = {};
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
        if (!selectedRowsData || selectedRowsData.length === 0) {
            for (var i = count; i < totalRowIndex; i++) {
                var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                if (data != null)
                {
                    selectedRowsData.push(data);
                }

            }
        }
        if (selectedRowsData != null && selectedRowsData != "")
        {
            $.ajax({
                type: "post",
                url: "generateBarCodeData",
                cache: false,
                data: {'selectedRowData': JSON.stringify(selectedRowsData),
                    'codeType': codeType,
                    'pageWidth': pageWidth,
                    'pageHieght': pageHieght,
                    'returnType': 'base64',
                    'reqColumns': reqColumns,
                    'topColumn': topColumn,
                    'bottomColumn': bottomColumn,
                    'checkSumtext': checkSumtext,
                    'codesPerPage': codesPerPage,
                    'codewidth': codewidth,
                    'codeLength': codeLength,
                    'pdfPageCompTitle': pdfPageCompTitle   //01-08-2025
                },
                traditional: true,
                dataType: 'html',
                success: function (result) {
                    if (result != null && result != '' && result != undefined && returnType == 'PRINT')
                    {
//                                    const printBase64Pdf = () => {
                        printJS({
                            printable: result,
                            type: 'pdf',
                            base64: true,
                        });
//                                    };
                    } else if (result != null && result != '' && result != undefined && returnType == 'PDF')
                    {
//                                    var uri = 'data:application/pdf;base64,' + atob(result);
                        var uri = 'data:application/pdf;base64,' + result;
                        var link = document.createElement("a");
                        link.href = uri;
                        link.style = "visibility:hidden";
                        link.download = "generatedCode.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                    stopLoader();
//                    console.log("success:::::" + response);
                }
            });
            stopLoader();
        }
    } else {

    }
//    return message;
}


function insertMultipleRows(gridId, dataView, currentGrid) {
    try {
        multipleRowsInsert = false;
        var data = $("#" + gridId).jqxGrid('getrowdata', 0);
        var tabHidden = gridId + "_HIDDEN";
        var tabOperationFlag = true;
        if (data == null || (data != null && !jQuery.isEmptyObject(data) && data[tabHidden] != null
                && data[tabHidden] != '' && data[tabHidden] != 'INSERT')) {
            tabOperationFlag = true;
            try {
                if (data != null && !jQuery.isEmptyObject(data)) {
                    for (var key in data) {
                        let textinputdivId = tabId + key + 'griddrpdownAndEditValueId' + 0;
                        try {
                            var itext = document.getElementById(textinputdivId).value;
                        } catch (ei) {
                            var itext = '';
                        }

                        if (itext != null && itext != undefined && itext != '' && itext != 'undefined') {
                            data[key] = itext;
                        }
                    }
                }
            } catch (ey) {

            }
        } else {
            tabOperationFlag = false;
        }


        if (tabOperationFlag) {
            var formfields = "<div>" +
                    "<div style='padding-bottom: 10px;'>" +
                    "<span<label for=''>Empty Rows(Max 10): <sup style='color: red;'>*</sup></label></span>" +
                    "<input class='inputPayment' type='text' name='Empty Rows' id='insertEmptyRowsId' value = ''>" +
                    "</div>" +
//                "<div>" +
//                "<span<label for=''>Error Message: </sup></label></span>" +
////                "<input class='inputPayment' type='text' name='Error Message' id='errorMessageEmptyRowsId'>" +
//                "<textarea readonly id='errorMessageEmptyRowsId' name='Error Message' rows='1' cols='40'></textarea>" +
//                "</div>" +
                    "<div class='col-12' id='errorMessageEmptyRowsId' style='display:none'></div>"
            "</div>";

            $("#dialog").html("");
            $("#dialog").html(formfields);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Insert Empty Rows'] != null ? labelObject['Insert Empty Rows'] : 'Insert Empty Rows'),
                modal: true,
                width: 300,
                height: 200,
                fluid: true,
                buttons: [{
                        text: (labelObject['Insert'] != null ? labelObject['Insert'] : 'Insert'),
                        click: function () {
                            var rowsCount = $("#insertEmptyRowsId").val();
                            var rows = parseInt(rowsCount);
                            var errorMessage = "";
                            if (rowsCount != null && rowsCount != '' && rowsCount != undefined && rows > 10)
                            {
                                errorMessage = "Please provide empty rows count less than or equal to 10."
                            } else if (rowsCount != null && rowsCount != '' && rowsCount != undefined && rows <= 10 & rows > 0)
                            {
                                $("#errorMessageEmptyRowsId").hide();
                                $("#errorMessageEmptyRowsId").text("");
                            } else if (rowsCount != null && rowsCount != '' && rowsCount != undefined && rows == 0)
                            {
                                errorMessage = "Please provide empty rows count greater than 0."
                            } else {
                                errorMessage = "Please provide empty rows count to be inserted."
                            }

                            if (errorMessage != '')
                            {
//                            $("#errorMessageEmptyRowsId").val(errorMessage);
                                $("#errorMessageEmptyRowsId").show();
                                $("#errorMessageEmptyRowsId").text(errorMessage);
                                $("#errorMessageEmptyRowsId").css("color", "red");

                            } else {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                showLoader();
                                for (var i = 0; i < rows; i++) {

                                    try {
                                        generateinsertRow(gridId, dataView, currentGrid, i);
                                    } catch (e) {

                                    }

                                }
                                multipleRowsInsert = true;
                                stopLoader();

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
        } else {
            stopLoader();
            showErrorPopupMessage(dialogSplitIconText('Please update the previously added record before adding a new entry(s).', "H"), 'Message', '430');
        }
    } catch (c) {
        stopLoader();
    }
}

function generateinsertRow(gridId, dataView, currentGridId, rowId) {
    try {

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

            $("#" + gridId).jqxGrid('addrow', null, row, rowId);
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
                            if (coltype == 'boolean') {
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
            var data = $("#" + gridId).jqxGrid('getrowdata', rowId);
            var tabOperationFlag = false;
            if (data == null)
            {
                $("#" + gridId).jqxGrid({showfilterrow: false});
                //  $("#" + gridId).jqxGrid('clearfilters');
                var index = $("#" + gridId).jqxGrid('getrowboundindex', 1);
                index = index + 1;
//                $("#" + gridId).jqxGrid('selectrow', index);
                tabOperationFlag = true;
            } else {
                $("#" + gridId).jqxGrid({showfilterrow: false});
                // $("#" + gridId).jqxGrid('clearfilters');
                var index = $("#" + gridId).jqxGrid('getrowboundindex', 0);
//                $("#" + gridId).jqxGrid('selectrow', index);
                var tabHidden = currentGridId + "_HIDDEN";
                if (data[tabHidden] != null && data[tabHidden] != '' && data[tabHidden] != 'INSERT') {
                    tabOperationFlag = true;
                }
            }
            if (tabOperationFlag) {
                var commit = $("#" + gridId).jqxGrid('addrow', null, row, rowId);
//            $("#" + gridId).jqxGrid('selectrow', 0);
            }
        }

    } catch (e) {

    }

}
function showDataDH(gridId)
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
    if (selectedrowindexes != null && selectedrowindexes.length > 0)
    {
        var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);

    } else
    {
        var data = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[index]);

    }
    dataString = JSON.stringify(data);
    console.log("dataString" + JSON.stringify(data));
//    selectedRowsData.push(data);

    var batchInd = $('#batchIndicator').val();
    var columnDataStr = "";
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
                    $("#dialog").html((labelObject[response] != null ? labelObject[response] : response));
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        width: 300,
                        height: 135,
                        fluid: true,
                        buttons: [{
                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                click: function () {
                                    $("#dialog").dialog('close');
                                    var batchId = $("#batchId").val();

                                    if (batchId != null && batchId != '' && batchId != 'undefined')
                                    {
                                        $("#wait").css("opacity", "0.99");
                                        $("#wait").css("display", "block");
                                        $("body").css("pointer-events", "none");
                                        var columnData = [];

                                        var cols = $("#" + gridId).jqxGrid("columns");
                                        var columns = ["Staging No", "Plant", "Client short Description", "Client Long Description", "Material Type", "Material Group", "Action Indicator"];

                                        for (var i = 0; i < cols.records.length; i++) {
                                            var columnName = cols.records[i].text;
                                            if (columnName != "" && columnName != undefined && columnName != null && columns.includes(columnName)) {
                                                columnData.push(cols.records[i].datafield);
                                            }
                                        }

                                        columnDataStr = columnData.join(",");
                                        showLoader();

                                        $.ajax({
                                            type: "post",
                                            url: "getDHAResponse",
                                            cache: false,
                                            data: {
                                                'tableName': tableName,
                                                'colsArrayStr': columnDataStr,
                                                batchId: batchId
                                            },
                                            traditional: true,

                                            success: function (response) {
                                                stopLoader();
                                                $("#wait").css("display", "none");
                                                $("body").css("pointer-events", "auto");
                                                var blob = new Blob([response], {type: 'application/pdf'});
                                                var blobUrl = URL.createObjectURL(blob);

                                                // Example: Display PDF in a new tab
                                                window.open(blobUrl);
//                                                                   
                                            }
                                        });
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

                }
            });
        }
    }
}

function getProfingData(gridId) {
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
                $("#dialog").html((labelObject[response] != null ? labelObject[response] : response));
                $("#dialog").dialog({resizable: false,
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

                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");

                                    showDataProfile(gridId, batchId);
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
function showDataProfile(gridId, batchId) {
    var columnData = [];

    var cols = $("#" + gridId).jqxGrid("columns");
    var columns = ["Staging No", "Plant", "Client short Description", "Client Long Description", "Material Type", "Material Group", "Action Indicator"];

    for (var i = 0; i < cols.records.length; i++) {

        var columnsNames = cols.records[i].text;
        if (columnsNames != "" && columnsNames != undefined && columnsNames != null && columns.includes(columnsNames)) {
            columnData.push(cols.records[i].datafield);
        }
    }
    if (columnData != null && columnData != '' && columnData != undefined)
    {
        columnData = JSON.stringify(columnData);
    }
    $("#batchID").val(batchId);
    $("#columnArray").val(columnData);
    $("#dataProfilingForm").attr("action", "getDataProfilingResponse");
    $("#dataProfilingForm").submit();

}
function classAllocation(gridId, tableName) {
    showLoader();

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
                            $("#logoutDailog").dialog('close');
                            var batchId = $("#batchId").val();

                            if (batchId != null && batchId != '' && batchId != 'undefined')
                            {
                                showLoader();
                                $.ajax({
                                    type: "post",
                                    url: "classAllocationAPI",
                                    cache: false,
                                    data: {
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
        }
    });
}


//idqm
function fetchBatchWiseAPI(gridId, title, url, type, clusterId, initParams, apiId, labelFlag, batchColumn) {
    var $logoutDialog = $("#logoutDailog");
    let iconTitle = event.currentTarget.getAttribute("title");
    if (iconTitle != null && iconTitle != "" && iconTitle != undefined) {
        title = iconTitle;
    }
    showLoader();
    let dialogHeight = 310;
    $.ajax({
        type: "POST",
        url: 'getBatchIdsWithGridParams',
        dataType: 'json',
        data: {
            gridId: gridId,
            batchColumn: batchColumn
        },
        traditional: true,
        async: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var descOptionStr = "";
            var checkBoxList = response['checkBoxData'];
            let shortColumn = "";
            let longColumn = "";
            let longAndShortColumn = "";
            if (type === "Char" || type === "Class") {
                var paramObject = [];
                if (initParams !== "" && initParams !== null && initParams !== undefined) {
                    paramObject = JSON.parse(initParams);
                    for (var key in paramObject) {
                        if (paramObject.hasOwnProperty(key) && paramObject[key].apiParamName === "shortColumn") {
                            shortColumn = paramObject[key].apiParamValue;
                        } else if (paramObject.hasOwnProperty(key) && paramObject[key].apiParamName === "longColumn") {
                            longColumn = paramObject[key].apiParamValue;
                        }
                        if (shortColumn !== null && shortColumn !== undefined && shortColumn !== "" && longColumn !== null && longColumn !== undefined && longColumn !== "") {
                            longAndShortColumn = shortColumn + "," + longColumn;
                        }

                    }
                }
                if (longAndShortColumn !== null && longAndShortColumn !== "" && longAndShortColumn !== undefined) {
                    descOptionStr = "<div class='idqmDecOptionWrapper'>"
                            + "<div>"
                            + "<input type='radio' name='descType' data-value='Short Desc' value='" + shortColumn + "'/> Short Desc&nbsp;"
                            + "</div>"
                            + "<div>"
                            + "<input type='radio' name='descType' data-value='Long Desc' value='" + longColumn + "'/> Long Desc&nbsp;"
                            + "</div>"
                            + "<div>"
                            + "<input type='radio' name='descType' data-value='fill' value='" + longAndShortColumn + "'/> Short Desc & Long Desc"
                            + "</div>"
                            + "<div>"
                            + "<input type='radio' name='descType' data-value='concatenate' value='" + longAndShortColumn + "'/> Long merge with short"
                            + "</div>"
                            + "</div>"
                            + "<div id = 'errorDescOptionId' style='color:red;'></div>";
                    dialogHeight = 440;
                }
            }
            var bodyHtml = "<div id = 'selectBatchIdsWithGridParams'></div><div id = 'errorBatchId' style='color:red;'></div>"
                    + descOptionStr;


            $("#logoutDailog").html(bodyHtml);
            $("#selectBatchIdsWithGridParams").jqxListBox({
                filterable: true,
                checkboxes: true,
                source: checkBoxList,
                theme: 'energyblue',
                displayMember: 'text',
                valueMember: 'value',
                width: '100%'
            });
            $logoutDialog.dialog({
                title: (labelObject[title] != null ? labelObject[title] : title),
                modal: true,
                width: 350,
                height: dialogHeight,
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            getAiLensAPIResponse(gridId, url, title, initParams, clusterId, type, '', apiId, labelFlag);
                            var batchId = $("#selectBatchIdsWithGridParams").val();
                            var descVal = $(".idqmDecOptionWrapper input[type='radio']:checked").val();
                            if (type !== "Class" && type !== "Char") {
                                descVal = "test";
                            }
                            if (batchId && descVal) {
                                $(this).html("");
                                $(this).dialog("close");
                            }

                        }
                    }],
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
                    $("#filterselectBatchIdsWithGridParams input").on("keyup", function (e) {
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
                                searchString: searchString,
                                batchColumn: batchColumn
                            },
                            success: function (response) {
                                stopLoader();
                                const batchIdsArray = response['checkBoxData'] || [];
                                const listBox = $("#selectBatchIdsWithGridParams");
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
                close: function () {
                    $(this).html("");
                    $(this).dialog("close");
                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
                }
            });
        }
    });
}
async function getAiLensAPIResponse(gridId, url, title, paramArraystr, clusterId, type, agentName, apiId, labelFlag) {
    return new Promise(async (resolve) => {
        const AiMessage = async (message) => {
            const AiData = `<div class='aiLensRobotDataClass' id='${"AI" + title}'><label><span><b>${agentName}</b></span><span>${message}</span></label></div>`;
            await defaultAgentAiTypingBasedOnResponse(AiData, '', "", "");
        };
        if (agentName !== null && agentName !== "" && agentName !== undefined) {

            await AiMessage("has initiated Data " + title + " process.");
        }
        var batchArray = ['BATCH_ID', 'batch_id'];
        var batchId = $("#selectBatchIdsWithGridParams").val();
        if (batchId === null || batchId === "" || batchId === undefined) {
            batchId = $("#batchID").val();
        }

        if (batchId != null && batchId != "" && batchId != undefined && batchId != "null") {
            $("#errorBatchId").text("");
            $("#errorDescOptionId").text("");
            var desOptionVal = "";
            var desConditionVal = "";
            if ($(".idqmDecOptionWrapper").length > 0) {
                desOptionVal = $(".idqmDecOptionWrapper input[type='radio']:checked").val();
                desConditionVal = $(".idqmDecOptionWrapper input[type='radio']:checked").data("value")
                if (!desOptionVal) {
                    $("#errorDescOptionId").text("Please select a one option.");
                    return;
                }

            }
            if (paramArraystr !== "" && paramArraystr !== null && paramArraystr !== undefined) {
                try {
                    var paramObject = JSON.parse(paramArraystr);

                    for (var key in paramObject) {
                        if (paramObject.hasOwnProperty(key)) {
                            if (batchArray.includes(paramObject[key].apiParamName)) {
                                paramObject[key].apiParamValue = batchId;
                            } else if ("condition".includes(paramObject[key].apiParamName) && desConditionVal) {
                                paramObject[key].apiParamValue = desConditionVal;
                            } else if (["colsArray", "colsarry"].includes(paramObject[key].apiParamName) && desOptionVal) {
                                let colsArrayStr = paramObject[key].apiParamValue;
                                let colsArr = colsArrayStr.split(",");
                                colsArrayStr = colsArrayStr.replace(colsArr[2], desOptionVal);
                                paramObject[key].apiParamValue = colsArrayStr;
                            }
                        }
                    }
                } catch (e) {
                }
            }
            if (title == "Enrichment") {
                showProcessNotificationMessage("Enrichment process has been initiated, and the system will notify you once it is completed.");
                $.ajax({
                    type: "post",
                    url: 'getPhythonEnrichmentApiResponse',
                    cache: false,
                    data: {
                        'flag': apiId,
                        'label': labelFlag,
                        'gridId': gridId,
                        'batchId': batchId,
                        'paramArray': paramObject != null ? JSON.stringify(paramObject) : ""
                    },
                    traditional: true,
                    dataType: 'json',
                    async: true,
                    success: function (response) {
                        stopLoader();
                        if (response != null && response != undefined && response != "") {
                            var responseId = response['responseId'];
                            var menuId = response['menuId'];
                            var roleId = response['roleId'];
                            insertProcessNotification(responseId, title, batchId, gridId, clusterId, menuId, roleId, paramArraystr, type);
                            notificationIntervals[responseId] = setInterval(function () {
                                // this will run after every 5 seconds
                                refreshProcessNotificationStatus(responseId, title, batchId, gridId, clusterId, menuId, roleId, paramArraystr, type);
                            }, 1000);
                        }
                    }
                });
            } else {
                showLoader();
                $.ajax({
                    type: "post",
                    url: url,
                    cache: false,
                    data: {
                        'flag': apiId,
                        'label': labelFlag,
                        'gridId': gridId,
                        'batchId': batchId,
                        'paramArray': paramObject != null ? JSON.stringify(paramObject) : ""

                    },
                    traditional: true,
                    dataType: 'html',
                    async: true,
                    success: function (response) {
                        stopLoader();
                        if (response != null && response != undefined && response != "") {
                            openAINavigation();
                            if (response.includes("<div")) {
                                $("#logoutDailog").html((labelObject[response] != null ? labelObject[response] : response));
                                $("#logoutDailog").dialog({
                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                    modal: true,
                                    width: 400,
                                    height: 250,
                                    fluid: true,
                                    buttons: [{
                                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                            click: function () {
//                                                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                                $(this).html("");
                                                $(this).dialog("close");
                                                $(this).dialog("destroy");
                                                try {
                                                    checkCharacteristicsUpdate(title, batchId);
                                                    showDHTableGridData("", gridId, batchId);
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

                            } else {
                                if (title == "Enrichment") {
                                    checkCharacteristicsUpdate(title, batchId);
                                }

                                if (labelFlag != null && labelFlag !== "" && labelFlag != undefined && labelFlag.includes("DIALOG")) {
                                    showErrorPopupMessage(response, title, "600", "500");
                                } else {
                                    AiLensViewAPIResponse("" + title + " :", response, batchId, tableName, gridId, clusterId);
                                }
                                resolve(true);
                                if ((agentName === null || agentName === "" || agentName === undefined) && (apiId === null || apiId === "" || apiId === undefined)) {
                                    stategicsChartsDHData(batchId, type);
                                    AiIDQMNextSkip();
                                }
                            }

                        }

                    }
                });
            }
        } else {
            $("#errorBatchId").text("Please select a Batch ID.");
        }
    });
}


function CharacteristicsUpdate(gridId, tableName, title)
{

    var batchData = getBatchList(gridId, tableName)
    $("#logoutDailog").html((labelObject[batchData] != null ? labelObject[batchData] : batchData));
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
                        showLoader();
                        checkCharacteristicsUpdate(batchId, gridId, title);
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


}

async function checkCharacteristicsUpdate(title, batchId, initparams) {
    return new Promise((resolve, reject) => {
        showLoader();
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: 'confirmCharacteristicsUpdate',
            cache: false,
            data: {
                batchId: batchId,
                flag: title,
                paramArry: initparams
            },
            success: function (response) {
                stopLoader();
                if (response !== null && !jQuery.isEmptyObject(response)) {
                    resolve(response);
                } else {
                    reject("Empty response received");
                }
            },
            error: function (e) {
                console.error(e);
                stopLoader();
                reject(e);
            }
        });
    });
}

function getDataReportAndDHA(gridId, url, title, initParams) {
    closeAllDialogsBoxes();
    if ($("#selectBatchIdsList").length > 0) {
        $("#selectBatchIdsList").jqxListBox('destroy');
    }
    if (gridId != null && gridId != '' && gridId != undefined) {
        showLoader();
        $.ajax({
            type: "POST",
            url: 'getBatchIdsWithGridParams',
            dataType: 'json',
            data: {
                gridId: gridId,
            },
            traditional: true,
            async: true,
            cache: false,
            success: function (response) {
                stopLoader();
                var checkBoxList = response['checkBoxData'];
                var body = "<div id = 'selectBatchIdsList'></div><div id = 'errorBatchId' style='color:red;'></div>";
                $("#dialog").html(body);
                $("#selectBatchIdsList").jqxListBox({
                    filterable: true,
                    checkboxes: true,
                    source: checkBoxList,
                    theme: 'energyblue',
                    displayMember: 'text',
                    valueMember: 'value',
                    width: '100%'
                });
                $("#dialog").dialog({
                    title: (labelObject[title] != null ? labelObject[title] : title),
                    modal: true,
                    width: 300,
                    height: 310,
                    fluid: true,
                    buttons: [{
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                var batchId = $("#selectBatchIdsList").val();
                                if (batchId != null && batchId != '' && batchId != 'undefined')
                                {

                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");

                                    showDHData(gridId, url, batchId, initParams);

                                } else
                                {
                                    $("#errorBatchId").text("Please select batch Id");
                                }

                            }
                        }],
                    open: function ()
                    {
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
                                    $("#selectBatchIdsList").jqxListBox('clear');
                                    var batchIdsArray = response['checkBoxData'] != null ? response['checkBoxData'] : [];
                                    // Populate jqxListBox with new items
                                    for (var i = 0; i < batchIdsArray.length; i++) {
                                        $("#selectBatchIdsList").jqxListBox('addItem', batchIdsArray[i]);
                                    }
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
            }
        });
    }
}
function showDHData(gridId, url, batchId, initParams) {
    showLoader();
    if (gridId != null && gridId !== '' && gridId !== undefined) {
        let columns;
        let onclickEvent;
        var dataList = initParams.split(":");
        $.ajax({
            type: "post",
            url: url,
            cache: false,
            data: {
                'gridId': gridId,
                'columnArray': dataList[0],
                tableName: dataList[1],
                batchId: batchId,
            },
            success: function (response) {
                stopLoader();
                if (!url.includes("Profiling")) {
//                    var response = JSON.parse(response);
                    const encodebase64String = response['base64PdfContent'] !== null ? response['base64PdfContent'] : "";
                    onclickEvent = "getDownloadiFrameHtml('" + encodebase64String + "')";

                } else {
                    onclickEvent = "downloadiFrameHtml('dataProfileFormframe')";
                }
                const iconDiv = `<div class="rightFilterDivoperations" id="download-pdf">
                                    <ul>
                                        <li onclick="${onclickEvent}">
                                            <span class='filterIconRight'><img src="images/Download-Iocn.svg" width="25px" /></span>
                                            <span class='flitertextRight'>Download</span>
                                        </li>
                                        <li id='closeHtmlDiv'>
                                            <span class='filterIconRight'><img src="images/closeIcon_blue.png" width="25px" /></span>
                                            <span class='flitertextRight'>Close</span>
                                        </li>
                                    </ul>
                                </div>`;
                $("#importDataView").html(iconDiv + '<iframe id="dataProfileFormframe" style="width:100%;height:430px;" srcdoc=""></iframe>');
                $("#dataProfileFormframe").attr("srcdoc", response['resultStr'] ? response['resultStr'] : response);

                $("#closeHtmlDiv").off("click").on("click", function () {
                    $("#importDataView").html("");
                });
                AiIDQMNextSkip();
            }
        });
    }
}

function aIQCAndAutoCorrectionCheck(gridId, tableName)
{

    var batchData = getBatchList(gridId, tableName);
    var validArray = ['Reference_FFT', 'Char_FFT', 'Document_FFT', 'Class_FFT', 'Duplicate_Ref_Within_Record', 'Duplicate_Doc_Within_Record', 'Same_Ref_Num_With_Diff_Ref_Type', 'Same_Doc_Num_With_Diff_Doc_Type', 'Duplicate_DOC_AND_REF_Within_Record', 'Unknown_Part_Number_And_Manufacturer', 'Same_Manufacturer_With_Diff_Part_Number_Within_Record'];

    var selectElement = document.createElement('select');
    selectElement.id = 'validSelectionId';

    validArray.forEach(function (optionValue) {
        var optionElement = document.createElement('option');
        optionElement.value = optionValue;
        optionElement.textContent = optionValue.replace(/_/g, ' ');
        selectElement.appendChild(optionElement);
    });

    $("#logoutDailog").html((labelObject[batchData] != null ? labelObject[batchData] : batchData + "  Validation :" + selectElement.outerHTML));
    $("#logoutDailog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        width: 700,
        height: 135,
        fluid: true,
        buttons: [{
                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                click: function () {
                    $("#logoutDailog").dialog('close');
                    var batchId = $("#batchId").val();
                    var validVal = $("#validSelectionId").val();

                    if (batchId != null && batchId != '' && batchId != 'undefined' && validVal != null)
                    {
                        showLoader();
                        $.ajax({
                            type: "post",
                            url: "qcCheckAndAutoCorrectionApi",
                            cache: false,
                            data: {
                                'tableName': tableName,
                                'gridId': gridId,
                                'batchId': batchId,
                                'validationVal': validVal
                            },
                            traditional: true,
                            dataType: 'html',
                            async: false,
                            success: function (response) {
                                stopLoader();
                                showMesg((labelObject[response] != null ? labelObject[response] : response));
                                try {
                                    $("#" + gridId).jqxGrid('updatebounddata');
                                } catch (e) {
                                }

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


}
function AiLensViewAPIResponse(title, responseData, batchId, tableName, gridId, clusterId) {
    openAINavigation();
    aiAutoScrollContainer();

    if (responseData.trim().includes(",")) {
        var dataArray = responseData.split(',');
        var modifiedLines = dataArray.map(function (line) {
            return line.trim().replace(/^\d+\s*:\s*/, ''); // Removes leading spaces and digits with colon
        });

        var resultList = "<ul>";
        modifiedLines.forEach(item => {
            resultList += "<li>" + item + "</li>"
        });
        responseData = resultList += "</ul>"

    }
    var onclick = '';
    if (clusterId != null && clusterId != "" && clusterId != "null") {

        onclick = "showDHClusterData('" + clusterId + "','" + batchId + "')"
    } else {

        onclick = "getCloudGridData('" + gridId + "' ,'" + batchId + "')";
        //onclick = "showDHTableGridData('" + tableName + "', '" + gridId + "','" + batchId + "')"

    }

    var logData = "<div class='aiLensResultDataClass' style='width:348px;'>"
            + "<h5>" + title + ":</h5>"
            + "<div>" + responseData + "</div>"
            + "<div>Batch No: <span>" + batchId + "</span><span id=\"" + batchId + "\" onclick=\"copyToClipboardOperation('" + batchId + "', event)\"><img src='images/Copy-Icon.svg'width='18px;'/></span></div>"
            + "<a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + onclick + "\">View Data</a>"
            + "</div>";

    defaultAITypingBasedOnResponse(logData);
}
function copyToClipboardOperation(text, event) {
    const clickedElement = event.currentTarget;
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
//    showFadeMesg("Copied!");
    document.body.removeChild(dummy);
    const copiedSpan = document.createElement("span");
    copiedSpan.textContent = " Copied!";
    copiedSpan.style.color = "green";
    copiedSpan.style.marginLeft = "5px";
    copiedSpan.classList.add("copy-msg");
    clickedElement.appendChild(copiedSpan);

    setTimeout(() => {
        copiedSpan.remove();
    }, 2000);
}

function multiSourceDataImport(viewId, menu) {
    showLoader();
    let checkbox = $("#cb-switch");//04-09-2025
    var fioriThemeCheck = checkbox.is(":checked");
    menu = "";
    replacejscssfile("", "", "")
    menu = menu != null ? menu : "";
    //	if ($("#etlPageBody").length && globalETLLoadMenu == menu) {
    //		return false;
    //	}
    globalETLLoadMenu = menu != null ? menu : "";
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getDataPiping",
        cache: false,
        data: {
            treeId: 'MM_SOURCE_AVAILABLE_CONNECTION_TREE',
        },
        success: function (response) {
            stopLoader()
            if (response != null && !jQuery.isEmptyObject(response)) {
                var currentV10ConnObj = response['currentV10ConnObj'];
                savedDBData["Current_V10"] = currentV10ConnObj;
                var availableConnections = response['availableConnections'];
                $.each(availableConnections, function (i) {
                    var connObj = availableConnections[i];
                    var connectionName = connObj['CONNECTION_NAME']
                    savedDBData[connectionName] = connObj;
                })

                var connectionsDivStr = response['connectionDivsStr'];
                $("#DxpVisualizationbutton").hide()
                $(".searchMainWrap").show();
                $(".languageSelectionBox").show();
                if (fioriThemeCheck) {//04-09-2025
                    $('#innerMainLeftWrapperIDAttach').html("");
                }
                $(".settingheaderImage").show();
                $("#importDataView").html('<div class="page-body-content" id="pageBodyContent"><div id ="etlPageBody" class="dhView-page-body"></div></div></div>');
                $("#etlPageBody").append(connectionsDivStr);
                $("#designViewTabHeading").hide();
                $("#availableJobs").hide();
                $("#schemaObjects").hide();
                var componentsDivStr = response['componentsDiv'];
                $("#etlIconGroup").append(componentsDivStr);
                var connMainDivStr = response['connMainDiv'];
                $("#ConnInnerDiv").append(connMainDivStr);
                $("#treePageSize").val(50);
                var treeObj = {};
                try {
                    treeObj = response['treeObj']
                } catch (e) {
                }
                splitterAdjustment(treeObj, connectionsDivStr);
                $("#contentSplitter").remove();
                $("#savedConnections").on('mousedown', function (event) {


                    var target = $(event.target).parents('li:first')[0];
                    var rightClick = isRightClick(event);
                    if (rightClick && target != null) {
                        $("#savedConnections").jqxTree('selectItem', target);
                        var selectedItem = $('#savedConnections').jqxTree('getSelectedItem');
                        if (selectedItem.level == 5 || selectedItem.level == 4) {
                            var menuItems = "";
                            var menuHeight;
                            var columnObj = globalTreeObj['treeColumnObj'][selectedItem.level];
                            var initParams = columnObj.TREE_INIT_PARAMS;
                            if (initParams != null) {
                                var rightClickFunc = initParams.uuu_RightClickFunc;
                                if (rightClickFunc != null) {
                                    var options = rightClickFunc.split(";");
                                    menuHeight = options.length;
                                    $.each(options, function (index) {
                                        var menuItem = options[index].split(":")[0];
                                        var funcName = options[index].split(":")[1];
                                        menuItems += "<li onclick='" + funcName + "'>" + menuItem + "</li>"
                                    });
                                }
                            }
                            $("#jqxMenu").remove();
                            $(".dhView-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                            $("#jqxMenu ul").html(menuItems);
                            var contextMenu = $("#jqxMenu").jqxMenu({
                                width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                                //                                theme: 'energyblue'
                            }); // ravi start




                        } else if (selectedItem.level == 3) {// ravi start
                            var height = 1;
                            var parentListItem = selectedItem.parentElement.parentElement.parentElement;
                            if (parentListItem != null) {
                                var selectedParentItem = $('#savedConnections').jqxTree('getItem', parentListItem);
                            }


                            //   PKH View file data START--->  


                            var item = $("#savedConnections").jqxTree('getSelectedItem');
                            var fileType = "";
                            var title = item.label;
                            var fileExtensions = [".xlsx", ".xls", ".XLS", ".XLSX", ".txt", ".csv", ".xml", ".TXT", ".CSV", ".XML", ".JSON", ".json", ".PDF", ".pdf", ".JPEG", ".jpeg", ".PNG", ".png"];
                            if (item != null && !item.hasItems && title != null && title != '') {
                                for (var i = 0; i < fileExtensions.length; i++) {
                                    if (title.endsWith(fileExtensions[i])) {
                                        fileType = fileExtensions[i];
                                        break;
                                    }
                                }
                            }
                            var fileType = "." + title.substr((title.lastIndexOf('.') + 1));
                            var fileObj = {};
                            var filePath = item['value'];
                            if (filePath != null && filePath.lastIndexOf("\\") > -1) {
                                filePath = filePath.substring(filePath.lastIndexOf("\\") + 1);
                            }
                            fileObj['filePath'] = filePath;
                            fileObj['fileType'] = fileType;
                            for (var entitykey in HtmlEntities) {
                                try {
                                    var entity = HtmlEntities[entitykey];
                                    var regex = new RegExp(entitykey, 'g');
                                    title = title.replace(regex, entity);
                                } catch (e) {

                                }
                            }
                            fileObj['fileName'] = title;
                            //   PKH View file data end ----->  

                            if (selectedParentItem != null && selectedParentItem.label == "Files") {
                                height = 2;
                                var menuItems = "<li onclick='deleteFile()' file-data='" + JSON.stringify(fileObj) + "' >Delete</li>";
                                menuItems += "<li onclick=viewFileData('" + JSON.stringify(fileObj) + "')>View File Data</li>";
                                $("#jqxMenu").remove();
                                $(".dhView-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                                $("#jqxMenu ul").html(menuItems);
                                var contextMenu = $("#jqxMenu").jqxMenu({
                                    width: '140px', height: height * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                                    //                                    theme: 'energyblue'
                                }); // ravi start

                            } else {
                                var menuItems = "";
                                height = 1;
                                if (selectedItem.value != "Current_V10") {
                                    menuItems += "<li onclick='viewConnection()'>View</li>";
                                    menuItems += "<li onclick='deleteConnection()'>Delete</li>";
                                    height = 3;
                                }
                                menuItems += "<li onclick=viewSQLEditor('" + selectedItem.value + "')>SQL</li>";
                                $("#jqxMenu").remove();
                                $(".etl-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                                $("#jqxMenu ul").html(menuItems);
                                var contextMenu = $("#jqxMenu").jqxMenu({
                                    width: '140px', height: height * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                                    //                                    theme: 'energyblue'
                                }); // ravi start
                            }
                        } else { // ravi end
                            return false;
                        }


                        var scrollTop = $(window).scrollTop();
                        var scrollLeft = $(window).scrollLeft();
                        contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                        return false;
                    }
                });
                // ravi start
                $("#schemaObjectsDiv").on('mousedown', function (event) {

                    var target;
                    if ($(event.target).hasClass('visionObjectNameDiv')) {
                        target = $(event.target);
                    } else {
                        target = $(event.target).parents('div.visionObjectNameDiv')[0];
                    }



                    var rightClick = isRightClick(event);
                    if (rightClick && target != null) {

                        $(".visionObjectNameDiv").removeClass("visionSelectedObject");
                        $(target).addClass("visionSelectedObject");
                        $(".visionObjectNameDiv").find('span').removeClass("visionHighlightTables");
                        $(target).find('span').addClass("visionHighlightTables");
                        var menuItems = "";
                        var menuHeight;
                        var columnObj = globalTreeObj['treeColumnObj'][5];
                        var initParams = columnObj.TREE_INIT_PARAMS;
                        if (initParams != null) {
                            var rightClickFunc = initParams.uuu_RightClickFunc;
                            if (rightClickFunc != null) {
                                var options = rightClickFunc.split(";");
                                menuHeight = options.length;
                                $.each(options, function (index) {
                                    var menuItem = this.split(":")[0];
                                    var funcName = this.split(":")[1];
                                    menuItems += "<li onclick='" + funcName + "'>" + menuItem + "</li>"
                                });
                            }
                        }

                        $("#jqxMenu").remove();
                        $(".dhView-page-body").append("<div id='jqxMenu'><ul></ul></div>");
                        $("#jqxMenu ul").html(menuItems);
                        var contextMenu = $("#jqxMenu").jqxMenu({
                            width: '120px', height: menuHeight * 30 + 'px', autoOpenPopup: false, mode: 'popup',
                            //                            theme: 'energyblue'
                        }); // ravi start

                        var scrollTop = $(window).scrollTop();
                        var scrollLeft = $(window).scrollLeft();
                        contextMenu.jqxMenu('open', parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                        return false;
                    }
                });

                $(document).on('contextmenu', function (e) {
                    if ($(e.target).parents('.jqx-tree').length > 0) {
                        return false;
                    }
                    if ($(event.target).parents('div.visionObjectNameDiv').length > 0 || $(event.target).hasClass('visionObjectNameDiv')) {
                        return false;
                    }
                    if ($(event.target).parents('div.ConnInnerDivClass').length > 0 || $(event.target).hasClass('ConnInnerDivClass')) {
                        return false;
                    }
                    if ($(event.target).parents('div.etl-page-body').length > 0 || $(event.target).hasClass('etl-page-body')) {
                        return false;
                    }

                    return true;
                });
                function isRightClick(event) {
                    var rightclick;
                    if (!event)
                        var event = window.event;
                    if (event.which)
                        rightclick = (event.which == 3);
                    else if (event.button)
                        rightclick = (event.button == 2);
                    return rightclick;
                }

                $('#editorViewDiv').jqxTabs({
                    width: "100%",
                    height: "100%",
                    position: 'top',
                    //                    theme: 'energyblue',
                    reorder: true,
                    showCloseButtons: true
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
function mapColumnView(files, fileType) {
    showLoader();
    var gridId = 'MM_MASS_DH_DATA_PROCESS';
    closeAINavigation();
    var data;
    var url;
    var fileData = files['name'];
    var xlsxETLFileData = new FormData();
    xlsxETLFileData.append("importFile", files);
    xlsxETLFileData.append("gridId", gridId);
    data = xlsxETLFileData;
    url = "importTreeDMFileETL";
    $.ajax({
        url: 'importFileAjaxColMapping',
        type: "POST",
        data: xlsxETLFileData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (response) {
            stopLoader();
            var resultObject = JSON.parse(response);
            var fileHeaders = resultObject['headersArray']
            var filePath = resultObject['filePath']
            var gridTable = resultObject['gridTable']
            var columnLabels = resultObject['columnLabels']
            var datafields = resultObject['datafields']

            var htmlDiv = "<div id='importFileColumnsMapppingOptionsDiv' class=\"rightFilterDivoperations\"><ul>"
                    + "<li onclick='importColumnMappingAssistant()'><span class=\'filterIconRight\'><img id='importFileColumnsMapppingInfo'  src='images/Information_icon_Blue.svg'  width=\"25px\"/></span><span class=\'flitertextRight\'>Help</span></li>"
                    + "<li id='importFileButton'><span class='filterIconRight'><img src='images/Legacy_Data_Import_WB_Blue.png' width='25px' /></span><span class='flitertextRight'>Import</span></li>"
                    + "<li><span class='filterIconRight'><img src='images/closeIcon_blue.png' width='25px' /></span><span class='flitertextRight'>Close</span></li>"
                    + "</ul>"
                    + "</div>"
                    + "<div id='importFileColumnMappingId' class='importFileColumnMappingMain' ></div>";

            var mappedGridColumnsArray = [];
            var mappedGridLabelssArray = [];
            var mappedFileHeadersArray = [];
            var columnMappingObj = {};
            $("#designViewTab").show();
            $("#designViewTab").html(htmlDiv);
            closeAllDialogsBoxes();
            $(".ui-dialog").remove();
            var columnNameInputs = {};
            var columnNameArray = [];
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

            var resultObject = JSON.parse(response);
            var fileHeaders = resultObject['headersArray']
            var filePath = resultObject['filePath']
            var fileName = resultObject['fileName']

            var headersCount = resultObject['headersCount']
            var fileRowCount = resultObject['fileRowCount']

            var fileTitle = "<div>File Name : " + fileName + "<br>"
                    + "Columns Count : " + headersCount + "<br>"
                    + "Rows Count : " + fileRowCount + "</div>"
                    + "<div>"
                    + "<img  id='fileAnalyticsId'  src='images/Data-Analytics-icon.svg' style='width:20px;height:20px;float:right;' >"
                    + "<img  id='fileDataTypesValidationId' src='images/validation.png' style='width:20px;height:20px;float:right;' >"
                    + "</div>";


//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
            var tableTitle = "<div>Staging Table <br>"
                    + "Columns Count : " + columnNameArray.length + "<br>"
//                            + "Rows Count : " + datainformations['rowscount'] + "</div>";


            var fileHeaderObject = {};
            $.each(fileHeaders, function (i) {
                var header = fileHeaders[i];
                fileHeaderObject[header] = header;
            })
            if (fileHeaders.length > Object.keys(fileHeaderObject).length) {
                showMesg("Duplicate file headers found. Please change to proceed");
                $(this).html("");
                $(this).dialog("close");
                throw new Error("Duplecate file headers found");
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
                        properties: {
                            title: fileTitle,
                            inputs: {},
                            outputs: fileHeaderOutputs,
                        }
                    },
                    operator2: {
                        top: 20,
                        left: 500,
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
            $('#importFileColumnMappingId').flowchart({
                data: data,
                linkWidth: 2,
                multipleLinksOnOutput: true,
                canUserEditLinks: true,
                canUserMoveOperators: true
            });


            $(".flowchart-operator-connector-label").each(function (i) {
                var linkData = linksData[i];
                var text = $(this).text();
                if (matchedColumns.indexOf(text) > -1) {
                    $(this).css("color", "green");
                } else {
                    $(this).css("color", "red");
                }

            })

            $('#importFileColumnMappingId').flowchart({
                onOperatorMoved: function (operatorId, position) {
                    if (position.top < 0) {
                        var operatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', operatorId);
                        operatorData.top = 20;
                        $('#importFileColumnMappingId').flowchart('setOperatorData', operatorId, operatorData);
                        $(".flowchart-operator-connector-label").show();
                        $(".flowchart-operator").css("width", "250px", "!important");
                        $(".flowchart-operator").css("height", "auto", "!important");
                        $(".flowchart-operator-title").show();
                    }
                    return true;
                },
                onLinkCreate: function (linkId, linkData) {
                    var getdata = $('#importFileColumnMappingId').flowchart('getData');
                    var fromOperator = linkData['fromOperator']
                    var fromConnector = linkData['fromConnector'];
                    var fromOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
                    var label = fromOperatorData['properties']['outputs'][fromConnector]['label'];
                    mappedFileHeadersArray.push(label);

                    var toOperator = linkData['toOperator']
                    var toConnector = linkData['toConnector'];
                    var toOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', toOperator);
                    var value = toOperatorData['properties']['inputs'][toConnector]['value'];
                    var tolabel = toOperatorData['properties']['inputs'][toConnector]['label'];
                    mappedGridColumnsArray.push(value);
                    mappedGridLabelssArray.push(tolabel);
                    columnMappingObj[label] = value;
                    $(".flowchart-operator-connector-label").each(function (i) {
                        var text = $(this).text();
                        if (text == label || text == tolabel) {
                            if (label == tolabel) {
                                $(this).css("color", "green");
                            } else {
                                $(this).css("color", "blue");
                            }

                        }
                    })


                    return true;
                },
                onLinkDelete: function (linkId, forced) {

                    var flowChartData = $('#importFileColumnMappingId').flowchart('getData');
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
                    var fromOperatorData = $('#importFileColumnMappingId').flowchart('getOperatorData', fromOperator);
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
                    var linkId = $('#importFileColumnMappingId').flowchart('getSelectedLinkId');

                    return true;
                }
            });


            $(".flowchart-operator-connector-label").show();
            $(".flowchart-operator-connector-label").css("width", maxHeaderLength * 10 + "px", "!important");
            $(".flowchart-operator").css("width", "auto", "!important");
            $(".flowchart-operator").css("height", "auto", "!important");
            $(".flowchart-operator-title").show();

            $.each(linksData, function (linkid, linkdata) {
                $('#importFileColumnMappingId').flowchart('addLink', linkdata);
            })

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



            $("#importFileColumnsMapppingInfo").popover({
                trigger: "click",
                html: true,
                maxwidth: 'auto',
                placement: "left",
                //                title: "Event Timings", 
                content: function (event) {
                    var html = "<div id='carouselExampleControls'class='carousel slide'data-bs-ride='carousel'>"
                            + "<div class='carousel-inner'>"
                            + "<div class='carousel-item active'>"
                            + "<span>Map File columns to Table columns by drawing a link between them using your mouse.</span><hr />"
                            + "<img src='images/mapping.svg' class='d-block w-100' width='260px' alt='Map Columns'>"
                            + "</div>"
                            + "<div class='carousel-item'>"
                            + "<span>To delete a link select a link by clicking on the link and press delete.</span><hr />"
                            + "<img src='images/mapping.svg' class='d-block w-100' width='260px' alt='Map Columns'>"
                            + "</div>"
                            + "</div>"
                            + "<button class='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>"
                            + "<span class='carousel-control-prev-icon' aria-hidden='true'></span>"
                            + "<span class='visually-hidden'>Previous</span>"
                            + "</button>"
                            + "<button class='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>"
                            + "<span class='carousel-control-next-icon' aria-hidden='true'></span>"
                            + "<span class='visually-hidden'>Next</span>"
                            + "</button>"
                            + "</div>";
                    return html;

                },

            });

            $("#importFileButton").click(function () {
                importDataInStagingTable(gridTable, filePath, gridId, fileHeaders, columnMappingObj, mappedFileHeadersArray, mappedGridColumnsArray, fileName)

            })

            $("#fileAnalyticsId").attr("title", "Analysis");
            $("#fileDataTypesValidationId").attr("title", "Validate Datatypes");


        },

    });
}

function importDataInStagingTable(gridTable, filePath, gridId, fileHeaders, columnMappingObj, mappedFileHeadersArray, mappedGridColumnsArray, fileName) {
    showLoader();
    $("#designViewTab").html("");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: 'importExcelColMapping',
        cache: false,
        data: {
            tableName: gridTable,
            filePath: filePath,
            gridId: gridId,
            mappedFileHeadersArray: JSON.stringify(mappedFileHeadersArray),
            mappedGridColumnsArray: JSON.stringify(mappedGridColumnsArray),
            fileHeaders: JSON.stringify(fileHeaders),
            columnMappingObjStr: JSON.stringify(columnMappingObj)
        },
        success: function (result) {
            stopLoader();
            var responseObj = JSON.parse(result);
            var dialogSplitMessage = responseObj['finalresult'];
            var responseData = ",File Name :" + fileName + "," + "Count of Records :" + responseObj['rowCount'];
            AiLensViewAPIResponse("Imported Data", responseData, responseObj['batchNumber'], gridTable, gridId);
            setTimeout(function () {
                iDQMAIMassDataProcess(gridId, "STG_MASS_UPLOAD", responseObj['batchNumber'])
            }, 1000)
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    })
}
function getAIDataView(tabId, roleId) {
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
    $("#dxp1TabsWithGridContent").hide();
    $("#dxp2TabsWithGridContent").hide();
    $("#dxpHomeContent").hide();
    toggleTabsAndMenus(event);
    let checkbox = $("#cb-switch");  //11-06-2025
    var fioriThemeCheck = checkbox.is(":checked");
    if (roleId == null || roleId == undefined || roleId == "") {
        roleId = localStorage.currentRole;
    }
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: 'getDhAiDataView',
        cache: false,
        data: {
            tabId: tabId,
            fioriFlag: fioriThemeCheck,
            roleId: roleId,

        },
        success: function (response) {
            //$("#dxpContent").after("<div id='dqmContentDiv' class='dqmContentDivClass'></div>");
            $(".dhDataParentView").remove();
            $("#dxpGridContent").html(response);
            if (fioriThemeCheck) {
                fioriTabSroller();
                $('#sidebarContentWrapperID ul li').click(function () {
                    $('#sidebarContentWrapperID ul li').removeClass('fioriHighlightTab');
                    $(this).addClass('fioriHighlightTab');
                    $('#innerChildMainLeftWrapperID').remove();
                    $('#importDataView').removeClass('importDataChartView');
                });
                $('#sidebarContentWrapperID ul li').eq(0).trigger('click');
            }
            $("#dxpGridContent").show();
            initializeDropdownToggle();
            uploadAIlensVideos();

        }
    })

}


function getDHViewTabsData(gridId, type, url, title, clusterId, tabseq) {
    if (!type) {
        console.error("Type parameter is missing or invalid.");
        return;
    }
    let checkbox = $("#cb-switch");  //11-06-2025
    var fioriThemeCheck = checkbox.is(":checked");
    var actions = {};
    var action;
    var initParams = $("#" + type + "_params").val();
    $("#importDataView").html("");
    $("#currTabIDQMSeq").remove();
    $("body").append("<input type='hidden' id='currTabIDQMSeq' value='" + tabseq + "' />");
    $(".dataprofilesideMainMenu li").removeClass("activeHighlightClass");
    if (!fioriThemeCheck) {//11-06-2025
        $("#li_" + type).addClass("activeHighlightClass");
    }

    actions = {
        'importData': multiSourceDataImport.bind(null, type),
        'Profiling': getDataReportAndDHA.bind(null, gridId, 'getDataProfilingResponse', 'Data Profiling', initParams),
        'DHA': getDataReportAndDHA.bind(null, gridId, 'getDHAResponse', 'Data Health Assessment', initParams)

    };
    action = actions[type];
    if (!action && url != "null" && url != undefined && url != "") {
        actions[type] = [url, type, title, clusterId, initParams];
        action = actions[type];
    }


    if (action) {
        if (typeof action === 'function') {
            action();
        } else if (Array.isArray(action)) {
            fetchBatchWiseAPI(gridId, title, url, type, clusterId, initParams);
        } else {
            showDHGridData.bind(null, gridId);
        }
    } else {
        showDHGridData(gridId, title, type, initParams);
    }

}

function stategicsChartsDHData(batchId, type) {
    showLoader();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getStraticsData',
        data: {
            batchId: batchId,
            type: type
        },
        traditional: true,
        cache: false,
        success: function (response) {

            for (var item in response) {
                $('#importDataView').addClass('importDataChartView');
                var chartId = "chartId" + generateRandomNumber();
                $("#importDataView").append("<div id='" + chartId + "' class='mainChartDivClass'></div>");
                var labels = response[item]['labels'];
                var values = response[item]['values'];
                var chartType = response[item]['chartType'];
                var data = [];
                var dataObject = {};
                if (chartType === "bar") {
                    dataObject['x'] = labels;
                    dataObject['y'] = values;
                    dataObject['type'] = 'bar';
                } else if (chartType === "radar") {
                    dataObject['type'] = 'scatterpolar';
                    dataObject['r'] = values;
                    dataObject['theta'] = labels;
                    dataObject['fill'] = 'toself';
                } else if (chartType === "pie") {
                    dataObject['type'] = 'pie';
                    dataObject['values'] = values;
                    dataObject['labels'] = labels;
                } else if (chartType === "funnel") {
                    dataObject['type'] = 'funnel';
                    dataObject['x'] = values;
                    dataObject['y'] = labels;
                }
                data.push(dataObject);


                var layout = {
                    autosize: false,
                    width: 430,
                    height: 300,
                    title: "Count by " + item,
                };
                if (chartType != null && chartType == "areaChart") {
                    var chartDom = document.getElementById(chartId);
                    $("#" + chartId).css("height", "306px");
                    var myChart = echarts.init(chartDom);
                    let option = {
                        title: {
                            text: "Count by " + item,
                            left: 'center',
                            textStyle: {
                                fontWeight: 'normal'
                            }
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: labels
                        },
                        yAxis: {
                            type: 'value'
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }

                        },
                        label: {
                            show: true,
                            position: 'top',
                            fontSize: 8,
                            color: '#000'
                        },
                        series: [
                            {
                                data: values,
                                type: 'line',
                                areaStyle: {}
                            }
                        ]
                    };

                    if (option && typeof option === 'object') {
                        myChart.setOption(option);
                    }
                } else {
                    Plotly.newPlot(chartId, data, layout, {displayModeBar: false});
                }


            }
            stopLoader();

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })

}
function closeDialogBox(id) {
    $(id).remove();
    $(id).dialog();
    $(id).html("");
    $(id).dialog("close");
    $(id).dialog("destroy");

    var div = document.getElementById(id.substring(1));
    if (div === null) {
        $('body').append("<div id='" + id.substring(1) + "'></div>");
    }

}
function showDHClusterData(clusterId, batchId) {
    $("#importDataView").removeClass("importDataChartView");
    //closeDialogBox("#dialog");
    //$("#dialog").html("<div id='dxpDHClusterView' width='100%' height='100%'></div>");
    $("#importDataView").html("<div id='dxpDHClusterView' style='width: 100%; height: 100%;'></div>");
//    $("#dialog").dialog({
//        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//        modal: true,
//        width: 1150,
//        height: 550,
//        fluid: true,
//        buttons: [{
//                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
//                click: function () {
//
//                    $(this).html("");
//                    $(this).dialog("close");
//                    $(this).dialog("destroy");
//                }
//
//
//            }],
//        open: function ()
//        {
    var paramArray = [];
    var paramObj = {}
    paramObj.column = "BATCH_ID";
    paramObj.operator = "EQUALS";
    paramObj.value = batchId;
    paramArray.push(paramObj);
    getcluster(clusterId, 'MM_DH_MANAGER', 'PRODUCT', 'N', paramArray, "Y", "Y");
    $("#basketNameValId").hide();
    $(this).closest(".ui-dialog").addClass("visionHeaderMain");
    $(".visionHeaderMain").css("z-index", "9999");
    $(".visionFooterMain").css("z-index", "9999");
//        },
//        beforeClose: function (event, ui)
//        {
//            $(".visionClusterTableFormDiv").css("overflow", "scroll");
//            $(".visionHeaderMain").css("z-index", "99999");
//            $(".visionFooterMain").css("z-index", "99999");
//        }
//    });


}
function getDownloadiFrameHtml(result, title) {
    var uri = 'data:application/pdf;base64,' + result;
    var link = document.createElement("a");
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = "Data Health Assesment.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showDHGridData(gridId, title, type, initParams) {
    showLoader();
    if ($("#selectBatchIdsList").length > 0) {
        $("#selectBatchIdsList").jqxListBox('destroy');
    }
    closeDialogBox("#logoutDialog");

    var $logoutDialog = $("#logoutDialog");

    $.ajax({
        type: "POST",
        url: 'getBatchIdsWithGridParams',
        dataType: 'json',
        data: {
            gridId: gridId,
        },
        traditional: true,
        async: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var checkBoxList = response['checkBoxData'];

            $("#logoutDialog").html("<div id='selectBatchIdsList'></div><div id = 'errorBatchId' style='color:red;'></div>");

            $("#selectBatchIdsList").jqxListBox({
                filterable: true,
                checkboxes: true,
                source: checkBoxList,
                theme: 'energyblue',
                displayMember: 'text',
                valueMember: 'value',
                width: '100%'
            });

            $logoutDialog.dialog({
                title: (labelObject[title] != null ? labelObject[title] : title),
                modal: true,
                width: 300,
                height: 310,
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            var selectedBatchId = $("#selectBatchIdsList").val();
                            if (selectedBatchId != null && selectedBatchId != "" && selectedBatchId != undefined && selectedBatchId != "null") {
                                $(this).dialog("close").html("");
                                if (title.includes("Search")) {
                                    getAIIDQMPPRResults('PRODUCT', 'MM_DH_MANAGER', 'PRODUCT_PROCESSES', 'FMM_PPR_MATERIAL_SEARCH', 'PRA', 'FMM_PPR_MATERIAL_SEARCH', 'MM_SAP_NEW_REG', selectedBatchId, title, initParams, type);
                                } else {
                                    getCloudGridData(gridId, selectedBatchId);
                                }
                            } else {
                                $("#errorBatchId").text("Please select a Batch ID.");
                            }
                        }
                    }],
                open: function () {
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
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
                                $("#selectBatchIdsList").jqxListBox('clear');
                                var batchIdsArray = response['checkBoxData'] != null ? response['checkBoxData'] : [];
                                // Populate jqxListBox with new items
                                for (var i = 0; i < batchIdsArray.length; i++) {
                                    $("#selectBatchIdsList").jqxListBox('addItem', batchIdsArray[i]);
                                }
                            },
                            error: function (e) {
                                console.log(e);
                                sessionTimeout(e);
                            }
                        });

                    });
                },
                beforeClose: function () {
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
                }
            });
        }
    });
}

function getCloudGridData(gridId, batchId) {
    showLoader();
    $("#importDataView").removeClass("importDataChartView");
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': gridId,
            'batchId': batchId,
            roleId: $("#rolehid").val(),
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            $("#importDataView").html("<div id='" + gridId + "'></div>");
            var paramArray = [{
                    column: "BATCH_ID",
                    operator: "EQUALS",
                    value: batchId
                }];
            gridConfig(response, 0, paramArray, gridId, batchId);
        }
    });
}
function populateGridDataForm(gridId, editable, row) {
    showLoader();
    var role = "";
    if (editable == undefined) {
        editable = "N";
    }
    var editRowData = $("#" + gridId).jqxGrid('getrowdata', row);
    var buttonlabel = editable == "N" ? "Add" : "Add";
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


//                    fieldDepParam = jsResponseObj.FIELD_DEPENDENCY_PARAM == null ? "" : jsResponseObj.FIELD_DEPENDENCY_PARAM;
//                    tb_property = "<img class='prop_imgClass visionMasterDetailFormddw' src='images/iDXPUI5SearchDropdown.png'"
//                            + "onclick=\"visionDropdown('" + displayType + "','" + fieldDepParam + "','FORM-VIEW','" + gridId + "','" + jsResponseObj.COL_NAME + "','')\"  />";
                }
                if (jsResponseObj.COL_FORM_VIEW_FLAG == 'N') {
                    if (displayType == 'INV') {
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
                        } else if (fieldType == 'H') {  //som
                            formTable += "<input  " + disablestr + " " + blurFunction + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + " value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' type='hidden'/>"
                                    + tb_property;
                        } else {//som 
                            formTable += "<input " + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + "  value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "'  data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "'";
                            formTable += " id='" + jsResponseObj.COL_NAME + "' type='text'/>" + tb_property;
                        }
                        formTable += "<span class='visionMasterDetailForm_err' id='" + jsResponseObj.COL_NAME + "_disp'></span>";
                        formTable += "</td>";
                    }
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
                    formTable += "<td " + (fieldType == "H" ? " style='display:none'>" : "") + ">"  //som
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
                            formTable += "<input disabled=disabled class ='visionInputDisable' value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' type='text'/>"
                                    + tb_property;
                        } else if (jsResponseObj.COL_NAME == 'USER_NAME') {
                            formTable += "<input  onblur=isUserAvailable('" + jsResponseObj.COL_VALUE + "') value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' type='text'/>"
                                    + tb_property;
                        } else if (fieldType == 'H') {  //som
                            formTable += "<input  " + disablestr + " " + blurFunction + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + " value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' type='hidden'/>"
                                    + tb_property;
                        } else { //som
                            formTable += "<input  " + disablestr + " " + blurFunction + (displayType.indexOf("DDW_") > -1 ? "disabled=disabled " : "") + " value='" + jsResponseObj.COL_VALUE + "' data-label='" + jsResponseObj.COL_LABEL + "' data-regex='" + jsResponseObj.COL_REGEX_ID + "' data-colname='" + jsResponseObj.COL_NAME + "' data-man='" + jsResponseObj.COL_MAN + "' id='" + jsResponseObj.COL_NAME + "' data-regexvalue='" + jsResponseObj['REGEX.INFO_MESSAGE'] + "' type='text'/>"
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
                }
            }
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
                                if (regexTest != null && regexTest != "null" && regexTest != "" && this.value.length > 0) {
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
                                jsobject[col] = this.value;
                            });
                            listboxes.each(function () {
                                //col = this.attr('id');
                                col = this.id;
                                isman = $("#" + col).attr('data-man');
                                label = $("#" + col).attr('data-label');
                                jsobject[col] = this.value;
                            });
//                            data-gridinitparamobj
                            if (!iserror) {
                                var obj = {};
                                showLoader();
                                console.log('griddata::' + JSON.stringify(jsobject));
                                var url = "";
                                var dataType = '';
                                var gridIniitParam = $('#' + gridId).attr('data-gridinitparamobj');
                                var gridIniitParamObj = {};
                                if (gridIniitParam != null && gridIniitParam != undefined && gridIniitParam != '') {
                                    gridIniitParamObj = JSON.parse(gridIniitParam);
                                }
                                url = "gridInsertRecords";
                                var dataArr = [];
                                dataArr.push(jsobject)
                                obj.gridJsonData = JSON.stringify(dataArr);
                                obj.gridId = gridId;
                                obj.tableName = $('#tableName').val();
                                dataType = 'html';
                                $.ajax({
                                    type: "post",
                                    traditional: true,
                                    dataType: dataType,
                                    cache: false,
                                    url: url,
                                    data: obj,
                                    success: function (response) {
                                        stopLoader();
                                        if (typeof response == 'object') {
                                            $("#dialog").text(response.message);
                                        } else if (typeof response == 'string') {
                                            if (response.includes('Already Exist')) {
                                                response = response.replace('1 Row(s) ', '');
                                            }
                                            $("#dialog").text(response);
                                        }
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
function getDHViewNewTabsData(gridId, type, url, title, clusterId) {
    if (!type) {
        console.error("Type parameter is missing or invalid.");
        return;
    }
    var actions = {};
    var action;
    var initParams = $("#" + type + "_params").val();
    $("#importDataView").html("");


//    $(".dhDataParentView .listViewData ul li").removeClass("activeHighlightClass");
//    $("#li_" + type).addClass("activeHighlightClass");

    actions = {
        'importData': multiSourceDataImport.bind(null, type),
        'Profiling': getDataReportAndDHA.bind(null, gridId, 'getDataProfilingResponse', 'Data Profiling', initParams),
        'DHA': getDataReportAndDHA.bind(null, gridId, 'getDHAResponse', 'Data Health Assessment', initParams)

    };
    action = actions[type];
    if (!action && url != "null" && url != undefined && url != "") {
        actions[type] = [url, type, title, clusterId, initParams];
        action = actions[type];
    }


    if (action) {
        if (typeof action === 'function') {
            action();
        } else if (Array.isArray(action)) {
            fetchBatchWiseNewAPI(gridId, title, url, type, clusterId, initParams);
        } else {
            showDHNewGridData.bind(null, gridId);
        }
    } else {
        showDHNewGridData(gridId, title, url, type, clusterId, initParams);
    }
}
function showDHNewGridData(gridId, title, url, type, clusterId, initParams) {
    showLoader();
    if ($("#selectBatchIdsList").length > 0) {
        $("#selectBatchIdsList").jqxListBox('destroy');
    }
    closeDialogBox("#logoutDialog");

    var $logoutDialog = $("#logoutDialog");

    $.ajax({
        type: "POST",
        url: 'getIDQMFilterGridForm',
        dataType: 'json',
        data: {
            selectedGridId: gridId,
            selectedTabId: "",
            selectedGridIndex: 0,
            orderByColumn: "",
            url: url,
            title: title,
            initParams: "",
        },
        traditional: true,
        async: true,
        cache: false,
        success: function (response) {
            stopLoader();
            var checkBoxList = response['result'];
            $("#filterGridForm").html(checkBoxList);
            $("#filterGridForm").dialog({resizable: false,
                title: (labelObject['Filter Form'] != null ? labelObject['Filter Form'] : 'Filter Form'),
                modal: true,
                height: 500,
                minHeight: 400,
                minWidth: 800,
                maxWidth: 900,
                fluid: true,
                buttons: [
                    {
                        text: labelObject['Process'] != null ? labelObject['Process'] : 'Process',
                        click: function () {
                            var selectedBatchId = $("#selectBatchIdsList").val();
                            $(this).dialog("close").html(""); // Close and clear dialog
                            if (selectedBatchId) {
                                getCloudGridData(gridId, selectedBatchId);
                            }
                        }
                    }],
                open: function () {
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
                },
                beforeClose: function () {
                    $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
                }
            });
        }
    });
}

/*toggle sidebar*/
function dataProfileSidebarToggler() {
    const $defultSidebarWidth = $(".innerMainLeftWrapper");
    const $toggleIcon = $("#toggleIcon");
    const $sidebarContent = $("#sidebarContentWrapperID");
    const $rightMainWrapper = $(".rightPaneldataprofilingClass");

    if ($toggleIcon.hasClass("defultLeftIcon")) {
        $defultSidebarWidth.css("width", "0px");
        $toggleIcon.removeClass("defultLeftIcon").addClass("toggledIcon");
        $sidebarContent.hide();
        $(".colExpBtnClass").css("left", "4px");
        $(".colExpBtnClass").css("top", "60px");
        $rightMainWrapper.css("width", "100%");
    } else {
        $defultSidebarWidth.css("width", "30%");
        $toggleIcon.removeClass("toggledIcon").addClass("defultLeftIcon");
        $sidebarContent.show();
        $(".colExpBtnClass").css("left", "21%");
        $(".colExpBtnClass").css("top", "5px");
        $rightMainWrapper.css("width", "80%");
    }
}
function initializeDropdownToggle() {
    $('.sidebarContentWrapper ul li .dataProfileMenuItem').on('click', function (event) {
        event.preventDefault();
        toggleSubMenu($(this));
    });
}

//function toggleSubMenu($dropdown) {
//    const $subMenu = $dropdown.next().next();
//    if ($subMenu.length) {
//        $subMenu.toggleClass('opened');
//        $dropdown.toggleClass('active');
//    }
//}

function toggleSubMenu($dropdown) {
    const $subMenu = $dropdown.nextAll('ul').first();
    if ($subMenu.length) {
        const isActive = $dropdown.hasClass('active');
        $dropdown.closest('ul').find('ul.opened').removeClass('opened');
        $dropdown.closest('ul').find('.dataProfileMenuItem.active').removeClass('active');
        if (!isActive) {
            $subMenu.addClass('opened');
            $dropdown.addClass('active');
        }
    }
}
function uploadAIlensVideos(currentElement, homepageCardImgChngEvt) {
    var imagebase64 = "";
//	$("#importCardImage").trigger("click");
    $("#attachVideoFromAppln").unbind('change').on('change', function (event) {
        var file = event.target.files[0];
        var fileName = file['name'];
        var fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1);
        if (fileExtension !== null && fileExtension !== '' && fileExtension !== undefined) {
            if (fileExtension !== 'png' && fileExtension !== 'jpeg' && fileExtension !== 'jpg' && fileExtension !== 'svg') {
                var errorMessage = "Upload Failed, Please upload only Images.";
                var errorMessageResponse = getErrorMessageDiv(errorMessage);
                var buttonArray = [
                    {
                        text: 'Upload',
                        click: function () {
//							encodeImageFileAndAppendAsSrc(currentElement, homepageCardImgChngEvt);
                        },
                        isCloseButton: true
                    },
                    {
                        text: 'Close',
                        click: function () {
                        },
                        isCloseButton: true
                    }
                ];
                stopLoader();
//				showPopUpWithButtonFunctionCall(errorMessageResponse, buttonArray);
            } else {
//				uploadImageOnServer(file, homepageCardImgChngEvt);
            }
        }
        var $inputFile = $("#cardImageImportDiv");
        $inputFile.children().html("<input type='file' name='importCardImage' id='importCardImage' style='display:none;'/>");
    });
}
function showfilepopup(inputMsg, fileType)
{
    $("#importDataView").hide();
    var imagePath = $(event.currentTarget.firstElementChild.firstElementChild).attr("src");
    var htmlData = "<div class='dataProfileMenuAttachVideoMainDivClass'>"
            + "<input type='file' name='attachVideoFromAppln' id='attachVideoFromAppln' style='display:none'/>"
            + "<div class='dataProfileMenuAttachVideoClass' id='dataProfileMenuAttachVideoId'>"
            + "<div class='dataProfileMenuAttachVideospanclass'><img src='" + imagePath + "' width='60px'> </div>"
            + "<div class='VisionDMUploadFileContent'><p>" + inputMsg + "</p></div>"
            + "<div class='dataProfileMenuAttachUserInfo'><div class='forOnlyVideoAttachment' style='display:none'><img src='images/Video_Icon_blue.svg' width='24px'/></div> <div id='userInfoTextId'></div></div>";
    $("#dialog").html(htmlData);
    $("#dialog").dialog({resizable: false,
        title: (labelObject['Image Upload Form'] != null ? labelObject['Image Upload Form'] : fileType + ' Upload Form'),
        modal: true,
        width: 450,
        height: 300,
        fluid: true,
        open: function ()
        {

            $(this).closest(".ui-dialog").addClass("visionHeaderMain");
            $(".visionHeaderMain").css("z-index", "9999");
            $(".visionFooterMain").css("z-index", "9999");
        },
        beforeClose: function (event, ui)
        {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });

    if (fileType == 'Video') {
        $(".forOnlyVideoAttachment").show();
        $("#userInfoTextId").text("(Mp4 extension)");
    } else {
        $("#userInfoTextId").html(`
            <img src='images/idqmImg.png' width='30px' title='Image'/>
            <img src='images/idqmHtml.png' width='30px' title='Html'/>
            <img src='images/idqmXml.png' width='30px' title='Xml'/>
            <img src='images/idqmDoc.png' width='30px' title='Document'/>
            <img src='images/idqmJson.png' width='30px' title='Json'/>
            <img src='images/idqmPdf.png' width='30px' title='Pdf'/>
            <img src='images/idqmPptx.png' width='30px' title='Ppt'/>  
            <img src='images/idqmTxt.png' width='30px' title='Text'/>
            <img src='images/idqmXlsx.png' width='30px' title='Xlsx'/>
        `);
    }
    ;

    setTimeout(function () {
        $("#dataProfileMenuAttachVideoId").unbind('click').bind('click', function () {
            console.log("iam in clickable ");
            $("#attachVideoFromAppln").click();
        });
        $("#attachVideoFromAppln").on('change', function (event) {
            var filetype = '';
            console.log("iam in files change ");
            //            dmTreeFileUpload("N", filetype);
            if (filetype == 'XLSX' || filetype == 'XLS') {
                var files = event.target.files; // FileList object
//                parseSmartBIExcel(files[0], filetype);
            } else {
                if (fileType != null && fileType != undefined && fileType != "" && fileType == 'File') {
                    var files = event.target.files;
                    uploadAIlensImageData(files[0], fileType);
                } else {
                    var files = event.target.files;
                    var fileExt = files[0].type;
                    if (fileExt != null && fileExt != undefined && fileExt != "" && fileExt == 'video/mp4') {
                        uploadAIlensImageData(files[0], fileType);
                    } else {
                        var modalObj = {
                            title: 'Upload Message',
                            body: "Please upload files with a (.mp4) extension only.",
                        };
                        var buttonArray = [
                            {
                                text: 'OK',
                                click: function () {
                                },
                                isCloseButton: true
                            }
                        ];
                        modalObj['buttons'] = buttonArray;
                        createModal("dataDxpSplitterValue", modalObj);
                        $(".modal-backdrop").show();
                        $(".modal-dialog").addClass("modal-md");
                        $("#dataDxpSplitterValue").addClass("showIntiateNewRequestIndex");
                    }
                }
                event.target.value = '';
            }
        });
    }, 1000);
}
function uploadAIlensImageData(fileData, fileType) {
    showLoader();
    var isCardImgChngEvt = '';
    var chartId = '';
    $("#dialog").dialog("close");
    var fileToBeUploaded = new FormData();
    fileToBeUploaded.append("fileToBeUploaded", fileData);
    fileToBeUploaded.append("uploadFileType", fileType);
//	fileToBeUploaded.append("homepageCardImgChngEvt", homepageCardImgChngEvtStr);
    $.ajax({
        url: 'uploadAiLensVideos',
        type: "POST",
        data: fileToBeUploaded,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        success: function (responseData) {
            stopLoader();
            if (responseData != null && responseData != undefined && responseData != '') {
//                var resultObj = JSON.parse(responseData);
                var modalObj = {
                    title: 'Message',
                    body: responseData['result'],
                };
                var buttonArray = [
                    {
                        text: 'OK',
                        click: function () {
                            getAIDataView('MM_DH_TAB_DATA_DAP_PROCESS');
                        },
                        isCloseButton: true
                    }
                ];
                modalObj['buttons'] = buttonArray;
                createModal("dataDxpSplitterValue", modalObj);
                $(".modal-backdrop").show();
                $(".modal-dialog").addClass("modal-md");
            }
        },
        error: function (errorResponse) {
            sessionTimeout(errorResponse);
        }
    })
}
function showSelectedDataOnPopup(templateId) {
    showLoader();
    $("#importDataView").show();
    fetch('getDataBasedOnTemplateId?templateId=' + templateId).then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch document');
        }
        return response.blob();
    })
            .then(blob => {
                stopLoader();
                const blobUrl = URL.createObjectURL(blob);

                const iframe = document.createElement('iframe');
                iframe.src = blobUrl;
                iframe.width = '100%';
                iframe.height = '100%';
                iframe.frameBorder = '0';
                iframe.className = 'visionFormPdfView';
                iframe.id = 'iframeid';

                let checkbox = $("#cb-switch");
                var fioriThemeCheck = checkbox.is(":checked");
                if (fioriThemeCheck) {
                    $('#importDataView').html(iframe);
                } else {
                    const container = document.getElementById('dhDataParentView');
                    container.innerHTML = '';
                    container.appendChild(iframe);
                }
            })
            .catch(error => {
                console.error('Error loading file:', error);
            });

}

//function showSelectedDataOnPopup(templateId) {
//    showLoader();
//    let checkbox = $("#cb-switch"); //12-06-2025
//    var fioriThemeCheck = checkbox.is(":checked");
//    var frameContent = "<iframe class='visionFormPdfView' frameborder='0' height='100%' width='100%' src='getDataBasedOnTemplateId?templateId=" + templateId + "'  id='iframeid' />";
////    $.ajax({
////        type: "post",
////        traditional: true,
////        dataType: 'html',
////        url: 'getDataBasedOnTemplateId',
////        cache: false,
////        data: {
////            templateId: templateId,
////        },
////        success: function (responseData) {
//    stopLoader();
////            if (responseData != null && responseData != undefined && responseData != '') {
////                var resultObj = JSON.parse(responseData);
//    if (fioriThemeCheck) {
//        $("#importDataView").html(frameContent);
//    } else {
//        $(".rightPaneldataprofilingClass").html(frameContent);
//    }
////                $("#aiLensVideosShowForm").attr("srcdoc", resultObj['FILE'] ? resultObj['FILE'] : resultObj['FILE']);
////            }
////        }
////    });
//}

//function getDHViewTabsData(gridId, type) {
//    if (!type) {
//        console.error("Type parameter is missing or invalid.");
//        return;
//    }
//
//    var url = "";
//    var title = "";
//    $("#importDataView").html("");
//
//    $(".dhDataParentView .listViewData ul li").removeClass("activeHighlightClass");
//    $("#li_" + type).addClass("activeHighlightClass");
//
//    var actions = {
//        'importData': multiSourceDataImport.bind(null, type),
//        'Profiling': getDataReportAndDHA.bind(null, gridId, 'STG_MASS_UPLOAD', 'getDataProfilingResponse'),
//        'DHA': getDataReportAndDHA.bind(null, gridId, 'STG_MASS_UPLOAD', 'getDHAResponse'),
//        'Class': ['classAllocationAPI', 'Class Allocation'],
//        'Char': ['charAutomationAPI', 'Char Automation'],
//        'Reference': ['RefAndDocUpdate', 'Ref And Doc Updation'],
//        'Enrichment': ['dataEnrichmentAPI', 'Data Enrichment']
//    };
//
//    var action = actions[type];
//    if (action) {
//        if (typeof action === 'function') {
//            action();
//        } else if (Array.isArray(action)) {
//            url = action[0];
//            title = action[1];
//            fetchBatchWiseAPI(gridId, 'V_PROCESS_CAT_FORM', title, url, type);
//        }
//    } else {
//        console.error("Unhandled type:", type);
//    }
//}

function showDHTableGridData(tableName, gridId, batchId) {
    showLoader();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': gridId,
            'roleId': "MM_DH_MANAGER",
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            closeDialogBox("#dialog");
            $("#dialog").html("<div id='" + gridId + "'></div>");
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                width: 800,
                height: 500,
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
                    var paramArray = [];
                    var paramObj = {}
                    paramObj.column = "BATCH_ID";
                    paramObj.operator = "EQUALS";
                    paramObj.value = batchId;
                    paramArray.push(paramObj);
                    gridConfig(response, 0, paramArray, gridId, batchId);
                    $("#basketNameValId").hide();
                    $(this).closest(".ui-dialog").addClass("visionHeaderMain");
                    $(".visionHeaderMain").css("z-index", "9999");
                    $(".visionFooterMain").css("z-index", "9999");
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
function getDataReportAndNewDHA(gridId, url, title, initParams) {
    closeAllDialogsBoxes();
    if ($("#selectBatchIdsList").length > 0) {
        $("#selectBatchIdsList").jqxListBox('destroy');
    }
    if (gridId != null && gridId != '' && gridId != undefined) {
        showLoader();
        $.ajax({
            type: "POST",
            url: 'getIDQMFilterGridForm',
            dataType: 'json',
            data: {
                selectedGridId: gridId,
                selectedTabId: "",
                selectedGridIndex: 0,
                orderByColumn: "",
                url: url,
                title: title,
                initParams: initParams,
            },
            traditional: true,
            async: true,
            cache: false,
            success: function (response) {
                stopLoader();
                var checkBoxList = response['result'];
                $("#filterGridForm").html(checkBoxList);
                $("#filterGridForm").dialog({resizable: false,
                    title: (labelObject['Filter Form'] != null ? labelObject['Filter Form'] : 'Filter Form'),
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 900,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [
                        {
                            text: labelObject['Process'] != null ? labelObject['Process'] : 'Process',
                            click: function () {

                                showDHData(gridId, url, [], initParams);
                            }
                        }, {
                            text: labelObject['Reset'] != null ? labelObject['Reset'] : 'Reset',
                            click: function () {
                                clearFilterGridSearch(gridId);
                            }
                        }
                    ],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $("#filterGridForm").html("");
                        try {
                            $("#filterGridForm").dialog("destroy");
                        } catch (e) {
                        }

                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }
        });
    }
}
async function iDQMAIMassDataProcess(gridId, tableName, batchId) {
    aiAutoScrollContainer();
    let responseData = "";
    let sequence = '';
    const characters = '0123456789ABCDEF';
    let length = 16;
    for (let i = 0; i < length; i++) {
        sequence += characters[Math.floor(Math.random() * 16)];
    }
    let selectedRowsData = [{
            "BATCH_ID": batchId,
            "SOURCE": "CREATE",
            "SEQUENCE_NO": sequence
        }];

    const logMessage = async (message) => {
        const logData = `<div class='aiLensResultDataClass'><div>${message}</div></div>`;
        await defaultAgentAiTypingBasedOnResponse(logData);
    };

    const handleAjaxSuccess = (response, processName, callback) => {
        aiAutoScrollContainer();
        stopLoader();
        stopaiLoader();

        if (!response) {
            logMessage(`Unable to process ${processName}`);
            return;
        }

        if (response.startsWith('Exception::')) {
            logMessage(`Unable to process ${processName}: ${response}`);
        } else {
            try {
                var responseObj = JSON.parse(response);
            } catch (e) {

            }
            if (responseObj !== null && !jQuery.isEmptyObject(responseObj)) {
                var recordNoList = responseObj['recordNoList'];
                localStorage.setItem("recordNoList", recordNoList);
                var resultMessage = responseObj['resultMessage'];
                responseData = resultMessage;
            } else {
                if (response.trim().includes(",")) {
                    var dataArray = response.split(',');
                    var modifiedLines = dataArray.map(function (line) {
                        return line.trim().replace(/^\d+\s*:\s*/, '');
                    });
                    var resultList = "<ul>";
                    modifiedLines.forEach(item => {
                        resultList += "<li>" + item + "</li>"
                    });
                    responseData = resultList += "</ul>"
                    responseData = responseData.replaceAll("Validation", "Quality Check");

                } else {
                    responseData = response;
                    responseData = responseData.replaceAll("Validation", "Quality Check");
                }
            }
            var viewname = "";
            if (processName != null && processName != undefined && processName != "" && processName == 'Data Validation') {
                viewname = 'Validations';
            } else {
                viewname = 'Process (Staging to Active Area)';
            }
            let title = viewname;
            var aiQueryType = "MASSDATAPROCESSCREATE";
            var dataViewonclick1 = "getAIContentBasedOnQueryPopUp('Data " + title + " process completed Processed Data','View Details', '" + aiQueryType + "','H','N','" + batchId + "')";
            var dataViewonclick2 = "getAIContentBasedOnQueryPopUp('Data " + title + " process completed Failed Data','View Details','" + aiQueryType + "','H','N','" + batchId + "')";
            var logData = "<div class='aiLensResultDataClass'>"
                    + "<p class='queryanswerTitle'>Data " + viewname + " process completed</p>";
            logData = logData + "<div>" + responseData + "</div>"
                    + "<div><a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + dataViewonclick1 + "\">View " + viewname + " Processed Records</a></div>"
                    + "<div><a href='#' class='connectionExplorerBreadCrumb' onclick=\"" + dataViewonclick2 + "\">View " + viewname + " Failed Records</a></div>"
            if (recordNoList !== null && recordNoList !== undefined && recordNoList != "") {
                logData = logData + "<div>Record No(s): " + recordNoList + "</div>";
            }
            logData = logData + "</div>";
            defaultAITypingBasedOnResponse(logData, '', "", "");
            callback && callback();
        }
    };

    const executeAjaxCall = (url, processName, data, callback) => {
        aiAutoScrollContainer();
        showaiLoader();
        $.ajax({
            type: "post",
            url: url,
            cache: false,
            data: data,
            traditional: true,
            dataType: 'html',
            async: true,
            success: (response) => handleAjaxSuccess(response, processName, callback),
            error: (e) => {
                console.error(e);
                stopLoader();
                stopaiLoader();
                logMessage(`Error during ${processName}`);
            }
        });
    };

    try {
        await logMessage("Data process initiated");
        await logMessage("Data Validation process initiated");

        executeAjaxCall("massValidateData", "Data Validation", {
            'jsonData': JSON.stringify(selectedRowsData),
            'tableName': tableName,
            'gridId': gridId,
            'batchId': batchId
        }, async () => {
            await logMessage("Data Staging process initiated");
            executeAjaxCall("massSaveRecord", "Data Staging process", {
                'jsonData': JSON.stringify(selectedRowsData),
                'tableName': tableName,
                'gridId': gridId,
                'batchId': batchId
            }, () => {
                AiIDQMNextSkip(() => {
                });
            });
        });

    } catch (e) {
        console.error(e);
        stopLoader();
        stopaiLoader();
        logMessage("Unexpected error occurred during processing.");
    }


}
function AiIDQMNextSkip() {

    var currTabSeq = $("#currTabIDQMSeq").val();

    var tabSeqObjStr = $("#tabSeqObj").val();

    var tabSeqObj = (tabSeqObjStr != null && tabSeqObjStr != "" && tabSeqObjStr) ? JSON.parse(tabSeqObjStr) : "";
    if (!(currTabSeq != null && currTabSeq != undefined && currTabSeq != "") && !(currTabSeq != null && currTabSeq != undefined && currTabSeq != "")) {
        stopLoader();
        return;
    }
    setTimeout(function () {
        var keys = Object.keys(tabSeqObj);
        keys.sort((a, b) => parseInt(a) - parseInt(b));
        var tabStr = keys[currTabSeq];
        var tabCount = tabStr.slice(0, 1);
        var nextSeq = parseInt(tabCount) + 1;
        var skipSeq = parseInt(tabCount) + 2;
        var title = tabStr.replace(/^\d+/, "").trim();
        var tabNext = keys[nextSeq];
        var tabSkip = keys[skipSeq];
        var nextFunction = tabSeqObj[tabNext];
        var nexttitle = (tabNext != null && tabNext != "" && tabNext != "null" && tabNext != undefined) ? tabNext.replace(/^\d+/, "").trim() : "";
        var skiptitle = (tabSkip != null && tabSkip != "" && tabSkip != "null" && tabSkip != undefined) ? tabSkip.replace(/^\d+/, "").trim() : "";
        var skipFunction = tabSeqObj[tabSkip];

        var logDataStr = '<span class="aiLensResultDataClass"> Do you want to proceed</span>'
        if (nextFunction != null && nextFunction != "" && nextFunction != undefined) {
            logDataStr += '<div class="viewButton viewIconAiIDQMSkipDiv"' + nextFunction + ' style="cursor: pointer;">'//12-06-2025
                    + '<span class="viewIcon viewIconAiIDQMSkip"></span><span class="viewText">Next To' + nexttitle + '</span></div>'//12-06-2025
        }
        if (skipFunction != null && skipFunction != "" && skipFunction != undefined) {
            logDataStr += ' <div class="viewButton viewIconAiIDQMNextDiv"' + skipFunction + ' style="cursor: pointer;">'//12-06-2025
                    + '<span class="viewIcon viewIconAiIDQMNext"></span><span class="viewText">Skip To ' + skiptitle + '</span></div>'//12-06-2025
        }
        if ((nextFunction != null && nextFunction != "" && nextFunction != undefined) || (skipFunction != null && skipFunction != "" && skipFunction != undefined)) {
            defaultAITypingBasedOnResponse(logDataStr, '', "", "");

        }
    }, 5000)
}
async function getAIIDQMPPRResults(domain, roleId, componentType, formSearchId, searchType, repSearchId, gridId, aiSearchString, title, initparams, type) {
//    openAINavigation();
//    $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass'>Searching " + aiSearchString + " in " + aiClickedTitle + "</div><input type='hidden' id='floatingdxpAdavanceSearchOptions' value='" + searchType + "'/>");
//    $("#aiTypedValue").attr('readonly', true);
//    showaiLoader();
    showProcessNotificationMessage("ICF process has been initiated, and the system will notify you once it is completed.");
    $.ajax({
        url: "iDQMPPRSearch",
        type: "post",
        cache: false,
        data: {
            "batchId": aiSearchString,
            "paramArray": initparams
        },
        traditional: true,
        dataType: 'json',
        async: true,

        success: function (response, textStatus, jqXHR) {
            stopaiLoader();
            if (response != null && response != "" && response != undefined) {
                var responseId = response['responseId'];
                var menuId = response['menuId'];
                var roleId = response['roleId'];
                var clusterId = response['clusterId'];
                insertProcessNotification(responseId, title, aiSearchString, gridId, clusterId, menuId, roleId, initparams, type);
                notificationIntervals[responseId] = setInterval(function () {
                    // this will run after every 5 seconds
                    refreshProcessNotificationStatus(responseId, title, aiSearchString, gridId, clusterId, menuId, roleId, initparams, type);
                }, 1000);
            }

        }, error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);


        }

    })

}
//DMA REPORTS CODE START
function showFileDataForImport(flag) {
    var title = "";
    $(".searchMainWrap").show();
    $(".languageSelectionBox").hide();
    $(".settingheaderImage").hide();
    $("#dxpHomeContent").hide();
    try {
        title = $(event.currentTarget).find(".submenuText").text();
    } catch (exception) {
        console.log(exception)
    }

    title = (title !== null && title !== undefined && title !== "") ? title : 'DMA Import';
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "dataDXPAnalytics",
        cache: false,
        data: {
            menuId: 'DAL_ANALYTICS',
            treeId: "MM_SOURCE_AVAILABLE_CONNECTION_TREE",
            viewFlag: "Y",
        },
        success: function (response) {
            stopLoader();
            if (response != null && !jQuery.isEmptyObject(response)) {
                $("#allContentMainDiv").hide();
                var treeObj = {};
                var visualizeDivsStr = response['result'];
                treeObj = response['treeObj'];
                chartFilterConfigObj = response['jsonChartFilterObj'];
                $("#dxpGridContent").show();
//                $("#dxpGridContent").html(visualizeDivsStr);
                $("#importDataView").html(visualizeDivsStr);
                $(".dxpDataAnalyticswrapper").addClass("iDQOPSViewDataClass");
                $("#dmaReportId").remove();
                if (!(flag !== null && flag !== undefined && flag !== "" && flag === "DA")) {
                    $("body").append("<input type='hidden' id='dmaReportId' value='Y'>");
                    $(".dxpDataAnalyticswrapper").addClass("iDMAViewDataClass");
                }
                showSelectedTabContent(null, 'dxpGridTab', 'dxpGridContent', title, 'N');
                $("#visualizationMainDivwrapperID").hide();
                leftFileUploadsDivToggle();
                showDXPConnections("ETL_DM_TREE_SOURCES", "VisualizationSources");
                $(".leftUploadHeaderDiv").show();
                $("#designViewTabHeading").hide();
//                $("#treeDxpConnectionLi").hide();

                $('#visionVisualizeQueryBodyId').jqxTabs({
                    width: "100%",
                    height: "100%",
                    position: 'top',
                    reorder: true,
                    showCloseButtons: true
                });
                $('#columnsToggleIcon').attr('data-flag', 'A'); //line236
                $('#visualToggleIcon').attr('data-flag', 'A');
                $("#visualizationMainDivwrapperID").remove();
                setTimeout(() => {
                    $("#visionVisualizationDataSourcesId").show();
                }, 100);


                treeDxpConnectionsDHS();
            }
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function showDMAFormReport(gridId, tabId, flag, reportGridId) {
    showLoader();
    var columnData = [];
    var cols = $("#" + gridId).jqxGrid("columns").records;
    if (cols != null && cols != undefined && cols != '') {
        cols.forEach(function (col) {
            if (col.text && col.text != "BATCH_ID" && col.text != "RESPONSE_TITLE") {
                var datafield = col.datafield;
                datafield = datafield.toUpperCase().replace("/", "_")
                columnData.push(datafield.toUpperCase().replace(".", "_"));
            }
        });
    }
    let rowData = $("#" + gridId).jqxGrid('getrowdata', 0);
    let batchId = rowData["BATCH_ID"];
    $("#dmabatchId").remove();
    $("body").append("<input type='hidden' id='dmabatchId' value='" + batchId + "'/>");
    $("#tableName").val(tabId);

    var columnDataStr = columnData.join(",");
    $.ajax({
        url: 'getDMAFormConfig',
        type: 'POST',
        data: {
            gridId: gridId,
            columnDataStr: columnDataStr
        },
        dataType: 'json',
        success: function (data) {
            stopLoader();

            const formContainer = $('<div id="form-container" class="dmaFormClass"></div>');

            let selectedOptionsData = {};
            let errorMessages = {};
            data['data'].forEach((categoryData, categoryIndex) => {
                const categoryContainer = $('<div class="mainWrapperClass"></div>');
                const categoryHeader = `<h6>${categoryData.category}</h6>`;
                const categoryExample = `<div class='dmacategoryExampleMsg'><span>
                ${categoryData['example'] != null && categoryData['example'] != "" && categoryData['example'] != undefined ? categoryData['example'] : ""}
                  </span></div>`
                categoryContainer.append(categoryHeader);
                categoryContainer.append(categoryExample);
                formContainer.append(categoryContainer);


                categoryData.subcategories.forEach((subcategory, subcategoryIndex) => {

                    const subcategoryContainer = $(`<div class="subcategory-container"></div>`);
                    categoryContainer.append(subcategoryContainer);


                    const dropdownWrapper = $('<div class="dropdown-wrapper"></div>');
                    subcategoryContainer.append(dropdownWrapper);

                    if (categoryData.addButton) {
                        subcategoryContainer.addClass("kdsDropdownWrapper");
                        const addButton = $(`<button class="add-dropdown-btn">Add Dropdown</button>`);
                        dropdownWrapper.append(addButton);

                        addButton.on('click', function () {
                            let count = Math.floor(Math.random() * 100);
                            let replaceValue = "5.0" + count;
                            subcategory = subcategory.replace("_sub", "");
                            subcategory = subcategory.replace("5.0", replaceValue);
                            let dropDownArray = {
                                ...categoryData,
                                'subcategories': [subcategory]
                            };
                            data['data'].push(dropDownArray);
                            addDMACategoryDropdowns(categoryData, subcategory, subcategoryContainer, dropdownWrapper, subcategoryIndex, selectedOptionsData);
                            if (categoryData['subcategories1'] !== null && !jQuery.isEmptyObject(categoryData['subcategories1'])) {
                                subcategory = subcategory.replace(replaceValue, replaceValue + "_sub");
                                addDMACategoryDropdowns(categoryData, subcategory, subcategoryContainer, dropdownWrapper, subcategoryIndex, selectedOptionsData);
                                setTimeout(function () {
                                    $(".mainWrapperClass .subcategory-container .dropdown-row div").each(function (index) {
                                        const id = $(this).attr("id");
                                        const selectedOptions = selectedOptionsData['Unique no'];
                                        const title = $(this).closest(".mainWrapperClass").find("h6").text();
                                        if (index !== 0 && id !== null && id !== undefined && id !== "" && title != undefined && !title.includes("Score Card") && !title.includes("Top Categories")) {
                                            if (Array.isArray(selectedOptions)) {
                                                selectedOptions.forEach(label => {
                                                    $("#" + id).jqxDropDownList('checkItem', label);
                                                });
                                            }
                                        }
                                    })
                                }, 200);
                            }
                        });
                    }

                    addDMACategoryDropdowns(categoryData, subcategory, subcategoryContainer, dropdownWrapper, subcategoryIndex, selectedOptionsData);
                    if (categoryData['subcategories1'] !== null && !jQuery.isEmptyObject(categoryData['subcategories1'])) {
                        subcategory = subcategory.replace("5.0", "5.0" + "_sub");
                        addDMACategoryDropdowns(categoryData, subcategory, subcategoryContainer, dropdownWrapper, subcategoryIndex, selectedOptionsData);
                    }
                });

            });

            $("#dialog1").html(formContainer);
            $("#dialog1").dialog({
                resizable: false,
                title: labelObject['Message'] != null ? labelObject['Message'] : 'DMA FORM',
//                modal: true,
                height: 500,
                width: 900,
                fluid: true,
                buttons: [
                    {
                        text: labelObject['Submit'] != null ? labelObject['Submit'] : 'Submit',
                        click: function () {
                            stopLoader();
                            let valid = true;
                            errorMessages = {};
                            let categoryCount = 0;
                            data['data'].forEach((categoryData) => {
                                categoryData.subcategories.forEach((subcategory, subcategoryIndex) => {
                                    const selectedOptions = selectedOptionsData[subcategory];
                                    const subcategoryContainer = $(formContainer.find(`.subcategory-container`)[categoryCount])
                                    let maxSelection = categoryData.maxSelections ? categoryData.maxSelections[subcategoryIndex] : 3;
                                    maxSelection = (subcategory.includes("5") && selectedOptions && selectedOptions.length) == 3 ? 3 : maxSelection
                                    if (!selectedOptions || selectedOptions.length === 0 || maxSelection === undefined && selectedOptions.length === 1 && subcategory && !(subcategory.includes("Unique no") || subcategory.includes("Top")) ||
                                            selectedOptions.length === 1 && subcategory && !subcategory.includes("Unique no")
                                            && maxSelection && selectedOptions.length !== maxSelection) {
                                        maxSelection = maxSelection != undefined ? maxSelection : "";
                                        var errorMessage = `Please select ${maxSelection} options.`;
                                        if (selectedOptions && selectedOptions.length == 1) {
                                            errorMessage = `Please select other than already unique checked`
                                        }
                                        if (subcategoryContainer.find('.error-message').length == 0) {
                                            const errorDiv = $(`<div class="error-message" style="color: red;"></div>`);

                                            errorDiv.text(errorMessage);
                                            if (subcategoryContainer.length === 0) {
                                                $(".kdsDropdownWrapper").append(errorDiv);
                                            }
                                            subcategoryContainer.append(errorDiv);

                                            categoryCount++;
                                        } else {

                                            subcategoryContainer.find('.error-message').text(errorMessage);
                                            categoryCount++;
                                        }
                                        valid = false;
                                    } else {
                                        $(".kdsDropdownWrapper").find('.error-message').text();
                                        subcategoryContainer.find('.error-message').text("");
                                        categoryCount++;
                                    }
                                });
                            });


                            if (valid) {
//                                var kdsArray = [];
                                var kdsArrayString = "";

                                Object.keys(selectedOptionsData).forEach((subcategory) => {
                                    const match = subcategory.match(/\d+(?:\.\d+)?/);
                                    const categoryNum = match ? match[0] : null;

                                    if (subcategory.includes("5") && !subcategory.includes("_sub")) {
                                        const selectedValue = selectedOptionsData[subcategory];
                                        const subKey = Object.keys(selectedOptionsData).find(
                                                key => key.includes(categoryNum + "_sub")
                                        );
                                        const subValue = subKey ? selectedOptionsData[subKey] : "";
                                        selectedValue.push(subValue[1]);
                                        if (kdsArrayString) {
                                            kdsArrayString += ',["' + selectedValue + '"]';
                                        } else {
                                            kdsArrayString = '["' + selectedValue + '"]';
                                        }
                                    }
                                });

                                selectedOptionsData['5.0 Detailed Data Analysis on Reference Data'] = kdsArrayString;

                                submitDMAFormData(gridId, tabId, flag, reportGridId, selectedOptionsData);
                            } else {
                                return false;
                            }



                            $(this).empty();
                            $(this).dialog('close');
                        }
                    }
                ],
                open: function () {
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").addClass("visionSearchSaveDialog wbconfigWrapper");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui) {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
        },
        error: function (xhr, status, error) {
            console.error("An error occurred: " + error);
            alert("There was an error fetching the data.");
        }
    });
}

function addDMACategoryDropdowns(categoryData, subcategory, subcategoryContainer, dropdownWrapper, subcategoryIndex, selectedOptionsData) {
    let dropDownWidth = '400px';
    if (categoryData['subcategories1'] !== null && !jQuery.isEmptyObject(categoryData['subcategories1'])) {
        dropDownWidth = '200px';
    }
    const dropdownRow = $('<div class="dropdown-row" ></div>');
    dropdownWrapper.append(dropdownRow);

    const dropdownId = `dropdown-${Date.now()}-${subcategoryIndex}`;
    const dropdownContainer = $(`<div id="${dropdownId}" class="dropdown-container" style="margin-left: 10px;"></div>`);
    dropdownRow.append(dropdownContainer);

    const maxSelections = categoryData.maxSelections ? categoryData.maxSelections[subcategoryIndex] : 3;

    dropdownContainer.jqxDropDownList({
        source: categoryData.dropdownData = categoryData.dropdownData.filter(
                item => item !== "BATCH_ID" && item !== "RESPONSE_TITLE" && item !== "AUDIT_ID"
        )
        ,
        theme: 'energyblue',
        checkboxes: true,
        width: dropDownWidth,
        height: '35px',
        placeHolder: "Select Options",
        filterable: true,
        autoDropDownHeight: false, // keep it fixed
        dropDownHeight: 200,
        enableBrowserBoundsDetection: true
    });



    dropdownContainer.on('checkChange', function (event) {
        const value = event.args.value;
        const itemValue = event.args.value;
        const checked = event.args.checked;
        const dropdownContainer = $(this);
        const selectIndex = event.args.index;
        const selectedItems = dropdownContainer.jqxDropDownList('getCheckedItems');
        const selectedLabels = selectedItems.map(item => item.label);

        const selectedOptionsObject = selectedOptionsData || {};
        if (selectedItems.length > maxSelections) {
            const lastSelectedIndex = selectedItems[selectedItems.length - 1].index;
            dropdownContainer.jqxDropDownList('uncheckIndex', lastSelectedIndex);
            alert(`You can select a maximum of ${maxSelections} options for this dropdown.`);
            return;
        }
        if (!checked && Array.isArray(selectedOptionsObject['Unique no']) &&
                selectedOptionsObject['Unique no'].includes(itemValue) && subcategory !== "Unique no") {
            dropdownContainer.jqxDropDownList('checkItem', itemValue);
            console.log(`${itemValue} is restricted from deselection.`);
        }


        if (!Array.isArray(selectedOptionsObject[subcategory]) || Array.isArray(selectedOptionsObject[subcategory])) {
            selectedOptionsObject[subcategory] = [];

        }
        if (subcategory === "Unique no") {
            if (!$("#dmaUniqueColumn").length) {
                $("<input>", {
                    type: "hidden",
                    id: "dmaUniqueColumn"
                }).appendTo("body");
            }
            $("#dmaUniqueColumn").val(itemValue);
            $(".mainWrapperClass .subcategory-container .dropdown-row div").each(function (index) {
                const id = $(this).attr("id");
                const title = $(this).closest(".mainWrapperClass").find("h6").text();
                if (index !== 0 && id !== null && id !== undefined && id !== "" && title != undefined && !title.includes("Score Card") && !title.includes("Top Categories")) {
                    if (Array.isArray(selectedLabels) && checked) {
                        selectedLabels.forEach(label => {
                            $("#" + id).jqxDropDownList('checkItem', label);
                        });
                    } else {
                        $("#" + id).jqxDropDownList('uncheckItem', value);
                    }
                }
            })
        }

        selectedOptionsObject[subcategory].push(...new Set(selectedLabels));


        console.log('Updated selectedOptionsData:', selectedOptionsData);
    });
}
function submitDMAFormData(gridId, tabId, flag, reportGridId, selectedOptionsData) {
    var columnData = [];
    showLoader();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    var $tabElement = $("#" + tabId);
    if (fioriThemeCheck) {
        try {
            $(".allTabListMainWrapper .fioriformTabUlListclass").find("li").removeClass("fioriHighlightTab");
            document.querySelectorAll('.visionRegisterMaterialMainWrapper section').forEach(el => {
                el.style.display = 'none';
                $(event.currentTarget).addClass("fioriHighlightTab");
            });
        } catch (e) {

        }
    }
    var clickedFlag = $("#" + tabId).attr("clicked");
    if (flag == "N" || clickedFlag != "Y") {
        $("#" + tabId).attr("clicked", "Y");
        if (flag != "Y") {
            var cols = $("#" + gridId).jqxGrid("columns").records;
            cols.forEach(function (col) {
                if (col.text && col.text != "BATCH_ID" && col.text != "RESPONSE_TITLE") {
                    var datafield = col.datafield;
                    columnData.push(datafield.toUpperCase().replace("/", "_"));
                }
            });
        }

        var columnDataStr = columnData.join(",");
        $.ajax({
            async: true,
            url: "getDMAReportData",
            data: {
                columnArray: columnDataStr,
                flag: flag,
                tabId: tabId,
                responseId: $("#drmResponseId").val(),
                batchId: $("#dmabatchId").val(),
                gridId: gridId,
                reportGridId: reportGridId,
                columnDataStr: columnDataStr,
                selectedOptionsData: JSON.stringify(selectedOptionsData),
                fioriThemeCheck: fioriThemeCheck,
                tableName: $("#tableName").val(),

            },
            dataType: 'json',
            cache: false,
            success: function (data) {
                stopLoader();
                if (data && !jQuery.isEmptyObject(data)) {
                    if (flag === "Y" && tabId != 'scorecards') {
                        try {
                            var pythonData = data['pythonData'];
                            var errorMesg = pythonData[0]['errorMessage'];
                            if (errorMesg != null && errorMesg != undefined && errorMesg != "" && errorMesg != "null") {
                                showMesg(errorMesg);
                            }
                        } catch (e) {

                        }
                        $("#" + tabId).show();
                        $tabElement.html("");
                        pythonData.forEach(function (val, index) {
                            var htmlString = val['result'];
                            $tabElement.append(htmlString);
                            var lArray = val['labelsArr'];
                            var vArr = val['valuesArr'];
                            var divIdCount = val['divIdCount'];
                            if (lArray != null && !jQuery.isEmptyObject(lArray) && lArray.length > 0 && vArr != null && !jQuery.isEmptyObject(vArr) && vArr.length > 0) {
                                var chartDta = [{
                                        x: lArray,
                                        y: vArr,
                                        type: 'bar',
                                        text: vArr,
                                        orientation: 'v',
                                    }];

                                var layout = {
                                    height: 350,
                                    width: 400,
                                    margin: {
                                        l: 50,
                                        r: 50,
                                        t: 50,
                                        b: 50,

                                    }
                                };
                                var config = {
                                    displayModeBar: false
                                };

                                Plotly.newPlot("dataHealthReportChartDiv" + divIdCount, chartDta, layout, config);
                                showChartLabelsonHover('dataHealthReportChartDiv' + divIdCount);
                            }

                            //var colors = ['#2F6345', '#40875E', '#58B07E', '#C48C00', '#F0AB00', '#FFBE1D', '#FFCC4B', '#827E32', '#A8A240', '#C5C169'];
                            //positionChartLegend("pie", 'dataHealthReportChartDiv'+index, colors, labelArray, chartData, layout,config);
                        });
                    } else if (flag === "Y" && tabId === 'scorecards') {
                        var pythonData = data['pythonData'];
                        try {
                            var errorMesg = pythonData[0]['errorMessage'];
                            if (errorMesg != null && errorMesg != undefined && errorMesg != "" && errorMesg != "null") {
                                showMesg(errorMesg);
                            }
                        } catch (e) {

                        }
                        $tabElement.html(data['pythonData'][0]['result']);
                        $("#" + tabId).show();

                        var pythonChartData = []; // Initialize pythonChartData array outside the loop

                        pythonData.forEach(function (val) {
                            if (val['scoreCardObj'] && val['scoreCardLabelsObj']) { // Ensure both labelsArr and valuesArr exist

                                var scorecardObj = val['scoreCardObj'];
                                $.each(scorecardObj, function (key, keyval) {
                                    var chartDataItem = {
                                        labelsArr: Object.values(val['scoreCardLabelsObj'])[0],
                                        valuesArr: keyval,
                                        title: key
                                    };
                                    pythonChartData.push(chartDataItem);
                                });
                            }
                        });

                        // Function to determine color based on value
                        function getColor(value) {
                            if (value < 50) {
                                return '#FF0000';
                            } else if (value <= 80) { // Adjusted the range to cover 60 - 79
                                return '#FFFF00';
                            } else {
                                return '#008000';
                            }
                        }

                        pythonChartData.forEach(function (val, i) {
                            var labelArray = val['labelsArr'];
                            var valuesArr = val['valuesArr'];
                            var title = val['title'];

                            var chartData = [];

                            // Dynamic Data trace
                            var dynamicTrace = {
                                type: 'scatterpolar', // Radar chart type
                                r: valuesArr, // The values array
                                theta: labelArray, // The labels array
                                fill: 'toself',
                                fillcolor: 'rgba(255, 0, 63, 0.3)', // Semi-transparent fill color
                                marker: {
                                    //color: valuesArr.map(getColor), // Color markers based on values
                                    color: 'rgba(255, 0, 63, 1)',
                                    size: 8 // Marker size
                                },
                                name: 'Actual' // Label for dynamic trace
                            };
                            chartData.push(dynamicTrace);

                            // Static Data Quality Metrics trace
                            var staticLabels = val['labelsArr'];
                            var staticValues = [];
                            for (var j = 0; j < staticLabels.length; j++) {
                                var stageValues = [80, 95, 98, 97, 96, 99];
                                staticValues.push(stageValues[i]);
                            }
                            // Replace these with dynamic values if necessary
                            var staticTrace = {
                                type: 'scatterpolar',
                                r: staticValues, // The static score values
                                theta: staticLabels, // The static labels
                                fill: 'toself',
                                fillcolor: 'rgba(56, 226, 56, 0.3)', // Semi-transparent fill color
                                marker: {
                                    color: 'rgba(56, 226, 56, 1)' // Marker color
                                },
                                name: 'To Be' // Label for static trace
                            };
                            chartData.push(staticTrace);

                            var layout = {
                                polar: {
                                    radialaxis: {
                                        visible: true,
                                        range: [0, 100] // Adjust range if necessary
                                    }
                                },
                                title: title,
                                showlegend: true, // Show legend to distinguish between traces
                                width: 350,
                                height: 300,
                                margin: {
                                    l: 50,
                                    r: 20,
                                    t: 40,
                                    b: 30
                                }
                            };
                            var config = {
                                displayModeBar: false
                            };

                            Plotly.newPlot('scoreCardChartDiv' + i, chartData, layout, config);
                            showChartLabelsonHover('scoreCardChartDiv' + i);
                        });
                    } else {
                        var accordionHtml = data['htmlString'];
                        var responseId = data['responseId'];
                        $("#drmResponseId").remove();
                        $("body").append("<input type='hidden' id='drmResponseId' value='" + responseId + "'/>");
                        $("#dxpFormContent").html("<div id='dmaReportView' class='dmaReportsClass'></div>");
                        $("#dmaReportView").html(accordionHtml);
                        $("#" + tabId).show();
                        showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent', 'DMA Form', 'N');
                        if (fioriThemeCheck) {
                            try {
                                fioriTabSroller();
                                const dmaButtons = document.querySelectorAll('[data-toggle="dma-collapse"]');
                                dmaButtons.forEach(button => {
                                    button.addEventListener('click', () => {
                                        const targetId = button.getAttribute('data-target');
                                        const target = document.querySelector(targetId);
                                        $(".allTabListMainWrapper .fioriformTabUlListclass").find("li").removeClass("fioriHighlightTab");
                                        $(event.currentTarget).addClass("fioriHighlightTab");
                                        document.querySelectorAll('.visionRegisterMaterialMainWrapper section').forEach(el => {
                                            if (el !== target)
                                                el.style.display = 'none';
                                        });
                                        target.style.display = 'block';
                                    });
                                });
                                if (dmaButtons.length > 0) {
                                    dmaButtons[0].click();
                                }
                            } catch (e) {

                            }
                        }

                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                stopLoader();
                console.error("Error fetching DMA report data: ", textStatus, errorThrown);
            }
        });
    } else if ($tabElement.children().length > 0) {
        if (fioriThemeCheck) {
            $tabElement.show();
            stopLoader();
        } else {
            $tabElement.toggle();
            stopLoader();
        }

    }
}

function showDMAReportPage(gridId, tabId, flag, reportGridId) {
    showLoader();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {
        try {
            $(".allTabListMainWrapper .fioriformTabUlListclass").find("li").removeClass("fioriHighlightTab");
            document.querySelectorAll('.visionRegisterMaterialMainWrapper section').forEach(el => {
                el.style.display = 'none';
                $(event.currentTarget).addClass("fioriHighlightTab");
            });
        } catch (e) {

        }
    }
    $.ajax({
        async: true,
        url: "getDMAReportData",
        data: {

            flag: "S",

        },
        dataType: 'json',
        cache: false,
        success: function (data) {
            stopLoader();
            if (data && !jQuery.isEmptyObject(data)) {
                if (flag === "Y" && tabId != 'scorecards') {
                    var pythonData = data['pythonData'];
                    $("#" + tabId).show();
                    pythonData.forEach(function (val, index) {
                        var htmlString = val['result'];
                        $tabElement.append(htmlString);
                        var lArray = val['labelsArr'];
                        var vArr = val['valuesArr'];
                        var divIdCount = val['divIdCount'];
                        if (lArray != null && !jQuery.isEmptyObject(lArray) && lArray.length > 0 && vArr != null && !jQuery.isEmptyObject(vArr) && vArr.length > 0) {
                            var chartDta = [{
                                    x: lArray,
                                    y: vArr,
                                    type: 'bar',
                                    text: vArr,
                                    orientation: 'v',
                                }];

                            var layout = {
                                height: 350,
                                width: 400,
                                margin: {
                                    l: 50,
                                    r: 50,
                                    t: 50,
                                    b: 50,

                                }
                            };
                            var config = {
                                displayModeBar: false
                            };

                            Plotly.newPlot("dataHealthReportChartDiv" + divIdCount, chartDta, layout, config);
                            showChartLabelsonHover('dataHealthReportChartDiv' + divIdCount);
                        }

                        //var colors = ['#2F6345', '#40875E', '#58B07E', '#C48C00', '#F0AB00', '#FFBE1D', '#FFCC4B', '#827E32', '#A8A240', '#C5C169'];
                        //positionChartLegend("pie", 'dataHealthReportChartDiv'+index, colors, labelArray, chartData, layout,config);
                    });
                } else if (flag === "Y" && tabId === 'scorecards') {
                    var pythonData = data['pythonData'];
                    $tabElement.append(data['pythonData'][0]['result']);
                    $("#" + tabId).show();

                    var pythonChartData = []; // Initialize pythonChartData array outside the loop

                    pythonData.forEach(function (val) {
                        if (val['scoreCardObj'] && val['scoreCardLabelsObj']) { // Ensure both labelsArr and valuesArr exist

                            var scorecardObj = val['scoreCardObj'];
                            $.each(scorecardObj, function (key, keyval) {
                                var chartDataItem = {
                                    labelsArr: val['scoreCardLabelsObj']['Material Type'],
                                    valuesArr: keyval,
                                    title: key
                                };
                                pythonChartData.push(chartDataItem);
                            });
                        }
                    });

                    // Function to determine color based on value
                    function getColor(value) {
                        if (value < 50) {
                            return '#FF0000';
                        } else if (value <= 80) { // Adjusted the range to cover 60 - 79
                            return '#FFFF00';
                        } else {
                            return '#008000';
                        }
                    }

                    pythonChartData.forEach(function (val, i) {
                        var labelArray = val['labelsArr'];
                        var valuesArr = val['valuesArr'];
                        var title = val['title'];

                        var chartData = [];

                        // Dynamic Data trace
                        var dynamicTrace = {
                            type: 'scatterpolar', // Radar chart type
                            r: valuesArr, // The values array
                            theta: labelArray, // The labels array
                            fill: 'toself',
                            fillcolor: 'rgba(255, 0, 63, 0.3)', // Semi-transparent fill color
                            marker: {
                                //color: valuesArr.map(getColor), // Color markers based on values
                                color: 'rgba(255, 0, 63, 1)',
                                size: 8 // Marker size
                            },
                            name: 'Actual' // Label for dynamic trace
                        };
                        chartData.push(dynamicTrace);

                        // Static Data Quality Metrics trace
                        var staticLabels = val['labelsArr'];
                        var staticValues = [];
                        for (var j = 0; j < staticLabels.length; j++) {
                            var stageValues = [80, 95, 98, 97, 96, 99];
                            staticValues.push(stageValues[i]);
                        }
                        // Replace these with dynamic values if necessary
                        var staticTrace = {
                            type: 'scatterpolar',
                            r: staticValues, // The static score values
                            theta: staticLabels, // The static labels
                            fill: 'toself',
                            fillcolor: 'rgba(56, 226, 56, 0.3)', // Semi-transparent fill color
                            marker: {
                                color: 'rgba(56, 226, 56, 1)' // Marker color
                            },
                            name: 'To Be' // Label for static trace
                        };
                        chartData.push(staticTrace);

                        var layout = {
                            polar: {
                                radialaxis: {
                                    visible: true,
                                    range: [0, 100] // Adjust range if necessary
                                }
                            },
                            title: title,
                            showlegend: true, // Show legend to distinguish between traces
                            width: 350,
                            height: 300,
                            margin: {
                                l: 50,
                                r: 20,
                                t: 40,
                                b: 30
                            }
                        };
                        var config = {
                            displayModeBar: false
                        };

                        Plotly.newPlot('scoreCardChartDiv' + i, chartData, layout, config);
                        showChartLabelsonHover('scoreCardChartDiv' + i);
                    });
                } else {
                    var accordionHtml = data['htmlString'];
                    var responseId = data['responseId'];
                    $("#drmResponseId").remove();
                    $("body").append("<input type='hidden' id='drmResponseId' value='" + responseId + "'/>");
                    $("#dxpFormContent").html("<div id='dmaReportView' class='dmaReportsClass'></div>");
                    $("#dmaReportView").html(accordionHtml);
                    $("#" + tabId).show();
                    showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent', 'DMA Form', 'N');
                    if (fioriThemeCheck) {
                        try {
                            fioriTabSroller();
                            const dmaButtons = document.querySelectorAll('[data-toggle="dma-collapse"]');
                            dmaButtons.forEach(button => {
                                button.addEventListener('click', () => {
                                    const targetId = button.getAttribute('data-target');
                                    const target = document.querySelector(targetId);
                                    $(".allTabListMainWrapper .fioriformTabUlListclass").find("li").removeClass("fioriHighlightTab");
                                    $(event.currentTarget).addClass("fioriHighlightTab");
                                    document.querySelectorAll('.visionRegisterMaterialMainWrapper section').forEach(el => {
                                        if (el !== target)
                                            el.style.display = 'none';
                                    });
                                    target.style.display = 'block';
                                });
                            });
                            if (dmaButtons.length > 0) {
                                dmaButtons[0].click();
                            }
                        } catch (e) {

                        }
                    }
                    var data = [
                        {
                            x: ['Total Equipment Numbers Received', 'Equipment BoM Availability', 'Equipment BoM Not Availabile'],
                            y: [11000, 7865, 3135],
                            type: 'bar'
                        }
                    ];
                    var layout = {
                        title: "Report On Equipment No's",
                        height: 400,
                        width: 500
                                //showlegend: true
                    }

                    Plotly.newPlot('analysisEquipmentId', data, layout);
                    var data = [
                        {
                            x: ['Total BoM Material Linkage', 'Unique Equipment Nos', 'Unique Tag Nos', 'Unique Material Nos'],
                            y: [62235, 11024, 11024, 16530],
                            type: 'bar',
                            //showlegend: true
                        }
                    ];
                    var layout = {
                        title: "Report On BOM",
                        height: 400,
                        width: 500
                    }

                    Plotly.newPlot('reportOnBoM', data, layout);
                    var data = [
                        {
                            x: ['Equipment criticality indicator A', 'Equipment criticality indicator B', 'Equipment criticality indicator C'],
                            y: [4689, 4561, 1750],
                            type: 'bar'
                        }
                    ];
                    var layout = {
                        title: "Report On Equipment Criticality",
                        height: 400,
                        width: 500
                                // showlegend: true
                    }

                    Plotly.newPlot('eqipmentCriticality', data, layout);
                    var data = [
                        {
                            labels: ['EHSS', 'NON-EHSS'],
                            values: [3771, 7229],
                            type: 'pie'
                        }
                    ];
                    var layout = {
                        title: "Report On EHSS Criticality",
                        showlegend: true,
                        height: 400,
                        width: 500
                    }

                    Plotly.newPlot('ehhsReportId', data, layout);
                    var data = [
                        {
                            labels: ['Total Equipment Descriptions Received', 'Items with Manufacturer Names', 'Items with Part Numbers', 'Items with Model Numbers', 'Items with Serial Numbers'],
                            values: [11000, 8711, 2649, 5410, 2117],
                            type: 'pie'
                        }
                    ];
                    var layout = {
                        title: "Report On Reference Data",
                        showlegend: true
                    }

                    Plotly.newPlot('referenceData', data, layout);
                    var data = [
                        {
                            x: ["Material Type 'ERSA'", "Material Type 'FHMI'", "Material Type 'NLAG'", "Material Type 'ROH'"],
                            y: [15944, 149, 214, 5],
                            type: 'bar'
                        }
                    ];
                    var layout = {
                        title: "Report On Material Types",
                        height: 400,
                        width: 500
                                // showlegend: true
                    }

                    Plotly.newPlot('reportOnMaterialType', data, layout);
                    var data = [
                        {
                            x: ["Total BoM Material Numbers Received'", "Unique Material numbers"],
                            y: [62235, 16530],
                            type: 'bar'
                        }
                    ];
                    var layout = {
                        title: "Report On Material No's",
                        height: 400,
                        width: 500
                                // showlegend: true
                    }

                    Plotly.newPlot('reportOnMaterialNo', data, layout);

                    var data = [
                        {
                            x: ["Total Items Received with Descriptions", "Unique Descriptions", "Potential Duplicates W.r.t Descriptions"],
                            y: [16530, 14293, 2237],
                            type: 'bar'
                        }
                    ];
                    var layout = {
                        title: "Report on Descriptions",
                        height: 400,
                        width: 500
                                // showlegend: true
                    }

                    Plotly.newPlot('reportOnMaterialDescription', data, layout);

                    var data = [
                        {
                            x: ["Length of text between 0-10 characters", "Length of text between 11-20 characters", "Length of text between 21-30 characters", "Length of text between 31-40 characters"],
                            y: [63, 554, 2202, 13711],
                            type: 'bar'
                        }
                    ];
                    var layout = {
                        title: "Report on Descriptions length",
                        height: 400,
                        width: 500
                                // showlegend: true
                    }

                    Plotly.newPlot('reportOnMaterialDescriptionLength', data, layout);


                    var data = [
                        {
                            x: [
                                "O RING",
                                "KIT, VALVE REPAIR",
                                "GASKET, PRE-CUT",
                                "GASKET, SPIRAL WOUND",
                                "DISC, VALVE",
                                "BREAKER, CIRCUIT",
                                "SPRING, COMPRESSION",
                                "PACKING",
                                "SEAT, VALVE",
                                "KIT, PUMP REPAIR"
                            ],
                            y: [677, 603, 602, 362, 305, 295, 291, 289, 271, 248],
                            type: 'bar'
                        }
                    ];
                    var layout = {
                        title: "Report on Top 10 Commodities",
                        height: 400,
                        width: 500

                    }

                    Plotly.newPlot('topCommodities', data, layout);
                    var data = [
                        {
                            x: ["PC", "EA", "KIT", "ST", "SE", "ASY", "M", "KG", "M3", "ROL"],
                            y: [7974, 5095, 1133, 844, 677, 578, 73, 34, 16, 14],
                            type: 'bar'
                        }
                    ];
                    var layout = {
                        title: "Report on Top 10 Uom's",
                        height: 400,
                        width: 500

                    }

                    Plotly.newPlot('topUoms', data, layout);
                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
            console.error("Error fetching DMA report data: ", textStatus, errorThrown);
        }
    });

}
//DMA REPORTS CODE END
//SPELL checker code start

function checkSpellingInText(id, sequence, event) {

    if (event.key === 'Enter')
        event.preventDefault();
    const editor = document.getElementById(id);
    if (!editor)
        return;

//    const editorData = {
//        lastSpellCheckResult: null,
//        activeMisspelledWord: null,
//        ignoredWords: new Set(),
//        debounceTimer: null
//    };

    const editorData = {
        lastSpellCheckResult: null,
        activeMisspelledWord: null,
        ignoredWords: new Set(),
        debounceTimer: null,
        isReplacing: false // Flag to track replacement state
    };

    function debounce(func, wait) {
        return function executedFunction(...args) {
            clearTimeout(editorData.debounceTimer);
            editorData.debounceTimer = setTimeout(() => {
                func(...args);
            }, wait);
        };
    }

    function saveCursorPosition() {
        const selection = window.getSelection();
        if (selection.rangeCount === 0) {
            return null;
        }

        const range = selection.getRangeAt(0);
        const preRange = range.cloneRange();
        preRange.selectNodeContents(editor);
        preRange.setEnd(range.startContainer, range.startOffset);
        return {
            start: preRange.toString().length,
            end: preRange.toString().length + range.toString().length
        };
    }

    function restoreCursorPosition(position) {
        if (!position)
            return;

        let charIndex = 0;
        const range = document.createRange();
        range.setStart(editor, 0);
        range.collapse(true);

        const nodeStack = [editor];
        let node;
        let foundStart = false;
        let stop = false;

        while (!stop && (node = nodeStack.pop())) {
            if (node.nodeType === Node.TEXT_NODE) {
                const nextCharIndex = charIndex + node.length;
                if (!foundStart && position.start >= charIndex && position.start <= nextCharIndex) {
                    range.setStart(node, position.start - charIndex);
                    foundStart = true;
                }
                if (foundStart && position.end >= charIndex && position.end <= nextCharIndex) {
                    range.setEnd(node, position.end - charIndex);
                    stop = true;
                }
                charIndex = nextCharIndex;
            } else {
                let i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function performSpellCheck() {
        const text = editor.textContent;

        if (!text || text.trim().length < 3) {
            clearHighlights();
            editorData.lastSpellCheckResult = null;
            return;
        }
        showLoader();
        $.ajax({
            url: 'spellcheck',
            method: 'POST',
            contentType: 'application/json',
            data: text,
            success: function (response) {
                stopLoader();
                try {
                    let responseJSON = typeof response === 'string' ? JSON.parse(response) : response;

                    editorData.lastSpellCheckResult = {
                        editorId: id,
                        misspelledFields: responseJSON.matches.map(match => ({
                                offset: match.offset,
                                length: match.length,
                                suggestions: match.replacements.map(rep => rep.value.toUpperCase()),
                                originalText: text.substring(match.offset, match.offset + match.length)
                            }))
                    };
                    highlightMisspelledWords();
                } catch (e) {
                    console.error('Error processing response:', e);
                    showErrorDialog('Unknown error while checking spelling');
                }
            },
            error: function (xhr, status, error) {
                stopLoader();
                console.error('Spell check failed:', error);
                editorData.lastSpellCheckResult = null;
                clearHighlights();
            }
        });
    }

    const debouncedSpellCheck = debounce(performSpellCheck, 500);

    function highlightMisspelledWords() {
        const cursorPosition = saveCursorPosition();
        clearHighlights();

        if (!editorData.lastSpellCheckResult || editorData.lastSpellCheckResult.misspelledFields.length === 0) {
            restoreCursorPosition(cursorPosition);
            return;
        }

        let text = editor.textContent;
        let html = text;

        editorData.lastSpellCheckResult.misspelledFields.sort((a, b) => b.offset - a.offset);

        const wordMap = new Map();
        editorData.lastSpellCheckResult.misspelledFields.forEach(word => {
            const key = `${word.offset}-${word.length}`;
            const wordText = word.originalText.toLowerCase();
            if (!wordMap.has(key) && !editorData.ignoredWords.has(wordText)) {
                wordMap.set(key, word);
            }
        });

        wordMap.forEach(word => {
            const start = parseInt(word.offset);
            const end = start + parseInt(word.length);
            if (start >= 0 && end <= text.length) {
                const wordText = text.substring(start, end);
                const highlighted = `<span class="misspelled-word" data-offset="${start}" data-length="${word.length}" data-suggestions="${word.suggestions.join(',')}">${wordText}</span>`;
                html = html.substring(0, start) + highlighted + html.substring(end);
            }
        });

        editor.innerHTML = html;
        restoreCursorPosition(cursorPosition);
    }

    function clearHighlights() {
        const cursorPosition = saveCursorPosition();
        const spans = editor.querySelectorAll('.misspelled-word');
        spans.forEach(span => {
            const textNode = document.createTextNode(span.textContent);
            span.parentNode.replaceChild(textNode, span);
        });
        editor.normalize();
        restoreCursorPosition(cursorPosition);
    }

    function showErrorDialog(message) {
        $("#dialog1").html(message);
        $("#dialog1").dialog({
            resizable: false,
            title: labelObject['Message'] || 'Message',
            modal: true,
            width: 300,
            height: 135,
            fluid: true,
            buttons: [{
                    text: labelObject['Yes'] || 'Yes',
                    click: function () {
                        $(this).html("").dialog("close").dialog("destroy");
                    }
                }],
            open: function () {
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
            },
            beforeClose: function () {
                $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
            }
        });
    }

    function showContextMenu(x, y, suggestions) {
        const menuId = `spellcheck-context-menu-${id}`;
        removeContextMenu();

        const menu = document.createElement('div');
        menu.id = menuId;
        menu.className = 'spellcheck-context-menu';

        Object.assign(menu.style, {
            position: 'fixed',
            left: `${x}px`,
            top: `${y}px`,
            background: 'white',
            border: '1px solid #ddd',
            boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
            zIndex: '1000',
            minWidth: '150px',
            maxHeight: '200px',
            overflowY: 'auto'
        });

        if (suggestions && suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const item = createMenuItem(suggestion, () => replaceWord(suggestion));
                menu.appendChild(item);
            });
            menu.appendChild(createDivider());
        }

        const ignoreItem = createMenuItem('Ignore', ignoreWord);
        menu.appendChild(ignoreItem);

        const ignoreAllItem = createMenuItem('Ignore All', ignoreAllWords);
        menu.appendChild(ignoreAllItem);

        document.body.appendChild(menu);
    }

    function createMenuItem(text, onClick) {
        const item = document.createElement('div');
        item.className = 'spellcheck-menu-item';
        item.textContent = text;
        Object.assign(item.style, {
            padding: '8px 12px',
            cursor: 'pointer'
        });
        item.onclick = () => {
            onClick();
            removeContextMenu();
        };
        item.onmouseenter = () => item.style.background = '#f0f0f0';
        item.onmouseleave = () => item.style.background = 'white';
        return item;
    }

    function createDivider() {
        const divider = document.createElement('div');
        divider.className = 'spellcheck-menu-divider';
        divider.style.borderTop = '1px solid #eee';
        return divider;
    }

    function removeContextMenu() {
        const existingMenu = document.querySelector(`#spellcheck-context-menu-${id}`);
        if (existingMenu) {
            existingMenu.remove();
        }
    }

    function ignoreWord() {
        if (!editorData.activeMisspelledWord || !editorData.lastSpellCheckResult)
            return;

        const offset = parseInt(editorData.activeMisspelledWord.dataset.offset);
        editorData.lastSpellCheckResult.misspelledFields = editorData.lastSpellCheckResult.misspelledFields.filter(
                word => parseInt(word.offset) !== offset
        );

        editorData.activeMisspelledWord = null;
        highlightMisspelledWords();
    }

    function ignoreAllWords() {
        if (!editorData.activeMisspelledWord || !editorData.lastSpellCheckResult)
            return;

        const wordText = editorData.activeMisspelledWord.textContent.toLowerCase();
        editorData.ignoredWords.add(wordText);

        editorData.lastSpellCheckResult.misspelledFields = editorData.lastSpellCheckResult.misspelledFields.filter(
                word => {
                    const currentWord = word.originalText.toLowerCase();
                    return currentWord !== wordText;
                }
        );

        editorData.activeMisspelledWord = null;
        highlightMisspelledWords();
    }

//    function replaceWord(suggestion) {
//        if (!editorData.activeMisspelledWord || !editorData.lastSpellCheckResult)
//            return;
//
//        const offset = parseInt(editorData.activeMisspelledWord.dataset.offset);
//        const oldLength = parseInt(editorData.activeMisspelledWord.dataset.length);
//        const lengthDifference = suggestion.length - oldLength;
//
//        const range = document.createRange();
//        range.selectNodeContents(editorData.activeMisspelledWord);
//        range.deleteContents();
//        range.insertNode(document.createTextNode(suggestion));
//        editor.normalize();
//
//        editorData.lastSpellCheckResult.misspelledFields = editorData.lastSpellCheckResult.misspelledFields
//                .map(word => {
//                    const wordOffset = parseInt(word.offset);
//                    if (wordOffset > offset) {
//                        return {...word, offset: wordOffset + lengthDifference};
//                    }
//                    return word;
//                })
//                .filter(word => parseInt(word.offset) !== offset);
//
//        const newCursorPosition = {
//            start: offset + suggestion.length,
//            end: offset + suggestion.length
//        };
//
//        editorData.activeMisspelledWord = null;
//        restoreCursorPosition(newCursorPosition);
//        debouncedSpellCheck();
//    }

    function replaceWord(suggestion) {
        if (!editorData.activeMisspelledWord || !editorData.lastSpellCheckResult)
            return;

        const cursorPosition = saveCursorPosition();
        const offset = parseInt(editorData.activeMisspelledWord.dataset.offset);
        const oldLength = parseInt(editorData.activeMisspelledWord.dataset.length);
        const lengthDifference = suggestion.length - oldLength;

        const range = document.createRange();
        range.selectNodeContents(editorData.activeMisspelledWord);
        range.deleteContents();
        range.insertNode(document.createTextNode(suggestion));
        editor.normalize();

        editorData.lastSpellCheckResult.misspelledFields = editorData.lastSpellCheckResult.misspelledFields
                .map(word => {
                    const wordOffset = parseInt(word.offset);
                    if (wordOffset > offset) {
                        return {...word, offset: wordOffset + lengthDifference};
                    }
                    return word;
                })
                .filter(word => parseInt(word.offset) !== offset);

        highlightMisspelledWords();

        const newCursorPosition = {
            start: offset + suggestion.length,
            end: offset + suggestion.length
        };
        restoreCursorPosition(newCursorPosition);

        editorData.activeMisspelledWord = null;
    }

    if (!document.getElementById('spellcheck-style')) {
        const spellCheckCSS = `
            .misspelled-word {
                border-bottom: 2px dotted red;
                cursor: pointer;
                position: relative;
            }
            .misspelled-word:hover {
                background-color: #fff0f0;
            }
            .spellcheck-context-menu {
                max-height: 200px;
                overflow-y: auto;
            }
            .spellcheck-menu-item:hover {
                background-color: #f0f0f0;
            }
            .spellcheck-menu-divider {
                border-top: 1px solid #eee;
                margin: 4px 0;
            }`;
        const style = document.createElement('style');
        style.id = 'spellcheck-style';
        style.textContent = spellCheckCSS;
        document.head.appendChild(style);
    }

    editor.addEventListener('contextmenu', function (e) {
        const target = e.target;
        if (target.classList.contains('misspelled-word')) {
            e.preventDefault();
            editorData.activeMisspelledWord = target;
            showContextMenu(
                    e.clientX,
                    e.clientY,
                    target.dataset.suggestions.split(',')
                    );
        }
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.spellcheck-context-menu') &&
                !e.target.classList.contains('misspelled-word')) {
            removeContextMenu();
        }
    });

    editor.addEventListener('keydown', debouncedSpellCheck);
    editor.addEventListener('paste', debouncedSpellCheck);
    editor.addEventListener('input', debouncedSpellCheck);

    if (editor.textContent.trim().length > 0) {
        debouncedSpellCheck();
    }
}
//SPELL checker code end


function getAPICheckResponse(tableName, gridId, flag, subFlag) {
    var title;
    var formLabels;
    try {

        title = $(event.currentTarget).attr("data-tab");
        formLabels = $(event.currentTarget).attr("formLabels");
        $(".idqopstab-container .tab").removeClass("active");
        $(event.currentTarget).addClass("active");

        // Check if current target has class "active"
        if (!$(event.currentTarget).hasClass("active")) {
            $(".idqopstab-container .tab").eq(0).addClass("active");
            $(".idqopstab-container .tab").each(function () {
                if (flag.includes($(this).attr("data-url"))) {
                    $(".idqopstab-container .tab").removeClass("active");
                    $(this).addClass("active");

                }
            });

        }
    } catch (exception) {
        console.log(exception);
        $(".idqopstab-container .tab").eq(0).addClass("active");
    }
    if (flag.includes("TABLE_COMPARISON") || flag.includes("DATA_ACCURACY") || flag.includes("REFERENTIAL_INTEGRITY") || formLabels !== null && formLabels !== "" && formLabels !== undefined && formLabels !== "null") {
        var str = `<div class="">
          <label class="">Target Table Name:</label>
           <div id="targetTableName"></div>
        <span><button class='iDqopsCompareButtonClass' id='tableCompareDqopsId'>Submit</button></span>
        </div>`;
        if (formLabels !== null && formLabels !== "" && formLabels !== undefined && formLabels !== "null") {
            str = "";
            str = "<div class='apiFormMainDiv'>";
            let formLabelArr = formLabels.split(",");
            formLabelArr.forEach((label) => {
                str += `<div class='apiFormInputDiv'>`
                str += `<label class="">${label}</label>
                <input class="" type='text'/>`;
                str += `</div>`
            });
            str += `<button class='iDqopsCompareButtonClass' id='tableCompareDqopsId'>Submit</button>`
            str += "</div>";
        }
        showErrorPopupMessage(str, title || "Target Table", "400", "400");
        getDBTablesList("targetTableName");
        $("#tableCompareDqopsId").unbind("click").on("click", function () {
            let targetTableName = $("#targetTableName").val();
            let dataObj = {};
            $(".apiFormMainDiv .apiFormInputDiv").each(function () {
                let key = $(this).find("label").text();
                let value = $(this).find("input").val();
                dataObj[key] = value;
            })
            try {
                $("#messagedialog1").html("");
                $("#messagedialog1").dialog("destroy");
            } catch (e) {
                console.error("Dialog close error:", e);

            }

            getAjaxApiCheckResponse(tableName, flag, gridId, targetTableName, subFlag, dataObj);
        })
        return;

    }
    let dataObj = {};
    if (tableName !== null && tableName !== "") {
        $(event.currentTarget).parent().parent().find(".monittextinput").each(function () {
            let key = $(this).find("label").text();
            let value = $(this).find("input").val();
            dataObj[key] = value;
        })
    }
    getAjaxApiCheckResponse(tableName, flag, "", gridId, subFlag, dataObj);

}
function getAjaxApiCheckResponse(tableName, flag, gridId, targetTableName, subFlag, dataObj) {
    if (dataObj === null || dataObj === undefined) {
        dataObj = {};
    }
    dataObj['tableName'] = tableName;
    dataObj['targetTableName'] = targetTableName;
    dataObj['flag'] = flag;
    dataObj['subFlag'] = subFlag;
    try {
        var selectedItem = $('#ivisualizationConnections').jqxTree('getSelectedItem');

        if (selectedItem && selectedItem.parentElement) {
            var parentItem = $('#ivisualizationConnections').jqxTree('getItem', selectedItem.parentElement);
            dataObj['label'] = parentItem.value;
        }

        if (tableName !== null && tableName === "Columns" && parentItem.label !== "Columns") {
            tableName = parentItem.label;
            dataObj['tableName'] = tableName;
        } else if (parentItem !== null && parentItem.label === "Columns") {
            dataObj['columnStr'] = selectedItem['value'];
            var item = $('#ivisualizationConnections').jqxTree('getPrevItem', selectedItem);

            if (item && item.parentElement) {
                var parentItem = $('#ivisualizationConnections').jqxTree('getItem', item.parentElement);
                console.log(parentItem);
                dataObj['tableName'] = parentItem['value'];
            }
        }
    } catch (e) {

    }

    if (tableName !== null && tableName !== undefined && tableName !== "") {
        showLoader();
        $.ajax({
            url: "getAPICheckResponse",
            async: true,
            cache: false,
            traditional: true,
            data: dataObj,
            success: function (data) {
                stopLoader();
                if (data !== null && data !== undefined && data !== "") {
                    var resultStr = "";
                    try {
                        var resultDataObj = JSON.parse(data);
                        resultStr = resultDataObj['resultStr']
                    } catch (exception) {
                        resultStr = data;
                    }

                    $("#iDQOPSTabContent").html(resultStr);
                    $("#iDQOPSTabContent" + subFlag + "").show();
                    $("#iDQOPSTabContent" + subFlag + "").html(resultStr);
                    $(".dqopsbtn").unbind("click").on("click", function (event) {
                        columnDataStr = $("#iDQOPSColumnListId").val();
                        filterGridData(event, gridId, resultDataObj['resultObj'], tableName, columnDataStr);
                    })
                }

            }, error: function (e) {
                console.log(e);
            }

        }
        )
    }
}
function filterGridData(event, gridId, data, tableName, columnDataStr) {
    columnDataStr = columnDataStr.replace(/\s+/g, "");
    var actualColumnNameArr = columnDataStr.split(",");
    var dynamicKey = "";
    var columnName = $(event.currentTarget).parent().parent().find(".dqopskey").text();
    var obj = "";
    columnName = columnName.replace(":", "");
    columnName = columnName.trim();

    if (!actualColumnNameArr.includes(columnName)) {
        columnName = $(event.currentTarget).parent().parent().parent().find(".dqopskey").eq(0).text().trim();
        columnName = columnName.replace(":", "");
        columnName = columnName.replace("Column", "");
        columnName = columnName.trim();
    }
// Get all keys from the data object
    var allKeys = Object.keys(data);

// Loop through each key and check if it has any of the actual column names
    for (let i = 0; i < allKeys.length; i++) {
        let key = allKeys[i];
        let value = data[key];

        if (typeof value === "object") {

            if (value.hasOwnProperty(columnName) || value.hasOwnProperty("Column" + columnName)) {
                dynamicKey = key;
                obj = data[dynamicKey];
                break;
            }
        }

        if (dynamicKey)
            break;
    }

    if (obj.hasOwnProperty(columnName)) {
        var values = Array.isArray(obj[columnName])
                ? obj[columnName]
                : obj[columnName]['sample_values'];
        var filterColsStr = [{
                "operator": "IN",
                values: values.toString(),
                colName: columnName,
                valuetype: "",
                tableName: tableName
            }]

        var dataObj = {
            startIndex: 0,
            endIndex: 50,
            tableName: tableName,
            analytics: "Y",
            filterColsStr: JSON.stringify(filterColsStr)
        };

        viewAnalyticsTableDataGrid(dataObj, "DIALOG_VIEW");
        setTimeout(() => {
            $("#" + gridId).jqxGrid('setcolumnproperty', columnName, 'cellclassname', (row, columnfield, value, data) => {
                return 'highlight-cell';
            });

        }, 1000);
    }
}
function validationOptionForDQOPS() {
    const selectedItem = $('#ivisualizationConnections').jqxTree('getSelectedItem');
    if (!selectedItem)
        return;

    let labelType = "";
    let columnStr = "";
    let tableName = selectedItem.value;

    let parentItem = selectedItem.parentElement
            ? $('#ivisualizationConnections').jqxTree('getItem', selectedItem.parentElement)
            : null;

    if (!parentItem)
        return;

    labelType = parentItem.label;

    if (tableName === "Columns" && parentItem.label !== "Columns") {
        // Case: Current selected item is 'Columns', actual table name is parent's value
        tableName = parentItem.value;
    } else if (parentItem.label === "Columns") {
        // Case: Parent is 'Columns', so selected item is column name
        columnStr = selectedItem.value;
        const grandParentItem = parentItem.parentElement
                ? $('#ivisualizationConnections').jqxTree('getItem', parentItem.parentElement)
                : null;

        if (grandParentItem) {
            tableName = grandParentItem.value;
        }
        labelType = "Columns";
    }

    $.ajax({
        url: "fetchIDQOPSFormConfig",
        async: true,
        cache: false,
        traditional: true,
        data: {
            label: labelType,
            tableName: tableName,
            columnStr: columnStr
        },
        success: function (data) {
            if (data) {
                stopLoader();
                $("#visualizeTablesGridData").remove();
                ///$(".dqopsSidePanelClass").remove();

                $("#visionSmartBiGridDataId").after("<div id='visualizeTablesGridData'></div>");

                if (labelType && labelType !== "TABLES") {
                    $("#visualizeTablesGridData").html(data).show().css({
                        height: "100%",
                        width: "100%"
                    });
                    $("#visionGridDataView").show();
                    $("#visionSmartBiGridDataId").hide();
                } else {

                    const $apiForm = $("#apiForm_" + tableName);
                    $apiForm.popover({
                        trigger: "click",
                        html: true,
                        placement: "right",
                        content: () => $(`<div class="dqopsSidePanelClass">${data}</div>`)
                    });
                }

                // Select All Checkbox logic
                $(document).off("change", "#selectAllReportsId")
                        .on("change", "#selectAllReportsId", function () {
                            const checked = $(this).prop("checked");
                            $(".dqopsSidePanelClass .form-check input[type='checkbox']").prop("checked", checked);
                        });

                // Enable/Disable related input fields based on toggle
                $(".toggleStatusClass input[type=checkbox]").off("change").on("change", function (event) {
                    const checked = $(this).prop("checked");
                    $(event.currentTarget).parent().parent().parent().find(".monittextinput input").prop("disabled", checked == true ? false : true);
                });
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error("AJAX Error:", textStatus, errorThrown);
        }
    });
}

function dqopsViewThemeTabsData(tableName, gridId) {
    let inputfirstFlag = "";
    let htmlStr = `<div class="idqopstab-container">`;
    $(".dqopsSidePanelClass .form-check").each(function (index) {
        const labelVal = $(this).find("label").text().trim();
        const inputCheck = $(this).find("input:checked");
        const inputFlag = $(this).find("label").attr("data-url");
        const formLabels = $(this).find("label").attr("formLabels");
        const isActive = index === 1 ? (inputfirstFlag = inputFlag, "active") : "";

        let uniqueId = "";
        let onclickCall = `getAPICheckResponse('${tableName}', '${gridId}', '${inputFlag}')`;
        if (inputFlag == "DQOP" || inputFlag == "TABLE_COMPARISON") {
            onclickCall = "";
            uniqueId = `iDqopsDataViewId${inputFlag}_${index}`;
        }

        if (inputCheck.length > 0 && labelVal !== "Select All") {
            htmlStr += `<div class='iDQOPSTabViewClass'>
            <div class="tab ${isActive}" formLabels='${formLabels}' data-url='${inputFlag}' id='${uniqueId}' onclick="${onclickCall}" data-tab="${labelVal}">
                ${labelVal}
            </div>
        </div>`;

        }
    });

    // Append outer content only once, after processing the above conditions
    htmlStr += `
        </div>
        <div id="iDQOPSColumnsContent" class="idqopsTabContentClass tab-content active"></div>
        <div id="iDQOPSTabContent" class="idqopsTabContentClass tab-content active"></div>`;

    $("#dqopsTabContainer").html(htmlStr);



// Attach popover after DOM is rendered
    $(".idqopstab-container [id^='iDqopsDataViewId']").popover({
        trigger: "click",
        html: true,
        placement: "right",
        content: function () {
            const inputFlag = $(this).attr("data-url");
            $(".idqopstab-container .tab").removeClass("active");
            $(this).addClass("active");
            return $(`
            <div class="iDqopspopoverContentDiv">
                <ul class="dataOvervieClass">
                    <li class="popover-item" data-flag="${inputFlag}" data-action="overview">Over View</li>
                    <li class="popover-item" data-flag="${inputFlag}" data-action="detailed">Detailed View</li>
                </ul>
            </div>
        `);
        }
    });

    $(document).off("click", ".popover-item").on("click", ".popover-item", function () {
        const action = $(this).data("action");
        const flag = $(this).data("flag");
        getAPICheckResponse(tableName, gridId, flag, action.toUpperCase());
        $('.popover').popover('hide');
    });

    if (!inputfirstFlag) {
        inputfirstFlag = $(".dqopsSidePanelClass .form-check input:checked").first().closest("label").attr("data-url");
    }
    if (inputfirstFlag && tableName !== "Data Monitoring") {
        getAPICheckResponse(tableName, gridId, inputfirstFlag);
    } else {
        $(".idqopstab-container").addClass("mointoringContainer");
    }
    try {
        $("#apiForm_" + tableName).popover('dispose');
    } catch (e) {
    }
}
function getDhAiDataChildView(tabName, tabId) {
    showLoader();
    $.ajax({
        datatype: 'json',
        type: 'POST',
        url: 'getDhAiDataChildView',
        async: true,
        cache: false,
        traditional: true,
        data: {
            tabName: tabName,
            tabId: tabId
        },
        success: function (data) {
            stopLoader();
            $('#innerChildMainLeftWrapperID').remove();
            $('#dhDataParentView').prepend(data.html);
            //11-06-2025
            $('#childSidebarContentWrapperID ul li').click(function () {
                $('#childSidebarContentWrapperID ul li').removeClass('fioriHighlightTab');
                $(this).addClass('fioriHighlightTab');
                $('#innerMainLeftWrapperIDAttach').remove();//12-06-2025
                $('#dhDataParentViewChild').removeClass('dhDataParentViewChild');
            });
            $('#childSidebarContentWrapperID ul li').eq(0).trigger('click');
            //11-06-2025
        }, error: function (e) {
            stopLoader();
            console.log(e);
        }
    })
}
function getDhAiDataChildAttachView(cls) {

    $('#importDataView').hide();
    try {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    } catch (e) {

    }



    $(event.currentTarget).closest('ul').find('.fioriHighlightTab').removeClass('fioriHighlightTab');
    $(event.currentTarget).addClass('fioriHighlightTab');

    let ele = $(event.currentTarget).find('.dataprofilesidesubMenu').first();
    $('#innerChildMainLeftWrapperID').remove();

    $(event.currentTarget).find('.dataprofilesidesubMenu .nestedSubMenu ul').hide();
    $(ele).addClass('fioriformTabUlListclass outerWidthcol');

    let test = ele[0].outerHTML;

    $('#importDataView').html('');
    $(event.currentTarget).find('.dataprofilesidesubMenu').hide();

    let html = `
        <div class="innerMainLeftWrapper" style="position: relative;" id="innerChildMainLeftWrapperID">
            <div class="iconMenuNavPrev" style="display: block;"><i class="fa fa-angle-double-left"></i></div>
            <div class="homeTabsContentlistwrapper fioriformTabMainDiv" id="childSidebarContentWrapperIDAttach">
                ${test}
            </div>
            <div class="iconMenuNavNext" style="display: block;"><i class="fa fa-angle-double-right"></i></div>
        </div>`;

    $('#dhDataParentView').prepend(html);

    $('#childSidebarContentWrapperIDAttach ul').show();
    $('#childSidebarContentWrapperIDAttach ul').find('.nestedSubMenu ul').hide();
    fioriTabSroller();

    $('#childSidebarContentWrapperIDAttach ul li').click(function () {
        $('#childSidebarContentWrapperIDAttach ul li').removeClass('fioriHighlightTab');
        $(this).addClass('fioriHighlightTab');

        let innerTest = '';
        let innerUL = $(this).find('ul').first();
        if (innerUL.length > 0) {
            innerTest = innerUL.prop('outerHTML');
        }

        $('#innerMainLeftWrapperIDAttach').remove();
        $('#dhDataParentViewChild').addClass('dhDataParentViewChild');

        let innerHtml = `
            <div class="innerMainLeftWrapper" id="innerMainLeftWrapperIDAttach">
                <div class="sidebarContentWrapper" id="sidebarContentWrapperID">${innerTest}</div>
            </div>`;
        $('#dhDataParentViewChild').prepend(innerHtml);

        $('#innerMainLeftWrapperIDAttach ul').show();
    });

    $('#childSidebarContentWrapperIDAttach ul li').eq(0).trigger('click');


    window.showOtherFilePopup = function (templateId, filename) {
        $('#innerMainLeftWrapperIDAttach').remove();
        $('#dhDataParentViewChild').addClass('dhDataParentViewChild');

        let frame = `
            <div class="innerMainLeftWrapper" id="innerMainLeftWrapperIDAttach">
                <div class="sidebarContentWrapper" id="sidebarContentWrapperID">
                    <iframe class='visionFormPdfView' frameborder='0' height='100%' width='100%' 
                        src='getDataBasedOnTemplateId?templateId=${templateId}' id='iframeid'></iframe>
                </div>
            </div>`;
        $('#dhDataParentViewChild').prepend(frame);
    };
}

//function getDhAiDataChildAttachView(cls) {
//    event.preventDefault();
//    event.stopPropagation();
//    event.stopImmediatePropagation();
//    $(event.currentTarget).closest('ul').find('.fioriHighlightTab').removeClass('fioriHighlightTab');
//    $(event.currentTarget).addClass('fioriHighlightTab');
//    let ele = $(event.currentTarget).find('.dataprofilesidesubMenu').first(); // 1
//    $('#innerChildMainLeftWrapperID').remove();
//    $(event.currentTarget).find('.dataprofilesidesubMenu .nestedSubMenu ul').hide();
//    $(ele).addClass('fioriformTabUlListclass');
//    $(ele).addClass('outerWidthcol');
//    let test = ele.prop('outerHTML');
//    $('#importDataView').html('');
//    $(event.currentTarget).find('.dataprofilesidesubMenu').hide();
//    let html = `<div class="innerMainLeftWrapper" style='position: relative;' id="innerChildMainLeftWrapperID">
//                   <div class="iconMenuNavPrev" style="display: block;"><i class="fa fa-angle-double-left"></i></div>
//                   <div class="homeTabsContentlistwrapper fioriformTabMainDiv" id="childSidebarContentWrapperIDAttach">
//                       ${test}
//                   </div>
//                   <div class="iconMenuNavNext" style="display: block;"><i class="fa fa-angle-double-right"></i></div>
//                </div>`;
//
//    $('#dhDataParentView').prepend(html);
//    $('#childSidebarContentWrapperIDAttach ul').show();
//    $('#childSidebarContentWrapperIDAttach ul').find('.nestedSubMenu ul').hide();
//    fioriTabSroller();
////    //11-06-2025
//    $('#childSidebarContentWrapperIDAttach ul li').click(function () {
//        $('#childSidebarContentWrapperIDAttach ul li').removeClass('fioriHighlightTab');
//        $(this).addClass('fioriHighlightTab');
//        let innerTest = $(this).find('ul').prop('outerHTML');
//        $('#innerMainLeftWrapperIDAttach').remove();
//        $('#dhDataParentViewChild').addClass('dhDataParentViewChild');
//        let innerHtml = `<div class="innerMainLeftWrapper" id="innerMainLeftWrapperIDAttach"><div class="sidebarContentWrapper" id="sidebarContentWrapperID">${innerTest}</div></div>`;
//        $('#dhDataParentViewChild').prepend(innerHtml);
//        $('#innerMainLeftWrapperIDAttach ul').show();
//        console.log(innerHtml);
//    });
//    $('#childSidebarContentWrapperIDAttach ul li').eq(0).trigger('click');
//}
function getDBTablesList(id, filterOperator, filterValue) {
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getCurrentDBTables",
        cache: false,
        data: {
            schemaObjectType: "TABLES",
            filterOperator: filterOperator,
            filterValue: filterValue,
            level: 0,
            start: 0,
            limit: 50,
        },
        success: function (response) {
            stopLoader();
            const listBox = $("#" + id);
            const data = response['treeObjArray'];

            if (filterValue === null || filterValue === undefined || filterValue === "") {
                listBox.jqxListBox({
                    filterable: true,
                    checkboxes: true,
                    source: data,
                    theme: 'energyblue',
                    displayMember: 'text',
                    valueMember: 'value',
                    width: '100%'
                });

                $("#filter" + id + " input").off("keyup").on("keyup", function (e) {
                    const searchString = e.currentTarget.value;
                    getDBTablesList(id, "LIKE", "%" + searchString + "%");
                });
            } else {
                listBox.jqxListBox('source', data);
            }
        }
    });
}
function bnacEquipmentProcess(gridid) {
    showLoader();
    $.ajax({
        url: "fetchAllEquipments",
        type: "GET",
        traditional: true,
        cache: false,
        complete: function (xhr) {
            stopLoader();
            if (xhr.status === 200) {
                gridoperations(gridid, 'refresh')
                openAINavigation();
                defaultAITypingBasedOnResponse(`<div class='aiLensResultDataClass'><div>Process Completed :::</div>${xhr['responseText']}</div>`)
            } else {
                console.error("Error: HTTP status " + xhr.status);
            }
        },
        error: function (xhr) {
            console.error("Verification error:", xhr.responseText);
        }
    });
}
function dataUploadsDivToggle() {
    let parentElement = $(event.currentTarget).parent();
    parentElement.toggleClass('width60');
    if (parentElement.hasClass("Panel_A")) {
        $('#dBConnection').toggle();
        $('#visionVisualizationDataSourcesId').toggle();
    } else if (parentElement.hasClass("Panel_B")) {
        $(".dBConnectionSecClass").toggle();
        $("#ivisualizationConnectionsMain").toggle();
    }
    var flag = parentElement.find(".toggleImg").attr('data-flag');
    if (flag == "A") {
        parentElement.find(".toggleImg").html('<img src="images/toggle_minusicon.png" width="16px;">');
        parentElement.find(".toggleImg").attr('data-flag', 'I');
        $("#visionGridDataView").css("width", "100%");
    } else {
        parentElement.find(".toggleImg").html('<img src="images/toggle_plusicon.png" width="16px;">');
        parentElement.find(".toggleImg").attr('data-flag', 'A');
        $("#visionGridDataView").css("width", "70%");
    }


}
function getTableViewSearch() {
    var input = document.getElementById("tableSearchId");
    var table = document.getElementById("qualityOverviewTableId");
    var filter = input.value.toLowerCase();

    // Get tbody rows
    var tbody = table.getElementsByTagName("tbody")[0];
    var rows = tbody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(filter)) {
                match = true;
                break;
            }
        }

        rows[i].style.display = match ? "" : "none";
    }
}
function toggleDataQualitySection() {
    const $parent = $(event.currentTarget).parent();
    const $monitDiv = $parent.find(".monitDivClass");
    const $chevronIcon = $parent.find("#chevronId i");

    $monitDiv.toggle();

    if ($monitDiv.is(":visible")) {
        $chevronIcon.attr("class", "fa fa-chevron-down");
    } else {
        $chevronIcon.attr("class", "fa fa-chevron-right");
    }

}
function displayUserInputAPI(tableName, flag, subFlag, labels) {
    let title;
    let htmlStr = "";
    try {
        title = $(event.currentTarget).attr("title");
    } catch (e) {

    }
    if (labels) {
        let labelArray = labels.includes(",") ? labels.split(",") : [labels];
        labelArray.forEach(label => {
            let displayLabel = label
                    .replace(/_/g, " ")               // replace underscores with spaces
                    .replace(/^\w/, c => c.toUpperCase()); // capitalize first character

            htmlStr += `<div class='invoiceFormClass'style="margin-bottom:8px;">
                    <label style="margin-right:6px;">${displayLabel}:</label>
                    <input type="text" name="${label}" />
                </div>
            `;
        });

    }
    $("#dialog1").html(htmlStr);
    $("#dialog1").dialog({
        resizable: false,
        title: labelObject[title] || title,
        modal: true,
        width: 300,
        height: 135,
        fluid: true,
        buttons: [{
                text: labelObject['ok'] || 'ok',
                click: function () {
                    let formData = {};
                    $(".invoiceFormClass input[type='text']").each(function () {
                        formData[$(this).attr("name")] = $(this).val();
                    });
                    getInvoiceAPIResponse(tableName, flag, subFlag, formData)
                    $(this).html("").dialog("close").dialog("destroy");
                }
            }],
        open: function () {
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
        },
        beforeClose: function () {
            $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
        }
    });
}

function getInvoiceAPIResponse(tableName, flag, subFlag, formData) {
    if (!tableName)
        return;

    let dataObj = {
        tableName: tableName,
        flag: flag,
        label: subFlag,
        dataFlag: "Y"
    };

    showLoader();

    // helper function to handle popup
    function handleResponse(data, title) {
        if (!data)
            return;
        if (data['apiParamsStr'] != null && data['apiParamsStr'] != "") {
            dataObj['dataFlag'] = "";
            if (formData && !jQuery.isEmptyObject(formData)) {
                let paramObjArr = JSON.parse(data['apiParamsStr']);

                Object.keys(formData).forEach(key => {
                    paramObjArr.forEach(obj => {
                        if (obj['apiParamName'] === key) {
                            obj['apiParamValue'] = formData[key];
                        }
                    });
                });
                data['apiParamsStr'] = JSON.stringify(paramObjArr);
            }

            dataObj['paramArray'] = data['apiParamsStr'];
            return;
        }
        let popupWidth = "500";
        let popupHeight = "600";
        showErrorPopupMessage(data['resultStr'], title, popupWidth, popupHeight);
    }

    // wrap $.ajax in a promise
    function ajaxCall(url) {
        showLoader();
        return $.ajax({
            url: url,
            async: true,
            cache: false,
            traditional: true,
            data: dataObj
        });
    }

    // chain calls
    ajaxCall("getAPIInvoiceResults")
            .then(function (data) {
                stopLoader();
                handleResponse(data, "Invoice");
                return ajaxCall("getAPIInvoiceResults"); // return promise for next call
            })
            .then(function (data) {
                stopLoader();
                handleResponse(data, "Invoice");
            })
            .fail(function (e) {
                stopLoader();
                console.log("Error in API call:", e);
            });
}
//function getSettingsConfigWBDetails(domain, role, componenttype, TabId, editableflag, title, flagType, activeFlag, tabType, mainTabId, MainRoleId, mainDomainId) {
//    showLoader();
//    if (tabType == null || tabType == '' || tabType == undefined) {
//        tabType = "Basic";
//    }
//    showSelectedTabContent(event, 'dxpFromTab', 'dxpKDSTabContent', 'KDS Form', 'N');
//    $.ajax({
//        type: "POST",
//        url: 'getKDSConigWBData',
//        dataType: 'json',
//        data: {
//            domain: domain,
//            role: role,
//            componenttype: componenttype,
//            TabId: TabId,
//            editableflag: editableflag,
//            title: title,
//            tabType: tabType,
//        },
//        traditional: true,
//        async: true,
//        cache: false,
//        success: function (response) {
//            stopLoader();
//            if (tabType != null && tabType != '' && tabType != undefined && tabType == 'Basic') {
//                $("#defaultShowCards").html(response['dataStr']);
//                $("#iKDSSubmitBtnId").hide();
////            } else if (tabType != null && tabType != '' && tabType != undefined && tabType == 'systems') {
////                $("#iKDSSubmitBtnId").show();
////                $(".kdsButtonDivClass").hide();
//                $("#iKDSDomainConfig").jqxDropDownList({
//                    theme: 'energyblue',
//                    filterable: true,
//                    checkboxes: false,
//                    placeHolder: "Select Domain",
//                    source: response['iKDSDomainConfig'],
//                    width: 350,
//                });
//                $("#iKDSInstanceConfig").jqxDropDownList({
//                    theme: 'energyblue',
//                    filterable: true,
//                    checkboxes: false,
//                    placeHolder: "Select Instance",
//                    source: response['iKDSInstanceConfig'],
//                    width: 350,
//                });
////                var dataArray = ['Asset'];
////                $("#iKDSDomainConfig").append(dataArray);
////            } else if (tabType != null && tabType != '' && tabType != undefined && tabType == 'roles') {
////                $("#iKDSSubmitBtnId").show();
//                $("#iKDSRoleConfig").jqxDropDownList({
//                    theme: 'energyblue',
//                    filterable: true,
//                    checkboxes: true,
//                    placeHolder: "Select Roles",
//                    source: response['iKDSRoleConfig'],
//                    width: 350,
//                });
////            } else if (tabType != null && tabType != '' && tabType != undefined && tabType == 'types') {
////                $("#iKDSSubmitBtnId").show();
//                $("#iKDSPlantConfig").jqxDropDownList({
//                    theme: 'energyblue',
//                    filterable: true,
//                    checkboxes: false,
//                    placeHolder: "Select Plant",
//                    source: response['iKDSPlantConfig'],
//                    width: 350,
//                });
//                $("#iKDSMaterialTypeConfig").jqxDropDownList({
//                    theme: 'energyblue',
//                    filterable: true,
//                    checkboxes: false,
//                    placeHolder: "Select Material Type",
//                    source: response['iKDSMaterialTypeConfig'],
//                    width: 350,
//                });
////            } else if (tabType != null && tabType != '' && tabType != undefined && tabType == 'process') {
////                $("#iKDSSubmitBtnId").show();
//                $("#iKDSProcessConfig").jqxDropDownList({
//                    theme: 'energyblue',
//                    filterable: true,
//                    checkboxes: false,
//                    placeHolder: "Select Process",
//                    source: response['iKDSProcessConfig'],
//                    width: 350,
//                });
//                $("#iKDSDomainConfig").on('change', function (event) {
//                    var args = event.args;
//                    if (!args || !args.item)
//                        return;
//                    var item = args.item;
//                    var selectedDomain = item.value;
//                    showDomainConfigurationStatus(selectedDomain);
//                    stopLoader();
//                });
//            }
//        }
//    });
//}
function toggleDropdown(id, header) {
    const menu = document.getElementById(id);
    const arrow = header.querySelector('.arrow');

    if (menu.style.display === "block") {
        menu.style.display = "none";
        header.classList.remove("active");
    } else {
        menu.style.display = "block";
        header.classList.add("active");
    }
}
// Show tab content
function showTab(tabId, clickedItem) {
    // Check if a Domain is selected before opening non-systems tabs
    var selectedDomain = $("#iKDSDomainConfig").jqxDropDownList('getSelectedItem');
    if (tabId != null && tabId != "" && tabId != undefined && tabId == 'systems') {
        showKDSProgressBar();
        attachKDSProgressListeners();
    }

    if (!selectedDomain && tabId && tabId !== "systems") {
        showLoader();
        const targetTabName = tabId.charAt(0).toUpperCase() + tabId.slice(1);

        const domainAlertMsg = `
  <div class="AILensDomainAlertContainer">
    <div class="domain-alert-card">
        <span class="validation-icon">🚫</span>
        <div class="alert-message">
            <span class="alert-title">Domain Not Selected</span>
            <p class="alert-text">
                You tried to open the <b>${targetTabName}</b> tab, but a domain has not been selected yet.
                Please select a domain in the <b>Systems</b> tab before proceeding.
            </p>  
            <div class="alert-action">
                <p class="alert-question">Would you like to configure the domain now?</p>
                <button class="alert-btn" id="configureDomainBtn" onclick="showRedirectToTab('systems', '${tabId}')">
                    ✅ Yes, Configure Now
                </button> 
            </div>
        </div>
    </div>
  </div>
  `;

        openAINavigation();
        defaultAITypingBasedOnResponse(domainAlertMsg);
        stopLoader();
        return;
//        popupMessage("Please select a domain in the Systems tab before proceeding.");
//        return;
    }

    // Hide all tabs
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

    // Show selected tab
    const currentTab = document.getElementById(tabId);
    if (currentTab)
        currentTab.classList.add("active");

    // Highlight active submenu item
    document.querySelectorAll(".submenu li").forEach(li => li.classList.remove("active"));
    if (clickedItem && clickedItem.classList) {
        clickedItem.classList.add("active");
    }

    // Show submit button only for the "process" tab
    if (tabId === "process") {
        $("#iKDSSubmitBtnId").show();
    } else {
        $("#iKDSSubmitBtnId").hide();
    }
}

function getAILensVideos(componentId, type, ApiUrl, tabTitle, clusterId) {
    try {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    } catch (e) {
    }
    // Clear existing content in the right panel
    $('#dhDataParentViewChild').empty();
    // Get the submenu for videos from the existing DOM
    let ele = $(`#li_${type}`).find('.dataprofilesidesubMenu').first();
    // Check if submenu exists and has video items
    if (ele.length > 0 && ele.find('li').length > 0) {
        // Create new wrapper for video list
        let innerHtml = `
        <div style="height: 100%; display: flex;width: 100%;" class="dhDataParentViewChild">

        <!-- LEFT PANEL: video list -->
        <div class="innerMainLeftWrapper" id="innerMainLeftWrapperIDAttach" style="width: 250px; border-right: 1px solid #ddd;flex-shrink: 0;">
            <div class="sidebarContentWrapper" id="sidebarContentWrapperID">  
                ${ele.prop('outerHTML')}
            </div>
        </div>

        <!-- RIGHT PANEL: video display -->
        <div id="importDataView" style="flex: 1; gap: 4px; padding: 5px; width: 100%;min-width: 0;"></div>
        
            </div>`;

        // Append the video list to the right panel
        $('#dhDataParentViewChild').append(innerHtml);

        // Ensure the submenu is visible
        $('#innerMainLeftWrapperIDAttach ul').show();

        // Add click handlers for video items
        $('#innerMainLeftWrapperIDAttach ul li').each(function () {
            $(this).off('click').on('click', function (e) {
                e.stopPropagation();
                // Remove highlight from siblings and add to current
                $('#innerMainLeftWrapperIDAttach ul li').removeClass('fioriHighlightTab');
                $(this).addClass('fioriHighlightTab');

                // Extract templateId  from the onclick attribute
                let onclickAttr = $(this).find('.listDataText').attr('onclick');
                let templateId = onclickAttr ? onclickAttr.match(/'([^']+)'/)[1] : null;
                if (templateId) {
                    showSelectedDataOnPopup(templateId);
                }
            });
        });

        // Automatically trigger click on the first video item
        let firstVideoItem = $('#innerMainLeftWrapperIDAttach ul li').eq(0);
        if (firstVideoItem.length > 0) {
            firstVideoItem.trigger('click');
        }
    } else {
        // If no videos are available, show a message
        $('#dhDataParentViewChild').html(`
        <div style="height: 100%; display: flex;" id="dhDataParentViewChild" class="dhDataParentViewChild">
            <div class="innerMainLeftWrapper" id="innerMainLeftWrapperIDAttach" class="dhDataParentViewChild">
                <div class="sidebarContentWrapper" id="sidebarContentWrapperID">
                    <p>No videos available. Please upload a video to view content.</p>
                </div>
            </div>
        `);
    }
}
function showInputWrapper($btn) {
    const target = $btn.data("target");
    const $wrapper = $(`.input-wrapper[data-wrapper="${target}"]`);
    if ($wrapper.length)
        $wrapper.css("display", "flex");
    $btn.hide();
}
function saveNewValue($btn) {
    const target = $btn.data("target");
    const $wrapper = $(`.input-wrapper[data-wrapper="${target}"]`);
    if (!$wrapper.length)
        return;

    const $input = $wrapper.find("input");
    const value = $.trim($input.val());

    if (!value) {
        // nothing entered — simply close
        $input.val("");
        $wrapper.hide();
        $(`.plus-btn[data-target="${target}"]`).show();
        return;
    }

    // If target is a select element
    const $selectEl = $("#" + target);
    if ($selectEl.length && $selectEl.prop("tagName") === "SELECT") {
        $selectEl.append(new Option(value, value));
        $selectEl.val(value);
    } else {
        // Radio button container
        const $container = $(`[data-target-container="${target}"]`);
        if ($container.length) {
            const name = $container.data("name") || target;

            const $label = $("<label>");
            const $radio = $("<input>", {
                type: "radio",
                name: name,
                value: value,
                checked: true
            });
            const $span = $("<span>", {class: "custom-checkbox"});

            $label.append($radio).append($span).append(" " + value);

            const $customItem = $container.find(".custom-kds-item").first();
            if ($customItem.length) {
                $label.insertBefore($customItem);
            } else {
                $container.append($label);
            }
        } else {
            console.warn("Target container not found for:", target);
        }
    }

    // reset & hide wrapper, show + button again
    $input.val("");
    $wrapper.hide();
    $(`.plus-btn[data-target="${target}"]`).show();
}
function deleteShowInputWrapper($btn) {
    const target = $btn.data("target");
    const $wrapper = $btn.closest(".form-group, .custom-kds-item, .iKDSProcessConfig")
            .find(`.input-wrapper[data-wrapper="${target}"]`);

    if ($wrapper.length) {
        $wrapper.hide();
        $wrapper.find("input").val("");
    }
    const $plusBtn = $btn.closest(".form-group, .custom-kds-item, .iKDSProcessConfig")
            .find(`.plus-btn[data-target="${target}"]`);
    if ($plusBtn.length)
        $plusBtn.show();
}
function getKDSSelectedDataBasedResults() {
    showLoader();

    function getSingleSelection(id, msg, label, tabName) {
        var item = $("#" + id).jqxDropDownList('getSelectedItem');
        if (item)
            return item.value;
        showAILensErrorMessage(`${label} Not Found`, msg, tabName);
        stopLoader();
        throw new Error(`${label} not selected`);
    }

    function getMultiSelection(id, msg, label, tabName) {
        var items = $("#" + id).jqxDropDownList('getCheckedItems');
        if (Array.isArray(items) && items.length > 0)
            return items.map(i => i.value);
        showAILensErrorMessage(`${label} Not Found`, msg, tabName);
        stopLoader();
        throw new Error(`${label} not selected`);
    }

    try {
        var selectedDomain = getSingleSelection("iKDSDomainConfig", "Please select a Domain in the Systems tab before continuing.", "Domain", "systems");
        var selectedInstance = getSingleSelection("iKDSInstanceConfig", "Please select an Instance in the Systems tab before continuing.", "Instance", "systems");

        var selectedERP = $("input[name='erp']:checked").val();

        if (!selectedERP) {
            showAILensErrorMessage("ERP Not Selected", "Please select an ERP type in the Systems tab before proceeding.", "systems");
            stopLoader();
            return;
        }
        var selectedRoles = getMultiSelection("iKDSRoleConfig", "Please select one or more Roles in the Roles tab before continuing.", "Roles", "roles");
        var selectedPlant = getSingleSelection("iKDSPlantConfig", "Please select a Plant in the Types tab before continuing.", "Plant", "types");
        var selectedMatType = getSingleSelection("iKDSMaterialTypeConfig", "Please select a Material Type in the Types tab before continuing.", "Material Type", "types");
        var selectedProcess = getSingleSelection("iKDSProcessConfig", "Please select a Process in the Process tab before continuing.", "Process", "process");

        const selectedData = {
            "Domain": selectedDomain,
            "Instance": selectedInstance,
            "ERP": selectedERP,
            "Role(s)": selectedRoles,
            "Plant": selectedPlant,
            "Material Type": selectedMatType,
            "Process": selectedProcess
        };

        let resultStr = `
            <div class="AILensRefApiDataClass">
                <table class="AILensRefTableClass">
                    <thead>
                        <tr>
                            <th colspan="2" class="sub-header">KDS Selected Configuration</th>
                        </tr>
                        <tr>
                            <th>Configuration Name</th>
                            <th>Selected Value</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        for (const [key, value] of Object.entries(selectedData)) {
            const formattedValue = Array.isArray(value) ? value.join(", ") : value || "<i>Not Selected</i>";
            resultStr += `
                <tr>
                    <td><b>${key}</b></td>
                    <td>${formattedValue}</td>
                </tr>
            `;
        }

        resultStr += `
                    </tbody>
                </table>
            </div>
        `;

        openAINavigation();
        defaultAITypingBasedOnResponse(resultStr);

        setTimeout(() => {
            const processMsg = `
                <div class="AILensKDSProcessContainer">
                    <div class="process-status">
                        <span class="status-icon">⚙️</span>
                        <div class="status-message">
                            <p class="status-heading">KDS Agent is updating and configuring your system...</p>
                            <p class="status-subtext">Please wait while the agent performs the following setup actions:</p>
                            <ul class="status-list">
                                <li>Updating column structures and names</li>
                                <li>Setting up required fields and default parameters</li>
                                <li>Applying validation rules and data consistency checks</li>
                                <li>Preparing configuration for next operational steps</li>
                            </ul>
                            <p class="status-footer">This may take a few moments...</p>
                        </div>
                    </div>
                </div>
            `;
            openAINavigation();
            defaultAITypingBasedOnResponse(processMsg);
        }, 30000);

        setTimeout(() => {
            const successMsg = `
                <div class="AILensKDSProcessContainer">
                    <div class="process-status success">
                        <span class="status-icon">✅</span>
                        <div class="status-message">
                            <p class="status-heading">System Configuration Completed Successfully!</p>
                            <p class="status-subtext">The KDS Agent has completed the following setup steps:</p>
                            <ul class="status-list success-list">
                                <li>Aligned and updated column metadata</li>
                                <li>Configured required fields and parameters</li>
                                <li>Validated data integrity and consistency</li>
                                <li>Finalized configuration for smooth operations</li>
                            </ul>
                            <p class="status-footer success-footer">✅ Your system is now ready to use.</p>
                        </div>
                    </div>
                </div>
            `;
            defaultAITypingBasedOnResponse(successMsg);
            stopLoader();
        }, 54000);
    } catch (err) {
        console.warn("KDS Selection aborted:", err.message);
    }
}
function showDomainConfigurationStatus(selectedDomain) {
    const configuringMsg = `
      <div class="AILensProcessMessageContainer" id="AILensConfigMsg">
          <div class="process-status-card">
              <div class="status-icon-area">
                  <span class="status-icon">⚙️</span> 
              </div>
              <div class="status-message">
                  <span class="status-title">Configuring System...</span>
                  <p class="status-text">System is updating data columns based on your domain.</p>
                  <p class="status-domain"><b>Selected Domain:</b> ${selectedDomain}</p>
                  <p class="status-note">Please wait...</p>
              </div>
          </div>
      </div>
    `;

    openAINavigation();
    defaultAITypingBasedOnResponse(configuringMsg);

    setTimeout(() => {
        const successMsg = `
          <div class="AILensProcessMessageContainer">
              <div class="process-status-card success">
                  <div class="status-icon-area success-icon-area">
                      <span class="status-icon">✅</span>
                  </div>
                  <div class="status-message">
                      <span class="status-title success-title">Configuration Successful</span>
                      <p class="status-text success-text">
                          All columns have been configured for the selected domain.
                      </p>
                      <p class="status-note success-note">You can proceed with the next step.</p>
                  </div>
              </div>
          </div>
        `;

//        $("#AILensConfigMsg").fadeOut(400, function () {
        defaultAITypingBasedOnResponse(successMsg);
//        });
    }, 12000);

    setTimeout(() => {
        const nextActionMsg = `
    <div class="AILensProcessMessageContainer">
        <div class="process-status-card success">
            <div class="status-icon-area success-icon-area">
                <span class="status-icon">🧭</span>
            </div>
            <div class="status-message">
                <span class="status-title success-title">Configuration Next Step</span>
                <p class="status-text success-text">
                    Would you like to configure the next steps now?
                </p>
                <div class="status-next-action">
                    <button class="status-btn" id="configureNextBtn" onclick="showRedirectToTab('systems')">
                        Yes, Configure Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  `;
        defaultAITypingBasedOnResponse(nextActionMsg);
    }, 25000);
}
function showRedirectToTab(tabId) {


    const redirectMsg = `
        <div class="AILensProcessMessageContainer">
            <div class="process-status-card redirecting">
                <div class="status-icon-area redirect-icon-area">
                    <span class="status-icon">🧭</span>
                </div>
                <div class="status-message">
                    <span class="status-title redirect-title">Redirecting...</span>
                    <p class="status-text redirect-text">
                        Navigating to the <b>${tabId.charAt(0).toUpperCase() + tabId.slice(1)}</b> tab for configuration.
                    </p>
                </div>
            </div>
        </div>
    `;

    openAINavigation();
    defaultAITypingBasedOnResponse(redirectMsg);

    const tabElement = document.querySelector(`.submenu li[onclick*="${tabId}"]`);
    if (tabElement) {
        document.querySelectorAll(".submenu li").forEach(li => li.classList.remove("active", "tab-highlight"));
        tabElement.classList.add("active", "tab-highlight", "blink-highlight");
        setTimeout(() => tabElement.classList.remove("blink-highlight"), 2000);
    }

    setTimeout(() => {
        closeAINavigation();
        showTab(tabId);
    }, 5000);
}

function showAILensErrorMessage(title, details, tabId) {
    const aiErrorMsg = `
        <div class="AILensValidationContainer">
            <div class="validation-status-card">
                <div class="validation-icon-area">
                    <span class="validation-icon">🚫</span>
                </div> 
                <div class="validation-message">
                    <span class="validation-title">${title}</span>
                    <p class="validation-text">${details}</p>
                    <div class="validation-action">
                        <p class="validation-question">Would you like to set the missing field now?</p>
                        <button class="validation-btn" onclick="showRedirectToTab('${tabId}')">
                            ✅ Yes, Configure Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    openAINavigation();
    defaultAITypingBasedOnResponse(aiErrorMsg);
}


// KDS Progress Bar Code start
let kdsProgressValue = 0;
const kdsCompletedSteps = new Set();
let kdsTotalSteps = 0;
let kdsInitialized = false;

/** 🔹 Detect available steps dynamically **/
function initializeKDSProgressSteps() {
    const selectors = [
        "#iKDSDomainConfig",
        "#iKDSInstanceConfig",
        "input[name='erp']",
        "#iKDSRoleConfig",
        "#iKDSPlantConfig",
        "#iKDSMaterialTypeConfig",
        "#iKDSProcessConfig"
    ];

    const existing = selectors.filter(sel => $(sel).length > 0);
    kdsTotalSteps = existing.length || 6;

    if (!kdsInitialized) {
        showKDSProgressBar();
        kdsInitialized = true;
    }

    console.log("✅ Total KDS Steps:", kdsTotalSteps);
}

/** 🔹 Show progress bar **/
function showKDSProgressBar() {
    const container = document.getElementById("kdsProgressContainer");
    if (container) {
        container.style.display = "flex";
        updateKDSProgress((kdsCompletedSteps.size / kdsTotalSteps) * 100);
    }
}

/** 🔹 Update visual progress **/
function updateKDSProgress(percent) {
    const fill = document.getElementById("kdsProgressFill");
    const text = document.getElementById("kdsProgressText");
    const loader = document.querySelector(".kds-progress-logo");

    if (!fill || !text || !loader)
        return;

    const safePercent = Math.min(percent, 100);
    fill.style.width = safePercent + "%";
    text.textContent = Math.round(safePercent) + "%";

    if (safePercent >= 100) {
        loader.style.animation = "none";
        loader.style.borderTopColor = "#28a745";
        text.textContent = "✅ Completed";
    } else {
        loader.style.animation = "kdsSpin 1.2s linear infinite";
        loader.style.borderTopColor = "#007bff";
    }
}

/** 🔹 Mark step completed **/
function markKDSSelectionComplete(stepName) {
    if (!kdsCompletedSteps.has(stepName)) {
        kdsCompletedSteps.add(stepName);
    }
    const percent = Math.min((kdsCompletedSteps.size / kdsTotalSteps) * 100, 100);
    updateKDSProgress(percent);
}

/** 🔹 Reset everything (only when reloading configuration) **/
function resetKDSProgressBar() {
    kdsCompletedSteps.clear();
    kdsProgressValue = 0;
    updateKDSProgress(0);
}

/** 🔹 Re-attach listeners every time tab content changes **/
function attachKDSProgressListeners() {
    initializeKDSProgressSteps();

    // Ensure we don’t double-bind
    $("#iKDSDomainConfig").off("select").on("select", e => {
        const item = e.args ? e.args.item : null;
        if (item)
            markKDSSelectionComplete("Domain");
    });

    $("#iKDSInstanceConfig").off("select").on("select", e => {
        const item = e.args ? e.args.item : null;
        if (item)
            markKDSSelectionComplete("Instance");
    });

    $("input[name='erp']").off("change").on("change", () => {
        markKDSSelectionComplete("ERP");
    });

    $("#iKDSRoleConfig").off("checkChange").on("checkChange", () => {
        markKDSSelectionComplete("Roles");
    });

    $("#iKDSPlantConfig").off("select").on("select", e => {
        const item = e.args ? e.args.item : null;
        if (item)
            markKDSSelectionComplete("Plant");
    });

    $("#iKDSMaterialTypeConfig").off("select").on("select", e => {
        const item = e.args ? e.args.item : null;
        if (item)
            markKDSSelectionComplete("Material Type");
    });

    $("#iKDSProcessConfig").off("select").on("select", e => {
        const item = e.args ? e.args.item : null;
        if (item)
            markKDSSelectionComplete("Process");
    });
}


// KDS Progress Bar Code stop

function getKDSWBToggle() {
    $(".kdsToggleWrapper").toggleClass("toggleKDSOpen");
}
function copySapTableDataToOracle(gridId, tableName) {
    showLoader();
    let labelObject = {};
    try {
        const labelVal = $("#labelObjectHidden").val();
        if (labelVal) {
            labelObject = JSON.parse(labelVal);
        }
    } catch (e) {
        console.error("Error parsing label object:", e);
    }

    $.ajax({
        type: "POST",
        url: "copySapTableDataToOracle",
        data: {
            gridId: gridId,
            tableName: tableName
        },
        traditional: true,
        cache: false,
        success: function (resultObj) {
            stopLoader();
            if (resultObj && resultObj.message) {
                const message = resultObj.message;

                const dialogHtml = `
                    <div style="padding: 20px; font-size: 14px; line-height: 1.6;">
                        <span>${message}</span>
                    </div>
                `;


                $("#dialog").html(dialogHtml).dialog({
                    resizable: false,
                    title: labelObject["Message"] || "Message",
                    modal: true,
                    height: "auto",
                    minHeight: 200,
                    minWidth: 400,
                    maxWidth: 600,
                    fluid: true,
                    buttons: [
                        {
                            text: labelObject["Ok"] || "Ok",
                            click: function () {
                                gridoperations(gridId, 'refresh')
                                $(this).html("");
                                try {
                                    $(this).dialog("destroy");
                                } catch (e) {
                                    console.warn("Dialog destroy failed:", e);
                                }
                                try {
                                    $(this).dialog("close");
                                } catch (e) {
                                    console.warn("Dialog close failed:", e);
                                }
                            }
                        }
                    ],
                    open: function () {
                        $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function () {
                        $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
                    }
                });
            } else {
                console.warn("No valid message received from server.");
            }
        },
        error: function (e) {
            console.error("Error during AJAX call:", e);
            stopLoader();
        }
    });
}
function getSettingsConfigWBDetails(domain, role, componenttype, TabId, editableflag, title, flagType,
        activeFlag, mainTabId, mainRoleId, mainDomainId) {
    showLoader();
    $("#kdsFormContainer").remove();
    $(".defaultShowCards").hide();
    $("#showdomainBasedCards").append("<div id='iDXPKDSContainerId'></div>");
    showSelectedTabContent(event, 'dxpKDSFromTab', 'dxpKDSTabContent', 'KDS Form', 'N');
    $.ajax({
        type: "POST",
        url: 'getKDSConigWBData',
        dataType: 'json',
        data: {
            mainDomainId: mainDomainId,
            mainRoleId: mainRoleId,
            mainTabId: mainTabId,
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
        },
        traditional: true,
        async: true,
        cache: false,
        success: function (response) {
            stopLoader();
            $("#iDXPKDSContainerId").html(response['dataStr']);
            $(".kdsx-menu-item.has-sub > .kdsx-menu-link").on("click", function (e) {
                e.preventDefault();
                var $parent = $(this).closest(".kdsx-menu-item.has-sub");
                var $submenu = $parent.children(".kdsx-menu-submenu");
                if ($parent.hasClass("expand")) {
                    $parent.removeClass("expand");
                    $submenu.stop(true, true).slideUp(200);
                } else {
                    $parent.addClass("expand");
                    $submenu.stop(true, true).slideDown(200);
                }
            });

            // Toggle form wrapper
            $(".btn-kdsx-toggle").on("click", function () {
                $("#kdsxFormWrapper").slideToggle(200);
                $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
            });

            // Sticky form wrapper
            $(".btn-kdsx-sticky").on("click", function () {
                $("#kdsxFormWrapper").toggleClass("position-sticky shadow-sm");
                $(this).toggleClass("text-primary");
            });

        }
    });
}
function getKDSNewOrUpdateExistingTypes(gridId, columnName, tableName, title, addOrUpdateFlag, dataObj) {
    showLoader();
    var csrfToken = $("input[name='_csrf']").val();
    $.ajax({
        type: "POST",
        url: 'getKDSNewOrUpdateExistingTypes',
        dataType: 'json',
        data: {
            gridId: gridId,
            columnName: columnName,
            tableName: tableName,
            title: title,
            addOrUpdateFlag: addOrUpdateFlag,
            dataObj: JSON.stringify(dataObj),
            csrfToken: csrfToken,
        },
        traditional: true,
        async: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != undefined && response != "") {
                if (addOrUpdateFlag != null && addOrUpdateFlag != undefined
                        && addOrUpdateFlag != "" && addOrUpdateFlag == 'Y') {
                    $("#newMaterialInput").val("");
                    $("#newInstanceInput").val("");
                    $("#newDescriptionInput").val("");
                    $("#dialog3").html(response['resultMsg']);
                    //getHoverAndImageData(response['temperature'],response['description'],response['dayOfWeek'],response['sunrise'],response['sunset']);
                    $("#dialog3").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'KDS-Material Type'),
                        modal: true,
                        width: 300,
                        height: "auto",
                        /*maxHeight:1000,*/
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
                            $(".ui-dialog .ui-dialog-content").css("overflow", "hidden");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                        },
                        beforeClose: function (event, ui) {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                    if (response['id'] != null && response['id'] != undefined && response['id'] != "") {
                        $("#" + [response['id']]).jqxDropDownList({
                            source: response['typeList'],
                            width: "100%",
                            height: 35,
                            theme: "energyblue",
                            filterable: true,
                            filterPlaceHolder: "Search Material Type",
                            placeHolder: "Select Material Type",
                            dropDownHeight: 250,
                            autoDropDownHeight: false
                        });
                    }


                } else {
                    let isDragging = false;
                    $("#dialog1").html(response['dataStr']);
                    //getHoverAndImageData(response['temperature'],response['description'],response['dayOfWeek'],response['sunrise'],response['sunset']);
                    $("#dialog1").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'KDS-Material Type'),
                        modal: true,
                        width: 850,
                        height: 450,
                        /*maxHeight:1000,*/
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
                            $(".ui-dialog .ui-dialog-content").css("overflow", "hidden");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");

                        },
                        beforeClose: function (event, ui) {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });

                    // ✅ Initialize jqxDropDownList
                    $("#" + [response['id']]).jqxDropDownList({
                        source: response['typeList'],
                        width: "100%",
                        height: 35,
                        theme: "energyblue",
                        filterable: true,
                        filterPlaceHolder: "Search Material Type",
                        placeHolder: "Select Material Type",
                        dropDownHeight: 250,
                        autoDropDownHeight: false
                    });

                    // ✅ Make dropdown items draggable
                    $("#materialDropdown").on("open", function () {
                        const $listItems = $(".jqx-listbox .jqx-listitem-element");
                        $listItems.attr("draggable", "true");

                        $listItems.on("dragstart", function (e) {
                            const itemText = $(this).text().trim();
                            isDragging = true;
                            e.originalEvent.dataTransfer.setData("text/plain", itemText);
                            setTimeout(() => {
                                $("#materialDropdown").jqxDropDownList("close");
                            }, 100);
                        });
                    });

                    // ✅ Reference Input Drop logic
                    const $input = $("#referenceInput");
                    $input
                            .on("dragover", function (e) {
                                e.preventDefault();
                                $(this).addClass("drag-over");
                            })
                            .on("dragleave", function () {
                                $(this).removeClass("drag-over");
                            })
                            .on("drop", function (e) {
                                e.preventDefault();
                                $(this).removeClass("drag-over");
                                const droppedValue = e.originalEvent.dataTransfer.getData("text/plain");
                                if (droppedValue) {
                                    const currentVal = $(this).val().trim();
                                    if (currentVal !== droppedValue) {
                                        $(this).val(droppedValue).removeAttr("readonly").focus();
                                        $("#materialDropdown").jqxDropDownList("selectItem", droppedValue);
                                    }
                                }
                                isDragging = false;
                            });

                    // ✅ Prevent double selection bug
                    $("#materialDropdown").on("select", function (event) {
                        if (isDragging) {
                            event.stopImmediatePropagation();
                            isDragging = false;
                            return;
                        }
                        const selectedItem = event.args.item.label;
                        const currentVal = $input.val().trim();
                        if (currentVal !== selectedItem) {
                            $input.val(selectedItem);
                        }
                    });

                    // ✅ Add New Material Type logic
                    const $showAddFieldBtn = $("#showAddFieldBtn");
                    const $addFieldContainer = $("#addFieldContainer");

                    $showAddFieldBtn.on("click", function () {
                        $showAddFieldBtn.hide();
                        $("#kdsLinePopupFinalId").hide();

                        const row = $(`
  <div 
    class="kdsNewtype-input-row" 
    style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px; width: 100%; align-items: flex-start;"
  >

    <!-- Row 1: Material Type + Instance -->
    <div style="display: flex; gap: 10px; align-items: center; margin-left: 0;">
      <input 
        type="text" 
        placeholder="Enter New Material Type..." 
        id="newMaterialInput" 
        style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; width: 100%; font-size: 14px;"
      />
      <input 
        type="text" 
        placeholder="Enter Instance..." 
        id="newInstanceInput" 
        style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; width: 100%; font-size: 14px;"
      />
    </div>

    <!-- Row 2: Description + Buttons (aligned perfectly with above) -->
    <div style="display: flex; gap: 10px; align-items: center; margin-left: 0;width: 100%;">
      <input 
        type="text" 
        placeholder="Enter Description..." 
        id="newDescriptionInput" 
        style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 6px; width: 100%; font-size: 14px;"
      />

      <button 
        class="kdsNewtype-action-btn add-new"
        style="padding: 8px 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; background-color: #007bff; color: white;"
        onclick="validateAndSubmitNewType('${gridId}','${columnName}','${tableName}','${title}')"
      >+</button>

      <button 
        class="kdsNewtype-action-btn kdsNewtype-delete-btn"
        style="padding: 8px 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; background-color: #dc3545; color: white;"
      >🗑</button>
    </div>

  </div>
`);



                        $addFieldContainer.append(row);

                        row.find(".add-new").on("click", function () {
                            const newValue = row.find("#newMaterialInput").val().trim();
                            if (newValue !== "") {
                                materialTypes.push(newValue);
                                $("#materialDropdown").jqxDropDownList({source: materialTypes});
                                row.find("#newMaterialInput").val("");
                            } else {
                                alert("Please enter a material type before adding.");
                            }
                        });

                        row.find(".kdsNewtype-delete-btn").on("click", function () {
                            row.remove();
                            $showAddFieldBtn.show();
                            $("#kdsLinePopupFinalId").hide();

                        });
                    });
                }
            }
        }
    });
}
function handleMaterialTypeSubmit() {
    try {
        // ✅ Get dropdown & input values
        var selectedItem = $("#materialDropdown").jqxDropDownList("getSelectedItem");
        var selectedText = selectedItem ? selectedItem.label : "";
        var referenceText = $("#referenceInput").val().trim();

        // ✅ Validation
        if (selectedText === "" || referenceText === "") {
            alert("Please select Material Type and enter Reference Material Type before submitting.");
            return;
        }

        // ✅ Inline popup message (loading + success)
        var resultHtml = `
            <div class="kdsInlinePopup">
                <div class="kdsInlinePopup-content">
                    <img src="https://cdn.jsdelivr.net/gh/loadingio/loading.io-assets@master/img/p/ld-spin.svg"
                         class="kdsInlinePopup-gif" alt="loading" />
                    <div class="kdsInlinePopup-text">
                        <strong>${selectedText}</strong> ➜ <strong>${referenceText}</strong>
                        <div class="kdsInlinePopup-msg">Mapping Updated Successfully!</div>
                    </div>
                </div>
            </div>
        `;

        // Remove previous popup if exists
        $(".kdsInlinePopup").remove();

        // Append inline popup below Submit section
        $(".kdsNewtype-submit-section").after(resultHtml);
        $(".kdsInlinePopup").hide().fadeIn(250);

        // ✅ Replace spinner with checkmark after 2s
        setTimeout(() => {
            $(".kdsInlinePopup-gif").attr("src", "https://cdn-icons-png.flaticon.com/512/845/845646.png");
        }, 1800);

        // ✅ Update dropdown and input
        setTimeout(() => {
            var allItems = $("#materialDropdown").jqxDropDownList("getItems");
            var exists = allItems.some(item => item.label === referenceText);

            // Add new item if not already there
            if (!exists) {
                $("#materialDropdown").jqxDropDownList("addItem", referenceText);
            }

            // Select the updated value
            $("#materialDropdown").jqxDropDownList("selectItem", referenceText);
            $("#referenceInput").val(referenceText);
        }, 2000);

        // ✅ Final success message after mapping complete
        setTimeout(() => {
            $(".kdsInlinePopup").fadeOut(200, function () {
                $(this).remove();

                // Show final summary message inside modal
                var finalMsg = `
                    <div class="kdsInlinePopup kdsInlinePopup-final" id="kdsLinePopupFinalId">
                        <div class="kdsInlinePopup-content">
                            <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
                                 class="kdsInlinePopup-gif" alt="success" />
                            <div class="kdsInlinePopup-text">
                                <div class="kdsInlinePopup-msg">
                                    <strong>Mapping Completed!</strong><br/>
                                    Validations and workflows are updated with your new Material Type.
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                $(".kdsNewtype-submit-section").after(finalMsg);
                $(".kdsInlinePopup-final").hide().fadeIn(350);
            });
        }, 3500);

    } catch (err) {
        console.error("Error on Submit:", err);
    }
}
function validateAndSubmitNewType(gridId, columnName, tableName, title) {
    const newType = $("#newMaterialInput").val().trim();
    const instance = $("#newInstanceInput").val().trim();
    const desc = $("#newDescriptionInput").val().trim();
    $("#kdsLinePopupFinalId").hide();

    let isValid = true;

    $("#newMaterialInput, #newInstanceInput, #newDescriptionInput").css("border", "1px solid #ccc");

    if (newType === "") {
        $("#newMaterialInput").css("border", "2px solid red");
        isValid = false;
    }
    if (instance === "") {
        $("#newInstanceInput").css("border", "2px solid red");
        isValid = false;
    }
    if (desc === "") {
        $("#newDescriptionInput").css("border", "2px solid red");
        isValid = false;
    }

    if (!isValid) {
        alert("Please fill all required fields: Material Type, Instance, and Description.");
        return;
    }

    if (newType.length > 10) {
        alert("Material Type cannot exceed 10 characters.");
        $("#newMaterialInput").css("border", "2px solid orange");
        return;
    }

    getKDSNewOrUpdateExistingTypes(gridId, columnName, tableName, title, 'Y', {
        newType,
        instance,
        desc
    });
}


function extractAttachFileUsingAi(tabId, attachTypeStr) {

    let attachTypeArray = attachTypeStr.split(",");
    let attachSelectStr = "<div class='extractFileAttactTypeClass'>";

    if (attachTypeArray !== null && attachTypeArray.length > 0) {
        for (const attachType of attachTypeArray) {
            attachSelectStr += "<div><input type='radio' name='attachType' value='" + attachType + "'/> " + attachType + "</div>";
        }
    }
    attachSelectStr += "</div>";

    $("#dialog1").html(attachSelectStr);
    $("#dialog1").dialog({
        resizable: false,
        title: labelObject['Extract File'] || 'Extract File',
        modal: true,
        width: 300,
        height: 350,
        fluid: true,
        buttons: [{
                text: labelObject['ok'] || 'ok',
                click: function () {
                    let extractOptionVal = $(".extractFileAttactTypeClass input[type='radio']:checked").val();
                    let sequenceId = "";
                    $(".visionEnclosureTable td").each(function () {
                        if (extractOptionVal == $(this).text()) {
                            sequenceId = $(this).next().children().attr("id");
                            sequenceId = sequenceId.replace("image_", "");
                        }

                    });
                    aiExtractFileFromAttachements(tabId, sequenceId);
                    $(this).html("");
                    $(this).dialog("close");
                }
            }],
        open: function () {
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(".visionHeaderMain, .visionFooterMain").css("z-index", "999");
        },
        beforeClose: function () {
            $(".visionHeaderMain, .visionFooterMain").css("z-index", "99999");
        }
    });
}
function aiExtractFileFromAttachements(tabId, id, specModelNo) {
    showLoader();
    $.ajax({
        url: "materialPDF?id=" + id + "&tabId=" + tabId + "&specModelNo=" + specModelNo,
        method: "GET",
        xhrFields: {
            responseType: "blob"
        },
        success: function (data, status, xhr) {
            stopLoader();
            let filename = "downloadedFile.pdf";

            // Extract filename from Content-Disposition header if available
            const disposition = xhr.getResponseHeader("Content-Disposition");
            if (disposition && disposition.indexOf("filename=") !== -1) {
                filename = disposition
                        .split("filename=")[1]
                        .replace(/"/g, "")
                        .trim();
            }

            // Create a File object from blob data
            const fileType = data.type || "application/pdf";
            const file = new File([data], filename, {type: fileType});
            openAINavigation();
            $(".aiChatgptResponseContainer").append("<div class='aiAppendSenderDataClass userSelectedOption'>Extracting text</div>");
            sendFileDataWithPrompt(file, "Extract text with 4000 characters or fewer, containing technical specifications or product details.", fileType, "Y");
        },
        error: function (xhr, status, error) {
            console.error("Error downloading file:", error);
        }
    });
}
function aiAttachmentExtractUpdateData(aiTextId) {
    showaiLoader();
    aiAutoScrollContainer();
    const logData = `<div class='aiLensResultDataClass'><div>Processing: Automatically mapping the results...</div></div>`;
    defaultAITypingBasedOnResponse(logData);
    let recordNo = $("#RECORD_NO").val();
    let aiText = $("#" + aiTextId).text();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'updateLensTextData',
        data: {
            'recordNo': recordNo,
            'aiText': aiText
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != "" && response != "null") {
                let dataParams = [
                    {apiParamName: "table_name", apiParamType: "F", apiParamValue: "O_RECORD_MASTER"},
                    {apiParamName: "colsarry", apiParamType: "F", apiParamValue: "RECORD_NO,CLASS_TERM,MASTER_COLUMN10"},
                    {apiParamName: "batch_id", apiParamType: "F", apiParamValue: recordNo},
                    {apiParamName: "access_name", apiParamType: "B", apiParamValue: "IDXPDBNAME"},
                    {apiParamName: "user_name", apiParamType: "B", apiParamValue: "IDXPDBUSERNAME"},
                    {apiParamName: "password", apiParamType: "B", apiParamValue: "IDXPDBPWD"},
                    {apiParamName: "host", apiParamType: "B", apiParamValue: "IDXPDBHOST"},
                    {apiParamName: "port", apiParamType: "B", apiParamValue: "IDXPDBPORT"},
                    {apiParamName: "filter_column1", apiParamType: "F", apiParamValue: "RECORD_NO"},
                    {apiParamName: "apiURL", apiParamType: "B", apiParamValue: "DATA_EXTRACTION_URL1"}
                ];

                dataAutoMappingProcess(recordNo, dataParams);

            }

        }, error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
        }

    });
}
function dataAutoMappingProcess(recordNo, paramArray) {
    showaiLoader();

    $.post('getPhythonDHSApiResponse', {
        paramArray: JSON.stringify(paramArray),
        batchId: recordNo
    })
            .done(function (data) {
                if (data) {
                    $.ajax({
                        url: 'confirmCharacteristicsUpdate',
                        type: 'POST',
                        data: {batchId: recordNo},
                        traditional: true,
                        dataType: 'html'
                    })
                            .done(function (response) {
                                stopaiLoader();
                                console.log("Response:", response);
                                $("body").append("<div id='charResult'>" + response + "</div>");

                                let results = "";
                                $("#charResult table td").each(function () {
                                    if ($(this).text().trim() === "Properties Updated") {
                                        results = "<div>Mapped results successfully</div>"
                                        results += "Total " + $(this).text().trim() + ": " + $(this).next().text().trim();
                                        return false;
                                    }
                                });
                                $("#charResult").remove();

                                console.log(results);

                                const logData = `<div class='aiLensResultDataClass'><div>${results}</div></div>`;
                                defaultAITypingBasedOnResponse(logData);
                            })
                            .fail(function (e) {
                                console.error("Error:", e.status, e.responseText);
                                sessionTimeout(e);
                            })
                            .always(function () {
                                stopLoader();
                            });
                } else {
                    const logData = `<div class='aiLensResultDataClass'><div>${data}</div></div>`;
                    defaultAITypingBasedOnResponse(logData);
                    console.warn("No data returned from getPhythonDHSApiResponse.");
                    stopLoader();
                }
            })
            .fail(function (e) {
                console.error("Error in getPhythonDHSApiResponse:", e);
                sessionTimeout(e);
                stopLoader();
            });
}

function showProcessNotificationMessage(message) {
    if (message != null) {
        $("#processNotificationDialogId").remove();
        $("body").append("<div id='processNotificationDialogId'></div>");
        $("#processNotificationDialogId").html(message);
        $("#processNotificationDialogId").dialog({
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
            }
        });
    }
}
function refreshProcessNotificationStatus(responseId, title, batchId, gridId, clusterId, menuId, roleId, initparams, type) {

    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'json',
        cache: false,
        url: 'refreshProcessNotificationStatus',
        async: true,
        data: {
            responseId: responseId
        },
        success: async function (response) {
            if (response != null && response != undefined && response != "" && !jQuery.isEmptyObject(response)) {
                var intervalId = notificationIntervals[responseId];
                if (intervalId) {
                    clearInterval(intervalId);
                    delete notificationIntervals[responseId];
                }
                var message = response['RESPONSE_DATA'];
                var dataStatus = response['DATA_STATUS'];
                if (title === 'Enrichment') {
                    let charResult = await checkCharacteristicsUpdate(title, batchId, initparams);
                    $("body").append("<div id='charResult'>" + charResult + "</div>");
                    $("#charResult table td").each(function () {
                        if ($(this).text().trim() === "Properties Updated") {
                            message += "  /n Total " + $(this).text().trim() + ": " + $(this).next().text().trim();
                            return false;
                        }
                    });
                    $("#charResult").remove();
                }
                showProcessNotification(responseId, title, message, batchId, tableName, gridId, clusterId, menuId, roleId, dataStatus, type);
            }
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
            var intervalId = notificationIntervals[responseId];
            if (intervalId) {
                clearInterval(intervalId);
                delete notificationIntervals[responseId];
            }
        }

    });
}

function showProcessNotification(responseId, title, message, batchId, tableName, gridId, clusterId, menuId, roleId, dataStatus, type) {
    // Show red dot
    $("#notificationDot").show();

    // Show popup fade
    const popup = $("#notificationPopup");
    popup.text(message).fadeIn(300).css("opacity", "1");

    setTimeout(() => {
        popup.fadeOut(500, () => popup.css("opacity", "0"));
    }, 10000);

    const listItem = $(`
        <li>
            <span>${message}</span>
            <span class="close-btn">&times;</span>
        </li>
    `);
//    listItem.data("response", response);

    listItem.on("click", function () {
        markNotificationAsSeen(responseId);
        toggleNotificationBar();
        getAIDataView(menuId, roleId);
        openAINavigation();
        AiLensViewAPIResponse("" + title + " :", message, batchId, tableName, gridId, clusterId, dataStatus, type);

        setTimeout(() => {
            $('#sidebarContentWrapperID ul li').removeClass('fioriHighlightTab');
            $("#li_" + type + "")[0].scrollIntoView({behavior: "smooth", block: "center"});
            $("#li_" + type + "").addClass('fioriHighlightTab');
        }, 1500);
        setTimeout(() => {
            $("#etlPageBody").hide()
        }, 3000);
        $(this).remove();
    });

    // Attach click handler for remove
    listItem.find(".close-btn").on("click", function (e) {
        e.stopPropagation(); // prevent toggle
        $(this).closest("li").remove();
        markNotificationAsSeen(responseId);

        // if no notifications left, hide red dot
        if ($("#notificationList li").length === 0) {
            $("#notificationDot").hide();
        }
    });

    // Add to notification bar list
    $("#notificationList").prepend(listItem);
}

function insertProcessNotification(responseId, title, batchId, gridId, clusterId, menuId, roleId, paramArraystr, type) {
    var data = {
        responseId: responseId,
        title: title,
        batchId: batchId,
        gridId: gridId,
        clusterId: clusterId,
        menuId: menuId,
        roleId: roleId,
        paramArraystr: paramArraystr,
        type: type
    };
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'html',
        cache: false,
        url: 'insertProcessNotification',
        async: true,
        data: {
            responseId: responseId,
            paramArry: data != null ? JSON.stringify(data) : ""
        },
        success: function (response) {
            if (response != null && response != undefined && response != "") {
                console.log(response);
            }
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
        }
    });
}

function getViewProcessNotifications() {
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'json',
        cache: false,
        url: 'getViewProcessNotifications',
        async: true,
        data: {
        },
        success: function (response) {
            if (Array.isArray(response) && response.length > 0) {
                console.log("Received notifications:", response);

                response.forEach(function (notif) {
                    let responseId = notif[0];
                    let parramArrystr = notif[1];
                    var params = JSON.parse(parramArrystr);

                    if (!notificationIntervals[responseId]) {
                        notificationIntervals[responseId] = setInterval(function () {
                            refreshProcessNotificationStatus(
                                    responseId,
                                    params.title,
                                    params.batchId,
                                    params.gridId,
                                    params.clusterId,
                                    params.menuId,
                                    params.roleId,
                                    params.paramArraystr,
                                    params.type,
                                    );
                        }, 1000);
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

function markNotificationAsSeen(responseId) {
    $.ajax({
        type: 'POST',
        url: 'updateProcessNotificationFlag',
        data: {responseId: responseId},
        success: function (response) {
            if (response != null && response != undefined && response != "" && response == "successfully Updated") {
                console.log("Notification marked as seen");
                if (notificationIntervals[responseId]) {
                    clearInterval(notificationIntervals[responseId]);
                    delete notificationIntervals[responseId];
                }
            }
        },
        error: function (e) {
            console.error("Error updating notification flag for", responseId, e);
        }
    });
}
function showDQMStatusFinalApprovalChecks(data, url, gridId, tableName, batchId)
{
    $.ajax({
        type: "POST",
        url: "showDQMClientReleasedProcessChecks",
        data: {
            gridId: gridId,
        },
        dataType: "json",
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            if (result != null && !jQuery.isEmptyObject(result)) {
                var message = result['dqmClientReleaseChecksStr'];
                $("#dialog").html(message);
                $("#dialog").dialog({
                    resizable: false,
                    modal: true,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 400,
                    maxWidth: 'auto',
                    fluid: true,
                    dialogClass: "dqmClientReleaseClass",
                    buttons: [{
                            text: (labelObject['Submit'] != null ? labelObject['Submit'] : 'Submit'),
                            click: function () {
                                $("#dqmClientReleaseCheckboxErrorId").text("");
                                var selectedCheckboxes = [];
                                $('input[name="checkboxGroup"]:checked').each(function () {
                                    selectedCheckboxes.push($(this).prev('label').text()); // Get label text for checked boxes
                                });
                                var totalCheckboxes = $('.dqmClientReleaseChecksClass input[name="checkboxGroup"]').length;
                                if (selectedCheckboxes.length > 0 && (selectedCheckboxes.length === totalCheckboxes)) {
                                    processDQMStatusFinalApprovalChecks(url, data, gridId, tableName);
                                    saveprocessDQMStatusFinalApprovalChecks(batchId, selectedCheckboxes);
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                } else {
                                    $("#dqmClientReleaseCheckboxErrorId").show();
                                    $("#dqmClientReleaseCheckboxErrorId").text("Please check all the checks");
                                    var element = $('.dqmClientReleaseClass .ui-dialog-content');  // Select the element using jQuery
                                    element.scrollTop(element[0].scrollHeight);
                                }



                            }
                        },
                        {
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
            stopLoader();
            sessionTimeout(e);
        }

    });
}

function processDQMStatusFinalApprovalChecks(url, data, gridId, tableName)
{
    $.ajax({
        type: "POST",
        url: url,
        data: {
            gridJsonData: JSON.stringify(data),
            gridId: gridId,
            tableName: tableName
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
                var jsresTable = "<div class='visionBulkUserMain'><table class='visionBulkUser'><thead><th class='visionBulkUserHeader'>S.No</th><th class='visionBulkUserHeader'>${labelobj['User Name'] != null ? labelobj['User Name']: 'User Name'}</th><th class='visionBulkUserHeader'>Message</th></thead><tbody>";
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
                                refreshGrid(gridId);
                            } else if (response != null && response != '' && response.lastIndexOf("Deleted Successfully.") > -1) {
                                // alert();

                                $("#" + gridId).jqxGrid('clearselection');
                                // selectedIndexs.length = 0;
                                refreshGrid(gridId);
                                // return true;
                            } else if (response != null && response != '' && response.lastIndexOf("Updated Successfully.") > -1)
                            {
                                // $("#operationName").val("UPDATE");
                                //alert("gridId:::"+gridId);
                                $("#" + gridId).jqxGrid('clearselection');
                                // MM_MASTER_O_RECORD_BU_LEVEL
                                //  selectedIndexs.length = 0;
                                //  $('#' + gridId + '_Add').css("display", "block");
                                refreshGrid(gridId);
                                //getGridResults();
                            } else if (response != null && response != '' &&
                                    (response.indexOf("Updated Successfully") > -1 || response.indexOf("Deleted Successfully") > -1
                                            || response.indexOf("Inserted Successfully") > -1))
                            {
//                                  $("#" + gridId).jqxGrid('clearselection');
                                refreshGrid(gridId);
                            } else
                            {
                                refreshGrid(gridId);
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
            if (result != null && result != '' && result != undefined && result == "Y") {

                $("#dialog").dialog("close");

            }


            // ravi start
            setTimeout(changeflagFuction, 300);
            // ravi end
        },
        error: function (e)
        {
            stopLoader();
            sessionTimeout(e);
        }

    });
}
function  saveprocessDQMStatusFinalApprovalChecks(batchId, selectedCheckboxes)
{
    $.ajax({
        type: "POST",
        url: "saveDQMClientReleasedProcessChecks",
        data: {
            batchId: batchId,
            selectedCheckboxes: JSON.stringify(selectedCheckboxes)
        },
        dataType: "html",
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            if (result != null && !jQuery.isEmptyObject(result)) {

            }

        },
        error: function (e)
        {
            stopLoader();
            sessionTimeout(e);
        }

    });
}

function dataInjectionStatusUpdate(tableName, gridId, status, clusterId) {
    var recordsList = [];
    var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedRowIndexes.length > 0) {

        for (var i = 0; i < selectedRowIndexes.length; i++) {
            if (selectedRowIndexes[i] !== undefined && selectedRowIndexes[i] >= 0) {
                var rowData = $('#' + gridId).jqxGrid('getrowdata', selectedRowIndexes[i]);
                if (rowData != null && rowData != "" && rowData != undefined) {
                    recordsList.push(rowData['FILENAME']);
                }
            }
        }
        $.ajax({
            type: "POST",
            url: "deleteInjectionStatus",
            data: {
                recordsList: JSON.stringify(recordsList),
                status: status,
                tableName: tableName
            },
            dataType: "html",
            traditional: true,
            cache: false,
            success: function (result) {
                stopLoader();
                if (result !== null && !jQuery.isEmptyObject(result)) {
                    $("#logoutDailog").html((labelObject[result] != null ? labelObject[result] : result));
                    $("#logoutDailog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        width: 300,
                        height: 135,
                        fluid: true,
                        buttons: [{
                                text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                click: function () {
                                    try {
                                        fetchClusterTabsData(clusterId, gridId, 3, 'Y', 'GRID', 'null');
                                    } catch (e) {
                                    }
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

            },
            error: function (e)
            {
                stopLoader();
                sessionTimeout(e);
            }
        });
    } else {
        showErrorPopupMessage("Please select a row to Process");
        return;
    }
}
function fileImageSendApi(gridId) {
    $("#fileImageInjectInput").remove();
    var htmlStr = `<input type="file" id="fileImageInjectInput" accept=".zip">`;
    $("body").append(htmlStr);
    $("#fileImageInjectInput").click();
    $("#fileImageInjectInput").change(function () {
        const files = this.files;

        if (!files || files.length === 0) {
            console.log("No files selected");
            return;
        }
        showLoader();
        let formData = new FormData();
        formData.append("file", files[0]);
        $.ajax({
            url: "sendFileZipImgApi",
            method: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function (res) {
                stopLoader();
                $("#logoutDailog").html((labelObject[res] != null ? labelObject[res] : res));
                $("#logoutDailog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 300,
                    height: 135,
                    fluid: true,
                    buttons: [{
                            text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                            click: function () {
                                try {
                                    gridoperations(gridId, 'refresh');
                                } catch (e) {
                                }
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

                console.log(res);
            }, error: function (jqXHR, textStatus, errorThrown) {
                showErrorPopupMessage(jqXHR);
            }

        });
    })



}
function dhDuplicateCheck(gridId)
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
                                            url: "dhDuplicateCheck",
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
                                                var resp = response;
                                                if (resp != null && resp != '' && resp != undefined) {
                                                    var resp1 = JSON.parse(resp);
                                                    var itemCodesList = resp1['itemCodeList'];
                                                    if (itemCodesList != null && itemCodesList != '' && itemCodesList != undefined && itemCodesList != "null") {
                                                        var itemCodeListSize = itemCodesList.split(",");
                                                        var message = itemCodeListSize.length + " duplicates Found";
                                                        $("#logoutDailog").html((labelObject[message] != null ? labelObject[message] : message));
                                                        $("#logoutDailog").dialog({resizable: false,
                                                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                                            modal: true,
                                                            width: 300,
                                                            height: 135,
                                                            fluid: true,
                                                            buttons: [{
                                                                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                                                                    click: function () {
                                                                        var paramArray = [
                                                                            {column: 'ITEM_CODE', value: resp1['itemCodeList'], operator: 'IN', symbol: 'IN'}, // Multiple values for 'name'
                                                                        ];
                                                                        if (paramArray != null && paramArray.length > 0) {

                                                                            $("#" + gridId + "_filter_columns").remove();
                                                                            $("#" + gridId + "_filter_columns_flag").remove();
                                                                            $("#" + gridId).append("<input type='hidden' id='" + gridId + "_filter_columns' value=''/>");
                                                                            $("#" + gridId).append("<input type='hidden' id='" + gridId + "_filter_columns_flag' value='Y'/>");
                                                                            $("#" + gridId + "_filter_columns").val(JSON.stringify(paramArray));
                                                                            try {
                                                                                $("#" + gridId).jqxGrid('clearselection');
                                                                            } catch (e) {
                                                                            }
                                                                            try {
                                                                                $("#" + gridId).jqxGrid('updatebounddata');
                                                                            } catch (e) {
                                                                            }





                                                                        }
//                                                                   userFilters.forEach(function (filter) {
//                                                                        var filterDataField = filter.field;
//                                                                        var values = filter.values;
//
//                                                                        // NEW filter group for this field
//                                                                        var filterGroup = new $.jqx.filter();
//
//                                                                        for (var i = 0; i < values.length; i++) {
//
//                                                                            var filval = values[i];
//                                                                            filval = filval + "";// force string
//                                                                            var gridFilter = filterGroup.createfilter('stringfilter', filval, 'contains');
//
//                                                                            // 1 = OR , 0 = AND
//                                                                            filterGroup.addfilter(1, gridFilter);
//                                                                        }
//                                                                        $("#" + gridId).jqxGrid('addfilter', filterDataField, filterGroup);
//                                                                    });
//
//                                                                    $("#" + gridId).jqxGrid('applyfilters');





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
                                                    } else {
                                                        popupMessage(resp1['result']);
                                                    }
                                                }
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
function showPopupGridData(gridId, paramArray) {
    showLoader();
    $.ajax({
        datatype: "json",
        type: "POST",
        url: 'getCloudGrid',
        data: {
            'gridId': gridId,
//            'batchId': batchId,
            roleId: $("#rolehid").val(),
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            $("#logoutDailog").html("<div id='" + gridId + "'></div>");
            $("#logoutDailog").dialog({
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                width: 700,
                height: 400,
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
                    gridConfig(response, 0, paramArray, gridId, "");
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
function getDMAAnalysisForm(gridId, formId, tableName, viewName) {
    showLoader();
    $.ajax({
        url: "getEmptyForm",
        type: "post",
        data: {
            gridId: formId
        },
        success: function (response) {
            stopLoader();
            if (!isNullOrUndefined(response) && !jQuery.isEmptyObject(response)) {
                var r = JSON.parse(response);
                $("#analysisDialog").remove();
                $("body").append("<div id='analysisDialog'></div>");
                $('#analysisDialog').html(r['emptyFormStr']);
                $("#analysisDialog").dialog({resizable: false,
                    title: (labelObject['Input Parameters'] != null ? labelObject['Input Parameters'] : 'Input Parameters'),
                    modal: true,
                    height: "auto",
                    width: 600,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Run Analysis'] != null ? labelObject['Get Analysis Report'] : 'Get Analysis Report'),
                            click: function () {
                                showLoader();
                                $.ajax({
                                    url: "performDMAAnalysis",
                                    type: "post",
                                    data: {
                                        gridId: formId,
                                        analysisType: $("#ANALYSIS_TYPE").val(),
                                        batchId: $("#BATCH_ID").val(),
                                        tableName: tableName,
                                        gridId: gridId,
                                        viewName: viewName
                                    },
                                    success: function (response) {
                                        stopLoader();
                                        if (!isNullOrUndefined(response) && !jQuery.isEmptyObject(response)) {
                                            const tableHtml = buildTable(response);
                                            $("#analysisDialog").remove();
                                            $("body").append("<div id='analysisDialog'></div>");
                                            $('#analysisDialog').html(tableHtml);

                                            $("#analysisDialog").dialog({
                                                resizable: true,
                                                title: (labelObject['Report'] != null ? labelObject['Report'] : 'Report'),
                                                modal: true,
                                                minHeight: 300,
                                                maxHeight: 500,
                                                width: 900,
                                                fluid: true,
                                                buttons: [{
                                                        text: (labelObject['Download Report'] != null ? labelObject['Download Report'] : 'Download Report'),
                                                        click: function () {
                                                            showLoader();

                                                            downloadDQDMAReportPdf(tableHtml)
                                                                    .then(() => {
                                                                        $("#analysisDialog").html("");
                                                                        $("#analysisDialog").dialog("destroy");
                                                                    })
                                                                    .finally(() => {
                                                                        stopLoader();
                                                                    });
                                                        }

                                                    }, {
                                                        text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                                                        click: function () {
                                                            $(this).html("");
                                                            $(this).dialog("destroy");
                                                        }
                                                    }],
                                                open: function () {

                                                    $(this).css({
                                                        "overflow-x": "auto",
                                                        "overflow-y": "auto"
                                                    });
                                                }
                                            });

                                            $(".ui-dialog").addClass("AnalysisPopupForm");
                                        }
                                    },
                                    error: function (error) {

                                    }
                                });


                                $(this).html("");
                                $(this).dialog("destroy");

                            }
                        }]
                });
                $(".ui-dialog").addClass("AnalysisPopupForm");
            }
        },
        error: function (error) {

        }
    });
}

function getColorStyle(value) {
    let color = "";
    if (value < 20)
        color = "#d11d1d"; // maroon
    else if (value < 40)
        color = "#ff0000"; // Orange
    else if (value < 70)
        color = "#ffc000"; // Yellow
    else if (value < 90)
        color = "#92d050"; // Light Green
    else
        color = "#00b050"; // Green
    return `background-color: ${color};`;
}
function buildColorLegend() {
    return `
        <table style="border-collapse:separate; border-spacing:6px; margin-bottom:10px; font-family:Arial; font-size:14px;">
<tr>
<td style="padding:3px 12px; border:1px solid #000; ${getColorStyle(10)}">&lt; 20</td>
<td style="padding:3px 12px; border:1px solid #000; ${getColorStyle(35)}">20 - 40</td>
<td style="padding:3px 12px; border:1px solid #000; ${getColorStyle(50)}">40 - 70</td>
<td style="padding:3px 12px; border:1px solid #000; ${getColorStyle(80)}">70 - 90</td>
<td style="padding:3px 12px; border:1px solid #000; ${getColorStyle(100)}">&gt; 90</td>
</tr>
</table>
    `;
}

function buildTable(response) {
    let tableHtml = `
        
        <h1 style="
            text-align:center; 
            color:#444; 
            font-family:Arial, sans-serif; 
            margin-bottom:20px;
            font-size: 30px;
            font-weight: 500;
        ">Data Maturity Score Card</h1>
        ${buildColorLegend()}
        <table id="analysisReportTable" style="
            width:100%; 
            border-collapse:collapse; 
            text-align:center; 
            border: 1px solid black;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        ">`;
    tableHtml += "<thead><tr>";
    response.columns.forEach(col => {
        tableHtml += `<th style="border:1px solid #000; padding:8px; background-color:#b4c6e7;">${col}</th>`;
    });
    tableHtml += "</tr></thead><tbody>";

    response.data.forEach(item => {
        tableHtml += `<tr>`;
        response.columns.forEach(col => {
            let cellValue = "";
            let cellStyle = "border:1px solid #000; padding:8px;";
            if (col === response.columns[0]) {
                cellValue = item[col] || "UNKNOWN";
            } else if (col === "RECORD COUNT") {
                cellValue = item[col] || 0;
            } else {
                cellValue = item[col] || 0;
                cellStyle += getColorStyle(item[col] || 0);
            }

            tableHtml += `<td style="${cellStyle}">${cellValue}</td>`;
        });
        tableHtml += `</tr>`;
    });

    tableHtml += "</tbody></table>";
    return tableHtml;
}

function downloadDQDMAReportPdf(content) {
    return new Promise((resolve, reject) => {

        const compressed = pako.gzip(content);

        $.ajax({
            url: 'generateDMAPdfReport',
            type: 'POST',
            contentType: 'application/octet-stream',
            processData: false,
            data: compressed,
            headers: {'Content-Encoding': 'gzip'},
            xhrFields: {responseType: 'blob'},

            success: function (data) {
                const blob = new Blob([data], {type: 'application/pdf'});
                const url = window.URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = url;
                a.download = 'Report.pdf';
                a.click();

                resolve();
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}














