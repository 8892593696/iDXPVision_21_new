/*For setting cursor position after typing some thing in value column of properties tab
 * Created By Azmat*/


var tabsOldData = {};
var tabUnselectFlag = '';
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
//  ravi end
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
try {
    labelObject = JSON.parse($("#labelObjectHidden").val());
} catch (e) {
}
$(function () {

// ravi start
    $(document).unbind("keyup").keyup(function (event) {
        if (event.keyCode === 13) {
            var active = document.activeElement;
            if (active.className == "fs-wrap multiple") {
                var offsetParent = active.offsetParent;
                offsetParent.onkeypress();
            }
        }
    });

    $(document).click(function (event) {
        var target = event.target;
        if (target != null && target.className != null && typeof target.className != "object") {
            if (target != null && target.className != null && target.className.indexOf("visionFormDataInputImage") != -1) {
                targetInput = $(target).closest(".value_td").find('input');
            }
            if (target != null && target.className != null && (target.className.indexOf("jqx-grid-cell") != -1 || target.tagName == 'BODY')) {
                if (targetInput != null && targetInput != '' && targetInput != undefined) {
                    targetInput.focus();
                }
            }
        }
    });
    $("#accordianTabs").on("accordionbeforeactivate", function (event, ui) {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }

        if (!executed) {
            if (changeflag) {

                if (accordionSwitchflag) {
                    event.preventDefault();
                }

                // $("#regRorm4").css("display", "block");
                $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
                $("#logoutDailog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 300,
                    height: 135,
                    fluid: true,
                    buttons: [

                        {
                            text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                //iterationNum=0;

                            }
                        }
                        , {
                            text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                            click: function () {

                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");


                                var newIndex = $(ui.newHeader).index('h3');
                                console.log("newIndex::" + newIndex);
                                accordionSwitchflag = false;
                                changeflag = false;
                                executed = true;
                                globalTabId = null;

                                if (newIndex > -1) {
                                    ui.newHeader[0].onclick();
                                    $("#accordianTabs").accordion({
                                        active: newIndex
                                    });

                                } else if (newIndex < 0) {
                                    $("#accordianTabs").accordion({active: false});
                                }
                                accordionSwitchflag = true;


                            }
                        }
                    ],
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
        }

    });

    // ravi end
    $("#accordion").on("accordionbeforeactivate", function (event, ui) {

        var oldDataFlag = false;

        if (!executed) {
            var tabId = (globalTabId != null && globalTabId.indexOf('ERP_SAP') < 0) ? globalTabId : globalErpTab;
            //var  tabId= globalTabId;
            console.log("tabId : " + tabId);

            var jsonOBJ = {};
            jsonOBJ.feildIds = [];
            jsonOBJ.feildValues = [];
            var matchedcount = 0;


            var dataView = $("#" + tabId + "_Update").attr("data-view");

            if (tabId != null && (dataView == "TABLE-VIEW" || dataView == "FORM-VIEW")) {
                changeflag = false;
                if (dataView == "TABLE-VIEW") {
                    var table_view_tabId = tabId + '_tbl';
                    var selectedTabOldData = tabsOldData[table_view_tabId];
                } else {
                    var selectedTabOldData = tabsOldData[tabId];
                }


                $("[id*=" + tabId + "]  :input").each(function () {
                    var textid = $(this).attr("id");
                    var type = $(this).attr("type");
                    var textval = $(this).val();
//                console.log("textid:::" + textid);
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


                    var textOldVal = "";
                    if (selectedTabOldData != null) {
                        textOldVal = selectedTabOldData[textid];
                        if (textid != null && textid != 'CREATE_DATE' && textval != textOldVal) {
                            matchedcount++;
                        }
                    }
//                console.log(textval + ":::" + textid + "::" + textOldVal);

                });
            }


            if (matchedcount > 0) {
                changeflag = true;
            }
            if (!changeflag) {
                $("[id^=regRorm]").removeClass("accordionContentShow");
            }

            console.log("in accordians before activate");


            labelObject = {};
            try {
                labelObject = JSON.parse($("#labelObjectHidden").val());
            } catch (e) {

            }
            var $this = $(this);

            var newPanelId = $(ui.newPanel).attr('id');
            var oldPanelId = $(ui.oldPanel).attr('id');
            console.log("::newPanel Id:::" + newPanelId);
            console.log("::oldPanel Id:::" + oldPanelId);
            var oldTabId = $(ui.oldHeader).attr('id');
            var newTabId = $(ui.newHeader).attr('id');
            console.log("oldTabId:::" + oldTabId);
            console.log("newTabId:::" + newTabId);


            var TabId = (oldTabId != null) ? oldTabId : newTabId;
            console.log("TabId : " + TabId);

            var dataOnclick = $("#" + TabId).attr('data-onclick');
            console.log("dataOnclick : " + dataOnclick);

            if (dataOnclick != null && dataOnclick.indexOf("_OLD") > -1) {
                oldDataFlag = true;
                var firstregRormID = $("#" + TabId).next().attr('id');
                var firstregRormIDNum = firstregRormID.substring(7, firstregRormID.length);
                var secondregRormIDNum = +firstregRormIDNum + +1;
                var secondregRormID = "regRorm" + secondregRormIDNum;
            }


            console.log("old data flag value  ----> : " + oldDataFlag);
            console.log("Change flag value : " + changeflag);

            if (changeflag) {
                if (oldDataFlag) {
                    $("#" + secondregRormID).addClass("accordionContentShow");
                }
                if (accordionSwitchflag) {
                    event.preventDefault();
                }

                // $("#regRorm4").css("display", "block");
                $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
                $("#logoutDailog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    width: 300,
                    height: 135,
                    fluid: true,
                    buttons: [

                        {
                            text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                //iterationNum=0;

                            }
                        }
                        , {
                            text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                            click: function () {
                                if (oldDataFlag) {
                                    $("#" + secondregRormID).removeClass("accordionContentShow");
                                }
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");


                                var newIndex = $(ui.newHeader).index('h3');
                                console.log("newIndex::" + newIndex);
                                accordionSwitchflag = false;
                                changeflag = false;
                                executed = true;
                                if (newIndex > -1) {
                                    $("#accordion").accordion({
                                        active: newIndex
                                    });
                                } else if (newIndex < 0) {
                                    $("#accordion").accordion({active: false});
                                }
                                accordionSwitchflag = true;


                            }
                        }
                    ],
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

        }
    });

    tabsOldData = {};
});



$.fn.setCursorPosition = function (pos) {
    this.each(function (index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);

            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    });
    return this;
};
var labelObject = {};
var selecteIndexes = [];

var grioldDataObj = {};
var selectedDataArray = [];
var errorMessageDataObj = {};
var MyselectedDataArray = [];

var refineSearchText = labelObject['Refine your search by adding more keywords or click on search to view records'] != null ? labelObject['Refine your search by adding more keywords or click on search to view records'] : 'Refine your search by adding more keywords or click on search to view records';
var minKeySearchText = labelObject['Type atleast 3 characters to search'] != null ? labelObject['Type atleast 3 characters to search'] : 'Type atleast 3 characters to search';
var idleSearchText = labelObject['Type what you are looking for'] != null ? labelObject['Type what you are looking for'] : 'Type what you are looking for';
var partSearchText = labelObject['Type Part Number,Equipment Number'] != null ? labelObject['Type Part Number,Equipment Number'] : 'Type Part Number,Equipment Number';


var isRgestrationFinished = false;
var propertiesclicked = false;
var referencedataclicked = false;
var documentdataclicked = false;
var registrationCount = 0;
var initialTblViewData = "";
var initialTblViewCols = "";
var initialTblViewCHRQData = "";
var initialTblViewCHRQCols = "";




var specialKeys = new Array();
specialKeys.push(8); //Backspace
specialKeys.push(9); //Tab
specialKeys.push(46); //Delete
specialKeys.push(36); //Home
specialKeys.push(35); //End
specialKeys.push(37); //Left
specialKeys.push(39); //Right
specialKeys.push(32); //Space

/* 
 * ------------------
 * Key -> key code
 * ------------------
 *  & -> 38
 *  ! -> 33
 * () -> 40 41
 * , -> 44
 * . -> 46
 * SPACE -> 32
 * *+- -> 42 43 45
 * / -> 47
 * :; -> 58 59
 * ' " -> 39 34
 * [] -> 91 93
 * {} -> 123 125
 * <> -> 60 62
 * -------------------
 */
// DOES NOT ALLOW ALL SPECIAL CHARS
function isSpecialChar(event, ele, regex, mandatory) {
    var msg = (labelObject['Special Characters are not Allowed'] != null ? labelObject['Special Characters are not Allowed'] : 'Special Characters are not Allowed');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)) {
    } else {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }

}
//DOES NOT ALLOW ALL SPECIAL CHARS EXCEPT BACKSPACE
function isBackspace(event, ele, regex, mandatory) {
    var msg = (labelObject['Allows Backspace & Delete Only'] != null ? labelObject['Allows Backspace & Delete Only'] : 'Allows Backspace & Delete Only');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    if ((specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)) {
    } else {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }

}
//DOES NOT ALLOW ALL SPECIAL CHARS EXCEPT SLASH, DOT, SPACE AND -
function isSpecialCharExcise(event, ele, regex, mandatory) {
    var msg = (labelObject['Special Characters are not Allowed'] != null ? labelObject['Special Characters are not Allowed'] : 'Special Characters are not Allowed');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    if ((keyCode == 32) || (keyCode >= 45 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)) {
    } else {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }
}
// DOES NOT ALLOW ALL SPECIAL CHARS EXCEPT SPACE
function isSpecialCharSpace(event, ele, regex, mandatory) {
    var msg = (labelObject['Special Characters are not Allowed'] != null ? labelObject['Special Characters are not Allowed'] : 'Special Characters are not Allowed');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    if ((keyCode == 32) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)) {
    } else {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }

}
//DOES NOT ALLOW ALL SPECIAL CHARS EXCEPT + -
function isSpecialCharPM(event, ele, regex, mandatory) {
    var msg = (labelObject['Special Characters are not Allowed<br> Except + and -'] != null ? labelObject['Special Characters are not Allowed<br> Except + and -'] : 'Special Characters are not Allowed<br> Except + and -');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    if ((keyCode == 43) || (keyCode == 45) || (keyCode >= 48 && keyCode <= 57) || (specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)) {
    } else {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }

}
//DOES NOT ALLOW ALL SPECIAL CHARS & ALPHABETS
function isSpecialCharNumber(event, ele, regex, mandatory) {
    var msg = (labelObject['Allows Numeric Value Only'] != null ? labelObject['Allows Numeric Value Only'] : 'Allows Numeric Value Only');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) || (specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)) {
    } else {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }

}
//DOES NOT ALLOW ALL SPECIAL CHARS EXCEPT SLASH
function isSpecialCharSlash(event, ele, regex, mandatory) {
    var msg = (labelObject['Special Characters are not Allowed<br> Except /(Forward Slash)'] != null ? labelObject['Special Characters are not Allowed<br> Except /(Forward Slash)'] : 'Special Characters are not Allowed<br> Except /(Forward Slash)');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    if ((keyCode == 47) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(event.keyCode) != -1 && event.charCode != event.keyCode)) {
    } else {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }

}
// VENDOR NAME & NAME1 IN GENERAL DATA
function isSpecialCharVendorName(event, ele, regex, mandatory) {
    var msg = (labelObject['Special Characters are not Allowed'] != null ? labelObject['Special Characters are not Allowed'] : 'Special Characters are not Allowed');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
//console.log(keyCode);
    if ((keyCode >= 33 && keyCode <= 37) || (keyCode == 42) || (keyCode == 44) || (keyCode >= 58 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }
}
// contact person in General Data
function isSpecialCharCPName(event, ele, regex, mandatory) {
    var msg = (labelObject['Special Characters are not Allowed'] != null ? labelObject['Special Characters are not Allowed'] : 'Special Characters are not Allowed');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
    console.log(keyCode);
    if ((keyCode >= 33 && keyCode <= 37) || (keyCode >= 42 && keyCode <= 45) || (keyCode == 47) || (keyCode >= 58 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }
}

function errorMessage(id, msg) {
    $(id).fadeIn(1000).html(msg);
}
function hideErrors() {
    $(".allErrors").html("");
    $(".allErrors").hide();
}
function isNumber(ele, regex, mandatory, basket) {

    var str = $("#" + ele).val();
    str = str.replace(/(^\s*)/gi, "");
    str = str.replace(/[ ]{1,}/gi, "");
    str = str.trim();
    var type = $("#" + ele).attr("type");
    $("#" + ele).val(str);
    var id = '#dis' + ele;
    if (!str && (mandatory == "M" && type != 'hidden')) {
        var msg = (labelObject['Should not be Blank'] != null ? labelObject['Should not be Blank'] : 'Should not be Blank');
        errorMessage(id, msg);
        return false;
    }

    if (str) {
        var regex = regex;
        var res = regex.test(str);
        if (res == false)
        {
            var msg = (labelObject['Enter Valid Data'] != null ? labelObject['Enter Valid Data'] : 'Enter Valid Data');
            errorMessage(id, msg);
            return false;
        } else {
            $(id).html("");
            return true;
        }
    }
    $(id).html("");
    return true;
}
function isContiguosSpecialchars(ele) {
    var str = $("#" + ele).val();
    var isConsequence = $("#" + ele).attr("data-consequence");
//    console.log(ele+"-"+isConsequence);
    var id = '#dis' + ele;
    var msg = (labelObject['Consequence Special Characters<br> are not Allowed'] != null ? labelObject['Consequence Special Characters<br> are not Allowed'] : 'Consequence Special Characters<br> are not Allowed');
    var seq_spchar = /^(.*)[`!@#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-][~!@`#$%^&*()=_+{}\[\]\\|:;"<>?./\-](.*)$/; // removed ' , in 2nd square bracket
    if (isConsequence == "N") {
        return true;
    } else {
        var res_seq_spchar = seq_spchar.test(str);
        if (res_seq_spchar == true) {
            errorMessage(id, msg);
            return false;
        }
        return true;
    }

}
function unwantedSpaces(ele) {
    var str1 = $("#" + ele).val();
    var patt1 = /(^\s*)|(\s*$)/gi;
    var patt2 = /[ ]{2,}/gi;
    if ((patt1.test(str1) == true) || (patt2.test(str1) == true)) {
        str1 = str1.replace(/(^\s*)/gi, "");
        str1 = str1.replace(/[ ]{2,}/gi, " ");
        str1 = str1.trim();
        $("#" + ele).val(str1);
        return true;
    } else
        return true;
}
var refTabCheck = true;


function tabOperation(tableName, operation) {
    if (operation == 'download') {
        downloadCodeOfConduct(tableName)
    } else if (operation == 'SOWUpdate') {
        updateScopeOfWork(tableName);
    } else if (operation == 'SOWPreview') {
        previewScopeOfWork(tableName);
    } else if (operation == 'fillDown') {
        populateTabGridFillDownData(tableName);
    } else if (operation != null && operation == 'LapsTimeReport') {
        getLapsTimeReport(tableName);
    } else {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }

        var dataView = $("#" + tableName + "_Update").attr("data-view");

        alert("operation:::" + operation + ":::dataView::::" + dataView);
        if (dataView == null) {
            try {
                var sourceex = $('#' + tableName).jqxGrid('source');
                if (sourceex != null) {
                    dataView = "GRID-VIEW";
                } else {
                    dataView = "FORM-VIEW";
                }
            } catch (e) {
            }
        }
        alert("operation::A:" + operation + ":::dataView::::" + dataView);
//////console.log("dataView:::"+dataView);
        var basicData = {};
        var basicDataAudit = {};
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
            if (textid != null && textid != 'CREATE_DATE') {

                basicData[textid] = textval;
            }
            if (textid != null) {

                basicDataAudit[textid] = textval;
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
                    basicDataAudit[columnsArray[i]] = hiddenVal;
                }

            }
//                    jsonOBJ.feildIds.push(textid);
//                    jsonOBJ.feildValues.push(textval);

        });

        for (var key in basicData) {
            if (key != null && key.lastIndexOf("HiddenGridData") > -1) {
                var erpdata = basicData[key];
                if (erpdata != null && erpdata != '' && erpdata != 'undefined' && erpdata != undefined && erpdata.indexOf(tableName) > -1) {
                    var erpTabGridId = key.replace("HiddenGridData", "");
                    $("#erpTabGridId").val(erpTabGridId);
                    basicData['erpTabGridId'] = erpTabGridId;
//             basicData['erpDataGridId'] = tabId;

                }

            }
        }
//        if (operation == 'checkingTabData') {
//            checkingTabData(tableName, basicData, dataView);
//        } else
        if (operation == "update" || operation == 'checkingTabData')
        {
            // showLoader();//1
            var lasteditedfield = $('#' + tableName).attr('data-last-ed-field');
            var lasteditedrow = $('#' + tableName).attr('data-last-ed-row');
            var isRenderFlagcolumn = $('#' + tableName).attr('isRenderFlagcolumn');
            try {
                if (isRenderFlagcolumn) {
                    $('#' + tableName).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, true);
                } else {
                    $('#' + tableName).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
                }
            } catch (e) {
            }


            hideErrors();
            var errorCount = 0;
            if (dataView == "FORM-VIEW")
            {
                errorCount = 0;
                var v_ag = $("#hiddenAccountGroup").val();

                if (v_ag != null && (v_ag == "Material & Service (Foreign)")) {
                    $("#BANKL").attr("data-mandatory", "O");
//                $("#BANKL").prop("disabled", "disabled");
                    $("#BANKL").prop("readonly", true);
                }
                var jsonOBJ = {};
                var erpDataGridId = $("#erpDataGridId").val();
                var selectedTabOldData = tabsOldData[tableName];
                $("table#" + tableName + "_TABLE :input").each(function ()
                {


                    var id = $(this).attr('id');
                    var mand = $(this).attr("data-mandatory");
                    var label = $(this).attr("data-label");
                    mand = (mand === "M") ? "M" : "O";
                    if (label != null && label == "Bank Key(IFSC)" && (v_ag != null && v_ag == "Material & Service (Foreign)")) {
                        $("#BANKL").attr("data-regex", "");
                    }
                    var regex = $(this).attr("data-regex");
                    var returnBoolean = regexFunction(id, regex, mand, tableName, label);
                    if (returnBoolean == false)
                    {
                        errorCount++;
                        return false;
                    }
                });
                console.log("errorCount:::" + errorCount);
                if (errorCount == 0) {


                    jsonOBJ.feildIds = [];
                    jsonOBJ.feildValues = [];
                    console.log(tableName + ":::textid:::");
                    var matchedCount = 0;
                    var gridIdHiddenValue = "UPDATE";
                    $("table#" + tableName + "_TABLE :input").each(function () {
                        var textid = $(this).attr("id");
                        var type = $(this).attr("type");
                        var textval = $(this).val();
                        console.log("textid:::" + textid);
                        if (type != 'hidden') {
                            if (textval != null && textval != '') {
                                textval = textval.toUpperCase();
                            }
                        }

                        // var type = $(this).attr("type");
                        jsonOBJ.feildIds.push(textid);
                        if (type != null && type == 'checkbox') {//
                            if ($("#" + textid).is(':checked')) {
                                textval = "Y";
                            } else {
                                textval = "N";
                            }
                        }
                        jsonOBJ.feildValues.push(textval);
                        if (textid != null && textid.indexOf("AUDIT_ID") > -1)
                        {
                            basicData[textid] = textval;
                        }
                        var textOldVal = "";
                        if (selectedTabOldData != null) {
                            textOldVal = selectedTabOldData[textid];

                        }
                        console.log(textval + ":::" + textid + "::" + textOldVal);
                        if (textval != textOldVal) {
                            matchedCount++;
                        }
                        var tableNameHidden = tableName + "_HIDDEN";
                        if (textid == tableNameHidden) {
                            gridIdHiddenValue = $("#" + textid).val();
                        }
                    });
                    console.log("jsonOBJ:::" + JSON.stringify(jsonOBJ));

                    if (gridIdHiddenValue == 'INSERT' && matchedCount == 0) {
                        matchedCount = 1;
                    }
                    if (matchedCount > 0 || operation == 'checkingTabData') {
                        jsonOBJ.basicData = basicData;
                        console.log("jsonOBJ.feildIds:::" + JSON.stringify(jsonOBJ.feildIds));
                        console.log("jsonOBJ.feildValues:::" + JSON.stringify(jsonOBJ.feildValues));
                        var jsonArray = [];
                        jsonArray.push(jsonOBJ);
                        UpdateOrDelete(JSON.stringify(jsonArray), dataView, tableName, operation);
                    } else {
                        stopLoader();//8
                        var results = "No Changes to Save";
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
                                        //   fetchTabData(tableName);
                                        try {
                                            // $(tableName).jqxGrid('clearselection');
                                        } catch (e) {

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



            } else if (dataView == "TABLE-VIEW") {

                selectedDataArray = gridOperation(operation, tableName);
//                for (var i = 0; i < selectedDataArray.length; i++) {
//                    var propertyVal = selectedDataArray[i]['PROPERTY_VALUE1'];
//                    let spaceAndSpecialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
//                    const startsWithSpace = /^\s/
//                    var errorMsg = "";
//                    var popupFlag = false;
//                    if (spaceAndSpecialCharRegex.test(propertyVal)) {
//                        errorMsg = "Special Character(s) ['" + propertyVal + "'] are not allowed.";
//                        popupFlag = true;
//                    } else if (startsWithSpace.test(propertyVal)) {
//                        errorMsg = "Space(s) are not allowed.";
//                        popupFlag = true;
//                    }
//                    if (popupFlag) {
//                        $("#dialog").html(errorMsg);
//                        $("#dialog").dialog({resizable: false,
//                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                            modal: true,
//                            height: 'auto',
//                            minHeight: 'auto',
//                            minWidth: 300,
//                            maxWidth: 'auto',
//                            fluid: true,
//                            buttons: [{
//                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                    click: function () {
//                                        $(this).html("");
//                                        $(this).dialog("close");
//                                        $(this).dialog("destroy");
//
//                                        try {
//                                            $("#" + tableName).jqxGrid('clearselection');
//                                        } catch (e) {
//
//                                        }
//                                    }
//                                }],
//                            open: function () {
//                                //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                $(".visionHeaderMain").css("z-index", "999");
//                                $(".visionFooterMain").css("z-index", "999");
//                            },
//                            beforeClose: function (event, ui)
//                            {
//                                $(".visionHeaderMain").css("z-index", "99999");
//                                $(".visionFooterMain").css("z-index", "99999");
//                            }
//                        });
//                        return;
//                    }
//                }
                if (Array.isArray(selectedDataArray) && selectedDataArray.length == 0) {
                    stopLoader();//9
                    var results = "No Changes to Save";
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
                                    fetchTabData(tableName);
                                    try {
                                        $("#" + tableName).jqxGrid('clearselection');
                                    } catch (e) {

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

                } else if (!(Array.isArray(selectedDataArray))
                        && selectedDataArray.errorMesssage != null
                        && selectedDataArray.errorMesssage != '') {
                    var errorMessageTable = "<table style='width: 100%;' border='1'>"
                            + "<tr><th style='background: #0071c5 none repeat scroll 0 0;color: #FFF;text-align: center'>Property Name</th>"
                            + "<th style='background: #0071c5 none repeat scroll 0 0;color: #FFF;text-align: center'>Error Message</th>";
                    errorMessageTable += selectedDataArray.errorMesssage;
                    errorMessageTable += '</table>';

                    labelObject = {};
                    try {
                        labelObject = JSON.parse($("#labelObjectHidden").val());
                    } catch (e) {
                    }
                    console.log(errorMessageTable + "::::::::::::::::::");
                    if (errorMessageTable !== "" && errorMessageTable !== null)
                    {
                        errorMessageTable = (labelObject[errorMessageTable] != null ? labelObject[errorMessageTable] : errorMessageTable);
                        var dialogSplitMessage = dialogSplitIconText(errorMessageTable, "false");
                        $("#dialog").html(errorMessageTable);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
                            textAlign: 'center',
                            minWidth: 'auto',
                            maxWidth: 'auto',
                            height: 'auto',
                            minHeight: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {
                                        //$(this).html("");
                                        $(this).dialog("close");
//                        $("#" + mintb).val('');
//                        $("#" + mintb).focus();
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

                } else {
                    endoperation(selectedDataArray, tableName, dataView, operation, basicData);
                }


            } else if (dataView == "GRID-VIEW") {
                if (operation == 'checkingTabData') {
                    selectedDataArray = $('#' + tableName).jqxGrid('getdisplayrows');
                } else {
                    selectedDataArray = gridOperation(operation, tableName);
                }


                console.log("selectedDataArray::::" + selectedDataArray.length);
                console.log("selectedDataArray::758::" + JSON.stringify(selectedDataArray));
                alert(selectedDataArray.length);
                //console.log("selectedDataArray size:::::" + JSON.stringify(selectedDataArray));
                if (selectedDataArray == 0) {
                    stopLoader();//10
                    var results = "No Changes to Save";
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
                                    // fetchTabData(tableName);
                                    try {
                                        $("#" + tableName).jqxGrid('clearselection');
                                    } catch (e) {

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
                    endoperation(selectedDataArray, tableName, dataView, operation, basicData);
                }


            }//if 


        } else if (operation == "calculateStock")
        {
            // showLoader();//1
            //if 
            var lasteditedfield = $('#' + tableName).attr('data-last-ed-field');
            var lasteditedrow = $('#' + tableName).attr('data-last-ed-row');
            try {
                $('#' + tableName).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
            } catch (e) {
            }


            hideErrors();
            var errorCount = 0;
            if (dataView == "FORM-VIEW")
            {
                errorCount = 0;
                var v_ag = $("#hiddenAccountGroup").val();

                if (v_ag != null && (v_ag == "Material & Service (Foreign)")) {
                    $("#BANKL").attr("data-mandatory", "O");
//                $("#BANKL").prop("disabled", "disabled");
                    $("#BANKL").prop("readonly", true);
                }
                var jsonOBJ = {};
                var erpDataGridId = $("#erpDataGridId").val();
//            
                var selectedTabOldData = tabsOldData[tableName];
                $("table#" + tableName + "_TABLE :input").each(function ()
                {

                    var id = $(this).attr('id');
                    var mand = $(this).attr("data-mandatory");
                    var label = $(this).attr("data-label");
                    mand = (mand === "M") ? "M" : "O";
//                    if (label != null && label == "Bank Key(IFSC)" && (v_ag != null && v_ag == "Material & Service (Foreign)")) {
//                        $("#BANKL").attr("data-regex", "null");
//                    }
                    var regex = $(this).attr("data-regex");
                    if (id != null && id != '' && id != 'undefined')
                    {
                        if (id == 'CRITICALITY' || id == 'SETSIZE' || id == 'INSTALLED_QUANTITY' || id == 'PREDICTABILITY' || id == 'MTBF')
                        {
                            var returnBoolean = regexFunction(id, regex, mand, tableName, label);
                            if (returnBoolean == false)
                            {
                                errorCount++;
                                return false;
                            }
                        }
                    }

                });
                console.log("errorCount:::" + errorCount);
                if (errorCount == 0) {


                    jsonOBJ.feildIds = [];
                    jsonOBJ.feildValues = [];
                    console.log(tableName + ":::textid:::");
                    var matchedCount = 0;
                    var gridIdHiddenValue = "UPDATE";
                    $("table#" + tableName + "_TABLE :input").each(function () {
                        var textid = $(this).attr("id");
                        var type = $(this).attr("type");
                        var textval = $(this).val();
                        console.log("textid:::" + textid);
                        if (type != 'hidden') {
                            if (textval != null && textval != '') {
                                textval = textval.toUpperCase();
                            }
                        }

                        // var type = $(this).attr("type");
                        jsonOBJ.feildIds.push(textid);
                        if (type != null && type == 'checkbox') {//
                            if ($("#" + textid).is(':checked')) {
                                textval = "Y";
                            } else {
                                textval = "N";
                            }
                        }
                        jsonOBJ.feildValues.push(textval);
                        if (textid != null && textid.indexOf("AUDIT_ID"))
                        {
                            basicData[textid] = textval;
                        }
                        var textOldVal = "";
                        if (selectedTabOldData != null) {
                            textOldVal = selectedTabOldData[textid];

                        }
                        console.log(textval + ":::" + textid + "::" + textOldVal);
                        if (textval != textOldVal) {
                            matchedCount++;
                        }
                        var tableNameHidden = tableName + "_HIDDEN";
                        if (textid == tableNameHidden) {
                            gridIdHiddenValue = $("#" + textid).val();
                        }
                    });
                    console.log("jsonOBJ:::" + JSON.stringify(jsonOBJ));

                    if (gridIdHiddenValue == 'INSERT' && matchedCount == 0) {
                        matchedCount = 1;
                    }
                    jsonOBJ.basicData = basicData;
                    console.log("jsonOBJ.feildIds:::" + JSON.stringify(jsonOBJ.feildIds));
                    console.log("jsonOBJ.feildValues:::" + JSON.stringify(jsonOBJ.feildValues));
                    var jsonArray = [];
                    jsonArray.push(jsonOBJ);
                    UpdateOrDelete(JSON.stringify(jsonArray), dataView, tableName, operation);
                }



            } else if (dataView == "TABLE-VIEW") {

                selectedDataArray = gridOperation(operation, tableName);
                alert(selectedDataArray.length);
                if (selectedDataArray.length == 0) {
                    stopLoader();//9
                    var results = "No Changes to Save";
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
                                    fetchTabData(tableName);
                                    try {
                                        $("#" + tableName).jqxGrid('clearselection');
                                    } catch (e) {

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
                    endoperation(selectedDataArray, tableName, dataView, operation, basicData);
                }


            } else if (dataView == "GRID-VIEW") {


                selectedDataArray = gridOperation(operation, tableName);
                console.log("selectedDataArray::::" + selectedDataArray.length);
                console.log("selectedDataArray::758::" + JSON.stringify(selectedDataArray));
                alert(selectedDataArray.length);
                //console.log("selectedDataArray size:::::" + JSON.stringify(selectedDataArray));
                if (selectedDataArray == 0) {
                    stopLoader();//10
                    var results = "No Changes to Save";
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
                                    // fetchTabData(tableName);
                                    try {
                                        $("#" + tableName).jqxGrid('clearselection');
                                    } catch (e) {

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

                    endoperation(selectedDataArray, tableName, dataView, operation, basicData);


                }


            }

//13
        } else if (operation == "add")
        {
            var lasteditedfield = $('#' + tableName).attr('data-last-ed-field');
            var lasteditedrow = $('#' + tableName).attr('data-last-ed-row');

            var itext = '';

            try {
                let textinputdivId = tableName + lasteditedfield + 'griddrpdownAndEditValueId' + lasteditedrow;
                itext = document.getElementById(textinputdivId).value;
            } catch (ea) {
                itext = '';
            }

            try {
                $('#' + tableName).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
            } catch (e) {

            }

            try {

                if (itext != null && itext != undefined && itext != '' && itext != 'undefined') {
                    try {
                        $('#' + tableName).jqxGrid('setcellvalue', lasteditedrow, lasteditedfield, itext);
                        $('#' + tableName).attr('data-last-ed-field', lasteditedfield);
                        $('#' + tableName).attr('data-last-ed-row', lasteditedrow);
                    } catch (ei) {

                    }
                }
            } catch (eb) {

            }


            $("table#" + tableName + "_Operators").show();
            $("table#" + tableName + "_TABLE :input").each(function ()
            {
                $(this).val('');
                $(this).prop("checked", false);
            });
            $("table#" + tableName + "_TABLE select").each(function ()
            {
//            alert("select");
                $(this).prop('selectedIndex', 0);
//            $(this).prop("checked", false);
                var id = $(this).attr('id');
                var onChange = $("#" + id).attr('onchange');
                if (onChange != null && onChange != "undefined") {
                    eval(onChange);
                }
            });

            $("#" + tableName + "_HIDDEN").val("INSERT");
//        $("#BKONT").val("01");

            if (dataView == "FORM-VIEW")
            {
                $("#" + tableName + "_TABLE").show();
                $("#" + tableName).show();
//            $("#" + tableName).hide();
                dataView = "FORM-VIEW";
                $("#" + tableName + "_Update").attr("data-view", "FORM-VIEW");
                $("#" + tableName + "_Grid_View").show();
                $("#" + tableName + "_Delete").show();
                $("#" + tableName + "_Update").show();

                /* for setting default values*/
                var formDefaultValues = $("#" + tableName + "_defaultValues").val();
                if (formDefaultValues != null && formDefaultValues != '') {

                } else {
                    formDefaultValues = $("#defaultValues").val();
                }
//            alert("formDefaultValues:::form::" + formDefaultValues);
                var currentValue;
                var currentColumn;
                if (formDefaultValues != null) {
                    var formDefaultValuesArray = formDefaultValues.split(",");
                    for (var i = 0; i < formDefaultValuesArray.length; i++) {
                        currentValue = formDefaultValuesArray[i];
                        currentColumn = currentValue.split(":");
                        if (currentColumn[0] != null && currentColumn[0] != '/') {
                            var type = $("#" + currentColumn[0]).attr("type");
                            if (type == 'checkbox') {
                                if (currentColumn[1] == 'Y') {
                                    $("#" + currentColumn[0]).prop("checked", true);
                                } else {
                                    $("#" + currentColumn[0]).prop("checked", false);
                                }
                            } else {
                                $("#" + currentColumn[0]).val(currentColumn[1]);
                            }

                        }
                    }
                }
                priceConroleOnAddOperation();
                var reciepientType = "OT";
                var panCharTop;
                panCharTop = $("#PAN_NUMBER").val();
                if (panCharTop && (panCharTop.charAt(3) == "C" || panCharTop.charAt(3) == "c")) {
                    reciepientType = "CO";
                }
                $("#QSREC").val(reciepientType);
                /* end default values */
//code for getting old data when clicked on add
                var tabsChangeOldObject = {};

                $("#" + tableName + "_TABLE" + " :input").each(function ()
                {
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
//                  jsonOBJ.ids.push(textid.toLowerCase());
                    if (textid != null && textid != 'CREATE_DATE') {
                        tabsChangeOldObject[textid] = textval;
                    }


                });
                if (tabsChangeOldObject != null) {
                    tabsOldData[tableName] = tabsChangeOldObject;
                }


                setTimeout(changeflagFuction, 300);
                console.log(" add clicked change flag " + changeflag);
            }
            if (dataView == "GRID-VIEW")
            {
                $("#" + tableName + "_TABLE").hide();
                $("#" + tableName).show();
                dataView = "GRID-VIEW";
                $("#" + tableName + "_Update").attr("data-view", "GRID-VIEW");
                $("#" + tableName + "_Grid_View").show();
//            $("#" + tableName + "_Delete").hide();
                $("#" + tableName + "_Update").show();


                // //console.log("click:::"+tableName);
                insertGridRow(tableName, dataView, tableName, lasteditedrow);


            }

        } else if (operation == "delete")
        {
            var wrappedData = [];
            var jsonOBJ = {};
            if (dataView == "FORM-VIEW")
            {
                stopLoader();//11
                jsonOBJ.feildIds = [];
                jsonOBJ.feildValues = [];
                $("#" + tableName + "_TABLE :input").each(function () {
                    var textid = $(this).attr("id");
                    var type = $(this).attr("type");
                    var textval = $(this).val();
                    if (type != 'hidden') {
                        if (textval != null && textval != '') {
                            textval = textval.toUpperCase();
                        }
                    }
                    if (textid.indexOf("AUDIT_ID"))
                    {
                        basicData[textid] = textval;
                    }
                    jsonOBJ.feildIds.push(textid);
                    jsonOBJ.feildValues.push(textval);
                });
                jsonOBJ.basicData = basicData;
                stopLoader();//12
                var results = "Are you sure you want to Delete this Record?";
                results = (labelObject[results] != null ? labelObject[results] : results);
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Confirmation'] != null ? labelObject['Confirmation'] : 'Confirmation'),
                    height: 'auto',
                    minHeight: 'auto',
                    minWidth: 350,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                            click: function () {
                                showLoader();//2
                                $(this).html("");
                                $(this).dialog("close");
                                var urlName = "deleteRecord";
                                $(this).dialog("destroy");
                                var jsonArray = [];
                                jsonArray.push(jsonOBJ);
                                UpdateOrDelete(JSON.stringify(jsonArray), dataView, tableName, operation);
                            }
                        },
                        {
                            text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
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


            } else {

//            var rowsSelected = getGridSelectedRowsData(tableName);
                var rowsSelected = [];
//            var rowsSelected = getGridSelectedRowsData(tableName);
                var indexes = $("#" + tableName).jqxGrid('selectedrowindexes');
                //console.log(indexes);
//////console.log("indexes:::"+indexes);
                if (indexes.length > 0) {
                    var totalRowIndex = indexes.length;
                    var datainformations = $('#' + tableName).jqxGrid('getdatainformation');
//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
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
                        var data = $("#" + tableName).jqxGrid('getrowdata', indexes[i]);
                        //console.log(data);
                        //data.boundindex = indexes[i];
                        rowsSelected.push(data);

                    }
                }

                alert("63fhdjh" + rowsSelected);
                if (rowsSelected == null || rowsSelected.length == 0) {
                    stopLoader();//13
                    console.log("rowsSelected::::");
                    var results = "No Record(s) to Delete";
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
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    $("#" + tableName).jqxGrid('updatebounddata', 'cells');
                                    $("#" + tableName).jqxGrid('clearselection');
//                                    $("#" + tableName).jqxGrid('clearfilters');
//                        tabOperation(tableName, "refresh");
                                }
                            }],
                        open: function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                            $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                        }
                    });
                } else {
                    stopLoader();//14
                    var results = "Are you sure you want to Delete this Record?";
                    results = (labelObject[results] != null ? labelObject[results] : results);
                    var dialogSplitMessage = dialogSplitIconText(results, "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Confirmation'] != null ? labelObject['Confirmation'] : 'Confirmation'),
                        height: 'auto',
                        minHeight: 'auto',
                        minWidth: 350,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                                click: function () {
                                    showLoader();//3
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");

//                        UpdateOrDelete(JSON.stringify(rowsSelected), dataView, tableName, operation);

                                    var dataArray = [];
                                    console.log("rowsSelected::::" + JSON.stringify(rowsSelected));
                                    for (var i = 0; i < rowsSelected.length; i++) {

                                        var jsonData = {};
                                        obj = rowsSelected[i];
                                        jsonData.feildIds = [];
                                        jsonData.feildValues = [];

                                        for (var key in obj) {
                                            var value = obj[key];
                                            console.log("key:::::" + key + "::::::value::::" + value);
                                            jsonData.feildIds.push(key);
                                            jsonData.feildValues.push(value);
                                        }

                                        jsonData.basicData = basicData;
                                        dataArray.push(jsonData);


                                    }
                                    console.log("::::dataArray::::" + JSON.stringify(dataArray));
                                    UpdateOrDelete(JSON.stringify(dataArray), dataView, tableName, operation);



                                }},
                            {
                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
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
            }




        } else if (operation == "refresh") {

            showLoader();//4
            setTimeout(changeflagFuction, 300);
            if (dataView == "FORM-VIEW") {
                if (tableName != null && tableName.indexOf("ERP") > -1) {
                    fetchErpTab(tableName, '');
                } else {
                    fetchTabData(tableName);
                }

            }
            if (dataView == "TABLE-VIEW") {
                var opName = $("#" + tableName).val();
//            if (opName == 'UPDATE') {
//                selectedDataArray = gridOperation("update", tableName);
//            } else
                if (opName == 'INSERT') {
                    selectedDataArray = gridOperation("insert", tableName);
                } else {
                    selectedDataArray = gridOperation("update", tableName);
                }



                if (selectedDataArray.length != 0) {
                    stopLoader();//15
                    var results = "Do you want to save your changes?";
                    results = (labelObject[results] != null ? labelObject[results] : results);
                    var dialogSplitMessage = dialogSplitIconText(results, "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Confirmation'] != null ? labelObject['Confirmation'] : 'Confirmation'),
                        height: 'auto',
                        minHeight: 'auto',
                        minWidth: 350,
                        maxWidth: 'auto',
                        fluid: true,

                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    showLoader();//5
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");


                                    endoperation(selectedDataArray, tableName, dataView, operation, basicData);


                                }
                            },
                            {
                                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    if (tableName != null && tableName.indexOf("ERP") > -1) {
                                        fetchErpTab(tableName, '');
                                    } else {
                                        fetchTabData(tableName);
                                        try {
                                            $("#" + tableName).jqxGrid('clearselection');
                                        } catch (e) {

                                        }
                                    }
                                    // $(tableName).jqxGrid('clearselection');

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
                    stopLoader();//16

                } else {
//                 $("#grid").jqxGrid('updatebounddata', 'cells');
                    $("#" + tableName).jqxGrid('updatebounddata', 'cells');
                    $("#" + tableName).jqxGrid('clearselection');
//                    $("#" + tableName).jqxGrid('clearfilters');
                    stopLoader();//17


                }
            } else if (dataView == "GRID-VIEW") {
                var editable = $("#" + tableName).jqxGrid('editable');
                if (editable) {
                    var opName = $("#" + tableName).val();
//            if (opName == 'UPDATE') {
//                selectedDataArray = gridOperation("update", tableName);
//            } else
                    if (opName == 'INSERT') {
                        selectedDataArray = gridOperation("insert", tableName);
                    } else {
                        selectedDataArray = gridOperation("update", tableName);
                    }
                    if (selectedDataArray.length != 0) {
                        stopLoader();//18
                        var results = "Do you want to save your changes?";
                        results = (labelObject[results] != null ? labelObject[results] : results);
                        var dialogSplitMessage = dialogSplitIconText(results, "Y");
                        $("#dialog").html(dialogSplitMessage);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            title: (labelObject['Confirmation'] != null ? labelObject['Confirmation'] : 'Confirmation'),
                            height: 'auto',
                            minHeight: 'auto',
                            minWidth: 350,
                            maxWidth: 'auto',
                            fluid: true,

                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {
                                        showLoader();//6
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");


                                        endoperation(selectedDataArray, tableName, dataView, operation, basicData);


                                    }
                                },
                                {
                                    text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                                    click: function () {
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        if (tableName != null && tableName.indexOf("ERP") > -1) {
                                            fetchErpTab(tableName, '');
                                        } else {
                                            if (tableName.indexOf("DESCRIPTIONS") > -1) {
                                                refreshDecriptionTab(tableName);
                                            } else {
                                                fetchTabData(tableName);
                                                try {
                                                    $("#" + tableName).jqxGrid('clearselection');
                                                } catch (e) {

                                                }

                                            }

                                        }
                                        // $(tableName).jqxGrid('clearselection');

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

                    } else {
//                 $("#grid").jqxGrid('updatebounddata', 'cells');
                        $("#" + tableName).jqxGrid('updatebounddata', 'cells');
                        $("#" + tableName).jqxGrid('clearselection');
//                        $("#" + tableName).jqxGrid('clearfilters');

//                        stopLoader();//19
                        if (tableName != null && tableName.indexOf("ERP") > -1) {
                            fetchErpTab(tableName, '');
                        } else {
                            if (tableName.indexOf("DESCRIPTIONS") > -1) {
                                refreshDecriptionTab(tableName);
                            } else {
                                fetchTabData(tableName);
                                try {
                                    $("#" + tableName).jqxGrid('clearselection');
                                } catch (e) {

                                }
                            }

                        }
                    }
                } else {
                    if (tableName != null && tableName.indexOf("ERP") > -1) {
                        fetchErpTab(tableName, '');
                    } else {
                        if (tableName.indexOf("DESCRIPTIONS") > -1) {
                            refreshDecriptionTab(tableName);
                        } else {
                            fetchTabData(tableName);
                            try {
                                $("#" + tableName).jqxGrid('clearselection');
                            } catch (e) {

                            }
                        }

                    }
                    // fetchTabData(tableName);
                }


            }
        } else if (operation == "Grid_View")
        {


            fetchTabData(tableName);


        } else if (operation == "audit") {

            var clauseColumns = $("#" + tableName + "_audit").attr("clauseColumns");

            navigateToAuditView(tableName, basicDataAudit, clauseColumns);

        }
    }
///fetching generically
}

//var fetchTabdata = false;
function fetchTabData(tabId, tabOldId, dependentAccorId, currntAccorId, wrapInd, stgNo) {
    showLoader();

    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    if (fioriThemeCheck) {

        try {
            $("#mocrvalidatecount").hide();
            $("#generalDivId").hide();
            $("#timeLineDivcontentId").hide();
            $("#enclosureTableFioriId").hide();
            $("#" + tabId + "_TABLE").closest("div").show();
            $(".visionRegisterMaterialMainWrapper .visionRegisterMaterialTableTab").each(function () {
                if ($(this).is($("#" + tabId).closest(".visionRegisterMaterialTableTab")) || $(this).is($("#" + tabOldId).closest(".visionRegisterMaterialTableTab"))) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
            $("#" + tabId).closest(".visionRegisterMaterialTableTab").show();
            $(".vmTaxationDataTable").removeClass('vmTaxationDataTable');
            if (tabId + "_TABLE" === 'VM_TAXATION_DATA_TABLE') {
                $("#" + tabId + "_TABLE").addClass('vmTaxationDataTable');
            }
            var currentTargetElement =
                    (typeof event !== "undefined" && event && event.target)
                    ? $(event.target).closest("li")
                    : $();
            if (currentTargetElement.length === 0) {
                currentTargetElement = $("#allTabListMainWrapperId .fioriformTabUlListclass li").filter(function () {
                    var onclickAttr = $(this).attr("onclick");
                    return onclickAttr && onclickAttr.indexOf("'" + tabId + "'") !== -1;
                });
            }

            if (currentTargetElement.length > 0) {
                $("#allTabListMainWrapperId .fioriformTabUlListclass li")
                        .removeClass("fioriHighlightTab");
                currentTargetElement.addClass("fioriHighlightTab");
            }
        } catch (e) {
            console.log(e);
        }
    }
    $("#panelGridId").val(tabId);
    if (tabId != null && tabId.indexOf("_OLD") == -1) {
        globalTabId = tabId;
    }

    try {
        var fullScreenViewFlag = $("#extendedFullScreenViewFlag").val();
        if (fullScreenViewFlag != null && fullScreenViewFlag != 'undefined'
                && fullScreenViewFlag != undefined && fullScreenViewFlag != "" && fullScreenViewFlag == "NA")
        {
            $("#extendedFullScreenViewFlag").val("N");
        }

    } catch (e) {
        $("#extendedFullScreenViewFlag").val("N");
    }

    alert(tabId);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    ssDatePickerObj = {};
    try {
        ssDatePickerObj = JSON.parse($("#ssDatePickerObj").val());
    } catch (e) {

    }
    $.datepicker.regional['datpicker'] = ssDatePickerObj;
    $.datepicker.setDefaults($.datepicker.regional['datpicker']);
    var fetchTabdata = $("#" + tabId + "_HIDDEN").attr('data-fetchInd') == "false" ? false : true;
//    var tabOldId = tabOldId;
//    var tabNewId = tabId;
    var dependentAccorId = dependentAccorId;
    if (currntAccorId > -1) {


        showLoader();
        $("[class*=_OLD]").addClass("ui-state-disabled");
        $(".ui-state-disabled").not(dependentAccorId).next("div").hide();
        $(dependentAccorId).next("div").toggle();
        $(".visionAccordionSeperator").remove();
        $("#" + tabId + "_TABLE").after("<div class='visionAccordionSeperator'></div>");
//                            $("#" + tabId + "_TABLE").after("<div class='hrDivChange'><hr></div>");
//                            tabOldId = tabId.replace("VM_", "VM_OLD_");
//                            alert("tabOldId::"+tabOldId);
        fetchTabData(tabOldId, tabId, '', '-1', 1);
    }
    if (true)


            //if (!fetchTabdata)
            {   //var progress_count = 3;
                alert("true");
                $("#" + tabId).attr('data-fetchInd', true);
                var jsonOBJ = {};
                var basicData = {};
                jsonOBJ.feildIds = [];
                jsonOBJ.feildValues = [];
                $("#" + tabId + "_TABLE :input").each(function () {
                    // alert("tabId:::"+tabId);
                    var textid = $(this).attr("id");
                    var textval = "";
                    console.log("textid::::" + textid);
                    console.log("textidValue::::" + $("#" + textid).val());
//                    if ($("#" + textid).val() !== null && $("#" + textid).val() !== "") {
                    if (textid !== null && textid !== "") {
                        var type = $(this).attr("type");
                        textval = $(this).val();
                        if (type != 'hidden') {
                            if (textval != null && textval != '') {
                                textval = textval.toUpperCase();
                            }
                        }
                    }
//                  jsonOBJ.ids.push(textid.toLowerCase());
                    jsonOBJ.feildIds.push(textid);
                    jsonOBJ.feildValues.push(textval);

                });

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
                    if (textid != null && textid != 'CREATE_DATE') {
                        basicData[textid] = textval;
                    }

                    if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
                        var columnNames = $("#" + textid).val();
                        var columnsArray = columnNames.split(",");

                        var hiddenIds = textid.split("HIDDEN_");
                        var hiddenVal = $("#" + hiddenIds[1]).val();
                        for (var i = 0; i < columnsArray.length; i++) {
                            basicData[columnsArray[i]] = hiddenVal;
                        }

                    }
                    //                    jsonOBJ.feildIds.push(textid);
                    //                    jsonOBJ.feildValues.push(textval);

                });
//                basicData['fioriThemeFlag']=fioriThemeCheck;
                jsonOBJ.basicData = basicData;
                // alert(":::::::::"+JSON.stringify(jsonOBJ));
                // fetchTabdata = true;           
                var urlName = tabId.replace(/\_/g, "");
                var url = "selectRecord";
                //            var url = "select" + urlName;
                ////////console.log("url::::")
                console.log("JSON.stringify(jsonOBJ)::" + tabId + "::" + JSON.stringify(jsonOBJ));
                showLoader();
                $("body").css("pointer-events", "none");
                var panelEleId = $("#panelId").val();
                if (panelEleId == null || panelEleId == '' || panelEleId == undefined) {
                    panelEleId = panelId[1].value;
                    $("#panelId").val(panelEleId);
                }
                $.ajax({
                    url: url,
                    type: "post",
                    traditional: true,
                    dataType: 'html',
//                    dataType: "json",
                    // contentType: "text/html;charset=utf-8",
                    cache: false,
                    data: {
                        jsonData: JSON.stringify(jsonOBJ),
                        gridId: tabId,
                        panelId: $("#panelId").val(),
                        fioriThemeFlag: fioriThemeCheck,
                    },
                    success: function (response) {
                        stopLoader();//20
                        if (response != null && response != '' && response != undefined && response == 'Failed to Fetch Record!') {
//                            if (fioriThemeCheck) {
//                                    $(".visionRegisterMaterialTableTab").hide();
//                                    $("#" + tabId + "_TABLE").closest("div").show();
//                            }
                        }
                        $("#selectedGridObj").val(response);
                        var responseObj = JSON.parse(response);
                        var formDefaultValues = responseObj['defaultValues'];
                        var wthCount = responseObj['ssAdaniWthCount'];
                        var verifyIdentityFlag = responseObj['verifyIdentityFlag'];
                        var selectedGridInitParamObj = responseObj['selectedGridInitParamObj'];
                        localStorage.removeItem("verifyIdentityFlag");
                        localStorage.removeItem("selectedGridInitParamObj");
                        localStorage.setItem("verifyIdentityFlag", verifyIdentityFlag);
                        localStorage.setItem("selectedGridInitParamObj", selectedGridInitParamObj);
                        var gridinitparamobj = {};
                        var gridCaseSensitiveCols = "";
                        gridinitparamobj = responseObj['gridInitParamObj'];
                        if (gridinitparamobj != null && gridinitparamobj != 'undefined' && gridinitparamobj != '' && gridinitparamobj != 'null')
                        {
                            gridCaseSensitiveCols = gridinitparamobj['uuu_GridCaseSensitiveCols'];
                            if (gridCaseSensitiveCols != null &&
                                    gridCaseSensitiveCols != 'undefined' &&
                                    gridCaseSensitiveCols != 'null' &&
                                    gridCaseSensitiveCols == 'PROPERTY_UOM' &&
                                    gridCaseSensitiveCols != '') {
                                $("#charOrpicMMLowercase").val("PROPERTY_UOM");
                            } else {
                                $("#charOrpicMMLowercase").val("N");
                            }
                        }


                        $("#defaultValues").val(formDefaultValues);
                        $("#" + tabId + "_defaultValues").remove();
                        $("#" + tabId + "_initParamObj").remove();
                        $("#mat_creation_form_table").append("<input type='hidden' id='" + tabId + "_defaultValues' />");
                        $("#mat_creation_form_table").append("<input type='hidden' id='" + tabId + "_initParamObj' value='" + JSON.stringify(gridinitparamobj) + "'/>");


                        $("body").css("pointer-events", "auto");
                        stopLoader();//21
                        if (response.indexOf("Failed to Fetch Record!") > -1)
                        {


                            $("#" + tabId + "_Update").attr("data-view", "FORM-VIEW");
                            $("#" + tabId + "_Delete").attr("data-view", "FORM-VIEW");

                            $("#" + tabId + '_TABLE').show();
                            $("#" + tabId).hide();

                            //CLEARING GRID ROWS
                            newremoveAllGridRows(tabId);

                            //FORM CRUID OPS ICONS DISPLAY
                            genericFormViewIconsDisp(tabId, 0);

                            tabOperation(tabId, "add");
                            $("#" + tabId + "_Grid_View").hide();
                            $("#" + tabId).hide();
                            $("#" + tabId + "_Update").show();

                            psCount(tabId);
//                            testNewIFSC(tabId);

                        } else

                        {
//                            alert("response: in else" + response);
                            var jsnobj = JSON.parse(response);
                            var noOfRecords = jsnobj.lengthPay;
                            var erpData = jsnobj.erpData;
                            var dataView = jsnobj['view'];
                            if (dataView == 'FORM-VIEW')
//                            if (noOfRecords == 1)

                            {
                                alert("noOfRecords::" + noOfRecords);
                                // tabOperation('MM_DOCUMENTS_CHNG','refresh')
                                $("#" + tabId + "_Update").attr("data-view", "FORM-VIEW");
                                $("#" + tabId + "_Delete").attr("data-view", "FORM-VIEW");
                                $("#" + tabId + "_Delete").show();
                                $("#" + tabId + "_Update").show();
                                $("#" + tabId + '_TABLE').show();
                                $("#" + tabId + '_ICON').css("display", "block");
                                //console.log("tabId::::"+tabId);
                                $("#" + tabId).hide();
                                //CLEARING GRID ROWS
                                newremoveAllGridRows(tabId);
                                //GRID CRUID OPS ICONS DISPLAY
                                genericFormViewIconsDisp(tabId, jsnobj.lengthPay);
                                //WITHHOLD TAN ENABLING AND DISABLING FEILDS BASED ON Lower TDS Applicability 
                                disableOrEnableWthTanTabAttribuetes();
                                //    alert(erpData);
                                if (erpData != null && erpData == 'Y') {
                                    var erpDataObj = jsnobj;
                                    erpTab(tabId, erpDataObj, erpData, dataView);

                                } else {
                                    //alert(JSON.stringify(jsnobj.data));
                                    $("#" + tabId + '_TABLE').html(jsnobj.data);
//                                    if (fioriThemeCheck) {
//                                        $(".visionRegisterMaterialTableTab").hide();
//                                        $("#" + tabId + "_TABLE").closest("div").show();
//                                    }
                                }

                                if (erpData != null && erpData == 'Y') {
                                    $("#" + tabId).show();
                                } else {
                                    $("#" + tabId).hide();
                                }
                                if ($("body").height() <= $(window).height()) {
                                    $("#bottom_arrow").hide();
                                    $("#top_arrow").hide();
                                }
                                if ($("#O_1IEXCD1").val() == "NA") {
                                    $("#O_1IEXCD2").val("");
//                                    $("#O_1IEXCD2").attr("disabled", "disabled");
                                    $("#O_1IEXCD2").attr("readonly", true);
                                }
                                if ($("#O_1ISERN1").val() == "NA") {
                                    $("#O_1ISERN2").val("");
//                                    $("#O_1ISERN2").attr("disabled", "disabled");
                                    $("#O_1ISERN2").attr("readonly", true);
                                }

                                var reciepientType = "OT";
                                var panCharTop;
                                panCharTop = $("#PAN_NUMBER").val();
                                if (panCharTop && panCharTop.charAt(3) == "C") {
                                    reciepientType = "CO";
                                }
                                $("#QSREC").val(reciepientType);

                                if ($("#LAND1").val() != 'IN') {
                                    // for other then India
                                    $("#PSTLZ").attr('maxlength', '15');
                                    $("#PSTLZ").attr("data-regex", "^[a-zA-Z0-9 -]+$");

                                    $("#ORT01").attr('readonly', true);
                                    $("#ddORT01").show();
                                    $("#ORT02").attr('readonly', false);
                                    $("#ddORT02").show();
                                    $("#O_1IPANNO").attr('data-mandatory', "O");
                                    $('.lblMandO_1IPANNO').hide();
                                    $("#STCD3").attr('data-mandatory', "O");
                                    $('.lblMandSTCD3').hide();
                                    $("#GST_NUMBER").attr('data-mandatory', "O");
                                    $('.lblMandGST_NUMBER').hide();
                                    $("#VEN_CLASS").attr('data-mandatory', "O");
                                    $('.lblMandVEN_CLASS').hide();
                                } else {

                                    $("#PSTLZ").attr('maxlength', '6');
                                    $("#PSTLZ").attr("data-regex", "^[1-9]{1}[0-9]{5}$");
                                    $("#ORT01").attr('readonly', true);
                                    $("#ddORT01").show();
                                    $("#ORT02").attr('readonly', false);
                                    $("#ddORT02").show();
                                }

                                if (($("#PLANT").val() == "500" || $("#PLANT").val() == "700") &&
                                        ($("#ACCOUNT_GROUP").val() == "AWFR") &&
                                        ($("#COMPANY_CDE").val() == "1111")) {
                                    $("#SORT2").attr('readonly', true);
                                    $("#ddSORT2").show();
                                } else {
                                    $("#SORT2").attr('readonly', false);
                                    $("#ddSORT2").hide();
                                }


                                psCount(tabId);
                                alert("form::" + $("#" + tabId + '_Delete').css("display"));
                                if (tabId.indexOf('WTH_TAN_DATA') > -1) {
                                    if (wthCount == 0) {
                                        $("#" + tabId + '_ICON').css("display", "none");
                                    } else {
                                        $("#" + tabId + '_ICON').css("display", "block");

                                    }
                                }
                                try {

//                                    $(".ccGuideInfo").mouseover(function () {
//                                        $('#colorBlueID').remove();
//                                        var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"\"><span class=\"mfGuideColorIndex\"><svg  height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#000fff\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#ff1a1a\"></svg></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#688280\"></svg></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                                                + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#32a852\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                                        $(this).append('<div id = "colorBlueID"></div>');
//                                        $('#colorBlueID').html(htmlData);
//                                        $('#colorBlueID').jqxPopover({
//                                            showArrow: true,
//                                            width: 115,
//                                            height: 120,
//                                            showCloseButton: false,
//                                            position: 'right',
//                                            selector: $(this)
//                                        });
//                                        $("#colorBlueID").jqxPopover('open');
//                                    })
//
//                                    $(".ccGuideInfo").mouseout(function () {
//                                        $("#colorBlueID").jqxPopover('close');
//                                        $('#colorBlueID').remove();
//                                    });
                                    $(".ccGuideInfo").mouseover(function () {
                                        $('#colorBlueID').remove();
                                        var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"listItemcolorIndication\"><span class=\"autoGenerateline\"></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
                                                + "<li class=\"listItemcolorIndication\"><span class=\"mandatoryline\"></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
                                                + "<li class=\"listItemcolorIndication\"><span class=\"optionalline\"></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
                                                + "<li class=\"listItemcolorIndication\"><span class=\"autopopulateline\"></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
                                        $(this).append('<div id = "colorBlueID">' + htmlData + '</div>');
                                        var template = '<div class="popover custom-popoverSuggestion" role="tooltip">' +
                                                '<div class="arrow"></div>' +
                                                '<h3 class="popover-header"></h3>' +
                                                '<div class="popover-body"></div>' +
                                                '</div>';
                                        $(".ccGuideInfo").popover({content: htmlData, trigger: "hover", position: 'right', html: true, template: template});
                                    });

                                } catch (rr) {

                                }
//                              
                            } else if (gridinitparamobj != null
                                    && !jQuery.isEmptyObject(gridinitparamobj)
                                    && gridinitparamobj['tableview'] == 'Y') {

                                $("#" + tabId + "_Update").attr("data-view", "TABLE-VIEW");
                                $("#" + tabId + "_Delete").attr("data-view", "TABLE-VIEW");
                                $("#" + tabId + "_Insert").attr("data-view", "TABLE-VIEW");

                                $("#" + tabId + "_TABLE").hide();
                                //$("#tg-wrap").remove();
                                if (jsnobj.gridEditable)
//                          if (!jsnobj.gridEditable  && ( $("#baskettypehid").val()=='_Pending_Change_Requests'
//                            || $("#baskettypehid").val()=='Pending_Change_Request')) 
                                {
                                    $("#tg-wrap").remove();
                                    $("#tg-wrap1").removeClass('visionCharacteristicsTbl');
                                    $("#tg-wrap1").addClass('visionCharacteristicsTbl');
                                } else {
                                    $("#tg-wrap1").remove();
                                }

                                $("#" + tabId + "tbl").remove();


                                var columns = jsnobj.columns;
                                var datafields = jsnobj.datafields;
                                var localdata = jsnobj.data;
                                initialTblViewData = "";


                                initialTblViewData = localdata;
                                initialTblViewCols = jsnobj.columns;


                                $("#" + tabId + "_Update").attr('data-localdata', JSON.stringify(localdata));
                                $("#" + tabId + "_Update").attr('data-datafields', JSON.stringify(jsnobj.columns));

//                                console.log("tableViewStr::::"+jsnobj['tableViewStr']);
                                var columns = jsnobj.columns;

                                var gridPropObj = jsnobj.gridPropObj;
//                                if (fioriThemeCheck) {
//                                    $(".visionRegisterMaterialTableTab").hide();
//                                    $("#" + tabId).closest(".visionRegisterMaterialTableTab").show();
//                                }
                                $("#" + tabId).html(jsnobj['tableViewStr']);
                                var charOrpicMMLowercase = $("#charOrpicMMLowercase").val();
                                if (charOrpicMMLowercase != null && charOrpicMMLowercase != "undefined"
                                        && charOrpicMMLowercase != "" && charOrpicMMLowercase == "PROPERTY_UOM") {
                                    for (var i = 0; i < responseObj['data'].length; i++) {
                                        $("#tb" + charOrpicMMLowercase + i).css("text-transform", "none");
                                    }
                                }



                                $("#" + tabId + "tbl").each(function () {

                                    if ($(this).find('thead').length > 0 && $(this).find('th').length > 0) {
                                        // Clone <thead>
                                        var $w = $(window),
                                                $t = $(this),
                                                $thead = $t.find('thead').clone(),
                                                $col = $t.find('thead, tbody').clone();
                                        // Add class, remove margins, reset width and wrap table

                                        $t.addClass('sticky-enabled')
                                                .css({

                                                    margin: 0,

                                                    width: '100%'

                                                }).wrap('<div class="sticky-enabled" />');
                                        $('.sticky-wrap tbody').addClass('sticky-header');
                                        if ($t.hasClass('overflow-y'))
                                            $t.removeClass('overflow-y').parent().addClass('overflow-y');
                                        // Create new sticky table head (basic)
                                        $t.after('<table class="sticky-thead" />');
                                        // If <tbody> contains <th>, then we create sticky column and intersect (advanced)
                                        if ($t.find('tbody th').length > 0) {
                                            $t.after('<table class="sticky-col" /><table class="sticky-intersect" />');
                                        }

                                        // Create shorthand for things
                                        var $stickyHead = $(this).siblings('.sticky-thead'),
                                                $stickyCol = $(this).siblings('.sticky-col'),
                                                $stickyInsct = $(this).siblings('.sticky-intersect'),
                                                $stickyWrap = $(this).parent('.sticky-wrap');
                                        $stickyHead.append($thead);
                                        $stickyCol
                                                .append($col)
                                                .find('thead th:gt(0)').remove()
                                                .end()
                                                .find('tbody td').remove();
                                        $stickyInsct.html('<thead><tr><th>' + $t.find('thead th:first-child').html() + '</th></tr></thead>');
                                        // Set widths
                                        var setWidths = function () {
                                            $t
                                                    .find('thead th').each(function (i) {
                                                $stickyHead.find('th').eq(i).width($(this).width());
                                            })
                                                    .end()
                                                    .find('tr').each(function (i) {
                                                $stickyCol.find('tr').eq(i).height($(this).height());
                                            });
                                            // Set width of sticky table head
                                            $stickyHead.width("100%");
//                                        console.log($t.width());                                       
                                            // Set width of sticky table col
                                            $stickyCol.find('th').add($stickyInsct.find('th')).width($t.find('thead th').width())
                                        },
                                                repositionStickyHead = function () {
                                                    // Return value of calculated allowance
                                                    var allowance = calcAllowance();
                                                    // Check if wrapper parent is overflowing along the y-axis
                                                    if ($t.height() > $stickyWrap.height()) {
                                                        // If it is overflowing (advanced layout)
                                                        // Position sticky header based on wrapper scrollTop()
                                                        if ($stickyWrap.scrollTop() > 0) {
                                                            // When top of wrapping parent is out of view
                                                            $stickyHead.add($stickyInsct).css({
                                                                opacity: 1,
                                                                top: $stickyWrap.scrollTop() - 1
                                                            });
                                                            $(window).resize(function () {
                                                                if ($(window).width() <= 500)
                                                                {
                                                                    $(".visionHeaderMain").css("position", "absolute");
                                                                }
                                                            }).resize();
                                                        } else {
                                                            // When top of wrapping parent is in view
                                                            $stickyHead.add($stickyInsct).css({
                                                                opacity: 0,
                                                                top: 0
                                                            });
                                                            $(".visionHeaderMain").css("position", "fixed");
                                                        }
                                                    } else {
                                                        // If it is not overflowing (basic layout)
                                                        // Position sticky header based on viewport scrollTop
                                                        if ($w.scrollTop() > $t.offset().top && $w.scrollTop() < $t.offset().top + $t.outerHeight() - allowance) {
                                                            // When top of viewport is in the table itself
                                                            $stickyHead.add($stickyInsct).css({
                                                                opacity: 1,
                                                                top: $w.scrollTop() - $t.offset().top - 1
                                                            });
                                                            $(window).resize(function () {
                                                                if ($(window).width() <= 500)
                                                                {
                                                                    $(".visionHeaderMain").css("position", "absolute");
                                                                }
                                                            }).resize();
                                                        } else {
                                                            // When top of viewport is above or below table
                                                            $stickyHead.add($stickyInsct).css({
                                                                opacity: 0,
                                                                top: 0
                                                            });
                                                            $(".visionHeaderMain").css("position", "fixed");
                                                        }
                                                    }
                                                },
                                                repositionStickyCol = function () {
                                                    if ($stickyWrap.scrollLeft() > 0) {
                                                        // When left of wrapping parent is out of view
                                                        $stickyCol.add($stickyInsct).css({
                                                            opacity: 1,
                                                            left: $stickyWrap.scrollLeft()
                                                        });
                                                    } else {
                                                        // When left of wrapping parent is in view
                                                        $stickyCol
                                                                .css({opacity: 0})
                                                                .add($stickyInsct).css({left: 0});
                                                    }
                                                },
                                                calcAllowance = function () {
                                                    var a = 0;
                                                    // Calculate allowance
                                                    $t.find('tbody tr:lt(3)').each(function () {
                                                        a += $(this).height();
                                                    });
                                                    // Set fail safe limit (last three row might be too tall)
                                                    // Set arbitrary limit at 0.25 of viewport height, or you can use an arbitrary pixel value
                                                    if (a > $w.height() * 0.25) {
                                                        a = $w.height() * 0.25;
                                                    }

                                                    // Add the height of sticky header
                                                    a += $stickyHead.height();
                                                    return a;
                                                };
                                        setWidths();
                                        $t.parent('.sticky-wrap').scroll($.throttle(250, function () {
                                            repositionStickyHead();
                                            repositionStickyCol();
                                        }));
//                                        $w.load(setWidths)
                                        $w.on('load', setWidths())
                                                .resize($.debounce(250, function () {
                                                    setWidths();
                                                    repositionStickyHead();
                                                    repositionStickyCol();
                                                }))
                                                .scroll($.throttle(250, repositionStickyHead));
                                    }
                                });
//                                $(".visionRegisterMaterialAccordians .sticky-wrap")
//                                        .css("height", gridPropObj.height);

                                if (!jsnobj.gridEditable
                                        &&
                                        $("#REQ_NUMBER").length > 0
                                        &&
                                        $("#baskettypehid").val().toUpperCase().indexOf('CHANGE') > -1
                                        ) {
                                    try {
                                        var position = $('#MM_PROPERTIES_CHNG').position();
                                        $("#tg-wrap1").removeClass('visionCharacteristicsTbl');
                                        console.log('position:' + position);
                                        //   $("#tg-wrap1").css('position', 'absolute');
                                        $("#tg-wrap1").css('top', position.top);
                                        $("#tg-wrap1").css('right', '1.2em');
                                    } catch (e) {

                                    }
                                }
                            } else {
                                erpTab(tabId, jsnobj, jsnobj['erpData'], 'GRID-VIEW');
                                alert("dataView:::" + dataView);


                                //  $("#" + tabId).jqxGrid({autoheight: true});
                                $('#' + tabId + '_Add').click(function () {

                                    $("#" + tabId).css("display", "none");
                                    $("#" + tabId).css("display", "none");
                                });


                            }//grid end
                        }
                        $("#" + tabId + "_defaultValues").val(formDefaultValues);
                        $("#" + tabId + "_TABLE" + " :input[data-type='D']").each(function ()
                        {
                            var id = $(this).attr('id');
                            var isEditable = $("#" + id).attr('data-editable');
                            if (isEditable == "Y") {
                                $("#" + id).datepicker({
                                    changeMonth: true,
                                    changeYear: true,
                                    dateFormat: "dd-mm-yy",
                                    showOn: "button",
                                    buttonImage: 'images/iDXPUI5Calendar.svg',
                                    buttonImageOnly: true
                                });
                            }
                        });
                        $("#" + tabId + "_FORM" + " :input[data-type='D']").each(function ()
                        {
                            var id = $(this).attr('id');
                            var isEditable = $("#" + id).attr('data-editable');
                            if (isEditable == "Y") {
                                $("#" + id).datepicker({
                                    changeMonth: true,
                                    changeYear: true,
                                    dateFormat: "dd-mm-yy",
                                    showOn: "button",
                                    buttonImage: 'images/iDXPUI5Calendar.svg',
                                    buttonImageOnly: true
                                });
                            }
                        });
                        var tabOldObj = {};

                        $("#" + tabId + "_TABLE" + " :input").each(function ()
                        {
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
//                  jsonOBJ.ids.push(textid.toLowerCase());
                            if (textid != null && textid != 'CREATE_DATE') {
                                tabOldObj[textid] = textval;
                            }


                        });
                        if (tabOldObj != null) {
                            tabsOldData[tabId] = tabOldObj;
                        }

                        var tabchangesOldObject = {};
                        $("[id*=" + tabId + "] :input").each(function ()
                        {
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
//                  jsonOBJ.ids.push(textid.toLowerCase());
                            if (textid != null && textid != 'CREATE_DATE') {
                                tabchangesOldObject[textid] = textval;
                            }


                        });

                        if (tabchangesOldObject != null) {
                            tabsOldData[tabId + "_tbl"] = tabchangesOldObject;
                        }

                        /**/
                        if (!wrapInd) {
                            $("#" + tabId + "_TABLE" + " select").each(function () {
                                var id = $(this).attr('id');
                                var onChange = $("#" + id).attr('onchange');
                                if (onChange != null && onChange != "undefined") {
                                    eval(onChange);
                                }
                            });
                        }

                        try {
                            $("#" + tabId).jqxGrid('updatebounddata');
                        } catch (e) {
                        }
                        try {
                            $("#" + tabId).jqxGrid("clearselection");
                        } catch (e) {
                        }

                        $("#" + tabId + "_Update").show();
                        $("#" + tabId + "_Delete").show();
                        alert("global::" + $("#" + tabId + '_Delete').css("display"));
                        if (wrapInd) {

                            $("#" + tabId + "_ICON").hide();
                            if (tabId.indexOf('PROPERTIES_OLD') > -1) {
                                $("#" + tabId).addClass("visionOldChar");
                                $(".visionAccordionSeperator").css("display", "none");
                                var tab_oldheight = 0;
                                setTimeout(function () {
                                    try {
                                        tab_oldheight = $("#" + tabOldId).height();
                                    } catch (e) {
                                        tab_oldheight = 0;
                                    }
                                    if (tab_oldheight != null && tab_oldheight != undefined && tab_oldheight > 0) {
                                        $("#" + tabId).css("height", tab_oldheight + "px");
                                        $("#" + tabId).css("overflow-y", "auto");
                                    }
                                }, 500);
                            }
                            /* To Swapping OLD-NEW Data : Start*/
                            stopLoader();
                        }

                        if (fioriThemeCheck) {
                            if ((currntAccorId == 1)) {
//                                if (dataView == "GRID-VIEW") {
//                                    setTimeout(function () {
////                                        $("#" + tabOldId).closest(".visionRegisterMaterialTableTab").show();
//
//                                    }, 500);
//                                }
                                $("#" + tabOldId).closest(".visionRegisterMaterialTableTab").show();
                            }
                        }
                        try {
                            if (currntAccorId == -1)
                            {
                                var oldParentId = $("#" + tabId).parent().attr('id');
                                var newParentId = $("#" + tabOldId).parent().attr('id');
                                $("#" + oldParentId).appendTo($("#" + newParentId));
                                $("#" + oldParentId).show();
                            }

                        } catch (e) {


                        }
                        if (stgNo !== undefined && stgNo !== null && stgNo !== "") {
                            setTimeout(function () {
                                if (tabId && $("#" + tabId).length) {
                                    var filterGroup = new $.jqx.filter();
                                    var filter = filterGroup.createfilter('stringfilter', stgNo, 'contains');
                                    filterGroup.addfilter(1, filter);

                                    $("#" + tabId).jqxGrid('addfilter', 'STG_NO', filterGroup);
                                    $("#" + tabId).jqxGrid('applyfilters');
                                }
                            }, 500);
                        }


                    },
                    error: function (e) {

                        $("body").css("pointer-events", "auto");
                        stopLoader();//22
                        sessionTimeout(e);
                    }
                });
            }
    executed = false;
    setTimeout(changeflagFuction, 300);
//    formPageScroll();
}// end of fetch tab data fun

function genericCellRenderor(ddwString, row, columnfield) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var ddwData = JSON.parse(ddwString);
    var ddwObj = ddwData[columnfield];
    VisionGridDDDW(ddwObj.gridId, row, ddwObj.dataFeild, ddwObj.ddwId);

}

//WITHHOLDING TAN TAB RELATED FUNCTIONS
function disableOrEnableWthTanTabAttribuetes() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var lowerTDSValue = $("#TDS_APPL").val();
    if (lowerTDSValue == "Y" || lowerTDSValue == "y")

    {
        $("#VM_WTH_TAN_DATA_Update").show();
        $("table#" + "VM_WTH_TAN_DATA" + "_TABLE").each(function ()

        {
            $(this).find("img").show();
        });


        $("table#" + "VM_WTH_TAN_DATA" + "_TABLE :input").each(function ()
        {
            var id = $(this).attr('id');
            if (id !== "WT_EXNR_TAN" && id != "WT_EXRT_TAN" && id != "FIWTIN_EXEM_THR")
            {
//                $("#" + id).attr("disabled", true);
                $("#" + id).attr("readonly", true);

            } else
            {
//                $("#" + id).attr("disabled", false);
                $("#" + id).attr("readonly", false);
            }
        });

    } else if (lowerTDSValue == "N" || lowerTDSValue == "n") {

        $("#VM_WTH_TAN_DATA_Update").hide();
        $("table#" + "VM_WTH_TAN_DATA" + "_TABLE").each(function ()
        {
//            $(this).find("input").attr('disabled', true);
            $(this).find("input").attr('readonly', true);
            $(this).find("img").hide();
        });
    }

}


function validateColumn(cell, value, tabId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    $("#" + tabId).jqxGrid('hidevalidationpopup', 1, "lastname", "Invalid Value");
}

function gridRegexValidation(ele, regex, mandatory, basket, label) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var ele = ele;
    var regex = (regex == "null") ? null : regex;

    var str = $("#" + ele).val();
    //alert(str);

    str = str.replace(/(^\s*)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.trim();
    $("#" + ele).val(str);
    var type = $("#" + ele).attr("type");
    var id = '#dis' + ele;
    var noConseq = isContiguosSpecialchars(ele);
    if (noConseq) {


        if (!str && mandatory == 'M' && type != 'hidden') {
            var msg = (labelObject['Should not be Blank'] != null ? labelObject['Should not be Blank'] : 'Should not be Blank');
            errorMessage(id, msg);
            return false;
        }

        var res;

        if (regex != null) {
            var patt = new RegExp(regex);
            res = patt.test(str);

        } else {
            res = true;
        }

        var msg = 'Enter Valid' + label;
        msg = labelObject[msg] != null ? labelObject[msg] : msg;
        if (str && res == false)
        {
            errorMessage(id, msg);
            return false;
        }




        return true;
    } else {
        return false;
    }
}

function newGenericGridView(tabId, dataView) {
    //  "#"+tabId+'
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#" + tabId).jqxGrid('clearselection');
    var datainformations = $('#' + tabId).jqxGrid('getdatainformation');
    var rowscounts = datainformations.rowscount;
    if (tabId === "VM_WTH_TAN_DATA")
    {
        fetchWTH_TANData();

    }


}

function newremoveAllGridRows(tabId) {
    $("#" + tabId).jqxGrid('clear');
}

function getGridSelectedRowsData(gridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    //console.log(indexes);
//////console.log("indexes:::"+indexes);
    if (indexes.length > 0) {
        var selectedRowsData = [];
        var totalRowIndex = indexes.length;
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
            var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
            console.log(data);
            //data.boundindex = indexes[i];
            selectedRowsData.push(data);

        }
    }

    return selectedRowsData;
}

function withholdingTanUpdateOrDelete(urlName, SELECTED_DATA, dataView, tableName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var finalData = "";
    if (dataView == "FORM-VIEW")
    {
        finalData = JSON.stringify(SELECTED_DATA[0]);
    } else
    {

        finalData = JSON.stringify(SELECTED_DATA);

    }

    if (typeof SELECTED_DATA != 'undefined')

    {
        //   console.log("in defined");
        // DATA = SELECTED_DATA;        
        var locatcode = $('#locatcode').val();
        var vendorCode = $('#vendorCode').val();
        var accountGroup = $('#accountGroup').val();
        var compCode = $('#compCode').val();
        var purchOrg = $('#purchOrg').val();

        var jsonOBJ = {};
        $.ajax({
            type: "POST",
            url: urlName,
            data: {
                locatCode: locatcode,
                vendorCode: vendorCode,
                accountGroup: accountGroup,
                companyCode: compCode,
                purchaseOrg: purchOrg,
                baskettype: "",
                dataView: dataView,
                jsonData: finalData,
                taxJsonData: ""

            },
            traditional: true,
            cache: false,
            success: function (result) {

                var dialogSplitMessage = dialogSplitIconText(result, "Y");
                $("#dialog").html((labelObject[dialogSplitMessage] != null ? labelObject[dialogSplitMessage] : dialogSplitMessage));
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

                                fetchTabData(tableName);


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
            }

        });


    }


    console.log("withholdingTanUpdate ::: END");
}

function genericFormViewIconsDisp(tabId, rowsCount) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    if (rowsCount == 0)
    {

        $("#" + tabId + '_Grid_View').hide();
        $("#" + tabId + '_Update').show();
        $("#" + tabId + '_Delete').hide();
        $("#" + tabId + '_Add').hide();


    } else if (rowsCount == 1)
    {
        alert("else if (rowsCount == 1)");

        $("#" + tabId + '_Grid_View').hide();
        $("#" + tabId + '_Update').show();
        $("#" + tabId + '_Delete').show();
        $("#" + tabId + '_Add').show();

    } else if (rowsCount > 1)
    {
        // console.log("row coundt isssss :: "+rowsCount);
        $("#" + tabId + '_Grid_View').hide();
        $("#" + tabId + '_Update').hide();
        $("#" + tabId + '_Delete').hide();
        $("#" + tabId + '_Add').show();

    }
    alert("genericFormViewIconsDisp::" + $("#" + tabId + '_Delete').css("display"));

}

function genericGridValidatin(rowSelected, tableName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var sourceex = $("#" + tableName).jqxGrid('source');
    var colums = $("#" + tableName).jqxGrid('columns');
    try {
        var records = colums.records;
    } catch (e) {
    }

    // var rowsSelected = getSelectedRowsData(tableName );
    var resultObj = {};

    resultObj.rowsSelected = "";
    var msg = "";
    //  var indexes = $("#" + tableName ).jqxGrid('selectedrowindexes');
    var dataFeilds = [];
    dataFeilds = sourceex._source.datafields;
//    var jsonObject = rowSelected;
    var jsonObject = JSON.parse(rowSelected);
    var gridPatt;
    var gridRes;
    var errorCount = 0;
    var selectedData = JSON.parse(rowSelected);
    try {
        var objectKeys = Object.keys(selectedData);
        var objectKeysArray = objectKeys.toString().split(",");
        for (var i = 0; i < objectKeysArray.length; i++) {

            if (selectedData[objectKeysArray[i]] != null && selectedData[objectKeysArray[i]].toUpperCase() == 'AN-AN-NAN') {
                selectedData[objectKeysArray[i]] = "";
            }
        }
    } catch (e) {

    }

    for (var i = 0; i < dataFeilds.length; i++) {
        obj = dataFeilds[i];
        if (obj != null && obj['name'] != null && obj['name'] != '') {
//        obj = dataFeilds[i];
            var key = obj['name'];
//        var key = obj.name;
            console.log("OBJ:::" + JSON.stringify(obj));

            if (dataFeilds[i].name == 'VENDOR_NAME' && (tableName == 'MM_REFERENCE' || tableName == 'MM_REFERENCE_CHNG')) {
                if (jsonObject['REFERENCE_TYPE'] == 'OEM PART NO'
                        || jsonObject['REFERENCE_TYPE'] == 'MANUFACTURER PART NO'
                        || jsonObject['REFERENCE_TYPE'] == 'SUPPLIER PART NO'
                        || jsonObject['REFERENCE_TYPE'] == 'MODEL/MACHINE NO'
                        || jsonObject['REFERENCE_TYPE_DLOV'] == 'OEM PART NO'
                        || jsonObject['REFERENCE_TYPE_DLOV'] == 'MANUFACTURER PART NO'
                        || jsonObject['REFERENCE_TYPE_DLOV'] == 'SUPPLIER PART NO'
                        || jsonObject['REFERENCE_TYPE_DLOV'] == 'MODEL/MACHINE NO') {
                    obj.isMandatory = true;
                } else {
                    obj.isMandatory = false;
//                obj.isMandatory = false;
                }
            }

            if (dataFeilds[i].name == 'WT_WITHCD_TAX') {
                if (selectedData.WITHT_I_TAX != "")
                {
                    obj.isMandatory = true;
                } else {
                    obj.isMandatory = false;
                }

            } else if (dataFeilds[i].name == 'WT_WITHCD') {
                if (selectedData.WITHT_I != "")
                {
                    obj.isMandatory = true;
                } else {
                    obj.isMandatory = false;
                }
                obj.isMandatory = true;
            } else if (dataFeilds[i].name == 'WITHT_I') {
                if (selectedData.WITHT_I == "" && selectedData.WITHT != "")
                {
                    obj.isMandatory = false;
                }


            } else if (dataFeilds[i].name == 'WITHT') {
                if (selectedData.WITHT == "" && selectedData.WITHT_I != "")
                {
                    obj.isMandatory = false;
                }
            } else if (dataFeilds[i].name == 'WITHT_I_TAX') {
                if (selectedData.WITHT_I_TAX == "" && selectedData.WITHT_TAX != "")
                {
                    obj.isMandatory = false;
                }
            } else if (dataFeilds[i].name == 'WITHT_TAX') {
                if (selectedData.WITHT_TAX == "" && selectedData.WITHT_I_TAX != "")
                {
                    obj.isMandatory = false;
                }
            }



            // //////////alert(key+"::::jsonObject[key]:::"+jsonObject[key]+"::::");
            if (!$("#" + tableName).jqxGrid('getcolumnproperty', dataFeilds[i].name, 'hidden')) {
//        if (!colums.records[i]['hidden']) {

                var columndata = "";
                try {
                    var columndata = jsonObject[key].trim();
                } catch (e) {
                    columndata = jsonObject[key];
                }
                if (key.indexOf("_DLOV") == -1 && ((obj.isMandatory && columndata == null) || (obj.isMandatory && columndata == ""))) {
                    errorCount++;

                    msg = obj.label + " Should not be Blank ";
                    resultObj.resultFlag = false;
                    stopLoader();//24
                    //return false;
                    break;

                }

                if (key.indexOf("_DLOV") == -1 && jsonObject[key] != "" && jsonObject[key] != null && jsonObject[key] != "null" && typeof obj.regex != 'undefined' && obj.regex != null && typeof obj.errorMessage != 'undefined' && obj.errorMessage != null)
                {

                    gridPatt = new RegExp(obj.regex);
                    gridRes = gridPatt.test(jsonObject[key]);
                    if (gridRes != true)
                    {
                        errorCount++;
                        msg = obj.label + "  should contain " + obj.errorMessage;
                        resultObj.resultFlag = false;
                        // return false;
                        break;
                    }

                }

                try {
                    if (key.indexOf("_DLOV") == -1 && jsonObject[key] != "" && jsonObject[key] != null
                            && jsonObject[key] != "undefined" && jsonObject[key] != "null"
                            && typeof obj.COL_TEXT_MAXLENGTH != 'undefined'
                            && obj.COL_TEXT_MAXLENGTH != null
                            && obj.COL_TEXT_MAXLENGTH != "undefined"
                            && obj.COL_TEXT_MAXLENGTH != "null"
                            && obj.COL_TEXT_MAXLENGTH != ""
                            )
                    {

                        var textmaxlg = obj.COL_TEXT_MAXLENGTH;
                        var fielddata = jsonObject[key];
                        var txtlength = fielddata.length;
                        var maxlg = parseInt(textmaxlg);
                        if (txtlength > maxlg)
                        {
                            errorCount++;
                            msg = "Value too large for " + obj.label + " (Maximum Allowed: " + maxlg + ")";
                            resultObj.resultFlag = false;
                            // return false;
                            break;
                        }

                    }
                } catch (e) {

                }

            }
        }


    }


    resultObj.errorMsg = msg;
    resultObj.errorCount = errorCount;
    resultObj.tableName = tableName;

    return JSON.stringify(resultObj);

}
function genericGridValidationMessage(errorMsg, gridId) {

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#logoutDailog").html(errorMsg);
    $("#logoutDailog").dialog({resizable: false,
        title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
        modal: true,
        width: 300,
        height: 135,
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
//                    $("#" + gridId).jqxGrid('updatebounddata', 'cells');
//                    $("#" + gridId).jqxGrid('clearselection');
//                    $("#" + gridId).jqxGrid('clearfilters');

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
;
function insertGridRow(tabId, dataView, viewId, lasteditedrow) {
//function insertGridRow(tabId, dataView, datafields, viewId, localData) {
    console.log("insertGridRow:::123456788" + tabId);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    //console.log(":::datafields::" + JSON.stringify(datafields)  );
    var tabOperationFlag = false;
    var Message = '';
    $("#" + tabId).jqxGrid('clearfilters', true);
    var data = $("#" + tabId).jqxGrid('getrowdata', 0);
    var tabHidden = viewId + "_HIDDEN";
    if (data == null || (data != null && !jQuery.isEmptyObject(data) && data[tabHidden] != null
            && data[tabHidden] != '' && data[tabHidden] != 'INSERT')) {
        var tabOperationFlag = true;
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
        if (dataView == "GRID-VIEW")
        {
            // //////console.log("k");
            var sourceex = $("#" + tabId).jqxGrid('source');
            var defaultValuesArray = [];
            var defaultValues = $("#" + tabId + "_defaultValues").val();
            if (defaultValues != null && defaultValues != '') {
            } else {
                defaultValues = $("#defaultValues").val();
            }

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
                        if (colvalue[0] != null && colvalue[0] != '' && colvalue[0].indexOf("_DLOV") == -1 && colvalue[1] == 'Y') {
                            colvalue[1] = true;
                        }
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
                if (value != null && value['name'] != null && value['name'] != '') {
                    var columnName = value['name'];
                    var fieldName = columnName.replace("_DLOV", "");
                    console.log("==================columnName::::" + columnName + ":::::::viewId:::" + viewId + "::tabId::::::" + tabId);
                    if (columnName != null && columnName != '' && columnName == viewId + "_HIDDEN") {
                        row[columnName] = "INSERT";
                    } else if (columnName != null && columnName != '' && columnName == 'BKONT')
                    {
//                row[columnName] = "01";
                    } else if (columnName != null && columnName != ''
                            && jQuery.inArray(columnName, colnameArray) > -1) {
                        for (var cv = 0; cv <= colnameArray.length; cv++) {
                            if (columnName == colnameArray[cv])
                                if (value.type != null && value.type != ""
                                        && value.dataType != "C" &&
                                        value.type != "boolean"
                                        && colvalueArray[cv] === true) {
                                    row[columnName] = 'Y';
                                } else if (value.type != null && value.type != ""
                                        && value.dataType != "C" &&
                                        value.type != "boolean"
                                        && colvalueArray[cv] === false) {
                                    row[columnName] = 'N';
                                } else {
                                    row[columnName] = colvalueArray[cv];
                                }

                        }

                    } else if (fieldName != null && fieldName != ''
                            && jQuery.inArray(fieldName, colnameArray) > -1) {
                        try {
                            for (var cv = 0; cv <= colnameArray.length; cv++) {
                                if (fieldName == colnameArray[cv]) {
                                    row[columnName] = colvalueArray[cv];
                                }


                            }
                        } catch (e) {

                        }


                    } else if (value.type != null && value.type != ""
                            && (value.type === "boolean" || value.type === "bool"))
                    {
                        row[columnName] = false;
                        // row['cellclassname'] = "vendorno_style2";
                    } else {
                        row[columnName] = "";
                        // row['cellclassname'] = "vendorno_style2";
                    }

                }
            }


            let gridInitStr = localStorage.getItem("selectedGridInitParamObj");
            if (gridInitStr !== null && gridInitStr !== undefined && gridInitStr !== "") {
                var gridInitObj = JSON.parse(gridInitStr);

                if (gridInitObj['uuu_attachmentDefaultFlagCheck'] !== null && gridInitObj['uuu_attachmentDefaultFlagCheck'] !== undefined && gridInitObj['uuu_attachmentDefaultFlagCheck'] !== "" && gridInitObj['uuu_attachmentDefaultFlagCheck'] === "Y")
                {
                    var rows = $("#" + tabId).jqxGrid('getrows');
                    if (rows.length > 0 && row['DEFAULT_FLAG']) {
                        row['DEFAULT_FLAG'] = "";
                    }
                }
            }
            console.log("row:::" + JSON.stringify(row));
//        var localdata = JSON.stringify(localData).length;



            console.log("data:::" + JSON.stringify(data));
            alert("tab id is " + tabId);
            if (data == null)
            {
                alert("data is null");

                ///code for defaultValues values

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
                if (data[tabHidden] != null && data[tabHidden] != '' && data[tabHidden] == 'INSERT') {
                    tabOperationFlag = false;
                    Message = "Please update the previously added record before adding a new entry."
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
                $("#" + tabId).jqxGrid('selectrow', 0);

                try {

                    if (lasteditedrow != null && lasteditedrow != undefined && lasteditedrow != '' && lasteditedrow != 'undefined') {
                        try {
                            $('#' + tabId).jqxGrid('selectrow', lasteditedrow + 1);
                        } catch (ei) {

                        }
                    }
                } catch (eb) {

                }


            } else if (!tabOperationFlag && Message != '' && Message == 'Please update the previously added record before adding a new entry.') {
                $('#' + viewId + '_Add').css("display", "none");
                showErrorPopupMessage(dialogSplitIconText('Please update the previously added record before adding a new entry.', "H"), 'Message', '420');
            }

            $('#' + viewId + '_Add').css("display", "none");

        }
    } else if (data[tabHidden] != null && data[tabHidden] != '' && data[tabHidden] == 'INSERT') {
        Message = "Please update the previously added record before adding a new entry."
        showErrorPopupMessage(dialogSplitIconText('Please update the previously added record before adding a new entry.', "H"), 'Message', '430');
    }
}
function endoperation(selectedDataArray1, tableName, dataView, operation, basicData, selectedTab, selectedGridId, erpTab, newIndex, tabId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    selectedDataArray = [];
    selectedDataArray = selectedDataArray1;
    //console.log("selectedDataArray1::::" + selectedDataArray.length)
    if (dataView == 'TABLE-VIEW') {
        var fieldIds = [];
        var fieldVals = [];
        var dataArray = [];
        var dataCheckArray = {};
        var jsOpsObj = null;
        var resultObj = {};
        var validatioFlag = true;
        var errorMsg = "";
        for (var i = 0; i < selectedDataArray1.length; i++) {
            fieldIds = [];
            fieldVals = [];
            for (var j = 0; j < initialTblViewCols.length; j++) {
                fieldIds.push(initialTblViewCols[j].datafield);
                fieldVals.push(selectedDataArray1[i][initialTblViewCols[j].datafield]);
                dataCheckArray[initialTblViewCols[j].datafield] = selectedDataArray1[i][initialTblViewCols[j].datafield];
            }
//            var dataString = JSON.stringify(dataCheckArray);
//            resultObj = genericGridValidatin(dataString, tableName);
//            obj = JSON.parse(resultObj);
//            if (obj.errorCount != 0) {
//                errorMsg = obj.errorMsg;
//                validatioFlag = false;
//                break;
//            } else {
//                continue;
//            }

            jsOpsObj = new Object();
            jsOpsObj.feildIds = fieldIds;
            jsOpsObj.feildValues = fieldVals;
            jsOpsObj.basicData = basicData;
            dataArray.push(jsOpsObj);
        }

//        if (validatioFlag) {           
//           if (newIndex >= 0) {
//            UpdatebeforeTabSwitch(JSON.stringify(dataArray), dataView, tableName, operation, selectedTab, selectedGridId, erpTab, newIndex, tabId);
//        } else {
//            UpdateOrDelete(JSON.stringify(dataArray), dataView, tableName, "update");
//        }
//    } else {
//            $("#SelectedCurrentTabId").val(tableName);
//
//            genericGridValidationMessage(errorMsg, tableName);
//        }
        if (newIndex >= 0) {
            UpdatebeforeTabSwitch(JSON.stringify(dataArray), dataView, tableName, operation, selectedTab, selectedGridId, erpTab, newIndex, tabId);
        } else {
            UpdateOrDelete(JSON.stringify(dataArray), dataView, tableName, "update");
        }

    } else {
        var resultObj = {};
        var validatioFlag = true;
        var errorMsg = "";
        for (var i = 0; i < selectedDataArray.length; i++) {
            resultObj = {};
            var dataString = "";

            dataString = JSON.stringify(selectedDataArray[i]);
            //console.log("dataString::::" + dataString);

            resultObj = genericGridValidatin(dataString, tableName);

            obj = JSON.parse(resultObj);
            if (obj.errorCount != 0) {
                errorMsg = obj.errorMsg;
                validatioFlag = false;
                break;
            } else {
                continue;
            }

        }

        if (validatioFlag) {
            var dataArray = [];
            if (Array.isArray(selectedDataArray)) {
                for (var i = 0; i < selectedDataArray.length; i++) {
                    var jsonOBJ = {}
                    jsonOBJ.feildIds = [];
                    jsonOBJ.feildValues = [];
                    jsonOBJ.basicData = {};
                    var objectr = selectedDataArray[i];

                    jsonOBJ.feildIds = Object.keys(objectr);
                    for (var k = 0; k < jsonOBJ.feildIds.length; k++) {
                        jsonOBJ.feildValues.push(objectr[jsonOBJ.feildIds[k]]);

                    }
                    //     ////console.log(JSON.stringify( jsonOBJ.feildValues));
                    //jsonOBJ.feildValues=Object.values(obj);
                    jsonOBJ.basicData = basicData;
                    dataArray.push(jsonOBJ);

                }
            }
            if (newIndex >= 0) {
                UpdatebeforeTabSwitch(JSON.stringify(dataArray), dataView, tableName, operation, selectedTab, selectedGridId, erpTab, newIndex, tabId);
            } else {
                UpdateOrDelete(JSON.stringify(dataArray), dataView, tableName, "update");
            }
//            UpdateOrDelete(JSON.stringify(dataArray), dataView, tableName, (operation != null && operation != 'checkingTabData' ? "update" : "checkingTabData"));
        } else {
            stopLoader();
            $("#SelectedCurrentTabId").val(tableName);

            genericGridValidationMessage(errorMsg, tableName);
        }
    }


}
function gridOperation(operationName, tabId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("operationName:::" + operationName);
    selectedDataArray = [];
    var errorMessageTable = "";
    var errorMesssageDataArray = [];
    var errorMessagesCount = 0;
    if (operationName != null && operationName == 'update' || operationName == 'checkingTabData') {
        var selectedobject;
        if ($("#" + tabId + "_Update").attr('data-view') == 'TABLE-VIEW') {
            var matched = false;
            matched = false;
            initialTblViewData = JSON.parse($("#" + tabId + "_Update").attr('data-localdata'));
            initialTblViewCols = JSON.parse($("#" + tabId + "_Update").attr('data-datafields'));
            for (var rowIndex = 0; rowIndex < initialTblViewData.length; rowIndex++) {
                var oldDataObj = initialTblViewData[rowIndex];
                var dataObj = {};
                matched = false;
                if (initialTblViewCols != null && initialTblViewCols.length != 0) {
                    for (var i = 0; i < initialTblViewCols.length; i++) {
                        var initialTblViewColsObj = initialTblViewCols[i];
                        var dataType = $("#td" + initialTblViewColsObj['datafield'] + rowIndex).attr("data-type");
                        var fieldname = initialTblViewColsObj['datafield'];
                        var rangeFlag = $("#td" + initialTblViewColsObj['datafield'] + rowIndex).attr("data-isrange");
                        var regex = $("#td" + initialTblViewColsObj['datafield'] + rowIndex).attr('data-regex');
                        var regexMessage = $("#td" + initialTblViewColsObj['datafield'] + rowIndex).attr('data-regex-msg');
                        if (dataType == 'tb') {
                            var element = $("#tb" + initialTblViewColsObj['datafield'] + rowIndex);
                            var tagName = element.prop("tagName").toLowerCase();

                            var columnValue = (tagName === "input" || tagName === "select" || tagName === "textarea")
                                    ? element.val()
                                    : element.text();
                            dataObj[fieldname] = columnValue;

//                            var columnValue = $("#tb" + initialTblViewColsObj['datafield'] + rowIndex).val();
//                            dataObj[fieldname] = columnValue;
                            if (oldDataObj[fieldname] != columnValue) {
                                matched = true;
                                if (columnValue != null
                                        && columnValue != ''
                                        && columnValue != undefined) {
                                    var pattern = new RegExp(regex);
                                    var res = pattern.test(columnValue);
                                    if (res == false)
                                    {
                                        errorMessageTable += '<tr><td>' + oldDataObj.PROPERTY_NAME + '</td><td>' + regexMessage + '</td></tr>';
                                        errorMessagesCount++;
                                    }
                                }


                            }
                            if (rangeFlag == 'Y'
                                    && (fieldname == 'PROPERTY_VALUE1'
                                            || fieldname == 'PROPERTY_VALUE2')) {
                                columnValue = $("#maxtb" + initialTblViewColsObj['datafield'] + rowIndex).val();
                                var minValue = $("#tbPROPERTY_VALUE1" + rowIndex).val();
                                var maxValue = $("#maxtbPROPERTY_VALUE2" + rowIndex).val();
                                dataObj['PROPERTY_VALUE2'] = maxValue;
                                if (!(minValue != null && minValue != '') && (maxValue != null && maxValue != '')) {
                                    errorMessageTable += '<tr><td>' + oldDataObj.PROPERTY_NAME + '</td><td>Min Value Should not be Blank</td></tr>';
                                    errorMessagesCount++;
                                } else
                                if (minValue != null && minValue != '' && !(maxValue != null && maxValue != '')) {
                                    errorMessageTable += '<tr><td>' + oldDataObj.PROPERTY_NAME + '</td><td>Max Value Should not be Blank</td></tr>';
                                    errorMessagesCount++;
                                } else
                                if (minValue != null && minValue != ''
                                        && (maxValue != null && maxValue != ''
                                                && parseInt(minValue) > parseInt(maxValue))
                                        ) {
                                    errorMessageTable += '<tr><td>' + oldDataObj.PROPERTY_NAME + '</td><td>Min Value Should be less than max value</td></tr>';
                                    errorMessagesCount++;
                                }
                            }


                        } else if (initialTblViewColsObj['columntype'] == "checkbox" && !initialTblViewColsObj['hidden']) {
                            var columnValue = $("#tb" + initialTblViewColsObj['datafield'] + rowIndex).is(':checked') == true ? "Y" : "N";
                            var value = $("#tb" + initialTblViewColsObj['datafield'] + rowIndex).is(':checked');
                            dataObj[fieldname] = columnValue;
                            if (oldDataObj[fieldname] != value) {
                                matched = true;
                            }
                        } else {
                            if (fieldname != 'PROPERTY_VALUE2') {
                                dataObj[fieldname] = $("#td" + initialTblViewColsObj['datafield'] + rowIndex).text();
                            }

                        }
                    }
                    if (dataObj != null && !jQuery.isEmptyObject(dataObj)) {
                        if (matched) {
                            if (parseInt(errorMessagesCount) == 0) {
                                selectedDataArray.push(dataObj);
                            }

                        }
                    }
                }
                // end if td array
            }// end loop


        } else {
            var lasteditedfield = $('#' + tabId).attr('data-last-ed-field');
            var lasteditedrow = $('#' + tabId).attr('data-last-ed-row');
            var isRenderFlagcolumn = $('#' + tabId).attr('isRenderFlagcolumn');

            if (isRenderFlagcolumn) {
                $('#' + tabId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, true);
            } else {
                $('#' + tabId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
            }
            var jsonDataArray = grioldDataObj.oldData;
            // alert("jsonDataArray:::");
            var rwindex = selecteIndexes[0];
            var rowindexes = $('#' + tabId).jqxGrid('getselectedrowindexes');
            if (operationName == 'checkingTabData') {

                selectedDataArray = $('#' + tabId).jqxGrid('getdisplayrows');
            } else {
                console.log("rowindexes:::" + rowindexes);
                if (rowindexes != null) {
                    var insertCount = 0;
                    var totalRowIndex = rowindexes.length;
                    var datainformations = $('#' + tabId).jqxGrid('getdatainformation');
//                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
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
                    for (var m = count; m < totalRowIndex; m++) {

                        if (rowindexes[m] != -1) {
                            var updateGridJsonObj = {};
                            var newGriddata = $('#' + tabId).jqxGrid('getrowdata', rowindexes[m]);
                            var oldGridData = jsonDataArray[rowindexes[m - insertCount]];
                            var matchCount = 0;
                            var gridIdHidden = tabId + "_HIDDEN";


                            var gridIdHidden = tabId + "_HIDDEN";

                            try {
                                if (tabId != null && tabId.indexOf("MM_EQP_REFERENCE") > -1) {
                                    if (newGriddata['REF_AUDIT_ID'] == null) {
                                        newGriddata['REF_AUDIT_ID'] = oldGridData['REF_AUDIT_ID']
                                    }
                                    if (newGriddata[gridIdHidden] == null) {
                                        newGriddata[gridIdHidden] = oldGridData[gridIdHidden];
                                    }

                                }
                            } catch (e) {

                            }




                            if (newGriddata != null && newGriddata != undefined) {
                                var objectKeys = Object.keys(newGriddata);
                                for (var i = 0; i < objectKeys.length; i++)
                                {

                                    try {
                                        console.log("::::::::::::::::::" + objectKeys[i]);
//                                if ($("#" + tabId).jqxGrid('getcolumnproperty', objectKeys[i], 'columntype') == 'datetimeinput') {
//                                    newGriddata[objectKeys[i]] = castDate(newGriddata[objectKeys[i]]);
//                                }
                                        if ($("#" + tabId).jqxGrid('getcolumnproperty', objectKeys[i], 'columntype') == 'datetimeinput') {
                                            if (newGriddata[objectKeys[i]] == 'aN-aN-NaN')
                                            {
                                                newGriddata[objectKeys[i]] = "";
                                            } else {
                                                newGriddata[objectKeys[i]] = castDate(newGriddata[objectKeys[i]]);
                                            }
                                        }


                                    } catch (e) {
                                        console.log("error in js::" + e);
                                    }
                                }

                                if (newGriddata[gridIdHidden] != null && newGriddata[gridIdHidden] != ''
                                        && newGriddata[gridIdHidden] != 'INSERT') {
                                    if (oldGridData != null && oldGridData != undefined) {
                                        for (var key in oldGridData) {
                                            var oldgridvalue = oldGridData[key];
                                            var newgridValue = newGriddata[key];
                                            if (key != 'show_detail') {

//                                    if ($("#" + tabId).jqxGrid('getcolumnproperty', key, 'columntype') == 'datetimeinput') {
//
//                                        newgridValue = castDate(newgridValue);
//                                        newGriddata[key] = newgridValue;
//                                    }

                                                if (newgridValue != oldgridvalue) {
                                                    matchCount++;
                                                }

                                            }
                                        }

                                    } else {
                                        matchCount = 1;
                                    }
                                    if (matchCount != 0) {
                                        try {
                                            if (newGriddata.hasOwnProperty('CONTENT')) {
//                                                delete newGriddata['CONTENT'];
                                            }
                                        } catch (e) {

                                        }

                                        selectedDataArray.push(newGriddata);
                                        matchCount == 0;
                                    }

                                } else {
                                    insertCount++;
                                    try {
                                        if (newGriddata.hasOwnProperty('CONTENT')) {
//                                            delete newGriddata['CONTENT'];
                                        }
                                    } catch (e) {

                                    }
                                    selectedDataArray.push(newGriddata);
                                }


                            }



                        }

                    }
                }

            }

        }
    } else if (operationName != null && operationName == 'insert') {
        var lasteditedfield = $('#' + tabId).attr('data-last-ed-field');
        var lasteditedrow = $('#' + tabId).attr('data-last-ed-row');
        $('#' + tabId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);
        selectedDataArray.length = 0;
        for (var i = 0; i < selecteIndexes.length; i++) {

            var rwindex = selecteIndexes[i];
            var newdata = $('#' + tabId).jqxGrid('getrowdata', rwindex);
            var jsonDataArray = grioldDataObj.oldData;
            var oldData = jsonDataArray[rwindex];
            try {
                if (tabId != null && tabId.indexOf("MM_EQP_REFERENCE") > -1) {
//                                if (newGriddata['REF_AUDIT_ID'] == null) {
//                                    newGriddata['REF_AUDIT_ID'] = oldGridData['REF_AUDIT_ID']
//                                }
                    if (newGriddata[gridIdHidden] == null) {
                        newGriddata[gridIdHidden] = 'INSERT';
                    }

                }
            } catch (e) {

            }

            selectedDataArray.push(newdata);
            console.log("UPdated selecteIndexes:::" + i + "::::rwindex:::" + rwindex);
            console.log("UPdated NEW data::::" + i + ":::::rwindex::::::" + rwindex + "::" + JSON.stringify(newdata));
            console.log("UPdated OLD data::::" + i + "::::::rwindex:::::" + rwindex + "::" + JSON.stringify(oldData));
        }
    }
    console.log("selectedDataArray::::2998:::" + JSON.stringify(selectedDataArray));
    if (errorMessageTable != null && errorMessageTable != '') {
        errorMessageDataObj.errorMesssage = errorMessageTable;
        return errorMessageDataObj;
    }
    return selectedDataArray;
}
var isRgestrationFinished = false;
function castDate(str) {
    str = $.trim(str);
    var castedData = "";
    if (str.length > 10) {
        str = str.toString().replace("Date", "");
        var date = new Date(str),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
//               alert('date::' + [date.getFullYear(), mnth, day].join("-"));
        castedData = [day, mnth, date.getFullYear()].join("-");
    } else {
        castedData = str;
    }

    return castedData;
}
function mmFetchPropertiesTabData(jsPropertiesArray) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (jsPropertiesArray != undefined) {
        var source =
                {
                    //localdata: JSON.parse(jsPropertiesArray),
                    localdata: jsPropertiesArray,
                    datafields:
                            [
                                {name: 'O_STXT_SEQ', type: 'string'},
                                {name: 'O_SEQ', type: 'number'},
                                {name: 'MANDATORY_IND', type: 'string'},
                                {name: 'DATATYPE_REF', type: 'string'},
//                                            {name: 'STX', type: 'string'},
//                                            {name: 'ltxtflag', type: 'string'},
                                {name: 'HIGH_LVL_IND', type: 'string'},
                                //   {name: 'DATATYPE_REF', type: 'string'},
                                {name: 'UOM', type: 'string'},
                                {name: 'UOMID', type: 'string'},
                                {name: 'VALUE', type: 'string'},
                                {name: 'CONCEPTID', type: 'string'},
                                {name: 'VALUEID', type: 'string'},
                                {name: 'WORD', type: 'string'},
//                                            {name: 'UOMID', type: 'string'},
//                                            {name: 'UOM', type: 'string'},
//                                            {name: 'children', type: 'string'},
                                {name: 'O_DEF', type: 'string'}

                            ],
                    datatype: "JSON"
                };



        var adapter = new $.jqx.dataAdapter(source);
        //////////////alert("before apending data to griod");
        $("#MM_PROPERTIES").jqxGrid(
                {
                    //width: '80%',
                    width: '65%',
                    //selectionmode: 'singlecell',
                    // editable: true,
                    theme: 'energyblue',
                    source: adapter,
                    //filterable: true,
                    enabletooltips: true,
                    // showfilterrow: true,
                    height: '380',
                    // added for the row height 06-07-2016
                    rowsheight: 25,
                    // end of  added for the row height 06-07-2016
                    columnsresize: true,
                    columnsreorder: true,
                    sortable: true,
                    ready: function () {
                        $("#MM_PROPERTIES").jqxGrid('sortby', 'MANDATORY_IND', 'desc');
                        // stopLoader();
                    },
                    columns: [
                        {text: 'highlevelid', hidden: true, editable: false, align: 'center', datafield: 'HIGH_LVL_IND', cellsalign: 'left'},
                        {text: 'Characteristic', width: '30%', enabletooltips: false
                            , cellsrenderer: propertyrenderer
                            , editable: false, align: 'center', datafield: 'WORD', cellsalign: 'left'},
                        /* width: '35%' */
                        {text: 'Value', width: '45%', enabletooltips: false,
                            cellsrenderer: valuepropertyrenderer,
                            align: 'center', datafield: 'VALUE', cellsalign: 'left'},
                        /* width: '35%'         */
                        {text: 'UoM', width: '25%', editable: false, align: 'center', datafield: 'UOM', columntype: 'text'
                            , cellsrenderer: uomrenderer
                        },
                        {text: 'propertyid', hidden: true, align: 'center', datafield: 'CONCEPTID', cellsalign: 'left'},
                        {text: 'valueid', hidden: true, align: 'center', datafield: 'VALUEID', cellsalign: 'left'},
                        {text: 'uomid', hidden: true, align: 'center', datafield: 'UOMID', cellsalign: 'left'},
                        {text: 'DataType',
                            //  cellsrenderer: datatyperenderer,
                            hidden: true, editable: false, align: 'center', datafield: 'DATATYPE_REF', cellsalign: 'left', enabletooltips: false},
                        {text: 'Required', hidden: false, editable: false, align: 'center', datafield: 'MANDATORY_IND', cellsalign: 'left'},
                        // {text: 'Long Sequence', hidden: true, editable: false, align: 'center', datafield: 'longseq', cellsalign: 'left'},
                        //{text: 'uomabbv', hidden: true, editable: false, align: 'center', datafield: 'UOM', cellsalign: 'left'},
                        {text: 'definition', hidden: true, editable: false, align: 'center', datafield: 'O_DEF', cellsalign: 'left'}

                    ]
                });

        $("#accordion").accordion({active: 0});

    }
}
function addRecordCharacterstics(recordNo, characterstics) {
    // showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    $.ajax({
        type: "POST",
        url: 'addCharacteristics',
        // async: false,
        data: {
            'recordNo': recordNo,
            'characteristics': characterstics,
            'conceptid': $("#CONCEPT_ID").val()
        },
        traditional: true, cache: false,
        success: function (response) {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
            console.log((response));

            if (response != []) {
                //  showLoader();
                $("#MM_PROPERTIES").remove();
                $("#MM_PROPERTIES_TABLE").after("<div id='MM_PROPERTIES'>");
                if ($("#RECORD_NO").val() == "")
                {
                    console.log('emptying grid');
                    //  $('#propertiesgrid').html("");

                } else {

                    var re = new RegExp('#', 'g');
                    var conceptId = $("#CONCEPT_ID").val();
                    conceptId = conceptId.replace(re, '_');
                    var source =
                            {
                                localdata: JSON.parse(response),
                                datafields:
                                        [
                                            {name: 'shortseq', type: 'string'},
                                            {name: 'longseq', type: 'number'},
                                            {name: 'reqflag', type: 'string'},
                                            {name: 'pdrflag', type: 'string'},
                                            {name: 'stxtflag', type: 'string'},
                                            {name: 'ltxtflag', type: 'string'},
                                            {name: 'highlevelid', type: 'string'},
                                            {name: 'datatype', type: 'string'},
                                            {name: 'uom', type: 'string'},
                                            {name: 'uomid', type: 'string'},
                                            {name: 'value', type: 'string'},
                                            {name: 'propertyconceptid', type: 'string'},
                                            {name: 'valueconceptid', type: 'string'},
                                            {name: 'property', type: 'string'},
                                            {name: 'uomid', type: 'string'},
                                            {name: 'uomabbv', type: 'string'},
                                            {name: 'children', type: 'string'},
                                            {name: 'definition', type: 'string'}

                                        ],
                                datatype: "JSON"
                            };
                    var adapter = new $.jqx.dataAdapter(source);
                    //////////////alert("before apending data to griod");
                    $("#MM_PROPERTIES").jqxGrid(
                            {
                                //width: '80%',
                                width: '65%',
                                //selectionmode: 'singlecell',
                                // editable: true,
                                theme: 'energyblue',
                                source: adapter,
                                //filterable: true,
                                enabletooltips: true,
                                // showfilterrow: true,
                                height: '380',
                                // added for the row height 06-07-2016
                                rowsheight: 25,
                                // end of  added for the row height 06-07-2016
                                columnsresize: true,
                                columnsreorder: true,
                                sortable: true,
                                ready: function () {
                                    $("#MM_PROPERTIES").jqxGrid('sortby', 'longseq', 'asc');
                                    // stopLoader();
                                },
                                columns: [
                                    {text: 'shortseq', hidden: true, editable: false, align: 'center', datafield: 'shortseq', cellsalign: 'left'},
                                    {text: 'pdrflag', hidden: true, editable: false, align: 'center', datafield: 'pdrflag', cellsalign: 'left'},
                                    {text: 'stxtflag', hidden: true, editable: false, align: 'center', datafield: 'stxtflag', cellsalign: 'left'},
                                    {text: 'ltxtflag', hidden: true, editable: false, align: 'center', datafield: 'ltxtflag', cellsalign: 'left'},
                                    {text: 'highlevelid', hidden: true, editable: false, align: 'center', datafield: 'highlevelid', cellsalign: 'left'},
                                    {text: 'Characteristic', width: '30%', enabletooltips: false
                                        , cellsrenderer: propertyrenderer
                                        , editable: false, align: 'center', datafield: 'property', cellsalign: 'left'},
                                    /* width: '35%' */
                                    {text: 'Value', width: '45%', enabletooltips: false,
                                        cellsrenderer: valuepropertyrenderer,
                                        align: 'center', datafield: 'value', cellsalign: 'left'},
                                    /* width: '35%'         */
                                    {text: 'UoM', width: '25%', editable: false, align: 'center', datafield: 'uom', columntype: 'text'
                                        , cellsrenderer: uomrenderer
                                    },
                                    {text: 'propertyid', hidden: true, align: 'center', datafield: 'propertyconceptid', cellsalign: 'left'},
                                    {text: 'valueid', hidden: true, align: 'center', datafield: 'valueconceptid', cellsalign: 'left'},
                                    {text: 'uomid', hidden: true, align: 'center', datafield: 'uomid', cellsalign: 'left'},
                                    {text: 'DataType',
                                        cellsrenderer: datatyperenderer,
                                        hidden: true, editable: false, align: 'center', datafield: 'datatype', cellsalign: 'left', enabletooltips: false},
                                    {text: 'Required', hidden: true, editable: false, align: 'center', datafield: 'reqflag', cellsalign: 'left'},
                                    {text: 'Long Sequence', hidden: true, editable: false, align: 'center', datafield: 'longseq', cellsalign: 'left'},
                                    {text: 'uomabbv', hidden: true, editable: false, align: 'center', datafield: 'uomabbv', cellsalign: 'left'},
                                    {text: 'definition', hidden: true, editable: false, align: 'center', datafield: 'definition', cellsalign: 'left'}

                                ]
                            });
                    //  stopLoader();
                    //}
                    console.log("activating 1");
                }

            }

        },
        error: function (e) {
            sessionTimeout(e);
        }


    });
}
/////////////for Serch View
function mmFetchPropertiesTabData(jsPropertiesArray) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $("#MM_PROPERTIES").remove();
    $("#MM_PROPERTIES_TABLE").hide();
    $("#MM_PROPERTIES_TABLE").after("<div id='MM_PROPERTIES'></div>")

    if (jsPropertiesArray != undefined) {

        console.log("Calling with jsPropertiesArray ");
        var source =
                {
                    //localdata: JSON.parse(jsPropertiesArray),
                    localdata: jsPropertiesArray,
                    datafields:
                            [
                                {name: 'O_STXT_SEQ', type: 'string'},
                                {name: 'O_SEQ', type: 'number'},
                                {name: 'MANDATORY_IND', type: 'string'},
                                {name: 'DATATYPE_REF', type: 'string'},
//                                            {name: 'STX', type: 'string'},
//                                            {name: 'ltxtflag', type: 'string'},
                                {name: 'HIGH_LVL_IND', type: 'string'},
                                //   {name: 'DATATYPE_REF', type: 'string'},
                                {name: 'UOM', type: 'string'},
                                {name: 'UOMID', type: 'string'},
                                {name: 'VALUE', type: 'string'},
                                {name: 'CONCEPTID', type: 'string'},
                                {name: 'VALUEID', type: 'string'},
                                {name: 'WORD', type: 'string'},
//                                            {name: 'UOMID', type: 'string'},
//                                            {name: 'UOM', type: 'string'},
//                                            {name: 'children', type: 'string'},
                                {name: 'O_DEF', type: 'string'}

                            ],
                    datatype: "JSON"
                };



        var adapter = new $.jqx.dataAdapter(source);
        //////////////alert("before apending data to griod");
        $("#MM_PROPERTIES").jqxGrid(
                {
                    //width: '80%',
                    width: '65%',
                    //selectionmode: 'singlecell',
                    // editable: true,
                    theme: 'energyblue',
                    source: adapter,
                    //filterable: true,
                    enabletooltips: true,
                    // showfilterrow: true,
                    height: '380',
                    // added for the row height 06-07-2016
                    rowsheight: 25,
                    // end of  added for the row height 06-07-2016
                    columnsresize: true,
                    columnsreorder: true,
                    sortable: true,
                    ready: function () {
                        $("#MM_PROPERTIES").jqxGrid('sortby', 'MANDATORY_IND', 'desc');
                        // stopLoader();
                    },
                    columns: [
                        //  {text: 'shortseq', hidden: true, editable: false, align: 'center', datafield: 'shortseq', cellsalign: 'left'},
                        //  {text: 'pdrflag', hidden: true, editable: false, align: 'center', datafield: 'pdrflag', cellsalign: 'left'},
                        //  {text: 'stxtflag', hidden: true, editable: false, align: 'center', datafield: 'stxtflag', cellsalign: 'left'},
                        //  {text: 'ltxtflag', hidden: true, editable: false, align: 'center', datafield: 'ltxtflag', cellsalign: 'left'},
                        {text: 'highlevelid', hidden: true, editable: false, align: 'center', datafield: 'HIGH_LVL_IND', cellsalign: 'left'},
                        {text: 'Characteristic', width: '30%', enabletooltips: false
                            , cellsrenderer: propertyrenderer
                            , editable: false, align: 'center', datafield: 'WORD', cellsalign: 'left'},
                        /* width: '35%' */
                        {text: 'Value', width: '45%', enabletooltips: false,
                            cellsrenderer: valuepropertyrenderer,
                            align: 'center', datafield: 'VALUE', cellsalign: 'left'},
                        /* width: '35%'         */
                        {text: 'UoM', width: '25%', editable: false, align: 'center', datafield: 'UOM', columntype: 'text'
                            , cellsrenderer: uomrenderer
                        },
                        {text: 'propertyid', hidden: true, align: 'center', datafield: 'CONCEPTID', cellsalign: 'left'},
                        {text: 'valueid', hidden: true, align: 'center', datafield: 'VALUEID', cellsalign: 'left'},
                        {text: 'uomid', hidden: true, align: 'center', datafield: 'UOMID', cellsalign: 'left'},
                        {text: 'DataType',
                            //  cellsrenderer: datatyperenderer,
                            hidden: true, editable: false, align: 'center', datafield: 'DATATYPE_REF', cellsalign: 'left', enabletooltips: false},
                        {text: 'Required', hidden: true, editable: false, align: 'center', datafield: 'MANDATORY_IND', cellsalign: 'left'},
                        // {text: 'Long Sequence', hidden: true, editable: false, align: 'center', datafield: 'longseq', cellsalign: 'left'},
                        //{text: 'uomabbv', hidden: true, editable: false, align: 'center', datafield: 'UOM', cellsalign: 'left'},
                        {text: 'definition', hidden: true, editable: false, align: 'center', datafield: 'O_DEF', cellsalign: 'left'}

                    ]
                });

        $("#accordion").accordion({active: 0});

    } else {
        console.log("Calling without jsPropertiesArray ");

        $.ajax({
            type: "POST",
            url: 'getRecordProps',
            data: {
                'recordNo': $("#RECORD_NO").val()
            },
            traditional: true, cache: false,
            success: function (response) {
                //  alert('Success: ' + response);
                console.log('Response::' + JSON.stringify(response));
                var source =
                        {
                            //localdata: JSON.parse(jsPropertiesArray),
                            localdata: response,
                            datafields:
                                    [
                                        {name: 'O_STXT_SEQ', type: 'string'},
                                        {name: 'O_SEQ', type: 'number'},
                                        {name: 'MANDATORY_IND', type: 'string'},
                                        {name: 'DATATYPE_REF', type: 'string'},
//                                            {name: 'STX', type: 'string'},
//                                            {name: 'ltxtflag', type: 'string'},
                                        {name: 'HIGH_LVL_IND', type: 'string'},
                                        //   {name: 'DATATYPE_REF', type: 'string'},
                                        {name: 'UOM', type: 'string'},
                                        {name: 'UOMID', type: 'string'},
                                        {name: 'VALUE', type: 'string'},
                                        {name: 'CONCEPTID', type: 'string'},
                                        {name: 'VALUEID', type: 'string'},
                                        {name: 'WORD', type: 'string'},
//                                            {name: 'UOMID', type: 'string'},
//                                            {name: 'UOM', type: 'string'},
//                                            {name: 'children', type: 'string'},
                                        {name: 'O_DEF', type: 'string'}

                                    ],
                            datatype: "JSON"
                        };



                var adapter = new $.jqx.dataAdapter(source);
                //////////////alert("before apending data to griod");
                $("#MM_PROPERTIES").jqxGrid(
                        {
                            //width: '80%',
                            width: '65%',
                            //selectionmode: 'singlecell',
                            // editable: true,
                            theme: 'energyblue',
                            source: adapter,
                            //filterable: true,
                            enabletooltips: true,
                            // showfilterrow: true,
                            height: '380',
                            // added for the row height 06-07-2016
                            rowsheight: 25,
                            // end of  added for the row height 06-07-2016
                            columnsresize: true,
                            columnsreorder: true,
                            sortable: true,
                            ready: function () {
                                $("#MM_PROPERTIES").jqxGrid('sortby', 'MANDATORY_IND', 'desc');
                                // stopLoader();
                            },
                            columns: [
                                //  {text: 'shortseq', hidden: true, editable: false, align: 'center', datafield: 'shortseq', cellsalign: 'left'},
                                //  {text: 'pdrflag', hidden: true, editable: false, align: 'center', datafield: 'pdrflag', cellsalign: 'left'},
                                //  {text: 'stxtflag', hidden: true, editable: false, align: 'center', datafield: 'stxtflag', cellsalign: 'left'},
                                //  {text: 'ltxtflag', hidden: true, editable: false, align: 'center', datafield: 'ltxtflag', cellsalign: 'left'},
                                {text: 'highlevelid', hidden: true, editable: false, align: 'center', datafield: 'HIGH_LVL_IND', cellsalign: 'left'},
                                {text: 'Characteristic', width: '30%', enabletooltips: false
                                    , cellsrenderer: propertyrenderer
                                    , editable: false, align: 'center', datafield: 'WORD', cellsalign: 'left'},
                                /* width: '35%' */
                                {text: 'Value', width: '45%', enabletooltips: false,
                                    cellsrenderer: valuepropertyrenderer,
                                    align: 'center', datafield: 'VALUE', cellsalign: 'left'},
                                /* width: '35%'         */
                                {text: 'UoM', width: '25%', editable: false, align: 'center', datafield: 'UOM', columntype: 'text'
                                    , cellsrenderer: uomrenderer
                                },
                                {text: 'propertyid', hidden: true, align: 'center', datafield: 'CONCEPTID', cellsalign: 'left'},
                                {text: 'valueid', hidden: true, align: 'center', datafield: 'VALUEID', cellsalign: 'left'},
                                {text: 'uomid', hidden: true, align: 'center', datafield: 'UOMID', cellsalign: 'left'},
                                {text: 'DataType',
                                    //  cellsrenderer: datatyperenderer,
                                    hidden: true, editable: false, align: 'center', datafield: 'DATATYPE_REF', cellsalign: 'left', enabletooltips: false},
                                {text: 'Required', hidden: false, editable: false, align: 'center', datafield: 'MANDATORY_IND', cellsalign: 'left'},
                                // {text: 'Long Sequence', hidden: true, editable: false, align: 'center', datafield: 'longseq', cellsalign: 'left'},
                                //{text: 'uomabbv', hidden: true, editable: false, align: 'center', datafield: 'UOM', cellsalign: 'left'},
                                {text: 'definition', hidden: true, editable: false, align: 'center', datafield: 'O_DEF', cellsalign: 'left'}

                            ]
                        });

                $("#accordion").accordion({active: 0});



            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    }
}
function addRecordCharactersticsSearchView(recordNo, characterstics) {
    // showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $.ajax({
        type: "POST",
        url: 'addCharacteristics',
        // async: false,
        data: {
            'recordNo': recordNo,
            'characteristics': characterstics,
            'conceptid': $("#CONCEPT_ID").val()
        },
        traditional: true, cache: false,
        success: function (response) {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>");
            console.log((response));

            if (response != []) {
                //  showLoader();
                $("#MM_PROPERTIES_SEARCH_VIEW").remove();
                $("#MM_PROPERTIES_SEARCH_VIEW_TABLE").after("<div id='MM_PROPERTIES_SEARCH_VIEW'>");
                if ($("#RECORD_NO").val() == "")
                {
                    console.log('emptying grid');
                    //  $('#propertiesgrid').html("");

                } else {

                    var re = new RegExp('#', 'g');
                    var conceptId = $("#CONCEPT_ID").val();
                    conceptId = conceptId.replace(re, '_');
                    var source =
                            {
                                localdata: JSON.parse(response),
                                datafields:
                                        [
                                            {name: 'shortseq', type: 'string'},
                                            {name: 'longseq', type: 'number'},
                                            {name: 'reqflag', type: 'string'},
                                            {name: 'pdrflag', type: 'string'},
                                            {name: 'stxtflag', type: 'string'},
                                            {name: 'ltxtflag', type: 'string'},
                                            {name: 'highlevelid', type: 'string'},
                                            {name: 'datatype', type: 'string'},
                                            {name: 'uom', type: 'string'},
                                            {name: 'uomid', type: 'string'},
                                            {name: 'value', type: 'string'},
                                            {name: 'propertyconceptid', type: 'string'},
                                            {name: 'valueconceptid', type: 'string'},
                                            {name: 'property', type: 'string'},
                                            {name: 'uomid', type: 'string'},
                                            {name: 'uomabbv', type: 'string'},
                                            {name: 'children', type: 'string'},
                                            {name: 'definition', type: 'string'}

                                        ],
                                datatype: "JSON"
                            };
                    var adapter = new $.jqx.dataAdapter(source);
                    ////////////alert("before apending data to griod");
                    $("#MM_PROPERTIES_SEARCH_VIEW").jqxGrid(
                            {
                                width: '80%',
                                //selectionmode: 'singlecell',
                                // editable: true,
                                theme: 'energyblue',
                                source: adapter,
                                //filterable: true,
                                enabletooltips: true,
                                // showfilterrow: true,
                                height: '380',
                                columnsresize: true,
                                columnsreorder: true,
                                sortable: true,
                                ready: function () {
                                    $("#MM_PROPERTIES_SEARCH_VIEW").jqxGrid('sortby', 'longseq', 'asc');
                                    // stopLoader();
                                },
                                columns: [
                                    {text: 'shortseq', hidden: true, editable: false, align: 'center', datafield: 'shortseq', cellsalign: 'left'},
                                    {text: 'pdrflag', hidden: true, editable: false, align: 'center', datafield: 'pdrflag', cellsalign: 'left'},
                                    {text: 'stxtflag', hidden: true, editable: false, align: 'center', datafield: 'stxtflag', cellsalign: 'left'},
                                    {text: 'ltxtflag', hidden: true, editable: false, align: 'center', datafield: 'ltxtflag', cellsalign: 'left'},
                                    {text: 'highlevelid', hidden: true, editable: false, align: 'center', datafield: 'highlevelid', cellsalign: 'left'},
                                    {text: 'Characteristic', width: '30%', enabletooltips: false
                                                //  , cellsrenderer: propertyrenderer
                                        , editable: false, align: 'center', datafield: 'property', cellsalign: 'left'},
                                    {text: 'Value', width: '35%', enabletooltips: false,
                                        // cellsrenderer: valuepropertyrenderer,
                                        align: 'center', datafield: 'value', cellsalign: 'left'},
                                    {text: 'UoM', width: '35%', editable: false, align: 'center', datafield: 'uom', columntype: 'text'
                                                // , cellsrenderer: uomrenderer
                                    },
                                    {text: 'propertyid', hidden: true, align: 'center', datafield: 'propertyconceptid', cellsalign: 'left'},
                                    {text: 'valueid', hidden: true, align: 'center', datafield: 'valueconceptid', cellsalign: 'left'},
                                    {text: 'uomid', hidden: true, align: 'center', datafield: 'uomid', cellsalign: 'left'},
                                    {text: 'DataType',
                                        // cellsrenderer: datatyperenderer,
                                        hidden: true, editable: false, align: 'center', datafield: 'datatype', cellsalign: 'left', enabletooltips: false},
                                    {text: 'Required', hidden: true, editable: false, align: 'center', datafield: 'reqflag', cellsalign: 'left'},
                                    {text: 'Long Sequence', hidden: true, editable: false, align: 'center', datafield: 'longseq', cellsalign: 'left'},
                                    {text: 'uomabbv', hidden: true, editable: false, align: 'center', datafield: 'uomabbv', cellsalign: 'left'},
                                    {text: 'definition', hidden: true, editable: false, align: 'center', datafield: 'definition', cellsalign: 'left'}

                                ]
                            });
                    //  stopLoader();
                    //}
                    console.log("activating 1");
                }

            }

        },
        error: function (e) {
            sessionTimeout(e);
        }


    });
}
var propertyrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
    var property = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "WORD");
    var mand_ind = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "MANDATORY_IND");
    var highlevelid = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "HIGH_LVL_IND");
    var definition = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "O_DEF");
    console.log("highlevelid:::" + highlevelid);
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (highlevelid == "") {

    } else if (highlevelid == 'Y')
    {
//                    highlevelid = "<img onclick=propertyHierarchy(" + row + ")"
//                            + " src='images/iDXPUI5SearchDropdown.png' class='prop_imgClass'>";
        highlevelid = "<span id='span" + row + "' class='ui-icon ui-icon-plus' style='display:inline-block;cursor:pointer;' onclick=propertyHierarchy(" + row + ")></span>";
    } else
        highlevelid = "";
    if (mand_ind == 'Y') {                                                                  /*  padding-bottom:4%; */
        return  "<div title='" + definition + "' style='display:inline-block;color:red;height:auto;line-height:25px;padding-left:1%'> " + property + "</div>" + highlevelid;
    } else {                                                                    /*  padding-bottom:4%; */
        return highlevelid + "<div title='" + definition + "' style='display:inline-block;height:auto;line-height:25px;padding-left:1%'> " + property + "</div>" + highlevelid;
    }

};
var valuepropertyrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {

    // console.log('éntered valueproperty renderer');
    // console.log('çalling value renderer');
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var property = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "WORD");
    var mand_ind = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "MANDATORY_IND");
    var highlevelid = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "HIGH_LVL_IND");
    var definition = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "O_DEF");


    var value = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, 'VALUE');

    var valuetype = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, 'DATATYPE_REF');
    var propertyid = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "CONCEPTID");
    var tbid = "";
    var tbid = "value" + row;
    var tbmin = "valuemin" + row;
    var tbmax = "valuemax" + row;
    var splitArray = "";
    property = property.replace(/\s/g, "_");
    if (valuetype == 'MEASURE_RANGE22') {
        // delay(function () {
        if ($("#" + tbmin).val() != undefined && $("#" + tbmax).val() != undefined) {

            // console.log('$("#valuemin" + row).val():' + $("#valuemin" + row).val()
            //         + '$("#valuemax" + row).val():' + $("#valuemax" + row).val());
            value = $("#valuemin" + row).val() + "~" + $("#valuemax" + row).val();
            splitArray = value.split("~");
            console.log("value," + value);
            // console.log("split length::" + splitArray.length);
            if (splitArray.length == 1)
            {
                return "<div  class='propertypopup' data-recid='' data-prop=''>"
                        + " <input onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min','propertiesgrid')"
                        + " id='valuemin" + row + "' placeholder='' value='" + splitArray[0] + "' type='text' class='dddwGridTbMx'/>"
                        + " <img onclick=propertyValues('" + property + "','" + row + "','propertiesgrid','min')  src='images/iDXPUI5SearchDropdown.png' class='prop_imgClass'>"
                        + " To <input onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max','propertiesgrid')"
                        + " id='valuemax" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/>"
                        + " <img onclick=propertyValues('" + property + "','" + row + "','propertiesgrid','max')  src='images/iDXPUI5SearchDropdown.png' class='prop_imgClass'></div>"
                        + " </div>";
            } else if (splitArray.length > 1)
            {
                return "<div  class='propertypopup' data-recid='' data-prop=''>"
                        + " <input onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min','propertiesgrid')"
                        + " id='valuemin" + row + "' placeholder='' value='" + splitArray[0] + "' type='text' class='dddwGridTbMx'/>"
                        + " <img onclick=propertyValues('" + property + "','" + row + "','propertiesgrid','min')  src='images/iDXPUI5SearchDropdown.png' class='prop_imgClass'>"
                        + " To <input onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max','propertiesgrid')"
                        + " id='valuemax" + row + "' placeholder='' value='" + splitArray[1] + "' type='text' class='dddwGridTbMx'/>"
                        + " <img onclick=propertyValues('" + property + "','" + row + "','propertiesgrid','max')  src='images/iDXPUI5SearchDropdown.png' class='prop_imgClass'></div>"
                        + " </div>";
            } else {
                return "<div  class='propertypopup' data-recid='' data-prop=''>"
                        + " <input onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min','propertiesgrid')"
                        + " id='valuemin" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/>"
                        + " <img onclick=propertyValues('" + property + "','" + row + "','propertiesgrid','min')  src='images/iDXPUI5SearchDropdown.png' class='prop_imgClass'>"
                        + " To <input onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max','propertiesgrid')"
                        + " id='valuemax" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/>"
                        + " <img onclick=propertyValues('" + property + "','" + row + "','propertiesgrid','min')  src='images/iDXPUI5SearchDropdown.png' class='prop_imgClass'></div>"
                        + " </div>";
            }

        } else {
            return "<div  class='propertypopup' data-recid='' data-prop=''>"
                    + " <input onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min','propertiesgrid')"
                    + " id='valuemin" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/>"
                    + " <img onclick=propertyValues('" + property + "','" + row + "','propertiesgrid','min')  src='images/iDXPUI5SearchDropdown.png' class='prop_imgClass'>"
                    + " To <input onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max','propertiesgrid')"
                    + " id='valuemax" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/>"
                    + " <img onclick=propertyValues('" + property + "','" + row + "','propertiesgrid','max')  src='images/iDXPUI5SearchDropdown.png' class='prop_imgClass'></div>"
                    + " </div>";
        }
        // }, 100);
    } else {

        if (value == undefined)
        {
            return "<div  class='visionGridDataAlignInput' data-recid='' data-prop=''><div class='visionGridDataAlignInputField'>"
                    + "<input onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none','MM_PROPERTIES')"
                    + " id='value" + row + "' placeholder='' value='' type='text' class='dddwGridTb'/></div>"
                    + "<div class='visionGridDataAlignInputImage'><img onclick=propertyValues('" + property + "','" + row + "','MM_PROPERTIES','" + valuetype + "','" + columnproperties.datafield + "')  src='images/iDXPUI5SearchDropdown.png'></div>"
                    + "</div>";
        } else {
            return "<div  class='visionGridDataAlignInput' data-recid='' data-prop=''><div class='visionGridDataAlignInputField'>"
                    + "<input onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none','MM_PROPERTIES')"
                    + " id='value" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTb'/></div>"
                    + "<div class='visionGridDataAlignInputImage'><img onclick=propertyValues('" + property + "','" + row + "','MM_PROPERTIES','" + valuetype + "','" + columnproperties.datafield + "')  src='images/iDXPUI5SearchDropdown.png'></div>"
                    + "</div>";
        }


    }

};
var uomrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var propertyid = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "CONCEPTID");

    //rowid,gridrowid,gridname,datafield,value
    var re = new RegExp('#', 'g');
    propertyid = propertyid.replace(re, '_');
    var uom = $('#MM_PROPERTIES').jqxGrid('getcellvalue', row, "UOM");
    if (uom == "")
        re = new RegExp(' ', 'g');
    var uom_value;
    if (uom === null || uom === 'null')
    {
        uom_value = "";
    } else {
        uom_value = uom;
    }
    console.log('uom_value::' + uom_value);
    var basketType = $('#baskettypehid1').val();
    if (basketType == 'Search View')
    {
        return "<div class='propertypopupdddw' data-recid='" + row + "' data-prop='" + propertyid + "'>" + uom_value + "</div>";
    } else {

        return "<div class='propertypopupdddw' data-recid='" + row + "' data-prop='" + propertyid + "'>" + uom_value + "</div><img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' onclick=mmUomBycharacterstic('" + propertyid + "','" + row + "','MM_PROPERTIES')>";
    }


};
var datatyperenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    value = value.replace('_TYPE', '');
    value = value.replace(/[_]/, " ");
    return "<div class='visionGridDataAlign'>" + value + "</div>";
};
function startAjax() {
//    if ($('.se-pre-con').is(':visible'))
//    {
    console.log("in start ajax register");
//    setTimeout(function () {
    $("#wait").css("opacity", "0.99");
    $("#wait").css("display", "block");
    $("body").css("pointer-events", "none");
//    }, 500);
//    }
}
function endAjax() {
    console.log("in end ajax register");

    //$("#wait").css("display", "block");
//    delay(function () {
    $("#wait").css("display", "none");
    $("body").css("pointer-events", "auto");
//    }, 300);
}
var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
function mmGenerateDescription(tabId, gridId) {
// ////////alert(gridId);
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    //$("#ui-id-4").addClass("displayAccordian");
    //  $("#ui-id-4").removeClass("disable");

    var recordNo = "";
    var descriptor = "";
    var conceptid = "";

    recordNo = $("#RECORD_NO").val();
    descriptor = $("#CLASS_TERM").val();
    conceptid = $("#CONCEPT_ID").val();
    gridId = 'MM_PROPERTIES';

// ////////alert('recordNo:' + recordNo + ", conceptid::" + conceptid);
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "generateRecordDescription",
        cache: false,
        async: false,
        data:
                {
//type: selectedValue,
                    items: JSON.stringify({
                        recordNo_Text: recordNo,
                        descriptor: descriptor,
                        conceptId: conceptid,
                        STATUS: $("#STATUS").val(),
                        REQ_NUMBER: $("#REQ_NUMBER").val()
                    })


                },
        success: function (response) {

            console.log(JSON.stringify(response));
            mmFetchDescriptionsTabData(gridId);
            $(".accordian").accordion({
                active: 5
            });

            if (tabId === "MM_PROPERTIES")
            {
                var requiredFieldCount = 0;
                var filledRequiredFieldCount = 0;
                var griddata; // = $('#propertiesgrid').jqxGrid('getdatainformation');           
                griddata = $('#MM_PROPERTIES').jqxGrid('getdatainformation');

                var rows = [];
                for (var i = 0; i < griddata.rowscount; i++)
                {
                    rows.push($('#MM_PROPERTIES').jqxGrid('getrenderedrowdata', i));
                    if (rows[i].reqflag === "Y" || rows[i].reqflag === "y")
                    {
                        requiredFieldCount++;
                        if (rows[i].value != "" && rows[i].value != null)
                        {
                            filledRequiredFieldCount++;
                        }

                    }
                }

                var filledAvg = 0;
                if (requiredFieldCount > 0 && filledRequiredFieldCount > 0)
                {
                    filledAvg = (filledRequiredFieldCount / requiredFieldCount) * 100;
                    console.log("average is ::: " + filledAvg);
                    if (filledAvg == 100) {

                        mmDuplicate_Check("MM_PROPERTIES", "Updated Sucessfully!", 'MM_PROPERTIES');
                    }

                }

            }
            if (tabId === "DOCUMENT_TAB")
            {
                downloadMsg();
                // trialDuplicate_Check("DOCUMENT_TAB","");
                $("#textExport").show();
            } else if (tabId === "REFERENCE_TAB")
            {
                documentMsg();
                // trialDuplicate_Check("REFERENCE_TAB","");

            } else {

                console.log("in trialGenerateDescription ELSE CONDITION ");
            }
        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }
    });
    //Duplicate_Check();

}
function mmDuplicate_Check(tabId, message, gridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    showLoader();
    var req = {};
    req.url = 'trialDuplicateCheckData';
    req.method = 'POST';
    req.async = true;
    req.data = {};
    if (gridId == 'caasproperties')
    {
        req.data.recordNo_Text = $("#autoStructureClass").attr('date-recordno');
    } else {
        req.data.recordNo_Text = $("#recordNo_Text").val();
    }

    req.success = function (response) {


        var array = JSON.parse(response);
        if (array.length > 0)

        {
            Duplicate_Check_Table(array);
        } else {

            if (tabId === "CHARATERISTICS_TAB")
            {
                message = "Do You have any <div id='refdataToolTip'> Reference data?</div>";
                //referenceMsg(message);
            } else if (tabId === "REFERENCE_TAB")


            {
                docDilogCheck = true;
                documentMsg();
            } else if (tabId === "DOCUMENT_TAB")

            {


                downloadMsg();
            } else {

                console.log("in trialDuplicate_Check ELSE CONDITION ");
            }



            console.log("NO duplicates found");
        }

        stopLoader();
    };
    req.error = function (e) {
        var meg = e.statusText;
        var status = e.status;
        sessionTimeout(status);

    };
    $.ajax(req);
}
function mmFetchDescriptionsTabData() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var jsondata = {};
    var businessUnit = $("#plant_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var baskettype = $('#baskettypehid').val();
    var recordNo_Text = $("#RECORD_NO").val();
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
            // console.log(JSON.stringify(result));
            var source =
                    {
                        datatype: "json",
                        localdata: data,
                        datafields:
                                [
                                    {name: 'TYPE', type: 'string', width: "20%"},
                                    {name: 'TEXT', type: 'string', width: "60%"},
                                    {name: 'LOCALE', type: 'string', width: "15%"}

                                ]

                    };




            var dataAdapter = new $.jqx.dataAdapter(source);
            // initialize jqxGrid
            $("#MM_DESCRIPTIONS_GRID").jqxGrid(
                    {
                        width: "100%",
                        autoheight: true,
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
                            {text: 'Text', editable: false, datafield: 'TEXT', width: "70%",
                                cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {//overflow-y:scroll;height:100%;
                                    //return "";

                                    return "<textarea readonly style='background-color:inherit;border:none;width:100%;height:100%; font:11px Arial;line-height:17px;'>" + value + "</textarea>";
                                }
                            },
                            {text: 'Language', editable: true, datafield: 'LOCALE', width: "15%"}

                        ]
                    });
        },
        error: function (e) {
            //  console.log(e.message)
            sessionTimeout(e);
        }
    });
}
function populateDynamicddw(dddwid, cssid, rowid)
{

    visionDropdown(dddwid, "", "SEARCH-VIEW", "", "", "", cssid, rowid);
}
function propertyHierarchy(rownum, gridid, nestedProperty, valuefield) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    nestedProperty = nestedProperty.replace(/_/g, " ");

    alert("Nested Property:::" + nestedProperty);

    //dialog
    $.ajax({
        type: "POST",
        url: 'getNestedDr',
        //  url: 'http://192.169.1.119:8080/PIOntology/DictionaryServlet',
        data: {
            //reqType: 'welspunTemplate',
            classterm: nestedProperty
        },
        traditional: true, cache: false,
        success: function (response) {
            //  var jsresponse = JSON.parse(response);
            var jsresponse = response;
            var hierarchytable = "<table class='hierarchytbl'>";
            var jsddwids = [];
            var jsddwobj = null;
            for (var i = 0; i < jsresponse.length; i++)
            {
                hierarchytable = hierarchytable + "<tr><td>" + jsresponse[i].WORD + "</td><td>"
                        + "<input id='property" + i + "' type='text'/>"
                        + "<img style=\"cursor:pointer;\" "
                        //+"onclick=\"visionDropdown('DDW_MM_MATL_TYPE','null','FORM-VIEW','','RECORD_TYPE','')\" data-viewid=\"MM_SAP_NEW_REG\"  
                        + " style=\"width:12px;height:12px;\" "
                        + " onclick=\"populateDynamicddw('DDW_MM_PROPERTY_VALUE', " + "'property" + i + "', " + i + ")\""
                        + " class=\"ddRECORD_TYPE\" src=\"images/icon.png\">"
                        + "</td></tr>";
                jsddwobj = new Object();
                jsddwobj.tbid = "property" + i;
                jsddwids.push(jsddwobj);

            }
            console.log("JSDDWIDS::" + JSON.stringify(jsddwids));

            hierarchytable = hierarchytable + "</table>";
            $("#dialog").empty();
            $("#dialog").html(hierarchytable);

            $("#dialog").dialog({resizable: false,
                title: (labelObject[nestedProperty] != null ? labelObject[nestedProperty] : nestedProperty),
                modal: true,
                height: 'auto',
                width: "350",
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            var finalString = "";
                            for (var i = 0; i < jsddwids.length; i++)
                            {
                                if ($.trim($("#" + jsddwids[i].tbid).val()) != "") {
                                    //if (finalString != "") {

                                    if (finalString.length > 0) {
                                        finalString = finalString + " x " + $("#" + jsddwids[i].tbid).val();
                                    } else {
                                        finalString = finalString + $("#" + jsddwids[i].tbid).val();
                                    }
                                }
                            }


                            console.log("final String:::" + finalString);

                            $("#" + gridid + "" + rownum).val(finalString);
                            if (valuefield != undefined) {
                                $('#' + gridid).jqxGrid('setcellvalue', rownum, valuefield, finalString);
                            }
                            $("#dialog").empty();
                            $("#dialog").dialog('close');

                        }
                    }],
                open: function () {
                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
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
        , error: function (e) {

            stopLoader();//25
            sessionTimeout(e);
        }
    });

}
function updateProperties(id) {
//--developed by azmat
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var recordNo = "";

    recordNo = $("#RECORD_NO").val();

    showLoader();
    var rows = $('#' + id).jqxGrid('getboundrows');


    for (var i = 0; i < rows.length; i++)
    {
        if (rows[i].datatype == '22MEASURE_RANGE') {

            rows[i].VALUE = $("#valuemin" + rows[i].uid).val() + "~" + $("#valuemax" + rows[i].UID).val();
            console.log("If: value:::" + rows[i].value);
        } else {

            rows[i].VALUE = $("#value" + rows[i].uid).val();
        }


    }

    var conceptid;

    conceptid = $("#CONCEPT_ID").val();
    var re = new RegExp('#', 'g');
    conceptid = conceptid.replace(re, '_');
    console.log('propertiesdata::' + JSON.stringify(rows));
    //////////////alert("conceptid ::: "+conceptid);
    //////////////alert("recordNo ::: "+recordNo);
    //////////////alert("rows ::: "+JSON.stringify(rows));

    $.ajax({
        type: "POST",
        url: 'updateChar',
        data: {
            'propertiesdata': JSON.stringify(rows),
            'conceptid': conceptid,
            'recordNo': recordNo,
            'STATUS': $("#STATUS").val(),
            'REQ_NUMBER': $("#REQ_NUMBER").val()
        },
        //headers: {"Access-Control-Allow-Origin": true},
        traditional: true, cache: false,
        success: function (response) {
            ////alert("update response is ::: "+response);
            var propTabUpdate = JSON.parse(response);
            console.log('Response::' + response);
            if (propTabUpdate.MESSAGE == 'success') {
                if (!propertiesclicked) {
                    ++registrationCount;
                    propertiesclicked = true;
                }
                mmGenerateDescription("MM_PROPERTIES", 'MM_PROPERTIES');
            } else {
                var results = "Failed to Update";
                results = (labelObject[results] != null ? labelObject[results] : results);
                var dialogSplitMessage = dialogSplitIconText(results, "Y");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    width: "350",
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function ()
                            {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                            }
                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
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
            stopLoader();
        },
        error: function (e) {
            //  (e.message)
            sessionTimeout(e);
        }
    });
}
function propertyValues(property, rowid, gridid, valtype, datafieldname) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    property = property.replace(/_/g, " ");
    console.log('Property:' + property);
    var descriptor = $("#CLASS_TERM").val();


    descriptor = $("#CLASS_TERM").val();


    console.log("descriptor  ::: " + descriptor + "  ::: property  ::: " + property + " ::: rowid   ::: " + rowid);


    $.ajax({
        //url: 'https://caas.pilog.in/WSRep/Content/CharacteristicValues',
        url: 'https://caasbeta.pilog.in/WSRep/PartNumberServlet',
        data: {
            'reqType': 'CharacteristicValues',
            'TERM': descriptor,
            'PROPERTY': property,
            'ORGN_ID': '2F57487BE2F6474BE053270110ACD546'
        },
        //  crossDomain: true,
        type: 'post',
        dataType: "json",
        //    contentType: "text/xml; charset=\"utf-8\"",
        success: function (result) {

            if (valtype == 'MEASURE_RANGE')
            {

                ////////////alert("before empty message");
                $("#dddw").empty();
                $("#dddw").append("<div> <input type='text' id='dddwminText'/><input type='text' id='dddwmaxText'/>"
                        + " <input type='button' value='submit'"
                        + " onclick=addDataToGrid(" + rowid + ",\'" + gridid + "\',\'" + datafieldname + "\')></div>");
                $("#dddw").append("<div style='display:inline-block' id='jqxWidget'></div>");
                $("#dddw").append("<div style='display:inline-block' id='jqxWidget1'></div>");
                $("#dddw").show();
                var source =
                        {
                            datatype: "json",
                            datafields: [
                                {name: 'WORD'}
                            ],
                            // root: "return",
                            // record: "list",
                            localdata: result
                        };
                var dataAdapter = new $.jqx.dataAdapter(source, {async: false});
                // Create a jqxDropDownList

                $("#jqxWidget").jqxGrid(
                        {
                            width: '45%',
                            theme: 'energyblue',
                            source: dataAdapter,
                            filterable: true,
                            enabletooltips: true,
                            showfilterrow: true,
                            height: '360',
                            // showtoolbar:true,
                            //   autoheight: true,
                            // autorowheight: true,
                            columnsresize: true,
                            sortable: true,
                            columns: [
                                {text: (labelObject['Property Value'] != null ? labelObject['Property Value'] : 'Property Value'), align: 'center', datafield: 'WORD', width: "100%", cellsalign: 'left'}
                            ]

                        });
                $("#jqxWidget1").jqxGrid(
                        {
                            width: '45%',
                            theme: 'energyblue',
                            source: dataAdapter,
                            filterable: true,
                            enabletooltips: true,
                            showfilterrow: true,
                            height: '360',
                            //    showtoolbar:true,
                            //   autoheight: true,
                            //                                        autorowheight: true,
                            columnsresize: true,
                            sortable: true,
                            columns: [
                                {text: (labelObject['Property Value'] != null ? labelObject['Property Value'] : 'Property Value'), align: 'center', datafield: 'WORD', width: "100%", cellsalign: 'left'}
                            ]

                        });

                $("#dddw").css("overflow", "hidden");
                $("#dddw").dialog({resizable: false,
                    title: (labelObject['Values'] != null ? labelObject['Values'] : 'Values'),
                    height: 361,
                    width: 400,
                    modal: true,
                    fluid: true,
                    open: function ()
                    {
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }

                });
                $('#ddClear').on('click', function () {
                    $('#jqxWidget').jqxGrid('clearfilters');
                });

                $('#jqxWidget').on('rowclick', function (event)
                {

                    var args = event.args;
                    var boundIndex = args.rowindex;
                    var col1Value = $('#jqxWidget').jqxGrid('getcellvalue', boundIndex, "WORD");
                    console.log("col1Value::" + col1Value);
                    $("#dddwminText").val(col1Value);

                    // if (gridid == 'caasproperties') {



                    // $("#dddw").dialog('close');
                });
                $('#jqxWidget1').on('rowclick', function (event)
                {

                    var args = event.args;
                    var boundIndex = args.rowindex;
                    var col1Value = $('#jqxWidget1').jqxGrid('getcellvalue', boundIndex, "WORD");
                    console.log("col1Value::" + col1Value);
                    $("#dddwmaxText").val(col1Value);

                    // if (gridid == 'caasproperties') {



                    // $("#dddw").dialog('close');
                });
            } else {

                $("#dddw").empty();
                $("#dddw").append("<div id='jqxWidget3'></div>");
                $("#dddw").show();
                var source =
                        {
                            datatype: "json",
                            datafields: [
                                {name: 'WORD'}
                            ],
                            // root: "return",
                            // record: "list",
                            localdata: result
                        };
                var dataAdapter = new $.jqx.dataAdapter(source, {async: false});
                // Create a jqxDropDownList

                $("#jqxWidget3").jqxGrid(
                        {
                            width: '100%',
                            theme: 'energyblue',
                            source: dataAdapter,
                            filterable: true,
                            enabletooltips: true,
                            showfilterrow: true,
                            height: '360',
                            //    showtoolbar:true,
                            //   autoheight: true,
                            //                                        autorowheight: true,
                            columnsresize: true,
                            sortable: true,
                            columns: [
                                {text: (labelObject['Property Value'] != null ? labelObject['Property Value'] : 'Property Value'), align: 'center', datafield: 'WORD', width: "100%", cellsalign: 'left'}
                            ]

                        });

                $("#dddw").css("overflow", "hidden");
                $("#dddw").dialog({resizable: false,
                    title: (labelObject['Values'] != null ? labelObject['Values'] : 'Values'),
                    modal: true,
                    height: 361,
                    width: 400,
                    fluid: true,
                    open: function ()
                    {
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }

                });
                $('#ddClear').on('click', function () {
                    $('#jqxWidget').jqxGrid('clearfilters');
                });
                $('#jqxWidget3').on('rowclick', function (event)
                {

                    console.log('valtype::' + valtype + "valtype")
                    var args = event.args;
                    var boundIndex = args.rowindex;
                    var col1Value = $('#jqxWidget3').jqxGrid('getcellvalue', boundIndex, "WORD");
                    console.log("col1value::" + col1Value)
                    if (gridid == 'caasproperties') {
                        if (valtype == 'min') {

                            $('#' + gridid).jqxGrid('setcellvalue', rowid, "VALUE", col1Value + "~" + $("#valuemax" + rowid).val());
                            $("#valuemin" + rowid).val(col1Value);
                            console.log("setting $('#valuemin'+rowid).val()" + $("#valuemin" + rowid).val());
                        } else if (valtype == 'max') {
                            $('#' + gridid).jqxGrid('setcellvalue', rowid, "VALUE", $("#valuemin" + rowid).val() + "~" + col1Value);
                            $("#valuemax" + rowid).val(col1Value);
                        } else {
                            $('#' + gridid).jqxGrid('setcellvalue', rowid, "VALUE", col1Value);
                            $("#value" + rowid).val(col1Value);
                        }
                    } else {
                        if (valtype == 'min') {

                            $('#' + gridid).jqxGrid('setcellvalue', rowid, "VALUE", col1Value + "~" + $("#valuemax" + rowid).val());
                            $("#valuemin" + rowid).val(col1Value);
                            console.log("setting $('#valuemin'+rowid).val()" + $("#valuemin" + rowid).val());
                        } else if (valtype == 'max') {
                            $('#' + gridid).jqxGrid('setcellvalue', rowid, "VALUE", $("#valuemin" + rowid).val() + "~" + col1Value);
                            $("#valuemax" + rowid).val(col1Value);
                        } else {

                            $('#' + gridid).jqxGrid('setcellvalue', rowid, "VALUE", col1Value);
                            $("#value" + rowid).val(col1Value);
                        }

                    }


                    $("#dddw").dialog('close');
                });
            }
        },
        error: function (e)
        {
            sessionTimeout(e);
        }
    });
}
function mmUomBycharacterstic(propertyid, rowid, gridid) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var property = $('#' + gridid).jqxGrid('getcellvalue', rowid, "WORD");
    // alert("Propert:" + property);
    $.ajax({
        type: "POST",
        url: 'https://caasdev.pilog.in/WSRep/PartNumberServlet',
        // url: 'https://caasbeta.pilog.in/WSRep/PartNumberServlet',
        //url: 'h/WSRep/PartNumberServlet?reqType=PropertyUOM&property=LENGTH',
        data: {
            //'rowid': 155,
            'reqType': 'PropertyUOM',
            'property': property
        },
        traditional: true, cache: false,
        success: function (response) {
            console.log('Success: ' + JSON.stringify(response));
            $("#dddw").empty();
            $("#dddw").append("<input style='float:right' class='clear_filter' type='button' value='Clear' id='ddClear'/></div><div id='ddGrid'></div>");
            var source =
                    {
                        localdata: JSON.parse(response),
                        datafields:
                                [
                                    {name: 'term', type: 'string'},
                                    {name: 'abbr', type: 'string'},
                                    {name: 'uomid', type: 'string'}

                                ],
                        datatype: "JSON"
                    };
            var adapter = new $.jqx.dataAdapter(source);
            $("#ddGrid").jqxGrid(
                    {
                        width: '100%',
                        theme: 'energyblue',
                        source: adapter,
                        filterable: true,
                        enabletooltips: true,
                        showfilterrow: true,
                        height: '360',
                        //   showtoolbar:true,
                        //   autoheight: true,
                        //   autorowheight: true,
                        columnsresize: true,
                        sortable: true,
                        columns: [
                            {text: 'UoM', align: 'center', datafield: 'abbr', width: "120", cellsalign: 'left'},
                            {text: 'Description', align: 'center', datafield: 'term', width: "275", cellsalign: 'left'},
                            {text: 'uomid', hidden: true, align: 'center', datafield: 'uomid', width: "255", cellsalign: 'left'},
                            {text: 'uomabv', hidden: true, align: 'center', datafield: 'uomabv', width: "255", cellsalign: 'left'}
                        ]
                    });
            $('#ddClear').on('click', function () {
                $('#ddGrid').jqxGrid('clearfilters');
            });
            $('#ddGrid').on('rowclick', function (event)
            {
                var args = event.args;
                var boundIndex = args.rowindex;
                var col1Value = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "abbr");
                var col2Value = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "term");
                var col3Value = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "uomid");
                //  ////////alert('col1Value:' + col1Value +'col2Value:' + col2Value + ", col3Value:" + col3Value);

                $('#' + gridid).jqxGrid('setcellvalue', rowid, "UOM", col2Value);
                $('#' + gridid).jqxGrid('setcellvalue', rowid, "UOMID", col3Value);
                // $('#' + gridid).jqxGrid('setcellvalue', rowid, "uomabbv", col1Value);
                $("#dddw").dialog('close');


            });
            $("#dddw").css("overflow", "hidden");
            $("#dddw").dialog({resizable: false,
                title: (labelObject['UoM'] != null ? labelObject['UoM'] : 'UoM'),
                modal: true,
                height: 450,
                width: 400,
                fluid: true,
                open: function ()
                {
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });
            //console.log('Response::' + JSON.stringify(response));
        },
        error: function (e) {
            //  console.log(e.message)
            sessionTimeout(e);
        }

    });
}
function propValKeyUp(tbid, rowid, type, gridid) {

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    delay(function () {

        if ($("#" + tbid).val() != "") {
            var datatype = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'DATATYPE_REF');
            datatype = datatype.replace("_TYPE", "");

            var val = $("#" + tbid).val();
            var message = "";
            var regex;
            regex = /[a-zA-Z]/;
            if (datatype == 'STRING')
            {
                regex = /[a-zA-Z]/;
                message = "Only Alphabets are allowed";

            } else if (datatype == 'MEASURE_NUMBER')
            {
                regex = /^[0-9]*$/;
                message = "Only Numeric Values are allowed";

            } else if (datatype == 'INTEGER')
            {
                regex = /^[-|+]{0,1}[0-9]+$/;
                message = "Only Integer values are allowed";

            } else if (datatype == 'MEASURE_RANGE') {
                //regex = /^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,3}$/;
                //         regex=/^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,}[\s]{0,}(to|To|tO|TO){0,}[\s]{0,}[0-9]{0,}[.]{0,}[0-9]{0,}[\s]{0,}/
                regex = /^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,}[\s]{0,}(to|To|tO|TO){0,}[\s]{0,}[0-9]{0,}[.]{0,}[0-9]{0,}[\s]{0,}$/
                message = "Only Integer values  are allowed( Use 'To' for min max value seperation)";

            }

            if (!val.match(regex) && datatype != 'STRING')
            {


                $("#" + gridid).jqxGrid('setcellvalue', rowid, 'VALUE', "");


            } else {
                var datatype = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'DATATYPE_REF');
                $("#" + gridid).jqxGrid('setcellvalue', rowid, 'VALUE', $("#" + tbid).val());
                var focus_val = $("#" + tbid).val();
                $("#" + tbid).val('');
                $("#" + tbid).focus();
                $("#" + tbid).val(focus_val);
                $("#" + tbid).focus();
            }
            if (!val.match(regex) && message != "" && message != null) {

                var dialogSplitMessage = dialogSplitIconText(message, "false");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
                    textAlign: 'center',
                    minWidth: 300,
                    maxWidth: 'auto',
                    height: 'auto',
                    minHeight: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                //$(this).html("");
                                $(this).dialog("close");
                                $("#" + tbid).val('');
                                $("#" + tbid).focus();
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
        } else {
            $('#' + gridid).jqxGrid('setcellvalue', rowid, "VALUE", "");
            $("#value" + rowid).val("");

        }

    }, 500);
}
function propValKeyUp(tbid, rowid, type, gridid, column, event) {
    //alert("entered propvalkeyup");
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("$(#" + tbid + ")::" + $("#" + tbid).val());
    console.log("event.keycode::" + event.keyCode + ", String.fromCharCode(e.keyCode)" + String.fromCharCode(event.keyCode));

    // var tbid = gridid + rowid;
    delay(function () {
        console.log("Row Details:::" + JSON.stringify($("#" + gridid).jqxGrid('getrowdata', rowid)));
        var datatype = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'DATA_TYPE');
        console.log("$(#)" + tbid + "::" + $("#" + tbid).val());

        var val = "";
        // val = String.fromCharCode(event.keyCode);

        val = $("#" + tbid).val();
        console.log("val::" + val);

        val = val.replace(/[^A-Za-z0-9.-_#\s]/, "");
        //alert("value::"+val+", datatype:::" + datatype+", TYPE::"+type+", gridid::"+gridid+", tbid::"+tbid);
        datatype = type;
        //alert("$(# + tbid).val():::TBID:" + tbid + ", value::" + $("#" + tbid).val());
        if (val != "") {

            datatype = datatype.replace("_TYPE", "");
            //  var val = $("#" + tbid).val();
            console.log("Property Value::" + val);
            var message = "";
            var regex;
            regex = /[a-zA-Z]/;
            if (datatype == 'STRING')
            {
                regex = /[a-zA-Z]/;
                message = "Only Alphabets are allowed";

            } else if (datatype == 'MEASURE_NUMBER')
            {
                regex = /^[0-9]*$/;
                message = "Only Numeric Values are allowed";

            } else if (datatype == 'INTEGER')
            {
                regex = /^[-|+]{0,1}[0-9]+$/;
                message = "Only Integer values are allowed";
                console.log("Entered INTEGER datatype condition::" + val.match(regex))

            } else if (datatype == 'MEASURE_RANGE') {
                //regex = /^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,3}$/;
                //         regex=/^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,}[\s]{0,}(to|To|tO|TO){0,}[\s]{0,}[0-9]{0,}[.]{0,}[0-9]{0,}[\s]{0,}/
                regex = /^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,}[\s]{0,}(to|To|tO|TO){0,}[\s]{0,}[0-9]{0,}[.]{0,}[0-9]{0,}[\s]{0,}$/
                message = "Only Integer values  are allowed( Use 'To' for min max value seperation)";

            }

            if (!val.match(regex) && datatype != 'STRING')
            {

                // val = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'PROPERTY_VALUE1') + "" + val;                 $("#" + gridid).jqxGrid('setcellvalue', rowid, column, val);
                console.log("If vale:::" + val);
                $("#" + tbid).setCursorPosition(val.length);
            } else {
                //val = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'PROPERTY_VALUE1') + "" + val;
                // val = "" ;
                var datatype = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'DATA_TYPE');
                console.log("Else  vale:::" + val);
                $("#" + gridid).jqxGrid('setcellvalue', rowid, column, val);
                var focus_val = val;
                $("#" + tbid).val('');
                $("#" + tbid).focus();
                $("#" + tbid).val(focus_val);
                $("#" + tbid).focus();
                $("#" + tbid).setCursorPosition(focus_val.length);
            }

            if (!val.match(regex) && message != "" && message != null) {
                message = (labelObject[message] != null ? labelObject[message] : message);
                var dialogSplitMessage = dialogSplitIconText(message, "false");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
                    textAlign: 'center',
                    minWidth: 300,
                    maxWidth: 'auto',
                    height: 'auto',
                    minHeight: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                //$(this).html("");
                                $(this).dialog("close");
                                $("#" + tbid).val('');
                                $("#" + tbid).focus();
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
        } else {
            // val = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'PROPERTY_VALUE1');
            $('#' + gridid).jqxGrid('setcellvalue', rowid, column, '');
            $("#" + gridid + rowid).val('');

            $("#" + tbid).setCursorPosition(0);
            //$('#' + gridid).jqxGrid('setcellvalue', rowid, "UOM", "");
            // $("#value" + rowid).val("");
        }

//}
        // $("#" + tbid).focus();
    }, 500);
}
function propValKeyUp1(tbid, rowid, type, gridid, column, event) {
    //alert("entered propvalkeyup");
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    console.log("$(#" + tbid + ")::" + $("#" + tbid).val());
    console.log("event.keycode::" + event.keyCode + ", String.fromCharCode(e.keyCode)" + String.fromCharCode(event.keyCode));

    // var tbid = gridid + rowid;
    delay(function () {
        console.log("Row Details:::" + JSON.stringify($("#" + gridid).jqxGrid('getrowdata', rowid)));
        var datatype = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'DATA_TYPE');
        console.log("$(#)" + tbid + "::" + $("#" + tbid).val());

        var val = "";
        // val = String.fromCharCode(event.keyCode);

        val = $("#" + tbid).val();
        console.log("val::" + val);

        datatype = type;
        //alert("$(# + tbid).val():::TBID:" + tbid + ", value::" + $("#" + tbid).val());
        if (val != "") {
            $("#" + gridid).jqxGrid('selectrow', rowid);
            datatype = datatype.replace("_TYPE", "");
            //  var val = $("#" + tbid).val();
            console.log("Property Value::" + val);
            var message = "";
            var regex;
            regex = /[a-zA-Z]/;
            alert('datatype:' + datatype);
            if (datatype == 'STRING')
            {
                regex = /[a-zA-Z]/;
                message = "Only Alphabets are allowed";

            } else if (datatype == 'MEASURE_NUMBER')
            {
                regex = /^[0-9]*$/;
                message = "Only Numeric Values are allowed";

            } else if (datatype == 'INTEGER')
            {
                regex = /^[-|+]{0,1}[0-9]+$/;
                message = "Only Integer values are allowed";
                console.log("Entered INTEGER datatype condition::" + val.match(regex))

            } else if (datatype == 'MEASURE_RANGE') {
                //regex = /^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,3}$/;
                //         regex=/^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,}[\s]{0,}(to|To|tO|TO){0,}[\s]{0,}[0-9]{0,}[.]{0,}[0-9]{0,}[\s]{0,}/
                regex = /^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,}[\s]{0,}(to|To|tO|TO|-){0,}[\s]{0,}[0-9]{0,}[.]{0,}[0-9]{0,}[\s]{0,}$/
                message = "Only Integer values  are allowed( Use 'To' for min max value seperation)";

            }

            if (!val.match(regex) && datatype != 'STRING')
            {

                var datatype = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'DATA_TYPE');
                // alert("!val.match(regex) && datatype != 'STRING'" + val);
                $("#" + gridid).jqxGrid('setcellvalue', rowid, column, val);
                var focus_val = val;
                $("#" + tbid).val('');
                $("#" + tbid).focus();
                $("#" + tbid).val(focus_val);
                $("#" + tbid).focus();
                $("#" + tbid).setCursorPosition(focus_val.length);


            } else {
                //val = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'PROPERTY_VALUE1') + "" + val;
                // val = "" ;
                var datatype = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'DATA_TYPE');
                alert("Else" + val);
                $("#" + gridid).jqxGrid('setcellvalue', rowid, column, val);
                var focus_val = val;
                $("#" + tbid).val('');
                $("#" + tbid).focus();
                $("#" + tbid).val(focus_val);
                $("#" + tbid).focus();
                $("#" + tbid).setCursorPosition(focus_val.length);
            }

            if (!val.match(regex) && message != "" && message != null) {
                message = (labelObject[message] != null ? labelObject[message] : message);
                var dialogSplitMessage = dialogSplitIconText(message, "false");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
                    textAlign: 'center',
                    minWidth: 300,
                    maxWidth: 'auto',
                    height: 'auto',
                    minHeight: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                //$(this).html("");
                                $(this).dialog("close");
                                $("#" + tbid).val('');
                                $("#" + tbid).focus();
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
        } else {
            $("#" + gridid).jqxGrid('unselectrow', rowid);
            // val = $("#" + gridid).jqxGrid('getcellvalue', rowid, 'PROPERTY_VALUE1');
            $('#' + gridid).jqxGrid('setcellvalue', rowid, column, '');
            $("#" + gridid + rowid).val('');

            $("#" + tbid).setCursorPosition(0);
            //$('#' + gridid).jqxGrid('setcellvalue', rowid, "UOM", "");
            // $("#value" + rowid).val("");
        }

//}
        // $("#" + tbid).focus();
    }, 500);
}
function GenerateInstantDescription(saptab) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (saptab) {
        //        alert("hahasaptabkadu");
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
            if (type != null && type == 'checkbox') {//
                if ($("#" + textid).is(':checked')) {
                    textval = "Y";
                } else {
                    textval = "N";
                }
            }
//                  jsonOBJ.ids.push(textid.toLowerCase());
            if (textid != null && textid != 'CREATE_DATE' && textid != 'CREATE_BY') {
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
//                        panalData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                }

            }


        });

        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "generateRecordDescription",
            cache: false,
            data: {
                basicData: JSON.stringify(basicData)
            }
        });

    }

}
;
function listDependacyChange(ele) {
    var ele = ele.id;
    childDependacyChange(ele);
}
//function childDependacyChange(ele) {
function childDependacyChange(ele, colValue) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
//    var ele = ele.id;
    //  alert(ele);
    // alert(colValue);
    var hadChild = $("#" + ele).attr("data_chld_live");
    //    alert(hadChild);
    if (hadChild == "N")
        return true;
    var value = $("#" + ele).val();
    var defaultValue = "";

    var dataTypeValue = $("#" + ele).attr("data-type");
    if (dataTypeValue == "L")
        defaultValue = $("#" + ele).attr("data_defaultValue");

//    alert("dataTypeValue"+defaultValue);
    var chldAttrValue;
    //    chldAttrValue = (value == defaultValue || !dataTypeValue ) ? true : false;

    var chldDisable = spiltToArray($("#" + ele).attr("data_chld_dsble"));
    var chldEnble = spiltToArray($("#" + ele).attr("data_chld_enble"));
    var chldOpt = spiltToArray($("#" + ele).attr("data_chld_opt"));
    var chldMan = spiltToArray($("#" + ele).attr("data_chld_man"));
    var chldNullify = spiltToArray($("#" + ele).attr("data_chld_nulfy")); //    alert("came here " + chldDisable.length);
    if (chldDisable.length > 0) {
        chldAttrValue = (value == defaultValue || !defaultValue) ? true : false;
        validateChilds(chldDisable, "SET-EDIT-TYPE", chldAttrValue, "FORM-VIEW");
    }
    if (chldEnble.length > 0) {
        chldAttrValue = (value == defaultValue || !defaultValue) ? false : true;
        validateChilds(chldEnble, "SET-EDIT-TYPE", chldAttrValue, "FORM-VIEW");
    }
    if (chldMan.length > 0) {
        alert("chldMan:: " + chldMan.length);
        chldAttrValue = (value == defaultValue || !defaultValue) ? "M" : "O";
        //  validateChilds(chldMan, "SET-MANDT-MODE", chldAttrValue, "FORM-VIEW");
        validateChilds(chldMan, "SET-MANDT-MODE", chldAttrValue, "FORM-VIEW", ele, colValue);
    }
    if (chldOpt.length > 0) {
        alert("chldOpt:: " + chldOpt.length);
        chldAttrValue = (value == defaultValue || !defaultValue) ? "O" : "M";
        validateChilds(chldOpt, "SET-MANDT-MODE", chldAttrValue, "FORM-VIEW");
    }
    if (chldNullify.length > 0)
        validateChilds(chldNullify, "SET-VALUE-NULL", "", "FORM-VIEW");
}
function validateChilds(dataArray, operationType, value, viewType, ele, colValue) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }



    if (viewType = "FORM-VIEW") {

        var attrType = "";

        if (operationType == "SET-EDIT-TYPE") {
//            attrType = "disabled";
            attrType = "readonly";
        } else if (operationType == "SET-MANDT-MODE") {
            attrType = "data-mandatory";
        } else if (operationType == "SET-VALUE-NULL") {
            attrType = "value";
            value = "";
        }

        for (var i = 0; i < dataArray.length; i++) {

            var dataType = $("#" + dataArray[i]).attr("data-type");


            if (dataType == "T" || dataType == "TA" || dataType == "LP") {
                if (attrType == "value")
                    $("#" + dataArray[i]).val("");
                else
                    $("#" + dataArray[i]).attr(attrType, value);

            } else if (dataType == "MT") {
                var mtSplitCount = $("#" + dataArray[i]).attr("splitcount");
                if (mtSplitCount > 0) {
                    for (var j = 1; j <= mtSplitCount; j++) {
                        if (attrType == "value")
                            $("#" + dataArray[i] + j).val("");
                        else
                            $("#" + dataArray[i] + j).attr(attrType, value);
                    }
                } else {
                    if (attrType == "value")
                        $("#" + dataArray[i]).val("");
                    else
                        $("#" + dataArray[i]).attr(attrType, value);
                }
            } else if (dataType == "P") {
                console.log("dataArray[i]" + i + "  ::" + dataArray[i]);
                console.log("attrType ::" + attrType);
                console.log("value ::" + value);
                if (attrType == "data-mandatory") {
                    $("#" + dataArray[i]).attr(attrType, value);
                    $("#dd" + dataArray[i]).show();
                } else if (attrType == "value") {
                    $("#" + dataArray[i]).val("");
                    $("#dd" + dataArray[i]).show();
                } else {
                    if (attrType == "readonly" && value == false)
                        $("#dd" + dataArray[i]).show();
                    else
                        $("#dd" + dataArray[i]).hide();
                }
            } else if (dataType == "L") {
                if (attrType == "readonly") {
                    $("#" + dataArray[i]).attr('selectedIndex', 0);
//                    $("#" + dataArray[i]).attr(attrType, value);
                    $("#" + dataArray[i]).attr('disabled', value);
                }
                if (attrType == "value") {
                    $("#" + dataArray[i]).attr('selectedIndex', 0);
                }
            }
            if (attrType == "data-mandatory" && value == "O") {
                $(".lblMand" + dataArray[i]).hide();
            }

        }
    }
}
function spiltToArray(data) { //    alert("spiltToArray  " + data);     var dataArray = [];     if (data != null && data != "" && data != "null" && typeof data != "undefined")
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dataArray = [];
    if (data != null) {
        dataArray = data.split(",");
    }

//    else
    //        alert("in else");
    //    alert("dataArray :: " + dataArray);
    return dataArray;
}
function psCount(tabId) {
    var psTotalCount = 0;
    var psMTMandCount = 0;
    var psMTEnteredCount = 0;
    var psEnteredCount = 0;
    var lblString = "";
    var avoidString = "lblMand";
    var lblFieldId = "";
    var lblMultiFieldId = "";
    var dataType = "";
    var splitCount = 0; // for multi text's
    $("#" + tabId + "_TABLE tr th:even sup").each(function () {
        if ($(this).css("display") != "none") {
            psTotalCount++;
            lblString = $(this).attr("class");
            lblFieldId = lblString.replace(avoidString, '');
            dataType = $("#" + lblFieldId).attr("data-type");
//                        alert("lblFieldId::"+lblFieldId);
            //                        alert("dataType::"+dataType);
            if ($("#" + lblFieldId).val() && dataType != "MT") {
                psEnteredCount++;
            }
            if (dataType == "MT") {
                splitCount = $("#" + lblFieldId).attr("splitcount");
                for (var i = 1; i <= splitCount; i++) {
                    lblMultiFieldId = lblFieldId + i;
                    ($("#" + lblMultiFieldId).attr("data-mandatory") == "M") ? psMTMandCount++ : "";
                    if (($("#" + lblMultiFieldId).attr("data-mandatory") == "M") && ($("#" + lblMultiFieldId).val() != "")) {
                        psMTEnteredCount++;
                    }
                }
                (psMTMandCount <= psMTEnteredCount) ? psEnteredCount++ : "";
            }
        }
    });
    //                alert("psTotalCount::"+psTotalCount);
    if (psTotalCount > 0)
        $("#" + tabId + "_MO_COUNT").text(psEnteredCount + "/" + psTotalCount);
    else
        $("#" + tabId + "_MO_COUNT").text("");
//    if ( psTotalCount > 0 && (psEnteredCount == psTotalCount) )
    //        $("#" + tabId + "_MO_COUNT").css("color","red");
}
function testNewIFSC(tabId) {
    if (tabId == "VM_PAYMENT_TX_DATA")
        newIFSC("#NEW_BNK");
}
function dalNewIFSC(tabId) {
    if (tabId.id == "NEW_BNK")
        newIFSC("#NEW_BNK");
}
function newIFSC(ele) {
    //    alert("newIFSC"+ele.id);
    var newIFSC = $(ele);
    if (newIFSC.is(':checked')) {
        //        alert("if::"+newIFSC.is(':checked'));
//        $("#BANKL").attr("disabled", false);
        $("#BANKL").attr("readonly", false);
        $("#ddBANKL").hide();
//        $("#STRAS").attr("disabled", false);
//        $("#BRNCH").attr("disabled", false);
        $("#STRAS").attr("readonly", false);
        $("#BRNCH").attr("readonly", false);
        $("#ddBANKS").show();
        if ($("#BANKS").val())
            $("#ddBANK_STATE").show();
        else
            $("#ddBANK_STATE").hide();
        if ($("#BANKS").val() == "IN" && $("#BANK_STATE").val()) {
            $("#ddBANK_ORT01").show();
//            $("#BANK_ORT01").attr("disabled", true);
            $("#BANK_ORT01").attr("readonly", true);
        } else {
            $("#ddBANK_ORT01").hide();
//            $("#BANK_ORT01").attr("disabled", false);
            $("#BANK_ORT01").attr("readonly", false);
        }

    } else
    {
        //        alert("else::"+newIFSC.is(':checked'));
//        $("#BANKL").attr("disabled", true);
        $("#BANKL").attr("readonly", true);
        $("#ddBANKL").show();
//        $("#STRAS").attr("disabled", true);
//        $("#BRNCH").attr("disabled", true);
        $("#STRAS").attr("readonly", true);
        $("#BRNCH").attr("readonly", true);
        $("#ddBANKS").hide();
        $("#ddBANK_STATE").hide();
        $("#ddBANK_ORT01").hide();
//        $("#BANK_ORT01").attr("disabled", true);
        $("#BANK_ORT01").attr("readonly", true);
    }
}
function htmlTblDDw(dddwid, cssid, rowid, columnid, dependancyparams, propDependentValFlag)
{
    var propValueArray = [];
//    var propValRequiredFlag = $("#ddtbPROPERTY_VALUE1" + rowid).attr("data-requiredflag");
//    if (propValRequiredFlag != null && propValRequiredFlag != "" && propValRequiredFlag != undefined) {
//        $("#tbPROPERTY_UOM" + rowid).val("");
//    }
    if (propDependentValFlag != null && propDependentValFlag != '' && propDependentValFlag == 'Y') {
        var totalPropCount = $("#dd" + cssid).attr("data-totalprop");
        if (totalPropCount != null && totalPropCount != 0) {
            for (var i = 0; i < totalPropCount; i++) {
                var propValue = $("#tbPROPERTY_VALUE1" + i).val();
                if (propValue != null && propValue != '' && propValue.trim() != '') {
                    var dataObj = {};
                    dataObj['PROPERTY_VALUE1'] = propValue;
                    dataObj['CLASS_CONCEPT_ID'] = $("#tdCLASS_CONCEPT_ID" + i).text();
                    dataObj['PROPERTY_CONCEPT_ID'] = $("#tdPROPERTY_CONCEPT_ID" + i).text();
                    propValueArray.push(dataObj);
                }
            }
        }
        visionDropdown(dddwid, dependancyparams, "TABLE-VIEW", "", "tdPROP_VALUE_CONCEPT_ID" + rowid, "", cssid, rowid, columnid, JSON.stringify(initialTblViewCols), propValueArray, propDependentValFlag);

    } else {
        visionDropdown(dddwid, dependancyparams, "TABLE-VIEW", "", "", "", cssid, rowid, columnid, JSON.stringify(initialTblViewCols));
    }

}
function updatepropVal(tbid, datafield, index, mintb) {
    delay(function () {
        var message = "Min Value Should be less than max value";
//        var message = "Max Value Should be less than min value";
        alert("value:" + $("#" + tbid).val());
        if ($("#" + mintb).val() != null && $("#" + tbid).val() != null &&
                parseInt($("#" + mintb).val()) > parseInt($("#" + tbid).val())) {
            message = (labelObject[message] != null ? labelObject[message] : message);
            var dialogSplitMessage = dialogSplitIconText(message, "false");
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({resizable: false,
                modal: true,
                title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
                textAlign: 'center',
                minWidth: 300,
                maxWidth: 'auto',
                height: 'auto',
                minHeight: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            //$(this).html("");
                            $(this).dialog("close");
//                            $("#" + tbid).val('');
                            $("#" + tbid).focus();
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
            $("#maxtb" + datafield + index).text($("#" + tbid).val());
            $("#maxtb" + datafield + index).val($("#" + tbid).val());
        }
    }, 500);

}
function validatepropVal(mintb, maxtb) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var message = "Min Value Should be less than max value ";
    if ($("#" + mintb).val() != null && $("#" + maxtb).val() != null &&
            parseInt($.trim($("#" + mintb).val())) > parseInt($.trim($("#" + maxtb).val()))
            && $.trim($("#" + maxtb).val()).length != 0)
    {
        message = (labelObject[message] != null ? labelObject[message] : message);
        var dialogSplitMessage = dialogSplitIconText(message, "false");
        $("#dialog").html(dialogSplitMessage);
        $("#dialog").dialog({resizable: false,
            modal: true,
            title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
            textAlign: 'center',
            minWidth: 300,
            maxWidth: 'auto',
            height: 'auto',
            minHeight: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        //$(this).html("");
                        $(this).dialog("close");
                        //$("#" + mintb).val('');
                        // $("#" + mintb).focus();
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
async function fetchErpTab(selectedGridId, erpTabGridId) {

    if (selectedGridId && selectedGridId.includes(';')) {
        const selectedSplitGridId = selectedGridId.split(';').map(id => id.trim()).filter(id => id !== '');
        for (const gridId of selectedSplitGridId) {
            console.log("Processing ERP tab:", gridId);
            await fetchMultiErpFormTab(gridId, erpTabGridId);
        }

        // Return early so the rest of this code doesn't run again for the combined ID
        return;
    }
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    tabsOldData = {};
    globalErpTab = selectedGridId;
    alert("erpTabGridId::::" + erpTabGridId);
    console.log("erpTabGridId:::" + erpTabGridId);
    var selectedErpGridData = null;
    if (erpTabGridId == '') {// || erpTabGridId == 'undefined'
        erpTabGridId = $("#erpTabGridId").val();
    }
    try {
        selectedErpGridData = $('#' + erpTabGridId + "_TABLE").jqxGrid('getrowdata', $('#' + erpTabGridId + "_TABLE").jqxGrid('getselectedrowindex'));
    } catch (e) {
    }
    alert(erpTabGridId + ":::fetchErpTabData::::" + selectedGridId);
    alert("selectedErpGridData::::" + JSON.stringify(selectedErpGridData));
    var editableFlag = "N";
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
        if (textid != null && textid != 'CREATE_DATE') {
            if (selectedErpGridData != null && selectedErpGridData[textid] != null) {
                textval = selectedErpGridData[textid];
            }
            basicData[textid] = textval;
        }

        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
            var columnNames = $("#" + textid).val();
            var columnsArray = columnNames.split(",");

            var hiddenIds = textid.split("HIDDEN_");
            var hiddenVal = $("#" + hiddenIds[1]).val();
            if (selectedErpGridData != null && selectedErpGridData[hiddenIds[1]] != null) {
                hiddenVal = selectedErpGridData[hiddenIds[1]];
            }
            for (var i = 0; i < columnsArray.length; i++) {
                basicData[columnsArray[i]] = hiddenVal;
            }

        }


    });
    alert("basicData::::" + JSON.stringify(basicData));
    var instance = $("#INSTANCE").val();
    var plant = $("#BUSINESS_UNIT").val();
    alert(basicData['INSTANCE'] + "::::instance:::" + instance);
    alert(basicData['BUSINESS_UNIT'] + "::::plant:::" + plant);
    var rolehid = $("#rolehid").val();
    if (rolehid != null && (rolehid.indexOf("VM_") > -1 || rolehid.indexOf("CM_") > -1)) {
        editableFlag = "Y";

    } else {
        if (basicData != null && basicData['INSTANCE'] == instance && plant == basicData['BUSINESS_UNIT']) {
            if (erpTabGridId != null && erpTabGridId.indexOf("_OLD") > -1) {
                editableFlag = "N";
            } else {
                editableFlag = "Y";
            }


        }

    }
    basicData['editableFlag'] = editableFlag;
    basicData['erpTabGridId'] = erpTabGridId;
    if (selectedGridId != null) {
        $.ajax({
            type: "POST",
            url: 'fetchERPTabaData',
            data: {
                'gridId': selectedGridId,
                'basicData': JSON.stringify(basicData),
                'panelId': $("#panelId").val(),
                'erpTabGridId': erpTabGridId,
                'fioriThemeFlag': fioriThemeCheck,
            },
            //headers: {"Access-Control-Allow-Origin": true},
            traditional: true, cache: false,
            success: function (response) {
                stopLoader();//26
                alert("response::::" + response);
                var erpDataObj = JSON.parse(response);
                $('#' + selectedGridId + "Icon").html(erpDataObj['tabOperationIcon']);
                if (erpDataObj['intiobj'] != null) {
                    var materialTyp = $("#RECORD_TYPE").val();
                    //uuu_CalButtonType
                    var initObj = erpDataObj['intiobj'];
                    var calButtonType = initObj['uuu_CalButtonType'];

                    console.log("calButtonType:::" + calButtonType);
                    // console.log("calculateindex::::"+ calButtonType.indexOf(materialTyp));
                    if (calButtonType == null || calButtonType == '') {
                        calButtonType = 'ALL';
                    }
                    console.log("calButtonType2:::" + calButtonType);
                    if ((calButtonType == 'ALL' || calButtonType.indexOf(materialTyp) > -1)) {

                        $('#' + selectedGridId + '_CalculateStock').show();
                    } else {
                        $('#' + selectedGridId + '_CalculateStock').hide();
                    }

                }
                console.log(erpDataObj['dataLength']);
                //  if (erpDataObj['formView'] == "GRID-VIEW") {
                var formDefaultValues = "";
//                    if (erpDataObj['data'] != null) {
//                        var formDefault = erpDataObj['data'];//initialValues
//                        if (formDefault != null && formDefault != '') {
                formDefaultValues = erpDataObj['defaultValues'];

                $("#defaultValues").val(formDefaultValues);
                $("#" + selectedGridId + "_defaultValues").remove();
                $("#mat_creation_form_table").append("<input type='hidden' id='" + selectedGridId + "_defaultValues' />");
                $("#" + selectedGridId + "_defaultValues").val(formDefaultValues);
//                        }
//
//                    }

                //  }
                if (erpDataObj['dataLength'] != 1) {

//                    console.log("::::::" + JSON.parse(erpDataObj['data']));
                    // var jsonObj  = JSON.parse(erpDataObj['data']);tabOperationIcon
                    $("#" + selectedGridId + "Icon").hide();
//                    $("#" + selectedGridId ).show();
                    formGrid(selectedGridId, JSON.parse(erpDataObj['data']), erpDataObj['erpData']);

                } else {
                    try {
                        $("#" + selectedGridId).jqxGrid('destroy');
                    } catch (e) {

                    }

                    $("#" + selectedGridId + "_FORM").html(erpDataObj['data']);
                    if (editableFlag != null && editableFlag == 'Y') {
                        $('#' + selectedGridId + "Icon").show();
                        $("#" + selectedGridId + "_FORM" + " :input[data-type='D']").each(function ()
                        {
                            var id = $(this).attr('id');

                            var isEditable = $("#" + id).attr('data-editable');
                            if (isEditable == "Y") {
                                $("#" + id).datepicker({
                                    changeMonth: true,
                                    changeYear: true,
                                    dateFormat: "dd-mm-yy",
                                    showOn: "button",
                                    buttonImage: 'images/iDXPUI5Calendar.svg',
                                    buttonImageOnly: true
                                });
                            }
                        });
                        var tabOldObj = {};

                        $("#" + selectedGridId + "_TABLE" + " :input").each(function ()
                        {
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
//                  jsonOBJ.ids.push(textid.toLowerCase());
                            if (textid != null && textid != 'CREATE_DATE') {
                                tabOldObj[textid] = textval;
                            }


                        });
                        if (tabOldObj != null) {
                            tabsOldData[selectedGridId] = tabOldObj;
                        }
                    } else {
                        $("#" + selectedGridId + "Icon").hide();
                    }

                    try {
//                        $(".ccGuideInfo").mouseover(function () {
//                            $('#colorBlueID').remove();
//                            var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"\"><span class=\"mfGuideColorIndex\"><svg  height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#000fff\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
//                                    + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#ff1a1a\"></svg></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
//                                    + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#688280\"></svg></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
//                                    + "<li class=\"\"><span class=\"mfGuideColorIndex\"><svg height=\"20px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 500\"><path d=\"M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z\"/ fill =\"#32a852\"></svg></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
//                            $(this).append('<div id = "colorBlueID"></div>');
//                            $('#colorBlueID').html(htmlData);
//                            $('#colorBlueID').jqxPopover({
//                                showArrow: true,
//                                width: 115,
//                                height: 120,
//                                showCloseButton: false,
//                                position: 'right',
//                                selector: $(this)
//                            });
//                            $("#colorBlueID").jqxPopover('open');
//                        })
//
//                        $(".ccGuideInfo").mouseout(function () {
//                            $("#colorBlueID").jqxPopover('close');
//                            $('#colorBlueID').remove();
//                        });
                        $(".ccGuideInfo").mouseover(function () {
                            $('#colorBlueID').remove();
                            var htmlData = "<ul class=\"color_IndicatioUl\"><li class=\"listItemcolorIndication\"><span class=\"autoGenerateline\"></span><span class=\"mfGuideColorIndexText\"> AutoGenerate</span></li>"
                                    + "<li class=\"listItemcolorIndication\"><span class=\"mandatoryline\"></span><span class=\"mfGuideColorIndexText\"> Mandatory </span></li>"
                                    + "<li class=\"listItemcolorIndication\"><span class=\"optionalline\"></span><span class=\"mfGuideColorIndexText\"> Optional </span></li>"
                                    + "<li class=\"listItemcolorIndication\"><span class=\"autopopulateline\"></span><span class=\"mfGuideColorIndexText\"> AutoPopulate </span></li></ul>";
                            $(this).append('<div id = "colorBlueID">' + htmlData + '</div>');
                            var template = '<div class="popover custom-popoverSuggestion" role="tooltip">' +
                                    '<div class="arrow"></div>' +
                                    '<h3 class="popover-header"></h3>' +
                                    '<div class="popover-body"></div>' +
                                    '</div>';
                            $(".ccGuideInfo").popover({content: htmlData, trigger: "hover", position: 'right', html: true, template: template});
                        });
                    } catch (rr) {

                    }
                }

            },
            error: function (e) {
                //  (e.message)
                sessionTimeout(e);
            }
        });
    }
}
function fetchMultiErpFormTab(selectedGridId, erpTabGridId) {
    return new Promise((resolve, reject) => {
        let labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {
            console.warn("Error parsing labelObjectHidden:", e);
        }

        const fioriThemeCheck = $("#cb-switch").is(":checked");
        tabsOldData = {};
        globalErpTab = selectedGridId;

        console.log("ERP Tab Grid ID:", erpTabGridId);

        if (!erpTabGridId) {
            erpTabGridId = $("#erpTabGridId").val();
        }

        // Try to get selected row data from jqxGrid
        let selectedErpGridData = null;
        try {
            const grid = $('#' + erpTabGridId + "_TABLE");
            if (grid.length) {
                selectedErpGridData = grid.jqxGrid('getrowdata', grid.jqxGrid('getselectedrowindex'));
            }
        } catch (e) {
            console.warn("Error fetching grid data:", e);
        }

        console.log("Selected ERP Grid Data:", selectedErpGridData);

        let editableFlag = "N";
        const basicData = {};

        // Build the basicData object
        $("#mat_creation_form_table :input").each(function () {
            const textid = $(this).attr("id");
            const type = $(this).attr("type");
            let textval = $(this).val();

            if (type !== 'hidden' && textval)
                textval = textval.toUpperCase();

            if (textid && textid !== 'CREATE_DATE') {
                if (selectedErpGridData && selectedErpGridData[textid] != null) {
                    textval = selectedErpGridData[textid];
                }
                basicData[textid] = textval;
            }

            if (textid && textid.lastIndexOf("HIDDEN") > -1) {
                const columnNames = $("#" + textid).val();
                const columnsArray = columnNames.split(",");
                const hiddenIds = textid.split("HIDDEN_");
                let hiddenVal = $("#" + hiddenIds[1]).val();

                if (selectedErpGridData && selectedErpGridData[hiddenIds[1]] != null) {
                    hiddenVal = selectedErpGridData[hiddenIds[1]];
                }

                for (let i = 0; i < columnsArray.length; i++) {
                    basicData[columnsArray[i]] = hiddenVal;
                }
            }
        });

        console.log("Basic Data:", basicData);

        const instance = $("#INSTANCE").val();
        const plant = $("#BUSINESS_UNIT").val();
        const rolehid = $("#rolehid").val();

        // Determine editability
        if (rolehid && (rolehid.includes("VM_") || rolehid.includes("CM_"))) {
            editableFlag = "Y";
        } else if (basicData && basicData['INSTANCE'] === instance && plant === basicData['BUSINESS_UNIT']) {
            editableFlag = (erpTabGridId && erpTabGridId.includes("_OLD")) ? "N" : "Y";
        }

        basicData['editableFlag'] = editableFlag;
        basicData['erpTabGridId'] = erpTabGridId;

        if (selectedGridId) {
            $.ajax({
                type: "POST",
                url: 'fetchERPTabaData',
                data: {
                    gridId: selectedGridId,
                    basicData: JSON.stringify(basicData),
                    panelId: $("#panelId").val(),
                    erpTabGridId,
                    fioriThemeFlag: fioriThemeCheck,
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    try {
                        stopLoader();
                        console.log("Response received for", selectedGridId, response);

                        const erpDataObj = JSON.parse(response);
                        $('#' + selectedGridId + "Icon").html(erpDataObj['tabOperationIcon']);

                        // Handle CalculateStock button visibility
                        if (erpDataObj['intiobj']) {
                            const materialTyp = $("#RECORD_TYPE").val();
                            const initObj = erpDataObj['intiobj'];
                            let calButtonType = initObj['uuu_CalButtonType'] || 'ALL';

                            if (calButtonType === 'ALL' || calButtonType.indexOf(materialTyp) > -1) {
                                $('#' + selectedGridId + '_CalculateStock').show();
                            } else {
                                $('#' + selectedGridId + '_CalculateStock').hide();
                            }
                        }

                        // Default values setup
                        const formDefaultValues = erpDataObj['defaultValues'] || "";
                        $("#defaultValues").val(formDefaultValues);
                        $("#" + selectedGridId + "_defaultValues").remove();
                        $("#mat_creation_form_table").append("<input type='hidden' id='" + selectedGridId + "_defaultValues' />");
                        $("#" + selectedGridId + "_defaultValues").val(formDefaultValues);

                        // Multiple rows → Grid mode
                        if (erpDataObj['dataLength'] != 1) {
                            $("#" + selectedGridId + "Icon").hide();
                            formGrid(selectedGridId, JSON.parse(erpDataObj['data']), erpDataObj['erpData']);
                        } else {
                            // Single row → Form mode
                            try {
                                $("#" + selectedGridId).jqxGrid('destroy');
                            } catch (e) {
                            }

                            $("#" + selectedGridId + "_FORM").html(erpDataObj['data']);

                            if (editableFlag === 'Y') {
                                $('#' + selectedGridId + "Icon").show();
                                $("#" + selectedGridId + "_FORM :input[data-type='D']").each(function () {
                                    const id = $(this).attr('id');
                                    if ($("#" + id).attr('data-editable') === "Y") {
                                        $("#" + id).datepicker({
                                            changeMonth: true,
                                            changeYear: true,
                                            dateFormat: "dd-mm-yy",
                                            showOn: "button",
                                            buttonImage: 'images/iDXPUI5Calendar.svg',
                                            buttonImageOnly: true
                                        });
                                    }
                                });

                                const tabOldObj = {};
                                $("#" + selectedGridId + "_TABLE :input").each(function () {
                                    const textid = $(this).attr("id");
                                    const type = $(this).attr("type");
                                    let textval = $(this).val();
                                    if (type !== 'hidden' && textval)
                                        textval = textval.toUpperCase();
                                    if (type === 'checkbox')
                                        textval = $("#" + textid).is(':checked') ? "Y" : "N";
                                    if (textid && textid !== 'CREATE_DATE')
                                        tabOldObj[textid] = textval;
                                });

                                if (Object.keys(tabOldObj).length > 0) {
                                    tabsOldData[selectedGridId] = tabOldObj;
                                }
                            } else {
                                $("#" + selectedGridId + "Icon").hide();
                            }

                            // Tooltip guide setup
                            $(".ccGuideInfo").off("mouseover").on("mouseover", function () {
                                $('#colorBlueID').remove();
                                const htmlData = `
                                    <ul class="color_IndicatioUl">
                                        <li class="listItemcolorIndication"><span class="autoGenerateline"></span><span class="mfGuideColorIndexText"> AutoGenerate</span></li>
                                        <li class="listItemcolorIndication"><span class="mandatoryline"></span><span class="mfGuideColorIndexText"> Mandatory</span></li>
                                        <li class="listItemcolorIndication"><span class="optionalline"></span><span class="mfGuideColorIndexText"> Optional</span></li>
                                        <li class="listItemcolorIndication"><span class="autopopulateline"></span><span class="mfGuideColorIndexText"> AutoPopulate</span></li>
                                    </ul>`;
                                $(this).append('<div id="colorBlueID">' + htmlData + '</div>');
                                const template = `
                                    <div class="popover custom-popoverSuggestion" role="tooltip">
                                        <div class="arrow"></div>
                                        <h3 class="popover-header"></h3>
                                        <div class="popover-body"></div>
                                    </div>`;
                                $(".ccGuideInfo").popover({
                                    content: htmlData,
                                    trigger: "hover",
                                    position: 'right',
                                    html: true,
                                    template
                                });
                            });
                        }

                        // ✅ Resolve the promise when done
                        resolve(response);

                    } catch (err) {
                        console.error("Error processing ERP data:", err);
                        reject(err);
                    }
                },
                error: function (e) {
                    console.error("AJAX Error in fetchMultiErpFormTab:", e);
                    sessionTimeout(e);
                    reject(e);
                }
            });
        } else {
            console.warn("Invalid selectedGridId:", selectedGridId);
            resolve();
        }
    });
}

function refreshErpTab(selectedErpGridData, erpTabGridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    tabsOldData = {};
    alert(":::::" + JSON.stringify(selectedErpGridData));
    console.log(":::::::::" + JSON.stringify(selectedErpGridData));
    var editableFlag = "N";
    if (selectedErpGridData != null) {
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
            if (textid != null && textid != 'CREATE_DATE') {
                if (selectedErpGridData[textid] != null) {
                    textval = selectedErpGridData[textid];
                }
                basicData[textid] = textval;
            }
            if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
                var columnNames = $("#" + textid).val();
                var columnsArray = columnNames.split(",");
                var hiddenIds = textid.split("HIDDEN_");
                var hiddenVal = $("#" + hiddenIds[1]).val();
                if (selectedErpGridData[hiddenIds[1]] != null) {
                    hiddenVal = selectedErpGridData[hiddenIds[1]];
                }
                for (var i = 0; i < columnsArray.length; i++) {
                    basicData[columnsArray[i]] = hiddenVal;
                }
            }
        });
        var instance = $("#INSTANCE").val();
        var plant = $("#BUSINESS_UNIT").val();
        console.log(basicData['INSTANCE'] + ":::instance::::" + instance);
        console.log(basicData['BUSINESS_UNIT'] + ":::BUSINESS_UNIT::::" + plant);
        if (basicData != null && basicData['INSTANCE'] == instance && plant == basicData['BUSINESS_UNIT']) {

            editableFlag = "Y";
        } else {
            editableFlag = "N"
            delete basicData['SOURCE'];
        }

        basicData['editableFlag'] = editableFlag;
        basicData['erpTabGridId'] = erpTabGridId;
//        alert("::basicData:::" + JSON.stringify(basicData));
        var jsonOBJ = {};
//        basicData['fioriThemeFlag']=fioriThemeCheck;
        jsonOBJ.basicData = basicData;
        // var erpTabGridId =  $("#erpTabGridId").val();
        console.log("JSON.stringify(basicData):::" + JSON.stringify(basicData))
        $.ajax({
            type: "POST",
            url: 'selectRecord',
            data: {
                'jsonData': JSON.stringify(jsonOBJ),
                'panelId': $("#panelId").val(),
                'gridId': erpTabGridId,
                fioriThemeFlag: fioriThemeCheck,
//                'gridId': $("#erpTabGridId").val()
            },
            //headers: {"Access-Control-Allow-Origin": true},
            traditional: true, cache: false,
            success: function (response) {
                //  alert(response);
                var erpDataObj = JSON.parse(response);
                if (erpDataObj != null) {
                    var verifyIdentityFlag = erpDataObj['verifyIdentityFlag'];
                    var selectedGridInitParamObj = erpDataObj['selectedGridInitParamObj'];
                    localStorage.removeItem("verifyIdentityFlag");
                    localStorage.removeItem("selectedGridInitParamObj");
                    localStorage.setItem("verifyIdentityFlag", verifyIdentityFlag);
                    localStorage.setItem("selectedGridInitParamObj", selectedGridInitParamObj);
                    // for tabs config
                    $('#' + erpTabGridId).jqxTabs('destroy');
                    $('#' + erpTabGridId + "_TABLE").after('<div id="' + erpTabGridId + '"></div>');
                    $('#' + erpTabGridId).html(erpDataObj['tabString']);
                    // $('#erpData').html(erpDataObj['tabString']);

                    $('#' + erpTabGridId).jqxTabs({position: 'top', width: '100%', reorder: true, theme: 'ui-redmond', keyboardNavigation: true});
                    $('#' + erpDataObj['tabGridId'] + "_FORM").html(erpDataObj['data']);
                    if (erpDataObj['erpTabGridId'] != null && erpDataObj['erpTabGridId'] != '' && (erpDataObj['erpTabGridId']).toString().indexOf("_OLD") == -1) {
                        //  $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
                        $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
                    }
//                    $("#mat_creation_form_table").append("<input type='hidden' id='" + erpDataObj['erpTabGridId'] + "HiddenGridData' value='' />");
                    $("#" + erpDataObj['erpTabGridId'] + "HiddenGridData").val(erpDataObj['gridIds']);
                    if (editableFlag == 'Y') {
                        $('#' + erpDataObj['tabGridId'] + "Icon").html(erpDataObj['tabOperationIcon']);
                        $("#" + erpDataObj['tabGridId'] + " :input[data-type='D']").each(function ()
                        {
                            var id = $(this).attr('id');
//                                    var id = "#" + id;
//                                    //////////alert(id);
                            var isEditable = $("#" + id).attr('data-editable');
                            if (isEditable == "Y") {
                                $("#" + id).datepicker({
                                    changeMonth: true,
                                    changeYear: true,
                                    dateFormat: "dd-mm-yy",
                                    showOn: "button",
                                    buttonImage: 'images/iDXPUI5Calendar.svg',
                                    buttonImageOnly: true
                                });
                            }
                        });
                        var tabOldObj = {};
                        $("#" + erpDataObj['tabGridId'] + "_TABLE" + " :input").each(function ()
                        {
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
//                  jsonOBJ.ids.push(textid.toLowerCase());
                            if (textid != null && textid != 'CREATE_DATE') {
                                tabOldObj[textid] = textval;
                            }


                        });
                        if (tabOldObj != null) {
                            tabsOldData[erpDataObj['tabGridId']] = tabOldObj;
                        }
                    }

                    $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
                    $("#" + erpDataObj['erpTabGridId'] + "HiddenGridData").val(erpDataObj['gridIds']);
                    // $("#erpDataGridId").val(erpDataObj['gridIds']);
                    // For ERP Tab to Tab changes on Moving

                    var UnselectedGridId;
                    var matchedcount = 0;
                    $('#' + erpTabGridId).on('unselecting', function (event) {
                        UnselectedGridId = globalErpTab;
                        console.log("before matchedcount : " + matchedcount);
                        console.log("change matchedcount : " + changeflag);
                        //console.log("UnselectedGridId : "+UnselectedGridId);

                        var jsonOBJ = {};
                        jsonOBJ.feildIds = [];
                        jsonOBJ.feildValues = [];
                        matchedcount = 0;
                        console.log("after matchedcount : " + matchedcount);
                        var dataView = $("#" + UnselectedGridId + "_Update").attr("data-view");
                        var selectedTabOldData = tabsOldData[UnselectedGridId];
                        if (dataView == "FORM-VIEW" && editableFlag == 'Y') {
                            changeflag = false;
                            $("[id*=" + UnselectedGridId + "]  :input").each(function () {
                                var textid = $(this).attr("id");
                                var type = $(this).attr("type");
                                var textval = $(this).val();
//                console.log("textid:::" + textid);
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


                                var textOldVal = "";
                                if (selectedTabOldData != null) {
                                    textOldVal = selectedTabOldData[textid];
                                    if (textid != null && textid != 'CREATE_DATE' && textval != textOldVal) {
                                        matchedcount++;
                                    }
                                }
//                console.log(textval + ":::" + textid + "::" + textOldVal);

                                if (matchedcount > 0) {
                                    changeflag = true;
                                }


                            });
                        }

                        if (dataView == "GRID-VIEW") {
                            matchedcount = 1;
                            console.log(" GRID-VIEW CODE");
                            var changecount = 0;
                            $("[id^=contenttable]  :input").each(function () {
                                //            var textid = $(this).attr("id");
                                var type = $(this).attr("type");
                                var textval = $(this).val();
                                console.log(" type : " + type + " textval : " + textval + " cell old value " + cellOldValue);
                                if (type == 'textbox' && textval != null && textval != cellOldValue) {
                                    changecount++;
                                }
                            });
                            if (changecount > 0) {
                                console.log(" grid input changed ccount " + changecount);
                                changeflag = true;
                                console.log("grid input changed : changeflag = " + changeflag);
                            }
                        }


                    });
// For ERP Tab to Tab changes on Moving
                    $('#' + erpTabGridId).on('selecting', function (event) {
                        var gridIds = $("#" + erpTabGridId + "HiddenGridData").val();
//                        var gridIds = $("#erpDataGridId").val();
                        var gridIdsArry = gridIds.split(",");
                        var selectedGridId = gridIdsArry[event.args.item];
                        if (changeflag && matchedcount > 0) {
                            if (tabSwitchflag) {
                                event.cancel = true;
                                // event.preventDefault();
                            }
                            $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
                            $("#logoutDailog").dialog({resizable: false,
                                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                modal: true,
                                width: 300,
                                height: 135,
                                fluid: true,
                                buttons: [
                                    {
                                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                                        click: function () {
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
                                        }
                                    }, {
                                        text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                                        click: function () {

                                            $(this).html("");
                                            $(this).dialog("close");
                                            tabSwitchflag = false;
                                            var selectedTab = event.args.item;
                                            console.log("selectedTab  :: " + selectedTab);
                                            changeflag = false;
                                            $('#' + erpTabGridId).jqxTabs('select', selectedTab);
                                            fetchErpTab(selectedGridId, erpTabGridId);
                                            $(this).dialog("close");
                                            changeflag = false;
                                            tabSwitchflag = true;
                                            console.log(length + " tabSwitchflag  : " + tabSwitchflag);
                                        }
                                    }
                                ],
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

                        if (!changeflag) {
                            fetchErpTab(selectedGridId, erpTabGridId);
                        } else if (erpTabGridId != null && erpTabGridId.indexOf("_OLD") > 0) {
                            fetchErpTab(selectedGridId, erpTabGridId);
                        }
                        // fetchErpTab(selectedGridId, erpTabGridId);
                    });
                }

            },
            error: function (e) {
                //  (e.message)
                sessionTimeout(e);
            }
        });
    }
}
function isSpecialCharContactName(event, ele, regex, mandatory) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var msg = (labelObject['Special Characters are not Allowed'] != null ? labelObject['Special Characters are not Allowed'] : 'Special Characters are not Allowed');
    var err = '#dis' + ele;
    //console.log(regex);
    var keyCode = event.keyCode == 0 ? event.charCode : event.keyCode;
//console.log(keyCode);
    if ((keyCode >= 33 && keyCode <= 38) || (keyCode >= 40 && keyCode <= 45) || (keyCode == 47) || (keyCode >= 58 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) {
        $(err).html(msg);
        $(err).fadeIn(500);
        $(err).fadeOut(1500);
        return false;
    }
}
function isVendorNameMandatory(colname, tabId, dataView, rowIndex) {
    console.log("isVendorNameMandatory called")
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }


    try {
        if (dataView == 'GRID-VIEW') {
//gridview

            var currentCellValue = $("#" + tabId).jqxGrid('getcellvalue', rowIndex, colname);
            var gridHiddenValue = $("#" + tabId).jqxGrid('getcellvalue', rowIndex, tabId + "_HIDDEN");
            var vendorNameValue = $("#" + tabId).jqxGrid('getcellvalue', rowIndex, "VENDOR_NAME");
            //var vendorNameColumnIndex = $("#" + tabId).jqxGrid('getcolumnindex', "VENDOR_NAME");
            if (currentCellValue.toUpperCase() == 'OEM PART NO'
                    || currentCellValue.toUpperCase() == 'MANUFACTURER PART NO'
                    || currentCellValue.toUpperCase() == 'SUPPLIER PART NO'
                    ) {

                if (currentCellValue != '' && gridHiddenValue != 'UPDATE' && vendorNameValue != null && vendorNameValue == 'UNKNOWN') {
                    $("#" + tabId).jqxGrid('setcellvalue', rowIndex, "VENDOR_NAME", "");
                    $("#" + tabId).jqxGrid('setcellvalue', rowIndex, "VENDOR_ID", "");
                }
            } else {
                if (vendorNameValue != null && vendorNameValue != '') {
                } else if (currentCellValue != '') {
                    $("#" + tabId).jqxGrid('setcellvalue', rowIndex, "VENDOR_NAME", "UNKNOWN");
                    $("#" + tabId).jqxGrid('setcellvalue', rowIndex, "VENDOR_ID", "UNKNOWN");
                }
            }

        } else {
            var dependantcol = 'VENDOR_NAME';
            var vendorName = $("#VENDOR_NAME").val();
            var gridId = $("#" + colname).attr("data-viewid");
            var gridIdHiddenValie = $("#" + gridId + "_HIDDEN").val();
            if ($("#" + colname).val() == 'OEM PART NO'
                    || $("#" + colname).val() == 'MANUFACTURER PART NO'
                    || $("#" + colname).val() == 'SUPPLIER PART NO'
                    ) {
                $("#" + dependantcol).attr('data-mandatory', 'M');
                $(".lblMand" + dependantcol).css('color', 'red');
                if ($("#" + colname).val() != '' && gridIdHiddenValie != 'UPDATE') {
                    $("#VENDOR_NAME").val("");
                    $("#VENDOR_ID").val("");
                }

            } else {
                if (vendorName != null && vendorName != '') {

                } else if ($("#" + colname).val() != '') {
                    $("#VENDOR_NAME").val("UNKNOWN");
                    $("#VENDOR_ID").val("UNKNOWN");
                }

                $("#" + dependantcol).attr('data-mandatory', '0');
                $(".lblMand" + dependantcol).css('color', '#fff');
            }
        }




    } catch (e) {

    }
}
function getHighLevelProperty(highLevelProperty, j, i) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dropdownObj = $("#dropdownHidden_" + j).val();
    var highLevelPropertyId = "tbPROPERTY_VALUE1" + j;
    var ddwKey = "PROPERTY_VALUE1" + j;
    alert(highLevelPropertyId + "::::value:::" + $("#" + highLevelPropertyId).val() + ":::::highLevelProperty::::" + highLevelProperty);
    console.log(ddwKey + ":::dropdownObj:::" + dropdownObj);
    dropdownObj = JSON.parse(dropdownObj);
    var ddwObj = dropdownObj['PROPERTY_VALUE1'];
    var htmlTblDDw = "onclick=\"htmlTblDDw(\'" + ddwObj['ddwId'].trim() + "\',\'" + ddwKey + "\',\'" + j + "\',\'" + i + "\',\'" + ddwObj['dependencyparams'] + "\')\"";
    alert("htmlTblDDw::::" + htmlTblDDw);
    $.ajax({
        type: "post",
        url: "propertyHirarchy",
        cache: false,
        data: {
            'propertyName': highLevelProperty,
            'propertyValue': $("#" + highLevelPropertyId).val(),
            'htmlTblDDw': htmlTblDDw
        },
        traditional: true,
        dataType: 'html',
        success: function (response) {
            alert("response::::" + response);
            var datObj = JSON.parse(response);
            $("#subPropertiesDailog").html(datObj['dataString']);
            $("#subPropertiesDailog").dialog({resizable: false,
//                title: 'Message',
                modal: true,
                width: 400,
                height: 270,
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            if (datObj['dataFlag']) {
                                var subPropValue = "";
                                var dataCount = datObj['dataCount'];
                                for (var k = 0; k < dataCount; k++) {
                                    subPropValue += $("#subPropertyValue_" + k).val();
                                    if (k != dataCount - 1 && subPropValue != null && subPropValue != '') {
                                        subPropValue += "#";
                                    }
                                }
                                alert("subPropValue::::" + subPropValue);
                                $("#" + highLevelPropertyId).val(subPropValue);
                            }

                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
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
function priceConroleOnChange() {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var priceCntrlVal = $("#VPRSV").val();
    if (priceCntrlVal != null && typeof priceCntrlVal != 'undefined' && priceCntrlVal == "S") {
        $("#STPRS").attr('data-mandatory', 'M');
        $("#STPRS").attr('readonly', false);
        $("#STPRS").parent("th").prev().addClass("labelMandColorRed");
        $('.lblMandSTPRS').show();
//        $("#STPRS").val('');
        $("#VERPR").attr('data-mandatory', 'O');
        $("#VERPR").attr('readonly', true);
        $("#VERPR").parent("th").prev().removeClass("labelMandColorRed");
        $('.lblMandVERPR').hide();
        $("#VERPR").val('');
    } else if (priceCntrlVal != null && typeof priceCntrlVal != 'undefined' && priceCntrlVal == "V") {
        $("#STPRS").attr('data-mandatory', 'O');
        $("#STPRS").attr('readonly', true);
        $("#STPRS").parent("th").prev().removeClass("labelMandColorRed");
        $('.lblMandSTPRS').hide();
        $("#STPRS").val('');
        $("#VERPR").attr('data-mandatory', 'M');
        $("#VERPR").attr('readonly', false);
        $("#VERPR").parent("th").prev().addClass("labelMandColorRed");
        $('.lblMandVERPR').show();
//        $("#VERPR").val('');
    } else {
        $("#STPRS").attr('data-mandatory', 'O');
        $("#STPRS").attr('readonly', true);
        $("#STPRS").parent("th").prev().removeClass("labelMandColorRed");
        $('.lblMandSTPRS').hide();
        $("#STPRS").val('');
        $("#VERPR").attr('data-mandatory', 'M');
        $("#VERPR").attr('readonly', false);
        $("#VERPR").parent("th").prev().addClass("labelMandColorRed");
        $('.lblMandVERPR').show();
//        $("#VERPR").val('');
    }
}
function populateFileBrowser(browseId, gridId) {
    var reqtype = arguments[2];
    var tableName = "";
    tableName = $("#tableName").val();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var secretKey = $('meta[name=keygeneration]').attr("content");
    var masterGridId = $("#mastergridid").val();
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    reqtype = (reqtype == undefined ? "" : reqtype);
    var params = {};
    var index = 0;
    if (selectedrowindexes != 'undefined' && selectedrowindexes != undefined
            && selectedrowindexes != '' && selectedrowindexes.length > 0) {
        if (selectedrowindexes[0] != null && selectedrowindexes[0] != -1) {
            index = selectedrowindexes[0];
        }
        var data = $('#' + gridId).jqxGrid('getrowdata', index);
        if (data != null) {

            for (var datakey in data) {
                if (datakey != null) {
                    params[datakey] = data[datakey];
                }
            }
            var selectedDataStr = JSON.stringify(data);
            if (selectedDataStr != null && selectedDataStr != '' && selectedDataStr != '{}') {
                selectedDataStr = CryptoJS.AES.encrypt(selectedDataStr, secretKey);
                params['selectedDataStr'] = selectedDataStr;
            }
            if (reqtype != null && reqtype == 'SPIR' && data['SPIR_NO'] != null && data['SPIR_NO'] != '') {//SPIR_NO
                var dialogSplitMessage = "";
                var tableMesg = false;
                var message = "Selected SPIR already processed";
                var dialogSplitMessage = dialogSplitIconText((labelObject[message] != null ? labelObject[message] : message), "Y");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    height: (tableMesg == true ? 300 : 'auto'),
                    minHeight: 'auto',
                    minWidth: 350,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
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
                return;
            } else if (reqtype != null && reqtype == 'SPIR' && !(data['SPIR_REC_ID'] != null && data['SPIR_REC_ID'] != '')) {//SPIR_REC_ID
                var dialogSplitMessage = "";
                var tableMesg = false;
                var message = "Please save/refresh the data before processing the SPIR";
                var dialogSplitMessage = dialogSplitIconText((labelObject[message] != null ? labelObject[message] : message), "Y");
                $("#dialog").html(dialogSplitMessage);
                $("#dialog").dialog({resizable: false,
                    modal: true,
                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                    height: (tableMesg == true ? 300 : 'auto'),
                    minHeight: 'auto',
                    minWidth: 350,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                $(this).html("");
                                $(this).dialog("close");
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
                return;
            }
        }


    } else if (reqtype != null && reqtype == 'SPIR') {
        var dialogSplitMessage = "";
        var tableMesg = false;
        var message = "Please select a record to process";
        var dialogSplitMessage = dialogSplitIconText((labelObject[message] != null ? labelObject[message] : message), "Y");
        $("#dialog").html(dialogSplitMessage);
        $("#dialog").dialog({resizable: false,
            modal: true,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            height: (tableMesg == true ? 300 : 'auto'),
            minHeight: 'auto',
            minWidth: 350,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
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
        return;
    }
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
            }

        }


    });
    var basicDataStr = JSON.stringify(basicData);
    if (basicDataStr != null && basicDataStr != '' && basicDataStr != '{}') {
        basicDataStr = CryptoJS.AES.encrypt(basicDataStr, secretKey);
        params['basicDataStr'] = basicDataStr;
    }


    params['reqType'] = reqtype;
    params['gridId'] = gridId;
    params['selectedGridId'] = gridId;
    params['tableName'] = tableName;
    params['SPEC_MODEL_NO'] = basicData['SPEC_MODEL_NO'];
    $("#" + browseId).ajaxfileupload({

        'action': 'importFile',
//        headers: {"X-CSRF-TOKEN": $("input[name='_csrf']").val()},
//        'action': 'importFile?gridId=' + gridId + '&tableName=' + tableName,
        params: params,
//        'action': 'importFile?gridId=' + gridId,
        async: true,
        onStart: function () {
            $("#Loader").css("opacity", "0.99");
            $("#Loader").css("display", "block");
            $("body").css("pointer-events", "none");
            startAjax();
//            showLoader();//30
        },
        'onComplete': function (result) {
//            stopLoader();//30
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
            endAjax();
            console.log("reqtype11::::" + reqtype)
            console.log("result::555::" + result.message);
            try {
                if (reqtype != null && reqtype == 'SPIR') {
                    //dialog
                    // var serverResponce = JSON.stringify(result.message);
                    console.log("serverResponce::::" + result.message)
                    var dialogSplitMessage = "";
                    var tableMesg = false;
                    var message = jQuery('<div />').html(result.message).text();
                    if (message != null && (message.indexOf("<table") > -1)) {
                        //<table
                        tableMesg = true;
                        dialogSplitMessage = message;
                    } else {
                        dialogSplitMessage = dialogSplitIconText((labelObject[result.message] != null ? labelObject[result.message] : result.message), "Y");
                    }
//                    var dialogSplitMessage = dialogSplitIconText((labelObject[result.message] != null ? labelObject[result.message] : result.message), "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        height: (tableMesg == true ? 300 : 'auto'),
                        minHeight: 'auto',
                        minWidth: 350,
                        maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    //  $("#" + gridId).jqxGrid('clearselection');
                                    $("#" + gridId).jqxGrid('updatebounddata');
                                    $("#MM_MGR_SPIR_ATTACH_DOCUMENT").jqxGrid('updatebounddata');
                                    $("#importFile").remove();
                                    var fileImprtDiv = "<input name=\"importFile\" id=\"browse" + gridId + "\" type=\"file\" style=\"display:none\">";
                                    $("#importButton").parent().append(fileImprtDiv);
                                    //  $("#importButton").append(fileImprtDiv);
                                    //  fetchData('MM_MGR_SPIR_ATTACH_DOCUMENT','GRID','REL_MM_MGR_SPIR_ATTACH_DOCUMENT','MM_MGR_SPER_REG')

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
                    console.log("Uploaded successfully" + result);
                } else if (reqtype != null && (reqtype == 'MASS_COPY')) {
                    //dialog
                    // var serverResponce = JSON.stringify(result.message);
                    console.log("serverResponce::::" + result.message)
                    var dialogSplitMessage = dialogSplitIconText((labelObject[result.message] != null ? labelObject[result.message] : result.message), "Y");
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
                                    //  $("#" + gridId).jqxGrid('clearselection');
                                    $("#" + gridId).jqxGrid('updatebounddata');
//                                    $("#MM_MGR_SPIR_ATTACH_DOCUMENT").jqxGrid('updatebounddata');
                                    $("#importFile").remove();
                                    var fileImprtDiv = "<input name=\"importFile\" id=\"browse" + gridId + "\" type=\"file\" style=\"display:none\">";
                                    $("#importButton").parent().append(fileImprtDiv);
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
                } else if (reqtype != null && (reqtype == 'MODEL_SPECC' || reqtype == 'FORM_IMPORT')) {
                    //dialog
                    // var serverResponce = JSON.stringify(result.message);
                    console.log("serverResponce::::" + result.message)
                    var dialogSplitMessage = dialogSplitIconText((labelObject[result.message] != null ? labelObject[result.message] : result.message), "Y");
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
//                                    fetchTabData(gridId);
                                    try {
                                        if (reqtype != null && reqtype == 'MODEL_SPECC')
                                        {
                                            var items = basicData;
                                            items.linkedColumns = 'SPEC_MODEL_NO,BUSINESS_UNIT';
                                            items.panelId = $("#panelId").val();
                                            items.gridId = $("#gridId").val();
                                            items.baskettype = $("#baskettypehid").val();
                                            items.objectid = $("#objectid").val();
                                            var itemsstring = JSON.stringify(items);
                                            $("#items").val(itemsstring);
                                            $("#submitForm").submit();
                                        } else
                                        {
                                            fetchTabData(gridId);
                                        }
                                    } catch (e) {
                                        fetchTabData(gridId);
                                    }
                                    $("#importFile").remove();
                                    var fileImprtDiv = "<input name=\"importFile\" id=\"browse" + gridId + "\" type=\"file\" style=\"display:none\">";
                                    $("#importButton").parent().append(fileImprtDiv);
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
                } else {

                    var dialogSplitMessage = "";
                    var message = jQuery('<div />').html(result.message).text();
                    if (message != null && (message.indexOf("<table") > -1)) {
                        //<table
                        dialogSplitMessage = message;
                    } else {
                        dialogSplitMessage = dialogSplitIconText((labelObject[result.message] != null ? labelObject[result.message] : result.message), "Y");
                    }

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
                                    $("#" + gridId).jqxGrid('updatebounddata');
                                    if (gridId != null && gridId != '' && gridId != 'undefined'
                                            && masterGridId != null && masterGridId != '' && masterGridId != 'undefined' && masterGridId != gridId) {
                                        try {
                                            $("#" + masterGridId).jqxGrid('updatebounddata');
                                        } catch (e) {

                                        }
                                    }

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

                var $img = $("#" + browseId).next('img');
                $("#" + browseId).remove();
                $img.before("<input id='" + browseId + "' type='file' name='importFile' />");
                $("#" + browseId).hide();
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
    $("#" + browseId).attr('data-clicked', 'Y');
    $("#" + browseId).click();
}
function downloadTemplate(gridId, templateId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (templateId != null && templateId != undefined && templateId != '') {
        downloadCodeOfConduct(templateId);
    } else {


        var textData = [];
        var jsObject = null
        var cols = $("#" + gridId).jqxGrid("columns");
        for (var i = 0; i < cols.records.length; i++) {
            jsObject = new Object();
            jsObject.datafield = cols.records[i].datafield;
            jsObject.text = cols.records[i].text;
            jsObject.hidden = cols.records[i].hidden;
            if (jsObject.datafield != '_checkboxcolumn') {
                textData.push(jsObject);
            }
        }
        var exportJson = {};
        exportJson['headers'] = textData;
        exportJson['gridId'] = gridId;
        var columnHide = $("#" + gridId + "_massColumnHide").val();
        if (!(columnHide != null && columnHide != '')) {
            columnHide = $("#massColumnHide").val();
        }

//        var columnHide = $("#massColumnHide").val();
        exportJson['columnHide'] = columnHide;
        // console.log("jsondata:::::" + JSON.stringify(exportJson));
        $('#importDataHidden').val(JSON.stringify(exportJson));
        $("#importData").attr("action", "importXlsxData");
        $("#importData").submit();
    }


}
function formGrid1(tabId, jsnobj, erpDataFlag) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
//var erpDataFlag = jsnobj['erpData'];
    console.log("erpDataFlag::::" + erpDataFlag);
    $("#" + tabId + "_Update").attr("data-view", "GRID-VIEW");
    $("#" + tabId + "_Delete").attr("data-view", "GRID-VIEW");
    $("#" + tabId).show();
    $("#" + tabId + '_TABLE').hide();
    var columns = jsnobj.columns;
    var datafields = jsnobj.datafields;
    var localdata = jsnobj.data;
    var dropDownListData = jsnobj.dropDownListData;
    grioldDataObj.oldData = localdata;
    var tableName = "";
    if (jsnobj['panelData'] != null && jsnobj['panelData'][13] != null) {
        tableName = jsnobj['panelData'][13];
    }


    var columnInitParamsObj = jsnobj['columnInitParamsObj'];
    var listTypeColName = [];
    var listTypeColNameId = [];
    var newLocalData = [];
    var gridConfigObj = {};
    var gridPropObj = {};
    var isParent = 'N';
    gridPropObj = jsnobj.gridPropObj;
    var renderToolbar = gridConfigObj.renderToolbar;
    var nestedGridRelId = jsnobj.nestedGridRelId;
    var nestedGridId = jsnobj.nestedGridId;
    var gridInitParamObj = {};
    gridInitParamObj = jsnobj['gridInitParamObj'];
    if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
        $("#" + tabId).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
    }
    if (jsnobj != null && !jQuery.isEmptyObject(jsnobj)) {
        $("#" + tabId).attr("data-gridResultObj", JSON.stringify(jsnobj));
    }
//console.log("renderToolbar::::" + renderToolbar);
//  alert("renderToolbar:::"+renderToolbar);
    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');
    var nestedGrids = new Array();
    if (gridInitParamObj != null
            && !jQuery.isEmptyObject(gridInitParamObj)
            && gridInitParamObj['uuu_nestedGridParent'] == 'Y') {
        var isParent = 'Y';
        if (gridInitParamObj != null
                && !jQuery.isEmptyObject(gridInitParamObj)
                && gridInitParamObj['uuu_multiChildGrids'] == 'Y')
        {

            var initrowdetails = function (index, parentElement, gridElement, record) {
                try {
                    var details = $($(parentElement).children()[0]);
                    var childId = index + "_level1TabId"
                    details.html("<div sytyle = 'background-color: white;overflow-y: scroll;overflow-x: scroll;' id='" + childId + "'></div>");
                    $("#currentSelectGridIndex").val(index);
                    fetchNestedMultiChildTabs(tabId, index, 'GRID', childId, record)
                } catch (ee) {
                }

            }

        } else {
            var initrowdetails = function (index, parentElement, gridElement, record) {

                $.ajax({
                    type: "post",
                    traditional: true,
                    dataType: 'json',
                    url: "getCloudGrid",
                    cache: false,
                    data: {
                        gridId: nestedGridId,
                        roleId: $("#rolehid").val(),
                    },
                    success: function (nestedresponse) {
                        console.log("response:::" + nestedresponse);
                        if (nestedresponse != null && nestedresponse != '') {
                            var details = $($(parentElement).children()[0]);
                            details.html("<div sytyle = 'background-color: white;overflow-y: scroll;overflow-x: scroll;' id='" + nestedresponse['gridId'] + "'></div>");
                            var nestedparamobj = {};
                            $("#currentSelectGridIndex").val(index);
                            getNestedGridConfig(nestedresponse, nestedGridId, "N", nestedparamobj, tabId, nestedGridRelId, record, "", "", "Y")
                        }
                    },
                    error: function (ex) {
                        console.log(ex);
                        sessionTimeout(ex);
                    }
                });
            }
        }



    }
    var dateRenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
        // console.log("cellValue::"+cellValue);
        if (cellValue != null && cellValue != '') {
            var dateValue = $.jqx.dataFormat.formatdate(value, 'dd-MM-yyyy', $("#" + tabId).jqxGrid('gridlocalization'));
            //console.log("dateValue:::"+dateValue);
            cellValue = dateValue;
        }
        return cellValue;
    };
    var headerTooltipRenderer = function (element) {
        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
            position: 'bottom-right',
            showArrow: false, content: $(element).text()});
    }
    var attachmentImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {

        if (value != "" && value != null)
        {
// return value;
// $( ".visionGridColFileClass" ).tooltip({ content: 'click to show' });
            return  "<img title='Click to view the attachment' style='cursor:pointer;' onclick=viewAttachment('" + tabId + "'," + row + ",'" + tableName + "')  src='" + value + "' class='imageStyle visionTemplete'  id='dtlul_" + row + "' >";
        } else {
            return "<div class='visionCoFileImage'>"
                    + "<input name='colFileImage' type='file' id ='visionColFileId' style ='display:none'/>"
                    + "<img src='images/attach_pin_icon_blue.png' onclick=showgridBrowseButton('" + tabId + "') style='cursor:pointer;margin-left: 30%;'/>"
                    + "</div>";
        }
    };
    var dataSheetRendered = function (element) {
        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
            position: 'bottom-right',
            showArrow: false, content: $(element).text()});
    }
    var AILensRenderer
            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                            if (value != "" && value != null && value == 'M010112324')
//                            {
                return  "<div class='jqx-grid-cell-left-align AILensCellRendererImgClass'>"
                        + " <span class='AILensRecordHoverImgClass'>"
                        + "<img style='cursor:pointer;' src='images/aieyeLensclick.png' width=23px; "
//                                    + " onclick=\"defaultAITypingRequest('" + rowData['ERP_NO'] + "','" + rowData['RECORD_NO'] + "')\"/></span>"
                        + " onclick=\"getAIContentBasedOnQuery('What you would like to see about this Record','Details of " + rowData['RECORD_NO'] + "','IMDRMSTATISTICS','L','N','" + rowData['ERP_NO'] + "','" + rowData['RECORD_NO'] + "','','" + rowData['INSTANCE'] + "','" + rowData['BUSINESS_UNIT'] + "','','','','','','" + rowData['ERP_NO'] + "')\"/></span>"
                        + " </div>";
//                            } else {
//                                return  defaulthtml;
//                            }
            };
    var AILensVCRenderer
            = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                            if (value != "" && value != null && value == 'M010112324')
//                            {
                return  "<div class='jqx-grid-cell-left-align AILensCellRendererImgClass'>"
                        + " <span class='AILensRecordHoverImgClass'>"
                        + "<img style='cursor:pointer;' src='images/aieyeLensclick.png' width=23px; "
//                                    + " onclick=\"defaultAITypingRequest('" + rowData['ERP_NO'] + "','" + rowData['RECORD_NO'] + "')\"/></span>"
                        + " onclick=\"getAIContentBasedOnQuery('What you would like to see about this Record','Details of " + rowData['RECORD_NO'] + "','IMDRMSTATISTICS','L','N','" + rowData['SUPPLIER_NO'] + "','" + rowData['RECORD_NO'] + "','','" + rowData['PLANT'] + "','" + rowData['PLANT'] + "','" + rowData['COMPANY_CDE'] + "','" + rowData['PURCHASE_ORG'] + "','" + rowData['SALES_ORG'] + "','" + rowData['DISTRIBUTION_CHANNEL'] + "','" + rowData['DIVISION'] + "','" + rowData['SUPPLIER_NO'] + "')\"/></span>"
                        + " </div>";
//                            } else {
//                                return  defaulthtml;
//                            }
            };
    var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
        var cellValue = $("#" + tabId).jqxGrid('getcellvalue', row, columnfield);
        var viewType = "GRID-VIEW";
        var editable = gridConfigObj.editable;
        console.log("===============================================");
        console.log("Inside gridDrpdownRenderor editable::" + editable)
        console.log("===============================================");
        if (columnInitParamsObj != null && columnInitParamsObj != '' && columnInitParamsObj != undefined)
        {
            var columnParams = columnInitParamsObj[columnfield];
            if (columnParams != null && columnParams != '' && columnParams != undefined) {
                var editableFlag = columnParams['uuu_editable'];
                var hiddenType = $('#' + tabId).jqxGrid('getcellvalue', row, tabId + "_HIDDEN");
            }
        }
        if (editable) {
            if (editableFlag != null && editableFlag != '' && editableFlag == "Y")
            {
                if (hiddenType != null && hiddenType != '' && hiddenType != undefined && hiddenType != "INSERT") {
                    var ddwData = jsnobj.dropDowndData;
                    var ddwObj = ddwData[columnfield];
                    var dependencyparams = ddwObj.dependencyparams;
                    return "<div  class='visionGridDataAlign' >" + cellValue + "</div>";
                } else
                {
                    var ddwData = jsnobj.dropDowndData;
                    var ddwObj = ddwData[columnfield];
                    var dependencyparams = ddwObj.dependencyparams;
                    $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
                    //return "<div  style='width:99.5%;vertical-align:middle;height:100%;padding:2px 12px 2px 3px;' >" + cellValue + "<img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px;float:right;' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div>";
                    return "<div  class='visionGridDataAlign'><div class='visionGridDataAlignInfo'> " + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + tabId + columnfield + "' src='images/iDXPUI5SearchDropdown.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                }
            } else
            {
                var ddwData = jsnobj.dropDowndData;
                var ddwObj = ddwData[columnfield];
                var dependencyparams = ddwObj.dependencyparams;
                $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
                //return "<div  style='width:99.5%;vertical-align:middle;height:100%;padding:2px 12px 2px 3px;' >" + cellValue + "<img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px;float:right;' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div>";
                return "<div  class='visionGridDataAlign'><div class='visionGridDataAlignInfo'> " + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
            }
//            var ddwData = jsnobj.dropDowndData;
//            var ddwObj = ddwData[columnfield];
//            var dependencyparams = ddwObj.dependencyparams;
//            $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', false);
//            //return "<div  style='width:99.5%;vertical-align:middle;height:100%;padding:2px 12px 2px 3px;' >" + cellValue + "<img class='prop_imgClass' src='images/iDXPUI5SearchDropdown.png' style='width:15px;height:15px;float:right;' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div>";
//            return "<div  class='visionGridDataAlign'><div class='visionGridDataAlignInfo'> " + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
        } else
        {
            var ddwData = jsnobj.dropDowndData;
            var ddwObj = ddwData[columnfield];
            var dependencyparams = ddwObj.dependencyparams;
            return "<div  class='visionGridDataAlign' >" + cellValue + "</div>";
        }
    };
    /* Renderer for textbox with dropdown*/
    var TB_DDW = function (row, columnfield, value, defaulthtml, columnproperties) {
        console.log("Entered TB_DDW renderer");
        //   var editable = response.gridPropObj.editable;
        var ddwData = jsnobj.dropDowndData;
        console.log("ddwData::" + JSON.stringify(ddwData));
        var ddwObj = ddwData[columnfield];
        var dependencyparams = ddwObj.dependencyparams;
        var tbid = ddwObj.gridId + row;
        value = $("#" + ddwObj.gridId).jqxGrid('getcellvalue', row, 'PROPERTY_VALUE1');
        console.log("renderer::" + row + "::" + value);
        var viewType = "GRID-VIEW";
        if (value == null || value == 'null') {
            value = "";
        }
        return "<div  class='visionGridDataAlignInput' data-recid='' data-prop=''>"
                //  + "<input type='text' style='width:100%;' value='" + value + "' id='" + ddwObj.gridId + row + "'>"
                + "<div class='visionGridDataAlignInputField'>"
                + "<input type='text'"
                + " onkeyup=propValKeyUp1('" + tbid + "'," + row + ",'none','" + ddwObj.gridId + "','" + columnfield + "',event)"
                + " value='" + value + "' id='" + ddwObj.gridId + row + "'/>"
                + "</div><div class='visionGridDataAlignInputImage'>"
                + " <img src='images/icon.png' "
                + " onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "'," + row + ",'" + ddwObj.gridId + row + "')></div></div>";
    };
    var descrender = function (row, columnfield, value, defaulthtml, columnproperties) {

        return '<div style="height:' + $("#" + tabId).jqxGrid('rowsheight') + 'px" class="ta_style ta_style_Desc"  ><pre>' + value + '</pre></div>';
    };
    var descsaprender = function (row, columnfield, value, defaulthtml, columnproperties) {

        return '<div style="height:' + $("#" + tabId).jqxGrid('rowsheight') + 'px" class="ta_style ta_style_Desc"  ><pre>' + value + '</pre></div>';
    };
    if (gridPropObj.rowsheight != null) {
        gridPropObj.rowsheight = parseInt(gridPropObj.rowsheight);
        // gridPropObj.autorowheight = true;
    }
    var charRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
//DEFINITION
// alert("Entered Char Renderer");
        var tooltip = "";
        var ddwData = jsnobj.dropDowndData;
        console.log("ddwData::" + JSON.stringify(ddwData));
        var ddwObj = ddwData[columnfield];
        var dependencyparams = ddwObj.dependencyparams;
        var property = value;
        var mand_ind;
        var highlevelid;
        mand_ind = $('#' + ddwObj.gridId).jqxGrid('getcellvalue', row, "REQUIRED_FLAG");
        highlevelid = $('#' + ddwObj.gridId).jqxGrid('getcellvalue', row, "HIGH_LEVEL_FLAG");
        console.log("highlevelid:::" + highlevelid);
        try {
            tooltip = $('#' + ddwObj.gridId).jqxGrid('getcellvalue', row, "DEFINITION");
        } catch (e) {
        }
        if (highlevelid == 'Y')
        {
            highlevelid = "<div><span id='span" + row + "' class='ui-icon ui-icon-plus'"
                    + " style='display:inline-block;cursor:pointer;' "
                    + "onclick=propertyHierarchy(" + row + ",'" + ddwObj.gridId + "','" + property.replace(/\s/g, "_") + "','PROPERTY_VALUE1')></span></div>";
        } else
        {
            highlevelid = "";
        }
//alert('mand_ind::'+mand_ind);
        if (mand_ind == 'Y')
        {
            return  "<div title='" + tooltip + "' style='width:100%' class='propMandatory'> <div style='width:90%'>" + property + "</div>" + highlevelid + "</div>";
        } else
        {
            return  "<div title='" + tooltip + "' style='width:100%' class='propNormal'> <div style='width:100%'>" + property + highlevelid + "</div>";
        }
    };
    /*Renderer For Highlighting Mandatory Properties and Showing Multilevel Dr if applicable in Characteristic Tab */

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }


    for (var i = 0; i < datafields.length; i++) {
        if (typeof datafields[i].values != "undefined" && datafields[i].values != null) {

            var listboxData = eval(datafields[i].values.source);
            var dataFeildName = datafields[i].name;
            // var dataFeildNameId=dataFeildName+"_ID";
            if (dataFeildName.indexOf("_DLOV") > -1) {
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
            var changeFunObj = datafields[i].values;
            if (changeFunObj != null && changeFunObj['onchangeFunName'] != null && changeFunObj['onchangeFunName'] != '') {
//onchangeFunName
//dropdownlisteditorMM_REFERENCEREFERENCE_TYPE_DLOV
//                $('#dropdownlisteditor'+tabId+dataFeildName).on('change', function (event) {
//                    eval(changeFunObj['onchangeFunName']);
//                  
//                });
            }


        }

    }
    var newLocalData = [];
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var initDefaultFlag = $("#defaultFlag").val();
    var initattachType = $("#checkAttachType").val();
    if (!(initattachType != null && initattachType != '' && initattachType != undefined))
    {
        if (gridInitParamObj != null) {
            var attachInitParams = gridInitParamObj["uuu_attachInitParams"];
            if (attachInitParams != null && attachInitParams != '' && attachInitParams != undefined)
            {
                var initParams = attachInitParams.split(":");
                if (initParams != null && initParams != '' && initParams != undefined) {
                    $("#checkAttachType").val(initParams[1]);
                }
            }
        }


    }
    var source = $("#SOURCE").val();
    if (!(source != null && source != '' && source != undefined))
    {
        if (gridInitParamObj != null) {
            var initParamSource = gridInitParamObj["uuu_Source"];
            $("#initParamSource").val(initParamSource);
        }

    }

    console.log("labelobj:::" + labelObject);
    if (localdata != null && localdata.length > 0 && listTypeColName.length > 0) {
        for (var i = 0; i < localdata.length; i++) {
            var dataObj = localdata[i];
            for (var j = 0; j < listTypeColName.length; j++) {
                dataObj[listTypeColNameId[j]] = dataObj[listTypeColName[j]];
                var displayKeyValuObj = dropDownListData[listTypeColName[j]];
                for (var k = 0; k < displayKeyValuObj.length > 0; k++) {
                    var displayFieldObj = displayKeyValuObj[k];
                    if (displayFieldObj != null && displayFieldObj != "" && displayFieldObj.id == dataObj[listTypeColName[j]]) {
//console.log("listbox::::"+labelObject[displayFieldObj.ListboxValue]+"::::"+listTypeColName[j]);
                        dataObj[listTypeColName[j]] = displayFieldObj.ListboxValue;
                    }

                }
            }
            var defaultFlag = dataObj['DEFAULT_FLAG'];
            if (defaultFlag)
            {
                defaultFlag = "Y";
            } else
            {
                defaultFlag = "N";
            }
            var attachType = dataObj['ATTACH_TYPE'];
            if (attachType != null && attachType != '' &&
                    initattachType != null && initattachType != '' && attachType == initattachType) {
                if (defaultFlag != null && defaultFlag != '' && initDefaultFlag != null
                        && initDefaultFlag != '' && initDefaultFlag == defaultFlag)
                {
                    var imgSource = dataObj['CONTENT'];
                    $("#descImage").attr("src", imgSource);
                }
            }
            newLocalData.push(dataObj);
        }
        if (newLocalData != null && newLocalData.length > 0) {
            localdata = [];
            localdata = newLocalData;
        }
    }
//   console.log(JSON.stringify(localdata));
    var source =
            {
                datatype: "array",
                localdata: localdata,
                datafields: datafields
            };
    var dataAdapter = new $.jqx.dataAdapter(source);
    var isExportable = true;
    gridConfigObj = jsnobj.gridPropObj;
    for (var i = 0; i < columns.length; i++) {
        if (columns[i].cellsrenderer != null) {
            columns[i].cellsrenderer = eval('(' + columns[i].cellsrenderer + ')');
        }

        if (columns[i].createeditor != null) {
            columns[i].createeditor = eval('(' + columns[i].createeditor + ')');
        }

        if (columns[i].initeditor != null) {
            columns[i].initeditor = eval('(' + columns[i].initeditor + ')');
        }
        if (columns[i].geteditorvalue != null) {
            columns[i].geteditorvalue = eval('(' + columns[i].geteditorvalue + ')');
        }
        if (columns[i].cellbeginedit != null) {
            columns[i].cellbeginedit = eval('(' + columns[i].cellbeginedit + ')');
        }
        if (columns[i].rendered != null) {
            columns[i].rendered = eval('(' + columns[i].rendered + ')');
        }

    }

    gridConfigObj.source = dataAdapter;
    gridConfigObj.columns = columns;
    if (isParent == "Y") {
        gridConfigObj.rowdetails = true;
        gridConfigObj.rowdetailstemplate = {
            rowdetails: "<div style='margin-top:0.2%;border:1px solid #0078d4' class='visionSearchRowDtl'></div>",
//                        rowdetailsheight: 32
            rowdetailsheight: 400,
//                        rowdetailshidden: true
        };
        gridConfigObj.initrowdetails = initrowdetails;
        //add new rowclick function start nexted grid
        $("#" + tabId).on('rowclick', function (event) {
            var args = event.args;
            var boundIndex = args.rowindex;
            var previousIndex = $("#currentSelectGridIndex").val();
            // Hide the previous row details and remove the corresponding elements
            if (boundIndex !== +previousIndex) {
                $("#" + tabId).jqxGrid('hiderowdetails', previousIndex);
            } else {
                if ($("#" + tabId + "_TAB").length > 0) {
                    $("#" + tabId + "_TAB").jqxTabs("destroy");
                }
            }
// Check if the current row details are already visible
            var details = args.row.rowdetails;
            var parentElement = $(event.target).closest('.jqx-grid-cell').parent();
            // Use initrowdetails to initialize or update the row details
            initrowdetails(boundIndex, parentElement, tabId, args.row.bounddata);
            // Update the current selected grid index
            $("#currentSelectGridIndex").val(boundIndex);
        });
        //add new rowclick function end nexted grid
    }


    var gridgroupflag = 'N';
    try {
        if (gridInitParamObj['uuu_groupbyGrid'] != null && gridInitParamObj['uuu_groupbyGrid'] != ''
                && gridInitParamObj['uuu_groupbyGrid'] != 'null' && gridInitParamObj['uuu_groupbyGrid'] != 'undefined'
                && gridInitParamObj['uuu_groupbyGrid'] != undefined) {
            var groupbyGridStr = gridInitParamObj['uuu_groupbyGrid'];
            if (groupbyGridStr != null && groupbyGridStr != undefined && groupbyGridStr != '' &&
                    (groupbyGridStr.startsWith('Y') == true)) {
                gridgroupflag = 'Y';
                gridConfigObj.groupable = true;
                $("#" + tabId).attr("data-gridgroupable", "Y");
                if (groupbyGridStr != null && groupbyGridStr != undefined && groupbyGridStr != '' &&
                        groupbyGridStr.indexOf(":") > -1) {
                    var groupColsArray = (groupbyGridStr.split(":")[1]).split(",");
                    if (groupColsArray != null && groupColsArray.length > 0) {
                        gridConfigObj.groups = groupColsArray;
                        $("#" + tabId).attr("data-gridgroupColsArray", JSON.stringify(groupColsArray));
                        gridConfigObj.pageable = false;
                    }

                }
                $("#" + tabId).on('groupschanged', function (event) {
                    try {
                        var args = event.args;
                        var type = args.type;
                        var groupIndex = args.index;
                        var groups = args.groups;
                        /* console.log(args) */;
//                                console.log(type);
//                                console.log(groupIndex);
                        console.log('groupcolumns:::' + groups);
                        if (groups != null && groups.length > 0) {
                            gridConfigObj.pageable = false;
                            $("#" + tabId).jqxGrid({pageable: false});
                        } else {
                            var pageable = gridConfigObj.pageable;
                            gridPropObj.pageable = true;
                            $("#" + tabId).jqxGrid({pageable: pageable});
                        }
                    } catch (er) {
                        console.log(er);
                    }

                });
            }



        }
    } catch (er) {
        console.log(er);
    }

    var paginationFlag = gridConfigObj['pageable'];
    if (paginationFlag) {
        gridConfigObj.virtualmode = false;
    }
    if (gridConfigObj['rowsheight'] != null && gridConfigObj['rowsheight'] != '') {//rowsheight
        gridConfigObj.autorowheight = true;
    }

    var renderToolbar = gridConfigObj.renderToolbar;
    // console.log("renderToolbar::::" + renderToolbar);
    //  alert("renderToolbar:::"+renderToolbar);
    gridConfigObj.renderToolbar = eval('(' + renderToolbar + ')');
    //var gridObj=getVisionGridObject(getVisionGridObject,jsnobj);


    console.log("Editable::" + gridConfigObj.editable);
    console.log("tabId::::::6327::::" + tabId);
    try {
        $("#" + tabId).remove();
    } catch (e) {

    }



    if (erpDataFlag != 'Y') {

        $("#" + tabId + "_TABLE").after("<div id='" + tabId + "'></div>");
    } else {
        $("#" + tabId + "_FORM").after("<div id='" + tabId + "'></div>");
    }
    var pagerMode = $("#" + tabId).jqxGrid('pagermode');
//    gridConfigObj.enabletooltips = false;
    gridConfigObj.cellhover = function (element, pageX, pageY)
    {

    };
    $("#" + tabId).jqxGrid(gridConfigObj);
    try {
        var gridColumnObj = gridConfigObj.columns;
        if (columnInitParamsObj != null && !jQuery.isEmptyObject(columnInitParamsObj)) {
            $("#" + tabId).jqxGrid('beginupdate');
            for (var index = 0; index < gridColumnObj.length; index++) {
                try {
                    var datacolName = gridColumnObj[index].datafield;
                    var cellalignColParamObj = columnInitParamsObj[datacolName];
                    if (cellalignColParamObj != null && !jQuery.isEmptyObject(cellalignColParamObj)) {
                        var cellaligndata = cellalignColParamObj['uuu_Colcellsalign'];
                        if (cellaligndata != null && cellaligndata != undefined && cellaligndata != '') {
                            $("#" + tabId).jqxGrid('setcolumnproperty', datacolName, 'align', cellaligndata);
                            $("#" + tabId).jqxGrid('setcolumnproperty', datacolName, 'cellsalign', cellaligndata);
                        }

                    }
                } catch (e) {

                }
            }

        }
        $("#" + tabId).jqxGrid('endupdate');
    } catch (e) {
    }

    $('#' + tabId).on('celldoubleclick', function (event) {
        var args = event.args;
        var dataField = args.datafield;
        var dataField1 = args.text;
        var rowIndex = args.rowindex;
        var cellValue = args.value;
        var isEditable = $('#' + tabId).jqxGrid('getcolumnproperty', dataField, 'editable');
        console.log("isEditable::::" + isEditable)
        var editable = gridConfigObj.editable;
        if (!isEditable || !editable) {
            var column = $('#' + tabId).jqxGrid('getcolumn', event.args.datafield).text;
            if (column.trim() != null && column.trim() != '' && column.trim()
                    != 'null' && column.trim() != 'undefined' && column.trim() != undefined
                    && cellValue != null && cellValue != '' && cellValue
                    != 'null' && cellValue != 'undefined' && cellValue != undefined
                    && !(cellValue.startsWith("data:image/png"))
                    && !(cellValue.startsWith("data:image/jpg"))
                    && !(cellValue.startsWith("data:image/jpeg"))
                    )
            {
                popupedit(column, cellValue);
            }
        }

    });
    var dataLength = source.localdata.length;
    try {
        if (dataLength <= 5) {
            $("#" + tabId).jqxGrid({autoheight: true});
        }
    } catch (e) {
        console.log(e);
    }
    if (jsnobj.tbDdwEditFlag == true) {
        $("#" + tabId).jqxGrid('editable', false);
        $("#" + tabId).jqxGrid('selectionmode', 'multiple');
        //  gridConfigObj.editable = false;
    }
    var checkBoxFlag = false;
    $("#" + tabId).on('cellvaluechanged', function (event)
    {
        console.log("cell value changed");
        changeflag = true;
        if (checkBoxFlag)
        {
            checkBoxFlag = false;
            $("#" + tabId).jqxGrid('setcellvalue', event.args.rowindex, event.args.datafield, event.args.oldvalue);
        }
        var oldvalue = event.args.oldvalue;
        var newvalue = "";
        if (event.args.newvalue != null) {
            newvalue = event.args.newvalue.value
        }
        if (oldvalue != null && oldvalue != '' && oldvalue != undefined
                && newvalue != null && newvalue != '' && newvalue != undefined && oldvalue == newvalue) {
            changeflag = false;
        }
    });
    var fieldVal;
    $("#" + tabId).on('cellbeginedit', function (event)
    {
        $("#" + tabId).attr('data-last-ed-field', event.args.datafield);
        $("#" + tabId).attr('data-last-ed-row', event.args.rowindex);
        // event arguments.
        var args = event.args;
        // column data field.
        var dataField = event.args.datafield;
        // row's bound index.
        var rowBoundIndex = event.args.rowindex;
        // cell value
        var value = args.value;
        cellOldValue = value;
        // cell old value.
        var oldvalue = args.oldvalue;
        // row's data.
        var rowData = args.row;
        var columntype = args.columntype;
        try {
            if (columntype == "dropdownlist")
            {
                fieldVal = rowData[dataField.replace("_DLOV", "")];
            }
        } catch (e) {
        }
        var columnType = event.args.columntype;
        if (columnInitParamsObj != null && columnInitParamsObj != '' && columnInitParamsObj != undefined)
        {
            var columnParams;
            if (columnType == 'dropdownlist')
            {
                columnParams = columnInitParamsObj[dataField.replace("_DLOV", "")];
            } else
            {
                columnParams = columnInitParamsObj[dataField];
            }
            if (columnParams != null && columnParams != '' && columnParams != undefined) {
                var editable = columnParams['uuu_editable'];
                if (editable != null && editable != '' && editable == "N")
                {
                    var hiddenType = $('#' + tabId).jqxGrid('getcellvalue', rowBoundIndex, tabId + "_HIDDEN");
                    if (hiddenType != null && hiddenType != '' && hiddenType != undefined && hiddenType != "INSERT") {
                        $("#" + tabId).jqxGrid('endcelledit', rowBoundIndex, dataField, true);
                        if (columnType == "checkbox")
                        {
                            checkBoxFlag = true;
                        }
                    }
                }
            }
        }
        $("#" + tabId).jqxGrid('selectrow', rowBoundIndex);
        $("#" + tabId + "_Update").show();
        //   //console.log("cell began event");
    });
    $("#" + tabId).bind('rowselect', function (event) {
//////console.log("rowselect");
// //console.log("row select");

        var selectedrowindexes = $("#" + tabId).jqxGrid('selectedrowindexes');
        var rwindex = event.args.rowindex;
        if (selecteIndexes.indexOf(rwindex) == -1) {

            selecteIndexes.push(rwindex)
        }


        var column = event.args.column;
        // ////console.log("rwindex::::"+rwindex);
        // ////console.log("selectedIndexs::::"+selectedIndexs.length);


        if (selecteIndexes.length != 0 && selectedrowindexes.length != 0) {
            $("#" + tabId + "_Delete").show();
            $("#" + tabId + "_Update").show();
        } else
        {
            $("#" + tabId + "_Delete").hide();
            $("#" + tabId + "_Update").hide();
        }

        if (selectedrowindexes.length == 0) {
            selecteIndexes.length = 0;
        }
// ////console.log("PUSH:::::selecteIndexes.length:::" + selecteIndexes.length);
    });
    var onChangeFunctions = jsnobj.onChangeFunctions;
    $("#" + tabId).on('change', function (event) {

        var args = event.args;
        var currentTarget = event.currentTarget;
        var currentDataField = currentTarget.dataset.lastEdField;
        var currentRowIndex = currentTarget.dataset.lastEdRow;
        console.log("Select Changed ");
        if (args != null && args != '' && args.item != null && args.item != '' && fieldVal != args.item.label) {
            $("#" + tabId).jqxGrid('endcelledit', currentRowIndex, currentDataField, false);
        }
//        $("#" + tabId).jqxGrid('endcelledit', currentRowIndex, currentDataField, false);

//var datafieldNames = Object.keys(onChangeFunctions);
        if (onChangeFunctions != null) {
            var functionName = onChangeFunctions[currentDataField];
            if (functionName != null) {
                functionName = functionName.replace("'rowIndex'", currentRowIndex);
                eval(functionName);
            }
        }
//        var functionName = onChangeFunctions[currentDataField];
//        functionName = functionName.replace("'rowIndex'", currentRowIndex);
//        eval(functionName);

    });
    $("#" + tabId).bind('rowunselect', function (event) {
        var selectedrowindexes = $("#" + tabId).jqxGrid('selectedrowindexes');
        // ////console.log("rowunselect:::::"+selectedrowindexes);
        var rwindex = event.args.rowindex;
        //console.log("pop:::"+rwindex);
        selecteIndexes.pop(rwindex)

        // var data = $('#searchResults').jqxGrid('getrowdata', rwindex);

        //console.log("POP::selectedIndexs::" + selecteIndexes.length);
        //    ////console.log("POP::::selecteIndexes.length:::" + selecteIndexes.length);
        if (selecteIndexes.length != 0 && selectedrowindexes.length != 0) {
            $("#" + tabId + "_Delete").show();
            $("#" + tabId + "_Update").show();
        } else
        {
            $("#" + tabId + "_Delete").hide();
            $("#" + tabId + "_Update").hide();
        }
        if (selectedrowindexes.length == 0) {
            selecteIndexes.length = 0;
        }
    });
    $("#" + tabId).on('rowclick', function (event) {

        $("#" + tabId + '_Update').show();
        $("#" + tabId + '_Delete').show();
        //documentTabViewType = "GRID_VIEW";
        //    //console.log("row clicked");

    });
    $("#" + tabId + "_MO_COUNT").text("");
    $("#" + tabId + "_ICON").hide();
}// end of formGrid()
function erpTab1(tabId, erpDataObj, erpDataFlag, formView) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    tabsOldData = {};
    if (erpDataObj != null) {
        if (erpDataObj['tabGridId'] != null && erpDataObj['tabGridId'] != '' && erpDataObj['tabGridId'].indexOf('_OLD') < 0) {
            globalErpTab = erpDataObj['tabGridId'];
        }
        if (erpDataFlag == 'Y') {
// alert("erpDataObj:::" + JSON.stringify(erpDataObj));
// for Grid config
            var erpGridDataObj = erpDataObj['erpGridResults'];
            if (erpGridDataObj != null) {
                var erpGridConfig = erpGridDataObj['gridPropObj'];
                var columnInitParamObj = {};
                columnInitParamObj = erpGridDataObj['columnInitParamsObj'];
                console.log("erpGridDataObj['tableData']::::" + JSON.stringify(erpGridDataObj['tableData']));
                console.log("erpGridDataObj['columns']::::" + JSON.stringify(erpGridDataObj['columns']));
                var source =
                        {
                            datatype: "json",
                            localdata: erpGridDataObj['tableData'],
                            datafields: erpGridDataObj['datafields']
//                                                    datafields: erpGridDataObj['columns']

                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                erpGridConfig.source = dataAdapter;
                var renderToolbar = erpGridConfig.renderToolbar;
                //console.log("renderToolbar::::" + renderToolbar);
                //  alert("renderToolbar:::"+renderToolbar);
                erpGridConfig.renderToolbar = eval('(' + renderToolbar + ')');
                erpGridConfig.columns = erpGridDataObj['columns'];
                var headerTooltipRenderer = function (element) {
                    $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                        position: 'bottom-right',
                        showArrow: false, content: $(element).text()});
                }
                var dataSheetRendered = function (element) {

// $(element).html("<div class='show_detail' ></div>");
                    $(element).addClass("show_detail");
                    $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
                        position: 'bottom-right',
                        showArrow: false,
                        content: "Data Sheet"});
                    //content: $(element).text()});
                }
                var descrender = function (row, columnfield, value, defaulthtml, columnproperties) {

                    return '<div style="height:' + $("#" + tabId).jqxGrid('rowsheight') + 'px" class="ta_style ta_style_Desc"  ><pre>' + value + '</pre></div>';
                };
//                var descrender
//                        = function (row, columnfield, value, defaulthtml, columnproperties) {
//                            //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
//                            console.log("hiiiii");
//                            return '';
//                        };
                var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var cellValue = $("#" + tabId + "_TABLE").jqxGrid('getcellvalue', row, columnfield);
                    var viewType = "GRID-VIEW";
                    var ddwData = erpGridConfig.dropDowndData;
                    var ddwObj = ddwData[columnfield];
                    var dependencyparams = ddwObj['dependencyparams'];
                    var editable = erpGridConfig['editable'];
                    var dependencyparams = ddwObj.dependencyparams;
                    if (columnInitParamObj != null && columnInitParamObj != '' && columnInitParamObj != undefined)
                    {
                        var columnParams = columnInitParamObj[columnfield];
                        if (columnParams != null && columnParams != '' && columnParams != undefined) {
                            var editableFlag = columnParams['uuu_editable'];
                            var hiddenType = $('#' + tabId).jqxGrid('getcellvalue', row, tabId + "_HIDDEN");
                        }
                    }
                    if (editable) {
                        if (editableFlag != null && editableFlag != '' && editableFlag == "Y")
                        {
                            $("#" + tabId).jqxGrid('setcolumnproperty', columnfield, 'editable', true);
                        }
                        return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img id='dd" + tabId + "_TABLE" + columnfield + "' src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
//                        return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                    } else
                    {
                        return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                    }

                };
//                erpGridConfig.enabletooltips = false;
                erpGridConfig.cellhover = function (element, pageX, pageY)
                {
//                    var cellToolTip = $(element).text();
//                    if (cellToolTip != null && cellToolTip != '') {
//                        $(element).parent().jqxTooltip({position: 'mouse', theme: 'energyblue',
//                            showArrow: false, content: cellToolTip});
//                        $(element).parent().jqxTooltip('open', pageX + 5, pageY + 5);
//                    }
                };
                for (var i = 0; i < erpGridConfig.columns.length; i++) {
                    if (erpGridConfig.columns [i].cellsrenderer != null) {
                        erpGridConfig.columns [i].cellsrenderer = eval(erpGridConfig.columns [i].cellsrenderer);
                    }
                    if (erpGridConfig.columns[i].rendered != null) {
                        erpGridConfig.columns[i].rendered = eval('(' + erpGridConfig.columns[i].rendered + ')');
                    }
                }
                var paginationFlag = erpGridConfig['pageable'];
                if (paginationFlag) {
                    erpGridConfig.virtualmode = false;
                }
                if (erpGridConfig['rowsheight'] != null && erpGridConfig['rowsheight'] != '') {//rowsheight
                    erpGridConfig.autorowheight = true;
                }
                $('#' + tabId + "_TABLE").jqxGrid(erpGridConfig);
                $('#' + tabId + "_TABLE").on('celldoubleclick', function (event) {
                    var args = event.args;
                    var dataField = args.datafield;
                    var dataField1 = args.text;
                    var rowIndex = args.rowindex;
                    var cellValue = args.value;
                    var isEditable = $('#' + tabId + "_TABLE").jqxGrid('getcolumnproperty', dataField, 'editable');
                    console.log("isEditable::::" + isEditable)
                    if (!isEditable) {
                        var column = $('#' + tabId + "_TABLE").jqxGrid('getcolumn', event.args.datafield).text;
                        if (column.trim() != null && column.trim() != '' && column.trim()
                                != 'null' && column.trim() != 'undefined' && column.trim() != undefined
                                && cellValue != null && cellValue != '' && cellValue
                                != 'null' && cellValue != 'undefined' && cellValue != undefined
                                && !(cellValue.startsWith("data:image/png"))
                                && !(cellValue.startsWith("data:image/jpg"))
                                && !(cellValue.startsWith("data:image/jpeg"))
                                )
                        {
                            popupedit(column, cellValue);
                        }
                    }

                });
            }


// for tabs config
            alert("tabId::::" + tabId);
            if ($('#' + tabId).html() != "") {
                $('#' + tabId).jqxTabs('destroy');
                $('#' + tabId + "_TABLE").after('<div id="' + tabId + '"></div>');
            }

            $('#' + tabId).html(erpDataObj['tabString']);
//                                        $('#erpData').html(erpDataObj['tabString']);
            $('#' + tabId).html(erpDataObj['tabString']);
            $('#' + tabId).jqxTabs({position: 'top', width: '100%', reorder: true, theme: 'ui-redmond', keyboardNavigation: true});
            $('#' + erpDataObj['tabGridId'] + "Icon").html(erpDataObj['tabOperationIcon']);
            //   var erpTabGridId = $("#erpTabGridId").val();
            if (erpDataObj['erpTabGridId'] != null && erpDataObj['erpTabGridId'] != '' && (erpDataObj['erpTabGridId']).toString().indexOf("_OLD") == -1) {
//  $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
                $("#erpTabGridId").val(erpDataObj['erpTabGridId']);
            }
            if ($("#" + erpDataObj['erpTabGridId'] + "HiddenGridData").length == 0) {
                $("#mat_creation_form_table").append("<input type='hidden' id='" + erpDataObj['erpTabGridId'] + "HiddenGridData' value='' />");
            }
            $("#" + erpDataObj['erpTabGridId'] + "HiddenGridData").val(erpDataObj['gridIds']);
            alert("erpDataGridId:::After::" + $("#erpDataGridId").val());
            var unSelectTab = "";
            var gridIds = $("#" + tabId + "HiddenGridData").val();
            var gridIdsArry = gridIds.split(",");
//            $('#' + tabId).on('unselecting', function (event) {
//                unSelectTab = event.args.item;
//            });

            var UnselectedGridId = "";
            var matchedcount = 0;
            $('#' + tabId).on('unselecting', function (event) {

                UnselectedGridId = gridIdsArry[event.args.item];
                console.log("before matchedcount : " + matchedcount);
                console.log("change matchedcount : " + changeflag);
                console.log("UnselectedGridId : " + UnselectedGridId);
                var jsonOBJ = {};
                jsonOBJ.feildIds = [];
                jsonOBJ.feildValues = [];
                matchedcount = 0;
                console.log("after matchedcount : " + matchedcount);
                var dataView = $("#" + UnselectedGridId + "_Update").attr("data-view");
                var selectedTabOldData = tabsOldData[UnselectedGridId];
                if (dataView == "FORM-VIEW") {
                    changeflag = false;
                    $("[id*=" + UnselectedGridId + "]  :input").each(function () {
                        var textid = $(this).attr("id");
                        var type = $(this).attr("type");
                        var textval = $(this).val();
//                console.log("textid:::" + textid);
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


                        var textOldVal = "";
                        if (selectedTabOldData != null) {
                            textOldVal = selectedTabOldData[textid];
                            if (textid != null && textid != 'CREATE_DATE' && textval != textOldVal) {
                                matchedcount++;
                            }
                        }
//                console.log(textval + ":::" + textid + "::" + textOldVal);

                        if (matchedcount > 0) {
                            changeflag = true;
                        }


                    });
                }

                if (dataView == "GRID-VIEW") {
                    matchedcount = 1;
                    console.log(" GRID-VIEW CODE");
                    var changecount = 0;
                    $("[id^=contenttable]  :input").each(function () {
//            var textid = $(this).attr("id");
                        var type = $(this).attr("type");
                        var textval = $(this).val();
                        console.log(" type : " + type + " textval : " + textval + " cell old value " + cellOldValue);
                        if (type == 'textbox' && textval != null && textval != cellOldValue) {
                            changecount++;
                        }
                    });
                    if (changecount > 0) {
                        console.log(" grid input changed ccount " + changecount);
                        changeflag = true;
                        console.log("grid input changed : changeflag = " + changeflag);
                    }
                }


            });
            $('#' + tabId).on('selecting', function (event) {
                var baskettype = $('#' + tabId).jqxTabs('getTitleAt', unSelectTab);
                var unselectedGridId = gridIdsArry[unSelectTab];
                var selectedGridId = gridIdsArry[event.args.item];
                var erpTab = tabId;
                if (changeflag && matchedcount > 0) {
                    if (tabSwitchflag) {
                        event.cancel = true;
                        // event.preventDefault();
                    }
                    $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
                    $("#logoutDailog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                        modal: true,
                        width: 300,
                        height: 135,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }
                            }, {
                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                                click: function () {

                                    $(this).html("");
                                    $(this).dialog("close");
                                    tabSwitchflag = false;
                                    var selectedTab = event.args.item;
                                    console.log("selectedTab  :: " + selectedTab);
                                    changeflag = false;
                                    $('#' + tabId).jqxTabs('select', selectedTab);
                                    fetchErpTab(selectedGridId, erpTab);
                                    $(this).dialog("close");
                                    changeflag = false;
                                    tabSwitchflag = true;
                                    console.log(length + " tabSwitchflag  : " + tabSwitchflag);
                                }
                            }
                        ],
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

// if ((tabId.indexOf('SEARCH_VIEW') > -1) || (tabId.indexOf('NEW') > -1) || (tabId.indexOf('OLD') > -1)) {
//fetchErpTab(selectedGridId, erpTab);

                if (!changeflag) {
                    fetchErpTab(selectedGridId, erpTab);
                } else if (tabId != null && tabId.indexOf("_OLD") > 0) {
                    fetchErpTab(selectedGridId, erpTab);
                }

//                fetchErpTab(selectedGridId, erpTab);


            });
            /* commented by NBA : 26/10/17 : END */


            $('#' + tabId + "_TABLE").on('rowselect', function (event) {
                var rows = $('#' + tabId + "_TABLE").jqxGrid('getrows');
                // alert(rows.length);
                var index = event.args.rowindex;
                for (var i = 0; i < rows.length; i++)
                {
                    if (i != index) {
                        try {
                            var bindex = $('#' + tabId + "_TABLE").jqxGrid('getrowboundindex', i);
                            $('#' + tabId + "_TABLE").jqxGrid('unselectrow', bindex);
                        } catch (err) {
                        }
                    }
                }
                refreshErpTab(rows[event.args.rowindex], tabId);
            });
            if (formView == 'FORM-VIEW') {
                $('#' + erpDataObj['tabGridId'] + "_FORM").html(erpDataObj['data']);
                $("#" + erpDataObj['tabGridId'] + "_FORM" + " :input[data-type='D']").each(function ()
                {
                    var id = $(this).attr('id');
                    var isEditable = $("#" + id).attr('data-editable');
                    if (isEditable == "Y") {
                        $("#" + id).datepicker({
                            changeMonth: true,
                            changeYear: true,
                            dateFormat: "dd-mm-yy",
                            showOn: "button",
                            buttonImage: 'images/iDXPUI5Calendar.svg',
                            buttonImageOnly: true
                        });
                    }
                });
                var tabOldObj = {};
                $("#" + erpDataObj['tabGridId'] + "_TABLE" + " :input").each(function ()
                {
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
//                  jsonOBJ.ids.push(textid.toLowerCase());
                    if (textid != null && textid != 'CREATE_DATE') {
                        tabOldObj[textid] = textval;
                    }

                });
                if (tabOldObj != null) {
                    tabsOldData[erpDataObj['tabGridId']] = tabOldObj;
                }
            } else {
                formGrid(erpDataObj['tabGridId'], erpDataObj, erpDataFlag);
            }
        } else {
            formGrid(tabId, erpDataObj, erpDataFlag);
        }
    }
}// end of erpTab()
function fetchnewData(tabId, baskettype, event, selectedGridId, erpTab) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var v_ag = $("#hiddenAccountGroup").val();
    var errorCount = 0;
    var jsonOBJ = {};
    jsonOBJ.feildIds = [];
    jsonOBJ.feildValues = [];
    var matchedCount = 0;
    var selectedTabOldData = tabsOldData[tabId];
    $("#" + tabId + "_TABLE" + " :input").each(function ()
    {
        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        var textval = $(this).val();
        if (type != 'hidden') {
            if (textval != null && textval != '') {
                textval = textval.toUpperCase();
            }
        }
        jsonOBJ.feildIds.push(textid);
        if (type != null && type == 'checkbox') {//
            if ($("#" + textid).is(':checked')) {
                textval = "Y";
            } else {
                textval = "N";
            }
        }

        if (textid != null && textid != 'CREATE_DATE') {

        }
        jsonOBJ.feildValues.push(textval);
        var textOldVal = "";
        if (selectedTabOldData != null) {
            textOldVal = selectedTabOldData[textid];
        }
        if (textval != textOldVal) {
            matchedCount++;
        }
    });
    $("table#" + tabId + "_TABLE :input").each(function ()
    {


        var id = $(this).attr('id');
        var mand = $(this).attr("data-mandatory");
        var label = $(this).attr("data-label");
        mand = (mand === "M") ? "M" : "O";
        if (label != null && label == "Bank Key(IFSC)" && (v_ag != null && v_ag == "Material & Service (Foreign)")) {
            $("#BANKL").attr("data-regex", "null");
        }
        var regex = $(this).attr("data-regex");
        var returnBoolean = regexFunction(id, regex, mand, tabId, label);
        if (returnBoolean == false)
        {
            errorCount++;
            return false;
        }
    });
    alert("errorCount:::" + errorCount);
    var dataView = $("#" + tabId + "_Update").attr("data-view");
    if (errorCount == 0) {
        if (matchedCount > 0 && dataView != 'GRID-VIEW') {


            var operation = "update";
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
                    }

                }
            });
            var results = "Do you want to save your Changes in ";
            results = (labelObject[results] != null ? labelObject[results] : results);
            results = results + " " + (labelObject[baskettype] != null ? labelObject[baskettype] : baskettype) + "?";
            var dialogSplitMessage = dialogSplitIconText(results, "Y");
            var message = results;
            var setWidth;
            $("#tabdialog").html(dialogSplitMessage);
            $("#tabdialog").dialog({resizable: false,
                modal: true,
                title: (labelObject['Confirmation'] != null ? labelObject['Confirmation'] : 'Confirmation'),
                height: 'auto',
                minHeight: 'auto',
                //   minWidth: 350,
                //  maxWidth: 'auto',
                width: dialogWidthResize(message, setWidth),
                fluid: true,
                buttons: [{
                        text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            jsonOBJ.basicData = basicData;
                            var jsonArray = [];
                            jsonArray.push(jsonOBJ);
                            UpdateOrDelete(JSON.stringify(jsonArray), dataView, tabId, operation);
                        }
                    },
                    {
                        text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
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
                    $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui)
                {
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                    fetchErpTab(selectedGridId, erpTab);
                }
            });
        } else {
            fetchErpTab(selectedGridId, erpTab);
        }
    } else {

        event.cancel = true;
    }
}
function navigateToAuditView(tableName, basicDataAudit, clauseColumns) {

    $("#submitAuditForm").attr("action", 'grid');
    $("#submitAuditForm").attr("method", 'post');
    $("#submitAuditForm").attr("target", '_blank');
    $("#auditGridId").val(tableName);
    $("#clauseColumns").val(clauseColumns);
    $("#basicData").val(JSON.stringify(basicDataAudit));
    $("#submitAuditForm").submit();
}
function spirOperations(gridId, operationName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedRowDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
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
            var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (selectedRowData != null) {
                selectedRowDataArray.push(selectedRowData);
            }

        }

        if (selectedRowDataArray.length != 0) {
            if (operationName != 'REGISTER')
            {
                if (operationName == 'DELETE') {
                    var dialogSplitMessage = dialogSplitIconText((labelObject['Are you sure you want to Delete'] != null ? labelObject['Are you sure you want to Delete'] : 'Are you sure you want to Delete') + "?", "Y");
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
                                text: (labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    spirOperationsProcess(selectedRowDataArray, gridId, operationName);
                                }
                            },
                            {
                                text: (labelObject['No'] != null ? labelObject['No'] : 'No'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                }
                            }
                        ],
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
//                else if (operationName == 'VALIDATE') {
//                    sabicMassValidateData(selectedRowDataArray, gridId, operationName);
//                    gridValidationMessage();
//                }
                else {
                    spirOperationsProcess(selectedRowDataArray, gridId, operationName);
                }

            } else
            {
                showLoader();
                var saveRecordArray = [];
                for (var i = 0; i < selectedRowDataArray.length; i++) {
                    var dataObj = selectedRowDataArray[i];
                    if (dataObj != null && dataObj['COMMENTS'] != null
                            && (dataObj['COMMENTS'] == 'Ok' || dataObj['COMMENTS'] == 'OK')) {
                        saveRecordArray.push(dataObj);
                    }
                }
                if (saveRecordArray != null && saveRecordArray.length > 0) {
                    var defaultValues = $("#" + gridId + "_defaultValues").val();
                    $.ajax({
                        type: "post",
                        url: "saveRecord",
                        cache: false,
                        data: {
                            jsonData: JSON.stringify(saveRecordArray),
                            gridId: gridId,
                            panelId: $('#panelId').val(),
                            formId: $('#formId').val(),
                            tableName: $('#tableName').val(),
                            defaultValues: defaultValues,
                            dropVal: "Create"
                        },
                        traditional: true,
                        dataType: 'html',
                        success: function (response) {
                            alert("response::::" + response);
                            stopLoader();
                            if (response != null && response != '') {
                                var responseObj = JSON.parse(response);
                                var dialogSplitMessage = dialogSplitIconText((labelObject[responseObj['message']] != null ? labelObject[responseObj['message']] : responseObj['message']), "Y");
                                $("#dialog").html(responseObj.resultMessage);
                                $("#dialog").dialog({resizable: false,
                                    modal: true,
                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
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
                                                $("#" + gridId).jqxGrid('updatebounddata');
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


                        },
                        error: function (e) {
                            sessionTimeout(e);
                            stopLoader();
                        }

                    });
                } else {
                    stopLoader();
                    var dialogSplitMessage = dialogSplitIconText((labelObject['Please Validate and fix the validation errors'] != null ? labelObject['Please Validate and fix the validation errors'] : 'Please Validate and fix the validation errors'), "Y");
                    $("#dialog").html(dialogSplitMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
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

            }
        } else {
            stopLoader();
            var dialogSplitMessage = dialogSplitIconText((labelObject['Please Select atleast one Row.'] != null ? labelObject['Please Select atleast one Row.'] : 'Please Select atleast one Row.'), "Y");
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
                            $("#" + gridId).jqxGrid('updatebounddata');
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

    } else {
        stopLoader();
        var dialogSplitMessage = dialogSplitIconText((labelObject['Please Select atleast one Row.'] != null ? labelObject['Please Select atleast one Row.'] : 'Please Select atleast one Row.'), "Y");
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
                        $("#" + gridId).jqxGrid('updatebounddata');
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

}// end of spirOperations()
function reviewIndValidations(id) {
    $(".allErrors").hide();
    console.log("reviewIndValidations:::");
    var reviewInd = $("#REVIEW_IND").val();
    console.log("reviewInd:::" + reviewInd);
    if (reviewInd != null && reviewInd != '') {
        console.log("reviewInd::IF:" + reviewInd);
        if (reviewInd == 'T') {
            $("#TECH_REV_LIST").attr('data-mandatory', 'M');
            $("#COM_REV_LIST").attr('data-mandatory', 'O');
        } else if (reviewInd == 'C') {
            $("#TECH_REV_LIST").attr('data-mandatory', 'O');
            $("#COM_REV_LIST").attr('data-mandatory', 'M');
        } else if (reviewInd == 'TC') {
            $("#TECH_REV_LIST").attr('data-mandatory', 'M');
            $("#COM_REV_LIST").attr('data-mandatory', 'M');
        }
    } else {
        $("#TECH_REV_LIST").attr('data-mandatory', 'O');
        $("#COM_REV_LIST").attr('data-mandatory', 'O');
    }
}
function downloadCodeOfConduct(templateId) {
    $("#downloadForm").attr("action", "downloadCodeOfConduct");
    $("#downloadForm").attr("target", "_blank");
    $("#templateId").val(templateId);
    $("#downloadForm").submit();
}
function validateCodeFlag(ele) {
    var value = $("#" + ele).val();
    if (value == "Y") {
        $("#MODIFICATION").attr('data-mandatory', "M");
        $('.lblMandMODIFICATION').hide();
    } else {
        $("#MODIFICATION").attr('data-mandatory', "O");
        $('.lblMandMODIFICATION').show();
    }
}
function downloadXlsxFile(gridId, selectType) {

    selectType = 'selected';
    // var exportType = $('#export' + gridId).val();
    var labelObjec = {};
    var exportType = 'Xlsx';
    alert(selectType + ":::exportType:::" + exportType);
    if (exportType != null) {
        if (selectType != null && selectType == 'selected') {
// for selected export
            var exportJson = {};
            exportJson['headers'] = fieldsdata;
            var selectedRowsData = [];
            var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
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
                    selectedRowsData.push($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));
                }
                exportJson['data'] = selectedRowsData;
                $('#downloadDatajsonData').val(JSON.stringify(exportJson));
                processExportRequestFile(gridId, exportType);
            }// end if
            else if (selectedrowindexes == 0) {
                var message = labelObjec['Please select an option to process'] != null ? labelObjec['Please select an option to process'] : "Please select an option to process";
                $("#dialog").html(message + ".");
                $("#dialog").dialog({resizable: false,
                    title: (labelObjec['Message'] != null ? labelObjec['Message'] : "Message"),
                    modal: true,
                    height: 120,
                    minWidth: 300,
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: (labelObjec['Ok'] != null ? labelObjec['Ok'] : "Ok"),
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




        } else {
// for all data export 
// alert("for all data export");
            $("#selectType").val(selectType);
            $('#' + gridId).jqxGrid('selectallrows');
            var rowsData = $('#' + gridId).jqxGrid('getdisplayrows');
            var exportJson = {};
            exportJson['headers'] = fieldsdata;
            exportJson['data'] = rowsData;
            $('#downloadDatajsonData').val(JSON.stringify(exportJson));
            processExportRequestFile(gridId, exportType);
            //  var data = 
        }

    } else {
        alert(":::exportType::Not selected:");
    }

}
function processExportRequestFile(gridId, exportType) {
    if (exportType == 'Xlsx') {
//$("#downloadData").attr("action");
        $("#downloadData").attr("action", "exportXlsxData");
        $("#downloadData").submit();
    } else if (exportType == 'CSV') {
        $("#downloadData").attr("action", "exportCSVData");
        $("#downloadData").submit();
    } else if (exportType == 'PDF') {
        $("#downloadData").attr("action", "exportPDFData");
        // $("#downloadData").submit();

    }
    $('#' + gridId).jqxGrid('clearselection');
}
function autoComplete(id, sequence) {


    var $el = $("#" + id);
    var el = $("#" + id)[0];
    var dataValue = $el.text();
    if (dataValue) {
//        dataValue = dataValue.toUpperCase();
//        $el.text(dataValue);
        var caretPos = getCaretPosition(el);
        setCaretPosition(el, caretPos);
    }
    var propValRequiredFlag = $("#tbPROPERTY_VALUE1" + sequence).attr("data-requiredflag");
    if (propValRequiredFlag != null && propValRequiredFlag != "" && propValRequiredFlag != undefined && propValRequiredFlag == 'N') {
        $("#tbPROPERTY_UOM" + sequence).val("");
    }
    alert("i am in KeyDown");
    console.log("i am in KeyDown" + dataValue);
//tdPROPERTY_CONCEPT_ID0
//tbPROPERTY_VALUE10
    var reqNumber = $("#REQ_NUMBER").val() != null ? $("#REQ_NUMBER").val() : "";
    var propertyConceptId = $("#tdPROPERTY_CONCEPT_ID" + sequence).text();
    var classConceptId = $("#tdCLASS_CONCEPT_ID" + sequence).text();
    var propertyName = $("#tdPROPERTY_NAME" + sequence).text();
    var classTerm = $("#CLASS_TERM").val();
    if (classTerm == null || classTerm == undefined || classTerm == "") {
        classTerm = $("#TERM").val();
    }
    var recordNumber = $("#RECORD_NO").val() != null ? $("#RECORD_NO").val() : "";
    showDupRecordsCharTyping(recordNumber, id);
    console.log("conceptId:Value::" + propertyConceptId);
    var ddwFunctionName = $('.visionFormCharactristicsImg').find('img').attr('onclick');
    console.log("oncloickFunctionName:::" + ddwFunctionName);
    $.ajax({
        type: "POST",
        url: 'getAutoComplateCharValues',
        data: {
            datavalue: dataValue,
            propertyConceptId: propertyConceptId,
            classConceptId: classConceptId,
            reqNumber: reqNumber,
            classTerm: classTerm,
            propertyName: propertyName,
            ddwFunctionName: ddwFunctionName,
            recordNumber: recordNumber


        },
        traditional: true,
        cache: false,
        success: function (result) {
            //stopLoader();
            console.log("result for id is:::::::::::: " + "#" + id);
            console.log("result for listboxvalue is" + result);
            $("#" + id).autocomplete({

                source: result

            });
        },
        error: function (e) {
            console.log(e);
            sessionTimeout(e);
        }
    });
}
function getCaretPosition(el) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var preRange = range.cloneRange();
    preRange.selectNodeContents(el);
    preRange.setEnd(range.endContainer, range.endOffset);
    return preRange.toString().length;
}

function setCaretPosition(el, pos) {
    var range = document.createRange();
    var selection = window.getSelection();
    var currentPos = 0;

    function walk(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            var nextPos = currentPos + node.length;
            if (pos <= nextPos) {
                range.setStart(node, pos - currentPos);
                range.collapse(true);
                selection.removeAllRanges();
                selection.addRange(range);
                return true;
            }
            currentPos = nextPos;
        } else {
            for (var i = 0; i < node.childNodes.length; i++) {
                if (walk(node.childNodes[i]))
                    return true;
            }
        }
        return false;
    }
    walk(el);
}
function onBlurValidation(id, dataType)
{

    var msg = "";
    var columnValue = $("#" + id).val();
    var regPattern = $("#" + id).attr('data-regex');
    var regMessage = $("#" + id).attr('data-regex-msg');
    // $("#regPattern").val(regPattern);
    console.log("column value::::::" + columnValue);
    console.log("dataType value::::::" + dataType);
    if (columnValue != null && columnValue != '')
    {
        var pattern = new RegExp(regPattern);
        var res = pattern.test(columnValue);
        console.log(res + ":::::8327");
        if (res == false)
        {
            msg = regMessage;
        }
    }
    console.log("column value::::::" + columnValue);
    console.log("dataType value::::::" + dataType);
    if (columnValue != null && columnValue != '')
    {

        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        // var message = "Min Value Should be less than max value ";
//    if ($.trim($("#" + mintb).val()) > $.trim($("#" + maxtb).val())
//            && $.trim($("#" + maxtb).val()).length != 0)
//    {

        console.log(msg + "::::::::::::::::::");
        if (msg !== "" && msg !== null)
        {
            msg = (labelObject[msg] != null ? labelObject[msg] : msg);
            var dialogSplitMessage = dialogSplitIconText(msg, "false");
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({resizable: false,
                modal: true,
                title: (labelObject['Error'] != null ? labelObject['Error'] : 'Error'),
                textAlign: 'center',
                minWidth: 300,
                maxWidth: 'auto',
                height: 'auto',
                minHeight: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            //$(this).html("");
                            $(this).dialog("close");
//                        $("#" + mintb).val('');
//                        $("#" + mintb).focus();
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


}
function onChangeTestCertificate(ele)
{
    var testCert = $("#TEST_CERTIFICATE").val();
    if (testCert != null && testCert == 'Y')
    {
        $("#TEST_CERT_COMMENT").attr('data-mandatory', "M");
        $("#TEST_CERT_COMMENT").attr('readonly', false);
        $('.lblMandTEST_CERT_COMMENT').show();
        $("#TEST_CERT_COMMENT").removeClass("visionInputDisable");
//        $("#TEST_CERT_COMMENT").show();
    } else
    {
        $("#TEST_CERT_COMMENT").val('');
        $("#TEST_CERT_COMMENT").attr('data-mandatory', "O");
        $("#TEST_CERT_COMMENT").attr('readonly', true);
        $('.lblMandTEST_CERT_COMMENT').hide();
//        $("#TEST_CERT_COMMENT").hide();
        $("#TEST_CERT_COMMENT").addClass("visionInputDisable");
    }
}
function onChangeUrgency(ele)
{
    var testCert = $("#URGENCY_IND").val();
    if (testCert != null &&
            (testCert.toUpperCase() == 'U' || testCert.toUpperCase() == 'URGENT'
                    || testCert.toUpperCase() == 'Y' || testCert.toUpperCase() == 'YES'))
    {
        $("#URGENCY_COMMENTS").attr('data-mandatory', "M");
        $("#URGENCY_COMMENTS").attr('readonly', false);
        $('.lblMandURGENCY_COMMENTS').show();
        $("#URGENCY_COMMENTS").removeClass("visionInputDisable");
//        $("#TEST_CERT_COMMENT").show();
    } else
    {
        $("#URGENCY_COMMENTS").val('');
        $("#URGENCY_COMMENTS").attr('data-mandatory', "O");
        $("#URGENCY_COMMENTS").attr('readonly', true);
        $('.lblMandURGENCY_COMMENTS').hide();
//        $("#TEST_CERT_COMMENT").hide();
        $("#URGENCY_COMMENTS").addClass("visionInputDisable");
    }
}

function onChangeLabelTestCmt(ele)
{
    let certficatecolumnId = $(".visionRegisterGenericForm").find('[data-label="Test Certificate Comments"]').attr("id");
    var testCert = $("#" + ele).val();
    if (testCert != null && testCert == 'Y')
    {
        $("#" + certficatecolumnId).attr('data-mandatory', "M");
        $("#" + certficatecolumnId).attr('readonly', false);
        $('.lblMand' + certficatecolumnId).show();
        $("#" + certficatecolumnId).removeClass("visionInputDisable");
//        $("#TEST_CERT_COMMENT").show();
    } else
    {
        $("#" + certficatecolumnId).val('');
        $("#" + certficatecolumnId).attr('data-mandatory', "O");
        $("#" + certficatecolumnId).attr('readonly', true);
        $('.lblMand' + certficatecolumnId).hide();
//        $("#TEST_CERT_COMMENT").hide();
        $("#" + certficatecolumnId).addClass("visionInputDisable");
    }
}
function onChangeLabelUrgency(ele)
{
    let UrgencycolumnId = $(".visionRegisterGenericForm").find('[data-label="Urgency Comments"]').attr("id");
    var testCert = $("#" + ele).val();
    if (testCert != null &&
            (testCert.toUpperCase() == 'U' || testCert.toUpperCase() == 'URGENT'
                    || testCert.toUpperCase() == 'Y' || testCert.toUpperCase() == 'YES'))
    {

        $("#" + UrgencycolumnId).attr('data-mandatory', "M");
        $("#" + UrgencycolumnId).attr('readonly', false);
        $('.lblMand' + UrgencycolumnId).show();
        $("#" + UrgencycolumnId).removeClass("visionInputDisable");
//        $("#TEST_CERT_COMMENT").show();
    } else
    {
        $("#" + UrgencycolumnId).val('');
        $("#" + UrgencycolumnId).attr('data-mandatory', "O");
        $("#" + UrgencycolumnId).attr('readonly', true);
        $('.lblMand' + UrgencycolumnId).hide();
//        $("#TEST_CERT_COMMENT").hide();
        $("#" + UrgencycolumnId).addClass("visionInputDisable");
    }
}
function fetchCalculateStock(finalData, tabId, dataView)
{
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var setSize = $('#SETSIZE').val();
    var instQnty = $('#INSTALLED_QUANTITY').val();
    var organization = $("#ORGANIZATION_ID").val();
    if (organization != null && organization != '' && organization != undefined && organization == 'ORA') {
        setSize = $("#ORA_CUST_COLUMN34").val();
        instQnty = $("#ORA_CUST_COLUMN36").val();
    }

    if (setSize != null && setSize != '' && instQnty != null && instQnty != '') {
        if (parseInt(setSize) > parseInt(instQnty)) {

            var message = "Installed Quantity Must be Equal or Greater than Set Size";
            //popupValidation(message);
            var setWidth;
            message = (labelObject[message] != null ? labelObject[message] : message);
            var dialogSplitMessage = dialogSplitIconText(message, "false");
            $("#dialog").html(dialogSplitMessage);
            $("#dialog").dialog({resizable: false,
                modal: true,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                textAlign: 'center',
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
            $.ajax({
                type: "POST",
                url: 'calculateStock',
                data: {
                    dataView: dataView,
                    jsonData: finalData,
                    gridId: tabId,
                    panelId: $("#panelId").val(),
                    'STATUS': $("#STATUS").val(),
                    'REQ_NUMBER': $("#REQ_NUMBER").val()
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    stopLoader();
                    console.log("result for listboxvalue is" + result);
                    if (response != null && response != '') {
                        var result = JSON.parse(response);
                        var message = result['Message'];
                        var messageFlag = result['messageFlag'];
                        console.log("message" + message);
                        console.log("messageFlag" + messageFlag);
                        var setWidth;
                        message = (labelObject[message] != null ? labelObject[message] : message);
                        var dialogSplitMessage = dialogSplitIconText(message, messageFlag);
                        $("#dialog").html(dialogSplitMessage);
                        $("#dialog").dialog({resizable: false,
                            modal: true,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                            textAlign: 'center',
                            minWidth: 300,
                            maxWidth: 'auto',
                            height: 'auto',
                            minHeight: 'auto',
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {
//                                        tabOperation(tabId, 'refresh');

                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        if (tabId != null && tabId.indexOf("ERP") > -1) {
                                            fetchErpTab(tabId, '');
                                        } else {
                                            fetchTabData(tabId, '');
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
                    console.log(e);
                    sessionTimeout(e);
                }
            });
        }
    }

    stopLoader();
}
function updateValInMrpTab(finalData, reOrderPoint, maxStockVal, mrpType, criticality)
{
    $.ajax({
        type: "POST",
        url: "updateMRPTab",
        data: {
            jsonData: finalData,
            reOrderPoint: reOrderPoint,
            maxStockVal: maxStockVal,
            mrpType: mrpType,
            criticality: criticality
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
function onChangeSabicFunction(ele) {
    var onChangeQmProcAct = $("#QMPUR").val();
    var onChangeReqShelf = $("#REQ_SHELF_LIFE_IND").val();
    if (onChangeQmProcAct != null && onChangeQmProcAct.toUpperCase() == 'Y')
    {
        $("#SSQSS").attr('data-mandatory', "M");
        $("#SSQSS").attr('readonly', false);
        $('.lblMandSSQSS').show();
        $("#SSQSS").removeClass("visionInputDisable");
        $("#QZGTP").attr('data-mandatory', "O");
        $("#QZGTP").attr('readonly', true);
        $('.lblMandQZGTP').hide();
        $("#QZGTP").addClass("visionInputDisable");
        $("#SSQSS").parent("th").prev().addClass("labelMandColorRed");
        $('#ddSSQSS').show();
        $('#ddQZGTP').show();
    } else if (onChangeQmProcAct != null && (onChangeQmProcAct.toUpperCase() == 'N' || onChangeQmProcAct.toUpperCase() == ''))
    {
        $("#SSQSS").attr('data-mandatory', "O");
        $("#SSQSS").attr('readonly', true);
        $("#SSQSS").attr('value', "");
        $('.lblMandSSQSS').hide();
        $("#SSQSS").addClass("visionInputDisable");
        $("#QZGTP").attr('data-mandatory', "O");
        $("#QZGTP").attr('readonly', true);
        $('.lblMandQZGTP').hide();
        $("#QZGTP").addClass("visionInputDisable");
        $("#SSQSS").parent("th").prev().removeClass("labelMandColorRed");
        $('#ddSSQSS').hide();
        $('#ddQZGTP').hide();
    } else if (onChangeReqShelf != null && onChangeReqShelf.toUpperCase() == 'Y')
    {
        $("#MHDHB").attr('data-mandatory', "M");
        $("#MHDHB").attr('readonly', false);
        $('.lblMandMHDHB').show();
        $("#MHDHB").removeClass("visionInputDisable");
        $("#MHDRZ").attr('data-mandatory', "M");
        $("#MHDRZ").attr('readonly', false);
        $('.lblMandMHDRZ').show();
        $("#MHDRZ").removeClass("visionInputDisable");
        $("#MHDHB").parent("th").prev().addClass("labelMandColorRed");
        $("#MHDRZ").parent("th").prev().addClass("labelMandColorRed");
    } else if (onChangeReqShelf != null && (onChangeReqShelf.toUpperCase() == 'N' || onChangeReqShelf.toUpperCase() == ''))
    {
        $("#MHDHB").attr('data-mandatory', "O");
        $("#MHDHB").attr('readonly', true);
        $("#MHDHB").attr('value', "");
        $('.lblMandMHDHB').hide();
        $("#MHDHB").addClass("visionInputDisable")
        $("#MHDRZ").attr('data-mandatory', "O");
        $("#MHDRZ").attr('readonly', true);
        $("#MHDRZ").attr('value', "");
        $('.lblMandMHDRZ').hide();
        $("#MHDRZ").addClass("visionInputDisable");
        $("#MHDHB").parent("th").prev().removeClass("labelMandColorRed");
        $("#MHDRZ").parent("th").prev().removeClass("labelMandColorRed");
    }

}
function refreshDecriptionTab(gridId) {
    var basicData = {};
    var basicDataAudit = {};
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
        if (textid != null && textid != 'CREATE_DATE') {

            basicData[textid] = textval;
        }
        if (textid != null) {

            basicDataAudit[textid] = textval;
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
                basicDataAudit[columnsArray[i]] = hiddenVal;
            }

        }


    });
    $.ajax({
        url: 'refresgDescription',
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            jsonData: JSON.stringify(basicData),
            gridId: gridId,
            panelId: $("#panelId").val()
        },
        success: function (response) {
            stopLoader(); //20

            fetchTabData(gridId);
        },
        error: function (e) {

            $("body").css("pointer-events", "auto");
            stopLoader(); //22
            sessionTimeout(e);
        }
    });
}
function spirOperationsProcess(selectedRowDataArray, gridId, operationName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    showLoader();
    $.ajax({
        type: "post",
        url: "spirOperation",
        cache: false,
        data: {
            selectedRowData: JSON.stringify(selectedRowDataArray),
            gridId: gridId,
            operationName: operationName
        },
        traditional: true,
        dataType: 'html',
        success: function (response) {
            stopLoader();
            alert("response::::" + response);
            if (response != null && response != '') {
                var responseObj = JSON.parse(response);
                var dialogSplitMessage = dialogSplitIconText((labelObject[responseObj['message']] != null ? labelObject[responseObj['message']] : responseObj['message']), "Y");
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
                                $("#" + gridId).jqxGrid('updatebounddata');
                                try {
                                    $("#MM_MGR_SPIR_ATTACH_DOCUMENT").jqxGrid('updatebounddata');
                                } catch (e) {
                                }

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


        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
        }

    });
    stopLoader();
}
// for Tabs to Tabs Moving changes
function changeflagFuction() {
    changeflag = false;
    console.log("changeflagFuction -> " + changeflag);
}
function onChangeQmProcActFunction(ele) {
    var onChangeQmProcAct = $("#QMPUR").val();
    if (onChangeQmProcAct != null && onChangeQmProcAct.toUpperCase() == 'Y')
    {
        $("#SSQSS").attr('data-mandatory', "M");
        $("#SSQSS").attr('readonly', false);
        $('.lblMandSSQSS').show();
        $("#SSQSS").removeClass("visionInputDisable");
        $("#QZGTP").attr('data-mandatory', "O");
        $("#QZGTP").attr('readonly', true);
        $('.lblMandQZGTP').hide();
        $("#QZGTP").addClass("visionInputDisable");
        $("#SSQSS").parent("th").prev().addClass("labelMandColorRed");
        $('#ddSSQSS').show();
        $('#ddQZGTP').show();
    } else
    {
        $("#SSQSS").attr('data-mandatory', "O");
        $("#SSQSS").attr('readonly', true);
        $("#SSQSS").val('');
        $('.lblMandSSQSS').hide();
        $("#SSQSS").addClass("visionInputDisable");
        $("#QZGTP").attr('data-mandatory', "O");
        $("#QZGTP").attr('readonly', true);
        $("#QZGTP").val('');
        $('.lblMandQZGTP').hide();
        $('#ddSSQSS').hide();
        $('#ddQZGTP').hide();
        $("#QZGTP").addClass("visionInputDisable");
        $("#SSQSS").parent("th").prev().removeClass("labelMandColorRed");
    }
}
function onChangeReqShelfFunction(ele) {
    var onChangeReqShelf = $("#REQ_SHELF_LIFE_IND").val();
    if (onChangeReqShelf != null && onChangeReqShelf.toUpperCase() == 'Y')
    {
        $("#MHDHB").attr('data-mandatory', "M");
        $("#MHDHB").attr('readonly', false);
        $('.lblMandMHDHB').show();
        $("#MHDHB").removeClass("visionInputDisable");
        $("#MHDRZ").attr('data-mandatory', "M");
        $("#MHDRZ").attr('readonly', false);
        $('.lblMandMHDRZ').show();
        $("#MHDRZ").removeClass("visionInputDisable");
        $("#MHDHB").parent("th").prev().addClass("labelMandColorRed");
        $("#MHDRZ").parent("th").prev().addClass("labelMandColorRed");
    } else
    {
        $("#MHDHB").attr('data-mandatory', "O");
        $("#MHDHB").attr('readonly', true);
        $("#MHDHB").val('');
        $('.lblMandMHDHB').hide();
        $("#MHDHB").addClass("visionInputDisable")
        $("#MHDRZ").attr('data-mandatory', "O");
        $("#MHDRZ").attr('readonly', true);
        $("#MHDRZ").val('');
        $('.lblMandMHDRZ').hide();
        $("#MHDRZ").addClass("visionInputDisable");
        $("#MHDHB").parent("th").prev().removeClass("labelMandColorRed");
        $("#MHDRZ").parent("th").prev().removeClass("labelMandColorRed");
    }

}
function onChangMrpValidation(ele) {

    if ($('#O_MRP_TYPE').val() != $('#DISMM').val()
            || $('#MINBE').val() != $('#O_REORDER_POINT').val()
            || $('#MABST').val() != $('#O_MAX_INV_LEV').val())
    {
        $("#JUSTIFICATION_COMMENTS").attr('data-mandatory', "M");
        $("#JUSTIFICATION_COMMENTS").parent("th").prev().addClass("labelMandColorRed");
        $("#JUSTIFICATION_COMMENTS").removeClass("visionInputDisable");
        $("#JUSTIFICATION_COMMENTS").attr('readonly', false);
    } else {
        $("#JUSTIFICATION_COMMENTS").attr('data-mandatory', "O");
        $("#JUSTIFICATION_COMMENTS").parent("th").prev().removeClass("labelMandColorRed");
        $("#JUSTIFICATION_COMMENTS").addClass("visionInputDisable");
        $("#JUSTIFICATION_COMMENTS").attr('readonly', true);
    }
}
function checkingTabData(selectedGridId, basicData, dataView) {
//    showLoader();
    var dataArray = [];
    if (selectedGridId != null && selectedGridId != '') {
        if (dataView == 'GRID-VIEW') {
            dataArray = $('#' + selectedGridId).jqxGrid('getrows');
        } else {
            var dataObj = {};
            var gridIdHiddenValue = "UPDATE";
            $("table#" + selectedGridId + "_TABLE :input").each(function () {
                var textid = $(this).attr("id");
                var type = $(this).attr("type");
                var textval = $(this).val();
                console.log("textid:::" + textid);
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
                dataObj[textid] = textval;
            });
            dataArray.push(dataObj);
        }

        if (dataArray != null && dataArray.length != 0) {
            $.ajax({
                type: "post",
                url: "checkingTabData",
                cache: false,
                data: {'basicData': JSON.stringify(basicData),
                    gridId: selectedGridId,
                    dataArray: JSON.stringify(dataArray)
                },
                traditional: true,
                dataType: 'html',
                success: function (response) {
                    stopLoader();
                    if (response != null && response != '') {
                        var resultObj = JSON.parse(response);
                        if (resultObj != null) {
                            var messageFlag = resultObj['messageFlag'];
                            var dialogSplitMessage = dialogSplitIconText(resultObj['Message'], "Y");
                            $("#dialog").html(dialogSplitMessage);
                            $("#dialog").dialog({resizable: false,
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
                                            if (messageFlag) {
                                                fetchTabData(selectedGridId);
                                            }
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

                },
                error: function (e) {
                    stopLoader();
                    sessionTimeout(e);
                }

            });
        } else {

        }
    }
}
function massDataValidations(selectedRowDataArray, gridId, operationName) {
    var resultObj = {};
    var currentSelectedRow;
    var selectedRowsData = [];
    var errorMsg = "";
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var selectedrowindexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
    if (selectedRowDataArray.length > 0)
    {

        $.ajax({
            type: "post",
            url: "massValidateData",
            cache: false,
            data: {'jsonData': JSON.stringify(selectedRowDataArray),
                'gridId': gridId

            },
            traditional: true,
            dataType: 'html',
            async: false,
            success: function (response) {
                //  stopLoader();
                gridValidationMessage();
                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
            }
        });
    } else {
        var msg = (labelObject['Please select an option to process'] != null ? labelObject['Please select an option to process'] : 'Please select an option to process');
        var dialogSplitMessage = dialogSplitIconText(msg, "Y");
        $("#errrordialog").html(dialogSplitMessage);
        $("#errrordialog").dialog({resizable: false,
            modal: true,
            title: "Message",
            height: 'auto',
            minHeight: 'auto',
            minWidth: 350,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                },
                {
                    text: labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel',
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        //   gridSearchItems();
                        $('#' + gridId).jqxGrid('updatebounddata');
                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                        $("#" + gridId).jqxGrid('clearselection');
//                        $("#" + gridId).jqxGrid('clearfilters');
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

    return resultObj;
}
function gridValidationMessage(msg) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var errorMsg = "";
    if (msg != null && msg != '')
    {
        errorMsg = msg;
    } else
    {
        errorMsg = "Please view the Validation(s) messages under Comments field";
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
function massDataProcessRequest(gridId, operation) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedRowDataArray = [];
    var selectedRowDataArrayCreate = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes != null && selectedrowindexes.length > 0)
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
            var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
            if (selectedRowData != null) {
                selectedRowDataArray.push(selectedRowData);
                if (selectedRowData['IMPORT_VALIDATION_COMMENTS'] == 'OK'
                        || selectedRowData['IMPORT_VALIDATION_COMMENTS'] == 'Ok'
                        || selectedRowData['IMPORT_VALIDATION_COMMENTS'] == 'ok'
                        ) {
                    selectedRowDataArrayCreate.push(selectedRowData);
                    //IMPORT_VALIDATION_COMMENTS
                }
            }

        }
        if (selectedRowDataArray != null && selectedRowDataArray.length != 0) {
            if (operation != null && operation == 'VALIDATE') {
                massDataValidations(selectedRowDataArray, gridId, operation);
            } else if (operation != null && operation == 'REGISTER') {
                massDataProcessCreate(selectedRowDataArrayCreate, gridId, operation);
            }
        } else {
            var msg = (labelObject['Please select an option to process'] != null ? labelObject['Please select an option to process'] : 'Please select an option to process');
            var dialogSplitMessage = dialogSplitIconText(msg, "Y");
            $("#errrordialog").html(dialogSplitMessage);
            $("#errrordialog").dialog({resizable: false,
                modal: true,
                title: "Message",
                height: 'auto',
                minHeight: 'auto',
                minWidth: 350,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {

                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    },
                    {
                        text: labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel',
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            //   gridSearchItems();
                            $('#' + gridId).jqxGrid('updatebounddata');
                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                            $("#" + gridId).jqxGrid('clearselection');
//                            $("#" + gridId).jqxGrid('clearfilters');
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
    } else {
        var msg = (labelObject['Please select an option to process'] != null ? labelObject['Please select an option to process'] : 'Please select an option to process');
        var dialogSplitMessage = dialogSplitIconText(msg, "Y");
        $("#errrordialog").html(dialogSplitMessage);
        $("#errrordialog").dialog({resizable: false,
            modal: true,
            title: "Message",
            height: 'auto',
            minHeight: 'auto',
            minWidth: 350,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                },
                {
                    text: labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel',
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        //   gridSearchItems();
                        $('#' + gridId).jqxGrid('updatebounddata');
                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                        $("#" + gridId).jqxGrid('clearselection');
//                        $("#" + gridId).jqxGrid('clearfilters');
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
}
function massDataProcessCreate(selectedRowDataArray, gridId, operationName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (selectedRowDataArray != null && selectedRowDataArray.length != 0) {
        $.ajax({
            type: "post",
            url: "massSaveRecord",
            cache: false,
            data: {
                jsonData: JSON.stringify(selectedRowDataArray),
                gridId: gridId,
                panelId: $('#panelId').val(),
                formId: $('#formId').val(),
                tableName: $('#tableName').val(),
                defaultValues: $('#defaultValues').val(),
                dropVal: "Create"
            },
            traditional: true,
            dataType: 'html',
            success: function (response) {
                alert("response::::" + response);
                if (response != null && response != '') {
                    var responseObj = JSON.parse(response);
                    var dialogSplitMessage = dialogSplitIconText((labelObject[responseObj['message']] != null ? labelObject[responseObj['message']] : responseObj['message']), "Y");
                    $("#dialog").html(responseObj.resultMessage);
                    $("#dialog").dialog({resizable: false,
                        modal: true,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
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
                                    $("#" + gridId).jqxGrid('updatebounddata');
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


            },
            error: function (e) {
                sessionTimeout(e);
            }

        });
    } else {
        var msg = (labelObject['Please validate before processing for Catalogue'] != null ? labelObject['Please validate before processing for Catalogue'] : 'Please validate before processing for Catalogue');
        var dialogSplitMessage = dialogSplitIconText(msg, "Y");
        $("#errrordialog").html(dialogSplitMessage);
        $("#errrordialog").dialog({resizable: false,
            modal: true,
            title: "Message",
            height: 'auto',
            minHeight: 'auto',
            minWidth: 350,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {

                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                },
                {
                    text: labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel',
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        //   gridSearchItems();
                        $('#' + gridId).jqxGrid('updatebounddata');
                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                        $("#" + gridId).jqxGrid('clearselection');
//                        $("#" + gridId).jqxGrid('clearfilters');
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

}
function downloadZip(gridId, zipParams) {
    $("#downloadForm").attr("action", "exportZipData");
    $("#downloadForm").attr("target", "_blank");
    var selectedDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes != null && selectedrowindexes.length != 0) {
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
                selectedDataArray.push(selectedRowData);
            }
        }
    }
    if (selectedDataArray != null && selectedDataArray.length != 0) {
        $("#templateId").val(JSON.stringify(selectedDataArray));
        $("#zipParams").remove();
        $("#downloadForm").append("<input type='hidden' name='zipParams' id='zipParams' value='" + zipParams + "'/>");
        $("#downloadForm").submit();
    }

}
function viewTreeStructure(gridId, treeId, targetBlank) {
    $("#treeId").remove();
    $("#outOfOffcForm").append("<input type='hidden' name='treeId' id='treeId' value='" + treeId + "'/>");
    $("#outOfOffcForm").attr("action", "getGenericTree");
    if (targetBlank != null && targetBlank != '' && targetBlank == 'blank') {
        $("#outOfOffcForm").attr("target", "_blank");
        $("#outOfOffcForm").append("<input type='hidden' name='headerFlag' id='headerFlag' value='Y'/>");
    }
    $("#outOfOffcForm").submit();
}
function viewVendTreeStructure(gridId, treeId, targetBlank) {
    $("#treeId").remove();
    $("#extTreeParams").remove();
    $("#urlSubmitForm").find('input').remove();
    var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', 0);
    $("#urlSubmitForm").append("<input type='hidden' name='treeId' id='treeId' value='" + treeId + "'/>");
    $("#urlSubmitForm").append("<input type='hidden' name='extTreeParams' id='extTreeParams' value='" + JSON.stringify(selectedRowData) + "'/>");
    $("#urlSubmitForm").attr("action", "getGenericTreeOpt");
    if (targetBlank != null && targetBlank != '' && targetBlank == 'blank') {
        $("#urlSubmitForm").attr("target", "_blank");
        $("#urlSubmitForm").append("<input type='hidden' name='headerFlag' id='headerFlag' value='Y'/>");
    }
    var csrfToken = $("input[name='_csrf']").val();
    if (csrfToken != null && csrfToken != '') {
        var csrf = "<input type='hidden' name='_csrf' value='" + csrfToken + "'/>";
        $("#urlSubmitForm").append(csrf);
    }
    $("#urlSubmitForm").submit();
}

function viewAttachment(gridId, index, tableName) {
    var data = $('#' + gridId).jqxGrid('getrowdata', index);
    if (data != null) {
        var sequenceNo = data['SEQUENCE_NO'];
        if (sequenceNo != null && sequenceNo != '') {
            var url = "viewDocuments?sequenceNo=" + sequenceNo;
            var csrfToken = $("input[name='_csrf']").val();
            if (csrfToken != null && csrfToken != '') {
                url += "&_csrf=" + csrfToken;
            }

            var tableNameVal = tableName || $("#tableName").val();
            if (tableNameVal != null) {
                url += "&tableName=" + tableNameVal;
            }

            var recordNo = $("#RECORD_NO").val();
            if (recordNo != null) {
                url += "&recordNo=" + recordNo;
            }

            var requestNumber = $("#REQ_NUMBER").val();
            if (requestNumber != null) {
                url += "&requestNumber=" + requestNumber;
            }

            var specModelNo = $("#SPEC_MODEL_NO").val();
            if (specModelNo != null) {
                url += "&specModelNo=" + specModelNo;
            }

            var spirRecId = $("#SPIR_REC_ID").val();
            if (spirRecId != null) {
                url += "&spirRecId=" + spirRecId;
            }

            var masterId = $("#mastergridid").val();
            if (masterId != null && masterId != '') {
                var selectedRowIndex = $('#' + masterId).jqxGrid('getselectedrowindex');
                recordNo = $('#' + masterId).jqxGrid('getcellvalue', selectedRowIndex, "RECORD_NO");
                if (recordNo != null) {
                    url += "&recordNo=" + recordNo;
                }
                requestNumber = $('#' + masterId).jqxGrid('getcellvalue', selectedRowIndex, "REQ_NUMBER");
                if (requestNumber != null) {
                    url += "&requestNumber=" + requestNumber;
                }
                specModelNo = $('#' + masterId).jqxGrid('getcellvalue', selectedRowIndex, "SPEC_MODEL_NO");
                if (specModelNo != null) {
                    url += "&specModelNo=" + specModelNo;
                }
                spirRecId = $('#' + masterId).jqxGrid('getcellvalue', selectedRowIndex, "SPIR_REC_ID");
                if (spirRecId != null) {
                    url += "&spirRecId=" + spirRecId;
                }
            }
            window.open(url, '_blank');
        }
    }
}
//function viewAttachment(gridId, index, tableName) {
//    var data = $('#' + gridId).jqxGrid('getrowdata', index);
//    if (data != null) {
//        var sequenceNo = data['SEQUENCE_NO'];
//        if (sequenceNo != null && sequenceNo != '') {
//            $("#urlSubmitForm").attr("action", "viewDocuments");
//            $("#urlSubmitForm").attr("target", "_blank");
//            $("#urlSubmitForm").find('input').remove();
//            var csrfToken = $("input[name='_csrf']").val();
//            if (csrfToken != null && csrfToken != '') {
//                var csrf = "<input type='hidden' name='_csrf' value='" + csrfToken + "'/>";
//                $("#urlSubmitForm").append(csrf);
//            }
//
//            var inputType = "<input type='hidden' name='sequenceNo' value='" + sequenceNo + "'/>";
//            $("#urlSubmitForm").append(inputType);
//
//            if (tableName == null) {
//                var tableName = $("#tableName").val();
//            }
//            if (tableName != null) {
//                var TableName = "<input type='hidden' name='tableName' value='" + tableName + "'/>";
//                $("#urlSubmitForm").append(TableName);
//            }
//
//            var recordNo = $("#RECORD_NO").val();
//            if (recordNo != null) {
//                var RecordNo = "<input type='hidden' name='recordNo' value='" + recordNo + "'/>";
//                $("#urlSubmitForm").append(RecordNo);
//            }
//            var requestNumber = $("#REQ_NUMBER").val();
//            if (requestNumber != null) {
//                var RequestNumber = "<input type='hidden' name='requestNumber' value='" + requestNumber + "'/>";
//                $("#urlSubmitForm").append(RequestNumber);
//            }
//            var specModelNo = $("#SPEC_MODEL_NO").val();
//            if (specModelNo != null) {
//                var specModelNo = "<input type='hidden' name='specModelNo' value='" + specModelNo + "'/>";
//                $("#urlSubmitForm").append(specModelNo);
//            }
//            var spirRecId = $("#SPIR_REC_ID").val();
//            if (spirRecId != null) {
//                var spirRecId = "<input type='hidden' name='spirRecId' value='" + spirRecId + "'/>";
//                $("#urlSubmitForm").append(spirRecId);
//            }
//
//            var masterId = $("#mastergridid").val();
//            try {
//                var selectedRowIndex = currentSelectedRow;
//            } catch (e) {
//            }
//            if (masterId != null && masterId != '' && masterId != undefined) {
//                var selectedrowindex = $('#' + masterId).jqxGrid('getselectedrowindex');
//
//                recordNo = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "RECORD_NO");
//                $("#recordNo").remove();
//                if (recordNo != null) {
//                    var RecordNo = "<input type='hidden' name='recordNo' id='recordNo' value='" + recordNo + "'/>";
//                    $("#urlSubmitForm").append(RecordNo);
//                }
//                $("#requestNumber").remove();
//                requestNumber = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "REQ_NUMBER");
//                if (requestNumber != null) {
//                    var RequestNumber = "<input type='hidden' name='requestNumber' id='requestNumber' value='" + requestNumber + "'/>";
//                    $("#urlSubmitForm").append(RequestNumber);
//                }
//                $("#specModelNo").remove();
//                var specModelNo = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "SPEC_MODEL_NO");
//                if (specModelNo != null) {
//                    var SpecModelNo = "<input type='hidden' name='specModelNo' id='specModelNo' value='" + specModelNo + "'/>";
//                    $("#urlSubmitForm").append(SpecModelNo);
//                }
//                $("#spirRecId").remove();
//                var spirRecId = $('#' + masterId).jqxGrid('getcellvalue', selectedrowindex, "SPIR_REC_ID");
//                if (spirRecId != null) {
//                    var SpirRecId = "<input type='hidden' name='spirRecId' id='spirRecId' value='" + spirRecId + "'/>";
//                    $("#urlSubmitForm").append(SpirRecId);
//                }
//            }
//
//
//            $("#urlSubmitForm").submit();
//        }
//    }
//}
function showBrowseIdButton(tabId) {

//    try {
//                var fullScreenViewFlag = $("#extendedFullScreenViewFlag").val();
//                if (fullScreenViewFlag != null && fullScreenViewFlag != 'undefined'
//                        && fullScreenViewFlag != undefined && fullScreenViewFlag != "" && fullScreenViewFlag == "Y")
//                {
//                    toggleFullScreen();
//                }
//            } catch (e) {
//
//            }

    var param;
    var browseId = 'visionColFileId';
    var dataView = "GRID-VIEW"

    try {
//        $("#" + tabId).jqxGrid('endcelledit', 0, "ATTACH_TYPE", false);
        var lastcelleditfield = $("#" + tabId).attr('data-last-ed-field');
        var lastcelleditrow = $("#" + tabId).attr('data-last-ed-row');
        $("#" + tabId).jqxGrid('endcelledit', lastcelleditrow, lastcelleditfield, false);
    } catch (e) {
    }
    var valueLov = $('#' + tabId).jqxGrid('getcellvalue', 0, "ATTACH_TYPE");
    if (valueLov == "" || valueLov == null || valueLov === 'undefined')
    {

        $("#dialog").html("Please select Attachment Type");
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            width: 300,
            height: 135,
            fluid: true,
            buttons: [
                {
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }
            ],
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
        return;
    }
    $.ajax({
        url: 'getAttachExtFile',
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            attachType: valueLov,
            browseId: browseId,
            gridId: tabId

        },
        success: function (response) {
            stopLoader(); //20
//              try {
//                var fullScreenViewFlag = $("#extendedFullScreenViewFlag").val();
//                if (fullScreenViewFlag != null && fullScreenViewFlag != 'undefined'
//                        && fullScreenViewFlag != undefined && fullScreenViewFlag != "" && fullScreenViewFlag == "Y")
//                {
//                    toggleFullScreen();
//                }
//            } catch (e) {
//
//            }

            try {
                if (response != null && response != '' && response != undefined) {
                    $("div.visionCoFileImage").html(response);
                }
            } catch (e) {

            }
            showBrowseButton(param, tabId, dataView, response);
        },
        error: function (e) {

            $("body").css("pointer-events", "auto");
            stopLoader(); //22
            sessionTimeout(e);
        }
    });
}
function showgridBrowseButton(tabId) {

//    try {
//                var fullScreenViewFlag = $("#extendedFullScreenViewFlag").val();
//                if (fullScreenViewFlag != null && fullScreenViewFlag != 'undefined'
//                        && fullScreenViewFlag != undefined && fullScreenViewFlag != "" && fullScreenViewFlag == "Y")
//                {
//                    toggleFullScreen();
//                }
//            } catch (e) {
//
//            }

    var param;
    var browseId = 'visionColFileId';
    var dataView = "GRID-VIEW"

    try {
//        $("#" + tabId).jqxGrid('endcelledit', 0, "ATTACH_TYPE", false);
        var lastcelleditfield = $("#" + tabId).attr('data-last-ed-field');
        var lastcelleditrow = $("#" + tabId).attr('data-last-ed-row');
        $("#" + tabId).jqxGrid('endcelledit', lastcelleditrow, lastcelleditfield, false);
    } catch (e) {
    }
    var valueLov = $('#' + tabId).jqxGrid('getcellvalue', 0, "ATTACH_TYPE");
    if (valueLov == "" || valueLov == null || valueLov === 'undefined')
    {

        $("#dialog").html("Please select Attachment Type");
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
            modal: true,
            width: 300,
            height: 135,
            fluid: true,
            buttons: [
                {
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }
            ],
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
        return;
    }
    $.ajax({
        url: 'getAttachExtFile',
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            attachType: valueLov,
            browseId: browseId,
            gridId: tabId

        },
        success: function (response) {
            stopLoader(); //20
//              try {
//                var fullScreenViewFlag = $("#extendedFullScreenViewFlag").val();
//                if (fullScreenViewFlag != null && fullScreenViewFlag != 'undefined'
//                        && fullScreenViewFlag != undefined && fullScreenViewFlag != "" && fullScreenViewFlag == "Y")
//                {
//                    toggleFullScreen();
//                }
//            } catch (e) {
//
//            }

            try {
                if (response != null && response != '' && response != undefined) {
                    $("div.visionCoFileImage").html(response);
                }
            } catch (e) {

            }
            showClusterBrowseButton(param, tabId, dataView, response);
        },
        error: function (e) {

            $("body").css("pointer-events", "auto");
            stopLoader(); //22
            sessionTimeout(e);
        }
    });
}
function checkingActions(id, index, columnName) {
    var successflag = true;
    $("#selection_" + index).attr("checked", true);
    $("#select_all").prop("indeterminate", true);
    var totalDataCount = $("#" + columnName + "_" + index).attr("data-totalcount");
    var selectedVal = $("#" + columnName + "_" + index).val();
    if (selectedVal != null && selectedVal == 'MASTER') {
        $("#" + columnName + "_0").val("DELETE");
        $("#hidden_" + columnName + "_0").val("DELETE");
        $("#selection_0").attr("checked", true);
        if (totalDataCount != null && parseInt(totalDataCount) != 0) {
            for (var i = 1; i < parseInt(totalDataCount); i++) {

                if (i != index && $("#" + columnName + "_" + i).val() != null
                        && $("#" + columnName + "_" + i).val() == 'MASTER'
                        ) {
                    successflag = false;
                    var oldVal = $("#hidden_" + columnName + "_" + index).val();
                    $("#" + columnName + "_" + index).val(oldVal);
                    var actionMessage = "Master already selected for other record in this Group";
                    openSubmitActionDialog(actionMessage);
                    break;
                }

            }

        }

    } else if (selectedVal != null && selectedVal == 'NON DUPLICATE') {
        if (totalDataCount != null && parseInt(totalDataCount) != 0) {
            var supersedeCount = 1;
            for (var i = 1; i < parseInt(totalDataCount); i++) {
                if (i != index && $("#" + columnName + "_" + i).val() == 'NON DUPLICATE') {
                    supersedeCount++;
                }

            }
            if (supersedeCount == (parseInt(totalDataCount) - 1)) {

                var oldVal = $("#hidden_" + columnName + "_" + index).val();
                $("#" + columnName + "_" + index).val(oldVal);
                successflag = false;
                var actionMessage = "One master should be available in this group";
                openSubmitActionDialog(actionMessage);
            }

        }
    }
    if (index != 0) {
        var currentChangeCount = 0;
//    if (selectedVal != null && (selectedVal == 'NON DUPLICATE' || selectedVal == 'REGISTERED')) {
        if (totalDataCount != null && parseInt(totalDataCount) != 0) {
            for (var i = 1; i < parseInt(totalDataCount); i++) {
                if ($("#" + columnName + "_" + i).val() != null && ($("#" + columnName + "_" + i).val() != 'MASTER')) {

                    currentChangeCount++;
                }
            }
            if (currentChangeCount == (parseInt(totalDataCount) - 1)) {
                if ($("#" + columnName + "_0").val() == 'DELETE') {
                    $("#" + columnName + "_0").val("REGISTERED");
                    $("#hidden_" + columnName + "_0").val("REGISTERED");
                    $("#selection_0").attr("checked", true);
                }
            }

        }
    }
    if (successflag) {
        $("#hidden_" + columnName + "_" + index).val(selectedVal);
    }
}
function openSubmitActionDialog(actionMessage) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var dialogSplitMessage = dialogSplitIconText((labelObject[actionMessage] != null ? labelObject[actionMessage] : actionMessage), false);
    $("#messagedialog5").html(dialogSplitMessage);
    $("#messagedialog5").dialog({resizable: false,
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
                    $("#messagedialog5").html("");
                    $("#messagedialog5").dialog("destroy");
                    $("#messagedialog5").dialog("close");
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
            $("#messagedialog5").html("");
            $("#messagedialog5").dialog("destroy");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
            //                                    location.reload();

        }
    });
}
function updateDuplicateAction() {
// update first record action
    var basicDataStr = $("#basicDataObjHidden").val();
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var basicData = JSON.parse(basicDataStr);
    var datasize = $("#updateActionButton").attr("data-datasize");
    var selectedRowData = [];
    if (datasize != null && parseInt(datasize) > 1) {
        for (var i = 0; i < parseInt(datasize); i++) {
            var selectedRowDataObj = {};
            if ($("#selection_" + i).is(':checked')) {
                selectedRowDataObj['AUDIT_ID'] = $("#hidden_AUDIT_ID_" + i).val();
                selectedRowDataObj['CONSOLIDATION_ACTION'] = $("#CONSOLIDATION_ACTION_" + i).val();
                selectedRowData.push(selectedRowDataObj);
            }
        }

    }
    if (selectedRowData != null && selectedRowData.length != 0) {
        $.ajax({
            type: 'post',
            url: 'updateDuplicateAction',
            async: true,
            data: {selectedRowData: JSON.stringify(selectedRowData)},
            success: function (response) {
                stopLoader();
                var actionsObjStr = $("#selectedGridActions").val();
                if (response != null && response == 'success') {
                    if (actionsObjStr != null && actionsObjStr != '') {
                        var actionsObj = JSON.parse(actionsObjStr);
                        if (actionsObj != null) {
                            var dialogSplitMessage = "Action updated succesfully";
                            $("#dialog").html((labelObject[dialogSplitMessage] != null ? labelObject[dialogSplitMessage] : dialogSplitMessage));
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
                                            if (datasize != null && parseInt(datasize) > 1) {
                                                for (var i = 0; i < parseInt(datasize); i++) {
                                                    var selectedRowDataObj = {};
                                                    if ($("#selection_" + i).is(':checked')) {
                                                        var columnName = "CONSOLIDATION_ACTION_" + i;
                                                        var updateAction = $("#" + columnName).val();
                                                        delete actionsObj[columnName];
                                                        actionsObj[columnName] = updateAction;
                                                    }
                                                }

                                            }

                                            $("#selectedGridActions").val(JSON.stringify(actionsObj));
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
                }
            },
            error: function (e)
            {
                sessionTimeout(e);
            }

        });
    } else {
        openSubmitActionDialog("Please select an option to process");
    }

}
function compareresultsPagination(selectedButton, totalPages) {
    showLoader();
    var selectedPageNum = 0;
    var selectedPrev = selectedPageNum;
    var selectedNext = selectedPageNum;
    console.log(totalPages + ":::selectedPageNum::::" + selectedPageNum);
    var currentPageStr = $("#currentPage").val();
    var currentPage = parseInt(currentPageStr);
    console.log("currentPage:::::" + currentPage);
    if (selectedButton != null && selectedButton == 'P') {
// selecting previoues
        console.log("You Selected << Button");
        selectedPageNum = currentPage - 1;
    }
    if (selectedButton != null && selectedButton == 'N') {
// clicked next button
        console.log("You Selected >> Button");
        selectedPageNum = currentPage + 1;
    }
    var pagesize = $("#showRows").val();
    console.log("selectedPageNum::::" + selectedPageNum);
    console.log("pagesize::::" + pagesize);
    var recordstartindex = (selectedPageNum - 1) * pagesize + 1;
    //recordstartindex, pagesize, recordendindex
    var basicDataStr = $("#basicDataObjHidden").val();
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var basicData = JSON.parse(basicDataStr);
    if (selectedPageNum != 0 && selectedPageNum != (totalPages + 1) && selectedPageNum != currentPage) {
        $("#currentPage").val(selectedPageNum);
        showDuplicatesGrid(basicData, nestedGridObj, recordstartindex, pagesize, 30);
    }
    stopLoader();
}
function showrows() {
    showLoader();
    var basicDataStr = $("#basicDataObjHidden").val();
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var basicData = JSON.parse(basicDataStr);
    var pagesize = $("#showRows").val();
    console.log("pagesize:::showrows::::" + pagesize);
    $("#currentPage").val(1);
    showDuplicatesGrid(basicData, nestedGridObj, 0, pagesize, 30);
    stopLoader();
}
function showDuplicatesGrid(basicData, gridResultObj, recordstartindex, pagesize, recordendindex, buttonArray, matchedClassFlag) {
    showLoader();
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (recordstartindex != null && parseInt(recordstartindex) != 0) {
        recordstartindex = parseInt(recordstartindex) - 1;
    }
    var paginationHidden = $("#paginationHidden").val();
    var gridPropObj = gridResultObj['gridPropObj'];
    var data = {
        gridId: gridResultObj['gridId'],
        colsArray: JSON.stringify(gridResultObj['columnsArray']),
        totalColumnsArray: JSON.stringify(gridResultObj['totalColumnsArray']),
        gridEditFlag: gridPropObj['GRID_EDIT_FLAG'],
        gridPropertyObj: JSON.stringify(gridPropObj),
        pagesizeoptions: JSON.stringify(gridPropObj['pagesizeoptions']),
        selectionmode: gridPropObj['SELECTION_TYPE'],
        tableName: gridPropObj['GRID_REF_TABLE'],
        columns: JSON.stringify(gridResultObj['columnListObj']),
        basicData: JSON.stringify(basicData),
        selectedCols: $("#selectedCols").val(),
        recordstartindex: recordstartindex,
        pagesize: pagesize,
        recordendindex: recordendindex,
        currentPage: $("#currentPage").val(),
        ModelSpecDuplicateFlag: $("#ModelSpecDuplicateChecFlag").val()
    };
    $.ajax({
        type: 'post',
        url: 'duplicatecheckGridResults',
        async: true,
        data: data,
        success: function (response) {
            stopLoader();
            stopLoader();
            if (response != null) {
                var gridPropObj = gridResultObj['gridPropObj'];
                var gridinitParamObj = gridPropObj['gridInitParamObj'];
                var DuplicateDialogWidthAndHeight = gridinitParamObj['uuu_DuplicateGridDialogWidthHeight'];
                var widthHeightArray = {};
                var height;
                var width;
                if (DuplicateDialogWidthAndHeight != null && DuplicateDialogWidthAndHeight != '' && DuplicateDialogWidthAndHeight != undefined) {
                    widthHeightArray = JSON.parse(DuplicateDialogWidthAndHeight);
                    height = widthHeightArray['height'];
                    width = widthHeightArray['width'];
                } else {
                    height = 600;
                    width = 1200;
                }

                if (buttonArray != null && buttonArray != undefined) {
                    $("#duplicateCheckForm").dialog({resizable: false,
                        title: (labelObject['Duplicates'] != null ? labelObject['Duplicates'] : 'Duplicates'),
                        modal: true,
                        height: height,
                        // commented by Ajay minHeight: 'auto',
//                        maxHeight: 550,
                        width: width,
                        fluid: true,
//                    draggable: false,
//                    resizable: false,
                        buttons: buttonArray,
                        open: function () {
                            $("#matrixGridDivId").show();
                            $("#my-button-id-yes").hide();
                            $("#my-button-id-no").hide();
                            $("#my-button-id-ok").hide();
                            $("#dataattr").hide();
                            $("#matrixGridId").html("");
                            if (matchedClassFlag) {

                                $("#my-button-id-yes").hide();
                                $("#my-button-id-ok").show();
                            } else {
                                $("#my-button-id-yes").show();
                                $("#my-button-id-no").show();
                            }





                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                        $(".visionHeaderMain").css("z-index", "999");
//                        $(".visionFooterMain").css("z-index", "999");
                            $(this).closest(".ui-dialog").addClass("duplicateCheckFormPopup");
                        },
                        beforeClose: function (event, ui)
                        {
//                        $("#duplicateCheckForm").dialog("close");
                            try {
                                $("#duplicateCheckForm").dialog("destroy");
                            } catch (e) {

                            }
                            try {
                                $("#duplicateCheckForm").remove();
                            } catch (e) {

                            }
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                }


                var resultObj = JSON.parse(response);
                $("#matrixGridDivId").show();
                $("#matrixGridId").html(resultObj['tabString']); //tabString
                var recordCount = resultObj['recordCount'];
                var dataSize = resultObj['dataSize'];
                $("#updateActionButton").attr("data-datasize", dataSize);
                var actionsObj = resultObj['actionsObj'];
                if (actionsObj != null) {
                    $("#selectedGridActions").val(JSON.stringify(actionsObj));
                }
                var showRows = $("#showRows").val();
                var totalPages = recordCount / showRows;
                var pageIndex = recordstartindex;
                if (recordstartindex == 0) {
                    $("#visionPDRPaginationDiv").html(resultObj['paginationStr']);
                    $("#showRowsDiv").html(resultObj['pagesizeoptions']);
                    //totalPagesArray = resultObj['totalPagesArray'];
                    pageIndex = pageIndex + 1;
                    //pagesizeoptions
                }

                $("#paginationCountId").html(resultObj['paginationCountId']);
                $("#basicDataObjHidden").val(JSON.stringify(basicData));
                $("#nestedGridObjHidden").val(JSON.stringify(gridResultObj)); //nestedGridObj
                $(".hideRows").hide();
                $(".hideChildRows").hide();
                $('#visionPDRMatrixTableId').dragtable({dragaccept: '.visionPDRTableColumnDrag'});
                $(".recordCheckBox").click(function () {
                    if ($(this).is(':checked')) {
                        $("#select_all").prop("indeterminate", true);
                    }
                });
                stopLoader();
                stopLoader();
            }
        },
        error: function (e)
        {
            stopLoader();
            sessionTimeout(e);
        }

    });
}
function showOnSubmitDuplicatesGrid(basicData, gridResultObj, recordstartindex, pagesize, recordendindex) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (recordstartindex != null && parseInt(recordstartindex) != 0) {
        recordstartindex = parseInt(recordstartindex) - 1;
    }
    var paginationHidden = $("#paginationHidden").val();
    var gridPropObj = gridResultObj['gridPropObj'];
    var data = {
        gridId: gridResultObj['gridId'],
        colsArray: JSON.stringify(gridResultObj['columnsArray']),
        totalColumnsArray: JSON.stringify(gridResultObj['totalColumnsArray']),
        gridEditFlag: gridPropObj['GRID_EDIT_FLAG'],
        gridPropertyObj: JSON.stringify(gridPropObj),
        pagesizeoptions: JSON.stringify(gridPropObj['pagesizeoptions']),
        selectionmode: gridPropObj['SELECTION_TYPE'],
        tableName: gridPropObj['GRID_REF_TABLE'],
        columns: JSON.stringify(gridResultObj['columnListObj']),
        basicData: JSON.stringify(basicData),
        selectedCols: $("#selectedCols").val(),
        recordstartindex: recordstartindex,
        pagesize: pagesize,
        recordendindex: recordendindex,
        currentPage: $("#currentPage").val()
    };
    $.ajax({
        type: 'post',
        url: 'duplicatecheckGridResults',
        async: true,
        data: data,
        success: function (response) {
            stopLoader();
            stopLoader();
            if (response != null) {
                var resultObj = JSON.parse(response);
                $("#matrixGridDivId").show();
                $("#matrixGridId").html(resultObj['tabString']); //tabString
                var recordCount = resultObj['recordCount'];
                var dataSize = resultObj['dataSize'];
                $("#updateActionButton").attr("data-datasize", dataSize);
                var actionsObj = resultObj['actionsObj'];
                if (actionsObj != null) {
                    $("#selectedGridActions").val(JSON.stringify(actionsObj));
                }

                var showRows = $("#showRows").val();
                var totalPages = recordCount / showRows;
                var pageIndex = recordstartindex;
                if (recordstartindex == 0) {
                    $("#visionPDRPaginationDiv").html(resultObj['paginationStr']);
                    $("#showRowsDiv").html(resultObj['pagesizeoptions']);
                    //totalPagesArray = resultObj['totalPagesArray'];
                    pageIndex = pageIndex + 1;
                    //pagesizeoptions
                }

                $("#paginationCountId").html(resultObj['paginationCountId']);
                $("#basicDataObjHidden").val(JSON.stringify(basicData));
                $("#nestedGridObjHidden").val(JSON.stringify(gridResultObj)); //nestedGridObj
                $(".hideRows").hide();
                $(".hideChildRows").hide();
                $('#visionPDRMatrixTableId').dragtable({dragaccept: '.visionPDRTableColumnDrag'});
                $(".recordCheckBox").click(function () {
                    if ($(this).is(':checked')) {
                        $("#select_all").prop("indeterminate", true);
                    }
                });
            }
        },
        error: function (e)
        {
            sessionTimeout(e);
        }

    });
}
function processMergeSpirDuplicates(gridId) {
    var selectedRowDataArray = [];
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes != null && selectedrowindexes.length > 0)
    {
        var spirNo = "";
        var sourcePartLineNo = "";
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
            if (selectedRowData != null && selectedRowData['STG_SPIR_CUST_COLUMN15'] == 'DUPLICATE') {
                spirNo = selectedRowData['SPIR_NO'];
                sourcePartLineNo = selectedRowData['SOURCE_PART_LINE_NO'];
                selectedRowDataArray.push(selectedRowData);
            }

        }
        if (selectedRowDataArray != null && selectedRowDataArray.length != 0) {
            $.ajax({
                type: 'post',
                url: 'processMergeSpirDuplicates',
                async: true,
                data: {
                    gridId: gridId,
                    spirNo: spirNo,
                    sourcePartLineNo: sourcePartLineNo,
                    selectedRowData: JSON.stringify(selectedRowDataArray)
                },
                success: function (response) {
                    stopLoader();
                    if (response != null) {
                        var responseObj = JSON.parse(response);
                        $("#dialog").html(responseObj['message']);
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
                                        if (responseObj['messageFlag']) {
                                            $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                            $("#" + gridId).jqxGrid('clearselection');
//                                            $("#" + gridId).jqxGrid('clearfilters');
                                            var masterGridId = $("#mastergridid").val();
                                            if (masterGridId != null && masterGridId != '') {
                                                $("#" + masterGridId).jqxGrid('updatebounddata', 'cells');
                                            }
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
                                //                                    location.reload();

                            }
                        });
                    }
                },
                error: function (e)
                {
                    sessionTimeout(e);
                }

            });
        } else {
            openSubmitActionDialog("Please select an option to process");
        }
    } else {
        openSubmitActionDialog("Please select an option to process");
    }
}
function exportConsolidationData() {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    try {
        try {
            const element = document.getElementById("exportConsolidationForm");
            element.remove();
        } catch (es) {
        }
        try {
            const element = document.getElementById("exportConsolidationForm");
            element.remove();
        } catch (es) {
        }

        try {
            var form = document.createElement("form");
            form.setAttribute("id", "exportConsolidationForm");
            form.setAttribute("action", "");
            form.setAttribute("target", "_blank");
            form.setAttribute("method", "POST");
            document.body.appendChild(form);
            var token = '';
            try {
                var token = $('meta[name="_csrf"]').attr('content');
            } catch (es) {
                token = '';
            }
            $("#exportConsolidationForm").append("<input id='selectedRowData' type='hidden' name='selectedRowData' value=''>");
            $("#exportConsolidationForm").append("<input id='exportConsolidationGridId' type='hidden' name='exportGridId' value=''>");
            $("#exportConsolidationForm").append("<input id='_csrf' type='hidden' name='_csrf' value='" + token + "'>");
        } catch (es) {
        }
    } catch (es) {
    }
    var gridId = "";
    var nestedGridObjStr = $("#nestedGridObjHidden").val(); //nestedGridObj
    var nestedGridObj = JSON.parse(nestedGridObjStr);
    var columns = [];
    if (nestedGridObj != null) {
        gridId = nestedGridObj['gridId'];
        columns = nestedGridObj['columnsArray'];
    }
    var consolidationDataSize = $("#updateActionButton").attr("data-datasize");
    if (consolidationDataSize != null && parseInt(consolidationDataSize) != 0) {
        var selectedRowData = [];
        for (var i = 0; i < parseInt(consolidationDataSize); i++) {
            if ($("#selection_" + i).is(':checked')) {
                var actionObj = {};
                for (var j = 0; j < columns.length; j++) {
                    if (columns[j] != null && columns[j] != '') {
                        actionObj[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                    }
                }
                selectedRowData.push(actionObj);
            }

        }
        if (selectedRowData != null && selectedRowData.length != 0) {

            $("#exportGridId").val(gridId);
            $("#exportConsolidationGridId").val(gridId);
            $("#selectedRowData").val(JSON.stringify(selectedRowData));
            $("#exportConsolidationForm [name=selectedRowData]").val(JSON.stringify(selectedRowData));
            $("#exportConsolidationForm [name=exportGridId]").val(gridId);
            $("#exportConsolidationForm").attr("action", "consolidationExport");
            $("#exportConsolidationForm").attr("target", "_blank");
            $("#exportConsolidationForm").submit();
        } else {
            openSubmitActionDialog("Please select an option to process");
        }
    } else {
        openSubmitActionDialog("Please select an option to process");
    }

}
function resetConsolidationActions() {
    var actionsObjStr = $("#selectedGridActions").val();
    if (actionsObjStr != null && actionsObjStr != '') {
        var actionsObj = JSON.parse(actionsObjStr);
        if (actionsObj != null) {
            for (var keyName in actionsObj) {
                if (actionsObj[keyName] != null) {
                    $("#" + keyName).val(actionsObj[keyName]);
                    $("#hidden_" + keyName).val(actionsObj[keyName]);
                }
            }
        }
    }

}
function specScopeOfWork(gridId, formGridId, formTableName) {
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    var basicData = {};
    if (selectedrowindexes != null && selectedrowindexes.length != 0)
    {
        if (selectedrowindexes.length == 1) {
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
                    }

                }


            });
            basicData['FORM_ID'] = $("#objectid").val();
            basicData['formId'] = $("#objectid").val();
            basicData['panelId'] = $("#panelId").val();
            basicData['PANEL_ID'] = $("#panelId").val();
            var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);
            $.ajax({
                type: 'post',
                url: 'scopeOfWorkForm',
                async: true,
                data: {
                    targetGridId: formGridId,
                    gridId: gridId,
                    tableName: formTableName,
                    basicData: JSON.stringify(basicData),
                    selectedRowData: JSON.stringify(selectedRowData)
                },
                success: function (response) {
                    stopLoader();
                    if (response != null) {
                        //tableViewStr
                        // subPropertiesDailog 
                        // <div id="${tabMenu[8]}" class="visionTabMenuFormData"></div>  
                        //  <div  id="regRorm${tabCount.count+2}"  class="visionRegisterMaterialTableTab">
                        var resultObj = JSON.parse(response);
                        if (resultObj != null) {
                            //gridOperation
                            var divStr = '<div  id="subProp" data-parentgridid="' + gridId + '" data-opertiontable=""'
                                    + 'class="visionRegisterMaterialTableTab subpropclasspopup">' + resultObj['gridIcons']
                                    + '<div id="classTermDiv" class="classTermDivClass"><span>Class/Term:</span><span>' + selectedRowData['CLASS_TERM'] + '</span></div>'
                                    + '<div id="' + resultObj['gridId'] + '" class="visionTabMenuFormData visionTabMenuFormDataPopup">'
                                    + resultObj['tableViewStr'] + '</div> </div>';
                            $("#subPropertiesDailog").html(divStr);
                            $("#subPropertiesDailog").dialog({resizable: false,
                                title: (labelObject['Scope Of Work'] != null ? labelObject['Scope Of Work'] : 'Scope Of Work'),
                                modal: true,
//                                height: 'auto',
//                                minHeight: 'auto',
//                                maxHeight: 500,
//                                minWidth: 300,
                                width: 900,
//                                maxWidth: 500,
                                fluid: true,
                                buttons: [{
                                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                        click: function () {
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
                                            if (gridId != null && gridId.indexOf("ERP") > -1) {
                                                fetchErpTab(gridId, '');
                                            } else if (gridId != null
                                                    && (gridId.indexOf("MM_ATTACHMENTS") > -1
                                                            || gridId.indexOf("SM_ATTACHMENTS") > -1
                                                            || gridId.indexOf("SPEC_ATTACHMENTS") > -1)) {
                                                fetchAttachmentsTabGridData(gridId);
                                            } else {
                                                fetchTabData(gridId, '');
                                                var role = $("#rolehid").val();
                                                // GenerateInstantDescription(tabId.indexOf("ERP") == -1 && tabId.indexOf("ATTACH") == -1 && role != null && ((role.indexOf("MM") == 0) || (role.indexOf("SM") == 0)));
                                            }
//                                            fetchTabData(gridId);
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
                                    //                                    location.reload();

                                }
                            });
                            $("#tg-wrap").css("width", "100%");
                            $("#" + formGridId + "tb1").css("width", "100%");
                            $("#tg-wrap1").removeClass('visionCharacteristicsTbl');
                            $("#tg-wrap1").addClass('visionCharacteristicsTbl');
                            $("#" + formGridId + "tbl").each(function () {
                                try {
                                    if ($(this).find('thead').length > 0 && $(this).find('th').length > 0) {
                                        // Clone <thead>
                                        var $w = $(window),
                                                $t = $(this),
                                                $thead = $t.find('thead').clone(),
                                                $col = $t.find('thead, tbody').clone();
                                        // Add class, remove margins, reset width and wrap table
//                                        $t
//                                                .addClass('sticky-enabled')
//                                                .css({
//                                                    margin: 0,
//                                                    width: '100%'
//                                                }).wrap('<div class="sticky-wrap" />');
                                        $t.addClass('sticky-enabled')
                                                .css({

                                                    margin: 0,
                                                    width: '100%'

                                                }).wrap('<div class="sticky-enabled" />');
                                        $('.sticky-wrap tbody').addClass('sticky-header');
                                        if ($t.hasClass('overflow-y'))
                                            $t.removeClass('overflow-y').parent().addClass('overflow-y');
                                        // Create new sticky table head (basic)
                                        $t.after('<table class="sticky-thead" />');
                                        // If <tbody> contains <th>, then we create sticky column and intersect (advanced)
                                        if ($t.find('tbody th').length > 0) {
                                            $t.after('<table class="sticky-col" /><table class="sticky-intersect" />');
                                        }

                                        // Create shorthand for things
                                        var $stickyHead = $(this).siblings('.sticky-thead'),
                                                $stickyCol = $(this).siblings('.sticky-col'),
                                                $stickyInsct = $(this).siblings('.sticky-intersect'),
                                                $stickyWrap = $(this).parent('.sticky-wrap');
                                        $stickyHead.append($thead);
                                        $stickyCol
                                                .append($col)
                                                .find('thead th:gt(0)').remove()
                                                .end()
                                                .find('tbody td').remove();
                                        $stickyInsct.html('<thead><tr><th>' + $t.find('thead th:first-child').html() + '</th></tr></thead>');
                                        // Set widths
                                        var setWidths = function () {
                                            $t
                                                    .find('thead th').each(function (i) {
                                                $stickyHead.find('th').eq(i).width($(this).width());
                                            })
                                                    .end()
                                                    .find('tr').each(function (i) {
                                                $stickyCol.find('tr').eq(i).height($(this).height());
                                            });
                                            // Set width of sticky table head
                                            $stickyHead.width("100%");
//                                        console.log($t.width());                                       
                                            // Set width of sticky table col
                                            $stickyCol.find('th').add($stickyInsct.find('th')).width($t.find('thead th').width())
                                        },
                                                repositionStickyHead = function () {
                                                    // Return value of calculated allowance
                                                    var allowance = calcAllowance();
                                                    // Check if wrapper parent is overflowing along the y-axis
                                                    if ($t.height() > $stickyWrap.height()) {
                                                        // If it is overflowing (advanced layout)
                                                        // Position sticky header based on wrapper scrollTop()
                                                        if ($stickyWrap.scrollTop() > 0) {
                                                            // When top of wrapping parent is out of view
                                                            $stickyHead.add($stickyInsct).css({
                                                                opacity: 1,
                                                                top: $stickyWrap.scrollTop() - 1
                                                            });
                                                            $(window).resize(function () {
                                                                if ($(window).width() <= 500)
                                                                {
                                                                    $(".visionHeaderMain").css("position", "absolute");
                                                                }
                                                            }).resize();
                                                        } else {
                                                            // When top of wrapping parent is in view
                                                            $stickyHead.add($stickyInsct).css({
                                                                opacity: 0,
                                                                top: 0
                                                            });
                                                            $(".visionHeaderMain").css("position", "fixed");
                                                        }
                                                    } else {
                                                        // If it is not overflowing (basic layout)
                                                        // Position sticky header based on viewport scrollTop
                                                        if ($w.scrollTop() > $t.offset().top && $w.scrollTop() < $t.offset().top + $t.outerHeight() - allowance) {
                                                            // When top of viewport is in the table itself
                                                            $stickyHead.add($stickyInsct).css({
                                                                opacity: 1,
                                                                top: $w.scrollTop() - $t.offset().top - 1
                                                            });
                                                            $(window).resize(function () {
                                                                if ($(window).width() <= 500)
                                                                {
                                                                    $(".visionHeaderMain").css("position", "absolute");
                                                                }
                                                            }).resize();
                                                        } else {
                                                            // When top of viewport is above or below table
                                                            $stickyHead.add($stickyInsct).css({
                                                                opacity: 0,
                                                                top: 0
                                                            });
                                                            $(".visionHeaderMain").css("position", "fixed");
                                                        }
                                                    }
                                                },
                                                repositionStickyCol = function () {
                                                    if ($stickyWrap.scrollLeft() > 0) {
                                                        // When left of wrapping parent is out of view
                                                        $stickyCol.add($stickyInsct).css({
                                                            opacity: 1,
                                                            left: $stickyWrap.scrollLeft()
                                                        });
                                                    } else {
                                                        // When left of wrapping parent is in view
                                                        $stickyCol
                                                                .css({opacity: 0})
                                                                .add($stickyInsct).css({left: 0});
                                                    }
                                                },
                                                calcAllowance = function () {
                                                    var a = 0;
                                                    // Calculate allowance
                                                    $t.find('tbody tr:lt(3)').each(function () {
                                                        a += $(this).height();
                                                    });
                                                    // Set fail safe limit (last three row might be too tall)
                                                    // Set arbitrary limit at 0.25 of viewport height, or you can use an arbitrary pixel value
                                                    if (a > $w.height() * 0.25) {
                                                        a = $w.height() * 0.25;
                                                    }

                                                    // Add the height of sticky header
                                                    a += $stickyHead.height();
                                                    return a;
                                                };
                                        setWidths();
                                        $t.parent('.sticky-wrap').scroll($.throttle(250, function () {
                                            repositionStickyHead();
                                            repositionStickyCol();
                                        }));
                                        $w.load(setWidths)
                                                .resize($.debounce(250, function () {
                                                    setWidths();
                                                    repositionStickyHead();
                                                    repositionStickyCol();
                                                }))
                                                .scroll($.throttle(250, repositionStickyHead));
                                    }
                                } catch (error) {
                                    console.error("An error occurred: ", error);
                                }

                            });
                            $("#subProp").attr("data-parentgridid", gridId);
                            $("#subProp").attr("data-opertiontable", formTableName);
                            $("#" + formGridId + "_Update").attr("data-view", "TABLE-VIEW");
                            initialTblViewData = "";
                            initialTblViewData = resultObj.data;
                            initialTblViewCols = resultObj.columns;
                            $("#" + formGridId + "_Update").attr('data-localdata', JSON.stringify(resultObj.data));
                            $("#" + formGridId + "_Update").attr('data-datafields', JSON.stringify(resultObj.columns));
                        }


                    }
                },
                error: function (e)
                {
                    sessionTimeout(e);
                }

            });
        } else {
            openSubmitActionDialog("Please select only one record for scope of work");
        }


    } else {
        openSubmitActionDialog("Please select an option to process");
    }

}
function updateScopeOfWork(formGridId) {
    var basicData = {};
    var gridId = $("#subProp").attr("data-parentgridid");
    var tableName = $("#subProp").attr("data-opertiontable");
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]);
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
            }

        }


    });
    selectedDataArray = gridOperation('update', formGridId);
    alert(selectedDataArray.length);
    if (selectedDataArray.length == 0) {
        stopLoader(); //9
        var results = "No Changes to Save";
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
    } else {
        var fieldIds = [];
        var fieldVals = [];
        var dataArray = [];
        var jsOpsObj = null;
        if (selectedRowData != null) {
            for (var key in selectedRowData) {
                if (key != 'AUDIT_ID') {
                    basicData[key] = selectedRowData[key];
                }

            }
        }
        basicData['panelId'] = $("#panelId").val();
        basicData['gridId'] = $("#gridId").val();
        for (var i = 0; i < selectedDataArray.length; i++) {
            fieldIds = [];
            fieldVals = [];
            for (var j = 0; j < initialTblViewCols.length; j++) {
                fieldIds.push(initialTblViewCols[j].datafield);
                fieldVals.push(selectedDataArray[i][initialTblViewCols[j].datafield]);
            }
            jsOpsObj = new Object();
            jsOpsObj.feildIds = fieldIds;
            jsOpsObj.feildValues = fieldVals;
            jsOpsObj.basicData = basicData;
            dataArray.push(jsOpsObj);
        }
        if (dataArray != null && dataArray.length != 0) {
            $.ajax({
                type: 'post',
                url: 'updateScopeOfWork',
                async: true,
                data: {
                    targetGridId: formGridId,
                    gridId: gridId,
                    tableName: tableName,
                    jsonData: JSON.stringify(dataArray)
                },
                success: function (response) {
                    stopLoader();
                    if (response != null) {
                        //tableViewStr
                        // subPropertiesDailog 
                        // <div id="${tabMenu[8]}" class="visionTabMenuFormData"></div>  
                        //  <div  id="regRorm${tabCount.count+2}"  class="visionRegisterMaterialTableTab">
                        var resultObj = JSON.parse(response);
                        if (resultObj != null) {
                            openSubmitActionDialog(resultObj['Message']);
                        }


                    }
                },
                error: function (e)
                {
                    sessionTimeout(e);
                }

            });
        }
    }


}
function getLapsTimeReport(currentGridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
// showLoader();
    $("#form-date-picker").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        showOn: "button",
        buttonImage: 'images/iDXPUI5Calendar.svg',
        buttonImageOnly: true
    });
    $("#to-date-picker").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy",
        showOn: "button",
        buttonImage: 'images/iDXPUI5Calendar.svg',
        buttonImageOnly: true
    });
    // var formFields = "";

    // $("#dialog").html(formFields);
    // stopLoader();
    $("#dialogLapsTimeProcess").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        height: 'auto',
        minHeight: 'auto',
        minWidth: 600,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    // showLoader();
                    var fromDate = $('#form-date-picker').val();
                    var toDate = $('#to-date-picker').val();
                    if (fromDate != null && fromDate != '' && toDate != null && toDate != '') {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        $("#errorLapsTimeProcess").hide();
                        viewLapsTimeReport(fromDate, toDate, currentGridId);
                    } else {
                        $("#errorLapsTimeProcess").show();
                        $("#errorLapsTimeProcess").html("From Date & To Date should not empty");
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
    $("#ui-datepicker-div").addClass("ui-datepickerReports");
}
function viewLapsTimeReport(fromDate, toDate, currentGridId)
{
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (fromDate != null || fromDate != '' && toDate != null || toDate != '') {
        $.ajax({
            type: "POST",
            traditional: true,
            dataType: 'html',
            url: 'getLapsTimeReports',
            cache: false,
            data: {
                'fromDate': fromDate,
                'toDate': toDate
            },
            success: function (response) {

                if (response != null && response != '') {
                    $("#dialog").html(response);
                }

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
                                var divCode = " <div class= 'visionLapsFromTo'><span class='visionLapsFrom'>From Date:</span><input readonly=\"true\" id='form-date-picker'>"
                                        + "<span class='visionLapsTo'>To Date:</span><input readonly=\"true\" id='to-date-picker'>"
                                        + " <div id=\"errorLapsTimeProcess\"  style=\"color: red\"></div>"
                                        + " </div>";
                                $("#dialogLapsTimeProcess").html(divCode);
                                $("#dialogLapsTimeProcess").hide();
                                $('#' + currentGridId).jqxGrid('clearselection');
//                                $('#' + currentGridId).jqxGrid('clearfilters');

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
}
function getPreviousRecordData(selectingrowindex, gridRowsCount) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var gridId = $("#gridId").val();
    if (selectingrowindex != null) {
        selectingrowindex = parseInt((selectingrowindex - 1));
    }
    if (gridRowsCount != null && gridRowsCount != '' && selectingrowindex != null && selectingrowindex != ''
            && selectingrowindex == -1) {
        var results = "No previous record available to navigate";
        results = (labelObject[results] != null ? labelObject[results] : results);
        var dialogSplitMessage = dialogSplitIconText(results);
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
    } else {


        $.ajax({
            type: 'post',
            traditional: true,
            cache: false,
            url: 'getFormPaginationData',
            async: true,
            data: {
                selectingrowindex: selectingrowindex,
                gridRowscount: gridRowsCount,
                process: "previous",
                gridId: gridId
            },
            success: function (response) {
                stopLoader();
                if (response != null) {
                    var paramsData = {};
                    var urlString = $('#urlString').val();
                    if (urlString == "clusterFormData" && urlString != null) {
                        paramsData = {
                            items: JSON.stringify(response)
                        }
                        dataOnPopup(paramsData);
                    } else {
                        $("#items").val(JSON.stringify(response));
                        $("#selectingrowindex").val(selectingrowindex);
                        $("#submitForm").submit();
                    }


                }
            },
            error: function (e)
            {
                sessionTimeout(e);
            }

        });
    }
//  }
}
function getNextRecordData(selectingrowindex, gridRowsCount) {
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var gridId = $("#gridId").val();
    var labelObject = {};
    if (selectingrowindex != null) {
        selectingrowindex = parseInt(selectingrowindex + 1);
    }
    if (gridRowsCount != null && gridRowsCount != '' && selectingrowindex != null && selectingrowindex != ''
            && parseInt(gridRowsCount) == (parseInt(selectingrowindex))) {
        var results = "No next record available to navigate";
        results = (labelObject[results] != null ? labelObject[results] : results);
        var dialogSplitMessage = dialogSplitIconText(results);
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
    } else {

        $.ajax({
            type: 'post',
            traditional: true,
            //dataType: 'html',
            cache: false,
            url: 'getFormPaginationData',
            async: true,
            data: {
                selectingrowindex: selectingrowindex,
                gridRowscount: gridRowsCount,
                process: "next",
                gridId: gridId
            },
            success: function (response) {
                stopLoader();
                if (response != null) {
                    var paramsData = {};
                    var urlString = $('#urlString').val();
                    if (urlString == "clusterFormData" && urlString != null) {
                        paramsData = {
                            items: JSON.stringify(response)
                        }
                        dataOnPopup(paramsData);
                    } else {
                        $("#items").val(JSON.stringify(response));
//                                               $("#selectingrowindex").val(selectingrowindex);
                        // $("#submitForm").attr("action", "formData");
                        $("#submitForm").submit();
                    }
                }
            },
            error: function (e)
            {
                sessionTimeout(e);
            }

        });
    }

}
function populateBulkFillDownData(selectedGridId) {
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
                    if (datainformations != null) {
                        var paginginformation = datainformations['paginginformation'];
                        if (paginginformation != null) {
                            var pagesize = paginginformation['pagesize'];
                            if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                                totalRowIndex = parseInt(pagesize);
                            }

                        }
                    }
                    var selectedRowsData = [];
                    for (var i = 0; i < totalRowIndex; i++) {
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
                        tableName: $("#tableName").val(),
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
                                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                                $("#" + gridId).jqxGrid('clearselection');
//                                                $("#" + gridId).jqxGrid('clearfilters');
                                                $('#' + gridId).jqxGrid('updatebounddata');
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
function dependencyValueValidations(columnName, gridId, viewType, columnValue) {
    if (viewType == 'FORM-VIEW' && columnName != null && columnName !== '') {
        if (!(gridId != null && gridId != '')) {
            gridId = $("#" + columnName).attr("data-viewid");
        }
        if (!(columnValue != null && columnValue != '')) {
            columnValue = $("#" + columnName).val();
        }
        var jscolvaluevalidation = $("#" + columnName).attr("data-jscolvaluevalidation");
        if (jscolvaluevalidation != null
                && jscolvaluevalidation !== ''
                && jscolvaluevalidation.indexOf(columnValue) > -1) {
            var jscolvaluevalidationArray = jscolvaluevalidation.split(";");
            if (jscolvaluevalidationArray != null
                    && !jQuery.isEmptyObject(jscolvaluevalidationArray)
                    && jscolvaluevalidationArray.length != 0) {
                for (var i = 0; i < jscolvaluevalidationArray.length; i++) {
                    if (jscolvaluevalidationArray[i] !== null
                            && jscolvaluevalidationArray[i] !== ''
                            && jscolvaluevalidationArray[i].split("##")[0] !== null
                            && jscolvaluevalidationArray[i].split("##")[0] !== ''
                            && jscolvaluevalidationArray[i].split("##")[0] === columnValue
                            ) {
                        var jscolvaluevalidationColumns = jscolvaluevalidationArray[i].split("##")[1];
                        if (jscolvaluevalidationColumns != null
                                && jscolvaluevalidationColumns != ''
                                && jscolvaluevalidationColumns != 'null') {
                            var jscolvaluevalidationColumnsArray = jscolvaluevalidationColumns.split("$$");
                            if (jscolvaluevalidationColumnsArray != null && jscolvaluevalidationColumnsArray.length != 0) {
                                var mandColumns = jscolvaluevalidationColumnsArray[0];
                                if (mandColumns != null && mandColumns != '' && mandColumns != 'null') {
                                    var mandColumnsArray = mandColumns.split(",");
                                    if (mandColumnsArray != null && !jQuery.isEmptyObject(mandColumnsArray)) {
                                        for (var j = 0; j < mandColumnsArray.length; j++) {
                                            if (mandColumnsArray[j] != null
                                                    && mandColumnsArray[j] != ''
                                                    && mandColumnsArray[j] != 'null'
                                                    ) {
                                                var dataType = $("#" + mandColumnsArray[j]).attr("data-type");
                                                $("#" + mandColumnsArray[j]).attr("data-mandatory", "M"); //M
                                                $("#" + mandColumnsArray[j]).removeClass("visionInputDisable");
                                                // for ERP Tabs
                                                if (gridId != null && gridId.indexOf("_ERP") > -1) {
                                                    $("#" + mandColumnsArray[j]).parent("th").prev().addClass("labelMandColorRed");
                                                } else {
                                                    $("#lblMand" + mandColumnsArray[j]).show;
                                                    $(".lblMand" + mandColumnsArray[j]).show;
                                                    $(".lblMand" + mandColumnsArray[j]).css("display", "");
                                                }

                                                if (dataType == 'P') {
                                                    $("#dd" + mandColumnsArray[j]).show();
                                                } else if (dataType == 'L' || dataType == 'D') {
                                                    $("#" + mandColumnsArray[j]).attr('disable', false);
                                                } else {
                                                    $("#" + mandColumnsArray[j]).attr('readonly', false);
                                                }
                                            }

                                        }
                                    }
                                }
                                var optColumns = jscolvaluevalidationColumnsArray[1];
                                if (optColumns != null && optColumns != '' && optColumns != 'null') {
                                    var optColumnsArray = optColumns.split(",");
                                    if (optColumnsArray != null && !jQuery.isEmptyObject(optColumnsArray)) {
                                        for (var j = 0; j < optColumnsArray.length; j++) {
                                            if (optColumnsArray[j] != null
                                                    && optColumnsArray[j] != ''
                                                    && optColumnsArray[j] != 'null'
                                                    ) {
                                                var dataType = $("#" + optColumnsArray[j]).attr("data-type");
                                                $("#" + optColumnsArray[j]).attr("data-mandatory", "O"); //M
                                                $("#" + optColumnsArray[j]).removeClass("visionInputDisable");
                                                // for ERP Tabs
                                                if (gridId != null && gridId.indexOf("_ERP") > -1) {
                                                    $("#" + optColumnsArray[j]).parent("th").prev().removeClass("labelMandColorRed");
                                                } else {
                                                    $("#lblMand" + optColumnsArray[j]).hide();
                                                    $(".lblMand" + optColumnsArray[j]).hide();
                                                }

                                                if (dataType == 'P') {
                                                    $("#dd" + optColumnsArray[j]).show();
                                                } else if (dataType == 'L' || dataType == 'D') {
                                                    $("#" + optColumnsArray[j]).attr('disable', false);
                                                } else {
                                                    $("#" + optColumnsArray[j]).attr('readonly', false);
                                                }
                                            }

                                        }
                                    }
                                }
                                var edtColumns = jscolvaluevalidationColumnsArray[2];
                                if (edtColumns != null && edtColumns != '' && edtColumns != 'null') {
                                    var edtColumnsArray = edtColumns.split(",");
                                    if (edtColumnsArray != null && !jQuery.isEmptyObject(edtColumnsArray)) {
                                        for (var j = 0; j < edtColumnsArray.length; j++) {
                                            if (edtColumnsArray[j] != null
                                                    && edtColumnsArray[j] != ''
                                                    && edtColumnsArray[j] != 'null'
                                                    ) {
                                                var dataType = $("#" + edtColumnsArray[j]).attr("data-type");
//                                                $("#" + edtColumnsArray[j]).attr("data-mandatory", "O");//M
                                                $("#" + edtColumnsArray[j]).removeClass("visionInputDisable");
                                                // for ERP Tabs
//                                                if (gridId != null && gridId.indexOf("_ERP") > -1) {
//                                                    $("#" + edtColumnsArray[j]).parent("th").prev().removeClass("labelMandColorRed");
//                                                } else {
//                                                    $("#lblMand" + edtColumnsArray[j]).hide();
//                                                }

                                                if (dataType == 'P') {
                                                    $("#dd" + edtColumnsArray[j]).show();
                                                } else if (dataType == 'L' || dataType == 'D') {
                                                    $("#" + edtColumnsArray[j]).attr('disable', false);
                                                } else {
                                                    $("#" + edtColumnsArray[j]).attr('readonly', false);
                                                }
                                            }

                                        }
                                    }
                                }
                                var unEdtColumns = jscolvaluevalidationColumnsArray[3];
                                if (unEdtColumns != null && unEdtColumns != '' && unEdtColumns != 'null') {
                                    var unEdtColumnsArray = unEdtColumns.split(",");
                                    if (unEdtColumnsArray != null && !jQuery.isEmptyObject(unEdtColumnsArray)) {
                                        for (var j = 0; j < unEdtColumnsArray.length; j++) {
                                            if (unEdtColumnsArray[j] != null
                                                    && unEdtColumnsArray[j] != ''
                                                    && unEdtColumnsArray[j] != 'null'
                                                    ) {
                                                var dataType = $("#" + unEdtColumnsArray[j]).attr("data-type");
                                                $("#" + unEdtColumnsArray[j]).attr("data-mandatory", "O"); //M
                                                $("#" + unEdtColumnsArray[j]).addClass("visionInputDisable");
                                                // for ERP Tabs
                                                if (gridId != null && gridId.indexOf("_ERP") > -1) {
                                                    $("#" + unEdtColumnsArray[j]).parent("th").prev().removeClass("labelMandColorRed");
                                                } else {
                                                    $("#lblMand" + unEdtColumnsArray[j]).hide();
                                                }

                                                if (dataType == 'P') {
                                                    $("#dd" + unEdtColumnsArray[j]).hide();
                                                } else if (dataType == 'L' || dataType == 'D') {
                                                    $("#" + unEdtColumnsArray[j]).attr('disable', true);
                                                } else {
                                                    $("#" + unEdtColumnsArray[j]).attr('readonly', true);
                                                }
                                            }

                                        }
                                    }
                                }
                            }
                        }
                        break;
                    }
                }
            }
        }
    }

}
function gridDataFormView(gridId, operationType) {
    showLoader();
    var labelObj = {};
    // labelObject = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    window.navigationGridId = "";
    var paramsData = {};
    var rowData = {};
    if (gridId != null) {
        if (operationType != 'add') {
            var selectedIndex = 0;
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


                if (selectedRowIndexes[0] != -1) {
                    selectedIndex = selectedRowIndexes[0];
                }

            }
            if (selectedIndex != -1) {
                rowData = $('#' + gridId).jqxGrid('getrowdata', selectedIndex);
                var selectedGridObj = $('#' + gridId + "_gridObjStr").val();
                paramsData = {
                    selectedGridData: JSON.stringify(rowData),
                    selectedGridObj: JSON.stringify(selectedGridObj),
                    selectedIndex: selectedIndex,
                    selectedGridId: gridId,
                    operationType: operationType
                }
            }
        } else {
            paramsData = {
                selectedGridId: gridId,
                selectedGridData: JSON.stringify(rowData),
                operationType: operationType
            }
        }



        if (paramsData != null && !jQuery.isEmptyObject(paramsData)) {
// need to open form
            $.ajax({
                type: "POST",
                url: 'gridDataFormView',
                // async: false,
                data: paramsData,
                traditional: true,
                cache: false,
                success: function (response) {
                    stopLoader();
                    if (response != null && response != '') {
                        var responseObj = JSON.parse(response);
                        if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
                            var Message = ""
                            if (responseObj != null && responseObj != '' && responseObj.FormViewFlag == 'true' || responseObj.FormViewFlag == true) {
                                Message = responseObj.tabDesc;
                            } else {
                                Message = "Form View";
                            }
                            $('#' + gridId + "_gridObjStr").remove();
                            var formLowerCaseValue = responseObj['formLowerCaseValue'];
                            $("#visionHeaderDiv").append("<input type='hidden' id='" + gridId + "_gridObjStr' />");
                            var formStr = responseObj['formStr'];
                            formStr = "<input type='hidden' id='" + gridId + "_selectedIndex' value='" + selectedIndex + "'/>" + formStr;
                            $("#datagridFormViewPopup").html(formStr);
                            $("#" + gridId + "_gridObjStr").val(JSON.stringify(responseObj['gridObj']));
                            $("#datagridFormViewPopup").dialog({resizable: false,
                                title: (labelObj[Message] != null ? labelObj[Message] : Message),
                                modal: true,
                                height: 'auto',
                                maxHeight: 500,
                                width: 'auto',
                                maxWidth: 1200,
                                fluid: true,
                                open: function () {
                                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                    $(".visionHeaderMain").css("z-index", "999");
                                    $(".visionFooterMain").css("z-index", "999");
                                },
                                beforeClose: function (event, ui)
                                {
                                    $('#' + gridId + "_gridObjStr").remove();
                                    $(".visionHeaderMain").css("z-index", "99999");
                                    $(".visionFooterMain").css("z-index", "99999");
                                    $("#" + gridId).jqxGrid('updatebounddata');
                                    try {
                                        $("#" + gridId).jqxGrid('clearselection');
                                    } catch (e) {
                                    }
                                }
                            });
                            var dateArray = responseObj.dateIdArray;
                            for (var i = 0; i < dateArray.length; i++) {
                                $("#" + dateArray[i]).datepicker(
                                        {
                                            dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true
                                        });
                            }
                            $("#ui-datepicker-div").addClass("ui-datepickerAdmin");
                        }

                    }
                },
                error: function (e) {
                    stopLoader();
                    sessionTimeout(e);
                }


            });
        }

    }

}
function getNextFormView(gridId, selectedIndex) {
    var processRowIndex = 0;
    if (selectedIndex != null && selectedIndex != -1) {
        var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        if (selectedRowIndexes != null && selectedRowIndexes.length != 0) {
            var selectedArrIndex = selectedRowIndexes.indexOf(selectedIndex);
            if (selectedArrIndex != -1) {
                try {
                    processRowIndex = selectedRowIndexes[selectedArrIndex + 1];
                } catch (e) {
                }

            }

        }
        if (processRowIndex != -1 || processRowIndex == 0) {
            processRowIndex = selectedIndex + 1;
        }
        if (processRowIndex == -1) {
            processRowIndex = 0;
        }
//        $("#" + gridId + "_selectedIndex").val(processRowIndex);
        openFormView(gridId, processRowIndex);
    }
}
function getPrevFormView(gridId, selectedIndex) {
    var processRowIndex = 0;
    if (selectedIndex != null && selectedIndex != -1) {
        var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        if (selectedRowIndexes != null && selectedRowIndexes.length != 0) {
            var selectedArrIndex = selectedRowIndexes.indexOf(selectedIndex);
            if (selectedArrIndex != -1) {
                try {
                    processRowIndex = selectedRowIndexes[selectedArrIndex + 1];
                } catch (e) {
                }

            }

        }
        if (processRowIndex != -1 || processRowIndex == 0) {
            processRowIndex = selectedIndex - 1;
        }
        if (processRowIndex == -1) {
            processRowIndex = 0;
        }
//        $("#" + gridId + "_selectedIndex").val(processRowIndex);
        openFormView(gridId, processRowIndex);
    }
}
function openFormView(gridId, selectedIndex) {
    showLoader();
    var labelObj = {};
    // labelObject = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    if (selectedIndex != -1) {

        $("#" + gridId + "_selectedIndex").val(selectedIndex);
        var rowData = $('#' + gridId).jqxGrid('getrowdata', selectedIndex);
        var selectedGridObj = $('#' + gridId + "_gridObjStr").val();
        if (rowData != null) {
// need to open form
            $.ajax({
                type: "POST",
                url: 'gridDataFormView',
                // async: false,
                data: {
                    selectedGridData: JSON.stringify(rowData),
                    selectedGridObj: selectedGridObj,
                    selectedIndex: selectedIndex,
                    selectedGridId: gridId
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    stopLoader();
                    if (response != null && response != '') {

//                        $("#visionGridFormCountMessage")
                        var responseObj = JSON.parse(response);
                        if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
                            var formStr = responseObj['formStr'];
                            formStr = "<input type='hidden' id='" + gridId + "_selectedIndex' value='" + selectedIndex + "'/>" + formStr;
                            $("#datagridFormViewPopup").html(formStr);
//                            $("#gridFormCountDiv").html("You are viewing " + (selectedIndex + 1) + " Record");
                        }

                    }
                },
                error: function (e) {
                    stopLoader();
                    sessionTimeout(e);
                }


            });
        }
    }
}
function undoBulkFillDown(selectedGridId) {
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
                    if (datainformations != null) {
                        var paginginformation = datainformations['paginginformation'];
                        if (paginginformation != null) {
                            var pagesize = paginginformation['pagesize'];
                            if (pagesize != null && parseInt(pagesize) < totalRowIndex) {
                                totalRowIndex = parseInt(pagesize);
                            }

                        }
                    }
                    var selectedRowsData = [];
                    for (var i = 0; i < totalRowIndex; i++) {
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
                        tableName: $("#tableName").val(),
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
                                                $("#" + gridId).jqxGrid('updatebounddata', 'cells');
                                                $("#" + gridId).jqxGrid('clearselection');
//                                                $("#" + gridId).jqxGrid('clearfilters');
                                                $('#' + gridId).jqxGrid('updatebounddata');
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

}
function viewSelectedRecordDuplicates(sourceRecordNo, duplicateCheckGridId, gridId) {
    window.navigationGridId = "";
    $("#duplicategridCheckForm").val("");
    try {
        $("#duplicategridCheckForm").remove();
    } catch (e) {

    }
    try {
        $("body").append("<div id='duplicategridCheckForm'></div>");
    } catch (e) {

    }
    $("#bulkDuplicateSubmitFormGridId").val(gridId);
    $("#duplicateCheckGridId").val(duplicateCheckGridId);
    $("#sourceRecordNo").val(sourceRecordNo);
    var duplicateRecordBasicData = $("#" + gridId).attr("data-duplicaterecorddata");
    var gridInitParam = $("#" + gridId).attr("data-gridinitparamobj");
    showLoader();
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'JSON',
        cache: false,
        url: "viewSelectedRecordDuplicates",
        data: {
            sourceRecordNo: sourceRecordNo,
            duplicateGridId: duplicateCheckGridId,
            gridId: gridId,
            duplicateRecordBasicData: duplicateRecordBasicData,
            gridInitParam: gridInitParam

        },
        success: function (response) {
            stopLoader();
            if (response != null && response != '') {
                var gridResultObj = response['resultObject'];
                $("#duplicategridCheckForm").html(response['duplicatesDialogView']);
                try {
                    var idxpdupupdactflag = $("#idxpdupupdactflag").val();
                    var idxpduprestetactflag = $("#idxpduprestetactflag").val();
                    var idxpdupexportflag = $("#idxpdupexportflag").val();
                    var idxpdupresolveactflag = $("#idxpdupresolveactflag").val();
                    if (idxpdupupdactflag != null && idxpdupupdactflag != '' && idxpdupupdactflag == 'N') {
                        $("#updateActionButton").hide();
                    }
                    if (idxpduprestetactflag != null && idxpduprestetactflag != '' && idxpduprestetactflag == 'N') {
                        $("#resetConsolidation").hide();
                    }
                    if (idxpdupexportflag != null && idxpdupexportflag != '' && idxpdupexportflag == 'N') {
                        $("#exportConsolidation").hide();
                    }
                    if (idxpdupresolveactflag != null && idxpdupresolveactflag != '' && idxpdupresolveactflag == 'N') {
                        $("#resolveDuplicatesButton").hide();
                    }
                } catch (e) {

                }
                $("#duplicateGridInitParam").val($("#" + gridId).attr("data-gridinitparamobj"));
                $("#updateStatusSelect").html(gridResultObj['businessStatusString']); //businessStatusString
                var pageSize = 10;
                var gridPropObj = gridResultObj['gridPropObj'];
                try {
                    var pagesizeoptions = gridPropObj['pagesizeoptions'];
                    pageSize = pagesizeoptions[0];
                } catch (e) {
                }
                $("#selectedGridObjColumns").val(JSON.stringify(gridResultObj['columnsArray']));
                showLoader();
//                var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
                var duplicateRecordBasicDataObj = JSON.parse(duplicateRecordBasicData)
                var basicData = duplicateRecordBasicDataObj[sourceRecordNo];
                $("#duplicateGridbasicData").val(JSON.stringify(basicData));
                showDuplicatesGrid(basicData, gridResultObj, 0, pageSize, 30)
                // showDuplicatesRecordsGrid(basicData, gridResultObj, 0, pageSize, 30);
                var basic = JSON.stringify(basicData);
                $("#duplicateGridbasicData").val(basic);
                $("#duplicategridCheckForm").dialog({resizable: false,
                    title: (labelObject['Duplicates'] != null ? labelObject['Duplicates'] : 'Duplicates'),
                    modal: true,
                    height: 'auto',
                    minHeight: 'auto',
                    maxHeight: 550,
                    width: 1150,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                var datasize = $("#updateActionButton").attr("data-datasize");
                                var changeCount = 0;
                                var actionsObjStr = $("#selectedGridActions").val();
                                if (actionsObjStr != null && actionsObjStr != '') {
                                    var actionsObj = JSON.parse(actionsObjStr);
                                    if (actionsObj != null) {
                                        for (var i = 0; i < parseInt(datasize); i++) {
                                            var columnName = "CONSOLIDATION_ACTION_" + i;
                                            var consolidationAction = $("#" + columnName).val();
                                            if (consolidationAction != actionsObj[columnName]) {
                                                changeCount++;
                                                break;
                                            }
                                        }
                                    }
                                }
                                if (changeCount == 0) {
                                    var masterRecordData = {};
                                    var sourceRecordData = {};
                                    var selectedRecordAction = $("#CONSOLIDATION_ACTION_0").val();
                                    if (selectedRecordAction != null && selectedRecordAction == 'DELETE') {
                                        // NEED TO CALL DELETE FUNCTIONALITY
                                        var deleteProcessFlag = false;
                                        var selectedGridObjColumns = $("#selectedGridObjColumns").val();
                                        var columns = JSON.parse(selectedGridObjColumns);
                                        if (datasize != null && parseInt(datasize) > 1) {
                                            for (var i = 1; i < parseInt(datasize); i++) {
                                                var consolidationAction = $("#CONSOLIDATION_ACTION_" + i).val();
                                                if (consolidationAction == 'MASTER') {
                                                    deleteProcessFlag = true;
                                                    for (var j = 0; j < columns.length; j++) {
                                                        if (columns[j] != null && columns[j] != '') {
                                                            masterRecordData[columns[j]] = $("#hidden_" + columns[j] + "_" + i).val();
                                                            sourceRecordData[columns[j]] = $("#hidden_" + columns[j] + "_0").val();
                                                            // actionObj['AUDIT_ID'] = $("#AUDIT_ID_" + i).html();
                                                        }
                                                    }
                                                    break;
                                                }

                                            }

                                        }
                                        if (deleteProcessFlag) {
                                            $(this).dialog("close");
                                            var conf_mesg = $("#Delete").attr('data-conf');
                                            var success_msg = $("#Delete").attr('data-success-conf');
                                            var controlInd = "Delete";
//                                            onSumbitDeleteDuplicateConfirm("DELETE", success_msg, masterRecordData, sourceRecordData);
                                            onSumbitBulkDeleteDuplicateConfirm("DELETE", success_msg, masterRecordData, sourceRecordData);
                                        } else {
                                            openSubmitActionDialog("Please select at least on Master record");
                                        }

                                    } else {
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                    }
                                } else {
                                    openSubmitActionDialog("Please update actions before processing the record");
                                }

                            }
                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $("#resolveDuplicatesButton").hide();
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui)
                    {
                        $("#duplicategridCheckForm").html("");
                        try {
                            $("#duplicategridCheckForm").dialog("destroy");
                        } catch (e) {

                        }
                        try {
                            $("#duplicategridCheckForm").remove();
                        } catch (e) {

                        }
//                        $(this).dialog("destroy");
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }
        },
        error: function (e)
        {
            sessionTimeout(e);
        }
    });
    stopLoader();
}
function exportDuplicateData() {
    exportConsolidationData();
}
function openSelectedRecordDuplicates(gridResultObj, basicData, recordstartindex, pagesize, recordendindex) {
    showLoader();
    var gridPropObj = gridResultObj['gridPropObj'];
    var data = {
        gridId: gridResultObj['gridId'],
        colsArray: JSON.stringify(gridResultObj['columnsArray']),
        totalColumnsArray: JSON.stringify(gridResultObj['totalColumnsArray']),
        gridEditFlag: gridPropObj['GRID_EDIT_FLAG'],
        gridPropertyObj: JSON.stringify(gridPropObj),
        pagesizeoptions: JSON.stringify(gridPropObj['pagesizeoptions']),
        selectionmode: gridPropObj['SELECTION_TYPE'],
        tableName: gridPropObj['GRID_REF_TABLE'],
        columns: JSON.stringify(gridResultObj['columnListObj']),
        basicData: JSON.stringify(basicData),
        selectedCols: $("#selectedCols").val(),
        recordstartindex: 0,
        pagesize: pagesize,
        recordendindex: recordendindex,
        currentPage: $("#currentPage").val()
    };
    $.ajax({
        type: 'post',
        url: 'duplicatecheckGridResults',
        async: true,
        data: data,
        success: function (response) {
            stopLoader();
            stopLoader();
            if (response != null) {
                var resultObj = JSON.parse(response);
                $("#matrixGridDivId").show();
                $("#matrixGridId").html(resultObj['tabString']); //tabString
                var recordCount = resultObj['recordCount'];
                var dataSize = resultObj['dataSize'];
                $("#updateActionButton").attr("data-datasize", dataSize);
                var actionsObj = resultObj['actionsObj'];
                if (actionsObj != null) {
                    $("#selectedGridActions").val(JSON.stringify(actionsObj));
                }

                var showRows = $("#showRows").val();
                var totalPages = recordCount / showRows;
                var pageIndex = recordstartindex;
                if (recordstartindex == 0) {
                    $("#visionPDRPaginationDiv").html(resultObj['paginationStr']);
                    $("#showRowsDiv").html(resultObj['pagesizeoptions']);
                    //totalPagesArray = resultObj['totalPagesArray'];
                    pageIndex = pageIndex + 1;
                    //pagesizeoptions
                }

                $("#paginationCountId").html(resultObj['paginationCountId']);
                $("#basicDataObjHidden").val(JSON.stringify(basicData));
                $("#nestedGridObjHidden").val(JSON.stringify(gridResultObj)); //nestedGridObj
                $(".hideRows").hide();
                $(".hideChildRows").hide();
                $('#visionPDRMatrixTableId').dragtable({dragaccept: '.visionPDRTableColumnDrag'});
                $(".recordCheckBox").click(function () {
                    if ($(this).is(':checked')) {
                        $("#select_all").prop("indeterminate", true);
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
//multipleGridSorting Functionality
function selectItem() {
    var item = $(event.target);
    $("div").removeClass("visionColselected");
    item.addClass("visionColselected");
}
function ascAppendData(event) {
    $("#VisionDescListRight").append($(".visionColselected"));
    var label = $(".visionColselected").text();
    label = label + " Asc";
    var colName = $(".visionColselected").attr('data-column');
    $("#" + colName).text(label);
    $(".visionColselected").attr('data-order', "ASC");
    $("#" + colName).removeClass("visionColselected");
}
function descAppendData(event) {
    $("#VisionDescListRight").append($(".visionColselected"))
    var colName = $(".visionColselected").attr('data-column');
    var label = $(".visionColselected").text();
    label = label + " Desc";
    $("#" + colName).text(label);
    $(".visionColselected").attr('data-order', "DESC");
    $("#" + colName).removeClass("visionColselected");
}
function leftButtonData(event) {
    var item = $(event.target);
    $("#VisionAscListLeft").append($(".visionColselected"));
    item.removeClass("visionColselected");
    var colName = $(".visionColselected").attr('data-column');
    var label = $(".visionColselected").attr('data-label');
    colName = colName.trim();
    $("#" + colName).text(label);
    $(".visionColselected").attr('data-order', "");
}
function multipleGridSort(gridId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var sortcolumnsArr = {};
    var colums = $("#" + gridId).jqxGrid('columns');
    sortcolumnsArr = colums.records;
    var inputString = "<div id='VisionMainList' class='VisionMainList'>"
            + "<div id='VisionAscListLeft' class='VisionAscListLeft'><div class='VisionAscData'>";
    if (sortcolumnsArr != null && sortcolumnsArr != '') {
        for (var i = 0; i < sortcolumnsArr.length; i++) {
            var hiddenVal = sortcolumnsArr[i].hidden;
            if (sortcolumnsArr[i].text != null
                    && sortcolumnsArr[i].text != ''
                    && (sortcolumnsArr[i].datafield.indexOf("HIDDEN_") >= -1
                            || sortcolumnsArr[i].datafield.indexOf("_HIDDEN") >= -1
                            || sortcolumnsArr[i].datafield.indexOf("_checkboxcolumn") >= -1
                            || sortcolumnsArr[i].datafield.indexOf("show_detail") >= -1)) {
                if (!(hiddenVal)) {
                    inputString += "<div class='visionSelectedItem' id= '" + sortcolumnsArr[i].datafield + "'"
                            + "onclick='selectItem()' data-column = '" + sortcolumnsArr[i].datafield + "' "
                            + "data-label= '" + sortcolumnsArr[i].text + "'>" + sortcolumnsArr[i].text + "</div>";
                }
            }
        }
        inputString += "</div></div>";
        inputString += "<div class='VisionButtonImages'>"
                + "<div class='VisionLeftArrowIcon'>"
                + "<input type='button' class='VisionButtonLeft' id='ButtonLeft' onclick='leftButtonData(event)' value='<'>"
                + "</div>"
                + "<div class='VisionAscList'>"
                + "<input type='button' class='visionAscBtn' id = 'AscButton' onclick='ascAppendData(event)' value='>(Asc)'>"
                + " </div>"
                + "<div class='VisionDescList'>"
                + "<input type='button' class='visionDescBtn' id = 'DescButton' onclick='descAppendData(event)' value='>(Desc)'>"
                + "</div>"
                + "</div>";
        inputString += "<div id='VisionDescListRight' class='VisionDescListRight'></div></div>";
        console.log("inputString::::" + inputString);
    }


    $("#dialog1").html(inputString);
    $("#dialog1").dialog({resizable: false,
        title: labelObject['Multi Columns Sorting'] != null ? labelObject['Multi Columns Sorting'] : 'Multi Columns Sorting',
        modal: true,
        //  height: 'auto',
        //    minHeight: 'auto',
        height: 400,
        width: 600,
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                click: function () {
                    var colsArray = [];
                    try {
                        $("#" + gridId + "_sort_columns").remove();
                    } catch (e) {
                    }

                    $("#" + gridId).append("<input type='hidden' id='" + gridId + "_sort_columns' value=''/>");
                    $("#VisionDescListRight div").each(function () {
                        var colName = $(this).attr('data-column');
                        var colOrder = $(this).attr('data-order');
                        var multisortObj = {};
                        multisortObj['column'] = colName;
                        multisortObj['order'] = colOrder;
                        colsArray.push(multisortObj);
                    });
                    $("#" + gridId + "_sort_columns").val(JSON.stringify(colsArray));
//                    multipleSortingOrder(gridId);
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    $("#" + gridId).jqxGrid('updatebounddata');
                    try {
                        $("#" + gridId).jqxGrid('clearselection');
                    } catch (e) {
                    }

                }},
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                click: function () {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
//                    $("#" + gridId).jqxGrid('clearselection');

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
}//multipleGridSort
function multipleSortingOrder(currentGridId) {
    $("#" + currentGridId).jqxGrid('updatebounddata');
}
function removeGridSort(currentGridId) {
    $("#" + currentGridId + "_sort_columns").val("");
    var sortcolumn = $("#" + currentGridId).jqxGrid('getsortcolumn');
    if (sortcolumn != null && sortcolumn != '') {
        $("#" + currentGridId).jqxGrid('removesort');
    } else {
        $("#" + currentGridId).jqxGrid('updatebounddata');
    }
}
function gridFormViewOperations(id, gridId, operationName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var gridData = {};
    if (gridId != null && gridId != '') {
        var errorCount = 0;
        var unMatchCount = 0;
        var selectedIndex = $("#" + gridId + "_selectedIndex").val();
        var currentRowOldData = {};
        if (selectedIndex != null && selectedIndex != '') {
            currentRowOldData = $('#' + gridId).jqxGrid('getrowdata', parseInt(selectedIndex));
        }
        $("#" + gridId + "_TABLE_FORM_VIEW :input").each(function () {
            var textid = $(this).attr("id");
            var type = $(this).attr("type");
            var mand = $(this).attr("data-mandatory");
            var label = $(this).attr("data-label");
            var regex = $(this).attr("data-regex");
            var returnBoolean = regexFunction(textid, regex, mand, gridId, label);
            if (returnBoolean == false)
            {
                errorCount++;
                return false;
            } else {
                var textval = $(this).val();
                if (type != 'hidden') {
                    if (textval != null && textval != '') {
                        textval = textval.toUpperCase();
                    }
                }
                if (currentRowOldData != null
                        && !jQuery.isEmptyObject(currentRowOldData)
                        && currentRowOldData[textid] != textval) {
                    unMatchCount++;
                }


            }

            if (textid != null && textid != 'CREATE_DATE') {
                gridData[textid] = textval;
            }

        });
        var hiddenValue = $("#" + gridId + "_HIDDEN").val();
        if (hiddenValue == 'INSERT') {
            unMatchCount = 1;
        }
        if (unMatchCount != 0 && errorCount == 0) {
            var selectedDataArray = [];
            selectedDataArray.push(gridData);
            var url = "gridUpdateRecords";
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
                    var response = "";
                    if (result != null && result != '' && result.messageFlag == 'true' || result.messageFlag == true) {
                        response = result.message;
                    } else
                    if (result != null && result != '' && result.lastIndexOf("No records Found") > -1) {
                        response = "Deleted Successfully.";
                    } else
                    {
                        response = result;
                    }
                    var dialogSplitMessage = dialogSplitIconText(response, "Y");
                    $("#dialog").html(dialogSplitMessage);
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
                            if (result != null && result != '' && result.indexOf("Updated Successfully") > -1) {
                                $("#" + gridId + "_HIDDEN").val("UPDATE");
                            }
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                },
                error: function (e)
                {
                    sessionTimeout(e);
                }

            });
        } else if (errorCount == 0) {
            stopLoader(); //9
            var results = "No Changes to Save";
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
        }
    }
}
function SPValidationChange(currentID) {
    var tableName = $("#" + currentID).attr("data-viewid");
    var currentVal = $("#" + currentID).val();
    if (currentVal != "" && currentVal != undefined && currentVal != null) {
        if (currentVal === "PLANNED" || currentVal == "NONPLANNED") {
            handlePlannedValidation(tableName, currentVal);
        } else if (currentVal === "STRATEGIC" || currentVal == "NON STRATEGIC") {
            handleStrategicValidation(tableName, currentVal);
        }
    }
}
function handlePlannedValidation(tableName, currentLabel) {
    $("table#" + tableName + "_TABLE :input").each(function () {
        var id = $(this).attr('id');
        var label = $(this).attr("data-label");
        var value = $("#" + id).val();
        if (currentLabel == "PLANNED" && label == "Strategic" && (value != "STRATEGIC" || value == "STRATEGIC")) {
            markLabelMandColorRed(tableName, "Yeary Demand System");
            updateDataMandatory(tableName, "Yeary Demand System");
            removeAllValidations(tableName, "Min Quantity")
        } else if (currentLabel == "NONPLANNED" && value == "STRATEGIC") {
            markLabelMandColorRed(tableName, "Min Quantity");
            updateDataMandatory(tableName, "Min Quantity");
            removeAllValidations(tableName, "Yeary Demand System")
        } else if (currentLabel == "NONPLANNED" && value != "STRATEGIC") {
            removeAllValidations(tableName, "Yeary Demand System")
        }


    });
}
function handleStrategicValidation(tableName, currentLabel) {
    $("table#" + tableName + "_TABLE :input").each(function () {
        var id = $(this).attr('id');
        var label = $(this).attr("data-label");
        var value = $("#" + id).val();
        if (currentLabel === "STRATEGIC" && label == "Plan/NonPlan" && value != "PLANNED") {
            markLabelMandColorRed(tableName, "Min Quantity");
            updateDataMandatory(tableName, "Min Quantity");
            removeAllValidations(tableName, "Yeary Demand System")
        } else if ((currentLabel === "STRATEGIC" || "NON STRATEGIC") && label == "Plan/NonPlan" && value == "PLANNED") {
            markLabelMandColorRed(tableName, "Yeary Demand System");
            updateDataMandatory(tableName, "Yeary Demand System");
            removeAllValidations(tableName, "Min Quantity")

        } else if (currentLabel === "NON STRATEGIC" && label == "Plan/NonPlan" && value != "PLANNED") {
            removeAllValidations(tableName, "Min Quantity")
            removeAllValidations(tableName, "Yeary Demand System")

        }

    });
}
function markLabelMandColorRed(tableName, labelName) {
    $("#" + tableName + "_TABLE th").each(function () {
        var thValue = $(this).text();
        if (thValue === labelName) {
            $(this).addClass("labelMandColorRed");
        }
    });
}
function updateDataMandatory(tableName, labelName) {
    $("table#" + tableName + "_TABLE :input").each(function () {
        var label = $(this).attr("data-label");
        if (label === labelName) {
            $(this).attr("data-mandatory", "M");
            var regex = $(this).data("regex");
            var mand = $(this).attr("data-mandatory");
            var id = $(this).attr("id");
            var returnBoolean = regexFunction(id, regex, mand, tableName, label);
        }
    });
}
function removeAllValidations(tableName, labelName) {
    $("table#" + tableName + "_TABLE :input").each(function () {
        var label = $(this).attr("data-label");
        var id = $(this).attr("id");
        if (label != "" && label === labelName) {
            $(this).attr("data-mandatory", "O");
            $("." + id).html("");
        }
    });
    $("#" + tableName + "_TABLE th").each(function () {
        var thValue = $(this).text();
        if (thValue === labelName) {
            $(this).removeClass("labelMandColorRed");
        }
    });
}
function getDataBasedonKey() {
    var firstLetterAsInt = 0;
    var grandparentWithRole = $(event.target).closest('[role="row"]');
    var grandparentId = grandparentWithRole.attr('id');
    var modifiedText = grandparentId.replace('row', '');
    var numbersOnly = modifiedText.match(/\d+/g);
    if (numbersOnly) {
        firstLetterAsInt = parseInt(numbersOnly);
    }
    var stringWithoutFirstLetter = modifiedText.replace(/\d+/g, '');
    $("#" + stringWithoutFirstLetter).jqxGrid('clearselection');
    $("#" + stringWithoutFirstLetter).jqxGrid('selectrow', firstLetterAsInt);
}
function formPageScroll() {
    let $container = $("#accdiv");
    let $target = $("#accdiv").find('h3').offset().top;
    let $content = $("#accdiv").find('visionRegisterMaterialTableTab');
    if ($content.is(":visible")) {
    }
    $container.animate({
        scrollTop: $target - 80
    }, "swing")

}



function getFormDatawithImagecarousel(clusterparam, selectedNextPrevIndex) {
    try {
        if (clusterparam != null && clusterparam != '' && clusterparam != undefined) {
            var clusterparamStr = clusterparam;
            clusterparam = JSON.parse(clusterparam);
            var orgChartParams = [];
            var paramArray = [];
            var clusterId = clusterparam['ClusterId'];
            var gridId = clusterparam['gridId'];
            var formgridId = clusterparam['formgridId'];
            if (formgridId != null && formgridId != "" && formgridId != 'undefined') {
            } else {
                formgridId = gridId;
            }
            var popupheight = clusterparam['height'];
            var popupwidth = clusterparam['width'];
            var popupImageHeight = clusterparam['ImageHeight'];
            var WhereCondition = clusterparam['whereCond'];
            var defaultValuesFieldStr = clusterparam['defaultValuesFields'];
            var titleMessage = clusterparam['titleMessage'];
            var dialogwidth = '500';
            var dialogheight = '1500';
            var imageHeight = '500';
            var tmessage = 'ViewFormData';
            try {
                if (selectedNextPrevIndex != null && selectedNextPrevIndex != "undefined") {
                } else {
                    try {
                        const element = document.getElementById("htmlpopupformData");
                        element.remove();
                    } catch (es) {
                    }
                    try {
                        const div = document.createElement("div");
                        div.id = "htmlpopupformData";
                        div.className = "htmlpopupformData";
                        div.style = "position:relative;";
                        document.body.appendChild(div);
                        const div2 = document.createElement("div");
                        div2.id = "itemImagescarouselData";
                        div2.className = "itemImagescarouselData";
                        div2.style = "position:absolute;top:0px;width:40%;height:100%;overflow-y:scroll;left:0px;z-index:2";
                        document.getElementById("htmlpopupformData").appendChild(div2)
                        const div3 = document.createElement("div");
                        div3.id = "itemFormData";
                        div3.className = "itemFormData";
                        div3.style = "position:absolute;top:0px;width:60%;height:100%;overflow-y:scroll;right:0px;";
                        document.getElementById("htmlpopupformData").appendChild(div3)
                    } catch (ey) {
                    }
                }
            } catch (ez) {
            }
            if (titleMessage != null && titleMessage != "" && titleMessage != 'undefined') {
                tmessage = titleMessage;
            }
            if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined') {
                dialogwidth = popupwidth;
            }
            if (popupheight != null && popupheight != "" && popupheight != 'undefined') {
                dialogheight = popupheight;
            }
            if (popupImageHeight != null && popupImageHeight != "" && popupImageHeight != 'undefined') {
                imageHeight = popupImageHeight;
            }
            console.log();
            var message = "";
            var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
            var selectedRowsData = [];
            var totalRowIndex = indexes.length;
            if (totalRowIndex != null && totalRowIndex <= 0) {
                message = "Please select any Record to view";
                showErrorPopupMessage(message);
            } else if (totalRowIndex != null && totalRowIndex > 1) {
                message = "Please select only One Record to view";
                showErrorPopupMessage(message);
            } else {
                var selectedIndex = 0;
                var rowData = "";
                var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
                if (selectedRowIndexes != null && selectedRowIndexes.length != 0 && selectedRowIndexes[0] != -1) {
                    var totalRowIndex = selectedRowIndexes.length;
                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                    if (datainformations != null) {
                        var paginginformation = datainformations['paginginformation'];
                        if (paginginformation != null) {
                            var pagesize = paginginformation['pagesize'];
                            if (pagesize != null && parseInt(pagesize) < totalRowIndex && selectedRowIndexes[0] != null && selectedRowIndexes[0] != -1) {
                                rowData = $('#' + gridId).jqxGrid('getrowdata', selectedRowIndexes[0]);
                            } else {
                                rowData = $('#' + gridId).jqxGrid('getrowdata', selectedRowIndexes[selectedRowIndexes.length - 1]);
                            }
                        }
                    }
                    if (selectedRowIndexes[0] != -1) {
                        selectedIndex = selectedRowIndexes[0];
                    }
                }
                if (selectedNextPrevIndex != null && selectedNextPrevIndex != "undefined" && selectedNextPrevIndex != undefined && selectedNextPrevIndex != -1) {
                    selectedIndex = selectedNextPrevIndex;
                    rowData = $('#' + gridId).jqxGrid('getrowdata', selectedNextPrevIndex);
                }
                if (selectedIndex != -1) {
//            var rowData = $('#' + gridId).jqxGrid('getrowdata', selectedIndex);
                    if (rowData != null) {
                        var items = {};
                        var paramsData = {};
                        var linkedColumns = $("#" + gridId + "_linkedColumns").val();
                        if (linkedColumns != null && linkedColumns != '') {
                            for (var key in rowData) {
                                if (linkedColumns.lastIndexOf(key) > -1) {
                                    var value = rowData[key];
                                    if (value != null && value != '') {
//    console.log("key::::" + key + ":::value::::" + value);
                                        value = value.replace(/\s/gi, "_");
                                        value = value.replace(/[#]/g, "_");
                                    }
                                    items[key] = value;
                                }
                            }
                        }
                        var stripValueStr = $("#" + gridId + "_stripValue").val();
                        var stripValueObjArray = [];
                        if (stripValueStr != null) {
                            var stripValObj = stripValueStr.split(";");
                            for (var i = 0; i < stripValObj.length; i++) {
                                var stripValueObj = {};
                                if (stripValObj[i] != null && stripValObj[i] != '' && typeof stripValObj[i] != 'undefined') {
                                    if (stripValObj[i].indexOf(",") > -1) {
                                        var stripVal = stripValObj[i].split(",");
                                        //                                     if (stripVal[0] != null && stripVal[1] != null) {
                                        stripValueObj.columnName = stripVal[0];
                                        stripValueObj.value = stripVal[1];
                                        //                                        stripValueObj.value = encodeURIComponent(stripVal[1]);
                                        stripValueObjArray.push(stripValueObj);
                                    }
                                }
                            }
                        }
//
                        var hiddenObjStr = $("#" + gridId + "_hiddenObj").val();
                        //                var hiddenObjStr = $("#hiddenObject").val();
                        if (hiddenObjStr != null) {
                            var hiddenObj = JSON.parse(hiddenObjStr);
                            for (var key in hiddenObj) {
                                var value = hiddenObj[key];
                                // alert(key+":::::"+value);
                                if (value != null && value != '' && value != 'null') {
                                    if (key != null && key.lastIndexOf("HIDDEN") > -1) {
                                        var columnsArray = value.split(",");
                                        //  alert("columnsArray:::"+columnsArray);
                                        var hiddenIds = key.split("HIDDEN_");
                                        var hiddenVal = rowData[hiddenIds[1]];
                                        for (var i = 0; i < columnsArray.length; i++) {
                                            if (columnsArray[i] != 'NAME1') {
                                                items[columnsArray[i]] = hiddenVal;
                                                //                                                items[columnsArray[i]] = encodeURIComponent(hiddenVal);
                                            }
                                        }
                                    }
                                } else {//alert("Value is null");
                                }
                            }
                        }
                        items.stripValue = stripValueObjArray;
                        items.panelId = $("#" + gridId + "_panelId").val();
                        items.formId = $("#" + gridId + "_formId").val();
                        //_formId
                        //                items.formId = $("#masterFormId").val();
                        //                items.panelId = $("#masterPanelId").val();
                        items.imageColumn = $("#" + gridId + "_imageColumn").val();
                        //$("#masterImageColumn").val();
                        items.imageTable = $("#" + gridId + "_imageTable").val();
                        //                items.imageTable = $("#imageTable").val();
                        items.imageTableColumn = $("#" + gridId + "_imageTableColumn").val();
                        //                items.imageTableColumn = $("#imageTableColumn").val();
                        items.linkedColumns = linkedColumns;
                        items.gridId = formgridId;
                        items.clusterId = clusterId;
                        items.objectid = $("#" + gridId + "_formId").val();
                        var datainformation = $('#' + gridId).jqxGrid('getdatainformation');
                        var rowscount = datainformation.rowscount;
                        items.selectingrowindex = selectedIndex;
                        items.rowscount = rowscount;
                        items.clusterparamStr = clusterparamStr;
                        items.clusterparam = clusterparam;
                        items.parentgridId = gridId;
                        var colInitParamObj = $("#" + gridId + "_columnInitParams").val();
                        if (colInitParamObj != null && colInitParamObj != '') {
                            items.colInitParamObj = JSON.parse(colInitParamObj);
                        }
                        if (selectedIndex != -1) {
                            paramsData = {
                                items: JSON.stringify(items)
                            }
                        }
                        if (paramsData != null && !jQuery.isEmptyObject(paramsData)) {
// need to open form
                            ajaxStart();
                            $.ajax({
                                type: "POST",
                                url: 'clusterFormData',
                                // async: false,
                                data: paramsData,
                                traditional: true,
                                cache: false,
                                success: function (response) {
                                    ajaxStop();
                                    if (response != null && response != '') {
                                        $('#itemFormData').html("");
                                        $('#itemImagescarouselData').html("");
                                        $('#itemFormData').html(response);
                                        var popupformpanelId = $("#popupformpanelId").val();
                                        var popupformobjectid = $("#popupformobjectid").val();
                                        try {
                                            var recordNo = rowData['RECORD_NO'];
                                            var orgnId = rowData['ORGN_ID'];
                                            var reqData = {};
                                            var headers = {};
                                            //        var dataResponse = {};
                                            var imagestr = "";
                                            reqData.apiReqId = "6085DAB947664BEAB39921AC425BB71A";
                                            reqData.apiReqCols = "";
                                            reqData.apiReqWhereClause = "RECORD_NO = '" + recordNo + "'";
                                            reqData.apiReqOrgnId = orgnId;
                                            reqData.apiReqUserId = "apiReqUserId";
                                            reqData.apiRetType = "JSON";
                                            headers['Content-Type'] = 'text/plain';
                                            ajaxStart();
                                            $.ajax({
                                                type: "POST",
                                                url: "getApiRequestResultsData",
                                                data: JSON.stringify(reqData),
                                                traditional: true,
                                                cache: false,
                                                //            dataType: 'text/plain',
                                                headers: headers,
                                                success: function (apiresponse) {
                                                    //                    console.log(apiresponse);
                                                    ajaxStop();
                                                    var dataResponse = JSON.parse(apiresponse);
                                                    var messageResponse = dataResponse['Message'];
                                                    if (messageResponse == 'Data extracted for Requested Criteria or API') {
                                                        var imageDataArray = dataResponse['apiDataArray'];
                                                        if (imageDataArray.length > 0) {
                                                            imagestr = "<div id='owlimagecarouselRendererId' class='owl-carousel owl-theme'>";
                                                            for (var i = 0; i < imageDataArray.length; i++) {
                                                                var obj = imageDataArray[i];
                                                                var attachType = obj['ATTACH_TYPE'].toString();
                                                                var content = obj['CONTENT'].toString();
                                                                var attachExtension = obj['ATTACH_EXTENSION'].toString();
                                                                var imgid = obj['AUDIT_ID'].toString();
                                                                var onmouseover = "onMouseOverImageZoomIn('" + imgid + "')"
                                                                var onmouseout = "onMouseOverImageZoomOut('" + imgid + "')"
                                                                attachExtension.replace('.', '');
                                                                if (content != null) {
                                                                    //                imagestr += "<div class='item'><div>"+attachType+"</div><div><a href='data:image" + attachExtension + ";base64," + content + "' class=image-link'><img src='data:image" + attachExtension + ";base64," + content + "' alt='" + attachType + "' height='500'></div></div>";
                                                                    //                imagestr += "<div class='item'><div>"+attachType+"</div><div><img class='zoom-img' src='data:image" + attachExtension + ";base64," + content + "' data-zoom-image='data:image" + attachExtension + ";base64," + content + "' alt='" + attachType + "' height='500'></div></div>";
                                                                    //                imagestr += "<div class='item'><div>"+attachType+"</div><div><img id = '"+imgid+"' src='data:image" + attachExtension + ";base64," + content + "'  alt='" + attachType + "'  onmouseover='onMouseOverImageZoomIn("+imgid+")' onmouseout='onMouseOverImageZoomOut("+imgid+")' height='"+imageHeight+"'></div></div>";
                                                                    //                 imagestr += "<div class='item'><div>"+attachType+"</div><div><img class = 'imageZoom' id = '"+imgid+"' src='data:image" + attachExtension + ";base64," + content + "'  alt='" + attachType + "' height='"+imageHeight+"'></div></div>";
                                                                    imagestr += "<div class='item'><div>" + attachType + "</div><div><img id = '" + imgid + "' src='data:image" + attachExtension + ";base64," + content + "'  alt='" + attachType + "'></div></div>";
                                                                }
                                                            }
                                                            imagestr += "</div>";
                                                            $('#itemImagescarouselData').html("");
                                                            $('#itemImagescarouselData').html(imagestr);
                                                            var owl = $('.owl-carousel');
                                                            owl.owlCarousel({
                                                                loop: true,
                                                                nav: true,
                                                                items: 1,
                                                                navText: ["prev", "next"],
                                                            });
                                                            owl.on('mousewheel', '.owl-stage', function (e) {
                                                                if (e.deltaY > 0) {
                                                                    owl.trigger('next.owl');
                                                                } else {
                                                                    owl.trigger('prev.owl');
                                                                }
                                                                e.preventDefault();
                                                            });
                                                            //              $('.image-link').magnificPopup({
                                                            //        type: 'image',
                                                            //        gallery:{
                                                            //          enabled:true
                                                            //        }
                                                            //      });
                                                            // $('.imageZoom').each(function() {
                                                            //     var imagePath = $(this).attr("src"); 
                                                            //     $(this).attr("data-zoom-image", imagePath); 
                                                            //     $(this).attr("data-image", imagePath); 
                                                            //        $(this).elevateZoom({
                                                            //          zoomType: "lens",
                                                            //          cursor: "pointer",
                                                            ////          zoomActivation:"hover",
                                                            ////          zoomEnabled:true,
                                                            ////          scrollZoom:true,
                                                            //          easing : true,
                                                            //          imageCrossfade: true,
                                                            ////          scrollZoomIncrement: 0.1,
                                                            //        });
                                                            //      });       
                                                            //        $('.imageZoom').hover(function(){
                                                            //        var id = $(this).id;
                                                            //         var originalImg = $(this);
                                                            //        var zoomimgId = id+id
                                                            //        var imagePath = $(this).attr("src"); 
                                                            //         $("#visionGenericImageHover").empty();
                                                            //          var imagePaths = "<span><img id = '"+zoomimgId+"' src='" + imagePath + "'></span>";
                                                            //           $("#visionGenericImageHover").show();
                                                            //    $("#visionGenericImageHover").append(imagePaths);
                                                            //    var zoomFactorwidth = 20;
                                                            //    var zoomFactorheight = 1.2;
                                                            //    var zoomedImg = $('#'+zoomimgId);
                                                            ////    var zoomFactor = 2;
                                                            //    var rect = originalImg.offset();
                                                            //    $("#visionGenericImageHover").css({
                                                            //          width: (originalImg.width() * zoomFactorwidth) + 'px',
                                                            //          height: (originalImg.height() * zoomFactorheight) + 'px'
                                                            //        });
                                                            //    zoomedImg.css({
                                                            //          left: rect.left + originalImg.width() + 'px',
                                                            //          top: rect.top + 'px',
                                                            //          width: (originalImg.width() * zoomFactorwidth) + 'px',
                                                            //          height: (originalImg.height() * zoomFactorheight) + 'px',
                                                            //          display: 'block'
                                                            //        });
                                                            //    
                                                            //      }, function(){
                                                            //        $('#visionGenericImageHover').hide(); // Hide the zoomed-in image on mouse out
                                                            //      });
                                                        }
                                                    } else {
                                                        imagestr = "<div>No Images Feteched for Selected Record</div>";
                                                        $('#itemImagescarouselData').html("");
                                                        $('#itemImagescarouselData').html(imagestr);
                                                    }
                                                    ajaxStop();
                                                },
                                                error: function (e) {
                                                    console.log(e);
                                                    imagestr = "<div>No Images Feteched for Selected Record</div>";
                                                    $('#itemImagescarouselData').html("");
                                                    $('#itemImagescarouselData').html(imagestr);
                                                    ajaxStop();
                                                }
                                            });
                                        } catch (e) {
                                            console.log(e)
                                            ajaxStop();
                                        }
                                        try {
                                            var lowercaseFields = $("#lowercaseFields").val();
                                            var panaloldData = {};
                                            $("#mat_creation_form_table :input").each(function () {
                                                var textid = $(this).attr("id");
                                                var type = $(this).attr("type");
                                                var textval = $(this).val();
                                                if (type != 'hidden') {
                                                    if (textval != null && textval != '') {
                                                        if (lowercaseFields != null && lowercaseFields != "undefined" && lowercaseFields != "") {
                                                            if (!lowercaseFields.includes(textid)) {
                                                                textval = textval.toUpperCase();
                                                            }
                                                        } else {
                                                            textval = textval.toUpperCase();
                                                        }
                                                    }
                                                }
                                                if (type != null && type == 'checkbox') {
                                                    //
                                                    if ($("#" + textid).is(':checked')) {
                                                        textval = "Y";
                                                    } else {
                                                        textval = "N";
                                                    }
                                                }
                                                if (textid != null && textid != 'CREATE_DATE') {
                                                    panaloldData[textid] = textval;
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
                                                        panaloldData[columnsArray[i]] = hiddenVal;
                                                        //                                                        panaloldData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                                                    }
                                                }
                                                if (lowercaseFields != null && lowercaseFields != "undefined" && lowercaseFields != "") {
                                                    var lowercaseFieldsArray = lowercaseFields.split(",");
                                                    for (var i = 0; i < lowercaseFieldsArray.length; i++) {
                                                        $("#" + lowercaseFieldsArray[i]).css("text-transform", "none");
                                                    }
                                                }
                                            });
                                            $('#formpanaloldData').val(JSON.stringify(panaloldData));
                                            $("#Save").attr("id", "saveFormDatawithImage");
                                            $("#saveFormDatawithImage").attr('onClick', 'saveFormDatawithImage()');
                                        } catch (ee) {
                                        }
                                        $('#formId').val(popupformobjectid);
                                        $("#panelId").val(popupformpanelId);
                                        //            $("parentgridId").val(gridId);
                                        //            $("clusterparam").val(clusterparamStr);  
                                        $("#htmlpopupformData").dialog({
                                            title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                                            modal: true,
                                            //                    height: 'auto',
                                            //                    minHeight: 'auto',
                                            //                    minWidth: '1100',
                                            //                    maxWidth: 'auto',
                                            height: dialogheight,
                                            minWidth: dialogwidth,
                                            fluid: true,
                                            zIndex: 90000,
                                            resizeable: true,
                                            open: function () {
                                                //                    $.getScript("../js/valid.js");
                                                //                    $("parentgridId").val(gridId);
                                                //            $("clusterparam").val(clusterparamStr);  
                                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                                $(".visionHeaderMain").css("z-index", "999");
                                                $(".visionFooterMain").css("z-index", "999");
                                                $(".accordian").accordion({
                                                    theme: 'energyblue',
                                                    collapsible: true,
                                                    heightStyle: "content",
                                                    active: false,
                                                    autoHeight: false,
                                                    animate: 300
                                                });
                                                $('.accordian h3').bind('click', function () {
                                                    var userIds = $(this).data('onclick');
                                                    eval(userIds);
                                                    $('.collapseAll').removeAttr("disabled");
                                                    //                    $(".ui-accordion-header").addClass("ui-state-disabled");
                                                    var self = this;
                                                    setTimeout(function () {
                                                        var theOffset = $(self).offset();
                                                        $('body,html').animate({
                                                            scrollTop: theOffset.top - 40
                                                        });
                                                    }, 310);
                                                    // ensure the collapse animation is done
                                                });
                                                $("#backToSearch").click(function () {
                                                    window.parent.focus();
                                                    window.close();
                                                });
                                                $(window).scroll(function () {
                                                    $("#top_arrow").show();
                                                    $("#bottom_arrow").hide();
                                                    var scroll = $(window).scrollTop();
                                                    //console.log(scroll);
                                                    if (scroll <= 0) {
                                                        $("#top_arrow").hide();
                                                        $("#bottom_arrow").show();
                                                    } else {
                                                        $("#top_arrow").show();
                                                        $("#bottom_arrow").hide();
                                                    }
                                                });
                                                $('.scrollToBottom').bind("click", function () {
                                                    var heightscroll = $(document).height();
                                                    $('html, body').animate({
                                                        scrollTop: heightscroll
                                                    }, 1200);
                                                    return false;
                                                });
                                                $('.scrollToTop').bind("click", function () {
                                                    $('html, body').animate({
                                                        scrollTop: 0
                                                    }, 600);
                                                    $("#top_arrow").hide();
                                                    $("#bottom_arrow").show();
                                                    return false;
                                                });
                                                var icons = $("#accordion").accordion("option", "icons");
                                                $('.expandAll').click(function () {
                                                    var userIds = $('.ui-accordion-header').map(function () {
                                                        return $(this).data('onclick');
                                                    }).get();
                                                    for (var i = 0; i < userIds.length; i++) {
                                                        eval(userIds[i]);
                                                    }
                                                    $('.ui-accordion-header').removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top').attr({
                                                        'aria-selected': 'true',
                                                        'tabindex': '0'
                                                    });
                                                    $('.ui-accordion-header-icon').removeClass(icons.header).addClass(icons.headerSelected);
                                                    $('.ui-accordion-content').addClass('ui-accordion-content-active').attr({
                                                        'aria-expanded': 'true',
                                                        'aria-hidden': 'false'
                                                    }).show();
                                                    $(this).attr("disabled", "disabled");
                                                    $('.collapseAll').removeAttr("disabled");
                                                    $(".ui-accordion-header").addClass("ui-state-disabled");
                                                    $('#expandAll').css("display", "none");
                                                    $('#collapseAll').css("display", "inline-block");
                                                });
                                                $('.collapseAll').click(function () {
                                                    $('.ui-accordion-header').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-corner-all').attr({
                                                        'aria-selected': 'false',
                                                        'tabindex': '-1'
                                                    });
                                                    $('.ui-accordion-header-icon').removeClass(icons.headerSelected).addClass(icons.header);
                                                    $('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({
                                                        'aria-expanded': 'false',
                                                        'aria-hidden': 'true'
                                                    }).hide();
                                                    $(this).attr("disabled", "disabled");
                                                    $('.expandAll').removeAttr("disabled");
                                                    $(".ui-accordion-header").removeClass("ui-state-disabled");
                                                    $('#collapseAll').css("display", "none");
                                                    $('#expandAll').css("display", "inline-block");
                                                });
                                                $('.ui-accordion-header').click(function () {
                                                    $('.expandAll').removeAttr("disabled");
                                                    $('.collapseAll').removeAttr("disabled");
                                                    //                                        $('html, body').animate({
                                                    ////                                            scrollTop: $(document).height()
                                                    //                                        }, 2300);
                                                });
                                                $('.visionRegisterMaterialTableTab').on("click", "li", function () {
                                                    var self = this;
                                                    setTimeout(function () {
                                                        var theOffset = $(self).offset();
                                                        $('body,html').animate({
                                                            scrollTop: theOffset.top - 80
                                                        });
                                                        $(this).next().visionTabMenuFormData('show', 20);
                                                    }, 310);
                                                    // ensure the collapse animation is done
                                                });
                                            },
                                            beforeClose: function (event, ui) {
                                                try {
                                                    const element = document.getElementById("htmlpopupformData");
                                                    element.remove();
                                                } catch (es) {
                                                }
                                                $(".zoomContainer").remove();
                                                $(".visionHeaderMain").css("z-index", "99999");
                                                $(".visionFooterMain").css("z-index", "99999");
                                            }
                                        });
                                    }
                                },
                                error: function (e) {
                                    ajaxStop();
                                    sessionTimeout(e);
                                }
                            });
                        }
                    }
                }
            }
        }
    } catch (es) {
        ajaxStop();
        sessionTimeout(es);
    }
    ajaxStop();
}

