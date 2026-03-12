/*For setting cursor position after typing some thing in value column of properties tab
 * Created By Azmat*/


var tabsOldData = {};
var ssDatePickerObj = {};
var accordionSwitchflag = true;
var tabSwitchflag = true;
var changeflag = false;
var cellOldValue;
var globalTabId;
var globalErpTab;
var executed = false;
var orgChartParams = [];
// ravi start
var onTabclickFunc = null;
var tabSwitched = true;
var currentClickedGridId = null;
var childChangeflag = false;
var childGrid1Changeflag = false;
var childGrid2Changeflag = false;
var targetInput;
var scrollClickLen = 0;
var labelObject = {};
var VisualizationchartsFlag = false;
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

// ravi start
function checkChanges(tabId) {
    var abc = arguments.calle;
    var contentTabId = $("#" + tabId).closest(".jqx-splitter-panel").attr("id");
    if (contentTabId == null) {
        contentTabId = $("#" + tabId).closest("[id^=level]").attr("id");
    }
    if (contentTabId == "level1TabId") {

        // if (!childChangeflag) {
        var dataView = $("#" + tabId + "_Update").attr("data-view");

        if (dataView != null && dataView == 'FORM-VIEW') {
            var matchedCount = 0;
            var selectedTabOldData = tabsOldData[tabId];
            $("#" + tabId + "tbl" + " :input").each(function ()
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

                if (textid != null && textid != 'CREATE_DATE') {

                }

                var textOldVal = "";
                if (selectedTabOldData != null) {
                    textOldVal = selectedTabOldData[textid];
                }
                if (textval != textOldVal) {
                    matchedCount++;
                }
            });

            if (matchedCount > 0) {
                console.log(" matchedCount " + matchedCount);
                childChangeflag = true;
                // changeflag = true;
            }


        } else {


            console.log(" GRID-VIEW CODE");
            var changecount = 0;
            $("[id=contenttable" + tabId + "]  :input").each(function () {
                // $("[id^=contenttable] :input").each(function () {
                //            var textid = $(this).attr("id");
                var type = $(this).attr("type");
                var textval = $(this).val();
                console.log(" type : " + type + " textval : " + textval + " cell old value " + cellOldValue);
//                      if( $(this).parent().find('.jqx-icon-calendar').length>0){
//                          
//                      }

                if (cellOldValue == null) {
                    cellOldValue = "";
                }
                if (this.offsetWidth != 0 && textval != null && textval != cellOldValue) {
                    changecount++;
                }
            });
            if (changecount > 0) {
                childChangeflag = true;

                var gridCount = $("#level1TabId").find(".jqx-grid").length;
                if (gridCount > 1) {
                    var childGrids = $("#level1TabId").find(".jqx-grid");
                    var childGrid1 = childGrids[0].id;
                    var childGrid2 = childGrids[1].id;
                    if (tabId == childGrid1) {
                        childGrid1Changeflag = true;
                    } else if (tabId == childGrid2) {
                        childGrid2Changeflag = true;
                    }
                }


                // changeflag=true;
            }

        }
        //  }
    } else {
        if (!changeflag) {
            var dataView = $("#" + tabId + "_Update").attr("data-view");

            if (dataView != null && dataView == 'FORM-VIEW') {
                var matchedCount = 0;
                var selectedTabOldData = tabsOldData[tabId];
                $("#" + tabId + "tbl" + " :input").each(function ()
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

                    if (textid != null && textid != 'CREATE_DATE') {

                    }

                    var textOldVal = "";
                    if (selectedTabOldData != null) {
                        textOldVal = selectedTabOldData[textid];
                    }
                    if (textval != textOldVal) {
                        matchedCount++;
                    }
                });

                if (matchedCount > 0) {
                    console.log(" matchedCount " + matchedCount);
                    changeflag = true;
                }


            } else {

                var matchedcount = 1;
                console.log(" GRID-VIEW CODE");
                var changecount = 0;
                $("[id=contenttable" + tabId + "]  :input").each(function () {
                    // $("[id^=contenttable] :input").each(function () {
                    //            var textid = $(this).attr("id");
                    var type = $(this).attr("type");
                    var textval = $(this).val();
                    console.log(" type : " + type + " textval : " + textval + " cell old value " + cellOldValue);
//                      if( $(this).parent().find('.jqx-icon-calendar').length>0){
//                          
//                      }

                    if (cellOldValue == null) {
                        cellOldValue = "";
                    }
                    if (this.offsetWidth != 0 && textval != null && cellOldValue != null && textval != cellOldValue) {
                        changecount++;
                    }
                });
                if (changecount > 0) {
                    changeflag = true;
                }

            }
        }
    }
}
function askConfirmation(event, jqxTabId) {

    if (!executed) {
        if (changeflag || childChangeflag) {
            if (tabSwitchflag) {

                event.cancel = true;
            }

            $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
            $("#logoutDailog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                width: 300,
                height: 135,
                fluid: true,
                buttons: [{
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
                            // changeflag = false;
                            executed = true;
                            $('#' + jqxTabId).jqxTabs('select', selectedTab);

                            $(this).dialog("destroy");

                            // changeflag = false;
                            tabSwitchflag = true;
                            tabSwitched = true;



                        }
                    },
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
}
function askConfirmationOnPageChange(event, contentTabId) {

    if ($(event.target).hasClass('jqx-icon-arrow-right') || $(event.target).hasClass('jqx-icon-arrow-left')
            || $(event.target.children[0]).hasClass('jqx-icon-arrow-right') || $(event.target.children[0]).hasClass('jqx-icon-arrow-left')) {
        var gridId = $(event.target).closest(".jqx-grid").attr("id");

//        var tabId = $(event.target).closest(".jqx-grid").attr("id");
//               
//        
//                    event.stopPropagation();
//                     var changecount = 0;
//                    $("#contenttable" + tabId + "  :input").each(function () {
//
//                var type = $(this).attr("type");
//                var textval = $(this).val();
//                console.log(" type : " + type + " textval : " + textval + " cell old value " + cellOldValue);
//
//
//                if (this.offsetWidth!=0  && textval != null && textval != cellOldValue) {
//                    changecount++;
//                }
//            });
//            if (changecount > 0) {
//                changeflag = true;
//            }


        if (changeflag || childChangeflag) {

            window.addEventListener(
                    'click',
                    captureClick,
                    true // <-- This registeres this listener for the capture
                    //     phase instead of the bubbling phase!
                    );

            $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
            $("#logoutDailog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                modal: true,
                width: 300,
                height: 135,
                fluid: true,
                buttons: [{
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
                                // } else if (contentTabId=="levelTabId" && changeflag ){
                                changeflag = false;
                                childChangeflag = false;
                                childGrid1Changeflag = false;
                                childGrid2Changeflag = false;
                            } else if (contentTabId == null) {
                                changeflag = false
                            }
                            $(event.target).trigger("click");



                        }
                    },
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

            //  throw new Error("");
        }

    }

}

function askConfirmationOnRowSelect(tabId, func) {
    $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
    $("#logoutDailog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        width: 300,
        height: 135,
        fluid: true,
        buttons: [{
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
                    //changeflag = false;

                    childChangeflag = false
                    childGrid1Changeflag = false;
                    childGrid2Changeflag = false;
                    if (tabId != null) {
                        $("#li_" + tabId).click();
                    } else {
                        eval(func);
                    }


                }
            },
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

function askConfirmationOnRefresh(gridId, refreshFunc) {
    $("#logoutDailog").html((labelObject['Unsaved changes will be lost'] != null ? labelObject['Unsaved changes will be lost'] : 'Unsaved changes will be lost') + ", " + (labelObject['you like to save'] != null ? labelObject['you like to save'] : 'you like to save') + "?");
    $("#logoutDailog").dialog({resizable: false,
        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
        modal: true,
        width: 300,
        height: 135,
        fluid: true,
        buttons: [{
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
                    //changeflag = false;
                    //var contentTabId = $("#" + gridId).closest(".jqx-splitter-panel").attr("id");
                    var contentTabId = $("#" + gridId).closest("[id^=level]").attr("id");
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

                        } else {
                            childChangeflag = false
                        }




                    } else if (contentTabId == "levelTabId" && changeflag || childChangeflag) {
                        changeflag = false;
                        childChangeflag = false;
                    } else if (contentTabId == null) {
                        changeflag = false
                    }



                    var refreshFunctionName = refreshFunc.toString();
                    refreshFunctionName = refreshFunctionName.substr('function '.length);
                    refreshFunctionName = refreshFunctionName.substr(0, refreshFunctionName.indexOf('('));
                    refreshFunctionName = refreshFunctionName + "('" + gridId + "')";
                    eval(refreshFunctionName);

                    //askConfirmationOnRefresh.caller();

                }
            },
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

function captureClick(e) {
    e.stopPropagation(); // Stop the click from being propagated.
    console.log('click captured');
    window.removeEventListener('click', captureClick, true); // cleanup
}

function getFilterGridFormPopup(gridId, pivotParams, orderByColumn) {
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
                selectedGridIndex: 0,
                orderByColumn: orderByColumnData,
            },
            success: function (response) {
                if (response != null && response != '') {
                    var filterFormObj = JSON.parse(response);

                    try {
                        $("#filterGridForm").html("");
                        $("#" + gridId + "_pivotgridparams").remove();
//                        $("#" + gridId + "_filter_columns").remove();
                        if (pivotParams != null && pivotParams != '' && pivotParams != undefined) {
                            $("#" + gridId).append("<input type='hidden' id='" + gridId + "_pivotgridparams' value=''/>");
                            $("#" + gridId + "_pivotgridparams").val(pivotParams);
                        }
                    } catch (e) {
                        console.log(e);
                    }
                    $("#filterGridForm").html(filterFormObj['result']);
                    try {
                        $("#" + gridId + "idxpTypeView").css("display", "none");
                    } catch (el) {
                        console.log(el);
                    }

                    try {

//                    $("#" + gridId + "_FILTER_FORM_TABLE input[type=hidden]").attr('value','');
//                    $("#" + gridId + "_FILTER_FORM_TABLE input[type=hidden]").attr('ondblclick','showContent(id)');
//                    $("#" + gridId + "_FILTER_FORM_TABLE input[type=hidden]").attr('splitcount','0');
//                    $("#" + gridId + "_FILTER_FORM_TABLE input[type=hidden]").attr('class','visionFlterGridColumn');
//                    $("#" + gridId + "_FILTER_FORM_TABLE input[type=hidden]").attr('data-type','T');
//                    $("#" + gridId + "_FILTER_FORM_TABLE input[type=hidden]").attr('data-mandatory','O');
//                    $("#" + gridId + "_FILTER_FORM_TABLE input[type=hidden]").attr('data-inputtype','T');
//                    $("#" + gridId + "_FILTER_FORM_TABLE input[type=hidden]").attr('data-viewid',gridId);
//                    $("#" + gridId + "_FILTER_FORM_TABLE input[type=hidden]").attr('type','text');
//                    
//                    
                        $("#" + gridId + "_FILTER_FORM_TABLE tbody tr td :input").each(function () {
                            var type = $(this).attr("type");
                            if (type == 'hidden') {
                                var eId = $(this).attr("id");

                                $(this).attr("type", 'text');
                                $(this).attr("value", '');
                                $(this).attr("id", gridId + "_" + eId);
                                $(this).attr('ondblclick', 'showContent(id)');
                                $(this).attr('splitcount', '0');
                                $(this).attr('class', 'visionFlterGridColumn');
                                $(this).attr('data-type', 'T');
                                $(this).attr('data-mandatory', 'O');
                                $(this).attr('data-inputtype', 'T');
                                $(this).attr('data-viewid', gridId);
                                $(this).attr('data-consequence', 'Y');
                                $(this).attr('data-column', eId);


                            }
                        });
                    } catch (el) {
                        console.log(el);
                    }


                    $("#filterGridForm").dialog({resizable: false,
                        title: (labelObject['Filter Form'] != null ? labelObject['Filter Form'] : 'Filter Form'),
                        modal: true,
                        height: 600,
                        minHeight: 200,
                        minWidth: 900,
                        maxWidth: 1200,
                        fluid: true,
                        close: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        },
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

                    //  $("#" + selectedGridId + "_FILTER_FORM").html(filterFormObj['result']);


                    $("#importfiltergridcriteria").html(filterFormObj['importButtonDiv']);
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
//                                                minDate: $("#pprtbmin" + i).datepicker("getDate")
                                                });
                                    } else {
                                    }
                                });
                    }

                    var selectedTitle = "";
                    var selectedTitleValue = "";
                    var lovColumns = filterFormObj['lovColumns'];
                    if (lovColumns != null && !jQuery.isEmptyObject(lovColumns)) {
                        for (var lovColumnanme in lovColumns) {
                            if (lovColumnanme != null && lovColumnanme != '') {
                                var comboBoxOptions = {
                                    searchMode: 'contains',
                                    width: 445,
                                    height: 20,
                                    dropDownHeight: 100
                                };
                                if (lovColumns[lovColumnanme] == true) {
                                    comboBoxOptions['multiSelect'] = true;
                                    // multiSelect: true,
                                }
                                $("#" + lovColumnanme).jqxComboBox(comboBoxOptions);
                                $("#" + lovColumnanme).on('select', function (event) {
                                    var args = event.args;
                                    if (args) {
                                        // index represents the item's index.                          
                                        var index = args.index;
                                        var item = args.item;
                                        if (item != null) {
                                            var label = item.label;
                                            var value = item.value;
                                            if (value != null && value != '') {
                                                var filterGridFlagCount = $("#" + lovColumnanme + "_jqxComboBox").attr("data-filtergridflag-count"); //data-filtergridflag-count
                                                var operatorId = "operator" + $("#" + lovColumnanme + "_jqxComboBox").attr("data-viewid") + filterGridFlagCount;
                                                $("#" + operatorId).val("IN");
                                            }
                                        }


                                    }
                                });
                            }
                        }
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
                                        $("#operator" + gridId + colSelectNum).val(paramObj.operator);
                                    }


                                }
                            }

                        }
                    } catch (er) {
                        console.log(er);
                    }

                }

            },
            error: function (e) {
                sessionTimeout(e);
            }// Error function in Ajax
        });
    } catch (ex) {
        stopLoader();
    }
}

function getEnterKeyFilterSearchPopup(event, selectedGridId, selectedGridIndex, selectedTabId) {
    if (event.which == 13) {
//        showLoader();
        getFilterGridResultsPopup(selectedGridId, selectedGridIndex, selectedTabId);
//        stopLoader();
    }
}

function getFilterGridResultsPopup(selectedGridId, selectedGridIndex, selectedTabId) {
    try {
        showLoader();
        if (selectedGridId != null && selectedGridId != '') {
            var i = 0;
            var paramArray = [];

            $("#" + selectedGridId + "_FILTER_FORM_TABLE tbody tr").each(function () {
                var isAllow = false;
                var paramObj = {};
                var colname = $(this).attr('data-colname');
                var dataRange = $(this).attr('data-range');

                var value = $("#" + selectedGridId + "_" + colname).val();
                var dataColType = $(this).attr('data-coltype');
                if (dataColType == 'L') {
                    value = "";
                    var selectBoxValue = $("#" + selectedGridId + "_" + colname).jqxComboBox('getSelectedItems');
                    if (selectBoxValue != null) {
                        for (var j = 0; j < selectBoxValue.length; j++)
                        {
                            value += selectBoxValue[j].value;
                            if (j != selectBoxValue.length - 1) {
                                value += ",";
                            }
                        }
                    }
                }
                var minvalue = $("#" + selectedGridId + "_" + colname + "_MIN").val();
                var maxvalue = $("#" + selectedGridId + "_" + colname + "_MAX").val();

                if (value != null && value != '') {
                    isAllow = true;
                } else if (dataRange != null && dataRange == 'Y'
                        && ((minvalue != null && minvalue != '')
                                || (maxvalue != null && maxvalue != ''))
                        ) {
                    isAllow = true;
                }

                var type = $("#" + selectedGridId + "_" + colname).attr("type");
                if (type != null && type == 'checkbox') {
                    var textval = "N";
                    if ($("#" + selectedGridId + "_" + colname).is(':checked')) {
                        isAllow = true;
                    } else {
                        isAllow = false;
                    }
                }
                console.log("isAllow::::" + isAllow);
                if (isAllow) {

                    paramObj.column = $.trim($(this).attr('data-colname'));

                    if (dataColType == 'L') {
                        var value = "";
                        var selectBoxValue = $("#" + selectedGridId + "_" + colname).jqxComboBox('getSelectedItems');
                        if (selectBoxValue != null) {
                            for (var j = 0; j < selectBoxValue.length; j++)
                            {
                                value += selectBoxValue[j].value;
                                if (j != selectBoxValue.length - 1) {
                                    value += ",";
                                }
                            }
                        }
                        paramObj.value = value;
                    } else
                    if (type != null && type == 'checkbox') {
                        var textval = "N";
                        if ($("#" + selectedGridId + "_" + colname).is(':checked')) {
                            textval = "Y";
                        } else {
                            textval = "N";
                        }
                        paramObj.value = textval;
                    } else {
                        paramObj.value = $.trim($("#" + selectedGridId + "_" + colname).val());
                    }
                    paramObj.operator = $("#operator" + selectedGridId + i).val();
                    paramObj.symbol = $.trim($("#operator" + selectedGridId + i).find('option:selected').text());
                    paramObj.selectNum = i;
                    paramObj.dataColType = dataColType;

                    paramObj.rangeFlag = dataRange;
                    if (dataRange != null && dataRange == 'Y') {
                        paramObj.minvalue = minvalue;
                        paramObj.maxvalue = maxvalue;
                    } else {
                        paramObj.minvalue = "";
                        paramObj.maxvalue = "";
                    }
                    paramArray.push(paramObj);
                }
                ++i;
            });

            if (orgChartParams != null && !jQuery.isEmptyObject(orgChartParams))
            {
                for (var k = 0; k < orgChartParams.length; k++) {
                    paramArray.push(orgChartParams[k]);
                }
            }
//        if (true) {
            if (paramArray != null && paramArray.length > 0) {

                var pivotParams = $("#" + selectedGridId + "_pivotgridparams").val();
                if (pivotParams != null && pivotParams != '' && pivotParams != undefined) {
                    $("#" + selectedGridId + "_filter_columns").remove();
                    $("#" + selectedGridId).append("<input type='hidden' id='" + selectedGridId + "_filter_columns' value=''/>");
                    $("#" + selectedGridId + "_filter_columns").val(JSON.stringify(paramArray));
                    getCrossTabDatawithParams(pivotParams)
                    try {
                        $("#filterGridForm").html("");
                    } catch (e) {
                    }
                    try {
                        $("#filterGridForm").dialog("close");
                    } catch (e) {
                    }
                    try {
                        $("#filterGridForm").dialog("destroy");
                    } catch (e) {
                    }
                } else {
                    $("#" + selectedGridId + "_filter_columns").remove();
                    $("#" + selectedGridId).append("<input type='hidden' id='" + selectedGridId + "_filter_columns' value=''/>");
                    $("#" + selectedGridId + "_filter_columns").val(JSON.stringify(paramArray));

                    try {
                        $("#" + selectedGridId).jqxGrid('updatebounddata');
                    } catch (e) {
                    }

                    try {
                        $("#" + selectedGridId).jqxGrid('clearselection');
                    } catch (e) {
                    }

                    try {
                        $("#filterGridForm").html("");
                    } catch (e) {
                    }
                    try {
                        $("#filterGridForm").dialog("close");
                    } catch (e) {
                    }
                    try {
                        $("#filterGridForm").dialog("destroy");
                    } catch (e) {
                    }
                }


            } else {
                var dialogSplitMessage = dialogSplitIconText((labelObject['Please provide at least one value to Search'] != null ? labelObject['Please provide at least one value to Search'] : 'Please provide at least one value to Search') + ".", "Y");
                stopLoader();
                $("#dialog1").html("");
                $("#dialog1").append(dialogSplitMessage);
                $("#dialog1").dialog({resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    modal: true,
                    height: 140,
                    width: 330,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                stopLoader();
//                            $("#dialog1").empty();
//                            $("#dialog1").dialog('close');

                                try {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                } catch (e) {
                                }
                                try {
                                    $("#dialog1").html("");
                                } catch (e) {
                                }
                                try {
                                    $("#dialog1").dialog("close");
                                } catch (e) {
                                }
                                try {
                                    $("#dialog1").dialog("destroy");
                                } catch (e) {
                                }

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

    } catch (e) {
        stopLoader();
    }

}

function getCrossTabDatawithParams(pivotParams, selectedRowFilterCols, masterGridFilterCols) {
    try {
        $("#filterGridForm").html("");
    } catch (e) {
    }
    try {
        $("#filterGridForm").dialog("close");
    } catch (e) {
    }
    try {
        $("#filterGridForm").dialog("destroy");
    } catch (e) {
    }

    try {

        var fileterparamArray = [];
        var gridparamObj = {};
        var paramArraydata = "";
        if (pivotParams != null && pivotParams != '' && pivotParams != undefined) {
            var pivotParamsObj = JSON.parse(pivotParams);
            var gridId = pivotParamsObj['gridId'];
            var reqColumnsList = pivotParamsObj['reqColumnsList'];
            var popupheight = pivotParamsObj['popupheight'];
            var popupwidth = pivotParamsObj['popupwidth'];
            var titleMessage = pivotParamsObj['titleMessage'];
            var dialogwidth = '1200';
            var dialogheight = '800';
            $("#output").html('');
            console.log('gridId' + gridId);
            var reqColumnsListdata = "";
            if (reqColumnsList != null && reqColumnsList != "" && reqColumnsList != undefined) {
                reqColumnsListdata = reqColumnsList;
            }
            var tmessage = titleMessage != null ? titleMessage : "Pivot Table";
            if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined') {
                dialogwidth = popupwidth;
            }
            if (popupheight != null && popupheight != "" && popupheight != 'undefined') {
                dialogheight = popupheight;
            }


            paramArraydata = ($("#" + gridId + "_filter_columns").val() != null ?
                    $("#" + gridId + "_filter_columns").val() : "");

            if (paramArraydata != null && paramArraydata != '' && paramArraydata != undefined) {
                fileterparamArray = JSON.parse(paramArraydata);
            } else {
                fileterparamArray = [];
            }

            try {
                if (selectedRowFilterCols != null && selectedRowFilterCols != '' && selectedRowFilterCols != undefined) {
                    var columnsArray = selectedRowFilterCols.split(",");
                    var selectedRowData = $('#' + gridId).jqxGrid('getrowdata', 0);
                    var selectedrowindex = $('#' + gridId).jqxGrid('selectedrowindex');
                    if (selectedrowindex != null && selectedrowindex != "" && selectedrowindex != undefined && selectedrowindex != -1) {
                        selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindex)
                    } else {
                        selectedRowData = $('#' + gridId).jqxGrid('getrowdata', 0);
                    }



                    for (var i = 0; i < columnsArray.length; i++)
                    {
                        gridparamObj = {}
                        gridparamObj.datatype = 'string';
                        gridparamObj.column = columnsArray[i];
                        gridparamObj.value = selectedRowData[columnsArray[i]];
                        gridparamObj.operator = '=';
                        gridparamObj.symbol = '=';
                        if (fileterparamArray != null && fileterparamArray.length != 0)
                        {
                            fileterparamArray.push(gridparamObj);
                        } else {
                            fileterparamArray = [];
                            fileterparamArray.push(gridparamObj);
                        }

                    }
                }
            } catch (e) {

            }

            try {
                if (masterGridFilterCols != null && masterGridFilterCols != '' && masterGridFilterCols != undefined) {
                    var masterGridArray = masterGridFilterCols.split(";");
                    var masterGridId = masterGridArray[0];
                    var masterGridIdCols = masterGridArray[1];
                    var masterGridColsArray = masterGridIdCols.split(",");
                    var masterselectedRowData = $('#' + masterGridId).jqxGrid('getrowdata', 0);
                    var masterselectedrowindex = $('#' + masterGridId).jqxGrid('selectedrowindex');

                    if (masterselectedrowindex != null && masterselectedrowindex != "" && masterselectedrowindex != undefined && masterselectedrowindex != -1) {
                        masterselectedRowData = $('#' + gridId).jqxGrid('getrowdata', masterselectedrowindex)
                    } else {
                        masterselectedRowData = $('#' + gridId).jqxGrid('getrowdata', 0);
                    }



                    for (var i = 0; i < masterGridColsArray.length; i++)
                    {
                        gridparamObj = {}
                        gridparamObj.datatype = 'string';
                        gridparamObj.column = masterGridColsArray[i];
                        gridparamObj.value = masterselectedRowData[columnsArray[i]];
                        gridparamObj.operator = '=';
                        gridparamObj.symbol = '=';
                        if (fileterparamArray != null && fileterparamArray.length != 0)
                        {
                            fileterparamArray.push(gridparamObj);
                        } else {
                            fileterparamArray = [];
                            fileterparamArray.push(gridparamObj);
                        }

                    }
                }
            } catch (e) {

            }
            if (fileterparamArray != null && fileterparamArray.length != 0) {
                paramArraydata = JSON.stringify(fileterparamArray);
            } else {
                paramArraydata = "";
            }


            showLoader();
            $.ajax({
                type: "post",
                traditional: true,
                url: "pivotGrid",
                cache: false,
                data: {
                    'gridId': gridId,
                    'reqColumnsList': reqColumnsListdata,
                    'filterString': paramArraydata
                },
                success: function (response) {
                    stopLoader();
                    if (response != null) {
                        var data = response['data'];
                        var rows = response['rows'];
                        var columns = response['columns'];
                        var rawData = data;
                        var sum = $.pivotUtilities.aggregatorTemplates.sum;
                        var numberFormat = $.pivotUtilities.numberFormat;
                        var intFormat = numberFormat({
                            digitsAfterDecimal: 0
                        });
                        var derivers = $.pivotUtilities.derivers;
                        var responseString = response['resultString'];
                        var rowsResultString = response['rowsResultString'];
                        var columnsList = response['columnsList'];
                        var renderers = $.extend(
                                $.pivotUtilities.renderers,
                                $.pivotUtilities.c3_renderers,
                                $.pivotUtilities.d3_renderers,
                                $.pivotUtilities.export_renderers,
                                $.pivotUtilities.plotly_renderers
                                );
                        $("#output").pivotUI(rawData, {
                            renderers: renderers,
                            rows: rows,
                            cols: columns,
                            aggregator: sum(intFormat)(["QUOTED_AMOUNT"]),
                            //                                            colOrder:"key_a_to_z",
                        });
                        $(".pvtRows").append(rowsResultString);
                        //                                $(".pvtUnused").append(responseString);
                        crossTabPivotTableGridResults(gridId, columnsList);
                        crossTabPivotRowsTableGridResults(gridId, columnsList);
                        $("#pivotGridDialog").dialog({resizable: false,
                            //                                    title: labelObject['Pivot Table'] != null ? labelObject['Pivot Table'] : 'Pivot Table',
                            title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                            modal: true,
                            //                                    height: 550,
                            //                                    width: 1200,
                            height: dialogheight,
                            minWidth: popupwidth,
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
                                    click: function () {
                                        //                                                                                                $(this).html("");
                                        $("#output").html('');
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
                            beforeClose: function (event, ui) {
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                            }
                        });
                    }
                },
                error: function (e) {
                    stopLoader();
                }
            });
        }

    } catch (e) {
        stopLoader();
    }

}

function crossTabPivotTableGridResults(gridId, columnsList) {
    $("#pivotTableSearch").click(function () {
        $("#pivotTableSearch").html(columnsList);
        $("#pivotTableSearch").show();
        $("#clear_pvtRowsText").show();
        $("#pivotTableSearch").autocomplete({
            source: columnsList
        });
    });
}

function crossTabPivotRowsTableGridResults(gridId, columnsList) {
    $("#pivotTableSearchPvtRows").click(function () {
        $("#pivotTableSearchPvtRows").html(columnsList);
        $("#pivotTableSearchPvtRows").show();
        $("#clear_unUsedText").show();
        $("#pivotTableSearchPvtRows").autocomplete({
            source: columnsList
        });
    });
}

function getcrossTabPivotSearchResults(event) {
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



// folder Upload Functionality 
function folderUpload(gridId) {
    if (gridId != null && gridId != '' && gridId != undefined) {
        var inputString =
                "<p>Directory: <input type='file' id='files' name='file' webkitdirectory mozdirectory /></p>"
                + "<p><button onclick='readFiles()'>Upload</button></p>"

        console.log("inputString ::::" + inputString);
        $("#dialog1").html(inputString);
        $("#dialog1").dialog({resizable: false,
            title: labelObject[''] != null ? labelObject['Folder Upload'] : 'Folder Upload',
            modal: true,
            height: 300,
            width: 400,
            fluid: true,
            buttons: [{
                    text: (labelObject['Close'] != null ? labelObject['Close'] : 'Close'),
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
//Send folder to upload @Prasad
function readFiles() {
    var filesObj = [];
    var files = document.getElementById("files").files;
    if (files != null && files != '' && files.length != 0) {
        var data = new FormData();
        for (var i = 0; i < files.length; i++) {
            filesObj.push(files[i].webkitRelativePath);
            data.append("files", files[i]);
        }
        data.append("paths", filesObj);

        $.ajax({
            url: "uploadDirectory",
            traditional: true,
            type: "POST",
            dataType: 'html',
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            data: data,
            success: function (response) {
                messageGenerator(response);
            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    } else {
        var response = "Please select folder which contains atleast one file";
        messageGenerator(response);
    }
}

function previewScopeOfWork(gridId) {
    var masterGridid = $("#subProp").attr("data-parentgridid");
    var tableName = $("#subProp").attr("data-opertiontable");
    var selectedrowindexes = $('#' + masterGridid).jqxGrid('selectedrowindexes');
    if (selectedrowindexes != null && selectedrowindexes.length != 0) {

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
                    basicData[columnsArray[i]] = hiddenVal;
                }

            }


        });

        var jsonOBJ = {};
        jsonOBJ.feildIds = [];
        jsonOBJ.feildValues = [];
        $("#" + masterGridid + "_TABLE :input").each(function () {
            // alert("tabId:::"+tabId);
            var textid = $(this).attr("id");
            var textval = "";
            console.log("textid::::" + textid);
            if ($("#" + textid).val() !== null && $("#" + textid).val() !== "") {
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
        jsonOBJ.basicData = basicData;
        var selectedRowData = $('#' + masterGridid).jqxGrid('getrowdata', selectedrowindexes[0]);
        if (selectedRowData != null && !jQuery.isEmptyObject(selectedRowData)) {
            $.ajax({
                type: "post",
                traditional: true,
                // dataType: 'json',
                url: "previewScopeOfWork",
                cache: false,
                data: {
                    'jsonData': JSON.stringify(jsonOBJ),
                    'panelId': $("#panelId").val(),
                    selectedRowData: JSON.stringify(selectedRowData),
                    'gridId': masterGridid
                },
                success: function (response) {
                    //SOW_DESC
                    $("#dialog1").html(response);
                    $("#dialog1").dialog({resizable: false,
                        title: labelObject['Preview Scope of Work'] != null ? labelObject['Preview Scope of Work'] : 'Preview Scope of Work',
                        modal: true,
                        height: 'auto',
                        maxHeight: 1000,
                        width: 400,
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
                },
                error: function (e) {
                    sessionTimeout(e);
                }// Error function in Ajax
            });

        }
    }
}

function clearTextSearch() {
    stopLoader();
    $("#text_count").text("");
    $("#result_count").text('');
    $("#crmresult").cleanData;
    $("#crmresult").val('');
    $("#intellisense").empty();
    $("#intellisense1").empty();
    $("#intellisensebox").css("background", "none");
    $("#intellisensebox").attr("data-space", "no");
    $("#crmresult").attr("data-selected", "NO");
    $("#intellisensebox").attr("data-selection-type", "contain");
    $("#tresults").attr("data-clicked", "no");
    $("#containsearch").prop("checked", "checked");
    $(".clear_text").hide();
    var gridid = $("#crmresult").attr("data-search-gridid");
    if (gridid != null && gridid != '') {
        $("#" + gridid).jqxGrid('updatebounddata', 'cells');
    }

}
function clearPivotTextSearch() {
    stopLoader();
    $(".clear_pvtRowsText").css("display", "none");
    $(".clear_unUsedText").css("display", "none");
    $(".pivotTableSearch").cleanData;
    $(".pivotTableSearchPvtRows").cleanData;

}
function openURLInTab(url) {
    if (url.indexOf("http") > -1) {

    } else {
        url = "http://" + url;
    }
    window.open(url, '_blank');
}
$(function () {
    $("#localedd").change(function () {
        var userval = $("#crmresult").val();
        if (userval != null) {
            var SelectedTabData = document.getElementById("localedd").value;
            $.ajax({
                type: "POST",
                url: "crmSearchSuggestion",
                data: {
                    tabId: $("#tabid").val(),
                    searchtext: userval,
                    SelectedListData: SelectedTabData,
                    gridList: $("#totalGridIdStr").val()
                },
                success: function (response) {

                    if (response != null && response != "") {
                        $("#intellisense").html("");
                        $("#intellisense").show();
                        var responseObj = JSON.parse(response);
//                                         $('#crmresult').autocomplete(responseObj['suggestion']);
                        if (responseObj['suggestion'] != null && responseObj['suggestion'] != '') {
                            $("#intellisense").html(responseObj['suggestion']);
                            $("#intellisensebox").show();

                        } else {
                            $("#text_count").text("No record(s) found");
                            $("#tooltipdiv").html("");
                            $("#tooltipdiv").jqxTooltip({'content': 'No record(s) found', theme: 'energyblue'});
                            $("#tooltipdiv").jqxTooltip("open");
                            $("#intellisensebox").hide();
                        }
                        stopLoader();
                    }
                },
                error: function (e) {
                    console.log(e);
                    stopLoader();
                    sessionTimeout(e);
                }

            });
        }
    });
});

// CRM Search start
$("#crmresult").keydown(function (e) {
    if ($("#crmresult").val() != null && $("#crmresult").val() != '') {
        $(".clear_text").show();
    } else {
        $(".clear_text").hide();
    }
    //  var searchstr = $("#crmresult").val();
    console.log('Keyevent raised:::' + e.keyCode);
    var ajaxTime = "";
    var totalTime = "";
    var SelectedTabData = $("#localedd").val();
    //var
    if (e.keyCode == 32 //Space
            || e.keyCode == 45 //Insert
            || e.keyCode == 33 //Page Up
            || e.keyCode == 34 //Page Down
            || e.keyCode == 36//Home
            || e.keyCode == 16 //Shift
            || e.keyCode == 17 //Ctrl
            || e.keyCode == 18 //Alt
            || e.keyCode == 35//End
            || e.keyCode == 37 //Left arrow
            || e.keyCode == 38 //Up arrow
            || e.keyCode == 39 //Right arrow
            || e.keyCode == 40//Down arrow
            ) {
        console.log('Ajax Not sent');
    } else {
        if (e.keyCode == 13 //Enter
                && $(this).val().length > 1
                ) {
            getTabData('updateIntellisense_0');
//            delay(function () {
//                var resultVal = $("#crmresult").val();
//                resultVal = resultVal.replace(/\s\s+/g, ' ');
//                $("#crmresult").val(resultVal);
//                if (resultVal != null && resultVal != '' && resultVal.length > 1) {
//                    showLoader();
//                    $("#typedResult").val(resultVal);
//                    var paramArray = [];
////                    navigaterecord(resultVal);
//                } else {
//                    var labelObject = {};
//                    $("#dialog").html("Enter a keyword of at least 2 chars,ignoring special chars(@.,;:/ etc)  to search");
//                    $("#dialog").dialog({ resizable: false,
//                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
//                        modal: true,
//                        height: 'auto',
//                        minHeight: 'auto',
//                        minWidth: 300,
//                        maxWidth: 'auto',
//                        fluid: true,
//                        buttons: [{
//                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
//                                click: function () {
//                                    $(this).html("");
//                                    $(this).dialog("close");
//                                    $(this).dialog("destroy");
//                                }
//                            }],
//                        open: function () {
//                             //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                            $(".visionHeaderMain").css("z-index", "999");
//                            $(".visionFooterMain").css("z-index", "999");
//                        },
//                        beforeClose: function (event, ui)
//                        {
//                            $(".visionHeaderMain").css("z-index", "99999");
//                            $(".visionFooterMain").css("z-index", "99999");
//                        }
//                    });
//
//                }
//
//            }, 100);
        } else {
            delay(function () {
                userval = $("#crmresult").val();

                userval = userval.replace(/\s\s+/g, ' ');
                $.ajax({
                    type: "POST",
                    url: "crmSearchSuggestion",
                    data: {
                        tabId: $("#tabid").val(),
                        searchtext: userval,
                        SelectedListData: SelectedTabData,
                        gridList: $("#totalGridIdStr").val(),
                    },
                    success: function (response) {

                        if (response != null && response != "") {
                            $("#intellisense").html("");
                            $("#intellisense").show();
                            var responseObj = JSON.parse(response);
//                                         $('#crmresult').autocomplete(responseObj['suggestion']);
                            if (responseObj['suggestion'] != null && responseObj['suggestion'] != '') {
                                $("#intellisense").html(responseObj['suggestion']);
                                totalTime = new Date().getTime() - ajaxTime;
                                totalTime = parseInt(totalTime) / 1000;
                                $("#intellisensebox").show();

                            } else {
                                $("#text_count").text("No record(s) found");
                                $("#tooltipdiv").html("");
                                $("#tooltipdiv").jqxTooltip({'content': 'No record(s) found', theme: 'energyblue'});
                                $("#tooltipdiv").jqxTooltip("open");
                                $("#intellisensebox").hide();
                            }
                            stopLoader();
                        }
                    },
                    error: function (e) {
                        console.log(e);
                        stopLoader();
                        sessionTimeout(e);
                    }

                });



            }, 500);
        }
    }

});
// CRM Search

function callDBProcs1(gridId, procName, batchInd) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }

    var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    if (gridId != null && gridId != '') {
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
        $.ajax({
            type: "POST",
            url: 'callDBProcs',
            dataType: 'html',
            data: {
                gridId: gridId,
                procName: procName,
                selectedRowsData: JSON.stringify(selectedRowsData),
                batchInd: batchInd
            },
            traditional: true,
            cache: false,
            success: function (response) {
                if (response != null && response != '') {
                    var responseObj = JSON.parse(response);
                    if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
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
                                        $("#" + gridId).jqxGrid('updatebounddata');
                                        try {
                                            $("#" + gridId).jqxGrid('clearselection');
                                            refreshGridData(gridId);

                                        } catch (e) {
                                            $("#" + gridId).jqxGrid('clearselection');
                                            refreshGridData(gridId);
                                        }
                                        var masterGridId = $("#mastergridid").val();
                                        if (gridId != null && gridId != '' && gridId != 'undefined'
                                                && masterGridId != null && masterGridId != '' && masterGridId != 'undefined' && masterGridId != gridId) {
                                            try {
                                                $("#" + masterGridId).jqxGrid('updatebounddata');
                                                try {
                                                    $("#" + masterGridId).jqxGrid('clearselection');
                                                    refreshGridData(masterGridId);

                                                } catch (e) {
                                                    $("#" + masterGridId).jqxGrid('clearselection');
                                                    refreshGridData(masterGridId);
                                                }
                                            } catch (e) {

                                            }
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
                sessionTimeout(e);
            }


        });


    }

}
function callDBProcs(gridId, procName, batchInd, noDataFlag) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    try {
        var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
        if (gridId != null && gridId != '') {
            if (indexes.length > 0 || (noDataFlag != null && noDataFlag != '' && noDataFlag != 'undefined' && noDataFlag == 'Y')) {
                showLoader();
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
                if (noDataFlag != null && noDataFlag != '' && noDataFlag != 'undefined' && noDataFlag == 'Y' && selectedRowsData.length < 1) {
                    var dummydata = {};
                    dummydata[noDataFlag] = noDataFlag;
                    selectedRowsData.push(dummydata);
                }
                $.ajax({
                    type: "POST",
                    url: 'callDBProcs',
                    dataType: 'html',
                    data: {
                        gridId: gridId,
                        procName: procName,
                        selectedRowsData: JSON.stringify(selectedRowsData),
                        batchInd: batchInd
                    },
                    traditional: true,
                    cache: false,
                    success: function (response) {
                        stopLoader();
                        if (response != null && response != '') {
                            var responseObj = JSON.parse(response);
                            if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
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
                                                $("#" + gridId).jqxGrid('updatebounddata');
                                                try {
                                                    $("#" + gridId).jqxGrid('clearselection');
                                                    refreshGridData(gridId);

                                                } catch (e) {

                                                }
                                                var masterGridId = $("#mastergridid").val();
                                                if (gridId != null && gridId != '' && gridId != 'undefined'
                                                        && masterGridId != null && masterGridId != '' && masterGridId != 'undefined' && masterGridId != gridId) {
                                                    try {
                                                        $("#" + masterGridId).jqxGrid('updatebounddata');
                                                        try {
                                                            $("#" + masterGridId).jqxGrid('clearselection');
                                                            refreshGridData(masterGridId);

                                                        } catch (e) {

                                                        }
                                                    } catch (e) {

                                                    }
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
                $("#dialog").html((labelObject['Please Select any Record to Process'] != null ? labelObject['Please Select any Record to Process'] : 'Please Select any Record to Process'));
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
                        //                                    location.reload();

                    }
                });

            }


        }
//    stopLoader();
    } catch (e) {

    }


}


function getTabsCalendarForm(calenderEventObj, calendarId, selectedIndex, calendarHeight, selectedTabId) {
    calendarId = calenderEventObj['calendarId'];
    try {
        $('#calendar').fullCalendar('destroy');

        $("#" + calendarId).remove();
        $("#" + calendarId + "_CLNDR").html("<div id='" + calendarId + "_CLNDR_ICONS" + "' class='visionCLNDRIcons' ></div>"
                + "<div id='" + calendarId + "' class='visionCLNDRDiv'></div>");
    } catch (e) {
    }
    var calendarConfigObj = {};
//    var calendarIcons = calenderEventObj['calendarIcons'];
    $("#" + calendarId + "_CLNDR_ICONS").html(calenderEventObj['calendarIcons']);
    calendarConfigObj = calenderEventObj['calendarConfigObj'];
    calendarConfigObj.events = [];
    calendarConfigObj.height = parseInt(calendarHeight) - 80;
    calendarConfigObj.width = "100%";
    calendarConfigObj.aspectRatio = 2;
    calendarConfigObj.events = function (start, end, timezone, callback) {
        $.ajax({
            type: "POST",
            url: 'getCalenderEvents',
            dataType: 'JSON',
            traditional: true,
            cache: false,
            data: {
                columnMapObj: JSON.stringify(calenderEventObj['columnMapObj']),
                columnsList: JSON.stringify(calenderEventObj['columnsList']),
                columnInitParamObj: JSON.stringify(calenderEventObj['columnInitParamObj']),
                calInitParamObj: JSON.stringify(calenderEventObj['calInitParamObj']),
                tableName: calenderEventObj['TABLE_NAME'],
                viewTables: calenderEventObj['VIEW_TABLES'],
                calendarId: calenderEventObj['calendarId']
            },
            success: function (response) {
                if (response != null) {
                    var events = JSON.parse(JSON.stringify(response));
                    callback(events);
                }

            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    };
//    calendarConfigObj.contentHeight= 600;
    calendarConfigObj.dayClick = function (date, jsEvent, view) {
        console.log('clicked on ' + date.format());
    }
    calendarConfigObj.eventMouseEnter = function (event, jsEvent, view) {
        console.log('eventMouseEnter on ' + event['title']);
        console.log('eventMouseEnter on ' + event['description']);
    }
    calendarConfigObj.eventMouseLeave = function (event, jsEvent, view) {
        console.log('eventMouseLeave on ' + event['title']);
        console.log('eventMouseLeave on ' + event['description']);
    }
    calendarConfigObj.eventClick = function (event, jsEvent, view) {
        console.log('eventClick on ' + event['title']);
        calendarGridEventData(calendarId, event);
    }
    calendarConfigObj.select = function (event, jsEvent, view) {
        console.log('Select on ' + event['title']);

    }
    $("#" + calendarId).fullCalendar(calendarConfigObj);
    stopLoader();
}
function imageMouseHover(image)
{
    var imgString = image;
    var imagePath = $("#" + imgString).attr("src");
    console.log(imgString + 'imgString');
    $("#visionGenericImageHover").empty();
    var imagePaths = "<span><img src='" + imagePath + "'></span>";
    $("#visionGenericImageHover").show();
    $("#visionGenericImageHover").append(imagePaths);
}
function imageMouseOut()
{
    $("#visionGenericImageHover").empty();
    $("#visionGenericImageHover").hide();
}

function getTabData(id) {

    var data = $("#" + id).text();
    var selectedStr = $("#" + id).text();
    var gridid = $("#" + id).attr("gridid");
    var columnName = $("#" + id).attr("columnName");
    var index = $("#" + id).attr("tabindex");
    $("#crmresult").val(selectedStr);
    $("#crmresult").attr("data-search-columnname", columnName);
    $("#crmresult").attr("data-search-gridid", gridid);
    $("#crmresult").attr("data-search-index", index);
    $("#intellisense").hide();
    var currentSelIndex = $('#jqxTabs').jqxTabs('val');
    if (index != null && currentSelIndex != index) {
        $('#jqxTabs').jqxTabs('select', index);
    } else {
        try {
            $("#" + gridid).jqxGrid('updatebounddata', 'cells');
        } catch (e) {
        }
    }
}
function CRmsearchResults() {
    getTabData('updateIntellisense_0');
}

function getCalendarFormInForms(calendarId) {
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
                basicData[columnsArray[i]] = hiddenVal;
            }

        }


    });
    $.ajax({
        type: "POST",
        url: 'getCalendarFormInForms',
        dataType: 'JSON',
        data: {
            calendarId: calendarId,
            basicData: JSON.stringify(basicData)
        },
        traditional: true,
        cache: false,
        success: function (calenderEventObj) {
            //CRM_GRID_ACCOUNTS_REL_CONT
            var calendarConfigObj = {};
            $("#" + calendarId + "_ICON").remove();
            $("#" + calendarId).parent().prepend(calenderEventObj['calendarIcons']);
            calendarConfigObj = calenderEventObj['calendarConfigObj'];
//            var events = calendarConfigObj.events;
//                    if (events != null) {
//                        calendarConfigObj.events = JSON.parse(JSON.stringify(events));
//                    }
//            calendarConfigObj.events = [];
            calendarConfigObj.height = 500;
            calendarConfigObj.width = "100%";
            calendarConfigObj.aspectRatio = 2;
            calendarConfigObj.dayClick = function (date, jsEvent, view) {
                console.log('clicked on ' + date.format());
            }
            calendarConfigObj.eventMouseEnter = function (event, jsEvent, view) {
                console.log('eventMouseEnter on ' + event['title']);
                console.log('eventMouseEnter on ' + event['description']);
            }
            calendarConfigObj.eventMouseLeave = function (event, jsEvent, view) {
                console.log('eventMouseLeave on ' + event['title']);
                console.log('eventMouseLeave on ' + event['description']);
            }
            calendarConfigObj.eventClick = function (event, jsEvent, view) {
                console.log('eventClick on ' + event['title']);
                calendarFormEventData(calendarId, event);
            }
            calendarConfigObj.select = function (event, jsEvent, view) {
                console.log('Select on ' + event['title']);

            }
            $("#" + calendarId).fullCalendar(calendarConfigObj);
            stopLoader();
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
        }


    });
}
function createCalendarEventForm(calendarId) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'calEventGridOperationForm',
        dataType: 'html',
        data: {
            calendarId: calendarId
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            if (result != null && result != '') {
                var eventFormObj = JSON.parse(result);
                if (eventFormObj != null && !jQuery.isEmptyObject(eventFormObj)) {

                    $("#dialog").html(eventFormObj['formStr']);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Create Event'] != null ? labelObject['Create Event'] : 'Create Event'),
                        modal: true,
                        // width: "auto",
                        width: 600,
                        height: 'auto',
                        maxHeight: 550,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Create'] != null ? labelObject['Create'] : 'Create'),
                                "class": 'dialogyes',
                                click: function () {
                                    var errorCount = 0;
                                    $('#calendarCreateEventsTable :input').each(function () {
                                        var id = $(this).attr("id");
                                        var inputVal = $("#" + id).val();
                                        var mandatoryVal = $(this).attr("data-mandatory");
                                        if (mandatoryVal != null && mandatoryVal == 'M') {
                                            if (inputVal != null && inputVal != '') {
                                                $("#dis" + id).hide();
                                            } else {
                                                errorCount++;
                                                var errid = "#dis" + id;
                                                var msg = "Should not be empty";
                                                errorMessage(errid, msg);

                                            }

                                        }
                                    });
                                    if (errorCount == 0) {
                                        $(".all_errors").hide();
                                        saveGridCalendarData('dialog', eventFormObj, calendarId);
                                    }

                                }
                            }
                        ],
                        open: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                            var datePickersCols = eventFormObj['datePickerIds'];
                            if (datePickersCols != null && datePickersCols != '') {
                                var datePickersColsArray = datePickersCols.split(",");
                                for (var i = 0; i < datePickersColsArray.length; i++) {
                                    $("#" + datePickersColsArray[i]).datepicker({
                                        changeMonth: true,
                                        changeYear: true,
                                        dateFormat: "yy-mm-dd",
                                        showOn: "button",
                                        buttonImage: 'images/iDXPUI5Calendar.svg',
                                        buttonImageOnly: true
                                    });
                                }
                            }
                            $("#ui-datepicker-div").addClass("ui-datepickerReports");
                            var timePickersCols = eventFormObj['timePickerIds'];
                            if (timePickersCols != null && timePickersCols != '') {
                                var timePickersColsArray = timePickersCols.split(",");
                                for (var i = 0; i < timePickersColsArray.length; i++) {
                                    $('#' + timePickersColsArray[i]).timepicker({
                                        timeFormat: 'h:mm p',
                                        interval: 5,
                                        startTime: new Date(),
                                        dynamic: false,
                                        dropdown: true,
                                        scrollbar: true,
//                    setTime:new Date()
                                    });
                                    $('#' + timePickersColsArray[i]).timepicker('setTime', new Date());
                                }
                            }



                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                }

            }

            stopLoader();
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
        }


    });

}
function saveGridCalendarData(parentDailogId, eventFormObj, calendarId)
{
    showLoader();
    var calendarEventFormData = {};
    $("#calendarCreateEventsTable :input").each(function () {
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

            calendarEventFormData[textid] = textval;
        }

        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
            var columnNames = $("#" + textid).val();
            var columnsArray = columnNames.split(",");

            var hiddenIds = textid.split("HIDDEN_");
            var hiddenVal = $("#" + hiddenIds[1]).val();

            for (var i = 0; i < columnsArray.length; i++) {
                calendarEventFormData[columnsArray[i]] = hiddenVal;
            }

        }


    });

    $.ajax({
        url: "saveCalGridData",
        traditional: true,
        type: "POST",
        dataType: 'html',
        cache: false,
        traditional: true,
        cache: false,
        data: {
            paramsData: JSON.stringify(calendarEventFormData),
            tableName: eventFormObj['TABLE_NAME'],
            viewTableName: eventFormObj['VIEW_TABLES'],
            calendarId: calendarId

        },

        success: function (response) {
            stopLoader();
            if (response != null && response != '') {
                var responseObj = JSON.parse(response);
                if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
                    $("#dialog1").html(responseObj['message']);
                    $("#dialog1").dialog({resizable: false,
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
                                    if (responseObj['messageFlag']) {
                                        $("#" + parentDailogId).html("");
                                        $("#" + parentDailogId).dialog("close");
                                        $("#" + parentDailogId).dialog("destroy");
                                        try {
                                            refreshCalendarData(calendarId);
                                        } catch (e) {
                                        }
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
            sessionTimeout(e);
            stopLoader();
        }


    });
}
//calender event code
///SHOWING CALENDAR EVENT DATA IN POPUP FORFM
function calendarGridEventData(calendarId, event) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'calEventFormData',
        dataType: 'html',
        data: {
            calendarId: calendarId,
            eventData: JSON.stringify(event)
        },
        traditional: true,
        cache: false,

        success: function (result) {
            stopLoader();

            if (result != null && result != '' && result != undefined) {
                var eventFormObj = JSON.parse(result);
                if (eventFormObj != null && !jQuery.isEmptyObject(eventFormObj)) {
                    var formObj = eventFormObj['formObj'];
                    $("#dialog").html(formObj['formStr']);
                    $("#EVENT_COLUMN5").val(eventFormObj['reqEmail']);
                    $("#EVENT_COLUMN6").val(eventFormObj['optEmail']); //eventFormObj['opportunityName']
                    var test = $("#EVENT_COLUMN7").find("option");
                    $.each(test, function (index) {
                        if (this.value.toUpperCase() == eventFormObj['opportunityName'].toUpperCase()) {
                            $(this).attr("selected", "selected");
                        }
                    })

                    $("#EVNT_TYPE").val(eventFormObj['eventType']);
                    $("#START_DATE").val(eventFormObj['startDate']);
                    $("#END_DATE").val(eventFormObj['endDate']);
                    $("#EVENT_SUBJECT").val(eventFormObj['title']);
                    $("#EVENT_BODY").val(eventFormObj['description']);
                    $("#END_TIME").val(eventFormObj['endTime']);
                    $("#START_TIME").val(eventFormObj['startTime']);
                    $("#EVENT_COLUMN8").val(eventFormObj['accountName']);
                    $("#EVENT_COLUMN7").val(eventFormObj['opportunityName']);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Create Event'] != null ? labelObject['Create Event'] : 'Create Event'),
                        modal: true,
                        // width: "auto",
                        width: 600,
                        height: 'auto',
                        maxHeight: 550,
                        fluid: true,
                        buttons: [
                            {

                                text: (labelObject['Update Event'] != null ? labelObject['Update Event'] : 'Update Event'),
                                "class": 'dialogyes',
                                click: function () {
                                    var errorCount = 0;
                                    $('#calendarCreateEventsTable :input').each(function () {
                                        var id = $(this).attr("id");
                                        var inputVal = $("#" + id).val();
                                        var mandatoryVal = $(this).attr("data-mandatory");
                                        if (mandatoryVal != null && mandatoryVal == 'M') {
                                            if (inputVal != null && inputVal != '') {
                                                $("#dis" + id).hide();
                                            } else {
                                                errorCount++;
                                                var errid = "#dis" + id;
                                                var msg = "Should not be empty";
                                                errorMessage(errid, msg);
                                            }
                                        }
                                    });
                                    if (errorCount == 0) {
                                        $(".all_errors").hide();
                                        updateGridEventData('dialog', calendarId, event, formObj);
                                    }
                                }

                            },
                            {
                                text: (labelObject['Delete Event'] != null ? labelObject['Delete Event'] : 'Delete Event'),
                                "class": 'dialogyes',
                                click: function () {
                                    var errorCount = 0;
                                    $('#calendarCreateEventsTable :input').each(function () {
                                        var id = $(this).attr("id");
                                        var inputVal = $("#" + id).val();
                                        var mandatoryVal = $(this).attr("data-mandatory");
                                        if (mandatoryVal != null && mandatoryVal == 'M') {
                                            if (inputVal != null && inputVal != '') {
                                                $("#dis" + id).hide();
                                            } else {
                                                errorCount++;
                                                var errid = "#dis" + id;
                                                var msg = "Should not be empty";
                                                errorMessage(errid, msg);
                                            }
                                        }
                                    });
                                    if (errorCount == 0) {
                                        $(".all_errors").hide();
                                        deleteGridEventData('dialog', calendarId, event, formObj);
                                    }
                                }
                            }
                        ],

                        open: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                            // var datePickersCols = eventFormObj['datePickerIds'];
                            var datePickersCols = formObj['datePickerIds'];
                            if (datePickersCols != null && datePickersCols != '') {
                                var datePickersColsArray = datePickersCols.split(",");
                                for (var i = 0; i < datePickersColsArray.length; i++) {
                                    $("#" + datePickersColsArray[i]).datepicker({
                                        changeMonth: true,
                                        changeYear: true,
                                        dateFormat: "yy-mm-dd",
                                        showOn: "button",
                                        buttonImage: 'images/iDXPUI5Calendar.svg',
                                        buttonImageOnly: true
                                    });
                                }
                            }
                            $("#ui-datepicker-div").addClass("ui-datepickerReports");
                            var timePickersCols = formObj['timePickerIds'];

                            if (timePickersCols != null && timePickersCols != '') {
                                var timePickersColsArray = timePickersCols.split(",");
                                for (var i = 0; i < timePickersColsArray.length; i++) {
                                    $('#' + timePickersColsArray[i]).timepicker({
                                        timeFormat: 'h:mm p',
                                        interval: 5,
                                        startTime: new Date(),
                                        dynamic: false,
                                        dropdown: true,
                                        scrollbar: true,
                                    });
                                }
                            }
                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                }

            }

            stopLoader();
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
        }


    });

}

//Calendar grid Event DAta delete
function deleteGridEventData(parentDailogId, calendarId, event, formObj)
{
    showLoader();
    $.ajax({
        url: "deleteCalDataEvent",
        traditional: true,
        type: "POST",
        dataType: 'html',
        cache: false,
        traditional: true,
        cache: false,
        async: true,
        data: {
            tableName: formObj['TABLE_NAME'],
            viewTableName: formObj['VIEW_TABLES'],
            calendarId: calendarId,
            eventData: JSON.stringify(event)

        },
        success: function (response) {
            stopLoader();
            if (response != null && response != '' && response != undefined) {
                var responseObj = JSON.parse(response);
                if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
                    $("#dialog1").html(responseObj['message']);
                    $("#dialog1").dialog({resizable: false,
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
                                    if (responseObj['messageFlag']) {
                                        $("#" + parentDailogId).html("");
                                        $("#" + parentDailogId).dialog("close");
                                        $("#" + parentDailogId).dialog("destroy");
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
            sessionTimeout(e);
            stopLoader();
        }


    });
}

//UPDATE CALENDAR GRID EVENT
function updateGridEventData(parentDailogId, calendarId, event, formObj) {

    var calendarEventFormData = {};
    $("#calendarCreateEventsTable :input").each(function () {
        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        var textval = $(this).val();
        if (type != 'hidden') {
            if (textval != null && textval != '') {
                textval = textval.toUpperCase();
            }
        }
        if (textid != null && textid != 'CREATE_DATE') {

            calendarEventFormData[textid] = textval;
        }

        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
            var columnNames = $("#" + textid).val();
            var columnsArray = columnNames.split(",");

            var hiddenIds = textid.split("HIDDEN_");
            var hiddenVal = $("#" + hiddenIds[1]).val();

            for (var i = 0; i < columnsArray.length; i++) {
                calendarEventFormData[columnsArray[i]] = hiddenVal;
            }

        }


    });

    showLoader();
    $.ajax({
        url: "updateCalEventData",
        traditional: true,
        type: "POST",
        dataType: 'html',
        cache: false,
        traditional: true,
        cache: false,
        async: true,
        data: {
            tableName: formObj['TABLE_NAME'],
            viewTableName: formObj['VIEW_TABLES'],
            calendarId: calendarId,
            eventData: JSON.stringify(event),
            paramsData: JSON.stringify(calendarEventFormData)
        },
        success: function (response) {
            stopLoader();
            if (response != null && response != '' && response != undefined) {
                var responseObj = JSON.parse(response);
                if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
                    $("#dialog1").html(responseObj['message']);
                    $("#dialog1").dialog({resizable: false,
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
                                    if (responseObj['messageFlag']) {
                                        $("#" + parentDailogId).html("");
                                        $("#" + parentDailogId).dialog("close");
                                        $("#" + parentDailogId).dialog("destroy");
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
            sessionTimeout(e);
            stopLoader();
        }


    });
}
//calendar event code
//calendar form event code
function calenderEventFormOperation(calendarId) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'calEventFormOperation',
        dataType: 'html',
        data: {
            calendarId: calendarId
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            if (result != null && result != '' && result != undefined) {
                var eventFormObj = JSON.parse(result);
                if (eventFormObj != null && !jQuery.isEmptyObject(eventFormObj)) {

                    $("#dialog").html(eventFormObj['formStr']);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Create Event'] != null ? labelObject['Create Event'] : 'Create Event'),
                        modal: true,
                        // width: "auto",
                        width: 600,
                        height: 'auto',
                        maxHeight: 550,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Create'] != null ? labelObject['Create'] : 'Create'),
                                "class": 'dialogyes',
                                click: function () {
                                    var errorCount = 0;
                                    $('#calendarCreateEventsTable :input').each(function () {
                                        var id = $(this).attr("id");
                                        var inputVal = $("#" + id).val();
                                        var mandatoryVal = $(this).attr("data-mandatory");
                                        if (mandatoryVal != null && mandatoryVal == 'M') {
                                            if (inputVal != null && inputVal != '') {
                                                $("#dis" + id).hide();
                                            } else {
                                                errorCount++;
                                                var errid = "#dis" + id;
                                                var msg = "Should not be empty";
                                                errorMessage(errid, msg);

                                            }

                                        }
                                    });
                                    if (errorCount == 0) {
                                        $(".all_errors").hide();
                                        saveCalendarFormData('dialog', eventFormObj, calendarId);
                                    }

                                }
                            }
                        ],
                        open: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                            var datePickersCols = eventFormObj['datePickerIds'];
                            if (datePickersCols != null && datePickersCols != '') {
                                var datePickersColsArray = datePickersCols.split(",");
                                for (var i = 0; i < datePickersColsArray.length; i++) {
                                    $("#" + datePickersColsArray[i]).datepicker({
                                        changeMonth: true,
                                        changeYear: true,
                                        dateFormat: "yy-mm-dd",
                                        showOn: "button",
                                        buttonImage: 'images/iDXPUI5Calendar.svg',
                                        buttonImageOnly: true
                                    });
                                }
                            }
                            $("#ui-datepicker-div").addClass("ui-datepickerReports");
                            var timePickersCols = eventFormObj['timePickerIds'];
                            if (timePickersCols != null && timePickersCols != '') {
                                var timePickersColsArray = timePickersCols.split(",");
                                for (var i = 0; i < timePickersColsArray.length; i++) {
                                    $('#' + timePickersColsArray[i]).timepicker({
                                        timeFormat: 'h:mm p',
                                        interval: 5,
                                        startTime: new Date(),
                                        dynamic: false,
                                        dropdown: true,
                                        scrollbar: true,
//                    setTime:new Date()
                                    });
                                    $('#' + timePickersColsArray[i]).timepicker('setTime', new Date());
                                }
                            }



                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                }

            }

            stopLoader();
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
        }


    });

}

//save CALENDAR PANEL Form DATA
function saveCalendarFormData(parentDailogId, eventFormObj, calendarId, basicData)
{
    showLoader();
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
                basicData[columnsArray[i]] = hiddenVal;
            }

        }


    });
    var calendarEventFormData = {};
    $("#calendarCreateEventsTable :input").each(function () {
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

            calendarEventFormData[textid] = textval;
        }

        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
            var columnNames = $("#" + textid).val();
            var columnsArray = columnNames.split(",");

            var hiddenIds = textid.split("HIDDEN_");
            var hiddenVal = $("#" + hiddenIds[1]).val();

            for (var i = 0; i < columnsArray.length; i++) {
                calendarEventFormData[columnsArray[i]] = hiddenVal;
            }

        }


    });

    $.ajax({
        url: "saveCalFormData",
        traditional: true,
        type: "POST",
        dataType: 'html',
        cache: false,
        traditional: true,
        cache: false,
        data: {
            paramsData: JSON.stringify(calendarEventFormData),
            tableName: eventFormObj['TABLE_NAME'],
            viewTableName: eventFormObj['VIEW_TABLES'],
            calendarId: calendarId,
            basicData: JSON.stringify(basicData)

        },

        success: function (response) {
            stopLoader();
            if (response != null && response != '' && response != undefined) {
                var responseObj = JSON.parse(response);
                if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
                    $("#dialog1").html(responseObj['message']);
                    $("#dialog1").dialog({resizable: false,
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
                                    if (responseObj['messageFlag']) {
                                        $("#" + parentDailogId).html("");
                                        $("#" + parentDailogId).dialog("close");
                                        $("#" + parentDailogId).dialog("destroy");
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
            sessionTimeout(e);
            stopLoader();
        }


    });
}

//CALENDAR PANEL  EVENT DATA in FORM 
function calendarFormEventData(calendarId, event) {
    //  var a=JSON.stringify(event);
    showLoader();
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
                basicData[columnsArray[i]] = hiddenVal;
            }

        }


    });


    var calObj = {};
    calObj['title'] = event.title;
    calObj['description'] = event.description;
    calObj['EVNT_ID'] = event.EVNT_ID;
    calObj['EVNT_TYPE'] = event.EVNT_TYPE;
    calObj['Name'] = event.Name;
    calObj['endTime'] = event.endTime;
    calObj['startTime'] = event.startTime;
    calObj['_start'] = event._start;
    calObj['_end'] = event._end;
    calObj['optEmail'] = event.optEmail;
    calObj['reqEmail'] = event.reqEmail;
    calObj['Name'] = event.Name;
    $.ajax({
        url: 'calEventFormDataOperation',
        traditional: true,
        type: "POST",
        dataType: 'html',
        cache: false,
        traditional: true,
        cache: false,
        data: {

            calendarId: calendarId,
            eventData: JSON.stringify(calObj),
            basicData: JSON.stringify(basicData)
        },

        success: function (result) {
            stopLoader();
            if (result != null && result != '' && result != undefined) {
                var eventFormObj = JSON.parse(result);
                if (eventFormObj != null && !jQuery.isEmptyObject(eventFormObj)) {
                    var formObj = eventFormObj['formObj'];
                    $("#dialog").html(formObj['formStr']);
                    $("#EVENT_COLUMN5").val(eventFormObj['reqEmail']);
                    $("#EVENT_COLUMN6").val(eventFormObj['optEmail']); //eventFormObj['opportunityName']
                    var test = $("#EVENT_COLUMN7").find("option");
                    $.each(test, function (index) {
                        if (this.value.toUpperCase() == eventFormObj['opportunityName'].toUpperCase()) {
                            $(this).attr("selected", "selected");
                        }
                    })
                    $("#EVNT_TYPE").val(eventFormObj['eventType']);
                    $("#START_DATE").val(eventFormObj['startDate']);
                    $("#END_DATE").val(eventFormObj['endDate']);
                    $("#EVENT_SUBJECT").val(eventFormObj['title']);
                    $("#EVENT_BODY").val(eventFormObj['description']);
                    $("#END_TIME").val(eventFormObj['endTime']);
                    $("#START_TIME").val(eventFormObj['startTime']);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Create Event'] != null ? labelObject['Create Event'] : 'Create Event'),
                        modal: true,
                        // width: "auto",
                        width: 600,
                        height: 'auto',
                        maxHeight: 550,
                        fluid: true,
                        buttons: [
                            {

                                text: (labelObject['Update Event'] != null ? labelObject['Update Event'] : 'Update Event'),
                                "class": 'dialogyes',
                                click: function () {
                                    var errorCount = 0;
                                    $('#calendarCreateEventsTable :input').each(function () {
                                        var id = $(this).attr("id");
                                        var inputVal = $("#" + id).val();
                                        var mandatoryVal = $(this).attr("data-mandatory");
                                        if (mandatoryVal != null && mandatoryVal == 'M') {
                                            if (inputVal != null && inputVal != '') {
                                                $("#dis" + id).hide();
                                            } else {
                                                errorCount++;
                                                var errid = "#dis" + id;
                                                var msg = "Should not be empty";
                                                errorMessage(errid, msg);
                                            }
                                        }
                                    });
                                    if (errorCount == 0) {
                                        $(".all_errors").hide();
                                        updateFormEvent('dialog', calendarId, basicData, calObj, formObj);
                                    }
                                }

                            },
                            {
                                text: (labelObject['Delete Event'] != null ? labelObject['Delete Event'] : 'Delete Event'),
                                "class": 'dialogyes',
                                click: function () {
                                    var errorCount = 0;
                                    $('#calendarCreateEventsTable :input').each(function () {
                                        var id = $(this).attr("id");
                                        var inputVal = $("#" + id).val();
                                        var mandatoryVal = $(this).attr("data-mandatory");
                                        if (mandatoryVal != null && mandatoryVal == 'M') {
                                            if (inputVal != null && inputVal != '') {
                                                $("#dis" + id).hide();
                                            } else {
                                                errorCount++;
                                                var errid = "#dis" + id;
                                                var msg = "Should not be empty";
                                                errorMessage(errid, msg);
                                            }
                                        }
                                    });
                                    if (errorCount == 0) {
                                        $(".all_errors").hide();
                                        deleteFormEventData('dialog', calendarId, basicData, calObj, formObj);
                                    }
                                }
                            }
                        ],

                        open: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                            // var datePickersCols = eventFormObj['datePickerIds'];
                            var datePickersCols = formObj['datePickerIds'];
                            if (datePickersCols != null && datePickersCols != '') {
                                var datePickersColsArray = datePickersCols.split(",");
                                for (var i = 0; i < datePickersColsArray.length; i++) {
                                    $("#" + datePickersColsArray[i]).datepicker({
                                        changeMonth: true,
                                        changeYear: true,
                                        dateFormat: "yy-mm-dd",
                                        showOn: "button",
                                        buttonImage: 'images/iDXPUI5Calendar.svg',
                                        buttonImageOnly: true
                                    });
                                }
                            }
                            $("#ui-datepicker-div").addClass("ui-datepickerReports");
                            var timePickersCols = formObj['timePickerIds'];

                            if (timePickersCols != null && timePickersCols != '') {
                                var timePickersColsArray = timePickersCols.split(",");
                                for (var i = 0; i < timePickersColsArray.length; i++) {
                                    $('#' + timePickersColsArray[i]).timepicker({
                                        timeFormat: 'h:mm p',
                                        interval: 5,
                                        startTime: new Date(),
                                        dynamic: false,
                                        dropdown: true,
                                        scrollbar: true,
                                    });
                                }
                            }
                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                }

            }

            stopLoader();
        },
        error: function (e) {
            sessionTimeout(e);
            stopLoader();
        }


    });

}

//delete
function  deleteFormEventData(parentDailogId, calendarId, basicData, calObj, formObj) {
    showLoader();
    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'html',
        cache: false,
        url: 'deleteCalRecord',
        async: true,
        data: {
            calendarId: calendarId,
            eventData: JSON.stringify(calObj),
            basicData: JSON.stringify(basicData),
            formObj: JSON.stringify(formObj),
            panelId: $("#panelId").val(),
            tableName: formObj['TABLE_NAME'],
            viewTableName: formObj['VIEW_TABLES'],

        },
        success: function (response) {
            stopLoader();
            if (response != null && response != '' && response != undefined) {
                var responseObj = JSON.parse(response);
                if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
                    $("#dialog1").html(responseObj['message']);
                    $("#dialog1").dialog({resizable: false,
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
                                    if (responseObj['messageFlag']) {
                                        $("#" + parentDailogId).html("");
                                        $("#" + parentDailogId).dialog("close");
                                        $("#" + parentDailogId).dialog("destroy");
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
            sessionTimeout(e);
            stopLoader();
        }


    })
}

//update

//calendar form event data update
function  updateFormEvent(parentDailogId, calendarId, basicData, calObj, formObj) {
    showLoader();
    var calendarEventFormData = {};
    $("#calendarCreateEventsTable :input").each(function () {
        var textid = $(this).attr("id");
        var type = $(this).attr("type");
        var textval = $(this).val();
        if (type != 'hidden') {
            if (textval != null && textval != '') {
                textval = textval.toUpperCase();
            }
        }
        if (textid != null && textid != 'CREATE_DATE') {

            calendarEventFormData[textid] = textval;
        }

        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
            var columnNames = $("#" + textid).val();
            var columnsArray = columnNames.split(",");

            var hiddenIds = textid.split("HIDDEN_");
            var hiddenVal = $("#" + hiddenIds[1]).val();

            for (var i = 0; i < columnsArray.length; i++) {
                calendarEventFormData[columnsArray[i]] = hiddenVal;
            }

        }


    });

    $.ajax({
        type: 'post',
        traditional: true,
        dataType: 'html',
        cache: false,
        url: 'updateFormCalEventData',
        async: true,
        data: {
            calendarId: calendarId,
            eventData: JSON.stringify(calObj),
            basicData: JSON.stringify(basicData),
            paramsData: JSON.stringify(calendarEventFormData),
            panelId: $("#panelId").val(),
            tableName: formObj['TABLE_NAME'],
            viewTableName: formObj['VIEW_TABLES'],

        },
        success: function (response) {
            stopLoader();
            if (response != null && response != '' && response != undefined) {
                var responseObj = JSON.parse(response);
                if (responseObj != null && !jQuery.isEmptyObject(responseObj)) {
                    $("#dialog1").html(responseObj['message']);
                    $("#dialog1").dialog({resizable: false,
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
                                    if (responseObj['messageFlag']) {
                                        $("#" + parentDailogId).html("");
                                        $("#" + parentDailogId).dialog("close");
                                        $("#" + parentDailogId).dialog("destroy");
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
            sessionTimeout(e);
            stopLoader();
        }


    })
}

//calendar form event code

function isStageSelect(colname) {
    var getSelectValue = $("#" + colname).val();
    if (getSelectValue != null || getSelectValue != 'undefined' || getSelectValue != "") {
        $.ajax({
            type: "post",
            url: "getProbability",
            cache: false,
            data: {
                stage: getSelectValue
            },
            traditional: true,
            success: function (response) {
                alert("response::::" + response);
                if (response != null && response != '') {
                    $("#OPP_PROBABILITY").val(response);
                } else {
                    $("#dialog").html("Probability not found!");
                    $("#dialog").dialog({resizable: false,
                        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                        modal: true,
                        height: 120,
                        width: 300,
                        fluid: true,
                        buttons: [
                            {
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $("#OPP_PROBABILITY").val("");
                                    $("#dialog").empty();
                                    $("#dialog").dialog('close');
                                }
                            }
                        ],
                        open: function () {
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
            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    }

}

function autoTransferByJCO(gridId, source) {
    if (gridId != null) {
        $.ajax({
            type: 'post',
            traditional: true,
            dataType: 'json',
            cache: false,
            url: 'autoTransferByJCO',
            async: true,
            data: {
                gridId: gridId,
                source: source
            },
            success: function (response) {
                if (response != null) {
                    $("#dialog").html(response['message']);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
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
                                    if (response['messageFlag']) {
                                        $("#" + gridId).jqxGrid('updatebounddata');
                                        try {
                                            $("#" + gridId).jqxGrid('clearselection');
                                        } catch (e) {
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
                        }
                    });
                }
            },
            error: function (e) {
                sessionTimeout(e);
            }
        });
    }
}
//crm panel form code
function formViewOperation(gridId, operationType) {
    showLoader();
    var labelObj = {};
    try {
        labelObj = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    window.navigationGridId = "";
    var paramsData = {};

    var jsonOBJ = {};
    if (gridId != null) {
        var basicData = {};
        var rowData = {};
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
                    basicData[columnsArray[i]] = hiddenVal;
                }

            }


        });


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
                    basicData: JSON.stringify(rowData),
                    selectedIndex: selectedIndex,
                    selectedGridId: gridId,
                    operationType: operationType
                }
            }
        } else {
            paramsData = {
                selectedGridId: gridId,
                basicData: JSON.stringify(basicData),
                selectedGridData: JSON.stringify(rowData),
                operationType: operationType
            }
        }
        if (paramsData != null && !jQuery.isEmptyObject(paramsData)) {

            $.ajax({
                type: "POST",
                url: 'formViewOperation',
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
function updateFormOperations(id, gridId, operationName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var gridData = {};
    var jsonData = {};
    var basicData = {};

    if (gridId != null && gridId != '') {
        var errorCount = 0;
        var unMatchCount = 0;
        var selectedIndex = $("#" + gridId + "_selectedIndex").val();
        var currentRowOldData = {};
        if (selectedIndex != null && selectedIndex != '') {
            currentRowOldData = $('#' + gridId).jqxGrid('getrowdata', parseInt(selectedIndex));
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


        });
        $("#" + gridId + "_TABLE_FORM_VIEW :input").each(function () {
            var textid = $(this).attr("id");
            var type = $(this).attr("type");
            var mand = $(this).attr("data-mandatory");
            var label = $(this).attr("data-label");
            var regex = $(this).attr("data-regex");
//            var returnBoolean = regexFunction(textid, regex, mand, gridId, label);
            var returnBoolean = regexFunctionForm(gridId, textid, regex, mand, gridId, label);
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
        var hiddenValue = gridData[gridId + "_HIDDEN"]
        if (hiddenValue == 'INSERT') {
            unMatchCount = 1;
        }
        var dataArray = [];
        var jsOpsObj = null;
        jsOpsObj = new Object();
        jsOpsObj.gridData = gridData;
        jsOpsObj.basicData = basicData;
        dataArray.push(jsOpsObj);
        if (unMatchCount != 0 && errorCount == 0) {
            var selectedDataArray = [];
            selectedDataArray.push(gridData);
            var url = "formUpdateRecords";
            $.ajax({
                type: "POST",
                url: url,
                data: {
                    gridJsonData: JSON.stringify(dataArray),
                    gridId: gridId,
                },
                traditional: true,
                cache: false,
                success: function (result) {
                    if (result != null && result != '' && result != undefined) {
                        var response = JSON.parse(result);
                        if (response != null && response != '' && response['messageFlag'] == true) {
                            response = response['Message'];
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
                                        $("#" + gridId).jqxGrid('updatebounddata', 'cells');
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
                                    var hidden = gridId + "_HIDDEN";
                                    $("#" + gridId + "_TABLE_FORM_VIEW  #" + hidden).val("UPDATE");

                                }
                                if (result != null && result != '' && result.indexOf("Updated Successfully") > -1) {
                                    fetchTabData(gridId);
                                }


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
        } else if (errorCount == 0) {
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
//crm panel form code
//Currency conversion code
function currFormatChange(colname, regex, mandatory, basket, label) {
    var returnBoolean = regexFunction(colname, regex, mandatory, basket, label);
    if (returnBoolean == true) {
        var getSelectValue = $("#" + colname).val();
        var userName = $("#OPPORTUNITY_OWNER_ID").val();
        if (userName == null || userName == '' || userName == undefined) {
            userName = $("#OPP_OWNER_FULL_NAME").val();

        }
        if (userName == null || userName == '' || userName == undefined) {
            userName = $("#TENDER_SALES_OWNER").val();
        }
        var getCurrency = $("#OPPORTUNITY_CURRENCY").val();
        if (getCurrency == null || getCurrency == '' || getCurrency == undefined) { //CI Change
            getCurrency = $("#TENDER_COLUMN3").val();
        }
        if (getCurrency != null && getSelectValue != null && getCurrency != 'undefined'
                && getSelectValue != 'undefined' && getCurrency != "" && getSelectValue != "") {
            var getSelectValue = $("#" + colname).val();
            var splitValues = getCurrency.split('-');
            var fromCurrency = splitValues[0];
            if (getSelectValue.indexOf(fromCurrency) == -1) {
                $.ajax({
                    type: "post",
                    url: "currencyConversion",
                    cache: false,
                    data: {
                        fromCurrency: fromCurrency,
                        userName: userName,
                        getSelectValue: getSelectValue
                    },
                    traditional: true,
                    success: function (response) {
                        alert("response::::" + response);
                        if (response != null && response != '' && response != undefined) {
                            $("#" + colname).val(response);
                        }
                    },
                    error: function (e) {
                        sessionTimeout(e);
                    }

                });
            }
        }
    }
}
function isCurrencyChange() {
    $("#QUOTED_AMOUNT").val("");
    $("#OPP_FINAL_AMOUNT_C").val("");
    $("#OPPORTUNITY_COLUMN3").val("");
    $("#TENDER_ESTIMATED_VALUE_USD").val("");
}
//Currency conversion code

function clusterGridFormData(gridId) {

    if (gridId != null) {
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
                    for (var i = 0; i < stripValObj.length; i++)
                    {
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
                }//
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
                        } else {
                            //alert("Value is null");
                        }
                    }
                }
                items.stripValue = stripValueObjArray;
                items.panelId = $("#" + gridId + "_panelId").val();
                items.formId = $("#" + gridId + "_formId").val();//_formId
//                items.formId = $("#masterFormId").val();
//                items.panelId = $("#masterPanelId").val();
                items.imageColumn = $("#" + gridId + "_imageColumn").val();//$("#masterImageColumn").val();
                items.imageTable = $("#" + gridId + "_imageTable").val();
//                items.imageTable = $("#imageTable").val();
                items.imageTableColumn = $("#" + gridId + "_imageTableColumn").val();
//                items.imageTableColumn = $("#imageTableColumn").val();
                items.linkedColumns = linkedColumns;
                items.gridId = gridId;
                items.clusterId = $("#masterClusterId").val();
                items.objectid = $("#" + gridId + "_formId").val();
                var datainformation = $('#' + gridId).jqxGrid('getdatainformation');
                var rowscount = datainformation.rowscount;
                items.selectingrowindex = selectedIndex;
                items.rowscount = rowscount;
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
                    $.ajax({
                        type: "POST",
                        url: 'clusterFormData',
                        // async: false,
                        data: paramsData,
                        traditional: true,
                        cache: false,
                        success: function (response) {
                            stopLoader();
                            if (response != null && response != '') {
                                $('#dialog2').html(response);
                                $("#dialog2").dialog({resizable: false,

                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                    modal: true,
                                    height: 'auto',
                                    minHeight: 'auto',
                                    minWidth: '1100',
                                    maxWidth: 'auto',
                                    fluid: true,

                                    open: function () {
                                        $.getScript("/VisionDev/js/valid.js");
                                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
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
                                                $('body,html').animate({scrollTop: theOffset.top - 40});
                                            }, 310); // ensure the collapse animation is done
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
                                            if (scroll <= 0)
                                            {
                                                $("#top_arrow").hide();
                                                $("#bottom_arrow").show();


                                            } else {
                                                $("#top_arrow").show();
                                                $("#bottom_arrow").hide();
                                            }


                                        });

                                        $('.scrollToBottom').bind("click", function () {

                                            var heightscroll = $(document).height();
                                            $('html, body').animate({scrollTop: heightscroll}, 1200);

                                            return false;
                                        });
                                        $('.scrollToTop').bind("click", function () {
                                            $('html, body').animate({scrollTop: 0}, 600);
                                            $("#top_arrow").hide();
                                            $("#bottom_arrow").show();

                                            return false;
                                        });

                                        var icons = $("#accordion").accordion("option", "icons");

                                        $('.expandAll').click(function () {

                                            //                                        var count = $("#accdiv").find('h3').length;
                                            //                                        var className = $("h3").attr("class");
                                            var userIds = $('.ui-accordion-header').map(function () {
                                                return $(this).data('onclick');
                                            }).get();

                                            for (var i = 0; i < userIds.length; i++)
                                            {
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
                                                $('body,html').animate({scrollTop: theOffset.top - 80});
                                                $(this).next().visionTabMenuFormData('show', 20);
                                            }, 310); // ensure the collapse animation is done
                                        });

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
                            stopLoader();
                            sessionTimeout(e);
                        }


                    });
                }

            }
        }
    }
}
//crm regex
function regexFunctionForm(gridId, ele, regex, mandatory, basket, label) {
    var ele = ele;
    var splitid;
    var str;
    var tabId = $("#" + ele).attr("data-viewID");
    var inputtype = $("#" + ele).attr("data-inputtype");
    var inputHidden = $("#" + ele).attr("data-column");
    var mandatory = $("#" + ele).attr("data-mandatory");
    var regex = $("#" + ele).attr("data-regex");
    var label = $("#" + ele).attr("data-label");
    var datatype = $("#" + ele).attr("data-type");
    var type = $("#" + ele).attr("type");
    var regex = (regex == "null") ? null : regex;

    if (datatype == "C") {
        if ($(ele).is(":checked")) {
            str = true;
        } else {
            str = false;
        }
    } else {
        str = $("#" + gridId + "_TABLE_FORM_VIEW  #" + ele).val();
        if (str != null)
        {
            str = str.replace(/(^\s*)/gi, "");
            str = str.replace(/[ ]{2,}/gi, " ");
            str = str.trim();
            $("#" + ele).val(str);
        }
    }
    var id = '#dis' + ele;
    // var noConseq = isContiguosSpecialchars(ele);
    if (true) {
        var splitcount = 0;
        var valCount;
        var nrCount;
        var hiddenValue = "";
        if (inputtype == 'MT' && mandatory == 'O') {
            valCount = 0;
            nrCount = 0;
            var mtDependency = $("#" + ele).attr("data-mtdependency");
            var mtApplicable = "";
            var mtRequired = "";
            if (mtDependency == "D") {

//                splitid = $("#" + ele).attr("data-splitid").split(",");
                splitid = $("#" + ele).attr("data-column");
                splitcount = $("#" + ele).attr("splitcount");
                for (var i = 1; i <= splitcount; i++) {
                    mtRequired = $("#" + splitid + "" + i).attr("data-mtrequired");
                    mtApplicable = $("#" + ele).attr("data-mtapplicable");
                    if (mtRequired == 'NR') {
//                        ////////////////alert("NR");
                        ++nrCount;
                        ++valCount;
                    }
                    if ($("#" + splitid + "" + i).val() != "" && mtRequired == 'R') {
//                        ////////////////alert("R");
                        ++valCount;
                    }
                    if (mtApplicable == "NA") {
                        var j = i - 1;
                        var splitidPrev = splitid + "" + j;
                        if (j > 0) {
                            if (i > 1 && $("#" + splitidPrev).val().toUpperCase() == "NA") {
                                valCount = splitcount;
                                $("#" + splitid + "" + i).val('');
//                                $("#" + splitid + "" + i).attr('disabled', true);
                                $("#" + splitid + "" + i).attr('readonly', true);
                                $(".allErrors").hide();
                            }
                            if (i > 1 && $("#" + splitidPrev).val().toUpperCase() != "NA") {
//                                $("#" + splitid + "" + i).attr('disabled', false);
                                $("#" + splitid + "" + i).attr('readonly', false);
                            }
                        }

                    }

                    hiddenValue += $("#" + splitid + "" + i).val();
                    if (i < splitcount) {
                        hiddenValue += "-";
                    }

                }

                $("#" + inputHidden).val(hiddenValue);
            }
            if (mtDependency == "ND") {
//                splitid = $("#" + ele).attr("data-splitid").split(",");
                splitid = $("#" + ele).attr("data-column");
                splitcount = $("#" + ele).attr("splitcount");
                for (var i = 1; i <= splitcount; i++) {
                    hiddenValue += $("#" + splitid + "" + i).val();
                    if (i < splitcount) {
                        hiddenValue += "-";
                    }
                }
                $("#" + inputHidden).val(hiddenValue);
            }
//                            ////////////////alert("valCount:"+valCount+"-nrCount:"+nrCount+"-splitcount:"+splitcount);
            if (nrCount != valCount && valCount != splitcount) {
//                var msg = "Yahoo!! Jaanuuuuuu cheers :-) " + valCount;
                var msg = "Enter Valid " + label;
//                errorMessage(id, msg);
                errorFormMessage(gridId, id, msg);
                return false;
            }
        }
        if (inputtype == 'MT' && mandatory == 'M') {
            valCount = 0;
            nrCount = 0;
            var mtDependency = $("#" + ele).attr("data-mtdependency");
            var mtApplicable = "";
            var mtRequired = "";
            if (mtDependency == "D") {


//                splitid = $("#" + ele).attr("data-splitid").split(",");
                splitid = $("#" + ele).attr("data-column");
                splitcount = $("#" + ele).attr("splitcount");
                for (var i = 1; i <= splitcount; i++) {
                    mtRequired = $("#" + splitid + "" + i).attr("data-mtrequired");
                    mtApplicable = $("#" + ele).attr("data-mtapplicable");
                    if (mtRequired == 'NR') {
//                        ////////////////alert("NR");
                        ++nrCount;
                        ++valCount;
                    }
//                    //////////alert($("#" + splitid[i]).val());
                    if ($("#" + splitid + "" + i).val() != "" && mtRequired == 'R') {
//                        ////////////////alert("R");
                        ++valCount;
                    }
                    if (mtApplicable == "NA") {
                        if (i > 1) {
//                            //////////alert(i);
                            var j = i - 1;
                            var splitidPrev = splitid + "" + j;
//                            //////////alert(splitidPrev);
                            if ($("#" + splitidPrev).val().toUpperCase() == "NA") {
                                valCount = splitcount;
                                $("#" + splitid + "" + i).val('');
//                                $("#" + splitid + "" + i).attr('disabled', true);
                                $("#" + splitid + "" + i).attr('readonly', true);
                                $(".allErrors").hide();
                                $("#" + splitid + "" + i).attr("data-mandatory", 'O');
                            }
                            if ($("#" + splitidPrev).val().toUpperCase() != "NA") {
//                                $("#" + splitid + "" + i).attr('disabled', false);
                                $("#" + splitid + "" + i).attr('readonly', false);
                                $("#" + splitid + "" + i).attr("data-mandatory", 'M');
//                            ++valCount;
                            }
                        }
                    }

                    hiddenValue += $("#" + splitid + "" + i).val();
                    if (i < splitcount) {
                        hiddenValue += "-";
                    }

                }
                $("#" + inputHidden).val(hiddenValue);
            }
            if (mtDependency == "ND") {
//                splitid = $("#" + ele).attr("data-splitid").split(",");
                splitid = $("#" + ele).attr("data-column");
                splitcount = $("#" + ele).attr("splitcount");
                for (var i = 1; i <= splitcount; i++) {
                    hiddenValue += $("#" + splitid + "" + i).val();
                    if (i < splitcount) {
                        hiddenValue += "-";
                    }
                }
                $("#" + inputHidden).val(hiddenValue);
            }
//            ////////////////alert("valCount:"+valCount+"-nrCount:"+nrCount+"-splitcount:"+splitcount);
            if (nrCount != valCount && valCount != splitcount) {
//                var msg = "Yahoo!! Jaanuuuuuu cheers :-) " + valCount;
                var msg = "Enter Valid " + label;
                errorFormMessage(gridId, id, msg);
                return false;
            }
        }

        if (!str && mandatory == 'M' && type != 'hidden') {
//            var msg = "Should not be Blank"; // OLD: 21/8/17
// updated by NBA : START
            var msg = "";
            if (datatype == "L" || datatype == "C") {
                msg = "Should be Selected";
            } else {
                var msg = (labelObject['Should not be Blank'] != null ? labelObject['Should not be Blank'] : 'Should not be Blank');
                stopLoader();//7
            }
            errorFormMessage(gridId, id, msg);
            return false;

        }
        var res;
        if (regex != null) {
            var patt = new RegExp(regex);
            res = patt.test(str);
        } else {
            res = true;
        }
        /* Start: For STD + Telephone No. length Should be 10, If country is INDIA*/
        splitid = $("#" + ele).attr("data-column");
        splitcount = $("#" + ele).attr("splitcount");
        if (inputtype == 'MT' && splitcount == '3') {
            if ($("#LAND1").val() == "IN") {
                var split2Val = $("#" + splitid + '2').val();
                var split3Val = $("#" + splitid + '3').val();
                if (split2Val && split3Val) {
                    var splitVal = split2Val + split3Val;
                    var regex = "^[0-9]{10}$";
                    var patt = new RegExp(regex);
                    res = patt.test(splitVal);
                    if (res == false) {
                        errorFormMessage(gridId, id, "STD + Telephone No. length Should be 10");
//                        errorMessage(id, "STD + Telephone No. length Should be 10");
                        return false;
                    }
                }
            }
        }
        /* End: For STD + Telephone No. length Should be 10, If country is INDIA*/
        psCount(tabId);
//        var msg = "Enter Valid " + label;
        var msg = $("#" + ele).attr("data-regex-msg");
        if (str && res == false)
        {
            errorFormMessage(gridId, id, msg);
//            errorMessage(id, msg);
            return false;
        }

        $(id).html("");
        $(id).hide();
        return true;
    } else {
        psCount(tabId);
        return false;
    }


}
//crm regex

function refreshCalendarData(calnderId) {
    $('#' + calnderId).fullCalendar('refetchEvents');
}
function errorFormMessage(gridId, id, msg) {
    $("#" + gridId + "_TABLE_FORM_VIEW  " + id).fadeIn(1000).html(msg);
}
function ownerChangeView(gridId) {

    if (gridId != null) {
//       var selectedIndex = 0;
        var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        if (selectedRowIndexes != null && selectedRowIndexes.length != 0) {
            $.ajax({
                type: 'post',
                traditional: true,
                dataType: 'html',
                cache: false,
                url: 'getCrmUsers',
                async: true,
                data: {
                    gridId: gridId
                },
                success: function (response) {
                    if (response != null) {
                        $("#dialog").html(response);
                        $("#dialog").dialog({resizable: false,
                            title: (labelObject['Message'] != null ? labelObject['Message'] : 'CrmOwnerList'),
                            modal: true,
                            width: 300,
                            height: 135,
                            fluid: true,
                            buttons: [{
                                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                    click: function () {
                                        var ownereNameItem = $("#ownereComboBox").jqxComboBox('getSelectedItem');
                                        if (ownereNameItem != null) {
                                            var ownerid = ownereNameItem['value'];
                                            UpdateOwner(gridId, ownerid);
                                        }
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");

                                    }

                                }],
                            open: function () {
                                $("#ownereComboBox").jqxComboBox({searchMode: 'containsignorecase', multiSelect: false, width: 280,
                                    autoComplete: true,
                                    theme: 'energyblue',
                                    openDelay: 1,
                                    closeDelay: 1,
                                    enableSelection: true,
                                    height: 25});
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
                    sessionTimeout(e);
                }
            });
        } else {
            $("#dialog").html((labelObject['Please select record option to Process'] != null ? labelObject['Please select record option to Process'] : 'Please select record option to Process'));
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
                    //                                    location.reload();

                }
            });

        }
    }
}
function UpdateOwner(gridId, ownerid) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var paramsData = {};
    var rowData = {};
    if (gridId != null && gridId != '') {

        var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
        var currentRowOldData = {};
        if (selectedRowIndexes != -1) {
            rowData = $('#' + gridId).jqxGrid('getrowdata', selectedRowIndexes);
            var selectedGridObj = $('#' + gridId + "_gridObjStr").val();
            paramsData = {
                selectedGridData: JSON.stringify(rowData),
                selectedGridId: gridId,
                ownerid: ownerid,
            }
            if (paramsData != null && !jQuery.isEmptyObject(paramsData)) {
                // need to open form
                $.ajax({
                    type: "POST",
                    url: 'updateOwnerId',
                    data: paramsData,
                    traditional: true,
                    cache: false,
                    success: function (response) {
                        stopLoader();
                        if (response != null && response != '') {
                            $('#dialog').html(response);
                            $("#dialog").dialog({resizable: false,
                                title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                //  title: (labelObj[Message] != null ? labelObj[Message] : Message),
                                modal: true,
                                width: 300,
                                height: 135,
                                fluid: true,
//                                buttons: [{
//                                        text: (labelObj['Ok'] != null ? labelObj['Ok'] : "Ok"),
//                                        click: function () {
//                                            $(this).html("");
//                                           $(this).dialog("close");
//                                           $(this).dialog("destroy");
//
//                                        }
//
//                                    }],
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
}
function analysisFormPopup(message) {
    $("#dialog").html(message);
    $("#dialog").dialog({resizable: false,
        title: 'Message',
        modal: true,
        height: 111,
        minWidth: 111,
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
function displayAlalytics(gridId, chartId, formId) {
    var tableName = $("#" + gridId + "_tableName").val();
    var columnsArray = $("#" + gridId + "_colsArray").val();
    var fromDate = "";
    var toDate = "";

    $.ajax({
        type: "POST",
        url: 'getEmptyForm',
        data: {
            gridId: formId
        },
        traditional: true,
        cache: false,
        success: function (response) {
            stopLoader();
            if (response != null && response != '') {
                var result = JSON.parse(response);
                $('#analysisDialog').html(result['emptyFormStr']);
                $("#analysisDialog").dialog({resizable: false,
                    title: (labelObject['Input Parameters'] != null ? labelObject['Input Parameters'] : 'Input Parameters'),
                    modal: true,
                    height: "auto",
                    width: 500,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['View'] != null ? labelObject['View'] : 'View'),
                            click: function () {

                                $("#navigationUrlForm").find('input').remove();
                                var token = $("input[name='_csrf']").val();
                                var analysisType = $("#analysisType").val();
                                var inputType = "<input type='hidden' name='_csrf' value='" + token + "'/>";
                                $("#navigationUrlForm").append(inputType);
                                $("#navigationUrlForm").attr("analysisType", analysisType);
                                $("#analysisType").val(analysisType);
                                inputType = "<input type='hidden' name='analysisType' value='" + analysisType + "'/>";
                                $("#navigationUrlForm").append(inputType);
                                $("#navigationUrlForm").attr("target", "_blank");
                                $("#navigationUrlForm").attr("action", "getAnalytics");
                                //analyticId

                                inputType = "<input type='hidden' name='tabComponentId' value='" + chartId + "'/>";
                                $("#navigationUrlForm").append(inputType);
                                inputType = "<input type='hidden' name='analyticId' value='" + chartId + "'/>";
                                $("#navigationUrlForm").append(inputType);
                                inputType = "<input type='hidden' name='tableName' value='" + tableName + "'/>";
                                $("#navigationUrlForm").append(inputType);
                                inputType = "<input type='hidden' name='colsArray' value='" + columnsArray + "'/>";
                                $("#navigationUrlForm").append(inputType);
                                inputType = "<input type='hidden' name='dataApiObjStr' value='" + $("#dataApiObjStr").val() + "'/>";
                                $("#navigationUrlForm").append(inputType);

                                $("#" + formId + "_InputTableForm").find(".item :input").each(function () {
                                    var textid = $(this).attr("id");
                                    var type = $(this).attr("type");
                                    var textval = $(this).val();
                                    if (type != 'hidden') {
                                        if (textval != null && textval != '') {
                                            textval = textval.toUpperCase();
                                        }
                                    }
                                    if (textid == 'Plant' && textval.indexOf(",") > -1) {

                                        textval = textval.split(',');
                                        textval = JSON.stringify(textval);
                                        textval = textval.replace(/"/g, '').replace(/\'/g, '');
                                    }
                                    inputType = "<input type='hidden' name='" + textid + "' value='" + textval + "'/>";
                                    $("#navigationUrlForm").append(inputType);
                                });
                                if (analysisType != null && analysisType != '' && analysisType == 'ABC') {
                                    var aValue = $("#A").val();
                                    var cValue = $("#C").val();
                                    //onkar added
//                                    fromDate = $.datepicker.formatDate("yy-mm-dd", $("#FROM_DATE").datepicker('getDate'));
//                                    toDate = $.datepicker.formatDate("yy-mm-dd", $("#TO_DATE").datepicker('getDate'));
                                    inputType = "<input type='hidden' name='aValue' value='" + aValue + "'/>";
                                    $("#navigationUrlForm").append(inputType);
                                    inputType = "<input type='hidden' name='cValue' value='" + cValue + "'/>";
                                    $("#navigationUrlForm").append(inputType);
                                    inputType = "<input type='hidden' name='fromDate' value='" + fromDate + "'/>";
                                    $("#navigationUrlForm").append(inputType);
                                    inputType = "<input type='hidden' name='toDate' value='" + toDate + "'/>";
                                    $("#navigationUrlForm").append(inputType);
                                    inputType = "<input type='hidden' name='colssArray' value='" + columnsArray + "'/>";
                                    $("#navigationUrlForm").append(inputType);
                                    inputType = "<input type='hidden' name='gridId' value='" + gridId + "'/>";
                                    $("#navigationUrlForm").append(inputType);
                                    inputType = "<input type='hidden' name='analysisType' value='" + analysisType + "'/>";
                                    $("#navigationUrlForm").append(inputType);

                                }
                                if (aValue != null && cValue != null && aValue != ''
                                        && aValue != undefined && cValue != '' && cValue != undefined

                                        && analysisType != null && analysisType != '' && analysisType == 'ABC') {

                                    aValue = parseInt(aValue);
                                    cValue = parseInt(cValue);

                                    var message = '';
                                    if (aValue > cValue) {
                                        message = "C Value must be greater than A.";
                                    }
                                    if (message != null && message != '' && message != undefined) {
                                        analysisFormPopup(message);
                                    } else {
                                        $("#navigationUrlForm").submit();
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                    }

                                } else {
                                    $("#navigationUrlForm").submit();
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");

                                }
                            }
                        }],
                    open: function () {
//                        var analysisType = $("#analysisType").val();
//                        for (var i = 0; i < datePickersColsArray.length; i++) {
//                            $("#" + datePickersColsArray[i]).datepicker({changeMonth: true,
//                                dateFormat: "dd-mm-yy", changeMonth: true, changeYear: true,
//                                onSelect: function () {
//                                                 if(analysisType != null && analysisType !='' && analysisType=='ABC'){
//                                                var toDateMinDate=$.datepicker.formatDate("yy-mm-dd", $("#FROM_DATE").datepicker('getDate'));
//                                                $('#TO_DATE').datepicker('option', 'minDate', new Date(toDateMinDate));
//                                                 }
//                                        }
//                            });
//                        }
//                        if(analysisType != null && analysisType !='' && analysisType=='ABC'){
//                                     $("#FROM_DATE").datepicker('option', 'minDate', new Date(minDate)); 
//                                     $("#TO_DATE").datepicker('option', 'maxDate', new Date(maxDate)); 
//                        }
                        $("#ui-datepicker-div").addClass("ui-datepickerReports");
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
//                        $(this).addClass("PiLogCloudAnalysisForm");
                        $(this).closest(".ui-dialog").find(".ui-dialog-titlebar").addClass("PiLogCloudAnalysisForm");
                        $(this).closest(".ui-dialog").find(".ui-dialog-titlebar-close").addClass("PiLogCloudFormClose");
                        $(this).closest(".ui-dialog").find(".dialogyes").addClass("PiLogCloudFormButton");
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
            stopLoader();
            sessionTimeout(e);
        }
    });
}
function spellCheckTextArea(colname, tabId, dataView, rowIndex) {
    if (colname != null && colname != '' && colname != undefined) {
        $("textarea").css("text-transform", "none");
        $("#" + colname).attr("spellcheck", 'true');
    }
}
function populateTabGridFillDownData(selectedGridId) {

    var lasteditedfield = $('#' + selectedGridId).attr('data-last-ed-field');
    var lasteditedrow = $('#' + selectedGridId).attr('data-last-ed-row');
    $('#' + selectedGridId).jqxGrid('endcelledit', lasteditedrow, lasteditedfield, false);

    var dataField = lasteditedfield;
    var columnindex = $('#' + selectedGridId).jqxGrid('getcolumnindex', dataField);
    ;
    var rowBoundIndex = $('#' + selectedGridId).jqxGrid('getrowboundindexbyid', lasteditedrow);
    ;
    var cellValue = $('#' + selectedGridId).jqxGrid('getcellvaluebyid', lasteditedrow, lasteditedfield)
    var labelObj = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var currentSelectFillDownData = $("#currentSelectFillDownData").val();
    var selectedGridObj = $("#selectedGridObj").val();
    var gridResultObj = responseObj;
//    console.log(selectedGridObj + ":::selectedGridObj:::" + selectedGridObj['gridResultObj']);
    var responseObj = JSON.parse(selectedGridObj);
    var gridResultObj = responseObj;
    var gridInitParamObj = {};
    gridInitParamObj = responseObj['gridInitParamObj'];
    var dependentColumn = "";
    var dependentVal = "";
//    console.log(selectedGridId + ":::populateFillDownData:::" + currentSelectFillDownData);

    if (currentSelectFillDownData = null || (currentSelectFillDownData = '')
            || (currentSelectFillDownData = undefined) || (currentSelectFillDownData = 'undefined')) {

        var fillDownColumns = '';
        if (gridInitParamObj != null) {
            fillDownColumns = gridInitParamObj['fillDownColumns'];
        }
        currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + columnindex + ":" + fillDownColumns;
//                                        var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + fillDownColumns;
        console.log("currentSelectFillDownData:::" + currentSelectFillDownData);
        $("#currentSelectFillDownData").val(currentSelectFillDownData);
        var uuu_fillDownDependencyColumns = gridInitParamObj['uuu_fillDownDependencyColumns'];
        if (uuu_fillDownDependencyColumns != null && uuu_fillDownDependencyColumns != '') {
            $("#currentSelectFillDownDependencyColumns").val(uuu_fillDownDependencyColumns);
        }
        var currentSelectGridIndex = lasteditedrow;
    }

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
                if (selectColumnValue != null && selectColumnValue != undefined) {
                    var fillDownDependencyColumns = "";
                    var fillDownDependencyColumnsStr = uuu_fillDownDependencyColumns;
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
            }
//                             
            else {
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

}
function sowInputNumberValidation() {
    var e = event || window.event;
    var key = e.keyCode || e.which;

    if (key < 91 && key > 64) {

        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }
}
function getPivotGridData(gridId) {

    console.log('gridId' + gridId);
    $.ajax({
        type: "post",
        traditional: true,
        url: "jqxPivotGrid",
        cache: false,
        data: {
            'gridId': gridId
        },
        success: function (response) {
            if (response != null) {
                var data = response['data'];
                var rows = response['rows'];
                var columns = response['columns'];
                var datafields = response['datafields'];
                var filter = response['filters'];
                var values = response['values'];
                var columnsList = response['columnsList'];
                var source =
                        {
                            localdata: data,
                            datatype: "array",
                            datafields: datafields,
                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                dataAdapter.dataBind();
                // create a pivot data source from the dataAdapter
                var pivotDataSource = new $.jqx.pivot(
                        dataAdapter,
                        {
                            customAggregationFunctions: {
                                'var': function (values) {
                                    if (values.length <= 1)
                                        return 0;
                                    // sample's mean
                                    var mean = 0;
                                    for (var i = 0; i < values.length; i++)
                                        mean += values[i];
                                    mean /= values.length;
                                    // calc squared sum
                                    var ssum = 0;
                                    for (var i = 0; i < values.length; i++)
                                        ssum += Math.pow(values[i] - mean, 2)
                                    // calc the variance
                                    var variance = ssum / values.length;
                                    return variance;
                                }
                            },
                            pivotValuesOnRows: false,
                            totals: {rows: {subtotals: true, grandtotals: true}, columns: {subtotals: false, grandtotals: true}},
                            fields: rows,
                            rows: [],
                            columns: [],
                            values: values
                        });
                var localization = {'var': 'Variance'};
//                                var localization = getLocalization('de');
                // create a pivot grid
                $('#divPivotGrid').jqxPivotGrid(
                        {
                            localization: localization,
                            source: pivotDataSource,
                            treeStyleRows: false,
                            autoResize: false,
                            multipleSelectionEnabled: true,
                            itemsRenderer: function (pivotItem) {
                                var backgroundColor = pivotItem.isColumn ? 'rgba(187, 232, 227, 255)' : 'rgba(203, 254, 187, 255)';
                                if (pivotItem.isSelected)
                                    backgroundColor = pivotItem.isColumn ? 'rgba(167, 212, 207, 255)' : 'rgba(183, 234, 157, 255)';
                                var sortElement = '';
                                if (pivotItem.hierarchy.getSortItem() == pivotItem) {
                                    var elementClass = pivotItem.hierarchy.getSortOrder() == 'desc' ? 'jqx-icon-arrow-down' : 'jqx-icon-arrow-up';
                                    sortElement = "<div id='sortElement' class='" + elementClass + "' style='margin-right: 0px; width: 16px; height: 11px; font-size: smaller; vertical-align: bottom; padding-top: 4px;'></div>";
                                }
                                var additionalItem = '';
                                var classStyle = 'jqx-pivotgrid-expand-button';
                                if (pivotItem.isExpanded) {
                                    classStyle = 'jqx-pivotgrid-collapse-button';
                                }
                                additionalItem = '<div style="position: relative; top: 5px; padding: 5px; width: 11px; height: 11px;" class="' + classStyle + '"></div>'
                                if (pivotItem.items.length == 0) {
                                    additionalItem = '';
                                }
                                return additionalItem + "<div style='background: " + backgroundColor + "; width: calc(100% – 8px); height: calc(100% - 4px); font-size: smaller; text-align: center; vertical-align: bottom; padding-top: 4px;'>" + pivotItem.text + sortElement + "</div>";
//                                            return "<div style='background: " +  backgroundColor + "; width: calc(100% - 8px); height: calc(100% - 8px); padding: 4px;'>"+ pivotItem.text+ sortElement+ "</div>";
                            },
                            cellsRenderer: function (pivotCell) {
                                var colors = ['rgba(248, 105, 107, 255)', 'rgba(250,170,120,255)', 'rgba(255,230,130,255)', 'rgba(175,215,130,255)', 'rgba(100,190,120,255)'];
                                var selectedColors = ['rgba(228, 85, 87, 255)', 'rgba(230,150,100,255)', 'rgba(235,210,110,255)', 'rgba(155,195,110,255)', 'rgba(80,170,100,255)'];
                                var val = Math.min(pivotCell.value, 20);
                                var backgroundColor = pivotCell.isSelected ? selectedColors[Math.round(val / 5)] : colors[Math.round(val / 5)];
                                if (pivotCell.pivotColumn.text != 'Sum')
                                    backgroundColor = pivotCell.isSelected ? 'rgba(225, 225, 225, 255)' : 'rgba(255, 255, 255, 255)';
                                if (pivotCell.isSelected)
                                    backgroundColor
                                var cellText = pivotCell.value == 0 ? '' : pivotCell.formattedValue;
                                return "<div style='background: " + backgroundColor + "; width: calc(100%-8px); height: 100%; padding: 4px; margin: 0px;'>" + cellText + "</div>";
                            },
                        });
                $('#divPivotGrid').on('pivotitemexpanding pivotitemcollapsing pivotitemexpanded pivotitemcollapsed pivotitemselectionchanged sortchanging sortchanged sortremoving sortremoved', function (event) {
                    var t = new Date();
                    var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
                    var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text;
                    if (event.type == 'itemselectionchanged')
                        eventData += ', Selected: ' + event.args.selected;
                    eventData += "\n";
                    $('#eventText').val(eventData + $('#eventText').val());
                });
                $('#divPivotGrid').on('pivotitemmouseup pivotitemmousedown pivotitemclick pivotitemdblclick', function (event) {
                    var t = new Date();
                    var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
                    var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text + ', mousebutton: ' + event.args.mousebutton;
                    eventData += "\n";
//                                    $("#divContextMenu").css('display:block !important;');

                });
                $('#divPivotGrid').on('pivotcellmouseup pivotcellmousedown pivotcellclick pivotcelldblclick', function (event) {
                    var t = new Date();
                    var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
                    var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivot row: ' + event.args.pivotRow.text + ', pivot column: ' + event.args.pivotColumn.text + ', mousebutton: ' + event.args.mousebutton;
                    eventData += "\n";
                    $('#eventText').val(eventData + $('#eventText').val());
                });
//                                $('#eventText').jqxTextArea();
//                                $("#btnClearLog").jqxButton().on('click', function () { $('#eventText').val("");});
                var pivotGridInstance = $('#divPivotGrid').jqxPivotGrid('getInstance');
                // create a pivot grid
                $('#divPivotGridDesigner').jqxPivotDesigner(
                        {
                            type: 'pivotGrid',
                            target: pivotGridInstance
                        });
                $('#divPivotGrid').on('pivotcelldblclick', function (e) {
                    var args = e.args;
                    drillThrough(args.pivotRow, args.pivotColumn);
                });
                pivotGridInstance.refresh();
//                                $('#drillThroughWindow').on('open', function (e) {
//                                    pivotGridInstance.selectionEnabled = false;
//                                });
//                                 $('#drillThroughWindow').on('close', function (e) {
//                                    pivotGridInstance.selectionEnabled = true;
//                                });
//                                function drillThrough(pivotRow, pivotColumn){
//                                    var rows = pivotGridInstance.getPivotCells().drillThroughCell(pivotRow, pivotColumn);
//                                    var drillThroughRows = [];
//                                    for (var i = 0; i < rows.length; i++)
//                                        drillThroughRows[i] = data[rows[i]];
//                                    
//                                    var drillThroughSrc =
//                                    {
//                                        localData: drillThroughRows,
//                                        dataType: "array",
//                                        dataFields: datafields
//                                        
//                                    };
//                                    var drillThroughDataAdapter = new $.jqx.dataAdapter(drillThroughSrc);
//
//                                    $("#tableSrcRecords").jqxDataTable(
//                                    {
//                                        pageable: true,
//                                        width: '100%',
//                                        height: '100%',
//                                        pagerButtonsCount: 10,
//                                        source: drillThroughDataAdapter,
//                                        columnsResize: true,
//                                        columns: columns
//                                    });
//                                    $("#tableSrcRecords").jqxDataTable('refresh');
//                                    $('#drillThroughWindow').jqxWindow('open');
//                                }
//                                var offset = $('#divPivotGrid').position();
//                                $('#drillThroughWindow').jqxWindow({
//                                    autoOpen: false,
//                                    position: { x: offset.left + 150, y: offset.top + 70 },
//                                    showCollapseButton: true, maxHeight: 400, maxWidth: 700, minHeight: 200, minWidth: 200, height: 300, width: 500,
//                                    initContent: function () {
//                                        $('#tableSrcRecords').jqxDataTable({width: '100%', height: '100%'});
//                                    }
//                                });
//                                if(pivotGridInstance.getPivotRows().items != null || pivotGridInstance.getPivotRows().items.length != 0 
//                                        || pivotGridInstance.getPivotColumns().items != null || pivotGridInstance.getPivotColumns.items.length != 0){
//                                    drillThrough(pivotGridInstance.getPivotRows().items[0], pivotGridInstance.getPivotColumns().items[0].values());
//                                }
                $("#jqxpivotGridDialog").dialog({resizable: false,

                    title: labelObject['Descriptive Analytics'] != null ? labelObject['Descriptive Analytics'] : 'Descriptive Analytics',
                    modal: true,
                    height: 520,
                    width: 857,
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
                        $(this).closest(".ui-dialog").addClass("visionPivotGridDialog");
                        $(".ui-widget-overlay ui-front").addClass("visionPivotGridOverlay");
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
function displayHelpManual(fileName) {
    var $ssThemesURL = $("#ssThemesURL").val();
    var $ssRole = $("#helpMenuRole").val();
    window.open($ssThemesURL + 'Help/' + $ssRole + '/' + fileName, "_blank");
}
function showVideo(videoName) {
    if (videoName !== null && videoName !== "" && videoName !== 'undefined') {
        var ssThemesURL = $("#ssThemesURL").val();
        var ssRole = $("#helpMenuRole").val();
        var htlString = "";
        if (ssRole != null && ssRole != "" && ssRole.indexOf("CM_CRM_") > -1) {
            htlString = "<video width='100%' height='310' controls autoplay> "
                    //+ "<source src='http://localhost:8080/Vision_Help/Video/CM_CRM_MANAGER/"+videoName+"'  type='video/mp4'></video>" ;
                    + "<source src='" + ssThemesURL + "Video/CM_CRM_MANAGER/" + videoName + "'  type='video/mp4'></video>";
        } else {
            htlString = "<video width='100%' height='310' controls autoplay> "
                    + "<source src='" + ssThemesURL + "Video/" + ssRole + "/" + videoName + "'  type='video/mp4'></video>";
        }
        $("#dialog").html(htlString);
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : 'Help Video'),
            modal: true,
            width: 600,
            height: 420,
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
function priceConroleOnAddOperation() {
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

    }

}

function clusterForm1() {

    $("#dxpClusterMainSplitter").jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 270}]});
    try {
        let currentTabName = event.currentTarget.innerText;
        var tabname = currentTabName.split('\n')[0];
        insertUserClickedNavigations(tabname);
    } catch (e) {

    }

// var paramArraystr= JSON.stringify(paramArray);
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'json',
        url: "getclusterFormData",
        cache: false,
        async: false,
        data: {
            clusterId: "MM_SPIR_PROCESS",
            //  gridId: "PM_TASK_LIST_HEADER",
//                items: itemObjDefaultValuesDataObjStr
        },
        success: function (response) {
            stopLoader();
            var masterObject = response['masterObject'];
            var masterId = masterObject['masterId'];
            var tabstring = response['tabsString'];
            var tabsHeadersString = response['tabsHeadersString'];

//               $("#clusterFormData").remove();
//               $("body").append("<div id='clusterFormData' ></div>");
//               $("#clusterFormdialog").remove();
//               $("body").append("<div id='clusterFormdialog' ></div>");
//                

            $("#dxpClusterFirstDiv").html(tabsHeadersString);
            $("#dxpClusterSecondDiv").html("<div id='clusterFormData'  class = 'dxpclusterFormDataClass' ></div>");

            // document.getElementById('clusterFormData').innerHTML = tabstring;
            $("#clusterFormData").html(tabstring);

            var theme = "ui-redmond";
            //$(window).resize(function ()
            //{
//                            screenHeight = screen.height;
//                            if (parseInt(screenHeight) >= 769) {
//                                $("#" + masterId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
//                                    theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
//                                    , scrollPosition: 'both'});
//                                console.log("screen height is::::864 ");
//                            } else {
//                                $("#" + masterId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
//                                    theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
//                                    , scrollPosition: 'both'});
//                                console.log("screen height is::::768 ");
//                            }
            var masterGridObj = masterObject['masterGridObj'];
            if (masterGridObj != null && masterGridObj != undefined) {
                var hrefObject = masterGridObj['hrefObj'];
                $("#masterPanelId").val(masterGridObj['panelId']);
                $("#masterFormId").val(masterGridObj['formId']);
                $("#masterGridObj").val(masterObject['masterGridObj']);
                $("#masterLinkedColumns").val(hrefObject['linkedColumns']);
                $("#masterhrefColumn").val(hrefObject['hrefColumn']);
                $("#masterObject").val(masterObject);
                $("#masterStripValue").val(hrefObject['stripValue']);
                $("#masterClusterId").val(masterObject['masterId']);
//                                $("#itemObjDefaultValues").val(masterObject['itemObjDefaultValues']);
                //$("#itemObjDefaultValues").val(itemObjDefaultValuesDataObjStr);
                $("#masterImageColumn").val(hrefObject['imageColumn']);
                $("#imageTable").val(hrefObject['imageTable'])
                $("#imageTableColumn").val(hrefObject['imageTableColumn'])
                var gridRefresh = $("#gridRefreshVal").val();
                $("#gridRefreshVal").val(gridRefresh);
                var hiddenObject = masterGridObj['hiddenObj'];
                if (hiddenObject != null) {
                    $("#hiddenObject").val(JSON.stringify(hiddenObject));
                }
                var columnInitParamObj = {};
                columnInitParamObj = masterGridObj['columnInitParamsObj'];
                $("#masterColumnInitParamsObj").val(JSON.stringify(columnInitParamObj));
                $("#defaultFlag").val(masterGridObj['defaultFlag']);
                $("#attachTypeVal").val(masterGridObj['attachTypeVal']);
            }
            $("#" + masterId + "_TAB").unbind('selected').on('selected', function (event) {

                currentClickedGridId = null;
                executed = false;
                changeflag = false;
                tabSwitched = true;
                if (onTabclickFunc != null) {
                    onTabclickFunc();
                }
            });

            $("#" + masterId + "_TAB").unbind('selecting').on('selecting', function (event) {
                if (currentClickedGridId != null) {
                    checkChanges(currentClickedGridId);
                }
                askConfirmation(event, event.target.id);
            });

            $("#" + masterId + "_TAB").unbind('unselecting').on('unselecting', function (event) {
                var tabTitle = $('#${masterId}_TAB').jqxTabs('getTitleAt', event.args.item);
                var unselectedTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
                checkChanges(unselectedTabId);
            });

            $("li.jqx-tabs-title").on("mouseup", function (event)

            {
                var target = $(event.target).closest('.jqx-tabs-title');
                onTabclickFunc = target[0].onclick;
                //onTabclickFunc = onTabclickFunc.substring(25,onTabclickFunc.length-1);
                tabSwitched = false;
            });
            // });
            // window.dispatchEvent(new Event('resize'));

            if (masterObject != null) {
                var paramArray = [];
                var masterGridObj = masterObject['masterGridObj'];
                clusterGridConfig(masterGridObj, masterGridObj['gridId'], masterId, masterObject['compType'], "Y", paramArray, "", "", "Y");
                $("#clusterSplitter").jqxSplitter({width: "1390px", height: "750px", orientation: 'horizontal'});
                //$("#clusterSplitter").jqxSplitter({   orientation: 'horizontal'});

                if (tabname != null && tabname != undefined && tabname != '' && tabname != 'undefined') {
                    showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', tabname, 'N');
                } else {
                    showSelectedTabContent(null, 'dxpClusterTab', 'dxpClusterContent', 'View Cluster', 'N');
                }
//                                $("#"+masterGridObj['gridId']).jqxGrid({"width": "100%"});
//                                $("#"+masterGridObj['gridId']).jqxGrid({"height": "100%"});
                // $("#"+masterGridObj['gridId']).jqxGrid("height", "687px");

            }



        },
        error: function (e) {
            stopLoader();
            sessionTimeout(e);
        }
    });

}
function showDupRecordsCharTyping(recordNo, id) {
//    showLoader();
    var basicData = {};
    var basicDataAudit = {};
    var panelGridId = $("#panelGridId").val();
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    $(".formDxpDuplicates ").addClass("makeButtonsVerticleDir");
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
    var selectGridOprationArray = gridOperationFn('update', panelGridId);
    var dataValue = $("#" + id).text();
    var selectedDataArray = gridOperation("update", panelGridId);
//    updateAdditionalInfoWidget('', '', '', 'F');
//    showLoader();
    $(".matchedClassCount").html("");
    $.ajax({
        type: "POST",
        url: 'getDupRecordsCharTyping',
        data: {
            recordNo: recordNo,
            basicData: JSON.stringify(basicData),
            fieldsData: JSON.stringify(selectedDataArray),
            inputVal: selectGridOprationArray,
            dataValue: dataValue
        },
        traditional: true,
        cache: false,
        success: function (result) {
//            stopLoader();
            if (result != null && result != undefined && result != '') {

                var resultObj = JSON.parse(result);
                $(".formDxpDuplicates").html(resultObj['result']);
                $(".formDxpDuplicates").css("height", "150px");
                $(".matchedClassCount").html(resultObj['count']);
                $(".formDxpDuplicates").draggable().resizable();
                $(".formDxpDuplicatesFullScreen").draggable();
                var recordArray = resultObj['recordArray'];
                var erpNoArray = resultObj['erpNoArray'];
                var stausArray = resultObj['stausArray'];
                var pdrArray = resultObj['pdrArray'];
                var dupAnalyticsObj = {};
                var dupAnalyticsArr = [];
                dupAnalyticsObj['recordArray'] = recordArray;
                dupAnalyticsObj['erpNoArray'] = erpNoArray;
                dupAnalyticsObj['stausArray'] = stausArray;
                dupAnalyticsObj['pdrArray'] = pdrArray;
                dupAnalyticsArr.push(dupAnalyticsObj);
                $("#charDupRecordListForAnalytics").val(JSON.stringify(dupAnalyticsArr));
                var styleVal = $('.formDxpDuplicates').attr('style');
                if (styleVal.indexOf('none') > -1 && $('.dxpMatchedCountShowClass').length > 0) {
                    $('#isMultiFlterDxpFormMainDiv').remove();
                    if (fioriThemeCheck) {
                        $('#fiorimatchedCountImageClass').remove();
                        $('#fioriManageButtongroupId').append("<div id='fiorimatchedCountImageClass'><div id='isMultiFlterDxpFormMainDiv'><span>Click To Open Duplicates</span></div></div>")
                        $('#isMultiFlterDxpFormMainDiv').jqxPopover({
                            offset: {left: 0, top: 0},
                            width: 200,
                            arrowOffsetValue: 0,
                            height: 30,
                            showArrow: true,
                            theme: 'arctic',
                            selector: $('#fiorimatchedCountImageClass')
                        });
                    } else {
                        $('#matchedCountImageClass').html("<div id='isMultiFlterDxpFormMainDiv'><span>Click To Open Duplicates</span></div>")
                        $('#isMultiFlterDxpFormMainDiv').jqxPopover({
                            offset: {left: 0, top: 0},
                            width: 200,
                            arrowOffsetValue: 0,
                            height: 30,
                            showArrow: true,
                            theme: 'arctic',
                            selector: $('#matchedCountImageClass')
                        });
                    }
                    $("#isMultiFlterDxpFormMainDiv").jqxPopover('open');

                }

                $('#isMultiFlterDxpFormMainDiv').click(function () {
                    $('.formDxpDuplicates').show();
                    $("#isMultiFlterDxpFormMainDiv").jqxPopover('close');
                });
            }
        }
    });
//    stopLoader();
}
function gridOperationFn(operationName, tabId) {
    var selectedDataArray = [];
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
                            var columnValue = $("#tb" + initialTblViewColsObj['datafield'] + rowIndex).val();
                            if (initialTblViewColsObj['datafield'] === "PROPERTY_VALUE1") {
                                columnValue = $("#tb" + initialTblViewColsObj['datafield'] + rowIndex).text();
                            }
                            dataObj[fieldname] = columnValue;

                            if (columnValue != "") {
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
//                        if (matched) {
                        if (parseInt(errorMessagesCount) == 0) {
                            selectedDataArray.push(dataObj);
                        }

//                        }
                    }
                }
                // end if td array
            }// end loop

        }
    }
    return JSON.stringify(selectedDataArray);
}
function showPopup() {
    var modalObj = {
        title: 'Add-On Message',
        body: 'Do you want Add-On?',
    };
    var buttonArray = [
        {
            text: 'Ok',
            click: function () {
//                dxpCustomizeFormUpdate();
            },
            isCloseButton: true
        },
        {
            text: 'Cancel',
            click: function () {
            },
            isCloseButton: true
        }
    ];
    modalObj['buttons'] = buttonArray;
    createModal("dataDxpSplitterValue", modalObj);
    $(".modal-dialog").addClass("opacity-animate3");
}
function fontTextChange(eventID, dataValue) {

    $('.' + eventID).map(function () {
        var searchText = $(this).html();
        var txt = searchText.replace(dataValue, function (str) {
            return "<span class='duplicateHighlightedText'>" + str + "</span>";
        });
        if (dataValue != "") {
            $(this).html(txt);
        }
    })
    F
}
function updateAdditionalInfoWidget(columnName, columnValue, processType, accflag) {
    var referenceNum = $("#REFERENCE_NO").val();
    var referenceType = $("#REFERENCE_TYPE").val();
    var vendorName = $("#VENDOR_NAME").val();
    var docVendorName = $("#DOC_VENDOR_NAME").val();
    var reqType = 'PPRA';
    var paramArray = [];
    var paramObj = {};
    if (referenceNum != null && referenceNum != '' && referenceNum != undefined) {
        paramObj.datatype = 'string';
        paramObj.column = 'REFERENCE_NO';
        paramObj.value = referenceNum;
        paramObj.operator = 'LIKE';
        paramObj.symbol = 'like';
        paramArray.push(paramObj);
    }
    if (referenceType != null && referenceType != '' && referenceType != undefined) {
        paramObj.datatype = 'string';
        paramObj.column = 'REFERENCE_TYPE';
        paramObj.value = referenceType;
        paramObj.operator = 'LIKE';
        paramObj.symbol = 'like';
        paramArray.push(paramObj);
    }
    if (vendorName != null && vendorName != '' && vendorName != undefined) {
        paramObj.datatype = 'string';
        paramObj.column = 'VENDOR_NAME';
        paramObj.value = vendorName;
        paramObj.operator = 'LIKE';
        paramObj.symbol = 'like';
        paramArray.push(paramObj);
    }
    if (docVendorName != null && docVendorName != '' && docVendorName != undefined) {
        paramObj.datatype = 'string';
        paramObj.column = 'DOC_VENDOR_NAME';
        paramObj.value = docVendorName;
        paramObj.operator = 'LIKE';
        paramObj.symbol = 'like';
        paramArray.push(paramObj);
    }
    if (paramArray != null && paramArray.length != 0) {
        getPPRWidgetsearchResults(reqType, "", paramArray, "", "");
    } else {
        $('#accordion h3').map(function () {
            var accCondtion = $(this).attr('aria-expanded');
            if (accCondtion == 'true') {
                showLoader();
                var panelGridId = $("#panelGridId").val();
                var selectedDataArray = gridOperation("update", panelGridId);
//    $('#charAccordionsContainerExDiv').html("");
                var itemsString = $('#itemsstring').val();
                if (columnName == '') {
                    columnName = "TERM";
                }
                if (processType == '') {
                    processType = "CHAR";
                }
                $.ajax({
                    type: "POST",
                    url: 'getformWidgetAddInfoPPRNetData',
                    data: {
                        jsonData: JSON.stringify(selectedDataArray),
                        buttonFlag: "N",
                        items: itemsString,
                        columnName: columnName,
                        columnValue: columnValue,
                        processType: processType,
                        accflag: accflag
                    },
                    traditional: true,
                    cache: false,
                    success: function (result) {
                        stopLoader();
                        $('#accordionCardBody' + accflag).html(result)
                    }
                });
            } else {

            }
        });
    }
}
function clearText(id) {
    stopLoader();
    $("#" + id['id']).val("");

}
function showCharDataInputForm(gridId, operationName) {
    showLoader();
    var selectBatchIdsList = "";
    $.ajax({
        type: "POST",
        url: 'getBatchIdList',
        dataType: 'json',
        data: {
            tableName: 'STG_ESPIR'
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null) {
                var batchIdList = response['batchIdList'];
                selectBatchIdsList = "<select id= 'selectBatchId'>"
                $.each(batchIdList, function (i) {
                    selectBatchIdsList += "<option>" + this + "</option>";
                })
            }
            selectBatchIdsList += "</select>";
            var body = "<div> Select Spir No : " + selectBatchIdsList + "</div>";
            stopLoader();
            $("#dialog").html(body);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Select Spir No'] != null ? labelObject['Select Spir No'] : 'Select Spir No'),
                modal: true,
                width: 400,
                height: 150,
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            var batchId = $("#selectBatchId").val();
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");

                            getCharData(gridId, operationName, batchId);
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

function getCharData(gridId, operationName, batchId) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'charDataUpdate',
        data: {
            'gridId': gridId,
            'operationName': operationName,
            'batchId': batchId
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            var body = result + "<br><span onclick=\"viewGridData('MM_MASTER_O_RECORD_CHAR','charDataTabContent')\">View Data</span>";
            $("#dialog").html(result);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Char Data'] != null ? labelObject['Char Data'] : 'Char Data'),
                modal: true,
                width: 400,
                height: 150,
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
    });
}
function showClassAllocDataInputForm(gridId, operationName) {

    var selectBatchIdsList = "";
    $.ajax({
        type: "POST",
        url: 'getBatchIdList',
        dataType: 'json',
        data: {
            tableName: 'STG_ESPIR'
        },
        traditional: true,
        cache: false,
        success: function (response) {

            if (response != null) {
                var batchIdList = response['batchIdList'];
                selectBatchIdsList = "<select id= 'selectBatchId'>"
                $.each(batchIdList, function (i) {
                    selectBatchIdsList += "<option value=" + this + ">" + this + "</option>";
                })
            }
            selectBatchIdsList += "</select>";
            var body = "<div> Select Spir No : " + selectBatchIdsList + "</div>";
            stopLoader();
            $("#dialog").html(body);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Select Spir No'] != null ? labelObject['Select Spir No'] : 'Select Spir No'),
                modal: true,
                width: 400,
                height: 150,
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            var batchId = $("#selectBatchId").val();
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");

                            getClassAllocationData(gridId, operationName, batchId);
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
function getClassAllocationData(gridId, operationName, batchId) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'classAllowcationUpdate',
        data: {
            'gridId': gridId,
            'operationName': operationName,
            'batchId': batchId
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
            $("#dialog").html(result);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Class Allocation'] != null ? labelObject['Class Allocation'] : 'Class Allocation'),
                modal: true,
                width: 400,
                height: 150,
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
    });
}
function moveToOpportunity(id, destGridId) {
    var gridData = {};
    var gridInitParamObj = {};

    $("#" + id['id']).val("");
    var colValue = $("#" + id).val();
    if (colValue != null && colValue == "CONVERTED_OPP") {
        //console.log(colValue);
        var gridId = $("#" + id).attr("data-viewid");
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
            //   var hiddenValue = $("#" + gridId + "_HIDDEN").val();
            var hiddenValue = 'add';
            if (hiddenValue == 'INSERT') {
                unMatchCount = 1;
            }
            if (unMatchCount != 0 && errorCount == 0) {
                var selectedDataArray = [];

                selectedDataArray.push(gridData);
                var url = "moveToOpportunity";
                //var url = "updateRecord";
                var tableName = $("#" + destGridId + "_tableName").val();
                $.ajax({
                    type: "POST",
                    url: url,
                    data: {
                        gridJsonData: JSON.stringify(selectedDataArray),
                        gridId: destGridId,
                        tableName: $("#tableName").val(),
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
                                        stopLoader();
                                        var selectedrowindexes = $("#" + gridId).jqxGrid('getselectedrowindexes');
                                        processRequestforMassBulk(selectedrowindexes, "delete", gridId, "Y");

                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        //gridoperations('CRM_GRID_LEAD','delete')
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


}

function getQCToolsExport(gridId, tabId) {

    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {

    }
    var selectedRowData = {};
    var selectedRowsData = [];
    var exportJson = {};
    var BatchId = "";
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (selectedrowindexes.length != 0)
    {
        var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
        var totalRowIndex = selectedrowindexes.length;
        var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
        if (datainformations != null) {
            var count = 0;
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
            for (var i = count; i < totalRowIndex; i++)
            {
                selectedRowData = ($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]))
                selectedRowsData.push($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));
                BatchId = BatchId + "," + selectedRowData['BATCH_ID'];
            }
        }
        BatchId = BatchId.replace(/^,+/, "");
        BatchId = BatchId.replace(/,+$/, "");
        selectedRowsData['tabId'] = tabId;
        exportJson['data'] = selectedRowsData;
        $('#downloadDatajsonData').val(JSON.stringify(exportJson));
        $('#jsonExpData').val(selectedRowsData);
        $('#selectedRowData').val(selectedRowData);
        $('#exportGridId').val(tabId);
        $('#selectType').val(BatchId);
        $("#downloadData").attr("action", "exportQCToolData");
        $("#downloadData").submit();
    } else {

        var message = labelObject['Please Select any Record to process the request'] != null ? labelObject['Please Select any Record to process the request'] : "Please Select any Record to process the request";
        $("#dialog").html(message + ".");
        $("#dialog").dialog({resizable: false,
            title: (labelObject['Message'] != null ? labelObject['Message'] : "Message"),
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
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

async function setCurrentLocation(gridId, latlongColName, googlemapLinkCol, mapzoom, popupwidth, popupheight) {
    showLoader();
    try {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var getlatitude = "";
        var getlongitude = "";
        var getlatlong = "";
        var lat = "";
        var long = "";
        var selectedRowData = {};
        var selectedRowsData = [];
        var latlogArray = [];
        var exportJson = {};
        var BatchId = "";
        var dialogwidth = '1200px';
        var dialogheight = '600';
        if (popupwidth != null && popupwidth != '' && popupwidth != 'undefined')
        {
            dialogwidth = popupwidth;
        }
        if (popupheight != null && popupheight != '' && popupheight != 'undefined')
        {
            dialogheight = popupheight;
        }
        var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
        if (selectedrowindexes.length != 0)
        {
            var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
            var totalRowIndex = selectedrowindexes.length;
            var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
            if (datainformations != null) {
                var count = 0;
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

                $('#latitude').val("");
                $('#logtitude').val("");

//           setLoactiontoIds ();
                var position = await getGeoCurrentLocation();
                console.log(position);
                console.log(position.latitude);
                console.log(position.logtitude);
                var zoomnum = parseInt("20");
                if (mapzoom != null && mapzoom != '' && mapzoom != 'undefined')
                {
                    zoomnum = parseInt(mapzoom);
                }

                getlatitude = position.latitude;
                getlongitude = position.logtitude;
                let latlon = new google.maps.LatLng(getlatitude, getlongitude);
                var myOptions = {
                    center: latlon,
                    zoom: zoomnum,
//                    zoom: 20,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: true,
                    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}
                };
                var latlongdata = '<span style = color:blue;font-size:12px;font-weight:600;>Latitude: ' + getlatitude + '&nbsp;&nbsp;&nbsp;&nbsp;Longitude: ' + getlongitude + '</span>';
                document.getElementById('geoLocation').innerHTML = latlongdata;
                document.getElementById('geoLocation').style.background = '#f1f1f1';
                document.getElementById('geoLocation').style.padding = '4px';
                var map = new google.maps.Map(document.getElementById('geoMap'), myOptions);
                var marker = new google.maps.Marker({position: latlon, map: map, title: "You are here!", draggable: true});
                document.getElementById('geoMap').style.height = '97%';
                google.maps.event.addListener(marker, 'dragend', function (event) {
//                    console.log('Oldlat::::'+getlatitude);
//                    console.log('Oldlng::::'+getlongitude);
                    getlatitude = this.position.lat();
                    getlongitude = this.position.lng();
//                    console.log('newlat::::'+getlatitude);
//                    console.log('newlng::::'+getlongitude);
                    latlongdata = '<span style = color:blue;font-size:12px;font-weight:600;>Latitude: ' + this.position.lat() + '&nbsp;&nbsp;&nbsp;&nbsp;Longitude: ' + this.position.lng() + '</span>';
                    document.getElementById('geoLocation').innerHTML = latlongdata;
                });
                google.maps.event.addListener(marker, 'drag', function (event) {
                    latlongdata = '<span style = color:blue;font-size:12px;font-weight:600;>Latitude: ' + this.position.lat() + '&nbsp;&nbsp;&nbsp;&nbsp;Longitude: ' + this.position.lng() + '</span>';
                    document.getElementById('geoLocation').innerHTML = latlongdata;
                });
                stopLoader();
                $("#geoLocationMap").dialog({resizable: false,
                    title: (labelObject['GeoLocationMap'] != null ? labelObject['GeoLocationMap'] : "GeoLocationMap"),
                    modal: true,
                    height: dialogheight,
                    width: dialogwidth,
                    fluid: true,
                    overflow: 'auto',
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
                            click: function () {
//                                $(this).html("");
                                $("#geoLocation").html("");
                                $("#geoMap").html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");

                                if (getlatitude != null && getlatitude != '' && getlatitude != '0' && getlatitude != 'undefined'
                                        && getlongitude != null && getlongitude != '' && getlongitude != '0' && getlongitude != 'undefined') {
                                    showLoader();
                                    for (var i = count; i < totalRowIndex; i++)
                                    {
                                        selectedRowData = ($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));

                                        try {
                                            $('#' + gridId).jqxGrid('setcellvalue', selectedrowindexes[i], latlongColName, getlatitude + "," + getlongitude);
                                            if (googlemapLinkCol != null && googlemapLinkCol != '' && googlemapLinkCol != 'undefined') {
                                                $('#' + gridId).jqxGrid('setcellvalue', selectedrowindexes[i], googlemapLinkCol, "https://www.google.com/maps/place/" + getlatitude + "," + getlongitude);
                                            }
                                        } catch (ex) {
                                            console.log(ex);
                                        }

                                    }

                                    stopLoader();
                                } else {
                                    stopLoader();
                                    showErrorPopupMessage("Unable to get Location Details", "Message");
                                }

                            }

                        }],
                    open: function () {
                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                        $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                        $(".geoLocationMap").addClass("geoLocationMap");

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
            showErrorPopupMessage("Please Select any Record to process the request", "Message");
        }
    } catch (es) {
        stopLoader();
        console.log(es);
    }
    stopLoader();
}



function getGeoCurrentLocation() {
    return new Promise(resolve => {
        var data = {};
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                data.latitude = latitude;
                data.logtitude = longitude;
                resolve(data);
            });
        }

    });
}



function showGeoLocationMap(gridId, latlongColName, titleColName, mapzoom, mapmessage, popupwidth, popupheight) {
    try {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var latitude = "";
        var longitude = "";
        var selectedRowData = {};
        var selectedRowsData = [];
        var locationsdata = [];
        var exportJson = {};
        var BatchId = "";
        var datacnt = 0;
        var dialogwidth = '1200px';
        var dialogheight = '600';

        if (popupwidth != null && popupwidth != '' && popupwidth != 'undefined')
        {
            dialogwidth = popupwidth;
        }
        if (popupheight != null && popupheight != '' && popupheight != 'undefined')
        {
            dialogheight = popupheight;
        }
        var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
        if (selectedrowindexes.length != 0)
        {
            var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
            var totalRowIndex = selectedrowindexes.length;
            var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
            if (datainformations != null) {
                var count = 0;
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

                for (var i = count; i < totalRowIndex; i++)
                {
                    selectedRowData = ($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));
                    var latlong1 = selectedRowData[latlongColName];
                    if (latlong1 != null && latlong1 !== '' && latlong1 != 'undefined' && latlong1.indexOf(",") > -1)
                    {
                        selectedRowsData.push($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]));
                        datacnt = datacnt + 1;
                    }

                }

                selectedRowsData.forEach(function (e, i) {
                    if (!this[e[latlongColName]]) {
                        this[e[latlongColName]] = {
                            latitude: (e[latlongColName].split(","))[0],
                            longitude: (e[latlongColName].split(","))[1],
                            titleval: e[titleColName],
                            Count: parseInt("1")
                        }
                        locationsdata.push(this[e[latlongColName]])
                    } else {
                        this[e[latlongColName]]['titleval'] = this[e[latlongColName]]['titleval'] + ',' + e[titleColName];
                        this[e[latlongColName]]['Count'] = parseInt(this[e[latlongColName]]['Count']) + 1;
                    }
                }, {});

                selectedRowData = selectedRowsData[0];
                latlong = selectedRowData[latlongColName];
                if (latlong != null && latlong != '' && latlong != 'undefined' && latlong.indexOf(",") > -1)
                {
                    var latitude = (latlong.split(","))[0];
                    var longitude = (latlong.split(","))[1];
                    let latlon = new google.maps.LatLng(latitude, longitude);

                    var zoomnum = parseInt("20");
                    if (mapzoom != null && mapzoom != '' && mapzoom != 'undefined')
                    {
                        zoomnum = parseInt(mapzoom);
                    }
                    var myOptions = {
                        center: latlon,
                        zoom: zoomnum,
//                    zoom: 5,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControl: true,
                        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}
                    };

                    if (latlong != null && latlong != '' && latlong != 'undefined')
                    {
                        mapmessage = 'Count Of Showed Records in Map';
                    }
                    if (latlong != null && latlong != '' && latlong != 'undefined' && latlong.indexOf("_") > -1)
                    {
                        mapmessage = mapmessage.replace("_", " ");
                    }

                    var latlongdata = '<span style = color:blue;font-size:12px;font-weight:600;>' + mapmessage + ': ' + datacnt + '</span>';
                    document.getElementById('geoLocation').style.background = '#f1f1f1';
                    document.getElementById('geoLocation').style.padding = '4px';
                    document.getElementById('geoLocation').innerHTML = latlongdata;
                    var map = new google.maps.Map(document.getElementById('geoMap'), myOptions);
//                var marker = new google.maps.Marker({position: latlon, map: map, title: "You are here!", draggable: true}); 
                    document.getElementById('geoMap').style.height = '97%';
                    var infoWindow = new google.maps.InfoWindow();
                    var marker;
                    var markers = [];
                    var marker = [];
                    locationsdata.forEach((e, i) => {
                        marker[i] = new google.maps.Marker({
                            position: new google.maps.LatLng(e['latitude'], e['longitude']),
                            map: map,
                            title: e['titleval'],
                            label: (e['Count']).toString(),
                            optimized: false,
//                            icon : '/images/placemarker.gif',
                        });

                        google.maps.event.addListener(marker[ i ], 'click', function (event) {
                            infoWindow.close();
                            infoWindow.setContent(marker[ i ].getTitle());
                            infoWindow.open(marker[ i ].getMap(), marker[ i ]);
                        });

                        markers.push(marker[i]);
                    });

                    markerClusterer = new MarkerClusterer(map, markers, {
                        maxZoom: zoomnum,
                        gridSize: 15,
//    styles: styles[style],
//    imageExtension: 'gif',
//    imagePath: '/images/m'
//    imagePath: '/images/placemarkergif'
//    imagePath: '/images/placemarker'
                    });


                    $("#geoLocationMap").dialog({resizable: false,
                        title: (labelObject['GeoLocationMap'] != null ? labelObject['GeoLocationMap'] : "GeoLocationMap"),
                        modal: true,
                        height: dialogheight,
                        width: dialogwidth,
                        fluid: true,
                        overflow: 'auto',
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
                                click: function () {
//                        $(this).html("");
                                    $("#geoLocation").html("");
                                    $("#geoMap").html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }

                            }],
                        open: function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                            $(".geoLocationMap").addClass("geoLocationMap");

                        },
                        beforeClose: function (event, ui)
                        {
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                } else {
                    showErrorPopupMessage("Selected Record didn't have correct LatLng Details", "Message")
                }

            } else {
                showErrorPopupMessage("Please Select any Record to process the request", "Message");
            }
        } else {
            showErrorPopupMessage("Please Select any Record to process the request", "Message")
        }
    } catch (es) {
        console.log(es)
    }

}

function showErrorPopupMessage(errorMessage, titleMessage, popupwidth, popupheight, zindex) {
    var dialogwidth = '300';
    var dialogheight = '120';
    var message = labelObject[errorMessage] != null ? labelObject[errorMessage] : errorMessage;
    var tmessage = titleMessage != null ? titleMessage : "Message";
    if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
    {
        dialogwidth = popupwidth;
    }
    if (popupheight != null && popupheight != "" && popupheight != 'undefined')
    {
        dialogheight = popupheight;
    }

    $("#messagedialog1").html(message);
    $("#messagedialog1").dialog({resizable: false,
        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
        modal: true,
        height: dialogheight,
        minWidth: popupwidth,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
                click: function () {
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

            }],
        open: function () {
            if (zindex != null && zindex != "" && zindex != 'undefined')
            {
                $(this).closest(".ui-dialog").css("z-index", zindex);
            }
//            $(this).closest(".ui-dialog").addClass("timelinepopup");
//             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            try {
                $(this).dialog("destroy");
            } catch (e) {
            }
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });

}
function clusterForm(clusterparam) {
    var basicData = {};
    var mainFormPanelId = $("#panelId").val();
    panelId
    if (clusterparam != null && clusterparam != '' && clusterparam != undefined)
    {
        clusterparam = JSON.parse(clusterparam);


        var orgChartParams = [];
        var paramArray = [];
        var clusterId = clusterparam['ClusterId'];
        var gridId = clusterparam['gridId'];
        var popupheight = clusterparam['height'];
        var popupwidth = clusterparam['width'];
        var WhereCondition = clusterparam['whereCond'];
        var defaultValuesFieldStr = clusterparam['defaultValuesFields'];
        var titleMessage = clusterparam['titleMessage'];
        var dialogwidth = '500';
        var dialogheight = '500';
        var tmessage = 'Cluster';

        if (titleMessage != null && titleMessage != "" && titleMessage != 'undefined')
        {
            tmessage = titleMessage;
        }
        if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
        {
            dialogwidth = popupwidth;
        }
        if (popupheight != null && popupheight != "" && popupheight != 'undefined')
        {
            dialogheight = popupheight;
        }

        console.log();
        var message = "";
        var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');


        var selectedRowsData = [];
        var totalRowIndex = indexes.length;
        if (totalRowIndex != null && totalRowIndex <= 0) {
            message = "Please select Row Data";
        } else if (totalRowIndex != null && totalRowIndex > 1) {
            message = "Not Allowed More than One Rows";
        }

        if (totalRowIndex != null && totalRowIndex == 1) {
            var count = 0;
            for (var i = count; i < totalRowIndex; i++) {
                var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);

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

                        data[textid] = textval;
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
                            data[columnsArray[i]] = hiddenVal;
                        }

                    }

                });

                selectedRowsData.push(data);
            }



            if (WhereCondition != null && !jQuery.isEmptyObject(WhereCondition)) {
                var columnarr = WhereCondition.split(",")
                for (var i = 0; i < columnarr.length; i++) {
                    var paramObj = {};
                    var whereconditionColumn = columnarr[i];
//              paramObj.value = selectedRowsData[0][whereconditionColumn];
                    paramObj.value = "'" + selectedRowsData[0][whereconditionColumn] + "'";
                    paramObj['column'] = whereconditionColumn
                    paramObj['operator'] = '=';
                    paramArray.push(paramObj);
                }

            }

            var itemObjDefaultValuesDataObj = {};

            if (defaultValuesFieldStr != null && !jQuery.isEmptyObject(defaultValuesFieldStr)) {
                var defaultValuesFieldarr = defaultValuesFieldStr.split(",");
                for (var i = 0; i < defaultValuesFieldarr.length; i++) {
                    var defaultValuesFieldColumn = defaultValuesFieldarr[i].split(":")[0];
                    var defaultValueColumn = defaultValuesFieldarr[i].split(":")[1];
//              paramObj.value = selectedRowsData[0][whereconditionColumn];
                    itemObjDefaultValuesDataObj[defaultValuesFieldColumn] = selectedRowsData[0][defaultValueColumn];
                }

            }

            var itemObjDefaultValuesDataObjStr = JSON.stringify(itemObjDefaultValuesDataObj);

// var paramArraystr= JSON.stringify(paramArray);
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'json',
                url: "getclusterFormData",
                cache: false,
                async: false,
                data: {
                    clusterId: clusterId,
                    gridId: gridId,
//                items: itemObjDefaultValuesDataObjStr
                },
                success: function (response) {
                    var masterObject = response['masterObject'];
                    var masterId = masterObject['masterId'];
                    var tabstring = response['tabsString'];
                    document.getElementById('clusterFormData').innerHTML = tabstring;
//                $("#clusterFormdialog").html(tabstring);
                    $("#clusterFormdialog").dialog({resizable: false,
                        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                        modal: true,
                        height: dialogheight,
                        minWidth: dialogwidth,
//                    maxWidth: 'auto',
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Close'] != null ? labelObject['Close'] : "Close"),
                                click: function () {
//                              $(this).html("");
                                    $("#clusterFormData").html("");
//                                document.getElementById('clusterFormdialog').style.display = 'none';
                                    $("#masterPanelId").val("");
                                    $("#masterFormId").val("");
                                    $("#masterGridObj").val("");
                                    $("#masterLinkedColumns").val("");
                                    $("#masterhrefColumn").val("");
                                    $("#masterObject").val("");
                                    $("#masterStripValue").val("");
                                    $("#masterClusterId").val("");
                                    $("#itemObjDefaultValues").val("");
                                    $("#masterImageColumn").val("");
                                    $("#masterColumnInitParamsObj").val("");
                                    $("#currentSelectChildGridId").val("");
                                    $("#currentSelectMasterGridId").val("");
                                    $("#multiSelectGridId").val("");
                                    $("#currentSelectFillDownDependencyColumns").val("");
                                    $("#currentSelectFillDownData").val("");
                                    $("#currentSelectGridIndex").val("");
                                    $("#currentSelectMasterGridIndex").val("");
                                    $("#panelId").val(mainFormPanelId);
                                    $("#relationArray").val("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                }

                            }],
                        open: function () {
                            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
//                        document.getElementById('clusterFormdialog').style.display = 'block';
                            var theme = "ui-redmond";
                            $(window).resize(function ()
                            {
                                screenHeight = screen.height;
                                if (parseInt(screenHeight) >= 769) {
                                    $("#" + masterId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
                                        theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
                                        , scrollPosition: 'both'});
                                    console.log("screen height is::::864 ");
                                } else {
                                    $("#" + masterId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
                                        theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
                                        , scrollPosition: 'both'});
                                    console.log("screen height is::::768 ");
                                }
                                var masterGridObj = masterObject['masterGridObj'];
                                if (masterGridObj != null && masterGridObj != undefined) {
                                    var hrefObject = masterGridObj['hrefObj'];
                                    $("#masterPanelId").val(masterGridObj['panelId']);
                                    $("#masterFormId").val(masterGridObj['formId']);
                                    $("#masterGridObj").val(masterObject['masterGridObj']);
                                    $("#masterLinkedColumns").val(hrefObject['linkedColumns']);
                                    $("#masterhrefColumn").val(hrefObject['hrefColumn']);
                                    $("#masterObject").val(masterObject);
                                    $("#masterStripValue").val(hrefObject['stripValue']);
                                    $("#masterClusterId").val(masterObject['masterId']);
//                                $("#itemObjDefaultValues").val(masterObject['itemObjDefaultValues']);
                                    $("#itemObjDefaultValues").val(itemObjDefaultValuesDataObjStr);
                                    $("#masterImageColumn").val(hrefObject['imageColumn']);
                                    $("#imageTable").val(hrefObject['imageTable'])
                                    $("#imageTableColumn").val(hrefObject['imageTableColumn'])
                                    var gridRefresh = $("#gridRefreshVal").val();
                                    $("#gridRefreshVal").val(gridRefresh);
                                    var hiddenObject = masterGridObj['hiddenObj'];
                                    if (hiddenObject != null) {
                                        $("#hiddenObject").val(JSON.stringify(hiddenObject));
                                    }
                                    var columnInitParamObj = {};
                                    columnInitParamObj = masterGridObj['columnInitParamsObj'];
                                    $("#masterColumnInitParamsObj").val(JSON.stringify(columnInitParamObj));
                                    $("#defaultFlag").val(masterGridObj['defaultFlag']);
                                    $("#attachTypeVal").val(masterGridObj['attachTypeVal']);
                                }
                                $("#" + masterId + "_TAB").unbind('selected').on('selected', function (event) {

                                    currentClickedGridId = null;
                                    executed = false;
                                    changeflag = false;
                                    tabSwitched = true;
                                    if (onTabclickFunc != null) {
                                        onTabclickFunc();
                                    }
                                });

                                $("#" + masterId + "_TAB").unbind('selecting').on('selecting', function (event) {
                                    if (currentClickedGridId != null) {
                                        checkChanges(currentClickedGridId);
                                    }
                                    askConfirmation(event, event.target.id);
                                });

                                $("#" + masterId + "_TAB").unbind('unselecting').on('unselecting', function (event) {
                                    var tabTitle = $('#${masterId}_TAB').jqxTabs('getTitleAt', event.args.item);
                                    var unselectedTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
                                    checkChanges(unselectedTabId);
                                });

                                $("li.jqx-tabs-title").on("mouseup", function (event)

                                {
                                    var target = $(event.target).closest('.jqx-tabs-title');
                                    onTabclickFunc = target[0].onclick;
                                    //onTabclickFunc = onTabclickFunc.substring(25,onTabclickFunc.length-1);
                                    tabSwitched = false;
                                });
                            }).resize();

                            if (masterObject != null) {
                                var masterGridObj = masterObject['masterGridObj'];
                                clusterGridConfig(masterGridObj, masterGridObj['gridId'], masterId, masterObject['compType'], "Y", paramArray, "", "", "Y");
                                $("#clusterSplitter").css("width", "100%");
                                $("#clusterSplitter").css("height", "687px");

                            }
                        },
                        beforeClose: function (event, ui)
                        {
                            $("#clusterFormData").html("");
                            $("#panelId").val(mainFormPanelId);
                            $("#masterPanelId").val("");
                            $("#masterFormId").val("");
                            $("#masterGridObj").val("");
                            $("#masterLinkedColumns").val("");
                            $("#masterhrefColumn").val("");
                            $("#masterObject").val("");
                            $("#masterStripValue").val("");
                            $("#masterClusterId").val("");
                            $("#itemObjDefaultValues").val("");
                            $("#masterImageColumn").val("");
                            $("#masterColumnInitParamsObj").val("");
                            $("#currentSelectChildGridId").val("");
                            $("#currentSelectMasterGridId").val("");
                            $("#multiSelectGridId").val("");
                            $("#currentSelectFillDownDependencyColumns").val("");
                            $("#currentSelectFillDownData").val("");
                            $("#currentSelectGridIndex").val("");
                            $("#currentSelectMasterGridIndex").val("");
                            $("#relationArray").val("");
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    });
                },
                error: function (e) {
                    stopLoader();
                    sessionTimeout(e);
                }
            });
        } else {
            $("#dialog").html(message);
            $("#dialog").dialog({resizable: false,
                title: (labelObject["message"] != null ? labelObject["message"] : "message"),
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
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

function showErrorPopupMessage2(errorMessage, titleMessage, popupwidth, popupheight) {
    $("#dialog1").html("");
    var dialogwidth = '300';
    var dialogheight = '120';
    var message = labelObject[errorMessage] != null ? labelObject[errorMessage] : errorMessage;
    var tmessage = titleMessage != null ? titleMessage : "Message";
    if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
    {
        dialogwidth = popupwidth;
    }
    if (popupheight != null && popupheight != "" && popupheight != 'undefined')
    {
        dialogheight = popupheight;
    }

    $("#messagedialog2").html(message);
    $("#messagedialog2").dialog({resizable: false,
        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
        modal: true,
        height: dialogheight,
        minWidth: popupwidth,
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
                click: function () {
                    $(this).html("");
                    try {
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    } catch (e) {
                    }
                }

            }],
        open: function () {
//             //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            try {
                $(this).dialog("destroy");
            } catch (e) {
            }
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });

}

function showgridPersonlizationPopup(response, titleMessage, popupwidth, popupheight, compId) {
    var dialogwidth = '300';
    var dialogheight = '120';
    var message = labelObject[response] != null ? labelObject[response] : response;
    var tmessage = titleMessage != null ? titleMessage : "Message";
    if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
    {
        dialogwidth = popupwidth;
    }
    if (popupheight != null && popupheight != "" && popupheight != 'undefined')
    {
        dialogheight = popupheight;
    }
    $("#dialogGridPersonlizationTable").html("");
    $("#dialogGridPersonlizationTable").html(message);
    $("#dialogGridPersonlization").dialog({resizable: false,
        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
        modal: true,
        height: dialogheight,
        minWidth: popupwidth,
        maxWidth: 'auto',
        fluid: true,
        buttons: [
            {
                text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
                click: function () {
                    $("#dialogGridPersonlizationTable").html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                }

            },
            {
                text: (labelObject['Save'] != null ? labelObject['Save'] : "Save"),
                click: function () {
                    try {
                        saveGridPersonalizationData(compId);
                    } catch (e) {

                    }

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
            $("#dialogGridPersonlizationTable").html("");
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });

}

function getSetgridPersonlization(compId, type) {
    try {
        var criteriaName = '';
        if (compId != null && compId != '' && compId != 'undefined') {
            try {
                var criteriaName = ($("#" + compId + "_persddw").val() != null && $("#" + compId + "_persddw").val() != undefined) ? $("#" + compId + "_persddw").val() : "";
            } catch (e) {
                criteriaName = "";
            }

            var selectedcriteriaName = '';

            showLoader();
            $.ajax({
                type: "POST",
                url: "getGridpersonalizationData",
//                    gridId: compId,
                data: {
                    gridId: compId,
                    criteriaName: criteriaName,
                    COMP_TYPE: type,
                    selectedcriteriaName: selectedcriteriaName
                },
                traditional: true,
                cache: false,
                success: function (result) {
                    var response = "";
                    stopLoader();
                    if (result != null && result != '' && result != 'undefined') {
//                        showErrorPopupMessage(result, 'Personalize', '600', '500')
                        showgridPersonlizationPopup(result, 'Personalize', '650', '500', compId);
                        stopLoader();
                    } else
                    {
                        stopLoader();
                    }

                },
                error: function (e)
                {
                    sessionTimeout(e);
                    console.log(e);
                    stopLoader();
                }

            });
        }


    } catch (ex) {
        console.log(ex);
        stopLoader();
    }
}

//update the row height for grid columns.            
function setgridRowHeight(compId) {
    try {
        if (compId != null && compId != "") {
            var gridId = (compId.indexOf("_height") > -1) ? compId.replace("_height", "").trim() : compId;
            var rowHeight = parseInt($("#" + compId).val());
            if (rowHeight != null && !isNaN(rowHeight) && rowHeight != '' && $.isNumeric(rowHeight)) {
                if (rowHeight >= 20) {
                    $("#" + gridId).jqxGrid({rowsheight: parseInt(rowHeight)});
                } else {
                    var response = "Enter row Height more than 20";
                    var title = "Row Height Alert";
                    showErrorPopupMessage2(response, title, '300', '120')
                }
            } else {
                var response = "Row Height should not contain blank or special characters";
                var title = "Row Height Alert";
                showErrorPopupMessage2(response, title, '300', '120')
            }
        }
    } catch (e) {
    }
}

//Update Grid with custom personalization.
function getSetselectedGridPersonalizationData(compId, componentType) {
    try {
//        $("#dialog").html("");
//        $("#dialogGridPersonlization").html("");
//    $("#dialogGridPersonlizationTable").html("");
        if (compId != null && compId != "" && compId != 'undefined') {
            var selectedcriteriaName = '';
            try {
                var criteriaName = ($("#" + compId).val() != null && $("#" + compId).val() != undefined) ? $("#" + compId).val() : "";

            } catch (e) {
                criteriaName = "";
            }
            if (criteriaName != null && criteriaName != "" && criteriaName != 'undefined' && criteriaName == 'Select One') {
                selectedcriteriaName = '';
            } else {
                selectedcriteriaName = criteriaName;
            }

            var gridId = (compId.indexOf("_persddw") > -1) ? compId.replace("_persddw", "").trim() : compId;
            showLoader();
            $.ajax({
                type: "POST",
                url: "getGridpersonalizationData",
//                    gridId: compId,
                data: {
                    gridId: gridId,
                    criteriaName: criteriaName,
                    COMP_TYPE: componentType,
                    selectedcriteriaName: selectedcriteriaName,
                },
                traditional: true,
                cache: false,
                success: function (result) {
                    var response = "";
                    stopLoader();
                    if (result != null && result != '' && result != 'undefined') {
                        $("#dialogGridPersonlizationTable").html("");
                        $("#dialogGridPersonlizationTable").html(result);
                        try {
                            if (criteriaName != null && criteriaName != '' && criteriaName != 'undefined') {
                                try
                                {
                                    var rowHeight = parseInt($("#" + gridId + "_height").val());
                                    if (!isNumeric(rowHeight)) {
                                        rowHeight = 20;
                                    }
                                } catch (e) {
                                }
                                $("#" + gridId).jqxGrid({rowsheight: parseInt(rowHeight)});

                                $("#" + gridId + "_persTable tbody :input").each(function () {
                                    var tbid = $(this).attr("id");
                                    var columnName = $(this).attr("data-col");
                                    var type = $(this).attr("type");
                                    if (type != null && type == 'checkbox') {//
                                        if (tbid.toString().indexOf('display') > -1) {
                                            try {
                                                if ($("#" + tbid).is(':checked')) {
//                                                    console.log("showing;;;" + columnName);
                                                    $("#" + gridId).jqxGrid('showcolumn', columnName);
                                                } else {

                                                    $("#" + gridId).jqxGrid('hidecolumn', columnName);
                                                }

                                            } catch (e) {

                                            }
                                        } else if (tbid.toString().indexOf('freeeze') > -1) {
//                                            console.log("pinning column::" + columnName);
                                            try {
                                                if ($("#" + tbid).is(":checked")) {
                                                    $("#" + gridId).jqxGrid('pincolumn', columnName);
                                                } else {
                                                    $("#" + gridId).jqxGrid('unpincolumn', columnName);
                                                }
                                            } catch (e) {
                                            }
                                        }
                                    } else if (tbid.toString().indexOf('width') > -1) {
                                        try {
                                            var colWidth = $("#" + gridId + columnName + "_width").val();
                                            if (colWidth != null && !isNaN(colWidth) && colWidth != '' && $.isNumeric(colWidth)) {
                                                $("#" + gridId).jqxGrid('setcolumnproperty', columnName, 'width', colWidth + "%");
                                            }
                                        } catch (e) {
                                        }
                                    }
                                });

                            }
                        } catch (ec) {
                            stopLoader();
                            console.log(ec);
                        }
                        stopLoader();
                    } else
                    {
                        stopLoader();
                    }

                },
                error: function (e)
                {
                    sessionTimeout(e);
                    console.log(e);
                    stopLoader();
                }

            });
        }
    } catch (e) {
    }
}

//Assigning data on personalization table.
function setGridColPersonaliseData(compId, componentType) {
    try {
        if (compId != null && compId != "") {
            var columnName = $("#" + compId).attr('data-col');
            var hiddenFlag = $("#" + compId).is(':checked');
            var gridId = $("#" + compId).attr('data-gridid');
            if ($("#" + compId).val() == '' && $("#" + compId).val() == 0) {
                var response = $("#" + compId).attr('data-lbl') + "\t width" + "\t should not be zero or left blank";
                showErrorPopupMessage2(response, '', '300', '120')
            }
            var size = $("#" + compId).val();
            if (compId.toString().indexOf('search') > -1) {
                if ($("#" + compId).prop('checked')) {
                    $("#" + gridId + $("#" + compId).attr("data-col")).show();
                } else {
                    $("#" + gridId + $("#" + compId).attr("data-col")).hide();
                }
            }
            if (compId.toString().indexOf("display") > -1) {
                $("#" + gridId).jqxGrid('setcolumnproperty', columnName, 'hidden', !hiddenFlag);
            } else if (compId.toString().indexOf("freeze") > -1) {
                $("#" + gridId).jqxGrid('setcolumnproperty', columnName, 'pinned', hiddenFlag);
            } else if (compId.toString().indexOf("search") > -1) {
                $("#" + gridId).jqxGrid('setcolumnproperty', columnName, 'search', hiddenFlag);

                try {
                    if (hiddenFlag) {
                        $("#" + gridId + "_filterColdiv_" + columnName).css("display", "block");
                    } else {
                        $("#" + gridId + "_filterColdiv_" + columnName).css("display", "none");
                        $("#" + gridId + "_" + columnName).val("");
                    }
                } catch (e) {

                }

            } else if (compId.toString().indexOf("width") > -1) {
                $("#" + gridId).jqxGrid('setcolumnproperty', columnName, 'width', size + "%");
            }
            if (componentType == "MDL") {
                $("#" + gridId).attr('data-updated', 'N');
            } else if (componentType == "GRID") {
                $("#" + gridId).attr('data-fetched', 'N');
            }
        }
    } catch (e) {
    }
}

function saveGridPersonalizationData(compId) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }

    $("#dialog1").html("");
    var persConfirmation = "Review personalization info before saving";
    persConfirmation = labelObject[persConfirmation] != null ? labelObject[persConfirmation] : persConfirmation;
    var inputBox = "<div id = 'savePersonalizationDialog' class = 'savePersonalizationDialog'><div style='display:block; margin-bottom: 1%;'>"
            + persConfirmation + "</div>"
            + "<input type='text' id='persName' class='saveSrchinput  placeholder='Name your personalization'/>"
            + "<div id='persNameError' style='color:red;display:none;'>"
            + "Should not be blank"
            + "</div></div>";
    $("#dialog1").html(inputBox);
    $("#dialog1").dialog({resizable: false,
        title: labelObject['Personalization Criteria'] != null ? labelObject['Personalization Criteria'] : 'Personalization Criteria',
        modal: true,
        height: 'auto',
        minWidth: 370,
        minHeight: 'auto',
        maxWidth: 'auto',
        fluid: true,
        buttons: [{
                text: labelObject['Save'] != null ? labelObject['Save'] : 'Save',
                click: function () {
                    stopLoader();
                    var persName = $("#persName").val();
                    if (persName != null && persName != '') {
                        $("#persNameError").hide();
                        confirmSavePersonalization(compId, persName);
                        $("#dialog1").empty();
                        $("#dialog1").dialog('close');
                    } else {
                        $("#persNameError").show();
                    }
                }
            },
            {
                text: labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel',
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
        beforeClose: function (event, ui) {
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });
}

//save personalization functionality
function confirmSavePersonalization(compId, criteriaName) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }
    try {
//        labelObject = JSON.parse($("#labelObjectHidden").val());
        if (compId != null && compId != "" && criteriaName != null && criteriaName != "", criteriaName != "null") {
            criteriaName = criteriaName.replace(/^\s+|\s+$/g, "");
            var tableId = compId + "_FILTER_FORM_TABLE";
            var savedPersObject = null;
            var persCriteria = [];
            try
            {
                var rowHeight = parseInt($("#" + compId + "_height").val());
                if (!isNumeric(rowHeight)) {
                    rowHeight = '';
                }
            } catch (e) {
            }

            $("#" + compId + "_persTable > tbody > tr").each(function () {
                savedPersObject = new Object();
                var columnName = $(this).find("td:eq(0)").attr('data-col');
                savedPersObject.colName = columnName;
                savedPersObject.colSequence = $("#" + compId).jqxGrid('getcolumnindex', columnName);
                savedPersObject.columnLabel = $(this).text();
                savedPersObject.displayFlag = $("#" + compId + columnName + "_display").is(':checked') == true ? "Y" : "N";
                savedPersObject.freezeFlag = $("#" + compId + columnName + "_freeze").is(':checked') == true ? "Y" : "N";
                savedPersObject.searchFlag = $("#" + compId + columnName + "_search").is(':checked') == true ? "Y" : "N";
                savedPersObject.defaultFlag = $("#" + compId + columnName + "_default").css('display') == 'none' ? "N" : "Y";
                savedPersObject.colWidth = $("#" + compId + columnName + "_width").val();
                savedPersObject.rowHeight = rowHeight;

                if ($("#" + tableId).length > 0) {
                    $("#" + tableId + " tbody tr").each(function () {
                        var colName = $(this).attr('data-colname');
                        if (colName == columnName) {
                            savedPersObject.operator = $("#operator" + compId + colName).val();
                            savedPersObject.colValue = $("#" + compId + "_" + colName).val();
                            return false;
                        }
                    });
                }
                persCriteria.push(savedPersObject);
            });
            $.ajax({
                type: "POST",
                url: 'savePersCriteria',
                data: {
                    criteriaName: criteriaName,
                    gridId: compId,
                    persCriteria: JSON.stringify(persCriteria),
                },
                traditional: true,
                cache: false,
                success: function (response) {
                    if (response != null && response != "") {
                        var resLength = response.length;
                        if (resLength > 100) {
                            if ($("#" + compId + "_persddw").length) {
                                $("#" + compId + "_persddw").html(response);
                            }
//                            generateMessage("Personalization saved successfully");
                            showErrorPopupMessage2("Personalization saved successfully", '', '300', '120')
                            $("#dialog1").html("");
                            $("#dialog1").dialog("close");
                            $("#dialog1").dialog("destroy");
                        } else {
//                            generateMessage(response);
                            showErrorPopupMessage2(response, '', '300', '120')
                            $("#dialog1").html("");
                            $("#dialog1").dialog("close");
                            $("#dialog1").dialog("destroy");
                        }
                    }
                },
                error: function (e) {
                    sessionTimeout(e);
                }
            });
        }
    } catch (e) {
    }
}

//Personalization delete functionality
function deleteGridPersonalizationData(compid, componentType) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
        var selectedcriteriaName = "";
        if (compid != null && compid != "") {
            var criteriaName = ($("#" + compid + "_persddw").val() != null && $("#" + compid + "_persddw").val() != undefined) ? $("#" + compid + "_persddw").val() : "";
            if (criteriaName != null && criteriaName != "" && criteriaName != "Select One") {
                var gridId = (compid.indexOf("_persddw") > -1) ? compid.replace("_persddw", "").trim() : compid;
                var message = "Are you sure want to delete this personalization";
                var confMesg = labelObject[message] != null
                        ? labelObject[message] : message;
                var dialogSplitMessage = dialogSplitIconText(confMesg, "Y");
                $("#dialog2").html(dialogSplitMessage);
                $("#dialog2").dialog({resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    modal: true,
                    height: 'auto',
                    minWidth: 370,
                    minHeight: 'auto',
                    maxWidth: 'auto',
                    fluid: true,
                    buttons: [{
                            text: labelObject['Yes'] != null ? labelObject['Yes'] : 'Yes',
                            click: function () {
                                $.ajax({
                                    type: "POST",
                                    url: 'deletePersCriteria',
                                    data: {
                                        gridId: gridId,
                                        criteriaName: criteriaName
                                    },
                                    traditional: true,
                                    cache: false,
                                    success: function (response) {
                                        var title = "Delete personalization Criteria";
                                        $('#' + gridId).jqxGrid('clearselection');
                                        $('#' + gridId).jqxGrid('clearfilters');
                                        var resp = labelObject[response] != null ? labelObject[response] : response;
                                        if (resp.toUpperCase() == (labelObject["SUCCESS"] != null ? labelObject["SUCCESS"] : "SUCCESS")) {
                                            $("#" + gridId + "_persddw").val("");
                                            try {
                                                $.ajax({
                                                    type: "POST",
                                                    url: "getGridpersonalizationData",
                                                    data: {
                                                        gridId: gridId,
                                                        criteriaName: criteriaName,
                                                        COMP_TYPE: componentType,
                                                        selectedcriteriaName: selectedcriteriaName,
                                                    },
                                                    traditional: true,
                                                    cache: false,
                                                    success: function (result) {
                                                        var response = "";
                                                        stopLoader();
                                                        if (result != null && result != '' && result != 'undefined') {
                                                            $("#dialogGridPersonlizationTable").html("");
                                                            $("#dialogGridPersonlizationTable").html(result);
                                                            try {
                                                                if (criteriaName != null && criteriaName != '' && criteriaName != 'undefined') {
                                                                    try
                                                                    {
                                                                        var rowHeight = parseInt($("#" + gridId + "_height").val());
                                                                        if (!isNumeric(rowHeight)) {
                                                                            rowHeight = 20;
                                                                        }
                                                                    } catch (e) {
                                                                    }
                                                                    $("#" + gridId).jqxGrid({rowsheight: parseInt(rowHeight)});

                                                                    $("#" + gridId + "_persTable tbody :input").each(function () {
                                                                        var tbid = $(this).attr("id");
                                                                        var columnName = $(this).attr("data-col");
                                                                        var type = $(this).attr("type");
                                                                        if (type != null && type == 'checkbox') {//
                                                                            if (tbid.toString().indexOf('display') > -1) {
                                                                                try {
                                                                                    if ($("#" + tbid).is(':checked')) {
//                                                    console.log("showing;;;" + columnName);
                                                                                        $("#" + gridId).jqxGrid('showcolumn', columnName);
                                                                                    } else {

                                                                                        $("#" + gridId).jqxGrid('hidecolumn', columnName);
                                                                                    }

                                                                                } catch (e) {

                                                                                }
                                                                            } else if (tbid.toString().indexOf('freeeze') > -1) {
//                                            console.log("pinning column::" + columnName);
                                                                                try {
                                                                                    if ($("#" + tbid).is(":checked")) {
                                                                                        $("#" + gridId).jqxGrid('pincolumn', columnName);
                                                                                    } else {
                                                                                        $("#" + gridId).jqxGrid('unpincolumn', columnName);
                                                                                    }
                                                                                } catch (e) {
                                                                                }
                                                                            }
                                                                        } else if (tbid.toString().indexOf('width') > -1) {
                                                                            try {
                                                                                var colWidth = $("#" + gridId + columnName + "_width").val();
                                                                                if (colWidth != null && !isNaN(colWidth) && colWidth != '' && $.isNumeric(colWidth)) {
                                                                                    $("#" + gridId).jqxGrid('setcolumnproperty', columnName, 'width', colWidth + "%");
                                                                                }
                                                                            } catch (e) {
                                                                            }
                                                                        }
                                                                    });

                                                                }
                                                            } catch (ec) {
                                                                stopLoader();
                                                                console.log(ec);
                                                            }


                                                        }
                                                    },
                                                    error: function (e) {
                                                        sessionTimeout(e);
                                                    }
                                                });

                                            } catch (ee) {

                                            }

                                            showErrorPopupMessage2(response, title, '300', '120');
                                            $(this).html("");
                                            $(this).dialog("close");
                                            $(this).dialog("destroy");
                                        }
                                    },
                                    error: function (e) {
                                        sessionTimeout(e);
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                    }
                                });
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
                        $(this).closest(".ui-dialog").addClass("visionPersonalizationSaveDialog");
                        $(".visionHeaderMain").css("z-index", "999");
                        $(".visionFooterMain").css("z-index", "999");
                    },
                    beforeClose: function (event, ui) {
                        $(".visionHeaderMain").css("z-index", "99999");
                        $(".visionFooterMain").css("z-index", "99999");
                    }
                });
            }
        }
    } catch (e) {
    }
}
function stickyHead(compid) {
    try {
        if (compid != null && compid != 'undefined' && compid != "") {
            compid = compid + "_persTable";
            $("#" + id).each(function () {
                if ($(this).find('thead').length > 0 && $(this).find('th').length > 0) {
                    // Clone <thead>
                    var $w = $(window),
                            $t = $(this),
                            $thead = $t.find('thead').clone(),
                            $col = $t.find('thead, tbody').clone();
                    // Add class, remove margins, reset width and wrap table
                    $t
                            .addClass('sticky-enabled')
                            .css({
                                margin: 0,
                                width: '100%'
//                            });
                            }).wrap('<div class="sticky-wrap" />');
                    if ($t.hasClass('overflow-y')) {
                        $t.removeClass('overflow-y').parent().addClass('overflow-y');
                    }
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
                        $stickyCol.find('th').css('width', $t.find('thead th').width());
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
                                            top: $stickyWrap.scrollTop()
                                        });
//                                $(".visionHeaderMain").css("position", "absolute");
                                    } else {
                                        // When top of wrapping parent is in view
                                        $stickyHead.add($stickyInsct).css({
                                            opacity: 0,
                                            top: 0
                                        });
//                                $(".visionHeaderMain").css("position", "fixed");
                                    }
                                } else {
                                    // If it is not overflowing (basic layout)
                                    // Position sticky header based on viewport scrollTop
                                    if ($w.scrollTop() > $t.offset().top && $w.scrollTop() < $t.offset().top + $t.outerHeight() - allowance) {
                                        // When top of viewport is in the table itself
                                        $stickyHead.add($stickyInsct).css({
                                            opacity: 1,
                                            top: $w.scrollTop() - $t.offset().top
                                        });
//                                $(".visionHeaderMain").css("position", "absolute");

                                    } else {
                                        // When top of viewport is above or below table
                                        $stickyHead.add($stickyInsct).css({
                                            opacity: 0,
                                            top: 0
                                        });
//                                $(".visionHeaderMain").css("position", "fixed");

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
                    $t
                            .load(setWidths)
                            .parent('.sticky-wrap')
                            .scroll($.throttle(250, function () {
                                setWidths();
                                repositionStickyHead();
                                repositionStickyCol();
                            }));
                    $w
                            .load(setWidths)
                            .resize($.debounce(250, function () {
                                setWidths();
                                repositionStickyHead();
                                repositionStickyCol();
                            }))
                            .scroll($.throttle(250, repositionStickyHead));
                }
            });
        }
    } catch (e) {
    }
}
//GridPersnelizeData Code End//
function getrefreshSearchSpirNo(gridId, operationName) {
    showLoader();
    var selectBatchIdsList = "";
    $.ajax({
        type: "POST",
        url: 'getBatchIdList',
        dataType: 'json',
        data: {
            tableName: 'STG_ESPIR'
        },
        traditional: true,
        cache: false,
        success: function (response) {
            if (response != null) {
                var batchIdList = response['batchIdList'];
                selectBatchIdsList = "<select id= 'selectBatchId'>"
                $.each(batchIdList, function (i) {
                    selectBatchIdsList += "<option>" + this + "</option>";
                })
            }
            selectBatchIdsList += "</select>";
            var body = "<div> Select Spir No : " + selectBatchIdsList + "</div>";
            stopLoader();
            $("#dialog").html(body);
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Select Spir No'] != null ? labelObject['Select Spir No'] : 'Select Spir No'),
                modal: true,
                width: 400,
                height: 150,
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                        click: function () {
                            var batchId = $("#selectBatchId").val();
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");

                            refreshSearchSelectedSpirNo(gridId, operationName, batchId);
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
function refreshSearchSelectedSpirNo(gridId, operationName, batchId) {
    showLoader();
    $.ajax({
        type: "POST",
        url: 'ispirSearchRefresh',
        data: {
            'gridId': gridId,
            'operationName': operationName,
            'batchId': batchId
        },
        traditional: true,
        cache: false,
        success: function (result) {
            stopLoader();
//           showErrorPopupMessage("Description Generated for Selected SPIR No:"+batchId+" Records", "Message")
            showErrorPopupMessage(result, "Message")
        }
    });
}
// char validation//
function checkSplCharsRegex(regexVal, inputVal, id, ommitStartIndex, ommitEndIndex) {
    var regxArr = regexVal.split("");
    var startIndexArr = ommitStartIndex.split("");
    var endIndexArr = ommitEndIndex.split("");
    if ($("#" + id).parent().find(".splCharValidateClass").length > 0) {
        $("#" + id).parent().find(".splCharValidateClass").remove(".splCharValidateClass");
    }
    var splChar = regxArr.find((splChar) => inputVal.includes(splChar));
    var startIndexValidate = startIndexArr.find((startIndexChar) => inputVal.slice(0, 1).includes(startIndexChar));
    var endIndexValidate = endIndexArr.find((endIndexChar) => inputVal.slice(-1).includes(endIndexChar));
    if (splChar) {
        showValidationError(id, regexVal, "Invalid character used");
    } else if (startIndexValidate) {
        showValidationError(id, ommitStartIndex, "Invalid character at start");
    } else if (endIndexValidate) {
        showValidationError(id, ommitStartIndex, "Invalid character at end");
    }

    function showValidationError(id, regexVal, text) {
        console.log("splChar not allowed");
        regexVal = regexVal.replace("<", "&lt;");
        regexVal = regexVal.replace(">", "&gt;");
        var $errorElement = $(
                "<span class = 'splCharValidateClass' title =" +
                regexVal +
                ">" + text + "</span>"
                );
        $("#" + id)
                .parent()
                .append($errorElement[0]);
    }
}
function gridInterfaceCalling(gridId, operationName)
{
    showLoader();
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
                    stopLoader();
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
            stopLoader();
        }
    }
}
function punchoutCalling(pounchOutArray) {
    try {
        showLoader();
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var message = labelObject['Do you want to process selected Record(s) for Puchout.'] != null ? labelObject['Do you want to process selected Record(s) for Puchout.'] : "Do you want to process selected Record(s) for Puchout.";
        if (pounchOutArray != null && pounchOutArray.length > 0)
        {
            try {
                const element = document.getElementById("PunchOutForm");
                element.remove();
            } catch (es) {
            }

            var ociHookUrl = $('#OCI_HOOK_URL').val();
            var sessionId = $("#sessionId").val();
//ociHookUrl = (ociHookUrl.split('webgui/'))[1];
//console.log('ociHookUrl'+ociHookUrl);
//ociHookUrl = "https://s422.pilogcloud.com:8100/sap/bc/gui/sap/its/webgui?JSESSIONID="+sessionId+"";
//ociHookUrl = "https://s422.pilogcloud.com:8100/sap(cz1TSUQlM2FBTk9OJTNhUElQTC1TQVBTNDIyX1MyMl8wMCUzYW9YN3drUG80V1kwbG5TTFlHYUh3QTFFdmVRdng5VDZLSm50T056N0ctQVRU)/bc/gui/sap/its/webgui/batch/json";
            var ociReturntarget = $('#OCI_RETURNTARGET').val();
            var form = document.createElement("form");
            form.setAttribute("id", "PunchOutForm");
            if (ociHookUrl != null && ociHookUrl != 'null'
                    && ociHookUrl != '' && ociHookUrl != undefined && ociHookUrl != 'undefined') {
                if (ociHookUrl.indexOf("sapevent:post") != -1 || ociHookUrl.indexOf("SAPEVENT:POST") != -1
                        || ociHookUrl.indexOf("sapevent") != -1) {
                    ociHookUrl = ociHookUrl.replaceAll(":", "%3A");
                    ociHookUrl = ociHookUrl.replace("/", "%2F");
                }

                form.setAttribute("action", ociHookUrl);
//form.setAttribute("action", "SAPEVENT:POST");    
            } else {
                form.setAttribute("action", "file%3A%2F%2F%2FSAPEVENT%3APOST");
            }

            if (ociReturntarget != null && ociReturntarget != 'null'
                    && ociReturntarget != '' && ociReturntarget != undefined && ociReturntarget != 'undefined') {
                form.setAttribute("target", ociReturntarget);
            } else {
//        form.setAttribute("target", "_self");
                form.setAttribute("target", "_parent");
//        form.setAttribute("target", "_top");    
            }

            form.setAttribute("method", "POST");
            form.setAttribute("enctype", "text/html");
            form.setAttribute("acceptcharset", "UTF-8");



            var field1 = document.createElement("input");
            field1.setAttribute("type", "hidden");
            field1.setAttribute("name", "~target");
            field1.setAttribute("value", "_top");
            form.appendChild(field1);

            var field2 = document.createElement("input");
            field2.setAttribute("type", "hidden");
            field2.setAttribute("name", "~OkCode");
            field2.setAttribute("value", "ADDI");
            form.appendChild(field2);

            var field3 = document.createElement("input");
            field3.setAttribute("type", "hidden");
            field3.setAttribute("name", "~caller");
            field3.setAttribute("value", "CTLG");
            form.appendChild(field3);

            var elem = document.createElement("div");
            var pounchOutArrayjsonstring = JSON.stringify(pounchOutArray)
            console.log('pounchOutArray:::::::' + pounchOutArrayjsonstring);
            for (var i = 0; i < pounchOutArray.length; i++) {
                var cnt = 0;
                cnt = i + 1;
                var pounchOutArrayObj = pounchOutArray[i];

                $.each(pounchOutArrayObj, function (key, val) {

                    if (key != null && key == 'MATNR' && pounchOutArrayObj[key] != null && pounchOutArrayObj[key] != 'null'
                            && pounchOutArrayObj[key] != '' && pounchOutArrayObj[key] != undefined && pounchOutArrayObj[key] != 'undefined')
                    {
                        let field = document.createElement("input");
                        field.setAttribute("type", "hidden");
                        field.setAttribute("name", "NEW_ITEM-MATNR[" + cnt + "]");
                        field.setAttribute("value", pounchOutArrayObj[key]);
                        elem.appendChild(field);
                    }


                    if (key != null && key == 'DESCRIPTION' && pounchOutArrayObj[key] != null && pounchOutArrayObj[key] != 'null'
                            && pounchOutArrayObj[key] != '' && pounchOutArrayObj[key] != undefined && pounchOutArrayObj[key] != 'undefined')
                    {
                        let field = document.createElement("input");
                        field.setAttribute("type", "hidden");
                        field.setAttribute("name", "NEW_ITEM-DESCRIPTION[" + cnt + "]");
                        field.setAttribute("value", pounchOutArrayObj[key]);
                        elem.appendChild(field);
                    }

                    if (key != null && key == 'UNIT' && pounchOutArrayObj[key] != null && pounchOutArrayObj[key] != 'null'
                            && pounchOutArrayObj[key] != '' && pounchOutArrayObj[key] != undefined && pounchOutArrayObj[key] != 'undefined')
                    {
                        let field = document.createElement("input");
                        field.setAttribute("type", "hidden");
                        field.setAttribute("name", "NEW_ITEM-UNIT[" + cnt + "]");
                        field.setAttribute("value", pounchOutArrayObj[key]);
                        elem.appendChild(field);
                    }

                    if (key != null && key == 'MATGROUP' && pounchOutArrayObj[key] != null && pounchOutArrayObj[key] != 'null'
                            && pounchOutArrayObj[key] != '' && pounchOutArrayObj[key] != undefined && pounchOutArrayObj[key] != 'undefined')
                    {
                        let field = document.createElement("input");
                        field.setAttribute("type", "hidden");
                        field.setAttribute("name", "NEW_ITEM-MATGROUP[" + cnt + "]");
                        field.setAttribute("value", pounchOutArrayObj[key]);
                        elem.appendChild(field);
                    }
//    var punOutValue = "<div id='punchOutForm' value='punchOutForm'></div>"
//    +"<input type='hidden' name='NEW_ITEM-MATGROUP["+cnt+"]' value='"+pounchOutArrayObj[key]+"'>";

//      if (key!= null && key == 'PRICE' && pounchOutArrayObj[key] != null && pounchOutArrayObj[key] != 'null'
//       && pounchOutArrayObj[key] != ''  && pounchOutArrayObj[key] != undefined && pounchOutArrayObj[key] != 'undefined')
//   {
//   let field = document.createElement("input");
//   field.setAttribute("type", "hidden");
//   field.setAttribute("name", "NEW_ITEM-PRICE["+cnt+"]");
//   field.setAttribute("value", pounchOutArrayObj[key]);
//    elem.appendChild(field);  
//    }
//     if (key!= null && key == 'CURRENCY' && pounchOutArrayObj[key] != null && pounchOutArrayObj[key] != 'null'
//      && pounchOutArrayObj[key] != ''  && pounchOutArrayObj[key] != undefined && pounchOutArrayObj[key] != 'undefined')
//   {
//   let field = document.createElement("input");
//   field.setAttribute("type", "hidden");
//   field.setAttribute("name", "NEW_ITEM-CURRENCY["+cnt+"]");
//   field.setAttribute("value", pounchOutArrayObj[key]);
//    elem.appendChild(field);  
//    }
//    
                    if (key != null && key == 'PRICEUNIT' && pounchOutArrayObj[key] != null && pounchOutArrayObj[key] != 'null'
                            && pounchOutArrayObj[key] != '' && pounchOutArrayObj[key] != undefined && pounchOutArrayObj[key] != 'undefined')
                    {
                        let field = document.createElement("input");
                        field.setAttribute("type", "hidden");
                        field.setAttribute("name", "NEW_ITEM-PRICEUNIT[" + cnt + "]");
                        field.setAttribute("value", pounchOutArrayObj[key]);
                        elem.appendChild(field);
                    }

                    if (key != null && key == 'QUANTITY' && pounchOutArrayObj[key] != null && pounchOutArrayObj[key] != 'null'
                            && pounchOutArrayObj[key] != '' && pounchOutArrayObj[key] != undefined && pounchOutArrayObj[key] != 'undefined')
                    {
                        let field = document.createElement("input");
                        field.setAttribute("type", "hidden");
                        field.setAttribute("name", "NEW_ITEM-QUANTITY[" + cnt + "]");
                        field.setAttribute("value", pounchOutArrayObj[key]);
                        elem.appendChild(field);
                    }


                });
            }
            form.append(elem);
            try {
                element = document.getElementById("PunchOutForm");
                element.remove();
            } catch (es) {
            }
            document.body.appendChild(form);

            $("#dialog").html(message + ".");
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : "Message"),
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            document.body.appendChild(form);

                            try {
//$("#PunchOutForm").submit();  
                                form.submit();
                                var sucessmessage = labelObject['Selected Record(s) Submitted Successfully.'] != null ? labelObject['Selected Record(s) Submitted Successfully.'] : "Selected Record(s) Submitted Successfully.";
                                $("#dialog1").html(sucessmessage + ".");
                                $("#dialog1").dialog({resizable: false,
                                    title: (labelObject['Message'] != null ? labelObject['Message'] : "Message"),
                                    modal: true,
                                    height: 120,
                                    minWidth: 300,
                                    maxWidth: 'auto',
                                    fluid: true,
                                    buttons: [{
                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
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

                            } catch (p) {

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


            stopLoader();

        } else {

            var message = labelObject['Please Select any Record to process the request'] != null ? labelObject['Please Select any Record to process the request'] : "Please Select any Record to process the request";

            $("#dialog").html(message + ".");
            $("#dialog").dialog({resizable: false,
                title: (labelObject['Message'] != null ? labelObject['Message'] : "Message"),
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
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
    } catch (e) {
        stopLoader();
    }
    stopLoader();
}
function getJSessionId() {
    var jsId = document.cookie.match(/JSESSIONID=[^;]+/);
    if (jsId != null) {
        if (jsId instanceof Array)
            jsId = jsId[0].substring(11);
        else
            jsId = jsId.substring(11);
    }
    return jsId;
}
$(document).ready(function () {
    // Increment the idle time counter every minute.
    var sessionTimeoutValue = sessionStorage.getItem("sessionTimeoutValue");
    if (sessionTimeoutValue && $(".se-pre-con").is(":hidden")) {//100523
        sessionStorage.setItem("idleTime", 0);
        var idleInterval = setInterval(updateSessionTimeout, 60000); // 1 minute
        $(this).mousemove(function (e) {
            sessionStorage.setItem("idleTime", 0);
        });
        $(this).keypress(function (e) {
            sessionStorage.setItem("idleTime", 0);
        });
    }
});
function updateSessionTimeout() {
    if ($(".se-pre-con").is(":visible")) {//100523
        sessionStorage.setItem("idleTime", 0);
        return;
    }
    var idleTime = +sessionStorage.getItem("idleTime");
    var sessionTimeoutValue = +sessionStorage.getItem("sessionTimeoutValue");
    sessionStorage.setItem("idleTime", idleTime + 1);
    if (+sessionStorage.getItem("idleTime") > sessionTimeoutValue) { // 1 minutes
        $("#dialog3").empty();
        if ($("#dialog3").hasClass('ui-dialog-content')) {
            $("#dialog3").dialog("destroy");
        }
        $("#dialog3").html("Continue the current session?");
        $("#dialog3").dialog({resizable: false,
            title: "Session timed out", //Message
            modal: true,
            maxHeight: 200,
            maxWidth: 500,
            fluid: true,
            buttons: [{
                    text: "Yes",
                    class: "dialogyes",
                    click: function () {
                        $("#dialog3").html("");
                        $(this).dialog("destroy");
                        sessionStorage.setItem("idleTime", 0);
                    }
                },
                {
                    text: "No",
                    class: "dialogno",
                    click: function () {
                        sessionLogout();
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
                sessionStorage.setItem("idleTime", 0);
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }

        });
    }
}
function getTreeNestedGrid(treeId, divId, treewidth) {
    $("#" + divId).html("");
    showLoader();
    $.ajax({
        type: "POST",
        url: 'getGenericDxpHtmlTree',
        data: {
            'treeId': treeId,
        },
        traditional: true,
        cache: false,
        success: function (treeObject) {
            $("#" + divId).html(treeObject['divid']);
            $("#tabmainDivId").val(divId);
            $("#" + divId).append("<input type='hidden' id='htmltreewidth' value='" + treewidth + "'/>");
//                $("#DxpParamSplitterDotsClass").show();
            if (treeObject != null && !jQuery.isEmptyObject(treeObject)) {
                $("#expanderDesc").html(treeObject['treeDesc']);//treeDesc
                var extTreeParams = {};
                extTreeParams = treeObject['extTreeParams'];
                $("#selectedFldValue").val((treeObject['treeColumnObj'])[0]['HL_FLD_NAME']);
                var selectedColumnData = (treeObject['treeColumnObj'])[0];
                if (extTreeParams != null && !jQuery.isEmptyObject(extTreeParams)) {
                    $("#extTreeParams").val(JSON.stringify(extTreeParams));
                }
                var treewd = '20%';
                var treegridwd = '20%';
                try {
                    if (treewidth != null && treewidth != '' && treewidth != undefined && treewidth != 'undefined') {
                        var treewd = "" + parseInt(treewidth) + "%";
                        var treegridwd = "" + (100 - parseInt(treewidth)) + "%";
                    }
                } catch (e) {

                }
                try {
                    $('#firsthtmlDxpSplitterTree').jqxSplitter(
                            {
                                width: '100%',
//                    height: '709px',
                                height: '100%',
                                orientation: 'vertical',
                                resizable: false,
                                panels: [{size: treewd, min: 150, resizable: true}, {size: treegridwd, min: 150, resizable: true}]});
                } catch (e) {

                }



                $("#treeGridDiv").hide();
                if (treeObject != null) {
                    $("#jqxExpander").jqxPanel({width: '100%', height: '100%', theme: 'energyblue'});
                    var treeConfigObj = treeObject['treeConfigObj'];
                    var sourceItems = treeConfigObj['source'];
                    var treeInitParamObj = treeObject['treeInitParamObj'];
                    var columnsObj = treeObject['treeColumnObj'];
                    var columnsObjstr = JSON.stringify(columnsObj);
                    $("#selectedcolumObject").val(columnsObjstr);
                    var treehtmlstr = "";
                    $('#jqxhtmlTree').html("");
                    showLoader();
                    $.ajax({
                        type: "post",
                        traditional: true,
                        dataType: 'json',
                        url: "getDxpHtmlTreeDataOpt",
                        cache: false,
                        data: {
                            parentkey: '',
                            treeId: treeId,
                            level: 0,
                            extTreeParams: extTreeParams,
                            columnsObj: JSON.stringify(columnsObj)
                        },
                        success: function (data, status, xhr) {

//                            var sourceItems = JSON.parse(data);
                            for (var i = 0; i < data.length; i++) {
                                var obj = data [i];
                                treehtmlstr = obj['description'];
//                                var str = "<button class='product-name' id='product-name'" + obj['description'] + "' data-columnsObjstr = '" + columnsObjstr + "' data-hiLevelvalue = '" + obj['description'] + "'>" + obj['label'] + "</button>";
//                                treehtmlstr += str;
                            }
                            $('#jqxhtmlTree').html(treehtmlstr);
                            stopLoader();
                        },
                        error: function (e) {
                            console.log(e);
                            sessionTimeout(e);
                            stopLoader();
                        }
                    });



//                    console.log(treehtmlstr);
//                       $('.htmltreeproductname').click(function () {
//		 if(!$(this).hasClass("active")){
//                    $(this).removeClass("active");
//                }else{
//                    $(this).toggleClass("active");
//                }
//            
//            $(this).next('ul.subtree').toggle();
//        });

                    $('#dxphtmltreeSearchResult').on('keyup', function () {
                        var searchVal = $(this).val();
                        htmltreeSearchResultsHandler(searchVal);

                    });
                }
            }
        }
    });

}
function htmltreeSearchResultsHandler(searchValue)
{
    try
    {
        let searchVallength = searchValue.length;
        var searchVal = $('#dxphtmltreeSearchResult').val();
        var filterItems = $('[data-hiLevelvaluefilter-item]');
        var ulfilterItems = $('[data-ulfilter-item]');
        if (searchVallength > 2) {
            showLoader();
            var searchVal = $('#dxphtmltreeSearchResult').val();
            var filterItems = $('[data-hiLevelvaluefilter-item]');
            var ulfilterItems = $('[data-ulfilter-item]');
            if (searchVal != '') {
                filterItems.removeClass('htmltreeproductnamehidden');
                filterItems.addClass('htmltreeproductnamehidden');
                ulfilterItems.removeClass('htmlsubtree');
                ulfilterItems.addClass('htmlsubtree');
                var filteredItems = $('[data-filter-name*="' + searchVal.toUpperCase() + '"]');
                $('[data-filter-name*="' + searchVal.toUpperCase() + '"]').each(function () {

//                $(filteredItem).foreach(function () {
                    let datasegement = $(this).attr("data-segement");
                    let datafamily = $(this).attr("data-family");
                    let dataclass = $(this).attr("data-class");
                    let datacomodity = $(this).attr("data-comodity");
                    let dataactiveSubtree = $(this).attr("data-activeSubtree");
                    if (datasegement != null && datasegement != '' && datasegement != undefined && datasegement != 'undefined') {
                        $("#htmlsubtree" + datasegement).removeClass('htmlsubtree');
                        $("#htmltreeproductname" + datasegement).removeClass('htmltreeproductnamehidden');
                    }
                    if (datafamily != null && datafamily != '' && datafamily != undefined && datafamily != 'undefined') {
                        $("#htmlsubtree" + datafamily).removeClass('htmlsubtree');
                        $("#htmltreeproductname" + datafamily).removeClass('htmltreeproductnamehidden');
                    }
                    if (dataclass != null && dataclass != '' && dataclass != undefined && dataclass != 'undefined') {
                        $("#htmlsubtree" + dataclass).removeClass('htmlsubtree');
                        $("#htmltreeproductname" + dataclass).removeClass('htmltreeproductnamehidden');
                    }
                    if (datacomodity != null && datacomodity != '' && datacomodity != undefined && datacomodity != 'undefined') {
                        $("#htmlsubtree" + datacomodity).removeClass('htmlsubtree');
                        $("#htmltreeproductname" + datacomodity).removeClass('htmltreeproductnamehidden');
                    }

                    if (dataactiveSubtree != null && dataactiveSubtree != '' && dataactiveSubtree != undefined
                            && dataactiveSubtree != 'undefined') {

                        try {
                            var dataactiveSubtreearray = dataactiveSubtree.split(',');
                            if (dataactiveSubtreearray != null && dataactiveSubtreearray.length > 0) {

                                var subTreeValue = '';
                                for (var a = 0; a < dataactiveSubtreearray.length; a++) {
                                    subTreeValue = subTreeValue + dataactiveSubtreearray[a];
                                    var dataactiveSubtreeId = "#htmlsubtree" + subTreeValue;
                                    var activeSubtreeId = '#htmltreeproductname' + subTreeValue;
                                    try {
                                        $(dataactiveSubtreeId).removeClass('htmlsubtree');

                                        $(activeSubtreeId).removeClass('htmltreeproductnamehidden');
                                    } catch (ev) {
                                    }

                                }

                            }
                        } catch (ey) {
                        }
                    }


                });
                $('[data-filter-name*="' + searchVal.toUpperCase() + '"]').removeClass('htmltreeproductnamehidden');
                $('[data-ulfilter-name*="' + searchVal.toUpperCase() + '"]').removeClass('htmlsubtree');
                $("#treeGridDiv").html("");
            } else {
                filterItems.removeClass('htmltreeproductnamehidden');
                $("#treeGridDiv").html("");
                filterItems.removeClass('active');
                ulfilterItems.removeClass('htmlsubtree');
                ulfilterItems.addClass('htmlsubtree');
            }
        } else {
            filterItems.removeClass('htmltreeproductnamehidden');
            $("#treeGridDiv").html("");
            filterItems.removeClass('active');
            ulfilterItems.removeClass('htmlsubtree');
            ulfilterItems.addClass('htmlsubtree');
        }


        stopLoader();
    } catch (exception) {
        stopLoader();
    }
}

function  getHtmlSelectedTree() {
    try
    {
        let divId = $('#tabmainDivId').val();
        var treeId = $("#htmltreeSelectBox").val();
        var treetext = $("#htmltreeSelectBox").text();
        try {
            var treewidth = $("#htmltreewidth").val();
        } catch (e) {

        }
        console.log($("#htmltreeSelectBox").text());
        getTreeNestedGrid(treeId, divId, treewidth);
        $("#htmltreeSelectBox").val(treeId);

    } catch (exception) {
    }
}
function gethtmlTreesubComponent(id, treewidth)
{

//    let a = $("#" + id).attr("id");
    var treeDataArr = [];
    let b = $('#selectedcolumObject').val();
    let highlevelValue = $("#" + id).attr("data-hiLevelvalue");
    let dataparentnode = $("#" + id).attr("data-parentnode");
    let datafilterColName = $("#" + id).attr("data-filterColName");
    let datasegement = $("#" + id).attr("data-segement");
    let datafamily = $("#" + id).attr("data-family");
    let dataclass = $("#" + id).attr("data-class");
    let datacomodity = $("#" + id).attr("data-comodity");
    let datafollowupcompType = $("#" + id).attr("data-followupcompType");
    let datafollowupcompId = $("#" + id).attr("data-followupcompId");
    let dataactiveSubtree = $("#" + id).attr("data-activeSubtree");
    let datasubcompFlag = $("#" + id).attr("data-subcompFlag");
    $("#currentUNSPSCDataSegment").val(highlevelValue);
    console.log(b);
    console.log(highlevelValue);
    console.log(datafilterColName);
    console.log(dataparentnode);
    console.log(datasegement);
    console.log(datafamily);
    console.log(dataclass);
    console.log(datacomodity);
    console.log(datafollowupcompType);
    console.log(datafollowupcompId);
    console.log(dataactiveSubtree);

    var treewd = '20%';
    var treegridwd = '80%';
    try {
        if (treewidth != null && treewidth != '' && treewidth != undefined && treewidth != 'undefined') {
            var treewd = "" + parseInt(treewidth) + "%";
            var treegridwd = "" + (100 - parseInt(treewidth)) + "%";
        }
    } catch (e) {

    }


    var filterItems = $('[data-hiLevelvaluefilter-item]');
    filterItems.removeClass('active');
    var ulfilterItems = $('[data-ulfilter-item]');
    ulfilterItems.removeClass('htmlsubtree');
    ulfilterItems.addClass('htmlsubtree');

    if ($("#" + id).hasClass('active')) {
        $("#" + id).removeClass('active');
//                                $('#' + b).hide();
        $("#treeGridDiv").hide();
        $("#treeGridDiv").html("");
        $("#" + id).next('ul.htmlsubtree').toggle();
    } else {
        $("#" + id).toggleClass('active');
//        $("#" + id).next('ul.htmlsubtree').toggle();
//                                $('#' + b).show();
        $("#treeGridDiv").html("");
        $("#treeGridDiv").show();

        if (datasegement != null && datasegement != '' && datasegement != undefined && datasegement != 'undefined') {
//         $("#htmlsubtree" + datasegement).next('ul.htmlsubtree').toggle();

            $("#htmlsubtree" + datasegement).removeClass('htmlsubtree');
            var datasegementId = 'htmltreeproductname' + datasegement;
            if (id != datasegementId) {
                $("#" + datasegementId).toggleClass('active');
            }

        }
        if (datafamily != null && datafamily != '' && datafamily != undefined && datafamily != 'undefined') {
//         $("#htmltreeproductname" + datafamily).next('ul.htmlsubtree').toggle();   
            $("#htmlsubtree" + datafamily).removeClass('htmlsubtree');
            var datafamilyId = 'htmltreeproductname' + datafamily;
            if (id != datafamilyId) {
                $("#" + datafamilyId).toggleClass('active');
            }
        }
        if (dataclass != null && dataclass != '' && dataclass != undefined && dataclass != 'undefined') {
//         $("#htmltreeproductname" + dataclass).next('ul.htmlsubtree').toggle();   
            $("#htmlsubtree" + dataclass).removeClass('htmlsubtree');
            var dataclassId = 'htmltreeproductname' + dataclass;
            if (id != dataclassId) {
                $("#" + dataclassId).toggleClass('active');
            }
        }
        if (datacomodity != null && datacomodity != '' && datacomodity != undefined && datacomodity != 'undefined') {
//         $("#htmltreeproductname" + dataclass).next('ul.htmlsubtree').toggle();   
            $("#htmlsubtree" + datacomodity).removeClass('htmlsubtree');
            var datacomodityId = 'htmltreeproductname' + datacomodity;
            if (id != datacomodityId) {
                $("#" + datacomodityId).toggleClass('active');
            }
        }
        if (dataactiveSubtree != null && dataactiveSubtree != '' && dataactiveSubtree != undefined && dataactiveSubtree != 'undefined') {

            try {
                var dataactiveSubtreearray = dataactiveSubtree.split(',');
                if (dataactiveSubtreearray != null && dataactiveSubtreearray.length > 0) {

                    var subTreeValue = '';
                    for (var a = 0; a < dataactiveSubtreearray.length; a++) {
                        subTreeValue = subTreeValue + dataactiveSubtreearray[a];
                        var dataactiveSubtreeId = "#htmlsubtree" + subTreeValue;
                        try {
                            $(dataactiveSubtreeId).removeClass('htmlsubtree');
                            var activeSubtreeId = 'htmltreeproductname' + subTreeValue;
                            if (id != activeSubtreeId) {
                                $("#" + activeSubtreeId).toggleClass('active');
                            } else {
                                var liproductnameId = "htmltreeproductname" + subTreeValue;
                                var childLIfilteredItems = $('[id*="' + liproductnameId + '"]');
                                childLIfilteredItems.removeClass('htmltreeproductnamehidden');
                            }


                        } catch (ev) {
                        }

                    }

                }
            } catch (ey) {
            }
        }

        try {
            var selectedColumnstrObj = JSON.parse(b);
            var selectedColumnObj = selectedColumnstrObj["0"];
            var treeIntParams = selectedColumnObj["TREE_INIT_PARAMS"];
            var uuu_gridCondColumn = treeIntParams ["uuu_gridCondColumn"];
        } catch (e) {

        }



        if (selectedColumnObj != null && !jQuery.isEmptyObject(selectedColumnObj) && datasubcompFlag != 'N') {
            var paramArray = [];
            var compType = selectedColumnObj['FOLLOWUP_COMP_TYPE'];
            var compId = selectedColumnObj['FOLLOWUP_COMP_ID'];
            if (datafollowupcompType != null && datafollowupcompType != '' && datafollowupcompType != undefined && datafollowupcompType != 'undefined') {
                var compType = datafollowupcompType;
            }
            if (datafollowupcompId != null && datafollowupcompId != '' && datafollowupcompId != undefined && datafollowupcompId != 'undefined') {
                var compId = datafollowupcompId;
            }


            if (compId != null && compId != '' && compType != null && compType != ''
                    && compId != undefined && compId != 'undefined'
                    && compType != undefined && compType != 'undefined') {

                if (uuu_gridCondColumn != null && uuu_gridCondColumn != '') {
                    if (uuu_gridCondColumn.indexOf(",") > -1) {
                        var gridCondColumnarray = uuu_gridCondColumn.split(',');
                        if (gridCondColumnarray != null && gridCondColumnarray.length > 0) {

                            for (var j = 0; j < gridCondColumnarray.length; j++) {
                                var colName = gridCondColumnarray[j];
                                var value = '';
                                var datacol = '';
//                                    try {
//                                        value = $("#" + id).attr("data-" || colName);
//                                    } catch (ev) {
//                                        value = '';
//                                    }
                                try {
                                    datacol = "data-" + colName;
                                    value = $("#" + id).attr(datacol);
                                    if (value == null || value == '' || value == undefined || value == 'undefined') {
                                        datacol = "data-" + colName.toLowerCase();
                                        value = $("#" + id).attr(datacol);
                                    }
                                    if (value == null || value == '' || value == undefined || value == 'undefined') {
                                        datacol = "data-" + colName.toUpperCase();
                                        value = $("#" + id).attr(datacol);
                                    }

                                } catch (ev) {
                                    value = '';
                                }
                                if (value != null && value != '' && value != 'undefined' && value != undefined) {
                                    var paramObj = {};
                                    paramObj.column = "UPPER(" + colName + ")";
                                    paramObj.value = value
                                    paramObj.operator = "EQUALS";
                                    paramObj.symbol = "Euqals";
                                    paramArray.push(paramObj);
                                }

                            }
                        }
                    } else {
                        var paramObj = {};
                        paramObj.column = "UPPER(" + uuu_gridCondColumn + ")";
                        paramObj.value = highlevelValue;
                        paramObj.operator = "EQUALS";
                        paramObj.symbol = "Euqals";
                        paramArray.push(paramObj);
                    }
                }


                if (datafilterColName != null && datafilterColName != '') {
                    if (datafilterColName.indexOf(",") > -1) {
                        var datafilterColNamearray = datafilterColName.split(',');
                        if (datafilterColNamearray != null && datafilterColNamearray.length > 0) {

                            for (var j = 0; j < datafilterColNamearray.length; j++) {
                                var colName = datafilterColNamearray[j];
                                var value = '';
                                var datacol = '';
                                try {
                                    datacol = "data-" + colName;
                                    value = $("#" + id).attr(datacol);
                                    if (value == null || value == '' || value == undefined || value == 'undefined') {
                                        datacol = "data-" + colName.toLowerCase();
                                        value = $("#" + id).attr(datacol);
                                    }
                                    if (value == null || value == '' || value == undefined || value == 'undefined') {
                                        datacol = "data-" + colName.toUpperCase();
                                        value = $("#" + id).attr(datacol);
                                    }

                                } catch (ev) {
                                    value = '';
                                }
                                if (value != null && value != '' && value != 'undefined' && value != undefined) {
                                    var paramObj = {};
                                    paramObj.column = "UPPER(" + colName + ")";
                                    paramObj.value = value
                                    paramObj.operator = "EQUALS";
                                    paramObj.symbol = "Euqals";
                                    paramArray.push(paramObj);
                                }

                            }
                        }
                    } else {
                        var paramObj = {};
                        paramObj.column = "UPPER(" + datafilterColName + ")";
                        paramObj.value = highlevelValue;
                        paramObj.operator = "EQUALS";
                        paramObj.symbol = "Euqals";
                        paramArray.push(paramObj);
                    }
                }



                try {
                    $('#firsthtmlDxpSplitterTree').jqxSplitter({
                        panels: [{size: treewd, min: 150, resizable: true}, {size: treegridwd, min: 150, resizable: true}]
                    });
                    $('#firsthtmlDxpSplitterTree').jqxSplitter({resizable: false});
                } catch (e) {

                }



                if (compType == 'CLUSTER') {// grids,tabs,form ,cluster
//                    var clusterDiv = '<div id="clusterSplitter">'
//                            + '<div class="visionMasterDetailPanelTop" id="levelTabId"></div>'
//                            + '<div class="visionMasterDetailPanelBottom" id="level1TabId"></div>'
//                            + '</div>';
//                    $("#treeGridDiv").html(clusterDiv);
                    var roleId = $("#rolehid").val();
                    var domain = $("#currentDomain").val();
                    var uuu_pprUnspscParamFalg = treeIntParams ["uuu_pprUnspscParamFalg"];
                    var dataParamObj = {};
                    var dataParamArray = [];
                    if (uuu_pprUnspscParamFalg != null && uuu_pprUnspscParamFalg != '' && uuu_pprUnspscParamFalg != ""
                            && uuu_pprUnspscParamFalg == 'Y') {
                        dataParamObj['value'] = highlevelValue;
                        dataParamObj['column'] = "UNSPSC_CODE";
                        dataParamObj['operator'] = '=';
                        dataParamArray.push(dataParamObj);
                        getcluster(compId, roleId, domain, "N", dataParamArray, "treeGridDiv");
                    } else {
                        getcluster(compId, roleId, domain, "N", paramArray, "treeGridDiv");
                    }

                } else if (compType == 'TREE') {
                    var childTreeDiv = ' <div id="jqxChildExpander">'
                            + ' <div id="expanderChildDesc" class="visionTreeDescription"></div>'
                            + ' <div style="border: none;" id="jqxChildTreeDropdown" class="visionTreeDropDown" ></div>'
                            + ' <div style="overflow: hidden;" id="jqxChildTreeDiv">'
                            + '<div style="border: none;" id="jqxChildTree"></div>'
                            + '</div>'
                            + '</div>';
                    $("#treeGridDiv").html(childTreeDiv);
                    fetchChildTree('jqxTree', selectedColumnObj, highlevelValue, 0);
                } else if (compType == 'DECOMPTREE') {
                    getHtmlDecompTree(compId, paramArray, 'treeGridDiv', highlevelValue, datafilterColName, id, dataactiveSubtree);
                } else if (compType == 'NESTEDGRID') {

                    var gridId = compId;
                    getnestedGrid(gridId, paramArray, 0, 'treeGridDiv');
                    try {
                        $('#firsthtmlDxpSplitterTree').on('collapsed', function (event) {
                            refreshGrid(gridId);
                        });
                        $('#firsthtmlDxpSplitterTree').on('expanded', function (event) {
                            try {
                                $('#firsthtmlDxpSplitterTree').jqxSplitter({
                                    panels: [{size: treewd, min: 150, resizable: true}, {size: treegridwd, min: 150, resizable: true}]
                                });
                                $('#firsthtmlDxpSplitterTree').jqxSplitter({resizable: false});
                            } catch (e) {

                            }
                            refreshGrid(gridId);
                        });
                    } catch (e) {

                    }

                } else if (compType == 'CLASSIFICATION_SEARCH' || compType == 'CLASSIFICATION_SEARCH_NESTEDGRID'
                        || compType == 'CLASSIFICATION_SEARCH_GRID') {

                    var accdTabs = "<div class=\"classificationMainWrapper\"><ul class=\"accordion\">"
                            + "<li>"
                            + "<h5 class=\"accordion-trigger\">Templates</h5>"
                            + "</li>"
                            + "<div id='visionClassficationTemplateIds' class=\"accordion-contents accordionGridResults\"></div>"
                            + "<li>"
                            + "<h5 class=\"accordion-trigger\">Results</h5>"
                            + "</li>"
//                            + "<div id='visionClassficationGrid' class=\"accordion-contents\"></div>"
                            + "</ul></div>";
                    $("#treeGridDiv").append(accdTabs);
                    try {
                        $('#firsthtmlDxpSplitterTree').on('collapsed', function (event) {
                            refreshGrid('searchResults');
                        });
                        $('#firsthtmlDxpSplitterTree').on('expanded', function (event) {
                            try {
                                $('#firsthtmlDxpSplitterTree').jqxSplitter({
                                    panels: [{size: treewd, min: 150, resizable: true}, {size: treegridwd, min: 150, resizable: true}]
                                });
                                $('#firsthtmlDxpSplitterTree').jqxSplitter({resizable: false});
                            } catch (e) {

                            }
                            refreshGrid('searchResults');
                        });
                    } catch (e) {

                    }
//                    try {
//            $('#firsthtmlDxpSplitterTree').on('resize', function (event) {
//            refreshGrid('searchResults');
//        });
//        } catch (e) {
//
//        }
//                   
                    try {
                        $('#firsthtmlDxpSplitterTree').on('collapsed', function (event) {
                            refreshGrid(gridId);
                        });
                        $('#firsthtmlDxpSplitterTree').on('expanded', function (event) {
                            try {
                                $('#firsthtmlDxpSplitterTree').jqxSplitter({
                                    panels: [{size: treewd, min: 150, resizable: true}, {size: treegridwd, min: 150, resizable: true}]
                                });
                                $('#firsthtmlDxpSplitterTree').jqxSplitter({resizable: false});
                            } catch (e) {

                            }
                            refreshGrid(gridId);
                        });
                    } catch (e) {

                    }
//                     try {
//            $('#firsthtmlDxpSplitterTree').on('resize', function (event) {
//            refreshGrid(gridId);
//        });
//        } catch (e) {
//
//        }
                    $('.accordion').on('click', '.accordion-trigger', function (e) {
                        e.preventDefault();
                        $('.accordion-contents:visible').slideUp(300);
                        $('.accordion-contents').show();
                        $(this)
                                .next('.accordion-contents')
                                .not(':animated')
                                .slideToggle(300);
                        if ($(this).hasClass("active")) {
                            $(this).removeClass("active");
                        } else {
                            $(this).addClass("active");
                        }
                    });
                    var isParentFlag = 'Y';
                    if (compType == 'CLASSIFICATION_SEARCH_GRID') {
                        isParentFlag = 'N'
                    }
                    var gridId = compId;
                    getnestedGrid(gridId, paramArray, 0, "visionClassficationTemplateIds", "CLASSIFICATION_SEARCH", isParentFlag);

                }

            }

        }
    }

}
function getnestedGrid(gridId, paramObj, level, parentDiv, gridtype, isParent) {
    try {
        showLoader();
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'json',
            url: "getCloudGrid",
            cache: false,
            data: {
                gridId: gridId,
                roleId: $("#rolehid").val(),
            },
            success: function (response) {
                console.log("response:::" + response);
                if (response != null && response != '') {
//                gridConfig(response, "", paramObj, gridId);
                    if (isParent != null && isParent != '' && isParent != 'undefined' && isParent != undefined) {

                    } else {
                        isParent = 'Y'
                    }

                    getNestedGridConfig(response, gridId, isParent, paramObj, "", "", "", parentDiv, gridtype)
                }
            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }
        });

    } catch (exception) {
        stopLoader();
    }
    stopLoader();
}
function getHtmlDecompTree(compId, paramArray, treeDiv, level1Val, datafilterColName, mainNodeId, highLevelFieldVal) {
    showLoader();
    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        url: 'getHtmlDecompTree',
        traditional: true,
        cache: false,
        async: true,
        data: {
            treeId: compId,
            paramArray: paramArray,
            level1Val: level1Val,
            datafilterColName: datafilterColName,
            mainNodeId: mainNodeId,
            highLevelFieldVal: highLevelFieldVal

        },
        success: function (data, textStatus, jqXHR) {
            stopLoader();
//            var treeDataArr = [];
            $('#dxpDecomposeTreeClass').remove();
            $('#dxpDecomposeTreeMainDiv').remove();
            $("#treeGridDiv").html(data.html);
            $(".colorAdderPopup").on('input', function (event) {//27422
                var color = $(this).val();
                $(this).val(color);
                var depthLevel = $(this).attr("level");
                changeTreeColorPoppup(color, depthLevel); //27422
            });
            var globalTreeData = {};
            globalTreeData['tree'] = data['TreeBoxObj'];
            $('#collapseChildrenPopup').click(function () {
                dropDownLevel();
                if (globalTreeData) {
                    $(".svgContainer").remove();
                    gridDeTreeBoxes('', globalTreeData['tree']);
                } else {
                    $(".svgContainer").remove();
                    gridDeTreeBoxes('', globalTreeData['tree']);
                }

            });
            var exportBoxTreeJson = {};
            exportBoxTreeJson['data'] = data['TreeBoxObj'];
            popUpNestedObjToArray(exportBoxTreeJson['data'], false);
            createTableFromArray(treeDataArr); //10522
            gridDeTreeBoxes('', data['TreeBoxObj']);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            stopLoader();
        }
    });
}
function getNestedGridConfig(gridResultObj, selectedGridId, isParent, paramObj, parentGridId, relationId, selectedrowdata, parentDiv, gridtype, inFormFlag) {
    let checkbox = $("#cb-switch");
    var fioriThemeCheck = checkbox.is(":checked");
    try {

        if (fioriThemeCheck) {

            if ($("#" + gridResultObj['gridId']).length != 0) {
                try {
                    $("#" + gridResultObj['gridId']).jqxGrid('destroy');
                    if (gridResultObj.nestedFlag != null && gridResultObj.nestedFlag != undefined && gridResultObj.nestedFlag == 'Y') {
                        if (gridResultObj.nestedParentElement != null && gridResultObj.nestedParentElement != undefined) {
                            var details = $($(gridResultObj.nestedParentElement).children()[0]);
                            details.html("<div sytyle = 'background-color: white;overflow-y: scroll;overflow-x: scroll;' id='" + gridResultObj['gridId'] + "'></div>");

                        }
                    } else {
                        $("#" + gridResultObj['gridId']).remove();
                    }
                } catch (error) {
                    console.log(error)
                    $("#" + gridResultObj['gridId']).remove();
                }
            }


            if (isParent == "Y") {
                if (parentDiv != null && parentDiv != '') {
//        $("#" + parentDiv).html("<div id='" + gridResultObj['gridId'] + "'></div>");
                    var gridId = gridResultObj['gridId'];
                    $("#" + parentDiv).html("<div id ='gridUI5Filter_" + gridId + "'></div><div id='container' class='visionGenericTabContainer'><div class='visionGenericTabsOpeartions'><div class='d-flex align-items-center'><div id='basketNameValId' class='materialBasketClass'></div><div class=\"fiorirightgridControls\"><div class=\"fioriGridSearchwrap\" title = \"Show/Hide Filter\" onclick=\"toggleUI5FilterGridForm('" + gridId + "')\"><img src=\"images/iDXPUI5Settings.svg\" title = \"Show/Hide Filter\" width=\"16px\"/></div></div></div></div></div></div><div id='" + gridId + "'></div>");
                    $("#gridUI5Filter_" + gridId).css("display", "none");
                    try {
                        getUI5FilterGridForm(gridId, null, 'GRID', gridResultObj);
                    } catch (e) {

                    }
                } else {
                    if (parentDiv != null && parentDiv != '') {
                        $("#" + parentDiv).html("<div id='" + gridResultObj['gridId'] + "'></div>");
                    }
                }

            } else {
                if (parentDiv != null && parentDiv != '') {
                    $("#" + parentDiv).html("<div id='" + gridResultObj['gridId'] + "'></div>");
                }
            }


        } else {
            if (parentDiv != null && parentDiv != '') {
                $("#" + parentDiv).html("<div id='" + gridResultObj['gridId'] + "'></div>");
            }
        }
    } catch (e) {
    }
//    try {
//        if (parentDiv != null && parentDiv != '') {
//            $("#" + parentDiv).html("<div id='" + gridResultObj['gridId'] + "'></div>");
//        }
//    } catch (e) {
//    }
    try {
        showLoader();
        try {
            $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'cells');
            $('#' + gridResultObj['gridId']).jqxGrid('clearfilters');
        } catch (e) {

        }
        if (gridResultObj != null) {
            //need to assign all hidden fields like hrefColumn,linkedColumns,stripValue,imageColumn,imageTable,imageTableColumn
            var hrefObj = {}; //hrefObj
            hrefObj = gridResultObj['hrefObj'];


            var gridInitParamObj = {}; //gridInitParamObj
            gridInitParamObj = gridResultObj['gridInitParamObj'];

            if (gridInitParamObj != null && !jQuery.isEmptyObject(gridInitParamObj)) {
                $("#" + gridResultObj['gridId']).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
            }
            if (gridResultObj != null && !jQuery.isEmptyObject(gridResultObj)) {
                $("#" + gridResultObj['gridId']).attr("data-gridResultObj", JSON.stringify(gridResultObj));
            }


            if (gridInitParamObj['uuu_exportRangeCount'] != null && gridInitParamObj['uuu_exportRangeCount'] != '') {
                $("#ssExportCount").val(gridInitParamObj['uuu_exportRangeCount']);
            }

            var columnInitParamObj = {};
            columnInitParamObj = gridResultObj['columnInitParamsObj'];


            var dropDownListData = gridResultObj.dropDownListData;
            if (gridResultObj != null && gridResultObj.datafields) {

//                                var imagerenderer = function (row, datafield, value) {
//
//                                    return '<img src="" id="ind' + row + '" class="indimage"><label id="imgLabel' + row + '" class="indimage">Show Image</label>';
//                                };
            }
            var dataFeilds = gridResultObj.datafields;
            var nestedGridRelId = gridResultObj.nestedGridRelId;
            var nestedGridId = gridResultObj.nestedGridId;
            var localData = gridResultObj.data;
            var formId = gridResultObj.formId;
            var panelId = gridResultObj.panelId;
            var gridOperation = gridResultObj.gridOperation;

            var gridPropObj = {};
            gridPropObj = gridResultObj.gridPropObj;
            var hiddenObj = gridResultObj['hiddenObj'];

            if (inFormFlag != 'Y')
            {
                $("#hrefColumn").val(hrefObj['hrefColumn'] != null ? hrefObj['hrefColumn'] : "");
//                        $("#hrefColumn").val(hrefObj['hrefColumn']);
                $("#linkedColumns").val(hrefObj['linkedColumns']);
                $("#stripValue").val(hrefObj['stripValue']);
                $("#imageColumn").val(hrefObj['imageColumn']);
                $("#imageTable").val(hrefObj['imageTable']);
                $("#imageTableColumn").val(hrefObj['imageTableColumn']);
                $("#defaultValues").val(gridResultObj['defaultValues']);
                $("#columnInitParams").val(JSON.stringify(columnInitParamObj));
                $("#processClassAndMethod").val(gridInitParamObj['uuu_processClassAndMethod'] != null ? gridInitParamObj['uuu_processClassAndMethod'] : "");
                var batchInd = gridInitParamObj["uuu_BatchInd"];
                $("#massColumnHide").val(gridInitParamObj['massColumnHide']);
                $("#massValidateComment").val(gridInitParamObj['uuu_ValidateComment']);
                $("#batchIndicator").val(batchInd);
                var tableName = gridResultObj['tableName'];
                $("#tableName").val(tableName);
                var barCodeColumnName = gridInitParamObj['uuu_BarCodeColumn'];
                $("#barCodeColumnName").val(barCodeColumnName);
                $('#formId').val(formId);
                $('#panelId').val(panelId);
                if (hiddenObj != null) {
                    $("#hiddenObj").val(JSON.stringify(hiddenObj));
                }
            }
            if (gridPropObj != null) {
                fieldsArray.length = 0;
                fieldsArray = gridResultObj.columns;
                gridPropObj.columns = gridResultObj.columns;
                var headerTooltipRenderer = function (element) {
                    $(element).parent().jqxTooltip({position: 'mouse',
                        position: 'bottom-right',
                        showArrow: false, content: $(element).text()});
                }

                var dataSheetRendered = function (element) {
                    // $(element).html("<div class='show_detail' ></div>");
                    $(element).addClass("show_detail");
                    $(element).parent().jqxTooltip({position: 'mouse',
                        position: 'bottom-right',
                        showArrow: false,
                        content: "Data Sheet"});
                    //content: $(element).text()});
                }
                var renderToolbar = gridPropObj.renderToolbar;
                // console.log("renderToolbar::::"+renderToolbar);
                //  alert("renderToolbar:::"+renderToolbar);
                gridPropObj.renderToolbar = eval('(' + renderToolbar + ')');
                //      var defaultTabName = $("#defaultTabName").val();

                var nestedGrids = new Array();
//            var details = new Array();
                // create nested grid.

                if (isParent == "Y") {

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
                                fetchNestedMultiChildTabs(gridResultObj['gridId'], index, 'GRID', childId, record)
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
                                        var nestedparamobj = [];
                                        $("#currentSelectGridIndex").val(index);
                                        if (fioriThemeCheck) {
                                            nestedresponse.nestedFlag = 'Y';
                                            nestedresponse.nestedParentElement = parentElement;

                                        }
                                        getNestedGridConfig(nestedresponse, nestedGridId, "N", nestedparamobj, gridResultObj['gridId'], nestedGridRelId, record)

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


                var htmlContentRender = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                    var data = "<xmp>" + value + "</xmp>";
                    var element = $(data);
                    element.addClass('visionSearchWrapDescrDiv');
                    var gridRowHeight = $("#" + gridResultObj['gridId']).jqxGrid('rowsheight');
                    if (gridRowHeight != null && parseInt(gridRowHeight) <= 50) {
                        element.css('overflow-y', 'scroll');//overflow-y:scroll !important;
                    }
                    if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                        var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                        if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                            var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                            if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                    rowData != null
                                    && rowData[uuu_TitleValueColumn] != null
                                    && rowData[uuu_TitleValueColumn] != ''
                                    ) {//REQUIRED_FLAG
                                element.removeAttr('title');
                                element.attr('title', rowData[uuu_TitleValueColumn]);
                            }
                        }

                    }
                    return element[0].outerHTML;
                };
                var urlRender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var element = $(defaulthtml);
                            element.attr("onclick", "openURLInTab('" + value + "')");
                            element.addClass("visionSearchUrlLink");
                            return element[0].outerHTML;

                        };
                var buttonRanderer
                        = function (row, columnfield, value, defaulthtml, columnproperties) {
                            return "<button onclick=suggestedVendorsList('" + gridResultObj['gridId'] + "','" + row + "') style='width: 120px;'>Suggested Vendors</button><button onclick=vendorsList('" + gridResultObj['gridId'] + "','" + row + "') style='width: 120px;'>Vendors List</button>";
                        };
//                var imageRender
//                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
//                            if (value != "" && value != null)
//                            {
//                                return  "<img  title='View the attachment Logo' style='cursor:pointer;'"
//                                        + " src='" + value + "' class='imageStyle'  id='dtlul_" + row + "'" + "'"
//                                        + " onmouseover=imageMouseHover('dtlul_" + row + "') onmouseout=imageMouseOut() >";
//                            }
//                        };

                var imageRender = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                    if (value != "" && value != null)
                    {
                        var title = 'Image'
                        var titleprefix = 'View'
                        if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                            var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                            if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj))
                            {
                                var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                var uuu_TitleprefixValue = selectedColumnInitParamObj['uuu_TitleprefixValue'];
                                if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                        rowData != null && rowData[uuu_TitleValueColumn] != null
                                        && rowData[uuu_TitleValueColumn] != '') {
                                    title = rowData[uuu_TitleValueColumn];
                                }

                                if (uuu_TitleprefixValue != null && uuu_TitleprefixValue != '') {
                                    titleprefix = uuu_TitleprefixValue
                                }
                            }
                        }

                        var titleImage = titleprefix + ' ' + title;
                        if (labelObject[titleImage] != null && labelObject[titleImage] != '' && labelObject[titleImage] != undefined) {
                            return  "<img  title='" + labelObject[titleImage] != null ? labelObject[titleImage] : titleImage + "' style='cursor:pointer;'"
                                    + " src='" + value + "' class='imageStyle'  id='dtlul_" + row + "'" + "'"
                                    + " onmouseover=templeteMouseOver('dtlul_" + row + "') onmouseout=templeteMouseOut() >";
                        } else
                        {
                            return  "<img  title='" + titleImage + "' style='cursor:pointer;'"
                                    + " src='" + value + "' class='imageStyle'  id='dtlul_" + row + "'" + "'"
                                    + " onmouseover=templeteMouseOver('dtlul_" + row + "') onmouseout=templeteMouseOut() >";
                        }


                    }
                };



                var descriptorImageRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {

                    var gridId = gridResultObj['gridId'];
                    return  "<img title='Click to Create a Record' style='cursor:pointer;'  src='" + value + "' class='imageStyle visionTemplete' data-count='" + $("#" + gridResultObj['gridId']).jqxGrid('pagesize') + "' id='dtlul_"
                            + row + "' onmouseover=templeteMouseOver('dtlul_" + row + "'," + $("#" + gridResultObj['gridId']).jqxGrid('pagesize') + ") "
                            + " onmouseout=templeteMouseOut('dtlul_" + row + "'," + $("#" + gridResultObj['gridId']).jqxGrid("pagesize") + ")>";
                };

                var descrender
                        = function (row, columnfield, value, defaulthtml, columnproperties) {
                            //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                            console.log("hiiiii");
                            return '<div style="height:' + $('#' + gridResultObj['gridId']).jqxGrid('rowsheight') + 'px" class="ta_style" rows=1 >' + value + '</div>';
                        };
                var definitionrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var def = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, "definition");
                    return "<div style='padding-left:5px;padding-top:2px;white-space: initial;overflow-y: scroll;overflow-x: hidden;height: 32px;width:539px; overflow-y: scroll;border:none;color:inherit' >" + def + "</div>";
                };
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
                var classTermRender
                        = function (row, columnfield, value, defaulthtml, columnproperties) {
                            //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                            console.log("hiiiii");
                            return '<div style="cursor:pointer;" class="vend_style">' + value + '</div>';
                        };

                var viewParentRenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var codifcode = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, 'CODE');
                    var conceptid = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, 'CONCEPT_ID');
                    console.log("viewParentRenderer:::" + codifcode);

                    return "<div class='visionGridDataAlign' style='text-align:center;cursor:pointer;'><input id='fetchtree" + codifcode + "' type='checkbox' style='width:15px;  height: 17px; margin-top: 5px;' onclick=onChecked(" + codifcode + ",'fetchtree" + codifcode + "','" + conceptid + "') > </div>";
                };
                var descriptorrenderer = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var descriptorClass = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, "TERM");
                    //  console.log("Descriptor Class:" + descriptorClass);
                    var descriptorClass1 = descriptorClass.replace(/\s/g, "+");
                    var conceptid = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, "CONCEPT_ID");
                    console.log("conceptid:descriptorrenderer:" + conceptid);
                    return "<div class='visionGridDataAlign' style='text-align: left;text-decoration: underline;cursor:pointer' onclick=fetchDescriptorMaterials('" + descriptorClass1 + "','" + conceptid + "')>" + descriptorClass + " </div>";
                };

                var descoptrender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var element = $(defaulthtml);
                            element.addClass('visionSearchWrapDescrDiv');
                            var gridRowHeight = $('#' + gridResultObj['gridId']).jqxGrid('rowsheight');
                            if (gridRowHeight != null && parseInt(gridRowHeight) <= 50) {
//                                         element.css('overflow', 'scroll');
                                element.css('overflow-y', 'scroll');//overflow-y:scroll !important;

                            }
                            if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                    var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                    if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                            rowData != null
                                            && rowData[uuu_TitleValueColumn] != null
                                            && rowData[uuu_TitleValueColumn] != ''
                                            ) {//REQUIRED_FLAG
                                        element.removeAttr('title');
                                        element.attr('title', rowData[uuu_TitleValueColumn]);
                                    }
                                }

                            }
//                                            element.css('overflow', 'scroll');
                            return element[0].outerHTML;
                        };
                var replaceRenderer
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var element = $(defaulthtml);
                            if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                    var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                    if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                            rowData != null
                                            && rowData[uuu_TitleValueColumn] != null
                                            && rowData[uuu_TitleValueColumn] != ''
                                            ) {//REQUIRED_FLAG
                                        element.removeAttr('title');
                                        element.attr('title', rowData[uuu_TitleValueColumn]);
                                    }
                                }

                            }
                            return element[0].outerHTML;
                        };

                var descrenderListWise = function (row, columnfield, value, defaulthtml, columnproperties) {

                    return '<div style="white-space: pre-line;">' + value + '</div>';
                };

                var coldataWarpText = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var colwidth = $('#' + gridResultObj['gridId']).jqxGrid('getcolumnproperty', columnfield, 'width');
                    var scrollPosition = $('#' + gridResultObj['gridId']).jqxGrid('scrollposition');
                    $('#idsearchwraptempContainerdiv').css("width", colwidth);
                    $('#idsearchwraptempContainerdiv').html(value);
                    var textHeight = $("#idsearchwraptempContainerdiv").outerHeight(true);
                    var textHeight1 = textHeight / 1.5;
                    try {
                        $('#idsearchwraptempContainerdiv').html("");
                    } catch (w) {
                        $('#idsearchwraptempContainerdiv').html("");
                    }
                    var gridrowsheight1 = $('#' + gridResultObj['gridId']).jqxGrid('getrowheight', row);
                    var gridrowsheight = $('#' + gridResultObj['gridId']).jqxGrid('rowsheight');
                    if (gridrowsheight1 != null && gridrowsheight1 != ''
                            && gridrowsheight1 != 'undefined'
                            && gridrowsheight1 != undefined
                            ) {

                    } else {
                        gridrowsheight1 = gridrowsheight;
                    }

                    if (textHeight1 > gridrowsheight1) {
                        $('#' + gridResultObj['gridId']).jqxGrid('setrowheight', row, textHeight / 1.5);
                    }
                    $('#' + gridResultObj['gridId']).jqxGrid('scrolloffset', scrollPosition.top, scrollPosition.left);

                    var uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                    var divClass = "jqx-grid-cell-left-align";
                    if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                        var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                        if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                            uuu_columnstyle = selectedColumnInitParamObj['uuu_columnstyle'];
                            if (uuu_columnstyle != null && uuu_columnstyle != ''
                                    && uuu_columnstyle != 'undefined'
                                    && uuu_columnstyle != undefined
                                    ) {

                            } else {
                                uuu_columnstyle = "white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;";
                            }

                            var cellalignClass = cellalignColParamObj['uuu_Colcellsalign'];

                            if (cellalignClass != null && cellalignClass != undefined && cellalignClass != '' && cellalignClass == 'center') {
                                divClass = "jqx-grid-cell-middle-align";
                            } else if (cellalignClass != null && cellalignClass != undefined && cellalignClass != '' && cellalignClass != 'center') {
                                divClass = cellalignClass;
                            } else {
                                divClass = "jqx-grid-cell-left-align";
                            }
                        }


                    }
//                   return '<div style="white-space: pre-line;word-wrap: break-word;margin-top: 8.5px;">' + value + '</div>';
                    return '<div class="' + divClass + '" style="' + uuu_columnstyle + '">' + value + '</div>';
                };


                var charColorRender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var element = $(defaulthtml);
                            if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                    var mandColumn = selectedColumnInitParamObj['uuu_CharMandColumn'];
                                    if (!(mandColumn != null && mandColumn != '')) {
                                        mandColumn = 'REQUIRED_FLAG';
                                    }
                                    if (rowData != null && (rowData[mandColumn] == 'Y'
                                            || rowData[mandColumn] == 'M'
                                            )) {//REQUIRED_FLAG
                                        element.addClass('visionSearchCharRedDiv');

                                    }
                                    var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                    if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                            rowData != null
                                            && rowData[uuu_TitleValueColumn] != null
                                            && rowData[uuu_TitleValueColumn] != ''
                                            ) {//REQUIRED_FLAG
                                        element.removeAttr('title');
                                        element.attr('title', rowData[uuu_TitleValueColumn]);
                                    }
                                }

                            }
                            return element[0].outerHTML;
                        };
                var charValueColorRender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var element = $(defaulthtml);

                            if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                    var mandColumn = selectedColumnInitParamObj['uuu_CharValueMandColumn'];
                                    if (!(mandColumn != null && mandColumn != '')) {
                                        mandColumn = 'REQUIRED_FLAG';
                                    }
                                    if (rowData != null && (rowData[mandColumn] == 'Y'
                                            || rowData[mandColumn] == 'M'
                                            )) {//REQUIRED_FLAG
                                        element.addClass('visionSearchCharValRedDiv');
                                    }
                                    var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                    if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                            rowData != null
                                            && rowData[uuu_TitleValueColumn] != null
                                            && rowData[uuu_TitleValueColumn] != ''
                                            ) {//REQUIRED_FLAG
                                        element.removeAttr('title');
                                        element.attr('title', rowData[uuu_TitleValueColumn]);
                                    }
                                }

                            }
                            return element[0].outerHTML;
                        };
                var xmlRenderer
                        = function (row, columnfield, value, defaulthtml, columnproperties) {
                            console.log("xmlRenderer::");
                            if (value != "" && value != null)
                            {
                                return  "<img src ='images/xml_icon.png' style='cursor:pointer; width: 20px; height: 20px;position: fixed; title='Click to view the Payload' style='cursor:pointer;' onclick=viewXml('" + gridResultObj['gridId'] + "','" + row + "','" + columnfield + "','" + gridResultObj['tableName'] + "')  class='imageStyle visionTemplete'  id='xmldtlul_" + row + "' >";
                            }
                        };
                var titleRender
                        = function (row, columnfield, value, defaulthtml, columnproperties, rowData) {
                            var element = $(defaulthtml);
                            if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                                var selectedColumnInitParamObj = columnInitParamObj[columnfield];
                                if (selectedColumnInitParamObj != null && !jQuery.isEmptyObject(selectedColumnInitParamObj)) {
                                    var uuu_TitleValueColumn = selectedColumnInitParamObj['uuu_TitleValueColumn'];
                                    if (uuu_TitleValueColumn != null && uuu_TitleValueColumn != '' &&
                                            rowData != null
                                            && rowData[uuu_TitleValueColumn] != null
                                            && rowData[uuu_TitleValueColumn] != ''
                                            ) {//REQUIRED_FLAG
                                        element.removeAttr('title');
                                        element.attr('title', rowData[uuu_TitleValueColumn]);
                                    }
                                }

                            }
                            return element[0].outerHTML;
                        };
                var documentRanderer
                        = function (row, columnfield, value, defaulthtml, columnproperties) {
                            //return '<textarea readonly class="ta_style" rows=1 >' + value + '</textarea>';
                            console.log("hiiiii");
                            return '<div onclick=viewDocument("' + value + '") style="cursor:pointer;">View Document</div>';
                        };

                var editable = gridPropObj.editable;
                var gridDrpdownRenderor = function (row, columnfield, value, defaulthtml, columnproperties) {
                    var cellValue = $("#" + gridResultObj['gridId']).jqxGrid('getcellvalue', row, columnfield);
                    var viewType = "GRID-VIEW";
                    var ddwData = gridResultObj.dropDowndData;
                    var ddwObj = ddwData[columnfield];
                    var dependencyparams = ddwObj.dependencyparams;
                    if (editable) {
                        //    return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png'  onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                        return "<div class='visionGridDataAlign'><div class='visionGridDataAlignInfo'>" + cellValue + "</div><div class='visionGridDataAlignImage'><img src='images/iDXPUI5SearchDropdown.png' id='dd" + gridResultObj['gridId'] + columnfield + "' onclick=visionDropdown('" + ddwObj.ddwId.trim() + "','" + dependencyparams + "','" + viewType + "','" + ddwObj.gridId + "','" + columnfield + "','" + row + "')></div></div>";
                    } else
                    {
                        return "<div class='visionGridDataAlign'>" + cellValue + "</div>";
                    }

                };

                if (editable) {
                    for (var i = 0; i < dataFeilds.length; i++) {
                        if (typeof dataFeilds[i].values != "undefined" && dataFeilds[i].values != null) {
                            var listboxData = eval(dataFeilds[i].values.source);
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
                            gridResultObj.datafields[i].values.source = listBoxAdapter.records;
                            // gridResultObj.datafields[i].values.source = listBoxAdapter.records;
                        }
                    }
                }
                for (var i = 0; i < gridPropObj.columns.length; i++) {
                    if (gridPropObj.columns [i].cellsrenderer != null) {
                        gridPropObj.columns [i].cellsrenderer = eval(gridPropObj.columns [i].cellsrenderer);
                    }
                    if (gridPropObj.columns[i].rendered != null) {
                        gridPropObj.columns[i].rendered = eval('(' + gridPropObj.columns[i].rendered + ')');
                    }

                    if (gridPropObj.columns[i].createeditor != null) {
                        gridPropObj.columns[i].createeditor = eval('(' + gridPropObj.columns[i].createeditor + ')');
                    }
                    if (gridPropObj.columns[i].initeditor != null) {
                        gridPropObj.columns[i].initeditor = eval('(' + gridPropObj.columns[i].initeditor + ')');
                    }
                    if (gridPropObj.columns[i].geteditorvalue != null) {
                        gridPropObj.columns[i].geteditorvalue = eval('(' + gridPropObj.columns[i].geteditorvalue + ')');
                    }
                    if (gridPropObj.columns[i].cellvaluechanging != null) {
                        gridPropObj.columns[i].cellvaluechanging = eval('(' + gridPropObj.columns[i].cellvaluechanging + ')');
                    }
                    if (gridPropObj.columns[i].cellbeginedit != null) {
                        gridPropObj.columns[i].cellbeginedit = eval('(' + gridPropObj.columns[i].cellbeginedit + ')');
                    }
                }



                //   gridPropObj.rendergridrows=function(obj) {return obj.data;};   
                // for work flow start
                if (gridPropObj.rendergridrows != null && gridPropObj.rendergridrows != "") {

                    gridPropObj.rendergridrows = eval('(' + gridPropObj.rendergridrows + ')');
                }

//                var paramArray = [];
//
//                paramArray.push(paramObj);

//                var subTabId = "jqxTabs";
                console.log("before dataFeilds" + JSON.stringify(dataFeilds));
                var data = {
                    gridId: gridResultObj['gridId'],
                    colsArray: JSON.stringify(gridResultObj['colsArray']),
                    tableName: gridResultObj['tableName'],
                    paramArray: JSON.stringify(paramObj),
                    gridInitParamObj: JSON.stringify(gridInitParamObj),
                    columnInitParamObj: JSON.stringify(columnInitParamObj),
                    processClassAndMethod: $("#processClassAndMethod").val(),
                    selectedRowData: JSON.stringify(selectedrowdata),
                    relationId: relationId,
                    masterGridId: parentGridId
                };
                var source =
                        {
                            type: 'POST',
//                                                async: false,
                            datatype: "json",
                            datafields: dataFeilds,
                            data: data,
                            url: 'genericClusterTabsData',
                            cache: false,
                            root: 'Rows',
                            processdata: function (data) {
                                data.multiSortColsArray = ($("#" + gridResultObj['gridId'] + "_sort_columns").val() != null
                                        ? $("#" + gridResultObj['gridId'] + "_sort_columns").val() : "");
                                if (gridInitParamObj != null
                                        && !jQuery.isEmptyObject(gridInitParamObj)
                                        && gridInitParamObj['uuu_FilterGridFormPopup'] == 'Y') {//
                                    data.paramArray = ($("#" + gridResultObj['gridId'] + "_filter_columns").val() != null
                                            ? $("#" + gridResultObj['gridId'] + "_filter_columns").val() : "");
                                }
                                var crmresult = $("#crmresult").val();
                                if (crmresult != null && crmresult != '') {
                                    var columnName = $("#crmresult").attr("data-search-columnname");
                                    var crmParamArray = [];
                                    if (data.paramArray != null && data.paramArray != '') {
                                        crmParamArray = JSON.parse(data.paramArray);
                                    }
                                    var crpParamObj = {};
                                    crpParamObj['value'] = crmresult;
                                    crpParamObj['column'] = columnName;
                                    crpParamObj['operator'] = 'LIKE';
                                    crpParamObj['rangeFlag'] = 'N'
                                    crpParamObj['minvalue'] = "";
                                    crpParamObj['maxvalue'] = "";
                                    crmParamArray.push(crpParamObj);
                                    if (crmParamArray != null && crmParamArray.length != 0) {
                                        data.paramArray = JSON.stringify(crmParamArray);
                                    }

                                }
                            },
                            beforeSend: function (xhr) {
                                xhr.setRequestHeader("X-XSRF-TOKEN", $('meta[name="csrf-token"]').attr('content'));
                                showLoader();
                            }, loadError: function (xhr, status, error) {
                                stopLoader();
                                // throw new Error(error);
                            }, loadComplete: function (data)
                            {
                                stopLoader();
                                try {
                                    if (gridInitParamObj != null
                                            && !jQuery.isEmptyObject(gridInitParamObj)
                                            && gridInitParamObj['uuu_GridPagesCountFlag'] == 'Y')
                                    {
                                        if (data[0] != null) {
                                            showgridPagesCount(gridResultObj['gridId'], 'Y', data[0].TotalRows)
                                        }
                                    }
                                } catch (e) {
                                }
                            },
                            beforeprocessing: function (data) {
                                //showLoader();//1
//                                                    try{
//                                                     $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
//                                                 }
//                                                 catch(e){}

                                //   alert("beforeprocessing::::" + JSON.stringify(data));
                                if (data[0] != null) {
                                    //  alert(data.JSONObjectList[0].TotalRows);
                                    source.totalrecords = data[0].TotalRows;
                                    $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
//                                                        $("#excelExport").removeAttr("disabled");
                                    $("#drop" + gridResultObj['gridId']).removeAttr("disabled");
                                    $("#drop" + gridResultObj['gridId']).removeAttr("opacity");
                                    $("#export" + gridResultObj['gridId']).removeAttr("disabled");
                                    $("#export" + gridResultObj['gridId']).removeAttr("opacity");

//                                                        $("#drop").attr("disabled", false);
                                    // $("#export").attr("disabled", false);
//                                                        $("#export").attr("disabled", false);
                                    console.log("data[0] != null:::: $(\"#drop\").attr(\"disabled\":::::" + $("#drop" + gridResultObj['gridId']).attr("disabled"));
                                    console.log("data[0] != null::: $(\"#export\").attr(\"disabled\":::::" + $("#export" + gridResultObj['gridId']).attr("disabled"));
                                } else {

                                    source.totalrecords = 0;
                                    $("#excelExport" + gridResultObj['gridId']).attr("disabled", true);
                                    $("#approvebutt" + gridResultObj['gridId']).attr("disabled", true);
                                    $("#drop" + gridResultObj['gridId']).attr("disabled", true);
                                    $("#drop" + gridResultObj['gridId']).css("opacity", "0.5");
                                    $("#export" + gridResultObj['gridId']).attr("disabled", true);
                                    $("#export" + gridResultObj['gridId']).css("opacity", "0.5");
                                }

//                                        var selectedItemTitle = $('#cloudTabs').jqxTabs('getTitleAt', $('#cloudTabs').jqxTabs('selectedItem'));
                                try {
//                                                    $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                } catch (e) {
                                }


                                stopLoader();
                            },
                            sort: function ()
                            {
//                                                $("#" + gridResultObj['gridId'] + "_sort_columns").remove();
                                $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'sort');
                                try {
                                    $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                } catch (e) {
                                }
                                stopLoader();
                            },

                            filter: function () {

                                $("#" + gridResultObj['gridId']).jqxGrid('updatebounddata', 'filter');
                                try {
                                    $("#" + gridResultObj['gridId']).jqxGrid('clearselection');
                                } catch (e) {
                                }
                                stopLoader();
                            }


                        };
                var dataAdapter = new $.jqx.dataAdapter(source);
                gridPropObj.source = dataAdapter;
                if (isParent == "Y") {
                    gridPropObj.rowdetails = true;
                    gridPropObj.rowdetailstemplate = {
                        rowdetails: "<div style='margin-top:0.2%;border:1px solid #0078d4' class='visionSearchRowDtl'></div>",
//                        rowdetailsheight: 32
                        rowdetailsheight: 400,
//                        rowdetailshidden: true
                    };
                    gridPropObj.initrowdetails = initrowdetails;

                    //add new rowclick function start nexted grid
                    $('#' + gridResultObj['gridId']).on('rowclick', function (event) {
                        var args = event.args;
                        var boundIndex = args.rowindex;
                        var previousIndex = $("#currentSelectGridIndex").val();
                        // Hide the previous row details and remove the corresponding elements
                        if (boundIndex !== +previousIndex) {
                            $('#' + gridResultObj['gridId']).jqxGrid('hiderowdetails', previousIndex);
                        } else {
                            if ($("#" + gridResultObj['gridId'] + "_TAB").length > 0) {
                                $("#" + gridResultObj['gridId'] + "_TAB").jqxTabs("destroy");
                            }
                        }
                        // Check if the current row details are already visible
                        var details = args.row.rowdetails;
                        var parentElement = $(event.target).closest('.jqx-grid-cell').parent();
                        // Use initrowdetails to initialize or update the row details
                        initrowdetails(boundIndex, parentElement, gridResultObj['gridId'], args.row.bounddata);
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
                            gridPropObj.groupable = true;
                            $("#" + gridResultObj['gridId']).attr("data-gridgroupable", "Y");
                            if (groupbyGridStr != null && groupbyGridStr != undefined && groupbyGridStr != '' &&
                                    groupbyGridStr.indexOf(":") > -1) {
                                var groupColsArray = (groupbyGridStr.split(":")[1]).split(",");
                                if (groupColsArray != null && groupColsArray.length > 0) {
                                    gridPropObj.groups = groupColsArray;
                                    $("#" + gridResultObj['gridId']).attr("data-gridgroupColsArray", JSON.stringify(groupColsArray));
                                    gridPropObj.pageable = false;
                                }

                            }
                            $("#" + gridResultObj['gridId']).on('groupschanged', function (event) {
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
                                        gridPropObj.pageable = false;
                                        $("#" + gridResultObj['gridId']).jqxGrid({pageable: false});
                                    } else {
                                        var pageable = gridPropObj.pageable;
                                        gridPropObj.pageable = true;
                                        $("#" + gridResultObj['gridId']).jqxGrid({pageable: pageable});
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

                var srsRegiterButton = gridInitParamObj['registerButtonFlag'];
                var hideToolBar = gridInitParamObj['uuu_hideToolBar'];
                // var hideToolBar = gridInitParamObj['hideToolBar'];
//                                var srsRegiterButton = gridInitParamObj['srsRegisterFlag'];
                if ((srsRegiterButton != null && srsRegiterButton != undefined && srsRegiterButton == 'Y')
                        || (hideToolBar != null && hideToolBar != undefined && hideToolBar == 'Y'))
                {
                    gridPropObj.showtoolbar = true;
                    console.log("iam in if condition in toolbar 846" + srsRegiterButton);
                } else
                {
                    gridPropObj.showtoolbar = false;
                    console.log("iam in else condition in toolbar 852" + srsRegiterButton);
                }
                // gridPropObj.showtoolbar = false;
                gridPropObj.rowdetails = true;
//                gridPropObj.scrollmode = 'local';
                gridPropObj.rendergridrows = function () {
                    return dataAdapter.records;
                };

                $("#submitDropdown" + gridResultObj['gridId']).html(gridResultObj['buttonObj']);
                $("#exportDropdown" + gridResultObj['gridId']).html(gridResultObj['gridOperation']);
//                gridPropObj.rowdetails = false;
                alert("Before Grid");
                //subTabId

                if (editable)
                {
                    $('#gridRefreshButton').hide();
//                                        $('div#submitDropdown > img').remove();
                }


                $("#currentGridpageNum").val(0);

                $('#' + gridResultObj['gridId']).jqxGrid(gridPropObj);

                try {
                    var gridColumnObj = gridPropObj.columns;
                    if (columnInitParamObj != null && !jQuery.isEmptyObject(columnInitParamObj)) {
                        $("#" + gridResultObj['gridId']).jqxGrid('beginupdate');
                        for (var index = 0; index < gridColumnObj.length; index++) {
                            var datacolName = gridColumnObj[index].datafield;
                            var cellalignColParamObj = columnInitParamObj[datacolName];
                            if (cellalignColParamObj != null && !jQuery.isEmptyObject(cellalignColParamObj)) {
                                var cellaligndata = cellalignColParamObj['uuu_Colcellsalign'];
                                if (cellaligndata != null && cellaligndata != undefined && cellaligndata != '') {
                                    $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', datacolName, 'align', cellaligndata);
                                    $("#" + gridResultObj['gridId']).jqxGrid('setcolumnproperty', datacolName, 'cellsalign', cellaligndata);
                                }
                            }

                        }
                        $("#" + gridResultObj['gridId']).jqxGrid('endupdate');

                    }

                } catch (e) {
                }


                if (gridtype == "CLASSIFICATION_SEARCH") {
//                    $('#' + gridResultObj['gridId']).jqxGrid({ height: 400 }); 
                    $('#' + gridResultObj['gridId']).on('cellclick', function (event) {//newRegGridId
                        console.log("event.args.column.datafield::templateResults:::" + event.args.column.datafield);
                        var args = event.args;
                        var rowBoundIndex = args.rowindex;
                        $("#currentRowIndex").val(rowBoundIndex);
                        $("#currentGridId").val(gridResultObj['gridId']);
                        var columnindex = args.columnindex;
                        var dataField = args.datafield;
                        if (columnindex != 2 && columnindex != 0) {
                            var dtlul = "dtlul_" + rowBoundIndex;

                            var pageSize = $('#' + gridResultObj['gridId']).jqxGrid('pagesize');
                            templeteMouseOut(dtlul, pageSize);
                            var registerGridId = $("#regGrdiId").val();
                            if (registerGridId == null || registerGridId == undefined || registerGridId == '') {
                                registerGridId = "MM_SAP_NEW_REG";
                            }
                            CreationBasedOnDomainWithGrid(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', registerGridId, '', 'New Registrations')
//                            showSelectedTabContent('viewFormTab');
                            showSelectedTabContent(null, 'dxpFromTab', 'dxpFormContent', 'View Form', 'N');

                        }
                    });
                } else {
                    $('#' + gridResultObj['gridId']).on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                        var panelId = $("#panelId").val();
                        console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);
                        navigateToForm(event.args.column.datafield, $('#' + gridResultObj['gridId']).jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
                        // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);
                    });
                }


                $('#searchResults').on('cellclick', function (event) {
//                                    $('#searchResults').bind('cellclick', function (event) {
                    var panelId = $("#panelId").val();
                    var fillDownColumns = gridInitParamObj['fillDownColumns'];
                    if (fillDownColumns && fillDownColumns !== "" && fillDownColumns !== "null") {
                        var columnindex = event.args.columnindex;
                        var args = event.args;
                        var rowBoundIndex = args.rowindex;
                        var dataField = event.args.datafield;
//                            var value = event.args.value;
                        var currentSelectFillDownData = "" + gridResultObj['gridId'] + ":" + rowBoundIndex + ":" + dataField + ":" + columnindex + ":" + fillDownColumns;
                        console.log("currentSelectFillDownData:::" + currentSelectFillDownData);
                        $("#currentSelectFillDownData").val(currentSelectFillDownData);

                        var uuu_fillDownDependencyColumns = gridInitParamObj['uuu_fillDownDependencyColumns'];
                        if (uuu_fillDownDependencyColumns) {
                            $("#currentSelectFillDownDependencyColumns").val(uuu_fillDownDependencyColumns);
                        }
                    }
                    console.log(panelId + ":::event.args.column.datafield:::::" + event.args.column.datafield);
                    navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', hrefObj['hrefGridId'], panelId, 'Search View');
                    // navigateToForm(event.args.column.datafield, $('#searchResults').jqxGrid('getrowdata', event.args.rowindex), 'form', gridResultObj['gridId']);
                });
                $('#' + gridResultObj['gridId']).on('celldoubleclick', function (event) {
                    var args = event.args;
                    var dataField = args.datafield;
                    var dataField1 = args.text;
                    var rowIndex = args.rowindex;
                    var cellValue = args.value;
                    var column = $('#' + gridResultObj['gridId']).jqxGrid('getcolumn', event.args.datafield).text;
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
                });
                $("#" + gridResultObj['gridId']).on('cellbeginedit', function (event) {
                    var args = event.args;
                    var columntype = args.columntype
                    var dataField = args.datafield;
                    var columnindex = args.columnindex;
                    var rowBoundIndex = args.rowindex;
                    var cellValue = args.value;
                    currentDataField = dataField;
                    currentRowIndex = rowBoundIndex;
                    currentColumnindex = columnindex;

                });
                $('#' + gridResultObj['gridId']).on('rowunselect', function (event) {
//                                    showSelectedRows(gridResultObj['gridId'],null,gridInitParamObj['uuu_GridNtfnFlag']);
                });
                $('#' + gridResultObj['gridId']).on('rowselect', function (event) {
//                    console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
//                                    showSelectedRows(gridResultObj['gridId'], event.args.rowindex,gridInitParamObj['uuu_GridNtfnFlag']);
                });

                $('#' + gridResultObj['gridId']).on("pagechanged", function (event) {
                    var oldPageNum = $("#currentGridpageNum").val();
                    console.log("oldPageNum:::" + oldPageNum + "::::Current Page Num:::" + event.args.pagenum);
                    // event arguments.
                    var args = event.args;
                    // page number.
                    var pagenum = args.pagenum;
                    // page size.
                    var pagesize = args.pagesize;
                    if (parseInt(event.args.pagenum) != parseInt(oldPageNum)) {
                        var selectedrowindexes = $('#' + gridResultObj['gridId']).jqxGrid('selectedrowindexes');
//                                        console.log("searchResults:::selectedrowindexes:::" + selectedrowindexes);
                        try {
                            if (selectedrowindexes != null
                                    && selectedrowindexes.length != 0
                                    && selectedrowindexes[0] != -1) {
                                $('#' + gridResultObj['gridId']).jqxGrid('clearselection');
                            }

                        } catch (e) {
                        }
                    }
                    $("#currentGridpageNum").val(event.args.pagenum);
                });
                $('#' + gridResultObj['gridId']).on("pagesizechanged", function (event) {
                    console.log("::pagesizechanged:::" + event.args.pagenum);
                    $("#currentGridpageNum").val(0);
                });
                $('#' + gridResultObj['gridId']).on('cellendedit', function (event) {
                    var args = event.args;
                    var value = args.value;
                    if (args['columntype'] != null && args['columntype'] != '' && args['columntype'] != undefined && args['columntype'] == 'checkbox' && value == true) {
                        $('#' + gridResultObj['gridId']).trigger("cellbeginedit");
                    }
                });


                //  
                alert("604 Grid");
                $(window).resize(function () {
                    var windowWidth = $(this).width();
                    if (windowWidth <= 415)
                    {
                        $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 70});
                    } else if (windowWidth >= 416 && windowWidth <= 500)
                    {
                        $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 40});
                    } else
                    {
                        $('#' + gridResultObj['gridId']).jqxGrid({pagerheight: 30});
                        $('#' + gridResultObj['gridId']).jqxGrid({scrollbarsize: 8});
                    }
                }).resize();
                $('#' + gridResultObj['gridId']).parent().css("padding-top", "3px", "important");
                $('#' + gridResultObj['gridId']).parent().css("padding-bottom", "3px", "important");
                //   $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', false);
                if ((srsRegiterButton != null && srsRegiterButton != undefined && srsRegiterButton == 'Y')
                        || (hideToolBar != null && hideToolBar != undefined && hideToolBar == 'Y'))

                {
                    $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', true);
                    console.log("iam in if grid condition in toolbar 1016" + srsRegiterButton);
                } else
                {
                    $('#' + gridResultObj['gridId']).jqxGrid('showtoolbar', false);
                    console.log("iam in else grid condition in toolbar 1021" + srsRegiterButton);
                }

            }

        }

    } catch (e) {
        stopLoader();
    }
    stopLoader();

}// end of function gridConfig(-)    
function fetchNestedMultiChildTabs(parentGridId, selectedIndex, selectedGridCompType, divId, selectedRowData) {
    // ravi code start
    childChangeflag = false;
    childGrid1Changeflag = false;
    childGrid2Changeflag = false;
    var clusterFormFlag = 'Y'
    // ravi code end


    $("#" + divId).html("");
    if (parentGridId != null) {

        showLoader();
        $.ajax({
            type: "POST",
            url: "fetchClusterChildTabs",
            data: {
                clusterCompId: parentGridId, // master Grid Id
                selectedGridCompType: selectedGridCompType
            },
            traditional: true,
            cache: false,
            success: function (result) {
                stopLoader();
                $("#" + divId).html("");
                if (result != null && !jQuery.isEmptyObject(result)) {
                    showLoader();
                    var theme = "ui-redmond";
                    var gridResultObj = result['masterGridObj'];
                    try {
                        gridResultObj['relationArray'] = result['relationArray'];
                    } catch (e) {
                    }

                    var selectedMasterData = {};

                    try {
                        $("#" + parentGridId + "_TAB").jqxTabs("destroy");

                        // $(".jqx-clear .jqx-border-reset .jqx-overflow-hidden .jqx-max-size .jqx-position-relative").remove();
                    } catch (e) {
                    }
                    if (result['compType'] != 'CMPR') {
                        $("#" + parentGridId + "_TAB").remove();
                    }

                    $("#" + divId).html(result['tabString']);


                    if (clusterFormFlag = 'Y')
                    {
                        if (result['compType'] != 'CMPR') {
                            $("#" + parentGridId + "_TAB").jqxTabs();
                        } else {
                            $("#" + parentGridId + "_TAB").jqxTabs({position: 'top', theme: theme, reorder: true, autoHeight: true, keyboardNavigation: true, scrollPosition: 'both'});
                        }
                    } else {
                        $("#" + parentGridId + "_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
                            theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
                            , scrollPosition: 'both'});
                    }


                    $("#" + parentGridId + "_TAB").unbind('selected').on('selected', function (event) {

                        // ravi start
                        var contentTabId = $("#" + parentGridId + "_TAB").closest(".jqx-splitter-panel").attr("id");


                        executed = false;
                        tabSwitched = true;
                        currentClickedGridId = null;

                        if (onTabclickFunc != null) {
                            onTabclickFunc();
                        }
                        // ravi end

                        var selectedTab = event.args.item + 1;
                        var img = $("#" + parentGridId + "_TAB" + " ul li:nth-child(" + selectedTab + ")").find('img').attr('src');
                        var mainnewimage = img.replace(".png", "").replace(/_white/g, "");
                        var attributes = $("#" + parentGridId + "_TAB" + " ul li:nth-child(" + selectedTab + ")").attr("id");
                        $("#" + attributes).find('img').attr('src', mainnewimage + '_white.png');
                    });


//                    $("#" + parentGridId + "_TAB").unbind('unselecting').on('unselecting', function (event) {
//
//                        // ravi start----
//
//
//                        var tabTitle = $('#' + parentGridId + "_TAB").jqxTabs('getTitleAt', event.args.item);
//                        var unselectedTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
//                        //var unselectedTabId = $("span:contains('" + tabTitle + "')").attr("id").replace("span_", "");
//
//                        checkChanges(unselectedTabId);
//
//                        var childTabId = $("#"+divId).find('div.jqx-tabs').attr("id");
//                        var selectedItem = $('#' + childTabId).jqxTabs('selectedItem');
//                        var tabTitle = $('#' + childTabId).jqxTabs('getTitleAt', selectedItem);
//                        var unselectedChildTabId = $("div.jqx-tabs-titleContentWrapper:contains('" + tabTitle + "')").closest("li").attr("id").replace("li_", "");
//                        checkChanges(unselectedChildTabId);
//
//                        // ravi code end----  
//
//
//                        var unselectedTab = event.args.item + 1;
//                        var un_img = $("#" + parentGridId + "_TAB" + " ul li:nth-child(" + unselectedTab + ")").find('img').attr('src');
//                        var mainnewimage = un_img.replace(/_white/g, "");
//                        var attributes = $("#" + parentGridId + "_TAB" + " ul li:nth-child(" + unselectedTab + ")").attr("id");
//                        $("#" + attributes).find('img').attr('src', mainnewimage);
//                    });


                    var selectedMasterData = {};
                    var relationId = "";
                    var relationObj = result['relationObj'];
                    if (relationObj != null && !jQuery.isEmptyObject(relationObj)) {
                        if (result['compId'] != null && result['compId'] != undefined && result['compId'] != '') {
                            relationId = relationObj[result['compId']];
                        }

                    }

                    if ($("#" + divId).attr("data-height") != null && $("#" + divId).attr("data-height") != '') {
                        $("#" + divId).css("height", $("#" + divId).attr("data-height"));
                    }

                    selectedMasterData = $("#" + parentGridId).jqxGrid('getrowdata', selectedIndex);
                    if (result['compType'] == 'ANALYTIC') {
                        chartsData(result['compId'], result['compId'], "Y");
                    } else if (result['compType'] == 'TABLE_FORM') {
                        clusterChildTableForm(parentGridId, result['compId'], result['compType'], "N", [], relationId, selectedMasterData, gridResultObj);
                    } else if (result['compType'] == 'CMPR') {
                        var componentId = result['compId'];
                        if (componentId != null && componentId.indexOf(",") > -1) {
                            var componentIds = componentId.split(",");
//                            $("#"+componentIds[0]+"_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
//                            theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
//                            , scrollPosition: 'both'});
                            clusterGridConfig(result['childQueryObj'], parentGridId, componentIds[0], result['compType'], "N", [], relationId, selectedMasterData, "Y");
                            setTimeout(function () {
                                showLoader();
//                                $("#"+componentIds[1]+"_TAB").jqxTabs({height: '100%', width: '100%', position: 'top',
//                            theme: theme, reorder: true, autoHeight: false, keyboardNavigation: true
//                            , scrollPosition: 'both'});
                                clusterGridConfig(result['childWebObj'], parentGridId, componentIds[1], result['compType'], "N", [], relationId, selectedMasterData, "Y");
                            }, 200);
                            $("#" + parentGridId + "_TAB div div").show();


                        }

                    } else {
                        clusterGridConfig(gridResultObj, parentGridId, parentGridId, result['compType'], "N", [], relationId, selectedMasterData, "Y");
                    }

                } else {
                }


            },
            error: function (e) {
                console.log(e);
                sessionTimeout(e);
                stopLoader();
            }

        });
        stopLoader();
    }
    stopLoader();
}
function populateFileBrowserColMapping(browseId, gridId) {
    var params = {};
    params['gridId'] = gridId;

    $("#" + browseId).ajaxfileupload({

        'action': 'importFileAjaxColMapping',
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
            //var columnDefinitions = $('#' + gridId).jqxGrid('getInstance').columns.records;

            var resultObject = result['message'];

            //var resultObject = JSON.parse(resultStr);
            var fileHeaders = resultObject['headersArray']
            var filePath = resultObject['filePath']
            var gridTable = resultObject['gridTable']
            var columnLabels = resultObject['columnLabels']
            var datafields = resultObject['datafields']

            var htmlDiv = "<div id='importFileColumnsMapppingOptionsDiv' >"
                    + "<img id='importFileColumnsMapppingInfo' onclick='importColumnMappingAssistant()' src='images/Information_icon_Blue.svg' style='float:right;width:20px;' />"
                    + "</div>"
                    + "<div id='importFileColumnMappingId' class='importFileColumnMappingMain' ></div>";

            var mappedGridColumnsArray = [];
            var mappedGridLabelssArray = [];

            var mappedFileHeadersArray = [];
            var columnMappingObj = {};
            $("#dialog").html(htmlDiv);
            $("#dialog").dialog({resizable: false,
                modal: true,
                title: (labelObject['Map Columns'] != null ? labelObject['Map Columns'] : 'Map Columns'),
                height: 500,
                minHeight: 'auto',
                width: 860,
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
                                                    $("#" + gridId).jqxGrid('updatebounddata');

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
                                            $(this).html("");
                                            $(".visionHeaderMain").css("z-index", "99999");
                                            $(".visionFooterMain").css("z-index", "99999");

                                        }
                                    });
                                },
                                error: function (e) {
                                    console.log(e);
                                    sessionTimeout(e);
                                    stopLoader();
                                }
                            })

                            $(this).html("");
                            $(this).dialog("close");

                        }
                    }],
                open: function () {

                    // var columnDefinitions = $('#' + gridId).jqxGrid('getInstance').columns.records;

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

                    var resultObject = result['message'];
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


                    var datainformations = $('#' + gridId).jqxGrid('getdatainformation');
                    var tableTitle = "<div>Staging Table <br>"
                            + "Columns Count : " + columnNameArray.length + "<br>"
                            + "Rows Count : " + datainformations['rowscount'] + "</div>";


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

//                                          var flowChartData = $('#importFileColumnMappingId').flowchart('getData');
//                                          $('#importFileColumnMappingId').flowchart('setData', flowChartData);

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
                                    + "<img src='images/importColMapping.gif' class='d-block w-100' width='260px' alt='Map Columns'>"
                                    + "</div>"
                                    + "<div class='carousel-item'>"
                                    + "<span>To delete a link select a link by clicking on the link and press delete.</span><hr />"
                                    + "<img src='images/importColMapping.gif' class='d-block w-100' width='260px' alt='Map Columns'>"
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
                        //                    height:250px,
                    });


                    $("#fileAnalyticsId").attr("title", "Analysis");
                    $("#fileDataTypesValidationId").attr("title", "Validate Datatypes");

                    //  $(this).closest(".ui-dialog").addClass("dialogzindex");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
                    $(this).closest(".ui-dialog").addClass("visionCommonDialog");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                },
                beforeClose: function (event, ui)
                {
                    $(".popover").remove();
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");

                }
            });


            try {
                var $img = $("#" + browseId).next('img');
                $("#" + browseId).remove();
                $img.before("<input id='" + browseId + "' type='file' name='importFile' />");
                $("#" + browseId).hide();

                stopLoader();//27
            } catch (e) {
                stopLoader();//28
            }
        }
        , onCancel: function () {
            $("#Loader").css("display", "none");
            $("body").css("pointer-events", "auto");
//            stopLoader();//29
        }
        //catch()}
    });


    $("#" + browseId).click();
}
function showFileColumnAnalytics($this, filePath) {

    $.ajax({
        url: "fetchColumnWiseFileData",
        type: "post",
        traditional: true,
        dataType: 'json',
        cache: false,
        data: {
            filePath: filePath
        },
        success: function (response) {
            var keys = [];
            var values = [];
            $.each(response, function (key, val) {
                var len = val.length;
                values.push(len);
                keys.push(key);
            });
            var html = "<div id='flieColumnsObjChart'></div>"
            $(".popover-body").html(html);


            var layout = {
                title: 'Column wise data count',
                width: 400,
                height: 400
            };
            var data = [
                {
                    x: keys,
                    y: values,
                    type: 'bar'
                }
            ];

            Plotly.newPlot('flieColumnsObjChart', data, layout);

            $(".popover").css("max-width", "fit-content", "important");

            stopLoader();//20
            stopLoader();
        }, error: function () {

        }
    })
}
function showFileDataTypesValidation($this, filePath, gridTable, mappedFileHeadersArray, mappedGridColumnsArray, mappedGridLabelssArray) {
    $.ajax({
        url: "fileDataTypeValidations",
        type: "post",
        traditional: true,
        dataType: 'json',
        cache: false,
        data: {
            filePath: filePath,
            tableName: gridTable,
        },
        success: function (response) {
            var html = "<h5 style='text-align:center;'>Datatypes Validation</h5>"
                    + "<table><thead>"
                    + "<th>File Column</th><th>Table Column</th><th>Status</th></thead>"
                    + "<tbody>";
            var fileDataTypes = response['fileDataTypes'];
            var tableDataTypes = response['tableDataTypes'];
            $.each(mappedFileHeadersArray, function (i) {
                var fileHeader = mappedFileHeadersArray[i];
                var columnName = mappedGridColumnsArray[i];
                var columnLabel = mappedGridLabelssArray[i];

                var fileDataType = fileDataTypes[fileHeader];
                if (fileDataType.indexOf("VARCHAR") > -1) {
                    fileDataType = "VARCHAR";
                } else if (fileDataType.indexOf("NUMERIC") > -1 || fileDataType.indexOf("NUMBER") > -1) {
                    fileDataType = "NUMBER";
                }
                var tableDataType = tableDataTypes[columnName];
                if (tableDataType.indexOf("VARCHAR") > -1) {
                    tableDataType = "VARCHAR";
                } else if (tableDataType.indexOf("NUMERIC") > -1 || tableDataType.indexOf("NUMBER") > -1) {
                    tableDataType = "NUMBER";
                }

                if (fileDataType != null && fileDataType == tableDataType) {
                    html += "<tr><td>" + fileHeader + "</td><td>" + columnLabel + "</td><td><img title='DataTypes Matched' src='images/matched.png' style='width:20px;' ></td></tr>"
                } else {
                    var title = "dataTypes mismatch. File column type is " + fileDataTypes[fileHeader] + ". Table column tyoe is " + tableDataTypes[columnName] + ".";
                    html += "<tr><td>" + fileHeader + "</td><td>" + columnLabel + "</td><td><img title='" + title + "' src='images/mis_match.png' style='width:20px;' ></td></tr>"

                }
            })
            $(".popover-body").html(html);
            $(".popover").css("max-width", "fit-content", "important")

            stopLoader();
        }, error: function () {

        }
    })
}
function gettabrightscroll(divId, scrollwidth) {
    try {
        var tabscrollWidth = $("#" + divId)[0].scrollWidth
//    var scrollClickLen = 0;
        var scrollwidthlen = 0;
        var container = document.getElementById(divId);
        if (scrollwidth != null && scrollwidth != 'null' && scrollwidth != ''
                && scrollwidth != 'undefined') {
            scrollwidthlen = scrollwidthlen + scrollwidth;
        } else {
            scrollwidthlen = scrollwidthlen + 10;
        }
        var divScrollWidth = container.clientWidth + scrollClickLen;
        if (divScrollWidth < tabscrollWidth) {
            scrollClickLen += scrollwidthlen;
            container.scrollLeft += scrollClickLen;
        }
    } catch (e)
    {

    }
}
function gettableftscroll(divId, scrollwidth) {
    try {
//     var scrollClickLen = 0;
        var scrollwidthlen = -20;
        var tabscrollWidth = $("#" + divId)[0].scrollWidth
        var container = document.getElementById(divId);
        if (scrollwidth != null && scrollwidth != 'null' && scrollwidth != ''
                && scrollwidth != 'undefined') {
            scrollwidthlen = scrollwidthlen + scrollwidth;
        } else {
            scrollwidthlen = scrollwidthlen + 10;
        }
        if (scrollClickLen > 0) {
            scrollClickLen -= scrollwidthlen;
            container.scrollLeft -= scrollClickLen;
        }
    } catch (e)
    {
    }
}
function getPythonApiCallingDataInputForm(inputParams) {
    try {
        showLoader();

        if (inputParams != null && inputParams != '' && inputParams != undefined)
        {
            var inputParamsObj = JSON.parse(inputParams);
            var gridId = inputParamsObj['gridId'];
        }


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
                    valueMember: 'value'
                });
                $("#dialog10").dialog({resizable: false,
                    title: (labelObject['Batch IDs'] != null ? labelObject['Batch IDs'] : 'Batch IDs'),
                    modal: true,
                    width: 400,
                    height: 150,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                var batchId = $("#selectBatchIdsWithGridParams").val();
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                if (batchId != null && batchId != '' && batchId != 'null' && batchId != undefined)
                                {
                                    callingPythonDHSApiCalling(gridId, batchId, inputParams)
                                }
                            }
                        },
                        {
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
                stopLoader();
            }
        });


    } catch (c) {
        stopLoader();
    }
}
function callingPythonDHSApiCalling(gridId, batchId, inputParams) {
    try {
        showLoader();
        var message = "";
        if (batchId != null && batchId != '' && batchId != 'null' && batchId != undefined)
        {
            if (inputParams != null && inputParams != '' && inputParams != undefined)
            {
                var inputParamsObj = JSON.parse(inputParams);
                var gridId = inputParamsObj['gridId'];
                var updateTableName = inputParamsObj['updateTableName'];
                var fetchTableName = inputParamsObj['tableName'];
                var updateColumn = inputParamsObj['updateColumn'];
                var colsArray = inputParamsObj['colsArray'];
                var updateWhereCols = inputParamsObj['updateWhereCols'];
                var operation = inputParamsObj['operation'];
                var operationDesc = inputParamsObj['operationDesc'];
                operationDesc = operationDesc.replaceAll("_", " ");
                var titleMessage = inputParamsObj['titleMessage'];
                titleMessage = titleMessage.replaceAll("_", " ");
            }

            var tmessage = titleMessage != null ? titleMessage : "Message";

            var url = "callingPhythonDHSApi";

            var input = {
                hours: 0,
                minutes: 0,
                seconds: 0
            };

            stopLoader();
            showTimer(input);

            $.ajax({
                type: "POST",
                url: url,
                data: {
                    'gridId': gridId,
                    'operation': operation,
                    'batchId': batchId,
                    'colsArray': colsArray,
                    'updateTableName': updateTableName,
                    'updateColumn': updateColumn,
                    'updateWhereCols': updateWhereCols,
                    'operation': operation,
                    'fetchTableName': fetchTableName,
                    'operationDesc': operationDesc,
                },
                traditional: true,
                cache: false,
                success: function (result) {
                    stopLoader();
                    var processTime = $("#dxpIncrementTimer").text();
                    stopTimer();
                    message = result + " (Process Time: " + processTime + ")";

                    $("#dialog").html(message);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                        modal: true,
                        width: 400,
                        height: 150,
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    refreshGridData(gridId);
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
                    stopLoader();
                    stopTimer();
                    message = "Unable to Process selected batch for " + operationDesc + ".";
                    $("#dialog").html(message);
                    $("#dialog").dialog({resizable: false,
                        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                        modal: true,
                        width: 400,
                        height: 150,
                        fluid: true,
                        buttons: [{
                                text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                click: function () {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                    refreshGridData(gridId);
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
        } else {
            message = "Please Select Batch Id to Process."
            $("#dialog").html(message);
            $("#dialog").dialog({resizable: false,
                title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                modal: true,
                width: 400,
                height: 150,
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

    } catch (c) {
        stopLoader();
        stopTimer();
    }
}
function showTimer(input) {
    try {
        if (input.hours != null && input.hours != '')
        {
            var input = {
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
        $("#dxpIncrementTimer").innerHTML = '';
        $("#dxpIncrementTimer").html('');

        var timestamp = new Date(input.hours, input.minutes, input.seconds);
        var interval = 1;
//        setInterval(function () {
//            timestamp = new Date(timestamp.getTime() + interval * 1000);
//            (document.getElementById('dxpIncrementTimer')).innerHTML = timestamp.getHours() + 'H:' + timestamp.getMinutes() + 'M:' + timestamp.getSeconds() + 'S';
//        }, Math.abs(interval) * 1000);
        (document.getElementById('dxpIncrementTimer')).innerHTML = '0H:0M:0S';
        const timerID = setInterval(function () {
            timestamp.setTime(timestamp.getTime() + 1000);
            (document.getElementById('dxpIncrementTimer')).innerHTML = timestamp.getHours() + 'H:' + timestamp.getMinutes() + 'M:' + timestamp.getSeconds() + 'S';
        }, 1000);
        $("#dxpIncrementTimer").attr("data-timerID", timerID);
        console.log(timerID);
        $("#dxpIncrementTimer").dialog({resizable: false,
            title: (labelObject["Processing Time"] != null ? labelObject["Processing Time"] : "Processing Time"),
            modal: true,
            width: 100,
            height: 100,
            fluid: true,
            open: function () {
//                     //  $(this).closest(".ui-dialog").addClass("dialogzindex");            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            }

        });


    } catch (t) {

    }
}
function stopTimer() {
    try {
        const timerId = $("#dxpIncrementTimer").attr("data-timerID");
        clearInterval(timerId);
        $("#dxpIncrementTimer").innerHTML = '';
        $("#dxpIncrementTimer").html('');
        $("#dxpIncrementTimer").dialog("close");
        $("#dxpIncrementTimer").dialog("destroy");
        $(".visionHeaderMain").css("z-index", "99999");
        $(".visionFooterMain").css("z-index", "99999");
    } catch (t) {

    }
}
function getAPIRadioForm(inputParams) {
    try {
        showLoader();

        if (inputParams != null && inputParams != '' && inputParams != undefined)
        {
            var inputParamsObj = JSON.parse(inputParams);
            var gridId = inputParamsObj['gridId'];
        }
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
                    valueMember: 'value'
                });
                $("#dialog10").dialog({resizable: false,
                    title: (labelObject['Batch IDs'] != null ? labelObject['Batch IDs'] : 'Batch IDs'),
                    modal: true,
                    width: 400,
                    height: 150,
                    fluid: true,
                    buttons: [{
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                var batchId = $("#selectBatchIdsWithGridParams").val();
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                if (batchId != null && batchId != '' && batchId != 'null' && batchId != undefined)
                                {
//                                    callingPythonDHSApiCalling(gridId, batchId, inputParams)
                                    var strValue = '<div class="fiveStepsMultiSelectorDiv" id="fiveStepsMultiSelectorID">' +
                                            '<div style="text-align: center; color: #0b4a99;"><h3>AI Services</h3></div>' +
                                            '<div>' +
                                            '<form id="fiveStepsMultiSelectorformID">' +
                                            '<label class="container">AI Class Allocation' +
                                            '<input type="checkbox" class="checkBoxValueClass" value="three">' +
                                            '<span class="checkmark"></span>' +
                                            '</label>' +
                                            '<label class="container">AI Char Allocation' +
                                            '<input type="checkbox" class="checkBoxValueClass">' +
                                            '<span class="checkmark"></span>' +
                                            '</label>' +
                                            '<label class="container">AI Reference Allocation' +
                                            '<input type="checkbox" class="checkBoxValueClass">' +
                                            '<span class="checkmark"></span>' +
                                            '</label>' +
                                            ' </form>' +
                                            '</div>' +
                                            '</div>';
                                    $("#dialog").html(strValue);
                                    $("#dialog").dialog({resizable: false,
                                        title: (labelObject['AI Services'] != null ? labelObject['AI Services'] : 'AI Services'),
                                        modal: true,
                                        width: 400,
                                        height: 250,
                                        fluid: true,
                                        buttons: [{
                                                text: (labelObject['Process'] != null ? labelObject['Process'] : 'Process'),
                                                click: function () {
                                                    $(this).html("");
                                                    $(this).dialog("close");
                                                    $(this).dialog("destroy");
                                                    $("#dialog1").html('<p>Your Data Will be Processed in background.Will inform through mail once data has been processed.</p>');
                                                    $("#dialog1").dialog({resizable: false,
                                                        title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                                        modal: true,
                                                        width: 500,
                                                        height: 150,
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
                        {
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
                stopLoader();
            }
        });


    } catch (c) {
        stopLoader();
    }
}

function showButtonPopupMessage(errorMessage, buttonsArray, titleMessage, popupwidth, popupheight) {
    var dialogwidth = '400';
    var dialogheight = '150';
    var buttonArray = [];
    buttonArray = [{
            text: (labelObject['Ok'] != null ? labelObject['Ok'] : "Ok"),
            click: function () {
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

        }];
//     var buttonObj = JSON.stringify(buttonArray);
    var message = labelObject[errorMessage] != null ? labelObject[errorMessage] : errorMessage;
    var tmessage = titleMessage != null ? titleMessage : "Message";
    if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
    {
        dialogwidth = popupwidth;
    }
    if (popupheight != null && popupheight != "" && popupheight != 'undefined')
    {
        dialogheight = popupheight;
    }
    if (buttonsArray != null && buttonsArray != 'undefined' && buttonsArray != undefined && buttonsArray.length > 0)
    {
        buttonArray = buttonsArray;
//        buttonObj = buttonsArray;
    }

    $("#messagedialog3").html(message + ".");
    $("#messagedialog3").dialog({resizable: false,
        title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
        modal: true,
        height: dialogheight,
        minWidth: popupwidth,
        fluid: true,
        buttons: buttonArray,
        open: function () {
//            $(this).closest(".ui-dialog").addClass("timelinepopup");
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(".visionHeaderMain").css("z-index", "999");
            $(".visionFooterMain").css("z-index", "999");
        },
        beforeClose: function (event, ui)
        {
            $(this).html("");
            try {
//                $(this).dialog("close");
            } catch (e) {
            }
            $(".visionHeaderMain").css("z-index", "99999");
            $(".visionFooterMain").css("z-index", "99999");
        }
    });

}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function onimportgridddwChange(selectedGridId) {

    var selectedImportColumn = $("#" + selectedGridId + "browsecolsddw").val();
    console.log("selectedImportColumn::" + selectedImportColumn);
    if (selectedImportColumn != null && selectedImportColumn != '') {
        // importParamSearch(selectedImportColumn);
        $("#" + selectedGridId + "browsecolsHidden").val(selectedImportColumn);


    }
}
function showgridbrowsepopup(selectedGridId) {
    $("#" + selectedGridId + "importreccount").attr("data-isSearch", "N");
    $("#" + selectedGridId + "importreccount").html("");


    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }



    $("#importfiltergridcriteria").show();
    $("#importfiltergridcriteria").dialog({resizable: false,
        title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
        modal: true,
        height: 220,
        minWidth: 500,
        maxWidth: 'auto',
        fluid: true,
        buttons: [
            {
                text: (labelObject['Search'] != null ? labelObject['Search'] : 'Search'),
                click: function () {
                    //  stopLoader();
                    var selectedColumn = $("#" + selectedGridId + "browsecolsddw").val();
                    var importreccount = $("#" + selectedGridId + "importreccount").attr("data-issearch");
                    if (importreccount == 'Y') {
                        var selectedTabId = $("#tabid").val();
                        var gridIdStr = $("#gridIdStr").val();
                        var selectedIndex = 0;

                        if (gridIdStr != null && gridIdStr != '') {
                            var gridIdsArray = gridIdStr.split(",");
                            if (gridIdsArray != null && gridIdsArray.length != 0) {
                                selectedIndex = gridIdsArray.indexOf(selectedGridId);
                            }
                        } else {
                            selectedIndex = $("#" + selectedGridId + "importbutton").attr("data-selectedgridindex");
                            if (!(selectedIndex != null && selectedIndex != '')) {
                                selectedIndex = 0;
                            }
                        }
                        if (!(selectedTabId != null && selectedTabId != '')) {
                            //data-tabId
                            selectedTabId = $("#" + selectedGridId + "importbutton").attr("data-tabid");
                        }
                        console.log("selectedTabId:::" + selectedTabId + ":::selectedIndex:::" + selectedIndex);
                        if (selectedTabId != null && selectedTabId != '') {
                            getFilterGridResults(selectedGridId, selectedIndex, selectedTabId, selectedColumn, 'Y');
                        } else {
                            getFilterGridResults(selectedGridId, selectedIndex, '', selectedColumn, 'Y');
                        }


                    }
                    $("#importfiltergridcriteria").hide();
                    $("#importfiltergridcriteria").dialog('close');

                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                click: function () {
                    $("#importfiltergridcriteria").hide();
                    $("#importfiltergridcriteria").dialog('close');
//                    $("#browsecols").val("");
//                    $("#importedcols").text('');
//                    $("#importreccount").remove();
//                    $("#importedcols").removeAttr('data-recordcount');
//                    var colName = $("#importedcols").attr('data-colname');
//                    $("#" + colName).find('select').attr('data-staged', 'N');

                }
            }
        ],

        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(this).closest(".ui-dialog").addClass("visionSearchImportDialog");
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

function importgridParamSearch(selectedGridId) {
    var params = {
        selectedColumn: selectedColumn,
        selectedGridId: selectedGridId
    }
    var csrfToken = $("input[name='_csrf']").val();
    if (csrfToken != null && csrfToken != '') {
        params['_csrf'] = $("input[name='_csrf']").val();
    }

    var selectedImportColumn = $("#" + selectedGridId + "browsecolsddw").val();
    $("#" + selectedGridId + "importreccount").attr("data-isSearch", "N");
    var selectedColumn = $("#" + selectedGridId + "browsecolsddw").val();
    $("#" + selectedGridId + "browsecolsHidden").val(selectedImportColumn);
    console.log("importParamSearch::::" + selectedColumn);
    $("#" + selectedGridId + "browsecols").ajaxfileupload({
        'action': "importGridParamSearch",
        params: params,
        valid_extensions: ['xls', 'xlsx', 'XLS', 'XLSX'],
        'onComplete': function (response) {
            // $("#wait").css("display", "none");
            console.log("response:::" + JSON.stringify(response));
            if (response != null && response['message'] != '') {
                $("#" + selectedGridId + "importreccount").attr("data-isSearch", "Y");
                $("#" + selectedGridId + "importreccount").css("padding-top", "30px");
                $("#" + selectedGridId + "importreccount").html(response['message']);
                var importButton = "   <input id=\"" + selectedGridId + "uploadbutton\" type=\"button\" value=\"Upload\" class=\"visionFileUpload\" onclick=\"importgridParamSearch('" + selectedGridId + "')\"/>"
                        + " <input id='" + selectedGridId + "browsecols' name='importFile' class=\"upload\" type=\"file\" value=\"Import file\" style=\"display:none;\"/>"
                        + " <input type=\"hidden\" id=\"" + selectedGridId + "browsecolsHidden\" value=\"\"/>"
                        + "";
                $("#" + selectedGridId + "uploadButtonDiv").html(importButton);
            }

            stopLoader();
            //  $("body").css({"pointer-events": "auto"});
        },
        'onStart': function () {
            ajaxStart();
//            $('#wait').show();
//            $("body").css({"pointer-events": "none"});
//            $("#wait").css("display", "block");
            // $('#message').hide();
        }
    });
    $("#" + selectedGridId + "browsecols").click();
}

function htmlTableToExcel(tableId) {
    let tableData = document.getElementById(tableId).outerHTML;
    tableData = tableData.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    tableData = tableData.replace(/<input[^>]*>|<\/input>/gi, ""); //remove input params

    let a = document.createElement('a');
    a.href = `data:application/vnd.ms-excel, ${encodeURIComponent(tableData)}`
    a.download = 'iDXPDownloadData_' + generateRandomNumbers() + '.xlsx'
    a.click()
}


function generateRandomNumbers() {
    let dateObj = new Date()
    let dateTime = `${dateObj.getHours()}${dateObj.getMinutes()}${dateObj.getSeconds()}`

    return `${dateTime}${Math.floor((Math.random().toFixed(2) * 100))}`
}


function getHTMLBOMHierarchy(bomType, titleMessage, popupwidth, popupheight, formFlag) {

    try {
        var rowData = {};
        if (formFlag != null && formFlag != '' && formFlag != undefined && formFlag == 'Y') {
            $("#mat_creation_form_table :input").each(function () {
                var textid = $(this).attr("id");
                var textval = "";
                if ($("#" + textid).val() !== null && $("#" + textid).val() !== "") {
                    var type = $(this).attr("type");
                    textval = $(this).val();
                    if (type != 'hidden') {
                        if (textval != null && textval != '') {
                            textval = textval.toUpperCase();
                        }
                    }
                }
                if (textid != null && textid != 'CREATE_DATE') {
                    rowData[textid] = textval;
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
                        rowData[columnsArray[i]] = hiddenVal;
                    }
                }
            });
        } else {
            var selectedIndex = 0;
            var selectedRowIndexes = $('#' + gridId).jqxGrid('getselectedrowindexes');
            console.log("selectedRowIndexes:::" + selectedRowIndexes);
            if (selectedRowIndexes != null && selectedRowIndexes.length == 1) {
                if (selectedRowIndexes[0] != -1) {
                    selectedIndex = selectedRowIndexes[0];
                } else {
                }
                var rowData = $('#' + gridId).jqxGrid('getrowdata', selectedIndex);
            }

        }

        try {
            var recordNo = rowData['RECORD_NO'];
            var reqNo = rowData['REQ_NUMBER'];
            var instance = rowData['INSTANCE'];
            var plant = rowData['BUSINESS_UNIT'];
            var erpNo = rowData['ERP_NO'];
            getHtmlContentBasedOnQueryPopUp('What you would like to see about this Record', 'BOMHierarchy',
                    'BOMHIERARCHY', 'H', titleMessage, popupwidth, popupheight, 'N', bomType, recordNo, reqNo, instance, plant, '', '', '', '', '', erpNo);
        } catch (ex) {

        }

    } catch (e) {

    }
}


function callOpenTextIntegration(gridId, intFlag) {
    try {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var selectedRowData = {};

        if (intFlag == 'S')
        {
            var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
            if (selectedrowindexes.length == 0)
            {
                var message = labelObject['Please Select any Record to process the request'] != null ? labelObject['Please Select any Record to process the request'] : "Please Select any Record to process the request";
                showErrorPopupMessage2(message);
            }
            if (selectedrowindexes.length != 0 & selectedrowindexes.length > 1)
            {
                var message = labelObject['Please Select any one Record to process the request'] != null ? labelObject['Please Select any one Record to process the request'] : "Please Select any one Record to process the request";
                showErrorPopupMessage2(message);
            }

            if (selectedrowindexes.length != 0 & selectedrowindexes.length == 1)
            {
                selectedRowData = ($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]));
                selectedRowData.gridId = gridId;

                var buttonArray = [
                    {
                        text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                        click: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            try {
                                $("#" + gridId).jqxGrid('clearselection');
                                refreshGridData(gridId);

                            } catch (e) {
                                $("#" + gridId).jqxGrid('clearselection');
                                refreshGridData(gridId);
                            }


                        }
                    }
                ];


                try {
                    showLoader();
                    $.ajax({
                        type: "POST",
                        url: 'openTextFileIntegration',
                        dataType: 'html',
                        data: selectedRowData,
                        traditional: true,
                        cache: false,
                        success: function (response) {
                            stopLoader();
                            showButtonPopupMessage(response, buttonArray, 'Message');
                        }, error: function (e) {
                            stopLoader();
                        }
                    });
                } catch (e) {
                    stopLoader();
                }

            }
        }
        if (intFlag == 'M')
        {
            try {
                showLoader();
                $.ajax({
                    type: "POST",
                    url: 'bulkopenTextFilesIntegration',
                    dataType: 'html',
                    data: {
                        limit: '50'
                    },
                    traditional: true,
                    cache: false,
                    success: function (response) {
                        stopLoader();
                        showButtonPopupMessage(response, buttonArray, 'Message');
                    }, error: function (e) {
                        stopLoader();
                    }
                });
            } catch (e) {
                stopLoader();
            }
        }

    } catch (e) {
        stopLoader();
    }

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
                            showLoader();
                            $.ajax({
                                type: "POST",
                                dataType: 'json',
                                url: "formData",
                                cache: false,
                                data: {
                                    items: JSON.stringify(items),
                                    data: JSON.stringify(rowData)
                                },
                                // async: false,
//                                data: paramsData,
                                traditional: true,
                                cache: false,
                                success: function (response) {
                                    stopLoader();
                                    if (response != null && response != '') {
                                        var form = response['formStr'];
                                        $('#itemFormData').html("");
                                        $('#itemImagescarouselData').html("");
                                        try {
                                            var hrefColumn1 = response['hrefColumn'];
                                            if (hrefColumn1 != null
                                                    && hrefColumn1 != ''
                                                    && hrefColumn1 != undefined) {
                                                var hrefColumn = hrefColumn1;
                                            }

                                        } catch (er) {

                                        }
                                        var DuplCheckEnableflag = response['ssDuplCheckEnableFlag'];
                                        var panellist = response['panellist'];
                                        $("#ssDuplCheckEnableFlag").val(DuplCheckEnableflag);
                                        $("#hrefColumn").val(hrefColumn);


                                        $('#itemFormData').html(form);
                                        $(".materialBasketClass").show();
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
                                                    stopLoader();
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

                                                        }
                                                    } else {
                                                        imagestr = "<div>No Images Feteched for Selected Record</div>";
                                                        $('#itemImagescarouselData').html("");
                                                        $('#itemImagescarouselData').html(imagestr);
                                                    }
                                                    stopLoader();
                                                },
                                                error: function (e) {
                                                    console.log(e);
                                                    imagestr = "<div>No Images Feteched for Selected Record</div>";
                                                    $('#itemImagescarouselData').html("");
                                                    $('#itemImagescarouselData').html(imagestr);
                                                    stopLoader();
                                                }
                                            });
                                        } catch (e) {
                                            console.log(e)
                                            stopLoader();
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
//                                            zIndex: 90000,
                                            resizeable: true,
                                            open: function () {
                                                $('#accdiv').append(response['accForm'])
                                                $('.viewClassDiv').removeClass('active');
                                                $('.viewClassBasketDiv').removeClass('active');
                                                $('.viewGridDiv').removeClass('active');
                                                $('.viewGridBasketDiv').removeClass('active');
//            $("#hintImageID").show();
                                                $("#hintImageID").attr('onclick', 'productInnerPageGuideIntro()');
                                                //$(".searchIconsList").hide();
                                                //$(".searchResultsList").hide();
                                                // $('#thirdDxpSplitter').jqxSplitter({width: '100%', height: '100%', orientation: 'vertical', splitBarSize: 0, panels: [{size: 0}]});
                                                $(".accordian").accordion({
                                                    theme: 'energyblue',
                                                    collapsible: true,
                                                    heightStyle: "content",
                                                    active: false,
                                                    autoHeight: false,
                                                    animate: 300
                                                });
                                                $('.searchResultMaterialResults').show();
                                                $('.accordian h3').bind('click', function () {
                                                    var self = this;
                                                    setTimeout(function () {
                                                        var theOffset = $(self).offset();
                                                        $('body,html').animate({scrollTop: theOffset.top - 40});
                                                    }, 310); // ensure the collapse animation is done
                                                });
                                                $("#CLASS_TERM").val(data['TERM']);
                                                if (operationName == 'Extend') {

                                                    searchExtend();
                                                } else if (operationName == 'delete') {

                                                    deleteRequest();
                                                } else if (operationName == 'UnDelete') {

                                                    undeleteRequest();
                                                } else if (operationName == 'Change') {

                                                    newChangeRequest();
                                                }
//            validWorkflow();

                                                saveOldPanelData();
                                                firstPanelShowFlag = false;


                                                validWorkflow();
                                                $("#charAccordianbtnID").draggable({
                                                    containment: "body",
                                                    start: function () {
                                                        $(this).addClass('disableClickAction').addClass('startDragging').removeClass('stopedDragging')   // invenMngmnt.js


                                                    },
                                                    stop: function () {
                                                        $(this).removeClass('startDragging').addClass('stopedDragging');
                                                        setTimeout(function () {
                                                            $("#charAccordianbtnID").removeClass('disableClickAction');
                                                        }, 400);

                                                    }
                                                });
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
                                                var matchcount = 0;
                                                var Accordiangrid = "";
                                                var gridid = "";
                                                $("#accordion").on("accordionbeforeactivate", function (event, ui) {
                                                    var privioustabid = $("#SelectedCurrentTabId").val();
                                                    var oldDataFlag = false;
                                                    var tableName = "";
                                                    if (privioustabid != null && privioustabid.indexOf('ATTACHMENTS') < 0) {
                                                        if (!executed) {
                                                            var tabId = (globalTabId != null && globalTabId.indexOf('ERP_SAP') < 0) ? globalTabId : globalErpTab;
                                                            if (tabId != null && tabId != undefined) {
                                                                if (tabId != null && tabId != undefined) {
                                                                    $("#SelectedCurrentTabId").val(tabId);
                                                                }
                                                                tableName = privioustabid;
                                                                if (erpglobalId != null && erpglobalId.indexOf('ERP_SAP')) {
                                                                    $("#previousCurrentTabId").val(erpglobalId);

                                                                }

                                                                var jsonOBJ = {};
                                                                jsonOBJ.feildIds = [];
                                                                jsonOBJ.feildValues = [];
                                                                var matchedcount = 0;
                                                                var dataView = $("#" + tableName + "_Update").attr("data-view");

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
                                                                        if (gridIdHiddenValue == 'INSERT' && matchedCount == 0) {
                                                                            matchedCount = 1;
                                                                        }
                                                                    }
                                                                } else if (dataView == "TABLE-VIEW") {
                                                                    selectedDataArray = gridOperation("update", tableName);
                                                                    if (selectedDataArray != 0) {
                                                                        matchedCount = 1;
                                                                    }
                                                                } else if (dataView == "GRID-VIEW") {

                                                                    selectedDataArray = gridOperation("update", tableName);
                                                                    if (selectedDataArray != 0) {
                                                                        matchedCount = 1;
                                                                    }

                                                                }//if 


                                                                if (matchedCount > 0) {
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
                                                                var oldTabId = $(ui.oldHeader).attr('id');
                                                                var newTabId = $(ui.newHeader).attr('id');
                                                                var TabId = (oldTabId != null) ? oldTabId : newTabId;
                                                                var dataOnclick = $("#" + TabId).attr('data-onclick');
                                                                if (dataOnclick != null && dataOnclick.indexOf("_OLD") > -1) {
                                                                    oldDataFlag = true;
                                                                    var firstregRormID = $("#" + TabId).next().attr('id');
                                                                    var firstregRormIDNum = firstregRormID.substring(7, firstregRormID.length);
                                                                    var secondregRormIDNum = +firstregRormIDNum + +1;
                                                                    var secondregRormID = "regRorm" + secondregRormIDNum;
                                                                }
                                                                if (tabId != null && tabId != undefined && tabId == tableName) {
                                                                    changeflag = false;
                                                                }
                                                                if (changeflag) {
                                                                    if (oldDataFlag) {
                                                                        $("#" + secondregRormID).addClass("accordionContentShow");
                                                                    }
                                                                    if (accordionSwitchflag) {
                                                                        event.preventDefault();
                                                                    }
                                                                    if (selectedDataArray.length != 0 && dataView != "FORM-VIEW") {
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
                                                                                        var newIndex = $(ui.newHeader).index('h3');
                                                                                        updaterecordData(selectedDataArray, tableName, "update", "", "", "", newIndex, tabId);
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
                                                                    } else if (dataView == "FORM-VIEW" && matchedCount > 0) {
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
                                                                                        var newIndex = $(ui.newHeader).index('h3');
                                                                                        updaterecordData("", tableName, "update", "", "", "", newIndex, tabId);
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

                                                                    } else {
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
                                                            }
                                                        }
                                                    }
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
                                    stopLoader();
                                    sessionTimeout(e);
                                }
                            });
                        }
                    }
                }
            }
        }
    } catch (es) {
        stopLoader();
        sessionTimeout(es);
    }
    stopLoader();
}

function getPreviousRecordFormData(selectingrowindex, gridRowsCount, clusterparam) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    var parentgridId = $("#parentgridId").val();
    var clusterparam = {};
    //var clusterparam = JSON.parse($("#clusterparam").val());
    //var clusterparamStr = JSON.stringify(clusterparam);
    var clusterparamStr = $("#clusterparam").val();
    if (selectingrowindex != null) {
        selectingrowindex = parseInt((selectingrowindex - 1));
    }
    if (gridRowsCount != null && gridRowsCount != '' && selectingrowindex != null && selectingrowindex != '' && selectingrowindex == -1) {
        var results = "No previous record available to navigate";
        showErrorPopupMessage(results);
    } else {
        getFormDatawithImagecarousel(clusterparamStr, selectingrowindex);
    }
    //  }
}

function getNextRecordFormData(selectingrowindex, gridRowsCount, clusterparam) {
    var labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    var parentgridId = $("#parentgridId").val();
    //var clusterparam = JSON.parse($("#clusterparam").val());
    //var clusterparamStr = JSON.stringify(clusterparam);
    var clusterparamStr = $("#clusterparam").val();
    if (selectingrowindex != null) {
        selectingrowindex = parseInt((selectingrowindex + 1));
    }
    if (gridRowsCount != null && gridRowsCount != '' && selectingrowindex != null && selectingrowindex != '' && parseInt(gridRowsCount) == (parseInt(selectingrowindex))) {
        var results = "No next record available to navigate";
        showErrorPopupMessage(results);
    } else {
        getFormDatawithImagecarousel(clusterparamStr, selectingrowindex);
    }
    //  }
}

function saveFormDatawithImage() {
    //("moldJSON:::Save click");
    // save(true);
    labelObject = {};
    var resultArray = registerValidation();
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    if (resultArray != null && Object.keys(resultArray).length == 0) {
        SaveorUpdateFormDatawithImage(true, 'Save', '');
    } else {
        for (var textIdKey in resultArray) {
            //allErrors
            console.log(":::::::::#error_" + textIdKey);
            //$("#dis" + resultArray[i]).html("Should not be null.");
            $("#dis" + textIdKey).html(resultArray[textIdKey]);
            $("#dis" + textIdKey).show();
        }
    }
}

function SaveorUpdateFormDatawithImage(messageFlag, controlType, type) {
    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
    }
    var errorCount = 0;
    var saveResult = false;
    if (errorCount == 0) {
        var basicDataJSON = {};
        //if (topPannelValidation())
        //  {
        var updateJSON = {};
        panalData = {};
        var lowercaseFields = $("#lowercaseFields").val();
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
            //                  jsonOBJ.ids.push(textid.toLowerCase());
            if (textid != null && textid != 'CREATE_DATE' && textid != 'CREATE_BY') {
                panalData[textid] = textval;
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
                    panalData[columnsArray[i]] = hiddenVal;
                    //                        panalData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                }
            }
        });
        if (type == 'RE-EVALUATION') {
            panalData['RE_EVALUATION_IND'] = 'Y';
            panalData['SOURCE'] = 'CREATE';
        }
        var panaloldData = {};
        panaloldData = JSON.parse($("#formpanaloldData").val());
        alert("basicDataJSON::::" + JSON.stringify(formpanaloldData));
        var url = "";
        var jsonString = "";
        updateJSON.old = panaloldData;
        updateJSON.new = panalData;
        console.log("updateJSON:::" + JSON.stringify(updateJSON));
        jsonString = JSON.stringify(updateJSON);
        var panelId = $("#panelId").val();
        var baskettype = $("#baskettypehid").val();
        var resultArray = registerValidation();
        //  alert("resultArray:::"+resultArray);
        if (resultArray != null && Object.keys(resultArray).length == 0) {
            $(".allErrors").hide();
            //                $("#wait").css("display", "block");  /* ramu commented */
            //                $("body").css("pointer-events", "none");
            $.ajax({
                type: "post",
                traditional: true,
                dataType: 'html',
                url: "panalUpdate",
                cache: false,
                //                    async: false,
                async: true,
                data: {
                    'jsonData': jsonString,
                    'baskettype': baskettype,
                    'panelId': panelId,
                    'formId': $('#objectid').val(),
                    'controlType': controlType
                },
                complete: function (result) {
                    stopLoader();
                },
                success: function (result) {
                    alert(result);
                    stopLoader();
                    if (messageFlag) {
                        console.log("FIRST:::result::" + result);
                        var res = "";
                        var qstr = {};
                        var jsonData = {};
                        var jsonObj = JSON.parse(result);
                        result = jsonObj.Message;
                        var flag = jsonObj.messageFlag;
                        var dialogSplitMessage = dialogSplitIconText(result, flag);
                        var baskettype1 = $('#baskettypehid1').val();
                        stopLoader();
                        $("#dialog").html(dialogSplitMessage);
                        $("#dialog").dialog({
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
                                        stopLoader();
                                        $(this).html("");
                                        $(this).dialog("close");
                                        $(this).dialog("destroy");
                                        if (flag) {
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
                                                });
                                                $('#formpanaloldData').val(JSON.stringify(panaloldData));
                                            } catch (ea) {
                                            }
                                        }
                                    }
                                }],
                            open: function () {
                                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                                $(".visionHeaderMain").css("z-index", "999");
                                $(".visionFooterMain").css("z-index", "999");
                                stopLoader();
                            },
                            beforeClose: function (event, ui) {
                                $(".visionHeaderMain").css("z-index", "99999");
                                $(".visionFooterMain").css("z-index", "99999");
                                stopLoader();
                                //                                    location.reload();
                            }
                        });
                    } else {
                        saveResult = true;
                    }
                    saveResult = true;
                },
                error: function (e) {
                    stopLoader();
                    sessionTimeout(e);
                }
            });
        } else {
            for (var textIdKey in resultArray) {
                //allErrors
                console.log(":::::::::#error_" + textIdKey);
                //$("#dis" + resultArray[i]).html("Should not be null.");
                $("#dis" + textIdKey).html(resultArray[textIdKey]);
                $("#dis" + textIdKey).show();
            }
            stopLoader();
        }
    }
    return saveResult;
}



function downloadContentFromId(id, contenttype, ifileName, ifileIdData) {
    var xmlContent = document.getElementById(id).innerText;
    var contenttype = '';
    var fileName = '';
    if (ifileName != null && ifileName != '' && ifileName != undefined) {
        fileName = ifileName;
        if (ifileName != null && ifileName != '' && ifileName != undefined) {
            fileName = ifileIdData + "_" + ifileName;
        }
    } else {
        fileName = 'iDXPExportedData';
    }
    if (contenttype != null && contenttype != '' && contenttype != undefined && contenttype == 'XML') {
        contenttype = 'application/' + contenttype;
        fileName = fileName + '.' + contenttype;
    } else {
        contenttype = 'application/docx';
        fileName = fileName + '.docx';
    }

    var blob = new Blob([xmlContent], {type: contenttype});
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function showGridXMLJSONData(gridId, viewName, Colname, whereclauseCols, multiFlag, contenttype, fileIdCol, fileName, seperatortag, spaceFlag, popupwidth, popupheight, titleMessage) {
    var rowData = {};
    var rowArr = [];
    var fileIdData = "";
    var dialogwidth = '800';
    var dialogheight = '500';
    var tmessage = titleMessage != null ? titleMessage : contenttype.toUpperCase() + " Viewer";
    tmessage = labelObject[tmessage] != null ? labelObject[tmessage] : tmessage;
    if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
    {
        dialogwidth = popupwidth;
    }
    if (popupheight != null && popupheight != "" && popupheight != 'undefined')
    {
        dialogheight = popupheight;
    }
    var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
    if (multiFlag != null && multiFlag != '' && multiFlag != undefined && multiFlag == 'Y') {
        if (selectedrowindexes.length != 0) {
            for (var i = 0; i < selectedrowindexes.length; i++) {
                var rowDataval = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                rowArr.push(rowDataval);
            }
            rowData = rowArr;
            fileIdData = "multipleItems"
        } else {
            showMesg("Please select a row to Process");
            return;
        }
    } else {
        var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
        if (selectedrowindexes.length > 1) {
            showMesg("Please select only single row to Process");
            return;
        }

        if (selectedrowindexes.length < 1) {
            showMesg("Please select a row to Process");
            return;
        }

        var selectedrowindex = $('#' + gridId).jqxGrid('selectedrowindex');
        if (selectedrowindex != null && selectedrowindex != "" && selectedrowindex != undefined && selectedrowindex != -1) {
            var rowDataval = $('#' + gridId).jqxGrid('getrowdata', selectedrowindex);
            rowArr.push(rowDataval);
            try {
                if (fileIdCol != null && fileIdCol != '' && fileIdCol != undefined && multiFlag != 'undefined') {
                    fileIdData = rowDataval['fileIdCol']
                } else {
                    fileIdData = "";
                }
            } catch (e) {
                fileIdData = "";
            }

        } else {
            showMesg("Please select a row to Process");
            return;
        }
    }

    if (rowData != null
            && !jQuery.isEmptyObject(rowData)
            && rowData.length != 0) {
        showLoader();
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            url: 'getGenericXMLJSONDataSheet',
            traditional: true,
            cache: false,
            async: true,
            data: {
                'items': JSON.stringify(rowData),
                'viewName': viewName,
                'Colname': Colname,
                'whereclauseCols': whereclauseCols,
                'multiFlag': multiFlag,
                'contenttype': contenttype
            },
            success: function (result) {
                stopLoader();
                if (result != null && result != '') {
                    var xmlJSONHtml = result['xmlJSONHtml'];
                    var xmlJSONContent = result['xmlJSONContent'];
                    if (xmlJSONContent != null && xmlJSONContent != '' && xmlJSONContent != 'undefined' && xmlJSONContent != undefined) {

                        if (contenttype != null && contenttype != '' && contenttype != undefined && contenttype == 'xml') {
                            xmlJSONContent = getformatedXml(xmlJSONContent, true, ' ', seperatortag, spaceFlag);
                        } else if (contenttype != null && contenttype != '' && contenttype != undefined && contenttype == 'json') {
                            xmlJSONContent = getformatedJson(xmlJSONContent);
                        }

                    } else {
                        xmlJSONContent = 'Unable to retrive ' + contenttype.toUpperCase() + ' Data';
                    }
                    var title = "<div id='showXMLJSONHeaderNameAndExport' style='display:flex;gap:10px;'><div id='showXMLJSONHeaderText'>" + tmessage + "</div><div style='display:flex;align-items: center'><div id='XMLJSONdownload" + gridId + "' ><input title='Download' id='xmljsonxport" + gridId + "' onclick=downloadXMLJSONSheet('xmljsonxport" + gridId + "','" + contenttype + "','" + fileName + "','" + fileIdData + "') class='exportClass visionSearchExportButton visionGridExportButton visionExportInput visionSearchExportButtonUpdatedImagClass' type='button' width='-2px' disabled='disabled'></div></div></div> ";
                    $("#messagedialog5").html(xmlJSONHtml);
                    $("#messagedialog5").dialog({
                        title: title,
                        modal: true,
                        height: dialogheight,
                        minWidth: dialogwidth,
                        maxWidth: 'auto',
                        fluid: true,
                        draggable: true,
                        buttons: [{
                                text: 'Ok',
                                click: function () {
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
                            }],
                        open: function () {
//                            $(this).closest(".ui-dialog").css("z-index", "9999");
//                            $(".ui-dialog-title").html(title);
                            $("#genericXMLJSONReport").html(xmlJSONContent);
                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                            $(".visionHeaderMain").css("z-index", "999");
                            $(".visionFooterMain").css("z-index", "999");
                        },
                        beforeClose: function (event, ui) {
                            $(this).html("");
                            try {
                                $(this).dialog("destroy");
                            } catch (e) {
                            }
                            $(".visionHeaderMain").css("z-index", "99999");
                            $(".visionFooterMain").css("z-index", "99999");
                        }
                    })

                    $("#xmljsonexport" + gridId).attr("disabled", false);
                }
            },
            error: function (e) {
                stopLoader();
//            showErrorPopupMessage("Unable to retrive Data Sheet", "Message");
            }
        });
        stopLoader();
    } else {
        stopLoader();
        var dialogSplitMessage = dialogSplitIconText("Unable to retrive " + contenttype.toUpperCase() + " Data", "H");
        showErrorPopupMessage(dialogSplitMessage, "Message", "350", "150");
    }
}

function getformatedJson(jsonStr, indent) {
    var obj = JSON.parse(jsonStr);

    var seperator = 2;

    try {
        if (indent != null && indent != '' && indent != undefined) {
            seperator = indent;
        } else {
            seperator = 2;
        }
    } catch (e) {
        seperator = 2;
    }

    var str = JSON.stringify(obj, undefined, seperator);
    var json = str;
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'idxpjsonviewnumber';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'idxpjsonviewkey';
            } else {
                cls = 'idxpjsonviewstring';
            }
        } else if (/true|false/.test(match)) {
            cls = 'idxpjsonviewboolean';
        } else if (/null/.test(match)) {
            cls = 'idxpjsonviewnull';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}


function getformatedXml(xml, colorize, indent, seperatortag, spaceFlag) {
    function esc(s) {
        return s.replace(/[-\/&<> ]/g, function (c) {
            return c == ' ' ? '&nbsp;' : '&#' + c.charCodeAt(0) + ';';
        });
    }
    var seperator = "in_item_spec";
    if (seperatortag != null && seperatortag != '' && seperatortag != undefined) {
        seperator = seperatortag;
    } else {
        seperator = "in_item_spec";
    }

    var sm = '<div class="idxpxmlviewxmt">', se = '<div class="idxpxmlviewxel">',
            sd = '<div class="idxpxmlviewxdt">', sa = '<div class="idxpxmlviewxat">',
            tb = '<div class="idxpxmlviewxtb">', tc = '<div class="idxpxmlviewxtc">',
            ind = indent || '  ', sz = '</div>', tz = '</div>', re = '', is = '', ib, ob, at, i;

    if (!spaceFlag) {
        ind = '';
    } else {
        ind = indent || '  ';
    }

    if (!colorize)
        sm = se = sd = sa = sz = '';
    xml.match(/(?<=<).*(?=>)|$/s)[0].split(/>\s*</).forEach(function (nd) {
        ob = ('<' + nd + '>').match(/^(<[!?\/]?)(.*?)([?\/]?>)$/s);
        ib = ob[2].match(/^(.*?)>(.*)<\/(.*)$/s) || ['', ob[2], ''];
        at = ib[1].match(/^--.*--$|=|('|").*?\1|[^\t\n\f \/>"'=]+/g) || [''];
        if (ob[1] == '</')
            is = is.substring(ind.length);

        re += tb + tc + esc(is) + tz + tc + sm + esc(ob[1]) + sz + se + esc(at[0]) + sz;
        for (i = 1; i < at.length; i++)
            re += (at[i] == "=" ? sm + "=" + sz + sd + esc(at[++i]) : sa + ' ' + at[i]) + sz;
        re += ib[2] ? sm + esc('>') + sz + sd + esc(ib[2]) + sz + sm + esc('</') + sz + se + ib[3] + sz : '';
        re += sm + esc(ob[3]) + sz + tz + tz;
        if (ob[1] == "</" && (ob[2].trim() === "in_item_spec" || ob[2].trim() === seperator)) {
            re += '<div style="border-bottom: 1px solid #ccc; margin: 10px 0;"></div>';
        }
        if (ob[1] + ob[3] + ib[2] == '<>')
            is += ind;
    });
    return re;
}

function callSAPBNACIntegration(gridId) {


    if (gridId != null) {
        var gridInitParamObjStr = $("#" + gridId).attr("data-gridinitparamobj", JSON.stringify(gridInitParamObj));
    }
}




function callSAPBNACApis(gridId, configDataparams) {
    try {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        var selectedRowData = {};
        var selectedRowDataArray = [];

        var selectedrowindexes = $('#' + gridId).jqxGrid('selectedrowindexes');
        if (selectedrowindexes.length == 0)
        {
            var message = labelObject['Please Select any Record to process the request'] != null ? labelObject['Please Select any Record to process the request'] : "Please Select any Record to process the request";
            showErrorPopupMessage2(message);
        }
//            if (selectedrowindexes.length != 0 & selectedrowindexes.length > 1)
//            {
//                var message = labelObject['Please Select any one Record to process the request'] != null ? labelObject['Please Select any one Record to process the request'] : "Please Select any one Record to process the request";
//                showErrorPopupMessage2(message);
//            }

        if (selectedrowindexes.length != 0)
        {

            for (var i = 0; i < selectedrowindexes.length; i++) {
                selectedRowData = $('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[i]);
                selectedRowDataArray.push(selectedRowData);
            }
//            rowData = rowArr;
//                selectedRowData = ($('#' + gridId).jqxGrid('getrowdata', selectedrowindexes[0]));
//                selectedRowData.gridId = gridId;

            var buttonArray = [
                {
                    text: labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok',
                    click: function () {
                        $(this).html("");
                        $(this).dialog("close");
                        try {
                            $("#" + gridId).jqxGrid('clearselection');
                            refreshGridData(gridId);

                        } catch (e) {
                            $("#" + gridId).jqxGrid('clearselection');
                            refreshGridData(gridId);
                        }


                    }
                }
            ];


            try {
                showLoader();
                $.ajax({
                    type: "POST",
                    url: 'pprSAPBNACIntegration',
                    dataType: 'html',
                    data: {
//                'rowData': JSON.stringify(selectedRowData),
                        'rowData': JSON.stringify(selectedRowDataArray),
                        'configData': configDataparams,
                    },
                    traditional: true,
                    cache: false,
                    success: function (response) {
                        stopLoader();
                        showButtonPopupMessage(response, buttonArray, 'Message');
                    }, error: function (e) {
                        stopLoader();
                    }
                });
            } catch (e) {
                stopLoader();
            }

        }



    } catch (e) {
        stopLoader();
    }

}


function generateVisualizationcharts(dashbordname, dashbordTittle, lang, domain, roleId) {
    try {
        labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {

        }
        setCrossIconsTabs(event, 'dxpAnalyticsTab', 'dxpAnalyticsContent');
        $("#dxpAnalyticsContent").html("");
        $("#dxpAnalyticsContent").hide();
        var chartSectionHtml = '<section class="visualizationDashboardView" style="display:none">'
                + '<div class="container-fluid"><div class="row">'
                + '<div class="col-md-12 chartSelectionsDropDown">'
                + '<div id="iVisionSalectHomeCardData" class="iVisionsalectHomeCardData"></div>'
                + '<div id="OptionListData" class="visionVisualizeHomePageDropdown"></div>'
                + '<div id="visionHomePageSlicer" class="visionHomePageSlicerClass"></div>'
                + '<div id="visionFilterData" class="visionFilterData"></div>'
                + '<div id="visionChartDownloadId" class="visionChartDownloadClass"></div>'
                + '<div id="visionHomeKanbanView" class="visionHomeKanbanViewClass"></div></div>'
                + '<div class="col-12">'
                + '<div id="visionDashBoardHomeFilterId" class="dashboardFilterColumnClass row" style="display:none"></div>'
                + '<div id="visionCardView" class="visionCardViewClass"></div></div></div>'
                + '<div class="container-fluid" id ="visualizecharts">'
                + '<div id="visualizechartId" class="visionVisualizeHomePageCharts row"></div></div></div>'
                + '</section>';

        $("#defaultShowCardsId").html('');
        $("#mainDxpSplitter").hide();
        $(".visualizationDashboardView").css("display", "block");
        $("#selectDasbordHomeCard").css("display", "none");
        $(".visualizationDashboardView").remove();
        $("#dxpAnalyticsContent").append(chartSectionHtml);
        showSelectedTabContent(null, 'dxpAnalyticsTab', 'dxpAnalyticsContent', 'InfoGraphics', 'N');
        if ($("#dxpTabs").is(":visible")) {

        } else {
            toggleTabsAndMenus(event);
        }
        $('#dxpMain').show();
        var htmlData = $("#intelliSenseHomePageOptions").html();
        if (htmlData == undefined) {
            htmlData = '<span class="dashBoardType" id="dashBoardType">'
                    + '<select id ="infographHomeSelectBox" class="iVisionHomeSelectBox form-control" onchange=\'getSelectBoxResults("G")\'>'
                    + '<option value="CHARTS">InfoGraphics</option>'
//                    + '<option value="PILOG_SOCIAL_MEDIA">PiLog Media & News Analysis</option>'
                    + '<option value="HOME">Default Home Page</option></select></span>';
        }
        $("#iVisionSalectHomeCardData").html(htmlData);
        getHomePageChartDiv();
        setTimeout(function () {
            $("#mainintelliSenseInnerSelectBoxId").html(htmlData);
            $(".chartSelectionsDropDown").show();
            $("#mainintelliSenseSelectBoxId").show();
            $("#isMainPageDropdownBoxes").show();
            $("#pilogHomePageCreateCard").show();
            $("#dxpAnalyticsContent").remove();
            $('#intellisenseHomeSelectBox option').removeAttr('selected').filter('[value=CHARTS]').attr('selected', true)
            showLoader();
            getVisualizationchart(dashbordname, dashbordTittle, lang, domain, roleId);
//            $('#dxpMain').hide();
//            showSelectedTabContent(null, 'dxpAnalyticsTab', 'dxpAnalyticsContent', 'InfoGraphics', 'N');
//            if ($("#dxpTabs").is(":visible")) {
//
//                } else {
//                    toggleTabsAndMenus(event);
//                }
        }, 200);

    } catch (e) {
        stopLoader();
    }

}
function getredirectAppUrl(domain, role, redirectUrl, target, subscriptionflag, title, userIdflag, method) {
    try {
        //showLoader();
        let labelObject = {};
        try {
            labelObject = JSON.parse($("#labelObjectHidden").val());
        } catch (e) {
            // Handle parsing error
        }

        if (subscriptionflag === 'Y') {
            const userName = $("#userName").val();

            // Remove existing form if present
//            const existingForm = document.getElementById("redirectUrlForm");
//            if (existingForm) existingForm.remove();

            try {
                const element = document.getElementById("redirectUrlForm");
                element.remove();
            } catch (es) {
            }


            const csrfToken = $('meta[name="_csrf"]').attr('content')
                    || $('meta[name="csrf-token"]').attr('content');


            const url = new URL(redirectUrl);
//            url.searchParams.append('userId', userName);
//            url.searchParams.append('_csrf', csrfToken);

            // Create hidden iframe for navigation
//            const iframe = document.createElement('iframe');
//            iframe.style.display = 'none';
//            iframe.name = 'hiddenFrame';
//            document.body.appendChild(iframe);
            if (method != null && method != '' && method != undefined) {
            } else {
                method = 'GET';
            }

            const form = document.createElement("form");
            form.setAttribute("id", "redirectUrlForm");
            form.setAttribute("action", url.toString());
            form.setAttribute("method", method);
            form.setAttribute("target", target || "_self");

            if (userIdflag != null && userIdflag != '' && userIdflag != undefined && userIdflag == 'N') {
            } else {
                var field1 = document.createElement("input");
                field1.setAttribute("type", "hidden");
                field1.setAttribute("name", "userId");
                field1.setAttribute("value", userName);
                form.appendChild(field1);
            }


//             var field2 = document.createElement("input");
//            field2.setAttribute("type", "hidden");
//            field2.setAttribute("name", "_csrf");
//            field2.setAttribute("value", csrfToken);
//            form.appendChild(field2);

            document.body.appendChild(form);

            // Trigger form submission after brief delay
            setTimeout(() => {
                form.submit();
                setTimeout(() => {
//                    document.body.removeChild(iframe);
                    document.body.removeChild(form);
                }, 1000);
            }, 50);
        } else {
            // Existing subscription message handling
            const modalContent = `
                <div id="tyestds">
                    <img src="/images/subscription.png" style="width:50px;" 
                         class="subcriptionclass themeModeDark"/>
                </div>
                <span id="test"><h6>Subscription not available for ${title}</h6></span>
            `;

            const modalObj = {
                title: 'Message',
                body: modalContent,
                buttons: [{
                        text: 'Close',
                        isCloseButton: true
                    }]
            };

            createModal("dataDxpSplitterValue", modalObj);
            $("#dataDxpSplitterValue")
                    .addClass("subscriptionMesgPop")
                    .find(".modal-dialog").addClass("modal-md");
        }
    } catch (e) {
        console.error("Redirect Error:", e);
    } finally {
        // setTimeout(stopLoader, 1000);
    }
}
function getUI5FilterGridForm(gridId, orderByColumn, comptype, gridResultObj) {
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
                        $("#gridUI5Filter_" + gridId).html("");
                        $("#gridUI5Filter_" + gridId).css("display", "none");
                    } catch (e) {
                        console.log(e);
                    }
                    var result = filterFormObj['result']

                    if (result != null && result != '' && result != undefined) {
                        var filterColumns = filterFormObj['filterColumns'];
                        $("#" + gridId).attr("data-gridfilterColumnsData", filterColumns);
                        $("#gridUI5Filter_" + gridId).html(result);
                        $("#gridUI5Filter_" + gridId).css("display", "block");
                        $("#importfiltergridcriteria").html(filterFormObj['importButtonDiv']);
                        if (comptype == 'MOCR_TREE')
                        {
                            $("#" + gridId + "_0").css("display", "none");
                            $("#gridUI5Filter_" + gridId + " input").on('keydown', function (e) {
                                if (e.key === 'Enter') {
                                    e.preventDefault(); // Prevent the default form submission
                                    getUI5FilterTreeResults(gridId); // Trigger the click on focused input
                                }
                            });
                        }
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
//                                                minDate: $("#pprtbmin" + i).datepicker("getDate")
                                                    });
                                        } else {
                                        }
                                    });
                        }

                        try {
                            var lovColumns = filterFormObj['lovColumns'];
                            if (lovColumns != null && !jQuery.isEmptyObject(lovColumns)) {
                                for (var lovColumnanme in lovColumns) {
                                    if (lovColumnanme != null && lovColumnanme != '') {
                                        var comboBoxOptions = {
                                            searchMode: 'contains',
                                            width: '165px',
                                            height: '23px',
                                            dropDownHeight: '100px',
                                            autoComplete: true,
                                        };
                                        if (lovColumns[lovColumnanme] == true) {
                                            comboBoxOptions['multiSelect'] = true;
                                            comboBoxOptions['checkboxes'] = true;
                                            // multiSelect: true,
                                        }
                                        $("#" + lovColumnanme).jqxComboBox(comboBoxOptions);
                                        $("#" + lovColumnanme).on('select', function (event) {
                                            var args = event.args;
                                            if (args) {
                                                // index represents the item's index.                          
                                                var index = args.index;
                                                var item = args.item;
                                                if (item != null) {
                                                    var label = item.label;
                                                    var value = item.value;
                                                    if (value != null && value != '') {
//                                                       var filterGridFlagCount = $("#" + lovColumnanme + "_jqxComboBox").attr("data-filtergridflag-count"); //data-filtergridflag-count
                                                        var operatorId = "operator_" + lovColumnanme;
                                                        $("#" + operatorId).val("IN");
                                                    }
                                                }


                                            }
                                        });
                                    }
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
                            $("#uiGridIconsDivId").remove();
                            $('.fioriGridSearchwrap [title="Show/Hide Filter"]').remove();
                            $("#gridUI5Filter_" + gridId).html("");
                            $("#gridUI5Filter_" + gridId).css("display", "none");
                        } catch (e) {
                            console.log(e);
                        }
                    }
                } else {

                    try {
                        $("#gridUI5Filter_" + gridId).html("");
                        $("#gridUI5Filter_" + gridId).css("display", "none");
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
            $("#gridUI5Filter_" + gridId).html("");
            $("#gridUI5Filter_" + gridId).css("display", "none");
        } catch (e) {
            console.log(e);
        }
        //stopLoader();
    }
}

//function toggleUI5FilterGridForm(gridId) {
//    try {
//        var div = document.getElementById("gridUI5Filter_" + gridId);
//        if (div.style.display === "none") {
//            div.style.display = "block";  // Show the div
//        } else {
//            div.style.display = "none";   // Hide the div
//            try {
//                $("#" + gridId).jqxGrid('updatebounddata');
//            } catch (e) {
//            }
//            try {
//                $("#" + gridId).jqxGrid('clearselection');
//            } catch (e) {
//            }
//        }
//    } catch (e) {
//
//    }
//}
function toggleUI5FilterGridForm(gridId) {
    try {
        var div = document.getElementById("gridUI5Filter_" + gridId);
        if (div.style.display === "none") {
            $('.fioriGridSearchwrap [title="Show/Hide Filter"]').css('transform', 'rotate(-90deg)');
            $("#gridUI5Filter_" + gridId).show(500);
        } else {
            $("#gridUI5Filter_" + gridId).hide(500);
            try {
                $('.fioriGridSearchwrap [title="Show/Hide Filter"]').css('transform', 'rotate(90deg)');
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
}
function clearUI5FilterGridSearch(selectedGridId) {
    try {
        if (selectedGridId != null && selectedGridId != '') {
            var i = 0;
            var paramArray = [];
            var filterColumns = $("#" + selectedGridId).attr("data-gridfilterColumnsData");
            filterColumns = filterColumns + ",FREESEARCHFIELD";
            var filterColumnsArray = filterColumns.split(",");

            for (var i = 0; i < filterColumnsArray.length; i++)
            {
                var colname = filterColumnsArray[i];
                var textid = selectedGridId + "_" + colname;
                $("#" + textid).val("");
                clearText(textid);
                $("#" + textid).text("");
                $("#" + textid).prop("readonly", false).val("");

//               if ($("#" + textid).prop("readonly") ){
//                 $("#" + textid).prop("readonly", false).val("");
//                  $("#" + textid).prop("readonly", true);
//               }
                $("#" + textid + "_MIN").hide();
                $("#" + textid + "_MIN").css("display", "none");
                $("#" + textid + "_MAX").hide();
                $(".filtergridtd_range").hide();
                $(".filtergridtd_range").css("display", "none");
                $("#" + textid + "_MAX").css("display", "none");
                $("#" + textid + "_TO").hide();
                $("#operator_" + selectedGridId + "_" + colname).prop('selectedIndex', 0);

            }
            try {
                $("#" + selectedGridId + "_filter_columns").remove();
                $("#" + selectedGridId).append("<input type='hidden' id='" + selectedGridId + "_filter_columns' value=''/>");
            } catch (e) {
            }

            try {
                $("#" + selectedGridId).jqxGrid('updatebounddata');
            } catch (e) {
            }

            try {
                $("#" + selectedGridId).jqxGrid('clearselection');
            } catch (e) {
            }
        }

    } catch (e) {
        stopLoader();
    }

}


function getUI5FilterGridResults(selectedGridId, selectedGridIndex, selectedTabId, selectedColumn, isImport) {
    try {
        showLoader();
        if (selectedGridId != null && selectedGridId != '') {
            var i = 0;
            var paramArray = [];
            var filterColumns = $("#" + selectedGridId).attr("data-gridfilterColumnsData");

            var filterColumnsArray = filterColumns.split(",");


            if (isImport != null && isImport != '' && isImport == 'Y') {
                var paramObj = {};
                paramObj.column = selectedColumn;
                paramObj.operator = $("#operator_" + selectedGridId + "_" + selectedColumn).val();
                paramObj.symbol = $.trim($("#operator_" + selectedGridId + "_" + selectedColumn).find('option:selected').text());
                paramObj.isImport = isImport;
                paramArray.push(paramObj);
            } else {
                for (var i = 0; i < filterColumnsArray.length; i++)
                {
                    var isAllow = false;
                    var paramObj = {};
                    var colname = filterColumnsArray[i];
                    var filterColId = selectedGridId + "_" + colname;
                    var value = $("#" + selectedGridId + "_" + colname).val();
                    var dataRange = $("#" + selectedGridId + "_" + colname).attr('data-range');
                    var dataColType = $("#" + selectedGridId + "_" + colname).attr('data-coltype');

                    if (dataColType == 'L') {
                        value = "";
                        var selectBoxValue = $("#" + selectedGridId + "_" + colname).jqxComboBox('getSelectedItems');
                        if (selectBoxValue != null) {
                            for (var j = 0; j < selectBoxValue.length; j++)
                            {
                                value += selectBoxValue[j].value;
                                if (j != selectBoxValue.length - 1) {
                                    value += ",";
                                }
                            }
                        }
                    }


                    var minvalue = $("#" + selectedGridId + "_" + colname + "_MIN").val();
                    var maxvalue = $("#" + selectedGridId + "_" + colname + "_MAX").val();

                    if (value != null && value != '') {
                        isAllow = true;
                    } else if (dataRange != null && dataRange == 'Y'
                            && ((minvalue != null && minvalue != '')
                                    || (maxvalue != null && maxvalue != ''))
                            ) {
                        isAllow = true;
                    }

                    var type = $("#" + selectedGridId + "_" + colname).attr("type");

                    if (type != null && type == 'checkbox') {
                        if ($("#" + selectedGridId + "_" + colname).is(':checked')) {
                            isAllow = true;
                        } else {
                            isAllow = false;
                        }
                    }

                    if (isAllow) {

                        paramObj.column = colname;

                        if (dataColType == 'L') {
                            var value = "";
                            var selectBoxValue = $("#" + selectedGridId + "_" + colname).val();
                            if (selectBoxValue != null) {
                                for (var j = 0; j < selectBoxValue.length; j++)
                                {
                                    value += selectBoxValue[j].value;
                                    if (j != selectBoxValue.length - 1) {
                                        value += ",";
                                    }
                                }
                            }
                            paramObj.value = value;
                        } else
                        if (type != null && type == 'checkbox') {
                            var textval = "N";
                            if ($("#" + selectedGridId + "_" + colname).is(':checked')) {
                                textval = "Y";
                            } else {
                                textval = "N";
                            }
                            paramObj.value = textval;
                        } else {
                            paramObj.value = $.trim($("#" + selectedGridId + "_" + colname).val());
                        }
                        paramObj.operator = $("#operator_" + selectedGridId + "_" + colname).val();
                        paramObj.symbol = $.trim($("#operator_" + selectedGridId + "_" + colname).find('option:selected').text());
                        paramObj.selectNum = i;
                        paramObj.dataColType = dataColType;

                        paramObj.rangeFlag = dataRange;
                        if (dataRange != null && dataRange == 'Y') {
                            paramObj.minvalue = minvalue;
                            paramObj.maxvalue = maxvalue;
                        } else {
                            paramObj.minvalue = "";
                            paramObj.maxvalue = "";
                        }
                        paramArray.push(paramObj);
                    }


                }
            }


//        if (true) {
            if (paramArray != null && paramArray.length > 0) {

                $("#" + selectedGridId + "_filter_columns").remove();
                $("#" + selectedGridId + "_filter_columns_flag").remove();
                $("#" + selectedGridId).append("<input type='hidden' id='" + selectedGridId + "_filter_columns' value=''/>");
                $("#" + selectedGridId).append("<input type='hidden' id='" + selectedGridId + "_filter_columns_flag' value='Y'/>");
                $("#" + selectedGridId + "_filter_columns").val(JSON.stringify(paramArray));

                try {
                    $("#" + selectedGridId).jqxGrid('updatebounddata');
                } catch (e) {
                }

                try {
                    $("#" + selectedGridId).jqxGrid('clearselection');
                } catch (e) {
                }



            } else {
                var dialogSplitMessage = dialogSplitIconText((labelObject['Please provide at least one value to Search'] != null ? labelObject['Please provide at least one value to Search'] : 'Please provide at least one value to Search') + ".", "Y");
                stopLoader();
                $("#dialog1").html("");
                $("#dialog1").append(dialogSplitMessage);
                $("#dialog1").dialog({resizable: false,
                    title: labelObject['Message'] != null ? labelObject['Message'] : 'Message',
                    modal: true,
                    height: 140,
                    width: 330,
                    fluid: true,
                    buttons: [
                        {
                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                            click: function () {
                                stopLoader();
//                            $("#dialog1").empty();
//                            $("#dialog1").dialog('close');

                                try {
                                    $(this).html("");
                                    $(this).dialog("close");
                                    $(this).dialog("destroy");
                                } catch (e) {
                                }
                                try {
                                    $("#dialog1").html("");
                                } catch (e) {
                                }
                                try {
                                    $("#dialog1").dialog("close");
                                } catch (e) {
                                }
                                try {
                                    $("#dialog1").dialog("destroy");
                                } catch (e) {
                                }

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

    } catch (e) {
        stopLoader();
    }

}
function getEnterKeyUI5FilterGridResults(event, selectedGridId, selectedGridIndex, selectedTabId) {
    if (event.which == 13) {
//        showLoader();
        getUI5FilterGridResults(selectedGridId, selectedGridIndex, selectedTabId);
//        stopLoader();
    }
}
function showgridUI5browsepopup(selectedGridId) {
    $("#" + selectedGridId + "importreccount").attr("data-isSearch", "N");
    $("#" + selectedGridId + "importreccount").html("");


    labelObject = {};
    try {
        labelObject = JSON.parse($("#labelObjectHidden").val());
    } catch (e) {
        labelObject = [];
    }



    $("#importfiltergridcriteria").show();
    $("#importfiltergridcriteria").dialog({resizable: false,
        title: labelObject['Message'] != null ? labelObject['Message'] : 'Import Search',
        modal: true,
        height: 220,
        minWidth: 500,
        maxWidth: 'auto',
        fluid: true,
        buttons: [
            {
                text: (labelObject['Search'] != null ? labelObject['Search'] : 'Search'),
                click: function () {
                    //  stopLoader();
                    var selectedColumn = $("#" + selectedGridId + "browsecolsddw").val();
                    var importreccount = $("#" + selectedGridId + "importreccount").attr("data-issearch");
                    if (importreccount == 'Y') {
                        var selectedTabId = $("#tabid").val();
                        var gridIdStr = $("#gridIdStr").val();
                        var selectedIndex = 0;

                        if (gridIdStr != null && gridIdStr != '') {
                            var gridIdsArray = gridIdStr.split(",");
                            if (gridIdsArray != null && gridIdsArray.length != 0) {
                                selectedIndex = gridIdsArray.indexOf(selectedGridId);
                            }
                        } else {
                            selectedIndex = $("#" + selectedGridId + "importbutton").attr("data-selectedgridindex");
                            if (!(selectedIndex != null && selectedIndex != '')) {
                                selectedIndex = 0;
                            }
                        }
                        if (!(selectedTabId != null && selectedTabId != '')) {
                            //data-tabId
                            selectedTabId = $("#" + selectedGridId + "importbutton").attr("data-tabid");
                        }
                        console.log("selectedTabId:::" + selectedTabId + ":::selectedIndex:::" + selectedIndex);
                        try {
                            getUI5FilterGridResults(selectedGridId, selectedIndex, selectedTabId, selectedColumn, "Y")
                        } catch (er) {

                        }


                    }
                    $("#importfiltergridcriteria").hide();
                    $("#importfiltergridcriteria").dialog('close');

                }
            },
            {
                text: (labelObject['Cancel'] != null ? labelObject['Cancel'] : 'Cancel'),
                click: function () {
                    $("#importfiltergridcriteria").hide();
                    $("#importfiltergridcriteria").dialog('close');
//                    $("#browsecols").val("");
//                    $("#importedcols").text('');
//                    $("#importreccount").remove();
//                    $("#importedcols").removeAttr('data-recordcount');
//                    var colName = $("#importedcols").attr('data-colname');
//                    $("#" + colName).find('select').attr('data-staged', 'N');

                }
            }
        ],

        open: function () {
            //  $(this).closest(".ui-dialog").addClass("dialogzindex");
            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
            $(this).closest(".ui-dialog").addClass("visionSearchImportDialog");
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
function getPopUpChildGrid(gridparams) {

    try {
        try {
            $("#" + childgridId).jqxGrid('destroy');
        } catch (es) {

        }
        $("#messagedialog4").html("");
        $("#itemObjDefaultValues").html("");
        $(this).dialog("close");
        $(this).dialog("destroy");
        $("#" + childgridId).html("");
    } catch (e) {

    }
    if (gridparams != null && gridparams != '' && gridparams != undefined)
    {
        gridparams = JSON.parse(gridparams);
        var orgChartParams = [];
        var paramArray = [];
        var gridId = gridparams['gridId'];
        var childgridId = gridparams['childgridId'];
        var popupheight = gridparams['height'];
        var popupwidth = gridparams['width'];
        var WhereCondition = gridparams['whereCond'];
        var defaultValuesFieldStr = gridparams['defaultValuesFields'];
        var titleMessage = gridparams['titleMessage'];
        var formFlag = gridparams['formFlag'];
        var dialogwidth = '500';
        var dialogheight = '500';
        var tmessage = 'Grid';

        if (titleMessage != null && titleMessage != "" && titleMessage != 'undefined')
        {
            tmessage = titleMessage;
            tmessage = tmessage.replace("_", " ");
        }
        if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
        {
            dialogwidth = popupwidth;
        }
        if (popupheight != null && popupheight != "" && popupheight != 'undefined')
        {
            dialogheight = popupheight;
        }

        console.log();
        var message = "";
        var totalRowIndex = 0;
        var selectedRowsData = [];
        var indexes = [];
        var data = {};
        try {
            if (formFlag != null && formFlag != "" && formFlag != 'undefined' && formFlag != "F" && gridId != null && gridId != "" && gridId != 'undefined') {
                indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
                totalRowIndex = indexes.length;
            } else {
                indexes = [];
                totalRowIndex = 0;
            }

        } catch (e) {
            indexes = [];
            totalRowIndex = 0;
        }





        if (formFlag != null && formFlag != "" && formFlag != 'undefined' && formFlag == "F") {
            totalRowIndex = 1;
        }

        if (totalRowIndex != null && totalRowIndex <= 0) {
            message = "Please select any row to fetch Data";
        } else if (totalRowIndex != null && totalRowIndex > 1) {
            message = "Not Allowed More than One Rows";
        }

        if (totalRowIndex != null && totalRowIndex == 1) {
            var count = 0;
            for (var i = count; i < totalRowIndex; i++) {

                if (formFlag != null && formFlag != "" && formFlag != 'undefined' && formFlag != "F" && gridId != null && gridId != "" && gridId != 'undefined')
                {
                    var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
                }

                if (formFlag != null && formFlag != "" && formFlag != 'undefined' && (formFlag == "Y" || formFlag == "F"))
                {


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

                            data[textid] = textval;
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
                                data[columnsArray[i]] = hiddenVal;
                            }

                        }

                    });
                }



                selectedRowsData.push(data);
            }



            if (WhereCondition != null && !jQuery.isEmptyObject(WhereCondition)) {
                var columnarr = WhereCondition.split(",")
                for (var i = 0; i < columnarr.length; i++) {

                    var paramObj = {};
                    var whereconditionColumn = columnarr[i];
                    if (whereconditionColumn != null && whereconditionColumn != '' && whereconditionColumn != undefined
                            && whereconditionColumn.indexof(":") > -1) {
                        var whereconditionColumnarr = whereconditionColumn.split(":")

                        if (whereconditionColumnarr.length > 3) {

                            var wherecol = whereconditionColumnarr[0];
                            var coltype = whereconditionColumnarr[1];
                            var colvalue = whereconditionColumnarr[2];
                            var colOp = whereconditionColumnarr[3];

                            paramObj['column'] = wherecol;

                            if (coltype != null && coltype != '' && coltype != undefined && coltype == 'F') {
                                paramObj.value = colvalue;
                            } else if (coltype != null && coltype != '' && coltype != undefined && coltype == 'R') {
                                paramObj.value = selectedRowsData[0][wherecol];
                            } else {
                                paramObj.value = selectedRowsData[0][wherecol];
                            }

                            if (colOp != null && colOp != '' && colOp != undefined) {
                                paramObj['operator'] = colOp;
                            } else {
                                paramObj['operator'] = '=';
                            }

                            paramArray.push(paramObj);

                        } else if (whereconditionColumnarr.length > 2) {

                            var wherecol = whereconditionColumnarr[0];
                            var coltype = whereconditionColumnarr[1];
                            var colvalue = whereconditionColumnarr[2];

                            paramObj['column'] = wherecol;
                            paramObj['operator'] = '=';

                            if (coltype != null && coltype != '' && coltype != undefined && coltype == 'F') {
                                paramObj.value = colvalue;
                            } else if (coltype != null && coltype != '' && coltype != undefined && coltype == 'R') {
                                paramObj.value = selectedRowsData[0][wherecol];
                            } else {
                                paramObj.value = selectedRowsData[0][wherecol];
                            }


                            paramArray.push(paramObj);


                        } else if (whereconditionColumnarr.length > 1) {
                            var wherecol = whereconditionColumnarr[0];
                            var coltype = whereconditionColumnarr[1];

                            paramObj['column'] = wherecol;
                            paramObj['operator'] = '=';

                            if (coltype != null && coltype != '' && coltype != undefined && coltype == 'F') {
                                paramObj.value = '';
                            } else if (coltype != null && coltype != '' && coltype != undefined && coltype == 'R') {
                                paramObj.value = selectedRowsData[0][wherecol];
                            } else {
                                paramObj.value = selectedRowsData[0][wherecol];
                            }
                            paramArray.push(paramObj);
                        } else {
                            paramObj.value = selectedRowsData[0][whereconditionColumnarr[0]];
                            paramObj['column'] = whereconditionColumn
                            paramObj['operator'] = '=';
                            paramArray.push(paramObj);
                        }


                    } else {
                        paramObj.value = selectedRowsData[0][whereconditionColumn];
                        paramObj['column'] = whereconditionColumn
                        paramObj['operator'] = '=';
                        paramArray.push(paramObj);
                    }
//              paramObj.value = selectedRowsData[0][whereconditionColumn];

                }

            }

            var itemObjDefaultValuesDataObj = {};

            if (defaultValuesFieldStr != null && !jQuery.isEmptyObject(defaultValuesFieldStr)) {
                var defaultValuesFieldarr = defaultValuesFieldStr.split(",");
                for (var i = 0; i < defaultValuesFieldarr.length; i++) {
                    var defaultValuesFieldColumn = defaultValuesFieldarr[i].split(":")[0];
                    var defaultValueColumn = defaultValuesFieldarr[i].split(":")[1];
//              paramObj.value = selectedRowsData[0][whereconditionColumn];
                    itemObjDefaultValuesDataObj[defaultValuesFieldColumn] = selectedRowsData[0][defaultValueColumn];
                }

            }

            var itemObjDefaultValuesDataObjStr = JSON.stringify(itemObjDefaultValuesDataObj);
            $("#itemObjDefaultValues").val(itemObjDefaultValuesDataObjStr);
            $("#messagedialog4").dialog({resizable: false,
                title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
                modal: true,
                height: dialogheight,
                minWidth: dialogwidth,
//                    maxWidth: 'auto',
                fluid: true,
                buttons: [{
                        text: (labelObject['Close'] != null ? labelObject['Close'] : "Close"),
                        click: function () {
//                              $(this).html("");
                            try {
                                try {
                                    $("#" + childgridId).jqxGrid('destroy');
                                } catch (es) {

                                }
                                $("#messagedialog4").html("");
                                $("#itemObjDefaultValues").html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                $("#" + childgridId).html("");
                            } catch (e) {

                            }

                        }

                    }],
                open: function () {
                    $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                    $(".visionHeaderMain").css("z-index", "999");
                    $(".visionFooterMain").css("z-index", "999");
                    getnestedGrid(childgridId, paramArray, 0, 'messagedialog4', '', 'N');
                },
                beforeClose: function (event, ui)
                {
                    $("#messagedialog4").html("");
                    $("#itemObjDefaultValues").html("");
                    $(".visionHeaderMain").css("z-index", "99999");
                    $(".visionFooterMain").css("z-index", "99999");
                }
            });

        } else {
            $("#dialog").html(message);
            $("#dialog").dialog({resizable: false,
                title: (labelObject["message"] != null ? labelObject["message"] : "message"),
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                fluid: true,
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
function showsendMailPopup(toEMail, ccEmail, emailbody, emailSubject, titleMessage, popupwidth, popupheight, sucessMessage, bccEmail, bccEmailFlag) {

    try {
        var dialogwidth = '300';
        var dialogheight = '500';
        var tmessage = 'Send Email';
        var emailPopupHtml = "";
        var sucessMessageStr = "Email Notification Sent Sucessfully";

        if (sucessMessage != null && sucessMessage != "" && sucessMessage != 'undefined')
        {
            sucessMessageStr = sucessMessage;
            sucessMessageStr = sucessMessageStr.replaceAll("_", " ");
        }
        if (titleMessage != null && titleMessage != "" && titleMessage != 'undefined')
        {
            tmessage = titleMessage;
            tmessage = tmessage.replaceAll("_", " ");
        }
        if (!(toEMail != null && toEMail != "" && toEMail != 'undefined'))
        {
            toEMail = "";
        }
        if (!(ccEmail != null && ccEmail != "" && ccEmail != 'undefined'))
        {
            ccEmail = "";
        }
        if (!(bccEmail != null && bccEmail != "" && bccEmail != 'undefined'))
        {
            bccEmail = "";
        }
        if (!(emailSubject != null && emailSubject != "" && emailSubject != 'undefined'))
        {
            emailSubject = "";
        } else if (emailSubject != null && emailSubject != "" && emailSubject != 'undefined') {
            emailSubject = emailSubject.replaceAll("_", " ");
        }
        if (!(emailbody != null && emailbody != "" && emailbody != 'undefined'))
        {
            emailbody = "";
        }
        if (popupwidth != null && popupwidth != "" && popupwidth != 'undefined')
        {
            dialogwidth = popupwidth;
        }
        if (popupheight != null && popupheight != "" && popupheight != 'undefined')
        {
            dialogheight = popupheight;
        }


        emailPopupHtml = '<div class="sendemailpopup" id="sendemailpopup">';
//        emailPopupHtml = emailPopupHtml+'<div><span id="sendemailpopupTo">To </span><span id="sendemailpopupToinput"><input type="text" id="sendemailpopupToEmail" name="sendemailpopupToEmail" required></span></div>';
//        emailPopupHtml = emailPopupHtml+'<div><span id="sendemailpopupCC">CC </span><span id="sendemailpopupCCinput"><input type="text" id="sendemailpopupCCEmail" name="sendemailpopupCCEmail" required></span></div>';

        emailPopupHtml = emailPopupHtml + '<div><label id="sendemailpopupTo">To</label ><input type="text" id="sendemailpopupToEmail" name="sendemailpopupToEmail" required></div>';
        emailPopupHtml = emailPopupHtml + '<div><label id="sendemailpopupCC">CC</><input type="text" id="sendemailpopupCCEmail" name="sendemailpopupCCEmail" required></div>';


        if (bccEmailFlag != null && bccEmailFlag != "" && bccEmailFlag != 'undefined' && bccEmailFlag == 'Y')
        {
//         emailPopupHtml = emailPopupHtml+'<div><span id="sendemailpopupBCC">BCC </span><span id="sendemailpopupBCCinput"><input type="text" id="sendemailpopupBCCEmail" name="sendemailpopupBCCEmail" required></span></div>';
            emailPopupHtml = emailPopupHtml + '<div><label id="sendemailpopupBCC">BCC</label><input type="text" id="sendemailpopupBCCEmail" name="sendemailpopupBCCEmail" required></div>';

        }
        emailPopupHtml = emailPopupHtml + '<div><label id="sendemailpopupSubject">Subject</label><input type="text" id="sendemailpopupSubjectEmail" name="sendemailpopupSubjectEmail" value = "' + emailSubject + '" required></div>';


        emailPopupHtml = emailPopupHtml + '<div><label id="sendemailpopupFixedEmailBody">Email Text</label><div class = "sendemailpopupEmailBodyFixed" id="sendemailpopupEmailBodyFixed" name="sendemailpopupEmailBodyFixed" required readonly>' + emailbody + '</div></div>';
        emailPopupHtml = emailPopupHtml + '<div><label id="sendemailpopupBody">Replace Required Email Text</label><textarea id="sendemailpopupEmailBody" name="sendemailpopupEmailBody"></textarea></div>';
        emailPopupHtml = emailPopupHtml + '</div>';

        $("#messagedialog3").html(emailPopupHtml);
//             try {
//                    ("#sendemailpopupToEmail").val(toEMail);
//                    ("#sendemailpopupCCEmail").val(ccEmail);
//                    ("#sendemailpopupBCCEmail").val(bccEmail);
//                    ("#sendemailpopupSubjectEmail").val(emailSubject);
//                    ("#sendemailpopupEmailBodyFixed").val(emailbody);
//                } catch (e) {
//
//                }

        $("#messagedialog3").dialog({resizable: false,
            title: (labelObject[tmessage] != null ? labelObject[tmessage] : tmessage),
            modal: true,
            height: dialogheight,
            minWidth: dialogwidth,
//                    maxWidth: 'auto',
            fluid: true,
            buttons: [{
                    text: (labelObject['Send Email'] != null ? labelObject['Send Email'] : "Send Email"),
                    click: function () {
//                              $(this).html("");
                        try {
                            try {

                                toEMail = $("#sendemailpopupToEmail").val();
                                ccEmail = $("#sendemailpopupCCEmail").val();
                                bccEmail = $("#sendemailpopupBCCEmail").val();
                                emailSubject = $("#sendemailpopupSubjectEmail").val();
                                var emailbodyFixed = $("#sendemailpopupEmailBodyFixed").html();
                                var emailbodyStr = $("#sendemailpopupEmailBody").val();
                                var errorMessage = "";

                                if (emailbodyStr != null && emailbodyStr != "" && emailbodyStr != 'undefined') {
                                    emailbodyStr = emailbodyStr.replace(/\n/g, "<br>");
                                    emailbody = emailbodyStr;
                                } else if (emailbodyFixed != null && emailbodyFixed != "" && emailbodyFixed != 'undefined') {
                                    emailbody = emailbodyFixed;
                                } else {
                                    emailbody = '';
                                }


                                if (!(toEMail != null && toEMail != "" && toEMail != 'undefined'))
                                {
                                    errorMessage = "To Email";
                                }

                                if (!(emailSubject != null && emailSubject != "" && emailSubject != 'undefined'))
                                {

                                    if (errorMessage != null && errorMessage != "" && errorMessage != 'undefined') {
                                        errorMessage = errorMessage + ", Email Subject";
                                    } else {
                                        errorMessage = "Email Subject";
                                    }

                                    emailSubject = "";
                                }
                                if (!(emailbody != null && emailbody != "" && emailbody != 'undefined'))
                                {
                                    if (errorMessage != null && errorMessage != "" && errorMessage != 'undefined') {
                                        errorMessage = errorMessage + ", Email Body";
                                    } else {
                                        errorMessage = "Email Body";
                                    }
                                }

                                if (errorMessage != null && errorMessage != "" && errorMessage != 'undefined') {
                                    errorMessage = errorMessage + " should not be empty.";
                                    showErrorPopupMessage(errorMessage, "Message");

                                } else {
                                    showLoader();
                                    $.ajax({
                                        type: "POST",
                                        url: 'sendEmailfromPopup',
                                        data: {
                                            emailText: emailbody,
                                            emailSubject: emailSubject,
                                            toEmail: toEMail,
                                            ccEmail: ccEmail,
                                            bccEmail: bccEmail,
                                        },
                                        traditional: true,
                                        cache: false,
                                        success: function (result) {
                                            stopLoader();
                                            var response = "";
                                            if (result != null && result != '' && errorMessage != 'undefined' && result == 'success') {
                                                response = sucessMessageStr + ".";


                                            } else
                                            if (result != null && result != '' && result.indexOf("Fail") > -1) {
                                                response = "Fail to Sent Email.";
                                            } else
                                            {
                                                response = result;
                                            }

                                            try {
                                                showErrorPopupMessage(response, "Message");
                                                $("#messagedialog3").dialog("close");
                                                $("#messagedialog3").dialog("destroy");
                                            } catch (l) {

                                            }


                                        },
                                        error: function (e)
                                        {
                                            stopLoader();
                                        }

                                    });



                                }
                            } catch (es) {
                                stopLoader();
                            }

                        } catch (e) {
                            stopLoader();

                        }

                    }

                }],
            open: function () {
                $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
                $(".visionHeaderMain").css("z-index", "999");
                $(".visionFooterMain").css("z-index", "999");
            },
            beforeClose: function (event, ui)
            {
                $("#messagedialog3").html("");
                $(".visionHeaderMain").css("z-index", "99999");
                $(".visionFooterMain").css("z-index", "99999");
            }
        });




    } catch (et) {
    }

}


function sendRemediationNotification(gridId, mainFormGridId, objectName, titleMessage, emailSubject, popupwidth, popupheight, sucessMessage, bccEmailFlag, reqType, replaceCols, impactCol, toMailCol, ccMailCol, objectType) {
    try {
        var openObjects = '';
        var totalRowIndex = 0;
        var selectedRowsData = [];
        var indexes = [];
        var openObjectdata = '';
        var basicIds = [];
        var basicData = {};
        var userID = '';
        var objectTypeStr = '';

        $("#mat_creation_form_table :input").each(function () {
            var textid = $(this).attr("id");
            var displayAttr = $("#" + textid).attr("display");
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
            basicIds.push(textid);
            if (textid != null && textid != 'CREATE_DATE') {
                basicData[textid] = textval;

            }

            if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
                var columnNames = $("#" + textid).val();
                var columnsArray = columnNames.split(",");

                var hiddenIds = textid.split("HIDDEN_");
                var hiddenVal = $("#" + hiddenIds[1]).val();
                for (var i = 0; i < columnsArray.length; i++) {
                    basicIds.push(columnsArray[i]);
                    if (hiddenVal != null) {
                        hiddenVal = hiddenVal.toUpperCase();
                    }
                    basicData[columnsArray[i]] = hiddenVal;
//                    basicData[columnsArray[i]] = encodeURIComponent(hiddenVal);
                }
            }

        });
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

        console.log("jsonString::::" + JSON.stringify(basicData));

        try {
            userID = ('#ssUsername').val();

            if (!(userID != null && userID != '' && userID != undefined)) {
                userID = '';
            }
        } catch (e) {
        }

        if (!(objectType != null && objectType != '' && objectType != objectType)) {
            objectTypeStr = 'ERP';
        } else {
            objectTypeStr = objectType;
        }
        try {
            var toEmailIds = '';
            var ccEmailIds = '';
            var cnt = 0;
            var toId = '';
            var ccId = '';
            indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
            totalRowIndex = indexes.length;

            if (totalRowIndex != null && totalRowIndex < 1) {
                showErrorPopupMessage("Please select any row to Process", "Message");
                return;
            }

            for (var i = 0; i < totalRowIndex; i++) {
                cnt = cnt + 1;
                var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
                openObjectdata = '';
                toId = '';
                ccId = '';
                openObjectdata = data [impactCol];

                if (toMailCol != null && toMailCol != '' && toMailCol != undefined) {
                    toId = data [toMailCol];
                }
                if (ccMailCol != null && ccMailCol != '' && ccMailCol != undefined) {
                    ccId = data [ccMailCol];
                }


                if (openObjectdata != null && openObjectdata != '' && openObjectdata != undefined) {
                    openObjects = openObjects + openObjectdata + '<br>';
                }

                if (toId != null && toId != '' && toId != undefined) {
                    if (cnt > 1) {
                        toEmailIds = toEmailIds + ',' + toId;
                    } else {
                        toEmailIds = toId;
                    }
                }
                if (ccId != null && ccId != '' && toId != ccId) {
                    if (cnt > 1) {
                        ccEmailIds = ccEmailIds + ',' + ccId;
                    } else {
                        ccEmailIds = ccId;
                    }
                }

            }

            if (!(toEmailIds != null && toEmailIds != '' && toEmailIds != undefined)) {
                toEmailIds = '';
            }
            if (!(ccEmailIds != null && ccEmailIds != '' && ccEmailIds != undefined)) {
                ccEmailIds = '';
            }


        } catch (e) {

        }

        if (openObjects != null && openObjects != '' && openObjects != undefined) {

            var emailBody = 'Good Day,<br><br>This is to notify you that ' + objectTypeStr + ' No: ERP_NO is currently undergoing a ' + reqType + ' request.<br><br>'
            emailBody = emailBody + 'During this process, the following impacted/open objects have been identified:<br><br>';
            emailBody = emailBody + '' + openObjects + '<br><br>';
            emailBody = emailBody + 'Please review the impacted/open objects and proceed with necessary remediation measures, if required.<br><br>';
            emailBody = emailBody + 'Thank you<br>' + userID + '';

            if (replaceCols != null && replaceCols != '' && replaceCols != undefined) {

                var columnsArray = replaceCols.split(",");

                for (var i = 0; i < columnsArray.length; i++) {
                    var colName = columnsArray[i];
                    var coldata = basicData[colName]

                    emailSubject = emailSubject.replaceAll(colName, coldata);
                    emailBody = emailBody.replaceAll(colName, coldata);

                }
            }
            if (emailSubject != null && emailSubject != '' && emailSubject != undefined && emailBody != null && emailBody != '' && emailBody != undefined) {
                showsendMailPopup(toEmailIds, ccEmailIds, emailBody, emailSubject, titleMessage, popupwidth, popupheight, sucessMessage, '', bccEmailFlag);
            }
        }
    } catch (e) {

    }
}

function changeRequestAfterRemediation(reqType) {

//        var success_msg = $("#Change").attr('data-success-conf');
//        var conf_mesg = $("#Change").attr('data-conf');
    var baskettype = $('#baskettypehid').val();
    console.log("panaloldData::::" + JSON.stringify(panaloldData));
    var basicIds = [];
    var basicData = {};

    $("#mat_creation_form_table :input").each(function () {
        var textid = $(this).attr("id");
        var displayAttr = $("#" + textid).attr("display");
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
        basicIds.push(textid);
        if (textid != null && textid != 'CREATE_DATE') {
            basicData[textid] = textval;

        }

        if (textid != null && textid.lastIndexOf("HIDDEN") > -1) {
            var columnNames = $("#" + textid).val();
            var columnsArray = columnNames.split(",");

            var hiddenIds = textid.split("HIDDEN_");
            var hiddenVal = $("#" + hiddenIds[1]).val();
            for (var i = 0; i < columnsArray.length; i++) {
                basicIds.push(columnsArray[i]);
                if (hiddenVal != null) {
                    hiddenVal = hiddenVal.toUpperCase();
                }
                basicData[columnsArray[i]] = hiddenVal;
//                    basicData[columnsArray[i]] = encodeURIComponent(hiddenVal);
            }

        }


    });
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
    console.log("panaloldData::::" + JSON.stringify(panaloldData));
    basicData['NEW_PURCHASE_ORG'] = basicData['PURCHASE_ORG'];
    basicData['NEW_COMPANY_CDE'] = basicData['COMPANY_CDE'];
    basicData['NEW_DISTRIBUTION_CHANNEL'] = basicData['DISTRIBUTION_CHANNEL'];
    basicData['NEW_SALES_ORG'] = basicData['SALES_ORG'];
    delete basicData['PLANT'];
    delete basicData['PURCHASE_ORG'];
    delete basicData['COMPANY_CDE'];
    delete basicData['INSTANCE'];
    delete basicData['DISTRIBUTION_CHANNEL'];
    delete basicData['SALES_ORG'];
    basicData['PLANT'] = panaloldData['PLANT'];
    basicData['PURCHASE_ORG'] = panaloldData['PURCHASE_ORG'];
    basicData['COMPANY_CDE'] = panaloldData['COMPANY_CDE'];
    basicData['INSTANCE'] = panaloldData['INSTANCE'];
    basicData['DISTRIBUTION_CHANNEL'] = panaloldData['DISTRIBUTION_CHANNEL'];
    basicData['SALES_ORG'] = panaloldData['SALES_ORG'];
    var folowuppanel = '';
    var folowupgridId = '';
    folowupgridId = $('#FOLLOWUP_GRID_ID').val();
    folowuppanel = $('#FOLLOWUP_PANEL_ID').val();
    basicData['FOLLOWUP_PANEL_ID'] = folowuppanel;
    basicData['FOLLOWUP_GRID_ID'] = folowupgridId;
    basicData['controlType'] = "Change";
    var role = $("#rolehid").val();
    var jsonString = JSON.stringify(basicData);
    console.log("jsonString::::" + JSON.stringify(jsonString));
    var requestNotAllowedStatusesObj = {};
    var domainwiseNotAllowedStatusesObj = {};
    var processNotAllowedStatusesStr = '';


    try {

        requestNotAllowedStatusesObj = JSON.parse($("#requestProcessNotAllowedStatuses").val());

    } catch (e) {
        requestNotAllowedStatusesObj = {};
    }

    if (requestNotAllowedStatusesObj != null && !jQuery.isEmptyObject(requestNotAllowedStatusesObj)) {
        var currentDomain = $("#currentDomain").val();

        if (currentDomain != null && currentDomain != '' && currentDomain != undefined) {

            domainwiseNotAllowedStatusesObj = requestNotAllowedStatusesObj[currentDomain];
            if (domainwiseNotAllowedStatusesObj != null && !jQuery.isEmptyObject(domainwiseNotAllowedStatusesObj)) {
                processNotAllowedStatusesStr = domainwiseNotAllowedStatusesObj ['CHANGE'];
                var checkstatus = basicData['O_STATUS'] || basicData['STATUS'];
                if (processNotAllowedStatusesStr != null && processNotAllowedStatusesStr != ''
                        && processNotAllowedStatusesStr != undefined
                        && checkstatus != null && checkstatus != '' && checkstatus != undefined &&
                        processNotAllowedStatusesStr.indexOf(checkstatus) > -1
                        ) {

                    var notAllowedStatusArray = processNotAllowedStatusesStr.split(";");
                    for (var i = 0; i < notAllowedStatusArray.length; i++) {
                        var notAllowedStatuschkStr = notAllowedStatusArray[i];

                        if (notAllowedStatuschkStr != null && notAllowedStatuschkStr != '' && notAllowedStatuschkStr != 'undefined'
                                && notAllowedStatuschkStr.indexOf(checkstatus) > -1
                                ) {

                            var statusStr = processNotAllowedStatusesStr.split(":")[0];
                            var MessageStr = processNotAllowedStatusesStr.split(":")[1];

                            if (MessageStr != null && MessageStr != ''
                                    && MessageStr != undefined) {
                            } else {
                                MessageStr = "Please note this record is not created in ERP, not allowed to raise Change Request.";

                            }

                            if (MessageStr != null && MessageStr != ''
                                    && MessageStr != undefined) {
                                var dialogSplitMessage = dialogSplitIconText(MessageStr, "H");
                                $("#dialog").html(dialogSplitMessage);
                                $("#dialog").dialog({resizable: false,
                                    title: (labelObject['Message'] != null ? labelObject['Message'] : 'Message'),
                                    modal: true,
                                    height: 'auto',
                                    // commented by Ajay minHeight: 'auto',
                                    minWidth: 370,
                                    maxWidth: 'auto',
                                    fluid: true,
                                    buttons: [{
                                            text: (labelObject['Ok'] != null ? labelObject['Ok'] : 'Ok'),
                                            click: function () {
                                                $(this).html("");
                                                $(this).dialog("close");
                                                $(this).dialog("destroy");
                                            }
                                        }
                                    ],
                                    open: function () {
                                        //  $(this).closest(".ui-dialog").addClass("dialogzindex");
//                                            $(this).closest(".ui-dialog").find(".ui-button").eq(1).addClass("dialogyes");
//                                            $(this).closest(".ui-dialog").find(".ui-button").eq(2).addClass("dialogno");
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

                                return;

                            }



                        }

                    }

                }


            }


        }

    }


    openDocsProceedChangeRequest(jsonString, reqType);
}





